(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const E of c)if(E.type==="childList")for(const d of E.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const E={};return c.integrity&&(E.integrity=c.integrity),c.referrerPolicy&&(E.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?E.credentials="include":c.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function l(c){if(c.ep)return;c.ep=!0;const E=r(c);fetch(c.href,E)}})();function MT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dc={exports:{}},Ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function pC(){if(Kf)return Ko;Kf=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(l,c,E){var d=null;if(E!==void 0&&(d=""+E),c.key!==void 0&&(d=""+c.key),"key"in c){E={};for(var A in c)A!=="key"&&(E[A]=c[A])}else E=c;return c=E.ref,{$$typeof:n,type:l,key:d,ref:c!==void 0?c:null,props:E}}return Ko.Fragment=i,Ko.jsx=r,Ko.jsxs=r,Ko}var Wf;function gC(){return Wf||(Wf=1,dc.exports=pC()),dc.exports}var C=gC(),Ec={exports:{}},Be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf;function NC(){if(zf)return Be;zf=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),d=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),O=Symbol.iterator;function L(p){return p===null||typeof p!="object"?null:(p=O&&p[O]||p["@@iterator"],typeof p=="function"?p:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,M={};function I(p,b,z){this.props=p,this.context=b,this.refs=M,this.updater=z||v}I.prototype.isReactComponent={},I.prototype.setState=function(p,b){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,b,"setState")},I.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function V(){}V.prototype=I.prototype;function w(p,b,z){this.props=p,this.context=b,this.refs=M,this.updater=z||v}var ie=w.prototype=new V;ie.constructor=w,F(ie,I.prototype),ie.isPureReactComponent=!0;var ae=Array.isArray;function Ee(){}var te={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function Te(p,b,z){var j=z.ref;return{$$typeof:n,type:p,key:b,ref:j!==void 0?j:null,props:z}}function De(p,b){return Te(p.type,b,p.props)}function Pe(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function Ge(p){var b={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(z){return b[z]})}var ve=/\/+/g;function We(p,b){return typeof p=="object"&&p!==null&&p.key!=null?Ge(""+p.key):b.toString(36)}function we(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Ee,Ee):(p.status="pending",p.then(function(b){p.status==="pending"&&(p.status="fulfilled",p.value=b)},function(b){p.status==="pending"&&(p.status="rejected",p.reason=b)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function P(p,b,z,j,B){var k=typeof p;(k==="undefined"||k==="boolean")&&(p=null);var x=!1;if(p===null)x=!0;else switch(k){case"bigint":case"string":case"number":x=!0;break;case"object":switch(p.$$typeof){case n:case i:x=!0;break;case m:return x=p._init,P(x(p._payload),b,z,j,B)}}if(x)return B=B(p),x=j===""?"."+We(p,0):j,ae(B)?(z="",x!=null&&(z=x.replace(ve,"$&/")+"/"),P(B,b,z,"",function(ee){return ee})):B!=null&&(Pe(B)&&(B=De(B,z+(B.key==null||p&&p.key===B.key?"":(""+B.key).replace(ve,"$&/")+"/")+x)),b.push(B)),1;x=0;var K=j===""?".":j+":";if(ae(p))for(var J=0;J<p.length;J++)j=p[J],k=K+We(j,J),x+=P(j,b,z,k,B);else if(J=L(p),typeof J=="function")for(p=J.call(p),J=0;!(j=p.next()).done;)j=j.value,k=K+We(j,J++),x+=P(j,b,z,k,B);else if(k==="object"){if(typeof p.then=="function")return P(we(p),b,z,j,B);throw b=String(p),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return x}function q(p,b,z){if(p==null)return p;var j=[],B=0;return P(p,j,"","",function(k){return b.call(z,k,B++)}),j}function ce(p){if(p._status===-1){var b=p._result;b=b(),b.then(function(z){(p._status===0||p._status===-1)&&(p._status=1,p._result=z)},function(z){(p._status===0||p._status===-1)&&(p._status=2,p._result=z)}),p._status===-1&&(p._status=0,p._result=b)}if(p._status===1)return p._result.default;throw p._result}var oe=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},se={map:q,forEach:function(p,b,z){q(p,function(){b.apply(this,arguments)},z)},count:function(p){var b=0;return q(p,function(){b++}),b},toArray:function(p){return q(p,function(b){return b})||[]},only:function(p){if(!Pe(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return Be.Activity=T,Be.Children=se,Be.Component=I,Be.Fragment=r,Be.Profiler=c,Be.PureComponent=w,Be.StrictMode=l,Be.Suspense=f,Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,Be.__COMPILER_RUNTIME={__proto__:null,c:function(p){return te.H.useMemoCache(p)}},Be.cache=function(p){return function(){return p.apply(null,arguments)}},Be.cacheSignal=function(){return null},Be.cloneElement=function(p,b,z){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var j=F({},p.props),B=p.key;if(b!=null)for(k in b.key!==void 0&&(B=""+b.key),b)!re.call(b,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&b.ref===void 0||(j[k]=b[k]);var k=arguments.length-2;if(k===1)j.children=z;else if(1<k){for(var x=Array(k),K=0;K<k;K++)x[K]=arguments[K+2];j.children=x}return Te(p.type,B,j)},Be.createContext=function(p){return p={$$typeof:d,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:E,_context:p},p},Be.createElement=function(p,b,z){var j,B={},k=null;if(b!=null)for(j in b.key!==void 0&&(k=""+b.key),b)re.call(b,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(B[j]=b[j]);var x=arguments.length-2;if(x===1)B.children=z;else if(1<x){for(var K=Array(x),J=0;J<x;J++)K[J]=arguments[J+2];B.children=K}if(p&&p.defaultProps)for(j in x=p.defaultProps,x)B[j]===void 0&&(B[j]=x[j]);return Te(p,k,B)},Be.createRef=function(){return{current:null}},Be.forwardRef=function(p){return{$$typeof:A,render:p}},Be.isValidElement=Pe,Be.lazy=function(p){return{$$typeof:m,_payload:{_status:-1,_result:p},_init:ce}},Be.memo=function(p,b){return{$$typeof:h,type:p,compare:b===void 0?null:b}},Be.startTransition=function(p){var b=te.T,z={};te.T=z;try{var j=p(),B=te.S;B!==null&&B(z,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(Ee,oe)}catch(k){oe(k)}finally{b!==null&&z.types!==null&&(b.types=z.types),te.T=b}},Be.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},Be.use=function(p){return te.H.use(p)},Be.useActionState=function(p,b,z){return te.H.useActionState(p,b,z)},Be.useCallback=function(p,b){return te.H.useCallback(p,b)},Be.useContext=function(p){return te.H.useContext(p)},Be.useDebugValue=function(){},Be.useDeferredValue=function(p,b){return te.H.useDeferredValue(p,b)},Be.useEffect=function(p,b){return te.H.useEffect(p,b)},Be.useEffectEvent=function(p){return te.H.useEffectEvent(p)},Be.useId=function(){return te.H.useId()},Be.useImperativeHandle=function(p,b,z){return te.H.useImperativeHandle(p,b,z)},Be.useInsertionEffect=function(p,b){return te.H.useInsertionEffect(p,b)},Be.useLayoutEffect=function(p,b){return te.H.useLayoutEffect(p,b)},Be.useMemo=function(p,b){return te.H.useMemo(p,b)},Be.useOptimistic=function(p,b){return te.H.useOptimistic(p,b)},Be.useReducer=function(p,b,z){return te.H.useReducer(p,b,z)},Be.useRef=function(p){return te.H.useRef(p)},Be.useState=function(p){return te.H.useState(p)},Be.useSyncExternalStore=function(p,b,z){return te.H.useSyncExternalStore(p,b,z)},Be.useTransition=function(){return te.H.useTransition()},Be.version="19.2.3",Be}var jf;function rd(){return jf||(jf=1,Ec.exports=NC()),Ec.exports}var N=rd();const ir=MT(N);var Sc={exports:{}},Wo={},Ac={exports:{}},fc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function IC(){return _f||(_f=1,(function(n){function i(P,q){var ce=P.length;P.push(q);e:for(;0<ce;){var oe=ce-1>>>1,se=P[oe];if(0<c(se,q))P[oe]=q,P[ce]=se,ce=oe;else break e}}function r(P){return P.length===0?null:P[0]}function l(P){if(P.length===0)return null;var q=P[0],ce=P.pop();if(ce!==q){P[0]=ce;e:for(var oe=0,se=P.length,p=se>>>1;oe<p;){var b=2*(oe+1)-1,z=P[b],j=b+1,B=P[j];if(0>c(z,ce))j<se&&0>c(B,z)?(P[oe]=B,P[j]=ce,oe=j):(P[oe]=z,P[b]=ce,oe=b);else if(j<se&&0>c(B,ce))P[oe]=B,P[j]=ce,oe=j;else break e}}return q}function c(P,q){var ce=P.sortIndex-q.sortIndex;return ce!==0?ce:P.id-q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;n.unstable_now=function(){return E.now()}}else{var d=Date,A=d.now();n.unstable_now=function(){return d.now()-A}}var f=[],h=[],m=1,T=null,O=3,L=!1,v=!1,F=!1,M=!1,I=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function ie(P){for(var q=r(h);q!==null;){if(q.callback===null)l(h);else if(q.startTime<=P)l(h),q.sortIndex=q.expirationTime,i(f,q);else break;q=r(h)}}function ae(P){if(F=!1,ie(P),!v)if(r(f)!==null)v=!0,Ee||(Ee=!0,Ge());else{var q=r(h);q!==null&&we(ae,q.startTime-P)}}var Ee=!1,te=-1,re=5,Te=-1;function De(){return M?!0:!(n.unstable_now()-Te<re)}function Pe(){if(M=!1,Ee){var P=n.unstable_now();Te=P;var q=!0;try{e:{v=!1,F&&(F=!1,V(te),te=-1),L=!0;var ce=O;try{t:{for(ie(P),T=r(f);T!==null&&!(T.expirationTime>P&&De());){var oe=T.callback;if(typeof oe=="function"){T.callback=null,O=T.priorityLevel;var se=oe(T.expirationTime<=P);if(P=n.unstable_now(),typeof se=="function"){T.callback=se,ie(P),q=!0;break t}T===r(f)&&l(f),ie(P)}else l(f);T=r(f)}if(T!==null)q=!0;else{var p=r(h);p!==null&&we(ae,p.startTime-P),q=!1}}break e}finally{T=null,O=ce,L=!1}q=void 0}}finally{q?Ge():Ee=!1}}}var Ge;if(typeof w=="function")Ge=function(){w(Pe)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,We=ve.port2;ve.port1.onmessage=Pe,Ge=function(){We.postMessage(null)}}else Ge=function(){I(Pe,0)};function we(P,q){te=I(function(){P(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return O},n.unstable_next=function(P){switch(O){case 1:case 2:case 3:var q=3;break;default:q=O}var ce=O;O=q;try{return P()}finally{O=ce}},n.unstable_requestPaint=function(){M=!0},n.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ce=O;O=P;try{return q()}finally{O=ce}},n.unstable_scheduleCallback=function(P,q,ce){var oe=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?oe+ce:oe):ce=oe,P){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ce+se,P={id:m++,callback:q,priorityLevel:P,startTime:ce,expirationTime:se,sortIndex:-1},ce>oe?(P.sortIndex=ce,i(h,P),r(f)===null&&P===r(h)&&(F?(V(te),te=-1):F=!0,we(ae,ce-oe))):(P.sortIndex=se,i(f,P),v||L||(v=!0,Ee||(Ee=!0,Ge()))),P},n.unstable_shouldYield=De,n.unstable_wrapCallback=function(P){var q=O;return function(){var ce=O;O=q;try{return P.apply(this,arguments)}finally{O=ce}}}})(fc)),fc}var Jf;function yC(){return Jf||(Jf=1,Ac.exports=IC()),Ac.exports}var hc={exports:{}},Ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function LC(){if(Zf)return Ft;Zf=1;var n=rd();function i(f){var h="https://react.dev/errors/"+f;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+f+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function E(f,h,m){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:T==null?null:""+T,children:f,containerInfo:h,implementation:m}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(f,h){if(f==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Ft.createPortal=function(f,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return E(f,h,null,m)},Ft.flushSync=function(f){var h=d.T,m=l.p;try{if(d.T=null,l.p=2,f)return f()}finally{d.T=h,l.p=m,l.d.f()}},Ft.preconnect=function(f,h){typeof f=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,l.d.C(f,h))},Ft.prefetchDNS=function(f){typeof f=="string"&&l.d.D(f)},Ft.preinit=function(f,h){if(typeof f=="string"&&h&&typeof h.as=="string"){var m=h.as,T=A(m,h.crossOrigin),O=typeof h.integrity=="string"?h.integrity:void 0,L=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?l.d.S(f,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:T,integrity:O,fetchPriority:L}):m==="script"&&l.d.X(f,{crossOrigin:T,integrity:O,fetchPriority:L,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ft.preinitModule=function(f,h){if(typeof f=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=A(h.as,h.crossOrigin);l.d.M(f,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&l.d.M(f)},Ft.preload=function(f,h){if(typeof f=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,T=A(m,h.crossOrigin);l.d.L(f,m,{crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ft.preloadModule=function(f,h){if(typeof f=="string")if(h){var m=A(h.as,h.crossOrigin);l.d.m(f,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else l.d.m(f)},Ft.requestFormReset=function(f){l.d.r(f)},Ft.unstable_batchedUpdates=function(f,h){return f(h)},Ft.useFormState=function(f,h,m){return d.H.useFormState(f,h,m)},Ft.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ft.version="19.2.3",Ft}var Xf;function MC(){if(Xf)return hc.exports;Xf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),hc.exports=LC(),hc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function DC(){if(qf)return Wo;qf=1;var n=yC(),i=rd(),r=MC();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function E(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(E(e)!==e)throw Error(l(188))}function h(e){var t=e.alternate;if(!t){if(t=E(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,o=t;;){var s=a.return;if(s===null)break;var u=s.alternate;if(u===null){if(o=s.return,o!==null){a=o;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===a)return f(s),e;if(u===o)return f(s),t;u=u.sibling}throw Error(l(188))}if(a.return!==o.return)a=s,o=u;else{for(var S=!1,R=s.child;R;){if(R===a){S=!0,a=s,o=u;break}if(R===o){S=!0,o=s,a=u;break}R=R.sibling}if(!S){for(R=u.child;R;){if(R===a){S=!0,a=u,o=s;break}if(R===o){S=!0,o=u,a=s;break}R=R.sibling}if(!S)throw Error(l(189))}}if(a.alternate!==o)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,O=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),w=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),De=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Pe&&e[Pe]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function We(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case I:return"Profiler";case M:return"StrictMode";case ae:return"Suspense";case Ee:return"SuspenseList";case Te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case w:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:We(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return We(e(t))}catch{}}return null}var we=Array.isArray,P=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},oe=[],se=-1;function p(e){return{current:e}}function b(e){0>se||(e.current=oe[se],oe[se]=null,se--)}function z(e,t){se++,oe[se]=e.current,e.current=t}var j=p(null),B=p(null),k=p(null),x=p(null);function K(e,t){switch(z(k,t),z(B,e),z(j,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ef(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ef(t),e=Sf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}b(j),z(j,e)}function J(){b(j),b(B),b(k)}function ee(e){e.memoizedState!==null&&z(x,e);var t=j.current,a=Sf(t,e.type);t!==a&&(z(B,e),z(j,a))}function $(e){B.current===e&&(b(j),b(B)),x.current===e&&(b(x),ko._currentValue=ce)}var X,Oe;function ne(e){if(X===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);X=t&&t[1]||"",Oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+X+e+Oe}var ue=!1;function Q(e,t){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(Y){var U=Y}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(Y){U=Y}e.call(Z.prototype)}}else{try{throw Error()}catch(Y){U=Y}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(Y){if(Y&&U&&typeof Y.stack=="string")return[Y.stack,U.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),S=u[0],R=u[1];if(S&&R){var g=S.split(`
`),G=R.split(`
`);for(s=o=0;o<g.length&&!g[o].includes("DetermineComponentFrameRoot");)o++;for(;s<G.length&&!G[s].includes("DetermineComponentFrameRoot");)s++;if(o===g.length||s===G.length)for(o=g.length-1,s=G.length-1;1<=o&&0<=s&&g[o]!==G[s];)s--;for(;1<=o&&0<=s;o--,s--)if(g[o]!==G[s]){if(o!==1||s!==1)do if(o--,s--,0>s||g[o]!==G[s]){var W=`
`+g[o].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),W}while(1<=o&&0<=s);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ne(a):""}function Se(e,t){switch(e.tag){case 26:case 27:case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return e.child!==t&&t!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return Q(e.type,!1);case 11:return Q(e.type.render,!1);case 1:return Q(e.type,!0);case 31:return ne("Activity");default:return""}}function Ae(e){try{var t="",a=null;do t+=Se(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var me=Object.prototype.hasOwnProperty,Ne=n.unstable_scheduleCallback,pe=n.unstable_cancelCallback,Le=n.unstable_shouldYield,Ze=n.unstable_requestPaint,Me=n.unstable_now,rt=n.unstable_getCurrentPriorityLevel,ze=n.unstable_ImmediatePriority,Rt=n.unstable_UserBlockingPriority,je=n.unstable_NormalPriority,le=n.unstable_LowPriority,de=n.unstable_IdlePriority,Fe=n.log,ke=n.unstable_setDisableYieldValue,_e=null,Re=null;function ct(e){if(typeof Fe=="function"&&ke(e),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(_e,e)}catch{}}var Lt=Math.clz32?Math.clz32:Qs,cr=Math.log,Xa=Math.LN2;function Qs(e){return e>>>=0,e===0?32:31-(cr(e)/Xa|0)|0}var dr=256,Er=262144,Sr=4194304;function Mn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ar(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var s=0,u=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~u,o!==0?s=Mn(o):(S&=R,S!==0?s=Mn(S):a||(a=R&~e,a!==0&&(s=Mn(a))))):(R=o&~u,R!==0?s=Mn(R):S!==0?s=Mn(S):a||(a=o&~e,a!==0&&(s=Mn(a)))),s===0?0:t!==0&&t!==s&&(t&u)===0&&(u=s&-s,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:s}function qi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function uR(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jd(){var e=Sr;return Sr<<=1,(Sr&62914560)===0&&(Sr=4194304),e}function $s(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Qi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cR(e,t,a,o,s,u){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,g=e.expirationTimes,G=e.hiddenUpdates;for(a=S&~a;0<a;){var W=31-Lt(a),Z=1<<W;R[W]=0,g[W]=-1;var U=G[W];if(U!==null)for(G[W]=null,W=0;W<U.length;W++){var Y=U[W];Y!==null&&(Y.lane&=-536870913)}a&=~Z}o!==0&&_d(e,o,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(S&~t))}function _d(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Lt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Jd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Lt(a),s=1<<o;s&t|e[o]&t&&(e[o]|=t),a&=~s}}function Zd(e,t){var a=t&-t;return a=(a&42)!==0?1:el(a),(a&(e.suspendedLanes|t))!==0?0:a}function el(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xd(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Uf(e.type))}function qd(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var qa=Math.random().toString(36).slice(2),vt="__reactFiber$"+qa,Vt="__reactProps$"+qa,Qn="__reactContainer$"+qa,al="__reactEvents$"+qa,dR="__reactListeners$"+qa,ER="__reactHandles$"+qa,Qd="__reactResources$"+qa,$i="__reactMarker$"+qa;function nl(e){delete e[vt],delete e[Vt],delete e[al],delete e[dR],delete e[ER]}function $n(e){var t=e[vt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qn]||a[vt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Of(e);e!==null;){if(a=e[vt])return a;e=Of(e)}return t}e=a,a=e.parentNode}return null}function ei(e){if(e=e[vt]||e[Qn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function eo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function ti(e){var t=e[Qd];return t||(t=e[Qd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Dt(e){e[$i]=!0}var $d=new Set,eE={};function Dn(e,t){ai(e,t),ai(e+"Capture",t)}function ai(e,t){for(eE[e]=t,e=0;e<t.length;e++)$d.add(t[e])}var SR=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tE={},aE={};function AR(e){return me.call(aE,e)?!0:me.call(tE,e)?!1:SR.test(e)?aE[e]=!0:(tE[e]=!0,!1)}function fr(e,t,a){if(AR(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function hr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ma(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function na(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fR(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var s=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(S){a=""+S,u.call(this,S)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function il(e){if(!e._valueTracker){var t=nE(e)?"checked":"value";e._valueTracker=fR(e,t,""+e[t])}}function iE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=nE(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hR=/[\n"\\]/g;function ia(e){return e.replace(hR,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ol(e,t,a,o,s,u,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),t!=null?S==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+na(t)):e.value!==""+na(t)&&(e.value=""+na(t)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),t!=null?rl(e,S,na(t)):a!=null?rl(e,S,na(a)):o!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+na(R):e.removeAttribute("name")}function oE(e,t,a,o,s,u,S,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){il(e);return}a=a!=null?""+na(a):"",t=t!=null?""+na(t):a,R||t===e.value||(e.value=t),e.defaultValue=t}o=o??s,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),il(e)}function rl(e,t,a){t==="number"&&Tr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ni(e,t,a,o){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&o&&(e[a].defaultSelected=!0)}else{for(a=""+na(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function rE(e,t,a){if(t!=null&&(t=""+na(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+na(a):""}function sE(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(l(92));if(we(o)){if(1<o.length)throw Error(l(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=na(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),il(e)}function ii(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var TR=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lE(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||TR.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function uE(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var s in t)o=t[s],t.hasOwnProperty(s)&&a[s]!==o&&lE(e,s,o)}else for(var u in t)t.hasOwnProperty(u)&&lE(e,u,t[u])}function sl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mR=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),RR=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mr(e){return RR.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Da(){}var ll=null;function ul(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,ri=null;function cE(e){var t=ei(e);if(t&&(e=t.stateNode)){var a=e[Vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ol(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ia(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var s=o[Vt]||null;if(!s)throw Error(l(90));ol(o,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&iE(o)}break e;case"textarea":rE(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ni(e,!!a.multiple,t,!1)}}}var cl=!1;function dE(e,t,a){if(cl)return e(t,a);cl=!0;try{var o=e(t);return o}finally{if(cl=!1,(oi!==null||ri!==null)&&(os(),oi&&(t=oi,e=ri,ri=oi=null,cE(t),e)))for(t=0;t<e.length;t++)cE(e[t])}}function to(e,t){var a=e.stateNode;if(a===null)return null;var o=a[Vt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var Pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=!1;if(Pa)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){dl=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{dl=!1}var Qa=null,El=null,Rr=null;function EE(){if(Rr)return Rr;var e,t=El,a=t.length,o,s="value"in Qa?Qa.value:Qa.textContent,u=s.length;for(e=0;e<a&&t[e]===s[e];e++);var S=a-e;for(o=1;o<=S&&t[a-o]===s[u-o];o++);return Rr=s.slice(e,1<o?1-o:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function SE(){return!1}function Yt(e){function t(a,o,s,u,S){this._reactName=a,this._targetInst=s,this.type=o,this.nativeEvent=u,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Cr:SE,this.isPropagationStopped=SE,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pr=Yt(Pn),no=T({},Pn,{view:0,detail:0}),OR=Yt(no),Sl,Al,io,gr=T({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(Sl=e.screenX-io.screenX,Al=e.screenY-io.screenY):Al=Sl=0,io=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),AE=Yt(gr),CR=T({},gr,{dataTransfer:0}),pR=Yt(CR),gR=T({},no,{relatedTarget:0}),fl=Yt(gR),NR=T({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),IR=Yt(NR),yR=T({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),LR=Yt(yR),MR=T({},Pn,{data:0}),fE=Yt(MR),DR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BR(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vR[e])?!!t[e]:!1}function hl(){return BR}var bR=T({},no,{key:function(e){if(e.key){var t=DR[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?PR[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),HR=Yt(bR),GR=T({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hE=Yt(GR),UR=T({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),FR=Yt(UR),wR=T({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kR=Yt(wR),xR=T({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),VR=Yt(xR),YR=T({},Pn,{newState:0,oldState:0}),KR=Yt(YR),WR=[9,13,27,32],Tl=Pa&&"CompositionEvent"in window,oo=null;Pa&&"documentMode"in document&&(oo=document.documentMode);var zR=Pa&&"TextEvent"in window&&!oo,TE=Pa&&(!Tl||oo&&8<oo&&11>=oo),mE=" ",RE=!1;function OE(e,t){switch(e){case"keyup":return WR.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function CE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var si=!1;function jR(e,t){switch(e){case"compositionend":return CE(t);case"keypress":return t.which!==32?null:(RE=!0,mE);case"textInput":return e=t.data,e===mE&&RE?null:e;default:return null}}function _R(e,t){if(si)return e==="compositionend"||!Tl&&OE(e,t)?(e=EE(),Rr=El=Qa=null,si=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return TE&&t.locale!=="ko"?null:t.data;default:return null}}var JR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pE(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!JR[e.type]:t==="textarea"}function gE(e,t,a,o){oi?ri?ri.push(o):ri=[o]:oi=o,t=Es(t,"onChange"),0<t.length&&(a=new pr("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var ro=null,so=null;function ZR(e){rf(e,0)}function Nr(e){var t=eo(e);if(iE(t))return e}function NE(e,t){if(e==="change")return t}var IE=!1;if(Pa){var ml;if(Pa){var Rl="oninput"in document;if(!Rl){var yE=document.createElement("div");yE.setAttribute("oninput","return;"),Rl=typeof yE.oninput=="function"}ml=Rl}else ml=!1;IE=ml&&(!document.documentMode||9<document.documentMode)}function LE(){ro&&(ro.detachEvent("onpropertychange",ME),so=ro=null)}function ME(e){if(e.propertyName==="value"&&Nr(so)){var t=[];gE(t,so,e,ul(e)),dE(ZR,t)}}function XR(e,t,a){e==="focusin"?(LE(),ro=t,so=a,ro.attachEvent("onpropertychange",ME)):e==="focusout"&&LE()}function qR(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nr(so)}function QR(e,t){if(e==="click")return Nr(t)}function $R(e,t){if(e==="input"||e==="change")return Nr(t)}function eO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:eO;function lo(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var s=a[o];if(!me.call(t,s)||!Jt(e[s],t[s]))return!1}return!0}function DE(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function PE(e,t){var a=DE(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=DE(a)}}function vE(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vE(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function BE(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Tr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Tr(e.document)}return t}function Ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var tO=Pa&&"documentMode"in document&&11>=document.documentMode,li=null,Cl=null,uo=null,pl=!1;function bE(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pl||li==null||li!==Tr(o)||(o=li,"selectionStart"in o&&Ol(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&lo(uo,o)||(uo=o,o=Es(Cl,"onSelect"),0<o.length&&(t=new pr("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=li)))}function vn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ui={animationend:vn("Animation","AnimationEnd"),animationiteration:vn("Animation","AnimationIteration"),animationstart:vn("Animation","AnimationStart"),transitionrun:vn("Transition","TransitionRun"),transitionstart:vn("Transition","TransitionStart"),transitioncancel:vn("Transition","TransitionCancel"),transitionend:vn("Transition","TransitionEnd")},gl={},HE={};Pa&&(HE=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function Bn(e){if(gl[e])return gl[e];if(!ui[e])return e;var t=ui[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in HE)return gl[e]=t[a];return e}var GE=Bn("animationend"),UE=Bn("animationiteration"),FE=Bn("animationstart"),aO=Bn("transitionrun"),nO=Bn("transitionstart"),iO=Bn("transitioncancel"),wE=Bn("transitionend"),kE=new Map,Nl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nl.push("scrollEnd");function fa(e,t){kE.set(e,t),Dn(t,[e])}var Ir=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oa=[],ci=0,Il=0;function yr(){for(var e=ci,t=Il=ci=0;t<e;){var a=oa[t];oa[t++]=null;var o=oa[t];oa[t++]=null;var s=oa[t];oa[t++]=null;var u=oa[t];if(oa[t++]=null,o!==null&&s!==null){var S=o.pending;S===null?s.next=s:(s.next=S.next,S.next=s),o.pending=s}u!==0&&xE(a,s,u)}}function Lr(e,t,a,o){oa[ci++]=e,oa[ci++]=t,oa[ci++]=a,oa[ci++]=o,Il|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yl(e,t,a,o){return Lr(e,t,a,o),Mr(e)}function bn(e,t){return Lr(e,null,null,t),Mr(e)}function xE(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var s=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&t!==null&&(s=31-Lt(a),e=u.hiddenUpdates,o=e[s],o===null?e[s]=[t]:o.push(t),t.lane=a|536870912),u):null}function Mr(e){if(50<Bo)throw Bo=0,Gu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function oO(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,a,o){return new oO(e,t,a,o)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,t){var a=e.alternate;return a===null?(a=Zt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function VE(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Dr(e,t,a,o,s,u){var S=0;if(o=e,typeof e=="function")Ll(e)&&(S=1);else if(typeof e=="string")S=cC(e,a,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Te:return e=Zt(31,a,t,s),e.elementType=Te,e.lanes=u,e;case F:return Hn(a.children,s,u,t);case M:S=8,s|=24;break;case I:return e=Zt(12,a,t,s|2),e.elementType=I,e.lanes=u,e;case ae:return e=Zt(13,a,t,s),e.elementType=ae,e.lanes=u,e;case Ee:return e=Zt(19,a,t,s),e.elementType=Ee,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:S=10;break e;case V:S=9;break e;case ie:S=11;break e;case te:S=14;break e;case re:S=16,o=null;break e}S=29,a=Error(l(130,e===null?"null":typeof e,"")),o=null}return t=Zt(S,a,t,s),t.elementType=e,t.type=o,t.lanes=u,t}function Hn(e,t,a,o){return e=Zt(7,e,o,t),e.lanes=a,e}function Ml(e,t,a){return e=Zt(6,e,null,t),e.lanes=a,e}function YE(e){var t=Zt(18,null,null,0);return t.stateNode=e,t}function Dl(e,t,a){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var KE=new WeakMap;function ra(e,t){if(typeof e=="object"&&e!==null){var a=KE.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ae(t)},KE.set(e,t),t)}return{value:e,source:t,stack:Ae(t)}}var Ei=[],Si=0,Pr=null,co=0,sa=[],la=0,$a=null,pa=1,ga="";function Ba(e,t){Ei[Si++]=co,Ei[Si++]=Pr,Pr=e,co=t}function WE(e,t,a){sa[la++]=pa,sa[la++]=ga,sa[la++]=$a,$a=e;var o=pa;e=ga;var s=32-Lt(o)-1;o&=~(1<<s),a+=1;var u=32-Lt(t)+s;if(30<u){var S=s-s%5;u=(o&(1<<S)-1).toString(32),o>>=S,s-=S,pa=1<<32-Lt(t)+s|a<<s|o,ga=u+e}else pa=1<<u|a<<s|o,ga=e}function Pl(e){e.return!==null&&(Ba(e,1),WE(e,1,0))}function vl(e){for(;e===Pr;)Pr=Ei[--Si],Ei[Si]=null,co=Ei[--Si],Ei[Si]=null;for(;e===$a;)$a=sa[--la],sa[la]=null,ga=sa[--la],sa[la]=null,pa=sa[--la],sa[la]=null}function zE(e,t){sa[la++]=pa,sa[la++]=ga,sa[la++]=$a,pa=t.id,ga=t.overflow,$a=e}var Bt=null,st=null,Je=!1,en=null,ua=!1,Bl=Error(l(519));function tn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(ra(t,e)),Bl}function jE(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[vt]=e,t[Vt]=o,a){case"dialog":Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":case"embed":Ve("load",t);break;case"video":case"audio":for(a=0;a<Ho.length;a++)Ve(Ho[a],t);break;case"source":Ve("error",t);break;case"img":case"image":case"link":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"input":Ve("invalid",t),oE(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ve("invalid",t);break;case"textarea":Ve("invalid",t),sE(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||cf(t.textContent,a)?(o.popover!=null&&(Ve("beforetoggle",t),Ve("toggle",t)),o.onScroll!=null&&Ve("scroll",t),o.onScrollEnd!=null&&Ve("scrollend",t),o.onClick!=null&&(t.onclick=Da),t=!0):t=!1,t||tn(e,!0)}function _E(e){for(Bt=e.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:ua=!1;return;case 27:case 3:ua=!0;return;default:Bt=Bt.return}}function Ai(e){if(e!==Bt)return!1;if(!Je)return _E(e),Je=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xu(e.type,e.memoizedProps)),a=!a),a&&st&&tn(e),_E(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));st=Rf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));st=Rf(e)}else t===27?(t=st,hn(e.type)?(e=tc,tc=null,st=e):st=t):st=Bt?da(e.stateNode.nextSibling):null;return!0}function Gn(){st=Bt=null,Je=!1}function bl(){var e=en;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),en=null),e}function Eo(e){en===null?en=[e]:en.push(e)}var Hl=p(null),Un=null,ba=null;function an(e,t,a){z(Hl,t._currentValue),t._currentValue=a}function Ha(e){e._currentValue=Hl.current,b(Hl)}function Gl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Ul(e,t,a,o){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var S=s.child;u=u.firstContext;e:for(;u!==null;){var R=u;u=s;for(var g=0;g<t.length;g++)if(R.context===t[g]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),Gl(u.return,a,e),o||(S=null);break e}u=R.next}}else if(s.tag===18){if(S=s.return,S===null)throw Error(l(341));S.lanes|=a,u=S.alternate,u!==null&&(u.lanes|=a),Gl(S,a,e),S=null}else S=s.child;if(S!==null)S.return=s;else for(S=s;S!==null;){if(S===e){S=null;break}if(s=S.sibling,s!==null){s.return=S.return,S=s;break}S=S.return}s=S}}function fi(e,t,a,o){e=null;for(var s=t,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var S=s.alternate;if(S===null)throw Error(l(387));if(S=S.memoizedProps,S!==null){var R=s.type;Jt(s.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(s===x.current){if(S=s.alternate,S===null)throw Error(l(387));S.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(ko):e=[ko])}s=s.return}e!==null&&Ul(t,e,a,o),t.flags|=262144}function vr(e){for(e=e.firstContext;e!==null;){if(!Jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fn(e){Un=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bt(e){return JE(Un,e)}function Br(e,t){return Un===null&&Fn(e),JE(e,t)}function JE(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ba===null){if(e===null)throw Error(l(308));ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ba=ba.next=t;return a}var rO=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},sO=n.unstable_scheduleCallback,lO=n.unstable_NormalPriority,Ot={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fl(){return{controller:new rO,data:new Map,refCount:0}}function So(e){e.refCount--,e.refCount===0&&sO(lO,function(){e.controller.abort()})}var Ao=null,wl=0,hi=0,Ti=null;function uO(e,t){if(Ao===null){var a=Ao=[];wl=0,hi=Vu(),Ti={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wl++,t.then(ZE,ZE),t}function ZE(){if(--wl===0&&Ao!==null){Ti!==null&&(Ti.status="fulfilled");var e=Ao;Ao=null,hi=0,Ti=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function cO(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(o.status="rejected",o.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),o}var XE=P.S;P.S=function(e,t){bA=Me(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&uO(e,t),XE!==null&&XE(e,t)};var wn=p(null);function kl(){var e=wn.current;return e!==null?e:ot.pooledCache}function br(e,t){t===null?z(wn,wn.current):z(wn,t.pool)}function qE(){var e=kl();return e===null?null:{parent:Ot._currentValue,pool:e}}var mi=Error(l(460)),xl=Error(l(474)),Hr=Error(l(542)),Gr={then:function(){}};function QE(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $E(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Da,Da),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tS(e),e;default:if(typeof t.status=="string")t.then(Da,Da);else{if(e=ot,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=o}},function(o){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tS(e),e}throw xn=t,mi}}function kn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xn=a,mi):a}}var xn=null;function eS(){if(xn===null)throw Error(l(459));var e=xn;return xn=null,e}function tS(e){if(e===mi||e===Hr)throw Error(l(483))}var Ri=null,fo=0;function Ur(e){var t=fo;return fo+=1,Ri===null&&(Ri=[]),$E(Ri,e,t)}function ho(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fr(e,t){throw t.$$typeof===O?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function aS(e){function t(D,y){if(e){var H=D.deletions;H===null?(D.deletions=[y],D.flags|=16):H.push(y)}}function a(D,y){if(!e)return null;for(;y!==null;)t(D,y),y=y.sibling;return null}function o(D){for(var y=new Map;D!==null;)D.key!==null?y.set(D.key,D):y.set(D.index,D),D=D.sibling;return y}function s(D,y){return D=va(D,y),D.index=0,D.sibling=null,D}function u(D,y,H){return D.index=H,e?(H=D.alternate,H!==null?(H=H.index,H<y?(D.flags|=67108866,y):H):(D.flags|=67108866,y)):(D.flags|=1048576,y)}function S(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function R(D,y,H,_){return y===null||y.tag!==6?(y=Ml(H,D.mode,_),y.return=D,y):(y=s(y,H),y.return=D,y)}function g(D,y,H,_){var Ce=H.type;return Ce===F?W(D,y,H.props.children,_,H.key):y!==null&&(y.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===re&&kn(Ce)===y.type)?(y=s(y,H.props),ho(y,H),y.return=D,y):(y=Dr(H.type,H.key,H.props,null,D.mode,_),ho(y,H),y.return=D,y)}function G(D,y,H,_){return y===null||y.tag!==4||y.stateNode.containerInfo!==H.containerInfo||y.stateNode.implementation!==H.implementation?(y=Dl(H,D.mode,_),y.return=D,y):(y=s(y,H.children||[]),y.return=D,y)}function W(D,y,H,_,Ce){return y===null||y.tag!==7?(y=Hn(H,D.mode,_,Ce),y.return=D,y):(y=s(y,H),y.return=D,y)}function Z(D,y,H){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Ml(""+y,D.mode,H),y.return=D,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case L:return H=Dr(y.type,y.key,y.props,null,D.mode,H),ho(H,y),H.return=D,H;case v:return y=Dl(y,D.mode,H),y.return=D,y;case re:return y=kn(y),Z(D,y,H)}if(we(y)||Ge(y))return y=Hn(y,D.mode,H,null),y.return=D,y;if(typeof y.then=="function")return Z(D,Ur(y),H);if(y.$$typeof===w)return Z(D,Br(D,y),H);Fr(D,y)}return null}function U(D,y,H,_){var Ce=y!==null?y.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return Ce!==null?null:R(D,y,""+H,_);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case L:return H.key===Ce?g(D,y,H,_):null;case v:return H.key===Ce?G(D,y,H,_):null;case re:return H=kn(H),U(D,y,H,_)}if(we(H)||Ge(H))return Ce!==null?null:W(D,y,H,_,null);if(typeof H.then=="function")return U(D,y,Ur(H),_);if(H.$$typeof===w)return U(D,y,Br(D,H),_);Fr(D,H)}return null}function Y(D,y,H,_,Ce){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return D=D.get(H)||null,R(y,D,""+_,Ce);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case L:return D=D.get(_.key===null?H:_.key)||null,g(y,D,_,Ce);case v:return D=D.get(_.key===null?H:_.key)||null,G(y,D,_,Ce);case re:return _=kn(_),Y(D,y,H,_,Ce)}if(we(_)||Ge(_))return D=D.get(H)||null,W(y,D,_,Ce,null);if(typeof _.then=="function")return Y(D,y,H,Ur(_),Ce);if(_.$$typeof===w)return Y(D,y,H,Br(y,_),Ce);Fr(y,_)}return null}function fe(D,y,H,_){for(var Ce=null,Xe=null,he=y,He=y=0,Ke=null;he!==null&&He<H.length;He++){he.index>He?(Ke=he,he=null):Ke=he.sibling;var qe=U(D,he,H[He],_);if(qe===null){he===null&&(he=Ke);break}e&&he&&qe.alternate===null&&t(D,he),y=u(qe,y,He),Xe===null?Ce=qe:Xe.sibling=qe,Xe=qe,he=Ke}if(He===H.length)return a(D,he),Je&&Ba(D,He),Ce;if(he===null){for(;He<H.length;He++)he=Z(D,H[He],_),he!==null&&(y=u(he,y,He),Xe===null?Ce=he:Xe.sibling=he,Xe=he);return Je&&Ba(D,He),Ce}for(he=o(he);He<H.length;He++)Ke=Y(he,D,He,H[He],_),Ke!==null&&(e&&Ke.alternate!==null&&he.delete(Ke.key===null?He:Ke.key),y=u(Ke,y,He),Xe===null?Ce=Ke:Xe.sibling=Ke,Xe=Ke);return e&&he.forEach(function(Cn){return t(D,Cn)}),Je&&Ba(D,He),Ce}function ge(D,y,H,_){if(H==null)throw Error(l(151));for(var Ce=null,Xe=null,he=y,He=y=0,Ke=null,qe=H.next();he!==null&&!qe.done;He++,qe=H.next()){he.index>He?(Ke=he,he=null):Ke=he.sibling;var Cn=U(D,he,qe.value,_);if(Cn===null){he===null&&(he=Ke);break}e&&he&&Cn.alternate===null&&t(D,he),y=u(Cn,y,He),Xe===null?Ce=Cn:Xe.sibling=Cn,Xe=Cn,he=Ke}if(qe.done)return a(D,he),Je&&Ba(D,He),Ce;if(he===null){for(;!qe.done;He++,qe=H.next())qe=Z(D,qe.value,_),qe!==null&&(y=u(qe,y,He),Xe===null?Ce=qe:Xe.sibling=qe,Xe=qe);return Je&&Ba(D,He),Ce}for(he=o(he);!qe.done;He++,qe=H.next())qe=Y(he,D,He,qe.value,_),qe!==null&&(e&&qe.alternate!==null&&he.delete(qe.key===null?He:qe.key),y=u(qe,y,He),Xe===null?Ce=qe:Xe.sibling=qe,Xe=qe);return e&&he.forEach(function(CC){return t(D,CC)}),Je&&Ba(D,He),Ce}function nt(D,y,H,_){if(typeof H=="object"&&H!==null&&H.type===F&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case L:e:{for(var Ce=H.key;y!==null;){if(y.key===Ce){if(Ce=H.type,Ce===F){if(y.tag===7){a(D,y.sibling),_=s(y,H.props.children),_.return=D,D=_;break e}}else if(y.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===re&&kn(Ce)===y.type){a(D,y.sibling),_=s(y,H.props),ho(_,H),_.return=D,D=_;break e}a(D,y);break}else t(D,y);y=y.sibling}H.type===F?(_=Hn(H.props.children,D.mode,_,H.key),_.return=D,D=_):(_=Dr(H.type,H.key,H.props,null,D.mode,_),ho(_,H),_.return=D,D=_)}return S(D);case v:e:{for(Ce=H.key;y!==null;){if(y.key===Ce)if(y.tag===4&&y.stateNode.containerInfo===H.containerInfo&&y.stateNode.implementation===H.implementation){a(D,y.sibling),_=s(y,H.children||[]),_.return=D,D=_;break e}else{a(D,y);break}else t(D,y);y=y.sibling}_=Dl(H,D.mode,_),_.return=D,D=_}return S(D);case re:return H=kn(H),nt(D,y,H,_)}if(we(H))return fe(D,y,H,_);if(Ge(H)){if(Ce=Ge(H),typeof Ce!="function")throw Error(l(150));return H=Ce.call(H),ge(D,y,H,_)}if(typeof H.then=="function")return nt(D,y,Ur(H),_);if(H.$$typeof===w)return nt(D,y,Br(D,H),_);Fr(D,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,y!==null&&y.tag===6?(a(D,y.sibling),_=s(y,H),_.return=D,D=_):(a(D,y),_=Ml(H,D.mode,_),_.return=D,D=_),S(D)):a(D,y)}return function(D,y,H,_){try{fo=0;var Ce=nt(D,y,H,_);return Ri=null,Ce}catch(he){if(he===mi||he===Hr)throw he;var Xe=Zt(29,he,null,D.mode);return Xe.lanes=_,Xe.return=D,Xe}finally{}}}var Vn=aS(!0),nS=aS(!1),nn=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function on(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function rn(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Qe&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,t=Mr(e),xE(e,null,a),t}return Lr(e,o,t,a),Mr(e)}function To(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Jd(e,a)}}function Kl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var s=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?s=u=S:u=u.next=S,a=a.next}while(a!==null);u===null?s=u=t:u=u.next=t}else s=u=t;a={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Wl=!1;function mo(){if(Wl){var e=Ti;if(e!==null)throw e}}function Ro(e,t,a,o){Wl=!1;var s=e.updateQueue;nn=!1;var u=s.firstBaseUpdate,S=s.lastBaseUpdate,R=s.shared.pending;if(R!==null){s.shared.pending=null;var g=R,G=g.next;g.next=null,S===null?u=G:S.next=G,S=g;var W=e.alternate;W!==null&&(W=W.updateQueue,R=W.lastBaseUpdate,R!==S&&(R===null?W.firstBaseUpdate=G:R.next=G,W.lastBaseUpdate=g))}if(u!==null){var Z=s.baseState;S=0,W=G=g=null,R=u;do{var U=R.lane&-536870913,Y=U!==R.lane;if(Y?(Ye&U)===U:(o&U)===U){U!==0&&U===hi&&(Wl=!0),W!==null&&(W=W.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var fe=e,ge=R;U=t;var nt=a;switch(ge.tag){case 1:if(fe=ge.payload,typeof fe=="function"){Z=fe.call(nt,Z,U);break e}Z=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ge.payload,U=typeof fe=="function"?fe.call(nt,Z,U):fe,U==null)break e;Z=T({},Z,U);break e;case 2:nn=!0}}U=R.callback,U!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=s.callbacks,Y===null?s.callbacks=[U]:Y.push(U))}else Y={lane:U,tag:R.tag,payload:R.payload,callback:R.callback,next:null},W===null?(G=W=Y,g=Z):W=W.next=Y,S|=U;if(R=R.next,R===null){if(R=s.shared.pending,R===null)break;Y=R,R=Y.next,Y.next=null,s.lastBaseUpdate=Y,s.shared.pending=null}}while(!0);W===null&&(g=Z),s.baseState=g,s.firstBaseUpdate=G,s.lastBaseUpdate=W,u===null&&(s.shared.lanes=0),dn|=S,e.lanes=S,e.memoizedState=Z}}function iS(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function oS(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)iS(a[e],t)}var Oi=p(null),wr=p(0);function rS(e,t){e=Ka,z(wr,e),z(Oi,t),Ka=e|t.baseLanes}function zl(){z(wr,Ka),z(Oi,Oi.current)}function jl(){Ka=wr.current,b(Oi),b(wr)}var Xt=p(null),ca=null;function sn(e){var t=e.alternate;z(ht,ht.current&1),z(Xt,e),ca===null&&(t===null||Oi.current!==null||t.memoizedState!==null)&&(ca=e)}function _l(e){z(ht,ht.current),z(Xt,e),ca===null&&(ca=e)}function sS(e){e.tag===22?(z(ht,ht.current),z(Xt,e),ca===null&&(ca=e)):ln()}function ln(){z(ht,ht.current),z(Xt,Xt.current)}function qt(e){b(Xt),ca===e&&(ca=null),b(ht)}var ht=p(0);function kr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$u(a)||ec(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ga=0,be=null,tt=null,Ct=null,xr=!1,Ci=!1,Yn=!1,Vr=0,Oo=0,pi=null,dO=0;function St(){throw Error(l(321))}function Jl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Jt(e[a],t[a]))return!1;return!0}function Zl(e,t,a,o,s,u){return Ga=u,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?WS:cu,Yn=!1,u=a(o,s),Yn=!1,Ci&&(u=uS(t,a,o,s)),lS(e),u}function lS(e){P.H=go;var t=tt!==null&&tt.next!==null;if(Ga=0,Ct=tt=be=null,xr=!1,Oo=0,pi=null,t)throw Error(l(300));e===null||pt||(e=e.dependencies,e!==null&&vr(e)&&(pt=!0))}function uS(e,t,a,o){be=e;var s=0;do{if(Ci&&(pi=null),Oo=0,Ci=!1,25<=s)throw Error(l(301));if(s+=1,Ct=tt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}P.H=zS,u=t(a,o)}while(Ci);return u}function EO(){var e=P.H,t=e.useState()[0];return t=typeof t.then=="function"?Co(t):t,e=e.useState()[0],(tt!==null?tt.memoizedState:null)!==e&&(be.flags|=1024),t}function Xl(){var e=Vr!==0;return Vr=0,e}function ql(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ql(e){if(xr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xr=!1}Ga=0,Ct=tt=be=null,Ci=!1,Oo=Vr=0,pi=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?be.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function Tt(){if(tt===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var t=Ct===null?be.memoizedState:Ct.next;if(t!==null)Ct=t,tt=e;else{if(e===null)throw be.alternate===null?Error(l(467)):Error(l(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},Ct===null?be.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function Yr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(e){var t=Oo;return Oo+=1,pi===null&&(pi=[]),e=$E(pi,e,t),t=be,(Ct===null?t.memoizedState:Ct.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?WS:cu),e}function Kr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Co(e);if(e.$$typeof===w)return bt(e)}throw Error(l(438,String(e)))}function $l(e){var t=null,a=be.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=be.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Yr(),be.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=De;return t.index++,a}function Ua(e,t){return typeof t=="function"?t(e):t}function Wr(e){var t=Tt();return eu(t,tt,e)}function eu(e,t,a){var o=e.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=a;var s=e.baseQueue,u=o.pending;if(u!==null){if(s!==null){var S=s.next;s.next=u.next,u.next=S}t.baseQueue=s=u,o.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{t=s.next;var R=S=null,g=null,G=t,W=!1;do{var Z=G.lane&-536870913;if(Z!==G.lane?(Ye&Z)===Z:(Ga&Z)===Z){var U=G.revertLane;if(U===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),Z===hi&&(W=!0);else if((Ga&U)===U){G=G.next,U===hi&&(W=!0);continue}else Z={lane:0,revertLane:G.revertLane,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},g===null?(R=g=Z,S=u):g=g.next=Z,be.lanes|=U,dn|=U;Z=G.action,Yn&&a(u,Z),u=G.hasEagerState?G.eagerState:a(u,Z)}else U={lane:Z,revertLane:G.revertLane,gesture:G.gesture,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},g===null?(R=g=U,S=u):g=g.next=U,be.lanes|=Z,dn|=Z;G=G.next}while(G!==null&&G!==t);if(g===null?S=u:g.next=R,!Jt(u,e.memoizedState)&&(pt=!0,W&&(a=Ti,a!==null)))throw a;e.memoizedState=u,e.baseState=S,e.baseQueue=g,o.lastRenderedState=u}return s===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function tu(e){var t=Tt(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var o=a.dispatch,s=a.pending,u=t.memoizedState;if(s!==null){a.pending=null;var S=s=s.next;do u=e(u,S.action),S=S.next;while(S!==s);Jt(u,t.memoizedState)||(pt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function cS(e,t,a){var o=be,s=Tt(),u=Je;if(u){if(a===void 0)throw Error(l(407));a=a()}else a=t();var S=!Jt((tt||s).memoizedState,a);if(S&&(s.memoizedState=a,pt=!0),s=s.queue,iu(SS.bind(null,o,s,e),[e]),s.getSnapshot!==t||S||Ct!==null&&Ct.memoizedState.tag&1){if(o.flags|=2048,gi(9,{destroy:void 0},ES.bind(null,o,s,a,t),null),ot===null)throw Error(l(349));u||(Ga&127)!==0||dS(o,t,a)}return a}function dS(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=be.updateQueue,t===null?(t=Yr(),be.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ES(e,t,a,o){t.value=a,t.getSnapshot=o,AS(t)&&fS(e)}function SS(e,t,a){return a(function(){AS(t)&&fS(e)})}function AS(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Jt(e,a)}catch{return!0}}function fS(e){var t=bn(e,2);t!==null&&_t(t,e,2)}function au(e){var t=xt();if(typeof e=="function"){var a=e;if(e=a(),Yn){ct(!0);try{a()}finally{ct(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},t}function hS(e,t,a,o){return e.baseState=a,eu(e,tt,typeof o=="function"?o:Ua)}function SO(e,t,a,o,s){if(_r(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){u.listeners.push(S)}};P.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,TS(t,u)):(u.next=a.next,t.pending=a.next=u)}}function TS(e,t){var a=t.action,o=t.payload,s=e.state;if(t.isTransition){var u=P.T,S={};P.T=S;try{var R=a(s,o),g=P.S;g!==null&&g(S,R),mS(e,t,R)}catch(G){nu(e,t,G)}finally{u!==null&&S.types!==null&&(u.types=S.types),P.T=u}}else try{u=a(s,o),mS(e,t,u)}catch(G){nu(e,t,G)}}function mS(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){RS(e,t,o)},function(o){return nu(e,t,o)}):RS(e,t,a)}function RS(e,t,a){t.status="fulfilled",t.value=a,OS(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,TS(e,a)))}function nu(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,OS(t),t=t.next;while(t!==o)}e.action=null}function OS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function CS(e,t){return t}function pS(e,t){if(Je){var a=ot.formState;if(a!==null){e:{var o=be;if(Je){if(st){t:{for(var s=st,u=ua;s.nodeType!==8;){if(!u){s=null;break t}if(s=da(s.nextSibling),s===null){s=null;break t}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){st=da(s.nextSibling),o=s.data==="F!";break e}}tn(o)}o=!1}o&&(t=a[0])}}return a=xt(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:CS,lastRenderedState:t},a.queue=o,a=VS.bind(null,be,o),o.dispatch=a,o=au(!1),u=uu.bind(null,be,!1,o.queue),o=xt(),s={state:t,dispatch:null,action:e,pending:null},o.queue=s,a=SO.bind(null,be,s,u,a),s.dispatch=a,o.memoizedState=e,[t,a,!1]}function gS(e){var t=Tt();return NS(t,tt,e)}function NS(e,t,a){if(t=eu(e,t,CS)[0],e=Wr(Ua)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Co(t)}catch(S){throw S===mi?Hr:S}else o=t;t=Tt();var s=t.queue,u=s.dispatch;return a!==t.memoizedState&&(be.flags|=2048,gi(9,{destroy:void 0},AO.bind(null,s,a),null)),[o,u,e]}function AO(e,t){e.action=t}function IS(e){var t=Tt(),a=tt;if(a!==null)return NS(t,a,e);Tt(),t=t.memoizedState,a=Tt();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function gi(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=be.updateQueue,t===null&&(t=Yr(),be.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function yS(){return Tt().memoizedState}function zr(e,t,a,o){var s=xt();be.flags|=e,s.memoizedState=gi(1|t,{destroy:void 0},a,o===void 0?null:o)}function jr(e,t,a,o){var s=Tt();o=o===void 0?null:o;var u=s.memoizedState.inst;tt!==null&&o!==null&&Jl(o,tt.memoizedState.deps)?s.memoizedState=gi(t,u,a,o):(be.flags|=e,s.memoizedState=gi(1|t,u,a,o))}function LS(e,t){zr(8390656,8,e,t)}function iu(e,t){jr(2048,8,e,t)}function fO(e){be.flags|=4;var t=be.updateQueue;if(t===null)t=Yr(),be.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function MS(e){var t=Tt().memoizedState;return fO({ref:t,nextImpl:e}),function(){if((Qe&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function DS(e,t){return jr(4,2,e,t)}function PS(e,t){return jr(4,4,e,t)}function vS(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function BS(e,t,a){a=a!=null?a.concat([e]):null,jr(4,4,vS.bind(null,t,e),a)}function ou(){}function bS(e,t){var a=Tt();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Jl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function HS(e,t){var a=Tt();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Jl(t,o[1]))return o[0];if(o=e(),Yn){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,t],o}function ru(e,t,a){return a===void 0||(Ga&1073741824)!==0&&(Ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=GA(),be.lanes|=e,dn|=e,a)}function GS(e,t,a,o){return Jt(a,t)?a:Oi.current!==null?(e=ru(e,a,o),Jt(e,t)||(pt=!0),e):(Ga&42)===0||(Ga&1073741824)!==0&&(Ye&261930)===0?(pt=!0,e.memoizedState=a):(e=GA(),be.lanes|=e,dn|=e,t)}function US(e,t,a,o,s){var u=q.p;q.p=u!==0&&8>u?u:8;var S=P.T,R={};P.T=R,uu(e,!1,t,a);try{var g=s(),G=P.S;if(G!==null&&G(R,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var W=cO(g,o);po(e,t,W,ea(e))}else po(e,t,o,ea(e))}catch(Z){po(e,t,{then:function(){},status:"rejected",reason:Z},ea())}finally{q.p=u,S!==null&&R.types!==null&&(S.types=R.types),P.T=S}}function hO(){}function su(e,t,a,o){if(e.tag!==5)throw Error(l(476));var s=FS(e).queue;US(e,s,t,ce,a===null?hO:function(){return wS(e),a(o)})}function FS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:ce},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wS(e){var t=FS(e);t.next===null&&(t=e.alternate.memoizedState),po(e,t.next.queue,{},ea())}function lu(){return bt(ko)}function kS(){return Tt().memoizedState}function xS(){return Tt().memoizedState}function TO(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ea();e=on(a);var o=rn(t,e,a);o!==null&&(_t(o,t,a),To(o,t,a)),t={cache:Fl()},e.payload=t;return}t=t.return}}function mO(e,t,a){var o=ea();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_r(e)?YS(t,a):(a=yl(e,t,a,o),a!==null&&(_t(a,e,o),KS(a,t,o)))}function VS(e,t,a){var o=ea();po(e,t,a,o)}function po(e,t,a,o){var s={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_r(e))YS(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var S=t.lastRenderedState,R=u(S,a);if(s.hasEagerState=!0,s.eagerState=R,Jt(R,S))return Lr(e,t,s,0),ot===null&&yr(),!1}catch{}finally{}if(a=yl(e,t,s,o),a!==null)return _t(a,e,o),KS(a,t,o),!0}return!1}function uu(e,t,a,o){if(o={lane:2,revertLane:Vu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},_r(e)){if(t)throw Error(l(479))}else t=yl(e,a,o,2),t!==null&&_t(t,e,2)}function _r(e){var t=e.alternate;return e===be||t!==null&&t===be}function YS(e,t){Ci=xr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function KS(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Jd(e,a)}}var go={readContext:bt,use:Kr,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St};go.useEffectEvent=St;var WS={readContext:bt,use:Kr,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:LS,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,zr(4194308,4,vS.bind(null,t,e),a)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){zr(4,2,e,t)},useMemo:function(e,t){var a=xt();t=t===void 0?null:t;var o=e();if(Yn){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=xt();if(a!==void 0){var s=a(t);if(Yn){ct(!0);try{a(t)}finally{ct(!1)}}}else s=t;return o.memoizedState=o.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},o.queue=e,e=e.dispatch=mO.bind(null,be,e),[o.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:function(e){e=au(e);var t=e.queue,a=VS.bind(null,be,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ou,useDeferredValue:function(e,t){var a=xt();return ru(a,e,t)},useTransition:function(){var e=au(!1);return e=US.bind(null,be,e.queue,!0,!1),xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=be,s=xt();if(Je){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),ot===null)throw Error(l(349));(Ye&127)!==0||dS(o,t,a)}s.memoizedState=a;var u={value:a,getSnapshot:t};return s.queue=u,LS(SS.bind(null,o,u,e),[e]),o.flags|=2048,gi(9,{destroy:void 0},ES.bind(null,o,u,a,t),null),a},useId:function(){var e=xt(),t=ot.identifierPrefix;if(Je){var a=ga,o=pa;a=(o&~(1<<32-Lt(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Vr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=dO++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:lu,useFormState:pS,useActionState:pS,useOptimistic:function(e){var t=xt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=uu.bind(null,be,!0,a),a.dispatch=t,[e,t]},useMemoCache:$l,useCacheRefresh:function(){return xt().memoizedState=TO.bind(null,be)},useEffectEvent:function(e){var t=xt(),a={impl:e};return t.memoizedState=a,function(){if((Qe&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},cu={readContext:bt,use:Kr,useCallback:bS,useContext:bt,useEffect:iu,useImperativeHandle:BS,useInsertionEffect:DS,useLayoutEffect:PS,useMemo:HS,useReducer:Wr,useRef:yS,useState:function(){return Wr(Ua)},useDebugValue:ou,useDeferredValue:function(e,t){var a=Tt();return GS(a,tt.memoizedState,e,t)},useTransition:function(){var e=Wr(Ua)[0],t=Tt().memoizedState;return[typeof e=="boolean"?e:Co(e),t]},useSyncExternalStore:cS,useId:kS,useHostTransitionStatus:lu,useFormState:gS,useActionState:gS,useOptimistic:function(e,t){var a=Tt();return hS(a,tt,e,t)},useMemoCache:$l,useCacheRefresh:xS};cu.useEffectEvent=MS;var zS={readContext:bt,use:Kr,useCallback:bS,useContext:bt,useEffect:iu,useImperativeHandle:BS,useInsertionEffect:DS,useLayoutEffect:PS,useMemo:HS,useReducer:tu,useRef:yS,useState:function(){return tu(Ua)},useDebugValue:ou,useDeferredValue:function(e,t){var a=Tt();return tt===null?ru(a,e,t):GS(a,tt.memoizedState,e,t)},useTransition:function(){var e=tu(Ua)[0],t=Tt().memoizedState;return[typeof e=="boolean"?e:Co(e),t]},useSyncExternalStore:cS,useId:kS,useHostTransitionStatus:lu,useFormState:IS,useActionState:IS,useOptimistic:function(e,t){var a=Tt();return tt!==null?hS(a,tt,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$l,useCacheRefresh:xS};zS.useEffectEvent=MS;function du(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Eu={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=ea(),s=on(o);s.payload=t,a!=null&&(s.callback=a),t=rn(e,s,o),t!==null&&(_t(t,e,o),To(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=ea(),s=on(o);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=rn(e,s,o),t!==null&&(_t(t,e,o),To(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ea(),o=on(a);o.tag=2,t!=null&&(o.callback=t),t=rn(e,o,a),t!==null&&(_t(t,e,a),To(t,e,a))}};function jS(e,t,a,o,s,u,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,S):t.prototype&&t.prototype.isPureReactComponent?!lo(a,o)||!lo(s,u):!0}function _S(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Eu.enqueueReplaceState(t,t.state,null)}function Kn(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function JS(e){Ir(e)}function ZS(e){console.error(e)}function XS(e){Ir(e)}function Jr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function qS(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Su(e,t,a){return a=on(a),a.tag=3,a.payload={element:null},a.callback=function(){Jr(e,t)},a}function QS(e){return e=on(e),e.tag=3,e}function $S(e,t,a,o){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var u=o.value;e.payload=function(){return s(u)},e.callback=function(){qS(t,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){qS(t,a,o),typeof s!="function"&&(En===null?En=new Set([this]):En.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function RO(e,t,a,o,s){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&fi(t,a,s,!0),a=Xt.current,a!==null){switch(a.tag){case 31:case 13:return ca===null?rs():a.alternate===null&&At===0&&(At=3),a.flags&=-257,a.flags|=65536,a.lanes=s,o===Gr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),wu(e,o,s)),!1;case 22:return a.flags|=65536,o===Gr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),wu(e,o,s)),!1}throw Error(l(435,a.tag))}return wu(e,o,s),rs(),!1}if(Je)return t=Xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,o!==Bl&&(e=Error(l(422),{cause:o}),Eo(ra(e,a)))):(o!==Bl&&(t=Error(l(423),{cause:o}),Eo(ra(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,o=ra(o,a),s=Su(e.stateNode,o,s),Kl(e,s),At!==4&&(At=2)),!1;var u=Error(l(520),{cause:o});if(u=ra(u,a),vo===null?vo=[u]:vo.push(u),At!==4&&(At=2),t===null)return!0;o=ra(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=Su(a.stateNode,o,e),Kl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(En===null||!En.has(u))))return a.flags|=65536,s&=-s,a.lanes|=s,s=QS(s),$S(s,e,a,o),Kl(a,s),!1}a=a.return}while(a!==null);return!1}var Au=Error(l(461)),pt=!1;function Ht(e,t,a,o){t.child=e===null?nS(t,null,a,o):Vn(t,e.child,a,o)}function eA(e,t,a,o,s){a=a.render;var u=t.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Fn(t),o=Zl(e,t,a,S,u,s),R=Xl(),e!==null&&!pt?(ql(e,t,s),Fa(e,t,s)):(Je&&R&&Pl(t),t.flags|=1,Ht(e,t,o,s),t.child)}function tA(e,t,a,o,s){if(e===null){var u=a.type;return typeof u=="function"&&!Ll(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,aA(e,t,u,o,s)):(e=Dr(a.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!pu(e,s)){var S=u.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(S,o)&&e.ref===t.ref)return Fa(e,t,s)}return t.flags|=1,e=va(u,o),e.ref=t.ref,e.return=t,t.child=e}function aA(e,t,a,o,s){if(e!==null){var u=e.memoizedProps;if(lo(u,o)&&e.ref===t.ref)if(pt=!1,t.pendingProps=o=u,pu(e,s))(e.flags&131072)!==0&&(pt=!0);else return t.lanes=e.lanes,Fa(e,t,s)}return fu(e,t,a,o,s)}function nA(e,t,a,o){var s=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,s=0;o!==null;)s=s|o.lanes|o.childLanes,o=o.sibling;o=s&~u}else o=0,t.child=null;return iA(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&br(t,u!==null?u.cachePool:null),u!==null?rS(t,u):zl(),sS(t);else return o=t.lanes=536870912,iA(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(br(t,u.cachePool),rS(t,u),ln(),t.memoizedState=null):(e!==null&&br(t,null),zl(),ln());return Ht(e,t,s,a),t.child}function No(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function iA(e,t,a,o,s){var u=kl();return u=u===null?null:{parent:Ot._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&br(t,null),zl(),sS(t),e!==null&&fi(e,t,o,!0),t.childLanes=s,null}function Zr(e,t){return t=qr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oA(e,t,a){return Vn(t,e.child,null,a),e=Zr(t,t.pendingProps),e.flags|=2,qt(t),t.memoizedState=null,e}function OO(e,t,a){var o=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Je){if(o.mode==="hidden")return e=Zr(t,o),t.lanes=536870912,No(null,e);if(_l(t),(e=st)?(e=mf(e,ua),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$a!==null?{id:pa,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},a=YE(e),a.return=t,t.child=a,Bt=t,st=null)):e=null,e===null)throw tn(t);return t.lanes=536870912,null}return Zr(t,o)}var u=e.memoizedState;if(u!==null){var S=u.dehydrated;if(_l(t),s)if(t.flags&256)t.flags&=-257,t=oA(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(pt||fi(e,t,a,!1),s=(a&e.childLanes)!==0,pt||s){if(o=ot,o!==null&&(S=Zd(o,a),S!==0&&S!==u.retryLane))throw u.retryLane=S,bn(e,S),_t(o,e,S),Au;rs(),t=oA(e,t,a)}else e=u.treeContext,st=da(S.nextSibling),Bt=t,Je=!0,en=null,ua=!1,e!==null&&zE(t,e),t=Zr(t,o),t.flags|=4096;return t}return e=va(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function fu(e,t,a,o,s){return Fn(t),a=Zl(e,t,a,o,void 0,s),o=Xl(),e!==null&&!pt?(ql(e,t,s),Fa(e,t,s)):(Je&&o&&Pl(t),t.flags|=1,Ht(e,t,a,s),t.child)}function rA(e,t,a,o,s,u){return Fn(t),t.updateQueue=null,a=uS(t,o,a,s),lS(e),o=Xl(),e!==null&&!pt?(ql(e,t,u),Fa(e,t,u)):(Je&&o&&Pl(t),t.flags|=1,Ht(e,t,a,u),t.child)}function sA(e,t,a,o,s){if(Fn(t),t.stateNode===null){var u=di,S=a.contextType;typeof S=="object"&&S!==null&&(u=bt(S)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Eu,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Vl(t),S=a.contextType,u.context=typeof S=="object"&&S!==null?bt(S):di,u.state=t.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(du(t,a,S,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(S=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),S!==u.state&&Eu.enqueueReplaceState(u,u.state,null),Ro(t,o,u,s),mo(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var R=t.memoizedProps,g=Kn(a,R);u.props=g;var G=u.context,W=a.contextType;S=di,typeof W=="object"&&W!==null&&(S=bt(W));var Z=a.getDerivedStateFromProps;W=typeof Z=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=t.pendingProps!==R,W||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||G!==S)&&_S(t,u,o,S),nn=!1;var U=t.memoizedState;u.state=U,Ro(t,o,u,s),mo(),G=t.memoizedState,R||U!==G||nn?(typeof Z=="function"&&(du(t,a,Z,o),G=t.memoizedState),(g=nn||jS(t,a,g,o,U,G,S))?(W||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=G),u.props=o,u.state=G,u.context=S,o=g):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Yl(e,t),S=t.memoizedProps,W=Kn(a,S),u.props=W,Z=t.pendingProps,U=u.context,G=a.contextType,g=di,typeof G=="object"&&G!==null&&(g=bt(G)),R=a.getDerivedStateFromProps,(G=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(S!==Z||U!==g)&&_S(t,u,o,g),nn=!1,U=t.memoizedState,u.state=U,Ro(t,o,u,s),mo();var Y=t.memoizedState;S!==Z||U!==Y||nn||e!==null&&e.dependencies!==null&&vr(e.dependencies)?(typeof R=="function"&&(du(t,a,R,o),Y=t.memoizedState),(W=nn||jS(t,a,W,o,U,Y,g)||e!==null&&e.dependencies!==null&&vr(e.dependencies))?(G||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,Y,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,Y,g)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||S===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=Y),u.props=o,u.state=Y,u.context=g,o=W):(typeof u.componentDidUpdate!="function"||S===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,Xr(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=Vn(t,e.child,null,s),t.child=Vn(t,null,a,s)):Ht(e,t,a,s),t.memoizedState=u.state,e=t.child):e=Fa(e,t,s),e}function lA(e,t,a,o){return Gn(),t.flags|=256,Ht(e,t,a,o),t.child}var hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tu(e){return{baseLanes:e,cachePool:qE()}}function mu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=$t),e}function uA(e,t,a){var o=t.pendingProps,s=!1,u=(t.flags&128)!==0,S;if((S=u)||(S=e!==null&&e.memoizedState===null?!1:(ht.current&2)!==0),S&&(s=!0,t.flags&=-129),S=(t.flags&32)!==0,t.flags&=-33,e===null){if(Je){if(s?sn(t):ln(),(e=st)?(e=mf(e,ua),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$a!==null?{id:pa,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},a=YE(e),a.return=t,t.child=a,Bt=t,st=null)):e=null,e===null)throw tn(t);return ec(e)?t.lanes=32:t.lanes=536870912,null}var R=o.children;return o=o.fallback,s?(ln(),s=t.mode,R=qr({mode:"hidden",children:R},s),o=Hn(o,s,a,null),R.return=t,o.return=t,R.sibling=o,t.child=R,o=t.child,o.memoizedState=Tu(a),o.childLanes=mu(e,S,a),t.memoizedState=hu,No(null,o)):(sn(t),Ru(t,R))}var g=e.memoizedState;if(g!==null&&(R=g.dehydrated,R!==null)){if(u)t.flags&256?(sn(t),t.flags&=-257,t=Ou(e,t,a)):t.memoizedState!==null?(ln(),t.child=e.child,t.flags|=128,t=null):(ln(),R=o.fallback,s=t.mode,o=qr({mode:"visible",children:o.children},s),R=Hn(R,s,a,null),R.flags|=2,o.return=t,R.return=t,o.sibling=R,t.child=o,Vn(t,e.child,null,a),o=t.child,o.memoizedState=Tu(a),o.childLanes=mu(e,S,a),t.memoizedState=hu,t=No(null,o));else if(sn(t),ec(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var G=S.dgst;S=G,o=Error(l(419)),o.stack="",o.digest=S,Eo({value:o,source:null,stack:null}),t=Ou(e,t,a)}else if(pt||fi(e,t,a,!1),S=(a&e.childLanes)!==0,pt||S){if(S=ot,S!==null&&(o=Zd(S,a),o!==0&&o!==g.retryLane))throw g.retryLane=o,bn(e,o),_t(S,e,o),Au;$u(R)||rs(),t=Ou(e,t,a)}else $u(R)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,st=da(R.nextSibling),Bt=t,Je=!0,en=null,ua=!1,e!==null&&zE(t,e),t=Ru(t,o.children),t.flags|=4096);return t}return s?(ln(),R=o.fallback,s=t.mode,g=e.child,G=g.sibling,o=va(g,{mode:"hidden",children:o.children}),o.subtreeFlags=g.subtreeFlags&65011712,G!==null?R=va(G,R):(R=Hn(R,s,a,null),R.flags|=2),R.return=t,o.return=t,o.sibling=R,t.child=o,No(null,o),o=t.child,R=e.child.memoizedState,R===null?R=Tu(a):(s=R.cachePool,s!==null?(g=Ot._currentValue,s=s.parent!==g?{parent:g,pool:g}:s):s=qE(),R={baseLanes:R.baseLanes|a,cachePool:s}),o.memoizedState=R,o.childLanes=mu(e,S,a),t.memoizedState=hu,No(e.child,o)):(sn(t),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(S=t.deletions,S===null?(t.deletions=[e],t.flags|=16):S.push(e)),t.child=a,t.memoizedState=null,a)}function Ru(e,t){return t=qr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function qr(e,t){return e=Zt(22,e,null,t),e.lanes=0,e}function Ou(e,t,a){return Vn(t,e.child,null,a),e=Ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cA(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Gl(e.return,t,a)}function Cu(e,t,a,o,s,u){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:s,treeForkCount:u}:(S.isBackwards=t,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=s,S.treeForkCount=u)}function dA(e,t,a){var o=t.pendingProps,s=o.revealOrder,u=o.tail;o=o.children;var S=ht.current,R=(S&2)!==0;if(R?(S=S&1|2,t.flags|=128):S&=1,z(ht,S),Ht(e,t,o,a),o=Je?co:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cA(e,a,t);else if(e.tag===19)cA(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&kr(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),Cu(t,!1,s,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&kr(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}Cu(t,!0,a,null,u,o);break;case"together":Cu(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Fa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(fi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=va(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function pu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&vr(e)))}function CO(e,t,a){switch(t.tag){case 3:K(t,t.stateNode.containerInfo),an(t,Ot,e.memoizedState.cache),Gn();break;case 27:case 5:ee(t);break;case 4:K(t,t.stateNode.containerInfo);break;case 10:an(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_l(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(sn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?uA(e,t,a):(sn(t),e=Fa(e,t,a),e!==null?e.sibling:null);sn(t);break;case 19:var s=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(fi(e,t,a,!1),o=(a&t.childLanes)!==0),s){if(o)return dA(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),z(ht,ht.current),o)break;return null;case 22:return t.lanes=0,nA(e,t,a,t.pendingProps);case 24:an(t,Ot,e.memoizedState.cache)}return Fa(e,t,a)}function EA(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)pt=!0;else{if(!pu(e,a)&&(t.flags&128)===0)return pt=!1,CO(e,t,a);pt=(e.flags&131072)!==0}else pt=!1,Je&&(t.flags&1048576)!==0&&WE(t,co,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=kn(t.elementType),t.type=e,typeof e=="function")Ll(e)?(o=Kn(e,o),t.tag=1,t=sA(null,t,e,o,a)):(t.tag=0,t=fu(null,t,e,o,a));else{if(e!=null){var s=e.$$typeof;if(s===ie){t.tag=11,t=eA(null,t,e,o,a);break e}else if(s===te){t.tag=14,t=tA(null,t,e,o,a);break e}}throw t=We(e)||e,Error(l(306,t,""))}}return t;case 0:return fu(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,s=Kn(o,t.pendingProps),sA(e,t,o,s,a);case 3:e:{if(K(t,t.stateNode.containerInfo),e===null)throw Error(l(387));o=t.pendingProps;var u=t.memoizedState;s=u.element,Yl(e,t),Ro(t,o,null,a);var S=t.memoizedState;if(o=S.cache,an(t,Ot,o),o!==u.cache&&Ul(t,[Ot],a,!0),mo(),o=S.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:S.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=lA(e,t,o,a);break e}else if(o!==s){s=ra(Error(l(424)),t),Eo(s),t=lA(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(st=da(e.firstChild),Bt=t,Je=!0,en=null,ua=!0,a=nS(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Gn(),o===s){t=Fa(e,t,a);break e}Ht(e,t,o,a)}t=t.child}return t;case 26:return Xr(e,t),e===null?(a=Nf(t.type,null,t.pendingProps,null))?t.memoizedState=a:Je||(a=t.type,e=t.pendingProps,o=Ss(k.current).createElement(a),o[vt]=t,o[Vt]=e,Gt(o,a,e),Dt(o),t.stateNode=o):t.memoizedState=Nf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ee(t),e===null&&Je&&(o=t.stateNode=Cf(t.type,t.pendingProps,k.current),Bt=t,ua=!0,s=st,hn(t.type)?(tc=s,st=da(o.firstChild)):st=s),Ht(e,t,t.pendingProps.children,a),Xr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Je&&((s=o=st)&&(o=qO(o,t.type,t.pendingProps,ua),o!==null?(t.stateNode=o,Bt=t,st=da(o.firstChild),ua=!1,s=!0):s=!1),s||tn(t)),ee(t),s=t.type,u=t.pendingProps,S=e!==null?e.memoizedProps:null,o=u.children,Xu(s,u)?o=null:S!==null&&Xu(s,S)&&(t.flags|=32),t.memoizedState!==null&&(s=Zl(e,t,EO,null,null,a),ko._currentValue=s),Xr(e,t),Ht(e,t,o,a),t.child;case 6:return e===null&&Je&&((e=a=st)&&(a=QO(a,t.pendingProps,ua),a!==null?(t.stateNode=a,Bt=t,st=null,e=!0):e=!1),e||tn(t)),null;case 13:return uA(e,t,a);case 4:return K(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Vn(t,null,o,a):Ht(e,t,o,a),t.child;case 11:return eA(e,t,t.type,t.pendingProps,a);case 7:return Ht(e,t,t.pendingProps,a),t.child;case 8:return Ht(e,t,t.pendingProps.children,a),t.child;case 12:return Ht(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,an(t,t.type,o.value),Ht(e,t,o.children,a),t.child;case 9:return s=t.type._context,o=t.pendingProps.children,Fn(t),s=bt(s),o=o(s),t.flags|=1,Ht(e,t,o,a),t.child;case 14:return tA(e,t,t.type,t.pendingProps,a);case 15:return aA(e,t,t.type,t.pendingProps,a);case 19:return dA(e,t,a);case 31:return OO(e,t,a);case 22:return nA(e,t,a,t.pendingProps);case 24:return Fn(t),o=bt(Ot),e===null?(s=kl(),s===null&&(s=ot,u=Fl(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=a),s=u),t.memoizedState={parent:o,cache:s},Vl(t),an(t,Ot,s)):((e.lanes&a)!==0&&(Yl(e,t),Ro(t,null,null,a),mo()),s=e.memoizedState,u=t.memoizedState,s.parent!==o?(s={parent:o,cache:o},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),an(t,Ot,o)):(o=u.cache,an(t,Ot,o),o!==s.cache&&Ul(t,[Ot],a,!0))),Ht(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function wa(e){e.flags|=4}function gu(e,t,a,o,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(kA())e.flags|=8192;else throw xn=Gr,xl}else e.flags&=-16777217}function SA(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Df(t))if(kA())e.flags|=8192;else throw xn=Gr,xl}function Qr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?jd():536870912,e.lanes|=t,Li|=t)}function Io(e,t){if(!Je)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,o|=s.subtreeFlags&65011712,o|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function pO(e,t,a){var o=t.pendingProps;switch(vl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return lt(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Ha(Ot),J(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ai(t)?wa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bl())),lt(t),null;case 26:var s=t.type,u=t.memoizedState;return e===null?(wa(t),u!==null?(lt(t),SA(t,u)):(lt(t),gu(t,s,null,o,a))):u?u!==e.memoizedState?(wa(t),lt(t),SA(t,u)):(lt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&wa(t),lt(t),gu(t,s,e,o,a)),null;case 27:if($(t),a=k.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&wa(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return lt(t),null}e=j.current,Ai(t)?jE(t):(e=Cf(s,o,a),t.stateNode=e,wa(t))}return lt(t),null;case 5:if($(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&wa(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return lt(t),null}if(u=j.current,Ai(t))jE(t);else{var S=Ss(k.current);switch(u){case 1:u=S.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=S.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=S.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=S.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=S.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?S.createElement(s,{is:o.is}):S.createElement(s)}}u[vt]=t,u[Vt]=o;e:for(S=t.child;S!==null;){if(S.tag===5||S.tag===6)u.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===t)break e;for(;S.sibling===null;){if(S.return===null||S.return===t)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}t.stateNode=u;e:switch(Gt(u,s,o),s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&wa(t)}}return lt(t),gu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&wa(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(e=k.current,Ai(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,s=Bt,s!==null)switch(s.tag){case 27:case 5:o=s.memoizedProps}e[vt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||cf(e.nodeValue,a)),e||tn(t,!0)}else e=Ss(e).createTextNode(o),e[vt]=t,t.stateNode=e}return lt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Ai(t),a!==null){if(e===null){if(!o)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[vt]=t}else Gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),e=!1}else a=bl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(qt(t),t):(qt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return lt(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ai(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[vt]=t}else Gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),s=!1}else s=bl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(qt(t),t):(qt(t),null)}return qt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,s=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(s=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==s&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Qr(t,t.updateQueue),lt(t),null);case 4:return J(),e===null&&zu(t.stateNode.containerInfo),lt(t),null;case 10:return Ha(t.type),lt(t),null;case 19:if(b(ht),o=t.memoizedState,o===null)return lt(t),null;if(s=(t.flags&128)!==0,u=o.rendering,u===null)if(s)Io(o,!1);else{if(At!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=kr(e),u!==null){for(t.flags|=128,Io(o,!1),e=u.updateQueue,t.updateQueue=e,Qr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)VE(a,e),a=a.sibling;return z(ht,ht.current&1|2),Je&&Ba(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Me()>ns&&(t.flags|=128,s=!0,Io(o,!1),t.lanes=4194304)}else{if(!s)if(e=kr(u),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Qr(t,e),Io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Je)return lt(t),null}else 2*Me()-o.renderingStartTime>ns&&a!==536870912&&(t.flags|=128,s=!0,Io(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Me(),e.sibling=null,a=ht.current,z(ht,s?a&1|2:a&1),Je&&Ba(t,o.treeForkCount),e):(lt(t),null);case 22:case 23:return qt(t),jl(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),a=t.updateQueue,a!==null&&Qr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&b(wn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ha(Ot),lt(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function gO(e,t){switch(vl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ha(Ot),J(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $(t),null;case 31:if(t.memoizedState!==null){if(qt(t),t.alternate===null)throw Error(l(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(ht),null;case 4:return J(),null;case 10:return Ha(t.type),null;case 22:case 23:return qt(t),jl(),e!==null&&b(wn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ha(Ot),null;case 25:return null;default:return null}}function AA(e,t){switch(vl(t),t.tag){case 3:Ha(Ot),J();break;case 26:case 27:case 5:$(t);break;case 4:J();break;case 31:t.memoizedState!==null&&qt(t);break;case 13:qt(t);break;case 19:b(ht);break;case 10:Ha(t.type);break;case 22:case 23:qt(t),jl(),e!==null&&b(wn);break;case 24:Ha(Ot)}}function yo(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){o=void 0;var u=a.create,S=a.inst;o=u(),S.destroy=o}a=a.next}while(a!==s)}}catch(R){et(t,t.return,R)}}function un(e,t,a){try{var o=t.updateQueue,s=o!==null?o.lastEffect:null;if(s!==null){var u=s.next;o=u;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,s=t;var g=a,G=R;try{G()}catch(W){et(s,g,W)}}}o=o.next}while(o!==u)}}catch(W){et(t,t.return,W)}}function fA(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{oS(t,a)}catch(o){et(e,e.return,o)}}}function hA(e,t,a){a.props=Kn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){et(e,t,o)}}function Lo(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(s){et(e,t,s)}}function Na(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(s){et(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){et(e,t,s)}else a.current=null}function TA(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(s){et(e,e.return,s)}}function Nu(e,t,a){try{var o=e.stateNode;zO(o,e.type,a,t),o[Vt]=t}catch(s){et(e,e.return,s)}}function mA(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hn(e.type)||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Da));else if(o!==4&&(o===27&&hn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(yu(e,t,a),e=e.sibling;e!==null;)yu(e,t,a),e=e.sibling}function $r(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&hn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($r(e,t,a),e=e.sibling;e!==null;)$r(e,t,a),e=e.sibling}function RA(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Gt(t,o,a),t[vt]=e,t[Vt]=a}catch(u){et(e,e.return,u)}}var ka=!1,gt=!1,Lu=!1,OA=typeof WeakSet=="function"?WeakSet:Set,Pt=null;function NO(e,t){if(e=e.containerInfo,Ju=Os,e=BE(e),Ol(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var s=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var S=0,R=-1,g=-1,G=0,W=0,Z=e,U=null;t:for(;;){for(var Y;Z!==a||s!==0&&Z.nodeType!==3||(R=S+s),Z!==u||o!==0&&Z.nodeType!==3||(g=S+o),Z.nodeType===3&&(S+=Z.nodeValue.length),(Y=Z.firstChild)!==null;)U=Z,Z=Y;for(;;){if(Z===e)break t;if(U===a&&++G===s&&(R=S),U===u&&++W===o&&(g=S),(Y=Z.nextSibling)!==null)break;Z=U,U=Z.parentNode}Z=Y}a=R===-1||g===-1?null:{start:R,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zu={focusedElem:e,selectionRange:a},Os=!1,Pt=t;Pt!==null;)if(t=Pt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Pt=e;else for(;Pt!==null;){switch(t=Pt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,s=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var fe=Kn(a.type,s);e=o.getSnapshotBeforeUpdate(fe,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(ge){et(a,a.return,ge)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Qu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Pt=e;break}Pt=t.return}}function CA(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Va(e,a),o&4&&yo(5,a);break;case 1:if(Va(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(S){et(a,a.return,S)}else{var s=Kn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(S){et(a,a.return,S)}}o&64&&fA(a),o&512&&Lo(a,a.return);break;case 3:if(Va(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{oS(e,t)}catch(S){et(a,a.return,S)}}break;case 27:t===null&&o&4&&RA(a);case 26:case 5:Va(e,a),t===null&&o&4&&TA(a),o&512&&Lo(a,a.return);break;case 12:Va(e,a);break;case 31:Va(e,a),o&4&&NA(e,a);break;case 13:Va(e,a),o&4&&IA(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bO.bind(null,a),$O(e,a))));break;case 22:if(o=a.memoizedState!==null||ka,!o){t=t!==null&&t.memoizedState!==null||gt,s=ka;var u=gt;ka=o,(gt=t)&&!u?Ya(e,a,(a.subtreeFlags&8772)!==0):Va(e,a),ka=s,gt=u}break;case 30:break;default:Va(e,a)}}function pA(e){var t=e.alternate;t!==null&&(e.alternate=null,pA(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&nl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var dt=null,Kt=!1;function xa(e,t,a){for(a=a.child;a!==null;)gA(e,t,a),a=a.sibling}function gA(e,t,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(_e,a)}catch{}switch(a.tag){case 26:gt||Na(a,t),xa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||Na(a,t);var o=dt,s=Kt;hn(a.type)&&(dt=a.stateNode,Kt=!1),xa(e,t,a),Uo(a.stateNode),dt=o,Kt=s;break;case 5:gt||Na(a,t);case 6:if(o=dt,s=Kt,dt=null,xa(e,t,a),dt=o,Kt=s,dt!==null)if(Kt)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(a.stateNode)}catch(u){et(a,t,u)}else try{dt.removeChild(a.stateNode)}catch(u){et(a,t,u)}break;case 18:dt!==null&&(Kt?(e=dt,hf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Gi(e)):hf(dt,a.stateNode));break;case 4:o=dt,s=Kt,dt=a.stateNode.containerInfo,Kt=!0,xa(e,t,a),dt=o,Kt=s;break;case 0:case 11:case 14:case 15:un(2,a,t),gt||un(4,a,t),xa(e,t,a);break;case 1:gt||(Na(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&hA(a,t,o)),xa(e,t,a);break;case 21:xa(e,t,a);break;case 22:gt=(o=gt)||a.memoizedState!==null,xa(e,t,a),gt=o;break;default:xa(e,t,a)}}function NA(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gi(e)}catch(a){et(t,t.return,a)}}}function IA(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gi(e)}catch(a){et(t,t.return,a)}}function IO(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new OA),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new OA),t;default:throw Error(l(435,e.tag))}}function es(e,t){var a=IO(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var s=HO.bind(null,e,o);o.then(s,s)}})}function Wt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var s=a[o],u=e,S=t,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(hn(R.type)){dt=R.stateNode,Kt=!1;break e}break;case 5:dt=R.stateNode,Kt=!1;break e;case 3:case 4:dt=R.stateNode.containerInfo,Kt=!0;break e}R=R.return}if(dt===null)throw Error(l(160));gA(u,S,s),dt=null,Kt=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yA(t,e),t=t.sibling}var ha=null;function yA(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wt(t,e),zt(e),o&4&&(un(3,e,e.return),yo(3,e),un(5,e,e.return));break;case 1:Wt(t,e),zt(e),o&512&&(gt||a===null||Na(a,a.return)),o&64&&ka&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var s=ha;if(Wt(t,e),zt(e),o&512&&(gt||a===null||Na(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(o){case"title":u=s.getElementsByTagName("title")[0],(!u||u[$i]||u[vt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(o),s.head.insertBefore(u,s.querySelector("head > title"))),Gt(u,o,a),u[vt]=e,Dt(u),o=u;break e;case"link":var S=Lf("link","href",s).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(u=S[R],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break t}}u=s.createElement(o),Gt(u,o,a),s.head.appendChild(u);break;case"meta":if(S=Lf("meta","content",s).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(u=S[R],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break t}}u=s.createElement(o),Gt(u,o,a),s.head.appendChild(u);break;default:throw Error(l(468,o))}u[vt]=e,Dt(u),o=u}e.stateNode=o}else Mf(s,e.type,e.stateNode);else e.stateNode=yf(s,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?Mf(s,e.type,e.stateNode):yf(s,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wt(t,e),zt(e),o&512&&(gt||a===null||Na(a,a.return)),a!==null&&o&4&&Nu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wt(t,e),zt(e),o&512&&(gt||a===null||Na(a,a.return)),e.flags&32){s=e.stateNode;try{ii(s,"")}catch(fe){et(e,e.return,fe)}}o&4&&e.stateNode!=null&&(s=e.memoizedProps,Nu(e,s,a!==null?a.memoizedProps:s)),o&1024&&(Lu=!0);break;case 6:if(Wt(t,e),zt(e),o&4){if(e.stateNode===null)throw Error(l(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(fe){et(e,e.return,fe)}}break;case 3:if(hs=null,s=ha,ha=As(t.containerInfo),Wt(t,e),ha=s,zt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Gi(t.containerInfo)}catch(fe){et(e,e.return,fe)}Lu&&(Lu=!1,LA(e));break;case 4:o=ha,ha=As(e.stateNode.containerInfo),Wt(t,e),zt(e),ha=o;break;case 12:Wt(t,e),zt(e);break;case 31:Wt(t,e),zt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,es(e,o)));break;case 13:Wt(t,e),zt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(as=Me()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,es(e,o)));break;case 22:s=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,G=ka,W=gt;if(ka=G||s,gt=W||g,Wt(t,e),gt=W,ka=G,zt(e),o&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||g||ka||gt||Wn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(u=g.stateNode,s)S=u.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=g.stateNode;var Z=g.memoizedProps.style,U=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;R.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(fe){et(g,g.return,fe)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=s?"":g.memoizedProps}catch(fe){et(g,g.return,fe)}}}else if(t.tag===18){if(a===null){g=t;try{var Y=g.stateNode;s?Tf(Y,!0):Tf(g.stateNode,!1)}catch(fe){et(g,g.return,fe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,es(e,a))));break;case 19:Wt(t,e),zt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,es(e,o)));break;case 30:break;case 21:break;default:Wt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(mA(o)){a=o;break}o=o.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var s=a.stateNode,u=Iu(e);$r(e,u,s);break;case 5:var S=a.stateNode;a.flags&32&&(ii(S,""),a.flags&=-33);var R=Iu(e);$r(e,R,S);break;case 3:case 4:var g=a.stateNode.containerInfo,G=Iu(e);yu(e,G,g);break;default:throw Error(l(161))}}catch(W){et(e,e.return,W)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function LA(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;LA(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Va(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)CA(e,t.alternate,t),t=t.sibling}function Wn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:un(4,t,t.return),Wn(t);break;case 1:Na(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&hA(t,t.return,a),Wn(t);break;case 27:Uo(t.stateNode);case 26:case 5:Na(t,t.return),Wn(t);break;case 22:t.memoizedState===null&&Wn(t);break;case 30:Wn(t);break;default:Wn(t)}e=e.sibling}}function Ya(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,s=e,u=t,S=u.flags;switch(u.tag){case 0:case 11:case 15:Ya(s,u,a),yo(4,u);break;case 1:if(Ya(s,u,a),o=u,s=o.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(G){et(o,o.return,G)}if(o=u,s=o.updateQueue,s!==null){var R=o.stateNode;try{var g=s.shared.hiddenCallbacks;if(g!==null)for(s.shared.hiddenCallbacks=null,s=0;s<g.length;s++)iS(g[s],R)}catch(G){et(o,o.return,G)}}a&&S&64&&fA(u),Lo(u,u.return);break;case 27:RA(u);case 26:case 5:Ya(s,u,a),a&&o===null&&S&4&&TA(u),Lo(u,u.return);break;case 12:Ya(s,u,a);break;case 31:Ya(s,u,a),a&&S&4&&NA(s,u);break;case 13:Ya(s,u,a),a&&S&4&&IA(s,u);break;case 22:u.memoizedState===null&&Ya(s,u,a),Lo(u,u.return);break;case 30:break;default:Ya(s,u,a)}t=t.sibling}}function Mu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&So(a))}function Du(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&So(e))}function Ta(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)MA(e,t,a,o),t=t.sibling}function MA(e,t,a,o){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ta(e,t,a,o),s&2048&&yo(9,t);break;case 1:Ta(e,t,a,o);break;case 3:Ta(e,t,a,o),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&So(e)));break;case 12:if(s&2048){Ta(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,S=u.id,R=u.onPostCommit;typeof R=="function"&&R(S,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){et(t,t.return,g)}}else Ta(e,t,a,o);break;case 31:Ta(e,t,a,o);break;case 13:Ta(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,S=t.alternate,t.memoizedState!==null?u._visibility&2?Ta(e,t,a,o):Mo(e,t):u._visibility&2?Ta(e,t,a,o):(u._visibility|=2,Ni(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Mu(S,t);break;case 24:Ta(e,t,a,o),s&2048&&Du(t.alternate,t);break;default:Ta(e,t,a,o)}}function Ni(e,t,a,o,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,S=t,R=a,g=o,G=S.flags;switch(S.tag){case 0:case 11:case 15:Ni(u,S,R,g,s),yo(8,S);break;case 23:break;case 22:var W=S.stateNode;S.memoizedState!==null?W._visibility&2?Ni(u,S,R,g,s):Mo(u,S):(W._visibility|=2,Ni(u,S,R,g,s)),s&&G&2048&&Mu(S.alternate,S);break;case 24:Ni(u,S,R,g,s),s&&G&2048&&Du(S.alternate,S);break;default:Ni(u,S,R,g,s)}t=t.sibling}}function Mo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,s=o.flags;switch(o.tag){case 22:Mo(a,o),s&2048&&Mu(o.alternate,o);break;case 24:Mo(a,o),s&2048&&Du(o.alternate,o);break;default:Mo(a,o)}t=t.sibling}}var Do=8192;function Ii(e,t,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)DA(e,t,a),e=e.sibling}function DA(e,t,a){switch(e.tag){case 26:Ii(e,t,a),e.flags&Do&&e.memoizedState!==null&&dC(a,ha,e.memoizedState,e.memoizedProps);break;case 5:Ii(e,t,a);break;case 3:case 4:var o=ha;ha=As(e.stateNode.containerInfo),Ii(e,t,a),ha=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,Ii(e,t,a),Do=o):Ii(e,t,a));break;default:Ii(e,t,a)}}function PA(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Po(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Pt=o,BA(o,e)}PA(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vA(e),e=e.sibling}function vA(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&un(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ts(e)):Po(e);break;default:Po(e)}}function ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Pt=o,BA(o,e)}PA(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:un(8,t,t.return),ts(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ts(t));break;default:ts(t)}e=e.sibling}}function BA(e,t){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:un(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Pt=o;else e:for(a=e;Pt!==null;){o=Pt;var s=o.sibling,u=o.return;if(pA(o),o===a){Pt=null;break e}if(s!==null){s.return=u,Pt=s;break e}Pt=u}}}var yO={getCacheForType:function(e){var t=bt(Ot),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return bt(Ot).controller.signal}},LO=typeof WeakMap=="function"?WeakMap:Map,Qe=0,ot=null,xe=null,Ye=0,$e=0,Qt=null,cn=!1,yi=!1,Pu=!1,Ka=0,At=0,dn=0,zn=0,vu=0,$t=0,Li=0,vo=null,jt=null,Bu=!1,as=0,bA=0,ns=1/0,is=null,En=null,Mt=0,Sn=null,Mi=null,Wa=0,bu=0,Hu=null,HA=null,Bo=0,Gu=null;function ea(){return(Qe&2)!==0&&Ye!==0?Ye&-Ye:P.T!==null?Vu():Xd()}function GA(){if($t===0)if((Ye&536870912)===0||Je){var e=Er;Er<<=1,(Er&3932160)===0&&(Er=262144),$t=e}else $t=536870912;return e=Xt.current,e!==null&&(e.flags|=32),$t}function _t(e,t,a){(e===ot&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(Di(e,0),An(e,Ye,$t,!1)),Qi(e,a),((Qe&2)===0||e!==ot)&&(e===ot&&((Qe&2)===0&&(zn|=a),At===4&&An(e,Ye,$t,!1)),Ia(e))}function UA(e,t,a){if((Qe&6)!==0)throw Error(l(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||qi(e,t),s=o?PO(e,t):Fu(e,t,!0),u=o;do{if(s===0){yi&&!o&&An(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!MO(a)){s=Fu(e,t,!1),u=!1;continue}if(s===2){if(u=t,e.errorRecoveryDisabledLanes&u)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){t=S;e:{var R=e;s=vo;var g=R.current.memoizedState.isDehydrated;if(g&&(Di(R,S).flags|=256),S=Fu(R,S,!1),S!==2){if(Pu&&!g){R.errorRecoveryDisabledLanes|=u,zn|=u,s=4;break e}u=jt,jt=s,u!==null&&(jt===null?jt=u:jt.push.apply(jt,u))}s=S}if(u=!1,s!==2)continue}}if(s===1){Di(e,0),An(e,t,0,!0);break}e:{switch(o=e,u=s,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:An(o,t,$t,!cn);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=as+300-Me(),10<s)){if(An(o,t,$t,!cn),Ar(o,0,!0)!==0)break e;Wa=t,o.timeoutHandle=Af(FA.bind(null,o,a,jt,is,Bu,t,$t,zn,Li,cn,u,"Throttled",-0,0),s);break e}FA(o,a,jt,is,Bu,t,$t,zn,Li,cn,u,null,-0,0)}}break}while(!0);Ia(e)}function FA(e,t,a,o,s,u,S,R,g,G,W,Z,U,Y){if(e.timeoutHandle=-1,Z=t.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Da},DA(t,u,Z);var fe=(u&62914560)===u?as-Me():(u&4194048)===u?bA-Me():0;if(fe=EC(Z,fe),fe!==null){Wa=u,e.cancelPendingCommit=fe(zA.bind(null,e,t,u,a,o,s,S,R,g,W,Z,null,U,Y)),An(e,u,S,!G);return}}zA(e,t,u,a,o,s,S,R,g)}function MO(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var s=a[o],u=s.getSnapshot;s=s.value;try{if(!Jt(u(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t,a,o){t&=~vu,t&=~zn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var s=t;0<s;){var u=31-Lt(s),S=1<<u;o[u]=-1,s&=~S}a!==0&&_d(e,a,t)}function os(){return(Qe&6)===0?(bo(0),!1):!0}function Uu(){if(xe!==null){if($e===0)var e=xe.return;else e=xe,ba=Un=null,Ql(e),Ri=null,fo=0,e=xe;for(;e!==null;)AA(e.alternate,e),e=e.return;xe=null}}function Di(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,JO(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wa=0,Uu(),ot=e,xe=a=va(e.current,null),Ye=t,$e=0,Qt=null,cn=!1,yi=qi(e,t),Pu=!1,Li=$t=vu=zn=dn=At=0,jt=vo=null,Bu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var s=31-Lt(o),u=1<<s;t|=e[s],o&=~u}return Ka=t,yr(),a}function wA(e,t){be=null,P.H=go,t===mi||t===Hr?(t=eS(),$e=3):t===xl?(t=eS(),$e=4):$e=t===Au?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qt=t,xe===null&&(At=1,Jr(e,ra(t,e.current)))}function kA(){var e=Xt.current;return e===null?!0:(Ye&4194048)===Ye?ca===null:(Ye&62914560)===Ye||(Ye&536870912)!==0?e===ca:!1}function xA(){var e=P.H;return P.H=go,e===null?go:e}function VA(){var e=P.A;return P.A=yO,e}function rs(){At=4,cn||(Ye&4194048)!==Ye&&Xt.current!==null||(yi=!0),(dn&134217727)===0&&(zn&134217727)===0||ot===null||An(ot,Ye,$t,!1)}function Fu(e,t,a){var o=Qe;Qe|=2;var s=xA(),u=VA();(ot!==e||Ye!==t)&&(is=null,Di(e,t)),t=!1;var S=At;e:do try{if($e!==0&&xe!==null){var R=xe,g=Qt;switch($e){case 8:Uu(),S=6;break e;case 3:case 2:case 9:case 6:Xt.current===null&&(t=!0);var G=$e;if($e=0,Qt=null,Pi(e,R,g,G),a&&yi){S=0;break e}break;default:G=$e,$e=0,Qt=null,Pi(e,R,g,G)}}DO(),S=At;break}catch(W){wA(e,W)}while(!0);return t&&e.shellSuspendCounter++,ba=Un=null,Qe=o,P.H=s,P.A=u,xe===null&&(ot=null,Ye=0,yr()),S}function DO(){for(;xe!==null;)YA(xe)}function PO(e,t){var a=Qe;Qe|=2;var o=xA(),s=VA();ot!==e||Ye!==t?(is=null,ns=Me()+500,Di(e,t)):yi=qi(e,t);e:do try{if($e!==0&&xe!==null){t=xe;var u=Qt;t:switch($e){case 1:$e=0,Qt=null,Pi(e,t,u,1);break;case 2:case 9:if(QE(u)){$e=0,Qt=null,KA(t);break}t=function(){$e!==2&&$e!==9||ot!==e||($e=7),Ia(e)},u.then(t,t);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:QE(u)?($e=0,Qt=null,KA(t)):($e=0,Qt=null,Pi(e,t,u,7));break;case 5:var S=null;switch(xe.tag){case 26:S=xe.memoizedState;case 5:case 27:var R=xe;if(S?Df(S):R.stateNode.complete){$e=0,Qt=null;var g=R.sibling;if(g!==null)xe=g;else{var G=R.return;G!==null?(xe=G,ss(G)):xe=null}break t}}$e=0,Qt=null,Pi(e,t,u,5);break;case 6:$e=0,Qt=null,Pi(e,t,u,6);break;case 8:Uu(),At=6;break e;default:throw Error(l(462))}}vO();break}catch(W){wA(e,W)}while(!0);return ba=Un=null,P.H=o,P.A=s,Qe=a,xe!==null?0:(ot=null,Ye=0,yr(),At)}function vO(){for(;xe!==null&&!Le();)YA(xe)}function YA(e){var t=EA(e.alternate,e,Ka);e.memoizedProps=e.pendingProps,t===null?ss(e):xe=t}function KA(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=rA(a,t,t.pendingProps,t.type,void 0,Ye);break;case 11:t=rA(a,t,t.pendingProps,t.type.render,t.ref,Ye);break;case 5:Ql(t);default:AA(a,t),t=xe=VE(t,Ka),t=EA(a,t,Ka)}e.memoizedProps=e.pendingProps,t===null?ss(e):xe=t}function Pi(e,t,a,o){ba=Un=null,Ql(t),Ri=null,fo=0;var s=t.return;try{if(RO(e,s,t,a,Ye)){At=1,Jr(e,ra(a,e.current)),xe=null;return}}catch(u){if(s!==null)throw xe=s,u;At=1,Jr(e,ra(a,e.current)),xe=null;return}t.flags&32768?(Je||o===1?e=!0:yi||(Ye&536870912)!==0?e=!1:(cn=e=!0,(o===2||o===9||o===3||o===6)&&(o=Xt.current,o!==null&&o.tag===13&&(o.flags|=16384))),WA(t,e)):ss(t)}function ss(e){var t=e;do{if((t.flags&32768)!==0){WA(t,cn);return}e=t.return;var a=pO(t.alternate,t,Ka);if(a!==null){xe=a;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);At===0&&(At=5)}function WA(e,t){do{var a=gO(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);At=6,xe=null}function zA(e,t,a,o,s,u,S,R,g){e.cancelPendingCommit=null;do ls();while(Mt!==0);if((Qe&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=Il,cR(e,a,u,S,R,g),e===ot&&(xe=ot=null,Ye=0),Mi=t,Sn=e,Wa=a,bu=u,Hu=s,HA=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,GO(je,function(){return XA(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,s=q.p,q.p=2,S=Qe,Qe|=4;try{NO(e,t,a)}finally{Qe=S,q.p=s,P.T=o}}Mt=1,jA(),_A(),JA()}}function jA(){if(Mt===1){Mt=0;var e=Sn,t=Mi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var s=Qe;Qe|=4;try{yA(t,e);var u=Zu,S=BE(e.containerInfo),R=u.focusedElem,g=u.selectionRange;if(S!==R&&R&&R.ownerDocument&&vE(R.ownerDocument.documentElement,R)){if(g!==null&&Ol(R)){var G=g.start,W=g.end;if(W===void 0&&(W=G),"selectionStart"in R)R.selectionStart=G,R.selectionEnd=Math.min(W,R.value.length);else{var Z=R.ownerDocument||document,U=Z&&Z.defaultView||window;if(U.getSelection){var Y=U.getSelection(),fe=R.textContent.length,ge=Math.min(g.start,fe),nt=g.end===void 0?ge:Math.min(g.end,fe);!Y.extend&&ge>nt&&(S=nt,nt=ge,ge=S);var D=PE(R,ge),y=PE(R,nt);if(D&&y&&(Y.rangeCount!==1||Y.anchorNode!==D.node||Y.anchorOffset!==D.offset||Y.focusNode!==y.node||Y.focusOffset!==y.offset)){var H=Z.createRange();H.setStart(D.node,D.offset),Y.removeAllRanges(),ge>nt?(Y.addRange(H),Y.extend(y.node,y.offset)):(H.setEnd(y.node,y.offset),Y.addRange(H))}}}}for(Z=[],Y=R;Y=Y.parentNode;)Y.nodeType===1&&Z.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Z.length;R++){var _=Z[R];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Os=!!Ju,Zu=Ju=null}finally{Qe=s,q.p=o,P.T=a}}e.current=t,Mt=2}}function _A(){if(Mt===2){Mt=0;var e=Sn,t=Mi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var s=Qe;Qe|=4;try{CA(e,t.alternate,t)}finally{Qe=s,q.p=o,P.T=a}}Mt=3}}function JA(){if(Mt===4||Mt===3){Mt=0,Ze();var e=Sn,t=Mi,a=Wa,o=HA;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Mt=5:(Mt=0,Mi=Sn=null,ZA(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(En=null),tl(a),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(_e,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=P.T,s=q.p,q.p=2,P.T=null;try{for(var u=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];u(R.value,{componentStack:R.stack})}}finally{P.T=t,q.p=s}}(Wa&3)!==0&&ls(),Ia(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===Gu?Bo++:(Bo=0,Gu=e):Bo=0,bo(0)}}function ZA(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,So(t)))}function ls(){return jA(),_A(),JA(),XA()}function XA(){if(Mt!==5)return!1;var e=Sn,t=bu;bu=0;var a=tl(Wa),o=P.T,s=q.p;try{q.p=32>a?32:a,P.T=null,a=Hu,Hu=null;var u=Sn,S=Wa;if(Mt=0,Mi=Sn=null,Wa=0,(Qe&6)!==0)throw Error(l(331));var R=Qe;if(Qe|=4,vA(u.current),MA(u,u.current,S,a),Qe=R,bo(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(_e,u)}catch{}return!0}finally{q.p=s,P.T=o,ZA(e,t)}}function qA(e,t,a){t=ra(a,t),t=Su(e.stateNode,t,2),e=rn(e,t,2),e!==null&&(Qi(e,2),Ia(e))}function et(e,t,a){if(e.tag===3)qA(e,e,a);else for(;t!==null;){if(t.tag===3){qA(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(En===null||!En.has(o))){e=ra(a,e),a=QS(2),o=rn(t,a,2),o!==null&&($S(a,o,t,e),Qi(o,2),Ia(o));break}}t=t.return}}function wu(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new LO;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(a)||(Pu=!0,s.add(a),e=BO.bind(null,e,t,a),t.then(e,e))}function BO(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ot===e&&(Ye&a)===a&&(At===4||At===3&&(Ye&62914560)===Ye&&300>Me()-as?(Qe&2)===0&&Di(e,0):vu|=a,Li===Ye&&(Li=0)),Ia(e)}function QA(e,t){t===0&&(t=jd()),e=bn(e,t),e!==null&&(Qi(e,t),Ia(e))}function bO(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),QA(e,a)}function HO(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(t),QA(e,a)}function GO(e,t){return Ne(e,t)}var us=null,vi=null,ku=!1,cs=!1,xu=!1,fn=0;function Ia(e){e!==vi&&e.next===null&&(vi===null?us=vi=e:vi=vi.next=e),cs=!0,ku||(ku=!0,FO())}function bo(e,t){if(!xu&&cs){xu=!0;do for(var a=!1,o=us;o!==null;){if(e!==0){var s=o.pendingLanes;if(s===0)var u=0;else{var S=o.suspendedLanes,R=o.pingedLanes;u=(1<<31-Lt(42|e)+1)-1,u&=s&~(S&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,af(o,u))}else u=Ye,u=Ar(o,o===ot?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||qi(o,u)||(a=!0,af(o,u));o=o.next}while(a);xu=!1}}function UO(){$A()}function $A(){cs=ku=!1;var e=0;fn!==0&&_O()&&(e=fn);for(var t=Me(),a=null,o=us;o!==null;){var s=o.next,u=ef(o,t);u===0?(o.next=null,a===null?us=s:a.next=s,s===null&&(vi=a)):(a=o,(e!==0||(u&3)!==0)&&(cs=!0)),o=s}Mt!==0&&Mt!==5||bo(e),fn!==0&&(fn=0)}function ef(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var S=31-Lt(u),R=1<<S,g=s[S];g===-1?((R&a)===0||(R&o)!==0)&&(s[S]=uR(R,t)):g<=t&&(e.expiredLanes|=R),u&=~R}if(t=ot,a=Ye,a=Ar(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&($e===2||$e===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&pe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||qi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&pe(o),tl(a)){case 2:case 8:a=Rt;break;case 32:a=je;break;case 268435456:a=de;break;default:a=je}return o=tf.bind(null,e),a=Ne(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&pe(o),e.callbackPriority=2,e.callbackNode=null,2}function tf(e,t){if(Mt!==0&&Mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ls()&&e.callbackNode!==a)return null;var o=Ye;return o=Ar(e,e===ot?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(UA(e,o,t),ef(e,Me()),e.callbackNode!=null&&e.callbackNode===a?tf.bind(null,e):null)}function af(e,t){if(ls())return null;UA(e,t,!0)}function FO(){ZO(function(){(Qe&6)!==0?Ne(ze,UO):$A()})}function Vu(){if(fn===0){var e=hi;e===0&&(e=dr,dr<<=1,(dr&261888)===0&&(dr=256)),fn=e}return fn}function nf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mr(""+e)}function of(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function wO(e,t,a,o,s){if(t==="submit"&&a&&a.stateNode===s){var u=nf((s[Vt]||null).action),S=o.submitter;S&&(t=(t=S[Vt]||null)?nf(t.formAction):S.getAttribute("formAction"),t!==null&&(u=t,S=null));var R=new pr("action","action",null,o,s);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fn!==0){var g=S?of(s,S):new FormData(s);su(a,{pending:!0,data:g,method:s.method,action:u},null,g)}}else typeof u=="function"&&(R.preventDefault(),g=S?of(s,S):new FormData(s),su(a,{pending:!0,data:g,method:s.method,action:u},u,g))},currentTarget:s}]})}}for(var Yu=0;Yu<Nl.length;Yu++){var Ku=Nl[Yu],kO=Ku.toLowerCase(),xO=Ku[0].toUpperCase()+Ku.slice(1);fa(kO,"on"+xO)}fa(GE,"onAnimationEnd"),fa(UE,"onAnimationIteration"),fa(FE,"onAnimationStart"),fa("dblclick","onDoubleClick"),fa("focusin","onFocus"),fa("focusout","onBlur"),fa(aO,"onTransitionRun"),fa(nO,"onTransitionStart"),fa(iO,"onTransitionCancel"),fa(wE,"onTransitionEnd"),ai("onMouseEnter",["mouseout","mouseover"]),ai("onMouseLeave",["mouseout","mouseover"]),ai("onPointerEnter",["pointerout","pointerover"]),ai("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function rf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],s=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var S=o.length-1;0<=S;S--){var R=o[S],g=R.instance,G=R.currentTarget;if(R=R.listener,g!==u&&s.isPropagationStopped())break e;u=R,s.currentTarget=G;try{u(s)}catch(W){Ir(W)}s.currentTarget=null,u=g}else for(S=0;S<o.length;S++){if(R=o[S],g=R.instance,G=R.currentTarget,R=R.listener,g!==u&&s.isPropagationStopped())break e;u=R,s.currentTarget=G;try{u(s)}catch(W){Ir(W)}s.currentTarget=null,u=g}}}}function Ve(e,t){var a=t[al];a===void 0&&(a=t[al]=new Set);var o=e+"__bubble";a.has(o)||(sf(t,e,2,!1),a.add(o))}function Wu(e,t,a){var o=0;t&&(o|=4),sf(a,e,o,t)}var ds="_reactListening"+Math.random().toString(36).slice(2);function zu(e){if(!e[ds]){e[ds]=!0,$d.forEach(function(a){a!=="selectionchange"&&(VO.has(a)||Wu(a,!1,e),Wu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ds]||(t[ds]=!0,Wu("selectionchange",!1,t))}}function sf(e,t,a,o){switch(Uf(t)){case 2:var s=fC;break;case 8:s=hC;break;default:s=rc}a=s.bind(null,t,a,e),s=void 0,!dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function ju(e,t,a,o,s){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===s)break;if(S===4)for(S=o.return;S!==null;){var g=S.tag;if((g===3||g===4)&&S.stateNode.containerInfo===s)return;S=S.return}for(;R!==null;){if(S=$n(R),S===null)return;if(g=S.tag,g===5||g===6||g===26||g===27){o=u=S;continue e}R=R.parentNode}}o=o.return}dE(function(){var G=u,W=ul(a),Z=[];e:{var U=kE.get(e);if(U!==void 0){var Y=pr,fe=e;switch(e){case"keypress":if(Or(a)===0)break e;case"keydown":case"keyup":Y=HR;break;case"focusin":fe="focus",Y=fl;break;case"focusout":fe="blur",Y=fl;break;case"beforeblur":case"afterblur":Y=fl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=AE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=pR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=FR;break;case GE:case UE:case FE:Y=IR;break;case wE:Y=kR;break;case"scroll":case"scrollend":Y=OR;break;case"wheel":Y=VR;break;case"copy":case"cut":case"paste":Y=LR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=hE;break;case"toggle":case"beforetoggle":Y=KR}var ge=(t&4)!==0,nt=!ge&&(e==="scroll"||e==="scrollend"),D=ge?U!==null?U+"Capture":null:U;ge=[];for(var y=G,H;y!==null;){var _=y;if(H=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||H===null||D===null||(_=to(y,D),_!=null&&ge.push(Go(y,_,H))),nt)break;y=y.return}0<ge.length&&(U=new Y(U,fe,null,a,W),Z.push({event:U,listeners:ge}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",U&&a!==ll&&(fe=a.relatedTarget||a.fromElement)&&($n(fe)||fe[Qn]))break e;if((Y||U)&&(U=W.window===W?W:(U=W.ownerDocument)?U.defaultView||U.parentWindow:window,Y?(fe=a.relatedTarget||a.toElement,Y=G,fe=fe?$n(fe):null,fe!==null&&(nt=E(fe),ge=fe.tag,fe!==nt||ge!==5&&ge!==27&&ge!==6)&&(fe=null)):(Y=null,fe=G),Y!==fe)){if(ge=AE,_="onMouseLeave",D="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(ge=hE,_="onPointerLeave",D="onPointerEnter",y="pointer"),nt=Y==null?U:eo(Y),H=fe==null?U:eo(fe),U=new ge(_,y+"leave",Y,a,W),U.target=nt,U.relatedTarget=H,_=null,$n(W)===G&&(ge=new ge(D,y+"enter",fe,a,W),ge.target=H,ge.relatedTarget=nt,_=ge),nt=_,Y&&fe)t:{for(ge=YO,D=Y,y=fe,H=0,_=D;_;_=ge(_))H++;_=0;for(var Ce=y;Ce;Ce=ge(Ce))_++;for(;0<H-_;)D=ge(D),H--;for(;0<_-H;)y=ge(y),_--;for(;H--;){if(D===y||y!==null&&D===y.alternate){ge=D;break t}D=ge(D),y=ge(y)}ge=null}else ge=null;Y!==null&&lf(Z,U,Y,ge,!1),fe!==null&&nt!==null&&lf(Z,nt,fe,ge,!0)}}e:{if(U=G?eo(G):window,Y=U.nodeName&&U.nodeName.toLowerCase(),Y==="select"||Y==="input"&&U.type==="file")var Xe=NE;else if(pE(U))if(IE)Xe=$R;else{Xe=qR;var he=XR}else Y=U.nodeName,!Y||Y.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?G&&sl(G.elementType)&&(Xe=NE):Xe=QR;if(Xe&&(Xe=Xe(e,G))){gE(Z,Xe,a,W);break e}he&&he(e,U,G),e==="focusout"&&G&&U.type==="number"&&G.memoizedProps.value!=null&&rl(U,"number",U.value)}switch(he=G?eo(G):window,e){case"focusin":(pE(he)||he.contentEditable==="true")&&(li=he,Cl=G,uo=null);break;case"focusout":uo=Cl=li=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,bE(Z,a,W);break;case"selectionchange":if(tO)break;case"keydown":case"keyup":bE(Z,a,W)}var He;if(Tl)e:{switch(e){case"compositionstart":var Ke="onCompositionStart";break e;case"compositionend":Ke="onCompositionEnd";break e;case"compositionupdate":Ke="onCompositionUpdate";break e}Ke=void 0}else si?OE(e,a)&&(Ke="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ke="onCompositionStart");Ke&&(TE&&a.locale!=="ko"&&(si||Ke!=="onCompositionStart"?Ke==="onCompositionEnd"&&si&&(He=EE()):(Qa=W,El="value"in Qa?Qa.value:Qa.textContent,si=!0)),he=Es(G,Ke),0<he.length&&(Ke=new fE(Ke,e,null,a,W),Z.push({event:Ke,listeners:he}),He?Ke.data=He:(He=CE(a),He!==null&&(Ke.data=He)))),(He=zR?jR(e,a):_R(e,a))&&(Ke=Es(G,"onBeforeInput"),0<Ke.length&&(he=new fE("onBeforeInput","beforeinput",null,a,W),Z.push({event:he,listeners:Ke}),he.data=He)),wO(Z,e,G,a,W)}rf(Z,t)})}function Go(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Es(e,t){for(var a=t+"Capture",o=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=to(e,a),s!=null&&o.unshift(Go(e,s,u)),s=to(e,t),s!=null&&o.push(Go(e,s,u))),e.tag===3)return o;e=e.return}return[]}function YO(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lf(e,t,a,o,s){for(var u=t._reactName,S=[];a!==null&&a!==o;){var R=a,g=R.alternate,G=R.stateNode;if(R=R.tag,g!==null&&g===o)break;R!==5&&R!==26&&R!==27||G===null||(g=G,s?(G=to(a,u),G!=null&&S.unshift(Go(a,G,g))):s||(G=to(a,u),G!=null&&S.push(Go(a,G,g)))),a=a.return}S.length!==0&&e.push({event:t,listeners:S})}var KO=/\r\n?/g,WO=/\u0000|\uFFFD/g;function uf(e){return(typeof e=="string"?e:""+e).replace(KO,`
`).replace(WO,"")}function cf(e,t){return t=uf(t),uf(e)===t}function at(e,t,a,o,s,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||ii(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&ii(e,""+o);break;case"className":hr(e,"class",o);break;case"tabIndex":hr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":hr(e,a,o);break;case"style":uE(e,o,u);break;case"data":if(t!=="object"){hr(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=mr(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&at(e,t,"name",s.name,s,null),at(e,t,"formEncType",s.formEncType,s,null),at(e,t,"formMethod",s.formMethod,s,null),at(e,t,"formTarget",s.formTarget,s,null)):(at(e,t,"encType",s.encType,s,null),at(e,t,"method",s.method,s,null),at(e,t,"target",s.target,s,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=mr(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Da);break;case"onScroll":o!=null&&Ve("scroll",e);break;case"onScrollEnd":o!=null&&Ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=mr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ve("beforetoggle",e),Ve("toggle",e),fr(e,"popover",o);break;case"xlinkActuate":Ma(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ma(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ma(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ma(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ma(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ma(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ma(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ma(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ma(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mR.get(a)||a,fr(e,a,o))}}function _u(e,t,a,o,s,u){switch(a){case"style":uE(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ii(e,o):(typeof o=="number"||typeof o=="bigint")&&ii(e,""+o);break;case"onScroll":o!=null&&Ve("scroll",e);break;case"onScrollEnd":o!=null&&Ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!eE.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),u=e[Vt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,s),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,s);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):fr(e,a,o)}}}function Gt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",e),Ve("load",e);var o=!1,s=!1,u;for(u in a)if(a.hasOwnProperty(u)){var S=a[u];if(S!=null)switch(u){case"src":o=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:at(e,t,u,S,a,null)}}s&&at(e,t,"srcSet",a.srcSet,a,null),o&&at(e,t,"src",a.src,a,null);return;case"input":Ve("invalid",e);var R=u=S=s=null,g=null,G=null;for(o in a)if(a.hasOwnProperty(o)){var W=a[o];if(W!=null)switch(o){case"name":s=W;break;case"type":S=W;break;case"checked":g=W;break;case"defaultChecked":G=W;break;case"value":u=W;break;case"defaultValue":R=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(l(137,t));break;default:at(e,t,o,W,a,null)}}oE(e,u,R,g,G,S,s,!1);return;case"select":Ve("invalid",e),o=S=u=null;for(s in a)if(a.hasOwnProperty(s)&&(R=a[s],R!=null))switch(s){case"value":u=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:at(e,t,s,R,a,null)}t=u,a=S,e.multiple=!!o,t!=null?ni(e,!!o,t,!1):a!=null&&ni(e,!!o,a,!0);return;case"textarea":Ve("invalid",e),u=s=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":s=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(91));break;default:at(e,t,S,R,a,null)}sE(e,o,s,u);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(o=a[g],o!=null))switch(g){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:at(e,t,g,o,a,null)}return;case"dialog":Ve("beforetoggle",e),Ve("toggle",e),Ve("cancel",e),Ve("close",e);break;case"iframe":case"object":Ve("load",e);break;case"video":case"audio":for(o=0;o<Ho.length;o++)Ve(Ho[o],e);break;case"image":Ve("error",e),Ve("load",e);break;case"details":Ve("toggle",e);break;case"embed":case"source":case"link":Ve("error",e),Ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:at(e,t,G,o,a,null)}return;default:if(sl(t)){for(W in a)a.hasOwnProperty(W)&&(o=a[W],o!==void 0&&_u(e,t,W,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&at(e,t,R,o,a,null))}function zO(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,S=null,R=null,g=null,G=null,W=null;for(Y in a){var Z=a[Y];if(a.hasOwnProperty(Y)&&Z!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":g=Z;default:o.hasOwnProperty(Y)||at(e,t,Y,null,o,Z)}}for(var U in o){var Y=o[U];if(Z=a[U],o.hasOwnProperty(U)&&(Y!=null||Z!=null))switch(U){case"type":u=Y;break;case"name":s=Y;break;case"checked":G=Y;break;case"defaultChecked":W=Y;break;case"value":S=Y;break;case"defaultValue":R=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(l(137,t));break;default:Y!==Z&&at(e,t,U,Y,o,Z)}}ol(e,S,R,g,G,W,u,s);return;case"select":Y=S=R=U=null;for(u in a)if(g=a[u],a.hasOwnProperty(u)&&g!=null)switch(u){case"value":break;case"multiple":Y=g;default:o.hasOwnProperty(u)||at(e,t,u,null,o,g)}for(s in o)if(u=o[s],g=a[s],o.hasOwnProperty(s)&&(u!=null||g!=null))switch(s){case"value":U=u;break;case"defaultValue":R=u;break;case"multiple":S=u;default:u!==g&&at(e,t,s,u,o,g)}t=R,a=S,o=Y,U!=null?ni(e,!!a,U,!1):!!o!=!!a&&(t!=null?ni(e,!!a,t,!0):ni(e,!!a,a?[]:"",!1));return;case"textarea":Y=U=null;for(R in a)if(s=a[R],a.hasOwnProperty(R)&&s!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:at(e,t,R,null,o,s)}for(S in o)if(s=o[S],u=a[S],o.hasOwnProperty(S)&&(s!=null||u!=null))switch(S){case"value":U=s;break;case"defaultValue":Y=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==u&&at(e,t,S,s,o,u)}rE(e,U,Y);return;case"option":for(var fe in a)if(U=a[fe],a.hasOwnProperty(fe)&&U!=null&&!o.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:at(e,t,fe,null,o,U)}for(g in o)if(U=o[g],Y=a[g],o.hasOwnProperty(g)&&U!==Y&&(U!=null||Y!=null))switch(g){case"selected":e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:at(e,t,g,U,o,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)U=a[ge],a.hasOwnProperty(ge)&&U!=null&&!o.hasOwnProperty(ge)&&at(e,t,ge,null,o,U);for(G in o)if(U=o[G],Y=a[G],o.hasOwnProperty(G)&&U!==Y&&(U!=null||Y!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,t));break;default:at(e,t,G,U,o,Y)}return;default:if(sl(t)){for(var nt in a)U=a[nt],a.hasOwnProperty(nt)&&U!==void 0&&!o.hasOwnProperty(nt)&&_u(e,t,nt,void 0,o,U);for(W in o)U=o[W],Y=a[W],!o.hasOwnProperty(W)||U===Y||U===void 0&&Y===void 0||_u(e,t,W,U,o,Y);return}}for(var D in a)U=a[D],a.hasOwnProperty(D)&&U!=null&&!o.hasOwnProperty(D)&&at(e,t,D,null,o,U);for(Z in o)U=o[Z],Y=a[Z],!o.hasOwnProperty(Z)||U===Y||U==null&&Y==null||at(e,t,Z,U,o,Y)}function df(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jO(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var s=a[o],u=s.transferSize,S=s.initiatorType,R=s.duration;if(u&&R&&df(S)){for(S=0,R=s.responseEnd,o+=1;o<a.length;o++){var g=a[o],G=g.startTime;if(G>R)break;var W=g.transferSize,Z=g.initiatorType;W&&df(Z)&&(g=g.responseEnd,S+=W*(g<R?1:(R-G)/(g-G)))}if(--o,t+=8*(u+S)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ju=null,Zu=null;function Ss(e){return e.nodeType===9?e:e.ownerDocument}function Ef(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qu=null;function _O(){var e=window.event;return e&&e.type==="popstate"?e===qu?!1:(qu=e,!0):(qu=null,!1)}var Af=typeof setTimeout=="function"?setTimeout:void 0,JO=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,ZO=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(e){return ff.resolve(null).then(e).catch(XO)}:Af;function XO(e){setTimeout(function(){throw e})}function hn(e){return e==="head"}function hf(e,t){var a=t,o=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(s),Gi(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Uo(a);for(var u=a.firstChild;u;){var S=u.nextSibling,R=u.nodeName;u[$i]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=S}}else a==="body"&&Uo(e.ownerDocument.body);a=s}while(a);Gi(t)}function Tf(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Qu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qu(a),nl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function qO(e,t,a,o){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[$i])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=da(e.nextSibling),e===null)break}return null}function QO(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=da(e.nextSibling),e===null))return null;return e}function mf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=da(e.nextSibling),e===null))return null;return e}function $u(e){return e.data==="$?"||e.data==="$~"}function ec(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $O(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function da(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var tc=null;function Rf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return da(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Of(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Cf(e,t,a){switch(t=Ss(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Uo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);nl(e)}var Ea=new Map,pf=new Set;function As(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var za=q.d;q.d={f:eC,r:tC,D:aC,C:nC,L:iC,m:oC,X:sC,S:rC,M:lC};function eC(){var e=za.f(),t=os();return e||t}function tC(e){var t=ei(e);t!==null&&t.tag===5&&t.type==="form"?wS(t):za.r(e)}var Bi=typeof document>"u"?null:document;function gf(e,t,a){var o=Bi;if(o&&typeof t=="string"&&t){var s=ia(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),pf.has(s)||(pf.add(s),e={rel:e,crossOrigin:a,href:t},o.querySelector(s)===null&&(t=o.createElement("link"),Gt(t,"link",e),Dt(t),o.head.appendChild(t)))}}function aC(e){za.D(e),gf("dns-prefetch",e,null)}function nC(e,t){za.C(e,t),gf("preconnect",e,t)}function iC(e,t,a){za.L(e,t,a);var o=Bi;if(o&&e&&t){var s='link[rel="preload"][as="'+ia(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+ia(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+ia(a.imageSizes)+'"]')):s+='[href="'+ia(e)+'"]';var u=s;switch(t){case"style":u=bi(e);break;case"script":u=Hi(e)}Ea.has(u)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ea.set(u,e),o.querySelector(s)!==null||t==="style"&&o.querySelector(Fo(u))||t==="script"&&o.querySelector(wo(u))||(t=o.createElement("link"),Gt(t,"link",e),Dt(t),o.head.appendChild(t)))}}function oC(e,t){za.m(e,t);var a=Bi;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ia(o)+'"][href="'+ia(e)+'"]',u=s;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Hi(e)}if(!Ea.has(u)&&(e=T({rel:"modulepreload",href:e},t),Ea.set(u,e),a.querySelector(s)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(u)))return}o=a.createElement("link"),Gt(o,"link",e),Dt(o),a.head.appendChild(o)}}}function rC(e,t,a){za.S(e,t,a);var o=Bi;if(o&&e){var s=ti(o).hoistableStyles,u=bi(e);t=t||"default";var S=s.get(u);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Fo(u)))R.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ea.get(u))&&ac(e,a);var g=S=o.createElement("link");Dt(g),Gt(g,"link",e),g._p=new Promise(function(G,W){g.onload=G,g.onerror=W}),g.addEventListener("load",function(){R.loading|=1}),g.addEventListener("error",function(){R.loading|=2}),R.loading|=4,fs(S,t,o)}S={type:"stylesheet",instance:S,count:1,state:R},s.set(u,S)}}}function sC(e,t){za.X(e,t);var a=Bi;if(a&&e){var o=ti(a).hoistableScripts,s=Hi(e),u=o.get(s);u||(u=a.querySelector(wo(s)),u||(e=T({src:e,async:!0},t),(t=Ea.get(s))&&nc(e,t),u=a.createElement("script"),Dt(u),Gt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(s,u))}}function lC(e,t){za.M(e,t);var a=Bi;if(a&&e){var o=ti(a).hoistableScripts,s=Hi(e),u=o.get(s);u||(u=a.querySelector(wo(s)),u||(e=T({src:e,async:!0,type:"module"},t),(t=Ea.get(s))&&nc(e,t),u=a.createElement("script"),Dt(u),Gt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(s,u))}}function Nf(e,t,a,o){var s=(s=k.current)?As(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=bi(a.href),a=ti(s).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=bi(a.href);var u=ti(s).hoistableStyles,S=u.get(e);if(S||(s=s.ownerDocument||s,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,S),(u=s.querySelector(Fo(e)))&&!u._p&&(S.instance=u,S.state.loading=5),Ea.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ea.set(e,a),u||uC(s,e,a,S.state))),t&&o===null)throw Error(l(528,""));return S}if(t&&o!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hi(a),a=ti(s).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function bi(e){return'href="'+ia(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function If(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function uC(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Gt(t,"link",a),Dt(t),e.head.appendChild(t))}function Hi(e){return'[src="'+ia(e)+'"]'}function wo(e){return"script[async]"+e}function yf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+ia(a.href)+'"]');if(o)return t.instance=o,Dt(o),o;var s=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Dt(o),Gt(o,"style",s),fs(o,a.precedence,e),t.instance=o;case"stylesheet":s=bi(a.href);var u=e.querySelector(Fo(s));if(u)return t.state.loading|=4,t.instance=u,Dt(u),u;o=If(a),(s=Ea.get(s))&&ac(o,s),u=(e.ownerDocument||e).createElement("link"),Dt(u);var S=u;return S._p=new Promise(function(R,g){S.onload=R,S.onerror=g}),Gt(u,"link",o),t.state.loading|=4,fs(u,a.precedence,e),t.instance=u;case"script":return u=Hi(a.src),(s=e.querySelector(wo(u)))?(t.instance=s,Dt(s),s):(o=a,(s=Ea.get(u))&&(o=T({},a),nc(o,s)),e=e.ownerDocument||e,s=e.createElement("script"),Dt(s),Gt(s,"link",o),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,fs(o,a.precedence,e));return t.instance}function fs(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=o.length?o[o.length-1]:null,u=s,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===t)u=R;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ac(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hs=null;function Lf(e,t,a){if(hs===null){var o=new Map,s=hs=new Map;s.set(a,o)}else s=hs,o=s.get(a),o||(o=new Map,s.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var u=a[s];if(!(u[$i]||u[vt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var S=u.getAttribute(t)||"";S=e+S;var R=o.get(S);R?R.push(u):o.set(S,[u])}}return o}function Mf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function cC(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Df(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dC(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=bi(o.href),u=t.querySelector(Fo(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ts.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Dt(u);return}u=t.ownerDocument||t,o=If(o),(s=Ea.get(s))&&ac(o,s),u=u.createElement("link"),Dt(u);var S=u;S._p=new Promise(function(R,g){S.onload=R,S.onerror=g}),Gt(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ts.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var ic=0;function EC(e,t){return e.stylesheets&&e.count===0&&Rs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Rs(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&ic===0&&(ic=62500*jO());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rs(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>ic?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(s)}}:null}function Ts(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ms=null;function Rs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ms=new Map,t.forEach(SC,e),ms=null,Ts.call(e))}function SC(e,t){if(!(t.state.loading&4)){var a=ms.get(e);if(a)var o=a.get(null);else{a=new Map,ms.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var S=s[u];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}s=t.instance,S=s.getAttribute("data-precedence"),u=a.get(S)||o,u===o&&a.set(null,s),a.set(S,s),this.count++,o=Ts.bind(this),s.addEventListener("load",o),s.addEventListener("error",o),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var ko={$$typeof:w,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function AC(e,t,a,o,s,u,S,R,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$s(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.hiddenUpdates=$s(null),this.identifierPrefix=o,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Pf(e,t,a,o,s,u,S,R,g,G,W,Z){return e=new AC(e,t,a,S,g,G,W,Z,R),t=1,u===!0&&(t|=24),u=Zt(3,null,null,t),e.current=u,u.stateNode=e,t=Fl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},Vl(u),e}function vf(e){return e?(e=di,e):di}function Bf(e,t,a,o,s,u){s=vf(s),o.context===null?o.context=s:o.pendingContext=s,o=on(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=rn(e,o,t),a!==null&&(_t(a,e,t),To(a,e,t))}function bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function oc(e,t){bf(e,t),(e=e.alternate)&&bf(e,t)}function Hf(e){if(e.tag===13||e.tag===31){var t=bn(e,67108864);t!==null&&_t(t,e,67108864),oc(e,67108864)}}function Gf(e){if(e.tag===13||e.tag===31){var t=ea();t=el(t);var a=bn(e,t);a!==null&&_t(a,e,t),oc(e,t)}}var Os=!0;function fC(e,t,a,o){var s=P.T;P.T=null;var u=q.p;try{q.p=2,rc(e,t,a,o)}finally{q.p=u,P.T=s}}function hC(e,t,a,o){var s=P.T;P.T=null;var u=q.p;try{q.p=8,rc(e,t,a,o)}finally{q.p=u,P.T=s}}function rc(e,t,a,o){if(Os){var s=sc(o);if(s===null)ju(e,t,o,Cs,a),Ff(e,o);else if(mC(s,e,t,a,o))o.stopPropagation();else if(Ff(e,o),t&4&&-1<TC.indexOf(e)){for(;s!==null;){var u=ei(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var S=Mn(u.pendingLanes);if(S!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var g=1<<31-Lt(S);R.entanglements[1]|=g,S&=~g}Ia(u),(Qe&6)===0&&(ns=Me()+500,bo(0))}}break;case 31:case 13:R=bn(u,2),R!==null&&_t(R,u,2),os(),oc(u,2)}if(u=sc(o),u===null&&ju(e,t,o,Cs,a),u===s)break;s=u}s!==null&&o.stopPropagation()}else ju(e,t,o,null,a)}}function sc(e){return e=ul(e),lc(e)}var Cs=null;function lc(e){if(Cs=null,e=$n(e),e!==null){var t=E(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cs=e,null}function Uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rt()){case ze:return 2;case Rt:return 8;case je:case le:return 32;case de:return 268435456;default:return 32}default:return 32}}var uc=!1,Tn=null,mn=null,Rn=null,xo=new Map,Vo=new Map,On=[],TC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ff(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(t.pointerId)}}function Yo(e,t,a,o,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[s]},t!==null&&(t=ei(t),t!==null&&Hf(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function mC(e,t,a,o,s){switch(t){case"focusin":return Tn=Yo(Tn,e,t,a,o,s),!0;case"dragenter":return mn=Yo(mn,e,t,a,o,s),!0;case"mouseover":return Rn=Yo(Rn,e,t,a,o,s),!0;case"pointerover":var u=s.pointerId;return xo.set(u,Yo(xo.get(u)||null,e,t,a,o,s)),!0;case"gotpointercapture":return u=s.pointerId,Vo.set(u,Yo(Vo.get(u)||null,e,t,a,o,s)),!0}return!1}function wf(e){var t=$n(e.target);if(t!==null){var a=E(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,qd(e.priority,function(){Gf(a)});return}}else if(t===31){if(t=A(a),t!==null){e.blockedOn=t,qd(e.priority,function(){Gf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ps(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=sc(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ll=o,a.target.dispatchEvent(o),ll=null}else return t=ei(a),t!==null&&Hf(t),e.blockedOn=a,!1;t.shift()}return!0}function kf(e,t,a){ps(e)&&a.delete(t)}function RC(){uc=!1,Tn!==null&&ps(Tn)&&(Tn=null),mn!==null&&ps(mn)&&(mn=null),Rn!==null&&ps(Rn)&&(Rn=null),xo.forEach(kf),Vo.forEach(kf)}function gs(e,t){e.blockedOn===t&&(e.blockedOn=null,uc||(uc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,RC)))}var Ns=null;function xf(e){Ns!==e&&(Ns=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ns===e&&(Ns=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],s=e[t+2];if(typeof o!="function"){if(lc(o||a)===null)continue;break}var u=ei(a);u!==null&&(e.splice(t,3),t-=3,su(u,{pending:!0,data:s,method:a.method,action:o},o,s))}}))}function Gi(e){function t(g){return gs(g,e)}Tn!==null&&gs(Tn,e),mn!==null&&gs(mn,e),Rn!==null&&gs(Rn,e),xo.forEach(t),Vo.forEach(t);for(var a=0;a<On.length;a++){var o=On[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<On.length&&(a=On[0],a.blockedOn===null);)wf(a),a.blockedOn===null&&On.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var s=a[o],u=a[o+1],S=s[Vt]||null;if(typeof u=="function")S||xf(a);else if(S){var R=null;if(u&&u.hasAttribute("formAction")){if(s=u,S=u[Vt]||null)R=S.formAction;else if(lc(s)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),xf(a)}}}function Vf(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(S){return s=S})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function cc(e){this._internalRoot=e}Is.prototype.render=cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,o=ea();Bf(a,o,e,t,null,null)},Is.prototype.unmount=cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bf(e.current,2,null,e,null,null),os(),t[Qn]=null}};function Is(e){this._internalRoot=e}Is.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<On.length&&t!==0&&t<On[a].priority;a++);On.splice(a,0,e),a===0&&wf(e)}};var Yf=i.version;if(Yf!=="19.2.3")throw Error(l(527,Yf,"19.2.3"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=h(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var OC={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{_e=ys.inject(OC),Re=ys}catch{}}return Wo.createRoot=function(e,t){if(!c(e))throw Error(l(299));var a=!1,o="",s=JS,u=ZS,S=XS;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(S=t.onRecoverableError)),t=Pf(e,1,!1,null,null,a,o,null,s,u,S,Vf),e[Qn]=t.current,zu(e),new cc(t)},Wo.hydrateRoot=function(e,t,a){if(!c(e))throw Error(l(299));var o=!1,s="",u=JS,S=ZS,R=XS,g=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=Pf(e,1,!0,t,a??null,o,s,g,u,S,R,Vf),t.context=vf(null),a=t.current,o=ea(),o=el(o),s=on(o),s.callback=null,rn(a,s,o),a=o,t.current.lanes=a,Qi(t,a),Ia(t),e[Qn]=t.current,zu(e),new Is(t)},Wo.version="19.2.3",Wo}var Qf;function PC(){if(Qf)return Sc.exports;Qf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Sc.exports=DC(),Sc.exports}var vC=PC();const BC=MT(vC);var ye=(n=>(n.MENU="MENU",n.CLASSIC="CLASSIC",n.LEVEL_THEMED="LEVEL_THEMED",n.LEVEL_EMOJI="LEVEL_EMOJI",n.LEVEL_MIND_MATCH="LEVEL_MIND_MATCH",n.LEVEL_SYNONYMS="LEVEL_SYNONYMS",n.LEVEL_EXPANSION="LEVEL_EXPANSION",n))(ye||{});const $f=65,bC=60,HC=["bg-neon-red shadow-[0_0_15px_#FF073A] border-white","bg-neon-orange shadow-[0_0_15px_#FF5F1F] border-white","bg-neon-yellow shadow-[0_0_15px_#F9FF00] border-white","bg-neon-lime shadow-[0_0_15px_#39FF14] border-white","bg-neon-green shadow-[0_0_15px_#00F000] border-white","bg-neon-mint shadow-[0_0_15px_#00FF9F] border-white","bg-neon-cyan shadow-[0_0_15px_#00FFFF] border-white","bg-neon-sky-blue shadow-[0_0_15px_#00BFFF] border-white","bg-neon-blue shadow-[0_0_15px_#0066FF] border-white","bg-neon-violet shadow-[0_0_15px_#B026FF] border-white","bg-neon-purple shadow-[0_0_15px_#D400FF] border-white","bg-neon-magenta shadow-[0_0_15px_#FF00FF] border-white","bg-neon-pink shadow-[0_0_15px_#FF1FBF] border-white","bg-neon-rose shadow-[0_0_15px_#FF0055] border-white"],Ca=[{name:"NEON ARCADE",gradient:"from-black to-zinc-900",solvedColors:HC}],it="CLASSIC",Nt="LEVEL_EMOJI",It="LEVEL_MIND_MATCH",yt="LEVEL_SYNONYMS",GC="LEVEL_THEMED",ma="LEVEL_EXPANSION",UC=[it,Nt,It,yt,ma,GC,it,Nt,It,yt,ma,it,Nt,It,yt,ma,it,Nt,It,yt,it,Nt,It,yt,ma,it,Nt,It,yt,it,it,Nt,It,yt,ma,it,Nt,It,yt,it,it,Nt,It,yt,ma,it,Nt,It,yt,it,it,Nt,It,yt,ma,it,Nt,It,yt,it,it,Nt,It,yt,ma,it,Nt,It,yt,it,it,Nt,It,yt,ma,it,Nt,It,yt,it,it,Nt,It,yt,ma,it,Nt,It,yt,it,it,Nt,It,yt,ma,it,Nt,It,yt,it],yn={LEVEL:"wpm_level",TUTORIAL_SEEN:"wpm_tutorial_seen_v2",TUTORIAL_SEEN_L2:"wpm_tutorial_seen_l2",TUTORIAL_SEEN_L5:"wpm_tutorial_seen_l5",GAME_STATS:"wpm_game_stats",DAILY_HISTORY:"wpm_daily_history",ENABLED_MODES:"wpm_enabled_modes"},FC=()=>{try{const n=localStorage.getItem(yn.LEVEL);if(!n)return 1;const i=parseInt(n,10);return isNaN(i)?1:i}catch{return 1}},wC=n=>{localStorage.setItem(yn.LEVEL,n.toString())},Tc=[ye.CLASSIC,ye.LEVEL_EMOJI,ye.LEVEL_SYNONYMS,ye.LEVEL_MIND_MATCH,ye.LEVEL_THEMED,ye.LEVEL_EXPANSION],kC=()=>{try{const n=localStorage.getItem(yn.ENABLED_MODES);if(!n)return Tc;const i=JSON.parse(n);return Array.isArray(i)&&i.length>0?i:Tc}catch{return Tc}},xC=n=>{localStorage.setItem(yn.ENABLED_MODES,JSON.stringify(n))},VC=()=>!!localStorage.getItem(yn.TUTORIAL_SEEN),YC=()=>{localStorage.setItem(yn.TUTORIAL_SEEN,"true")},mc={rowsSolved:0,levelsCompleted:0,totalTimeMs:0,hintsUsed:0,hintsRefused:0,totalMoves:0,solvedCategoryIds:[],solvedWords:[],totalScore:0},DT=()=>{try{const n=localStorage.getItem(yn.GAME_STATS);if(!n)return mc;const i=JSON.parse(n);return{...mc,...i,solvedWords:Array.isArray(i.solvedWords)?i.solvedWords:[]}}catch{return mc}},KC=n=>{try{const i=DT();let r=i.solvedCategoryIds;if(n.solvedCategoryIds){const E=new Set([...i.solvedCategoryIds,...n.solvedCategoryIds]);r=Array.from(E)}let l=i.solvedWords;if(n.solvedWords){const E=new Set([...i.solvedWords,...n.solvedWords]);l=Array.from(E)}const c={rowsSolved:i.rowsSolved+(n.rowsSolved||0),levelsCompleted:i.levelsCompleted+(n.levelsCompleted||0),totalTimeMs:i.totalTimeMs+(n.totalTimeMs||0),hintsUsed:i.hintsUsed+(n.hintsUsed||0),hintsRefused:i.hintsRefused+(n.hintsRefused||0),totalMoves:i.totalMoves+(n.totalMoves||0),solvedCategoryIds:r,solvedWords:l,totalScore:i.totalScore+(n.totalScore||0)};localStorage.setItem(yn.GAME_STATS,JSON.stringify(c))}catch(i){console.error("Failed to update stats",i)}},WC=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
399,Church Actions,Preach,Pray,Baptize,Confess,Offer,Chant,Sing,Fast,Read Scripture`,zC=`401,Church Music Instruments,Organ,Harp,Flute,Lute,Horn,Bell,Trumpet,Violin,Drum
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
770,ROCK PRODUCERS,GEORGE MARTIN,RICK RUBIN,BRIAN ENO,MICKIE MOST,QUINCY JONES`,jC=`801,SOCCER ACTIONS,GOAL,CORNER KICK,PASS,DRIBBLE,HEADER,FOUL,KICKOFF,OFFSIDE,PENALTY KICK
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
1200,TECTONIC PLATES,PACIFIC,EURASIAN,AFRICAN,ANTARCTIC`,_C=`1201,VOLCANO PARTS,CRATER,VENT,MAGMA,LAVA,ASH
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
1300,BREAKING BAD,WALTER,JESSE,SKYLER,HANK,SAUL,GUS`,JC=`1760,BICYCLE PARTS,WHEEL,TIRE,PEDAL,CHAIN,HANDLEBAR,SEAT,BRAKE,GEAR
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
2500,Starts with Z,Zebra,Zoo,Zero,Zone,Zest,Zipper`,ZC=`100000,Air Fryer Staples,Fries,Wings,Broccoli,Salmon,Tofu,Ravioli
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
100073,Baccarat Terms,Player,Banker`,XC=`110000,Abraham Lincoln,Civil War,Emancipation Proclamation,Gettysburg Address,Honest Abe,Log Cabin,Union
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
110400,SODA COMPANIES,PEPSICO,COCA COLA,DR PEPPER,KEURIG`,qC=`id,name,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
70300,BRIDGE TYPES,SUSPENSION,ARCH,BEAM,TRUSS,DRAWBRIDGE,CANTILEVER,CABLE,PONTOON`,QC=`id,name,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
60044,RHYME: -ISTIC,Artistic,Realistic,Optimistic,Pessimistic,Statistic,Logistic,Ballistic,Mystic`,$C=`110401,Solar System Objects,Asteroid,Comet,Meteoroid,Heliosphere
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
110484,Yellowstone,Geyser,Caldera,Bison,Wolves,Prismatic,Mammoth`,ep=[WC,zC,jC,_C,JC,ZC,XC,qC,QC,$C].join(`
`),tp=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
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
`,ap=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
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
`,np=`Category,Linguistic Cluster,Intensity
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
"Young Trees","Saplings, Seedlings, Sprouts, Scions",5`,sd=14;function ja(n){const i=[...n];for(let r=i.length-1;r>0;r--){const l=Math.floor(Math.random()*(r+1));[i[r],i[l]]=[i[l],i[r]]}return i}const wc=n=>{const i=n.trim().split(`
`),r=[];for(let l=1;l<i.length;l++){const c=i[l].trim();if(!c)continue;const E=[];let d="",A=!1;for(let T=0;T<c.length;T++){const O=c[T];O==='"'?A&&c[T+1]==='"'?(d+='"',T++):A=!A:O===","&&!A?(E.push(d),d=""):d+=O}if(E.push(d),E.length<3)continue;const f=E[0].trim(),h=E[1].trim(),m=E.slice(2).map(T=>T.trim()).filter(T=>T.length>0&&T.length<=sd);m.length>=4&&r.push({id:f,name:h,words:m})}return r},ip=(n,i=8e4)=>{const r=n.trim().split(`
`),l=[];let c=i;for(let E=1;E<r.length;E++){const d=r[E].trim();if(!d)continue;const A=[];let f="",h=!1;for(let L=0;L<d.length;L++){const v=d[L];v==='"'?h=!h:v===","&&!h?(A.push(f),f=""):f+=v}if(A.push(f),A.length<2)continue;const m=A[0].trim().replace(/^"|"$/g,""),O=A[1].trim().replace(/^"|"$/g,"").split(",").map(L=>L.trim()).filter(L=>L.length>0&&L.length<=sd);O.length>=4&&l.push({id:(c++).toString(),name:m,words:O})}return l};let Ui=null,Ls=null;const Rc=[{id:"fb1",name:"Colors",words:["Red","Blue","Green","Yellow"]},{id:"fb2",name:"Animals",words:["Dog","Cat","Bird","Fish"]},{id:"fb3",name:"Fruits",words:["Apple","Banana","Orange","Grape"]},{id:"fb4",name:"Planets",words:["Earth","Mars","Venus","Jupiter"]},{id:"fb5",name:"Seasons",words:["Spring","Summer","Fall","Winter"]},{id:"fb6",name:"Directions",words:["North","South","East","West"]},{id:"fb7",name:"Elements",words:["Fire","Water","Air","Earth"]}],Us=()=>{if(Ui&&Ui.length>0)return Ui;try{const n=[...wc(ep||""),...ip(np||""),...wc(tp||"")];if(n.length===0)return console.warn("CSV Parsing returned 0 rows. Using fallback."),Rc;const i=new Map;for(const r of n){if(!r.name)continue;const l=r.name.toUpperCase().trim();if(!(l==="CATEGORY"||l==="NAME"||l===""))if(i.has(l)){const c=i.get(l),E=Array.from(new Set([...c.words,...r.words]));c.words=E}else i.set(l,{...r})}return Ui=Array.from(i.values()).filter(r=>r.words.length>=4),Ui.length===0?Rc:Ui}catch(n){return console.error("Error loading CSV data",n),Rc}},op=()=>Ls||(Ls=wc(ap),Ls),rp=(n,i)=>{const r=i||Us();return{name:"VARIETY PACK",categories:ja(r).slice(0,n)}},sp=`
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
`;let Oc=null;const kc=()=>{if(Oc)return Oc;const n=sp.trim().split(`
`),i=[];let r=5e4;return n.forEach(l=>{if(!l.includes(","))return;const c=l.split(",").map(A=>A.trim().toLowerCase()).filter(A=>A.length>0&&A.length<=14);if(c.length<5)return;const E=c[0],d=c.slice(1);d.length>=4&&i.push({id:(r++).toString(),name:`SYNONYMS: ${E.toUpperCase()}`,words:d})}),Oc=i,i},lp=`
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
`;let Cc=null;const Fs=()=>{if(Cc)return Cc;const n=lp.trim().split(`
`),i=[];let r=9e4;const l=typeof Intl<"u"&&"Segmenter"in Intl;return n.forEach(c=>{if(!c.includes(","))return;const E=c.indexOf(","),d=c.substring(0,E).trim(),A=c.substring(E+1).trim();let f=[];if(l){const m=new Intl.Segmenter("en",{granularity:"grapheme"}).segment(A);for(const{segment:T}of m){const O=T.trim();O.length>0&&f.push(O)}}else f=Array.from(A).filter(h=>h.trim().length>0);f=Array.from(new Set(f)),f.length>=3&&i.push({id:(r++).toString(),name:d,words:f})}),Cc=i,i},xc=(n,i=[])=>{const r=UC;let l=(n-1)%r.length,c=r[l];if(i.length>0&&!i.includes(c))for(let E=1;E<r.length;E++){const d=r[(l+E)%r.length];if(i.includes(d)){c=d;break}}return c},up=(n,i=[])=>{const r=xc(n,i);let l=[];switch(r){case ye.LEVEL_SYNONYMS:l=kc();break;case ye.LEVEL_EMOJI:l=Fs();break;default:l=Us(),n%20===0&&(l=[...l,...op()]);break}return{mode:r,data:l}};class cp{constructor(){this.ctx=null,this.isMuted=!1,this.isMusicPlaying=!1,this.musicNodes=[],this.musicInterval=null}getContext(){if(!this.ctx)try{const i=window.AudioContext||window.webkitAudioContext;if(i)this.ctx=new i;else return null}catch(i){return console.error("Audio init error",i),null}return this.ctx}resume(){const i=this.getContext();i&&i.state==="suspended"&&i.resume().catch(r=>console.warn(r))}setSound(i){this.isMuted=!i,this.isMuted?this.stopNodes():this.resume()}playTone(i,r,l,c=0,E=.1){if(this.isMuted)return;const d=this.getContext();if(d){d.state==="suspended"&&d.resume().catch(()=>{});try{const A=d.createOscillator(),f=d.createGain();A.type=r,A.frequency.setValueAtTime(i,d.currentTime+c),f.gain.setValueAtTime(E,d.currentTime+c),f.gain.linearRampToValueAtTime(.001,d.currentTime+c+l),A.connect(f),f.connect(d.destination),A.start(d.currentTime+c),A.stop(d.currentTime+c+l+.05),A.onended=()=>{A.disconnect(),f.disconnect()}}catch{}}}startMusic(){this.isMusicPlaying||(this.isMusicPlaying=!0)}stopMusic(){this.isMusicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null),this.stopNodes()}toggleMusic(){return this.isMusicPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}stopNodes(){this.musicNodes.forEach(i=>{try{i.disconnect()}catch{}}),this.musicNodes=[]}playTick(){this.playTone(800,"square",.03,0,.05)}playSelect(){this.playTone(600,"sine",.08,0,.1)}playSwap(){if(this.isMuted)return;const i=this.getContext();if(i){i.state==="suspended"&&i.resume().catch(()=>{});try{const r=i.createOscillator(),l=i.createGain();r.frequency.setValueAtTime(300,i.currentTime),r.frequency.linearRampToValueAtTime(600,i.currentTime+.1),l.gain.setValueAtTime(.05,i.currentTime),l.gain.linearRampToValueAtTime(.001,i.currentTime+.1),r.connect(l),l.connect(i.destination),r.start(),r.stop(i.currentTime+.15),r.onended=()=>{r.disconnect(),l.disconnect()}}catch{}}}playCorrect(){this.playTone(660,"sine",.1,0,.15),this.playTone(880,"sine",.2,.08,.15)}playRowSolved(){this.playTone(440,"sine",.4,0,.1),this.playTone(554.37,"sine",.4,.05,.1),this.playTone(659.25,"sine",.4,.1,.1)}playError(){if(this.isMuted)return;const i=this.getContext();if(i){i.state==="suspended"&&i.resume().catch(()=>{});try{const r=i.currentTime,l=i.createOscillator(),c=i.createGain();l.type="sawtooth",l.frequency.setValueAtTime(120,r),l.frequency.exponentialRampToValueAtTime(60,r+.3),c.gain.setValueAtTime(.15,r),c.gain.linearRampToValueAtTime(.001,r+.3),l.connect(c),c.connect(i.destination),l.start(r),l.stop(r+.35),l.onended=()=>{l.disconnect(),c.disconnect()}}catch{}}}playWin(){this.playTone(523.25,"triangle",.1,0,.2),this.playTone(659.25,"triangle",.1,0+.1,.2),this.playTone(783.99,"triangle",.1,0+.2,.2),this.playTone(1046.5,"square",.6,0+.3,.2),this.playTone(523.25,"sine",.4,0+.3,.2)}playLevelStart(){this.playTone(440,"sine",.1,0,.1),this.playTone(880,"sine",.2,0+.1,.1)}toggleMute(){this.isMuted=!this.isMuted,this.isMuted&&this.stopNodes()}}const Ue=new cp;/*! Capacitor: https://capacitorjs.com/ - MIT License */var Ki;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Ki||(Ki={}));class pc extends Error{constructor(i,r,l){super(i),this.message=i,this.code=r,this.data=l}}const dp=n=>{var i,r;return n!=null&&n.androidBridge?"android":!((r=(i=n==null?void 0:n.webkit)===null||i===void 0?void 0:i.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},Ep=n=>{const i=n.CapacitorCustomPlatform||null,r=n.Capacitor||{},l=r.Plugins=r.Plugins||{},c=()=>i!==null?i.name:dp(n),E=()=>c()!=="web",d=T=>{const O=h.get(T);return!!(O!=null&&O.platforms.has(c())||A(T))},A=T=>{var O;return(O=r.PluginHeaders)===null||O===void 0?void 0:O.find(L=>L.name===T)},f=T=>n.console.error(T),h=new Map,m=(T,O={})=>{const L=h.get(T);if(L)return console.warn(`Capacitor plugin "${T}" already registered. Cannot register plugins twice.`),L.proxy;const v=c(),F=A(T);let M;const I=async()=>(!M&&v in O?M=typeof O[v]=="function"?M=await O[v]():M=O[v]:i!==null&&!M&&"web"in O&&(M=typeof O.web=="function"?M=await O.web():M=O.web),M),V=(re,Te)=>{var De,Pe;if(F){const Ge=F==null?void 0:F.methods.find(ve=>Te===ve.name);if(Ge)return Ge.rtype==="promise"?ve=>r.nativePromise(T,Te.toString(),ve):(ve,We)=>r.nativeCallback(T,Te.toString(),ve,We);if(re)return(De=re[Te])===null||De===void 0?void 0:De.bind(re)}else{if(re)return(Pe=re[Te])===null||Pe===void 0?void 0:Pe.bind(re);throw new pc(`"${T}" plugin is not implemented on ${v}`,Ki.Unimplemented)}},w=re=>{let Te;const De=(...Pe)=>{const Ge=I().then(ve=>{const We=V(ve,re);if(We){const we=We(...Pe);return Te=we==null?void 0:we.remove,we}else throw new pc(`"${T}.${re}()" is not implemented on ${v}`,Ki.Unimplemented)});return re==="addListener"&&(Ge.remove=async()=>Te()),Ge};return De.toString=()=>`${re.toString()}() { [capacitor code] }`,Object.defineProperty(De,"name",{value:re,writable:!1,configurable:!1}),De},ie=w("addListener"),ae=w("removeListener"),Ee=(re,Te)=>{const De=ie({eventName:re},Te),Pe=async()=>{const ve=await De;ae({eventName:re,callbackId:ve},Te)},Ge=new Promise(ve=>De.then(()=>ve({remove:Pe})));return Ge.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Pe()},Ge},te=new Proxy({},{get(re,Te){switch(Te){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return F?Ee:ie;case"removeListener":return ae;default:return w(Te)}}});return l[T]=te,h.set(T,{name:T,proxy:te,platforms:new Set([...Object.keys(O),...F?[v]:[]])}),te};return r.convertFileSrc||(r.convertFileSrc=T=>T),r.getPlatform=c,r.handleError=f,r.isNativePlatform=E,r.isPluginAvailable=d,r.registerPlugin=m,r.Exception=pc,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},Sp=n=>n.Capacitor=Ep(n),gn=Sp(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ld=gn.registerPlugin;class PT{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(i,r){let l=!1;this.listeners[i]||(this.listeners[i]=[],l=!0),this.listeners[i].push(r);const E=this.windowListeners[i];E&&!E.registered&&this.addWindowListener(E),l&&this.sendRetainedArgumentsForEvent(i);const d=async()=>this.removeListener(i,r);return Promise.resolve({remove:d})}async removeAllListeners(){this.listeners={};for(const i in this.windowListeners)this.removeWindowListener(this.windowListeners[i]);this.windowListeners={}}notifyListeners(i,r,l){const c=this.listeners[i];if(!c){if(l){let E=this.retainedEventArguments[i];E||(E=[]),E.push(r),this.retainedEventArguments[i]=E}return}c.forEach(E=>E(r))}hasListeners(i){var r;return!!(!((r=this.listeners[i])===null||r===void 0)&&r.length)}registerWindowListener(i,r){this.windowListeners[r]={registered:!1,windowEventName:i,pluginEventName:r,handler:l=>{this.notifyListeners(r,l)}}}unimplemented(i="not implemented"){return new gn.Exception(i,Ki.Unimplemented)}unavailable(i="not available"){return new gn.Exception(i,Ki.Unavailable)}async removeListener(i,r){const l=this.listeners[i];if(!l)return;const c=l.indexOf(r);this.listeners[i].splice(c,1),this.listeners[i].length||this.removeWindowListener(this.windowListeners[i])}addWindowListener(i){window.addEventListener(i.windowEventName,i.handler),i.registered=!0}removeWindowListener(i){i&&(window.removeEventListener(i.windowEventName,i.handler),i.registered=!1)}sendRetainedArgumentsForEvent(i){const r=this.retainedEventArguments[i];r&&(delete this.retainedEventArguments[i],r.forEach(l=>{this.notifyListeners(i,l)}))}}const eh=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),th=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Ap extends PT{async getCookies(){const i=document.cookie,r={};return i.split(";").forEach(l=>{if(l.length<=0)return;let[c,E]=l.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=th(c).trim(),E=th(E).trim(),r[c]=E}),r}async setCookie(i){try{const r=eh(i.key),l=eh(i.value),c=`; expires=${(i.expires||"").replace("expires=","")}`,E=(i.path||"/").replace("path=",""),d=i.url!=null&&i.url.length>0?`domain=${i.url}`:"";document.cookie=`${r}=${l||""}${c}; path=${E}; ${d};`}catch(r){return Promise.reject(r)}}async deleteCookie(i){try{document.cookie=`${i.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const i=document.cookie.split(";")||[];for(const r of i)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(i){return Promise.reject(i)}}async clearAllCookies(){try{await this.clearCookies()}catch(i){return Promise.reject(i)}}}ld("CapacitorCookies",{web:()=>new Ap});const fp=async n=>new Promise((i,r)=>{const l=new FileReader;l.onload=()=>{const c=l.result;i(c.indexOf(",")>=0?c.split(",")[1]:c)},l.onerror=c=>r(c),l.readAsDataURL(n)}),hp=(n={})=>{const i=Object.keys(n);return Object.keys(n).map(c=>c.toLocaleLowerCase()).reduce((c,E,d)=>(c[E]=n[i[d]],c),{})},Tp=(n,i=!0)=>n?Object.entries(n).reduce((l,c)=>{const[E,d]=c;let A,f;return Array.isArray(d)?(f="",d.forEach(h=>{A=i?encodeURIComponent(h):h,f+=`${E}=${A}&`}),f.slice(0,-1)):(A=i?encodeURIComponent(d):d,f=`${E}=${A}`),`${l}&${f}`},"").substr(1):null,mp=(n,i={})=>{const r=Object.assign({method:n.method||"GET",headers:n.headers},i),c=hp(n.headers)["content-type"]||"";if(typeof n.data=="string")r.body=n.data;else if(c.includes("application/x-www-form-urlencoded")){const E=new URLSearchParams;for(const[d,A]of Object.entries(n.data||{}))E.set(d,A);r.body=E.toString()}else if(c.includes("multipart/form-data")||n.data instanceof FormData){const E=new FormData;if(n.data instanceof FormData)n.data.forEach((A,f)=>{E.append(f,A)});else for(const A of Object.keys(n.data))E.append(A,n.data[A]);r.body=E;const d=new Headers(r.headers);d.delete("content-type"),r.headers=d}else(c.includes("application/json")||typeof n.data=="object")&&(r.body=JSON.stringify(n.data));return r};class Rp extends PT{async request(i){const r=mp(i,i.webFetchExtra),l=Tp(i.params,i.shouldEncodeUrlParams),c=l?`${i.url}?${l}`:i.url,E=await fetch(c,r),d=E.headers.get("content-type")||"";let{responseType:A="text"}=E.ok?i:{};d.includes("application/json")&&(A="json");let f,h;switch(A){case"arraybuffer":case"blob":h=await E.blob(),f=await fp(h);break;case"json":f=await E.json();break;case"document":case"text":default:f=await E.text()}const m={};return E.headers.forEach((T,O)=>{m[O]=T}),{data:f,headers:m,status:E.status,url:E.url}}async get(i){return this.request(Object.assign(Object.assign({},i),{method:"GET"}))}async post(i){return this.request(Object.assign(Object.assign({},i),{method:"POST"}))}async put(i){return this.request(Object.assign(Object.assign({},i),{method:"PUT"}))}async patch(i){return this.request(Object.assign(Object.assign({},i),{method:"PATCH"}))}async delete(i){return this.request(Object.assign(Object.assign({},i),{method:"DELETE"}))}}ld("CapacitorHttp",{web:()=>new Rp});const Op="modulepreload",Cp=function(n){return"/"+n},ah={},pp=function(i,r,l){let c=Promise.resolve();if(r&&r.length>0){let d=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const A=document.querySelector("meta[property=csp-nonce]"),f=(A==null?void 0:A.nonce)||(A==null?void 0:A.getAttribute("nonce"));c=d(r.map(h=>{if(h=Cp(h),h in ah)return;ah[h]=!0;const m=h.endsWith(".css"),T=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${T}`))return;const O=document.createElement("link");if(O.rel=m?"stylesheet":Op,m||(O.as="script"),O.crossOrigin="",O.href=h,f&&O.setAttribute("nonce",f),document.head.appendChild(O),m)return new Promise((L,v)=>{O.addEventListener("load",L),O.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})}))}function E(d){const A=new Event("vite:preloadError",{cancelable:!0});if(A.payload=d,window.dispatchEvent(A),!A.defaultPrevented)throw d}return c.then(d=>{for(const A of d||[])A.status==="rejected"&&E(A.reason);return i().catch(E)})};var nh;(function(n){n.General="General",n.ParentalGuidance="ParentalGuidance",n.Teen="Teen",n.MatureAudience="MatureAudience"})(nh||(nh={}));var ih;(function(n){n.SizeChanged="bannerAdSizeChanged",n.Loaded="bannerAdLoaded",n.FailedToLoad="bannerAdFailedToLoad",n.Opened="bannerAdOpened",n.Closed="bannerAdClosed",n.AdImpression="bannerAdImpression"})(ih||(ih={}));var Vc;(function(n){n.TOP_CENTER="TOP_CENTER",n.CENTER="CENTER",n.BOTTOM_CENTER="BOTTOM_CENTER"})(Vc||(Vc={}));var Yc;(function(n){n.BANNER="BANNER",n.FULL_BANNER="FULL_BANNER",n.LARGE_BANNER="LARGE_BANNER",n.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",n.LEADERBOARD="LEADERBOARD",n.ADAPTIVE_BANNER="ADAPTIVE_BANNER",n.SMART_BANNER="SMART_BANNER"})(Yc||(Yc={}));var oh;(function(n){n.Loaded="interstitialAdLoaded",n.FailedToLoad="interstitialAdFailedToLoad",n.Showed="interstitialAdShowed",n.FailedToShow="interstitialAdFailedToShow",n.Dismissed="interstitialAdDismissed"})(oh||(oh={}));var rh;(function(n){n.Loaded="onRewardedInterstitialAdLoaded",n.FailedToLoad="onRewardedInterstitialAdFailedToLoad",n.Showed="onRewardedInterstitialAdShowed",n.FailedToShow="onRewardedInterstitialAdFailedToShow",n.Dismissed="onRewardedInterstitialAdDismissed",n.Rewarded="onRewardedInterstitialAdReward"})(rh||(rh={}));var sh;(function(n){n.Loaded="onRewardedVideoAdLoaded",n.FailedToLoad="onRewardedVideoAdFailedToLoad",n.Showed="onRewardedVideoAdShowed",n.FailedToShow="onRewardedVideoAdFailedToShow",n.Dismissed="onRewardedVideoAdDismissed",n.Rewarded="onRewardedVideoAdReward"})(sh||(sh={}));var Kc;(function(n){n.NOT_REQUIRED="NOT_REQUIRED",n.OBTAINED="OBTAINED",n.REQUIRED="REQUIRED",n.UNKNOWN="UNKNOWN"})(Kc||(Kc={}));var lh;(function(n){n[n.DISABLED=0]="DISABLED",n[n.EEA=1]="EEA",n[n.NOT_EEA=2]="NOT_EEA",n[n.US=3]="US",n[n.OTHER=4]="OTHER"})(lh||(lh={}));const Ra=ld("AdMob",{web:()=>pp(()=>import("./web-jKLq8Hwh.js"),[]).then(n=>new n.AdMobWeb)}),gp=({onStart:n,onSettings:i,onStats:r,lastLevel:l})=>{const c=l||1,E=c>1?`CONTINUE LEVEL ${c}`:"START GAME";return C.jsxs("div",{className:"flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative bg-black font-oswald",children:[C.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center w-full",children:[C.jsx("div",{className:"flex flex-col items-center justify-center mb-16 w-full animate-zoom-in",children:C.jsx("img",{src:"/logo.svg",alt:"WORD PAIRING MACHINE",className:"w-full max-w-[320px] md:max-w-[450px] h-auto object-contain"})}),C.jsx("div",{className:"flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center z-30",style:{animationDelay:"0.4s"},children:C.jsx("div",{className:"relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer",onClick:n,children:C.jsx("button",{className:`
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
          `,children:"SETTINGS"})]})]})},Np={async showPrivacyOptionsForm(){if(gn.getPlatform()==="web"){console.log("Privacy options are managed by the browser or not applicable.");return}try{console.log("PrivacyService: Invoking AdMob.showConsentForm()"),await Ra.showConsentForm()}catch(n){throw console.error("PrivacyService: Failed to open consent form",n),n}}},uh={[ye.CLASSIC]:"Classic",[ye.LEVEL_THEMED]:"Themed",[ye.LEVEL_MIND_MATCH]:"Mind",[ye.LEVEL_SYNONYMS]:"Synonyms",[ye.LEVEL_EMOJI]:"Emoji",[ye.LEVEL_EXPANSION]:"Expansion"},Ip=({isOpen:n,onClose:i,onMainMenu:r,isMusicOn:l,toggleMusic:c,enabledModes:E,toggleMode:d,hintsEnabled:A,setHintsEnabled:f,onShowTutorial:h,onResetProgress:m,categories:T=[],isAutoPlaying:O,toggleAutoPlay:L,privacyOptionsRequired:v,onShowPrivacyOptions:F,onOpenAdInspector:M})=>{if(!n)return null;const I=T&&T.length>0,V=async()=>{if(F){F();return}try{console.log("Requesting Privacy Options via AdMob wrapper..."),await Np.showPrivacyOptionsForm(),console.log("Privacy Options request handled.")}catch(w){console.error("Error showing privacy options form:",w)}};return C.jsx("div",{className:"absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald",children:C.jsxs("div",{className:"w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(0,229,255,0.3)] flex flex-col gap-3 overflow-hidden max-h-[95vh]",children:[C.jsxs("div",{className:"flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[C.jsx("h2",{className:"text-xl font-black font-oswald text-neon-blue uppercase tracking-widest italic drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]",children:"SETTINGS"}),C.jsx("button",{className:"text-zinc-400 hover:text-neon-red transition-colors p-1",onClick:i,children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),C.jsxs("div",{className:"grid grid-cols-2 gap-2 shrink-0",children:[C.jsx("button",{onClick:r,className:"col-span-2 py-2.5 bg-neon-red border-2 border-white text-white font-black font-oswald text-lg uppercase rounded-medium hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(255,7,58,0.4)]",children:"EXIT TO MAIN MENU"}),C.jsxs("button",{onClick:c,className:`p-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${l?"bg-zinc-900 border-neon-green text-neon-green shadow-[0_0_10px_#00FF66]":"bg-black border-zinc-800 text-zinc-600"}`,children:["SOUND: ",l?"ON":"OFF"]}),C.jsxs("button",{onClick:()=>f(!A),className:`p-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${A?"bg-zinc-900 border-neon-blue text-neon-blue shadow-[0_0_10px_#00E5FF]":"bg-black border-zinc-800 text-zinc-600"}`,children:["HINTS: ",A?"ON":"OFF"]})]}),I&&C.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[C.jsx("h3",{className:"text-neon-pink font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(255,31,191,0.5)]",children:"CURRENT GOALS"}),C.jsx("div",{className:"grid grid-cols-2 gap-1.5 py-1",children:T.map(w=>C.jsxs("div",{className:`px-2 py-1.5 rounded-small border flex items-center justify-between text-[10px] font-bold uppercase font-oswald tracking-tighter transition-all ${w.isSolved?"bg-neon-green/10 border-neon-green text-neon-green shadow-[0_0_5px_#00FF66]":"bg-black border-zinc-700 text-zinc-300"}`,children:[C.jsx("span",{className:"truncate mr-1",children:w.name}),w.isSolved&&C.jsx("span",{className:"text-xs",children:"✓"})]},w.name))})]}),C.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[C.jsx("h3",{className:"text-neon-aqua font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(0,255,255,0.5)]",children:"GAME MODES"}),C.jsx("div",{className:"grid grid-cols-3 gap-1.5 pt-1",children:Object.keys(uh).map(w=>{const ie=E.includes(w);return C.jsxs("button",{onClick:()=>d(w),className:`flex flex-col items-center justify-center p-1 rounded-medium border transition-all h-10 ${ie?"bg-zinc-900 border-neon-aqua text-white shadow-[0_0_8px_rgba(0,255,246,0.3)]":"bg-black border-zinc-800 text-zinc-600"}`,children:[C.jsx("span",{className:"font-bold font-oswald text-[9px] uppercase leading-none mb-0.5",children:uh[w]}),C.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${ie?"bg-neon-aqua shadow-[0_0_5px_#00FFF6]":"bg-zinc-800"}`})]},w)})})]}),C.jsxs("div",{className:"mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800 shrink-0",children:[C.jsxs("div",{className:`grid ${v?"grid-cols-3":"grid-cols-2"} gap-2`,children:[C.jsx("button",{onClick:h,className:"py-2 bg-zinc-900 border border-neon-yellow text-neon-yellow rounded-medium font-bold text-[9px] font-oswald uppercase shadow-[0_0_8px_rgba(249,255,0,0.2)]",children:"HOW TO PLAY"}),v&&C.jsx("button",{onClick:V,className:"py-2 bg-zinc-900 border border-zinc-600 text-zinc-400 rounded-medium font-bold text-[9px] font-oswald uppercase hover:text-white hover:border-white transition-all",children:"CONSENT"}),C.jsx("button",{onClick:M,className:"py-2 bg-zinc-900 border border-zinc-600 text-zinc-400 rounded-medium font-bold text-[9px] font-oswald uppercase hover:text-white hover:border-white transition-all",children:"ADMOB"})]}),C.jsx("button",{onClick:m,className:"w-full py-2 bg-black border border-neon-red text-neon-red rounded-medium font-bold text-[10px] font-oswald uppercase shadow-[0_0_5px_rgba(255,7,58,0.2)]",children:"RESET PROGRESS"}),C.jsx("button",{onClick:i,className:"w-full py-3.5 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_20px_white]",children:"RESUME PLAY"})]})]})})};function yp(n){if(typeof Proxy>"u")return n;const i=new Map,r=(...l)=>n(...l);return new Proxy(r,{get:(l,c)=>c==="create"?n:(i.has(c)||i.set(c,n(c)),i.get(c))})}function zs(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Wc=n=>Array.isArray(n);function vT(n,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==n.length)return!1;for(let l=0;l<r;l++)if(i[l]!==n[l])return!1;return!0}function $o(n){return typeof n=="string"||Array.isArray(n)}function ch(n){const i=[{},{}];return n==null||n.values.forEach((r,l)=>{i[0][l]=r.get(),i[1][l]=r.getVelocity()}),i}function ud(n,i,r,l){if(typeof i=="function"){const[c,E]=ch(l);i=i(r!==void 0?r:n.custom,c,E)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,E]=ch(l);i=i(r!==void 0?r:n.custom,c,E)}return i}function js(n,i,r){const l=n.getProps();return ud(l,i,r!==void 0?r:l.custom,n)}const cd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],dd=["initial",...cd],or=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qn=new Set(or),_a=n=>n*1e3,Ja=n=>n/1e3,Lp={type:"spring",stiffness:500,damping:25,restSpeed:10},Mp=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Dp={type:"keyframes",duration:.8},Pp={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},vp=(n,{keyframes:i})=>i.length>2?Dp:qn.has(n)?n.startsWith("scale")?Mp(i[1]):Lp:Pp;function Ed(n,i){return n?n[i]||n.default||n:void 0}const Bp={useManualTiming:!1},bp=n=>n!==null;function _s(n,{repeat:i,repeatType:r="loop"},l){const c=n.filter(bp),E=i&&r!=="loop"&&i%2===1?0:c.length-1;return!E||l===void 0?c[E]:l}const ta=n=>n;let BT=ta;function Hp(n){let i=new Set,r=new Set,l=!1,c=!1;const E=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function A(h){E.has(h)&&(f.schedule(h),n()),h(d)}const f={schedule:(h,m=!1,T=!1)=>{const L=T&&l?i:r;return m&&E.add(h),L.has(h)||L.add(h),h},cancel:h=>{r.delete(h),E.delete(h)},process:h=>{if(d=h,l){c=!0;return}l=!0,[i,r]=[r,i],i.forEach(A),i.clear(),l=!1,c&&(c=!1,f.process(h))}};return f}const Ms=["read","resolveKeyframes","update","preRender","render","postRender"],Gp=40;function bT(n,i){let r=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},E=()=>r=!0,d=Ms.reduce((I,V)=>(I[V]=Hp(E),I),{}),{read:A,resolveKeyframes:f,update:h,preRender:m,render:T,postRender:O}=d,L=()=>{const I=performance.now();r=!1,c.delta=l?1e3/60:Math.max(Math.min(I-c.timestamp,Gp),1),c.timestamp=I,c.isProcessing=!0,A.process(c),f.process(c),h.process(c),m.process(c),T.process(c),O.process(c),c.isProcessing=!1,r&&i&&(l=!1,n(L))},v=()=>{r=!0,l=!0,c.isProcessing||n(L)};return{schedule:Ms.reduce((I,V)=>{const w=d[V];return I[V]=(ie,ae=!1,Ee=!1)=>(r||v(),w.schedule(ie,ae,Ee)),I},{}),cancel:I=>{for(let V=0;V<Ms.length;V++)d[Ms[V]].cancel(I)},state:c,steps:d}}const{schedule:ut,cancel:Nn,state:Ut,steps:gc}=bT(typeof requestAnimationFrame<"u"?requestAnimationFrame:ta,!0),HT=(n,i,r)=>(((1-3*r+3*i)*n+(3*r-6*i))*n+3*i)*n,Up=1e-7,Fp=12;function wp(n,i,r,l,c){let E,d,A=0;do d=i+(r-i)/2,E=HT(d,l,c)-n,E>0?r=d:i=d;while(Math.abs(E)>Up&&++A<Fp);return d}function rr(n,i,r,l){if(n===i&&r===l)return ta;const c=E=>wp(E,0,1,n,r);return E=>E===0||E===1?E:HT(c(E),i,l)}const GT=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,UT=n=>i=>1-n(1-i),FT=rr(.33,1.53,.69,.99),Sd=UT(FT),wT=GT(Sd),kT=n=>(n*=2)<1?.5*Sd(n):.5*(2-Math.pow(2,-10*(n-1))),Ad=n=>1-Math.sin(Math.acos(n)),xT=UT(Ad),VT=GT(Ad),YT=n=>/^0[^.\s]+$/u.test(n);function kp(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||YT(n):!0}const KT=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),WT=n=>i=>typeof i=="string"&&i.startsWith(n),zT=WT("--"),xp=WT("var(--"),fd=n=>xp(n)?Vp.test(n.split("/*")[0].trim()):!1,Vp=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Yp=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Kp(n){const i=Yp.exec(n);if(!i)return[,];const[,r,l,c]=i;return[`--${r??l}`,c]}function jT(n,i,r=1){const[l,c]=Kp(n);if(!l)return;const E=window.getComputedStyle(i).getPropertyValue(l);if(E){const d=E.trim();return KT(d)?parseFloat(d):d}return fd(c)?jT(c,i,r+1):c}const Za=(n,i,r)=>r>i?i:r<n?n:r,Ji={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},er={...Ji,transform:n=>Za(0,1,n)},Ds={...Ji,default:1},sr=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),pn=sr("deg"),ya=sr("%"),Ie=sr("px"),Wp=sr("vh"),zp=sr("vw"),dh={...ya,parse:n=>ya.parse(n)/100,transform:n=>ya.transform(n*100)},jp=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Eh=n=>n===Ji||n===Ie,Sh=(n,i)=>parseFloat(n.split(", ")[i]),Ah=(n,i)=>(r,{transform:l})=>{if(l==="none"||!l)return 0;const c=l.match(/^matrix3d\((.+)\)$/u);if(c)return Sh(c[1],i);{const E=l.match(/^matrix\((.+)\)$/u);return E?Sh(E[1],n):0}},_p=new Set(["x","y","z"]),Jp=or.filter(n=>!_p.has(n));function Zp(n){const i=[];return Jp.forEach(r=>{const l=n.getValue(r);l!==void 0&&(i.push([r,l.get()]),l.set(r.startsWith("scale")?1:0))}),i}const Wi={width:({x:n},{paddingLeft:i="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(i)-parseFloat(r),height:({y:n},{paddingTop:i="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(i)-parseFloat(r),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:Ah(4,13),y:Ah(5,14)};Wi.translateX=Wi.x;Wi.translateY=Wi.y;const _T=n=>i=>i.test(n),Xp={test:n=>n==="auto",parse:n=>n},JT=[Ji,Ie,ya,pn,zp,Wp,Xp],fh=n=>JT.find(_T(n)),Xn=new Set;let zc=!1,jc=!1;function ZT(){if(jc){const n=Array.from(Xn).filter(l=>l.needsMeasurement),i=new Set(n.map(l=>l.element)),r=new Map;i.forEach(l=>{const c=Zp(l);c.length&&(r.set(l,c),l.render())}),n.forEach(l=>l.measureInitialState()),i.forEach(l=>{l.render();const c=r.get(l);c&&c.forEach(([E,d])=>{var A;(A=l.getValue(E))===null||A===void 0||A.set(d)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}jc=!1,zc=!1,Xn.forEach(n=>n.complete()),Xn.clear()}function XT(){Xn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(jc=!0)})}function qp(){XT(),ZT()}class hd{constructor(i,r,l,c,E,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=l,this.motionValue=c,this.element=E,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Xn.add(this),zc||(zc=!0,ut.read(XT),ut.resolveKeyframes(ZT))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:l,motionValue:c}=this;for(let E=0;E<i.length;E++)if(i[E]===null)if(E===0){const d=c==null?void 0:c.get(),A=i[i.length-1];if(d!==void 0)i[0]=d;else if(l&&r){const f=l.readValue(r,A);f!=null&&(i[0]=f)}i[0]===void 0&&(i[0]=A),c&&d===void 0&&c.set(i[0])}else i[E]=i[E-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Xn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Xn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Zo=n=>Math.round(n*1e5)/1e5,Td=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Qp(n){return n==null}const $p=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,md=(n,i)=>r=>!!(typeof r=="string"&&$p.test(r)&&r.startsWith(n)||i&&!Qp(r)&&Object.prototype.hasOwnProperty.call(r,i)),qT=(n,i,r)=>l=>{if(typeof l!="string")return l;const[c,E,d,A]=l.match(Td);return{[n]:parseFloat(c),[i]:parseFloat(E),[r]:parseFloat(d),alpha:A!==void 0?parseFloat(A):1}},eg=n=>Za(0,255,n),Nc={...Ji,transform:n=>Math.round(eg(n))},Zn={test:md("rgb","red"),parse:qT("red","green","blue"),transform:({red:n,green:i,blue:r,alpha:l=1})=>"rgba("+Nc.transform(n)+", "+Nc.transform(i)+", "+Nc.transform(r)+", "+Zo(er.transform(l))+")"};function tg(n){let i="",r="",l="",c="";return n.length>5?(i=n.substring(1,3),r=n.substring(3,5),l=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),r=n.substring(2,3),l=n.substring(3,4),c=n.substring(4,5),i+=i,r+=r,l+=l,c+=c),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const _c={test:md("#"),parse:tg,transform:Zn.transform},wi={test:md("hsl","hue"),parse:qT("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:r,alpha:l=1})=>"hsla("+Math.round(n)+", "+ya.transform(Zo(i))+", "+ya.transform(Zo(r))+", "+Zo(er.transform(l))+")"},wt={test:n=>Zn.test(n)||_c.test(n)||wi.test(n),parse:n=>Zn.test(n)?Zn.parse(n):wi.test(n)?wi.parse(n):_c.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Zn.transform(n):wi.transform(n)},ag=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ng(n){var i,r;return isNaN(n)&&typeof n=="string"&&(((i=n.match(Td))===null||i===void 0?void 0:i.length)||0)+(((r=n.match(ag))===null||r===void 0?void 0:r.length)||0)>0}const QT="number",$T="color",ig="var",og="var(",hh="${}",rg=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function tr(n){const i=n.toString(),r=[],l={color:[],number:[],var:[]},c=[];let E=0;const A=i.replace(rg,f=>(wt.test(f)?(l.color.push(E),c.push($T),r.push(wt.parse(f))):f.startsWith(og)?(l.var.push(E),c.push(ig),r.push(f)):(l.number.push(E),c.push(QT),r.push(parseFloat(f))),++E,hh)).split(hh);return{values:r,split:A,indexes:l,types:c}}function em(n){return tr(n).values}function tm(n){const{split:i,types:r}=tr(n),l=i.length;return c=>{let E="";for(let d=0;d<l;d++)if(E+=i[d],c[d]!==void 0){const A=r[d];A===QT?E+=Zo(c[d]):A===$T?E+=wt.transform(c[d]):E+=c[d]}return E}}const sg=n=>typeof n=="number"?0:n;function lg(n){const i=em(n);return tm(n)(i.map(sg))}const In={test:ng,parse:em,createTransformer:tm,getAnimatableNone:lg},ug=new Set(["brightness","contrast","saturate","opacity"]);function cg(n){const[i,r]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[l]=r.match(Td)||[];if(!l)return n;const c=r.replace(l,"");let E=ug.has(i)?1:0;return l!==r&&(E*=100),i+"("+E+c+")"}const dg=/\b([a-z-]*)\(.*?\)/gu,Jc={...In,getAnimatableNone:n=>{const i=n.match(dg);return i?i.map(cg).join(" "):n}},Eg={borderWidth:Ie,borderTopWidth:Ie,borderRightWidth:Ie,borderBottomWidth:Ie,borderLeftWidth:Ie,borderRadius:Ie,radius:Ie,borderTopLeftRadius:Ie,borderTopRightRadius:Ie,borderBottomRightRadius:Ie,borderBottomLeftRadius:Ie,width:Ie,maxWidth:Ie,height:Ie,maxHeight:Ie,top:Ie,right:Ie,bottom:Ie,left:Ie,padding:Ie,paddingTop:Ie,paddingRight:Ie,paddingBottom:Ie,paddingLeft:Ie,margin:Ie,marginTop:Ie,marginRight:Ie,marginBottom:Ie,marginLeft:Ie,backgroundPositionX:Ie,backgroundPositionY:Ie},Sg={rotate:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scale:Ds,scaleX:Ds,scaleY:Ds,scaleZ:Ds,skew:pn,skewX:pn,skewY:pn,distance:Ie,translateX:Ie,translateY:Ie,translateZ:Ie,x:Ie,y:Ie,z:Ie,perspective:Ie,transformPerspective:Ie,opacity:er,originX:dh,originY:dh,originZ:Ie},Th={...Ji,transform:Math.round},Rd={...Eg,...Sg,zIndex:Th,size:Ie,fillOpacity:er,strokeOpacity:er,numOctaves:Th},Ag={...Rd,color:wt,backgroundColor:wt,outlineColor:wt,fill:wt,stroke:wt,borderColor:wt,borderTopColor:wt,borderRightColor:wt,borderBottomColor:wt,borderLeftColor:wt,filter:Jc,WebkitFilter:Jc},Od=n=>Ag[n];function am(n,i){let r=Od(n);return r!==Jc&&(r=In),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const fg=new Set(["auto","none","0"]);function hg(n,i,r){let l=0,c;for(;l<n.length&&!c;){const E=n[l];typeof E=="string"&&!fg.has(E)&&tr(E).values.length&&(c=n[l]),l++}if(c&&r)for(const E of i)n[E]=am(r,c)}class nm extends hd{constructor(i,r,l,c,E){super(i,r,l,c,E,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:l}=this;if(!r||!r.current)return;super.readKeyframes();for(let f=0;f<i.length;f++){let h=i[f];if(typeof h=="string"&&(h=h.trim(),fd(h))){const m=jT(h,r.current);m!==void 0&&(i[f]=m),f===i.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!jp.has(l)||i.length!==2)return;const[c,E]=i,d=fh(c),A=fh(E);if(d!==A)if(Eh(d)&&Eh(A))for(let f=0;f<i.length;f++){const h=i[f];typeof h=="string"&&(i[f]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,l=[];for(let c=0;c<i.length;c++)kp(i[c])&&l.push(c);l.length&&hg(i,l,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:l}=this;if(!i||!i.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Wi[l](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&i.getValue(l,c).jump(c,!1)}measureEndState(){var i;const{element:r,name:l,unresolvedKeyframes:c}=this;if(!r||!r.current)return;const E=r.getValue(l);E&&E.jump(this.measuredOrigin,!1);const d=c.length-1,A=c[d];c[d]=Wi[l](r.measureViewportBox(),window.getComputedStyle(r.current)),A!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=A),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([f,h])=>{r.getValue(f).set(h)}),this.resolveNoneKeyframes()}}function Cd(n){return typeof n=="function"}let bs;function Tg(){bs=void 0}const La={now:()=>(bs===void 0&&La.set(Ut.isProcessing||Bp.useManualTiming?Ut.timestamp:performance.now()),bs),set:n=>{bs=n,queueMicrotask(Tg)}},mh=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(In.test(n)||n==="0")&&!n.startsWith("url("));function mg(n){const i=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==i)return!0}function Rg(n,i,r,l){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const E=n[n.length-1],d=mh(c,i),A=mh(E,i);return!d||!A?!1:mg(n)||(r==="spring"||Cd(r))&&l}const Og=40;class im{constructor({autoplay:i=!0,delay:r=0,type:l="keyframes",repeat:c=0,repeatDelay:E=0,repeatType:d="loop",...A}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=La.now(),this.options={autoplay:i,delay:r,type:l,repeat:c,repeatDelay:E,repeatType:d,...A},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Og?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&qp(),this._resolved}onKeyframesResolved(i,r){this.resolvedAt=La.now(),this.hasAttemptedResolve=!0;const{name:l,type:c,velocity:E,delay:d,onComplete:A,onUpdate:f,isGenerator:h}=this.options;if(!h&&!Rg(i,l,c,E))if(d)this.options.duration=0;else{f==null||f(_s(i,this.options,r)),A==null||A(),this.resolveFinishedPromise();return}const m=this.initPlayback(i,r);m!==!1&&(this._resolved={keyframes:i,finalKeyframe:r,...m},this.onPostResolved())}onPostResolved(){}then(i,r){return this.currentFinishedPromise.then(i,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const zi=(n,i,r)=>{const l=i-n;return l===0?1:(r-n)/l},om=(n,i,r=10)=>{let l="";const c=Math.max(Math.round(i/r),2);for(let E=0;E<c;E++)l+=n(zi(0,c-1,E))+", ";return`linear(${l.substring(0,l.length-2)})`};function rm(n,i){return i?n*(1e3/i):0}const Cg=5;function sm(n,i,r){const l=Math.max(i-Cg,0);return rm(r-n(l),i-l)}const ft={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ic=.001;function pg({duration:n=ft.duration,bounce:i=ft.bounce,velocity:r=ft.velocity,mass:l=ft.mass}){let c,E,d=1-i;d=Za(ft.minDamping,ft.maxDamping,d),n=Za(ft.minDuration,ft.maxDuration,Ja(n)),d<1?(c=h=>{const m=h*d,T=m*n,O=m-r,L=Zc(h,d),v=Math.exp(-T);return Ic-O/L*v},E=h=>{const T=h*d*n,O=T*r+r,L=Math.pow(d,2)*Math.pow(h,2)*n,v=Math.exp(-T),F=Zc(Math.pow(h,2),d);return(-c(h)+Ic>0?-1:1)*((O-L)*v)/F}):(c=h=>{const m=Math.exp(-h*n),T=(h-r)*n+1;return-Ic+m*T},E=h=>{const m=Math.exp(-h*n),T=(r-h)*(n*n);return m*T});const A=5/n,f=Ng(c,E,A);if(n=_a(n),isNaN(f))return{stiffness:ft.stiffness,damping:ft.damping,duration:n};{const h=Math.pow(f,2)*l;return{stiffness:h,damping:d*2*Math.sqrt(l*h),duration:n}}}const gg=12;function Ng(n,i,r){let l=r;for(let c=1;c<gg;c++)l=l-n(l)/i(l);return l}function Zc(n,i){return n*Math.sqrt(1-i*i)}const Xc=2e4;function lm(n){let i=0;const r=50;let l=n.next(i);for(;!l.done&&i<Xc;)i+=r,l=n.next(i);return i>=Xc?1/0:i}const Ig=["duration","bounce"],yg=["stiffness","damping","mass"];function Rh(n,i){return i.some(r=>n[r]!==void 0)}function Lg(n){let i={velocity:ft.velocity,stiffness:ft.stiffness,damping:ft.damping,mass:ft.mass,isResolvedFromDuration:!1,...n};if(!Rh(n,yg)&&Rh(n,Ig))if(n.visualDuration){const r=n.visualDuration,l=2*Math.PI/(r*1.2),c=l*l,E=2*Za(.05,1,1-n.bounce)*Math.sqrt(c);i={...i,mass:ft.mass,stiffness:c,damping:E}}else{const r=pg(n);i={...i,...r,mass:ft.mass},i.isResolvedFromDuration=!0}return i}function um(n=ft.visualDuration,i=ft.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:l,restDelta:c}=r;const E=r.keyframes[0],d=r.keyframes[r.keyframes.length-1],A={done:!1,value:E},{stiffness:f,damping:h,mass:m,duration:T,velocity:O,isResolvedFromDuration:L}=Lg({...r,velocity:-Ja(r.velocity||0)}),v=O||0,F=h/(2*Math.sqrt(f*m)),M=d-E,I=Ja(Math.sqrt(f/m)),V=Math.abs(M)<5;l||(l=V?ft.restSpeed.granular:ft.restSpeed.default),c||(c=V?ft.restDelta.granular:ft.restDelta.default);let w;if(F<1){const ae=Zc(I,F);w=Ee=>{const te=Math.exp(-F*I*Ee);return d-te*((v+F*I*M)/ae*Math.sin(ae*Ee)+M*Math.cos(ae*Ee))}}else if(F===1)w=ae=>d-Math.exp(-I*ae)*(M+(v+I*M)*ae);else{const ae=I*Math.sqrt(F*F-1);w=Ee=>{const te=Math.exp(-F*I*Ee),re=Math.min(ae*Ee,300);return d-te*((v+F*I*M)*Math.sinh(re)+ae*M*Math.cosh(re))/ae}}const ie={calculatedDuration:L&&T||null,next:ae=>{const Ee=w(ae);if(L)A.done=ae>=T;else{let te=0;F<1&&(te=ae===0?_a(v):sm(w,ae,Ee));const re=Math.abs(te)<=l,Te=Math.abs(d-Ee)<=c;A.done=re&&Te}return A.value=A.done?d:Ee,A},toString:()=>{const ae=Math.min(lm(ie),Xc),Ee=om(te=>ie.next(ae*te).value,ae,30);return ae+"ms "+Ee}};return ie}function Oh({keyframes:n,velocity:i=0,power:r=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:E=500,modifyTarget:d,min:A,max:f,restDelta:h=.5,restSpeed:m}){const T=n[0],O={done:!1,value:T},L=re=>A!==void 0&&re<A||f!==void 0&&re>f,v=re=>A===void 0?f:f===void 0||Math.abs(A-re)<Math.abs(f-re)?A:f;let F=r*i;const M=T+F,I=d===void 0?M:d(M);I!==M&&(F=I-T);const V=re=>-F*Math.exp(-re/l),w=re=>I+V(re),ie=re=>{const Te=V(re),De=w(re);O.done=Math.abs(Te)<=h,O.value=O.done?I:De};let ae,Ee;const te=re=>{L(O.value)&&(ae=re,Ee=um({keyframes:[O.value,v(O.value)],velocity:sm(w,re,O.value),damping:c,stiffness:E,restDelta:h,restSpeed:m}))};return te(0),{calculatedDuration:null,next:re=>{let Te=!1;return!Ee&&ae===void 0&&(Te=!0,ie(re),te(re)),ae!==void 0&&re>=ae?Ee.next(re-ae):(!Te&&ie(re),O)}}}const Mg=rr(.42,0,1,1),Dg=rr(0,0,.58,1),cm=rr(.42,0,.58,1),Pg=n=>Array.isArray(n)&&typeof n[0]!="number",pd=n=>Array.isArray(n)&&typeof n[0]=="number",vg={linear:ta,easeIn:Mg,easeInOut:cm,easeOut:Dg,circIn:Ad,circInOut:VT,circOut:xT,backIn:Sd,backInOut:wT,backOut:FT,anticipate:kT},Ch=n=>{if(pd(n)){BT(n.length===4);const[i,r,l,c]=n;return rr(i,r,l,c)}else if(typeof n=="string")return vg[n];return n},Bg=(n,i)=>r=>i(n(r)),lr=(...n)=>n.reduce(Bg),Et=(n,i,r)=>n+(i-n)*r;function yc(n,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(i-n)*6*r:r<1/2?i:r<2/3?n+(i-n)*(2/3-r)*6:n}function bg({hue:n,saturation:i,lightness:r,alpha:l}){n/=360,i/=100,r/=100;let c=0,E=0,d=0;if(!i)c=E=d=r;else{const A=r<.5?r*(1+i):r+i-r*i,f=2*r-A;c=yc(f,A,n+1/3),E=yc(f,A,n),d=yc(f,A,n-1/3)}return{red:Math.round(c*255),green:Math.round(E*255),blue:Math.round(d*255),alpha:l}}function ws(n,i){return r=>r>0?i:n}const Lc=(n,i,r)=>{const l=n*n,c=r*(i*i-l)+l;return c<0?0:Math.sqrt(c)},Hg=[_c,Zn,wi],Gg=n=>Hg.find(i=>i.test(n));function ph(n){const i=Gg(n);if(!i)return!1;let r=i.parse(n);return i===wi&&(r=bg(r)),r}const gh=(n,i)=>{const r=ph(n),l=ph(i);if(!r||!l)return ws(n,i);const c={...r};return E=>(c.red=Lc(r.red,l.red,E),c.green=Lc(r.green,l.green,E),c.blue=Lc(r.blue,l.blue,E),c.alpha=Et(r.alpha,l.alpha,E),Zn.transform(c))},qc=new Set(["none","hidden"]);function Ug(n,i){return qc.has(n)?r=>r<=0?n:i:r=>r>=1?i:n}function Fg(n,i){return r=>Et(n,i,r)}function gd(n){return typeof n=="number"?Fg:typeof n=="string"?fd(n)?ws:wt.test(n)?gh:xg:Array.isArray(n)?dm:typeof n=="object"?wt.test(n)?gh:wg:ws}function dm(n,i){const r=[...n],l=r.length,c=n.map((E,d)=>gd(E)(E,i[d]));return E=>{for(let d=0;d<l;d++)r[d]=c[d](E);return r}}function wg(n,i){const r={...n,...i},l={};for(const c in r)n[c]!==void 0&&i[c]!==void 0&&(l[c]=gd(n[c])(n[c],i[c]));return c=>{for(const E in l)r[E]=l[E](c);return r}}function kg(n,i){var r;const l=[],c={color:0,var:0,number:0};for(let E=0;E<i.values.length;E++){const d=i.types[E],A=n.indexes[d][c[d]],f=(r=n.values[A])!==null&&r!==void 0?r:0;l[E]=f,c[d]++}return l}const xg=(n,i)=>{const r=In.createTransformer(i),l=tr(n),c=tr(i);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?qc.has(n)&&!c.values.length||qc.has(i)&&!l.values.length?Ug(n,i):lr(dm(kg(l,c),c.values),r):ws(n,i)};function Em(n,i,r){return typeof n=="number"&&typeof i=="number"&&typeof r=="number"?Et(n,i,r):gd(n)(n,i)}function Vg(n,i,r){const l=[],c=r||Em,E=n.length-1;for(let d=0;d<E;d++){let A=c(n[d],n[d+1]);if(i){const f=Array.isArray(i)?i[d]||ta:i;A=lr(f,A)}l.push(A)}return l}function Yg(n,i,{clamp:r=!0,ease:l,mixer:c}={}){const E=n.length;if(BT(E===i.length),E===1)return()=>i[0];if(E===2&&n[0]===n[1])return()=>i[1];n[0]>n[E-1]&&(n=[...n].reverse(),i=[...i].reverse());const d=Vg(i,l,c),A=d.length,f=h=>{let m=0;if(A>1)for(;m<n.length-2&&!(h<n[m+1]);m++);const T=zi(n[m],n[m+1],h);return d[m](T)};return r?h=>f(Za(n[0],n[E-1],h)):f}function Kg(n,i){const r=n[n.length-1];for(let l=1;l<=i;l++){const c=zi(0,i,l);n.push(Et(r,1,c))}}function Wg(n){const i=[0];return Kg(i,n.length-1),i}function zg(n,i){return n.map(r=>r*i)}function jg(n,i){return n.map(()=>i||cm).splice(0,n.length-1)}function ks({duration:n=300,keyframes:i,times:r,ease:l="easeInOut"}){const c=Pg(l)?l.map(Ch):Ch(l),E={done:!1,value:i[0]},d=zg(r&&r.length===i.length?r:Wg(i),n),A=Yg(d,i,{ease:Array.isArray(c)?c:jg(i,c)});return{calculatedDuration:n,next:f=>(E.value=A(f),E.done=f>=n,E)}}const _g=n=>{const i=({timestamp:r})=>n(r);return{start:()=>ut.update(i,!0),stop:()=>Nn(i),now:()=>Ut.isProcessing?Ut.timestamp:La.now()}},Jg={decay:Oh,inertia:Oh,tween:ks,keyframes:ks,spring:um},Zg=n=>n/100;class Nd extends im{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:r,motionValue:l,element:c,keyframes:E}=this.options,d=(c==null?void 0:c.KeyframeResolver)||hd,A=(f,h)=>this.onKeyframesResolved(f,h);this.resolver=new d(E,A,r,l,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:r="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:E,velocity:d=0}=this.options,A=Cd(r)?r:Jg[r]||ks;let f,h;A!==ks&&typeof i[0]!="number"&&(f=lr(Zg,Em(i[0],i[1])),i=[0,100]);const m=A({...this.options,keyframes:i});E==="mirror"&&(h=A({...this.options,keyframes:[...i].reverse(),velocity:-d})),m.calculatedDuration===null&&(m.calculatedDuration=lm(m));const{calculatedDuration:T}=m,O=T+c,L=O*(l+1)-c;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:f,calculatedDuration:T,resolvedDuration:O,totalDuration:L}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,r=!1){const{resolved:l}=this;if(!l){const{keyframes:re}=this.options;return{done:!0,value:re[re.length-1]}}const{finalKeyframe:c,generator:E,mirroredGenerator:d,mapPercentToKeyframes:A,keyframes:f,calculatedDuration:h,totalDuration:m,resolvedDuration:T}=l;if(this.startTime===null)return E.next(0);const{delay:O,repeat:L,repeatType:v,repeatDelay:F,onUpdate:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-m/this.speed,this.startTime)),r?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const I=this.currentTime-O*(this.speed>=0?1:-1),V=this.speed>=0?I<0:I>m;this.currentTime=Math.max(I,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let w=this.currentTime,ie=E;if(L){const re=Math.min(this.currentTime,m)/T;let Te=Math.floor(re),De=re%1;!De&&re>=1&&(De=1),De===1&&Te--,Te=Math.min(Te,L+1),!!(Te%2)&&(v==="reverse"?(De=1-De,F&&(De-=F/T)):v==="mirror"&&(ie=d)),w=Za(0,1,De)*T}const ae=V?{done:!1,value:f[0]}:ie.next(w);A&&(ae.value=A(ae.value));let{done:Ee}=ae;!V&&h!==null&&(Ee=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const te=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Ee);return te&&c!==void 0&&(ae.value=_s(f,this.options,c)),M&&M(ae.value),te&&this.finish(),ae}get duration(){const{resolved:i}=this;return i?Ja(i.calculatedDuration):0}get time(){return Ja(this.currentTime)}set time(i){i=_a(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=Ja(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=_g,onPlay:r,startTime:l}=this.options;this.driver||(this.driver=i(E=>this.tick(E))),r&&r();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=l??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const Xg=new Set(["opacity","clipPath","filter","transform"]);function Id(n){let i;return()=>(i===void 0&&(i=n()),i)}const qg={linearEasing:void 0};function Qg(n,i){const r=Id(n);return()=>{var l;return(l=qg[i])!==null&&l!==void 0?l:r()}}const xs=Qg(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Sm(n){return!!(typeof n=="function"&&xs()||!n||typeof n=="string"&&(n in Qc||xs())||pd(n)||Array.isArray(n)&&n.every(Sm))}const jo=([n,i,r,l])=>`cubic-bezier(${n}, ${i}, ${r}, ${l})`,Qc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:jo([0,.65,.55,1]),circOut:jo([.55,0,1,.45]),backIn:jo([.31,.01,.66,-.59]),backOut:jo([.33,1.53,.69,.99])};function Am(n,i){if(n)return typeof n=="function"&&xs()?om(n,i):pd(n)?jo(n):Array.isArray(n)?n.map(r=>Am(r,i)||Qc.easeOut):Qc[n]}function $g(n,i,r,{delay:l=0,duration:c=300,repeat:E=0,repeatType:d="loop",ease:A="easeInOut",times:f}={}){const h={[i]:r};f&&(h.offset=f);const m=Am(A,c);return Array.isArray(m)&&(h.easing=m),n.animate(h,{delay:l,duration:c,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:E+1,direction:d==="reverse"?"alternate":"normal"})}function Nh(n,i){n.timeline=i,n.onfinish=null}const eN=Id(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Vs=10,tN=2e4;function aN(n){return Cd(n.type)||n.type==="spring"||!Sm(n.ease)}function nN(n,i){const r=new Nd({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let l={done:!1,value:n[0]};const c=[];let E=0;for(;!l.done&&E<tN;)l=r.sample(E),c.push(l.value),E+=Vs;return{times:void 0,keyframes:c,duration:E-Vs,ease:"linear"}}const fm={anticipate:kT,backInOut:wT,circInOut:VT};function iN(n){return n in fm}class Ih extends im{constructor(i){super(i);const{name:r,motionValue:l,element:c,keyframes:E}=this.options;this.resolver=new nm(E,(d,A)=>this.onKeyframesResolved(d,A),r,l,c),this.resolver.scheduleResolve()}initPlayback(i,r){var l;let{duration:c=300,times:E,ease:d,type:A,motionValue:f,name:h,startTime:m}=this.options;if(!(!((l=f.owner)===null||l===void 0)&&l.current))return!1;if(typeof d=="string"&&xs()&&iN(d)&&(d=fm[d]),aN(this.options)){const{onComplete:O,onUpdate:L,motionValue:v,element:F,...M}=this.options,I=nN(i,M);i=I.keyframes,i.length===1&&(i[1]=i[0]),c=I.duration,E=I.times,d=I.ease,A="keyframes"}const T=$g(f.owner.current,h,i,{...this.options,duration:c,times:E,ease:d});return T.startTime=m??this.calcStartTime(),this.pendingTimeline?(Nh(T,this.pendingTimeline),this.pendingTimeline=void 0):T.onfinish=()=>{const{onComplete:O}=this.options;f.set(_s(i,this.options,r)),O&&O(),this.cancel(),this.resolveFinishedPromise()},{animation:T,duration:c,times:E,type:A,ease:d,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:r}=i;return Ja(r)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:r}=i;return Ja(r.currentTime||0)}set time(i){const{resolved:r}=this;if(!r)return;const{animation:l}=r;l.currentTime=_a(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:r}=i;return r.playbackRate}set speed(i){const{resolved:r}=this;if(!r)return;const{animation:l}=r;l.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:r}=i;return r.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:r}=i;return r.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:r}=this;if(!r)return ta;const{animation:l}=r;Nh(l,i)}return ta}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:r}=i;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:r}=i;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:r,keyframes:l,duration:c,type:E,ease:d,times:A}=i;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:T,element:O,...L}=this.options,v=new Nd({...L,keyframes:l,duration:c,type:E,ease:d,times:A,isGenerator:!0}),F=_a(this.time);h.setWithVelocity(v.sample(F-Vs).value,v.sample(F).value,Vs)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:r,name:l,repeatDelay:c,repeatType:E,damping:d,type:A}=i;return eN()&&l&&Xg.has(l)&&r&&r.owner&&r.owner.current instanceof HTMLElement&&!r.owner.getProps().onUpdate&&!c&&E!=="mirror"&&d!==0&&A!=="inertia"}}const oN=Id(()=>window.ScrollTimeline!==void 0);class rN{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}then(i,r){return Promise.all(this.animations).then(i).catch(r)}getAll(i){return this.animations[0][i]}setAll(i,r){for(let l=0;l<this.animations.length;l++)this.animations[l][i]=r}attachTimeline(i,r){const l=this.animations.map(c=>oN()&&c.attachTimeline?c.attachTimeline(i):r(c));return()=>{l.forEach((c,E)=>{c&&c(),this.animations[E].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let r=0;r<this.animations.length;r++)i=Math.max(i,this.animations[r].duration);return i}runAll(i){this.animations.forEach(r=>r[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function sN({when:n,delay:i,delayChildren:r,staggerChildren:l,staggerDirection:c,repeat:E,repeatType:d,repeatDelay:A,from:f,elapsed:h,...m}){return!!Object.keys(m).length}const yd=(n,i,r,l={},c,E)=>d=>{const A=Ed(l,n)||{},f=A.delay||l.delay||0;let{elapsed:h=0}=l;h=h-_a(f);let m={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...A,delay:-h,onUpdate:O=>{i.set(O),A.onUpdate&&A.onUpdate(O)},onComplete:()=>{d(),A.onComplete&&A.onComplete()},name:n,motionValue:i,element:E?void 0:c};sN(A)||(m={...m,...vp(n,m)}),m.duration&&(m.duration=_a(m.duration)),m.repeatDelay&&(m.repeatDelay=_a(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let T=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(T=!0)),T&&!E&&i.get()!==void 0){const O=_s(m.keyframes,A);if(O!==void 0)return ut.update(()=>{m.onUpdate(O),m.onComplete()}),new rN([])}return!E&&Ih.supports(m)?new Ih(m):new Nd(m)},lN=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),uN=n=>Wc(n)?n[n.length-1]||0:n;function Ld(n,i){n.indexOf(i)===-1&&n.push(i)}function Md(n,i){const r=n.indexOf(i);r>-1&&n.splice(r,1)}class Dd{constructor(){this.subscriptions=[]}add(i){return Ld(this.subscriptions,i),()=>Md(this.subscriptions,i)}notify(i,r,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,r,l);else for(let E=0;E<c;E++){const d=this.subscriptions[E];d&&d(i,r,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const yh=30,cN=n=>!isNaN(parseFloat(n));class dN{constructor(i,r={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(l,c=!0)=>{const E=La.now();this.updatedAt!==E&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=La.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=cN(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new Dd);const l=this.events[i].add(r);return i==="change"?()=>{l(),ut.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i,r=!0){!r||!this.passiveEffect?this.updateAndNotify(i,r):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,r,l){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-l}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=La.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>yh)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,yh);return rm(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ar(n,i){return new dN(n,i)}function EN(n,i,r){n.hasValue(i)?n.getValue(i).set(r):n.addValue(i,ar(r))}function SN(n,i){const r=js(n,i);let{transitionEnd:l={},transition:c={},...E}=r||{};E={...E,...l};for(const d in E){const A=uN(E[d]);EN(n,d,A)}}const Pd=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),AN="framerAppearId",hm="data-"+Pd(AN);function Tm(n){return n.props[hm]}const kt=n=>!!(n&&n.getVelocity);function fN(n){return!!(kt(n)&&n.add)}function $c(n,i){const r=n.getValue("willChange");if(fN(r))return r.add(i)}function hN({protectedKeys:n,needsAnimating:i},r){const l=n.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,l}function mm(n,i,{delay:r=0,transitionOverride:l,type:c}={}){var E;let{transition:d=n.getDefaultTransition(),transitionEnd:A,...f}=i;l&&(d=l);const h=[],m=c&&n.animationState&&n.animationState.getState()[c];for(const T in f){const O=n.getValue(T,(E=n.latestValues[T])!==null&&E!==void 0?E:null),L=f[T];if(L===void 0||m&&hN(m,T))continue;const v={delay:r,...Ed(d||{},T)};let F=!1;if(window.MotionHandoffAnimation){const I=Tm(n);if(I){const V=window.MotionHandoffAnimation(I,T,ut);V!==null&&(v.startTime=V,F=!0)}}$c(n,T),O.start(yd(T,O,L,n.shouldReduceMotion&&qn.has(T)?{type:!1}:v,n,F));const M=O.animation;M&&h.push(M)}return A&&Promise.all(h).then(()=>{ut.update(()=>{A&&SN(n,A)})}),h}function ed(n,i,r={}){var l;const c=js(n,i,r.type==="exit"?(l=n.presenceContext)===null||l===void 0?void 0:l.custom:void 0);let{transition:E=n.getDefaultTransition()||{}}=c||{};r.transitionOverride&&(E=r.transitionOverride);const d=c?()=>Promise.all(mm(n,c,r)):()=>Promise.resolve(),A=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:T,staggerDirection:O}=E;return TN(n,i,m+h,T,O,r)}:()=>Promise.resolve(),{when:f}=E;if(f){const[h,m]=f==="beforeChildren"?[d,A]:[A,d];return h().then(()=>m())}else return Promise.all([d(),A(r.delay)])}function TN(n,i,r=0,l=0,c=1,E){const d=[],A=(n.variantChildren.size-1)*l,f=c===1?(h=0)=>h*l:(h=0)=>A-h*l;return Array.from(n.variantChildren).sort(mN).forEach((h,m)=>{h.notify("AnimationStart",i),d.push(ed(h,i,{...E,delay:r+f(m)}).then(()=>h.notify("AnimationComplete",i)))}),Promise.all(d)}function mN(n,i){return n.sortNodePosition(i)}function RN(n,i,r={}){n.notify("AnimationStart",i);let l;if(Array.isArray(i)){const c=i.map(E=>ed(n,E,r));l=Promise.all(c)}else if(typeof i=="string")l=ed(n,i,r);else{const c=typeof i=="function"?js(n,i,r.custom):i;l=Promise.all(mm(n,c,r))}return l.then(()=>{n.notify("AnimationComplete",i)})}const ON=dd.length;function Rm(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?Rm(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const i={};for(let r=0;r<ON;r++){const l=dd[r],c=n.props[l];($o(c)||c===!1)&&(i[l]=c)}return i}const CN=[...cd].reverse(),pN=cd.length;function gN(n){return i=>Promise.all(i.map(({animation:r,options:l})=>RN(n,r,l)))}function NN(n){let i=gN(n),r=Lh(),l=!0;const c=f=>(h,m)=>{var T;const O=js(n,m,f==="exit"?(T=n.presenceContext)===null||T===void 0?void 0:T.custom:void 0);if(O){const{transition:L,transitionEnd:v,...F}=O;h={...h,...F,...v}}return h};function E(f){i=f(n)}function d(f){const{props:h}=n,m=Rm(n.parent)||{},T=[],O=new Set;let L={},v=1/0;for(let M=0;M<pN;M++){const I=CN[M],V=r[I],w=h[I]!==void 0?h[I]:m[I],ie=$o(w),ae=I===f?V.isActive:null;ae===!1&&(v=M);let Ee=w===m[I]&&w!==h[I]&&ie;if(Ee&&l&&n.manuallyAnimateOnMount&&(Ee=!1),V.protectedKeys={...L},!V.isActive&&ae===null||!w&&!V.prevProp||zs(w)||typeof w=="boolean")continue;const te=IN(V.prevProp,w);let re=te||I===f&&V.isActive&&!Ee&&ie||M>v&&ie,Te=!1;const De=Array.isArray(w)?w:[w];let Pe=De.reduce(c(I),{});ae===!1&&(Pe={});const{prevResolvedValues:Ge={}}=V,ve={...Ge,...Pe},We=q=>{re=!0,O.has(q)&&(Te=!0,O.delete(q)),V.needsAnimating[q]=!0;const ce=n.getValue(q);ce&&(ce.liveStyle=!1)};for(const q in ve){const ce=Pe[q],oe=Ge[q];if(L.hasOwnProperty(q))continue;let se=!1;Wc(ce)&&Wc(oe)?se=!vT(ce,oe):se=ce!==oe,se?ce!=null?We(q):O.add(q):ce!==void 0&&O.has(q)?We(q):V.protectedKeys[q]=!0}V.prevProp=w,V.prevResolvedValues=Pe,V.isActive&&(L={...L,...Pe}),l&&n.blockInitialAnimation&&(re=!1),re&&(!(Ee&&te)||Te)&&T.push(...De.map(q=>({animation:q,options:{type:I}})))}if(O.size){const M={};O.forEach(I=>{const V=n.getBaseTarget(I),w=n.getValue(I);w&&(w.liveStyle=!0),M[I]=V??null}),T.push({animation:M})}let F=!!T.length;return l&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(F=!1),l=!1,F?i(T):Promise.resolve()}function A(f,h){var m;if(r[f].isActive===h)return Promise.resolve();(m=n.variantChildren)===null||m===void 0||m.forEach(O=>{var L;return(L=O.animationState)===null||L===void 0?void 0:L.setActive(f,h)}),r[f].isActive=h;const T=d(f);for(const O in r)r[O].protectedKeys={};return T}return{animateChanges:d,setActive:A,setAnimateFunction:E,getState:()=>r,reset:()=>{r=Lh(),l=!0}}}function IN(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!vT(i,n):!1}function jn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lh(){return{animate:jn(!0),whileInView:jn(),whileHover:jn(),whileTap:jn(),whileDrag:jn(),whileFocus:jn(),exit:jn()}}class Ln{constructor(i){this.isMounted=!1,this.node=i}update(){}}class yN extends Ln{constructor(i){super(i),i.animationState||(i.animationState=NN(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();zs(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let LN=0;class MN extends Ln{constructor(){super(...arguments),this.id=LN++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===l)return;const c=this.node.animationState.setActive("exit",!i);r&&!i&&c.then(()=>r(this.id))}mount(){const{register:i}=this.node.presenceContext||{};i&&(this.unmount=i(this.id))}unmount(){}}const DN={animation:{Feature:yN},exit:{Feature:MN}},Oa={x:!1,y:!1};function Om(){return Oa.x||Oa.y}function PN(n,i,r){var l;if(n instanceof Element)return[n];if(typeof n=="string"){let c=document;const E=(l=void 0)!==null&&l!==void 0?l:c.querySelectorAll(n);return E?Array.from(E):[]}return Array.from(n)}function Cm(n,i){const r=PN(n),l=new AbortController,c={passive:!0,...i,signal:l.signal};return[r,c,()=>l.abort()]}function Mh(n){return i=>{i.pointerType==="touch"||Om()||n(i)}}function vN(n,i,r={}){const[l,c,E]=Cm(n,r),d=Mh(A=>{const{target:f}=A,h=i(A);if(typeof h!="function"||!f)return;const m=Mh(T=>{h(T),f.removeEventListener("pointerleave",m)});f.addEventListener("pointerleave",m,c)});return l.forEach(A=>{A.addEventListener("pointerenter",d,c)}),E}const pm=(n,i)=>i?n===i?!0:pm(n,i.parentElement):!1,vd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,BN=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function bN(n){return BN.has(n.tagName)||n.tabIndex!==-1}const _o=new WeakSet;function Dh(n){return i=>{i.key==="Enter"&&n(i)}}function Mc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const HN=(n,i)=>{const r=n.currentTarget;if(!r)return;const l=Dh(()=>{if(_o.has(r))return;Mc(r,"down");const c=Dh(()=>{Mc(r,"up")}),E=()=>Mc(r,"cancel");r.addEventListener("keyup",c,i),r.addEventListener("blur",E,i)});r.addEventListener("keydown",l,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",l),i)};function Ph(n){return vd(n)&&!Om()}function GN(n,i,r={}){const[l,c,E]=Cm(n,r),d=A=>{const f=A.currentTarget;if(!Ph(A)||_o.has(f))return;_o.add(f);const h=i(A),m=(L,v)=>{window.removeEventListener("pointerup",T),window.removeEventListener("pointercancel",O),!(!Ph(L)||!_o.has(f))&&(_o.delete(f),typeof h=="function"&&h(L,{success:v}))},T=L=>{m(L,r.useGlobalTarget||pm(f,L.target))},O=L=>{m(L,!1)};window.addEventListener("pointerup",T,c),window.addEventListener("pointercancel",O,c)};return l.forEach(A=>{!bN(A)&&A.getAttribute("tabindex")===null&&(A.tabIndex=0),(r.useGlobalTarget?window:A).addEventListener("pointerdown",d,c),A.addEventListener("focus",h=>HN(h,c),c)}),E}function UN(n){return n==="x"||n==="y"?Oa[n]?null:(Oa[n]=!0,()=>{Oa[n]=!1}):Oa.x||Oa.y?null:(Oa.x=Oa.y=!0,()=>{Oa.x=Oa.y=!1})}function ur(n){return{point:{x:n.pageX,y:n.pageY}}}const FN=n=>i=>vd(i)&&n(i,ur(i));function nr(n,i,r,l={passive:!0}){return n.addEventListener(i,r,l),()=>n.removeEventListener(i,r)}function Xo(n,i,r,l){return nr(n,i,FN(r),l)}const vh=(n,i)=>Math.abs(n-i);function wN(n,i){const r=vh(n.x,i.x),l=vh(n.y,i.y);return Math.sqrt(r**2+l**2)}class gm{constructor(i,r,{transformPagePoint:l,contextWindow:c,dragSnapToOrigin:E=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=Pc(this.lastMoveEventInfo,this.history),O=this.startEvent!==null,L=wN(T.offset,{x:0,y:0})>=3;if(!O&&!L)return;const{point:v}=T,{timestamp:F}=Ut;this.history.push({...v,timestamp:F});const{onStart:M,onMove:I}=this.handlers;O||(M&&M(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),I&&I(this.lastMoveEvent,T)},this.handlePointerMove=(T,O)=>{this.lastMoveEvent=T,this.lastMoveEventInfo=Dc(O,this.transformPagePoint),ut.update(this.updatePoint,!0)},this.handlePointerUp=(T,O)=>{this.end();const{onEnd:L,onSessionEnd:v,resumeAnimation:F}=this.handlers;if(this.dragSnapToOrigin&&F&&F(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=Pc(T.type==="pointercancel"?this.lastMoveEventInfo:Dc(O,this.transformPagePoint),this.history);this.startEvent&&L&&L(T,M),v&&v(T,M)},!vd(i))return;this.dragSnapToOrigin=E,this.handlers=r,this.transformPagePoint=l,this.contextWindow=c||window;const d=ur(i),A=Dc(d,this.transformPagePoint),{point:f}=A,{timestamp:h}=Ut;this.history=[{...f,timestamp:h}];const{onSessionStart:m}=r;m&&m(i,Pc(A,this.history)),this.removeListeners=lr(Xo(this.contextWindow,"pointermove",this.handlePointerMove),Xo(this.contextWindow,"pointerup",this.handlePointerUp),Xo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Nn(this.updatePoint)}}function Dc(n,i){return i?{point:i(n.point)}:n}function Bh(n,i){return{x:n.x-i.x,y:n.y-i.y}}function Pc({point:n},i){return{point:n,delta:Bh(n,Nm(i)),offset:Bh(n,kN(i)),velocity:xN(i,.1)}}function kN(n){return n[0]}function Nm(n){return n[n.length-1]}function xN(n,i){if(n.length<2)return{x:0,y:0};let r=n.length-1,l=null;const c=Nm(n);for(;r>=0&&(l=n[r],!(c.timestamp-l.timestamp>_a(i)));)r--;if(!l)return{x:0,y:0};const E=Ja(c.timestamp-l.timestamp);if(E===0)return{x:0,y:0};const d={x:(c.x-l.x)/E,y:(c.y-l.y)/E};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function ki(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const Im=1e-4,VN=1-Im,YN=1+Im,ym=.01,KN=0-ym,WN=0+ym;function aa(n){return n.max-n.min}function zN(n,i,r){return Math.abs(n-i)<=r}function bh(n,i,r,l=.5){n.origin=l,n.originPoint=Et(i.min,i.max,n.origin),n.scale=aa(r)/aa(i),n.translate=Et(r.min,r.max,n.origin)-n.originPoint,(n.scale>=VN&&n.scale<=YN||isNaN(n.scale))&&(n.scale=1),(n.translate>=KN&&n.translate<=WN||isNaN(n.translate))&&(n.translate=0)}function qo(n,i,r,l){bh(n.x,i.x,r.x,l?l.originX:void 0),bh(n.y,i.y,r.y,l?l.originY:void 0)}function Hh(n,i,r){n.min=r.min+i.min,n.max=n.min+aa(i)}function jN(n,i,r){Hh(n.x,i.x,r.x),Hh(n.y,i.y,r.y)}function Gh(n,i,r){n.min=i.min-r.min,n.max=n.min+aa(i)}function Qo(n,i,r){Gh(n.x,i.x,r.x),Gh(n.y,i.y,r.y)}function _N(n,{min:i,max:r},l){return i!==void 0&&n<i?n=l?Et(i,n,l.min):Math.max(n,i):r!==void 0&&n>r&&(n=l?Et(r,n,l.max):Math.min(n,r)),n}function Uh(n,i,r){return{min:i!==void 0?n.min+i:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function JN(n,{top:i,left:r,bottom:l,right:c}){return{x:Uh(n.x,r,c),y:Uh(n.y,i,l)}}function Fh(n,i){let r=i.min-n.min,l=i.max-n.max;return i.max-i.min<n.max-n.min&&([r,l]=[l,r]),{min:r,max:l}}function ZN(n,i){return{x:Fh(n.x,i.x),y:Fh(n.y,i.y)}}function XN(n,i){let r=.5;const l=aa(n),c=aa(i);return c>l?r=zi(i.min,i.max-l,n.min):l>c&&(r=zi(n.min,n.max-c,i.min)),Za(0,1,r)}function qN(n,i){const r={};return i.min!==void 0&&(r.min=i.min-n.min),i.max!==void 0&&(r.max=i.max-n.min),r}const td=.35;function QN(n=td){return n===!1?n=0:n===!0&&(n=td),{x:wh(n,"left","right"),y:wh(n,"top","bottom")}}function wh(n,i,r){return{min:kh(n,i),max:kh(n,r)}}function kh(n,i){return typeof n=="number"?n:n[i]||0}const xh=()=>({translate:0,scale:1,origin:0,originPoint:0}),xi=()=>({x:xh(),y:xh()}),Vh=()=>({min:0,max:0}),mt=()=>({x:Vh(),y:Vh()});function Aa(n){return[n("x"),n("y")]}function Lm({top:n,left:i,right:r,bottom:l}){return{x:{min:i,max:r},y:{min:n,max:l}}}function $N({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function eI(n,i){if(!i)return n;const r=i({x:n.left,y:n.top}),l=i({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:l.y,right:l.x}}function vc(n){return n===void 0||n===1}function ad({scale:n,scaleX:i,scaleY:r}){return!vc(n)||!vc(i)||!vc(r)}function _n(n){return ad(n)||Mm(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Mm(n){return Yh(n.x)||Yh(n.y)}function Yh(n){return n&&n!=="0%"}function Ys(n,i,r){const l=n-r,c=i*l;return r+c}function Kh(n,i,r,l,c){return c!==void 0&&(n=Ys(n,c,l)),Ys(n,r,l)+i}function nd(n,i=0,r=1,l,c){n.min=Kh(n.min,i,r,l,c),n.max=Kh(n.max,i,r,l,c)}function Dm(n,{x:i,y:r}){nd(n.x,i.translate,i.scale,i.originPoint),nd(n.y,r.translate,r.scale,r.originPoint)}const Wh=.999999999999,zh=1.0000000000001;function tI(n,i,r,l=!1){const c=r.length;if(!c)return;i.x=i.y=1;let E,d;for(let A=0;A<c;A++){E=r[A],d=E.projectionDelta;const{visualElement:f}=E.options;f&&f.props.style&&f.props.style.display==="contents"||(l&&E.options.layoutScroll&&E.scroll&&E!==E.root&&Yi(n,{x:-E.scroll.offset.x,y:-E.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,Dm(n,d)),l&&_n(E.latestValues)&&Yi(n,E.latestValues))}i.x<zh&&i.x>Wh&&(i.x=1),i.y<zh&&i.y>Wh&&(i.y=1)}function Vi(n,i){n.min=n.min+i,n.max=n.max+i}function jh(n,i,r,l,c=.5){const E=Et(n.min,n.max,c);nd(n,i,r,E,l)}function Yi(n,i){jh(n.x,i.x,i.scaleX,i.scale,i.originX),jh(n.y,i.y,i.scaleY,i.scale,i.originY)}function Pm(n,i){return Lm(eI(n.getBoundingClientRect(),i))}function aI(n,i,r){const l=Pm(n,r),{scroll:c}=i;return c&&(Vi(l.x,c.offset.x),Vi(l.y,c.offset.y)),l}const vm=({current:n})=>n?n.ownerDocument.defaultView:null,nI=new WeakMap;class iI{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=mt(),this.visualElement=i}start(i,{snapToCursor:r=!1}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const c=m=>{const{dragSnapToOrigin:T}=this.getProps();T?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(ur(m).point)},E=(m,T)=>{const{drag:O,dragPropagation:L,onDragStart:v}=this.getProps();if(O&&!L&&(this.openDragLock&&this.openDragLock(),this.openDragLock=UN(O),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Aa(M=>{let I=this.getAxisMotionValue(M).get()||0;if(ya.test(I)){const{projection:V}=this.visualElement;if(V&&V.layout){const w=V.layout.layoutBox[M];w&&(I=aa(w)*(parseFloat(I)/100))}}this.originPoint[M]=I}),v&&ut.postRender(()=>v(m,T)),$c(this.visualElement,"transform");const{animationState:F}=this.visualElement;F&&F.setActive("whileDrag",!0)},d=(m,T)=>{const{dragPropagation:O,dragDirectionLock:L,onDirectionLock:v,onDrag:F}=this.getProps();if(!O&&!this.openDragLock)return;const{offset:M}=T;if(L&&this.currentDirection===null){this.currentDirection=oI(M),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",T.point,M),this.updateAxis("y",T.point,M),this.visualElement.render(),F&&F(m,T)},A=(m,T)=>this.stop(m,T),f=()=>Aa(m=>{var T;return this.getAnimationState(m)==="paused"&&((T=this.getAxisMotionValue(m).animation)===null||T===void 0?void 0:T.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new gm(i,{onSessionStart:c,onStart:E,onMove:d,onSessionEnd:A,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:vm(this.visualElement)})}stop(i,r){const l=this.isDragging;if(this.cancel(),!l)return;const{velocity:c}=r;this.startAnimation(c);const{onDragEnd:E}=this.getProps();E&&ut.postRender(()=>E(i,r))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(i,r,l){const{drag:c}=this.getProps();if(!l||!Ps(i,c,this.currentDirection))return;const E=this.getAxisMotionValue(i);let d=this.originPoint[i]+l[i];this.constraints&&this.constraints[i]&&(d=_N(d,this.constraints[i],this.elastic[i])),E.set(d)}resolveConstraints(){var i;const{dragConstraints:r,dragElastic:l}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,E=this.constraints;r&&ki(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&c?this.constraints=JN(c.layoutBox,r):this.constraints=!1,this.elastic=QN(l),E!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&Aa(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=qN(c.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!ki(i))return!1;const l=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const E=aI(l,c.root,this.visualElement.getTransformPagePoint());let d=ZN(c.layout.layoutBox,E);if(r){const A=r($N(d));this.hasMutatedConstraints=!!A,A&&(d=Lm(A))}return d}startAnimation(i){const{drag:r,dragMomentum:l,dragElastic:c,dragTransition:E,dragSnapToOrigin:d,onDragTransitionEnd:A}=this.getProps(),f=this.constraints||{},h=Aa(m=>{if(!Ps(m,r,this.currentDirection))return;let T=f&&f[m]||{};d&&(T={min:0,max:0});const O=c?200:1e6,L=c?40:1e7,v={type:"inertia",velocity:l?i[m]:0,bounceStiffness:O,bounceDamping:L,timeConstant:750,restDelta:1,restSpeed:10,...E,...T};return this.startAxisValueAnimation(m,v)});return Promise.all(h).then(A)}startAxisValueAnimation(i,r){const l=this.getAxisMotionValue(i);return $c(this.visualElement,i),l.start(yd(i,l,0,r,this.visualElement,!1))}stopAnimation(){Aa(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Aa(i=>{var r;return(r=this.getAxisMotionValue(i).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(i){var r;return(r=this.getAxisMotionValue(i).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,l=this.visualElement.getProps(),c=l[r];return c||this.visualElement.getValue(i,(l.initial?l.initial[i]:void 0)||0)}snapToCursor(i){Aa(r=>{const{drag:l}=this.getProps();if(!Ps(r,l,this.currentDirection))return;const{projection:c}=this.visualElement,E=this.getAxisMotionValue(r);if(c&&c.layout){const{min:d,max:A}=c.layout.layoutBox[r];E.set(i[r]-Et(d,A,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:l}=this.visualElement;if(!ki(r)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Aa(d=>{const A=this.getAxisMotionValue(d);if(A&&this.constraints!==!1){const f=A.get();c[d]=XN({min:f,max:f},this.constraints[d])}});const{transformTemplate:E}=this.visualElement.getProps();this.visualElement.current.style.transform=E?E({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),Aa(d=>{if(!Ps(d,i,null))return;const A=this.getAxisMotionValue(d),{min:f,max:h}=this.constraints[d];A.set(Et(f,h,c[d]))})}addListeners(){if(!this.visualElement.current)return;nI.set(this.visualElement,this);const i=this.visualElement.current,r=Xo(i,"pointerdown",f=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(f)}),l=()=>{const{dragConstraints:f}=this.getProps();ki(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,E=c.addEventListener("measure",l);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),ut.read(l);const d=nr(window,"resize",()=>this.scalePositionWithinConstraints()),A=c.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(Aa(m=>{const T=this.getAxisMotionValue(m);T&&(this.originPoint[m]+=f[m].translate,T.set(T.get()+f[m].translate))}),this.visualElement.render())}));return()=>{d(),r(),E(),A&&A()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:E=!1,dragElastic:d=td,dragMomentum:A=!0}=i;return{...i,drag:r,dragDirectionLock:l,dragPropagation:c,dragConstraints:E,dragElastic:d,dragMomentum:A}}}function Ps(n,i,r){return(i===!0||i===n)&&(r===null||r===n)}function oI(n,i=10){let r=null;return Math.abs(n.y)>i?r="y":Math.abs(n.x)>i&&(r="x"),r}class rI extends Ln{constructor(i){super(i),this.removeGroupControls=ta,this.removeListeners=ta,this.controls=new iI(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ta}unmount(){this.removeGroupControls(),this.removeListeners()}}const _h=n=>(i,r)=>{n&&ut.postRender(()=>n(i,r))};class sI extends Ln{constructor(){super(...arguments),this.removePointerDownListener=ta}onPointerDown(i){this.session=new gm(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:vm(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:_h(i),onStart:_h(r),onMove:l,onEnd:(E,d)=>{delete this.session,c&&ut.postRender(()=>c(E,d))}}}mount(){this.removePointerDownListener=Xo(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Js=N.createContext(null);function lI(){const n=N.useContext(Js);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:l}=n,c=N.useId();N.useEffect(()=>l(c),[]);const E=N.useCallback(()=>r&&r(c),[c,r]);return!i&&r?[!1,E]:[!0]}const Bd=N.createContext({}),Bm=N.createContext({}),Hs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Jh(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const zo={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(Ie.test(n))n=parseFloat(n);else return n;const r=Jh(n,i.target.x),l=Jh(n,i.target.y);return`${r}% ${l}%`}},uI={correct:(n,{treeScale:i,projectionDelta:r})=>{const l=n,c=In.parse(n);if(c.length>5)return l;const E=In.createTransformer(n),d=typeof c[0]!="number"?1:0,A=r.x.scale*i.x,f=r.y.scale*i.y;c[0+d]/=A,c[1+d]/=f;const h=Et(A,f,.5);return typeof c[2+d]=="number"&&(c[2+d]/=h),typeof c[3+d]=="number"&&(c[3+d]/=h),E(c)}},Ks={};function cI(n){Object.assign(Ks,n)}const{schedule:bd}=bT(queueMicrotask,!1);class dI extends N.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:l,layoutId:c}=this.props,{projection:E}=i;cI(EI),E&&(r.group&&r.group.add(E),l&&l.register&&c&&l.register(E),E.root.didUpdate(),E.addEventListener("animationComplete",()=>{this.safeToRemove()}),E.setOptions({...E.options,onExitComplete:()=>this.safeToRemove()})),Hs.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:l,drag:c,isPresent:E}=this.props,d=l.projection;return d&&(d.isPresent=E,c||i.layoutDependency!==r||r===void 0?d.willUpdate():this.safeToRemove(),i.isPresent!==E&&(E?d.promote():d.relegate()||ut.postRender(()=>{const A=d.getStack();(!A||!A.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),bd.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:l}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function bm(n){const[i,r]=lI(),l=N.useContext(Bd);return C.jsx(dI,{...n,layoutGroup:l,switchLayoutGroup:N.useContext(Bm),isPresent:i,safeToRemove:r})}const EI={borderRadius:{...zo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:zo,borderTopRightRadius:zo,borderBottomLeftRadius:zo,borderBottomRightRadius:zo,boxShadow:uI},Hm=["TopLeft","TopRight","BottomLeft","BottomRight"],SI=Hm.length,Zh=n=>typeof n=="string"?parseFloat(n):n,Xh=n=>typeof n=="number"||Ie.test(n);function AI(n,i,r,l,c,E){c?(n.opacity=Et(0,r.opacity!==void 0?r.opacity:1,fI(l)),n.opacityExit=Et(i.opacity!==void 0?i.opacity:1,0,hI(l))):E&&(n.opacity=Et(i.opacity!==void 0?i.opacity:1,r.opacity!==void 0?r.opacity:1,l));for(let d=0;d<SI;d++){const A=`border${Hm[d]}Radius`;let f=qh(i,A),h=qh(r,A);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||Xh(f)===Xh(h)?(n[A]=Math.max(Et(Zh(f),Zh(h),l),0),(ya.test(h)||ya.test(f))&&(n[A]+="%")):n[A]=h}(i.rotate||r.rotate)&&(n.rotate=Et(i.rotate||0,r.rotate||0,l))}function qh(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const fI=Gm(0,.5,xT),hI=Gm(.5,.95,ta);function Gm(n,i,r){return l=>l<n?0:l>i?1:r(zi(n,i,l))}function Qh(n,i){n.min=i.min,n.max=i.max}function Sa(n,i){Qh(n.x,i.x),Qh(n.y,i.y)}function $h(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function eT(n,i,r,l,c){return n-=i,n=Ys(n,1/r,l),c!==void 0&&(n=Ys(n,1/c,l)),n}function TI(n,i=0,r=1,l=.5,c,E=n,d=n){if(ya.test(i)&&(i=parseFloat(i),i=Et(d.min,d.max,i/100)-d.min),typeof i!="number")return;let A=Et(E.min,E.max,l);n===E&&(A-=i),n.min=eT(n.min,i,r,A,c),n.max=eT(n.max,i,r,A,c)}function tT(n,i,[r,l,c],E,d){TI(n,i[r],i[l],i[c],i.scale,E,d)}const mI=["x","scaleX","originX"],RI=["y","scaleY","originY"];function aT(n,i,r,l){tT(n.x,i,mI,r?r.x:void 0,l?l.x:void 0),tT(n.y,i,RI,r?r.y:void 0,l?l.y:void 0)}function nT(n){return n.translate===0&&n.scale===1}function Um(n){return nT(n.x)&&nT(n.y)}function iT(n,i){return n.min===i.min&&n.max===i.max}function OI(n,i){return iT(n.x,i.x)&&iT(n.y,i.y)}function oT(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Fm(n,i){return oT(n.x,i.x)&&oT(n.y,i.y)}function rT(n){return aa(n.x)/aa(n.y)}function sT(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class CI{constructor(){this.members=[]}add(i){Ld(this.members,i),i.scheduleRender()}remove(i){if(Md(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(c=>i===c);if(r===0)return!1;let l;for(let c=r;c>=0;c--){const E=this.members[c];if(E.isPresent!==!1){l=E;break}}return l?(this.promote(l),!0):!1}promote(i,r){const l=this.lead;if(i!==l&&(this.prevLead=l,this.lead=i,i.show(),l)){l.instance&&l.scheduleRender(),i.scheduleRender(),i.resumeFrom=l,r&&(i.resumeFrom.preserveOpacity=!0),l.snapshot&&(i.snapshot=l.snapshot,i.snapshot.latestValues=l.animationValues||l.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:l}=i;r.onExitComplete&&r.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function pI(n,i,r){let l="";const c=n.x.translate/i.x,E=n.y.translate/i.y,d=(r==null?void 0:r.z)||0;if((c||E||d)&&(l=`translate3d(${c}px, ${E}px, ${d}px) `),(i.x!==1||i.y!==1)&&(l+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:h,rotate:m,rotateX:T,rotateY:O,skewX:L,skewY:v}=r;h&&(l=`perspective(${h}px) ${l}`),m&&(l+=`rotate(${m}deg) `),T&&(l+=`rotateX(${T}deg) `),O&&(l+=`rotateY(${O}deg) `),L&&(l+=`skewX(${L}deg) `),v&&(l+=`skewY(${v}deg) `)}const A=n.x.scale*i.x,f=n.y.scale*i.y;return(A!==1||f!==1)&&(l+=`scale(${A}, ${f})`),l||"none"}const gI=(n,i)=>n.depth-i.depth;class NI{constructor(){this.children=[],this.isDirty=!1}add(i){Ld(this.children,i),this.isDirty=!0}remove(i){Md(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(gI),this.isDirty=!1,this.children.forEach(i)}}function Gs(n){const i=kt(n)?n.get():n;return lN(i)?i.toValue():i}function II(n,i){const r=La.now(),l=({timestamp:c})=>{const E=c-r;E>=i&&(Nn(l),n(E-i))};return ut.read(l,!0),()=>Nn(l)}function yI(n){return n instanceof SVGElement&&n.tagName!=="svg"}function LI(n,i,r){const l=kt(n)?n:ar(n);return l.start(yd("",l,i,r)),l.animation}const Jn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Jo=typeof window<"u"&&window.MotionDebug!==void 0,Bc=["","X","Y","Z"],MI={visibility:"hidden"},lT=1e3;let DI=0;function bc(n,i,r,l){const{latestValues:c}=i;c[n]&&(r[n]=c[n],i.setStaticValue(n,0),l&&(l[n]=0))}function wm(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const r=Tm(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:E}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",ut,!(c||E))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&wm(l)}function km({attachResizeListener:n,defaultParent:i,measureScroll:r,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(d={},A=i==null?void 0:i()){this.id=DI++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Jo&&(Jn.totalNodes=Jn.resolvedTargetDeltas=Jn.recalculatedProjection=0),this.nodes.forEach(BI),this.nodes.forEach(FI),this.nodes.forEach(wI),this.nodes.forEach(bI),Jo&&window.MotionDebug.record(Jn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=A?A.root||A:this,this.path=A?[...A.path,A]:[],this.parent=A,this.depth=A?A.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new NI)}addEventListener(d,A){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Dd),this.eventHandlers.get(d).add(A)}notifyListeners(d,...A){const f=this.eventHandlers.get(d);f&&f.notify(...A)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,A=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=yI(d),this.instance=d;const{layoutId:f,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),A&&(h||f)&&(this.isLayoutDirty=!0),n){let T;const O=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,T&&T(),T=II(O,250),Hs.hasAnimatedSinceResize&&(Hs.hasAnimatedSinceResize=!1,this.nodes.forEach(cT))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&m&&(f||h)&&this.addEventListener("didUpdate",({delta:T,hasLayoutChanged:O,hasRelativeTargetChanged:L,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const F=this.options.transition||m.getDefaultTransition()||KI,{onLayoutAnimationStart:M,onLayoutAnimationComplete:I}=m.getProps(),V=!this.targetLayout||!Fm(this.targetLayout,v)||L,w=!O&&L;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||w||O&&(V||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(T,w);const ie={...Ed(F,"layout"),onPlay:M,onComplete:I};(m.shouldReduceMotion||this.options.layoutRoot)&&(ie.delay=0,ie.type=!1),this.startAnimation(ie)}else O||cT(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Nn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kI),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const T=this.path[m];T.shouldResetTransform=!0,T.updateScroll("snapshot"),T.options.layoutRoot&&T.willUpdate(!1)}const{layoutId:A,layout:f}=this.options;if(A===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(uT);return}this.isUpdating||this.nodes.forEach(GI),this.isUpdating=!1,this.nodes.forEach(UI),this.nodes.forEach(PI),this.nodes.forEach(vI),this.clearAllSnapshots();const A=La.now();Ut.delta=Za(0,1e3/60,A-Ut.timestamp),Ut.timestamp=A,Ut.isProcessing=!0,gc.update.process(Ut),gc.preRender.process(Ut),gc.render.process(Ut),Ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(HI),this.sharedNodes.forEach(xI)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ut.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ut.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=mt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:A}=this.options;A&&A.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let A=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(A=!1),A){const f=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:f,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,A=this.projectionDelta&&!Um(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;d&&(A||_n(this.latestValues)||m)&&(c(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const A=this.measurePageBox();let f=this.removeElementScroll(A);return d&&(f=this.removeTransform(f)),WI(f),{animationId:this.root.animationId,measuredBox:A,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:A}=this.options;if(!A)return mt();const f=A.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(zI))){const{scroll:m}=this.root;m&&(Vi(f.x,m.offset.x),Vi(f.y,m.offset.y))}return f}removeElementScroll(d){var A;const f=mt();if(Sa(f,d),!((A=this.scroll)===null||A===void 0)&&A.wasRoot)return f;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:T,options:O}=m;m!==this.root&&T&&O.layoutScroll&&(T.wasRoot&&Sa(f,d),Vi(f.x,T.offset.x),Vi(f.y,T.offset.y))}return f}applyTransform(d,A=!1){const f=mt();Sa(f,d);for(let h=0;h<this.path.length;h++){const m=this.path[h];!A&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Yi(f,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),_n(m.latestValues)&&Yi(f,m.latestValues)}return _n(this.latestValues)&&Yi(f,this.latestValues),f}removeTransform(d){const A=mt();Sa(A,d);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!_n(h.latestValues))continue;ad(h.latestValues)&&h.updateSnapshot();const m=mt(),T=h.measurePageBox();Sa(m,T),aT(A,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return _n(this.latestValues)&&aT(A,this.latestValues),A}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var A;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(d||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((A=this.parent)===null||A===void 0)&&A.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:T,layoutId:O}=this.options;if(!(!this.layout||!(T||O))){if(this.resolvedRelativeTargetAt=Ut.timestamp,!this.targetDelta&&!this.relativeTarget){const L=this.getClosestProjectingParent();L&&L.layout&&this.animationProgress!==1?(this.relativeParent=L,this.forceRelativeParentToResolveTarget(),this.relativeTarget=mt(),this.relativeTargetOrigin=mt(),Qo(this.relativeTargetOrigin,this.layout.layoutBox,L.layout.layoutBox),Sa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=mt(),this.targetWithTransforms=mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),jN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Sa(this.target,this.layout.layoutBox),Dm(this.target,this.targetDelta)):Sa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const L=this.getClosestProjectingParent();L&&!!L.resumingFrom==!!this.resumingFrom&&!L.options.layoutScroll&&L.target&&this.animationProgress!==1?(this.relativeParent=L,this.forceRelativeParentToResolveTarget(),this.relativeTarget=mt(),this.relativeTargetOrigin=mt(),Qo(this.relativeTargetOrigin,this.target,L.target),Sa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Jo&&Jn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ad(this.parent.latestValues)||Mm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const A=this.getLead(),f=!!this.resumingFrom||this!==A;let h=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Ut.timestamp&&(h=!1),h)return;const{layout:m,layoutId:T}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||T))return;Sa(this.layoutCorrected,this.layout.layoutBox);const O=this.treeScale.x,L=this.treeScale.y;tI(this.layoutCorrected,this.treeScale,this.path,f),A.layout&&!A.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(A.target=A.layout.layoutBox,A.targetWithTransforms=mt());const{target:v}=A;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($h(this.prevProjectionDelta.x,this.projectionDelta.x),$h(this.prevProjectionDelta.y,this.projectionDelta.y)),qo(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==O||this.treeScale.y!==L||!sT(this.projectionDelta.x,this.prevProjectionDelta.x)||!sT(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Jo&&Jn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var A;if((A=this.options.visualElement)===null||A===void 0||A.scheduleRender(),d){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xi(),this.projectionDelta=xi(),this.projectionDeltaWithTransform=xi()}setAnimationOrigin(d,A=!1){const f=this.snapshot,h=f?f.latestValues:{},m={...this.latestValues},T=xi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!A;const O=mt(),L=f?f.source:void 0,v=this.layout?this.layout.source:void 0,F=L!==v,M=this.getStack(),I=!M||M.members.length<=1,V=!!(F&&!I&&this.options.crossfade===!0&&!this.path.some(YI));this.animationProgress=0;let w;this.mixTargetDelta=ie=>{const ae=ie/1e3;dT(T.x,d.x,ae),dT(T.y,d.y,ae),this.setTargetDelta(T),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qo(O,this.layout.layoutBox,this.relativeParent.layout.layoutBox),VI(this.relativeTarget,this.relativeTargetOrigin,O,ae),w&&OI(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=mt()),Sa(w,this.relativeTarget)),F&&(this.animationValues=m,AI(m,h,this.latestValues,ae,V,I)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=ae},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Nn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ut.update(()=>{Hs.hasAnimatedSinceResize=!0,this.currentAnimation=LI(0,lT,{...d,onUpdate:A=>{this.mixTargetDelta(A),d.onUpdate&&d.onUpdate(A)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(lT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:A,target:f,layout:h,latestValues:m}=d;if(!(!A||!f||!h)){if(this!==d&&this.layout&&h&&xm(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||mt();const T=aa(this.layout.layoutBox.x);f.x.min=d.target.x.min,f.x.max=f.x.min+T;const O=aa(this.layout.layoutBox.y);f.y.min=d.target.y.min,f.y.max=f.y.min+O}Sa(A,f),Yi(A,m),qo(this.projectionDeltaWithTransform,this.layoutCorrected,A,m)}}registerSharedNode(d,A){this.sharedNodes.has(d)||this.sharedNodes.set(d,new CI),this.sharedNodes.get(d).add(A);const h=A.options.initialPromotionConfig;A.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(A):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:A}=this.options;return A?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:A}=this.options;return A?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:A,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),d&&(this.projectionDelta=void 0,this.needsReset=!0),A&&this.setOptions({transition:A})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let A=!1;const{latestValues:f}=d;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(A=!0),!A)return;const h={};f.z&&bc("z",d,h,this.animationValues);for(let m=0;m<Bc.length;m++)bc(`rotate${Bc[m]}`,d,h,this.animationValues),bc(`skew${Bc[m]}`,d,h,this.animationValues);d.render();for(const m in h)d.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);d.scheduleRender()}getProjectionStyles(d){var A,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return MI;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Gs(d==null?void 0:d.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const T=this.getLead();if(!this.projectionDelta||!this.layout||!T.target){const F={};return this.options.layoutId&&(F.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,F.pointerEvents=Gs(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!_n(this.latestValues)&&(F.transform=m?m({},""):"none",this.hasProjected=!1),F}const O=T.animationValues||T.latestValues;this.applyTransformsToTarget(),h.transform=pI(this.projectionDeltaWithTransform,this.treeScale,O),m&&(h.transform=m(O,h.transform));const{x:L,y:v}=this.projectionDelta;h.transformOrigin=`${L.origin*100}% ${v.origin*100}% 0`,T.animationValues?h.opacity=T===this?(f=(A=O.opacity)!==null&&A!==void 0?A:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:O.opacityExit:h.opacity=T===this?O.opacity!==void 0?O.opacity:"":O.opacityExit!==void 0?O.opacityExit:0;for(const F in Ks){if(O[F]===void 0)continue;const{correct:M,applyTo:I}=Ks[F],V=h.transform==="none"?O[F]:M(O[F],T);if(I){const w=I.length;for(let ie=0;ie<w;ie++)h[I[ie]]=V}else h[F]=V}return this.options.layoutId&&(h.pointerEvents=T===this?Gs(d==null?void 0:d.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var A;return(A=d.currentAnimation)===null||A===void 0?void 0:A.stop()}),this.root.nodes.forEach(uT),this.root.sharedNodes.clear()}}}function PI(n){n.updateLayout()}function vI(n){var i;const r=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:c}=n.layout,{animationType:E}=n.options,d=r.source!==n.layout.source;E==="size"?Aa(T=>{const O=d?r.measuredBox[T]:r.layoutBox[T],L=aa(O);O.min=l[T].min,O.max=O.min+L}):xm(E,r.layoutBox,l)&&Aa(T=>{const O=d?r.measuredBox[T]:r.layoutBox[T],L=aa(l[T]);O.max=O.min+L,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[T].max=n.relativeTarget[T].min+L)});const A=xi();qo(A,l,r.layoutBox);const f=xi();d?qo(f,n.applyTransform(c,!0),r.measuredBox):qo(f,l,r.layoutBox);const h=!Um(A);let m=!1;if(!n.resumeFrom){const T=n.getClosestProjectingParent();if(T&&!T.resumeFrom){const{snapshot:O,layout:L}=T;if(O&&L){const v=mt();Qo(v,r.layoutBox,O.layoutBox);const F=mt();Qo(F,l,L.layoutBox),Fm(v,F)||(m=!0),T.options.layoutRoot&&(n.relativeTarget=F,n.relativeTargetOrigin=v,n.relativeParent=T)}}}n.notifyListeners("didUpdate",{layout:l,snapshot:r,delta:f,layoutDelta:A,hasLayoutChanged:h,hasRelativeTargetChanged:m})}else if(n.isLead()){const{onExitComplete:l}=n.options;l&&l()}n.options.transition=void 0}function BI(n){Jo&&Jn.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function bI(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function HI(n){n.clearSnapshot()}function uT(n){n.clearMeasurements()}function GI(n){n.isLayoutDirty=!1}function UI(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function cT(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function FI(n){n.resolveTargetDelta()}function wI(n){n.calcProjection()}function kI(n){n.resetSkewAndRotation()}function xI(n){n.removeLeadSnapshot()}function dT(n,i,r){n.translate=Et(i.translate,0,r),n.scale=Et(i.scale,1,r),n.origin=i.origin,n.originPoint=i.originPoint}function ET(n,i,r,l){n.min=Et(i.min,r.min,l),n.max=Et(i.max,r.max,l)}function VI(n,i,r,l){ET(n.x,i.x,r.x,l),ET(n.y,i.y,r.y,l)}function YI(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const KI={duration:.45,ease:[.4,0,.1,1]},ST=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),AT=ST("applewebkit/")&&!ST("chrome/")?Math.round:ta;function fT(n){n.min=AT(n.min),n.max=AT(n.max)}function WI(n){fT(n.x),fT(n.y)}function xm(n,i,r){return n==="position"||n==="preserve-aspect"&&!zN(rT(i),rT(r),.2)}function zI(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const jI=km({attachResizeListener:(n,i)=>nr(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Hc={current:void 0},Vm=km({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Hc.current){const n=new jI({});n.mount(window),n.setOptions({layoutScroll:!0}),Hc.current=n}return Hc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),_I={pan:{Feature:sI},drag:{Feature:rI,ProjectionNode:Vm,MeasureLayout:bm}};function hT(n,i,r){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,E=l[c];E&&ut.postRender(()=>E(i,ur(i)))}class JI extends Ln{mount(){const{current:i}=this.node;i&&(this.unmount=vN(i,r=>(hT(this.node,r,"Start"),l=>hT(this.node,l,"End"))))}unmount(){}}class ZI extends Ln{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=lr(nr(this.node.current,"focus",()=>this.onFocus()),nr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function TT(n,i,r){const{props:l}=n;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),E=l[c];E&&ut.postRender(()=>E(i,ur(i)))}class XI extends Ln{mount(){const{current:i}=this.node;i&&(this.unmount=GN(i,r=>(TT(this.node,r,"Start"),(l,{success:c})=>TT(this.node,l,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const id=new WeakMap,Gc=new WeakMap,qI=n=>{const i=id.get(n.target);i&&i(n)},QI=n=>{n.forEach(qI)};function $I({root:n,...i}){const r=n||document;Gc.has(r)||Gc.set(r,{});const l=Gc.get(r),c=JSON.stringify(i);return l[c]||(l[c]=new IntersectionObserver(QI,{root:n,...i})),l[c]}function e0(n,i,r){const l=$I(i);return id.set(n,r),l.observe(n),()=>{id.delete(n),l.unobserve(n)}}const t0={some:0,all:1};class a0 extends Ln{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:l,amount:c="some",once:E}=i,d={root:r?r.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:t0[c]},A=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,E&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:T}=this.node.getProps(),O=h?m:T;O&&O(f)};return e0(this.node.current,d,A)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(n0(i,r))&&this.startObserver()}unmount(){}}function n0({viewport:n={}},{viewport:i={}}={}){return r=>n[r]!==i[r]}const i0={inView:{Feature:a0},tap:{Feature:XI},focus:{Feature:ZI},hover:{Feature:JI}},o0={layout:{ProjectionNode:Vm,MeasureLayout:bm}},Hd=N.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Zs=N.createContext({}),Gd=typeof window<"u",Ym=Gd?N.useLayoutEffect:N.useEffect,Km=N.createContext({strict:!1});function r0(n,i,r,l,c){var E,d;const{visualElement:A}=N.useContext(Zs),f=N.useContext(Km),h=N.useContext(Js),m=N.useContext(Hd).reducedMotion,T=N.useRef(null);l=l||f.renderer,!T.current&&l&&(T.current=l(n,{visualState:i,parent:A,props:r,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const O=T.current,L=N.useContext(Bm);O&&!O.projection&&c&&(O.type==="html"||O.type==="svg")&&s0(T.current,r,c,L);const v=N.useRef(!1);N.useInsertionEffect(()=>{O&&v.current&&O.update(r,h)});const F=r[hm],M=N.useRef(!!F&&!(!((E=window.MotionHandoffIsComplete)===null||E===void 0)&&E.call(window,F))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,F)));return Ym(()=>{O&&(v.current=!0,window.MotionIsMounted=!0,O.updateFeatures(),bd.render(O.render),M.current&&O.animationState&&O.animationState.animateChanges())}),N.useEffect(()=>{O&&(!M.current&&O.animationState&&O.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{var I;(I=window.MotionHandoffMarkAsComplete)===null||I===void 0||I.call(window,F)}),M.current=!1))}),O}function s0(n,i,r,l){const{layoutId:c,layout:E,drag:d,dragConstraints:A,layoutScroll:f,layoutRoot:h}=i;n.projection=new r(n.latestValues,i["data-framer-portal-id"]?void 0:Wm(n.parent)),n.projection.setOptions({layoutId:c,layout:E,alwaysMeasureLayout:!!d||A&&ki(A),visualElement:n,animationType:typeof E=="string"?E:"both",initialPromotionConfig:l,layoutScroll:f,layoutRoot:h})}function Wm(n){if(n)return n.options.allowProjection!==!1?n.projection:Wm(n.parent)}function l0(n,i,r){return N.useCallback(l=>{l&&n.mount&&n.mount(l),i&&(l?i.mount(l):i.unmount()),r&&(typeof r=="function"?r(l):ki(r)&&(r.current=l))},[i])}function Xs(n){return zs(n.animate)||dd.some(i=>$o(n[i]))}function zm(n){return!!(Xs(n)||n.variants)}function u0(n,i){if(Xs(n)){const{initial:r,animate:l}=n;return{initial:r===!1||$o(r)?r:void 0,animate:$o(l)?l:void 0}}return n.inherit!==!1?i:{}}function c0(n){const{initial:i,animate:r}=u0(n,N.useContext(Zs));return N.useMemo(()=>({initial:i,animate:r}),[mT(i),mT(r)])}function mT(n){return Array.isArray(n)?n.join(" "):n}const RT={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ji={};for(const n in RT)ji[n]={isEnabled:i=>RT[n].some(r=>!!i[r])};function d0(n){for(const i in n)ji[i]={...ji[i],...n[i]}}const E0=Symbol.for("motionComponentSymbol");function S0({preloadedFeatures:n,createVisualElement:i,useRender:r,useVisualState:l,Component:c}){n&&d0(n);function E(A,f){let h;const m={...N.useContext(Hd),...A,layoutId:A0(A)},{isStatic:T}=m,O=c0(A),L=l(A,T);if(!T&&Gd){f0();const v=h0(m);h=v.MeasureLayout,O.visualElement=r0(c,L,m,i,v.ProjectionNode)}return C.jsxs(Zs.Provider,{value:O,children:[h&&O.visualElement?C.jsx(h,{visualElement:O.visualElement,...m}):null,r(c,A,l0(L,O.visualElement,f),L,T,O.visualElement)]})}const d=N.forwardRef(E);return d[E0]=c,d}function A0({layoutId:n}){const i=N.useContext(Bd).id;return i&&n!==void 0?i+"-"+n:n}function f0(n,i){N.useContext(Km).strict}function h0(n){const{drag:i,layout:r}=ji;if(!i&&!r)return{};const l={...i,...r};return{MeasureLayout:i!=null&&i.isEnabled(n)||r!=null&&r.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}const T0=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ud(n){return typeof n!="string"||n.includes("-")?!1:!!(T0.indexOf(n)>-1||/[A-Z]/u.test(n))}function jm(n,{style:i,vars:r},l,c){Object.assign(n.style,i,c&&c.getProjectionStyles(l));for(const E in r)n.style.setProperty(E,r[E])}const _m=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Jm(n,i,r,l){jm(n,i,void 0,l);for(const c in i.attrs)n.setAttribute(_m.has(c)?c:Pd(c),i.attrs[c])}function Zm(n,{layout:i,layoutId:r}){return qn.has(n)||n.startsWith("origin")||(i||r!==void 0)&&(!!Ks[n]||n==="opacity")}function Fd(n,i,r){var l;const{style:c}=n,E={};for(const d in c)(kt(c[d])||i.style&&kt(i.style[d])||Zm(d,n)||((l=r==null?void 0:r.getValue(d))===null||l===void 0?void 0:l.liveStyle)!==void 0)&&(E[d]=c[d]);return E}function Xm(n,i,r){const l=Fd(n,i,r);for(const c in n)if(kt(n[c])||kt(i[c])){const E=or.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[E]=n[c]}return l}function wd(n){const i=N.useRef(null);return i.current===null&&(i.current=n()),i.current}function m0({scrapeMotionValuesFromProps:n,createRenderState:i,onMount:r},l,c,E){const d={latestValues:R0(l,c,E,n),renderState:i()};return r&&(d.mount=A=>r(l,A,d)),d}const qm=n=>(i,r)=>{const l=N.useContext(Zs),c=N.useContext(Js),E=()=>m0(n,i,l,c);return r?E():wd(E)};function R0(n,i,r,l){const c={},E=l(n,{});for(const O in E)c[O]=Gs(E[O]);let{initial:d,animate:A}=n;const f=Xs(n),h=zm(n);i&&h&&!f&&n.inherit!==!1&&(d===void 0&&(d=i.initial),A===void 0&&(A=i.animate));let m=r?r.initial===!1:!1;m=m||d===!1;const T=m?A:d;if(T&&typeof T!="boolean"&&!zs(T)){const O=Array.isArray(T)?T:[T];for(let L=0;L<O.length;L++){const v=ud(n,O[L]);if(v){const{transitionEnd:F,transition:M,...I}=v;for(const V in I){let w=I[V];if(Array.isArray(w)){const ie=m?w.length-1:0;w=w[ie]}w!==null&&(c[V]=w)}for(const V in F)c[V]=F[V]}}}return c}const kd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Qm=()=>({...kd(),attrs:{}}),$m=(n,i)=>i&&typeof n=="number"?i.transform(n):n,O0={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},C0=or.length;function p0(n,i,r){let l="",c=!0;for(let E=0;E<C0;E++){const d=or[E],A=n[d];if(A===void 0)continue;let f=!0;if(typeof A=="number"?f=A===(d.startsWith("scale")?1:0):f=parseFloat(A)===0,!f||r){const h=$m(A,Rd[d]);if(!f){c=!1;const m=O0[d]||d;l+=`${m}(${h}) `}r&&(i[d]=h)}}return l=l.trim(),r?l=r(i,c?"":l):c&&(l="none"),l}function xd(n,i,r){const{style:l,vars:c,transformOrigin:E}=n;let d=!1,A=!1;for(const f in i){const h=i[f];if(qn.has(f)){d=!0;continue}else if(zT(f)){c[f]=h;continue}else{const m=$m(h,Rd[f]);f.startsWith("origin")?(A=!0,E[f]=m):l[f]=m}}if(i.transform||(d||r?l.transform=p0(i,n.transform,r):l.transform&&(l.transform="none")),A){const{originX:f="50%",originY:h="50%",originZ:m=0}=E;l.transformOrigin=`${f} ${h} ${m}`}}function OT(n,i,r){return typeof n=="string"?n:Ie.transform(i+r*n)}function g0(n,i,r){const l=OT(i,n.x,n.width),c=OT(r,n.y,n.height);return`${l} ${c}`}const N0={offset:"stroke-dashoffset",array:"stroke-dasharray"},I0={offset:"strokeDashoffset",array:"strokeDasharray"};function y0(n,i,r=1,l=0,c=!0){n.pathLength=1;const E=c?N0:I0;n[E.offset]=Ie.transform(-l);const d=Ie.transform(i),A=Ie.transform(r);n[E.array]=`${d} ${A}`}function Vd(n,{attrX:i,attrY:r,attrScale:l,originX:c,originY:E,pathLength:d,pathSpacing:A=1,pathOffset:f=0,...h},m,T){if(xd(n,h,T),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:O,style:L,dimensions:v}=n;O.transform&&(v&&(L.transform=O.transform),delete O.transform),v&&(c!==void 0||E!==void 0||L.transform)&&(L.transformOrigin=g0(v,c!==void 0?c:.5,E!==void 0?E:.5)),i!==void 0&&(O.x=i),r!==void 0&&(O.y=r),l!==void 0&&(O.scale=l),d!==void 0&&y0(O,d,A,f,!1)}const Yd=n=>typeof n=="string"&&n.toLowerCase()==="svg",L0={useVisualState:qm({scrapeMotionValuesFromProps:Xm,createRenderState:Qm,onMount:(n,i,{renderState:r,latestValues:l})=>{ut.read(()=>{try{r.dimensions=typeof i.getBBox=="function"?i.getBBox():i.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),ut.render(()=>{Vd(r,l,Yd(i.tagName),n.transformTemplate),Jm(i,r)})}})},M0={useVisualState:qm({scrapeMotionValuesFromProps:Fd,createRenderState:kd})};function eR(n,i,r){for(const l in i)!kt(i[l])&&!Zm(l,r)&&(n[l]=i[l])}function D0({transformTemplate:n},i){return N.useMemo(()=>{const r=kd();return xd(r,i,n),Object.assign({},r.vars,r.style)},[i])}function P0(n,i){const r=n.style||{},l={};return eR(l,r,n),Object.assign(l,D0(n,i)),l}function v0(n,i){const r={},l=P0(n,i);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=l,r}const B0=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ws(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||B0.has(n)}let tR=n=>!Ws(n);function b0(n){n&&(tR=i=>i.startsWith("on")?!Ws(i):n(i))}try{b0(require("@emotion/is-prop-valid").default)}catch{}function H0(n,i,r){const l={};for(const c in n)c==="values"&&typeof n.values=="object"||(tR(c)||r===!0&&Ws(c)||!i&&!Ws(c)||n.draggable&&c.startsWith("onDrag"))&&(l[c]=n[c]);return l}function G0(n,i,r,l){const c=N.useMemo(()=>{const E=Qm();return Vd(E,i,Yd(l),n.transformTemplate),{...E.attrs,style:{...E.style}}},[i]);if(n.style){const E={};eR(E,n.style,n),c.style={...E,...c.style}}return c}function U0(n=!1){return(r,l,c,{latestValues:E},d)=>{const f=(Ud(r)?G0:v0)(l,E,d,r),h=H0(l,typeof r=="string",n),m=r!==N.Fragment?{...h,...f,ref:c}:{},{children:T}=l,O=N.useMemo(()=>kt(T)?T.get():T,[T]);return N.createElement(r,{...m,children:O})}}function F0(n,i){return function(l,{forwardMotionProps:c}={forwardMotionProps:!1}){const d={...Ud(l)?L0:M0,preloadedFeatures:n,useRender:U0(c),createVisualElement:i,Component:l};return S0(d)}}const od={current:null},aR={current:!1};function w0(){if(aR.current=!0,!!Gd)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>od.current=n.matches;n.addListener(i),i()}else od.current=!1}function k0(n,i,r){for(const l in i){const c=i[l],E=r[l];if(kt(c))n.addValue(l,c);else if(kt(E))n.addValue(l,ar(c,{owner:n}));else if(E!==c)if(n.hasValue(l)){const d=n.getValue(l);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(l);n.addValue(l,ar(d!==void 0?d:c,{owner:n}))}}for(const l in r)i[l]===void 0&&n.removeValue(l);return i}const CT=new WeakMap,x0=[...JT,wt,In],V0=n=>x0.find(_T(n)),pT=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Y0{scrapeMotionValuesFromProps(i,r,l){return{}}constructor({parent:i,props:r,presenceContext:l,reducedMotionConfig:c,blockInitialAnimation:E,visualState:d},A={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=hd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const O=La.now();this.renderScheduledAt<O&&(this.renderScheduledAt=O,ut.render(this.render,!1,!0))};const{latestValues:f,renderState:h}=d;this.latestValues=f,this.baseTarget={...f},this.initialValues=r.initial?{...f}:{},this.renderState=h,this.parent=i,this.props=r,this.presenceContext=l,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=A,this.blockInitialAnimation=!!E,this.isControllingVariants=Xs(r),this.isVariantNode=zm(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:m,...T}=this.scrapeMotionValuesFromProps(r,{},this);for(const O in T){const L=T[O];f[O]!==void 0&&kt(L)&&L.set(f[O],!1)}}mount(i){this.current=i,CT.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,l)=>this.bindToMotionValue(l,r)),aR.current||w0(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:od.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){CT.delete(this.current),this.projection&&this.projection.unmount(),Nn(this.notifyUpdate),Nn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(i,r){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const l=qn.has(i),c=r.on("change",A=>{this.latestValues[i]=A,this.props.onUpdate&&ut.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0)}),E=r.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{c(),E(),d&&d(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ji){const r=ji[i];if(!r)continue;const{isEnabled:l,Feature:c}=r;if(!this.features[i]&&c&&l(this.props)&&(this.features[i]=new c(this)),this.features[i]){const E=this.features[i];E.isMounted?E.update():(E.mount(),E.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):mt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let l=0;l<pT.length;l++){const c=pT[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const E="on"+c,d=i[E];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=k0(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const l=this.values.get(i);r!==l&&(l&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let l=this.values.get(i);return l===void 0&&r!==void 0&&(l=ar(r===null?void 0:r,{owner:this}),this.addValue(i,l)),l}readValue(i,r){var l;let c=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(l=this.getBaseTargetFromProps(this.props,i))!==null&&l!==void 0?l:this.readValueFromInstance(this.current,i,this.options);return c!=null&&(typeof c=="string"&&(KT(c)||YT(c))?c=parseFloat(c):!V0(c)&&In.test(r)&&(c=am(i,r)),this.setBaseTarget(i,kt(c)?c.get():c)),kt(c)?c.get():c}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var r;const{initial:l}=this.props;let c;if(typeof l=="string"||typeof l=="object"){const d=ud(this.props,l,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);d&&(c=d[i])}if(l&&c!==void 0)return c;const E=this.getBaseTargetFromProps(this.props,i);return E!==void 0&&!kt(E)?E:this.initialValues[i]!==void 0&&c===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new Dd),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}}class nR extends Y0{constructor(){super(...arguments),this.KeyframeResolver=nm}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){return i.style?i.style[r]:void 0}removeValueFromRenderState(i,{vars:r,style:l}){delete r[i],delete l[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;kt(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function K0(n){return window.getComputedStyle(n)}class W0 extends nR{constructor(){super(...arguments),this.type="html",this.renderInstance=jm}readValueFromInstance(i,r){if(qn.has(r)){const l=Od(r);return l&&l.default||0}else{const l=K0(i),c=(zT(r)?l.getPropertyValue(r):l[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:r}){return Pm(i,r)}build(i,r,l){xd(i,r,l.transformTemplate)}scrapeMotionValuesFromProps(i,r,l){return Fd(i,r,l)}}class z0 extends nR{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=mt}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(qn.has(r)){const l=Od(r);return l&&l.default||0}return r=_m.has(r)?r:Pd(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,l){return Xm(i,r,l)}build(i,r,l){Vd(i,r,this.isSVGTag,l.transformTemplate)}renderInstance(i,r,l,c){Jm(i,r,l,c)}mount(i){this.isSVGTag=Yd(i.tagName),super.mount(i)}}const j0=(n,i)=>Ud(n)?new z0(i):new W0(i,{allowProjection:n!==N.Fragment}),_0=F0({...DN,...i0,..._I,...o0},j0),Kd=yp(_0);class J0 extends N.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent){const l=this.props.sizeRef.current;l.height=r.offsetHeight||0,l.width=r.offsetWidth||0,l.top=r.offsetTop,l.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Z0({children:n,isPresent:i}){const r=N.useId(),l=N.useRef(null),c=N.useRef({width:0,height:0,top:0,left:0}),{nonce:E}=N.useContext(Hd);return N.useInsertionEffect(()=>{const{width:d,height:A,top:f,left:h}=c.current;if(i||!l.current||!d||!A)return;l.current.dataset.motionPopId=r;const m=document.createElement("style");return E&&(m.nonce=E),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${A}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[i]),C.jsx(J0,{isPresent:i,childRef:l,sizeRef:c,children:N.cloneElement(n,{ref:l})})}const X0=({children:n,initial:i,isPresent:r,onExitComplete:l,custom:c,presenceAffectsLayout:E,mode:d})=>{const A=wd(q0),f=N.useId(),h=N.useCallback(T=>{A.set(T,!0);for(const O of A.values())if(!O)return;l&&l()},[A,l]),m=N.useMemo(()=>({id:f,initial:i,isPresent:r,custom:c,onExitComplete:h,register:T=>(A.set(T,!1),()=>A.delete(T))}),E?[Math.random(),h]:[r,h]);return N.useMemo(()=>{A.forEach((T,O)=>A.set(O,!1))},[r]),N.useEffect(()=>{!r&&!A.size&&l&&l()},[r]),d==="popLayout"&&(n=C.jsx(Z0,{isPresent:r,children:n})),C.jsx(Js.Provider,{value:m,children:n})};function q0(){return new Map}const vs=n=>n.key||"";function gT(n){const i=[];return N.Children.forEach(n,r=>{N.isValidElement(r)&&i.push(r)}),i}const Q0=({children:n,exitBeforeEnter:i,custom:r,initial:l=!0,onExitComplete:c,presenceAffectsLayout:E=!0,mode:d="sync"})=>{const A=N.useMemo(()=>gT(n),[n]),f=A.map(vs),h=N.useRef(!0),m=N.useRef(A),T=wd(()=>new Map),[O,L]=N.useState(A),[v,F]=N.useState(A);Ym(()=>{h.current=!1,m.current=A;for(let V=0;V<v.length;V++){const w=vs(v[V]);f.includes(w)?T.delete(w):T.get(w)!==!0&&T.set(w,!1)}},[v,f.length,f.join("-")]);const M=[];if(A!==O){let V=[...A];for(let w=0;w<v.length;w++){const ie=v[w],ae=vs(ie);f.includes(ae)||(V.splice(w,0,ie),M.push(ie))}d==="wait"&&M.length&&(V=M),F(gT(V)),L(A);return}const{forceRender:I}=N.useContext(Bd);return C.jsx(C.Fragment,{children:v.map(V=>{const w=vs(V),ie=A===v||f.includes(w),ae=()=>{if(T.has(w))T.set(w,!0);else return;let Ee=!0;T.forEach(te=>{te||(Ee=!1)}),Ee&&(I==null||I(),F(m.current),c&&c())};return C.jsx(X0,{isPresent:ie,initial:!h.current||l?void 0:!1,custom:ie?void 0:r,presenceAffectsLayout:E,mode:d,onExitComplete:ie?void 0:ae,children:V},w)})})},$0=Kd.div,ey=({onClose:n})=>{const i=DT(),r=i.totalTimeMs/1e3,l=r>3600?`${Math.floor(r/3600)}h ${Math.floor(r%3600/60)}m`:r>60?`${Math.floor(r/60)}m ${Math.floor(r%60)}s`:`${Math.floor(r)}s`,c=N.useMemo(()=>Us().length+kc().length+Fs().length,[]),E=N.useMemo(()=>{const d=new Set;return[...Us(),...kc(),...Fs()].forEach(A=>{A.words.forEach(f=>d.add(f.trim().toUpperCase()))}),d.size},[]);return C.jsx("div",{className:"absolute inset-0 z-[600] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 font-oswald",children:C.jsxs($0,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-6 shadow-[0_0_40px_rgba(0,229,255,0.2)] flex flex-col gap-6",children:[C.jsxs("div",{className:"flex justify-between items-center border-b border-zinc-800 pb-2",children:[C.jsx("h2",{className:"text-3xl font-black text-neon-blue uppercase tracking-tighter italic",children:"HALL OF FAME"}),C.jsx("button",{onClick:n,className:"text-zinc-500 hover:text-white p-2",children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),C.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[C.jsx(Fi,{label:"TOTAL SCORE",value:i.totalScore,color:"text-neon-yellow"}),C.jsx(Fi,{label:"LEVELS BEAT",value:i.levelsCompleted,color:"text-neon-pink"}),C.jsx(Fi,{label:"ROWS SOLVED",value:i.rowsSolved,color:"text-neon-green"}),C.jsx(Fi,{label:"TOTAL MOVES",value:i.totalMoves,color:"text-neon-aqua"}),C.jsx(Fi,{label:"TIME PLAYED",value:l,color:"text-white"}),C.jsx(Fi,{label:"HINTS USED",value:i.hintsUsed,color:"text-neon-red"})]}),C.jsxs("div",{className:"mt-2 p-3 bg-black/50 border border-zinc-800 rounded-medium flex flex-col gap-3",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"CATEGORY MASTERY"}),C.jsxs("div",{className:"text-2xl font-black text-neon-gold leading-none mb-1",children:[i.solvedCategoryIds.length," / ",c]}),C.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:C.jsx("div",{className:"h-full bg-neon-gold shadow-[0_0_10px_#FFD400]",style:{width:`${Math.min(100,i.solvedCategoryIds.length/c*100)}%`}})})]}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"WORD MASTERY"}),C.jsxs("div",{className:"text-2xl font-black text-neon-purple leading-none mb-1",children:[i.solvedWords?i.solvedWords.length:0," / ",E]}),C.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:C.jsx("div",{className:"h-full bg-neon-purple shadow-[0_0_10px_#D400FF]",style:{width:`${Math.min(100,(i.solvedWords?i.solvedWords.length:0)/E*100)}%`}})})]})]}),C.jsx("button",{onClick:n,className:"w-full py-4 bg-white text-black font-black text-xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg",children:"BACK TO GAME"})]})})},Fi=({label:n,value:i,color:r})=>C.jsxs("div",{className:"flex flex-col gap-0.5",children:[C.jsx("span",{className:"text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none",children:n}),C.jsx("span",{className:`text-xl font-black ${r} tracking-tight`,children:i})]}),iR={textShadow:"2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 3px 3px 0px rgba(0,0,0,0.6)",WebkitTextStroke:"1px black",paintOrder:"stroke fill",fontWeight:900},ty={textShadow:`
    2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    0 4px 4px rgba(0,0,0,0.4)
  `,filter:"drop-shadow(0 2px 2px rgba(0,0,0,0.3))",paintOrder:"stroke fill"},ay={"bg-neon-red":"linear-gradient(180deg, #FF073A 0%, #D400FF 100%)","bg-neon-orange":"linear-gradient(180deg, #FF5F1F 0%, #F9FF00 100%)","bg-neon-yellow":"linear-gradient(180deg, #F9FF00 0%, #39FF14 100%)","bg-neon-lime":"linear-gradient(180deg, #39FF14 0%, #00E5FF 100%)","bg-neon-green":"linear-gradient(180deg, #00F000 0%, #0066FF 100%)","bg-neon-mint":"linear-gradient(180deg, #00FF9F 0%, #FF1FBF 100%)","bg-neon-cyan":"linear-gradient(180deg, #00FFFF 0%, #B026FF 100%)","bg-neon-sky-blue":"linear-gradient(180deg, #00BFFF 0%, #FF00FF 100%)","bg-neon-blue":"linear-gradient(180deg, #0066FF 0%, #FF073A 100%)","bg-neon-violet":"linear-gradient(180deg, #B026FF 0%, #00FFFF 100%)","bg-neon-purple":"linear-gradient(180deg, #D400FF 0%, #FF5F1F 100%)","bg-neon-magenta":"linear-gradient(180deg, #FF00FF 0%, #F9FF00 100%)","bg-neon-pink":"linear-gradient(180deg, #FF1FBF 0%, #00F000 100%)","bg-neon-rose":"linear-gradient(180deg, #FF0055 0%, #00BFFF 100%)"},Uc=["linear-gradient(180deg, #FF073A 0%, #7B00FF 33%, #0066FF 66%, #39FF14 100%)","linear-gradient(180deg, #00E5FF 0%, #FF1FBF 100%)","linear-gradient(180deg, #F9FF00 0%, #FF5F1F 100%)"],oR=(n,i)=>{if(n){for(const[r,l]of Object.entries(ay))if(n.includes(r))return`${l} fixed`}if(i){let r=0;for(let c=0;c<i.length;c++)r=i.charCodeAt(c)+((r<<5)-r);const l=Math.abs(r%Uc.length);return`${Uc[l]} fixed`}return`${Uc[0]} fixed`},ny={neutral:{scale:1,zIndex:10,transition:{duration:.1}},selected:{scale:1.03,transition:{duration:.1},zIndex:50},"correct-preview":{scale:1.05,transition:{duration:.2},zIndex:55},"swap-target":{scale:1.03,transition:{duration:.1},zIndex:40},swapping:{scale:1.05,zIndex:100,transition:{duration:.1}},"fading-out-bg":{scale:1,transition:{duration:.25}},solved:{scale:[1,1.12,1],transition:{duration:.3,ease:"easeOut"},zIndex:20},wrong:{x:[0,-6,6,-6,6,0],scale:1.02,transition:{duration:.3},zIndex:60}},iy=(n,i)=>{const r="border-4 border-white shadow-[0_0_20px_rgba(255,255,255,1)]",l="border-4 border-white shadow-[0_0_20px_#39FF14]",c="border-4 border-white shadow-[0_0_20px_#FF073A]";switch(n){case"selected":case"swapping":return`${r} z-50`;case"swap-target":return`${r} z-40`;case"correct-preview":return`bg-neon-lime ${l} z-55`;case"locked":return`${r} z-30`;case"fading-out-bg":return"border-4 border-white shadow-none transition-colors duration-250";case"solved":return i?`${i} border-4 border-white shadow-none`:"bg-zinc-800 border-4 border-white shadow-none";case"wrong":return`bg-neon-red ${c} z-60`;default:return"bg-black border-4 border-white shadow-none"}},oy=(n,i,r)=>{const l="font-oswald font-black uppercase leading-none";if(i)return r?`${l} text-2xl md:text-3xl`:`${l} text-4xl md:text-6xl`;const E=(n||"").length;return E>12?`${l} text-[10px] md:text-[16px] lg:text-[22px] tracking-tight`:E>9?`${l} text-[12px] md:text-[20px] lg:text-[28px] tracking-tight`:E>6?`${l} text-[14px] md:text-[26px] lg:text-[36px] tracking-tight`:`${l} text-[18px] md:text-[32px] lg:text-[48px] tracking-wide`},NT=Kd,ry={fontFamily:'"Oswald", sans-serif',backfaceVisibility:"hidden",WebkitFontSmoothing:"antialiased"},rR=ir.forwardRef(({data:n,onClick:i,disabled:r,targetColor:l,...c},E)=>{const d=n.status==="swapping"||n.status==="swap-target",A=n.status==="solved",f=n.status==="selected",h=n.status==="correct-preview",m=n.status==="locked",T=n.status==="fading-out-bg",O=iy(n.status,n.color||l),L=oy(n.word,n.isEmoji,A);let v={};if(A){const I=n.color||l;v.background=oR(I,n.categoryId),v.backgroundSize="100% 100vh",v.backgroundRepeat="no-repeat"}else f||n.status==="swapping"?v.backgroundColor="#00E5FF":n.status==="swap-target"?v.backgroundColor="#FF1FBF":m?v.backgroundColor="#FFD400":h?v.backgroundColor="#39FF14":v.backgroundColor="#000000";const F=()=>{if(n.isEmoji)return n.word;const I=(n.word||"").trim().split(/\s+/);return I.length<=1?n.word:I.map((V,w)=>C.jsx("span",{className:"block w-full leading-[1.1]",children:V},w))},M=n.isEmoji?{filter:A?"drop-shadow(0 0 5px rgba(255,255,255,0.5)) brightness(1.2)":f||d||h?"drop-shadow(0 0 8px #FFFFFF)":"none"}:{};return C.jsx("div",{className:"relative w-full h-full flex flex-col justify-end overflow-visible touch-action-manipulation",children:C.jsx(NT.div,{layout:!0,ref:E,initial:"neutral",animate:n.status,variants:ny,onClick:()=>!r&&i(n.id),className:`relative w-full flex items-center justify-center cursor-pointer select-none rounded-small overflow-hidden z-10 ${O} h-full touch-action-manipulation`,style:{...ry,...v,transition:"background-color 0.25s ease-in-out, background 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out"},...c,children:C.jsx(Q0,{mode:"wait",children:C.jsx(NT.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"},className:`${L} text-white z-30 text-center px-1 pointer-events-none w-full flex flex-col items-center justify-center`,style:{...n.isEmoji?ty:iR,...M},children:F()},n.word)})})})});rR.displayName="Tile";const Zi=ir.memo(rR),sy=({text:n,sizeClass:i="text-2xl",strokeOuter:r="8px",strokeInner:l="4px",className:c="",active:E=!0,gradient:d="linear-gradient(to right, #FF1FBF, #00E5FF, #F9FF00, #FF1FBF)"})=>C.jsxs("div",{className:`relative inline-block ${c} ${E?"":"opacity-40 grayscale contrast-125"}`,children:[C.jsx("style",{children:`
          @keyframes arcade-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}),C.jsx("span",{className:`absolute inset-0 ${i} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{color:"rgba(0,0,0,0.8)",transform:"translate(3px, 3px)",zIndex:-1,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:n}),C.jsx("span",{className:`absolute inset-0 ${i} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{WebkitTextStroke:`${r} white`,color:"transparent",zIndex:0},children:n}),C.jsx("span",{className:`absolute inset-0 ${i} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{WebkitTextStroke:`${l} black`,color:"transparent",zIndex:10},children:n}),C.jsx("span",{className:`relative z-20 ${i} font-black uppercase font-oswald leading-none tracking-tight`,style:{backgroundImage:d,backgroundSize:"600% auto",WebkitBackgroundClip:"text",color:"transparent",animation:E?"arcade-flow 12s linear infinite":"none"},children:n})]}),IT=({path:n,viewBox:i="0 0 24 24",className:r="",active:l=!0,sizeClass:c="w-8 h-8"})=>{const d=`icon-grad-${ir.useId()}`,A=[{offset:"0%",color:"#FF073A"},{offset:"17%",color:"#FF5F1F"},{offset:"33%",color:"#F9FF00"},{offset:"50%",color:"#39FF14"},{offset:"67%",color:"#00FFFF"},{offset:"83%",color:"#0066FF"},{offset:"100%",color:"#FF073A"}];return C.jsxs("div",{className:`relative ${c} ${r} ${l?"":"opacity-50 grayscale"}`,children:[C.jsx("svg",{viewBox:i,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:0},children:C.jsx("path",{d:n,fill:"white",stroke:"white",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round"})}),C.jsx("svg",{viewBox:i,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:10},children:C.jsx("path",{d:n,fill:"black",stroke:"black",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),C.jsxs("svg",{viewBox:i,className:"relative w-full h-full overflow-visible",style:{zIndex:20},children:[C.jsx("defs",{children:C.jsxs("linearGradient",{id:d,x1:"0%",y1:"0%",x2:"400%",y2:"0%",spreadMethod:"repeat",children:[A.map((f,h)=>C.jsx("stop",{offset:f.offset,stopColor:f.color},h)),C.jsx("animateTransform",{attributeName:"gradientTransform",type:"translate",from:"0 0",to:"-4 0",dur:"8s",repeatCount:"indefinite"})]})}),C.jsx("path",{d:n,fill:l?`url(#${d})`:"#555"})]})]})},Wd=({modeName:n,levelIndex:i,onOpenSettings:r,isReviewing:l,onNext:c,hintsEnabled:E,onToggleHints:d,children:A,leftContent:f,rowsLeft:h})=>C.jsxs("header",{className:"flex items-center justify-between px-2 sm:px-4 shrink-0 z-[60] bg-black select-none w-full gap-2 text-right overflow-hidden",style:{height:$f,minHeight:$f},children:[C.jsx("div",{className:"flex-1 flex items-center justify-start gap-3 h-full",children:f}),C.jsxs("div",{className:"flex items-center gap-2 justify-end",children:[A,l&&c?C.jsx("div",{className:"pr-1",children:C.jsx("button",{onClick:c,className:"px-6 py-1.5 md:px-10 md:py-2 text-white font-black font-oswald text-sm md:text-base rounded-small border-4 border-white shadow-[0_0_20px_rgba(255,255,255,1)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap bg-black",style:iR,children:"NEXT PUZZLE"})}):C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"flex flex-col items-end justify-center mr-2",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-0.5 justify-end",children:[C.jsxs("span",{className:"text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest font-oswald",children:["LVL ",i]}),h!==void 0&&C.jsxs("span",{className:"text-[10px] md:text-xs text-neon-blue font-bold uppercase border-l border-zinc-800 pl-2 font-oswald",children:["ROWS: ",h]})]}),C.jsx(sy,{text:n,sizeClass:"text-2xl md:text-3xl",gradient:"linear-gradient(to right, #FF073A, #FF5F1F, #F9FF00, #39FF14, #00FFFF, #0066FF, #FF073A)"})]}),d&&C.jsx("button",{onClick:d,className:"transform transition-transform active:scale-95 hover:scale-110",title:"Toggle Hints",children:C.jsx(IT,{path:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",active:E,sizeClass:"w-7 h-7 md:w-8 md:h-8"})})]}),C.jsx("button",{onClick:r,className:"transform transition-transform active:scale-95 hover:scale-110 ml-1",title:"Settings",children:C.jsx(IT,{path:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84a.484.484 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 0 0-.59.22L2.65 8.91a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.27.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",active:!0,sizeClass:"w-7 h-7 md:w-8 md:h-8"})})]})]}),sR=[{id:"t0",word:"APPLE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t1",word:"BANANA",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t2",word:"GRAPE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t3",word:"DOG",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t4",word:"CAT",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t5",word:"LION",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t6",word:"TIGER",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t7",word:"PEAR",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t8",word:"RED",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t9",word:"BLUE",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t10",word:"GREEN",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t11",word:"YELLOW",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t12",word:"HAMMER",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t13",word:"DRILL",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t14",word:"SAW",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t15",word:"WRENCH",categoryId:"tool",categoryName:"TOOL",status:"neutral"}],ly=()=>{const n=JSON.parse(JSON.stringify(sR)),i=n[10];n[10]=n[13],n[13]=i;const r=n[11];return n[11]=n[12],n[12]=r,n},uy=n=>n===ye.CLASSIC?"CLASSIC GRID":n===ye.LEVEL_EMOJI?"EMOJI MATCH":n===ye.LEVEL_SYNONYMS?"SYNONYMS":n===ye.LEVEL_THEMED?"THEMED":n===ye.LEVEL_MIND_MATCH?"MIND MATCH":"TUTORIAL",cy=({mode:n,onComplete:i})=>{const r=n===ye.CLASSIC||n===ye.LEVEL_EMOJI||n===ye.LEVEL_THEMED||n===ye.LEVEL_SYNONYMS,[l,c]=N.useState(1),[E,d]=N.useState(r?ly():sR),A=N.useRef(new Map),f=async(m,T)=>{const O=A.current.get(m),L=A.current.get(T);if(Ue.playSwap(),O&&L){const v=O.getBoundingClientRect(),F=L.getBoundingClientRect(),M=F.left-v.left,I=F.top-v.top;O.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",O.style.transform=`translate(${M}px, ${I}px) scale(1.1)`,O.style.zIndex="50",O.style.boxShadow="0 10px 20px rgba(0,0,0,0.5)",L.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",L.style.transform=`translate(${-M}px, ${-I}px) scale(0.9)`,L.style.zIndex="40",await new Promise(V=>setTimeout(V,400)),O.style.transition="",O.style.transform="",O.style.zIndex="",O.style.boxShadow="",L.style.transition="",L.style.transform="",L.style.zIndex=""}};N.useEffect(()=>{if(!r)return;let m=!0;return(async()=>{if(await new Promise(M=>setTimeout(M,600)),!m)return;const O="t13",L="t10";if(await new Promise(M=>setTimeout(M,300)),!m||(d(M=>M.map(I=>I.id===O?{...I,status:"selected"}:I)),Ue.playSelect(),await new Promise(M=>setTimeout(M,400)),!m)||(d(M=>M.map(I=>I.id===L?{...I,status:"swap-target"}:I)),Ue.playSelect(),await new Promise(M=>setTimeout(M,200)),!m)||(await f(O,L),d(M=>{const I=[...M],V=I.findIndex(ie=>ie.id===O),w=I.findIndex(ie=>ie.id===L);return[I[V],I[w]]=[I[w],I[V]],I[V]={...I[V],status:"neutral"},I[w]={...I[w],status:"neutral"},I}),await new Promise(M=>setTimeout(M,400)),!m))return;const v="t12",F="t11";await new Promise(M=>setTimeout(M,300)),m&&(d(M=>M.map(I=>I.id===v?{...I,status:"selected"}:I)),Ue.playSelect(),await new Promise(M=>setTimeout(M,400)),m&&(d(M=>M.map(I=>I.id===F?{...I,status:"swap-target"}:I)),Ue.playSelect(),await new Promise(M=>setTimeout(M,200)),m&&(await f(v,F),d(M=>{const I=[...M],V=I.findIndex(ie=>ie.id===v),w=I.findIndex(ie=>ie.id===F);return[I[V],I[w]]=[I[w],I[V]],I[V]={...I[V],status:"neutral"},I[w]={...I[w],status:"neutral"},I}),await new Promise(M=>setTimeout(M,400)),m&&(Ue.playRowSolved(),d(M=>M.map((I,V)=>V>=8&&V<12?{...I,status:"solved",color:"bg-neon-green border-white"}:V>=12?{...I,status:"solved",color:"bg-neon-yellow border-white"}:I)),c(4),await new Promise(M=>setTimeout(M,600)),m&&(Ue.playSelect(),d(M=>M.map(I=>I.id==="t3"?{...I,status:"selected"}:I)),c(5),await new Promise(M=>setTimeout(M,800)),m&&(Ue.playSelect(),d(M=>M.map(I=>I.id==="t7"?{...I,status:"swap-target"}:I)),await new Promise(M=>setTimeout(M,200)),await f("t3","t7"),d(M=>{const I=[...M],V=I.findIndex(ie=>ie.id==="t3"),w=I.findIndex(ie=>ie.id==="t7");return[I[V],I[w]]=[I[w],I[V]],I[V]={...I[V],status:"neutral"},I[w]={...I[w],status:"neutral"},I}),await new Promise(M=>setTimeout(M,300)),m&&(Ue.playRowSolved(),Ue.playWin(),d(M=>M.map((I,V)=>V<4?{...I,status:"solved",color:"bg-neon-blue border-white"}:V>=4&&V<8?{...I,status:"solved",color:"bg-neon-pink border-white"}:V>=8&&V<12?{...I,status:"solved",color:"bg-neon-green border-white"}:V>=12?{...I,status:"solved",color:"bg-neon-yellow border-white"}:I)),await new Promise(M=>setTimeout(M,800)),m&&(c(6),await new Promise(M=>setTimeout(M,2500)),m&&(c(7),await new Promise(M=>setTimeout(M,2500)),m&&c(8))))))))))})(),()=>{m=!1}},[r]),N.useEffect(()=>{if(!r){const m=setTimeout(()=>{i()},3e3);return()=>clearTimeout(m)}},[r,i]);const h=()=>{var T;const m=[];for(let O=0;O<4;O++){const L=E.slice(O*4,O*4+4),v=L.every(I=>I.status==="solved"),F=(T=L[0])==null?void 0:T.categoryName;m.push(C.jsx("div",{className:"relative w-full z-10 flex flex-col justify-center min-h-0 flex-1 overflow-visible",children:C.jsxs("div",{className:"relative w-full h-full p-1",children:[v&&C.jsx("div",{className:"absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-medium"}),v&&C.jsx("div",{className:"absolute top-0 left-8 z-[100] transform",style:{transform:"translateY(calc(-100% + 4px))"},children:C.jsx("div",{className:"animate-pop bg-black text-white px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] font-oswald",children:F})}),C.jsx("div",{className:`grid grid-cols-4 gap-2 w-full h-full relative z-10 transition-all duration-300 ${v?"drop-shadow-xl p-3":""}`,children:L.map(I=>C.jsx("div",{className:"relative w-full h-full",children:C.jsx(Zi,{data:I,"data-tile-id":I.id,onClick:()=>{},disabled:!0,ref:V=>{V?A.current.set(I.id,V):A.current.delete(I.id)}})},I.id))})]})},O))}return m};return C.jsxs("div",{className:"absolute inset-0 z-[200] bg-black flex flex-col font-oswald animate-fade-in",children:[C.jsx(Wd,{modeName:uy(n),levelIndex:1,onOpenSettings:()=>{},isReviewing:!1,hintsEnabled:!0,onManualHint:()=>{},onToggleHints:()=>{}}),C.jsx("div",{className:"flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden",children:C.jsxs("div",{className:`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${l>=6?"blur-sm opacity-40 scale-95":""}`,children:[C.jsx("div",{className:"w-full max-w-sm aspect-square max-h-[55vh] bg-zinc-900/50 rounded-xl p-2 mb-4 border-2 border-zinc-700 relative flex flex-col shrink-0 shadow-2xl overflow-visible mt-8",children:C.jsx("div",{className:"w-full h-full flex flex-col gap-1",children:h()})}),C.jsxs("div",{className:"h-16 flex items-center justify-center mb-4 shrink-0 w-full px-4",children:[l===1&&C.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop shadow-lg text-center",children:C.jsx("p",{className:"text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"FIND 4 TILES THAT BELONG TOGETHER"})}),(l===2||l===3)&&C.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-neon-blue animate-fade-in shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center",children:C.jsx("p",{className:"text-neon-blue font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"SWAP TO MAKE A MATCH"})})]}),C.jsx("button",{onClick:i,className:`text-zinc-500 font-oswald text-sm uppercase tracking-widest hover:text-white transition-colors mt-auto pb-4 ${l>=6?"opacity-0 pointer-events-none":""}`,children:"SKIP TUTORIAL"})]})}),l===6&&C.jsx("div",{className:"absolute top-[60px] right-[50px] z-[220] animate-bounce",children:C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-yellow absolute -top-2 right-4"}),C.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-yellow text-center shadow-[0_0_15px_rgba(255,255,0,0.3)]",children:C.jsxs("p",{className:"text-neon-yellow font-oswald text-sm font-bold uppercase",children:["TURN HINTS",C.jsx("br",{}),"ON AND OFF"]})})]})}),l===7&&C.jsx("div",{className:"absolute top-[60px] right-[10px] z-[220] animate-bounce",children:C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-blue absolute -top-2 right-2"}),C.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-blue text-center shadow-[0_0_15px_rgba(0,229,255,0.3)]",children:C.jsx("p",{className:"text-neon-blue font-oswald text-sm font-bold uppercase",children:"SETTINGS"})})]})}),l===8&&C.jsx("div",{className:"absolute inset-0 z-[210] flex items-center justify-center",children:C.jsx("button",{onClick:i,className:"px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop",children:"START"})})]})},dy=({seed:n,className:i=""})=>C.jsx("div",{className:`absolute inset-0 z-0 bg-black border-4 border-white rounded-medium overflow-hidden ${i}`,children:C.jsx("div",{className:"absolute inset-0 bg-black/40 pointer-events-none z-[2]"})}),zd=ir.memo(dy),qs=({modeName:n,levelIndex:i,onOpenSettings:r,isReviewing:l,onNext:c,showHintButton:E,onTurnOffHints:d,onManualHint:A,onToggleHints:f,hintsEnabled:h,headerExtras:m,children:T,rowsLeft:O})=>C.jsxs("div",{className:"flex flex-col h-full w-full max-w-4xl mx-auto select-none overflow-hidden relative bg-black",children:[C.jsx(Wd,{modeName:n,levelIndex:i,onOpenSettings:r,isReviewing:l,onNext:c,showHintButton:E,onTurnOffHints:d,onManualHint:A,onToggleHints:f,hintsEnabled:h,rowsLeft:O,children:m}),C.jsx("main",{className:"flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black overflow-visible",children:T})]}),_i=(n,i,r=4)=>{const l=i.filter(T=>T.name.startsWith("Famous")),c=i.filter(T=>!T.name.startsWith("Famous")),E=[],d=new Set,A=new Set,f=Math.random()<.1;let h=!1;const m=T=>{const O=ja(T);for(const L of O){if(E.length>=n)break;if(h&&L.name.startsWith("Famous"))continue;const v=L.name.trim().toUpperCase();if(d.has(v))continue;const F=L.words.filter(M=>{const I=M.trim().toUpperCase();return!(I.length>sd||d.has(I)||A.has(I)||I===v)});if(F.length>=r){const I=ja(F).slice(0,r);I.forEach(V=>d.add(V.trim().toUpperCase())),A.add(v),E.push({...L,words:I}),L.name.startsWith("Famous")&&(h=!0)}}};return f&&l.length>0&&m(l),m(c),E},Xi=N.forwardRef((n,i)=>{const[r,l]=N.useState([]);return N.useImperativeHandle(i,()=>({explode:(c,E,d,A=12)=>{const f=[];for(let h=0;h<A;h++){const m=Math.random()*Math.PI*2,T=Math.random()*8+2;f.push({id:Date.now()+Math.random(),x:c,y:E,vx:Math.cos(m)*T,vy:Math.sin(m)*T,color:d,size:Math.random()*6+4,life:1,decay:Math.random()*.03+.02})}l(h=>[...h,...f])}})),N.useEffect(()=>{let c;const E=()=>{l(d=>d.length===0?d:d.map(A=>({...A,x:A.x+A.vx,y:A.y+A.vy,vy:A.vy+.2,life:A.life-A.decay})).filter(A=>A.life>0)),c=requestAnimationFrame(E)};return c=requestAnimationFrame(E),()=>cancelAnimationFrame(c)},[]),C.jsx("div",{className:"absolute inset-0 pointer-events-none z-[100] overflow-hidden",children:r.map(c=>C.jsx("div",{style:{position:"absolute",left:c.x,top:c.y,width:c.size,height:c.size,backgroundColor:c.color,opacity:c.life,transform:`scale(${c.life})`,borderRadius:"2px",boxShadow:`0 0 4px ${c.color}`}},c.id))})});Xi.displayName="ParticleOverlay";const Ey=({csvData:n,onComplete:i,mode:r,levelIndex:l,hintsEnabled:c,onOpenSettings:E,setHintsEnabled:d,isReviewing:A,onNext:f,isAutoPlaying:h})=>{const[m,T]=N.useState([]),[O,L]=N.useState(null),[v,F]=N.useState(!0),[M,I]=N.useState(!1),[V,w]=N.useState(!1),[ie,ae]=N.useState(0),[Ee,te]=N.useState(0),[re,Te]=N.useState(0),[De,Pe]=N.useState(0),[Ge,ve]=N.useState(new Set),[We,we]=N.useState(null),P=N.useRef(Date.now()),q=N.useRef(Date.now()),ce=N.useRef(new Map),oe=N.useRef(null);N.useEffect(()=>{if(V){const B=setTimeout(()=>{w(!1),L(null)},2e3);return()=>clearTimeout(B)}},[V]),N.useEffect(()=>{w(!1),L(null),c&&(P.current=Date.now())},[c]);const se=N.useMemo(()=>{const B=new Map;return m.forEach(k=>{if(!B.has(k.categoryId)){const x=m.filter(K=>K.categoryId===k.categoryId);B.set(k.categoryId,{name:k.categoryName,isSolved:x.every(K=>K.status==="solved")})}}),Array.from(B.values())},[m]),p=()=>{switch(r){case ye.LEVEL_SYNONYMS:return"SYNONYMS";case ye.LEVEL_THEMED:return"THEMED";default:return"CLASSIC"}};N.useEffect(()=>{if(v||M)return;const B=new Set;for(let k=0;k<m.length/4;k++){const x=m.slice(k*4,k*4+4);if(x.every(J=>J.status==="solved"))continue;const K={};x.forEach(J=>{K[J.categoryId]=(K[J.categoryId]||0)+1}),Object.values(K).some(J=>J===3)&&B.add(k)}ve(B)},[m,v,M]);const b=N.useCallback(B=>{var ee;const k=Math.floor(B.length/4);let x=0;const K=[...B];let J=!1;for(let $=0;$<k;$++){const X=K.slice($*4,$*4+4);if(X.every(ue=>ue.status==="solved")){x++;continue}const Oe=X[0].categoryId;if(X.every(ue=>ue.categoryId===Oe)&&Oe!=="blank"){J=!0,x++,Ue.playRowSolved(),P.current=Date.now(),Te(Q=>Q+1);const ue=Ca[0].solvedColors[$%Ca[0].solvedColors.length];for(let Q=$*4;Q<$*4+4;Q++){const Se=K[Q],Ae=(ee=ce.current.get(Se.id))==null?void 0:ee.getBoundingClientRect();Ae&&oe.current&&oe.current.explode(Ae.left+Ae.width/2,Ae.top+Ae.height/2,"#FFFFFF"),K[Q]={...K[Q],status:"solved",isSolved:!0,color:ue}}}}if(J?T(K):Pe($=>$+1),x===k&&k>0&&!M){Ue.playWin(),I(!0);const $=Array.from(new Set(K.map(Oe=>Oe.categoryId))),X=K.map(Oe=>Oe.word);setTimeout(()=>i({timeMs:Date.now()-q.current,hintsUsedCount:Ee,hintsUsed:Ee,moves:ie,rowEfficiency:re,mistakes:De,solvedCategoryIds:$,solvedWords:X}),1e3)}},[M,Ee,ie,i,re,De]);N.useEffect(()=>{if(!h||M||V||v||A)return;const k=setTimeout(()=>{if(document.hidden)return;const x=4,K=Math.floor(m.length/x);let J=-1;for(let Q=0;Q<K;Q++)if(!m.slice(Q*x,(Q+1)*x).every(Ae=>Ae.status==="solved")){J=Q;break}if(J===-1)return;const ee=new Set(m.filter(Q=>!Q.isSolved).map(Q=>Q.categoryId));if(ee.size===0)return;const $=Array.from(ee)[0],X=J*x,Oe=X+x;let ne=null;for(let Q=0;Q<m.length;Q++)if(!(Q>=X&&Q<Oe)&&m[Q].categoryId===$&&!m[Q].isSolved){ne=m[Q].id;break}let ue=null;for(let Q=X;Q<Oe;Q++)if(m[Q].categoryId!==$&&!m[Q].isSolved){ue=m[Q].id;break}ne&&ue&&j(O?O===ne?ue:O===ue?ne:O:ne)},400);return()=>clearTimeout(k)},[h,M,V,m,v,A,O]),N.useEffect(()=>{if(!n||n.length===0){we("No game data available"),F(!1);return}try{let B=n;r===ye.LEVEL_THEMED&&(B=rp(n.length,n).categories);const k=_i(7,B,4);if(k.length<4){we("Not enough valid categories found"),F(!1);return}const x=[];for(const K of k)K.words.slice(0,4).forEach(ee=>{x.push({id:Math.random().toString(36).substr(2,9),word:ee,categoryId:K.id,categoryName:K.name.includes(":")?K.name.split(":")[1].trim():K.name,status:"neutral",isSolved:!1})});T(x.sort(()=>.5-Math.random())),I(!1),F(!1),ae(0),Pe(0),q.current=Date.now(),P.current=Date.now(),te(0),Te(0),we(null)}catch(B){console.error("Level init error",B),we("Failed to initialize level"),F(!1)}},[n,r,l]);const z=N.useCallback(()=>{if(M||V||!c)return;const B=m.filter(ne=>ne.status==="neutral"||ne.status==="selected");if(B.length<2)return;const k=Array.from(new Set(B.map(ne=>ne.categoryId)));if(k.length===0)return;const x=new Map;for(let ne=0;ne<m.length/4;ne++){const Q=m.slice(ne*4,ne*4+4).filter(Se=>Se.status==="locked");Q.length>0&&x.set(Q[0].categoryId,ne)}let K=k.find(ne=>x.has(ne));if(K||(K=k[Math.floor(Math.random()*k.length)]),!K)return;const J=B.filter(ne=>ne.categoryId===K);if(J.length<2)return;const ee=J.slice(0,2);let $=x.get(K)??-1;if($===-1){const ne=[];for(let ue=0;ue<m.length/4;ue++){const Q=m.slice(ue*4,ue*4+4),Se=Q.every(me=>me.status==="solved"),Ae=Q.some(me=>me.status==="locked");!Se&&!Ae&&ne.push(ue)}if(ne.length===0)return;$=ne[Math.floor(Math.random()*ne.length)]}const X=[...m],Oe=$*4;ee.forEach(ne=>{let ue=-1;for(let Q=0;Q<4;Q++)if(X[Oe+Q].status!=="locked"&&X[Oe+Q].status!=="solved"){ue=Oe+Q;break}if(ue!==-1){const Q=X.findIndex(Se=>Se.id===ne.id);if(Q!==ue){const Se=X[ue];X[ue]={...X[Q],status:"locked"},X[Q]={...Se,status:Se.status==="locked"?"locked":"neutral"}}else X[ue]={...X[ue],status:"locked"}}}),T(X),Ue.playTick(),te(ne=>ne+1),P.current=Date.now(),setTimeout(()=>b(X),50)},[m,M,V,c,b]);N.useEffect(()=>{if(M||v||!c)return;const B=setInterval(()=>{document.hidden||Date.now()-P.current>9e4&&z()},1e3);return()=>clearInterval(B)},[M,v,c,m,z]);const j=B=>{if(M||V)return;const k=m.find(x=>x.id===B);if(!(!k||k.status==="solved"||k.status==="locked"))if(O===null)Ue.playSelect(),L(B),T(x=>x.map(K=>K.id===B?{...K,status:"selected"}:K));else if(O===B)L(null),T(x=>x.map(K=>K.id===B?{...K,status:"neutral"}:K));else{const x=m.findIndex(J=>J.id===O),K=m.findIndex(J=>J.id===B);if(x===-1||K===-1)return;w(!0),ae(J=>J+1),Ue.playSwap(),T(J=>J.map(ee=>ee.id===O?{...ee,status:"swapping"}:ee.id===B?{...ee,status:"swap-target"}:ee)),setTimeout(()=>{T(J=>{const ee=[...J],$=ee[x],X=ee[K];return ee[x]={...$,word:X.word,categoryId:X.categoryId,categoryName:X.categoryName,isEmoji:X.isEmoji},ee[K]={...X,word:$.word,categoryId:$.categoryId,categoryName:$.categoryName,isEmoji:$.isEmoji},ee}),setTimeout(()=>{T(J=>J.map(ee=>ee.id===O||ee.id===B?{...ee,status:"fading-out-bg"}:ee)),setTimeout(()=>{T(J=>{const ee=J.map($=>$.status==="fading-out-bg"?{...$,status:"neutral"}:$);return setTimeout(()=>b(ee),50),ee}),L(null),w(!1)},250)},450)},50)}};return v?C.jsx("div",{className:"flex-1 flex items-center justify-center",children:C.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"})}):We?C.jsx("div",{className:"flex-1 flex items-center justify-center p-4",children:C.jsxs("div",{className:"text-center text-neon-red font-oswald text-xl border-2 border-neon-red p-4 rounded-lg bg-black",children:[We,C.jsx("button",{onClick:()=>window.location.reload(),className:"block mt-4 w-full py-2 bg-white text-black font-bold uppercase rounded hover:bg-zinc-200",children:"Retry"})]})}):C.jsxs(qs,{modeName:p(),levelIndex:l,onOpenSettings:()=>E==null?void 0:E(se),isReviewing:A,onNext:f,hintsEnabled:c,onToggleHints:()=>d==null?void 0:d(!c),children:[C.jsx(Xi,{ref:oe}),C.jsx("div",{className:"flex-1 flex flex-col gap-1.5 overflow-visible pointer-events-auto",children:Array.from({length:m.length/4}).map((B,k)=>{const x=m.slice(k*4,k*4+4);if(x.length===0)return null;const K=x.every(ee=>ee.status==="solved"),J=Ge.has(k);return C.jsxs("div",{className:"flex-1 relative min-h-0 overflow-visible",children:[K&&C.jsx(zd,{seed:x[0].categoryId}),C.jsx("div",{className:`
                    absolute inset-0 z-0 transition-opacity duration-500 rounded-medium
                    ${J&&!K?"bg-white/5 border border-white/40 animate-pulse-highlight":"opacity-0"}
                  `}),K&&C.jsx("div",{className:"absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]",children:C.jsx("div",{className:"px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white whitespace-nowrap shadow-[0_-4px_12px_rgba(0,0,0,0.5)]",children:x[0].categoryName})}),C.jsx("div",{className:`grid grid-cols-4 gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${K?"p-3":"p-1"}`,children:x.map(ee=>C.jsx(Zi,{data:ee,onClick:j,ref:$=>{$&&ce.current.set(ee.id,$)}},ee.id))})]},k)})})]})},Sy=({onComplete:n,levelIndex:i,hintsEnabled:r,setHintsEnabled:l,onOpenSettings:c,isReviewing:E,onNext:d,isAutoPlaying:A})=>{const[f,h]=N.useState([]),[m,T]=N.useState(null),[O,L]=N.useState(!0),[v,F]=N.useState(!1),[M,I]=N.useState(!1),[V,w]=N.useState(0),[ie,ae]=N.useState(0),[Ee,te]=N.useState(0),[re,Te]=N.useState(0),[De,Pe]=N.useState(new Set),Ge=N.useRef(Date.now()),ve=N.useRef(Date.now()),We=N.useRef(new Map),we=N.useRef(null),P=3;N.useEffect(()=>{if(M){const p=setTimeout(()=>{I(!1),T(null)},2e3);return()=>clearTimeout(p)}},[M]),N.useEffect(()=>{I(!1),T(null),r&&(ve.current=Date.now())},[r]);const q=N.useMemo(()=>{const p=new Map;return f.forEach(b=>{if(!p.has(b.categoryId)){const z=f.filter(j=>j.categoryId===b.categoryId);p.set(b.categoryId,{name:b.categoryName,isSolved:z.every(j=>j.status==="solved")})}}),Array.from(p.values())},[f]);N.useEffect(()=>{if(O||v)return;const p=new Set;for(let b=0;b<f.length/P;b++){const z=f.slice(b*P,b*P+P);if(z.every(B=>B.status==="solved"))continue;const j={};z.forEach(B=>{j[B.categoryId]=(j[B.categoryId]||0)+1}),Object.values(j).some(B=>B===2)&&p.add(b)}Pe(p)},[f,O,v]);const ce=N.useCallback(p=>{var k;const b=[...p];let z=!1,j=0;const B=b.length/P;for(let x=0;x<B;x++){const K=b.slice(x*P,x*P+P);if(K.every(J=>J.status==="solved")){j++;continue}if(K.every(J=>J.categoryId===K[0].categoryId)){z=!0,j++,Ue.playRowSolved(),ve.current=Date.now(),Te(ee=>ee+1);const J=Ca[0].solvedColors[x%Ca[0].solvedColors.length];for(let ee=x*P;ee<x*P+P;ee++){const $=b[ee].id,X=(k=We.current.get($))==null?void 0:k.getBoundingClientRect();X&&we.current&&we.current.explode(X.left+X.width/2,X.top+X.height/2,"#FFFFFF"),b[ee]={...b[ee],status:"solved",color:J,isSolved:!0}}}}if(z?h(b):ae(x=>x+1),j===B&&B>0&&!v){Ue.playWin(),F(!0);const x=Array.from(new Set(b.map(J=>J.categoryId))),K=b.map(J=>J.word);setTimeout(()=>n({timeMs:Date.now()-Ge.current,hintsUsedCount:Ee,hintsUsed:Ee,moves:V,mistakes:ie,rowEfficiency:re,solvedCategoryIds:x,solvedWords:K}),1e3)}},[v,V,n,Ee,ie,re]);N.useEffect(()=>{if(!A||v||M||O||E)return;const b=setTimeout(()=>{if(document.hidden)return;const z=P,j=Math.floor(f.length/z);let B=-1;for(let X=0;X<j;X++)if(!f.slice(X*z,(X+1)*z).every(ne=>ne.status==="solved")){B=X;break}if(B===-1)return;const k=new Set(f.filter(X=>!X.isSolved).map(X=>X.categoryId));if(k.size===0)return;const x=Array.from(k)[0],K=B*z,J=K+z;let ee=null;for(let X=0;X<f.length;X++)if(!(X>=K&&X<J)&&f[X].categoryId===x&&!f[X].isSolved){ee=f[X].id;break}let $=null;for(let X=K;X<J;X++)if(f[X].categoryId!==x&&!f[X].isSolved){$=f[X].id;break}ee&&$&&se(m?m===ee?$:m===$?ee:m:ee)},400);return()=>clearTimeout(b)},[A,v,M,f,O,E,m]),N.useEffect(()=>{const p=Fs(),z=_i(7,p,3),j=[];for(const B of z)B.words.slice(0,3).forEach(x=>{j.push({id:Math.random().toString(36).substr(2,9),word:x,categoryId:B.id,categoryName:B.name,status:"neutral",isEmoji:!0,isSolved:!1})});h(j.sort(()=>.5-Math.random())),L(!1),w(0),ae(0),Te(0),Ge.current=Date.now(),ve.current=Date.now()},[i]);const oe=()=>{if(v||M||!r)return;const p=f.filter(ee=>ee.status==="neutral"||ee.status==="selected");if(p.length<2)return;const b=Array.from(new Set(p.map(ee=>ee.categoryId)));if(b.length===0)return;const z=new Map;for(let ee=0;ee<f.length/P;ee++){const X=f.slice(ee*P,ee*P+P).filter(Oe=>Oe.status==="locked");X.length>0&&z.set(X[0].categoryId,ee)}let j=b.find(ee=>z.has(ee));if(j||(j=b[Math.floor(Math.random()*b.length)]),!j)return;const B=p.filter(ee=>ee.categoryId===j);if(B.length<2)return;const k=B.slice(0,2);let x=z.get(j)??-1;if(x===-1){const ee=[];for(let $=0;$<f.length/P;$++){const X=f.slice($*P,$*P+P);!X.every(Oe=>Oe.status==="solved")&&!X.some(Oe=>Oe.status==="locked")&&ee.push($)}if(ee.length===0)return;x=ee[Math.floor(Math.random()*ee.length)]}const K=[...f],J=x*P;k.forEach(ee=>{let $=-1;for(let Oe=0;Oe<P;Oe++)if(K[J+Oe].status!=="locked"&&K[J+Oe].status!=="solved"){$=J+Oe;break}if($===-1)return;const X=K.findIndex(Oe=>Oe.id===ee.id);if(X!==$){const Oe=K[$];K[$]={...K[X],status:"locked"},K[X]={...Oe,status:Oe.status==="locked"?"locked":"neutral"}}else K[$]={...K[$],status:"locked"}}),h(K),Ue.playTick(),te(ee=>ee+1),ve.current=Date.now(),setTimeout(()=>ce(K),50)};N.useEffect(()=>{if(v||O||!r)return;const p=setInterval(()=>{document.hidden||Date.now()-ve.current>9e4&&oe()},1e3);return()=>clearInterval(p)},[v,O,r,f]);const se=p=>{if(v||M)return;const b=f.find(z=>z.id===p);if(!(!b||b.status==="solved"||b.status==="locked"))if(m===null)Ue.playSelect(),T(p),h(z=>z.map(j=>j.id===p?{...j,status:"selected"}:j));else if(m===p)T(null),h(z=>z.map(j=>j.id===p?{...j,status:"neutral"}:j));else{const z=f.findIndex(B=>B.id===m),j=f.findIndex(B=>B.id===p);if(z===-1||j===-1)return;I(!0),w(B=>B+1),Ue.playSwap(),h(B=>B.map(k=>k.id===m?{...k,status:"swapping"}:k.id===p?{...k,status:"swap-target"}:k)),setTimeout(()=>{h(B=>{const k=[...B],x=k[z],K=k[j];return k[z]={...x,word:K.word,categoryId:K.categoryId,categoryName:K.categoryName,isEmoji:K.isEmoji},k[j]={...K,word:x.word,categoryId:x.categoryId,categoryName:x.categoryName,isEmoji:x.isEmoji},k}),setTimeout(()=>{h(B=>B.map(k=>k.id===m||k.id===p?{...k,status:"fading-out-bg"}:k)),setTimeout(()=>{h(B=>{const k=B.map(x=>x.status==="fading-out-bg"?{...x,status:"neutral"}:x);return setTimeout(()=>ce(k),50),k}),T(null),I(!1)},250)},450)},50)}};return O?null:C.jsxs(qs,{modeName:"EMOJI",levelIndex:i,onOpenSettings:()=>c==null?void 0:c(q),isReviewing:E,onNext:d,hintsEnabled:r,onToggleHints:()=>l(!r),children:[C.jsx(Xi,{ref:we}),C.jsx("div",{className:"flex-1 flex flex-col gap-1.5 overflow-visible pointer-events-auto",children:Array.from({length:f.length/P}).map((p,b)=>{const z=f.slice(b*P,b*P+P),j=z.every(k=>k.status==="solved"),B=De.has(b);return C.jsxs("div",{className:"flex-1 relative min-h-0 overflow-visible",children:[j&&C.jsx(zd,{seed:z[0].categoryId}),C.jsx("div",{className:`
                    absolute inset-0 z-0 transition-opacity duration-500 rounded-medium
                    ${B&&!j?"bg-white/5 border border-white/40 animate-pulse-highlight":"opacity-0"}
                  `}),j&&C.jsx("div",{className:"absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]",children:C.jsx("div",{className:"px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white whitespace-nowrap shadow-[0_-4px_12px_rgba(0,0,0,0.5)]",children:z[0].categoryName})}),C.jsx("div",{className:`grid grid-cols-3 gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${j?"p-3":"p-1"}`,children:z.map(k=>C.jsx(Zi,{data:k,onClick:se,ref:x=>{x&&We.current.set(k.id,x)}},k.id))})]},b)})})]})},Ay=({csvData:n,onComplete:i,onGameOver:r,levelIndex:l,onThemeChange:c,hintsEnabled:E,setHintsEnabled:d,onOpenSettings:A,isReviewing:f,onNext:h,isAutoPlaying:m})=>{const[T,O]=N.useState(null),[L,v]=N.useState([]),[F,M]=N.useState(0),[I,V]=N.useState(0),[w,ie]=N.useState(!1),[ae,Ee]=N.useState(null),[te,re]=N.useState(!1),[Te,De]=N.useState(0),[Pe,Ge]=N.useState(!1),[ve,We]=N.useState(Ca[0]),[we,P]=N.useState(0),[q,ce]=N.useState(0),[oe,se]=N.useState(0),p=N.useRef(Date.now()),b=N.useRef(Date.now()),z=N.useRef(null),j=N.useRef([]),B=6,k=5,x=3;N.useEffect(()=>{Ue.resume(),b.current=Date.now(),j.current=[]},[l]),N.useEffect(()=>{E&&(p.current=Date.now())},[E]),N.useEffect(()=>{if(!m||te||w||f||ae)return;const X=setTimeout(()=>{if(document.hidden)return;const Oe=L.find(ne=>ne.categoryId===(T==null?void 0:T.id)&&ne.status!=="solved"&&ne.status!=="locked");Oe&&ee(Oe.id)},600);return()=>clearTimeout(X)},[m,te,w,L,ae,T,f]),N.useEffect(()=>{if(te||w||!E)return;const $=setInterval(()=>{document.hidden||Date.now()-p.current>9e4&&K()},1e3);return()=>clearInterval($)},[L,te,w,E]);const K=()=>{if(!E)return;const $=L.filter(ne=>ne.categoryId===(T==null?void 0:T.id)&&ne.status==="neutral");if($.length<2)return;const X=new Map;for(let ne=0;ne<L.length/x;ne++){const Q=L.slice(ne*x,ne*x+x).filter(Se=>Se.status==="locked");Q.length>0&&X.set(Q[0].categoryId,ne)}let Oe=X.get(T.id)??-1;if(Oe===-1){const ne=[];for(let ue=0;ue<L.length/x;ue++)L.slice(ue*x,ue*x+x).some(Ae=>Ae.status==="locked"||Ae.status==="solved"||Ae.status==="wrong")||ne.push(ue);if(ne.length===0)return;Oe=ne[Math.floor(Math.random()*ne.length)]}v(ne=>{const ue=[...ne],Q=Oe*x;return $.slice(0,2).forEach(Ae=>{let me=-1;for(let pe=0;pe<x;pe++)if(ue[Q+pe].status==="neutral"){me=Q+pe;break}if(me===-1)return;const Ne=ue.findIndex(pe=>pe.id===Ae.id);if(Ne!==me){const pe=ue[me];ue[me]={...ue[Ne],status:"locked"},ue[Ne]={...pe,status:pe.status==="locked"?"locked":"neutral"}}else ue[me]={...ue[me],status:"locked"}}),ue}),Ue.playTick(),ce(ne=>ne+1),p.current=Date.now()},J=($=!1)=>{if(te)return;$||ie(!0);const X=()=>{const ne=Ca[0];We(ne),P(0),p.current=Date.now();const ue=_i(10,n,6);if(ue.length===0){Ge(!0),ie(!1);return}const Q=ue[0],Se=ue.slice(1);Oe(Q,Se)},Oe=(ne,ue)=>{O(ne);const Q=ne.words.slice(0,6),Se=ue.flatMap(Ne=>Ne.words),Ae=ja(Se).slice(0,6),me=ja([...Q.map(Ne=>({id:Math.random().toString(36).substr(2,9),word:Ne,categoryId:ne.id,categoryName:ne.name,status:"neutral"})),...Ae.map(Ne=>({id:Math.random().toString(36).substr(2,9),word:Ne,categoryId:"incorrect",categoryName:"Incorrect",status:"neutral"}))]);v(me),ie(!1)};$?X():setTimeout(X,400)};N.useEffect(()=>{J(!0)},[n]);const ee=$=>{if(w||te||ae)return;const X=L.findIndex(ne=>ne.id===$);if(X===-1||["solved","wrong","locked"].includes(L[X].status))return;se(ne=>ne+1);const Oe=L[X];if(Oe.categoryId===(T==null?void 0:T.id)){Ue.playCorrect(),p.current=Date.now();const ne=[...L],ue=ve.solvedColors[we%ve.solvedColors.length];ne[X]={...Oe,status:"solved",color:ue},v(ne),j.current.push(Oe.word),P(Q=>{const Se=Q+1;return Se===6&&(Ee("MATCH!"),V(Ae=>{const me=Ae+1;return me>=B?setTimeout(()=>{re(!0),i({mode:"TARGET FILTER",mistakes:Te,hintsUsedCount:q,moves:oe,timeMs:Date.now()-b.current,solvedWords:j.current})},1e3):setTimeout(()=>{Ee(null),J()},1200),me})),Se})}else{Ue.playError();const ne=F+1;M(ne),De(ue=>ue+1),v(ue=>ue.map(Q=>Q.id===$?{...Q,status:"wrong"}:Q)),ne>=k?(re(!0),r()):setTimeout(()=>v(ue=>ue.map(Q=>Q.id===$?{...Q,status:"neutral"}:Q)),500)}};return Pe?null:C.jsxs(qs,{modeName:"TARGET FILTER",levelIndex:l,onOpenSettings:()=>A==null?void 0:A([{name:(T==null?void 0:T.name)||"Loading",isSolved:we===6}]),isReviewing:f,onNext:h,hintsEnabled:E,onToggleHints:()=>d(!E),onTurnOffHints:()=>{d(!1)},headerExtras:C.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-[9px]",children:[C.jsxs("div",{className:"bg-zinc-950 border border-zinc-700 px-2 py-1 rounded-full flex items-center shadow-sm",children:[C.jsx("span",{className:"text-zinc-500 mr-1",children:"FOUND"}),C.jsxs("span",{className:"text-white",children:[we,"/6"]})]}),C.jsxs("div",{className:"bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-full flex items-center shadow-sm",children:[C.jsx("span",{className:"text-zinc-500 mr-1",children:"ROUND"}),C.jsxs("span",{className:"text-white",children:[I+1,"/",B]})]})]}),children:[C.jsx(Xi,{ref:z}),C.jsxs("div",{className:"w-full flex-1 grid grid-cols-3 grid-rows-4 gap-3 py-2 min-h-0 relative z-10 pt-4",children:[L.map($=>C.jsx("div",{className:"relative w-full h-full",children:C.jsx(Zi,{data:$,onClick:ee})},$.id)),ae&&C.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center pointer-events-none",children:C.jsx("div",{className:"bg-black/90 border-4 border-white px-8 py-4 rounded-xl shadow-2xl animate-pop",children:C.jsx("span",{className:"text-white font-black font-oswald text-4xl uppercase tracking-tighter italic shadow-[0_0_15px_rgba(255,255,255,0.5)]",children:ae})})})]}),C.jsx("div",{className:"w-full mt-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-800 flex justify-center gap-1 shrink-0",children:Array.from({length:k}).map(($,X)=>C.jsx("div",{className:`w-4 h-4 rounded-full border-2 ${X<F?"bg-neon-red border-white shadow-[0_0_5px_red]":"bg-zinc-800 border-zinc-700"}`},X))})]})},fy=({csvData:n,onComplete:i,levelIndex:r,onOpenSettings:l,isReviewing:c,onNext:E,hintsEnabled:d,setHintsEnabled:A,isAutoPlaying:f})=>{const[h,m]=N.useState([]),[T,O]=N.useState([]),[L,v]=N.useState(1),[F,M]=N.useState(0),[I,V]=N.useState(0),[w,ie]=N.useState(0),[ae,Ee]=N.useState(90),[te,re]=N.useState(!1),[Te,De]=N.useState(0),[Pe,Ge]=N.useState([]),ve=N.useRef(Date.now()),We=N.useRef(null),we=N.useRef(Date.now()),P=N.useRef(new Map),q=N.useRef([]);N.useEffect(()=>{O([]),d&&(ve.current=Date.now())},[d]),N.useEffect(()=>{if(c||te)return;const B=_i(4,n,4),k=[];for(const x of B)x.words.slice(0,4).forEach(J=>{k.push({id:Math.random().toString(36).substr(2,9),word:J,categoryId:x.id,categoryName:x.name,status:"neutral"})});m(k.sort(()=>.5-Math.random())),O([]),V(0),Ee(Math.max(15,90-(L-1)*20)),ve.current=Date.now()},[L,n,c]);const ce=N.useCallback(()=>{te||(Ue.playError(),re(!0),i({roundsWon:w,timeMs:Date.now()-we.current,moves:12,failed:!0,mistakes:F,hintsUsedCount:Te,solvedCategoryIds:Pe,solvedWords:q.current}))},[te,w,F,Te,Pe,i]);N.useEffect(()=>{if(te||c)return;const B=setInterval(()=>{document.hidden||Ee(k=>Math.max(0,k-1))},1e3);return()=>clearInterval(B)},[te,c,L]),N.useEffect(()=>{ae===0&&!te&&!c&&ce()},[ae,te,c,ce]),N.useEffect(()=>{if(te||c||!d)return;const B=setInterval(()=>{document.hidden||Date.now()-ve.current>9e4&&oe()},1e3);return()=>clearInterval(B)},[h,te,c,d]);const oe=()=>{if(te||c||!d)return;const B=h.filter(K=>K.status!=="solved");if(B.length<2)return;const k=B[0].categoryId,x=B.filter(K=>K.categoryId===k).slice(0,2);m(K=>K.map(J=>x.some(ee=>ee.id===J.id)?{...J,status:"correct-preview"}:J)),Ue.playTick(),De(K=>K+1),ve.current=Date.now(),setTimeout(()=>{m(K=>K.map(J=>J.status==="correct-preview"?{...J,status:"neutral"}:J))},1500)},se=N.useCallback((B,k,x)=>{te||(B>0?Ue.playWin():Ue.playError(),re(!0),i({roundsWon:B,timeMs:Date.now()-we.current,moves:12,hintsUsedCount:Te,mistakes:k,solvedCategoryIds:x,solvedWords:q.current}))},[i,Te,te]),p=N.useCallback((B,k,x)=>{L>=3?se(B,k,x):setTimeout(()=>v(K=>K+1),600)},[L,se]),b=N.useCallback((B,k)=>{const x=k.filter(K=>B.includes(K.id));if(x.length===4&&x.every(K=>K.categoryId===x[0].categoryId)){Ue.playRowSolved(),ve.current=Date.now();const K=x[0].categoryId,J=Array.from(new Set([...Pe,K]));Ge(J);const ee=x.map(ue=>ue.word);q.current.push(...ee);const $=Ca[0].solvedColors,X=$[(J.length-1)%$.length],Oe=k.map(ue=>B.includes(ue.id)?{...ue,status:"solved",color:X}:ue);m(Oe),O([]);let ne="#39FF14";if(X.includes("red")?ne="#FF073A":X.includes("orange")?ne="#FF5F1F":X.includes("yellow")||X.includes("gold")?ne="#F9FF00":X.includes("cyan")?ne="#00FFFF":X.includes("blue")?ne="#0066FF":X.includes("purple")?ne="#D400FF":X.includes("violet")?ne="#B026FF":X.includes("pink")?ne="#FF1FBF":X.includes("magenta")&&(ne="#FF00FF"),B.forEach(ue=>{var Se;const Q=(Se=P.current.get(ue))==null?void 0:Se.getBoundingClientRect();Q&&We.current&&We.current.explode(Q.left+Q.width/2,Q.top+Q.height/2,ne)}),Oe.every(ue=>ue.status==="solved")){const ue=w+1;ie(ue),p(ue,F,J)}}else if(B.length===4){Ue.playError();const K=F+1,J=I+1;M(K),V(J),m(ee=>ee.map($=>B.includes($.id)?{...$,status:"wrong"}:$)),setTimeout(()=>{J>=3?p(w,K,Pe):(m(ee=>ee.map($=>$.status==="wrong"?{...$,status:"neutral"}:$)),O([]))},500)}},[L,I,F,Pe,p,w]);N.useEffect(()=>{if(!f||te||c)return;const k=setTimeout(()=>{if(document.hidden||T.length===4)return;let x=null;if(T.length>0){const K=h.find(J=>J.id===T[0]);K&&(x=K.categoryId)}else{const K=h.find(J=>J.status==="neutral");K&&(x=K.categoryId)}if(x){const K=h.find(J=>J.categoryId===x&&J.status==="neutral"&&!T.includes(J.id));K&&z(K.id)}},400);return()=>clearTimeout(k)},[f,te,c,h,T]);const z=B=>{if(te||ae===0||c)return;const k=h.find($=>$.id===B);if(!k||k.status==="solved"||k.status==="wrong")return;Ue.playSelect();const K=T.includes(B)?T.filter($=>$!==B):[...T,B].slice(0,4);O(K);const ee=(()=>{if(K.length===3){const $=h.filter(X=>K.includes(X.id));return $.every(X=>X.categoryId===$[0].categoryId)}return!1})();m($=>$.map(X=>X.status==="solved"?X:K.includes(X.id)?{...X,status:ee?"correct-preview":"selected"}:{...X,status:"neutral"})),K.length===4&&setTimeout(()=>b(K,h),150)},j=N.useMemo(()=>{const B=new Map;return h.forEach(k=>{if(!B.has(k.categoryId)){const x=h.filter(ee=>ee.categoryId===k.categoryId),K=x.every(ee=>ee.status==="solved"),J=K?x[0].color:void 0;B.set(k.categoryId,{name:k.categoryName,isSolved:K,color:J})}}),Array.from(B.values()).sort((k,x)=>k.name.localeCompare(x.name))},[h]);return C.jsxs("div",{className:"flex flex-col h-full w-full max-w-4xl mx-auto overflow-hidden relative bg-black",children:[C.jsx(Wd,{modeName:"MIND MATCH",levelIndex:r,onOpenSettings:()=>l==null?void 0:l(j.map(B=>({name:B.name,isSolved:B.isSolved}))),isReviewing:c,onNext:E,hintsEnabled:d,onToggleHints:()=>A==null?void 0:A(!d),leftContent:C.jsxs("div",{className:"flex items-center gap-4 pl-1",children:[C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx("div",{className:"mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase",children:"TIMER"}),C.jsxs("span",{className:`text-lg md:text-xl font-bold font-oswald ${ae<10?"text-neon-red animate-pulse":"text-white"}`,children:[ae,"s"]})]}),C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx("div",{className:"mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase",children:"ROUND"}),C.jsxs("span",{className:"text-lg md:text-xl font-bold font-oswald text-white",children:[L,"/3"]})]}),C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx("div",{className:"mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase",children:"MISS"}),C.jsxs("span",{className:"text-lg md:text-xl font-bold font-oswald text-white",children:[I,"/3"]})]})]})}),C.jsxs("main",{className:"flex-1 flex flex-col p-2 pt-0 w-full relative",children:[C.jsx("div",{className:"w-full mb-2 z-20 px-1",children:C.jsx("div",{className:"grid grid-cols-2 gap-2 w-full",children:j.map(B=>C.jsx("div",{className:`
                      relative w-full h-8 md:h-12 rounded-lg border-2 border-white
                      flex items-center justify-center overflow-hidden transition-all duration-500
                      ${B.isSolved?"shadow-none":"bg-black"}
                    `,style:B.isSolved?{background:oR(B.color,B.name)}:{},children:C.jsx("span",{className:`
                      relative z-10 font-black font-oswald uppercase text-xs md:text-sm tracking-wide text-center px-1 leading-tight
                      ${B.isSolved?"text-white":"text-zinc-300"}
                    `,style:B.isSolved?{textShadow:"3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 4px rgba(0,0,0,0.8)"}:{},children:B.name})},B.name))})}),C.jsx("div",{className:"grid grid-cols-4 gap-2 flex-1 min-h-0",children:h.map(B=>C.jsx(Zi,{data:B,onClick:z,ref:k=>{k&&P.current.set(B.id,k)}},B.id))})]}),C.jsx(Xi,{ref:We})]})},yT=Kd.div,Bs=[{round:1,cols:2,rows:3},{round:2,cols:3,rows:5},{round:3,cols:4,rows:7}],hy=({csvData:n,onComplete:i,levelIndex:r,hintsEnabled:l,onOpenSettings:c,setHintsEnabled:E,isReviewing:d,onNext:A,isAutoPlaying:f})=>{const[h,m]=N.useState(1),[T,O]=N.useState([]),[L,v]=N.useState([]),[F,M]=N.useState(null),[I,V]=N.useState(!0),[w,ie]=N.useState(!1),[ae,Ee]=N.useState(!1),[te,re]=N.useState(!1),[Te,De]=N.useState(0),[Pe,Ge]=N.useState(0),[ve,We]=N.useState(0),[we,P]=N.useState(0),[q,ce]=N.useState(new Set),[oe,se]=N.useState([]),[p,b]=N.useState([]),z=N.useRef(Date.now()),j=N.useRef(Date.now()),B=N.useRef(new Map),k=N.useRef(null),x=N.useRef(T),K=N.useRef(L);N.useEffect(()=>{x.current=T},[T]),N.useEffect(()=>{K.current=L},[L]);const J=Bs[h-1],ee=(Q,Se,Ae)=>{const me=n.find(Le=>Le.id===Q);if(!me)return[];const Ne=new Set(Se.map(Le=>Le.toUpperCase().trim())),pe=me.words.filter(Le=>!Ne.has(Le.toUpperCase().trim()));return ja(pe).slice(0,Ae)},$=N.useCallback(Q=>{var me,Ne;const Se=Bs[Q-1],Ae=Q>1?Bs[Q-2]:null;if(Q===1){const Le=_i(Se.rows,n,4);v(Le),K.current=Le;const Ze=[];Le.forEach(Me=>{Me.words.slice(0,Se.cols).forEach(ze=>{Ze.push({id:Math.random().toString(36).substr(2,9),word:ze,categoryId:Me.id,categoryName:Me.name.includes(":")?Me.name.split(":")[1].trim():Me.name,status:"neutral",isSolved:!1})})}),O(ja(Ze))}else if(Ae){const pe=[];for(let le=0;le<Ae.rows;le++){const de=x.current.slice(le*Ae.cols,(le+1)*Ae.cols);de.length>0&&pe.push(de[0].categoryId)}const Le=[],Ze=[...K.current];pe.forEach(le=>{const de=Ze.findIndex(Fe=>Fe.id===le);de!==-1&&(Le.push(Ze[de]),Ze.splice(de,1))}),Le.push(...Ze);let Me=[...Le];const rt=Se.rows-Ae.rows;if(rt>0){const le=new Set(Me.map(ke=>ke.id)),de=n.filter(ke=>!le.has(ke.id)),Fe=_i(rt,de,4);Me=[...Me,...Fe]}v(Me),K.current=Me;const ze=new Array(Se.rows*Se.cols).fill(null),Rt=[];for(let le=0;le<Ae.rows;le++){const de=le*Ae.cols,Fe=le*Se.cols,ke=x.current.slice(de,de+Ae.cols);ke.forEach((Xa,Qs)=>{ze[Fe+Qs]={...Xa,status:"solved",isSolved:!0,color:Xa.color||Ca[0].solvedColors[le%Ca[0].solvedColors.length]}});const _e=Me[le].id,Re=Me[le].name,ct=ke.map(Xa=>Xa.word),Lt=Se.cols-Ae.cols;ee(_e,ct,Lt).forEach(Xa=>{Rt.push({id:Math.random().toString(36).substr(2,9),word:Xa,categoryId:_e,categoryName:Re.includes(":")?Re.split(":")[1].trim():Re,status:"neutral",isSolved:!1})})}for(let le=Ae.rows;le<Se.rows;le++){const de=Me[le];ja(de.words).slice(0,Se.cols).forEach(ke=>{Rt.push({id:Math.random().toString(36).substr(2,9),word:ke,categoryId:de.id,categoryName:de.name.includes(":")?de.name.split(":")[1].trim():de.name,status:"neutral",isSolved:!1})})}const je=ja(Rt);for(let le=0;le<ze.length;le++)ze[le]===null&&je.length>0&&(ze[le]=je.pop());for(let le=0;le<ze.length;le++){const de=ze[le];if(!de||de.status==="solved"||de.status==="locked")continue;const Fe=Math.floor(le/Se.cols),ke=(me=Me[Fe])==null?void 0:me.id;if(de.categoryId===ke){let _e=!1;for(let Re=0;Re<ze.length;Re++){const ct=ze[Re];if(!ct||ct.status==="solved"||ct.status==="locked")continue;const Lt=Math.floor(Re/Se.cols);if(Lt===Fe)continue;const cr=(Ne=Me[Lt])==null?void 0:Ne.id;if(ct.categoryId!==ke&&de.categoryId!==cr){ze[le]=ct,ze[Re]=de,_e=!0;break}}if(!_e)for(let Re=0;Re<ze.length;Re++){const ct=ze[Re];if(!ct||ct.status==="solved"||ct.status==="locked")continue;if(Math.floor(Re/Se.cols)!==Fe){ze[le]=ct,ze[Re]=de;break}}}}O(ze)}m(Q),ie(!1),V(!1),re(!1),M(null),z.current=Date.now(),Q>1&&Ue.playLevelStart()},[n]);N.useEffect(()=>{$(1),De(0),Ge(0),We(0),P(0),se([]),b([]),j.current=Date.now()},[r,$]);const X=N.useCallback(Q=>{var Ze;const Ae=Bs[h-1].cols,me=Math.floor(Q.length/Ae),Ne=[...Q];let pe=!1,Le=0;for(let Me=0;Me<me;Me++){const rt=Me*Ae,ze=rt+Ae,Rt=Ne.slice(rt,ze);if(Rt.every(de=>de.status==="solved")){Le++;continue}if(Rt.length<Ae)continue;const je=Rt[0].categoryId;if(Rt.every(de=>de&&de.categoryId===je)){pe=!0,Le++,Ue.playRowSolved(),z.current=Date.now(),P(Fe=>Fe+1);const de=Ca[0].solvedColors[Me%Ca[0].solvedColors.length];for(let Fe=rt;Fe<ze;Fe++){const ke=Ne[Fe],_e=(Ze=B.current.get(ke.id))==null?void 0:Ze.getBoundingClientRect();_e&&k.current&&ke.status!=="solved"&&k.current.explode(_e.left+_e.width/2,_e.top+_e.height/2,"#FFFFFF"),Ne[Fe]={...ke,status:"solved",isSolved:!0,color:de}}}}if(pe?O(Ne):F&&Ge(Me=>Me+1),Le===me&&me>0){if(h<3)Ue.playWin(),ie(!0),setTimeout(()=>{$(h+1)},f?500:1e3);else if(!ae){Ue.playWin(),Ee(!0);const Me=Array.from(new Set([...p,...Ne.map(ze=>ze.categoryId)])),rt=[...oe,...Ne.map(ze=>ze.word)];setTimeout(()=>i({timeMs:Date.now()-j.current,hintsUsedCount:ve,hintsUsed:ve,moves:Te,rowEfficiency:we,mistakes:Pe,solvedCategoryIds:Me,solvedWords:rt}),1e3)}}},[h,ae,Te,ve,we,Pe,p,oe,i,F,$,f]);N.useEffect(()=>{if(I||w||ae)return;const Q=J,Se=new Set,Ae=Q.cols,me=Math.floor(T.length/Ae);for(let Ne=0;Ne<me;Ne++){const pe=T.slice(Ne*Ae,(Ne+1)*Ae);if(pe.every(Ze=>Ze.status==="solved"))continue;const Le={};pe.forEach(Ze=>{Le[Ze.categoryId]=(Le[Ze.categoryId]||0)+1}),Object.values(Le).some(Ze=>Ze===Ae-1)&&Se.add(Ne)}ce(Se)},[T,I,w,ae,J]);const Oe=Q=>{if(ae||te||w)return;const Se=T.find(Ae=>Ae.id===Q);if(!(!Se||Se.status==="solved"||Se.status==="locked"))if(F===null)Ue.playSelect(),M(Q),O(Ae=>Ae.map(me=>me.id===Q?{...me,status:"selected"}:me));else if(F===Q)M(null),O(Ae=>Ae.map(me=>me.id===Q?{...me,status:"neutral"}:me));else{const Ae=T.findIndex(Ne=>Ne.id===F),me=T.findIndex(Ne=>Ne.id===Q);if(Ae===-1||me===-1)return;re(!0),De(Ne=>Ne+1),Ue.playSwap(),O(Ne=>Ne.map(pe=>pe.id===F?{...pe,status:"swapping"}:pe.id===Q?{...pe,status:"swap-target"}:pe)),setTimeout(()=>{O(Ne=>{const pe=[...Ne],Le=pe[Ae],Ze=pe[me];return pe[Ae]={...Le,word:Ze.word,categoryId:Ze.categoryId,categoryName:Ze.categoryName},pe[me]={...Ze,word:Le.word,categoryId:Le.categoryId,categoryName:Le.categoryName},pe}),setTimeout(()=>{O(Ne=>Ne.map(pe=>pe.id===F||pe.id===Q?{...pe,status:"fading-out-bg"}:pe)),setTimeout(()=>{O(Ne=>{const pe=Ne.map(Le=>Le.status==="fading-out-bg"?{...Le,status:"neutral"}:Le);return setTimeout(()=>X(pe),50),pe}),M(null),re(!1)},250)},450)},50)}};N.useEffect(()=>{if(!f||ae||te||w||d)return;const Se=setTimeout(()=>{if(document.hidden)return;const me=J.cols,Ne=Math.floor(T.length/me);let pe=-1;for(let le=0;le<Ne;le++)if(!T.slice(le*me,(le+1)*me).every(Fe=>Fe.status==="solved"||Fe.status==="locked")){pe=le;break}if(pe===-1)return;const Le=pe*me,Ze=Le+me,Me=T.slice(Le,Ze);let rt=null;const ze=Me.find(le=>le.status==="solved"||le.status==="locked");if(ze)rt=ze.categoryId;else{const le={};for(const Fe of Me)!Fe.isSolved&&Fe.status!=="solved"&&(le[Fe.categoryId]=(le[Fe.categoryId]||0)+1);const de=Object.keys(le).sort((Fe,ke)=>le[ke]-le[Fe]);de.length>0&&(rt=de[0])}if(!rt){const le=Me.filter(de=>!de.isSolved&&de.status!=="solved");le.length>0&&(rt=le[0].categoryId)}if(!rt){const le=T.filter(de=>!de.isSolved&&de.status!=="solved");le.length>0&&(rt=le[0].categoryId)}if(!rt)return;let Rt=null;for(let le=0;le<T.length;le++)if(!(le>=Le&&le<Ze)&&T[le].categoryId===rt&&!T[le].isSolved&&T[le].status!=="solved"&&T[le].status!=="locked"){Rt=T[le].id;break}let je=null;for(let le=Le;le<Ze;le++)if(T[le].categoryId!==rt&&!T[le].isSolved&&T[le].status!=="solved"&&T[le].status!=="locked"){je=T[le].id;break}Rt&&je&&Oe(F?F===Rt?je:F===je?Rt:F:Rt)},400);return()=>clearTimeout(Se)},[f,ae,te,w,T,F,J,h]);const ne=N.useCallback(()=>{if(ae||te||w||!l)return;const Se=J.cols,Ae=Math.floor(T.length/Se),me=[];for(let de=0;de<Ae;de++)T.slice(de*Se,(de+1)*Se).every(ke=>ke.status==="solved"||ke.status==="locked")||me.push(de);if(me.length===0)return;const Le=me.sort((de,Fe)=>{const ke=T.slice(de*Se,(de+1)*Se).filter(Re=>Re.status==="neutral"||Re.status==="selected").length,_e=T.slice(Fe*Se,(Fe+1)*Se).filter(Re=>Re.status==="neutral"||Re.status==="selected").length;return ke-_e})[0]*Se,Ze=Le+Se,Me=T.slice(Le,Ze),rt=Me.filter(de=>de.status==="neutral"||de.status==="selected");if(rt.length===0)return;let ze=null;const Rt=Me.find(de=>de.status==="solved"||de.status==="locked");if(Rt?ze=Rt.categoryId:ze=rt[0].categoryId,!ze)return;const je=[...T],le=T.filter(de=>(de.status==="neutral"||de.status==="selected")&&de.categoryId===ze);if(rt.length===1){const de=rt[0],Fe=le.find(Re=>Re.id!==de.id)||de,ke=je.findIndex(Re=>Re.id===Fe.id),_e=je.findIndex(Re=>Re.id===de.id);if(ke!==-1&&_e!==-1&&ke!==_e){const Re=je[_e];je[_e]={...je[ke],status:"locked"},je[ke]={...Re,status:Re.status==="locked"?"locked":"neutral"}}else _e!==-1&&(je[_e]={...je[_e],status:"locked"});O(je),Ue.playTick(),We(Re=>Re+1),z.current=Date.now(),setTimeout(()=>{O(Re=>{const ct=[...Re];return X(ct),ct})},1500)}else{const de=le.slice(0,2);if(de.length<1)return;de.forEach(Fe=>{let ke=-1;for(let _e=0;_e<Se;_e++){const Re=Le+_e;if(je[Re].status!=="locked"&&je[Re].status!=="solved"){ke=Re;break}}if(ke!==-1){const _e=je.findIndex(Re=>Re.id===Fe.id);if(_e!==ke){const Re=je[ke];je[ke]={...je[_e],status:"locked"},je[_e]={...Re,status:Re.status==="locked"?"locked":"neutral"}}else je[ke]={...je[ke],status:"locked"}}}),O(je),Ue.playTick(),We(Fe=>Fe+1),z.current=Date.now(),setTimeout(()=>X(je),50)}},[T,ae,te,w,l,J,X]);if(N.useEffect(()=>{if(ae||I||w||!l)return;const Q=setInterval(()=>{document.hidden||Date.now()-z.current>9e4&&ne()},1e3);return()=>clearInterval(Q)},[ae,I,w,l,ne]),I)return C.jsx("div",{className:"flex-1 flex items-center justify-center",children:C.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"})});const ue=J.cols===2?"grid-cols-2":J.cols===3?"grid-cols-3":"grid-cols-4";return C.jsxs(qs,{modeName:"EXPANSION",levelIndex:r,onOpenSettings:()=>c==null?void 0:c([]),isReviewing:d,onNext:A,hintsEnabled:l,onToggleHints:()=>E==null?void 0:E(!l),children:[C.jsx(Xi,{ref:k}),C.jsx("div",{className:"flex-1 flex flex-col items-center justify-center w-full h-full overflow-visible",children:C.jsx(yT,{layout:!0,className:"w-full h-full flex flex-col gap-2 p-2 transition-all duration-700 ease-in-out",transition:{duration:.8,type:"spring",bounce:.2},children:Array.from({length:Math.ceil(T.length/J.cols)}).map((Q,Se)=>{const Ae=T.slice(Se*J.cols,Se*J.cols+J.cols);if(Ae.length===0)return null;const me=Ae.every(Le=>Le.status==="solved"),Ne=me||Ae.length>0&&Ae[0].status==="solved",pe=q.has(Se);return C.jsxs(yT,{layout:!0,className:"flex-1 relative min-h-0 overflow-visible w-full",children:[me&&C.jsx(zd,{seed:Ae[0].categoryId}),C.jsx("div",{className:`
                        absolute inset-0 z-0 transition-opacity duration-500 rounded-medium
                        ${pe&&!me?"bg-white/5 border border-white/40 animate-pulse-highlight":"opacity-0"}
                      `}),Ne&&C.jsx("div",{className:"absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]",children:C.jsx("div",{className:"px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white whitespace-nowrap shadow-[0_-4px_12px_rgba(0,0,0,0.5)]",children:Ae[0].categoryName})}),C.jsx("div",{className:`grid ${ue} gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${me?"p-3":"p-1"}`,children:Ae.map(Le=>C.jsx(Zi,{data:Le,onClick:Oe,ref:Ze=>{Ze&&B.current.set(Le.id,Ze)}},Le.id))})]},`row-${Se}`)})})})]})},Ty=()=>C.jsx("footer",{className:"w-full bg-black flex flex-col items-center justify-center shrink-0 z-[60]",style:{height:bC},children:C.jsx("div",{className:"w-full h-full bg-black flex items-center justify-center overflow-hidden"})}),my=()=>C.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"max(env(safe-area-inset-top, 0px), 24px)"}}),Ry=()=>C.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"max(env(safe-area-inset-bottom, 0px), 16px)"}}),Oy="ca-app-pub-4096368901415767/2019330695",Fc="ca-app-pub-4096368901415767/1153913539",Cy=()=>{try{const n=document.createElement("div");n.style.height="env(safe-area-inset-bottom, 0px)",n.style.visibility="hidden",n.style.position="absolute",document.body.appendChild(n);const i=n.offsetHeight;return document.body.removeChild(n),Math.max(i,16)}catch{return 16}};class py extends N.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,r){console.error("Game crashed:",i,r)}render(){return this.state.hasError?C.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-4 text-center",children:[C.jsx("h1",{className:"text-3xl font-bold mb-4 font-oswald text-red-500 uppercase",children:"System Error"}),C.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-white text-black font-bold rounded-full uppercase font-oswald",children:"Reboot"})]}):this.props.children}}const LT=()=>C.jsx("div",{className:"flex items-center justify-center h-full w-full bg-black",children:C.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"})}),gy=()=>{const[n,i]=N.useState(ye.MENU),[r,l]=N.useState(1),[c,E]=N.useState(!0),[d,A]=N.useState(!1),[f,h]=N.useState(!1),[m,T]=N.useState(!0),[O,L]=N.useState(!1),[v,F]=N.useState([]),[M,I]=N.useState(!1),[V,w]=N.useState([]),[ie,ae]=N.useState(!1),[Ee,te]=N.useState(null),[re,Te]=N.useState(!1),[De,Pe]=N.useState(!1);N.useEffect(()=>{l(FC()),w(kC())},[]),N.useEffect(()=>{(async()=>{if(!gn.isNativePlatform()){Te(!0);return}try{await Ra.initialize({});const se=await Ra.requestConsentInfo();se.isConsentFormAvailable&&se.status===Kc.REQUIRED&&await Ra.showConsentForm(),se.privacyOptionsRequirementStatus==="REQUIRED"&&Pe(!0);const p=Cy();await Ra.showBanner({adId:Oy,adSize:Yc.BANNER,position:Vc.BOTTOM_CENTER,margin:p,isTesting:!1});try{await Ra.prepareInterstitial({adId:Fc,isTesting:!1})}catch(b){console.error("Interstitial prep failed",b)}}catch(se){console.error("AdMob/UMP initialization failed",se)}finally{Te(!0)}})()},[]);const Ge=async()=>{if(gn.isNativePlatform())try{await Ra.showPrivacyOptionsForm()}catch(oe){console.error("Failed to show privacy options form",oe)}},ve=async()=>{if(!gn.isNativePlatform()){console.log("AdMob: Ad Inspector is only available on native platforms.");return}const oe=Ra;if(typeof oe.openAdInspector!="function"){alert("Inspector failed: Method not found in native bridge. Verify Capacitor sync and project build.");return}try{console.log("AdMob: Opening Ad Inspector..."),await oe.openAdInspector(),console.log("AdMob: Ad Inspector closed normally.")}catch(se){const p=se.message||se;console.error("AdMob: Ad Inspector error: "+p),alert("Inspector error: "+p)}};N.useEffect(()=>{let oe=!0;return(async()=>{try{const p=await up(r,V);oe&&te(p)}catch(p){console.error("Failed to load level package",p)}})(),()=>{oe=!1}},[r,V]),N.useEffect(()=>{n!==ye.MENU&&!VC()&&L(!0)},[n]);const We=oe=>{let se;if(V.includes(oe)){if(V.length<=1)return;se=V.filter(p=>p!==oe)}else se=[...V,oe];w(se),xC(se)},we=()=>{const oe=!c;E(oe),Ue.setSound(oe)},P=oe=>{let se=0;n===ye.LEVEL_MIND_MATCH?se=(oe.roundsWon||0)*5:oe.failed||(n===ye.CLASSIC||n===ye.LEVEL_THEMED||n===ye.LEVEL_SYNONYMS?se=10:n===ye.LEVEL_EMOJI?se=5:n===ye.LEVEL_EXPANSION&&(se=15));const p=(oe.hintsUsedCount||0)*-5;let b=0;!oe.failed&&oe.mistakes===0&&(b=25);const z=(oe.failed?0:oe.rowEfficiency)||0;let j=0;if(!oe.failed){const k=oe.timeMs/1e3;k<60?j=10:k<90?j=5:k<120&&(j=2)}const B=Math.max(0,se+p+z+b+j);KC({totalScore:B,levelsCompleted:oe.failed?0:1,totalMoves:oe.moves,totalTimeMs:oe.timeMs,rowsSolved:n===ye.LEVEL_MIND_MATCH?(oe.roundsWon||0)*4:4,solvedCategoryIds:oe.solvedCategoryIds,solvedWords:oe.solvedWords}),I(!0)},q=async()=>{if(gn.isNativePlatform())try{await Ra.showInterstitial(),await Ra.prepareInterstitial({adId:Fc,isTesting:!1})}catch(p){console.error("Failed to show interstitial",p);try{await Ra.prepareInterstitial({adId:Fc,isTesting:!1})}catch{}}const oe=r+1;l(oe),wC(oe);const se=xc(oe,V);i(se),I(!1)};N.useEffect(()=>{if(ie&&M){const oe=setTimeout(()=>{q()},2e3);return()=>clearTimeout(oe)}},[ie,M]);const ce=()=>{if(n===ye.MENU)return C.jsx(gp,{onStart:()=>{const se=Ee?Ee.mode:xc(r,V);i(se)},onSettings:()=>A(!0),onStats:()=>h(!0),lastLevel:r});if(!Ee||Ee.mode!==n)return C.jsx(LT,{});const{data:oe}=Ee;switch(n){case ye.CLASSIC:case ye.LEVEL_THEMED:case ye.LEVEL_SYNONYMS:return C.jsx(Ey,{csvData:oe,mode:n,levelIndex:r,onComplete:P,onExit:()=>i(ye.MENU),hintsEnabled:m,setHintsEnabled:T,onOpenSettings:se=>{F(se||[]),A(!0)},isReviewing:M,onNext:q,isAutoPlaying:ie},r);case ye.LEVEL_EMOJI:return C.jsx(Sy,{levelIndex:r,onComplete:P,onExit:()=>i(ye.MENU),hintsEnabled:m,setHintsEnabled:T,onOpenSettings:se=>{F(se||[]),A(!0)},isReviewing:M,onNext:q,isAutoPlaying:ie},r);case ye.LEVEL_MIND_MATCH:return C.jsx(fy,{csvData:oe,levelIndex:r,onComplete:P,onExit:()=>i(ye.MENU),hintsEnabled:m,setHintsEnabled:T,onOpenSettings:se=>{F(se||[]),A(!0)},isReviewing:M,onNext:q,isAutoPlaying:ie},r);case ye.LEVEL_EXPANSION:return C.jsx(hy,{csvData:oe,levelIndex:r,onComplete:P,onExit:()=>i(ye.MENU),hintsEnabled:m,setHintsEnabled:T,onOpenSettings:se=>{F(se||[]),A(!0)},isReviewing:M,onNext:q,isAutoPlaying:ie},r);default:return C.jsx(Ay,{csvData:oe,levelIndex:r,onComplete:P,onGameOver:()=>P({timeMs:0,hintsUsedCount:0,moves:0,failed:!0,mistakes:5}),onExit:()=>i(ye.MENU),hintsEnabled:m,setHintsEnabled:T,onOpenSettings:se=>{F(se||[]),A(!0)},isReviewing:M,onNext:q,isAutoPlaying:ie},r)}};return re?C.jsx(py,{children:C.jsxs("div",{className:"fixed inset-0 h-viewport w-screen bg-black text-white font-oswald flex flex-col overflow-hidden",children:[C.jsx(my,{}),C.jsxs("div",{className:"flex-1 relative flex flex-col min-h-0 w-full overflow-hidden",children:[ce(),O&&C.jsx(cy,{mode:n,onComplete:()=>{YC(),L(!1)}})]}),C.jsx(Ty,{}),C.jsx(Ry,{}),d&&C.jsx(Ip,{isOpen:d,onClose:()=>A(!1),onMainMenu:()=>{A(!1),i(ye.MENU)},isMusicOn:c,toggleMusic:we,enabledModes:V,toggleMode:We,hintsEnabled:m,setHintsEnabled:T,onShowTutorial:()=>L(!0),onResetProgress:()=>{localStorage.clear(),window.location.reload()},categories:v,isAutoPlaying:ie,toggleAutoPlay:()=>ae(!ie),privacyOptionsRequired:De,onShowPrivacyOptions:Ge,onOpenAdInspector:ve}),f&&C.jsx(ey,{onClose:()=>h(!1)})]})}):C.jsx("div",{className:"fixed inset-0 h-viewport w-screen bg-black text-white font-oswald flex items-center justify-center",children:C.jsx(LT,{})})},lR=document.getElementById("root");if(!lR)throw new Error("Could not find root element to mount to");const Ny=BC.createRoot(lR);Ny.render(C.jsx(ir.StrictMode,{children:C.jsx(gy,{})}));export{Kc as A,PT as W};
