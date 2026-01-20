(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const E of c)if(E.type==="childList")for(const d of E.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const E={};return c.integrity&&(E.integrity=c.integrity),c.referrerPolicy&&(E.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?E.credentials="include":c.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function s(c){if(c.ep)return;c.ep=!0;const E=r(c);fetch(c.href,E)}})();function Dm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Sc={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function yC(){if(Wf)return zo;Wf=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(s,c,E){var d=null;if(E!==void 0&&(d=""+E),c.key!==void 0&&(d=""+c.key),"key"in c){E={};for(var A in c)A!=="key"&&(E[A]=c[A])}else E=c;return c=E.ref,{$$typeof:n,type:s,key:d,ref:c!==void 0?c:null,props:E}}return zo.Fragment=i,zo.jsx=r,zo.jsxs=r,zo}var zf;function LC(){return zf||(zf=1,Sc.exports=yC()),Sc.exports}var C=LC(),Ac={exports:{}},Be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf;function MC(){if(jf)return Be;jf=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),d=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),O=Symbol.iterator;function L(p){return p===null||typeof p!="object"?null:(p=O&&p[O]||p["@@iterator"],typeof p=="function"?p:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,b={};function y(p,I,H){this.props=p,this.context=I,this.refs=b,this.updater=H||B}y.prototype.isReactComponent={},y.prototype.setState=function(p,I){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,I,"setState")},y.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function Y(){}Y.prototype=y.prototype;function W(p,I,H){this.props=p,this.context=I,this.refs=b,this.updater=H||B}var ee=W.prototype=new Y;ee.constructor=W,k(ee,y.prototype),ee.isPureReactComponent=!0;var te=Array.isArray;function ue(){}var ie={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function fe(p,I,H){var z=H.ref;return{$$typeof:n,type:p,key:I,ref:z!==void 0?z:null,props:H}}function Le(p,I){return fe(p.type,I,p.props)}function me(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function Te(p){var I={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(H){return I[H]})}var de=/\/+/g;function Oe(p,I){return typeof p=="object"&&p!==null&&p.key!=null?Te(""+p.key):I.toString(36)}function Se(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(ue,ue):(p.status="pending",p.then(function(I){p.status==="pending"&&(p.status="fulfilled",p.value=I)},function(I){p.status==="pending"&&(p.status="rejected",p.reason=I)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function D(p,I,H,z,P){var x=typeof p;(x==="undefined"||x==="boolean")&&(p=null);var w=!1;if(p===null)w=!0;else switch(x){case"bigint":case"string":case"number":w=!0;break;case"object":switch(p.$$typeof){case n:case i:w=!0;break;case T:return w=p._init,D(w(p._payload),I,H,z,P)}}if(w)return P=P(p),w=z===""?"."+Oe(p,0):z,te(P)?(H="",w!=null&&(H=w.replace(de,"$&/")+"/"),D(P,I,H,"",function(oe){return oe})):P!=null&&(me(P)&&(P=Le(P,H+(P.key==null||p&&p.key===P.key?"":(""+P.key).replace(de,"$&/")+"/")+w)),I.push(P)),1;w=0;var V=z===""?".":z+":";if(te(p))for(var J=0;J<p.length;J++)z=p[J],x=V+Oe(z,J),w+=D(z,I,H,x,P);else if(J=L(p),typeof J=="function")for(p=J.call(p),J=0;!(z=p.next()).done;)z=z.value,x=V+Oe(z,J++),w+=D(z,I,H,x,P);else if(x==="object"){if(typeof p.then=="function")return D(Se(p),I,H,z,P);throw I=String(p),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return w}function q(p,I,H){if(p==null)return p;var z=[],P=0;return D(p,z,"","",function(x){return I.call(H,x,P++)}),z}function se(p){if(p._status===-1){var I=p._result;I=I(),I.then(function(H){(p._status===0||p._status===-1)&&(p._status=1,p._result=H)},function(H){(p._status===0||p._status===-1)&&(p._status=2,p._result=H)}),p._status===-1&&(p._status=0,p._result=I)}if(p._status===1)return p._result.default;throw p._result}var Ae=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},le={map:q,forEach:function(p,I,H){q(p,function(){I.apply(this,arguments)},H)},count:function(p){var I=0;return q(p,function(){I++}),I},toArray:function(p){return q(p,function(I){return I})||[]},only:function(p){if(!me(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return Be.Activity=m,Be.Children=le,Be.Component=y,Be.Fragment=r,Be.Profiler=c,Be.PureComponent=W,Be.StrictMode=s,Be.Suspense=h,Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,Be.__COMPILER_RUNTIME={__proto__:null,c:function(p){return ie.H.useMemoCache(p)}},Be.cache=function(p){return function(){return p.apply(null,arguments)}},Be.cacheSignal=function(){return null},Be.cloneElement=function(p,I,H){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var z=k({},p.props),P=p.key;if(I!=null)for(x in I.key!==void 0&&(P=""+I.key),I)!ne.call(I,x)||x==="key"||x==="__self"||x==="__source"||x==="ref"&&I.ref===void 0||(z[x]=I[x]);var x=arguments.length-2;if(x===1)z.children=H;else if(1<x){for(var w=Array(x),V=0;V<x;V++)w[V]=arguments[V+2];z.children=w}return fe(p.type,P,z)},Be.createContext=function(p){return p={$$typeof:d,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:E,_context:p},p},Be.createElement=function(p,I,H){var z,P={},x=null;if(I!=null)for(z in I.key!==void 0&&(x=""+I.key),I)ne.call(I,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(P[z]=I[z]);var w=arguments.length-2;if(w===1)P.children=H;else if(1<w){for(var V=Array(w),J=0;J<w;J++)V[J]=arguments[J+2];P.children=V}if(p&&p.defaultProps)for(z in w=p.defaultProps,w)P[z]===void 0&&(P[z]=w[z]);return fe(p,x,P)},Be.createRef=function(){return{current:null}},Be.forwardRef=function(p){return{$$typeof:A,render:p}},Be.isValidElement=me,Be.lazy=function(p){return{$$typeof:T,_payload:{_status:-1,_result:p},_init:se}},Be.memo=function(p,I){return{$$typeof:f,type:p,compare:I===void 0?null:I}},Be.startTransition=function(p){var I=ie.T,H={};ie.T=H;try{var z=p(),P=ie.S;P!==null&&P(H,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(ue,Ae)}catch(x){Ae(x)}finally{I!==null&&H.types!==null&&(I.types=H.types),ie.T=I}},Be.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},Be.use=function(p){return ie.H.use(p)},Be.useActionState=function(p,I,H){return ie.H.useActionState(p,I,H)},Be.useCallback=function(p,I){return ie.H.useCallback(p,I)},Be.useContext=function(p){return ie.H.useContext(p)},Be.useDebugValue=function(){},Be.useDeferredValue=function(p,I){return ie.H.useDeferredValue(p,I)},Be.useEffect=function(p,I){return ie.H.useEffect(p,I)},Be.useEffectEvent=function(p){return ie.H.useEffectEvent(p)},Be.useId=function(){return ie.H.useId()},Be.useImperativeHandle=function(p,I,H){return ie.H.useImperativeHandle(p,I,H)},Be.useInsertionEffect=function(p,I){return ie.H.useInsertionEffect(p,I)},Be.useLayoutEffect=function(p,I){return ie.H.useLayoutEffect(p,I)},Be.useMemo=function(p,I){return ie.H.useMemo(p,I)},Be.useOptimistic=function(p,I){return ie.H.useOptimistic(p,I)},Be.useReducer=function(p,I,H){return ie.H.useReducer(p,I,H)},Be.useRef=function(p){return ie.H.useRef(p)},Be.useState=function(p){return ie.H.useState(p)},Be.useSyncExternalStore=function(p,I,H){return ie.H.useSyncExternalStore(p,I,H)},Be.useTransition=function(){return ie.H.useTransition()},Be.version="19.2.3",Be}var _f;function sd(){return _f||(_f=1,Ac.exports=MC()),Ac.exports}var g=sd();const lr=Dm(g);var fc={exports:{}},jo={},hc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function DC(){return Jf||(Jf=1,(function(n){function i(D,q){var se=D.length;D.push(q);e:for(;0<se;){var Ae=se-1>>>1,le=D[Ae];if(0<c(le,q))D[Ae]=q,D[se]=le,se=Ae;else break e}}function r(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var q=D[0],se=D.pop();if(se!==q){D[0]=se;e:for(var Ae=0,le=D.length,p=le>>>1;Ae<p;){var I=2*(Ae+1)-1,H=D[I],z=I+1,P=D[z];if(0>c(H,se))z<le&&0>c(P,H)?(D[Ae]=P,D[z]=se,Ae=z):(D[Ae]=H,D[I]=se,Ae=I);else if(z<le&&0>c(P,se))D[Ae]=P,D[z]=se,Ae=z;else break e}}return q}function c(D,q){var se=D.sortIndex-q.sortIndex;return se!==0?se:D.id-q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;n.unstable_now=function(){return E.now()}}else{var d=Date,A=d.now();n.unstable_now=function(){return d.now()-A}}var h=[],f=[],T=1,m=null,O=3,L=!1,B=!1,k=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function ee(D){for(var q=r(f);q!==null;){if(q.callback===null)s(f);else if(q.startTime<=D)s(f),q.sortIndex=q.expirationTime,i(h,q);else break;q=r(f)}}function te(D){if(k=!1,ee(D),!B)if(r(h)!==null)B=!0,ue||(ue=!0,Te());else{var q=r(f);q!==null&&Se(te,q.startTime-D)}}var ue=!1,ie=-1,ne=5,fe=-1;function Le(){return b?!0:!(n.unstable_now()-fe<ne)}function me(){if(b=!1,ue){var D=n.unstable_now();fe=D;var q=!0;try{e:{B=!1,k&&(k=!1,Y(ie),ie=-1),L=!0;var se=O;try{t:{for(ee(D),m=r(h);m!==null&&!(m.expirationTime>D&&Le());){var Ae=m.callback;if(typeof Ae=="function"){m.callback=null,O=m.priorityLevel;var le=Ae(m.expirationTime<=D);if(D=n.unstable_now(),typeof le=="function"){m.callback=le,ee(D),q=!0;break t}m===r(h)&&s(h),ee(D)}else s(h);m=r(h)}if(m!==null)q=!0;else{var p=r(f);p!==null&&Se(te,p.startTime-D),q=!1}}break e}finally{m=null,O=se,L=!1}q=void 0}}finally{q?Te():ue=!1}}}var Te;if(typeof W=="function")Te=function(){W(me)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Oe=de.port2;de.port1.onmessage=me,Te=function(){Oe.postMessage(null)}}else Te=function(){y(me,0)};function Se(D,q){ie=y(function(){D(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return O},n.unstable_next=function(D){switch(O){case 1:case 2:case 3:var q=3;break;default:q=O}var se=O;O=q;try{return D()}finally{O=se}},n.unstable_requestPaint=function(){b=!0},n.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var se=O;O=D;try{return q()}finally{O=se}},n.unstable_scheduleCallback=function(D,q,se){var Ae=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Ae+se:Ae):se=Ae,D){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=se+le,D={id:T++,callback:q,priorityLevel:D,startTime:se,expirationTime:le,sortIndex:-1},se>Ae?(D.sortIndex=se,i(f,D),r(h)===null&&D===r(f)&&(k?(Y(ie),ie=-1):k=!0,Se(te,se-Ae))):(D.sortIndex=le,i(h,D),B||L||(B=!0,ue||(ue=!0,Te()))),D},n.unstable_shouldYield=Le,n.unstable_wrapCallback=function(D){var q=O;return function(){var se=O;O=q;try{return D.apply(this,arguments)}finally{O=se}}}})(mc)),mc}var Zf;function PC(){return Zf||(Zf=1,hc.exports=DC()),hc.exports}var Tc={exports:{}},Bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf;function vC(){if(Xf)return Bt;Xf=1;var n=sd();function i(h){var f="https://react.dev/errors/"+h;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)f+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+h+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function E(h,f,T){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:m==null?null:""+m,children:h,containerInfo:f,implementation:T}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(h,f){if(h==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bt.createPortal=function(h,f){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(i(299));return E(h,f,null,T)},Bt.flushSync=function(h){var f=d.T,T=s.p;try{if(d.T=null,s.p=2,h)return h()}finally{d.T=f,s.p=T,s.d.f()}},Bt.preconnect=function(h,f){typeof h=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,s.d.C(h,f))},Bt.prefetchDNS=function(h){typeof h=="string"&&s.d.D(h)},Bt.preinit=function(h,f){if(typeof h=="string"&&f&&typeof f.as=="string"){var T=f.as,m=A(T,f.crossOrigin),O=typeof f.integrity=="string"?f.integrity:void 0,L=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;T==="style"?s.d.S(h,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:m,integrity:O,fetchPriority:L}):T==="script"&&s.d.X(h,{crossOrigin:m,integrity:O,fetchPriority:L,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},Bt.preinitModule=function(h,f){if(typeof h=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var T=A(f.as,f.crossOrigin);s.d.M(h,{crossOrigin:T,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&s.d.M(h)},Bt.preload=function(h,f){if(typeof h=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var T=f.as,m=A(T,f.crossOrigin);s.d.L(h,T,{crossOrigin:m,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},Bt.preloadModule=function(h,f){if(typeof h=="string")if(f){var T=A(f.as,f.crossOrigin);s.d.m(h,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:T,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else s.d.m(h)},Bt.requestFormReset=function(h){s.d.r(h)},Bt.unstable_batchedUpdates=function(h,f){return h(f)},Bt.useFormState=function(h,f,T){return d.H.useFormState(h,f,T)},Bt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Bt.version="19.2.3",Bt}var qf;function BC(){if(qf)return Tc.exports;qf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Tc.exports=vC(),Tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function bC(){if(Qf)return jo;Qf=1;var n=PC(),i=sd(),r=BC();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function E(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(E(e)!==e)throw Error(s(188))}function f(e){var t=e.alternate;if(!t){if(t=E(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,o=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){a=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return h(l),e;if(u===o)return h(l),t;u=u.sibling}throw Error(s(188))}if(a.return!==o.return)a=l,o=u;else{for(var S=!1,R=l.child;R;){if(R===a){S=!0,a=l,o=u;break}if(R===o){S=!0,o=l,a=u;break}R=R.sibling}if(!S){for(R=u.child;R;){if(R===a){S=!0,a=u,o=l;break}if(R===o){S=!0,o=u,a=l;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,O=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),W=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),Le=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function Te(e){return e===null||typeof e!="object"?null:(e=me&&e[me]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case te:return"Suspense";case ue:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case W:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return t=e.displayName||null,t!==null?t:Oe(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return Oe(e(t))}catch{}}return null}var Se=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},Ae=[],le=-1;function p(e){return{current:e}}function I(e){0>le||(e.current=Ae[le],Ae[le]=null,le--)}function H(e,t){le++,Ae[le]=e.current,e.current=t}var z=p(null),P=p(null),x=p(null),w=p(null);function V(e,t){switch(H(x,t),H(P,e),H(z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Sf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Sf(t),e=Af(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(z),H(z,e)}function J(){I(z),I(P),I(x)}function oe(e){e.memoizedState!==null&&H(w,e);var t=z.current,a=Af(t,e.type);t!==a&&(H(P,e),H(z,a))}function ae(e){P.current===e&&(I(z),I(P)),w.current===e&&(I(w),Vo._currentValue=se)}var X,ye;function re(e){if(X===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);X=t&&t[1]||"",ye=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+X+e+ye}var Q=!1;function $(e,t){if(!e||Q)return"";Q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(K){var F=K}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(K){F=K}e.call(Z.prototype)}}else{try{throw Error()}catch(K){F=K}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(K){if(K&&F&&typeof K.stack=="string")return[K.stack,F.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),S=u[0],R=u[1];if(S&&R){var N=S.split(`
`),U=R.split(`
`);for(l=o=0;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;for(;l<U.length&&!U[l].includes("DetermineComponentFrameRoot");)l++;if(o===N.length||l===U.length)for(o=N.length-1,l=U.length-1;1<=o&&0<=l&&N[o]!==U[l];)l--;for(;1<=o&&0<=l;o--,l--)if(N[o]!==U[l]){if(o!==1||l!==1)do if(o--,l--,0>l||N[o]!==U[l]){var j=`
`+N[o].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=o&&0<=l);break}}}finally{Q=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?re(a):""}function ce(e,t){switch(e.tag){case 26:case 27:case 5:return re(e.type);case 16:return re("Lazy");case 13:return e.child!==t&&t!==null?re("Suspense Fallback"):re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return $(e.type,!1);case 11:return $(e.type.render,!1);case 1:return $(e.type,!0);case 31:return re("Activity");default:return""}}function pe(e){try{var t="",a=null;do t+=ce(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ce=Object.prototype.hasOwnProperty,Re=n.unstable_scheduleCallback,ge=n.unstable_cancelCallback,et=n.unstable_shouldYield,Fe=n.unstable_requestPaint,We=n.unstable_now,fa=n.unstable_getCurrentPriorityLevel,ze=n.unstable_ImmediatePriority,Pe=n.unstable_UserBlockingPriority,be=n.unstable_NormalPriority,xe=n.unstable_LowPriority,ve=n.unstable_IdlePriority,kt=n.log,vt=n.unstable_setDisableYieldValue,qa=null,Ft=null;function Ma(e){if(typeof kt=="function"&&vt(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(qa,e)}catch{}}var St=Math.clz32?Math.clz32:ER,el=Math.log,dR=Math.LN2;function ER(e){return e>>>=0,e===0?32:31-(el(e)/dR|0)|0}var hr=256,mr=262144,Tr=4194304;function Ln(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rr(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~u,o!==0?l=Ln(o):(S&=R,S!==0?l=Ln(S):a||(a=R&~e,a!==0&&(l=Ln(a))))):(R=o&~u,R!==0?l=Ln(R):S!==0?l=Ln(S):a||(a=o&~e,a!==0&&(l=Ln(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function $i(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function SR(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _d(){var e=Tr;return Tr<<=1,(Tr&62914560)===0&&(Tr=4194304),e}function tl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function eo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function AR(e,t,a,o,l,u){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,N=e.expirationTimes,U=e.hiddenUpdates;for(a=S&~a;0<a;){var j=31-St(a),Z=1<<j;R[j]=0,N[j]=-1;var F=U[j];if(F!==null)for(U[j]=null,j=0;j<F.length;j++){var K=F[j];K!==null&&(K.lane&=-536870913)}a&=~Z}o!==0&&Jd(e,o,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(S&~t))}function Jd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-St(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Zd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-St(a),l=1<<o;l&t|e[o]&t&&(e[o]|=t),a&=~l}}function Xd(e,t){var a=t&-t;return a=(a&42)!==0?1:al(a),(a&(e.suspendedLanes|t))!==0?0:a}function al(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qd(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Ff(e.type))}function Qd(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var Qa=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Qa,xt="__reactProps$"+Qa,ni="__reactContainer$"+Qa,il="__reactEvents$"+Qa,fR="__reactListeners$"+Qa,hR="__reactHandles$"+Qa,$d="__reactResources$"+Qa,to="__reactMarker$"+Qa;function ol(e){delete e[Ct],delete e[xt],delete e[il],delete e[fR],delete e[hR]}function ii(e){var t=e[Ct];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ni]||a[Ct]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Cf(e);e!==null;){if(a=e[Ct])return a;e=Cf(e)}return t}e=a,a=e.parentNode}return null}function oi(e){if(e=e[Ct]||e[ni]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ao(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ri(e){var t=e[$d];return t||(t=e[$d]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Rt(e){e[to]=!0}var eE=new Set,tE={};function Mn(e,t){si(e,t),si(e+"Capture",t)}function si(e,t){for(tE[e]=t,e=0;e<t.length;e++)eE.add(t[e])}var mR=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),aE={},nE={};function TR(e){return Ce.call(nE,e)?!0:Ce.call(aE,e)?!1:mR.test(e)?nE[e]=!0:(aE[e]=!0,!1)}function Or(e,t,a){if(TR(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Cr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Da(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function na(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function RR(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(S){a=""+S,u.call(this,S)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rl(e){if(!e._valueTracker){var t=iE(e)?"checked":"value";e._valueTracker=RR(e,t,""+e[t])}}function oE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=iE(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var OR=/[\n"\\]/g;function ia(e){return e.replace(OR,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function sl(e,t,a,o,l,u,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),t!=null?S==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+na(t)):e.value!==""+na(t)&&(e.value=""+na(t)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),t!=null?ll(e,S,na(t)):a!=null?ll(e,S,na(a)):o!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+na(R):e.removeAttribute("name")}function rE(e,t,a,o,l,u,S,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){rl(e);return}a=a!=null?""+na(a):"",t=t!=null?""+na(t):a,R||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),rl(e)}function ll(e,t,a){t==="number"&&pr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function li(e,t,a,o){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&o&&(e[a].defaultSelected=!0)}else{for(a=""+na(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function sE(e,t,a){if(t!=null&&(t=""+na(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+na(a):""}function lE(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(s(92));if(Se(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=na(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),rl(e)}function ui(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var CR=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uE(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||CR.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function cE(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in t)o=t[l],t.hasOwnProperty(l)&&a[l]!==o&&uE(e,l,o)}else for(var u in t)t.hasOwnProperty(u)&&uE(e,u,t[u])}function ul(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pR=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gR=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gr(e){return gR.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pa(){}var cl=null;function dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,di=null;function dE(e){var t=oi(e);if(t&&(e=t.stateNode)){var a=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(sl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ia(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var l=o[xt]||null;if(!l)throw Error(s(90));sl(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&oE(o)}break e;case"textarea":sE(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&li(e,!!a.multiple,t,!1)}}}var El=!1;function EE(e,t,a){if(El)return e(t,a);El=!0;try{var o=e(t);return o}finally{if(El=!1,(ci!==null||di!==null)&&(cs(),ci&&(t=ci,e=di,di=ci=null,dE(t),e)))for(t=0;t<e.length;t++)dE(e[t])}}function no(e,t){var a=e.stateNode;if(a===null)return null;var o=a[xt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=!1;if(va)try{var io={};Object.defineProperty(io,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Sl=!1}var $a=null,Al=null,Nr=null;function SE(){if(Nr)return Nr;var e,t=Al,a=t.length,o,l="value"in $a?$a.value:$a.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var S=a-e;for(o=1;o<=S&&t[a-o]===l[u-o];o++);return Nr=l.slice(e,1<o?1-o:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yr(){return!0}function AE(){return!1}function Vt(e){function t(a,o,l,u,S){this._reactName=a,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?yr:AE,this.isPropagationStopped=AE,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lr=Vt(Dn),oo=m({},Dn,{view:0,detail:0}),NR=Vt(oo),fl,hl,ro,Mr=m({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(fl=e.screenX-ro.screenX,hl=e.screenY-ro.screenY):hl=fl=0,ro=e),fl)},movementY:function(e){return"movementY"in e?e.movementY:hl}}),fE=Vt(Mr),IR=m({},Mr,{dataTransfer:0}),yR=Vt(IR),LR=m({},oo,{relatedTarget:0}),ml=Vt(LR),MR=m({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),DR=Vt(MR),PR=m({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vR=Vt(PR),BR=m({},Dn,{data:0}),hE=Vt(BR),bR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UR(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=GR[e])?!!t[e]:!1}function Tl(){return UR}var FR=m({},oo,{key:function(e){if(e.key){var t=bR[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?HR[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tl,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wR=Vt(FR),kR=m({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mE=Vt(kR),xR=m({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tl}),VR=Vt(xR),YR=m({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),KR=Vt(YR),WR=m({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zR=Vt(WR),jR=m({},Dn,{newState:0,oldState:0}),_R=Vt(jR),JR=[9,13,27,32],Rl=va&&"CompositionEvent"in window,so=null;va&&"documentMode"in document&&(so=document.documentMode);var ZR=va&&"TextEvent"in window&&!so,TE=va&&(!Rl||so&&8<so&&11>=so),RE=" ",OE=!1;function CE(e,t){switch(e){case"keyup":return JR.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ei=!1;function XR(e,t){switch(e){case"compositionend":return pE(t);case"keypress":return t.which!==32?null:(OE=!0,RE);case"textInput":return e=t.data,e===RE&&OE?null:e;default:return null}}function qR(e,t){if(Ei)return e==="compositionend"||!Rl&&CE(e,t)?(e=SE(),Nr=Al=$a=null,Ei=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return TE&&t.locale!=="ko"?null:t.data;default:return null}}var QR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gE(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!QR[e.type]:t==="textarea"}function NE(e,t,a,o){ci?di?di.push(o):di=[o]:ci=o,t=ms(t,"onChange"),0<t.length&&(a=new Lr("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var lo=null,uo=null;function $R(e){sf(e,0)}function Dr(e){var t=ao(e);if(oE(t))return e}function IE(e,t){if(e==="change")return t}var yE=!1;if(va){var Ol;if(va){var Cl="oninput"in document;if(!Cl){var LE=document.createElement("div");LE.setAttribute("oninput","return;"),Cl=typeof LE.oninput=="function"}Ol=Cl}else Ol=!1;yE=Ol&&(!document.documentMode||9<document.documentMode)}function ME(){lo&&(lo.detachEvent("onpropertychange",DE),uo=lo=null)}function DE(e){if(e.propertyName==="value"&&Dr(uo)){var t=[];NE(t,uo,e,dl(e)),EE($R,t)}}function eO(e,t,a){e==="focusin"?(ME(),lo=t,uo=a,lo.attachEvent("onpropertychange",DE)):e==="focusout"&&ME()}function tO(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dr(uo)}function aO(e,t){if(e==="click")return Dr(t)}function nO(e,t){if(e==="input"||e==="change")return Dr(t)}function iO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:iO;function co(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var l=a[o];if(!Ce.call(t,l)||!_t(e[l],t[l]))return!1}return!0}function PE(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vE(e,t){var a=PE(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=PE(a)}}function BE(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?BE(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bE(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=pr(e.document)}return t}function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var oO=va&&"documentMode"in document&&11>=document.documentMode,Si=null,gl=null,Eo=null,Nl=!1;function HE(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nl||Si==null||Si!==pr(o)||(o=Si,"selectionStart"in o&&pl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Eo&&co(Eo,o)||(Eo=o,o=ms(gl,"onSelect"),0<o.length&&(t=new Lr("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Si)))}function Pn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ai={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionrun:Pn("Transition","TransitionRun"),transitionstart:Pn("Transition","TransitionStart"),transitioncancel:Pn("Transition","TransitionCancel"),transitionend:Pn("Transition","TransitionEnd")},Il={},GE={};va&&(GE=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function vn(e){if(Il[e])return Il[e];if(!Ai[e])return e;var t=Ai[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in GE)return Il[e]=t[a];return e}var UE=vn("animationend"),FE=vn("animationiteration"),wE=vn("animationstart"),rO=vn("transitionrun"),sO=vn("transitionstart"),lO=vn("transitioncancel"),kE=vn("transitionend"),xE=new Map,yl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yl.push("scrollEnd");function ha(e,t){xE.set(e,t),Mn(t,[e])}var Pr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oa=[],fi=0,Ll=0;function vr(){for(var e=fi,t=Ll=fi=0;t<e;){var a=oa[t];oa[t++]=null;var o=oa[t];oa[t++]=null;var l=oa[t];oa[t++]=null;var u=oa[t];if(oa[t++]=null,o!==null&&l!==null){var S=o.pending;S===null?l.next=l:(l.next=S.next,S.next=l),o.pending=l}u!==0&&VE(a,l,u)}}function Br(e,t,a,o){oa[fi++]=e,oa[fi++]=t,oa[fi++]=a,oa[fi++]=o,Ll|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ml(e,t,a,o){return Br(e,t,a,o),br(e)}function Bn(e,t){return Br(e,null,null,t),br(e)}function VE(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-St(a),e=u.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=a|536870912),u):null}function br(e){if(50<Ho)throw Ho=0,Fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function uO(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,a,o){return new uO(e,t,a,o)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ba(e,t){var a=e.alternate;return a===null?(a=Jt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function YE(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Hr(e,t,a,o,l,u){var S=0;if(o=e,typeof e=="function")Dl(e)&&(S=1);else if(typeof e=="string")S=AC(e,a,z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Jt(31,a,t,l),e.elementType=fe,e.lanes=u,e;case k:return bn(a.children,l,u,t);case b:S=8,l|=24;break;case y:return e=Jt(12,a,t,l|2),e.elementType=y,e.lanes=u,e;case te:return e=Jt(13,a,t,l),e.elementType=te,e.lanes=u,e;case ue:return e=Jt(19,a,t,l),e.elementType=ue,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:S=10;break e;case Y:S=9;break e;case ee:S=11;break e;case ie:S=14;break e;case ne:S=16,o=null;break e}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return t=Jt(S,a,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function bn(e,t,a,o){return e=Jt(7,e,o,t),e.lanes=a,e}function Pl(e,t,a){return e=Jt(6,e,null,t),e.lanes=a,e}function KE(e){var t=Jt(18,null,null,0);return t.stateNode=e,t}function vl(e,t,a){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var WE=new WeakMap;function ra(e,t){if(typeof e=="object"&&e!==null){var a=WE.get(e);return a!==void 0?a:(t={value:e,source:t,stack:pe(t)},WE.set(e,t),t)}return{value:e,source:t,stack:pe(t)}}var mi=[],Ti=0,Gr=null,So=0,sa=[],la=0,en=null,Oa=1,Ca="";function ba(e,t){mi[Ti++]=So,mi[Ti++]=Gr,Gr=e,So=t}function zE(e,t,a){sa[la++]=Oa,sa[la++]=Ca,sa[la++]=en,en=e;var o=Oa;e=Ca;var l=32-St(o)-1;o&=~(1<<l),a+=1;var u=32-St(t)+l;if(30<u){var S=l-l%5;u=(o&(1<<S)-1).toString(32),o>>=S,l-=S,Oa=1<<32-St(t)+l|a<<l|o,Ca=u+e}else Oa=1<<u|a<<l|o,Ca=e}function Bl(e){e.return!==null&&(ba(e,1),zE(e,1,0))}function bl(e){for(;e===Gr;)Gr=mi[--Ti],mi[Ti]=null,So=mi[--Ti],mi[Ti]=null;for(;e===en;)en=sa[--la],sa[la]=null,Ca=sa[--la],sa[la]=null,Oa=sa[--la],sa[la]=null}function jE(e,t){sa[la++]=Oa,sa[la++]=Ca,sa[la++]=en,Oa=t.id,Ca=t.overflow,en=e}var pt=null,at=null,Ke=!1,tn=null,ua=!1,Hl=Error(s(519));function an(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(ra(t,e)),Hl}function _E(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Ct]=e,t[xt]=o,a){case"dialog":ke("cancel",t),ke("close",t);break;case"iframe":case"object":case"embed":ke("load",t);break;case"video":case"audio":for(a=0;a<Uo.length;a++)ke(Uo[a],t);break;case"source":ke("error",t);break;case"img":case"image":case"link":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"input":ke("invalid",t),rE(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ke("invalid",t);break;case"textarea":ke("invalid",t),lE(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||df(t.textContent,a)?(o.popover!=null&&(ke("beforetoggle",t),ke("toggle",t)),o.onScroll!=null&&ke("scroll",t),o.onScrollEnd!=null&&ke("scrollend",t),o.onClick!=null&&(t.onclick=Pa),t=!0):t=!1,t||an(e,!0)}function JE(e){for(pt=e.return;pt;)switch(pt.tag){case 5:case 31:case 13:ua=!1;return;case 27:case 3:ua=!0;return;default:pt=pt.return}}function Ri(e){if(e!==pt)return!1;if(!Ke)return JE(e),Ke=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qu(e.type,e.memoizedProps)),a=!a),a&&at&&an(e),JE(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));at=Of(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));at=Of(e)}else t===27?(t=at,mn(e.type)?(e=nc,nc=null,at=e):at=t):at=pt?da(e.stateNode.nextSibling):null;return!0}function Hn(){at=pt=null,Ke=!1}function Gl(){var e=tn;return e!==null&&(zt===null?zt=e:zt.push.apply(zt,e),tn=null),e}function Ao(e){tn===null?tn=[e]:tn.push(e)}var Ul=p(null),Gn=null,Ha=null;function nn(e,t,a){H(Ul,t._currentValue),t._currentValue=a}function Ga(e){e._currentValue=Ul.current,I(Ul)}function Fl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function wl(e,t,a,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var S=l.child;u=u.firstContext;e:for(;u!==null;){var R=u;u=l;for(var N=0;N<t.length;N++)if(R.context===t[N]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),Fl(u.return,a,e),o||(S=null);break e}u=R.next}}else if(l.tag===18){if(S=l.return,S===null)throw Error(s(341));S.lanes|=a,u=S.alternate,u!==null&&(u.lanes|=a),Fl(S,a,e),S=null}else S=l.child;if(S!==null)S.return=l;else for(S=l;S!==null;){if(S===e){S=null;break}if(l=S.sibling,l!==null){l.return=S.return,S=l;break}S=S.return}l=S}}function Oi(e,t,a,o){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var S=l.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=l.type;_t(l.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(l===w.current){if(S=l.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}l=l.return}e!==null&&wl(t,e,a,o),t.flags|=262144}function Ur(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Un(e){Gn=e,Ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function gt(e){return ZE(Gn,e)}function Fr(e,t){return Gn===null&&Un(e),ZE(e,t)}function ZE(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ha===null){if(e===null)throw Error(s(308));Ha=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ha=Ha.next=t;return a}var cO=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},dO=n.unstable_scheduleCallback,EO=n.unstable_NormalPriority,At={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kl(){return{controller:new cO,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&dO(EO,function(){e.controller.abort()})}var ho=null,xl=0,Ci=0,pi=null;function SO(e,t){if(ho===null){var a=ho=[];xl=0,Ci=Ku(),pi={status:"pending",value:void 0,then:function(o){a.push(o)}}}return xl++,t.then(XE,XE),t}function XE(){if(--xl===0&&ho!==null){pi!==null&&(pi.status="fulfilled");var e=ho;ho=null,Ci=0,pi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function AO(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),o}var qE=D.S;D.S=function(e,t){HA=We(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&SO(e,t),qE!==null&&qE(e,t)};var Fn=p(null);function Vl(){var e=Fn.current;return e!==null?e:tt.pooledCache}function wr(e,t){t===null?H(Fn,Fn.current):H(Fn,t.pool)}function QE(){var e=Vl();return e===null?null:{parent:At._currentValue,pool:e}}var gi=Error(s(460)),Yl=Error(s(474)),kr=Error(s(542)),xr={then:function(){}};function $E(e){return e=e.status,e==="fulfilled"||e==="rejected"}function eS(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Pa,Pa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,aS(e),e;default:if(typeof t.status=="string")t.then(Pa,Pa);else{if(e=tt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=o}},function(o){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,aS(e),e}throw kn=t,gi}}function wn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(kn=a,gi):a}}var kn=null;function tS(){if(kn===null)throw Error(s(459));var e=kn;return kn=null,e}function aS(e){if(e===gi||e===kr)throw Error(s(483))}var Ni=null,mo=0;function Vr(e){var t=mo;return mo+=1,Ni===null&&(Ni=[]),eS(Ni,e,t)}function To(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Yr(e,t){throw t.$$typeof===O?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function nS(e){function t(v,M){if(e){var G=v.deletions;G===null?(v.deletions=[M],v.flags|=16):G.push(M)}}function a(v,M){if(!e)return null;for(;M!==null;)t(v,M),M=M.sibling;return null}function o(v){for(var M=new Map;v!==null;)v.key!==null?M.set(v.key,v):M.set(v.index,v),v=v.sibling;return M}function l(v,M){return v=Ba(v,M),v.index=0,v.sibling=null,v}function u(v,M,G){return v.index=G,e?(G=v.alternate,G!==null?(G=G.index,G<M?(v.flags|=67108866,M):G):(v.flags|=67108866,M)):(v.flags|=1048576,M)}function S(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function R(v,M,G,_){return M===null||M.tag!==6?(M=Pl(G,v.mode,_),M.return=v,M):(M=l(M,G),M.return=v,M)}function N(v,M,G,_){var Ne=G.type;return Ne===k?j(v,M,G.props.children,_,G.key):M!==null&&(M.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===ne&&wn(Ne)===M.type)?(M=l(M,G.props),To(M,G),M.return=v,M):(M=Hr(G.type,G.key,G.props,null,v.mode,_),To(M,G),M.return=v,M)}function U(v,M,G,_){return M===null||M.tag!==4||M.stateNode.containerInfo!==G.containerInfo||M.stateNode.implementation!==G.implementation?(M=vl(G,v.mode,_),M.return=v,M):(M=l(M,G.children||[]),M.return=v,M)}function j(v,M,G,_,Ne){return M===null||M.tag!==7?(M=bn(G,v.mode,_,Ne),M.return=v,M):(M=l(M,G),M.return=v,M)}function Z(v,M,G){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Pl(""+M,v.mode,G),M.return=v,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case L:return G=Hr(M.type,M.key,M.props,null,v.mode,G),To(G,M),G.return=v,G;case B:return M=vl(M,v.mode,G),M.return=v,M;case ne:return M=wn(M),Z(v,M,G)}if(Se(M)||Te(M))return M=bn(M,v.mode,G,null),M.return=v,M;if(typeof M.then=="function")return Z(v,Vr(M),G);if(M.$$typeof===W)return Z(v,Fr(v,M),G);Yr(v,M)}return null}function F(v,M,G,_){var Ne=M!==null?M.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return Ne!==null?null:R(v,M,""+G,_);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return G.key===Ne?N(v,M,G,_):null;case B:return G.key===Ne?U(v,M,G,_):null;case ne:return G=wn(G),F(v,M,G,_)}if(Se(G)||Te(G))return Ne!==null?null:j(v,M,G,_,null);if(typeof G.then=="function")return F(v,M,Vr(G),_);if(G.$$typeof===W)return F(v,M,Fr(v,G),_);Yr(v,G)}return null}function K(v,M,G,_,Ne){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return v=v.get(G)||null,R(M,v,""+_,Ne);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case L:return v=v.get(_.key===null?G:_.key)||null,N(M,v,_,Ne);case B:return v=v.get(_.key===null?G:_.key)||null,U(M,v,_,Ne);case ne:return _=wn(_),K(v,M,G,_,Ne)}if(Se(_)||Te(_))return v=v.get(G)||null,j(M,v,_,Ne,null);if(typeof _.then=="function")return K(v,M,G,Vr(_),Ne);if(_.$$typeof===W)return K(v,M,G,Fr(M,_),Ne);Yr(M,_)}return null}function Ee(v,M,G,_){for(var Ne=null,je=null,he=M,Ue=M=0,Ye=null;he!==null&&Ue<G.length;Ue++){he.index>Ue?(Ye=he,he=null):Ye=he.sibling;var _e=F(v,he,G[Ue],_);if(_e===null){he===null&&(he=Ye);break}e&&he&&_e.alternate===null&&t(v,he),M=u(_e,M,Ue),je===null?Ne=_e:je.sibling=_e,je=_e,he=Ye}if(Ue===G.length)return a(v,he),Ke&&ba(v,Ue),Ne;if(he===null){for(;Ue<G.length;Ue++)he=Z(v,G[Ue],_),he!==null&&(M=u(he,M,Ue),je===null?Ne=he:je.sibling=he,je=he);return Ke&&ba(v,Ue),Ne}for(he=o(he);Ue<G.length;Ue++)Ye=K(he,v,Ue,G[Ue],_),Ye!==null&&(e&&Ye.alternate!==null&&he.delete(Ye.key===null?Ue:Ye.key),M=u(Ye,M,Ue),je===null?Ne=Ye:je.sibling=Ye,je=Ye);return e&&he.forEach(function(pn){return t(v,pn)}),Ke&&ba(v,Ue),Ne}function Me(v,M,G,_){if(G==null)throw Error(s(151));for(var Ne=null,je=null,he=M,Ue=M=0,Ye=null,_e=G.next();he!==null&&!_e.done;Ue++,_e=G.next()){he.index>Ue?(Ye=he,he=null):Ye=he.sibling;var pn=F(v,he,_e.value,_);if(pn===null){he===null&&(he=Ye);break}e&&he&&pn.alternate===null&&t(v,he),M=u(pn,M,Ue),je===null?Ne=pn:je.sibling=pn,je=pn,he=Ye}if(_e.done)return a(v,he),Ke&&ba(v,Ue),Ne;if(he===null){for(;!_e.done;Ue++,_e=G.next())_e=Z(v,_e.value,_),_e!==null&&(M=u(_e,M,Ue),je===null?Ne=_e:je.sibling=_e,je=_e);return Ke&&ba(v,Ue),Ne}for(he=o(he);!_e.done;Ue++,_e=G.next())_e=K(he,v,Ue,_e.value,_),_e!==null&&(e&&_e.alternate!==null&&he.delete(_e.key===null?Ue:_e.key),M=u(_e,M,Ue),je===null?Ne=_e:je.sibling=_e,je=_e);return e&&he.forEach(function(IC){return t(v,IC)}),Ke&&ba(v,Ue),Ne}function $e(v,M,G,_){if(typeof G=="object"&&G!==null&&G.type===k&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case L:e:{for(var Ne=G.key;M!==null;){if(M.key===Ne){if(Ne=G.type,Ne===k){if(M.tag===7){a(v,M.sibling),_=l(M,G.props.children),_.return=v,v=_;break e}}else if(M.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===ne&&wn(Ne)===M.type){a(v,M.sibling),_=l(M,G.props),To(_,G),_.return=v,v=_;break e}a(v,M);break}else t(v,M);M=M.sibling}G.type===k?(_=bn(G.props.children,v.mode,_,G.key),_.return=v,v=_):(_=Hr(G.type,G.key,G.props,null,v.mode,_),To(_,G),_.return=v,v=_)}return S(v);case B:e:{for(Ne=G.key;M!==null;){if(M.key===Ne)if(M.tag===4&&M.stateNode.containerInfo===G.containerInfo&&M.stateNode.implementation===G.implementation){a(v,M.sibling),_=l(M,G.children||[]),_.return=v,v=_;break e}else{a(v,M);break}else t(v,M);M=M.sibling}_=vl(G,v.mode,_),_.return=v,v=_}return S(v);case ne:return G=wn(G),$e(v,M,G,_)}if(Se(G))return Ee(v,M,G,_);if(Te(G)){if(Ne=Te(G),typeof Ne!="function")throw Error(s(150));return G=Ne.call(G),Me(v,M,G,_)}if(typeof G.then=="function")return $e(v,M,Vr(G),_);if(G.$$typeof===W)return $e(v,M,Fr(v,G),_);Yr(v,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,M!==null&&M.tag===6?(a(v,M.sibling),_=l(M,G),_.return=v,v=_):(a(v,M),_=Pl(G,v.mode,_),_.return=v,v=_),S(v)):a(v,M)}return function(v,M,G,_){try{mo=0;var Ne=$e(v,M,G,_);return Ni=null,Ne}catch(he){if(he===gi||he===kr)throw he;var je=Jt(29,he,null,v.mode);return je.lanes=_,je.return=v,je}finally{}}}var xn=nS(!0),iS=nS(!1),on=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sn(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=br(e),VE(e,null,a),t}return Br(e,o,t,a),br(e)}function Ro(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Zd(e,a)}}function zl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=S:u=u.next=S,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var jl=!1;function Oo(){if(jl){var e=pi;if(e!==null)throw e}}function Co(e,t,a,o){jl=!1;var l=e.updateQueue;on=!1;var u=l.firstBaseUpdate,S=l.lastBaseUpdate,R=l.shared.pending;if(R!==null){l.shared.pending=null;var N=R,U=N.next;N.next=null,S===null?u=U:S.next=U,S=N;var j=e.alternate;j!==null&&(j=j.updateQueue,R=j.lastBaseUpdate,R!==S&&(R===null?j.firstBaseUpdate=U:R.next=U,j.lastBaseUpdate=N))}if(u!==null){var Z=l.baseState;S=0,j=U=N=null,R=u;do{var F=R.lane&-536870913,K=F!==R.lane;if(K?(Ve&F)===F:(o&F)===F){F!==0&&F===Ci&&(jl=!0),j!==null&&(j=j.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ee=e,Me=R;F=t;var $e=a;switch(Me.tag){case 1:if(Ee=Me.payload,typeof Ee=="function"){Z=Ee.call($e,Z,F);break e}Z=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Me.payload,F=typeof Ee=="function"?Ee.call($e,Z,F):Ee,F==null)break e;Z=m({},Z,F);break e;case 2:on=!0}}F=R.callback,F!==null&&(e.flags|=64,K&&(e.flags|=8192),K=l.callbacks,K===null?l.callbacks=[F]:K.push(F))}else K={lane:F,tag:R.tag,payload:R.payload,callback:R.callback,next:null},j===null?(U=j=K,N=Z):j=j.next=K,S|=F;if(R=R.next,R===null){if(R=l.shared.pending,R===null)break;K=R,R=K.next,K.next=null,l.lastBaseUpdate=K,l.shared.pending=null}}while(!0);j===null&&(N=Z),l.baseState=N,l.firstBaseUpdate=U,l.lastBaseUpdate=j,u===null&&(l.shared.lanes=0),En|=S,e.lanes=S,e.memoizedState=Z}}function oS(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function rS(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)oS(a[e],t)}var Ii=p(null),Kr=p(0);function sS(e,t){e=Wa,H(Kr,e),H(Ii,t),Wa=e|t.baseLanes}function _l(){H(Kr,Wa),H(Ii,Ii.current)}function Jl(){Wa=Kr.current,I(Ii),I(Kr)}var Zt=p(null),ca=null;function ln(e){var t=e.alternate;H(ct,ct.current&1),H(Zt,e),ca===null&&(t===null||Ii.current!==null||t.memoizedState!==null)&&(ca=e)}function Zl(e){H(ct,ct.current),H(Zt,e),ca===null&&(ca=e)}function lS(e){e.tag===22?(H(ct,ct.current),H(Zt,e),ca===null&&(ca=e)):un()}function un(){H(ct,ct.current),H(Zt,Zt.current)}function Xt(e){I(Zt),ca===e&&(ca=null),I(ct)}var ct=p(0);function Wr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||tc(a)||ac(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ua=0,Ge=null,qe=null,ft=null,zr=!1,yi=!1,Vn=!1,jr=0,po=0,Li=null,fO=0;function st(){throw Error(s(321))}function Xl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!_t(e[a],t[a]))return!1;return!0}function ql(e,t,a,o,l,u){return Ua=u,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?zS:Eu,Vn=!1,u=a(o,l),Vn=!1,yi&&(u=cS(t,a,o,l)),uS(e),u}function uS(e){D.H=Io;var t=qe!==null&&qe.next!==null;if(Ua=0,ft=qe=Ge=null,zr=!1,po=0,Li=null,t)throw Error(s(300));e===null||ht||(e=e.dependencies,e!==null&&Ur(e)&&(ht=!0))}function cS(e,t,a,o){Ge=e;var l=0;do{if(yi&&(Li=null),po=0,yi=!1,25<=l)throw Error(s(301));if(l+=1,ft=qe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=jS,u=t(a,o)}while(yi);return u}function hO(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?go(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(Ge.flags|=1024),t}function Ql(){var e=jr!==0;return jr=0,e}function $l(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function eu(e){if(zr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zr=!1}Ua=0,ft=qe=Ge=null,yi=!1,po=jr=0,Li=null}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ge.memoizedState=ft=e:ft=ft.next=e,ft}function dt(){if(qe===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=ft===null?Ge.memoizedState:ft.next;if(t!==null)ft=t,qe=e;else{if(e===null)throw Ge.alternate===null?Error(s(467)):Error(s(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},ft===null?Ge.memoizedState=ft=e:ft=ft.next=e}return ft}function _r(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var t=po;return po+=1,Li===null&&(Li=[]),e=eS(Li,e,t),t=Ge,(ft===null?t.memoizedState:ft.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?zS:Eu),e}function Jr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===W)return gt(e)}throw Error(s(438,String(e)))}function tu(e){var t=null,a=Ge.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=Ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=_r(),Ge.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=Le;return t.index++,a}function Fa(e,t){return typeof t=="function"?t(e):t}function Zr(e){var t=dt();return au(t,qe,e)}function au(e,t,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var l=e.baseQueue,u=o.pending;if(u!==null){if(l!==null){var S=l.next;l.next=u.next,u.next=S}t.baseQueue=l=u,o.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var R=S=null,N=null,U=t,j=!1;do{var Z=U.lane&-536870913;if(Z!==U.lane?(Ve&Z)===Z:(Ua&Z)===Z){var F=U.revertLane;if(F===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),Z===Ci&&(j=!0);else if((Ua&F)===F){U=U.next,F===Ci&&(j=!0);continue}else Z={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},N===null?(R=N=Z,S=u):N=N.next=Z,Ge.lanes|=F,En|=F;Z=U.action,Vn&&a(u,Z),u=U.hasEagerState?U.eagerState:a(u,Z)}else F={lane:Z,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},N===null?(R=N=F,S=u):N=N.next=F,Ge.lanes|=Z,En|=Z;U=U.next}while(U!==null&&U!==t);if(N===null?S=u:N.next=R,!_t(u,e.memoizedState)&&(ht=!0,j&&(a=pi,a!==null)))throw a;e.memoizedState=u,e.baseState=S,e.baseQueue=N,o.lastRenderedState=u}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function nu(e){var t=dt(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var S=l=l.next;do u=e(u,S.action),S=S.next;while(S!==l);_t(u,t.memoizedState)||(ht=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function dS(e,t,a){var o=Ge,l=dt(),u=Ke;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=t();var S=!_t((qe||l).memoizedState,a);if(S&&(l.memoizedState=a,ht=!0),l=l.queue,ru(AS.bind(null,o,l,e),[e]),l.getSnapshot!==t||S||ft!==null&&ft.memoizedState.tag&1){if(o.flags|=2048,Mi(9,{destroy:void 0},SS.bind(null,o,l,a,t),null),tt===null)throw Error(s(349));u||(Ua&127)!==0||ES(o,t,a)}return a}function ES(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Ge.updateQueue,t===null?(t=_r(),Ge.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function SS(e,t,a,o){t.value=a,t.getSnapshot=o,fS(t)&&hS(e)}function AS(e,t,a){return a(function(){fS(t)&&hS(e)})}function fS(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!_t(e,a)}catch{return!0}}function hS(e){var t=Bn(e,2);t!==null&&jt(t,e,2)}function iu(e){var t=wt();if(typeof e=="function"){var a=e;if(e=a(),Vn){Ma(!0);try{a()}finally{Ma(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:e},t}function mS(e,t,a,o){return e.baseState=a,au(e,qe,typeof o=="function"?o:Fa)}function mO(e,t,a,o,l){if(Qr(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){u.listeners.push(S)}};D.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,TS(t,u)):(u.next=a.next,t.pending=a.next=u)}}function TS(e,t){var a=t.action,o=t.payload,l=e.state;if(t.isTransition){var u=D.T,S={};D.T=S;try{var R=a(l,o),N=D.S;N!==null&&N(S,R),RS(e,t,R)}catch(U){ou(e,t,U)}finally{u!==null&&S.types!==null&&(u.types=S.types),D.T=u}}else try{u=a(l,o),RS(e,t,u)}catch(U){ou(e,t,U)}}function RS(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){OS(e,t,o)},function(o){return ou(e,t,o)}):OS(e,t,a)}function OS(e,t,a){t.status="fulfilled",t.value=a,CS(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,TS(e,a)))}function ou(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,CS(t),t=t.next;while(t!==o)}e.action=null}function CS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pS(e,t){return t}function gS(e,t){if(Ke){var a=tt.formState;if(a!==null){e:{var o=Ge;if(Ke){if(at){t:{for(var l=at,u=ua;l.nodeType!==8;){if(!u){l=null;break t}if(l=da(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){at=da(l.nextSibling),o=l.data==="F!";break e}}an(o)}o=!1}o&&(t=a[0])}}return a=wt(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pS,lastRenderedState:t},a.queue=o,a=YS.bind(null,Ge,o),o.dispatch=a,o=iu(!1),u=du.bind(null,Ge,!1,o.queue),o=wt(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,a=mO.bind(null,Ge,l,u,a),l.dispatch=a,o.memoizedState=e,[t,a,!1]}function NS(e){var t=dt();return IS(t,qe,e)}function IS(e,t,a){if(t=au(e,t,pS)[0],e=Zr(Fa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=go(t)}catch(S){throw S===gi?kr:S}else o=t;t=dt();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(Ge.flags|=2048,Mi(9,{destroy:void 0},TO.bind(null,l,a),null)),[o,u,e]}function TO(e,t){e.action=t}function yS(e){var t=dt(),a=qe;if(a!==null)return IS(t,a,e);dt(),t=t.memoizedState,a=dt();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function Mi(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=Ge.updateQueue,t===null&&(t=_r(),Ge.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function LS(){return dt().memoizedState}function Xr(e,t,a,o){var l=wt();Ge.flags|=e,l.memoizedState=Mi(1|t,{destroy:void 0},a,o===void 0?null:o)}function qr(e,t,a,o){var l=dt();o=o===void 0?null:o;var u=l.memoizedState.inst;qe!==null&&o!==null&&Xl(o,qe.memoizedState.deps)?l.memoizedState=Mi(t,u,a,o):(Ge.flags|=e,l.memoizedState=Mi(1|t,u,a,o))}function MS(e,t){Xr(8390656,8,e,t)}function ru(e,t){qr(2048,8,e,t)}function RO(e){Ge.flags|=4;var t=Ge.updateQueue;if(t===null)t=_r(),Ge.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function DS(e){var t=dt().memoizedState;return RO({ref:t,nextImpl:e}),function(){if((Je&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function PS(e,t){return qr(4,2,e,t)}function vS(e,t){return qr(4,4,e,t)}function BS(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bS(e,t,a){a=a!=null?a.concat([e]):null,qr(4,4,BS.bind(null,t,e),a)}function su(){}function HS(e,t){var a=dt();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Xl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function GS(e,t){var a=dt();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Xl(t,o[1]))return o[0];if(o=e(),Vn){Ma(!0);try{e()}finally{Ma(!1)}}return a.memoizedState=[o,t],o}function lu(e,t,a){return a===void 0||(Ua&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=UA(),Ge.lanes|=e,En|=e,a)}function US(e,t,a,o){return _t(a,t)?a:Ii.current!==null?(e=lu(e,a,o),_t(e,t)||(ht=!0),e):(Ua&42)===0||(Ua&1073741824)!==0&&(Ve&261930)===0?(ht=!0,e.memoizedState=a):(e=UA(),Ge.lanes|=e,En|=e,t)}function FS(e,t,a,o,l){var u=q.p;q.p=u!==0&&8>u?u:8;var S=D.T,R={};D.T=R,du(e,!1,t,a);try{var N=l(),U=D.S;if(U!==null&&U(R,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var j=AO(N,o);No(e,t,j,$t(e))}else No(e,t,o,$t(e))}catch(Z){No(e,t,{then:function(){},status:"rejected",reason:Z},$t())}finally{q.p=u,S!==null&&R.types!==null&&(S.types=R.types),D.T=S}}function OO(){}function uu(e,t,a,o){if(e.tag!==5)throw Error(s(476));var l=wS(e).queue;FS(e,l,t,se,a===null?OO:function(){return kS(e),a(o)})}function wS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:se},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kS(e){var t=wS(e);t.next===null&&(t=e.alternate.memoizedState),No(e,t.next.queue,{},$t())}function cu(){return gt(Vo)}function xS(){return dt().memoizedState}function VS(){return dt().memoizedState}function CO(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=$t();e=rn(a);var o=sn(t,e,a);o!==null&&(jt(o,t,a),Ro(o,t,a)),t={cache:kl()},e.payload=t;return}t=t.return}}function pO(e,t,a){var o=$t();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Qr(e)?KS(t,a):(a=Ml(e,t,a,o),a!==null&&(jt(a,e,o),WS(a,t,o)))}function YS(e,t,a){var o=$t();No(e,t,a,o)}function No(e,t,a,o){var l={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qr(e))KS(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var S=t.lastRenderedState,R=u(S,a);if(l.hasEagerState=!0,l.eagerState=R,_t(R,S))return Br(e,t,l,0),tt===null&&vr(),!1}catch{}finally{}if(a=Ml(e,t,l,o),a!==null)return jt(a,e,o),WS(a,t,o),!0}return!1}function du(e,t,a,o){if(o={lane:2,revertLane:Ku(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Qr(e)){if(t)throw Error(s(479))}else t=Ml(e,a,o,2),t!==null&&jt(t,e,2)}function Qr(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function KS(e,t){yi=zr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function WS(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Zd(e,a)}}var Io={readContext:gt,use:Jr,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};Io.useEffectEvent=st;var zS={readContext:gt,use:Jr,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:MS,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Xr(4194308,4,BS.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){Xr(4,2,e,t)},useMemo:function(e,t){var a=wt();t=t===void 0?null:t;var o=e();if(Vn){Ma(!0);try{e()}finally{Ma(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=wt();if(a!==void 0){var l=a(t);if(Vn){Ma(!0);try{a(t)}finally{Ma(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=pO.bind(null,Ge,e),[o.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:function(e){e=iu(e);var t=e.queue,a=YS.bind(null,Ge,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:su,useDeferredValue:function(e,t){var a=wt();return lu(a,e,t)},useTransition:function(){var e=iu(!1);return e=FS.bind(null,Ge,e.queue,!0,!1),wt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=Ge,l=wt();if(Ke){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),tt===null)throw Error(s(349));(Ve&127)!==0||ES(o,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,MS(AS.bind(null,o,u,e),[e]),o.flags|=2048,Mi(9,{destroy:void 0},SS.bind(null,o,u,a,t),null),a},useId:function(){var e=wt(),t=tt.identifierPrefix;if(Ke){var a=Ca,o=Oa;a=(o&~(1<<32-St(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=jr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=fO++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:cu,useFormState:gS,useActionState:gS,useOptimistic:function(e){var t=wt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=du.bind(null,Ge,!0,a),a.dispatch=t,[e,t]},useMemoCache:tu,useCacheRefresh:function(){return wt().memoizedState=CO.bind(null,Ge)},useEffectEvent:function(e){var t=wt(),a={impl:e};return t.memoizedState=a,function(){if((Je&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Eu={readContext:gt,use:Jr,useCallback:HS,useContext:gt,useEffect:ru,useImperativeHandle:bS,useInsertionEffect:PS,useLayoutEffect:vS,useMemo:GS,useReducer:Zr,useRef:LS,useState:function(){return Zr(Fa)},useDebugValue:su,useDeferredValue:function(e,t){var a=dt();return US(a,qe.memoizedState,e,t)},useTransition:function(){var e=Zr(Fa)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:go(e),t]},useSyncExternalStore:dS,useId:xS,useHostTransitionStatus:cu,useFormState:NS,useActionState:NS,useOptimistic:function(e,t){var a=dt();return mS(a,qe,e,t)},useMemoCache:tu,useCacheRefresh:VS};Eu.useEffectEvent=DS;var jS={readContext:gt,use:Jr,useCallback:HS,useContext:gt,useEffect:ru,useImperativeHandle:bS,useInsertionEffect:PS,useLayoutEffect:vS,useMemo:GS,useReducer:nu,useRef:LS,useState:function(){return nu(Fa)},useDebugValue:su,useDeferredValue:function(e,t){var a=dt();return qe===null?lu(a,e,t):US(a,qe.memoizedState,e,t)},useTransition:function(){var e=nu(Fa)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:go(e),t]},useSyncExternalStore:dS,useId:xS,useHostTransitionStatus:cu,useFormState:yS,useActionState:yS,useOptimistic:function(e,t){var a=dt();return qe!==null?mS(a,qe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:tu,useCacheRefresh:VS};jS.useEffectEvent=DS;function Su(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:m({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Au={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=$t(),l=rn(o);l.payload=t,a!=null&&(l.callback=a),t=sn(e,l,o),t!==null&&(jt(t,e,o),Ro(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=$t(),l=rn(o);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=sn(e,l,o),t!==null&&(jt(t,e,o),Ro(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=$t(),o=rn(a);o.tag=2,t!=null&&(o.callback=t),t=sn(e,o,a),t!==null&&(jt(t,e,a),Ro(t,e,a))}};function _S(e,t,a,o,l,u,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,S):t.prototype&&t.prototype.isPureReactComponent?!co(a,o)||!co(l,u):!0}function JS(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Au.enqueueReplaceState(t,t.state,null)}function Yn(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=m({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function ZS(e){Pr(e)}function XS(e){console.error(e)}function qS(e){Pr(e)}function $r(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function QS(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function fu(e,t,a){return a=rn(a),a.tag=3,a.payload={element:null},a.callback=function(){$r(e,t)},a}function $S(e){return e=rn(e),e.tag=3,e}function eA(e,t,a,o){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;e.payload=function(){return l(u)},e.callback=function(){QS(t,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){QS(t,a,o),typeof l!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function gO(e,t,a,o,l){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Oi(t,a,l,!0),a=Zt.current,a!==null){switch(a.tag){case 31:case 13:return ca===null?ds():a.alternate===null&&lt===0&&(lt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,o===xr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),xu(e,o,l)),!1;case 22:return a.flags|=65536,o===xr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),xu(e,o,l)),!1}throw Error(s(435,a.tag))}return xu(e,o,l),ds(),!1}if(Ke)return t=Zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==Hl&&(e=Error(s(422),{cause:o}),Ao(ra(e,a)))):(o!==Hl&&(t=Error(s(423),{cause:o}),Ao(ra(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=ra(o,a),l=fu(e.stateNode,o,l),zl(e,l),lt!==4&&(lt=2)),!1;var u=Error(s(520),{cause:o});if(u=ra(u,a),bo===null?bo=[u]:bo.push(u),lt!==4&&(lt=2),t===null)return!0;o=ra(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=fu(a.stateNode,o,e),zl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Sn===null||!Sn.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=$S(l),eA(l,e,a,o),zl(a,l),!1}a=a.return}while(a!==null);return!1}var hu=Error(s(461)),ht=!1;function Nt(e,t,a,o){t.child=e===null?iS(t,null,a,o):xn(t,e.child,a,o)}function tA(e,t,a,o,l){a=a.render;var u=t.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Un(t),o=ql(e,t,a,S,u,l),R=Ql(),e!==null&&!ht?($l(e,t,l),wa(e,t,l)):(Ke&&R&&Bl(t),t.flags|=1,Nt(e,t,o,l),t.child)}function aA(e,t,a,o,l){if(e===null){var u=a.type;return typeof u=="function"&&!Dl(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,nA(e,t,u,o,l)):(e=Hr(a.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Nu(e,l)){var S=u.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(S,o)&&e.ref===t.ref)return wa(e,t,l)}return t.flags|=1,e=Ba(u,o),e.ref=t.ref,e.return=t,t.child=e}function nA(e,t,a,o,l){if(e!==null){var u=e.memoizedProps;if(co(u,o)&&e.ref===t.ref)if(ht=!1,t.pendingProps=o=u,Nu(e,l))(e.flags&131072)!==0&&(ht=!0);else return t.lanes=e.lanes,wa(e,t,l)}return mu(e,t,a,o,l)}function iA(e,t,a,o){var l=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~u}else o=0,t.child=null;return oA(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wr(t,u!==null?u.cachePool:null),u!==null?sS(t,u):_l(),lS(t);else return o=t.lanes=536870912,oA(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(wr(t,u.cachePool),sS(t,u),un(),t.memoizedState=null):(e!==null&&wr(t,null),_l(),un());return Nt(e,t,l,a),t.child}function yo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function oA(e,t,a,o,l){var u=Vl();return u=u===null?null:{parent:At._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&wr(t,null),_l(),lS(t),e!==null&&Oi(e,t,o,!0),t.childLanes=l,null}function es(e,t){return t=as({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function rA(e,t,a){return xn(t,e.child,null,a),e=es(t,t.pendingProps),e.flags|=2,Xt(t),t.memoizedState=null,e}function NO(e,t,a){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ke){if(o.mode==="hidden")return e=es(t,o),t.lanes=536870912,yo(null,e);if(Zl(t),(e=at)?(e=Rf(e,ua),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:en!==null?{id:Oa,overflow:Ca}:null,retryLane:536870912,hydrationErrors:null},a=KE(e),a.return=t,t.child=a,pt=t,at=null)):e=null,e===null)throw an(t);return t.lanes=536870912,null}return es(t,o)}var u=e.memoizedState;if(u!==null){var S=u.dehydrated;if(Zl(t),l)if(t.flags&256)t.flags&=-257,t=rA(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ht||Oi(e,t,a,!1),l=(a&e.childLanes)!==0,ht||l){if(o=tt,o!==null&&(S=Xd(o,a),S!==0&&S!==u.retryLane))throw u.retryLane=S,Bn(e,S),jt(o,e,S),hu;ds(),t=rA(e,t,a)}else e=u.treeContext,at=da(S.nextSibling),pt=t,Ke=!0,tn=null,ua=!1,e!==null&&jE(t,e),t=es(t,o),t.flags|=4096;return t}return e=Ba(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ts(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function mu(e,t,a,o,l){return Un(t),a=ql(e,t,a,o,void 0,l),o=Ql(),e!==null&&!ht?($l(e,t,l),wa(e,t,l)):(Ke&&o&&Bl(t),t.flags|=1,Nt(e,t,a,l),t.child)}function sA(e,t,a,o,l,u){return Un(t),t.updateQueue=null,a=cS(t,o,a,l),uS(e),o=Ql(),e!==null&&!ht?($l(e,t,u),wa(e,t,u)):(Ke&&o&&Bl(t),t.flags|=1,Nt(e,t,a,u),t.child)}function lA(e,t,a,o,l){if(Un(t),t.stateNode===null){var u=hi,S=a.contextType;typeof S=="object"&&S!==null&&(u=gt(S)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Au,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Kl(t),S=a.contextType,u.context=typeof S=="object"&&S!==null?gt(S):hi,u.state=t.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Su(t,a,S,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(S=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),S!==u.state&&Au.enqueueReplaceState(u,u.state,null),Co(t,o,u,l),Oo(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var R=t.memoizedProps,N=Yn(a,R);u.props=N;var U=u.context,j=a.contextType;S=hi,typeof j=="object"&&j!==null&&(S=gt(j));var Z=a.getDerivedStateFromProps;j=typeof Z=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=t.pendingProps!==R,j||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||U!==S)&&JS(t,u,o,S),on=!1;var F=t.memoizedState;u.state=F,Co(t,o,u,l),Oo(),U=t.memoizedState,R||F!==U||on?(typeof Z=="function"&&(Su(t,a,Z,o),U=t.memoizedState),(N=on||_S(t,a,N,o,F,U,S))?(j||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=U),u.props=o,u.state=U,u.context=S,o=N):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Wl(e,t),S=t.memoizedProps,j=Yn(a,S),u.props=j,Z=t.pendingProps,F=u.context,U=a.contextType,N=hi,typeof U=="object"&&U!==null&&(N=gt(U)),R=a.getDerivedStateFromProps,(U=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(S!==Z||F!==N)&&JS(t,u,o,N),on=!1,F=t.memoizedState,u.state=F,Co(t,o,u,l),Oo();var K=t.memoizedState;S!==Z||F!==K||on||e!==null&&e.dependencies!==null&&Ur(e.dependencies)?(typeof R=="function"&&(Su(t,a,R,o),K=t.memoizedState),(j=on||_S(t,a,j,o,F,K,N)||e!==null&&e.dependencies!==null&&Ur(e.dependencies))?(U||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,K,N),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,K,N)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||S===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=K),u.props=o,u.state=K,u.context=N,o=j):(typeof u.componentDidUpdate!="function"||S===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,ts(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=xn(t,e.child,null,l),t.child=xn(t,null,a,l)):Nt(e,t,a,l),t.memoizedState=u.state,e=t.child):e=wa(e,t,l),e}function uA(e,t,a,o){return Hn(),t.flags|=256,Nt(e,t,a,o),t.child}var Tu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(e){return{baseLanes:e,cachePool:QE()}}function Ou(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Qt),e}function cA(e,t,a){var o=t.pendingProps,l=!1,u=(t.flags&128)!==0,S;if((S=u)||(S=e!==null&&e.memoizedState===null?!1:(ct.current&2)!==0),S&&(l=!0,t.flags&=-129),S=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ke){if(l?ln(t):un(),(e=at)?(e=Rf(e,ua),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:en!==null?{id:Oa,overflow:Ca}:null,retryLane:536870912,hydrationErrors:null},a=KE(e),a.return=t,t.child=a,pt=t,at=null)):e=null,e===null)throw an(t);return ac(e)?t.lanes=32:t.lanes=536870912,null}var R=o.children;return o=o.fallback,l?(un(),l=t.mode,R=as({mode:"hidden",children:R},l),o=bn(o,l,a,null),R.return=t,o.return=t,R.sibling=o,t.child=R,o=t.child,o.memoizedState=Ru(a),o.childLanes=Ou(e,S,a),t.memoizedState=Tu,yo(null,o)):(ln(t),Cu(t,R))}var N=e.memoizedState;if(N!==null&&(R=N.dehydrated,R!==null)){if(u)t.flags&256?(ln(t),t.flags&=-257,t=pu(e,t,a)):t.memoizedState!==null?(un(),t.child=e.child,t.flags|=128,t=null):(un(),R=o.fallback,l=t.mode,o=as({mode:"visible",children:o.children},l),R=bn(R,l,a,null),R.flags|=2,o.return=t,R.return=t,o.sibling=R,t.child=o,xn(t,e.child,null,a),o=t.child,o.memoizedState=Ru(a),o.childLanes=Ou(e,S,a),t.memoizedState=Tu,t=yo(null,o));else if(ln(t),ac(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var U=S.dgst;S=U,o=Error(s(419)),o.stack="",o.digest=S,Ao({value:o,source:null,stack:null}),t=pu(e,t,a)}else if(ht||Oi(e,t,a,!1),S=(a&e.childLanes)!==0,ht||S){if(S=tt,S!==null&&(o=Xd(S,a),o!==0&&o!==N.retryLane))throw N.retryLane=o,Bn(e,o),jt(S,e,o),hu;tc(R)||ds(),t=pu(e,t,a)}else tc(R)?(t.flags|=192,t.child=e.child,t=null):(e=N.treeContext,at=da(R.nextSibling),pt=t,Ke=!0,tn=null,ua=!1,e!==null&&jE(t,e),t=Cu(t,o.children),t.flags|=4096);return t}return l?(un(),R=o.fallback,l=t.mode,N=e.child,U=N.sibling,o=Ba(N,{mode:"hidden",children:o.children}),o.subtreeFlags=N.subtreeFlags&65011712,U!==null?R=Ba(U,R):(R=bn(R,l,a,null),R.flags|=2),R.return=t,o.return=t,o.sibling=R,t.child=o,yo(null,o),o=t.child,R=e.child.memoizedState,R===null?R=Ru(a):(l=R.cachePool,l!==null?(N=At._currentValue,l=l.parent!==N?{parent:N,pool:N}:l):l=QE(),R={baseLanes:R.baseLanes|a,cachePool:l}),o.memoizedState=R,o.childLanes=Ou(e,S,a),t.memoizedState=Tu,yo(e.child,o)):(ln(t),a=e.child,e=a.sibling,a=Ba(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(S=t.deletions,S===null?(t.deletions=[e],t.flags|=16):S.push(e)),t.child=a,t.memoizedState=null,a)}function Cu(e,t){return t=as({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function as(e,t){return e=Jt(22,e,null,t),e.lanes=0,e}function pu(e,t,a){return xn(t,e.child,null,a),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dA(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Fl(e.return,t,a)}function gu(e,t,a,o,l,u){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:l,treeForkCount:u}:(S.isBackwards=t,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=l,S.treeForkCount=u)}function EA(e,t,a){var o=t.pendingProps,l=o.revealOrder,u=o.tail;o=o.children;var S=ct.current,R=(S&2)!==0;if(R?(S=S&1|2,t.flags|=128):S&=1,H(ct,S),Nt(e,t,o,a),o=Ke?So:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dA(e,a,t);else if(e.tag===19)dA(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Wr(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),gu(t,!1,l,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Wr(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}gu(t,!0,a,null,u,o);break;case"together":gu(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function wa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Oi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Ba(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ba(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Nu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ur(e)))}function IO(e,t,a){switch(t.tag){case 3:V(t,t.stateNode.containerInfo),nn(t,At,e.memoizedState.cache),Hn();break;case 27:case 5:oe(t);break;case 4:V(t,t.stateNode.containerInfo);break;case 10:nn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(ln(t),t.flags|=128,null):(a&t.child.childLanes)!==0?cA(e,t,a):(ln(t),e=wa(e,t,a),e!==null?e.sibling:null);ln(t);break;case 19:var l=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Oi(e,t,a,!1),o=(a&t.childLanes)!==0),l){if(o)return EA(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(ct,ct.current),o)break;return null;case 22:return t.lanes=0,iA(e,t,a,t.pendingProps);case 24:nn(t,At,e.memoizedState.cache)}return wa(e,t,a)}function SA(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ht=!0;else{if(!Nu(e,a)&&(t.flags&128)===0)return ht=!1,IO(e,t,a);ht=(e.flags&131072)!==0}else ht=!1,Ke&&(t.flags&1048576)!==0&&zE(t,So,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=wn(t.elementType),t.type=e,typeof e=="function")Dl(e)?(o=Yn(e,o),t.tag=1,t=lA(null,t,e,o,a)):(t.tag=0,t=mu(null,t,e,o,a));else{if(e!=null){var l=e.$$typeof;if(l===ee){t.tag=11,t=tA(null,t,e,o,a);break e}else if(l===ie){t.tag=14,t=aA(null,t,e,o,a);break e}}throw t=Oe(e)||e,Error(s(306,t,""))}}return t;case 0:return mu(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,l=Yn(o,t.pendingProps),lA(e,t,o,l,a);case 3:e:{if(V(t,t.stateNode.containerInfo),e===null)throw Error(s(387));o=t.pendingProps;var u=t.memoizedState;l=u.element,Wl(e,t),Co(t,o,null,a);var S=t.memoizedState;if(o=S.cache,nn(t,At,o),o!==u.cache&&wl(t,[At],a,!0),Oo(),o=S.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:S.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=uA(e,t,o,a);break e}else if(o!==l){l=ra(Error(s(424)),t),Ao(l),t=uA(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(at=da(e.firstChild),pt=t,Ke=!0,tn=null,ua=!0,a=iS(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Hn(),o===l){t=wa(e,t,a);break e}Nt(e,t,o,a)}t=t.child}return t;case 26:return ts(e,t),e===null?(a=If(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ke||(a=t.type,e=t.pendingProps,o=Ts(x.current).createElement(a),o[Ct]=t,o[xt]=e,It(o,a,e),Rt(o),t.stateNode=o):t.memoizedState=If(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return oe(t),e===null&&Ke&&(o=t.stateNode=pf(t.type,t.pendingProps,x.current),pt=t,ua=!0,l=at,mn(t.type)?(nc=l,at=da(o.firstChild)):at=l),Nt(e,t,t.pendingProps.children,a),ts(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ke&&((l=o=at)&&(o=tC(o,t.type,t.pendingProps,ua),o!==null?(t.stateNode=o,pt=t,at=da(o.firstChild),ua=!1,l=!0):l=!1),l||an(t)),oe(t),l=t.type,u=t.pendingProps,S=e!==null?e.memoizedProps:null,o=u.children,Qu(l,u)?o=null:S!==null&&Qu(l,S)&&(t.flags|=32),t.memoizedState!==null&&(l=ql(e,t,hO,null,null,a),Vo._currentValue=l),ts(e,t),Nt(e,t,o,a),t.child;case 6:return e===null&&Ke&&((e=a=at)&&(a=aC(a,t.pendingProps,ua),a!==null?(t.stateNode=a,pt=t,at=null,e=!0):e=!1),e||an(t)),null;case 13:return cA(e,t,a);case 4:return V(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=xn(t,null,o,a):Nt(e,t,o,a),t.child;case 11:return tA(e,t,t.type,t.pendingProps,a);case 7:return Nt(e,t,t.pendingProps,a),t.child;case 8:return Nt(e,t,t.pendingProps.children,a),t.child;case 12:return Nt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,nn(t,t.type,o.value),Nt(e,t,o.children,a),t.child;case 9:return l=t.type._context,o=t.pendingProps.children,Un(t),l=gt(l),o=o(l),t.flags|=1,Nt(e,t,o,a),t.child;case 14:return aA(e,t,t.type,t.pendingProps,a);case 15:return nA(e,t,t.type,t.pendingProps,a);case 19:return EA(e,t,a);case 31:return NO(e,t,a);case 22:return iA(e,t,a,t.pendingProps);case 24:return Un(t),o=gt(At),e===null?(l=Vl(),l===null&&(l=tt,u=kl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:o,cache:l},Kl(t),nn(t,At,l)):((e.lanes&a)!==0&&(Wl(e,t),Co(t,null,null,a),Oo()),l=e.memoizedState,u=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),nn(t,At,o)):(o=u.cache,nn(t,At,o),o!==l.cache&&wl(t,[At],a,!0))),Nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function ka(e){e.flags|=4}function Iu(e,t,a,o,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(xA())e.flags|=8192;else throw kn=xr,Yl}else e.flags&=-16777217}function AA(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pf(t))if(xA())e.flags|=8192;else throw kn=xr,Yl}function ns(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?_d():536870912,e.lanes|=t,Bi|=t)}function Lo(e,t){if(!Ke)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function yO(e,t,a){var o=t.pendingProps;switch(bl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Ga(At),J(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?ka(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gl())),nt(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(ka(t),u!==null?(nt(t),AA(t,u)):(nt(t),Iu(t,l,null,o,a))):u?u!==e.memoizedState?(ka(t),nt(t),AA(t,u)):(nt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&ka(t),nt(t),Iu(t,l,e,o,a)),null;case 27:if(ae(t),a=x.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ka(t);else{if(!o){if(t.stateNode===null)throw Error(s(166));return nt(t),null}e=z.current,Ri(t)?_E(t):(e=pf(l,o,a),t.stateNode=e,ka(t))}return nt(t),null;case 5:if(ae(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&ka(t);else{if(!o){if(t.stateNode===null)throw Error(s(166));return nt(t),null}if(u=z.current,Ri(t))_E(t);else{var S=Ts(x.current);switch(u){case 1:u=S.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=S.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=S.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=S.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=S.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?S.createElement(l,{is:o.is}):S.createElement(l)}}u[Ct]=t,u[xt]=o;e:for(S=t.child;S!==null;){if(S.tag===5||S.tag===6)u.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===t)break e;for(;S.sibling===null;){if(S.return===null||S.return===t)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}t.stateNode=u;e:switch(It(u,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ka(t)}}return nt(t),Iu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&ka(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(e=x.current,Ri(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,l=pt,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[Ct]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||df(e.nodeValue,a)),e||an(t,!0)}else e=Ts(e).createTextNode(o),e[Ct]=t,t.stateNode=e}return nt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Ri(t),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ct]=t}else Hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),e=!1}else a=Gl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Xt(t),t):(Xt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return nt(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ri(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ct]=t}else Hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),l=!1}else l=Gl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Xt(t),t):(Xt(t),null)}return Xt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ns(t,t.updateQueue),nt(t),null);case 4:return J(),e===null&&_u(t.stateNode.containerInfo),nt(t),null;case 10:return Ga(t.type),nt(t),null;case 19:if(I(ct),o=t.memoizedState,o===null)return nt(t),null;if(l=(t.flags&128)!==0,u=o.rendering,u===null)if(l)Lo(o,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Wr(e),u!==null){for(t.flags|=128,Lo(o,!1),e=u.updateQueue,t.updateQueue=e,ns(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)YE(a,e),a=a.sibling;return H(ct,ct.current&1|2),Ke&&ba(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&We()>ls&&(t.flags|=128,l=!0,Lo(o,!1),t.lanes=4194304)}else{if(!l)if(e=Wr(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ns(t,e),Lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Ke)return nt(t),null}else 2*We()-o.renderingStartTime>ls&&a!==536870912&&(t.flags|=128,l=!0,Lo(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=We(),e.sibling=null,a=ct.current,H(ct,l?a&1|2:a&1),Ke&&ba(t,o.treeForkCount),e):(nt(t),null);case 22:case 23:return Xt(t),Jl(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),a=t.updateQueue,a!==null&&ns(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&I(Fn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ga(At),nt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function LO(e,t){switch(bl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ga(At),J(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ae(t),null;case 31:if(t.memoizedState!==null){if(Xt(t),t.alternate===null)throw Error(s(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(ct),null;case 4:return J(),null;case 10:return Ga(t.type),null;case 22:case 23:return Xt(t),Jl(),e!==null&&I(Fn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ga(At),null;case 25:return null;default:return null}}function fA(e,t){switch(bl(t),t.tag){case 3:Ga(At),J();break;case 26:case 27:case 5:ae(t);break;case 4:J();break;case 31:t.memoizedState!==null&&Xt(t);break;case 13:Xt(t);break;case 19:I(ct);break;case 10:Ga(t.type);break;case 22:case 23:Xt(t),Jl(),e!==null&&I(Fn);break;case 24:Ga(At)}}function Mo(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){o=void 0;var u=a.create,S=a.inst;o=u(),S.destroy=o}a=a.next}while(a!==l)}}catch(R){Xe(t,t.return,R)}}function cn(e,t,a){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,l=t;var N=a,U=R;try{U()}catch(j){Xe(l,N,j)}}}o=o.next}while(o!==u)}}catch(j){Xe(t,t.return,j)}}function hA(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{rS(t,a)}catch(o){Xe(e,e.return,o)}}}function mA(e,t,a){a.props=Yn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Xe(e,t,o)}}function Do(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(l){Xe(e,t,l)}}function pa(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(l){Xe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Xe(e,t,l)}else a.current=null}function TA(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(l){Xe(e,e.return,l)}}function yu(e,t,a){try{var o=e.stateNode;ZO(o,e.type,a,t),o[xt]=t}catch(l){Xe(e,e.return,l)}}function RA(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mn(e.type)||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||RA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mu(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Pa));else if(o!==4&&(o===27&&mn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Mu(e,t,a),e=e.sibling;e!==null;)Mu(e,t,a),e=e.sibling}function is(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&mn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(is(e,t,a),e=e.sibling;e!==null;)is(e,t,a),e=e.sibling}function OA(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);It(t,o,a),t[Ct]=e,t[xt]=a}catch(u){Xe(e,e.return,u)}}var xa=!1,mt=!1,Du=!1,CA=typeof WeakSet=="function"?WeakSet:Set,Ot=null;function MO(e,t){if(e=e.containerInfo,Xu=Is,e=bE(e),pl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var S=0,R=-1,N=-1,U=0,j=0,Z=e,F=null;t:for(;;){for(var K;Z!==a||l!==0&&Z.nodeType!==3||(R=S+l),Z!==u||o!==0&&Z.nodeType!==3||(N=S+o),Z.nodeType===3&&(S+=Z.nodeValue.length),(K=Z.firstChild)!==null;)F=Z,Z=K;for(;;){if(Z===e)break t;if(F===a&&++U===l&&(R=S),F===u&&++j===o&&(N=S),(K=Z.nextSibling)!==null)break;Z=F,F=Z.parentNode}Z=K}a=R===-1||N===-1?null:{start:R,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(qu={focusedElem:e,selectionRange:a},Is=!1,Ot=t;Ot!==null;)if(t=Ot,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ot=e;else for(;Ot!==null;){switch(t=Ot,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var Ee=Yn(a.type,l);e=o.getSnapshotBeforeUpdate(Ee,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(Me){Xe(a,a.return,Me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ec(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ec(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ot=e;break}Ot=t.return}}function pA(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ya(e,a),o&4&&Mo(5,a);break;case 1:if(Ya(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(S){Xe(a,a.return,S)}else{var l=Yn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Xe(a,a.return,S)}}o&64&&hA(a),o&512&&Do(a,a.return);break;case 3:if(Ya(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{rS(e,t)}catch(S){Xe(a,a.return,S)}}break;case 27:t===null&&o&4&&OA(a);case 26:case 5:Ya(e,a),t===null&&o&4&&TA(a),o&512&&Do(a,a.return);break;case 12:Ya(e,a);break;case 31:Ya(e,a),o&4&&IA(e,a);break;case 13:Ya(e,a),o&4&&yA(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=FO.bind(null,a),nC(e,a))));break;case 22:if(o=a.memoizedState!==null||xa,!o){t=t!==null&&t.memoizedState!==null||mt,l=xa;var u=mt;xa=o,(mt=t)&&!u?Ka(e,a,(a.subtreeFlags&8772)!==0):Ya(e,a),xa=l,mt=u}break;case 30:break;default:Ya(e,a)}}function gA(e){var t=e.alternate;t!==null&&(e.alternate=null,gA(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ol(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ot=null,Yt=!1;function Va(e,t,a){for(a=a.child;a!==null;)NA(e,t,a),a=a.sibling}function NA(e,t,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(qa,a)}catch{}switch(a.tag){case 26:mt||pa(a,t),Va(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mt||pa(a,t);var o=ot,l=Yt;mn(a.type)&&(ot=a.stateNode,Yt=!1),Va(e,t,a),wo(a.stateNode),ot=o,Yt=l;break;case 5:mt||pa(a,t);case 6:if(o=ot,l=Yt,ot=null,Va(e,t,a),ot=o,Yt=l,ot!==null)if(Yt)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(a.stateNode)}catch(u){Xe(a,t,u)}else try{ot.removeChild(a.stateNode)}catch(u){Xe(a,t,u)}break;case 18:ot!==null&&(Yt?(e=ot,mf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xi(e)):mf(ot,a.stateNode));break;case 4:o=ot,l=Yt,ot=a.stateNode.containerInfo,Yt=!0,Va(e,t,a),ot=o,Yt=l;break;case 0:case 11:case 14:case 15:cn(2,a,t),mt||cn(4,a,t),Va(e,t,a);break;case 1:mt||(pa(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mA(a,t,o)),Va(e,t,a);break;case 21:Va(e,t,a);break;case 22:mt=(o=mt)||a.memoizedState!==null,Va(e,t,a),mt=o;break;default:Va(e,t,a)}}function IA(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xi(e)}catch(a){Xe(t,t.return,a)}}}function yA(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xi(e)}catch(a){Xe(t,t.return,a)}}function DO(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new CA),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new CA),t;default:throw Error(s(435,e.tag))}}function os(e,t){var a=DO(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var l=wO.bind(null,e,o);o.then(l,l)}})}function Kt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var l=a[o],u=e,S=t,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(mn(R.type)){ot=R.stateNode,Yt=!1;break e}break;case 5:ot=R.stateNode,Yt=!1;break e;case 3:case 4:ot=R.stateNode.containerInfo,Yt=!0;break e}R=R.return}if(ot===null)throw Error(s(160));NA(u,S,l),ot=null,Yt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)LA(t,e),t=t.sibling}var ma=null;function LA(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kt(t,e),Wt(e),o&4&&(cn(3,e,e.return),Mo(3,e),cn(5,e,e.return));break;case 1:Kt(t,e),Wt(e),o&512&&(mt||a===null||pa(a,a.return)),o&64&&xa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var l=ma;if(Kt(t,e),Wt(e),o&512&&(mt||a===null||pa(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[to]||u[Ct]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),It(u,o,a),u[Ct]=e,Rt(u),o=u;break e;case"link":var S=Mf("link","href",l).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(u=S[R],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break t}}u=l.createElement(o),It(u,o,a),l.head.appendChild(u);break;case"meta":if(S=Mf("meta","content",l).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(u=S[R],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break t}}u=l.createElement(o),It(u,o,a),l.head.appendChild(u);break;default:throw Error(s(468,o))}u[Ct]=e,Rt(u),o=u}e.stateNode=o}else Df(l,e.type,e.stateNode);else e.stateNode=Lf(l,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?Df(l,e.type,e.stateNode):Lf(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&yu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Kt(t,e),Wt(e),o&512&&(mt||a===null||pa(a,a.return)),a!==null&&o&4&&yu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Kt(t,e),Wt(e),o&512&&(mt||a===null||pa(a,a.return)),e.flags&32){l=e.stateNode;try{ui(l,"")}catch(Ee){Xe(e,e.return,Ee)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,yu(e,l,a!==null?a.memoizedProps:l)),o&1024&&(Du=!0);break;case 6:if(Kt(t,e),Wt(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ee){Xe(e,e.return,Ee)}}break;case 3:if(Cs=null,l=ma,ma=Rs(t.containerInfo),Kt(t,e),ma=l,Wt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xi(t.containerInfo)}catch(Ee){Xe(e,e.return,Ee)}Du&&(Du=!1,MA(e));break;case 4:o=ma,ma=Rs(e.stateNode.containerInfo),Kt(t,e),Wt(e),ma=o;break;case 12:Kt(t,e),Wt(e);break;case 31:Kt(t,e),Wt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,os(e,o)));break;case 13:Kt(t,e),Wt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ss=We()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,os(e,o)));break;case 22:l=e.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,U=xa,j=mt;if(xa=U||l,mt=j||N,Kt(t,e),mt=j,xa=U,Wt(e),o&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||N||xa||mt||Kn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){N=a=t;try{if(u=N.stateNode,l)S=u.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=N.stateNode;var Z=N.memoizedProps.style,F=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;R.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(Ee){Xe(N,N.return,Ee)}}}else if(t.tag===6){if(a===null){N=t;try{N.stateNode.nodeValue=l?"":N.memoizedProps}catch(Ee){Xe(N,N.return,Ee)}}}else if(t.tag===18){if(a===null){N=t;try{var K=N.stateNode;l?Tf(K,!0):Tf(N.stateNode,!1)}catch(Ee){Xe(N,N.return,Ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,os(e,a))));break;case 19:Kt(t,e),Wt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,os(e,o)));break;case 30:break;case 21:break;default:Kt(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(RA(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,u=Lu(e);is(e,u,l);break;case 5:var S=a.stateNode;a.flags&32&&(ui(S,""),a.flags&=-33);var R=Lu(e);is(e,R,S);break;case 3:case 4:var N=a.stateNode.containerInfo,U=Lu(e);Mu(e,U,N);break;default:throw Error(s(161))}}catch(j){Xe(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function MA(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;MA(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ya(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pA(e,t.alternate,t),t=t.sibling}function Kn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:cn(4,t,t.return),Kn(t);break;case 1:pa(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&mA(t,t.return,a),Kn(t);break;case 27:wo(t.stateNode);case 26:case 5:pa(t,t.return),Kn(t);break;case 22:t.memoizedState===null&&Kn(t);break;case 30:Kn(t);break;default:Kn(t)}e=e.sibling}}function Ka(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,l=e,u=t,S=u.flags;switch(u.tag){case 0:case 11:case 15:Ka(l,u,a),Mo(4,u);break;case 1:if(Ka(l,u,a),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(U){Xe(o,o.return,U)}if(o=u,l=o.updateQueue,l!==null){var R=o.stateNode;try{var N=l.shared.hiddenCallbacks;if(N!==null)for(l.shared.hiddenCallbacks=null,l=0;l<N.length;l++)oS(N[l],R)}catch(U){Xe(o,o.return,U)}}a&&S&64&&hA(u),Do(u,u.return);break;case 27:OA(u);case 26:case 5:Ka(l,u,a),a&&o===null&&S&4&&TA(u),Do(u,u.return);break;case 12:Ka(l,u,a);break;case 31:Ka(l,u,a),a&&S&4&&IA(l,u);break;case 13:Ka(l,u,a),a&&S&4&&yA(l,u);break;case 22:u.memoizedState===null&&Ka(l,u,a),Do(u,u.return);break;case 30:break;default:Ka(l,u,a)}t=t.sibling}}function Pu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fo(a))}function vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fo(e))}function Ta(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)DA(e,t,a,o),t=t.sibling}function DA(e,t,a,o){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ta(e,t,a,o),l&2048&&Mo(9,t);break;case 1:Ta(e,t,a,o);break;case 3:Ta(e,t,a,o),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fo(e)));break;case 12:if(l&2048){Ta(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,S=u.id,R=u.onPostCommit;typeof R=="function"&&R(S,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Xe(t,t.return,N)}}else Ta(e,t,a,o);break;case 31:Ta(e,t,a,o);break;case 13:Ta(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,S=t.alternate,t.memoizedState!==null?u._visibility&2?Ta(e,t,a,o):Po(e,t):u._visibility&2?Ta(e,t,a,o):(u._visibility|=2,Di(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Pu(S,t);break;case 24:Ta(e,t,a,o),l&2048&&vu(t.alternate,t);break;default:Ta(e,t,a,o)}}function Di(e,t,a,o,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,S=t,R=a,N=o,U=S.flags;switch(S.tag){case 0:case 11:case 15:Di(u,S,R,N,l),Mo(8,S);break;case 23:break;case 22:var j=S.stateNode;S.memoizedState!==null?j._visibility&2?Di(u,S,R,N,l):Po(u,S):(j._visibility|=2,Di(u,S,R,N,l)),l&&U&2048&&Pu(S.alternate,S);break;case 24:Di(u,S,R,N,l),l&&U&2048&&vu(S.alternate,S);break;default:Di(u,S,R,N,l)}t=t.sibling}}function Po(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,l=o.flags;switch(o.tag){case 22:Po(a,o),l&2048&&Pu(o.alternate,o);break;case 24:Po(a,o),l&2048&&vu(o.alternate,o);break;default:Po(a,o)}t=t.sibling}}var vo=8192;function Pi(e,t,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)PA(e,t,a),e=e.sibling}function PA(e,t,a){switch(e.tag){case 26:Pi(e,t,a),e.flags&vo&&e.memoizedState!==null&&fC(a,ma,e.memoizedState,e.memoizedProps);break;case 5:Pi(e,t,a);break;case 3:case 4:var o=ma;ma=Rs(e.stateNode.containerInfo),Pi(e,t,a),ma=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=vo,vo=16777216,Pi(e,t,a),vo=o):Pi(e,t,a));break;default:Pi(e,t,a)}}function vA(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Ot=o,bA(o,e)}vA(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)BA(e),e=e.sibling}function BA(e){switch(e.tag){case 0:case 11:case 15:Bo(e),e.flags&2048&&cn(9,e,e.return);break;case 3:Bo(e);break;case 12:Bo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,rs(e)):Bo(e);break;default:Bo(e)}}function rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Ot=o,bA(o,e)}vA(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:cn(8,t,t.return),rs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,rs(t));break;default:rs(t)}e=e.sibling}}function bA(e,t){for(;Ot!==null;){var a=Ot;switch(a.tag){case 0:case 11:case 15:cn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ot=o;else e:for(a=e;Ot!==null;){o=Ot;var l=o.sibling,u=o.return;if(gA(o),o===a){Ot=null;break e}if(l!==null){l.return=u,Ot=l;break e}Ot=u}}}var PO={getCacheForType:function(e){var t=gt(At),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return gt(At).controller.signal}},vO=typeof WeakMap=="function"?WeakMap:Map,Je=0,tt=null,we=null,Ve=0,Ze=0,qt=null,dn=!1,vi=!1,Bu=!1,Wa=0,lt=0,En=0,Wn=0,bu=0,Qt=0,Bi=0,bo=null,zt=null,Hu=!1,ss=0,HA=0,ls=1/0,us=null,Sn=null,Tt=0,An=null,bi=null,za=0,Gu=0,Uu=null,GA=null,Ho=0,Fu=null;function $t(){return(Je&2)!==0&&Ve!==0?Ve&-Ve:D.T!==null?Ku():qd()}function UA(){if(Qt===0)if((Ve&536870912)===0||Ke){var e=mr;mr<<=1,(mr&3932160)===0&&(mr=262144),Qt=e}else Qt=536870912;return e=Zt.current,e!==null&&(e.flags|=32),Qt}function jt(e,t,a){(e===tt&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)&&(Hi(e,0),fn(e,Ve,Qt,!1)),eo(e,a),((Je&2)===0||e!==tt)&&(e===tt&&((Je&2)===0&&(Wn|=a),lt===4&&fn(e,Ve,Qt,!1)),ga(e))}function FA(e,t,a){if((Je&6)!==0)throw Error(s(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||$i(e,t),l=o?HO(e,t):ku(e,t,!0),u=o;do{if(l===0){vi&&!o&&fn(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!BO(a)){l=ku(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){t=S;e:{var R=e;l=bo;var N=R.current.memoizedState.isDehydrated;if(N&&(Hi(R,S).flags|=256),S=ku(R,S,!1),S!==2){if(Bu&&!N){R.errorRecoveryDisabledLanes|=u,Wn|=u,l=4;break e}u=zt,zt=l,u!==null&&(zt===null?zt=u:zt.push.apply(zt,u))}l=S}if(u=!1,l!==2)continue}}if(l===1){Hi(e,0),fn(e,t,0,!0);break}e:{switch(o=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:fn(o,t,Qt,!dn);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=ss+300-We(),10<l)){if(fn(o,t,Qt,!dn),Rr(o,0,!0)!==0)break e;za=t,o.timeoutHandle=ff(wA.bind(null,o,a,zt,us,Hu,t,Qt,Wn,Bi,dn,u,"Throttled",-0,0),l);break e}wA(o,a,zt,us,Hu,t,Qt,Wn,Bi,dn,u,null,-0,0)}}break}while(!0);ga(e)}function wA(e,t,a,o,l,u,S,R,N,U,j,Z,F,K){if(e.timeoutHandle=-1,Z=t.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pa},PA(t,u,Z);var Ee=(u&62914560)===u?ss-We():(u&4194048)===u?HA-We():0;if(Ee=hC(Z,Ee),Ee!==null){za=u,e.cancelPendingCommit=Ee(jA.bind(null,e,t,u,a,o,l,S,R,N,j,Z,null,F,K)),fn(e,u,S,!U);return}}jA(e,t,u,a,o,l,S,R,N)}function BO(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var l=a[o],u=l.getSnapshot;l=l.value;try{if(!_t(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t,a,o){t&=~bu,t&=~Wn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var u=31-St(l),S=1<<u;o[u]=-1,l&=~S}a!==0&&Jd(e,a,t)}function cs(){return(Je&6)===0?(Go(0),!1):!0}function wu(){if(we!==null){if(Ze===0)var e=we.return;else e=we,Ha=Gn=null,eu(e),Ni=null,mo=0,e=we;for(;e!==null;)fA(e.alternate,e),e=e.return;we=null}}function Hi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,QO(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),za=0,wu(),tt=e,we=a=Ba(e.current,null),Ve=t,Ze=0,qt=null,dn=!1,vi=$i(e,t),Bu=!1,Bi=Qt=bu=Wn=En=lt=0,zt=bo=null,Hu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var l=31-St(o),u=1<<l;t|=e[l],o&=~u}return Wa=t,vr(),a}function kA(e,t){Ge=null,D.H=Io,t===gi||t===kr?(t=tS(),Ze=3):t===Yl?(t=tS(),Ze=4):Ze=t===hu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qt=t,we===null&&(lt=1,$r(e,ra(t,e.current)))}function xA(){var e=Zt.current;return e===null?!0:(Ve&4194048)===Ve?ca===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===ca:!1}function VA(){var e=D.H;return D.H=Io,e===null?Io:e}function YA(){var e=D.A;return D.A=PO,e}function ds(){lt=4,dn||(Ve&4194048)!==Ve&&Zt.current!==null||(vi=!0),(En&134217727)===0&&(Wn&134217727)===0||tt===null||fn(tt,Ve,Qt,!1)}function ku(e,t,a){var o=Je;Je|=2;var l=VA(),u=YA();(tt!==e||Ve!==t)&&(us=null,Hi(e,t)),t=!1;var S=lt;e:do try{if(Ze!==0&&we!==null){var R=we,N=qt;switch(Ze){case 8:wu(),S=6;break e;case 3:case 2:case 9:case 6:Zt.current===null&&(t=!0);var U=Ze;if(Ze=0,qt=null,Gi(e,R,N,U),a&&vi){S=0;break e}break;default:U=Ze,Ze=0,qt=null,Gi(e,R,N,U)}}bO(),S=lt;break}catch(j){kA(e,j)}while(!0);return t&&e.shellSuspendCounter++,Ha=Gn=null,Je=o,D.H=l,D.A=u,we===null&&(tt=null,Ve=0,vr()),S}function bO(){for(;we!==null;)KA(we)}function HO(e,t){var a=Je;Je|=2;var o=VA(),l=YA();tt!==e||Ve!==t?(us=null,ls=We()+500,Hi(e,t)):vi=$i(e,t);e:do try{if(Ze!==0&&we!==null){t=we;var u=qt;t:switch(Ze){case 1:Ze=0,qt=null,Gi(e,t,u,1);break;case 2:case 9:if($E(u)){Ze=0,qt=null,WA(t);break}t=function(){Ze!==2&&Ze!==9||tt!==e||(Ze=7),ga(e)},u.then(t,t);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:$E(u)?(Ze=0,qt=null,WA(t)):(Ze=0,qt=null,Gi(e,t,u,7));break;case 5:var S=null;switch(we.tag){case 26:S=we.memoizedState;case 5:case 27:var R=we;if(S?Pf(S):R.stateNode.complete){Ze=0,qt=null;var N=R.sibling;if(N!==null)we=N;else{var U=R.return;U!==null?(we=U,Es(U)):we=null}break t}}Ze=0,qt=null,Gi(e,t,u,5);break;case 6:Ze=0,qt=null,Gi(e,t,u,6);break;case 8:wu(),lt=6;break e;default:throw Error(s(462))}}GO();break}catch(j){kA(e,j)}while(!0);return Ha=Gn=null,D.H=o,D.A=l,Je=a,we!==null?0:(tt=null,Ve=0,vr(),lt)}function GO(){for(;we!==null&&!et();)KA(we)}function KA(e){var t=SA(e.alternate,e,Wa);e.memoizedProps=e.pendingProps,t===null?Es(e):we=t}function WA(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=sA(a,t,t.pendingProps,t.type,void 0,Ve);break;case 11:t=sA(a,t,t.pendingProps,t.type.render,t.ref,Ve);break;case 5:eu(t);default:fA(a,t),t=we=YE(t,Wa),t=SA(a,t,Wa)}e.memoizedProps=e.pendingProps,t===null?Es(e):we=t}function Gi(e,t,a,o){Ha=Gn=null,eu(t),Ni=null,mo=0;var l=t.return;try{if(gO(e,l,t,a,Ve)){lt=1,$r(e,ra(a,e.current)),we=null;return}}catch(u){if(l!==null)throw we=l,u;lt=1,$r(e,ra(a,e.current)),we=null;return}t.flags&32768?(Ke||o===1?e=!0:vi||(Ve&536870912)!==0?e=!1:(dn=e=!0,(o===2||o===9||o===3||o===6)&&(o=Zt.current,o!==null&&o.tag===13&&(o.flags|=16384))),zA(t,e)):Es(t)}function Es(e){var t=e;do{if((t.flags&32768)!==0){zA(t,dn);return}e=t.return;var a=yO(t.alternate,t,Wa);if(a!==null){we=a;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);lt===0&&(lt=5)}function zA(e,t){do{var a=LO(e.alternate,e);if(a!==null){a.flags&=32767,we=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){we=e;return}we=e=a}while(e!==null);lt=6,we=null}function jA(e,t,a,o,l,u,S,R,N){e.cancelPendingCommit=null;do Ss();while(Tt!==0);if((Je&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Ll,AR(e,a,u,S,R,N),e===tt&&(we=tt=null,Ve=0),bi=t,An=e,za=a,Gu=u,Uu=l,GA=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kO(be,function(){return qA(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,l=q.p,q.p=2,S=Je,Je|=4;try{MO(e,t,a)}finally{Je=S,q.p=l,D.T=o}}Tt=1,_A(),JA(),ZA()}}function _A(){if(Tt===1){Tt=0;var e=An,t=bi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=q.p;q.p=2;var l=Je;Je|=4;try{LA(t,e);var u=qu,S=bE(e.containerInfo),R=u.focusedElem,N=u.selectionRange;if(S!==R&&R&&R.ownerDocument&&BE(R.ownerDocument.documentElement,R)){if(N!==null&&pl(R)){var U=N.start,j=N.end;if(j===void 0&&(j=U),"selectionStart"in R)R.selectionStart=U,R.selectionEnd=Math.min(j,R.value.length);else{var Z=R.ownerDocument||document,F=Z&&Z.defaultView||window;if(F.getSelection){var K=F.getSelection(),Ee=R.textContent.length,Me=Math.min(N.start,Ee),$e=N.end===void 0?Me:Math.min(N.end,Ee);!K.extend&&Me>$e&&(S=$e,$e=Me,Me=S);var v=vE(R,Me),M=vE(R,$e);if(v&&M&&(K.rangeCount!==1||K.anchorNode!==v.node||K.anchorOffset!==v.offset||K.focusNode!==M.node||K.focusOffset!==M.offset)){var G=Z.createRange();G.setStart(v.node,v.offset),K.removeAllRanges(),Me>$e?(K.addRange(G),K.extend(M.node,M.offset)):(G.setEnd(M.node,M.offset),K.addRange(G))}}}}for(Z=[],K=R;K=K.parentNode;)K.nodeType===1&&Z.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Z.length;R++){var _=Z[R];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Is=!!Xu,qu=Xu=null}finally{Je=l,q.p=o,D.T=a}}e.current=t,Tt=2}}function JA(){if(Tt===2){Tt=0;var e=An,t=bi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=q.p;q.p=2;var l=Je;Je|=4;try{pA(e,t.alternate,t)}finally{Je=l,q.p=o,D.T=a}}Tt=3}}function ZA(){if(Tt===4||Tt===3){Tt=0,Fe();var e=An,t=bi,a=za,o=GA;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Tt=5:(Tt=0,bi=An=null,XA(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Sn=null),nl(a),t=t.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(qa,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=D.T,l=q.p,q.p=2,D.T=null;try{for(var u=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];u(R.value,{componentStack:R.stack})}}finally{D.T=t,q.p=l}}(za&3)!==0&&Ss(),ga(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Fu?Ho++:(Ho=0,Fu=e):Ho=0,Go(0)}}function XA(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fo(t)))}function Ss(){return _A(),JA(),ZA(),qA()}function qA(){if(Tt!==5)return!1;var e=An,t=Gu;Gu=0;var a=nl(za),o=D.T,l=q.p;try{q.p=32>a?32:a,D.T=null,a=Uu,Uu=null;var u=An,S=za;if(Tt=0,bi=An=null,za=0,(Je&6)!==0)throw Error(s(331));var R=Je;if(Je|=4,BA(u.current),DA(u,u.current,S,a),Je=R,Go(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(qa,u)}catch{}return!0}finally{q.p=l,D.T=o,XA(e,t)}}function QA(e,t,a){t=ra(a,t),t=fu(e.stateNode,t,2),e=sn(e,t,2),e!==null&&(eo(e,2),ga(e))}function Xe(e,t,a){if(e.tag===3)QA(e,e,a);else for(;t!==null;){if(t.tag===3){QA(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Sn===null||!Sn.has(o))){e=ra(a,e),a=$S(2),o=sn(t,a,2),o!==null&&(eA(a,o,t,e),eo(o,2),ga(o));break}}t=t.return}}function xu(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new vO;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(a)||(Bu=!0,l.add(a),e=UO.bind(null,e,t,a),t.then(e,e))}function UO(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,tt===e&&(Ve&a)===a&&(lt===4||lt===3&&(Ve&62914560)===Ve&&300>We()-ss?(Je&2)===0&&Hi(e,0):bu|=a,Bi===Ve&&(Bi=0)),ga(e)}function $A(e,t){t===0&&(t=_d()),e=Bn(e,t),e!==null&&(eo(e,t),ga(e))}function FO(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),$A(e,a)}function wO(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(t),$A(e,a)}function kO(e,t){return Re(e,t)}var As=null,Ui=null,Vu=!1,fs=!1,Yu=!1,hn=0;function ga(e){e!==Ui&&e.next===null&&(Ui===null?As=Ui=e:Ui=Ui.next=e),fs=!0,Vu||(Vu=!0,VO())}function Go(e,t){if(!Yu&&fs){Yu=!0;do for(var a=!1,o=As;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var S=o.suspendedLanes,R=o.pingedLanes;u=(1<<31-St(42|e)+1)-1,u&=l&~(S&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,nf(o,u))}else u=Ve,u=Rr(o,o===tt?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||$i(o,u)||(a=!0,nf(o,u));o=o.next}while(a);Yu=!1}}function xO(){ef()}function ef(){fs=Vu=!1;var e=0;hn!==0&&qO()&&(e=hn);for(var t=We(),a=null,o=As;o!==null;){var l=o.next,u=tf(o,t);u===0?(o.next=null,a===null?As=l:a.next=l,l===null&&(Ui=a)):(a=o,(e!==0||(u&3)!==0)&&(fs=!0)),o=l}Tt!==0&&Tt!==5||Go(e),hn!==0&&(hn=0)}function tf(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var S=31-St(u),R=1<<S,N=l[S];N===-1?((R&a)===0||(R&o)!==0)&&(l[S]=SR(R,t)):N<=t&&(e.expiredLanes|=R),u&=~R}if(t=tt,a=Ve,a=Rr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ge(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$i(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&ge(o),nl(a)){case 2:case 8:a=Pe;break;case 32:a=be;break;case 268435456:a=ve;break;default:a=be}return o=af.bind(null,e),a=Re(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&ge(o),e.callbackPriority=2,e.callbackNode=null,2}function af(e,t){if(Tt!==0&&Tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ss()&&e.callbackNode!==a)return null;var o=Ve;return o=Rr(e,e===tt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(FA(e,o,t),tf(e,We()),e.callbackNode!=null&&e.callbackNode===a?af.bind(null,e):null)}function nf(e,t){if(Ss())return null;FA(e,t,!0)}function VO(){$O(function(){(Je&6)!==0?Re(ze,xO):ef()})}function Ku(){if(hn===0){var e=Ci;e===0&&(e=hr,hr<<=1,(hr&261888)===0&&(hr=256)),hn=e}return hn}function of(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gr(""+e)}function rf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function YO(e,t,a,o,l){if(t==="submit"&&a&&a.stateNode===l){var u=of((l[xt]||null).action),S=o.submitter;S&&(t=(t=S[xt]||null)?of(t.formAction):S.getAttribute("formAction"),t!==null&&(u=t,S=null));var R=new Lr("action","action",null,o,l);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(hn!==0){var N=S?rf(l,S):new FormData(l);uu(a,{pending:!0,data:N,method:l.method,action:u},null,N)}}else typeof u=="function"&&(R.preventDefault(),N=S?rf(l,S):new FormData(l),uu(a,{pending:!0,data:N,method:l.method,action:u},u,N))},currentTarget:l}]})}}for(var Wu=0;Wu<yl.length;Wu++){var zu=yl[Wu],KO=zu.toLowerCase(),WO=zu[0].toUpperCase()+zu.slice(1);ha(KO,"on"+WO)}ha(UE,"onAnimationEnd"),ha(FE,"onAnimationIteration"),ha(wE,"onAnimationStart"),ha("dblclick","onDoubleClick"),ha("focusin","onFocus"),ha("focusout","onBlur"),ha(rO,"onTransitionRun"),ha(sO,"onTransitionStart"),ha(lO,"onTransitionCancel"),ha(kE,"onTransitionEnd"),si("onMouseEnter",["mouseout","mouseover"]),si("onMouseLeave",["mouseout","mouseover"]),si("onPointerEnter",["pointerout","pointerover"]),si("onPointerLeave",["pointerout","pointerover"]),Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function sf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var S=o.length-1;0<=S;S--){var R=o[S],N=R.instance,U=R.currentTarget;if(R=R.listener,N!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=U;try{u(l)}catch(j){Pr(j)}l.currentTarget=null,u=N}else for(S=0;S<o.length;S++){if(R=o[S],N=R.instance,U=R.currentTarget,R=R.listener,N!==u&&l.isPropagationStopped())break e;u=R,l.currentTarget=U;try{u(l)}catch(j){Pr(j)}l.currentTarget=null,u=N}}}}function ke(e,t){var a=t[il];a===void 0&&(a=t[il]=new Set);var o=e+"__bubble";a.has(o)||(lf(t,e,2,!1),a.add(o))}function ju(e,t,a){var o=0;t&&(o|=4),lf(a,e,o,t)}var hs="_reactListening"+Math.random().toString(36).slice(2);function _u(e){if(!e[hs]){e[hs]=!0,eE.forEach(function(a){a!=="selectionchange"&&(zO.has(a)||ju(a,!1,e),ju(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hs]||(t[hs]=!0,ju("selectionchange",!1,t))}}function lf(e,t,a,o){switch(Ff(t)){case 2:var l=RC;break;case 8:l=OC;break;default:l=lc}a=l.bind(null,t,a,e),l=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Ju(e,t,a,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===l)break;if(S===4)for(S=o.return;S!==null;){var N=S.tag;if((N===3||N===4)&&S.stateNode.containerInfo===l)return;S=S.return}for(;R!==null;){if(S=ii(R),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){o=u=S;continue e}R=R.parentNode}}o=o.return}EE(function(){var U=u,j=dl(a),Z=[];e:{var F=xE.get(e);if(F!==void 0){var K=Lr,Ee=e;switch(e){case"keypress":if(Ir(a)===0)break e;case"keydown":case"keyup":K=wR;break;case"focusin":Ee="focus",K=ml;break;case"focusout":Ee="blur",K=ml;break;case"beforeblur":case"afterblur":K=ml;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=fE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=yR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=VR;break;case UE:case FE:case wE:K=DR;break;case kE:K=KR;break;case"scroll":case"scrollend":K=NR;break;case"wheel":K=zR;break;case"copy":case"cut":case"paste":K=vR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=mE;break;case"toggle":case"beforetoggle":K=_R}var Me=(t&4)!==0,$e=!Me&&(e==="scroll"||e==="scrollend"),v=Me?F!==null?F+"Capture":null:F;Me=[];for(var M=U,G;M!==null;){var _=M;if(G=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||G===null||v===null||(_=no(M,v),_!=null&&Me.push(Fo(M,_,G))),$e)break;M=M.return}0<Me.length&&(F=new K(F,Ee,null,a,j),Z.push({event:F,listeners:Me}))}}if((t&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",F&&a!==cl&&(Ee=a.relatedTarget||a.fromElement)&&(ii(Ee)||Ee[ni]))break e;if((K||F)&&(F=j.window===j?j:(F=j.ownerDocument)?F.defaultView||F.parentWindow:window,K?(Ee=a.relatedTarget||a.toElement,K=U,Ee=Ee?ii(Ee):null,Ee!==null&&($e=E(Ee),Me=Ee.tag,Ee!==$e||Me!==5&&Me!==27&&Me!==6)&&(Ee=null)):(K=null,Ee=U),K!==Ee)){if(Me=fE,_="onMouseLeave",v="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(Me=mE,_="onPointerLeave",v="onPointerEnter",M="pointer"),$e=K==null?F:ao(K),G=Ee==null?F:ao(Ee),F=new Me(_,M+"leave",K,a,j),F.target=$e,F.relatedTarget=G,_=null,ii(j)===U&&(Me=new Me(v,M+"enter",Ee,a,j),Me.target=G,Me.relatedTarget=$e,_=Me),$e=_,K&&Ee)t:{for(Me=jO,v=K,M=Ee,G=0,_=v;_;_=Me(_))G++;_=0;for(var Ne=M;Ne;Ne=Me(Ne))_++;for(;0<G-_;)v=Me(v),G--;for(;0<_-G;)M=Me(M),_--;for(;G--;){if(v===M||M!==null&&v===M.alternate){Me=v;break t}v=Me(v),M=Me(M)}Me=null}else Me=null;K!==null&&uf(Z,F,K,Me,!1),Ee!==null&&$e!==null&&uf(Z,$e,Ee,Me,!0)}}e:{if(F=U?ao(U):window,K=F.nodeName&&F.nodeName.toLowerCase(),K==="select"||K==="input"&&F.type==="file")var je=IE;else if(gE(F))if(yE)je=nO;else{je=tO;var he=eO}else K=F.nodeName,!K||K.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?U&&ul(U.elementType)&&(je=IE):je=aO;if(je&&(je=je(e,U))){NE(Z,je,a,j);break e}he&&he(e,F,U),e==="focusout"&&U&&F.type==="number"&&U.memoizedProps.value!=null&&ll(F,"number",F.value)}switch(he=U?ao(U):window,e){case"focusin":(gE(he)||he.contentEditable==="true")&&(Si=he,gl=U,Eo=null);break;case"focusout":Eo=gl=Si=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,HE(Z,a,j);break;case"selectionchange":if(oO)break;case"keydown":case"keyup":HE(Z,a,j)}var Ue;if(Rl)e:{switch(e){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else Ei?CE(e,a)&&(Ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ye="onCompositionStart");Ye&&(TE&&a.locale!=="ko"&&(Ei||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&Ei&&(Ue=SE()):($a=j,Al="value"in $a?$a.value:$a.textContent,Ei=!0)),he=ms(U,Ye),0<he.length&&(Ye=new hE(Ye,e,null,a,j),Z.push({event:Ye,listeners:he}),Ue?Ye.data=Ue:(Ue=pE(a),Ue!==null&&(Ye.data=Ue)))),(Ue=ZR?XR(e,a):qR(e,a))&&(Ye=ms(U,"onBeforeInput"),0<Ye.length&&(he=new hE("onBeforeInput","beforeinput",null,a,j),Z.push({event:he,listeners:Ye}),he.data=Ue)),YO(Z,e,U,a,j)}sf(Z,t)})}function Fo(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ms(e,t){for(var a=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=no(e,a),l!=null&&o.unshift(Fo(e,l,u)),l=no(e,t),l!=null&&o.push(Fo(e,l,u))),e.tag===3)return o;e=e.return}return[]}function jO(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function uf(e,t,a,o,l){for(var u=t._reactName,S=[];a!==null&&a!==o;){var R=a,N=R.alternate,U=R.stateNode;if(R=R.tag,N!==null&&N===o)break;R!==5&&R!==26&&R!==27||U===null||(N=U,l?(U=no(a,u),U!=null&&S.unshift(Fo(a,U,N))):l||(U=no(a,u),U!=null&&S.push(Fo(a,U,N)))),a=a.return}S.length!==0&&e.push({event:t,listeners:S})}var _O=/\r\n?/g,JO=/\u0000|\uFFFD/g;function cf(e){return(typeof e=="string"?e:""+e).replace(_O,`
`).replace(JO,"")}function df(e,t){return t=cf(t),cf(e)===t}function Qe(e,t,a,o,l,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||ui(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&ui(e,""+o);break;case"className":Cr(e,"class",o);break;case"tabIndex":Cr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Cr(e,a,o);break;case"style":cE(e,o,u);break;case"data":if(t!=="object"){Cr(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gr(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Qe(e,t,"name",l.name,l,null),Qe(e,t,"formEncType",l.formEncType,l,null),Qe(e,t,"formMethod",l.formMethod,l,null),Qe(e,t,"formTarget",l.formTarget,l,null)):(Qe(e,t,"encType",l.encType,l,null),Qe(e,t,"method",l.method,l,null),Qe(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gr(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Pa);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ke("beforetoggle",e),ke("toggle",e),Or(e,"popover",o);break;case"xlinkActuate":Da(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Da(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Da(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Da(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Da(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Da(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Da(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Da(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Da(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Or(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pR.get(a)||a,Or(e,a,o))}}function Zu(e,t,a,o,l,u){switch(a){case"style":cE(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ui(e,o):(typeof o=="number"||typeof o=="bigint")&&ui(e,""+o);break;case"onScroll":o!=null&&ke("scroll",e);break;case"onScrollEnd":o!=null&&ke("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tE.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[xt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,l);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Or(e,a,o)}}}function It(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",e),ke("load",e);var o=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var S=a[u];if(S!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Qe(e,t,u,S,a,null)}}l&&Qe(e,t,"srcSet",a.srcSet,a,null),o&&Qe(e,t,"src",a.src,a,null);return;case"input":ke("invalid",e);var R=u=S=l=null,N=null,U=null;for(o in a)if(a.hasOwnProperty(o)){var j=a[o];if(j!=null)switch(o){case"name":l=j;break;case"type":S=j;break;case"checked":N=j;break;case"defaultChecked":U=j;break;case"value":u=j;break;case"defaultValue":R=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,t));break;default:Qe(e,t,o,j,a,null)}}rE(e,u,R,N,U,S,l,!1);return;case"select":ke("invalid",e),o=S=u=null;for(l in a)if(a.hasOwnProperty(l)&&(R=a[l],R!=null))switch(l){case"value":u=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Qe(e,t,l,R,a,null)}t=u,a=S,e.multiple=!!o,t!=null?li(e,!!o,t,!1):a!=null&&li(e,!!o,a,!0);return;case"textarea":ke("invalid",e),u=l=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":l=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Qe(e,t,S,R,a,null)}lE(e,o,l,u);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(o=a[N],o!=null))switch(N){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qe(e,t,N,o,a,null)}return;case"dialog":ke("beforetoggle",e),ke("toggle",e),ke("cancel",e),ke("close",e);break;case"iframe":case"object":ke("load",e);break;case"video":case"audio":for(o=0;o<Uo.length;o++)ke(Uo[o],e);break;case"image":ke("error",e),ke("load",e);break;case"details":ke("toggle",e);break;case"embed":case"source":case"link":ke("error",e),ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(o=a[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Qe(e,t,U,o,a,null)}return;default:if(ul(t)){for(j in a)a.hasOwnProperty(j)&&(o=a[j],o!==void 0&&Zu(e,t,j,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Qe(e,t,R,o,a,null))}function ZO(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,S=null,R=null,N=null,U=null,j=null;for(K in a){var Z=a[K];if(a.hasOwnProperty(K)&&Z!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":N=Z;default:o.hasOwnProperty(K)||Qe(e,t,K,null,o,Z)}}for(var F in o){var K=o[F];if(Z=a[F],o.hasOwnProperty(F)&&(K!=null||Z!=null))switch(F){case"type":u=K;break;case"name":l=K;break;case"checked":U=K;break;case"defaultChecked":j=K;break;case"value":S=K;break;case"defaultValue":R=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,t));break;default:K!==Z&&Qe(e,t,F,K,o,Z)}}sl(e,S,R,N,U,j,u,l);return;case"select":K=S=R=F=null;for(u in a)if(N=a[u],a.hasOwnProperty(u)&&N!=null)switch(u){case"value":break;case"multiple":K=N;default:o.hasOwnProperty(u)||Qe(e,t,u,null,o,N)}for(l in o)if(u=o[l],N=a[l],o.hasOwnProperty(l)&&(u!=null||N!=null))switch(l){case"value":F=u;break;case"defaultValue":R=u;break;case"multiple":S=u;default:u!==N&&Qe(e,t,l,u,o,N)}t=R,a=S,o=K,F!=null?li(e,!!a,F,!1):!!o!=!!a&&(t!=null?li(e,!!a,t,!0):li(e,!!a,a?[]:"",!1));return;case"textarea":K=F=null;for(R in a)if(l=a[R],a.hasOwnProperty(R)&&l!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Qe(e,t,R,null,o,l)}for(S in o)if(l=o[S],u=a[S],o.hasOwnProperty(S)&&(l!=null||u!=null))switch(S){case"value":F=l;break;case"defaultValue":K=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Qe(e,t,S,l,o,u)}sE(e,F,K);return;case"option":for(var Ee in a)if(F=a[Ee],a.hasOwnProperty(Ee)&&F!=null&&!o.hasOwnProperty(Ee))switch(Ee){case"selected":e.selected=!1;break;default:Qe(e,t,Ee,null,o,F)}for(N in o)if(F=o[N],K=a[N],o.hasOwnProperty(N)&&F!==K&&(F!=null||K!=null))switch(N){case"selected":e.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:Qe(e,t,N,F,o,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in a)F=a[Me],a.hasOwnProperty(Me)&&F!=null&&!o.hasOwnProperty(Me)&&Qe(e,t,Me,null,o,F);for(U in o)if(F=o[U],K=a[U],o.hasOwnProperty(U)&&F!==K&&(F!=null||K!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,t));break;default:Qe(e,t,U,F,o,K)}return;default:if(ul(t)){for(var $e in a)F=a[$e],a.hasOwnProperty($e)&&F!==void 0&&!o.hasOwnProperty($e)&&Zu(e,t,$e,void 0,o,F);for(j in o)F=o[j],K=a[j],!o.hasOwnProperty(j)||F===K||F===void 0&&K===void 0||Zu(e,t,j,F,o,K);return}}for(var v in a)F=a[v],a.hasOwnProperty(v)&&F!=null&&!o.hasOwnProperty(v)&&Qe(e,t,v,null,o,F);for(Z in o)F=o[Z],K=a[Z],!o.hasOwnProperty(Z)||F===K||F==null&&K==null||Qe(e,t,Z,F,o,K)}function Ef(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XO(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var l=a[o],u=l.transferSize,S=l.initiatorType,R=l.duration;if(u&&R&&Ef(S)){for(S=0,R=l.responseEnd,o+=1;o<a.length;o++){var N=a[o],U=N.startTime;if(U>R)break;var j=N.transferSize,Z=N.initiatorType;j&&Ef(Z)&&(N=N.responseEnd,S+=j*(N<R?1:(R-U)/(N-U)))}if(--o,t+=8*(u+S)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xu=null,qu=null;function Ts(e){return e.nodeType===9?e:e.ownerDocument}function Sf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Af(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $u=null;function qO(){var e=window.event;return e&&e.type==="popstate"?e===$u?!1:($u=e,!0):($u=null,!1)}var ff=typeof setTimeout=="function"?setTimeout:void 0,QO=typeof clearTimeout=="function"?clearTimeout:void 0,hf=typeof Promise=="function"?Promise:void 0,$O=typeof queueMicrotask=="function"?queueMicrotask:typeof hf<"u"?function(e){return hf.resolve(null).then(e).catch(eC)}:ff;function eC(e){setTimeout(function(){throw e})}function mn(e){return e==="head"}function mf(e,t){var a=t,o=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(l),xi(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")wo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,wo(a);for(var u=a.firstChild;u;){var S=u.nextSibling,R=u.nodeName;u[to]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=S}}else a==="body"&&wo(e.ownerDocument.body);a=l}while(a);xi(t)}function Tf(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ec(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ec(a),ol(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function tC(e,t,a,o){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[to])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=da(e.nextSibling),e===null)break}return null}function aC(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=da(e.nextSibling),e===null))return null;return e}function Rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=da(e.nextSibling),e===null))return null;return e}function tc(e){return e.data==="$?"||e.data==="$~"}function ac(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function nC(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function da(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var nc=null;function Of(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return da(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function pf(e,t,a){switch(t=Ts(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function wo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ol(e)}var Ea=new Map,gf=new Set;function Rs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ja=q.d;q.d={f:iC,r:oC,D:rC,C:sC,L:lC,m:uC,X:dC,S:cC,M:EC};function iC(){var e=ja.f(),t=cs();return e||t}function oC(e){var t=oi(e);t!==null&&t.tag===5&&t.type==="form"?kS(t):ja.r(e)}var Fi=typeof document>"u"?null:document;function Nf(e,t,a){var o=Fi;if(o&&typeof t=="string"&&t){var l=ia(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),gf.has(l)||(gf.add(l),e={rel:e,crossOrigin:a,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),It(t,"link",e),Rt(t),o.head.appendChild(t)))}}function rC(e){ja.D(e),Nf("dns-prefetch",e,null)}function sC(e,t){ja.C(e,t),Nf("preconnect",e,t)}function lC(e,t,a){ja.L(e,t,a);var o=Fi;if(o&&e&&t){var l='link[rel="preload"][as="'+ia(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+ia(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+ia(a.imageSizes)+'"]')):l+='[href="'+ia(e)+'"]';var u=l;switch(t){case"style":u=wi(e);break;case"script":u=ki(e)}Ea.has(u)||(e=m({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ea.set(u,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(ko(u))||t==="script"&&o.querySelector(xo(u))||(t=o.createElement("link"),It(t,"link",e),Rt(t),o.head.appendChild(t)))}}function uC(e,t){ja.m(e,t);var a=Fi;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ia(o)+'"][href="'+ia(e)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ki(e)}if(!Ea.has(u)&&(e=m({rel:"modulepreload",href:e},t),Ea.set(u,e),a.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(u)))return}o=a.createElement("link"),It(o,"link",e),Rt(o),a.head.appendChild(o)}}}function cC(e,t,a){ja.S(e,t,a);var o=Fi;if(o&&e){var l=ri(o).hoistableStyles,u=wi(e);t=t||"default";var S=l.get(u);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(ko(u)))R.loading=5;else{e=m({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ea.get(u))&&ic(e,a);var N=S=o.createElement("link");Rt(N),It(N,"link",e),N._p=new Promise(function(U,j){N.onload=U,N.onerror=j}),N.addEventListener("load",function(){R.loading|=1}),N.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Os(S,t,o)}S={type:"stylesheet",instance:S,count:1,state:R},l.set(u,S)}}}function dC(e,t){ja.X(e,t);var a=Fi;if(a&&e){var o=ri(a).hoistableScripts,l=ki(e),u=o.get(l);u||(u=a.querySelector(xo(l)),u||(e=m({src:e,async:!0},t),(t=Ea.get(l))&&oc(e,t),u=a.createElement("script"),Rt(u),It(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function EC(e,t){ja.M(e,t);var a=Fi;if(a&&e){var o=ri(a).hoistableScripts,l=ki(e),u=o.get(l);u||(u=a.querySelector(xo(l)),u||(e=m({src:e,async:!0,type:"module"},t),(t=Ea.get(l))&&oc(e,t),u=a.createElement("script"),Rt(u),It(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function If(e,t,a,o){var l=(l=x.current)?Rs(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=wi(a.href),a=ri(l).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=wi(a.href);var u=ri(l).hoistableStyles,S=u.get(e);if(S||(l=l.ownerDocument||l,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,S),(u=l.querySelector(ko(e)))&&!u._p&&(S.instance=u,S.state.loading=5),Ea.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ea.set(e,a),u||SC(l,e,a,S.state))),t&&o===null)throw Error(s(528,""));return S}if(t&&o!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ki(a),a=ri(l).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function wi(e){return'href="'+ia(e)+'"'}function ko(e){return'link[rel="stylesheet"]['+e+"]"}function yf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function SC(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),It(t,"link",a),Rt(t),e.head.appendChild(t))}function ki(e){return'[src="'+ia(e)+'"]'}function xo(e){return"script[async]"+e}function Lf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+ia(a.href)+'"]');if(o)return t.instance=o,Rt(o),o;var l=m({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Rt(o),It(o,"style",l),Os(o,a.precedence,e),t.instance=o;case"stylesheet":l=wi(a.href);var u=e.querySelector(ko(l));if(u)return t.state.loading|=4,t.instance=u,Rt(u),u;o=yf(a),(l=Ea.get(l))&&ic(o,l),u=(e.ownerDocument||e).createElement("link"),Rt(u);var S=u;return S._p=new Promise(function(R,N){S.onload=R,S.onerror=N}),It(u,"link",o),t.state.loading|=4,Os(u,a.precedence,e),t.instance=u;case"script":return u=ki(a.src),(l=e.querySelector(xo(u)))?(t.instance=l,Rt(l),l):(o=a,(l=Ea.get(u))&&(o=m({},a),oc(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),Rt(l),It(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Os(o,a.precedence,e));return t.instance}function Os(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===t)u=R;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ic(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cs=null;function Mf(e,t,a){if(Cs===null){var o=new Map,l=Cs=new Map;l.set(a,o)}else l=Cs,o=l.get(a),o||(o=new Map,l.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[to]||u[Ct]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var S=u.getAttribute(t)||"";S=e+S;var R=o.get(S);R?R.push(u):o.set(S,[u])}}return o}function Df(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function AC(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fC(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=wi(o.href),u=t.querySelector(ko(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ps.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Rt(u);return}u=t.ownerDocument||t,o=yf(o),(l=Ea.get(l))&&ic(o,l),u=u.createElement("link"),Rt(u);var S=u;S._p=new Promise(function(R,N){S.onload=R,S.onerror=N}),It(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ps.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var rc=0;function hC(e,t){return e.stylesheets&&e.count===0&&Ns(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ns(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&rc===0&&(rc=62500*XO());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ns(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>rc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function ps(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ns(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gs=null;function Ns(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gs=new Map,t.forEach(mC,e),gs=null,ps.call(e))}function mC(e,t){if(!(t.state.loading&4)){var a=gs.get(e);if(a)var o=a.get(null);else{a=new Map,gs.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var S=l[u];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}l=t.instance,S=l.getAttribute("data-precedence"),u=a.get(S)||o,u===o&&a.set(null,l),a.set(S,l),this.count++,o=ps.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Vo={$$typeof:W,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function TC(e,t,a,o,l,u,S,R,N){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tl(0),this.hiddenUpdates=tl(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function vf(e,t,a,o,l,u,S,R,N,U,j,Z){return e=new TC(e,t,a,S,N,U,j,Z,R),t=1,u===!0&&(t|=24),u=Jt(3,null,null,t),e.current=u,u.stateNode=e,t=kl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},Kl(u),e}function Bf(e){return e?(e=hi,e):hi}function bf(e,t,a,o,l,u){l=Bf(l),o.context===null?o.context=l:o.pendingContext=l,o=rn(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=sn(e,o,t),a!==null&&(jt(a,e,t),Ro(a,e,t))}function Hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function sc(e,t){Hf(e,t),(e=e.alternate)&&Hf(e,t)}function Gf(e){if(e.tag===13||e.tag===31){var t=Bn(e,67108864);t!==null&&jt(t,e,67108864),sc(e,67108864)}}function Uf(e){if(e.tag===13||e.tag===31){var t=$t();t=al(t);var a=Bn(e,t);a!==null&&jt(a,e,t),sc(e,t)}}var Is=!0;function RC(e,t,a,o){var l=D.T;D.T=null;var u=q.p;try{q.p=2,lc(e,t,a,o)}finally{q.p=u,D.T=l}}function OC(e,t,a,o){var l=D.T;D.T=null;var u=q.p;try{q.p=8,lc(e,t,a,o)}finally{q.p=u,D.T=l}}function lc(e,t,a,o){if(Is){var l=uc(o);if(l===null)Ju(e,t,o,ys,a),wf(e,o);else if(pC(l,e,t,a,o))o.stopPropagation();else if(wf(e,o),t&4&&-1<CC.indexOf(e)){for(;l!==null;){var u=oi(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var S=Ln(u.pendingLanes);if(S!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var N=1<<31-St(S);R.entanglements[1]|=N,S&=~N}ga(u),(Je&6)===0&&(ls=We()+500,Go(0))}}break;case 31:case 13:R=Bn(u,2),R!==null&&jt(R,u,2),cs(),sc(u,2)}if(u=uc(o),u===null&&Ju(e,t,o,ys,a),u===l)break;l=u}l!==null&&o.stopPropagation()}else Ju(e,t,o,null,a)}}function uc(e){return e=dl(e),cc(e)}var ys=null;function cc(e){if(ys=null,e=ii(e),e!==null){var t=E(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ys=e,null}function Ff(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fa()){case ze:return 2;case Pe:return 8;case be:case xe:return 32;case ve:return 268435456;default:return 32}default:return 32}}var dc=!1,Tn=null,Rn=null,On=null,Yo=new Map,Ko=new Map,Cn=[],CC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wf(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Yo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function Wo(e,t,a,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=oi(t),t!==null&&Gf(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function pC(e,t,a,o,l){switch(t){case"focusin":return Tn=Wo(Tn,e,t,a,o,l),!0;case"dragenter":return Rn=Wo(Rn,e,t,a,o,l),!0;case"mouseover":return On=Wo(On,e,t,a,o,l),!0;case"pointerover":var u=l.pointerId;return Yo.set(u,Wo(Yo.get(u)||null,e,t,a,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Ko.set(u,Wo(Ko.get(u)||null,e,t,a,o,l)),!0}return!1}function kf(e){var t=ii(e.target);if(t!==null){var a=E(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,Qd(e.priority,function(){Uf(a)});return}}else if(t===31){if(t=A(a),t!==null){e.blockedOn=t,Qd(e.priority,function(){Uf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=uc(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);cl=o,a.target.dispatchEvent(o),cl=null}else return t=oi(a),t!==null&&Gf(t),e.blockedOn=a,!1;t.shift()}return!0}function xf(e,t,a){Ls(e)&&a.delete(t)}function gC(){dc=!1,Tn!==null&&Ls(Tn)&&(Tn=null),Rn!==null&&Ls(Rn)&&(Rn=null),On!==null&&Ls(On)&&(On=null),Yo.forEach(xf),Ko.forEach(xf)}function Ms(e,t){e.blockedOn===t&&(e.blockedOn=null,dc||(dc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,gC)))}var Ds=null;function Vf(e){Ds!==e&&(Ds=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ds===e&&(Ds=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(cc(o||a)===null)continue;break}var u=oi(a);u!==null&&(e.splice(t,3),t-=3,uu(u,{pending:!0,data:l,method:a.method,action:o},o,l))}}))}function xi(e){function t(N){return Ms(N,e)}Tn!==null&&Ms(Tn,e),Rn!==null&&Ms(Rn,e),On!==null&&Ms(On,e),Yo.forEach(t),Ko.forEach(t);for(var a=0;a<Cn.length;a++){var o=Cn[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Cn.length&&(a=Cn[0],a.blockedOn===null);)kf(a),a.blockedOn===null&&Cn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var l=a[o],u=a[o+1],S=l[xt]||null;if(typeof u=="function")S||Vf(a);else if(S){var R=null;if(u&&u.hasAttribute("formAction")){if(l=u,S=u[xt]||null)R=S.formAction;else if(cc(l)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Vf(a)}}}function Yf(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(S){return l=S})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ec(e){this._internalRoot=e}Ps.prototype.render=Ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,o=$t();bf(a,o,e,t,null,null)},Ps.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bf(e.current,2,null,e,null,null),cs(),t[ni]=null}};function Ps(e){this._internalRoot=e}Ps.prototype.unstable_scheduleHydration=function(e){if(e){var t=qd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Cn.length&&t!==0&&t<Cn[a].priority;a++);Cn.splice(a,0,e),a===0&&kf(e)}};var Kf=i.version;if(Kf!=="19.2.3")throw Error(s(527,Kf,"19.2.3"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=f(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var NC={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vs.isDisabled&&vs.supportsFiber)try{qa=vs.inject(NC),Ft=vs}catch{}}return jo.createRoot=function(e,t){if(!c(e))throw Error(s(299));var a=!1,o="",l=ZS,u=XS,S=qS;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(S=t.onRecoverableError)),t=vf(e,1,!1,null,null,a,o,null,l,u,S,Yf),e[ni]=t.current,_u(e),new Ec(t)},jo.hydrateRoot=function(e,t,a){if(!c(e))throw Error(s(299));var o=!1,l="",u=ZS,S=XS,R=qS,N=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(N=a.formState)),t=vf(e,1,!0,t,a??null,o,l,N,u,S,R,Yf),t.context=Bf(null),a=t.current,o=$t(),o=al(o),l=rn(o),l.callback=null,sn(a,l,o),a=o,t.current.lanes=a,eo(t,a),ga(t),e[ni]=t.current,_u(e),new Ps(t)},jo.version="19.2.3",jo}var $f;function HC(){if($f)return fc.exports;$f=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),fc.exports=bC(),fc.exports}var GC=HC();const UC=Dm(GC);var Ie=(n=>(n.MENU="MENU",n.CLASSIC="CLASSIC",n.LEVEL_THEMED="LEVEL_THEMED",n.LEVEL_EMOJI="LEVEL_EMOJI",n.LEVEL_MIND_MATCH="LEVEL_MIND_MATCH",n.LEVEL_SYNONYMS="LEVEL_SYNONYMS",n.LEVEL_EXPANSION="LEVEL_EXPANSION",n.LEVEL_CASCADE="LEVEL_CASCADE",n))(Ie||{});const eh=65,FC=60,wC=["bg-neon-red shadow-[0_0_15px_#FF073A] border-white","bg-neon-orange shadow-[0_0_15px_#FF5F1F] border-white","bg-neon-yellow shadow-[0_0_15px_#F9FF00] border-white","bg-neon-lime shadow-[0_0_15px_#39FF14] border-white","bg-neon-green shadow-[0_0_15px_#00F000] border-white","bg-neon-mint shadow-[0_0_15px_#00FF9F] border-white","bg-neon-cyan shadow-[0_0_15px_#00FFFF] border-white","bg-neon-sky-blue shadow-[0_0_15px_#00BFFF] border-white","bg-neon-blue shadow-[0_0_15px_#0066FF] border-white","bg-neon-violet shadow-[0_0_15px_#B026FF] border-white","bg-neon-purple shadow-[0_0_15px_#D400FF] border-white","bg-neon-magenta shadow-[0_0_15px_#FF00FF] border-white","bg-neon-pink shadow-[0_0_15px_#FF1FBF] border-white","bg-neon-rose shadow-[0_0_15_#FF0055] border-white"],ea=[{name:"NEON ARCADE",gradient:"from-black to-zinc-900",solvedColors:wC}],yt="CLASSIC",Lt="LEVEL_EMOJI",Mt="LEVEL_MIND_MATCH",Dt="LEVEL_SYNONYMS",bt="LEVEL_THEMED",Ht="LEVEL_EXPANSION",kC=[yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt,Ht,bt,yt,Lt,Mt,Dt],La={LEVEL:"wpm_level",TUTORIAL_SEEN:"wpm_tutorial_seen_v2",TUTORIAL_SEEN_L2:"wpm_tutorial_seen_l2",TUTORIAL_SEEN_L5:"wpm_tutorial_seen_l5",GAME_STATS:"wpm_game_stats",DAILY_HISTORY:"wpm_daily_history",ENABLED_MODES:"wpm_enabled_modes",CUSTOM_POOL:"wpm_custom_pool"},xC=()=>{try{const n=localStorage.getItem(La.LEVEL);if(!n)return 1;const i=parseInt(n,10);return isNaN(i)?1:i}catch{return 1}},VC=n=>{localStorage.setItem(La.LEVEL,n.toString())},Rc=[Ie.CLASSIC,Ie.LEVEL_EMOJI,Ie.LEVEL_SYNONYMS,Ie.LEVEL_MIND_MATCH,Ie.LEVEL_THEMED,Ie.LEVEL_EXPANSION],YC=()=>{try{const n=localStorage.getItem(La.ENABLED_MODES);if(!n)return Rc;const i=JSON.parse(n);return Array.isArray(i)&&i.length>0?i:Rc}catch{return Rc}},KC=n=>{localStorage.setItem(La.ENABLED_MODES,JSON.stringify(n))},WC=()=>{try{const n=localStorage.getItem(La.CUSTOM_POOL);if(!n)return[];const i=JSON.parse(n);return Array.isArray(i)?i:[]}catch{return[]}},zC=n=>{localStorage.setItem(La.CUSTOM_POOL,JSON.stringify(n))},jC=()=>!!localStorage.getItem(La.TUTORIAL_SEEN),_C=()=>{localStorage.setItem(La.TUTORIAL_SEEN,"true")},Oc={rowsSolved:0,levelsCompleted:0,totalTimeMs:0,hintsUsed:0,hintsRefused:0,totalMoves:0,solvedCategoryIds:[],solvedWords:[],totalScore:0},Pm=()=>{try{const n=localStorage.getItem(La.GAME_STATS);if(!n)return Oc;const i=JSON.parse(n);return{...Oc,...i,solvedWords:Array.isArray(i.solvedWords)?i.solvedWords:[]}}catch{return Oc}},JC=n=>{try{const i=Pm();let r=i.solvedCategoryIds;if(n.solvedCategoryIds){const E=new Set([...i.solvedCategoryIds,...n.solvedCategoryIds]);r=Array.from(E)}let s=i.solvedWords;if(n.solvedWords){const E=new Set([...i.solvedWords,...n.solvedWords]);s=Array.from(E)}const c={rowsSolved:i.rowsSolved+(n.rowsSolved||0),levelsCompleted:i.levelsCompleted+(n.levelsCompleted||0),totalTimeMs:i.totalTimeMs+(n.totalTimeMs||0),hintsUsed:i.hintsUsed+(n.hintsUsed||0),hintsRefused:i.hintsRefused+(n.hintsRefused||0),totalMoves:i.totalMoves+(n.totalMoves||0),solvedCategoryIds:r,solvedWords:s,totalScore:i.totalScore+(n.totalScore||0)};localStorage.setItem(La.GAME_STATS,JSON.stringify(c))}catch(i){console.error("Failed to update stats",i)}},ZC=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
1,Amphibians,bullfrog,newt,glass frog,salamander,spadefoot,toad
2,Animals,antelope,badger,bear,beaver,bison,boar,cheetah,chimpanzee,cougar,deer,fox,gorilla,jaguar,leopard,lion,moose,otter,raccoon,tiger,weasel
3,Astronomy,asteroid,black hole,comet,eclipse,equinox,galaxy,meteor,nebula,orbit,planet,pulsar,quasar,satellite,solstice,star,supernova
4,Bears,andean bear,asian black bear,black bear,brown bear,grizzly,kodiak,malayan sun bear,panda,polar bear,sloth bear,spectacled bear,sun bear
5,Big Cats,caracal,cheetah,cougar,jaguar,leopard,lion,lynx,puma,snow leopard,tiger
6,Breads,bagel,baguette,brioche,chapati,ciabatta,focaccia,injera,lavash,naan,panettone,pita,pretzel,sourdough,tortilla,arepa,paratha,piadina,roti,cornbread,damper,rye
7,Canines,akita,basenji,beagle,boxer,bulldog,chihuahua,collie,corgi,coyote,dachshund,dingo,fox,german shepherd,great dane,greyhound,jackal,malamute,maned wolf,pembroke,pomeranian,poodle,pug,retriever,shiba inu
8,Cheeses Hard,asiago,cheddar,comte,edam,emmental,gouda,gruyere,manchego,parmesan,pecorino,provolone,taleggio
9,Cheeses Soft,camembert,gorgonzola,reblochon,ricotta,roquefort,stilton
10,Cities,bogota,chicago,lima,los angeles,new york,rio,santiago,sao paulo,toronto,bangkok,beijing,delhi,hanoi,jakarta,karachi,kuala lumpur,manila,seoul,singapore,taipei,tokyo,amsterdam,berlin,brussels,copenhagen,helsinki,london,madrid,paris,prague,rome,vienna
11,Clothing,bell bottoms,bra,coat,dress,gloves,hat,hoodie,jacket,jeans,leggings,pantyhose,scarf,shirt,skirt,socks,tank top,underwear,vest
12,Cold Desserts,banana split,fruit salad,fudge,jelly,popsicle,sundae
13,COMMON PETS,cat,dog,fish,hamster,parrot,rabbit
14,Computer File Formats,gif,json,png,pptx,xlsx,xml
15,Deer Family,caribou,chital,elk,fallow,moose,mule deer,muntjac,red deer,reindeer,roe deer,sika,white-tailed deer
16,Drinks Cold,cola,frappe,ginger ale,iced coffee,iced tea,lemonade,milkshake,seltzer,smoothie,soda,tonic,agua fresca
17,Elements Halogens,fluorine,chlorine,bromine,iodine,astatine,tennessine
18,Elements Noble Gases,helium,neon,argon,krypton,xenon,radon,oganesson
19,Finance,bond,cpi,debt,deflation,derivative,dividend,equity,future,gdp,inflation,interest,option,ppi,recession,stock,swap
20,Fish,anchovy,bass,carp,cod,halibut,herring,mackerel,perch,pike,salmon,sardine,sole,sturgeon,swordfish,tilapia,trout,tuna
21,Flightless Birds,cassowary,emu,great auk,kakapo,kiwi,moorhen,ostrich,penguin,rail,rhea,takahe,weka
22,Freshwater Fish,bass,bream,carp,catfish,perch,pike,roach,salmon,sturgeon,tench,tilapia,trout
23,Geography Deserts,arabian,atacama,chihuahuan,gobi,mojave,patagonian
24,Geography Islands,borneo,hispaniola,kyushu,madagascar,newfoundland,sumatra
25,Geography Oceans,arctic,atlantic,bay,channel,gulf,indian,pacific,ridge,sea,southern,strait,trench
26,Geography Rivers,amazon,danube,euphrates,ganges,indus,mekong,nile,rhine,thames,volga
27,Geology,agate,basalt,diamond,emerald,granite,jade,limestone,marble,obsidian,opal,quartz,ruby,sandstone,sapphire,shale,slate
28,Herbs Fresh,bay,catnip,chervil,chives,cilantro,curry leaf,hyssop,lemon balm,lemongrass,lovage,mint,sorrel,verbena,basil,chive,dill,fennel,marjoram,oregano,parsley,rosemary,sage,savory,tarragon,thyme
29,Hot Drinks,americano,cappuccino,chai,cocoa,latte,matcha,mocha,oolong,tea
30,Butterflies,admiral,blue,comma,fritillary,hairstreak,monarch,morpho,painted lady,ringlet,sulphur,swallowtail
31,Kitchen Tools,cleaver,colander,fork,grater,knife,peeler,spatula,spoon,tongs
32,Legal,affidavit,appeal,contract,counsel,deposition,hearing,injunction,judge,jury,precedent,statute,subpoena,verdict
33,Math,algebra,calculus,trigonometry,geometry,graph theory,logic,number theory,probability,set theory,statistics,topology
34,Medical,allergy,antibiotic,bacteria,diagnosis,fracture,imaging,prognosis,surgery,symptom,therapy,tumor,vaccine,virus
35,MOBILE GAMES,among us,angry birds,candy crush,clash of clans,fortnite,pokemon go,flappy bird,subway surfers,temple run
36,MOVIE VILLAINS,agent smith,darth vader,hannibal lecter,joker,thanos,voldemort
37,Olympic,archery,athletics,diving,fencing,gymnastics,judo,rowing,sailing,shooting,swimming,taekwondo,wrestling
38,Raptors,buzzard,eagle,harrier,hawk,kite,merlin
39,Reptiles,alligator,anole,boa,chameleon,cobra,crocodile,gecko,iguana,lizard,python,skink,snake,terrapin,tortoise,turtle,viper,basilisk,gila monster,monitor,whiptail
40,Seabirds,albatross,auk,booby,cormorant,frigatebird,gannet,gull,pelican,petrel,puffin,shearwater,tern
41,Shapes Polygons,dodecagon,heptagon,hexagon,nonagon,octagon,triangle,rhombus,trapezoid
42,Sharks,basking shark,blue shark,bull shark,goblin shark,great white,hammerhead,lemon shark,mako,nurse shark,reef shark,tiger shark,whale shark
43,SOCIAL MEDIA INFLUENCERS,addison rae,charli d'amelio,david dobrik,mrbeast,pewdiepie,zach king
44,Spices Savory,anise,caraway,coriander,cumin,dill seed,fenugreek,mustard,paprika,peppercorn,saffron,sumac,turmeric
45,Spices Warm,allspice,cardamom,cinnamon,clove,galangal,ginger,grains of paradise,long pepper,mace,star anise
46,Time & Date,april,calendar,clock,december,dst,july,june,march,may,minute,monday,november,october,pst,saturday,second,september,solstice,thursday,tuesday,utc
47,TV SHOWS OF THE 2000S,breaking bad,game of thrones,lost,mad men,the office,the sopranos
48,TV SHOWS OF THE 90S,buffy,frasier,friends,seinfeld,the simpsons,the x-files
49,Vegetables Leafy,arugula,bok choy,cabbage,chard,collards,endive,kale,lettuce,mizuna,mustard greens,romaine
50,Vegetables Roots,carrot,cassava,ginger,parsnip,radish,rutabaga,salsify,taro,turmeric,turnip,yam
51,Watercraft,barge,boat,canoe,catamaran,dinghy,ferry,gondola,kayak,sailboat,ship,submarine,yacht
52,Art Styles,abstract,baroque,cubism,dadaism,expression,futurism,impression,minimalism,neoclassic,pop art,realism,renaissance,rococo,surrealism,symbolism
53,Writing Genres,adventure,biography,comedy,crime,dystopian,essay,fantasy,fiction,folklore,historical,horror,memoir,mystery,non fiction,poetry,romance,satire,sci-fi,thriller,tragedy
54,Units of Time,century,day,decade,fortnight,hour,microsecond,millennium,millisecond,minute,month,nanosecond,second,week,year
55,Units of Measurement,acre,ampere,candela,centimeter,cup,foot,gallon,gram,hertz,inch,joule,kelvin,kilogram,liter,lumen,meter,mile,mole,newton,ohm,ounce,pascal,pint,pound,quart,tablespoon,teaspoon,ton,volt,watt,yard
56,Musical Scales,acoustic,blues,chromatic,diatonic,double harmonic,enigmatic,harmonic minor,major,melodic minor,minor,pentatonic,whole tone
57,Feelings and Emotions,admiration,adoration,affection,agony,alarm,amazement,amusement,anger,annoyance,anxiety,apathy,apprehension,astonishment,attraction,awe,bitterness,bliss,boredom,calmness,compassion,confidence,confusion,contempt,contentment,courage,curiosity,cynicism,delight,depression,desire,despair,determination,disappointment,disgust,dread,ecstasy,elation,embarrassment,empathy,enthusiasm,envy,euphoria,excitement,fear,frustration,gratitude,grief,guilt,happiness,hatred,hope,horror,hostility,humiliation,hurt,hysteria,indifference,interest,irritation,isolation,jealousy,joy,loneliness,love,lust,melancholy,misery,nervousness,nostalgia,optimism,panic,paranoia,passion,pessimism,pity,pleasure,pride,rage,regret,rejection,relief,remorse,resentment,sadness,satisfaction,scorn,security,self-confidence,shame,shock,shyness,skepticism,sociability,sorrow,spite,stress,surprise,sympathy,tenderness,terror,trust,uneasiness,unhappiness,vanity,wariness,wonder,worry,zeal
58,Habitats,arctic,badlands,boreal forest,canyon,cave,chaparral,cloud forest,coast,coniferous forest,coral reef,deciduous forest,delta,desert,dune,estuary,everglades,fen,field,forest,freshwater,glacier,grassland,heath,high altitude,hydrothermal vent,ice shelf,intertidal,island,jungle,kelp forest,lagoon,lake,mangrove,marine,marsh,meadow,montane,moor,mudflat,ocean,pampas,peat bog,plain,polar,pond,prairie,rainforest,river,salt marsh,sand dune,savanna,scrubland,sea,seafloor,shore,steppe,swamp,taiga,temperate forest,tidal pool,tropical,tundra,urban,valley,volcano,wetland,woodland
59,Household Rooms,kitchen,living room,bedroom,bathroom,garage,attic,basement,dining room,office,laundry room
60,Popular Sports,baseball,basketball,football,soccer,tennis,golf,hockey,boxing,swimming,running
61,Vehicles,car,truck,bicycle,airplane,boat,bus,train
62,Mammals,dog,cat,horse,elephant,lion,tiger,bear
63,Kitchen,knife,fork,spoon,plate,cup,pot,pan
64,Occupations,teacher,doctor,engineer,artist,chef,nurse,driver
65,Wildlife,bird,fish,frog,turtle,snake,deer,rabbit
66,Plants,tree,flower,grass,bush,fern,moss,cactus
67,Foods,bread,cheese,milk,butter,rice,chicken,apple
68,Body,head,arm,leg,ear,eye,hand,foot
69,Historical Eras,neolithic,medieval,renaissance,victorian,modern,ancient,industrial
70,Achievements,invention,discovery,exploration,writing,building,art,science
71,Daily Activities,eating,sleeping,dressing,walking,talking,reading,working
72,Anatomy,accountable,heart,lungs,stomach,liver,muscle,bone
73,Social Media,Facebook,Instagram,Twitter,LinkedIn,TikTok,Snapchat,Pinterest
74,Tennis Surfaces,clay,grass,hard court,carpet,indoor,outdoor,green clay,red clay,artificial turf
75,Basketball Strategies,zone defense,pick and roll,isolation,fast break,box out,double team,full court press,backdoor cut,screen
76,Soccer Leagues,premier league,la liga,serie a,bundesliga,ligue 1,mls,eredivisie,champions league,fa cup
77,NFL Terms,hail mary,blitz,field goal,safety,interception,touchback,end zone,offside,fumble
78,Olympic Athletes,usain bolt,michael phelps,simone biles,serena williams,muhammad ali,mark spitz,carl lewis,allyson felix,kristi yamaguchi
79,Basketball Players,lebron james,stephen curry,kevin durant,kawhi leonard,anthony davis,james harden,russell westbrook,derrick rose,dwyane wade
80,Football Coaches,bill belichick,andy reid,sean payton,nick saban,pete carroll,bruce arians,tom landry,vince lombardi,bill walsh
81,Tennis Players,roger federer,rafael nadal,serena williams,venus williams,novak djokovic,pete sampras,chris evert,andre agassi,martina navratilova
82,Hockey Players,wayne gretzky,mario lemieux,bobby orr,mark messier,patrick roy,jaromir jagr,steve yzerman,martin brodeur
83,Baseball Teams,yankees,red sox,dodgers,cubs,mets,giants,cardinals,blue jays,phillies
84,Soccer World Cup,brazil,germany,argentina,france,italy,spain,england,uruguay,netherlands
85,NFL Events,super bowl,conference championship,divisional playoff,wild card,pro bowl,regular season,preseason,draft,training camp
86,Olympic Venues,stadium,arena,pool,track field,gymnasium,velodrome,ice rink,marathon course,boxing ring
87,Building Toys,lego,blocks,bricks,duplo,magnet blocks,keva planks,kinetics
88,Action Figures,barbie,gi joe,transformers,ninja turtles,power rangers,action man,mega bloks
89,Classic Toys,yo-yo,marbles,top,jack in the box,hula hoop,spinning top,slinky
90,Outdoor Toys,kite,scooter,frisbee,bike,ball,jump rope,hula hoop
91,Dolls,barbie,american girl,baby doll,bratz,monster high,cabbage patch,dollhouse
92,Electronic Toys,tamagotchi,furby,robot,game boy,walkie talkie,rc car,scratch cat
93,Creative Toys,play doh,coloring book,crayons,model clay,puzzle paints,sticker book,chalk
94,Puzzles,jigsaw,puzzle,rubik,crossword,sudoku,logic puzzle,tangram,word search
95,Building Sets,lego,meccano,k'nex,erector set,lincoln logs,tinker toy,magformers
96,Plush Toys,teddy bear,stuffed rabbit,bean bag plush,plush dog,plush cat,plush dinosaur,plush elephant
97,Educational Toys,abacus,globe,math blocks,alphabet blocks,science kit,magnifying glass,microscope toy
98,Water Toys,water gun,water balloon,pool float,snorkel,goggles,swim ring,beach ball
99,Outdoor Games,soccer ball,baseball,basketball,horse shoes,tag,jump rope,relay baton
100,Stuffed Animals,teddy bear,plush dog,stuffed cat,plush elephant,stuffed lion,stuffed monkey,stuffed rabbit
101,Creative Kits,paint set,sticker book,crafting kit,coloring book,model kit,finger paints,origami set
102,Electronic Games,game boy,tamagotchi,handheld electronic,portable console,furby,rc car,electronic pet
103,Classic Games,chess,checkers,backgammon,scrabble,dominoes,parcheesi,go
104,Action Toys,gunny,action figure,transformer,robot,power ranger,hero figure,ninja doll
105,Constructive Toys,meccano,lincoln logs,k'nex,erector set,magnetic tiles,tinker toy,building blocks
106,Playsets,dollhouse,garage,treehouse,kitchen set,farm set,train set,castle
107,Outdoor Play,scooter,tricycle,kite,frisbee,ball,jump rope,hula hoop
108,Toy Vehicles,hot wheels,matchbox,die cast car,rc car,toy train,toy plane,toy boat
109,Building Kits,lego,magnet blocks,tinker toy,meccano,erector set,k'nex,duplo
111,Classics,yo-yo,marbles,jack in the box,hula hoop,spinning top,slinky,tiddlywinks
112,Games,monopoly,clue,risk,scrabble,chess,checkers,sorry
113,Sports Toys,soccer ball,basketball,baseball,football,tennis ball,frisbee,jump rope
114,Fast Food Pizzerias,Domino's,Pizza Hut,Little Caesars,California Pizza Kitchen,Papa John's,Marco's Pizza,Round Table
115,Fruit Juice Brands,Tropicana,Minute Maid,Ocean Spray,V8,Mott's,Welch's,Clamato
116,Sauces and Condiments,Heinz,Kraft,Bull's Eye,Tony Chachere's,Duke's,French's,Tabasco
117,Breakfast Cereals,Cheerios,Raisin Bran,Frosted Flakes,Kellogg's,Oats,Quaker,Rice Krispies
118,Chocolate Brands,Hershey's,Mars,Lindt,Ghirardelli,Nestle,Godiva,Thorntons
119,Dairy Product Brands,Dean's,Dannon,Blue Bell,Land O'Lakes,Yoplait,Chobani,Breakstone's
120,Ice Cream Brands,Breyers,Ben & Jerry's,Haagen Dazs,Cold Stone,Talenti,Dreyer's,Blue Bell
121,Candy Brands,M&M's,Skittles,Reese's,Snickers,Kit Kat,Twix,Milky Way
122,Soft Drink Companies,Mountain Dew,Coca Cola,Fanta,Pepsi,Snapple,7 Up,Dr Pepper
123,Sears Brands,Kenmore,Craftsman,DieHard,Silvertone,Coldspot,Homart,Allstate
124,Bankrupt Tech,Compaq,Netscape,Sun Microsystems,Nortel,Polaroid,Blockbuster,BeBox
125,Old Soft Drinks,Tab,Crystal Pepsi,Santas Own,Orbitz,OK Soda,Pepsi Blue,Fresca
126,Defunct Toy Lines,Micronauts,SilverHawks,He-Man,Tiger Electronics,G.I. Joe,Zoids,Shogun Warriors
127,Faded Tech Companies,Nortel,Sun Microsystems,Compaq,Netscape,BeBox,Blackberry,WebTV
128,Magic,Spell,Wand,Potion,Charm,Enchantment,Wizard,Sorcerer
129,Knights,Sword,Shield,Armor,Horse,Castle,Quest,Joust
130,Fairies,Wings,Dust,Forest,Tiny,Magic,Flutter,Enchanted
131,Elves,Forest,Bow,Agile,Pointed Ears,Archery,Grace,Immortal
132,Dark Lords,Power,Shadow,Evil,Minions,Dungeon,Curse,Throne
133,Wizardry,Staff,Spellbook,Robe,Incantation,Mystic,Alchemist,Talisman
134,Quests,Journey,Treasure,Map,Battle,Companion,Victory,Challenge
135,Fantasy Races,Elf,Dwarf,Orc,Troll,Hobbit,Giant,Gnome
136,Magical Items,Amulet,Crystal,Scroll,Ring,Pendant,Cloak,Orb
137,Beasts,Lion,Dragon,Wolf,Horse,Bear,Falcon,Serpent
138,Castles,Tower,Moat,Kingdom,Drawbridge,Dungeon,Throne Room,Keep
139,Spells,Fireball,Frost,Healing,Shield,Summon,Invisibility,Teleport
140,Potions,Healing,Mana,Invisibility,Strength,Speed,Poison,Elixir
141,Mermaids,Sea,Ocean,Scale,Tail,Siren,Coral,Trident
142,Magic Creatures,Phoenix,Unicorn,Sprite,Griffin,Troll,Cyclops,Wisp
143,Enchanted Forest,Tree,Fairy,Mushroom,Stream,Elf,Magic,Shadow
144,Sorcery,Spell,Wand,Book,Altar,Rune,Curse,Hex
145,Medieval Weapons,Sword,Bow,Axe,Spear,Dagger,Crossbow,Mace
146,Fantasy Lands,Kingdom,Castle,Village,Mountain,Forest,Swamp,Desert
147,Wizards,Gandalf,Merlin,Mage,Sorcerer,Wizard,Spellcaster,Alchemist
148,Artifacts,Amulet,Chalice,Ring,Crown,Scepter,Scroll,Talisman
149,Creatures,Ogre,Troll,Giant,Dragon,Werewolf,Vampire,Zombie
150,Adventure,Journey,Quest,Map,Companion,Challenge,Treasure
151,Fables,Myth,Moral,Legend,Fairy Tale,Hero,Narrative,Mythology
152,Dark Magic,Curse,Necromancer,Shadow,Vampire,Demon,Hex,Sorcery
153,Magical Schools,Hogwarts,Academy,Class,Magic,Spell,Teacher,Student
154,Fantasy Weapons,Sword,Staff,Bow,Arrow,Axe,Dagger,Mace
155,Elven Kingdoms,Elf,Forest,Archery,Lore,Magic,Agility,Clan
156,Dwarves,Mining,Mountain,Beard,Axe,Forge,Stout,Helmet
157,Goblins,Cave,Trick,Hide,Greedy,Small,Dark,Mischief
158,Dragons,Scale,Fire,Talon,Wing,Legend,Ancient,Fierce
159,Heroes,Brave,Strong,Leader,Quest,Victory,Honor,Courage
160,Magical Creatures,Unicorn,Phoenix,Griffin,Mermaid,Centaur,Hydra,Sprite
161,Dark Forces,Witch,Warlock,Demon,Curse,Shadow,Vampire,Necromancer
162,Star Trek,Enterprise,Klingon,Spock,Vulcan,Phaser,Transporter,Federation,Warp,Captain
163,Doctor Who,Time Lord,TARDIS,Dalek,Sonic Screwdriver,Rose,Companion,Gallifrey,Cyberman,Regeneration
164,Blade Runner,Replicant,Deckard,Rain,Los Angeles,Flying Car,Voight Kampff,Tyrell Corporation,Android
165,Marvel Universe,Spider Man,Iron Man,Thor,Hulk,Avengers,Shield,Wakanda,Asgard,Vibranium
166,Futurama,Planet Express,Fry,Leela,Bender,Zapp Brannigan,Robot,Headplanet,New New York,Professor Farnsworth
167,Alien Franchise,Xenomorph,Ellen Ripley,Nostromo,Facehugger,Chestburster,Alien Queen,Weyland,Yutani,LV-426
168,Cyberpunk,Neon,Matrix,Hacker,Dystopia,Cyberspace,Augmentation,Android,Corporate Control,Virtual Reality
169,Starship Types,Cruiser,Fighter,Battleship,Destroyer,Freighter,Carrier,Explorer,Scout,Corvette
170,Time Travel,Paradox,Timeline,Alternate Reality,Past,Future,Present,Chrononaut,Time Machine,Butterfly Effect
171,Robots,Android,Droid,Cyborg,AI,Automation,Sentient,Processor,Humanoid,Machine
172,Star Wars Characters,Luke Skywalker,Princess Leia,Han Solo,Darth Vader,Yoda,Chewbacca,Emperor Palpatine,C-3PO,R2-D2
173,Famous Sci Fi Authors,Asimov,Clarke,Heinlein,Herbert,Gibson,Bradbury,Simmons,Le Guin,Orwell
174,Alien Species,Klingon,Romulan,Vulcan,Wookiee,Twi'lek,Orc,Cylon,Asari,Predator
175,Post Apocalypse,Radiation,Survivor,Zombie,Mad Max,Wasteland,Bunker,Scavenger,Mutant
176,Spacecraft Terms,Hyperdrive,Warp Drive,Impulse Engine,Shuttle,Hangar,Cockpit,Hull,Thruster,Navigation
177,Dystopian Societies,Totalitarian,Censorship,Surveillance,Propaganda,Rebellion,Oppression,Control,Resistance,Regime
178,Sci Fi Weapons,Phaser,Blaster,Laser Rifle,Plasma Gun,Grenade,Sonic Weapon,Bowcaster,Energy Sword,Disruptor
179,Star Wars Factions,Rebellion,Empire,Jedi Order,Sith Order,Clone Army,New Republic,First Order,Resistance,Bounty Hunters
180,Post Human Concepts,Cyborg,Transhuman,AI,Cloning,Mind Upload,Enhancement,Biotech,Nanotech
181,Classic Sci Fi Films,Metropolis,Invasion of The Body Snatchers,Forbidden Planet,Planet of The Apes,The Fly,Logan's Run,Blade Runner
182,Spaceships War Roles,Fighter,Bomber,Interceptor,Command Ship,Support Vessel,Scout Ship,Transport,Carrier,Corvette
183,Alien Contact,First Contact,Communicate,Probe,Signal,Abduction,Invasion,Diplomacy,Encounter,Species
184,Star Wars Vehicles,X Wing,TIE Fighter,Millennium Falcon,Speeder Bike,Star Destroyer,AT AT Walker,Podracer,Battle Droid,Death Star
185,Sci Fi TV Shows,The Expanse,Black Mirror,Stranger Things,Firefly,Battlestar Galactica,Lost In Space,Westworld,Orphan Black,The 100
186,Famous Robots,Wall-E,R2 D2,C3PO,Hal 9000,Data,Johnny 5,Bender,Optimus Prime,T800
187,Spacesuits,Helmet,Oxygen,Systems,Gloves,Jetpack,Insulation,Visor,Pressure Suit,Glasses
188,Sci Fi Planets,Mars,Venus,Tatooine,Krypton,Arrakis,Trantor,Endor,Naboo,Coruscant
189,Teleportation Terms,Beam Up,Quantum,Phasing,Transporter,Instant,Portal,Matter Stream,Displacement
190,Galactic Empires,Imperium,Federation,Confederacy,Syndicate,Dominion,Alliance,Coalition,Republic,Consortium
191,Alien Invasion,Invasion,Probe,Attack,Occupation,Resistance,Hybrid,Scout Ship,Abduction
192,Time Travel Paradoxes,Bootstrap Paradox,Predestined,Alternate Timeline,Time Loop,Chronology,Causality,Time Slip
193,Sci Fi Energy Sources,Plasma,Fusion,Fission,Dark Matter,Antimatter,Tesla Coil,Zap Energy,Zero Point,Quantum
194,Space Exploration Missions,Apollo,Ares,Mercury,Discovery,Voyager,Hubble,Galileo,Cassini,Curiosity
195,Alien Languages,Klingon,Elvish,Vulcanese,Rodian,Na'vi,Huttese,Minbari,Protoss,Dothraki
196,Computer AI,Sentience,Algorithm,Neural Network,Machine Learning,Data Mining,Logic Circuit,Chatbot,Automation,Deep Learning
197,Space Colonization,Mars Base,Lunar Outpost,Terraforming,Habitat,Supply Ship,Space Elevator,Oxygen Farm,Energy Dome,Hydroponics
198,Virtual Reality,SIM,Avatar,Immersion,Haptic Feedback,Headset,Environment,Data Glove,Sensory,Bio Interface
199,Star Wars Creatures,Wampa,Sarlacc,Rancor,Twi'lek,Nerf Herder,Hutt,Gungan,Ronto,Tauntaun
200,Rock and Roll,Elvis,Chuck Berry,Little Richard,Bill Haley,Johnny Cash,Fats Domino,Buddy Holly,Bo Diddley,Ray Charles
201,Television Shows,I Love Lucy,The Twilight Zone,Gunsmoke,Leave It To Beaver,Bonanza,The Fugitive
202,Cars,Ford Mustang,Cadillac Eldorado,Plymouth Fury,Buick Roadmaster,Dodge Coronet,Cadillac Coupe
203,Fashion,Poodle Skirt,Bobby Socks,Leather Jacket,Silk Scarf,Penny Loafers,Cardigan Sweater
204,Music Icons,Frank Sinatra,Aretha Franklin,Bob Dylan,Miles Davis,Ray Charles,Marvin Gaye,The Supremes,James Brown,Sam Cooke
205,Household Appliances,Microwave,Rice Cooker,Vacuum Cleaner,Washing Machine,Electric Iron,Toaster,Refrigerator,Blender,Coffee Maker
206,Sports,Babe Ruth,Jackie Robinson,Muhammad Ali,Duke Snider,Willie Mays,Mickey Mantle,Lou Gehrig,Ernie Banks,Stan Musial
207,Political Leaders,John F Kennedy,Richard Nixon,Nikita Khrushchev,Charles de Gaulle,Harold Macmillan,Jawaharlal Nehru
208,Popular Drinks,Coca Cola,Pepsi Cola,Root Beer,Milkshake,Whiskey,Margarita,Moonshine,Bourbon,Bloody Mary
209,Technology,Transistor,Vacuum Tube,Walkie Talkie,Polaroid Camera,Slide Rule,Record Player
210,TV Cartoons,The Flintstones,The Jetsons,Tom and Jerry,Speed Racer,The Smurfs,Popeye
211,Classic Musicals,Gigot,Oklahoma!,West Side Story,My Fair Lady,Camelot,Guys and Dolls,South Pacific
212,1950s Toys,Barbie,Dymaxion Car,Slinky,Mr Potato Head,Hula Hoop,YoYo,Play Dough,View Master,Silly Putty
213,Cold War Symbols,Iron Curtain,Berlin Wall,Red Scare,McCarthyism,Space Race,U2 Spy Plane
214,Classic Cars,Pontiac GTO,Dodge Charger,Buick Skylark,Ford Falcon
215,World Leaders,John F Kennedy,Charles de Gaulle,Winston Churchill,Fidel Castro,Nikita Khrushchev,Jawaharlal Nehru,Konrad Adenauer,Harold Macmillan,Lyndon B Johnson
216,TV Families,The Brady Bunch,The Partridge Family,The Munsters,The Addams Family,Leave It To Beaver,The Flintstones,The Jetsons,The Waltons,My Three Sons
217,Fashion Styles,Mod Style,Rockabilly,Bebop,Rock and Roll,Hippie Style,Greaser Style,Pin Up,Poodle Skirt
218,Inventions,Color TV,Polio Vaccine,Microwave Oven,Transistor Radio,Jet Engine,Laser,Velcro
219,Popular Dances,The Twist,Rock and Roll,The Jitterbug,Swing,Hip Hop,Charleston,Bop,The Stroll,The Madison
220,Science Fiction,Doctor Who,Star Trek,The Twilight Zone,Forbidden Planet,Flash Gordon,Metropolis,2001 A Space Odyssey
221,Motown Artists,The Supremes,Stevie Wonder,Marvin Gaye,The Temptations,Gladys Knight,Smokey Robinson,The Four Tops,Diana Ross
222,Cold War Technology,ICBM,Spy Satellite,Nuclear Submarine,Atomic Bomb,Hydrogen Bomb,Secret Bunker,ECM Radar,Nuclear Missile
223,Summer Movies,The Great Escape,North by Northwest,The Birds,Goldfinger,Lawrence of Arabia,Doctor Zhivago,West Side Story
224,Cold War Espionage,CIA,KGB,MI6,Spy,Double Agent,Defector,Secret Code,Mole,Black Ops
225,Classic Broadway,The Pajama Game,West Side Story,My Fair Lady,Guys and Dolls,Oklahoma!,South Pacific,Cabaret,Carousel
226,Space Race Countries,Soviet Union,United States,China,Bulgaria,Romania,East Germany,Hungary,Poland,Ukraine
227,Popular TV Westerns,Gunsmoke,Bonanza,The Rifleman,Wagon Train,Rawhide,The Lone Ranger,Cheyenne,Death Valley Days
228,Film Directors,Alfred Hitchcock,Stanley Kubrick,John Ford,Orson Welles,Sidney Lumet,Billy Wilder,Budd Boetticher
229,Iconic 1960s Albums,Pet Sounds,Blonde on Blonde,Are You Experienced,Let It Bleed,The Doors,Abbey Road
230,Typewriters,Remington,Smith Corona,Royal,Underwood,Olivetti,Manual Typewriter,Electric Typewriter
231,Classic Novels,On the Road,Fahrenheit 451,Lolita,Invisible Man,Doctor Zhivago
232,Famous 1960s Photographers,Robert Frank,Diane Arbus,Ansel Adams,Lee Friedlander,William Klein,Richard Avedon,Elliott Erwitt,Garrett Bradley
233,Iconic Cars,Volkswagen Beetle,Ford Mustang,Cadillac Eldorado,Dodge Charger,Chevrolet Camaro,Pontiac GTO,Ford Thunderbird,Buick Riviera
234,Fast Food Mascots,Ronald McDonald,Colonel Sanders,The Burger King,Tony The Tiger,Chester Cheetah,Jack Box,Pizza Hut Hut,Hooters Owl
235,Corporate Mascots,Geico Gecko,Energizer Bunny,Michelin Man,Smokey Bear,Pillsbury Doughboy,Aflac Duck,Mr. Clean,Mr. Peanut,The Noid,Keebler Elf,Jolly Green Giant
236,Corporate Slogans,Think Different,Open Happiness,Have It Your Way,King Of Beers,Just Do It,I'm Lovin' It,Zoom Zoom,Moving Forward
237,American Gangsters,Al Capone,Bugsy Siegel,John Dillinger,Meyer Lansky,Lucky Luciano,Whitey Bulger,Billy The Kid,Bonnie Parker
238,Serial Killers,Ted Bundy,Jeffrey Dahmer,John Wayne Gacy,Richard Ramirez,Edmund Kemper,Aileen Wuornos,Son of Sam,David Berkowitz
239,Notorious Bank Robbers,John Dillinger,Bonnie Parker,Clyde Barrow,Frank Abagnale,Herman Lamm
240,Infamous Pirates,Blackbeard,Calico Jack,Anne Bonny,Henry Morgan,William Kidd,Edward Teach,Stede Bonnet,Charles Vane
241,Female Criminals,Bonnie Parker,Aileen Wuornos,Myra Hindley,Griselda Blanco,Marilyn Lemak,Ilse Koch,Mary Ann Cotton,Juana Barraza,Elizabeth Bathory
242,Mafia Bosses,Al Capone,Don Vito Genovese,Carlo Gambino,Joseph Bonanno,Tommy Lucchese,John Gotti,Charles Luciano,Paul Castellano
243,Historic Outlaws,Jesse James,Billy The Kid,Butch Cassidy,Sundance Kid,Robert Ford,Calamity Jane,Doc Holliday,Wild Bill Hickok,Pat Garrett
244,Espionage Spies,Anna Chapman,Aldrich Ames,Julius Rosenberg,Ethel Rosenberg,Robert Hanssen,Kim Philby,Klaus Fuchs
245,White Collar Criminals,Frank Abagnale,Bernie Madoff,Jordan Belfort,Elizabeth Holmes,Nicholas Leeson,Charles Ponzi,Allen Stanford,Martin Shkreli,Richard Fuld
246,Warfare War Criminals,Adolf Eichmann,Heinrich Himmler,Hermann Göring,Joseph Mengele,Rudolf Hess,Benito Mussolini,Hideki Tojo,Radovan Karadžić
247,Jack The Ripper Suspects,Michael Ostrog,Aaron Kosminski,John Pizer,George Chapman,Francis Tumblety,James Maybrick
248,Notorious Kidnappers,Patty Hearst,Charles Lindbergh,Elizabeth Smart,Jaycee Dugard,Shawn Hornbeck,Mary McElroy,Frank Sinatra Jr.,Barney Clark,Barbara Mackle
249,Famous Fraudsters,Frank Abagnale,Bernie Madoff,Elizabeth Holmes,Charles Ponzi,Allen Stanford,Anna Sorokin,Barry Minkow,Socorro Herrera,Richard Fuld
250,Infamous Arsonists,John Leonard Orr,John Duffey,Edward Leonski,Jean Harris,Harry Powers,Felix Hall,Albert DeSalvo
251,Assassins,John Wilkes Booth,Lee Harvey Oswald,Gavrilo Princip,James Earl Ray,Mark David Chapman,Charles Guiteau,Sirhan Sirhan
252,Famous Heist Criminals,Bonnie Parker,John Dillinger,D. B. Cooper,Albert Spaggiari,Stanley Gibbons,Charles Ponzi,Anna Sorokin
253,Notorious Cybercriminals,Albert Gonzalez,Kevin Mitnick,Adrian Lamo,Kevin Poulsen,Roman Seleznev,Julian Assange
254,Con Men and Scammers,Frank Abagnale,Charles Ponzi,Elizabeth Holmes,Anna Sorokin,Victor Lustig,Stanford White,Dorothy Parker,Martha Stewart
255,Famous Cult Leaders,Charles Manson,Jim Jones,David Koresh,Shoko Asahara,Keith Raniere,Wayne Bent
256,Russian Criminals,Sergey Mavrodi,Boris Berezovsky,Grigori Rasputin,Andrei Chikatilo,Alexander Solonik,Igor Girkin,Semion Mogilevich,Oleg Deripaska
257,Irish Criminals,Martin Cahill,John Gilligan,Christy Kinahan
258,Wild West Outlaws,Jesse James,Billy The Kid,Butch Cassidy,Sundance Kid,Wild Bill Hickok,Doc Holliday,Calamity Jane,Cole Younger,Frank James
259,Infamous Poisons,Arsenic,Cyanide,Strychnine,Thallium,Digitalis,Ricin,Polonium,Mercury,Sarin
260,Mob Hitmen,Richard Kuklinski,Salvatore Gravano,Tommy DeSimone,Albert Anastasia,Frank Nitti,Phil Leonetti,John Gotti,Joseph Massino,Vincent Gigante
261,Women in Crime,Bonnie Parker,Aileen Wuornos,Griselda Blanco,Myra Hindley,Ilse Koch,Martha Beck,Rose West,Brenda Spencer,Elizabeth Báthory
262,International Con Artists,Anna Sorokin,Frank Abagnale,Victor Lustig,Fawziyah Javed,Anna Chapman,Ewa Paradies
263,Infamous Kidnappings,Lindbergh Baby,Patty Hearst,Elizabeth Smart,Jaycee Dugard,Shawn Hornbeck,Mary McElroy,Frank Sinatra Jr.,Barbara Mackle,Barney Clark
264,Anarchists and Terrorists,Ted Kaczynski,Timothy McVeigh,Josef Klemperer,David Koresh,Richard Reid,Eric Rudolph
265,Hackers and Crackers,Kevin Mitnick,Adrian Lamo,Albert Gonzalez,Kevin Poulsen,Jonathan James,Julian Assange,Guy Fawkes
266,Political Assassins,Gavrilo Princip,John Wilkes Booth,Lee Harvey Oswald,Mark David Chapman,James Earl Ray,Charles Guiteau,Sirhan Sirhan,Anwar al-Awlaki,Patrice Lumumba
267,Drug Traffickers,Pablo Escobar,El Chapo,Griselda Blanco,Felix Gallardo,Gustavo Gaviria,Manuel Noriega,Ismael Zambada
268,Children's Crime Cases,Mary Bell,Linda Carty,Jon Venables,Robert Thompson,Karla Homolka,James Bulger
269,White Collar Fraudsters,Bernie Madoff,Elizabeth Holmes,Frank Abagnale,Charles Ponzi,Allen Stanford,Anna Sorokin,Barry Minkow,Rick Singer,Richard Fuld
270,Crime Families,Genovese Family,Gambino Family,Bonanno Family,Lucchese Family,Colombo Family,Chicago Outfit,Yamaguchi-gumi,The Kray Twins
271,Infiltrators and Double Agents,Klaus Fuchs,Kim Philby,Aldrich Ames,Robert Hanssen,Richard Sorge,Julius Rosenberg,Ethel Rosenberg,Anna Chapman
272,Infamous Female Killers,Aileen Wuornos,Myra Hindley,Ilse Koch,Elizabeth Bathory,Juana Barraza,Martha Beck,Rose West,Belle Gunness
273,Mafia Hitmen,Richard Kuklinski,Salvatore Gravano,Tommy DeSimone,Albert Anastasia,Frank Nitti,Phil Leonetti,John Gotti,Joseph Massino,Vincent Gigante
274,Drug Lords,Pablo Escobar,El Chapo,Griselda Blanco,Felix Gallardo,Gustavo Gaviria,Manuel Noriega,Ismael Zambada
276,National Parks,Yosemite,Yellowstone,Grand Canyon,Zion,Glacier,Acadia,Everglades,Rocky Mountain,Sequoia
277,Famous Cities,New York,Chicago,San Francisco,Los Angeles,Miami,Boston,Washington DC,New Orleans,Seattle
278,Iconic Landmarks,Statue of Liberty,Golden Gate Bridge,Mount Rushmore,Space Needle,Ft Sumter,Times Square,Alcatraz Island,Hollywood Sign,Gateway Arch
279,Historic Sites,Independence Hall,Alamo,Gettysburg,Jamestown,Monticello,Fort McHenry,Harper's Ferry,Mount Vernon
280,Beach Destinations,Myrtle Beach,Huntington Beach,South Beach,Waikiki,Virginia Beach,Cape Cod,Clearwater Beach,Galveston,Rehoboth Beach
281,Rivers and Lakes,Mississippi River,Colorado River,Lake Tahoe,Great Salt Lake,Lake Michigan,Columbia River,Lake Superior,Lake Erie,Missouri River
282,Museums,Smithsonian,The Met,Guggenheim,Field Museum,Getty Center
283,Road Trip Routes,Route 66,Garden Route,Great River Road,Lincoln Highway
284,Mountain Ranges,Appalachians,Rocky Mountains,Black Hills,Sierra Nevada,Cascade Range,Wasatch Range,Adirondacks,Sandia Mountains,White Mountains
285,Desert Spots,Mojave,Sonoran,Great Basin,Chihuahuan,Death Valley,Gila,Joshua Tree,White Sands,Nevada Desert
286,Culinary Cities,New Orleans,Portland,San Francisco,New York City,Nashville,Chicago,Charleston,Philadelphia,Austin
287,Southern Cities,Atlanta,New Orleans,Charleston,Nashville,Memphis,Miami,Savannah,Little Rock,Baton Rouge
288,Cultural Festivals,Mardi Gras,Burning Man,Jazz Festival,Carnival,State Fair,Coachella,Outside Lands
289,Famous Museums,Smithsonian,MoMA,The Met,Guggenheim,Walker Art Center,Field Museum,National Gallery,Brooklyn Museum
290,Island Destinations,Hawaii,Mackinac Island,Long Island,Key West,Block Island,San Juan Islands,Catalina Island,Fire Island
291,Winter Attractions,Ski Resorts,Snowboarding,Ice Fishing,Hot Springs,Winter Carnivals,Dog Sledding,Snowmobiling,Ice Climbing,Holiday Markets
292,American Icons,Baseball,Apple Pie,Fourth of July,American Flag,Liberty Bell,Bald Eagle,Mount Rushmore,Hollywood,Thanksgiving
293,Lake Destinations,Lake Tahoe,Lake George,Lake Superior,Lake Michigan,Lake Champlain,Crater Lake,Lake Powell,Lake Okeechobee,Lake Erie
294,Historic Trails,Oregon Trail,Appalachian Trail,Cumberland Road,Mormon Trail,Mesa Verde Trail,Trail of Tears,California Trail,Chisholm Trail,Overland Trail
295,Famous Theaters,Broadway,Strand Theatre,Lyric Theatre,Arena Stage,The Fox Theatre,The Wiltern,The Orpheum
296,American Presidents,George Washington,Abraham Lincoln,Franklin Roosevelt,John F Kennedy,Thomas Jefferson,Andrew Jackson,Ulysses Grant,James Madison
297,Music Cities,Nashville,Memphis,Austin,New Orleans,Detroit,Seattle,Chicago,New York,Los Angeles
298,Amusement Parks,Disney World,Universal Orlando,Busch Gardens,Knotts Berry Farm,Dollywood,Cedar Point,Hershey Park
299,Urban Parks,Central Park,Golden Gate Park,Millennium Park,Grant Park,Forest Park,Zilker Park,Lincoln Park,Prospect Park,Piedmont Park
300,Space and Science NASA,Space Center Houston,Jet Propulsion Laboratory,Pegasus,Explorer,Discovery,Columbia
301,US Capitals,Washington DC,Atlanta,Denver,Austin,Boston,Salem,Sacramento,Olympia,Albany
302,American Writers,Mark Twain,Ernest Hemingway,Harper Lee,Toni Morrison,Maya Angelou,Edgar Allan Poe,Emily Dickinson,John Steinbeck
303,Iconic Foods,Burger,Corn Dog,Apple Pie,Barbecue,Fried Chicken,Clam Chowder,Philly Cheesesteak,Gumbo,Lobster Roll
304,Great Lakes,Lake Superior,Lake Michigan,Lake Huron,Lake Erie,Lake Ontario,Saint Marys River,Buffalo River,Duluth Harbor,Sault Ste Marie
305,Famous Bridges,Golden Gate,Brooklyn,Mackinac,Seven Mile,Chesapeake Bay
306,Lighthouses,Portland Head,Cape Hatteras,Presque Isle,Barnegat Light,Point Reyes,Montauk Point
307,American Sports Teams,Yankees,Cowboys,Lakers,Bulls,Patriots,Red Sox,Giants,Warriors,Packers
308,Famous Universities,Harvard, Yale,Stanford,MIT,Princeton,UCLA,Columbia,Caltech
309,Pioneer Towns,Deadwood,Virginia City,Leadville,Dodge City,Tombstone,Bisbee,Custer,Sundance
310,Hollywood Films,Forrest Gump,The Godfather,Jurassic Park,Star Wars,Rocky,Titanic,Casablanca
311,Festivals and Events,Comic Con,SXSW,Coachella,Burning Man,Mardi Gras,Lollapalooza
312,Internet Technologies,World Wide Web,Hypertext,HTTP,Browser,HTML,Cookies,URL,ISP,Cyberspace
313,Mobile Innovations,Smartphone,Touchscreen,GPS,App,Wi Fi,Bluetooth,4G,5G,MMS
314,Computer Hardware,CPU,RAM,Hard Drive,Graphics Card,Motherboard,Power Supply,Fan,SSD,USB
315,Software Breakthroughs,Operating System,Algorithm,Compiler,Open Source,Cloud Computing,Virtual Machine,Encryption,Patch,API
316,Artificial Intelligence,Neural Network,Machine Learning,Deep Learning,Automation,Data Mining,Chatbot,Algorithm,Bot
317,Renewable Energy,Photovoltaic,Solar Panel,Wind Turbine,Geothermal,Hydropower,Biomass,Fuel Cell,Tidal Energy,Energy Storage
318,Transportation Advances,Electric Vehicle,Autonomous Car,Hyperloop,High Speed Rail,Drone,Navigation System,Fuel Efficiency,Regenerative Braking
319,Medical Technologies,MRI,CT Scan,Ultrasound,Robotic Surgery,prosthetics,Telemedicine,Biometrics,Artificial Organ
320,Communication Devices,Telephone,Radio,Television,Satellite,Modem,Router,Fax Machine,Walkie Talkie,Pager
321,Data Storage Technologies,Magnetic Tape,Hard Disk Drive,Flash Drive,Optical Disc,Cloud Storage,SD Card,RAM,ROM,Database
322,Semiconductor Developments,Transistor,Integrated Circuit,Microchip,Nanotech,Doping,Silicon Wafer,Lithography,Moores Law,CMOS
323,Computing Paradigms,Mainframe,Personal Computer,Laptop,Tablet,Server,Data Center,Quantum Computer,Parallel Processing
324,Space Exploration,Satellite,Rocket,Space Shuttle,Probe,Astronaut,Launch Pad,Space Station,Orbiter,Telemetry
325,Internet Security,Firewall,Antivirus,Malware,Phishing,Encryption,VPN,Biometric,2FA,Ransomware
326,Digital Media,Streaming,Podcasting,Blog,Online Gaming,Virtual Reality,MP3,Cloud Gaming
327,Wearable Technology,Smartwatch,Fitness Tracker,Virtual Glasses,Smart Clothes,Health Monitor,Heart Rate Sensor,Step Counter,Smart Ring
328,Robotics,Automation,Servo Motor,Sensor,Actuator,Drone,Manipulator,Humanoid Robot,Machine Vision
329,Blockchain,Distributed Ledger,Crypto,Smart Contract,Mining,Hashing,Satoshi,Token,Node,Consensus
330,Wireless Communication,Bluetooth,Wi Fi,NFC,Radio Frequency,Cell Tower,Signal Strength,5G,Satellites,Infrared
331,Display Technologies,LED,OLED,LCD,Plasma,Refresh Rate,Pixel,Resolution,Touchscreen,Backlight
332,Emerging Tech,Holography,Quantum Computing,Nanobots,3D Holograms,Cryptography,Edge Computing,Smart Dust,Digital Twins
333,Computer Networking,IP Address,Router,Switch,Firewall,Subnet,VPN,MAC Address,Network Protocol,TCP IP
334,E-commerce,Online Shopping,Digital Wallet,Payment Gateway,Shopping Cart,Customer Review,Dropshipping,Flash Sale
335,Virtual and Augmented Reality,Headset,Motion Tracking,Haptic Feedback,Mixed Reality,3D Modeling,Immersive,Field of View,Latency
336,Energy Storage,Battery,Lithium Ion,Capacitor,Fuel Cell,Power Bank,Charge Cycle,Energy Density,Rechargeable,Grid Storage
337,Artificial Intelligence Applications,Chatbot,LLM,Image Recognition,Speech Recognition,Facial Recognition,Machine Vision,Expert System
338,Mobile Computing,Laptop,Tablet,Smartphone,Hotspot,Mobile OS,App Store,Bluetooth,Wi Fi,Data Sync
339,Internet of Things,Smart Home,Wearables,Sensors,Connectivity,Automation,Cloud Integration,Network,Data Analytics,Edge Devices
340,Big Data,Data Mining,Analytics,Hadoop,Data Warehouse,Machine Learning,Data Set,Data Lake,Cluster Computing,Streaming Data
341,Digital Photography,DSLR,ISO,Aperture,Shutter Speed,Lens,Pixel,Image Sensor,RAW Format,Editing Software
342,Thermal Technologies,Heat Sink,Thermal Paste,Cooling Fan,Liquid Cooling,Peltier Cooler,Heat Pipe,High Temps,Temperature Sensor
343,Software Development,IDE,Debugging,Version Control,Repository,Sprint,Agile,Testing,Deployment,Prototype
344,Electric Power Generation,Turbine,Generator,Transformer,Grid,Alternator,Circuit Breaker,Power Plant,Voltage,Current
345,Automotive Technologies,Electric Motor,Autopilot,Hybrid Car,Fuel Injection,ABS,Nitrogen Oxides,Turbocharger
346,Telecommunications,Fiber Optics,Satellite Dish,Base Station,Router,Modulation,Multiplexing,Signal Booster
347,Human Computer Interaction,Touchscreen,Voice Command,Haptic Feedback,Eye Tracking,Virtual Keyboard,User Experience,Accessible
348,Satellite Systems,GPS,Geostation,Telemetry,Antenna,Payload,Spacecraft,Ground Station,Orbital Mechanics
349,Cereal Crops,Wheat,Rice,Barley,Oats,Corn,Rye,Sorghum,Millet,Sesame
350,Farming Equipment,Tractor,Plow,Harvester,Seeder,Tiller,Combine,Rake,Irrigation System
351,Crop Pests,Aphid,Caterpillar,Weevil,Locust,Mite,Beetle,Nematode,Armyworm,Grasshopper
352,Soil Types,Clay,Sand,Loam,Silt,Peat,Chalky,Gravelly,Saline,Alluvial
353,Fertilizers,Nitrogen,Phosphorus,Potassium,Compost,Manure,Urea,Ammonium,Nitrate,Miracle Gro
354,Plant Diseases,Blight,Mildew,Rust,Root Rot,Wilt,Leaf Spot,Downy Mildew,Canker,Fusarium
355,Orchard Fruits,Apple,Pear,Cherry,Peach,Plum,Apricot,Nectarine,Pomegranate,Mulberry
356,Grasses,Switchgrass,Bermudagrass,Fescue,Ryegrass,Bluegrass,Zoysia,Buffalograss,Timothy,Crabgrass
357,Irrigation Methods,Drip,Flood,Sprinkler,Centrifugal,Surface,Subsurface,Furrow,Basin,Manual
358,Harvesting Tools,Sickle,Scythe,Pruning Shears,Reaper,Fruit Picker,Lopper,Shears
359,Legumes,Pea,Bean,Lentil,Chickpea,Soybean,Peanut,Alfalfa,Clovers,Black-eyed Pea
360,Farming Techniques,Plowing,Weeding,Sowing,Fertilizing,Harvesting,Irrigating,Pruning,Transplant,Grafting
361,Farm Buildings,Barn,Silo,Greenhouse,Granary,Outhouse,Fence,Stable,Tool Shed,Chicken Coop
362,Organic Farming,Compost,Crop Rotation,Biocontrol,Green Manure,Permaculture,Mulching,No-till,Fallow,Cover Crop
363,Rice Varieties,Basmati,Jasmine,Sushi,Arborio,Black Rice,Red Rice,Wild Rice,Sweet Rice,Parboiled
364,Grain Storage,Bin,Silo,Bag,Pit,Warehouse,Tarp,Cold Storage,Shed,Container
365,Pest Control,Biocontrol,Insecticide,Herbicide,Fungicide,Trap Crop,Repellent,Bait,Trap
366,Farming Weather,Rain,Drought,Frost,Humidity,Temperature,Winds,Sunlight,Storm,Cloud Cover
367,Farm Chemicals,Insecticide,Herbicide,Fungicide,Pesticide,Fertilizer,Detergent,Adjuvant,Growth Regulator
368,Horticultural Plants,Rose,Shrub,Orchid,Lilac,Azalea,Bonsai,Marigold,Jasmine,Tulip
369,Animal Byproducts,Leather,Wool,Milk,Manure,Fat,Horn,Feather,Gelatin,Silk
370,Seasonal Crops,Tomato,Corn,Squash,Pumpkin,Cucumber,Watermelon,Melon,Peppers,Beans
371,Wheat Products,Bread,Pasta,Flour,Couscous,Bulgur,Bran,Germ,Cracker,Semolina
372,Farming Roles,Farmer,Harvester,Planter,Technician,Inspector,Surveyor,Manager,Labourer,Consultant
373,Seed Types,Hybrid,Heirloom,Certified,Organic,Treated,Untreated,Pelleted,Coated
374,Agri Technology,Drones,Soil Sensor,Automation,Hydroponics,Vertical Farming
375,Animal Feeds,Hay,Silage,Grain,Bran,Root Crops,Pasture,Supplements,Forage
376,Legume Types,Alfalfa,Bean,Pea,Lentil,Chickpea,Soybean,Clover,Asparagus Pea,Carob
377,Soil Fertility,Nutrient Cycling,Organic Matter,Crop Rotation,Cation Exchange,Soil pH,Nitrogen Fixation,Soil Structure,Humus Formation,Composting
378,Farm Produce Markets,Wholesale,Retail,Farmers Market,Cooperative,Export,Import,Auction
379,Crop Rotation,Cereal,Legume,Root Crop,Fallow,Green Manure,Vegetable,Grassland,Cover Crop,Pulse Crop
380,Farming Tools,Hoe,Fork,Rake,Spade,Secateurs,Wheelbarrow,Shovel,Pruner,Mattock
381,Poultry Types,Broiler,Layer,Duck,Turkey,Quail,Goose,Guinea Fowl,Peacock,Pheasant
382,Cereal Pests,Armyworm,Aphid,Weevil,Locust,Thrips,Wireworm,Corn Borer,Grasshopper,Leafhopper
383,Agricultural Festivals,Harvest Festival,Ploughing Day,Farmers Day,Rain Dance,Mabon,Lughnasadh,Thanksgiving,Eid al Adha
384,Greenhouse Plants,Tomato,Lettuce,Cucumber,Peppers,Orchid,Strawberry,Basil,Spinach,Chili
385,Farming Challenges,Drought,Flood,Soil Erosion,Climate Change,Weed Growth,Disease Outbreak
386,Church Architecture,Sanctuary,Altar,Nave,Choir,Transept,Apse,Aisle,Vault,Buttress
387,Religious Figures,Priest,Deacon,Bishop,Cardinal,Monk,Nun,Pope,Pastor,Minister
388,Church Services,Mass,Vespers,Communion,Baptism,Confession,Worship,Homily,Prayer,Procession
389,Religious Symbols,Cross,Dove,Chalice,Bible,Candle,Crucifix,Ichthys,Altar Cloth,Stained Glass
390,Church Music,Organ,Chant,Hymn,Psalm,Choir,Bell,Anthem,Liturgy,Carol
391,Church Items,Tabernacle,Pew,Lectern,Pulpit,Candlestick,Ciborium,Missal,Altar Rail,Sanctuary Lamp
392,Christian Holidays,Easter,Christmas,Advent,Lent,Pentecost,Epiphany,Good Friday,Ascension
393,Church Roles,Usher,Sexton,Altar Server,Choirmaster,Cantor,Cleric,Chaplain,Elder,Deaconess
394,Church Buildings,Cathedral,Chapel,Basilica,Abbey,Monastery,Parish,Rectory,Minster,Cloister
395,Sacred Texts,Bible,Gospel,Epistle,Psalter,Vulgate,New Testament,Old Testament,Apocrypha,Lectionary
396,Religious Rituals,Confirming,Anointing,Consecration,Ordination,Exorcism,Procession,Benediction,Veneration,Penance
397,Church Furnishings,Pulpit,Altar Cloth,Chalice,Ciborium,Paten,Thurible,Altar Rail,Ambry,Credence Table
398,Church Festivals,All Saints,Corpus Christi,Transfigured,Ascension Day,Feast Day,Michaelmas,Candlemas,Lammas
399,Church Actions,Preach,Pray,Baptize,Confess,Offer,Chant,Sing,Fast,Read Scripture`,XC=`401,Church Music Instruments,Organ,Harp,Flute,Lute,Horn,Bell,Trumpet,Violin,Drum
402,Christian Celebrations,Mass,Service,Ceremony,Sacrament,Communion,Baptism,Wedding,Funeral,Confession
403,Spiritual Concepts,Grace,Faith,Salvation,Redemption,Hope,Charity,Sin,Forgiveness
404,Religious Buildings Interiors,Narthex,Sanctuary,Nave,Chancel,Transept,Choir Loft,Font,Pulpit,Ambulatory
405,Church Services Types,Mass,Liturgy,Vespers,Matins,Compline,Worship,Benediction,Procession,Litany
406,Key Church Objects,Altar,Chalice,Paten,Ciborium,Crucifix,Candle Holder,Tabernacle,Bell,Missal
407,Clerical Titles,Deacon,Priest,Bishop,Cardinal,Pope,Monk,Nun,Pastor,Chaplain
408,Sacraments,Baptism,Communion,Confirmation,Marriage,Ordination,Confession,Eucharist,Wafer
409,Church Architecture Elements,Aisle,Nave,Apse,Vault,Transept,Choir,Clerestory,Narthex,Buttress
410,Religious Texts,Scripture,Bible,Gospel,Epistle,Psalter,Lectionary,Testament,Vulgate,Commentary
411,Church Roles and Titles,Priest,Bishop,Deacon,Cardinal,Pope,Monk,Nun,Pastor,Minister
412,Church Ritual Objects,Censer,Chalice,Ciborium,Paten,Thurible,Candle,Cross,Altar Cloth
413,Church Music Terms,Hymn,Anthem,Psalm,Chant,Organ,Liturgy,Choir,Caroling,Motet
414,Worship Actions,Pray,Sing,Preach,Benedict,Confess,Baptize,Read Scripture,Fast,Offer
415,Church Festivals and Seasons,Advent,Lent,Easter,Christmas,Pentecost,Epiphany,Good Friday,Ascension Day,All Saints Day
416,Religious Attire,Alb,Cassock,Chasuble,Stole,Surplice,Cope,Mitre,Vestments,Veil
417,Church Interior Features,Sanctuary,Nave,Chancel,Choir Loft,Pulpit,Ambry,Font,Narthex,Transept
418,Christian Denominations,Orthodox,Catholic,Protestant,Lutheran,Methodist,Baptist,Anglican,Presbyterian,Evangelical
419,Spiritual Values,Faith,Hope,Charity,Grace,Love,Salvation,Redemption,Forgiveness,Repentance
420,Church Bells and Instruments,Bell,Organ,Drum,Horn,Trumpet,Harp,Flute,Lute,Violin
421,Religious Texts and Books,Bible,Gospel,Epistle,Old Testament,New Testament,Psalter,Vulgate,Lectionary,Apocrypha
422,Church Building Types,Cathedral,Basilica,Chapel,Abbey,Monastery,Parish,Rectory,Minster,Cloister
423,Christian Celebrations and Observances,Mass,Communion,Baptism,Confession,Worship,Fast,Liturgy,Procession,Benediction
424,Classic Cartoon Characters,Mickey Mouse,Donald Duck,Bugs Bunny,Daffy Duck,Popeye,Scooby Doo,Tom,Jerry,Felix
425,90s Kids Shows,Power Rangers,Kenan and Kel,Hey Arnold,Doug,Rugrats,Fresh Prince,Goosebumps
426,Puppet Shows,Fraggle Rock,The Muppet Show,The Magic Garden,Pinwheel,Salty's Lighthouse,Reading Rainbow
427,Educational Kids Series,Reading Rainbow,Schoolhouse Rock,Cyberchase,Blues Clues,Arthur,Wild Kratts
428,Nickelodeon Favorites,Dora Explorer,Blues Clues,Fairly OddParents,Rugrats,Hey Arnold,Paw Patrol,Loud House
429,Animated Disney Shows,Kim Possible,Darkwing Duck,Recess,Lilo and Stitch,Proud Family,Gargoyles,TaleSpin,Gummi Bears,House of Mouse
430,Children’S Sitcoms,Full House,Even Stevens,Drake and Josh,Hannah Montana,Amanda Show,Lizzie McGuire
431,Classic Kids Game Shows,Double Dare,Nick Arcade,Figure It Out,BrainSurge,Fun House,Wild and Crazy Kids
432,Animal Characters,Arthur,Garfield,Snoopy,Pocoyo,Paddington,Bluey,Clifford,Curious George,Peppa Pig
433,Fantasy Children’S Series,Care Bears,Smurfs,My Little Pony,Banana Splits,Fraggle Rock,Captain Planet,He-Man,Thundercats
434,Children’S Science Shows,Beakman's World,Magic School Bus,Sid the Science Kid,Brain Games,Odd Squad
435,Storybook Inspired,Peter Rabbit,Charlottes Web,Curious George,Paddington Bear,Corduroy,Little Bear
436,Classic Animated Films,Fantasia,Bambi,Cinderella,Peter Pan,Pinocchio,Jungle Book,Lion King
437,PBS Kids Shows,Dragonfly TV,Cyberchase,Kratts Creatures,Martha Speaks,Wild Kratts,WordGirl,Arthur
438,Children’S Holiday Specials,Charlie Brown Christmas,Snowman,Polar Express
439,Classic Educational Cartoon Series,Schoolhouse Rock,Letter People,McGee and Me,Reading Rainbow,American Tail,Libertys Kids,Magic School Bus
440,Superhero Kids Shows,Teen Titans,Static Shock,Kid Justice,Kim Possible,Generator Rex,Big Hero 6,Pokemon,Power Rangers
441,Adventure Kids Shows,Kid vs Kat,Wild Thornberrys,Secret Saturdays,Recess,Gravity Falls,Pirate Islands
442,Classic Children’S Book Adaptations,Berenstain Bears,Franklin,Little Princess,Paddington Bear,Corduroy,Pippi Longstocking,Magic Tree House
443,Humorous Kids Shows,Animaniacs,Ed Edd n Eddy,Shaun the Sheep
444,Science Fiction Kids Shows,Jetsons,Futurama,Code Lyoko,Teenage Robot,ReBoot,Inspector Gadget,Ben 10,Galaxy Rangers,Powerpuff Girls
445,Mystery and Detective Shows,Hardy Boys,Nancy Drew,Enid Blyton,Detective Conan,Scooby Doo,Famous Five,Paw Patrol
446,Popular Preschool Series,Teletubbies,Baby Einstein,Barney Dinosaur,Dora Explorer,Blues Clues,Peppa Pig,Paw Patrol
447,Musical Kids Shows,Wiggles,LazyTown,Hi-5,Kuu Kuu Harajuku,Big Block Singsong
448,Classic British Children's TV,Basil Brush,Bagpuss,Danger Mouse,Clangers,Teletubbies,Postman Pat,Fireman Sam,Gordon Gopher
449,Animated Series from the 80s,He-Man,Transformers,Thundercats,GI Joe,Silverhawks,Voltron,Inspector Gadget,DuckTales
450,Animal Led Shows,Franklin Turtle,Wild Kratts,Bluey,Postman Pat,Peppa Pig,Curious George,Garfield
451,Seasonal and Nature Shows,Jack Frost,Snowman,Nature Cat,Wabbit Wampage,Martha Speaks,Rescue Bots
452,Fantasy Adventure Series,Smurfs,Magic School Bus,Fraggle Rock,Care Bears,My Little Pony,Dragon Tales,Arthur,Littlest Pet Shop
453,Classic Animated TV Girls,Totally Spies,Daria,Proud Family,Kim Possible,Carmen Sandiego,She-Ra
454,Animal Sidekick Characters,Scooby Doo,Blue,Clifford,Garfield,Porky Pig,Fievel,Mushu,Ren,Stimpy
455,Kids Nature and Science,Wild Kratts,Magic School Bus,Octonauts,Beakman's World,Reading Rainbow,Dinosaur Train
456,Classic Animated Musical Series,Little Mermaid,Gargoyles,Tinker Bell,Aladdin,Jungle Cubs,Pocahontas,Lion Guard,Tangled
457,Board and Card Game Adaptations,Uno,Twister,Dice World,Pokemon Card Game
458,TV Shows with Time Travel,Magic School Bus,Dora Explorer,Peg Cat,Time Warp Trio,Life with Louie
459,Kids Supernatural Series,Goosebumps,Are You Afraid Dark,Danny Phantom,Fairly OddParents,Haunted Hathaways
460,Animated Science Fiction Series,Voltron,Galaxy Rangers,Reboot,Ulysses 31,Futurama,Kid Cosmic,Rush Force,Lilo and Stitch,Jetsons
461,Popular Educational Shows,Reading Rainbow,Blues Clues,Magic School Bus,Arthur,Between Lions,Cyberchase,Sesame Street
462,Friends and Families,Loud House,Rugrats,Fairly OddParents,Hey Arnold,Jetsons,Full House,Big Nate
463,Classic Animated Comedies,Animaniacs,Pinky Brain,Ren and Stimpy,Simpsons,Futurama,Family Guy
464,Baking Supplies,FLOUR,SUGAR,YEAST,EGGS,BUTTER,BAKING SODA
465,Cooking Utensils,SPATULA,WHISK,LADLE,TONGS,GRATER,SIEVE
466,Beverages,WATER,JUICE,MILK,SODA,TEA,COFFEE
467,Branches of Biology,ZOOLOGY,BOTANY,GENETICS,ECOLOGY,MICROBIOLOGY,ANATOMY
468,The Solar System,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN
469,Famous Scientists,EINSTEIN,NEWTON,CURIE,GALILEO,DARWIN,TESLA
470,States of Matter,SOLID,LIQUID,GAS,PLASMA,CONDENSATE
471,Chemical Elements,HYDROGEN,OXYGEN,CARBON,IRON,GOLD,SILVER
472,Famous Composers,BACH,BEETHOVEN,MOZART,CHOPIN,VIVALDI,TCHAIKOVSKY
473,Music Terms,TEMPO,MELODY,HARMONY,RHYTHM,CHORD,VERSE
474,Record Labels,MOTOWN,DEF JAM,ATLANTIC,INTERSCOPE,COLUMBIA,CAPITOL
475,Countries in Asia,CHINA,INDIA,JAPAN,RUSSIA,INDONESIA,THAILAND
476,Famous Rivers,NILE,AMAZON,YANGTZE,MISSISSIPPI,DANUBE,MEKONG
477,Ancient Civilizations,EGYPT,GREECE,ROME,MESOPOTAMIA,INDUS VALLEY,MAYA
478,World Wars,BLITZKRIEG,D-DAY,PEARL HARBOR,HOLOCAUST,ATOM BOMB
479,Famous Rulers,CLEOPATRA,JULIUS CAESAR,ALEXANDER,GENGHIS KHAN,ELIZABETH I,NAPOLEON
480,Painters,DA VINCI,VAN GOGH,PICASSO,REMBRANDT,MONET,DALI
481,Whales,blue whale,humpback,orca,sperm whale,beluga,narwhal,gray whale
482,Shells,conch,scallop,oyster,clam,nautilus,cowrie,abalone
483,Coral Reef,clownfish,anemone,coral,sponge,starfish,sea urchin,crab
484,Deep Sea,anglerfish,viperfish,blobfish,gulper eel,isopod,vampire squid,chimera
485,Boats,submarine,yacht,trawler,kayak,canoe,ferry,tugboat
486,Burgers,big mac,whopper,baconator,slider,cheeseburger,double stack
487,Pizza Chains,dominos,pizza hut,papa johns,little caesars,sbarro,godfathers,unos
488,Fried Chicken,kfc,popeyes,chick-fil-a,churchs,zaxbys,bojangles,raising canes
489,Taco Joints,taco bell,del taco,chipotle,qdoba,moes,baja fresh,taco johns
490,Fast Food Sides,fries,onion rings,nuggets,coleslaw,biscuits,hash browns,apple pie
491,Drinks,coke,pepsi,sprite,fanta,dr pepper,mountain dew,root beer
492,Sci-Fi,star trek,doctor who,x-files,stranger things,mandalorian,firefly,battlestar
493,Streaming Services,netflix,hulu,hbo max,disney+,prime video,peacock,apple tv
494,Olympic Events,sprint,swim,gymnastics,judo,archery,fencing,rowing
495,School Furniture,desk,chair,whiteboard,locker,bookshelf,podium,table,chalkboard
496,School Rooms,cafeteria,library,gymnasium,principal,nurse,lab,classroom,auditorium
497,Art Colors,red,blue,yellow,green,purple,orange,cyan,magenta
498,Sculpture,clay,marble,bronze,chisel,kiln,pottery,statue,carving
499,Digital Art,pixel,vector,layer,hex,rgb,tablet,stylus,cmyk
500,Web Browsers,chrome,firefox,safari,edge,opera,brave,explorer,netscape
501,Domains,.com,.org,.net,.edu,.gov,.io,.co,.uk
502,Internet Terms,wifi,modem,router,server,cloud,link,bandwidth,cache
503,Email,inbox,spam,draft,sent,reply,attach,forward,subject
504,Internet Actions,download,upload,stream,browse,chat,post,click,scroll
505,Shoe Brands,nike,adidas,puma,reebok,vans,converse,jordan,crocs
506,Shoe Types,sneaker,boot,sandal,loafer,heel,flat,slipper,clog
507,Shoe Parts,sole,lace,tongue,heel,toe,eyelet,insole,upper
508,Boots,combat,cowboy,rain,snow,hiking,chelsea,ankle,wellington
509,Heels,stiletto,wedge,kitten,pump,platform,block,cone,spool
510,Shoe Materials,leather,suede,canvas,rubber,mesh,velvet,satin,patent
511,Construction Terms,foundation,insulation,drywall,joist,rafter,cornice,facade,lintel,stucco,mortar
512,Construction Tools,level,trowel,hammer,drill,saw,wrench,pliers,screwdriver,chisel
513,Famous Buildings,eiffel tower,colosseum,taj mahal,empire state,burj khalifa,pantheon,parthenon,louvre
514,Forensic Terms,autopsy,ballistics,fingerprint,toxicology,dna,rigor mortis,lividity,luminol
515,Felonies,murder,arson,burglary,robbery,kidnapping,treason,espionage,perjury
516,Civil Penalties,fine,restitution,injunction,damages,seizure,eviction,citation
517,Government Structure,legislative,executive,judicial,congress,senate,parliament,cabinet,ministry
518,Leonardo DiCaprio,titanic,inception,revenant,aviator,departed,romeo juliet,gatsby
519,Tom Cruise,top gun,jerry maguire,rain man,oblivion,mummy,jack reacher
520,NASCAR,daytona,talladega,pit stop,drafting,pace car,stock car,burnout
521,Famous Pirates,blackbeard,kidd,morgan,drake,bonny,rackham,roberts,bellamy
522,Declaration of Independence,liberty,pursuit,happiness,colonies,king george,jefferson,hancock,adams,revolution
523,Ben Franklin,kite,key,bifocals,almanac,diplomat,printer,stove
524,Mark Twain,huck finn,tom sawyer,mississippi,hannibal,steamboat,frog
525,Nicola Tesla,coil,ac current,radio,induction,wardenclyffe,turbine,x-ray,oscillator
526,Nuclear Weapons,fat man,little boy,tsar bomba,trinity,castle bravo,ivy mike,gadget,demon core
527,Doomsday,apocalypse,armageddon,rapture,fallout,extinction,cataclysm,judgment day,end times
528,Batman,joker,robin,alfred,batmobile,gotham,penguin,riddler,two-face
529,Superman,krypton,lois lane,lex luthor,smallville,daily planet,zod,doomsday,clark kent
530,California,los angeles,san francisco,san diego,sacramento,hollywood,yosemite,malibu,napa
531,Japan,tokyo,kyoto,osaka,mt fuji,sushi,anime,samurai,kimono
532,Airports,heathrow,jfk,lax,ohare,dubai,haneda,changi
533,Airplanes,boeing 747,airbus a380,cessna,concorde,spitfire,dreamliner,blackbird,spirit
534,Donuts,glazed,jelly,boston cream,sprinkles,cruller,bear claw,long john
535,Pastries,croissant,danish,eclair,tart,turnover,strudel,cannoli,baklava
536,Cookies,oatmeal,peanut butter,oreo,macaroon,biscotti,shortbread,ginger snap
537,Power Tools,drill,saw,sander,grinder,router,nail gun,jigsaw,lathe,impact driver
538,Fasteners,screw,nail,bolt,nut,washer,anchor,rivet,staple,hinge
539,Plumbing,pipe,wrench,plunger,faucet,drain,washer,valve,snake,trap
540,Hospital Staff,doctor,nurse,surgeon,orderly,medic,pharmacist,radiologist
541,Hospital Rooms,emergency,icu,maternity,waiting,surgery,recovery,pharmacy,cafeteria
542,Hospital Equipment,wheelchair,stretcher,iv drip,scalpel,stethoscope,syringe,monitor,ventilator
543,Symptoms,fever,cough,pain,rash,swelling,nausea,dizziness,chills
544,Casino Table Games,poker,blackjack,roulette,craps,baccarat,pai gow,war,bridge,sic bo
545,Slots,reel,jackpot,payline,bonus,scatter,wild,progressive,coin,lever
546,Casino Slang,whale,pit boss,high roller,comp,dealer,croupier,shill,marker,ante
547,Casino Destinations,vegas,reno,macau,monte carlo,biloxi,tunica,singapore
548,Dairy,milk,cheese,butter,yogurt,cream,eggs,sour cream
549,Produce,apple,banana,lettuce,carrot,potato,tomato,onion,pepper
550,Bakery,bread,cake,muffin,donut,pie,cookie,croissant
551,Grocery Aisles,frozen,canned,cereal,baking,spices,pet,cleaning,paper
552,Sesame Street,elmo,big bird,oscar,grover,bert,ernie,count,abby,zoe
553,The Beatles,john,paul,george,ringo,let it be,hey jude,yesterday,help
554,Queen,freddie,brian,roger,john,radio ga ga,under pressure
555,David Bowie,heroes,starman,lets dance,space oddity,rebel rebel,changes,fame
556,Michael Jackson,thriller,bad,beat it,billie jean,black or white,heal the world
557,The Beach Boys,good vibrations,surfin usa,god only knows,kokomo,i get around,barbara ann,help me rhonda
558,CCR,proud mary,bad moon rising,fortunate son,down on the corner,green river,travelin band
559,South Park,cartman,kenny,kyle,stan,butters,randy,chef,garrison,mackey,timmy
560,Oscar Winners,titanic,gladiator,crash,parasite,moonlight,chicago,rocky,patton,amadeus,godfather
561,Kubrick,shining,spartacus,lolita,eyes wide shut,barry lyndon,the killing
562,Fincher,fight club,seven,zodiac,gone girl,panic room,mank,the game
563,Nolan,inception,tenet,memento,insomnia,prestige,interstellar,dunkirk,oppenheimer
564,Nicktoons,rugrats,doug,ren stimpy,spongebob,catdog,hey arnold,invader zim,danny phantom
565,Candy,snickers,skittles,twix,kitkat,reeses,starburst,milky way,nerds,smarties,hersheys
566,Obsolete Tech,pager,fax machine,floppy disk,vhs,walkman,typewriter,telegram,cassette,beeper
567,Ancient Tech,wheel,plow,loom,sundial,compass,aqueduct,abacus,gunpowder,papyrus,chariot
568,Doctors,surgeon,pediatrist,dentist,ER,oncologist,psychiatrist
569,Teachers,professor,tutor,instructor,lecturer,educator,mentor,coach,principal,dean
570,Judge,gavel,robe,bench,verdict,ruling,sentence,bailiff,chambers,order
571,Lawyer,attorney,counsel,defense,prosecutor,paralegal,brief,objection,motion,appeal
572,Olde Timey Slang,balderdash,poppycock,flummox,kerfuffle,shenanigans,bamboozle,codswallop,malarkey,skedaddle
573,Philosophy,ethics,logic,stoicism,metaphysics,plato,socrates,nietzsche,kant,dualism
574,Physics,gravity,inertia,velocity,momentum,relativity,photon,friction,optics,magnetism
575,Quantum Mechanics,quark,photon,entanglement,double slit,boson,neutrino,antimatter,planck,heisenberg
576,Biology,mitosis,genetics,evolution,osmosis,dna,metabolism,ecosystem,parasite,anatomy
577,Chemistry,molecule,isotope,catalyst,polymer,oxidation,titration,electron,proton,covalent
578,Geography,equator,latitude,longitude,hemisphere,isthmus,peninsula,plateau,tundra
579,PE Class,dodgeball,kickball,gymnasium,whistle,laps,pushups,rope climb,scrimmage
580,Robin Williams Movies,Aladdin,Jumanji,Flubber,Hook,Popeye,Robots,Patch Adams,Mrs Doubtfire
581,Mel Brooks Movies,Blazing Saddles,Spaceballs,The Producers,Men in Tights,Silent Movie,High Anxiety
582,Jim Henson,Kermit,Labyrinth,Dark Crystal,Fraggle Rock,Sesame Street,Muppet Show,The Storyteller,Puppeteer
583,The Muppets,Kermit,Miss Piggy,Fozzie Bear,Gonzo,Animal,Swedish Chef,Beaker,Dr Bunsen,Statler,Waldorf
584,Alice in Wonderland,Alice,White Rabbit,Cheshire Cat,Mad Hatter,Caterpillar,Dormouse,March Hare,Tweedledee,Tweedledum
585,Types of Makeup,Lipstick,Mascara,Foundation,Eyeliner,Blush,Concealer,Primer,Bronzer,Highlighter,Eyeshadow
586,Cleaning Supplies,Bleach,Ammonia,Windex,Lysol,Detergent,Vinegar,Comet,Degreaser,Soap,Polish
587,Pots and Pans,Skillet,Wok,Saucepan,Dutch Oven,Stockpot,Griddle,Roaster,Frying Pan,Saute Pan,Crepe Pan
588,Hot Sauces,Tabasco,Sriracha,Cholula,Franks,Tapatio,Texas Pete,Valentina,Crystal,Truff,Sambar
589,Periodic Table,Hydrogen,Helium,Oxygen,Carbon,Nitrogen,Gold,Silver,Iron,Copper,Neon
590,Mary Poppins,Mary,Bert,Umbrella,Carpet Bag,Penguins,Kite,Mr Banks,Tuppence
591,Greasy Foods,Pizza,Cheeseburger,French Fries,Fried Chicken,Bacon,Onion Rings,Corn Dog,Chimichanga,Poutine
592,Daredevils,Evel Knievel,Houdini,David Blaine,Travis Pastrana,Robbie Knievel,Nik Wallenda,Knoxville,Criss Angel
593,Fraudsters,Bernie Madoff,Charles Ponzi,Frank Abagnale,Jordan Belfort,Elizabeth Holmes,Anna Delvey,Billy McFarland,Wirecard
594,1960s TV,Star Trek,Batman,Bewitched,Addams Family,The Munsters,Twilight Zone,The Flintstones,The Jetsons,Gunsmoke
595,Billionaires,Elon Musk,Jeff Bezos,Bill Gates,Warren Buffett,Larry Ellison,Oprah Winfrey,Walton,Arnault
596,Hitchcock Films,Psycho,The Birds,Vertigo,Rear Window,Rope,Rebecca,Spellbound
597,Types of Coffee,Espresso,Latte,Cappuccino,Macchiato,Americano,Mocha,Flat White,Cold Brew,Cortado,Affogato
598,Antiquated Transport,Steam Engine,Horse Buggy,Chariot,Zeppelin,Stagecoach,Litter,Rickshaw,Steamship,Carriage
599,Hand Wear,Glove,Mitten,Ring,Bracelet,Watch,Puppet,Henna,Fingerprint,Manicure
600,Cigarette Brands,Marlboro,Camel,Newport,Winston,Lucky Strike,Pall Mall,Kool,Dunhill,Parliament
601,Will Smith Movies,Men in Black,Fresh Prince,Aladdin,Happyness,I Am Legend,Bad Boys,Hitch,Ali,King Richard
602,Jim Carrey Movies,Ace Ventura,The Mask,Truman Show,Liar Liar,Grinch,Bruce Almighty,Sonic,Riddler
603,Simpsons Characters,Homer,Marge,Bart,Lisa,Maggie,Moe,Burns,Flanders,Skinner,Krusty
604,Playboy Centerfolds,Pamela Anderson,Marilyn Monroe,Jenny McCarthy,Carmen Electra,Shannon Tweed
605,Famous Recluses,Howard Hughes,JD Salinger,Emily Dickinson,Harper Lee,Greta Garbo,Bobby Fischer,Syd Barrett,Pynchon
606,College Football Champs,Alabama,Georgia,LSU,Clemson,Ohio State,Florida State,Auburn,Michigan,Texas,USC
607,NCAA BB Champs,Duke,UNC,Kansas,Kentucky,UConn,Villanova,Baylor,Virginia,Louisville,UCLA
608,Microsoft,Windows,Office,Xbox,Excel,Word,PowerPoint,Bill Gates,Surface,Outlook,Azure
609,Apple,iPhone,iPad,Mac,Steve Jobs,Siri,Watch,AirPods,iTunes,iOS,MacBook
610,IBM,Watson,Mainframe,ThinkPad,Deep Blue,Selectric,Punch Card,Armonk,Big Blue,Typewriter,Server
611,NATO Members,USA,UK,France,Germany,Canada,Italy,Turkey,Spain,Poland,Norway
612,Joseph Stalin,Dictator,Soviet,Communism,Gulag,Georgia,World War II
613,USSR,Soviet Union,Communism,Cold War,Kremlin,Red Army,Sputnik,Cosmonaut,Sickle,Hammer
614,KGB,Spy,Intelligence,Secret Police,Cold War,Putin,Espionage,Surveillance,Lubyanka
615,Famous Explorers,Columbus,Magellan,Marco Polo,Lewis,Clark,Cook,Shackleton,Armstrong,Vespucci,Hudson
616,COLORS,RED,BLUE,GREEN,YELLOW,ORANGE,PURPLE,PINK,BLACK,WHITE,BROWN,GRAY,GOLD,SILVER,BRONZE,COPPER,TEAL,NAVY,LIME,MAROON,CYAN,RUST,JADE,PLUM,VIOLET,INDIGO
617,BUGS,ANT,BEE,FLY,SPIDER,WORM,LADYBUG,BUTTERFLY,MOSQUITO,BEETLE,MOTH,GNAT,FLEA,TICK,WASP,SLUG,MITE,CATERPILLAR,CENTIPEDE,SNAIL,CRICKET
618,CLOTHES,SHIRT,PANTS,SHOE,HAT,SOCK,DRESS,COAT,JACKET,SCARF,GLOVE,VEST,BELT,BOOT,CAP,HOOD,SHORTS,TSHIRT,SANDALS,SWIMSUIT,SWEATER,MITTENS,SKIRT,JEANS,LEGGINGS,SWEATS,ONESIE,BIB,TANK,BLOUSE
619,KITCHEN ITEMS,FORK,SPOON,KNIFE,PLATE,BOWL,CUP,GLASS,PAN,POT,NAPKIN,DISH,MUG,TRAY,STOVE,SINK,FRIDGE,OVEN,WHISK,LADLE,SPATULA,TOASTER,BLENDER,MIXER
620,SCHOOL ITEMS,PENCIL,PEN,PAPER,BOOK,GLUE,RULER,DESK,CHAIR,TEACHER,MAP,QUIZ,TEST,PASS,MARKER,CRAYON,SCISSORS,CHALK,NOTEBOOK,HIGHLIGHTER,BOARD,BACKPACK,LUNCH,BUS,BELL
621,TOYS,BALL,DOLL,BLOCK,CAR,PUZZLE,KITE,YO-YO,ROBOT,TEDDY BEAR,TOP,BIKE,DRUM,GAME,LEGO,LOGS,TILES,BRICKS,SLINKY,ACTION FIGURE,TRAIN
622,SNACKS,CHIPS,COOKIE,CANDY,POPCORN,CAKE,DONUT,ICECREAM,PRETZEL,NUTS,DIP,BAR,PIE,CRACKER,YOGURT
623,FOOD,EGG,TOAST,CEREAL,PANCAKE,WAFFLE,BACON,SAUSAGE,OATMEAL,SANDWICH,SOUP,SALAD,PIZZA,BURGER,HOTDOG,TACO,FRIES,STEAK,PASTA,RICE,MEATLOAF,MEAT,BUN,JAM,HAM
624,NATURE,TREE,FLOWER,GRASS,LEAF,DIRT,ROCK,SAND,WATER,SKY,SUN,MOON,MUD,DUST,STONE,CLAY,BUSH,PATH,MOSS,FERN,RIVER,LAKE,POND,STREAM
625,SPACE,ROCKET,ASTRONAUT,ALIEN,PLANET,STAR,MOON,SUN,DARK,COLD,VOID,MARS,ORBIT,COMET,METEOR,GALAXY
626,PIRATES,SHIP,MAP,GOLD,PARROT,EYEPATCH,HOOK,SWORD,FLAG,SEA,X
627,MUSIC,SONG,DRUM,GUITAR,PIANO,FLUTE,HORN,BELL,SINGER,GONG,BASS,HARP,LUTE,NOTE,TUNE
628,ART,PAINT,DRAW,COLOR,MARKER,CRAYON,PAPER,CLAY,GLUE,INK,WAX,OIL,DYE,TAPE,CANVAS,SKETCH,BRUSH,EASEL,PENCIL
629,SIZES,BIG,SMALL,TALL,SHORT,LONG,WIDE,THIN,FAT,HUGE,TINY,GIANT,LARGE,LITTLE,MINI,MICRO
630,SPEEDS,FAST,SLOW,QUICK,RAPID,SWIFT,TURTLE,SNAIL,CHEETAH,STOP,GO,RACE,DASH,ZOOM,CRAWL,PLOD,DELAY,LAG
631,CAMPING,TENT,FIRE,WOOD,FLASHLIGHT,S MORES,HIKE,LANTERN,COMPASS,CANTEEN,BACKPACK,BOOTS
632,BEACH,SAND,OCEAN,SHELL,WAVE,TOWEL,UMBRELLA,BUCKET,SPADE,CRAB,GULL,DUNE,KELP,RAFT,FLOAT,SWIM,SUN
633,PARTY,CAKE,BALLOON,GIFT,CANDLE,GAME,FRIENDS,MUSIC,DANCE,CARD,HAT,STREAMER,CONFETTI
634,HALLOWEEN,GHOST,WITCH,PUMPKIN,CANDY,COSTUME,BAT,SPIDER,SKELETON,MONSTER,DARK,SCARE,TRICK
635,PLAYGROUND,SLIDE,SWING,SANDBOX,SEESAW,LADDER,BENCH,BARS,RING,FORT,TUNNEL,CLIMB,TAG,SKIP,HIDE,SEEK
636,CIRCUS,CLOWN,LION,TENT,ACROBAT,POPCORN,TICKET,MAGIC,SHOW,RING
637,BIRTHDAY,CAKE,CANDLE,CARD,PARTY,GIFT,AGE,YEAR,BALLOONS,GAMES,FRIENDS,SONG
638,MONEY,COIN,DOLLAR,BANK,PENNY,QUARTER,DIME,CASH
639,MAIL,LETTER,STAMP,BOX,CARD,PACKAGE,MAILMAN,TRUCK
640,LIBRARY,BOOK,READ,QUIET,SHELF,CARD,DESK,STORY,COMPUTER
641,MOVIES,POPCORN,SEAT,SCREEN,TICKET,CANDY,FILM,SHOW,SNACKS,SODA,NACHOS,PRETZEL,SLUSHIE
642,DOCTOR,SHOT,MEDICINE,NURSE,SICK,HEALTH,CHECKUP,BANDAGE,PILL,CHECK,WAIT
643,DENTIST,TEETH,BRUSH,FLOSS,CHAIR,SMILE,CLEAN,OPEN
644,FIRE STATION,TRUCK,HOSE,LADDER,WATER,ALARM,POLE,HELMET
645,POLICE,CAR,BADGE,UNIFORM,HELP,SAFETY,SIREN,LIGHTS
646,PICNIC,BASKET,BLANKET,SANDCH,ANT,PARK,SUN,FOOD,APPLE,GRAPE,JUICE,COOKIE
647,BAKING,FLOUR,SUGAR,EGG,MILK,MIX,BOWL,OVEN,YEAST,BUTTER,SODA
648,READING,BOOK,PAGE,WORD,PICTURE,STORY,LIBRARY,LOOK
649,DIRECTIONS,UP,DOWN,LEFT,RIGHT,IN,OUT,OVER,UNDER,EAST,WEST,BACK,NEAR
650,PLACES,HOME,SCHOOL,STORE,PARK,ZOO,BEACH,FARM,TOWN,CITY,SHOP
651,FLYING THINGS,BIRD,PLANE,KITE,BEE,BUTTERFLY,BAT,BALLOON,FLY,WASP,OWL,DUCK,CLOUD
652,SWIMMERS,FISH,WHALE,DUCK,FROG,TURTLE,DOG,SHARK,SEAL,CRAB
653,WHEELED ITEMS,CAR,BIKE,BUS,TRUCK,SKATE,WAGON,SCOOTER,VAN,CART,TRAIN
654,GROWING THINGS,BABY,PUPPY,KITTEN,FLOWER,TREE,PLANT,HAIR,GRASS,NAIL,SEED
655,SKY OBJECTS,SUN,MOON,STAR,CLOUD,BIRD,PLANE,KITE,RAIN,PLANET,COMET,DARK,SPACE,RAINBOW
656,HOUSE ITEMS,DOOR,WINDOW,WALL,FLOOR,ROOF,LIGHT,ROOM
657,BABY ANIMALS,PUPPY,KITTEN,CHICK,CALF,FOAL,LAMB,CUB,DUCKLING
658,SOFT THINGS,PILLOW,COTTON,FEATHER,CLOUD,FUR,VELVET,SILK,BLANKET,BUNNY,MOSS
659,LOUD THINGS,SIREN,DRUM,THUNDER,SCREAM,TRUMPET,FIREWORK,ALARM,HORN,YELL,BANG,CRASH,BARK
660,STICKY THINGS,GLUE,TAPE,HONEY,SYRUP,GUM,STICKER,JAM,PASTE,SAP
661,HAPPY THINGS,SMILE,LAUGH,HUG,GIFT,FRIEND,PLAY,WIN
662,SAD THINGS,CRY,TEAR,FROWN,HURT,LOSE,SICK,MISS
663,SCARY THINGS,GHOST,MONSTER,DARK,SPIDER,SNAKE,STORM,NIGHTMARE
664,FUNNY THINGS,JOKE,CLOWN,TICKLE,SILLY,GIGGLE,PRANK,LAUGH
665,FRIENDS,PAL,BUDDY,MATE,BESTIE,PEER,CLASSMATE,NEIGHBOR
666,BUILDINGS,HOUSE,APARTMENT,BARN,CASTLE,TOWER,SHED,CABIN,HUT,COOP
667,CAR PARTS,WHEEL,DOOR,SEAT,HORN,LIGHT,TIRE,WINDOW,TRUNK,KEY,HOOD
668,COMPUTER,SCREEN,MOUSE,KEY,PAD,CORD,GAME,WEB,CLICK
669,PHONE,APP,CALL,TEXT,GAME,PIC,CAM,RING,TOUCH
670,ICECREAM FLAVORS,VANILLA,CHOCO,STRAWBERRY,MINT,CHIP,COOKIE,BERRY,OREO,NUTS,FUDGE,FRUIT,SPRINKLES,COFFEE
671,SANDWICH PARTS,BREAD,MEAT,CHEESE,LETTUCE,TOMATO,MAYO,PICKLE
672,SHINY THINGS,SUN,STAR,LAMP,GOLD,GEM,LIGHT,MOON,FIRE,SILVER,MIRROR,GLASS,WATER,EYE,COIN
673,BOUNCY THINGS,BALL,KANGAROO,BUNNY,POGO,RUBBER,EGG,FROG,SPRING,JUMP,HOP
674,MELTING THINGS,ICE,SNOW,CANDLE,BUTTER,CHEESE,WAX,CANDY,CHOCO,FROST
675,MYTHICAL PLACES,AGARTHA,ARCADIA,ASGARD,ATLANTIS,AVALON,AXIS MUNDI,CAMELOT,CIBOLA,COCKAIGNE,DORADO,EDEN,EL DORADO,HELL,HEAVEN,HEL,HYPERBOREA,JOTUNHEIM,LEMURIA,LOTHLORIEN,MEROPIS,SVARTALFHEIM,TARTARUS,TROY,UNDERWORLD,UTOPIA,VALHALLA,VANAHEIM,XANADU,YGGDRASIL,ZION
676,FAST FOOD CHAINS,BURGER KING,MCDONALD'S,TACO BELL,SUBWAY,KFC,PIZZA HUT,DOMINO'S,CHIPOTLE,ARBYS,DUNKIN,SONIC
677,SEASONS,SPRING,SUMMER,FALL,WINTER,AUTUMN
678,RIGHTS,FREEDOM,JUSTICE,EQUALITY,DIGNITY,PEACE,LAW,CITIZENSHIP
679,EVOLUTION,HOMO,HABILIS,ERECTUS,NEANDERTHAL,SAPIENS,SELECTION,DRIFT,SPECIATION,ADAPTATION,PHYLOGENY,CLADISTICS,HOMOLOGY
680,CULTURAL EXPRESSIONS,MUSIC,DANCE,THEATER,STORY,PAINTING,POETRY,FESTIVAL
681,LIFE STAGES,INFANT,CHILD,TEEN,ADULT,SENIOR,ELDERLY,YOUTH
682,SOCIAL STRUCTURES,FAMILY,COMMUNITY,TRIBE,NATION,STATE,CLUB,UNION
683,EMOTIONS,JOY,GRIEF,ENVY,PRIDE,GUILT,LOVE,SURPRISE
684,HOMINIDS,HOMO,HABILIS,ERECTUS,SAPIENS,NEANDERTHAL,DENISOVAN
685,NEEDS,FOOD,WATER,SHELTER,CLOTHING,SLEEP,HEALTH,LOVE
686,BODY SYSTEMS,RESPIRATORY,NERVOUS,DIGESTIVE,MUSCULAR,SKELETAL,ENDOCRINE
687,CULTURES,WESTERN,EASTERN,INDIGENOUS,NOMADIC,URBAN,RURAL
688,SOCIAL ROLES,LEADER,FOLLOWER,GUARDIAN,HEALER,TEACHER,WORKER,ARTIST
689,VALUES,HONESTY,RESPECT,KINDNESS,PATIENCE,COURAGE,HARMONY
690,COMMUNICATION,LANGUAGE,GESTURE,WRITING,ART,MUSIC,SPEECH,TECHNOLOGY
691,ORIGINS,AFRICA,EVOLUTION,HOMINID,FOSSIL,DNA,ANCESTOR,MIGRATION
692,ACTIVITIES,RUNNING,JUMPING,SWIMMING,CLIMBING,FISHING,HUNTING,GATHERING
693,SOCIETY,FAMILIES,FRIENDSHIP,RELIGION,WORK,LAW,POLITICS,EDUCATION
694,KNOWLEDGE,SCIENCE,HISTORY,PHILOSOPHY,MATHEMATICS,LITERATURE,ART,RELIGION
695,HEALTH,DISEASE,TREATMENT,EXERCISE,DIET,MEDICINE,REST
696,JOURNEY,MIGRATION,SETTLEMENT,EXPLORATION,TRADE,WAR,PEACE,INNOVATION
697,ETHICS,JUSTICE,TRUTH,FREEDOM,EQUALITY,COMPASSION,INTEGRITY
698,CREATIVITY,ART,MUSIC,LITERATURE,DANCE,THEATER,DESIGN,ARCHITECTURE
699,CONFLICT,WAR,PEACE,TREATY,DISPUTE,NEGOTIATION,ALLIANCE,MEDIATION
700,TRADITIONAL CLOTHING,KIMONO,SARI,KILT,DUPATTA,CAFTAN,BOUBOU,DIRNDL
701,FOLKTALES,MERMAID,DRAGON,OGRE,FAIRY,TROLL,ELF,GIANT
702,ART TECHNIQUES,OIL,WATERCOLOR,FRESCO,ACRYLIC,ETCHING,PASTEL,MOSAIC
703,DANCES,TANGO,SALSA,BALLET,FLAMENCO,HIP HOP,CHA CHA,FOXTROT
704,MYTHOLOGY,ZEUS,THOR,ANUBIS,HERA,SHIVA,ODIN,ATHENA
705,POTTERY,CLAY,GLAZE,KILN,JARS,VASES,BOWLS,PITCHER
706,WRITING SYSTEMS,LATIN,CYRILLIC,HANZI,DEVANAGARI,ARABIC,RUNES,HEBREW
707,CUISINES,ITALIAN,THAI,MEXICAN,FRENCH,JAPANESE,GREEK,ETHIOPIAN
708,PHILOS philosophies,STOICISM,BUDDHISM,CONFUCIANISM,TAOISM,NIHILISM,UTILITARIANISM
709,THEATRE TYPES,TRAGEDY,COMEDY,OPERA,MUSICAL,PANTOMIME,IMPROV,BALLET
710,TRADITIONAL GAMES,CHESS,GO,CHECKERS,BACKGAMMON,DOMINOES,MAHJONG,BRIDGE
711,POETS,SHAKESPEARE,MAYA ANGELOU,EMILY DICKINSON,ROBERT FROST,RUMI,WHITMAN,SHELLEY
712,PAINTINGS,GUERNICA,STARRY NIGHT,THE SCREAM,MONA LISA,THE NIGHT WATCH,THE KISS
713,PHILANTHROPISTS,GATES,CARNEGIE,ANGELOU,ROCKEFELLER,CHAVEZ,KING,OBAMA
714,SCULPTORS,MICHELANGELO,DONATELLO,BERNINI,RODIN,BRANCUSI,MOORE,CANOVA
715,CEREMONIES,WEDDING,FUNERAL,GRADUATION,BAPTISM,BAR MITZVAH,CORONATION,ANNIVERSARY
716,HAIRSTYLES,BRAIDS,DREADLOCKS,BUN,PIXIE,PONYTAIL,PERM,AFRO
717,COMIC GENRES,MANGA,SUPERHERO,GRAPHIC NOVEL,WEBCOMIC,FANTASY,SCI FI,MYSTERY
718,ARCHITECTURAL LANDMARKS,EIFFEL TOWER,COLOSSEUM,PYRAMIDS,GREAT WALL,TAJ MAHAL,STONEHENGE
719,CALLIGRAPHY STYLES,ITALIC,GOTHIC,COPPERPLATE,CURSIVE,SUMI,UNCIAL,SPENCERIAN
720,CULTURAL FOODS,BAGUETTE,TAMALE,DOSA,DUMPLING,PAELLA,CURRY,FUFU
721,POETIC FORMS,SONNET,HAIKU,LIMERICK,FREE VERSE,ODE,BALLAD,ACROSTIC
722,FASHION BRANDS,NIKE,ADIDAS,PUMA,REEBOK,UNDER ARMOUR,NEW BALANCE,ASICS
723,FOOD CHAINS,MCDONALD'S,KFC,SUBWAY,BURGER KING,WENDY'S,DUNKIN',TACO BELL
724,BEVERAGE BRANDS,COCA COLA,PEPSI,RED BULL,SPRITE,FANTA,DR PEPPER,MOUNTAIN DEW
725,SMARTPHONES,IPHONE,GALAXY,PIXEL,NOKIA,ONEPLUS,HUAWEI,MOTOROLA
726,SPORTS CARS,FERRARI,LAMBORGHINI,MCLAREN,PORSCHE,ASTON MARTIN,JAGUAR,BUGATTI
727,COSMETICS,L’ORÉAL,MAYBELLINE,REVLON,CLINIQUE,COVERGIRL,SEPHORA
728,LUXURY BRANDS,GUCCI,PRADA,CHANEL,CARTIER,VERSACE,BURBERRY,DIOR
729,STREAMING PLATFORMS,NETFLIX,AMAZON PRIME,HULU,DISNEY PLUS,HBO MAX,APPLE TV,PEACOCK
730,HOME APPLIANCES,WHIRLPOOL,GE,KITCHENAID,BOSCH,LG,ELECTROLUX,SAMSUNG
731,OUTDOOR EQUIPMENT,THE NORTH FACE,COLUMBIA,MARMOT,PATAGONIA,REI,ARC'TERYX,EDDIE BAUER
732,AIRLINES,DELTA,EMIRATES,LUFTHANSA,QATAR AIRWAYS,BRITISH AIRWAYS,AMERICAN AIRLINES
733,ONLINE SHOPPING,AMAZON,EBAY,ETSY,WALMART,ALIEXPRESS,BEST BUY,TARGET
734,PET FOOD,PEDIGREE,WHISKAS,BLUE BUFFALO,SCIENCE DIET,ROYAL CANIN,IAMS,NUTRO
735,INSURANCE,GEICO,PROGRESSIVE,STATE FARM,ALLSTATE,METLIFE,AFLAC
736,TECH GADGETS,FITBIT,GOPRO,KINDLE,APPLE WATCH,NINTENDO SWITCH,XIAOMI
737,COFFEE BRANDS,STARBUCKS,DUNKIN',PEET’S COFFEE,CARIBOU,TIM HORTONS,COSTA COFFEE,LAVAZZA
738,BEAUTY PRODUCTS,NEUTROGENA,OLAY,NIVEA,DOVE,CETAPHIL,LAKMÉ,THE BODY SHOP
739,TECH ACCESSORIES,LOGITECH,SONY,ANKER,BEATS,SKULLCANDY,JBL,BOSE
740,HOUSEHOLD CLEANERS,LYSOL,CLOROX,PINE SOL,CASCADE,AJAX,MR. CLEAN,DAWN
741,SNACK BRANDS,LAYS,PRINGLES,CHEETOS,DORITOS,RUFFLES,GOLDFISH,CAMEL
742,TRAVEL GEAR,SAMSONITE,TUMI,RICARDO,TRAVELPRO,DELSEY
743,HEALTH FOODS,KIND BAR,KASHI,BOB’S RED MILL,CLIF BAR,ORGAIN,BLUE DIAMOND,FAGE
744,AUTOMOTIVE PARTS,BOSCH,BRIDGESTONE,MOBIL 1,CASTROL,GOODYEAR,MICHELIN,PIRELLI
745,DAIRY BRANDS,CHOBANI,YOPLAIT,DANNON,FAGE,MILKLAND,STONYFIELD,HORIZON
746,CHILDREN’S TOYS,LEGO,HASBRO,MATTEL,FISHER PRICE,PLAYMOBIL,NERF,BARBIE
747,STREAMING DEVICES,ROKU,CHROMECAST,FIRE TV,APPLE TV,NVIDIA SHIELD,XIAOMI MI BOX,TIVO
748,FINANCIAL SERVICES,VISA,MASTERCARD,PAYPAL,DISCOVER,CHASE,CITI
749,KITCHENWARE,CUISINART,KEURIG,INSTANT POT,VITAMIX,LODGE,CALPHALON
750,PERFUME,CHANEL,DIOR,TOM FORD,CALVIN KLEIN,GUCCI,JO MALONE
751,BICYCLE BRANDS,TREK,SPECIALIZED,GIANT,CANNONDALE,BMC,RALEIGH,SCOTT
752,MEN’S GROOMING,OLD SPICE,GILLETTE,NIVEA,BEARDBRAND,SUAVE,AMERICAN CREW,HARRY’S
753,FAST CASUAL,CHIPOTLE,PANDA EXPRESS,SHAKE SHACK,PANERA BREAD,MOE’S,FIVE GUYS,BLAZE
754,HERBIVORES,TRICERATOPS,STEGOSAURUS,ANKYLOSAURUS,BRACHIOSAURUS,IGUANODON
755,FOSSIL TYPES,BONE,TOOTH,CLAW,TRACK,SKULL,SHELL
756,PERIODS,TRIASSIC,JURASSIC,CRETACEOUS,PERMIAN,CARBONIFEROUS,DEVONIAN,SILURIAN
757,EXTINCTION CAUSES,ASTEROID,VOLCANOES,CLIMATE CHANGE,SEA LEVEL,PREDATION,DISEASE,COMPETITION
758,BIOME TYPES,JUNGLE,LAKE,DESERT,COAST,TUNDRA,FOREST,SWAMP
759,CLASSIC BANDS,BEATLES,QUEEN,PINK FLOYD,THE WHO,AC DC
760,ROCK INSTRUMENTS,GUITAR,DRUMS,BASS,KEYBOARD,MICROPHONE,AMPLIFIER,PEDAL,DRUMSTICKS
761,ROCK GENRES,PUNK,HARD ROCK,GRUNGE,METAL,PROGRESSIVE,ALTERNATIVE,INDIE
762,ROCK LEGENDS,MICK JAGGER,FREDDIE MERCURY,DAVID BOWIE,JIMI HENDRIX,KURT COBAIN,JANIS JOPLIN,ELVIS
763,ICONIC ALBUMS,SGT PEPPER,DARK SIDE,ABBEY ROAD,BACK IN BLACK,THRILLER,NEVERMIND,RUMOURS
764,ROCK VENUES,WEMBLEY,FILLMORE,CBGB,RED ROCKS,MARQUEE,WHISKY A GO GO
765,ROCK FESTIVALS,WOODSTOCK,GLASTONBURY,ISLE OF WIGHT,MONTEREY,COACHELLA,LOLLAPALOOZA,BURNING MAN
766,FAMOUS ROCK SONGS,IMAGINE,HIGHWAY TO HELL,STAIRWAY TO HEAVEN,BOHEMIAN RHAPSODY,HOTEL CALIFORNIA,PURPLE HAZE,LIGHT MY FIRE,FREE BIRD
767,ROCK APPAREL,LEATHER JACKET,DENIM JEANS,BANDANA,STUDDED BELT,COMBAT BOOTS,SUNGLASSES
768,ROCK BEHAVORS,HEADBANG,GUITAR SOLO,MOSHING,SCREAMING,STAGE DIVE,ENCORE,JAM SESSION
769,RECORD TYPES,VINYL,LP,EP,SINGLE,COMPILATION,BOX SET,REISSUE
770,ROCK PRODUCERS,GEORGE MARTIN,RICK RUBIN,BRIAN ENO,MICKIE MOST,QUINCY JONES`,qC=`801,SOCCER ACTIONS,GOAL,CORNER KICK,PASS,DRIBBLE,HEADER,FOUL,KICKOFF,OFFSIDE,PENALTY KICK
802,NFL TEAMS,PATRIOTS,COWBOYS,PACKERS,GIANTS,SEAHAWKS,STEELERS,BRONCOS,DOLPHINS,BUCCANEERS
803,BASEBALL EQUIPMENT,BAT,GLOVE,BALL,HELMET,UNIFORM,BASE,CATCHER MASK,CLEATS,PLATE
804,SPORTS OFFICIALS,REFEREE,UMPIRE,LINESMAN,JUDGE,FLAGGER,OFFICIAL,STARTER,SCORER,TIMEKEEPER
805,NFL POSITIONS,WIDE RECEIVER,RUNNING BACK,LINEBACKER,TIGHT END,CORNERBACK,FULLBACK,KICKER,PUNTER,SAFETY
806,BASEBALL PLAYS,DOUBLE PLAY,HOME RUN,FOUL BALL,STEAL,STRIKEOUT,DUGOUT,BUNT,WALK,TAG OUT
807,HOCKEY TERMS,PUCK,STICK,GOAL,PENALTY BOX,FACEOFF,SUDDEN DEATH,POWER PLAY,OVERTIME,SLAPSHOT
808,OLYMPICS MEDALS,GOLD,SILVER,BRONZE,PODIUM,VICTORY,CEREMONY,AWARD,CHAMPION,RECORD
809,FOOTBALL PLAYS,HUDDLE,SNAP,BLITZ,SCREEN PASS,TRAP,ZONE,SPIKE,MISDIRECTION,FLEA FLICKER
810,BASKETBALL FOULS,PERSONAL,FOUL,TECHNICAL,FLAGRANT,CHARGE,DOUBLE DRIBBLE,TRAVELING,GOALTENDING,BLOCK
811,CYCLING EVENTS,TOUR DE FRANCE,TIME TRIAL,PELOTON,SPRINT,CLIMB,STAGE,BREAKAWAY,DOMESTIQUE,SLIPSTREAM
812,GYMNASTICS EVENTS,FLOOR,VAULT,UNEVEN BARS,BALANCE BEAM,RINGS,PARALLEL BARS,POMMEL HORSE,DISMOUNT,MOUNT
813,SOCCER TACTICS,OFFSIDE TRAP,PRESSING,COUNTERATTACK,MAN MARKING,ZONAL MARKING,THROUGH BALL,CROSS,SET PIECE
814,HOCKEY EQUIPMENT,PUCK,STICK,HELMET,SKATES,SHOULDER PADS,MOUTHGUARD,GLOVES,GOAL CAGE,NECK GUARD
815,FOOTBALL OFFENSES,SPREAD,OPTION,WEST COAST,RUN AND SHOOT,NO HUDDLE,WILDCAT,PLAY ACTION,SCREEN PASS,BOOTLEG
816,NFL CHAMPIONSHIPS,SUPER BOWL,PRO BOWL,REGULAR SEASON,PRESEASON,DRAFT,TRAINING camp
817,CLASSIC VIDEO GAMES,SEGA SATURN,ATARI JAGUAR,NEO GEO,COLECOVISION,INTELLIVISION,VECTREX,BANDAI
818,DEFUNCT CAR BRANDS,HUMMER,PLYMOUTH,OLDSMOBILE,SATURN,DAEWOO,LEYLAND,TALBOT
819,DISCONTINUED FAST FOOD,CHI CHI'S,BURGER CHEF,RED BARN,SNOW WHITE,PEDLEY
820,OBSOLETE CAMERAS,POLAROID,ARGUS,MINOLTA,OLYMPUS,AGFA,KONICA,SANKYO
821,PAST PHONE BRANDS,NOKIA SIEMENS,BLACKBERRY,PALM,MOTOROLA RAZR,KYOCERA,SANYO,ALCATEL
822,DEAD RETAILERS,BLOCKBUSTER,TOYS R US,BORDERS,RADIO SHACK,FANNY FARMER,CIRCUIT CITY
823,CLASSIC TOY LINES,MICRONAUTS,SILVERHAWKS,HE-MAN,TIGER ELECTRONICS,G.I. JOE,ZOIDS,SHOGUN WARRIORS
824,OLD BEVERAGE BRANDS,BEVERLY,ORBITZ,CRYSTAL PEPSI,TAB,SANTAS OWN,OK SODA,SQUIRT
825,RETRO COMPUTER BRANDS,COMPAQ,AMIGA,PACKARD BELL,TANDY,OSBORNE,ZENITH,DICK SMITH
826,DISCONTINUED SNACK FOODS,BUGLES,ORBIT,PB MAX,TANG,QUISP,CRISPIX
827,NO MORE AIRLINES,PIEDMONT,OZARK,MORRIS AIR,MIDWAY
828,FORGOTTEN FAST FOOD CHAINS,SBARRO,CHI CHI'S,RED ROBIN,HOT SHOPPES,Dog n suds,Pumpkin Patch
829,OBSOLETE TECH DEVICES,BETAMAX,VHS,MINIDISC,ZUNE,NEWTON,WEBTV,WALKMAN
830,DEFUNCT FURNITURE RETAILERS,CIRCUIT CITY,FURNITURE ROW,DOREL,VALUE CITY,LEVITZ,FASHION BUG
831,DISCONTINUED CAR MODELS,PLYMOUTH VOYAGER,HUMMER H2,SATURN VUE,TALBOT TAGORA,DAEWOO LANOS,LEYLAND TERRIER
832,PAST SODA BRANDS,SANTAS OWN,OK SODA,CRYSTAL PEPSI,TAB,PEPSI BLUE,FRESCA,BEVERLY
833,DEAD VIDEO GAME CONSOLES,INTELLIVISION,ATARI JAGUAR,COLECOVISION,VECTREX,SEGA SATURN,NEO GEO,3DO
834,DEFUNCT AIRLINES,TWA,PAN AM,EASTERN,BRANIFF,PEOPLE EXPRESS,ZOOM AIR
835,CLASSIC ELECTRONICS,BEBOX,POLAROID,ARGUS,MINOLTA,KONICA,AGFA,SANKYO
836,DEFUNCT CAR COMPANIES,OLDSMOBILE,PLYMOUTH,SATURN,LEYLAND,TALBOT,DAEWOO,HUMMER
837,TECH BRANDS NO MORE,NORTEL,COMPAQ,NETSCAPE,BEBOX,BLACKBERRY,PALM
838,DISCONTINUED TOY LINES,TIGER ELECTRONICS,MICRONAUTS,SILVERHAWKS,G.I. JOE,HE-MAN,ZOIDS,SHOGUN WARRIORS
839,DEAD RETAIL CHAINS,TOYS R US,BORDERS,RADIO SHACK,CIRCUIT CITY,FANNY FARMER,VALUE CITY
840,CLASSIC CAMERAS,POLAROID,MINOLTA,ARGUS,OLYMPUS,KONICA,AGFA,SANKYO
841,DISCONTINUED AIRLINES,PIEDMONT,OZARK,MORRIS AIR,MIDWAY
842,OBSOLETE SOFT DRINKS,SANTAS OWN,OK SODA,CRYSTAL PEPSI,TAB,PEPSI BLUE,FRESCA,BEVERLY
843,FADED VIDEO CONSOLES,SEGA SATURN,3DO,NEO GEO,COLECOVISION,INTELLIVISION,ATARI JAGUAR,VECTREX
844,OLD AIRLINE NAMES,TWA,PAN AM,EASTERN,BRANIFF,PEOPLE EXPRESS,ZOOM AIR
845,PAST COMPUTER BRANDS,COMPAQ,AMIGA,PACKARD BELL,TANDY,OSBORNE,ZENITH,DICK SMITH
846,NO LONGER SOLD SODAS,TAB,ORBITZ,OK SODA,SANTAS OWN,CRYSTAL PEPSI,FRESCA,PEPSI BLUE
847,OLD FAST FOOD CHAINS,CHI CHI'S,BURGER CHEF,RED BARN,SNOW WHITE,PEDLEY
848,DISCONTINUED BEVERAGES,ORBITZ,TAB,CRYSTAL PEPSI,SANTAS OWN,OK SODA,BEVERLY,FRESCA
849,NOBLE GASES,HELIUM,NEON,ARGON,KRYPTON,XENON,RADON,OGANESSON
850,HALOGENS,FLUORINE,CHLORINE,BROMINE,IODINE,ASTATINE,TENNESSINE
851,ALKALI METALS,LITHIUM,SODIUM,POTASSIUM,RUBIDIUM,CESIUM,FRANCIUM
852,ARM BONES,HUMERUS,RADIUS,ULNA,CLAVICLE,SCAPULA,CARPALS,METACARPALS,PHALANGE
853,LEG BONES,FEMUR,TIBIA,FIBULA,PATELLA,TARSAL,METATARSAL,PHALANGE
854,CRANIAL NERVES,OLFACTORY,OPTIC,VAGUS,FACIAL,TRIGEMINAL,TROCHLEAR,ABDUCENS,OCULOMOTOR
855,BRAIN LOBES,FRONTAL,PARIETAL,TEMPORAL,OCCIPITAL,INSULA,LIMBIC
856,CLOUD TYPES,CIRRUS,STRATUS,CUMULUS,NIMBUS,ALTO,CIRROSTRATUS,STRATOCUMULUS,ALTOCUMULUS,ALTOSTRATUS,NIMBOSTRATUS,CIRROCUMULUS
857,GEOLOGICAL ERAS,PALEOZOIC,MESOZOIC,CENOZOIC,PRECAMBRIAN,JURASSIC,TRIASSIC,CRETACEOUS,CAMBRIAN,DEVONIAN,PERMIAN,PALEOCENE,EOCENE,OLIGOCENE,MIOCENE,PLIOCENE,PLEISTOCENE,HOLOCENE
858,WIND TYPES,CHINOOK,MISTRAL,SIROCCO,ZEPHYR,TRADE,MONSOON,GALE,HABOOB,SANTA ANA
859,TAXONOMY RANKS,KINGDOM,PHYLUM,CLASS,ORDER,FAMILY,GENUS,SPECIES,DOMAIN
860,PARTICLES,PROTON,NEUTRON,ELECTRON,QUARK,PHOTON,GLUON,BOSON,MUON,TAU,NEUTRINO,FERMION,LEPTON,PHONON,ANYON,GRAVITON
861,MATH CONSTANTS,PI,EULER,GOLDEN RATIO,INFINITY,IMAGINARY,PRIME,AVOGADRO,PLANCK
862,FALLACIES,STRAWMAN,AD HOMINEM,SLIPPERY SLOPE,RED HERRING,CIRCULAR,SUNK COST
863,PHILOSOPHERS,PLATO,KANT,NIETZSCHE,SARTRE,HUME,LOCKE,DESCARTES,HEGEL,ZENO,CRITO,PHAEDO,TIMAEUS,SOCRATES,ARISTOTLE,ROUSSEAU,VOLTAIRE,SPINOZA,CAMUS
864,SHAKESPEARE,HAMLET,MACBETH,OTHELLO,TEMPEST,LEAR,ROMEO,JULIET,CORIOLANUS,DREAM,MUCH ADO,TWELFTH NIGHT,AS YOU LIKE IT,ERRORS,HENRY V,RICHARD III,KING JOHN
865,AUSTEN NOVELS,EMMA,PERSUASION,MANSFIELD,NORTHANGER
866,POETIC METERS,IAMBIC,TROCHAIC,ANAPESTIC,DACTYLIC,SPONDAIC,PYRRHIC
867,LITERARY DEVICES,IRONY,METAPHOR,SIMILE,SATIRE,ALLEGORY,HYPERBOLE,ALLITERATION,SYMBOLISM,IMAGERY
868,OPERA VOICES,SOPRANO,ALTO,TENOR,BASS,BARITONE,MEZZO,CONTRALTO,COUNTERTENOR
869,TEMPO MARKINGS,LARGO,ADAGIO,ANDANTE,ALLEGRO,PRESTO,VIVACE,MODERATO
870,CHESS OPENINGS,SICILIAN,GAMBIT,RUI LOPEZ,CARO KANN,FRENCH,ENGLISH,SCANDINAVIAN,KINGS INDIAN
871,POKER HANDS,ROYAL FLUSH,FULL HOUSE,STRAIGHT,PAIRS,KICKER,ANTE,FLUSH,THREE OF A KIND
872,TAROT CARDS,FOOL,MAGICIAN,EMPRESS,LOVERS,CHARIOT,HERMIT,TOWER,PRIESTESS,EMPEROR,HIEROPHANT
873,ZODIAC CHINESE,RAT,OX,TIGER,RABBIT,DRAGON,SNAKE,HORSE,GOAT,MONKEY,ROOSTER,DOG,PIG
874,GREEK MUSES,CLIO,THALIA,ERATO,URANIA,CALLIOPE,TERPSICHORE,POLYHYMNIA,MELPOMENE,EUTERPE
875,NORSE WORLDS,ASGARD,MIDGARD,JOTUNHEIM,HELHEIM,VANAHEIM,ALFHEIM,NIFLHEIM,MUSPELHEIM
876,ROMAN GODS,JUPITER,JUNO,MARS,VENUS,MERCURY,NEPTUNE,PLUTO,MINERVA,VULCAN
877,US WARS,REVOLUTION,CIVIL,VIETNAM,KOREA,GULF,IRAQ,AFGHAN,1812
878,BRITISH MONARCHS,HENRY,ELIZABETH,VICTORIA,GEORGE,WILLIAM,CHARLES,ANNE,EDWARD,RICHARD
879,EXPLORERS,COLUMBUS,MAGELLAN,COOK,DRAKE,HUDSON,CARTIER,VESPUCCI,LEWIS,CLARK
880,INVENTORS,TESLA,EDISON,BELL,WRIGHT,FORD,MORSE,WHITNEY,GUTENBERG,DA VINCI
881,NOBEL PRIZES,PEACE,PHYSICS,CHEMISTRY,MEDICINE,LITERATURE,ECONOMICS
882,IVY LEAGUE,HARVARD,YALE,PRINCETON,COLUMBIA,BROWN,DARTMOUTH,CORNELL,PENN
883,SEVEN WONDERS,PYRAMID,GARDENS,ZEUS,TEMPLE,MAUSOLEUM,COLOSSUS,LIGHTHOUSE
884,JUPITER MOONS,IO,EUROPA,GANYMEDE,CALLISTO,AMALTHEA,HIMALIA,ELARA
885,SATURN MOONS,TITAN,ENCELADUS,MIMAS,RHEA,DIONE,IAPETUS,TETHYS
886,DWARF PLANETS,PLUTO,ERIS,HAUMEA,MAKEMAKE,CERES,SEDNA,ORCUS,QUAOAR,GONGGONG,SALACIA
887,PROGRAMMING LANGUAGES,PYTHON,JAVA,RUST,RUBY,COBOL,FORTRAN,LISP,SWIFT,C PLUS PLUS,GO,HASKELL,JAVASCRIPT,CSHARP,KOTLIN,TYPESCRIPT,PHP,PERL,SCALA
888,OPERATING SYSTEMS,LINUX,WINDOWS,MACOS,UNIX,DOS,ANDROID,IOS,BSD,SOLARIS,UBUNTU,FEDORA
889,FILE FORMATS,JPEG,PNG,GIF,PDF,MP3,MP4,ZIP,EXE,HTML,JSON,XML,CSV
890,CRYPTOCURRENCIES,BITCOIN,ETHER,RIPPLE,LITECOIN,DOGE,CARDANO,SOLANA,POLKADOT
891,STOCK MARKET,BULL,BEAR,DIVIDEND,EQUITY,OPTION,SHORT,MARGIN,IPO,NASDAQ,DOW JONES,FTSE,NIKKEI,DAX
892,CORPORATE ROLES,CEO,CFO,CTO,COO,CMO,VP,DIRECTOR,MANAGER,CHAIRMAN
893,LEGAL TERMS,PLAINTIFF,DEFENDANT,TORT,HABEAS,SUBPOENA,PERJURY,LIEN,AFFIDAVIT
894,CRIMES,FELONY,TREASON,ARSON,LARCENY,FRAUD,EMBEZZLE,PERJURY,MURDER,ASSAULT
895,PHOBIAS,ACRO,AGORA,CLAUSTRO,Arachno,HYDRO,PYRO,XENO,TRYPO,AERO
896,DOCTOR SPECIALTY,ONCOLOGY,PODIATRY,UROLOGY,NEUROLOGY,CARDIOLOGY,DERMATOLOGY,PEDIATRICS,SURGERY
897,MEDICAL SCANS,MRI,CT,XRAY,ULTRASOUND,PET,EEG,EKG,BIOPSY
898,VITAMINS,RETINOL,THIAMINE,NIACIN,FOLATE,ASCORBIC,CALCIUM,IRON,BIOTIN,RIBOFLAVIN
899,GEM CUTS,PRINCESS,EMERALD,OVAL,PEAR,RADIANT,CUSHION,MARQUISE,BRILLIANT,ASSCHER
900,FABRIC WEAVES,SATIN,TWILL,PLAIN,BASKET,JACQUARD,VELVET,DENIM,POPLIN
901,KNOTS,BOWLINE,HITCH,SQUARE,SHEET,FIGURE,CLOVE,REEF,WINDSOR,SHEEPSHANK
902,BOAT PARTS,HULL,BOW,STERN,PORT,STARBOARD,KEEL,DECK,MAST,RUDDER
903,AIRCRAFT PARTS,FUSELAGE,WING,RUDDER,AILERON,FLAP,COCKPIT,GEAR,ENGINE
904,CAMERA PARTS,LENS,SENSOR,SHUTTER,APERTURE,ISO,FLASH,FOCUS,VIEWFINDER
905,FONTS,SERIF,SANS,ARIAL,TIMES,HELVETICA,COURIER,VERDANA,COMIC SANS
906,COLOR MODELS,RGB,CMYK,HSV,HEX,PANTONE,HSL,LAB
907,SAUCES,HOLLANDAISE,BECHAMEL,VELOUTE,TOMATO,ESPAGNOLE,PESTO,MARINARA,ALFREDO
908,PASTRY DOUGHS,PHYLLO,PUFF,SHORTCRUST,CHOUX,BRIOCHE,SOURDOUGH,DANISH
909,SUSHI FISH,MAGURO,SAKE,HAMACHI,UNAGI,EBI,TAKO,IKURA,UNI
910,CHEESE TYPES,BLUE,BRIE,GOUDA,CHEDDAR,SWISS,FETA,GOAT,HAVARTI,MOZZARELLA
911,WINE TYPES,MERLOT,CABERNET,PINOT,CHARDONNAY,RIESLING,ROSE,SYRAH,SAUVIGNON
912,BEER TYPES,LAGER,ALE,STOUT,PORTER,PILSNER,IPA,WHEAT,SOUR,BOCK
913,COFFEE BEANS,ARABICA,ROBUSTA,LIBERICA,EXCELSA,KONA,JAVA,COLOMBIAN
914,FLOWER PARTS,PETAL,STAMEN,PISTIL,SEPAL,POLLEN,STEM,ROOT,ANTHER
915,BIOMES,TUNDRA,TAIGA,DESERT,SAVANNA,RAINFOREST,GRASSLAND,CHAPARRAL,STEPPE
916,ROCK TYPES,IGNEOUS,SEDIMENTARY,METAMORPHIC,BASALT,GRANITE,LIMESTONE,SANDSTONE
917,MINERALS,QUARTZ,FELDSPAR,MICA,TALC,GYPSUM,CALCITE,PYRITE,DIAMOND
918,FOSSILS,AMMONITE,TRILOBITE,FERN,AMBER,BONE,TOOTH,TRACK,COPROLITE
919,DINOSAUR PERIODS,TRIASSIC,JURASSIC,CRETACEOUS,MESOZOIC,PALEOGENE
920,DINOSAURS,REX,RAPTOR,TRICERATOPS,STEGO,BRONTO,PTERO,ANKYLO,SPINO
921,DOG GROUPS,HERDING,HOUND,TERRIER,SPORTING,WORKING,TOY,NON-SPORTING
922,HORSE BREEDS,ARABIAN,MUSTANG,CLYDESDALE,THOROUGHBRED,APPALOOSA,QUARTER,FRIESIAN
923,CAT FAMILY,LION,TIGER,LEOPARD,JAGUAR,COUGAR,CHEETAH,LYNX,BOBCAT
924,BEAR SPECIES,POLAR,GRIZZLY,PANDA,BLACK,SUN,SLOTH,SPECTACLED,KODIAK
925,WHALE TYPES,BLUE,HUMPBACK,ORCA,SPERM,BELUGA,NARWHAL,GRAY,RIGHT
926,SHARK TYPES,GREAT WHITE,HAMMERHEAD,TIGER,BULL,MAKO,NURSE,WHALE SHARK
927,SNAKE TYPES,COBRA,PYTHON,BOA,VIPER,ANACONDA,MAMBA,CORAL,RATTLESNAKE
928,MARSUPIALS,KANGAROO,KOALA,WOMBAT,POSSUM,TASMANIAN,WALLABY,SUGAR GLIDER
929,PRIMATES,APE,MONKEY,LEMUR,GORILLA,CHIMP,ORANGUTAN,BABOON,GIBBON
930,RODENTS,MOUSE,RAT,SQUIRREL,BEAVER,HAMSTER,GUINEA,CAPYBARA,PORCUPINE
931,RARE EARTHS,SCANDIUM,YTTRIUM,LANTHANUM,CERIUM,YTTERBIUM,NEODYMIUM,THULIUM,SAMARIUM,EUROPIUM,GADOLINIUM,TERBIUM,DYSPROSIUM,HOLMIUM,ERBIUM
932,ACTINIDES,THORIUM,URANIUM,PLUTONIUM,AMERICIUM,CURIUM,BERKELIUM,CALIFORNIUM,NEPTUNIUM
933,METALLOIDS,BORON,SILICON,GERMANIUM,ARSENIC,ANTIMONY,TELLURIUM,POLONIUM
934,NONMETALS,HYDROGEN,CARBON,NITROGEN,OXYGEN,PHOSPHORUS,SULFUR,SELENIUM
935,ISOTOPES,PROTIUM,DEUTERIUM,TRITIUM,CARBON-14,URANIUM-235,LEAD-206,IODINE-131
936,PARTICLES SUBATOMIC,QUARK,LEPTON,BOSON,FERMION,HADRON,BARYON,MESON,GLUON,PHOTON
937,LOGIC GATES,AND,OR,NOT,NAND,NOR,XOR,XNOR,BUFFER
938,NETWORK PROTOCOLS,TCP,UDP,IP,HTTP,FTP,SMTP,DNS,DHCP,SSH
939,ANCIENT CITIES,BABYLON,UR,URUK,THEBES,MEMPHIS,NINEVEH,TYRE,CARTHAGE,TROY
940,ROMAN LEGION,CENTURION,LEGATE,TRIBUNE,COHORT,MANIPLE,EAGLE,SCUTUM,GLADIUS
941,GREEK PHILOSOPHY,STOIC,EPICUREAN,CYNIC,SKEPTIC,PLATONIC,SOPHIT,PERIPATETIC
942,FEUDAL JAPAN,SAMURAI,SHOGUN,DAIMYO,RONIN,NINJA,KATANA,BUSHIDO,SEPPUKU
943,MEDIEVAL GUILDS,MASON,SMITH,WEAVER,BAKER,MERCHANT,APPRENTICE,JOURNEYMAN,MASTER
944,VIKING CULTURE,LONGBOAT,RUNE,SAGA,THANE,JARL,VALHALLA,RAID,SHIELD
945,RENAISSANCE ART,PERSPECTIVE,FRESCO,OIL,CHIAROSCURO,SFUMATO,PORTRAIT,LANDSCAPE
946,ENLIGHTENMENT,REASON,SCIENCE,LIBERTY,PROGRESS,TOLERATION,FRATERNITY,CONSTITUTION
947,INDUSTRIAL REV,STEAM,COAL,FACTORY,RAILROAD,TELEGRAPH,TEXTILE,STEEL,UNION
948,COLD WAR,SPUTNIK,WALL,CRISIS,DETENTE,PROXY,NUCLEAR,IRON CURTAIN,NATO
949,INTERNET HISTORY,ARPANET,EMAIL,WWW,BROWSER,DOTCOM,MODEM,DIALUP,SERVER
950,CODING CONCEPTS,LOOP,VAR,FUNCTION,CLASS,OBJECT,ARRAY,STRING,BOOLEAN
951,CYBERSECURITY,FIREWALL,VPN,ENCRYPTION,PHISHING,MALWARE,VIRUS,HACK,TOKEN
952,AI CONCEPTS,NEURAL,LEARNING,DATA,MODEL,ALGORITHM,BOT,TURNING,GPT
953,CRYPTO TERMS,BLOCKCHAIN,WALLET,MINING,GAS,TOKEN,NFT,DEFI,HODL
954,GAMING GENRES,RPG,FPS,RTS,MOBA,MMO,PLATFORMER,ROGUELIKE,SIM
955,ESPORTS GAMES,LEAGUE,DOTA,CSGO,VALORANT,OVERWATCH,FORTNITE,APEX
956,STREAMING TERMS,SUB,DONO,RAID,CHAT,EMOTE,BITRATE,VOD,OBS
957,ANIME GENRES,SHONEN,SHOJO,ISEKAI,MECHA,SLICE,HORROR,SPORTS,MAGIC
958,MANGA TERMS,PANEL,BUBBLE,TANKOBON,DOUJINSHI,SCANLATION,WEEKLY,SERIES
959,KPOP TERMS,IDOL,BIAS,COMEBACK,DEBUT,FANDOM,LIGHTSTICK,TRAINEE,VISUAL
960,MEME FORMATS,CAT,DOGE,PEPE,WOJAK,DRAKE,DISTRACTED,TWO BUTTONS,CHAD
961,SLANG 2020S,RIZZ,CAP,BET,SUS,CRINGE,BASED,GOAT,SIMP
962,COFFEE WAVE,POUROVER,SINGLE,ORIGIN,ROAST,NOTES,ACIDITY,BODY,AEROPRESS
963,CRAFT BEER,IPA,STOUT,SOUR,PORTER,SAISON,PILSNER,LAGER,HOPPY
964,WINE REGIONS,NAPA,BORDEAUX,TUSCANY,RIOJA,CHAMPAGNE,SONOMA,MENDOZA,RHONE
965,CHEESE REGIONS,PARMA,ROQUEFORT,GOUDA,CHEDDAR,MANCHEGO,GRUYERE,BRIE,CAMEMBERT
966,SPICE BLENDS,CURRY,GARAM,CAJUN,TACO,PUMPKIN,ZAATAR,RAS EL HANOUT,FIVE SPICE
967,TEA CEREMONY,MATCHA,BOWL,WHISK,SCOOP,KETTLE,TATAMI,GUEST,SWEET
968,YOGA LIMBS,YAMA,NIYAMA,ASANA,PRANAYAMA,PRATYAHARA,DHARANA,DHYANA,SAMADHI
969,CHAKRAS,ROOT,SACRAL,SOLAR,HEART,THROAT,THIRD EYE,CROWN
970,TAROT SUITS,CUPS,WANDS,SWORDS,PENTACLES
971,POKER VARIANTS,TEXAS,OMAHA,STUD,DRAW,HORSE,RAZZ,BADUGI
972,BACKGAMMON,PIP,POINT,BAR,BEAR,DOUBLE,CUBE,GAMMON,BACK
973,BILLIARDS,CUE,BALL,POCKET,RACK,BREAK,SPIN,CHALK,TABLE
974,BASEBALL STATS,RBI,ERA,AVG,OPS,HR,WHIP,WAR,OBP
975,BASKETBALL STATS,PPG,RPG,APG,SPG,BPG,PER,FG,FT
976,FOOTBALL POS,QB,RB,WR,TE,OL,DL,LB,CB,S
977,SOCCER POS,GK,CB,FB,CDM,CAM,WINGER,STRIKER,CF
978,HOCKEY POS,CENTER,WING,DEFENSE,GOALIE,ENFORCER,GRINDER,SNIPER
979,OLYMPIC RINGS,BLUE,YELLOW,BLACK,GREEN,RED
980,NOBEL FIELDS,PHYSICS,CHEM,MEDICINE,LIT,PEACE,ECON
981,IVY LEAGUES,BROWN,COLUMBIA,CORNELL,DARTMOUTH,HARVARD,PENN,PRINCETON,YALE
982,SEVEN SEAS,ARCTIC,ATLANTIC,INDIAN,PACIFIC,MEDITERRANEAN,CARIBBEAN,GULF
983,SEVEN SINS,LUST,GLUTTONY,GREED,SLOTH,WRATH,ENVY,PRIDE
984,PLATONIC SOLIDS,TETRAHEDRON,CUBE,OCTAHEDRON,DODECAHEDRON,ICOSAHEDRON
985,TAXONOMY,KINGDOM,PHYLUM,CLASS,ORDER,FAMILY,GENUS,SPECIES
986,ATMOSPHERE,TROPO,STRATO,MESO,THERMO,EXO
987,EARTH LAYERS,CRUST,MANTLE,OUTER CORE,INNER CORE
988,ROCK CYCLE,IGNEOUS,SEDIMENTARY,METAMORPHIC,MAGMA,SEDIMENT
989,WATER CYCLE,PRECIPITATION,COLLECTION,TRANSPIRATION
990,CELL PHASES,INTERPHASE,PROPHASE,METAPHASE,ANAPHASE,TELOPHASE,CYTOKINESIS
991,DNA BASES,ADENINE,THYMINE,CYTOSINE,GUANINE
992,RNA BASES,ADENINE,URACIL,CYTOSINE,GUANINE
993,BLOOD TYPES,A,B,AB,O,POSITIVE,NEGATIVE
994,TEETH TYPES,INCISOR,CANINE,PREMOLAR,MOLAR
995,TASTE BUDS,SWEET,SOUR,SALTY,BITTER,UMAMI
996,NEWTON LAWS,INERTIA,FORCE,ACTION,REACTION
997,THERMODYNAMICS,ENERGY,ENTROPY,ZERO,THIRD
998,STATES MATTER,SOLID,LIQUID,GAS,PLASMA,CONDENSATE
999,WAVE TYPES,RADIO,MICRO,INFRA,VISIBLE,UV,XRAY,GAMMA
1000,QUARKS,UP,DOWN,CHARM,STRANGE,TOP,BOTTOM
1001,LEPTONS,ELECTRON,MUON,TAU,NEUTRINO
1002,BOSONS,GLUON,PHOTON,HIGGS,Z,W
1003,CONSTANTS,C,G,H,E,PI,PHI
1004,UNITS SI,METER,SECOND,KILO,AMPERE,KELVIN,MOLE,CANDELA
1005,PREFIXES SI,MEGA,GIGA,TERA,MICRO,NANO,PICO,FEMTO
1006,GEOMETRY,POINT,LINE,PLANE,ANGLE,SHAPE,SOLID
1007,TRIANGLES,ACUTE,OBTUSE,RIGHT,EQUILATERAL,ISOSCELES,SCALENE
1008,QUADRILATERALS,SQUARE,RECTANGLE,RHOMBUS,TRAPEZOID,KITE,PARALLELOGRAM
1009,POLYGONS,PENTAGON,HEXAGON,HEPTAGON,OCTAGON,NONAGON,DECAGON
1010,CONIC SECTIONS,CIRCLE,ELLIPSE,PARABOLA,HYPERBOLA
1011,CALCULUS,LIMIT,DERIVATIVE,INTEGRAL,SERIES
1012,STATISTICS,MEAN,MEDIAN,MODE,RANGE,VARIANCE,DEVIATION
1013,PROBABILITY,CHANCE,ODDS,EVENT,OUTCOME,SPACE
1014,LOGIC,TRUE,FALSE,AND,OR,NOT,IF,THEN
1015,SETS,UNION,INTERSECT,SUBSET,EMPTY,NULL
1016,FUNCTIONS,DOMAIN,RANGE,INPUT,OUTPUT,GRAPH
1017,ALGEBRA,VARIABLE,CONSTANT,TERM,FACTOR,ROOT
1018,ARITHMETIC,ADD,SUB,MUL,DIV,MOD
1019,NUMBERS,NATURAL,INTEGER,RATIONAL,REAL,COMPLEX
1020,PRIMES,TWO,THREE,FIVE,SEVEN,ELEVEN,THIRTEEN
1021,FIBONACCI,ONE,TWO,THREE,FIVE,EIGHT,THIRTEEN,TWENTYONE
1022,PI DIGITS,THREE,ONE,FOUR,FIVE,NINE,TWO
1023,E DIGITS,TWO,SEVEN,ONE,EIGHT,TWO,EIGHT
1024,ROMAN NUMERALS,I,V,X,L,C,D,M
1025,GREEK LETTERS,ALPHA,BETA,GAMMA,DELTA,OMEGA,PI,SIGMA
1026,HEBREW LETTERS,ALEPH,BET,GIMEL,DALET,HE,VAV
1027,PHONETIC ALPHABET,ALPHA,BRAVO,CHARLIE,DELTA,ECHO,FOXTROT
1028,MORSE CODE,DOT,DASH,SPACE,SIGNAL
1029,BRAILLE,DOT,CELL,RAISED,TOUCH
1030,SIGN LANGUAGE,HAND,FINGER,FACE,GESTURE
1031,PROGRAMMING,CODE,BUG,LOOP,VAR,API,GIT
1032,DATABASES,SQL,TABLE,ROW,COLUMN,KEY,INDEX
1033,HARDWARE,CPU,RAM,DISK,SCREEN,BOARD,CHIP
1034,SOFTWARE,APP,OS,DRIVER,TOOL,GAME,WEB
1035,FILE TYPES,TXT,DOC,PDF,JPG,MP3,ZIP
1036,WEB DEV,HTML,CSS,JS,REACT,NODE,API
1037,MOBILE,IOS,ANDROID,APP,STORE,TOUCH,GPS
1038,CLOUD,AWS,AZURE,GCP,S3,LAMBDA,EC2
1039,AI,ML,DL,NN,NLP,CV,RL
1040,CRYPTO,BTC,ETH,NFT,DAO,WEB3,WALLET
1041,PRIVACY,DATA,COOKIE,TRACK,VPN,TOR,LOG
1042,TECH LAW,GDPR,CCPA,DMCA,PATENT,COPYRIGHT
1043,STARTUP,SEED,ANGEL,VC,IPO,EXIT,UNICORN
1045,DEVOPS,CI,CD,DOCKER,K8S,GIT,PIPELINE
1046,TESTING,UNIT,INTEGRATION,E2E,MOCK,STUB,SPY
1047,ARCTIC PEOPLES,INUIT,YUPIK,SAMI,ALEUT,NENETS,CHUKCHI
1048,GLACIAL FEATURES,MORAINE,ESKER,DRUMLIN,KAME,KETTLE,CIRQUE,ARETE,HORN,FJORD,TARN,CREVASSE,SERAC,OUTWASH
1049,SOIL HORIZONS,O HORIZON,A HORIZON,E HORIZON,B HORIZON,C HORIZON,R HORIZON,TOPSOIL,SUBSOIL,BEDROCK,HUMUS,ELUVIATION
1050,ATMOSPHERE LAYERS,TROPOSPHERE,STRATOSPHERE,MESOSPHERE,THERMOSPHERE,EXOSPHERE,IONOSPHERE,OZONE LAYER,KARMAN LINE
1051,OCEAN CURRENTS,GULF STREAM,HUMBOLDT,KUROSHIO,LABRADOR,CANARY,BENGUELA,AGULHAS,CALIFORNIA,OYASHIO,NORTH ATLANTIC
1052,STAR TYPES,RED DWARF,WHITE DWARF,NEUTRON STAR,RED GIANT,SUPERGIANT,PULSAR,QUASAR,BROWN DWARF,MAIN SEQUENCE,PROTOSTAR,BINARY,VARIABLE
1053,GALACTIC SHAPES,SPIRAL,ELLIPTICAL,IRREGULAR,BARRED SPIRAL,LENTICULAR,PECULIAR,RING,PROLATE
1054,NEBULAE,ORION,EAGLE,CRAB,RING,HELIX,CAT'S EYE,HORSEHEAD,CARINA,LAGOON,TARANTULA,TRIFID,DUMBBELL,VEIL
1055,QUANTUM PHYSICS,ENTANGLEMENT,SUPERPOSITION,TUNNELING,WAVE FUNCTION,UNCERTAINTY,SPIN,QUBIT,COHERENCE,DECOHERENCE,INTERFERENCE,TELEPORTATION
1056,RELATIVITY,TIME DILATION,GRAVITY,SPACETIME,LIGHT SPEED,EVENT HORIZON,SINGULARITY,FRAME DRAGGING,REDSHIFT,LENSING,EQUIVALENCE
1057,LOGICAL FALLACIES,STRAW MAN,AD HOMINEM,SLIPPERY SLOPE,RED HERRING,CIRCULAR,SUNK COST,EQUIVOCATION,BANDWAGON,TU QUOQUE,POST HOC
1058,COGNITIVE BIASES,CONFIRMATION,ANCHORING,HALO EFFECT,HINDSIGHT,AVAILABILITY,FRAMING,SUNK COST,DUNNING KRUGER,SELF SERVING,NEGATIVITY,OPTIMISM
1059,SORTING ALGORITHMS,BUBBLE,QUICK,MERGE,HEAP,INSERTION,SELECTION,RADIX,SHELL,BOGO,COCKTAIL,TIMSORT,BUCKET
1060,DESIGN PATTERNS,SINGLETON,FACTORY,OBSERVER,STRATEGY,DECORATOR,ADAPTER,FACADE,PROXY,COMMAND,ITERATOR,BUILDER,PROTOTYPE
1061,HTTP METHODS,GET,POST,PUT,DELETE,PATCH,HEAD,OPTIONS,CONNECT,TRACE
1062,SQL COMMANDS,SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER,JOIN,UNION,GRANT,REVOKE,TRUNCATE,INDEX
1063,NOSQL DATABASES,MONGODB,REDIS,CASSANDRA,COUCHDB,DYNAMODB,HBASE,NEO4J,COSMOS,FIREBASE,RAVENDB
1064,CLOUD PROVIDERS,AWS,AZURE,GOOGLE CLOUD,ALIBABA,IBM,ORACLE,DIGITAL OCEAN,HEROKU,VULTR,LINODE,HETZNER,RACKSPACE
1065,CYBER ATTACKS,PHISHING,DDOS,MAN IN MIDDLE,SQL INJECTION,XSS,RANSOMWARE,SPOOFING,BRUTE FORCE,ZERO DAY,ROOTKIT,TROJAN,WORM
1066,CRYPTOGRAPHY,AES,RSA,SHA,MD5,PUBLIC KEY,PRIVATE KEY,HASH,SALT,NONCE,CIPHER,ENCRYPTION,DECRYPTION,BLOCKCHAIN
1067,PROGRAMMING LANGS,PYTHON,JAVASCRIPT,JAVA,C++,RUBY,GO,RUST,SWIFT,KOTLIN,TYPESCRIPT,PHP,PERL,SCALA,HASKELL,LUA
1068,WEB TECHNOLOGIES,HTML,CSS,REACT,ANGULAR,VUE,NODE,DJANGO,FLASK,ASP.NET,LARAVEL,SVELTE,BOOTSTRAP,TAILWIND,WEBPACK
1069,MOBILE OS,ANDROID,IOS,WINDOWS PHONE,BLACKBERRY,SYMBIAN,WEBOS,TIZEN,KAIOS,FIRE OS,HARMONY OS
1070,VERSION CONTROL,GIT,SVN,MERCURIAL,CVS,PERFORCE,BAZAAR,TFS,BITKEEPER,FOSSIL,ARCH
1071,AGILE TERMS,SCRUM,KANBAN,SPRINT,BACKLOG,STANDUP,USER STORY,EPIC,VELOCITY,BURNDOWN,SCRUM MASTER
1072,TESTING TYPES,UNIT,INTEGRATION,E2E,REGRESSION,PERFORMANCE,LOAD,STRESS,SECURITY,USABILITY,ACCEPTANCE,SMOKE,SANITY
1073,HARDWARE INTERFACES,USB,HDMI,VGA,DVI,DISPLAYPORT,THUNDERBOLT,ETHERNET,SATA,PCIE,SCSI,SERIAL,PARALLEL
1074,FILE SYSTEMS,NTFS,FAT32,EXT4,APFS,HFS+,EXFAT,ZFS,BTRFS,XFS,REISERFS
1075,IMAGE FORMATS,JPEG,PNG,GIF,SVG,WEBP,TIFF,BMP,RAW,HEIF,ICO,PSD,AI
1076,AUDIO FORMATS,MP3,WAV,AAC,FLAC,OGG,WMA,AIFF,ALAC,MIDI,M4A,OPUS
1077,VIDEO FORMATS,MP4,AVI,MKV,MOV,WMV,FLV,WEBM,MPEG,3GP,TS,M4V
1078,FONT STYLES,SERIF,SANS SERIF,MONOSPACE,CURSIVE,FANTASY,SCRIPT,DISPLAY,BLACKLETTER,SLAB SERIF
1079,COLOR SPACES,RGB,CMYK,HSL,HSV,HEX,LAB,YUV,PANTONE,GRAYSCALE,SRGB,ADOBE RGB
1080,COUNTRIES,FRANCE,GERMANY,ITALY,SPAIN,UK,POLAND,GREECE,SWEDEN,NORWAY,IRELAND,BELGIUM,CHINA,JAPAN,INDIA,KOREA,VIETNAM,THAILAND,IRAN,IRAQ,ISRAEL,RUSSIA,PERU,CUBA,MALI,CHAD,FIJI,LAOS,OMAN,EGYPT,NIGERIA,KENYA,SOUTH AFRICA,MOROCCO,ETHIOPIA,GHANA,TANZANIA,BRAZIL,ARGENTINA,CHILE,COLOMBIA,VENEZUELA,ECUADOR,BOLIVIA,NETHERLANDS,AUSTRIA,DENMARK,TURKEY,PORTUGAL,HUNGARY,ROMANIA,ICELAND
1081,PLANETS,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN,URANUS,NEPTUNE,PLUTO
1082,OCEANS,ATLANTIC,PACIFIC,INDIAN,ARCTIC,SOUTHERN
1083,CAR BRANDS,FORD,TOYOTA,HONDA,CHEVY,BMW,AUDI,TESLA,JEEP,DODGE,NISSAN,KIA,MAZDA,SUBARU,MITSUBISHI,SUZUKI,LEXUS,ACURA,INFINITI,MERCEDES,PORSCHE,VOLKSWAGEN,OPEL,MINI,SMART,CADILLAC,BUICK,LINCOLN,JAGUAR,LAND ROVER,BENTLEY,ROLLS ROYCE,ASTON MARTIN,LOTUS,MCLAREN,FERRARI,LAMBORGHINI,MASERATI,FIAT,ALFA ROMEO,PAGANI,LANCIA,ABARTH
1084,DOG BREEDS,BEAGLE,BULLDOG,POODLE,LABRADOR,PUG,BOXER,HUSKY,COLLIE,CORGI,TERRIER,YORKIE,CHIHUAHUA,SHIH TZU,DACHSHUND,DANE,SHEPHERD,RETRIEVER,MASTIFF,ROTTWEILER,SPORTING,HOUND,WORKING,TOY,HERDING
1085,CAT BREEDS,PERSIAN,SIAMESE,BENGAL,RAGDOLL,SPHYNX,MAINE COON,TABBY,BOMBAY,MANX,BIRMAN,SCOTTISH FOLD,ABYSSINIAN,BURMESE
1086,BIRD TYPES,EAGLE,HAWK,OWL,PENGUIN,PARROT,FLAMINGO,SWAN,DUCK,ROBIN,SPARROW,CROW,DOVE,JAY,LARK,WREN,TERN,FINCH,CANARY,FALCON
1087,FISH TYPES,SALMON,TUNA,TROUT,BASS,SHARK,GOLDFISH,CLOWNFISH,CATFISH,COD,PIKE,CARP,SOLE,EEL,SHAD,GUPPY,TETRA,MOLLY,BETTA,ANGEL,DISCUS
1088,GEMSTONES,DIAMOND,RUBY,SAPPHIRE,EMERALD,OPAL,TOPAZ,PEARL,GARNET,JADE,ONYX,AGATE,BERYL,AMBER,CORAL
1089,METALS,GOLD,SILVER,COPPER,IRON,STEEL,LEAD,ZINC,TIN,BRONZE,BRASS,PLATINUM
1090,ELEMENTS,OXYGEN,CARBON,HELIUM,NITROGEN,HYDROGEN,NEON,IRON,GOLD,SILVER,ARGON,XENON,RADON,BORON,IODINE
1091,GRAMMAR,NOUN,VERB,ADJECTIVE,ADVERB,PRONOUN,COMMA,PERIOD,COLON,SUBJECT,PREP,CONJ,PART
1092,MOVIE GENRES,ACTION,COMEDY,DRAMA,HORROR,SCI-FI,ROMANCE,THRILLER,WESTERN,FANTASY
1093,INSTRUMENTS,GUITAR,PIANO,DRUM,VIOLIN,FLUTE,TRUMPET,SAXOPHONE,CELLO,BASS,HARP
1094,SPORTS EQUIPMENT,BAT,BALL,GLOVE,HELMET,NET,CLEATS,RACKET,PUCK,STICK,HOOP
1095,OLYMPIC SPORTS,SWIMMING,RUNNING,GYMNASTICS,SKIING,BOXING,JUDO,FENCING,DIVING,ROWING,SPRINT,ARCHERY
1096,TEAM SPORTS,SOCCER,BASEBALL,FOOTBALL,HOCKEY,RUGBY,CRICKET,VOLLEYBALL,BASKETBALL
1097,FAST FOOD,MCDONALDS,BURGER KING,WENDYS,TACO BELL,KFC,SUBWAY,PIZZA HUT,DOMINOS,FIVE GUYS,SHAKE SHACK,IN N OUT,SONIC,CARLS JR,POPEYES,CHICK FIL A,CHURCHS,ZAXBYS,BOJANGLES,RAISING CANES,DEL TACO,CHIPOTLE,QDOBA,MOES,BAJA FRESH,TACO JOHNS
1098,ICE CREAM,VANILLA,CHOCOLATE,STRAWBERRY,MINT,COFFEE,COOKIE DOUGH,ROCKY ROAD,PISTACHIO
1099,BREAKFAST FOODS,EGGS,BACON,TOAST,PANCAKES,WAFFLES,CEREAL,OATMEAL,BAGEL,DONUT
1100,SOUPS,TOMATO,CHICKEN NOODLE,VEGETABLE,MISO,MINESTRONE,PEA
1101,SANDWICHES,BLT,CLUB,RUBEN,PBJ,SUB,WRAP,BURGER,PANINI
1102,CHEESES,CHEDDAR,SWISS,MOZZARELLA,BRIE,GOUDA,FETA,PARMESAN,BLUE,AMERICAN,CAMEMBERT,PROVOLONE,RICOTTA,HAVARTI
1103,CANDY BARS,SNICKERS,TWIX,KIT KAT,MILKY WAY,HERSHEYS,REESES,CRUNCH,BUTTERFINGER,ALMOND JOY
1104,JEWELRY,RING,NECKLACE,EARRING,BRACELET,WATCH,BROOCH,PENDANT,ANKLET,CHAIN
1105,FOOTWEAR,SNEAKERS,BOOTS,SANDALS,HEELS,FLATS,SLIPPERS,LOAFERS,CLEATS,CLOGS
1106,HATS,CAP,BEANIE,FEDORA,COWBOY,BERET,VISOR,HELMET,TOP HAT,SOMBRERO
1107,FURNITURE,SOFA,TABLE,CHAIR,BED,DRESSER,DESK,BOOKSHELF,CABINET,STOOL,BENCH,SHELF,CHEST,DRAWER
1108,APPLIANCES,OVEN,FRIDGE,DISHWASHER,MICROWAVE,TOASTER,WASHER,DRYER,BLENDER
1109,TOOLS,HAMMER,SCREWDRIVER,WRENCH,SAW,DRILL,PLIERS,LEVEL,TAPE,NAIL
1110,GARDEN TOOLS,SHOVEL,RAKE,HOE,HOSE,MOWER,PRUNER,TROWEL,GLOVES,POT
1111,OFFICE SUPPLIES,PAPER,PEN,STAPLER,TAPE,CLIP,FOLDER,NOTEBOOK,ENVELOPE,PRINTER
1112,COMPUTERS,KEYBOARD,MOUSE,SCREEN,LAPTOP,MONITOR,WIFI,PRINTER,TABLET,DATA,MIC,WEBCAM,SCANNER
1113,STREAMING APPS,NETFLIX,HULU,DISNEY,AMAZON,HBO,SPOTIFY,APPLE,YOUTUBE,PRIME,PEACOCK,PARAMOUNT
1114,VIDEO GAMES,MARIO,ZELDA,SONIC,MINECRAFT,FORTNITE,TETRIS,PACMAN,CALL OF DUTY,HALO,DOOM,OVERWATCH,VALORANT,DESTINY,BATTLEFIELD,FINAL FANTASY,POKEMON,SKYRIM,WITCHER,FALLOUT,PERSONA,ELDEN RING,MASS EFFECT,FIFA,MADDEN,NBA 2K,WWE,UFC
1115,BOARD GAMES,MONOPOLY,CLUE,RISK,SCRABBLE,CHESS,CHECKERS,LIFE,SORRY,UNO,CATAN,TICKET TO RIDE,PANDEMIC,CARCASSONNE,AZUL,WINGSPAN,CODENAMES,SCYTHE
1116,CARD SUITS,HEARTS,DIAMONDS,CLUBS,SPADES
1117,CHESS PIECES,KING,QUEEN,ROOK,BISHOP,KNIGHT,PAWN
1118,RANKS,GENERAL,COLONEL,MAJOR,CAPTAIN,LIEUTENANT,SERGEANT,CORPORAL,PRIVATE
1119,ROYALTY,KING,QUEEN,PRINCE,PRINCESS,DUKE,DUCHESS,BARON,KNIGHT,EMPEROR
1120,MYTHICAL CREATURES,DRAGON,UNICORN,MERMAID,GRIFFIN,PHOENIX,GIANT,ELF,DWARF
1121,SUPERHEROES,BATMAN,SUPERMAN,SPIDERMAN,IRONMAN,HULK,THOR,WONDER WOMAN,FLASH,BLACK WIDOW,HAWKEYE,PANTHER,AQUAMAN,CYBORG
1122,VILLAINS,JOKER,THANOS,VOLDEMORT,DARTH VADER,LEX LUTHOR,MAGNETO,BOWSER,PENGUIN,RIDDLER,BANE,CATWOMAN,FREEZE,VENOM,GOBLIN,OCTOPUS,SANDMAN,ELECTRO,MYSTERIO
1123,DISNEY PRINCESSES,ARIEL,BELLE,JASMINE,MULAN,TIANA,RAPUNZEL,SNOW WHITE
1124,STAR WARS,JEDI,SITH,YODA,LUKE,LEIA,HAN SOLO,CHEWBACCA,DROID,FORCE,OBIWAN,ANAKIN,WINDU,REY,AHSOKA,VADER,MAUL,SIDIOUS,DOOKU,KYLO REN,SNOKE
1125,BEATLES MEMBERS,JOHN,PAUL,GEORGE,RINGO
1126,US PRESIDENTS,WASHINGTON,LINCOLN,KENNEDY,OBAMA,BUSH,CLINTON,TRUMP,BIDEN,NIXON,ROOSEVELT,JEFFERSON,MADISON,MONROE,JACKSON,GRANT,CLEVELAND,WILSON,COOLIDGE,REAGAN
1127,CURRENCIES,DOLLAR,EURO,POUND,YEN,PESO,RUBLE,RUPEE,YUAN,FRANC
1128,CAPITALS,LONDON,PARIS,BERLIN,ROME,MADRID,MOSCOW,ATHENS,DUBLIN,TOKYO,OSLO,LIMA,DOHA,SUVA,KIEV,BEIJING,SEOUL,BANGKOK,HANOI,JAKARTA,MANILA,DELHI,CAIRO,LAGOS,NAIROBI,CAPE TOWN,ACCRA,DAKAR,TORONTO,VANCOUVER,MONTREAL,CALGARY,OTTAWA,EDMONTON,WINNIPEG,QUEBEC,SYDNEY,MELBOURNE,BRISBANE,PERTH,ADELAIDE,CANBERRA,HOBART,DARWIN
1129,US CITIES,NEW YORK,LOS ANGELES,CHICAGO,HOUSTON,PHOENIX,MIAMI,SEATTLE,BOSTON,PHILADELPHIA,ATLANTA,WASHINGTON,CHARLOTTE,ORLANDO,SAN FRANCISCO,LAS VEGAS,DENVER,PORTLAND,SAN DIEGO
1130,RIVERS,NILE,AMAZON,MISSISSIPPI,YANGTZE,DANUBE,THAMES,RHINE,SEINE,ELBE,URAL,PO,DON,LOIRE
1131,MOUNTAINS,EVEREST,K2,FUJI,DENALI,KILIMANJARO,MATTERHORN,RAINIER,ETNA,HOOD,COOK,ROSA,LOGAN,BLANC
1132,DESERTS,SAHARA,GOBI,MOJAVE,ARABIAN,KALAHARI,ATACAMA,ANTARCTIC,KAROO,THAR,NAMIB,NEGEV,SIMPSON,GIBSON
1133,ISLANDS,HAWAII,ICELAND,IRELAND,CUBA,JAMAICA,FIJI,BALI,TAHITI,JAVA,MAUI,OAHU,GUAM,KAUAI,CEBU
1134,LANGUAGES,ENGLISH,SPANISH,FRENCH,GERMAN,CHINESE,JAPANESE,ARABIC,RUSSIAN
1135,RELIGIONS,CHRISTIANITY,ISLAM,JUDAISM,BUDDHISM,HINDUISM,SIKHISM,TAOISM
1136,HOLIDAYS,CHRISTMAS,HALLOWEEN,EASTER,THANKSGIVING,NEW YEARS,VALENTINES,JULY 4TH,LABOR DAY
1137,ZODIAC SIGNS,ARIES,TAURUS,GEMINI,CANCER,LEO,VIRGO,LIBRA,SCORPIO
1138,TIME UNITS,SECOND,MINUTE,HOUR,DAY,WEEK,MONTH,YEAR,DECADE,CENTURY
1139,MEASUREMENTS,INCH,FOOT,YARD,MILE,METER,LITER,GRAM,POUND,OUNCE
1140,MATH SHAPES,CIRCLE,SQUARE,TRIANGLE,RECTANGLE,OVAL,HEXAGON,OCTAGON,CUBE
1141,SCIENCES,BIOLOGY,CHEMISTRY,PHYSICS,GEOLOGY,ASTRONOMY,BOTANY,ZOOLOGY,SOCIO,PSYCH
1142,ORGANS,HEART,BRAIN,LUNG,LIVER,STOMACH,KIDNEY,SKIN,EYE
1143,SENSES,SIGHT,HEARING,TASTE,SMELL,TOUCH
1144,WEATHER,SUNNY,CLOUDY,RAINY,SNOWY,WINDY,STORMY,FOGGY,HAIL,MIST,SMOG,WIND
1145,DISASTERS,QUAKE,FLOOD,TORNADO,HURRICANE,FIRE,DROUGHT,TSUNAMI
1146,TRANSPORTATION,CAR,BUS,TRAIN,PLANE,BOAT,BIKE,SHIP,SUBWAY,TAXI
1147,AIRPORT ITEMS,PASSPORT,TICKET,LUGGAGE,GATE,PLANE,SECURITY,PILOT
1148,HOTEL ITEMS,BED,KEY,ROOM,LOBBY,POOL,MAID,TOWEL,SOAP
1149,BANK ITEMS,MONEY,VAULT,TELLER,CHECK,ATM,LOAN,SAVINGS,CARD
1150,POST OFFICE,STAMP,MAIL,LETTER,BOX,PACKAGE,ENVELOPE,ZIP CODE
1151,LIBRARY ITEMS,BOOK,SHELF,CARD,QUIET,READ,DESK,COMPUTER
1152,MOVIE THEATER,SCREEN,SEAT,POPCORN,SODA,CANDY,TICKET,FILM,AISLE
1153,RESTAURANT,MENU,WAITER,TABLE,CHEF,ORDER,TIP,BILL,FOOD
1154,GROCERY STORE,CART,AISLE,FOOD,CASHIER,BAG,PRODUCE,DELI,DAIRY
1155,CONSTRUCTION,CRANE,DUMP TRUCK,HARD HAT,CONE,DIGGER,CEMENT,BUILD
1156,FARMING,TRACTOR,BARN,FIELD,CROP,COW,PLOW,HAY,SILO
1157,FISHING,ROD,REEL,BAIT,HOOK,BOAT,NET,LAKE,CATCH
1158,CAMPING GEAR,TENT,BAG,FIRE,FLASHLIGHT,COMPASS,KNIFE,PACK,BOOTS
1159,BEACH ITEMS,SAND,SURF,TOWEL,SUNSCREEN,UMBRELLA,BUCKET,BALL
1160,GARDENING,FLOWER,HOE,SEED,SOIL,WATER,RAKE,WEED,GROW
1161,PAINTING,BRUSH,CANVAS,EASEL,PAINT,COLOR,PALETTE,ARTIST
1162,SEWING,NEEDLE,THREAD,CLOTH,BUTTON,PIN,SCISSORS,STITCH
1163,COOKING,PAN,POT,STOVE,OVEN,MIX,BAKE,FRY,BOIL,CHOP
1164,CLEANING,BROOM,MOP,DUST,VACUUM,SOAP,SPONGE,WIPE,WASH
1165,FEELINGS,HAPPY,SAD,ANGRY,AFRAID,TIRED,EXCITED,BORED,CALM
1166,VIRTUES,KIND,HONEST,BRAVE,LOYAL,FAIR,WISE,PATIENT,STRONG
1167,LAKES,CASPIAN,SUPERIOR,VICTORIA,HURON,MICHIGAN,BAIKAL,BEAR,ERIE,MEAD,CHAD,TAHOE,COMO
1168,SEAS,MEDITERRANEAN,CARIBBEAN,SOUTH CHINA,BERING,MEXICO,OKHOTSK,EAST CHINA,JAPAN,BALTIC,CORAL,BLACK,RED,JAVA,ROSS
1169,STARS,SIRIUS,VEGA,RIGEL,BETELGEUSE,ALTAIR,POLARIS,ANTARES,DENEB,MIRA,POLLUX,CASTOR
1170,MOONS,LUNA,TITAN,EUROPA,IO,PHOBOS,DEIMOS,CHARON,GANYMEDE,CALLISTO,ENCELADUS
1171,TREES,ASH,BEECH,BIRCH,CEDAR,CHERRY,CYPRESS,ELM,FIR,MAPLE,PINE,POPLAR,REDWOOD,SPRUCE,WALNUT,WILLOW,OAK,YEW,GUM
1172,FLOWERS,CAMELLIA,DAISY,IRIS,LAVENDER,LILY,ORCHID,ROSE,SUNFLOWER,TULIP,VIOLET,PANSY,POPPY,ASTER,PEONY
1173,INSECTS,ANT,BEE,BEETLE,BUTTERFLY,FLY,GNAT,MOSQUITO,MOTH,WASP,FLEA,LOUSE,TICK,MITE
1174,FAMOUS PAINTERS,PICASSO,VAN GOGH,MONET,DALI,REMBRANDT,WARHOL,MATISSE,POLLOCK
1175,COMPOSERS,BACH,MOZART,BEETHOVEN,CHOPIN,TCHAIKOVSKY,VIVALDI,HANDEL
1176,LITERARY GENRES,FICTION,MYSTERY,SCI-FI,FANTASY,HORROR,ROMANCE,THRILLER
1177,POETRY TERMS,STANZA,RHYME,METER,VERSE,HAIKU,SONNET,LYRIC,EPIC,ODE
1178,THEATER TERMS,STAGE,CURTAIN,PROP,SCRIPT,CAST,PLAY,ACT,CUE,ROLE
1179,DANCE STYLES,BALLET,TAP,JAZZ,SALSA,TANGO,WALTZ,HULA,POLKA
1180,MUSIC TEMPOS,ALLEGRO,ADAGIO,PRESTO,LARGO,ANDANTE
1181,ARCHITECTURE,ARCH,DOME,SPIRE,COLUMN,VAULT
1182,BRIDGE TYPES,SUSPENSION,ARCH,BEAM,TRUSS,DRAWBRIDGE
1183,ROAD TYPES,HIGHWAY,STREET,AVENUE,LANE,BOULEVARD
1184,KITCHEN HERBS,BASIL,THYME,MINT,DILL,ROSEMARY,CHIVE,CRESS,SORREL,RUE,BALM
1185,BAKING SPICES,CINNAMON,NUTMEG,CLOVE,GINGER,ALLSPICE,SALT,SAGE,CUMIN
1186,CITRUS FRUITS,LEMON,LIME,ORANGE,GRAPEFRUIT,CITRON,POMELO,MANDARIN
1187,BERRIES,STRAWBERRY,BLUEBERRY,RASPBERRY,BLACKBERRY,CRANBERRY,GOOSEBERRY
1188,STONE FRUITS,PEACH,PLUM,APRICOT,CHERRY,NECTARINE,MANGO
1189,TROPICAL FRUITS,MANGO,PINEAPPLE,PAPAYA,KIWI,BANANA
1190,ROOT VEGETABLES,CARROT,POTATO,BEET,TURNIP,RADISH,PARSNIP
1191,LEAFY GREENS,SPINACH,KALE,LETTUCE,ARUGULA,CHARD,COLLARD
1192,CRUSTACEANS,CRAB,LOBSTER,SHRIMP,PRAWN,BARNACLE
1193,MOLLUSKS,SNAIL,CLAM,SQUID,OCTOPUS,OYSTER
1194,ARACHNIDS,SPIDER,SCORPION,TICK,MITE
1195,CONIFERS,PINE,FIR,SPRUCE,CEDAR,REDWOOD
1196,DECIDUOUS TREES,OAK,MAPLE,ELM,BIRCH,ASH
1197,CLOUDS,CIRRUS,STRATUS,CUMULUS,NIMBUS,ALTO
1198,WIND NAMES,ZEPHYR,GALE,MISTRAL,CHINOOK,MONSOON,GUST,DRAFT,BREEZE,SQUALL,TRADE
1199,PRECIPITATION,RAIN,SNOW,SLEET,HAIL,FOG
1200,TECTONIC PLATES,PACIFIC,EURASIAN,AFRICAN,ANTARCTIC`,QC=`1201,VOLCANO PARTS,CRATER,VENT,MAGMA,LAVA,ASH
1202,OCEAN ZONES,COASTAL,PELAGIC,BENTHIC,ABYSSAL
1203,FOSSIL FUELS,COAL,OIL,GAS,PEAT
1204,ALLOYS,BRONZE,BRASS,STEEL,PEWTER,SOLDER
1205,PATTERNS,PLAID,STRIPE,CHECK,DOT,GRID,TOILE,PAISLEY
1206,TEXTURES,SILK,WOOL,FELT,LINEN,HEMP,JUTE,FUR
1207,SHAPES 3D,CONE,CUBE,PRISM,TORUS,SPHERE,HELIX,SPIRAL
1208,COLORS EXOTIC,CYAN,TEAL,NAVY,AQUA,AZURE,INDIGO,COBALT
1209,TIME PERIODS,SEC,MIN,HOUR,WEEK,YEAR,AGE,ERA
1210,VOLUMES,PINT,QUART,LITER,DRAM,GILL,PECK,BUSHEL
1211,WEIGHTS,GRAM,KILO,TON,POUND,OUNCE,STONE,GRAIN
1212,UNITS,INCH,FOOT,YARD,MILE,ACRE,ROD,FURLONG
1213,SYMBOLS,DASH,DOT,STAR,HASH,PLUS,TILDE,CARET
1214,WRITING,DRAFT,EDIT,COPY,TYPE,PLOT,PRINT,FILE
1215,NUTS,PECAN,ALMOND,CASHEW,WALNUT,HAZEL,PINE,BRAZIL,PISTACHIO
1216,DISNEY PARKS,MAGIC KINGDOM,EPCOT,ANIMAL KINGDOM,DISNEYLAND
1217,PIXAR MOVIES,TOY STORY,CARS,UP,SOUL,COCO,WALL-E,INSIDE OUT,RATATOUILLE
1218,THEME PARKS,DISNEY,UNIVERSAL,SIX FLAGS,SEAWORLD,LEGOLAND,BUSCH GARDENS,DOLLYWOOD
1219,ROLLER COASTERS,WOODEN,STEEL,INVERTED,LOOP,DIVE,LAUNCH,SPINNING,HYBRID
1220,ANDROID VERSIONS,CUPCAKE,DONUT,ECLAIR,FROYO,GINGERBREAD,HONEYCOMB,JELLY BEAN,KITKAT
1221,APPLE PRODUCTS,IPHONE,IPAD,MACBOOK,WATCH,AIRPODS,IMAC,APPLE TV,VISION PRO
1222,MESSAGING APPS,WHATSAPP,MESSENGER,TELEGRAM,SIGNAL,WECHAT,LINE,DISCORD,SLACK
1223,TV CHANNELS,NBC,ABC,CBS,FOX,CNN,ESPN,HBO,DISNEY,MTV
1224,GYM EXERCISES,SQUAT,BENCH PRESS,DEADLIFT,LUNGE,CURL,PLANK,PUSHUP,PULLUP
1225,CARDIO MACHINES,TREADMILL,ELLIPTICAL,BIKE,ROWER,STAIRMASTER,CLIMBER,SKI ERG
1226,PASTA SAUCES,MARINARA,ALFREDO,PESTO,VODKA,BOLOGNESE,CARBONARA,PUTTANESCA
1227,FRENCH CHEESES,BRIE,CAMEMBERT,ROQUEFORT,COMTE,GRUYERE,MUNSTER,CHEVRE
1228,BOX OFFICE,AVATAR,TITANIC,AVENGERS,STAR WARS,JURASSIC WORLD,LION KING,SPIDERMAN
1229,DIRECTORS,SPIELBERG,NOLAN,SCORSESE,TARANTINO,CAMERON,HITCHCOCK,KUBRICK,COPPOLA
1230,HARRY POTTER,HARRY,RON,HERMIONE,DRACO,SNAPE,DUMBLEDORE,HAGRID,SIRIUS,MCGONAGALL,FLITWICK,SPROUT
1231,LOTR RACES,HOBBIT,ELF,DWARF,ORC,MAN,WIZARD,ENT,TROLL
1232,STAR WARS DROIDS,R2D2,C3PO,BB8,K2SO,IG88,CHOPPER,BATTLE DROID,PROBE
1233,TENNIS MAJORS,WIMBLEDON,US OPEN,FRENCH OPEN,AUSTRALIAN OPEN
1234,GOLF MAJORS,MASTERS,US OPEN,PGA,THE OPEN
1235,CAR SAFETY,AIRBAG,SEATBELT,ABS,CAMERA,SENSOR,BRAKES,LANE ASSIST
1236,LUXURY CARS,FERRARI,PORSCHE,LAMBORGHINI,BUGATTI,MCLAREN,ASTON MARTIN,ROLLS ROYCE,GUCCI,PRADA,CHANEL,DIOR,VUITTON,HERMES,ROLEX,CARTIER
1237,ELECTRIC CARS,TESLA,RIVIAN,LUCID,POLESTAR,LEAF,BOLT,IONIQ,TAYCAN
1238,COFFEE CHAINS,STARBUCKS,DUNKIN,TIM HORTONS,PEETS,COSTA,CARIBOU,DUTCH BROS,BLUE BOTTLE
1239,DONUT SHOPS,KRISPY KREME,DUNKIN,TIM HORTONS,VOODOO,SHIPLEY,RANDYS
1240,JEANS BRANDS,LEVI,WRANGLER,LEE,DIESEL,GAP,CALVIN KLEIN,GUESS
1241,MAKEUP BRANDS,MAC,SEPHORA,ULTA,FENTY,NYX,MORPHE,CLINIQUE,NARS
1242,ENERGY DRINKS,RED BULL,MONSTER,ROCKSTAR,BANG,CELSIUS,NOS,REIGN
1243,MONOPOLY PIECES,TOP HAT,THIMBLE,BOOT,CAR,DOG,IRON,SHIP,WHEELBARROW
1244,CARD GAMES,POKER,BLACKJACK,WAR,GO FISH,BRIDGE,RUMMY,SOLITAIRE,HEARTS,CANASTA,EUCHRE,CRIBBAGE,PINOCHLE
1245,CASINO GAMES,SLOTS,CRAPS,ROULETTE,BACCARAT,POKER,KENO,BINGO,PAI GOW,FARO
1246,DISNEY PRINCES,CHARMING,ERIC,ALADDIN,PHILLIP,ADAM,NAVEEN,FLYNN
1247,LAS VEGAS HOTELS,BELLAGIO,LUXOR,VENETIAN,WYNN,ARIA,MANDALAY,MIRAGE,EXCALIBUR
1248,CIRQUE SHOWS,O,KA,MYSTERE,LOVE,ALEGRIA,KOOZA,ZUMANITY,BEATLES
1249,NETFLIX ORIGINALS,STRANGER THINGS,CROWN,OZARK,WITCHER,BRIDGERTON,SQUID GAME,NARCOS,DARK
1250,GYM EQUIPMENT,DUMBBELL,BARBELL,KETTLEBELL,TREADMILL,ELLIPTICAL,ROWER,BENCH,BIKE
1251,YOGA STYLES,HATHA,VINYASA,BIKRAM,ASHTANGA,YIN,KUNDALINI,RESTORATIVE
1252,CROSSFIT TERMS,WOD,AMRAP,BOX JUMP,BURPEE,THRUSTER,SNATCH,CLEAN,JERK
1253,GOLD RUSH STATES,CALIFORNIA,ALASKA,NEVADA,COLORADO,DAKOTA,IDAHO,MONTANA
1254,DESERT PLANTS,CACTUS,AGAVE,YUCCA,SAGEBRUSH,JOSHUA TREE,ALOE,MESQUITE,PRICKLY PEAR
1255,RAINFOREST LAYERS,EMERGENT,CANOPY,UNDERSTORY,FLOOR,SOIL,SHRUB
1256,ARCTIC NATIONS,CANADA,RUSSIA,USA,NORWAY,DENMARK,ICELAND,SWEDEN,FINLAND
1257,SPACE SHUTTLES,ATLANTIS,CHALLENGER,COLUMBIA,DISCOVERY,ENDEAVOUR,ENTERPRISE
1258,NASA CENTERS,KENNEDY,JOHNSON,GODDARD,MARSHALL,LANGLEY,AMES,GLENN
1259,ROCKET PARTS,NOSE CONE,FIN,ENGINE,FUSELAGE,PAYLOAD,THRUSTER,TANK,STAGE
1260,US MONUMENTS,LINCOLN,WASHINGTON,JEFFERSON,RUSHMORE,LIBERTY,ARCH,ALAMO,BUNKER HILL
1261,MOUNT RUSHMORE,WASHINGTON,JEFFERSON,LINCOLN,ROOSEVELT
1262,ROOSEVELT FAMILY,TEDDY,FRANKLIN,ELEANOR,ALICE,KERMIT,THEODORE,ELLIOTT
1263,NEW DEAL,WPA,CCC,TVA,SSA,FDIC,SEC,NRA,AAA
1264,GREAT DEPRESSION,CRASH,DUST BOWL,HOOVERVILLE,POVERTY,JOBS,BANK,STOCKS
1265,1930S DECADE,DEPRESSION,SWING,RADIO,TALKIES,PROHIBITION,GANGSTERS,JAZZ
1266,GANGSTER ERA,CAPONE,DILLINGER,NELSON,BONNIE,CLYDE,LUCIANO,BUGSY,GOTTI
1267,PROHIBITION DRINKS,GIN RICKEY,SIDECAR,HIGHBALL,MARY PICKFORD,BEES KNEES,MOONSHINE,SPEAKEASY
1268,SITCOMS,FRIENDS,SEINFELD,OFFICE,PARKS REC,BIG BANG,CHEERS,MASH
1269,DRAMAS,BREAKING BAD,SOPRANOS,WIRE,MAD MEN,SUCCESSION,LOST,THRONES
1270,CARTOONS,SPONGEBOB,SIMPSONS,FAMILY GUY,SOUTH PARK,FUTURAMA,SCOOBY DOO
1271,REALITY TV,SURVIVOR,BIG BROTHER,BACHELOR,VOICE,IDOL,AMAZING RACE
1272,SCI FI SHOWS,TREK,DOCTOR WHO,X FILES,STRANGER THINGS,MANDALORIAN,FIREFLY
1273,TALK SHOWS,TONIGHT,DAILY,ELLEN,OPRAH,LETTERMAN,CONAN,KIMMEL
1274,REVOLUTIONS,FRENCH,AMERICAN,INDUSTRIAL,RUSSIAN,DIGITAL,SCIENTIFIC
1275,EMPIRES,ROMAN,OTTOMAN,BRITISH,MONGOL,AZTEC,MAYAN,PERSIAN
1276,CONSTELLATIONS,ORION,URSA MAJOR,CASSIOPEIA,SCORPIO,LEO,DRACO,PEGASUS
1277,SPACE MISSIONS,APOLLO,GEMINI,VOYAGER,ARTEMIS,SPUTNIK,CURIOSITY
1278,ASTRONAUTS,ARMSTRONG,ALDRIN,GAGARIN,GLENN,RIDE,HADFIELD,KELLY
1279,GALAXIES,MILKY WAY,ANDROMEDA,TRIANGULUM,WHIRLPOOL,SOMBRERO,PINWHEEL
1280,SOCCER TEAMS,REAL MADRID,BARCELONA,MAN UTD,LIVERPOOL,JUVENTUS,BAYERN
1281,NBA TEAMS,LAKERS,BULLS,WARRIORS,CELTICS,HEAT,KNICKS,SPURS
1282,TROPHIES,STANLEY CUP,LOMBARDI,WORLD CUP,GOLD MEDAL,HEISMAN,WIMBLEDON
1283,SPORTS LEGENDS,JORDAN,PELE,BRADY,RUTH,GRETZKY,ALI,PHELPS,WOODS
1284,PERSONNEL,TEACHER,STUDENT,PRINCIPAL,JANITOR,COACH,NURSE,COUNSELOR
1285,ACADEMICS,HOMEWORK,QUIZ,TEST,ESSAY,PROJECT,REPORT,GRADE
1286,RECESS,SWING,SLIDE,TAG,BALL,SANDBOX,JUMP ROPE,HOPSCOTCH
1287,HP SPELLS,LUMOS,NOX,ACCIO,ALOHOMORA,EXPELLIARMUS,STUPEFY,PROTEGO
1288,PIXAR CARS,LIGHTNING,MATER,SALLY,DOC,LUIGI,GUIDO,MACK
1289,TOY STORY TOYS,WOODY,BUZZ,REX,HAMM,SLINKY,JESSIE,BULLSEYE
1290,SPONGEBOB CAST,SPONGEBOB,PATRICK,SQUIDWARD,SANDY,KRABS,PLANKTON
1291,SIMPSONS FAMILY,HOMER,MARGE,BART,Lisa,MAGGIE,GRAMPA
1292,FAMILY GUY,PETER,LOIS,STEWIE,BRIAN,CHRIS,MEG
1293,FRIENDS CAST,ROSS,RACHEL,MONICA,CHANDLER,JOEY,PHOEBE
1294,THE OFFICE CAST,MICHAEL,DWIGHT,JIM,PAM,RYAN,ANDY
1295,GOT HOUSES,STARK,LANNISTER,TARGARYEN,BARATHEON,GREYJOY,TYRELL
1296,HUNGER GAMES,MINING,LUXURY,FISHING,POWER,AGRICULTURE,TRANSPORT
1297,TWILIGHT SAGA,BELLA,EDWARD,JACOB,ALICE,CARLISLE,EMMETT
1298,VAMPIRE DIARIES,ELENA,STEFAN,DAMON,BONNIE,CAROLINE,ALARIC
1299,STRANGER THINGS,MIKE,ELEVEN,DUSTIN,LUCAS,WILL,MAX
1300,BREAKING BAD,WALTER,JESSE,SKYLER,HANK,SAUL,GUS`,$C=`1760,BICYCLE PARTS,WHEEL,TIRE,PEDAL,CHAIN,HANDLEBAR,SEAT,BRAKE,GEAR
1761,TRAFFIC SIGNS,STOP,YIELD,SPEED LIMIT,ONE WAY,DO NOT ENTER,NO PARKING,MERGE,CROSSWALK
1762,Air Fryer Staples,Fries,Wings,Broccoli,Salmon,Tofu,Ravioli
2000,Retro Tech,Walkman,Diskette,Pager,Rotary Phone,Betamax,LaserDisc
2001,Arcade Classics,Pac-Man,Galaga,Donkey Kong,Space Invaders,Dig Dug,Asteroids
2002,Vintage Toys,Yo-yo,Slinky,Etch A Sketch,View-Master,Rubik's Cube,Silly Putty
2003,80s Movies,Ghostbusters,E.T.,The Goonies,Top Gun
2004,Muscle Cars,Mustang,Corvette,Beetle,Charger,Thunderbird,GTO,Camaro,Chevelle
2005,Legendary Rock,Led Zeppelin,Pink Floyd,The Who,Queen,Fleetwood Mac,AC/DC,Deep Purple
2006,90s Cartoons,Rugrats,Doug,Animaniacs,Ren and Stimpy,Hey Arnold
2007,Classic Board Games,Monopoly,Clue,Risk,Scrabble,Stratego,Battleship,Chess
2008,Breakfast Mascots,Tony the Tiger,Toucan Sam,Captain Crunch,Count Chocula
2009,Classic Sitcoms,Seinfeld,Cheers,MASH,I Love Lucy,Friends,The Jeffersons
2010,Early Web,AOL,Netscape,GeoCities,Napster,ICQ,Ask Jeeves,AltaVista
2011,8-Bit Era,NES,Atari 2600,Intellivision,ColecoVision,Commodore 64
2012,Classic Sodas,Tab,Jolt,Fresca,RC Cola,Moxie,Surge,Crystal Pepsi
2013,Universal Monsters,Dracula,Frankenstein,Wolfman,Mummy,Gill-man,Invisible Man
2014,Wild West Legends,Wyatt Earp,Doc Holliday,Jesse James,Billy the Kid,Butch Cassidy
2015,Classic Detectives,Sherlock Holmes,Hercule Poirot,Miss Marple,Sam Spade,Philip Marlowe,Dick Tracy
2016,Vinyl Culture,LP,Turntable,Groove,Stylus,Sleeve,RPM,Crackle
2017,Sci-Fi Novels,Dune,Foundation,1984,Brave New World,Fahrenheit 451
2018,Classic Comic Strips,Snoopy,Garfield,Dilbert,Calvin,Hobbes,Popeye,Heathcliff
2019,Golden Age Stars,Humphrey Bogart,Cary Grant,James Stewart,Gregory Peck,Clark Gable,Bette Davis
2020,Old School Candy,Bazooka,Necco Wafers,Abba-Zaba,Bit-O-Honey
2021,Historic Stadiums,Wrigley Field,Fenway Park,Lambeau Field
2022,Classic TV Westerns,Gunsmoke,Bonanza,Rawhide,Wagon Train,The Virginian,High Chaparral
2023,Early Portables,Osborne 1,Game Boy
2024,Horror Villains,Michael Myers,Freddy Krueger,Jason Voorhees,Leatherface,Pinhead,Chucky
2025,Vintage Kitchen,Hand Mixer,Percolator,Seltzer Siphon,Egg Beater,Toaster Oven
2026,Classic Accessories,Pocket Watch,Fedora,Brooch,Cufflinks,Tie Clip,Parasol
2027,Cocktail Classics,Old Fashioned,Martini,Manhattan,Negroni,Sidecar,Gimlet,Daiquiri
2028,Golden Age Animation,Warner Bros,Fleischer,Disney,MGM,UPA,Hanna-Barbera
2029,Superhero Identities,Bruce Wayne,Clark Kent,Peter Parker,Diana Prince,Tony Stark,Steve Rogers
2030,Famous Instruments,Stradivarius,Steinway
2031,Historic Travel,Ocean Liner,Steam Train,Zeppelin,Stagecoach,Caravan,Rickshaw
2032,Renaissance Masters,Leonardo,Michelangelo,Raphael,Donatello,Titian,Botticelli
2033,Ancient Philosophy,Stoicism,Platonism,Cynicism,Skepticism
2034,Fairy Tale Magic,Magic Mirror,Glass Slipper,Poison Apple,Golden Goose,Magic Carpet
2035,Opera Greats,Verdi,Wagner,Puccini,Mozart,Rossini,Bizet,Handel
2036,Classic Dance,Charleston,Swing,Waltz,Foxtrot,Tango,Lindy Hop
2037,NASA Milestones,Vostok,Mercury,Gemini,Apollo,Voyager,Skylab,Sputnik
2038,Architectural Gems,Romanesque,Gothic,Baroque,Art Deco,Bauhaus
2039,Classic Ships,Galleon,Frigate,Clipper,Ironclad,Dreadnought,U-Boat
2040,Timeless Poets,Frost,Keats,Byron,Shelley,Whitman,Dickinson,Poe
2041,Martial Arts,Karate,Kung Fu,Judo,Taekwondo,Aikido,Hapkido,Capoeira
2042,Chess Openings,Ruy Lopez,French Defense,Caro-Kann
2043,Tarot Suits,Wands,Cups,Swords,Pentacles,Major Arcana
2044,Alchemical Terms,Quicksilver,Brimstone,Vitriol,Saltpeter,Elixir
2045,Natural Wonders,Grand Canyon,Victoria Falls,Mount Everest,Niagara Falls
2046,Mythology Realms,Olympus,Hades,Asgard,Valhalla,Midgard,Niflheim
2047,Night Sky,Orion,Ursa Major,Cassiopeia,Pleiades,Pegasus,Draco
2048,Stationery Supplies,Fountain Pen,Wax Seal,Parchment,Blotter,Quiver,Inkwell
2049,Retro Gaming Logos,Sega,Nintendo,Atari,Capcom,Konami,Namco,Taito
2171,Cooking Techniques,Sous Vide,Braise,Poach,Saute,Blanch,Sear,Braising,Poaching,Searing,Blanching,Roasting,Grilling
2172,Chef Ranks Kitchen,Executive,Sous,Station,Commis,Pastry,Saucier
2173,Kitchen Safety,Knife,Fire,Sanitize,Cross-con,Temperature,Storage,Sharp Knives,Dry Hands,Ventilation
2299,Famous Directors,Spielberg,Nolan,Scorsese,Tarantino,Kubrick,Hitchcock
2500,Starts with Z,Zebra,Zoo,Zero,Zone,Zest,Zipper`,ep=`100000,Air Fryer Staples,Fries,Wings,Broccoli,Salmon,Tofu,Ravioli
100001,Mechanical Keyboards,Switch,Keycap,Lube,Stabilizer,Plate,PCB
100002,Smart Home Ecosystems,Smart Plug,Hub,Sensor,Camera,Lock,Bulb
100003,PC Water Cooling,Radiator,Pump,Reservoir,Tubing,Block,Fitting
100004,Hypebeast Brands,Supreme,Off-White,Stussy,Bape,Kith,Palace
100005,Streetwear Staples,Hoodie,Cargo Pants,Beanie,Vest,Sneakers,Oversized
100006,Sustainable Fabrics,Tencel,Hemp,Piñatex,Cork,Bamboo,Econyl
100007,Plant-Based Milks,Oat Milk,Almond Milk,Soy Milk,Coconut Milk,Cashew Milk,Pea Milk
100008,Workout Equipment,Kettlebell,Resistance Band,Yoga Block,Foam Roller,Mat,Jump Rope
100009,HIIT Exercises,Tabata,Burpee,Mountain Climber,Plank,Squat Jump,Lunges
100010,Pelagic Fish,Marlin,Sailfish,Swordfish,Wahoo,Mahi Mahi,Tuna
100011,Deep Sea Creatures,Anglerfish,Vampire Squid,Dumbo Octopus,Gulper Eel,Isopod,Blobfish
100012,Shark Anatomy,Gill Slits,Dorsal Fin,Ampullae,Cartilage,Snout,Tail
100013,Whale Sounds,Song,Click,Whistle,Pulse,Frequency,Echolocation
100014,Hippo Adaptations,Submerged,Nocturnal,Social,Territorial,Massive,Semi-aquatic
100015,Tiger Hunting,Ambush,Stalk,Camouflage,Solitary,Night,Power
100016,Lion Pride Roles,Alpha,Hunter,Guardian,Cub,Sentry,Leader
100017,Cat Grooming,Lick,Scratch,Purr,Paw,Tongue,Ear
100018,Dog Training Commands,Fetch,Sit,Stay,Heel,Come,Down
100019,Penguin Species,Emperor,Adelie,Gentoo,Chinstrap,Galápagos,Little
100020,Wolf Pack Roles,Alpha,Beta,Omega,Scout,Hunter,Guardian
100021,Dolphin Intelligence,Problem Solving,Tools,Names,Games,Mirror,Learning
100022,Elephant Anatomy,Trunk,Tusk,Ear,Hide,Foot,Tail
100023,Giraffe Facts,Long Neck,Ossicone,Tongue,Spots,Tall,Herbivore
100024,Zebra Patterns,Stripe,Unique,Dazzle,Camouflage,Herd,Black-white
100025,Monkey Species,Capuchin,Howler,Spider Monkey,Marmoset,Tamarin,Macaque
100026,Owl Traits,Vision,Hearing,Silent Flight,Talons,Beak,Neck
100027,YouTube Creator Tools,Thumbnail,Analytics,Dashboard,Studio,Editor,Tags
100028,Facebook Elements,Feed,Story,Group,Marketplace,Watch,Messenger
100029,Instagram Filters,Clarendon,Juno,Ludwig,Lark,Moon,Gingham
100030,TikTok Trends,POV,Lip Sync,Transition,Challenge,Storytime,Duet
100031,Twitter Terms,Thread,Quote,Retweet,Mention,Hashtag,Verified
100032,Reddit Components,Upvote,Downvote,Subreddit,Karma,Award,Flair
100033,LinkedIn Tools,Profile,Network,Job,Skill,Endorse,Connection
100034,Discord Features,Server,Channel,Bot,Nitro,Role,Invite
100035,Snapchat Essentials,Snap,Streak,Lens,Filter,Map,Spotlight
100036,Charity Focus Areas,Climate,Education,Health,Poverty,Wildlife,Rights
100037,Disaster Relief Groups,Red Cross,Team Rubicon,Direct Relief,Mercy Corps,CARE,UNICEF
100038,Environmental NGOs,WWF,Greenpeace,Sierra Club,Ocean Conservancy,Nature Conservancy,Earthjustice
100039,Human Rights Orgs,Amnesty,HRW,ACLU,Freedom House,Carter Center,Survival
100040,Health Charities,St. Jude,Mayo Clinic,Red Cross,Heart,Cancer,Alzheimer's
100041,Animal Welfare Groups,ASPCA,Humane Society,PETA,Best Friends,IFAW,Animal Welfare Institute
100042,Educational Non-profits,Teach For America,Room to Read,Khan Academy,DonorsChoose,BuildOn,Pratham
100043,Military Stealth Tech,Radar,Coating,Shape,Noise,Thermal,Infrared
100044,Special Forces Units,SEALs,Rangers,Delta,SAS,GIGN,Spetsnaz
100045,Historical Tanks,Tiger,Sherman,Panther,T-34,Churchill,Panzer
100046,Aircraft Carriers,Nimitz,Ford,Midway,Enterprise,Yorktown,Saratoga
100047,Modern Firearms,Rifle,Pistol,Shotgun,Carbine,Sniper,Machine
100048,Naval Strategy,Blockade,Convoy,Flank,Siege,Patrol,Ambush
100049,Military Base Zones,Hangar,Barracks,Range,Bunker,Depot,Gate
100050,Childhood Toys 2010s,Fidget Spinner,Hatchimals,Shopkins,Beyblade,Nerf,Lego
100051,Modern Cartoons,Bluey,Paw Patrol,Steven Universe,Adventure Time,Regular Show,Gravity Falls
100052,YouTube Kids Content,Unboxing,Nursery Rhyme,Gaming,Toy Review,Slime,Challenge
100053,Modern Board Games,Catan,Ticket to Ride,Pandemic,Carcassonne,Azul,Wingspan
100054,Modern Card Games,Uno,Phase 10,Magic,Pokémon,Yu-Gi-Oh,Exploding Kittens
100055,Arcade Classics,Pac-Man,Donkey Kong,Galaga,Asteroids,Centipede,Frogger
100056,MOBILE GAMES,Angry Birds,Candy Crush,Pokémon Go,Flappy Bird,Subway Surfers,Temple Run
100057,Tabletop RPGs,D&D,Pathfinder,Starfinder,Cyberpunk,Call of Cthulhu,Shadowrun
100058,Tourism Types,Eco,Dark,Space,Gastro,Voluntourism,Adventure
100059,Space Tourism,Orbit,Rocket,Suborbital,Zero-G,Station,View
100060,Eco-Tourism Spots,Costa Rica,Galapagos,Amazon,Norway,Kenya,Iceland
100061,Dark Tourism Sites,Chernobyl,Auschwitz,Pompeii,Alcatraz,Ground Zero,Catacombs
100062,Gastro Tourism,Wine,Street Food,Cooking Class,Festival,Market,Fine Dining
100063,Adventure Tourism,Zipline,Rafting,Hiking,Diving,Bungee,Safari
100064,Voluntourism Tasks,Building,Teaching,Conservation,Farming,Health,Mapping
100065,Luxury Hotel Chains,Ritz-Carlton,Four Seasons,Aman,St. Regis,Rosewood,Waldorf
100066,Boutique Hotel Features,Unique,Design,Local,Small,Intimate,Stylish
100067,Hotel Room Items,Minibar,Safe,Robe,Slippers,Keycard,Menu
100068,Casino Amenities,Spa,Pool,Buffet,Theater,Bar,Lounge
100069,Casino Table Games,Blackjack,Roulette,Craps,Baccarat,Poker,Sic Bo
100070,Slot Machine Types,Classic,Video,Progressive,3D,Fruit,Jackpot
100071,Poker Terminology,Bluff,Ante,Check,Raise,Fold,Pot
100072,Roulette Bets,Red,Black,Odd,Even,Corner,Street
100073,Baccarat Terms,Player,Banker`,tp=`110000,Abraham Lincoln,Civil War,Emancipation Proclamation,Gettysburg Address,Honest Abe,Log Cabin,Union
110001,Actor,Performance,Audition,Role,Stage,Rehearsal,Dialogue,Godfather,Serpico,Scarface,Heat,Cruising,The Insider,Sea of Love
110002,Actress,Doubt,Manhattan,The Post,Iron Lady,Mamma Mia,Silkwood,Adaptation
110003,Afternoon Tea,Scone,Crumpet,Darjeeling,Chamomile
110004,Agriculture,IRRIGATION,TILLAGE,FALLOW,SILAGE,AGRONOMY
110005,Airbnb,Vacation Rental,Hospitality,Homestay,Booking,Guest,Short-term Rental,Superhost,Wishlist,Experience,Luxe,Nightly,Plus
110006,Albert Einstein,Physics,Relativity,Science,Time,Atom,Space,Spacetime,Photon,Quanta
110007,ALBUM,discography,compilation,tracklist,long play,production,GATEFOLD,SLEEVE,BOOKLET,INLAY
110008,Alexander the Great,Macedonia,Hellenism,Aristotle,Bucephalus,Persian Empire,King of Kings,Phalanx,Macedon,Issus,Gaugamela
110009,All Star,elite,accolade,MVP,showcase,selection
110010,Amazon,Prime,Kindle,Alexa,AWS,Cart,Marketplace,Books,Audible
110011,Amazon River,South America,Brazil,Piranha,Biodiversity,Basin,Rainforest,Anaconda,Manaus,Amazonia
110012,Amelia Earhart,Aviation,Lockheed Electra,Atlantic Ocean,Navigator,Solo Flight,Missing,Pioneer,Howland,Atchison,Purdue
110013,American Founding Fathers,Madison,Hamilton,Adams,Franklin
110014,Ancient Roman Sites,Colosseum,Pantheon,Roman Forum,Pompeii
110015,Angelina Jolie,Salt,Maleficent,Changeling,Gia,Tomb Raider,Alexander,Hackers
110016,Animals,Dog,Cat,Fish,Lion,Bear,Elephant,Tiger,Cheetah,Giraffe,Zebra,Gorilla,Badger
110017,Anime,Storyboard,CGI,Voice acting,Frame,Rendering,Stop motion,Keyframe,Naruto,Bleach,Akira,Pokemon,Evangelion,One Piece,manga,dubbing,subtitles,studio,character,convention
110018,Anne Hathaway,Interstellar,Serenity,Rio,Colossal,The Intern,One Day,Havoc
110019,Ants,Hill,Worker,Tunnel,Crumbs,Insects,Fire,Carpenter,Bullet,Weaver,Harvester,Army
110020,Apple,iPhone,iPad,MacBook,iCloud,Safari,Watch,Store,AirPods
110021,Apple Computers,PowerBook,Mac Studio,Mac Pro,Mac mini,Lisa,iMac
110022,Apple Pie,Dessert,Fruit,Crust,Cinnamon,Baked,Tradition,Sliced,Lattice,Shortcrust,Streusel,Granny Smith
110023,Arizona Tea,Green Tea,Mucho Mango,Ginseng,Sweet Tea,Fruit Punch,Rx Energy
110024,Athletic Apparel,Jersey,Helmet,Singlet,Cleats,Trunks
110025,Athletic Competition Areas,Track,Pool,Ring,Pitch
110026,Athletics,Track and field,Decathlon,Heptathlon,Steeplechase,Shot put,Discus throw,Javelin,Hurdles,Triathlon
110027,Atlanta,Braves,Falcons,Hawks,Hartsfield,Marta,Centennial
110028,Automobiles,transmission,chassis,fuel tank,dashboard,headlights,radiator,ignition,exhaust,alternator,Sedan,Coupe,Wagon,Roadster,Hatchback,Convertible
110029,Autumn,Migration,Orchard,Harvest,Foliage,Russet,Ochre
110030,Avatar,Pandora,Na'vi,Eywa,Unobtainium,Banshee,Toruk
110031,Babies,Diaper,Pacifier,Rattles,Stroller,Onesie,Crib
110032,Back to the Future,Delorean,McFly,Hoverboard,Almanac,Flux,Marty
110033,Bald Eagle,National bird,Symbol,Raptor,Nest,Talons,Predator,United States,Eyrie,Haliaeetus
110034,Band,quartet,trio,members,lead singer,Queen,Nirvana,Oasis,Beatles
110035,Barack Obama,Hawaii,Democrat,Michelle Obama,44th President,Healthcare,Hope,Senator
110036,Barbecue,Grilling,Smoked,Ribs,Sauce,Outdoor,Cookout,Charcoal,Brisket,Mesquite,Dry Rub,Pitmaster,Hickory
110037,BASKETBALL FOULS,CHARGING,BLOCKING,TECHNICAL,FLAGRANT
110038,Battery Composition,Anode,Cathode,Lithium,Alkaline,Graphite,Electrolyte
110039,Beans,Kidney,Garbanzo,Pinto,Lima,Soy,Navy,Lentil,Fava
110040,Bears,Grizzly,Polar,Panda,Kodiak,Sloth
110041,BEAT,groove,pulse,metronome,measure,cadence,TEMPO,RHYTHM,ACCENT
110042,Bee Genera,Apis,Bombus,Melipona,Osmia
110043,Beverages,Coffee,Tea,Juice,Soda,Milk,Water,Cider,Cocoa
110044,Biological Kingdoms,Bacteria,Archaea,Eukaryote,Fungi,Protist,Animalia
110045,Biological Pollinators,Bees,Moths,Beetles,Butterflies,Bats,Birds
110046,Birds,Talon,Plumage,Aviary,Ornithology,Passerine,Fledgling,Albatross,Kestrel,Starling,Falcon,Osprey,Puffin
110047,Blockbuster,Box Office,Franchise,Marketing,Premiere,Special Effects,Sequel,Opening Weekend,Profit,Star Wars,Avengers,Batman,Spider-Man,Shrek,Inception,Iron Man
110048,BMW,Luxury,Bavarian,X5,M3,Series 3,Series 5,Roadster,Coupe,iX,Alpina,Isetta,Bavaria,2002
110049,BODYWEIGHT EXERCISES,SQUAT,LUNGE,PLANK,PUSHUP
110050,Boss Fight,Phase,Weak Spot,Enrage,Arena
110051,Branches,Twigs,Bough,Limb,Perch,Sprouting,Sap,Nesting,Alternate,Opposite,Whorled,Spiral
110052,Breeze,gentle,soft,light air,zephyr,cooling,rustling
110053,Buckingham Palace,Monarchy,Royal Family,Changing of the Guard,Staterooms,The Balcony,Victoria Memorial,Official Residence,Balcony,Guards,Investiture,Courtyard
110054,Butterflies,Monarch,Wings,Caterpillar,Flutter,Larva,Sulphur,Copper,Fritillary
110055,California,Hollywood,Yosemite,Sequoia,Alcatraz,Redwoods,Coachella
110056,Canada,Toronto,Montreal,Ottawa,Quebec,Loonie,Toonie
110057,Canned Beverages,SELTZER,KOMBUCHA,ESPRESSO,COCKTAIL
110058,Captain,leadership,authority,representative,vanguard,liaison,figurehead
110059,Caribbean Sea,Islands,Turquoise Water,Cruise,Antilles,Jamaica,Cayman,Tortuga,Grenada,Aruba,Curacao
110060,Cars,engine,wheel,door,tire,seat,hood,mirror,Brake,Bumper
110061,Cartoon,drawing,funny,kids,animal,story,Simpsons,Bluey,Garfield,Peanuts,Rugrats,Flintstones
110062,Cary Grant Films,Notorious,Charade,Suspicion,Gunga Din,Indiscreet
110063,Celebration,festivity,joy,gala,event,jubilee,anniversary,cheer,FESTIVAL,FIESTA,REVELRY
110064,Cell Components,Membrane,Ribosome,Vacuole,Organelle,Cytoplasm
110065,Ceremony,ritual,rite,formal,proceedings,wedding,graduation,vows,inauguration,procession,BAPTISM,ORDINATION,CORONATION
110066,Charles Darwin,Evolution,Natural Selection,Adaptation,Beagle,Galapagos,Species,Biology,Survival
110067,Charlie Chaplin,The Tramp,Silent Film,Slapstick,Bowler Hat,Mustache,City Lights,Modern Times,Great Dictator,Cane,Limelight,Kid
110068,Chat,Thread,Reply,Typing,Sticker
110069,Cheer,Shout,Chant,Applaud,Pom-poms,Megaphone,Spirit,Support
110070,Chest,HOPE,STEAMER,TREASURE,TOOL
110071,Children's Movies,Cars,Moana,Dumbo,Coco
110072,Children’s Programming,Arthur,Blippi,Caillou,Octonauts
110073,CHILI INGREDIENTS,CUMIN,BEANS,ONION,GARLIC
110074,Chris Evans Films,SUNSHINE,SNOWPIERCER,GIFTED,PUSH,PAIN & GAIN
110075,Christmas,tree,gift,Santa,reindeer,bells,star,snow,lights,Mistletoe,Stocking,Nutcracker,Eggnog
110076,Circus,TIGHTROPE,ACROBAT,CALLIOPE,TRAPEZE
110077,CLAWS,TALON,PINCER,DEWCLAW,CHELA,UNGUIS
110078,Cleanliness,Polish,Scrub,Sweep,Mop,Dust
110079,Cleopatra,Ancient Egypt,Mark Antony,Queen of the Nile,Alexandria,Ptolemaic Dynasty,Pharaoh,Julius Caesar,Ptolemy,Antony,Asp,Actium
110080,Clint Eastwood Films,Unforgiven,Gran Torino,Rawhide,Pale Rider,Dirty Harry
110081,Clouds,Cumulus,Sky,Rain,Fluffy,Overcast
110082,CLOUD GENERA,CIRRUS,STRATUS,CUMULUS,NIMBUS
110083,Coach,mentor,manager,playbook,instructor
110084,Coca Cola,Soda,Soft drink,Fizzy,Sugar,Red label,Refreshment,Vending machine,Carbonated,Sprite,Fanta,Dasani,Fresca,Tab,Mello Yello
110085,COASTAL LANDFORMS,COVE,ISTHMUS,PENINSULA,STRAIT,ISLAND
110086,Coins,PENNY,NICKEL,DIME,QUARTER,FLORIN,SOVEREIGN
110087,Colosseum,Rome,Italy,Gladiators,Amphitheater,Ancient Rome,Flavian Dynasty,Arena,Stone Arches
110088,Combat Mechanics,Critical,Lifesteal,Hitbox,Splash
110089,Comedies,Superbad,Airplane,The Mask,Borat,Caddyshack
110090,Comfort Food,Lasagna,Brownie,Risotto,Poutine,Gumbo,Ramen,Pierogi
110091,Companies,Corporation,Enterprise,Startup,Firm,Conglomerate,Subsidiary,Multinational,Business
110093,Controller Components,Joystick,D-pad,Thumbstick,Touchpad,Rumble
110094,Converse Shoe Features,Canvas,Pinstripe,Eyelet,Laces,Outsole
110095,Cookout,Grill,Hamburger,Hot Dog,Spatula,Backyard,Barbecue Sauce,Corn on the Cob,Charcoal,Coleslaw,Apron
110096,Costco,Membership,Bulk buy,Kirkland Signature,Food court,Rotisserie chicken,Gas station
110097,Countries,Norway,Brazil,Japan,Egypt,Canada,France,Mexico
110098,Country,Nashville,banjo,fiddle,twang,honky-tonk,bluegrass,ballad,acoustic,Garth,Dolly,Reba,Willie
110099,Court,Hardwood,Baseline,Sideline,Key,Perimeter,Venue,Backcourt,Floor
110100,Cozy Breakfast Cereals,CHEERIOS,CHEX,KIX,LIFE
110101,Crafting,Recipe,Blueprint,Workbench,Material
110102,Crowd,spectators,gathering,assembly,horde,mass,public,fans
110103,Curiosity,Spirit,Opportunity,Perseverance,Sojourner
110104,Customer,Demographics,Retention,Acquisition,Segmentation,Touchpoints,Satisfaction,Loyalty,Advocate
110105,Daisies,Yellow center,Meadow,Wildflower,Daisy chain,White
110106,Daisy Family,Aster,Gerbera,Marguerite,Oxeye
110107,Data,Analytics,Metadata,Encryption,Governance,Aggregation,Warehouse,Compression,Redundancy
110108,Dendrological Components,Branches,Trunk,Roots,Bark,Canopy,Leaves
110109,Denzel Washington Movies,Flight,Fences,Malcolm X,Training Day
110110,Desert,Arid,Dunes,Cactus,Mirage,Oasis,Sandstorm,Succulent,Scarcity,Heat,Lizard
110111,Difficulty Tiers,Veteran,Heroic,Insane,Master
110112,Digital Clarity,Pixel,Resolution,Bitrate,Sensor,Codec,Lumen
110113,Digital Distribution,Steam,Uplay,Itch.io,Battle.net
110114,Disney,Mickey Mouse,Theme Parks,Princesses,Magic Kingdom,Pixar,Marvel,Star Wars
110115,DJ,turntablist,crossfader,beatmatching,sampling,mixer,transition,residency,Tiesto,Avicii,Diplo,Skrillex
110116,Dolphins,porpoise,echolocation,fin,playful
110117,Donald Trump,Republican,Businessman,45th President,Apprentice,Real Estate,New York,Mar-a-Lago,Florida,Ivanka,Melania,Barron
110118,Donkey Kong Characters,Donkey Kong,Diddy Kong,Dixie Kong,Cranky Kong,Funky Kong,Candy Kong
110119,Dramas,Babel,Boyhood,Argo,Moonlight,Birdman
110120,Drums,Snare,Cymbal,Bass Drum,Hi-hat,Sticks,Pedals,Tom-tom,Percussion,Throne,Kick
110121,Earth,dirt,rock,ground,mud,sand,planet,soil,land
110122,East Asia,HONSHU,SEOUL,TOKYO,HOKKAIDO
110123,Easter,Bunny,Egg hunt,Resurrection,Spring,Chocolate,Basket,Lily,Sunday,Bonnet,Daffodil
110124,Edison,Phonograph,Kinetoscope,Lightbulb,Telegraph,Filament,Dynamo
110125,Egypt,Pharaoh,Papyrus,Anubis,Hieroglyph,Giza
110126,Eiffel Tower,Paris,France,Iron,Gustave Eiffel,Landmarks,Tourism,City of Light,Champ de Mars
110127,Electric Vehicles,Lithium-ion battery,Charging station,Regenerative braking,Zero emissions,Driving range,Electric motor,Taycan,Lucid,Leaf,Bolt,Polestar,Rivian
110128,Element,Helium,Argon,Radon,Xenon
110129,Elementary School,Recess,Crayon,Chalk,Eraser,Cubby
110130,Elizabeth Taylor Films,Giant,Ivanhoe,Rhapsody,Little Women
110131,Elon Musk,Tesla,SpaceX,Neuralink,Starlink,Mars
110132,Elvis Presley,King of Rock and Roll,Graceland,Blue Suede Shoes,Jailhouse Rock,Hound Dog,Memphis,Sun Records,Tupelo,Priscilla,Sun
110133,Employees,Staff,Workers,Colleagues,Personnel,Payroll,Hires,Manager,Director,Analyst,Intern,Trainee,Associate
110134,ENERGY,POTENTIAL,CHEMICAL,NUCLEAR,RADIANT
110135,Energy Drinks,Monster,Rockstar,Celsius,Bang,Nos,Reign
110136,England,THAMES,LONDON,WESSEX,CORNWALL
110137,Episode,Pilot,Finale,Installment,Segment,Scene,Plot,Chapter,Filler,Cliffhanger,Crossover,Flashback
110138,Facebook,Friends,Profile,Like Button,Wall,News Feed,Messenger,Groups,Timeline
110139,Family Films,Matilda,Paddington,Annie,Babe
110140,Family Gathering,reunion,dinner,relatives,parents,cousins,grandparents,bonding
110141,Famous Captains,Hook,Ahab,Nemo,Sparrow,Kirk,Picard
110142,Famous Dogs,Lassie,Snoopy,Toto,Balto,Clifford
110143,Famous Lakes,Superior,Baikal,Titicaca,Caspian,Victoria,Huron
110144,Fan Section,Crowd,Fans,Cheer,Mascot,Banner,Pom-poms
110145,Fans,Supporters,Bleachers,Applause,Followers,Rooters
110146,Farming,PLOW,COMBINE,ORCHARD,PASTURE,SICKLE
110147,Fast and Furious,Nitrous,Toretto,Skyline,Charger,Fast Five
110148,Fast-Paced Films,Mad Max,Speed,Crank,Run Lola Run,John Wick,Taken
110149,Father's Day,Father,Tie,Tools,June,BBQ,Fishing,Golf,Necktie,Hammock,Toolbox,Cufflinks
110150,FEATHERS,RACHIS,CALAMUS,BARB,QUILL,VANE
110151,Federal Holiday,Paid leave,Post office closed,Bank holiday,National observance,Government closure,Labor Day,Memorial Day,Veterans Day,Juneteenth,Christmas
110152,Field,Turf,Gridiron,Pitch,Diamond,Outfield,Surface,Grass
110153,Fighting Game,Tekken,SoulCalibur,Smash Bros,Darkstalkers
110154,Film,Cinematography,Editing,Screenplay,Producer,Montage,Celluloid,Narrative,Aspect Ratio
110155,Fins,Pectoral,Pelvic,Caudal,Stability,Propulsion,Maneuverability,Ray-finned,Adipose
110156,Fire Department,Hydrant,Pumper,Ladder,Firehouse,Siren,Axe
110157,Fireworks,sparkler,explosion,display,pyrotechnics,boom,color,night sky,roman candle
110158,Fish,Gills,Scales,School,Spawning,Aquatic,Freshwater,Saltwater,Dorsal,Sturgeon,Anchovy,Tilapia,Halibut,Grouper,Salmon
110159,FLOWER SPECIES,HYDRANGEA,MARIGOLD,PETUNIA,HIBISCUS
110160,Flowering Plant Species,Sunflowers,Roses,Daisies,Tulips,Orchids,Lilies
110161,Flowers,petal,nectar,pollen,bouquet,fragrance,blossom,stamen,pistil
110162,Foam,bubbles,froth,lather,whitecap,spume
110163,Fog,Mist,Haze,Smog,Visibility,Condensation,Dew point,Stratus,Vapor
110164,Ford,Mustang,F-150,Explorer,Escape,Bronco,Ranger,Fusion,Edge,Expedition,Focus
110165,Forest,Trees,Woods,Wildlife,Moss,Ferns,Pine,Oak,Trail
110166,Forest Biomes,Boreal,Tropical,Temperate,Deciduous
110167,Forrest Gump,Shrimp,Bench,Feather,Bubba,Jenny
110168,Fortnite Mechanics,Battle Bus,Chug Jug,Slurp Juice,V-Bucks
110169,Foul,infraction,violation,misconduct,offense,transgression,penalty,error
110170,Fourth of July,barbecue,sparklers,celebration,hot dogs,apple pie,summer,patriotism,concert,Fireworks,Grill
110171,Fresh Fruit Bowls,Cantaloupe,Honeydew,Pineapple,Papaya,Starfruit
110172,Friend List,Followers,Mutuals,Blocked,Contacts
110173,Frogs,Bullfrog,Tadpole,Spawn,Lily Pad,Pollywog
110174,Fruit Pulp,NECTAR,PUREE,COULIS,COMPOTE
110175,Fur,Mammal,Coat,Insulation,Grooming,Shedding,Pelt,Undercoat,Texture,Ermine,Sable,Mink,Beaver,Rabbit,Chinchilla
110176,Galileo Galilei,Astronomy,Telescope,Heliocentrism,Inquisition,Jupiter,Sunspots,Saturn,Pendulum,Ganymede,Callisto,Europa
110177,Game,Fun,Rules,Lose,Start,End
110178,Game Show,buzzer,prize,host,trivia,strategy,jackpot,scoreboard,Jeopardy,Password,Scrabble,Lingo
110179,Gardening,Trowel,Pruner,Mattock,Dibber,Spade,Hoe
110180,General Motors,Chevrolet,Cadillac,Buick,GMC,Corvette,Silverado,Tahoe,Hummer,Pontiac
110181,Geological Layers,Crust,Mantle,Core,Lithosphere
110182,GEOMETRIC POINTS,VERTEX,ORIGIN,FOCUS,LOCUS
110183,Geometric Solids,Cube,Sphere,Cylinder,Prism
110184,Germany,Berlin,Munich,Hamburg,Cologne,Rhine
110185,Giza Plateau Necropolis,Pyramids,Khufu,Khafre,Menkaure
110186,Global Deserts,Sahara,Gobi,Mojave,Atacama
110187,Goal,objective,mission,ambition,target,destination,purpose,intention,aim
110188,Golf,Putter,Fairway,Birdie,Eagle,Bogey
110189,Google,Search,Gmail,Chrome,Android,Maps,YouTube,Drive,Photos
110190,Grand Canyon,Arizona,Colorado River,South Rim,Rock Layers,Erosion,Hiking,Layer,Gorge,Havasu,Plateau,Rim
110191,Great Wall of China,Stone,Brick,Ming Dynasty,Border,Watchtower,History,Beijing
110192,Growth,Scalability,Expansion,Development,Prosperity,Augmentation,Progression,Hormone,Mindset,Factor,Spurt
110193,Guitar,fretboard,strings,amplifier,pick,bridge,tuning,chord,strumming,Fender,Gibson,Ibanez,Gretsch,Martin,Taylor
110194,Halloween,Pumpkin,Costume,Trick-or-treat,Ghost,Witch,Candy,Haunted House,October,Vampire,Skeleton
110195,Halo Universe Entities,Master Chief,Cortana,Arbiter,Warthog
110196,Handheld Game Systems,Game Boy,Game Gear,Vita,Nomad,Lynx,PSP
110197,Hardware Brands,Sony,Apple,Samsung,Nintendo
110198,HARDWARE STORES,HOME DEPOT,LOWES,ACE,MENARDS
110199,Harrison Ford Movies,Witness,Frantic,Fugitive,Sabrina,Blade Runner
110200,Harry Potter,Hogwarts,Quidditch,Gryffindor,Horcrux,Voldemort,Dobby
110201,Hearty Stews,Ratatouille,Goulash,Cassoulet,Chili,Burgoo,Cioppino,Feijoada
110202,Hide,Thief,Hitman,Dishonored,Metal Gear
110203,High School,Freshman,Sophomore,Junior,Senior,Yearbook,Locker,Diploma
110204,Hip Hop,breakdance,DJing,MCing,graffiti,beatboxing,urban culture,turntables,Outkast,Wu-Tang,Migos,Run-DMC
110205,Historic Walls,Great Wall,Western Wall,Berlin Wall,Maginot Line
110206,Holiday Weekend,vacation,getaway,three-day,travel,monday off,road trip
110207,Hollywood Sign,California,Los Angeles,Griffith Park,Mount Lee,Tinseltown,Letters,Hillside,Griffith,Landmark
110208,Home Depot,Hardware,Lumber,Garden center,Renovation,DIY,Construction,Paint
110209,Honda,Civic,Accord,CR-V,Odyssey,HR-V,Ridgeline,Fit,Insight,Passport,Prelude
110210,Hugh Jackman Films,LOGAN,THE PRESTIGE,CHAPPIE,PRISONERS,AUSTRALIA,REAL STEEL
110211,Hygiene Products,Mouthwash,Floss,Shampoo,Soap,Deodorant,Toothpaste
110212,Hyundai,Elantra,Sonata,Tucson,Santa Fe,Kona,Palisade,Ioniq,Genesis,Nexo,Veloster
110213,IBM,Mainframe,Cloud Computing,Artificial Intelligence,Watson,Quantum Computing,Data Center,Big Blue,ThinkPad,PowerPC,Fortran,Selectric
110214,Iced Lemon Water,Ice Cubes,Lemon Wedge,Mint Leaves,Pitcher,Carafe,Stirrer
110215,Iconic Video Games,Tetris,Pong,Doom,Portal,Skyrim
110216,Iconic World Towers,Eiffel Tower,Big Ben,CN Tower,Space Needle
110217,Independence,Autonomy,Sovereignty,Self-reliance,Revolution,Emancipation
110218,Independence Day,fireworks,parade,freedom,colonies,declaration,picnic,flag,liberty
110219,Indiana Jones,Fedora,Bullwhip,Snakes,Sallah,Marion,Ark
110220,Insects,exoskeleton,metamorphosis,abdomen,antennae,thorax,proboscis,chrysalis,entomology,Mantis,Beetle,Cicada,Hornet,Cricket
110221,Instagram,Filters,Stories,Reels,Hashtag,Feed,Direct Message
110222,Intel,Processor,Microchip,Semiconductor,Transistor,Motherboard,Pentium,Core i7,Silicon,Celeron,Xeon,Itanium,Quark
110223,Isaac Newton,Gravity,Calculus,Apple,Optics,Force,Principia
110224,Italy,Gondola,Florence,Tuscany,Vespa
110225,Jackie Chan Movies,Rush Hour,The Tuxedo,First Strike,Supercop,Police Story
110226,James Bond,Spectre,Aston Martin,GoldenEye,Oddjob
110227,James Stewart Films,Rope,Harvey,Rear Window,Shenandoah
110228,Jamie Lee Curtis Movies,The Fog,Prom Night,True Lies,Blue Steel,Virus
110229,Jeff Bezos,Blue Origin,E-commerce,Washington Post
110230,Jennifer Lawrence Movies,Serena,Joy,Mother!,Red Sparrow
110231,Jersey,Apparel,Polyester,Mesh,Kit,Number,Logo,Garment,Fabric
110232,Jet Li Movies,Hero,The One,War,Unleashed,Black Mask
110233,Joan of Arc,Hundred Years War,Siege of Orleans,Charles VII,Patron Saint,Martyr,Orleans,Voices,Dauphin,Domremy,Rouen,Stake
110234,Johnny Depp Films,PLATOON,CRY-BABY,ED WOOD,BLOW,RANGO,CHOCOLAT
110235,Joy,Joy-Con,Ode to Joy,Almond Joy,Joy Division
110236,Julius Caesar,Roman Republic,Crossing the Rubicon,Ides of March,Veni Vidi Vici,Dictator,Gaul,Brutus,Rubicon,Pharsalus
110237,Jungle,Tropical,Rainforest,Vine,Jaguar,Humid,Undergrowth,Exotic,Parrot,Amazon,Orchids
110238,Jungle Cinema,Jumanji,Tarzan,Congo,Predator
110239,Jurassic Park,InGen,Amber,Isla Nublar,Dino DNA,T-Rex
110240,Kanto Region Pokemon,Pikachu,Charizard,Bulbasaur,Mewtwo
110241,Katharine Hepburn Films,Stage Door,Alice Adams,Summertime,Adam's Rib
110242,Keanu Reeves Films,THE MATRIX,CONSTANTINE,POINT BREAK,SIBERIA
110243,Kia Models,Telluride,Sportage,Sorento,Stinger
110244,LAB GLASSWARE,BEAKER,TEST TUBE,PIPETTE,FLASK
110245,Labor Day,union,Pullman,Haymarket,Strike,Picnic,workforce,industry,tribute
110246,Ladybugs,Spots,Beetle,Aphid,Shell,Harlequin,Convergent,Transverse,Cardinal,Parenthesis
110247,Leading Actors,Her,The Master,Napoleon,Signs
110248,Leaf Margin Types,Entire,Serrate,Lobed,Dentate
110249,League,Conference,Division,Standings,Playoffs,Championship,Commissioner
110250,LEGAL PRACTICE,SUBPOENA,DISCOVERY,DEPOSITION,AFFIDAVIT
110251,Legend of Zelda Characters,Link,Ganon,Impa,Sheik,Epona,Darunia,Ruto
110252,LEGENDARY SWORDS,EXCALIBUR,KUSANAGI,DURANDAL,JOYEUSE
110253,Leonardo da Vinci,Art,Painting,Mona Lisa,Invention,Anatomy,Renaissance,Sketch,Last Supper,Vitruvian
110254,Lightning,flash,electricity,bolt,strike,discharge,spark
110255,LIZARD SPECIES,GECKO,IGUANA,SKINK,CHAMELEON,ANOLE
110256,Loss,Deficit,Attrition,Depreciation,Divestiture,Casualty,Liabilities,Shortfall,Leakage,Weight,Sleep,Memory,Hearing
110257,Lowes,Home improvement,Cabinetry,Interior design,Landscaping,Flooring,Remodeling,Sustainable living,HOME DEPOT,ACE,MENARDS
110258,LUNAR PHASES,FULL MOON,NEW MOON,CRESCENT,GIBBOUS
110259,Lyft,Ridesharing,Gig Economy,Pink,Shared Ride,Amp,Premier,Shared,Line,Lux
110260,Madonna,Queen of Pop,Like a Virgin,Material Girl,Vogue,Reinvention,Ray of Light,Music Videos,Blonde Ambition,Holiday,Borderline,Erotica
110261,Magnet Types,Neodymium,Alnico,Ferrite,Samarium
110262,Mahatma Gandhi,Satyagraha,Salt March,India,Independence,Spinning Wheel,Ahimsa,Bapu,Swaraj,Khadi,Ashram,Charkha
110263,Mainstream Blockbusters,Jaws,Titanic,Skyfall,Top Gun,Die Hard
110264,Major Planets,Jupiter,Saturn,Neptune,Mercury
110265,Marie Curie,Radioactivity,Radium,Polonium,X-rays,Nobel Prize,Chemistry,Laboratory
110266,Marilyn Monroe,Blonde Bombshell,Some Like It Hot,Norma Jeane,Hollywood,Seven Year Itch,Diamonds Are a Girl's Best Friend,Niagara,Misfits,DiMaggio,Miller
110267,Marine Environments,Ocean,Sea,Gulf,Lagoon
110268,Mark Twain,Huckleberry Finn,Tom Sawyer,Samuel Clemens,Mississippi River,Satire,Steamboat,Humorist,Pudd'nhead Wilson
110269,Mark Zuckerberg,Facebook,Meta,Algorithm,Threads
110270,Marshmallows,Miniature,Jet-Puffed,S'mores,Fluff,Peeps,Campfire
110271,Martin Luther King Jr,Dream,Peace,Equal Rights,Leader,Speech,Hero,Activist
110272,Martin Luther King Jr Day,Civil Rights,Nonviolence,I Have a Dream,Equality,Activism,Justice,Nobel Peace Prize,March,Nobel,Atlanta
110273,Mastercard,Payment,Financial,Debit,Interest rate,Balance,Annual fee
110274,Match,Player,Opponent,Referee,Umpire,Whistle,Tournament,Victory
110275,Matchstick Components,Sulfur,Splint,Phosphorus,Paraffin,Antimony
110276,Matt Damon Movies,Dogma,Syriana,Elysium,The Martian
110277,Meadow,Grassland,Wildflowers,Pasture,Grazing,Buttercup,Clover,Open field,Butterflies,Prairie,Herbs
110278,Megalithic Stone Sites,Stonehenge,Avebury,Carnac,Callanish
110279,MELODY,Sequence,Tune,Harmony,Phrasing,Interval,Counterpoint,Motif,SCALE,CONTOUR
110280,Memorial Day,remembrance,sacrifice,fallen,honor,cemeteries,wreath,commemoration,observance,Poppy,Salute,Bugle,Taps
110281,Messaging Apps,WhatsApp,Telegram,Signal,Discord
110282,Meta Ecosystem,Metaverse,Virtual Reality,Augmented Reality,Mark Zuckerberg,Oculus,Social Media,Horizon Worlds,Parent Company,Quest,Threads
110283,Meteorological Forces,Thunder,Lightning,Breeze,Gale
110284,Mexico,Cancun,Tulum,Oaxaca,Tequila,Sombrero,Mariachi,Yucatan
110285,Michael Caine Movies,Sleuth,Alfie,Zulu,Get Carter
110286,Michael Jackson,King of Pop,Moonwalk,Thriller,Bad,Neverland Ranch,Motown,Billie Jean,Beat It,Off the Wall
110287,Microsoft,Windows,Office,Azure,Xbox,Teams,Outlook,Word
110288,MILITARY TRAINING,BOOTCAMP,CADENCE,DRILL,MANEUVER
110289,Minecraft Universe Entities,Steve,Alex,Creeper,Enderman
110290,Minivans,Sliding doors,Stow 'n Go seating,Family vehicle,Third row,Captain's chairs,Soccer mom car
110291,Mixture,Colloid,Solution,Alloy,Aerosol,Slurry
110293,Molecule,Bond,Polymer,Isomer,Monomer
110294,Monolithic Wonders,Sphinx,Moai,Uluru,Devils Tower
110295,Morgan Freeman Films,SE7EN,GLORY,LUCY,INVICTUS,OBLIVION,WANTED
110296,Mother's Day,Mother,Brunch,May,Family,Appreciation,Breakfast in bed,Carnation,Locket,Orchid
110297,Motorcycles,Harley,Ducati,Triumph,Kawasaki,Suzuki,Sidecar
110298,Mount Everest,Himalayas,Nepal,Sherpa,Mountaineering,Highest Peak,Khumbu Icefall,Summit,Hillary,Norgay,Khumbu,Crevasse
110299,Mount Rushmore Presidents,Washington,Jefferson,Lincoln,Roosevelt
110300,Mount Rushmore,South Dakota,Black Hills,Gutzon Borglum,George Washington,Thomas Jefferson,Theodore Roosevelt,Abraham Lincoln,Keystone
110301,Mountains,Summit,Peak,Range,Altitude,Slope,Ridge,Everest,Rainier,Olympus,Fuji,Whitney,Matterhorn
110302,Movement,Velocity,Inertia,Momentum,Kinetic,Torque,Vector,Rotation,Oscillation
110303,Movies,Popcorn,Cinema,Screen,Director,Script,Trailer,Genre,Soundtrack,Psycho,Vertigo,Alien,Toy Story,Pulp Fiction,Scream
110304,Mughal Architecture,Taj Mahal,Red Fort,Fatehpur,Lodi Gardens
110305,Multiplex Cinemas,Projector,Concession,Speaker,Armrest,Screen,Popcorn
110306,MUSIC,Song,Rhythm,Singer,Radio,JAZZ,ROCK,BLUES,SALSA,DISCO,OPERA
110307,MUSICIAN,virtuoso,instrumentalist,songwriter,performer,soloist,arranger,PRODIGY,MAESTRO,COMPOSER
110308,Mystery Clues,Footprint,Fingerprint,Bloodstain,Handwriting
110309,Mystery Inc Members,Scooby,Shaggy,Fred,Velma,Daphne
110310,Named Stars,Betelgeuse,Rigel,Sirius,Antares,Polaris
110311,Napoleon Bonaparte,Battle of Waterloo,Napoleonic Code,French Empire,Exile,Saint,Waterloo,Elba,Corsica,Josephine,Austerlitz
110312,Nelson Mandela,Robben,Madiba,Apartheid,Rivonia,Xhosa
110313,Nestle,KitKat,Nespresso,Perrier,Maggi
110314,Nests,Rookery,Scrape,Drey,Vespiary,Formicary
110315,Network Latency,Latency,Jitter,Ping,Packet
110316,New Year's Day,Midnight,Champagne,Confetti,Countdown,Balloon
110317,Nickelodeon,Clarissa,Slime,Hey Arnold,CatDog
110318,Nikola Tesla,Wardenclyffe,Induction,Polyphase,Oscillator
110319,Nintendo,Mario,Zelda,Metroid,Pikmin,Kirby,Splatoon
110320,Ocean,Abyss,Trench,Current,Gyre
110321,Oceans,Atlantic,Pacific,Indian,Arctic,Southern
110322,Office Equipment,Stapler,Shredder,Scanner,Plotter,Printer,Copier
110323,Online Match,Ranked,Casual,Custom,Private
110324,Oprah Winfrey,Harpo,Beloved,Oxygen,O Magazine,Book Club
110325,Pablo Picasso,Guernica,Cubism,Malaga,Bullfight,Ceramics,Minotaur
110326,Pacific Ocean,Mariana,Polynesia,Melanesia,Micronesia,Atoll
110327,Parades,FLOAT,BATON,PROCESSION,CARNIVAL
110328,Party,Overcooked,Jackbox,Fall Guys,Among Us
110329,PAYMENT NETWORKS,MASTERCARD,VISA,AMEX,DISCOVER
110330,PayPal,Venmo,Braintree,Xoom,Honey,Zettle
110331,PC Hardware,Processor,GPU,Motherboard,RAM,Keyboard,Mouse
110332,Penguins,Emperor,Adelie,Gentoo,Chinstrap,Macaroni,Rockhopper
110333,Pepsi,Aquafina,Gatorade,Mirinda,Slice,Mug,Sierra Mist
110334,Performance Records,Leaderboard,Ranking,Record,Trophy
110335,Personal Care,Tweezers,Pumice,Loofah,Serum,Toner,Pomade
110336,Photosynthesis Requirements,Sunlight,Rainfall,Stomata,Chlorophyll
110337,Piano,Steinway,Yamaha,Kawai,Bechstein,Casio,Baldwin
110338,Pickup Trucks,Silverado,Tacoma,Tundra,Frontier,Gladiator
110339,Picnics,Hamper,Sandwich,Cooler,Thermos
110340,Pilgrims,Mayflower,Plymouth,Squanto,Standish,Bradford
110341,Pistol,Glock,Beretta,Luger,Desert Eagle
110342,Plants,Fern,Moss,Bamboo,Cactus,Succulent
110343,Player Piano Parts,Roll,Bellows,Spool,Vacuum,Tracker,Pneumatic
110344,PLAYLIST,SHUFFLE,QUEUE,STREAM,REPEAT,CROSSFADE
110345,Pop,Madonna,Adele,Rihanna,Cher
110346,Prince,Purple Rain,Kiss,1999,Controversy,Batdance
110347,Professional Arenas,Court,Field,Diamond,Gridiron,Octagon,Rink
110348,Profit,Earnings,Margin,Surplus,EBITDA,Dividend,Proceeds
110349,Protective Gloves,Nitrile,Latex,Kevlar,Gauntlet,Neoprene,Vinyl
110350,Quest,Journal,Objective,Waypoint,Reward
110351,Racing Game,BURNOUT,WIPEOUT,F-ZERO,OUTRUN,FLATOUT
110352,RAIN,MIST,DRIZZLE,SHOWER,DOWNPOUR
110353,Rap,Eminem,Drake,Tupac,Biggie
110354,Reading,Bookmark,Paperback,Hardcover,Chapter,Prologue,Epilogue
110355,Reality TV,Survivor,Catfish,Alone,Traitors
110356,Red White and Blue,Barber Pole,Union Jack,Tricolor,Bomb Pop
110357,Reese Witherspoon,Wild,Election,Mud,Sing,Hot Pursuit,Penelope,Fear
110358,Referee Equipment,Whistle,Lanyard,Stopwatch,Scorecard
110359,Retail,Walmart,Target,Costco,Kroger,Publix,Nordstrom
110360,Rivers,Danube,Mekong,Zambezi,Yangtze,Orinoco,Ganges
110361,Robert Downey Jr.,Chaplin,Zodiac,Due Date,Gothika,The Soloist,Wonder Boys
110362,Rock,Hendrix,Joplin,Bowie,Slash
110363,Rocky,Balboa,Apollo,Adrian,Mickey,Stairs
110364,RODENT SPECIES,RAT,HAMSTER,GERBIL,SQUIRREL
110365,Romantic Comedies,Clueless,Moonstruck,Emma,Amelie,Notting Hill
110366,Root Architectures,Taproot,Fibrous,Tuberous,Adventitious
110367,Rosa Parks,Montgomery,Alabama,NAACP,Seamstress
110368,Rose Classifications,Floribunda,Grandiflora,Damask,Noisette
110369,Ryan Gosling Films,DRIVE,LA LA LAND,FIRST MAN,THE GRAY MAN,THE NOTEBOOK
110370,SAFETY GEAR,GOGGLES,LAB COAT,GLOVES,FACE SHIELD
110371,Sahara Desert,Tuareg,Harmattan,Erg,Hamada,Ahaggar,Tibesti,Siwa
110372,Sales,Pipeline,Funnel,Lead,Deal,Closing,Quota
110373,Samsung,Galaxy,Bixby,Exynos,Tizen,Knox,QLED
110374,Samuel L. Jackson Films,SHAFT,DJANGO,GLASS,KINGSMAN
110375,SAND MINERALS,QUARTZ,GYPSUM,OLIVINE,GARNET,CORAL,SILICA
110376,Sandbox Video Games,Minecraft,Roblox,Fortnite,Terraria
110377,Sandra Bullock,Bird Box,The Net,Crash,The Heat,Infamous
110378,Save Point,Bonfire,Typewriter,Statue,Quicksave
110379,Scarlett Johansson,Black Widow,Match Point,Jojo Rabbit,Chef,The Island,Don Jon,Ghost World
110380,SEA SHELL TYPES,CONCH,COWRY,NAUTILUS,SCALLOP,ABALONE,WHELK
110381,Seals,Harp,Leopard,Monk,Ribbon,Hooded
110382,Sean Connery Films,Dr. No,Goldfinger,Marnie,The Rock,Outland,Zardoz
110383,Season,Premiere,Finale,Renewal,Hiatus,Midseason,Arc
110384,Seasons,Spring,Summer,Autumn,Winter
110385,Sedans,Altima,Malibu,Passat,Legacy
110386,Seed Anatomy,Embryo,Testa,Radicle,Plumule
110387,Sequel,Rocky II,Jaws II,Aliens,Gremlins 2
110388,Sesame Street,ELMO,GROVER,BERT,ERNIE
110389,Settings,Privacy,Audio,Display,Storage
110390,Sharks,Mako,Tiger,Hammerhead,Thresher,Goblin,Nurse
110391,SHORELINE ELEMENTS,WAVES,SHORE,SAND,SHELLS,BAY,FOAM,SPRAY
110392,SINGLE,REMIX,B-SIDE,ACETATE,MAXI,PROMO
110393,Skyborne Phenomena,Rainbow,Clouds,Aurora,Mirage
110394,Smoothies,Blender,Spinach,Yogurt,Blueberry,Spirulina,Flaxseed,Wheatgrass
110395,SNOW,GRAUPEL,POWDER,FIRN,SLUSH
110396,Soaps,Dial,Dove,Ivory,Lush,Zest,Safeguard,Camay
110397,Soccer Game,PES,KICK OFF,RED CARD,ACTUA
110398,Social Media Platforms,TWITTER,LINKEDIN,PINTEREST,REDDIT
110399,Social Networks,Facebook,Instagram,Snapchat,TikTok
110400,SODA COMPANIES,PEPSICO,COCA COLA,DR PEPPER,KEURIG`,ap=`id,name,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
70000,50S FASHION,SADDLE SHOES,POODLE SKIRTS,CARDIGAN SWEATERS,CAT EYE GLASSES,SCARF ON HAIR,BOBBY SOCKS,LEATHER JACKET,ROLLED JEANS
70001,50S CULTURE,DINER CULTURE,DRIVE-IN MOVIES,SOCK HOPS,JUKEBOXES,TUPPERWARE PARTIES,NUCLEAR FAMILY,SUBURBAN SPRAWL,THE DINERS CLUB CARD
70002,50S TOYS,HULA HOOP,SLINKY,MR POTATO HEAD,PLAY-DOH,SILLY PUTTY,MATCHBOX CARS,FRISBEE,BARBIE
70003,50S TV SHOWS,I LOVE LUCY,LEAVE IT TO BEAVER,THE HONEYMOONERS,GUNSMOKE,DRAGNET,PERRY MASON,FATHER KNOWS BEST,THE TWILIGHT ZONE
70004,ELVIS PRESLEY,HOUND DOG,JAILHOUSE ROCK,BLUE SUEDE SHOES,LOVE ME TENDER,HEARTBREAK HOTEL,DONT BE CRUEL,ALL SHOOK UP,KING OF ROCK
70005,50S ICONS,MARILYN MONROE,JAMES DEAN,AUDREY HEPBURN,ELIZABETH TAYLOR,GRACE KELLY,FRANK SINATRA,BUDDY HOLLY,CHUCK BERRY
70006,COLD WAR ERA,SPUTNIK I,BOMB SHELTER,DUCK AND COVER,IRON CURTAIN,SPACE RACE,RED SCARE,MCCARTHYISM,BERLIN WALL
70007,50S INNOVATIONS,THE POLIO VACCINE,TV DINNERS,CREDIT CARD,COLOR TV,SEAT BELTS,VELCRO,TRANSISTOR RADIO,MICROWAVE
70008,50S SLANG,COOL CAT,DADDY-O,CRUISIN FOR A BRUISIN,KNUCKLE SANDWICH,THREADS,SQUARE,BURN RUBBER,MADE IN THE SHADE
70009,GREASER STYLE,GREASE HAIR,BRYLCREEM,LEATHER JACKET,WHITE T-SHIRT,MOTORCYCLE,SWITCHBLADE,COMB,BOOTS
70010,DOO-WOP GROUPS,THE PLATTERS,THE DRIFTERS,THE COASTERS,THE TEENAGERS,THE ORIOLES,THE CLOVERS,THE FLAMINGOS,THE SKYLINERS
70011,BEAT GENERATION,JACK KEROUAC,ALLEN GINSBERG,WILLIAM BURROUGHS,ON THE ROAD,HOWL,POETRY,JAZZ,BOHEMIAN
70012,60S FASHION,MINISKIRTS,GO-GO BOOTS,TIE-DYE,BELL BOTTOMS,PAISLEY,MOD FASHION,TURTLENECK,PILLBOX HAT
70013,BRITISH INVASION,THE BEATLES,THE ROLLING STONES,THE WHO,THE KINKS,THE ANIMALS,THE DAVE CLARK FIVE,HERMANS HERMITS,THE YARDBIRDS
70014,HIPPIE CULTURE,WOODSTOCK,PEACE SIGNS,FLOWER POWER,HAIGHT-ASHBURY,COMMUNES,LONG HAIR,BEADS,SANDALS
70015,SPACE RACE,MOON LANDING,APOLLO 11,NEIL ARMSTRONG,BUZZ ALDRIN,NASA,KENNEDY SPACE CENTER,SATURN V,EAGLE
70016,60S ACTIVISM,CIVIL RIGHTS MOVEMENT,VIETNAM WAR PROTESTS,WOMENS RIGHTS,FREE SPEECH,MARCH ON WASHINGTON,MLK,SIT-INS,FREEDOM RIDERS
70017,MOTOWN,THE SUPREMES,THE TEMPTATIONS,STEVIE WONDER,MARVIN GAYE,THE FOUR TOPS,SMOKEY ROBINSON,JACKSON 5,ARETHA FRANKLIN
70018,SURF ROCK,BEACH BOYS,JAN AND DEAN,THE VENTURES,THE SURFARIS,WIPEOUT,SURFIN USA,GOOD VIBRATIONS,CALIFORNIA GIRLS
70019,60S TV,STAR TREK,THE FLINTSTONES,BATMAN,GET SMART,THE MONKEES,BEWITCHED,THE ADDAMS FAMILY,GILLIGANS ISLAND
70020,POP ART,ANDY WARHOL,ROY LICHTENSTEIN,SOUP CANS,MARILYN PRINTS,COMIC STRIPS,BOLD COLORS,SILKSCREEN,FACTORY
70021,60S DANCES,THE TWIST,THE MASHED POTATO,THE SWIM,THE PONY,THE JERK,THE MONKEY,THE WATUSI,THE HITCHHIKER
70022,FOLK REVIVAL,BOB DYLAN,JOAN BAEZ,PETER PAUL AND MARY,THE BYRDS,SIMON AND GARFUNKEL,JONI MITCHELL,BUFFALO SPRINGFIELD,THE BAND
70023,PSYCHEDELIC ROCK,JIMI HENDRIX,THE DOORS,JEFFERSON AIRPLANE,PINK FLOYD,GRATEFUL DEAD,CREAM,JANIS JOPLIN,IRON BUTTERFLY
70024,60S CARS,VOLKSWAGEN BEETLE,FORD MUSTANG,CHEVY CAMARO,PONTIAC GTO,DODGE CHARGER,PLYMOUTH BARRACUDA,CORVETTE STINGRAY,JAGUAR E-TYPE
70025,60S TOYS,GI JOE,EASY BAKE OVEN,TWISTER,ETCH A SKETCH,OPERATION,LITE BRITE,HOT WHEELS,BARREL OF MONKEYS
70026,70S FASHION,BELL-BOTTOMS,PLATFORM SHOES,LEISURE SUITS,JUMPSUITS,POLYESTER,WIDE COLLARS,MOOD RINGS,AFROS
70027,DISCO ERA,STUDIO 54,BEE GEES,DONNA SUMMER,DISCO BALL,SATURDAY NIGHT FEVER,VILLAGE PEOPLE,ABBA,CHIC
70028,70S ROCK,LED ZEPPELIN,QUEEN,AEROSMITH,ACDC,KISS,BLACK SABBATH,THE EAGLES,FLEETWOOD MAC
70029,PUNK ROCK,THE RAMONES,SEX PISTOLS,THE CLASH,BLONDIE,IGGY POP,THE STOOGES,DEAD KENNEDYS,PATTI SMITH
70030,70S MOVIES,STAR WARS,THE GODFATHER,JAWS,ROCKY,GREASE,TAXI DRIVER,ALIEN,APOCALYPSE NOW
70031,70S TV,THE BRADY BUNCH,ALL IN THE FAMILY,MASH,CHARLIES ANGELS,HAPPY DAYS,THE MUPPET SHOW,SESAME STREET,GOOD TIMES
70032,70S TOYS,PET ROCK,RUBIKS CUBE,STAR WARS FIGURES,SIMON,STRETCH ARMSTRONG,CONNECT FOUR,MAGNA DOODLE,SHRINKY DINKS
70033,70S TECH,APPLE II,ATARI 2600,VCR,WALKMAN,PONG,FLOPPY DISK,CALCULATOR WATCH,CB RADIO
70034,WATERGATE,NIXON,DEEP THROAT,TAPES,RESIGNATION,IMPEACHMENT,SCANDAL,WASHINGTON POST,WOODWARD AND BERNSTEIN
70035,70S SLANG,GROOVY,FAR OUT,DYNO-MITE,PSYCH,BOOGIE,CAN YOU DIG IT,RIGHT ON,KEEP ON TRUCKIN
70036,70S DECOR,SHAG CARPETING,LAVA LAMPS,MACRAME,AVOCADO GREEN,HARVEST GOLD,BEANBAG CHAIRS,WOOD PANELING,SUNBURST CLOCK
70037,80S MUSIC,MICHAEL JACKSON,MADONNA,PRINCE,WHITNEY HOUSTON,DURAN DURAN,BON JOVI,GUNS N ROSES,CYNDI LAUPER
70038,80S FASHION,LEG WARMERS,SHOULDER PADS,NEON COLORS,ACID WASH JEANS,PARACHUTE PANTS,SCRUNCHIES,SWATCHES,RAY-BANS
70039,80S MOVIES,THE BREAKFAST CLUB,ET,BACK TO THE FUTURE,GHOSTBUSTERS,FERRIS BUELLERS DAY OFF,TOP GUN,THE TERMINATOR,INDIANA JONES
70040,80S TV,THE GOLDEN GIRLS,MIAMI VICE,FULL HOUSE,THE COSBY SHOW,CHEERS,FAMILY TIES,SAVED BY THE BELL,ALF
70041,80S TOYS,CABBAGE PATCH KIDS,TRANSFORMERS,MY LITTLE PONY,CARE BEARS,KOOSH BALL,TEDDY RUXPIN,GAME BOY,NINTENDO NES
70042,HAIR METAL,MOTLEY CRUE,POISON,DEF LEPPARD,TWISTED SISTER,SKID ROW,WHITESNAKE,WARRANT,RATT
70043,NEW WAVE,DEPECHE MODE,THE CURE,TALKING HEADS,THE POLICE,TEARS FOR FEARS,NEW ORDER,THE B-52S,DEVO
70044,80S TECH,PERSONAL COMPUTER,CD PLAYER,CAMCORDER,FAX MACHINE,MOBILE PHONE,ANSWERING MACHINE,PAGER,CASSETTE TAPE
70045,80S CARTOONS,HE-MAN,THUNDERCATS,GI JOE,TEENAGE MUTANT NINJA TURTLES,DUCKTALES,INSPECTOR GADGET,THE SMURFS,JEM
70046,MTV ERA,MUSIC VIDEOS,VJS,MOONMAN,TRL,UNPLUGGED,HEADBANGERS BALL,REAL WORLD,VIDEO KILLED THE RADIO STAR
70047,80S SLANG,TOTALLY,RADICAL,GNARLY,GAG ME WITH A SPOON,LIKE,DUDE,BODACIOUS,TUBULAR
70048,JOHN HUGHES MOVIES,SIXTEEN CANDLES,PRETTY IN PINK,WEIRD SCIENCE,UNCLE BUCK,PLANES TRAINS AUTOMOBILES,HOME ALONE,VACATION
70049,90S GRUNGE,NIRVANA,PEARL JAM,SOUNDGARDEN,ALICE IN CHAINS,STONE TEMPLE PILOTS,FLANNEL SHIRTS,DOC MARTENS,SEATTLE
70050,90S POP,BRITNEY SPEARS,NSYNC,BACKSTREET BOYS,SPICE GIRLS,CHRISTINA AGUILERA,DESTINYS CHILD,TLC,HANSON
70051,90S HIP HOP,TUPAC,BIGGIE SMALLS,SNOOP DOGG,DR DRE,WU-TANG CLAN,NAUGHTY BY NATURE,SALT-N-PEPA,MC HAMMER
70052,90S FASHION,OVERALLS,CROP TOPS,CHOKERS,PLATFORM SNEAKERS,BAGGY JEANS,BUCKET HATS,BUTTERFLY CLIPS,SLAP BRACELETS
70053,90S TV,FRIENDS,SEINFELD,THE FRESH PRINCE,BUFFY,X-FILES,TWIN PEAKS,MY SO-CALLED LIFE,BOY MEETS WORLD
70054,90S CARTOONS,RUGRATS,SPONGEBOB,POKEMON,THE SIMPSONS,REN AND STIMPY,DEXTERS LAB,POWERPUFF GIRLS,ANIMANIACS
70055,90S TOYS,BEANIE BABIES,TAMAGOTCHI,FURBY,POGS,TICKLE ME ELMO,POLLY POCKET,BOP IT,SUPER SOAKER
70056,90S TECH,THE INTERNET,DIAL-UP,AOL,CHAT ROOMS,NAPSTER,DVD,PLAYSTATION,GOOGLE
70057,90S MOVIES,TITANIC,JURASSIC PARK,THE LION KING,FORREST GUMP,PULP FICTION,THE MATRIX,HOME ALONE,CLUELESS
70058,90S SNACKS,DUNKAROOS,FRUIT ROLL-UPS,GUSHERS,LUNCHABLES,SURGE,CLEAR PEPSI,BAGEL BITES,POP-TARTS
70059,2000S TECH,IPOD,FLIP PHONES,BLACKBERRY,MYSPACE,FACEBOOK,YOUTUBE,USB DRIVES,FLAT SCREEN TV
70060,2000S FASHION,LOW-RISE JEANS,TRUCKER HATS,VELOUR TRACKSUITS,UGG BOOTS,VON DUTCH,LIVESTRONG BRACELETS,CROCS,SKINNY SCARVES
70061,2000S POP PUNK,BLINK-182,GREEN DAY,SUM 41,AVRIL LAVIGNE,GOOD CHARLOTTE,FALL OUT BOY,PARAMORE,SIMPLE PLAN
70062,2000S HIP HOP,EMINEM,JAY-Z,KANYE WEST,50 CENT,OUTKAST,LIL WAYNE,MISSY ELLIOTT,NELLEY
70063,2000S MOVIES,HARRY POTTER,LORD OF THE RINGS,SHREK,MEAN GIRLS,SPIDER-MAN,PIRATES OF THE CARIBBEAN,AVATAR,THE DARK KNIGHT
70064,REALITY TV BOOM,SURVIVOR,AMERICAN IDOL,THE BACHELOR,BIG BROTHER,JERSEY SHORE,KEEPING UP WITH THE KARDASHIANS,THE SIMPLE LIFE,FEAR FACTOR
70065,2000S TOYS,BEYBLADE,BRATZ DOLLS,WEBKINZ,XBOX 360,WII,RAZOR SCOOTERS,SILLY BANDZ,ZHUZHU PETS
70066,SOCIAL MEDIA RISE,FRIENDSTER,MYSPACE,FACEBOOK,TWITTER,LINKEDIN,FLICKR,TUMBLR,REDDIT
70067,2010S TECH,IPAD,INSTAGRAM,SNAPCHAT,UBER,AIRBNB,SIRI,ALEXA,SMARTWATCH,VR HEADSETS
70068,2010S TRENDS,ICE BUCKET CHALLENGE,HARLEM SHAKE,PLANKING,FIDGET SPINNERS,POKEMON GO,FLOSSING,BOTTLE FLIP,MANNEQUIN CHALLENGE
70069,STREAMING ERA,NETFLIX,HULU,SPOTIFY,AMAZON PRIME,DISNEY PLUS,BINGE WATCHING,PODCASTS,TWITCH
70070,MCU MOVIES,IRON MAN,THE AVENGERS,BLACK PANTHER,GUARDIANS OF THE GALAXY,CAPTAIN AMERICA,THOR,DOCTOR STRANGE,ANT-MAN
70071,MODERN SLANG,SELFIE,YOLO,FOMO,BAE,GHOSTING,TEA,SALTY,LIT,SAVAGE
70072,MEME CULTURE,GRUMPY CAT,DOGE,DISTRACTED BOYFRIEND,PEPE,WOJAK,SUCCESS KID,BAD LUCK BRIAN,KEX
70073,K-POP EXPLOSION,BTS,BLACKPINK,EXO,TWICE,PSY,RED VELVET,SEVENTEEN,NCT
70074,GAMING CRAZES,MINECRAFT,FORTNITE,AMONG US,ROBLOX,ANIMAL CROSSING,LEAGUE OF LEGENDS,CALL OF DUTY,OVERWATCH
70075,FOOD TRENDS,AVOCADO TOAST,KALE,QUINOA,PUMPKIN SPICE,ACAI BOWLS,BUBBLE TEA,SRIRACHA,IMPOSSIBLE BURGER
70076,FAIRY TALES,CINDERELLA,LITTLE RED RIDING HOOD,HANSEL AND GRETEL,RAPUNZEL,SNOW WHITE,SLEEPING BEAUTY,RUMPELSTILTSKIN,JACK AND THE BEANSTALK
70077,AESOPS FABLES,THE TORTOISE AND THE HARE,THE BOY WHO CRIED WOLF,THE FOX AND THE GRAPES,THE LION AND THE MOUSE,THE ANT AND THE GRASSHOPPER,THE CROW AND THE PITCHER,THE DOG AND ITS REFLECTION
70078,GRIMM CHARACTERS,THE BIG BAD WOLF,THE WICKED WITCH,THE FROG PRINCE,THE EVIL STEPMOTHER,THE HUNTSMAN,THE SEVEN DWARFS,THE FAIRY GODMOTHER
70079,BIBLE FIGURES OT,NOAH,MOSES,ABRAHAM,ADAM,EVE,DAVID,GOLIATH,SAMSON,DELILAH,JONAH,SOLOMON
70080,BIBLE FIGURES NT,JESUS,MARY,JOSEPH,PETER,PAUL,JUDAS ISCARIOT,JOHN THE BAPTIST,PONTIUS PILATE,MARY MAGDALENE
70081,BIBLE STORIES,THE ARK,THE EXODUS,THE TEN COMMANDMENTS,THE LAST SUPPER,THE NATIVITY,THE RESURRECTION,DANIEL IN THE LIONS DEN,THE GOOD SAMARITAN
70082,ANCIENT WONDERS,GREAT PYRAMID OF GIZA,HANGING GARDENS,STATUE OF ZEUS,TEMPLE OF ARTEMIS,MAUSOLEUM AT HALICARNASSUS,COLOSSUS OF RHODES,LIGHTHOUSE OF ALEXANDRIA
70083,FAMOUS LANDMARKS,EIFFEL TOWER,STATUE OF LIBERTY,TAJ MAHAL,GREAT WALL OF CHINA,COLOSSEUM,BIG BEN,MACHU PICCHU,CHRIST THE REDEEMER
70084,GOTHIC ARCHITECTURE,NOTRE-DAME,POINTED ARCHES,FLYING BUTTRESSES,STAINED GLASS,RIBBED VAULTS,GARGOYLES,SPIRES,WESTMINSTER ABBEY
70085,MODERN ARCHITECTURE,EMPIRE STATE BUILDING,BURJ KHALIFA,SYDNEY OPERA HOUSE,GUGGENHEIM MUSEUM,THE SHARD,CN TOWER,SPACE NEEDLE,PETRONAS TOWERS
70086,ARCHITECTURAL STYLES,ART DECO,BAUHAUS,BRUTALISM,NEOCLASSICAL,BYZANTINE,RENAISSANCE,BAROQUE,VICTORIAN,MODERNISM
70087,FAMOUS ARCHITECTS,FRANK LLOYD WRIGHT,ZAHA HADID,LE CORBUSIER,GAUDI,MICHELANGELO,IM PEI,FRANK GEHRY,NORMAN FOSTER
70088,BUILDING PARTS,FOUNDATION,BEAM,COLUMN,FACADE,ROOF,ATRIUM,CORNICE,ARCH,BUTTRESS
70089,BRIDGES,BROOKLYN BRIDGE,GOLDEN GATE,TOWER BRIDGE,SYDNEY HARBOUR,RIVER KWAI,CHARLES BRIDGE,RIALTO,AKASHI KAIKYO
70090,ART MUSEUMS,THE LOUVRE,THE MET,MOMA,THE HERMITAGE,THE PRADO,THE UFFIZI,TATE MODERN,RIJKSMUSEUM
70091,FAMOUS PAINTINGS,MONA LISA,STARRY NIGHT,THE SCREAM,THE LAST SUPPER,GUERNICA,GIRL WITH A PEARL EARRING,THE BIRTH OF VENUS,AMERICAN GOTHIC
70092,SCULPTURES,DAVID,THE THINKER,VENUS DE MILO,THE PIETA,WINGED VICTORY,TERRACOTTA ARMY,MOAI,MOUNT RUSHMORE
70093,CLASSICAL COMPOSERS,BEETHOVEN,MOZART,BACH,CHOPIN,TCHAIKOVSKY,VIVALDI,BRAHMS,HANDEL,SCHUBERT
70094,OPERA TERMS,ARIA,SOPRANO,TENOR,BARITONE,OVERTURE,LIBRETTO,DIVA,ENCORE,VIBRATO
70095,JAZZ LEGENDS,LOUIS ARMSTRONG,MILES DAVIS,JOHN COLTRANE,DUKE ELLINGTON,ELLA FITZGERALD,BILLIE HOLIDAY,CHARLIE PARKER,DIZZY GILLESPIE
70096,DANCE STYLES,BALLET,TAP,JAZZ,SALSA,HIP HOP,TANGO,WALTZ,CONTEMPORARY,FLAMENCO
70097,THEATER TERMS,STAGE,CURTAIN CALL,MONOLOGUE,SOLILOQUY,PROPS,BACKSTAGE,UNDERSTUDY,PLAYBILL,BOX OFFICE
70098,MUSICALS,HAMILTON,WICKED,THE PHANTOM OF THE OPERA,LES MISERABLES,CATS,THE LION KING,CHICAGO,RENT
70099,LITERARY GENRES,MYSTERY,FANTASY,SCIENCE FICTION,ROMANCE,THRILLER,HORROR,BIOGRAPHY,HISTORICAL FICTION
70100,SHAKESPEARE PLAYS,ROMEO AND JULIET,HAMLET,MACBETH,OTHELLO,A MIDSUMMER NIGHTS DREAM,KING LEAR,THE TEMPEST,JULIUS CAESAR
70101,POETRY TERMS,RHYME,METER,STANZA,HAIKU,SONNET,ALLITERATION,METAPHOR,SIMILE,IMAGERY
70102,MYTHOLOGICAL BEASTS,DRAGON,UNICORN,PHOENIX,GRIFFIN,HYDRA,MINOTAUR,CENTAUR,PEGASUS,CHIMERA
70103,GREEK GODS,ZEUS,HERA,POSEIDON,HADES,ATHENA,APOLLO,ARTEMIS,ARES,APHRODITE
70104,NORSE GODS,ODIN,THOR,LOKI,FREYA,FRIGG,BALDER,TYR,HEIMDALL,HEL
70105,EGYPTIAN GODS,RA,OSIRIS,ISIS,HORUS,ANUBIS,THOTH,SETH,BASTET,HATHOR
70106,HARRY POTTER HOUSES,GRYFFINDOR,SLYTHERIN,RAVENCLAW,HUFFLEPUFF
70107,HARRY POTTER CHARACTERS,HARRY POTTER,RON WEASLEY,HERMIONE GRANGER,ALBUS DUMBLEDORE,SEVERUS SNAPE,DRACO MALFOY,RUBEUS HAGRID,SIRIUS BLACK
70108,LORD OF THE RINGS RACES,HOBBITS,ELVES,DWARVES,MEN,ORCS,WIZARDS,ENTS,GOBLINS
70109,STAR WARS PLANETS,TATOOINE,HOTH,ENDOR,NABOO,CORUSCANT,DAGOBAH,MUSTAFAR,JAKKU
70110,STAR WARS SHIPS,MILLENNIUM FALCON,X-WING,TIE FIGHTER,STAR DESTROYER,DEATH STAR,SLAVE I,RAZOR CREST
70111,MARVEL HEROES,IRON MAN,CAPTAIN AMERICA,THOR,HULK,BLACK WIDOW,SPIDER-MAN,BLACK PANTHER,DOCTOR STRANGE
70112,MARVEL VILLAINS,THANOS,LOKI,ULTRON,RED SKULL,MAGNETO,VENOM,GREEN GOBLIN,DOCTOR DOOM
70113,DC HEROES,SUPERMAN,BATMAN,WONDER WOMAN,THE FLASH,AQUAMAN,CYBORG,GREEN LANTERN,SHAZAM
70114,DC VILLAINS,THE JOKER,LEX LUTHOR,DARKSEID,CATWOMAN,THE PENGUIN,THE RIDDLER,BANE,HARLEY QUINN
70115,VIDEO GAME CONSOLES,NINTENDO SWITCH,PLAYSTATION,XBOX,SEGA GENESIS,ATARI,GAME BOY,DREAMCAST,SUPER NINTENDO
70116,MARIO CHARACTERS,MARIO,LUIGI,PEACH,BOWSER,YOSHI,TOAD,WARIO,WALUIGI,DONKEY KONG
70117,POKEMON TYPES,FIRE,WATER,GRASS,ELECTRIC,PSYCHIC,ROCK,GROUND,ICE,DRAGON,GHOST
70118,ZELDA ITEMS,MASTER SWORD,HYLIAN SHIELD,BOOMERANG,HOOKSHOT,BOW AND ARROW,BOMBS,OCARINA,TRIFORCE
70119,MINECRAFT BLOCKS,DIRT,STONE,WOOD,DIAMOND ORE,OBSIDIAN,SAND,GRAVEL,COBBLESTONE
70120,FORTNITE TERMS,BATTLE BUS,TILTED TOWERS,FLOSS,CHUG JUG,SCAR,BUILDING,SKINS,VICTORY ROYALE
70121,SOCIAL MEDIA APPS,INSTAGRAM,TIKTOK,SNAPCHAT,TWITTER,FACEBOOK,REDDIT,PINTEREST,LINKEDIN
70122,COMPUTER PARTS,CPU,GPU,RAM,MOTHERBOARD,HARD DRIVE,POWER SUPPLY,CASE,COOLING FAN
70123,CODING LANGUAGES,PYTHON,JAVASCRIPT,JAVA,C++,RUBY,SWIFT,PHP,HTML,CSS
70124,APPLE DEVICES,IPHONE,IPAD,MACBOOK,IMAC,APPLE WATCH,AIRPODS,APPLE TV,HOMEPOD
70125,GOOGLE SERVICES,SEARCH,GMAIL,MAPS,DRIVE,YOUTUBE,CHROME,ANDROID,PHOTOS
70126,SPACE BODIES,SUN,MOON,PLANET,STAR,ASTEROID,COMET,BLACK HOLE,NEBULA,GALAXY
70127,SOLAR SYSTEM,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN,URANUS,NEPTUNE
70128,CONSTELLATIONS,ORION,URSA MAJOR,CASSIOPEIA,SCORPIUS,LEO,GEMINI,TAURUS,PEGASUS
70129,US COINS,PENNY,NICKEL,DIME,QUARTER,HALF DOLLAR,DOLLAR COIN
70130,US BILLS,ONE,TWO,FIVE,TEN,TWENTY,FIFTY,HUNDRED
70131,BOARD GAMES,MONOPOLY,SCRABBLE,CLUE,RISK,SORRY,LIFE,CANDY LAND,CHUTES AND LADDERS
70132,CARD GAMES,POKER,BLACKJACK,SOLITAIRE,GO FISH,WAR,CRAZY EIGHTS,OLD MAID,RUMMY
70133,CHESS PIECES,KING,QUEEN,ROOK,BISHOP,KNIGHT,PAWN
70134,CASINO GAMES,SLOTS,ROULETTE,CRAPS,BACCARAT,KENO,BINGO,POKER
70135,BOWLING TERMS,STRIKE,SPARE,GUTTER,SPLIT,FRAME,PIN,LANE,TURKEY
70136,GOLF TERMS,BIRDIE,EAGLE,BOGEY,PAR,HOLE IN ONE,DRIVER,PUTTER,FAIRWAY,BUNKER
70137,TENNIS TERMS,LOVE,DEUCE,ACE,FAULT,SERVE,VOLLEY,RALLY,MATCH POINT
70138,BASEBALL POSITIONS,PITCHER,CATCHER,FIRST BASE,SHORTSTOP,OUTFIELD,UMPIRE,BATTER
70139,FOOTBALL POSITIONS,QUARTERBACK,RUNNING BACK,RECEIVER,LINEBACKER,KICKER,TACKLE,CENTER
70140,BASKETBALL POSITIONS,POINT GUARD,SHOOTING GUARD,FORWARD,CENTER,COACH,REFEREE
70141,SOCCER POSITIONS,GOALKEEPER,DEFENDER,MIDFIELDER,STRIKER,FORWARD,WINGER
70142,HOCKEY POSITIONS,GOALIE,CENTER,WINGER,DEFENSEMAN,CAPTAIN
70143,OLYMPIC SUMMER SPORTS,SWIMMING,GYMNASTICS,TRACK AND FIELD,VOLLEYBALL,BASKETBALL,SOCCER,TENNIS,BOXING
70144,OLYMPIC WINTER SPORTS,SKIING,SNOWBOARDING,ICE SKATING,HOCKEY,CURLING,BOBSLED,LUGE
70145,MARTIAL ARTS,KARATE,JUDO,TAEKWONDO,KUNG FU,JIU-JITSU,BOXING,MUAY THAI,WRESTLING
70146,YOGA POSES,DOWNWARD DOG,TREE,WARRIOR,COBRA,CHILD'S POSE,LOTUS,PLANK,BRIDGE
70147,GYM EQUIPMENT,TREADMILL,DUMBBELL,BARBELL,BENCH PRESS,ELLIPTICAL,ROWING MACHINE,KETTLEBELL
70148,COFFEE DRINKS,ESPRESSO,LATTE,CAPPUCCINO,MOCHA,AMERICANO,COLD BREW,MACCHIATO,FRAPPUCCINO
70149,TEA TYPES,GREEN,BLACK,HERBAL,CHAI,EARL GREY,MATCHA,OOLONG,CHAMOMILE
70150,SODA BRANDS,COCA-COLA,PEPSI,SPRITE,DR PEPPER,MOUNTAIN DEW,FANTA,GINGER ALE,ROOT BEER
70151,JUICE TYPES,ORANGE,APPLE,GRAPE,CRANBERRY,PINEAPPLE,TOMATO,GRAPEFRUIT,LEMONADE
70152,ALCOHOL TYPES,BEER,WINE,WHISKEY,VODKA,RUM,GIN,TEQUILA,CHAMPAGNE
70153,PASTA SHAPES,SPAGHETTI,PENNE,MACARONI,LASAGNA,RAVIOLI,LINGUINE,FETTUCCINE,BOW TIE
70154,PIZZA TOPPINGS,PEPPERONI,MUSHROOMS,SAUSAGE,ONIONS,PEPPERS,BACON,OLIVES,PINEAPPLE
70155,SUSHI TYPES,NIGIRI,SASHIMI,MAKI,CALIFORNIA ROLL,SPICY TUNA,DRAGON ROLL,TEMPURA
70156,MEXICAN FOOD,TACOS,BURRITOS,ENCHILADAS,QUESADILLAS,GUACAMOLE,SALSA,NACHOS,FAJITAS
70157,ITALIAN FOOD,PIZZA,PASTA,RISOTTO,LASAGNA,GELATO,TIRAMISU,CANOLI,PESTO
70158,CHINESE FOOD,FRIED RICE,CHOW MEIN,DUMPLINGS,SPRING ROLLS,KUNG PAO CHICKEN,WONTON SOUP,PEKING DUCK
70159,INDIAN FOOD,CURRY,NAAN,SAMOSA,TANDOORI CHICKEN,TIKKA MASALA,BIRYANI,CHUTNEY
70160,DESSERTS,CAKE,PIE,COOKIES,ICE CREAM,BROWNIES,PUDDING,CHEESECAKE,DONUTS
70161,FRUITS,APPLE,BANANA,ORANGE,GRAPE,STRAWBERRY,BLUEBERRY,WATERMELON,PINEAPPLE
70162,VEGETABLES,CARROT,BROCCOLI,POTATO,CORN,SPINACH,ONION,TOMATO,PEPPER
70163,BERRIES,STRAWBERRY,RASPBERRY,BLUEBERRY,BLACKBERRY,CRANBERRY,GOOSEBERRY
70164,NUTS,ALMOND,PEANUT,CASHEW,WALNUT,PISTACHIO,PECAN,HAZELNUT
70165,HERBS,BASIL,OREGANO,THYME,ROSEMARY,MINT,PARSLEY,CILANTRO,DILL
70166,SPICES,CINNAMON,PEPPER,SALT,CUMIN,PAPRIKA,GINGER,NUTMEG,TURMERIC
70167,DAIRY PRODUCTS,MILK,CHEESE,YOGURT,BUTTER,CREAM,ICE CREAM,SOUR CREAM
70168,MEAT CUTS,STEAK,RIBS,CHOPS,GROUND BEEF,BACON,HAM,ROAST,BRISKET
70169,POULTRY,CHICKEN,TURKEY,DUCK,GOOSE,QUAIL,PHEASANT
70170,SEAFOOD,SHRIMP,CRAB,LOBSTER,SALMON,TUNA,CLAMS,OYSTERS,SQUID
70171,BREAD TYPES,WHITE,WHEAT,SOURDOUGH,RYE,BAGUETTE,CIABATTA,BAGEL,CROISSANT
70172,BREAKFAST ITEMS,EGGS,TOAST,PANCAKES,WAFFLES,CEREAL,OATMEAL,BACON,SAUSAGE
70173,CONDIMENTS,KETCHUP,MUSTARD,MAYO,RELISH,BBQ SAUCE,SOY SAUCE,RANCH,HOT SAUCE
70174,COOKING METHODS,BAKE,FRY,BOIL,GRILL,ROAST,STEAM,SAUTE,POACH
70175,KITCHEN APPLIANCES,OVEN,STOVE,FRIDGE,MICROWAVE,TOASTER,BLENDER,DISHWASHER,MIXER
70176,KITCHEN UTENSILS,SPOON,FORK,KNIFE,SPATULA,WHISK,LADLE,TONGS,PEELER
70177,FURNITURE,SOFA,CHAIR,TABLE,BED,DRESSER,DESK,BOOKSHELF,CABINET
70178,ROOMS,KITCHEN,LIVING ROOM,BEDROOM,BATHROOM,DINING ROOM,GARAGE,ATTIC,BASEMENT
70179,BEDDING,SHEETS,PILLOW,BLANKET,COMFORTER,MATTRESS,DUVET,QUILT
70180,BATHROOM ITEMS,TOILET,SINK,SHOWER,TUB,TOWEL,SOAP,TOOTHBRUSH,MIRROR
70181,CLOTHING TOPS,SHIRT,SWEATER,JACKET,COAT,HOODIE,TANK TOP,BLOUSE,VEST
70182,CLOTHING BOTTOMS,PANTS,SHORTS,JEANS,SKIRT,LEGGINGS,SWEATPANTS,TROUSERS
70183,FOOTWEAR,SHOES,SNEAKERS,BOOTS,SANDALS,HEELS,SLIPPERS,SOCKS
70184,ACCESSORIES,HAT,SCARF,GLOVES,BELT,TIE,WATCH,GLASSES,JEWELRY
70185,JEWELRY,RING,NECKLACE,EARRING,BRACELET,WATCH,BROOCH,PENDANT
70186,FABRICS,COTTON,WOOL,SILK,DENIM,LEATHER,POLYESTER,NYLON,VELVET
70187,PATTERNS,STRIPES,POLKA DOTS,PLAID,FLORAL,CHECKERED,ANIMAL PRINT,PAISLEY
70188,COLORS,RED,BLUE,GREEN,YELLOW,ORANGE,PURPLE,PINK,BLACK,WHITE
70189,SHAPES,CIRCLE,SQUARE,TRIANGLE,RECTANGLE,OVAL,STAR,HEART,DIAMOND
70190,MATH TERMS,ADD,SUBTRACT,MULTIPLY,DIVIDE,EQUALS,FRACTION,DECIMAL,PERCENT
70191,SCIENCE FIELDS,BIOLOGY,CHEMISTRY,PHYSICS,ASTRONOMY,GEOLOGY,BOTANY,ZOOLOGY
70192,SCHOOL SUBJECTS,MATH,SCIENCE,ENGLISH,HISTORY,ART,MUSIC,GYM,GEOGRAPHY
70193,SCHOOL SUPPLIES,PENCIL,PEN,PAPER,NOTEBOOK,BINDER,RULER,ERASER,GLUE
70194,OFFICE SUPPLIES,STAPLER,TAPE,SCISSORS,CLIPS,FOLDERS,MARKERS,WHITEBOARD,ENVELOPES
70195,TRANSPORTATION,CAR,BUS,TRAIN,PLANE,BOAT,BIKE,SUBWAY,TAXI
70196,AIRPORT TERMS,GATE,RUNWAY,PILOT,TICKET,LUGGAGE,SECURITY,PASSPORT,BOARDING
70197,TRAIN TERMS,TRACK,CONDUCTOR,STATION,PLATFORM,CABOOSE,TICKET,RAIL
70198,CAR PARTS,WHEEL,TIRE,ENGINE,BRAKE,STEERING WHEEL,SEAT,WINDOW,DOOR
70199,ROAD SIGNS,STOP,YIELD,SPEED LIMIT,ONE WAY,DO NOT ENTER,NO PARKING,CROSSWALK
70200,EMERGENCY VEHICLES,POLICE CAR,FIRE TRUCK,AMBULANCE,TOW TRUCK,HELICOPTER
70201,CITY BUILDINGS,SKYSCRAPER,LIBRARY,SCHOOL,HOSPITAL,BANK,MUSEUM,STORE,POST OFFICE
70202,FARM ITEMS,TRACTOR,BARN,SILO,FENCE,PLOW,HAY,CROP,LIVESTOCK
70203,ZOO ANIMALS,LION,TIGER,BEAR,ELEPHANT,GIRAFFE,ZEBRA,MONKEY,HIPPO
70204,PETS,DOG,CAT,FISH,BIRD,HAMSTER,RABBIT,TURTLE,SNAKE
70205,FOREST ANIMALS,DEER,FOX,SQUIRREL,RACCOON,OWL,BEAR,MOOSE,WOLF
70206,OCEAN LIFE,SHARK,WHALE,DOLPHIN,CRAB,OCTOPUS,JELLYFISH,SEAL,STARFISH
70207,INSECTS,ANT,BEE,FLY,MOSQUITO,BUTTERFLY,LADYBUG,SPIDER,BEETLE
70208,BIRDS,EAGLE,ROBIN,BLUE JAY,CARDINAL,OWL,HAWK,PENGUIN,DUCK
70209,FLOWERS,ROSE,TULIP,DAISY,SUNFLOWER,LILY,ORCHID,VIOLET,CARNATION
70210,TREES,OAK,PINE,MAPLE,PALM,WILLOW,BIRCH,REDWOOD,CHERRY
70211,WEATHER,SUN,RAIN,SNOW,WIND,CLOUD,STORM,FOG,HAIL
70212,SEASONS,SPRING,SUMMER,FALL,WINTER,AUTUMN
70213,MONTHS,JANUARY,FEBRUARY,MARCH,APRIL,MAY,JUNE,JULY,AUGUST
70214,DAYS,MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY,SUNDAY
70215,HOLIDAYS,CHRISTMAS,HALLOWEEN,THANKSGIVING,EASTER,NEW YEARS,VALENTINES,INDEPENDENCE DAY
70216,FAMILY,MOTHER,FATHER,SISTER,BROTHER,GRANDMA,GRANDPA,AUNT,UNCLE
70217,FEELINGS,HAPPY,SAD,ANGRY,SCARED,EXCITED,BORED,TIRED,SURPRISED
70218,SENSES,SIGHT,HEARING,TASTE,SMELL,TOUCH,BALANCE,PAIN
70219,BODY PARTS,HEAD,ARM,LEG,HAND,FOOT,EYE,NOSE,MOUTH
70220,INTERNAL ORGANS,HEART,LUNGS,STOMACH,LIVER,KIDNEY,BRAIN,INTESTINE,BLADDER
70221,BONE NAMES,SKULL,RIB,FEMUR,SPINE,PELVIS,TIBIA,FIBULA,RADIUS
70222,HEALTH CARE,DOCTOR,NURSE,HOSPITAL,MEDICINE,BANDAGE,SHOT,X-RAY,CAST
70223,DENTAL CARE,TOOTHBRUSH,TOOTHPASTE,FLOSS,DENTIST,CAVITY,BRACES,FILLINGS,CHECKUP
70224,HYGIENE,SOAP,SHAMPOO,DEODORANT,LOTION,TOWEL,SHOWER,BATH,COMB
70225,MAKEUP,LIPSTICK,MASCARA,BLUSH,EYELINER,FOUNDATION,POWDER,CONCEALER,EYESHADOW
70226,HAIR STYLES,BRAID,PONYTAIL,BUN,CURLS,STRAIGHT,BOB,PIXIE,FADE
70227,SKIN CARE,CLEANSER,MOISTURIZER,SERUM,TONER,SUNSCREEN,MASK,SCRUB,OIL
70228,SLEEP,BED,PILLOW,BLANKET,DREAM,NIGHT,NAP,SNORE,PAJAMAS
70229,HOBBIES,READING,PAINTING,GARDENING,COOKING,HIKING,FISHING,KNITTING,GAMING
70230,OUTDOOR ACTIVITIES,CAMPING,HIKING,BIKING,SWIMMING,RUNNING,PICNIC,FISHING,SKATING
70231,INDOOR ACTIVITIES,PUZZLES,BOARD GAMES,READING,MOVIES,COOKING,CRAFTS,VIDEO GAMES,YOGA
70232,CRAFTS,KNITTING,SEWING,PAINTING,DRAWING,ORIGAMI,SCRAPBOOKING,POTTERY,JEWELRY
70233,MUSIC GENRES,ROCK,POP,JAZZ,COUNTRY,RAP,CLASSICAL,BLUES,REGGAE
70234,MUSICAL INSTRUMENTS,GUITAR,PIANO,DRUMS,VIOLIN,FLUTE,TRUMPET,SAXOPHONE,CELLO
70235,ART SUPPLIES,PAINT,BRUSH,CANVAS,PENCIL,MARKER,CRAYON,CLAY,PAPER
70236,COLORS SHADES,CRIMSON,AZURE,EMERALD,INDIGO,OCHRE,MAGENTA,TEAL,MAROON
70237,LITERATURE GENRES,MYSTERY,FANTASY,SCI-FI,ROMANCE,THRILLER,HORROR,HISTORY,POETRY
70238,BOOK PARTS,COVER,PAGE,CHAPTER,TITLE,AUTHOR,SPINE,INDEX,PROLOGUE
70239,WRITING TOOLS,PEN,PENCIL,PAPER,NOTEBOOK,COMPUTER,TYPEWRITER,ERASER,HIGHLIGHTER
70240,LANGUAGE PARTS,NOUN,VERB,ADJECTIVE,ADVERB,PRONOUN,PREPOSITION,CONJUNCTION,INTERJECTION
70241,PUNCTUATION,PERIOD,COMMA,QUESTION,EXCLAMATION,COLON,SEMICOLON,DASH,QUOTE
70242,GEOMETRY SHAPES,SQUARE,CIRCLE,TRIANGLE,RECTANGLE,OVAL,DIAMOND,HEXAGON,PENTAGON
70243,MATH OPERATIONS,ADDITION,SUBTRACTION,MULTIPLICATION,DIVISION,ALGEBRA,CALCULUS,GEOMETRY,STATISTICS
70244,SCIENCE BRANCHES,BIOLOGY,CHEMISTRY,PHYSICS,ASTRONOMY,GEOLOGY,ECOLOGY,BOTANY,ZOOLOGY
70245,LAB EQUIPMENT,MICROSCOPE,BEAKER,TEST TUBE,FLASK,BURNER,SCALE,PIPETTE,GOGGLES
70246,WEATHER PHENOMENA,THUNDER,LIGHTNING,TORNADO,HURRICANE,RAINBOW,FOG,SNOW,HAIL
70247,NATURAL DISASTERS,EARTHQUAKE,VOLCANO,FLOOD,DROUGHT,TSUNAMI,WILDFIRE,BLIZZARD,CYCLONE
70248,LANDFORMS,MOUNTAIN,VALLEY,HILL,PLAIN,PLATEAU,ISLAND,PENINSULA,CANYON
70249,WATER BODIES,OCEAN,SEA,LAKE,RIVER,STREAM,POND,BAY,CREEK
70250,CONTINENTS,AFRICA,ASIA,EUROPE,NORTH AMERICA,SOUTH AMERICA,AUSTRALIA,ANTARCTICA
70251,COUNTRIES EUROPE,FRANCE,GERMANY,ITALY,SPAIN,UK,GREECE,SWEDEN,NORWAY
70252,COUNTRIES ASIA,CHINA,JAPAN,INDIA,KOREA,VIETNAM,THAILAND,INDONESIA,TURKEY
70253,COUNTRIES AMERICAS,USA,CANADA,MEXICO,BRAZIL,ARGENTINA,CHILE,PERU,COLOMBIA
70254,COUNTRIES AFRICA,EGYPT,NIGERIA,KENYA,SOUTH AFRICA,MOROCCO,ETHIOPIA,GHANA,TANZANIA
70255,US STATES,CALIFORNIA,TEXAS,NEW YORK,FLORIDA,ILLINOIS,OHIO,GEORGIA,MICHIGAN
70256,WORLD CAPITALS,LONDON,PARIS,TOKYO,ROME,BERLIN,MOSCOW,BEIJING,CAIRO
70257,US CITIES,NEW YORK,LOS ANGELES,CHICAGO,HOUSTON,PHOENIX,PHILADELPHIA,SAN ANTONIO,SAN DIEGO
70258,LANGUAGES,ENGLISH,SPANISH,MANDARIN,HINDI,ARABIC,FRENCH,RUSSIAN,PORTUGUESE
70259,RELIGIONS,CHRISTIANITY,ISLAM,HINDUISM,BUDDHISM,JUDAISM,SIKHISM,TAOISM,JAINISM
70260,HOLIDAYS US,THANKSGIVING,INDEPENDENCE DAY,MEMORIAL DAY,LABOR DAY,VETERANS DAY,HALLOWEEN,VALENTINES DAY,ST PATRICKS DAY
70261,FESTIVALS,DIWALI,CHINESE NEW YEAR,RAMADAN,HANUKKAH,CARNIVAL,OKTOBERFEST,MARDI GRAS,DAY OF THE DEAD
70262,JOBS,DOCTOR,TEACHER,POLICE,FIREFIGHTER,CHEF,ARTIST,ENGINEER,LAWYER
70263,OFFICE ROLES,MANAGER,ASSISTANT,CLERK,ANALYST,DIRECTOR,EXECUTIVE,INTERN,RECEPTIONIST
70264,CONSTRUCTION JOBS,BUILDER,PLUMBER,ELECTRICIAN,CARPENTER,WELDER,PAINTER,ROOFER,MASON
70265,SERVICE JOBS,WAITER,BARTENDER,CASHIER,DRIVER,CLEANER,BARBER,HAIRDRESSER,TAILOR
70266,ARTS JOBS,ACTOR,MUSICIAN,WRITER,DANCER,SINGER,PHOTOGRAPHER,DESIGNER,SCULPTOR
70267,SCIENCE JOBS,SCIENTIST,CHEMIST,BIOLOGIST,PHYSICIST,ASTRONOMER,GEOLOGIST,DOCTOR,RESEARCHER
70268,SPORTS JOBS,ATHLETE,COACH,REFEREE,TRAINER,SCOUT,MANAGER,AGENT,COMMENTATOR
70269,POLITICAL ROLES,PRESIDENT,SENATOR,GOVERNOR,MAYOR,JUDGE,DIPLOMAT,COUNCILOR,MINISTER
70270,ROYAL TITLES,KING,QUEEN,PRINCE,PRINCESS,DUKE,DUCHESS,EARL,BARON
70271,MILITARY RANKS,GENERAL,COLONEL,MAJOR,CAPTAIN,SERGEANT,LIEUTENANT,CORPORAL,PRIVATE
70272,FAMILY MEMBERS,MOTHER,FATHER,SISTER,BROTHER,GRANDMA,GRANDPA,AUNT,UNCLE
70273,EXTENDED FAMILY,COUSIN,NEPHEW,NIECE,IN-LAW,STEP-MOM,STEP-DAD,HALF-SISTER,HALF-BROTHER
70274,FRIENDSHIP TERMS,BUDDY,PAL,MATE,BESTIE,COMPANION,PARTNER,ALLY,FRIEND
70275,LOVE TERMS,DARLING,SWEETHEART,HONEY,BABY,DEAR,LOVE,BELOVED,ANGEL
70276,HOUSE ROOMS,KITCHEN,LIVING ROOM,BEDROOM,BATHROOM,DINING ROOM,GARAGE,ATTIC,BASEMENT
70277,FURNITURE,SOFA,CHAIR,TABLE,BED,DRESSER,DESK,BOOKSHELF,CABINET
70278,APPLIANCES,FRIDGE,STOVE,OVEN,MICROWAVE,DISHWASHER,WASHER,DRYER,TOASTER
70279,FLOORING,CARPET,TILE,WOOD,RUG,LAMINATE,VINYL,CONCRETE,MARBLE
70280,WALL DECOR,PAINTING,MIRROR,CLOCK,POSTER,PHOTO,SHELF,SCONCE,WALLPAPER
70281,LIGHTING,LAMP,CHANDELIER,BULB,SWITCH,CANDLE,FLASHLIGHT,SCONCE,NEON
70282,WINDOWS,GLASS,CURTAIN,BLINDS,SHUTTERS,SCREEN,FRAME,SILL,PANE
70283,DOORS,KNOB,LOCK,KEY,HINGE,FRAME,BELL,MAT,PEEPHOLE
70284,ROOFING,SHINGLE,TILE,METAL,SLATE,GUTTER,CHIMNEY,VENT,SKYLIGHT
70285,GARDEN,GRASS,FLOWER,BUSH,TREE,FENCE,PATH,PATIO,BENCH
70286,TOOLBOX,HAMMER,SCREWDRIVER,WRENCH,PLIERS,SAW,TAPE,NAIL,SCREW
70287,CLEANING TOOLS,BROOM,MOP,VACUUM,BUCKET,SPONGE,CLOTH,BRUSH,DUSTER
70288,LAUNDRY,WASHER,DRYER,DETERGENT,BASKET,IRON,BOARD,HANGER,FOLD
70289,SEWING,NEEDLE,THREAD,SCISSORS,PIN,BUTTON,FABRIC,MACHINE,THIMBLE
70290,KNITTING,YARN,NEEDLE,PATTERN,STITCH,WOOL,SCARF,SWEATER,HOOK
70291,PAINTING TOOLS,BRUSH,ROLLER,TRAY,TAPE,CAN,LADDER,DROP CLOTH,EASEL
70292,CAR TYPES,SEDAN,SUV,TRUCK,VAN,COUPE,CONVERTIBLE,WAGON,HATCHBACK
70293,TRUCK TYPES,PICKUP,SEMI,DUMP,FIRE,GARBAGE,TOW,TANKER,BOX
70294,BOAT TYPES,SAILBOAT,SPEEDBOAT,YACHT,CANOE,KAYAK,FERRY,CRUISE,FISHING
70295,AIRCRAFT,AIRPLANE,HELICOPTER,JET,GLIDER,DRONE,BALLOON,BLIMP,ROCKET
70296,TRAIN TYPES,SUBWAY,FREIGHT,PASSENGER,STEAM,DIESEL,MONORAIL,TRAM,BULLET
70297,BICYCLE PARTS,WHEEL,TIRE,PEDAL,CHAIN,HANDLEBAR,SEAT,BRAKE,GEAR
70298,TRAFFIC SIGNS,STOP,YIELD,SPEED LIMIT,ONE WAY,DO NOT ENTER,NO PARKING,MERGE,CROSSWALK
70299,ROAD TYPES,STREET,AVENUE,HIGHWAY,FREEWAY,LANE,BOULEVARD,DRIVE,ALLEY
70300,BRIDGE TYPES,SUSPENSION,ARCH,BEAM,TRUSS,DRAWBRIDGE,CANTILEVER,CABLE,PONTOON`,np=`id,name,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
60000,RHYME: -AT,Cat,Bat,Hat,Mat,Rat,Sat,Flat,Splat,Brat,Vat
60001,RHYME: -IGHT,Light,Bright,Night,Sight,Fight,Might,Tight,Flight,Height,Right
60002,RHYME: -AKE,Cake,Lake,Make,Take,Bake,Rake,Snake,Fake,Shake,Wake
60003,RHYME: -OON,Moon,Spoon,Noon,Soon,Balloon,Cartoon,Tycoon,Lagoon,Cocoon,Baboon
60004,RHYME: -AR,Car,Star,Far,Jar,Bar,Scar,Tar,Par,Guitar,Avatar
60005,RHYME: -ICE,Ice,Mice,Rice,Dice,Price,Slice,Twice,Spice,Nice,Vice
60006,RHYME: -AIL,Tail,Snail,Pail,Nail,Mail,Sail,Rail,Trail,Fail,Hail
60007,RHYME: -EE,Tree,Bee,Knee,See,Free,Glee,Three,Agree,Flee,Spree
60008,RHYME: -OCK,Sock,Rock,Lock,Clock,Block,Dock,Mock,Stock,Shock,Flock
60009,RHYME: -UG,Bug,Rug,Mug,Hug,Tug,Plug,Slug,Drug,Jug,Shrug
60010,RHYME: -AN,Pan,Fan,Man,Can,Van,Ran,Plan,Scan,Span,Tan
60011,RHYME: -IP,Lip,Sip,Dip,Hip,Tip,Rip,Flip,Slip,Trip,Grip
60012,RHYME: -ELL,Bell,Shell,Well,Tell,Sell,Fell,Smell,Spell,Swell,Yell
60013,RHYME: -OP,Top,Hop,Pop,Mop,Stop,Shop,Drop,Cop,Crop,Prop
60014,RHYME: -UNK,Junk,Trunk,Bunk,Sunk,Chunk,Skunk,Punk,Drunk,Shrunk,Funk
60015,RHYME: -ASH,Cash,Dash,Bash,Mash,Rash,Flash,Splash,Crash,Trash,Sash
60016,RHYME: -INE,Line,Mine,Fine,Dine,Nine,Pine,Shine,Vine,Wine,Spine
60017,RHYME: -OLD,Cold,Gold,Hold,Told,Sold,Bold,Fold,Mold,Scold,Wold
60018,RHYME: -ING,King,Ring,Sing,Wing,Swing,Bring,Spring,String,Thing,Cling
60019,RHYME: -EET,Feet,Sweet,Meet,Street,Sheet,Greet,Tweet,Fleet,Beet,Sleet
60020,RHYME: -ACK,Back,Sack,Pack,Rack,Black,Track,Stack,Snack,Crack,Quack
60021,RHYME: -AME,Name,Game,Same,Tame,Fame,Lame,Frame,Flame,Blame,Shame
60022,RHYME: -EST,Best,Nest,Rest,Test,West,Chest,Guest,Quest,Pest,Vest
60023,RHYME: -ICK,Kick,Pick,Sick,Tick,Lick,Brick,Stick,Quick,Click,Trick
60024,RHYME: -OT,Hot,Pot,Cot,Dot,Lot,Not,Rot,Slot,Spot,Plot
60025,RHYME: -UMP,Jump,Bump,Lump,Pump,Dump,Hump,Stump,Thump,Grump,Clump
60026,RHYME: -IDE,Ride,Hide,Side,Wide,Tide,Slide,Glide,Bride,Pride,Guide
60027,RHYME: -ORE,More,Store,Core,Bore,Sore,Score,Shore,Snore,Floor,Door
60028,RHYME: -OUT,Out,Shout,Scout,Spout,Trout,Snout,Stout,Doubt,Sprout,Gout
60029,RHYME: -UN,Sun,Run,Fun,Bun,Gun,Nun,Pun,Stun,Spin,Ton
60030,RHYME: -ED,Red,Bed,Fed,Led,Shed,Sled,Wed,Bred,Fled,Pled
60031,RHYME: -OLOGY,Biology,Geology,Zoology,Psychology,Theology,Mythology,Ecology,Anthology
60032,RHYME: -UTION,Solution,Pollution,Evolution,Revolution,Constitution,Execution,Distribution
60033,RHYME: -ENTAL,Mental,Dental,Rental,Fundamental,Parental,Accidental,Continental,Instrumental
60034,RHYME: -ITY,City,Pity,Witty,Gritty,Ability,Stability,Fragility,Hostility,Utility
60035,RHYME: -ATE,Create,Debate,Estate,Inflate,Relate,Translate,Mandate,Vibrate
60036,RHYME: -IOUS,Curious,Furious,Glorious,Serious,Various,Mysterious,Delirious,Hilarious
60037,RHYME: -ACTION,Action,Fraction,Traction,Reaction,Attraction,Distraction,Transaction
60038,RHYME: -ERSE,Verse,Reverse,Diverse,Converse,Universe,Traverse,Adverse,Disperse
60039,RHYME: -ENCE,Defense,Expense,Immense,Pretense,Suspense,Intense,Offense,Incense
60040,RHYME: -CTURE,Picture,Structure,Fracture,Lecture,Puncture,Stricture,Texture,Mixture
60041,RHYME: -IZE,Realize,Organize,Recognize,Analyze,Criticize,Memorize,Visualize,Apologize
60042,RHYME: -SION,Vision,Division,Collision,Revision,Decision,Precision,Invasion,Persuasion
60043,RHYME: -ATOR,Creator,Debator,Elevator,Operator,Generator,Decorator,Calculator,Simulator
60044,RHYME: -ISTIC,Artistic,Realistic,Optimistic,Pessimistic,Statistic,Logistic,Ballistic,Mystic`,ip=`110401,Solar System Objects,Asteroid,Comet,Meteoroid,Heliosphere
110402,Solo,Beyonce,Sting,Ozzy,Morrissey
110403,SONG,CHORUS,VERSE,BRIDGE,OUTRO,REFRAIN
110404,Songbirds,Bluejay,Oriole,Warbler,Thrush,Finch
110405,Sonic Series Characters,Sonic,Tails,Knuckles,Shadow
110406,Sound Films,Blackmail,Don Juan,Applause,Hallelujah,The Terror,Noah's Ark
110407,Spain,Flamenco,Matador,Alhambra,Paella,Picasso,Madrid
110408,Spider-Man,Peter Parker,Mary Jane,Venom,Octopus,Webbing,Spidey
110409,Sports,Soccer,Tennis,Golf,Hockey,Rugby
110410,Sports Cars,Ferrari,Porsche,Bugatti,McLaren,Pagani,Lamborghini
110411,Sports Game,MADDEN,FIFA,NHL,NBA 2K,TONY HAWK,MLB THE SHOW
110412,St. Patrick's Day,Shamrock,Clover,Emerald,Leprechaun,Parade
110413,Star Wars,Lightsaber,Skywalker,Tatooine,Wookiee,Vader,Ewok
110414,Star Wars Saga,Han Solo,Chewbacca,Boba Fett,Yoda,Darth Vader
110415,Stars and Stripes,Canton,Halyard,Grommet,Hoist
110416,STATISTICAL CHARTS,Histogram,Dendrogram,Scattergram,Cartogram
110417,Steve Jobs,Macintosh,Pixar,iPod,Newton,NeXT
110418,Streaming,Netflix,Hulu,Peacock,Max,Tubi,Twitch
110419,Streaming Television,Ozark,Narcos,Ted Lasso,The Bear
110420,Street Signs,Yield,Stop,Detour,Merge,Caution
110421,Subway,TURNSTILE,PLATFORM,TOKEN,COMMUTER,TRANSFER
110422,Summer,Solstice,Humidity,Heatwave,Estivation
110423,Summer Vacation,Road Trip,Sunscreen,Passport,Suitcase,Beach,Camping
110424,SUNSHINE,RAY,BEAM,GLARE,HALO,FLARE
110425,Super Mario Characters,Luigi,Peach,Bowser,Yoshi,Toad,Wario
110426,Super Mario Enemies,Goomba,Koopa,Boo,Lakitu,Shy Guy,Thwomp,Dry Bones,Bob-omb
110427,Superhero,Superman,Wonder Woman,Flash,Thor
110428,Superman,Krypton,Kal-El,Lois Lane,Lex Luthor,Cape
110429,SUVs,Tahoe,Wrangler,Cherokee,Durango,Highlander
110430,Suzuki,Swift,Hayabusa,Katana,Vitara,Jimny,Bandit
110431,Sweetness,Fructose,Sucrose,Glucose,Stevia,Molasses,Saccharin
110432,Swimming,Butterfly,Backstroke,Breaststroke,Freestyle
110433,Talk Show,Oprah,Ellen,Carson,Leno,Cavett
110434,TAROT CARD STRENGTH,LION,WOMAN,CROWN,INFINITY
110435,Taylor Swift,Midnights,Red,Evermore,Fearless,Reputation
110436,Television,Seinfeld,Friends,Lost,The Wire,Mad Men,Breaking Bad
110437,Thanksgiving,Turkey,Stuffing,Wishbone,Cranberry,Pumpkin
110438,The Beatles,Yesterday,Revolver,Abbey Road,Hey Jude,Help,Let It Be
110439,The Sound of Music,Maria,Trapp,Edelweiss,Nunnery,Guitar
110440,Thor,Mjolnir,Asgard,Bifrost,Valkyrie,Odin,Loki
110441,Timer,HOURGLASS,SUNDIAL,METRONOME,CHRONOMETER,CLEPSYDRA
110442,Times Square,Broadway,Neon,Screens,Billboard,Ball
110443,Titanic,Iceberg,White Star,Carpathia,Rose DeWitt,Cal Hockley,Southampton
110444,Tom Hanks Movies,Big,Cast Away,Forrest Gump,Philadelphia
110445,Toyota,Camry,Corolla,Prius,Supra
110446,Tradition,FOLKLORE,RITUAL,HERITAGE,PROTOCOL
110447,Traffic,Gridlock,Bottleneck,Congestion,Roadblock
110448,Trains,Locomotive,Caboose,Boxcar,Coupler
110449,Trees,Cedar,Maple,Birch,Willow,Spruce
110450,Trophic Levels,Producer,Consumer,Herbivore,Carnivore,Omnivore,Decomposer
110451,Trunk,Phloem,Cambium,Xylem,Pith
110452,Turtles,Leatherback,Hawksbill,Loggerhead,Ridley,Green,Box
110453,TYPES OF SHIELDS,AEGIS,BUCKLER,TARGE,PAVISE
110454,Uber,Surge,UberPool,UberX,UberEats,Beacon
110455,Uncle Sam,Top Hat,Goatee,Bow Tie,I Want You
110456,United States,Rushmore,Capitol,Pentagon,Congress,Liberty
110457,Unscented Soaps,Castile,Cetaphil,Aveeno,Basis,Eucerin
110458,US National Observances,Patriot,Memorial,Veterans,Labor
110459,Username,Alias,Handle,Nickname,Pseudonym
110460,Valentine's Day,Cupid,Heart,Rose,Arrow,Chocolate
110461,Vans,Sprinter,Transit,Savana,Express,Metris
110462,Vegetarians,Tofu,Tempeh,Seitan,Quinoa,Falafel,Hummus
110463,Vehicles,Truck,Tractor,Scooter,Trailer,Motorcycle,Van,Bicycle
110464,Version Control,Patch,Hotfix,Build,Revision
110465,Veterans Day,Armistice,Medal,Uniform,Soldier,Sailor
110466,Video Game Consoles,PlayStation,Wii,Genesis,Dreamcast,Switch
110467,Vikings,Longship,Valhalla,Ragnarok,Berserker,Runestone
110468,VIRAL DISEASES,MEASLES,MUMPS,RABIES,EBOLA
110469,Visa,PayWave,Electron,Infinite,Signature
110470,VOLUME,LITER,MILLILITER,CAPACITY,DISPLACEMENT
110471,Warmth,Radiator,Fireplace,Embers,Hearth,Friction,Convection
110472,Wave Properties,Amplitude,Frequency,Period,Crest
110473,WEATHER,CYCLONE,ANTICYCLONE,FRONT,ISOBAR,TROUGH
110474,Whales,Blue,Humpback,Narwhal,Beluga,Bowhead,Fin
110475,White House,Oval Office,West Wing,Presidential Home,Rose Garden
110476,Wildlife,Caracal,Pangolin,Capybara,Fennec,Axolotl,Meerkat
110477,Will Smith Movies,Hitch,Hancock,Ali,Bad Boys
110478,William Shakespeare,Hamlet,Macbeth,Othello,Globe,Stratford,Sonnet
110479,WIND,SIROCCO,CHINOOK,ZEPHYR,MONSOON,KHAMSIN
110480,WIND SPEED SCALES,BEAUFORT,KNOT,FUJITA,MACH
110481,Winston Churchill,Dunkirk,Blitz,Harrow,Cigar,Chartwell
110482,Winter,Blizzard,Dormancy,Frostbite,Permafrost,Hibernation
110483,X-Men,Wolverine,Cyclops,Magneto,Storm,Xavier,Cerebro
110484,Yellowstone,Geyser,Caldera,Bison,Wolves,Prismatic,Mammoth`,op=[ZC,XC,qC,QC,$C,ep,tp,ap,np,ip].join(`
`),rp=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
3000,Famous Mary,Shelley,Tyler Moore,Poppins,Magdalene,Queen of Scots,Berry,Blige,J. Blige
3001,Famous Elizabeth,Taylor,Olsen,Warren,Bennet,II,Debicki,Holmes,Banks
3002,Famous Jennifer,Lopez,Lawrence,Aniston,Garner,Coolidge,Love Hewitt,Hudson,Connelly
3003,Famous Linda,Hamilton,Ronstadt,Evangelista,Blair,McCartney,Hunt,Lavin,Cardellini
3004,Famous Patricia,Arquette,Clarkson,Cornwell,Neal,Highsmith,Heaton,Field,Richardson
3005,Famous Barbara,Streisand,Eden,Walter,Bach,Gordon,Bush,Stanwyck,Hershey
3006,Famous Susan,Sarandon,Sontag,Boyle,Collins,Storm,Lucci,Rice,Wojcicki
3007,Famous Jessica,Alba,Chastain,Simpson,Biel,Rabbit,Lange,Walter,Capshaw
3008,Famous Sarah,Connor,Jessica Parker,Silverman,Paulson,Palin,Michelle Gellar,Hyland,McLachlan
3009,Famous Karen,Carpenter,Allen,Gillan,Page,Smith,O,Gillan,Nyberg
3010,Famous Nancy,Drew,Sinatra,Pelosi,Grace,Romanoff,Kerrigan,Reagan,Meyers
3011,Famous Lisa,Simpson,Kudrow,Bonet,Loeb,Frank,Marie Presley,Rinna,Ling
3012,Famous Betty,White,Boop,Davis,Ford,Grable,Friedan,Rubble,Cooper
3013,Famous Margaret,Thatcher,Atwood,Cho,Qualley,Hamilton,Mitchell,Court,Sanger
3014,Famous Sandra,Bullock,Oh,Dee,Day O’Connor,Bernhard,Cisneros,Denton,Lee
3015,Famous Ashley,Olsen,Judd,Tisdale,Graham,Greene,Johnson,Cole,Benson
3016,Famous Kimberly,Kardashian,Clark,Guillfoyle,Anne Scott,Williams,Stewart,Quinn,Loaiza
3017,Famous Emily,Blunt,Dickinson,Deschanel,Brontë,Post,Ratajkowski,Osment,VanCamp
3018,Famous Donna,Summer,Tartt,Reed,Karan,Mills,Murphy,D'Errico,Brazile
3019,Famous Michelle,Obama,Pfeiffer,Williams,Yeoh,Rodriguez,Kwan,Branch,Monaghan
3020,Famous Carol,Burnett,Danvers,Brady,King,Kane,Channing,Alt,Leifer
3021,Famous Amanda,Seyfried,Peet,Knox,Clarke,Bynes,Plummer,Palmer,Bearse
3022,Famous Melissa,McCarthy,Benoist,Joan Hart,Etheridge,Gilbert,Rauch,George,Leo
3023,Famous Deborah,Kerr,Harry,Messing,Ann Woll,Gibson,Norville,Cox,Feldman
3024,Famous Stephanie,Meyer,Beatriz,McMahon,Seymour,Mills,Rice,March,Pratt
3025,Famous Rebecca,Ferguson,Hall,Romijn,Black,De Mornay,Miller,Mader,Sugar
3026,Famous Sharon,Stone,Tate,Osbourne,Carter,Gless,Case,Needles,Jones
3027,Famous Laura,Palmer,Dern,Bush,Linney,Prepon,Ingalls Wilder,Marano,Dern
3028,Famous Cynthia,Erivo,Nixon,Cooper,Rowley,Rothrock,Watros,Addai-Robinson,Bailey
3029,Famous Amy,Adams,Poehler,Winehouse,Schumer,Smart,Grant,Tan,Fisher
3030,Famous James,Dean,Cameron,Brown,Franco,Earl Jones,Bond,Harden,Stewart
3031,Famous John,Lennon,Wayne,Travolta,Cena,Williams,Wick,Snow,Carpenter
3032,Famous Robert,De Niro,Downey Jr.,Redford,Pattinson,Smith,Plant,Kennedy
3033,Famous Michael,Jackson,Jordan,Fox,Caine,Fassbender,Keaton,Myers
3034,Famous William,Shakespeare,Smith,Turner,Dafoe,Wallace,Tell,Macy
3035,Famous David,Bowie,Beckham,Lynch,Attenborough,Fincher,Letterman,Copperfield
3036,Famous Christopher,Nolan,Walken,Reeves,Columbus,Lee,Robin,Eccleston
3037,Famous Daniel,Day-Lewis,Craig,Radcliffe,Defoe,Plainview,Bryan,Kaluuya
3038,Famous Matthew,McConaughey,Perry,Broderick,Stafford,McFadyen,Modine,Goode
3039,Famous Anthony,Hopkins,Bourdain,Stark,Davis,Mackie,Edwards,Scaramucci
3040,Famous Mark,Twain,Wahlberg,Hamill,Zuckerberg,Ruffalo,Strong,Cuban
3041,Famous Steven,Spielberg,Tyler,Seagal,Yeun,Grant,King,Soderbergh
3042,Famous Paul,McCartney,Newman,Rudd,Simon,Atreides,Walker,Bettany
3043,Famous Andrew,Garfield,Jackson,Lloyd Webber,Tate,Carnegie,Scott,Lincoln
3044,Famous Kevin,Bacon,Hart,Costner,Durant,McCallister,Feige,Smith
3045,Famous Brian,Wilson,May,Cranston,Cox,Griffin,Johnson,Eno
3046,Famous George,Washington,Clooney,Lucas,Harrison,Jetson,Orwell,Foreman
3047,Famous Jason,Momoa,Bateman,Statham,Sudeikis,Bourne,Voorhees,Todd
3048,Famous Ryan,Gosling,Reynolds,O’Neal,Murphy,Giggs,Howard,Seacrest
3049,Famous Timothy,Chalamet,Olyphant,Dalton,Leary,McGee,Spall,Hutton
3050,Famous Charles,Darwin,Chaplin,Dickens,Xavier,Barkley,Manson,Grodin
3051,Famous Joseph,Biden,Gordon-Levitt,Stalin,Campbell,Joestar,Conrad,Fiennes
3052,Famous Thomas,Edison,Cruise,Hardy,Jefferson,Shelby,Anderson,Aquinas
3053,Famous Joshua,Jackson,Homme,Bell,Tree,Groban,Malina,Rush
3054,Famous Kenneth,Branagh,Copeland,Thompson,Arrow,Lay,Walker,Cole
3055,Famous Donald,Trump,Glover,Duck,Sutherland,Draper,Knuth,Fagen
3056,Famous Jeffrey,Bezos,Bridges,Dahmer,Epstein,Wright,Morgan,Tambor
3057,Famous Ronald,Reagan,McDonald,Weasley,Koeman,Dahl,Moore,Isley
3058,Famous Tim,Burton,Cook,Allen,McGraw,Robbins,Gunn,Curry
3059,Famous Adam,Sandler,Driver,Levine,West,Savage,Page,Scott
3060,Famous Jack,Nicholson,Sparrow,Ryan,Black,White,Bauer,London
3061,Famous Henry,Ford,Cavill,VIII,Winkler,Rollins,Hill,Fonda
3062,Famous Sean,Connery,Penn,Bean,Parker,Astin,Kingston,Lennon
3063,Famous Chris,Evans,Hemsworth,Pratt,Rock,Pine,Martin,Columbus
`,sp=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
2501,Butterfly,Mariposa,Papillon,Schmetterling,Farfalla,Borboleta,Vlinder
2502,Bread,Pan,Pain,Brot,Pane,Chleb,Brood
2503,Water,Agua,Eau,Wasser,Acqua,Voda,Mizu
2504,Friend,Amigo,Ami,Freund,Amico,Przyjaciel,Vriend
2505,House,Casa,Maison,Haus,Dom,Huis
2506,Sun,Sol,Soleil,Sonne,Sole,Słońce,Zon
2507,Moon,Luna,Lune,Mond,Luna,Księżyc,Maan
2508,Star,Estrella,Étoile,Stern,Stella,Gwiazda,Ster
2509,Book,Libro,Livre,Buch,Książka,Boek
2510,Cat,Gato,Chat,Katze,Kot,Kat
2511,Dog,Perro,Chien,Hund,Cane,Pies,Hond
2512,Flower,Flor,Fleur,Blume,Fiore,Kwiat,Bloem
2513,Tree,Árbol,Arbre,Baum,Albero,Drzewo,Boom
2514,Mountain,Montaña,Montagne,Berg,Montagna,Góra,Berg
2515,River,Río,Rivière,Fluss,Fiume,Rzeka,Rivier
2516,Sea,Mar,Mer,Meer,Mare,Morze,Zee
2517,Heart,Corazón,Cœur,Herz,Cuore,Serce,Hart
2518,Apple,Manzana,Pomme,Apfel,Mela,Jabłko,Appel
2519,Earth,Tierra,Terre,Erde,Terra,Ziemia,Aarde
2520,Fire,Fuego,Feu,Feuer,Fuoco,Ogień,Vuur
2521,Wind,Viento,Vent,Wind,Vento,Wiatr,Wind
2522,Bird,Pájaro,Oiseau,Vogel,Uccello,Ptak,Vogel
2523,Fish,Pez,Poisson,Fisch,Pesce,Ryba,Vis
2524,Head,Cabeza,Tête,Kopf,Testa,Głowa,Hoofd
2525,Hand,Mano,Main,Hand,Mano,Ręka,Hand
2526,Eye,Ojo,Œil,Auge,Occhio,Oko,Oog
2527,Coffee,Café,Kaffee,Caffè,Kawa,Koffie
2528,Milk,Leche,Lait,Milch,Latte,Mleko,Melk
2529,Night,Noche,Nuit,Nacht,Notte,Noc,Nacht
2530,Day,Día,Jour,Tag,Giorno,Dzień,Dag
2531,Rain,Lluvia,Pluie,Regen,Pioggia,Deszcz,Regen
2532,Snow,Nieve,Neige,Schnee,Neve,Śnieg,Sneeuw
2533,City,Ciudad,Ville,Stadt,Città,Miasto,Stad
2534,School,Escuela,École,Schule,Scuola,Szkoła,School
2535,Teacher,Maestro,Professeur,Lehrer,Nauczyciel,Leraar
2536,Red,Rojo,Rouge,Rot,Rosso,Czerwony,Rood
2537,Blue,Azul,Bleu,Blau,Blu,Niebieski,Blauw
2538,Green,Verde,Vert,Grün,Zielony,Groen
2539,Yellow,Amarillo,Jaune,Gelb,Giallo,Żółty,Geel
2540,Black,Negro,Noir,Schwarz,Nero,Czarny,Zwart
2541,White,Blanco,Blanc,Weiß,Bianco,Biały,Wit
2542,Love,Amor,Amour,Liebe,Amore,Miłość,Liefde
2543,Life,Vida,Vie,Leben,Vita,Życie,Leven
2544,Time,Tiempo,Temps,Zeit,Tempo,Czas,Tijd
2545,Music,Música,Musique,Musik,Musica,Muzyka,Muziek
2546,Name,Nombre,Nom,Name,Nome,Imię,Naam
2547,Window,Ventana,Fenêtre,Fenster,Finestra,Okno,Raam
2548,Table,Mesa,Table,Tisch,Tavolo,Stół,Tafel
2549,Chair,Silla,Chaise,Stuhl,Sedia,Krzesło,Stoel
2550,Door,Puerta,Porte,Tür,Porta,Drzwi,Deur
2551,Boy,Niño,Garçon,Junge,Ragazzo,Chłopiec,Jongen
2552,Girl,Niña,Fille,Mädchen,Ragazza,Dziewczynka,Meisje
2553,Father,Padre,Père,Vater,Padre,Ojciec,Vader
2554,Mother,Madre,Mère,Mutter,Madre,Matka,Moeder
2555,Son,Hijo,Fils,Sohn,Figlio,Syn,Zoon
2556,Daughter,Hija,Fille,Tochter,Figlia,Córka,Dochter
2557,Brother,Hermano,Frère,Bruder,Fratello,Brat,Broer
2558,Sister,Hermana,Sœur,Schwester,Sorella,Siostra,Zus
2559,Grandfather,Abuelo,Grand-père,Großvater,Nonno,Dziadek,Grootvader
2560,Grandmother,Abuela,Grand-mère,Großmutter,Nonna,Babcia,Grootmoeder
2561,Uncle,Tío,Oncle,Onkel,Zio,Wujek,Oom
2562,Aunt,Tía,Tante,Tante,Zia,Ciocia,Tante
2563,Cousin,Primo,Cousin,Cousin,Cugino,Kuzyn,Neef
2564,Nephew,Sobrino,Neveu,Neffe,Nipote,Siostrzeniec,Neef
2565,Niece,Sobrina,Nièce,Nichte,Nipote,Siostrzenica,Nicht
2566,Baby,Bebé,Bébé,Baby,Neonato,Dziecko,Baby
2567,Mouth,Boca,Bouche,Mund,Bocca,Usta,Mond
2568,Nose,Nariz,Nez,Nase,Naso,Nos,Neus
2569,Ear,Oreja,Oreille,Ohr,Orecchio,Ucho,Oor
2570,Hair,Pelo,Cheveu,Haar,Capelli,Włosy,Haar
2571,Face,Cara,Visage,Gesicht,Viso,Twarz,Gezicht
2572,Shoulder,Hombro,Épaule,Schulter,Spalla,Ramię,Schouder
2573,Arm,Brazo,Bras,Arm,Braccio,Ramię,Arm
2574,Finger,Dedo,Doigt,Finger,Dito,Palec,Vinger
2575,Leg,Pierna,Jambe,Bein,Gamba,Noga,Been
2576,Foot,Pie,Pied,Fuß,Piede,Stopa,Voet
2577,Back,Espalda,Dos,Rücken,Schiena,Plecy,Rug
2578,Skin,Piel,Peau,Haut,Pelle,Skóra,Huid
2579,Blood,Sangre,Sang,Blut,Sangue,Krew,Bloed
2580,Bone,Hueso,Os,Knochen,Osso,Kość,Bot
2581,Stomach,Estómago,Estomac,Magen,Stomaco,Żołądek,Maag
2582,Brain,Cerebro,Cerveau,Gehirn,Cervello,Mózg,Brein
2583,Bread,Pan,Pain,Brot,Pane,Chleb,Brood
2584,Rice,Arroz,Riz,Reis,Riso,Ryż,Rijst
2585,Meat,Carne,Viande,Fleisch,Carne,Mięso,Vlees
2586,Chicken,Pollo,Poulet,Hähnchen,Pollo,Kurczak,Kip
2587,Egg,Huevo,Œuf,Ei,Uovo,Jajko,Ei
2588,Cheese,Queso,Fromage,Käse,Formaggio,Ser,Kaas
2589,Butter,Mantequilla,Beurre,Butter,Burro,Masło,Boter
2590,Fruit,Fruta,Fruit,Frucht,Frutta,Owoc,Vrucht
2591,Banana,Plátano,Banane,Banane,Banana,Banan,Banaan
2592,Orange,Naranja,Orange,Orange,Arancia,Pomarańcza,Sinaasappel
2593,Potato,Patata,Pomme de terre,Kartoffel,Patata,Ziemniak,Aardappel
2594,Tomato,Tomate,Tomate,Tomate,Pomodoro,Pomidor,Tomaat
2595,Onion,Cebolla,Oignon,Zwiebel,Cipolla,Cebula,Ui
2596,Garlic,Ajo,Ail,Knoblauch,Aglio,Czosnek,Knoflook
2597,Salt,Sal,Sel,Salz,Sale,Sól,Zout
2598,Sugar,Azúcar,Sucre,Zucker,Zucchero,Cukier,Suiker
2599,Tea,Té,Thé,Tee,Tè,Herbata,Thee
2600,Wine,Vino,Vin,Wein,Vino,Wino,Wijn
2601,Beer,Cerveza,Bière,Bier,Birra,Piwo,Bier
2602,Juice,Zumo,Jus,Saft,Succo,Sok,Sap
2603,Plate,Plato,Assiette,Teller,Piatto,Talerz,Bord
2604,Cup,Taza,Tasse,Tasse,Tazza,Filiżanka,Kop
2605,Spoon,Cuchara,Cuillère,Löffel,Cucchiaio,Łyżka,Lepel
2606,Knife,Cuchillo,Couteau,Messer,Coltello,Nóż,Mes
2607,Fork,Tenedor,Fourchette,Gabel,Forchetta,Widelec,Vork
2608,Shirt,Camisa,Chemise,Hemd,Camicia,Koszula,Overhemd
2609,Pants,Pantalones,Pantalon,Hose,Pantaloni,Spodnie,Broek
2610,Dress,Vestido,Robe,Kleid,Vestito,Sukienka,Jurk
2611,Skirt,Falda,Jupe,Rock,Gonna,Spódnica,Rok
2612,Coat,Abrigo,Manteau,Mantel,Cappotto,Płaszcz,Jas
2613,Hat,Sombrero,Chapeau,Hut,Cappello,Kapelusz,Hoed
2614,Shoe,Zapato,Chaussure,Schuh,Scarpa,But,Schoen
2615,Sock,Calcetín,Chaussette,Socke,Calza,Skarpetka,Sok
2616,Watch,Reloj,Montre,Uhr,Orologio,Zegarek,Horloge
2617,Bag,Bolsa,Sac,Tasche,Borsa,Torba,Tas
2618,Glasses,Gafas,Lunettes,Brille,Occhiali,Okulary,Bril
2619,Bed,Cama,Lit,Bett,Letto,Łóżko,Bed
2620,Sleep,Sueño,Sommeil,Schlaf,Sonno,Sen,Slaap
2621,Kitchen,Cocina,Cuisine,Küche,Cucina,Kuchnia,Keuken
2622,Bathroom,Baño,Salle de bain,Badzimmer,Bagno,Łazienka,Badkamer
2623,Garden,Jardín,Jardin,Garten,Giardino,Ogród,Tuin
2624,Floor,Suelo,Sol,Boden,Pavimento,Podłoga,Vloer
2625,Wall,Pared,Mur,Wand,Parete,Ściana,Muur
2626,Roof,Techo,Toit,Dach,Tetto,Dach,Dak
2627,Stairs,Escaleras,Escaliers,Treppe,Scale,Schody,Trap
2628,Key,Llave,Clé,Schlüssel,Chiave,Klucz,Sleutel
2629,Mirror,Espejo,Miroir,Spiegel,Specchio,Lustro,Spiegel
2630,Soap,Jabón,Savon,Seife,Sapone,Mydło,Zeep
2631,Towel,Toalla,Serviette,Handtuch,Asciugamano,Ręcznik,Handdoek
2632,Computer,Ordenador,Ordinateur,Computer,Computer,Komputer,Computer
2633,Phone,Teléfono,Téléphone,Telefon,Telefono,Telefon,Telefoon
2634,Camera,Cámara,Appareil,Kamera,Macchina,Aparat,Camera
2635,Pen,Bolígrafo,Stylo,Stift,Penna,Długopis,Pen
2636,Paper,Papel,Papier,Papier,Carta,Papier,Papier
2637,Letter,Carta,Lettre,Brief,Lettera,List,Brief
2638,Street,Calle,Rue,Straße,Strada,Ulica,Straat
2639,Road,Camino,Chemin,Weg,Strada,Droga,Weg
2640,Bridge,Puente,Pont,Brücke,Ponte,Most,Brug
2641,Store,Tienda,Magasin,Laden,Negozio,Sklep,Winkel
2642,Park,Parque,Parc,Park,Parco,Park,Park
2643,Hospital,Hospital,Hôpital,Krankenhaus,Ospedale,Szpital,Ziekenhuis
2644,Police,Policía,Police,Polizei,Polizia,Policja,Politie
2645,Doctor,Médico,Médecin,Arzt,Dottore,Lekarz,Dokter
2646,Student,Estudiante,Étudiant,Student,Studente,Student,Student
2647,Office,Oficina,Bureau,Büro,Ufficio,Biuro,Kantoor
2648,Work,Trabajo,Travail,Arbeit,Lavoro,Praca,Werk
2649,Money,Dinero,Argent,Geld,Denaro,Pieniądze,Geld
2650,Price,Precio,Prix,Preis,Prezzo,Cena,Prijs
2651,Bill,Factura,Facture,Rechnung,Conto,Rachunek,Rekening
2652,Ticket,Entrada,Billet,Karte,Biglietto,Bilet,Kaartje
2653,Map,Mapa,Carte,Karte,Mappa,Mapa,Kaart
2654,Hotel,Hotel,Hôtel,Hotel,Hotel,Hotel,Hotel
2655,Beach,Playa,Plage,Strand,Spiaggia,Plaża,Strand
2656,Forest,Bosque,Forêt,Wald,Foresta,Las,Bos
2657,Desert,Desierto,Désert,Wüste,Deserto,Pustynia,Woestijn
2658,Lake,Lago,Lac,See,Lago,Jezioro,Meer
2659,Island,Isla,Île,Insel,Isola,Wyspa,Eiland
2660,Cloud,Nube,Nuage,Wolke,Nuvola,Chmura,Wolk
2661,Thunder,Trueno,Tonnerre,Donner,Tuono,Grzmot,Donder
2662,Storm,Tormenta,Tempête,Sturm,Tempesta,Burza,Storm
2663,Sky,Cielo,Ciel,Himmel,Cielo,Niebo,Hemel
2664,Bird,Pájaro,Oiseau,Vogel,Uccello,Ptak,Vogel
2665,Horse,Caballo,Cheval,Pferd,Cavallo,Koń,Paard
2666,Cow,Vaca,Vache,Kuh,Mucca,Krowa,Koe
2667,Pig,Cerdo,Cochon,Schwein,Maiale,Świnia,Varken
2668,Sheep,Oveja,Mouton,Schaf,Pecora,Owca,Schaap
2669,Goat,Cabra,Chèvre,Ziege,Capra,Koza,Geit
2670,Lion,León,Lion,Löwe,Leone,Lew,Leeuw
2671,Tiger,Tigre,Tigre,Tiger,Tigre,Tygrys,Tijger
2672,Bear,Oso,Ours,Bär,Orso,Niedźwiedź,Beer
2673,Elephant,Elefante,Éléphant,Elefant,Elefante,Słoń,Olifant
2674,Monkey,Mono,Singe,Affe,Scimmia,Małpa,Aap
2675,Rabbit,Conejo,Lapin,Hase,Coniglio,Królik,Konijn
2676,Snake,Serpiente,Serpent,Schlange,Serpente,Wąż,Slang
2677,Frog,Rana,Grenouille,Frosch,Rana,Żaba,Kikker
2678,Mouse,Ratón,Souris,Maus,Topo,Mysz,Muis
2679,Fly,Mosca,Mouche,Fliege,Mosca,Mucha,Vlieg
2680,Bee,Abeja,Abeille,Biene,Ape,Pszczoła,Bij
2681,Spider,Araña,Araignée,Spinne,Ragno,Pająk,Spin
2682,Ant,Hormiga,Fourmi,Ameise,Formica,Mrówka,Mier
2683,Worm,Gusano,Ver,Wurm,Verme,Robak,Worm
2684,Purple,Morado,Violet,Lila,Viola,Fioletowy,Paars
2685,Pink,Rosa,Rose,Rosa,Rosa,Różowy,Roze
2686,Orange,Naranja,Orange,Orange,Arancione,Pomarańczowy,Oranje
2687,Brown,Marrón,Brun,Braun,Marrone,Brązowy,Bruin
2688,Grey,Gris,Gris,Grau,Grigio,Szary,Grijs
2689,Light,Luz,Lumière,Licht,Luce,Światło,Licht
2690,Heavy,Pesado,Lourd,Schwer,Pesante,Ciężki,Zwaar
2691,Big,Grande,Grand,Groß,Grande,Duży,Groot
2692,Small,Pequeño,Petit,Klein,Piccolo,Mały,Klein
2693,Fast,Rápido,Rapide,Schnell,Veloce,Szybki,Snel
2694,Slow,Lento,Lent,Langsam,Lento,Wolny,Langzaam
2695,Hot,Caliente,Chaud,Heiß,Caldo,Gorący,Heet
2696,Cold,Frío,Froid,Kalt,Freddo,Zimny,Koud
2697,New,Nuevo,Nouveau,Neu,Nuovo,Nowy,Nieuw
2698,Old,Viejo,Vieux,Alt,Vecchio,Stary,Oud
2699,Good,Bueno,Bon,Gut,Buono,Dobry,Goed
2700,Bad,Malo,Mauvais,Schlecht,Cattivo,Zły,Slecht
2701,Happy,Feliz,Heureux,Glücklich,Felice,Szczęśliwy,Gelukkig
2702,Sad,Triste,Triste,Traurig,Triste,Smutny,Triest
2703,Angry,Enfadado,Fâché,Böse,Arrabbiato,Zły,Boos
2704,Sick,Enfermo,Malade,Krank,Malato,Chory,Ziek
2705,Rich,Rico,Riche,Reich,Ricco,Bogaty,Rijk
2706,Poor,Pobre,Pauvre,Arm,Povero,Biedny,Arm
2707,Young,Joven,Jeune,Jung,Giovane,Młody,Jong
2708,Hard,Duro,Dur,Hart,Duro,Twardy,Hard
2709,Soft,Blando,Mou,Weich,Morbido,Miękki,Zacht
2710,Near,Cerca,Près,Nah,Vicino,Blisko,Dichtbij
2711,Far,Lejos,Loin,Fern,Lontano,Daleko,Ver
2712,Right,Derecha,Droite,Rechts,Destra,Prawo,Rechts
2713,Left,Izquierda,Gauche,Links,Sinistra,Lewo,Links
2714,True,Verdadero,Vrai,Wahr,Vero,Prawda,Waar
2715,False,Falso,Faux,Falsch,Falso,Fałsz,Vals
2716,Beautiful,Hermoso,Beau,Schön,Bello,Piękny,Mooi
2717,Ugly,Feo,Laid,Hässlich,Brutto,Brzydki,Lelijk
2718,Clean,Limpio,Propre,Sauber,Pulito,Czysty,Schoon
2719,Dirty,Sucio,Sale,Schmutzig,Sporco,Brudny,Vuil
2720,Full,Lleno,Plein,Voll,Pieno,Pełny,Vol
2721,Empty,Vacío,Vide,Leer,Vuoto,Pusty,Leeg
2722,Easy,Fácil,Facile,Einfach,Facile,Łatwy,Gemakkelijk
2723,Difficult,Difícil,Difficile,Schwer,Difficile,Trudny,Moeilijk
2724,Early,Temprano,Tôt,Früh,Presto,Wcześnie,Vroeg
2725,Late,Tarde,Tard,Spät,Tardi,Późno,Laat
2726,First,Primero,Premier,Erster,Primo,Pierwszy,Eerste
2727,Last,Último,Dernier,Letzter,Ultimo,Ostatni,Laatste
2728,More,Más,Plus,Mehr,Più,Więcej,Meer
2729,Less,Menos,Moins,Weniger,Meno,Mniej,Minder
2730,Open,Abierto,Ouvert,Offen,Aperto,Otwarty,Open
2731,Closed,Cerrado,Fermé,Geschlossen,Chiuso,Zamknięty,Gesloten
2732,Strong,Fuerte,Fort,Stark,Forte,Silny,Sterk
2733,Weak,Débil,Faible,Schwach,Debole,Słaby,Zwak
2734,Short,Corto,Court,Kurz,Corto,Krótki,Kort
2735,Long,Largo,Long,Lang,Lungo,Długi,Lang
2736,Wide,Ancho,Large,Breit,Largo,Szeroki,Breed
2737,Narrow,Estrecho,Étroit,Eng,Stretto,Wąski,Smal
2738,Dry,Seco,Sec,Trocken,Secco,Suchy,Droog
2739,Wet,Mojado,Mouillé,Nass,Bagnato,Mokry,Nat
2740,Cheap,Barato,Bon marché,Billig,Economico,Tani,Goedkoop
2741,Expensive,Caro,Cher,Teuer,Caro,Drogi,Duur
2742,Quiet,Silencioso,Calme,Ruhig,Silenzioso,Cichy,Stil
2743,Noisy,Ruidoso,Bruyant,Laut,Rumoroso,Głośny,Luidruchtig
2744,Safe,Seguro,Sûr,Sicher,Sicuro,Bezpieczny,Veilig
2745,Dangerous,Peligroso,Dangereux,Gefährlich,Pericoloso,Niebezpieczny,Gevaarlijk
2746,Sweet,Dulce,Sucré,Süß,Dolce,Słodki,Zoet
2747,Sour,Agrio,Acide,Sauer,Acido,Kwaśny,Zuur
2748,Bitter,Amargo,Amer,Bitter,Amaro,Gorzki,Bitter
2749,Salty,Salado,Salé,Salzig,Salato,Słony,Zout
2750,Kitchen,Cocina,Cuisine,Küche,Cucina,Kuchnia,Keuken
2751,Fridge,Nevera,Frigo,Kühlschrank,Frigo,Lodówka,Koelkast
2752,Oven,Horno,Four,Ofen,Forno,Piekarnik,Oven
2753,Sink,Fregadero,Évier,Spülbecken,Lavandino,Zlew,Gootsteen
2754,Shelf,Estante,Étagère,Regal,Scaffale,Półka,Plank
2755,Drawer,Cajón,Tiroir,Schublade,Cassetto,Szuflada,Lade
2756,Stove,Estufa,Poêle,Herd,Stufa,Piec,Fornuis
2757,Pan,Sartén,Poêle,Pfanne,Padella,Patelnia,Pan
2758,Pot,Olla,Marmite,Topf,Pentola,Garnek,Pan
2759,Mug,Taza,Chope,Becher,Tazza,Kubek,Mok
2760,Glass,Vaso,Verre,Glas,Bicchiere,Szklanka,Glas
2761,Napkin,Servilleta,Serviette,Serviette,Tovagliolo,Serwetka,Servet
2762,Bag,Bolsa,Sac,Tasche,Borsa,Torba,Tas
2763,Wallet,Cartera,Portefeuille,Brieftasche,Portafoglio,Portfel,Portemonnee
2764,Umbrella,Paraguas,Parapluie,Regenschirm,Ombrello,Parasol,Paraplu
2765,Tool,Herramienta,Outil,Werkzeug,Strumento,Narzędzie,Gereedschap
2766,Hammer,Martillo,Marteau,Hammer,Martello,Młotek,Hamer
2767,Nail,Clavo,Clou,Nagel,Chiodo,Gwóźdź,Nagel
2768,Screw,Tornillo,Vis,Schraube,Vite,Śruba,Schroef
2769,Wrench,Llave,Clé,Schlüssel,Chiave,Klucz,Sleutel
2770,Saw,Sierra,Scie,Säge,Sega,Piła,Zaag
2771,Paint,Pintura,Peinture,Farbe,Vernice,Farba,Verf
2772,Glue,Pegamento,Colle,Kleber,Colla,Klej,Lijm
2773,Tape,Cinta,Ruban,Band,Nastro,Taśma,Tape
2774,Scissors,Tijeras,Ciseaux,Schere,Forbici,Nożyczki,Schaar
2775,Ladder,Escalera,Échelle,Leiter,Scala,Drabina,Ladder
2776,Wheel,Rueda,Roue,Rad,Ruota,Koło,Wiel
2777,Engine,Motor,Moteur,Motor,Motore,Silnik,Motor
2778,Tire,Neumático,Pneu,Reifen,Gomma,Opona,Band
2779,Brake,Freno,Frein,Bremse,Freno,Hamulec,Rem
2780,Gas,Gas,Gaz,Gas,Gas,Gaz,Gas
2781,Seat,Asiento,Siège,Sitz,Sedile,Siedzenie,Stoel
2782,Truck,Camión,Camion,LKW,Camion,Ciężarówka,Vrachtwagen
2783,Bus,Autobús,Bus,Bus,Autobus,Autobus,Bus
2784,Train,Tren,Train,Zug,Treno,Pociąg,Trein
2785,Plane,Avión,Avion,Flugzeug,Aereo,Samolot,Vliegtuig
2786,Boat,Barco,Bateau,Boot,Barca,Łódź,Boot
2787,Bicycle,Bicicleta,Vélo,Fahrrad,Bicicletta,Rower,Fiets
2788,Subway,Metro,Métro,U-Bahn,Metro,Metro,Metro
2789,Ticket,Billete,Billet,Ticket,Biglietto,Bilet,Ticket
2790,Passport,Pasaporte,Passeport,Reisepass,Passaporto,Paszport,Paspoort
2791,Suitcase,Maleta,Valise,Koffer,Valigia,Walizka,Koffer
2792,Map,Mapa,Carte,Karte,Mappa,Mapa,Kaart
2793,Language,Lengua,Langue,Sprache,Lingua,Język,Taal
2794,Word,Palabra,Mot,Wort,Parola,Słowo,Woord
2795,Sentence,Frase,Phrase,Satz,Frase,Zdanie,Zin
2796,Question,Pregunta,Question,Frage,Domanda,Pytanie,Vraag
2797,Answer,Respuesta,Réponse,Antwort,Risposta,Odpowiedź,Antwoord
2798,Story,Historia,Histoire,Geschichte,Storia,Opowieść,Verhaal
2799,Poem,Poema,Poème,Gedicht,Poesia,Wiersz,Gedicht
2800,Pen,Bolígrafo,Stylo,Kuli,Penna,Długopis,Pen
2801,Pencil,Lápiz,Crayon,Bleistift,Matita,Ołówek,Potlood
2802,Eraser,Goma,Gomme,Radiergummi,Gomma,Gumka,Gom
2803,Notebook,Cuaderno,Cahier,Notizbuch,Quaderno,Zeszyt,Notitieboek
2804,Library,Biblioteca,Bibliothèque,Bibliothek,Biblioteca,Biblioteka,Bibliotheek
2805,Page,Página,Page,Seite,Pagina,Strona,Pagina
2806,Zero,Cero,Zéro,Null,Zero,Zero,Nul
2807,One,Uno,Un,Eins,Uno,Jeden,Een
2808,Two,Dos,Deux,Zwei,Due,Dwa,Twee
2809,Three,Tres,Trois,Drei,Tre,Trzy,Drie
2810,Four,Cuatro,Quatre,Vier,Quattro,Cztery,Vier
2811,Five,Cinco,Cinq,Fünf,Cinque,Pięć,Vijf
2812,Six,Seis,Six,Sechs,Sei,Sześć,Zes
2813,Seven,Siete,Sept,Sieben,Sette,Siedem,Zeven
2814,Eight,Ocho,Huit,Acht,Otto,Osiem,Acht
2815,Nine,Nueve,Neuf,Neun,Nove,Dziewięć,Negen
2816,Ten,Diez,Dix,Zehn,Dieci,Dziesięć,Tien
2817,Hundred,Cien,Cent,Hundert,Cento,Sto,Honderd
2818,Thousand,Mil,Mille,Tausend,Mille,Tysiąc,Duizend
`,lp=`Category,Linguistic Cluster,Intensity
"1700 Fashion","Pannier, Stomacher, Tricorne, Cravat, Justaucorps, Fichu, Panniers, Breeches, Corset",7
"1800 Fashion","Spencer, Crinoline, Pelisse, Gaiter, Reticule, Bonnet, Pelisse, Cravat, Pantaloons, Chemise, Fichu",6
"Aaron Sorkin","West Wing, The Newsroom, Moneyball, Steve Jobs, Molly's Game, Sports Night, STUDIO 60, MALICE",7
"Abolition","Garrison, Douglass, Stowe, Truth, TUBMAN, LIBERATOR",7
"Accordion","Bellows, Buttons, Reeds, Pallets, Valves, Straps, PALETTE, GRILL",6
"acrobatics","Backflip, Handspring, Cartwheel, Somersault, Layout, Tuck, Pike, Aerial, Trapeze, Handstand",5
"Action","choreography, sequence, adrenaline, stunt, explosion, combat, showdown, Die Hard, Speed, Predator, Rambo, Crank, Commando, Gladiator",4
"Adams","Samuel, Ansel, Douglas, Abigail, John, Quincy, Federalist, Braintree, Ambassador",5
"Adobe Creative Software","Photoshop, Acrobat, Premiere, InDesign",4
"adult animation","Invincible, Archer, Futurama, Primal, Spawn",6
"adult films","Deep Throat, Pirates, Taboo, Emmanuelle, Blue Movie",5
"Adventure","Odyssey, Heroism, Peril, Frontier, Venture, Jumanji, The Goonies, King Kong, The Mummy, Cast Away, Life of Pi, True Grit",4
"advertising TV","JINGLE, BUMPER, BILLBOARD, SLOT, Jingles, Placement, Reach",5
"Afterlife","Duat, Maat, Anubis, Osiris, Amenti, Canopic, Ammit",6
"Agility","Nimbleness, Dexterity, Celerity, Quickness, Mobility",5
"Airbus Aircraft Designs","Beluga, A380, A350, A320, A400M",4
"Alain Delon","Le Samourai, Purple Noon, L'Eclisse, Borsalino",6
"ALBATROSS VARIETIES","Wandering, Laysan, Royal, Shy, Diomedea, Phoebastria, Thalassarche, Phoebetria",7
"Alejandro Iñárritu Films","Babel, Birdman, Biutiful, 21 Grams, Bardo, The Revenant",7
"Alexander the Great","Macedonia, Hellenism, Aristotle, Bucephalus, Persian Empire, King of Kings, Phalanx",3
"Alexander Hamilton","Treasury, Schuyler, Nevis, Burr, National Bank, Secretary, New York, Duel, Coast Guard",4
"Alice in Wonderland","Cheshire, Jabberwocky, Dormouse, Gryphon, Hatter, Walrus, Carpenter, Vorpal",4
"Alien Franchise","Ripley, Xenomorph, Nostromo, Facehugger, Weyland, Sulaco, Chestburster, Ash, Bishop, Egg",7
"All in the Family","Archie, Edith, Gloria, Meathead, Bunker, Mike Stivic, Norman Lear, Queens, Dingbat",6
"Alphabet","Google, YouTube, Waymo, Android, DeepMind, Fitbit, Verily, Calico",5
"alternating current","Sinusoid, Impedance, Reactance, Phase, Amperage, Voltage",5
"Alternative","Nirvana, Pixies, Pavement, Radiohead, Smiths, Grunge, Nonconformity, Eclectic, Shoegaze, Experimental, Blur, Oasis",5
"Ambient","Brian Eno, Biosphere, Steve Roach, Aphex Twin, Loscil, Tim Hecker",7
"AMD","Ryzen, Radeon, Epyc, Zen, Athlon, Opteron",4
"American Express Card Tiers","Centurion, Platinum, Optima, Zync",4
"Amphibians","Axolotl, Bullfrog, Newt, Toad, salamander, spadefoot",5
"Amplifier","Gain, Treble, Midrange, Reverb, Presence, Master, TRANSISTOR, PREAMP, CABINET, COMBO",5
"analog typewriters","Platen, Carriage, Typebar, Roller",5
"Ancient Civilizations","Sumerian, Minoan, Olmec, Aksumite, Phoenician, Etruscan, Aksum, Hittite",6
"Ancient Egypt","Pyramids, Sphinx, Papyrus, Hieroglyph, Ankh, Sarcophagus, Sarcophagus, Shabti, Pectoral, Cartonnage",4
"ancient mythology","Ragnarok, Olympus, Tartarus, Valhalla, Elysium, Chimera, mythology, enchantment, sorcery, quest, prophecy",5
"Ancient Roman Jurisprudence","Codex, Digest, Pandects, Lictor, Justinian, Solidus, Iconoclasm, Theodora",7
"Andrew Stanton Films","Finding Nemo, Finding Dory, John Carter, A Bug's Life",5
"Animation","Storyboard, CGI, Voice acting, Frame, Rendering, Stop motion, Anime, Keyframe, Akira, Toy Story, Shrek, Paprika, Coraline",4
"animation studios","Pixar, Ghibli, Aardman, Madhouse, Laika, Illumination, Gainax",5
"Annotation Types","Gloss, Scholion, Postil, Rubric, Commentary",6
"antennas","Yagi, Rabbit Ears, Dipole, Monopole, Parabolic, Bowtie",5
"ANTISEPTIC CHEMICALS","PEROXIDE, CHLORINE, ETHANOL, TRICLOSAN, IODINE, Phenol, Formalin, Bleach",5
"ARACHNID MORPHOLOGY","SPINNERET, ARACHNID, PEDIPALP, CHELICERA",4
"architecture","Facade, Corinthian, Pendentive, Brutalism, Bauhaus, Cornice, Gargoyle, Column, Buttress, Pediment, Frieze",5
"Arctic Ecosystems","Tundra, Taiga, Muskeg, Palsa",6
"Arena","Coliseum, Enclosure, Concourse, Pavilion, Grandstand",4
"Arnold Schwarzenegger Movies","Terminator, Red Heat, Total Recall, True Lies, Twins, Junior",4
"Aroma","Terpene, Esters, Bouquet, Phenols, Sillage",4
"Aromatic Notes","Bergamot, Jasmine, Vetiver, Musk, Neroli, Sandalwood, Patchouli, Lavender, Rosemary",5
"Assembly Lines","Conveyor, Chassis, Robotics, Fixture",5
"Assist","Support, Facilitate, Collaboration, Contribution, Reinforce, Aid",4
"Astronauts","GLENN, SHEPARD, ARMSTRONG, LOVELL, Tereshkova, Ride",6
"Athletic Metrics","Conditioning, Endurance, Stamina, Agility, Strength, Mobility, Dexterity, Celerity, Quickness",5
"Atmosphere","exosphere, mesosphere, stratosphere, thermosphere, troposphere, altitude, barometric",6
"ATMOSPHERIC LAYERS","TROPOSPHERE, STRATOSPHERE, MESOSPHERE, IONOSPHERE, EXOSPHERE",6
"Atmospheric Air Currents","Squalls, Gales, Breezes, Drafts, Blasts, Zephyrs",4
"Atmospheric Condensation","Dew, Frost, Mist, Fog",4
"Atmospheric Moisture","Humidity, Dewpoint, Saturation, Hygrometer, Vapor, Pressure, Isobar",5
"ATMOSPHERIC VORTEX TYPES","Tornado, Twister, Whirlwind, Waterspout",5
"Atomic Age","TRINITY, FISSION, GEIGER, FALLOUT, ENOLA GAY, Radioactivity, Physicists, Uranium, Plutonium",6
"Attribution Artifacts","Citation, Footnote, Excerpt, Passage, Reference",6
"audience ratings","Share, Overnights, Live+7, Demo, Sweeps",6
"Audition","Monologue, Reader, Slate, Headshot, Resume, Callback, Cold Read, Sides, Rehearsal, Screen test",5
"Augustus","Octavian, Princeps, Actium, Livia, Agrippa",5
"Away Game","VISITORS, ROADIE, GRAY, HOTEL, Visitor, Road Trip, Itinerary, Hospitality, Excursion",4
"Awe","Aurora, Supernova, Monolith, Abyss",5
"Banjo","Resonator, Tone ring, Tension hoop, Fifth string",6
"Bank Holiday","Vault, Federal, Monday, Sterling, Statutory, Commerce, Financial, Closure, Regulation, Transaction, Monetary",4
"Bank of America","Merrill, Lynch, Charlotte, Zelle",4
"Bankruptcy","Enron, Lehman, WorldCom, Nortel, Chapter 7, Chapter 11, Debtor, Receiver, Creditor, Insolvency",6
"Bark","phloem, cambium, cork, rhytidome, protective, xylem",4
"Barnacles","GOOSENECK, ACORN, PEDUNCLE, CIRRI, SCUTUM, TERGUM, Cirripedia, Sessile, Fouling",6
"Baroque","Bach, Fugue, Cantata, Oratorio, Toccata, Harpsichord, Vivaldi, Handel, Purcell, Scarlatti, Telemann",7
"Baseball Power","Grand Slam, Moonshot, Dinger, RBI",4
"Basketball Box Score","Assist, Rebound, Steal, Block",5
"Basketball Moves","Alley-Oop, Layup, Fadeaway, Eurostep",4
"Basketball Rebounding","Boxout, Putback, Outlet, Boards, Carom",5
"BATHYMETRIC TRENCHES","Mariana, Tonga, Kermadec, Kuril, Japan, Atacama",7
"Berkshire Hathaway","Geico, Duracell, NetJets, BNSF, Dairy Queen, Lubrizol",7
"Berserkers","Ulfhednar, Bearskin, Fury, Odin",7
"Big Oil","ExxonMobil, Chevron, Shell, Aramco, Equinor, Gazprom, Texaco, Amoco, Castrol",7
"Big Pharma","Pfizer, Merck, Novartis, Sanofi, AbbVie, Bayer, Eli Lilly, Moderna, Roche",7
"Big Tech","Alphabet, Apple, Meta, Microsoft, Netflix, Oracle, Google, Amazon, Nvidia",5
"Bill of Rights","ASSEMBLY, RELIGION, SPEECH, PRESS, PETITION, SEARCH, SEIZURE, COUNSEL, Ratify, Liberties, Infringement, Due Process",6
"BIODIVERSITY METRICS","TAXONOMY, PHYLOGENY, ENDEMIC, KEYSTONE, HOTSPOT, SPECIATION, Richness, Evenness, Endemism",7
"Block","rejection, stuff, swat, denial, rim-protection, goaltending, verticality",4
"Block Inc Properties","Tidal, Spiral, Afterpay, Caviar",4
"Blossoms","Pollen, Stigma, Inflorescence, Anther, Gamete, Exine",4
"Blues","Delta, Shuffle, Slide, Muddy, Memphis, Chicago, Twelve-Bar, Slide Guitar, Harmonica",5
"Board of Directors","Chairman, Quorum, Trustee, Bylaws, Fiduciary, Advisor, Treasurer, Secretary",7
"Bob Dylan","Harmonica, Hibbing, Guthrie, Newport, Zimmerman, Nashville, Tarantula, Highway 61",4
"Bob Odenkirk","Saul Goodman, Better Call, Nobody, Lucky Hank",6
"Boeing Aviation Programs","Chinook, Clipper, Starliner, Dreamliner",4
"Booking Holdings","Booking.com, Kayak, Priceline, Agoda, OpenTable",6
"Boston Tea Party","Harbor, Griffin, Dartmouth, Tea Chest, Sons of Liberty, Taxation, Sam Adams",5
"Botanical Extracts","Resinoid, Absolute, Oleoresin, Infusion, Distillate, Tincture, Hydrosol",6
"Box Office","Gross, Weekend, Tentpole, Multiplier, Revenue, Profit, Admissions, Commercial",4
"box office flops","Ishtar, Gigli, Waterworld, Cats, Stealth, Pluto Nash",4
"Branding","Identity, Tagline, Trademark, Logo, Typeface, Pantone, Kerning",5
"BRINE PRESERVATION","Pickling, Curing, Kimchi, Olives, Capers, Sodium, Hypersaline, Mineral",6
"British Empire","Victoria, Colonies, Navy, East India, Raj, Dominion, Crown, Commonwealth, Monarchy, Parliament",5
"british literature","Hamlet, Middlemarch, Jane Eyre, Ivanhoe, Macbeth",6
"Buds","Shoots, Dormancy, Meristem, Nodes, Sprouting, Scales, Vegetative, Embryonic",4
"Burrows","Sett, Warren, Lodge, Holt, Aggregation, Hierarchy, Stampede, Grazing",5
"BUSINESS STRUCTURES","HOLDING, AFFILIATE, SUBSIDIARY, PARTNERSHIP",6
"Byzantium","Justinian, Solidus, Iconoclasm, Theodora, Orthodox, Basileus, Mosaic, Exarchate",7
"cable networks","MTV, TBS, AMC, USA, SYFY, HGTV, ESPN, Xfinity, Sky, NBC, Universal",5
"Cactus","Succulent, Desert, Prickly, Saguaro, Aloe, Arid, Xeriscape",4
"Camera Angle","Dutch Tilt, Low Angle, High Angle, POV, Eye Level, Extreme Wide, Close Up, Medium Shot, Oblique, Aerial, Subjective",6
"cancellations","Jericho, Sense8, Deadwood, Manifest, Renewals, Pick-up, Upfronts, Syndication",5
"candle makers","Paraffin, Beeswax, Stearin, Tallow, Wick, Mold",4
"Canon","Lore, Scripture, Apocrypha, Timeline, authenticity, establish, official, documentation",6
"Canopy","foliage, understory, emergent, epiphyte, photosynthesis, habitat",5
"Caption Styles","Closed, Open, CEA-608, CEA-708, Teletext, Roll-up, Pop-on, Paint-on",5
"Cartography","Mercator, Isoline, Azimuth, Projection, Datum, Longitude, Latitude, Equator, Meridian, Scale",6
"Cassette","Capstan, Spool, Roller, Hubs, Window, LEADER, SHELL, CHROME",6
"Casting","Ensemble, Director, Talent, Role, Sides, Agency, Headshot, Typecast, Callback",5
"Cate Blanchett Films","Blue Jasmine, Elizabeth, Carol, The Aviator, Hanna, Manifesto",5
"Caterpillars","Larvae, Chrysalis, Herbivore, Prolegs, Molting, Silk, Segmented",4
"CCR (Creedence Clearwater Revival)","Proud Mary, Green River, Lodi, Commotion, Molina",4
"celebrity cameos","Stan Lee, Bill Murray, Matt Damon, Tom Cruise, Ed Sheeran",4
"Celestial Nodes","Horizon, Zenith, Nadir, Azimuth",4
"Cello","ENDPIN, FINGERBOARD, TAILPIECE, F-HOLE",5
"central europe","Austria, Poland, Germany, Hungary, Slovakia, Czechia",4
"CEO","Nadella, Pichai, Bezos, Cook",4
"Cephalopoda","Octopus, Squid, Nautilus, Cuttlefish",4
"CFO","Ledger, EBITDA, Audit, Capital, Revenue, Porat, Hood, Maestri, Kress",6
"CGI Milestones","Avatar, Gollum, Toy Story, Jurassic, Thanos, Shrek, Rendering, Modeling, Texture, Wireframe, Shaders",5
"Championship","Trophy, Parade, Pennant, Ring, Pinnacle, Prestige, Triumph, Laurels, Coronation",5
"character actors","Sideways, Barton Fink, Adaptation, The Fly, Buscemi, Giamatti, Turturro, Tucci, Dafoe, Walken",6
"character design","Silhouette, Palette, Costume, Archetype, Pose, Maquette, Rigging, Anatomy, Turnaround, Thumbnail",5
"CHARIOT RACING","CIRCUS, SPINA, META, AURIGA, QUADRIGA, FACTION, Chariot, Mappa",6
"chemical cleaning","Acetone, Benzene, Ammonia, Toluene, Xylene, Bleach",4
"chemical products","Polymer, Solvent, Reagent, Ethylene",6
"Chess Tactics","Skewer, Fork, Pin, Deflection, Overload, Discovery",7
"Childbirth","Epidural, Dilation, Placenta, Oxytocin, Midwife, Doula, LABOR, BREECH",5
"children’s educational puppetry","MUPPETS, BARNEY, FRAGGLE ROCK, TELETUBBIES, Big Bird, Elmo, Grover, Kermit",5
"Christian Bale Films","Hostiles, Equilibrium, Vice, The Fighter, Rescue Dawn, Little Women",5
"Christopher Nolan Films","Tenet, Dunkirk, Interstellar, Following, Oppenheimer",6
"Cinema","IMAX, Multiplex, Drive-In, Nickelodeon, Auditorium, Projector, Cinematography, Box office, Feature film",4
"Cisco Networking Series","Webex, Meraki, Catalyst, Nexus, Firepower, Jabber",5
"Citigroup","Citibank, Banamex, Diners Club, Citigold, ThankYou, Phibro",6
"civic institutions","Tribunal, Archive, Guildhall, Lyceum, Library, Chancery",6
"CIVIC STRUCTURES","ROSTRA, BASILICA, TEMPLE, PORTICO, TABULARIUM",6
"Civil Rights Movement","SELMA, JIM CROW, MALCOLM X, ROSA PARKS, Segregation, Integration, Boycott, Activism, Protest",5
"Civil War","Antietam, Sumter, Muskets, Bayonets, Ironclads, Vicksburg, Appomattox, Confederacy, Secession, Gettysburg",4
"Claire Danes","Homeland, Stardust, Temple, Fleishman, My So-Called, Romeo",5
"Clarinet","Barrel, Lower joint, Upper joint, Register key",6
"classic animation archives","CELS, ACETATE, LIGHTBOX, MULTIPLANE, ZOETROPE, ROTOSCOPE, Nitrate, Dopesheet, Platen, Moviola",7
"classic film restoration","Criterion, Janus, Photoplay, Cineteca, Cellulose, Emulsion, Vinegar, Splice",7
"Classic Theme Songs","Skyfall, Ghostbusters, Footloose, Flashdance, Fame, Let It Go",5
"Classical","Haydn, Beethoven, Clementi, Salieri, Sonata, Concerto, Orchestra, Harmony",4
"classical acting","Soliloquy, Pentameter, Declamation, Prosody, Rhetoric, Diction, Elocution",6
"Classical Symphony Nicknames","Eroica, Jupiter, Pastoral, Surprise, Pathetique, Resurrection, Clock",6
"Cleats","Studs, Spikes, Blades, Molded, Traction, Protrusion",5
"climate regions","Tundra, Savanna, Steppe, Taiga, Chaparral, Tropical, Arid, Temperate",5
"Coastline","Shoreline, Archipelago, Estuary, Peninsula, Cliff, Inlet",4
"CODA","Ruby, Frank, Jackie, Leo, Rossi, Fishing, ASL",6
"Cold front","Occluded, Squall, Trough, Frontolysis, Boundary, Air mass, Inversion",6
"cold opens","COUCH GAG, CHALKBOARD, COLD START, TEASER",6
"Cold War","KGB, CIA, Sputnik, Containment, Proxy, Berlin Wall, Communism, Ideology, Iron Curtain, Blockade",5
"College","BURSAR, TENURE, PROVOST, ALUMNI, QUAD",4
"cologne","Drakkar, Sauvage, Aventus, Eternity, Fahrenheit",4
"Colonization","British, Spanish, French, Dutch, Imperialism, Annexation, Hegemony, Expansionism",6
"Columbus Day","Nina, Pinta, Santa Maria, October, Navigator, Voyage, Discovery, Expedition, Vessel",4
"Comcast","Xfinity, Sky, NBC, Universal",4
"Comedy","Airplane, Superbad, Borat, Clueless, slapstick, irony, caricature, farce, parody, absurdity",4
"communications","Telegraph, Satellite, Fiber, Radio, Semaphore",4
"COMPACT DISC ANATOMY","PIT, LAND, LASER, JEWEL, BOOKLET",4
"Competition","REGATTA, DERBY, OLYMPIAD, TRIATHLON, Rivalry, Contest, Adversary, Opponent, Challenge, Stakes",4
"competition shows","Top Chef, The Voice, Drag Race, Bake Off",4
"COMPETITIVE GAMING RANKS","BRONZE, SILVER, GOLD, MASTER, CHAMPION",5
"Composer","MOZART, WAGNER, CHOPIN, VIVALDI, BRAHMS, LISZT, Score, Notation, Opus",5
"Compost","decomposition, organic, mulch, microbes, aeration",5
"Concept Cars","Furai, Egoista, Birdcage, Prophecy, C-X75, N Vision 74, Modulo, Testudo, Aerovette, Sixteen",6
"Conditioning","Endurance, Stamina, Regimen, Fitness, Preparation, Recovery, Drill, Intensity",5
"Conductor","BERNSTEIN, KARAJAN, TOSCANINI, SOLTI, Maestro, Podium, Tempo",6
"Confederacy","Richmond, Secession, Sumter, Davis, Dixie, Jackson, Rebel, Beauregard, Robert E. Lee",5
"CONSTANTINIAN DYNASTY","Constantine, Constantius, Constans, Crispus, Julian",6
"Constitution","Preamble, Article, Amendment, Ratify, Delegate, Parchment, Jurisdiction, Codification, Legislative",5
"Consumer","Herbivore, Carnivore, Omnivore, Detritivore",4
"consumer electronics","Walkman, iPhone, Kindle, Discman, Polaroid",4
"content ratings","TV-Y7, TV-PG, TV-14, TV-MA, TV-G, TV-Y",5
"Continental Army","Musket, Bayonet, Steuben, Lafayette, Knox, Valley Forge, Enlistment, Regiment, Provisioning",6
"Continuity","CLAPPERBOARD, SCRIPTY, POLAROID, EYELINE, Retcon, Coherence, Consistency",6
"Contract","Stipulation, Guarantee, Obligation, Term, Salary, Buyout, Clause, Option",6
"Convertibles","Roadster, Spider, Cabriolet, Targa, Barchetta, Speedster, Volante, Drophead",4
"COO","Sandberg, Williams, Shotwell, Olivan, Logistics, Workflow, Inventory, Backlog, Procurement, Fulfillment",6
"Coral","Polyp, Zooxanthellae, Bleaching, Calcification, Cnidarian, Staghorn, Elkhorn, Brain, Pillar, Fire, Fan",4
"correspondence","Postcard, Airmail, Stationery, Envelope, Telegram, Epistle, Aerogram, Missive",6
"Coupes","911, Berlinetta, Supra, Celica, Scirocco, Mustang, Camaro, Firebird, Cougar, Prelude",5
"Cover","HURT, RESPECT, GLORIA, VALERIE",4
"craftsmanship","Dovetail, Marquetry, Joinery, Filigree, Gilding, Burnish, Mortise, Tenon, Gouge",5
"creation","Genesis, Big Bang, Synthesis, Hatching, Demiurge, Pangu, Enuma Elish",5
"CREATIVE DESIGN STUDIOS","PENTAGRAM, IDEO, FROG, LANDOR",6
"Crime","Goodfellas, Fargo, Scarface, The Town, Casino, Sicario, Felony, Perpetrator, Investigation, Evidence",4
"crime dramas","Breaking Bad, Narcos, Gomorrah, Broadchurch, Ozark",5
"crop cycles","Fallow, Rotation, Harvest, Sowing, Legume, Tillage, Yield, Intercrop, Stubble",5
"Crop Rotation","Clover, Turnip, Barley, Nitrate, Alfalfa, Sorghum, Legumes",6
"CRT televisions","Trinitron, Scanline, Cathode, Shadow Mask, Phosphor, Electron Gun",6
"cuisine regions","Cantonese, Szechuan, Tuscan, Provencal, Bavarian, Hunan, Oaxacan, Basque, Creole, Punjabi",5
"culinary arts","Julienne, Flambe, Saute, Blanch, Deglaze, Braise, Mirepoix, Ganache, Confit",5
"Cult Classic","The Room, Eraserhead, Heathers, Donnie Darko, Repo Man, Troll 2, Fandom, Sleeper, Campy, Niche, Brazil",6
"Currents","Thermohaline, Gyre, Upwelling, Convection, Velocity, Hydrodynamics",5
"Cyclone","Isobar, Mesocyclone, Coriolis, Anticyclone, Circulation, Supercell, Centripetal, Anemometer, Nargis, Amphan, Idai",6
"Cytoplasm","Ribosome, Vacuole, Lysosome, Plastid",6
"Daniel Day-Lewis Films","The Boxer, Nine, Eversmile, The Crucible, My Left Foot",6
"data storage","RAID, Floppy, Tape, Diskette, Flash",4
"David Chase","The Sopranos, Carmela, Dr. Melfi, Rockford, Kolchak",7
"David Fincher","Alien 3, Seven, The Game, Fight Club, Panic Room, Mank, Gone Girl, Zodiac, The Killer",7
"Declaration of Independence","Hancock, Philadelphia, Liberty, Unalienable, GRIEVANCES, EQUALITY, PURSUIT, HAPPINESS",6
"Deep Sea","Abyss, Benthic, Trench, Bioluminescence, Pressure, Hadal, Anglerfish, Fangtooth, Hatchetfish, Viperfish",5
"Defense","Protection, Guardian, Safeguard, Shield, Fortification",4
"Denis Villeneuve","Sicario, Prisoners, Incendies, Enemy, Maelstrom, Dune",7
"desert irrigation","Qanat, Falaj, Drip, Center Pivot, Noria, Aquifer, Shaduf, Acequia",7
"desert lizards","Gila Monster, Chuckwalla, Horned Toad, Agama, Skink, Monitor",4
"Dew","condensation, moisture, humidity, precipitation, evaporation, droplet, saturation",4
"Dick Wolf","SVU, Chicago Fire, Chicago P.D., FBI, Conviction, LAW & ORDER, COLD JUSTICE",7
"digital effects","Keying, Rendering, Raytracing, Wireframe",4
"digital stunts","Bullet Time, Wire Removal, Motion Cap, Face Swap",5
"Director","Vertigo, Psycho, Rebecca, Notorious, Vision, Blocking, Storyboard, Montage, Perspective",4
"Disco","Bee Gees, Chic, Abba, Boney M, Studio 54, Mirrorball, Lycra",4
"Distribution","Fulfillment, Carrier, Consignee, Consignor, Export, Import",5
"Documentary","Baraka, Shoah, Blackfish, Hoop Dreams, Man on Wire, Non-fiction, Interview, Expose, Verite",4
"docuseries","Cosmos, Tiger King, The Jinx, Blue Planet, Planet Earth, The Keepers, Evil Genius",6
"Domestics","Chevrolet, Chrysler, Cadillac, Pontiac",5
"Dominic West","The Affair, McNulty, The Crown, 300, Colette, Tomb Raider",6
"DRAGONFLY GROUPS","SKIMMER, DARNER, HAWKER, CHASER, GLIDER, EMERALD",5
"Draft","Combine, Lottery, Warroom, Scouting, Selection, Eligibility",6
"Drama","Mad Men, Succession, Sopranos, The Wire, protagonist, catharsis, pathos, tension, conflict",4
"drive-in theaters","Speaker, Concession, Projector, Marquee, Carhop, Hatchback, Intermission",5
"Drizzle","Mist, Sprinkling, Droplets, Overcast, Shower",4
"Drought","Aridity, Desiccation, Scarcity, Irrigation, Parched, Dustbowl",6
"Dubstep","WOBBLE, SUBBASS, SKRILLEX, BURIAL, CROYDON, DROP, Skream, Kode9, Mala",6
"Dynamics","Inertia, Friction, Momentum, Velocity, Torque, Forte, Piano, Crescendo, Diminuendo, Sforzando",7
"early childhood classrooms","Easel, Cubby, Smock, Blocks, Abacus, Flashcards",4
"Early Colonization","Mayflower, Jamestown, Plymouth, Roanoke",6
"early electrical workshops","Leyden Jar, Rheostat, Inductor, Dynamo, Ammeter, Tesla Coil, Menlo Park, Wardenclyffe, Pearl Street",6
"ecology","Biosphere, Symbiosis, Habitat, Niche, Biome, Xerophyte, Riparian, Benthic, Ecotone",6
"ECommerce","Shopify, Magento, Stripe, Etsy, Checkout",4
"Ecosystem","consumer, decomposer, organism, population, producer, DETRITUS, BIOME, NICHE",5
"Editing","Crosscut, Dissolve, Wipe, Splice, Continuity, Jump cut, Transition, Splicing, Smash Cut",5
"egyptian gods","Horus, Thoth, Bastet, Sekhmet, Amun, Hathor, Ra, Osiris, Isis",4
"Egyptians","Cleopatra, Nefertiti, Akhenaten, Ramses, Khufu",4
"Electrical Distribution","Grid, Transformer, Substation, Feeder, Insulator, Bushing, Busbar, Switchgear",6
"Electrical Measures","Voltage, Current, Wattage, Ohm",4
"Electronic","Kraftwerk, Daft Punk, Aphex Twin, Moog, Roland, Vocoder, Theremin",4
"Elisabeth Moss","Handmaid, Top of Lake, Shirley, The Square",6
"Elevators","Pulley, Shaft, Governor, Sheave, Buffer, Hoist",4
"Eli Lilly","Prozac, Mounjaro, Humalog, Cialis",6
"Ellis Island","Registry, Ferry, Dormitory, Statue, Manifest, Hospital, Immigrant, Inspection, Gateway",5
"emergency response teams","Paramedic, Firefighter, Smokejumper, Hazmat, Coast Guard, SWAT, Rescue Squad, FEMA, HELITACK, LIFEGUARD",6
"Emma Thompson","Brave, Matilda, Cruella, Wit",5
"Emmy Awards","Statuette, Primetime, Daytime, Regional, Telecast, Television, Scripted, Nominee",4
"end credits","Crawl, Outtakes, Logos, Postscript",4
"Endurance","Fortitude, Tenacity",6
"ensemble casts","Magnolia, Short Cuts, Gosford Park, Traffic, Crash, Nashville, Snatch",5
"environmental disasters","Fukushima, Bhopal, Deepwater, Exxon Valdez, Dust Bowl, Love Canal, Minamata",5
"EP","SINGLE, ALBUM, MIXTAPE, REMIX, Single, Discography, Mastering, Vinyl, Extended Play",6
"Equipment","Apparatus, Inventory, Paraphernalia, Utility, Supplies, Maintenance",4
"Ernest Hemingway","Bullfight, Cuba, Key West, Paris, Matador, Marlin, Hadley",4
"Erosion","abrasion, corrasion, degradation, denudation, runoff, sedimentation, weathering, Attrition, Deflation",6
"Ethics","Deontology, Hedonism, Stoicism, Nihilism, Egoism, Virtue, Scruple, Integrity, Justice",5
"Executive","CMO, CTO, CLO, CISO, CEO, CFO, COO, Board, Shares, Vision",6
"Expedia Group Assets","Orbitz, Trivago, Vrbo, Hotwire",4
"Exploration","Vinland, Greenland, Iceland, Skraeling, Knarr, Sunstone, Astrolabe, Sextant, Caravel",5
"Expository Formats","Abstract, Monograph, Manual, Encyclopedia",5
"extended editions","Watchmen, Alexander, Kingdom, Troy, Fellowship, Leon, Das Boot",6
"External Tree Anatomy","Bark, Phloem, Xylem, Cambium",4
"Fall of the Soviet Union","Perestroika, Berlin Wall, Solidarity, Dissolution, Democratization, GLASNOST, YELTSIN, COUP",6
"FAMOUS BUCCANEERS","Edward Teach, Henry Morgan, Anne Bonny, Mary Read, William Kidd, Stede Bonnet, John Fenn",6
"fan campaigns","SaveLucifer, SaveManifest, SixSeasons, SaveSense8, RenewAnne, SaveWarrior, Browncoats, SnyderCut",6
"fan forums","REDDIT, TUMBLR, DISCORD, 4CHAN, FANDOM, NEOGAF",6
"Fantasy","Willow, Excalibur, Krull, Legend, Labyrinth, The Hobbit, Stardust, Eragon, mythology, sorcery, quest, prophecy, The Witcher",4
"Ferns","Fronds, Fiddleheads, Rhizomes, Woodlands, Pteridophytes, Sporangia, Vascular, Spore, Sorus, Crozier",5
"festival circuits","Sundance, Cannes, Berlinale, Telluride, Locarno, Venice, SXSW, Tribeca",6
"feudal systems","Fiefdom, Serfdom, Vassalage, Manorial, Demesne, Liege, Fealty, Bailiff",6
"FIELD OFFICIALS","REFEREE, UMPIRE, OFFICIAL, LINESMAN, Marshal, Steward",6
"film grain","Celluloid, Emulsion, Halation, Gate Hair",6
"Finals","Showdown, Tiebreaker, Matchup, Decider, Finale, Culmination, Climax, Conclusion",4
"fine dining restaurants","Noma, Alinea, Per Se, Le Bernardin, The Fat Duck, El Bulli, Sommelier, Degustation, Aperitif",5
"fjord landscapes","Geiranger, Sognefjord, Hardanger, Lysefjord",4
"Flag Day","Stars, Stripes, Old Glory, Betsy Ross, Banner, Patriotism, Standard, Salute",4
"flamenco music","Bulerias, Solea, Fandango, Compas, Zapateado, Toque, Cante, Palmas, Guitarra, Duende, Castanets",5
"Flashback","Analepsis, Backstory, Memory, Reminiscence, Nonlinear, Anachrony, Exposition, MEMENTO, RASHOMON, LOST",5
"Fleetwood Mac","Dreams, Rhiannon, The Chain, Little Lies, Gypsy, Tusk, Sara, Everywhere",4
"Flood","Deluge, Inundation, Overflow, Torrent, Spillage, Drainage, Submerge, Embankment, Levee",4
"Floral Anatomy","Petals, Sepals, Stamens, Pistils",4
"Flute","EMBOUCHURE, FOOTJOINT, HEADJOINT, G-KEY, Lip plate",5
"Folk","Bluegrass, Skiffle, Americana, Zydeco, Acoustic, Ballad, Troubadour, Mandolin, Guthrie, Baez, Seeger",5
"food production","Silo, Thresher, Milking, Pasteurize, Hydroponics, Aquaponics, Harvester, Greenhouse, Plow",5
"Football Game Phases","Offense, Defense, Kickoff, Punt",4
"Football Scoring","Safety, Field Goal, Conversion, Extra Point",4
"Forecast Indicators","Pressure, Forecast, Isobar, Barometer, Altimeter, Outlook, Meteorologist, Doppler, Satellite, Hygrometer, Anemometer",4
"Formula One","Silverstone, Monaco, Monza, Suzuka, Ferrari, McLaren, Paddock, Williams",5
"Founding Fathers","Delegate, Framer, Federalist, Aristocracy, Convention, Intellect, HAMILTON, FRANKLIN, JEFFERSON, WASHINGTON, HANCOCK, ADAMS",5
"Franchise","Marvel, James Bond, Harry Potter, Batman, intellectual property, conglomerate, licensing, media, syndicate",5
"franchise television","CSI, NCIS, STARGATE, DOCTOR WHO",6
"Franklin Roosevelt","Fireside, Yalta, Infamy, Polio, Lendlease, Newdeal, President, Democrat, Leadership",4
"Free Agent","Market, Availability, Signing, Option, Waiver, Agency, Status",6
"Freedom","Autonomy, Franchise, Suffrage, Charter, Sovereignty, Exemption, Choice, Privilege, Emancipation",4
"Frey","Skidbladnir, Gullinbursti, Gerdr, Alfheim",6
"Frida Kahlo","Diego Rivera, Casa Azul, Surrealism, Monkey, Parrot, Tehuana, Unibrow, Two Fridas, The Frame",5
"Frontier","Outpost, Territory, Stockade, Trapper, Scout, Unexplored",5
"Frozen Precipitation","Graupel, Pellets, Stones, Concretion, Ice, Accretion, Slush, Hail",4
"Fungi","Mycelium, Hyphae, Decomposers, Symbiosis, Sporocarp, Chitin, Saprobes, Basidiomycota, Mycorrhiza, Agaric",6
"Funk","Parliament, Funkadelic, Zapp, Cameo, Ohio Players, Isley, Meters, Bootsy",5
"Gene Hackman","Hoosiers, The Firm, Crimson Tide, Get Shorty, No Way Out",5
"Gene Wilder Movies","Hanky Panky, Another You, Rhinoceros, Woman in Red",5
"Genre","Techno, Reggae, Samba, Grunge, Polka, Calypso, Classification, Category, Movement, Taxonomy",4
"geographic regions","Balkans, Caucasus, Maghreb, Levant, Oceania, Anatolia, Sahara, Siberia, Amazonia, Patagonia, Himalaya",5
"Gettysburg","Pickett, Meade, Seminary, Cemetery, Longstreet, Buford, Culp, Infantry",6
"Glenn Close Films","The Wife, Albert Nobbs, The Paper, The Natural",5
"Global Aerospace Companies","Airbus, Lockheed, Embraer, Northrop, Cessna",4
"GLOBAL CORPORATIONS","APPLE, TOYOTA, DISNEY, BOEING, PFIZER",4
"Global Grasslands","Prairie, Steppe, Pampa, Veldt",4
"Globalization","WTO, NAFTA, BRICS, Schengen, Tariff, Offshoring, Outsourcing, Diaspora",7
"GOAT","Titan, Immortal, Luminary, Pantheon, Icon, Legend, Greatest",5
"Golden Globes TV","HFPA, Musical, Miniseries, Comedy, Open Bar, Association, Trophy",5
"Goldman Sachs","Marcus, Apple Card, GreenSky, Ayco",6
"Gospel","Spiritual, Tabernacle, Hymnal, Jubilation, Redemption, Choral, Choir, Hymn, Praise, Revival, Mahalia, Jubilee",6
"Grasslands","Prairie, Pampas, Veld, Llanos, Rangeland",4
"Gratitude","Tribute, Offering, Benediction, Doxology, Homage, Appreciation, Blessing, Indebtedness, Generosity",4
"Great Depression","Dustbowl, Hooverville, Breadline, Shanty, Okies, Unemployment, Stock Market, Economic, Bankruptcy",4
"Greeks","Socrates, Plato, Pericles, Homer",4
"Green Book","Tony Lip, Dr Shirley, Kentucky, Cadillac, Guide, Letters",5
"Greenhouse","carbon, emission, infrared, methane, radiation, warming, Frame, Vents, Benches, Glass",5
"Gridiron Defense","Sack, Blitz, Intercept, Fumble",5
"grooming kits","Trimmer, Tweezers, Razor, Styptic, Pumice",4
"Groundhog Day","Phil, Shadow, Burrow, Winter, Prediction, Rodent, Folklore, Punyszutawney",4
"Gulf","Basin, Geography, Current, Mexico, Persian, Oman, Aden, Guinea, Alaska",5
"Hadrian","Antinous, Sabina, Tivoli, Wall, Villa",6
"Hand-Cranked Boring Tools","Auger, Bit Brace, Eggbeater, Breast Drill, Winch, Grinder, Sharpener",5
"handwritten letters","Postmark, Inkwell, Quill, Calligraphy, Signature, Stationery",4
"Hannah barbera","Flintstones, Jetsons, Yogi Bear, Magilla, Top Cat, Dynomutt, Huckleberry",4
"Hard Rock","Sabbath, Aerosmith, Scorpions, Kiss, Rush, Distortion, Power Chord, Arena, Feedback, Zeppelin, Purple, Marshall",5
"HARMONICA VARIETIES","DIATONIC, CHROMATIC, TREMOLO, REEDPLATE, Comb, Slider",5
"Harmony","CHORD, TRIAD, INTERVAL, CONSONANCE, Concord, Resonance, Euphony, Unison, Synergy, Diatonic, Resolution",5
"Hat Trick","Achievement, Consecutive, Triple, Hockey, Pitch, Scoring, Soccer",6
"Hatchbacks","Golf, Civic, Clio, Pulsar, Cooper, Veloster, Fiesta, Yaris, Impreza, Gremlin",5
"Healthcare","Medicaid, Medicare, Premium, Copay, Deductible, PPO, HMO",5
"Healthy","Fit, Strong, Robust, Vigorous, Well, Nourished, Thriving, Resilient, Active, Wholesome",5
"Heatwave","Scorch, Swelter, Isotherm, Hyperthermia, Stagnant, Solar, Dehydration, Thermal, Insolation, Heatstroke",5
"Helen Keller","Sullivan, Braille, Water, Radcliffe, Alabama, Tuscumbia",4
"Herds","ungulates, aggregation, hierarchy, stampede, grazing, sociality",4
"HIBERNATION","TORPOR, DORMANCY, ESTIVATION, DENNING, MARMOT",4
"Hiring","Resume, Interview, Recruiter, Sourcing, Referral",4
"historical periods","Paleolithic, Neolithic, Cretaceous, Triassic, Holocene, Renaissance, Victorian, Edwardian, Baroque, Regency",6
"Hitchcock","Frenzy, Marnie, Topaz, Lifeboat, The Birds, NOTORIOUS, REAR WINDOW",6
"Hockey Penalties","Hooking, Slashing, Tripping, Roughing",4
"Home Field","PITCH, COURT, DIAMOND, GRIDIRON, Advantage, Venue, Crowd Noise, Familiarity, Stadium, Turf",4
"Home Run","grand-slam, outfield, diamond, bleachers, slugger, walk-off, rounding-bases, swing",4
"Horizon","Skyline, Vista, Distance, Sunrise, Sunset",4
"HOROLOGICAL INSTRUMENTS","PENDULUM, SUNDIAL, ESCAPEMENT, CLEPSYDRA, HOURGLASS",4
"Horror","Suspiria, Halloween, Hellraiser, Poltergeist, Alien, Scream, macabre, supernatural, jump scare, occult",4
"horror TV","Chucky, Hellbound, Slasher, Salem, Grotesquerie",6
"Hot Rods","Deuce Coupe, Lead Sled, T-Bucket, Highboy, Rat Rod, Gasser, Flathead",6
"House","GARAGE, FRANKIE, ACID, DEEP, Knuckles, Phuture, Trax, Hardrive",5
"Human Resources","Benefits, Payroll, Retention, Wellness, Conduct, Pension, Training, Policy, Interview, Recruiter",6
"Humidity","Hygrometer, Dewpoint, Transpiration, Psychrometer, Vaporization",5
"Hungry","Starving, Famished, Ravenous, Peckish, Empty, Voracious, Insatiable, Hollow, Greedy, Craving",5
"Hybrids","Prius, Insight, Volt, Ioniq, Clarity, Niro",4
"Hydrological Extremes","Flood, Drought, Inundation, Deluge, Torrent",5
"Iconic Arenas","Colosseum, Wembley, Saitama, Sphere",4
"Immigration","Passport, Visa, Steerage, Border, Customs, Migrant, Asylum, Naturalization",4
"Imports","Honda, Nissan, Mazda, Subaru, Skyline, Lancer, NSX, GTR",5
"Inauguration Day","Capitol, Oath, January, Podium, Ceremony, Procession, Address, Bible",5
"Incandescent Bulbs","Filament, Tungsten, Argon, Edison, Vacuum",4
"Innovation","Patent, Incubator, Venture, Ideation, Disruption",5
"Internet Traffic","Packet, Bandwidth, Latency, Payload, Routing",6
"Intertidal Species","Barnacle, Limpet, Anemone, Chiton, Mussel, Whelk, Urchins",5
"J.J. Abrams","Alias, Fringe, Super 8, Cloverfield",5
"Jackie Gleason","The Hustler, Ralph, Kramden, Buford, Gigot",5
"James Madison","FEDERALIST, MONTPELIER, VIRGINIA, DOLLEY, CONSTITUTION, Secretary of State, War of 1812",5
"Jazz","Bebop, Ragtime, Fusion, Swing, Modal, Cool, Standards, Coltrane, Parker, Monk, Scat",5
"Jean-Paul Belmondo","Pierrot, Le Doulos, Stavisky, Alphaville",6
"Jellyfish","Medusa, Nematocysts, Mesoglea, Zooplankton, Bell, Sting",4
"Jimi Hendrix","Stratocaster, Feedback, Woodstock, Monterey, Seattle, Wah-wah, Fuzz Face",4
"John Adams","Abigail, Quincy, Federalist, Braintree, Ambassador, Diplomat, Vice-President, Lawyer",4
"Johnson & Johnson","Tylenol, Band-Aid, Aveeno, Motrin",5
"Joss Whedon","Buffy, Serenity, Dollhouse, Avengers",6
"Juneteenth","Galveston, Jubilee, Emancipation, Texas, Freedom, Ancestry, Proclamation, Liberation",4
"KART RACING MECHANICS","DRIFT, SLIPSTREAM, DRAFTING, MINI TURBO, POWER SLIDE, ROCKET START",5
"KART RACING TRACK ELEMENTS","BOOST PAD, ITEM BOX, FINISH LINE, RAMP, BANANA PEEL",4
"Kathryn Bigelow","The Loveless, Near Dark, Blue Steel, Point Break, Strange Days",7
"Kelp Anatomy","Holdfast, Stipe, Blade, Frond, Pneumatocyst, Canopy, Algae",5
"Keyboard","IVORIES, SUSTAIN, HAMMER, KEYBED, DAMPER, PEDAL",4
"Kroger","Ralphs, Frys, Harris, Teeter",4
"La La Land","Sebastian, Seb's, Jazz, Tap, Planetarium, Rialto, Freeway, Pier",5
"Laboratory Equipment","Pipette, Beaker, Scalpel, Tripod",4
"Late Night","Carson, Letterman, Conan, Leno, Fallon, Kimmel, Colbert, Nocturnal, Broadcast, Sidekick",4
"LATE-NIGHT ADULT DRAMAS","TAXICAB, LINGERIE, EUPHORIA, BEDTIME",5
"Latin","RUMBA, MAMBO, TANGO, MERENGUE, BOLERO, Ablative, Genitive, Dative, Vocative, Supine",4
"LATIN AUTHORS","VIRGIL, HORACE, OVID, CATULLUS",6
"laugh tracks","Canned, Sweetener, Audience, Guffaw, Laff Box, SWEETENING, CANNED AIR, GIGGLE TRACK",5
"Lavender","Aromatic, Provençal, Culinary, Distillation, Herbaceous, Calyx, MUNSTEAD, HIDCOTE, GROSSO, PROVENCE, VERA",5
"Layoffs","Furlough, Severance, Redundancy, Downsize, RIF, Package",5
"Le Mans","Mulsanne, Arnage, Porsche, Peugeot, Toyota, Michelin, Dunlop, Sarthe",7
"legal dramas","Suits, Law & Order, Matlock, Perry Mason, Damages, Ally McBeal",6
"Lewis and Clark","Sacagawea, Keelboat, Pirogue, Mandan, Shoshone, York, Seaman, Corps of Discovery, Cartography",6
"Liberty","Torch, Pedestal, Tablet, Crown, Spikes, Autonomy, Independence, Prerogative, Rights, Franchise",4
"Licensing","Royalty, Copyright, Sublicense, Exclusive",6
"Lighting","Key Light, Fill Light, Backlight, Rim Light, Chiaroscuro, Softbox, Gobo, Ambient, Diffused",4
"live streaming TV","YouTube, Twitch, Hulu, Sling, Philo, Fubo",4
"live television","SNL, Grammys, Oscars, Olympics, Simulcast, Broadcast, Telecast, On-air",5
"location shooting","Honeywagon, Basecamp, Unit Base, Reflector, Scrim, Generator, Apple Box, Sandbag, Alcatraz, Petra, Dubrovnik, Kauai, Matamata",5
"location shoots TV","Albuquerque, Vancouver, Toronto, Hawaii, BASE CAMP, UNIT MOVE, SCOUTING, CRAFTY",6
"Lockheed Martin Tactical Assets","Hercules, Blackbird, Nighthawk, Javelin, Aegis, Hellfire, Trident, C-130",6
"Logistics","Inventory, Dispatch, Tracking, Shipping, Haulage, Warehouse, Routing, Cargo, Carrier",6
"Loki","Fenrir, Hel, Jormungandr, Sigyn, Angrboda",4
"Lord of the Rings","Frodo, Gandalf, Mordor, Sauron, Aragorn, Legolas, Gimli",5
"Lorne Michaels","MacGruber, Hot Rod, Tommy Boy, Coneheads",6
"Losing Streak","Slump, Drought, Skid, Rut, Futility, Cold Spell",5
"Lowriders","Impala, Monte Carlo, Fleetline, El Camino, Caprice, Riviera, Cutlass, Bel Air, Fleetwood, Dayton",6
"Luxury Cars","Bentley, Bugatti, Maserati, Porsche",4
"Lyricist","SONDHEIM, HAMMERSTEIN, PORTER, IRA GERSHWIN, Couplet, Verse, Libretto, Gershwin, Mercer, Ashman",6
"MAGNETIC TAPE PLAYERS","CASSETTE, GUMSTICK, AUTOREVERSE, MAGNETIC",5
"Major Media Awards","Golden Globe, Emmy, Oscar, Tony",5
"Major Stadiums","Anfield, Fenway, Wrigley, Azteca",4
"Mammals","endothermic, monotremes, marsupials, lactation, vertebrae, diaphragm",4
"Management","Kanban, Scrum, Kaizen, Agile, Roadmap, Agenda, Review, Milestone",5
"Manual Torque","Wrench, Ratchet, Socket, Driver, Lever, Fulcrum, Spanner, Torsion",6
"Manufacturing","Assembly, Prototype, Casting, Tooling, Machining",5
"Maples","Acer, Samara, Syrup, Palmate",4
"marine mammals","Narwhal, Manatee, Dugong, Vaquita",4
"Marketing","Funnel, Segment, Persona, Retarget, Metric",4
"Mariska Hargitay","Benson, Lake Placid, Falcon Crest, Ghoulies",5
"Mascot","PHANATIC, GRITTY, YOUPPI, BENNY, Ambassador, Character, Identity, Persona, Symbol",4
"Mayflower","Bradford, Standish, Winslow, Brewster, Shallop, Compact, Pilgrims, Plymouth",4
"McDonaldland Figures","Ronald, Grimace, Birdie, Hamburglar, Fry Kids",4
"MECHANICAL KEYS","CHERRY, OUTEMU, KAILH, GATERON, HOUSING, Topre, Linear, Tactile, Clicky",5
"medical dramas","House, Scrubs, Chicago Med, The Resident, The Knick, M*A*S*H, Code Black",5
"Medical Professionals","Surgeon, Nurse, Dentist, Physician, Optician",5
"mediterranean cuisine","Hummus, Falafel, Baklava, Tzatziki, Couscous",4
"Mel Brooks","Spaceballs, High Anxiety, Silent Movie, Life Stinks",6
"Mercedes-Benz Model Lines","Maybach, AMG, Sprinter, G-Wagon, S-Class, E-Class",4
"Metal","Maiden, Metallica, Slayer, Anthrax, Pantera, Megadeth, Shredding, Blast Beat, Heavy, Venom",5
"MICROPHONE TYPES","CONDENSER, DYNAMIC, RIBBON, CAPSULE, DIAPHRAGM",4
"middle ages","Longbow, Trebuchet, Gauntlet, Chainmail, Cathedral, Scriptorium",4
"Migration","magnetoreception, philopatry, transhumance, ephemeral, navigation, flyway",6
"Military","PLATOON, GARRISON, ORDNANCE, BARRACKS, BATTALION, Brigade, Regiment, Division",5
"miniseries","Roots, Shogun, Chernobyl, Beef, Anthology, Limited-series, Episodes, Binge-watch",5
"mission control centers","Houston, Korolyov, Darmstadt, Tsukuba, Kourou, Beijing, Baikonur, Korolev",6
"MMA Octagon","Grappling, Striking, Tapout, Clinch",6
"Mockumentary","Spinal Tap, The Office, Best in Show, Popstar, Mascots, Deadpan",6
"Moderna","mRNA, Spikevax, Bancel, Cambridge",5
"Mongol Empire Nomenclature","Temujin, Kublai, Khanate, Horde, Mongol",4
"Monopoly","Boardwalk, Thimble, Battleship, Baltic, Chance, Community",6
"monsoon climate","Cherrapunji, Orographic, Mekong, Irrawaddy, Salween, Tradewinds, Torrent",5
"Montage","Eisenstein, Kuleshov, Dialectic, Sequence, Synthesis, Rocky, Scarface, Parasite",6
"Moon Landing","Eagle, Tranquility, Columbia, Regolith, Descent, Ascent, Crater, Module",5
"Morgan Stanley","E-Trade, Solium, Smith, Barney, Eaton Vance, Parametric, Calvert",6
"Moss","Bryophyte, Spores, Rhizoid, Dampness, Carpet, Velvet, Nonvascular",4
"motion tracking","Kinect, Gyroscope, OptiTrack, Vicon, IMU, Lidar, Keyframing, Occlusion, MoCap",6
"Mulch","Woodchips, Insulation, Groundcover, Biodegradable",5
"Multinational Oil Corporations","Chevron, Exxon, Texaco, Amoco, Castrol",5
"Muscle Cars","Mustang, Charger, Camaro, GTO, Barracuda, Chevelle",4
"MVP","Linchpin, Phenom, Paragon, Talisman, Vanguard, Ace, Accolade, Elite, Stat, Candidate",5
"Mystery","Chinatown, Seven, Zodiac, Oldboy, Gone Girl, Knives Out, Enigma, Sleuth, Deduction, Conundrum, Cipher, Forensics",4
"mystery fiction","Poirot, Marple, Holmes, Lupin, Whodunnit, Alibi, MacGuffin, Sleuth, Hardboiled",5
"mystery‑solving teams","Hardy Boys, Nancy Drew, Secret Seven, Famous Five, Boxcar Kids, Mystery Inc",4
"Named Valkyries","Brunhild, Sigrun, Gunnr, Hildr",6
"NASCAR","Daytona, Talladega, Darlington, Pocono, Bristol",4
"National Mall","Obelisk, Rotunda, Vietnam, Smithsonian, Reflecting Pool, Promenade, Lincoln, Basin",5
"Native American Nations","Mohawk, Shawnee, Seminole, Comanche, Cherokee, Navajo, Iroquois, Sioux, Apache, Choctaw",4
"NBCUniversal","Peacock, Bravo, MSNBC, Syfy, Oxygen, Telemundo, Sky, DreamWorks",5
"Nero","Agrippina, Seneca, Poppaea, Locusta, Aurea, Domus",6
"New Deal","Legislation, Social Security, Reform, Bureaucracy, Relief, Federalism",6
"Nile River","Cataracts, Lotus, Felucca, Crocodile, Silt, Aswan, Felucca, Luxor",5
"Nixon","Watergate, Kissinger, China, Agnew, Detente, Impeachment, Resignation, Silent Majority, Pardon, CHECKERS, QUAKER",5
"Non-Seed Plants","Ferns, Moss, Liverworts, Clubmoss",6
"nordic folklore","Kraken, Draugr, Nisse, Valkyrie, Jotunn, Troll, Huldra, Fossegrim, Pesta",6
"Norse Civilization","Valhalla, Midgard, Bifrost, Ragnarok, Asgard, Longship",4
"Norse Deities","Freya, Odin, Thor, Loki, Frigg, Tyr, Baldur, Heimdall",6
"Norse Realms","Helheim, Niflheim, Vanaheim, Jotunheim",6
"northern europe","Norway, Sweden, Finland, Denmark, Estonia",4
"Novartis","Gleevec, Cosentyx, Ritalin, Diovan",6
"NUMISMATIC SPECIMENS","SOVEREIGN, KRUGERRAND, DRACHMA, DOUBLOON, Shilling, Ruble",5
"Nutrients","macromolecule, minerals, nitrogen, phosphorus, potassium, vitamins, Calcium",5
"Nvidia","GeForce, Quadro, Tesla, Ampere, Turing, Kepler",4
"Oaks","Acorn, Quercus, Deciduous, Hardwood, Tannin, Lobed, Catkin",4
"OBAMA ERA","OBAMACARE, STIMULUS, SOLYNDRA, DACA, Affordable Care Act, Inclusivity, Bailout, Polarization, Bin Laden, Deepwater, Arab Spring",6
"Ocean Currents","Kuroshio, Agulhas, Benguela, Humboldt, Canary, Labrador, Gulf Stream",5
"Octagon","Geometry, Perimeter, Polygon, Vertices, Dimension, Cage, Canvas, Fence, Mat",6
"Octopus","Cephalopod, Tentacles, Chromatophores, Inking, Mollusk, Intelligence, Beak",4
"Odin","Sleipnir, Gungnir, Huginn, Muninn, Draupnir, Valknut",4
"Off Roaders","Wrangler, Defender, Bronco, G-Wagen, Humvee, Unimog, Samurai, Patrol",5
"Offense","Attack, Assault, Incursion, Aggression, Striker, Penetration",4
"Official","Functionary, Administrator, Mandate, Sanctioned, Personnel, Oversight, Formal",6
"Open Water","Pelagic, Surface, Vast, Ocean",4
"opening weekend hype","Presale, Blockbuster, Midnight, Premieres, Tentpole, Previews",5
"opera houses","La Scala, Fenice, Garnier, Colon, Bayreuth, Glyndebourne, SYDNEY, MARIINSKY",5
"Opera Titles","Carmen, Tosca, Aida, Norma, Fidelio",6
"Orchestra","VIOLIN, OBOE, TIMPANI, BASSOON, CELLO, Conductor, Philharmonic, 木管, Woodwind",5
"orchestral scores","Leitmotif, Staccato, Crescendo, Ostinato",6
"Orchids","Epiphytic, Mycorrhizal, Labellum, Pseudobulb, Monopodial, Terrestrial, Pollinia",6
"Organic Soil Amendments","Compost, Mulch, Humus, Peat",5
"Original Colonies","Virginia, Maryland, Georgia, Delaware",5
"Oscar","Parasite, Moonlight, Braveheart, Amadeus, Rocky, Ben-Hur, Academy, Cinema, Director, Costume",4
"Overcast","Gloomy, Cloudbank, Stratiform, Cumulus, Obscured, Somber, Sunlight, Coverage, Altostratus",5
"Overtime","Shootout, Tiebreaker, Stoppage, Duration, Period, Clock, Extra",5
"Packs","cohesion, canid, territory, dominance, cooperative",4
"Paid Time Off","Accrual, Vacation, Sabbatical, Sick Leave, Compensation, Benefits, Allowance, Personal",5
"Palms","Frond, Tropical, Coconut, Date, Palmetto, Arecaceae, Rattan, Cycad",4
"Paramount","CBS, MTV, VH1, Showtime",4
"Patriotism","Anthem, Banner, Allegiance, Ensign, Cockade, Heraldry, Devotion, Loyalty, Fidelity",4
"Pearl Harbor","Surprise, Naval Base, Hawaii, Decisive, Battleship, Aircraft, Infamy, Escalation, Isolationism, Embargo",5
"Pelagic Layers","Deep Sea, Open Water, Abyssal, Pelagic",5
"Penalty","Infraction, Foul, Violation, Fine, Kick, Rule, Discipline, Referee",4
"PERCUSSION SECTION","MARIMBA, XYLOPHONE, CYMBAL, SNARE",5
"performance venues","Scala, Bolshoi, Globe, Palladium, Wembley",6
"performing arts","Vaudeville, Kabuki, Burlesque, Pantomime, Flamenco, Operetta",4
"period pieces","Spartacus, The Crown, Elizabeth, Bridgerton, Amadeus, Emma, Atonement, Titanic",6
"permafrost","Talik, Pingo, Cryosol, Thermokarst, Yedoma",6
"Petals","Corolla, Blossom, Pigment, Fragrance, Nectar, Symmetry, Delicate, Sepals",4
"Pfizer","Viagra, Lipitor, Celebrex, Paxlovid",4
"Pharaoh","Cartouche, Pschent, Nemes, Uraeus, Flail, Vizier, Ramses, Khufu, Akhenaten, Cleopatra, Sarcophagus",5
"Pharmacy","SYRINGE, MORTAR, PESTLE, VIAL, Compounding, Dosage, Tincture, Capsule",5
"Philadelphia","Liberty Bell, Flyers, Eagles, Phillies, Schuylkill, Pretzel",4
"Physical Fitness Components","Conditioning, Endurance, Agility, Skill, Stamina, Strength, Balance, Power",5
"Pines","Conifer, Needle, Resin, Evergreen, Bristlecone, Ponderosa, Sap, Timber",4
"Pioneers","Log Cabin, Wagon, Settler, Boone, Crockett, Settlers, Homesteaders, Frontiersmen, Hardship",5
"PIRATE HAVENS","Tortuga, Nassau, Port Royal, Barataria",5
"PITCH","OCTAVE, FREQUENCY, CLEF, HERTZ, Interval, Semitone, Chromatic, Hertz, Falsetto, Soprano, Baritone, Tenor, Vibrato",5
"pitch competitions","Deck, Valuation, Cap Table, Seed Round, TechCrunch, Rise, Collision, Web Summit",6
"Pitching Feats","Shutout, No-Hitter, Balk, Perfect Game",5
"Plant Reproduction","Pollen, Nectar, Stigma, Anther",5
"Platform","Nintendo, PlayStation, Xbox, Sega, Portal, Console, Interface, Engine",5
"Playoffs","Series, Postseason, Seed, Elimination, Wildcard, Semifinals, Standings, Seedings, Overtime, Clutch",4
"Plot Twist","Anagnorisis, Peripeteia, Reversal, Red Herring, misdirection, bombshell, epiphany, FIGHT CLUB, THE OTHERS, GONE GIRL, OLDBOY",5
"Plug In Hybrid","Outlander, Karma, Panamera, Cayenne, Pacifica, Crosstrek, Prius Prime, Volt, Clarity, Ioniq",6
"polar regions","Arctic, Antarctic, Svalbard, Lapland, Nunavut",6
"police procedurals","Bosch, Columbo, Blue Bloods, Kojak, Dragnet",5
"Pollen","Allergen, Germination, Stamen, Anther, Dispersal, Microspore, Bees, Flora",5
"Pollination","Fertilization, Angiosperm, Cross-pollination, Entomophily, Anemophily",6
"Pollution","SMOG, RUNOFF, EFFLUENT, SOOT, SEWAGE, Methane, Benzene, Dioxin",5
"PORTABLE CD TECHNOLOGY","ANTISHOCK, MEGABASS, BITSTREAM, ANTISKIP, OPTICAL",5
"PR","Crisis, Embargo, Briefing, Presser, Pitch, Newsroom",5
"practical effects","Animatronic, Prosthetic, Miniature, Squib, Pyrotechnic, Stop Motion, Rotoscoping, Prosthetics",5
"practical makeup","Prosthetics, Silicone, Spirit gum, Molding, Latex, Hellboy, Beetlejuice, Elephant Man, Braindead, Total Recall",6
"Prairie","grassland, savanna, steppe, wildflower, meadow, ecosystem, biodiversity",4
"Predators","carnivore, stalking, camouflage, talons, ambush",4
"Premiere","Red Carpet, Limousine, Afterparty, Press Junket, Screening, Debut, Gala, Publicity, Reception, Exclusive",4
"Prequel","Prometheus, Bumblebee, Minions, Cruella, Furiosa, Ratched, Gotham, origin, background, foundation, precursor",4
"Presidents Day","Washington, Lincoln, Jefferson, Cherry Tree, February, Monday, Holiday",4
"Pressure","Atmospheric, Pascal, Barometer, Equilibrium, Altimeter, Gradient",5
"Prey","vigilance, mimicry, foraging, ruminant, sentinel",4
"Procter Gamble","Tide, Crest, Gillette, Pampers, Febreze, Charmin, Oral-B",5
"Producer","Budget, Schedule, Financing, Insurance, Logistics, Distribution, Production, Funding, Studio",5
"Production","Throughput, Backlog, Output, Capacity, Bottleneck",4
"Professional Sports Transactions","Trade, Transfer, Contract, Free Agent, Waiver, Buyout, Release, Draft",6
"protection","Bulwark, Carapace, Rampart, Shield, Cuirass, Bastion, Palisade",5
"public transit","Subway, Trolley, Monorail, Gondola, Funicular, Omnibus",4
"Punk","Ramones, Clash, Pistols, Misfits, Stooges, Damned, Fugazi, Anarchy, Mosh Pit, Fast-Tempo",5
"PUPPETRY","MARIONETTE, MUPPET, BUNRAKU, ROD, Shadow",5
"Race Cars","IndyCar, Stock Car, LMP1, NASCAR, Dragster, Kart",4
"Raids","Lindisfarne, Danegeld, Berserker, Shieldwall, Longship, Iona",6
"rail tunnels","Seikan, Gotthard, Channel, Simplon, Severn, Hoosac, Lotschberg, Frejus",5
"Railroads","Pullman, Caboose, Boxcar, Sleeper, Diesel, Tender, Freight, Roundhouse, Steam Power, Iron Horse",4
"Rally Cars","Stratos, Quattro, Impreza, Lancer, Escort",6
"Ramses","Kadesh, Pi-Ramses, Nefertari, Hittites, Sed, Ozymandias",6
"Ratings","Nielsen, Rotten, Metacritic, IMDb, Arbitron, CinemaScore, Viewership, Demographics, Metrics, Reach, Audience",5
"Reagan Era","Iran-Contra, Glasnost, Thatcher, Gorbachev, Supply-side, Deregulation, Strategic Defense Initiative, Conservatism, GRENADA, YUPPIE, CHALLENGER",6
"real locations","Alcatraz, Maya Bay, Wadi Rum, Angkor Wat, Dubrovnik, Versailles, Matmata",4
"Reboot","Remake, Revival, Sequel, Spinoff, relaunch, transformation, alteration, STAR TREK, SPIDER-MAN, EVIL DEAD, DOOM",6
"Rebound","backboard, box-out, possession, tip-in, outlet-pass, boards, glass, put-back",5
"Record","Milestone, Unbeaten, Statistics, Standing, Ranking",4
"recurring characters","Gunther, Newman, Janice, The Todd, Cricket, McPoyle, Sideshow Bob",5
"Red Card","Ejection, Dismissal, Expulsion, Suspension, Ban",5
"Reef","Atoll, Fringing, Barrier, Patch, Bank, Lagoon, Limestone, Calcareous",4
"Referee","Umpire, Whistle, Judge, Ruling, Game, Match",4
"Reggae","MARLEY, SKA, ROCKSTEADY, KINGSTON, RIDDIM, Tosh, Wailers",5
"REGIONAL TROPICAL CYCLONE NAMES","Hurricane, Typhoon, Cyclone, Baguio",6
"Regulation","Compliance, Mandate, Oversight, Sanction, Antitrust",6
"Remake","update, reproduction, recreation, version, rendition, modernizing, imitation",4
"Remembrance","Poppy, Cenotaph, Eulogy, Memento, Obituary, Epitaph, Memorial, Tribute, Legacy, Solitude, Monument",4
"Remix","DUB, MASHUP, BOOTLEG, MEGAMIX, Reinterpretation, Equalization, Soundscape, Track, Edit, Redux, Stem",5
"renaissance art","Fresco, Sfumato, Tempera, Pieta, David, Donatello, Raphael, Triptych, Chiaroscuro, Titian",5
"renewals","Back-nine, Pick-up, Upfronts, Syndication",4
"Reptiles","ectothermic, keratin, brumation, squamata, oviparous, amniotic",4
"Reptilian Integument","Scutes, Osteoderms, Lamellae, Plates, Dermis, Epidermis",4
"Republic","Senate, Statute, Elector, Citizen, Democracy, Representative, Commonwealth, Civic, Electorate, Policy, Federation, SUFFRAGE, BALLOT, ELECTION, VETO",5
"Revenue","Profit, Margin, EBITDA, Turnover, Dividend",5
"Revolution","Yorktown, Saratoga, Trenton, Lexington, Concord, Minutemen, Rebellion, Uprising, Tyranny, TEA PARTY, STAMP ACT, BOYCOTT",5
"Revolutionary War","Saratoga, Yorktown, Lexington, Militia, Patriot, Loyalist, Treaty of Paris, Concord, VALLEY FORGE",5
"Rhetorical Argumentation","Claim, Argument, Rebuttal, Ethos, Pathos",5
"Rhythm","Beat, Syncopation, Meter, Cadence, Measure, Polyrhythm, Backbeat, Groove, Offbeat, Downbeat",4
"Rivalry","Grudge Match, Derby, Nemesis, Tradition, Competition, Clash, Bad Blood, Yankees, Red Sox, Lakers, Celtics",5
"RnB","Aaliyah, Beyonce, Usher, Ginuwine, En Vogue, TLC, Ashanti, Monica",4
"Rob Reiner","Stand By Me, Misery, Flipped, North",6
"Roche","Tamiflu, Herceptin, Valium, Accutane",6
"Rockets","Saturn V, Falcon 9, Soyuz, Atlas, Ariane, TITAN",5
"Rollercoasters","Looping, Inversion, Corkscrew, Camelback",4
"Roman Civilization","Aqueduct, Legion, Forum, Toga, Patrician, Plebeian",4
"ROMAN DEITIES","MINERVA, NEPTUNE, VENUS, VULCAN",6
"ROMAN EMPERORS","AUGUSTUS, NERO, HADRIAN, TIBERIUS, AURELIAN",6
"Roman Empire","Praetorian, Denarius, Provinces, Byzantium, Caligula, Trajan, Claudius, Augustus, Nero, Tiberius, Vespasian, Legion",5
"ROMAN ENGINEERING","APPIAN, CONCRETE, ARCH, CLOACA, VIADUCT",4
"ROMAN MILITARY","GLADIUS, PILUM, COHORT, AQUILA, Centurion, Legionary, Optio, Legatus, Signifer",6
"Roman Republic","Consul, Tribune, Dictator, Carthage, Punic, Praetor, Censor, Quaestor, Aedile",6
"Romance","Casablanca, Titanic, Notting Hill, The Notebook, Closer, Ghost, Carol, Moonstruck, Courtship, Passion, Intimacy",4
"Romantic","Chromaticism, Virtuosity, Subjectivity, Expressivity, Programmatic, Lyricism, Individualism, Liszt, Wagner, Brahms, Mahler, Nocturne, Etude",6
"Rookie","Freshman, Novice, Neophyte, Greenhorn, Debut, Underclass, Debutant, Recruit, Apprentice, Prospect, Understudy",4
"Rotational Windstorms","Supercells, Twisters, Funnels, Mesocyclones, Vortices, Touchdowns",5
"Runes","Futhark, Ansuz, Fehu, Gebo, Kenaz, Thurisaz, Dagaz, Sowilo",6
"Salesforce Acquisitions","Tableau, Heroku, Pardot, Einstein, Slack, MuleSoft, Quip",6
"Saline Solutions","Brine, Halite, Saline, Seawater",6
"Salsa","CLAVE, CONGAS, TIMBALES, GUAGUANCO, MONTUNO, Celia Cruz, Fania",5
"Saplings","seedling, nursery, reforestation, propagation, transplant, arboriculture",5
"satellite TV","LNB, Transponder, Dish, Uplink",4
"Saxophone","REED, LIGATURE, BORE, TONEHOLE, NECK, MOUTHPIECE, Neck strap, Octave key, Key guard, Altissimo",5
"Scale","Richter, Mohs, Scoville, Beaufort",4
"Scarab","Amulet, Dung, Khepri, Steatite, Faience, Rebirth",6
"Sci Fi","Solaris, Dune, Stalker, Contact, Arrival, The Matrix, Blade Runner, futuristic, dystopian, nanotechnology",4
"sci-fi series","Firefly, Westworld, Expanse, Dark, Foundation, Battlestar",6
"Score","Orchestration, Leitmotif, Composer, Arrangement, Symphony, Incidental, Overture",5
"Screenplay","Treatment, Logline, Slugline, Montage, Dialogue, Parenthetical, Formatting, Narrative, Draft, Plot point",6
"Script","Courier, Dialogue, Margins, Watermark, Manuscript, Lines, Scene, Act, Teleplay, Revision, Adaptation",4
"scripted dialogue","Exposition, Subtext, Wordplay, Asides",4
"Sea Lions","CALIFORNIA, STELLER, GALAPAGOS, AUSTRALIAN, Pinniped, Otariid, Rookery, Blubber, Flippers, Marine mammal",4
"Seabirds","ALBATROSS, GANNET, PETREL, PUFFIN, TERN, GUILLEMOT, CORMORANT, Procellariiform, Migration, Ornithology, Piscivore, Fulmar, Skua, Auk",5
"Seagrass","Rhizome, Carbon sink, Posidonia, Salinity, Eelgrass, Turtlegrass, Shoalgrass, Surfgrass",6
"season finales","Felina, Mizumono, Saul Gone, Swan Song",6
"Senate","Orator, Decree, Cicero, Cato, Brutus, Pompey",5
"sensitive skin lotions","CeraVe, Cetaphil, Eucerin, Vanicream, Aquaphor, Bioderma",5
"sequels","Aliens, Desperado, Die Hard 2, Toy Story 2, Iron Man 2, Paddington 2",4
"Serenity","Mandala, Zazen, Zen Garden, Bonsai, Pagoda",4
"Settlement","Thingvellir, Danelaw, Longhouse, Jarldom, Jamestown, Plymouth, Roanoke, Quebec",5
"short films","Bao, Piper, Paperman, Feast, Lou, Hair Love, La Jetée, Logorama, Geri's Game, Knick Knack",5
"silent movie era","Wings, Sunrise, Greed, Intolerance",5
"Sitcom","Cheers, Seinfeld, Friends, Frasier, episodic, banter, pilot, recurring, satire, spoof",4
"sketch comedy","Portlandia, SCTV, The State, Mad TV, SNL, Mr. Show",6
"Sky and Thermal States","Heatwave, Overcast, Isotherm, Insolation, Albedo, Haze",5
"Slam Dunk","alley-oop, posterize, windmill, tomahawk, jam, rim-rocker, vertical, dunk-contest",4
"Slavery","Shackles, Plantation, Abolition, Manumit, Overseer, Fugitive, labor, oppression, chattel",4
"SLOW COOKING","CROCKPOT, SIMMER, STEW, CHUCK, BRISKET",4
"SMALL BUSINESS TYPES","BOUTIQUE, ARTISAN, VENDOR, AGENCY, WORKSHOP",4
"Soap Opera","Dallas, Dynasty, Passions, Hollyoaks, Erica Kane, Cliffhanger, Melodrama, Serial, Amnesia, Scandal",4
"Soccer Discipline","Red Card, Free Kick, Offside, Booking",5
"Soccer Milestones","Clean Sheet, Brace, Nutmeg, Treble",6
"soil fertility","Nitrogen, Potassium, Phosphate, Mycelium, Potash, Loam, Mulch",6
"Soil Textures","Soil, Silt, Clay, Loam",4
"Song Sections","Verse, Chorus, Bridge, Refrain, Hook, Outro, Intro, Prechorus",6
"Songwriter","DYLAN, MITCHELL, PRINCE, LENNON, MCCARTNEY, Bridge, Melody, Mitchell, Costello, Simon",5
"Soul","Aretha, Otis, Marvin, Motown, Stax, Al Green, Sam Cooke, Etta James, Wonder",5
"sound stages","Stage 15, Water Tank, Gantry, Scaffolding, Catwalk, Cyclorama, Green Screen, Soundstage, Flat, Scrim, C-stand",5
"sound stages TV","Stage 24, Stage 19, Stage 25, Culver, Radford",6
"Soundtrack","Pulp Fiction, Purple Rain, Grease, Hair, Top Gun, The Graduate, Rushmore, Garden State",5
"Space Race","Sputnik, Apollo, Gagarin, Mercury, Orbit, Astronaut, Technology, Moon Landing, VOSTOK, GEMINI, ALDRIN",5
"SpaceX","Falcon, Dragon, Starship, Starlink, Raptor, Merlin",4
"Special Effects","Animatronics, Rotoscoping, Stop Motion, Compositing, Foley, Practical, Pyrotechnics, Prosthetics, Miniatures, Squibs, Maquette",6
"Special Teams Positions","Kicker, Punter, Returner, Gunner, Holder, Snapper",6
"SPEEDRUNNING TERMINOLOGY","SPLITS, GLITCH, FRAME, WARP, CLIP, SKIP, ROUTE, TAS",6
"Spider-Man Villains","VENOM, MYSTERIO, CARNAGE, KRAVEN, VULTURE, RHINO, Electro, Sandman",5
"Spin Off","Joey, Angel, The Flash, Rhoda, Daria, Mork & Mindy, FRASIER, JEFFERSONS",5
"spoilers","SYNOPSIS, TRAILER, LEAK, SCREENCAP, RUMOR, Theories, Datamine, Reveal",5
"sports broadcasts","SportsCenter, GameDay, Hard Knocks, RedZone",4
"Stadium","Infrastructure, Capacity, Precinct, Concession, Turnstile",4
"STALINIST STATEHOOD","POLITBURO, HOLODOMOR, APPARATCHIK, COMINTERN, KREMLIN",6
"Starfish","SUNFLOWER, CHOCOLATE, LEATHER, MADREPORITE, OSSICLES, AMPULLA, Echinoderm, Regeneration, Tube feet, Radial symmetry",4
"Stats","ERA, WHIP, OBP, WAR, Percentage, Average, Data, Box Score, Leaderboard",4
"Steal","interception, pickpocket, turnover, deflection, fastbreak, possession-change, swipe",4
"Steam Boiler Instruments","Gauge, Manometer, Injector, Fusible Plug",6
"steel frameworks","Girder, Truss, I-Beam, Gusset, Purlin, Joist, Rivet, Column, Girt, Bracing",5
"Stock","Ticker, Equity, Options, Portfolio, Broker, Index",4
"Strategic Board Games","Risk, Stratego, Diplomacy, Chess",6
"Strategy","Methodology, Blueprint, Contingency, Tactical",6
"Strikeout","whiff, fastball, full-count, back-to-the-bench, swing-and-miss, pitcher, inning",5
"studio audience","Applause, Laughter, Warm-up, Bleachers, WARM-UP ACT, LIVE TAPING, RISERS",5
"studio backlots","Western Town, City Street, Brownstone, Courthouse, Back Alley, Paramount, Universal, Cinecitta, Pinewood, Elstree",6
"studio-driven films","Iron Man, Avengers, Frozen, Cars, Moana",4
"subscriber growth","Net Adds, ARPU, Churn, Penetration, Acquisition, ChurnRate, LTV",6
"Subscription","Monthly, Premium, Tiered, Billing, Recurring, Paywall",4
"subtitles TV","SRT, WebVTT, SAMI, SSA",5
"sun-baked rocks","Basalt, Obsidian, Sandstone, Quartzite, Rhyolite, Caliche",4
"Supercars","Veyron, Countach, Enzo, Huayra, Jesko, Testarossa, Diablo, Aventador, Huracan, Zonda",5
"Superman Villains","ZOD, BRAINIAC, DOOMSDAY, METALLO, BIZARRO, Darkseid",5
"Sustainability","conservation, ecological, equitable, renewable, resilience, stewardship, Photovoltaic, Geothermal, Biomass, Compost",6
"Sylvester Stallone Movies","Cobra, Daylight, Over the Top, Cop Land, Creed",4
"Symphony Nicknames","Eroica, Jupiter, Pastoral, Surprise, Clock, Pathetique, Resurrection",6
"symphony orchestras","Berliner, Gewandhaus, Philharmonia, Cleveland, Boston",6
"Synoptic Fronts","Cold front, Warm front, Occlusion, Frontogeny, Dryline",6
"Synthesizer","OSCILLATOR, FILTER, ENVELOPE, SEQUENCER, RESONANCE",6
"Tackle","sack, wrap-up, takedown, linebacker, collision, backfield, impact, blitz",5
"talk shows","Donahue, Ricki Lake, Geraldo, Maury",4
"taped television","Jeopardy, Wheel, Survivor, Oprah",4
"tasting menus","Amuse-bouche, Mignardise, Consomme, Granita, Petit Four, Intermezzo, Degustation, Omakase, Flight, Pairing, Cleanser, Sorbet",6
"Teaser","Bumper, Stinger, One-sheet, Standee, Trailer, Promotional, Snippet, Hype, GLIMPSE, PREVIEW",4
"technology era","Industrial, Digital, Information, Space, Electronic, Mechanical, Bronze",6
"teen dramas","Skins, Glee, Riverdale, Degrassi, Gossip Girl, Elite",4
"Telecommunication","Ethernet, Antenna, Modem, Signal, Wireless, Router, Telex, Fiber, Satellite",5
"Telenovela","Marimar, Rebelde, Rubi, Betty la Fea, Vengeance, Antagonist, Heartache, Rosalinda, Gata Salvaje",5
"television critics","Sepinwall, Mo Ryan, Tim Goodman, Poniewozik, Ken Tucker, Greenwald, Nussbaum",6
"TEMPO","ADAGIO, ALLEGRO, PRESTO, LARGO, BPM, Moderato, Andante, Metronome, Vivace, Accelerando",5
"Textual Anatomy","Subheading, Header, Sidebar, Caption, Footer",4
"The Digital Age","Broadband, Silicon, Pixel, Cloud, Browser, Algorithm, Byte",4
"The Jeffersons","George, Louise, Weezy, Florence, Lionel, Tom Willis, Helen Willis, Dry Cleaner, East Side, Bentley, Willis",6
"the pacific islands","Fiji, Samoa, Tonga, Tahiti, Guam, Palau, Nauru, Tuvalu",4
"Theme Song","Skyfall, Moon River, Let It Go, Footloose",5
"theme songs","Teardrop, Bad Boys, Boss of Me, Low Rider",4
"Theodore Roosevelt","Roughrider, Bullmoose, Panama, Bigstick, Trustbust, Sagamore, National Parks, Square Deal",4
"Thomas Paine","Common Sense, Thetford, Deism, Staymaker, Crisis, Agrarian, Reason",6
"Thorns","Prickles, Spines, Barbs, Brambles, Defensive, Sharpness, Botanical, Epidermal",4
"Thriller","suspense, cliffhanger, psychological, red herring, intrigue, pacing, espionage, noir",4
"Tiberius","Capri, Sejanus, Rhodes, Germanicus, Vipsania",6
"Tide Terminology","Neap, Spring, Ebb, Slack, Diurnal, Gravitational, Intertidal, Syzygy, Amplitude",4
"TIE-BREAKING METHODS","OVERTIME, SUDDEN DEATH, TIE BREAKER, SHOOTOUT, Head-to-head, Net Run Rate, Goal Difference, Set Piece, Point Spread, Seeding, Coin Toss",6
"Touchdown","endzone, pylon, goal-line, receiver, spike, extra-point, drive, celebration",4
"Tournament","BRACKET, SEEDING, REPECHAGE, WILDCARD, FINALS, PLAYOFFS, Elimination, Seed, Qualifier, Fixture, Circuit, Draw, Knockout",4
"Trade","Negotiation, Deadline, Asset, Package, Move",5
"Trade Routes","Silk Road, Amber Road, Caravan, Spice Route, Hanseatic, Galleon, Incense Road",5
"tragedies","Macbeth, Othello, King Lear, Medea, Antigone, Oedipus Rex, Electra",6
"Trailer","Theatrical, Red-band, Featurette, Sizzle",4
"Trance","ARPEGGIO, IBIZA, GOA, UPLIFTING, SYNTH, Tiesto, Oakenfold, Vandyk, Armin",6
"transformation","Mutation, Alchemy, Sublimation, Evolution, Molting, Mutagenesis, Ecdysis, Catalysis, Anagenesis",6
"traveling performers","Troubadour, Minstrel, Busker, Jongleur, Bard, Goliard, Vaudevillian",5
"true‑crime mysteries","Staircase, Jinx, Dateline, Unsolved, Mindhunter",4
"Trumpet","VALVE, PISTON, LEADPIPE, CROOK, BELL",5
"Tulips","Perennial, Bulb, Spring, Holland, Garden, Stem",4
"TURNTABLE ANATOMY","PLATTER, STYLUS, TONEARM, BELT, CARTRIDGE, Slipmat",6
"Tutankhamun","Carter, Carnarvon, KV62, Smenkhkare, Ankhesenamun",6
"TV fandom","SHIPPERS, HEADCANON, FANFIC, COSPLAY, OTP",5
"TV reviews","AV Club, TVLine, Variety, Indiewire, Metacritic, Vulture",5
"Typhoon","Depression, Landfall, Monsoon, Intensification, Archipelagic, Torrential, Pacific, Tip, Haiyan, Mangkhut, Nina",6
"Umpire","Baseball, Cricket, Decision, Strike, Fair, Neutral",5
"Underground Railroad","Conductor, Station, Passenger, Tubman, Quaker, Vigilance, Crossing, Abolitionists, North Star, Canaan",6
"Union","Grant, Sherman, Potomac, Sheridan, Abraham Lincoln, Preservation, Strategy, Freedom, Abolition, Decree",5
"urban fiction","Clockers, Snowfall, Juice, Push, Belly, Flyy Girl, Gangsta, B-More",5
"Urban Skyscrapers","Spire, Atrium, Penthouse, Shard, Gherkin",4
"urban transit hubs","Shinjuku, Gare du Nord, St Pancras, Penn Station, King's Cross, Chatelet, Mezzanine, Turnstile, Concourse, Terminal, Junction",6
"Urchins","ARISTOTLE, LANTERN, TEST, SPINES, PEDICELLARIA, Echinoidea, Aristotles lantern, Gonads, Barnacles, Anemones, Limpets",6
"User Base","Redditors, YouTubers, TikTokers, Snapchatters, Segment, Audience, Cohort, Patron",5
"USER INTERFACE DESIGN","BREADCRUMB, HAMBURGER, CAROUSEL, TOGGLE, SLIDER, Tooltip, Sidebar",5
"variety shows","Ed Sullivan, Soul Train, Laugh-In, Hee Haw, Muppet Show, Solid Gold, Cher",5
"Vatican City","Conclave, Swiss Guard, St. Peter, Sistine, Grottoes, Curia, Papacy",4
"Vendor","Oracle, SAP, Workday, NetSuite",6
"VENTURE CAPITAL","UNICORN, PIVOT, RUNWAY, EXIT",5
"Vertical Forest Strata","Canopy, Understory, Emergent, Floor",5
"Veteran","Journeyman, Stalwart, Mentor, Savant, Graybeard, Expert, Sage, Master, Practitioner, Authority",4
"Vietnam War","Napalm, Saigon, Tet, Viet Cong, Conscription, Tet Offensive, Ho Chi Minh, HANOI, HUEY",5
"Viking Explorers","Leif Erikson, Erik the Red, Freydis, Bjarni, Thorfinn, Markland, Karlsefni, Leifsbudir",5
"Vines","Clematis, Ivy, Wisteria, Honeysuckle, Bougainvillea, Grapevine, Passionflower, Jasmine",4
"VINTAGE AUTOMOBILES","Model T, Model A, Oldsmobile, Studebaker, Packard, Duesenberg, Auburn, Cord, Stutz, Hudson, LaSalle, Marmon",5
"Vintage Cars","Phantom, Silver Ghost, Type 35, Duesenberg",5
"VINYL RECORD MEDIA","GROOVE, SPINDLE, JACKET, SLEEVE, WAX",5
"Violin","CHINREST, PURFLING, FROG, SOUNDPOST, PEGBOX, SCROLL",4
"virtual reality era","Oculus Rift, Meta Quest, Hololens, SteamVR, Beat Saber, VRChat",4
"Vocal Ranges","Bass, Tenor, Alto, Soprano, Baritone",4
"vocal training","Falsetto, Vibrato, Glissando, Solfege, Belting, Register, Resonance",5
"Voice Acting","Mel Blanc, Tara Strong, Jim Cummings, Frank Welker, Grey DeLisle, Billy West, Dubbing, Inflection, Intonation, ADR, Vocalize",5
"Wagons","Outback, Roadmaster, Avant, Touring, Nomad, V60, RS6 Avant, Stagea, Levorg",5
"WAR ON TERROR","AL-QAEDA, TALIBAN, GUANTANAMO, DRONE, Insurgency, Homeland Security, Counterterrorism, Fallujah, Kandahar, Baghdad, Blackhawk, Tora Bora",6
"Warner Bros Discovery","Joker, HBO, CNN, Max, HGTV, Eurosport, TNT",6
"watch time","Minutes, Completion, Engagement, Viewthrough, Retention, Churn, Binge",5
"Watergate","HALDEMAN, LIDDY, DEEP THROAT, TAPES, AGNEW",7
"Wes Craven Films","Cursed, Red Eye, Swamp Thing, Shocker",6
"Western","Shane, Red River, High Noon, Unforgiven, Rio Bravo, Stagecoach",5
"Westward Expansion","Oregon Trail, Homestead, Frontier, Gold Rush, Pioneers, Wagon, Railroad",6
"Wetland Ecosystems","Mangrove, Estuary, Peatland, Billabong, Everglades, Cypress",5
"Wholesale","Bulk, Volume, Discount, Rebate, Supplier, Jobber, Pallet",5
"wide shots","Establishing, Panorama, Master Shot, Extreme Long, Long Shot, Vista, Landscape",4
"Willows","Salix, Pendulous, Riparian, Osier, Pliant, Weeping, Salicin, PUSSY, SALLOW, CRACK",5
"Win Streak","HEATER, SWEEP, RUN, TEAR, Momentum, Hot Hand, Perfect Season, Dynasty, Unbeaten, Undefeated",5
"WIND STRENGTH DESIGNATIONS","Gusts, Gale, Storm, Squall",4
"Workforce","Freelance, Salaried, Unionized, Remote, Personnel, Payroll, Roster, Labor, Intern, Trainee",6
"World Music","SITAR, GAMELAN, KOTO, TABLA, MBIRA, DIDGERIDOO, Kora",5
"World War One","Trench, Verdun, Somme, Zeppelin, Lusitania, Uboat, Tank, Mustardgas, Trench Warfare, Armistice, Versailles Treaty",4
"World War Two","Midway, Spitfire, Enigma, Overlord, Iwojima, Bastogne, Radar, Allies, Axis, Frontlines, Propaganda",4
"Yellow Card","Caution, Warning, Booking, Misconduct, Field",5
"Young Trees","Saplings, Seedlings, Sprouts, Scions",5`,ld=14;function _a(n){const i=[...n];for(let r=i.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[i[r],i[s]]=[i[s],i[r]]}return i}const Cc=n=>{const i=n.trim().split(`
`),r=[];for(let s=1;s<i.length;s++){const c=i[s].trim();if(!c)continue;const E=[];let d="",A=!1;for(let m=0;m<c.length;m++){const O=c[m];O==='"'?A&&c[m+1]==='"'?(d+='"',m++):A=!A:O===","&&!A?(E.push(d),d=""):d+=O}if(E.push(d),E.length<3)continue;const h=E[0].trim(),f=E[1].trim(),T=E.slice(2).map(m=>m.trim()).filter(m=>m.length>0&&m.length<=ld);T.length>=4&&r.push({id:h,name:f,words:T})}return r},up=(n,i=8e4)=>{const r=n.trim().split(`
`),s=[];let c=i;for(let E=1;E<r.length;E++){const d=r[E].trim();if(!d)continue;const A=[];let h="",f=!1;for(let L=0;L<d.length;L++){const B=d[L];B==='"'?f=!f:B===","&&!f?(A.push(h),h=""):h+=B}if(A.push(h),A.length<2)continue;const T=A[0].trim().replace(/^"|"$/g,""),O=A[1].trim().replace(/^"|"$/g,"").split(",").map(L=>L.trim()).filter(L=>L.length>0&&L.length<=ld);O.length>=4&&s.push({id:(c++).toString(),name:T,words:O})}return s};let _n=[],vm=[];const pc=[{id:"fb1",name:"Colors",words:["Red","Blue","Green","Yellow"]},{id:"fb2",name:"Animals",words:["Dog","Cat","Bird","Fish"]},{id:"fb3",name:"Fruits",words:["Apple","Banana","Orange","Grape"]},{id:"fb4",name:"Planets",words:["Earth","Mars","Venus","Jupiter"]},{id:"fb5",name:"Seasons",words:["Spring","Summer","Fall","Winter"]},{id:"fb6",name:"Directions",words:["North","South","East","West"]},{id:"fb7",name:"Elements",words:["Fire","Water","Air","Earth"]}],Bm=()=>{if(!(_n.length>0))try{const n=[...Cc(op||""),...up(lp||""),...Cc(rp||"")];if(n.length===0){_n=pc;return}const i=new Map;for(const r of n){if(!r.name)continue;const s=r.name.toUpperCase().trim();if(!(s==="CATEGORY"||s==="NAME"||s===""))if(i.has(s)){const c=i.get(s),E=Array.from(new Set([...c.words,...r.words]));c.words=E}else i.set(s,{...r})}_n=Array.from(i.values()).filter(r=>r.words.length>=4),_n.length===0&&(_n=pc),vm=Cc(sp||"")}catch(n){console.error("Critical error during CSV initialization:",n),_n=pc}},tr=()=>(Bm(),_n),cp=()=>(Bm(),vm),dp=(n,i)=>{const r=i||tr();return{name:"VARIETY PACK",categories:_a(r).slice(0,n)}},Ep=`
Brighten,Lighten,Clarify,Polish,Refine,Enhance,Sharpen,Embellish,Highlight,Improve,Intensify
Darken,Dim,Obscure,Shadow,Depress,Weaken,Fade,Cloud,Subdue,Lower,Dull
Agreeable,Pleasant,Kind,Polite,Gracious,Charming,Delightful,Genial,Friendly,Affable,Companionable
Disagreeable,Unpleasant,Harsh,Rude,Offensive,Crude,Unkind,Inhospitable,Unfriendly,Hostile,Repellent
Advance,Progress,Proceed,Move-forward,Develop,Promote,Elevate,Enhance,Boost,Upgrade,Improve
Retreat,Withdraw,Recede,Backtrack,Return,Step-back,Decline,Revert,Pull-back,Regression,Exit
Alive,Living,Breathing,Animated,Conscious,Awake,Existing,Thriving,Vital,Active,Dynamic
Dead,Deceased,Departed,Expired,Lifeless,Defunct,Extinct,Gone,Perished,Demised,Inanimate
Ancient,Old,Antiquated,Historic,Archaic,Primitive,Timeworn,Venerable,Classic,Traditional,Legendary
Modern,Contemporary,Current,Recent,Up-to-date,New,Present-day,Innovative,Advanced,Progressive,Fresh
Answer,Reply,Response,Retort,Solution,Explanation,Clarification,Reaction,Resolution,Account,Feedback
Question,Inquiry,Query,Interrogation,Examination,Probe,Investigation,Request,Challenge,Issue,Prompt
Arrive,Reach,Land,Enter,Appear,Show-up,Check-in,Approach,Access,Get-to,Turn-up
Depart,Leave,Exit,Go,Withdraw,Retreat,Take-off,Abscond,Disappear,Evacuate,Abandon
Artistic,Creative,Imaginative,Inventive,Expressive,Inspired,Visionary,Innovative,Stylish,Original,Poetic
Unimaginative,Dull,Plain,Ordinary,Conventional,Uncreative,Pedestrian,Prosaic,Uninspired,Commonplace,Derivative
Ask,Request,Inquire,Query,Question,Seek,Petition,Appeal,Probe,Consult,Interrogate
Answer,Respond,Reply,Retort,React,Clarify,Resolve,Explain,Account,Feedback,Counter
Awake,Alert,Conscious,Vigilant,Watchful,Attentive,Responsive,Observant,Perceptive,Reactive,Aware
Asleep,Sleeping,Slumbering,Dozing,Napping,Resting,Snoozing,Unconscious,Inactive,Reposing,Hibernating
Beautiful,Attractive,Lovely,Charming,Stunning,Graceful,Exquisite,Alluring,Striking,Appealing,Delightful
Hideous,Ugly,Repulsive,Grotesque,Unsightly,Distasteful,Awkward,Plain,Unpleasant,Uncomely,Unappealing
Beginner,Novice,Neophyte,Apprentice,Newcomer,Initiate,Tyro,Greenhorn,Freshman,Starter,Probationer
Expert,Specialist,Professional,Authority,Master,Connoisseur,Scholar,Advisor,Consultant,Experienced,Skilled
Belief,Faith,Conviction,Trust,Confidence,Opinion,View,Acceptance,Assurance,Doctrine,Principle
Doubt,Skepticism,Uncertainty,Question,Disbelief,Hesitation,Reservation,Confusion,Apprehension,Incredulity
Big-hearted,Generous,Kind,Benevolent,Charitable,Selfless,Altruistic,Compassionate,Philanthropic,Openhanded,Considerate
Small-minded,Petty,Narrow,Mean,Selfish,Intolerant,Close-minded,Limited,Restricted,Insignificant,Trivial
Bold,Daring,Adventurous,Brave,Courageous,Intrepid,Valiant,Heroic,Audacious,Fearless,Unflinching
Timid,Shy,Fearful,Apprehensive,Meek,Reserved,Quiet,Reticent,Insecure,Diffident,Hesitant
Busybody,Intruder,Meddler,Interferer,Nuisance,Nosy,Inquisitive,Prattler,Interloper,Peeker,Buttinsky
Silent,Quiet,Still,Muted,Hushed,Wordless,Speechless,Calm,Reserved,Reticent,Unspoken,Tranquil
Careful,Cautious,Prudent,Attentive,Watchful,Meticulous,Thorough,Deliberate,Guarded,Conscientious,Vigilant
Careless,Negligent,Reckless,Thoughtless,Inattentive,Sloppy,Irresponsible,Hasty,Imprudent,Unmindful,Unconcerned
Certain,Sure,Confident,Positive,Assured,Definite,Determined,Convinced,Guaranteed,Secure,Unquestionable
Uncertain,Doubtful,Hesitant,Unsure,Indecisive,Ambiguous,Questionable,Unclear,Confused,Insecure,Unsettled
Cheerful,Joyful,Happy,Sunny,Optimistic,Playful,Lighthearted,Upbeat,Glad,Content,Delighted
Miserable,Sad,Unhappy,Depressed,Melancholy,Woeful,Dejected,Downcast,Heartbroken,Despondent,Blue
Clear,Transparent,Lucid,Obvious,Evident,Apparent,Plain,Distinct,Unambiguous,Manifest,Understandable
Confusing,Puzzling,Perplexing,Baffling,Complicated,Complex,Obscure,Ambiguous,Unclear,Intricate,Mystifying
Close,Near,Adjacent,Proximate,Handy,Accessible,Neighboring,Immediate,Contiguous,Approaching,Nearby
Distant,Far,Remote,Isolated,Removed,Outlying,Secluded,Inaccessible,Faraway,Detached,Obscure
Comfortable,Cozy,Snug,Relaxed,Content,Secure,Safe,Restful,Pleasant,Easy,Convenient
Uncomfortable,Awkward,Uneasy,Distressed,Inconvenient,Unpleasant,Agitated,Restless,Anxious,Embarrassed,Unsettled
Common,Usual,Ordinary,Frequent,Regular,Normal,Typical,Standard,Conventional,Everyday,Customary
Rare,Unusual,Exceptional,Extraordinary,Unique,Infrequent,Scarce,Uncommon,Remarkable,Special,Occasional
Complete,Whole,Entire,Total,Full,Finished,Perfect,Absolute,Comprehensive,Exhaustive,Unbroken
Incomplete,Partial,Fragmentary,Unfinished,Deficient,Imperfect,Limited,Inadequate,Unfulfilled,Unready,Unaccomplished
Complex,Complicated,Intricate,Detailed,Elaborate,Advanced,Multifaceted,Convoluted,Composite,Involved,Sophisticated
Simple,Easy,Plain,Uncomplicated,Clear,Elementary,Basic,Straightforward,Undemanding,Accessible,Modest
Brighten,Illuminate,Lighten,Clarify,Highlight,Polish,Refine,Enhance,Sharpen,Embellish,Improve
Dim,Fade,Dull,Obscure,Shadow,Darken,Weaken,Blur,Cloud,Subdue,Depress
Quick,Prompt,Instant,Immediate,Speedy,Swift,Brisk,Expeditious,Nimble,On-the-spot,Direct
Slow,Leisurely,Gradual,Sluggish,Lagging,Delayed,Unhurried,Measured,Plodding,Drawn-out,Tardy
Carefree,Easygoing,Untroubled,Optimistic,Cheerful,Playful,Lighthearted,Sunny,Joyous,Blithe,Relaxed
Moody,Temperamental,Changeable,Erratic,Unpredictable,Volatile,Whimsical,Impulsive,Capricious,Emotional,Fickle
Generous,Charitable,Kind,Openhanded,Benevolent,Philanthropic,Selfless,Altruistic,Big-hearted,Unselfish,Considerate
Greedy,Avaricious,Grasping,Selfish,Materialistic,Covetous,Possessive,Voracious,Insatiable,Acquisitive,Gluttonous
Polite,Courteous,Respectful,Well-mannered,Civil,Gracious,Considerate,Tactful,Obliging,Well-spoken,Well-bred
Rude,Impolite,Disrespectful,Offensive,Harsh,Uncivil,Insolent,Crude,Brash,Unkind,Discourteous
Lucky,Fortunate,Blessed,Prosperous,Advantaged,Privileged,Successful,Serendipitous,Opportune,Favored,Charmed
Unlucky,Unfortunate,Cursed,Doomed,Ill-fated,Star-crossed,Disadvantaged,Unsuccessful,Unprosperous,Unblessed,Hexed
Busy,Occupied,Engaged,Involved,Overloaded,Overwhelmed,Preoccupied,Swamped,Active,Industrious,Hardworking
Idle,Inactive,Unoccupied,Lethargic,Lazy,Sluggish,Resting,Unproductive,Still,Motionless,Vacant
Hungry,Starving,Famished,Ravenous,Peckish,Empty,Voracious,Insatiable,Hollow,Greedy,Craving
Full,Satisfied,Content,Stuffed,Replete,Well-fed,Overfilled,Plentiful,Abundant,Overflowing,Complete,Fulfilled
Healthy,Fit,Strong,Robust,Vigorous,Well,Nourished,Thriving,Resilient,Active,Wholesome
Sick,Ill,Unwell,Infirm,Diseased,Weak,Feeble,Unhealthy,Debilitated,Fragile,Infected
Colorful,Vivid,Brilliant,Intense,Deep,Striking,Flamboyant,Eye-catching,Glowing,Resplendent,Richly-colored
Pale,Faded,Washed-out,Colorless,Anemic,Weak,Light,Dim,Drained,Bleached,Pastel
Sharp,Pointed,Acute,Keen,Incisive,Penetrating,Edged,Precise,Exact,Alert,Attentive
Blunt,Dull,Unsharpened,Flat,Plain,Direct,Frank,Unrefined,Coarse,Insensitive,Unpolished,Unpointed
Tall,Lofty,Elevated,High,Soaring,Grand,Imposing,Majestic,Stately,Towering,Statuesque
Short,Small,Petite,Compact,Miniature,Little,Brief,Limited,Restricted,Concise,Stubby
Wide,Broad,Expansive,Extensive,Spacious,Roomy,Open,Vast,Comprehensive,Generous,Ample
Narrow,Thin,Slender,Slim,Confined,Restricted,Limited,Tight,Compressed,Pinched,Constricted
Deep,Profound,Intense,Meaningful,Thoughtful,Serious,Abysmal,Bottomless,Immense,Insightful,Penetrating
Shallow,Superficial,Surface-level,Trivial,Light,Empty,Frivolous,Insignificant,Petty,Minor,Thin
Fiery,Impulsive,Quick-tempered,Volatile,Explosive,Passionate,Intense,Wrathful,Incendiary,Temperamental,Hot-headed
Cool,Chilly,Calm,Collected,Relaxed,Unruffled,Composed,Easygoing,Detached,Unemotional,Neutral,Moderate
Sweet,Sugary,Delicious,Tasty,Pleasant,Agreeable,Kind,Endearing,Adorable,Charming,Appealing
Bitter,Harsh,Acrid,Sharp,Unpleasant,Resentful,Severe,Sour,Hostile,Angry,Disagreeable
Soft,Gentle,Tender,Mild,Delicate,Supple,Flexible,Kind,Quiet,Light,Velvety
Rigid,Harsh,Severe,Unyielding,Strict,Strong,Stiff,Inflexible,Unbending,Uncompromising,Hard-edged
Smooth,Even,Flat,Level,Polished,Glossy,Slick,Fluid,Seamless,Refined,Consistent
Rough,Coarse,Uneven,Jagged,Harsh,Raw,Grainy,Unfinished,Crude,Unrefined,Unpolished
Darling,Beloved,Dear,Precious,Treasure,Angel,Love,Paramour,Companion,Partner,Sweetheart
Villain,Scoundrel,Rogue,Criminal,Outlaw,Delinquent,Wrongdoer,Evildoer,Antagonist,Fiend,Malefactor
Hero,Champion,Savior,Protector,Defender,Guardian,Rescuer,Victor,Conqueror,Paladin,Warrior,Idol
Coward,Weakling,Chicken,Spineless,Timid,Fearful,Apprehensive,Craven,Yellow-belly,Quitter,Shy
Guide,Director,Commander,Chief,Manager,Supervisor,Head,Principal,Foreman,Captain,Leader
Supporter,Adherent,Devotee,Disciple,Assistant,Helper,Sidekick,Subordinate,Underling,Minion,Follower
Worker,Laborer,Employee,Staffer,Servant,Hand,Operator,Technician,Clerk,Assistant,Contributor
Boss,Employer,Manager,Overseer,Supervisor,Chief,Director,Head,Leader,Foreman,Controller
Rich-food,Luxurious,Decadent,Sumptuous,Opulent,Extravagant,Indulgent,Plentiful,Abundant,Hearty,Delicious
Plain-food,Simple,Modest,Basic,Unadorned,Ordinary,Common,Everyday,Uncomplicated,Homely,Unseasoned,Unfancy
Agree,Consent,Concur,Assent,Accept,Approve,Endorse,Support,Comply,Accede,Adopt
Disagree,Dissent,Object,Oppose,Contradict,Challenge,Resist,Refute,Reject,Contest,Dispute
Build,Construct,Assemble,Erect,Fabricate,Forge,Establish,Develop,Create,Form,Raise
Destroy,Demolish,Annihilate,Obliterate,Eradicate,Devastate,Exterminate,Shatter,Crush,Smash,Ruin
Help,Assist,Aid,Support,Facilitate,Encourage,Guide,Serve,Rescue,Relieve,Boost
Hinder,Obstruct,Impede,Block,Prevent,Delay,Restrict,Inhibit,Interfere,Thwart,Derail
Rise,Ascend,Climb,Mount,Soar,Escalate,Elevate,Boost,Increase,Advance,Surge
Decline,Decrease,Diminish,Reduce,Drop,Wane,Fade,Subside,Contract,Recede,Plummet
Accept,Receive,Welcome,Adopt,Embrace,Take,Endorse,Approve,Consent,Agree,Accede
Refuse,Deny,Reject,Decline,Oppose,Disallow,Prohibit,Withhold,Spurn,Disapprove,Repudiate
Open-minded,Receptive,Flexible,Adaptable,Tolerant,Accepting,Approachable,Unbiased,Curious,Progressive,Permissive
Closed-minded,Narrow,Dogmatic,Rigid,Intolerant,Inflexible,Unyielding,Prejudiced,Conservative,Restrictive,Limited
Polished,Refined,Sophisticated,Graceful,Stylish,Elegant,Cultured,Suave,Classy,Immaculate,Well-groomed
Rough-hewn,Crude,Unfinished,Raw,Jagged,Coarse,Primitive,Unrefined,Harsh,Blunt,Grainy
Generosity,Benevolence,Charity,Kindness,Philanthropy,Selflessness,Altruism,Big-heartedness,Openhandedness,Compassion,Largesse
Stinginess,Miserliness,Greed,Avarice,Selfishness,Meanness,Parsimoniousness,Closefistedness,Frugality,Inflexibility,Penuriousness
Joy,Delight,Gladness,Ecstasy,Bliss,Cheerfulness,Contentment,Happiness,Exhilaration,Elation,Exuberance
Sorrow,Grief,Melancholy,Despair,Anguish,Heartache,Regret,Unhappiness,Despondency,Misery,Lamentation
Truthful,Honest,Sincere,Authentic,Genuine,Trustworthy,Faithful,Accurate,Dependable,Frank,Real
Deceptive,Misleading,Dishonest,Fraudulent,False,Tricky,Untruthful,Insincere,Illusory,Sham,Deceitful
Courage,Bravery,Valor,Fearlessness,Heroism,Fortitude,Determination,Resolve,Tenacity,Audacity,Pluck
Cowardice,Fear,Timidness,Spinelessness,Weakness,Apprehension,Cravenness,Reticence,Shyness,Meekness,Insecurity
Knowledge,Wisdom,Understanding,Insight,Learning,Education,Awareness,Expertise,Intelligence,Comprehension,Scholarship
Ignorance,Unawareness,Unfamiliarity,Oblivion,Naivety,Illiteracy,Uninformedness,Stupidity,Blindness,Unconsciousness,Neglect
Victory,Triumph,Success,Achievement,Conquest,Domination,Prevailing,Winning,Overcoming,Attainment,Glory
Defeat,Loss,Failure,Collapse,Downfall,Setback,Beating,Overthrow,Discomfiture,Reverse,Drubbing
Calmness,Serenity,Tranquility,Peacefulness,Composure,Relaxation,Stillness,Equanimity,Quietude,Placidness,Leisureliness
Chaos,Disorder,Confusion,Turmoil,Anarchy,Havoc,Mayhem,Pandemonium,Disarray,Commotion,Mess
Order,Structure,System,Arrangement,Organization,Method,Pattern,Sequence,Regulation,Discipline,Framework
Mess,Clutter,Disarray,Untidiness,Disorganization,Shambles,Chaos,Confusion,Derangement,Disorder,Muddle
Beauty,Attractiveness,Charm,Grace,Elegance,Appeal,Delight,Exquisiteness,Stunningness,Allurement,Prettiness
Ugliness,Hideousness,Repulsiveness,Grotesqueness,Unsightliness,Plainness,Awkwardness,Distastefulness,Unpleasantness,Homeliness,Uncomeliness
Strength,Power,Might,Force,Robustness,Vigor,Durability,Resilience,Tenacity,Potency,Sturdiness
Weakness,Frailty,Fragility,Feebleness,Delicacy,Brittleness,Infirmity,Shakiness,Instability,Impotence,Languor
Freedom,Liberty,Independence,Autonomy,Sovereignty,Self-determination,Choice,Privilege,License,Emancipation,Freewill
Captivity,Imprisonment,Confinement,Detention,Restraint,Enslavement,Incarceration,Oppression,Restriction,Constraint,Bondage
Success,Achievement,Accomplishment,Victory,Triumph,Prosperity,Progress,Advancement,Attainment,Realization,Win
Failure,Defeat,Loss,Collapse,Downfall,Setback,Disappointment,Frustration,Flop,Misstep,Shortcoming
Affection,Adoration,Devotion,Passion,Attachment,Fondness,Infatuation,Romance,Tenderness,Endearment,Love
Hatred,Loathing,Detestation,Abhorrence,Animosity,Hostility,Antipathy,Aversion,Spite,Malice,Ill-will
Friendship,Companionship,Comradeship,Alliance,Partnership,Kinship,Connection,Amity,Association,Affinity,Closeness
Enmity,Hostility,Antagonism,Rivalry,Opposition,Bitterness,Conflict,Discord,Hatred,Ill-feeling,Animus
Hope,Optimism,Expectation,Faith,Confidence,Anticipation,Promise,Prospect,Aspiration,Wish,Belief
Despair,Hopelessness,Anguish,Despondency,Melancholy,Grief,Dejection,Discouragement,Downheartedness,Loss,Depression
Peace,Harmony,Accord,Concord,Friendship,Amity,Reconciliation,Stillness,Tranquility,Serenity,Calm
War,Conflict,Battle,Fight,Combat,Hostility,Struggle,Clash,Skirmish,Campaign,Confrontation
Create,Invent,Design,Develop,Build,Fabricate,Generate,Compose,Formulate,Establish,Originate
Erase,Delete,Remove,Expunge,Eliminate,Cancel,Obliterate,Clear,Discard,Annul,Nullify
Expand,Increase,Enlarge,Extend,Stretch,Augment,Amplify,Broaden,Widen,Escalate,Prolong
Contract,Shrink,Reduce,Condense,Compress,Shorten,Minimize,Decline,Constrict,Recede,Retract
Gain,Acquire,Obtain,Win,Secure,Collect,Procure,Attain,Amass,Accumulate,Reap
Lose,Miss,Fail,Drop,Decline,Forfeit,Surrender,Succumb,Collapse,Defeat,Beaten
Invent,Devise,Conceive,Imagine,Originate,Formulate,Design,Create,Discover,Establish,Generate
Forget,Neglect,Overlook,Miss,Ignore,Disregard,Skip,Abandon,Discard,Drop,Erase
Bright,Shiny,Luminous,Radiant,Glowing,Brilliant,Resplendent,Beaming,Effulgent,Incandescent,Flashing
Gloomy,Somber,Melancholy,Dreary,Murky,Shadowy,Dim,Tenebrous,Obscure,Dull,Darkened
Generous-hearted,Benevolent,Charitable,Kind,Selfless,Altruistic,Philanthropic,Compassionate,Openhanded,Considerate,Big-hearted
Selfish,Egotistical,Greedy,Avaricious,Self-centered,Possessive,Materialistic,Grasping,Self-serving,Self-focused,Self-absorbed
Polite,Courteous,Respectful,Well-mannered,Civil,Gracious,Considerate,Tactful,Obliging,Well-spoken,Well-bred
Impolite,Rude,Disrespectful,Offensive,Harsh,Uncivil,Insolent,Crude,Brash,Unkind,Discourteous
Lucky,Fortunate,Blessed,Prosperous,Privileged,Successful,Serendipitous,Opportune,Favored,Charmed,Advantaged
Unlucky,Cursed,Doomed,Ill-fated,Star-crossed,Disadvantaged,Unsuccessful,Unprosperous,Unblessed,Hexed,Unfortunate
Busy,Occupied,Engaged,Involved,Overloaded,Overwhelmed,Preoccupied,Swamped,Active,Industrious,Hardworking
Idle,Inactive,Unoccupied,Lethargic,Lazy,Sluggish,Resting,Unproductive,Still,Motionless,Vacant
Hungry,Starving,Famished,Ravenous,Peckish,Empty,Voracious,Insatiable,Hollow,Greedy,Craving
Satisfied,Content,Stuffed,Replete,Well-fed,Overfilled,Plentiful,Abundant,Overflowing,Complete,Fulfilled
Healthy,Fit,Strong,Robust,Vigorous,Well,Nourished,Thriving,Resilient,Active,Wholesome
Ill,Unwell,Infirm,Diseased,Weak,Feeble,Unhealthy,Debilitated,Fragile,Infected,Sickly
Colorful,Vivid,Brilliant,Intense,Deep,Striking,Flamboyant,Eye-catching,Glowing,Resplendent,Richly-colored
Colorless,Pale,Faded,Washed-out,Anemic,Weak,Light,Dim,Drained,Bleached,Pastel
Sharp,Pointed,Acute,Keen,Incisive,Penetrating,Edged,Precise,Exact,Alert,Attentive
Blunt,Dull,Flat,Plain,Direct,Frank,Unrefined,Coarse,Insensitive,Unpolished,Unpointed
Tall,Lofty,Elevated,High,Soaring,Grand,Imposing,Majestic,Stately,Towering,Statuesque
Short,Small,Petite,Compact,Miniature,Little,Brief,Limited,Restricted,Concise,Stubby
Wide,Broad,Expansive,Extensive,Spacious,Roomy,Open,Vast,Comprehensive,Generous,Ample
Narrow,Thin,Slender,Slim,Confined,Restricted,Limited,Tight,Compressed,Pinched,Constricted
Deep,Profound,Intense,Meaningful,Thoughtful,Serious,Abysmal,Bottomless,Immense,Insightful,Penetrating
Shallow,Superficial,Surface-level,Trivial,Light,Empty,Frivolous,Insignificant,Petty,Minor,Thin
Fiery,Impulsive,Quick-tempered,Volatile,Explosive,Passionate,Wrathful,Incendiary,Temperamental,Hot-headed,Intense
Cool,Chilly,Calm,Collected,Relaxed,Unruffled,Composed,Easygoing,Detached,Unemotional,Neutral,Moderate
Sweet,Sugary,Delicious,Tasty,Pleasant,Agreeable,Kind,Endearing,Adorable,Charming,Appealing
Bitter,Harsh,Acrid,Sharp,Unpleasant,Resentful,Severe,Sour,Hostile,Angry,Disagreeable
Soft,Gentle,Tender,Mild,Delicate,Supple,Flexible,Kind,Quiet,Light,Velvety
Rigid,Harsh,Severe,Unyielding,Strict,Strong,Stiff,Inflexible,Unbending,Uncompromising,Hard-edged
Smooth,Even,Flat,Level,Polished,Glossy,Slick,Fluid,Seamless,Refined,Consistent
Rough,Coarse,Uneven,Jagged,Harsh,Raw,Grainy,Unfinished,Crude,Unrefined,Unpolished
Darling,Beloved,Dear,Precious,Treasure,Angel,Love,Paramour,Companion,Partner,Sweetheart
Villain,Scoundrel,Rogue,Criminal,Outlaw,Delinquent,Wrongdoer,Evildoer,Antagonist,Fiend,Malefactor
Hero,Champion,Savior,Protector,Defender,Guardian,Rescuer,Victor,Conqueror,Paladin,Warrior,Idol
Coward,Weakling,Chicken,Spineless,Timid,Fearful,Apprehensive,Craven,Yellow-belly,Quitter,Shy
Guide,Director,Commander,Chief,Manager,Supervisor,Head,Principal,Foreman,Captain,Leader
Supporter,Adherent,Devotee,Disciple,Assistant,Helper,Sidekick,Subordinate,Underling,Minion,Follower
Worker,Laborer,Employee,Staffer,Servant,Hand,Operator,Technician,Clerk,Assistant,Contributor
Boss,Employer,Manager,Overseer,Supervisor,Chief,Director,Head,Leader,Foreman,Controller
Generosity,Benevolence,Charity,Kindness,Philanthropy,Selflessness,Altruism,Big-heartedness,Openhandedness,Compassion,Largesse
Stinginess,Miserliness,Greed,Avarice,Selfishness,Meanness,Parsimoniousness,Closefistedness,Frugality,Penuriousness,Hardheartedness
Joyful,Cheerful,Glad,Delighted,Ecstatic,Elated,Overjoyed,Blissful,Sunny,Upbeat,Playful
Mournful,Sorrowful,Melancholy,Woeful,Heartbroken,Despondent,Downcast,Blue,Grief-stricken,Unhappy,Dejected
Energetic,Active,Vigorous,Lively,Dynamic,Animated,Spirited,Robust,Thriving,Exuberant,Peppy
Lazy,Sluggish,Lethargic,Inactive,Indolent,Unmotivated,Idle,Slow,Unproductive,Weary,Complacent
Optimistic,Hopeful,Positive,Confident,Upbeat,Encouraging,Sunny,Cheerful,Expectant,Assured,Forward-looking
Pessimistic,Negative,Doubtful,Hopeless,Discouraged,Downbeat,Unconfident,Gloomy,Defeatist,Unhopeful,Despairing
Generous-spirited,Kindhearted,Compassionate,Altruistic,Philanthropic,Selfless,Charitable,Openhanded,Benevolent,Big-hearted,Considerate
Mean-spirited,Spiteful,Malicious,Hostile,Cruel,Unkind,Harsh,Vindictive,Unpleasant,Ill-natured,Unfriendly
Confident,Assured,Secure,Positive,Determined,Certain,Self-reliant,Strong,Composed,Poised,Self-assured
Insecure,Unsure,Doubtful,Hesitant,Unconfident,Self-conscious,Uncertain,Shaky,Timid,Apprehensive,Unsteady
Creative,Inventive,Imaginative,Innovative,Visionary,Artistic,Original,Inspired,Expressive,Resourceful,Productive
Uncreative,Dull,Plain,Ordinary,Conventional,Pedestrian,Prosaic,Uninspired,Commonplace,Derivative,Unimaginative,Unoriginal
Friendly,Kind,Amiable,Affable,Genial,Companionable,Approachable,Welcoming,Neighborly,Good-natured,Cheerful
Hostile,Unfriendly,Aggressive,Antagonistic,Confrontational,Opposing,Adversarial,Unkind,Harsh,Unpleasant,Combative
Generous-minded,Openhanded,Charitable,Benevolent,Selfless,Altruistic,Philanthropic,Compassionate,Kindhearted,Big-hearted,Considerate
Self-centered,Egotistical,Selfish,Narcissistic,Greedy,Possessive,Self-serving,Self-focused,Self-absorbed,Materialistic,Self-indulgent
Peaceful,Calm,Tranquil,Serene,Relaxed,Composed,Quiet,Still,Leisurely,Unruffled,Placid
Violent,Aggressive,Brutal,Ferocious,Savage,Hostile,Destructive,Wild,Harsh,Uncontrolled,Deadly
Bright-minded,Intelligent,Smart,Clever,Astute,Shrewd,Knowledgeable,Perceptive,Wise,Brainy,Quick-witted
Dull-minded,Slow,Unintelligent,Ignorant,Unaware,Uninformed,Stupid,Clueless,Oblivious,Vacant,Empty-headed
Generous-heartedness,Kindness,Benevolence,Charity,Philanthropy,Selflessness,Altruism,Compassion,Largesse,Openhandedness,Big-heartedness
Selfishness,Egotism,Greed,Avarice,Self-centeredness,Possessiveness,Self-serving,Self-focus,Self-absorption,Materialism,Self-indulgence
Joyous,Cheerful,Glad,Delighted,Ecstatic,Elated,Overjoyed,Blissful,Sunny,Upbeat,Playful
Sorrowful,Melancholy,Woeful,Heartbroken,Despondent,Downcast,Blue,Grief-stricken,Unhappy,Dejected,Mournful
Energeticness,Vigor,Liveliness,Dynamism,Animation,Spirit,Robustness,Thriving,Exuberance,Peppiness,Activity
Laziness,Sluggishness,Lethargy,Inactivity,Indolence,Unmotivation,Idleness,Slowness,Unproductiveness,Weariness,Complacency
Optimism,Hope,Positivity,Confidence,Encouragement,Cheerfulness,Expectation,Assurance,Faith,Forward-looking,Sunny-outlook
Pessimism,Negativity,Doubt,Hopelessness,Discouragement,Downbeat,Unconfidence,Gloom,Defeatism,Despair,Unhopefulness
Compassion,Altruism,Philanthropy,Selflessness,Charity,Openhandedness,Benevolence,Big-heartedness,Consideration,Generosity-of-spirit,Kindheartedness
Cruelty,Unkindness,Harshness,Vindictiveness,Unpleasantness,Ill-nature,Unfriendliness,Meanness,Spite,Malice,Hostility
Assurance,Security,Positivity,Determination,Certainty,Self-reliance,Strength,Composure,Poise,Self-assurance,Confidence
Unsureness,Hesitation,Unconfidence,Self-consciousness,Shakiness,Timidity,Apprehension,Unsteadiness,Insecurity,Doubt,Uncertainty
Originality,Inspiration,Expression,Resourcefulness,Productivity,Creativity,Invention,Imagination,Innovation,Vision,Artistry
Ordinariness,Conventionality,Pedestrianism,Prosaicness,Uninspiration,Commonplaceness,Derivativeness,Uncreativity,Dullness,Plainness,Unoriginality
Amiability,Affability,Geniality,Companionability,Approachability,Welcomingness,Neighborliness,Good-nature,Cheerfulness,Friendliness,Kindness
Combativeness,Opposition,Adversarialness,Unkindness,Harshness,Unpleasantness,Hostility,Unfriendliness,Aggressiveness,Antagonism,Confrontation
Relaxation,Composure,Quietness,Stillness,Leisureliness,Unruffledness,Placidity,Peace,Calmness,Tranquility,Serenity
Destructiveness,Wildness,Harshness,Uncontrol,Deadliness,Violence,Aggression,Brutality,Ferocity,Savagery,Hostility
`;let gc=null;const xs=()=>{if(gc)return gc;const n=Ep.trim().split(`
`),i=[];let r=5e4;return n.forEach(s=>{if(!s.includes(","))return;const c=s.split(",").map(A=>A.trim().toLowerCase()).filter(A=>A.length>0&&A.length<=14);if(c.length<5)return;const E=c[0],d=c.slice(1);d.length>=4&&i.push({id:(r++).toString(),name:`SYNONYMS: ${E.toUpperCase()}`,words:d})}),gc=i,i},Sp=`
Faces Happy,😀😃😄😁😆😅🤣😂🙂🙃
Faces Sad,☹️🙁😕😟😔😞😒😏😣😖
Faces Love,🥰😍😘😗😙😚
Faces Sick,🤢🤮🤧😷🤒🤕
Faces Cool,😎🤠🤓
Hand Gestures,👍👎👊✊🤛🤜🤞✌️🤟🤘
Hearts,❤️🧡💛💚💙💜🖤🤍🤎💔
Animals Farm,🐮🐷🐑🐴🐐🐔🐓🐣🦆
Animals Wild,🐒🦍🦧🐺🦊🦝🦁🐯
Animals Sea,🐋🐬🦭🐟🐠🐡🦈🐙🐚
Animals Bugs,🐌🦋🐛🐜🐝🪲🐞🦗🕷️🦂
Plants,💐🌸💮🏵️🌹🌺🌻🌼🌷🌱
Trees,🌲🌳🌴🌵🌾🌿☘️🍀🍁🍂
Fruit,🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🥝
Veggie,🥑🍆🥔🥕🌽🌶️🥒🥬🥦🧄🧅🍄
Food Prep,🍞🥐🥖🥨🥞🧀🍖🍗🥓🍔🍟🍕🌭🥪🌮
Food Asian,🍱🍲🍛🍜🍝🍠🍢🍣🍤🍥🥮
Sweets,🍦🍧🍨🍩🍪🎂🍰🧁🍫🍬🍭
Drink,🥛☕🍵🍶🍺🍻🥂🍷🥃🍸🍹🧃
Activity,⚽🏀🏈⚾🎾🏐🏉⛳⛸️🎿🛷🥌
Travel Land,🚗🚕🚙🚌🚎🏎️🚓🚑🚒🚐🚚🚛🚜
Travel Air,✈️🛩️🛫🛬🚀🛸🚁
Travel Water,⚓⛵🛶🚤🛳️⛴️🛥️🚢
Sky,☀️🌝🌚🌑🌒🌓🌔🌕🌖
Weather,☁️⛅⛈️🌤️🌥️🌦️🌧️🌨️🌩️
Object,⌚📱📲💻⌨️🖥️🖨️🖱️🖲️🕹️
Book,📔📕📖📗📘📙📚📓📒📃
Money,💰💴💵💶💷💸💳🧾
Office,✉️📧📨📩📤📥📦
Tool,🔨🪓⛏️⚒️🛠️🗡️⚔️🔧
Science,⚗️🧪🔬🧬💊🩺
Clothing Tops,👕👚👔🧥🥋🎽
Clothing Bottoms,👖👙👘👗🧦
Shoes,👞👟🥾👡👠🥿
Flags Red,🇦🇱🇧🇭🇨🇳🇩🇰🇭🇰🇮🇲
Flags Blue,🇦🇷🇦🇺🇧🇼🇫🇮🇬🇷🇭🇳🇮🇱
Flags Stripes,🇦🇹🇧🇪🇧🇬🇨🇮🇪🇪🇫🇷🇩🇪
Cards,♠️♣️♥️♦️
Music,🎼🎵🎶🎹🎻🎺
Stationery,✏️✒️🖋️🖊️🖌️🖍️
Kitchen,🍳🥘🥣🥗🍲🍛
Medical,💉💊🩹🩺🏥
Halloween,🎃👻🕷️🕸️🦇💀
Christmas,🎄🎅🎁❄️⛄🦌
Easter,🐰🥚🐣🌷
Love,💍💒💌💑
Time,⏳⌛⏰⌚🕰️
Audio,🔇🔈🔉🔊
Weather Cold,❄️🌨️☃️⛄
Weather Hot,☀️😎🏖️🏜️
Insects,🐝🐞🦋🦗🕷️
Dinosaurs,🦖🦕🐊🐍
Warning Signs,⚠️🚸⛔🚫
Constellations,♈♉♊♋♌♍♎♏
Shapes Blue,🟦🔷🔹🔵
Shapes Red,🟥🔴🔻🛑
Shapes Yellow,🟨🟡🔶🔸
Shapes Green,🟩🟢📗
Purple Things,🍇🍆👾👿🟣
Orange Things,🍊🥕🦊🏀
Black Things,🖤🎱🎓🕶️
White Things,🤍🦢🏐🦴
Gray Things,🐘🌪️💿🐭
Fast Food,🍔🍟🥤🍦🍕
Breakfast,🥓🍳🥞🧇☕
Japanese Food,🍣🍱🍜🍥🍢
Italian Food,🍝🍕🍷🧀🇮🇹
Baking,🍞🥯🥐🥖🥨
Space Exploration,🚀🛰️👩‍🚀👨‍🚀🪐
Photography,📸🎥🎞️📽️🎬
Medieval,🏰⚔️🛡️🤴👸
Construction,🏗️🚧👷‍♂️👷‍♀️🔨
Marine Life,🦈🐙🐡🦞🐚
Magic & Spells,🧙‍♂️🪄🔮✨🧹
Gardening,🪴🧑‍🌾🚿🌻🧤
Writing & School,✍️📝📖🖍️🎒
Fire & Heat,🔥🌋☄️♨️☀️
Party & Fun,🥳🎈🎊🎉🥂
Gaming,🎮🕹️👾🎰🎯
Luck & Fortune,🍀🎰🧧💎🪙
Night Time,🌙🦉💤🌌🛌
Public Transit,🚌🚆🚇🚋🚏
Detective Work,🕵️‍♂️🔍👣🔦📜
Art Studio,🎨🖌️🖼️🗿🎭
Camping Trip,🏕️🔥🪵🎒🔦
Fitness,💪🏋️‍♂️🏃‍♀️🚴‍♂️🧘
Jewelry,💎💍📿👑⌚
Winter Gear,🧥🧣🧤🎿⛸️
Summer Vibes,🕶️🍦🏄‍♂️🌴🍹
Celestial Bodies,☀️🌙🌎🪐☄️
Birds,🦅🦆🦉🦜🦩
Pet Shop,🐶🐱🐹🐰🦜
Post Office,📮✉️📦🚚📫
Music Class,🎹🎸🥁🎻🎺
Laundry Day,🧺🧼👕🧦👗
Tools & Hardware,🔩🪚🔧🔨🗜️
Mythical,🐉🦄🧜‍♀️🧚‍♂️🧞‍♂️
Tropical Island,🏝️🥥🍍🦜🌴
Morning Routine,⏰☕🥣🚿🪥
Evening Routine,🌙🛁📖🛌🍷
Construction Site,🚧🚜🏗️🧱🔨
Farm Life,🚜👨‍🌾🐮🐷🐓
High Tech,🤖💻💾🦾📡
Desert Life,🏜️🐪🌵🦂☀️
Forest Hike,🌲🦌🏕️🐻🥾
Beach Day,🐚🏖️👙🕶️🦀
Birthday Party,🎂🎁🎈🥳🕯️
Movie Night,🍿🎞️🎬🥤🎥
Royal Court,👑🤴👸🏰⚜️
Weather Stormy,⛈️⚡🌪️🌊🌩️
Office Space,📎🖇️📁📅📠
Cooking Tools,🍳🔪🥣🥘🥄
Travel Essentials,🛂🧳🗺️📸🎫
Sport Balls,⚽🏀🏈🏐⚾
Yoga & Zen,🧘‍♂️🧘‍♀️🎐🕯️☯️
Musical Notes,🎼🎵🎶🎹🎤
Wild West,🤠🐎🌵🏜️🔫
Space Objects,☄️🛰️🛸🌌🔭
Fishing Trip,🎣🚣‍♂️🐟🛶🛥️
Bakery Treats,🧁🥨🥯🥐🥖
Bathroom Items,🛁🚽🚿🪥🧼
Home Comfort,🛋️🛌📺🪑🏠
Weather Sunny,☀️🌡️🧴⛱️🕶️
City Life,🌆🏙️🌇🏛️🏘️
Mountain Hike,🏔️🧗‍♂️🎒🥾🌲
Garden Flowers,🌻🌷🌹🌺🌸
Sea Creatures,🐋🐬🐟🐡🐙
Exotic Animals,🦏🐘🦒🦓🐒
Pet Supplies,🐕🐈🦴🧶🐹
School Subjects,🧪🎨📏📖🔢
Night Sky,🌌🌠🌑🌕🌙
Winter Sports,🎿🏂⛸️🏒🛷
Spring Time,🌱🌦️🐛🦋🌷
Autumn Season,🍂🍁🎃🍎🧣
Summer Fun,🏖️🍹🏄‍♀️🍍🍦
Kitchen Ware,🍴🥣🥘🍳🔪
Workout Gear,🏋️‍♂️👟🎽🥤🧘
Office Tools,💻🖊️📂📌✂️
Party Supplies,🎈🎉🎁🥳🍰
Travel Modes,🚆✈️🚢🚗🛵
Tools Set,🔨🔧🔩🪚🪛
Farm Goods,🥚🌽🥛🍯🥩
Magic Tricks,🎩🐰🪄🃏✨
Undersea World,🐚🐙🦞🐠🌊
Royal Symbols,👑🏰🛡️⚔️⚜️
Weather Extreme,🌪️⚡🌊🌋☄️
Time Pieces,⌚⏰🕰️
Writing Kit,✏️🖋️🖍️
Money Stack,💰💵💸
Safe Locks,🔒🔓🔏
Map Arrows,⬆️➡️⬇️
Media Player,▶️⏸️⏹️
Sound Levels,🔈🔉🔊
Email Chain,✉️📧📩
Folder Sort,📁📂🗂️
Mail Box,📫📬📭
Alert Bells,🔔🔕🛎️
Power Source,🔋🪫🔌
Discovery Tools,🔍🔎🔦
Heavy Tools,🔨⚒️🛠️
Fastener Set,🔧🪛🔩
Personal Guard,🛡️⚔️🗡️
Luxury Gems,👑💍💎
Library Books,📖📘📙
Scroll Paper,📄📃📜
Data Charts,📊📈📉
Planning Set,📅📆🗓️
Phone Line,📱☎️📞
Broadcast Kit,📺📻🎥
Photo Gear,📷📸📽️
Gaming Fun,🎮🕹️🎲
Card Suits,♠️♣️♥️
Trophy Case,🏆🥇🥈
Honor Medals,🎖️🏅🏵️
Music Notes,🎵🎶🎼
Strings Group,🎹🎻🎺
Headphones,🎧🎤📻
Cinema Kit,🍿🎬🎞️
Stage Arts,🎭🎨🎨
Sport Balls,⚽🏀🏈
Court Sports,🏒🎾🎿
City Vehicles,🚗🚕🚌
Rail Transit,🚂🚆🚇
Air Travel,✈️🛫🛬
Ocean Vessel,🚢🛥️🚤
Space Voyage,🚀🛰️🛸
Night Stars,⭐🌟✨
Moon Phase,🌙🌛🌜
Weather Mix,☀️☁️🌧️
Storm Cloud,⚡🌩️⛈️
Heat Source,🔥💥☄️
Blue Water,💧🌊🚿
Green Growth,🌱🌿🌲
Flower Bloom,🌸🌹🌻
Fruit Orchard,🍎🍌🍓
Garden Veggie,打🥕🥦🌽
Sweet Treats,🍦🍩🍪
Fast Bites,🍔🍟🍕
Coffee Break,☕🥤🍺
Wine Tasting,🍷🍸🍹
Hearts Set,❤️🧡💛
Hand Likes,👍👎👌
Happy Faces,😀😂😍
Pet Friends,🐶🐱🐭
Wild Birds,🐦🐧🦆
Small Bugs,🐝🦋🕷️
Forest Trees,🌳🌲🌴
City Homes,🏠🏦🏢
Tall Skyline,🏙️🌆🌃
Island Peaks,🏝️⛰️🌋
Road Access,🌉🛤️🛣️
Warning Signs,🛑⚠️🚫
Sewing Kit,🪡🧵🧶
Tailor Shop,🧥👗👕
Laundry Day,🧺🧼🚿
Carpentry,🪚🔨📐
Masonry,🧱🧱🏗️
Painting Job,🖌️🎨🪜
Mechanic Tools,🔧🔩⚙️
Plumbing,🪠🚰🛁
Electrical,⚡🔌💡
Science Lab,🧪🔬⚗️
Biology,🧬🧫🔬
Chemistry,🧪🌡️⚖️
Astronomy,🔭🪐🌑
Math Class,📐📏🔢
History Class,📜🗿🏛️
Geography,🌎🗺️🧭
Art Class,🎨🖌️🖍️
Gym Class,🏀🏃‍♂️👟
Library,📚🔖📖
Lunch Room,🍱🍕🧃
Playground,🛝🎡🎠
School Bus,🚌🏫🎒
Birthday,🎂🎈🎁
Wedding,👰🤵💍
Funeral,⚰️🪦🥀
Holiday,🎄🎃🎆
Picnic,🧺🥪🌳
Camping,⛺🔥🌲
Fishing,🎣🐟🚣
Hiking,🥾🧗‍♂️🎒
Hunting,🏹🦌🌲
Gardening,🪴🧑‍🌾🌻
Swimming,🩱🏊‍♂️🌊
Surfing,🏄‍♂️🏄‍♀️🌊
Skiing,🎿🏂❄️
Skaters,🛹⛸️🛼
Boxing,🥊💪🏟️
Karate,🥋👊🥋
Soccer,⚽🥅👟
Basketball,🏀⛹️‍♂️🏀
Football,🏈🏈🏈
Baseball,⚾🏏⚾
Tennis,🎾🏸🎾
Golf,⛳🏌️‍♂️⛳
Cycling,🚲🚴‍♂️🚲
Running,🏃‍♂️👟⏱️
Fitness,🏋️‍♂️💪🥗
Yoga,🧘‍♀️🧘‍♂️🕉️
Dancing,💃🕺💃
Singing,🎤🎶🎵
Theater,🎭🎟️🏟️
Cinema,🍿🎬📽️
Gaming,🎮🕹️👾
Cards,♠️♣️♥️
Dice,🎲🎲🎲
Chess,♟️🤴👸
Puzzle,🧩🧩🧩
Magic,🪄🎩✨
Spies,🕵️‍♂️🕶️📜
Space,🚀🛰️☄️
Aliens,👽🛸👾
Robots,🤖🦾⚙️
Monsters,👹👺👻
Dragons,🐉🔥🏰
Vampires,🧛‍♂️🦇🧛‍♀️
Ghosts,👻🕯️🏰
Zombies,🧟‍♂️🧠🧟‍♀️
Witches,🧙‍♀️🧹🐈‍⬛
Wizards,🧙‍♂️🪄🔮
Knights,🛡️⚔️🐎
Pirates,🏴‍☠️⚓🦜
Cowboys,🤠🐎🌵
Detectives,🕵️‍♂️🔍🔦
Superheroes,🦸‍♂️🦹‍♂️🦸‍♀️
Mythology,🔱⚡🦉
Fairytales,🏰🦄✨
`;let Nc=null;const ar=()=>{if(Nc)return Nc;const n=Sp.trim().split(`
`),i=[];let r=9e4;const s=typeof Intl<"u"&&"Segmenter"in Intl;return n.forEach(c=>{if(!c.includes(","))return;const E=c.indexOf(","),d=c.substring(0,E).trim(),A=c.substring(E+1).trim();let h=[];if(s){const T=new Intl.Segmenter("en",{granularity:"grapheme"}).segment(A);for(const{segment:m}of T){const O=m.trim();O.length>0&&h.push(O)}}else h=Array.from(A).filter(f=>f.trim().length>0);h=Array.from(new Set(h)),h.length>=3&&i.push({id:(r++).toString(),name:d,words:h})}),Nc=i,i},Vc=(n,i=[])=>{const r=kC;let s=(n-1)%r.length,c=r[s];if(i.length>0&&!i.includes(c))for(let E=1;E<r.length;E++){const d=r[(s+E)%r.length];if(i.includes(d)){c=d;break}}return c},Ap=(n,i=[],r=[])=>{const s=Vc(n,i);let c=[];switch(s){case Ie.LEVEL_SYNONYMS:c=xs();break;case Ie.LEVEL_EMOJI:c=ar();break;default:c=tr(),n%20===0&&(c=[...c,...cp()]);break}if(r.length>0){const E=c.filter(d=>r.includes(d.id));E.length>=4&&(c=E)}return{mode:s,data:c}};class fp{constructor(){this.ctx=null,this.isMuted=!1,this.isMusicPlaying=!1,this.musicNodes=[],this.musicInterval=null}getContext(){if(!this.ctx)try{const i=window.AudioContext||window.webkitAudioContext;if(i)this.ctx=new i;else return null}catch(i){return console.error("Audio init error",i),null}return this.ctx}resume(){const i=this.getContext();i&&i.state==="suspended"&&i.resume().catch(r=>console.warn(r))}setSound(i){this.isMuted=!i,this.isMuted?this.stopNodes():this.resume()}playTone(i,r,s,c=0,E=.1){if(this.isMuted)return;const d=this.getContext();if(d){d.state==="suspended"&&d.resume().catch(()=>{});try{const A=d.createOscillator(),h=d.createGain();A.type=r,A.frequency.setValueAtTime(i,d.currentTime+c),h.gain.setValueAtTime(E,d.currentTime+c),h.gain.linearRampToValueAtTime(.001,d.currentTime+c+s),A.connect(h),h.connect(d.destination),A.start(d.currentTime+c),A.stop(d.currentTime+c+s+.05),A.onended=()=>{A.disconnect(),h.disconnect()}}catch{}}}startMusic(){this.isMusicPlaying||(this.isMusicPlaying=!0)}stopMusic(){this.isMusicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null),this.stopNodes()}toggleMusic(){return this.isMusicPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}stopNodes(){this.musicNodes.forEach(i=>{try{i.disconnect()}catch{}}),this.musicNodes=[]}playTick(){this.playTone(800,"square",.03,0,.05)}playSelect(){this.playTone(600,"sine",.08,0,.1)}playSwap(){if(this.isMuted)return;const i=this.getContext();if(i){i.state==="suspended"&&i.resume().catch(()=>{});try{const r=i.createOscillator(),s=i.createGain();r.frequency.setValueAtTime(300,i.currentTime),r.frequency.linearRampToValueAtTime(600,i.currentTime+.1),s.gain.setValueAtTime(.05,i.currentTime),s.gain.linearRampToValueAtTime(.001,i.currentTime+.1),r.connect(s),s.connect(i.destination),r.start(),r.stop(i.currentTime+.15),r.onended=()=>{r.disconnect(),s.disconnect()}}catch{}}}playCorrect(){this.playTone(660,"sine",.1,0,.15),this.playTone(880,"sine",.2,.08,.15)}playRowSolved(){this.playTone(440,"sine",.4,0,.1),this.playTone(554.37,"sine",.4,.05,.1),this.playTone(659.25,"sine",.4,.1,.1)}playError(){if(this.isMuted)return;const i=this.getContext();if(i){i.state==="suspended"&&i.resume().catch(()=>{});try{const r=i.currentTime,s=i.createOscillator(),c=i.createGain();s.type="sawtooth",s.frequency.setValueAtTime(120,r),s.frequency.exponentialRampToValueAtTime(60,r+.3),c.gain.setValueAtTime(.15,r),c.gain.linearRampToValueAtTime(.001,r+.3),s.connect(c),c.connect(i.destination),s.start(r),s.stop(r+.35),s.onended=()=>{s.disconnect(),c.disconnect()}}catch{}}}playWin(){this.playTone(523.25,"triangle",.1,0,.2),this.playTone(659.25,"triangle",.1,0+.1,.2),this.playTone(783.99,"triangle",.1,0+.2,.2),this.playTone(1046.5,"square",.6,0+.3,.2),this.playTone(523.25,"sine",.4,0+.3,.2)}playLevelStart(){this.playTone(440,"sine",.1,0,.1),this.playTone(880,"sine",.2,0+.1,.1)}toggleMute(){this.isMuted=!this.isMuted,this.isMuted&&this.stopNodes()}}const He=new fp;/*! Capacitor: https://capacitorjs.com/ - MIT License */var Ji;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Ji||(Ji={}));class Ic extends Error{constructor(i,r,s){super(i),this.message=i,this.code=r,this.data=s}}const hp=n=>{var i,r;return n!=null&&n.androidBridge?"android":!((r=(i=n==null?void 0:n.webkit)===null||i===void 0?void 0:i.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},mp=n=>{const i=n.CapacitorCustomPlatform||null,r=n.Capacitor||{},s=r.Plugins=r.Plugins||{},c=()=>i!==null?i.name:hp(n),E=()=>c()!=="web",d=m=>{const O=f.get(m);return!!(O!=null&&O.platforms.has(c())||A(m))},A=m=>{var O;return(O=r.PluginHeaders)===null||O===void 0?void 0:O.find(L=>L.name===m)},h=m=>n.console.error(m),f=new Map,T=(m,O={})=>{const L=f.get(m);if(L)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),L.proxy;const B=c(),k=A(m);let b;const y=async()=>(!b&&B in O?b=typeof O[B]=="function"?b=await O[B]():b=O[B]:i!==null&&!b&&"web"in O&&(b=typeof O.web=="function"?b=await O.web():b=O.web),b),Y=(ne,fe)=>{var Le,me;if(k){const Te=k==null?void 0:k.methods.find(de=>fe===de.name);if(Te)return Te.rtype==="promise"?de=>r.nativePromise(m,fe.toString(),de):(de,Oe)=>r.nativeCallback(m,fe.toString(),de,Oe);if(ne)return(Le=ne[fe])===null||Le===void 0?void 0:Le.bind(ne)}else{if(ne)return(me=ne[fe])===null||me===void 0?void 0:me.bind(ne);throw new Ic(`"${m}" plugin is not implemented on ${B}`,Ji.Unimplemented)}},W=ne=>{let fe;const Le=(...me)=>{const Te=y().then(de=>{const Oe=Y(de,ne);if(Oe){const Se=Oe(...me);return fe=Se==null?void 0:Se.remove,Se}else throw new Ic(`"${m}.${ne}()" is not implemented on ${B}`,Ji.Unimplemented)});return ne==="addListener"&&(Te.remove=async()=>fe()),Te};return Le.toString=()=>`${ne.toString()}() { [capacitor code] }`,Object.defineProperty(Le,"name",{value:ne,writable:!1,configurable:!1}),Le},ee=W("addListener"),te=W("removeListener"),ue=(ne,fe)=>{const Le=ee({eventName:ne},fe),me=async()=>{const de=await Le;te({eventName:ne,callbackId:de},fe)},Te=new Promise(de=>Le.then(()=>de({remove:me})));return Te.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await me()},Te},ie=new Proxy({},{get(ne,fe){switch(fe){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return k?ue:ee;case"removeListener":return te;default:return W(fe)}}});return s[m]=ie,f.set(m,{name:m,proxy:ie,platforms:new Set([...Object.keys(O),...k?[B]:[]])}),ie};return r.convertFileSrc||(r.convertFileSrc=m=>m),r.getPlatform=c,r.handleError=h,r.isNativePlatform=E,r.isPluginAvailable=d,r.registerPlugin=T,r.Exception=Ic,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},Tp=n=>n.Capacitor=mp(n),qn=Tp(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ud=qn.registerPlugin;class bm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(i,r){let s=!1;this.listeners[i]||(this.listeners[i]=[],s=!0),this.listeners[i].push(r);const E=this.windowListeners[i];E&&!E.registered&&this.addWindowListener(E),s&&this.sendRetainedArgumentsForEvent(i);const d=async()=>this.removeListener(i,r);return Promise.resolve({remove:d})}async removeAllListeners(){this.listeners={};for(const i in this.windowListeners)this.removeWindowListener(this.windowListeners[i]);this.windowListeners={}}notifyListeners(i,r,s){const c=this.listeners[i];if(!c){if(s){let E=this.retainedEventArguments[i];E||(E=[]),E.push(r),this.retainedEventArguments[i]=E}return}c.forEach(E=>E(r))}hasListeners(i){return!!this.listeners[i].length}registerWindowListener(i,r){this.windowListeners[r]={registered:!1,windowEventName:i,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(i="not implemented"){return new qn.Exception(i,Ji.Unimplemented)}unavailable(i="not available"){return new qn.Exception(i,Ji.Unavailable)}async removeListener(i,r){const s=this.listeners[i];if(!s)return;const c=s.indexOf(r);this.listeners[i].splice(c,1),this.listeners[i].length||this.removeWindowListener(this.windowListeners[i])}addWindowListener(i){window.addEventListener(i.windowEventName,i.handler),i.registered=!0}removeWindowListener(i){i&&(window.removeEventListener(i.windowEventName,i.handler),i.registered=!1)}sendRetainedArgumentsForEvent(i){const r=this.retainedEventArguments[i];r&&(delete this.retainedEventArguments[i],r.forEach(s=>{this.notifyListeners(i,s)}))}}const th=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ah=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Rp extends bm{async getCookies(){const i=document.cookie,r={};return i.split(";").forEach(s=>{if(s.length<=0)return;let[c,E]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=ah(c).trim(),E=ah(E).trim(),r[c]=E}),r}async setCookie(i){try{const r=th(i.key),s=th(i.value),c=`; expires=${(i.expires||"").replace("expires=","")}`,E=(i.path||"/").replace("path=",""),d=i.url!=null&&i.url.length>0?`domain=${i.url}`:"";document.cookie=`${r}=${s||""}${c}; path=${E}; ${d};`}catch(r){return Promise.reject(r)}}async deleteCookie(i){try{document.cookie=`${i.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const i=document.cookie.split(";")||[];for(const r of i)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(i){return Promise.reject(i)}}async clearAllCookies(){try{await this.clearCookies()}catch(i){return Promise.reject(i)}}}ud("CapacitorCookies",{web:()=>new Rp});const Op=async n=>new Promise((i,r)=>{const s=new FileReader;s.onload=()=>{const c=s.result;i(c.indexOf(",")>=0?c.split(",")[1]:c)},s.onerror=c=>r(c),s.readAsDataURL(n)}),Cp=(n={})=>{const i=Object.keys(n);return Object.keys(n).map(c=>c.toLocaleLowerCase()).reduce((c,E,d)=>(c[E]=n[i[d]],c),{})},pp=(n,i=!0)=>n?Object.entries(n).reduce((s,c)=>{const[E,d]=c;let A,h;return Array.isArray(d)?(h="",d.forEach(f=>{A=i?encodeURIComponent(f):f,h+=`${E}=${A}&`}),h.slice(0,-1)):(A=i?encodeURIComponent(d):d,h=`${E}=${A}`),`${s}&${h}`},"").substr(1):null,gp=(n,i={})=>{const r=Object.assign({method:n.method||"GET",headers:n.headers},i),c=Cp(n.headers)["content-type"]||"";if(typeof n.data=="string")r.body=n.data;else if(c.includes("application/x-www-form-urlencoded")){const E=new URLSearchParams;for(const[d,A]of Object.entries(n.data||{}))E.set(d,A);r.body=E.toString()}else if(c.includes("multipart/form-data")||n.data instanceof FormData){const E=new FormData;if(n.data instanceof FormData)n.data.forEach((A,h)=>{E.append(h,A)});else for(const A of Object.keys(n.data))E.append(A,n.data[A]);r.body=E;const d=new Headers(r.headers);d.delete("content-type"),r.headers=d}else(c.includes("application/json")||typeof n.data=="object")&&(r.body=JSON.stringify(n.data));return r};class Np extends bm{async request(i){const r=gp(i,i.webFetchExtra),s=pp(i.params,i.shouldEncodeUrlParams),c=s?`${i.url}?${s}`:i.url,E=await fetch(c,r),d=E.headers.get("content-type")||"";let{responseType:A="text"}=E.ok?i:{};d.includes("application/json")&&(A="json");let h,f;switch(A){case"arraybuffer":case"blob":f=await E.blob(),h=await Op(f);break;case"json":h=await E.json();break;case"document":case"text":default:h=await E.text()}const T={};return E.headers.forEach((m,O)=>{T[O]=m}),{data:h,headers:T,status:E.status,url:E.url}}async get(i){return this.request(Object.assign(Object.assign({},i),{method:"GET"}))}async post(i){return this.request(Object.assign(Object.assign({},i),{method:"POST"}))}async put(i){return this.request(Object.assign(Object.assign({},i),{method:"PUT"}))}async patch(i){return this.request(Object.assign(Object.assign({},i),{method:"PATCH"}))}async delete(i){return this.request(Object.assign(Object.assign({},i),{method:"DELETE"}))}}ud("CapacitorHttp",{web:()=>new Np});const Ip="modulepreload",yp=function(n){return"/"+n},nh={},Lp=function(i,r,s){let c=Promise.resolve();if(r&&r.length>0){let d=function(f){return Promise.all(f.map(T=>Promise.resolve(T).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const A=document.querySelector("meta[property=csp-nonce]"),h=(A==null?void 0:A.nonce)||(A==null?void 0:A.getAttribute("nonce"));c=d(r.map(f=>{if(f=yp(f),f in nh)return;nh[f]=!0;const T=f.endsWith(".css"),m=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${m}`))return;const O=document.createElement("link");if(O.rel=T?"stylesheet":Ip,T||(O.as="script"),O.crossOrigin="",O.href=f,h&&O.setAttribute("nonce",h),document.head.appendChild(O),T)return new Promise((L,B)=>{O.addEventListener("load",L),O.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${f}`)))})}))}function E(d){const A=new Event("vite:preloadError",{cancelable:!0});if(A.payload=d,window.dispatchEvent(A),!A.defaultPrevented)throw d}return c.then(d=>{for(const A of d||[])A.status==="rejected"&&E(A.reason);return i().catch(E)})};var ih;(function(n){n.General="General",n.ParentalGuidance="ParentalGuidance",n.Teen="Teen",n.MatureAudience="MatureAudience"})(ih||(ih={}));var oh;(function(n){n.SizeChanged="bannerAdSizeChanged",n.Loaded="bannerAdLoaded",n.FailedToLoad="bannerAdFailedToLoad",n.Opened="bannerAdOpened",n.Closed="bannerAdClosed",n.AdImpression="bannerAdImpression"})(oh||(oh={}));var Yc;(function(n){n.TOP_CENTER="TOP_CENTER",n.CENTER="CENTER",n.BOTTOM_CENTER="BOTTOM_CENTER"})(Yc||(Yc={}));var Kc;(function(n){n.BANNER="BANNER",n.FULL_BANNER="FULL_BANNER",n.LARGE_BANNER="LARGE_BANNER",n.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",n.LEADERBOARD="LEADERBOARD",n.ADAPTIVE_BANNER="ADAPTIVE_BANNER",n.SMART_BANNER="SMART_BANNER"})(Kc||(Kc={}));var rh;(function(n){n.Loaded="interstitialAdLoaded",n.FailedToLoad="interstitialAdFailedToLoad",n.Showed="interstitialAdShowed",n.FailedToShow="interstitialAdFailedToShow",n.Dismissed="interstitialAdDismissed"})(rh||(rh={}));var sh;(function(n){n.Loaded="onRewardedInterstitialAdLoaded",n.FailedToLoad="onRewardedInterstitialAdFailedToLoad",n.Showed="onRewardedInterstitialAdShowed",n.FailedToShow="onRewardedInterstitialAdFailedToShow",n.Dismissed="onRewardedInterstitialAdDismissed",n.Rewarded="onRewardedInterstitialAdReward"})(sh||(sh={}));var lh;(function(n){n.Loaded="onRewardedVideoAdLoaded",n.FailedToLoad="onRewardedVideoAdFailedToLoad",n.Showed="onRewardedVideoAdShowed",n.FailedToShow="onRewardedVideoAdFailedToShow",n.Dismissed="onRewardedVideoAdDismissed",n.Rewarded="onRewardedVideoAdReward"})(lh||(lh={}));var Wc;(function(n){n.NOT_REQUIRED="NOT_REQUIRED",n.OBTAINED="OBTAINED",n.REQUIRED="REQUIRED",n.UNKNOWN="UNKNOWN"})(Wc||(Wc={}));var uh;(function(n){n[n.DISABLED=0]="DISABLED",n[n.EEA=1]="EEA",n[n.NOT_EEA=2]="NOT_EEA",n[n.US=3]="US",n[n.OTHER=4]="OTHER"})(uh||(uh={}));const Na=ud("AdMob",{web:()=>Lp(()=>import("./web-DqYwgNdB.js"),[]).then(n=>new n.AdMobWeb)}),Mp=({onStart:n,onSettings:i,onStats:r,lastLevel:s})=>{const c=s||1,E=c>1?`CONTINUE LEVEL ${c}`:"START GAME";return C.jsxs("div",{className:"flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative bg-black font-oswald",children:[C.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center w-full",children:[C.jsx("div",{className:"flex flex-col items-center justify-center mb-16 w-full animate-zoom-in",children:C.jsx("img",{src:"/logo.svg",alt:"WORD PAIRING MACHINE",className:"w-full max-w-[320px] md:max-w-[450px] h-auto object-contain"})}),C.jsx("div",{className:"flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center z-30",style:{animationDelay:"0.4s"},children:C.jsx("div",{className:"relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer",onClick:n,children:C.jsx("button",{className:`
                relative w-full bg-black rounded-large px-8 py-5
                flex items-center justify-center
                border-2 border-white
                shadow-none
                active:translate-y-[2px]
                transition-all duration-75 z-10
              `,children:C.jsx("span",{className:"text-2xl md:text-3xl font-black font-oswald text-white tracking-widest uppercase",children:E})})})})]}),C.jsxs("div",{className:"w-full flex flex-wrap justify-center gap-6 pb-12 mt-auto animate-fade-in px-4 relative z-30",style:{animationDelay:"0.5s"},children:[C.jsx("button",{onClick:r,className:`
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-neon-aqua hover:text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          `,children:"STATS"}),C.jsx("button",{onClick:i,className:`
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          `,children:"SETTINGS"})]})]})},Dp={async showPrivacyOptionsForm(){if(qn.getPlatform()==="web"){console.log("Privacy options are managed by the browser or not applicable.");return}try{console.log("PrivacyService: Invoking AdMob.showConsentForm()"),await Na.showConsentForm()}catch(n){throw console.error("PrivacyService: Failed to open consent form",n),n}}},ch={[Ie.CLASSIC]:"Classic",[Ie.LEVEL_THEMED]:"Themed",[Ie.LEVEL_MIND_MATCH]:"Mind",[Ie.LEVEL_SYNONYMS]:"Synonyms",[Ie.LEVEL_EMOJI]:"Emoji",[Ie.LEVEL_EXPANSION]:"Expansion"},Pp=({isOpen:n,onClose:i,onMainMenu:r,isMusicOn:s,toggleMusic:c,enabledModes:E,toggleMode:d,hintsEnabled:A,setHintsEnabled:h,onShowTutorial:f,onResetProgress:T,categories:m=[],isAutoPlaying:O,toggleAutoPlay:L,privacyOptionsRequired:B,onShowPrivacyOptions:k,onManagePool:b,selectedCount:y})=>{if(!n)return null;const Y=m&&m.length>0,W=async()=>{if(k){k();return}try{console.log("Requesting Privacy Options via AdMob wrapper..."),await Dp.showPrivacyOptionsForm(),console.log("Privacy Options request handled.")}catch(ee){console.error("Error showing privacy options form:",ee)}};return C.jsx("div",{className:"absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald",children:C.jsxs("div",{className:"w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(0,229,255,0.3)] flex flex-col gap-3 overflow-hidden max-h-[95vh]",children:[C.jsxs("div",{className:"flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[C.jsx("h2",{className:"text-xl font-black font-oswald text-neon-blue uppercase tracking-widest italic drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]",children:"SETTINGS"}),C.jsx("button",{className:"text-zinc-400 hover:text-neon-red transition-colors p-1",onClick:i,children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),C.jsxs("div",{className:"grid grid-cols-2 gap-2 shrink-0",children:[C.jsx("button",{onClick:r,className:"col-span-2 py-2.5 bg-neon-red border-2 border-white text-white font-black font-oswald text-lg uppercase rounded-medium hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(255,7,58,0.4)]",children:"EXIT TO MAIN MENU"}),C.jsxs("button",{onClick:c,className:`p-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${s?"bg-zinc-900 border-neon-green text-neon-green shadow-[0_0_10px_#00FF66]":"bg-black border-zinc-800 text-zinc-600"}`,children:["SOUND: ",s?"ON":"OFF"]}),C.jsxs("button",{onClick:()=>h(!A),className:`p-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${A?"bg-zinc-900 border-neon-blue text-neon-blue shadow-[0_0_10px_#00E5FF]":"bg-black border-zinc-800 text-zinc-600"}`,children:["HINTS: ",A?"ON":"OFF"]}),C.jsxs("button",{onClick:b,className:`col-span-2 p-2.5 rounded-medium border-2 transition-all font-black font-oswald text-sm uppercase ${y>0?"bg-zinc-900 border-neon-yellow text-neon-yellow shadow-[0_0_10px_rgba(249,255,0,0.3)]":"bg-black border-zinc-800 text-zinc-500"}`,children:["MANAGE CATEGORY POOL ",y>0?`(${y})`:""]})]}),Y&&C.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[C.jsx("h3",{className:"text-neon-pink font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(255,31,191,0.5)]",children:"CURRENT GOALS"}),C.jsx("div",{className:"grid grid-cols-2 gap-1.5 py-1",children:m.map(ee=>C.jsxs("div",{className:`px-2 py-1.5 rounded-small border flex items-center justify-between text-[10px] font-bold uppercase font-oswald tracking-tighter transition-all ${ee.isSolved?"bg-neon-green/10 border-neon-green text-neon-green shadow-[0_0_5px_#00FF66]":"bg-black border-zinc-700 text-zinc-300"}`,children:[C.jsx("span",{className:"truncate mr-1",children:ee.name}),ee.isSolved&&C.jsx("span",{className:"text-xs",children:"✓"})]},ee.name))})]}),C.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[C.jsx("h3",{className:"text-neon-aqua font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(0,255,255,0.5)]",children:"GAME MODES"}),C.jsx("div",{className:"grid grid-cols-3 gap-1.5 pt-1",children:Object.keys(ch).map(ee=>{const te=E.includes(ee);return C.jsxs("button",{onClick:()=>d(ee),className:`flex flex-col items-center justify-center p-1 rounded-medium border transition-all h-10 ${te?"bg-zinc-900 border-neon-aqua text-white shadow-[0_0_8px_rgba(0,255,246,0.3)]":"bg-black border-zinc-800 text-zinc-600"}`,children:[C.jsx("span",{className:"font-bold font-oswald text-[9px] uppercase leading-none mb-0.5",children:ch[ee]}),C.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${te?"bg-neon-aqua shadow-[0_0_5px_#00FFF6]":"bg-zinc-800"}`})]},ee)})})]}),C.jsxs("div",{className:"mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800 shrink-0",children:[C.jsxs("div",{className:`grid ${B?"grid-cols-2":"grid-cols-1"} gap-2`,children:[C.jsx("button",{onClick:f,className:"py-2 bg-zinc-900 border border-neon-yellow text-neon-yellow rounded-medium font-bold text-[9px] font-oswald uppercase shadow-[0_0_8px_rgba(249,255,0,0.2)]",children:"HOW TO PLAY"}),B&&C.jsx("button",{onClick:W,className:"py-2 bg-zinc-900 border border-zinc-600 text-zinc-400 rounded-medium font-bold text-[9px] font-oswald uppercase hover:text-white hover:border-white transition-all",children:"CONSENT"})]}),C.jsx("button",{onClick:T,className:"w-full py-2 bg-black border border-neon-red text-neon-red rounded-medium font-bold text-[10px] font-oswald uppercase shadow-[0_0_5px_rgba(255,7,58,0.2)]",children:"RESET PROGRESS"}),C.jsx("button",{onClick:i,className:"w-full py-3.5 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_20px_white]",children:"RESUME PLAY"})]})]})})};function vp(n){if(typeof Proxy>"u")return n;const i=new Map,r=(...s)=>n(...s);return new Proxy(r,{get:(s,c)=>c==="create"?n:(i.has(c)||i.set(c,n(c)),i.get(c))})}function Js(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const zc=n=>Array.isArray(n);function Hm(n,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==n.length)return!1;for(let s=0;s<r;s++)if(i[s]!==n[s])return!1;return!0}function nr(n){return typeof n=="string"||Array.isArray(n)}function dh(n){const i=[{},{}];return n==null||n.values.forEach((r,s)=>{i[0][s]=r.get(),i[1][s]=r.getVelocity()}),i}function cd(n,i,r,s){if(typeof i=="function"){const[c,E]=dh(s);i=i(r!==void 0?r:n.custom,c,E)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,E]=dh(s);i=i(r!==void 0?r:n.custom,c,E)}return i}function Zs(n,i,r){const s=n.getProps();return cd(s,i,r!==void 0?r:s.custom,n)}const dd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ed=["initial",...dd],ur=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ei=new Set(ur),Ja=n=>n*1e3,Za=n=>n/1e3,Bp={type:"spring",stiffness:500,damping:25,restSpeed:10},bp=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Hp={type:"keyframes",duration:.8},Gp={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Up=(n,{keyframes:i})=>i.length>2?Hp:ei.has(n)?n.startsWith("scale")?bp(i[1]):Bp:Gp;function Sd(n,i){return n?n[i]||n.default||n:void 0}const Fp={useManualTiming:!1},wp=n=>n!==null;function Xs(n,{repeat:i,repeatType:r="loop"},s){const c=n.filter(wp),E=i&&r!=="loop"&&i%2===1?0:c.length-1;return!E||s===void 0?c[E]:s}const ta=n=>n;let Gm=ta;function kp(n){let i=new Set,r=new Set,s=!1,c=!1;const E=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function A(f){E.has(f)&&(h.schedule(f),n()),f(d)}const h={schedule:(f,T=!1,m=!1)=>{const L=m&&s?i:r;return T&&E.add(f),L.has(f)||L.add(f),f},cancel:f=>{r.delete(f),E.delete(f)},process:f=>{if(d=f,s){c=!0;return}s=!0,[i,r]=[r,i],i.forEach(A),i.clear(),s=!1,c&&(c=!1,h.process(f))}};return h}const Bs=["read","resolveKeyframes","update","preRender","render","postRender"],xp=40;function Um(n,i){let r=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},E=()=>r=!0,d=Bs.reduce((y,Y)=>(y[Y]=kp(E),y),{}),{read:A,resolveKeyframes:h,update:f,preRender:T,render:m,postRender:O}=d,L=()=>{const y=performance.now();r=!1,c.delta=s?1e3/60:Math.max(Math.min(y-c.timestamp,xp),1),c.timestamp=y,c.isProcessing=!0,A.process(c),h.process(c),f.process(c),T.process(c),m.process(c),O.process(c),c.isProcessing=!1,r&&i&&(s=!1,n(L))},B=()=>{r=!0,s=!0,c.isProcessing||n(L)};return{schedule:Bs.reduce((y,Y)=>{const W=d[Y];return y[Y]=(ee,te=!1,ue=!1)=>(r||B(),W.schedule(ee,te,ue)),y},{}),cancel:y=>{for(let Y=0;Y<Bs.length;Y++)d[Bs[Y]].cancel(y)},state:c,steps:d}}const{schedule:it,cancel:Nn,state:Pt,steps:yc}=Um(typeof requestAnimationFrame<"u"?requestAnimationFrame:ta,!0),Fm=(n,i,r)=>(((1-3*r+3*i)*n+(3*r-6*i))*n+3*i)*n,Vp=1e-7,Yp=12;function Kp(n,i,r,s,c){let E,d,A=0;do d=i+(r-i)/2,E=Fm(d,s,c)-n,E>0?r=d:i=d;while(Math.abs(E)>Vp&&++A<Yp);return d}function cr(n,i,r,s){if(n===i&&r===s)return ta;const c=E=>Kp(E,0,1,n,r);return E=>E===0||E===1?E:Fm(c(E),i,s)}const wm=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,km=n=>i=>1-n(1-i),xm=cr(.33,1.53,.69,.99),Ad=km(xm),Vm=wm(Ad),Ym=n=>(n*=2)<1?.5*Ad(n):.5*(2-Math.pow(2,-10*(n-1))),fd=n=>1-Math.sin(Math.acos(n)),Km=km(fd),Wm=wm(fd),zm=n=>/^0[^.\s]+$/u.test(n);function Wp(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||zm(n):!0}const jm=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),_m=n=>i=>typeof i=="string"&&i.startsWith(n),Jm=_m("--"),zp=_m("var(--"),hd=n=>zp(n)?jp.test(n.split("/*")[0].trim()):!1,jp=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,_p=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Jp(n){const i=_p.exec(n);if(!i)return[,];const[,r,s,c]=i;return[`--${r??s}`,c]}function Zm(n,i,r=1){const[s,c]=Jp(n);if(!s)return;const E=window.getComputedStyle(i).getPropertyValue(s);if(E){const d=E.trim();return jm(d)?parseFloat(d):d}return hd(c)?Zm(c,i,r+1):c}const Xa=(n,i,r)=>r>i?i:r<n?n:r,Qi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ir={...Qi,transform:n=>Xa(0,1,n)},bs={...Qi,default:1},dr=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),gn=dr("deg"),Ia=dr("%"),De=dr("px"),Zp=dr("vh"),Xp=dr("vw"),Eh={...Ia,parse:n=>Ia.parse(n)/100,transform:n=>Ia.transform(n*100)},qp=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Sh=n=>n===Qi||n===De,Ah=(n,i)=>parseFloat(n.split(", ")[i]),fh=(n,i)=>(r,{transform:s})=>{if(s==="none"||!s)return 0;const c=s.match(/^matrix3d\((.+)\)$/u);if(c)return Ah(c[1],i);{const E=s.match(/^matrix\((.+)\)$/u);return E?Ah(E[1],n):0}},Qp=new Set(["x","y","z"]),$p=ur.filter(n=>!Qp.has(n));function eg(n){const i=[];return $p.forEach(r=>{const s=n.getValue(r);s!==void 0&&(i.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),i}const Zi={width:({x:n},{paddingLeft:i="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(i)-parseFloat(r),height:({y:n},{paddingTop:i="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(i)-parseFloat(r),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:fh(4,13),y:fh(5,14)};Zi.translateX=Zi.x;Zi.translateY=Zi.y;const Xm=n=>i=>i.test(n),tg={test:n=>n==="auto",parse:n=>n},qm=[Qi,De,Ia,gn,Xp,Zp,tg],hh=n=>qm.find(Xm(n)),Qn=new Set;let jc=!1,_c=!1;function Qm(){if(_c){const n=Array.from(Qn).filter(s=>s.needsMeasurement),i=new Set(n.map(s=>s.element)),r=new Map;i.forEach(s=>{const c=eg(s);c.length&&(r.set(s,c),s.render())}),n.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=r.get(s);c&&c.forEach(([E,d])=>{var A;(A=s.getValue(E))===null||A===void 0||A.set(d)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}_c=!1,jc=!1,Qn.forEach(n=>n.complete()),Qn.clear()}function $m(){Qn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(_c=!0)})}function ag(){$m(),Qm()}class md{constructor(i,r,s,c,E,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=s,this.motionValue=c,this.element=E,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Qn.add(this),jc||(jc=!0,it.read($m),it.resolveKeyframes(Qm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:s,motionValue:c}=this;for(let E=0;E<i.length;E++)if(i[E]===null)if(E===0){const d=c==null?void 0:c.get(),A=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&r){const h=s.readValue(r,A);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=A),c&&d===void 0&&c.set(i[0])}else i[E]=i[E-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Qn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Qn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const qo=n=>Math.round(n*1e5)/1e5,Td=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ng(n){return n==null}const ig=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Rd=(n,i)=>r=>!!(typeof r=="string"&&ig.test(r)&&r.startsWith(n)||i&&!ng(r)&&Object.prototype.hasOwnProperty.call(r,i)),eT=(n,i,r)=>s=>{if(typeof s!="string")return s;const[c,E,d,A]=s.match(Td);return{[n]:parseFloat(c),[i]:parseFloat(E),[r]:parseFloat(d),alpha:A!==void 0?parseFloat(A):1}},og=n=>Xa(0,255,n),Lc={...Qi,transform:n=>Math.round(og(n))},Xn={test:Rd("rgb","red"),parse:eT("red","green","blue"),transform:({red:n,green:i,blue:r,alpha:s=1})=>"rgba("+Lc.transform(n)+", "+Lc.transform(i)+", "+Lc.transform(r)+", "+qo(ir.transform(s))+")"};function rg(n){let i="",r="",s="",c="";return n.length>5?(i=n.substring(1,3),r=n.substring(3,5),s=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),r=n.substring(2,3),s=n.substring(3,4),c=n.substring(4,5),i+=i,r+=r,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const Jc={test:Rd("#"),parse:rg,transform:Xn.transform},Ki={test:Rd("hsl","hue"),parse:eT("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:r,alpha:s=1})=>"hsla("+Math.round(n)+", "+Ia.transform(qo(i))+", "+Ia.transform(qo(r))+", "+qo(ir.transform(s))+")"},Gt={test:n=>Xn.test(n)||Jc.test(n)||Ki.test(n),parse:n=>Xn.test(n)?Xn.parse(n):Ki.test(n)?Ki.parse(n):Jc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Xn.transform(n):Ki.transform(n)},sg=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lg(n){var i,r;return isNaN(n)&&typeof n=="string"&&(((i=n.match(Td))===null||i===void 0?void 0:i.length)||0)+(((r=n.match(sg))===null||r===void 0?void 0:r.length)||0)>0}const tT="number",aT="color",ug="var",cg="var(",mh="${}",dg=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function or(n){const i=n.toString(),r=[],s={color:[],number:[],var:[]},c=[];let E=0;const A=i.replace(dg,h=>(Gt.test(h)?(s.color.push(E),c.push(aT),r.push(Gt.parse(h))):h.startsWith(cg)?(s.var.push(E),c.push(ug),r.push(h)):(s.number.push(E),c.push(tT),r.push(parseFloat(h))),++E,mh)).split(mh);return{values:r,split:A,indexes:s,types:c}}function nT(n){return or(n).values}function iT(n){const{split:i,types:r}=or(n),s=i.length;return c=>{let E="";for(let d=0;d<s;d++)if(E+=i[d],c[d]!==void 0){const A=r[d];A===tT?E+=qo(c[d]):A===aT?E+=Gt.transform(c[d]):E+=c[d]}return E}}const Eg=n=>typeof n=="number"?0:n;function Sg(n){const i=nT(n);return iT(n)(i.map(Eg))}const In={test:lg,parse:nT,createTransformer:iT,getAnimatableNone:Sg},Ag=new Set(["brightness","contrast","saturate","opacity"]);function fg(n){const[i,r]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[s]=r.match(Td)||[];if(!s)return n;const c=r.replace(s,"");let E=Ag.has(i)?1:0;return s!==r&&(E*=100),i+"("+E+c+")"}const hg=/\b([a-z-]*)\(.*?\)/gu,Zc={...In,getAnimatableNone:n=>{const i=n.match(hg);return i?i.map(fg).join(" "):n}},mg={borderWidth:De,borderTopWidth:De,borderRightWidth:De,borderBottomWidth:De,borderLeftWidth:De,borderRadius:De,radius:De,borderTopLeftRadius:De,borderTopRightRadius:De,borderBottomRightRadius:De,borderBottomLeftRadius:De,width:De,maxWidth:De,height:De,maxHeight:De,top:De,right:De,bottom:De,left:De,padding:De,paddingTop:De,paddingRight:De,paddingBottom:De,paddingLeft:De,margin:De,marginTop:De,marginRight:De,marginBottom:De,marginLeft:De,backgroundPositionX:De,backgroundPositionY:De},Tg={rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:bs,scaleX:bs,scaleY:bs,scaleZ:bs,skew:gn,skewX:gn,skewY:gn,distance:De,translateX:De,translateY:De,translateZ:De,x:De,y:De,z:De,perspective:De,transformPerspective:De,opacity:ir,originX:Eh,originY:Eh,originZ:De},Th={...Qi,transform:Math.round},Od={...mg,...Tg,zIndex:Th,size:De,fillOpacity:ir,strokeOpacity:ir,numOctaves:Th},Rg={...Od,color:Gt,backgroundColor:Gt,outlineColor:Gt,fill:Gt,stroke:Gt,borderColor:Gt,borderTopColor:Gt,borderRightColor:Gt,borderBottomColor:Gt,borderLeftColor:Gt,filter:Zc,WebkitFilter:Zc},Cd=n=>Rg[n];function oT(n,i){let r=Cd(n);return r!==Zc&&(r=In),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const Og=new Set(["auto","none","0"]);function Cg(n,i,r){let s=0,c;for(;s<n.length&&!c;){const E=n[s];typeof E=="string"&&!Og.has(E)&&or(E).values.length&&(c=n[s]),s++}if(c&&r)for(const E of i)n[E]=oT(r,c)}class rT extends md{constructor(i,r,s,c,E){super(i,r,s,c,E,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let h=0;h<i.length;h++){let f=i[h];if(typeof f=="string"&&(f=f.trim(),hd(f))){const T=Zm(f,r.current);T!==void 0&&(i[h]=T),h===i.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!qp.has(s)||i.length!==2)return;const[c,E]=i,d=hh(c),A=hh(E);if(d!==A)if(Sh(d)&&Sh(A))for(let h=0;h<i.length;h++){const f=i[h];typeof f=="string"&&(i[h]=parseFloat(f))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,s=[];for(let c=0;c<i.length;c++)Wp(i[c])&&s.push(c);s.length&&Cg(i,s,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Zi[s](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){var i;const{element:r,name:s,unresolvedKeyframes:c}=this;if(!r||!r.current)return;const E=r.getValue(s);E&&E.jump(this.measuredOrigin,!1);const d=c.length-1,A=c[d];c[d]=Zi[s](r.measureViewportBox(),window.getComputedStyle(r.current)),A!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=A),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([h,f])=>{r.getValue(h).set(f)}),this.resolveNoneKeyframes()}}function pd(n){return typeof n=="function"}let Fs;function pg(){Fs=void 0}const ya={now:()=>(Fs===void 0&&ya.set(Pt.isProcessing||Fp.useManualTiming?Pt.timestamp:performance.now()),Fs),set:n=>{Fs=n,queueMicrotask(pg)}},Rh=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(In.test(n)||n==="0")&&!n.startsWith("url("));function gg(n){const i=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==i)return!0}function Ng(n,i,r,s){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const E=n[n.length-1],d=Rh(c,i),A=Rh(E,i);return!d||!A?!1:gg(n)||(r==="spring"||pd(r))&&s}const Ig=40;class sT{constructor({autoplay:i=!0,delay:r=0,type:s="keyframes",repeat:c=0,repeatDelay:E=0,repeatType:d="loop",...A}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ya.now(),this.options={autoplay:i,delay:r,type:s,repeat:c,repeatDelay:E,repeatType:d,...A},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Ig?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&ag(),this._resolved}onKeyframesResolved(i,r){this.resolvedAt=ya.now(),this.hasAttemptedResolve=!0;const{name:s,type:c,velocity:E,delay:d,onComplete:A,onUpdate:h,isGenerator:f}=this.options;if(!f&&!Ng(i,s,c,E))if(d)this.options.duration=0;else{h==null||h(Xs(i,this.options,r)),A==null||A(),this.resolveFinishedPromise();return}const T=this.initPlayback(i,r);T!==!1&&(this._resolved={keyframes:i,finalKeyframe:r,...T},this.onPostResolved())}onPostResolved(){}then(i,r){return this.currentFinishedPromise.then(i,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const Xi=(n,i,r)=>{const s=i-n;return s===0?1:(r-n)/s},lT=(n,i,r=10)=>{let s="";const c=Math.max(Math.round(i/r),2);for(let E=0;E<c;E++)s+=n(Xi(0,c-1,E))+", ";return`linear(${s.substring(0,s.length-2)})`};function uT(n,i){return i?n*(1e3/i):0}const yg=5;function cT(n,i,r){const s=Math.max(i-yg,0);return uT(r-n(s),i-s)}const ut={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Mc=.001;function Lg({duration:n=ut.duration,bounce:i=ut.bounce,velocity:r=ut.velocity,mass:s=ut.mass}){let c,E,d=1-i;d=Xa(ut.minDamping,ut.maxDamping,d),n=Xa(ut.minDuration,ut.maxDuration,Za(n)),d<1?(c=f=>{const T=f*d,m=T*n,O=T-r,L=Xc(f,d),B=Math.exp(-m);return Mc-O/L*B},E=f=>{const m=f*d*n,O=m*r+r,L=Math.pow(d,2)*Math.pow(f,2)*n,B=Math.exp(-m),k=Xc(Math.pow(f,2),d);return(-c(f)+Mc>0?-1:1)*((O-L)*B)/k}):(c=f=>{const T=Math.exp(-f*n),m=(f-r)*n+1;return-Mc+T*m},E=f=>{const T=Math.exp(-f*n),m=(r-f)*(n*n);return T*m});const A=5/n,h=Dg(c,E,A);if(n=Ja(n),isNaN(h))return{stiffness:ut.stiffness,damping:ut.damping,duration:n};{const f=Math.pow(h,2)*s;return{stiffness:f,damping:d*2*Math.sqrt(s*f),duration:n}}}const Mg=12;function Dg(n,i,r){let s=r;for(let c=1;c<Mg;c++)s=s-n(s)/i(s);return s}function Xc(n,i){return n*Math.sqrt(1-i*i)}const qc=2e4;function dT(n){let i=0;const r=50;let s=n.next(i);for(;!s.done&&i<qc;)i+=r,s=n.next(i);return i>=qc?1/0:i}const Pg=["duration","bounce"],vg=["stiffness","damping","mass"];function Oh(n,i){return i.some(r=>n[r]!==void 0)}function Bg(n){let i={velocity:ut.velocity,stiffness:ut.stiffness,damping:ut.damping,mass:ut.mass,isResolvedFromDuration:!1,...n};if(!Oh(n,vg)&&Oh(n,Pg))if(n.visualDuration){const r=n.visualDuration,s=2*Math.PI/(r*1.2),c=s*s,E=2*Xa(.05,1,1-n.bounce)*Math.sqrt(c);i={...i,mass:ut.mass,stiffness:c,damping:E}}else{const r=Lg(n);i={...i,...r,mass:ut.mass},i.isResolvedFromDuration=!0}return i}function ET(n=ut.visualDuration,i=ut.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:s,restDelta:c}=r;const E=r.keyframes[0],d=r.keyframes[r.keyframes.length-1],A={done:!1,value:E},{stiffness:h,damping:f,mass:T,duration:m,velocity:O,isResolvedFromDuration:L}=Bg({...r,velocity:-Za(r.velocity||0)}),B=O||0,k=f/(2*Math.sqrt(h*T)),b=d-E,y=Za(Math.sqrt(h/T)),Y=Math.abs(b)<5;s||(s=Y?ut.restSpeed.granular:ut.restSpeed.default),c||(c=Y?ut.restDelta.granular:ut.restDelta.default);let W;if(k<1){const te=Xc(y,k);W=ue=>{const ie=Math.exp(-k*y*ue);return d-ie*((B+k*y*b)/te*Math.sin(te*ue)+b*Math.cos(te*ue))}}else if(k===1)W=te=>d-Math.exp(-y*te)*(b+(B+y*b)*te);else{const te=y*Math.sqrt(k*k-1);W=ue=>{const ie=Math.exp(-k*y*ue),ne=Math.min(te*ue,300);return d-ie*((B+k*y*b)*Math.sinh(ne)+te*b*Math.cosh(ne))/te}}const ee={calculatedDuration:L&&m||null,next:te=>{const ue=W(te);if(L)A.done=te>=m;else{let ie=0;k<1&&(ie=te===0?Ja(B):cT(W,te,ue));const ne=Math.abs(ie)<=s,fe=Math.abs(d-ue)<=c;A.done=ne&&fe}return A.value=A.done?d:ue,A},toString:()=>{const te=Math.min(dT(ee),qc),ue=lT(ie=>ee.next(te*ie).value,te,30);return te+"ms "+ue}};return ee}function Ch({keyframes:n,velocity:i=0,power:r=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:E=500,modifyTarget:d,min:A,max:h,restDelta:f=.5,restSpeed:T}){const m=n[0],O={done:!1,value:m},L=ne=>A!==void 0&&ne<A||h!==void 0&&ne>h,B=ne=>A===void 0?h:h===void 0||Math.abs(A-ne)<Math.abs(h-ne)?A:h;let k=r*i;const b=m+k,y=d===void 0?b:d(b);y!==b&&(k=y-m);const Y=ne=>-k*Math.exp(-ne/s),W=ne=>y+Y(ne),ee=ne=>{const fe=Y(ne),Le=W(ne);O.done=Math.abs(fe)<=f,O.value=O.done?y:Le};let te,ue;const ie=ne=>{L(O.value)&&(te=ne,ue=ET({keyframes:[O.value,B(O.value)],velocity:cT(W,ne,O.value),damping:c,stiffness:E,restDelta:f,restSpeed:T}))};return ie(0),{calculatedDuration:null,next:ne=>{let fe=!1;return!ue&&te===void 0&&(fe=!0,ee(ne),ie(ne)),te!==void 0&&ne>=te?ue.next(ne-te):(!fe&&ee(ne),O)}}}const bg=cr(.42,0,1,1),Hg=cr(0,0,.58,1),ST=cr(.42,0,.58,1),Gg=n=>Array.isArray(n)&&typeof n[0]!="number",gd=n=>Array.isArray(n)&&typeof n[0]=="number",Ug={linear:ta,easeIn:bg,easeInOut:ST,easeOut:Hg,circIn:fd,circInOut:Wm,circOut:Km,backIn:Ad,backInOut:Vm,backOut:xm,anticipate:Ym},ph=n=>{if(gd(n)){Gm(n.length===4);const[i,r,s,c]=n;return cr(i,r,s,c)}else if(typeof n=="string")return Ug[n];return n},Fg=(n,i)=>r=>i(n(r)),Er=(...n)=>n.reduce(Fg),rt=(n,i,r)=>n+(i-n)*r;function Dc(n,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(i-n)*6*r:r<1/2?i:r<2/3?n+(i-n)*(2/3-r)*6:n}function wg({hue:n,saturation:i,lightness:r,alpha:s}){n/=360,i/=100,r/=100;let c=0,E=0,d=0;if(!i)c=E=d=r;else{const A=r<.5?r*(1+i):r+i-r*i,h=2*r-A;c=Dc(h,A,n+1/3),E=Dc(h,A,n),d=Dc(h,A,n-1/3)}return{red:Math.round(c*255),green:Math.round(E*255),blue:Math.round(d*255),alpha:s}}function Vs(n,i){return r=>r>0?i:n}const Pc=(n,i,r)=>{const s=n*n,c=r*(i*i-s)+s;return c<0?0:Math.sqrt(c)},kg=[Jc,Xn,Ki],xg=n=>kg.find(i=>i.test(n));function gh(n){const i=xg(n);if(!i)return!1;let r=i.parse(n);return i===Ki&&(r=wg(r)),r}const Nh=(n,i)=>{const r=gh(n),s=gh(i);if(!r||!s)return Vs(n,i);const c={...r};return E=>(c.red=Pc(r.red,s.red,E),c.green=Pc(r.green,s.green,E),c.blue=Pc(r.blue,s.blue,E),c.alpha=rt(r.alpha,s.alpha,E),Xn.transform(c))},Qc=new Set(["none","hidden"]);function Vg(n,i){return Qc.has(n)?r=>r<=0?n:i:r=>r>=1?i:n}function Yg(n,i){return r=>rt(n,i,r)}function Nd(n){return typeof n=="number"?Yg:typeof n=="string"?hd(n)?Vs:Gt.test(n)?Nh:zg:Array.isArray(n)?AT:typeof n=="object"?Gt.test(n)?Nh:Kg:Vs}function AT(n,i){const r=[...n],s=r.length,c=n.map((E,d)=>Nd(E)(E,i[d]));return E=>{for(let d=0;d<s;d++)r[d]=c[d](E);return r}}function Kg(n,i){const r={...n,...i},s={};for(const c in r)n[c]!==void 0&&i[c]!==void 0&&(s[c]=Nd(n[c])(n[c],i[c]));return c=>{for(const E in s)r[E]=s[E](c);return r}}function Wg(n,i){var r;const s=[],c={color:0,var:0,number:0};for(let E=0;E<i.values.length;E++){const d=i.types[E],A=n.indexes[d][c[d]],h=(r=n.values[A])!==null&&r!==void 0?r:0;s[E]=h,c[d]++}return s}const zg=(n,i)=>{const r=In.createTransformer(i),s=or(n),c=or(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?Qc.has(n)&&!c.values.length||Qc.has(i)&&!s.values.length?Vg(n,i):Er(AT(Wg(s,c),c.values),r):Vs(n,i)};function fT(n,i,r){return typeof n=="number"&&typeof i=="number"&&typeof r=="number"?rt(n,i,r):Nd(n)(n,i)}function jg(n,i,r){const s=[],c=r||fT,E=n.length-1;for(let d=0;d<E;d++){let A=c(n[d],n[d+1]);if(i){const h=Array.isArray(i)?i[d]||ta:i;A=Er(h,A)}s.push(A)}return s}function _g(n,i,{clamp:r=!0,ease:s,mixer:c}={}){const E=n.length;if(Gm(E===i.length),E===1)return()=>i[0];if(E===2&&n[0]===n[1])return()=>i[1];n[0]>n[E-1]&&(n=[...n].reverse(),i=[...i].reverse());const d=jg(i,s,c),A=d.length,h=f=>{let T=0;if(A>1)for(;T<n.length-2&&!(f<n[T+1]);T++);const m=Xi(n[T],n[T+1],f);return d[T](m)};return r?f=>h(Xa(n[0],n[E-1],f)):h}function Jg(n,i){const r=n[n.length-1];for(let s=1;s<=i;s++){const c=Xi(0,i,s);n.push(rt(r,1,c))}}function Zg(n){const i=[0];return Jg(i,n.length-1),i}function Xg(n,i){return n.map(r=>r*i)}function qg(n,i){return n.map(()=>i||ST).splice(0,n.length-1)}function Ys({duration:n=300,keyframes:i,times:r,ease:s="easeInOut"}){const c=Gg(s)?s.map(ph):ph(s),E={done:!1,value:i[0]},d=Xg(r&&r.length===i.length?r:Zg(i),n),A=_g(d,i,{ease:Array.isArray(c)?c:qg(i,c)});return{calculatedDuration:n,next:h=>(E.value=A(h),E.done=h>=n,E)}}const Qg=n=>{const i=({timestamp:r})=>n(r);return{start:()=>it.update(i,!0),stop:()=>Nn(i),now:()=>Pt.isProcessing?Pt.timestamp:ya.now()}},$g={decay:Ch,inertia:Ch,tween:Ys,keyframes:Ys,spring:ET},eN=n=>n/100;class Id extends sT{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:r,motionValue:s,element:c,keyframes:E}=this.options,d=(c==null?void 0:c.KeyframeResolver)||md,A=(h,f)=>this.onKeyframesResolved(h,f);this.resolver=new d(E,A,r,s,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:r="keyframes",repeat:s=0,repeatDelay:c=0,repeatType:E,velocity:d=0}=this.options,A=pd(r)?r:$g[r]||Ys;let h,f;A!==Ys&&typeof i[0]!="number"&&(h=Er(eN,fT(i[0],i[1])),i=[0,100]);const T=A({...this.options,keyframes:i});E==="mirror"&&(f=A({...this.options,keyframes:[...i].reverse(),velocity:-d})),T.calculatedDuration===null&&(T.calculatedDuration=dT(T));const{calculatedDuration:m}=T,O=m+c,L=O*(s+1)-c;return{generator:T,mirroredGenerator:f,mapPercentToKeyframes:h,calculatedDuration:m,resolvedDuration:O,totalDuration:L}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,r=!1){const{resolved:s}=this;if(!s){const{keyframes:ne}=this.options;return{done:!0,value:ne[ne.length-1]}}const{finalKeyframe:c,generator:E,mirroredGenerator:d,mapPercentToKeyframes:A,keyframes:h,calculatedDuration:f,totalDuration:T,resolvedDuration:m}=s;if(this.startTime===null)return E.next(0);const{delay:O,repeat:L,repeatType:B,repeatDelay:k,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-T/this.speed,this.startTime)),r?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const y=this.currentTime-O*(this.speed>=0?1:-1),Y=this.speed>=0?y<0:y>T;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=T);let W=this.currentTime,ee=E;if(L){const ne=Math.min(this.currentTime,T)/m;let fe=Math.floor(ne),Le=ne%1;!Le&&ne>=1&&(Le=1),Le===1&&fe--,fe=Math.min(fe,L+1),!!(fe%2)&&(B==="reverse"?(Le=1-Le,k&&(Le-=k/m)):B==="mirror"&&(ee=d)),W=Xa(0,1,Le)*m}const te=Y?{done:!1,value:h[0]}:ee.next(W);A&&(te.value=A(te.value));let{done:ue}=te;!Y&&f!==null&&(ue=this.speed>=0?this.currentTime>=T:this.currentTime<=0);const ie=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ue);return ie&&c!==void 0&&(te.value=Xs(h,this.options,c)),b&&b(te.value),ie&&this.finish(),te}get duration(){const{resolved:i}=this;return i?Za(i.calculatedDuration):0}get time(){return Za(this.currentTime)}set time(i){i=Ja(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=Za(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=Qg,onPlay:r,startTime:s}=this.options;this.driver||(this.driver=i(E=>this.tick(E))),r&&r();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const tN=new Set(["opacity","clipPath","filter","transform"]);function yd(n){let i;return()=>(i===void 0&&(i=n()),i)}const aN={linearEasing:void 0};function nN(n,i){const r=yd(n);return()=>{var s;return(s=aN[i])!==null&&s!==void 0?s:r()}}const Ks=nN(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function hT(n){return!!(typeof n=="function"&&Ks()||!n||typeof n=="string"&&(n in $c||Ks())||gd(n)||Array.isArray(n)&&n.every(hT))}const Jo=([n,i,r,s])=>`cubic-bezier(${n}, ${i}, ${r}, ${s})`,$c={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Jo([0,.65,.55,1]),circOut:Jo([.55,0,1,.45]),backIn:Jo([.31,.01,.66,-.59]),backOut:Jo([.33,1.53,.69,.99])};function mT(n,i){if(n)return typeof n=="function"&&Ks()?lT(n,i):gd(n)?Jo(n):Array.isArray(n)?n.map(r=>mT(r,i)||$c.easeOut):$c[n]}function iN(n,i,r,{delay:s=0,duration:c=300,repeat:E=0,repeatType:d="loop",ease:A="easeInOut",times:h}={}){const f={[i]:r};h&&(f.offset=h);const T=mT(A,c);return Array.isArray(T)&&(f.easing=T),n.animate(f,{delay:s,duration:c,easing:Array.isArray(T)?"linear":T,fill:"both",iterations:E+1,direction:d==="reverse"?"alternate":"normal"})}function Ih(n,i){n.timeline=i,n.onfinish=null}const oN=yd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ws=10,rN=2e4;function sN(n){return pd(n.type)||n.type==="spring"||!hT(n.ease)}function lN(n,i){const r=new Id({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:n[0]};const c=[];let E=0;for(;!s.done&&E<rN;)s=r.sample(E),c.push(s.value),E+=Ws;return{times:void 0,keyframes:c,duration:E-Ws,ease:"linear"}}const TT={anticipate:Ym,backInOut:Vm,circInOut:Wm};function uN(n){return n in TT}class yh extends sT{constructor(i){super(i);const{name:r,motionValue:s,element:c,keyframes:E}=this.options;this.resolver=new rT(E,(d,A)=>this.onKeyframesResolved(d,A),r,s,c),this.resolver.scheduleResolve()}initPlayback(i,r){var s;let{duration:c=300,times:E,ease:d,type:A,motionValue:h,name:f,startTime:T}=this.options;if(!(!((s=h.owner)===null||s===void 0)&&s.current))return!1;if(typeof d=="string"&&Ks()&&uN(d)&&(d=TT[d]),sN(this.options)){const{onComplete:O,onUpdate:L,motionValue:B,element:k,...b}=this.options,y=lN(i,b);i=y.keyframes,i.length===1&&(i[1]=i[0]),c=y.duration,E=y.times,d=y.ease,A="keyframes"}const m=iN(h.owner.current,f,i,{...this.options,duration:c,times:E,ease:d});return m.startTime=T??this.calcStartTime(),this.pendingTimeline?(Ih(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:O}=this.options;h.set(Xs(i,this.options,r)),O&&O(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:c,times:E,type:A,ease:d,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:r}=i;return Za(r)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:r}=i;return Za(r.currentTime||0)}set time(i){const{resolved:r}=this;if(!r)return;const{animation:s}=r;s.currentTime=Ja(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:r}=i;return r.playbackRate}set speed(i){const{resolved:r}=this;if(!r)return;const{animation:s}=r;s.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:r}=i;return r.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:r}=i;return r.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:r}=this;if(!r)return ta;const{animation:s}=r;Ih(s,i)}return ta}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:r}=i;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:r}=i;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:r,keyframes:s,duration:c,type:E,ease:d,times:A}=i;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:f,onUpdate:T,onComplete:m,element:O,...L}=this.options,B=new Id({...L,keyframes:s,duration:c,type:E,ease:d,times:A,isGenerator:!0}),k=Ja(this.time);f.setWithVelocity(B.sample(k-Ws).value,B.sample(k).value,Ws)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:r,name:s,repeatDelay:c,repeatType:E,damping:d,type:A}=i;return oN()&&s&&tN.has(s)&&r&&r.owner&&r.owner.current instanceof HTMLElement&&!r.owner.getProps().onUpdate&&!c&&E!=="mirror"&&d!==0&&A!=="inertia"}}const cN=yd(()=>window.ScrollTimeline!==void 0);class dN{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}then(i,r){return Promise.all(this.animations).then(i).catch(r)}getAll(i){return this.animations[0][i]}setAll(i,r){for(let s=0;s<this.animations.length;s++)this.animations[s][i]=r}attachTimeline(i,r){const s=this.animations.map(c=>cN()&&c.attachTimeline?c.attachTimeline(i):r(c));return()=>{s.forEach((c,E)=>{c&&c(),this.animations[E].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let r=0;r<this.animations.length;r++)i=Math.max(i,this.animations[r].duration);return i}runAll(i){this.animations.forEach(r=>r[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function EN({when:n,delay:i,delayChildren:r,staggerChildren:s,staggerDirection:c,repeat:E,repeatType:d,repeatDelay:A,from:h,elapsed:f,...T}){return!!Object.keys(T).length}const Ld=(n,i,r,s={},c,E)=>d=>{const A=Sd(s,n)||{},h=A.delay||s.delay||0;let{elapsed:f=0}=s;f=f-Ja(h);let T={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...A,delay:-f,onUpdate:O=>{i.set(O),A.onUpdate&&A.onUpdate(O)},onComplete:()=>{d(),A.onComplete&&A.onComplete()},name:n,motionValue:i,element:E?void 0:c};EN(A)||(T={...T,...Up(n,T)}),T.duration&&(T.duration=Ja(T.duration)),T.repeatDelay&&(T.repeatDelay=Ja(T.repeatDelay)),T.from!==void 0&&(T.keyframes[0]=T.from);let m=!1;if((T.type===!1||T.duration===0&&!T.repeatDelay)&&(T.duration=0,T.delay===0&&(m=!0)),m&&!E&&i.get()!==void 0){const O=Xs(T.keyframes,A);if(O!==void 0)return it.update(()=>{T.onUpdate(O),T.onComplete()}),new dN([])}return!E&&yh.supports(T)?new yh(T):new Id(T)},SN=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),AN=n=>zc(n)?n[n.length-1]||0:n;function Md(n,i){n.indexOf(i)===-1&&n.push(i)}function Dd(n,i){const r=n.indexOf(i);r>-1&&n.splice(r,1)}class Pd{constructor(){this.subscriptions=[]}add(i){return Md(this.subscriptions,i),()=>Dd(this.subscriptions,i)}notify(i,r,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,r,s);else for(let E=0;E<c;E++){const d=this.subscriptions[E];d&&d(i,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Lh=30,fN=n=>!isNaN(parseFloat(n));class hN{constructor(i,r={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{const E=ya.now();this.updatedAt!==E&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=ya.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=fN(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new Pd);const s=this.events[i].add(r);return i==="change"?()=>{s(),it.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i,r=!0){!r||!this.passiveEffect?this.updateAndNotify(i,r):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=ya.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Lh)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Lh);return uT(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rr(n,i){return new hN(n,i)}function mN(n,i,r){n.hasValue(i)?n.getValue(i).set(r):n.addValue(i,rr(r))}function TN(n,i){const r=Zs(n,i);let{transitionEnd:s={},transition:c={},...E}=r||{};E={...E,...s};for(const d in E){const A=AN(E[d]);mN(n,d,A)}}const vd=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),RN="framerAppearId",RT="data-"+vd(RN);function OT(n){return n.props[RT]}const Ut=n=>!!(n&&n.getVelocity);function ON(n){return!!(Ut(n)&&n.add)}function ed(n,i){const r=n.getValue("willChange");if(ON(r))return r.add(i)}function CN({protectedKeys:n,needsAnimating:i},r){const s=n.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,s}function CT(n,i,{delay:r=0,transitionOverride:s,type:c}={}){var E;let{transition:d=n.getDefaultTransition(),transitionEnd:A,...h}=i;s&&(d=s);const f=[],T=c&&n.animationState&&n.animationState.getState()[c];for(const m in h){const O=n.getValue(m,(E=n.latestValues[m])!==null&&E!==void 0?E:null),L=h[m];if(L===void 0||T&&CN(T,m))continue;const B={delay:r,...Sd(d||{},m)};let k=!1;if(window.MotionHandoffAnimation){const y=OT(n);if(y){const Y=window.MotionHandoffAnimation(y,m,it);Y!==null&&(B.startTime=Y,k=!0)}}ed(n,m),O.start(Ld(m,O,L,n.shouldReduceMotion&&ei.has(m)?{type:!1}:B,n,k));const b=O.animation;b&&f.push(b)}return A&&Promise.all(f).then(()=>{it.update(()=>{A&&TN(n,A)})}),f}function td(n,i,r={}){var s;const c=Zs(n,i,r.type==="exit"?(s=n.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:E=n.getDefaultTransition()||{}}=c||{};r.transitionOverride&&(E=r.transitionOverride);const d=c?()=>Promise.all(CT(n,c,r)):()=>Promise.resolve(),A=n.variantChildren&&n.variantChildren.size?(f=0)=>{const{delayChildren:T=0,staggerChildren:m,staggerDirection:O}=E;return pN(n,i,T+f,m,O,r)}:()=>Promise.resolve(),{when:h}=E;if(h){const[f,T]=h==="beforeChildren"?[d,A]:[A,d];return f().then(()=>T())}else return Promise.all([d(),A(r.delay)])}function pN(n,i,r=0,s=0,c=1,E){const d=[],A=(n.variantChildren.size-1)*s,h=c===1?(f=0)=>f*s:(f=0)=>A-f*s;return Array.from(n.variantChildren).sort(gN).forEach((f,T)=>{f.notify("AnimationStart",i),d.push(td(f,i,{...E,delay:r+h(T)}).then(()=>f.notify("AnimationComplete",i)))}),Promise.all(d)}function gN(n,i){return n.sortNodePosition(i)}function NN(n,i,r={}){n.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(E=>td(n,E,r));s=Promise.all(c)}else if(typeof i=="string")s=td(n,i,r);else{const c=typeof i=="function"?Zs(n,i,r.custom):i;s=Promise.all(CT(n,c,r))}return s.then(()=>{n.notify("AnimationComplete",i)})}const IN=Ed.length;function pT(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?pT(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const i={};for(let r=0;r<IN;r++){const s=Ed[r],c=n.props[s];(nr(c)||c===!1)&&(i[s]=c)}return i}const yN=[...dd].reverse(),LN=dd.length;function MN(n){return i=>Promise.all(i.map(({animation:r,options:s})=>NN(n,r,s)))}function DN(n){let i=MN(n),r=Mh(),s=!0;const c=h=>(f,T)=>{var m;const O=Zs(n,T,h==="exit"?(m=n.presenceContext)===null||m===void 0?void 0:m.custom:void 0);if(O){const{transition:L,transitionEnd:B,...k}=O;f={...f,...k,...B}}return f};function E(h){i=h(n)}function d(h){const{props:f}=n,T=pT(n.parent)||{},m=[],O=new Set;let L={},B=1/0;for(let b=0;b<LN;b++){const y=yN[b],Y=r[y],W=f[y]!==void 0?f[y]:T[y],ee=nr(W),te=y===h?Y.isActive:null;te===!1&&(B=b);let ue=W===T[y]&&W!==f[y]&&ee;if(ue&&s&&n.manuallyAnimateOnMount&&(ue=!1),Y.protectedKeys={...L},!Y.isActive&&te===null||!W&&!Y.prevProp||Js(W)||typeof W=="boolean")continue;const ie=PN(Y.prevProp,W);let ne=ie||y===h&&Y.isActive&&!ue&&ee||b>B&&ee,fe=!1;const Le=Array.isArray(W)?W:[W];let me=Le.reduce(c(y),{});te===!1&&(me={});const{prevResolvedValues:Te={}}=Y,de={...Te,...me},Oe=q=>{ne=!0,O.has(q)&&(fe=!0,O.delete(q)),Y.needsAnimating[q]=!0;const se=n.getValue(q);se&&(se.liveStyle=!1)};for(const q in de){const se=me[q],Ae=Te[q];if(L.hasOwnProperty(q))continue;let le=!1;zc(se)&&zc(Ae)?le=!Hm(se,Ae):le=se!==Ae,le?se!=null?Oe(q):O.add(q):se!==void 0&&O.has(q)?Oe(q):Y.protectedKeys[q]=!0}Y.prevProp=W,Y.prevResolvedValues=me,Y.isActive&&(L={...L,...me}),s&&n.blockInitialAnimation&&(ne=!1),ne&&(!(ue&&ie)||fe)&&m.push(...Le.map(q=>({animation:q,options:{type:y}})))}if(O.size){const b={};O.forEach(y=>{const Y=n.getBaseTarget(y),W=n.getValue(y);W&&(W.liveStyle=!0),b[y]=Y??null}),m.push({animation:b})}let k=!!m.length;return s&&(f.initial===!1||f.initial===f.animate)&&!n.manuallyAnimateOnMount&&(k=!1),s=!1,k?i(m):Promise.resolve()}function A(h,f){var T;if(r[h].isActive===f)return Promise.resolve();(T=n.variantChildren)===null||T===void 0||T.forEach(O=>{var L;return(L=O.animationState)===null||L===void 0?void 0:L.setActive(h,f)}),r[h].isActive=f;const m=d(h);for(const O in r)r[O].protectedKeys={};return m}return{animateChanges:d,setActive:A,setAnimateFunction:E,getState:()=>r,reset:()=>{r=Mh(),s=!0}}}function PN(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!Hm(i,n):!1}function zn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Mh(){return{animate:zn(!0),whileInView:zn(),whileHover:zn(),whileTap:zn(),whileDrag:zn(),whileFocus:zn(),exit:zn()}}class yn{constructor(i){this.isMounted=!1,this.node=i}update(){}}class vN extends yn{constructor(i){super(i),i.animationState||(i.animationState=DN(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Js(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let BN=0;class bN extends yn{constructor(){super(...arguments),this.id=BN++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);r&&!i&&c.then(()=>r(this.id))}mount(){const{register:i}=this.node.presenceContext||{};i&&(this.unmount=i(this.id))}unmount(){}}const HN={animation:{Feature:vN},exit:{Feature:bN}},Ra={x:!1,y:!1};function gT(){return Ra.x||Ra.y}function GN(n,i,r){var s;if(n instanceof Element)return[n];if(typeof n=="string"){let c=document;const E=(s=void 0)!==null&&s!==void 0?s:c.querySelectorAll(n);return E?Array.from(E):[]}return Array.from(n)}function NT(n,i){const r=GN(n),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[r,c,()=>s.abort()]}function Dh(n){return i=>{i.pointerType==="touch"||gT()||n(i)}}function UN(n,i,r={}){const[s,c,E]=NT(n,r),d=Dh(A=>{const{target:h}=A,f=i(A);if(typeof f!="function"||!h)return;const T=Dh(m=>{f(m),h.removeEventListener("pointerleave",T)});h.addEventListener("pointerleave",T,c)});return s.forEach(A=>{A.addEventListener("pointerenter",d,c)}),E}const IT=(n,i)=>i?n===i?!0:IT(n,i.parentElement):!1,Bd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,FN=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function wN(n){return FN.has(n.tagName)||n.tabIndex!==-1}const Zo=new WeakSet;function Ph(n){return i=>{i.key==="Enter"&&n(i)}}function vc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const kN=(n,i)=>{const r=n.currentTarget;if(!r)return;const s=Ph(()=>{if(Zo.has(r))return;vc(r,"down");const c=Ph(()=>{vc(r,"up")}),E=()=>vc(r,"cancel");r.addEventListener("keyup",c,i),r.addEventListener("blur",E,i)});r.addEventListener("keydown",s,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),i)};function vh(n){return Bd(n)&&!gT()}function xN(n,i,r={}){const[s,c,E]=NT(n,r),d=A=>{const h=A.currentTarget;if(!vh(A)||Zo.has(h))return;Zo.add(h);const f=i(A),T=(L,B)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",O),!(!vh(L)||!Zo.has(h))&&(Zo.delete(h),typeof f=="function"&&f(L,{success:B}))},m=L=>{T(L,r.useGlobalTarget||IT(h,L.target))},O=L=>{T(L,!1)};window.addEventListener("pointerup",m,c),window.addEventListener("pointercancel",O,c)};return s.forEach(A=>{!wN(A)&&A.getAttribute("tabindex")===null&&(A.tabIndex=0),(r.useGlobalTarget?window:A).addEventListener("pointerdown",d,c),A.addEventListener("focus",f=>kN(f,c),c)}),E}function VN(n){return n==="x"||n==="y"?Ra[n]?null:(Ra[n]=!0,()=>{Ra[n]=!1}):Ra.x||Ra.y?null:(Ra.x=Ra.y=!0,()=>{Ra.x=Ra.y=!1})}function Sr(n){return{point:{x:n.pageX,y:n.pageY}}}const YN=n=>i=>Bd(i)&&n(i,Sr(i));function sr(n,i,r,s={passive:!0}){return n.addEventListener(i,r,s),()=>n.removeEventListener(i,r)}function Qo(n,i,r,s){return sr(n,i,YN(r),s)}const Bh=(n,i)=>Math.abs(n-i);function KN(n,i){const r=Bh(n.x,i.x),s=Bh(n.y,i.y);return Math.sqrt(r**2+s**2)}class yT{constructor(i,r,{transformPagePoint:s,contextWindow:c,dragSnapToOrigin:E=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=bc(this.lastMoveEventInfo,this.history),O=this.startEvent!==null,L=KN(m.offset,{x:0,y:0})>=3;if(!O&&!L)return;const{point:B}=m,{timestamp:k}=Pt;this.history.push({...B,timestamp:k});const{onStart:b,onMove:y}=this.handlers;O||(b&&b(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,m)},this.handlePointerMove=(m,O)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=Bc(O,this.transformPagePoint),it.update(this.updatePoint,!0)},this.handlePointerUp=(m,O)=>{this.end();const{onEnd:L,onSessionEnd:B,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=bc(m.type==="pointercancel"?this.lastMoveEventInfo:Bc(O,this.transformPagePoint),this.history);this.startEvent&&L&&L(m,b),B&&B(m,b)},!Bd(i))return;this.dragSnapToOrigin=E,this.handlers=r,this.transformPagePoint=s,this.contextWindow=c||window;const d=Sr(i),A=Bc(d,this.transformPagePoint),{point:h}=A,{timestamp:f}=Pt;this.history=[{...h,timestamp:f}];const{onSessionStart:T}=r;T&&T(i,bc(A,this.history)),this.removeListeners=Er(Qo(this.contextWindow,"pointermove",this.handlePointerMove),Qo(this.contextWindow,"pointerup",this.handlePointerUp),Qo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Nn(this.updatePoint)}}function Bc(n,i){return i?{point:i(n.point)}:n}function bh(n,i){return{x:n.x-i.x,y:n.y-i.y}}function bc({point:n},i){return{point:n,delta:bh(n,LT(i)),offset:bh(n,WN(i)),velocity:zN(i,.1)}}function WN(n){return n[0]}function LT(n){return n[n.length-1]}function zN(n,i){if(n.length<2)return{x:0,y:0};let r=n.length-1,s=null;const c=LT(n);for(;r>=0&&(s=n[r],!(c.timestamp-s.timestamp>Ja(i)));)r--;if(!s)return{x:0,y:0};const E=Za(c.timestamp-s.timestamp);if(E===0)return{x:0,y:0};const d={x:(c.x-s.x)/E,y:(c.y-s.y)/E};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Wi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const MT=1e-4,jN=1-MT,_N=1+MT,DT=.01,JN=0-DT,ZN=0+DT;function aa(n){return n.max-n.min}function XN(n,i,r){return Math.abs(n-i)<=r}function Hh(n,i,r,s=.5){n.origin=s,n.originPoint=rt(i.min,i.max,n.origin),n.scale=aa(r)/aa(i),n.translate=rt(r.min,r.max,n.origin)-n.originPoint,(n.scale>=jN&&n.scale<=_N||isNaN(n.scale))&&(n.scale=1),(n.translate>=JN&&n.translate<=ZN||isNaN(n.translate))&&(n.translate=0)}function $o(n,i,r,s){Hh(n.x,i.x,r.x,s?s.originX:void 0),Hh(n.y,i.y,r.y,s?s.originY:void 0)}function Gh(n,i,r){n.min=r.min+i.min,n.max=n.min+aa(i)}function qN(n,i,r){Gh(n.x,i.x,r.x),Gh(n.y,i.y,r.y)}function Uh(n,i,r){n.min=i.min-r.min,n.max=n.min+aa(i)}function er(n,i,r){Uh(n.x,i.x,r.x),Uh(n.y,i.y,r.y)}function QN(n,{min:i,max:r},s){return i!==void 0&&n<i?n=s?rt(i,n,s.min):Math.max(n,i):r!==void 0&&n>r&&(n=s?rt(r,n,s.max):Math.min(n,r)),n}function Fh(n,i,r){return{min:i!==void 0?n.min+i:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function $N(n,{top:i,left:r,bottom:s,right:c}){return{x:Fh(n.x,r,c),y:Fh(n.y,i,s)}}function wh(n,i){let r=i.min-n.min,s=i.max-n.max;return i.max-i.min<n.max-n.min&&([r,s]=[s,r]),{min:r,max:s}}function eI(n,i){return{x:wh(n.x,i.x),y:wh(n.y,i.y)}}function tI(n,i){let r=.5;const s=aa(n),c=aa(i);return c>s?r=Xi(i.min,i.max-s,n.min):s>c&&(r=Xi(n.min,n.max-c,i.min)),Xa(0,1,r)}function aI(n,i){const r={};return i.min!==void 0&&(r.min=i.min-n.min),i.max!==void 0&&(r.max=i.max-n.min),r}const ad=.35;function nI(n=ad){return n===!1?n=0:n===!0&&(n=ad),{x:kh(n,"left","right"),y:kh(n,"top","bottom")}}function kh(n,i,r){return{min:xh(n,i),max:xh(n,r)}}function xh(n,i){return typeof n=="number"?n:n[i]||0}const Vh=()=>({translate:0,scale:1,origin:0,originPoint:0}),zi=()=>({x:Vh(),y:Vh()}),Yh=()=>({min:0,max:0}),Et=()=>({x:Yh(),y:Yh()});function Aa(n){return[n("x"),n("y")]}function PT({top:n,left:i,right:r,bottom:s}){return{x:{min:i,max:r},y:{min:n,max:s}}}function iI({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function oI(n,i){if(!i)return n;const r=i({x:n.left,y:n.top}),s=i({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function Hc(n){return n===void 0||n===1}function nd({scale:n,scaleX:i,scaleY:r}){return!Hc(n)||!Hc(i)||!Hc(r)}function Jn(n){return nd(n)||vT(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function vT(n){return Kh(n.x)||Kh(n.y)}function Kh(n){return n&&n!=="0%"}function zs(n,i,r){const s=n-r,c=i*s;return r+c}function Wh(n,i,r,s,c){return c!==void 0&&(n=zs(n,c,s)),zs(n,r,s)+i}function id(n,i=0,r=1,s,c){n.min=Wh(n.min,i,r,s,c),n.max=Wh(n.max,i,r,s,c)}function BT(n,{x:i,y:r}){id(n.x,i.translate,i.scale,i.originPoint),id(n.y,r.translate,r.scale,r.originPoint)}const zh=.999999999999,jh=1.0000000000001;function rI(n,i,r,s=!1){const c=r.length;if(!c)return;i.x=i.y=1;let E,d;for(let A=0;A<c;A++){E=r[A],d=E.projectionDelta;const{visualElement:h}=E.options;h&&h.props.style&&h.props.style.display==="contents"||(s&&E.options.layoutScroll&&E.scroll&&E!==E.root&&_i(n,{x:-E.scroll.offset.x,y:-E.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,BT(n,d)),s&&Jn(E.latestValues)&&_i(n,E.latestValues))}i.x<jh&&i.x>zh&&(i.x=1),i.y<jh&&i.y>zh&&(i.y=1)}function ji(n,i){n.min=n.min+i,n.max=n.max+i}function _h(n,i,r,s,c=.5){const E=rt(n.min,n.max,c);id(n,i,r,E,s)}function _i(n,i){_h(n.x,i.x,i.scaleX,i.scale,i.originX),_h(n.y,i.y,i.scaleY,i.scale,i.originY)}function bT(n,i){return PT(oI(n.getBoundingClientRect(),i))}function sI(n,i,r){const s=bT(n,r),{scroll:c}=i;return c&&(ji(s.x,c.offset.x),ji(s.y,c.offset.y)),s}const HT=({current:n})=>n?n.ownerDocument.defaultView:null,lI=new WeakMap;class uI{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Et(),this.visualElement=i}start(i,{snapToCursor:r=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const c=T=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Sr(T).point)},E=(T,m)=>{const{drag:O,dragPropagation:L,onDragStart:B}=this.getProps();if(O&&!L&&(this.openDragLock&&this.openDragLock(),this.openDragLock=VN(O),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Aa(b=>{let y=this.getAxisMotionValue(b).get()||0;if(Ia.test(y)){const{projection:Y}=this.visualElement;if(Y&&Y.layout){const W=Y.layout.layoutBox[b];W&&(y=aa(W)*(parseFloat(y)/100))}}this.originPoint[b]=y}),B&&it.postRender(()=>B(T,m)),ed(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},d=(T,m)=>{const{dragPropagation:O,dragDirectionLock:L,onDirectionLock:B,onDrag:k}=this.getProps();if(!O&&!this.openDragLock)return;const{offset:b}=m;if(L&&this.currentDirection===null){this.currentDirection=cI(b),this.currentDirection!==null&&B&&B(this.currentDirection);return}this.updateAxis("x",m.point,b),this.updateAxis("y",m.point,b),this.visualElement.render(),k&&k(T,m)},A=(T,m)=>this.stop(T,m),h=()=>Aa(T=>{var m;return this.getAnimationState(T)==="paused"&&((m=this.getAxisMotionValue(T).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:f}=this.getProps();this.panSession=new yT(i,{onSessionStart:c,onStart:E,onMove:d,onSessionEnd:A,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,contextWindow:HT(this.visualElement)})}stop(i,r){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:c}=r;this.startAnimation(c);const{onDragEnd:E}=this.getProps();E&&it.postRender(()=>E(i,r))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(i,r,s){const{drag:c}=this.getProps();if(!s||!Hs(i,c,this.currentDirection))return;const E=this.getAxisMotionValue(i);let d=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(d=QN(d,this.constraints[i],this.elastic[i])),E.set(d)}resolveConstraints(){var i;const{dragConstraints:r,dragElastic:s}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,E=this.constraints;r&&Wi(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&c?this.constraints=$N(c.layoutBox,r):this.constraints=!1,this.elastic=nI(s),E!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&Aa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=aI(c.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!Wi(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const E=sI(s,c.root,this.visualElement.getTransformPagePoint());let d=eI(c.layout.layoutBox,E);if(r){const A=r(iI(d));this.hasMutatedConstraints=!!A,A&&(d=PT(A))}return d}startAnimation(i){const{drag:r,dragMomentum:s,dragElastic:c,dragTransition:E,dragSnapToOrigin:d,onDragTransitionEnd:A}=this.getProps(),h=this.constraints||{},f=Aa(T=>{if(!Hs(T,r,this.currentDirection))return;let m=h&&h[T]||{};d&&(m={min:0,max:0});const O=c?200:1e6,L=c?40:1e7,B={type:"inertia",velocity:s?i[T]:0,bounceStiffness:O,bounceDamping:L,timeConstant:750,restDelta:1,restSpeed:10,...E,...m};return this.startAxisValueAnimation(T,B)});return Promise.all(f).then(A)}startAxisValueAnimation(i,r){const s=this.getAxisMotionValue(i);return ed(this.visualElement,i),s.start(Ld(i,s,0,r,this.visualElement,!1))}stopAnimation(){Aa(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Aa(i=>{var r;return(r=this.getAxisMotionValue(i).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(i){var r;return(r=this.getAxisMotionValue(i).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[r];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){Aa(r=>{const{drag:s}=this.getProps();if(!Hs(r,s,this.currentDirection))return;const{projection:c}=this.visualElement,E=this.getAxisMotionValue(r);if(c&&c.layout){const{min:d,max:A}=c.layout.layoutBox[r];E.set(i[r]-rt(d,A,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!Wi(r)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Aa(d=>{const A=this.getAxisMotionValue(d);if(A&&this.constraints!==!1){const h=A.get();c[d]=tI({min:h,max:h},this.constraints[d])}});const{transformTemplate:E}=this.visualElement.getProps();this.visualElement.current.style.transform=E?E({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Aa(d=>{if(!Hs(d,i,null))return;const A=this.getAxisMotionValue(d),{min:h,max:f}=this.constraints[d];A.set(rt(h,f,c[d]))})}addListeners(){if(!this.visualElement.current)return;lI.set(this.visualElement,this);const i=this.visualElement.current,r=Qo(i,"pointerdown",h=>{const{drag:f,dragListener:T=!0}=this.getProps();f&&T&&this.start(h)}),s=()=>{const{dragConstraints:h}=this.getProps();Wi(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,E=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),it.read(s);const d=sr(window,"resize",()=>this.scalePositionWithinConstraints()),A=c.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:f})=>{this.isDragging&&f&&(Aa(T=>{const m=this.getAxisMotionValue(T);m&&(this.originPoint[T]+=h[T].translate,m.set(m.get()+h[T].translate))}),this.visualElement.render())}));return()=>{d(),r(),E(),A&&A()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:E=!1,dragElastic:d=ad,dragMomentum:A=!0}=i;return{...i,drag:r,dragDirectionLock:s,dragPropagation:c,dragConstraints:E,dragElastic:d,dragMomentum:A}}}function Hs(n,i,r){return(i===!0||i===n)&&(r===null||r===n)}function cI(n,i=10){let r=null;return Math.abs(n.y)>i?r="y":Math.abs(n.x)>i&&(r="x"),r}class dI extends yn{constructor(i){super(i),this.removeGroupControls=ta,this.removeListeners=ta,this.controls=new uI(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ta}unmount(){this.removeGroupControls(),this.removeListeners()}}const Jh=n=>(i,r)=>{n&&it.postRender(()=>n(i,r))};class EI extends yn{constructor(){super(...arguments),this.removePointerDownListener=ta}onPointerDown(i){this.session=new yT(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:HT(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:Jh(i),onStart:Jh(r),onMove:s,onEnd:(E,d)=>{delete this.session,c&&it.postRender(()=>c(E,d))}}}mount(){this.removePointerDownListener=Qo(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const qs=g.createContext(null);function SI(){const n=g.useContext(qs);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:s}=n,c=g.useId();g.useEffect(()=>s(c),[]);const E=g.useCallback(()=>r&&r(c),[c,r]);return!i&&r?[!1,E]:[!0]}const bd=g.createContext({}),GT=g.createContext({}),ws={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zh(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const _o={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(De.test(n))n=parseFloat(n);else return n;const r=Zh(n,i.target.x),s=Zh(n,i.target.y);return`${r}% ${s}%`}},AI={correct:(n,{treeScale:i,projectionDelta:r})=>{const s=n,c=In.parse(n);if(c.length>5)return s;const E=In.createTransformer(n),d=typeof c[0]!="number"?1:0,A=r.x.scale*i.x,h=r.y.scale*i.y;c[0+d]/=A,c[1+d]/=h;const f=rt(A,h,.5);return typeof c[2+d]=="number"&&(c[2+d]/=f),typeof c[3+d]=="number"&&(c[3+d]/=f),E(c)}},js={};function fI(n){Object.assign(js,n)}const{schedule:Hd}=Um(queueMicrotask,!1);class hI extends g.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s,layoutId:c}=this.props,{projection:E}=i;fI(mI),E&&(r.group&&r.group.add(E),s&&s.register&&c&&s.register(E),E.root.didUpdate(),E.addEventListener("animationComplete",()=>{this.safeToRemove()}),E.setOptions({...E.options,onExitComplete:()=>this.safeToRemove()})),ws.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:s,drag:c,isPresent:E}=this.props,d=s.projection;return d&&(d.isPresent=E,c||i.layoutDependency!==r||r===void 0?d.willUpdate():this.safeToRemove(),i.isPresent!==E&&(E?d.promote():d.relegate()||it.postRender(()=>{const A=d.getStack();(!A||!A.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Hd.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function UT(n){const[i,r]=SI(),s=g.useContext(bd);return C.jsx(hI,{...n,layoutGroup:s,switchLayoutGroup:g.useContext(GT),isPresent:i,safeToRemove:r})}const mI={borderRadius:{..._o,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_o,borderTopRightRadius:_o,borderBottomLeftRadius:_o,borderBottomRightRadius:_o,boxShadow:AI},FT=["TopLeft","TopRight","BottomLeft","BottomRight"],TI=FT.length,Xh=n=>typeof n=="string"?parseFloat(n):n,qh=n=>typeof n=="number"||De.test(n);function RI(n,i,r,s,c,E){c?(n.opacity=rt(0,r.opacity!==void 0?r.opacity:1,OI(s)),n.opacityExit=rt(i.opacity!==void 0?i.opacity:1,0,CI(s))):E&&(n.opacity=rt(i.opacity!==void 0?i.opacity:1,r.opacity!==void 0?r.opacity:1,s));for(let d=0;d<TI;d++){const A=`border${FT[d]}Radius`;let h=Qh(i,A),f=Qh(r,A);if(h===void 0&&f===void 0)continue;h||(h=0),f||(f=0),h===0||f===0||qh(h)===qh(f)?(n[A]=Math.max(rt(Xh(h),Xh(f),s),0),(Ia.test(f)||Ia.test(h))&&(n[A]+="%")):n[A]=f}(i.rotate||r.rotate)&&(n.rotate=rt(i.rotate||0,r.rotate||0,s))}function Qh(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const OI=wT(0,.5,Km),CI=wT(.5,.95,ta);function wT(n,i,r){return s=>s<n?0:s>i?1:r(Xi(n,i,s))}function $h(n,i){n.min=i.min,n.max=i.max}function Sa(n,i){$h(n.x,i.x),$h(n.y,i.y)}function em(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function tm(n,i,r,s,c){return n-=i,n=zs(n,1/r,s),c!==void 0&&(n=zs(n,1/c,s)),n}function pI(n,i=0,r=1,s=.5,c,E=n,d=n){if(Ia.test(i)&&(i=parseFloat(i),i=rt(d.min,d.max,i/100)-d.min),typeof i!="number")return;let A=rt(E.min,E.max,s);n===E&&(A-=i),n.min=tm(n.min,i,r,A,c),n.max=tm(n.max,i,r,A,c)}function am(n,i,[r,s,c],E,d){pI(n,i[r],i[s],i[c],i.scale,E,d)}const gI=["x","scaleX","originX"],NI=["y","scaleY","originY"];function nm(n,i,r,s){am(n.x,i,gI,r?r.x:void 0,s?s.x:void 0),am(n.y,i,NI,r?r.y:void 0,s?s.y:void 0)}function im(n){return n.translate===0&&n.scale===1}function kT(n){return im(n.x)&&im(n.y)}function om(n,i){return n.min===i.min&&n.max===i.max}function II(n,i){return om(n.x,i.x)&&om(n.y,i.y)}function rm(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function xT(n,i){return rm(n.x,i.x)&&rm(n.y,i.y)}function sm(n){return aa(n.x)/aa(n.y)}function lm(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class yI{constructor(){this.members=[]}add(i){Md(this.members,i),i.scheduleRender()}remove(i){if(Dd(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(c=>i===c);if(r===0)return!1;let s;for(let c=r;c>=0;c--){const E=this.members[c];if(E.isPresent!==!1){s=E;break}}return s?(this.promote(s),!0):!1}promote(i,r){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,r&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:s}=i;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function LI(n,i,r){let s="";const c=n.x.translate/i.x,E=n.y.translate/i.y,d=(r==null?void 0:r.z)||0;if((c||E||d)&&(s=`translate3d(${c}px, ${E}px, ${d}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:f,rotate:T,rotateX:m,rotateY:O,skewX:L,skewY:B}=r;f&&(s=`perspective(${f}px) ${s}`),T&&(s+=`rotate(${T}deg) `),m&&(s+=`rotateX(${m}deg) `),O&&(s+=`rotateY(${O}deg) `),L&&(s+=`skewX(${L}deg) `),B&&(s+=`skewY(${B}deg) `)}const A=n.x.scale*i.x,h=n.y.scale*i.y;return(A!==1||h!==1)&&(s+=`scale(${A}, ${h})`),s||"none"}const MI=(n,i)=>n.depth-i.depth;class DI{constructor(){this.children=[],this.isDirty=!1}add(i){Md(this.children,i),this.isDirty=!0}remove(i){Dd(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(MI),this.isDirty=!1,this.children.forEach(i)}}function ks(n){const i=Ut(n)?n.get():n;return SN(i)?i.toValue():i}function PI(n,i){const r=ya.now(),s=({timestamp:c})=>{const E=c-r;E>=i&&(Nn(s),n(E-i))};return it.read(s,!0),()=>Nn(s)}function vI(n){return n instanceof SVGElement&&n.tagName!=="svg"}function BI(n,i,r){const s=Ut(n)?n:rr(n);return s.start(Ld("",s,i,r)),s.animation}const Zn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Xo=typeof window<"u"&&window.MotionDebug!==void 0,Gc=["","X","Y","Z"],bI={visibility:"hidden"},um=1e3;let HI=0;function Uc(n,i,r,s){const{latestValues:c}=i;c[n]&&(r[n]=c[n],i.setStaticValue(n,0),s&&(s[n]=0))}function VT(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const r=OT(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:E}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",it,!(c||E))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&VT(s)}function YT({attachResizeListener:n,defaultParent:i,measureScroll:r,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(d={},A=i==null?void 0:i()){this.id=HI++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Xo&&(Zn.totalNodes=Zn.resolvedTargetDeltas=Zn.recalculatedProjection=0),this.nodes.forEach(FI),this.nodes.forEach(YI),this.nodes.forEach(KI),this.nodes.forEach(wI),Xo&&window.MotionDebug.record(Zn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=A?A.root||A:this,this.path=A?[...A.path,A]:[],this.parent=A,this.depth=A?A.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new DI)}addEventListener(d,A){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Pd),this.eventHandlers.get(d).add(A)}notifyListeners(d,...A){const h=this.eventHandlers.get(d);h&&h.notify(...A)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,A=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=vI(d),this.instance=d;const{layoutId:h,layout:f,visualElement:T}=this.options;if(T&&!T.current&&T.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),A&&(f||h)&&(this.isLayoutDirty=!0),n){let m;const O=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=PI(O,250),ws.hasAnimatedSinceResize&&(ws.hasAnimatedSinceResize=!1,this.nodes.forEach(dm))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&T&&(h||f)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:O,hasRelativeTargetChanged:L,layout:B})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=this.options.transition||T.getDefaultTransition()||JI,{onLayoutAnimationStart:b,onLayoutAnimationComplete:y}=T.getProps(),Y=!this.targetLayout||!xT(this.targetLayout,B)||L,W=!O&&L;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||W||O&&(Y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,W);const ee={...Sd(k,"layout"),onPlay:b,onComplete:y};(T.shouldReduceMotion||this.options.layoutRoot)&&(ee.delay=0,ee.type=!1),this.startAnimation(ee)}else O||dm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=B})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Nn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(WI),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&VT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let T=0;T<this.path.length;T++){const m=this.path[T];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:A,layout:h}=this.options;if(A===void 0&&!h)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cm);return}this.isUpdating||this.nodes.forEach(xI),this.isUpdating=!1,this.nodes.forEach(VI),this.nodes.forEach(GI),this.nodes.forEach(UI),this.clearAllSnapshots();const A=ya.now();Pt.delta=Xa(0,1e3/60,A-Pt.timestamp),Pt.timestamp=A,Pt.isProcessing=!0,yc.update.process(Pt),yc.preRender.process(Pt),yc.render.process(Pt),Pt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Hd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(kI),this.sharedNodes.forEach(zI)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,it.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){it.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Et(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:A}=this.options;A&&A.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let A=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(A=!1),A){const h=s(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,A=this.projectionDelta&&!kT(this.projectionDelta),h=this.getTransformTemplate(),f=h?h(this.latestValues,""):void 0,T=f!==this.prevTransformTemplateValue;d&&(A||Jn(this.latestValues)||T)&&(c(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const A=this.measurePageBox();let h=this.removeElementScroll(A);return d&&(h=this.removeTransform(h)),ZI(h),{animationId:this.root.animationId,measuredBox:A,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:A}=this.options;if(!A)return Et();const h=A.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(XI))){const{scroll:T}=this.root;T&&(ji(h.x,T.offset.x),ji(h.y,T.offset.y))}return h}removeElementScroll(d){var A;const h=Et();if(Sa(h,d),!((A=this.scroll)===null||A===void 0)&&A.wasRoot)return h;for(let f=0;f<this.path.length;f++){const T=this.path[f],{scroll:m,options:O}=T;T!==this.root&&m&&O.layoutScroll&&(m.wasRoot&&Sa(h,d),ji(h.x,m.offset.x),ji(h.y,m.offset.y))}return h}applyTransform(d,A=!1){const h=Et();Sa(h,d);for(let f=0;f<this.path.length;f++){const T=this.path[f];!A&&T.options.layoutScroll&&T.scroll&&T!==T.root&&_i(h,{x:-T.scroll.offset.x,y:-T.scroll.offset.y}),Jn(T.latestValues)&&_i(h,T.latestValues)}return Jn(this.latestValues)&&_i(h,this.latestValues),h}removeTransform(d){const A=Et();Sa(A,d);for(let h=0;h<this.path.length;h++){const f=this.path[h];if(!f.instance||!Jn(f.latestValues))continue;nd(f.latestValues)&&f.updateSnapshot();const T=Et(),m=f.measurePageBox();Sa(T,m),nm(A,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,T)}return Jn(this.latestValues)&&nm(A,this.latestValues),A}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var A;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==h;if(!(d||f&&this.isSharedProjectionDirty||this.isProjectionDirty||!((A=this.parent)===null||A===void 0)&&A.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:O}=this.options;if(!(!this.layout||!(m||O))){if(this.resolvedRelativeTargetAt=Pt.timestamp,!this.targetDelta&&!this.relativeTarget){const L=this.getClosestProjectingParent();L&&L.layout&&this.animationProgress!==1?(this.relativeParent=L,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Et(),this.relativeTargetOrigin=Et(),er(this.relativeTargetOrigin,this.layout.layoutBox,L.layout.layoutBox),Sa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Et(),this.targetWithTransforms=Et()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),qN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Sa(this.target,this.layout.layoutBox),BT(this.target,this.targetDelta)):Sa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const L=this.getClosestProjectingParent();L&&!!L.resumingFrom==!!this.resumingFrom&&!L.options.layoutScroll&&L.target&&this.animationProgress!==1?(this.relativeParent=L,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Et(),this.relativeTargetOrigin=Et(),er(this.relativeTargetOrigin,this.target,L.target),Sa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Xo&&Zn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||nd(this.parent.latestValues)||vT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const A=this.getLead(),h=!!this.resumingFrom||this!==A;let f=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(f=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===Pt.timestamp&&(f=!1),f)return;const{layout:T,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(T||m))return;Sa(this.layoutCorrected,this.layout.layoutBox);const O=this.treeScale.x,L=this.treeScale.y;rI(this.layoutCorrected,this.treeScale,this.path,h),A.layout&&!A.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(A.target=A.layout.layoutBox,A.targetWithTransforms=Et());const{target:B}=A;if(!B){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(em(this.prevProjectionDelta.x,this.projectionDelta.x),em(this.prevProjectionDelta.y,this.projectionDelta.y)),$o(this.projectionDelta,this.layoutCorrected,B,this.latestValues),(this.treeScale.x!==O||this.treeScale.y!==L||!lm(this.projectionDelta.x,this.prevProjectionDelta.x)||!lm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",B)),Xo&&Zn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var A;if((A=this.options.visualElement)===null||A===void 0||A.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=zi(),this.projectionDelta=zi(),this.projectionDeltaWithTransform=zi()}setAnimationOrigin(d,A=!1){const h=this.snapshot,f=h?h.latestValues:{},T={...this.latestValues},m=zi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!A;const O=Et(),L=h?h.source:void 0,B=this.layout?this.layout.source:void 0,k=L!==B,b=this.getStack(),y=!b||b.members.length<=1,Y=!!(k&&!y&&this.options.crossfade===!0&&!this.path.some(_I));this.animationProgress=0;let W;this.mixTargetDelta=ee=>{const te=ee/1e3;Em(m.x,d.x,te),Em(m.y,d.y,te),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(er(O,this.layout.layoutBox,this.relativeParent.layout.layoutBox),jI(this.relativeTarget,this.relativeTargetOrigin,O,te),W&&II(this.relativeTarget,W)&&(this.isProjectionDirty=!1),W||(W=Et()),Sa(W,this.relativeTarget)),k&&(this.animationValues=T,RI(T,f,this.latestValues,te,Y,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=te},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Nn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=it.update(()=>{ws.hasAnimatedSinceResize=!0,this.currentAnimation=BI(0,um,{...d,onUpdate:A=>{this.mixTargetDelta(A),d.onUpdate&&d.onUpdate(A)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(um),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:A,target:h,layout:f,latestValues:T}=d;if(!(!A||!h||!f)){if(this!==d&&this.layout&&f&&KT(this.options.animationType,this.layout.layoutBox,f.layoutBox)){h=this.target||Et();const m=aa(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+m;const O=aa(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+O}Sa(A,h),_i(A,T),$o(this.projectionDeltaWithTransform,this.layoutCorrected,A,T)}}registerSharedNode(d,A){this.sharedNodes.has(d)||this.sharedNodes.set(d,new yI),this.sharedNodes.get(d).add(A);const f=A.options.initialPromotionConfig;A.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(A):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:A}=this.options;return A?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:A}=this.options;return A?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:A,preserveFollowOpacity:h}={}){const f=this.getStack();f&&f.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),A&&this.setOptions({transition:A})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let A=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(A=!0),!A)return;const f={};h.z&&Uc("z",d,f,this.animationValues);for(let T=0;T<Gc.length;T++)Uc(`rotate${Gc[T]}`,d,f,this.animationValues),Uc(`skew${Gc[T]}`,d,f,this.animationValues);d.render();for(const T in f)d.setStaticValue(T,f[T]),this.animationValues&&(this.animationValues[T]=f[T]);d.scheduleRender()}getProjectionStyles(d){var A,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return bI;const f={visibility:""},T=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=ks(d==null?void 0:d.pointerEvents)||"",f.transform=T?T(this.latestValues,""):"none",f;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const k={};return this.options.layoutId&&(k.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,k.pointerEvents=ks(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!Jn(this.latestValues)&&(k.transform=T?T({},""):"none",this.hasProjected=!1),k}const O=m.animationValues||m.latestValues;this.applyTransformsToTarget(),f.transform=LI(this.projectionDeltaWithTransform,this.treeScale,O),T&&(f.transform=T(O,f.transform));const{x:L,y:B}=this.projectionDelta;f.transformOrigin=`${L.origin*100}% ${B.origin*100}% 0`,m.animationValues?f.opacity=m===this?(h=(A=O.opacity)!==null&&A!==void 0?A:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:O.opacityExit:f.opacity=m===this?O.opacity!==void 0?O.opacity:"":O.opacityExit!==void 0?O.opacityExit:0;for(const k in js){if(O[k]===void 0)continue;const{correct:b,applyTo:y}=js[k],Y=f.transform==="none"?O[k]:b(O[k],m);if(y){const W=y.length;for(let ee=0;ee<W;ee++)f[y[ee]]=Y}else f[k]=Y}return this.options.layoutId&&(f.pointerEvents=m===this?ks(d==null?void 0:d.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var A;return(A=d.currentAnimation)===null||A===void 0?void 0:A.stop()}),this.root.nodes.forEach(cm),this.root.sharedNodes.clear()}}}function GI(n){n.updateLayout()}function UI(n){var i;const r=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:c}=n.layout,{animationType:E}=n.options,d=r.source!==n.layout.source;E==="size"?Aa(m=>{const O=d?r.measuredBox[m]:r.layoutBox[m],L=aa(O);O.min=s[m].min,O.max=O.min+L}):KT(E,r.layoutBox,s)&&Aa(m=>{const O=d?r.measuredBox[m]:r.layoutBox[m],L=aa(s[m]);O.max=O.min+L,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+L)});const A=zi();$o(A,s,r.layoutBox);const h=zi();d?$o(h,n.applyTransform(c,!0),r.measuredBox):$o(h,s,r.layoutBox);const f=!kT(A);let T=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:O,layout:L}=m;if(O&&L){const B=Et();er(B,r.layoutBox,O.layoutBox);const k=Et();er(k,s,L.layoutBox),xT(B,k)||(T=!0),m.options.layoutRoot&&(n.relativeTarget=k,n.relativeTargetOrigin=B,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:r,delta:h,layoutDelta:A,hasLayoutChanged:f,hasRelativeTargetChanged:T})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function FI(n){Xo&&Zn.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function wI(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function kI(n){n.clearSnapshot()}function cm(n){n.clearMeasurements()}function xI(n){n.isLayoutDirty=!1}function VI(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function dm(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function YI(n){n.resolveTargetDelta()}function KI(n){n.calcProjection()}function WI(n){n.resetSkewAndRotation()}function zI(n){n.removeLeadSnapshot()}function Em(n,i,r){n.translate=rt(i.translate,0,r),n.scale=rt(i.scale,1,r),n.origin=i.origin,n.originPoint=i.originPoint}function Sm(n,i,r,s){n.min=rt(i.min,r.min,s),n.max=rt(i.max,r.max,s)}function jI(n,i,r,s){Sm(n.x,i.x,r.x,s),Sm(n.y,i.y,r.y,s)}function _I(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const JI={duration:.45,ease:[.4,0,.1,1]},Am=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),fm=Am("applewebkit/")&&!Am("chrome/")?Math.round:ta;function hm(n){n.min=fm(n.min),n.max=fm(n.max)}function ZI(n){hm(n.x),hm(n.y)}function KT(n,i,r){return n==="position"||n==="preserve-aspect"&&!XN(sm(i),sm(r),.2)}function XI(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const qI=YT({attachResizeListener:(n,i)=>sr(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fc={current:void 0},WT=YT({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Fc.current){const n=new qI({});n.mount(window),n.setOptions({layoutScroll:!0}),Fc.current=n}return Fc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),QI={pan:{Feature:EI},drag:{Feature:dI,ProjectionNode:WT,MeasureLayout:UT}};function mm(n,i,r){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,E=s[c];E&&it.postRender(()=>E(i,Sr(i)))}class $I extends yn{mount(){const{current:i}=this.node;i&&(this.unmount=UN(i,r=>(mm(this.node,r,"Start"),s=>mm(this.node,s,"End"))))}unmount(){}}class e0 extends yn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Er(sr(this.node.current,"focus",()=>this.onFocus()),sr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Tm(n,i,r){const{props:s}=n;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),E=s[c];E&&it.postRender(()=>E(i,Sr(i)))}class t0 extends yn{mount(){const{current:i}=this.node;i&&(this.unmount=xN(i,r=>(Tm(this.node,r,"Start"),(s,{success:c})=>Tm(this.node,s,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const od=new WeakMap,wc=new WeakMap,a0=n=>{const i=od.get(n.target);i&&i(n)},n0=n=>{n.forEach(a0)};function i0({root:n,...i}){const r=n||document;wc.has(r)||wc.set(r,{});const s=wc.get(r),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(n0,{root:n,...i})),s[c]}function o0(n,i,r){const s=i0(i);return od.set(n,r),s.observe(n),()=>{od.delete(n),s.unobserve(n)}}const r0={some:0,all:1};class s0 extends yn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:s,amount:c="some",once:E}=i,d={root:r?r.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:r0[c]},A=h=>{const{isIntersecting:f}=h;if(this.isInView===f||(this.isInView=f,E&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:T,onViewportLeave:m}=this.node.getProps(),O=f?T:m;O&&O(h)};return o0(this.node.current,d,A)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(l0(i,r))&&this.startObserver()}unmount(){}}function l0({viewport:n={}},{viewport:i={}}={}){return r=>n[r]!==i[r]}const u0={inView:{Feature:s0},tap:{Feature:t0},focus:{Feature:e0},hover:{Feature:$I}},c0={layout:{ProjectionNode:WT,MeasureLayout:UT}},Gd=g.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Qs=g.createContext({}),Ud=typeof window<"u",zT=Ud?g.useLayoutEffect:g.useEffect,jT=g.createContext({strict:!1});function d0(n,i,r,s,c){var E,d;const{visualElement:A}=g.useContext(Qs),h=g.useContext(jT),f=g.useContext(qs),T=g.useContext(Gd).reducedMotion,m=g.useRef(null);s=s||h.renderer,!m.current&&s&&(m.current=s(n,{visualState:i,parent:A,props:r,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:T}));const O=m.current,L=g.useContext(GT);O&&!O.projection&&c&&(O.type==="html"||O.type==="svg")&&E0(m.current,r,c,L);const B=g.useRef(!1);g.useInsertionEffect(()=>{O&&B.current&&O.update(r,f)});const k=r[RT],b=g.useRef(!!k&&!(!((E=window.MotionHandoffIsComplete)===null||E===void 0)&&E.call(window,k))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,k)));return zT(()=>{O&&(B.current=!0,window.MotionIsMounted=!0,O.updateFeatures(),Hd.render(O.render),b.current&&O.animationState&&O.animationState.animateChanges())}),g.useEffect(()=>{O&&(!b.current&&O.animationState&&O.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,k)}),b.current=!1))}),O}function E0(n,i,r,s){const{layoutId:c,layout:E,drag:d,dragConstraints:A,layoutScroll:h,layoutRoot:f}=i;n.projection=new r(n.latestValues,i["data-framer-portal-id"]?void 0:_T(n.parent)),n.projection.setOptions({layoutId:c,layout:E,alwaysMeasureLayout:!!d||A&&Wi(A),visualElement:n,animationType:typeof E=="string"?E:"both",initialPromotionConfig:s,layoutScroll:h,layoutRoot:f})}function _T(n){if(n)return n.options.allowProjection!==!1?n.projection:_T(n.parent)}function S0(n,i,r){return g.useCallback(s=>{s&&n.mount&&n.mount(s),i&&(s?i.mount(s):i.unmount()),r&&(typeof r=="function"?r(s):Wi(r)&&(r.current=s))},[i])}function $s(n){return Js(n.animate)||Ed.some(i=>nr(n[i]))}function JT(n){return!!($s(n)||n.variants)}function A0(n,i){if($s(n)){const{initial:r,animate:s}=n;return{initial:r===!1||nr(r)?r:void 0,animate:nr(s)?s:void 0}}return n.inherit!==!1?i:{}}function f0(n){const{initial:i,animate:r}=A0(n,g.useContext(Qs));return g.useMemo(()=>({initial:i,animate:r}),[Rm(i),Rm(r)])}function Rm(n){return Array.isArray(n)?n.join(" "):n}const Om={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qi={};for(const n in Om)qi[n]={isEnabled:i=>Om[n].some(r=>!!i[r])};function h0(n){for(const i in n)qi[i]={...qi[i],...n[i]}}const m0=Symbol.for("motionComponentSymbol");function T0({preloadedFeatures:n,createVisualElement:i,useRender:r,useVisualState:s,Component:c}){n&&h0(n);function E(A,h){let f;const T={...g.useContext(Gd),...A,layoutId:R0(A)},{isStatic:m}=T,O=f0(A),L=s(A,m);if(!m&&Ud){O0();const B=C0(T);f=B.MeasureLayout,O.visualElement=d0(c,L,T,i,B.ProjectionNode)}return C.jsxs(Qs.Provider,{value:O,children:[f&&O.visualElement?C.jsx(f,{visualElement:O.visualElement,...T}):null,r(c,A,S0(L,O.visualElement,h),L,m,O.visualElement)]})}const d=g.forwardRef(E);return d[m0]=c,d}function R0({layoutId:n}){const i=g.useContext(bd).id;return i&&n!==void 0?i+"-"+n:n}function O0(n,i){g.useContext(jT).strict}function C0(n){const{drag:i,layout:r}=qi;if(!i&&!r)return{};const s={...i,...r};return{MeasureLayout:i!=null&&i.isEnabled(n)||r!=null&&r.isEnabled(n)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const p0=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fd(n){return typeof n!="string"||n.includes("-")?!1:!!(p0.indexOf(n)>-1||/[A-Z]/u.test(n))}function ZT(n,{style:i,vars:r},s,c){Object.assign(n.style,i,c&&c.getProjectionStyles(s));for(const E in r)n.style.setProperty(E,r[E])}const XT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function qT(n,i,r,s){ZT(n,i,void 0,s);for(const c in i.attrs)n.setAttribute(XT.has(c)?c:vd(c),i.attrs[c])}function QT(n,{layout:i,layoutId:r}){return ei.has(n)||n.startsWith("origin")||(i||r!==void 0)&&(!!js[n]||n==="opacity")}function wd(n,i,r){var s;const{style:c}=n,E={};for(const d in c)(Ut(c[d])||i.style&&Ut(i.style[d])||QT(d,n)||((s=r==null?void 0:r.getValue(d))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(E[d]=c[d]);return E}function $T(n,i,r){const s=wd(n,i,r);for(const c in n)if(Ut(n[c])||Ut(i[c])){const E=ur.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[E]=n[c]}return s}function kd(n){const i=g.useRef(null);return i.current===null&&(i.current=n()),i.current}function g0({scrapeMotionValuesFromProps:n,createRenderState:i,onMount:r},s,c,E){const d={latestValues:N0(s,c,E,n),renderState:i()};return r&&(d.mount=A=>r(s,A,d)),d}const eR=n=>(i,r)=>{const s=g.useContext(Qs),c=g.useContext(qs),E=()=>g0(n,i,s,c);return r?E():kd(E)};function N0(n,i,r,s){const c={},E=s(n,{});for(const O in E)c[O]=ks(E[O]);let{initial:d,animate:A}=n;const h=$s(n),f=JT(n);i&&f&&!h&&n.inherit!==!1&&(d===void 0&&(d=i.initial),A===void 0&&(A=i.animate));let T=r?r.initial===!1:!1;T=T||d===!1;const m=T?A:d;if(m&&typeof m!="boolean"&&!Js(m)){const O=Array.isArray(m)?m:[m];for(let L=0;L<O.length;L++){const B=cd(n,O[L]);if(B){const{transitionEnd:k,transition:b,...y}=B;for(const Y in y){let W=y[Y];if(Array.isArray(W)){const ee=T?W.length-1:0;W=W[ee]}W!==null&&(c[Y]=W)}for(const Y in k)c[Y]=k[Y]}}}return c}const xd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),tR=()=>({...xd(),attrs:{}}),aR=(n,i)=>i&&typeof n=="number"?i.transform(n):n,I0={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},y0=ur.length;function L0(n,i,r){let s="",c=!0;for(let E=0;E<y0;E++){const d=ur[E],A=n[d];if(A===void 0)continue;let h=!0;if(typeof A=="number"?h=A===(d.startsWith("scale")?1:0):h=parseFloat(A)===0,!h||r){const f=aR(A,Od[d]);if(!h){c=!1;const T=I0[d]||d;s+=`${T}(${f}) `}r&&(i[d]=f)}}return s=s.trim(),r?s=r(i,c?"":s):c&&(s="none"),s}function Vd(n,i,r){const{style:s,vars:c,transformOrigin:E}=n;let d=!1,A=!1;for(const h in i){const f=i[h];if(ei.has(h)){d=!0;continue}else if(Jm(h)){c[h]=f;continue}else{const T=aR(f,Od[h]);h.startsWith("origin")?(A=!0,E[h]=T):s[h]=T}}if(i.transform||(d||r?s.transform=L0(i,n.transform,r):s.transform&&(s.transform="none")),A){const{originX:h="50%",originY:f="50%",originZ:T=0}=E;s.transformOrigin=`${h} ${f} ${T}`}}function Cm(n,i,r){return typeof n=="string"?n:De.transform(i+r*n)}function M0(n,i,r){const s=Cm(i,n.x,n.width),c=Cm(r,n.y,n.height);return`${s} ${c}`}const D0={offset:"stroke-dashoffset",array:"stroke-dasharray"},P0={offset:"strokeDashoffset",array:"strokeDasharray"};function v0(n,i,r=1,s=0,c=!0){n.pathLength=1;const E=c?D0:P0;n[E.offset]=De.transform(-s);const d=De.transform(i),A=De.transform(r);n[E.array]=`${d} ${A}`}function Yd(n,{attrX:i,attrY:r,attrScale:s,originX:c,originY:E,pathLength:d,pathSpacing:A=1,pathOffset:h=0,...f},T,m){if(Vd(n,f,m),T){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:O,style:L,dimensions:B}=n;O.transform&&(B&&(L.transform=O.transform),delete O.transform),B&&(c!==void 0||E!==void 0||L.transform)&&(L.transformOrigin=M0(B,c!==void 0?c:.5,E!==void 0?E:.5)),i!==void 0&&(O.x=i),r!==void 0&&(O.y=r),s!==void 0&&(O.scale=s),d!==void 0&&v0(O,d,A,h,!1)}const Kd=n=>typeof n=="string"&&n.toLowerCase()==="svg",B0={useVisualState:eR({scrapeMotionValuesFromProps:$T,createRenderState:tR,onMount:(n,i,{renderState:r,latestValues:s})=>{it.read(()=>{try{r.dimensions=typeof i.getBBox=="function"?i.getBBox():i.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),it.render(()=>{Yd(r,s,Kd(i.tagName),n.transformTemplate),qT(i,r)})}})},b0={useVisualState:eR({scrapeMotionValuesFromProps:wd,createRenderState:xd})};function nR(n,i,r){for(const s in i)!Ut(i[s])&&!QT(s,r)&&(n[s]=i[s])}function H0({transformTemplate:n},i){return g.useMemo(()=>{const r=xd();return Vd(r,i,n),Object.assign({},r.vars,r.style)},[i])}function G0(n,i){const r=n.style||{},s={};return nR(s,r,n),Object.assign(s,H0(n,i)),s}function U0(n,i){const r={},s=G0(n,i);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=s,r}const F0=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function _s(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||F0.has(n)}let iR=n=>!_s(n);function w0(n){n&&(iR=i=>i.startsWith("on")?!_s(i):n(i))}try{w0(require("@emotion/is-prop-valid").default)}catch{}function k0(n,i,r){const s={};for(const c in n)c==="values"&&typeof n.values=="object"||(iR(c)||r===!0&&_s(c)||!i&&!_s(c)||n.draggable&&c.startsWith("onDrag"))&&(s[c]=n[c]);return s}function x0(n,i,r,s){const c=g.useMemo(()=>{const E=tR();return Yd(E,i,Kd(s),n.transformTemplate),{...E.attrs,style:{...E.style}}},[i]);if(n.style){const E={};nR(E,n.style,n),c.style={...E,...c.style}}return c}function V0(n=!1){return(r,s,c,{latestValues:E},d)=>{const h=(Fd(r)?x0:U0)(s,E,d,r),f=k0(s,typeof r=="string",n),T=r!==g.Fragment?{...f,...h,ref:c}:{},{children:m}=s,O=g.useMemo(()=>Ut(m)?m.get():m,[m]);return g.createElement(r,{...T,children:O})}}function Y0(n,i){return function(s,{forwardMotionProps:c}={forwardMotionProps:!1}){const d={...Fd(s)?B0:b0,preloadedFeatures:n,useRender:V0(c),createVisualElement:i,Component:s};return T0(d)}}const rd={current:null},oR={current:!1};function K0(){if(oR.current=!0,!!Ud)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>rd.current=n.matches;n.addListener(i),i()}else rd.current=!1}function W0(n,i,r){for(const s in i){const c=i[s],E=r[s];if(Ut(c))n.addValue(s,c);else if(Ut(E))n.addValue(s,rr(c,{owner:n}));else if(E!==c)if(n.hasValue(s)){const d=n.getValue(s);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(s);n.addValue(s,rr(d!==void 0?d:c,{owner:n}))}}for(const s in r)i[s]===void 0&&n.removeValue(s);return i}const pm=new WeakMap,z0=[...qm,Gt,In],j0=n=>z0.find(Xm(n)),gm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _0{scrapeMotionValuesFromProps(i,r,s){return{}}constructor({parent:i,props:r,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:E,visualState:d},A={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=md,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const O=ya.now();this.renderScheduledAt<O&&(this.renderScheduledAt=O,it.render(this.render,!1,!0))};const{latestValues:h,renderState:f}=d;this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=f,this.parent=i,this.props=r,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=A,this.blockInitialAnimation=!!E,this.isControllingVariants=$s(r),this.isVariantNode=JT(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:T,...m}=this.scrapeMotionValuesFromProps(r,{},this);for(const O in m){const L=m[O];h[O]!==void 0&&Ut(L)&&L.set(h[O],!1)}}mount(i){this.current=i,pm.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),oR.current||K0(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:rd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){pm.delete(this.current),this.projection&&this.projection.unmount(),Nn(this.notifyUpdate),Nn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(i,r){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=ei.has(i),c=r.on("change",A=>{this.latestValues[i]=A,this.props.onUpdate&&it.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),E=r.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{c(),E(),d&&d(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in qi){const r=qi[i];if(!r)continue;const{isEnabled:s,Feature:c}=r;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const E=this.features[i];E.isMounted?E.update():(E.mount(),E.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Et()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<gm.length;s++){const c=gm[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const E="on"+c,d=i[E];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=W0(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const s=this.values.get(i);r!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&r!==void 0&&(s=rr(r===null?void 0:r,{owner:this}),this.addValue(i,s)),s}readValue(i,r){var s;let c=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(s=this.getBaseTargetFromProps(this.props,i))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,i,this.options);return c!=null&&(typeof c=="string"&&(jm(c)||zm(c))?c=parseFloat(c):!j0(c)&&In.test(r)&&(c=oT(i,r)),this.setBaseTarget(i,Ut(c)?c.get():c)),Ut(c)?c.get():c}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var r;const{initial:s}=this.props;let c;if(typeof s=="string"||typeof s=="object"){const d=cd(this.props,s,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);d&&(c=d[i])}if(s&&c!==void 0)return c;const E=this.getBaseTargetFromProps(this.props,i);return E!==void 0&&!Ut(E)?E:this.initialValues[i]!==void 0&&c===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new Pd),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}}class rR extends _0{constructor(){super(...arguments),this.KeyframeResolver=rT}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){return i.style?i.style[r]:void 0}removeValueFromRenderState(i,{vars:r,style:s}){delete r[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Ut(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function J0(n){return window.getComputedStyle(n)}class Z0 extends rR{constructor(){super(...arguments),this.type="html",this.renderInstance=ZT}readValueFromInstance(i,r){if(ei.has(r)){const s=Cd(r);return s&&s.default||0}else{const s=J0(i),c=(Jm(r)?s.getPropertyValue(r):s[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:r}){return bT(i,r)}build(i,r,s){Vd(i,r,s.transformTemplate)}scrapeMotionValuesFromProps(i,r,s){return wd(i,r,s)}}class X0 extends rR{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Et}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(ei.has(r)){const s=Cd(r);return s&&s.default||0}return r=XT.has(r)?r:vd(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,s){return $T(i,r,s)}build(i,r,s){Yd(i,r,this.isSVGTag,s.transformTemplate)}renderInstance(i,r,s,c){qT(i,r,s,c)}mount(i){this.isSVGTag=Kd(i.tagName),super.mount(i)}}const q0=(n,i)=>Fd(n)?new X0(i):new Z0(i,{allowProjection:n!==g.Fragment}),Q0=Y0({...HN,...u0,...QI,...c0},q0),Ar=vp(Q0);class $0 extends g.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=r.offsetHeight||0,s.width=r.offsetWidth||0,s.top=r.offsetTop,s.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ey({children:n,isPresent:i}){const r=g.useId(),s=g.useRef(null),c=g.useRef({width:0,height:0,top:0,left:0}),{nonce:E}=g.useContext(Gd);return g.useInsertionEffect(()=>{const{width:d,height:A,top:h,left:f}=c.current;if(i||!s.current||!d||!A)return;s.current.dataset.motionPopId=r;const T=document.createElement("style");return E&&(T.nonce=E),document.head.appendChild(T),T.sheet&&T.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${A}px !important;
            top: ${h}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(T)}},[i]),C.jsx($0,{isPresent:i,childRef:s,sizeRef:c,children:g.cloneElement(n,{ref:s})})}const ty=({children:n,initial:i,isPresent:r,onExitComplete:s,custom:c,presenceAffectsLayout:E,mode:d})=>{const A=kd(ay),h=g.useId(),f=g.useCallback(m=>{A.set(m,!0);for(const O of A.values())if(!O)return;s&&s()},[A,s]),T=g.useMemo(()=>({id:h,initial:i,isPresent:r,custom:c,onExitComplete:f,register:m=>(A.set(m,!1),()=>A.delete(m))}),E?[Math.random(),f]:[r,f]);return g.useMemo(()=>{A.forEach((m,O)=>A.set(O,!1))},[r]),g.useEffect(()=>{!r&&!A.size&&s&&s()},[r]),d==="popLayout"&&(n=C.jsx(ey,{isPresent:r,children:n})),C.jsx(qs.Provider,{value:T,children:n})};function ay(){return new Map}const Gs=n=>n.key||"";function Nm(n){const i=[];return g.Children.forEach(n,r=>{g.isValidElement(r)&&i.push(r)}),i}const ny=({children:n,exitBeforeEnter:i,custom:r,initial:s=!0,onExitComplete:c,presenceAffectsLayout:E=!0,mode:d="sync"})=>{const A=g.useMemo(()=>Nm(n),[n]),h=A.map(Gs),f=g.useRef(!0),T=g.useRef(A),m=kd(()=>new Map),[O,L]=g.useState(A),[B,k]=g.useState(A);zT(()=>{f.current=!1,T.current=A;for(let Y=0;Y<B.length;Y++){const W=Gs(B[Y]);h.includes(W)?m.delete(W):m.get(W)!==!0&&m.set(W,!1)}},[B,h.length,h.join("-")]);const b=[];if(A!==O){let Y=[...A];for(let W=0;W<B.length;W++){const ee=B[W],te=Gs(ee);h.includes(te)||(Y.splice(W,0,ee),b.push(ee))}d==="wait"&&b.length&&(Y=b),k(Nm(Y)),L(A);return}const{forceRender:y}=g.useContext(bd);return C.jsx(C.Fragment,{children:B.map(Y=>{const W=Gs(Y),ee=A===B||h.includes(W),te=()=>{if(m.has(W))m.set(W,!0);else return;let ue=!0;m.forEach(ie=>{ie||(ue=!1)}),ue&&(y==null||y(),k(T.current),c&&c())};return C.jsx(ty,{isPresent:ee,initial:!f.current||s?void 0:!1,custom:ee?void 0:r,presenceAffectsLayout:E,mode:d,onExitComplete:ee?void 0:te,children:Y},W)})})},iy=Ar.div,oy=({onClose:n})=>{const i=Pm(),r=i.totalTimeMs/1e3,s=r>3600?`${Math.floor(r/3600)}h ${Math.floor(r%3600/60)}m`:r>60?`${Math.floor(r/60)}m ${Math.floor(r%60)}s`:`${Math.floor(r)}s`,c=g.useMemo(()=>tr().length+xs().length+ar().length,[]),E=g.useMemo(()=>{const d=new Set;return[...tr(),...xs(),...ar()].forEach(A=>{A.words.forEach(h=>d.add(h.trim().toUpperCase()))}),d.size},[]);return C.jsx("div",{className:"absolute inset-0 z-[600] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 font-oswald",children:C.jsxs(iy,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-6 shadow-[0_0_40px_rgba(0,229,255,0.2)] flex flex-col gap-6",children:[C.jsxs("div",{className:"flex justify-between items-center border-b border-zinc-800 pb-2",children:[C.jsx("h2",{className:"text-3xl font-black text-neon-blue uppercase tracking-tighter italic",children:"HALL OF FAME"}),C.jsx("button",{onClick:n,className:"text-zinc-500 hover:text-white p-2",children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),C.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[C.jsx(Vi,{label:"TOTAL SCORE",value:i.totalScore,color:"text-neon-yellow"}),C.jsx(Vi,{label:"LEVELS BEAT",value:i.levelsCompleted,color:"text-neon-pink"}),C.jsx(Vi,{label:"ROWS SOLVED",value:i.rowsSolved,color:"text-neon-green"}),C.jsx(Vi,{label:"TOTAL MOVES",value:i.totalMoves,color:"text-neon-aqua"}),C.jsx(Vi,{label:"TIME PLAYED",value:s,color:"text-white"}),C.jsx(Vi,{label:"HINTS USED",value:i.hintsUsed,color:"text-neon-red"})]}),C.jsxs("div",{className:"mt-2 p-3 bg-black/50 border border-zinc-800 rounded-medium flex flex-col gap-3",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"CATEGORY MASTERY"}),C.jsxs("div",{className:"text-2xl font-black text-neon-gold leading-none mb-1",children:[i.solvedCategoryIds.length," / ",c]}),C.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:C.jsx("div",{className:"h-full bg-neon-gold shadow-[0_0_10px_#FFD400]",style:{width:`${Math.min(100,i.solvedCategoryIds.length/c*100)}%`}})})]}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"WORD MASTERY"}),C.jsxs("div",{className:"text-2xl font-black text-neon-purple leading-none mb-1",children:[i.solvedWords?i.solvedWords.length:0," / ",E]}),C.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:C.jsx("div",{className:"h-full bg-neon-purple shadow-[0_0_10px_#D400FF]",style:{width:`${Math.min(100,(i.solvedWords?i.solvedWords.length:0)/E*100)}%`}})})]})]}),C.jsx("button",{onClick:n,className:"w-full py-4 bg-white text-black font-black text-xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg",children:"BACK TO GAME"})]})})},Vi=({label:n,value:i,color:r})=>C.jsxs("div",{className:"flex flex-col gap-0.5",children:[C.jsx("span",{className:"text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none",children:n}),C.jsx("span",{className:`text-xl font-black ${r} tracking-tight`,children:i})]}),Wd={textShadow:"2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 3px 3px 0px rgba(0,0,0,0.6)",WebkitTextStroke:"1px black",paintOrder:"stroke fill",fontWeight:900},ry={textShadow:`
    2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    0 4px 4px rgba(0,0,0,0.4)
  `,filter:"drop-shadow(0 2px 2px rgba(0,0,0,0.3))",paintOrder:"stroke fill"},sy={"bg-neon-red":"linear-gradient(180deg, #FF073A 0%, #D400FF 100%)","bg-neon-orange":"linear-gradient(180deg, #FF5F1F 0%, #F9FF00 100%)","bg-neon-yellow":"linear-gradient(180deg, #F9FF00 0%, #39FF14 100%)","bg-neon-lime":"linear-gradient(180deg, #39FF14 0%, #00E5FF 100%)","bg-neon-green":"linear-gradient(180deg, #00F000 0%, #0066FF 100%)","bg-neon-mint":"linear-gradient(180deg, #00FF9F 0%, #FF1FBF 100%)","bg-neon-cyan":"linear-gradient(180deg, #00FFFF 0%, #B026FF 100%)","bg-neon-sky-blue":"linear-gradient(180deg, #00BFFF 0%, #FF00FF 100%)","bg-neon-blue":"linear-gradient(180deg, #0066FF 0%, #FF073A 100%)","bg-neon-violet":"linear-gradient(180deg, #B026FF 0%, #00FFFF 100%)","bg-neon-purple":"linear-gradient(180deg, #D400FF 0%, #FF5F1F 100%)","bg-neon-magenta":"linear-gradient(180deg, #FF00FF 0%, #F9FF00 100%)","bg-neon-pink":"linear-gradient(180deg, #FF1FBF 0%, #00F000 100%)","bg-neon-rose":"linear-gradient(180deg, #FF0055 0%, #00BFFF 100%)"},kc=["linear-gradient(180deg, #FF073A 0%, #7B00FF 33%, #0066FF 66%, #39FF14 100%)","linear-gradient(180deg, #00E5FF 0%, #FF1FBF 100%)","linear-gradient(180deg, #F9FF00 0%, #FF5F1F 100%)"],sR=(n,i)=>{if(n){for(const[r,s]of Object.entries(sy))if(n.includes(r))return`${s} fixed`}if(i){let r=0;for(let c=0;c<i.length;c++)r=i.charCodeAt(c)+((r<<5)-r);const s=Math.abs(r%kc.length);return`${kc[s]} fixed`}return`${kc[0]} fixed`},ly={neutral:{scale:1,zIndex:10,transition:{duration:.1}},selected:{scale:1.03,transition:{duration:.1},zIndex:50},"correct-preview":{scale:1.05,transition:{duration:.2},zIndex:55},"swap-target":{scale:1.03,transition:{duration:.1},zIndex:40},swapping:{scale:1.05,zIndex:100,transition:{duration:.1}},"fading-out-bg":{scale:1,transition:{duration:.25}},solved:{scale:[1,1.12,1],transition:{duration:.3,ease:"easeOut"},zIndex:20},wrong:{x:[0,-6,6,-6,6,0],scale:1.02,transition:{duration:.3},zIndex:60}},uy=(n,i)=>{const r="border-4 border-white shadow-[0_0_20px_rgba(255,255,255,1)]",s="border-4 border-white shadow-[0_0_20px_#39FF14]",c="border-4 border-white shadow-[0_0_20px_#FF073A]";switch(n){case"selected":case"swapping":return`${r} z-50`;case"swap-target":return`${r} z-40`;case"correct-preview":return`bg-neon-lime ${s} z-55`;case"locked":return`${r} z-30`;case"fading-out-bg":return"border-4 border-white shadow-none transition-colors duration-250";case"solved":return i?`${i} border-4 border-white shadow-none`:"bg-zinc-800 border-4 border-white shadow-none";case"wrong":return`bg-neon-red ${c} z-60`;default:return"bg-black border-4 border-white shadow-none"}},cy=(n,i,r)=>{const s="font-oswald font-black uppercase leading-none";if(i)return r?`${s} text-2xl md:text-3xl`:`${s} text-4xl md:text-6xl`;const E=(n||"").length;return E>12?`${s} text-[10px] md:text-[16px] lg:text-[22px] tracking-tight`:E>9?`${s} text-[12px] md:text-[20px] lg:text-[28px] tracking-tight`:E>6?`${s} text-[14px] md:text-[26px] lg:text-[36px] tracking-tight`:`${s} text-[18px] md:text-[32px] lg:text-[48px] tracking-wide`},Im=Ar,dy={fontFamily:'"Oswald", sans-serif',backfaceVisibility:"hidden",WebkitFontSmoothing:"antialiased"},lR=lr.forwardRef(({data:n,onClick:i,disabled:r,targetColor:s,...c},E)=>{const d=n.status==="swapping"||n.status==="swap-target",A=n.status==="solved",h=n.status==="selected",f=n.status==="correct-preview",T=n.status==="locked",m=n.status==="fading-out-bg",O=uy(n.status,n.color||s),L=cy(n.word,n.isEmoji,A);let B={};if(A){const y=n.color||s;B.background=sR(y,n.categoryId),B.backgroundSize="100% 100vh",B.backgroundRepeat="no-repeat"}else h||n.status==="swapping"?B.backgroundColor="#00E5FF":n.status==="swap-target"?B.backgroundColor="#FF1FBF":T?B.backgroundColor="#FFD400":f?B.backgroundColor="#39FF14":B.backgroundColor="#000000";const k=()=>{if(n.isEmoji)return n.word;const y=(n.word||"").trim().split(/\s+/);return y.length<=1?n.word:y.map((Y,W)=>C.jsx("span",{className:"block w-full leading-[1.1]",children:Y},W))},b=n.isEmoji?{filter:A?"drop-shadow(0 0 5px rgba(255,255,255,0.5)) brightness(1.2)":h||d||f?"drop-shadow(0 0 8px #FFFFFF)":"none"}:{};return C.jsx("div",{className:"relative w-full h-full flex flex-col justify-end overflow-visible touch-action-manipulation",children:C.jsx(Im.div,{layout:!0,ref:E,initial:"neutral",animate:n.status,variants:ly,onClick:()=>!r&&i(n.id),className:`relative w-full flex items-center justify-center cursor-pointer select-none rounded-small overflow-hidden z-10 ${O} h-full touch-action-manipulation`,style:{...dy,...B,transition:"background-color 0.25s ease-in-out, background 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out"},...c,children:C.jsx(ny,{mode:"wait",children:C.jsx(Im.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"},className:`${L} text-white z-30 text-center px-1 pointer-events-none w-full flex flex-col items-center justify-center`,style:{...n.isEmoji?ry:Wd,...b},children:k()},n.word)})})})});lR.displayName="Tile";const ti=lr.memo(lR),Ey=({text:n,sizeClass:i="text-2xl",strokeOuter:r="8px",strokeInner:s="4px",className:c="",active:E=!0,gradient:d="linear-gradient(to right, #FF1FBF, #00E5FF, #F9FF00, #FF1FBF)"})=>C.jsxs("div",{className:`relative inline-block ${c} ${E?"":"opacity-40 grayscale contrast-125"}`,children:[C.jsx("style",{children:`
          @keyframes arcade-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}),C.jsx("span",{className:`absolute inset-0 ${i} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{color:"rgba(0,0,0,0.8)",transform:"translate(3px, 3px)",zIndex:-1,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:n}),C.jsx("span",{className:`absolute inset-0 ${i} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{WebkitTextStroke:`${r} white`,color:"transparent",zIndex:0},children:n}),C.jsx("span",{className:`absolute inset-0 ${i} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{WebkitTextStroke:`${s} black`,color:"transparent",zIndex:10},children:n}),C.jsx("span",{className:`relative z-20 ${i} font-black uppercase font-oswald leading-none tracking-tight`,style:{backgroundImage:d,backgroundSize:"600% auto",WebkitBackgroundClip:"text",color:"transparent",animation:E?"arcade-flow 12s linear infinite":"none"},children:n})]}),ym=({path:n,viewBox:i="0 0 24 24",className:r="",active:s=!0,sizeClass:c="w-8 h-8"})=>{const d=`icon-grad-${lr.useId()}`,A=[{offset:"0%",color:"#FF073A"},{offset:"17%",color:"#FF5F1F"},{offset:"33%",color:"#F9FF00"},{offset:"50%",color:"#39FF14"},{offset:"67%",color:"#00FFFF"},{offset:"83%",color:"#0066FF"},{offset:"100%",color:"#FF073A"}];return C.jsxs("div",{className:`relative ${c} ${r} ${s?"":"opacity-50 grayscale"}`,children:[C.jsx("svg",{viewBox:i,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:0},children:C.jsx("path",{d:n,fill:"white",stroke:"white",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round"})}),C.jsx("svg",{viewBox:i,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:10},children:C.jsx("path",{d:n,fill:"black",stroke:"black",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),C.jsxs("svg",{viewBox:i,className:"relative w-full h-full overflow-visible",style:{zIndex:20},children:[C.jsx("defs",{children:C.jsxs("linearGradient",{id:d,x1:"0%",y1:"0%",x2:"400%",y2:"0%",spreadMethod:"repeat",children:[A.map((h,f)=>C.jsx("stop",{offset:h.offset,stopColor:h.color},f)),C.jsx("animateTransform",{attributeName:"gradientTransform",type:"translate",from:"0 0",to:"-4 0",dur:"8s",repeatCount:"indefinite"})]})}),C.jsx("path",{d:n,fill:s?`url(#${d})`:"#555"})]})]})},zd=({modeName:n,levelIndex:i,onOpenSettings:r,isReviewing:s,onNext:c,hintsEnabled:E,onToggleHints:d,children:A,leftContent:h,rowsLeft:f})=>C.jsxs("header",{className:"flex items-center justify-between px-2 sm:px-4 shrink-0 z-[60] bg-black select-none w-full gap-2 text-right overflow-hidden",style:{height:eh,minHeight:eh},children:[C.jsx("div",{className:"flex-1 flex items-center justify-start gap-3 h-full",children:h}),C.jsxs("div",{className:"flex items-center gap-2 justify-end",children:[A,s&&c?C.jsx("div",{className:"pr-1",children:C.jsx("button",{onClick:c,className:"px-6 py-1.5 md:px-10 md:py-2 text-white font-black font-oswald text-sm md:text-base rounded-small border-4 border-white shadow-[0_0_20px_rgba(255,255,255,1)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap bg-black",style:Wd,children:"NEXT PUZZLE"})}):C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"flex flex-col items-end justify-center mr-2",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-0.5 justify-end",children:[C.jsxs("span",{className:"text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest font-oswald",children:["LVL ",i]}),f!==void 0&&C.jsxs("span",{className:"text-[10px] md:text-xs text-neon-blue font-bold uppercase border-l border-zinc-800 pl-2 font-oswald",children:["ROWS: ",f]})]}),C.jsx(Ey,{text:n,sizeClass:"text-2xl md:text-3xl",gradient:"linear-gradient(to right, #FF073A, #FF5F1F, #F9FF00, #39FF14, #00FFFF, #0066FF, #FF073A)"})]}),d&&C.jsx("button",{onClick:d,className:"transform transition-transform active:scale-95 hover:scale-110",title:"Toggle Hints",children:C.jsx(ym,{path:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",active:E,sizeClass:"w-7 h-7 md:w-8 md:h-8"})})]}),C.jsx("button",{onClick:r,className:"transform transition-transform active:scale-95 hover:scale-110 ml-1",title:"Settings",children:C.jsx(ym,{path:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84a.484.484 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 0 0-.59.22L2.65 8.91a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.27.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",active:!0,sizeClass:"w-7 h-7 md:w-8 md:h-8"})})]})]}),uR=[{id:"t0",word:"APPLE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t1",word:"BANANA",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t2",word:"GRAPE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t3",word:"DOG",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t4",word:"CAT",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t5",word:"LION",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t6",word:"TIGER",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t7",word:"PEAR",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t8",word:"RED",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t9",word:"BLUE",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t10",word:"GREEN",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t11",word:"YELLOW",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t12",word:"HAMMER",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t13",word:"DRILL",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t14",word:"SAW",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t15",word:"WRENCH",categoryId:"tool",categoryName:"TOOL",status:"neutral"}],Sy=()=>{const n=JSON.parse(JSON.stringify(uR)),i=n[10];n[10]=n[13],n[13]=i;const r=n[11];return n[11]=n[12],n[12]=r,n},Ay=n=>n===Ie.CLASSIC?"CLASSIC GRID":n===Ie.LEVEL_EMOJI?"EMOJI MATCH":n===Ie.LEVEL_SYNONYMS?"SYNONYMS":n===Ie.LEVEL_THEMED?"THEMED":n===Ie.LEVEL_MIND_MATCH?"MIND MATCH":"TUTORIAL",fy=({mode:n,onComplete:i})=>{const r=n===Ie.CLASSIC||n===Ie.LEVEL_EMOJI||n===Ie.LEVEL_THEMED||n===Ie.LEVEL_SYNONYMS,[s,c]=g.useState(1),[E,d]=g.useState(r?Sy():uR),A=g.useRef(new Map),h=async(T,m)=>{const O=A.current.get(T),L=A.current.get(m);if(He.playSwap(),O&&L){const B=O.getBoundingClientRect(),k=L.getBoundingClientRect(),b=k.left-B.left,y=k.top-B.top;O.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",O.style.transform=`translate(${b}px, ${y}px) scale(1.1)`,O.style.zIndex="50",O.style.boxShadow="0 10px 20px rgba(0,0,0,0.5)",L.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",L.style.transform=`translate(${-b}px, ${-y}px) scale(0.9)`,L.style.zIndex="40",await new Promise(Y=>setTimeout(Y,400)),O.style.transition="",O.style.transform="",O.style.zIndex="",O.style.boxShadow="",L.style.transition="",L.style.transform="",L.style.zIndex=""}};g.useEffect(()=>{if(!r)return;let T=!0;return(async()=>{if(await new Promise(b=>setTimeout(b,600)),!T)return;const O="t13",L="t10";if(await new Promise(b=>setTimeout(b,300)),!T||(d(b=>b.map(y=>y.id===O?{...y,status:"selected"}:y)),He.playSelect(),await new Promise(b=>setTimeout(b,400)),!T)||(d(b=>b.map(y=>y.id===L?{...y,status:"swap-target"}:y)),He.playSelect(),await new Promise(b=>setTimeout(b,200)),!T)||(await h(O,L),d(b=>{const y=[...b],Y=y.findIndex(ee=>ee.id===O),W=y.findIndex(ee=>ee.id===L);return[y[Y],y[W]]=[y[W],y[Y]],y[Y]={...y[Y],status:"neutral"},y[W]={...y[W],status:"neutral"},y}),await new Promise(b=>setTimeout(b,400)),!T))return;const B="t12",k="t11";await new Promise(b=>setTimeout(b,300)),T&&(d(b=>b.map(y=>y.id===B?{...y,status:"selected"}:y)),He.playSelect(),await new Promise(b=>setTimeout(b,400)),T&&(d(b=>b.map(y=>y.id===k?{...y,status:"swap-target"}:y)),He.playSelect(),await new Promise(b=>setTimeout(b,200)),T&&(await h(B,k),d(b=>{const y=[...b],Y=y.findIndex(ee=>ee.id===B),W=y.findIndex(ee=>ee.id===k);return[y[Y],y[W]]=[y[W],y[Y]],y[Y]={...y[Y],status:"neutral"},y[W]={...y[W],status:"neutral"},y}),await new Promise(b=>setTimeout(b,400)),T&&(He.playRowSolved(),d(b=>b.map((y,Y)=>Y>=8&&Y<12?{...y,status:"solved",color:"bg-neon-green border-white"}:Y>=12?{...y,status:"solved",color:"bg-neon-yellow border-white"}:y)),c(4),await new Promise(b=>setTimeout(b,600)),T&&(He.playSelect(),d(b=>b.map(y=>y.id==="t3"?{...y,status:"selected"}:y)),c(5),await new Promise(b=>setTimeout(b,800)),T&&(He.playSelect(),d(b=>b.map(y=>y.id==="t7"?{...y,status:"swap-target"}:y)),await new Promise(b=>setTimeout(b,200)),await h("t3","t7"),d(b=>{const y=[...b],Y=y.findIndex(ee=>ee.id==="t3"),W=y.findIndex(ee=>ee.id==="t7");return[y[Y],y[W]]=[y[W],y[Y]],y[Y]={...y[Y],status:"neutral"},y[W]={...y[W],status:"neutral"},y}),await new Promise(b=>setTimeout(b,300)),T&&(He.playRowSolved(),He.playWin(),d(b=>b.map((y,Y)=>Y<4?{...y,status:"solved",color:"bg-neon-blue border-white"}:Y>=4&&Y<8?{...y,status:"solved",color:"bg-neon-pink border-white"}:Y>=8&&Y<12?{...y,status:"solved",color:"bg-neon-green border-white"}:Y>=12?{...y,status:"solved",color:"bg-neon-yellow border-white"}:y)),await new Promise(b=>setTimeout(b,800)),T&&(c(6),await new Promise(b=>setTimeout(b,2500)),T&&(c(7),await new Promise(b=>setTimeout(b,2500)),T&&c(8))))))))))})(),()=>{T=!1}},[r]),g.useEffect(()=>{if(!r){const T=setTimeout(()=>{i()},3e3);return()=>clearTimeout(T)}},[r,i]);const f=()=>{var m;const T=[];for(let O=0;O<4;O++){const L=E.slice(O*4,O*4+4),B=L.every(y=>y.status==="solved"),k=(m=L[0])==null?void 0:m.categoryName;T.push(C.jsx("div",{className:"relative w-full z-10 flex flex-col justify-center min-h-0 flex-1 overflow-visible",children:C.jsxs("div",{className:"relative w-full h-full p-1",children:[B&&C.jsx("div",{className:"absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-medium"}),B&&C.jsx("div",{className:"absolute top-0 left-8 z-[100] transform",style:{transform:"translateY(calc(-100% + 4px))"},children:C.jsx("div",{className:"animate-pop bg-black text-white px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] font-oswald",children:k})}),C.jsx("div",{className:`grid grid-cols-4 gap-2 w-full h-full relative z-10 transition-all duration-300 ${B?"drop-shadow-xl p-3":""}`,children:L.map(y=>C.jsx("div",{className:"relative w-full h-full",children:C.jsx(ti,{data:y,"data-tile-id":y.id,onClick:()=>{},disabled:!0,ref:Y=>{Y?A.current.set(y.id,Y):A.current.delete(y.id)}})},y.id))})]})},O))}return T};return C.jsxs("div",{className:"absolute inset-0 z-[200] bg-black flex flex-col font-oswald animate-fade-in",children:[C.jsx(zd,{modeName:Ay(n),levelIndex:1,onOpenSettings:()=>{},isReviewing:!1,hintsEnabled:!0,onManualHint:()=>{},onToggleHints:()=>{}}),C.jsx("div",{className:"flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden",children:C.jsxs("div",{className:`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${s>=6?"blur-sm opacity-40 scale-95":""}`,children:[C.jsx("div",{className:"w-full max-w-sm aspect-square max-h-[55vh] bg-zinc-900/50 rounded-xl p-2 mb-4 border-2 border-zinc-700 relative flex flex-col shrink-0 shadow-2xl overflow-visible mt-8",children:C.jsx("div",{className:"w-full h-full flex flex-col gap-1",children:f()})}),C.jsxs("div",{className:"h-16 flex items-center justify-center mb-4 shrink-0 w-full px-4",children:[s===1&&C.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop shadow-lg text-center",children:C.jsx("p",{className:"text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"FIND 4 TILES THAT BELONG TOGETHER"})}),(s===2||s===3)&&C.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-neon-blue animate-fade-in shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center",children:C.jsx("p",{className:"text-neon-blue font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"SWAP TO MAKE A MATCH"})})]}),C.jsx("button",{onClick:i,className:`text-zinc-500 font-oswald text-sm uppercase tracking-widest hover:text-white transition-colors mt-auto pb-4 ${s>=6?"opacity-0 pointer-events-none":""}`,children:"SKIP TUTORIAL"})]})}),s===6&&C.jsx("div",{className:"absolute top-[60px] right-[50px] z-[220] animate-bounce",children:C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-yellow absolute -top-2 right-4"}),C.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-yellow text-center shadow-[0_0_15px_rgba(255,255,0,0.3)]",children:C.jsxs("p",{className:"text-neon-yellow font-oswald text-sm font-bold uppercase",children:["TURN HINTS",C.jsx("br",{}),"ON AND OFF"]})})]})}),s===7&&C.jsx("div",{className:"absolute top-[60px] right-[10px] z-[220] animate-bounce",children:C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-blue absolute -top-2 right-2"}),C.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-blue text-center shadow-[0_0_15px_rgba(0,229,255,0.3)]",children:C.jsx("p",{className:"text-neon-blue font-oswald text-sm font-bold uppercase",children:"SETTINGS"})})]})}),s===8&&C.jsx("div",{className:"absolute inset-0 z-[210] flex items-center justify-center",children:C.jsx("button",{onClick:i,className:"px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop",children:"START"})})]})},hy=({seed:n,className:i=""})=>C.jsx("div",{className:`absolute inset-0 z-0 bg-black border-4 border-white rounded-medium overflow-hidden ${i}`,children:C.jsx("div",{className:"absolute inset-0 bg-black/40 pointer-events-none z-[2]"})}),jd=lr.memo(hy),fr=({modeName:n,levelIndex:i,onOpenSettings:r,isReviewing:s,onNext:c,showHintButton:E,onTurnOffHints:d,onManualHint:A,onToggleHints:h,hintsEnabled:f,headerExtras:T,children:m,rowsLeft:O})=>C.jsxs("div",{className:"flex flex-col h-full w-full max-w-4xl mx-auto select-none overflow-hidden relative bg-black",children:[C.jsx(zd,{modeName:n,levelIndex:i,onOpenSettings:r,isReviewing:s,onNext:c,showHintButton:E,onTurnOffHints:d,onManualHint:A,onToggleHints:h,hintsEnabled:f,rowsLeft:O,children:T}),C.jsx("main",{className:"flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black overflow-visible",children:m})]}),$n=(n,i,r=4)=>{if(!i||i.length===0)return[];const s=[],c=new Set,E=new Set,d=Math.random()<.1;let A=!1;const h=_a(i);for(const f of h){if(s.length>=n)break;const T=f.name.startsWith("Famous");if(T&&(A||!d))continue;const m=f.name.trim().toUpperCase();if(c.has(m))continue;const O=[];for(const L of f.words){const B=L.trim().toUpperCase();B.length>ld||c.has(B)||E.has(B)||B!==m&&O.push(L)}if(O.length>=r){const B=_a(O).slice(0,r);B.forEach(k=>c.add(k.trim().toUpperCase())),E.add(m),s.push({...f,words:B}),T&&(A=!0)}}if(s.length<n){const f=new Set(s.map(T=>T.id));for(const T of h){if(s.length>=n)break;f.has(T.id)||T.words.length>=r&&(s.push({...T,words:T.words.slice(0,r)}),f.add(T.id))}}return s},ai=g.forwardRef((n,i)=>{const[r,s]=g.useState([]);return g.useImperativeHandle(i,()=>({explode:(c,E,d,A=12)=>{const h=[];for(let f=0;f<A;f++){const T=Math.random()*Math.PI*2,m=Math.random()*8+2;h.push({id:Date.now()+Math.random(),x:c,y:E,vx:Math.cos(T)*m,vy:Math.sin(T)*m,color:d,size:Math.random()*6+4,life:1,decay:Math.random()*.03+.02})}s(f=>[...f,...h])}})),g.useEffect(()=>{let c;const E=()=>{s(d=>d.length===0?d:d.map(A=>({...A,x:A.x+A.vx,y:A.y+A.vy,vy:A.vy+.2,life:A.life-A.decay})).filter(A=>A.life>0)),c=requestAnimationFrame(E)};return c=requestAnimationFrame(E),()=>cancelAnimationFrame(c)},[]),C.jsx("div",{className:"absolute inset-0 pointer-events-none z-[100] overflow-hidden",children:r.map(c=>C.jsx("div",{style:{position:"absolute",left:c.x,top:c.y,width:c.size,height:c.size,backgroundColor:c.color,opacity:c.life,transform:`scale(${c.life})`,borderRadius:"2px",boxShadow:`0 0 4px ${c.color}`}},c.id))})});ai.displayName="ParticleOverlay";const my=({csvData:n,onComplete:i,mode:r,levelIndex:s,hintsEnabled:c,onOpenSettings:E,setHintsEnabled:d,isReviewing:A,onNext:h,isAutoPlaying:f})=>{const[T,m]=g.useState([]),[O,L]=g.useState(null),[B,k]=g.useState(!0),[b,y]=g.useState(!1),[Y,W]=g.useState(!1),[ee,te]=g.useState(0),[ue,ie]=g.useState(0),[ne,fe]=g.useState(0),[Le,me]=g.useState(0),[Te,de]=g.useState(new Set),[Oe,Se]=g.useState(null),D=g.useRef(Date.now()),q=g.useRef(Date.now()),se=g.useRef(new Map),Ae=g.useRef(null);g.useEffect(()=>{if(Y){const P=setTimeout(()=>{W(!1),L(null)},2e3);return()=>clearTimeout(P)}},[Y]),g.useEffect(()=>{W(!1),L(null),c&&(D.current=Date.now())},[c]);const le=g.useMemo(()=>{const P=new Map;return T.forEach(x=>{if(!P.has(x.categoryId)){const w=T.filter(V=>V.categoryId===x.categoryId);P.set(x.categoryId,{name:x.categoryName,isSolved:w.every(V=>V.status==="solved")})}}),Array.from(P.values())},[T]),p=()=>{switch(r){case Ie.LEVEL_SYNONYMS:return"SYNONYMS";case Ie.LEVEL_THEMED:return"THEMED";default:return"CLASSIC"}};g.useEffect(()=>{if(B||b)return;const P=new Set;for(let x=0;x<T.length/4;x++){const w=T.slice(x*4,x*4+4);if(w.every(J=>J.status==="solved"))continue;const V={};w.forEach(J=>{V[J.categoryId]=(V[J.categoryId]||0)+1}),Object.values(V).some(J=>J===3)&&P.add(x)}de(P)},[T,B,b]);const I=g.useCallback(P=>{var oe;const x=Math.floor(P.length/4);let w=0;const V=[...P];let J=!1;for(let ae=0;ae<x;ae++){const X=V.slice(ae*4,ae*4+4);if(X.every(Q=>Q.status==="solved")){w++;continue}const ye=X[0].categoryId;if(X.every(Q=>Q.categoryId===ye)&&ye!=="blank"){J=!0,w++,He.playRowSolved(),D.current=Date.now(),fe($=>$+1);const Q=ea[0].solvedColors[ae%ea[0].solvedColors.length];for(let $=ae*4;$<ae*4+4;$++){const ce=V[$],pe=(oe=se.current.get(ce.id))==null?void 0:oe.getBoundingClientRect();pe&&Ae.current&&Ae.current.explode(pe.left+pe.width/2,pe.top+pe.height/2,"#FFFFFF"),V[$]={...V[$],status:"solved",isSolved:!0,color:Q}}}}if(J?m(V):me(ae=>ae+1),w===x&&x>0&&!b){He.playWin(),y(!0);const ae=Array.from(new Set(V.map(ye=>ye.categoryId))),X=V.map(ye=>ye.word);setTimeout(()=>i({timeMs:Date.now()-q.current,hintsUsedCount:ue,hintsUsed:ue,moves:ee,rowEfficiency:ne,mistakes:Le,solvedCategoryIds:ae,solvedWords:X}),1e3)}},[b,ue,ee,i,ne,Le]);g.useEffect(()=>{if(!f||b||Y||B||A)return;const x=setTimeout(()=>{if(document.hidden)return;const w=4,V=Math.floor(T.length/w);let J=-1;for(let $=0;$<V;$++)if(!T.slice($*w,($+1)*w).every(pe=>pe.status==="solved")){J=$;break}if(J===-1)return;const oe=new Set(T.filter($=>!$.isSolved).map($=>$.categoryId));if(oe.size===0)return;const ae=Array.from(oe)[0],X=J*w,ye=X+w;let re=null;for(let $=0;$<T.length;$++)if(!($>=X&&$<ye)&&T[$].categoryId===ae&&!T[$].isSolved){re=T[$].id;break}let Q=null;for(let $=X;$<ye;$++)if(T[$].categoryId!==ae&&!T[$].isSolved){Q=T[$].id;break}re&&Q&&z(O?O===re?Q:O===Q?re:O:re)},400);return()=>clearTimeout(x)},[f,b,Y,T,B,A,O]),g.useEffect(()=>{if(!n||n.length===0){Se("No game data available"),k(!1);return}try{let P=n;r===Ie.LEVEL_THEMED&&(P=dp(n.length,n).categories);const x=$n(7,P,4);if(x.length<4){Se("Not enough valid categories found"),k(!1);return}const w=[];for(const V of x)V.words.slice(0,4).forEach(oe=>{w.push({id:Math.random().toString(36).substr(2,9),word:oe,categoryId:V.id,categoryName:V.name.includes(":")?V.name.split(":")[1].trim():V.name,status:"neutral",isSolved:!1})});m(w.sort(()=>.5-Math.random())),y(!1),k(!1),te(0),me(0),q.current=Date.now(),D.current=Date.now(),ie(0),fe(0),Se(null)}catch(P){console.error("Level init error",P),Se("Failed to initialize level"),k(!1)}},[n,r,s]);const H=g.useCallback(()=>{if(b||Y||!c)return;const P=T.filter(re=>re.status==="neutral"||re.status==="selected");if(P.length<2)return;const x=Array.from(new Set(P.map(re=>re.categoryId)));if(x.length===0)return;const w=new Map;for(let re=0;re<T.length/4;re++){const $=T.slice(re*4,re*4+4).filter(ce=>ce.status==="locked");$.length>0&&w.set($[0].categoryId,re)}let V=x.find(re=>w.has(re));if(V||(V=x[Math.floor(Math.random()*x.length)]),!V)return;const J=P.filter(re=>re.categoryId===V);if(J.length<2)return;const oe=J.slice(0,2);let ae=w.get(V)??-1;if(ae===-1){const re=[];for(let Q=0;Q<T.length/4;Q++){const $=T.slice(Q*4,Q*4+4),ce=$.every(Ce=>Ce.status==="solved"),pe=$.some(Ce=>Ce.status==="locked");!ce&&!pe&&re.push(Q)}if(re.length===0)return;ae=re[Math.floor(Math.random()*re.length)]}const X=[...T],ye=ae*4;oe.forEach(re=>{let Q=-1;for(let $=0;$<4;$++)if(X[ye+$].status!=="locked"&&X[ye+$].status!=="solved"){Q=ye+$;break}if(Q!==-1){const $=X.findIndex(ce=>ce.id===re.id);if($!==Q){const ce=X[Q];X[Q]={...X[$],status:"locked"},X[$]={...ce,status:ce.status==="locked"?"locked":"neutral"}}else X[Q]={...X[Q],status:"locked"}}}),m(X),He.playTick(),ie(re=>re+1),D.current=Date.now(),setTimeout(()=>I(X),50)},[T,b,Y,c,I]);g.useEffect(()=>{if(b||B||!c)return;const P=setInterval(()=>{document.hidden||Date.now()-D.current>9e4&&H()},1e3);return()=>clearInterval(P)},[b,B,c,T,H]);const z=P=>{if(b||Y)return;const x=T.find(w=>w.id===P);if(!(!x||x.status==="solved"||x.status==="locked"))if(O===null)He.playSelect(),L(P),m(w=>w.map(V=>V.id===P?{...V,status:"selected"}:V));else if(O===P)L(null),m(w=>w.map(V=>V.id===P?{...V,status:"neutral"}:V));else{const w=T.findIndex(J=>J.id===O),V=T.findIndex(J=>J.id===P);if(w===-1||V===-1)return;W(!0),te(J=>J+1),He.playSwap(),m(J=>J.map(oe=>oe.id===O?{...oe,status:"swapping"}:oe.id===P?{...oe,status:"swap-target"}:oe)),setTimeout(()=>{m(J=>{const oe=[...J],ae=oe[w],X=oe[V];return oe[w]={...ae,word:X.word,categoryId:X.categoryId,categoryName:X.categoryName,isEmoji:X.isEmoji},oe[V]={...X,word:ae.word,categoryId:ae.categoryId,categoryName:ae.categoryName,isEmoji:ae.isEmoji},oe}),setTimeout(()=>{m(J=>J.map(oe=>oe.id===O||oe.id===P?{...oe,status:"fading-out-bg"}:oe)),setTimeout(()=>{m(J=>{const oe=J.map(ae=>ae.status==="fading-out-bg"?{...ae,status:"neutral"}:ae);return setTimeout(()=>I(oe),50),oe}),L(null),W(!1)},250)},450)},50)}};return B?C.jsx("div",{className:"flex-1 flex items-center justify-center",children:C.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"})}):Oe?C.jsx("div",{className:"flex-1 flex items-center justify-center p-4",children:C.jsxs("div",{className:"text-center text-neon-red font-oswald text-xl border-2 border-neon-red p-4 rounded-lg bg-black",children:[Oe,C.jsx("button",{onClick:()=>window.location.reload(),className:"block mt-4 w-full py-2 bg-white text-black font-bold uppercase rounded hover:bg-zinc-200",children:"Retry"})]})}):C.jsxs(fr,{modeName:p(),levelIndex:s,onOpenSettings:()=>E==null?void 0:E(le),isReviewing:A,onNext:h,hintsEnabled:c,onToggleHints:()=>d==null?void 0:d(!c),children:[C.jsx(ai,{ref:Ae}),C.jsx("div",{className:"flex-1 flex flex-col gap-1.5 overflow-visible pointer-events-auto",children:Array.from({length:T.length/4}).map((P,x)=>{const w=T.slice(x*4,x*4+4);if(w.length===0)return null;const V=w.every(oe=>oe.status==="solved"),J=Te.has(x);return C.jsxs("div",{className:"flex-1 relative min-h-0 overflow-visible",children:[V&&C.jsx(jd,{seed:w[0].categoryId}),C.jsx("div",{className:`
                    absolute inset-0 z-0 transition-opacity duration-500 rounded-medium
                    ${J&&!V?"bg-white/5 border border-white/40 animate-pulse-highlight":"opacity-0"}
                  `}),V&&C.jsx("div",{className:"absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]",children:C.jsx("div",{className:"px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white whitespace-nowrap shadow-[0_-4px_12px_rgba(0,0,0,0.5)]",children:w[0].categoryName})}),C.jsx("div",{className:`grid grid-cols-4 gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${V?"p-3":"p-1"}`,children:w.map(oe=>C.jsx(ti,{data:oe,onClick:z,ref:ae=>{ae&&se.current.set(oe.id,ae)}},oe.id))})]},x)})})]})},Ty=({onComplete:n,levelIndex:i,hintsEnabled:r,setHintsEnabled:s,onOpenSettings:c,isReviewing:E,onNext:d,isAutoPlaying:A})=>{const[h,f]=g.useState([]),[T,m]=g.useState(null),[O,L]=g.useState(!0),[B,k]=g.useState(!1),[b,y]=g.useState(!1),[Y,W]=g.useState(0),[ee,te]=g.useState(0),[ue,ie]=g.useState(0),[ne,fe]=g.useState(0),[Le,me]=g.useState(new Set),Te=g.useRef(Date.now()),de=g.useRef(Date.now()),Oe=g.useRef(new Map),Se=g.useRef(null),D=3;g.useEffect(()=>{if(b){const p=setTimeout(()=>{y(!1),m(null)},2e3);return()=>clearTimeout(p)}},[b]),g.useEffect(()=>{y(!1),m(null),r&&(de.current=Date.now())},[r]);const q=g.useMemo(()=>{const p=new Map;return h.forEach(I=>{if(!p.has(I.categoryId)){const H=h.filter(z=>z.categoryId===I.categoryId);p.set(I.categoryId,{name:I.categoryName,isSolved:H.every(z=>z.status==="solved")})}}),Array.from(p.values())},[h]);g.useEffect(()=>{if(O||B)return;const p=new Set;for(let I=0;I<h.length/D;I++){const H=h.slice(I*D,I*D+D);if(H.every(P=>P.status==="solved"))continue;const z={};H.forEach(P=>{z[P.categoryId]=(z[P.categoryId]||0)+1}),Object.values(z).some(P=>P===2)&&p.add(I)}me(p)},[h,O,B]);const se=g.useCallback(p=>{var x;const I=[...p];let H=!1,z=0;const P=I.length/D;for(let w=0;w<P;w++){const V=I.slice(w*D,w*D+D);if(V.every(J=>J.status==="solved")){z++;continue}if(V.every(J=>J.categoryId===V[0].categoryId)){H=!0,z++,He.playRowSolved(),de.current=Date.now(),fe(oe=>oe+1);const J=ea[0].solvedColors[w%ea[0].solvedColors.length];for(let oe=w*D;oe<w*D+D;oe++){const ae=I[oe].id,X=(x=Oe.current.get(ae))==null?void 0:x.getBoundingClientRect();X&&Se.current&&Se.current.explode(X.left+X.width/2,X.top+X.height/2,"#FFFFFF"),I[oe]={...I[oe],status:"solved",color:J,isSolved:!0}}}}if(H?f(I):te(w=>w+1),z===P&&P>0&&!B){He.playWin(),k(!0);const w=Array.from(new Set(I.map(J=>J.categoryId))),V=I.map(J=>J.word);setTimeout(()=>n({timeMs:Date.now()-Te.current,hintsUsedCount:ue,hintsUsed:ue,moves:Y,mistakes:ee,rowEfficiency:ne,solvedCategoryIds:w,solvedWords:V}),1e3)}},[B,Y,n,ue,ee,ne]);g.useEffect(()=>{if(!A||B||b||O||E)return;const I=setTimeout(()=>{if(document.hidden)return;const H=D,z=Math.floor(h.length/H);let P=-1;for(let X=0;X<z;X++)if(!h.slice(X*H,(X+1)*H).every(re=>re.status==="solved")){P=X;break}if(P===-1)return;const x=new Set(h.filter(X=>!X.isSolved).map(X=>X.categoryId));if(x.size===0)return;const w=Array.from(x)[0],V=P*H,J=V+H;let oe=null;for(let X=0;X<h.length;X++)if(!(X>=V&&X<J)&&h[X].categoryId===w&&!h[X].isSolved){oe=h[X].id;break}let ae=null;for(let X=V;X<J;X++)if(h[X].categoryId!==w&&!h[X].isSolved){ae=h[X].id;break}oe&&ae&&le(T?T===oe?ae:T===ae?oe:T:oe)},400);return()=>clearTimeout(I)},[A,B,b,h,O,E,T]),g.useEffect(()=>{const p=ar(),H=$n(7,p,3),z=[];for(const P of H)P.words.slice(0,3).forEach(w=>{z.push({id:Math.random().toString(36).substr(2,9),word:w,categoryId:P.id,categoryName:P.name,status:"neutral",isEmoji:!0,isSolved:!1})});f(z.sort(()=>.5-Math.random())),L(!1),W(0),te(0),fe(0),Te.current=Date.now(),de.current=Date.now()},[i]);const Ae=()=>{if(B||b||!r)return;const p=h.filter(oe=>oe.status==="neutral"||oe.status==="selected");if(p.length<2)return;const I=Array.from(new Set(p.map(oe=>oe.categoryId)));if(I.length===0)return;const H=new Map;for(let oe=0;oe<h.length/D;oe++){const X=h.slice(oe*D,oe*D+D).filter(ye=>ye.status==="locked");X.length>0&&H.set(X[0].categoryId,oe)}let z=I.find(oe=>H.has(oe));if(z||(z=I[Math.floor(Math.random()*I.length)]),!z)return;const P=p.filter(oe=>oe.categoryId===z);if(P.length<2)return;const x=P.slice(0,2);let w=H.get(z)??-1;if(w===-1){const oe=[];for(let ae=0;ae<h.length/D;ae++){const X=h.slice(ae*D,ae*D+D);!X.every(ye=>ye.status==="solved")&&!X.some(ye=>ye.status==="locked")&&oe.push(ae)}if(oe.length===0)return;w=oe[Math.floor(Math.random()*oe.length)]}const V=[...h],J=w*D;x.forEach(oe=>{let ae=-1;for(let ye=0;ye<D;ye++)if(V[J+ye].status!=="locked"&&V[J+ye].status!=="solved"){ae=J+ye;break}if(ae===-1)return;const X=V.findIndex(ye=>ye.id===oe.id);if(X!==ae){const ye=V[ae];V[ae]={...V[X],status:"locked"},V[X]={...ye,status:ye.status==="locked"?"locked":"neutral"}}else V[ae]={...V[ae],status:"locked"}}),f(V),He.playTick(),ie(oe=>oe+1),de.current=Date.now(),setTimeout(()=>se(V),50)};g.useEffect(()=>{if(B||O||!r)return;const p=setInterval(()=>{document.hidden||Date.now()-de.current>9e4&&Ae()},1e3);return()=>clearInterval(p)},[B,O,r,h]);const le=p=>{if(B||b)return;const I=h.find(H=>H.id===p);if(!(!I||I.status==="solved"||I.status==="locked"))if(T===null)He.playSelect(),m(p),f(H=>H.map(z=>z.id===p?{...z,status:"selected"}:z));else if(T===p)m(null),f(H=>H.map(z=>z.id===p?{...z,status:"neutral"}:z));else{const H=h.findIndex(P=>P.id===T),z=h.findIndex(P=>P.id===p);if(H===-1||z===-1)return;y(!0),W(P=>P+1),He.playSwap(),f(P=>P.map(x=>x.id===T?{...x,status:"swapping"}:x.id===p?{...x,status:"swap-target"}:x)),setTimeout(()=>{f(P=>{const x=[...P],w=x[H],V=x[z];return x[H]={...w,word:V.word,categoryId:V.categoryId,categoryName:V.categoryName,isEmoji:V.isEmoji},x[z]={...V,word:w.word,categoryId:w.categoryId,categoryName:w.categoryName,isEmoji:w.isEmoji},x}),setTimeout(()=>{f(P=>P.map(x=>x.id===T||x.id===p?{...x,status:"fading-out-bg"}:x)),setTimeout(()=>{f(P=>{const x=P.map(w=>w.status==="fading-out-bg"?{...w,status:"neutral"}:w);return setTimeout(()=>se(x),50),x}),m(null),y(!1)},250)},450)},50)}};return O?null:C.jsxs(fr,{modeName:"EMOJI",levelIndex:i,onOpenSettings:()=>c==null?void 0:c(q),isReviewing:E,onNext:d,hintsEnabled:r,onToggleHints:()=>s(!r),children:[C.jsx(ai,{ref:Se}),C.jsx("div",{className:"flex-1 flex flex-col gap-1.5 overflow-visible pointer-events-auto",children:Array.from({length:h.length/D}).map((p,I)=>{const H=h.slice(I*D,I*D+D),z=H.every(x=>x.status==="solved"),P=Le.has(I);return C.jsxs("div",{className:"flex-1 relative min-h-0 overflow-visible",children:[z&&C.jsx(jd,{seed:H[0].categoryId}),C.jsx("div",{className:`
                    absolute inset-0 z-0 transition-opacity duration-500 rounded-medium
                    ${P&&!z?"bg-white/5 border border-white/40 animate-pulse-highlight":"opacity-0"}
                  `}),z&&C.jsx("div",{className:"absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]",children:C.jsx("div",{className:"px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white whitespace-nowrap shadow-[0_-4px_12px_rgba(0,0,0,0.5)]",children:H[0].categoryName})}),C.jsx("div",{className:`grid grid-cols-3 gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${z?"p-3":"p-1"}`,children:H.map(x=>C.jsx(ti,{data:x,onClick:le,ref:w=>{w&&Oe.current.set(x.id,w)}},x.id))})]},I)})})]})},Ry=({csvData:n,onComplete:i,onGameOver:r,levelIndex:s,onThemeChange:c,hintsEnabled:E,setHintsEnabled:d,onOpenSettings:A,isReviewing:h,onNext:f,isAutoPlaying:T})=>{const[m,O]=g.useState(null),[L,B]=g.useState([]),[k,b]=g.useState(0),[y,Y]=g.useState(0),[W,ee]=g.useState(!1),[te,ue]=g.useState(null),[ie,ne]=g.useState(!1),[fe,Le]=g.useState(0),[me,Te]=g.useState(!1),[de,Oe]=g.useState(ea[0]),[Se,D]=g.useState(0),[q,se]=g.useState(0),[Ae,le]=g.useState(0),p=g.useRef(Date.now()),I=g.useRef(Date.now()),H=g.useRef(null),z=g.useRef([]),P=6,x=5,w=3;g.useEffect(()=>{He.resume(),I.current=Date.now(),z.current=[]},[s]),g.useEffect(()=>{E&&(p.current=Date.now())},[E]),g.useEffect(()=>{if(!T||ie||W||h||te)return;const X=setTimeout(()=>{if(document.hidden)return;const ye=L.find(re=>re.categoryId===(m==null?void 0:m.id)&&re.status!=="solved"&&re.status!=="locked");ye&&oe(ye.id)},600);return()=>clearTimeout(X)},[T,ie,W,L,te,m,h]),g.useEffect(()=>{if(ie||W||!E)return;const ae=setInterval(()=>{document.hidden||Date.now()-p.current>9e4&&V()},1e3);return()=>clearInterval(ae)},[L,ie,W,E]);const V=()=>{if(!E)return;const ae=L.filter(re=>re.categoryId===(m==null?void 0:m.id)&&re.status==="neutral");if(ae.length<2)return;const X=new Map;for(let re=0;re<L.length/w;re++){const $=L.slice(re*w,re*w+w).filter(ce=>ce.status==="locked");$.length>0&&X.set($[0].categoryId,re)}let ye=X.get(m.id)??-1;if(ye===-1){const re=[];for(let Q=0;Q<L.length/w;Q++)L.slice(Q*w,Q*w+w).some(pe=>pe.status==="locked"||pe.status==="solved"||pe.status==="wrong")||re.push(Q);if(re.length===0)return;ye=re[Math.floor(Math.random()*re.length)]}B(re=>{const Q=[...re],$=ye*w;return ae.slice(0,2).forEach(pe=>{let Ce=-1;for(let ge=0;ge<w;ge++)if(Q[$+ge].status==="neutral"){Ce=$+ge;break}if(Ce===-1)return;const Re=Q.findIndex(ge=>ge.id===pe.id);if(Re!==Ce){const ge=Q[Ce];Q[Ce]={...Q[Re],status:"locked"},Q[Re]={...ge,status:ge.status==="locked"?"locked":"neutral"}}else Q[Ce]={...Q[Ce],status:"locked"}}),Q}),He.playTick(),se(re=>re+1),p.current=Date.now()},J=(ae=!1)=>{if(ie)return;ae||ee(!0);const X=()=>{const re=ea[0];Oe(re),D(0),p.current=Date.now();const Q=$n(10,n,6);if(Q.length===0){Te(!0),ee(!1);return}const $=Q[0],ce=Q.slice(1);ye($,ce)},ye=(re,Q)=>{O(re);const $=re.words.slice(0,6),ce=Q.flatMap(Re=>Re.words),pe=_a(ce).slice(0,6),Ce=_a([...$.map(Re=>({id:Math.random().toString(36).substr(2,9),word:Re,categoryId:re.id,categoryName:re.name,status:"neutral"})),...pe.map(Re=>({id:Math.random().toString(36).substr(2,9),word:Re,categoryId:"incorrect",categoryName:"Incorrect",status:"neutral"}))]);B(Ce),ee(!1)};ae?X():setTimeout(X,400)};g.useEffect(()=>{J(!0)},[n]);const oe=ae=>{if(W||ie||te)return;const X=L.findIndex(re=>re.id===ae);if(X===-1||["solved","wrong","locked"].includes(L[X].status))return;le(re=>re+1);const ye=L[X];if(ye.categoryId===(m==null?void 0:m.id)){He.playCorrect(),p.current=Date.now();const re=[...L],Q=de.solvedColors[Se%de.solvedColors.length];re[X]={...ye,status:"solved",color:Q},B(re),z.current.push(ye.word),D($=>{const ce=$+1;return ce===6&&(ue("MATCH!"),Y(pe=>{const Ce=pe+1;return Ce>=P?setTimeout(()=>{ne(!0),i({mode:"TARGET FILTER",mistakes:fe,hintsUsedCount:q,moves:Ae,timeMs:Date.now()-I.current,solvedWords:z.current})},1e3):setTimeout(()=>{ue(null),J()},1200),Ce})),ce})}else{He.playError();const re=k+1;b(re),Le(Q=>Q+1),B(Q=>Q.map($=>$.id===ae?{...$,status:"wrong"}:$)),re>=x?(ne(!0),r()):setTimeout(()=>B(Q=>Q.map($=>$.id===ae?{...$,status:"neutral"}:$)),500)}};return me?null:C.jsxs(fr,{modeName:"TARGET FILTER",levelIndex:s,onOpenSettings:()=>A==null?void 0:A([{name:(m==null?void 0:m.name)||"Loading",isSolved:Se===6}]),isReviewing:h,onNext:f,hintsEnabled:E,onToggleHints:()=>d(!E),onTurnOffHints:()=>{d(!1)},headerExtras:C.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-[9px]",children:[C.jsxs("div",{className:"bg-zinc-950 border border-zinc-700 px-2 py-1 rounded-full flex items-center shadow-sm",children:[C.jsx("span",{className:"text-zinc-500 mr-1",children:"FOUND"}),C.jsxs("span",{className:"text-white",children:[Se,"/6"]})]}),C.jsxs("div",{className:"bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-full flex items-center shadow-sm",children:[C.jsx("span",{className:"text-zinc-500 mr-1",children:"ROUND"}),C.jsxs("span",{className:"text-white",children:[y+1,"/",P]})]})]}),children:[C.jsx(ai,{ref:H}),C.jsxs("div",{className:"w-full flex-1 grid grid-cols-3 grid-rows-4 gap-3 py-2 min-h-0 relative z-10 pt-4",children:[L.map(ae=>C.jsx("div",{className:"relative w-full h-full",children:C.jsx(ti,{data:ae,onClick:oe})},ae.id)),te&&C.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center pointer-events-none",children:C.jsx("div",{className:"bg-black/90 border-4 border-white px-8 py-4 rounded-xl shadow-2xl animate-pop",children:C.jsx("span",{className:"text-white font-black font-oswald text-4xl uppercase tracking-tighter italic shadow-[0_0_15px_rgba(255,255,255,0.5)]",children:te})})})]}),C.jsx("div",{className:"w-full mt-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-800 flex justify-center gap-1 shrink-0",children:Array.from({length:x}).map((ae,X)=>C.jsx("div",{className:`w-4 h-4 rounded-full border-2 ${X<k?"bg-neon-red border-white shadow-[0_0_5px_red]":"bg-zinc-800 border-zinc-700"}`},X))})]})},Oy=({csvData:n,onComplete:i,levelIndex:r,onOpenSettings:s,isReviewing:c,onNext:E,hintsEnabled:d,setHintsEnabled:A,isAutoPlaying:h})=>{const[f,T]=g.useState([]),[m,O]=g.useState([]),[L,B]=g.useState(1),[k,b]=g.useState(0),[y,Y]=g.useState(0),[W,ee]=g.useState(0),[te,ue]=g.useState(90),[ie,ne]=g.useState(!1),[fe,Le]=g.useState(0),[me,Te]=g.useState([]),de=g.useRef(Date.now()),Oe=g.useRef(null),Se=g.useRef(Date.now()),D=g.useRef(new Map),q=g.useRef([]);g.useEffect(()=>{O([]),d&&(de.current=Date.now())},[d]),g.useEffect(()=>{if(c||ie)return;const P=$n(4,n,4),x=[];for(const w of P)w.words.slice(0,4).forEach(J=>{x.push({id:Math.random().toString(36).substr(2,9),word:J,categoryId:w.id,categoryName:w.name,status:"neutral"})});T(x.sort(()=>.5-Math.random())),O([]),Y(0),ue(Math.max(15,90-(L-1)*20)),de.current=Date.now()},[L,n,c]);const se=g.useCallback(()=>{ie||(He.playError(),ne(!0),i({roundsWon:W,timeMs:Date.now()-Se.current,moves:12,failed:!0,mistakes:k,hintsUsedCount:fe,solvedCategoryIds:me,solvedWords:q.current}))},[ie,W,k,fe,me,i]);g.useEffect(()=>{if(ie||c)return;const P=setInterval(()=>{document.hidden||ue(x=>Math.max(0,x-1))},1e3);return()=>clearInterval(P)},[ie,c,L]),g.useEffect(()=>{te===0&&!ie&&!c&&se()},[te,ie,c,se]),g.useEffect(()=>{if(ie||c||!d)return;const P=setInterval(()=>{document.hidden||Date.now()-de.current>9e4&&Ae()},1e3);return()=>clearInterval(P)},[f,ie,c,d]);const Ae=()=>{if(ie||c||!d)return;const P=f.filter(V=>V.status!=="solved");if(P.length<2)return;const x=P[0].categoryId,w=P.filter(V=>V.categoryId===x).slice(0,2);T(V=>V.map(J=>w.some(oe=>oe.id===J.id)?{...J,status:"correct-preview"}:J)),He.playTick(),Le(V=>V+1),de.current=Date.now(),setTimeout(()=>{T(V=>V.map(J=>J.status==="correct-preview"?{...J,status:"neutral"}:J))},1500)},le=g.useCallback((P,x,w)=>{ie||(P>0?He.playWin():He.playError(),ne(!0),i({roundsWon:P,timeMs:Date.now()-Se.current,moves:12,hintsUsedCount:fe,mistakes:x,solvedCategoryIds:w,solvedWords:q.current}))},[i,fe,ie]),p=g.useCallback((P,x,w)=>{L>=3?le(P,x,w):setTimeout(()=>B(V=>V+1),600)},[L,le]),I=g.useCallback((P,x)=>{const w=x.filter(V=>P.includes(V.id));if(w.length===4&&w.every(V=>V.categoryId===w[0].categoryId)){He.playRowSolved(),de.current=Date.now();const V=w[0].categoryId,J=Array.from(new Set([...me,V]));Te(J);const oe=w.map(Q=>Q.word);q.current.push(...oe);const ae=ea[0].solvedColors,X=ae[(J.length-1)%ae.length],ye=x.map(Q=>P.includes(Q.id)?{...Q,status:"solved",color:X}:Q);T(ye),O([]);let re="#39FF14";if(X.includes("red")?re="#FF073A":X.includes("orange")?re="#FF5F1F":X.includes("yellow")||X.includes("gold")?re="#F9FF00":X.includes("cyan")?re="#00FFFF":X.includes("blue")?re="#0066FF":X.includes("purple")?re="#D400FF":X.includes("violet")?re="#B026FF":X.includes("pink")?re="#FF1FBF":X.includes("magenta")&&(re="#FF00FF"),P.forEach(Q=>{var ce;const $=(ce=D.current.get(Q))==null?void 0:ce.getBoundingClientRect();$&&Oe.current&&Oe.current.explode($.left+$.width/2,$.top+$.height/2,re)}),ye.every(Q=>Q.status==="solved")){const Q=W+1;ee(Q),p(Q,k,J)}}else if(P.length===4){He.playError();const V=k+1,J=y+1;b(V),Y(J),T(oe=>oe.map(ae=>P.includes(ae.id)?{...ae,status:"wrong"}:ae)),setTimeout(()=>{J>=3?p(W,V,me):(T(oe=>oe.map(ae=>ae.status==="wrong"?{...ae,status:"neutral"}:ae)),O([]))},500)}},[L,y,k,me,p,W]);g.useEffect(()=>{if(!h||ie||c)return;const x=setTimeout(()=>{if(document.hidden||m.length===4)return;let w=null;if(m.length>0){const V=f.find(J=>J.id===m[0]);V&&(w=V.categoryId)}else{const V=f.find(J=>J.status==="neutral");V&&(w=V.categoryId)}if(w){const V=f.find(J=>J.categoryId===w&&J.status==="neutral"&&!m.includes(J.id));V&&H(V.id)}},400);return()=>clearTimeout(x)},[h,ie,c,f,m]);const H=P=>{if(ie||te===0||c)return;const x=f.find(ae=>ae.id===P);if(!x||x.status==="solved"||x.status==="wrong")return;He.playSelect();const V=m.includes(P)?m.filter(ae=>ae!==P):[...m,P].slice(0,4);O(V);const oe=(()=>{if(V.length===3){const ae=f.filter(X=>V.includes(X.id));return ae.every(X=>X.categoryId===ae[0].categoryId)}return!1})();T(ae=>ae.map(X=>X.status==="solved"?X:V.includes(X.id)?{...X,status:oe?"correct-preview":"selected"}:{...X,status:"neutral"})),V.length===4&&setTimeout(()=>I(V,f),150)},z=g.useMemo(()=>{const P=new Map;return f.forEach(x=>{if(!P.has(x.categoryId)){const w=f.filter(oe=>oe.categoryId===x.categoryId),V=w.every(oe=>oe.status==="solved"),J=V?w[0].color:void 0;P.set(x.categoryId,{name:x.categoryName,isSolved:V,color:J})}}),Array.from(P.values()).sort((x,w)=>x.name.localeCompare(w.name))},[f]);return C.jsxs("div",{className:"flex flex-col h-full w-full max-w-4xl mx-auto overflow-hidden relative bg-black",children:[C.jsx(zd,{modeName:"MIND MATCH",levelIndex:r,onOpenSettings:()=>s==null?void 0:s(z.map(P=>({name:P.name,isSolved:P.isSolved}))),isReviewing:c,onNext:E,hintsEnabled:d,onToggleHints:()=>A==null?void 0:A(!d),leftContent:C.jsxs("div",{className:"flex items-center gap-4 pl-1",children:[C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx("div",{className:"mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase",children:"TIMER"}),C.jsxs("span",{className:`text-lg md:text-xl font-bold font-oswald ${te<10?"text-neon-red animate-pulse":"text-white"}`,children:[te,"s"]})]}),C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx("div",{className:"mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase",children:"ROUND"}),C.jsxs("span",{className:"text-lg md:text-xl font-bold font-oswald text-white",children:[L,"/3"]})]}),C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx("div",{className:"mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase",children:"MISS"}),C.jsxs("span",{className:"text-lg md:text-xl font-bold font-oswald text-white",children:[y,"/3"]})]})]})}),C.jsxs("main",{className:"flex-1 flex flex-col p-2 pt-0 w-full relative",children:[C.jsx("div",{className:"w-full mb-2 z-20 px-1",children:C.jsx("div",{className:"grid grid-cols-2 gap-2 w-full",children:z.map(P=>C.jsx("div",{className:`
                      relative w-full h-8 md:h-12 rounded-lg border-2 border-white
                      flex items-center justify-center overflow-hidden transition-all duration-500
                      ${P.isSolved?"shadow-none":"bg-black"}
                    `,style:P.isSolved?{background:sR(P.color,P.name)}:{},children:C.jsx("span",{className:`
                      relative z-10 font-black font-oswald uppercase text-xs md:text-sm tracking-wide text-center px-1 leading-tight
                      ${P.isSolved?"text-white":"text-zinc-300"}
                    `,style:P.isSolved?{textShadow:"3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 4px rgba(0,0,0,0.8)"}:{},children:P.name})},P.name))})}),C.jsx("div",{className:"grid grid-cols-4 gap-2 flex-1 min-h-0",children:f.map(P=>C.jsx(ti,{data:P,onClick:H,ref:x=>{x&&D.current.set(P.id,x)}},P.id))})]}),C.jsx(ai,{ref:Oe})]})},Lm=Ar.div,Us=[{round:1,cols:2,rows:3},{round:2,cols:3,rows:5},{round:3,cols:4,rows:7}],Cy=({csvData:n,onComplete:i,levelIndex:r,hintsEnabled:s,onOpenSettings:c,setHintsEnabled:E,isReviewing:d,onNext:A,isAutoPlaying:h})=>{const[f,T]=g.useState(1),[m,O]=g.useState([]),[L,B]=g.useState([]),[k,b]=g.useState(null),[y,Y]=g.useState(!0),[W,ee]=g.useState(!1),[te,ue]=g.useState(!1),[ie,ne]=g.useState(!1),[fe,Le]=g.useState(0),[me,Te]=g.useState(0),[de,Oe]=g.useState(0),[Se,D]=g.useState(0),[q,se]=g.useState(new Set),[Ae,le]=g.useState([]),[p,I]=g.useState([]),H=g.useRef(Date.now()),z=g.useRef(Date.now()),P=g.useRef(new Map),x=g.useRef(null),w=g.useRef(m),V=g.useRef(L);g.useEffect(()=>{w.current=m},[m]),g.useEffect(()=>{V.current=L},[L]);const J=Us[f-1],oe=(Q,$,ce)=>{const pe=n.find(ge=>ge.id===Q);if(!pe)return[];const Ce=new Set($.map(ge=>ge.toUpperCase().trim())),Re=pe.words.filter(ge=>!Ce.has(ge.toUpperCase().trim()));return _a(Re).slice(0,ce)},ae=g.useCallback(Q=>{var pe;const $=Us[Q-1],ce=Q>1?Us[Q-2]:null;if(Q===1){const Re=$n($.rows,n,4);Re.length<$.rows&&console.warn("Could not find enough valid categories for Expansion Round 1"),B(Re),V.current=Re;const ge=[];Re.forEach(et=>{et.words.slice(0,$.cols).forEach(We=>{ge.push({id:Math.random().toString(36).substr(2,9),word:We,categoryId:et.id,categoryName:et.name.includes(":")?et.name.split(":")[1].trim():et.name,status:"neutral",isSolved:!1})})}),O(_a(ge))}else if(ce){const Ce=[];for(let Pe=0;Pe<ce.rows;Pe++){const be=w.current.slice(Pe*ce.cols,(Pe+1)*ce.cols);be.length>0&&Ce.push(be[0].categoryId)}const Re=[],ge=[...V.current];Ce.forEach(Pe=>{const be=ge.findIndex(xe=>xe.id===Pe);be!==-1&&(Re.push(ge[be]),ge.splice(be,1))}),Re.push(...ge);let et=[...Re];const Fe=$.rows-ce.rows;if(Fe>0){const Pe=new Set(et.map(ve=>ve.id)),be=n.filter(ve=>!Pe.has(ve.id)),xe=$n(Fe,be,4);et=[...et,...xe]}B(et),V.current=et;const We=new Array($.rows*$.cols).fill(null),fa=[];for(let Pe=0;Pe<ce.rows;Pe++){const be=Pe*ce.cols,xe=Pe*$.cols,ve=w.current.slice(be,be+ce.cols);ve.forEach((St,el)=>{We[xe+el]={...St,status:"solved",isSolved:!0,color:St.color||ea[0].solvedColors[Pe%ea[0].solvedColors.length]}});const kt=et[Pe].id,vt=et[Pe].name,qa=ve.map(St=>St.word),Ft=$.cols-ce.cols;oe(kt,qa,Ft).forEach(St=>{fa.push({id:Math.random().toString(36).substr(2,9),word:St,categoryId:kt,categoryName:vt.includes(":")?vt.split(":")[1].trim():vt,status:"neutral",isSolved:!1})})}for(let Pe=ce.rows;Pe<$.rows;Pe++){const be=et[Pe];_a(be.words).slice(0,$.cols).forEach(ve=>{fa.push({id:Math.random().toString(36).substr(2,9),word:ve,categoryId:be.id,categoryName:be.name.includes(":")?be.name.split(":")[1].trim():be.name,status:"neutral",isSolved:!1})})}const ze=_a(fa);for(let Pe=0;Pe<We.length;Pe++)We[Pe]===null&&ze.length>0&&(We[Pe]=ze.pop());for(let Pe=0;Pe<We.length;Pe++){const be=We[Pe];if(!be||be.status==="solved")continue;const xe=Math.floor(Pe/$.cols),ve=(pe=et[xe])==null?void 0:pe.id;if(be.categoryId===ve)for(let kt=0;kt<We.length;kt++){const vt=We[kt];if(!vt||vt.status==="solved")continue;if(Math.floor(kt/$.cols)!==xe&&vt.categoryId!==ve){We[Pe]=vt,We[kt]=be;break}}}O(We)}T(Q),ee(!1),Y(!1),ne(!1),b(null),H.current=Date.now(),Q>1&&He.playLevelStart()},[n]);g.useEffect(()=>{ae(1),Le(0),Te(0),Oe(0),D(0),le([]),I([]),z.current=Date.now()},[r,ae]);const X=g.useCallback(Q=>{var et;const ce=Us[f-1].cols,pe=Math.floor(Q.length/ce),Ce=[...Q];let Re=!1,ge=0;for(let Fe=0;Fe<pe;Fe++){const We=Fe*ce,fa=We+ce,ze=Ce.slice(We,fa);if(ze.every(xe=>xe.status==="solved")){ge++;continue}if(ze.length<ce)continue;const Pe=ze[0].categoryId;if(ze.every(xe=>xe&&xe.categoryId===Pe)){Re=!0,ge++,He.playRowSolved(),H.current=Date.now(),D(ve=>ve+1);const xe=ea[0].solvedColors[Fe%ea[0].solvedColors.length];for(let ve=We;ve<fa;ve++){const kt=Ce[ve],vt=(et=P.current.get(kt.id))==null?void 0:et.getBoundingClientRect();vt&&x.current&&kt.status!=="solved"&&x.current.explode(vt.left+vt.width/2,vt.top+vt.height/2,"#FFFFFF"),Ce[ve]={...kt,status:"solved",isSolved:!0,color:xe}}}}Re?O(Ce):k&&Te(Fe=>Fe+1),ge===pe&&pe>0&&(f<3?(He.playWin(),ee(!0),setTimeout(()=>ae(f+1),h?500:1e3)):te||(He.playWin(),ue(!0),setTimeout(()=>i({timeMs:Date.now()-z.current,hintsUsedCount:de,moves:fe,rowEfficiency:Se,mistakes:me,solvedCategoryIds:Array.from(new Set([...p,...Ce.map(Fe=>Fe.categoryId)])),solvedWords:[...Ae,...Ce.map(Fe=>Fe.word)]}),1e3)))},[f,te,fe,de,Se,me,p,Ae,i,k,ae,h]);g.useEffect(()=>{if(y||W||te)return;const Q=new Set,$=J.cols,ce=Math.floor(m.length/$);for(let pe=0;pe<ce;pe++){const Ce=m.slice(pe*$,(pe+1)*$);if(Ce.every(ge=>ge.status==="solved"))continue;const Re={};Ce.forEach(ge=>{Re[ge.categoryId]=(Re[ge.categoryId]||0)+1}),Object.values(Re).some(ge=>ge===$-1)&&Q.add(pe)}se(Q)},[m,y,W,te,J]);const ye=Q=>{if(te||ie||W)return;const $=m.find(ce=>ce.id===Q);if(!(!$||$.status==="solved"||$.status==="locked"))if(k===null)He.playSelect(),b(Q),O(ce=>ce.map(pe=>pe.id===Q?{...pe,status:"selected"}:pe));else if(k===Q)b(null),O(ce=>ce.map(pe=>pe.id===Q?{...pe,status:"neutral"}:pe));else{const ce=m.findIndex(Ce=>Ce.id===k),pe=m.findIndex(Ce=>Ce.id===Q);ne(!0),Le(Ce=>Ce+1),He.playSwap(),O(Ce=>Ce.map(Re=>Re.id===k?{...Re,status:"swapping"}:Re.id===Q?{...Re,status:"swap-target"}:Re)),setTimeout(()=>{O(Ce=>{const Re=[...Ce],ge=Re[ce],et=Re[pe];return Re[ce]={...ge,word:et.word,categoryId:et.categoryId,categoryName:et.categoryName},Re[pe]={...et,word:ge.word,categoryId:ge.categoryId,categoryName:ge.categoryName},Re}),setTimeout(()=>{O(Ce=>Ce.map(Re=>Re.id===k||Re.id===Q?{...Re,status:"fading-out-bg"}:Re)),setTimeout(()=>{O(Ce=>{const Re=Ce.map(ge=>ge.status==="fading-out-bg"?{...ge,status:"neutral"}:ge);return setTimeout(()=>X(Re),50),Re}),b(null),ne(!1)},250)},450)},50)}},re=g.useCallback(()=>{var fa;if(te||ie||W||!s)return;const Q=J.cols,$=Math.floor(m.length/Q),ce=[];for(let ze=0;ze<$;ze++)m.slice(ze*Q,(ze+1)*Q).every(Pe=>Pe.status==="solved"||Pe.status==="locked")||ce.push(ze);if(ce.length===0)return;const Ce=ce.sort((ze,Pe)=>{const be=m.slice(ze*Q,(ze+1)*Q).filter(ve=>ve.status==="neutral"||ve.status==="selected").length,xe=m.slice(Pe*Q,(Pe+1)*Q).filter(ve=>ve.status==="neutral"||ve.status==="selected").length;return be-xe})[0]*Q,Re=m.slice(Ce,Ce+Q),ge=Re.filter(ze=>ze.status==="neutral"||ze.status==="selected");if(ge.length===0)return;let et=((fa=Re.find(ze=>ze.status==="solved"||ze.status==="locked"))==null?void 0:fa.categoryId)||ge[0].categoryId;const Fe=[...m],We=m.filter(ze=>(ze.status==="neutral"||ze.status==="selected")&&ze.categoryId===et);if(ge.length===1){const ze=ge[0],Pe=We.find(ve=>ve.id!==ze.id)||ze,be=Fe.findIndex(ve=>ve.id===Pe.id),xe=Fe.findIndex(ve=>ve.id===ze.id);if(be!==-1&&xe!==-1&&be!==xe){const ve=Fe[xe];Fe[xe]={...Fe[be],status:"locked"},Fe[be]={...ve,status:ve.status==="locked"?"locked":"neutral"}}else xe!==-1&&(Fe[xe]={...Fe[xe],status:"locked"});O(Fe),He.playTick(),Oe(ve=>ve+1),H.current=Date.now(),setTimeout(()=>X(w.current),1500)}else We.slice(0,2).forEach(Pe=>{let be=-1;for(let xe=0;xe<Q;xe++){const ve=Ce+xe;if(Fe[ve].status!=="locked"&&Fe[ve].status!=="solved"){be=ve;break}}if(be!==-1){const xe=Fe.findIndex(ve=>ve.id===Pe.id);if(xe!==be){const ve=Fe[be];Fe[be]={...Fe[xe],status:"locked"},Fe[xe]={...ve,status:ve.status==="locked"?"locked":"neutral"}}else Fe[be]={...Fe[be],status:"locked"}}}),O(Fe),He.playTick(),Oe(Pe=>Pe+1),H.current=Date.now(),setTimeout(()=>X(Fe),50)},[m,te,ie,W,s,J,X]);return g.useEffect(()=>{if(te||y||W||!s)return;const Q=setInterval(()=>{!document.hidden&&Date.now()-H.current>9e4&&re()},1e3);return()=>clearInterval(Q)},[te,y,W,s,re]),y||m.length===0&&!te?C.jsx("div",{className:"flex-1 flex items-center justify-center bg-black",children:C.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"})}):C.jsxs(fr,{modeName:"EXPANSION",levelIndex:r,onOpenSettings:()=>c==null?void 0:c([]),isReviewing:d,onNext:A,hintsEnabled:s,onToggleHints:()=>E==null?void 0:E(!s),children:[C.jsx(ai,{ref:x}),C.jsx("div",{className:"flex-1 flex flex-col items-center justify-center w-full h-full overflow-visible",children:C.jsx(Lm,{layout:!0,className:"w-full h-full flex flex-col gap-2 p-2",transition:{duration:.8,type:"spring",bounce:.2},children:Array.from({length:Math.ceil(m.length/J.cols)}).map((Q,$)=>{const ce=m.slice($*J.cols,$*J.cols+J.cols);if(ce.length===0)return null;const pe=ce.every(Re=>Re.status==="solved"),Ce=q.has($);return C.jsxs(Lm,{layout:!0,className:"flex-1 relative min-h-0 overflow-visible w-full",children:[pe&&C.jsx(jd,{seed:ce[0].categoryId}),C.jsx("div",{className:`absolute inset-0 z-0 transition-opacity duration-500 rounded-medium ${Ce&&!pe?"bg-white/5 border border-white/40 animate-pulse-highlight":"opacity-0"}`}),(pe||ce.length>0&&ce[0].status==="solved")&&C.jsx("div",{className:"absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]",children:C.jsx("div",{className:"px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white whitespace-nowrap shadow-[0_-4px_12px_rgba(0,0,0,0.5)]",children:ce[0].categoryName})}),C.jsx("div",{className:`grid ${J.cols===2?"grid-cols-2":J.cols===3?"grid-cols-3":"grid-cols-4"} gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${pe?"p-3":"p-1"}`,children:ce.map(Re=>C.jsx(ti,{data:Re,onClick:ye,ref:ge=>{ge&&P.current.set(Re.id,ge)}},Re.id))})]},`row-${$}`)})})})]})},jn=6,Yi=9,py=2500,gy=200,Ny=800,Iy=({csvData:n,onComplete:i,levelIndex:r,hintsEnabled:s,onOpenSettings:c,setHintsEnabled:E,isReviewing:d,onNext:A,isAutoPlaying:h})=>{const[f,T]=g.useState(Array.from({length:Yi},()=>Array(jn).fill(null))),[m,O]=g.useState(0),[L,B]=g.useState(!1),[k,b]=g.useState(!0),[y,Y]=g.useState([]),W=g.useRef(null),ee=g.useRef(Date.now()),te=g.useRef(null),ue=Math.floor(m/10)+1,ie=Math.max(Ny,py-(ue-1)*gy);g.useEffect(()=>{const me=$n(8,n,10);Y(me),b(!1)},[n]);const ne=g.useCallback(()=>{L||(B(!0),He.playError(),i({timeMs:Date.now()-ee.current,clearedTiles:m,speedReached:ue,moves:m/2,mistakes:0,failed:m<20}))},[L,m,ue,i]),fe=g.useCallback(()=>{L||d||y.length===0||T(me=>{const Te=me.map(se=>[...se]),de=[];for(let se=0;se<jn;se++)Te[0][se]===null&&de.push(se);if(de.length===0)return ne(),me;const Oe=de[Math.floor(Math.random()*de.length)],Se=y[Math.floor(Math.random()*y.length)],D=Se.words[Math.floor(Math.random()*Se.words.length)],q={id:Math.random().toString(36).substr(2,9),word:D,categoryId:Se.id,categoryName:Se.name.includes(":")?Se.name.split(":")[1].trim():Se.name,status:"neutral",isSolved:!1,row:0,col:Oe,color:ea[0].solvedColors[parseInt(Se.id)%ea[0].solvedColors.length]};return Te[0][Oe]=q,Te})},[L,d,y,ne]);g.useEffect(()=>{if(L||d||k)return;const me=setInterval(()=>{T(Te=>{let de=!1;const Oe=Te.map(Se=>[...Se]);for(let Se=Yi-2;Se>=0;Se--)for(let D=0;D<jn;D++)Oe[Se][D]!==null&&Oe[Se+1][D]===null&&(Oe[Se+1][D]={...Oe[Se][D],row:Se+1},Oe[Se][D]=null,de=!0);return de?Oe:Te})},200);return()=>clearInterval(me)},[L,d,k]),g.useEffect(()=>{if(L||d||k)return;const me=()=>{fe(),te.current=setTimeout(me,ie)};return te.current=setTimeout(me,ie),()=>{te.current&&clearTimeout(te.current)}},[L,d,k,ie,fe]);const Le=me=>{L||d||T(Te=>{var Ae,le;let de=-1,Oe=-1;for(let p=0;p<Yi;p++)for(let I=0;I<jn;I++)if(((Ae=Te[p][I])==null?void 0:Ae.id)===me){de=p,Oe=I;break}if(de===-1)return Te;const Se=Te[de][Oe].categoryId,D=[],q=new Set,se=[{r:de,c:Oe}];for(;se.length>0;){const{r:p,c:I}=se.pop(),H=`${p},${I}`;q.has(H)||(q.add(H),((le=Te[p][I])==null?void 0:le.categoryId)===Se&&(D.push({r:p,c:I}),p>0&&se.push({r:p-1,c:I}),p<Yi-1&&se.push({r:p+1,c:I}),I>0&&se.push({r:p,c:I-1}),I<jn-1&&se.push({r:p,c:I+1})))}if(D.length>=2){He.playRowSolved(),O(I=>I+D.length);const p=Te.map(I=>[...I]);return D.forEach(({r:I,c:H})=>{var z;if(W.current){const P=(z=document.querySelector(`[data-tile-id="${p[I][H].id}"]`))==null?void 0:z.getBoundingClientRect();P&&W.current.explode(P.left+P.width/2,P.top+P.height/2,"#FFFFFF")}p[I][H]=null}),p}else return He.playSelect(),Te})};return g.useEffect(()=>{if(!h||L||d)return;const Te=setTimeout(()=>{var de;for(let Oe=0;Oe<Yi;Oe++)for(let Se=0;Se<jn;Se++){const D=f[Oe][Se];if(!D)continue;const q=[],se=new Set,Ae=[{r:Oe,c:Se}];for(;Ae.length>0;){const le=Ae.pop(),p=`${le.r},${le.c}`;se.has(p)||(se.add(p),((de=f[le.r][le.c])==null?void 0:de.categoryId)===D.categoryId&&(q.push(le),le.r>0&&Ae.push({r:le.r-1,c:le.c}),le.r<Yi-1&&Ae.push({r:le.r+1,c:le.c}),le.c>0&&Ae.push({r:le.r,c:le.c-1}),le.c<jn-1&&Ae.push({r:le.r,c:le.c+1})))}if(q.length>=2){Le(D.id);return}}},1e3);return()=>clearTimeout(Te)},[h,f,L,d]),k?C.jsx("div",{className:"flex-1 flex items-center justify-center",children:C.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"})}):C.jsxs(fr,{modeName:"CASCADE",levelIndex:r,onOpenSettings:()=>c==null?void 0:c([]),isReviewing:d,onNext:A,hintsEnabled:s,onToggleHints:()=>E==null?void 0:E(!s),headerExtras:C.jsxs("div",{className:"flex items-center gap-3 pr-2",children:[C.jsxs("div",{className:"flex flex-col items-end",children:[C.jsx("span",{className:"text-[8px] text-zinc-500 font-bold uppercase tracking-widest",children:"SPEED"}),C.jsx("span",{className:"text-sm font-black text-white",children:ue})]}),C.jsxs("div",{className:"flex flex-col items-end",children:[C.jsx("span",{className:"text-[8px] text-zinc-500 font-bold uppercase tracking-widest",children:"CLEARED"}),C.jsx("span",{className:"text-sm font-black text-neon-green",children:m})]})]}),children:[C.jsx(ai,{ref:W}),C.jsx("div",{className:"flex-1 flex flex-col items-center justify-center w-full h-full relative p-2 overflow-hidden",children:C.jsxs("div",{className:"w-full h-full max-w-md bg-zinc-900/30 border-4 border-white rounded-medium relative shadow-2xl flex flex-col p-1 overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0 grid grid-cols-6 grid-rows-9 opacity-5 pointer-events-none",children:Array.from({length:54}).map((me,Te)=>C.jsx("div",{className:"border border-white"},Te))}),C.jsx("div",{className:"flex-1 grid grid-cols-6 grid-rows-9 gap-1 relative z-10",children:f.map((me,Te)=>me.map((de,Oe)=>C.jsx("div",{className:"relative w-full h-full",children:de&&C.jsx(Ar.div,{layout:!0,initial:{y:-50,opacity:0},animate:{y:0,opacity:1},className:"absolute inset-0",children:C.jsx(ti,{data:de,onClick:Le,"data-tile-id":de.id})})},de?de.id:`empty-${Te}-${Oe}`)))}),C.jsx("div",{className:"absolute top-0 left-0 w-full h-1/9 bg-neon-red/10 animate-pulse pointer-events-none"})]})})]})},yy=Ar.div,Ly=({isOpen:n,onClose:i,selectedIds:r,onToggle:s})=>{const[c,E]=g.useState(""),d=g.useMemo(()=>[...tr(),...xs(),...ar()].sort((O,L)=>O.name.localeCompare(L.name)),[]),A=g.useMemo(()=>{if(!c.trim())return d;const m=c.toUpperCase();return d.filter(O=>O.name.toUpperCase().includes(m))},[c,d]),h=m=>{r.includes(m)?s(r.filter(O=>O!==m)):s([...r,m])},f=()=>{s(d.map(m=>m.id))},T=()=>{s([])};return n?C.jsx("div",{className:"absolute inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald",children:C.jsxs(yy,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col gap-3 overflow-hidden h-[90vh]",children:[C.jsxs("div",{className:"flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[C.jsx("h2",{className:"text-xl font-black text-neon-yellow uppercase tracking-widest italic drop-shadow-[0_0_5px_rgba(249,255,0,0.8)]",children:"MANAGE POOL"}),C.jsx("button",{className:"text-zinc-400 hover:text-white transition-colors p-1",onClick:i,children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),C.jsx("p",{className:"text-[10px] text-zinc-500 font-bold uppercase tracking-wider leading-tight px-1",children:"Select categories you want to appear in your puzzles. If empty, the full global pool is used."}),C.jsx("div",{className:"flex gap-2 shrink-0",children:C.jsx("input",{type:"text",placeholder:"SEARCH CATEGORIES...",value:c,onChange:m=>E(m.target.value),className:"flex-1 bg-black border-2 border-zinc-800 rounded-medium px-3 py-2 text-white font-bold text-xs focus:border-neon-blue outline-none transition-colors"})}),C.jsxs("div",{className:"flex gap-2 shrink-0",children:[C.jsx("button",{onClick:f,className:"flex-1 py-1.5 bg-zinc-900 border border-zinc-700 text-[9px] font-black uppercase text-zinc-400 rounded-small hover:text-white transition-colors",children:"Select All"}),C.jsx("button",{onClick:T,className:"flex-1 py-1.5 bg-zinc-900 border border-zinc-700 text-[9px] font-black uppercase text-zinc-400 rounded-small hover:text-white transition-colors",children:"Clear All"})]}),C.jsx("div",{className:"flex-1 overflow-y-auto no-scrollbar pr-1 flex flex-col gap-1.5 bg-black/40 rounded-medium p-1",children:A.length===0?C.jsx("div",{className:"py-10 text-center text-zinc-700 font-bold uppercase text-xs",children:"No results found"}):A.map(m=>{const O=r.includes(m.id);return C.jsxs("button",{onClick:()=>h(m.id),className:`w-full flex items-center justify-between px-3 py-2.5 rounded-medium border-2 transition-all ${O?"bg-zinc-900 border-neon-blue text-white shadow-[0_0_8px_rgba(0,229,255,0.2)]":"bg-black border-zinc-800 text-zinc-600"}`,children:[C.jsx("span",{className:"font-bold text-[11px] uppercase tracking-tight truncate mr-2",children:m.name}),C.jsx("div",{className:`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${O?"border-neon-blue bg-neon-blue shadow-[0_0_5px_#00E5FF]":"border-zinc-800"}`,children:O&&C.jsx("span",{className:"text-[10px] text-black font-black",children:"✓"})})]},m.id)})}),C.jsx("div",{className:"pt-2 border-t border-zinc-800 shrink-0",children:C.jsxs("button",{onClick:i,className:"w-full py-3 bg-white text-black font-black text-lg uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_15px_white]",style:Wd,children:["CONFIRM POOL (",r.length,")"]})})]})}):null},My=()=>C.jsx("footer",{className:"w-full bg-black flex flex-col items-center justify-center shrink-0 z-[60]",style:{height:FC},children:C.jsx("div",{className:"w-full h-full bg-black flex items-center justify-center overflow-hidden"})}),Dy=()=>C.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"max(env(safe-area-inset-top, 0px), 24px)"}}),Py=()=>C.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"max(env(safe-area-inset-bottom, 0px), 16px)"}}),vy="ca-app-pub-4096368901415767/2019330695",xc="ca-app-pub-4096368901415767/1153913539",By=()=>{try{const n=document.createElement("div");n.style.height="env(safe-area-inset-bottom, 0px)",n.style.visibility="hidden",n.style.position="absolute",document.body.appendChild(n);const i=n.offsetHeight;return document.body.removeChild(n),Math.max(i,16)}catch{return 16}};class by extends g.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,r){console.error("Game crashed:",i,r)}render(){return this.state.hasError?C.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-4 text-center",children:[C.jsx("h1",{className:"text-3xl font-bold mb-4 font-oswald text-red-500 uppercase",children:"System Error"}),C.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-white text-black font-bold rounded-full uppercase font-oswald",children:"Reboot"})]}):this.props.children}}const Mm=()=>C.jsx("div",{className:"flex items-center justify-center h-full w-full bg-black",children:C.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"})}),Hy=()=>{const[n,i]=g.useState(Ie.MENU),[r,s]=g.useState(1),[c,E]=g.useState(!0),[d,A]=g.useState(!1),[h,f]=g.useState(!1),[T,m]=g.useState(!1),[O,L]=g.useState(!0),[B,k]=g.useState(!1),[b,y]=g.useState([]),[Y,W]=g.useState(!1),[ee,te]=g.useState([]),[ue,ie]=g.useState([]),[ne,fe]=g.useState(!1),[Le,me]=g.useState(null),[Te,de]=g.useState(!1),[Oe,Se]=g.useState(!1);g.useEffect(()=>{s(xC()),te(YC()),ie(WC())},[]),g.useEffect(()=>{(async()=>{if(!qn.isNativePlatform()){de(!0);return}try{await Na.initialize({});const H=await Na.requestConsentInfo();H.isConsentFormAvailable&&H.status===Wc.REQUIRED&&await Na.showConsentForm(),H.privacyOptionsRequirementStatus==="REQUIRED"&&Se(!0);const z=By();await Na.showBanner({adId:vy,adSize:Kc.BANNER,position:Yc.BOTTOM_CENTER,margin:z,isTesting:!1});try{await Na.prepareInterstitial({adId:xc,isTesting:!1})}catch(P){console.error("Interstitial prep failed",P)}}catch(H){console.error("AdMob/UMP initialization failed",H)}finally{de(!0)}})()},[]);const D=async()=>{if(qn.isNativePlatform())try{await Na.showPrivacyOptionsForm()}catch(I){console.error("Failed to show privacy options form",I)}};g.useEffect(()=>{let I=!0;return(async()=>{try{const z=await Ap(r,ee,ue);I&&me(z)}catch(z){console.error("Failed to load level package",z)}})(),()=>{I=!1}},[r,ee,ue]),g.useEffect(()=>{n!==Ie.MENU&&!jC()&&k(!0)},[n]);const q=I=>{let H;if(ee.includes(I)){if(ee.length<=1)return;H=ee.filter(z=>z!==I)}else H=[...ee,I];te(H),KC(H)},se=()=>{const I=!c;E(I),He.setSound(I)},Ae=I=>{let H=0;n===Ie.LEVEL_MIND_MATCH?H=(I.roundsWon||0)*5:n===Ie.LEVEL_CASCADE?H=Math.floor((I.clearedTiles||0)/2):I.failed||(n===Ie.CLASSIC||n===Ie.LEVEL_THEMED||n===Ie.LEVEL_SYNONYMS?H=10:n===Ie.LEVEL_EMOJI?H=5:n===Ie.LEVEL_EXPANSION&&(H=15));const z=(I.hintsUsedCount||0)*-5;let P=0;!I.failed&&I.mistakes===0&&n!==Ie.LEVEL_CASCADE&&(P=25);const x=(I.failed?0:I.rowEfficiency)||0;let w=0;if(!I.failed&&n!==Ie.LEVEL_CASCADE){const J=I.timeMs/1e3;J<60?w=10:J<90?w=5:J<120&&(w=2)}const V=Math.max(0,H+z+x+P+w);JC({totalScore:V,levelsCompleted:I.failed?0:1,totalMoves:I.moves,totalTimeMs:I.timeMs,rowsSolved:n===Ie.LEVEL_MIND_MATCH?(I.roundsWon||0)*4:4,solvedCategoryIds:I.solvedCategoryIds,solvedWords:I.solvedWords}),W(!0)},le=async()=>{if(qn.isNativePlatform())try{await Na.showInterstitial(),await Na.prepareInterstitial({adId:xc,isTesting:!1})}catch(z){console.error("Failed to show interstitial",z);try{await Na.prepareInterstitial({adId:xc,isTesting:!1})}catch{}}const I=r+1;s(I),VC(I);const H=Vc(I,ee);i(H),W(!1)};g.useEffect(()=>{if(ne&&Y){const I=setTimeout(()=>{le()},2e3);return()=>clearTimeout(I)}},[ne,Y]);const p=()=>{if(n===Ie.MENU)return C.jsx(Mp,{onStart:()=>{const H=Le?Le.mode:Vc(r,ee);i(H)},onSettings:()=>A(!0),onStats:()=>f(!0),lastLevel:r});if(!Le||Le.mode!==n)return C.jsx(Mm,{});const{data:I}=Le;switch(n){case Ie.CLASSIC:case Ie.LEVEL_THEMED:case Ie.LEVEL_SYNONYMS:return C.jsx(my,{csvData:I,mode:n,levelIndex:r,onComplete:Ae,onExit:()=>i(Ie.MENU),hintsEnabled:O,setHintsEnabled:L,onOpenSettings:H=>{y(H||[]),A(!0)},isReviewing:Y,onNext:le,isAutoPlaying:ne},r);case Ie.LEVEL_EMOJI:return C.jsx(Ty,{levelIndex:r,onComplete:Ae,onExit:()=>i(Ie.MENU),hintsEnabled:O,setHintsEnabled:L,onOpenSettings:H=>{y(H||[]),A(!0)},isReviewing:Y,onNext:le,isAutoPlaying:ne},r);case Ie.LEVEL_MIND_MATCH:return C.jsx(Oy,{csvData:I,levelIndex:r,onComplete:Ae,onExit:()=>i(Ie.MENU),hintsEnabled:O,setHintsEnabled:L,onOpenSettings:H=>{y(H||[]),A(!0)},isReviewing:Y,onNext:le,isAutoPlaying:ne},r);case Ie.LEVEL_EXPANSION:return C.jsx(Cy,{csvData:I,levelIndex:r,onComplete:Ae,onExit:()=>i(Ie.MENU),hintsEnabled:O,setHintsEnabled:L,onOpenSettings:H=>{y(H||[]),A(!0)},isReviewing:Y,onNext:le,isAutoPlaying:ne},r);case Ie.LEVEL_CASCADE:return C.jsx(Iy,{csvData:I,levelIndex:r,onComplete:Ae,onExit:()=>i(Ie.MENU),hintsEnabled:O,setHintsEnabled:L,onOpenSettings:H=>{y(H||[]),A(!0)},isReviewing:Y,onNext:le,isAutoPlaying:ne},r);default:return C.jsx(Ry,{csvData:I,levelIndex:r,onComplete:Ae,onGameOver:()=>Ae({timeMs:0,hintsUsedCount:0,moves:0,failed:!0,mistakes:5}),onExit:()=>i(Ie.MENU),hintsEnabled:O,setHintsEnabled:L,onOpenSettings:H=>{y(H||[]),A(!0)},isReviewing:Y,onNext:le,isAutoPlaying:ne},r)}};return Te?C.jsx(by,{children:C.jsxs("div",{className:"fixed inset-0 h-viewport w-screen bg-black text-white font-oswald flex flex-col overflow-hidden",children:[C.jsx(Dy,{}),C.jsxs("div",{className:"flex-1 relative flex flex-col min-h-0 w-full overflow-hidden",children:[p(),B&&C.jsx(fy,{mode:n,onComplete:()=>{_C(),k(!1)}})]}),C.jsx(My,{}),C.jsx(Py,{}),d&&C.jsx(Pp,{isOpen:d,onClose:()=>A(!1),onMainMenu:()=>{A(!1),i(Ie.MENU)},isMusicOn:c,toggleMusic:se,enabledModes:ee,toggleMode:q,hintsEnabled:O,setHintsEnabled:L,onShowTutorial:()=>k(!0),onResetProgress:()=>{localStorage.clear(),window.location.reload()},categories:b,isAutoPlaying:ne,toggleAutoPlay:()=>fe(!ne),privacyOptionsRequired:Oe,onShowPrivacyOptions:D,onManagePool:()=>m(!0),selectedCount:ue.length}),T&&C.jsx(Ly,{isOpen:T,onClose:()=>m(!1),selectedIds:ue,onToggle:I=>{ie(I),zC(I)}}),h&&C.jsx(oy,{onClose:()=>f(!1)})]})}):C.jsx("div",{className:"fixed inset-0 h-viewport w-screen bg-black text-white font-oswald flex items-center justify-center",children:C.jsx(Mm,{})})},cR=document.getElementById("root");if(!cR)throw new Error("Could not find root element to mount to");const Gy=UC.createRoot(cR);Gy.render(C.jsx(lr.StrictMode,{children:C.jsx(Hy,{})}));export{Wc as A,bm as W};
