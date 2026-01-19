const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Level1_Standard-Du638k31.js","assets/SolvedRowBackground-CzRnMFxC.js","assets/LevelLayout-BDr9GjzY.js","assets/ParticleOverlay-DAw7iRLw.js","assets/Level1_Emoji-DMjqQEhS.js","assets/Level2_Filter-CoreD4rr.js","assets/Level5_Group-B06wVPjM.js","assets/Level7_Expansion-Bie0bA3O.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const A of c)if(A.type==="childList")for(const E of A.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&s(E)}).observe(document,{childList:!0,subtree:!0});function r(c){const A={};return c.integrity&&(A.integrity=c.integrity),c.referrerPolicy&&(A.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?A.credentials="include":c.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function s(c){if(c.ep)return;c.ep=!0;const A=r(c);fetch(c.href,A)}})();function Zf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yu={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function tC(){if(fh)return To;fh=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function r(s,c,A){var E=null;if(A!==void 0&&(E=""+A),c.key!==void 0&&(E=""+c.key),"key"in c){A={};for(var d in c)d!=="key"&&(A[d]=c[d])}else A=c;return c=A.ref,{$$typeof:n,type:s,key:E,ref:c!==void 0?c:null,props:A}}return To.Fragment=o,To.jsx=r,To.jsxs=r,To}var Th;function aC(){return Th||(Th=1,Yu.exports=tC()),Yu.exports}var I=aC(),Wu={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function nC(){if(Rh)return le;Rh=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),E=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),O=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=O&&N[O]||N["@@iterator"],typeof N=="function"?N:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,B={};function g(N,V,W){this.props=N,this.context=V,this.refs=B,this.updater=W||H}g.prototype.isReactComponent={},g.prototype.setState=function(N,V){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,V,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function b(){}b.prototype=g.prototype;function x(N,V,W){this.props=N,this.context=V,this.refs=B,this.updater=W||H}var z=x.prototype=new b;z.constructor=x,k(z,g.prototype),z.isPureReactComponent=!0;var Z=Array.isArray;function ne(){}var Q={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function ie(N,V,W){var q=W.ref;return{$$typeof:n,type:N,key:V,ref:q!==void 0?q:null,props:W}}function Se(N,V){return ie(N.type,V,N.props)}function ye(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function Me(N){var V={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(W){return V[W]})}var X=/\/+/g;function re(N,V){return typeof N=="object"&&N!==null&&N.key!=null?Me(""+N.key):V.toString(36)}function fe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ne,ne):(N.status="pending",N.then(function(V){N.status==="pending"&&(N.status="fulfilled",N.value=V)},function(V){N.status==="pending"&&(N.status="rejected",N.reason=V)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function G(N,V,W,q,se){var Ae=typeof N;(Ae==="undefined"||Ae==="boolean")&&(N=null);var ge=!1;if(N===null)ge=!0;else switch(Ae){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(N.$$typeof){case n:case o:ge=!0;break;case R:return ge=N._init,G(ge(N._payload),V,W,q,se)}}if(ge)return se=se(N),ge=q===""?"."+re(N,0):q,Z(se)?(W="",ge!=null&&(W=ge.replace(X,"$&/")+"/"),G(se,V,W,"",function(Ni){return Ni})):se!=null&&(ye(se)&&(se=Se(se,W+(se.key==null||N&&N.key===se.key?"":(""+se.key).replace(X,"$&/")+"/")+ge)),V.push(se)),1;ge=0;var Et=q===""?".":q+":";if(Z(N))for(var Ke=0;Ke<N.length;Ke++)q=N[Ke],Ae=Et+re(q,Ke),ge+=G(q,V,W,Ae,se);else if(Ke=y(N),typeof Ke=="function")for(N=Ke.call(N),Ke=0;!(q=N.next()).done;)q=q.value,Ae=Et+re(q,Ke++),ge+=G(q,V,W,Ae,se);else if(Ae==="object"){if(typeof N.then=="function")return G(fe(N),V,W,q,se);throw V=String(N),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ge}function K(N,V,W){if(N==null)return N;var q=[],se=0;return G(N,q,"","",function(Ae){return V.call(W,Ae,se++)}),q}function _(N){if(N._status===-1){var V=N._result;V=V(),V.then(function(W){(N._status===0||N._status===-1)&&(N._status=1,N._result=W)},function(W){(N._status===0||N._status===-1)&&(N._status=2,N._result=W)}),N._status===-1&&(N._status=0,N._result=V)}if(N._status===1)return N._result.default;throw N._result}var Te=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Ee={map:K,forEach:function(N,V,W){K(N,function(){V.apply(this,arguments)},W)},count:function(N){var V=0;return K(N,function(){V++}),V},toArray:function(N){return K(N,function(V){return V})||[]},only:function(N){if(!ye(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return le.Activity=m,le.Children=Ee,le.Component=g,le.Fragment=r,le.Profiler=c,le.PureComponent=x,le.StrictMode=s,le.Suspense=f,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,le.__COMPILER_RUNTIME={__proto__:null,c:function(N){return Q.H.useMemoCache(N)}},le.cache=function(N){return function(){return N.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(N,V,W){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var q=k({},N.props),se=N.key;if(V!=null)for(Ae in V.key!==void 0&&(se=""+V.key),V)!j.call(V,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&V.ref===void 0||(q[Ae]=V[Ae]);var Ae=arguments.length-2;if(Ae===1)q.children=W;else if(1<Ae){for(var ge=Array(Ae),Et=0;Et<Ae;Et++)ge[Et]=arguments[Et+2];q.children=ge}return ie(N.type,se,q)},le.createContext=function(N){return N={$$typeof:E,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:A,_context:N},N},le.createElement=function(N,V,W){var q,se={},Ae=null;if(V!=null)for(q in V.key!==void 0&&(Ae=""+V.key),V)j.call(V,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(se[q]=V[q]);var ge=arguments.length-2;if(ge===1)se.children=W;else if(1<ge){for(var Et=Array(ge),Ke=0;Ke<ge;Ke++)Et[Ke]=arguments[Ke+2];se.children=Et}if(N&&N.defaultProps)for(q in ge=N.defaultProps,ge)se[q]===void 0&&(se[q]=ge[q]);return ie(N,Ae,se)},le.createRef=function(){return{current:null}},le.forwardRef=function(N){return{$$typeof:d,render:N}},le.isValidElement=ye,le.lazy=function(N){return{$$typeof:R,_payload:{_status:-1,_result:N},_init:_}},le.memo=function(N,V){return{$$typeof:h,type:N,compare:V===void 0?null:V}},le.startTransition=function(N){var V=Q.T,W={};Q.T=W;try{var q=N(),se=Q.S;se!==null&&se(W,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(ne,Te)}catch(Ae){Te(Ae)}finally{V!==null&&W.types!==null&&(V.types=W.types),Q.T=V}},le.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},le.use=function(N){return Q.H.use(N)},le.useActionState=function(N,V,W){return Q.H.useActionState(N,V,W)},le.useCallback=function(N,V){return Q.H.useCallback(N,V)},le.useContext=function(N){return Q.H.useContext(N)},le.useDebugValue=function(){},le.useDeferredValue=function(N,V){return Q.H.useDeferredValue(N,V)},le.useEffect=function(N,V){return Q.H.useEffect(N,V)},le.useEffectEvent=function(N){return Q.H.useEffectEvent(N)},le.useId=function(){return Q.H.useId()},le.useImperativeHandle=function(N,V,W){return Q.H.useImperativeHandle(N,V,W)},le.useInsertionEffect=function(N,V){return Q.H.useInsertionEffect(N,V)},le.useLayoutEffect=function(N,V){return Q.H.useLayoutEffect(N,V)},le.useMemo=function(N,V){return Q.H.useMemo(N,V)},le.useOptimistic=function(N,V){return Q.H.useOptimistic(N,V)},le.useReducer=function(N,V,W){return Q.H.useReducer(N,V,W)},le.useRef=function(N){return Q.H.useRef(N)},le.useState=function(N){return Q.H.useState(N)},le.useSyncExternalStore=function(N,V,W){return Q.H.useSyncExternalStore(N,V,W)},le.useTransition=function(){return Q.H.useTransition()},le.version="19.2.3",le}var mh;function bc(){return mh||(mh=1,Wu.exports=nC()),Wu.exports}var Y=bc();const Na=Zf(Y);var zu={exports:{}},Ro={},ju={exports:{}},_u={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function iC(){return Oh||(Oh=1,(function(n){function o(G,K){var _=G.length;G.push(K);e:for(;0<_;){var Te=_-1>>>1,Ee=G[Te];if(0<c(Ee,K))G[Te]=K,G[_]=Ee,_=Te;else break e}}function r(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var K=G[0],_=G.pop();if(_!==K){G[0]=_;e:for(var Te=0,Ee=G.length,N=Ee>>>1;Te<N;){var V=2*(Te+1)-1,W=G[V],q=V+1,se=G[q];if(0>c(W,_))q<Ee&&0>c(se,W)?(G[Te]=se,G[q]=_,Te=q):(G[Te]=W,G[V]=_,Te=V);else if(q<Ee&&0>c(se,_))G[Te]=se,G[q]=_,Te=q;else break e}}return K}function c(G,K){var _=G.sortIndex-K.sortIndex;return _!==0?_:G.id-K.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;n.unstable_now=function(){return A.now()}}else{var E=Date,d=E.now();n.unstable_now=function(){return E.now()-d}}var f=[],h=[],R=1,m=null,O=3,y=!1,H=!1,k=!1,B=!1,g=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function z(G){for(var K=r(h);K!==null;){if(K.callback===null)s(h);else if(K.startTime<=G)s(h),K.sortIndex=K.expirationTime,o(f,K);else break;K=r(h)}}function Z(G){if(k=!1,z(G),!H)if(r(f)!==null)H=!0,ne||(ne=!0,Me());else{var K=r(h);K!==null&&fe(Z,K.startTime-G)}}var ne=!1,Q=-1,j=5,ie=-1;function Se(){return B?!0:!(n.unstable_now()-ie<j)}function ye(){if(B=!1,ne){var G=n.unstable_now();ie=G;var K=!0;try{e:{H=!1,k&&(k=!1,b(Q),Q=-1),y=!0;var _=O;try{t:{for(z(G),m=r(f);m!==null&&!(m.expirationTime>G&&Se());){var Te=m.callback;if(typeof Te=="function"){m.callback=null,O=m.priorityLevel;var Ee=Te(m.expirationTime<=G);if(G=n.unstable_now(),typeof Ee=="function"){m.callback=Ee,z(G),K=!0;break t}m===r(f)&&s(f),z(G)}else s(f);m=r(f)}if(m!==null)K=!0;else{var N=r(h);N!==null&&fe(Z,N.startTime-G),K=!1}}break e}finally{m=null,O=_,y=!1}K=void 0}}finally{K?Me():ne=!1}}}var Me;if(typeof x=="function")Me=function(){x(ye)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,re=X.port2;X.port1.onmessage=ye,Me=function(){re.postMessage(null)}}else Me=function(){g(ye,0)};function fe(G,K){Q=g(function(){G(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return O},n.unstable_next=function(G){switch(O){case 1:case 2:case 3:var K=3;break;default:K=O}var _=O;O=K;try{return G()}finally{O=_}},n.unstable_requestPaint=function(){B=!0},n.unstable_runWithPriority=function(G,K){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var _=O;O=G;try{return K()}finally{O=_}},n.unstable_scheduleCallback=function(G,K,_){var Te=n.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?Te+_:Te):_=Te,G){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=_+Ee,G={id:R++,callback:K,priorityLevel:G,startTime:_,expirationTime:Ee,sortIndex:-1},_>Te?(G.sortIndex=_,o(h,G),r(f)===null&&G===r(h)&&(k?(b(Q),Q=-1):k=!0,fe(Z,_-Te))):(G.sortIndex=Ee,o(f,G),H||y||(H=!0,ne||(ne=!0,Me()))),G},n.unstable_shouldYield=Se,n.unstable_wrapCallback=function(G){var K=O;return function(){var _=O;O=K;try{return G.apply(this,arguments)}finally{O=_}}}})(_u)),_u}var Ch;function oC(){return Ch||(Ch=1,ju.exports=iC()),ju.exports}var Ju={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function rC(){if(ph)return st;ph=1;var n=bc();function o(f){var h="https://react.dev/errors/"+f;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)h+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+f+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(o(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function A(f,h,R){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:m==null?null:""+m,children:f,containerInfo:h,implementation:R}}var E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(f,h){if(f==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,st.createPortal=function(f,h){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return A(f,h,null,R)},st.flushSync=function(f){var h=E.T,R=s.p;try{if(E.T=null,s.p=2,f)return f()}finally{E.T=h,s.p=R,s.d.f()}},st.preconnect=function(f,h){typeof f=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(f,h))},st.prefetchDNS=function(f){typeof f=="string"&&s.d.D(f)},st.preinit=function(f,h){if(typeof f=="string"&&h&&typeof h.as=="string"){var R=h.as,m=d(R,h.crossOrigin),O=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;R==="style"?s.d.S(f,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:m,integrity:O,fetchPriority:y}):R==="script"&&s.d.X(f,{crossOrigin:m,integrity:O,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},st.preinitModule=function(f,h){if(typeof f=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var R=d(h.as,h.crossOrigin);s.d.M(f,{crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(f)},st.preload=function(f,h){if(typeof f=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var R=h.as,m=d(R,h.crossOrigin);s.d.L(f,R,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},st.preloadModule=function(f,h){if(typeof f=="string")if(h){var R=d(h.as,h.crossOrigin);s.d.m(f,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(f)},st.requestFormReset=function(f){s.d.r(f)},st.unstable_batchedUpdates=function(f,h){return f(h)},st.useFormState=function(f,h,R){return E.H.useFormState(f,h,R)},st.useFormStatus=function(){return E.H.useHostTransitionStatus()},st.version="19.2.3",st}var Nh;function lC(){if(Nh)return Ju.exports;Nh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Ju.exports=rC(),Ju.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function sC(){if(gh)return Ro;gh=1;var n=oC(),o=bc(),r=lC();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(A(e)!==e)throw Error(s(188))}function h(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return f(l),e;if(u===i)return f(l),t;u=u.sibling}throw Error(s(188))}if(a.return!==i.return)a=l,i=u;else{for(var S=!1,T=l.child;T;){if(T===a){S=!0,a=l,i=u;break}if(T===i){S=!0,i=l,a=u;break}T=T.sibling}if(!S){for(T=u.child;T;){if(T===a){S=!0,a=u,i=l;break}if(T===i){S=!0,i=u,a=l;break}T=T.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,O=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),x=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),Se=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var X=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case g:return"Profiler";case B:return"StrictMode";case Z:return"Suspense";case ne:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case x:return e.displayName||"Context";case b:return(e._context.displayName||"Context")+".Consumer";case z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case j:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var fe=Array.isArray,G=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},Te=[],Ee=-1;function N(e){return{current:e}}function V(e){0>Ee||(e.current=Te[Ee],Te[Ee]=null,Ee--)}function W(e,t){Ee++,Te[Ee]=e.current,e.current=t}var q=N(null),se=N(null),Ae=N(null),ge=N(null);function Et(e,t){switch(W(Ae,t),W(se,e),W(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=wd(t),e=Vd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(q),W(q,e)}function Ke(){V(q),V(se),V(Ae)}function Ni(e){e.memoizedState!==null&&W(ge,e);var t=q.current,a=Vd(t,e.type);t!==a&&(W(se,e),W(q,a))}function ko(e){se.current===e&&(V(q),V(se)),ge.current===e&&(V(ge),So._currentValue=_)}var Il,hE;function tn(e){if(Il===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Il=t&&t[1]||"",hE=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Il+e+hE}var Ll=!1;function yl(e,t){if(!e||Ll)return"";Ll=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(v){var P=v}Reflect.construct(e,[],w)}else{try{w.call()}catch(v){P=v}e.call(w.prototype)}}else{try{throw Error()}catch(v){P=v}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(v){if(v&&P&&typeof v.stack=="string")return[v.stack,P.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),S=u[0],T=u[1];if(S&&T){var C=S.split(`
`),D=T.split(`
`);for(l=i=0;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(i===C.length||l===D.length)for(i=C.length-1,l=D.length-1;1<=i&&0<=l&&C[i]!==D[l];)l--;for(;1<=i&&0<=l;i--,l--)if(C[i]!==D[l]){if(i!==1||l!==1)do if(i--,l--,0>l||C[i]!==D[l]){var U=`
`+C[i].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=i&&0<=l);break}}}finally{Ll=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?tn(a):""}function vR(e,t){switch(e.tag){case 26:case 27:case 5:return tn(e.type);case 16:return tn("Lazy");case 13:return e.child!==t&&t!==null?tn("Suspense Fallback"):tn("Suspense");case 19:return tn("SuspenseList");case 0:case 15:return yl(e.type,!1);case 11:return yl(e.type.render,!1);case 1:return yl(e.type,!0);case 31:return tn("Activity");default:return""}}function fE(e){try{var t="",a=null;do t+=vR(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ml=Object.prototype.hasOwnProperty,Dl=n.unstable_scheduleCallback,Pl=n.unstable_cancelCallback,HR=n.unstable_shouldYield,bR=n.unstable_requestPaint,Ot=n.unstable_now,GR=n.unstable_getCurrentPriorityLevel,TE=n.unstable_ImmediatePriority,RE=n.unstable_UserBlockingPriority,wo=n.unstable_NormalPriority,UR=n.unstable_LowPriority,mE=n.unstable_IdlePriority,FR=n.log,kR=n.unstable_setDisableYieldValue,gi=null,Ct=null;function ga(e){if(typeof FR=="function"&&kR(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(gi,e)}catch{}}var pt=Math.clz32?Math.clz32:xR,wR=Math.log,VR=Math.LN2;function xR(e){return e>>>=0,e===0?32:31-(wR(e)/VR|0)|0}var Vo=256,xo=262144,Ko=4194304;function an(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yo(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=i&134217727;return T!==0?(i=T&~u,i!==0?l=an(i):(S&=T,S!==0?l=an(S):a||(a=T&~e,a!==0&&(l=an(a))))):(T=i&~u,T!==0?l=an(T):S!==0?l=an(S):a||(a=i&~e,a!==0&&(l=an(a)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:l}function Ii(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function KR(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OE(){var e=Ko;return Ko<<=1,(Ko&62914560)===0&&(Ko=4194304),e}function Bl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Li(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function YR(e,t,a,i,l,u){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,C=e.expirationTimes,D=e.hiddenUpdates;for(a=S&~a;0<a;){var U=31-pt(a),w=1<<U;T[U]=0,C[U]=-1;var P=D[U];if(P!==null)for(D[U]=null,U=0;U<P.length;U++){var v=P[U];v!==null&&(v.lane&=-536870913)}a&=~w}i!==0&&CE(e,i,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(S&~t))}function CE(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-pt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function pE(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-pt(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function NE(e,t){var a=t&-t;return a=(a&42)!==0?1:vl(a),(a&(e.suspendedLanes|t))!==0?0:a}function vl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gE(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:uh(e.type))}function IE(e,t){var a=K.p;try{return K.p=e,t()}finally{K.p=a}}var Ia=Math.random().toString(36).slice(2),at="__reactFiber$"+Ia,At="__reactProps$"+Ia,yn="__reactContainer$"+Ia,bl="__reactEvents$"+Ia,WR="__reactListeners$"+Ia,zR="__reactHandles$"+Ia,LE="__reactResources$"+Ia,yi="__reactMarker$"+Ia;function Gl(e){delete e[at],delete e[At],delete e[bl],delete e[WR],delete e[zR]}function Mn(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[yn]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=_d(e);e!==null;){if(a=e[at])return a;e=_d(e)}return t}e=a,a=e.parentNode}return null}function Dn(e){if(e=e[at]||e[yn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Mi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Pn(e){var t=e[LE];return t||(t=e[LE]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[yi]=!0}var yE=new Set,ME={};function nn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(ME[e]=t,e=0;e<t.length;e++)yE.add(t[e])}var jR=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),DE={},PE={};function _R(e){return Ml.call(PE,e)?!0:Ml.call(DE,e)?!1:jR.test(e)?PE[e]=!0:(DE[e]=!0,!1)}function Wo(e,t,a){if(_R(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function zo(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function aa(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function BE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function JR(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(S){a=""+S,u.call(this,S)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ul(e){if(!e._valueTracker){var t=BE(e)?"checked":"value";e._valueTracker=JR(e,t,""+e[t])}}function vE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=BE(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ZR=/[\n"\\]/g;function Ht(e){return e.replace(ZR,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fl(e,t,a,i,l,u,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),t!=null?S==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),t!=null?kl(e,S,vt(t)):a!=null?kl(e,S,vt(a)):i!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+vt(T):e.removeAttribute("name")}function HE(e,t,a,i,l,u,S,T){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Ul(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,T||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=T?e.checked:!!i,e.defaultChecked=!!i,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ul(e)}function kl(e,t,a){t==="number"&&jo(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function bE(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function GE(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(s(92));if(fe(i)){if(1<i.length)throw Error(s(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Ul(e)}function Hn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var XR=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function UE(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||XR.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function FE(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&UE(e,l,i)}else for(var u in t)t.hasOwnProperty(u)&&UE(e,u,t[u])}function wl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qR=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),QR=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _o(e){return QR.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var Vl=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bn=null,Gn=null;function kE(e){var t=Dn(e);if(t&&(e=t.stateNode)){var a=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[At]||null;if(!l)throw Error(s(90));Fl(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&vE(i)}break e;case"textarea":bE(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&vn(e,!!a.multiple,t,!1)}}}var Kl=!1;function wE(e,t,a){if(Kl)return e(t,a);Kl=!0;try{var i=e(t);return i}finally{if(Kl=!1,(bn!==null||Gn!==null)&&(br(),bn&&(t=bn,e=Gn,Gn=bn=null,kE(t),e)))for(t=0;t<e.length;t++)kE(e[t])}}function Di(e,t){var a=e.stateNode;if(a===null)return null;var i=a[At]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=!1;if(ia)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{Yl=!1}var La=null,Wl=null,Jo=null;function VE(){if(Jo)return Jo;var e,t=Wl,a=t.length,i,l="value"in La?La.value:La.textContent,u=l.length;for(e=0;e<a&&t[e]===l[e];e++);var S=a-e;for(i=1;i<=S&&t[a-i]===l[u-i];i++);return Jo=l.slice(e,1<i?1-i:void 0)}function Zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function xE(){return!1}function dt(e){function t(a,i,l,u,S){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=u,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(u):u[T]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Xo:xE,this.isPropagationStopped=xE,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=dt(on),Bi=m({},on,{view:0,detail:0}),$R=dt(Bi),zl,jl,vi,Qo=m({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vi&&(vi&&e.type==="mousemove"?(zl=e.screenX-vi.screenX,jl=e.screenY-vi.screenY):jl=zl=0,vi=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),KE=dt(Qo),em=m({},Qo,{dataTransfer:0}),tm=dt(em),am=m({},Bi,{relatedTarget:0}),_l=dt(am),nm=m({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),im=dt(nm),om=m({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rm=dt(om),lm=m({},on,{data:0}),YE=dt(lm),sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Em(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cm[e])?!!t[e]:!1}function Jl(){return Em}var Sm=m({},Bi,{key:function(e){if(e.key){var t=sm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Am=dt(Sm),dm=m({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),WE=dt(dm),hm=m({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),fm=dt(hm),Tm=m({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rm=dt(Tm),mm=m({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=dt(mm),Cm=m({},on,{newState:0,oldState:0}),pm=dt(Cm),Nm=[9,13,27,32],Zl=ia&&"CompositionEvent"in window,Hi=null;ia&&"documentMode"in document&&(Hi=document.documentMode);var gm=ia&&"TextEvent"in window&&!Hi,zE=ia&&(!Zl||Hi&&8<Hi&&11>=Hi),jE=" ",_E=!1;function JE(e,t){switch(e){case"keyup":return Nm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ZE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function Im(e,t){switch(e){case"compositionend":return ZE(t);case"keypress":return t.which!==32?null:(_E=!0,jE);case"textInput":return e=t.data,e===jE&&_E?null:e;default:return null}}function Lm(e,t){if(Un)return e==="compositionend"||!Zl&&JE(e,t)?(e=VE(),Jo=Wl=La=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zE&&t.locale!=="ko"?null:t.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function XE(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ym[e.type]:t==="textarea"}function qE(e,t,a,i){bn?Gn?Gn.push(i):Gn=[i]:bn=i,t=xr(t,"onChange"),0<t.length&&(a=new qo("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var bi=null,Gi=null;function Mm(e){Hd(e,0)}function $o(e){var t=Mi(e);if(vE(t))return e}function QE(e,t){if(e==="change")return t}var $E=!1;if(ia){var Xl;if(ia){var ql="oninput"in document;if(!ql){var eS=document.createElement("div");eS.setAttribute("oninput","return;"),ql=typeof eS.oninput=="function"}Xl=ql}else Xl=!1;$E=Xl&&(!document.documentMode||9<document.documentMode)}function tS(){bi&&(bi.detachEvent("onpropertychange",aS),Gi=bi=null)}function aS(e){if(e.propertyName==="value"&&$o(Gi)){var t=[];qE(t,Gi,e,xl(e)),wE(Mm,t)}}function Dm(e,t,a){e==="focusin"?(tS(),bi=t,Gi=a,bi.attachEvent("onpropertychange",aS)):e==="focusout"&&tS()}function Pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Gi)}function Bm(e,t){if(e==="click")return $o(t)}function vm(e,t){if(e==="input"||e==="change")return $o(t)}function Hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:Hm;function Ui(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Ml.call(t,l)||!Nt(e[l],t[l]))return!1}return!0}function nS(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iS(e,t){var a=nS(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=nS(a)}}function oS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rS(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jo(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=jo(e.document)}return t}function Ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var bm=ia&&"documentMode"in document&&11>=document.documentMode,Fn=null,$l=null,Fi=null,es=!1;function lS(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;es||Fn==null||Fn!==jo(i)||(i=Fn,"selectionStart"in i&&Ql(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fi&&Ui(Fi,i)||(Fi=i,i=xr($l,"onSelect"),0<i.length&&(t=new qo("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Fn)))}function rn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var kn={animationend:rn("Animation","AnimationEnd"),animationiteration:rn("Animation","AnimationIteration"),animationstart:rn("Animation","AnimationStart"),transitionrun:rn("Transition","TransitionRun"),transitionstart:rn("Transition","TransitionStart"),transitioncancel:rn("Transition","TransitionCancel"),transitionend:rn("Transition","TransitionEnd")},ts={},sS={};ia&&(sS=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function ln(e){if(ts[e])return ts[e];if(!kn[e])return e;var t=kn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in sS)return ts[e]=t[a];return e}var uS=ln("animationend"),cS=ln("animationiteration"),ES=ln("animationstart"),Gm=ln("transitionrun"),Um=ln("transitionstart"),Fm=ln("transitioncancel"),SS=ln("transitionend"),AS=new Map,as="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");as.push("scrollEnd");function Wt(e,t){AS.set(e,t),nn(t,[e])}var er=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],wn=0,ns=0;function tr(){for(var e=wn,t=ns=wn=0;t<e;){var a=bt[t];bt[t++]=null;var i=bt[t];bt[t++]=null;var l=bt[t];bt[t++]=null;var u=bt[t];if(bt[t++]=null,i!==null&&l!==null){var S=i.pending;S===null?l.next=l:(l.next=S.next,S.next=l),i.pending=l}u!==0&&dS(a,l,u)}}function ar(e,t,a,i){bt[wn++]=e,bt[wn++]=t,bt[wn++]=a,bt[wn++]=i,ns|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function is(e,t,a,i){return ar(e,t,a,i),nr(e)}function sn(e,t){return ar(e,null,null,t),nr(e)}function dS(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,i=u.alternate,i!==null&&(i.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-pt(a),e=u.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),u):null}function nr(e){if(50<oo)throw oo=0,Au=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Vn={};function km(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,i){return new km(e,t,a,i)}function os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function hS(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ir(e,t,a,i,l,u){var S=0;if(i=e,typeof e=="function")os(e)&&(S=1);else if(typeof e=="string")S=YO(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=gt(31,a,t,l),e.elementType=ie,e.lanes=u,e;case k:return un(a.children,l,u,t);case B:S=8,l|=24;break;case g:return e=gt(12,a,t,l|2),e.elementType=g,e.lanes=u,e;case Z:return e=gt(13,a,t,l),e.elementType=Z,e.lanes=u,e;case ne:return e=gt(19,a,t,l),e.elementType=ne,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:S=10;break e;case b:S=9;break e;case z:S=11;break e;case Q:S=14;break e;case j:S=16,i=null;break e}S=29,a=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=gt(S,a,t,l),t.elementType=e,t.type=i,t.lanes=u,t}function un(e,t,a,i){return e=gt(7,e,i,t),e.lanes=a,e}function rs(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function fS(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function ls(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var TS=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var a=TS.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fE(t)},TS.set(e,t),t)}return{value:e,source:t,stack:fE(t)}}var xn=[],Kn=0,or=null,ki=0,Ut=[],Ft=0,ya=null,Xt=1,qt="";function ra(e,t){xn[Kn++]=ki,xn[Kn++]=or,or=e,ki=t}function RS(e,t,a){Ut[Ft++]=Xt,Ut[Ft++]=qt,Ut[Ft++]=ya,ya=e;var i=Xt;e=qt;var l=32-pt(i)-1;i&=~(1<<l),a+=1;var u=32-pt(t)+l;if(30<u){var S=l-l%5;u=(i&(1<<S)-1).toString(32),i>>=S,l-=S,Xt=1<<32-pt(t)+l|a<<l|i,qt=u+e}else Xt=1<<u|a<<l|i,qt=e}function ss(e){e.return!==null&&(ra(e,1),RS(e,1,0))}function us(e){for(;e===or;)or=xn[--Kn],xn[Kn]=null,ki=xn[--Kn],xn[Kn]=null;for(;e===ya;)ya=Ut[--Ft],Ut[Ft]=null,qt=Ut[--Ft],Ut[Ft]=null,Xt=Ut[--Ft],Ut[Ft]=null}function mS(e,t){Ut[Ft++]=Xt,Ut[Ft++]=qt,Ut[Ft++]=ya,Xt=t.id,qt=t.overflow,ya=e}var nt=null,be=null,Oe=!1,Ma=null,kt=!1,cs=Error(s(519));function Da(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wi(Gt(t,e)),cs}function OS(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[at]=e,t[At]=i,a){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(a=0;a<lo.length;a++)he(lo[a],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),HE(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),GE(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Fd(t.textContent,a)?(i.popover!=null&&(he("beforetoggle",t),he("toggle",t)),i.onScroll!=null&&he("scroll",t),i.onScrollEnd!=null&&he("scrollend",t),i.onClick!=null&&(t.onclick=na),t=!0):t=!1,t||Da(e,!0)}function CS(e){for(nt=e.return;nt;)switch(nt.tag){case 5:case 31:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:nt=nt.return}}function Yn(e){if(e!==nt)return!1;if(!Oe)return CS(e),Oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Mu(e.type,e.memoizedProps)),a=!a),a&&be&&Da(e),CS(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));be=jd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));be=jd(e)}else t===27?(t=be,Ya(e.type)?(e=Hu,Hu=null,be=e):be=t):be=nt?Vt(e.stateNode.nextSibling):null;return!0}function cn(){be=nt=null,Oe=!1}function Es(){var e=Ma;return e!==null&&(Rt===null?Rt=e:Rt.push.apply(Rt,e),Ma=null),e}function wi(e){Ma===null?Ma=[e]:Ma.push(e)}var Ss=N(null),En=null,la=null;function Pa(e,t,a){W(Ss,t._currentValue),t._currentValue=a}function sa(e){e._currentValue=Ss.current,V(Ss)}function As(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function ds(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var S=l.child;u=u.firstContext;e:for(;u!==null;){var T=u;u=l;for(var C=0;C<t.length;C++)if(T.context===t[C]){u.lanes|=a,T=u.alternate,T!==null&&(T.lanes|=a),As(u.return,a,e),i||(S=null);break e}u=T.next}}else if(l.tag===18){if(S=l.return,S===null)throw Error(s(341));S.lanes|=a,u=S.alternate,u!==null&&(u.lanes|=a),As(S,a,e),S=null}else S=l.child;if(S!==null)S.return=l;else for(S=l;S!==null;){if(S===e){S=null;break}if(l=S.sibling,l!==null){l.return=S.return,S=l;break}S=S.return}l=S}}function Wn(e,t,a,i){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var S=l.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var T=l.type;Nt(l.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(l===ge.current){if(S=l.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}l=l.return}e!==null&&ds(t,e,a,i),t.flags|=262144}function rr(e){for(e=e.firstContext;e!==null;){if(!Nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Sn(e){En=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return pS(En,e)}function lr(e,t){return En===null&&Sn(e),pS(e,t)}function pS(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},la===null){if(e===null)throw Error(s(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return a}var wm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Vm=n.unstable_scheduleCallback,xm=n.unstable_NormalPriority,je={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hs(){return{controller:new wm,data:new Map,refCount:0}}function Vi(e){e.refCount--,e.refCount===0&&Vm(xm,function(){e.controller.abort()})}var xi=null,fs=0,zn=0,jn=null;function Km(e,t){if(xi===null){var a=xi=[];fs=0,zn=mu(),jn={status:"pending",value:void 0,then:function(i){a.push(i)}}}return fs++,t.then(NS,NS),t}function NS(){if(--fs===0&&xi!==null){jn!==null&&(jn.status="fulfilled");var e=xi;xi=null,zn=0,jn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ym(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var gS=G.S;G.S=function(e,t){ld=Ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Km(e,t),gS!==null&&gS(e,t)};var An=N(null);function Ts(){var e=An.current;return e!==null?e:He.pooledCache}function sr(e,t){t===null?W(An,An.current):W(An,t.pool)}function IS(){var e=Ts();return e===null?null:{parent:je._currentValue,pool:e}}var _n=Error(s(460)),Rs=Error(s(474)),ur=Error(s(542)),cr={then:function(){}};function LS(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yS(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(na,na),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,DS(e),e;default:if(typeof t.status=="string")t.then(na,na);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,DS(e),e}throw hn=t,_n}}function dn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hn=a,_n):a}}var hn=null;function MS(){if(hn===null)throw Error(s(459));var e=hn;return hn=null,e}function DS(e){if(e===_n||e===ur)throw Error(s(483))}var Jn=null,Ki=0;function Er(e){var t=Ki;return Ki+=1,Jn===null&&(Jn=[]),yS(Jn,e,t)}function Yi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Sr(e,t){throw t.$$typeof===O?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function PS(e){function t(L,p){if(e){var M=L.deletions;M===null?(L.deletions=[p],L.flags|=16):M.push(p)}}function a(L,p){if(!e)return null;for(;p!==null;)t(L,p),p=p.sibling;return null}function i(L){for(var p=new Map;L!==null;)L.key!==null?p.set(L.key,L):p.set(L.index,L),L=L.sibling;return p}function l(L,p){return L=oa(L,p),L.index=0,L.sibling=null,L}function u(L,p,M){return L.index=M,e?(M=L.alternate,M!==null?(M=M.index,M<p?(L.flags|=67108866,p):M):(L.flags|=67108866,p)):(L.flags|=1048576,p)}function S(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function T(L,p,M,F){return p===null||p.tag!==6?(p=rs(M,L.mode,F),p.return=L,p):(p=l(p,M),p.return=L,p)}function C(L,p,M,F){var ee=M.type;return ee===k?U(L,p,M.props.children,F,M.key):p!==null&&(p.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===j&&dn(ee)===p.type)?(p=l(p,M.props),Yi(p,M),p.return=L,p):(p=ir(M.type,M.key,M.props,null,L.mode,F),Yi(p,M),p.return=L,p)}function D(L,p,M,F){return p===null||p.tag!==4||p.stateNode.containerInfo!==M.containerInfo||p.stateNode.implementation!==M.implementation?(p=ls(M,L.mode,F),p.return=L,p):(p=l(p,M.children||[]),p.return=L,p)}function U(L,p,M,F,ee){return p===null||p.tag!==7?(p=un(M,L.mode,F,ee),p.return=L,p):(p=l(p,M),p.return=L,p)}function w(L,p,M){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=rs(""+p,L.mode,M),p.return=L,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case y:return M=ir(p.type,p.key,p.props,null,L.mode,M),Yi(M,p),M.return=L,M;case H:return p=ls(p,L.mode,M),p.return=L,p;case j:return p=dn(p),w(L,p,M)}if(fe(p)||Me(p))return p=un(p,L.mode,M,null),p.return=L,p;if(typeof p.then=="function")return w(L,Er(p),M);if(p.$$typeof===x)return w(L,lr(L,p),M);Sr(L,p)}return null}function P(L,p,M,F){var ee=p!==null?p.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ee!==null?null:T(L,p,""+M,F);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case y:return M.key===ee?C(L,p,M,F):null;case H:return M.key===ee?D(L,p,M,F):null;case j:return M=dn(M),P(L,p,M,F)}if(fe(M)||Me(M))return ee!==null?null:U(L,p,M,F,null);if(typeof M.then=="function")return P(L,p,Er(M),F);if(M.$$typeof===x)return P(L,p,lr(L,M),F);Sr(L,M)}return null}function v(L,p,M,F,ee){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return L=L.get(M)||null,T(p,L,""+F,ee);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case y:return L=L.get(F.key===null?M:F.key)||null,C(p,L,F,ee);case H:return L=L.get(F.key===null?M:F.key)||null,D(p,L,F,ee);case j:return F=dn(F),v(L,p,M,F,ee)}if(fe(F)||Me(F))return L=L.get(M)||null,U(p,L,F,ee,null);if(typeof F.then=="function")return v(L,p,M,Er(F),ee);if(F.$$typeof===x)return v(L,p,M,lr(p,F),ee);Sr(p,F)}return null}function J(L,p,M,F){for(var ee=null,Ce=null,$=p,ce=p=0,me=null;$!==null&&ce<M.length;ce++){$.index>ce?(me=$,$=null):me=$.sibling;var pe=P(L,$,M[ce],F);if(pe===null){$===null&&($=me);break}e&&$&&pe.alternate===null&&t(L,$),p=u(pe,p,ce),Ce===null?ee=pe:Ce.sibling=pe,Ce=pe,$=me}if(ce===M.length)return a(L,$),Oe&&ra(L,ce),ee;if($===null){for(;ce<M.length;ce++)$=w(L,M[ce],F),$!==null&&(p=u($,p,ce),Ce===null?ee=$:Ce.sibling=$,Ce=$);return Oe&&ra(L,ce),ee}for($=i($);ce<M.length;ce++)me=v($,L,ce,M[ce],F),me!==null&&(e&&me.alternate!==null&&$.delete(me.key===null?ce:me.key),p=u(me,p,ce),Ce===null?ee=me:Ce.sibling=me,Ce=me);return e&&$.forEach(function(Ja){return t(L,Ja)}),Oe&&ra(L,ce),ee}function te(L,p,M,F){if(M==null)throw Error(s(151));for(var ee=null,Ce=null,$=p,ce=p=0,me=null,pe=M.next();$!==null&&!pe.done;ce++,pe=M.next()){$.index>ce?(me=$,$=null):me=$.sibling;var Ja=P(L,$,pe.value,F);if(Ja===null){$===null&&($=me);break}e&&$&&Ja.alternate===null&&t(L,$),p=u(Ja,p,ce),Ce===null?ee=Ja:Ce.sibling=Ja,Ce=Ja,$=me}if(pe.done)return a(L,$),Oe&&ra(L,ce),ee;if($===null){for(;!pe.done;ce++,pe=M.next())pe=w(L,pe.value,F),pe!==null&&(p=u(pe,p,ce),Ce===null?ee=pe:Ce.sibling=pe,Ce=pe);return Oe&&ra(L,ce),ee}for($=i($);!pe.done;ce++,pe=M.next())pe=v($,L,ce,pe.value,F),pe!==null&&(e&&pe.alternate!==null&&$.delete(pe.key===null?ce:pe.key),p=u(pe,p,ce),Ce===null?ee=pe:Ce.sibling=pe,Ce=pe);return e&&$.forEach(function(eC){return t(L,eC)}),Oe&&ra(L,ce),ee}function Be(L,p,M,F){if(typeof M=="object"&&M!==null&&M.type===k&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case y:e:{for(var ee=M.key;p!==null;){if(p.key===ee){if(ee=M.type,ee===k){if(p.tag===7){a(L,p.sibling),F=l(p,M.props.children),F.return=L,L=F;break e}}else if(p.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===j&&dn(ee)===p.type){a(L,p.sibling),F=l(p,M.props),Yi(F,M),F.return=L,L=F;break e}a(L,p);break}else t(L,p);p=p.sibling}M.type===k?(F=un(M.props.children,L.mode,F,M.key),F.return=L,L=F):(F=ir(M.type,M.key,M.props,null,L.mode,F),Yi(F,M),F.return=L,L=F)}return S(L);case H:e:{for(ee=M.key;p!==null;){if(p.key===ee)if(p.tag===4&&p.stateNode.containerInfo===M.containerInfo&&p.stateNode.implementation===M.implementation){a(L,p.sibling),F=l(p,M.children||[]),F.return=L,L=F;break e}else{a(L,p);break}else t(L,p);p=p.sibling}F=ls(M,L.mode,F),F.return=L,L=F}return S(L);case j:return M=dn(M),Be(L,p,M,F)}if(fe(M))return J(L,p,M,F);if(Me(M)){if(ee=Me(M),typeof ee!="function")throw Error(s(150));return M=ee.call(M),te(L,p,M,F)}if(typeof M.then=="function")return Be(L,p,Er(M),F);if(M.$$typeof===x)return Be(L,p,lr(L,M),F);Sr(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,p!==null&&p.tag===6?(a(L,p.sibling),F=l(p,M),F.return=L,L=F):(a(L,p),F=rs(M,L.mode,F),F.return=L,L=F),S(L)):a(L,p)}return function(L,p,M,F){try{Ki=0;var ee=Be(L,p,M,F);return Jn=null,ee}catch($){if($===_n||$===ur)throw $;var Ce=gt(29,$,null,L.mode);return Ce.lanes=F,Ce.return=L,Ce}finally{}}}var fn=PS(!0),BS=PS(!1),Ba=!1;function ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ne&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=nr(e),dS(e,null,a),t}return ar(e,i,t,a),nr(e)}function Wi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,pE(e,a)}}function Cs(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=S:u=u.next=S,a=a.next}while(a!==null);u===null?l=u=t:u=u.next=t}else l=u=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ps=!1;function zi(){if(ps){var e=jn;if(e!==null)throw e}}function ji(e,t,a,i){ps=!1;var l=e.updateQueue;Ba=!1;var u=l.firstBaseUpdate,S=l.lastBaseUpdate,T=l.shared.pending;if(T!==null){l.shared.pending=null;var C=T,D=C.next;C.next=null,S===null?u=D:S.next=D,S=C;var U=e.alternate;U!==null&&(U=U.updateQueue,T=U.lastBaseUpdate,T!==S&&(T===null?U.firstBaseUpdate=D:T.next=D,U.lastBaseUpdate=C))}if(u!==null){var w=l.baseState;S=0,U=D=C=null,T=u;do{var P=T.lane&-536870913,v=P!==T.lane;if(v?(Re&P)===P:(i&P)===P){P!==0&&P===zn&&(ps=!0),U!==null&&(U=U.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var J=e,te=T;P=t;var Be=a;switch(te.tag){case 1:if(J=te.payload,typeof J=="function"){w=J.call(Be,w,P);break e}w=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=te.payload,P=typeof J=="function"?J.call(Be,w,P):J,P==null)break e;w=m({},w,P);break e;case 2:Ba=!0}}P=T.callback,P!==null&&(e.flags|=64,v&&(e.flags|=8192),v=l.callbacks,v===null?l.callbacks=[P]:v.push(P))}else v={lane:P,tag:T.tag,payload:T.payload,callback:T.callback,next:null},U===null?(D=U=v,C=w):U=U.next=v,S|=P;if(T=T.next,T===null){if(T=l.shared.pending,T===null)break;v=T,T=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);U===null&&(C=w),l.baseState=C,l.firstBaseUpdate=D,l.lastBaseUpdate=U,u===null&&(l.shared.lanes=0),ka|=S,e.lanes=S,e.memoizedState=w}}function vS(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function HS(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vS(a[e],t)}var Zn=N(null),Ar=N(0);function bS(e,t){e=Ta,W(Ar,e),W(Zn,t),Ta=e|t.baseLanes}function Ns(){W(Ar,Ta),W(Zn,Zn.current)}function gs(){Ta=Ar.current,V(Zn),V(Ar)}var It=N(null),wt=null;function ba(e){var t=e.alternate;W(Ye,Ye.current&1),W(It,e),wt===null&&(t===null||Zn.current!==null||t.memoizedState!==null)&&(wt=e)}function Is(e){W(Ye,Ye.current),W(It,e),wt===null&&(wt=e)}function GS(e){e.tag===22?(W(Ye,Ye.current),W(It,e),wt===null&&(wt=e)):Ga()}function Ga(){W(Ye,Ye.current),W(It,It.current)}function Lt(e){V(It),wt===e&&(wt=null),V(Ye)}var Ye=N(0);function dr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bu(a)||vu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=0,ue=null,De=null,_e=null,hr=!1,Xn=!1,Tn=!1,fr=0,_i=0,qn=null,Wm=0;function we(){throw Error(s(321))}function Ls(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Nt(e[a],t[a]))return!1;return!0}function ys(e,t,a,i,l,u){return ua=u,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?RA:Ks,Tn=!1,u=a(i,l),Tn=!1,Xn&&(u=FS(t,a,i,l)),US(e),u}function US(e){G.H=Xi;var t=De!==null&&De.next!==null;if(ua=0,_e=De=ue=null,hr=!1,_i=0,qn=null,t)throw Error(s(300));e===null||Je||(e=e.dependencies,e!==null&&rr(e)&&(Je=!0))}function FS(e,t,a,i){ue=e;var l=0;do{if(Xn&&(qn=null),_i=0,Xn=!1,25<=l)throw Error(s(301));if(l+=1,_e=De=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}G.H=mA,u=t(a,i)}while(Xn);return u}function zm(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?Ji(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ue.flags|=1024),t}function Ms(){var e=fr!==0;return fr=0,e}function Ds(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ps(e){if(hr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hr=!1}ua=0,_e=De=ue=null,Xn=!1,_i=fr=0,qn=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ue.memoizedState=_e=e:_e=_e.next=e,_e}function We(){if(De===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=_e===null?ue.memoizedState:_e.next;if(t!==null)_e=t,De=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},_e===null?ue.memoizedState=_e=e:_e=_e.next=e}return _e}function Tr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ji(e){var t=_i;return _i+=1,qn===null&&(qn=[]),e=yS(qn,e,t),t=ue,(_e===null?t.memoizedState:_e.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?RA:Ks),e}function Rr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ji(e);if(e.$$typeof===x)return it(e)}throw Error(s(438,String(e)))}function Bs(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=ue.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Tr(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Se;return t.index++,a}function ca(e,t){return typeof t=="function"?t(e):t}function mr(e){var t=We();return vs(t,De,e)}function vs(e,t,a){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=a;var l=e.baseQueue,u=i.pending;if(u!==null){if(l!==null){var S=l.next;l.next=u.next,u.next=S}t.baseQueue=l=u,i.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var T=S=null,C=null,D=t,U=!1;do{var w=D.lane&-536870913;if(w!==D.lane?(Re&w)===w:(ua&w)===w){var P=D.revertLane;if(P===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),w===zn&&(U=!0);else if((ua&P)===P){D=D.next,P===zn&&(U=!0);continue}else w={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},C===null?(T=C=w,S=u):C=C.next=w,ue.lanes|=P,ka|=P;w=D.action,Tn&&a(u,w),u=D.hasEagerState?D.eagerState:a(u,w)}else P={lane:w,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},C===null?(T=C=P,S=u):C=C.next=P,ue.lanes|=w,ka|=w;D=D.next}while(D!==null&&D!==t);if(C===null?S=u:C.next=T,!Nt(u,e.memoizedState)&&(Je=!0,U&&(a=jn,a!==null)))throw a;e.memoizedState=u,e.baseState=S,e.baseQueue=C,i.lastRenderedState=u}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Hs(e){var t=We(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,u=t.memoizedState;if(l!==null){a.pending=null;var S=l=l.next;do u=e(u,S.action),S=S.next;while(S!==l);Nt(u,t.memoizedState)||(Je=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,i]}function kS(e,t,a){var i=ue,l=We(),u=Oe;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=t();var S=!Nt((De||l).memoizedState,a);if(S&&(l.memoizedState=a,Je=!0),l=l.queue,Us(xS.bind(null,i,l,e),[e]),l.getSnapshot!==t||S||_e!==null&&_e.memoizedState.tag&1){if(i.flags|=2048,Qn(9,{destroy:void 0},VS.bind(null,i,l,a,t),null),He===null)throw Error(s(349));u||(ua&127)!==0||wS(i,t,a)}return a}function wS(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=Tr(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function VS(e,t,a,i){t.value=a,t.getSnapshot=i,KS(t)&&YS(e)}function xS(e,t,a){return a(function(){KS(t)&&YS(e)})}function KS(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Nt(e,a)}catch{return!0}}function YS(e){var t=sn(e,2);t!==null&&mt(t,e,2)}function bs(e){var t=St();if(typeof e=="function"){var a=e;if(e=a(),Tn){ga(!0);try{a()}finally{ga(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function WS(e,t,a,i){return e.baseState=a,vs(e,De,typeof i=="function"?i:ca)}function jm(e,t,a,i,l){if(pr(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){u.listeners.push(S)}};G.T!==null?a(!0):u.isTransition=!1,i(u),a=t.pending,a===null?(u.next=t.pending=u,zS(t,u)):(u.next=a.next,t.pending=a.next=u)}}function zS(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var u=G.T,S={};G.T=S;try{var T=a(l,i),C=G.S;C!==null&&C(S,T),jS(e,t,T)}catch(D){Gs(e,t,D)}finally{u!==null&&S.types!==null&&(u.types=S.types),G.T=u}}else try{u=a(l,i),jS(e,t,u)}catch(D){Gs(e,t,D)}}function jS(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){_S(e,t,i)},function(i){return Gs(e,t,i)}):_S(e,t,a)}function _S(e,t,a){t.status="fulfilled",t.value=a,JS(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,zS(e,a)))}function Gs(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,JS(t),t=t.next;while(t!==i)}e.action=null}function JS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ZS(e,t){return t}function XS(e,t){if(Oe){var a=He.formState;if(a!==null){e:{var i=ue;if(Oe){if(be){t:{for(var l=be,u=kt;l.nodeType!==8;){if(!u){l=null;break t}if(l=Vt(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){be=Vt(l.nextSibling),i=l.data==="F!";break e}}Da(i)}i=!1}i&&(t=a[0])}}return a=St(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ZS,lastRenderedState:t},a.queue=i,a=hA.bind(null,ue,i),i.dispatch=a,i=bs(!1),u=xs.bind(null,ue,!1,i.queue),i=St(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=jm.bind(null,ue,l,u,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function qS(e){var t=We();return QS(t,De,e)}function QS(e,t,a){if(t=vs(e,t,ZS)[0],e=mr(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ji(t)}catch(S){throw S===_n?ur:S}else i=t;t=We();var l=t.queue,u=l.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Qn(9,{destroy:void 0},_m.bind(null,l,a),null)),[i,u,e]}function _m(e,t){e.action=t}function $S(e){var t=We(),a=De;if(a!==null)return QS(t,a,e);We(),t=t.memoizedState,a=We();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function Qn(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Tr(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function eA(){return We().memoizedState}function Or(e,t,a,i){var l=St();ue.flags|=e,l.memoizedState=Qn(1|t,{destroy:void 0},a,i===void 0?null:i)}function Cr(e,t,a,i){var l=We();i=i===void 0?null:i;var u=l.memoizedState.inst;De!==null&&i!==null&&Ls(i,De.memoizedState.deps)?l.memoizedState=Qn(t,u,a,i):(ue.flags|=e,l.memoizedState=Qn(1|t,u,a,i))}function tA(e,t){Or(8390656,8,e,t)}function Us(e,t){Cr(2048,8,e,t)}function Jm(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=Tr(),ue.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function aA(e){var t=We().memoizedState;return Jm({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function nA(e,t){return Cr(4,2,e,t)}function iA(e,t){return Cr(4,4,e,t)}function oA(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rA(e,t,a){a=a!=null?a.concat([e]):null,Cr(4,4,oA.bind(null,t,e),a)}function Fs(){}function lA(e,t){var a=We();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Ls(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function sA(e,t){var a=We();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Ls(t,i[1]))return i[0];if(i=e(),Tn){ga(!0);try{e()}finally{ga(!1)}}return a.memoizedState=[i,t],i}function ks(e,t,a){return a===void 0||(ua&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ud(),ue.lanes|=e,ka|=e,a)}function uA(e,t,a,i){return Nt(a,t)?a:Zn.current!==null?(e=ks(e,a,i),Nt(e,t)||(Je=!0),e):(ua&42)===0||(ua&1073741824)!==0&&(Re&261930)===0?(Je=!0,e.memoizedState=a):(e=ud(),ue.lanes|=e,ka|=e,t)}function cA(e,t,a,i,l){var u=K.p;K.p=u!==0&&8>u?u:8;var S=G.T,T={};G.T=T,xs(e,!1,t,a);try{var C=l(),D=G.S;if(D!==null&&D(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var U=Ym(C,i);Zi(e,t,U,Dt(e))}else Zi(e,t,i,Dt(e))}catch(w){Zi(e,t,{then:function(){},status:"rejected",reason:w},Dt())}finally{K.p=u,S!==null&&T.types!==null&&(S.types=T.types),G.T=S}}function Zm(){}function ws(e,t,a,i){if(e.tag!==5)throw Error(s(476));var l=EA(e).queue;cA(e,l,t,_,a===null?Zm:function(){return SA(e),a(i)})}function EA(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:_},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function SA(e){var t=EA(e);t.next===null&&(t=e.alternate.memoizedState),Zi(e,t.next.queue,{},Dt())}function Vs(){return it(So)}function AA(){return We().memoizedState}function dA(){return We().memoizedState}function Xm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Dt();e=va(a);var i=Ha(t,e,a);i!==null&&(mt(i,t,a),Wi(i,t,a)),t={cache:hs()},e.payload=t;return}t=t.return}}function qm(e,t,a){var i=Dt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pr(e)?fA(t,a):(a=is(e,t,a,i),a!==null&&(mt(a,e,i),TA(a,t,i)))}function hA(e,t,a){var i=Dt();Zi(e,t,a,i)}function Zi(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pr(e))fA(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var S=t.lastRenderedState,T=u(S,a);if(l.hasEagerState=!0,l.eagerState=T,Nt(T,S))return ar(e,t,l,0),He===null&&tr(),!1}catch{}finally{}if(a=is(e,t,l,i),a!==null)return mt(a,e,i),TA(a,t,i),!0}return!1}function xs(e,t,a,i){if(i={lane:2,revertLane:mu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},pr(e)){if(t)throw Error(s(479))}else t=is(e,a,i,2),t!==null&&mt(t,e,2)}function pr(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function fA(e,t){Xn=hr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function TA(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,pE(e,a)}}var Xi={readContext:it,use:Rr,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};Xi.useEffectEvent=we;var RA={readContext:it,use:Rr,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:tA,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Or(4194308,4,oA.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){Or(4,2,e,t)},useMemo:function(e,t){var a=St();t=t===void 0?null:t;var i=e();if(Tn){ga(!0);try{e()}finally{ga(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=St();if(a!==void 0){var l=a(t);if(Tn){ga(!0);try{a(t)}finally{ga(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=qm.bind(null,ue,e),[i.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=bs(e);var t=e.queue,a=hA.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Fs,useDeferredValue:function(e,t){var a=St();return ks(a,e,t)},useTransition:function(){var e=bs(!1);return e=cA.bind(null,ue,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=ue,l=St();if(Oe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),He===null)throw Error(s(349));(Re&127)!==0||wS(i,t,a)}l.memoizedState=a;var u={value:a,getSnapshot:t};return l.queue=u,tA(xS.bind(null,i,u,e),[e]),i.flags|=2048,Qn(9,{destroy:void 0},VS.bind(null,i,u,a,t),null),a},useId:function(){var e=St(),t=He.identifierPrefix;if(Oe){var a=qt,i=Xt;a=(i&~(1<<32-pt(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=fr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Wm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vs,useFormState:XS,useActionState:XS,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=xs.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Bs,useCacheRefresh:function(){return St().memoizedState=Xm.bind(null,ue)},useEffectEvent:function(e){var t=St(),a={impl:e};return t.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ks={readContext:it,use:Rr,useCallback:lA,useContext:it,useEffect:Us,useImperativeHandle:rA,useInsertionEffect:nA,useLayoutEffect:iA,useMemo:sA,useReducer:mr,useRef:eA,useState:function(){return mr(ca)},useDebugValue:Fs,useDeferredValue:function(e,t){var a=We();return uA(a,De.memoizedState,e,t)},useTransition:function(){var e=mr(ca)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:kS,useId:AA,useHostTransitionStatus:Vs,useFormState:qS,useActionState:qS,useOptimistic:function(e,t){var a=We();return WS(a,De,e,t)},useMemoCache:Bs,useCacheRefresh:dA};Ks.useEffectEvent=aA;var mA={readContext:it,use:Rr,useCallback:lA,useContext:it,useEffect:Us,useImperativeHandle:rA,useInsertionEffect:nA,useLayoutEffect:iA,useMemo:sA,useReducer:Hs,useRef:eA,useState:function(){return Hs(ca)},useDebugValue:Fs,useDeferredValue:function(e,t){var a=We();return De===null?ks(a,e,t):uA(a,De.memoizedState,e,t)},useTransition:function(){var e=Hs(ca)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:kS,useId:AA,useHostTransitionStatus:Vs,useFormState:$S,useActionState:$S,useOptimistic:function(e,t){var a=We();return De!==null?WS(a,De,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bs,useCacheRefresh:dA};mA.useEffectEvent=aA;function Ys(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:m({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ws={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Dt(),l=va(i);l.payload=t,a!=null&&(l.callback=a),t=Ha(e,l,i),t!==null&&(mt(t,e,i),Wi(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Dt(),l=va(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ha(e,l,i),t!==null&&(mt(t,e,i),Wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Dt(),i=va(a);i.tag=2,t!=null&&(i.callback=t),t=Ha(e,i,a),t!==null&&(mt(t,e,a),Wi(t,e,a))}};function OA(e,t,a,i,l,u,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,S):t.prototype&&t.prototype.isPureReactComponent?!Ui(a,i)||!Ui(l,u):!0}function CA(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function Rn(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=m({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function pA(e){er(e)}function NA(e){console.error(e)}function gA(e){er(e)}function Nr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function IA(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zs(e,t,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Nr(e,t)},a}function LA(e){return e=va(e),e.tag=3,e}function yA(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;e.payload=function(){return l(u)},e.callback=function(){IA(t,a,i)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){IA(t,a,i),typeof l!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})})}function Qm(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Wn(t,a,l,!0),a=It.current,a!==null){switch(a.tag){case 31:case 13:return wt===null?Gr():a.alternate===null&&Ve===0&&(Ve=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===cr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),fu(e,i,l)),!1;case 22:return a.flags|=65536,i===cr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),fu(e,i,l)),!1}throw Error(s(435,a.tag))}return fu(e,i,l),Gr(),!1}if(Oe)return t=It.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==cs&&(e=Error(s(422),{cause:i}),wi(Gt(e,a)))):(i!==cs&&(t=Error(s(423),{cause:i}),wi(Gt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Gt(i,a),l=zs(e.stateNode,i,l),Cs(e,l),Ve!==4&&(Ve=2)),!1;var u=Error(s(520),{cause:i});if(u=Gt(u,a),io===null?io=[u]:io.push(u),Ve!==4&&(Ve=2),t===null)return!0;i=Gt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=zs(a.stateNode,i,e),Cs(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(wa===null||!wa.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=LA(l),yA(l,e,a,i),Cs(a,l),!1}a=a.return}while(a!==null);return!1}var js=Error(s(461)),Je=!1;function ot(e,t,a,i){t.child=e===null?BS(t,null,a,i):fn(t,e.child,a,i)}function MA(e,t,a,i,l){a=a.render;var u=t.ref;if("ref"in i){var S={};for(var T in i)T!=="ref"&&(S[T]=i[T])}else S=i;return Sn(t),i=ys(e,t,a,S,u,l),T=Ms(),e!==null&&!Je?(Ds(e,t,l),Ea(e,t,l)):(Oe&&T&&ss(t),t.flags|=1,ot(e,t,i,l),t.child)}function DA(e,t,a,i,l){if(e===null){var u=a.type;return typeof u=="function"&&!os(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,PA(e,t,u,i,l)):(e=ir(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!eu(e,l)){var S=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ui,a(S,i)&&e.ref===t.ref)return Ea(e,t,l)}return t.flags|=1,e=oa(u,i),e.ref=t.ref,e.return=t,t.child=e}function PA(e,t,a,i,l){if(e!==null){var u=e.memoizedProps;if(Ui(u,i)&&e.ref===t.ref)if(Je=!1,t.pendingProps=i=u,eu(e,l))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Ea(e,t,l)}return _s(e,t,a,i,l)}function BA(e,t,a,i){var l=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~u}else i=0,t.child=null;return vA(e,t,u,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&sr(t,u!==null?u.cachePool:null),u!==null?bS(t,u):Ns(),GS(t);else return i=t.lanes=536870912,vA(e,t,u!==null?u.baseLanes|a:a,a,i)}else u!==null?(sr(t,u.cachePool),bS(t,u),Ga(),t.memoizedState=null):(e!==null&&sr(t,null),Ns(),Ga());return ot(e,t,l,a),t.child}function qi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vA(e,t,a,i,l){var u=Ts();return u=u===null?null:{parent:je._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&sr(t,null),Ns(),GS(t),e!==null&&Wn(e,t,i,!0),t.childLanes=l,null}function gr(e,t){return t=Lr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function HA(e,t,a){return fn(t,e.child,null,a),e=gr(t,t.pendingProps),e.flags|=2,Lt(t),t.memoizedState=null,e}function $m(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Oe){if(i.mode==="hidden")return e=gr(t,i),t.lanes=536870912,qi(null,e);if(Is(t),(e=be)?(e=zd(e,kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Xt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=fS(e),a.return=t,t.child=a,nt=t,be=null)):e=null,e===null)throw Da(t);return t.lanes=536870912,null}return gr(t,i)}var u=e.memoizedState;if(u!==null){var S=u.dehydrated;if(Is(t),l)if(t.flags&256)t.flags&=-257,t=HA(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Je||Wn(e,t,a,!1),l=(a&e.childLanes)!==0,Je||l){if(i=He,i!==null&&(S=NE(i,a),S!==0&&S!==u.retryLane))throw u.retryLane=S,sn(e,S),mt(i,e,S),js;Gr(),t=HA(e,t,a)}else e=u.treeContext,be=Vt(S.nextSibling),nt=t,Oe=!0,Ma=null,kt=!1,e!==null&&mS(t,e),t=gr(t,i),t.flags|=4096;return t}return e=oa(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ir(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function _s(e,t,a,i,l){return Sn(t),a=ys(e,t,a,i,void 0,l),i=Ms(),e!==null&&!Je?(Ds(e,t,l),Ea(e,t,l)):(Oe&&i&&ss(t),t.flags|=1,ot(e,t,a,l),t.child)}function bA(e,t,a,i,l,u){return Sn(t),t.updateQueue=null,a=FS(t,i,a,l),US(e),i=Ms(),e!==null&&!Je?(Ds(e,t,u),Ea(e,t,u)):(Oe&&i&&ss(t),t.flags|=1,ot(e,t,a,u),t.child)}function GA(e,t,a,i,l){if(Sn(t),t.stateNode===null){var u=Vn,S=a.contextType;typeof S=="object"&&S!==null&&(u=it(S)),u=new a(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ws,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},ms(t),S=a.contextType,u.context=typeof S=="object"&&S!==null?it(S):Vn,u.state=t.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ys(t,a,S,i),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(S=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),S!==u.state&&Ws.enqueueReplaceState(u,u.state,null),ji(t,i,u,l),zi(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var T=t.memoizedProps,C=Rn(a,T);u.props=C;var D=u.context,U=a.contextType;S=Vn,typeof U=="object"&&U!==null&&(S=it(U));var w=a.getDerivedStateFromProps;U=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function",T=t.pendingProps!==T,U||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(T||D!==S)&&CA(t,u,i,S),Ba=!1;var P=t.memoizedState;u.state=P,ji(t,i,u,l),zi(),D=t.memoizedState,T||P!==D||Ba?(typeof w=="function"&&(Ys(t,a,w,i),D=t.memoizedState),(C=Ba||OA(t,a,C,i,P,D,S))?(U||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=D),u.props=i,u.state=D,u.context=S,i=C):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,Os(e,t),S=t.memoizedProps,U=Rn(a,S),u.props=U,w=t.pendingProps,P=u.context,D=a.contextType,C=Vn,typeof D=="object"&&D!==null&&(C=it(D)),T=a.getDerivedStateFromProps,(D=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(S!==w||P!==C)&&CA(t,u,i,C),Ba=!1,P=t.memoizedState,u.state=P,ji(t,i,u,l),zi();var v=t.memoizedState;S!==w||P!==v||Ba||e!==null&&e.dependencies!==null&&rr(e.dependencies)?(typeof T=="function"&&(Ys(t,a,T,i),v=t.memoizedState),(U=Ba||OA(t,a,U,i,P,v,C)||e!==null&&e.dependencies!==null&&rr(e.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,v,C),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,v,C)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||S===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=v),u.props=i,u.state=v,u.context=C,i=U):(typeof u.componentDidUpdate!="function"||S===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,Ir(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=fn(t,e.child,null,l),t.child=fn(t,null,a,l)):ot(e,t,a,l),t.memoizedState=u.state,e=t.child):e=Ea(e,t,l),e}function UA(e,t,a,i){return cn(),t.flags|=256,ot(e,t,a,i),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zs(e){return{baseLanes:e,cachePool:IS()}}function Xs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Mt),e}function FA(e,t,a){var i=t.pendingProps,l=!1,u=(t.flags&128)!==0,S;if((S=u)||(S=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),S&&(l=!0,t.flags&=-129),S=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(l?ba(t):Ga(),(e=be)?(e=zd(e,kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Xt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=fS(e),a.return=t,t.child=a,nt=t,be=null)):e=null,e===null)throw Da(t);return vu(e)?t.lanes=32:t.lanes=536870912,null}var T=i.children;return i=i.fallback,l?(Ga(),l=t.mode,T=Lr({mode:"hidden",children:T},l),i=un(i,l,a,null),T.return=t,i.return=t,T.sibling=i,t.child=T,i=t.child,i.memoizedState=Zs(a),i.childLanes=Xs(e,S,a),t.memoizedState=Js,qi(null,i)):(ba(t),qs(t,T))}var C=e.memoizedState;if(C!==null&&(T=C.dehydrated,T!==null)){if(u)t.flags&256?(ba(t),t.flags&=-257,t=Qs(e,t,a)):t.memoizedState!==null?(Ga(),t.child=e.child,t.flags|=128,t=null):(Ga(),T=i.fallback,l=t.mode,i=Lr({mode:"visible",children:i.children},l),T=un(T,l,a,null),T.flags|=2,i.return=t,T.return=t,i.sibling=T,t.child=i,fn(t,e.child,null,a),i=t.child,i.memoizedState=Zs(a),i.childLanes=Xs(e,S,a),t.memoizedState=Js,t=qi(null,i));else if(ba(t),vu(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var D=S.dgst;S=D,i=Error(s(419)),i.stack="",i.digest=S,wi({value:i,source:null,stack:null}),t=Qs(e,t,a)}else if(Je||Wn(e,t,a,!1),S=(a&e.childLanes)!==0,Je||S){if(S=He,S!==null&&(i=NE(S,a),i!==0&&i!==C.retryLane))throw C.retryLane=i,sn(e,i),mt(S,e,i),js;Bu(T)||Gr(),t=Qs(e,t,a)}else Bu(T)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,be=Vt(T.nextSibling),nt=t,Oe=!0,Ma=null,kt=!1,e!==null&&mS(t,e),t=qs(t,i.children),t.flags|=4096);return t}return l?(Ga(),T=i.fallback,l=t.mode,C=e.child,D=C.sibling,i=oa(C,{mode:"hidden",children:i.children}),i.subtreeFlags=C.subtreeFlags&65011712,D!==null?T=oa(D,T):(T=un(T,l,a,null),T.flags|=2),T.return=t,i.return=t,i.sibling=T,t.child=i,qi(null,i),i=t.child,T=e.child.memoizedState,T===null?T=Zs(a):(l=T.cachePool,l!==null?(C=je._currentValue,l=l.parent!==C?{parent:C,pool:C}:l):l=IS(),T={baseLanes:T.baseLanes|a,cachePool:l}),i.memoizedState=T,i.childLanes=Xs(e,S,a),t.memoizedState=Js,qi(e.child,i)):(ba(t),a=e.child,e=a.sibling,a=oa(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(S=t.deletions,S===null?(t.deletions=[e],t.flags|=16):S.push(e)),t.child=a,t.memoizedState=null,a)}function qs(e,t){return t=Lr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Lr(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function Qs(e,t,a){return fn(t,e.child,null,a),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kA(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),As(e.return,t,a)}function $s(e,t,a,i,l,u){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:u}:(S.isBackwards=t,S.rendering=null,S.renderingStartTime=0,S.last=i,S.tail=a,S.tailMode=l,S.treeForkCount=u)}function wA(e,t,a){var i=t.pendingProps,l=i.revealOrder,u=i.tail;i=i.children;var S=Ye.current,T=(S&2)!==0;if(T?(S=S&1|2,t.flags|=128):S&=1,W(Ye,S),ot(e,t,i,a),i=Oe?ki:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kA(e,a,t);else if(e.tag===19)kA(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&dr(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),$s(t,!1,l,a,u,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&dr(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}$s(t,!0,a,null,u,i);break;case"together":$s(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Wn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=oa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=oa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function eu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rr(e)))}function eO(e,t,a){switch(t.tag){case 3:Et(t,t.stateNode.containerInfo),Pa(t,je,e.memoizedState.cache),cn();break;case 27:case 5:Ni(t);break;case 4:Et(t,t.stateNode.containerInfo);break;case 10:Pa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Is(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ba(t),t.flags|=128,null):(a&t.child.childLanes)!==0?FA(e,t,a):(ba(t),e=Ea(e,t,a),e!==null?e.sibling:null);ba(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Wn(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return wA(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Ye,Ye.current),i)break;return null;case 22:return t.lanes=0,BA(e,t,a,t.pendingProps);case 24:Pa(t,je,e.memoizedState.cache)}return Ea(e,t,a)}function VA(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!eu(e,a)&&(t.flags&128)===0)return Je=!1,eO(e,t,a);Je=(e.flags&131072)!==0}else Je=!1,Oe&&(t.flags&1048576)!==0&&RS(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=dn(t.elementType),t.type=e,typeof e=="function")os(e)?(i=Rn(e,i),t.tag=1,t=GA(null,t,e,i,a)):(t.tag=0,t=_s(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===z){t.tag=11,t=MA(null,t,e,i,a);break e}else if(l===Q){t.tag=14,t=DA(null,t,e,i,a);break e}}throw t=re(e)||e,Error(s(306,t,""))}}return t;case 0:return _s(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=Rn(i,t.pendingProps),GA(e,t,i,l,a);case 3:e:{if(Et(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var u=t.memoizedState;l=u.element,Os(e,t),ji(t,i,null,a);var S=t.memoizedState;if(i=S.cache,Pa(t,je,i),i!==u.cache&&ds(t,[je],a,!0),zi(),i=S.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:S.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=UA(e,t,i,a);break e}else if(i!==l){l=Gt(Error(s(424)),t),wi(l),t=UA(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(be=Vt(e.firstChild),nt=t,Oe=!0,Ma=null,kt=!0,a=BS(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cn(),i===l){t=Ea(e,t,a);break e}ot(e,t,i,a)}t=t.child}return t;case 26:return Ir(e,t),e===null?(a=qd(t.type,null,t.pendingProps,null))?t.memoizedState=a:Oe||(a=t.type,e=t.pendingProps,i=Kr(Ae.current).createElement(a),i[at]=t,i[At]=e,rt(i,a,e),et(i),t.stateNode=i):t.memoizedState=qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ni(t),e===null&&Oe&&(i=t.stateNode=Jd(t.type,t.pendingProps,Ae.current),nt=t,kt=!0,l=be,Ya(t.type)?(Hu=l,be=Vt(i.firstChild)):be=l),ot(e,t,t.pendingProps.children,a),Ir(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((l=i=be)&&(i=PO(i,t.type,t.pendingProps,kt),i!==null?(t.stateNode=i,nt=t,be=Vt(i.firstChild),kt=!1,l=!0):l=!1),l||Da(t)),Ni(t),l=t.type,u=t.pendingProps,S=e!==null?e.memoizedProps:null,i=u.children,Mu(l,u)?i=null:S!==null&&Mu(l,S)&&(t.flags|=32),t.memoizedState!==null&&(l=ys(e,t,zm,null,null,a),So._currentValue=l),Ir(e,t),ot(e,t,i,a),t.child;case 6:return e===null&&Oe&&((e=a=be)&&(a=BO(a,t.pendingProps,kt),a!==null?(t.stateNode=a,nt=t,be=null,e=!0):e=!1),e||Da(t)),null;case 13:return FA(e,t,a);case 4:return Et(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=fn(t,null,i,a):ot(e,t,i,a),t.child;case 11:return MA(e,t,t.type,t.pendingProps,a);case 7:return ot(e,t,t.pendingProps,a),t.child;case 8:return ot(e,t,t.pendingProps.children,a),t.child;case 12:return ot(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Pa(t,t.type,i.value),ot(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Sn(t),l=it(l),i=i(l),t.flags|=1,ot(e,t,i,a),t.child;case 14:return DA(e,t,t.type,t.pendingProps,a);case 15:return PA(e,t,t.type,t.pendingProps,a);case 19:return wA(e,t,a);case 31:return $m(e,t,a);case 22:return BA(e,t,a,t.pendingProps);case 24:return Sn(t),i=it(je),e===null?(l=Ts(),l===null&&(l=He,u=hs(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),t.memoizedState={parent:i,cache:l},ms(t),Pa(t,je,l)):((e.lanes&a)!==0&&(Os(e,t),ji(t,null,null,a),zi()),l=e.memoizedState,u=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Pa(t,je,i)):(i=u.cache,Pa(t,je,i),i!==l.cache&&ds(t,[je],a,!0))),ot(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Sa(e){e.flags|=4}function tu(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Ad())e.flags|=8192;else throw hn=cr,Rs}else e.flags&=-16777217}function xA(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ah(t))if(Ad())e.flags|=8192;else throw hn=cr,Rs}function yr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?OE():536870912,e.lanes|=t,ai|=t)}function Qi(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function tO(e,t,a){var i=t.pendingProps;switch(us(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return Ge(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),sa(je),Ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yn(t)?Sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Es())),Ge(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(Sa(t),u!==null?(Ge(t),xA(t,u)):(Ge(t),tu(t,l,null,i,a))):u?u!==e.memoizedState?(Sa(t),Ge(t),xA(t,u)):(Ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Sa(t),Ge(t),tu(t,l,e,i,a)),null;case 27:if(ko(t),a=Ae.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sa(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ge(t),null}e=q.current,Yn(t)?OS(t):(e=Jd(l,i,a),t.stateNode=e,Sa(t))}return Ge(t),null;case 5:if(ko(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sa(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ge(t),null}if(u=q.current,Yn(t))OS(t);else{var S=Kr(Ae.current);switch(u){case 1:u=S.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=S.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=S.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=S.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=S.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?S.createElement("select",{is:i.is}):S.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?S.createElement(l,{is:i.is}):S.createElement(l)}}u[at]=t,u[At]=i;e:for(S=t.child;S!==null;){if(S.tag===5||S.tag===6)u.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===t)break e;for(;S.sibling===null;){if(S.return===null||S.return===t)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}t.stateNode=u;e:switch(rt(u,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Sa(t)}}return Ge(t),tu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Sa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=Ae.current,Yn(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=nt,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Fd(e.nodeValue,a)),e||Da(t,!0)}else e=Kr(e).createTextNode(i),e[at]=t,t.stateNode=e}return Ge(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Yn(t),a!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[at]=t}else cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),e=!1}else a=Es(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Lt(t),t):(Lt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ge(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Yn(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[at]=t}else cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),l=!1}else l=Es(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Lt(t),t):(Lt(t),null)}return Lt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),yr(t,t.updateQueue),Ge(t),null);case 4:return Ke(),e===null&&Nu(t.stateNode.containerInfo),Ge(t),null;case 10:return sa(t.type),Ge(t),null;case 19:if(V(Ye),i=t.memoizedState,i===null)return Ge(t),null;if(l=(t.flags&128)!==0,u=i.rendering,u===null)if(l)Qi(i,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=dr(e),u!==null){for(t.flags|=128,Qi(i,!1),e=u.updateQueue,t.updateQueue=e,yr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)hS(a,e),a=a.sibling;return W(Ye,Ye.current&1|2),Oe&&ra(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ot()>vr&&(t.flags|=128,l=!0,Qi(i,!1),t.lanes=4194304)}else{if(!l)if(e=dr(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,yr(t,e),Qi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Oe)return Ge(t),null}else 2*Ot()-i.renderingStartTime>vr&&a!==536870912&&(t.flags|=128,l=!0,Qi(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ot(),e.sibling=null,a=Ye.current,W(Ye,l?a&1|2:a&1),Oe&&ra(t,i.treeForkCount),e):(Ge(t),null);case 22:case 23:return Lt(t),gs(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),a=t.updateQueue,a!==null&&yr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&V(An),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),sa(je),Ge(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function aO(e,t){switch(us(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sa(je),Ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ko(t),null;case 31:if(t.memoizedState!==null){if(Lt(t),t.alternate===null)throw Error(s(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Ye),null;case 4:return Ke(),null;case 10:return sa(t.type),null;case 22:case 23:return Lt(t),gs(),e!==null&&V(An),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sa(je),null;case 25:return null;default:return null}}function KA(e,t){switch(us(t),t.tag){case 3:sa(je),Ke();break;case 26:case 27:case 5:ko(t);break;case 4:Ke();break;case 31:t.memoizedState!==null&&Lt(t);break;case 13:Lt(t);break;case 19:V(Ye);break;case 10:sa(t.type);break;case 22:case 23:Lt(t),gs(),e!==null&&V(An);break;case 24:sa(je)}}function $i(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var u=a.create,S=a.inst;i=u(),S.destroy=i}a=a.next}while(a!==l)}}catch(T){Le(t,t.return,T)}}function Ua(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var u=l.next;i=u;do{if((i.tag&e)===e){var S=i.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,l=t;var C=a,D=T;try{D()}catch(U){Le(l,C,U)}}}i=i.next}while(i!==u)}}catch(U){Le(t,t.return,U)}}function YA(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{HS(t,a)}catch(i){Le(e,e.return,i)}}}function WA(e,t,a){a.props=Rn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Le(e,t,i)}}function eo(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){Le(e,t,l)}}function Qt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){Le(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Le(e,t,l)}else a.current=null}function zA(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){Le(e,e.return,l)}}function au(e,t,a){try{var i=e.stateNode;gO(i,e.type,a,t),i[At]=t}catch(l){Le(e,e.return,l)}}function jA(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=na));else if(i!==4&&(i===27&&Ya(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(iu(e,t,a),e=e.sibling;e!==null;)iu(e,t,a),e=e.sibling}function Mr(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Mr(e,t,a),e=e.sibling;e!==null;)Mr(e,t,a),e=e.sibling}function _A(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);rt(t,i,a),t[at]=e,t[At]=a}catch(u){Le(e,e.return,u)}}var Aa=!1,Ze=!1,ou=!1,JA=typeof WeakSet=="function"?WeakSet:Set,tt=null;function nO(e,t){if(e=e.containerInfo,Lu=Zr,e=rS(e),Ql(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var S=0,T=-1,C=-1,D=0,U=0,w=e,P=null;t:for(;;){for(var v;w!==a||l!==0&&w.nodeType!==3||(T=S+l),w!==u||i!==0&&w.nodeType!==3||(C=S+i),w.nodeType===3&&(S+=w.nodeValue.length),(v=w.firstChild)!==null;)P=w,w=v;for(;;){if(w===e)break t;if(P===a&&++D===l&&(T=S),P===u&&++U===i&&(C=S),(v=w.nextSibling)!==null)break;w=P,P=w.parentNode}w=v}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(yu={focusedElem:e,selectionRange:a},Zr=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,l=u.memoizedProps,u=u.memoizedState,i=a.stateNode;try{var J=Rn(a.type,l);e=i.getSnapshotBeforeUpdate(J,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(te){Le(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Pu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function ZA(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),i&4&&$i(5,a);break;case 1:if(ha(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(S){Le(a,a.return,S)}else{var l=Rn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Le(a,a.return,S)}}i&64&&YA(a),i&512&&eo(a,a.return);break;case 3:if(ha(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{HS(e,t)}catch(S){Le(a,a.return,S)}}break;case 27:t===null&&i&4&&_A(a);case 26:case 5:ha(e,a),t===null&&i&4&&zA(a),i&512&&eo(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),i&4&&QA(e,a);break;case 13:ha(e,a),i&4&&$A(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=SO.bind(null,a),vO(e,a))));break;case 22:if(i=a.memoizedState!==null||Aa,!i){t=t!==null&&t.memoizedState!==null||Ze,l=Aa;var u=Ze;Aa=i,(Ze=t)&&!u?fa(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),Aa=l,Ze=u}break;case 30:break;default:ha(e,a)}}function XA(e){var t=e.alternate;t!==null&&(e.alternate=null,XA(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,ht=!1;function da(e,t,a){for(a=a.child;a!==null;)qA(e,t,a),a=a.sibling}function qA(e,t,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(gi,a)}catch{}switch(a.tag){case 26:Ze||Qt(a,t),da(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||Qt(a,t);var i=Fe,l=ht;Ya(a.type)&&(Fe=a.stateNode,ht=!1),da(e,t,a),uo(a.stateNode),Fe=i,ht=l;break;case 5:Ze||Qt(a,t);case 6:if(i=Fe,l=ht,Fe=null,da(e,t,a),Fe=i,ht=l,Fe!==null)if(ht)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(a.stateNode)}catch(u){Le(a,t,u)}else try{Fe.removeChild(a.stateNode)}catch(u){Le(a,t,u)}break;case 18:Fe!==null&&(ht?(e=Fe,Yd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ci(e)):Yd(Fe,a.stateNode));break;case 4:i=Fe,l=ht,Fe=a.stateNode.containerInfo,ht=!0,da(e,t,a),Fe=i,ht=l;break;case 0:case 11:case 14:case 15:Ua(2,a,t),Ze||Ua(4,a,t),da(e,t,a);break;case 1:Ze||(Qt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&WA(a,t,i)),da(e,t,a);break;case 21:da(e,t,a);break;case 22:Ze=(i=Ze)||a.memoizedState!==null,da(e,t,a),Ze=i;break;default:da(e,t,a)}}function QA(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ci(e)}catch(a){Le(t,t.return,a)}}}function $A(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ci(e)}catch(a){Le(t,t.return,a)}}function iO(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new JA),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new JA),t;default:throw Error(s(435,e.tag))}}function Dr(e,t){var a=iO(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=AO.bind(null,e,i);i.then(l,l)}})}function ft(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],u=e,S=t,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(Ya(T.type)){Fe=T.stateNode,ht=!1;break e}break;case 5:Fe=T.stateNode,ht=!1;break e;case 3:case 4:Fe=T.stateNode.containerInfo,ht=!0;break e}T=T.return}if(Fe===null)throw Error(s(160));qA(u,S,l),Fe=null,ht=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ed(t,e),t=t.sibling}var zt=null;function ed(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(t,e),Tt(e),i&4&&(Ua(3,e,e.return),$i(3,e),Ua(5,e,e.return));break;case 1:ft(t,e),Tt(e),i&512&&(Ze||a===null||Qt(a,a.return)),i&64&&Aa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=zt;if(ft(t,e),Tt(e),i&512&&(Ze||a===null||Qt(a,a.return)),i&4){var u=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":u=l.getElementsByTagName("title")[0],(!u||u[yi]||u[at]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(i),l.head.insertBefore(u,l.querySelector("head > title"))),rt(u,i,a),u[at]=e,et(u),i=u;break e;case"link":var S=eh("link","href",l).get(i+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(u=S[T],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break t}}u=l.createElement(i),rt(u,i,a),l.head.appendChild(u);break;case"meta":if(S=eh("meta","content",l).get(i+(a.content||""))){for(T=0;T<S.length;T++)if(u=S[T],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break t}}u=l.createElement(i),rt(u,i,a),l.head.appendChild(u);break;default:throw Error(s(468,i))}u[at]=e,et(u),i=u}e.stateNode=i}else th(l,e.type,e.stateNode);else e.stateNode=$d(l,i,e.memoizedProps);else u!==i?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,i===null?th(l,e.type,e.stateNode):$d(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&au(e,e.memoizedProps,a.memoizedProps)}break;case 27:ft(t,e),Tt(e),i&512&&(Ze||a===null||Qt(a,a.return)),a!==null&&i&4&&au(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ft(t,e),Tt(e),i&512&&(Ze||a===null||Qt(a,a.return)),e.flags&32){l=e.stateNode;try{Hn(l,"")}catch(J){Le(e,e.return,J)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,au(e,l,a!==null?a.memoizedProps:l)),i&1024&&(ou=!0);break;case 6:if(ft(t,e),Tt(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(J){Le(e,e.return,J)}}break;case 3:if(zr=null,l=zt,zt=Yr(t.containerInfo),ft(t,e),zt=l,Tt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ci(t.containerInfo)}catch(J){Le(e,e.return,J)}ou&&(ou=!1,td(e));break;case 4:i=zt,zt=Yr(e.stateNode.containerInfo),ft(t,e),Tt(e),zt=i;break;case 12:ft(t,e),Tt(e);break;case 31:ft(t,e),Tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Dr(e,i)));break;case 13:ft(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Br=Ot()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Dr(e,i)));break;case 22:l=e.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,D=Aa,U=Ze;if(Aa=D||l,Ze=U||C,ft(t,e),Ze=U,Aa=D,Tt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||C||Aa||Ze||mn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){C=a=t;try{if(u=C.stateNode,l)S=u.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=C.stateNode;var w=C.memoizedProps.style,P=w!=null&&w.hasOwnProperty("display")?w.display:null;T.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(J){Le(C,C.return,J)}}}else if(t.tag===6){if(a===null){C=t;try{C.stateNode.nodeValue=l?"":C.memoizedProps}catch(J){Le(C,C.return,J)}}}else if(t.tag===18){if(a===null){C=t;try{var v=C.stateNode;l?Wd(v,!0):Wd(C.stateNode,!1)}catch(J){Le(C,C.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Dr(e,a))));break;case 19:ft(t,e),Tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Dr(e,i)));break;case 30:break;case 21:break;default:ft(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(jA(i)){a=i;break}i=i.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,u=nu(e);Mr(e,u,l);break;case 5:var S=a.stateNode;a.flags&32&&(Hn(S,""),a.flags&=-33);var T=nu(e);Mr(e,T,S);break;case 3:case 4:var C=a.stateNode.containerInfo,D=nu(e);iu(e,D,C);break;default:throw Error(s(161))}}catch(U){Le(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function td(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;td(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ha(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ZA(e,t.alternate,t),t=t.sibling}function mn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ua(4,t,t.return),mn(t);break;case 1:Qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&WA(t,t.return,a),mn(t);break;case 27:uo(t.stateNode);case 26:case 5:Qt(t,t.return),mn(t);break;case 22:t.memoizedState===null&&mn(t);break;case 30:mn(t);break;default:mn(t)}e=e.sibling}}function fa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,u=t,S=u.flags;switch(u.tag){case 0:case 11:case 15:fa(l,u,a),$i(4,u);break;case 1:if(fa(l,u,a),i=u,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){Le(i,i.return,D)}if(i=u,l=i.updateQueue,l!==null){var T=i.stateNode;try{var C=l.shared.hiddenCallbacks;if(C!==null)for(l.shared.hiddenCallbacks=null,l=0;l<C.length;l++)vS(C[l],T)}catch(D){Le(i,i.return,D)}}a&&S&64&&YA(u),eo(u,u.return);break;case 27:_A(u);case 26:case 5:fa(l,u,a),a&&i===null&&S&4&&zA(u),eo(u,u.return);break;case 12:fa(l,u,a);break;case 31:fa(l,u,a),a&&S&4&&QA(l,u);break;case 13:fa(l,u,a),a&&S&4&&$A(l,u);break;case 22:u.memoizedState===null&&fa(l,u,a),eo(u,u.return);break;case 30:break;default:fa(l,u,a)}t=t.sibling}}function ru(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vi(a))}function lu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e))}function jt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ad(e,t,a,i),t=t.sibling}function ad(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:jt(e,t,a,i),l&2048&&$i(9,t);break;case 1:jt(e,t,a,i);break;case 3:jt(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e)));break;case 12:if(l&2048){jt(e,t,a,i),e=t.stateNode;try{var u=t.memoizedProps,S=u.id,T=u.onPostCommit;typeof T=="function"&&T(S,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Le(t,t.return,C)}}else jt(e,t,a,i);break;case 31:jt(e,t,a,i);break;case 13:jt(e,t,a,i);break;case 23:break;case 22:u=t.stateNode,S=t.alternate,t.memoizedState!==null?u._visibility&2?jt(e,t,a,i):to(e,t):u._visibility&2?jt(e,t,a,i):(u._visibility|=2,$n(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&ru(S,t);break;case 24:jt(e,t,a,i),l&2048&&lu(t.alternate,t);break;default:jt(e,t,a,i)}}function $n(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,S=t,T=a,C=i,D=S.flags;switch(S.tag){case 0:case 11:case 15:$n(u,S,T,C,l),$i(8,S);break;case 23:break;case 22:var U=S.stateNode;S.memoizedState!==null?U._visibility&2?$n(u,S,T,C,l):to(u,S):(U._visibility|=2,$n(u,S,T,C,l)),l&&D&2048&&ru(S.alternate,S);break;case 24:$n(u,S,T,C,l),l&&D&2048&&lu(S.alternate,S);break;default:$n(u,S,T,C,l)}t=t.sibling}}function to(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:to(a,i),l&2048&&ru(i.alternate,i);break;case 24:to(a,i),l&2048&&lu(i.alternate,i);break;default:to(a,i)}t=t.sibling}}var ao=8192;function ei(e,t,a){if(e.subtreeFlags&ao)for(e=e.child;e!==null;)nd(e,t,a),e=e.sibling}function nd(e,t,a){switch(e.tag){case 26:ei(e,t,a),e.flags&ao&&e.memoizedState!==null&&WO(a,zt,e.memoizedState,e.memoizedProps);break;case 5:ei(e,t,a);break;case 3:case 4:var i=zt;zt=Yr(e.stateNode.containerInfo),ei(e,t,a),zt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ao,ao=16777216,ei(e,t,a),ao=i):ei(e,t,a));break;default:ei(e,t,a)}}function id(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function no(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];tt=i,rd(i,e)}id(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)od(e),e=e.sibling}function od(e){switch(e.tag){case 0:case 11:case 15:no(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:no(e);break;case 12:no(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pr(e)):no(e);break;default:no(e)}}function Pr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];tt=i,rd(i,e)}id(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ua(8,t,t.return),Pr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Pr(t));break;default:Pr(t)}e=e.sibling}}function rd(e,t){for(;tt!==null;){var a=tt;switch(a.tag){case 0:case 11:case 15:Ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Vi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,tt=i;else e:for(a=e;tt!==null;){i=tt;var l=i.sibling,u=i.return;if(XA(i),i===a){tt=null;break e}if(l!==null){l.return=u,tt=l;break e}tt=u}}}var oO={getCacheForType:function(e){var t=it(je),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return it(je).controller.signal}},rO=typeof WeakMap=="function"?WeakMap:Map,Ne=0,He=null,de=null,Re=0,Ie=0,yt=null,Fa=!1,ti=!1,su=!1,Ta=0,Ve=0,ka=0,On=0,uu=0,Mt=0,ai=0,io=null,Rt=null,cu=!1,Br=0,ld=0,vr=1/0,Hr=null,wa=null,$e=0,Va=null,ni=null,Ra=0,Eu=0,Su=null,sd=null,oo=0,Au=null;function Dt(){return(Ne&2)!==0&&Re!==0?Re&-Re:G.T!==null?mu():gE()}function ud(){if(Mt===0)if((Re&536870912)===0||Oe){var e=xo;xo<<=1,(xo&3932160)===0&&(xo=262144),Mt=e}else Mt=536870912;return e=It.current,e!==null&&(e.flags|=32),Mt}function mt(e,t,a){(e===He&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(ii(e,0),xa(e,Re,Mt,!1)),Li(e,a),((Ne&2)===0||e!==He)&&(e===He&&((Ne&2)===0&&(On|=a),Ve===4&&xa(e,Re,Mt,!1)),$t(e))}function cd(e,t,a){if((Ne&6)!==0)throw Error(s(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ii(e,t),l=i?uO(e,t):hu(e,t,!0),u=i;do{if(l===0){ti&&!i&&xa(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!lO(a)){l=hu(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){t=S;e:{var T=e;l=io;var C=T.current.memoizedState.isDehydrated;if(C&&(ii(T,S).flags|=256),S=hu(T,S,!1),S!==2){if(su&&!C){T.errorRecoveryDisabledLanes|=u,On|=u,l=4;break e}u=Rt,Rt=l,u!==null&&(Rt===null?Rt=u:Rt.push.apply(Rt,u))}l=S}if(u=!1,l!==2)continue}}if(l===1){ii(e,0),xa(e,t,0,!0);break}e:{switch(i=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:xa(i,t,Mt,!Fa);break e;case 2:Rt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Br+300-Ot(),10<l)){if(xa(i,t,Mt,!Fa),Yo(i,0,!0)!==0)break e;Ra=t,i.timeoutHandle=xd(Ed.bind(null,i,a,Rt,Hr,cu,t,Mt,On,ai,Fa,u,"Throttled",-0,0),l);break e}Ed(i,a,Rt,Hr,cu,t,Mt,On,ai,Fa,u,null,-0,0)}}break}while(!0);$t(e)}function Ed(e,t,a,i,l,u,S,T,C,D,U,w,P,v){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},nd(t,u,w);var J=(u&62914560)===u?Br-Ot():(u&4194048)===u?ld-Ot():0;if(J=zO(w,J),J!==null){Ra=u,e.cancelPendingCommit=J(md.bind(null,e,t,u,a,i,l,S,T,C,U,w,null,P,v)),xa(e,u,S,!D);return}}md(e,t,u,a,i,l,S,T,C)}function lO(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],u=l.getSnapshot;l=l.value;try{if(!Nt(u(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xa(e,t,a,i){t&=~uu,t&=~On,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var u=31-pt(l),S=1<<u;i[u]=-1,l&=~S}a!==0&&CE(e,a,t)}function br(){return(Ne&6)===0?(ro(0),!1):!0}function du(){if(de!==null){if(Ie===0)var e=de.return;else e=de,la=En=null,Ps(e),Jn=null,Ki=0,e=de;for(;e!==null;)KA(e.alternate,e),e=e.return;de=null}}function ii(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yO(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ra=0,du(),He=e,de=a=oa(e.current,null),Re=t,Ie=0,yt=null,Fa=!1,ti=Ii(e,t),su=!1,ai=Mt=uu=On=ka=Ve=0,Rt=io=null,cu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-pt(i),u=1<<l;t|=e[l],i&=~u}return Ta=t,tr(),a}function Sd(e,t){ue=null,G.H=Xi,t===_n||t===ur?(t=MS(),Ie=3):t===Rs?(t=MS(),Ie=4):Ie=t===js?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,de===null&&(Ve=1,Nr(e,Gt(t,e.current)))}function Ad(){var e=It.current;return e===null?!0:(Re&4194048)===Re?wt===null:(Re&62914560)===Re||(Re&536870912)!==0?e===wt:!1}function dd(){var e=G.H;return G.H=Xi,e===null?Xi:e}function hd(){var e=G.A;return G.A=oO,e}function Gr(){Ve=4,Fa||(Re&4194048)!==Re&&It.current!==null||(ti=!0),(ka&134217727)===0&&(On&134217727)===0||He===null||xa(He,Re,Mt,!1)}function hu(e,t,a){var i=Ne;Ne|=2;var l=dd(),u=hd();(He!==e||Re!==t)&&(Hr=null,ii(e,t)),t=!1;var S=Ve;e:do try{if(Ie!==0&&de!==null){var T=de,C=yt;switch(Ie){case 8:du(),S=6;break e;case 3:case 2:case 9:case 6:It.current===null&&(t=!0);var D=Ie;if(Ie=0,yt=null,oi(e,T,C,D),a&&ti){S=0;break e}break;default:D=Ie,Ie=0,yt=null,oi(e,T,C,D)}}sO(),S=Ve;break}catch(U){Sd(e,U)}while(!0);return t&&e.shellSuspendCounter++,la=En=null,Ne=i,G.H=l,G.A=u,de===null&&(He=null,Re=0,tr()),S}function sO(){for(;de!==null;)fd(de)}function uO(e,t){var a=Ne;Ne|=2;var i=dd(),l=hd();He!==e||Re!==t?(Hr=null,vr=Ot()+500,ii(e,t)):ti=Ii(e,t);e:do try{if(Ie!==0&&de!==null){t=de;var u=yt;t:switch(Ie){case 1:Ie=0,yt=null,oi(e,t,u,1);break;case 2:case 9:if(LS(u)){Ie=0,yt=null,Td(t);break}t=function(){Ie!==2&&Ie!==9||He!==e||(Ie=7),$t(e)},u.then(t,t);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:LS(u)?(Ie=0,yt=null,Td(t)):(Ie=0,yt=null,oi(e,t,u,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var T=de;if(S?ah(S):T.stateNode.complete){Ie=0,yt=null;var C=T.sibling;if(C!==null)de=C;else{var D=T.return;D!==null?(de=D,Ur(D)):de=null}break t}}Ie=0,yt=null,oi(e,t,u,5);break;case 6:Ie=0,yt=null,oi(e,t,u,6);break;case 8:du(),Ve=6;break e;default:throw Error(s(462))}}cO();break}catch(U){Sd(e,U)}while(!0);return la=En=null,G.H=i,G.A=l,Ne=a,de!==null?0:(He=null,Re=0,tr(),Ve)}function cO(){for(;de!==null&&!HR();)fd(de)}function fd(e){var t=VA(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,t===null?Ur(e):de=t}function Td(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=bA(a,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=bA(a,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:Ps(t);default:KA(a,t),t=de=hS(t,Ta),t=VA(a,t,Ta)}e.memoizedProps=e.pendingProps,t===null?Ur(e):de=t}function oi(e,t,a,i){la=En=null,Ps(t),Jn=null,Ki=0;var l=t.return;try{if(Qm(e,l,t,a,Re)){Ve=1,Nr(e,Gt(a,e.current)),de=null;return}}catch(u){if(l!==null)throw de=l,u;Ve=1,Nr(e,Gt(a,e.current)),de=null;return}t.flags&32768?(Oe||i===1?e=!0:ti||(Re&536870912)!==0?e=!1:(Fa=e=!0,(i===2||i===9||i===3||i===6)&&(i=It.current,i!==null&&i.tag===13&&(i.flags|=16384))),Rd(t,e)):Ur(t)}function Ur(e){var t=e;do{if((t.flags&32768)!==0){Rd(t,Fa);return}e=t.return;var a=tO(t.alternate,t,Ta);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Ve===0&&(Ve=5)}function Rd(e,t){do{var a=aO(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ve=6,de=null}function md(e,t,a,i,l,u,S,T,C){e.cancelPendingCommit=null;do Fr();while($e!==0);if((Ne&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=ns,YR(e,a,u,S,T,C),e===He&&(de=He=null,Re=0),ni=t,Va=e,Ra=a,Eu=u,Su=l,sd=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dO(wo,function(){return gd(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=G.T,G.T=null,l=K.p,K.p=2,S=Ne,Ne|=4;try{nO(e,t,a)}finally{Ne=S,K.p=l,G.T=i}}$e=1,Od(),Cd(),pd()}}function Od(){if($e===1){$e=0;var e=Va,t=ni,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var i=K.p;K.p=2;var l=Ne;Ne|=4;try{ed(t,e);var u=yu,S=rS(e.containerInfo),T=u.focusedElem,C=u.selectionRange;if(S!==T&&T&&T.ownerDocument&&oS(T.ownerDocument.documentElement,T)){if(C!==null&&Ql(T)){var D=C.start,U=C.end;if(U===void 0&&(U=D),"selectionStart"in T)T.selectionStart=D,T.selectionEnd=Math.min(U,T.value.length);else{var w=T.ownerDocument||document,P=w&&w.defaultView||window;if(P.getSelection){var v=P.getSelection(),J=T.textContent.length,te=Math.min(C.start,J),Be=C.end===void 0?te:Math.min(C.end,J);!v.extend&&te>Be&&(S=Be,Be=te,te=S);var L=iS(T,te),p=iS(T,Be);if(L&&p&&(v.rangeCount!==1||v.anchorNode!==L.node||v.anchorOffset!==L.offset||v.focusNode!==p.node||v.focusOffset!==p.offset)){var M=w.createRange();M.setStart(L.node,L.offset),v.removeAllRanges(),te>Be?(v.addRange(M),v.extend(p.node,p.offset)):(M.setEnd(p.node,p.offset),v.addRange(M))}}}}for(w=[],v=T;v=v.parentNode;)v.nodeType===1&&w.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<w.length;T++){var F=w[T];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}Zr=!!Lu,yu=Lu=null}finally{Ne=l,K.p=i,G.T=a}}e.current=t,$e=2}}function Cd(){if($e===2){$e=0;var e=Va,t=ni,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var i=K.p;K.p=2;var l=Ne;Ne|=4;try{ZA(e,t.alternate,t)}finally{Ne=l,K.p=i,G.T=a}}$e=3}}function pd(){if($e===4||$e===3){$e=0,bR();var e=Va,t=ni,a=Ra,i=sd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,ni=Va=null,Nd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(wa=null),Hl(a),t=t.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(gi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=G.T,l=K.p,K.p=2,G.T=null;try{for(var u=e.onRecoverableError,S=0;S<i.length;S++){var T=i[S];u(T.value,{componentStack:T.stack})}}finally{G.T=t,K.p=l}}(Ra&3)!==0&&Fr(),$t(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Au?oo++:(oo=0,Au=e):oo=0,ro(0)}}function Nd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vi(t)))}function Fr(){return Od(),Cd(),pd(),gd()}function gd(){if($e!==5)return!1;var e=Va,t=Eu;Eu=0;var a=Hl(Ra),i=G.T,l=K.p;try{K.p=32>a?32:a,G.T=null,a=Su,Su=null;var u=Va,S=Ra;if($e=0,ni=Va=null,Ra=0,(Ne&6)!==0)throw Error(s(331));var T=Ne;if(Ne|=4,od(u.current),ad(u,u.current,S,a),Ne=T,ro(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(gi,u)}catch{}return!0}finally{K.p=l,G.T=i,Nd(e,t)}}function Id(e,t,a){t=Gt(a,t),t=zs(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(Li(e,2),$t(e))}function Le(e,t,a){if(e.tag===3)Id(e,e,a);else for(;t!==null;){if(t.tag===3){Id(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wa===null||!wa.has(i))){e=Gt(a,e),a=LA(2),i=Ha(t,a,2),i!==null&&(yA(a,i,t,e),Li(i,2),$t(i));break}}t=t.return}}function fu(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new rO;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(su=!0,l.add(a),e=EO.bind(null,e,t,a),t.then(e,e))}function EO(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(Re&a)===a&&(Ve===4||Ve===3&&(Re&62914560)===Re&&300>Ot()-Br?(Ne&2)===0&&ii(e,0):uu|=a,ai===Re&&(ai=0)),$t(e)}function Ld(e,t){t===0&&(t=OE()),e=sn(e,t),e!==null&&(Li(e,t),$t(e))}function SO(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ld(e,a)}function AO(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Ld(e,a)}function dO(e,t){return Dl(e,t)}var kr=null,ri=null,Tu=!1,wr=!1,Ru=!1,Ka=0;function $t(e){e!==ri&&e.next===null&&(ri===null?kr=ri=e:ri=ri.next=e),wr=!0,Tu||(Tu=!0,fO())}function ro(e,t){if(!Ru&&wr){Ru=!0;do for(var a=!1,i=kr;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var u=0;else{var S=i.suspendedLanes,T=i.pingedLanes;u=(1<<31-pt(42|e)+1)-1,u&=l&~(S&~T),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Pd(i,u))}else u=Re,u=Yo(i,i===He?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Ii(i,u)||(a=!0,Pd(i,u));i=i.next}while(a);Ru=!1}}function hO(){yd()}function yd(){wr=Tu=!1;var e=0;Ka!==0&&LO()&&(e=Ka);for(var t=Ot(),a=null,i=kr;i!==null;){var l=i.next,u=Md(i,t);u===0?(i.next=null,a===null?kr=l:a.next=l,l===null&&(ri=a)):(a=i,(e!==0||(u&3)!==0)&&(wr=!0)),i=l}$e!==0&&$e!==5||ro(e),Ka!==0&&(Ka=0)}function Md(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var S=31-pt(u),T=1<<S,C=l[S];C===-1?((T&a)===0||(T&i)!==0)&&(l[S]=KR(T,t)):C<=t&&(e.expiredLanes|=T),u&=~T}if(t=He,a=Re,a=Yo(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Pl(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ii(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&Pl(i),Hl(a)){case 2:case 8:a=RE;break;case 32:a=wo;break;case 268435456:a=mE;break;default:a=wo}return i=Dd.bind(null,e),a=Dl(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&Pl(i),e.callbackPriority=2,e.callbackNode=null,2}function Dd(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fr()&&e.callbackNode!==a)return null;var i=Re;return i=Yo(e,e===He?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(cd(e,i,t),Md(e,Ot()),e.callbackNode!=null&&e.callbackNode===a?Dd.bind(null,e):null)}function Pd(e,t){if(Fr())return null;cd(e,t,!0)}function fO(){MO(function(){(Ne&6)!==0?Dl(TE,hO):yd()})}function mu(){if(Ka===0){var e=zn;e===0&&(e=Vo,Vo<<=1,(Vo&261888)===0&&(Vo=256)),Ka=e}return Ka}function Bd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_o(""+e)}function vd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function TO(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var u=Bd((l[At]||null).action),S=i.submitter;S&&(t=(t=S[At]||null)?Bd(t.formAction):S.getAttribute("formAction"),t!==null&&(u=t,S=null));var T=new qo("action","action",null,i,l);e.push({event:T,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ka!==0){var C=S?vd(l,S):new FormData(l);ws(a,{pending:!0,data:C,method:l.method,action:u},null,C)}}else typeof u=="function"&&(T.preventDefault(),C=S?vd(l,S):new FormData(l),ws(a,{pending:!0,data:C,method:l.method,action:u},u,C))},currentTarget:l}]})}}for(var Ou=0;Ou<as.length;Ou++){var Cu=as[Ou],RO=Cu.toLowerCase(),mO=Cu[0].toUpperCase()+Cu.slice(1);Wt(RO,"on"+mO)}Wt(uS,"onAnimationEnd"),Wt(cS,"onAnimationIteration"),Wt(ES,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(Gm,"onTransitionRun"),Wt(Um,"onTransitionStart"),Wt(Fm,"onTransitionCancel"),Wt(SS,"onTransitionEnd"),Bn("onMouseEnter",["mouseout","mouseover"]),Bn("onMouseLeave",["mouseout","mouseover"]),Bn("onPointerEnter",["pointerout","pointerover"]),Bn("onPointerLeave",["pointerout","pointerover"]),nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function Hd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var S=i.length-1;0<=S;S--){var T=i[S],C=T.instance,D=T.currentTarget;if(T=T.listener,C!==u&&l.isPropagationStopped())break e;u=T,l.currentTarget=D;try{u(l)}catch(U){er(U)}l.currentTarget=null,u=C}else for(S=0;S<i.length;S++){if(T=i[S],C=T.instance,D=T.currentTarget,T=T.listener,C!==u&&l.isPropagationStopped())break e;u=T,l.currentTarget=D;try{u(l)}catch(U){er(U)}l.currentTarget=null,u=C}}}}function he(e,t){var a=t[bl];a===void 0&&(a=t[bl]=new Set);var i=e+"__bubble";a.has(i)||(bd(t,e,2,!1),a.add(i))}function pu(e,t,a){var i=0;t&&(i|=4),bd(a,e,i,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function Nu(e){if(!e[Vr]){e[Vr]=!0,yE.forEach(function(a){a!=="selectionchange"&&(OO.has(a)||pu(a,!1,e),pu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,pu("selectionchange",!1,t))}}function bd(e,t,a,i){switch(uh(t)){case 2:var l=JO;break;case 8:l=ZO;break;default:l=ku}a=l.bind(null,t,a,e),l=void 0,!Yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function gu(e,t,a,i,l){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var S=i.tag;if(S===3||S===4){var T=i.stateNode.containerInfo;if(T===l)break;if(S===4)for(S=i.return;S!==null;){var C=S.tag;if((C===3||C===4)&&S.stateNode.containerInfo===l)return;S=S.return}for(;T!==null;){if(S=Mn(T),S===null)return;if(C=S.tag,C===5||C===6||C===26||C===27){i=u=S;continue e}T=T.parentNode}}i=i.return}wE(function(){var D=u,U=xl(a),w=[];e:{var P=AS.get(e);if(P!==void 0){var v=qo,J=e;switch(e){case"keypress":if(Zo(a)===0)break e;case"keydown":case"keyup":v=Am;break;case"focusin":J="focus",v=_l;break;case"focusout":J="blur",v=_l;break;case"beforeblur":case"afterblur":v=_l;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=KE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fm;break;case uS:case cS:case ES:v=im;break;case SS:v=Rm;break;case"scroll":case"scrollend":v=$R;break;case"wheel":v=Om;break;case"copy":case"cut":case"paste":v=rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=WE;break;case"toggle":case"beforetoggle":v=pm}var te=(t&4)!==0,Be=!te&&(e==="scroll"||e==="scrollend"),L=te?P!==null?P+"Capture":null:P;te=[];for(var p=D,M;p!==null;){var F=p;if(M=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||M===null||L===null||(F=Di(p,L),F!=null&&te.push(so(p,F,M))),Be)break;p=p.return}0<te.length&&(P=new v(P,J,null,a,U),w.push({event:P,listeners:te}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",P&&a!==Vl&&(J=a.relatedTarget||a.fromElement)&&(Mn(J)||J[yn]))break e;if((v||P)&&(P=U.window===U?U:(P=U.ownerDocument)?P.defaultView||P.parentWindow:window,v?(J=a.relatedTarget||a.toElement,v=D,J=J?Mn(J):null,J!==null&&(Be=A(J),te=J.tag,J!==Be||te!==5&&te!==27&&te!==6)&&(J=null)):(v=null,J=D),v!==J)){if(te=KE,F="onMouseLeave",L="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(te=WE,F="onPointerLeave",L="onPointerEnter",p="pointer"),Be=v==null?P:Mi(v),M=J==null?P:Mi(J),P=new te(F,p+"leave",v,a,U),P.target=Be,P.relatedTarget=M,F=null,Mn(U)===D&&(te=new te(L,p+"enter",J,a,U),te.target=M,te.relatedTarget=Be,F=te),Be=F,v&&J)t:{for(te=CO,L=v,p=J,M=0,F=L;F;F=te(F))M++;F=0;for(var ee=p;ee;ee=te(ee))F++;for(;0<M-F;)L=te(L),M--;for(;0<F-M;)p=te(p),F--;for(;M--;){if(L===p||p!==null&&L===p.alternate){te=L;break t}L=te(L),p=te(p)}te=null}else te=null;v!==null&&Gd(w,P,v,te,!1),J!==null&&Be!==null&&Gd(w,Be,J,te,!0)}}e:{if(P=D?Mi(D):window,v=P.nodeName&&P.nodeName.toLowerCase(),v==="select"||v==="input"&&P.type==="file")var Ce=QE;else if(XE(P))if($E)Ce=vm;else{Ce=Pm;var $=Dm}else v=P.nodeName,!v||v.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?D&&wl(D.elementType)&&(Ce=QE):Ce=Bm;if(Ce&&(Ce=Ce(e,D))){qE(w,Ce,a,U);break e}$&&$(e,P,D),e==="focusout"&&D&&P.type==="number"&&D.memoizedProps.value!=null&&kl(P,"number",P.value)}switch($=D?Mi(D):window,e){case"focusin":(XE($)||$.contentEditable==="true")&&(Fn=$,$l=D,Fi=null);break;case"focusout":Fi=$l=Fn=null;break;case"mousedown":es=!0;break;case"contextmenu":case"mouseup":case"dragend":es=!1,lS(w,a,U);break;case"selectionchange":if(bm)break;case"keydown":case"keyup":lS(w,a,U)}var ce;if(Zl)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Un?JE(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(zE&&a.locale!=="ko"&&(Un||me!=="onCompositionStart"?me==="onCompositionEnd"&&Un&&(ce=VE()):(La=U,Wl="value"in La?La.value:La.textContent,Un=!0)),$=xr(D,me),0<$.length&&(me=new YE(me,e,null,a,U),w.push({event:me,listeners:$}),ce?me.data=ce:(ce=ZE(a),ce!==null&&(me.data=ce)))),(ce=gm?Im(e,a):Lm(e,a))&&(me=xr(D,"onBeforeInput"),0<me.length&&($=new YE("onBeforeInput","beforeinput",null,a,U),w.push({event:$,listeners:me}),$.data=ce)),TO(w,e,D,a,U)}Hd(w,t)})}function so(e,t,a){return{instance:e,listener:t,currentTarget:a}}function xr(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Di(e,a),l!=null&&i.unshift(so(e,l,u)),l=Di(e,t),l!=null&&i.push(so(e,l,u))),e.tag===3)return i;e=e.return}return[]}function CO(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gd(e,t,a,i,l){for(var u=t._reactName,S=[];a!==null&&a!==i;){var T=a,C=T.alternate,D=T.stateNode;if(T=T.tag,C!==null&&C===i)break;T!==5&&T!==26&&T!==27||D===null||(C=D,l?(D=Di(a,u),D!=null&&S.unshift(so(a,D,C))):l||(D=Di(a,u),D!=null&&S.push(so(a,D,C)))),a=a.return}S.length!==0&&e.push({event:t,listeners:S})}var pO=/\r\n?/g,NO=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(pO,`
`).replace(NO,"")}function Fd(e,t){return t=Ud(t),Ud(e)===t}function Pe(e,t,a,i,l,u){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Hn(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Hn(e,""+i);break;case"className":zo(e,"class",i);break;case"tabIndex":zo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":zo(e,a,i);break;case"style":FE(e,i,u);break;case"data":if(t!=="object"){zo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=_o(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Pe(e,t,"name",l.name,l,null),Pe(e,t,"formEncType",l.formEncType,l,null),Pe(e,t,"formMethod",l.formMethod,l,null),Pe(e,t,"formTarget",l.formTarget,l,null)):(Pe(e,t,"encType",l.encType,l,null),Pe(e,t,"method",l.method,l,null),Pe(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=_o(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=na);break;case"onScroll":i!=null&&he("scroll",e);break;case"onScrollEnd":i!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=_o(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":he("beforetoggle",e),he("toggle",e),Wo(e,"popover",i);break;case"xlinkActuate":aa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":aa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":aa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":aa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":aa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":aa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":aa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":aa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":aa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Wo(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qR.get(a)||a,Wo(e,a,i))}}function Iu(e,t,a,i,l,u){switch(a){case"style":FE(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Hn(e,i):(typeof i=="number"||typeof i=="bigint")&&Hn(e,""+i);break;case"onScroll":i!=null&&he("scroll",e);break;case"onScrollEnd":i!=null&&he("scrollend",e);break;case"onClick":i!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ME.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),u=e[At]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof i=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Wo(e,a,i)}}}function rt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var i=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var S=a[u];if(S!=null)switch(u){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Pe(e,t,u,S,a,null)}}l&&Pe(e,t,"srcSet",a.srcSet,a,null),i&&Pe(e,t,"src",a.src,a,null);return;case"input":he("invalid",e);var T=u=S=l=null,C=null,D=null;for(i in a)if(a.hasOwnProperty(i)){var U=a[i];if(U!=null)switch(i){case"name":l=U;break;case"type":S=U;break;case"checked":C=U;break;case"defaultChecked":D=U;break;case"value":u=U;break;case"defaultValue":T=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:Pe(e,t,i,U,a,null)}}HE(e,u,T,C,D,S,l,!1);return;case"select":he("invalid",e),i=S=u=null;for(l in a)if(a.hasOwnProperty(l)&&(T=a[l],T!=null))switch(l){case"value":u=T;break;case"defaultValue":S=T;break;case"multiple":i=T;default:Pe(e,t,l,T,a,null)}t=u,a=S,e.multiple=!!i,t!=null?vn(e,!!i,t,!1):a!=null&&vn(e,!!i,a,!0);return;case"textarea":he("invalid",e),u=l=i=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":i=T;break;case"defaultValue":l=T;break;case"children":u=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Pe(e,t,S,T,a,null)}GE(e,i,l,u);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(i=a[C],i!=null))switch(C){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Pe(e,t,C,i,a,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(i=0;i<lo.length;i++)he(lo[i],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(i=a[D],i!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Pe(e,t,D,i,a,null)}return;default:if(wl(t)){for(U in a)a.hasOwnProperty(U)&&(i=a[U],i!==void 0&&Iu(e,t,U,i,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(i=a[T],i!=null&&Pe(e,t,T,i,a,null))}function gO(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,S=null,T=null,C=null,D=null,U=null;for(v in a){var w=a[v];if(a.hasOwnProperty(v)&&w!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":C=w;default:i.hasOwnProperty(v)||Pe(e,t,v,null,i,w)}}for(var P in i){var v=i[P];if(w=a[P],i.hasOwnProperty(P)&&(v!=null||w!=null))switch(P){case"type":u=v;break;case"name":l=v;break;case"checked":D=v;break;case"defaultChecked":U=v;break;case"value":S=v;break;case"defaultValue":T=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(137,t));break;default:v!==w&&Pe(e,t,P,v,i,w)}}Fl(e,S,T,C,D,U,u,l);return;case"select":v=S=T=P=null;for(u in a)if(C=a[u],a.hasOwnProperty(u)&&C!=null)switch(u){case"value":break;case"multiple":v=C;default:i.hasOwnProperty(u)||Pe(e,t,u,null,i,C)}for(l in i)if(u=i[l],C=a[l],i.hasOwnProperty(l)&&(u!=null||C!=null))switch(l){case"value":P=u;break;case"defaultValue":T=u;break;case"multiple":S=u;default:u!==C&&Pe(e,t,l,u,i,C)}t=T,a=S,i=v,P!=null?vn(e,!!a,P,!1):!!i!=!!a&&(t!=null?vn(e,!!a,t,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":v=P=null;for(T in a)if(l=a[T],a.hasOwnProperty(T)&&l!=null&&!i.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Pe(e,t,T,null,i,l)}for(S in i)if(l=i[S],u=a[S],i.hasOwnProperty(S)&&(l!=null||u!=null))switch(S){case"value":P=l;break;case"defaultValue":v=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Pe(e,t,S,l,i,u)}bE(e,P,v);return;case"option":for(var J in a)if(P=a[J],a.hasOwnProperty(J)&&P!=null&&!i.hasOwnProperty(J))switch(J){case"selected":e.selected=!1;break;default:Pe(e,t,J,null,i,P)}for(C in i)if(P=i[C],v=a[C],i.hasOwnProperty(C)&&P!==v&&(P!=null||v!=null))switch(C){case"selected":e.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:Pe(e,t,C,P,i,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)P=a[te],a.hasOwnProperty(te)&&P!=null&&!i.hasOwnProperty(te)&&Pe(e,t,te,null,i,P);for(D in i)if(P=i[D],v=a[D],i.hasOwnProperty(D)&&P!==v&&(P!=null||v!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(s(137,t));break;default:Pe(e,t,D,P,i,v)}return;default:if(wl(t)){for(var Be in a)P=a[Be],a.hasOwnProperty(Be)&&P!==void 0&&!i.hasOwnProperty(Be)&&Iu(e,t,Be,void 0,i,P);for(U in i)P=i[U],v=a[U],!i.hasOwnProperty(U)||P===v||P===void 0&&v===void 0||Iu(e,t,U,P,i,v);return}}for(var L in a)P=a[L],a.hasOwnProperty(L)&&P!=null&&!i.hasOwnProperty(L)&&Pe(e,t,L,null,i,P);for(w in i)P=i[w],v=a[w],!i.hasOwnProperty(w)||P===v||P==null&&v==null||Pe(e,t,w,P,i,v)}function kd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function IO(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],u=l.transferSize,S=l.initiatorType,T=l.duration;if(u&&T&&kd(S)){for(S=0,T=l.responseEnd,i+=1;i<a.length;i++){var C=a[i],D=C.startTime;if(D>T)break;var U=C.transferSize,w=C.initiatorType;U&&kd(w)&&(C=C.responseEnd,S+=U*(C<T?1:(T-D)/(C-D)))}if(--i,t+=8*(u+S)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lu=null,yu=null;function Kr(e){return e.nodeType===9?e:e.ownerDocument}function wd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Du=null;function LO(){var e=window.event;return e&&e.type==="popstate"?e===Du?!1:(Du=e,!0):(Du=null,!1)}var xd=typeof setTimeout=="function"?setTimeout:void 0,yO=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,MO=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(e){return Kd.resolve(null).then(e).catch(DO)}:xd;function DO(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function Yd(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),ci(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")uo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,uo(a);for(var u=a.firstChild;u;){var S=u.nextSibling,T=u.nodeName;u[yi]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=S}}else a==="body"&&uo(e.ownerDocument.body);a=l}while(a);ci(t)}function Wd(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Pu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pu(a),Gl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function PO(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[yi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function BO(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vt(e.nextSibling),e===null))return null;return e}function zd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function Bu(e){return e.data==="$?"||e.data==="$~"}function vu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vO(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hu=null;function jd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Vt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function _d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Jd(e,t,a){switch(t=Kr(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function uo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gl(e)}var xt=new Map,Zd=new Set;function Yr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=K.d;K.d={f:HO,r:bO,D:GO,C:UO,L:FO,m:kO,X:VO,S:wO,M:xO};function HO(){var e=ma.f(),t=br();return e||t}function bO(e){var t=Dn(e);t!==null&&t.tag===5&&t.type==="form"?SA(t):ma.r(e)}var li=typeof document>"u"?null:document;function Xd(e,t,a){var i=li;if(i&&typeof t=="string"&&t){var l=Ht(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Zd.has(l)||(Zd.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),rt(t,"link",e),et(t),i.head.appendChild(t)))}}function GO(e){ma.D(e),Xd("dns-prefetch",e,null)}function UO(e,t){ma.C(e,t),Xd("preconnect",e,t)}function FO(e,t,a){ma.L(e,t,a);var i=li;if(i&&e&&t){var l='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Ht(a.imageSizes)+'"]')):l+='[href="'+Ht(e)+'"]';var u=l;switch(t){case"style":u=si(e);break;case"script":u=ui(e)}xt.has(u)||(e=m({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),xt.set(u,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(co(u))||t==="script"&&i.querySelector(Eo(u))||(t=i.createElement("link"),rt(t,"link",e),et(t),i.head.appendChild(t)))}}function kO(e,t){ma.m(e,t);var a=li;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ht(i)+'"][href="'+Ht(e)+'"]',u=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ui(e)}if(!xt.has(u)&&(e=m({rel:"modulepreload",href:e},t),xt.set(u,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(u)))return}i=a.createElement("link"),rt(i,"link",e),et(i),a.head.appendChild(i)}}}function wO(e,t,a){ma.S(e,t,a);var i=li;if(i&&e){var l=Pn(i).hoistableStyles,u=si(e);t=t||"default";var S=l.get(u);if(!S){var T={loading:0,preload:null};if(S=i.querySelector(co(u)))T.loading=5;else{e=m({rel:"stylesheet",href:e,"data-precedence":t},a),(a=xt.get(u))&&bu(e,a);var C=S=i.createElement("link");et(C),rt(C,"link",e),C._p=new Promise(function(D,U){C.onload=D,C.onerror=U}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Wr(S,t,i)}S={type:"stylesheet",instance:S,count:1,state:T},l.set(u,S)}}}function VO(e,t){ma.X(e,t);var a=li;if(a&&e){var i=Pn(a).hoistableScripts,l=ui(e),u=i.get(l);u||(u=a.querySelector(Eo(l)),u||(e=m({src:e,async:!0},t),(t=xt.get(l))&&Gu(e,t),u=a.createElement("script"),et(u),rt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function xO(e,t){ma.M(e,t);var a=li;if(a&&e){var i=Pn(a).hoistableScripts,l=ui(e),u=i.get(l);u||(u=a.querySelector(Eo(l)),u||(e=m({src:e,async:!0,type:"module"},t),(t=xt.get(l))&&Gu(e,t),u=a.createElement("script"),et(u),rt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function qd(e,t,a,i){var l=(l=Ae.current)?Yr(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=si(a.href),a=Pn(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=si(a.href);var u=Pn(l).hoistableStyles,S=u.get(e);if(S||(l=l.ownerDocument||l,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,S),(u=l.querySelector(co(e)))&&!u._p&&(S.instance=u,S.state.loading=5),xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xt.set(e,a),u||KO(l,e,a,S.state))),t&&i===null)throw Error(s(528,""));return S}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ui(a),a=Pn(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function si(e){return'href="'+Ht(e)+'"'}function co(e){return'link[rel="stylesheet"]['+e+"]"}function Qd(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function KO(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),rt(t,"link",a),et(t),e.head.appendChild(t))}function ui(e){return'[src="'+Ht(e)+'"]'}function Eo(e){return"script[async]"+e}function $d(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(i)return t.instance=i,et(i),i;var l=m({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),et(i),rt(i,"style",l),Wr(i,a.precedence,e),t.instance=i;case"stylesheet":l=si(a.href);var u=e.querySelector(co(l));if(u)return t.state.loading|=4,t.instance=u,et(u),u;i=Qd(a),(l=xt.get(l))&&bu(i,l),u=(e.ownerDocument||e).createElement("link"),et(u);var S=u;return S._p=new Promise(function(T,C){S.onload=T,S.onerror=C}),rt(u,"link",i),t.state.loading|=4,Wr(u,a.precedence,e),t.instance=u;case"script":return u=ui(a.src),(l=e.querySelector(Eo(u)))?(t.instance=l,et(l),l):(i=a,(l=xt.get(u))&&(i=m({},a),Gu(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),et(l),rt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Wr(i,a.precedence,e));return t.instance}function Wr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,u=l,S=0;S<i.length;S++){var T=i[S];if(T.dataset.precedence===t)u=T;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var zr=null;function eh(e,t,a){if(zr===null){var i=new Map,l=zr=new Map;l.set(a,i)}else l=zr,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[yi]||u[at]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var S=u.getAttribute(t)||"";S=e+S;var T=i.get(S);T?T.push(u):i.set(S,[u])}}return i}function th(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function YO(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ah(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function WO(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=si(i.href),u=t.querySelector(co(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=jr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,et(u);return}u=t.ownerDocument||t,i=Qd(i),(l=xt.get(l))&&bu(i,l),u=u.createElement("link"),et(u);var S=u;S._p=new Promise(function(T,C){S.onload=T,S.onerror=C}),rt(u,"link",i),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Uu=0;function zO(e,t){return e.stylesheets&&e.count===0&&Jr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Jr(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Uu===0&&(Uu=62500*IO());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jr(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Uu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function jr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _r=null;function Jr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_r=new Map,t.forEach(jO,e),_r=null,jr.call(e))}function jO(e,t){if(!(t.state.loading&4)){var a=_r.get(e);if(a)var i=a.get(null);else{a=new Map,_r.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var S=l[u];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),i=S)}i&&a.set(null,i)}l=t.instance,S=l.getAttribute("data-precedence"),u=a.get(S)||i,u===i&&a.set(null,l),a.set(S,l),this.count++,i=jr.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var So={$$typeof:x,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function _O(e,t,a,i,l,u,S,T,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.hiddenUpdates=Bl(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function nh(e,t,a,i,l,u,S,T,C,D,U,w){return e=new _O(e,t,a,S,C,D,U,w,T),t=1,u===!0&&(t|=24),u=gt(3,null,null,t),e.current=u,u.stateNode=e,t=hs(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:a,cache:t},ms(u),e}function ih(e){return e?(e=Vn,e):Vn}function oh(e,t,a,i,l,u){l=ih(l),i.context===null?i.context=l:i.pendingContext=l,i=va(t),i.payload={element:a},u=u===void 0?null:u,u!==null&&(i.callback=u),a=Ha(e,i,t),a!==null&&(mt(a,e,t),Wi(a,e,t))}function rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Fu(e,t){rh(e,t),(e=e.alternate)&&rh(e,t)}function lh(e){if(e.tag===13||e.tag===31){var t=sn(e,67108864);t!==null&&mt(t,e,67108864),Fu(e,67108864)}}function sh(e){if(e.tag===13||e.tag===31){var t=Dt();t=vl(t);var a=sn(e,t);a!==null&&mt(a,e,t),Fu(e,t)}}var Zr=!0;function JO(e,t,a,i){var l=G.T;G.T=null;var u=K.p;try{K.p=2,ku(e,t,a,i)}finally{K.p=u,G.T=l}}function ZO(e,t,a,i){var l=G.T;G.T=null;var u=K.p;try{K.p=8,ku(e,t,a,i)}finally{K.p=u,G.T=l}}function ku(e,t,a,i){if(Zr){var l=wu(i);if(l===null)gu(e,t,i,Xr,a),ch(e,i);else if(qO(l,e,t,a,i))i.stopPropagation();else if(ch(e,i),t&4&&-1<XO.indexOf(e)){for(;l!==null;){var u=Dn(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var S=an(u.pendingLanes);if(S!==0){var T=u;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var C=1<<31-pt(S);T.entanglements[1]|=C,S&=~C}$t(u),(Ne&6)===0&&(vr=Ot()+500,ro(0))}}break;case 31:case 13:T=sn(u,2),T!==null&&mt(T,u,2),br(),Fu(u,2)}if(u=wu(i),u===null&&gu(e,t,i,Xr,a),u===l)break;l=u}l!==null&&i.stopPropagation()}else gu(e,t,i,null,a)}}function wu(e){return e=xl(e),Vu(e)}var Xr=null;function Vu(e){if(Xr=null,e=Mn(e),e!==null){var t=A(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=E(t),e!==null)return e;e=null}else if(a===31){if(e=d(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xr=e,null}function uh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(GR()){case TE:return 2;case RE:return 8;case wo:case UR:return 32;case mE:return 268435456;default:return 32}default:return 32}}var xu=!1,Wa=null,za=null,ja=null,Ao=new Map,ho=new Map,_a=[],XO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ch(e,t){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(t.pointerId)}}function fo(e,t,a,i,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Dn(t),t!==null&&lh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function qO(e,t,a,i,l){switch(t){case"focusin":return Wa=fo(Wa,e,t,a,i,l),!0;case"dragenter":return za=fo(za,e,t,a,i,l),!0;case"mouseover":return ja=fo(ja,e,t,a,i,l),!0;case"pointerover":var u=l.pointerId;return Ao.set(u,fo(Ao.get(u)||null,e,t,a,i,l)),!0;case"gotpointercapture":return u=l.pointerId,ho.set(u,fo(ho.get(u)||null,e,t,a,i,l)),!0}return!1}function Eh(e){var t=Mn(e.target);if(t!==null){var a=A(t);if(a!==null){if(t=a.tag,t===13){if(t=E(a),t!==null){e.blockedOn=t,IE(e.priority,function(){sh(a)});return}}else if(t===31){if(t=d(a),t!==null){e.blockedOn=t,IE(e.priority,function(){sh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=wu(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Vl=i,a.target.dispatchEvent(i),Vl=null}else return t=Dn(a),t!==null&&lh(t),e.blockedOn=a,!1;t.shift()}return!0}function Sh(e,t,a){qr(e)&&a.delete(t)}function QO(){xu=!1,Wa!==null&&qr(Wa)&&(Wa=null),za!==null&&qr(za)&&(za=null),ja!==null&&qr(ja)&&(ja=null),Ao.forEach(Sh),ho.forEach(Sh)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,QO)))}var $r=null;function Ah(e){$r!==e&&($r=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){$r===e&&($r=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Vu(i||a)===null)continue;break}var u=Dn(a);u!==null&&(e.splice(t,3),t-=3,ws(u,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function ci(e){function t(C){return Qr(C,e)}Wa!==null&&Qr(Wa,e),za!==null&&Qr(za,e),ja!==null&&Qr(ja,e),Ao.forEach(t),ho.forEach(t);for(var a=0;a<_a.length;a++){var i=_a[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<_a.length&&(a=_a[0],a.blockedOn===null);)Eh(a),a.blockedOn===null&&_a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],u=a[i+1],S=l[At]||null;if(typeof u=="function")S||Ah(a);else if(S){var T=null;if(u&&u.hasAttribute("formAction")){if(l=u,S=u[At]||null)T=S.formAction;else if(Vu(l)!==null)continue}else T=S.action;typeof T=="function"?a[i+1]=T:(a.splice(i,3),i-=3),Ah(a)}}}function dh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(S){return l=S})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ku(e){this._internalRoot=e}el.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,i=Dt();oh(a,i,e,t,null,null)},el.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;oh(e.current,2,null,e,null,null),br(),t[yn]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var t=gE();e={blockedOn:null,target:e,priority:t};for(var a=0;a<_a.length&&t!==0&&t<_a[a].priority;a++);_a.splice(a,0,e),a===0&&Eh(e)}};var hh=o.version;if(hh!=="19.2.3")throw Error(s(527,hh,"19.2.3"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var $O={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{gi=tl.inject($O),Ct=tl}catch{}}return Ro.createRoot=function(e,t){if(!c(e))throw Error(s(299));var a=!1,i="",l=pA,u=NA,S=gA;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(S=t.onRecoverableError)),t=nh(e,1,!1,null,null,a,i,null,l,u,S,dh),e[yn]=t.current,Nu(e),new Ku(t)},Ro.hydrateRoot=function(e,t,a){if(!c(e))throw Error(s(299));var i=!1,l="",u=pA,S=NA,T=gA,C=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(C=a.formState)),t=nh(e,1,!0,t,a??null,i,l,C,u,S,T,dh),t.context=ih(null),a=t.current,i=Dt(),i=vl(i),l=va(i),l.callback=null,Ha(a,l,i),a=i,t.current.lanes=a,Li(t,a),$t(t),e[yn]=t.current,Nu(e),new el(t)},Ro.version="19.2.3",Ro}var Ih;function uC(){if(Ih)return zu.exports;Ih=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),zu.exports=sC(),zu.exports}var cC=uC();const EC=Zf(cC),SC="modulepreload",AC=function(n){return"/"+n},Lh={},Xa=function(o,r,s){let c=Promise.resolve();if(r&&r.length>0){let E=function(h){return Promise.all(h.map(R=>Promise.resolve(R).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));c=E(r.map(h=>{if(h=AC(h),h in Lh)return;Lh[h]=!0;const R=h.endsWith(".css"),m=R?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const O=document.createElement("link");if(O.rel=R?"stylesheet":SC,R||(O.as="script"),O.crossOrigin="",O.href=h,f&&O.setAttribute("nonce",f),document.head.appendChild(O),R)return new Promise((y,H)=>{O.addEventListener("load",y),O.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${h}`)))})}))}function A(E){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=E,window.dispatchEvent(d),!d.defaultPrevented)throw E}return c.then(E=>{for(const d of E||[])d.status==="rejected"&&A(d.reason);return o().catch(A)})};var oe=(n=>(n.MENU="MENU",n.CLASSIC="CLASSIC",n.LEVEL_THEMED="LEVEL_THEMED",n.LEVEL_EMOJI="LEVEL_EMOJI",n.LEVEL_MIND_MATCH="LEVEL_MIND_MATCH",n.LEVEL_SYNONYMS="LEVEL_SYNONYMS",n.LEVEL_EXPANSION="LEVEL_EXPANSION",n))(oe||{});const yh=65,dC=60,hC=["bg-neon-red shadow-[0_0_15px_#FF073A] border-white","bg-neon-orange shadow-[0_0_15px_#FF5F1F] border-white","bg-neon-yellow shadow-[0_0_15px_#F9FF00] border-white","bg-neon-lime shadow-[0_0_15px_#39FF14] border-white","bg-neon-green shadow-[0_0_15px_#00F000] border-white","bg-neon-mint shadow-[0_0_15px_#00FF9F] border-white","bg-neon-cyan shadow-[0_0_15px_#00FFFF] border-white","bg-neon-sky-blue shadow-[0_0_15px_#00BFFF] border-white","bg-neon-blue shadow-[0_0_15px_#0066FF] border-white","bg-neon-violet shadow-[0_0_15px_#B026FF] border-white","bg-neon-purple shadow-[0_0_15px_#D400FF] border-white","bg-neon-magenta shadow-[0_0_15px_#FF00FF] border-white","bg-neon-pink shadow-[0_0_15px_#FF1FBF] border-white","bg-neon-rose shadow-[0_0_15px_#FF0055] border-white"],iy=[{name:"NEON ARCADE",gradient:"from-black to-zinc-900",solvedColors:hC}],ve="CLASSIC",Xe="LEVEL_EMOJI",qe="LEVEL_MIND_MATCH",Qe="LEVEL_SYNONYMS",fC="LEVEL_THEMED",_t="LEVEL_EXPANSION",TC=[ve,Xe,qe,Qe,_t,fC,ve,Xe,qe,Qe,_t,ve,Xe,qe,Qe,_t,ve,Xe,qe,Qe,ve,Xe,qe,Qe,_t,ve,Xe,qe,Qe,ve,ve,Xe,qe,Qe,_t,ve,Xe,qe,Qe,ve,ve,Xe,qe,Qe,_t,ve,Xe,qe,Qe,ve,ve,Xe,qe,Qe,_t,ve,Xe,qe,Qe,ve,ve,Xe,qe,Qe,_t,ve,Xe,qe,Qe,ve,ve,Xe,qe,Qe,_t,ve,Xe,qe,Qe,ve,ve,Xe,qe,Qe,_t,ve,Xe,qe,Qe,ve,ve,Xe,qe,Qe,_t,ve,Xe,qe,Qe,ve],$a={LEVEL:"wpm_level",TUTORIAL_SEEN:"wpm_tutorial_seen_v2",TUTORIAL_SEEN_L2:"wpm_tutorial_seen_l2",TUTORIAL_SEEN_L5:"wpm_tutorial_seen_l5",GAME_STATS:"wpm_game_stats",DAILY_HISTORY:"wpm_daily_history",ENABLED_MODES:"wpm_enabled_modes"},RC=()=>{try{const n=localStorage.getItem($a.LEVEL);if(!n)return 1;const o=parseInt(n,10);return isNaN(o)?1:o}catch{return 1}},mC=n=>{localStorage.setItem($a.LEVEL,n.toString())},Zu=[oe.CLASSIC,oe.LEVEL_EMOJI,oe.LEVEL_SYNONYMS,oe.LEVEL_MIND_MATCH,oe.LEVEL_THEMED,oe.LEVEL_EXPANSION],OC=()=>{try{const n=localStorage.getItem($a.ENABLED_MODES);if(!n)return Zu;const o=JSON.parse(n);return Array.isArray(o)&&o.length>0?o:Zu}catch{return Zu}},CC=n=>{localStorage.setItem($a.ENABLED_MODES,JSON.stringify(n))},pC=()=>!!localStorage.getItem($a.TUTORIAL_SEEN),NC=()=>{localStorage.setItem($a.TUTORIAL_SEEN,"true")},Xu={rowsSolved:0,levelsCompleted:0,totalTimeMs:0,hintsUsed:0,hintsRefused:0,totalMoves:0,solvedCategoryIds:[],solvedWords:[],totalScore:0},Xf=()=>{try{const n=localStorage.getItem($a.GAME_STATS);if(!n)return Xu;const o=JSON.parse(n);return{...Xu,...o,solvedWords:Array.isArray(o.solvedWords)?o.solvedWords:[]}}catch{return Xu}},gC=n=>{try{const o=Xf();let r=o.solvedCategoryIds;if(n.solvedCategoryIds){const A=new Set([...o.solvedCategoryIds,...n.solvedCategoryIds]);r=Array.from(A)}let s=o.solvedWords;if(n.solvedWords){const A=new Set([...o.solvedWords,...n.solvedWords]);s=Array.from(A)}const c={rowsSolved:o.rowsSolved+(n.rowsSolved||0),levelsCompleted:o.levelsCompleted+(n.levelsCompleted||0),totalTimeMs:o.totalTimeMs+(n.totalTimeMs||0),hintsUsed:o.hintsUsed+(n.hintsUsed||0),hintsRefused:o.hintsRefused+(n.hintsRefused||0),totalMoves:o.totalMoves+(n.totalMoves||0),solvedCategoryIds:r,solvedWords:s,totalScore:o.totalScore+(n.totalScore||0)};localStorage.setItem($a.GAME_STATS,JSON.stringify(c))}catch(o){console.error("Failed to update stats",o)}},IC=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
399,Church Actions,Preach,Pray,Baptize,Confess,Offer,Chant,Sing,Fast,Read Scripture`,LC=`401,Church Music Instruments,Organ,Harp,Flute,Lute,Horn,Bell,Trumpet,Violin,Drum
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
770,ROCK PRODUCERS,GEORGE MARTIN,RICK RUBIN,BRIAN ENO,MICKIE MOST,QUINCY JONES`,yC=`801,SOCCER ACTIONS,GOAL,CORNER KICK,PASS,DRIBBLE,HEADER,FOUL,KICKOFF,OFFSIDE,PENALTY KICK
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
1200,TECTONIC PLATES,PACIFIC,EURASIAN,AFRICAN,ANTARCTIC`,MC=`1201,VOLCANO PARTS,CRATER,VENT,MAGMA,LAVA,ASH
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
1300,BREAKING BAD,WALTER,JESSE,SKYLER,HANK,SAUL,GUS`,DC=`1760,BICYCLE PARTS,WHEEL,TIRE,PEDAL,CHAIN,HANDLEBAR,SEAT,BRAKE,GEAR
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
2500,Starts with Z,Zebra,Zoo,Zero,Zone,Zest,Zipper`,PC=`100000,Air Fryer Staples,Fries,Wings,Broccoli,Salmon,Tofu,Ravioli
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
100073,Baccarat Terms,Player,Banker`,BC=`110000,Abraham Lincoln,Civil War,Emancipation Proclamation,Gettysburg Address,Honest Abe,Log Cabin,Union
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
110400,SODA COMPANIES,PEPSICO,COCA COLA,DR PEPPER,KEURIG`,vC=`id,name,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
70300,BRIDGE TYPES,SUSPENSION,ARCH,BEAM,TRUSS,DRAWBRIDGE,CANTILEVER,CABLE,PONTOON`,HC=`id,name,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
60044,RHYME: -ISTIC,Artistic,Realistic,Optimistic,Pessimistic,Statistic,Logistic,Ballistic,Mystic`,bC=`110401,Solar System Objects,Asteroid,Comet,Meteoroid,Heliosphere
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
110484,Yellowstone,Geyser,Caldera,Bison,Wolves,Prismatic,Mammoth`,GC=[IC,LC,yC,MC,DC,PC,BC,vC,HC,bC].join(`
`),UC=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
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
`,FC=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
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
`,kC=`Category,Linguistic Cluster,Intensity
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
"Young Trees","Saplings, Seedlings, Sprouts, Scions",5`,qf=14;function wC(n){const o=[...n];for(let r=o.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[o[r],o[s]]=[o[s],o[r]]}return o}const hc=n=>{const o=n.trim().split(`
`),r=[];for(let s=1;s<o.length;s++){const c=o[s].trim();if(!c)continue;const A=[];let E="",d=!1;for(let m=0;m<c.length;m++){const O=c[m];O==='"'?d&&c[m+1]==='"'?(E+='"',m++):d=!d:O===","&&!d?(A.push(E),E=""):E+=O}if(A.push(E),A.length<3)continue;const f=A[0].trim(),h=A[1].trim(),R=A.slice(2).map(m=>m.trim()).filter(m=>m.length>0&&m.length<=qf);R.length>=4&&r.push({id:f,name:h,words:R})}return r},VC=(n,o=8e4)=>{const r=n.trim().split(`
`),s=[];let c=o;for(let A=1;A<r.length;A++){const E=r[A].trim();if(!E)continue;const d=[];let f="",h=!1;for(let y=0;y<E.length;y++){const H=E[y];H==='"'?h=!h:H===","&&!h?(d.push(f),f=""):f+=H}if(d.push(f),d.length<2)continue;const R=d[0].trim().replace(/^"|"$/g,""),O=d[1].trim().replace(/^"|"$/g,"").split(",").map(y=>y.trim()).filter(y=>y.length>0&&y.length<=qf);O.length>=4&&s.push({id:(c++).toString(),name:R,words:O})}return s};let Ei=null,al=null;const qu=[{id:"fb1",name:"Colors",words:["Red","Blue","Green","Yellow"]},{id:"fb2",name:"Animals",words:["Dog","Cat","Bird","Fish"]},{id:"fb3",name:"Fruits",words:["Apple","Banana","Orange","Grape"]},{id:"fb4",name:"Planets",words:["Earth","Mars","Venus","Jupiter"]},{id:"fb5",name:"Seasons",words:["Spring","Summer","Fall","Winter"]},{id:"fb6",name:"Directions",words:["North","South","East","West"]},{id:"fb7",name:"Elements",words:["Fire","Water","Air","Earth"]}],cl=()=>{if(Ei&&Ei.length>0)return Ei;try{const n=[...hc(GC||""),...VC(kC||""),...hc(UC||"")];if(n.length===0)return console.warn("CSV Parsing returned 0 rows. Using fallback."),qu;const o=new Map;for(const r of n){if(!r.name)continue;const s=r.name.toUpperCase().trim();if(!(s==="CATEGORY"||s==="NAME"||s===""))if(o.has(s)){const c=o.get(s),A=Array.from(new Set([...c.words,...r.words]));c.words=A}else o.set(s,{...r})}return Ei=Array.from(o.values()).filter(r=>r.words.length>=4),Ei.length===0?qu:Ei}catch(n){return console.error("Error loading CSV data",n),qu}},xC=()=>al||(al=hc(FC),al),oy=(n,o)=>{const r=o||cl();return{name:"VARIETY PACK",categories:wC(r).slice(0,n)}},KC=`
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
`;let Qu=null;const fc=()=>{if(Qu)return Qu;const n=KC.trim().split(`
`),o=[];let r=5e4;return n.forEach(s=>{if(!s.includes(","))return;const c=s.split(",").map(d=>d.trim().toLowerCase()).filter(d=>d.length>0&&d.length<=14);if(c.length<5)return;const A=c[0],E=c.slice(1);E.length>=4&&o.push({id:(r++).toString(),name:`SYNONYMS: ${A.toUpperCase()}`,words:E})}),Qu=o,o},YC=`
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
`;let $u=null;const Tc=()=>{if($u)return $u;const n=YC.trim().split(`
`),o=[];let r=9e4;const s=typeof Intl<"u"&&"Segmenter"in Intl;return n.forEach(c=>{if(!c.includes(","))return;const A=c.indexOf(","),E=c.substring(0,A).trim(),d=c.substring(A+1).trim();let f=[];if(s){const R=new Intl.Segmenter("en",{granularity:"grapheme"}).segment(d);for(const{segment:m}of R){const O=m.trim();O.length>0&&f.push(O)}}else f=Array.from(d).filter(h=>h.trim().length>0);f=Array.from(new Set(f)),f.length>=3&&o.push({id:(r++).toString(),name:E,words:f})}),$u=o,o},WC=(n,o=[])=>{const r=TC;let s=(n-1)%r.length,c=r[s];if(o.length>0&&!o.includes(c))for(let A=1;A<r.length;A++){const E=r[(s+A)%r.length];if(o.includes(E)){c=E;break}}return c},Mh=(n,o=[])=>{const r=WC(n,o);let s=[];switch(r){case oe.LEVEL_SYNONYMS:s=fc();break;case oe.LEVEL_EMOJI:s=Tc();break;default:s=cl(),n%20===0&&(s=[...s,...xC()]);break}return{mode:r,data:s}};class zC{constructor(){this.ctx=null,this.isMuted=!1,this.isMusicPlaying=!1,this.musicNodes=[],this.musicInterval=null}getContext(){if(!this.ctx)try{const o=window.AudioContext||window.webkitAudioContext;if(o)this.ctx=new o;else return null}catch(o){return console.error("Audio init error",o),null}return this.ctx}resume(){const o=this.getContext();o&&o.state==="suspended"&&o.resume().catch(r=>console.warn(r))}setSound(o){this.isMuted=!o,this.isMuted?this.stopNodes():this.resume()}playTone(o,r,s,c=0,A=.1){if(this.isMuted)return;const E=this.getContext();if(E){E.state==="suspended"&&E.resume().catch(()=>{});try{const d=E.createOscillator(),f=E.createGain();d.type=r,d.frequency.setValueAtTime(o,E.currentTime+c),f.gain.setValueAtTime(A,E.currentTime+c),f.gain.linearRampToValueAtTime(.001,E.currentTime+c+s),d.connect(f),f.connect(E.destination),d.start(E.currentTime+c),d.stop(E.currentTime+c+s+.05),d.onended=()=>{d.disconnect(),f.disconnect()}}catch{}}}startMusic(){this.isMusicPlaying||(this.isMusicPlaying=!0)}stopMusic(){this.isMusicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null),this.stopNodes()}toggleMusic(){return this.isMusicPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}stopNodes(){this.musicNodes.forEach(o=>{try{o.disconnect()}catch{}}),this.musicNodes=[]}playTick(){this.playTone(800,"square",.03,0,.05)}playSelect(){this.playTone(600,"sine",.08,0,.1)}playSwap(){if(this.isMuted)return;const o=this.getContext();if(o){o.state==="suspended"&&o.resume().catch(()=>{});try{const r=o.createOscillator(),s=o.createGain();r.frequency.setValueAtTime(300,o.currentTime),r.frequency.linearRampToValueAtTime(600,o.currentTime+.1),s.gain.setValueAtTime(.05,o.currentTime),s.gain.linearRampToValueAtTime(.001,o.currentTime+.1),r.connect(s),s.connect(o.destination),r.start(),r.stop(o.currentTime+.15),r.onended=()=>{r.disconnect(),s.disconnect()}}catch{}}}playCorrect(){this.playTone(660,"sine",.1,0,.15),this.playTone(880,"sine",.2,.08,.15)}playRowSolved(){this.playTone(440,"sine",.4,0,.1),this.playTone(554.37,"sine",.4,.05,.1),this.playTone(659.25,"sine",.4,.1,.1)}playError(){if(this.isMuted)return;const o=this.getContext();if(o){o.state==="suspended"&&o.resume().catch(()=>{});try{const r=o.currentTime,s=o.createOscillator(),c=o.createGain();s.type="sawtooth",s.frequency.setValueAtTime(120,r),s.frequency.exponentialRampToValueAtTime(60,r+.3),c.gain.setValueAtTime(.15,r),c.gain.linearRampToValueAtTime(.001,r+.3),s.connect(c),c.connect(o.destination),s.start(r),s.stop(r+.35),s.onended=()=>{s.disconnect(),c.disconnect()}}catch{}}}playWin(){this.playTone(523.25,"triangle",.1,0,.2),this.playTone(659.25,"triangle",.1,0+.1,.2),this.playTone(783.99,"triangle",.1,0+.2,.2),this.playTone(1046.5,"square",.6,0+.3,.2),this.playTone(523.25,"sine",.4,0+.3,.2)}playLevelStart(){this.playTone(440,"sine",.1,0,.1),this.playTone(880,"sine",.2,0+.1,.1)}toggleMute(){this.isMuted=!this.isMuted,this.isMuted&&this.stopNodes()}}const Jt=new zC,jC=({onStart:n,onSettings:o,onStats:r,lastLevel:s})=>{const c=s||1,A=c>1?`CONTINUE LEVEL ${c}`:"START GAME";return I.jsxs("div",{className:"flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative bg-black font-oswald",children:[I.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center w-full",children:[I.jsx("div",{className:"flex flex-col items-center justify-center mb-16 w-full animate-zoom-in",children:I.jsx("img",{src:"/logo.svg",alt:"WORD PAIRING MACHINE",className:"w-full max-w-[320px] md:max-w-[450px] h-auto object-contain"})}),I.jsx("div",{className:"flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center z-30",style:{animationDelay:"0.4s"},children:I.jsx("div",{className:"relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer",onClick:n,children:I.jsx("button",{className:`
                relative w-full bg-black rounded-large px-8 py-5
                flex items-center justify-center
                border-2 border-white
                shadow-none
                active:translate-y-[2px]
                transition-all duration-75 z-10
              `,children:I.jsx("span",{className:"text-2xl md:text-3xl font-black font-oswald text-white tracking-widest uppercase",children:A})})})})]}),I.jsxs("div",{className:"w-full flex flex-wrap justify-center gap-6 pb-12 mt-auto animate-fade-in px-4 relative z-30",style:{animationDelay:"0.5s"},children:[I.jsx("button",{onClick:r,className:`
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-neon-aqua hover:text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          `,children:"STATS"}),I.jsx("button",{onClick:o,className:`
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          `,children:"SETTINGS"})]})]})};/*! Capacitor: https://capacitorjs.com/ - MIT License */var Ri;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Ri||(Ri={}));class ec extends Error{constructor(o,r,s){super(o),this.message=o,this.code=r,this.data=s}}const _C=n=>{var o,r;return n!=null&&n.androidBridge?"android":!((r=(o=n==null?void 0:n.webkit)===null||o===void 0?void 0:o.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},JC=n=>{const o=n.CapacitorCustomPlatform||null,r=n.Capacitor||{},s=r.Plugins=r.Plugins||{},c=()=>o!==null?o.name:_C(n),A=()=>c()!=="web",E=m=>{const O=h.get(m);return!!(O!=null&&O.platforms.has(c())||d(m))},d=m=>{var O;return(O=r.PluginHeaders)===null||O===void 0?void 0:O.find(y=>y.name===m)},f=m=>n.console.error(m),h=new Map,R=(m,O={})=>{const y=h.get(m);if(y)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),y.proxy;const H=c(),k=d(m);let B;const g=async()=>(!B&&H in O?B=typeof O[H]=="function"?B=await O[H]():B=O[H]:o!==null&&!B&&"web"in O&&(B=typeof O.web=="function"?B=await O.web():B=O.web),B),b=(j,ie)=>{var Se,ye;if(k){const Me=k==null?void 0:k.methods.find(X=>ie===X.name);if(Me)return Me.rtype==="promise"?X=>r.nativePromise(m,ie.toString(),X):(X,re)=>r.nativeCallback(m,ie.toString(),X,re);if(j)return(Se=j[ie])===null||Se===void 0?void 0:Se.bind(j)}else{if(j)return(ye=j[ie])===null||ye===void 0?void 0:ye.bind(j);throw new ec(`"${m}" plugin is not implemented on ${H}`,Ri.Unimplemented)}},x=j=>{let ie;const Se=(...ye)=>{const Me=g().then(X=>{const re=b(X,j);if(re){const fe=re(...ye);return ie=fe==null?void 0:fe.remove,fe}else throw new ec(`"${m}.${j}()" is not implemented on ${H}`,Ri.Unimplemented)});return j==="addListener"&&(Me.remove=async()=>ie()),Me};return Se.toString=()=>`${j.toString()}() { [capacitor code] }`,Object.defineProperty(Se,"name",{value:j,writable:!1,configurable:!1}),Se},z=x("addListener"),Z=x("removeListener"),ne=(j,ie)=>{const Se=z({eventName:j},ie),ye=async()=>{const X=await Se;Z({eventName:j,callbackId:X},ie)},Me=new Promise(X=>Se.then(()=>X({remove:ye})));return Me.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await ye()},Me},Q=new Proxy({},{get(j,ie){switch(ie){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return k?ne:z;case"removeListener":return Z;default:return x(ie)}}});return s[m]=Q,h.set(m,{name:m,proxy:Q,platforms:new Set([...Object.keys(O),...k?[H]:[]])}),Q};return r.convertFileSrc||(r.convertFileSrc=m=>m),r.getPlatform=c,r.handleError=f,r.isNativePlatform=A,r.isPluginAvailable=E,r.registerPlugin=R,r.Exception=ec,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},ZC=n=>n.Capacitor=JC(n),El=ZC(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Qf=El.registerPlugin;class $f{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(o,r){let s=!1;this.listeners[o]||(this.listeners[o]=[],s=!0),this.listeners[o].push(r);const A=this.windowListeners[o];A&&!A.registered&&this.addWindowListener(A),s&&this.sendRetainedArgumentsForEvent(o);const E=async()=>this.removeListener(o,r);return Promise.resolve({remove:E})}async removeAllListeners(){this.listeners={};for(const o in this.windowListeners)this.removeWindowListener(this.windowListeners[o]);this.windowListeners={}}notifyListeners(o,r,s){const c=this.listeners[o];if(!c){if(s){let A=this.retainedEventArguments[o];A||(A=[]),A.push(r),this.retainedEventArguments[o]=A}return}c.forEach(A=>A(r))}hasListeners(o){var r;return!!(!((r=this.listeners[o])===null||r===void 0)&&r.length)}registerWindowListener(o,r){this.windowListeners[r]={registered:!1,windowEventName:o,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(o="not implemented"){return new El.Exception(o,Ri.Unimplemented)}unavailable(o="not available"){return new El.Exception(o,Ri.Unavailable)}async removeListener(o,r){const s=this.listeners[o];if(!s)return;const c=s.indexOf(r);this.listeners[o].splice(c,1),this.listeners[o].length||this.removeWindowListener(this.windowListeners[o])}addWindowListener(o){window.addEventListener(o.windowEventName,o.handler),o.registered=!0}removeWindowListener(o){o&&(window.removeEventListener(o.windowEventName,o.handler),o.registered=!1)}sendRetainedArgumentsForEvent(o){const r=this.retainedEventArguments[o];r&&(delete this.retainedEventArguments[o],r.forEach(s=>{this.notifyListeners(o,s)}))}}const Dh=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Ph=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class XC extends $f{async getCookies(){const o=document.cookie,r={};return o.split(";").forEach(s=>{if(s.length<=0)return;let[c,A]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=Ph(c).trim(),A=Ph(A).trim(),r[c]=A}),r}async setCookie(o){try{const r=Dh(o.key),s=Dh(o.value),c=`; expires=${(o.expires||"").replace("expires=","")}`,A=(o.path||"/").replace("path=",""),E=o.url!=null&&o.url.length>0?`domain=${o.url}`:"";document.cookie=`${r}=${s||""}${c}; path=${A}; ${E};`}catch(r){return Promise.reject(r)}}async deleteCookie(o){try{document.cookie=`${o.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const o=document.cookie.split(";")||[];for(const r of o)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(o){return Promise.reject(o)}}async clearAllCookies(){try{await this.clearCookies()}catch(o){return Promise.reject(o)}}}Qf("CapacitorCookies",{web:()=>new XC});const qC=async n=>new Promise((o,r)=>{const s=new FileReader;s.onload=()=>{const c=s.result;o(c.indexOf(",")>=0?c.split(",")[1]:c)},s.onerror=c=>r(c),s.readAsDataURL(n)}),QC=(n={})=>{const o=Object.keys(n);return Object.keys(n).map(c=>c.toLocaleLowerCase()).reduce((c,A,E)=>(c[A]=n[o[E]],c),{})},$C=(n,o=!0)=>n?Object.entries(n).reduce((s,c)=>{const[A,E]=c;let d,f;return Array.isArray(E)?(f="",E.forEach(h=>{d=o?encodeURIComponent(h):h,f+=`${A}=${d}&`}),f.slice(0,-1)):(d=o?encodeURIComponent(E):E,f=`${A}=${d}`),`${s}&${f}`},"").substr(1):null,ep=(n,o={})=>{const r=Object.assign({method:n.method||"GET",headers:n.headers},o),c=QC(n.headers)["content-type"]||"";if(typeof n.data=="string")r.body=n.data;else if(c.includes("application/x-www-form-urlencoded")){const A=new URLSearchParams;for(const[E,d]of Object.entries(n.data||{}))A.set(E,d);r.body=A.toString()}else if(c.includes("multipart/form-data")||n.data instanceof FormData){const A=new FormData;if(n.data instanceof FormData)n.data.forEach((d,f)=>{A.append(f,d)});else for(const d of Object.keys(n.data))A.append(d,n.data[d]);r.body=A;const E=new Headers(r.headers);E.delete("content-type"),r.headers=E}else(c.includes("application/json")||typeof n.data=="object")&&(r.body=JSON.stringify(n.data));return r};class tp extends $f{async request(o){const r=ep(o,o.webFetchExtra),s=$C(o.params,o.shouldEncodeUrlParams),c=s?`${o.url}?${s}`:o.url,A=await fetch(c,r),E=A.headers.get("content-type")||"";let{responseType:d="text"}=A.ok?o:{};E.includes("application/json")&&(d="json");let f,h;switch(d){case"arraybuffer":case"blob":h=await A.blob(),f=await qC(h);break;case"json":f=await A.json();break;case"document":case"text":default:f=await A.text()}const R={};return A.headers.forEach((m,O)=>{R[O]=m}),{data:f,headers:R,status:A.status,url:A.url}}async get(o){return this.request(Object.assign(Object.assign({},o),{method:"GET"}))}async post(o){return this.request(Object.assign(Object.assign({},o),{method:"POST"}))}async put(o){return this.request(Object.assign(Object.assign({},o),{method:"PUT"}))}async patch(o){return this.request(Object.assign(Object.assign({},o),{method:"PATCH"}))}async delete(o){return this.request(Object.assign(Object.assign({},o),{method:"DELETE"}))}}Qf("CapacitorHttp",{web:()=>new tp});const ap={async showPrivacyOptionsForm(){if(El.getPlatform()==="web"){console.log("Privacy options are managed by the browser or not applicable.");return}try{const{AdMob:n}=await Xa(async()=>{const{AdMob:o}=await import("./index-Dkp-faKc.js");return{AdMob:o}},[]);console.log("PrivacyService: Invoking AdMob.showConsentForm()"),await n.showConsentForm()}catch(n){throw console.error("PrivacyService: Failed to open consent form",n),n}}},Bh={[oe.CLASSIC]:"Classic",[oe.LEVEL_THEMED]:"Themed",[oe.LEVEL_MIND_MATCH]:"Mind",[oe.LEVEL_SYNONYMS]:"Synonyms",[oe.LEVEL_EMOJI]:"Emoji",[oe.LEVEL_EXPANSION]:"Expansion"},np=({isOpen:n,onClose:o,onMainMenu:r,isMusicOn:s,toggleMusic:c,enabledModes:A,toggleMode:E,hintsEnabled:d,setHintsEnabled:f,onShowTutorial:h,onResetProgress:R,categories:m=[],isAutoPlaying:O,toggleAutoPlay:y,privacyOptionsRequired:H,onShowPrivacyOptions:k})=>{if(!n)return null;const B=m&&m.length>0,g=async()=>{if(k){k();return}try{console.log("Requesting Privacy Options via AdMob wrapper..."),await ap.showPrivacyOptionsForm(),console.log("Privacy Options request handled.")}catch(b){console.error("Error showing privacy options form:",b)}};return I.jsx("div",{className:"absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald",children:I.jsxs("div",{className:"w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(0,229,255,0.3)] flex flex-col gap-3 overflow-hidden max-h-[95vh]",children:[I.jsxs("div",{className:"flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[I.jsx("h2",{className:"text-xl font-black font-oswald text-neon-blue uppercase tracking-widest italic drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]",children:"SETTINGS"}),I.jsx("button",{className:"text-zinc-400 hover:text-neon-red transition-colors p-1",onClick:o,children:I.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),I.jsxs("div",{className:"grid grid-cols-2 gap-2 shrink-0",children:[I.jsx("button",{onClick:r,className:"col-span-2 py-2.5 bg-neon-red border-2 border-white text-white font-black font-oswald text-lg uppercase rounded-medium hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(255,7,58,0.4)]",children:"EXIT TO MAIN MENU"}),I.jsxs("button",{onClick:c,className:`p-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${s?"bg-zinc-900 border-neon-green text-neon-green shadow-[0_0_10px_#00FF66]":"bg-black border-zinc-800 text-zinc-600"}`,children:["SOUND: ",s?"ON":"OFF"]}),I.jsxs("button",{onClick:()=>f(!d),className:`p-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${d?"bg-zinc-900 border-neon-blue text-neon-blue shadow-[0_0_10px_#00E5FF]":"bg-black border-zinc-800 text-zinc-600"}`,children:["HINTS: ",d?"ON":"OFF"]})]}),B&&I.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[I.jsx("h3",{className:"text-neon-pink font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(255,31,191,0.5)]",children:"CURRENT GOALS"}),I.jsx("div",{className:"grid grid-cols-2 gap-1.5 py-1",children:m.map(b=>I.jsxs("div",{className:`px-2 py-1.5 rounded-small border flex items-center justify-between text-[10px] font-bold uppercase font-oswald tracking-tighter transition-all ${b.isSolved?"bg-neon-green/10 border-neon-green text-neon-green shadow-[0_0_5px_#00FF66]":"bg-black border-zinc-700 text-zinc-300"}`,children:[I.jsx("span",{className:"truncate mr-1",children:b.name}),b.isSolved&&I.jsx("span",{className:"text-xs",children:"✓"})]},b.name))})]}),I.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[I.jsx("h3",{className:"text-neon-aqua font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(0,255,255,0.5)]",children:"GAME MODES"}),I.jsx("div",{className:"grid grid-cols-3 gap-1.5 pt-1",children:Object.keys(Bh).map(b=>{const x=A.includes(b);return I.jsxs("button",{onClick:()=>E(b),className:`flex flex-col items-center justify-center p-1 rounded-medium border transition-all h-10 ${x?"bg-zinc-900 border-neon-aqua text-white shadow-[0_0_8px_rgba(0,255,246,0.3)]":"bg-black border-zinc-800 text-zinc-600"}`,children:[I.jsx("span",{className:"font-bold font-oswald text-[9px] uppercase leading-none mb-0.5",children:Bh[b]}),I.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${x?"bg-neon-aqua shadow-[0_0_5px_#00FFF6]":"bg-zinc-800"}`})]},b)})})]}),I.jsxs("div",{className:"mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800 shrink-0",children:[I.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[I.jsx("button",{onClick:h,className:"py-2 bg-zinc-900 border border-neon-yellow text-neon-yellow rounded-medium font-bold text-[10px] font-oswald uppercase shadow-[0_0_8px_rgba(249,255,0,0.2)]",children:"HOW TO PLAY"}),I.jsx("button",{onClick:g,className:"py-2 bg-zinc-900 border border-zinc-600 text-zinc-400 rounded-medium font-bold text-[10px] font-oswald uppercase hover:text-white hover:border-white transition-all",children:"MANAGE CONSENT"})]}),I.jsx("button",{onClick:R,className:"w-full py-2 bg-black border border-neon-red text-neon-red rounded-medium font-bold text-[10px] font-oswald uppercase shadow-[0_0_5px_rgba(255,7,58,0.2)]",children:"RESET PROGRESS"}),I.jsx("button",{onClick:o,className:"w-full py-3.5 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_20px_white]",children:"RESUME PLAY"})]})]})})};function ip(n){if(typeof Proxy>"u")return n;const o=new Map,r=(...s)=>n(...s);return new Proxy(r,{get:(s,c)=>c==="create"?n:(o.has(c)||o.set(c,n(c)),o.get(c))})}function ml(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Rc=n=>Array.isArray(n);function eT(n,o){if(!Array.isArray(o))return!1;const r=o.length;if(r!==n.length)return!1;for(let s=0;s<r;s++)if(o[s]!==n[s])return!1;return!0}function Mo(n){return typeof n=="string"||Array.isArray(n)}function vh(n){const o=[{},{}];return n==null||n.values.forEach((r,s)=>{o[0][s]=r.get(),o[1][s]=r.getVelocity()}),o}function Gc(n,o,r,s){if(typeof o=="function"){const[c,A]=vh(s);o=o(r!==void 0?r:n.custom,c,A)}if(typeof o=="string"&&(o=n.variants&&n.variants[o]),typeof o=="function"){const[c,A]=vh(s);o=o(r!==void 0?r:n.custom,c,A)}return o}function Ol(n,o,r){const s=n.getProps();return Gc(s,o,r!==void 0?r:s.custom,n)}const Uc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Fc=["initial",...Uc],Ho=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ln=new Set(Ho),Oa=n=>n*1e3,Ca=n=>n/1e3,op={type:"spring",stiffness:500,damping:25,restSpeed:10},rp=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),lp={type:"keyframes",duration:.8},sp={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},up=(n,{keyframes:o})=>o.length>2?lp:Ln.has(n)?n.startsWith("scale")?rp(o[1]):op:sp;function kc(n,o){return n?n[o]||n.default||n:void 0}const cp={useManualTiming:!1},Ep=n=>n!==null;function Cl(n,{repeat:o,repeatType:r="loop"},s){const c=n.filter(Ep),A=o&&r!=="loop"&&o%2===1?0:c.length-1;return!A||s===void 0?c[A]:s}const Pt=n=>n;let tT=Pt;function Sp(n){let o=new Set,r=new Set,s=!1,c=!1;const A=new WeakSet;let E={delta:0,timestamp:0,isProcessing:!1};function d(h){A.has(h)&&(f.schedule(h),n()),h(E)}const f={schedule:(h,R=!1,m=!1)=>{const y=m&&s?o:r;return R&&A.add(h),y.has(h)||y.add(h),h},cancel:h=>{r.delete(h),A.delete(h)},process:h=>{if(E=h,s){c=!0;return}s=!0,[o,r]=[r,o],o.forEach(d),o.clear(),s=!1,c&&(c=!1,f.process(h))}};return f}const nl=["read","resolveKeyframes","update","preRender","render","postRender"],Ap=40;function aT(n,o){let r=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},A=()=>r=!0,E=nl.reduce((g,b)=>(g[b]=Sp(A),g),{}),{read:d,resolveKeyframes:f,update:h,preRender:R,render:m,postRender:O}=E,y=()=>{const g=performance.now();r=!1,c.delta=s?1e3/60:Math.max(Math.min(g-c.timestamp,Ap),1),c.timestamp=g,c.isProcessing=!0,d.process(c),f.process(c),h.process(c),R.process(c),m.process(c),O.process(c),c.isProcessing=!1,r&&o&&(s=!1,n(y))},H=()=>{r=!0,s=!0,c.isProcessing||n(y)};return{schedule:nl.reduce((g,b)=>{const x=E[b];return g[b]=(z,Z=!1,ne=!1)=>(r||H(),x.schedule(z,Z,ne)),g},{}),cancel:g=>{for(let b=0;b<nl.length;b++)E[nl[b]].cancel(g)},state:c,steps:E}}const{schedule:Ue,cancel:qa,state:lt,steps:tc}=aT(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pt,!0),nT=(n,o,r)=>(((1-3*r+3*o)*n+(3*r-6*o))*n+3*o)*n,dp=1e-7,hp=12;function fp(n,o,r,s,c){let A,E,d=0;do E=o+(r-o)/2,A=nT(E,s,c)-n,A>0?r=E:o=E;while(Math.abs(A)>dp&&++d<hp);return E}function bo(n,o,r,s){if(n===o&&r===s)return Pt;const c=A=>fp(A,0,1,n,r);return A=>A===0||A===1?A:nT(c(A),o,s)}const iT=n=>o=>o<=.5?n(2*o)/2:(2-n(2*(1-o)))/2,oT=n=>o=>1-n(1-o),rT=bo(.33,1.53,.69,.99),wc=oT(rT),lT=iT(wc),sT=n=>(n*=2)<1?.5*wc(n):.5*(2-Math.pow(2,-10*(n-1))),Vc=n=>1-Math.sin(Math.acos(n)),uT=oT(Vc),cT=iT(Vc),ET=n=>/^0[^.\s]+$/u.test(n);function Tp(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||ET(n):!0}const ST=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),AT=n=>o=>typeof o=="string"&&o.startsWith(n),dT=AT("--"),Rp=AT("var(--"),xc=n=>Rp(n)?mp.test(n.split("/*")[0].trim()):!1,mp=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Op=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Cp(n){const o=Op.exec(n);if(!o)return[,];const[,r,s,c]=o;return[`--${r??s}`,c]}function hT(n,o,r=1){const[s,c]=Cp(n);if(!s)return;const A=window.getComputedStyle(o).getPropertyValue(s);if(A){const E=A.trim();return ST(E)?parseFloat(E):E}return xc(c)?hT(c,o,r+1):c}const pa=(n,o,r)=>r>o?o:r<n?n:r,pi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Do={...pi,transform:n=>pa(0,1,n)},il={...pi,default:1},Go=n=>({test:o=>typeof o=="string"&&o.endsWith(n)&&o.split(" ").length===1,parse:parseFloat,transform:o=>`${o}${n}`}),Za=Go("deg"),ea=Go("%"),ae=Go("px"),pp=Go("vh"),Np=Go("vw"),Hh={...ea,parse:n=>ea.parse(n)/100,transform:n=>ea.transform(n*100)},gp=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),bh=n=>n===pi||n===ae,Gh=(n,o)=>parseFloat(n.split(", ")[o]),Uh=(n,o)=>(r,{transform:s})=>{if(s==="none"||!s)return 0;const c=s.match(/^matrix3d\((.+)\)$/u);if(c)return Gh(c[1],o);{const A=s.match(/^matrix\((.+)\)$/u);return A?Gh(A[1],n):0}},Ip=new Set(["x","y","z"]),Lp=Ho.filter(n=>!Ip.has(n));function yp(n){const o=[];return Lp.forEach(r=>{const s=n.getValue(r);s!==void 0&&(o.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),o}const mi={width:({x:n},{paddingLeft:o="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(o)-parseFloat(r),height:({y:n},{paddingTop:o="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(o)-parseFloat(r),top:(n,{top:o})=>parseFloat(o),left:(n,{left:o})=>parseFloat(o),bottom:({y:n},{top:o})=>parseFloat(o)+(n.max-n.min),right:({x:n},{left:o})=>parseFloat(o)+(n.max-n.min),x:Uh(4,13),y:Uh(5,14)};mi.translateX=mi.x;mi.translateY=mi.y;const fT=n=>o=>o.test(n),Mp={test:n=>n==="auto",parse:n=>n},TT=[pi,ae,ea,Za,Np,pp,Mp],Fh=n=>TT.find(fT(n)),In=new Set;let mc=!1,Oc=!1;function RT(){if(Oc){const n=Array.from(In).filter(s=>s.needsMeasurement),o=new Set(n.map(s=>s.element)),r=new Map;o.forEach(s=>{const c=yp(s);c.length&&(r.set(s,c),s.render())}),n.forEach(s=>s.measureInitialState()),o.forEach(s=>{s.render();const c=r.get(s);c&&c.forEach(([A,E])=>{var d;(d=s.getValue(A))===null||d===void 0||d.set(E)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Oc=!1,mc=!1,In.forEach(n=>n.complete()),In.clear()}function mT(){In.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Oc=!0)})}function Dp(){mT(),RT()}class Kc{constructor(o,r,s,c,A,E=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...o],this.onComplete=r,this.name=s,this.motionValue=c,this.element=A,this.isAsync=E}scheduleResolve(){this.isScheduled=!0,this.isAsync?(In.add(this),mc||(mc=!0,Ue.read(mT),Ue.resolveKeyframes(RT))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:o,name:r,element:s,motionValue:c}=this;for(let A=0;A<o.length;A++)if(o[A]===null)if(A===0){const E=c==null?void 0:c.get(),d=o[o.length-1];if(E!==void 0)o[0]=E;else if(s&&r){const f=s.readValue(r,d);f!=null&&(o[0]=f)}o[0]===void 0&&(o[0]=d),c&&E===void 0&&c.set(o[0])}else o[A]=o[A-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),In.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,In.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const go=n=>Math.round(n*1e5)/1e5,Yc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Pp(n){return n==null}const Bp=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wc=(n,o)=>r=>!!(typeof r=="string"&&Bp.test(r)&&r.startsWith(n)||o&&!Pp(r)&&Object.prototype.hasOwnProperty.call(r,o)),OT=(n,o,r)=>s=>{if(typeof s!="string")return s;const[c,A,E,d]=s.match(Yc);return{[n]:parseFloat(c),[o]:parseFloat(A),[r]:parseFloat(E),alpha:d!==void 0?parseFloat(d):1}},vp=n=>pa(0,255,n),ac={...pi,transform:n=>Math.round(vp(n))},gn={test:Wc("rgb","red"),parse:OT("red","green","blue"),transform:({red:n,green:o,blue:r,alpha:s=1})=>"rgba("+ac.transform(n)+", "+ac.transform(o)+", "+ac.transform(r)+", "+go(Do.transform(s))+")"};function Hp(n){let o="",r="",s="",c="";return n.length>5?(o=n.substring(1,3),r=n.substring(3,5),s=n.substring(5,7),c=n.substring(7,9)):(o=n.substring(1,2),r=n.substring(2,3),s=n.substring(3,4),c=n.substring(4,5),o+=o,r+=r,s+=s,c+=c),{red:parseInt(o,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const Cc={test:Wc("#"),parse:Hp,transform:gn.transform},Ai={test:Wc("hsl","hue"),parse:OT("hue","saturation","lightness"),transform:({hue:n,saturation:o,lightness:r,alpha:s=1})=>"hsla("+Math.round(n)+", "+ea.transform(go(o))+", "+ea.transform(go(r))+", "+go(Do.transform(s))+")"},ut={test:n=>gn.test(n)||Cc.test(n)||Ai.test(n),parse:n=>gn.test(n)?gn.parse(n):Ai.test(n)?Ai.parse(n):Cc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?gn.transform(n):Ai.transform(n)},bp=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Gp(n){var o,r;return isNaN(n)&&typeof n=="string"&&(((o=n.match(Yc))===null||o===void 0?void 0:o.length)||0)+(((r=n.match(bp))===null||r===void 0?void 0:r.length)||0)>0}const CT="number",pT="color",Up="var",Fp="var(",kh="${}",kp=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Po(n){const o=n.toString(),r=[],s={color:[],number:[],var:[]},c=[];let A=0;const d=o.replace(kp,f=>(ut.test(f)?(s.color.push(A),c.push(pT),r.push(ut.parse(f))):f.startsWith(Fp)?(s.var.push(A),c.push(Up),r.push(f)):(s.number.push(A),c.push(CT),r.push(parseFloat(f))),++A,kh)).split(kh);return{values:r,split:d,indexes:s,types:c}}function NT(n){return Po(n).values}function gT(n){const{split:o,types:r}=Po(n),s=o.length;return c=>{let A="";for(let E=0;E<s;E++)if(A+=o[E],c[E]!==void 0){const d=r[E];d===CT?A+=go(c[E]):d===pT?A+=ut.transform(c[E]):A+=c[E]}return A}}const wp=n=>typeof n=="number"?0:n;function Vp(n){const o=NT(n);return gT(n)(o.map(wp))}const Qa={test:Gp,parse:NT,createTransformer:gT,getAnimatableNone:Vp},xp=new Set(["brightness","contrast","saturate","opacity"]);function Kp(n){const[o,r]=n.slice(0,-1).split("(");if(o==="drop-shadow")return n;const[s]=r.match(Yc)||[];if(!s)return n;const c=r.replace(s,"");let A=xp.has(o)?1:0;return s!==r&&(A*=100),o+"("+A+c+")"}const Yp=/\b([a-z-]*)\(.*?\)/gu,pc={...Qa,getAnimatableNone:n=>{const o=n.match(Yp);return o?o.map(Kp).join(" "):n}},Wp={borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,backgroundPositionX:ae,backgroundPositionY:ae},zp={rotate:Za,rotateX:Za,rotateY:Za,rotateZ:Za,scale:il,scaleX:il,scaleY:il,scaleZ:il,skew:Za,skewX:Za,skewY:Za,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Do,originX:Hh,originY:Hh,originZ:ae},wh={...pi,transform:Math.round},zc={...Wp,...zp,zIndex:wh,size:ae,fillOpacity:Do,strokeOpacity:Do,numOctaves:wh},jp={...zc,color:ut,backgroundColor:ut,outlineColor:ut,fill:ut,stroke:ut,borderColor:ut,borderTopColor:ut,borderRightColor:ut,borderBottomColor:ut,borderLeftColor:ut,filter:pc,WebkitFilter:pc},jc=n=>jp[n];function IT(n,o){let r=jc(n);return r!==pc&&(r=Qa),r.getAnimatableNone?r.getAnimatableNone(o):void 0}const _p=new Set(["auto","none","0"]);function Jp(n,o,r){let s=0,c;for(;s<n.length&&!c;){const A=n[s];typeof A=="string"&&!_p.has(A)&&Po(A).values.length&&(c=n[s]),s++}if(c&&r)for(const A of o)n[A]=IT(r,c)}class LT extends Kc{constructor(o,r,s,c,A){super(o,r,s,c,A,!0)}readKeyframes(){const{unresolvedKeyframes:o,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let f=0;f<o.length;f++){let h=o[f];if(typeof h=="string"&&(h=h.trim(),xc(h))){const R=hT(h,r.current);R!==void 0&&(o[f]=R),f===o.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!gp.has(s)||o.length!==2)return;const[c,A]=o,E=Fh(c),d=Fh(A);if(E!==d)if(bh(E)&&bh(d))for(let f=0;f<o.length;f++){const h=o[f];typeof h=="string"&&(o[f]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:o,name:r}=this,s=[];for(let c=0;c<o.length;c++)Tp(o[c])&&s.push(c);s.length&&Jp(o,s,r)}measureInitialState(){const{element:o,unresolvedKeyframes:r,name:s}=this;if(!o||!o.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=mi[s](o.measureViewportBox(),window.getComputedStyle(o.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&o.getValue(s,c).jump(c,!1)}measureEndState(){var o;const{element:r,name:s,unresolvedKeyframes:c}=this;if(!r||!r.current)return;const A=r.getValue(s);A&&A.jump(this.measuredOrigin,!1);const E=c.length-1,d=c[E];c[E]=mi[s](r.measureViewportBox(),window.getComputedStyle(r.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),!((o=this.removedTransforms)===null||o===void 0)&&o.length&&this.removedTransforms.forEach(([f,h])=>{r.getValue(f).set(h)}),this.resolveNoneKeyframes()}}function _c(n){return typeof n=="function"}let ll;function Zp(){ll=void 0}const ta={now:()=>(ll===void 0&&ta.set(lt.isProcessing||cp.useManualTiming?lt.timestamp:performance.now()),ll),set:n=>{ll=n,queueMicrotask(Zp)}},Vh=(n,o)=>o==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Qa.test(n)||n==="0")&&!n.startsWith("url("));function Xp(n){const o=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==o)return!0}function qp(n,o,r,s){const c=n[0];if(c===null)return!1;if(o==="display"||o==="visibility")return!0;const A=n[n.length-1],E=Vh(c,o),d=Vh(A,o);return!E||!d?!1:Xp(n)||(r==="spring"||_c(r))&&s}const Qp=40;class yT{constructor({autoplay:o=!0,delay:r=0,type:s="keyframes",repeat:c=0,repeatDelay:A=0,repeatType:E="loop",...d}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ta.now(),this.options={autoplay:o,delay:r,type:s,repeat:c,repeatDelay:A,repeatType:E,...d},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Qp?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Dp(),this._resolved}onKeyframesResolved(o,r){this.resolvedAt=ta.now(),this.hasAttemptedResolve=!0;const{name:s,type:c,velocity:A,delay:E,onComplete:d,onUpdate:f,isGenerator:h}=this.options;if(!h&&!qp(o,s,c,A))if(E)this.options.duration=0;else{f==null||f(Cl(o,this.options,r)),d==null||d(),this.resolveFinishedPromise();return}const R=this.initPlayback(o,r);R!==!1&&(this._resolved={keyframes:o,finalKeyframe:r,...R},this.onPostResolved())}onPostResolved(){}then(o,r){return this.currentFinishedPromise.then(o,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(o=>{this.resolveFinishedPromise=o})}}const Oi=(n,o,r)=>{const s=o-n;return s===0?1:(r-n)/s},MT=(n,o,r=10)=>{let s="";const c=Math.max(Math.round(o/r),2);for(let A=0;A<c;A++)s+=n(Oi(0,c-1,A))+", ";return`linear(${s.substring(0,s.length-2)})`};function DT(n,o){return o?n*(1e3/o):0}const $p=5;function PT(n,o,r){const s=Math.max(o-$p,0);return DT(r-n(s),o-s)}const xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},nc=.001;function eN({duration:n=xe.duration,bounce:o=xe.bounce,velocity:r=xe.velocity,mass:s=xe.mass}){let c,A,E=1-o;E=pa(xe.minDamping,xe.maxDamping,E),n=pa(xe.minDuration,xe.maxDuration,Ca(n)),E<1?(c=h=>{const R=h*E,m=R*n,O=R-r,y=Nc(h,E),H=Math.exp(-m);return nc-O/y*H},A=h=>{const m=h*E*n,O=m*r+r,y=Math.pow(E,2)*Math.pow(h,2)*n,H=Math.exp(-m),k=Nc(Math.pow(h,2),E);return(-c(h)+nc>0?-1:1)*((O-y)*H)/k}):(c=h=>{const R=Math.exp(-h*n),m=(h-r)*n+1;return-nc+R*m},A=h=>{const R=Math.exp(-h*n),m=(r-h)*(n*n);return R*m});const d=5/n,f=aN(c,A,d);if(n=Oa(n),isNaN(f))return{stiffness:xe.stiffness,damping:xe.damping,duration:n};{const h=Math.pow(f,2)*s;return{stiffness:h,damping:E*2*Math.sqrt(s*h),duration:n}}}const tN=12;function aN(n,o,r){let s=r;for(let c=1;c<tN;c++)s=s-n(s)/o(s);return s}function Nc(n,o){return n*Math.sqrt(1-o*o)}const gc=2e4;function BT(n){let o=0;const r=50;let s=n.next(o);for(;!s.done&&o<gc;)o+=r,s=n.next(o);return o>=gc?1/0:o}const nN=["duration","bounce"],iN=["stiffness","damping","mass"];function xh(n,o){return o.some(r=>n[r]!==void 0)}function oN(n){let o={velocity:xe.velocity,stiffness:xe.stiffness,damping:xe.damping,mass:xe.mass,isResolvedFromDuration:!1,...n};if(!xh(n,iN)&&xh(n,nN))if(n.visualDuration){const r=n.visualDuration,s=2*Math.PI/(r*1.2),c=s*s,A=2*pa(.05,1,1-n.bounce)*Math.sqrt(c);o={...o,mass:xe.mass,stiffness:c,damping:A}}else{const r=eN(n);o={...o,...r,mass:xe.mass},o.isResolvedFromDuration=!0}return o}function vT(n=xe.visualDuration,o=xe.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:o}:n;let{restSpeed:s,restDelta:c}=r;const A=r.keyframes[0],E=r.keyframes[r.keyframes.length-1],d={done:!1,value:A},{stiffness:f,damping:h,mass:R,duration:m,velocity:O,isResolvedFromDuration:y}=oN({...r,velocity:-Ca(r.velocity||0)}),H=O||0,k=h/(2*Math.sqrt(f*R)),B=E-A,g=Ca(Math.sqrt(f/R)),b=Math.abs(B)<5;s||(s=b?xe.restSpeed.granular:xe.restSpeed.default),c||(c=b?xe.restDelta.granular:xe.restDelta.default);let x;if(k<1){const Z=Nc(g,k);x=ne=>{const Q=Math.exp(-k*g*ne);return E-Q*((H+k*g*B)/Z*Math.sin(Z*ne)+B*Math.cos(Z*ne))}}else if(k===1)x=Z=>E-Math.exp(-g*Z)*(B+(H+g*B)*Z);else{const Z=g*Math.sqrt(k*k-1);x=ne=>{const Q=Math.exp(-k*g*ne),j=Math.min(Z*ne,300);return E-Q*((H+k*g*B)*Math.sinh(j)+Z*B*Math.cosh(j))/Z}}const z={calculatedDuration:y&&m||null,next:Z=>{const ne=x(Z);if(y)d.done=Z>=m;else{let Q=0;k<1&&(Q=Z===0?Oa(H):PT(x,Z,ne));const j=Math.abs(Q)<=s,ie=Math.abs(E-ne)<=c;d.done=j&&ie}return d.value=d.done?E:ne,d},toString:()=>{const Z=Math.min(BT(z),gc),ne=MT(Q=>z.next(Z*Q).value,Z,30);return Z+"ms "+ne}};return z}function Kh({keyframes:n,velocity:o=0,power:r=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:A=500,modifyTarget:E,min:d,max:f,restDelta:h=.5,restSpeed:R}){const m=n[0],O={done:!1,value:m},y=j=>d!==void 0&&j<d||f!==void 0&&j>f,H=j=>d===void 0?f:f===void 0||Math.abs(d-j)<Math.abs(f-j)?d:f;let k=r*o;const B=m+k,g=E===void 0?B:E(B);g!==B&&(k=g-m);const b=j=>-k*Math.exp(-j/s),x=j=>g+b(j),z=j=>{const ie=b(j),Se=x(j);O.done=Math.abs(ie)<=h,O.value=O.done?g:Se};let Z,ne;const Q=j=>{y(O.value)&&(Z=j,ne=vT({keyframes:[O.value,H(O.value)],velocity:PT(x,j,O.value),damping:c,stiffness:A,restDelta:h,restSpeed:R}))};return Q(0),{calculatedDuration:null,next:j=>{let ie=!1;return!ne&&Z===void 0&&(ie=!0,z(j),Q(j)),Z!==void 0&&j>=Z?ne.next(j-Z):(!ie&&z(j),O)}}}const rN=bo(.42,0,1,1),lN=bo(0,0,.58,1),HT=bo(.42,0,.58,1),sN=n=>Array.isArray(n)&&typeof n[0]!="number",Jc=n=>Array.isArray(n)&&typeof n[0]=="number",uN={linear:Pt,easeIn:rN,easeInOut:HT,easeOut:lN,circIn:Vc,circInOut:cT,circOut:uT,backIn:wc,backInOut:lT,backOut:rT,anticipate:sT},Yh=n=>{if(Jc(n)){tT(n.length===4);const[o,r,s,c]=n;return bo(o,r,s,c)}else if(typeof n=="string")return uN[n];return n},cN=(n,o)=>r=>o(n(r)),Uo=(...n)=>n.reduce(cN),ke=(n,o,r)=>n+(o-n)*r;function ic(n,o,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(o-n)*6*r:r<1/2?o:r<2/3?n+(o-n)*(2/3-r)*6:n}function EN({hue:n,saturation:o,lightness:r,alpha:s}){n/=360,o/=100,r/=100;let c=0,A=0,E=0;if(!o)c=A=E=r;else{const d=r<.5?r*(1+o):r+o-r*o,f=2*r-d;c=ic(f,d,n+1/3),A=ic(f,d,n),E=ic(f,d,n-1/3)}return{red:Math.round(c*255),green:Math.round(A*255),blue:Math.round(E*255),alpha:s}}function Sl(n,o){return r=>r>0?o:n}const oc=(n,o,r)=>{const s=n*n,c=r*(o*o-s)+s;return c<0?0:Math.sqrt(c)},SN=[Cc,gn,Ai],AN=n=>SN.find(o=>o.test(n));function Wh(n){const o=AN(n);if(!o)return!1;let r=o.parse(n);return o===Ai&&(r=EN(r)),r}const zh=(n,o)=>{const r=Wh(n),s=Wh(o);if(!r||!s)return Sl(n,o);const c={...r};return A=>(c.red=oc(r.red,s.red,A),c.green=oc(r.green,s.green,A),c.blue=oc(r.blue,s.blue,A),c.alpha=ke(r.alpha,s.alpha,A),gn.transform(c))},Ic=new Set(["none","hidden"]);function dN(n,o){return Ic.has(n)?r=>r<=0?n:o:r=>r>=1?o:n}function hN(n,o){return r=>ke(n,o,r)}function Zc(n){return typeof n=="number"?hN:typeof n=="string"?xc(n)?Sl:ut.test(n)?zh:RN:Array.isArray(n)?bT:typeof n=="object"?ut.test(n)?zh:fN:Sl}function bT(n,o){const r=[...n],s=r.length,c=n.map((A,E)=>Zc(A)(A,o[E]));return A=>{for(let E=0;E<s;E++)r[E]=c[E](A);return r}}function fN(n,o){const r={...n,...o},s={};for(const c in r)n[c]!==void 0&&o[c]!==void 0&&(s[c]=Zc(n[c])(n[c],o[c]));return c=>{for(const A in s)r[A]=s[A](c);return r}}function TN(n,o){var r;const s=[],c={color:0,var:0,number:0};for(let A=0;A<o.values.length;A++){const E=o.types[A],d=n.indexes[E][c[E]],f=(r=n.values[d])!==null&&r!==void 0?r:0;s[A]=f,c[E]++}return s}const RN=(n,o)=>{const r=Qa.createTransformer(o),s=Po(n),c=Po(o);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?Ic.has(n)&&!c.values.length||Ic.has(o)&&!s.values.length?dN(n,o):Uo(bT(TN(s,c),c.values),r):Sl(n,o)};function GT(n,o,r){return typeof n=="number"&&typeof o=="number"&&typeof r=="number"?ke(n,o,r):Zc(n)(n,o)}function mN(n,o,r){const s=[],c=r||GT,A=n.length-1;for(let E=0;E<A;E++){let d=c(n[E],n[E+1]);if(o){const f=Array.isArray(o)?o[E]||Pt:o;d=Uo(f,d)}s.push(d)}return s}function ON(n,o,{clamp:r=!0,ease:s,mixer:c}={}){const A=n.length;if(tT(A===o.length),A===1)return()=>o[0];if(A===2&&n[0]===n[1])return()=>o[1];n[0]>n[A-1]&&(n=[...n].reverse(),o=[...o].reverse());const E=mN(o,s,c),d=E.length,f=h=>{let R=0;if(d>1)for(;R<n.length-2&&!(h<n[R+1]);R++);const m=Oi(n[R],n[R+1],h);return E[R](m)};return r?h=>f(pa(n[0],n[A-1],h)):f}function CN(n,o){const r=n[n.length-1];for(let s=1;s<=o;s++){const c=Oi(0,o,s);n.push(ke(r,1,c))}}function pN(n){const o=[0];return CN(o,n.length-1),o}function NN(n,o){return n.map(r=>r*o)}function gN(n,o){return n.map(()=>o||HT).splice(0,n.length-1)}function Al({duration:n=300,keyframes:o,times:r,ease:s="easeInOut"}){const c=sN(s)?s.map(Yh):Yh(s),A={done:!1,value:o[0]},E=NN(r&&r.length===o.length?r:pN(o),n),d=ON(E,o,{ease:Array.isArray(c)?c:gN(o,c)});return{calculatedDuration:n,next:f=>(A.value=d(f),A.done=f>=n,A)}}const IN=n=>{const o=({timestamp:r})=>n(r);return{start:()=>Ue.update(o,!0),stop:()=>qa(o),now:()=>lt.isProcessing?lt.timestamp:ta.now()}},LN={decay:Kh,inertia:Kh,tween:Al,keyframes:Al,spring:vT},yN=n=>n/100;class Xc extends yT{constructor(o){super(o),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:r,motionValue:s,element:c,keyframes:A}=this.options,E=(c==null?void 0:c.KeyframeResolver)||Kc,d=(f,h)=>this.onKeyframesResolved(f,h);this.resolver=new E(A,d,r,s,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(o){const{type:r="keyframes",repeat:s=0,repeatDelay:c=0,repeatType:A,velocity:E=0}=this.options,d=_c(r)?r:LN[r]||Al;let f,h;d!==Al&&typeof o[0]!="number"&&(f=Uo(yN,GT(o[0],o[1])),o=[0,100]);const R=d({...this.options,keyframes:o});A==="mirror"&&(h=d({...this.options,keyframes:[...o].reverse(),velocity:-E})),R.calculatedDuration===null&&(R.calculatedDuration=BT(R));const{calculatedDuration:m}=R,O=m+c,y=O*(s+1)-c;return{generator:R,mirroredGenerator:h,mapPercentToKeyframes:f,calculatedDuration:m,resolvedDuration:O,totalDuration:y}}onPostResolved(){const{autoplay:o=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!o?this.pause():this.state=this.pendingPlayState}tick(o,r=!1){const{resolved:s}=this;if(!s){const{keyframes:j}=this.options;return{done:!0,value:j[j.length-1]}}const{finalKeyframe:c,generator:A,mirroredGenerator:E,mapPercentToKeyframes:d,keyframes:f,calculatedDuration:h,totalDuration:R,resolvedDuration:m}=s;if(this.startTime===null)return A.next(0);const{delay:O,repeat:y,repeatType:H,repeatDelay:k,onUpdate:B}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,o):this.speed<0&&(this.startTime=Math.min(o-R/this.speed,this.startTime)),r?this.currentTime=o:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(o-this.startTime)*this.speed;const g=this.currentTime-O*(this.speed>=0?1:-1),b=this.speed>=0?g<0:g>R;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=R);let x=this.currentTime,z=A;if(y){const j=Math.min(this.currentTime,R)/m;let ie=Math.floor(j),Se=j%1;!Se&&j>=1&&(Se=1),Se===1&&ie--,ie=Math.min(ie,y+1),!!(ie%2)&&(H==="reverse"?(Se=1-Se,k&&(Se-=k/m)):H==="mirror"&&(z=E)),x=pa(0,1,Se)*m}const Z=b?{done:!1,value:f[0]}:z.next(x);d&&(Z.value=d(Z.value));let{done:ne}=Z;!b&&h!==null&&(ne=this.speed>=0?this.currentTime>=R:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ne);return Q&&c!==void 0&&(Z.value=Cl(f,this.options,c)),B&&B(Z.value),Q&&this.finish(),Z}get duration(){const{resolved:o}=this;return o?Ca(o.calculatedDuration):0}get time(){return Ca(this.currentTime)}set time(o){o=Oa(o),this.currentTime=o,this.holdTime!==null||this.speed===0?this.holdTime=o:this.driver&&(this.startTime=this.driver.now()-o/this.speed)}get speed(){return this.playbackSpeed}set speed(o){const r=this.playbackSpeed!==o;this.playbackSpeed=o,r&&(this.time=Ca(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:o=IN,onPlay:r,startTime:s}=this.options;this.driver||(this.driver=o(A=>this.tick(A))),r&&r();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var o;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(o=this.currentTime)!==null&&o!==void 0?o:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:o}=this.options;o&&o()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(o){return this.startTime=0,this.tick(o,!0)}}const MN=new Set(["opacity","clipPath","filter","transform"]);function qc(n){let o;return()=>(o===void 0&&(o=n()),o)}const DN={linearEasing:void 0};function PN(n,o){const r=qc(n);return()=>{var s;return(s=DN[o])!==null&&s!==void 0?s:r()}}const dl=PN(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function UT(n){return!!(typeof n=="function"&&dl()||!n||typeof n=="string"&&(n in Lc||dl())||Jc(n)||Array.isArray(n)&&n.every(UT))}const Co=([n,o,r,s])=>`cubic-bezier(${n}, ${o}, ${r}, ${s})`,Lc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Co([0,.65,.55,1]),circOut:Co([.55,0,1,.45]),backIn:Co([.31,.01,.66,-.59]),backOut:Co([.33,1.53,.69,.99])};function FT(n,o){if(n)return typeof n=="function"&&dl()?MT(n,o):Jc(n)?Co(n):Array.isArray(n)?n.map(r=>FT(r,o)||Lc.easeOut):Lc[n]}function BN(n,o,r,{delay:s=0,duration:c=300,repeat:A=0,repeatType:E="loop",ease:d="easeInOut",times:f}={}){const h={[o]:r};f&&(h.offset=f);const R=FT(d,c);return Array.isArray(R)&&(h.easing=R),n.animate(h,{delay:s,duration:c,easing:Array.isArray(R)?"linear":R,fill:"both",iterations:A+1,direction:E==="reverse"?"alternate":"normal"})}function jh(n,o){n.timeline=o,n.onfinish=null}const vN=qc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),hl=10,HN=2e4;function bN(n){return _c(n.type)||n.type==="spring"||!UT(n.ease)}function GN(n,o){const r=new Xc({...o,keyframes:n,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:n[0]};const c=[];let A=0;for(;!s.done&&A<HN;)s=r.sample(A),c.push(s.value),A+=hl;return{times:void 0,keyframes:c,duration:A-hl,ease:"linear"}}const kT={anticipate:sT,backInOut:lT,circInOut:cT};function UN(n){return n in kT}class _h extends yT{constructor(o){super(o);const{name:r,motionValue:s,element:c,keyframes:A}=this.options;this.resolver=new LT(A,(E,d)=>this.onKeyframesResolved(E,d),r,s,c),this.resolver.scheduleResolve()}initPlayback(o,r){var s;let{duration:c=300,times:A,ease:E,type:d,motionValue:f,name:h,startTime:R}=this.options;if(!(!((s=f.owner)===null||s===void 0)&&s.current))return!1;if(typeof E=="string"&&dl()&&UN(E)&&(E=kT[E]),bN(this.options)){const{onComplete:O,onUpdate:y,motionValue:H,element:k,...B}=this.options,g=GN(o,B);o=g.keyframes,o.length===1&&(o[1]=o[0]),c=g.duration,A=g.times,E=g.ease,d="keyframes"}const m=BN(f.owner.current,h,o,{...this.options,duration:c,times:A,ease:E});return m.startTime=R??this.calcStartTime(),this.pendingTimeline?(jh(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:O}=this.options;f.set(Cl(o,this.options,r)),O&&O(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:c,times:A,type:d,ease:E,keyframes:o}}get duration(){const{resolved:o}=this;if(!o)return 0;const{duration:r}=o;return Ca(r)}get time(){const{resolved:o}=this;if(!o)return 0;const{animation:r}=o;return Ca(r.currentTime||0)}set time(o){const{resolved:r}=this;if(!r)return;const{animation:s}=r;s.currentTime=Oa(o)}get speed(){const{resolved:o}=this;if(!o)return 1;const{animation:r}=o;return r.playbackRate}set speed(o){const{resolved:r}=this;if(!r)return;const{animation:s}=r;s.playbackRate=o}get state(){const{resolved:o}=this;if(!o)return"idle";const{animation:r}=o;return r.playState}get startTime(){const{resolved:o}=this;if(!o)return null;const{animation:r}=o;return r.startTime}attachTimeline(o){if(!this._resolved)this.pendingTimeline=o;else{const{resolved:r}=this;if(!r)return Pt;const{animation:s}=r;jh(s,o)}return Pt}play(){if(this.isStopped)return;const{resolved:o}=this;if(!o)return;const{animation:r}=o;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:o}=this;if(!o)return;const{animation:r}=o;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:o}=this;if(!o)return;const{animation:r,keyframes:s,duration:c,type:A,ease:E,times:d}=o;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:R,onComplete:m,element:O,...y}=this.options,H=new Xc({...y,keyframes:s,duration:c,type:A,ease:E,times:d,isGenerator:!0}),k=Oa(this.time);h.setWithVelocity(H.sample(k-hl).value,H.sample(k).value,hl)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:o}=this;o&&o.animation.finish()}cancel(){const{resolved:o}=this;o&&o.animation.cancel()}static supports(o){const{motionValue:r,name:s,repeatDelay:c,repeatType:A,damping:E,type:d}=o;return vN()&&s&&MN.has(s)&&r&&r.owner&&r.owner.current instanceof HTMLElement&&!r.owner.getProps().onUpdate&&!c&&A!=="mirror"&&E!==0&&d!=="inertia"}}const FN=qc(()=>window.ScrollTimeline!==void 0);class kN{constructor(o){this.stop=()=>this.runAll("stop"),this.animations=o.filter(Boolean)}then(o,r){return Promise.all(this.animations).then(o).catch(r)}getAll(o){return this.animations[0][o]}setAll(o,r){for(let s=0;s<this.animations.length;s++)this.animations[s][o]=r}attachTimeline(o,r){const s=this.animations.map(c=>FN()&&c.attachTimeline?c.attachTimeline(o):r(c));return()=>{s.forEach((c,A)=>{c&&c(),this.animations[A].stop()})}}get time(){return this.getAll("time")}set time(o){this.setAll("time",o)}get speed(){return this.getAll("speed")}set speed(o){this.setAll("speed",o)}get startTime(){return this.getAll("startTime")}get duration(){let o=0;for(let r=0;r<this.animations.length;r++)o=Math.max(o,this.animations[r].duration);return o}runAll(o){this.animations.forEach(r=>r[o]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function wN({when:n,delay:o,delayChildren:r,staggerChildren:s,staggerDirection:c,repeat:A,repeatType:E,repeatDelay:d,from:f,elapsed:h,...R}){return!!Object.keys(R).length}const Qc=(n,o,r,s={},c,A)=>E=>{const d=kc(s,n)||{},f=d.delay||s.delay||0;let{elapsed:h=0}=s;h=h-Oa(f);let R={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:o.getVelocity(),...d,delay:-h,onUpdate:O=>{o.set(O),d.onUpdate&&d.onUpdate(O)},onComplete:()=>{E(),d.onComplete&&d.onComplete()},name:n,motionValue:o,element:A?void 0:c};wN(d)||(R={...R,...up(n,R)}),R.duration&&(R.duration=Oa(R.duration)),R.repeatDelay&&(R.repeatDelay=Oa(R.repeatDelay)),R.from!==void 0&&(R.keyframes[0]=R.from);let m=!1;if((R.type===!1||R.duration===0&&!R.repeatDelay)&&(R.duration=0,R.delay===0&&(m=!0)),m&&!A&&o.get()!==void 0){const O=Cl(R.keyframes,d);if(O!==void 0)return Ue.update(()=>{R.onUpdate(O),R.onComplete()}),new kN([])}return!A&&_h.supports(R)?new _h(R):new Xc(R)},VN=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),xN=n=>Rc(n)?n[n.length-1]||0:n;function $c(n,o){n.indexOf(o)===-1&&n.push(o)}function eE(n,o){const r=n.indexOf(o);r>-1&&n.splice(r,1)}class tE{constructor(){this.subscriptions=[]}add(o){return $c(this.subscriptions,o),()=>eE(this.subscriptions,o)}notify(o,r,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](o,r,s);else for(let A=0;A<c;A++){const E=this.subscriptions[A];E&&E(o,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Jh=30,KN=n=>!isNaN(parseFloat(n));class YN{constructor(o,r={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{const A=ta.now();this.updatedAt!==A&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(o),this.owner=r.owner}setCurrent(o){this.current=o,this.updatedAt=ta.now(),this.canTrackVelocity===null&&o!==void 0&&(this.canTrackVelocity=KN(this.current))}setPrevFrameValue(o=this.current){this.prevFrameValue=o,this.prevUpdatedAt=this.updatedAt}onChange(o){return this.on("change",o)}on(o,r){this.events[o]||(this.events[o]=new tE);const s=this.events[o].add(r);return o==="change"?()=>{s(),Ue.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const o in this.events)this.events[o].clear()}attach(o,r){this.passiveEffect=o,this.stopPassiveEffect=r}set(o,r=!0){!r||!this.passiveEffect?this.updateAndNotify(o,r):this.passiveEffect(o,this.updateAndNotify)}setWithVelocity(o,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=o,this.prevUpdatedAt=this.updatedAt-s}jump(o,r=!0){this.updateAndNotify(o),this.prev=o,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const o=ta.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||o-this.updatedAt>Jh)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Jh);return DT(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(o){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=o(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Bo(n,o){return new YN(n,o)}function WN(n,o,r){n.hasValue(o)?n.getValue(o).set(r):n.addValue(o,Bo(r))}function zN(n,o){const r=Ol(n,o);let{transitionEnd:s={},transition:c={},...A}=r||{};A={...A,...s};for(const E in A){const d=xN(A[E]);WN(n,E,d)}}const aE=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),jN="framerAppearId",wT="data-"+aE(jN);function VT(n){return n.props[wT]}const ct=n=>!!(n&&n.getVelocity);function _N(n){return!!(ct(n)&&n.add)}function yc(n,o){const r=n.getValue("willChange");if(_N(r))return r.add(o)}function JN({protectedKeys:n,needsAnimating:o},r){const s=n.hasOwnProperty(r)&&o[r]!==!0;return o[r]=!1,s}function xT(n,o,{delay:r=0,transitionOverride:s,type:c}={}){var A;let{transition:E=n.getDefaultTransition(),transitionEnd:d,...f}=o;s&&(E=s);const h=[],R=c&&n.animationState&&n.animationState.getState()[c];for(const m in f){const O=n.getValue(m,(A=n.latestValues[m])!==null&&A!==void 0?A:null),y=f[m];if(y===void 0||R&&JN(R,m))continue;const H={delay:r,...kc(E||{},m)};let k=!1;if(window.MotionHandoffAnimation){const g=VT(n);if(g){const b=window.MotionHandoffAnimation(g,m,Ue);b!==null&&(H.startTime=b,k=!0)}}yc(n,m),O.start(Qc(m,O,y,n.shouldReduceMotion&&Ln.has(m)?{type:!1}:H,n,k));const B=O.animation;B&&h.push(B)}return d&&Promise.all(h).then(()=>{Ue.update(()=>{d&&zN(n,d)})}),h}function Mc(n,o,r={}){var s;const c=Ol(n,o,r.type==="exit"?(s=n.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:A=n.getDefaultTransition()||{}}=c||{};r.transitionOverride&&(A=r.transitionOverride);const E=c?()=>Promise.all(xT(n,c,r)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:R=0,staggerChildren:m,staggerDirection:O}=A;return ZN(n,o,R+h,m,O,r)}:()=>Promise.resolve(),{when:f}=A;if(f){const[h,R]=f==="beforeChildren"?[E,d]:[d,E];return h().then(()=>R())}else return Promise.all([E(),d(r.delay)])}function ZN(n,o,r=0,s=0,c=1,A){const E=[],d=(n.variantChildren.size-1)*s,f=c===1?(h=0)=>h*s:(h=0)=>d-h*s;return Array.from(n.variantChildren).sort(XN).forEach((h,R)=>{h.notify("AnimationStart",o),E.push(Mc(h,o,{...A,delay:r+f(R)}).then(()=>h.notify("AnimationComplete",o)))}),Promise.all(E)}function XN(n,o){return n.sortNodePosition(o)}function qN(n,o,r={}){n.notify("AnimationStart",o);let s;if(Array.isArray(o)){const c=o.map(A=>Mc(n,A,r));s=Promise.all(c)}else if(typeof o=="string")s=Mc(n,o,r);else{const c=typeof o=="function"?Ol(n,o,r.custom):o;s=Promise.all(xT(n,c,r))}return s.then(()=>{n.notify("AnimationComplete",o)})}const QN=Fc.length;function KT(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?KT(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const o={};for(let r=0;r<QN;r++){const s=Fc[r],c=n.props[s];(Mo(c)||c===!1)&&(o[s]=c)}return o}const $N=[...Uc].reverse(),eg=Uc.length;function tg(n){return o=>Promise.all(o.map(({animation:r,options:s})=>qN(n,r,s)))}function ag(n){let o=tg(n),r=Zh(),s=!0;const c=f=>(h,R)=>{var m;const O=Ol(n,R,f==="exit"?(m=n.presenceContext)===null||m===void 0?void 0:m.custom:void 0);if(O){const{transition:y,transitionEnd:H,...k}=O;h={...h,...k,...H}}return h};function A(f){o=f(n)}function E(f){const{props:h}=n,R=KT(n.parent)||{},m=[],O=new Set;let y={},H=1/0;for(let B=0;B<eg;B++){const g=$N[B],b=r[g],x=h[g]!==void 0?h[g]:R[g],z=Mo(x),Z=g===f?b.isActive:null;Z===!1&&(H=B);let ne=x===R[g]&&x!==h[g]&&z;if(ne&&s&&n.manuallyAnimateOnMount&&(ne=!1),b.protectedKeys={...y},!b.isActive&&Z===null||!x&&!b.prevProp||ml(x)||typeof x=="boolean")continue;const Q=ng(b.prevProp,x);let j=Q||g===f&&b.isActive&&!ne&&z||B>H&&z,ie=!1;const Se=Array.isArray(x)?x:[x];let ye=Se.reduce(c(g),{});Z===!1&&(ye={});const{prevResolvedValues:Me={}}=b,X={...Me,...ye},re=K=>{j=!0,O.has(K)&&(ie=!0,O.delete(K)),b.needsAnimating[K]=!0;const _=n.getValue(K);_&&(_.liveStyle=!1)};for(const K in X){const _=ye[K],Te=Me[K];if(y.hasOwnProperty(K))continue;let Ee=!1;Rc(_)&&Rc(Te)?Ee=!eT(_,Te):Ee=_!==Te,Ee?_!=null?re(K):O.add(K):_!==void 0&&O.has(K)?re(K):b.protectedKeys[K]=!0}b.prevProp=x,b.prevResolvedValues=ye,b.isActive&&(y={...y,...ye}),s&&n.blockInitialAnimation&&(j=!1),j&&(!(ne&&Q)||ie)&&m.push(...Se.map(K=>({animation:K,options:{type:g}})))}if(O.size){const B={};O.forEach(g=>{const b=n.getBaseTarget(g),x=n.getValue(g);x&&(x.liveStyle=!0),B[g]=b??null}),m.push({animation:B})}let k=!!m.length;return s&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(k=!1),s=!1,k?o(m):Promise.resolve()}function d(f,h){var R;if(r[f].isActive===h)return Promise.resolve();(R=n.variantChildren)===null||R===void 0||R.forEach(O=>{var y;return(y=O.animationState)===null||y===void 0?void 0:y.setActive(f,h)}),r[f].isActive=h;const m=E(f);for(const O in r)r[O].protectedKeys={};return m}return{animateChanges:E,setActive:d,setAnimateFunction:A,getState:()=>r,reset:()=>{r=Zh(),s=!0}}}function ng(n,o){return typeof o=="string"?o!==n:Array.isArray(o)?!eT(o,n):!1}function Cn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Zh(){return{animate:Cn(!0),whileInView:Cn(),whileHover:Cn(),whileTap:Cn(),whileDrag:Cn(),whileFocus:Cn(),exit:Cn()}}class en{constructor(o){this.isMounted=!1,this.node=o}update(){}}class ig extends en{constructor(o){super(o),o.animationState||(o.animationState=ag(o))}updateAnimationControlsSubscription(){const{animate:o}=this.node.getProps();ml(o)&&(this.unmountControls=o.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:o}=this.node.getProps(),{animate:r}=this.node.prevProps||{};o!==r&&this.updateAnimationControlsSubscription()}unmount(){var o;this.node.animationState.reset(),(o=this.unmountControls)===null||o===void 0||o.call(this)}}let og=0;class rg extends en{constructor(){super(...arguments),this.id=og++}update(){if(!this.node.presenceContext)return;const{isPresent:o,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||o===s)return;const c=this.node.animationState.setActive("exit",!o);r&&!o&&c.then(()=>r(this.id))}mount(){const{register:o}=this.node.presenceContext||{};o&&(this.unmount=o(this.id))}unmount(){}}const lg={animation:{Feature:ig},exit:{Feature:rg}},Zt={x:!1,y:!1};function YT(){return Zt.x||Zt.y}function sg(n,o,r){var s;if(n instanceof Element)return[n];if(typeof n=="string"){let c=document;const A=(s=void 0)!==null&&s!==void 0?s:c.querySelectorAll(n);return A?Array.from(A):[]}return Array.from(n)}function WT(n,o){const r=sg(n),s=new AbortController,c={passive:!0,...o,signal:s.signal};return[r,c,()=>s.abort()]}function Xh(n){return o=>{o.pointerType==="touch"||YT()||n(o)}}function ug(n,o,r={}){const[s,c,A]=WT(n,r),E=Xh(d=>{const{target:f}=d,h=o(d);if(typeof h!="function"||!f)return;const R=Xh(m=>{h(m),f.removeEventListener("pointerleave",R)});f.addEventListener("pointerleave",R,c)});return s.forEach(d=>{d.addEventListener("pointerenter",E,c)}),A}const zT=(n,o)=>o?n===o?!0:zT(n,o.parentElement):!1,nE=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,cg=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Eg(n){return cg.has(n.tagName)||n.tabIndex!==-1}const po=new WeakSet;function qh(n){return o=>{o.key==="Enter"&&n(o)}}function rc(n,o){n.dispatchEvent(new PointerEvent("pointer"+o,{isPrimary:!0,bubbles:!0}))}const Sg=(n,o)=>{const r=n.currentTarget;if(!r)return;const s=qh(()=>{if(po.has(r))return;rc(r,"down");const c=qh(()=>{rc(r,"up")}),A=()=>rc(r,"cancel");r.addEventListener("keyup",c,o),r.addEventListener("blur",A,o)});r.addEventListener("keydown",s,o),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),o)};function Qh(n){return nE(n)&&!YT()}function Ag(n,o,r={}){const[s,c,A]=WT(n,r),E=d=>{const f=d.currentTarget;if(!Qh(d)||po.has(f))return;po.add(f);const h=o(d),R=(y,H)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",O),!(!Qh(y)||!po.has(f))&&(po.delete(f),typeof h=="function"&&h(y,{success:H}))},m=y=>{R(y,r.useGlobalTarget||zT(f,y.target))},O=y=>{R(y,!1)};window.addEventListener("pointerup",m,c),window.addEventListener("pointercancel",O,c)};return s.forEach(d=>{!Eg(d)&&d.getAttribute("tabindex")===null&&(d.tabIndex=0),(r.useGlobalTarget?window:d).addEventListener("pointerdown",E,c),d.addEventListener("focus",h=>Sg(h,c),c)}),A}function dg(n){return n==="x"||n==="y"?Zt[n]?null:(Zt[n]=!0,()=>{Zt[n]=!1}):Zt.x||Zt.y?null:(Zt.x=Zt.y=!0,()=>{Zt.x=Zt.y=!1})}function Fo(n){return{point:{x:n.pageX,y:n.pageY}}}const hg=n=>o=>nE(o)&&n(o,Fo(o));function vo(n,o,r,s={passive:!0}){return n.addEventListener(o,r,s),()=>n.removeEventListener(o,r)}function Io(n,o,r,s){return vo(n,o,hg(r),s)}const $h=(n,o)=>Math.abs(n-o);function fg(n,o){const r=$h(n.x,o.x),s=$h(n.y,o.y);return Math.sqrt(r**2+s**2)}class jT{constructor(o,r,{transformPagePoint:s,contextWindow:c,dragSnapToOrigin:A=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=sc(this.lastMoveEventInfo,this.history),O=this.startEvent!==null,y=fg(m.offset,{x:0,y:0})>=3;if(!O&&!y)return;const{point:H}=m,{timestamp:k}=lt;this.history.push({...H,timestamp:k});const{onStart:B,onMove:g}=this.handlers;O||(B&&B(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,m)},this.handlePointerMove=(m,O)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=lc(O,this.transformPagePoint),Ue.update(this.updatePoint,!0)},this.handlePointerUp=(m,O)=>{this.end();const{onEnd:y,onSessionEnd:H,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const B=sc(m.type==="pointercancel"?this.lastMoveEventInfo:lc(O,this.transformPagePoint),this.history);this.startEvent&&y&&y(m,B),H&&H(m,B)},!nE(o))return;this.dragSnapToOrigin=A,this.handlers=r,this.transformPagePoint=s,this.contextWindow=c||window;const E=Fo(o),d=lc(E,this.transformPagePoint),{point:f}=d,{timestamp:h}=lt;this.history=[{...f,timestamp:h}];const{onSessionStart:R}=r;R&&R(o,sc(d,this.history)),this.removeListeners=Uo(Io(this.contextWindow,"pointermove",this.handlePointerMove),Io(this.contextWindow,"pointerup",this.handlePointerUp),Io(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(o){this.handlers=o}end(){this.removeListeners&&this.removeListeners(),qa(this.updatePoint)}}function lc(n,o){return o?{point:o(n.point)}:n}function ef(n,o){return{x:n.x-o.x,y:n.y-o.y}}function sc({point:n},o){return{point:n,delta:ef(n,_T(o)),offset:ef(n,Tg(o)),velocity:Rg(o,.1)}}function Tg(n){return n[0]}function _T(n){return n[n.length-1]}function Rg(n,o){if(n.length<2)return{x:0,y:0};let r=n.length-1,s=null;const c=_T(n);for(;r>=0&&(s=n[r],!(c.timestamp-s.timestamp>Oa(o)));)r--;if(!s)return{x:0,y:0};const A=Ca(c.timestamp-s.timestamp);if(A===0)return{x:0,y:0};const E={x:(c.x-s.x)/A,y:(c.y-s.y)/A};return E.x===1/0&&(E.x=0),E.y===1/0&&(E.y=0),E}function di(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const JT=1e-4,mg=1-JT,Og=1+JT,ZT=.01,Cg=0-ZT,pg=0+ZT;function Bt(n){return n.max-n.min}function Ng(n,o,r){return Math.abs(n-o)<=r}function tf(n,o,r,s=.5){n.origin=s,n.originPoint=ke(o.min,o.max,n.origin),n.scale=Bt(r)/Bt(o),n.translate=ke(r.min,r.max,n.origin)-n.originPoint,(n.scale>=mg&&n.scale<=Og||isNaN(n.scale))&&(n.scale=1),(n.translate>=Cg&&n.translate<=pg||isNaN(n.translate))&&(n.translate=0)}function Lo(n,o,r,s){tf(n.x,o.x,r.x,s?s.originX:void 0),tf(n.y,o.y,r.y,s?s.originY:void 0)}function af(n,o,r){n.min=r.min+o.min,n.max=n.min+Bt(o)}function gg(n,o,r){af(n.x,o.x,r.x),af(n.y,o.y,r.y)}function nf(n,o,r){n.min=o.min-r.min,n.max=n.min+Bt(o)}function yo(n,o,r){nf(n.x,o.x,r.x),nf(n.y,o.y,r.y)}function Ig(n,{min:o,max:r},s){return o!==void 0&&n<o?n=s?ke(o,n,s.min):Math.max(n,o):r!==void 0&&n>r&&(n=s?ke(r,n,s.max):Math.min(n,r)),n}function of(n,o,r){return{min:o!==void 0?n.min+o:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function Lg(n,{top:o,left:r,bottom:s,right:c}){return{x:of(n.x,r,c),y:of(n.y,o,s)}}function rf(n,o){let r=o.min-n.min,s=o.max-n.max;return o.max-o.min<n.max-n.min&&([r,s]=[s,r]),{min:r,max:s}}function yg(n,o){return{x:rf(n.x,o.x),y:rf(n.y,o.y)}}function Mg(n,o){let r=.5;const s=Bt(n),c=Bt(o);return c>s?r=Oi(o.min,o.max-s,n.min):s>c&&(r=Oi(n.min,n.max-c,o.min)),pa(0,1,r)}function Dg(n,o){const r={};return o.min!==void 0&&(r.min=o.min-n.min),o.max!==void 0&&(r.max=o.max-n.min),r}const Dc=.35;function Pg(n=Dc){return n===!1?n=0:n===!0&&(n=Dc),{x:lf(n,"left","right"),y:lf(n,"top","bottom")}}function lf(n,o,r){return{min:sf(n,o),max:sf(n,r)}}function sf(n,o){return typeof n=="number"?n:n[o]||0}const uf=()=>({translate:0,scale:1,origin:0,originPoint:0}),hi=()=>({x:uf(),y:uf()}),cf=()=>({min:0,max:0}),ze=()=>({x:cf(),y:cf()});function Yt(n){return[n("x"),n("y")]}function XT({top:n,left:o,right:r,bottom:s}){return{x:{min:o,max:r},y:{min:n,max:s}}}function Bg({x:n,y:o}){return{top:o.min,right:n.max,bottom:o.max,left:n.min}}function vg(n,o){if(!o)return n;const r=o({x:n.left,y:n.top}),s=o({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function uc(n){return n===void 0||n===1}function Pc({scale:n,scaleX:o,scaleY:r}){return!uc(n)||!uc(o)||!uc(r)}function pn(n){return Pc(n)||qT(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function qT(n){return Ef(n.x)||Ef(n.y)}function Ef(n){return n&&n!=="0%"}function fl(n,o,r){const s=n-r,c=o*s;return r+c}function Sf(n,o,r,s,c){return c!==void 0&&(n=fl(n,c,s)),fl(n,r,s)+o}function Bc(n,o=0,r=1,s,c){n.min=Sf(n.min,o,r,s,c),n.max=Sf(n.max,o,r,s,c)}function QT(n,{x:o,y:r}){Bc(n.x,o.translate,o.scale,o.originPoint),Bc(n.y,r.translate,r.scale,r.originPoint)}const Af=.999999999999,df=1.0000000000001;function Hg(n,o,r,s=!1){const c=r.length;if(!c)return;o.x=o.y=1;let A,E;for(let d=0;d<c;d++){A=r[d],E=A.projectionDelta;const{visualElement:f}=A.options;f&&f.props.style&&f.props.style.display==="contents"||(s&&A.options.layoutScroll&&A.scroll&&A!==A.root&&Ti(n,{x:-A.scroll.offset.x,y:-A.scroll.offset.y}),E&&(o.x*=E.x.scale,o.y*=E.y.scale,QT(n,E)),s&&pn(A.latestValues)&&Ti(n,A.latestValues))}o.x<df&&o.x>Af&&(o.x=1),o.y<df&&o.y>Af&&(o.y=1)}function fi(n,o){n.min=n.min+o,n.max=n.max+o}function hf(n,o,r,s,c=.5){const A=ke(n.min,n.max,c);Bc(n,o,r,A,s)}function Ti(n,o){hf(n.x,o.x,o.scaleX,o.scale,o.originX),hf(n.y,o.y,o.scaleY,o.scale,o.originY)}function $T(n,o){return XT(vg(n.getBoundingClientRect(),o))}function bg(n,o,r){const s=$T(n,r),{scroll:c}=o;return c&&(fi(s.x,c.offset.x),fi(s.y,c.offset.y)),s}const eR=({current:n})=>n?n.ownerDocument.defaultView:null,Gg=new WeakMap;class Ug{constructor(o){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ze(),this.visualElement=o}start(o,{snapToCursor:r=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const c=R=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Fo(R).point)},A=(R,m)=>{const{drag:O,dragPropagation:y,onDragStart:H}=this.getProps();if(O&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dg(O),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yt(B=>{let g=this.getAxisMotionValue(B).get()||0;if(ea.test(g)){const{projection:b}=this.visualElement;if(b&&b.layout){const x=b.layout.layoutBox[B];x&&(g=Bt(x)*(parseFloat(g)/100))}}this.originPoint[B]=g}),H&&Ue.postRender(()=>H(R,m)),yc(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},E=(R,m)=>{const{dragPropagation:O,dragDirectionLock:y,onDirectionLock:H,onDrag:k}=this.getProps();if(!O&&!this.openDragLock)return;const{offset:B}=m;if(y&&this.currentDirection===null){this.currentDirection=Fg(B),this.currentDirection!==null&&H&&H(this.currentDirection);return}this.updateAxis("x",m.point,B),this.updateAxis("y",m.point,B),this.visualElement.render(),k&&k(R,m)},d=(R,m)=>this.stop(R,m),f=()=>Yt(R=>{var m;return this.getAnimationState(R)==="paused"&&((m=this.getAxisMotionValue(R).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new jT(o,{onSessionStart:c,onStart:A,onMove:E,onSessionEnd:d,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:eR(this.visualElement)})}stop(o,r){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:c}=r;this.startAnimation(c);const{onDragEnd:A}=this.getProps();A&&Ue.postRender(()=>A(o,r))}cancel(){this.isDragging=!1;const{projection:o,animationState:r}=this.visualElement;o&&(o.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(o,r,s){const{drag:c}=this.getProps();if(!s||!ol(o,c,this.currentDirection))return;const A=this.getAxisMotionValue(o);let E=this.originPoint[o]+s[o];this.constraints&&this.constraints[o]&&(E=Ig(E,this.constraints[o],this.elastic[o])),A.set(E)}resolveConstraints(){var o;const{dragConstraints:r,dragElastic:s}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)===null||o===void 0?void 0:o.layout,A=this.constraints;r&&di(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&c?this.constraints=Lg(c.layoutBox,r):this.constraints=!1,this.elastic=Pg(s),A!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&Yt(E=>{this.constraints!==!1&&this.getAxisMotionValue(E)&&(this.constraints[E]=Dg(c.layoutBox[E],this.constraints[E]))})}resolveRefConstraints(){const{dragConstraints:o,onMeasureDragConstraints:r}=this.getProps();if(!o||!di(o))return!1;const s=o.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const A=bg(s,c.root,this.visualElement.getTransformPagePoint());let E=yg(c.layout.layoutBox,A);if(r){const d=r(Bg(E));this.hasMutatedConstraints=!!d,d&&(E=XT(d))}return E}startAnimation(o){const{drag:r,dragMomentum:s,dragElastic:c,dragTransition:A,dragSnapToOrigin:E,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},h=Yt(R=>{if(!ol(R,r,this.currentDirection))return;let m=f&&f[R]||{};E&&(m={min:0,max:0});const O=c?200:1e6,y=c?40:1e7,H={type:"inertia",velocity:s?o[R]:0,bounceStiffness:O,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...A,...m};return this.startAxisValueAnimation(R,H)});return Promise.all(h).then(d)}startAxisValueAnimation(o,r){const s=this.getAxisMotionValue(o);return yc(this.visualElement,o),s.start(Qc(o,s,0,r,this.visualElement,!1))}stopAnimation(){Yt(o=>this.getAxisMotionValue(o).stop())}pauseAnimation(){Yt(o=>{var r;return(r=this.getAxisMotionValue(o).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(o){var r;return(r=this.getAxisMotionValue(o).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(o){const r=`_drag${o.toUpperCase()}`,s=this.visualElement.getProps(),c=s[r];return c||this.visualElement.getValue(o,(s.initial?s.initial[o]:void 0)||0)}snapToCursor(o){Yt(r=>{const{drag:s}=this.getProps();if(!ol(r,s,this.currentDirection))return;const{projection:c}=this.visualElement,A=this.getAxisMotionValue(r);if(c&&c.layout){const{min:E,max:d}=c.layout.layoutBox[r];A.set(o[r]-ke(E,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:o,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!di(r)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Yt(E=>{const d=this.getAxisMotionValue(E);if(d&&this.constraints!==!1){const f=d.get();c[E]=Mg({min:f,max:f},this.constraints[E])}});const{transformTemplate:A}=this.visualElement.getProps();this.visualElement.current.style.transform=A?A({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Yt(E=>{if(!ol(E,o,null))return;const d=this.getAxisMotionValue(E),{min:f,max:h}=this.constraints[E];d.set(ke(f,h,c[E]))})}addListeners(){if(!this.visualElement.current)return;Gg.set(this.visualElement,this);const o=this.visualElement.current,r=Io(o,"pointerdown",f=>{const{drag:h,dragListener:R=!0}=this.getProps();h&&R&&this.start(f)}),s=()=>{const{dragConstraints:f}=this.getProps();di(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,A=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Ue.read(s);const E=vo(window,"resize",()=>this.scalePositionWithinConstraints()),d=c.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(Yt(R=>{const m=this.getAxisMotionValue(R);m&&(this.originPoint[R]+=f[R].translate,m.set(m.get()+f[R].translate))}),this.visualElement.render())}));return()=>{E(),r(),A(),d&&d()}}getProps(){const o=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:A=!1,dragElastic:E=Dc,dragMomentum:d=!0}=o;return{...o,drag:r,dragDirectionLock:s,dragPropagation:c,dragConstraints:A,dragElastic:E,dragMomentum:d}}}function ol(n,o,r){return(o===!0||o===n)&&(r===null||r===n)}function Fg(n,o=10){let r=null;return Math.abs(n.y)>o?r="y":Math.abs(n.x)>o&&(r="x"),r}class kg extends en{constructor(o){super(o),this.removeGroupControls=Pt,this.removeListeners=Pt,this.controls=new Ug(o)}mount(){const{dragControls:o}=this.node.getProps();o&&(this.removeGroupControls=o.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pt}unmount(){this.removeGroupControls(),this.removeListeners()}}const ff=n=>(o,r)=>{n&&Ue.postRender(()=>n(o,r))};class wg extends en{constructor(){super(...arguments),this.removePointerDownListener=Pt}onPointerDown(o){this.session=new jT(o,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:eR(this.node)})}createPanHandlers(){const{onPanSessionStart:o,onPanStart:r,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:ff(o),onStart:ff(r),onMove:s,onEnd:(A,E)=>{delete this.session,c&&Ue.postRender(()=>c(A,E))}}}mount(){this.removePointerDownListener=Io(this.node.current,"pointerdown",o=>this.onPointerDown(o))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const pl=Y.createContext(null);function Vg(){const n=Y.useContext(pl);if(n===null)return[!0,null];const{isPresent:o,onExitComplete:r,register:s}=n,c=Y.useId();Y.useEffect(()=>s(c),[]);const A=Y.useCallback(()=>r&&r(c),[c,r]);return!o&&r?[!1,A]:[!0]}const iE=Y.createContext({}),tR=Y.createContext({}),sl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Tf(n,o){return o.max===o.min?0:n/(o.max-o.min)*100}const mo={correct:(n,o)=>{if(!o.target)return n;if(typeof n=="string")if(ae.test(n))n=parseFloat(n);else return n;const r=Tf(n,o.target.x),s=Tf(n,o.target.y);return`${r}% ${s}%`}},xg={correct:(n,{treeScale:o,projectionDelta:r})=>{const s=n,c=Qa.parse(n);if(c.length>5)return s;const A=Qa.createTransformer(n),E=typeof c[0]!="number"?1:0,d=r.x.scale*o.x,f=r.y.scale*o.y;c[0+E]/=d,c[1+E]/=f;const h=ke(d,f,.5);return typeof c[2+E]=="number"&&(c[2+E]/=h),typeof c[3+E]=="number"&&(c[3+E]/=h),A(c)}},Tl={};function Kg(n){Object.assign(Tl,n)}const{schedule:oE}=aT(queueMicrotask,!1);class Yg extends Y.Component{componentDidMount(){const{visualElement:o,layoutGroup:r,switchLayoutGroup:s,layoutId:c}=this.props,{projection:A}=o;Kg(Wg),A&&(r.group&&r.group.add(A),s&&s.register&&c&&s.register(A),A.root.didUpdate(),A.addEventListener("animationComplete",()=>{this.safeToRemove()}),A.setOptions({...A.options,onExitComplete:()=>this.safeToRemove()})),sl.hasEverUpdated=!0}getSnapshotBeforeUpdate(o){const{layoutDependency:r,visualElement:s,drag:c,isPresent:A}=this.props,E=s.projection;return E&&(E.isPresent=A,c||o.layoutDependency!==r||r===void 0?E.willUpdate():this.safeToRemove(),o.isPresent!==A&&(A?E.promote():E.relegate()||Ue.postRender(()=>{const d=E.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:o}=this.props.visualElement;o&&(o.root.didUpdate(),oE.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:o,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:c}=o;c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:o}=this.props;o&&o()}render(){return null}}function aR(n){const[o,r]=Vg(),s=Y.useContext(iE);return I.jsx(Yg,{...n,layoutGroup:s,switchLayoutGroup:Y.useContext(tR),isPresent:o,safeToRemove:r})}const Wg={borderRadius:{...mo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:mo,borderTopRightRadius:mo,borderBottomLeftRadius:mo,borderBottomRightRadius:mo,boxShadow:xg},nR=["TopLeft","TopRight","BottomLeft","BottomRight"],zg=nR.length,Rf=n=>typeof n=="string"?parseFloat(n):n,mf=n=>typeof n=="number"||ae.test(n);function jg(n,o,r,s,c,A){c?(n.opacity=ke(0,r.opacity!==void 0?r.opacity:1,_g(s)),n.opacityExit=ke(o.opacity!==void 0?o.opacity:1,0,Jg(s))):A&&(n.opacity=ke(o.opacity!==void 0?o.opacity:1,r.opacity!==void 0?r.opacity:1,s));for(let E=0;E<zg;E++){const d=`border${nR[E]}Radius`;let f=Of(o,d),h=Of(r,d);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||mf(f)===mf(h)?(n[d]=Math.max(ke(Rf(f),Rf(h),s),0),(ea.test(h)||ea.test(f))&&(n[d]+="%")):n[d]=h}(o.rotate||r.rotate)&&(n.rotate=ke(o.rotate||0,r.rotate||0,s))}function Of(n,o){return n[o]!==void 0?n[o]:n.borderRadius}const _g=iR(0,.5,uT),Jg=iR(.5,.95,Pt);function iR(n,o,r){return s=>s<n?0:s>o?1:r(Oi(n,o,s))}function Cf(n,o){n.min=o.min,n.max=o.max}function Kt(n,o){Cf(n.x,o.x),Cf(n.y,o.y)}function pf(n,o){n.translate=o.translate,n.scale=o.scale,n.originPoint=o.originPoint,n.origin=o.origin}function Nf(n,o,r,s,c){return n-=o,n=fl(n,1/r,s),c!==void 0&&(n=fl(n,1/c,s)),n}function Zg(n,o=0,r=1,s=.5,c,A=n,E=n){if(ea.test(o)&&(o=parseFloat(o),o=ke(E.min,E.max,o/100)-E.min),typeof o!="number")return;let d=ke(A.min,A.max,s);n===A&&(d-=o),n.min=Nf(n.min,o,r,d,c),n.max=Nf(n.max,o,r,d,c)}function gf(n,o,[r,s,c],A,E){Zg(n,o[r],o[s],o[c],o.scale,A,E)}const Xg=["x","scaleX","originX"],qg=["y","scaleY","originY"];function If(n,o,r,s){gf(n.x,o,Xg,r?r.x:void 0,s?s.x:void 0),gf(n.y,o,qg,r?r.y:void 0,s?s.y:void 0)}function Lf(n){return n.translate===0&&n.scale===1}function oR(n){return Lf(n.x)&&Lf(n.y)}function yf(n,o){return n.min===o.min&&n.max===o.max}function Qg(n,o){return yf(n.x,o.x)&&yf(n.y,o.y)}function Mf(n,o){return Math.round(n.min)===Math.round(o.min)&&Math.round(n.max)===Math.round(o.max)}function rR(n,o){return Mf(n.x,o.x)&&Mf(n.y,o.y)}function Df(n){return Bt(n.x)/Bt(n.y)}function Pf(n,o){return n.translate===o.translate&&n.scale===o.scale&&n.originPoint===o.originPoint}class $g{constructor(){this.members=[]}add(o){$c(this.members,o),o.scheduleRender()}remove(o){if(eE(this.members,o),o===this.prevLead&&(this.prevLead=void 0),o===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(o){const r=this.members.findIndex(c=>o===c);if(r===0)return!1;let s;for(let c=r;c>=0;c--){const A=this.members[c];if(A.isPresent!==!1){s=A;break}}return s?(this.promote(s),!0):!1}promote(o,r){const s=this.lead;if(o!==s&&(this.prevLead=s,this.lead=o,o.show(),s)){s.instance&&s.scheduleRender(),o.scheduleRender(),o.resumeFrom=s,r&&(o.resumeFrom.preserveOpacity=!0),s.snapshot&&(o.snapshot=s.snapshot,o.snapshot.latestValues=s.animationValues||s.latestValues),o.root&&o.root.isUpdating&&(o.isLayoutDirty=!0);const{crossfade:c}=o.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(o=>{const{options:r,resumingFrom:s}=o;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(o=>{o.instance&&o.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function eI(n,o,r){let s="";const c=n.x.translate/o.x,A=n.y.translate/o.y,E=(r==null?void 0:r.z)||0;if((c||A||E)&&(s=`translate3d(${c}px, ${A}px, ${E}px) `),(o.x!==1||o.y!==1)&&(s+=`scale(${1/o.x}, ${1/o.y}) `),r){const{transformPerspective:h,rotate:R,rotateX:m,rotateY:O,skewX:y,skewY:H}=r;h&&(s=`perspective(${h}px) ${s}`),R&&(s+=`rotate(${R}deg) `),m&&(s+=`rotateX(${m}deg) `),O&&(s+=`rotateY(${O}deg) `),y&&(s+=`skewX(${y}deg) `),H&&(s+=`skewY(${H}deg) `)}const d=n.x.scale*o.x,f=n.y.scale*o.y;return(d!==1||f!==1)&&(s+=`scale(${d}, ${f})`),s||"none"}const tI=(n,o)=>n.depth-o.depth;class aI{constructor(){this.children=[],this.isDirty=!1}add(o){$c(this.children,o),this.isDirty=!0}remove(o){eE(this.children,o),this.isDirty=!0}forEach(o){this.isDirty&&this.children.sort(tI),this.isDirty=!1,this.children.forEach(o)}}function ul(n){const o=ct(n)?n.get():n;return VN(o)?o.toValue():o}function nI(n,o){const r=ta.now(),s=({timestamp:c})=>{const A=c-r;A>=o&&(qa(s),n(A-o))};return Ue.read(s,!0),()=>qa(s)}function iI(n){return n instanceof SVGElement&&n.tagName!=="svg"}function oI(n,o,r){const s=ct(n)?n:Bo(n);return s.start(Qc("",s,o,r)),s.animation}const Nn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},No=typeof window<"u"&&window.MotionDebug!==void 0,cc=["","X","Y","Z"],rI={visibility:"hidden"},Bf=1e3;let lI=0;function Ec(n,o,r,s){const{latestValues:c}=o;c[n]&&(r[n]=c[n],o.setStaticValue(n,0),s&&(s[n]=0))}function lR(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:o}=n.options;if(!o)return;const r=VT(o);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:A}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",Ue,!(c||A))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&lR(s)}function sR({attachResizeListener:n,defaultParent:o,measureScroll:r,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(E={},d=o==null?void 0:o()){this.id=lI++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,No&&(Nn.totalNodes=Nn.resolvedTargetDeltas=Nn.recalculatedProjection=0),this.nodes.forEach(cI),this.nodes.forEach(hI),this.nodes.forEach(fI),this.nodes.forEach(EI),No&&window.MotionDebug.record(Nn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=E,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new aI)}addEventListener(E,d){return this.eventHandlers.has(E)||this.eventHandlers.set(E,new tE),this.eventHandlers.get(E).add(d)}notifyListeners(E,...d){const f=this.eventHandlers.get(E);f&&f.notify(...d)}hasListeners(E){return this.eventHandlers.has(E)}mount(E,d=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=iI(E),this.instance=E;const{layoutId:f,layout:h,visualElement:R}=this.options;if(R&&!R.current&&R.mount(E),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),d&&(h||f)&&(this.isLayoutDirty=!0),n){let m;const O=()=>this.root.updateBlockedByResize=!1;n(E,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=nI(O,250),sl.hasAnimatedSinceResize&&(sl.hasAnimatedSinceResize=!1,this.nodes.forEach(Hf))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&R&&(f||h)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:O,hasRelativeTargetChanged:y,layout:H})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=this.options.transition||R.getDefaultTransition()||CI,{onLayoutAnimationStart:B,onLayoutAnimationComplete:g}=R.getProps(),b=!this.targetLayout||!rR(this.targetLayout,H)||y,x=!O&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||O&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,x);const z={...kc(k,"layout"),onPlay:B,onComplete:g};(R.shouldReduceMotion||this.options.layoutRoot)&&(z.delay=0,z.type=!1),this.startAnimation(z)}else O||Hf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=H})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const E=this.getStack();E&&E.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,qa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(TI),this.animationId++)}getTransformTemplate(){const{visualElement:E}=this.options;return E&&E.getProps().transformTemplate}willUpdate(E=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lR(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let R=0;R<this.path.length;R++){const m=this.path[R];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),E&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(vf);return}this.isUpdating||this.nodes.forEach(AI),this.isUpdating=!1,this.nodes.forEach(dI),this.nodes.forEach(sI),this.nodes.forEach(uI),this.clearAllSnapshots();const d=ta.now();lt.delta=pa(0,1e3/60,d-lt.timestamp),lt.timestamp=d,lt.isProcessing=!0,tc.update.process(lt),tc.preRender.process(lt),tc.render.process(lt),lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,oE.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(SI),this.sharedNodes.forEach(RI)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ue.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ue.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const E=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,E?E.layoutBox:void 0)}updateScroll(E="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===E&&(d=!1),d){const f=s(this.instance);this.scroll={animationId:this.root.animationId,phase:E,isRoot:f,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!c)return;const E=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!oR(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,R=h!==this.prevTransformTemplateValue;E&&(d||pn(this.latestValues)||R)&&(c(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(E=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return E&&(f=this.removeTransform(f)),pI(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var E;const{visualElement:d}=this.options;if(!d)return ze();const f=d.measureViewportBox();if(!(((E=this.scroll)===null||E===void 0?void 0:E.wasRoot)||this.path.some(NI))){const{scroll:R}=this.root;R&&(fi(f.x,R.offset.x),fi(f.y,R.offset.y))}return f}removeElementScroll(E){var d;const f=ze();if(Kt(f,E),!((d=this.scroll)===null||d===void 0)&&d.wasRoot)return f;for(let h=0;h<this.path.length;h++){const R=this.path[h],{scroll:m,options:O}=R;R!==this.root&&m&&O.layoutScroll&&(m.wasRoot&&Kt(f,E),fi(f.x,m.offset.x),fi(f.y,m.offset.y))}return f}applyTransform(E,d=!1){const f=ze();Kt(f,E);for(let h=0;h<this.path.length;h++){const R=this.path[h];!d&&R.options.layoutScroll&&R.scroll&&R!==R.root&&Ti(f,{x:-R.scroll.offset.x,y:-R.scroll.offset.y}),pn(R.latestValues)&&Ti(f,R.latestValues)}return pn(this.latestValues)&&Ti(f,this.latestValues),f}removeTransform(E){const d=ze();Kt(d,E);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!pn(h.latestValues))continue;Pc(h.latestValues)&&h.updateSnapshot();const R=ze(),m=h.measurePageBox();Kt(R,m),If(d,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,R)}return pn(this.latestValues)&&If(d,this.latestValues),d}setTargetDelta(E){this.targetDelta=E,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(E){this.options={...this.options,...E,crossfade:E.crossfade!==void 0?E.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(E=!1){var d;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(E||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:O}=this.options;if(!(!this.layout||!(m||O))){if(this.resolvedRelativeTargetAt=lt.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),yo(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ze(),this.targetWithTransforms=ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gg(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),QT(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),yo(this.relativeTargetOrigin,this.target,y.target),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}No&&Nn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Pc(this.parent.latestValues)||qT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var E;const d=this.getLead(),f=!!this.resumingFrom||this!==d;let h=!0;if((this.isProjectionDirty||!((E=this.parent)===null||E===void 0)&&E.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===lt.timestamp&&(h=!1),h)return;const{layout:R,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(R||m))return;Kt(this.layoutCorrected,this.layout.layoutBox);const O=this.treeScale.x,y=this.treeScale.y;Hg(this.layoutCorrected,this.treeScale,this.path,f),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ze());const{target:H}=d;if(!H){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pf(this.prevProjectionDelta.x,this.projectionDelta.x),pf(this.prevProjectionDelta.y,this.projectionDelta.y)),Lo(this.projectionDelta,this.layoutCorrected,H,this.latestValues),(this.treeScale.x!==O||this.treeScale.y!==y||!Pf(this.projectionDelta.x,this.prevProjectionDelta.x)||!Pf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",H)),No&&Nn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(E=!0){var d;if((d=this.options.visualElement)===null||d===void 0||d.scheduleRender(),E){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hi(),this.projectionDelta=hi(),this.projectionDeltaWithTransform=hi()}setAnimationOrigin(E,d=!1){const f=this.snapshot,h=f?f.latestValues:{},R={...this.latestValues},m=hi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const O=ze(),y=f?f.source:void 0,H=this.layout?this.layout.source:void 0,k=y!==H,B=this.getStack(),g=!B||B.members.length<=1,b=!!(k&&!g&&this.options.crossfade===!0&&!this.path.some(OI));this.animationProgress=0;let x;this.mixTargetDelta=z=>{const Z=z/1e3;bf(m.x,E.x,Z),bf(m.y,E.y,Z),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(yo(O,this.layout.layoutBox,this.relativeParent.layout.layoutBox),mI(this.relativeTarget,this.relativeTargetOrigin,O,Z),x&&Qg(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=ze()),Kt(x,this.relativeTarget)),k&&(this.animationValues=R,jg(R,h,this.latestValues,Z,b,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(E){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(qa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ue.update(()=>{sl.hasAnimatedSinceResize=!0,this.currentAnimation=oI(0,Bf,{...E,onUpdate:d=>{this.mixTargetDelta(d),E.onUpdate&&E.onUpdate(d)},onComplete:()=>{E.onComplete&&E.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const E=this.getStack();E&&E.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Bf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const E=this.getLead();let{targetWithTransforms:d,target:f,layout:h,latestValues:R}=E;if(!(!d||!f||!h)){if(this!==E&&this.layout&&h&&uR(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||ze();const m=Bt(this.layout.layoutBox.x);f.x.min=E.target.x.min,f.x.max=f.x.min+m;const O=Bt(this.layout.layoutBox.y);f.y.min=E.target.y.min,f.y.max=f.y.min+O}Kt(d,f),Ti(d,R),Lo(this.projectionDeltaWithTransform,this.layoutCorrected,d,R)}}registerSharedNode(E,d){this.sharedNodes.has(E)||this.sharedNodes.set(E,new $g),this.sharedNodes.get(E).add(d);const h=d.options.initialPromotionConfig;d.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(d):void 0})}isLead(){const E=this.getStack();return E?E.lead===this:!0}getLead(){var E;const{layoutId:d}=this.options;return d?((E=this.getStack())===null||E===void 0?void 0:E.lead)||this:this}getPrevLead(){var E;const{layoutId:d}=this.options;return d?(E=this.getStack())===null||E===void 0?void 0:E.prevLead:void 0}getStack(){const{layoutId:E}=this.options;if(E)return this.root.sharedNodes.get(E)}promote({needsReset:E,transition:d,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),E&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const E=this.getStack();return E?E.relegate(this):!1}resetSkewAndRotation(){const{visualElement:E}=this.options;if(!E)return;let d=!1;const{latestValues:f}=E;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const h={};f.z&&Ec("z",E,h,this.animationValues);for(let R=0;R<cc.length;R++)Ec(`rotate${cc[R]}`,E,h,this.animationValues),Ec(`skew${cc[R]}`,E,h,this.animationValues);E.render();for(const R in h)E.setStaticValue(R,h[R]),this.animationValues&&(this.animationValues[R]=h[R]);E.scheduleRender()}getProjectionStyles(E){var d,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return rI;const h={visibility:""},R=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=ul(E==null?void 0:E.pointerEvents)||"",h.transform=R?R(this.latestValues,""):"none",h;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const k={};return this.options.layoutId&&(k.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,k.pointerEvents=ul(E==null?void 0:E.pointerEvents)||""),this.hasProjected&&!pn(this.latestValues)&&(k.transform=R?R({},""):"none",this.hasProjected=!1),k}const O=m.animationValues||m.latestValues;this.applyTransformsToTarget(),h.transform=eI(this.projectionDeltaWithTransform,this.treeScale,O),R&&(h.transform=R(O,h.transform));const{x:y,y:H}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${H.origin*100}% 0`,m.animationValues?h.opacity=m===this?(f=(d=O.opacity)!==null&&d!==void 0?d:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:O.opacityExit:h.opacity=m===this?O.opacity!==void 0?O.opacity:"":O.opacityExit!==void 0?O.opacityExit:0;for(const k in Tl){if(O[k]===void 0)continue;const{correct:B,applyTo:g}=Tl[k],b=h.transform==="none"?O[k]:B(O[k],m);if(g){const x=g.length;for(let z=0;z<x;z++)h[g[z]]=b}else h[k]=b}return this.options.layoutId&&(h.pointerEvents=m===this?ul(E==null?void 0:E.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(E=>{var d;return(d=E.currentAnimation)===null||d===void 0?void 0:d.stop()}),this.root.nodes.forEach(vf),this.root.sharedNodes.clear()}}}function sI(n){n.updateLayout()}function uI(n){var o;const r=((o=n.resumeFrom)===null||o===void 0?void 0:o.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:c}=n.layout,{animationType:A}=n.options,E=r.source!==n.layout.source;A==="size"?Yt(m=>{const O=E?r.measuredBox[m]:r.layoutBox[m],y=Bt(O);O.min=s[m].min,O.max=O.min+y}):uR(A,r.layoutBox,s)&&Yt(m=>{const O=E?r.measuredBox[m]:r.layoutBox[m],y=Bt(s[m]);O.max=O.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+y)});const d=hi();Lo(d,s,r.layoutBox);const f=hi();E?Lo(f,n.applyTransform(c,!0),r.measuredBox):Lo(f,s,r.layoutBox);const h=!oR(d);let R=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:O,layout:y}=m;if(O&&y){const H=ze();yo(H,r.layoutBox,O.layoutBox);const k=ze();yo(k,s,y.layoutBox),rR(H,k)||(R=!0),m.options.layoutRoot&&(n.relativeTarget=k,n.relativeTargetOrigin=H,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:r,delta:f,layoutDelta:d,hasLayoutChanged:h,hasRelativeTargetChanged:R})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function cI(n){No&&Nn.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function EI(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function SI(n){n.clearSnapshot()}function vf(n){n.clearMeasurements()}function AI(n){n.isLayoutDirty=!1}function dI(n){const{visualElement:o}=n.options;o&&o.getProps().onBeforeLayoutMeasure&&o.notify("BeforeLayoutMeasure"),n.resetTransform()}function Hf(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function hI(n){n.resolveTargetDelta()}function fI(n){n.calcProjection()}function TI(n){n.resetSkewAndRotation()}function RI(n){n.removeLeadSnapshot()}function bf(n,o,r){n.translate=ke(o.translate,0,r),n.scale=ke(o.scale,1,r),n.origin=o.origin,n.originPoint=o.originPoint}function Gf(n,o,r,s){n.min=ke(o.min,r.min,s),n.max=ke(o.max,r.max,s)}function mI(n,o,r,s){Gf(n.x,o.x,r.x,s),Gf(n.y,o.y,r.y,s)}function OI(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const CI={duration:.45,ease:[.4,0,.1,1]},Uf=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Ff=Uf("applewebkit/")&&!Uf("chrome/")?Math.round:Pt;function kf(n){n.min=Ff(n.min),n.max=Ff(n.max)}function pI(n){kf(n.x),kf(n.y)}function uR(n,o,r){return n==="position"||n==="preserve-aspect"&&!Ng(Df(o),Df(r),.2)}function NI(n){var o;return n!==n.root&&((o=n.scroll)===null||o===void 0?void 0:o.wasRoot)}const gI=sR({attachResizeListener:(n,o)=>vo(n,"resize",o),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Sc={current:void 0},cR=sR({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Sc.current){const n=new gI({});n.mount(window),n.setOptions({layoutScroll:!0}),Sc.current=n}return Sc.current},resetTransform:(n,o)=>{n.style.transform=o!==void 0?o:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),II={pan:{Feature:wg},drag:{Feature:kg,ProjectionNode:cR,MeasureLayout:aR}};function wf(n,o,r){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,A=s[c];A&&Ue.postRender(()=>A(o,Fo(o)))}class LI extends en{mount(){const{current:o}=this.node;o&&(this.unmount=ug(o,r=>(wf(this.node,r,"Start"),s=>wf(this.node,s,"End"))))}unmount(){}}class yI extends en{constructor(){super(...arguments),this.isActive=!1}onFocus(){let o=!1;try{o=this.node.current.matches(":focus-visible")}catch{o=!0}!o||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Uo(vo(this.node.current,"focus",()=>this.onFocus()),vo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Vf(n,o,r){const{props:s}=n;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),A=s[c];A&&Ue.postRender(()=>A(o,Fo(o)))}class MI extends en{mount(){const{current:o}=this.node;o&&(this.unmount=Ag(o,r=>(Vf(this.node,r,"Start"),(s,{success:c})=>Vf(this.node,s,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const vc=new WeakMap,Ac=new WeakMap,DI=n=>{const o=vc.get(n.target);o&&o(n)},PI=n=>{n.forEach(DI)};function BI({root:n,...o}){const r=n||document;Ac.has(r)||Ac.set(r,{});const s=Ac.get(r),c=JSON.stringify(o);return s[c]||(s[c]=new IntersectionObserver(PI,{root:n,...o})),s[c]}function vI(n,o,r){const s=BI(o);return vc.set(n,r),s.observe(n),()=>{vc.delete(n),s.unobserve(n)}}const HI={some:0,all:1};class bI extends en{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:o={}}=this.node.getProps(),{root:r,margin:s,amount:c="some",once:A}=o,E={root:r?r.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:HI[c]},d=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,A&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:R,onViewportLeave:m}=this.node.getProps(),O=h?R:m;O&&O(f)};return vI(this.node.current,E,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:o,prevProps:r}=this.node;["amount","margin","root"].some(GI(o,r))&&this.startObserver()}unmount(){}}function GI({viewport:n={}},{viewport:o={}}={}){return r=>n[r]!==o[r]}const UI={inView:{Feature:bI},tap:{Feature:MI},focus:{Feature:yI},hover:{Feature:LI}},FI={layout:{ProjectionNode:cR,MeasureLayout:aR}},rE=Y.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Nl=Y.createContext({}),lE=typeof window<"u",ER=lE?Y.useLayoutEffect:Y.useEffect,SR=Y.createContext({strict:!1});function kI(n,o,r,s,c){var A,E;const{visualElement:d}=Y.useContext(Nl),f=Y.useContext(SR),h=Y.useContext(pl),R=Y.useContext(rE).reducedMotion,m=Y.useRef(null);s=s||f.renderer,!m.current&&s&&(m.current=s(n,{visualState:o,parent:d,props:r,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:R}));const O=m.current,y=Y.useContext(tR);O&&!O.projection&&c&&(O.type==="html"||O.type==="svg")&&wI(m.current,r,c,y);const H=Y.useRef(!1);Y.useInsertionEffect(()=>{O&&H.current&&O.update(r,h)});const k=r[wT],B=Y.useRef(!!k&&!(!((A=window.MotionHandoffIsComplete)===null||A===void 0)&&A.call(window,k))&&((E=window.MotionHasOptimisedAnimation)===null||E===void 0?void 0:E.call(window,k)));return ER(()=>{O&&(H.current=!0,window.MotionIsMounted=!0,O.updateFeatures(),oE.render(O.render),B.current&&O.animationState&&O.animationState.animateChanges())}),Y.useEffect(()=>{O&&(!B.current&&O.animationState&&O.animationState.animateChanges(),B.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,k)}),B.current=!1))}),O}function wI(n,o,r,s){const{layoutId:c,layout:A,drag:E,dragConstraints:d,layoutScroll:f,layoutRoot:h}=o;n.projection=new r(n.latestValues,o["data-framer-portal-id"]?void 0:AR(n.parent)),n.projection.setOptions({layoutId:c,layout:A,alwaysMeasureLayout:!!E||d&&di(d),visualElement:n,animationType:typeof A=="string"?A:"both",initialPromotionConfig:s,layoutScroll:f,layoutRoot:h})}function AR(n){if(n)return n.options.allowProjection!==!1?n.projection:AR(n.parent)}function VI(n,o,r){return Y.useCallback(s=>{s&&n.mount&&n.mount(s),o&&(s?o.mount(s):o.unmount()),r&&(typeof r=="function"?r(s):di(r)&&(r.current=s))},[o])}function gl(n){return ml(n.animate)||Fc.some(o=>Mo(n[o]))}function dR(n){return!!(gl(n)||n.variants)}function xI(n,o){if(gl(n)){const{initial:r,animate:s}=n;return{initial:r===!1||Mo(r)?r:void 0,animate:Mo(s)?s:void 0}}return n.inherit!==!1?o:{}}function KI(n){const{initial:o,animate:r}=xI(n,Y.useContext(Nl));return Y.useMemo(()=>({initial:o,animate:r}),[xf(o),xf(r)])}function xf(n){return Array.isArray(n)?n.join(" "):n}const Kf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ci={};for(const n in Kf)Ci[n]={isEnabled:o=>Kf[n].some(r=>!!o[r])};function YI(n){for(const o in n)Ci[o]={...Ci[o],...n[o]}}const WI=Symbol.for("motionComponentSymbol");function zI({preloadedFeatures:n,createVisualElement:o,useRender:r,useVisualState:s,Component:c}){n&&YI(n);function A(d,f){let h;const R={...Y.useContext(rE),...d,layoutId:jI(d)},{isStatic:m}=R,O=KI(d),y=s(d,m);if(!m&&lE){_I();const H=JI(R);h=H.MeasureLayout,O.visualElement=kI(c,y,R,o,H.ProjectionNode)}return I.jsxs(Nl.Provider,{value:O,children:[h&&O.visualElement?I.jsx(h,{visualElement:O.visualElement,...R}):null,r(c,d,VI(y,O.visualElement,f),y,m,O.visualElement)]})}const E=Y.forwardRef(A);return E[WI]=c,E}function jI({layoutId:n}){const o=Y.useContext(iE).id;return o&&n!==void 0?o+"-"+n:n}function _I(n,o){Y.useContext(SR).strict}function JI(n){const{drag:o,layout:r}=Ci;if(!o&&!r)return{};const s={...o,...r};return{MeasureLayout:o!=null&&o.isEnabled(n)||r!=null&&r.isEnabled(n)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const ZI=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sE(n){return typeof n!="string"||n.includes("-")?!1:!!(ZI.indexOf(n)>-1||/[A-Z]/u.test(n))}function hR(n,{style:o,vars:r},s,c){Object.assign(n.style,o,c&&c.getProjectionStyles(s));for(const A in r)n.style.setProperty(A,r[A])}const fR=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function TR(n,o,r,s){hR(n,o,void 0,s);for(const c in o.attrs)n.setAttribute(fR.has(c)?c:aE(c),o.attrs[c])}function RR(n,{layout:o,layoutId:r}){return Ln.has(n)||n.startsWith("origin")||(o||r!==void 0)&&(!!Tl[n]||n==="opacity")}function uE(n,o,r){var s;const{style:c}=n,A={};for(const E in c)(ct(c[E])||o.style&&ct(o.style[E])||RR(E,n)||((s=r==null?void 0:r.getValue(E))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(A[E]=c[E]);return A}function mR(n,o,r){const s=uE(n,o,r);for(const c in n)if(ct(n[c])||ct(o[c])){const A=Ho.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[A]=n[c]}return s}function cE(n){const o=Y.useRef(null);return o.current===null&&(o.current=n()),o.current}function XI({scrapeMotionValuesFromProps:n,createRenderState:o,onMount:r},s,c,A){const E={latestValues:qI(s,c,A,n),renderState:o()};return r&&(E.mount=d=>r(s,d,E)),E}const OR=n=>(o,r)=>{const s=Y.useContext(Nl),c=Y.useContext(pl),A=()=>XI(n,o,s,c);return r?A():cE(A)};function qI(n,o,r,s){const c={},A=s(n,{});for(const O in A)c[O]=ul(A[O]);let{initial:E,animate:d}=n;const f=gl(n),h=dR(n);o&&h&&!f&&n.inherit!==!1&&(E===void 0&&(E=o.initial),d===void 0&&(d=o.animate));let R=r?r.initial===!1:!1;R=R||E===!1;const m=R?d:E;if(m&&typeof m!="boolean"&&!ml(m)){const O=Array.isArray(m)?m:[m];for(let y=0;y<O.length;y++){const H=Gc(n,O[y]);if(H){const{transitionEnd:k,transition:B,...g}=H;for(const b in g){let x=g[b];if(Array.isArray(x)){const z=R?x.length-1:0;x=x[z]}x!==null&&(c[b]=x)}for(const b in k)c[b]=k[b]}}}return c}const EE=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),CR=()=>({...EE(),attrs:{}}),pR=(n,o)=>o&&typeof n=="number"?o.transform(n):n,QI={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$I=Ho.length;function eL(n,o,r){let s="",c=!0;for(let A=0;A<$I;A++){const E=Ho[A],d=n[E];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(E.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||r){const h=pR(d,zc[E]);if(!f){c=!1;const R=QI[E]||E;s+=`${R}(${h}) `}r&&(o[E]=h)}}return s=s.trim(),r?s=r(o,c?"":s):c&&(s="none"),s}function SE(n,o,r){const{style:s,vars:c,transformOrigin:A}=n;let E=!1,d=!1;for(const f in o){const h=o[f];if(Ln.has(f)){E=!0;continue}else if(dT(f)){c[f]=h;continue}else{const R=pR(h,zc[f]);f.startsWith("origin")?(d=!0,A[f]=R):s[f]=R}}if(o.transform||(E||r?s.transform=eL(o,n.transform,r):s.transform&&(s.transform="none")),d){const{originX:f="50%",originY:h="50%",originZ:R=0}=A;s.transformOrigin=`${f} ${h} ${R}`}}function Yf(n,o,r){return typeof n=="string"?n:ae.transform(o+r*n)}function tL(n,o,r){const s=Yf(o,n.x,n.width),c=Yf(r,n.y,n.height);return`${s} ${c}`}const aL={offset:"stroke-dashoffset",array:"stroke-dasharray"},nL={offset:"strokeDashoffset",array:"strokeDasharray"};function iL(n,o,r=1,s=0,c=!0){n.pathLength=1;const A=c?aL:nL;n[A.offset]=ae.transform(-s);const E=ae.transform(o),d=ae.transform(r);n[A.array]=`${E} ${d}`}function AE(n,{attrX:o,attrY:r,attrScale:s,originX:c,originY:A,pathLength:E,pathSpacing:d=1,pathOffset:f=0,...h},R,m){if(SE(n,h,m),R){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:O,style:y,dimensions:H}=n;O.transform&&(H&&(y.transform=O.transform),delete O.transform),H&&(c!==void 0||A!==void 0||y.transform)&&(y.transformOrigin=tL(H,c!==void 0?c:.5,A!==void 0?A:.5)),o!==void 0&&(O.x=o),r!==void 0&&(O.y=r),s!==void 0&&(O.scale=s),E!==void 0&&iL(O,E,d,f,!1)}const dE=n=>typeof n=="string"&&n.toLowerCase()==="svg",oL={useVisualState:OR({scrapeMotionValuesFromProps:mR,createRenderState:CR,onMount:(n,o,{renderState:r,latestValues:s})=>{Ue.read(()=>{try{r.dimensions=typeof o.getBBox=="function"?o.getBBox():o.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),Ue.render(()=>{AE(r,s,dE(o.tagName),n.transformTemplate),TR(o,r)})}})},rL={useVisualState:OR({scrapeMotionValuesFromProps:uE,createRenderState:EE})};function NR(n,o,r){for(const s in o)!ct(o[s])&&!RR(s,r)&&(n[s]=o[s])}function lL({transformTemplate:n},o){return Y.useMemo(()=>{const r=EE();return SE(r,o,n),Object.assign({},r.vars,r.style)},[o])}function sL(n,o){const r=n.style||{},s={};return NR(s,r,n),Object.assign(s,lL(n,o)),s}function uL(n,o){const r={},s=sL(n,o);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=s,r}const cL=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Rl(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||cL.has(n)}let gR=n=>!Rl(n);function EL(n){n&&(gR=o=>o.startsWith("on")?!Rl(o):n(o))}try{EL(require("@emotion/is-prop-valid").default)}catch{}function SL(n,o,r){const s={};for(const c in n)c==="values"&&typeof n.values=="object"||(gR(c)||r===!0&&Rl(c)||!o&&!Rl(c)||n.draggable&&c.startsWith("onDrag"))&&(s[c]=n[c]);return s}function AL(n,o,r,s){const c=Y.useMemo(()=>{const A=CR();return AE(A,o,dE(s),n.transformTemplate),{...A.attrs,style:{...A.style}}},[o]);if(n.style){const A={};NR(A,n.style,n),c.style={...A,...c.style}}return c}function dL(n=!1){return(r,s,c,{latestValues:A},E)=>{const f=(sE(r)?AL:uL)(s,A,E,r),h=SL(s,typeof r=="string",n),R=r!==Y.Fragment?{...h,...f,ref:c}:{},{children:m}=s,O=Y.useMemo(()=>ct(m)?m.get():m,[m]);return Y.createElement(r,{...R,children:O})}}function hL(n,o){return function(s,{forwardMotionProps:c}={forwardMotionProps:!1}){const E={...sE(s)?oL:rL,preloadedFeatures:n,useRender:dL(c),createVisualElement:o,Component:s};return zI(E)}}const Hc={current:null},IR={current:!1};function fL(){if(IR.current=!0,!!lE)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),o=()=>Hc.current=n.matches;n.addListener(o),o()}else Hc.current=!1}function TL(n,o,r){for(const s in o){const c=o[s],A=r[s];if(ct(c))n.addValue(s,c);else if(ct(A))n.addValue(s,Bo(c,{owner:n}));else if(A!==c)if(n.hasValue(s)){const E=n.getValue(s);E.liveStyle===!0?E.jump(c):E.hasAnimated||E.set(c)}else{const E=n.getStaticValue(s);n.addValue(s,Bo(E!==void 0?E:c,{owner:n}))}}for(const s in r)o[s]===void 0&&n.removeValue(s);return o}const Wf=new WeakMap,RL=[...TT,ut,Qa],mL=n=>RL.find(fT(n)),zf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class OL{scrapeMotionValuesFromProps(o,r,s){return{}}constructor({parent:o,props:r,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:A,visualState:E},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Kc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const O=ta.now();this.renderScheduledAt<O&&(this.renderScheduledAt=O,Ue.render(this.render,!1,!0))};const{latestValues:f,renderState:h}=E;this.latestValues=f,this.baseTarget={...f},this.initialValues=r.initial?{...f}:{},this.renderState=h,this.parent=o,this.props=r,this.presenceContext=s,this.depth=o?o.depth+1:0,this.reducedMotionConfig=c,this.options=d,this.blockInitialAnimation=!!A,this.isControllingVariants=gl(r),this.isVariantNode=dR(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(o&&o.current);const{willChange:R,...m}=this.scrapeMotionValuesFromProps(r,{},this);for(const O in m){const y=m[O];f[O]!==void 0&&ct(y)&&y.set(f[O],!1)}}mount(o){this.current=o,Wf.set(o,this),this.projection&&!this.projection.instance&&this.projection.mount(o),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),IR.current||fL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Hc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Wf.delete(this.current),this.projection&&this.projection.unmount(),qa(this.notifyUpdate),qa(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const r=this.features[o];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(o,r){this.valueSubscriptions.has(o)&&this.valueSubscriptions.get(o)();const s=Ln.has(o),c=r.on("change",d=>{this.latestValues[o]=d,this.props.onUpdate&&Ue.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),A=r.on("renderRequest",this.scheduleRender);let E;window.MotionCheckAppearSync&&(E=window.MotionCheckAppearSync(this,o,r)),this.valueSubscriptions.set(o,()=>{c(),A(),E&&E(),r.owner&&r.stop()})}sortNodePosition(o){return!this.current||!this.sortInstanceNodePosition||this.type!==o.type?0:this.sortInstanceNodePosition(this.current,o.current)}updateFeatures(){let o="animation";for(o in Ci){const r=Ci[o];if(!r)continue;const{isEnabled:s,Feature:c}=r;if(!this.features[o]&&c&&s(this.props)&&(this.features[o]=new c(this)),this.features[o]){const A=this.features[o];A.isMounted?A.update():(A.mount(),A.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ze()}getStaticValue(o){return this.latestValues[o]}setStaticValue(o,r){this.latestValues[o]=r}update(o,r){(o.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=o,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<zf.length;s++){const c=zf[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const A="on"+c,E=o[A];E&&(this.propEventSubscriptions[c]=this.on(c,E))}this.prevMotionValues=TL(this,this.scrapeMotionValuesFromProps(o,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(o){return this.props.variants?this.props.variants[o]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(o){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(o),()=>r.variantChildren.delete(o)}addValue(o,r){const s=this.values.get(o);r!==s&&(s&&this.removeValue(o),this.bindToMotionValue(o,r),this.values.set(o,r),this.latestValues[o]=r.get())}removeValue(o){this.values.delete(o);const r=this.valueSubscriptions.get(o);r&&(r(),this.valueSubscriptions.delete(o)),delete this.latestValues[o],this.removeValueFromRenderState(o,this.renderState)}hasValue(o){return this.values.has(o)}getValue(o,r){if(this.props.values&&this.props.values[o])return this.props.values[o];let s=this.values.get(o);return s===void 0&&r!==void 0&&(s=Bo(r===null?void 0:r,{owner:this}),this.addValue(o,s)),s}readValue(o,r){var s;let c=this.latestValues[o]!==void 0||!this.current?this.latestValues[o]:(s=this.getBaseTargetFromProps(this.props,o))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,o,this.options);return c!=null&&(typeof c=="string"&&(ST(c)||ET(c))?c=parseFloat(c):!mL(c)&&Qa.test(r)&&(c=IT(o,r)),this.setBaseTarget(o,ct(c)?c.get():c)),ct(c)?c.get():c}setBaseTarget(o,r){this.baseTarget[o]=r}getBaseTarget(o){var r;const{initial:s}=this.props;let c;if(typeof s=="string"||typeof s=="object"){const E=Gc(this.props,s,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);E&&(c=E[o])}if(s&&c!==void 0)return c;const A=this.getBaseTargetFromProps(this.props,o);return A!==void 0&&!ct(A)?A:this.initialValues[o]!==void 0&&c===void 0?void 0:this.baseTarget[o]}on(o,r){return this.events[o]||(this.events[o]=new tE),this.events[o].add(r)}notify(o,...r){this.events[o]&&this.events[o].notify(...r)}}class LR extends OL{constructor(){super(...arguments),this.KeyframeResolver=LT}sortInstanceNodePosition(o,r){return o.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(o,r){return o.style?o.style[r]:void 0}removeValueFromRenderState(o,{vars:r,style:s}){delete r[o],delete s[o]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:o}=this.props;ct(o)&&(this.childSubscription=o.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function CL(n){return window.getComputedStyle(n)}class pL extends LR{constructor(){super(...arguments),this.type="html",this.renderInstance=hR}readValueFromInstance(o,r){if(Ln.has(r)){const s=jc(r);return s&&s.default||0}else{const s=CL(o),c=(dT(r)?s.getPropertyValue(r):s[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(o,{transformPagePoint:r}){return $T(o,r)}build(o,r,s){SE(o,r,s.transformTemplate)}scrapeMotionValuesFromProps(o,r,s){return uE(o,r,s)}}class NL extends LR{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ze}getBaseTargetFromProps(o,r){return o[r]}readValueFromInstance(o,r){if(Ln.has(r)){const s=jc(r);return s&&s.default||0}return r=fR.has(r)?r:aE(r),o.getAttribute(r)}scrapeMotionValuesFromProps(o,r,s){return mR(o,r,s)}build(o,r,s){AE(o,r,this.isSVGTag,s.transformTemplate)}renderInstance(o,r,s,c){TR(o,r,s,c)}mount(o){this.isSVGTag=dE(o.tagName),super.mount(o)}}const gL=(n,o)=>sE(n)?new NL(o):new pL(o,{allowProjection:n!==Y.Fragment}),IL=hL({...lg,...UI,...II,...FI},gL),yR=ip(IL);class LL extends Y.Component{getSnapshotBeforeUpdate(o){const r=this.props.childRef.current;if(r&&o.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=r.offsetHeight||0,s.width=r.offsetWidth||0,s.top=r.offsetTop,s.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function yL({children:n,isPresent:o}){const r=Y.useId(),s=Y.useRef(null),c=Y.useRef({width:0,height:0,top:0,left:0}),{nonce:A}=Y.useContext(rE);return Y.useInsertionEffect(()=>{const{width:E,height:d,top:f,left:h}=c.current;if(o||!s.current||!E||!d)return;s.current.dataset.motionPopId=r;const R=document.createElement("style");return A&&(R.nonce=A),document.head.appendChild(R),R.sheet&&R.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${E}px !important;
            height: ${d}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(R)}},[o]),I.jsx(LL,{isPresent:o,childRef:s,sizeRef:c,children:Y.cloneElement(n,{ref:s})})}const ML=({children:n,initial:o,isPresent:r,onExitComplete:s,custom:c,presenceAffectsLayout:A,mode:E})=>{const d=cE(DL),f=Y.useId(),h=Y.useCallback(m=>{d.set(m,!0);for(const O of d.values())if(!O)return;s&&s()},[d,s]),R=Y.useMemo(()=>({id:f,initial:o,isPresent:r,custom:c,onExitComplete:h,register:m=>(d.set(m,!1),()=>d.delete(m))}),A?[Math.random(),h]:[r,h]);return Y.useMemo(()=>{d.forEach((m,O)=>d.set(O,!1))},[r]),Y.useEffect(()=>{!r&&!d.size&&s&&s()},[r]),E==="popLayout"&&(n=I.jsx(yL,{isPresent:r,children:n})),I.jsx(pl.Provider,{value:R,children:n})};function DL(){return new Map}const rl=n=>n.key||"";function jf(n){const o=[];return Y.Children.forEach(n,r=>{Y.isValidElement(r)&&o.push(r)}),o}const PL=({children:n,exitBeforeEnter:o,custom:r,initial:s=!0,onExitComplete:c,presenceAffectsLayout:A=!0,mode:E="sync"})=>{const d=Y.useMemo(()=>jf(n),[n]),f=d.map(rl),h=Y.useRef(!0),R=Y.useRef(d),m=cE(()=>new Map),[O,y]=Y.useState(d),[H,k]=Y.useState(d);ER(()=>{h.current=!1,R.current=d;for(let b=0;b<H.length;b++){const x=rl(H[b]);f.includes(x)?m.delete(x):m.get(x)!==!0&&m.set(x,!1)}},[H,f.length,f.join("-")]);const B=[];if(d!==O){let b=[...d];for(let x=0;x<H.length;x++){const z=H[x],Z=rl(z);f.includes(Z)||(b.splice(x,0,z),B.push(z))}E==="wait"&&B.length&&(b=B),k(jf(b)),y(d);return}const{forceRender:g}=Y.useContext(iE);return I.jsx(I.Fragment,{children:H.map(b=>{const x=rl(b),z=d===H||f.includes(x),Z=()=>{if(m.has(x))m.set(x,!0);else return;let ne=!0;m.forEach(Q=>{Q||(ne=!1)}),ne&&(g==null||g(),k(R.current),c&&c())};return I.jsx(ML,{isPresent:z,initial:!h.current||s?void 0:!1,custom:z?void 0:r,presenceAffectsLayout:A,mode:E,onExitComplete:z?void 0:Z,children:b},x)})})},BL=yR.div,vL=({onClose:n})=>{const o=Xf(),r=o.totalTimeMs/1e3,s=r>3600?`${Math.floor(r/3600)}h ${Math.floor(r%3600/60)}m`:r>60?`${Math.floor(r/60)}m ${Math.floor(r%60)}s`:`${Math.floor(r)}s`,c=Y.useMemo(()=>cl().length+fc().length+Tc().length,[]),A=Y.useMemo(()=>{const E=new Set;return[...cl(),...fc(),...Tc()].forEach(d=>{d.words.forEach(f=>E.add(f.trim().toUpperCase()))}),E.size},[]);return I.jsx("div",{className:"absolute inset-0 z-[600] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 font-oswald",children:I.jsxs(BL,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-6 shadow-[0_0_40px_rgba(0,229,255,0.2)] flex flex-col gap-6",children:[I.jsxs("div",{className:"flex justify-between items-center border-b border-zinc-800 pb-2",children:[I.jsx("h2",{className:"text-3xl font-black text-neon-blue uppercase tracking-tighter italic",children:"HALL OF FAME"}),I.jsx("button",{onClick:n,className:"text-zinc-500 hover:text-white p-2",children:I.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),I.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[I.jsx(Si,{label:"TOTAL SCORE",value:o.totalScore,color:"text-neon-yellow"}),I.jsx(Si,{label:"LEVELS BEAT",value:o.levelsCompleted,color:"text-neon-pink"}),I.jsx(Si,{label:"ROWS SOLVED",value:o.rowsSolved,color:"text-neon-green"}),I.jsx(Si,{label:"TOTAL MOVES",value:o.totalMoves,color:"text-neon-aqua"}),I.jsx(Si,{label:"TIME PLAYED",value:s,color:"text-white"}),I.jsx(Si,{label:"HINTS USED",value:o.hintsUsed,color:"text-neon-red"})]}),I.jsxs("div",{className:"mt-2 p-3 bg-black/50 border border-zinc-800 rounded-medium flex flex-col gap-3",children:[I.jsxs("div",{children:[I.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"CATEGORY MASTERY"}),I.jsxs("div",{className:"text-2xl font-black text-neon-gold leading-none mb-1",children:[o.solvedCategoryIds.length," / ",c]}),I.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:I.jsx("div",{className:"h-full bg-neon-gold shadow-[0_0_10px_#FFD400]",style:{width:`${Math.min(100,o.solvedCategoryIds.length/c*100)}%`}})})]}),I.jsxs("div",{children:[I.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"WORD MASTERY"}),I.jsxs("div",{className:"text-2xl font-black text-neon-purple leading-none mb-1",children:[o.solvedWords?o.solvedWords.length:0," / ",A]}),I.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:I.jsx("div",{className:"h-full bg-neon-purple shadow-[0_0_10px_#D400FF]",style:{width:`${Math.min(100,(o.solvedWords?o.solvedWords.length:0)/A*100)}%`}})})]})]}),I.jsx("button",{onClick:n,className:"w-full py-4 bg-white text-black font-black text-xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg",children:"BACK TO GAME"})]})})},Si=({label:n,value:o,color:r})=>I.jsxs("div",{className:"flex flex-col gap-0.5",children:[I.jsx("span",{className:"text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none",children:n}),I.jsx("span",{className:`text-xl font-black ${r} tracking-tight`,children:o})]}),MR={textShadow:"2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 3px 3px 0px rgba(0,0,0,0.6)",WebkitTextStroke:"1px black",paintOrder:"stroke fill",fontWeight:900},HL={textShadow:`
    2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    0 4px 4px rgba(0,0,0,0.4)
  `,filter:"drop-shadow(0 2px 2px rgba(0,0,0,0.3))",paintOrder:"stroke fill"},bL={"bg-neon-red":"linear-gradient(180deg, #FF073A 0%, #D400FF 100%)","bg-neon-orange":"linear-gradient(180deg, #FF5F1F 0%, #F9FF00 100%)","bg-neon-yellow":"linear-gradient(180deg, #F9FF00 0%, #39FF14 100%)","bg-neon-lime":"linear-gradient(180deg, #39FF14 0%, #00E5FF 100%)","bg-neon-green":"linear-gradient(180deg, #00F000 0%, #0066FF 100%)","bg-neon-mint":"linear-gradient(180deg, #00FF9F 0%, #FF1FBF 100%)","bg-neon-cyan":"linear-gradient(180deg, #00FFFF 0%, #B026FF 100%)","bg-neon-sky-blue":"linear-gradient(180deg, #00BFFF 0%, #FF00FF 100%)","bg-neon-blue":"linear-gradient(180deg, #0066FF 0%, #FF073A 100%)","bg-neon-violet":"linear-gradient(180deg, #B026FF 0%, #00FFFF 100%)","bg-neon-purple":"linear-gradient(180deg, #D400FF 0%, #FF5F1F 100%)","bg-neon-magenta":"linear-gradient(180deg, #FF00FF 0%, #F9FF00 100%)","bg-neon-pink":"linear-gradient(180deg, #FF1FBF 0%, #00F000 100%)","bg-neon-rose":"linear-gradient(180deg, #FF0055 0%, #00BFFF 100%)"},dc=["linear-gradient(180deg, #FF073A 0%, #7B00FF 33%, #0066FF 66%, #39FF14 100%)","linear-gradient(180deg, #00E5FF 0%, #FF1FBF 100%)","linear-gradient(180deg, #F9FF00 0%, #FF5F1F 100%)"],GL=(n,o)=>{if(n){for(const[r,s]of Object.entries(bL))if(n.includes(r))return`${s} fixed`}if(o){let r=0;for(let c=0;c<o.length;c++)r=o.charCodeAt(c)+((r<<5)-r);const s=Math.abs(r%dc.length);return`${dc[s]} fixed`}return`${dc[0]} fixed`},UL={neutral:{scale:1,zIndex:10,transition:{duration:.1}},selected:{scale:1.03,transition:{duration:.1},zIndex:50},"correct-preview":{scale:1.05,transition:{duration:.2},zIndex:55},"swap-target":{scale:1.03,transition:{duration:.1},zIndex:40},swapping:{scale:1.05,zIndex:100,transition:{duration:.1}},"fading-out-bg":{scale:1,transition:{duration:.25}},solved:{scale:[1,1.12,1],transition:{duration:.3,ease:"easeOut"},zIndex:20},wrong:{x:[0,-6,6,-6,6,0],scale:1.02,transition:{duration:.3},zIndex:60}},FL=(n,o)=>{const r="border-4 border-white shadow-[0_0_20px_rgba(255,255,255,1)]",s="border-4 border-white shadow-[0_0_20px_#39FF14]",c="border-4 border-white shadow-[0_0_20px_#FF073A]";switch(n){case"selected":case"swapping":return`${r} z-50`;case"swap-target":return`${r} z-40`;case"correct-preview":return`bg-neon-lime ${s} z-55`;case"locked":return`${r} z-30`;case"fading-out-bg":return"border-4 border-white shadow-none transition-colors duration-250";case"solved":return o?`${o} border-4 border-white shadow-none`:"bg-zinc-800 border-4 border-white shadow-none";case"wrong":return`bg-neon-red ${c} z-60`;default:return"bg-black border-4 border-white shadow-none"}},kL=(n,o,r)=>{const s="font-oswald font-black uppercase leading-none";if(o)return r?`${s} text-2xl md:text-3xl`:`${s} text-4xl md:text-6xl`;const A=(n||"").length;return A>12?`${s} text-[10px] md:text-[16px] lg:text-[22px] tracking-tight`:A>9?`${s} text-[12px] md:text-[20px] lg:text-[28px] tracking-tight`:A>6?`${s} text-[14px] md:text-[26px] lg:text-[36px] tracking-tight`:`${s} text-[18px] md:text-[32px] lg:text-[48px] tracking-wide`},_f=yR,wL={fontFamily:'"Oswald", sans-serif',backfaceVisibility:"hidden",WebkitFontSmoothing:"antialiased"},DR=Na.forwardRef(({data:n,onClick:o,disabled:r,targetColor:s,...c},A)=>{const E=n.status==="swapping"||n.status==="swap-target",d=n.status==="solved",f=n.status==="selected",h=n.status==="correct-preview",R=n.status==="locked",m=n.status==="fading-out-bg",O=FL(n.status,n.color||s),y=kL(n.word,n.isEmoji,d);let H={};if(d){const g=n.color||s;H.background=GL(g,n.categoryId),H.backgroundSize="100% 100vh",H.backgroundRepeat="no-repeat"}else f||n.status==="swapping"?H.backgroundColor="#00E5FF":n.status==="swap-target"?H.backgroundColor="#FF1FBF":R?H.backgroundColor="#FFD400":h?H.backgroundColor="#39FF14":H.backgroundColor="#000000";const k=()=>{if(n.isEmoji)return n.word;const g=(n.word||"").trim().split(/\s+/);return g.length<=1?n.word:g.map((b,x)=>I.jsx("span",{className:"block w-full leading-[1.1]",children:b},x))},B=n.isEmoji?{filter:d?"drop-shadow(0 0 5px rgba(255,255,255,0.5)) brightness(1.2)":f||E||h?"drop-shadow(0 0 8px #FFFFFF)":"none"}:{};return I.jsx("div",{className:"relative w-full h-full flex flex-col justify-end overflow-visible touch-action-manipulation",children:I.jsx(_f.div,{layout:!0,ref:A,initial:"neutral",animate:n.status,variants:UL,onClick:()=>!r&&o(n.id),className:`relative w-full flex items-center justify-center cursor-pointer select-none rounded-small overflow-hidden z-10 ${O} h-full touch-action-manipulation`,style:{...wL,...H,transition:"background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out"},...c,children:I.jsx(PL,{mode:"wait",children:I.jsx(_f.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"},className:`${y} text-white z-30 text-center px-1 pointer-events-none w-full flex flex-col items-center justify-center`,style:{...n.isEmoji?HL:MR,...B},children:k()},n.word)})})})});DR.displayName="Tile";const VL=Na.memo(DR),xL=({text:n,sizeClass:o="text-2xl",strokeOuter:r="8px",strokeInner:s="4px",className:c="",active:A=!0,gradient:E="linear-gradient(to right, #FF1FBF, #00E5FF, #F9FF00, #FF1FBF)"})=>I.jsxs("div",{className:`relative inline-block ${c} ${A?"":"opacity-40 grayscale contrast-125"}`,children:[I.jsx("style",{children:`
          @keyframes arcade-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}),I.jsx("span",{className:`absolute inset-0 ${o} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{color:"rgba(0,0,0,0.8)",transform:"translate(3px, 3px)",zIndex:-1,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:n}),I.jsx("span",{className:`absolute inset-0 ${o} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{WebkitTextStroke:`${r} white`,color:"transparent",zIndex:0},children:n}),I.jsx("span",{className:`absolute inset-0 ${o} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{WebkitTextStroke:`${s} black`,color:"transparent",zIndex:10},children:n}),I.jsx("span",{className:`relative z-20 ${o} font-black uppercase font-oswald leading-none tracking-tight`,style:{backgroundImage:E,backgroundSize:"600% auto",WebkitBackgroundClip:"text",color:"transparent",animation:A?"arcade-flow 12s linear infinite":"none"},children:n})]}),Jf=({path:n,viewBox:o="0 0 24 24",className:r="",active:s=!0,sizeClass:c="w-8 h-8"})=>{const E=`icon-grad-${Na.useId()}`,d=[{offset:"0%",color:"#FF073A"},{offset:"17%",color:"#FF5F1F"},{offset:"33%",color:"#F9FF00"},{offset:"50%",color:"#39FF14"},{offset:"67%",color:"#00FFFF"},{offset:"83%",color:"#0066FF"},{offset:"100%",color:"#FF073A"}];return I.jsxs("div",{className:`relative ${c} ${r} ${s?"":"opacity-50 grayscale"}`,children:[I.jsx("svg",{viewBox:o,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:0},children:I.jsx("path",{d:n,fill:"white",stroke:"white",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round"})}),I.jsx("svg",{viewBox:o,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:10},children:I.jsx("path",{d:n,fill:"black",stroke:"black",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),I.jsxs("svg",{viewBox:o,className:"relative w-full h-full overflow-visible",style:{zIndex:20},children:[I.jsx("defs",{children:I.jsxs("linearGradient",{id:E,x1:"0%",y1:"0%",x2:"400%",y2:"0%",spreadMethod:"repeat",children:[d.map((f,h)=>I.jsx("stop",{offset:f.offset,stopColor:f.color},h)),I.jsx("animateTransform",{attributeName:"gradientTransform",type:"translate",from:"0 0",to:"-4 0",dur:"8s",repeatCount:"indefinite"})]})}),I.jsx("path",{d:n,fill:s?`url(#${E})`:"#555"})]})]})},KL=({modeName:n,levelIndex:o,onOpenSettings:r,isReviewing:s,onNext:c,hintsEnabled:A,onToggleHints:E,children:d,leftContent:f,rowsLeft:h})=>I.jsxs("header",{className:"flex items-center justify-between px-2 sm:px-4 shrink-0 z-[60] bg-black select-none w-full gap-2 text-right overflow-hidden",style:{height:yh,minHeight:yh},children:[I.jsx("div",{className:"flex-1 flex items-center justify-start gap-3 h-full",children:f}),I.jsxs("div",{className:"flex items-center gap-2 justify-end",children:[d,s&&c?I.jsx("div",{className:"pr-1",children:I.jsx("button",{onClick:c,className:"px-6 py-1.5 md:px-10 md:py-2 text-white font-black font-oswald text-sm md:text-base rounded-small border-4 border-white shadow-[0_0_20px_rgba(255,255,255,1)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap bg-black",style:MR,children:"NEXT PUZZLE"})}):I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"flex flex-col items-end justify-center mr-2",children:[I.jsxs("div",{className:"flex items-center gap-2 mb-0.5 justify-end",children:[I.jsxs("span",{className:"text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest font-oswald",children:["LVL ",o]}),h!==void 0&&I.jsxs("span",{className:"text-[10px] md:text-xs text-neon-blue font-bold uppercase border-l border-zinc-800 pl-2 font-oswald",children:["ROWS: ",h]})]}),I.jsx(xL,{text:n,sizeClass:"text-2xl md:text-3xl",gradient:"linear-gradient(to right, #FF073A, #FF5F1F, #F9FF00, #39FF14, #00FFFF, #0066FF, #FF073A)"})]}),E&&I.jsx("button",{onClick:E,className:"transform transition-transform active:scale-95 hover:scale-110",title:"Toggle Hints",children:I.jsx(Jf,{path:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",active:A,sizeClass:"w-7 h-7 md:w-8 md:h-8"})})]}),I.jsx("button",{onClick:r,className:"transform transition-transform active:scale-95 hover:scale-110 ml-1",title:"Settings",children:I.jsx(Jf,{path:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84a.484.484 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 0 0-.59.22L2.65 8.91a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.27.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",active:!0,sizeClass:"w-7 h-7 md:w-8 md:h-8"})})]})]}),PR=[{id:"t0",word:"APPLE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t1",word:"BANANA",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t2",word:"GRAPE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t3",word:"DOG",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t4",word:"CAT",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t5",word:"LION",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t6",word:"TIGER",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t7",word:"PEAR",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t8",word:"RED",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t9",word:"BLUE",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t10",word:"GREEN",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t11",word:"YELLOW",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t12",word:"HAMMER",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t13",word:"DRILL",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t14",word:"SAW",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t15",word:"WRENCH",categoryId:"tool",categoryName:"TOOL",status:"neutral"}],YL=()=>{const n=JSON.parse(JSON.stringify(PR)),o=n[10];n[10]=n[13],n[13]=o;const r=n[11];return n[11]=n[12],n[12]=r,n},WL=n=>n===oe.CLASSIC?"CLASSIC GRID":n===oe.LEVEL_EMOJI?"EMOJI MATCH":n===oe.LEVEL_SYNONYMS?"SYNONYMS":n===oe.LEVEL_THEMED?"THEMED":n===oe.LEVEL_MIND_MATCH?"MIND MATCH":"TUTORIAL",zL=({mode:n,onComplete:o})=>{const r=n===oe.CLASSIC||n===oe.LEVEL_EMOJI||n===oe.LEVEL_THEMED||n===oe.LEVEL_SYNONYMS,[s,c]=Y.useState(1),[A,E]=Y.useState(r?YL():PR),d=Y.useRef(new Map),f=async(R,m)=>{const O=d.current.get(R),y=d.current.get(m);if(Jt.playSwap(),O&&y){const H=O.getBoundingClientRect(),k=y.getBoundingClientRect(),B=k.left-H.left,g=k.top-H.top;O.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",O.style.transform=`translate(${B}px, ${g}px) scale(1.1)`,O.style.zIndex="50",O.style.boxShadow="0 10px 20px rgba(0,0,0,0.5)",y.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",y.style.transform=`translate(${-B}px, ${-g}px) scale(0.9)`,y.style.zIndex="40",await new Promise(b=>setTimeout(b,400)),O.style.transition="",O.style.transform="",O.style.zIndex="",O.style.boxShadow="",y.style.transition="",y.style.transform="",y.style.zIndex=""}};Y.useEffect(()=>{if(!r)return;let R=!0;return(async()=>{if(await new Promise(B=>setTimeout(B,600)),!R)return;const O="t13",y="t10";if(await new Promise(B=>setTimeout(B,300)),!R||(E(B=>B.map(g=>g.id===O?{...g,status:"selected"}:g)),Jt.playSelect(),await new Promise(B=>setTimeout(B,400)),!R)||(E(B=>B.map(g=>g.id===y?{...g,status:"swap-target"}:g)),Jt.playSelect(),await new Promise(B=>setTimeout(B,200)),!R)||(await f(O,y),E(B=>{const g=[...B],b=g.findIndex(z=>z.id===O),x=g.findIndex(z=>z.id===y);return[g[b],g[x]]=[g[x],g[b]],g[b]={...g[b],status:"neutral"},g[x]={...g[x],status:"neutral"},g}),await new Promise(B=>setTimeout(B,400)),!R))return;const H="t12",k="t11";await new Promise(B=>setTimeout(B,300)),R&&(E(B=>B.map(g=>g.id===H?{...g,status:"selected"}:g)),Jt.playSelect(),await new Promise(B=>setTimeout(B,400)),R&&(E(B=>B.map(g=>g.id===k?{...g,status:"swap-target"}:g)),Jt.playSelect(),await new Promise(B=>setTimeout(B,200)),R&&(await f(H,k),E(B=>{const g=[...B],b=g.findIndex(z=>z.id===H),x=g.findIndex(z=>z.id===k);return[g[b],g[x]]=[g[x],g[b]],g[b]={...g[b],status:"neutral"},g[x]={...g[x],status:"neutral"},g}),await new Promise(B=>setTimeout(B,400)),R&&(Jt.playRowSolved(),E(B=>B.map((g,b)=>b>=8&&b<12?{...g,status:"solved",color:"bg-neon-green border-white"}:b>=12?{...g,status:"solved",color:"bg-neon-yellow border-white"}:g)),c(4),await new Promise(B=>setTimeout(B,600)),R&&(Jt.playSelect(),E(B=>B.map(g=>g.id==="t3"?{...g,status:"selected"}:g)),c(5),await new Promise(B=>setTimeout(B,800)),R&&(Jt.playSelect(),E(B=>B.map(g=>g.id==="t7"?{...g,status:"swap-target"}:g)),await new Promise(B=>setTimeout(B,200)),await f("t3","t7"),E(B=>{const g=[...B],b=g.findIndex(z=>z.id==="t3"),x=g.findIndex(z=>z.id==="t7");return[g[b],g[x]]=[g[x],g[b]],g[b]={...g[b],status:"neutral"},g[x]={...g[x],status:"neutral"},g}),await new Promise(B=>setTimeout(B,300)),R&&(Jt.playRowSolved(),Jt.playWin(),E(B=>B.map((g,b)=>b<4?{...g,status:"solved",color:"bg-neon-blue border-white"}:b>=4&&b<8?{...g,status:"solved",color:"bg-neon-pink border-white"}:b>=8&&b<12?{...g,status:"solved",color:"bg-neon-green border-white"}:b>=12?{...g,status:"solved",color:"bg-neon-yellow border-white"}:g)),await new Promise(B=>setTimeout(B,800)),R&&(c(6),await new Promise(B=>setTimeout(B,2500)),R&&(c(7),await new Promise(B=>setTimeout(B,2500)),R&&c(8))))))))))})(),()=>{R=!1}},[r]),Y.useEffect(()=>{if(!r){const R=setTimeout(()=>{o()},3e3);return()=>clearTimeout(R)}},[r,o]);const h=()=>{var m;const R=[];for(let O=0;O<4;O++){const y=A.slice(O*4,O*4+4),H=y.every(g=>g.status==="solved"),k=(m=y[0])==null?void 0:m.categoryName;R.push(I.jsx("div",{className:"relative w-full z-10 flex flex-col justify-center min-h-0 flex-1 overflow-visible",children:I.jsxs("div",{className:"relative w-full h-full p-1",children:[H&&I.jsx("div",{className:"absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-medium"}),H&&I.jsx("div",{className:"absolute top-0 left-8 z-[100] transform",style:{transform:"translateY(calc(-100% + 4px))"},children:I.jsx("div",{className:"animate-pop bg-black text-white px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] font-oswald",children:k})}),I.jsx("div",{className:`grid grid-cols-4 gap-2 w-full h-full relative z-10 transition-all duration-300 ${H?"drop-shadow-xl p-3":""}`,children:y.map(g=>I.jsx("div",{className:"relative w-full h-full",children:I.jsx(VL,{data:g,"data-tile-id":g.id,onClick:()=>{},disabled:!0,ref:b=>{b?d.current.set(g.id,b):d.current.delete(g.id)}})},g.id))})]})},O))}return R};return I.jsxs("div",{className:"absolute inset-0 z-[200] bg-black flex flex-col font-oswald animate-fade-in",children:[I.jsx(KL,{modeName:WL(n),levelIndex:1,onOpenSettings:()=>{},isReviewing:!1,hintsEnabled:!0,onManualHint:()=>{},onToggleHints:()=>{}}),I.jsx("div",{className:"flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden",children:I.jsxs("div",{className:`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${s>=6?"blur-sm opacity-40 scale-95":""}`,children:[I.jsx("div",{className:"w-full max-w-sm aspect-square max-h-[55vh] bg-zinc-900/50 rounded-xl p-2 mb-4 border-2 border-zinc-700 relative flex flex-col shrink-0 shadow-2xl overflow-visible mt-8",children:I.jsx("div",{className:"w-full h-full flex flex-col gap-1",children:h()})}),I.jsxs("div",{className:"h-16 flex items-center justify-center mb-4 shrink-0 w-full px-4",children:[s===1&&I.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop shadow-lg text-center",children:I.jsx("p",{className:"text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"FIND 4 TILES THAT BELONG TOGETHER"})}),(s===2||s===3)&&I.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-neon-blue animate-fade-in shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center",children:I.jsx("p",{className:"text-neon-blue font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"SWAP TO MAKE A MATCH"})})]}),I.jsx("button",{onClick:o,className:`text-zinc-500 font-oswald text-sm uppercase tracking-widest hover:text-white transition-colors mt-auto pb-4 ${s>=6?"opacity-0 pointer-events-none":""}`,children:"SKIP TUTORIAL"})]})}),s===6&&I.jsx("div",{className:"absolute top-[60px] right-[50px] z-[220] animate-bounce",children:I.jsxs("div",{className:"relative",children:[I.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-yellow absolute -top-2 right-4"}),I.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-yellow text-center shadow-[0_0_15px_rgba(255,255,0,0.3)]",children:I.jsxs("p",{className:"text-neon-yellow font-oswald text-sm font-bold uppercase",children:["TURN HINTS",I.jsx("br",{}),"ON AND OFF"]})})]})}),s===7&&I.jsx("div",{className:"absolute top-[60px] right-[10px] z-[220] animate-bounce",children:I.jsxs("div",{className:"relative",children:[I.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-blue absolute -top-2 right-2"}),I.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-blue text-center shadow-[0_0_15px_rgba(0,229,255,0.3)]",children:I.jsx("p",{className:"text-neon-blue font-oswald text-sm font-bold uppercase",children:"SETTINGS"})})]})}),s===8&&I.jsx("div",{className:"absolute inset-0 z-[210] flex items-center justify-center",children:I.jsx("button",{onClick:o,className:"px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop",children:"START"})})]})},jL=()=>I.jsx("footer",{className:"w-full bg-black flex flex-col items-center justify-center shrink-0 z-[60]",style:{height:dC},children:I.jsx("div",{className:"w-full h-full bg-black flex items-center justify-center overflow-hidden"})}),_L=()=>I.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"max(env(safe-area-inset-top, 0px), 24px)"}}),JL=()=>I.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"max(env(safe-area-inset-bottom, 0px), 16px)"}}),ZL=Na.lazy(()=>Xa(()=>import("./Level1_Standard-Du638k31.js"),__vite__mapDeps([0,1,2,3]))),XL=Na.lazy(()=>Xa(()=>import("./Level1_Emoji-DMjqQEhS.js"),__vite__mapDeps([4,1,2,3]))),qL=Na.lazy(()=>Xa(()=>import("./Level2_Filter-CoreD4rr.js"),__vite__mapDeps([5,2,3]))),QL=Na.lazy(()=>Xa(()=>import("./Level5_Group-B06wVPjM.js"),__vite__mapDeps([6,3]))),$L=Na.lazy(()=>Xa(()=>import("./Level7_Expansion-Bie0bA3O.js"),__vite__mapDeps([7,1,2,3]))),ey=()=>{try{const n=document.createElement("div");n.style.height="env(safe-area-inset-bottom, 0px)",n.style.visibility="hidden",n.style.position="absolute",document.body.appendChild(n);const o=n.offsetHeight;return document.body.removeChild(n),Math.max(o,16)}catch{return 16}};class ty extends Y.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(o){return{hasError:!0}}componentDidCatch(o,r){console.error("Game crashed:",o,r)}render(){return this.state.hasError?I.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-4 text-center",children:[I.jsx("h1",{className:"text-3xl font-bold mb-4 font-oswald text-red-500 uppercase",children:"System Error"}),I.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-white text-black font-bold rounded-full uppercase font-oswald",children:"Reboot"})]}):this.props.children}}const Oo=()=>I.jsx("div",{className:"flex items-center justify-center h-full w-full bg-black",children:I.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"})}),ay=()=>{const[n,o]=Y.useState(oe.MENU),[r,s]=Y.useState(1),[c,A]=Y.useState(!0),[E,d]=Y.useState(!1),[f,h]=Y.useState(!1),[R,m]=Y.useState(!0),[O,y]=Y.useState(!1),[H,k]=Y.useState([]),[B,g]=Y.useState(!1),[b,x]=Y.useState([]),[z,Z]=Y.useState(!1);Y.useEffect(()=>{async function X(){try{const{AdMob:re,AdmobConsentStatus:fe,BannerAdSize:G,BannerAdPosition:K}=await Xa(async()=>{const{AdMob:N,AdmobConsentStatus:V,BannerAdSize:W,BannerAdPosition:q}=await import("./index-Dkp-faKc.js");return{AdMob:N,AdmobConsentStatus:V,BannerAdSize:W,BannerAdPosition:q}},[]);if(!re){console.warn("AdMob not available.");return}const _=await re.requestConsentInfo(),Te=_.status===fe.OBTAINED||_.status===fe.NOT_REQUIRED;if(_.isConsentFormAvailable&&_.status===fe.REQUIRED){const{status:N}=await re.showConsentForm();N===fe.OBTAINED?await Ee():console.warn("User did not provide consent.")}else Te?await Ee():console.warn("Consent status not sufficient to request ads.");async function Ee(){await re.initialize({});const N=ey();await re.showBanner({adSize:G.BANNER,position:K.BOTTOM_CENTER,margin:N,isTesting:!1})}}catch(re){console.error("AdMob setup failed:",re)}}X(),s(RC()),x(OC())},[]),Y.useEffect(()=>{n!==oe.MENU&&!pC()&&y(!0)},[n]);const ne=Y.useMemo(()=>Mh(r,b),[r,b]),Q=X=>{let re;if(b.includes(X)){if(b.length<=1)return;re=b.filter(fe=>fe!==X)}else re=[...b,X];x(re),CC(re)},j=()=>{const X=!c;A(X),Jt.setSound(X)},ie=X=>{let re=0;n===oe.LEVEL_MIND_MATCH?re=(X.roundsWon||0)*5:X.failed||(n===oe.CLASSIC||n===oe.LEVEL_THEMED||n===oe.LEVEL_SYNONYMS?re=10:n===oe.LEVEL_EMOJI?re=5:n===oe.LEVEL_EXPANSION&&(re=15));const fe=(X.hintsUsedCount||0)*-5;let G=0;!X.failed&&X.mistakes===0&&(G=25);const K=(X.failed?0:X.rowEfficiency)||0;let _=0;if(!X.failed){const Ee=X.timeMs/1e3;Ee<60?_=10:Ee<90?_=5:Ee<120&&(_=2)}const Te=Math.max(0,re+fe+K+G+_);gC({totalScore:Te,levelsCompleted:X.failed?0:1,totalMoves:X.moves,totalTimeMs:X.timeMs,rowsSolved:n===oe.LEVEL_MIND_MATCH?(X.roundsWon||0)*4:4,solvedCategoryIds:X.solvedCategoryIds,solvedWords:X.solvedWords}),g(!0)},Se=()=>{const X=r+1;s(X),mC(X);const re=Mh(X,b);o(re.mode),g(!1),X%3===0&&ye()};Y.useEffect(()=>{if(z&&B){const X=setTimeout(()=>{Se()},2e3);return()=>clearTimeout(X)}},[z,B]);const ye=async()=>{try{const{AdMob:X}=await Xa(async()=>{const{AdMob:re}=await import("./index-Dkp-faKc.js");return{AdMob:re}},[]);X&&(await X.prepareInterstitial({isTesting:!1}),await X.showInterstitial())}catch(X){console.error("Interstitial Ad Error",X)}},Me=()=>{if(n===oe.MENU)return I.jsx(jC,{onStart:()=>o(ne.mode),onSettings:()=>d(!0),onStats:()=>h(!0),lastLevel:r});const{data:X,mode:re}=ne;switch(re){case oe.CLASSIC:case oe.LEVEL_THEMED:case oe.LEVEL_SYNONYMS:return I.jsx(Y.Suspense,{fallback:I.jsx(Oo,{}),children:I.jsx(ZL,{csvData:X,mode:re,levelIndex:r,onComplete:ie,onExit:()=>o(oe.MENU),hintsEnabled:R,setHintsEnabled:m,onOpenSettings:fe=>{k(fe||[]),d(!0)},isReviewing:B,onNext:Se,isAutoPlaying:z},r)});case oe.LEVEL_EMOJI:return I.jsx(Y.Suspense,{fallback:I.jsx(Oo,{}),children:I.jsx(XL,{levelIndex:r,onComplete:ie,onExit:()=>o(oe.MENU),hintsEnabled:R,setHintsEnabled:m,onOpenSettings:fe=>{k(fe||[]),d(!0)},isReviewing:B,onNext:Se,isAutoPlaying:z},r)});case oe.LEVEL_MIND_MATCH:return I.jsx(Y.Suspense,{fallback:I.jsx(Oo,{}),children:I.jsx(QL,{csvData:X,levelIndex:r,onComplete:ie,onExit:()=>o(oe.MENU),hintsEnabled:R,setHintsEnabled:m,onOpenSettings:fe=>{k(fe||[]),d(!0)},isReviewing:B,onNext:Se,isAutoPlaying:z},r)});case oe.LEVEL_EXPANSION:return I.jsx(Y.Suspense,{fallback:I.jsx(Oo,{}),children:I.jsx($L,{csvData:X,levelIndex:r,onComplete:ie,onExit:()=>o(oe.MENU),hintsEnabled:R,setHintsEnabled:m,onOpenSettings:fe=>{k(fe||[]),d(!0)},isReviewing:B,onNext:Se,isAutoPlaying:z},r)});default:return I.jsx(Y.Suspense,{fallback:I.jsx(Oo,{}),children:I.jsx(qL,{csvData:X,levelIndex:r,onComplete:ie,onGameOver:()=>ie({timeMs:0,hintsUsedCount:0,moves:0,failed:!0,mistakes:5}),onExit:()=>o(oe.MENU),hintsEnabled:R,setHintsEnabled:m,onOpenSettings:fe=>{k(fe||[]),d(!0)},isReviewing:B,onNext:Se,isAutoPlaying:z},r)})}};return I.jsx(ty,{children:I.jsxs("div",{className:"fixed inset-0 h-viewport w-screen bg-black text-white font-oswald flex flex-col overflow-hidden",children:[I.jsx(_L,{}),I.jsxs("div",{className:"flex-1 relative flex flex-col min-h-0 w-full overflow-hidden",children:[Me(),O&&I.jsx(zL,{mode:n,onComplete:()=>{NC(),y(!1)}})]}),I.jsx(jL,{}),I.jsx(JL,{}),E&&I.jsx(np,{isOpen:E,onClose:()=>d(!1),onMainMenu:()=>{d(!1),o(oe.MENU)},isMusicOn:c,toggleMusic:j,enabledModes:b,toggleMode:Q,hintsEnabled:R,setHintsEnabled:m,onShowTutorial:()=>y(!0),onResetProgress:()=>{localStorage.clear(),window.location.reload()},categories:H,isAutoPlaying:z,toggleAutoPlay:()=>Z(!z)}),f&&I.jsx(vL,{onClose:()=>h(!1)})]})})},BR=document.getElementById("root");if(!BR)throw new Error("Could not find root element to mount to");const ny=EC.createRoot(BR);ny.render(I.jsx(Na.StrictMode,{children:I.jsx(ay,{})}));export{oe as G,KL as H,qf as M,Na as R,iy as T,$f as W,Xa as _,Jt as a,VL as b,Tc as c,GL as d,Qf as e,oy as g,I as j,yR as m,Y as r,wC as s};
