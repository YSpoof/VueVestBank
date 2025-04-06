const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DsnZvwtS.js","./DlAUqK2U.js","./DdjXyrGw.js","./W7FtkHhs.js","./BUFssws_.js","./JgpVltGM.js","./CAZ4PFJW.js","./DhJ_3q_S.js","./lY2vh0az.js","./7XZapJd_.js"])))=>i.map(i=>d[i]);
var Yw=Object.defineProperty;var Xw=(t,e,n)=>e in t?Yw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Wn=(t,e,n)=>Xw(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},ii=[],fn=()=>{},Jw=()=>!1,$r=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),du=t=>t.startsWith("onUpdate:"),Xe=Object.assign,pu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qw=Object.prototype.hasOwnProperty,Ee=(t,e)=>Qw.call(t,e),ae=Array.isArray,ri=t=>Vr(t)==="[object Map]",Pg=t=>Vr(t)==="[object Set]",Zw=t=>Vr(t)==="[object RegExp]",oe=t=>typeof t=="function",Ue=t=>typeof t=="string",Ln=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Og=t=>(Ne(t)||oe(t))&&oe(t.then)&&oe(t.catch),Ng=Object.prototype.toString,Vr=t=>Ng.call(t),eE=t=>Vr(t).slice(8,-1),xg=t=>Vr(t)==="[object Object]",gu=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tE=/-(\w)/g,jt=Ua(t=>t.replace(tE,(e,n)=>n?n.toUpperCase():"")),nE=/\B([A-Z])/g,Us=Ua(t=>t.replace(nE,"-$1").toLowerCase()),Ha=Ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),bl=Ua(t=>t?`on${Ha(t)}`:""),rs=(t,e)=>!Object.is(t,e),lr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Mg=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},sE=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Lg=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let vf;const ja=()=>vf||(vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mu(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ue(s)?aE(s):mu(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ue(t)||Ne(t))return t}const iE=/;(?![^(]*\))/g,rE=/:([^]+)/,oE=/\/\*[^]*?\*\//g;function aE(t){const e={};return t.replace(oE,"").split(iE).forEach(n=>{if(n){const s=n.split(rE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _u(t){let e="";if(Ue(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const s=_u(t[n]);s&&(e+=s+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const lE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cE=fu(lE);function Dg(t){return!!t||t===""}const Fg=t=>!!(t&&t.__v_isRef===!0),Ug=t=>Ue(t)?t:t==null?"":ae(t)||Ne(t)&&(t.toString===Ng||!oe(t.toString))?Fg(t)?Ug(t.value):JSON.stringify(t,Hg,2):String(t),Hg=(t,e)=>Fg(e)?Hg(t,e.value):ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Il(s,r)+" =>"]=i,n),{})}:Pg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Il(n))}:Ln(e)?Il(e):Ne(e)&&!ae(e)&&!xg(e)?String(e):e,Il=(t,e="")=>{var n;return Ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class jg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Bg(t){return new jg(t)}function $g(){return St}let Re;const Cl=new WeakSet;class Vg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&St.active&&St.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cl.has(this)&&(Cl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wf(this),Kg(this);const e=Re,n=Qt;Re=this,Qt=!0;try{return this.fn()}finally{qg(this),Re=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wu(e);this.deps=this.depsTail=void 0,wf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lc(this)&&this.run()}get dirty(){return lc(this)}}let Wg=0,cr,ur;function Gg(t,e=!1){if(t.flags|=8,e){t.next=ur,ur=t;return}t.next=cr,cr=t}function yu(){Wg++}function vu(){if(--Wg>0)return;if(ur){let e=ur;for(ur=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;cr;){let e=cr;for(cr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Kg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qg(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),wu(s),uE(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function lc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Sr))return;t.globalVersion=Sr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!lc(t)){t.flags&=-3;return}const n=Re,s=Qt;Re=t,Qt=!0;try{Kg(t);const i=t.fn(t._value);(e.version===0||rs(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Re=n,Qt=s,qg(t),t.flags&=-3}}function wu(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)wu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function uE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const Yg=[];function fs(){Yg.push(Qt),Qt=!1}function ds(){const t=Yg.pop();Qt=t===void 0?!0:t}function wf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Re;Re=void 0;try{e()}finally{Re=n}}}let Sr=0;class hE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Eu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Re||!Qt||Re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Re)n=this.activeLink=new hE(Re,this),Re.deps?(n.prevDep=Re.depsTail,Re.depsTail.nextDep=n,Re.depsTail=n):Re.deps=Re.depsTail=n,Xg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Re.depsTail,n.nextDep=void 0,Re.depsTail.nextDep=n,Re.depsTail=n,Re.deps===n&&(Re.deps=s)}return n}trigger(e){this.version++,Sr++,this.notify(e)}notify(e){yu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vu()}}}function Xg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Xg(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xo=new WeakMap,Ss=Symbol(""),cc=Symbol(""),Rr=Symbol("");function ct(t,e,n){if(Qt&&Re){let s=Xo.get(t);s||Xo.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Eu),i.map=s,i.key=n),i.track()}}function Cn(t,e,n,s,i,r){const o=Xo.get(t);if(!o){Sr++;return}const l=c=>{c&&c.trigger()};if(yu(),e==="clear")o.forEach(l);else{const c=ae(t),u=c&&gu(n);if(c&&n==="length"){const h=Number(s);o.forEach((d,g)=>{(g==="length"||g===Rr||!Ln(g)&&g>=h)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Rr)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Ss)),ri(t)&&l(o.get(cc)));break;case"delete":c||(l(o.get(Ss)),ri(t)&&l(o.get(cc)));break;case"set":ri(t)&&l(o.get(Ss));break}}vu()}function fE(t,e){const n=Xo.get(t);return n&&n.get(e)}function Ys(t){const e=ye(t);return e===t?e:(ct(e,"iterate",Rr),Zt(t)?e:e.map(yt))}function Tu(t){return ct(t=ye(t),"iterate",Rr),t}const dE={__proto__:null,[Symbol.iterator](){return Sl(this,Symbol.iterator,yt)},concat(...t){return Ys(this).concat(...t.map(e=>ae(e)?Ys(e):e))},entries(){return Sl(this,"entries",t=>(t[1]=yt(t[1]),t))},every(t,e){return En(this,"every",t,e,void 0,arguments)},filter(t,e){return En(this,"filter",t,e,n=>n.map(yt),arguments)},find(t,e){return En(this,"find",t,e,yt,arguments)},findIndex(t,e){return En(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return En(this,"findLast",t,e,yt,arguments)},findLastIndex(t,e){return En(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return En(this,"forEach",t,e,void 0,arguments)},includes(...t){return Rl(this,"includes",t)},indexOf(...t){return Rl(this,"indexOf",t)},join(t){return Ys(this).join(t)},lastIndexOf(...t){return Rl(this,"lastIndexOf",t)},map(t,e){return En(this,"map",t,e,void 0,arguments)},pop(){return Yi(this,"pop")},push(...t){return Yi(this,"push",t)},reduce(t,...e){return Ef(this,"reduce",t,e)},reduceRight(t,...e){return Ef(this,"reduceRight",t,e)},shift(){return Yi(this,"shift")},some(t,e){return En(this,"some",t,e,void 0,arguments)},splice(...t){return Yi(this,"splice",t)},toReversed(){return Ys(this).toReversed()},toSorted(t){return Ys(this).toSorted(t)},toSpliced(...t){return Ys(this).toSpliced(...t)},unshift(...t){return Yi(this,"unshift",t)},values(){return Sl(this,"values",yt)}};function Sl(t,e,n){const s=Tu(t),i=s[e]();return s!==t&&!Zt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const pE=Array.prototype;function En(t,e,n,s,i,r){const o=Tu(t),l=o!==t&&!Zt(t),c=o[e];if(c!==pE[e]){const d=c.apply(t,r);return l?yt(d):d}let u=n;o!==t&&(l?u=function(d,g){return n.call(this,yt(d),g,t)}:n.length>2&&(u=function(d,g){return n.call(this,d,g,t)}));const h=c.call(o,u,s);return l&&i?i(h):h}function Ef(t,e,n,s){const i=Tu(t);let r=n;return i!==t&&(Zt(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,yt(l),c,t)}),i[e](r,...s)}function Rl(t,e,n){const s=ye(t);ct(s,"iterate",Rr);const i=s[e](...n);return(i===-1||i===!1)&&Cu(n[0])?(n[0]=ye(n[0]),s[e](...n)):i}function Yi(t,e,n=[]){fs(),yu();const s=ye(t)[e].apply(t,n);return vu(),ds(),s}const gE=fu("__proto__,__v_isRef,__isVue"),Jg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ln));function mE(t){Ln(t)||(t=String(t));const e=ye(this);return ct(e,"has",t),e.hasOwnProperty(t)}class Qg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?SE:nm:r?tm:em).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ae(e);if(!i){let c;if(o&&(c=dE[n]))return c;if(n==="hasOwnProperty")return mE}const l=Reflect.get(e,n,Ve(e)?e:s);return(Ln(n)?Jg.has(n):gE(n))||(i||ct(e,"get",n),r)?l:Ve(l)?o&&gu(n)?l:l.value:Ne(l)?i?sm(l):Dn(l):l}}class Zg extends Qg{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=us(r);if(!Zt(s)&&!us(s)&&(r=ye(r),s=ye(s)),!ae(e)&&Ve(r)&&!Ve(s))return c?!1:(r.value=s,!0)}const o=ae(e)&&gu(n)?Number(n)<e.length:Ee(e,n),l=Reflect.set(e,n,s,Ve(e)?e:i);return e===ye(i)&&(o?rs(s,r)&&Cn(e,"set",n,s):Cn(e,"add",n,s)),l}deleteProperty(e,n){const s=Ee(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Cn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ln(n)||!Jg.has(n))&&ct(e,"has",n),s}ownKeys(e){return ct(e,"iterate",ae(e)?"length":Ss),Reflect.ownKeys(e)}}class _E extends Qg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const yE=new Zg,vE=new _E,wE=new Zg(!0);const uc=t=>t,wo=t=>Reflect.getPrototypeOf(t);function EE(t,e,n){return function(...s){const i=this.__v_raw,r=ye(i),o=ri(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),h=n?uc:e?fc:yt;return!e&&ct(r,"iterate",c?cc:Ss),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:l?[h(d[0]),h(d[1])]:h(d),done:g}},[Symbol.iterator](){return this}}}}function Eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function TE(t,e){const n={get(i){const r=this.__v_raw,o=ye(r),l=ye(i);t||(rs(i,l)&&ct(o,"get",i),ct(o,"get",l));const{has:c}=wo(o),u=e?uc:t?fc:yt;if(c.call(o,i))return u(r.get(i));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&ct(ye(i),"iterate",Ss),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=ye(r),l=ye(i);return t||(rs(i,l)&&ct(o,"has",i),ct(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=ye(l),u=e?uc:t?fc:yt;return!t&&ct(c,"iterate",Ss),l.forEach((h,d)=>i.call(r,u(h),u(d),o))}};return Xe(n,t?{add:Eo("add"),set:Eo("set"),delete:Eo("delete"),clear:Eo("clear")}:{add(i){!e&&!Zt(i)&&!us(i)&&(i=ye(i));const r=ye(this);return wo(r).has.call(r,i)||(r.add(i),Cn(r,"add",i,i)),this},set(i,r){!e&&!Zt(r)&&!us(r)&&(r=ye(r));const o=ye(this),{has:l,get:c}=wo(o);let u=l.call(o,i);u||(i=ye(i),u=l.call(o,i));const h=c.call(o,i);return o.set(i,r),u?rs(r,h)&&Cn(o,"set",i,r):Cn(o,"add",i,r),this},delete(i){const r=ye(this),{has:o,get:l}=wo(r);let c=o.call(r,i);c||(i=ye(i),c=o.call(r,i)),l&&l.call(r,i);const u=r.delete(i);return c&&Cn(r,"delete",i,void 0),u},clear(){const i=ye(this),r=i.size!==0,o=i.clear();return r&&Cn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=EE(i,t,e)}),n}function bu(t,e){const n=TE(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Ee(n,i)&&i in s?n:s,i,r)}const bE={get:bu(!1,!1)},IE={get:bu(!1,!0)},CE={get:bu(!0,!1)};const em=new WeakMap,tm=new WeakMap,nm=new WeakMap,SE=new WeakMap;function RE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function AE(t){return t.__v_skip||!Object.isExtensible(t)?0:RE(eE(t))}function Dn(t){return us(t)?t:Iu(t,!1,yE,bE,em)}function Sn(t){return Iu(t,!1,wE,IE,tm)}function sm(t){return Iu(t,!0,vE,CE,nm)}function Iu(t,e,n,s,i){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=AE(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function ai(t){return us(t)?ai(t.__v_raw):!!(t&&t.__v_isReactive)}function us(t){return!!(t&&t.__v_isReadonly)}function Zt(t){return!!(t&&t.__v_isShallow)}function Cu(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function hc(t){return!Ee(t,"__v_skip")&&Object.isExtensible(t)&&Mg(t,"__v_skip",!0),t}const yt=t=>Ne(t)?Dn(t):t,fc=t=>Ne(t)?sm(t):t;function Ve(t){return t?t.__v_isRef===!0:!1}function Ht(t){return im(t,!1)}function Ar(t){return im(t,!0)}function im(t,e){return Ve(t)?t:new kE(t,e)}class kE{constructor(e,n){this.dep=new Eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:yt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Zt(e)||us(e);e=s?e:ye(e),rs(e,n)&&(this._rawValue=e,this._value=s?e:yt(e),this.dep.trigger())}}function Be(t){return Ve(t)?t.value:t}function PE(t){return oe(t)?t():Be(t)}const OE={get:(t,e,n)=>e==="__v_raw"?t:Be(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function rm(t){return ai(t)?t:new Proxy(t,OE)}class NE{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fE(ye(this._object),this._key)}}class xE{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function ME(t,e,n){return Ve(t)?t:oe(t)?new xE(t):Ne(t)&&arguments.length>1?LE(t,e,n):Ht(t)}function LE(t,e,n){const s=t[e];return Ve(s)?s:new NE(t,e,n)}class DE{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Gg(this,!0),!0}get value(){const e=this.dep.track();return zg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function FE(t,e,n=!1){let s,i;return oe(t)?s=t:(s=t.get,i=t.set),new DE(s,i,n)}const To={},Jo=new WeakMap;let Ts;function UE(t,e=!1,n=Ts){if(n){let s=Jo.get(n);s||Jo.set(n,s=[]),s.push(t)}}function HE(t,e,n=Ae){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,u=A=>i?A:Zt(A)||i===!1||i===0?Qn(A,1):Qn(A);let h,d,g,_,w=!1,C=!1;if(Ve(t)?(d=()=>t.value,w=Zt(t)):ai(t)?(d=()=>u(t),w=!0):ae(t)?(C=!0,w=t.some(A=>ai(A)||Zt(A)),d=()=>t.map(A=>{if(Ve(A))return A.value;if(ai(A))return u(A);if(oe(A))return c?c(A,2):A()})):oe(t)?e?d=c?()=>c(t,2):t:d=()=>{if(g){fs();try{g()}finally{ds()}}const A=Ts;Ts=h;try{return c?c(t,3,[_]):t(_)}finally{Ts=A}}:d=fn,e&&i){const A=d,M=i===!0?1/0:i;d=()=>Qn(A(),M)}const O=$g(),x=()=>{h.stop(),O&&O.active&&pu(O.effects,h)};if(r&&e){const A=e;e=(...M)=>{A(...M),x()}}let N=C?new Array(t.length).fill(To):To;const T=A=>{if(!(!(h.flags&1)||!h.dirty&&!A))if(e){const M=h.run();if(i||w||(C?M.some((D,E)=>rs(D,N[E])):rs(M,N))){g&&g();const D=Ts;Ts=h;try{const E=[M,N===To?void 0:C&&N[0]===To?[]:N,_];c?c(e,3,E):e(...E),N=M}finally{Ts=D}}}else h.run()};return l&&l(T),h=new Vg(d),h.scheduler=o?()=>o(T,!1):T,_=A=>UE(A,!1,h),g=h.onStop=()=>{const A=Jo.get(h);if(A){if(c)c(A,4);else for(const M of A)M();Jo.delete(h)}},e?s?T(!0):N=h.run():o?o(T.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Qn(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ve(t))Qn(t.value,e,n);else if(ae(t))for(let s=0;s<t.length;s++)Qn(t[s],e,n);else if(Pg(t)||ri(t))t.forEach(s=>{Qn(s,e,n)});else if(xg(t)){for(const s in t)Qn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Qn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wr(t,e,n,s){try{return s?t(...s):t()}catch(i){Si(i,e,n)}}function tn(t,e,n,s){if(oe(t)){const i=Wr(t,e,n,s);return i&&Og(i)&&i.catch(r=>{Si(r,e,n)}),i}if(ae(t)){const i=[];for(let r=0;r<t.length;r++)i.push(tn(t[r],e,n,s));return i}}function Si(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ae;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}l=l.parent}if(r){fs(),Wr(r,null,10,[t,c,u]),ds();return}}jE(t,n,i,s,o)}function jE(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const vt=[];let ln=-1;const li=[];let qn=null,Qs=0;const om=Promise.resolve();let Qo=null;function Gr(t){const e=Qo||om;return t?e.then(this?t.bind(this):t):e}function BE(t){let e=ln+1,n=vt.length;for(;e<n;){const s=e+n>>>1,i=vt[s],r=kr(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Su(t){if(!(t.flags&1)){const e=kr(t),n=vt[vt.length-1];!n||!(t.flags&2)&&e>=kr(n)?vt.push(t):vt.splice(BE(e),0,t),t.flags|=1,am()}}function am(){Qo||(Qo=om.then(lm))}function dc(t){ae(t)?li.push(...t):qn&&t.id===-1?qn.splice(Qs+1,0,t):t.flags&1||(li.push(t),t.flags|=1),am()}function Tf(t,e,n=ln+1){for(;n<vt.length;n++){const s=vt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;vt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Zo(t){if(li.length){const e=[...new Set(li)].sort((n,s)=>kr(n)-kr(s));if(li.length=0,qn){qn.push(...e);return}for(qn=e,Qs=0;Qs<qn.length;Qs++){const n=qn[Qs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qn=null,Qs=0}}const kr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lm(t){try{for(ln=0;ln<vt.length;ln++){const e=vt[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<vt.length;ln++){const e=vt[ln];e&&(e.flags&=-2)}ln=-1,vt.length=0,Zo(),Qo=null,(vt.length||li.length)&&lm()}}let it=null,cm=null;function ea(t){const e=it;return it=t,cm=t&&t.type.__scopeId||null,e}function Ru(t,e=it,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Mf(-1);const r=ea(e);let o;try{o=t(...i)}finally{ea(r),s._d&&Mf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function un(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(fs(),tn(c,n,8,[t.el,l,t,e]),ds())}}const $E=Symbol("_vte"),um=t=>t.__isTeleport,zn=Symbol("_leaveCb"),bo=Symbol("_enterCb");function VE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ku(()=>{t.isMounted=!0}),qr(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],hm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},fm=t=>{const e=t.subTree;return e.component?fm(e.component):e},WE={name:"BaseTransition",props:hm,setup(t,{slots:e}){const n=zr(),s=VE();return()=>{const i=e.default&&gm(e.default(),!0);if(!i||!i.length)return;const r=dm(i),o=ye(t),{mode:l}=o;if(s.isLeaving)return Al(r);const c=bf(r);if(!c)return Al(r);let u=pc(c,o,s,n,d=>u=d);c.type!==et&&_i(c,u);let h=n.subTree&&bf(n.subTree);if(h&&h.type!==et&&!Kt(c,h)&&fm(n).type!==et){let d=pc(h,o,s,n);if(_i(h,d),l==="out-in"&&c.type!==et)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},Al(r);l==="in-out"&&c.type!==et?d.delayLeave=(g,_,w)=>{const C=pm(s,h);C[String(h.key)]=h,g[zn]=()=>{_(),g[zn]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return r}}};function dm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==et){e=n;break}}return e}const GE=WE;function pm(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function pc(t,e,n,s,i){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:g,onLeave:_,onAfterLeave:w,onLeaveCancelled:C,onBeforeAppear:O,onAppear:x,onAfterAppear:N,onAppearCancelled:T}=e,A=String(t.key),M=pm(n,t),D=(v,b)=>{v&&tn(v,s,9,b)},E=(v,b)=>{const P=b[1];D(v,b),ae(v)?v.every(R=>R.length<=1)&&P():v.length<=1&&P()},y={mode:o,persisted:l,beforeEnter(v){let b=c;if(!n.isMounted)if(r)b=O||c;else return;v[zn]&&v[zn](!0);const P=M[A];P&&Kt(t,P)&&P.el[zn]&&P.el[zn](),D(b,[v])},enter(v){let b=u,P=h,R=d;if(!n.isMounted)if(r)b=x||u,P=N||h,R=T||d;else return;let I=!1;const le=v[bo]=ue=>{I||(I=!0,ue?D(R,[v]):D(P,[v]),y.delayedLeave&&y.delayedLeave(),v[bo]=void 0)};b?E(b,[v,le]):le()},leave(v,b){const P=String(t.key);if(v[bo]&&v[bo](!0),n.isUnmounting)return b();D(g,[v]);let R=!1;const I=v[zn]=le=>{R||(R=!0,b(),le?D(C,[v]):D(w,[v]),v[zn]=void 0,M[P]===t&&delete M[P])};M[P]=t,_?E(_,[v,I]):I()},clone(v){const b=pc(v,e,n,s,i);return i&&i(b),b}};return y}function Al(t){if(Kr(t))return t=On(t),t.children=null,t}function bf(t){if(!Kr(t))return um(t.type)&&t.children?dm(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&oe(n.default))return n.default()}}function _i(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_i(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gm(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ut?(o.patchFlag&128&&i++,s=s.concat(gm(o.children,e,l))):(e||o.type!==et)&&s.push(l!=null?On(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function on(t,e){return oe(t)?Xe({name:t.name},e,{setup:t}):t}function Au(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Pr(t,e,n,s,i=!1){if(ae(t)){t.forEach((w,C)=>Pr(w,e&&(ae(e)?e[C]:e),n,s,i));return}if(os(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Pr(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Mu(s.component):s.el,o=i?null:r,{i:l,r:c}=t,u=e&&e.r,h=l.refs===Ae?l.refs={}:l.refs,d=l.setupState,g=ye(d),_=d===Ae?()=>!1:w=>Ee(g,w);if(u!=null&&u!==c&&(Ue(u)?(h[u]=null,_(u)&&(d[u]=null)):Ve(u)&&(u.value=null)),oe(c))Wr(c,l,12,[o,h]);else{const w=Ue(c),C=Ve(c);if(w||C){const O=()=>{if(t.f){const x=w?_(c)?d[c]:h[c]:c.value;i?ae(x)&&pu(x,r):ae(x)?x.includes(r)||x.push(r):w?(h[c]=[r],_(c)&&(d[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else w?(h[c]=o,_(c)&&(d[c]=o)):C&&(c.value=o,t.k&&(h[t.k]=o))};o?(O.id=-1,Ze(O,n)):O()}}}let If=!1;const Xs=()=>{If||(console.error("Hydration completed but contains mismatches."),If=!0)},KE=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",qE=t=>t.namespaceURI.includes("MathML"),Io=t=>{if(t.nodeType===1){if(KE(t))return"svg";if(qE(t))return"mathml"}},ei=t=>t.nodeType===8;function zE(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:l,insert:c,createComment:u}}=t,h=(T,A)=>{if(!A.hasChildNodes()){n(null,T,A),Zo(),A._vnode=T;return}d(A.firstChild,T,null,null,null),Zo(),A._vnode=T},d=(T,A,M,D,E,y=!1)=>{y=y||!!A.dynamicChildren;const v=ei(T)&&T.data==="[",b=()=>C(T,A,M,D,E,v),{type:P,ref:R,shapeFlag:I,patchFlag:le}=A;let ue=T.nodeType;A.el=T,le===-2&&(y=!1,A.dynamicChildren=null);let Z=null;switch(P){case ks:ue!==3?A.children===""?(c(A.el=i(""),o(T),T),Z=T):Z=b():(T.data!==A.children&&(Xs(),T.data=A.children),Z=r(T));break;case et:N(T)?(Z=r(T),x(A.el=T.content.firstChild,T,M)):ue!==8||v?Z=b():Z=r(T);break;case fr:if(v&&(T=r(T),ue=T.nodeType),ue===1||ue===3){Z=T;const re=!A.children.length;for(let Q=0;Q<A.staticCount;Q++)re&&(A.children+=Z.nodeType===1?Z.outerHTML:Z.data),Q===A.staticCount-1&&(A.anchor=Z),Z=r(Z);return v?r(Z):Z}else b();break;case ut:v?Z=w(T,A,M,D,E,y):Z=b();break;default:if(I&1)(ue!==1||A.type.toLowerCase()!==T.tagName.toLowerCase())&&!N(T)?Z=b():Z=g(T,A,M,D,E,y);else if(I&6){A.slotScopeIds=E;const re=o(T);if(v?Z=O(T):ei(T)&&T.data==="teleport start"?Z=O(T,T.data,"teleport end"):Z=r(T),e(A,re,null,M,D,Io(re),y),os(A)&&!A.type.__asyncResolved){let Q;v?(Q=Fe(ut),Q.anchor=Z?Z.previousSibling:re.lastChild):Q=T.nodeType===3?Jm(""):Fe("div"),Q.el=T,A.component.subTree=Q}}else I&64?ue!==8?Z=b():Z=A.type.hydrate(T,A,M,D,E,y,t,_):I&128&&(Z=A.type.hydrate(T,A,M,D,Io(o(T)),E,y,t,d))}return R!=null&&Pr(R,null,D,A),Z},g=(T,A,M,D,E,y)=>{y=y||!!A.dynamicChildren;const{type:v,props:b,patchFlag:P,shapeFlag:R,dirs:I,transition:le}=A,ue=v==="input"||v==="option";if(ue||P!==-1){I&&un(A,null,M,"created");let Z=!1;if(N(T)){Z=jm(null,le)&&M&&M.vnode.props&&M.vnode.props.appear;const Q=T.content.firstChild;Z&&le.beforeEnter(Q),x(Q,T,M),A.el=T=Q}if(R&16&&!(b&&(b.innerHTML||b.textContent))){let Q=_(T.firstChild,A,T,M,D,E,y);for(;Q;){Co(T,1)||Xs();const Me=Q;Q=Q.nextSibling,l(Me)}}else if(R&8){let Q=A.children;Q[0]===`
`&&(T.tagName==="PRE"||T.tagName==="TEXTAREA")&&(Q=Q.slice(1)),T.textContent!==Q&&(Co(T,0)||Xs(),T.textContent=A.children)}if(b){if(ue||!y||P&48){const Q=T.tagName.includes("-");for(const Me in b)(ue&&(Me.endsWith("value")||Me==="indeterminate")||$r(Me)&&!oi(Me)||Me[0]==="."||Q)&&s(T,Me,null,b[Me],void 0,M)}else if(b.onClick)s(T,"onClick",null,b.onClick,void 0,M);else if(P&4&&ai(b.style))for(const Q in b.style)b.style[Q]}let re;(re=b&&b.onVnodeBeforeMount)&&Tt(re,M,A),I&&un(A,null,M,"beforeMount"),((re=b&&b.onVnodeMounted)||I||Z)&&Km(()=>{re&&Tt(re,M,A),Z&&le.enter(T),I&&un(A,null,M,"mounted")},D)}return T.nextSibling},_=(T,A,M,D,E,y,v)=>{v=v||!!A.dynamicChildren;const b=A.children,P=b.length;for(let R=0;R<P;R++){const I=v?b[R]:b[R]=At(b[R]),le=I.type===ks;T?(le&&!v&&R+1<P&&At(b[R+1]).type===ks&&(c(i(T.data.slice(I.children.length)),M,r(T)),T.data=I.children),T=d(T,I,D,E,y,v)):le&&!I.children?c(I.el=i(""),M):(Co(M,1)||Xs(),n(null,I,M,null,D,E,Io(M),y))}return T},w=(T,A,M,D,E,y)=>{const{slotScopeIds:v}=A;v&&(E=E?E.concat(v):v);const b=o(T),P=_(r(T),A,b,M,D,E,y);return P&&ei(P)&&P.data==="]"?r(A.anchor=P):(Xs(),c(A.anchor=u("]"),b,P),P)},C=(T,A,M,D,E,y)=>{if(Co(T.parentElement,1)||Xs(),A.el=null,y){const P=O(T);for(;;){const R=r(T);if(R&&R!==P)l(R);else break}}const v=r(T),b=o(T);return l(T),n(null,A,b,v,M,D,Io(b),E),M&&(M.vnode.el=A.el,Wa(M,A.el)),v},O=(T,A="[",M="]")=>{let D=0;for(;T;)if(T=r(T),T&&ei(T)&&(T.data===A&&D++,T.data===M)){if(D===0)return r(T);D--}return T},x=(T,A,M)=>{const D=A.parentNode;D&&D.replaceChild(T,A);let E=M;for(;E;)E.vnode.el===A&&(E.vnode.el=E.subTree.el=T),E=E.parent},N=T=>T.nodeType===1&&T.tagName==="TEMPLATE";return[h,d]}const Cf="data-allow-mismatch",YE={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Co(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Cf);)t=t.parentElement;const n=t&&t.getAttribute(Cf);if(n==null)return!1;if(n==="")return!0;{const s=n.split(",");return e===0&&s.includes("children")?!0:n.split(",").includes(YE[e])}}ja().requestIdleCallback;ja().cancelIdleCallback;function XE(t,e){if(ei(t)&&t.data==="["){let n=1,s=t.nextSibling;for(;s;){if(s.nodeType===1){if(e(s)===!1)break}else if(ei(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else e(t)}const os=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function mm(t){oe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,hydrate:r,timeout:o,suspensible:l=!0,onError:c}=t;let u=null,h,d=0;const g=()=>(d++,u=null,_()),_=()=>{let w;return u||(w=u=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),c)return new Promise((O,x)=>{c(C,()=>O(g()),()=>x(C),d+1)});throw C}).then(C=>w!==u&&u?u:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),h=C,C)))};return on({name:"AsyncComponentWrapper",__asyncLoader:_,__asyncHydrate(w,C,O){const x=r?()=>{const N=r(O,T=>XE(w,T));N&&(C.bum||(C.bum=[])).push(N)}:O;h?x():_().then(()=>!C.isUnmounted&&x())},get __asyncResolved(){return h},setup(){const w=$e;if(Au(w),h)return()=>kl(h,w);const C=T=>{u=null,Si(T,w,13,!s)};if(l&&w.suspense||vi)return _().then(T=>()=>kl(T,w)).catch(T=>(C(T),()=>s?Fe(s,{error:T}):null));const O=Ht(!1),x=Ht(),N=Ht(!!i);return i&&setTimeout(()=>{N.value=!1},i),o!=null&&setTimeout(()=>{if(!O.value&&!x.value){const T=new Error(`Async component timed out after ${o}ms.`);C(T),x.value=T}},o),_().then(()=>{O.value=!0,w.parent&&Kr(w.parent.vnode)&&w.parent.update()}).catch(T=>{C(T),x.value=T}),()=>{if(O.value&&h)return kl(h,w);if(x.value&&s)return Fe(s,{error:x.value});if(n&&!N.value)return Fe(n)}}})}function kl(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=Fe(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const Kr=t=>t.type.__isKeepAlive,JE={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=zr(),s=n.ctx;if(!s.renderer)return()=>{const N=e.default&&e.default();return N&&N.length===1?N[0]:N};const i=new Map,r=new Set;let o=null;const l=n.suspense,{renderer:{p:c,m:u,um:h,o:{createElement:d}}}=s,g=d("div");s.activate=(N,T,A,M,D)=>{const E=N.component;u(N,T,A,0,l),c(E.vnode,N,T,A,E,l,M,N.slotScopeIds,D),Ze(()=>{E.isDeactivated=!1,E.a&&lr(E.a);const y=N.props&&N.props.onVnodeMounted;y&&Tt(y,E.parent,N)},l)},s.deactivate=N=>{const T=N.component;na(T.m),na(T.a),u(N,g,null,1,l),Ze(()=>{T.da&&lr(T.da);const A=N.props&&N.props.onVnodeUnmounted;A&&Tt(A,T.parent,N),T.isDeactivated=!0},l)};function _(N){Pl(N),h(N,n,l,!0)}function w(N){i.forEach((T,A)=>{const M=Tc(T.type);M&&!N(M)&&C(A)})}function C(N){const T=i.get(N);T&&(!o||!Kt(T,o))?_(T):o&&Pl(o),i.delete(N),r.delete(N)}ci(()=>[t.include,t.exclude],([N,T])=>{N&&w(A=>rr(N,A)),T&&w(A=>!rr(T,A))},{flush:"post",deep:!0});let O=null;const x=()=>{O!=null&&(sa(n.subTree.type)?Ze(()=>{i.set(O,So(n.subTree))},n.subTree.suspense):i.set(O,So(n.subTree)))};return ku(x),wm(x),qr(()=>{i.forEach(N=>{const{subTree:T,suspense:A}=n,M=So(T);if(N.type===M.type&&N.key===M.key){Pl(M);const D=M.component.da;D&&Ze(D,A);return}_(N)})}),()=>{if(O=null,!e.default)return o=null;const N=e.default(),T=N[0];if(N.length>1)return o=null,N;if(!Os(T)||!(T.shapeFlag&4)&&!(T.shapeFlag&128))return o=null,T;let A=So(T);if(A.type===et)return o=null,A;const M=A.type,D=Tc(os(A)?A.type.__asyncResolved||{}:M),{include:E,exclude:y,max:v}=t;if(E&&(!D||!rr(E,D))||y&&D&&rr(y,D))return A.shapeFlag&=-257,o=A,T;const b=A.key==null?M:A.key,P=i.get(b);return A.el&&(A=On(A),T.shapeFlag&128&&(T.ssContent=A)),O=b,P?(A.el=P.el,A.component=P.component,A.transition&&_i(A,A.transition),A.shapeFlag|=512,r.delete(b),r.add(b)):(r.add(b),v&&r.size>parseInt(v,10)&&C(r.values().next().value)),A.shapeFlag|=256,o=A,sa(T.type)?T:A}}},QE=JE;function rr(t,e){return ae(t)?t.some(n=>rr(n,e)):Ue(t)?t.split(",").includes(e):Zw(t)?(t.lastIndex=0,t.test(e)):!1}function _m(t,e){vm(t,"a",e)}function ym(t,e){vm(t,"da",e)}function vm(t,e,n=$e){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ba(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Kr(i.parent.vnode)&&ZE(s,e,n,i),i=i.parent}}function ZE(t,e,n,s){const i=Ba(e,t,s,!0);Em(()=>{pu(s[e],i)},n)}function Pl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function So(t){return t.shapeFlag&128?t.ssContent:t}function Ba(t,e,n=$e,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{fs();const l=Yr(n),c=tn(e,n,t,o);return l(),ds(),c});return s?i.unshift(r):i.push(r),r}}const Fn=t=>(e,n=$e)=>{(!vi||t==="sp")&&Ba(t,(...s)=>e(...s),n)},eT=Fn("bm"),ku=Fn("m"),tT=Fn("bu"),wm=Fn("u"),qr=Fn("bum"),Em=Fn("um"),nT=Fn("sp"),sT=Fn("rtg"),iT=Fn("rtc");function Tm(t,e=$e){Ba("ec",t,e)}const bm="components";function wM(t,e){return Cm(bm,t,!0,e)||t}const Im=Symbol.for("v-ndc");function rT(t){return Ue(t)?Cm(bm,t,!1)||t:t||Im}function Cm(t,e,n=!0,s=!1){const i=it||$e;if(i){const r=i.type;{const l=Tc(r,!1);if(l&&(l===e||l===jt(e)||l===Ha(jt(e))))return r}const o=Sf(i[t]||r[t],e)||Sf(i.appContext[t],e);return!o&&s?r:o}}function Sf(t,e){return t&&(t[e]||t[jt(e)]||t[Ha(jt(e))])}function EM(t,e,n={},s,i){if(it.ce||it.parent&&os(it.parent)&&it.parent.ce)return e!=="default"&&(n.name=e),Gt(),Zn(ut,null,[Fe("slot",n,s)],64);let r=t[e];r&&r._c&&(r._d=!1),Gt();const o=r&&Sm(r(n)),l=n.key||o&&o.key,c=Zn(ut,{key:(l&&!Ln(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function Sm(t){return t.some(e=>Os(e)?!(e.type===et||e.type===ut&&!Sm(e.children)):!0)?t:null}const gc=t=>t?Zm(t)?Mu(t):gc(t.parent):null,hr=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gc(t.parent),$root:t=>gc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Am(t),$forceUpdate:t=>t.f||(t.f=()=>{Su(t.update)}),$nextTick:t=>t.n||(t.n=Gr.bind(t.proxy)),$watch:t=>ST.bind(t)}),Ol=(t,e)=>t!==Ae&&!t.__isScriptSetup&&Ee(t,e),oT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ol(s,e))return o[e]=1,s[e];if(i!==Ae&&Ee(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Ee(u,e))return o[e]=3,r[e];if(n!==Ae&&Ee(n,e))return o[e]=4,n[e];mc&&(o[e]=0)}}const h=hr[e];let d,g;if(h)return e==="$attrs"&&ct(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Ae&&Ee(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Ee(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ol(i,e)?(i[e]=n,!0):s!==Ae&&Ee(s,e)?(s[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Ae&&Ee(t,o)||Ol(e,o)||(l=r[0])&&Ee(l,o)||Ee(s,o)||Ee(hr,o)||Ee(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rf(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mc=!0;function aT(t){const e=Am(t),n=t.proxy,s=t.ctx;mc=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:d,mounted:g,beforeUpdate:_,updated:w,activated:C,deactivated:O,beforeDestroy:x,beforeUnmount:N,destroyed:T,unmounted:A,render:M,renderTracked:D,renderTriggered:E,errorCaptured:y,serverPrefetch:v,expose:b,inheritAttrs:P,components:R,directives:I,filters:le}=e;if(u&&lT(u,s,null),o)for(const re in o){const Q=o[re];oe(Q)&&(s[re]=Q.bind(n))}if(i){const re=i.call(n,n);Ne(re)&&(t.data=Dn(re))}if(mc=!0,r)for(const re in r){const Q=r[re],Me=oe(Q)?Q.bind(n,n):oe(Q.get)?Q.get.bind(n,n):fn,$t=!oe(Q)&&oe(Q.set)?Q.set.bind(n):fn,Ot=Dt({get:Me,set:$t});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:Le=>Ot.value=Le})}if(l)for(const re in l)Rm(l[re],s,n,re);if(c){const re=oe(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Q=>{As(Q,re[Q])})}h&&Af(h,t,"c");function Z(re,Q){ae(Q)?Q.forEach(Me=>re(Me.bind(n))):Q&&re(Q.bind(n))}if(Z(eT,d),Z(ku,g),Z(tT,_),Z(wm,w),Z(_m,C),Z(ym,O),Z(Tm,y),Z(iT,D),Z(sT,E),Z(qr,N),Z(Em,A),Z(nT,v),ae(b))if(b.length){const re=t.exposed||(t.exposed={});b.forEach(Q=>{Object.defineProperty(re,Q,{get:()=>n[Q],set:Me=>n[Q]=Me})})}else t.exposed||(t.exposed={});M&&t.render===fn&&(t.render=M),P!=null&&(t.inheritAttrs=P),R&&(t.components=R),I&&(t.directives=I),v&&Au(t)}function lT(t,e,n=fn){ae(t)&&(t=_c(t));for(const s in t){const i=t[s];let r;Ne(i)?"default"in i?r=Ye(i.from||s,i.default,!0):r=Ye(i.from||s):r=Ye(i),Ve(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Af(t,e,n){tn(ae(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rm(t,e,n,s){let i=s.includes(".")?Vm(n,s):()=>n[s];if(Ue(t)){const r=e[t];oe(r)&&ci(i,r)}else if(oe(t))ci(i,t.bind(n));else if(Ne(t))if(ae(t))t.forEach(r=>Rm(r,e,n,s));else{const r=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(r)&&ci(i,r,t)}}function Am(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>ta(c,u,o,!0)),ta(c,e,o)),Ne(e)&&r.set(e,c),c}function ta(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ta(t,r,n,!0),i&&i.forEach(o=>ta(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=cT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const cT={data:kf,props:Pf,emits:Pf,methods:or,computed:or,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:or,directives:or,watch:hT,provide:kf,inject:uT};function kf(t,e){return e?t?function(){return Xe(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function uT(t,e){return or(_c(t),_c(e))}function _c(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function or(t,e){return t?Xe(Object.create(null),t,e):e}function Pf(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:Xe(Object.create(null),Rf(t),Rf(e??{})):e}function hT(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const s in e)n[s]=_t(t[s],e[s]);return n}function km(){return{app:null,config:{isNativeTag:Jw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fT=0;function dT(t,e){return function(s,i=null){oe(s)||(s=Xe({},s)),i!=null&&!Ne(i)&&(i=null);const r=km(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:fT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:YT,get config(){return r.config},set config(h){},use(h,...d){return o.has(h)||(h&&oe(h.install)?(o.add(h),h.install(u,...d)):oe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),u},component(h,d){return d?(r.components[h]=d,u):r.components[h]},directive(h,d){return d?(r.directives[h]=d,u):r.directives[h]},mount(h,d,g){if(!c){const _=u._ceVNode||Fe(s,i);return _.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),d&&e?e(_,h):t(_,h,g),c=!0,u._container=h,h.__vue_app__=u,Mu(_.component)}},onUnmount(h){l.push(h)},unmount(){c&&(tn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return r.provides[h]=d,u},runWithContext(h){const d=Rs;Rs=u;try{return h()}finally{Rs=d}}};return u}}let Rs=null;function As(t,e){if($e){let n=$e.provides;const s=$e.parent&&$e.parent.provides;s===n&&(n=$e.provides=Object.create(s)),n[t]=e}}function Ye(t,e,n=!1){const s=$e||it;if(s||Rs){const i=Rs?Rs._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&oe(e)?e.call(s&&s.proxy):e}}function $a(){return!!($e||it||Rs)}const Pm={},Om=()=>Object.create(Pm),Nm=t=>Object.getPrototypeOf(t)===Pm;function pT(t,e,n,s=!1){const i={},r=Om();t.propsDefaults=Object.create(null),xm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Sn(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function gT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=ye(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let g=h[d];if(Va(t.emitsOptions,g))continue;const _=e[g];if(c)if(Ee(r,g))_!==r[g]&&(r[g]=_,u=!0);else{const w=jt(g);i[w]=yc(c,l,w,_,t,!1)}else _!==r[g]&&(r[g]=_,u=!0)}}}else{xm(t,e,i,r)&&(u=!0);let h;for(const d in l)(!e||!Ee(e,d)&&((h=Us(d))===d||!Ee(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(i[d]=yc(c,l,d,void 0,t,!0)):delete i[d]);if(r!==l)for(const d in r)(!e||!Ee(e,d))&&(delete r[d],u=!0)}u&&Cn(t.attrs,"set","")}function xm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(oi(c))continue;const u=e[c];let h;i&&Ee(i,h=jt(c))?!r||!r.includes(h)?n[h]=u:(l||(l={}))[h]=u:Va(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=ye(n),u=l||Ae;for(let h=0;h<r.length;h++){const d=r[h];n[d]=yc(i,c,d,u[d],t,!Ee(u,d))}}return o}function yc(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Ee(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&oe(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const h=Yr(i);s=u[n]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Us(n))&&(s=!0))}return s}const mT=new WeakMap;function Mm(t,e,n=!1){const s=n?mT:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!oe(t)){const h=d=>{c=!0;const[g,_]=Mm(d,e,!0);Xe(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return Ne(t)&&s.set(t,ii),ii;if(ae(r))for(let h=0;h<r.length;h++){const d=jt(r[h]);Of(d)&&(o[d]=Ae)}else if(r)for(const h in r){const d=jt(h);if(Of(d)){const g=r[h],_=o[d]=ae(g)||oe(g)?{type:g}:Xe({},g),w=_.type;let C=!1,O=!0;if(ae(w))for(let x=0;x<w.length;++x){const N=w[x],T=oe(N)&&N.name;if(T==="Boolean"){C=!0;break}else T==="String"&&(O=!1)}else C=oe(w)&&w.name==="Boolean";_[0]=C,_[1]=O,(C||Ee(_,"default"))&&l.push(d)}}const u=[o,l];return Ne(t)&&s.set(t,u),u}function Of(t){return t[0]!=="$"&&!oi(t)}const Lm=t=>t[0]==="_"||t==="$stable",Pu=t=>ae(t)?t.map(At):[At(t)],_T=(t,e,n)=>{if(e._n)return e;const s=Ru((...i)=>Pu(e(...i)),n);return s._c=!1,s},Dm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Lm(i))continue;const r=t[i];if(oe(r))e[i]=_T(i,r,s);else if(r!=null){const o=Pu(r);e[i]=()=>o}}},Fm=(t,e)=>{const n=Pu(e);t.slots.default=()=>n},Um=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},yT=(t,e,n)=>{const s=t.slots=Om();if(t.vnode.shapeFlag&32){const i=e._;i?(Um(s,e,n),n&&Mg(s,"_",i,!0)):Dm(e,s)}else e&&Fm(t,e)},vT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ae;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Um(i,e,n):(r=!e.$stable,Dm(e,i)),o=e}else e&&(Fm(t,e),o={default:1});if(r)for(const l in i)!Lm(l)&&o[l]==null&&delete i[l]},Ze=Km;function wT(t){return Hm(t)}function ET(t){return Hm(t,zE)}function Hm(t,e){const n=ja();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:g,setScopeId:_=fn,insertStaticContent:w}=t,C=(S,k,F,B=null,H=null,$=null,q=void 0,G=null,W=!!k.dynamicChildren)=>{if(S===k)return;S&&!Kt(S,k)&&(B=j(S),Le(S,H,$,!0),S=null),k.patchFlag===-2&&(W=!1,k.dynamicChildren=null);const{type:V,ref:se,shapeFlag:X}=k;switch(V){case ks:O(S,k,F,B);break;case et:x(S,k,F,B);break;case fr:S==null&&N(k,F,B,q);break;case ut:R(S,k,F,B,H,$,q,G,W);break;default:X&1?M(S,k,F,B,H,$,q,G,W):X&6?I(S,k,F,B,H,$,q,G,W):(X&64||X&128)&&V.process(S,k,F,B,H,$,q,G,W,ee)}se!=null&&H&&Pr(se,S&&S.ref,$,k||S,!k)},O=(S,k,F,B)=>{if(S==null)s(k.el=l(k.children),F,B);else{const H=k.el=S.el;k.children!==S.children&&u(H,k.children)}},x=(S,k,F,B)=>{S==null?s(k.el=c(k.children||""),F,B):k.el=S.el},N=(S,k,F,B)=>{[S.el,S.anchor]=w(S.children,k,F,B,S.el,S.anchor)},T=({el:S,anchor:k},F,B)=>{let H;for(;S&&S!==k;)H=g(S),s(S,F,B),S=H;s(k,F,B)},A=({el:S,anchor:k})=>{let F;for(;S&&S!==k;)F=g(S),i(S),S=F;i(k)},M=(S,k,F,B,H,$,q,G,W)=>{k.type==="svg"?q="svg":k.type==="math"&&(q="mathml"),S==null?D(k,F,B,H,$,q,G,W):v(S,k,H,$,q,G,W)},D=(S,k,F,B,H,$,q,G)=>{let W,V;const{props:se,shapeFlag:X,transition:ne,dirs:te}=S;if(W=S.el=o(S.type,$,se&&se.is,se),X&8?h(W,S.children):X&16&&y(S.children,W,null,B,H,Nl(S,$),q,G),te&&un(S,null,B,"created"),E(W,S,S.scopeId,q,B),se){for(const ve in se)ve!=="value"&&!oi(ve)&&r(W,ve,null,se[ve],$,B);"value"in se&&r(W,"value",null,se.value,$),(V=se.onVnodeBeforeMount)&&Tt(V,B,S)}te&&un(S,null,B,"beforeMount");const ie=jm(H,ne);ie&&ne.beforeEnter(W),s(W,k,F),((V=se&&se.onVnodeMounted)||ie||te)&&Ze(()=>{V&&Tt(V,B,S),ie&&ne.enter(W),te&&un(S,null,B,"mounted")},H)},E=(S,k,F,B,H)=>{if(F&&_(S,F),B)for(let $=0;$<B.length;$++)_(S,B[$]);if(H){let $=H.subTree;if(k===$||sa($.type)&&($.ssContent===k||$.ssFallback===k)){const q=H.vnode;E(S,q,q.scopeId,q.slotScopeIds,H.parent)}}},y=(S,k,F,B,H,$,q,G,W=0)=>{for(let V=W;V<S.length;V++){const se=S[V]=G?Yn(S[V]):At(S[V]);C(null,se,k,F,B,H,$,q,G)}},v=(S,k,F,B,H,$,q)=>{const G=k.el=S.el;let{patchFlag:W,dynamicChildren:V,dirs:se}=k;W|=S.patchFlag&16;const X=S.props||Ae,ne=k.props||Ae;let te;if(F&&ys(F,!1),(te=ne.onVnodeBeforeUpdate)&&Tt(te,F,k,S),se&&un(k,S,F,"beforeUpdate"),F&&ys(F,!0),(X.innerHTML&&ne.innerHTML==null||X.textContent&&ne.textContent==null)&&h(G,""),V?b(S.dynamicChildren,V,G,F,B,Nl(k,H),$):q||Q(S,k,G,null,F,B,Nl(k,H),$,!1),W>0){if(W&16)P(G,X,ne,F,H);else if(W&2&&X.class!==ne.class&&r(G,"class",null,ne.class,H),W&4&&r(G,"style",X.style,ne.style,H),W&8){const ie=k.dynamicProps;for(let ve=0;ve<ie.length;ve++){const me=ie[ve],rt=X[me],We=ne[me];(We!==rt||me==="value")&&r(G,me,rt,We,H,F)}}W&1&&S.children!==k.children&&h(G,k.children)}else!q&&V==null&&P(G,X,ne,F,H);((te=ne.onVnodeUpdated)||se)&&Ze(()=>{te&&Tt(te,F,k,S),se&&un(k,S,F,"updated")},B)},b=(S,k,F,B,H,$,q)=>{for(let G=0;G<k.length;G++){const W=S[G],V=k[G],se=W.el&&(W.type===ut||!Kt(W,V)||W.shapeFlag&70)?d(W.el):F;C(W,V,se,null,B,H,$,q,!0)}},P=(S,k,F,B,H)=>{if(k!==F){if(k!==Ae)for(const $ in k)!oi($)&&!($ in F)&&r(S,$,k[$],null,H,B);for(const $ in F){if(oi($))continue;const q=F[$],G=k[$];q!==G&&$!=="value"&&r(S,$,G,q,H,B)}"value"in F&&r(S,"value",k.value,F.value,H)}},R=(S,k,F,B,H,$,q,G,W)=>{const V=k.el=S?S.el:l(""),se=k.anchor=S?S.anchor:l("");let{patchFlag:X,dynamicChildren:ne,slotScopeIds:te}=k;te&&(G=G?G.concat(te):te),S==null?(s(V,F,B),s(se,F,B),y(k.children||[],F,se,H,$,q,G,W)):X>0&&X&64&&ne&&S.dynamicChildren?(b(S.dynamicChildren,ne,F,H,$,q,G),(k.key!=null||H&&k===H.subTree)&&Bm(S,k,!0)):Q(S,k,F,se,H,$,q,G,W)},I=(S,k,F,B,H,$,q,G,W)=>{k.slotScopeIds=G,S==null?k.shapeFlag&512?H.ctx.activate(k,F,B,q,W):le(k,F,B,H,$,q,W):ue(S,k,W)},le=(S,k,F,B,H,$,q)=>{const G=S.component=VT(S,B,H);if(Kr(S)&&(G.ctx.renderer=ee),WT(G,!1,q),G.asyncDep){if(H&&H.registerDep(G,Z,q),!S.el){const W=G.subTree=Fe(et);x(null,W,k,F)}}else Z(G,S,k,F,H,$,q)},ue=(S,k,F)=>{const B=k.component=S.component;if(NT(S,k,F))if(B.asyncDep&&!B.asyncResolved){re(B,k,F);return}else B.next=k,B.update();else k.el=S.el,B.vnode=k},Z=(S,k,F,B,H,$,q)=>{const G=()=>{if(S.isMounted){let{next:X,bu:ne,u:te,parent:ie,vnode:ve}=S;{const ot=$m(S);if(ot){X&&(X.el=ve.el,re(S,X,q)),ot.asyncDep.then(()=>{S.isUnmounted||G()});return}}let me=X,rt;ys(S,!1),X?(X.el=ve.el,re(S,X,q)):X=ve,ne&&lr(ne),(rt=X.props&&X.props.onVnodeBeforeUpdate)&&Tt(rt,ie,X,ve),ys(S,!0);const We=xl(S),Je=S.subTree;S.subTree=We,C(Je,We,d(Je.el),j(Je),S,H,$),X.el=We.el,me===null&&Wa(S,We.el),te&&Ze(te,H),(rt=X.props&&X.props.onVnodeUpdated)&&Ze(()=>Tt(rt,ie,X,ve),H)}else{let X;const{el:ne,props:te}=k,{bm:ie,m:ve,parent:me,root:rt,type:We}=S,Je=os(k);if(ys(S,!1),ie&&lr(ie),!Je&&(X=te&&te.onVnodeBeforeMount)&&Tt(X,me,k),ys(S,!0),ne&&Ie){const ot=()=>{S.subTree=xl(S),Ie(ne,S.subTree,S,H,null)};Je&&We.__asyncHydrate?We.__asyncHydrate(ne,S,ot):ot()}else{rt.ce&&rt.ce._injectChildStyle(We);const ot=S.subTree=xl(S);C(null,ot,F,B,S,H,$),k.el=ot.el}if(ve&&Ze(ve,H),!Je&&(X=te&&te.onVnodeMounted)){const ot=k;Ze(()=>Tt(X,me,ot),H)}(k.shapeFlag&256||me&&os(me.vnode)&&me.vnode.shapeFlag&256)&&S.a&&Ze(S.a,H),S.isMounted=!0,k=F=B=null}};S.scope.on();const W=S.effect=new Vg(G);S.scope.off();const V=S.update=W.run.bind(W),se=S.job=W.runIfDirty.bind(W);se.i=S,se.id=S.uid,W.scheduler=()=>Su(se),ys(S,!0),V()},re=(S,k,F)=>{k.component=S;const B=S.vnode.props;S.vnode=k,S.next=null,gT(S,k.props,B,F),vT(S,k.children,F),fs(),Tf(S),ds()},Q=(S,k,F,B,H,$,q,G,W=!1)=>{const V=S&&S.children,se=S?S.shapeFlag:0,X=k.children,{patchFlag:ne,shapeFlag:te}=k;if(ne>0){if(ne&128){$t(V,X,F,B,H,$,q,G,W);return}else if(ne&256){Me(V,X,F,B,H,$,q,G,W);return}}te&8?(se&16&&Et(V,H,$),X!==V&&h(F,X)):se&16?te&16?$t(V,X,F,B,H,$,q,G,W):Et(V,H,$,!0):(se&8&&h(F,""),te&16&&y(X,F,B,H,$,q,G,W))},Me=(S,k,F,B,H,$,q,G,W)=>{S=S||ii,k=k||ii;const V=S.length,se=k.length,X=Math.min(V,se);let ne;for(ne=0;ne<X;ne++){const te=k[ne]=W?Yn(k[ne]):At(k[ne]);C(S[ne],te,F,null,H,$,q,G,W)}V>se?Et(S,H,$,!0,!1,X):y(k,F,B,H,$,q,G,W,X)},$t=(S,k,F,B,H,$,q,G,W)=>{let V=0;const se=k.length;let X=S.length-1,ne=se-1;for(;V<=X&&V<=ne;){const te=S[V],ie=k[V]=W?Yn(k[V]):At(k[V]);if(Kt(te,ie))C(te,ie,F,null,H,$,q,G,W);else break;V++}for(;V<=X&&V<=ne;){const te=S[X],ie=k[ne]=W?Yn(k[ne]):At(k[ne]);if(Kt(te,ie))C(te,ie,F,null,H,$,q,G,W);else break;X--,ne--}if(V>X){if(V<=ne){const te=ne+1,ie=te<se?k[te].el:B;for(;V<=ne;)C(null,k[V]=W?Yn(k[V]):At(k[V]),F,ie,H,$,q,G,W),V++}}else if(V>ne)for(;V<=X;)Le(S[V],H,$,!0),V++;else{const te=V,ie=V,ve=new Map;for(V=ie;V<=ne;V++){const gt=k[V]=W?Yn(k[V]):At(k[V]);gt.key!=null&&ve.set(gt.key,V)}let me,rt=0;const We=ne-ie+1;let Je=!1,ot=0;const jn=new Array(We);for(V=0;V<We;V++)jn[V]=0;for(V=te;V<=X;V++){const gt=S[V];if(rt>=We){Le(gt,H,$,!0);continue}let Nt;if(gt.key!=null)Nt=ve.get(gt.key);else for(me=ie;me<=ne;me++)if(jn[me-ie]===0&&Kt(gt,k[me])){Nt=me;break}Nt===void 0?Le(gt,H,$,!0):(jn[Nt-ie]=V+1,Nt>=ot?ot=Nt:Je=!0,C(gt,k[Nt],F,null,H,$,q,G,W),rt++)}const $s=Je?TT(jn):ii;for(me=$s.length-1,V=We-1;V>=0;V--){const gt=ie+V,Nt=k[gt],Vs=gt+1<se?k[gt+1].el:B;jn[V]===0?C(null,Nt,F,Vs,H,$,q,G,W):Je&&(me<0||V!==$s[me]?Ot(Nt,F,Vs,2):me--)}}},Ot=(S,k,F,B,H=null)=>{const{el:$,type:q,transition:G,children:W,shapeFlag:V}=S;if(V&6){Ot(S.component.subTree,k,F,B);return}if(V&128){S.suspense.move(k,F,B);return}if(V&64){q.move(S,k,F,ee);return}if(q===ut){s($,k,F);for(let X=0;X<W.length;X++)Ot(W[X],k,F,B);s(S.anchor,k,F);return}if(q===fr){T(S,k,F);return}if(B!==2&&V&1&&G)if(B===0)G.beforeEnter($),s($,k,F),Ze(()=>G.enter($),H);else{const{leave:X,delayLeave:ne,afterLeave:te}=G,ie=()=>s($,k,F),ve=()=>{X($,()=>{ie(),te&&te()})};ne?ne($,ie,ve):ve()}else s($,k,F)},Le=(S,k,F,B=!1,H=!1)=>{const{type:$,props:q,ref:G,children:W,dynamicChildren:V,shapeFlag:se,patchFlag:X,dirs:ne,cacheIndex:te}=S;if(X===-2&&(H=!1),G!=null&&Pr(G,null,F,S,!0),te!=null&&(k.renderCache[te]=void 0),se&256){k.ctx.deactivate(S);return}const ie=se&1&&ne,ve=!os(S);let me;if(ve&&(me=q&&q.onVnodeBeforeUnmount)&&Tt(me,k,S),se&6)an(S.component,F,B);else{if(se&128){S.suspense.unmount(F,B);return}ie&&un(S,null,k,"beforeUnmount"),se&64?S.type.remove(S,k,F,ee,B):V&&!V.hasOnce&&($!==ut||X>0&&X&64)?Et(V,k,F,!1,!0):($===ut&&X&384||!H&&se&16)&&Et(W,k,F),B&&De(S)}(ve&&(me=q&&q.onVnodeUnmounted)||ie)&&Ze(()=>{me&&Tt(me,k,S),ie&&un(S,null,k,"unmounted")},F)},De=S=>{const{type:k,el:F,anchor:B,transition:H}=S;if(k===ut){Hn(F,B);return}if(k===fr){A(S);return}const $=()=>{i(F),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(S.shapeFlag&1&&H&&!H.persisted){const{leave:q,delayLeave:G}=H,W=()=>q(F,$);G?G(S.el,$,W):W()}else $()},Hn=(S,k)=>{let F;for(;S!==k;)F=g(S),i(S),S=F;i(k)},an=(S,k,F)=>{const{bum:B,scope:H,job:$,subTree:q,um:G,m:W,a:V}=S;na(W),na(V),B&&lr(B),H.stop(),$&&($.flags|=8,Le(q,S,k,F)),G&&Ze(G,k),Ze(()=>{S.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},Et=(S,k,F,B=!1,H=!1,$=0)=>{for(let q=$;q<S.length;q++)Le(S[q],k,F,B,H)},j=S=>{if(S.shapeFlag&6)return j(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const k=g(S.anchor||S.el),F=k&&k[$E];return F?g(F):k};let J=!1;const Y=(S,k,F)=>{S==null?k._vnode&&Le(k._vnode,null,null,!0):C(k._vnode||null,S,k,null,null,null,F),k._vnode=S,J||(J=!0,Tf(),Zo(),J=!1)},ee={p:C,um:Le,m:Ot,r:De,mt:le,mc:y,pc:Q,pbc:b,n:j,o:t};let he,Ie;return e&&([he,Ie]=e(ee)),{render:Y,hydrate:he,createApp:dT(Y,he)}}function Nl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ys({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function jm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bm(t,e,n=!1){const s=t.children,i=e.children;if(ae(s)&&ae(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Yn(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Bm(o,l)),l.type===ks&&(l.el=o.el)}}function TT(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function $m(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$m(e)}function na(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const bT=Symbol.for("v-scx"),IT=()=>Ye(bT);function CT(t,e){return Ou(t,null,e)}function ci(t,e,n){return Ou(t,e,n)}function Ou(t,e,n=Ae){const{immediate:s,deep:i,flush:r,once:o}=n,l=Xe({},n),c=e&&s||!e&&r!=="post";let u;if(vi){if(r==="sync"){const _=IT();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=fn,_.resume=fn,_.pause=fn,_}}const h=$e;l.call=(_,w,C)=>tn(_,h,w,C);let d=!1;r==="post"?l.scheduler=_=>{Ze(_,h&&h.suspense)}:r!=="sync"&&(d=!0,l.scheduler=(_,w)=>{w?_():Su(_)}),l.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const g=HE(t,e,l);return vi&&(u?u.push(g):c&&g()),g}function ST(t,e,n){const s=this.proxy,i=Ue(t)?t.includes(".")?Vm(s,t):()=>s[t]:t.bind(s,s);let r;oe(e)?r=e:(r=e.handler,n=e);const o=Yr(this),l=Ou(i,r.bind(s),n);return o(),l}function Vm(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const RT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${jt(e)}Modifiers`]||t[`${Us(e)}Modifiers`];function AT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let i=n;const r=e.startsWith("update:"),o=r&&RT(s,e.slice(7));o&&(o.trim&&(i=n.map(h=>Ue(h)?h.trim():h)),o.number&&(i=n.map(sE)));let l,c=s[l=bl(e)]||s[l=bl(jt(e))];!c&&r&&(c=s[l=bl(Us(e))]),c&&tn(c,t,6,i);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,tn(u,t,6,i)}}function Wm(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!oe(t)){const c=u=>{const h=Wm(u,e,!0);h&&(l=!0,Xe(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(Ne(t)&&s.set(t,null),null):(ae(r)?r.forEach(c=>o[c]=null):Xe(o,r),Ne(t)&&s.set(t,o),o)}function Va(t,e){return!t||!$r(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,Us(e))||Ee(t,e))}function xl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:d,data:g,setupState:_,ctx:w,inheritAttrs:C}=t,O=ea(t);let x,N;try{if(n.shapeFlag&4){const A=i||s,M=A;x=At(u.call(M,A,h,d,_,g,w)),N=l}else{const A=e;x=At(A.length>1?A(d,{attrs:l,slots:o,emit:c}):A(d,null)),N=e.props?l:PT(l)}}catch(A){dr.length=0,Si(A,t,1),x=Fe(et)}let T=x;if(N&&C!==!1){const A=Object.keys(N),{shapeFlag:M}=T;A.length&&M&7&&(r&&A.some(du)&&(N=OT(N,r)),T=On(T,N,!1,!0))}return n.dirs&&(T=On(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&_i(T,n.transition),x=T,ea(O),x}function kT(t,e=!0){let n;for(let s=0;s<t.length;s++){const i=t[s];if(Os(i)){if(i.type!==et||i.children==="v-if"){if(n)return;n=i}}else return}return n}const PT=t=>{let e;for(const n in t)(n==="class"||n==="style"||$r(n))&&((e||(e={}))[n]=t[n]);return e},OT=(t,e)=>{const n={};for(const s in t)(!du(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function NT(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Nf(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const g=h[d];if(o[g]!==s[g]&&!Va(u,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Nf(s,o,u):!0:!!o;return!1}function Nf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Va(n,r))return!0}return!1}function Wa({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const sa=t=>t.__isSuspense;let vc=0;const xT={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,l,c,u){if(t==null)MT(e,n,s,i,r,o,l,c,u);else{if(r&&r.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}LT(t,e,n,s,i,o,l,c,u)}},hydrate:DT,normalize:FT},Nu=xT;function Or(t,e){const n=t.props&&t.props[e];oe(n)&&n()}function MT(t,e,n,s,i,r,o,l,c){const{p:u,o:{createElement:h}}=c,d=h("div"),g=t.suspense=Gm(t,i,s,e,d,n,r,o,l,c);u(null,g.pendingBranch=t.ssContent,d,null,s,g,r,o),g.deps>0?(Or(t,"onPending"),Or(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,r,o),ui(g,t.ssFallback)):g.resolve(!1,!0)}function LT(t,e,n,s,i,r,o,l,{p:c,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const g=e.ssContent,_=e.ssFallback,{activeBranch:w,pendingBranch:C,isInFallback:O,isHydrating:x}=d;if(C)d.pendingBranch=g,Kt(g,C)?(c(C,g,d.hiddenContainer,null,i,d,r,o,l),d.deps<=0?d.resolve():O&&(x||(c(w,_,n,s,i,null,r,o,l),ui(d,_)))):(d.pendingId=vc++,x?(d.isHydrating=!1,d.activeBranch=C):u(C,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),O?(c(null,g,d.hiddenContainer,null,i,d,r,o,l),d.deps<=0?d.resolve():(c(w,_,n,s,i,null,r,o,l),ui(d,_))):w&&Kt(g,w)?(c(w,g,n,s,i,d,r,o,l),d.resolve(!0)):(c(null,g,d.hiddenContainer,null,i,d,r,o,l),d.deps<=0&&d.resolve()));else if(w&&Kt(g,w))c(w,g,n,s,i,d,r,o,l),ui(d,g);else if(Or(e,"onPending"),d.pendingBranch=g,g.shapeFlag&512?d.pendingId=g.component.suspenseId:d.pendingId=vc++,c(null,g,d.hiddenContainer,null,i,d,r,o,l),d.deps<=0)d.resolve();else{const{timeout:N,pendingId:T}=d;N>0?setTimeout(()=>{d.pendingId===T&&d.fallback(_)},N):N===0&&d.fallback(_)}}function Gm(t,e,n,s,i,r,o,l,c,u,h=!1){const{p:d,m:g,um:_,n:w,o:{parentNode:C,remove:O}}=u;let x;const N=UT(t);N&&e&&e.pendingBranch&&(x=e.pendingId,e.deps++);const T=t.props?Lg(t.props.timeout):void 0,A=r,M={vnode:t,parent:e,parentComponent:n,namespace:o,container:s,hiddenContainer:i,deps:0,pendingId:vc++,timeout:typeof T=="number"?T:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(D=!1,E=!1){const{vnode:y,activeBranch:v,pendingBranch:b,pendingId:P,effects:R,parentComponent:I,container:le}=M;let ue=!1;M.isHydrating?M.isHydrating=!1:D||(ue=v&&b.transition&&b.transition.mode==="out-in",ue&&(v.transition.afterLeave=()=>{P===M.pendingId&&(g(b,le,r===A?w(v):r,0),dc(R))}),v&&(C(v.el)===le&&(r=w(v)),_(v,I,M,!0)),ue||g(b,le,r,0)),ui(M,b),M.pendingBranch=null,M.isInFallback=!1;let Z=M.parent,re=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...R),re=!0;break}Z=Z.parent}!re&&!ue&&dc(R),M.effects=[],N&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!E&&e.resolve()),Or(y,"onResolve")},fallback(D){if(!M.pendingBranch)return;const{vnode:E,activeBranch:y,parentComponent:v,container:b,namespace:P}=M;Or(E,"onFallback");const R=w(y),I=()=>{M.isInFallback&&(d(null,D,b,R,v,null,P,l,c),ui(M,D))},le=D.transition&&D.transition.mode==="out-in";le&&(y.transition.afterLeave=I),M.isInFallback=!0,_(y,v,null,!0),le||I()},move(D,E,y){M.activeBranch&&g(M.activeBranch,D,E,y),M.container=D},next(){return M.activeBranch&&w(M.activeBranch)},registerDep(D,E,y){const v=!!M.pendingBranch;v&&M.deps++;const b=D.vnode.el;D.asyncDep.catch(P=>{Si(P,D,0)}).then(P=>{if(D.isUnmounted||M.isUnmounted||M.pendingId!==D.suspenseId)return;D.asyncResolved=!0;const{vnode:R}=D;Ec(D,P),b&&(R.el=b);const I=!b&&D.subTree.el;E(D,R,C(b||D.subTree.el),b?null:w(D.subTree),M,o,y),I&&O(I),Wa(D,R.el),v&&--M.deps===0&&M.resolve()})},unmount(D,E){M.isUnmounted=!0,M.activeBranch&&_(M.activeBranch,n,D,E),M.pendingBranch&&_(M.pendingBranch,n,D,E)}};return M}function DT(t,e,n,s,i,r,o,l,c){const u=e.suspense=Gm(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,l,!0),h=c(t,u.pendingBranch=e.ssContent,n,u,r,o);return u.deps===0&&u.resolve(!1,!0),h}function FT(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=xf(s?n.default:n),t.ssFallback=s?xf(n.fallback):Fe(et)}function xf(t){let e;if(oe(t)){const n=yi&&t._c;n&&(t._d=!1,Gt()),t=t(),n&&(t._d=!0,e=bt,qm())}return ae(t)&&(t=kT(t)),t=At(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Km(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):dc(t)}function ui(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t;let i=e.el;for(;!i&&e.component;)e=e.component.subTree,i=e.el;n.el=i,s&&s.subTree===n&&(s.vnode.el=i,Wa(s,i))}function UT(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const ut=Symbol.for("v-fgt"),ks=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),dr=[];let bt=null;function Gt(t=!1){dr.push(bt=t?null:[])}function qm(){dr.pop(),bt=dr[dr.length-1]||null}let yi=1;function Mf(t,e=!1){yi+=t,t<0&&bt&&e&&(bt.hasOnce=!0)}function zm(t){return t.dynamicChildren=yi>0?bt||ii:null,qm(),yi>0&&bt&&bt.push(t),t}function Ym(t,e,n,s,i,r){return zm(ia(t,e,n,s,i,r,!0))}function Zn(t,e,n,s,i){return zm(Fe(t,e,n,s,i,!0))}function Os(t){return t?t.__v_isVNode===!0:!1}function Kt(t,e){return t.type===e.type&&t.key===e.key}const Xm=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||Ve(t)||oe(t)?{i:it,r:t,k:e,f:!!n}:t:null);function ia(t,e=null,n=null,s=0,i=null,r=t===ut?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xm(e),ref:e&&Fo(e),scopeId:cm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:it};return l?(xu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),yi>0&&!o&&bt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&bt.push(c),c}const Fe=HT;function HT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Im)&&(t=et),Os(t)){const l=On(t,e,!0);return n&&xu(l,n),yi>0&&!r&&bt&&(l.shapeFlag&6?bt[bt.indexOf(t)]=l:bt.push(l)),l.patchFlag=-2,l}if(zT(t)&&(t=t.__vccOpts),e){e=jT(e);let{class:l,style:c}=e;l&&!Ue(l)&&(e.class=_u(l)),Ne(c)&&(Cu(c)&&!ae(c)&&(c=Xe({},c)),e.style=mu(c))}const o=Ue(t)?1:sa(t)?128:um(t)?64:Ne(t)?4:oe(t)?2:0;return ia(t,e,n,s,i,o,r,!0)}function jT(t){return t?Cu(t)||Nm(t)?Xe({},t):t:null}function On(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?Qm(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Xm(u),ref:e&&e.ref?n&&r?ae(r)?r.concat(Fo(e)):[r,Fo(e)]:Fo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ut?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&On(t.ssContent),ssFallback:t.ssFallback&&On(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&_i(h,c.clone(h)),h}function Jm(t=" ",e=0){return Fe(ks,null,t,e)}function TM(t,e){const n=Fe(fr,null,t);return n.staticCount=e,n}function At(t){return t==null||typeof t=="boolean"?Fe(et):ae(t)?Fe(ut,null,t.slice()):Os(t)?Yn(t):Fe(ks,null,String(t))}function Yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:On(t)}function xu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),xu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Nm(e)?e._ctx=it:i===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:it},n=32):(e=String(e),s&64?(n=16,e=[Jm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=_u([e.class,s.class]));else if(i==="style")e.style=mu([e.style,s.style]);else if($r(i)){const r=e[i],o=s[i];o&&r!==o&&!(ae(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Tt(t,e,n,s=null){tn(t,e,7,[n,s])}const BT=km();let $T=0;function VT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||BT,r={uid:$T++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mm(s,i),emitsOptions:Wm(s,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=AT.bind(null,r),t.ce&&t.ce(r),r}let $e=null;const zr=()=>$e||it;let ra,wc;{const t=ja(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ra=e("__VUE_INSTANCE_SETTERS__",n=>$e=n),wc=e("__VUE_SSR_SETTERS__",n=>vi=n)}const Yr=t=>{const e=$e;return ra(t),t.scope.on(),()=>{t.scope.off(),ra(e)}},Lf=()=>{$e&&$e.scope.off(),ra(null)};function Zm(t){return t.vnode.shapeFlag&4}let vi=!1;function WT(t,e=!1,n=!1){e&&wc(e);const{props:s,children:i}=t.vnode,r=Zm(t);pT(t,s,r,e),yT(t,i,n);const o=r?GT(t,e):void 0;return e&&wc(!1),o}function GT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,oT);const{setup:s}=n;if(s){fs();const i=t.setupContext=s.length>1?qT(t):null,r=Yr(t),o=Wr(s,t,0,[t.props,i]),l=Og(o);if(ds(),r(),(l||t.sp)&&!os(t)&&Au(t),l){if(o.then(Lf,Lf),e)return o.then(c=>{Ec(t,c)}).catch(c=>{Si(c,t,0)});t.asyncDep=o}else Ec(t,o)}else e_(t)}function Ec(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=rm(e)),e_(t)}function e_(t,e,n){const s=t.type;t.render||(t.render=s.render||fn);{const i=Yr(t);fs();try{aT(t)}finally{ds(),i()}}}const KT={get(t,e){return ct(t,"get",""),t[e]}};function qT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,KT),slots:t.slots,emit:t.emit,expose:e}}function Mu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(rm(hc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hr)return hr[n](t)},has(e,n){return n in e||n in hr}})):t.proxy}function Tc(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function zT(t){return oe(t)&&"__vccOpts"in t}const Dt=(t,e)=>FE(t,e,vi);function ze(t,e,n){const s=arguments.length;return s===2?Ne(e)&&!ae(e)?Os(e)?Fe(t,null,[e]):Fe(t,e):Fe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Os(n)&&(n=[n]),Fe(t,e,n))}const YT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bc;const Df=typeof window<"u"&&window.trustedTypes;if(Df)try{bc=Df.createPolicy("vue",{createHTML:t=>t})}catch{}const t_=bc?t=>bc.createHTML(t):t=>t,XT="http://www.w3.org/2000/svg",JT="http://www.w3.org/1998/Math/MathML",In=typeof document<"u"?document:null,Ff=In&&In.createElement("template"),QT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?In.createElementNS(XT,t):e==="mathml"?In.createElementNS(JT,t):n?In.createElement(t,{is:n}):In.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ff.innerHTML=t_(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Ff.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gn="transition",Xi="animation",Nr=Symbol("_vtc"),n_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ZT=Xe({},hm,n_),eb=t=>(t.displayName="Transition",t.props=ZT,t),tb=eb((t,{slots:e})=>ze(GE,nb(t),e)),vs=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uf=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function nb(t){const e={};for(const R in t)R in n_||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,w=sb(i),C=w&&w[0],O=w&&w[1],{onBeforeEnter:x,onEnter:N,onEnterCancelled:T,onLeave:A,onLeaveCancelled:M,onBeforeAppear:D=x,onAppear:E=N,onAppearCancelled:y=T}=e,v=(R,I,le,ue)=>{R._enterCancelled=ue,ws(R,I?h:l),ws(R,I?u:o),le&&le()},b=(R,I)=>{R._isLeaving=!1,ws(R,d),ws(R,_),ws(R,g),I&&I()},P=R=>(I,le)=>{const ue=R?E:N,Z=()=>v(I,R,le);vs(ue,[I,Z]),Hf(()=>{ws(I,R?c:r),Tn(I,R?h:l),Uf(ue)||jf(I,s,C,Z)})};return Xe(e,{onBeforeEnter(R){vs(x,[R]),Tn(R,r),Tn(R,o)},onBeforeAppear(R){vs(D,[R]),Tn(R,c),Tn(R,u)},onEnter:P(!1),onAppear:P(!0),onLeave(R,I){R._isLeaving=!0;const le=()=>b(R,I);Tn(R,d),R._enterCancelled?(Tn(R,g),Vf()):(Vf(),Tn(R,g)),Hf(()=>{R._isLeaving&&(ws(R,d),Tn(R,_),Uf(A)||jf(R,s,O,le))}),vs(A,[R,le])},onEnterCancelled(R){v(R,!1,void 0,!0),vs(T,[R])},onAppearCancelled(R){v(R,!0,void 0,!0),vs(y,[R])},onLeaveCancelled(R){b(R),vs(M,[R])}})}function sb(t){if(t==null)return null;if(Ne(t))return[Ml(t.enter),Ml(t.leave)];{const e=Ml(t);return[e,e]}}function Ml(t){return Lg(t)}function Tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Nr]||(t[Nr]=new Set)).add(e)}function ws(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Nr];n&&(n.delete(e),n.size||(t[Nr]=void 0))}function Hf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ib=0;function jf(t,e,n,s){const i=t._endId=++ib,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:l,propCount:c}=rb(t,e);if(!o)return s();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,g),r()},g=_=>{_.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},l+1),t.addEventListener(u,g)}function rb(t,e){const n=window.getComputedStyle(t),s=w=>(n[w]||"").split(", "),i=s(`${Gn}Delay`),r=s(`${Gn}Duration`),o=Bf(i,r),l=s(`${Xi}Delay`),c=s(`${Xi}Duration`),u=Bf(l,c);let h=null,d=0,g=0;e===Gn?o>0&&(h=Gn,d=o,g=r.length):e===Xi?u>0&&(h=Xi,d=u,g=c.length):(d=Math.max(o,u),h=d>0?o>u?Gn:Xi:null,g=h?h===Gn?r.length:c.length:0);const _=h===Gn&&/\b(transform|all)(,|$)/.test(s(`${Gn}Property`).toString());return{type:h,timeout:d,propCount:g,hasTransform:_}}function Bf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>$f(n)+$f(t[s])))}function $f(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Vf(){return document.body.offsetHeight}function ob(t,e,n){const s=t[Nr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wf=Symbol("_vod"),ab=Symbol("_vsh"),lb=Symbol(""),cb=/(^|;)\s*display\s*:/;function ub(t,e,n){const s=t.style,i=Ue(n);let r=!1;if(n&&!i){if(e)if(Ue(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Uo(s,l,"")}else for(const o in e)n[o]==null&&Uo(s,o,"");for(const o in n)o==="display"&&(r=!0),Uo(s,o,n[o])}else if(i){if(e!==n){const o=s[lb];o&&(n+=";"+o),s.cssText=n,r=cb.test(n)}}else e&&t.removeAttribute("style");Wf in t&&(t[Wf]=r?s.display:"",t[ab]&&(s.display="none"))}const Gf=/\s*!important$/;function Uo(t,e,n){if(ae(n))n.forEach(s=>Uo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=hb(t,e);Gf.test(n)?t.setProperty(Us(s),n.replace(Gf,""),"important"):t[s]=n}}const Kf=["Webkit","Moz","ms"],Ll={};function hb(t,e){const n=Ll[e];if(n)return n;let s=jt(e);if(s!=="filter"&&s in t)return Ll[e]=s;s=Ha(s);for(let i=0;i<Kf.length;i++){const r=Kf[i]+s;if(r in t)return Ll[e]=r}return e}const qf="http://www.w3.org/1999/xlink";function zf(t,e,n,s,i,r=cE(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qf,e.slice(6,e.length)):t.setAttributeNS(qf,e,n):n==null||r&&!Dg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ln(n)?String(n):n)}function Yf(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?t_(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Dg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function fb(t,e,n,s){t.addEventListener(e,n,s)}function db(t,e,n,s){t.removeEventListener(e,n,s)}const Xf=Symbol("_vei");function pb(t,e,n,s,i=null){const r=t[Xf]||(t[Xf]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=gb(e);if(s){const u=r[e]=yb(s,i);fb(t,l,u,c)}else o&&(db(t,l,o,c),r[e]=void 0)}}const Jf=/(?:Once|Passive|Capture)$/;function gb(t){let e;if(Jf.test(t)){e={};let s;for(;s=t.match(Jf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Us(t.slice(2)),e]}let Dl=0;const mb=Promise.resolve(),_b=()=>Dl||(mb.then(()=>Dl=0),Dl=Date.now());function yb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tn(vb(s,n.value),e,5,[s])};return n.value=t,n.attached=_b(),n}function vb(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Qf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wb=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?ob(t,s,o):e==="style"?ub(t,n,s):$r(e)?du(e)||pb(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Eb(t,e,s,o))?(Yf(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zf(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(s))?Yf(t,jt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),zf(t,e,s,o))};function Eb(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qf(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Qf(e)&&Ue(n)?!1:e in t}const s_=Xe({patchProp:wb},QT);let pr,Zf=!1;function Tb(){return pr||(pr=wT(s_))}function bb(){return pr=Zf?pr:ET(s_),Zf=!0,pr}const Ib=(...t)=>{const e=Tb().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=r_(s);if(!i)return;const r=e._component;!oe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,i_(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},Cb=(...t)=>{const e=bb().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=r_(s);if(i)return n(i,!0,i_(i))},e};function i_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function r_(t){return Ue(t)?document.querySelector(t):t}const Sb=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Rb=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Ab=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function kb(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Pb(t);return}return e}function Pb(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function oa(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!Ab.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(Sb.test(t)||Rb.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,kb)}return JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}const Ob=/#/g,Nb=/&/g,xb=/\//g,Mb=/=/g,Lu=/\+/g,Lb=/%5e/gi,Db=/%60/gi,Fb=/%7c/gi,Ub=/%20/gi;function Hb(t){return encodeURI(""+t).replace(Fb,"|")}function Ic(t){return Hb(typeof t=="string"?t:JSON.stringify(t)).replace(Lu,"%2B").replace(Ub,"+").replace(Ob,"%23").replace(Nb,"%26").replace(Db,"`").replace(Lb,"^").replace(xb,"%2F")}function Fl(t){return Ic(t).replace(Mb,"%3D")}function aa(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function jb(t){return aa(t.replace(Lu," "))}function Bb(t){return aa(t.replace(Lu," "))}function o_(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const i=jb(s[1]);if(i==="__proto__"||i==="constructor")continue;const r=Bb(s[2]||"");e[i]===void 0?e[i]=r:Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]}return e}function $b(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Fl(t)}=${Ic(n)}`).join("&"):`${Fl(t)}=${Ic(e)}`:Fl(t)}function Vb(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>$b(e,t[e])).filter(Boolean).join("&")}const Wb=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Gb=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Kb=/^([/\\]\s*){2,}[^/\\]/,qb=/^[\s\0]*(blob|data|javascript|vbscript):$/i,zb=/\/$|\/\?|\/#/,Yb=/^\.?\//;function Hs(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?Wb.test(t):Gb.test(t)||(e.acceptRelative?Kb.test(t):!1)}function Xb(t){return!!t&&qb.test(t)}function Cc(t="",e){return e?zb.test(t):t.endsWith("/")}function Du(t="",e){if(!e)return(Cc(t)?t.slice(0,-1):t)||"/";if(!Cc(t,!0))return t||"/";let n=t,s="";const i=t.indexOf("#");i!==-1&&(n=t.slice(0,i),s=t.slice(i));const[r,...o]=n.split("?");return((r.endsWith("/")?r.slice(0,-1):r)||"/")+(o.length>0?`?${o.join("?")}`:"")+s}function Sc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Cc(t,!0))return t||"/";let n=t,s="";const i=t.indexOf("#");if(i!==-1&&(n=t.slice(0,i),s=t.slice(i),!n))return s;const[r,...o]=n.split("?");return r+"/"+(o.length>0?`?${o.join("?")}`:"")+s}function Jb(t=""){return t.startsWith("/")}function ed(t=""){return Jb(t)?t:"/"+t}function Qb(t,e){if(l_(e)||Hs(t))return t;const n=Du(e);return t.startsWith(n)?t:Fu(n,t)}function td(t,e){if(l_(e))return t;const n=Du(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function a_(t,e){const n=h_(t),s={...o_(n.search),...e};return n.search=Vb(s),t0(n)}function l_(t){return!t||t==="/"}function Zb(t){return t&&t!=="/"}function Fu(t,...e){let n=t||"";for(const s of e.filter(i=>Zb(i)))if(n){const i=s.replace(Yb,"");n=Sc(n)+i}else n=s;return n}function c_(...t){var o,l,c,u;const e=/\/(?!\/)/,n=t.filter(Boolean),s=[];let i=0;for(const h of n)if(!(!h||h==="/")){for(const[d,g]of h.split(e).entries())if(!(!g||g===".")){if(g===".."){if(s.length===1&&Hs(s[0]))continue;s.pop(),i--;continue}if(d===1&&((o=s[s.length-1])!=null&&o.endsWith(":/"))){s[s.length-1]+="/"+g;continue}s.push(g),i++}}let r=s.join("/");return i>=0?(l=n[0])!=null&&l.startsWith("/")&&!r.startsWith("/")?r="/"+r:(c=n[0])!=null&&c.startsWith("./")&&!r.startsWith("./")&&(r="./"+r):r="../".repeat(-1*i)+r,(u=n[n.length-1])!=null&&u.endsWith("/")&&!r.endsWith("/")&&(r+="/"),r}function e0(t,e,n={}){return n.trailingSlash||(t=Sc(t),e=Sc(e)),n.leadingSlash||(t=ed(t),e=ed(e)),n.encoding||(t=aa(t),e=aa(e)),t===e}const u_=Symbol.for("ufo:protocolRelative");function h_(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,g=""]=n;return{protocol:d.toLowerCase(),pathname:g,href:d+g,auth:"",host:"",search:"",hash:""}}if(!Hs(t,{acceptRelative:!0}))return nd(t);const[,s="",i,r=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",l=""]=r.match(/([^#/?]*)(.*)?/)||[];s==="file:"&&(l=l.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:h}=nd(l);return{protocol:s.toLowerCase(),auth:i?i.slice(0,Math.max(0,i.length-1)):"",host:o,pathname:c,search:u,hash:h,[u_]:!s}}function nd(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function t0(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",s=t.hash||"",i=t.auth?t.auth+"@":"",r=t.host||"";return(t.protocol||t[u_]?(t.protocol||"")+"//":"")+i+r+e+n+s}class n0 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function s0(t){var c,u,h,d,g;const e=((c=t.error)==null?void 0:c.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",s=((g=t.request)==null?void 0:g.url)||String(t.request)||"/",i=`[${n}] ${JSON.stringify(s)}`,r=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${i}: ${r}${e?` ${e}`:""}`,l=new n0(o,t.error?{cause:t.error}:void 0);for(const _ of["request","options","response"])Object.defineProperty(l,_,{get(){return t[_]}});for(const[_,w]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(l,_,{get(){return t.response&&t.response[w]}});return l}const i0=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function sd(t="GET"){return i0.has(t.toUpperCase())}function r0(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const o0=new Set(["image/svg","application/xml","application/xhtml","application/html"]),a0=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function l0(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return a0.test(e)?"json":o0.has(e)||e.startsWith("text/")?"text":"blob"}function c0(t,e,n,s){const i=u0((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,s);let r;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(r={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:r,params:r,headers:i}}function u0(t,e,n){if(!e)return new n(t);const s=new n(e);if(t)for(const[i,r]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))s.set(i,r);return s}async function Ro(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const h0=new Set([408,409,425,429,500,502,503,504]),f0=new Set([101,204,205,304]);function f_(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:s=globalThis.AbortController}=t;async function i(l){const c=l.error&&l.error.name==="AbortError"&&!l.options.timeout||!1;if(l.options.retry!==!1&&!c){let h;typeof l.options.retry=="number"?h=l.options.retry:h=sd(l.options.method)?0:1;const d=l.response&&l.response.status||500;if(h>0&&(Array.isArray(l.options.retryStatusCodes)?l.options.retryStatusCodes.includes(d):h0.has(d))){const g=typeof l.options.retryDelay=="function"?l.options.retryDelay(l):l.options.retryDelay||0;return g>0&&await new Promise(_=>setTimeout(_,g)),r(l.request,{...l.options,retry:h-1})}}const u=s0(l);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}const r=async function(c,u={}){const h={request:c,options:c0(c,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await Ro(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=Qb(h.request,h.options.baseURL)),h.options.query&&(h.request=a_(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&sd(h.options.method)&&(r0(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const _=new s;d=setTimeout(()=>{const w=new Error("[TimeoutError]: The operation was aborted due to timeout");w.name="TimeoutError",w.code=23,_.abort(w)},h.options.timeout),h.options.signal=_.signal}try{h.response=await e(h.request,h.options)}catch(_){return h.error=_,h.options.onRequestError&&await Ro(h,h.options.onRequestError),await i(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!f0.has(h.response.status)&&h.options.method!=="HEAD"){const _=(h.options.parseResponse?"json":h.options.responseType)||l0(h.response.headers.get("content-type")||"");switch(_){case"json":{const w=await h.response.text(),C=h.options.parseResponse||oa;h.response._data=C(w);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[_]()}}return h.options.onResponse&&await Ro(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await Ro(h,h.options.onResponseError),await i(h)):h.response},o=async function(c,u){return(await r(c,u))._data};return o.raw=r,o.native=(...l)=>e(...l),o.create=(l={},c={})=>f_({...t,...c,defaults:{...t.defaults,...c.defaults,...l}}),o}const la=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),d0=la.fetch?(...t)=>la.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),p0=la.Headers,g0=la.AbortController,m0=f_({fetch:d0,Headers:p0,AbortController:g0}),_0=m0,y0=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},ca=y0().app,v0=()=>ca.baseURL,w0=()=>ca.buildAssetsDir,Uu=(...t)=>c_(d_(),w0(),...t),d_=(...t)=>{const e=ca.cdnURL||ca.baseURL;return t.length?c_(e,...t):e};globalThis.__buildAssetsURL=Uu,globalThis.__publicAssetsURL=d_;globalThis.$fetch||(globalThis.$fetch=_0.create({baseURL:v0()}));function Rc(t,e={},n){for(const s in t){const i=t[s],r=n?`${n}:${s}`:s;typeof i=="object"&&i!==null?Rc(i,e,r):typeof i=="function"&&(e[r]=i)}return e}const E0={run:t=>t()},T0=()=>E0,p_=typeof console.createTask<"u"?console.createTask:T0;function b0(t,e){const n=e.shift(),s=p_(n);return t.reduce((i,r)=>i.then(()=>s.run(()=>r(...e))),Promise.resolve())}function I0(t,e){const n=e.shift(),s=p_(n);return Promise.all(t.map(i=>s.run(()=>i(...e))))}function Ul(t,e){for(const n of[...t])n(e)}class C0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const i=e;let r;for(;this._deprecatedHooks[e];)r=this._deprecatedHooks[e],e=r.to;if(r&&!s.allowDeprecated){let o=r.message;o||(o=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,i=(...r)=>(typeof s=="function"&&s(),s=void 0,i=void 0,n(...r));return s=this.hook(e,i),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const i of s)this.hook(e,i)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Rc(e),s=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of s.splice(0,s.length))i()}}removeHooks(e){const n=Rc(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(b0,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(I0,e,...n)}callHookWith(e,n,...s){const i=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Ul(this._before,i);const r=e(n in this._hooks?[...this._hooks[n]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&i&&Ul(this._after,i)}):(this._after&&i&&Ul(this._after,i),r)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function g_(){return new C0}function S0(t={}){let e,n=!1;const s=o=>{if(e&&e!==o)throw new Error("Context conflict")};let i;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?i=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const r=()=>{if(i){const o=i.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=r();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>r(),set:(o,l)=>{l||s(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,l)=>{s(o),e=o;try{return i?i.run(o,l):l()}finally{n||(e=void 0)}},async callAsync(o,l){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;Ac.add(u);try{const h=i?i.run(o,l):l();return n||(e=void 0),await h}finally{Ac.delete(u)}}}}function R0(t={}){const e={};return{get(n,s={}){return e[n]||(e[n]=S0({...t,...s})),e[n]}}}const ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},id="__unctx__",A0=ua[id]||(ua[id]=R0()),k0=(t,e={})=>A0.get(t,e),rd="__unctx_async_handlers__",Ac=ua[rd]||(ua[rd]=new Set);function hi(t){const e=[];for(const i of Ac){const r=i();r&&e.push(r)}const n=()=>{for(const i of e)i()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(i=>{throw n(),i})),[s,n]}const P0=!1,kc=!1,O0=!0,N0=!1,od={id:"__nuxt-loader"},bM={prefetchOn:{interaction:!0,visibility:!1},componentName:"NuxtLink",prefetch:!0},x0=void 0,M0="#__nuxt",m_="nuxt-app",ad=36e5,L0="vite:preloadError";function __(t=m_){return k0(t,{asyncContext:!1})}const D0="__nuxt_plugin";function F0(t){var i;let e=0;const n={_id:t.id||m_||"nuxt-app",_scope:Bg(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.16.2"},get vue(){return n.vueApp.version}},payload:Sn({...((i=t.ssrContext)==null?void 0:i.payload)||{},data:Sn({}),state:Dn({}),once:new Set,_errors:Sn({})}),static:{data:{}},runWithContext(r){return n._scope.active&&!$g()?n._scope.run(()=>ld(n,r)):ld(n,r)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Sn({}),_payloadRevivers:{},...t};{const r=window.__NUXT__;if(r)for(const o in r)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],r[o]);break;default:n.payload[o]=r[o]}}n.hooks=g_(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,o)=>{const l="$"+r;Ao(n,l,o),Ao(n.vueApp.config.globalProperties,l,o)},Ao(n.vueApp,"$nuxt",n),Ao(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(L0,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=He);const r=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",r)}const s=n.payload.config;return n.provide("config",s),n}function U0(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function H0(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}}async function j0(t,e){const n=[],s=[],i=[],r=[];let o=0;async function l(c){var h;const u=((h=c.dependsOn)==null?void 0:h.filter(d=>e.some(g=>g._name===d)&&!n.includes(d)))??[];if(u.length>0)s.push([new Set(u),c]);else{const d=H0(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(s.map(async([g,_])=>{g.has(c._name)&&(g.delete(c._name),g.size===0&&(o++,await l(_)))})))});c.parallel?i.push(d.catch(g=>r.push(g))):await d}}for(const c of e)U0(t,c);for(const c of e)await l(c);if(await Promise.all(i),o)for(let c=0;c<o;c++)await Promise.all(i);if(r.length)throw r[0]}function pt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[D0]:!0,_name:e})}const B0=pt;function ld(t,e,n){const s=()=>e();return __(t._id).set(t),t.vueApp.runWithContext(s)}function $0(t){var n;let e;return $a()&&(e=(n=zr())==null?void 0:n.appContext.app.$nuxt),e||(e=__(t).tryUse()),e||null}function He(t){const e=$0(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ri(t){return He().$config}function Ao(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function V0(t,e){return{ctx:{table:t},matchAll:n=>v_(n,t)}}function y_(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([s,i])=>[s,y_(i)])):new Map(Object.entries(t[n]));return e}function W0(t){return V0(y_(t))}function v_(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const s=[];for(const[r,o]of cd(e.wildcard))(t===r||t.startsWith(r+"/"))&&s.push(o);for(const[r,o]of cd(e.dynamic))if(t.startsWith(r+"/")){const l="/"+t.slice(r.length).split("/").splice(2).join("/");s.push(...v_(l,o))}const i=e.static.get(t);return i&&s.push(i),s.filter(Boolean)}function cd(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Hl(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Pc(t,e,n=".",s){if(!Hl(e))return Pc(t,{},n,s);const i=Object.assign({},e);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const o=t[r];o!=null&&(s&&s(i,r,o,n)||(Array.isArray(o)&&Array.isArray(i[r])?i[r]=[...o,...i[r]]:Hl(o)&&Hl(i[r])?i[r]=Pc(o,i[r],(n?`${n}.`:"")+r.toString(),s):i[r]=o))}return i}function w_(t){return(...e)=>e.reduce((n,s)=>Pc(n,s,"",t),{})}const E_=w_(),G0=w_((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function K0(t,e){try{return e in t}catch{return!1}}class Oc extends Error{constructor(n,s={}){super(n,s);Wn(this,"statusCode",500);Wn(this,"fatal",!1);Wn(this,"unhandled",!1);Wn(this,"statusMessage");Wn(this,"data");Wn(this,"cause");s.cause&&!this.cause&&(this.cause=s.cause)}toJSON(){const n={message:this.message,statusCode:Nc(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=T_(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}Wn(Oc,"__h3_error__",!0);function Ho(t){if(typeof t=="string")return new Oc(t);if(q0(t))return t;const e=new Oc(t.message??t.statusMessage??"",{cause:t.cause||t});if(K0(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Nc(t.statusCode,e.statusCode):t.status&&(e.statusCode=Nc(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;T_(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function q0(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const z0=/[^\u0009\u0020-\u007E]/g;function T_(t=""){return t.replace(z0,"")}function Nc(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const b_=Symbol("layout-meta"),Xr=Symbol("route"),Ct=()=>{var t;return(t=He())==null?void 0:t.$router},Hu=()=>$a()?Ye(Xr,He()._route):He()._route;const Y0=()=>{try{if(He()._processingMiddleware)return!0}catch{return!1}return!1},IM=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?X0(t):Ct().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,g])=>g!==void 0).map(([d,g])=>`${d.toLowerCase()}=${g}`).join(", ");return open(n,c,h),Promise.resolve()}const s=Hs(n,{acceptRelative:!0}),i=(e==null?void 0:e.external)||s;if(i){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&Xb(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const r=Y0();if(!i&&r){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:c,search:u,hash:h}=h_(t);return{path:c,...u&&{query:o_(u)},...h&&{hash:h},replace:!0}}return{...t,replace:!0}}return t}const o=Ct(),l=He();return i?(l._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,r?l.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function X0(t){return a_(t.path||"",t.query||{})+(t.hash||"")}const I_="__nuxt_error",Ga=()=>ME(He().payload,"error"),Xn=t=>{const e=Ka(t);try{const n=He(),s=Ga();n.hooks.callHook("app:error",e),s.value||(s.value=e)}catch{throw e}return e},C_=async(t={})=>{const e=He(),n=Ga();e.callHook("app:error:cleared",t),t.redirect&&await Ct().replace(t.redirect),n.value=x0},S_=t=>!!t&&typeof t=="object"&&I_ in t,Ka=t=>{const e=Ho(t);return Object.defineProperty(e,I_,{value:!0,configurable:!1,writable:!1}),e},J0=()=>{};var ud={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw Ai(e)},Ai=function(t){return new Error("Firebase Database ("+R_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Q0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},qa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=r>>2,d=(r&3)<<4|l>>4;let g=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),s.push(n[h],n[d],n[g],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(A_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Q0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||d==null)throw new Z0;const g=r<<2|l>>4;if(s.push(g),u!==64){const _=l<<4&240|u>>2;if(s.push(_),d!==64){const w=u<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Z0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k_=function(t){const e=A_(t);return qa.encodeByteArray(e,!0)},P_=function(t){return k_(t).replace(/\./g,"")},ha=function(t){try{return qa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){return O_(void 0,t)}function O_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tI(n)||(t[n]=O_(t[n],e[n]));return t}function tI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=()=>nI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof ud>"u")return;const t=ud.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ha(t[1]);return e&&JSON.parse(e)},N_=()=>{try{return J0()||sI()||iI()||rI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x_=()=>{var t;return(t=N_())===null||t===void 0?void 0:t.config},oI=t=>{var e;return(e=N_())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ju(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function aI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function M_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cI(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uI(){return R_.NODE_ADMIN===!0}function L_(){try{return typeof indexedDB=="object"}catch{return!1}}function hI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="FirebaseError";class _n extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=fI,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?dI(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _n(i,l,s)}}function dI(t,e){return t.replace(pI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const pI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Mr(ha(r[0])||""),n=Mr(ha(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},gI=function(t){const e=D_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},mI=function(t){const e=D_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fa(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function da(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(hd(r)&&hd(o)){if(!da(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function hd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const g=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^r&(o^l),h=1518500249):(u=r^o^l,h=1859775393):d<60?(u=r&o|l&(r|o),h=2400959708):(u=r^o^l,h=3395469782);const g=(i<<5|i>>>27)+u+c+h+s[d]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function yI(t,e){const n=new vI(t,e);return n.subscribe.bind(n)}class vI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");wI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=jl),i.error===void 0&&(i.error=jl),i.complete===void 0&&(i.complete=jl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jl(){}function EI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,z(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},za=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CI(e))try{this.getOrInitializeService({instanceIdentifier:bs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bs){return this.instances.has(e)}getOptions(e=bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:II(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=bs){return this.component?this.component.multipleInstances?e:bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function II(t){return t===bs?void 0:t}function CI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const RI={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},AI=Te.INFO,kI={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},PI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=kI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jr{constructor(e){this.name=e,this._logLevel=AI,this._logHandler=PI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const OI=(t,e)=>e.some(n=>t instanceof n);let fd,dd;function NI(){return fd||(fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xI(){return dd||(dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F_=new WeakMap,Mc=new WeakMap,U_=new WeakMap,Bl=new WeakMap,Bu=new WeakMap;function MI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(as(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&F_.set(n,t)}).catch(()=>{}),Bu.set(e,t),e}function LI(t){if(Mc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Mc.set(t,e)}let Lc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||U_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return as(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DI(t){Lc=t(Lc)}function FI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($l(this),e,...n);return U_.set(s,e.sort?e.sort():[e]),as(s)}:xI().includes(t)?function(...e){return t.apply($l(this),e),as(F_.get(this))}:function(...e){return as(t.apply($l(this),e))}}function UI(t){return typeof t=="function"?FI(t):(t instanceof IDBTransaction&&LI(t),OI(t,NI())?new Proxy(t,Lc):t)}function as(t){if(t instanceof IDBRequest)return MI(t);if(Bl.has(t))return Bl.get(t);const e=UI(t);return e!==t&&(Bl.set(t,e),Bu.set(e,t)),e}const $l=t=>Bu.get(t);function HI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=as(o);return s&&o.addEventListener("upgradeneeded",c=>{s(as(o.result),c.oldVersion,c.newVersion,as(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const jI=["get","getKey","getAll","getAllKeys","count"],BI=["put","add","delete","clear"],Vl=new Map;function pd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=BI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jI.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Vl.set(e,r),r}DI(t=>({...t,get:(e,n,s)=>pd(e,n)||t.get(e,n,s),has:(e,n)=>!!pd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function VI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",gd="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Jr("@firebase/app"),WI="@firebase/app-compat",GI="@firebase/analytics-compat",KI="@firebase/analytics",qI="@firebase/app-check-compat",zI="@firebase/app-check",YI="@firebase/auth",XI="@firebase/auth-compat",JI="@firebase/database",QI="@firebase/data-connect",ZI="@firebase/database-compat",eC="@firebase/functions",tC="@firebase/functions-compat",nC="@firebase/installations",sC="@firebase/installations-compat",iC="@firebase/messaging",rC="@firebase/messaging-compat",oC="@firebase/performance",aC="@firebase/performance-compat",lC="@firebase/remote-config",cC="@firebase/remote-config-compat",uC="@firebase/storage",hC="@firebase/storage-compat",fC="@firebase/firestore",dC="@firebase/vertexai",pC="@firebase/firestore-compat",gC="firebase",mC="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="[DEFAULT]",_C={[Dc]:"fire-core",[WI]:"fire-core-compat",[KI]:"fire-analytics",[GI]:"fire-analytics-compat",[zI]:"fire-app-check",[qI]:"fire-app-check-compat",[YI]:"fire-auth",[XI]:"fire-auth-compat",[JI]:"fire-rtdb",[QI]:"fire-data-connect",[ZI]:"fire-rtdb-compat",[eC]:"fire-fn",[tC]:"fire-fn-compat",[nC]:"fire-iid",[sC]:"fire-iid-compat",[iC]:"fire-fcm",[rC]:"fire-fcm-compat",[oC]:"fire-perf",[aC]:"fire-perf-compat",[lC]:"fire-rc",[cC]:"fire-rc-compat",[uC]:"fire-gcs",[hC]:"fire-gcs-compat",[fC]:"fire-fst",[pC]:"fire-fst-compat",[dC]:"fire-vertex","fire-js":"fire-js",[gC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map,yC=new Map,Uc=new Map;function md(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(Uc.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Uc.set(e,t);for(const n of pa.values())md(n,t);for(const n of yC.values())md(n,t);return!0}function vC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ls=new ki("app","Firebase",wC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ls.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=mC;function H_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ls.create("bad-app-name",{appName:String(i)});if(n||(n=x_()),!n)throw ls.create("no-options");const r=pa.get(i);if(r){if(da(n,r.options)&&da(s,r.config))return r;throw ls.create("duplicate-app",{appName:i})}const o=new SI(i);for(const c of Uc.values())o.addComponent(c);const l=new EC(n,s,o);return pa.set(i,l),l}function TC(t=Fc){const e=pa.get(t);if(!e&&t===Fc&&x_())return H_();if(!e)throw ls.create("no-app",{appName:t});return e}function kt(t,e,n){var s;let i=(s=_C[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(l.join(" "));return}gn(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="firebase-heartbeat-database",IC=1,Lr="firebase-heartbeat-store";let Wl=null;function j_(){return Wl||(Wl=HI(bC,IC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lr)}catch(n){console.warn(n)}}}}).catch(t=>{throw ls.create("idb-open",{originalErrorMessage:t.message})})),Wl}async function CC(t){try{const n=(await j_()).transaction(Lr),s=await n.objectStore(Lr).get(B_(t));return await n.done,s}catch(e){if(e instanceof _n)Nn.warn(e.message);else{const n=ls.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function _d(t,e){try{const s=(await j_()).transaction(Lr,"readwrite");await s.objectStore(Lr).put(e,B_(t)),await s.done}catch(n){if(n instanceof _n)Nn.warn(n.message);else{const s=ls.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(s.message)}}}function B_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=1024,RC=30;class AC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>RC){const o=OC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yd(),{heartbeatsToSend:s,unsentEntries:i}=kC(this._heartbeatsCache.heartbeats),r=P_(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Nn.warn(n),""}}}function yd(){return new Date().toISOString().substring(0,10)}function kC(t,e=SC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),vd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class PC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return L_()?hI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vd(t){return P_(JSON.stringify({version:2,heartbeats:t})).length}function OC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t){gn(new nn("platform-logger",e=>new $I(e),"PRIVATE")),gn(new nn("heartbeat",e=>new AC(e),"PRIVATE")),kt(Dc,gd,t),kt(Dc,gd,"esm2017"),kt("fire-js","")}NC("");var wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(b,P,R){for(var I=Array(arguments.length-2),le=2;le<arguments.length;le++)I[le-2]=arguments[le];return y.prototype[P].apply(b,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var b=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)b[P]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(P=0;16>P;++P)b[P]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],P=E.g[2];var R=E.g[3],I=y+(R^v&(P^R))+b[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=R+(P^y&(v^P))+b[1]+3905402710&4294967295,R=y+(I<<12&4294967295|I>>>20),I=P+(v^R&(y^v))+b[2]+606105819&4294967295,P=R+(I<<17&4294967295|I>>>15),I=v+(y^P&(R^y))+b[3]+3250441966&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(R^v&(P^R))+b[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=R+(P^y&(v^P))+b[5]+1200080426&4294967295,R=y+(I<<12&4294967295|I>>>20),I=P+(v^R&(y^v))+b[6]+2821735955&4294967295,P=R+(I<<17&4294967295|I>>>15),I=v+(y^P&(R^y))+b[7]+4249261313&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(R^v&(P^R))+b[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=R+(P^y&(v^P))+b[9]+2336552879&4294967295,R=y+(I<<12&4294967295|I>>>20),I=P+(v^R&(y^v))+b[10]+4294925233&4294967295,P=R+(I<<17&4294967295|I>>>15),I=v+(y^P&(R^y))+b[11]+2304563134&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(R^v&(P^R))+b[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=R+(P^y&(v^P))+b[13]+4254626195&4294967295,R=y+(I<<12&4294967295|I>>>20),I=P+(v^R&(y^v))+b[14]+2792965006&4294967295,P=R+(I<<17&4294967295|I>>>15),I=v+(y^P&(R^y))+b[15]+1236535329&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(P^R&(v^P))+b[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^P&(y^v))+b[6]+3225465664&4294967295,R=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(R^y))+b[11]+643717713&4294967295,P=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(P^R))+b[0]+3921069994&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(P^R&(v^P))+b[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^P&(y^v))+b[10]+38016083&4294967295,R=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(R^y))+b[15]+3634488961&4294967295,P=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(P^R))+b[4]+3889429448&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(P^R&(v^P))+b[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^P&(y^v))+b[14]+3275163606&4294967295,R=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(R^y))+b[3]+4107603335&4294967295,P=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(P^R))+b[8]+1163531501&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(P^R&(v^P))+b[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=R+(v^P&(y^v))+b[2]+4243563512&4294967295,R=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(R^y))+b[7]+1735328473&4294967295,P=R+(I<<14&4294967295|I>>>18),I=v+(R^y&(P^R))+b[12]+2368359562&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(v^P^R)+b[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^P)+b[8]+2272392833&4294967295,R=y+(I<<11&4294967295|I>>>21),I=P+(R^y^v)+b[11]+1839030562&4294967295,P=R+(I<<16&4294967295|I>>>16),I=v+(P^R^y)+b[14]+4259657740&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(v^P^R)+b[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^P)+b[4]+1272893353&4294967295,R=y+(I<<11&4294967295|I>>>21),I=P+(R^y^v)+b[7]+4139469664&4294967295,P=R+(I<<16&4294967295|I>>>16),I=v+(P^R^y)+b[10]+3200236656&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(v^P^R)+b[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^P)+b[0]+3936430074&4294967295,R=y+(I<<11&4294967295|I>>>21),I=P+(R^y^v)+b[3]+3572445317&4294967295,P=R+(I<<16&4294967295|I>>>16),I=v+(P^R^y)+b[6]+76029189&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(v^P^R)+b[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=R+(y^v^P)+b[12]+3873151461&4294967295,R=y+(I<<11&4294967295|I>>>21),I=P+(R^y^v)+b[15]+530742520&4294967295,P=R+(I<<16&4294967295|I>>>16),I=v+(P^R^y)+b[2]+3299628645&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(P^(v|~R))+b[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~P))+b[7]+1126891415&4294967295,R=y+(I<<10&4294967295|I>>>22),I=P+(y^(R|~v))+b[14]+2878612391&4294967295,P=R+(I<<15&4294967295|I>>>17),I=v+(R^(P|~y))+b[5]+4237533241&4294967295,v=P+(I<<21&4294967295|I>>>11),I=y+(P^(v|~R))+b[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~P))+b[3]+2399980690&4294967295,R=y+(I<<10&4294967295|I>>>22),I=P+(y^(R|~v))+b[10]+4293915773&4294967295,P=R+(I<<15&4294967295|I>>>17),I=v+(R^(P|~y))+b[1]+2240044497&4294967295,v=P+(I<<21&4294967295|I>>>11),I=y+(P^(v|~R))+b[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~P))+b[15]+4264355552&4294967295,R=y+(I<<10&4294967295|I>>>22),I=P+(y^(R|~v))+b[6]+2734768916&4294967295,P=R+(I<<15&4294967295|I>>>17),I=v+(R^(P|~y))+b[13]+1309151649&4294967295,v=P+(I<<21&4294967295|I>>>11),I=y+(P^(v|~R))+b[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=R+(v^(y|~P))+b[11]+3174756917&4294967295,R=y+(I<<10&4294967295|I>>>22),I=P+(y^(R|~v))+b[2]+718787259&4294967295,P=R+(I<<15&4294967295|I>>>17),I=v+(R^(P|~y))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+R&4294967295}s.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,b=this.B,P=this.h,R=0;R<y;){if(P==0)for(;R<=v;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<y;)if(b[P++]=E.charCodeAt(R++),P==this.blockSize){i(this,b),P=0;break}}else for(;R<y;)if(b[P++]=E[R++],P==this.blockSize){i(this,b),P=0;break}}this.h=P,this.o+=y},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var b=0;32>b;b+=8)E[v++]=this.g[y]>>>b&255;return E};function r(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;for(var v=[],b=!0,P=E.length-1;0<=P;P--){var R=E[P]|0;b&&R==y||(v[P]=R,b=!1)}this.g=v}var l={};function c(E){return-128<=E&&128>E?r(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return d;if(0>E)return O(u(-E));for(var y=[],v=1,b=0;E>=v;b++)y[b]=E/v|0,v*=4294967296;return new o(y,0)}function h(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return O(h(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),b=d,P=0;P<E.length;P+=8){var R=Math.min(8,E.length-P),I=parseInt(E.substring(P,P+R),y);8>R?(R=u(Math.pow(y,R)),b=b.j(R).add(u(I))):(b=b.j(v),b=b.add(u(I)))}return b}var d=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(C(this))return-O(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var b=this.i(v);E+=(0<=b?b:4294967296+b)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(w(this))return"0";if(C(this))return"-"+O(this).toString(E);for(var y=u(Math.pow(E,6)),v=this,b="";;){var P=A(v,y).g;v=x(v,P.j(y));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=P,w(v))return R+b;for(;6>R.length;)R="0"+R;b=R+b}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function w(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function C(E){return E.h==-1}t.l=function(E){return E=x(this,E),C(E)?-1:w(E)?0:1};function O(E){for(var y=E.g.length,v=[],b=0;b<y;b++)v[b]=~E.g[b];return new o(v,~E.h).add(g)}t.abs=function(){return C(this)?O(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],b=0,P=0;P<=y;P++){var R=b+(this.i(P)&65535)+(E.i(P)&65535),I=(R>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);b=I>>>16,R&=65535,I&=65535,v[P]=I<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function x(E,y){return E.add(O(y))}t.j=function(E){if(w(this)||w(E))return d;if(C(this))return C(E)?O(this).j(O(E)):O(O(this).j(E));if(C(E))return O(this.j(O(E)));if(0>this.l(_)&&0>E.l(_))return u(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],b=0;b<2*y;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var P=0;P<E.g.length;P++){var R=this.i(b)>>>16,I=this.i(b)&65535,le=E.i(P)>>>16,ue=E.i(P)&65535;v[2*b+2*P]+=I*ue,N(v,2*b+2*P),v[2*b+2*P+1]+=R*ue,N(v,2*b+2*P+1),v[2*b+2*P+1]+=I*le,N(v,2*b+2*P+1),v[2*b+2*P+2]+=R*le,N(v,2*b+2*P+2)}for(b=0;b<y;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=y;b<2*y;b++)v[b]=0;return new o(v,0)};function N(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function T(E,y){this.g=E,this.h=y}function A(E,y){if(w(y))throw Error("division by zero");if(w(E))return new T(d,d);if(C(E))return y=A(O(E),y),new T(O(y.g),O(y.h));if(C(y))return y=A(E,O(y)),new T(O(y.g),y.h);if(30<E.g.length){if(C(E)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,b=y;0>=b.l(E);)v=M(v),b=M(b);var P=D(v,1),R=D(b,1);for(b=D(b,2),v=D(v,2);!w(b);){var I=R.add(b);0>=I.l(E)&&(P=P.add(v),R=I),b=D(b,1),v=D(v,1)}return y=x(E,P.j(y)),new T(P,y)}for(P=d;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),R=u(v),I=R.j(y);C(I)||0<I.l(E);)v-=b,R=u(v),I=R.j(y);w(R)&&(R=g),P=P.add(R),E=x(E,I)}return new T(P,E)}t.A=function(E){return A(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)&E.i(b);return new o(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)|E.i(b);return new o(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)^E.i(b);return new o(v,this.h^E.h)};function M(E){for(var y=E.g.length+1,v=[],b=0;b<y;b++)v[b]=E.i(b)<<1|E.i(b-1)>>>31;return new o(v,E.h)}function D(E,y){var v=y>>5;y%=32;for(var b=E.g.length-v,P=[],R=0;R<b;R++)P[R]=0<y?E.i(R+v)>>>y|E.i(R+v+1)<<32-y:E.i(R+v);return new o(P,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,$_=o}).apply(typeof wd<"u"?wd:typeof self<"u"?self:typeof window<"u"?window:{});var ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ko=="object"&&ko];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function i(a,f){if(f)e:{var p=s;a=a.split(".");for(var m=0;m<a.length-1;m++){var L=a[m];if(!(L in p))break e;p=p[L]}a=a[a.length-1],m=p[a],f=f(m),f!=m&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function r(a,f){a instanceof String&&(a+="");var p=0,m=!1,L={next:function(){if(!m&&p<a.length){var U=p++;return{value:f(U,a[U]),done:!1}}return m=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return r(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,m),a.apply(f,L)}}return function(){return a.apply(f,arguments)}}function g(a,f,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,g.apply(null,arguments)}function _(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function w(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(m,L,U){for(var K=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)K[Se-2]=arguments[Se];return f.prototype[L].apply(m,K)}}function C(a){const f=a.length;if(0<f){const p=Array(f);for(let m=0;m<f;m++)p[m]=a[m];return p}return[]}function O(a,f){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(c(m)){const L=a.length||0,U=m.length||0;a.length=L+U;for(let K=0;K<U;K++)a[L+K]=m[K]}else a.push(m)}}class x{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function N(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function A(a){return A[" "](a),a}A[" "]=function(){};var M=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function D(a,f,p){for(const m in a)f.call(p,a[m],m,a)}function E(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function y(a){const f={};for(const p in a)f[p]=a[p];return f}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,f){let p,m;for(let L=1;L<arguments.length;L++){m=arguments[L];for(p in m)a[p]=m[p];for(let U=0;U<v.length;U++)p=v[U],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function P(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function R(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Me;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class le{constructor(){this.h=this.g=null}add(f,p){const m=ue.get();m.set(f,p),this.h?this.h.next=m:this.g=m,this.h=m}}var ue=new x(()=>new Z,a=>a.reset());class Z{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let re,Q=!1,Me=new le,$t=()=>{const a=l.Promise.resolve(void 0);re=()=>{a.then(Ot)}};var Ot=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(p){R(p)}var f=ue;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}Q=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var Hn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,f),l.removeEventListener("test",p,f)}catch{}return a}();function an(a,f){if(De.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(M){e:{try{A(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Et[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&an.aa.h.call(this)}}w(an,De);var Et={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(a,f,p,m,L){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!m,this.ha=L,this.key=++J,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function he(a){this.src=a,this.g={},this.h=0}he.prototype.add=function(a,f,p,m,L){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var K=S(a,f,m,L);return-1<K?(f=a[K],p||(f.fa=!1)):(f=new Y(f,this.src,U,!!m,L),f.fa=p,a.push(f)),f};function Ie(a,f){var p=f.type;if(p in a.g){var m=a.g[p],L=Array.prototype.indexOf.call(m,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(m,L,1),U&&(ee(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function S(a,f,p,m){for(var L=0;L<a.length;++L){var U=a[L];if(!U.da&&U.listener==f&&U.capture==!!p&&U.ha==m)return L}return-1}var k="closure_lm_"+(1e6*Math.random()|0),F={};function B(a,f,p,m,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)B(a,f[U],p,m,L);return null}return p=ne(p),a&&a[j]?a.K(f,p,u(m)?!!m.capture:!1,L):H(a,f,p,!1,m,L)}function H(a,f,p,m,L,U){if(!f)throw Error("Invalid event type");var K=u(L)?!!L.capture:!!L,Se=se(a);if(Se||(a[k]=Se=new he(a)),p=Se.add(f,p,m,K,U),p.proxy)return p;if(m=$(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)Hn||(L=K),L===void 0&&(L=!1),a.addEventListener(f.toString(),m,L);else if(a.attachEvent)a.attachEvent(W(f.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function $(){function a(p){return f.call(a.src,a.listener,p)}const f=V;return a}function q(a,f,p,m,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)q(a,f[U],p,m,L);else m=u(m)?!!m.capture:!!m,p=ne(p),a&&a[j]?(a=a.i,f=String(f).toString(),f in a.g&&(U=a.g[f],p=S(U,p,m,L),-1<p&&(ee(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete a.g[f],a.h--)))):a&&(a=se(a))&&(f=a.g[f.toString()],a=-1,f&&(a=S(f,p,m,L)),(p=-1<a?f[a]:null)&&G(p))}function G(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[j])Ie(f.i,a);else{var p=a.type,m=a.proxy;f.removeEventListener?f.removeEventListener(p,m,a.capture):f.detachEvent?f.detachEvent(W(p),m):f.addListener&&f.removeListener&&f.removeListener(m),(p=se(f))?(Ie(p,a),p.h==0&&(p.src=null,f[k]=null)):ee(a)}}}function W(a){return a in F?F[a]:F[a]="on"+a}function V(a,f){if(a.da)a=!0;else{f=new an(f,this);var p=a.listener,m=a.ha||a.src;a.fa&&G(a),a=p.call(m,f)}return a}function se(a){return a=a[k],a instanceof he?a:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(a){return typeof a=="function"?a:(a[X]||(a[X]=function(f){return a.handleEvent(f)}),a[X])}function te(){Le.call(this),this.i=new he(this),this.M=this,this.F=null}w(te,Le),te.prototype[j]=!0,te.prototype.removeEventListener=function(a,f,p,m){q(this,a,f,p,m)};function ie(a,f){var p,m=a.F;if(m)for(p=[];m;m=m.F)p.push(m);if(a=a.M,m=f.type||f,typeof f=="string")f=new De(f,a);else if(f instanceof De)f.target=f.target||a;else{var L=f;f=new De(m,a),b(f,L)}if(L=!0,p)for(var U=p.length-1;0<=U;U--){var K=f.g=p[U];L=ve(K,m,!0,f)&&L}if(K=f.g=a,L=ve(K,m,!0,f)&&L,L=ve(K,m,!1,f)&&L,p)for(U=0;U<p.length;U++)K=f.g=p[U],L=ve(K,m,!1,f)&&L}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],m=0;m<p.length;m++)ee(p[m]);delete a.g[f],a.h--}}this.F=null},te.prototype.K=function(a,f,p,m){return this.i.add(String(a),f,!1,p,m)},te.prototype.L=function(a,f,p,m){return this.i.add(String(a),f,!0,p,m)};function ve(a,f,p,m){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var K=f[U];if(K&&!K.da&&K.capture==p){var Se=K.listener,Qe=K.ha||K.src;K.fa&&Ie(a.i,K),L=Se.call(Qe,m)!==!1&&L}}return L&&!m.defaultPrevented}function me(a,f,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function rt(a){a.g=me(()=>{a.g=null,a.i&&(a.i=!1,rt(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class We extends Le{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(a){Le.call(this),this.h=a,this.g={}}w(Je,Le);var ot=[];function jn(a){D(a.g,function(f,p){this.g.hasOwnProperty(p)&&G(f)},a),a.g={}}Je.prototype.N=function(){Je.aa.N.call(this),jn(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $s=l.JSON.stringify,gt=l.JSON.parse,Nt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Vs(){}Vs.prototype.h=null;function kh(a){return a.h||(a.h=a.i())}function Iw(){}var Fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function al(){De.call(this,"d")}w(al,De);function ll(){De.call(this,"c")}w(ll,De);var Ws={},Ph=null;function cl(){return Ph=Ph||new te}Ws.La="serverreachability";function Oh(a){De.call(this,Ws.La,a)}w(Oh,De);function Ui(a){const f=cl();ie(f,new Oh(f))}Ws.STAT_EVENT="statevent";function Nh(a,f){De.call(this,Ws.STAT_EVENT,a),this.stat=f}w(Nh,De);function mt(a){const f=cl();ie(f,new Nh(f,a))}Ws.Ma="timingevent";function xh(a,f){De.call(this,Ws.Ma,a),this.size=f}w(xh,De);function Hi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function ji(){this.g=!0}ji.prototype.xa=function(){this.g=!1};function Cw(a,f,p,m,L,U){a.info(function(){if(a.g)if(U)for(var K="",Se=U.split("&"),Qe=0;Qe<Se.length;Qe++){var _e=Se[Qe].split("=");if(1<_e.length){var at=_e[0];_e=_e[1];var lt=at.split("_");K=2<=lt.length&&lt[1]=="type"?K+(at+"="+_e+"&"):K+(at+"=redacted&")}}else K=null;else K=U;return"XMLHTTP REQ ("+m+") [attempt "+L+"]: "+f+`
`+p+`
`+K})}function Sw(a,f,p,m,L,U,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+L+"]: "+f+`
`+p+`
`+U+" "+K})}function Gs(a,f,p,m){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Aw(a,p)+(m?" "+m:"")})}function Rw(a,f){a.info(function(){return"TIMEOUT: "+f})}ji.prototype.info=function(){};function Aw(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var m=p[a];if(!(2>m.length)){var L=m[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var K=1;K<L.length;K++)L[K]=""}}}}return $s(p)}catch{return f}}var ul={NO_ERROR:0,TIMEOUT:8},kw={},hl;function ao(){}w(ao,Vs),ao.prototype.g=function(){return new XMLHttpRequest},ao.prototype.i=function(){return{}},hl=new ao;function Bn(a,f,p,m){this.j=a,this.i=f,this.l=p,this.R=m||1,this.U=new Je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mh}function Mh(){this.i=null,this.g="",this.h=!1}var Lh={},fl={};function dl(a,f,p){a.L=1,a.v=ho(vn(f)),a.m=p,a.P=!0,Dh(a,null)}function Dh(a,f){a.F=Date.now(),lo(a),a.A=vn(a.v);var p=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Xh(p.i,"t",m),a.C=0,p=a.j.J,a.h=new Mh,a.g=gf(a.j,p?f:null,!a.m),0<a.O&&(a.M=new We(g(a.Y,a,a.g),a.O)),f=a.U,p=a.g,m=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(ot[0]=L.toString()),L=ot);for(var U=0;U<L.length;U++){var K=B(p,L[U],m||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Ui(),Cw(a.i,a.u,a.A,a.l,a.R,a.m)}Bn.prototype.ca=function(a){a=a.target;const f=this.M;f&&wn(a)==3?f.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const lt=wn(this.g);var f=this.g.Ba();const zs=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||sf(this.g)))){this.J||lt!=4||f==7||(f==8||0>=zs?Ui(3):Ui(2)),pl(this);var p=this.g.Z();this.X=p;t:if(Fh(this)){var m=sf(this.g);a="";var L=m.length,U=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gs(this),Bi(this);var K="";break t}this.h.i=new l.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,a+=this.h.i.decode(m[f],{stream:!(U&&f==L-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,Sw(this.i,this.u,this.A,this.l,this.R,lt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Qe=this.g;if((Se=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Se)){var _e=Se;break t}}_e=null}if(p=_e)Gs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gl(this,p);else{this.o=!1,this.s=3,mt(12),gs(this),Bi(this);break e}}if(this.P){p=!0;let Vt;for(;!this.J&&this.C<K.length;)if(Vt=Pw(this,K),Vt==fl){lt==4&&(this.s=4,mt(14),p=!1),Gs(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Lh){this.s=4,mt(15),Gs(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else Gs(this.i,this.l,Vt,null),gl(this,Vt);if(Fh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||K.length!=0||this.h.h||(this.s=1,mt(16),p=!1),this.o=this.o&&p,!p)Gs(this.i,this.l,K,"[Invalid Chunked Response]"),gs(this),Bi(this);else if(0<K.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),El(at),at.M=!0,mt(11))}}else Gs(this.i,this.l,K,null),gl(this,K);lt==4&&gs(this),this.o&&!this.J&&(lt==4?hf(this.j,this):(this.o=!1,lo(this)))}else qw(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),gs(this),Bi(this)}}}catch{}finally{}};function Fh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Pw(a,f){var p=a.C,m=f.indexOf(`
`,p);return m==-1?fl:(p=Number(f.substring(p,m)),isNaN(p)?Lh:(m+=1,m+p>f.length?fl:(f=f.slice(m,m+p),a.C=m+p,f)))}Bn.prototype.cancel=function(){this.J=!0,gs(this)};function lo(a){a.S=Date.now()+a.I,Uh(a,a.I)}function Uh(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hi(g(a.ba,a),f)}function pl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Rw(this.i,this.A),this.L!=2&&(Ui(),mt(17)),gs(this),this.s=2,Bi(this)):Uh(this,this.S-a)};function Bi(a){a.j.G==0||a.J||hf(a.j,a)}function gs(a){pl(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,jn(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function gl(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||ml(p.h,a))){if(!a.K&&ml(p.h,a)&&p.G==3){try{var m=p.Da.g.parse(f)}catch{m=null}if(Array.isArray(m)&&m.length==3){var L=m;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)yo(p),mo(p);else break e;wl(p),mt(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=Hi(g(p.Za,p),6e3));if(1>=Bh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else _s(p,11)}else if((a.K||p.g==a)&&yo(p),!N(f))for(L=p.Da.g.parse(f),f=0;f<L.length;f++){let _e=L[f];if(p.T=_e[0],_e=_e[1],p.G==2)if(_e[0]=="c"){p.K=_e[1],p.ia=_e[2];const at=_e[3];at!=null&&(p.la=at,p.j.info("VER="+p.la));const lt=_e[4];lt!=null&&(p.Aa=lt,p.j.info("SVER="+p.Aa));const zs=_e[5];zs!=null&&typeof zs=="number"&&0<zs&&(m=1.5*zs,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const Vt=a.g;if(Vt){const vo=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vo){var U=m.h;U.g||vo.indexOf("spdy")==-1&&vo.indexOf("quic")==-1&&vo.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(_l(U,U.h),U.h=null))}if(m.D){const Tl=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Tl&&(m.ya=Tl,ke(m.I,m.D,Tl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var K=a;if(m.qa=pf(m,m.J?m.ia:null,m.W),K.K){$h(m.h,K);var Se=K,Qe=m.L;Qe&&(Se.I=Qe),Se.B&&(pl(Se),lo(Se)),m.g=K}else cf(m);0<p.i.length&&_o(p)}else _e[0]!="stop"&&_e[0]!="close"||_s(p,7);else p.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?_s(p,7):vl(p):_e[0]!="noop"&&p.l&&p.l.ta(_e),p.v=0)}}Ui(4)}catch{}}var Ow=class{constructor(a,f){this.g=a,this.map=f}};function Hh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bh(a){return a.h?1:a.g?a.g.size:0}function ml(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function _l(a,f){a.g?a.g.add(f):a.h=f}function $h(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Hh.prototype.cancel=function(){if(this.i=Vh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return C(a.i)}function Nw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],p=a.length,m=0;m<p;m++)f.push(a[m]);return f}f=[],p=0;for(m in a)f[p++]=a[m];return f}function xw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const m in a)f[p++]=m;return f}}}function Wh(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=xw(a),m=Nw(a),L=m.length,U=0;U<L;U++)f.call(void 0,m[U],p&&p[U],a)}var Gh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mw(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var m=a[p].indexOf("="),L=null;if(0<=m){var U=a[p].substring(0,m);L=a[p].substring(m+1)}else U=a[p];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ms(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ms){this.h=a.h,co(this,a.j),this.o=a.o,this.g=a.g,uo(this,a.s),this.l=a.l;var f=a.i,p=new Wi;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Kh(this,p),this.m=a.m}else a&&(f=String(a).match(Gh))?(this.h=!1,co(this,f[1]||"",!0),this.o=$i(f[2]||""),this.g=$i(f[3]||"",!0),uo(this,f[4]),this.l=$i(f[5]||"",!0),Kh(this,f[6]||"",!0),this.m=$i(f[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}ms.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Vi(f,qh,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Vi(f,qh,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Vi(p,p.charAt(0)=="/"?Fw:Dw,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Vi(p,Hw)),a.join("")};function vn(a){return new ms(a)}function co(a,f,p){a.j=p?$i(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function uo(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Kh(a,f,p){f instanceof Wi?(a.i=f,jw(a.i,a.h)):(p||(f=Vi(f,Uw)),a.i=new Wi(f,a.h))}function ke(a,f,p){a.i.set(f,p)}function ho(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $i(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vi(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,Lw),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var qh=/[#\/\?@]/g,Dw=/[#\?:]/g,Fw=/[#\?]/g,Uw=/[#\?@]/g,Hw=/#/g;function Wi(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&Mw(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Wi.prototype,t.add=function(a,f){$n(this),this.i=null,a=Ks(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function zh(a,f){$n(a),f=Ks(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Yh(a,f){return $n(a),f=Ks(a,f),a.g.has(f)}t.forEach=function(a,f){$n(this),this.g.forEach(function(p,m){p.forEach(function(L){a.call(f,L,m,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let m=0;m<f.length;m++){const L=a[m];for(let U=0;U<L.length;U++)p.push(f[m])}return p},t.V=function(a){$n(this);let f=[];if(typeof a=="string")Yh(this,a)&&(f=f.concat(this.g.get(Ks(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return $n(this),this.i=null,a=Ks(this,a),Yh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Xh(a,f,p){zh(a,f),0<p.length&&(a.i=null,a.g.set(Ks(a,f),C(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var m=f[p];const U=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var L=U;K[m]!==""&&(L+="="+encodeURIComponent(String(K[m]))),a.push(L)}}return this.i=a.join("&")};function Ks(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function jw(a,f){f&&!a.j&&($n(a),a.i=null,a.g.forEach(function(p,m){var L=m.toLowerCase();m!=L&&(zh(this,m),Xh(this,L,p))},a)),a.j=f}function Bw(a,f){const p=new ji;if(l.Image){const m=new Image;m.onload=_(Vn,p,"TestLoadImage: loaded",!0,f,m),m.onerror=_(Vn,p,"TestLoadImage: error",!1,f,m),m.onabort=_(Vn,p,"TestLoadImage: abort",!1,f,m),m.ontimeout=_(Vn,p,"TestLoadImage: timeout",!1,f,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else f(!1)}function $w(a,f){const p=new ji,m=new AbortController,L=setTimeout(()=>{m.abort(),Vn(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:m.signal}).then(U=>{clearTimeout(L),U.ok?Vn(p,"TestPingServer: ok",!0,f):Vn(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Vn(p,"TestPingServer: error",!1,f)})}function Vn(a,f,p,m,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),m(p)}catch{}}function Vw(){this.g=new Nt}function Ww(a,f,p){const m=p||"";try{Wh(a,function(L,U){let K=L;u(L)&&(K=$s(L)),f.push(m+U+"="+encodeURIComponent(K))})}catch(L){throw f.push(m+"type="+encodeURIComponent("_badmap")),L}}function fo(a){this.l=a.Ub||null,this.j=a.eb||!1}w(fo,Vs),fo.prototype.g=function(){return new po(this.l,this.j)},fo.prototype.i=function(a){return function(){return a}}({});function po(a,f){te.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(po,te),t=po.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Ki(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ki(this)),this.g&&(this.readyState=3,Ki(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Gi(this):Ki(this),this.readyState==3&&Jh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Gi(this))},t.Qa=function(a){this.g&&(this.response=a,Gi(this))},t.ga=function(){this.g&&Gi(this)};function Gi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ki(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function Ki(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qh(a){let f="";return D(a,function(p,m){f+=m,f+=":",f+=p,f+=`\r
`}),f}function yl(a,f,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=Qh(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ke(a,f,p))}function je(a){te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(je,te);var Gw=/^https?$/i,Kw=["POST","PUT"];t=je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hl.g(),this.v=this.o?kh(this.o):kh(hl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(U){Zh(this,U);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var L in m)p.set(L,m[L]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const U of m.keys())p.set(U,m.get(U));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Kw,f,void 0))||m||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,K]of p)this.g.setRequestHeader(U,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nf(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){Zh(this,U)}};function Zh(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,ef(a),go(a)}function ef(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),go(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?tf(this):this.bb())},t.bb=function(){tf(this)};function tf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wn(a)!=4||a.Z()!=2)){if(a.u&&wn(a)==4)me(a.Ea,0,a);else if(ie(a,"readystatechange"),wn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var m;if(m=K===0){var L=String(a.D).match(Gh)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),m=!Gw.test(L?L.toLowerCase():"")}p=m}if(p)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var U=2<wn(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",ef(a)}}finally{go(a)}}}}function go(a,f){if(a.g){nf(a);const p=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ie(a,"ready");try{p.onreadystatechange=m}catch{}}}function nf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),gt(f)}};function sf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qw(a){const f={};a=(a.g&&2<=wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(N(a[m]))continue;var p=P(a[m]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=f[L]||[];f[L]=U,U.push(p)}E(f,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qi(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function rf(a){this.Aa=0,this.i=[],this.j=new ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qi("baseRetryDelayMs",5e3,a),this.cb=qi("retryDelaySeedMs",1e4,a),this.Wa=qi("forwardChannelMaxRetries",2,a),this.wa=qi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Hh(a&&a.concurrentRequestLimit),this.Da=new Vw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=rf.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,m){mt(0),this.W=a,this.H=f||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=pf(this,null,this.W),_o(this)};function vl(a){if(of(a),a.G==3){var f=a.U++,p=vn(a.I);if(ke(p,"SID",a.K),ke(p,"RID",f),ke(p,"TYPE","terminate"),zi(a,p),f=new Bn(a,a.j,f),f.L=2,f.v=ho(vn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=f.v,p=!0),p||(f.g=gf(f.j,null),f.g.ea(f.v)),f.F=Date.now(),lo(f)}df(a)}function mo(a){a.g&&(El(a),a.g.cancel(),a.g=null)}function of(a){mo(a),a.u&&(l.clearTimeout(a.u),a.u=null),yo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function _o(a){if(!jh(a.h)&&!a.s){a.s=!0;var f=a.Ga;re||$t(),Q||(re(),Q=!0),Me.add(f,a),a.B=0}}function zw(a,f){return Bh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hi(g(a.Ga,a,f),ff(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new Bn(this,this.j,a);let U=this.o;if(this.S&&(U?(U=y(U),b(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(f+=m,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=lf(this,L,f),p=vn(this.I),ke(p,"RID",a),ke(p,"CVER",22),this.D&&ke(p,"X-HTTP-Session-Id",this.D),zi(this,p),U&&(this.O?f="headers="+encodeURIComponent(String(Qh(U)))+"&"+f:this.m&&yl(p,this.m,U)),_l(this.h,L),this.Ua&&ke(p,"TYPE","init"),this.P?(ke(p,"$req",f),ke(p,"SID","null"),L.T=!0,dl(L,p,null)):dl(L,p,f),this.G=2}}else this.G==3&&(a?af(this,a):this.i.length==0||jh(this.h)||af(this))};function af(a,f){var p;f?p=f.l:p=a.U++;const m=vn(a.I);ke(m,"SID",a.K),ke(m,"RID",p),ke(m,"AID",a.T),zi(a,m),a.m&&a.o&&yl(m,a.m,a.o),p=new Bn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=lf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),_l(a.h,p),dl(p,m,f)}function zi(a,f){a.H&&D(a.H,function(p,m){ke(f,m,p)}),a.l&&Wh({},function(p,m){ke(f,m,p)})}function lf(a,f,p){p=Math.min(a.i.length,p);var m=a.l?g(a.l.Na,a.l,a):null;e:{var L=a.i;let U=-1;for(;;){const K=["count="+p];U==-1?0<p?(U=L[0].g,K.push("ofs="+U)):U=0:K.push("ofs="+U);let Se=!0;for(let Qe=0;Qe<p;Qe++){let _e=L[Qe].g;const at=L[Qe].map;if(_e-=U,0>_e)U=Math.max(0,L[Qe].g-100),Se=!1;else try{Ww(at,K,"req"+_e+"_")}catch{m&&m(at)}}if(Se){m=K.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,m}function cf(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;re||$t(),Q||(re(),Q=!0),Me.add(f,a),a.v=0}}function wl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hi(g(a.Fa,a),ff(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,uf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),mo(this),uf(this))};function El(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function uf(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=vn(a.qa);ke(f,"RID","rpc"),ke(f,"SID",a.K),ke(f,"AID",a.T),ke(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(f,"TO",a.ja),ke(f,"TYPE","xmlhttp"),zi(a,f),a.m&&a.o&&yl(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=ho(vn(f)),p.m=null,p.P=!0,Dh(p,a)}t.Za=function(){this.C!=null&&(this.C=null,mo(this),wl(this),mt(19))};function yo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function hf(a,f){var p=null;if(a.g==f){yo(a),El(a),a.g=null;var m=2}else if(ml(a.h,f))p=f.D,$h(a.h,f),m=1;else return;if(a.G!=0){if(f.o)if(m==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var L=a.B;m=cl(),ie(m,new xh(m,p)),_o(a)}else cf(a);else if(L=f.s,L==3||L==0&&0<f.X||!(m==1&&zw(a,f)||m==2&&wl(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),L){case 1:_s(a,5);break;case 4:_s(a,10);break;case 3:_s(a,6);break;default:_s(a,2)}}}function ff(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function _s(a,f){if(a.j.info("Error code "+f),f==2){var p=g(a.fb,a),m=a.Xa;const L=!m;m=new ms(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||co(m,"https"),ho(m),L?Bw(m.toString(),p):$w(m.toString(),p)}else mt(2);a.G=0,a.l&&a.l.sa(f),df(a),of(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function df(a){if(a.G=0,a.ka=[],a.l){const f=Vh(a.h);(f.length!=0||a.i.length!=0)&&(O(a.ka,f),O(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function pf(a,f,p){var m=p instanceof ms?vn(p):new ms(p);if(m.g!="")f&&(m.g=f+"."+m.g),uo(m,m.s);else{var L=l.location;m=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new ms(null);m&&co(U,m),f&&(U.g=f),L&&uo(U,L),p&&(U.l=p),m=U}return p=a.D,f=a.ya,p&&f&&ke(m,p,f),ke(m,"VER",a.la),zi(a,m),m}function gf(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new je(new fo({eb:p})):new je(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mf(){}t=mf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xt(a,f){te.call(this),this.g=new rf(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!N(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!N(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new qs(this)}w(xt,te),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){vl(this.g)},xt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=$s(a),a=p);f.i.push(new Ow(f.Ya++,a)),f.G==3&&_o(f)},xt.prototype.N=function(){this.g.l=null,delete this.j,vl(this.g),delete this.g,xt.aa.N.call(this)};function _f(a){al.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}w(_f,al);function yf(){ll.call(this),this.status=1}w(yf,ll);function qs(a){this.g=a}w(qs,mf),qs.prototype.ua=function(){ie(this.g,"a")},qs.prototype.ta=function(a){ie(this.g,new _f(a))},qs.prototype.sa=function(a){ie(this.g,new yf)},qs.prototype.ra=function(){ie(this.g,"b")},xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,ul.NO_ERROR=0,ul.TIMEOUT=8,ul.HTTP_ERROR=6,kw.COMPLETE="complete",Iw.EventType=Fi,Fi.OPEN="a",Fi.CLOSE="b",Fi.ERROR="c",Fi.MESSAGE="d",te.prototype.listen=te.prototype.K,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha}).apply(typeof ko<"u"?ko:typeof self<"u"?self:typeof window<"u"?window:{});const Ed="@firebase/firestore",Td="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Jr("@firebase/firestore");function zt(t,...e){if(ga.logLevel<=Te.DEBUG){const n=e.map(W_);ga.debug(`Firestore (${Ya}): ${t}`,...n)}}function V_(t,...e){if(ga.logLevel<=Te.ERROR){const n=e.map(W_);ga.error(`Firestore (${Ya}): ${t}`,...n)}}function W_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t="Unexpected state"){const e=`FIRESTORE (${Ya}) INTERNAL ASSERTION FAILED: `+t;throw V_(e),new Error(e)}function gr(t,e){t||G_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class st extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class LC{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){gr(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{zt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(zt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(zt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(gr(typeof s.accessToken=="string"),new xC(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return gr(e===null||typeof e=="string"),new Rt(e)}}class DC{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class FC{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new DC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UC{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ft(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){gr(this.o===void 0);const s=r=>{r.error!=null&&zt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,zt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{zt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):zt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new bd(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(gr(typeof n.token=="string"),this.R=n.token,new bd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function ma(t,e){return t<e?-1:t>e?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=-62135596800,Cd=1e6;class _r{static now(){return _r.fromMillis(Date.now())}static fromDate(e){return _r.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Cd);return new _r(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new st(nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new st(nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Id)throw new st(nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new st(nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cd}_compareTo(e){return this.seconds===e.seconds?ma(this.nanoseconds,e.nanoseconds):ma(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Id;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}function HC(t){return t.name==="IndexedDbTransactionError"}const Sd="(default)";class _a{constructor(e,n){this.projectId=e,this.database=n||Sd}static empty(){return new _a("","")}get isDefaultDatabase(){return this.database===Sd}isEqual(e){return e instanceof _a&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rd,de;(de=Rd||(Rd={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new $_([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=1048576;function Gl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=i,this.jo=r,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-s);i>0&&zt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,l=new $u(e,n,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(nt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ad,kd;(kd=Ad||(Ad={}))._a="default",kd.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new Map;function WC(t,e,n,s){if(e===!0&&s===!0)throw new st(nt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="firestore.googleapis.com",Od=!0;class Nd{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new st(nt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=GC,this.ssl=Od}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Od;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BC)throw new st(nt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=VC((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new st(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new st(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new st(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class KC{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(nt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new st(nt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new MC;switch(s.type){case"firstParty":return new FC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new st(nt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Pd.get(n);s&&(zt("ComponentProvider","Removing Datastore"),Pd.delete(n),s.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="AsyncQueue";class Md{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new $C(this,"async_queue_retry"),this.Su=()=>{const s=Gl();s&&zt(xd,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const n=Gl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Gl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new mr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!HC(e))throw e;zt(xd,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw V_("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=$u.createAndSchedule(this,e,n,s,r=>this.Fu(r));return this.fu.push(i),i}Du(){this.gu&&G_()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class qC extends KC{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Md,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Md(e),this._firestoreClient=void 0,await e}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new st(nt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new st(nt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ma(this._lat,e._lat)||ma(this._long,e._long)}}(function(e,n=!0){(function(i){Ya=i})(ps),gn(new nn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new qC(new LC(s.getProvider("auth-internal")),new UC(o,s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new st(nt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _a(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),kt(Ed,Td,e),kt(Ed,Td,"esm2017")})();function Ld(t){const e=XC(t),n=new ArrayBuffer(e.length),s=new DataView(n);for(let i=0;i<n.byteLength;i++)s.setUint8(i,e.charCodeAt(i));return n}const YC="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function XC(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,s=0;for(let i=0;i<t.length;i++)n<<=6,n|=YC.indexOf(t[i]),s+=6,s===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=s=0);return s===12?(n>>=4,e+=String.fromCharCode(n)):s===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const JC=-1,QC=-2,ZC=-3,eS=-4,tS=-5,nS=-6;function sS(t,e){return iS(JSON.parse(t),e)}function iS(t,e){if(typeof t=="number")return i(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,s=Array(n.length);function i(r,o=!1){if(r===JC)return;if(r===ZC)return NaN;if(r===eS)return 1/0;if(r===tS)return-1/0;if(r===nS)return-0;if(o)throw new Error("Invalid input");if(r in s)return s[r];const l=n[r];if(!l||typeof l!="object")s[r]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const c=l[0],u=e==null?void 0:e[c];if(u)return s[r]=u(i(l[1]));switch(c){case"Date":s[r]=new Date(l[1]);break;case"Set":const h=new Set;s[r]=h;for(let _=1;_<l.length;_+=1)h.add(i(l[_]));break;case"Map":const d=new Map;s[r]=d;for(let _=1;_<l.length;_+=2)d.set(i(l[_]),i(l[_+1]));break;case"RegExp":s[r]=new RegExp(l[1],l[2]);break;case"Object":s[r]=Object(l[1]);break;case"BigInt":s[r]=BigInt(l[1]);break;case"null":const g=Object.create(null);s[r]=g;for(let _=1;_<l.length;_+=2)g[l[_]]=i(l[_+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const _=globalThis[c],w=l[1],C=Ld(w),O=new _(C);s[r]=O;break}case"ArrayBuffer":{const _=l[1],w=Ld(_);s[r]=w;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(l.length);s[r]=c;for(let u=0;u<l.length;u+=1){const h=l[u];h!==QC&&(c[u]=i(h))}}else{const c={};s[r]=c;for(const u in l){const h=l[u];c[u]=i(h)}}return s[r]}return i(0)}const rS=new Set(["link","style","script","noscript"]),oS=new Set(["title","titleTemplate","script","style","noscript"]),Dd=new Set(["base","meta","link","style","script","noscript"]),aS=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),lS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),cS=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),uS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),hS=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),fS=["name","property","http-equiv"];function K_(t){const e=t.split(":")[1];return hS.has(e)}function Hc(t){const{props:e,tag:n}=t;if(lS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const s of fS)if(e[s]!==void 0)return`${n}:${e[s]}`}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(oS.has(n)){const s=t.textContent||t.innerHTML;if(s)return`${n}:content:${s}`}}function Fd(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([s,i])=>`${s}:${String(i)}`).join(",")}`}function ya(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let i;if(e&&(i=e(n,t)),Array.isArray(i))return i.map(r=>ya(r,e));if((i==null?void 0:i.constructor)===Object){const r={};for(const o of Object.keys(i))r[o]=ya(i[o],e,o);return r}return i}function dS(t,e){const n=t==="style"?new Map:new Set;function s(i){const r=i.trim();if(r)if(t==="style"){const[o,...l]=r.split(":").map(c=>c.trim());o&&l.length&&n.set(o,l.join(":"))}else r.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(s):s(e):Array.isArray(e)?e.forEach(i=>s(i)):e&&typeof e=="object"&&Object.entries(e).forEach(([i,r])=>{r&&r!=="false"&&(t==="style"?n.set(i.trim(),r):s(i))}),n}function q_(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,s])=>{if(s===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=dS(n,s);return}if(cS.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof s=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(s)}else t[n]=s;return}const i=String(s),r=n.startsWith("data-");i==="true"||i===""?t.props[n]=r?i:!0:!s&&r&&i==="false"?t.props[n]="false":s!==void 0&&(t.props[n]=s)}),t}function pS(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},s=q_({tag:t,props:{}},n);return s.key&&rS.has(s.tag)&&(s.props["data-hid"]=s._h=s.key),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(i=>({...s,props:{...s.props,content:i}})):s}function gS(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(i,r)=>{for(let o=0;o<e.length;o++)r=e[o](i,r);return r};t=n(void 0,t);const s=[];return t=ya(t,n),Object.entries(t||{}).forEach(([i,r])=>{if(r!==void 0)for(const o of Array.isArray(r)?r:[r])s.push(pS(i,o))}),s.flat()}const Ud=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Hd={base:-10,title:10},mS={critical:-8,high:-1,low:2},jd={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},_S=/@import/,Ji=t=>t===""||t===!0;function yS(t,e){var r;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const s=mS[e.tagPriority]||0,i=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:jd;if(e.tag in Hd)n=Hd[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=jd.meta[o])}else e.tag==="link"&&e.props.rel?n=i.link[e.props.rel]:e.tag==="script"?Ji(e.props.async)?n=i.script.async:e.props.src&&!Ji(e.props.defer)&&!Ji(e.props.async)&&e.props.type!=="module"&&!((r=e.props.type)!=null&&r.endsWith("json"))?n=i.script.sync:Ji(e.props.defer)&&e.props.src&&!Ji(e.props.async)&&(n=i.script.defer):e.tag==="style"&&(n=e.innerHTML&&_S.test(e.innerHTML)?i.style.imported:i.style.sync);return(n||100)+s}function Bd(t,e){const n=typeof e=="function"?e(t):e,s=n.key||String(t.plugins.size+1);t.plugins.get(s)||(t.plugins.set(s,n),t.hooks.addHooks(n.hooks||{}))}function vS(t={}){var l;const e=g_();e.addHooks(t.hooks||{});const n=!t.document,s=new Map,i=new Map,r=[],o={_entryCount:1,plugins:i,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:s,headEntries(){return[...s.values()]},use:c=>Bd(o,c),push(c,u){const h={...u||{}};delete h.head;const d=h._index??o._entryCount++,g={_i:d,input:c,options:h},_={_poll(w=!1){o.dirty=!0,!w&&r.push(d),e.callHook("entries:updated",o)},dispose(){s.delete(d)&&_._poll(!0)},patch(w){(!h.mode||h.mode==="server"&&n||h.mode==="client"&&!n)&&(g.input=w,s.set(d,g),_._poll())}};return _.patch(c),_},async resolveTags(){var _;const c={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",c);r.length;){const w=r.shift(),C=s.get(w);if(C){const O={tags:gS(C.input,t.propResolvers||[]).map(x=>Object.assign(x,C.options)),entry:C};await e.callHook("entries:normalize",O),C._tags=O.tags.map((x,N)=>(x._w=yS(o,x),x._p=(C._i<<10)+N,x._d=Hc(x),x))}}let u=!1;c.entries.flatMap(w=>(w._tags||[]).map(C=>({...C,props:{...C.props}}))).sort(Ud).reduce((w,C)=>{const O=String(C._d||C._p);if(!w.has(O))return w.set(O,C);const x=w.get(O);if(((C==null?void 0:C.tagDuplicateStrategy)||(uS.has(C.tag)?"merge":null)||(C.key&&C.key===x.key?"merge":null))==="merge"){const T={...x.props};Object.entries(C.props).forEach(([A,M])=>T[A]=A==="style"?new Map([...x.props.style||new Map,...M]):A==="class"?new Set([...x.props.class||new Set,...M]):M),w.set(O,{...C,props:T})}else C._p>>10===x._p>>10&&K_(C._d)?(w.set(O,Object.assign([...Array.isArray(x)?x:[x],C],C)),u=!0):(C._w===x._w?C._p>x._p:(C==null?void 0:C._w)<(x==null?void 0:x._w))&&w.set(O,C);return w},c.tagMap);const h=c.tagMap.get("title"),d=c.tagMap.get("titleTemplate");if(o._title=h==null?void 0:h.textContent,d){const w=d==null?void 0:d.textContent;if(o._titleTemplate=w,w){let C=typeof w=="function"?w(h==null?void 0:h.textContent):w;typeof C=="string"&&!o.plugins.has("template-params")&&(C=C.replace("%s",(h==null?void 0:h.textContent)||"")),h?C===null?c.tagMap.delete("title"):c.tagMap.set("title",{...h,textContent:C}):(d.tag="title",d.textContent=C)}}c.tags=Array.from(c.tagMap.values()),u&&(c.tags=c.tags.flat().sort(Ud)),await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c);const g=[];for(const w of c.tags){const{innerHTML:C,tag:O,props:x}=w;if(aS.has(O)&&!(Object.keys(x).length===0&&!w.innerHTML&&!w.textContent)&&!(O==="meta"&&!x.content&&!x["http-equiv"]&&!x.charset)){if(O==="script"&&C){if((_=x.type)!=null&&_.endsWith("json")){const N=typeof C=="string"?C:JSON.stringify(C);w.innerHTML=N.replace(/</g,"\\u003C")}else typeof C=="string"&&(w.innerHTML=C.replace(new RegExp(`</${O}`,"g"),`<\\/${O}`));w._d=Hc(w)}g.push(w)}}return g}};return((t==null?void 0:t.plugins)||[]).forEach(c=>Bd(o,c)),o.hooks.callHook("init",o),(l=t.init)==null||l.forEach(c=>c&&o.push(c)),o}const wS=(t,e)=>Ve(e)?PE(e):e,Vu="usehead";function ES(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Vu,t)}}.install}function TS(){if($a()){const t=Ye(Vu);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function bS(t,e={}){const n=e.head||TS();return n.ssr?n.push(t||{},e):IS(n,t,e)}function IS(t,e,n={}){const s=Ht(!1);let i;return CT(()=>{const o=s.value?{}:ya(e,wS);i?i.patch(o):i=t.push(o,n)}),zr()&&(qr(()=>{i.dispose()}),ym(()=>{s.value=!0}),_m(()=>{s.value=!1})),i}function CS(t){var n;const e=t||He();return((n=e.ssrContext)==null?void 0:n.head)||e.runWithContext(()=>{if($a()){const s=Ye(Vu);if(!s)throw new Error("[nuxt] [unhead] Missing Unhead instance.");return s}})}function z_(t,e={}){const n=CS(e.nuxt);return bS(t,{head:n,...e})}const SS="modulepreload",RS=function(t,e){return new URL(t,e).href},$d={},cn=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=o(n.map(h=>{if(h=RS(h,s),h in $d)return;$d[h]=!0;const d=h.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(!!s)for(let C=l.length-1;C>=0;C--){const O=l[C];if(O.href===h&&(!d||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${g}`))return;const w=document.createElement("link");if(w.rel=d?"stylesheet":SS,d||(w.as="script"),w.crossOrigin="",w.href=h,u&&w.setAttribute("nonce",u),document.head.appendChild(w),d)return new Promise((C,O)=>{w.addEventListener("load",C),w.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};let jo,Bo;function AS(){return jo=$fetch(Uu(`builds/meta/${Ri().app.buildId}.json`),{responseType:"json"}),jo.then(t=>{Bo=W0(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),jo}function Xa(){return jo||AS()}async function Wu(t){const e=typeof t=="string"?t:t.path;if(await Xa(),!Bo)return console.error("[nuxt] Error creating app manifest matcher.",Bo),{};try{return E_({},...Bo.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Vd(t,e={}){if(!await X_(t))return null;const s=await PS(t,e);return await Y_(s)||null}const kS="_payload.json";async function PS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Hs(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const s=Ri(),i=e.hash||(e.fresh?Date.now():s.app.buildId),r=s.app.cdnURL,o=r&&await X_(t)?r:s.app.baseURL;return Fu(o,n.pathname,kS+(i?`?${i}`:""))}async function Y_(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(J_));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function X_(t=Hu().path){const e=He();return t=Du(t),(await Xa()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const s=await Wu({path:t});return!!s.prerender&&!s.redirect})}let Es=null;async function OS(){var s;if(Es)return Es;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await J_(t.textContent||""),n=t.dataset.src?await Y_(t.dataset.src):void 0;return Es={...e,...n,...window.__NUXT__},(s=Es.config)!=null&&s.public&&(Es.config.public=Dn(Es.config.public)),Es}async function J_(t){return await sS(t,He()._payloadRevivers)}function $o(t,e){He()._payloadRevivers[t]=e}const NS=B0(()=>{$o("FirebaseTimestamp",t=>hc(new _r(t.seconds,t.nanoseconds))),$o("FirebaseGeoPoint",t=>hc(new zC(t.latitude,t.longitude))),$o("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),xS=[["NuxtError",t=>Ka(t)],["EmptyShallowRef",t=>Ar(t==="_"?void 0:t==="0n"?BigInt(0):oa(t))],["EmptyRef",t=>Ht(t==="_"?void 0:t==="0n"?BigInt(0):oa(t))],["ShallowRef",t=>Ar(t)],["ShallowReactive",t=>Sn(t)],["Ref",t=>Ht(t)],["Reactive",t=>Dn(t)]],MS=pt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[s,i]of xS)$o(s,i);Object.assign(t.payload,([e,n]=hi(()=>t.runWithContext(OS)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Gu(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const s={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async i=>{var _;const r=new Map,o=new Promise(w=>{t.resolveTags().then(C=>{w(C.map(O=>{const x=r.get(O._d)||0,N={tag:O,id:(x?`${O._d}:${x}`:O._d)||Fd(O),shouldRender:!0};return O._d&&K_(O._d)&&r.set(O._d,x+1),N}))})});let l=t._dom;if(!l){l={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const w of["body","head"]){const C=(_=n[w])==null?void 0:_.children;for(const O of C){const x=O.tagName.toLowerCase();if(!Dd.has(x))continue;const N=q_({tag:x,props:{}},{innerHTML:O.innerHTML,...O.getAttributeNames().reduce((T,A)=>(T[A]=O.getAttribute(A),T),{})||{}});if(N.key=O.getAttribute("data-hid")||void 0,N._d=Hc(N)||Fd(N),l.elMap.has(N._d)){let T=1,A=N._d;for(;l.elMap.has(A);)A=`${N._d}:${T++}`;l.elMap.set(A,O)}else l.elMap.set(N._d,O)}}}l.pendingSideEffects={...l.sideEffects},l.sideEffects={};function c(w,C,O){const x=`${w}:${C}`;l.sideEffects[x]=O,delete l.pendingSideEffects[x]}function u({id:w,$el:C,tag:O}){const x=O.tag.endsWith("Attrs");l.elMap.set(w,C),x||(O.textContent&&O.textContent!==C.textContent&&(C.textContent=O.textContent),O.innerHTML&&O.innerHTML!==C.innerHTML&&(C.innerHTML=O.innerHTML),c(w,"el",()=>{C==null||C.remove(),l.elMap.delete(w)}));for(const N in O.props){if(!Object.prototype.hasOwnProperty.call(O.props,N))continue;const T=O.props[N];if(N.startsWith("on")&&typeof T=="function"){const M=C==null?void 0:C.dataset;if(M&&M[`${N}fired`]){const D=N.slice(0,-5);T.call(C,new Event(D.substring(2)))}C.getAttribute(`data-${N}`)!==""&&((O.tag==="bodyAttrs"?n.defaultView:C).addEventListener(N.substring(2),T.bind(C)),C.setAttribute(`data-${N}`,""));continue}const A=`attr:${N}`;if(N==="class"){if(!T)continue;for(const M of T)x&&c(w,`${A}:${M}`,()=>C.classList.remove(M)),!C.classList.contains(M)&&C.classList.add(M)}else if(N==="style"){if(!T)continue;for(const[M,D]of T)c(w,`${A}:${M}`,()=>{C.style.removeProperty(M)}),C.style.setProperty(M,D)}else T!==!1&&T!==null&&(C.getAttribute(N)!==T&&C.setAttribute(N,T===!0?"":String(T)),x&&c(w,A,()=>C.removeAttribute(N)))}}const h=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0},g=await o;for(const w of g){const{tag:C,shouldRender:O,id:x}=w;if(O){if(C.tag==="title"){n.title=C.textContent,c("title","",()=>n.title=l.title);continue}w.$el=w.$el||l.elMap.get(x),w.$el?u(w):Dd.has(C.tag)&&h.push(w)}}for(const w of h){const C=w.tag.tagPosition||"head";w.$el=n.createElement(w.tag.tag),u(w),d[C]=d[C]||n.createDocumentFragment(),d[C].appendChild(w.$el)}for(const w of g)await t.hooks.callHook("dom:renderTag",w,n,c);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const w in l.pendingSideEffects)l.pendingSideEffects[w]();t._dom=l,await t.hooks.callHook("dom:rendered",{renders:g}),i()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function LS(t={}){var s,i,r;const e=((s=t.domOptions)==null?void 0:s.render)||Gu;t.document=t.document||(typeof window<"u"?document:void 0);const n=((r=(i=t.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return vS({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function DS(t,e){let n=0;return()=>{const s=++n;e(()=>{n===s&&t()})}}function FS(t={}){const e=LS({domOptions:{render:DS(()=>Gu(e),n=>setTimeout(n,0))},...t});return e.install=ES(e),e}const US={disableDefaults:!0},HS=pt({name:"nuxt:head",enforce:"pre",setup(t){const e=FS(US);t.vueApp.use(e);{let n=!0;const s=async()=>{n=!1,await Gu(e)};e.hooks.hook("dom:beforeRender",i=>{i.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||s()}),t.hooks.hook("app:error",s),t.hooks.hook("app:suspense:resolve",s)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Zs=typeof document<"u";function Q_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Q_(t.default)}const we=Object.assign;function Kl(t,e){const n={};for(const s in e){const i=e[s];n[s]=sn(i)?i.map(t):t(i)}return n}const yr=()=>{},sn=Array.isArray,Z_=/#/g,BS=/&/g,$S=/\//g,VS=/=/g,WS=/\?/g,ey=/\+/g,GS=/%5B/g,KS=/%5D/g,ty=/%5E/g,qS=/%60/g,ny=/%7B/g,zS=/%7C/g,sy=/%7D/g,YS=/%20/g;function Ku(t){return encodeURI(""+t).replace(zS,"|").replace(GS,"[").replace(KS,"]")}function XS(t){return Ku(t).replace(ny,"{").replace(sy,"}").replace(ty,"^")}function jc(t){return Ku(t).replace(ey,"%2B").replace(YS,"+").replace(Z_,"%23").replace(BS,"%26").replace(qS,"`").replace(ny,"{").replace(sy,"}").replace(ty,"^")}function JS(t){return jc(t).replace(VS,"%3D")}function QS(t){return Ku(t).replace(Z_,"%23").replace(WS,"%3F")}function ZS(t){return t==null?"":QS(t).replace($S,"%2F")}function Dr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const eR=/\/$/,tR=t=>t.replace(eR,"");function ql(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=rR(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Dr(o)}}function nR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sR(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ei(e.matched[s],n.matched[i])&&iy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ei(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function iy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!iR(t[n],e[n]))return!1;return!0}function iR(t,e){return sn(t)?Gd(t,e):sn(e)?Gd(e,t):t===e}function Gd(t,e){return sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function rR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fr;(function(t){t.pop="pop",t.push="push"})(Fr||(Fr={}));var vr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vr||(vr={}));function oR(t){if(!t)if(Zs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tR(t)}const aR=/^[^#]+#/;function lR(t,e){return t.replace(aR,"#")+e}function cR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ja=()=>({left:window.scrollX,top:window.scrollY});function uR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=cR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kd(t,e){return(history.state?history.state.position-e:-1)+t}const Bc=new Map;function hR(t,e){Bc.set(t,e)}function fR(t){const e=Bc.get(t);return Bc.delete(t),e}let dR=()=>location.protocol+"//"+location.host;function ry(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),Wd(c,"")}return Wd(n,t)+s+i}function pR(t,e,n,s){let i=[],r=[],o=null;const l=({state:g})=>{const _=ry(t,location),w=n.value,C=e.value;let O=0;if(g){if(n.value=_,e.value=g,o&&o===w){o=null;return}O=C?g.position-C.position:0}else s(_);i.forEach(x=>{x(n.value,w,{delta:O,type:Fr.pop,direction:O?O>0?vr.forward:vr.back:vr.unknown})})};function c(){o=n.value}function u(g){i.push(g);const _=()=>{const w=i.indexOf(g);w>-1&&i.splice(w,1)};return r.push(_),_}function h(){const{history:g}=window;g.state&&g.replaceState(we({},g.state,{scroll:Ja()}),"")}function d(){for(const g of r)g();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function qd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ja():null}}function gR(t){const{history:e,location:n}=window,s={value:ry(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,h){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:dR()+t+c;try{e[h?"replaceState":"pushState"](u,"",g),i.value=u}catch(_){console.error(_),n[h?"replace":"assign"](g)}}function o(c,u){const h=we({},e.state,qd(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,h,!0),s.value=c}function l(c,u){const h=we({},i.value,e.state,{forward:c,scroll:Ja()});r(h.current,h,!0);const d=we({},qd(s.value,c,null),{position:h.position+1},u);r(c,d,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function mR(t){t=oR(t);const e=gR(t),n=pR(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=we({location:"",base:t,go:s,createHref:lR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function _R(t){return typeof t=="string"||t&&typeof t=="object"}function oy(t){return typeof t=="string"||typeof t=="symbol"}const ay=Symbol("");var zd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zd||(zd={}));function Ti(t,e){return we(new Error,{type:t,[ay]:!0},e)}function bn(t,e){return t instanceof Error&&ay in t&&(e==null||!!(t.type&e))}const Yd="[^/]+?",yR={sensitive:!1,strict:!1,start:!0,end:!0},vR=/[.+*?^${}()[\]/\\]/g;function wR(t,e){const n=we({},yR,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let d=0;d<u.length;d++){const g=u[d];let _=40+(n.sensitive?.25:0);if(g.type===0)d||(i+="/"),i+=g.value.replace(vR,"\\$&"),_+=40;else if(g.type===1){const{value:w,repeatable:C,optional:O,regexp:x}=g;r.push({name:w,repeatable:C,optional:O});const N=x||Yd;if(N!==Yd){_+=10;try{new RegExp(`(${N})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${w}" (${N}): `+A.message)}}let T=C?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(T=O&&u.length<2?`(?:/${T})`:"/"+T),O&&(T+="?"),i+=T,_+=20,O&&(_+=-8),C&&(_+=-20),N===".*"&&(_+=-50)}h.push(_)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(u){const h=u.match(o),d={};if(!h)return null;for(let g=1;g<h.length;g++){const _=h[g]||"",w=r[g-1];d[w.name]=_&&w.repeatable?_.split("/"):_}return d}function c(u){let h="",d=!1;for(const g of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const _ of g)if(_.type===0)h+=_.value;else if(_.type===1){const{value:w,repeatable:C,optional:O}=_,x=w in u?u[w]:"";if(sn(x)&&!C)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const N=sn(x)?x.join("/"):x;if(!N)if(O)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);h+=N}}return h||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function ER(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ly(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=ER(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Xd(s))return 1;if(Xd(i))return-1}return i.length-s.length}function Xd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const TR={type:0,value:""},bR=/[a-zA-Z0-9_]/;function IR(t){if(!t)return[[]];if(t==="/")return[[TR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,u="",h="";function d(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):g();break;case 4:g(),n=s;break;case 1:c==="("?n=2:bR.test(c)?g():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),i}function CR(t,e,n){const s=wR(IR(t.path),n),i=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function SR(t,e){const n=[],s=new Map;e=ep({strict:!1,end:!0,sensitive:!1},e);function i(d){return s.get(d)}function r(d,g,_){const w=!_,C=Qd(d);C.aliasOf=_&&_.record;const O=ep(e,d),x=[C];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const M of A)x.push(Qd(we({},C,{components:_?_.record.components:C.components,path:M,aliasOf:_?_.record:C})))}let N,T;for(const A of x){const{path:M}=A;if(g&&M[0]!=="/"){const D=g.record.path,E=D[D.length-1]==="/"?"":"/";A.path=g.record.path+(M&&E+M)}if(N=CR(A,g,O),_?_.alias.push(N):(T=T||N,T!==N&&T.alias.push(N),w&&d.name&&!Zd(N)&&o(d.name)),cy(N)&&c(N),C.children){const D=C.children;for(let E=0;E<D.length;E++)r(D[E],N,_&&_.children[E])}_=_||N}return T?()=>{o(T)}:yr}function o(d){if(oy(d)){const g=s.get(d);g&&(s.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const g=kR(d,n);n.splice(g,0,d),d.record.name&&!Zd(d)&&s.set(d.record.name,d)}function u(d,g){let _,w={},C,O;if("name"in d&&d.name){if(_=s.get(d.name),!_)throw Ti(1,{location:d});O=_.record.name,w=we(Jd(g.params,_.keys.filter(T=>!T.optional).concat(_.parent?_.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&Jd(d.params,_.keys.map(T=>T.name))),C=_.stringify(w)}else if(d.path!=null)C=d.path,_=n.find(T=>T.re.test(C)),_&&(w=_.parse(C),O=_.record.name);else{if(_=g.name?s.get(g.name):n.find(T=>T.re.test(g.path)),!_)throw Ti(1,{location:d,currentLocation:g});O=_.record.name,w=we({},g.params,d.params),C=_.stringify(w)}const x=[];let N=_;for(;N;)x.unshift(N.record),N=N.parent;return{name:O,path:C,params:w,matched:x,meta:AR(x)}}t.forEach(d=>r(d));function h(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:i}}function Jd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Qd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:RR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function RR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Zd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function AR(t){return t.reduce((e,n)=>we(e,n.meta),{})}function ep(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function kR(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;ly(t,e[r])<0?s=r:n=r+1}const i=PR(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function PR(t){let e=t;for(;e=e.parent;)if(cy(e)&&ly(t,e)===0)return e}function cy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function OR(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ey," "),o=r.indexOf("="),l=Dr(o<0?r:r.slice(0,o)),c=o<0?null:Dr(r.slice(o+1));if(l in e){let u=e[l];sn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function tp(t){let e="";for(let n in t){const s=t[n];if(n=JS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(sn(s)?s.map(r=>r&&jc(r)):[s&&jc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function NR(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=sn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const xR=Symbol(""),np=Symbol(""),qu=Symbol(""),zu=Symbol(""),$c=Symbol("");function Qi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Jn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Ti(4,{from:n,to:e})):g instanceof Error?c(g):_R(g)?c(Ti(2,{from:e,to:g})):(o&&s.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),l())},h=r(()=>t.call(s&&s.instances[i],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(g=>c(g))})}function zl(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Q_(c)){const h=(c.__vccOpts||c)[e];h&&r.push(Jn(h,n,s,o,l,i))}else{let u=c();r.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=jS(h)?h.default:h;o.mods[l]=h,o.components[l]=d;const _=(d.__vccOpts||d)[e];return _&&Jn(_,n,s,o,l,i)()}))}}return r}function sp(t){const e=Ye(qu),n=Ye(zu),s=Dt(()=>{const c=Be(t.to);return e.resolve(c)}),i=Dt(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const g=d.findIndex(Ei.bind(null,h));if(g>-1)return g;const _=ip(c[u-2]);return u>1&&ip(h)===_&&d[d.length-1].path!==_?d.findIndex(Ei.bind(null,c[u-2])):g}),r=Dt(()=>i.value>-1&&UR(n.params,s.value.params)),o=Dt(()=>i.value>-1&&i.value===n.matched.length-1&&iy(n.params,s.value.params));function l(c={}){if(FR(c)){const u=e[Be(t.replace)?"replace":"push"](Be(t.to)).catch(yr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Dt(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}function MR(t){return t.length===1?t[0]:t}const LR=on({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sp,setup(t,{slots:e}){const n=Dn(sp(t)),{options:s}=Ye(qu),i=Dt(()=>({[rp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[rp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&MR(e.default(n));return t.custom?r:ze("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),DR=LR;function FR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UR(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!sn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ip(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const rp=(t,e,n)=>t??e??n,HR=on({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ye($c),i=Dt(()=>t.route||s.value),r=Ye(np,0),o=Dt(()=>{let u=Be(r);const{matched:h}=i.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),l=Dt(()=>i.value.matched[o.value]);As(np,Dt(()=>o.value+1)),As(xR,l),As($c,i);const c=Ht();return ci(()=>[c.value,l.value,t.name],([u,h,d],[g,_,w])=>{h&&(h.instances[d]=u,_&&_!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!Ei(h,_)||!g)&&(h.enterCallbacks[d]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,d=l.value,g=d&&d.components[h];if(!g)return op(n.default,{Component:g,route:u});const _=d.props[h],w=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=ze(g,we({},w,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return op(n.default,{Component:O,route:u})||O}}});function op(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uy=HR;function jR(t){const e=SR(t.routes,t),n=t.parseQuery||OR,s=t.stringifyQuery||tp,i=t.history,r=Qi(),o=Qi(),l=Qi(),c=Ar(Wt);let u=Wt;Zs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Kl.bind(null,j=>""+j),d=Kl.bind(null,ZS),g=Kl.bind(null,Dr);function _(j,J){let Y,ee;return oy(j)?(Y=e.getRecordMatcher(j),ee=J):ee=j,e.addRoute(ee,Y)}function w(j){const J=e.getRecordMatcher(j);J&&e.removeRoute(J)}function C(){return e.getRoutes().map(j=>j.record)}function O(j){return!!e.getRecordMatcher(j)}function x(j,J){if(J=we({},J||c.value),typeof j=="string"){const k=ql(n,j,J.path),F=e.resolve({path:k.path},J),B=i.createHref(k.fullPath);return we(k,F,{params:g(F.params),hash:Dr(k.hash),redirectedFrom:void 0,href:B})}let Y;if(j.path!=null)Y=we({},j,{path:ql(n,j.path,J.path).path});else{const k=we({},j.params);for(const F in k)k[F]==null&&delete k[F];Y=we({},j,{params:d(k)}),J.params=d(J.params)}const ee=e.resolve(Y,J),he=j.hash||"";ee.params=h(g(ee.params));const Ie=nR(s,we({},j,{hash:XS(he),path:ee.path})),S=i.createHref(Ie);return we({fullPath:Ie,hash:he,query:s===tp?NR(j.query):j.query||{}},ee,{redirectedFrom:void 0,href:S})}function N(j){return typeof j=="string"?ql(n,j,c.value.path):we({},j)}function T(j,J){if(u!==j)return Ti(8,{from:J,to:j})}function A(j){return E(j)}function M(j){return A(we(N(j),{replace:!0}))}function D(j){const J=j.matched[j.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let ee=typeof Y=="function"?Y(j):Y;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=N(ee):{path:ee},ee.params={}),we({query:j.query,hash:j.hash,params:ee.path!=null?{}:j.params},ee)}}function E(j,J){const Y=u=x(j),ee=c.value,he=j.state,Ie=j.force,S=j.replace===!0,k=D(Y);if(k)return E(we(N(k),{state:typeof k=="object"?we({},he,k.state):he,force:Ie,replace:S}),J||Y);const F=Y;F.redirectedFrom=J;let B;return!Ie&&sR(s,ee,Y)&&(B=Ti(16,{to:F,from:ee}),Ot(ee,ee,!0,!1)),(B?Promise.resolve(B):b(F,ee)).catch(H=>bn(H)?bn(H,2)?H:$t(H):Q(H,F,ee)).then(H=>{if(H){if(bn(H,2))return E(we({replace:S},N(H.to),{state:typeof H.to=="object"?we({},he,H.to.state):he,force:Ie}),J||F)}else H=R(F,ee,!0,S,he);return P(F,ee,H),H})}function y(j,J){const Y=T(j,J);return Y?Promise.reject(Y):Promise.resolve()}function v(j){const J=Hn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(j):j()}function b(j,J){let Y;const[ee,he,Ie]=BR(j,J);Y=zl(ee.reverse(),"beforeRouteLeave",j,J);for(const k of ee)k.leaveGuards.forEach(F=>{Y.push(Jn(F,j,J))});const S=y.bind(null,j,J);return Y.push(S),Et(Y).then(()=>{Y=[];for(const k of r.list())Y.push(Jn(k,j,J));return Y.push(S),Et(Y)}).then(()=>{Y=zl(he,"beforeRouteUpdate",j,J);for(const k of he)k.updateGuards.forEach(F=>{Y.push(Jn(F,j,J))});return Y.push(S),Et(Y)}).then(()=>{Y=[];for(const k of Ie)if(k.beforeEnter)if(sn(k.beforeEnter))for(const F of k.beforeEnter)Y.push(Jn(F,j,J));else Y.push(Jn(k.beforeEnter,j,J));return Y.push(S),Et(Y)}).then(()=>(j.matched.forEach(k=>k.enterCallbacks={}),Y=zl(Ie,"beforeRouteEnter",j,J,v),Y.push(S),Et(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(Jn(k,j,J));return Y.push(S),Et(Y)}).catch(k=>bn(k,8)?k:Promise.reject(k))}function P(j,J,Y){l.list().forEach(ee=>v(()=>ee(j,J,Y)))}function R(j,J,Y,ee,he){const Ie=T(j,J);if(Ie)return Ie;const S=J===Wt,k=Zs?history.state:{};Y&&(ee||S?i.replace(j.fullPath,we({scroll:S&&k&&k.scroll},he)):i.push(j.fullPath,he)),c.value=j,Ot(j,J,Y,S),$t()}let I;function le(){I||(I=i.listen((j,J,Y)=>{if(!an.listening)return;const ee=x(j),he=D(ee);if(he){E(we(he,{replace:!0,force:!0}),ee).catch(yr);return}u=ee;const Ie=c.value;Zs&&hR(Kd(Ie.fullPath,Y.delta),Ja()),b(ee,Ie).catch(S=>bn(S,12)?S:bn(S,2)?(E(we(N(S.to),{force:!0}),ee).then(k=>{bn(k,20)&&!Y.delta&&Y.type===Fr.pop&&i.go(-1,!1)}).catch(yr),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),Q(S,ee,Ie))).then(S=>{S=S||R(ee,Ie,!1),S&&(Y.delta&&!bn(S,8)?i.go(-Y.delta,!1):Y.type===Fr.pop&&bn(S,20)&&i.go(-1,!1)),P(ee,Ie,S)}).catch(yr)}))}let ue=Qi(),Z=Qi(),re;function Q(j,J,Y){$t(j);const ee=Z.list();return ee.length?ee.forEach(he=>he(j,J,Y)):console.error(j),Promise.reject(j)}function Me(){return re&&c.value!==Wt?Promise.resolve():new Promise((j,J)=>{ue.add([j,J])})}function $t(j){return re||(re=!j,le(),ue.list().forEach(([J,Y])=>j?Y(j):J()),ue.reset()),j}function Ot(j,J,Y,ee){const{scrollBehavior:he}=t;if(!Zs||!he)return Promise.resolve();const Ie=!Y&&fR(Kd(j.fullPath,0))||(ee||!Y)&&history.state&&history.state.scroll||null;return Gr().then(()=>he(j,J,Ie)).then(S=>S&&uR(S)).catch(S=>Q(S,j,J))}const Le=j=>i.go(j);let De;const Hn=new Set,an={currentRoute:c,listening:!0,addRoute:_,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:C,resolve:x,options:t,push:A,replace:M,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Z.add,isReady:Me,install(j){const J=this;j.component("RouterLink",DR),j.component("RouterView",uy),j.config.globalProperties.$router=J,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(c)}),Zs&&!De&&c.value===Wt&&(De=!0,A(i.location).catch(he=>{}));const Y={};for(const he in Wt)Object.defineProperty(Y,he,{get:()=>c.value[he],enumerable:!0});j.provide(qu,J),j.provide(zu,Sn(Y)),j.provide($c,c);const ee=j.unmount;Hn.add(j),j.unmount=function(){Hn.delete(j),Hn.size<1&&(u=Wt,I&&I(),I=null,c.value=Wt,De=!1,re=!1),ee()}}};function Et(j){return j.reduce((J,Y)=>J.then(()=>v(Y)),Promise.resolve())}return an}function BR(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>Ei(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Ei(u,c))||i.push(c))}return[n,s,i]}function $R(t){return Ye(zu)}const VR=/(:\w+)\([^)]+\)/g,WR=/(:\w+)[?+*]/g,GR=/:\w+/g,KR=(t,e)=>e.path.replace(VR,"$1").replace(WR,"$1").replace(GR,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),Vc=(t,e)=>{const n=t.route.matched.find(i=>{var r;return((r=i.components)==null?void 0:r.default)===t.Component.type}),s=e??(n==null?void 0:n.meta.key)??(n&&KR(t.route,n));return typeof s=="function"?s(t.route):s},qR=(t,e)=>({default:()=>t?ze(QE,t===!0?{}:t,e):e});function Yu(t){return Array.isArray(t)?t:[t]}const Yl=[{name:"debug",path:"/debug",component:()=>cn(()=>import("./DsnZvwtS.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"index",path:"/",component:()=>cn(()=>import("./DdjXyrGw.js"),__vite__mapDeps([2,3,1]),import.meta.url)},{name:"notFound",path:"/:notFound(.*)*",component:()=>cn(()=>import("./BUFssws_.js"),__vite__mapDeps([4,1]),import.meta.url)},{name:"dashboard",path:"/dashboard",component:()=>cn(()=>import("./JgpVltGM.js"),__vite__mapDeps([5,1]),import.meta.url)},{name:"dashboard-login",path:"/dashboard/login",component:()=>cn(()=>import("./F7ktk0vI.js"),[],import.meta.url)},{name:"dashboard-register",path:"/dashboard/register",component:()=>cn(()=>import("./CAZ4PFJW.js"),__vite__mapDeps([6,1]),import.meta.url)},{name:"dashboard-settings",path:"/dashboard/settings",component:()=>cn(()=>import("./DhJ_3q_S.js"),__vite__mapDeps([7,1]),import.meta.url)},{name:"dashboard-transfer",path:"/dashboard/transfer",component:()=>cn(()=>import("./lY2vh0az.js"),__vite__mapDeps([8,1]),import.meta.url)}],hy=(t,e)=>({default:()=>{var n;return t?ze(tb,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),zR=/(:\w+)\([^)]+\)/g,YR=/(:\w+)[?+*]/g,XR=/:\w+/g;function ap(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(zR,"$1").replace(YR,"$1").replace(XR,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""});return typeof e=="function"?e(t):e}function fy(t,e){return t===e||e===Wt?!1:ap(t)!==ap(e)?!0:!t.matched.every((s,i)=>{var r,o;return s.components&&s.components.default===((o=(r=e.matched[i])==null?void 0:r.components)==null?void 0:o.default)})}const JR={scrollBehavior(t,e,n){var u;const s=He(),i=((u=Ct().options)==null?void 0:u.scrollBehaviorType)??"auto";let r=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!r&&e&&t&&o!==!1&&fy(t,e)&&(r={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:dy(t.hash),behavior:i}:!1;const l=h=>!!(h.meta.pageTransition??kc),c=l(e)&&l(t)?"page:transition:finish":"page:loading:end";return new Promise(h=>{s.hooks.hookOnce(c,()=>{requestAnimationFrame(()=>h(QR(t,"instant",r)))})})}};function dy(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function QR(t,e,n){return n||(t.hash?{el:t.hash,top:dy(t.hash),behavior:e}:{left:0,top:0,behavior:e})}const ZR={hashMode:!1,scrollBehaviorType:"auto"},Lt={...ZR,...JR},eA=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const s=He(),i=Ct(),r=([e,n]=hi(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(r===!0)return;const o=Ka({statusCode:r&&r.statusCode||404,statusMessage:r&&r.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),l=i.beforeResolve(u=>{if(l(),u===t){const h=i.afterEach(async()=>{h(),await s.runWithContext(()=>Xn(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},tA=async t=>{let e,n;const s=([e,n]=hi(()=>Wu({path:t.path})),e=await e,n(),e);if(s.redirect)return Hs(s.redirect,{acceptRelative:!0})?(window.location.href=s.redirect,!1):s.redirect},nA=[eA,tA],wr={};function sA(t,e,n){const{pathname:s,search:i,hash:r}=e,o=t.indexOf("#");if(o>-1){const u=r.includes(t.slice(o))?t.slice(o).length:1;let h=r.slice(u);return h[0]!=="/"&&(h="/"+h),td(h,"")}const l=td(s,t),c=!n||e0(l,n,{trailingSlash:!0})?l:n;return c+(c.includes("?")?"":i)+r}const iA=pt({name:"nuxt:router",enforce:"pre",async setup(t){var O;let e,n,s=Ri().app.baseURL;const i=((O=Lt.history)==null?void 0:O.call(Lt,s))??mR(s),r=Lt.routes?([e,n]=hi(()=>Lt.routes(Yl)),e=await e,n(),e??Yl):Yl;let o;const l=jR({...Lt,scrollBehavior:(x,N,T)=>{if(N===Wt){o=T;return}if(Lt.scrollBehavior){if(l.options.scrollBehavior=Lt.scrollBehavior,"scrollRestoration"in window.history){const A=l.beforeEach(()=>{A(),window.history.scrollRestoration="manual"})}return Lt.scrollBehavior(x,Wt,o||T)}},history:i,routes:r});Lt.routes&&Lt.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(l);const c=Ar(l.currentRoute.value);l.afterEach((x,N)=>{c.value=N}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=sA(s,window.location,t.payload.path),h=Ar(l.currentRoute.value),d=()=>{h.value=l.currentRoute.value};t.hook("page:finish",d),l.afterEach((x,N)=>{var T,A,M,D;((A=(T=x.matched[0])==null?void 0:T.components)==null?void 0:A.default)===((D=(M=N.matched[0])==null?void 0:M.components)==null?void 0:D.default)&&d()});const g={};for(const x in h.value)Object.defineProperty(g,x,{get:()=>h.value[x],enumerable:!0});t._route=Sn(g),t._middleware||(t._middleware={global:[],named:{}});const _=Ga();l.afterEach(async(x,N,T)=>{delete t._processingMiddleware,!t.isHydrating&&_.value&&await t.runWithContext(C_),T&&await t.callHook("page:loading:end")});try{[e,n]=hi(()=>l.isReady()),await e,n()}catch(x){[e,n]=hi(()=>t.runWithContext(()=>Xn(x))),await e,n()}const w=u!==l.currentRoute.value.fullPath?l.resolve(u):l.currentRoute.value;d();const C=t.payload.state._layout;return l.beforeEach(async(x,N)=>{var T;await t.callHook("page:loading:start"),x.meta=Dn(x.meta),t.isHydrating&&C&&!us(x.meta.layout)&&(x.meta.layout=C),t._processingMiddleware=!0;{const A=new Set([...nA,...t._middleware.global]);for(const M of x.matched){const D=M.meta.middleware;if(D)for(const E of Yu(D))A.add(E)}{const M=await t.runWithContext(()=>Wu({path:x.path}));if(M.appMiddleware)for(const D in M.appMiddleware)M.appMiddleware[D]?A.add(D):A.delete(D)}for(const M of A){const D=typeof M=="string"?t._middleware.named[M]||await((T=wr[M])==null?void 0:T.call(wr).then(E=>E.default||E)):M;if(!D)throw new Error(`Unknown route middleware: '${M}'.`);try{const E=await t.runWithContext(()=>D(x,N));if(!t.payload.serverRendered&&t.isHydrating&&(E===!1||E instanceof Error)){const y=E||Ho({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Xn(y)),!1}if(E===!0)continue;if(E===!1)return E;if(E)return S_(E)&&E.fatal&&await t.runWithContext(()=>Xn(E)),E}catch(E){const y=Ho(E);return y.fatal&&await t.runWithContext(()=>Xn(y)),y}}}}),l.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),l.afterEach(async(x,N)=>{x.matched.length===0&&await t.runWithContext(()=>Xn(Ho({statusCode:404,fatal:!1,statusMessage:`Page not found: ${x.fullPath}`,data:{path:x.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in w&&(w.name=void 0),await l.replace({...w,force:!0}),l.options.scrollBehavior=Lt.scrollBehavior}catch(x){await t.runWithContext(()=>Xn(x))}}),{provide:{router:l}}}}),lp=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),CM=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Xu=t=>{const e=He();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{lp(()=>t())}):lp(()=>t())},rA=pt({name:"nuxt:payload",setup(t){const e=new Set;Ct().beforeResolve(async(n,s)=>{if(n.path===s.path)return;const i=await Vd(n.path);if(i){for(const r of e)delete t.static.data[r];for(const r in i.data)r in t.static.data||e.add(r),t.static.data[r]=i.data[r]}}),Xu(()=>{var n;t.hooks.hook("link:prefetch",async s=>{const{hostname:i}=new URL(s,window.location.href);i===window.location.hostname&&await Vd(s).catch(()=>{console.warn("[nuxt] Error preloading payload for",s)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Xa,1e3)})}}),oA=pt(()=>{const t=Ct();Xu(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),aA=pt(t=>{let e;async function n(){const s=await Xa();e&&clearTimeout(e),e=setTimeout(n,ad);try{const i=await $fetch(Uu("builds/latest.json")+`?${Date.now()}`);i.id!==s.id&&t.hooks.callHook("app:manifest:update",i)}catch{}}Xu(()=>{e=setTimeout(n,ad)})}),lA=pt(t=>{if(!document.startViewTransition)return;let e,n;Ct().beforeResolve(async(i,r)=>{const o=i.meta.viewTransition??O0,c=window.matchMedia("(prefers-reduced-motion: reduce)").matches&&o!=="always";if(o===!1||c||!fy(i,r))return;const u=new Promise((_,w)=>{e=_,n=w});let h;const d=new Promise(_=>h=_),g=document.startViewTransition(()=>(h(),u));return g.finished.then(()=>{n=void 0,e=void 0}),await t.callHook("page:view-transition:start",g),d}),t.hook("vue:error",()=>{n==null||n(),n=void 0}),t.hook("page:finish",()=>{e==null||e(),e=void 0})});function cA(t={}){const e=t.path||window.location.pathname;let n={};try{n=oa(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:He().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const uA=pt({name:"nuxt:chunk-reload",setup(t){const e=Ct(),n=Ri(),s=new Set;e.beforeEach(()=>{s.clear()}),t.hook("app:chunkError",({error:r})=>{s.add(r)});function i(r){const l="href"in r&&r.href[0]==="#"?n.app.baseURL+r.href:Fu(n.app.baseURL,r.fullPath);cA({path:l,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(i)}),e.onError((r,o)=>{s.has(r)&&i(o)})}}),cp=["http:","https:"],hA=pt({name:"nuxt:cross-origin-prefetch",setup(t){const e=Ht(new Set);function n(){return{type:"speculationrules",key:"speculationrules",innerHTML:JSON.stringify({prefetch:[{source:"list",urls:[...e.value],requires:["anonymous-client-ip-when-cross-origin"]}]})}}const s=z_({script:[n()]});t.hook("link:prefetch",i=>{cp.some(r=>i.startsWith(r))&&cp.includes(new URL(i).protocol)&&(e.value.add(i),s==null||s.patch({script:[n()]}))})}}),fA=mm(()=>cn(()=>import("./Cz13rh4v.js"),[],import.meta.url).then(t=>t.default||t.default||t)),dA=[["Icon",fA]],pA=pt({name:"nuxt:global-components",setup(t){for(const[e,n]of dA)t.vueApp.component(e,n),t.vueApp.component("Lazy"+e,n)}}),is={default:mm(()=>cn(()=>import("./7XZapJd_.js"),__vite__mapDeps([9,3,1]),import.meta.url).then(t=>t.default||t))},gA=pt({name:"nuxt:prefetch",setup(t){const e=Ct();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var i;const s=(i=n==null?void 0:n.meta)==null?void 0:i.layout;s&&typeof is[s]=="function"&&await is[s]()})}),t.hooks.hook("link:prefetch",n=>{if(Hs(n))return;const s=e.resolve(n);if(!s)return;const i=s.meta.layout;let r=Yu(s.meta.middleware);r=r.filter(o=>typeof o=="string");for(const o of r)typeof wr[o]=="function"&&wr[o]();i&&typeof is[i]=="function"&&is[i]()})}});var mA="firebase",_A="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(mA,_A,"app");const yA=pt(()=>({provide:{firebaseApp:H_(Ri().public.vuefire.config)}}));function Ju(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gy=py,my=new ki("auth","Firebase",py());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=new Jr("@firebase/auth");function vA(t,...e){va.logLevel<=Te.WARN&&va.warn(`Auth (${ps}): ${t}`,...e)}function Vo(t,...e){va.logLevel<=Te.ERROR&&va.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,...e){throw Qu(t,...e)}function dn(t,...e){return Qu(t,...e)}function _y(t,e,n){const s=Object.assign(Object.assign({},gy()),{[e]:n});return new ki("auth","Firebase",s).create(e,{appName:t.name})}function Ps(t){return _y(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return my.create(t,...e)}function ce(t,e,...n){if(!t)throw Qu(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vo(e),new Error(e)}function Mn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wA(){return up()==="http:"||up()==="https:"}function up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wA()||lI()||"connection"in navigator)?navigator.onLine:!0}function TA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=ju()||M_()}get(){return EA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],CA=new Qr(3e4,6e4);function eh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ni(t,e,n,s,i={}){return vy(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=Pi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},r);return aI()||(u.referrerPolicy="no-referrer"),yy.fetch()(await wy(t,t.config.apiHost,n,l),u)})}async function vy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},bA),e);try{const i=new RA(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Po(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Po(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Po(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Po(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _y(t,h,u);xn(t,h)}}catch(i){if(i instanceof _n)throw i;xn(t,"network-request-failed",{message:String(i)})}}async function SA(t,e,n,s,i={}){const r=await Ni(t,e,n,s,i);return"mfaPendingCredential"in r&&xn(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function wy(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?Zu(t.config,i):`${t.config.apiScheme}://${i}`;return IA.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class RA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(dn(this.auth,"network-request-failed")),CA.get())})}}function Po(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=dn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e){return Ni(t,"POST","/v1/accounts:delete",e)}async function wa(t,e){return Ni(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kA(t,e=!1){const n=Oi(t),s=await n.getIdToken(e),i=th(s);ce(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Er(Xl(i.auth_time)),issuedAtTime:Er(Xl(i.iat)),expirationTime:Er(Xl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Xl(t){return Number(t)*1e3}function th(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Vo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ha(n);return i?JSON.parse(i):(Vo("Failed to decode base64 JWT payload"),null)}catch(i){return Vo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hp(t){const e=th(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof _n&&PA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function PA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ur(t,wa(n,{idToken:s}));ce(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ey(r.providerUserInfo):[],l=xA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Gc(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function NA(t){const e=Oi(t);await Ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xA(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Ey(t){return t.map(e=>{var{providerId:n}=e,s=Ju(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(t,e){const n=await vy(t,{},async()=>{const s=Pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await wy(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",yy.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LA(t,e){return Ni(t,"POST","/v2/accounts:revokeToken",eh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=hp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await MA(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new fi;return s&&(ce(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ce(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ju(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Gc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ur(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kA(this,e)}reload(){return NA(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ea(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Ps(this.auth));const e=await this.getIdToken();return await Ur(this,AA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,l,c,u,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:A,isAnonymous:M,providerData:D,stsTokenManager:E}=n;ce(T&&E,e,"internal-error");const y=fi.fromJSON(this.name,E);ce(typeof T=="string",e,"internal-error"),Kn(d,e.name),Kn(g,e.name),ce(typeof A=="boolean",e,"internal-error"),ce(typeof M=="boolean",e,"internal-error"),Kn(_,e.name),Kn(w,e.name),Kn(C,e.name),Kn(O,e.name),Kn(x,e.name),Kn(N,e.name);const v=new Yt({uid:T,auth:e,email:g,emailVerified:A,displayName:d,isAnonymous:M,photoURL:w,phoneNumber:_,tenantId:C,stsTokenManager:y,createdAt:x,lastLoginAt:N});return D&&Array.isArray(D)&&(v.providerData=D.map(b=>Object.assign({},b))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,s=!1){const i=new fi;i.updateFromServerResponse(n);const r=new Yt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ea(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ce(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Ey(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new fi;l.updateFromIdToken(s);const c=new Yt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Gc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new Map;function An(t){Mn(t instanceof Function,"Expected a class definition");let e=fp.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ty.type="NONE";const dp=Ty;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Wo(this.userKey,i.apiKey,r),this.fullPersistenceKey=Wo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wa(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new di(An(dp),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||An(dp);const o=Wo(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const g=await wa(e,{idToken:h}).catch(()=>{});if(!g)break;d=await Yt._fromGetAccountInfoResponse(e,g,h)}else d=Yt._fromJSON(e,h);u!==r&&(l=d),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new di(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new di(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(by(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ay(e))return"Blackberry";if(ky(e))return"Webos";if(Iy(e))return"Safari";if((e.includes("chrome/")||Cy(e))&&!e.includes("edge/"))return"Chrome";if(Ry(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function by(t=wt()){return/firefox\//i.test(t)}function Iy(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cy(t=wt()){return/crios\//i.test(t)}function Sy(t=wt()){return/iemobile/i.test(t)}function Ry(t=wt()){return/android/i.test(t)}function Ay(t=wt()){return/blackberry/i.test(t)}function ky(t=wt()){return/webos/i.test(t)}function nh(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DA(t=wt()){var e;return nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FA(){return cI()&&document.documentMode===10}function Py(t=wt()){return nh(t)||Ry(t)||ky(t)||Ay(t)||/windows phone/i.test(t)||Sy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t,e=[]){let n;switch(t){case"Browser":n=pp(wt());break;case"Worker":n=`${pp(wt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,e={}){return Ni(t,"GET","/v2/passwordPolicy",eh(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=6;class BA{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gp(this),this.idTokenSubscription=new gp(this),this.beforeStateQueue=new UA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=my,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wa(this,{idToken:e}),s=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ea(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Ps(this));const n=e?Oi(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Ps(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Ps(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HA(this),n=new BA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await LA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ny(t){return Oi(t)}class gp{constructor(e){this.auth=e,this.observer=null,this.addObserver=yI(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VA(t){sh=t}function WA(t){return sh.loadJS(t)}function GA(){return sh.gapiScript}function KA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t,e){const n=vC(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(da(r,e??{}))return i;xn(i,"already-initialized")}return n.initialize({options:e})}function zA(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e){return SA(t,"POST","/v1/accounts:signInWithIdp",eh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="http://localhost";class Ns extends xy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ju(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ns(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:YA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends My{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Zr{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.FACEBOOK_SIGN_IN_METHOD="facebook.com";es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ts.credential(n,s)}catch{return null}}}ts.GOOGLE_SIGN_IN_METHOD="google.com";ts.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Zr{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.GITHUB_SIGN_IN_METHOD="github.com";ns.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Zr{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ss.credential(n,s)}catch{return null}}}ss.TWITTER_SIGN_IN_METHOD="twitter.com";ss.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Yt._fromIdTokenResponse(e,s,i),o=mp(s);return new bi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=mp(s);return new bi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends _n{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ta(e,n,s,i)}}function Ly(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(t,r,e,s):r})}async function XA(t,e,n=!1){const s=await Ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e,n=!1){const{auth:s}=t;if(Ft(s.app))return Promise.reject(Ps(s));const i="reauthenticate";try{const r=await Ur(t,Ly(s,i,e,t),n);ce(r.idToken,s,"internal-error");const o=th(r.idToken);ce(o,s,"internal-error");const{sub:l}=o;return ce(t.uid===l,s,"user-mismatch"),bi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&xn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e,n=!1){if(Ft(t.app))return Promise.reject(Ps(t));const s="signIn",i=await Ly(t,s,e),r=await bi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function ZA(t,e,n,s){return Oi(t).onIdTokenChanged(e,n,s)}const ba="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ba,"1"),this.storage.removeItem(ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=1e3,tk=10;class Fy extends Dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Py(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);FA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tk):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fy.type="LOCAL";const nk=Fy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy extends Dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uy.type="SESSION";const sk=Uy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Qa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,r)),c=await ik(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=ih("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(g.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function ok(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ck(){return Hy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="firebaseLocalStorageDb",uk=1,Ia="firebaseLocalStorage",By="fbase_key";class eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Za(t,e){return t.transaction([Ia],e?"readwrite":"readonly").objectStore(Ia)}function hk(){const t=indexedDB.deleteDatabase(jy);return new eo(t).toPromise()}function Kc(){const t=indexedDB.open(jy,uk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ia,{keyPath:By})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ia)?e(s):(s.close(),await hk(),e(await Kc()))})})}async function _p(t,e,n){const s=Za(t,!0).put({[By]:e,value:n});return new eo(s).toPromise()}async function fk(t,e){const n=Za(t,!1).get(e),s=await new eo(n).toPromise();return s===void 0?null:s.value}function yp(t,e){const n=Za(t,!0).delete(e);return new eo(n).toPromise()}const dk=800,pk=3;class $y{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>pk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qa._getInstance(ck()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ak(),!this.activeServiceWorker)return;this.sender=new rk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kc();return await _p(e,ba,"1"),await yp(e,ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_p(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>fk(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Za(i,!1).getAll();return new eo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$y.type="LOCAL";const gk=$y;new Qr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e){return e?An(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends xy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _k(t){return QA(t.auth,new rh(t),t.bypassAuthState)}function yk(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),JA(n,new rh(t),t.bypassAuthState)}async function vk(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),XA(n,new rh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _k;case"linkViaPopup":case"linkViaRedirect":return vk;case"reauthViaPopup":case"reauthViaRedirect":return yk;default:xn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=new Qr(2e3,1e4);class ti extends Vy{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=ih();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wk.get())};e()}}ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="pendingRedirect",Go=new Map;class Tk extends Vy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Go.get(this.auth._key());if(!e){try{const s=await bk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Go.set(this.auth._key(),e)}return this.bypassAuthState||Go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bk(t,e){const n=Sk(e),s=Ck(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Ik(t,e){Go.set(t._key(),e)}function Ck(t){return An(t._redirectPersistence)}function Sk(t){return Wo(Ek,t.config.apiKey,t.name)}async function Rk(t,e,n=!1){if(Ft(t.app))return Promise.reject(Ps(t));const s=Ny(t),i=mk(s,e),o=await new Tk(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=10*60*1e3;class kk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Wy(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ak&&this.cachedEventUids.clear(),this.cachedEventUids.has(vp(e))}saveEventToCache(e){this.cachedEventUids.add(vp(e)),this.lastProcessedEventTime=Date.now()}}function vp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(t,e={}){return Ni(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xk=/^https?/;async function Mk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ok(t);for(const n of e)try{if(Lk(n))return}catch{}xn(t,"unauthorized-domain")}function Lk(t){const e=Wc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!xk.test(n))return!1;if(Nk.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=new Qr(3e4,6e4);function wp(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fk(t){return new Promise((e,n)=>{var s,i,r;function o(){wp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wp(),n(dn(t,"network-request-failed"))},timeout:Dk.get()})}if(!((i=(s=pn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=pn().gapi)===null||r===void 0)&&r.load)o();else{const l=KA("iframefcb");return pn()[l]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},WA(`${GA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ko=null,e})}let Ko=null;function Uk(t){return Ko=Ko||Fk(t),Ko}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=new Qr(5e3,15e3),jk="__/auth/iframe",Bk="emulator/auth/iframe",$k={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wk(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zu(e,Bk):`https://${t.config.authDomain}/${jk}`,s={apiKey:e.apiKey,appName:t.name,v:ps},i=Vk.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Pi(s).slice(1)}`}async function Gk(t){const e=await Uk(t),n=pn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:Wk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$k,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=pn().setTimeout(()=>{r(o)},Hk.get());function c(){pn().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qk=500,zk=600,Yk="_blank",Xk="http://localhost";class Ep{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jk(t,e,n,s=qk,i=zk){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Kk),{width:s.toString(),height:i.toString(),top:r,left:o}),u=wt().toLowerCase();n&&(l=Cy(u)?Yk:n),by(u)&&(e=e||Xk,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[_,w])=>`${g}${_}=${w},`,"");if(DA(u)&&l!=="_self")return Qk(e||"",l),new Ep(null);const d=window.open(e||"",l,h);ce(d,t,"popup-blocked");try{d.focus()}catch{}return new Ep(d)}function Qk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="__/auth/handler",eP="emulator/auth/handler",tP=encodeURIComponent("fac");async function Tp(t,e,n,s,i,r){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ps,eventId:i};if(e instanceof My){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Zr){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${tP}=${encodeURIComponent(c)}`:"";return`${nP(t)}?${Pi(l).slice(1)}${u}`}function nP({config:t}){return t.emulator?Zu(t,eP):`https://${t.authDomain}/${Zk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="webStorageSupport";class sP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sk,this._completeRedirectFn=Rk,this._overrideRedirectResult=Ik}async _openPopup(e,n,s,i){var r;Mn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Tp(e,n,s,Wc(),i);return Jk(e,o,ih())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Tp(e,n,s,Wc(),i);return ok(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Gk(e),s=new kk(e);return n.register("authEvent",i=>(ce(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jl,{type:Jl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Jl];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Mk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Py()||Iy()||nh()}}const iP=sP;var bp="@firebase/auth",Ip="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aP(t){gn(new nn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oy(t)},u=new $A(s,i,r,c);return zA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gn(new nn("auth-internal",e=>{const n=Ny(e.getProvider("auth").getImmediate());return(s=>new rP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(bp,Ip,oP(t)),kt(bp,Ip,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=5*60;oI("authIdTokenMaxAge");function cP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VA({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=dn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",cP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aP("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new Map,hP={activated:!1,tokenObservers:[]};function rn(t){return uP.get(t)||Object.assign({},hP)}const Cp={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new xr,this.pending.promise.catch(n=>{}),await dP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new xr,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function dP(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Ca=new ki("appCheck","AppCheck",pP);function Gy(t){if(!rn(t).activated)throw Ca.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP="firebase-app-check-database",mP=1,qc="firebase-app-check-store";let Oo=null;function _P(){return Oo||(Oo=new Promise((t,e)=>{try{const n=indexedDB.open(gP,mP);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Ca.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(qc,{keyPath:"compositeKey"})}}}catch(n){e(Ca.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Oo)}function yP(t,e){return vP(wP(t),e)}async function vP(t,e){const s=(await _P()).transaction(qc,"readwrite"),r=s.objectStore(qc).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var u;l(Ca.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function wP(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Jr("@firebase/app-check");function Sp(t,e){return L_()?yP(t,e).catch(n=>{zc.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP={error:"UNKNOWN_ERROR"};function TP(t){return qa.encodeString(JSON.stringify(t),!1)}async function Yc(t,e=!1,n=!1){const s=t.app;Gy(s);const i=rn(s);let r=i.token,o;if(r&&!ar(r)&&(i.token=void 0,r=void 0),!r){const u=await i.cachedTokenPromise;u&&(ar(u)?r=u:await Sp(s,void 0))}if(!e&&r&&ar(r))return{token:r.token};let l=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),l=!0),r=await rn(s).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?zc.warn(u.message):n&&zc.error(u),o=u}let c;return r?o?ar(r)?c={token:r.token,internalError:o}:c=Ap(o):(c={token:r.token},i.token=r,await Sp(s,r)):c=Ap(o),l&&SP(s,c),c}async function bP(t){const e=t.app;Gy(e);const{provider:n}=rn(e);{const{token:s}=await n.getToken();return{token:s}}}function IP(t,e,n,s){const{app:i}=t,r=rn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&ar(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),Rp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Rp(t))}function Ky(t,e){const n=rn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Rp(t){const{app:e}=t,n=rn(e);let s=n.tokenRefresher;s||(s=CP(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function CP(t){const{app:e}=t;return new fP(async()=>{const n=rn(e);let s;if(n.token?s=await Yc(t,!0):s=await Yc(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=rn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Cp.RETRIAL_MIN_WAIT,Cp.RETRIAL_MAX_WAIT)}function SP(t,e){const n=rn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function ar(t){return t.expireTimeMillis-Date.now()>0}function Ap(t){return{token:TP(EP),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=rn(this.app);for(const n of e)Ky(this.app,n.next);return Promise.resolve()}}function AP(t,e){return new RP(t,e)}function kP(t){return{getToken:e=>Yc(t,e),getLimitedUseToken:()=>bP(t),addTokenListener:e=>IP(t,"INTERNAL",e),removeTokenListener:e=>Ky(t.app,e)}}const PP="@firebase/app-check",OP="0.8.13",NP="app-check",kp="app-check-internal";function xP(){gn(new nn(NP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return AP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(kp).initialize()})),gn(new nn(kp,t=>{const e=t.getProvider("app-check").getImmediate();return kP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),kt(PP,OP)}xP();const qy=Symbol("firebaseApp");function MP(t){return zr()&&Ye(qy,null)||TC(t)}const No=new WeakMap;function LP(t,e){if(!No.has(t)){const n=Bg(!0);No.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),No.delete(t)}}return No.get(t)}const DP=new WeakMap,xo=new WeakMap;function FP(t){const e=MP(t);if(!xo.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{xo.set(e,r),n(r.value)}];xo.set(e,i)}return xo.get(e)}function UP(t,e){ZA(e,n=>{const s=FP();t.value=n,Array.isArray(s)&&s[1](t)})}var Pp={};const Op="@firebase/database",Np="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zy="";function HP(t){zy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Mr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jP(e)}}catch{}return new BP},Cs=Yy("localStorage"),$P=Yy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Jr("@firebase/database"),VP=function(){let t=1;return function(){return t++}}(),Xy=function(t){const e=TI(t),n=new _I;n.update(e);const s=n.digest();return qa.encodeByteArray(s)},to=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=to.apply(null,s):typeof s=="object"?e+=tt(s):e+=s,e+=" "}return e};let Tr=null,xp=!0;const WP=function(t,e){z(!0,"Can't turn on custom loggers persistently."),gi.logLevel=Te.VERBOSE,Tr=gi.log.bind(gi)},ht=function(...t){if(xp===!0&&(xp=!1,Tr===null&&$P.get("logging_enabled")===!0&&WP()),Tr){const e=to.apply(null,t);Tr(e)}},no=function(t){return function(...e){ht(t,...e)}},Xc=function(...t){const e="FIREBASE INTERNAL ERROR: "+to(...t);gi.error(e)},xs=function(...t){const e=`FIREBASE FATAL ERROR: ${to(...t)}`;throw gi.error(e),new Error(e)},Pt=function(...t){const e="FIREBASE WARNING: "+to(...t);gi.warn(e)},GP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},KP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ii="[MIN_NAME]",Ms="[MAX_NAME]",xi=function(t,e){if(t===e)return 0;if(t===Ii||e===Ms)return-1;if(e===Ii||t===Ms)return 1;{const n=Mp(t),s=Mp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},qP=function(t,e){return t===e?0:t<e?-1:1},Zi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},oh=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=tt(e[s]),n+=":",n+=oh(t[e[s]]);return n+="}",n},Qy=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Bt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Zy=function(t){z(!Jy(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),d=d+g}return d.toLowerCase()},zP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},YP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},XP=new RegExp("^-?(0*)\\d{1,10}$"),JP=-2147483648,QP=2147483647,Mp=function(t){if(XP.test(t)){const e=Number(t);if(e>=JP&&e<=QP)return e}return null},so=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},br=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ft(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="5",ev="v",tv="s",nv="r",sv="f",iv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rv="ls",ov="p",Jc="ac",av="websocket",lv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1,u=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function cv(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let s;if(e===av)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===lv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sO(t)&&(n.ns=t.namespace);const i=[];return Bt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(){this.counters_={}}incrementCounter(e,n=1){Un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return eI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={},Zl={};function lh(t){const e=t.toString();return Ql[e]||(Ql[e]=new iO),Ql[e]}function rO(t,e){const n=t.toString();return Zl[n]||(Zl[n]=e()),Zl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&so(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="start",aO="close",lO="pLPCommand",cO="pRTLPCB",uv="id",hv="pw",fv="ser",uO="cb",hO="seg",fO="ts",dO="d",pO="dframe",dv=1870,pv=30,gO=dv-pv,mO=25e3,_O=3e4;class ni{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=no(e),this.stats_=lh(n),this.urlFn=c=>(this.appCheckToken&&(c[Jc]=this.appCheckToken),cv(n,lv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new oO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_O)),KP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ch((...r)=>{const[o,l,c,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lp)this.id=l,this.password=c;else if(o===aO)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Lp]="t",s[fv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[uO]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ev]=ah,this.transportSessionId&&(s[tv]=this.transportSessionId),this.lastSessionId&&(s[rv]=this.lastSessionId),this.applicationId&&(s[ov]=this.applicationId),this.appCheckToken&&(s[Jc]=this.appCheckToken),typeof location<"u"&&location.hostname&&iv.test(location.hostname)&&(s[nv]=sv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zP()&&!YP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=k_(n),i=Qy(s,gO);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[pO]="t",s[uv]=e,s[hv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ch{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VP(),window[lO+this.uniqueCallbackIdentifier]=e,window[cO+this.uniqueCallbackIdentifier]=n,this.myIFrame=ch.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ht("frame writing exception"),l.stack&&ht(l.stack),ht(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uv]=this.myID,e[hv]=this.myPW,e[fv]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pv+s.length<=dv;){const o=this.pendingSegs.shift();s=s+"&"+hO+i+"="+o.seg+"&"+fO+i+"="+o.ts+"&"+dO+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(mO)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=16384,vO=45e3;let Sa=null;typeof MozWebSocket<"u"?Sa=MozWebSocket:typeof WebSocket<"u"&&(Sa=WebSocket);class qt{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=no(this.connId),this.stats_=lh(n),this.connURL=qt.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ev]=ah,typeof location<"u"&&location.hostname&&iv.test(location.hostname)&&(o[nv]=sv),n&&(o[tv]=n),s&&(o[rv]=s),i&&(o[Jc]=i),r&&(o[ov]=r),cv(e,av,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cs.set("previous_websocket_failure",!0);try{let s;uI(),this.mySock=new Sa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Sa!==null&&!qt.forceDisallow_}static previouslyFailed(){return Cs.isInMemoryStorage||Cs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Mr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Qy(n,yO);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{static get ALL_TRANSPORTS(){return[ni,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=qt&&qt.isAvailable();let s=n&&!qt.previouslyFailed();if(e.webSocketOnly&&(n||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[qt];else{const i=this.transports_=[];for(const r of Hr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Hr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=6e4,EO=5e3,TO=10*1024,bO=100*1024,ec="t",Dp="d",IO="s",Fp="r",CO="e",Up="o",Hp="a",jp="n",Bp="p",SO="h";class RO{constructor(e,n,s,i,r,o,l,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=no("c:"+this.id+":"),this.transportManager_=new Hr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=br(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ec in e){const n=e[ec];n===Hp?this.upgradeIfSecondaryHealthy_():n===Fp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Up&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zi("t",e),s=Zi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zi("t",e),s=Zi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zi(ec,e);if(Dp in e){const s=e[Dp];if(n===SO){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===jp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===IO?this.onConnectionShutdown_(s):n===Fp?this.onReset_(s):n===CO?Xc("Server Error: "+s):n===Up?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ah!==s&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),br(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):br(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(EO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends mv{static getInstance(){return new Ra}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ju()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=32,Vp=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ce(){return new xe("")}function pe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hs(t){return t.pieces_.length-t.pieceNum_}function Oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function _v(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function yv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function qe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof xe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new xe(n,0)}function fe(t){return t.pieceNum_>=t.pieces_.length}function Ut(t,e){const n=pe(t),s=pe(e);if(n===null)return e;if(n===s)return Ut(Oe(t),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function wv(t,e){if(hs(t)!==hs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(hs(t)>hs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class kO{constructor(e,n){this.errorPrefix_=n,this.parts_=yv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=za(this.parts_[s]);Ev(this)}}function PO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=za(e),Ev(t)}function OO(t){const e=t.parts_.pop();t.byteLength_-=za(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ev(t){if(t.byteLength_>Vp)throw new Error(t.errorPrefix_+"has a key path longer than "+Vp+" bytes ("+t.byteLength_+").");if(t.parts_.length>$p)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$p+") or object contains a cycle "+Is(t))}function Is(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends mv{static getInstance(){return new uh}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=1e3,NO=60*5*1e3,Wp=30*1e3,xO=1.3,MO=3e4,LO="server_kill",Gp=3;class Pn extends gv{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Pn.nextPersistentConnectionId_++,this.log_=no("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=er,this.maxReconnectDelay_=NO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ra.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(tt(r)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new xr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,u=l.s;Pn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Un(e,"w")){const s=wi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||mI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xc("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=er,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=er,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>MO&&(this.reconnectDelay_=er),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pn.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},u=function(d){z(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=g&&g.token,l=new RO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Pt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(LO)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Pt(d),c())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xc(this.interruptReasons_)&&(this.reconnectDelay_=er,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>oh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new xe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gp&&(this.reconnectDelay_=Wp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zy.replace(/\./g,"-")]=1,ju()?e["framework.cordova"]=1:M_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ra.getInstance().currentlyOnline();return xc(this.interruptReasons_)&&e}}Pn.nextPersistentConnectionId_=0;Pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ge(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ge(Ii,e),i=new ge(Ii,n);return this.compare(s,i)!==0}minPost(){return ge.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo;class Tv extends el{static get __EMPTY_NODE(){return Mo}static set __EMPTY_NODE(e){Mo=e}compare(e,n){return xi(e.name,n.name)}isDefinedOn(e){throw Ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(Ms,Mo)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,Mo)}toString(){return".key"}}const mi=new Tv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ke.RED,this.left=i??It.EMPTY_NODE,this.right=r??It.EMPTY_NODE}copy(e,n,s,i,r){return new Ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return It.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0;Ke.BLACK=!1;class DO{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Lo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Lo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Lo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Lo(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new DO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t,e){return xi(t.name,e.name)}function hh(t,e){return xi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc;function UO(t){Qc=t}const bv=function(t){return typeof t=="number"?"number:"+Zy(t):"string:"+t},Iv=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Un(e,".sv"),"Priority must be a string or number.")}else z(t===Qc||t.isEmpty(),"priority of unexpected type.");z(t===Qc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp;class Ge{static set __childrenNodeConstructor(e){Kp=e}static get __childrenNodeConstructor(){return Kp}constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Iv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:pe(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=pe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(z(s!==".priority"||hs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Zy(this.value_):e+=this.value_,this.lazyHash_=Xy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ge.VALUE_TYPE_ORDER.indexOf(n),r=Ge.VALUE_TYPE_ORDER.indexOf(s);return z(i>=0,"Unknown leaf type: "+n),z(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cv,Sv;function HO(t){Cv=t}function jO(t){Sv=t}class BO extends el{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?xi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(Ms,new Ge("[PRIORITY-POST]",Sv))}makePost(e,n){const s=Cv(e);return new ge(n,new Ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const dt=new BO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=Math.log(2);class VO{constructor(e){const n=r=>parseInt(Math.log(r)/$O,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Aa=function(t,e,n,s){t.sort(e);const i=function(c,u){const h=u-c;let d,g;if(h===0)return null;if(h===1)return d=t[c],g=n?n(d):d,new Ke(g,d.node,Ke.BLACK,null,null);{const _=parseInt(h/2,10)+c,w=i(c,_),C=i(_+1,u);return d=t[_],g=n?n(d):d,new Ke(g,d.node,Ke.BLACK,w,C)}},r=function(c){let u=null,h=null,d=t.length;const g=function(w,C){const O=d-w,x=d;d-=w;const N=i(O+1,x),T=t[O],A=n?n(T):T;_(new Ke(A,T.node,C,null,N))},_=function(w){u?(u.left=w,u=w):(h=w,u=w)};for(let w=0;w<c.count;++w){const C=c.nextBitIsOne(),O=Math.pow(2,c.count-(w+1));C?g(O,Ke.BLACK):(g(O,Ke.BLACK),g(O,Ke.RED))}return h},o=new VO(t.length),l=r(o);return new It(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;const Js={};class kn{static get Default(){return z(Js&&dt,"ChildrenNode.ts has not been loaded"),tc=tc||new kn({".priority":Js},{".priority":dt}),tc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return Un(this.indexSet_,e.toString())}addIndex(e,n){z(e!==mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ge.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Aa(s,e.getCompare()):l=Js;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new kn(h,u)}addToIndexes(e,n){const s=fa(this.indexes_,(i,r)=>{const o=wi(this.indexSet_,r);if(z(o,"Missing index implementation for "+r),i===Js)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(ge.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),Aa(l,o.getCompare())}else return Js;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new ge(e.name,l))),c.insert(e,e.node)}});return new kn(s,this.indexSet_)}removeFromIndexes(e,n){const s=fa(this.indexes_,i=>{if(i===Js)return i;{const r=n.get(e.name);return r?i.remove(new ge(e.name,r)):i}});return new kn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr;class be{static get EMPTY_NODE(){return tr||(tr=new be(new It(hh),null,kn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Iv(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||tr}updatePriority(e){return this.children_.isEmpty()?this:new be(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?tr:n}}getChild(e){const n=pe(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ge(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?tr:this.priorityNode_;return new be(i,o,r)}}updateChild(e,n){const s=pe(e);if(s===null)return n;{z(pe(e)!==".priority"||hs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Oe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(dt,(o,l)=>{n[o]=l.val(e),s++,r&&be.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+bv(this.getPriority().val())+":"),this.forEachChild(dt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Xy(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ge(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ge(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ge.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===io?-1:0}withIndex(e){if(e===mi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new be(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(dt),i=n.getIterator(dt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mi?null:this.indexMap_.get(e.toString())}}be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class WO extends be{constructor(){super(new It(hh),be.EMPTY_NODE,kn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return be.EMPTY_NODE}isEmpty(){return!1}}const io=new WO;Object.defineProperties(ge,{MIN:{value:new ge(Ii,be.EMPTY_NODE)},MAX:{value:new ge(Ms,io)}});Tv.__EMPTY_NODE=be.EMPTY_NODE;Ge.__childrenNodeConstructor=be;UO(io);jO(io);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=!0;function ft(t,e=null){if(t===null)return be.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,ft(e))}if(!(t instanceof Array)&&GO){const n=[];let s=!1;if(Bt(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=ft(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new ge(o,c)))}}),n.length===0)return be.EMPTY_NODE;const r=Aa(n,FO,o=>o.name,hh);if(s){const o=Aa(n,dt.getCompare());return new be(r,ft(e),new kn({".priority":o},{".priority":dt}))}else return new be(r,ft(e),kn.Default)}else{let n=be.EMPTY_NODE;return Bt(t,(s,i)=>{if(Un(t,s)&&s.substring(0,1)!=="."){const r=ft(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ft(e))}}HO(ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO extends el{constructor(e){super(),this.indexPath_=e,z(!fe(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?xi(e.name,n.name):r}makePost(e,n){const s=ft(e),i=be.EMPTY_NODE.updateChild(this.indexPath_,s);return new ge(n,i)}maxPost(){const e=be.EMPTY_NODE.updateChild(this.indexPath_,io);return new ge(Ms,e)}toString(){return yv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO extends el{compare(e,n){const s=e.node.compareTo(n.node);return s===0?xi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,n){const s=ft(e);return new ge(n,s)}toString(){return".value"}}const zO=new qO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t){return{type:"value",snapshotNode:t}}function XO(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function JO(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ii}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ms}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===dt}copy(){const e=new fh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===dt?n="$priority":t.index_===zO?n="$value":t.index_===mi?n="$key":(z(t.index_ instanceof KO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=tt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+tt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=tt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Yp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==dt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends gv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=no("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ka.getListenId_(e,s),l={};this.listens_[o]=l;const c=zp(e._queryParams);this.restRequest_(r+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(r,d,!1,s),wi(this.listens_,o)===l){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",i(g,null)}})}unlisten(e,n){const s=ka.getListenId_(e,n);delete this.listens_[s]}get(e){const n=zp(e._queryParams),s=e._path.toString(),i=new xr;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Pi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Mr(l.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.rootNode_=be.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){return{value:null,children:new Map}}function Rv(t,e,n){if(fe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=pe(e);t.children.has(s)||t.children.set(s,Pa());const i=t.children.get(s);e=Oe(e),Rv(i,e,n)}}function Zc(t,e,n){t.value!==null?n(e,t.value):eN(t,(s,i)=>{const r=new xe(e.toString()+"/"+s);Zc(i,r,n)})}function eN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Bt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=10*1e3,nN=30*1e3,sN=5*60*1e3;class iN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tN(e);const s=Xp+(nN-Xp)*Math.random();br(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Bt(e,(i,r)=>{r>0&&Un(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),br(this.reportStats_.bind(this),Math.floor(Math.random()*2*sN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hn||(hn={}));function Av(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=hn.ACK_USER_WRITE,this.source=Av()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new Oa(Ce(),n,this.revert)}}else return z(pe(this.path)===e,"operationForChild called for unrelated child."),new Oa(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=hn.OVERWRITE}operationForChild(e){return fe(this.path)?new Ls(this.source,Ce(),this.snap.getImmediateChild(e)):new Ls(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=hn.MERGE}operationForChild(e){if(fe(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new Ls(this.source,Ce(),n.value):new jr(this.source,Ce(),n)}else return z(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jr(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const n=pe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function rN(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(QO(o.childName,o.snapshotNode))}),nr(t,i,"child_removed",e,s,n),nr(t,i,"child_added",e,s,n),nr(t,i,"child_moved",r,s,n),nr(t,i,"child_changed",e,s,n),nr(t,i,"value",e,s,n),i}function nr(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>aN(t,l,c)),o.forEach(l=>{const c=oN(t,l,r);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function oN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aN(t,e,n){if(e.childName==null||n.childName==null)throw Ai("Should only compare child_ events.");const s=new ge(e.childName,e.snapshotNode),i=new ge(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t,e){return{eventCache:t,serverCache:e}}function Ir(t,e,n,s){return Ov(new dh(e,n,s),t.serverCache)}function Nv(t,e,n,s){return Ov(t.eventCache,new dh(e,n,s))}function eu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ds(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc;const lN=()=>(nc||(nc=new It(qP)),nc);class Pe{static fromObject(e){let n=new Pe(null);return Bt(e,(s,i)=>{n=n.set(new xe(s),i)}),n}constructor(e,n=lN()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ce(),value:this.value};if(fe(e))return null;{const s=pe(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Oe(e),n);return r!=null?{path:qe(new xe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const n=pe(e),s=this.children.get(n);return s!==null?s.subtree(Oe(e)):new Pe(null)}}set(e,n){if(fe(e))return new Pe(n,this.children);{const s=pe(e),r=(this.children.get(s)||new Pe(null)).set(Oe(e),n),o=this.children.insert(s,r);return new Pe(this.value,o)}}remove(e){if(fe(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=pe(e),s=this.children.get(n);if(s){const i=s.remove(Oe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Pe(null):new Pe(this.value,r)}else return this}}get(e){if(fe(e))return this.value;{const n=pe(e),s=this.children.get(n);return s?s.get(Oe(e)):null}}setTree(e,n){if(fe(e))return n;{const s=pe(e),r=(this.children.get(s)||new Pe(null)).setTree(Oe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Pe(this.value,o)}}fold(e){return this.fold_(Ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(qe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ce(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(fe(e))return null;{const r=pe(e),o=this.children.get(r);return o?o.findOnPath_(Oe(e),qe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ce(),n)}foreachOnPath_(e,n,s){if(fe(e))return this;{this.value&&s(n,this.value);const i=pe(e),r=this.children.get(i);return r?r.foreachOnPath_(Oe(e),qe(n,i),s):new Pe(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(qe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.writeTree_=e}static empty(){return new en(new Pe(null))}}function Cr(t,e,n){if(fe(e))return new en(new Pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ut(i,e);return r=r.updateChild(o,n),new en(t.writeTree_.set(i,r))}else{const i=new Pe(n),r=t.writeTree_.setTree(e,i);return new en(r)}}}function Jp(t,e,n){let s=t;return Bt(n,(i,r)=>{s=Cr(s,qe(e,i),r)}),s}function Qp(t,e){if(fe(e))return en.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new en(n)}}function tu(t,e){return js(t,e)!=null}function js(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ut(n.path,e)):null}function Zp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(dt,(s,i)=>{e.push(new ge(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ge(s,i.value))}),e}function cs(t,e){if(fe(e))return t;{const n=js(t,e);return n!=null?new en(new Pe(n)):new en(t.writeTree_.subtree(e))}}function nu(t){return t.writeTree_.isEmpty()}function Ci(t,e){return xv(Ce(),t.writeTree_,e)}function xv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(z(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=xv(qe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(qe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t,e){return Hv(e,t)}function cN(t,e,n,s,i){z(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Cr(t.visibleWrites,e,n)),t.lastWriteId=s}function uN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function hN(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&fN(l,s.path)?i=!1:Xt(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return dN(t),!0;if(s.snap)t.visibleWrites=Qp(t.visibleWrites,s.path);else{const l=s.children;Bt(l,c=>{t.visibleWrites=Qp(t.visibleWrites,qe(s.path,c))})}return!0}else return!1}function fN(t,e){if(t.snap)return Xt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xt(qe(t.path,n),e))return!0;return!1}function dN(t){t.visibleWrites=Lv(t.allWrites,pN,Ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pN(t){return t.visible}function Lv(t,e,n){let s=en.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Xt(n,o)?(l=Ut(n,o),s=Cr(s,l,r.snap)):Xt(o,n)&&(l=Ut(o,n),s=Cr(s,Ce(),r.snap.getChild(l)));else if(r.children){if(Xt(n,o))l=Ut(n,o),s=Jp(s,l,r.children);else if(Xt(o,n))if(l=Ut(o,n),fe(l))s=Jp(s,Ce(),r.children);else{const c=wi(r.children,pe(l));if(c){const u=c.getChild(Oe(l));s=Cr(s,Ce(),u)}}}else throw Ai("WriteRecord should have .snap or .children")}}return s}function Dv(t,e,n,s,i){if(!s&&!i){const r=js(t.visibleWrites,e);if(r!=null)return r;{const o=cs(t.visibleWrites,e);if(nu(o))return n;if(n==null&&!tu(o,Ce()))return null;{const l=n||be.EMPTY_NODE;return Ci(o,l)}}}else{const r=cs(t.visibleWrites,e);if(!i&&nu(r))return n;if(!i&&n==null&&!tu(r,Ce()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(Xt(u.path,e)||Xt(e,u.path))},l=Lv(t.allWrites,o,e),c=n||be.EMPTY_NODE;return Ci(l,c)}}}function gN(t,e,n){let s=be.EMPTY_NODE;const i=js(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(dt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=cs(t.visibleWrites,e);return n.forEachChild(dt,(o,l)=>{const c=Ci(cs(r,new xe(o)),l);s=s.updateImmediateChild(o,c)}),Zp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=cs(t.visibleWrites,e);return Zp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function mN(t,e,n,s,i){z(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=qe(e,n);if(tu(t.visibleWrites,r))return null;{const o=cs(t.visibleWrites,r);return nu(o)?i.getChild(n):Ci(o,i.getChild(n))}}function _N(t,e,n,s){const i=qe(e,n),r=js(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=cs(t.visibleWrites,i);return Ci(o,s.getNode().getImmediateChild(n))}else return null}function yN(t,e){return js(t.visibleWrites,e)}function vN(t,e,n,s,i,r,o){let l;const c=cs(t.visibleWrites,e),u=js(c,Ce());if(u!=null)l=u;else if(n!=null)l=Ci(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),g=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=g.getNext();for(;_&&h.length<i;)d(_,s)!==0&&h.push(_),_=g.getNext();return h}else return[]}function wN(){return{visibleWrites:en.empty(),allWrites:[],lastWriteId:-1}}function su(t,e,n,s){return Dv(t.writeTree,t.treePath,e,n,s)}function Fv(t,e){return gN(t.writeTree,t.treePath,e)}function eg(t,e,n,s){return mN(t.writeTree,t.treePath,e,n,s)}function Na(t,e){return yN(t.writeTree,qe(t.treePath,e))}function EN(t,e,n,s,i,r){return vN(t.writeTree,t.treePath,e,n,s,i,r)}function ph(t,e,n){return _N(t.writeTree,t.treePath,e,n)}function Uv(t,e){return Hv(qe(t.treePath,e),t.writeTree)}function Hv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,qp(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,JO(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,XO(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,qp(s,e.snapshotNode,i.oldSnap));else throw Ai("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const jv=new bN;class gh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new dh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ph(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ds(this.viewCache_),r=EN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function IN(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function CN(t,e,n,s,i){const r=new TN;let o,l;if(n.type===hn.OVERWRITE){const u=n;u.source.fromUser?o=iu(t,e,u.path,u.snap,s,i,r):(z(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!fe(u.path),o=xa(t,e,u.path,u.snap,s,i,l,r))}else if(n.type===hn.MERGE){const u=n;u.source.fromUser?o=RN(t,e,u.path,u.children,s,i,r):(z(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ru(t,e,u.path,u.children,s,i,l,r))}else if(n.type===hn.ACK_USER_WRITE){const u=n;u.revert?o=PN(t,e,u.path,s,i,r):o=AN(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===hn.LISTEN_COMPLETE)o=kN(t,e,n.path,s,r);else throw Ai("Unknown operation type: "+n.type);const c=r.getChanges();return SN(e,o,c),{viewCache:o,changes:c}}function SN(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=eu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(YO(eu(e)))}}function Bv(t,e,n,s,i,r){const o=e.eventCache;if(Na(s,n)!=null)return e;{let l,c;if(fe(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ds(e),h=u instanceof be?u:be.EMPTY_NODE,d=Fv(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const u=su(s,Ds(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=pe(n);if(u===".priority"){z(hs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=eg(s,n,h,c);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=Oe(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=eg(s,n,o.getNode(),c);g!=null?d=o.getNode().getImmediateChild(u).updateChild(h,g):d=o.getNode().getImmediateChild(u)}else d=ph(s,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,i,r):l=o.getNode()}}return Ir(e,l,o.isFullyInitialized()||fe(n),t.filter.filtersNodes())}}function xa(t,e,n,s,i,r,o,l){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(fe(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),_,null)}else{const _=pe(n);if(!c.isCompleteForPath(n)&&hs(n)>1)return e;const w=Oe(n),O=c.getNode().getImmediateChild(_).updateChild(w,s);_===".priority"?u=h.updatePriority(c.getNode(),O):u=h.updateChild(c.getNode(),_,O,w,jv,null)}const d=Nv(e,u,c.isFullyInitialized()||fe(n),h.filtersNodes()),g=new gh(i,d,r);return Bv(t,d,n,i,g,l)}function iu(t,e,n,s,i,r,o){const l=e.eventCache;let c,u;const h=new gh(i,e,r);if(fe(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Ir(e,u,!0,t.filter.filtersNodes());else{const d=pe(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=Ir(e,u,l.isFullyInitialized(),l.isFiltered());else{const g=Oe(n),_=l.getNode().getImmediateChild(d);let w;if(fe(g))w=s;else{const C=h.getCompleteChild(d);C!=null?_v(g)===".priority"&&C.getChild(vv(g)).isEmpty()?w=C:w=C.updateChild(g,s):w=be.EMPTY_NODE}if(_.equals(w))c=e;else{const C=t.filter.updateChild(l.getNode(),d,w,g,h,o);c=Ir(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function tg(t,e){return t.eventCache.isCompleteForChild(e)}function RN(t,e,n,s,i,r,o){let l=e;return s.foreach((c,u)=>{const h=qe(n,c);tg(e,pe(h))&&(l=iu(t,l,h,u,i,r,o))}),s.foreach((c,u)=>{const h=qe(n,c);tg(e,pe(h))||(l=iu(t,l,h,u,i,r,o))}),l}function ng(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ru(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;fe(n)?u=s:u=new Pe(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,g)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),w=ng(t,_,g);c=xa(t,c,new xe(d),w,i,r,o,l)}}),u.children.inorderTraversal((d,g)=>{const _=!e.serverCache.isCompleteForChild(d)&&g.value===null;if(!h.hasChild(d)&&!_){const w=e.serverCache.getNode().getImmediateChild(d),C=ng(t,w,g);c=xa(t,c,new xe(d),C,i,r,o,l)}}),c}function AN(t,e,n,s,i,r,o){if(Na(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(fe(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return xa(t,e,n,c.getNode().getChild(n),i,r,l,o);if(fe(n)){let u=new Pe(null);return c.getNode().forEachChild(mi,(h,d)=>{u=u.set(new xe(h),d)}),ru(t,e,n,u,i,r,l,o)}else return e}else{let u=new Pe(null);return s.foreach((h,d)=>{const g=qe(n,h);c.isCompleteForPath(g)&&(u=u.set(h,c.getNode().getChild(g)))}),ru(t,e,n,u,i,r,l,o)}}function kN(t,e,n,s,i){const r=e.serverCache,o=Nv(e,r.getNode(),r.isFullyInitialized()||fe(n),r.isFiltered());return Bv(t,o,n,s,jv,i)}function PN(t,e,n,s,i,r){let o;if(Na(s,n)!=null)return e;{const l=new gh(s,e,i),c=e.eventCache.getNode();let u;if(fe(n)||pe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=su(s,Ds(e));else{const d=e.serverCache.getNode();z(d instanceof be,"serverChildren would be complete if leaf node"),h=Fv(s,d)}h=h,u=t.filter.updateFullNode(c,h,r)}else{const h=pe(n);let d=ph(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,Oe(n),l,r):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,be.EMPTY_NODE,Oe(n),l,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=su(s,Ds(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Na(s,Ce())!=null,Ir(e,u,o,t.filter.filtersNodes())}}function ON(t,e){const n=Ds(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!fe(e)&&!n.getImmediateChild(pe(e)).isEmpty())?n.getChild(e):null}function sg(t,e,n,s){e.type===hn.MERGE&&e.source.queryId!==null&&(z(Ds(t.viewCache_),"We should always have a full cache before handling merges"),z(eu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=CN(t.processor_,i,e,n,s);return IN(t.processor_,r.viewCache),z(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,NN(t,r.changes,r.viewCache.eventCache.getNode())}function NN(t,e,n,s){const i=t.eventRegistrations_;return rN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;function xN(t){z(!ig,"__referenceConstructor has already been defined"),ig=t}function mh(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return z(r!=null,"SyncTree gave us an op for an invalid query."),sg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(sg(o,e,n,s));return r}}function _h(t,e){let n=null;for(const s of t.views.values())n=n||ON(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rg;function MN(t){z(!rg,"__referenceConstructor has already been defined"),rg=t}class og{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=wN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function LN(t,e,n,s,i){return cN(t.pendingWriteTree_,e,n,s,i),i?nl(t,new Ls(Av(),e,n)):[]}function si(t,e,n=!1){const s=uN(t.pendingWriteTree_,e);if(hN(t.pendingWriteTree_,e)){let r=new Pe(null);return s.snap!=null?r=r.set(Ce(),!0):Bt(s.children,o=>{r=r.set(new xe(o),!0)}),nl(t,new Oa(s.path,r,n))}else return[]}function tl(t,e,n){return nl(t,new Ls(kv(),e,n))}function DN(t,e,n){const s=Pe.fromObject(n);return nl(t,new jr(kv(),e,s))}function FN(t,e,n,s){const i=Gv(t,s);if(i!=null){const r=Kv(i),o=r.path,l=r.queryId,c=Ut(o,e),u=new Ls(Pv(l),c,n);return qv(t,o,u)}else return[]}function UN(t,e,n,s){const i=Gv(t,s);if(i){const r=Kv(i),o=r.path,l=r.queryId,c=Ut(o,e),u=Pe.fromObject(n),h=new jr(Pv(l),c,u);return qv(t,o,h)}else return[]}function $v(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Ut(o,e),u=_h(l,c);if(u)return u});return Dv(i,e,r,n,!0)}function nl(t,e){return Vv(e,t.syncPointTree_,null,Mv(t.pendingWriteTree_,Ce()))}function Vv(t,e,n,s){if(fe(t.path))return Wv(t,e,n,s);{const i=e.get(Ce());n==null&&i!=null&&(n=_h(i,Ce()));let r=[];const o=pe(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,h=Uv(s,o);r=r.concat(Vv(l,c,u,h))}return i&&(r=r.concat(mh(i,t,s,n))),r}}function Wv(t,e,n,s){const i=e.get(Ce());n==null&&i!=null&&(n=_h(i,Ce()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=Uv(s,o),h=t.operationForChild(o);h&&(r=r.concat(Wv(h,l,c,u)))}),i&&(r=r.concat(mh(i,t,s,n))),r}function Gv(t,e){return t.tagToQueryMap.get(e)}function Kv(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function qv(t,e,n){const s=t.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const i=Mv(t.pendingWriteTree_,e);return mh(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yh(n)}node(){return this.node_}}class vh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=qe(this.path_,e);return new vh(this.syncTree_,n)}node(){return $v(this.syncTree_,this.path_)}}const HN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ag=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return BN(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},BN=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},$N=function(t,e,n,s){return wh(e,new vh(n,t),s)},VN=function(t,e,n){return wh(t,new yh(e),n)};function wh(t,e,n){const s=t.getPriority().val(),i=ag(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ag(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ge(l,ft(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ge(i))),o.forEachChild(dt,(l,c)=>{const u=wh(c,e.getImmediateChild(l),n);u!==c&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Th(t,e){let n=e instanceof xe?e:new xe(e),s=t,i=pe(n);for(;i!==null;){const r=wi(s.node.children,i)||{children:{},childCount:0};s=new Eh(i,s,r),n=Oe(n),i=pe(n)}return s}function Mi(t){return t.node.value}function zv(t,e){t.node.value=e,ou(t)}function Yv(t){return t.node.childCount>0}function WN(t){return Mi(t)===void 0&&!Yv(t)}function sl(t,e){Bt(t.node.children,(n,s)=>{e(new Eh(n,t,s))})}function Xv(t,e,n,s){n&&e(t),sl(t,i=>{Xv(i,e,!0)})}function GN(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ro(t){return new xe(t.parent===null?t.name:ro(t.parent)+"/"+t.name)}function ou(t){t.parent!==null&&KN(t.parent,t.name,t)}function KN(t,e,n){const s=WN(n),i=Un(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ou(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ou(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=/[\[\].#$\/\u0000-\u001F\u007F]/,zN=/[\[\].#$\u0000-\u001F\u007F]/,sc=10*1024*1024,Jv=function(t){return typeof t=="string"&&t.length!==0&&!qN.test(t)},YN=function(t){return typeof t=="string"&&t.length!==0&&!zN.test(t)},XN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),YN(t)},Qv=function(t,e,n){const s=n instanceof xe?new kO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Is(s));if(typeof e=="function")throw new Error(t+"contains a function "+Is(s)+" with contents = "+e.toString());if(Jy(e))throw new Error(t+"contains "+e.toString()+" "+Is(s));if(typeof e=="string"&&e.length>sc/3&&za(e)>sc)throw new Error(t+"contains a string greater than "+sc+" utf8 bytes "+Is(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Bt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Jv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Is(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PO(s,o),Qv(t,l,s),OO(s)}),i&&r)throw new Error(t+' contains ".value" child '+Is(s)+" in addition to actual children.")}},JN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!XN(n))throw new Error(EI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ZN(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!wv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Bs(t,e,n){ZN(t,n),e1(t,s=>Xt(s,e)||Xt(e,s))}function e1(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(t1(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function t1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Tr&&ht("event: "+n.toString()),so(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="repo_interrupt",s1=25;class i1{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pa(),this.transactionQueueTree_=new Eh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function r1(t,e,n){if(t.stats_=lh(t.repoInfo_),t.forceRestClient_||ZP())t.server_=new ka(t.repoInfo_,(s,i,r,o)=>{lg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Pn(t.repoInfo_,e,(s,i,r,o)=>{lg(t,s,i,r,o)},s=>{cg(t,s)},s=>{a1(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=rO(t.repoInfo_,()=>new iN(t.stats_,t.server_)),t.infoData_=new ZO,t.infoSyncTree_=new og({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=tl(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),bh(t,"connected",!1),t.serverSyncTree_=new og({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const u=o(l,c);Bs(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function o1(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zv(t){return HN({timestamp:o1(t)})}function lg(t,e,n,s,i){t.dataUpdateCount++;const r=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=fa(n,u=>ft(u));o=UN(t.serverSyncTree_,r,c,i)}else{const c=ft(n);o=FN(t.serverSyncTree_,r,c,i)}else if(s){const c=fa(n,u=>ft(u));o=DN(t.serverSyncTree_,r,c)}else{const c=ft(n);o=tl(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Ch(t,r)),Bs(t.eventQueue_,l,o)}function cg(t,e){bh(t,"connected",e),e===!1&&c1(t)}function a1(t,e){Bt(e,(n,s)=>{bh(t,n,s)})}function bh(t,e,n){const s=new xe("/.info/"+e),i=ft(n);t.infoData_.updateSnapshot(s,i);const r=tl(t.infoSyncTree_,s,i);Bs(t.eventQueue_,s,r)}function l1(t){return t.nextWriteId_++}function c1(t){ew(t,"onDisconnectEvents");const e=Zv(t),n=Pa();Zc(t.onDisconnect_,Ce(),(i,r)=>{const o=$N(i,r,t.serverSyncTree_,e);Rv(n,i,o)});let s=[];Zc(n,Ce(),(i,r)=>{s=s.concat(tl(t.serverSyncTree_,i,r));const o=d1(t,i);Ch(t,o)}),t.onDisconnect_=Pa(),Bs(t.eventQueue_,Ce(),s)}function u1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(n1)}function ew(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ht(n,...e)}function tw(t,e,n){return $v(t.serverSyncTree_,e,n)||be.EMPTY_NODE}function Ih(t,e=t.transactionQueueTree_){if(e||il(t,e),Mi(e)){const n=sw(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&h1(t,ro(e),n)}else Yv(e)&&sl(e,n=>{Ih(t,n)})}function h1(t,e,n){const s=n.map(u=>u.currentWriteId),i=tw(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];z(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=Ut(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,u=>{ew(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let g=0;g<n.length;g++)n[g].status=2,h=h.concat(si(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&d.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();il(t,Th(t.transactionQueueTree_,e)),Ih(t,t.transactionQueueTree_),Bs(t.eventQueue_,e,h);for(let g=0;g<d.length;g++)so(d[g])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Pt("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ch(t,e)}},o)}function Ch(t,e){const n=nw(t,e),s=ro(n),i=sw(t,n);return f1(t,i,s),s}function f1(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Ut(n,c.path);let h=!1,d;if(z(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,i=i.concat(si(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=s1)h=!0,d="maxretry",i=i.concat(si(t.serverSyncTree_,c.currentWriteId,!0));else{const g=tw(t,c.path,o);c.currentInputSnapshot=g;const _=e[l].update(g.val());if(_!==void 0){Qv("transaction failed: Data returned ",_,c.path);let w=ft(_);typeof _=="object"&&_!=null&&Un(_,".priority")||(w=w.updatePriority(g.getPriority()));const O=c.currentWriteId,x=Zv(t),N=VN(w,g,x);c.currentOutputSnapshotRaw=w,c.currentOutputSnapshotResolved=N,c.currentWriteId=l1(t),o.splice(o.indexOf(O),1),i=i.concat(LN(t.serverSyncTree_,c.path,N,c.currentWriteId,c.applyLocally)),i=i.concat(si(t.serverSyncTree_,O,!0))}else h=!0,d="nodata",i=i.concat(si(t.serverSyncTree_,c.currentWriteId,!0))}Bs(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}il(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)so(s[l]);Ih(t,t.transactionQueueTree_)}function nw(t,e){let n,s=t.transactionQueueTree_;for(n=pe(e);n!==null&&Mi(s)===void 0;)s=Th(s,n),e=Oe(e),n=pe(e);return s}function sw(t,e){const n=[];return iw(t,e,n),n.sort((s,i)=>s.order-i.order),n}function iw(t,e,n){const s=Mi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);sl(e,i=>{iw(t,i,n)})}function il(t,e){const n=Mi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,zv(e,n.length>0?n:void 0)}sl(e,s=>{il(t,s)})}function d1(t,e){const n=ro(nw(t,e)),s=Th(t.transactionQueueTree_,e);return GN(s,i=>{ic(t,i)}),ic(t,s),Xv(s,i=>{ic(t,i)}),n}function ic(t,e){const n=Mi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(si(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?zv(e,void 0):n.length=r+1,Bs(t.eventQueue_,ro(e),i);for(let o=0;o<s.length;o++)so(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function g1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const ug=function(t,e){const n=m1(t),s=n.namespace;n.domain==="firebase.com"&&xs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||GP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nO(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new xe(n.pathString)}},m1=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=p1(t.substring(h,d)));const g=g1(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return fe(this._path)?null:_v(this._path)}get ref(){return new Li(this._repo,this._path)}get _queryIdentifier(){const e=Yp(this._queryParams),n=oh(e);return n==="{}"?"default":n}get _queryObject(){return Yp(this._queryParams)}isEqual(e){if(e=Oi(e),!(e instanceof Sh))return!1;const n=this._repo===e._repo,s=wv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+AO(this._path)}}class Li extends Sh{constructor(e,n){super(e,n,new fh,!1)}get parent(){const e=vv(this._path);return e===null?null:new Li(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}xN(Li);MN(Li);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="FIREBASE_DATABASE_EMULATOR_HOST",au={};let y1=!1;function v1(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||xs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ug(r,i),l=o.repoInfo,c;typeof process<"u"&&Pp&&(c=Pp[_1]),c?(r=`http://${c}?ns=${l.namespace}`,o=ug(r,i),l=o.repoInfo):o.repoInfo.secure;const u=new tO(t.name,t.options,e);JN("Invalid Firebase Database URL",o),fe(o.path)||xs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=E1(l,t,u,new eO(t,n));return new T1(h,t)}function w1(t,e){const n=au[e];(!n||n[t.key]!==t)&&xs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),u1(t),delete n[t.key]}function E1(t,e,n,s){let i=au[e.name];i||(i={},au[e.name]=i);let r=i[t.toURLString()];return r&&xs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new i1(t,y1,n,s),i[t.toURLString()]=r,r}class T1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(r1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Li(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(w1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xs("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t){HP(ps),gn(new nn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return v1(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),kt(Op,Np,t),kt(Op,Np,"esm2017")}Pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};b1();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="firebasestorage.googleapis.com",I1="storageBucket",C1=2*60*1e3,S1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends _n{constructor(e,n,s=0){super(rc(e),`Firebase Storage: ${n} (${rc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return rc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mn||(mn={}));function rc(t){return"storage/"+t}function R1(){const t="An unknown error occurred, please check the error payload for server response.";return new yn(mn.UNKNOWN,t)}function A1(){return new yn(mn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function k1(){return new yn(mn.CANCELED,"User canceled the upload/download.")}function P1(t){return new yn(mn.INVALID_URL,"Invalid URL '"+t+"'.")}function O1(t){return new yn(mn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function hg(t){return new yn(mn.INVALID_ARGUMENT,t)}function ow(){return new yn(mn.APP_DELETED,"The Firebase app was deleted.")}function N1(t){return new yn(mn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(s.path==="")return s;throw O1(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(A){A.path_=decodeURIComponent(A.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${h}/b/${i}/o${g}`,"i"),w={bucket:1,path:3},C=n===rw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",x=new RegExp(`^https?://${C}/${i}/${O}`,"i"),T=[{regex:l,indices:c,postModify:r},{regex:_,indices:w,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let A=0;A<T.length;A++){const M=T[A],D=M.regex.exec(e);if(D){const E=D[M.indices.bucket];let y=D[M.indices.path];y||(y=""),s=new Jt(E,y),M.postModify(s);break}}if(s==null)throw P1(e);return s}}class x1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t,e,n){let s=1,i=null,r=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(...O){u||(u=!0,e.apply(null,O))}function d(O){i=setTimeout(()=>{i=null,t(_,c())},O)}function g(){r&&clearTimeout(r)}function _(O,...x){if(u){g();return}if(O){g(),h.call(null,O,...x);return}if(c()||o){g(),h.call(null,O,...x);return}s<64&&(s*=2);let T;l===1?(l=2,T=0):T=(s+Math.random())*1e3,d(T)}let w=!1;function C(O){w||(w=!0,g(),!u&&(i!==null?(O||(l=2),clearTimeout(i),d(0)):O||(l=1)))}return d(0),r=setTimeout(()=>{o=!0,C(!0)},n),C}function L1(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){return t!==void 0}function fg(t,e,n,s){if(s<e)throw hg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw hg(`Invalid value for '${t}'. Expected ${n} or less.`)}function F1(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ma;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ma||(Ma={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,s,i,r,o,l,c,u,h,d,g=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,w)=>{this.resolve_=_,this.reject_=w,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Do(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Ma.NO_ERROR,c=r.getStatus();if(!l||U1(c,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===Ma.ABORT;s(!1,new Do(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Do(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());D1(c)?r(c):r()}catch(c){o(c)}else if(l!==null){const c=R1();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?ow():k1();o(c)}else{const c=A1();o(c)}};this.canceled_?n(!1,new Do(!1,null,!0)):this.backoffId_=M1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&L1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Do{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function j1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function B1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function V1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function W1(t,e,n,s,i,r,o=!0){const l=F1(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return $1(u,e),j1(u,n),B1(u,r),V1(u,s),new H1(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function K1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new La(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return K1(this._location.path)}get storage(){return this._service}get parent(){const e=G1(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new La(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw N1(e)}}function dg(t,e){const n=e==null?void 0:e[I1];return n==null?null:Jt.makeFromBucketSpec(n,t)}class q1{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=rw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=C1,this._maxUploadRetryTime=S1,this._requests=new Set,i!=null?this._bucket=Jt.makeFromBucketSpec(i,this._host):this._bucket=dg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=dg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new La(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new x1(ow());{const o=W1(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const pg="@firebase/storage",gg="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="storage";function Y1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new q1(n,s,i,e,ps)}function X1(){gn(new nn(z1,Y1,"PUBLIC").setMultipleInstances(!0)),kt(pg,gg,""),kt(pg,gg,"esm2017")}X1();const aw=Symbol("VueFireAuth");function J1({dependencies:t,initialUser:e}){return(n,s)=>{const[i,r]=Q1(n,s,e,t);UP(i,r)}}function Q1(t,e,n,s,i=qA(t,s)){const r=LP(t,e).run(()=>Ht(n));return DP.set(t,r),e.provide(aw,i),[r,i]}function Z1(t,{firebaseApp:e,modules:n=[]}){t.provide(qy,e);for(const s of n)s(e,t)}const ex=pt(t=>{const e=t.$firebaseApp;return J1({initialUser:t.payload.vuefireUser,dependencies:{errorMap:gy,persistence:[gk,nk],popupRedirectResolver:iP}})(e,t.vueApp),{provide:{firebaseAuth:t.vueApp.runWithContext(()=>Ye(aw))}}}),tx=pt(t=>{const e=t.$firebaseApp;t.vueApp.use(Z1,{firebaseApp:e})}),lw=/^[a-z0-9]+(-[a-z0-9]+)*$/,oo=(t,e,n,s="")=>{const i=t.split(":");if(t.slice(0,1)==="@"){if(i.length<2||i.length>3)return null;s=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const l=i.pop(),c=i.pop(),u={provider:i.length>0?i[0]:s,prefix:c,name:l};return e&&!qo(u)?null:u}const r=i[0],o=r.split("-");if(o.length>1){const l={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!qo(l)?null:l}if(n&&s===""){const l={provider:s,prefix:"",name:r};return e&&!qo(l,n)?null:l}return null},qo=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,cw=Object.freeze({left:0,top:0,width:16,height:16}),Da=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Di=Object.freeze({...cw,...Da}),lu=Object.freeze({...Di,body:"",hidden:!1});function nx(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function mg(t,e){const n=nx(t,e);for(const s in lu)s in Da?s in t&&!(s in n)&&(n[s]=Da[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function sx(t,e){const n=t.icons,s=t.aliases||Object.create(null),i=Object.create(null);function r(o){if(n[o])return i[o]=[];if(!(o in i)){i[o]=null;const l=s[o]&&s[o].parent,c=l&&r(l);c&&(i[o]=[l].concat(c))}return i[o]}return Object.keys(n).concat(Object.keys(s)).forEach(r),i}function ix(t,e,n){const s=t.icons,i=t.aliases||Object.create(null);let r={};function o(l){r=mg(s[l]||i[l],r)}return o(e),n.forEach(o),mg(t,r)}function uw(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(i=>{e(i,null),n.push(i)});const s=sx(t);for(const i in s){const r=s[i];r&&(e(i,ix(t,i,r)),n.push(i))}return n}const rx={provider:"",aliases:{},not_found:{},...cw};function oc(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function hw(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!oc(t,rx))return null;const n=e.icons;for(const i in n){const r=n[i];if(!i||typeof r.body!="string"||!oc(r,lu))return null}const s=e.aliases||Object.create(null);for(const i in s){const r=s[i],o=r.parent;if(!i||typeof o!="string"||!n[o]&&!s[o]||!oc(r,lu))return null}return e}const _g=Object.create(null);function ox(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Fs(t,e){const n=_g[t]||(_g[t]=Object.create(null));return n[e]||(n[e]=ox(t,e))}function fw(t,e){return hw(e)?uw(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function ax(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Br=!1;function dw(t){return typeof t=="boolean"&&(Br=t),Br}function Rh(t){const e=typeof t=="string"?oo(t,!0,Br):t;if(e){const n=Fs(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function lx(t,e){const n=oo(t,!0,Br);if(!n)return!1;const s=Fs(n.provider,n.prefix);return e?ax(s,n.name,e):(s.missing.add(n.name),!0)}function cx(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Br&&!e&&!t.prefix){let i=!1;return hw(t)&&(t.prefix="",uw(t,(r,o)=>{lx(r,o)&&(i=!0)})),i}const n=t.prefix;if(!qo({prefix:n,name:"a"}))return!1;const s=Fs(e,n);return!!fw(s,t)}function SM(t){const e=Rh(t);return e&&{...Di,...e}}const pw=Object.freeze({width:null,height:null}),gw=Object.freeze({...pw,...Da}),ux=/(-?[0-9.]*[0-9]+[0-9.]*)/g,hx=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function yg(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(ux);if(s===null||!s.length)return t;const i=[];let r=s.shift(),o=hx.test(r);for(;;){if(o){const l=parseFloat(r);isNaN(l)?i.push(r):i.push(Math.ceil(l*e*n)/n)}else i.push(r);if(r=s.shift(),r===void 0)return i.join("");o=!o}}function fx(t,e="defs"){let n="";const s=t.indexOf("<"+e);for(;s>=0;){const i=t.indexOf(">",s),r=t.indexOf("</"+e);if(i===-1||r===-1)break;const o=t.indexOf(">",r);if(o===-1)break;n+=t.slice(i+1,r).trim(),t=t.slice(0,s).trim()+t.slice(o+1)}return{defs:n,content:t}}function dx(t,e){return t?"<defs>"+t+"</defs>"+e:e}function px(t,e,n){const s=fx(t);return dx(s.defs,e+s.content+n)}const gx=t=>t==="unset"||t==="undefined"||t==="none";function mx(t,e){const n={...Di,...t},s={...gw,...e},i={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,s].forEach(C=>{const O=[],x=C.hFlip,N=C.vFlip;let T=C.rotate;x?N?T+=2:(O.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),O.push("scale(-1 1)"),i.top=i.left=0):N&&(O.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),O.push("scale(1 -1)"),i.top=i.left=0);let A;switch(T<0&&(T-=Math.floor(T/4)*4),T=T%4,T){case 1:A=i.height/2+i.top,O.unshift("rotate(90 "+A.toString()+" "+A.toString()+")");break;case 2:O.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:A=i.width/2+i.left,O.unshift("rotate(-90 "+A.toString()+" "+A.toString()+")");break}T%2===1&&(i.left!==i.top&&(A=i.left,i.left=i.top,i.top=A),i.width!==i.height&&(A=i.width,i.width=i.height,i.height=A)),O.length&&(r=px(r,'<g transform="'+O.join(" ")+'">',"</g>"))});const o=s.width,l=s.height,c=i.width,u=i.height;let h,d;o===null?(d=l===null?"1em":l==="auto"?u:l,h=yg(d,c/u)):(h=o==="auto"?c:o,d=l===null?yg(h,u/c):l==="auto"?u:l);const g={},_=(C,O)=>{gx(O)||(g[C]=O.toString())};_("width",h),_("height",d);const w=[i.left,i.top,c,u];return g.viewBox=w.join(" "),{attributes:g,viewBox:w,body:r}}const _x=/\sid="(\S+)"/g,yx="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let vx=0;function wx(t,e=yx){const n=[];let s;for(;s=_x.exec(t);)n.push(s[1]);if(!n.length)return t;const i="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const o=typeof e=="function"?e(r):e+(vx++).toString(),l=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+o+i+"$3")}),t=t.replace(new RegExp(i,"g"),""),t}const cu=Object.create(null);function mw(t,e){cu[t]=e}function uu(t){return cu[t]||cu[""]}function Ah(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const rl=Object.create(null),sr=["https://api.simplesvg.com","https://api.unisvg.com"],zo=[];for(;sr.length>0;)sr.length===1||Math.random()>.5?zo.push(sr.shift()):zo.push(sr.pop());rl[""]=Ah({resources:["https://api.iconify.design"].concat(zo)});function _w(t,e){const n=Ah(e);return n===null?!1:(rl[t]=n,!0)}function ol(t){return rl[t]}function Ex(){return Object.keys(rl)}const Tx=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Fa=Tx();function bx(t){Fa=t}function Ix(){return Fa}function Cx(t,e){const n=ol(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let i=0;n.resources.forEach(o=>{i=Math.max(i,o.length)});const r=e+".json?icons=";s=n.maxURL-i-n.path.length-r.length}return s}function Sx(t){return t===404}const Rx=(t,e,n)=>{const s=[],i=Cx(t,e),r="icons";let o={type:r,provider:t,prefix:e,icons:[]},l=0;return n.forEach((c,u)=>{l+=c.length+1,l>=i&&u>0&&(s.push(o),o={type:r,provider:t,prefix:e,icons:[]},l=c.length),o.icons.push(c)}),s.push(o),s};function Ax(t){if(typeof t=="string"){const e=ol(t);if(e)return e.path}return"/"}const kx=(t,e,n)=>{if(!Fa){n("abort",424);return}let s=Ax(e.provider);switch(e.type){case"icons":{const r=e.prefix,l=e.icons.join(","),c=new URLSearchParams({icons:l});s+=r+".json?"+c.toString();break}case"custom":{const r=e.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let i=503;Fa(t+s).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{n(Sx(o)?"abort":"next",o)});return}return i=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",i)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",i)})},Px={prepare:Rx,send:kx};function Ox(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((i,r)=>i.provider!==r.provider?i.provider.localeCompare(r.provider):i.prefix!==r.prefix?i.prefix.localeCompare(r.prefix):i.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return t.forEach(i=>{if(s.name===i.name&&s.prefix===i.prefix&&s.provider===i.provider)return;s=i;const r=i.provider,o=i.prefix,l=i.name,c=n[r]||(n[r]=Object.create(null)),u=c[o]||(c[o]=Fs(r,o));let h;l in u.icons?h=e.loaded:o===""||u.missing.has(l)?h=e.missing:h=e.pending;const d={provider:r,prefix:o,name:l};h.push(d)}),e}function yw(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(i=>i.id!==e))})}function Nx(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,i=t.prefix;e.forEach(r=>{const o=r.icons,l=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==i)return!0;const u=c.name;if(t.icons[u])o.loaded.push({provider:s,prefix:i,name:u});else if(t.missing.has(u))o.missing.push({provider:s,prefix:i,name:u});else return n=!0,!0;return!1}),o.pending.length!==l&&(n||yw([t],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let xx=0;function Mx(t,e,n){const s=xx++,i=yw.bind(null,n,s);if(!e.pending.length)return i;const r={id:s,icons:e,callback:t,abort:i};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),i}function Lx(t,e=!0,n=!1){const s=[];return t.forEach(i=>{const r=typeof i=="string"?oo(i,e,n):i;r&&s.push(r)}),s}var Dx={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Fx(t,e,n,s){const i=t.resources.length,r=t.random?Math.floor(Math.random()*i):t.index;let o;if(t.random){let D=t.resources.slice(0);for(o=[];D.length>1;){const E=Math.floor(Math.random()*D.length);o.push(D[E]),D=D.slice(0,E).concat(D.slice(E+1))}o=o.concat(D)}else o=t.resources.slice(r).concat(t.resources.slice(0,r));const l=Date.now();let c="pending",u=0,h,d=null,g=[],_=[];typeof s=="function"&&_.push(s);function w(){d&&(clearTimeout(d),d=null)}function C(){c==="pending"&&(c="aborted"),w(),g.forEach(D=>{D.status==="pending"&&(D.status="aborted")}),g=[]}function O(D,E){E&&(_=[]),typeof D=="function"&&_.push(D)}function x(){return{startTime:l,payload:e,status:c,queriesSent:u,queriesPending:g.length,subscribe:O,abort:C}}function N(){c="failed",_.forEach(D=>{D(void 0,h)})}function T(){g.forEach(D=>{D.status==="pending"&&(D.status="aborted")}),g=[]}function A(D,E,y){const v=E!=="success";switch(g=g.filter(b=>b!==D),c){case"pending":break;case"failed":if(v||!t.dataAfterTimeout)return;break;default:return}if(E==="abort"){h=y,N();return}if(v){h=y,g.length||(o.length?M():N());return}if(w(),T(),!t.random){const b=t.resources.indexOf(D.resource);b!==-1&&b!==t.index&&(t.index=b)}c="completed",_.forEach(b=>{b(y)})}function M(){if(c!=="pending")return;w();const D=o.shift();if(D===void 0){if(g.length){d=setTimeout(()=>{w(),c==="pending"&&(T(),N())},t.timeout);return}N();return}const E={status:"pending",resource:D,callback:(y,v)=>{A(E,y,v)}};g.push(E),u++,d=setTimeout(M,t.rotate),n(D,e,E.callback)}return setTimeout(M),x}function vw(t){const e={...Dx,...t};let n=[];function s(){n=n.filter(l=>l().status==="pending")}function i(l,c,u){const h=Fx(e,l,c,(d,g)=>{s(),u&&u(d,g)});return n.push(h),h}function r(l){return n.find(c=>l(c))||null}return{query:i,find:r,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:s}}function vg(){}const ac=Object.create(null);function Ux(t){if(!ac[t]){const e=ol(t);if(!e)return;const n=vw(e),s={config:e,redundancy:n};ac[t]=s}return ac[t]}function ww(t,e,n){let s,i;if(typeof t=="string"){const r=uu(t);if(!r)return n(void 0,424),vg;i=r.send;const o=Ux(t);o&&(s=o.redundancy)}else{const r=Ah(t);if(r){s=vw(r);const o=t.resources?t.resources[0]:"",l=uu(o);l&&(i=l.send)}}return!s||!i?(n(void 0,424),vg):s.query(e,i,n)().abort}function wg(){}function Hx(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Nx(t)}))}function jx(t){const e=[],n=[];return t.forEach(s=>{(s.match(lw)?e:n).push(s)}),{valid:e,invalid:n}}function ir(t,e,n){function s(){const i=t.pendingIcons;e.forEach(r=>{i&&i.delete(r),t.icons[r]||t.missing.add(r)})}if(n&&typeof n=="object")try{if(!fw(t,n).length){s();return}}catch(i){console.error(i)}s(),Hx(t)}function Eg(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function Bx(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,i=t.iconsToLoad;if(delete t.iconsToLoad,!i||!i.length)return;const r=t.loadIcon;if(t.loadIcons&&(i.length>1||!r)){Eg(t.loadIcons(i,s,n),h=>{ir(t,i,h)});return}if(r){i.forEach(h=>{const d=r(h,s,n);Eg(d,g=>{const _=g?{prefix:s,icons:{[h]:g}}:null;ir(t,[h],_)})});return}const{valid:o,invalid:l}=jx(i);if(l.length&&ir(t,l,null),!o.length)return;const c=s.match(lw)?uu(n):null;if(!c){ir(t,o,null);return}c.prepare(n,s,o).forEach(h=>{ww(n,h,d=>{ir(t,h.icons,d)})})}))}const Ew=(t,e)=>{const n=Lx(t,!0,dw()),s=Ox(n);if(!s.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(s.loaded,s.missing,s.pending,wg)}),()=>{c=!1}}const i=Object.create(null),r=[];let o,l;return s.pending.forEach(c=>{const{provider:u,prefix:h}=c;if(h===l&&u===o)return;o=u,l=h,r.push(Fs(u,h));const d=i[u]||(i[u]=Object.create(null));d[h]||(d[h]=[])}),s.pending.forEach(c=>{const{provider:u,prefix:h,name:d}=c,g=Fs(u,h),_=g.pendingIcons||(g.pendingIcons=new Set);_.has(d)||(_.add(d),i[u][h].push(d))}),r.forEach(c=>{const u=i[c.provider][c.prefix];u.length&&Bx(c,u)}),e?Mx(e,s,r):wg},RM=t=>new Promise((e,n)=>{const s=typeof t=="string"?oo(t,!0):t;if(!s){n(t);return}Ew([s||t],i=>{if(i.length&&s){const r=Rh(s);if(r){e({...Di,...r});return}}n(t)})});function $x(t,e,n){Fs("",e).loadIcons=t}function Vx(t,e){const n={...t};for(const s in e){const i=e[s],r=typeof i;s in pw?(i===null||i&&(r==="string"||r==="number"))&&(n[s]=i):r===typeof n[s]&&(n[s]=s==="rotate"?i%4:i)}return n}const Wx=/[\s,]+/;function Gx(t,e){e.split(Wx).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Kx(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(i){for(;i<0;)i+=4;return i%4}if(n===""){const i=parseInt(t);return isNaN(i)?0:s(i)}else if(n!==t){let i=0;switch(n){case"%":i=25;break;case"deg":i=90}if(i){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/i,r%1===0?s(r):0)}}return e}function qx(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function zx(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Yx(t){return"data:image/svg+xml,"+zx(t)}function Xx(t){return'url("'+Yx(t)+'")'}const Tg={...gw,inline:!1},Jx={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Qx={display:"inline-block"},hu={backgroundColor:"currentColor"},Tw={backgroundColor:"transparent"},bg={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ig={webkitMask:hu,mask:hu,background:Tw};for(const t in Ig){const e=Ig[t];for(const n in bg)e[t+n]=bg[n]}const Yo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Yo[t+"-flip"]=e,Yo[t.slice(0,1)+"-flip"]=e,Yo[t+"Flip"]=e});function Cg(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Sg=(t,e)=>{const n=Vx(Tg,e),s={...Jx},i=e.mode||"svg",r={},o=e.style,l=typeof o=="object"&&!(o instanceof Array)?o:{};for(let C in e){const O=e[C];if(O!==void 0)switch(C){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[C]=O===!0||O==="true"||O===1;break;case"flip":typeof O=="string"&&Gx(n,O);break;case"color":r.color=O;break;case"rotate":typeof O=="string"?n[C]=Kx(O):typeof O=="number"&&(n[C]=O);break;case"ariaHidden":case"aria-hidden":O!==!0&&O!=="true"&&delete s["aria-hidden"];break;default:{const x=Yo[C];x?(O===!0||O==="true"||O===1)&&(n[x]=!0):Tg[C]===void 0&&(s[C]=O)}}}const c=mx(t,n),u=c.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),i==="svg"){s.style={...r,...l},Object.assign(s,u);let C=0,O=e.id;return typeof O=="string"&&(O=O.replace(/-/g,"_")),s.innerHTML=wx(c.body,O?()=>O+"ID"+C++:"iconifyVue"),ze("svg",s)}const{body:h,width:d,height:g}=t,_=i==="mask"||(i==="bg"?!1:h.indexOf("currentColor")!==-1),w=qx(h,{...u,width:d+"",height:g+""});return s.style={...r,"--svg":Xx(w),width:Cg(u.width),height:Cg(u.height),...Qx,..._?hu:Tw,...l},ze("span",s)};dw(!0);mw("",Px);if(typeof document<"u"&&typeof window<"u"){const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!cx(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const i=e[n];if(typeof i!="object"||!i||i.resources===void 0)continue;_w(n,i)||console.error(s)}catch{console.error(s)}}}}const Zx={...Di,body:""},AM=on({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let s;if(typeof t!="string"||(s=oo(t,!1,!0))===null)return this.abortLoading(),null;let i=Rh(s);if(!i)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",i!==null&&(this._loadingIcon={name:t,abort:Ew([s],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){i=Object.assign({},i);const o=n(i.body,s.name,s.prefix,s.provider);typeof o=="string"&&(i.body=o)}const r=["iconify"];return s.prefix!==""&&r.push("iconify--"+s.prefix),s.provider!==""&&r.push("iconify--"+s.provider),{data:i,classes:r}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return Sg(Zx,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Sg({...Di,...e.data},n)}}),eM={getAPIConfig:ol,setAPIModule:mw,sendAPIQuery:ww,setFetch:bx,getFetch:Ix,listAPIProviders:Ex},tM={nuxt:{},icon:{provider:"iconify",class:"",aliases:{},iconifyApiEndpoint:"https://api.iconify.design",localApiEndpoint:"/api/_nuxt_icon",fallbackToApi:!0,cssSelectorPrefix:"i-",cssWherePseudo:!0,mode:"css",attrs:{"aria-hidden":!0},collections:["academicons","akar-icons","ant-design","arcticons","basil","bi","bitcoin-icons","bpmn","brandico","bx","bxl","bxs","bytesize","carbon","catppuccin","cbi","charm","ci","cib","cif","cil","circle-flags","circum","clarity","codicon","covid","cryptocurrency","cryptocurrency-color","dashicons","devicon","devicon-plain","ei","el","emojione","emojione-monotone","emojione-v1","entypo","entypo-social","eos-icons","ep","et","eva","f7","fa","fa-brands","fa-regular","fa-solid","fa6-brands","fa6-regular","fa6-solid","fad","fe","feather","file-icons","flag","flagpack","flat-color-icons","flat-ui","flowbite","fluent","fluent-emoji","fluent-emoji-flat","fluent-emoji-high-contrast","fluent-mdl2","fontelico","fontisto","formkit","foundation","fxemoji","gala","game-icons","geo","gg","gis","gravity-ui","gridicons","grommet-icons","guidance","healthicons","heroicons","heroicons-outline","heroicons-solid","hugeicons","humbleicons","ic","icomoon-free","icon-park","icon-park-outline","icon-park-solid","icon-park-twotone","iconamoon","iconoir","icons8","il","ion","iwwa","jam","la","lets-icons","line-md","logos","ls","lucide","lucide-lab","mage","majesticons","maki","map","marketeq","material-symbols","material-symbols-light","mdi","mdi-light","medical-icon","memory","meteocons","mi","mingcute","mono-icons","mynaui","nimbus","nonicons","noto","noto-v1","octicon","oi","ooui","openmoji","oui","pajamas","pepicons","pepicons-pencil","pepicons-pop","pepicons-print","ph","pixelarticons","prime","ps","quill","radix-icons","raphael","ri","rivet-icons","si-glyph","simple-icons","simple-line-icons","skill-icons","solar","streamline","streamline-emojis","subway","svg-spinners","system-uicons","tabler","tdesign","teenyicons","token","token-branded","topcoat","twemoji","typcn","uil","uim","uis","uit","uiw","unjs","vaadin","vs","vscode-icons","websymbol","weui","whh","wi","wpf","zmdi","zondicons"],fetchTimeout:1500}},nM=G0(tM);function sM(){const t=He();return t._appConfig||(t._appConfig=Dn(nM)),t._appConfig}const iM=pt({name:"@nuxt/icon",setup(){var i,r;const t=Ri(),e=sM().icon;eM.setFetch($fetch.native);const n=[];if(e.provider==="server"){const o=((r=(i=t.app)==null?void 0:i.baseURL)==null?void 0:r.replace(/\/$/,""))??"";n.push(o+(e.localApiEndpoint||"/api/_nuxt_icon")),(e.fallbackToApi===!0||e.fallbackToApi==="client-only")&&n.push(e.iconifyApiEndpoint)}else n.push(e.iconifyApiEndpoint);async function s(o,l){try{const c=await $fetch(n[0]+"/"+l+".json",{query:{icons:o.join(",")}});if(!c||c.prefix!==l||!c.icons)throw new Error("Invalid data"+JSON.stringify(c));return c}catch(c){return console.error("Failed to load custom icons",c),null}}_w("",{resources:n});for(const o of e.customCollections||[])o&&$x(s,o)}}),rM=[NS,MS,HS,iA,rA,oA,aA,lA,uA,hA,pA,gA,yA,ex,tx,iM],bw=(t="RouteProvider")=>on({name:t,props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,s=e.route,i={};for(const r in e.route)Object.defineProperty(i,r,{get:()=>n===e.renderKey?e.route[r]:s[r],enumerable:!0});return As(Xr,Sn(i)),()=>ze(e.vnode,{ref:e.vnodeRef})}}),oM=bw(),Rg=new WeakMap,aM=on({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:s}){const i=He(),r=Ht(),o=Ye(Xr,null);let l;s({pageRef:r});const c=Ye(b_,null);let u;const h=i.deferHydration();if(i.isHydrating){const g=i.hooks.hookOnce("app:error",h);Ct().beforeEach(g)}t.pageKey&&ci(()=>t.pageKey,(g,_)=>{g!==_&&i.callHook("page:loading:start")});let d=!1;{const g=Ct().beforeResolve(()=>{d=!1});qr(()=>{g()})}return()=>ze(uy,{name:t.name,route:t.route,...e},{default:g=>{const _=cM(o,g.route,g.Component),w=o&&o.matched.length===g.route.matched.length;if(!g.Component){if(u&&!w)return u;h();return}if(u&&c&&!c.isCurrent(g.route))return u;if(_&&o&&(!c||c!=null&&c.isCurrent(o)))return w?u:null;const C=Vc(g,t.pageKey),O=uM(o,g.route,g.Component);!i.isHydrating&&l===C&&!O&&(i.callHook("page:loading:end"),d=!0),l=C;const x=!!(t.transition??g.route.meta.pageTransition??kc),N=x&&lM([t.transition,g.route.meta.pageTransition,kc,{onAfterLeave:()=>{i.callHook("page:transition:finish",g.Component)}}]),T=t.keepalive??g.route.meta.keepalive??N0;return u=hy(x&&N,qR(T,ze(Nu,{suspensible:!0,onPending:()=>i.callHook("page:start",g.Component),onResolve:()=>{Gr(()=>i.callHook("page:finish",g.Component).then(()=>{if(!d&&!O)return d=!0,i.callHook("page:loading:end")}).finally(h))}},{default:()=>{const A={key:C||void 0,vnode:n.default?hM(n.default,g):g.Component,route:g.route,renderKey:C||void 0,trackRootNodes:x,vnodeRef:r};if(!T)return ze(oM,A);const M=g.Component.type,D=M;let E=Rg.get(D);return E||(E=bw(M.name||M.__name),Rg.set(D,E)),ze(E,A)}}))).default(),u}})}});function lM(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?Yu(n.onAfterLeave):void 0}));return E_(...e)}function cM(t,e,n){if(!t)return!1;const s=e.matched.findIndex(i=>{var r;return((r=i.components)==null?void 0:r.default)===(n==null?void 0:n.type)});return!s||s===-1?!1:e.matched.slice(0,s).some((i,r)=>{var o,l,c;return((o=i.components)==null?void 0:o.default)!==((c=(l=t.matched[r])==null?void 0:l.components)==null?void 0:c.default)})||n&&Vc({route:e,Component:n})!==Vc({route:t,Component:n})}function uM(t,e,n){return t?e.matched.findIndex(i=>{var r;return((r=i.components)==null?void 0:r.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function hM(t,e){const n=t(e);return n.length===1?ze(n[0]):ze(ut,void 0,n)}const fM=on({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>ze(is[t.name],t.layoutProps,e.slots)}}),dM={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},pM=on({name:"NuxtLayout",inheritAttrs:!1,props:dM,setup(t,e){const n=He(),s=Ye(Xr),i=s===Hu()?$R():s,r=Dt(()=>{let c=Be(t.name)??i.meta.layout??"default";return c&&!(c in is)&&t.fallback&&(c=Be(t.fallback)),c}),o=Ht();e.expose({layoutRef:o});const l=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",l);Ct().beforeEach(c)}return()=>{const c=r.value&&r.value in is,u=i.meta.layoutTransition??P0;return hy(c&&u,{default:()=>ze(Nu,{suspensible:!0,onResolve:()=>{Gr(l)}},{default:()=>ze(gM,{layoutProps:Qm(e.attrs,{ref:o}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),gM=on({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&As(b_,{isCurrent:s=>n===(s.meta.layout??"default")}),()=>{var s,i;return!n||typeof n=="string"&&!(n in is)?(i=(s=e.slots).default)==null?void 0:i.call(s):ze(fM,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),mM=on({__name:"app",setup(t){return z_({titleTemplate:e=>e?`${e} | VestBank`:"VestBank"}),(e,n)=>{const s=aM,i=pM;return Gt(),Zn(i,null,{default:Ru(()=>[Fe(s)]),_:1})}}}),_M=on({__name:"error",props:{error:Object},setup(t){const e=()=>C_({redirect:"/"});return(n,s)=>(Gt(),Ym("div",null,[ia("h2",null,Ug(t.error.statusCode),1),ia("button",{onClick:e},"Clear errors")]))}}),yM={key:0},Ag={__name:"nuxt-root",setup(t){const e=()=>null,n=He(),s=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",s);Ct().beforeEach(c)}const i=!1;As(Xr,Hu()),n.hooks.callHookWith(c=>c.map(u=>u()),"vue:setup");const r=Ga(),o=!1;Tm((c,u,h)=>{if(n.hooks.callHook("vue:error",c,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),S_(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>Xn(c)),!1});const l=!1;return(c,u)=>(Gt(),Zn(Nu,{onResolve:Be(s)},{default:Ru(()=>[Be(o)?(Gt(),Ym("div",yM)):Be(r)?(Gt(),Zn(Be(_M),{key:1,error:Be(r)},null,8,["error"])):Be(l)?(Gt(),Zn(Be(e),{key:2,context:Be(l)},null,8,["context"])):Be(i)?(Gt(),Zn(rT(Be(i)),{key:3})):(Gt(),Zn(Be(mM),{key:4}))]),_:1},8,["onResolve"]))}};let kg;{let t;kg=async function(){var o,l;if(t)return t;const n=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((l=document.getElementById("__NUXT_DATA__"))==null?void 0:l.dataset.ssr)==="true"),s=n?Cb(Ag):Ib(Ag),i=F0({vueApp:s});async function r(c){var u;await i.callHook("app:error",c),(u=i.payload).error||(u.error=Ka(c))}s.config.errorHandler=r,i.hook("app:suspense:resolve",()=>{s.config.errorHandler===r&&(s.config.errorHandler=void 0)}),!n&&od.id&&i.hook("app:suspense:resolve",()=>{var c;(c=document.getElementById(od.id))==null||c.remove()});try{await j0(i,rM)}catch(c){r(c)}try{await i.hooks.callHook("app:created",s),await i.hooks.callHook("app:beforeMount",s),s.mount(M0),await i.hooks.callHook("app:mounted",s),await Gr()}catch(c){r(c)}return s},t=kg().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{qr as A,CM as B,wM as C,o_ as D,X0 as E,ut as F,IM as G,Fu as H,AM as I,Ri as J,Hs as K,Sc as L,Du as M,bM as N,ia as a,Fe as b,Ym as c,Jm as d,on as e,TM as f,Dn as g,Dt as h,SM as i,He as j,ci as k,RM as l,ze as m,lx as n,Gt as o,d_ as p,Be as q,EM as r,Ct as s,Ug as t,sM as u,Ht as v,Ru as w,ku as x,Xu as y,lp as z};
