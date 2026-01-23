const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Level1_Standard-B8GiGBZy.js","assets/SolvedRowBackground-DhXTdfbX.js","assets/LevelLayout-t7k1p2mV.js","assets/ParticleOverlay-D_xgdCaM.js","assets/Level1_Emoji-NOkasxBb.js","assets/Level2_Filter-CsSUtttx.js","assets/Level5_Group-Cmbcd-GC.js","assets/Level7_Expansion-CnxIY76e.js","assets/Level8_Cascade-CgbLVkzA.js"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const S of d.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&l(S)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();function cm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ju={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function TO(){if(yh)return Oo;yh=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(l,c,d){var S=null;if(d!==void 0&&(S=""+d),c.key!==void 0&&(S=""+c.key),"key"in c){d={};for(var E in c)E!=="key"&&(d[E]=c[E])}else d=c;return c=d.ref,{$$typeof:i,type:l,key:S,ref:c!==void 0?c:null,props:d}}return Oo.Fragment=n,Oo.jsx=r,Oo.jsxs=r,Oo}var Lh;function mO(){return Lh||(Lh=1,ju.exports=TO()),ju.exports}var N=mO(),Zu={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function RO(){if(Mh)return ne;Mh=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),S=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),C=Symbol.iterator;function L(O){return O===null||typeof O!="object"?null:(O=C&&O[C]||O["@@iterator"],typeof O=="function"?O:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,B={};function I(O,U,Y){this.props=O,this.context=U,this.refs=B,this.updater=Y||v}I.prototype.isReactComponent={},I.prototype.setState=function(O,U){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,U,"setState")},I.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function b(){}b.prototype=I.prototype;function x(O,U,Y){this.props=O,this.context=U,this.refs=B,this.updater=Y||v}var J=x.prototype=new b;J.constructor=x,V(J,I.prototype),J.isPureReactComponent=!0;var _=Array.isArray;function $(){}var X={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function oe(O,U,Y){var q=Y.ref;return{$$typeof:i,type:O,key:U,ref:q!==void 0?q:null,props:Y}}function le(O,U){return oe(O.type,U,O.props)}function Ie(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function Re(O){var U={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Y){return U[Y]})}var be=/\/+/g;function we(O,U){return typeof O=="object"&&O!==null&&O.key!=null?Re(""+O.key):U.toString(36)}function Ye(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then($,$):(O.status="pending",O.then(function(U){O.status==="pending"&&(O.status="fulfilled",O.value=U)},function(U){O.status==="pending"&&(O.status="rejected",O.reason=U)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,U,Y,q,re){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(Se){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case i:case n:pe=!0;break;case R:return pe=O._init,F(pe(O._payload),U,Y,q,re)}}if(pe)return re=re(O),pe=q===""?"."+we(O,0):q,_(re)?(Y="",pe!=null&&(Y=pe.replace(be,"$&/")+"/"),F(re,U,Y,"",function(Ln){return Ln})):re!=null&&(Ie(re)&&(re=le(re,Y+(re.key==null||O&&O.key===re.key?"":(""+re.key).replace(be,"$&/")+"/")+pe)),U.push(re)),1;pe=0;var At=q===""?".":q+":";if(_(O))for(var Ve=0;Ve<O.length;Ve++)q=O[Ve],Se=At+we(q,Ve),pe+=F(q,U,Y,Se,re);else if(Ve=L(O),typeof Ve=="function")for(O=Ve.call(O),Ve=0;!(q=O.next()).done;)q=q.value,Se=At+we(q,Ve++),pe+=F(q,U,Y,Se,re);else if(Se==="object"){if(typeof O.then=="function")return F(Ye(O),U,Y,q,re);throw U=String(O),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return pe}function W(O,U,Y){if(O==null)return O;var q=[],re=0;return F(O,q,"","",function(Se){return U.call(Y,Se,re++)}),q}function j(O){if(O._status===-1){var U=O._result;U=U(),U.then(function(Y){(O._status===0||O._status===-1)&&(O._status=1,O._result=Y)},function(Y){(O._status===0||O._status===-1)&&(O._status=2,O._result=Y)}),O._status===-1&&(O._status=0,O._result=U)}if(O._status===1)return O._result.default;throw O._result}var ce=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},me={map:W,forEach:function(O,U,Y){W(O,function(){U.apply(this,arguments)},Y)},count:function(O){var U=0;return W(O,function(){U++}),U},toArray:function(O){return W(O,function(U){return U})||[]},only:function(O){if(!Ie(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ne.Activity=f,ne.Children=me,ne.Component=I,ne.Fragment=r,ne.Profiler=c,ne.PureComponent=x,ne.StrictMode=l,ne.Suspense=h,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ne.__COMPILER_RUNTIME={__proto__:null,c:function(O){return X.H.useMemoCache(O)}},ne.cache=function(O){return function(){return O.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(O,U,Y){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var q=V({},O.props),re=O.key;if(U!=null)for(Se in U.key!==void 0&&(re=""+U.key),U)!z.call(U,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&U.ref===void 0||(q[Se]=U[Se]);var Se=arguments.length-2;if(Se===1)q.children=Y;else if(1<Se){for(var pe=Array(Se),At=0;At<Se;At++)pe[At]=arguments[At+2];q.children=pe}return oe(O.type,re,q)},ne.createContext=function(O){return O={$$typeof:S,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:d,_context:O},O},ne.createElement=function(O,U,Y){var q,re={},Se=null;if(U!=null)for(q in U.key!==void 0&&(Se=""+U.key),U)z.call(U,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(re[q]=U[q]);var pe=arguments.length-2;if(pe===1)re.children=Y;else if(1<pe){for(var At=Array(pe),Ve=0;Ve<pe;Ve++)At[Ve]=arguments[Ve+2];re.children=At}if(O&&O.defaultProps)for(q in pe=O.defaultProps,pe)re[q]===void 0&&(re[q]=pe[q]);return oe(O,Se,re)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(O){return{$$typeof:E,render:O}},ne.isValidElement=Ie,ne.lazy=function(O){return{$$typeof:R,_payload:{_status:-1,_result:O},_init:j}},ne.memo=function(O,U){return{$$typeof:T,type:O,compare:U===void 0?null:U}},ne.startTransition=function(O){var U=X.T,Y={};X.T=Y;try{var q=O(),re=X.S;re!==null&&re(Y,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then($,ce)}catch(Se){ce(Se)}finally{U!==null&&Y.types!==null&&(U.types=Y.types),X.T=U}},ne.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ne.use=function(O){return X.H.use(O)},ne.useActionState=function(O,U,Y){return X.H.useActionState(O,U,Y)},ne.useCallback=function(O,U){return X.H.useCallback(O,U)},ne.useContext=function(O){return X.H.useContext(O)},ne.useDebugValue=function(){},ne.useDeferredValue=function(O,U){return X.H.useDeferredValue(O,U)},ne.useEffect=function(O,U){return X.H.useEffect(O,U)},ne.useEffectEvent=function(O){return X.H.useEffectEvent(O)},ne.useId=function(){return X.H.useId()},ne.useImperativeHandle=function(O,U,Y){return X.H.useImperativeHandle(O,U,Y)},ne.useInsertionEffect=function(O,U){return X.H.useInsertionEffect(O,U)},ne.useLayoutEffect=function(O,U){return X.H.useLayoutEffect(O,U)},ne.useMemo=function(O,U){return X.H.useMemo(O,U)},ne.useOptimistic=function(O,U){return X.H.useOptimistic(O,U)},ne.useReducer=function(O,U,Y){return X.H.useReducer(O,U,Y)},ne.useRef=function(O){return X.H.useRef(O)},ne.useState=function(O){return X.H.useState(O)},ne.useSyncExternalStore=function(O,U,Y){return X.H.useSyncExternalStore(O,U,Y)},ne.useTransition=function(){return X.H.useTransition()},ne.version="19.2.3",ne}var Ph;function Kc(){return Ph||(Ph=1,Zu.exports=RO()),Zu.exports}var K=Kc();const Pi=cm(K);var Xu={exports:{}},po={},qu={exports:{}},Qu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function fO(){return Dh||(Dh=1,(function(i){function n(F,W){var j=F.length;F.push(W);e:for(;0<j;){var ce=j-1>>>1,me=F[ce];if(0<c(me,W))F[ce]=W,F[j]=me,j=ce;else break e}}function r(F){return F.length===0?null:F[0]}function l(F){if(F.length===0)return null;var W=F[0],j=F.pop();if(j!==W){F[0]=j;e:for(var ce=0,me=F.length,O=me>>>1;ce<O;){var U=2*(ce+1)-1,Y=F[U],q=U+1,re=F[q];if(0>c(Y,j))q<me&&0>c(re,Y)?(F[ce]=re,F[q]=j,ce=q):(F[ce]=Y,F[U]=j,ce=U);else if(q<me&&0>c(re,j))F[ce]=re,F[q]=j,ce=q;else break e}}return W}function c(F,W){var j=F.sortIndex-W.sortIndex;return j!==0?j:F.id-W.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var S=Date,E=S.now();i.unstable_now=function(){return S.now()-E}}var h=[],T=[],R=1,f=null,C=3,L=!1,v=!1,V=!1,B=!1,I=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function J(F){for(var W=r(T);W!==null;){if(W.callback===null)l(T);else if(W.startTime<=F)l(T),W.sortIndex=W.expirationTime,n(h,W);else break;W=r(T)}}function _(F){if(V=!1,J(F),!v)if(r(h)!==null)v=!0,$||($=!0,Re());else{var W=r(T);W!==null&&Ye(_,W.startTime-F)}}var $=!1,X=-1,z=5,oe=-1;function le(){return B?!0:!(i.unstable_now()-oe<z)}function Ie(){if(B=!1,$){var F=i.unstable_now();oe=F;var W=!0;try{e:{v=!1,V&&(V=!1,b(X),X=-1),L=!0;var j=C;try{t:{for(J(F),f=r(h);f!==null&&!(f.expirationTime>F&&le());){var ce=f.callback;if(typeof ce=="function"){f.callback=null,C=f.priorityLevel;var me=ce(f.expirationTime<=F);if(F=i.unstable_now(),typeof me=="function"){f.callback=me,J(F),W=!0;break t}f===r(h)&&l(h),J(F)}else l(h);f=r(h)}if(f!==null)W=!0;else{var O=r(T);O!==null&&Ye(_,O.startTime-F),W=!1}}break e}finally{f=null,C=j,L=!1}W=void 0}}finally{W?Re():$=!1}}}var Re;if(typeof x=="function")Re=function(){x(Ie)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,we=be.port2;be.port1.onmessage=Ie,Re=function(){we.postMessage(null)}}else Re=function(){I(Ie,0)};function Ye(F,W){X=I(function(){F(i.unstable_now())},W)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_next=function(F){switch(C){case 1:case 2:case 3:var W=3;break;default:W=C}var j=C;C=W;try{return F()}finally{C=j}},i.unstable_requestPaint=function(){B=!0},i.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var j=C;C=F;try{return W()}finally{C=j}},i.unstable_scheduleCallback=function(F,W,j){var ce=i.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ce+j:ce):j=ce,F){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=j+me,F={id:R++,callback:W,priorityLevel:F,startTime:j,expirationTime:me,sortIndex:-1},j>ce?(F.sortIndex=j,n(T,F),r(h)===null&&F===r(T)&&(V?(b(X),X=-1):V=!0,Ye(_,j-ce))):(F.sortIndex=me,n(h,F),v||L||(v=!0,$||($=!0,Re()))),F},i.unstable_shouldYield=le,i.unstable_wrapCallback=function(F){var W=C;return function(){var j=C;C=W;try{return F.apply(this,arguments)}finally{C=j}}}})(Qu)),Qu}var Bh;function CO(){return Bh||(Bh=1,qu.exports=fO()),qu.exports}var $u={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function OO(){if(Hh)return lt;Hh=1;var i=Kc();function n(h){var T="https://react.dev/errors/"+h;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)T+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+h+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(h,T,R){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:f==null?null:""+f,children:h,containerInfo:T,implementation:R}}var S=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(h,T){if(h==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,lt.createPortal=function(h,T){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(n(299));return d(h,T,null,R)},lt.flushSync=function(h){var T=S.T,R=l.p;try{if(S.T=null,l.p=2,h)return h()}finally{S.T=T,l.p=R,l.d.f()}},lt.preconnect=function(h,T){typeof h=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,l.d.C(h,T))},lt.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},lt.preinit=function(h,T){if(typeof h=="string"&&T&&typeof T.as=="string"){var R=T.as,f=E(R,T.crossOrigin),C=typeof T.integrity=="string"?T.integrity:void 0,L=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;R==="style"?l.d.S(h,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:f,integrity:C,fetchPriority:L}):R==="script"&&l.d.X(h,{crossOrigin:f,integrity:C,fetchPriority:L,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},lt.preinitModule=function(h,T){if(typeof h=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var R=E(T.as,T.crossOrigin);l.d.M(h,{crossOrigin:R,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&l.d.M(h)},lt.preload=function(h,T){if(typeof h=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var R=T.as,f=E(R,T.crossOrigin);l.d.L(h,R,{crossOrigin:f,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},lt.preloadModule=function(h,T){if(typeof h=="string")if(T){var R=E(T.as,T.crossOrigin);l.d.m(h,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:R,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else l.d.m(h)},lt.requestFormReset=function(h){l.d.r(h)},lt.unstable_batchedUpdates=function(h,T){return h(T)},lt.useFormState=function(h,T,R){return S.H.useFormState(h,T,R)},lt.useFormStatus=function(){return S.H.useHostTransitionStatus()},lt.version="19.2.3",lt}var vh;function pO(){if(vh)return $u.exports;vh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),$u.exports=OO(),$u.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function gO(){if(bh)return po;bh=1;var i=CO(),n=Kc(),r=pO();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(d(e)!==e)throw Error(l(188))}function T(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,o=t;;){var s=a.return;if(s===null)break;var u=s.alternate;if(u===null){if(o=s.return,o!==null){a=o;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===a)return h(s),e;if(u===o)return h(s),t;u=u.sibling}throw Error(l(188))}if(a.return!==o.return)a=s,o=u;else{for(var A=!1,m=s.child;m;){if(m===a){A=!0,a=s,o=u;break}if(m===o){A=!0,o=s,a=u;break}m=m.sibling}if(!A){for(m=u.child;m;){if(m===a){A=!0,a=u,o=s;break}if(m===o){A=!0,o=u,a=s;break}m=m.sibling}if(!A)throw Error(l(189))}}if(a.alternate!==o)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,C=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),x=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),Ie=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=Ie&&e[Ie]||e["@@iterator"],typeof e=="function"?e:null)}var be=Symbol.for("react.client.reference");function we(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case I:return"Profiler";case B:return"StrictMode";case _:return"Suspense";case $:return"SuspenseList";case oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case x:return e.displayName||"Context";case b:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:we(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return we(e(t))}catch{}}return null}var Ye=Array.isArray,F=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},ce=[],me=-1;function O(e){return{current:e}}function U(e){0>me||(e.current=ce[me],ce[me]=null,me--)}function Y(e,t){me++,ce[me]=e.current,e.current=t}var q=O(null),re=O(null),Se=O(null),pe=O(null);function At(e,t){switch(Y(Se,t),Y(re,e),Y(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ZE(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ZE(t),e=XE(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(q),Y(q,e)}function Ve(){U(q),U(re),U(Se)}function Ln(e){e.memoizedState!==null&&Y(pe,e);var t=q.current,a=XE(t,e.type);t!==a&&(Y(re,e),Y(q,a))}function Ko(e){re.current===e&&(U(q),U(re)),pe.current===e&&(U(pe),mo._currentValue=j)}var Ds,IS;function ti(e){if(Ds===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ds=t&&t[1]||"",IS=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ds+e+IS}var Bs=!1;function Hs(e,t){if(!e||Bs)return"";Bs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(H){var D=H}Reflect.construct(e,[],w)}else{try{w.call()}catch(H){D=H}e.call(w.prototype)}}else{try{throw Error()}catch(H){D=H}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(H){if(H&&D&&typeof H.stack=="string")return[H.stack,D.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),A=u[0],m=u[1];if(A&&m){var p=A.split(`
`),P=m.split(`
`);for(s=o=0;o<p.length&&!p[o].includes("DetermineComponentFrameRoot");)o++;for(;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;if(o===p.length||s===P.length)for(o=p.length-1,s=P.length-1;1<=o&&0<=s&&p[o]!==P[s];)s--;for(;1<=o&&0<=s;o--,s--)if(p[o]!==P[s]){if(o!==1||s!==1)do if(o--,s--,0>s||p[o]!==P[s]){var G=`
`+p[o].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=o&&0<=s);break}}}finally{Bs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ti(a):""}function JR(e,t){switch(e.tag){case 26:case 27:case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return e.child!==t&&t!==null?ti("Suspense Fallback"):ti("Suspense");case 19:return ti("SuspenseList");case 0:case 15:return Hs(e.type,!1);case 11:return Hs(e.type.render,!1);case 1:return Hs(e.type,!0);case 31:return ti("Activity");default:return""}}function yS(e){try{var t="",a=null;do t+=JR(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var vs=Object.prototype.hasOwnProperty,bs=i.unstable_scheduleCallback,Gs=i.unstable_cancelCallback,_R=i.unstable_shouldYield,jR=i.unstable_requestPaint,pt=i.unstable_now,ZR=i.unstable_getCurrentPriorityLevel,LS=i.unstable_ImmediatePriority,MS=i.unstable_UserBlockingPriority,Wo=i.unstable_NormalPriority,XR=i.unstable_LowPriority,PS=i.unstable_IdlePriority,qR=i.log,QR=i.unstable_setDisableYieldValue,Mn=null,gt=null;function ya(e){if(typeof qR=="function"&&QR(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Mn,e)}catch{}}var Nt=Math.clz32?Math.clz32:tf,$R=Math.log,ef=Math.LN2;function tf(e){return e>>>=0,e===0?32:31-($R(e)/ef|0)|0}var Yo=256,zo=262144,Jo=4194304;function ai(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _o(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var s=0,u=e.suspendedLanes,A=e.pingedLanes;e=e.warmLanes;var m=o&134217727;return m!==0?(o=m&~u,o!==0?s=ai(o):(A&=m,A!==0?s=ai(A):a||(a=m&~e,a!==0&&(s=ai(a))))):(m=o&~u,m!==0?s=ai(m):A!==0?s=ai(A):a||(a=o&~e,a!==0&&(s=ai(a)))),s===0?0:t!==0&&t!==s&&(t&u)===0&&(u=s&-s,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:s}function Pn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function af(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DS(){var e=Jo;return Jo<<=1,(Jo&62914560)===0&&(Jo=4194304),e}function Fs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Dn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nf(e,t,a,o,s,u){var A=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,p=e.expirationTimes,P=e.hiddenUpdates;for(a=A&~a;0<a;){var G=31-Nt(a),w=1<<G;m[G]=0,p[G]=-1;var D=P[G];if(D!==null)for(P[G]=null,G=0;G<D.length;G++){var H=D[G];H!==null&&(H.lane&=-536870913)}a&=~w}o!==0&&BS(e,o,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(A&~t))}function BS(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Nt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function HS(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Nt(a),s=1<<o;s&t|e[o]&t&&(e[o]|=t),a&=~s}}function vS(e,t){var a=t&-t;return a=(a&42)!==0?1:Us(a),(a&(e.suspendedLanes|t))!==0?0:a}function Us(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bS(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:fh(e.type))}function GS(e,t){var a=W.p;try{return W.p=e,t()}finally{W.p=a}}var La=Math.random().toString(36).slice(2),Qe="__reactFiber$"+La,ht="__reactProps$"+La,Hi="__reactContainer$"+La,ws="__reactEvents$"+La,of="__reactListeners$"+La,rf="__reactHandles$"+La,FS="__reactResources$"+La,Bn="__reactMarker$"+La;function Vs(e){delete e[Qe],delete e[ht],delete e[ws],delete e[of],delete e[rf]}function vi(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Hi]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ih(e);e!==null;){if(a=e[Qe])return a;e=ih(e)}return t}e=a,a=e.parentNode}return null}function bi(e){if(e=e[Qe]||e[Hi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Gi(e){var t=e[FS];return t||(t=e[FS]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Bn]=!0}var US=new Set,kS={};function ii(e,t){Fi(e,t),Fi(e+"Capture",t)}function Fi(e,t){for(kS[e]=t,e=0;e<t.length;e++)US.add(t[e])}var sf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wS={},VS={};function lf(e){return vs.call(VS,e)?!0:vs.call(wS,e)?!1:sf.test(e)?VS[e]=!0:(wS[e]=!0,!1)}function jo(e,t,a){if(lf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zo(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function na(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uf(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var s=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(A){a=""+A,u.call(this,A)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(A){a=""+A},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xs(e){if(!e._valueTracker){var t=xS(e)?"checked":"value";e._valueTracker=uf(e,t,""+e[t])}}function KS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=xS(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var cf=/[\n"\\]/g;function Gt(e){return e.replace(cf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ks(e,t,a,o,s,u,A,m){e.name="",A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.type=A:e.removeAttribute("type"),t!=null?A==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):A!=="submit"&&A!=="reset"||e.removeAttribute("value"),t!=null?Ws(e,A,bt(t)):a!=null?Ws(e,A,bt(a)):o!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+bt(m):e.removeAttribute("name")}function WS(e,t,a,o,s,u,A,m){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){xs(e);return}a=a!=null?""+bt(a):"",t=t!=null?""+bt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}o=o??s,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=m?e.checked:!!o,e.defaultChecked=!!o,A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(e.name=A),xs(e)}function Ws(e,t,a){t==="number"&&Xo(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ui(e,t,a,o){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&o&&(e[a].defaultSelected=!0)}else{for(a=""+bt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function YS(e,t,a){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+bt(a):""}function zS(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(l(92));if(Ye(o)){if(1<o.length)throw Error(l(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=bt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),xs(e)}function ki(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Sf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function JS(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||Sf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function _S(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var s in t)o=t[s],t.hasOwnProperty(s)&&a[s]!==o&&JS(e,s,o)}else for(var u in t)t.hasOwnProperty(u)&&JS(e,u,t[u])}function Ys(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Af=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(e){return Af.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var zs=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,Vi=null;function jS(e){var t=bi(e);if(t&&(e=t.stateNode)){var a=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ks(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var s=o[ht]||null;if(!s)throw Error(l(90));Ks(o,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&KS(o)}break e;case"textarea":YS(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ui(e,!!a.multiple,t,!1)}}}var _s=!1;function ZS(e,t,a){if(_s)return e(t,a);_s=!0;try{var o=e(t);return o}finally{if(_s=!1,(wi!==null||Vi!==null)&&(kr(),wi&&(t=wi,e=Vi,Vi=wi=null,jS(t),e)))for(t=0;t<e.length;t++)jS(e[t])}}function vn(e,t){var a=e.stateNode;if(a===null)return null;var o=a[ht]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),js=!1;if(ra)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){js=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{js=!1}var Ma=null,Zs=null,Qo=null;function XS(){if(Qo)return Qo;var e,t=Zs,a=t.length,o,s="value"in Ma?Ma.value:Ma.textContent,u=s.length;for(e=0;e<a&&t[e]===s[e];e++);var A=a-e;for(o=1;o<=A&&t[a-o]===s[u-o];o++);return Qo=s.slice(e,1<o?1-o:void 0)}function $o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function er(){return!0}function qS(){return!1}function Tt(e){function t(a,o,s,u,A){this._reactName=a,this._targetInst=s,this.type=o,this.nativeEvent=u,this.target=A,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?er:qS,this.isPropagationStopped=qS,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=er)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=er)},persist:function(){},isPersistent:er}),t}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tr=Tt(ni),Gn=f({},ni,{view:0,detail:0}),Ef=Tt(Gn),Xs,qs,Fn,ar=f({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(Xs=e.screenX-Fn.screenX,qs=e.screenY-Fn.screenY):qs=Xs=0,Fn=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:qs}}),QS=Tt(ar),hf=f({},ar,{dataTransfer:0}),Tf=Tt(hf),mf=f({},Gn,{relatedTarget:0}),Qs=Tt(mf),Rf=f({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),ff=Tt(Rf),Cf=f({},ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Of=Tt(Cf),pf=f({},ni,{data:0}),$S=Tt(pf),gf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},If={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=If[e])?!!t[e]:!1}function $s(){return yf}var Lf=f({},Gn,{key:function(e){if(e.key){var t=gf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$s,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mf=Tt(Lf),Pf=f({},ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=Tt(Pf),Df=f({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$s}),Bf=Tt(Df),Hf=f({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=Tt(Hf),bf=f({},ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=Tt(bf),Ff=f({},ni,{newState:0,oldState:0}),Uf=Tt(Ff),kf=[9,13,27,32],el=ra&&"CompositionEvent"in window,Un=null;ra&&"documentMode"in document&&(Un=document.documentMode);var wf=ra&&"TextEvent"in window&&!Un,td=ra&&(!el||Un&&8<Un&&11>=Un),ad=" ",id=!1;function nd(e,t){switch(e){case"keyup":return kf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xi=!1;function Vf(e,t){switch(e){case"compositionend":return od(t);case"keypress":return t.which!==32?null:(id=!0,ad);case"textInput":return e=t.data,e===ad&&id?null:e;default:return null}}function xf(e,t){if(xi)return e==="compositionend"||!el&&nd(e,t)?(e=XS(),Qo=Zs=Ma=null,xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return td&&t.locale!=="ko"?null:t.data;default:return null}}var Kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kf[e.type]:t==="textarea"}function sd(e,t,a,o){wi?Vi?Vi.push(o):Vi=[o]:wi=o,t=zr(t,"onChange"),0<t.length&&(a=new tr("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var kn=null,wn=null;function Wf(e){WE(e,0)}function ir(e){var t=Hn(e);if(KS(t))return e}function ld(e,t){if(e==="change")return t}var ud=!1;if(ra){var tl;if(ra){var al="oninput"in document;if(!al){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),al=typeof cd.oninput=="function"}tl=al}else tl=!1;ud=tl&&(!document.documentMode||9<document.documentMode)}function Sd(){kn&&(kn.detachEvent("onpropertychange",dd),wn=kn=null)}function dd(e){if(e.propertyName==="value"&&ir(wn)){var t=[];sd(t,wn,e,Js(e)),ZS(Wf,t)}}function Yf(e,t,a){e==="focusin"?(Sd(),kn=t,wn=a,kn.attachEvent("onpropertychange",dd)):e==="focusout"&&Sd()}function zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ir(wn)}function Jf(e,t){if(e==="click")return ir(t)}function _f(e,t){if(e==="input"||e==="change")return ir(t)}function jf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:jf;function Vn(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var s=a[o];if(!vs.call(t,s)||!It(e[s],t[s]))return!1}return!0}function Ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var a=Ad(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ad(a)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Td(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xo(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xo(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Zf=ra&&"documentMode"in document&&11>=document.documentMode,Ki=null,nl=null,xn=null,ol=!1;function md(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ol||Ki==null||Ki!==Xo(o)||(o=Ki,"selectionStart"in o&&il(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xn&&Vn(xn,o)||(xn=o,o=zr(nl,"onSelect"),0<o.length&&(t=new tr("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=Ki)))}function oi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Wi={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionrun:oi("Transition","TransitionRun"),transitionstart:oi("Transition","TransitionStart"),transitioncancel:oi("Transition","TransitionCancel"),transitionend:oi("Transition","TransitionEnd")},rl={},Rd={};ra&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function ri(e){if(rl[e])return rl[e];if(!Wi[e])return e;var t=Wi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Rd)return rl[e]=t[a];return e}var fd=ri("animationend"),Cd=ri("animationiteration"),Od=ri("animationstart"),Xf=ri("transitionrun"),qf=ri("transitionstart"),Qf=ri("transitioncancel"),pd=ri("transitionend"),gd=new Map,sl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sl.push("scrollEnd");function Jt(e,t){gd.set(e,t),ii(t,[e])}var nr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ft=[],Yi=0,ll=0;function or(){for(var e=Yi,t=ll=Yi=0;t<e;){var a=Ft[t];Ft[t++]=null;var o=Ft[t];Ft[t++]=null;var s=Ft[t];Ft[t++]=null;var u=Ft[t];if(Ft[t++]=null,o!==null&&s!==null){var A=o.pending;A===null?s.next=s:(s.next=A.next,A.next=s),o.pending=s}u!==0&&Nd(a,s,u)}}function rr(e,t,a,o){Ft[Yi++]=e,Ft[Yi++]=t,Ft[Yi++]=a,Ft[Yi++]=o,ll|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ul(e,t,a,o){return rr(e,t,a,o),sr(e)}function si(e,t){return rr(e,null,null,t),sr(e)}function Nd(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var s=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&t!==null&&(s=31-Nt(a),e=u.hiddenUpdates,o=e[s],o===null?e[s]=[t]:o.push(t),t.lane=a|536870912),u):null}function sr(e){if(50<uo)throw uo=0,Ru=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zi={};function $f(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,a,o){return new $f(e,t,a,o)}function cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,t){var a=e.alternate;return a===null?(a=yt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Id(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function lr(e,t,a,o,s,u){var A=0;if(o=e,typeof e=="function")cl(e)&&(A=1);else if(typeof e=="string")A=nO(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case oe:return e=yt(31,a,t,s),e.elementType=oe,e.lanes=u,e;case V:return li(a.children,s,u,t);case B:A=8,s|=24;break;case I:return e=yt(12,a,t,s|2),e.elementType=I,e.lanes=u,e;case _:return e=yt(13,a,t,s),e.elementType=_,e.lanes=u,e;case $:return e=yt(19,a,t,s),e.elementType=$,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:A=10;break e;case b:A=9;break e;case J:A=11;break e;case X:A=14;break e;case z:A=16,o=null;break e}A=29,a=Error(l(130,e===null?"null":typeof e,"")),o=null}return t=yt(A,a,t,s),t.elementType=e,t.type=o,t.lanes=u,t}function li(e,t,a,o){return e=yt(7,e,o,t),e.lanes=a,e}function Sl(e,t,a){return e=yt(6,e,null,t),e.lanes=a,e}function yd(e){var t=yt(18,null,null,0);return t.stateNode=e,t}function dl(e,t,a){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ld=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var a=Ld.get(e);return a!==void 0?a:(t={value:e,source:t,stack:yS(t)},Ld.set(e,t),t)}return{value:e,source:t,stack:yS(t)}}var Ji=[],_i=0,ur=null,Kn=0,kt=[],wt=0,Pa=null,qt=1,Qt="";function la(e,t){Ji[_i++]=Kn,Ji[_i++]=ur,ur=e,Kn=t}function Md(e,t,a){kt[wt++]=qt,kt[wt++]=Qt,kt[wt++]=Pa,Pa=e;var o=qt;e=Qt;var s=32-Nt(o)-1;o&=~(1<<s),a+=1;var u=32-Nt(t)+s;if(30<u){var A=s-s%5;u=(o&(1<<A)-1).toString(32),o>>=A,s-=A,qt=1<<32-Nt(t)+s|a<<s|o,Qt=u+e}else qt=1<<u|a<<s|o,Qt=e}function Al(e){e.return!==null&&(la(e,1),Md(e,1,0))}function El(e){for(;e===ur;)ur=Ji[--_i],Ji[_i]=null,Kn=Ji[--_i],Ji[_i]=null;for(;e===Pa;)Pa=kt[--wt],kt[wt]=null,Qt=kt[--wt],kt[wt]=null,qt=kt[--wt],kt[wt]=null}function Pd(e,t){kt[wt++]=qt,kt[wt++]=Qt,kt[wt++]=Pa,qt=t.id,Qt=t.overflow,Pa=e}var $e=null,De=null,Te=!1,Da=null,Vt=!1,hl=Error(l(519));function Ba(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wn(Ut(t,e)),hl}function Dd(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[Qe]=e,t[ht]=o,a){case"dialog":Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":case"embed":Ae("load",t);break;case"video":case"audio":for(a=0;a<So.length;a++)Ae(So[a],t);break;case"source":Ae("error",t);break;case"img":case"image":case"link":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"input":Ae("invalid",t),WS(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ae("invalid",t);break;case"textarea":Ae("invalid",t),zS(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||_E(t.textContent,a)?(o.popover!=null&&(Ae("beforetoggle",t),Ae("toggle",t)),o.onScroll!=null&&Ae("scroll",t),o.onScrollEnd!=null&&Ae("scrollend",t),o.onClick!=null&&(t.onclick=oa),t=!0):t=!1,t||Ba(e,!0)}function Bd(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:$e=$e.return}}function ji(e){if(e!==$e)return!1;if(!Te)return Bd(e),Te=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vu(e.type,e.memoizedProps)),a=!a),a&&De&&Ba(e),Bd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));De=ah(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));De=ah(e)}else t===27?(t=De,za(e.type)?(e=ku,ku=null,De=e):De=t):De=$e?Kt(e.stateNode.nextSibling):null;return!0}function ui(){De=$e=null,Te=!1}function Tl(){var e=Da;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),Da=null),e}function Wn(e){Da===null?Da=[e]:Da.push(e)}var ml=O(null),ci=null,ua=null;function Ha(e,t,a){Y(ml,t._currentValue),t._currentValue=a}function ca(e){e._currentValue=ml.current,U(ml)}function Rl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function fl(e,t,a,o){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var A=s.child;u=u.firstContext;e:for(;u!==null;){var m=u;u=s;for(var p=0;p<t.length;p++)if(m.context===t[p]){u.lanes|=a,m=u.alternate,m!==null&&(m.lanes|=a),Rl(u.return,a,e),o||(A=null);break e}u=m.next}}else if(s.tag===18){if(A=s.return,A===null)throw Error(l(341));A.lanes|=a,u=A.alternate,u!==null&&(u.lanes|=a),Rl(A,a,e),A=null}else A=s.child;if(A!==null)A.return=s;else for(A=s;A!==null;){if(A===e){A=null;break}if(s=A.sibling,s!==null){s.return=A.return,A=s;break}A=A.return}s=A}}function Zi(e,t,a,o){e=null;for(var s=t,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var A=s.alternate;if(A===null)throw Error(l(387));if(A=A.memoizedProps,A!==null){var m=s.type;It(s.pendingProps.value,A.value)||(e!==null?e.push(m):e=[m])}}else if(s===pe.current){if(A=s.alternate,A===null)throw Error(l(387));A.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(mo):e=[mo])}s=s.return}e!==null&&fl(t,e,a,o),t.flags|=262144}function cr(e){for(e=e.firstContext;e!==null;){if(!It(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Si(e){ci=e,ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Hd(ci,e)}function Sr(e,t){return ci===null&&Si(e),Hd(e,t)}function Hd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ua===null){if(e===null)throw Error(l(308));ua=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ua=ua.next=t;return a}var eC=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},tC=i.unstable_scheduleCallback,aC=i.unstable_NormalPriority,ze={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cl(){return{controller:new eC,data:new Map,refCount:0}}function Yn(e){e.refCount--,e.refCount===0&&tC(aC,function(){e.controller.abort()})}var zn=null,Ol=0,Xi=0,qi=null;function iC(e,t){if(zn===null){var a=zn=[];Ol=0,Xi=Nu(),qi={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ol++,t.then(vd,vd),t}function vd(){if(--Ol===0&&zn!==null){qi!==null&&(qi.status="fulfilled");var e=zn;zn=null,Xi=0,qi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function nC(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(o.status="rejected",o.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),o}var bd=F.S;F.S=function(e,t){mE=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&iC(e,t),bd!==null&&bd(e,t)};var di=O(null);function pl(){var e=di.current;return e!==null?e:Pe.pooledCache}function dr(e,t){t===null?Y(di,di.current):Y(di,t.pool)}function Gd(){var e=pl();return e===null?null:{parent:ze._currentValue,pool:e}}var Qi=Error(l(460)),gl=Error(l(474)),Ar=Error(l(542)),Er={then:function(){}};function Fd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ud(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(oa,oa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wd(e),e;default:if(typeof t.status=="string")t.then(oa,oa);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=o}},function(o){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wd(e),e}throw Ei=t,Qi}}function Ai(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ei=a,Qi):a}}var Ei=null;function kd(){if(Ei===null)throw Error(l(459));var e=Ei;return Ei=null,e}function wd(e){if(e===Qi||e===Ar)throw Error(l(483))}var $i=null,Jn=0;function hr(e){var t=Jn;return Jn+=1,$i===null&&($i=[]),Ud($i,e,t)}function _n(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tr(e,t){throw t.$$typeof===C?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vd(e){function t(y,g){if(e){var M=y.deletions;M===null?(y.deletions=[g],y.flags|=16):M.push(g)}}function a(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function o(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function s(y,g){return y=sa(y,g),y.index=0,y.sibling=null,y}function u(y,g,M){return y.index=M,e?(M=y.alternate,M!==null?(M=M.index,M<g?(y.flags|=67108866,g):M):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function A(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function m(y,g,M,k){return g===null||g.tag!==6?(g=Sl(M,y.mode,k),g.return=y,g):(g=s(g,M),g.return=y,g)}function p(y,g,M,k){var ee=M.type;return ee===V?G(y,g,M.props.children,k,M.key):g!==null&&(g.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===z&&Ai(ee)===g.type)?(g=s(g,M.props),_n(g,M),g.return=y,g):(g=lr(M.type,M.key,M.props,null,y.mode,k),_n(g,M),g.return=y,g)}function P(y,g,M,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=dl(M,y.mode,k),g.return=y,g):(g=s(g,M.children||[]),g.return=y,g)}function G(y,g,M,k,ee){return g===null||g.tag!==7?(g=li(M,y.mode,k,ee),g.return=y,g):(g=s(g,M),g.return=y,g)}function w(y,g,M){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Sl(""+g,y.mode,M),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case L:return M=lr(g.type,g.key,g.props,null,y.mode,M),_n(M,g),M.return=y,M;case v:return g=dl(g,y.mode,M),g.return=y,g;case z:return g=Ai(g),w(y,g,M)}if(Ye(g)||Re(g))return g=li(g,y.mode,M,null),g.return=y,g;if(typeof g.then=="function")return w(y,hr(g),M);if(g.$$typeof===x)return w(y,Sr(y,g),M);Tr(y,g)}return null}function D(y,g,M,k){var ee=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ee!==null?null:m(y,g,""+M,k);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case L:return M.key===ee?p(y,g,M,k):null;case v:return M.key===ee?P(y,g,M,k):null;case z:return M=Ai(M),D(y,g,M,k)}if(Ye(M)||Re(M))return ee!==null?null:G(y,g,M,k,null);if(typeof M.then=="function")return D(y,g,hr(M),k);if(M.$$typeof===x)return D(y,g,Sr(y,M),k);Tr(y,M)}return null}function H(y,g,M,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return y=y.get(M)||null,m(g,y,""+k,ee);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case L:return y=y.get(k.key===null?M:k.key)||null,p(g,y,k,ee);case v:return y=y.get(k.key===null?M:k.key)||null,P(g,y,k,ee);case z:return k=Ai(k),H(y,g,M,k,ee)}if(Ye(k)||Re(k))return y=y.get(M)||null,G(g,y,k,ee,null);if(typeof k.then=="function")return H(y,g,M,hr(k),ee);if(k.$$typeof===x)return H(y,g,M,Sr(g,k),ee);Tr(g,k)}return null}function Z(y,g,M,k){for(var ee=null,fe=null,Q=g,ue=g=0,he=null;Q!==null&&ue<M.length;ue++){Q.index>ue?(he=Q,Q=null):he=Q.sibling;var Ce=D(y,Q,M[ue],k);if(Ce===null){Q===null&&(Q=he);break}e&&Q&&Ce.alternate===null&&t(y,Q),g=u(Ce,g,ue),fe===null?ee=Ce:fe.sibling=Ce,fe=Ce,Q=he}if(ue===M.length)return a(y,Q),Te&&la(y,ue),ee;if(Q===null){for(;ue<M.length;ue++)Q=w(y,M[ue],k),Q!==null&&(g=u(Q,g,ue),fe===null?ee=Q:fe.sibling=Q,fe=Q);return Te&&la(y,ue),ee}for(Q=o(Q);ue<M.length;ue++)he=H(Q,y,ue,M[ue],k),he!==null&&(e&&he.alternate!==null&&Q.delete(he.key===null?ue:he.key),g=u(he,g,ue),fe===null?ee=he:fe.sibling=he,fe=he);return e&&Q.forEach(function(Xa){return t(y,Xa)}),Te&&la(y,ue),ee}function ae(y,g,M,k){if(M==null)throw Error(l(151));for(var ee=null,fe=null,Q=g,ue=g=0,he=null,Ce=M.next();Q!==null&&!Ce.done;ue++,Ce=M.next()){Q.index>ue?(he=Q,Q=null):he=Q.sibling;var Xa=D(y,Q,Ce.value,k);if(Xa===null){Q===null&&(Q=he);break}e&&Q&&Xa.alternate===null&&t(y,Q),g=u(Xa,g,ue),fe===null?ee=Xa:fe.sibling=Xa,fe=Xa,Q=he}if(Ce.done)return a(y,Q),Te&&la(y,ue),ee;if(Q===null){for(;!Ce.done;ue++,Ce=M.next())Ce=w(y,Ce.value,k),Ce!==null&&(g=u(Ce,g,ue),fe===null?ee=Ce:fe.sibling=Ce,fe=Ce);return Te&&la(y,ue),ee}for(Q=o(Q);!Ce.done;ue++,Ce=M.next())Ce=H(Q,y,ue,Ce.value,k),Ce!==null&&(e&&Ce.alternate!==null&&Q.delete(Ce.key===null?ue:Ce.key),g=u(Ce,g,ue),fe===null?ee=Ce:fe.sibling=Ce,fe=Ce);return e&&Q.forEach(function(hO){return t(y,hO)}),Te&&la(y,ue),ee}function Me(y,g,M,k){if(typeof M=="object"&&M!==null&&M.type===V&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case L:e:{for(var ee=M.key;g!==null;){if(g.key===ee){if(ee=M.type,ee===V){if(g.tag===7){a(y,g.sibling),k=s(g,M.props.children),k.return=y,y=k;break e}}else if(g.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===z&&Ai(ee)===g.type){a(y,g.sibling),k=s(g,M.props),_n(k,M),k.return=y,y=k;break e}a(y,g);break}else t(y,g);g=g.sibling}M.type===V?(k=li(M.props.children,y.mode,k,M.key),k.return=y,y=k):(k=lr(M.type,M.key,M.props,null,y.mode,k),_n(k,M),k.return=y,y=k)}return A(y);case v:e:{for(ee=M.key;g!==null;){if(g.key===ee)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){a(y,g.sibling),k=s(g,M.children||[]),k.return=y,y=k;break e}else{a(y,g);break}else t(y,g);g=g.sibling}k=dl(M,y.mode,k),k.return=y,y=k}return A(y);case z:return M=Ai(M),Me(y,g,M,k)}if(Ye(M))return Z(y,g,M,k);if(Re(M)){if(ee=Re(M),typeof ee!="function")throw Error(l(150));return M=ee.call(M),ae(y,g,M,k)}if(typeof M.then=="function")return Me(y,g,hr(M),k);if(M.$$typeof===x)return Me(y,g,Sr(y,M),k);Tr(y,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,g!==null&&g.tag===6?(a(y,g.sibling),k=s(g,M),k.return=y,y=k):(a(y,g),k=Sl(M,y.mode,k),k.return=y,y=k),A(y)):a(y,g)}return function(y,g,M,k){try{Jn=0;var ee=Me(y,g,M,k);return $i=null,ee}catch(Q){if(Q===Qi||Q===Ar)throw Q;var fe=yt(29,Q,null,y.mode);return fe.lanes=k,fe.return=y,fe}finally{}}}var hi=Vd(!0),xd=Vd(!1),va=!1;function Nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Il(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,t=sr(e),Nd(e,null,a),t}return rr(e,o,t,a),sr(e)}function jn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,HS(e,a)}}function yl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var s=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var A={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?s=u=A:u=u.next=A,a=a.next}while(a!==null);u===null?s=u=t:u=u.next=t}else s=u=t;a={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ll=!1;function Zn(){if(Ll){var e=qi;if(e!==null)throw e}}function Xn(e,t,a,o){Ll=!1;var s=e.updateQueue;va=!1;var u=s.firstBaseUpdate,A=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var p=m,P=p.next;p.next=null,A===null?u=P:A.next=P,A=p;var G=e.alternate;G!==null&&(G=G.updateQueue,m=G.lastBaseUpdate,m!==A&&(m===null?G.firstBaseUpdate=P:m.next=P,G.lastBaseUpdate=p))}if(u!==null){var w=s.baseState;A=0,G=P=p=null,m=u;do{var D=m.lane&-536870913,H=D!==m.lane;if(H?(Ee&D)===D:(o&D)===D){D!==0&&D===Xi&&(Ll=!0),G!==null&&(G=G.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Z=e,ae=m;D=t;var Me=a;switch(ae.tag){case 1:if(Z=ae.payload,typeof Z=="function"){w=Z.call(Me,w,D);break e}w=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ae.payload,D=typeof Z=="function"?Z.call(Me,w,D):Z,D==null)break e;w=f({},w,D);break e;case 2:va=!0}}D=m.callback,D!==null&&(e.flags|=64,H&&(e.flags|=8192),H=s.callbacks,H===null?s.callbacks=[D]:H.push(D))}else H={lane:D,tag:m.tag,payload:m.payload,callback:m.callback,next:null},G===null?(P=G=H,p=w):G=G.next=H,A|=D;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;H=m,m=H.next,H.next=null,s.lastBaseUpdate=H,s.shared.pending=null}}while(!0);G===null&&(p=w),s.baseState=p,s.firstBaseUpdate=P,s.lastBaseUpdate=G,u===null&&(s.shared.lanes=0),Va|=A,e.lanes=A,e.memoizedState=w}}function Kd(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Wd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Kd(a[e],t)}var en=O(null),mr=O(0);function Yd(e,t){e=fa,Y(mr,e),Y(en,t),fa=e|t.baseLanes}function Ml(){Y(mr,fa),Y(en,en.current)}function Pl(){fa=mr.current,U(en),U(mr)}var Lt=O(null),xt=null;function Fa(e){var t=e.alternate;Y(xe,xe.current&1),Y(Lt,e),xt===null&&(t===null||en.current!==null||t.memoizedState!==null)&&(xt=e)}function Dl(e){Y(xe,xe.current),Y(Lt,e),xt===null&&(xt=e)}function zd(e){e.tag===22?(Y(xe,xe.current),Y(Lt,e),xt===null&&(xt=e)):Ua()}function Ua(){Y(xe,xe.current),Y(Lt,Lt.current)}function Mt(e){U(Lt),xt===e&&(xt=null),U(xe)}var xe=O(0);function Rr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Fu(a)||Uu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sa=0,se=null,ye=null,Je=null,fr=!1,tn=!1,Ti=!1,Cr=0,qn=0,an=null,oC=0;function Fe(){throw Error(l(321))}function Bl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!It(e[a],t[a]))return!1;return!0}function Hl(e,t,a,o,s,u){return Sa=u,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,F.H=e===null||e.memoizedState===null?MA:_l,Ti=!1,u=a(o,s),Ti=!1,tn&&(u=_d(t,a,o,s)),Jd(e),u}function Jd(e){F.H=eo;var t=ye!==null&&ye.next!==null;if(Sa=0,Je=ye=se=null,fr=!1,qn=0,an=null,t)throw Error(l(300));e===null||_e||(e=e.dependencies,e!==null&&cr(e)&&(_e=!0))}function _d(e,t,a,o){se=e;var s=0;do{if(tn&&(an=null),qn=0,tn=!1,25<=s)throw Error(l(301));if(s+=1,Je=ye=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}F.H=PA,u=t(a,o)}while(tn);return u}function rC(){var e=F.H,t=e.useState()[0];return t=typeof t.then=="function"?Qn(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(se.flags|=1024),t}function vl(){var e=Cr!==0;return Cr=0,e}function bl(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Gl(e){if(fr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fr=!1}Sa=0,Je=ye=se=null,tn=!1,qn=Cr=0,an=null}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?se.memoizedState=Je=e:Je=Je.next=e,Je}function Ke(){if(ye===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Je===null?se.memoizedState:Je.next;if(t!==null)Je=t,ye=e;else{if(e===null)throw se.alternate===null?Error(l(467)):Error(l(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Je===null?se.memoizedState=Je=e:Je=Je.next=e}return Je}function Or(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qn(e){var t=qn;return qn+=1,an===null&&(an=[]),e=Ud(an,e,t),t=se,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,F.H=t===null||t.memoizedState===null?MA:_l),e}function pr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qn(e);if(e.$$typeof===x)return et(e)}throw Error(l(438,String(e)))}function Fl(e){var t=null,a=se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Or(),se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=le;return t.index++,a}function da(e,t){return typeof t=="function"?t(e):t}function gr(e){var t=Ke();return Ul(t,ye,e)}function Ul(e,t,a){var o=e.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=a;var s=e.baseQueue,u=o.pending;if(u!==null){if(s!==null){var A=s.next;s.next=u.next,u.next=A}t.baseQueue=s=u,o.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{t=s.next;var m=A=null,p=null,P=t,G=!1;do{var w=P.lane&-536870913;if(w!==P.lane?(Ee&w)===w:(Sa&w)===w){var D=P.revertLane;if(D===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),w===Xi&&(G=!0);else if((Sa&D)===D){P=P.next,D===Xi&&(G=!0);continue}else w={lane:0,revertLane:P.revertLane,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},p===null?(m=p=w,A=u):p=p.next=w,se.lanes|=D,Va|=D;w=P.action,Ti&&a(u,w),u=P.hasEagerState?P.eagerState:a(u,w)}else D={lane:w,revertLane:P.revertLane,gesture:P.gesture,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},p===null?(m=p=D,A=u):p=p.next=D,se.lanes|=w,Va|=w;P=P.next}while(P!==null&&P!==t);if(p===null?A=u:p.next=m,!It(u,e.memoizedState)&&(_e=!0,G&&(a=qi,a!==null)))throw a;e.memoizedState=u,e.baseState=A,e.baseQueue=p,o.lastRenderedState=u}return s===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function kl(e){var t=Ke(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var o=a.dispatch,s=a.pending,u=t.memoizedState;if(s!==null){a.pending=null;var A=s=s.next;do u=e(u,A.action),A=A.next;while(A!==s);It(u,t.memoizedState)||(_e=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function jd(e,t,a){var o=se,s=Ke(),u=Te;if(u){if(a===void 0)throw Error(l(407));a=a()}else a=t();var A=!It((ye||s).memoizedState,a);if(A&&(s.memoizedState=a,_e=!0),s=s.queue,xl(qd.bind(null,o,s,e),[e]),s.getSnapshot!==t||A||Je!==null&&Je.memoizedState.tag&1){if(o.flags|=2048,nn(9,{destroy:void 0},Xd.bind(null,o,s,a,t),null),Pe===null)throw Error(l(349));u||(Sa&127)!==0||Zd(o,t,a)}return a}function Zd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=se.updateQueue,t===null?(t=Or(),se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Xd(e,t,a,o){t.value=a,t.getSnapshot=o,Qd(t)&&$d(e)}function qd(e,t,a){return a(function(){Qd(t)&&$d(e)})}function Qd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!It(e,a)}catch{return!0}}function $d(e){var t=si(e,2);t!==null&&Ot(t,e,2)}function wl(e){var t=Et();if(typeof e=="function"){var a=e;if(e=a(),Ti){ya(!0);try{a()}finally{ya(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t}function eA(e,t,a,o){return e.baseState=a,Ul(e,ye,typeof o=="function"?o:da)}function sC(e,t,a,o,s){if(yr(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(A){u.listeners.push(A)}};F.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,tA(t,u)):(u.next=a.next,t.pending=a.next=u)}}function tA(e,t){var a=t.action,o=t.payload,s=e.state;if(t.isTransition){var u=F.T,A={};F.T=A;try{var m=a(s,o),p=F.S;p!==null&&p(A,m),aA(e,t,m)}catch(P){Vl(e,t,P)}finally{u!==null&&A.types!==null&&(u.types=A.types),F.T=u}}else try{u=a(s,o),aA(e,t,u)}catch(P){Vl(e,t,P)}}function aA(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){iA(e,t,o)},function(o){return Vl(e,t,o)}):iA(e,t,a)}function iA(e,t,a){t.status="fulfilled",t.value=a,nA(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,tA(e,a)))}function Vl(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,nA(t),t=t.next;while(t!==o)}e.action=null}function nA(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function oA(e,t){return t}function rA(e,t){if(Te){var a=Pe.formState;if(a!==null){e:{var o=se;if(Te){if(De){t:{for(var s=De,u=Vt;s.nodeType!==8;){if(!u){s=null;break t}if(s=Kt(s.nextSibling),s===null){s=null;break t}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){De=Kt(s.nextSibling),o=s.data==="F!";break e}}Ba(o)}o=!1}o&&(t=a[0])}}return a=Et(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oA,lastRenderedState:t},a.queue=o,a=IA.bind(null,se,o),o.dispatch=a,o=wl(!1),u=Jl.bind(null,se,!1,o.queue),o=Et(),s={state:t,dispatch:null,action:e,pending:null},o.queue=s,a=sC.bind(null,se,s,u,a),s.dispatch=a,o.memoizedState=e,[t,a,!1]}function sA(e){var t=Ke();return lA(t,ye,e)}function lA(e,t,a){if(t=Ul(e,t,oA)[0],e=gr(da)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Qn(t)}catch(A){throw A===Qi?Ar:A}else o=t;t=Ke();var s=t.queue,u=s.dispatch;return a!==t.memoizedState&&(se.flags|=2048,nn(9,{destroy:void 0},lC.bind(null,s,a),null)),[o,u,e]}function lC(e,t){e.action=t}function uA(e){var t=Ke(),a=ye;if(a!==null)return lA(t,a,e);Ke(),t=t.memoizedState,a=Ke();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function nn(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=se.updateQueue,t===null&&(t=Or(),se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function cA(){return Ke().memoizedState}function Nr(e,t,a,o){var s=Et();se.flags|=e,s.memoizedState=nn(1|t,{destroy:void 0},a,o===void 0?null:o)}function Ir(e,t,a,o){var s=Ke();o=o===void 0?null:o;var u=s.memoizedState.inst;ye!==null&&o!==null&&Bl(o,ye.memoizedState.deps)?s.memoizedState=nn(t,u,a,o):(se.flags|=e,s.memoizedState=nn(1|t,u,a,o))}function SA(e,t){Nr(8390656,8,e,t)}function xl(e,t){Ir(2048,8,e,t)}function uC(e){se.flags|=4;var t=se.updateQueue;if(t===null)t=Or(),se.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function dA(e){var t=Ke().memoizedState;return uC({ref:t,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function AA(e,t){return Ir(4,2,e,t)}function EA(e,t){return Ir(4,4,e,t)}function hA(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function TA(e,t,a){a=a!=null?a.concat([e]):null,Ir(4,4,hA.bind(null,t,e),a)}function Kl(){}function mA(e,t){var a=Ke();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Bl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function RA(e,t){var a=Ke();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Bl(t,o[1]))return o[0];if(o=e(),Ti){ya(!0);try{e()}finally{ya(!1)}}return a.memoizedState=[o,t],o}function Wl(e,t,a){return a===void 0||(Sa&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=fE(),se.lanes|=e,Va|=e,a)}function fA(e,t,a,o){return It(a,t)?a:en.current!==null?(e=Wl(e,a,o),It(e,t)||(_e=!0),e):(Sa&42)===0||(Sa&1073741824)!==0&&(Ee&261930)===0?(_e=!0,e.memoizedState=a):(e=fE(),se.lanes|=e,Va|=e,t)}function CA(e,t,a,o,s){var u=W.p;W.p=u!==0&&8>u?u:8;var A=F.T,m={};F.T=m,Jl(e,!1,t,a);try{var p=s(),P=F.S;if(P!==null&&P(m,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var G=nC(p,o);$n(e,t,G,Bt(e))}else $n(e,t,o,Bt(e))}catch(w){$n(e,t,{then:function(){},status:"rejected",reason:w},Bt())}finally{W.p=u,A!==null&&m.types!==null&&(A.types=m.types),F.T=A}}function cC(){}function Yl(e,t,a,o){if(e.tag!==5)throw Error(l(476));var s=OA(e).queue;CA(e,s,t,j,a===null?cC:function(){return pA(e),a(o)})}function OA(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:j},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function pA(e){var t=OA(e);t.next===null&&(t=e.alternate.memoizedState),$n(e,t.next.queue,{},Bt())}function zl(){return et(mo)}function gA(){return Ke().memoizedState}function NA(){return Ke().memoizedState}function SC(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Bt();e=ba(a);var o=Ga(t,e,a);o!==null&&(Ot(o,t,a),jn(o,t,a)),t={cache:Cl()},e.payload=t;return}t=t.return}}function dC(e,t,a){var o=Bt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yr(e)?yA(t,a):(a=ul(e,t,a,o),a!==null&&(Ot(a,e,o),LA(a,t,o)))}function IA(e,t,a){var o=Bt();$n(e,t,a,o)}function $n(e,t,a,o){var s={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yr(e))yA(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var A=t.lastRenderedState,m=u(A,a);if(s.hasEagerState=!0,s.eagerState=m,It(m,A))return rr(e,t,s,0),Pe===null&&or(),!1}catch{}finally{}if(a=ul(e,t,s,o),a!==null)return Ot(a,e,o),LA(a,t,o),!0}return!1}function Jl(e,t,a,o){if(o={lane:2,revertLane:Nu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},yr(e)){if(t)throw Error(l(479))}else t=ul(e,a,o,2),t!==null&&Ot(t,e,2)}function yr(e){var t=e.alternate;return e===se||t!==null&&t===se}function yA(e,t){tn=fr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function LA(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,HS(e,a)}}var eo={readContext:et,use:pr,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe};eo.useEffectEvent=Fe;var MA={readContext:et,use:pr,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:SA,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Nr(4194308,4,hA.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){Nr(4,2,e,t)},useMemo:function(e,t){var a=Et();t=t===void 0?null:t;var o=e();if(Ti){ya(!0);try{e()}finally{ya(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Et();if(a!==void 0){var s=a(t);if(Ti){ya(!0);try{a(t)}finally{ya(!1)}}}else s=t;return o.memoizedState=o.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},o.queue=e,e=e.dispatch=dC.bind(null,se,e),[o.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:function(e){e=wl(e);var t=e.queue,a=IA.bind(null,se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Kl,useDeferredValue:function(e,t){var a=Et();return Wl(a,e,t)},useTransition:function(){var e=wl(!1);return e=CA.bind(null,se,e.queue,!0,!1),Et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=se,s=Et();if(Te){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),Pe===null)throw Error(l(349));(Ee&127)!==0||Zd(o,t,a)}s.memoizedState=a;var u={value:a,getSnapshot:t};return s.queue=u,SA(qd.bind(null,o,u,e),[e]),o.flags|=2048,nn(9,{destroy:void 0},Xd.bind(null,o,u,a,t),null),a},useId:function(){var e=Et(),t=Pe.identifierPrefix;if(Te){var a=Qt,o=qt;a=(o&~(1<<32-Nt(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Cr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=oC++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zl,useFormState:rA,useActionState:rA,useOptimistic:function(e){var t=Et();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Jl.bind(null,se,!0,a),a.dispatch=t,[e,t]},useMemoCache:Fl,useCacheRefresh:function(){return Et().memoizedState=SC.bind(null,se)},useEffectEvent:function(e){var t=Et(),a={impl:e};return t.memoizedState=a,function(){if((Oe&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},_l={readContext:et,use:pr,useCallback:mA,useContext:et,useEffect:xl,useImperativeHandle:TA,useInsertionEffect:AA,useLayoutEffect:EA,useMemo:RA,useReducer:gr,useRef:cA,useState:function(){return gr(da)},useDebugValue:Kl,useDeferredValue:function(e,t){var a=Ke();return fA(a,ye.memoizedState,e,t)},useTransition:function(){var e=gr(da)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Qn(e),t]},useSyncExternalStore:jd,useId:gA,useHostTransitionStatus:zl,useFormState:sA,useActionState:sA,useOptimistic:function(e,t){var a=Ke();return eA(a,ye,e,t)},useMemoCache:Fl,useCacheRefresh:NA};_l.useEffectEvent=dA;var PA={readContext:et,use:pr,useCallback:mA,useContext:et,useEffect:xl,useImperativeHandle:TA,useInsertionEffect:AA,useLayoutEffect:EA,useMemo:RA,useReducer:kl,useRef:cA,useState:function(){return kl(da)},useDebugValue:Kl,useDeferredValue:function(e,t){var a=Ke();return ye===null?Wl(a,e,t):fA(a,ye.memoizedState,e,t)},useTransition:function(){var e=kl(da)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Qn(e),t]},useSyncExternalStore:jd,useId:gA,useHostTransitionStatus:zl,useFormState:uA,useActionState:uA,useOptimistic:function(e,t){var a=Ke();return ye!==null?eA(a,ye,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fl,useCacheRefresh:NA};PA.useEffectEvent=dA;function jl(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:f({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zl={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Bt(),s=ba(o);s.payload=t,a!=null&&(s.callback=a),t=Ga(e,s,o),t!==null&&(Ot(t,e,o),jn(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Bt(),s=ba(o);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=Ga(e,s,o),t!==null&&(Ot(t,e,o),jn(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Bt(),o=ba(a);o.tag=2,t!=null&&(o.callback=t),t=Ga(e,o,a),t!==null&&(Ot(t,e,a),jn(t,e,a))}};function DA(e,t,a,o,s,u,A){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,A):t.prototype&&t.prototype.isPureReactComponent?!Vn(a,o)||!Vn(s,u):!0}function BA(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Zl.enqueueReplaceState(t,t.state,null)}function mi(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=f({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function HA(e){nr(e)}function vA(e){console.error(e)}function bA(e){nr(e)}function Lr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function GA(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Xl(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Lr(e,t)},a}function FA(e){return e=ba(e),e.tag=3,e}function UA(e,t,a,o){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var u=o.value;e.payload=function(){return s(u)},e.callback=function(){GA(t,a,o)}}var A=a.stateNode;A!==null&&typeof A.componentDidCatch=="function"&&(e.callback=function(){GA(t,a,o),typeof s!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var m=o.stack;this.componentDidCatch(o.value,{componentStack:m!==null?m:""})})}function AC(e,t,a,o,s){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&Zi(t,a,s,!0),a=Lt.current,a!==null){switch(a.tag){case 31:case 13:return xt===null?wr():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=s,o===Er?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Ou(e,o,s)),!1;case 22:return a.flags|=65536,o===Er?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Ou(e,o,s)),!1}throw Error(l(435,a.tag))}return Ou(e,o,s),wr(),!1}if(Te)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,o!==hl&&(e=Error(l(422),{cause:o}),Wn(Ut(e,a)))):(o!==hl&&(t=Error(l(423),{cause:o}),Wn(Ut(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,o=Ut(o,a),s=Xl(e.stateNode,o,s),yl(e,s),Ue!==4&&(Ue=2)),!1;var u=Error(l(520),{cause:o});if(u=Ut(u,a),lo===null?lo=[u]:lo.push(u),Ue!==4&&(Ue=2),t===null)return!0;o=Ut(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=Xl(a.stateNode,o,e),yl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(xa===null||!xa.has(u))))return a.flags|=65536,s&=-s,a.lanes|=s,s=FA(s),UA(s,e,a,o),yl(a,s),!1}a=a.return}while(a!==null);return!1}var ql=Error(l(461)),_e=!1;function tt(e,t,a,o){t.child=e===null?xd(t,null,a,o):hi(t,e.child,a,o)}function kA(e,t,a,o,s){a=a.render;var u=t.ref;if("ref"in o){var A={};for(var m in o)m!=="ref"&&(A[m]=o[m])}else A=o;return Si(t),o=Hl(e,t,a,A,u,s),m=vl(),e!==null&&!_e?(bl(e,t,s),Aa(e,t,s)):(Te&&m&&Al(t),t.flags|=1,tt(e,t,o,s),t.child)}function wA(e,t,a,o,s){if(e===null){var u=a.type;return typeof u=="function"&&!cl(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,VA(e,t,u,o,s)):(e=lr(a.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!ou(e,s)){var A=u.memoizedProps;if(a=a.compare,a=a!==null?a:Vn,a(A,o)&&e.ref===t.ref)return Aa(e,t,s)}return t.flags|=1,e=sa(u,o),e.ref=t.ref,e.return=t,t.child=e}function VA(e,t,a,o,s){if(e!==null){var u=e.memoizedProps;if(Vn(u,o)&&e.ref===t.ref)if(_e=!1,t.pendingProps=o=u,ou(e,s))(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,Aa(e,t,s)}return Ql(e,t,a,o,s)}function xA(e,t,a,o){var s=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,s=0;o!==null;)s=s|o.lanes|o.childLanes,o=o.sibling;o=s&~u}else o=0,t.child=null;return KA(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&dr(t,u!==null?u.cachePool:null),u!==null?Yd(t,u):Ml(),zd(t);else return o=t.lanes=536870912,KA(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(dr(t,u.cachePool),Yd(t,u),Ua(),t.memoizedState=null):(e!==null&&dr(t,null),Ml(),Ua());return tt(e,t,s,a),t.child}function to(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function KA(e,t,a,o,s){var u=pl();return u=u===null?null:{parent:ze._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&dr(t,null),Ml(),zd(t),e!==null&&Zi(e,t,o,!0),t.childLanes=s,null}function Mr(e,t){return t=Dr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function WA(e,t,a){return hi(t,e.child,null,a),e=Mr(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function EC(e,t,a){var o=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Mr(t,o),t.lanes=536870912,to(null,e);if(Dl(t),(e=De)?(e=th(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:qt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},a=yd(e),a.return=t,t.child=a,$e=t,De=null)):e=null,e===null)throw Ba(t);return t.lanes=536870912,null}return Mr(t,o)}var u=e.memoizedState;if(u!==null){var A=u.dehydrated;if(Dl(t),s)if(t.flags&256)t.flags&=-257,t=WA(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(_e||Zi(e,t,a,!1),s=(a&e.childLanes)!==0,_e||s){if(o=Pe,o!==null&&(A=vS(o,a),A!==0&&A!==u.retryLane))throw u.retryLane=A,si(e,A),Ot(o,e,A),ql;wr(),t=WA(e,t,a)}else e=u.treeContext,De=Kt(A.nextSibling),$e=t,Te=!0,Da=null,Vt=!1,e!==null&&Pd(t,e),t=Mr(t,o),t.flags|=4096;return t}return e=sa(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Pr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ql(e,t,a,o,s){return Si(t),a=Hl(e,t,a,o,void 0,s),o=vl(),e!==null&&!_e?(bl(e,t,s),Aa(e,t,s)):(Te&&o&&Al(t),t.flags|=1,tt(e,t,a,s),t.child)}function YA(e,t,a,o,s,u){return Si(t),t.updateQueue=null,a=_d(t,o,a,s),Jd(e),o=vl(),e!==null&&!_e?(bl(e,t,u),Aa(e,t,u)):(Te&&o&&Al(t),t.flags|=1,tt(e,t,a,u),t.child)}function zA(e,t,a,o,s){if(Si(t),t.stateNode===null){var u=zi,A=a.contextType;typeof A=="object"&&A!==null&&(u=et(A)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Zl,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Nl(t),A=a.contextType,u.context=typeof A=="object"&&A!==null?et(A):zi,u.state=t.memoizedState,A=a.getDerivedStateFromProps,typeof A=="function"&&(jl(t,a,A,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(A=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),A!==u.state&&Zl.enqueueReplaceState(u,u.state,null),Xn(t,o,u,s),Zn(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var m=t.memoizedProps,p=mi(a,m);u.props=p;var P=u.context,G=a.contextType;A=zi,typeof G=="object"&&G!==null&&(A=et(G));var w=a.getDerivedStateFromProps;G=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,G||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m||P!==A)&&BA(t,u,o,A),va=!1;var D=t.memoizedState;u.state=D,Xn(t,o,u,s),Zn(),P=t.memoizedState,m||D!==P||va?(typeof w=="function"&&(jl(t,a,w,o),P=t.memoizedState),(p=va||DA(t,a,p,o,D,P,A))?(G||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=P),u.props=o,u.state=P,u.context=A,o=p):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Il(e,t),A=t.memoizedProps,G=mi(a,A),u.props=G,w=t.pendingProps,D=u.context,P=a.contextType,p=zi,typeof P=="object"&&P!==null&&(p=et(P)),m=a.getDerivedStateFromProps,(P=typeof m=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(A!==w||D!==p)&&BA(t,u,o,p),va=!1,D=t.memoizedState,u.state=D,Xn(t,o,u,s),Zn();var H=t.memoizedState;A!==w||D!==H||va||e!==null&&e.dependencies!==null&&cr(e.dependencies)?(typeof m=="function"&&(jl(t,a,m,o),H=t.memoizedState),(G=va||DA(t,a,G,o,D,H,p)||e!==null&&e.dependencies!==null&&cr(e.dependencies))?(P||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,H,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,H,p)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||A===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=H),u.props=o,u.state=H,u.context=p,o=G):(typeof u.componentDidUpdate!="function"||A===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,Pr(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=hi(t,e.child,null,s),t.child=hi(t,null,a,s)):tt(e,t,a,s),t.memoizedState=u.state,e=t.child):e=Aa(e,t,s),e}function JA(e,t,a,o){return ui(),t.flags|=256,tt(e,t,a,o),t.child}var $l={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eu(e){return{baseLanes:e,cachePool:Gd()}}function tu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Dt),e}function _A(e,t,a){var o=t.pendingProps,s=!1,u=(t.flags&128)!==0,A;if((A=u)||(A=e!==null&&e.memoizedState===null?!1:(xe.current&2)!==0),A&&(s=!0,t.flags&=-129),A=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(s?Fa(t):Ua(),(e=De)?(e=th(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:qt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},a=yd(e),a.return=t,t.child=a,$e=t,De=null)):e=null,e===null)throw Ba(t);return Uu(e)?t.lanes=32:t.lanes=536870912,null}var m=o.children;return o=o.fallback,s?(Ua(),s=t.mode,m=Dr({mode:"hidden",children:m},s),o=li(o,s,a,null),m.return=t,o.return=t,m.sibling=o,t.child=m,o=t.child,o.memoizedState=eu(a),o.childLanes=tu(e,A,a),t.memoizedState=$l,to(null,o)):(Fa(t),au(t,m))}var p=e.memoizedState;if(p!==null&&(m=p.dehydrated,m!==null)){if(u)t.flags&256?(Fa(t),t.flags&=-257,t=iu(e,t,a)):t.memoizedState!==null?(Ua(),t.child=e.child,t.flags|=128,t=null):(Ua(),m=o.fallback,s=t.mode,o=Dr({mode:"visible",children:o.children},s),m=li(m,s,a,null),m.flags|=2,o.return=t,m.return=t,o.sibling=m,t.child=o,hi(t,e.child,null,a),o=t.child,o.memoizedState=eu(a),o.childLanes=tu(e,A,a),t.memoizedState=$l,t=to(null,o));else if(Fa(t),Uu(m)){if(A=m.nextSibling&&m.nextSibling.dataset,A)var P=A.dgst;A=P,o=Error(l(419)),o.stack="",o.digest=A,Wn({value:o,source:null,stack:null}),t=iu(e,t,a)}else if(_e||Zi(e,t,a,!1),A=(a&e.childLanes)!==0,_e||A){if(A=Pe,A!==null&&(o=vS(A,a),o!==0&&o!==p.retryLane))throw p.retryLane=o,si(e,o),Ot(A,e,o),ql;Fu(m)||wr(),t=iu(e,t,a)}else Fu(m)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,De=Kt(m.nextSibling),$e=t,Te=!0,Da=null,Vt=!1,e!==null&&Pd(t,e),t=au(t,o.children),t.flags|=4096);return t}return s?(Ua(),m=o.fallback,s=t.mode,p=e.child,P=p.sibling,o=sa(p,{mode:"hidden",children:o.children}),o.subtreeFlags=p.subtreeFlags&65011712,P!==null?m=sa(P,m):(m=li(m,s,a,null),m.flags|=2),m.return=t,o.return=t,o.sibling=m,t.child=o,to(null,o),o=t.child,m=e.child.memoizedState,m===null?m=eu(a):(s=m.cachePool,s!==null?(p=ze._currentValue,s=s.parent!==p?{parent:p,pool:p}:s):s=Gd(),m={baseLanes:m.baseLanes|a,cachePool:s}),o.memoizedState=m,o.childLanes=tu(e,A,a),t.memoizedState=$l,to(e.child,o)):(Fa(t),a=e.child,e=a.sibling,a=sa(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(A=t.deletions,A===null?(t.deletions=[e],t.flags|=16):A.push(e)),t.child=a,t.memoizedState=null,a)}function au(e,t){return t=Dr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dr(e,t){return e=yt(22,e,null,t),e.lanes=0,e}function iu(e,t,a){return hi(t,e.child,null,a),e=au(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jA(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Rl(e.return,t,a)}function nu(e,t,a,o,s,u){var A=e.memoizedState;A===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:s,treeForkCount:u}:(A.isBackwards=t,A.rendering=null,A.renderingStartTime=0,A.last=o,A.tail=a,A.tailMode=s,A.treeForkCount=u)}function ZA(e,t,a){var o=t.pendingProps,s=o.revealOrder,u=o.tail;o=o.children;var A=xe.current,m=(A&2)!==0;if(m?(A=A&1|2,t.flags|=128):A&=1,Y(xe,A),tt(e,t,o,a),o=Te?Kn:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jA(e,a,t);else if(e.tag===19)jA(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&Rr(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),nu(t,!1,s,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Rr(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}nu(t,!0,a,null,u,o);break;case"together":nu(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Aa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Va|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Zi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=sa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=sa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ou(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&cr(e)))}function hC(e,t,a){switch(t.tag){case 3:At(t,t.stateNode.containerInfo),Ha(t,ze,e.memoizedState.cache),ui();break;case 27:case 5:Ln(t);break;case 4:At(t,t.stateNode.containerInfo);break;case 10:Ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Dl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?_A(e,t,a):(Fa(t),e=Aa(e,t,a),e!==null?e.sibling:null);Fa(t);break;case 19:var s=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(Zi(e,t,a,!1),o=(a&t.childLanes)!==0),s){if(o)return ZA(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Y(xe,xe.current),o)break;return null;case 22:return t.lanes=0,xA(e,t,a,t.pendingProps);case 24:Ha(t,ze,e.memoizedState.cache)}return Aa(e,t,a)}function XA(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)_e=!0;else{if(!ou(e,a)&&(t.flags&128)===0)return _e=!1,hC(e,t,a);_e=(e.flags&131072)!==0}else _e=!1,Te&&(t.flags&1048576)!==0&&Md(t,Kn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Ai(t.elementType),t.type=e,typeof e=="function")cl(e)?(o=mi(e,o),t.tag=1,t=zA(null,t,e,o,a)):(t.tag=0,t=Ql(null,t,e,o,a));else{if(e!=null){var s=e.$$typeof;if(s===J){t.tag=11,t=kA(null,t,e,o,a);break e}else if(s===X){t.tag=14,t=wA(null,t,e,o,a);break e}}throw t=we(e)||e,Error(l(306,t,""))}}return t;case 0:return Ql(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,s=mi(o,t.pendingProps),zA(e,t,o,s,a);case 3:e:{if(At(t,t.stateNode.containerInfo),e===null)throw Error(l(387));o=t.pendingProps;var u=t.memoizedState;s=u.element,Il(e,t),Xn(t,o,null,a);var A=t.memoizedState;if(o=A.cache,Ha(t,ze,o),o!==u.cache&&fl(t,[ze],a,!0),Zn(),o=A.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:A.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=JA(e,t,o,a);break e}else if(o!==s){s=Ut(Error(l(424)),t),Wn(s),t=JA(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Kt(e.firstChild),$e=t,Te=!0,Da=null,Vt=!0,a=xd(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ui(),o===s){t=Aa(e,t,a);break e}tt(e,t,o,a)}t=t.child}return t;case 26:return Pr(e,t),e===null?(a=sh(t.type,null,t.pendingProps,null))?t.memoizedState=a:Te||(a=t.type,e=t.pendingProps,o=Jr(Se.current).createElement(a),o[Qe]=t,o[ht]=e,at(o,a,e),Xe(o),t.stateNode=o):t.memoizedState=sh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ln(t),e===null&&Te&&(o=t.stateNode=nh(t.type,t.pendingProps,Se.current),$e=t,Vt=!0,s=De,za(t.type)?(ku=s,De=Kt(o.firstChild)):De=s),tt(e,t,t.pendingProps.children,a),Pr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Te&&((s=o=De)&&(o=zC(o,t.type,t.pendingProps,Vt),o!==null?(t.stateNode=o,$e=t,De=Kt(o.firstChild),Vt=!1,s=!0):s=!1),s||Ba(t)),Ln(t),s=t.type,u=t.pendingProps,A=e!==null?e.memoizedProps:null,o=u.children,vu(s,u)?o=null:A!==null&&vu(s,A)&&(t.flags|=32),t.memoizedState!==null&&(s=Hl(e,t,rC,null,null,a),mo._currentValue=s),Pr(e,t),tt(e,t,o,a),t.child;case 6:return e===null&&Te&&((e=a=De)&&(a=JC(a,t.pendingProps,Vt),a!==null?(t.stateNode=a,$e=t,De=null,e=!0):e=!1),e||Ba(t)),null;case 13:return _A(e,t,a);case 4:return At(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=hi(t,null,o,a):tt(e,t,o,a),t.child;case 11:return kA(e,t,t.type,t.pendingProps,a);case 7:return tt(e,t,t.pendingProps,a),t.child;case 8:return tt(e,t,t.pendingProps.children,a),t.child;case 12:return tt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Ha(t,t.type,o.value),tt(e,t,o.children,a),t.child;case 9:return s=t.type._context,o=t.pendingProps.children,Si(t),s=et(s),o=o(s),t.flags|=1,tt(e,t,o,a),t.child;case 14:return wA(e,t,t.type,t.pendingProps,a);case 15:return VA(e,t,t.type,t.pendingProps,a);case 19:return ZA(e,t,a);case 31:return EC(e,t,a);case 22:return xA(e,t,a,t.pendingProps);case 24:return Si(t),o=et(ze),e===null?(s=pl(),s===null&&(s=Pe,u=Cl(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=a),s=u),t.memoizedState={parent:o,cache:s},Nl(t),Ha(t,ze,s)):((e.lanes&a)!==0&&(Il(e,t),Xn(t,null,null,a),Zn()),s=e.memoizedState,u=t.memoizedState,s.parent!==o?(s={parent:o,cache:o},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ha(t,ze,o)):(o=u.cache,Ha(t,ze,o),o!==s.cache&&fl(t,[ze],a,!0))),tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Ea(e){e.flags|=4}function ru(e,t,a,o,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(gE())e.flags|=8192;else throw Ei=Er,gl}else e.flags&=-16777217}function qA(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dh(t))if(gE())e.flags|=8192;else throw Ei=Er,gl}function Br(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?DS():536870912,e.lanes|=t,ln|=t)}function ao(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,o|=s.subtreeFlags&65011712,o|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function TC(e,t,a){var o=t.pendingProps;switch(El(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),ca(ze),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ji(t)?Ea(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Tl())),Be(t),null;case 26:var s=t.type,u=t.memoizedState;return e===null?(Ea(t),u!==null?(Be(t),qA(t,u)):(Be(t),ru(t,s,null,o,a))):u?u!==e.memoizedState?(Ea(t),Be(t),qA(t,u)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ea(t),Be(t),ru(t,s,e,o,a)),null;case 27:if(Ko(t),a=Se.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Ea(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Be(t),null}e=q.current,ji(t)?Dd(t):(e=nh(s,o,a),t.stateNode=e,Ea(t))}return Be(t),null;case 5:if(Ko(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Ea(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Be(t),null}if(u=q.current,ji(t))Dd(t);else{var A=Jr(Se.current);switch(u){case 1:u=A.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=A.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=A.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=A.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=A.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?A.createElement("select",{is:o.is}):A.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?A.createElement(s,{is:o.is}):A.createElement(s)}}u[Qe]=t,u[ht]=o;e:for(A=t.child;A!==null;){if(A.tag===5||A.tag===6)u.appendChild(A.stateNode);else if(A.tag!==4&&A.tag!==27&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;A=A.return}A.sibling.return=A.return,A=A.sibling}t.stateNode=u;e:switch(at(u,s,o),s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ea(t)}}return Be(t),ru(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Ea(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(e=Se.current,ji(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,s=$e,s!==null)switch(s.tag){case 27:case 5:o=s.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||_E(e.nodeValue,a)),e||Ba(t,!0)}else e=Jr(e).createTextNode(o),e[Qe]=t,t.stateNode=e}return Be(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=ji(t),a!==null){if(e===null){if(!o)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Qe]=t}else ui(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else a=Tl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Be(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=ji(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Qe]=t}else ui(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),s=!1}else s=Tl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,s=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(s=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==s&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Br(t,t.updateQueue),Be(t),null);case 4:return Ve(),e===null&&Mu(t.stateNode.containerInfo),Be(t),null;case 10:return ca(t.type),Be(t),null;case 19:if(U(xe),o=t.memoizedState,o===null)return Be(t),null;if(s=(t.flags&128)!==0,u=o.rendering,u===null)if(s)ao(o,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Rr(e),u!==null){for(t.flags|=128,ao(o,!1),e=u.updateQueue,t.updateQueue=e,Br(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Id(a,e),a=a.sibling;return Y(xe,xe.current&1|2),Te&&la(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&pt()>Fr&&(t.flags|=128,s=!0,ao(o,!1),t.lanes=4194304)}else{if(!s)if(e=Rr(u),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Br(t,e),ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Te)return Be(t),null}else 2*pt()-o.renderingStartTime>Fr&&a!==536870912&&(t.flags|=128,s=!0,ao(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=pt(),e.sibling=null,a=xe.current,Y(xe,s?a&1|2:a&1),Te&&la(t,o.treeForkCount),e):(Be(t),null);case 22:case 23:return Mt(t),Pl(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),a=t.updateQueue,a!==null&&Br(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&U(di),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ca(ze),Be(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function mC(e,t){switch(El(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ca(ze),Ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ko(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(l(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(xe),null;case 4:return Ve(),null;case 10:return ca(t.type),null;case 22:case 23:return Mt(t),Pl(),e!==null&&U(di),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ca(ze),null;case 25:return null;default:return null}}function QA(e,t){switch(El(t),t.tag){case 3:ca(ze),Ve();break;case 26:case 27:case 5:Ko(t);break;case 4:Ve();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:U(xe);break;case 10:ca(t.type);break;case 22:case 23:Mt(t),Pl(),e!==null&&U(di);break;case 24:ca(ze)}}function io(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){o=void 0;var u=a.create,A=a.inst;o=u(),A.destroy=o}a=a.next}while(a!==s)}}catch(m){Ne(t,t.return,m)}}function ka(e,t,a){try{var o=t.updateQueue,s=o!==null?o.lastEffect:null;if(s!==null){var u=s.next;o=u;do{if((o.tag&e)===e){var A=o.inst,m=A.destroy;if(m!==void 0){A.destroy=void 0,s=t;var p=a,P=m;try{P()}catch(G){Ne(s,p,G)}}}o=o.next}while(o!==u)}}catch(G){Ne(t,t.return,G)}}function $A(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Wd(t,a)}catch(o){Ne(e,e.return,o)}}}function eE(e,t,a){a.props=mi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ne(e,t,o)}}function no(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(s){Ne(e,t,s)}}function $t(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(s){Ne(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){Ne(e,t,s)}else a.current=null}function tE(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(s){Ne(e,e.return,s)}}function su(e,t,a){try{var o=e.stateNode;wC(o,e.type,a,t),o[ht]=t}catch(s){Ne(e,e.return,s)}}function aE(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||aE(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uu(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=oa));else if(o!==4&&(o===27&&za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(uu(e,t,a),e=e.sibling;e!==null;)uu(e,t,a),e=e.sibling}function Hr(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hr(e,t,a),e=e.sibling;e!==null;)Hr(e,t,a),e=e.sibling}function iE(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);at(t,o,a),t[Qe]=e,t[ht]=a}catch(u){Ne(e,e.return,u)}}var ha=!1,je=!1,cu=!1,nE=typeof WeakSet=="function"?WeakSet:Set,qe=null;function RC(e,t){if(e=e.containerInfo,Bu=$r,e=Td(e),il(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var s=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var A=0,m=-1,p=-1,P=0,G=0,w=e,D=null;t:for(;;){for(var H;w!==a||s!==0&&w.nodeType!==3||(m=A+s),w!==u||o!==0&&w.nodeType!==3||(p=A+o),w.nodeType===3&&(A+=w.nodeValue.length),(H=w.firstChild)!==null;)D=w,w=H;for(;;){if(w===e)break t;if(D===a&&++P===s&&(m=A),D===u&&++G===o&&(p=A),(H=w.nextSibling)!==null)break;w=D,D=w.parentNode}w=H}a=m===-1||p===-1?null:{start:m,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hu={focusedElem:e,selectionRange:a},$r=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,s=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var Z=mi(a.type,s);e=o.getSnapshotBeforeUpdate(Z,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ne(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Gu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function oE(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),o&4&&io(5,a);break;case 1:if(ma(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(A){Ne(a,a.return,A)}else{var s=mi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(A){Ne(a,a.return,A)}}o&64&&$A(a),o&512&&no(a,a.return);break;case 3:if(ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Wd(e,t)}catch(A){Ne(a,a.return,A)}}break;case 27:t===null&&o&4&&iE(a);case 26:case 5:ma(e,a),t===null&&o&4&&tE(a),o&512&&no(a,a.return);break;case 12:ma(e,a);break;case 31:ma(e,a),o&4&&lE(e,a);break;case 13:ma(e,a),o&4&&uE(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=LC.bind(null,a),_C(e,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){t=t!==null&&t.memoizedState!==null||je,s=ha;var u=je;ha=o,(je=t)&&!u?Ra(e,a,(a.subtreeFlags&8772)!==0):ma(e,a),ha=s,je=u}break;case 30:break;default:ma(e,a)}}function rE(e){var t=e.alternate;t!==null&&(e.alternate=null,rE(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Vs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,mt=!1;function Ta(e,t,a){for(a=a.child;a!==null;)sE(e,t,a),a=a.sibling}function sE(e,t,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Mn,a)}catch{}switch(a.tag){case 26:je||$t(a,t),Ta(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||$t(a,t);var o=ve,s=mt;za(a.type)&&(ve=a.stateNode,mt=!1),Ta(e,t,a),Eo(a.stateNode),ve=o,mt=s;break;case 5:je||$t(a,t);case 6:if(o=ve,s=mt,ve=null,Ta(e,t,a),ve=o,mt=s,ve!==null)if(mt)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(a.stateNode)}catch(u){Ne(a,t,u)}else try{ve.removeChild(a.stateNode)}catch(u){Ne(a,t,u)}break;case 18:ve!==null&&(mt?(e=ve,$E(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tn(e)):$E(ve,a.stateNode));break;case 4:o=ve,s=mt,ve=a.stateNode.containerInfo,mt=!0,Ta(e,t,a),ve=o,mt=s;break;case 0:case 11:case 14:case 15:ka(2,a,t),je||ka(4,a,t),Ta(e,t,a);break;case 1:je||($t(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&eE(a,t,o)),Ta(e,t,a);break;case 21:Ta(e,t,a);break;case 22:je=(o=je)||a.memoizedState!==null,Ta(e,t,a),je=o;break;default:Ta(e,t,a)}}function lE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tn(e)}catch(a){Ne(t,t.return,a)}}}function uE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tn(e)}catch(a){Ne(t,t.return,a)}}function fC(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nE),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nE),t;default:throw Error(l(435,e.tag))}}function vr(e,t){var a=fC(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var s=MC.bind(null,e,o);o.then(s,s)}})}function Rt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var s=a[o],u=e,A=t,m=A;e:for(;m!==null;){switch(m.tag){case 27:if(za(m.type)){ve=m.stateNode,mt=!1;break e}break;case 5:ve=m.stateNode,mt=!1;break e;case 3:case 4:ve=m.stateNode.containerInfo,mt=!0;break e}m=m.return}if(ve===null)throw Error(l(160));sE(u,A,s),ve=null,mt=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)cE(t,e),t=t.sibling}var _t=null;function cE(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),ft(e),o&4&&(ka(3,e,e.return),io(3,e),ka(5,e,e.return));break;case 1:Rt(t,e),ft(e),o&512&&(je||a===null||$t(a,a.return)),o&64&&ha&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var s=_t;if(Rt(t,e),ft(e),o&512&&(je||a===null||$t(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(o){case"title":u=s.getElementsByTagName("title")[0],(!u||u[Bn]||u[Qe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(o),s.head.insertBefore(u,s.querySelector("head > title"))),at(u,o,a),u[Qe]=e,Xe(u),o=u;break e;case"link":var A=ch("link","href",s).get(o+(a.href||""));if(A){for(var m=0;m<A.length;m++)if(u=A[m],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){A.splice(m,1);break t}}u=s.createElement(o),at(u,o,a),s.head.appendChild(u);break;case"meta":if(A=ch("meta","content",s).get(o+(a.content||""))){for(m=0;m<A.length;m++)if(u=A[m],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){A.splice(m,1);break t}}u=s.createElement(o),at(u,o,a),s.head.appendChild(u);break;default:throw Error(l(468,o))}u[Qe]=e,Xe(u),o=u}e.stateNode=o}else Sh(s,e.type,e.stateNode);else e.stateNode=uh(s,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?Sh(s,e.type,e.stateNode):uh(s,o,e.memoizedProps)):o===null&&e.stateNode!==null&&su(e,e.memoizedProps,a.memoizedProps)}break;case 27:Rt(t,e),ft(e),o&512&&(je||a===null||$t(a,a.return)),a!==null&&o&4&&su(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Rt(t,e),ft(e),o&512&&(je||a===null||$t(a,a.return)),e.flags&32){s=e.stateNode;try{ki(s,"")}catch(Z){Ne(e,e.return,Z)}}o&4&&e.stateNode!=null&&(s=e.memoizedProps,su(e,s,a!==null?a.memoizedProps:s)),o&1024&&(cu=!0);break;case 6:if(Rt(t,e),ft(e),o&4){if(e.stateNode===null)throw Error(l(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Z){Ne(e,e.return,Z)}}break;case 3:if(Zr=null,s=_t,_t=_r(t.containerInfo),Rt(t,e),_t=s,ft(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tn(t.containerInfo)}catch(Z){Ne(e,e.return,Z)}cu&&(cu=!1,SE(e));break;case 4:o=_t,_t=_r(e.stateNode.containerInfo),Rt(t,e),ft(e),_t=o;break;case 12:Rt(t,e),ft(e);break;case 31:Rt(t,e),ft(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,vr(e,o)));break;case 13:Rt(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gr=pt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,vr(e,o)));break;case 22:s=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,P=ha,G=je;if(ha=P||s,je=G||p,Rt(t,e),je=G,ha=P,ft(e),o&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||p||ha||je||Ri(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(u=p.stateNode,s)A=u.style,typeof A.setProperty=="function"?A.setProperty("display","none","important"):A.display="none";else{m=p.stateNode;var w=p.memoizedProps.style,D=w!=null&&w.hasOwnProperty("display")?w.display:null;m.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(Z){Ne(p,p.return,Z)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=s?"":p.memoizedProps}catch(Z){Ne(p,p.return,Z)}}}else if(t.tag===18){if(a===null){p=t;try{var H=p.stateNode;s?eh(H,!0):eh(p.stateNode,!1)}catch(Z){Ne(p,p.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,vr(e,a))));break;case 19:Rt(t,e),ft(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,vr(e,o)));break;case 30:break;case 21:break;default:Rt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(aE(o)){a=o;break}o=o.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var s=a.stateNode,u=lu(e);Hr(e,u,s);break;case 5:var A=a.stateNode;a.flags&32&&(ki(A,""),a.flags&=-33);var m=lu(e);Hr(e,m,A);break;case 3:case 4:var p=a.stateNode.containerInfo,P=lu(e);uu(e,P,p);break;default:throw Error(l(161))}}catch(G){Ne(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function SE(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;SE(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ma(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)oE(e,t.alternate,t),t=t.sibling}function Ri(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ka(4,t,t.return),Ri(t);break;case 1:$t(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&eE(t,t.return,a),Ri(t);break;case 27:Eo(t.stateNode);case 26:case 5:$t(t,t.return),Ri(t);break;case 22:t.memoizedState===null&&Ri(t);break;case 30:Ri(t);break;default:Ri(t)}e=e.sibling}}function Ra(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,s=e,u=t,A=u.flags;switch(u.tag){case 0:case 11:case 15:Ra(s,u,a),io(4,u);break;case 1:if(Ra(s,u,a),o=u,s=o.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(P){Ne(o,o.return,P)}if(o=u,s=o.updateQueue,s!==null){var m=o.stateNode;try{var p=s.shared.hiddenCallbacks;if(p!==null)for(s.shared.hiddenCallbacks=null,s=0;s<p.length;s++)Kd(p[s],m)}catch(P){Ne(o,o.return,P)}}a&&A&64&&$A(u),no(u,u.return);break;case 27:iE(u);case 26:case 5:Ra(s,u,a),a&&o===null&&A&4&&tE(u),no(u,u.return);break;case 12:Ra(s,u,a);break;case 31:Ra(s,u,a),a&&A&4&&lE(s,u);break;case 13:Ra(s,u,a),a&&A&4&&uE(s,u);break;case 22:u.memoizedState===null&&Ra(s,u,a),no(u,u.return);break;case 30:break;default:Ra(s,u,a)}t=t.sibling}}function Su(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yn(a))}function du(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e))}function jt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dE(e,t,a,o),t=t.sibling}function dE(e,t,a,o){var s=t.flags;switch(t.tag){case 0:case 11:case 15:jt(e,t,a,o),s&2048&&io(9,t);break;case 1:jt(e,t,a,o);break;case 3:jt(e,t,a,o),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e)));break;case 12:if(s&2048){jt(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,A=u.id,m=u.onPostCommit;typeof m=="function"&&m(A,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Ne(t,t.return,p)}}else jt(e,t,a,o);break;case 31:jt(e,t,a,o);break;case 13:jt(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,A=t.alternate,t.memoizedState!==null?u._visibility&2?jt(e,t,a,o):oo(e,t):u._visibility&2?jt(e,t,a,o):(u._visibility|=2,on(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Su(A,t);break;case 24:jt(e,t,a,o),s&2048&&du(t.alternate,t);break;default:jt(e,t,a,o)}}function on(e,t,a,o,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,A=t,m=a,p=o,P=A.flags;switch(A.tag){case 0:case 11:case 15:on(u,A,m,p,s),io(8,A);break;case 23:break;case 22:var G=A.stateNode;A.memoizedState!==null?G._visibility&2?on(u,A,m,p,s):oo(u,A):(G._visibility|=2,on(u,A,m,p,s)),s&&P&2048&&Su(A.alternate,A);break;case 24:on(u,A,m,p,s),s&&P&2048&&du(A.alternate,A);break;default:on(u,A,m,p,s)}t=t.sibling}}function oo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,s=o.flags;switch(o.tag){case 22:oo(a,o),s&2048&&Su(o.alternate,o);break;case 24:oo(a,o),s&2048&&du(o.alternate,o);break;default:oo(a,o)}t=t.sibling}}var ro=8192;function rn(e,t,a){if(e.subtreeFlags&ro)for(e=e.child;e!==null;)AE(e,t,a),e=e.sibling}function AE(e,t,a){switch(e.tag){case 26:rn(e,t,a),e.flags&ro&&e.memoizedState!==null&&oO(a,_t,e.memoizedState,e.memoizedProps);break;case 5:rn(e,t,a);break;case 3:case 4:var o=_t;_t=_r(e.stateNode.containerInfo),rn(e,t,a),_t=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ro,ro=16777216,rn(e,t,a),ro=o):rn(e,t,a));break;default:rn(e,t,a)}}function EE(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function so(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];qe=o,TE(o,e)}EE(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hE(e),e=e.sibling}function hE(e){switch(e.tag){case 0:case 11:case 15:so(e),e.flags&2048&&ka(9,e,e.return);break;case 3:so(e);break;case 12:so(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,br(e)):so(e);break;default:so(e)}}function br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];qe=o,TE(o,e)}EE(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ka(8,t,t.return),br(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,br(t));break;default:br(t)}e=e.sibling}}function TE(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:ka(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Yn(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,qe=o;else e:for(a=e;qe!==null;){o=qe;var s=o.sibling,u=o.return;if(rE(o),o===a){qe=null;break e}if(s!==null){s.return=u,qe=s;break e}qe=u}}}var CC={getCacheForType:function(e){var t=et(ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return et(ze).controller.signal}},OC=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Pe=null,de=null,Ee=0,ge=0,Pt=null,wa=!1,sn=!1,Au=!1,fa=0,Ue=0,Va=0,fi=0,Eu=0,Dt=0,ln=0,lo=null,Ct=null,hu=!1,Gr=0,mE=0,Fr=1/0,Ur=null,xa=null,Ze=0,Ka=null,un=null,Ca=0,Tu=0,mu=null,RE=null,uo=0,Ru=null;function Bt(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:F.T!==null?Nu():bS()}function fE(){if(Dt===0)if((Ee&536870912)===0||Te){var e=zo;zo<<=1,(zo&3932160)===0&&(zo=262144),Dt=e}else Dt=536870912;return e=Lt.current,e!==null&&(e.flags|=32),Dt}function Ot(e,t,a){(e===Pe&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(cn(e,0),Wa(e,Ee,Dt,!1)),Dn(e,a),((Oe&2)===0||e!==Pe)&&(e===Pe&&((Oe&2)===0&&(fi|=a),Ue===4&&Wa(e,Ee,Dt,!1)),ea(e))}function CE(e,t,a){if((Oe&6)!==0)throw Error(l(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Pn(e,t),s=o?NC(e,t):Cu(e,t,!0),u=o;do{if(s===0){sn&&!o&&Wa(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!pC(a)){s=Cu(e,t,!1),u=!1;continue}if(s===2){if(u=t,e.errorRecoveryDisabledLanes&u)var A=0;else A=e.pendingLanes&-536870913,A=A!==0?A:A&536870912?536870912:0;if(A!==0){t=A;e:{var m=e;s=lo;var p=m.current.memoizedState.isDehydrated;if(p&&(cn(m,A).flags|=256),A=Cu(m,A,!1),A!==2){if(Au&&!p){m.errorRecoveryDisabledLanes|=u,fi|=u,s=4;break e}u=Ct,Ct=s,u!==null&&(Ct===null?Ct=u:Ct.push.apply(Ct,u))}s=A}if(u=!1,s!==2)continue}}if(s===1){cn(e,0),Wa(e,t,0,!0);break}e:{switch(o=e,u=s,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Wa(o,t,Dt,!wa);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=Gr+300-pt(),10<s)){if(Wa(o,t,Dt,!wa),_o(o,0,!0)!==0)break e;Ca=t,o.timeoutHandle=qE(OE.bind(null,o,a,Ct,Ur,hu,t,Dt,fi,ln,wa,u,"Throttled",-0,0),s);break e}OE(o,a,Ct,Ur,hu,t,Dt,fi,ln,wa,u,null,-0,0)}}break}while(!0);ea(e)}function OE(e,t,a,o,s,u,A,m,p,P,G,w,D,H){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},AE(t,u,w);var Z=(u&62914560)===u?Gr-pt():(u&4194048)===u?mE-pt():0;if(Z=rO(w,Z),Z!==null){Ca=u,e.cancelPendingCommit=Z(PE.bind(null,e,t,u,a,o,s,A,m,p,G,w,null,D,H)),Wa(e,u,A,!P);return}}PE(e,t,u,a,o,s,A,m,p)}function pC(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var s=a[o],u=s.getSnapshot;s=s.value;try{if(!It(u(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wa(e,t,a,o){t&=~Eu,t&=~fi,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var s=t;0<s;){var u=31-Nt(s),A=1<<u;o[u]=-1,s&=~A}a!==0&&BS(e,a,t)}function kr(){return(Oe&6)===0?(co(0),!1):!0}function fu(){if(de!==null){if(ge===0)var e=de.return;else e=de,ua=ci=null,Gl(e),$i=null,Jn=0,e=de;for(;e!==null;)QA(e.alternate,e),e=e.return;de=null}}function cn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,KC(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ca=0,fu(),Pe=e,de=a=sa(e.current,null),Ee=t,ge=0,Pt=null,wa=!1,sn=Pn(e,t),Au=!1,ln=Dt=Eu=fi=Va=Ue=0,Ct=lo=null,hu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var s=31-Nt(o),u=1<<s;t|=e[s],o&=~u}return fa=t,or(),a}function pE(e,t){se=null,F.H=eo,t===Qi||t===Ar?(t=kd(),ge=3):t===gl?(t=kd(),ge=4):ge=t===ql?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pt=t,de===null&&(Ue=1,Lr(e,Ut(t,e.current)))}function gE(){var e=Lt.current;return e===null?!0:(Ee&4194048)===Ee?xt===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===xt:!1}function NE(){var e=F.H;return F.H=eo,e===null?eo:e}function IE(){var e=F.A;return F.A=CC,e}function wr(){Ue=4,wa||(Ee&4194048)!==Ee&&Lt.current!==null||(sn=!0),(Va&134217727)===0&&(fi&134217727)===0||Pe===null||Wa(Pe,Ee,Dt,!1)}function Cu(e,t,a){var o=Oe;Oe|=2;var s=NE(),u=IE();(Pe!==e||Ee!==t)&&(Ur=null,cn(e,t)),t=!1;var A=Ue;e:do try{if(ge!==0&&de!==null){var m=de,p=Pt;switch(ge){case 8:fu(),A=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var P=ge;if(ge=0,Pt=null,Sn(e,m,p,P),a&&sn){A=0;break e}break;default:P=ge,ge=0,Pt=null,Sn(e,m,p,P)}}gC(),A=Ue;break}catch(G){pE(e,G)}while(!0);return t&&e.shellSuspendCounter++,ua=ci=null,Oe=o,F.H=s,F.A=u,de===null&&(Pe=null,Ee=0,or()),A}function gC(){for(;de!==null;)yE(de)}function NC(e,t){var a=Oe;Oe|=2;var o=NE(),s=IE();Pe!==e||Ee!==t?(Ur=null,Fr=pt()+500,cn(e,t)):sn=Pn(e,t);e:do try{if(ge!==0&&de!==null){t=de;var u=Pt;t:switch(ge){case 1:ge=0,Pt=null,Sn(e,t,u,1);break;case 2:case 9:if(Fd(u)){ge=0,Pt=null,LE(t);break}t=function(){ge!==2&&ge!==9||Pe!==e||(ge=7),ea(e)},u.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:Fd(u)?(ge=0,Pt=null,LE(t)):(ge=0,Pt=null,Sn(e,t,u,7));break;case 5:var A=null;switch(de.tag){case 26:A=de.memoizedState;case 5:case 27:var m=de;if(A?dh(A):m.stateNode.complete){ge=0,Pt=null;var p=m.sibling;if(p!==null)de=p;else{var P=m.return;P!==null?(de=P,Vr(P)):de=null}break t}}ge=0,Pt=null,Sn(e,t,u,5);break;case 6:ge=0,Pt=null,Sn(e,t,u,6);break;case 8:fu(),Ue=6;break e;default:throw Error(l(462))}}IC();break}catch(G){pE(e,G)}while(!0);return ua=ci=null,F.H=o,F.A=s,Oe=a,de!==null?0:(Pe=null,Ee=0,or(),Ue)}function IC(){for(;de!==null&&!_R();)yE(de)}function yE(e){var t=XA(e.alternate,e,fa);e.memoizedProps=e.pendingProps,t===null?Vr(e):de=t}function LE(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=YA(a,t,t.pendingProps,t.type,void 0,Ee);break;case 11:t=YA(a,t,t.pendingProps,t.type.render,t.ref,Ee);break;case 5:Gl(t);default:QA(a,t),t=de=Id(t,fa),t=XA(a,t,fa)}e.memoizedProps=e.pendingProps,t===null?Vr(e):de=t}function Sn(e,t,a,o){ua=ci=null,Gl(t),$i=null,Jn=0;var s=t.return;try{if(AC(e,s,t,a,Ee)){Ue=1,Lr(e,Ut(a,e.current)),de=null;return}}catch(u){if(s!==null)throw de=s,u;Ue=1,Lr(e,Ut(a,e.current)),de=null;return}t.flags&32768?(Te||o===1?e=!0:sn||(Ee&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=Lt.current,o!==null&&o.tag===13&&(o.flags|=16384))),ME(t,e)):Vr(t)}function Vr(e){var t=e;do{if((t.flags&32768)!==0){ME(t,wa);return}e=t.return;var a=TC(t.alternate,t,fa);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Ue===0&&(Ue=5)}function ME(e,t){do{var a=mC(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ue=6,de=null}function PE(e,t,a,o,s,u,A,m,p){e.cancelPendingCommit=null;do xr();while(Ze!==0);if((Oe&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=ll,nf(e,a,u,A,m,p),e===Pe&&(de=Pe=null,Ee=0),un=t,Ka=e,Ca=a,Tu=u,mu=s,RE=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,PC(Wo,function(){return bE(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,s=W.p,W.p=2,A=Oe,Oe|=4;try{RC(e,t,a)}finally{Oe=A,W.p=s,F.T=o}}Ze=1,DE(),BE(),HE()}}function DE(){if(Ze===1){Ze=0;var e=Ka,t=un,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=W.p;W.p=2;var s=Oe;Oe|=4;try{cE(t,e);var u=Hu,A=Td(e.containerInfo),m=u.focusedElem,p=u.selectionRange;if(A!==m&&m&&m.ownerDocument&&hd(m.ownerDocument.documentElement,m)){if(p!==null&&il(m)){var P=p.start,G=p.end;if(G===void 0&&(G=P),"selectionStart"in m)m.selectionStart=P,m.selectionEnd=Math.min(G,m.value.length);else{var w=m.ownerDocument||document,D=w&&w.defaultView||window;if(D.getSelection){var H=D.getSelection(),Z=m.textContent.length,ae=Math.min(p.start,Z),Me=p.end===void 0?ae:Math.min(p.end,Z);!H.extend&&ae>Me&&(A=Me,Me=ae,ae=A);var y=Ed(m,ae),g=Ed(m,Me);if(y&&g&&(H.rangeCount!==1||H.anchorNode!==y.node||H.anchorOffset!==y.offset||H.focusNode!==g.node||H.focusOffset!==g.offset)){var M=w.createRange();M.setStart(y.node,y.offset),H.removeAllRanges(),ae>Me?(H.addRange(M),H.extend(g.node,g.offset)):(M.setEnd(g.node,g.offset),H.addRange(M))}}}}for(w=[],H=m;H=H.parentNode;)H.nodeType===1&&w.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<w.length;m++){var k=w[m];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}$r=!!Bu,Hu=Bu=null}finally{Oe=s,W.p=o,F.T=a}}e.current=t,Ze=2}}function BE(){if(Ze===2){Ze=0;var e=Ka,t=un,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=W.p;W.p=2;var s=Oe;Oe|=4;try{oE(e,t.alternate,t)}finally{Oe=s,W.p=o,F.T=a}}Ze=3}}function HE(){if(Ze===4||Ze===3){Ze=0,jR();var e=Ka,t=un,a=Ca,o=RE;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,un=Ka=null,vE(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(xa=null),ks(a),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Mn,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=F.T,s=W.p,W.p=2,F.T=null;try{for(var u=e.onRecoverableError,A=0;A<o.length;A++){var m=o[A];u(m.value,{componentStack:m.stack})}}finally{F.T=t,W.p=s}}(Ca&3)!==0&&xr(),ea(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===Ru?uo++:(uo=0,Ru=e):uo=0,co(0)}}function vE(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yn(t)))}function xr(){return DE(),BE(),HE(),bE()}function bE(){if(Ze!==5)return!1;var e=Ka,t=Tu;Tu=0;var a=ks(Ca),o=F.T,s=W.p;try{W.p=32>a?32:a,F.T=null,a=mu,mu=null;var u=Ka,A=Ca;if(Ze=0,un=Ka=null,Ca=0,(Oe&6)!==0)throw Error(l(331));var m=Oe;if(Oe|=4,hE(u.current),dE(u,u.current,A,a),Oe=m,co(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Mn,u)}catch{}return!0}finally{W.p=s,F.T=o,vE(e,t)}}function GE(e,t,a){t=Ut(a,t),t=Xl(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(Dn(e,2),ea(e))}function Ne(e,t,a){if(e.tag===3)GE(e,e,a);else for(;t!==null;){if(t.tag===3){GE(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(xa===null||!xa.has(o))){e=Ut(a,e),a=FA(2),o=Ga(t,a,2),o!==null&&(UA(a,o,t,e),Dn(o,2),ea(o));break}}t=t.return}}function Ou(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new OC;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(a)||(Au=!0,s.add(a),e=yC.bind(null,e,t,a),t.then(e,e))}function yC(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Pe===e&&(Ee&a)===a&&(Ue===4||Ue===3&&(Ee&62914560)===Ee&&300>pt()-Gr?(Oe&2)===0&&cn(e,0):Eu|=a,ln===Ee&&(ln=0)),ea(e)}function FE(e,t){t===0&&(t=DS()),e=si(e,t),e!==null&&(Dn(e,t),ea(e))}function LC(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),FE(e,a)}function MC(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(t),FE(e,a)}function PC(e,t){return bs(e,t)}var Kr=null,dn=null,pu=!1,Wr=!1,gu=!1,Ya=0;function ea(e){e!==dn&&e.next===null&&(dn===null?Kr=dn=e:dn=dn.next=e),Wr=!0,pu||(pu=!0,BC())}function co(e,t){if(!gu&&Wr){gu=!0;do for(var a=!1,o=Kr;o!==null;){if(e!==0){var s=o.pendingLanes;if(s===0)var u=0;else{var A=o.suspendedLanes,m=o.pingedLanes;u=(1<<31-Nt(42|e)+1)-1,u&=s&~(A&~m),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,VE(o,u))}else u=Ee,u=_o(o,o===Pe?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Pn(o,u)||(a=!0,VE(o,u));o=o.next}while(a);gu=!1}}function DC(){UE()}function UE(){Wr=pu=!1;var e=0;Ya!==0&&xC()&&(e=Ya);for(var t=pt(),a=null,o=Kr;o!==null;){var s=o.next,u=kE(o,t);u===0?(o.next=null,a===null?Kr=s:a.next=s,s===null&&(dn=a)):(a=o,(e!==0||(u&3)!==0)&&(Wr=!0)),o=s}Ze!==0&&Ze!==5||co(e),Ya!==0&&(Ya=0)}function kE(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var A=31-Nt(u),m=1<<A,p=s[A];p===-1?((m&a)===0||(m&o)!==0)&&(s[A]=af(m,t)):p<=t&&(e.expiredLanes|=m),u&=~m}if(t=Pe,a=Ee,a=_o(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Gs(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Gs(o),ks(a)){case 2:case 8:a=MS;break;case 32:a=Wo;break;case 268435456:a=PS;break;default:a=Wo}return o=wE.bind(null,e),a=bs(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Gs(o),e.callbackPriority=2,e.callbackNode=null,2}function wE(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(xr()&&e.callbackNode!==a)return null;var o=Ee;return o=_o(e,e===Pe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(CE(e,o,t),kE(e,pt()),e.callbackNode!=null&&e.callbackNode===a?wE.bind(null,e):null)}function VE(e,t){if(xr())return null;CE(e,t,!0)}function BC(){WC(function(){(Oe&6)!==0?bs(LS,DC):UE()})}function Nu(){if(Ya===0){var e=Xi;e===0&&(e=Yo,Yo<<=1,(Yo&261888)===0&&(Yo=256)),Ya=e}return Ya}function xE(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qo(""+e)}function KE(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function HC(e,t,a,o,s){if(t==="submit"&&a&&a.stateNode===s){var u=xE((s[ht]||null).action),A=o.submitter;A&&(t=(t=A[ht]||null)?xE(t.formAction):A.getAttribute("formAction"),t!==null&&(u=t,A=null));var m=new tr("action","action",null,o,s);e.push({event:m,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var p=A?KE(s,A):new FormData(s);Yl(a,{pending:!0,data:p,method:s.method,action:u},null,p)}}else typeof u=="function"&&(m.preventDefault(),p=A?KE(s,A):new FormData(s),Yl(a,{pending:!0,data:p,method:s.method,action:u},u,p))},currentTarget:s}]})}}for(var Iu=0;Iu<sl.length;Iu++){var yu=sl[Iu],vC=yu.toLowerCase(),bC=yu[0].toUpperCase()+yu.slice(1);Jt(vC,"on"+bC)}Jt(fd,"onAnimationEnd"),Jt(Cd,"onAnimationIteration"),Jt(Od,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(Xf,"onTransitionRun"),Jt(qf,"onTransitionStart"),Jt(Qf,"onTransitionCancel"),Jt(pd,"onTransitionEnd"),Fi("onMouseEnter",["mouseout","mouseover"]),Fi("onMouseLeave",["mouseout","mouseover"]),Fi("onPointerEnter",["pointerout","pointerover"]),Fi("onPointerLeave",["pointerout","pointerover"]),ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function WE(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],s=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var A=o.length-1;0<=A;A--){var m=o[A],p=m.instance,P=m.currentTarget;if(m=m.listener,p!==u&&s.isPropagationStopped())break e;u=m,s.currentTarget=P;try{u(s)}catch(G){nr(G)}s.currentTarget=null,u=p}else for(A=0;A<o.length;A++){if(m=o[A],p=m.instance,P=m.currentTarget,m=m.listener,p!==u&&s.isPropagationStopped())break e;u=m,s.currentTarget=P;try{u(s)}catch(G){nr(G)}s.currentTarget=null,u=p}}}}function Ae(e,t){var a=t[ws];a===void 0&&(a=t[ws]=new Set);var o=e+"__bubble";a.has(o)||(YE(t,e,2,!1),a.add(o))}function Lu(e,t,a){var o=0;t&&(o|=4),YE(a,e,o,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function Mu(e){if(!e[Yr]){e[Yr]=!0,US.forEach(function(a){a!=="selectionchange"&&(GC.has(a)||Lu(a,!1,e),Lu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yr]||(t[Yr]=!0,Lu("selectionchange",!1,t))}}function YE(e,t,a,o){switch(fh(t)){case 2:var s=uO;break;case 8:s=cO;break;default:s=Wu}a=s.bind(null,t,a,e),s=void 0,!js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function Pu(e,t,a,o,s){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var A=o.tag;if(A===3||A===4){var m=o.stateNode.containerInfo;if(m===s)break;if(A===4)for(A=o.return;A!==null;){var p=A.tag;if((p===3||p===4)&&A.stateNode.containerInfo===s)return;A=A.return}for(;m!==null;){if(A=vi(m),A===null)return;if(p=A.tag,p===5||p===6||p===26||p===27){o=u=A;continue e}m=m.parentNode}}o=o.return}ZS(function(){var P=u,G=Js(a),w=[];e:{var D=gd.get(e);if(D!==void 0){var H=tr,Z=e;switch(e){case"keypress":if($o(a)===0)break e;case"keydown":case"keyup":H=Mf;break;case"focusin":Z="focus",H=Qs;break;case"focusout":Z="blur",H=Qs;break;case"beforeblur":case"afterblur":H=Qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=QS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Bf;break;case fd:case Cd:case Od:H=ff;break;case pd:H=vf;break;case"scroll":case"scrollend":H=Ef;break;case"wheel":H=Gf;break;case"copy":case"cut":case"paste":H=Of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=ed;break;case"toggle":case"beforetoggle":H=Uf}var ae=(t&4)!==0,Me=!ae&&(e==="scroll"||e==="scrollend"),y=ae?D!==null?D+"Capture":null:D;ae=[];for(var g=P,M;g!==null;){var k=g;if(M=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||M===null||y===null||(k=vn(g,y),k!=null&&ae.push(Ao(g,k,M))),Me)break;g=g.return}0<ae.length&&(D=new H(D,Z,null,a,G),w.push({event:D,listeners:ae}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",D&&a!==zs&&(Z=a.relatedTarget||a.fromElement)&&(vi(Z)||Z[Hi]))break e;if((H||D)&&(D=G.window===G?G:(D=G.ownerDocument)?D.defaultView||D.parentWindow:window,H?(Z=a.relatedTarget||a.toElement,H=P,Z=Z?vi(Z):null,Z!==null&&(Me=d(Z),ae=Z.tag,Z!==Me||ae!==5&&ae!==27&&ae!==6)&&(Z=null)):(H=null,Z=P),H!==Z)){if(ae=QS,k="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(ae=ed,k="onPointerLeave",y="onPointerEnter",g="pointer"),Me=H==null?D:Hn(H),M=Z==null?D:Hn(Z),D=new ae(k,g+"leave",H,a,G),D.target=Me,D.relatedTarget=M,k=null,vi(G)===P&&(ae=new ae(y,g+"enter",Z,a,G),ae.target=M,ae.relatedTarget=Me,k=ae),Me=k,H&&Z)t:{for(ae=FC,y=H,g=Z,M=0,k=y;k;k=ae(k))M++;k=0;for(var ee=g;ee;ee=ae(ee))k++;for(;0<M-k;)y=ae(y),M--;for(;0<k-M;)g=ae(g),k--;for(;M--;){if(y===g||g!==null&&y===g.alternate){ae=y;break t}y=ae(y),g=ae(g)}ae=null}else ae=null;H!==null&&zE(w,D,H,ae,!1),Z!==null&&Me!==null&&zE(w,Me,Z,ae,!0)}}e:{if(D=P?Hn(P):window,H=D.nodeName&&D.nodeName.toLowerCase(),H==="select"||H==="input"&&D.type==="file")var fe=ld;else if(rd(D))if(ud)fe=_f;else{fe=zf;var Q=Yf}else H=D.nodeName,!H||H.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?P&&Ys(P.elementType)&&(fe=ld):fe=Jf;if(fe&&(fe=fe(e,P))){sd(w,fe,a,G);break e}Q&&Q(e,D,P),e==="focusout"&&P&&D.type==="number"&&P.memoizedProps.value!=null&&Ws(D,"number",D.value)}switch(Q=P?Hn(P):window,e){case"focusin":(rd(Q)||Q.contentEditable==="true")&&(Ki=Q,nl=P,xn=null);break;case"focusout":xn=nl=Ki=null;break;case"mousedown":ol=!0;break;case"contextmenu":case"mouseup":case"dragend":ol=!1,md(w,a,G);break;case"selectionchange":if(Zf)break;case"keydown":case"keyup":md(w,a,G)}var ue;if(el)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else xi?nd(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(td&&a.locale!=="ko"&&(xi||he!=="onCompositionStart"?he==="onCompositionEnd"&&xi&&(ue=XS()):(Ma=G,Zs="value"in Ma?Ma.value:Ma.textContent,xi=!0)),Q=zr(P,he),0<Q.length&&(he=new $S(he,e,null,a,G),w.push({event:he,listeners:Q}),ue?he.data=ue:(ue=od(a),ue!==null&&(he.data=ue)))),(ue=wf?Vf(e,a):xf(e,a))&&(he=zr(P,"onBeforeInput"),0<he.length&&(Q=new $S("onBeforeInput","beforeinput",null,a,G),w.push({event:Q,listeners:he}),Q.data=ue)),HC(w,e,P,a,G)}WE(w,t)})}function Ao(e,t,a){return{instance:e,listener:t,currentTarget:a}}function zr(e,t){for(var a=t+"Capture",o=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=vn(e,a),s!=null&&o.unshift(Ao(e,s,u)),s=vn(e,t),s!=null&&o.push(Ao(e,s,u))),e.tag===3)return o;e=e.return}return[]}function FC(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zE(e,t,a,o,s){for(var u=t._reactName,A=[];a!==null&&a!==o;){var m=a,p=m.alternate,P=m.stateNode;if(m=m.tag,p!==null&&p===o)break;m!==5&&m!==26&&m!==27||P===null||(p=P,s?(P=vn(a,u),P!=null&&A.unshift(Ao(a,P,p))):s||(P=vn(a,u),P!=null&&A.push(Ao(a,P,p)))),a=a.return}A.length!==0&&e.push({event:t,listeners:A})}var UC=/\r\n?/g,kC=/\u0000|\uFFFD/g;function JE(e){return(typeof e=="string"?e:""+e).replace(UC,`
`).replace(kC,"")}function _E(e,t){return t=JE(t),JE(e)===t}function Le(e,t,a,o,s,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||ki(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&ki(e,""+o);break;case"className":Zo(e,"class",o);break;case"tabIndex":Zo(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Zo(e,a,o);break;case"style":_S(e,o,u);break;case"data":if(t!=="object"){Zo(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=qo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Le(e,t,"name",s.name,s,null),Le(e,t,"formEncType",s.formEncType,s,null),Le(e,t,"formMethod",s.formMethod,s,null),Le(e,t,"formTarget",s.formTarget,s,null)):(Le(e,t,"encType",s.encType,s,null),Le(e,t,"method",s.method,s,null),Le(e,t,"target",s.target,s,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=qo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=oa);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=qo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),jo(e,"popover",o);break;case"xlinkActuate":na(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":na(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":na(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":na(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":na(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":na(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":na(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":jo(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=df.get(a)||a,jo(e,a,o))}}function Du(e,t,a,o,s,u){switch(a){case"style":_S(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ki(e,o):(typeof o=="number"||typeof o=="bigint")&&ki(e,""+o);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kS.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),u=e[ht]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,s),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,s);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):jo(e,a,o)}}}function at(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var o=!1,s=!1,u;for(u in a)if(a.hasOwnProperty(u)){var A=a[u];if(A!=null)switch(u){case"src":o=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Le(e,t,u,A,a,null)}}s&&Le(e,t,"srcSet",a.srcSet,a,null),o&&Le(e,t,"src",a.src,a,null);return;case"input":Ae("invalid",e);var m=u=A=s=null,p=null,P=null;for(o in a)if(a.hasOwnProperty(o)){var G=a[o];if(G!=null)switch(o){case"name":s=G;break;case"type":A=G;break;case"checked":p=G;break;case"defaultChecked":P=G;break;case"value":u=G;break;case"defaultValue":m=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,t));break;default:Le(e,t,o,G,a,null)}}WS(e,u,m,p,P,A,s,!1);return;case"select":Ae("invalid",e),o=A=u=null;for(s in a)if(a.hasOwnProperty(s)&&(m=a[s],m!=null))switch(s){case"value":u=m;break;case"defaultValue":A=m;break;case"multiple":o=m;default:Le(e,t,s,m,a,null)}t=u,a=A,e.multiple=!!o,t!=null?Ui(e,!!o,t,!1):a!=null&&Ui(e,!!o,a,!0);return;case"textarea":Ae("invalid",e),u=s=o=null;for(A in a)if(a.hasOwnProperty(A)&&(m=a[A],m!=null))switch(A){case"value":o=m;break;case"defaultValue":s=m;break;case"children":u=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(l(91));break;default:Le(e,t,A,m,a,null)}zS(e,o,s,u);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(o=a[p],o!=null))switch(p){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Le(e,t,p,o,a,null)}return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(o=0;o<So.length;o++)Ae(So[o],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Le(e,t,P,o,a,null)}return;default:if(Ys(t)){for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!==void 0&&Du(e,t,G,o,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(o=a[m],o!=null&&Le(e,t,m,o,a,null))}function wC(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,A=null,m=null,p=null,P=null,G=null;for(H in a){var w=a[H];if(a.hasOwnProperty(H)&&w!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":p=w;default:o.hasOwnProperty(H)||Le(e,t,H,null,o,w)}}for(var D in o){var H=o[D];if(w=a[D],o.hasOwnProperty(D)&&(H!=null||w!=null))switch(D){case"type":u=H;break;case"name":s=H;break;case"checked":P=H;break;case"defaultChecked":G=H;break;case"value":A=H;break;case"defaultValue":m=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(l(137,t));break;default:H!==w&&Le(e,t,D,H,o,w)}}Ks(e,A,m,p,P,G,u,s);return;case"select":H=A=m=D=null;for(u in a)if(p=a[u],a.hasOwnProperty(u)&&p!=null)switch(u){case"value":break;case"multiple":H=p;default:o.hasOwnProperty(u)||Le(e,t,u,null,o,p)}for(s in o)if(u=o[s],p=a[s],o.hasOwnProperty(s)&&(u!=null||p!=null))switch(s){case"value":D=u;break;case"defaultValue":m=u;break;case"multiple":A=u;default:u!==p&&Le(e,t,s,u,o,p)}t=m,a=A,o=H,D!=null?Ui(e,!!a,D,!1):!!o!=!!a&&(t!=null?Ui(e,!!a,t,!0):Ui(e,!!a,a?[]:"",!1));return;case"textarea":H=D=null;for(m in a)if(s=a[m],a.hasOwnProperty(m)&&s!=null&&!o.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Le(e,t,m,null,o,s)}for(A in o)if(s=o[A],u=a[A],o.hasOwnProperty(A)&&(s!=null||u!=null))switch(A){case"value":D=s;break;case"defaultValue":H=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==u&&Le(e,t,A,s,o,u)}YS(e,D,H);return;case"option":for(var Z in a)if(D=a[Z],a.hasOwnProperty(Z)&&D!=null&&!o.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:Le(e,t,Z,null,o,D)}for(p in o)if(D=o[p],H=a[p],o.hasOwnProperty(p)&&D!==H&&(D!=null||H!=null))switch(p){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Le(e,t,p,D,o,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)D=a[ae],a.hasOwnProperty(ae)&&D!=null&&!o.hasOwnProperty(ae)&&Le(e,t,ae,null,o,D);for(P in o)if(D=o[P],H=a[P],o.hasOwnProperty(P)&&D!==H&&(D!=null||H!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:Le(e,t,P,D,o,H)}return;default:if(Ys(t)){for(var Me in a)D=a[Me],a.hasOwnProperty(Me)&&D!==void 0&&!o.hasOwnProperty(Me)&&Du(e,t,Me,void 0,o,D);for(G in o)D=o[G],H=a[G],!o.hasOwnProperty(G)||D===H||D===void 0&&H===void 0||Du(e,t,G,D,o,H);return}}for(var y in a)D=a[y],a.hasOwnProperty(y)&&D!=null&&!o.hasOwnProperty(y)&&Le(e,t,y,null,o,D);for(w in o)D=o[w],H=a[w],!o.hasOwnProperty(w)||D===H||D==null&&H==null||Le(e,t,w,D,o,H)}function jE(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VC(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var s=a[o],u=s.transferSize,A=s.initiatorType,m=s.duration;if(u&&m&&jE(A)){for(A=0,m=s.responseEnd,o+=1;o<a.length;o++){var p=a[o],P=p.startTime;if(P>m)break;var G=p.transferSize,w=p.initiatorType;G&&jE(w)&&(p=p.responseEnd,A+=G*(p<m?1:(m-P)/(p-P)))}if(--o,t+=8*(u+A)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bu=null,Hu=null;function Jr(e){return e.nodeType===9?e:e.ownerDocument}function ZE(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function XE(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bu=null;function xC(){var e=window.event;return e&&e.type==="popstate"?e===bu?!1:(bu=e,!0):(bu=null,!1)}var qE=typeof setTimeout=="function"?setTimeout:void 0,KC=typeof clearTimeout=="function"?clearTimeout:void 0,QE=typeof Promise=="function"?Promise:void 0,WC=typeof queueMicrotask=="function"?queueMicrotask:typeof QE<"u"?function(e){return QE.resolve(null).then(e).catch(YC)}:qE;function YC(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function $E(e,t){var a=t,o=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(s),Tn(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var u=a.firstChild;u;){var A=u.nextSibling,m=u.nodeName;u[Bn]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=A}}else a==="body"&&Eo(e.ownerDocument.body);a=s}while(a);Tn(t)}function eh(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Gu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gu(a),Vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zC(e,t,a,o){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Bn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function JC(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Kt(e.nextSibling),e===null))return null;return e}function th(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function Fu(e){return e.data==="$?"||e.data==="$~"}function Uu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _C(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ku=null;function ah(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Kt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ih(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function nh(e,t,a){switch(t=Jr(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Eo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Vs(e)}var Wt=new Map,oh=new Set;function _r(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Oa=W.d;W.d={f:jC,r:ZC,D:XC,C:qC,L:QC,m:$C,X:tO,S:eO,M:aO};function jC(){var e=Oa.f(),t=kr();return e||t}function ZC(e){var t=bi(e);t!==null&&t.tag===5&&t.type==="form"?pA(t):Oa.r(e)}var An=typeof document>"u"?null:document;function rh(e,t,a){var o=An;if(o&&typeof t=="string"&&t){var s=Gt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),oh.has(s)||(oh.add(s),e={rel:e,crossOrigin:a,href:t},o.querySelector(s)===null&&(t=o.createElement("link"),at(t,"link",e),Xe(t),o.head.appendChild(t)))}}function XC(e){Oa.D(e),rh("dns-prefetch",e,null)}function qC(e,t){Oa.C(e,t),rh("preconnect",e,t)}function QC(e,t,a){Oa.L(e,t,a);var o=An;if(o&&e&&t){var s='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+Gt(a.imageSizes)+'"]')):s+='[href="'+Gt(e)+'"]';var u=s;switch(t){case"style":u=En(e);break;case"script":u=hn(e)}Wt.has(u)||(e=f({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Wt.set(u,e),o.querySelector(s)!==null||t==="style"&&o.querySelector(ho(u))||t==="script"&&o.querySelector(To(u))||(t=o.createElement("link"),at(t,"link",e),Xe(t),o.head.appendChild(t)))}}function $C(e,t){Oa.m(e,t);var a=An;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Gt(o)+'"][href="'+Gt(e)+'"]',u=s;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=hn(e)}if(!Wt.has(u)&&(e=f({rel:"modulepreload",href:e},t),Wt.set(u,e),a.querySelector(s)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(u)))return}o=a.createElement("link"),at(o,"link",e),Xe(o),a.head.appendChild(o)}}}function eO(e,t,a){Oa.S(e,t,a);var o=An;if(o&&e){var s=Gi(o).hoistableStyles,u=En(e);t=t||"default";var A=s.get(u);if(!A){var m={loading:0,preload:null};if(A=o.querySelector(ho(u)))m.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Wt.get(u))&&wu(e,a);var p=A=o.createElement("link");Xe(p),at(p,"link",e),p._p=new Promise(function(P,G){p.onload=P,p.onerror=G}),p.addEventListener("load",function(){m.loading|=1}),p.addEventListener("error",function(){m.loading|=2}),m.loading|=4,jr(A,t,o)}A={type:"stylesheet",instance:A,count:1,state:m},s.set(u,A)}}}function tO(e,t){Oa.X(e,t);var a=An;if(a&&e){var o=Gi(a).hoistableScripts,s=hn(e),u=o.get(s);u||(u=a.querySelector(To(s)),u||(e=f({src:e,async:!0},t),(t=Wt.get(s))&&Vu(e,t),u=a.createElement("script"),Xe(u),at(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(s,u))}}function aO(e,t){Oa.M(e,t);var a=An;if(a&&e){var o=Gi(a).hoistableScripts,s=hn(e),u=o.get(s);u||(u=a.querySelector(To(s)),u||(e=f({src:e,async:!0,type:"module"},t),(t=Wt.get(s))&&Vu(e,t),u=a.createElement("script"),Xe(u),at(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(s,u))}}function sh(e,t,a,o){var s=(s=Se.current)?_r(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=En(a.href),a=Gi(s).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=En(a.href);var u=Gi(s).hoistableStyles,A=u.get(e);if(A||(s=s.ownerDocument||s,A={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,A),(u=s.querySelector(ho(e)))&&!u._p&&(A.instance=u,A.state.loading=5),Wt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wt.set(e,a),u||iO(s,e,a,A.state))),t&&o===null)throw Error(l(528,""));return A}if(t&&o!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hn(a),a=Gi(s).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function En(e){return'href="'+Gt(e)+'"'}function ho(e){return'link[rel="stylesheet"]['+e+"]"}function lh(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function iO(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),at(t,"link",a),Xe(t),e.head.appendChild(t))}function hn(e){return'[src="'+Gt(e)+'"]'}function To(e){return"script[async]"+e}function uh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(o)return t.instance=o,Xe(o),o;var s=f({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Xe(o),at(o,"style",s),jr(o,a.precedence,e),t.instance=o;case"stylesheet":s=En(a.href);var u=e.querySelector(ho(s));if(u)return t.state.loading|=4,t.instance=u,Xe(u),u;o=lh(a),(s=Wt.get(s))&&wu(o,s),u=(e.ownerDocument||e).createElement("link"),Xe(u);var A=u;return A._p=new Promise(function(m,p){A.onload=m,A.onerror=p}),at(u,"link",o),t.state.loading|=4,jr(u,a.precedence,e),t.instance=u;case"script":return u=hn(a.src),(s=e.querySelector(To(u)))?(t.instance=s,Xe(s),s):(o=a,(s=Wt.get(u))&&(o=f({},a),Vu(o,s)),e=e.ownerDocument||e,s=e.createElement("script"),Xe(s),at(s,"link",o),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,jr(o,a.precedence,e));return t.instance}function jr(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=o.length?o[o.length-1]:null,u=s,A=0;A<o.length;A++){var m=o[A];if(m.dataset.precedence===t)u=m;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function wu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zr=null;function ch(e,t,a){if(Zr===null){var o=new Map,s=Zr=new Map;s.set(a,o)}else s=Zr,o=s.get(a),o||(o=new Map,s.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var u=a[s];if(!(u[Bn]||u[Qe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var A=u.getAttribute(t)||"";A=e+A;var m=o.get(A);m?m.push(u):o.set(A,[u])}}return o}function Sh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function nO(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function dh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oO(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=En(o.href),u=t.querySelector(ho(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Xe(u);return}u=t.ownerDocument||t,o=lh(o),(s=Wt.get(s))&&wu(o,s),u=u.createElement("link"),Xe(u);var A=u;A._p=new Promise(function(m,p){A.onload=m,A.onerror=p}),at(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var xu=0;function rO(e,t){return e.stylesheets&&e.count===0&&Qr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&xu===0&&(xu=62500*VC());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qr(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>xu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(s)}}:null}function Xr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qr=null;function Qr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qr=new Map,t.forEach(sO,e),qr=null,Xr.call(e))}function sO(e,t){if(!(t.state.loading&4)){var a=qr.get(e);if(a)var o=a.get(null);else{a=new Map,qr.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var A=s[u];(A.nodeName==="LINK"||A.getAttribute("media")!=="not all")&&(a.set(A.dataset.precedence,A),o=A)}o&&a.set(null,o)}s=t.instance,A=s.getAttribute("data-precedence"),u=a.get(A)||o,u===o&&a.set(null,s),a.set(A,s),this.count++,o=Xr.bind(this),s.addEventListener("load",o),s.addEventListener("error",o),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var mo={$$typeof:x,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function lO(e,t,a,o,s,u,A,m,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.hiddenUpdates=Fs(null),this.identifierPrefix=o,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=A,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Ah(e,t,a,o,s,u,A,m,p,P,G,w){return e=new lO(e,t,a,A,p,P,G,w,m),t=1,u===!0&&(t|=24),u=yt(3,null,null,t),e.current=u,u.stateNode=e,t=Cl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},Nl(u),e}function Eh(e){return e?(e=zi,e):zi}function hh(e,t,a,o,s,u){s=Eh(s),o.context===null?o.context=s:o.pendingContext=s,o=ba(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=Ga(e,o,t),a!==null&&(Ot(a,e,t),jn(a,e,t))}function Th(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ku(e,t){Th(e,t),(e=e.alternate)&&Th(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&Ot(t,e,67108864),Ku(e,67108864)}}function Rh(e){if(e.tag===13||e.tag===31){var t=Bt();t=Us(t);var a=si(e,t);a!==null&&Ot(a,e,t),Ku(e,t)}}var $r=!0;function uO(e,t,a,o){var s=F.T;F.T=null;var u=W.p;try{W.p=2,Wu(e,t,a,o)}finally{W.p=u,F.T=s}}function cO(e,t,a,o){var s=F.T;F.T=null;var u=W.p;try{W.p=8,Wu(e,t,a,o)}finally{W.p=u,F.T=s}}function Wu(e,t,a,o){if($r){var s=Yu(o);if(s===null)Pu(e,t,o,es,a),Ch(e,o);else if(dO(s,e,t,a,o))o.stopPropagation();else if(Ch(e,o),t&4&&-1<SO.indexOf(e)){for(;s!==null;){var u=bi(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var A=ai(u.pendingLanes);if(A!==0){var m=u;for(m.pendingLanes|=2,m.entangledLanes|=2;A;){var p=1<<31-Nt(A);m.entanglements[1]|=p,A&=~p}ea(u),(Oe&6)===0&&(Fr=pt()+500,co(0))}}break;case 31:case 13:m=si(u,2),m!==null&&Ot(m,u,2),kr(),Ku(u,2)}if(u=Yu(o),u===null&&Pu(e,t,o,es,a),u===s)break;s=u}s!==null&&o.stopPropagation()}else Pu(e,t,o,null,a)}}function Yu(e){return e=Js(e),zu(e)}var es=null;function zu(e){if(es=null,e=vi(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=S(t),e!==null)return e;e=null}else if(a===31){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return es=e,null}function fh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ZR()){case LS:return 2;case MS:return 8;case Wo:case XR:return 32;case PS:return 268435456;default:return 32}default:return 32}}var Ju=!1,Ja=null,_a=null,ja=null,Ro=new Map,fo=new Map,Za=[],SO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ch(e,t){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(t.pointerId)}}function Co(e,t,a,o,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[s]},t!==null&&(t=bi(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function dO(e,t,a,o,s){switch(t){case"focusin":return Ja=Co(Ja,e,t,a,o,s),!0;case"dragenter":return _a=Co(_a,e,t,a,o,s),!0;case"mouseover":return ja=Co(ja,e,t,a,o,s),!0;case"pointerover":var u=s.pointerId;return Ro.set(u,Co(Ro.get(u)||null,e,t,a,o,s)),!0;case"gotpointercapture":return u=s.pointerId,fo.set(u,Co(fo.get(u)||null,e,t,a,o,s)),!0}return!1}function Oh(e){var t=vi(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=S(a),t!==null){e.blockedOn=t,GS(e.priority,function(){Rh(a)});return}}else if(t===31){if(t=E(a),t!==null){e.blockedOn=t,GS(e.priority,function(){Rh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Yu(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);zs=o,a.target.dispatchEvent(o),zs=null}else return t=bi(a),t!==null&&mh(t),e.blockedOn=a,!1;t.shift()}return!0}function ph(e,t,a){ts(e)&&a.delete(t)}function AO(){Ju=!1,Ja!==null&&ts(Ja)&&(Ja=null),_a!==null&&ts(_a)&&(_a=null),ja!==null&&ts(ja)&&(ja=null),Ro.forEach(ph),fo.forEach(ph)}function as(e,t){e.blockedOn===t&&(e.blockedOn=null,Ju||(Ju=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,AO)))}var is=null;function gh(e){is!==e&&(is=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){is===e&&(is=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],s=e[t+2];if(typeof o!="function"){if(zu(o||a)===null)continue;break}var u=bi(a);u!==null&&(e.splice(t,3),t-=3,Yl(u,{pending:!0,data:s,method:a.method,action:o},o,s))}}))}function Tn(e){function t(p){return as(p,e)}Ja!==null&&as(Ja,e),_a!==null&&as(_a,e),ja!==null&&as(ja,e),Ro.forEach(t),fo.forEach(t);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Oh(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var s=a[o],u=a[o+1],A=s[ht]||null;if(typeof u=="function")A||gh(a);else if(A){var m=null;if(u&&u.hasAttribute("formAction")){if(s=u,A=u[ht]||null)m=A.formAction;else if(zu(s)!==null)continue}else m=A.action;typeof m=="function"?a[o+1]=m:(a.splice(o,3),o-=3),gh(a)}}}function Nh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(A){return s=A})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function _u(e){this._internalRoot=e}ns.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,o=Bt();hh(a,o,e,t,null,null)},ns.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hh(e.current,2,null,e,null,null),kr(),t[Hi]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=bS();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Za.length&&t!==0&&t<Za[a].priority;a++);Za.splice(a,0,e),a===0&&Oh(e)}};var Ih=n.version;if(Ih!=="19.2.3")throw Error(l(527,Ih,"19.2.3"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=T(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var EO={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!os.isDisabled&&os.supportsFiber)try{Mn=os.inject(EO),gt=os}catch{}}return po.createRoot=function(e,t){if(!c(e))throw Error(l(299));var a=!1,o="",s=HA,u=vA,A=bA;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(A=t.onRecoverableError)),t=Ah(e,1,!1,null,null,a,o,null,s,u,A,Nh),e[Hi]=t.current,Mu(e),new _u(t)},po.hydrateRoot=function(e,t,a){if(!c(e))throw Error(l(299));var o=!1,s="",u=HA,A=vA,m=bA,p=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(A=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Ah(e,1,!0,t,a??null,o,s,p,u,A,m,Nh),t.context=Eh(null),a=t.current,o=Bt(),o=Us(o),s=ba(o),s.callback=null,Ga(a,s,o),a=o,t.current.lanes=a,Dn(t,a),ea(t),e[Hi]=t.current,Mu(e),new ns(t)},po.version="19.2.3",po}var Gh;function NO(){if(Gh)return Xu.exports;Gh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),Xu.exports=gO(),Xu.exports}var IO=NO();const yO=cm(IO),LO="modulepreload",MO=function(i){return"/"+i},Fh={},Di=function(n,r,l){let c=Promise.resolve();if(r&&r.length>0){let S=function(T){return Promise.all(T.map(R=>Promise.resolve(R).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const E=document.querySelector("meta[property=csp-nonce]"),h=(E==null?void 0:E.nonce)||(E==null?void 0:E.getAttribute("nonce"));c=S(r.map(T=>{if(T=MO(T),T in Fh)return;Fh[T]=!0;const R=T.endsWith(".css"),f=R?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${T}"]${f}`))return;const C=document.createElement("link");if(C.rel=R?"stylesheet":LO,R||(C.as="script"),C.crossOrigin="",C.href=T,h&&C.setAttribute("nonce",h),document.head.appendChild(C),R)return new Promise((L,v)=>{C.addEventListener("load",L),C.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${T}`)))})}))}function d(S){const E=new Event("vite:preloadError",{cancelable:!0});if(E.payload=S,window.dispatchEvent(E),!E.defaultPrevented)throw S}return c.then(S=>{for(const E of S||[])E.status==="rejected"&&d(E.reason);return n().catch(d)})};var te=(i=>(i.MENU="MENU",i.CLASSIC="CLASSIC",i.LEVEL_THEMED="LEVEL_THEMED",i.LEVEL_EMOJI="LEVEL_EMOJI",i.LEVEL_MIND_MATCH="LEVEL_MIND_MATCH",i.LEVEL_SYNONYMS="LEVEL_SYNONYMS",i.LEVEL_EXPANSION="LEVEL_EXPANSION",i.LEVEL_CASCADE="LEVEL_CASCADE",i.HIDDEN="HIDDEN",i))(te||{});const Uh=32,PO=70,DO=["bg-neon-red shadow-[0_0_15px_#FF073A] border-white","bg-neon-orange shadow-[0_0_15px_#FF5F1F] border-white","bg-neon-yellow shadow-[0_0_15px_#F9FF00] border-white","bg-neon-lime shadow-[0_0_15px_#39FF14] border-white","bg-neon-green shadow-[0_0_15px_#00F000] border-white","bg-neon-mint shadow-[0_0_15px_#00FF9F] border-white","bg-neon-cyan shadow-[0_0_15px_#00FFFF] border-white","bg-neon-sky-blue shadow-[0_0_15px_#00BFFF] border-white","bg-neon-blue shadow-[0_0_15px_#0066FF] border-white","bg-neon-violet shadow-[0_0_15px_#B026FF] border-white","bg-neon-purple shadow-[0_0_15px_#D400FF] border-white","bg-neon-magenta shadow-[0_0_15px_#FF00FF] border-white","bg-neon-pink shadow-[0_0_15px_#FF1FBF] border-white","bg-neon-rose shadow-[0_0_15_#FF0055] border-white"],GL=[{name:"NEON ARCADE",gradient:"from-black to-zinc-900",solvedColors:DO}],it="CLASSIC",nt="LEVEL_EMOJI",ot="LEVEL_MIND_MATCH",rt="LEVEL_SYNONYMS",ut="LEVEL_THEMED",ct="LEVEL_EXPANSION",BO=[it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt,ct,ut,it,nt,ot,rt],ia={LEVEL:"wpm_level",TUTORIAL_SEEN:"wpm_tutorial_seen_v2",TUTORIAL_SEEN_L2:"wpm_tutorial_seen_l2",TUTORIAL_SEEN_L5:"wpm_tutorial_seen_l5",GAME_STATS:"wpm_game_stats",DAILY_HISTORY:"wpm_daily_history",ENABLED_MODES:"wpm_enabled_modes",CUSTOM_POOL:"wpm_custom_pool"},HO=()=>{try{const i=localStorage.getItem(ia.LEVEL);if(!i)return 1;const n=parseInt(i,10);return isNaN(n)?1:n}catch{return 1}},vO=i=>{localStorage.setItem(ia.LEVEL,i.toString())},ec=[te.CLASSIC,te.LEVEL_EMOJI,te.LEVEL_SYNONYMS,te.LEVEL_MIND_MATCH,te.LEVEL_THEMED,te.LEVEL_EXPANSION],bO=()=>{try{const i=localStorage.getItem(ia.ENABLED_MODES);if(!i)return ec;const n=JSON.parse(i);return Array.isArray(n)&&n.length>0?n:ec}catch{return ec}},GO=i=>{localStorage.setItem(ia.ENABLED_MODES,JSON.stringify(i))},FO=()=>{try{const i=localStorage.getItem(ia.CUSTOM_POOL);if(!i)return[];const n=JSON.parse(i);return Array.isArray(n)?n:[]}catch{return[]}},UO=i=>{localStorage.setItem(ia.CUSTOM_POOL,JSON.stringify(i))},kO=()=>!!localStorage.getItem(ia.TUTORIAL_SEEN),wO=()=>{localStorage.setItem(ia.TUTORIAL_SEEN,"true")},tc={rowsSolved:0,levelsCompleted:0,totalTimeMs:0,hintsUsed:0,hintsRefused:0,totalMoves:0,solvedCategoryIds:[],solvedWords:[]},Sm=()=>{try{const i=localStorage.getItem(ia.GAME_STATS);if(!i)return tc;const n=JSON.parse(i);return{...tc,...n,solvedWords:Array.isArray(n.solvedWords)?n.solvedWords:[]}}catch{return tc}},VO=i=>{try{const n=Sm();let r=n.solvedCategoryIds;if(i.solvedCategoryIds){const d=new Set([...n.solvedCategoryIds,...i.solvedCategoryIds]);r=Array.from(d)}let l=n.solvedWords;if(i.solvedWords){const d=new Set([...n.solvedWords,...i.solvedWords]);l=Array.from(d)}const c={rowsSolved:n.rowsSolved+(i.rowsSolved||0),levelsCompleted:n.levelsCompleted+(i.levelsCompleted||0),totalTimeMs:n.totalTimeMs+(i.totalTimeMs||0),hintsUsed:n.hintsUsed+(i.hintsUsed||0),hintsRefused:n.hintsRefused+(i.hintsRefused||0),totalMoves:n.totalMoves+(i.totalMoves||0),solvedCategoryIds:r,solvedWords:l};localStorage.setItem(ia.GAME_STATS,JSON.stringify(c))}catch(n){console.error("Failed to update stats",n)}},xO=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
399,Church Actions,Preach,Pray,Baptize,Confess,Offer,Chant,Sing,Fast,Read Scripture`,KO=`401,Church Music Instruments,Organ,Harp,Flute,Lute,Horn,Bell,Trumpet,Violin,Drum
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
770,ROCK PRODUCERS,GEORGE MARTIN,RICK RUBIN,BRIAN ENO,MICKIE MOST,QUINCY JONES`,WO=`801,SOCCER ACTIONS,GOAL,CORNER KICK,PASS,DRIBBLE,HEADER,FOUL,KICKOFF,OFFSIDE,PENALTY KICK
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
1200,TECTONIC PLATES,PACIFIC,EURASIAN,AFRICAN,ANTARCTIC`,YO=`1201,VOLCANO PARTS,CRATER,VENT,MAGMA,LAVA,ASH
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
1300,BREAKING BAD,WALTER,JESSE,SKYLER,HANK,SAUL,GUS`,zO=`1760,BICYCLE PARTS,WHEEL,TIRE,PEDAL,CHAIN,HANDLEBAR,SEAT,BRAKE,GEAR
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
2500,Starts with Z,Zebra,Zoo,Zero,Zone,Zest,Zipper`,JO=`100000,Air Fryer Staples,Fries,Wings,Broccoli,Salmon,Tofu,Ravioli
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
100073,Baccarat Terms,Player,Banker`,_O=`110000,Abraham Lincoln,Civil War,Emancipation Proclamation,Gettysburg Address,Honest Abe,Log Cabin,Union
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
110400,SODA COMPANIES,PEPSICO,COCA COLA,DR PEPPER,KEURIG`,jO=`id,name,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
70300,BRIDGE TYPES,SUSPENSION,ARCH,BEAM,TRUSS,DRAWBRIDGE,CANTILEVER,CABLE,PONTOON`,ZO=`id,name,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
60044,RHYME: -ISTIC,Artistic,Realistic,Optimistic,Pessimistic,Statistic,Logistic,Ballistic,Mystic`,XO=`110401,Solar System Objects,Asteroid,Comet,Meteoroid,Heliosphere
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
110484,Yellowstone,Geyser,Caldera,Bison,Wolves,Prismatic,Mammoth`,qO=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
120000,Alabama,Yellowhammer bird,Longleaf Pine,Carver discoveries,Rosa Parks site,Space & Rocket Center,Christmas holiday,Talladega
120001,Alaska,24 hours of sun,Once Russian,Canadian Neighbor,Largest US state,Denali,Mushing,3 million lakes
120002,Arizona,Cactus Wren bird,Palo Verde tree,Grand Canyon,London Bridge,No Daylight Saving,Copper State,Monument Valley
120003,Arkansas,Mockingbird,Loblolly Pine,Diamond mine,Bill Clinton,Ozark Mountains,Hot Springs,Walmart HQ
120004,California,Quail bird,Redwood tree,Death Valley,Golden Gate Bridge,Alcatraz Island,Hollywood Sign,Largest economy
120005,Colorado,Lark Bunting,Blue Spruce,Rocky Mountains,Highest elevation,Mesa Verde,Pikes Peak,Garden of the Gods
120006,Connecticut,American Robin,White Oak tree,First constitution,Yale University,Mystic Seaport,Mark Twain House,Constitution State
120007,Delaware,Blue Hen Chicken,American Holly,First state,No sales tax,Rodney's ride,Biden's home,Constitution ratify
120008,Florida,Mockingbird,Sabal Palm,Everglades,Kennedy Space Center,Disney World,St. Augustine,Artemis II
120009,Georgia,Brown Thrasher,Live Oak tree,Oldest state park,Martin Luther King,1996 Olympics,Jimmy Carter,Coca-Cola HQ
120010,Hawaii,Nene bird,Kukui tree,Only islands,Pearl Harbor,Diamond Head,Mauna Kea,Grows coffee
120011,Idaho,Mountain Bluebird,Western White Pine,Potato producer,Hells Canyon,Craters of the Moon,Sun Valley,Shoshone Falls
120012,Illinois,Northern Cardinal,White Oak tree,Abraham Lincoln,Route66 starts,Willis Tower,Obama Center,Navy Pier
120013,Indiana,Northern Cardinal,Tulip tree,Indianapolis 500,Hoosier State,Lincoln Memorial,Michael Jackson,Indiana Dunes
120014,Iowa,Eastern Goldfinch,Bur Oak tree,Presidential caucus,Cattle numbers,Field of Dreams,Hoover Library,Effigy Mounds
120015,Kansas,Western Meadowlark,Cottonwood tree,Geographic center,Oz Dorothy,Eisenhower Library,Air Capital,Tallgrass Prairie
120016,Kentucky,Northern Cardinal,Tulip Poplar,Mammoth Cave,Kentucky Derby,Bourbon capital,Lincoln birthplace,SAR Museum
120017,Louisiana,Brown Pelican,Bald Cypress,Mardi Gras,French Quarter,Jazz birthplace,WrestleMania 42,Cajun culture
120018,Maine,Black-capped Chickadee,Eastern White Pine,Acadia Park,Lobster producer,L.L. Bean HQ,Portland Head Light,Eastern point
120019,Maryland,Baltimore Oriole,White Oak tree,Star-Spangled Banner,Chesapeake Bay,Naval Academy,Antietam,Fort McHenry
120020,Massachusetts,Black-capped Chickadee,American Elm,Freedom Trail,Harvard University,Plymouth Rock,Lexington & Concord,Cape Cod
120021,Michigan,American Robin,Eastern White Pine,Great Lakes,Henry Ford Museum,Motown Records,Mackinac Bridge,Pictured Rocks
120022,Minnesota,Common Loon,Red Pine tree,Mall of America,10000 Lakes,Mississippi head,Mayo Clinic,Paisley Park
120023,Mississippi,Mockingbird,Magnolia tree,Blues birthplace,Stetson hat,Vicksburg,Gulf Islands,B.B. King Museum
120024,Missouri,Eastern Bluebird,Flowering Dogwood,Gateway Arch,Truman Library,Route 66 Centennial,Branson theaters,Twain's home
120025,Montana,Western Meadowlark,Ponderosa Pine,Glacier Park,Little Bighorn,Temp change,Yellowstone north,Big Sky
120026,Nebraska,Western Meadowlark,Cottonwood tree,Chimney Rock,Sandhill crane,Carhenge,Arbor Day,Unicameral
120027,Nevada,Mountain Bluebird,Single-leaf Pinyon,Hoover Dam,Las Vegas Strip,Area 51,Great Basin,Silver State
120028,New Hampshire,Purple Finch,Paper Birch,Mount Washington,Primary election,Old Man site,Dartmouth,White Mountains
120029,New Jersey,Eastern Goldfinch,Red Oak tree,Density high,Boardwalk,Princeton,Edison's lab,Ellis Island
120030,New Mexico,Greater Roadrunner,Piñon Pine,Carlsbad Caverns,White Sands,Santa Fe,Los Alamos,Balloon Fiesta
120031,New York,Eastern Bluebird,Sugar Maple,Statue of Liberty,Niagara Falls,Empire State,9/11 Memorial,Harlem Renaissance
120032,North Carolina,Northern Cardinal,Longleaf Pine,Wright Brothers,Biltmore Estate,Great Smoky,Outer Banks,Research Triangle
120033,North Dakota,Western Meadowlark,American Elm,Theodore Roosevelt,Roosevelt Library,Peace Garden,Fewest landmarks,Fargo
120034,Ohio,Northern Cardinal,Ohio Buckeye,Rock Hall of Fame,8 US presidents,Cuyahoga Valley,Wright-Patterson,Football Hall
120035,Oklahoma,Scissor-tailed Flycatcher,Redbud tree,Route 66 museum,Cherokee Nation,Tulsa Massacre,OKC Memorial,Centennial Bash
120036,Oregon,Western Meadowlark,Douglas Fir,Crater Lake,Fastest-speaking,City of Boring,Haystack Rock,Rose Test Garden
120037,Pennsylvania,Ruffed Grouse,Eastern Hemlock,Liberty Bell,Philadelphia 2026,Gettysburg,Valley Forge,Independence Hall
120038,Rhode Island,Rhode Island Red,Red Maple,Smallest state,Newport Mansions,Ocean State,Baptist Church,Brown University
120039,South Carolina,Carolina Wren,Cabbage Palmetto,Fort Sumter,Charleston historic,Myrtle Beach,Hilton Head,BMW US
120040,South Dakota,Ring-necked Pheasant,Black Hills Spruce,Mount Rushmore,Badlands,Crazy Horse,Wall Drug,Sturgis Rally
120041,Tennessee,Mockingbird,Tulip Poplar,Great Smoky,Graceland,Grand Ole Opry,Songteller Hotel,Oak Ridge
120042,Texas,Mockingbird,Pecan tree,The Alamo,NASA Johnson,Universal Kids,SXSW 40th,Big Bend
120043,Utah,California Gull,Quaking Aspen,Zion Park,Arches Park,Mormon Tabernacle,SLC Olympics,Sundance 2026
120044,Vermont,Hermit Thrush,Sugar Maple,Maple syrup,Ben & Jerry's,Lake Champlain,Green Mountains,Trapp Family Lodge
120045,Virginia,Northern Cardinal,American Dogwood,Arlington Cemetery,Mount Vernon,Monticello,Jamestown,Shenandoah
120046,Washington,Willow Goldfinch,Western Hemlock,Mount Rainier,Space Needle,Olympic Park,Microsoft HQ,Mount St. Helens
120047,West Virginia,Northern Cardinal,Sugar Maple,New River Gorge,Appalachian,Harpers Ferry,The Greenbrier,Mountain State
120048,Wisconsin,American Robin,Sugar Maple,Apostle Islands,Harley Museum,Door County,Dairy State,15000 lakes
120049,Wyoming,Western Meadowlark,Plains Cottonwood,Yellowstone,Grand Teton,Devils Tower,Women's suffrage,Old Faithful
120050,Afghanistan,Peacock,Banyan tree,Taj Mahal,Yoga birth,Bollywood,Ganges River,Holi Fest,Chess origin,Kabul City
120051,Brazil,Saffron Finch,Ipe tree,Christ Statue,Amazon Basin,Carnival,Bossa Nova,World Cup win,Brasilia,Sugar Loaf
120052,Canada,Gray Jay,Maple tree,Syrup leader,CN Tower,Niagara Falls,Big country,Ice Hockey,Rockies,Long Highway
120053,China,Crane bird,Ginkgo tree,Great Wall,Mandarin,Forbidden City,Yangtze River,Silk Road,Year of Horse,Giant Panda
120054,Egypt,Steppe Eagle,Doum Palm,Great Pyramid,Nile River,Sphinx,Suez Canal,Red Sea dive,Cairo City,Kings Valley
120055,France,Rooster,Common Oak,Eiffel Tower,Louvre Museum,French Revolt,Cannes Film,Tour de France,Wine region,Notre Dame
120056,Germany,Golden Eagle,German Oak,Berlin Gate,Alps peaks,Autobahn,Octoberfest,Berlin Wall,Beethoven,Black Forest
120057,India,Peacock,Banyan tree,Taj Mahal,Yoga birth,Bollywood,Ganges River,Holi Fest,Chess origin,Red Fort
120058,Indonesia,Hawk-eagle,Teak tree,Borobudur,Komodo Dragon,Many islands,Bali tourism,Java Island,Nasi Goreng,Gamelan
120059,Italy,Sparrow,Berry Tree,Colosseum,Leaning Tower,Venice canals,Vatican City,Ferrari,Opera origin,Amalfi Coast
120060,Japan,Pheasant,Cherry Tree,Mount Fuji,Bullet train,Sushi origin,Kyoto temples,Anime scene,Shintoism,Tokyo Metro
120061,Mexico,Golden Eagle,Dahlia flower,Chichen Itza,Dead Day fest,Tequila,Aztec history,Cabo San Lucas,Spanish tongue,Big Pyramid
120062,Nigeria,Crowned Crane,Costus flower,Zuma Rock,Film industry,Lagos City,Niger Delta,Yankari Park,Benin Bronze,Obudu Ranch
120063,Pakistan,Partridge,Deodar tree,K2 peak,Indus River,Badshahi Mosque,Nuclear power,Mango export,Cricket game,Faisal Mosque
120064,Russia,Tundra Swan,Larch tree,Red Square,Lake Baikal,Siberia Rail,Hermitage,11 time zones,First orbit,Big country,Bolshoi
120065,South Africa,Blue Crane,Yellowwood,Table Mountain,Kruger Park,Mandela legacy,Three capitals,Gold mines,Diamond mines,Cape Town
120066,South Korea,Magpie,Rose of Sharon,Seoul Palace,K-Pop fame,Samsung,DMZ border,Taekwondo,Jeju Island,Web leader,N Seoul Tower
120067,United Kingdom,Robin bird,Royal Oak,Big Ben,Stonehenge,British Museum,Tube system,London City,Magna Carta,Royal Family
120068,United States,Bald Eagle,Oak tree,Lady Liberty,Grand Canyon,Hollywood,Moon landing,50 states,Yellowstone,Mount Rushmore
120069,Vietnam,Chim Lac,Lotus flower,Ha Long Bay,Cu Chi Tunnels,Pho origin,Big cave,Coffee export,Saigon City,Tet festival
120070,Austria,Alps peaks,Vienna music,Mozart home,Ski resorts,Danube River,Apple strudel,Glass art,Lederhosen
120071,Belgium,Chocolate,Waffles,Brussels,Diamond trade,Comic strips,Ghent canals,Ardennes,Europe hub
120072,Bolivia,Salt flats,Andes peaks,La Paz City,Llama wool,Lake Titicaca,Silver mines,Amazon wild,Tiwanaku
120073,Chile,Atacama,Andes peaks,Santiago,Wine region,Easter Island,Torres Park,Copper mines,Moai statues
120074,Croatia,Dubrovnik,Split City,Hvar Island,Blue Sea,Game of Thrones,Plitvice,Tesla birth,Red and White
120075,Cuba,Old Havana,Cigars,Classic cars,Sugar cane,Salsa dance,Varadero,Rum origin,Che legacy
120076,Greece,Athens,Santorini,Mykonos,Olive oil,Ancient ruins,Olympic birth,Acropolis,Aegean Sea
120077,Hungary,Budapest,Danube River,Goulash,Thermal baths,Balaton Lake,Rubik's Cube,Paprika spice,Chain Bridge
120078,Jordan,Petra ruins,Dead Sea,Wadi Rum,Amman City,Camel treks,Roman ruins,Red Sea port,Bedouin life
120079,Kazakhstan,Steppe land,Space port,Almaty City,Caspian Sea,Astana City,Oil wealth,Apples birth,Horse riding
120080,Kuwait,Oil wealth,Kuwait City,Persian Gulf,Dinar money,Desert heat,Falconry,Grand Mosque,Water towers
120081,Nepal,Mount Everest,Himalayas,Kathmandu,Buddha birth,Sherpa guide,Yak butter,Trekking,Hindu shrines
120082,Norway,Fjords,Oslo City,Viking ships,Midnight sun,Oil wealth,Skiing birth,Northern light,Bergen port
120083,Poland,Warsaw City,Krakow,Pierogi,Salt mine,Tatras peaks,Baltic Sea,Chopin music,Old Town
120084,Portugal,Lisbon City,Porto wine,Fado music,Cork trees,Coastline,Algarve,Azores,Vasco da Gama
120085,Romania,Dracula myth,Carpathians,Bucharest,Danube Delta,Black Sea,Salt mines,Wood church,Painted walls
120086,Sweden,Stockholm,Abba music,Ikea origin,Volvo cars,Vasa museum,Meatballs,Lapland,Ice hotel
120087,Switzerland,Swiss banks,Alps peaks,Geneva City,Chocolate,Watches,Cheese fondue,Matterhorn,Lake Zurich
120088,United Arab Emirates,Burj Khalifa,Dubai City,Abu Dhabi,Oil wealth,Palm Island,Desert safari,Luxury malls,Ferrari World
120089,Zambia,Victoria Fall,Safari park,Copper mines,Zambezi,Lusaka City,Luangwa,Bird Crane,Walking tour`,QO=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
200000,CAKES Types,Sponge,Chiffon,Angel,Pound,Velvet,Bundt,Sheet,Marble,Carrot,Lava
200001,DOGS Skills,Agility,Herding,Hunting,Guard,Service,Guide,Rescue,Track,Police,Show
200002,BEER Styles,Lager,Pilsner,IPA,Stout,Porter,Wheat,Sour,Ale,Amber,Bock
200003,GEOLOGY Rocks,Igneous,Sediment,Metamorphic,Basalt,Granite,Quartz,Marble,Slate,Shale,Flint
200004,COWBOYS Gear,Saddle,Lasso,Spurs,Hat,Boots,Chaps,Vest,Rifle,Holster,Canteen
200005,PLANTS Succulent,Aloe,Cactus,Jade,Echeveria,Sedum,Agave,Haworthia,Lithops,Yucca,Kalanchoe
200006,WEATHER Winter,Snow,Ice,Blizzard,Sleet,Frost,Wind Chill,Freeze,Hail,Flurry,Drift
200007,ANCIENT EGYPT Gods,Ra,Anubis,Osiris,Isis,Horus,Seth,Thoth,Bastet,Sobek,Nut
200008,BAKERY Pastries,Croissant,Eclair,Tart,Danish,Cannoli,Scone,Brioche,Strudel,Puff,Macaron
200009,METALS Elements,Gold,Silver,Iron,Copper,Steel,Tin,Lead,Zinc,Nickel,Chrome
200010,RAINFOREST Places,Amazon,Congo,Borneo,New Guinea,Costa Rica,Jungle,Hot,Wet,Humid,Green
200011,RAINFOREST Animals,Monkeys,Birds,Snakes,Frogs,Insects,Jaguars,Parrots,Toucans,Tigers
200012,RAINFOREST Issue,Deforest,Logging,Farming,Cattle,Climate,Loss,Protect,Green,Eco,Save
200013,DESERT Places,Sahara,Gobi,Mojave,Sonoran,Arabian,Kalahari,Hot,Dry,Sand,Dunes
200014,DESERT Animals,Camel,Snake,Lizard,Scorpion,Coyote,Hawk,Owl,Fox,Rat,Mouse
200015,DESERT Features,Dunes,Oasis,Cactus,Rocks,Heat,Sand,Dry,Extreme,Water,Survive
200016,MOUNTAINS Places,Everest,Rockies,Andes,Alps,Himalayas,Sierra Nevada,Ural,Denali,K2,Fuji
200017,MOUNTAINS Activity,Hike,Climb,Ski,Board,Camp,View,Photo,Cold,Snow,Ice
200018,MOUNTAINS Terms,Peak,Summit,Base,Range,Valley,Trail,Pass,Elevation,Slope,Ridge
200019,AUSTRALIA Cities,Sydney,Melb,Brisbane,Perth,Adelaide,Canberra,Hobart,Darwin,Gold Coast,Bondi
200020,AUSTRALIA Animals,Kangaroo,Koala,Emu,Platypus,Wallaby,Dingo,Croc,Spider,Snake,Shark
200021,AUSTRALIA Nature,Outback,Great Reef,Uluru,Beach,Desert,Rainforest,Bush,Coast,Opera House,Harbor
200022,AUSTRALIA Culture,Mate,Barbie,Thongs,Surf,Rugby,Cricket,Aussie,Cheers,Sport,Beer
200023,AUSTRALIA Terms,Gday,Mate,Oz,Bush,Billabong,Woolshed,Outback,Walkabout,Swag,Damper
200024,CRUISE SHIPS Company,Royal,Carnival,Norwegian,Disney,MSC,Viking,Celebrity,Princess,Holland
200025,CRUISE SHIPS On Board,Food,Pool,Casino,Theatre,Shows,Spa,Gym,Bar,Cabins,Buffet
200026,CRUISE SHIPS Ports,Miami,Galveston,Seattle,Vancouver,Rome,Venice,Nassau,Cozumel,Jamaica,Alaska
200027,CRUISE SHIPS Terms,Bow,Stern,Port,Star,Gangway,Deck,Captain,Crew,Ocean,Travel
200028,JAZZ People,Armstrong,Ellington,Davis,Coltrane,Parker,Holiday,Fitzgerald,Monk,Basie,Goodman
200029,JAZZ Style,Swing,Blues,Be Bop,Cool,Fusion,Latin,Ragtime,Improv,Rhythm,Solo
200030,JAZZ Terms,Jam,Scat,Blue Note,Chords,Scale,Rhythm,Tempo,Swing,Improv,Session
200031,ROCK N ROLL People,Elvis,Beatles,Stones,Zeppelin,Queen,Jimi,Doors,Who,Clapton,Cash
200032,ROCK N ROLL Style,Blues,Rockabilly,Metal,Punk,Prog,Classic,Grunge,Pop Rock,Indie,Alt
200033,ROCK N ROLL Terms,Riff,Solo,Chords,Lyrics,Album,Band,Tour,Stage,Amp,Guitar
200034,E MUSIC Types,Techno,House,Trance,Dubstep,EDM,Ambient,Synth,Garage,Disco,Hip Hop
200035,E MUSIC Terms,Beat,Drop,Loop,Mix,DJ,Track,Album,Festival,Rave,Club
200036,E MUSIC Artists,Avicii,Guetta,Calvin,Tiesto,Skrillex,Deadmau5,Marshmello,Chemical,Fatboy,Daft Punk
200037,HIP HOP People,Tupac,Biggie,Dre,Snoop,Jay-Z,Eminem,Drake,Nas,Kanye,Kendrick
200038,HIP HOP Style,Rap,Beatbox,Graffiti,B Boy,Breakdance,Old School,New School,Trap,Drill,Conscious
200039,HIP HOP Terms,Flow,Rhyme,Beat,Mic,Crew,Posse,Track,Album,Single,Dis
200040,ILLEGAL Goods,Drugs,Guns,Stolen,Goods,Fake,ID,Money,Codes,Data,Organs
200041,ILLEGAL Terms,Traffick,Smuggle,Deal,Cartel,Mob,Gang,Underground,Black Mkt,Offshore,Dark Web
200042,PABLO E Life,Cocaine,Cartel,Medellin,Money,Drugs,Rich,Poor,Killings,Jail,Escape
200043,AL CAPONE Life,Mob,Chicago,Prohibition,Bootleg,Gangs,Crime,Jail,Tax Evasion,Famous,Scarface
200044,PICASSO Art,Cubism,Blue,Rose,Guernica,Dora Maar,Genius,Paint,Sculpt,Pottery,Prints
200045,BANKSY Art,Graffiti,Stencil,Street,Anon,UK,Artist,Mystery,Rat,Girl Balloon,Art Market
200046,HOBBIES Types,Sport,Music,Art,Game,Read,Cook,Garden,Photo,Collect,Hike
200047,COLLECTIBLES Items,Cards,Stamps,Coins,Dolls,Comics,Toys,Art,Wine,Cars,Guns
200048,GOOGLE Products,Search,Maps,Gmail,Chrome,Android,Pixel,Home,Docs,Drive,Sheets
200049,GOOGLE Tech,AI,Quantum,Cloud,Ads,Algorithm,Server,Data,Voice,Engine,Code
200050,GOOGLE Terms,Search,Rank,Organic,PPC,SEO,AdWords,Analytics,Cookie,Cache,Pixel
200051,GOOGLE History,Page,Brin,Garage,IPO,YouTube,Android,Alphabet,Big Tech,Global,Impact
200052,GOOGLE Future 2026,AI Growth,Quantum,Waymo,Fitbit,Nest,Health Tech,Search Adv,Ads,Cloud
200053,APPLE Products,iPhone,Mac,Watch,iPad,AirPods,TV,Music,Pay,Store,Vision Pro
200054,APPLE Tech,iOS,macOS,WatchOS,Chip,A17,M3,AI,Design,Closed,Ecosystem
200055,APPLE Terms,App,Store,Genius,Launch,Keynote,Logo,Siri,Face ID,Touch ID,iCloud
200056,APPLE History,Jobs,Wozniak,Garage,IPO,Mac,iPod,iPhone,Global,Iconic,Design
200057,APPLE Future 2026,iPhone 18,Vision Pro 2,AI Push,Health Tech,Car Project,New OS,Faster Chips,Services,More Stores
200058,BRANDS Popular,Nike,Coke,Apple,Google,Amazon,Toyota,Samsung,Disney,Netflix,Adidas
200059,BRANDS Luxury,Gucci,Prada,LV,Dior,Hermes,Rolex,Chanel,Versace,Mercedes,BMW
200060,BRANDS Sports,Nike,Adidas,Puma,Under Armour,Lulu,Patagonia,Columbia,Reebok,New Bal,Asics
200061,BRANDS Tech,Apple,Google,Amazon,Samsung,Sony,HP,Intel,Nvidia,AMD,Dell
200062,BRANDS Food,Coke,Pepsi,Nestle,Kraft,Heinz,Mars,Hershey,General Mills,Kellogg,Unilever
200063,BRANDS Auto,Toyota,VW,Ford,Chevy,BMW,Mercedes,Honda,Nissan,Tesla,Kia
200064,INTERNET Terms,WWW,HTTP,URL,Browser,Email,Server,Cloud,Data,Stream,Search
200065,INTERNET History,ARPANET,Dial up,Broadband,DSL,Cable,Fiber,WiFi,5G,Mobile,Net
200066,INTERNET Social,Facebook,Insta,TikTok,Snap,Twitter X,Linked In,YouTube,Reddit,Threads,Pinterest
200067,INTERNET Tech,Code,HTML,CSS,JavaScript,IP,Domain,Host,Server,Cloud,Data
200068,INTERNET Future 2026,Metaverse,AI,Web3,Blockchain,Quantum,Speed,Global,Access,New Apps,Tech
200069,FIFA WC History,Uruguay,Brazil,Italy,Germany,Argentina,France,Winners,Global,Tourney,Legacy
200070,FIFA WC 2026 Host,USA,Mexico,Canada,North America,Host City,Future,Games,Global,Big
200071,FIFA WC Teams,Brazil,France,Argentina,Germany,Spain,UK,USA,Mexico,Canada,Japan
200072,PLAYSTATION Consoles,PS5,PS4,PS3,PS2,PS1,PSP,Vita,PSVR,PSVR 2,PS Portal
200073,PLAYSTATION Games,God of War,Spider Man,Uncharted,Horizon,Last of Us,Gran Turismo,Final Fantasy,Bloodborne,Ghost Tsush
200074,PLAYSTATION Terms,DualSense,Trophy,Network,Plus,Store,Exclusives,Controller,Remote Play,AI Games
200075,PLAYSTATION Future 2026,PS6,VR 3,New Games,More Tech,Cloud Gaming,Mobile,PC Ports,AI Play,Global
200076,XBOX Consoles,Series X,Series S,One,360,Original,Game Pass,Cloud,Controller,Elite,Tech
200077,XBOX Games,Halo,Gears War,Forza,Starfield,Minecraft,Flight Sim,Call Duty,Diablo,Elder Scrolls,Doom
200078,XBOX Terms,Game Pass,Live,Gold,Cloud,Store,Exclusives,Controller,Console,AI Games,Tech
200079,XBOX Future 2026,New Console,More Games,AI Play,Cloud Gaming,Mobile,PC Ports,Subscriptions,More Studios
200080,PIXAR Films,Toy Story,Monsters,Nemo,Cars,Up,Inside Out,Coco,Soul,Turning Red,Elemental
200081,PIXAR Characters,Woody,Buzz,Sully,Mike,Nemo,Dory,Lightning,Mater,Up,Joy
200082,PIXAR Awards,Oscar,Animated,Film,Awards,Genius,Studio,Tech,Story,Art,Global
200083,PIXAR Future 2026,Toy Story 5,New Films,More Shows,AI in Film,Future,Tech,Art,Global
200084,STAR WARS Films,New Hope,Empire,Jedi,Force Awak,Last Jedi,Rise Sky,Rouge One,Solo,Clone Wars,Revenge Sith
200085,STAR WARS Characters,Luke,Leia,Han,Vader,Yoda,Obi-Wan,Kylo,Rey,Chewbacca,R2D2,C3PO
200086,STAR WARS Terms,Force,Jedi,Sith,Lightsaber,Empire,Rebel,Galaxy,Hyper,Space,Pilot
200087,STAR WARS Places,Tatooine,Coruscant,Endor,Hoth,Dagobah,Death Star,Falcon,Jabba,Canto Bight,Crait
200088,STAR WARS Future 2026,New Films,More Shows,AI in Film,Future,Tech,Art,Global,Ahsoka,Mando
200089,TV STARS Modern,Zendaya,Pedro,Olivia,Jenna,Jason,Hannah,Sydney,Anya,Timothee,Ryan
200090,TV STARS Classic,Carney,Burns,Ball,Nixon,King,Rickles,Hope,Crosby,Sinatra,Davis Jr
200091,CARS Classic,Mustang,Corvette,Camaro,Bel Air,Roadster,Coupe,Sedan,Convert,Muscle,Hot Rod
200092,CARS Brands Classic,Ford,Chevy,Dodge,Plymouth,Buick,Cadillac,Pontiac,Olds,Merc,Chrysler
200093,CARD GAMES Types,Poker,Bridge,Rummy,Solitaire,Hearts,Spades,Blackjack,Go Fish,Uno,War
200094,CARD GAMES Deck,Ace,King,Queen,Jack,Ten,Suit,Diamond,Heart,Club,Spade,Joker
200095,CARD GAMES Terms,Shuffle,Deal,Bet,Raise,Fold,Hit,Stay,Discard,Draw,Wild,Ace
200096,CASINO Games,Slots,Poker,Blackjack,Roulette,Craps,Baccarat,Bingo,Keno,Wheel,Sports
200097,CASINO Places,Vegas,Reno,Atlantic City,Macau,Monte Carlo,Casino,Resort,Hotel,Shows,Food
200098,CASINO Terms,Bet,Wager,Chip,Jackpot,Dealer,Payout,House Edge,Odds,Luck,Gamble
200099,BUFFET Food,Meat,Seafood,Veggies,Salads,Desserts,Carbs,Breads,Fruit,Cuisine,Global
200100,BUFFET Experience,Eat,All you can,Fill up,Huge,Variety,Plates,Walk,Sit,Enjoy,Love
200101,WEAPONS Guns,Rifle,Pistol,Shotgun,Machine,Sub,Sniper,Revolver,Lever,Bolt,Pump
200102,GOT Characters,Jon Snow,Dany,Tyrion,Cersei,Jaime,Arya,Sansa,Ned Stark,Joffrey,Night King
200103,GOT Houses,Stark,Lannister,Targaryen,Baratheon,Greyjoy,Tyrell,Martell,Bolton,Frey,Arryn
200104,FEUDALISM Terms,King,Lord,Vassal,Serf,Fief,Fealty,Manor,Knight,Peasant,Duty
200105,CAPITALISM Terms,Market,Profit,Private,Owner,Free,Trade,Supply,Demand,Money,Wealth
200106,COMMUNISM Terms,State,Owner,Public,Goods,Share,Equal,Party,Work,Gov,People
200107,PUNK ROCK Bands,Ramones,Clash,sex Pistols,Misfits,Green Day,Blink 182,Bad Brains,Dead Kenn,Black Flag,Descendents
200108,PUNK ROCK Terms,Riff,Power,Chord,DIY,Fanzine,Mosh,Pogo,Stage Dive,Slam,Thrash
200109,LOVE Terms,Joy,Care,Trust,Kindness,Affection,Warmth,Friend,Family,Embrace,Heart
200110,CIVIL RTS History,Slavery,Abolish,Rosa Parks,MLK Jr,March,Protest,Vote,Rights,Freedom,Change
200111,HBO Shows,Sopranos,Wire,GOT,Oz,Sex City,Succession,White Lotus,Euphoria,Last of Us,Curb
200112,PLAYBOY Terms,Bunny,Mansion,Hugh Hefner,Magazine,Articles,Interviews,Iconic,Legacy,Media,Culture
200113,SITCOMS Classic,I Love Lucy,Andy Griffith,Dick Van D,Cheers,Mary Tyler,All Family,MASH,Taxi,Bob Newhart,Happy Days
200114,WWI People,Wilhelm II,George V,Nick II,Woodrow,Churchill,Lawrence,Pershing,Foch,Haig,Hindenburg
200115,WWI Battles,Somme,Verdun,Marne,Ypres,Gallipoli,Tannenberg,Passchendaele,Meuse,Argonne,Jutland
200116,WWI Tech,Tanks,Planes,Submarines,Gas,Machine Gun,Trench,Radio,Zeppelin,Flamer,Mines
200117,WWI Locations,Europe,Western Front,Eastern Front,Middle East,Atlantic,Africa,Pacific,Trenches
200118,WWI Terms,Treaty,Versailles,League Nations,Armistice,Mobilize,Neutral,Gas Mask,No Man's,Over Top
200119,WWI Legacy,WWII Cause,Maps Re Draw,Empires Fall,Soviet Rise,US Power,Modern War,History,Learn
200120,H/G Life,Hunt,Gather,Nomad,Tribe,Cave,Fire,Tools,Meat,Plants,Cycle
200121,H/G Tools,Spear,Club,Rock,Stick,Knife,Ax,Arrow,Bow,Hammer,Scraper
200122,H/G Food,Meat,Berries,Roots,Nuts,Insects,Fish,Birds,Eggs,Water,Forage
200123,H/G Places,Africa,Asia,Europe,Plains,Caves,River,Forest,Savanna,Tundra,Arctic
200124,H/G Future,Neolithic,Farming,Settled,Cities,Civ,Change,Future,Learn,Past,Study
200125,KUBRICK Films,2001,Clockwork,Shining,Strangelove,Paths Glory,Full Metal,Barry Lyndon,Spartacus,Eyes Wide,Lolita
200126,KUBRICK Style,Symmetry,Music,Long Takes,Color,Detail,Obsessive,Genius,Icon,Director,Artist
200127,KUBRICK Themes,War,Power,Future,Insanity,Sex,Violence,Tech,Humanity,Satire,Fate
200128,KUBRICK Awards,Oscar,BAFTA,DGA,Genius,Icon,Legend,Director,Best Film,Best Director,Writer
200129,FADS 80s 90s,Rubik's,Pogs,Tamagotchi,Cabbage Patch,Slime,Silly Bandz,Furbies,Pokemon Cards,Beanie Babies,Leg Warmers
200130,FADS Modern,Fidgets,Squish,Pop Its,TikTok,AI Chat,Crypto,NFTs,Wordle,Barbie Pink,Pickleball
200131,FADS Social,Dance,Slang,Meme,Trend,Viral,Challenge,Internet,Media,Music,Pop
200132,ARCADES Games,Pac-Man,Donkey Kong,Galaga,Asteroids,Centipede,Frogger,Dig Dug,Qbert,Space Inv,Pinball
200133,ARCADES Places,Mall,Boardwalk,Bar,Pizza,Bowling,Theatre,Dave Buster,Chuck E,Local
200134,ARCADES Gear,Joystick,Buttons,Coin Slot,Screen,Score,High Score,Tokens,Tickets,Prizes
200135,CIA Mission,Spy,Intel,Covert,Ops,Analyze,Protect,USA,Global,Secure,Secret
200136,CIA History,OSS,Cold War,Bay Pigs,Iran Contra,9 11,Hunt Bin Laden,Spy Sat,Tech,Codes
200137,CIA Terms,Ops,Agent,Analyst,Clearance,Langley,Assets,Briefing,Mission,Secure,Codes
200138,SERIAL K Famous,Bundy,Dahmer,Gacy,Zodiac,BTK,Ramirez,Ridgway,Wuornos,Kemper,Son Sam
200139,SERIAL K Terms,Victim,Pattern,Forensics,Profile,Manhunt,Catch,Trial,Jail,News,Podcast
200140,SERIAL K Media,True Crime,Books,Shows,Movies,Docs,Podcasts,News,Fictional,Real,Cases
200141,CONST Tools,Hammer,Nails,Saw,Drill,Tape,Level,Square,Wrench,Pliers,Screws
200142,CONST Material,Wood,Steel,Concrete,Brick,Glass,Drywall,Pipes,Wires,Roof,Paint
200143,CONST Jobs,Builder,Laborer,Framing,Roofing,Plumber,Elect,Drywall,Painter,Foreman,Crane
200144,VACATION Places,Beach,City,Mountains,Cruise,Resort,Europe,Asia,USA,Road Trip,Camp
200145,VACATION Activity,Swim,Hike,Tour,Relax,Eat,Shop,Explore,Photos,Sleep,Play
200146,VACATION Travel,Plane,Car,Train,Bus,Ship,Boat,Bike,Walk,Pack,Go
200147,HOLLYWOOD Films,Blockbuster,Indie,Oscar,Red Carpet,Star,Director,Actor,Studio,Premiere,CGI
200148,HOLLYWOOD Biz,Deals,Agents,Studios,Box Office,Greenlight,Script,Casting,Sequel,Franchise
200149,HOLLYWOOD Places,LA,CA,Studios,Sign,Walk Fame,Sunset,Beverly,Hills,Malibu,Venice
200150,FLIGHT Planes,Jet,Prop,Commercial,Fighter,Bomber,Cargo,Private,Glider,Chopper,Drone
200151,FLIGHT Terms,Take off,Landing,Runway,Gate,Seat,Pilot,Crew,Cabin,Cockpit,Flight
200152,FLIGHT History,Wright Bros,Lindbergh,Amelia,War,Jets,Concorde,Space,Future,Boeing,Airbus`,$O=[xO,KO,WO,YO,zO,JO,_O,jO,ZO,XO,qO,QO].join(`
`),ep=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
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
`,tp=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
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
`,ap=`Category,Linguistic Cluster,Intensity
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
"Punk","Ramones, Clash, sex Pistols, Misfits, Stooges, Damned, Fugazi, Anarchy, Mosh Pit, Fast-Tempo",5
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
"Stadium","Sporting Event, Fans, Home Team, Concession, Turnstile",4
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
"Young Trees","Saplings, Seedlings, Sprouts, Scions",5`,dm=50;function ip(i){const n=[...i];for(let r=n.length-1;r>0;r--){const l=Math.floor(Math.random()*(r+1));[n[r],n[l]]=[n[l],n[r]]}return n}const ac=i=>{const n=i.trim().split(`
`),r=[];for(let l=1;l<n.length;l++){const c=n[l].trim();if(!c)continue;const d=[];let S="",E=!1;for(let f=0;f<c.length;f++){const C=c[f];C==='"'?E&&c[f+1]==='"'?(S+='"',f++):E=!E:C===","&&!E?(d.push(S),S=""):S+=C}if(d.push(S),d.length<3)continue;const h=d[0].trim(),T=d[1].trim(),R=d.slice(2).map(f=>f.trim()).filter(f=>f.length>0&&f.length<=dm);R.length>=4&&r.push({id:h,name:T,words:R})}return r},np=(i,n=8e4)=>{const r=i.trim().split(`
`),l=[];let c=n;for(let d=1;d<r.length;d++){const S=r[d].trim();if(!S)continue;const E=[];let h="",T=!1;for(let L=0;L<S.length;L++){const v=S[L];v==='"'?T=!T:v===","&&!T?(E.push(h),h=""):h+=v}if(E.push(h),E.length<2)continue;const R=E[0].trim().replace(/^"|"$/g,""),C=E[1].trim().replace(/^"|"$/g,"").split(",").map(L=>L.trim()).filter(L=>L.length>0&&L.length<=dm);C.length>=4&&l.push({id:(c++).toString(),name:R,words:C})}return l};let pi=[],Am=[];const ic=[{id:"fb1",name:"Colors",words:["Red","Blue","Green","Yellow"]},{id:"fb2",name:"Animals",words:["Dog","Cat","Bird","Fish"]},{id:"fb3",name:"Fruits",words:["Apple","Banana","Orange","Grape"]},{id:"fb4",name:"Planets",words:["Earth","Mars","Venus","Jupiter"]},{id:"fb5",name:"Seasons",words:["Spring","Summer","Fall","Winter"]},{id:"fb6",name:"Directions",words:["North","South","East","West"]},{id:"fb7",name:"Elements",words:["Fire","Water","Air","Earth"]}],Em=()=>{if(!(pi.length>0))try{const i=[...ac($O||""),...np(ap||""),...ac(ep||"")];if(i.length===0){pi=ic;return}const n=new Map;for(const r of i){if(!r.name)continue;const l=r.name.toUpperCase().trim();if(!(l==="CATEGORY"||l==="NAME"||l===""))if(n.has(l)){const c=n.get(l),d=Array.from(new Set([...c.words,...r.words]));c.words=d}else n.set(l,{...r})}pi=Array.from(n.values()).filter(r=>r.words.length>=4),pi.length===0&&(pi=ic),Am=ac(tp||"")}catch(i){console.error("Critical error during CSV initialization:",i),pi=ic}},Ii=()=>(Em(),pi),op=()=>(Em(),Am),rp=`
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
`;let nc=null;const Es=()=>{if(nc)return nc;const i=rp.trim().split(`
`),n=[];let r=5e4;return i.forEach(l=>{if(!l.includes(","))return;const c=l.split(",").map(E=>E.trim().toLowerCase()).filter(E=>E.length>0&&E.length<=14);if(c.length<5)return;const d=c[0],S=c.slice(1);S.length>=4&&n.push({id:(r++).toString(),name:`SYNONYMS: ${d.toUpperCase()}`,words:S})}),nc=n,n},sp=`
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
`;let oc=null;const hs=()=>{if(oc)return oc;const i=sp.trim().split(`
`),n=[];let r=9e4;const l=typeof Intl<"u"&&"Segmenter"in Intl;return i.forEach(c=>{if(!c.includes(","))return;const d=c.indexOf(","),S=c.substring(0,d).trim(),E=c.substring(d+1).trim();let h=[];if(l){const R=new Intl.Segmenter("en",{granularity:"grapheme"}).segment(E);for(const{segment:f}of R){const C=f.trim();C.length>0&&h.push(C)}}else h=Array.from(E).filter(T=>T.trim().length>0);h=Array.from(new Set(h)),h.length>=3&&n.push({id:(r++).toString(),name:S,words:h})}),oc=n,n},lp=`THEME,SUB-CATEGORY,FACT 1,FACT 2,FACT 3,FACT 4,FACT 5,FACT 6,FACT 7,FACT 8,FACT 9,FACT 10
9/11,Events,Twin Towers,Pentagon,Flight 93,Hijack,Terror,Attack,Impact,Fire,Collapse,Rescue
9/11,People,Victims,Firefighter,Police,First Resp,Bush,Bin Laden,Al Qaeda,Hero,Survivor,Families
9/11,Impact,War,Iraq,Afghani,Patriot Act,TSA,Security,Change,Fear,Unity,History
9/11,Places,Ground Zero,NYC,Pentagon,Shanks,Memorial,Museum,Freedom Tower,Rebuild,Site,Hole
9/11,Terms,Attack,Terror,Hijack,Crash,Collapse,Rubble,Dust,Smoke,Freedom,Patriot
9/11,Aftermath,Memorial,Museum,New Laws,TSA,War,Hunt Bin Laden,Legacy,History,Remember,Unity
9/11,Future 2026,25 Year Mem,New Films,Books,Docs,Study,History,Legacy,Future,Learn
80S TV,Sitcoms,Cheers,Full House,Family Ties,Roseanne,Cosby Show,Alf,Growing Pains,Facts Life,Silver Spoon,Diff Strokes
80S TV,Drama,Dallas,Dynasty,Miami Vice,Hill Street,MacGyver,Knight Rider,A-Team,Magnum PI,Matlock,Murder She
80S TV,Cartoons,He-Man,G.I. Joe,Thundercats,Smurfs,DuckTales,TMNT,Care Bears,Voltron,Transformers,Ghostbusters
80S TV,Variety/Talk,Johnny Carson,SNL,MTV,Solid Gold,Star Search,Oprah,Letterman,Price Right,Wheel,Jeopardy
80S TV,Icons,Pee-wee,Hulk Hogan,Mr T,Don Johnson,Joan Collins,MacGyver,Heather Lock,Ted Danson,Tom Selleck,John Stamos
80S TV,Tech,Cable,VCR,Remote,Betamax,Antenna,Satellite,Color TV,Console,Tape,CRT
80S TV,Themes,Neon,Music Video,Synthesizer,Fashion,Big Hair,Action,Family,Crime,Sci-Fi,Satire
90S TV,Sitcoms,Seinfeld,Friends,Fresh Prince,Frasier,Home Improve,Martin,Full House,Step by Step,Saved Bell,Boy Meets
90S TV,Drama,X-Files,Twin Peaks,ER,NYPD Blue,The West Wing,Buffy,Dawson Creek,Beverly Hills,Melrose,Oz
90S TV,Cartoons,Simpsons,Rugrats,Ren Stimpy,Doug,Hey Arnold,Beavis,South Park,Animaniacs,Batman,X-Men
90S TV,Talk/News,Jay Leno,Conan,Rickey Lake,Jerry Springer,CNN,MSNBC,Dateline,20 20,Roseanne,Phil Donahue
90S TV,Nicktoons,Doug,Rugrats,Real Monster,Rocko,Angry Beaver,CatDog,Wild Thorn,Rocket Power,SpongeBob,Zim
90S TV,Teen Shows,Party Five,My So-Called,Sabrina,Sister Sister,Moesha,Clueless,Felicity,Popular,Power Ranger,Kenan Kel
90S TV,Themes,Grunge,Irony,Preppy,Reality,Internet,Coffee,Family,Flannel,Anime,MTV
ALIENS,Types,Gray,Reptilian,Nordic,Insectoid,Energy,Humanoid,Octopus,Blob,Robot,AI
ALIENS,Films,ET,Star Wars,Alien,Predator,Avatar,Close Enc,Men in Black,Mars Att,Area 51,Contact
ALIENS,Pop Culture,Roswell,Area 51,UFO,Abduction,Crop Circle,Greys,Gov Cover Up,Sci Fi,Fantasy,The X-Files
ALIENS,Science,Exoplanets,SETI,Bio signature,Goldilocks,Life Form,Habitable,Mars,Europa,Titan,Life
ALIENS,Terms,UFO,UAP,ET,Close Enc,Probe,Ship,Craft,Beam,Orbit,Galaxy
ALIENS,Theories,Ancient,Base Moon,Gov Secret,Time Travel,Other Dim,Universe,Future,Past,Parallel,Worlds
ALIENS,Future 2026,New Films,More Shows,NASA Study,New Tech,AI Help,Search,Discovery,Contact,Science,Space
ANCIENT GREECE,People,Socrates,Plato,Aristotle,Alexander,Homer,Pericles,Leonidas,Solon,Sappho,Euclid
ANCIENT GREECE,Mythology,Zeus,Hera,Poseidon,Hades,Athena,Ares,Hermes,Artemis,Apollo,Hephaestus
ANCIENT GREECE,Buildings,Parthenon,Temple,Theatre,Stoa,Agora,Stadium,Gymnasium,House,Gate,Wall
ANCIENT GREECE,Concepts,Democracy,Philosophy,Drama,Olympics,Logic,Science,Art,History,Gym,Music
ANCIENT GREECE,Military,Hoplite,Phalanx,Shield,Spear,Sword,Helmet,Trireme,Siege,War,Peace
ANCIENT GREECE,Places,Athens,Sparta,Delphi,Olympia,Corinth,Thebes,Crete,Rhodes,Macedon,Ionia
ANCIENT GREECE,Daily Life,Chiton,Sandals,Wine,Bread,Figs,Olives,Cheese,Family,School,Market
ANCIENT ROME,Rulers,Caesar,Augustus,Nero,Trajan,Hadrian,Marcus,Caligula,Tiberius,Constantine,Titus
ANCIENT ROME,Buildings,Colosseum,Pantheon,Forum,Aqueduct,Baths,Villas,Circus,Arches,Palace,Wall
ANCIENT ROME,Daily Life,Toga,Sandals,Wine,Bread,Olives,Chariot,Gladiator,Senator,Slave,Citizen
ANCIENT ROME,Mythology,Jupiter,Mars,Venus,Apollo,Diana,Minerva,Neptune,Pluto,Mercury,Juno
ANCIENT ROME,Military,Legion,Centurion,Shield,Sword,Spear,Helmet,Fort,General,Camp,Standard
ANCIENT ROME,Cities/Places,Rome,Pompeii,Ostia,Carthage,London,Paris,Alexandria,Athens,Naples,Sicily
ANCIENT ROME,Terms,Empire,Republic,Senate,Veto,Latin,Forum,Pax,Plebeian,Patrician,Tribal
ANIMALS,Mammals,Elephant,Lion,Tiger,Bear,Wolf,Whale,Dolphin,Giraffe,Zebra,Monkey
ANIMALS,Birds,Eagle,Owl,Penguin,Parrot,Hawk,Swan,Peacock,Flamingo,Robin,Falcon
ANIMALS,Reptiles,Snake,Lizard,Turtle,Alligator,Crocodile,Iguana,Python,Cobra,Gecko,Komodo
ANIMALS,Ocean,Shark,Octopus,Ray,陸,Seal,Walrus,Coral,Crab,Jellyfish,Sea Horse
ANIMALS,Farm,Cow,Horse,Pig,Sheep,Chicken,Goat,Donkey,Duck,Turkey,Goose
ANIMALS,Wild,Leopard,Jaguar,Hyena,Rhino,Hippo,Bison,Moose,Deer,Coyote,Fox
ANIMALS,Terms,Species,Habitat,Wild life,Diet,Mammal,Predator,Prey,Migrate,Life Cycle,Nature
ANIMATION,Studios,Disney,Pixar,Ghibli,Dreamworks,Warner Bros,Aardman,LAIKA,Sony,Blue Sky,Nickelodeon
ANIMATION,Techniques,CGI,Stop Motion,Hand Drawn,Cel,Claymation,Digital,Puppets,Motion Cap,2D,3D
ANIMATION,History,Silents,Talkies,Color,Golden Age,Anime,Digital Age,Future,Tech,Art,Global
ANIMATION,Movies,Lion King,Toy Story,Spirited,Shrek,Frozen,Zootopia,Minions,Finding Nemo,Up,Coco
ANIMATION,TV Shows,Simpsons,South Park,Family Guy,Bluey,Paw Patrol,Avatar,Teen Titans,SpongeBob,Rick Morty,Futurama
ANIMATION,Terms,Frames,Voice,Sound,Script,Director,Producer,Artist,Model,Rigging,Render
ANIMATION,Future 2026,AI Art,VR,Metaverse,New Films,More Shows,Global Reach,Streaming,Tech,Art
ANIME,Genres,Shonen,Shojo,Seinen,Josei,Isekai,Mecha,Horror,Slice Life,Comedy,Sports
ANIME,Famous Shows,Dragon Ball,One Piece,Naruto,Bleach,Attack Titan,My Hero,Demon Slayer,Spy Family,Cowboy Bebop,Evangelion
ANIME,Movies,Spirited,Your Name,Akira,Ghost Shell,Ponyo,Mononoke,Totoro,Paprika,Suzume,Perfect Blue
ANIME,Terms,Manga,Otaku,Kawaii,Subs,Dubs,Filler,Arc,Season,Waifu,Senpai
ANIME,Studios,Ghibli,MAPPA,Ufotable,Madhouse,Bones,Toei,Pierrot,Trigger,Sunrise,Wit
ANIME,Tropes,Power Up,Tournament,School Life,Magic Girl,Robot suit,Flashback,Antagonist,Training,Food,Friendship
ANIME,2026 Trends,AI Art,Streaming,Live Action,Global Subs,Web Movies,CGI Mix,Remakes,Simulcast,Cons,Merch
ARCHEOLOGY,Tools,Brush,Pick,Shovel,Sieve,Trowel,Camera,Drone,GPS,Map,Grid,Compass,
ARCHEOLOGY,Finds,Pottery,Coins,Bones,Tools,Jewels,Statues,Tombs,Ruins,Artifact,Mask
ARCHEOLOGY,Sites,Giza,Pompeii,Petra,Knossos,Troy,Stonehenge,Tikal,Palmyra,Luxor,Ur
ARCHEOLOGY,Methods,Digging,Survey,Lab Work,Dating,Mapping,Carbon,Sorting,Cleaning,Writing
ARCHEOLOGY,Periods,Stone Age,Bronze Age,Iron Age,Mayan,Inca,Aztec,Greek,Roman,Dynasty
ARCHEOLOGY,Science,DNA,Isotope,Radiocarbon,CT Scan,Lidar,Botany,Geology,History,Curation
ARCHEOLOGY,Risks,Looting,Erosion,War,Weather,Floods,Vandalism,Mold,Time,Neglect,
ASTRONOMY,Instruments,Telescope,Lens,Mirror,Camera,Radio,Sensor,Spectro,Filter,Tripod,Mount
ASTRONOMY,Events,Eclipse,Meteor,Comet,Nova,Transit,Solstice,Equinox,Flare,Aurora,Impact
ASTRONOMY,Deep Space,Nebula,Galaxy,Black Hole,Quasar,Pulsar,Star,Cluster,Void,Dark Matter
ASTRONOMY,Stars,Sun,Sirius,Vega,Betelgeuse,Polaris,Rigel,Dwarf,Giant,Neutron,Binary
ASTRONOMY,Observatory,Keck,VLT,Palomar,Yerkes,Griffith,Mauna Kea,Green Bank,ALMA,Hubble,Webb
ASTRONOMY,Terms,Light Year,Parsec,Magnitude,Redshift,Orbit,Gravity,Mass,Zenith,Nadir,Horizon
ASTRONOMY,Future 2026,Moon Base,Mars Probe,New Scope,Starship,Space Hotel,Mining,Tourism,Launch
BAKING,Breads,Sourdough,Rye,Wheat,White,Focaccia,Brioche,Bagel,Baguette,Naan,Pita
BAKING,Science,Yeast,Gluten,Rise,Proof,Ferment,Hydrate,Starch,Protein,Sugar,Heat
BAKING,Flours,All Purpose,Bread,Cake,Pastry,Whole Wheat,Almond,Coconut,Oat,Rice,Spelt
BAKING,Cakes,Sponge,Chiffon,Angel,Pound,Carrot,Red Velvet,Bundt,Sheet,Lava,Layer
BAKING,Decorating,Icing,Frosting,Fondant,Glaze,Sprinkles,Ganache,Piping,Flower,Pearl,Gold
BAKING,Cookies,Chip,Sugar,Oatmeal,Macaron,Ginger,Shortbread,Biscotti,Wafer,Fortune,Snaps
BAKING,Ovens,Deck,Convection,Rack,Tunnel,Wood Fire,Steam,Dutch Oven,Home,Pizza,Stone
BASKETBALL,NBA Teams,Lakers,Celtics,Warriors,Heat,Bulls,Knicks,76ers,Bucks,Suns,Nuggets
BASKETBALL,Legends,Jordan,LeBron,Kobe,Magic,Bird,Shaq,Curry,Kareem,Wilt,Duncan
BASKETBALL,Terms,Dunk,Assist,Rebound,Block,Steal,Dribble,Shoot,Foul,Travel,3 Point,Fast Break,
BASKETBALL,Positions,Point Guard,Shooting Guard,Small Forward,Power Forward,Center,Sixth Man,Rookie,Captain,Coach,Ref
BASKETBALL,Courts,Hardwood,Key,Backboard,Hoop,Net,Free Throw,Sideline,Baseline,Half Court,3 Line
BASKETBALL,History,Naismith,Springfield,1891,First Game,Baskets,Peach Baskets,First Rules,NBA Start,College Hoops,Olympics
BASKETBALL,Events,Finals,All Star,Olympics,Draft,Trade,Summer League,Preseason,March Madness,Slam Dunk,3 Point
BIRDS,Prey,Eagle,Hawk,Falcon,Owl,Vulture,Kestrel,Osprey,Harrier,Buzzard,Kite
BIRDS,Water,Duck,Swan,Goose,Heron,Egret,Pelican,Gull,Loon,Puffin,Crane
BIRDS,Small,Robin,Jay,Sparrow,Wren,Finch,Oriole,Warbler,Swift,Thrush,Lark
BIRDS,Anatomy,Beak,Wing,Feather,Talon,Claw,Tail,Breast,Egg,Nest,Crest
BIRDS,Behavior,Fly,Sing,Nest,Migrate,Hunt,Dive,Dance,Mate,Hatch,Peck
BIRDS,Rare/Famous,Dodo,Moa,Phoenix,Condor,Albatross,Penguin,Ostrich,Emu,Macaw,Toucan
BIRDS,Birding,Binocular,Field Guide,Life List,Scope,Camera,Hike,Forest,Marsh,Feeder,Calls
BOARD GAMES,Types,Strategy,Party,Family,Card,Euro,Classic,Drafting,Dice,Tile,Roleplay
BOARD GAMES,Classic,Chess,Checkers,Backgammon,Go,Monopoly,Clue,Life,Sorry,Risk,Stratego
BOARD GAMES,Modern Hits,Catan,Ticket,Pandemic,Codenames,Wingspan,Gloomhaven,Azul,Root,Scythe,Dune
BOARD GAMES,Components,Board,Dice,Cards,Meeples,Tokens,Timer,Tiles,Spinner,Money,Box
BOARD GAMES,Terms,Turn,Round,Draft,Hand,Deck,Discard,Victory,Points,Player,Rules
BOARD GAMES,Events,Gen Con,Essen Spiel,Pax Unplug,Game Night,Tourney,Kickstart,Expo,Social
BOARD GAMES,Themes,Fantasy,Space,History,Nature,Trade,Mystery,War,Zombies,Spies,Train
BOOKS,Classic Titles,Moby Dick,1984,Pride Prej,Ulysses,Hamlet,Great Gatsby,Catcher,Huck Finn,Grapes Wrath,Fahrenheit
BOOKS,Authors,Hemingway,Orwell,Austen,Joyce,Dickens,Steinbeck,Twain,Shakespeare,Faulkner,Fitzgerald
BOOKS,Genres,Fiction,Sci Fi,Horror,Poetry,Nonfiction,Memoir,History,Fantasy,Mystery,Novel
BOOKS,History,Gutenberg,Printing,Paper,Ink,Library,Scrolls,Bookstore,Ebook,Read,Write
BOOKS,Fantasy,Hobbit,Rings,Narnia,Dune,Wizard Oz,Dragon,Magic,Quest,Hero,Evil
BOOKS,Terms,Chapter,Plot,Setting,Character,Climax,Theme,Genre,Prose,Verse,Edition
BOOKS,Adaptations,Film,TV Show,Play,Musical,Audio,Comic,Game,Remake,Classic,Modern
CAMPING,Essentials,Tent,Bag,Stove,Pack,Light,Knife,First Aid,Water,Map,Compass
CAMPING,Activities,Hiking,Fishing,Boating,Cooking,Swimming,Stargazing,Birding,Stories,Photos,Climbing
CAMPING,Nature Finds,Trees,Rocks,Rivers,Lakes,Caves,Wildlife,Flowers,Moss,Peaks,Trails
CAMPING,Food,S-mores,Hot Dogs,Eggs,Coffee,Beans,Stew,Jerky,Trail Mix,Fish,Potatoes
CAMPING,Shelter,Tent,RV,Cabin,Hammock,Tarp,Van,Bunker,Lean-to,Trailer,Yurt
CAMPING,Safety,Fire,Weather,Bears,Insects,First Aid,Light,Signal,Whistle,Heat,Boots
CAMPING,Terms,Campsite,Backpack,Wilderness,Outdoors,Trek,Summit,Base,Route,Gear,Permit
CARTOON CHRTRS,Classic,Bugs Bunny,Mickey Mouse,Daffy Duck,Scooby Doo,Popeye,Woody,Casper,Betty Boop,Fred F,George Jetson
CARTOON CHRTRS,Modern,SpongeBob,Homer,Stewie,Goku,Ash,Bluey,Chase,Rick,Morty,Eric Cartman
CARTOON CHRTRS,TV Icons,He-Man,G.I. Joe,TMNT,Smurfs,DuckTales,Voltron,Transformers,X-Men,Batman,Thundercats
CARTOON CHRTRS,Villains,Skeletor,Cobra Com,Shredder,Lex Luthor,Joker,Maleficent,Scar,Ursula,Jafar,Plankton
CARTOON CHRTRS,Sidekicks,Robin,Patric,Goofy,Pluto,Snagglepuss,Barney Rubble,Cheshire,Timon,Pumbaa,Meeko
CARTOON CHRTRS,Franchises,DC,Marvel,Disney,Looney Tunes,Hanna Barbera,Nick,Cartoon Net,Anime,Pixar,Sega
CARTOON CHRTRS,History,Silents,Black White,Color,TV Era,CGI,Internet,Anime,Global,Iconic,Legacy
CARTOONS,Networks,Disney,Cartoon Net,Nick,Pixar,Hanna Barbera,Looney Tunes,Warner Bros,Adult Swim,Boomerang,MTV
CARTOONS,Characters,Mickey,Bugs,Homer,SpongeBob,Scooby Doo,Fred,Daffy,Simba,Goku,Ash Ketchum
CARTOONS,Shows,Simpsons,Family Guy,South Park,Scooby Doo,Futurama,Bob's Burgers,Rick Morty,Bluey,Paw Patrol,Avatar
CARTOONS,Genres,Comedy,Action,Kids,Adult,Drama,Anime,Stop Motion,Classic,Modern,Shorts
CARTOONS,Tools,Pen Ink,Paper,Camera,Computers,Cels,Frames,Sound,Voice,Music,Art
CARTOONS,Films,Lion King,Toy Story,Shrek,Frozen,Spirited,Zootopia,Minions,Finding Nemo,Up,Coco
CARTOONS,History,Cels,Ink Paint,First Film,Black White,Color,CGI,Hand Drawn,Digital,Golden Age,Modern Era
CASTLES,Rooms,Great Hall,Keep,Dungeon,Kitchen,Chamber,Chapel,Solar,Garderobe,Cellar,Armory
CASTLES,Defense,Moat,Drawbridge,Turret,Gatehouse,Wall,Arrow slit,Portcullis,Bailey,Crenel,Moat
CASTLES,Staff,King,Queen,Knight,Lord,Lady,Cook,Squire,Guard,Blacksmith,Stable Boy
CASTLES,Famous UK,Windsor,Tower London,Warwick,Edinburgh,Stirling,Leeds,Bodiam,Dover,Conwy,Caernarfon
CASTLES,Famous Euro,Neuschwan,Chillon,Bran,Chenonceau,Hohenwerfen,Vianden,Alcazar,Eltz,Spis,Peles
CASTLES,Knight Gear,Armor,Shield,Sword,Mace,Lance,Helmet,Gauntlet,Chainmail,Cloak,Spurs
CASTLES,Activities,Feast,Joust,Hunt,Banquets,Music,Dance,Training,Defense,Archery,Falconry
CATS,Domestic,Tabby,Calico,Tuxedo,Ginger,Black,White,Grey,Tortie,Pointed,Siamese
CATS,Breeds,Persian,Maine Coon,Bengal,Sphynx,Ragdoll,Burmese,Russian,Abyssinian,Munchkin,Korat
CATS,Wild Cousins,Lion,Tiger,Leopard,Jaguar,Cougar,Lynx,Bobcat,Cheetah,Serval,Caracal
CATS,Anatomy,Whiskers,Tail,Paws,Claws,Ears,Teeth,Fur,Eyes,Tongue,Nose
CATS,Behavior,Purr,Meow,Hiss,Prowl,Sleep,Hunt,Jump,Knead,Nap,Groom
CATS,Care,Food,Water,Litter,Toys,Vet,Brush,Pet,Play,Scratch,Bed
CATS,Sounds,Meow,Purr,Hiss,Growl,Chirp,Yowl,Trill,Snarl,Spit,Silence
CHINA,Geography,Yellow River,Yangtze,Gobi Desert,Himalayas,Silk Road,South Sea,Rice Fields,Karst Peaks,Great Wall,Shanghai
CHINA,Culture,Lanterns,Zodiac,Dragon Dance,Kung Fu,Paper Cut,Tea Art,Red Color,Lucky Money,Feng Shui,Opera
CHINA,Cities,Beijing,Shanghai,Shenzhen,Guangzhou,Chengdu,Wuhan,Xi-an,Nanjing,Hangzhou,Chongqing
CHINA,History,Dynasty,Great Wall,Silk Road,First Emperor,Ming Period,Forbidden,Confucius,Red Guard,Modern Rise,2026 Future
CHINA,Animals,Giant Panda,Red Panda,Snow Leopard,Tiger,Crane bird,Sturgeon,Monkey,Tibet Antelope,Dolphin,Pheasant
CHINA,Food,Dim Sum,Peking Duck,Dumplings,Hot Pot,Chow Mein,Spring Roll,Tofu,Mapo,Soy Sauce,Bao
CHINA,Tech,Alibaba,Tencent,TikTok,Huawei,EV Cars,5G Network,High Rail,Solar Power,Space Lab,AI Vision
CIVIL WAR,People,Lincoln,Grant,Lee,Sherman,Jackson,Davis,Douglas,Barton,Tubman,Booth
CIVIL WAR,Battles,Gettysburg,Antietam,Bull Run,Shiloh,Vicksburg,Sumter,Frederic,Cold Harbor,Wilderness,Atlanta
CIVIL WAR,States,Union,Confed,Virginia,PA,NY,Georgia,SC,NC,Kentucky,Maryland
CIVIL WAR,Tech,Musket,Cannon,Ironclad,Telegraph,Railroad,Balloons,Minie Ball,Rifle,Cavalry,Trench
CIVIL WAR,Terms,Draft,Rebel,Yankee,Blue,Gray,Dixie,Front,Siege,Cavalry,Infantry
CIVIL WAR,Causes,Slavery,States Rights,Tariffs,Election,Expansion,Sectional,Industry,Cotton,Lincoln,Union
CIVIL WAR,Legacy,Recon,13th Amend,14th Amend,15th Amend,Jim Crow,Monuments,History,Unity,Veterans,Graves
COMIC BOOKS,DC Heroes,Batman,Superman,Wonder Woman,Flash,GL,Cyborg,Aquaman,Robin,Nightwing,Shazam
COMIC BOOKS,DC Villains,Joker,Lex,Cheetah,Reverse,Sinestro,Zod,Bane,Penguin,Riddler,Brainiac
COMIC BOOKS,Terms,Panels,Bubbles,Inks,Script,Issues,Volumes,Variant,Cover,Splash,Crossover
COMIC BOOKS,Indie Gems,Saga,Spawn,Hellboy,Invincible,Walking Dead,Sandman,Preacher,Boys,Bone,Mask
COMIC BOOKS,Creators,Stan Lee,Jack Kirby,Steve Ditko,Bob Kane,Bill Finger,Alan Moore,Frank Miller,Gaiman,Lee,Sim
COMIC BOOKS,Powers,Strength,Flight,Speed,Invis,Healing,Tech,Telepathy,Laser,Ice,Fire
COMIC BOOKS,Events,Conventions,SDCC,NYCC,Free Comic,Cosplay,Panel,Signings,Merch,Cosplay,Trade
COOKING,Kitchen Tools,Knife,Pan,Pot,Whisk,Spatula,Grater,Peeler,Sieve,Timer,Scale
COOKING,Methods,Bake,Broil,Fry,Steam,Sauté,Poach,Grill,Roast,Boil,Braise
COOKING,Flavoring,Salt,Pepper,Garlic,Onion,Sugar,Vinegar,Oil,Honey,Ginger,Lemon
COOKING,Basic Skills,Chop,Dice,Mince,Fold,Whisk,Knead,Season,Simmer,Garnish,Taste
COOKING,Grains/Sides,Rice,Pasta,Potato,Bread,Quinoa,Couscous,Corn,Oats,Barley,Polenta
COOKING,Global Styles,Curry,Stir Fry,Taco,Pasta,Sushi,Kebab,Burger,Soup,Salad,Pastry
COOKING,Appliances,Oven,Stove,Mixer,Toaster,Blender,Air Fryer,Crock Pot,Fridge,Griddle,Microwave
CRIMINALS,Famous,Al Capone,Jesse James,Bonnie Clyde,Dillinger,Billy Kid,Jack Ripper,Manson,Gotti,Blackbeard,Kidd
CRIMINALS,Crimes,Theft,Fraud,Murder,Arson,Robbery,Assault,Smuggle,Bootleg,Heist,Kidnap,Bribery
CRIMINALS,Punishment,Jail,Prison,Fine,Parole,Probation,Death Row,Electric,Lethal,Rehab,Community
CRIMINALS,Law,Police,FBI,CIA,Lawyer,Judge,Jury,Court,Crime Scene,Evidence,Forensics,SWAT,
CRIMINALS,Places,Alcatraz,Sing Sing,Guantanamo,Jail,Cell Block,Lock Up,The Pen,Parade,Police Line,Crime Scene
CRIMINALS,Terms,Mob,Gang,Hustle,Swindle,Rap Sheet,Mug Shot,Get Away,Perp,Felony,Misdemeanor,Bail
CRIMINALS,Fiction,Godfather,Sopranos,Scarface,Goodfellas,Heat,Ocean's 11,Bonnie Clyde,Jesse James,The Town,Public Enemy
DENTISTRY,Tools,Drill,Mirror,Explorer,Forceps,Scaler,Syringe,Laser,X-ray,Brush,Floss
DENTISTRY,Teeth,Incisor,Canine,Molar,Wisdom,Bicuspid,Enamel,Dentin,Pulp,Root,Gum
DENTISTRY,Cleaning,Paste,Floss,Rinse,Polish,Scale,Fluoride,Sealant,Scrub,Wash,Whiten
DENTISTRY,Jobs,Dentist,Surgeon,Hygienist,Assistant,Admin,Lab Tech,Clerk,Billing,Manager
DENTISTRY,Procedures,Filling,Crown,Bridge,Implant,Braces,Extraction,Veneer,Canal,Bonding
DENTISTRY,Care,Daily,Brushing,Flossing,Diet,Check up,Healthy,White,Strong,Pain,Repair
DENTISTRY,Terms,Cavity,Plaque,Tartar,Decay,Ortho,Endo,Perio,Oral,Health,Smile
DESSERTS,Cakes,Sheet,Bundt,Layer,Cupcake,Sponge,Pound,Velvet,Choco,Angel,Fruit
DESSERTS,Pastries,Danish,Donut,Croissant,Tart,Cannoli,Eclair,Scone,Turnover,Strudel,Brioche
DESSERTS,Cookies,Sugar,Choco Chip,Oatmeal,Peanut,Snaps,Macaron,Wafer,Shortbread,Shorty,Fortune
DESSERTS,Pies,Apple,Cherry,Berry,Peach,Pecan,Pumpkin,Cream,Key Lime,Meringue,Crust
DESSERTS,Cold,Ice Cream,Sorbet,Gelato,Frozen,Mochi,Popsicle,Sundae,Split,Float,Malt
DESSERTS,Candy,Fudge,Toffee,Taffy,Brittle,Caramel,Gummy,Sour,Hard,Bar,Mint
DESSERTS,Styles,Bake,Fry,Freeze,Layer,Fill,Glaze,Frost,Dip,Whip,Cook
DISNEY,Princesses,Snow White,Cinderella,Aurora,Ariel,Belle,Jasmine,Pocahontas,Mulan,Tiana,Rapunzel
DISNEY,Characters,Mickey,Minnie,Donald,Goofy,Pluto,Daisy,Stitch,Simba,Olaf,Bambi
DISNEY,Parks,Disneyland,World,Tokyo,Paris,Hong Kong,Shanghai,Epcot,Magic Kingdom,Animal,Studios
DISNEY,Eras,Golden Age,Silver Age,Renaissance,Dark Age,Revival,Modern,Live Action,Shorts,Silents,TV Animation
DISNEY,Villains,Maleficent,Ursula,Jafar,Scar,Gaston,Hades,Cruella,Hook,Queen,Frollo
DISNEY,Songs,Let It Go,Circle Life,Whole World,Wish on Star,Be Our Guest,Under Sea,Colors Wind,Part World,Friend Me,Try Every
DISNEY,Acquisitions,Pixar,Marvel,Star Wars,Fox,Hulu,ESPN,National Geo,ABC,Muppets,Avatar
DOGS,Breeds,Labrador,Poodle,Bulldog,Dachshund,Boxer,Beagle,Husky,Corgi,Pug,Pomeranian
DOGS,Sounds,Bark,Woof,Whine,Growl,Howl,Yip,Sniff,Puff,Gulp,Sneeze
DOGS,Commands,Sit,Stay,Heel,Down,Come,Fetch,Roll Over,Beg,Shake
DOGS,Care,Walk,Feed,Bathe,Groom,Train,Vet check,Play,Sleep,Hug,Pet
DOGS,Toys,Ball,Frisbee,Rope,Chew,Plush,Squeaky,Stick,Bone,Puzzle,Tug
DOGS,Work,Guide Dog,Police Dog,Service,Rescue,Herding,Hunting,Guard,Military,Sniffer,Farm Dog
DOGS,Health,Shots,Fleas,Ticks,Vet Visit,Check Up,Food,Water,Sleep,Exercise,Grooming,Care
ENERGY,Sources,Solar,Wind,Hydro,Nuclear,Coal,Gas,Oil,Biofuel,Steam,Heat
ENERGY,Renewable,Panel,Turbine,Dam,Wave,Tidal,Battery,Grid,Storage,Charge,Plant
ENERGY,Terms,Watt,Volt,Amp,Joule,Current,Circuit,Power,Output,Usage,Bill
ENERGY,Tech 2026,Fusion,Solid State,New Solar,Smart Grid,EV Charge,Microgrid,Hydrogen,Carbon
ENERGY,Science,Kinetic,Potential,Thermal,Chemical,Nuclear,Light,Sound,Atomic,Mass
ENERGY,Daily,Light,Heat,Cool,Cook,Drive,Charge,Phone,Home,Office,City
ENERGY,Impact,Green,Clean,Carbon,Waste,Safety,Cost,Reliable,Global,Supply,Demand
FASHION,Styles,Casual,Formal,Street,Gothic,Preppy,Boho,Vintage,Retro,Sporty,Chic
FASHION,Items,Shirt,Pants,Dress,Skirt,Jacket,Coat,Shoes,Hat,Scarf,Belt
FASHION,Materials,Cotton,Silk,Wool,Linen,Denim,Leather,Suede,Nylon,Rayon,Lace
FASHION,Events,Met Gala,Fashion Week,Paris,Milan,NYC,London,Runway,Vogue,Awards,Show
FASHION,Terms,Trend,Brand,Designer,Sewing,Pattern,Drape,Stitch,Hem,Fit,Look
FASHION,Icons,Chanel,Gucci,Prada,Dior,LV,Hermes,Ralph,Nike,Adidas,Vera Wang
FASHION,Accessories,Watch,Ring,Bag,Wallet,Glasses,Jewelry,Heels,Boots,Gloves,Tie
FIREFIGHERS,Tools,Hose,Ladder,Ax,Hydrant,Truck,Tank,Radio,Drone,Siren,Pump
FIREFIGHERS,Gear,Helmet,Coat,Pants,Boots,Gloves,Mask,SCBA,Hood,Jacket,Badge
FIREFIGHERS,Jobs,Chief,Captain,Driver,Chief,Admin,Marshal,Arson,EMT,Rescue,Wildland
FIREFIGHERS,Station,Bay,Garage,Kitchen,Gym,Office,Dorm,Alert,Pole,Engine,Tower
FIREFIGHERS,Training,Drill,Rescue,Safety,Water,Hose,Ladder,First Aid,Study,Fitness,Team
FIREFIGHERS,Types,City,County,State,Forest,Airport,Industrial,Navy,Volunteer,Hotshot
FIREFIGHERS,Terms,Ignite,Flame,Flash,Arson,Control,Smother,Venting,Rescue,Safe,Hero
FOOTBALL,Teams NFL,Chiefs,49ers,Cowboys,Packers,Patriots,Steelers,Saints,Eagles,Bills,Dolphins
FOOTBALL,Legends,Brady,Montana,Manning,Rice,Sanders,Unitas,Payton,Blanda,Young,Favre
FOOTBALL,Terms,Touchdown,Field Goal,Sack,Fumble,Intercept,Tackle,Blitz,Offside,Penalty,Down
FOOTBALL,Positions,QB,RB,WR,TE,LT,RT,LG,RG,C,DT
FOOTBALL,Events,Super Bowl,Draft,Combine,Playoffs,Season,Preseason,Hall Fame,Pro Bowl,College,High School
FOOTBALL,College,NCAA,SEC,Big Ten,ACC,Pac 12,Rose Bowl,Nat Title,Draft,Heisman,Tradition
FOOTBALL,Future 2026,More Games,Global,AI Use,New Rules,Safety,Media,Streaming,New Tech,More Money
FOUNDING FATHERS,People,Wash,Adams,Jefferson,Franklin,Madison,Hamilton,Paine,Henry,Hancock,Monroe
FOUNDING FATHERS,Documents,Consti,Bill Rights,Dec of Ind,Articles Confed,Fed Papers,Common Sense,Treaties,Statutes,Laws,Acts
FOUNDING FATHERS,History,Revolution,War,Treaty Paris,Yorktown,Boston Tea,Lexington,Concord,Philly,1776,1787
FOUNDING FATHERS,Roles,President,VP,Congress,SCTOUS,Diplomat,General,Writer,Farmer,Slave Owner,Lawyer
FOUNDING FATHERS,Places,Philly,Boston,DC,Virginia,Mount Vernon,Monticello,Faneuil,Indep Hall,Valley Forge,NYC
FOUNDING FATHERS,Terms,Freedom,Liberty,Treason,Taxes,Colony,King George,Britain,Republic,Democracy,Sovereign
FOUNDING FATHERS,Legacy,Consti,Bill Rights,SCOTUS,US Mint,Fed Reserve,White House,Capitol,Two Terms,Farewell,Electoral
GARDENING,Flower Types,Rose,Tulip,Daisy,Lily,Peony,Orchid,Sun,Iris,Poppy,Violet
GARDENING,Tools,Shovel,Rake,Hoe,Trowel,Pruner,Shears,Hose,Gloves,Mower,Wheelbarrow
GARDENING,Vegetables,Tomato,Pepper,Carrot,Corn,Onion,Lettuce,Peas,Beans,Squash,Potato
GARDENING,Techniques,Pruning,Mulching,Compost,Watering,Weeding,Tilling,Harvest,Seeding,Graft,Thinning
GARDENING,Pests,Aphids,Slugs,Snails,Beetles,Mites,Locusts,Ants,Grubs,Worms,Caterpillar
GARDENING,Herbs,Basil,Mint,Thyme,Sage,Dill,Parsley,Chives,Cilantro,Rosemary,Oregano
GARDENING,Soil/Health,Dirt,Fertilizer,Nitrogen,Phosphate,Potash,pH Level,Aeration,Organic,Drainage,Loam
GOLF,Clubs,Driver,Putter,Wedge,Iron,Wood,Hybrid,Sand,Lob,Graphite,Steel
GOLF,Course,Tee,Fairway,Green,Bunker,Rough,Hazard,Water,Hole,Flag,Cart
GOLF,Scoring,Par,Birdie,Eagle,Bogey,Double,Albatross,Ace,Handicap,Stroke,Match
GOLF,Tour,PGA,LIV,Masters,Open,US Open,Ryder Cup,LPGA,Senior,Euro,Tourney
GOLF,Legends,Woods,Nicklaus,Palmer,Hogan,Jones,Snead,Sorenstam,Mickelson,Els,McIlroy
GOLF,Gear,Balls,Tees,Glove,Bag,Shoes,Range,Laser,Watch,Cart,Towels
GOLF,Terms,Drive,Putt,Swing,Slice,Hook,Fade,Draw,Divot,Caddie,Backspin
GOVERNMENT,Branches,Legislative,Executive,Judicial,House,Senate,President,Court,SCOTUS,Local Gov,State Gov
GOVERNMENT,Parties,Democrat,Republican,Indie,Green,Libertarian,Socialist,Communist,Third Party,Caucus,Vote
GOVERNMENT,Capitol,White House,Capitol Bldg,SCOTUS Bldg,The Mall,Monuments,DC City,Potomac River,Security,Police,Laws
GOVERNMENT,Power,Checks,Balances,Veto,Override,Impeach,Confirm,Approve,Reject,Elect,Serve
GOVERNMENT,Documents,Consti,Bill Rights,Dec of Ind,Statutes,Laws,Acts,Codes,Treaties,Exec Order,Pardon
GOVERNMENT,Money,Taxes,IRS,Fed Reserve,Budget,Deficit,Surplus,Grants,Spending,Bills,Coin
GOVERNMENT,Terms,Primary,Caucus,Filibuster,Midterms,Inaugural,Census,Redistrict,Bill,Law,Voter ID
HELLO KITTY,Sanrio Friends,My Melody,Kuromi,Pompompurin,Cinnamoroll,Keroppi,Badtz-Maru,Chococat,Little Twins,Pochacco,Tuxedo Sam
HELLO KITTY,Facts,London,Third Grade,Apples,Twin Sister,Mimmy,No Mouth,Not a Cat,Girl,White Coat,Red Bow
HELLO KITTY,Products,Stationery,Plush,Bags,Jewelry,Clothing,Cafes,Toasters,Planes,Stickers,Wallets
HELLO KITTY,Family,George,Mary,Mimmy,Anthony,Margaret,Grandpa,Grandma,Pets,Charmmy,Sugar
HELLO KITTY,Media,Animation,Movies,Games,YouTube,Social,Comics,Albums,TV Shows,Collabs,Webtoons
HELLO KITTY,Design,Red,White,Blue,Yellow,Outline,Classic,Pop Art,Pastel,Kawaii,Cute
HELLO KITTY,Future 2026,New Film,Metaverse,AI Friend,Global Tour,Tech Wear,New Cafe,Eco Merch,Web Series,Live Show,Art Fest
HERBS,Kitchen,Basil,Mint,Thyme,Sage,Dill,Parsley,Chives,Cilantro,Rosemary,Oregano
HERBS,Medical,Chamomile,Lavender,Ginseng,Echinacea,Ginger,Turmeric,St Johns,Valerian,Aloe,Mint
HERBS,Use,Cook,Tea,Oil,Spice,Tincture,Salve,Aroma,Garnish,Dry,Fresh
HERBS,Growth,Garden,Pot,Soil,Sun,Water,Seeds,Harvest,Dry,Fresh,Grow
HERBS,History,Ancient Use,Spice Trade,Medicine,Folk Lore,Magic,Healers,Monks,Garden,Global
HERBS,Terms,Annual,Perennial,Biennial,Hardy,Tender,Aroma,Flavor,Bitter,Sweet,Pungent
HERBS,Future 2026,New Meds,Pharma,Home Garden,Vertical Farm,Hydroponic,AI Grow,Spice Trade,Global
HOCKEY,Positions,Center,Wing,Defense,Goalie,Captain,Rookie,Referee,Linesman,Coach,Backup
HOCKEY,Gear,Skates,Stick,Puck,Helmet,Gloves,Pads,Jersey,Mask,Tape,Whistle
HOCKEY,Rink,Ice,Goal,Net,Crease,Blue Line,Red Line,Boards,Glass,Bentch,Box
HOCKEY,NHL Teams,Kings,Bruins,Blackhawks,Rangers,Wings,Leafs,Canadiens,Knights,Oilers,Kraken
HOCKEY,Legends,Gretzky,Lemieux,Howe,Orr,Jagr,Roy,Crosby,Ovechkin,Hull,Esposito
HOCKEY,Terms,Goal,Assist,Hat Trick,Power Play,Penalty,Offside,Icing,Slapshot,Save,Shutout
HOCKEY,Events,Stanley Cup,All Star,Olympics,Worlds,Draft,Winter,Outdoor,Series,Finals
ICE CREAM,Flavor Basics,Vanilla,Chocolate,Berry,Mint,Coffee,Caramel,Swirl,Cherry,Lemon,Peach
ICE CREAM,Popular Mixes,Cookie Dough,Rocky Road,Neapolitan,Pecan,Heath,Fudge,Toffee,Marshmallow,Mango,Coconut
ICE CREAM,Toppings,Sprinkles,Nuts,Whipped,Syrup,Cherries,Candy,Gummy,Cookie,Brownie,Honey
ICE CREAM,Serving Styles,Sugar Cone,Waffle Cone,Cake Cone,Bowl,Sundae,Split,Shake,Float,Malt,Sandwich
ICE CREAM,Global Treats,Gelato,Sorbet,Mochi,Sherbet,Kulfi,Dondurma,Soft Serve,Rolled,Granita,Shaved
ICE CREAM,Brands,Ben Jerry,Haagen-Dazs,Baskin,Dairy Queen,Breyers,Blue Bell,Halo Top,Magnum,Talenti,Dreyer
ICE CREAM,Equipment,Churn,Scoop,Freezer,Bowl,Truck,Spade,Mixer,Pint,Quart,Cooler
INSECTS,Types,Ants,Bees,Flies,Beetles,Moths,Butterflies,Mosquitoes,Crickets,Spiders,Roaches,Wasps
INSECTS,Body,Head,Thorax,Abdomen,Legs,Wings,Antennae,Eyes,Stinger,Pincers,Shell,Fangs
INSECTS,Habitats,Garden,Forest,Swamp,Desert,Tundra,Home,Farm,Hive,Nest,Ground,Under Log
INSECTS,Food,Nectar,Plants,Blood,Meat,Decay,Honey,Sap,Other Bugs,Wood,Fruit,Sugar
INSECTS,Life Cycle,Egg,Larva,Pupa,Adult,Stage,Birth,Growth,Mating,Death,Cycle
INSECTS,Behavior,Swarm,Colony,Nest,Fly,Crawl,Jump,Sing,Communicate,Dance,Fight,Work
INSECTS,Benefit,Pollinate,Eat Pests,Food,Honey,Silk,Science,Study,Nature,Balance,Helpful
ISLANDS,Tropical,Hawaii,Bali,Fiji,Tahiti,Aruba,Jamaica,Maldives,Bora Bora,Maui,Kauai
ISLANDS,History,Alcatraz,Ellis,Crete,Sicily,Cyprus,Malta,Corsica,Guam,Iwo Jima,Midway
ISLANDS,Large,Greenland,New Guinea,Borneo,Madagascar,Baffin,Sumatra,Honshu,Victoria,Great Brit
ISLANDS,Nature,Reef,Beach,Volcano,Jungles,Cliffs,Palm,Cove,Lagoon,Coral,Sand
ISLANDS,Nations,Japan,UK,ICELAND,CUBA,NZ,TAIWAN,IRELAND,HAITI,DR,PHILIPPINES
ISLANDS,Activities,Swim,Dive,Surf,Sail,Hike,Relax,Boat,Fish,Photos,Sunset
ISLANDS,Terms,Atoll,Archipelago,Coast,Shore,Dock,Port,Ferry,Mainland,Isle,Cay
JAPAN,Culture,Sushi,Anime,Samurai,Geisha,Origami,Tea Ceremony,Kimono,Zen,Sumo,Calligraphy
JAPAN,Cities,Tokyo,Kyoto,Osaka,Hiroshima,Sapporo,Nara,Fukuoka,Nagoya,Yokohama,Kobe
JAPAN,Brands,Toyota,Sony,Nintendo,Honda,Canon,Nikon,Panasonic,Uniqlo,SoftBank,Suzuki
JAPAN,Nature,Mount Fuji,Cherry Bloom,Bamboo Grove,Hot Springs,Snow Monkey,Deer Park,Inland Sea,Alps,Coastline,Islands
JAPAN,History,Edo Period,Shogun,Meiji Era,Empire,Samurai Code,Pearl Harbor,Post War,Tech Boom,Olympics,2026 Expo
JAPAN,Tech,Robotics,Bullet Train,Video Games,Micro Chips,Smart Homes,Neon Signs,Maglev,Future Tech,VR Gaming,AI Labs
JAPAN,Food,Ramen,Tempura,Sashimi,Udon,Mochi,Yakitori,Sake,Miso,Gyoza,Teriyaki
JIM HENSON,Creatures,Muppets,Sesame,Fraggle,Gonzo,Kermit,Piggy,Fozzie,Big Bird,Ernie,Bert
JIM HENSON,Shows,The Muppet,Sesame,Fraggle,Dinosaurs,Dark Crystal,Labyrinth,Statler,Waldorf,Chef,Rowlf
JIM HENSON,Films,Muppet Movie,Dark Crystal,Labyrinth,Great Muppet,Caper,Muppet Xmas,Treasure Isl,Muppet in Space,Oz The Great,
JIM HENSON,Techniques,Puppets,Anima,CGI,Green Screen,Hands,Rods,Voice,Build,Sew,Design
JIM HENSON,People,Jim,Frank Oz,Jerry Nelson,Dave Goelz,Richard Hunt,Caroll Spinney,Jane,Lisa,Brian
JIM HENSON,Studio,Henson Co,Workshop,Studios,Props,Costumes,Designers,Writers,Puppeteers,Artists
JIM HENSON,Legacy,Imagination,Creativity,Magic,Fun,Music,Stories,Laughs,Friends,Family
LANDMARKS,Global,Eiffel Tower,Great Wall,Taj Mahal,Big Ben,Colosseum,Pyramids,Petra,Machu Picchu,Christ Redeemer,Statue Liberty
LANDMARKS,Natural,Grand Canyon,Mount Everest,Great Reef,Victoria Fall,Iguazu Falls,Galapagos,Niagara Falls,Mount Fuji,Matterhorn,Dead Sea
LANDMARKS,US Sites,Golden Gate,Rushmore,Liberty Bell,Hollywood,The Alamo,Space Needle,Gateway Arch,White House,French Quarter,The Strip
LANDMARKS,European,Acropolis,Tower Bridge,Leaning Tower,Louvre,Sagrada,Neuschwan,Brandenburg,Versailles,St Peters,Canals Venice
LANDMARKS,Asian,Angkor Wat,Burj Khalifa,Temple Heaven,Fushimi Inari,Grand Palace,Potala Palace,Bagan,Petra,Himeji Castle,Mekong River
LANDMARKS,Modern,Opera House,Canton Tower,The Shard,The Bean,Space Station,Museum Future,CN Tower,Sphere Vegas,Lotus Temple,Lego House
LANDMARKS,Ancient,Stonehenge,Chichen Itza,Sphinx,Pompeii,Knossos,Terra Cotta,Nazca Lines,Oracle Delphi,Tikal,Luxor Temple
MEDICINE,Fields,Cardiology,Oncology,Pediatrics,Neurology,Surgery,Dentistry,Psychiatry,Radiology,Geriatrics,Internal
MEDICINE,Tools,Scalpel,Forceps,MRI,X-ray,Stethoscope,IV bag,Pills,Syringe,Bandage,Gloves
MEDICINE,Careers,Doctor,Nurse,Surgeon,EMT,Therapist,Tech,Admin,Aide,CNA,MA
MEDICINE,History,Penicillin,Vaccines,X-rays,Blood Bank,Anesthesia,Germ theory,Salk vaccine,Aspirin,Suture,Quinine
MEDICINE,Terms,Diagnosis,Prognosis,Symptom,Chronic,Acute,Benign,Malignant,Placebo,Triage,Crisis
MEDICINE,Pharmacies,CVS,Walgreens,Rite Aid,Kroger,Walmart,Amazon,OptumRx,Cigna,Aetna,Express
MEDICINE,Research,Clinical,Trials,Study,Drug Dev,Phase I,Phase II,Phase III,FDA,GMP,GLP
MOVIES,Genres,Action,Comedy,Drama,Horror,Sci-Fi,Romance,Western,Musical,Thriller,Mystery,Animation,
MOVIES,Classic,Casablanca,Gone Wind,Citizen Kane,Psycho,The Godfather,Star Wars,Jaws,Wizard of Oz,Singin Rain,Vertigo
MOVIES,Directors,Spielberg,Scorsese,Nolan,Hitchcock,Cameron,Coppola,Kubrick,Tarantino,Burton,Gerwig
MOVIES,2026 Hits,New Avengers,Bond 26,Dune Part 3,Avatar 4,Toy Story 5,Star Wars X,Frozen 3,Shrek 5,Batman 2,Wicked Part 2
MOVIES,Terms,Script,Director,Producer,Actor,CGI,Soundtrack,Box Office,Sequel,Editing,Review
MOVIES,Awards,Oscar,Golden Globe,BAFTA,Cannes,Emmy,SAG,Screenplay,Best Actor,Best Film,Red Carpet
MOVIES,Studio,Disney,Universal,Warner Bros,Paramount,Sony,Netflix,Pixar,Marvel,Dreamworks,A24
NASCAR,Drivers,Earnhardt,Gordon,Petty,Johnson,Waltrip,Stewart,Junior,Elliott,Busch,Logano
NASCAR,Tracks,Daytona,Talladega,Martinsville,Bristol,Indy,Watkins Glen,Sonoma,Miami,Vegas,Charlotte
NASCAR,Terms,Draft,Pit Stop,Cautions,Checkered,Green Flag,Pole,Lead Lap,Oval,Road Course,Stage
NASCAR,Cars,Ford,Chevy,Toyota,Next Gen,Engine,Tires,Fuel,Oil,Wrap,Chassis
NASCAR,Events,Daytona 500,Bristol Night,Championship,Playoffs,Qualifying,Race Day,Tailgate,Party,Fans,Flag
NASCAR,History,Moonshine,Bootlegger,Daytona Beach,Bill France,Family,Legacy,Sport,Money,Fast,Danger
NASCAR,Future 2026,New Rules,EV Cars,Hybrid,Street Race,Global,Tech,Safety,Media,Next Gen,
NATIONAL PARKS,US West,Yosemite,Yellowstone,Zion,Grand Canyon,Glacier,Olympic,Arches,Joshua Tree,Rainier
NATIONAL PARKS,US East,Smokies,Acadia,Everglades,Shenandoah,Congaree,Cuyahoga,Biscayne,Voyageurs
NATIONAL PARKS,Animals,Bears,Bison,Moose,Wolves,Elk,Eagles,Deer,Coyotes,Cougars,Sheep
NATIONAL PARKS,Features,Peaks,Valleys,Rivers,Lakes,Caves,Geysers,Arches,Cliffs,Forests,Dunes
NATIONAL PARKS,Work,Ranger,Guide,Admin,Cleaner,Scientist,Builder,Safety,Officer,Volunteer
NATIONAL PARKS,Rules,No Litter,Stay on Path,No Fire,Safe Distance,Permits,Fees,Pets,Camp,Hunt
NATIONAL PARKS,Activities,Hike,Camp,Fish,Boating,Photos,Tours,Study,Walk,Climb,Relax
NATURE,Animals,Mammals,Reptiles,Fish,Birds,Insects,Amphibs,Spiders,Fungi,Plants,Trees
NATURE,Biomes,Forest,Desert,Tundra,Ocean,River,Lake,Wetland,Savanna,Jungle,Arctic
NATURE,Processes,Growth,Cycles,Weather,Erosion,Tides,Seasons,Photosyn,Evol,Migrate,Birth
NATURE,Science,Biology,Ecology,Geology,Physics,Chemistry,Weather,Climate,Research,Study,Lab
NATURE,Disasters,Flood,Fire,Tornado,Quake,Tsunami,Volcano,Storm,Drought,Hurricane,Typhoon
NATURE,Conservation,Protect,Preserve,Rescue,Green,Recycle,Clean,Save,Species,Habitat,Earth
NATURE,Terms,Eco system,Biodiver,Wild life,Habitat,Food Chain,Prey,Predator,Organic,Green,Water
NINTENDO,Consoles,Switch,Wii,NES,SNES,N64,GameCube,Game Boy,DS,3DS,Virtual Boy
NINTENDO,Characters,Mario,Luigi,Link,Zelda,Peach,Bowser,Yoshi,Donkey Kong,Kirby,Samus
NINTENDO,Franchises,Pokemon,Metroid,Star Fox,Pikmin,F-Zero,Splatoon,Animal Cross,Fire Emblem,Punch Out,Earthbound
NINTENDO,Items,Mushroom,Fire Flower,Star Man,Rupees,Master Sword,Pokeball,Banana,Red Shell,Ice Flower,Egg
NINTENDO,Locations,Mushroom,Hyrule,Kanto,Dream Land,Inkopolis,Pop Star,Corneria,Onett,Skyloft,Koholint
NINTENDO,History,Hanafuda,Cards,Yamauchi,Miyamoto,Iwata,Game Watch,Kyoto,Robotic Buddy,Arcades,Seal Quality
NINTENDO,Future 2026,Switch 2,New Zelda,Mario Film 2,Theme Park,Mobile Apps,Direct Shows,New IP,Tech Update,VR Play,Online Plus
NORTH KOREA,Regime,Kim Jong Un,Kim Jong Il,Kim Il Sung,Dictator,Dynasty,Hermit,Communist,Control,Propaganda,Totalitarian
NORTH KOREA,Life,Juche,Military,Famine,Food Short,Propaganda,Work Camps,No Info,Isolation,Secret,Fear
NORTH KOREA,Places,Pyongyang,DMZ,Border,Gulags,Nuclear,Missiles,Remote,Mountains,Rivers,Coast
NORTH KOREA,Nuclear,Missiles,Tests,Weapons,Threat,Sanctions,Bomb,Warheads,ICBM,Submarine,Silo
NORTH KOREA,Military,Army,Navy,Air Force,Huge Force,Draft,Propaganda,Parade,DMZ,Arms,Power
NORTH KOREA,Relations,USA,SKorea,China,Russia,Japan,UN,Sanctions,Diplomacy,Tensions,Talks
NORTH KOREA,Terms,DMZ,Juche,KWP,Dear Leader,Great Leader,Worker's,Missile,Nuclear,Hate,Isolation
OCEAN,Zones,Surface,Sunlight,Twilight,Midnight,Abyss,Trench,Benthic,Pelagic,Shelf,Floor
OCEAN,Big Fish,Shark,Tuna,Marlin,Swordfish,Manta Ray,Grouper,Salmon,Cod,Snapper,Bass
OCEAN,Mammals,Whale,Dolphin,Seal,Walrus,Sea Lion,Otter,Manatee,Orca,Narwhal,Porpoise
OCEAN,Small Life,Shrimp,Crab,Krill,Plankton,Seahorse,Clam,Oyster,Snail,Urchin,Starfish
OCEAN,Environment,Reef,Kelp Forest,Island,Iceberg,Current,Tide,Waves,Salt,Deep,Vent
OCEAN,Vessels,Ship,Boat,Submarine,Yacht,Canoe,Raft,Tanker,Cutter,Sloop,Frigate
OCEAN,Terms,Anchor,Drift,Float,Sink,Dive,Swim,Sail,Naval,Port,Marine
OLYMPICS,Sports Summer,Swim,Run,Gym,Basket,Soccer,Volley,Cycle,Tennis,Golf,Surf
OLYMPICS,Sports Winter,Ski,Board,Hockey,Skate,Bobsled,Curling,Luge,Jump,Mogul,Alpine
OLYMPICS,History,Ancient,Modern,Athens,Baron,Five Rings,Torch,Flame,Paralympics,Boycott,Peace
OLYMPICS,Cities 2026-2034,Milan,Cortina,Paris,LA,Brisbane,Salt Lake,Host City,Future,Games
OLYMPICS,Terms,Gold,Silver,Bronze,Medal,Podium,Spirit,Motto,Host,Village,Athlete
OLYMPICS,Scandals,Doping,Cheating,Bribes,Boycott,Politics,Rigging,Judging,Crisis,Scandal
OLYMPICS,Icons,Phelps,Bolt,Ledecky,Biles,Owens,Gretzky,Torres,Lewis,Federer,Williams
PETS,Types,Dog,Cat,Fish,Bird,Hamster,Guinea Pig,Rabbit,Snake,Lizard,Ferret
PETS,Care,Food,Water,Vet,Groom,Toys,Bed,Leash,Litter,Cage,Love
PETS,Health,Shots,Fleas,Ticks,Check up,Sick,Meds,Healthy,Insurance,Safe,Happy
PETS,Products,Food,Toys,Beds,Treats,Leashes,Bowls,Cages,Tanks,Collars,Gates
PETS,Work,Service,Guide,Therapy,Police,Rescue,Farm,Hunting,Military,Guard,Show
PETS,Terms,Sit,Stay,Heel,Paw,Roll,Come,Fetch,Bark,Meow,Purr
PETS,Future 2026,AI Toys,Smart Collar,Vet Tech,Food Delivery,Cloning,New Breeds,Rescue App,Health,Care
PIRATES,Real Pirates,Blackbeard,Kidd,Morgan,Teach,Calico Jack,Anne Bonny,Mary Read,Barbossa,Sparrow,Hook
PIRATES,Terms,Ahoy,Matey,Shiver,Plunder,Booty,Jolly Roger,Aye Aye,Walk Plank,Sea Dogs,Buccaneers
PIRATES,Locations,Caribbean,Nassau,Tortuga,Port Royal,Somalia,Gulf of Aden,Treasure Isl,Map,X Marks Spot,Cove
PIRATES,Ships,Galleon,Schooner,Brig,Man of war,Sloop,Jolly Roger,Black Pearl,Queen Anne,Sea Rover,The Dawn
PIRATES,Culture,Rum,Shanties,Parrot,Eye patch,Hook hand,Peg leg,Sword,Pistol,Treasure,Gold
PIRATES,Fiction,Pirates of Carib,Treasure Isl,Peter Pan,One Piece,Captain Hook,Jack Sparrow,Red Beard,Long John,Black Sail,Goonies
PIRATES,History,Golden Age,Privateer,Corsair,Barbary,Treaty,Capture,Plunder,Naval,Trade Routes,Empire
POKEMON,Characters,Pikachu,Charizard,Squirtle,Bulbasaur,Mewtwo,Jigpuff,Eevee,Snorlax,Gengar,Meowth
POKEMON,Games,Red,Blue,Yellow,Gold,Silver,Ruby,Sapphire,Diamond,Pearl,Sun,Moon
POKEMON,Media,TV Show,Movies,Cards,Manga,Comics,Toys,Apps,Merch,Songs,Books
POKEMON,Terms,Catch,Evolve,Battle,Trainer,Gym,Badge,Pokedex,Poke Ball,Moves,Items
POKEMON,Types,Fire,Water,Grass,Electric,Ice,Fighting,Poison,Ground,Flying,Psychic
POKEMON,World,Kanto,Johto,Hoenn,Sinnoh,Unova,Kalos,Alola,Galar,Paldea,Region
POKEMON,History,1996,Japan,Global,Craze,Phenom,Cards,Games,Movies,Legacy
RAILROADS,Types,Freight,Passenger,High Speed,Steam,Diesel,Electric,Maglev,Metro,Subway,Tram
RAILROADS,Parts,Track,Engine,Caboose,Boxcar,Tanker,Flatcar,Coupler,Switch,Signal,Tie
RAILROADS,Jobs,Engineer,Conductor,Brakeman,Dispatcher,Porter,Station,Staff,Admin,Tech
RAILROADS,History,Transcon,1869,Promontory,Steam Age,Golden Age,Diesel era,Amtrak,Pullman,UP,CP
RAILROADS,Companies,BNSF,Union Pacific,CSX,Norfolk,Amtrak,VIA Rail,Eurostar,SNCF,JR East,CN
RAILROADS,Terms,Gauge,Ballast,Grade,Bridge,Tunnel,Crossing,Schedule,Route,Depot,Platform
RAILROADS,Travel,Commute,Tour,Sleep,Dine,View,Lounge,Express,Local,Transit,Boarding
ROARING 20S,Culture,Jazz Age,Flappers,Speakeasy,Prohibition,Bootlegger,Charleston,Dance,Radio,Movies,Fashion,Art Deco
ROARING 20S,People,Gatsby,Al Capone,Babe Ruth,Lindbergh,Ford,Hemingway,Fitzgerald,Louis Armst,Coco Chanel,Hoover
ROARING 20S,History,WWI End,Stock Market,Crash,Boom,Treaty,Suffrage,Women Vote,Jazz Age,Mob Rule,The Great War
ROARING 20S,Terms,Boom,Bust,Jazz,Flapper,Drys,Wets,Giggle Water,Bathtub Gin,Bee's Knees,The Big Apple,Talkies
ROARING 20S,Crime,Mob,Gangs,Bootlegging,Al Capone,Bugs Moran,Valentines Day,Massacre,Rum Runner,Smuggler,Police
ROARING 20S,Innovations,Radio,Cars,Planes,Washing Machine,Fridge,Toaster,Movies Sound,Assembly Line,Skyscraper,Penicillin
ROARING 20S,Places,Harlem,Chicago,New York,Paris,Broadway,Wall Street,Speak easy,Jazz Club,Cinema,Hollywood
SHIPS/BOATS,Power,Sail,Motor,Steam,Paddle,Oar,Wind,Solar,Diesel,Gas
SHIPS/BOATS,Sailing,Mast,Sail,Hull,Deck,Helm,Keel,Bow,Stern,Port,Star
SHIPS/BOATS,Military,Carrier,Destroyer,Frigate,Submarine,Cruiser,Patrol,Battleship,Tender,Supply,Craft
SHIPS/BOATS,Pleasure,Yacht,Cruise,Speed,Jet Ski,House,Canoe,Kayak,Dinghy,Pontoon,Row
SHIPS/BOATS,Trade,Tanker,Cargo,Barge,Tug,Ferry,Whaler,Trawler,Liner,Freighter,Dry
SHIPS/BOATS,History,Galleon,Trireme,Viking,Canoe,Raft,Dhow,Junk,Clipper,Titanic,Mayflower
SHIPS/BOATS,Terms,Knot,Draft,Wake,Anchor,Dock,Pier,Chart,Buoy,Nautical,Marine
SIMPSONS,Characters,Homer,Marge,Bart,Lisa,Maggie,Flanders,Burns,Moe,Krusty,Principal
SIMPSONS,Places,Springfield,Tavern,Kwik-E-Mart,Power Plant,School,Church,Home,Donut,Couch,Car
SIMPSONS,Terms,Doh,Woo Hoo,Ay Caramba,Yellow,Funny,Long Run,Episode,Season,Comedy,Satire
SIMPSONS,Themes,Family,TV,Culture,Work,Life,Kids,Adult,Sitcom,Funny,History
SIMPSONS,Media,TV Show,Movies,Games,Cards,Books,Music,Online,Streaming,Comics,Merch
SIMPSONS,Creators,Matt Groening,Brooks,James L,Voices,Write,Direct,Produce,Art,Genius,Icon
SIMPSONS,Future 2026,New Season,More Fun,More Satire,More News,More Laughs,More Yellow,Record,Legacy
SOUTH PARK,Characters,Cartman,Stan,Kyle,Kenny,Butters,Chef,Mr Garrison,Randy,Wendy,Towelie
SOUTH PARK,Places,South Park,Colorado,School,Town,Restaurant,Hospital,Farm,Store,Mall,The Park
SOUTH PARK,Terms,Screw You,Awesome,Bleep,Censored,Episode,Season,Comedy,Adult,Satire,Funny
SOUTH PARK,Themes,Politics,Social,Culture,News,Current,Events,Satire,Comedy,Adult,Crude
SOUTH PARK,Media,TV Show,Movies,Games,Cards,Books,Music,Live Show,Online,Streaming,Comedy
SOUTH PARK,Creators,Trey Parker,Matt Stone,Dubs,Voices,Write,Direct,Produce,Music,Genius,Icon
SOUTH PARK,Future 2026,New Season,More Movies,More Fun,More Satire,More News,More Laughs,More Crude
SPACE,Missions,Apollo 11,ISS,Hubble,Voyager,Curiosity,Mars Rover,Artemis II,Deep Space,Falcon 9,New Horizons
SPACE,Tech,Rocket,Shuttle,Capsule,Rover,Probe,Telescope,Lab,Solar Panels,Docking,Module
SPACE,People,Armstrong,Collins,Glenn,Jemison,Hadfield,Currie,Ride,Yeager,Kennedy,Gagarin
SPACE,Bodies,Mars,Moon,Sun,Jupiter,Saturn,Earth,Pluto,Mercury,Venus,Neptune
SPACE,Terms,Orbit,Lift Off,Docking,Gravity,Zero G,Vacuum,Launch,Entry,Landing,Mission
SPACE,Agencies,NASA,ESA,JAXA,Roscosmos,ISRO,CNSA,SpaceX,Blue Origin,Virgin,Boeing
SPACE,History,Cold War,Space Race,First Man,First Woman,Sputnik,Apollo Fire,Challenger,Columbia,Starlink,Skylab
SPIELBERG,Films,Jaws,ET,Schindler's,Saving Private,Indy,Jurassic,Close Enc,Minority,Catch Me,Lincoln
SPIELBERG,Genres,Sci Fi,Drama,Action,War,Family,History,Adventure,Horror,Thriller,Comedy
SPIELBERG,Awards,Oscar,Golden Globe,BAFTA,Director,Picture,Writer,Film Maker,Icon,Legend,Studio Boss
SPIELBERG,Studio,Amblin,Dreamworks,Universal,Paramount,Disney,Producer,Director,Writer,Boss,CEO
SPIELBERG,People,Tom Hanks,Harrison Ford,John Wms,George Lucas,Kate Cap,DiCaprio,Producer,Director,Friend,Family
SPIELBERG,Themes,Family,War,Hope,Magic,Childhood,History,Sci Fi,Adventure,Discovery,Trust
SPIELBERG,Future 2026,New Film,Next Project,More Shows,AI in Film,Future of Films,Mentorship,Legacy,New Ideas
TECH BREAKTHRU,Computers,Transistor,Circuit,Internet,PC,Laptop,Tablet,Phone,AI,Quantum,Neural Net
TECH BREAKTHRU,Medicine,Penicillin,Vaccines,X-rays,MRI,CT Scan,DNA,CRISPR,Stem Cell,Surgery,Laser
TECH BREAKTHRU,Space,Sputnik,Apollo,Hubble,ISS,Rover,Artemis,Falcon,Starship,Webb,Orion
TECH BREAKTHRU,Daily Life,Radio,TV,Phone,Fridge,Car,Plane,Light,AC,Microwave,Internet
TECH BREAKTHRU,Communication,Telegraph,Phone,Radio,TV,Email,Internet,Social,Video Call,AI Chat,Quantum
TECH BREAKTHRU,Communication,Telegraph,Phone,Radio,TV,Email,Internet,Social,Video Call,AI Chat,Quantum
TECH BREAKTHRU,Energy,Nuclear,Solar,Wind,Fusion,Battery,Hydrogen,Smart Grid,LED,Biofuel,Geothermal
TECH BREAKTHRU,Future 2026,AI Growth,Metaverse,VR/AR,EV Cars,Home Tech,Quantum,Robots,Bio Tech,Space Tour
TECHNOLOGY,Companies,Apple,Google,Amazon,Meta,Nvidia,Tesla,Microsoft,Netflix,Intel,IBM
TECHNOLOGY,Products,iPhone,Pixel,Echo,Quest,Model Y,Xbox,PlayStation,AI Chip,Cloud,Office
TECHNOLOGY,Terms,AI,VR,AR,Cloud,Data,Server,Code,Pixel,Byte,Chip,Software,Hardware
TECHNOLOGY,Software,OS,App,Program,Code,Browser,Engine,Tools,Suite,Open Source,Closed,Platform
TECHNOLOGY,Social,Facebook,Insta,TikTok,Snap,Twitter X,Linked In,YouTube,Reddit,Threads,Pinterest
TECHNOLOGY,History,Internet,Phone,Transistor,Circuit,Mainframe,PC,Mouse,Monitor,WWW,Dot Com
TECHNOLOGY,2026 Trends,AI Growth,Metaverse,VR Gaming,EV Cars,Home Tech,Quantum,New Robots,New Chips,Bio Tech,Space Tourism
THE CIRCUS,Acts,Clowns,Acrobats,Jugglers,Trapeze,Strongman,Contortion,Magic,Fire,Lion,Horse
THE CIRCUS,Tents,Big Top,Side Show,Ring,Curtain,Seats,Lights,Flags,Mast,Canvas,Ropes
THE CIRCUS,Food,Popcorn,Cotton Candy,Hot Dogs,Peanuts,Soda,Pretzels,Candy,Corn,Nachos
THE CIRCUS,History,Barnum,Bailey,Ringling,Cirque,Europe,Traveling,Golden Age,Posters,Train
THE CIRCUS,Terms,Ringmaster,Showman,Director,Troupes,Practice,Skill,Art,Talent,Performance
THE CIRCUS,Music,Band,Calliope,Drums,Trumpet,March,Snare,Loud,Cheerful,Bright,Themely
THE CIRCUS,Jobs,Director,Artist,Worker,Driver,Sales,Admin,Costume,Props,Lighting,Sound
THE OCEAN,Zones,Surface,Sunlight,Twilight,Midnight,Abyss,Trench,Benthic,Pelagic,Shelf,Floor
THE OCEAN,Big Fish,Shark,Tuna,Marlin,Swordfish,Manta Ray,Grouper,Salmon,Cod,Snapper,Bass
THE OCEAN,Mammals,Whale,Dolphin,Seal,Walrus,Sea Lion,Otter,Manatee,Orca,Narwhal,Porpoise
THE OCEAN,Small Life,Shrimp,Crab,Krill,Plankton,Seahorse,Clam,Oyster,Snail,Urchin,Starfish
THE OCEAN,Environment,Reef,Kelp Forest,Island,Iceberg,Current,Tide,Waves,Salt,Deep,Vent
THE OCEAN,Vessels,Ship,Boat,Submarine,Yacht,Canoe,Raft,Tanker,Cutter,Sloop,Frigate
THE OCEAN,Terms,Anchor,Drift,Float,Sink,Dive,Swim,Sail,Naval,Port,Marine
THE WEATHER,Events,Rain,Snow,Sleet,Hail,Fog,Mist,Wind,Sun,Clouds,Storm
THE WEATHER,Storms,Tornado,Hurricane,Cyclone,Blizzard,Monsoon,Typhoon,Thunder,Light,Gale,Dust
THE WEATHER,Cloud Types,Cirrus,Cumulus,Stratus,Nimbus,Fog,High Cloud,Low Cloud,Puffy,Dark,Flat
THE WEATHER,Tools,Radar,Gauge,Vane,Glass,Satellite,Map,Station,Computer,Balloon,Sonde
THE WEATHER,Climate,Tropical,Desert,Tundra,Arctic,Humid,Dry,Cold,Hot,Moderate,Marine
THE WEATHER,Terms,Front,Pressure,Humidity,Degree,Forecast,Update,Watch,Warning,Crisis,Trend
THE WEATHER,Forces,Gravity,Heat,Wind,Water,Air,Sun,Moon,Earth,Rotation,Pressure
TOYS,Types,Board Games,Action Fig,Dolls,Cars,Blocks,Puzzles,Cards,Video Games,Plush,Science
TOYS,Brands,Lego,Mattel,Hasbro,Barbie,Hot Wheels,Nerf,Playmobil,Fisher Price,Nintendo,Sega
TOYS,Games,Monopoly,Clue,Chess,Checkers,Risk,Sorry,Uno,Go Fish,Jenga,Scrabble,BINGO,
TOYS,Classic,Slinky,Yo Yo,Marbles,Jacks,Hula Hoop,Frisbee,View Master,Etch Sketch,Jump Rope,Top
TOYS,Modern,Video Games,Drones,Robots,AI Pets,VR Gear,Smart Toys,Apps,Digital,Electric,Tech
TOYS,Collecting,Cards,Stamps,Coins,Dolls,Comics,Figures,Rare,Value,Trade,Sell
TOYS,Stores,Toys R Us,Target,Walmart,Amazon,Build Bear,Lego Store,Local Shop,Online,SmallBiz
VIDEO GAMES,Iconic Heroes,Mario,Link,Master Chief,Lara Croft,Sonic,Kratos,Samus,Cloud,Pikachu,Pac-Man
VIDEO GAMES,Consoles,Switch,PS5,Xbox Series,PC,Wii,Genesis,NES,Game Boy,Dreamcast,Atari
VIDEO GAMES,Genres,Platformer,RPG,FPS,Strategy,Sandbox,Horror,Racing,Sports,Fighting,Stealth
VIDEO GAMES,Terminology,Level Up,XP,Boss Fight,NPC,Loot,Buff,Nerf,Glitches,Speedrun,Avatar
VIDEO GAMES,Studios,Nintendo,Sega,Sony,Capcom,Ubisoft,EA,Rockstar,Valve,Epic,Square Enix
VIDEO GAMES,Mobile Hits,Candy Crush,Angry Birds,Pokemon Go,Roblox,Among Us,PUBG,Clash,Temple Run,Flappy,Fruit Ninja
VIDEO GAMES,Retro Gems,Tetris,Pong,Donkey Kong,Galaga,Asteroids,Centipede,Frogger,Dig Dug,Qbert,Pitfall
VOLCANOES,Types,Shield,Cinder,Strato,Dome,Caldera,Active,Dormant,Extinct,Fissure,Vent
VOLCANOES,Materials,Lava,Magma,Ash,Pumice,Obsidian,Steam,Gases,Dust,Rocks,Scoria
VOLCANOES,Famous,Etna,Vesuvius,Fuji,Kilauea,St Helens,Pinatubo,Krakatoa,Mauna Loa,Popo,Erebus
VOLCANOES,Locations,Hawaii,Iceland,Japan,Italy,Mexico,Alaska,Chile,Java,Congo,Antarctica
VOLCANOES,Hazards,Heat,Ash fall,Flows,Gases,Quakes,Tsunami,Mudslides,Smoke,Noise,Pressure
VOLCANOES,Benefits,Soil,Heat,Tourism,Rocks,Gems,Islands,Energy,Science,Views,History
VOLCANOES,Parts,Crater,Magma Chamber,Vent,Conduit,Ash Cloud,Slope,Base,Peak,Crust,Mantle
WALMART,Stores,Supercenter,Express,Neighborhood,Sam's Club,Online,Marketplace,Pick Up,Delivery,Global,Local
WALMART,Products,Groceries,Clothes,Tech,Home Goods,Toys,Garden,Pharmacy,Optical,Tires,Photo
WALMART,Business,Every Day,Low Price,Rollback,Sam Walton,Headquarters,Bentonville,Logistics,Supply Chain,Global,Stock
WALMART,Careers,Associate,Manager,Cashier,Stocker,Truck Driver,Tech Team,Online Team,HR,Team Lead,CEO,Board,
WALMART,Services,Pharmacy,Auto Care,Money Center,Credit Card,Insurance,Photo Center,Cell Phones,Optical,Health Clinic,
WALMART,Terms,Black Friday,Layaway,Clearance,Deals,Check Out,Aisle,Cart,Bag,Receipt,Return,Sale
WALMART,Impact,Big Box,Small Biz,Jobs,Economy,Global Reach,Low Wages,Benefits,Tech Focus,Ecom,Future
WILD WEST,People,Billy Kid,Jesse James,Wyatt Earp,Doc Holliday,Buffalo Bill,Custer,Sitting Bull,Crazy Horse,Calamity Jane,Annie Oakley
WILD WEST,Places,Saloon,Jail,Bank,Ranch,Homestead,Trail,Outlaw,Town,Desert,Plains
WILD WEST,Terms,Outlaw,Sheriff,Marshal,Posse,Duel,Gold Rush,Cattle Drive,Pony Express,Stagecoach,Wanted
WILD WEST,Tech,Rifle,Pistol,Horse,Wagon,Train,Telegraph,Barbed Wire,Oil Lamp,Lever Action,Six Gun
WILD WEST,History,Civil War End,Frontier,Settlers,Railroad,War Dance,Treaty,Indian Wars,End of West,Movies
WILD WEST,Culture,Cowboy,Outlaw,Gambler,Prospector,Saloons,Bounty,Bandits,Dust,Ride,
WILD WEST,Fiction,Westerns,Movies,Books,TV Shows,Red Dead,The Good,Bad,Ugly,High Noon
WORKING OUT,Type,Cardio,Strength,Flex,Yoga,Pilates,HIIT,Running,Cycle,Swim,Walk,Dance
WORKING OUT,Gear,Shoes,Clothes,Weights,Mat,Treadmill,Bike,Rower,Bench,Strap,Bottle,Towel
WORKING OUT,Gyms,LA Fitness,Planet Fit,Anytime,Crunch,YMCA,24 Hour,Gold's,CrossFit,Orange,Pure Barre
WORKING OUT,Health,Fitness,Diet,Water,Sleep,Protein,Carbs,Fats,Muscles,Heart,Cardio,Energy,
WORKING OUT,Terms,Sets,Reps,Circuit,Warm Up,Cool Down,Rest Day,Core,Ripped,Shredded,Pumps,Gains
WORKING OUT,Goals,Lose Weight,Build Mass,Tone Up,Endurance,Strength,Health,Energy,Stress Relief,Sleep Better,Feel Good
WORKING OUT,Food,Protein,Shake,Meal Prep,Veggie,Fruit,Lean Meat,Oatmeal,Nuts,Water,Hydrate,Fuel
WWII,People,Hitler,Churchill,Stalin,Roosevelt,Truman,Mussolini,Hirohito,Patton,Monty,MacArthur
WWII,Battles,D-Day,Stalingrad,Midway,Bulge,Iwo Jima,Okinawa,Pearl Harbor,Blitz,Kursk,El Alamein
WWII,Tech,Atomic Bomb,Jet Plane,Radar,Sonar,Penicillin,Tank,Sub,Code Break,Radio,Bazooka
WWII,Locations,Europe,Pacific,Africa,Atlantic,Asia,Russia,Germany,Japan,UK,USA
WWII,Terms,Axis,Allies,Holocaust,Genocide,Blitz,Kamikaze,Rosie,Ration,Victory,Freedom
WWII,Legacy,UN,NATO,Cold War,Japan Dem,Europe Rebuild,Israel,Korea,History,Peace,Freedom
WWII,Future 2026,New Films,Games,Books,Museums,Vet Stories,Digital Archive,AI Study,History,Learn,
ZOO,Zoo Animals,Lions,Tigers,Bears,Monkeys,Elephants,Giraffes,Zebras,Pandas,Penguins,Rhinos
ZOO,Zoo Locations,San Diego,Bronx Zoo,London Zoo,Toronto Zoo,Chicago Zoo,Miami Zoo,Dublin Zoo,Berlin Zoo,Paris Zoo,Denver Zoo
ZOO,Zoo Jobs,Keeper,Vet,Biologist,Curator,Guide,Manager,Cleaner,Builder,Admin,Security
ZOO,Zoo Exhibits,Savanna,Aviary,Aquarium,Rainforest,Reptile,Nocturnal,Primate,Panda House,Polar Bear,Big Cat
ZOO,Life Cycle,Birth,Growth,Mating,Old Age,Breeding,Wild Release,Diet,Sleep,Behavior,Health check
ZOO,Zoo Plants,Bamboo,Grass,Trees,Bushels,Shrubs,Lilly pads,Eucalyptus,Hay,Clover,Flowers
ZOO,Conservation,Breeding,Research,Protect,Rescue,Educate,Funds,Habitat,Wild life,Programs,Species
`;let rc=null;const up=()=>{if(rc)return rc;const i=lp.trim().split(`
`),n=new Map;if(i.length<2)return n;for(let r=1;r<i.length;r++){const l=i[r].trim();if(!l)continue;const c=l.split(",");if(c.length<4)continue;const d=c[0].trim().toUpperCase(),S=c[1].trim(),E=c.slice(2).map(h=>h.trim()).filter(h=>h.length>0);E.length<4||(n.has(d)||n.set(d,[]),n.get(d).push({id:`theme-${d}-${S}`.toLowerCase().replace(/[^a-z0-9]/g,"-"),name:S,words:E}))}return rc=n,n},cp=i=>{const n=localStorage.getItem("LevelPrecheckLog.txt")||"",r=`[${i.timestamp}] Level: ${i.levelIndex} | Mode: ${i.mode} | Reason: ${i.reason} | Cats: ${i.attemptedCategories.join(", ")} | Conflicts: ${i.conflictingWords.join(", ")}
`;localStorage.setItem("LevelPrecheckLog.txt",n+r)};function Lo(i,n,r,l,c="Standard"){if(!i||i.length===0)return{isValid:!1,data:[],errorDetails:"Pool is empty"};const d=[],S=new Set,E=new Set,h=ip([...i]),T=c===te.LEVEL_THEMED;for(const R of h){if(d.length===n)break;const f=R.name.trim().toUpperCase();if(E.has(f)||!T&&S.has(f))continue;const C=[];for(const L of R.words){const v=L.trim().toUpperCase();S.has(v)||!T&&E.has(v)||C.push(L)}if(C.length>=r){const L=C.slice(0,r);L.forEach(v=>S.add(v.trim().toUpperCase())),E.add(f),d.push({...R,words:L})}}if(d.length<n){const R=`Level ${l}: Insufficient unique categories. Needed ${n}, found ${d.length}.`;return cp({timestamp:new Date().toLocaleString(),levelIndex:l,mode:c,reason:R,attemptedCategories:d.map(f=>f.name),conflictingWords:[]}),{isValid:!1,data:[],errorDetails:R}}return{isValid:!0,data:d}}const Sp=(i,n,r=4,l=0,c="Standard")=>{const d=Lo(n,i,r,l,c);return d.isValid?d.data:[]};function dp(i,n,r){const l=n[n.length-1],c=Lo(i,l.rows,l.cols,r,te.LEVEL_EXPANSION);if(!c.isValid)return c;const d=c.data;return d.length<l.rows?{isValid:!1,data:[],errorDetails:"Expansion level failed at final stage check"}:{isValid:!0,data:d}}const Ap=[{rows:3,cols:2},{rows:5,cols:3},{rows:6,cols:4},{rows:7,cols:5}],pc=(i,n=[])=>{const r=BO;let l=(i-1)%r.length,c=r[l];if(n.length>0&&!n.includes(c))for(let d=1;d<r.length;d++){const S=r[(l+d)%r.length];if(n.includes(S)){c=S;break}}return c},Ep=(i,n=[],r=[],l)=>{const c=l||pc(i,n);let d=0;const S=10,E=up(),h=Array.from(E.keys());for(;d<S;){d++;let R=[],f;switch(c){case te.LEVEL_SYNONYMS:R=Es();break;case te.LEVEL_EMOJI:R=hs();break;case te.LEVEL_THEMED:h.length>0?(f=h[(i-1+d)%h.length],R=E.get(f||"")||[]):R=Ii();break;default:R=Ii(),i%20===0&&(R=[...R,...op()]);break}r.length>0&&c!==te.LEVEL_THEMED&&(R=R.filter(L=>r.includes(L.id)));let C;if(c===te.LEVEL_EXPANSION?C=dp(R,Ap,i):c===te.LEVEL_EMOJI?C=Lo(R,7,3,i,te.LEVEL_EMOJI):c===te.LEVEL_MIND_MATCH?C=Lo(R,4,4,i,te.LEVEL_MIND_MATCH):C=Lo(R,7,4,i,c),C.isValid)return{mode:c,data:C.data,themeName:f}}const T=Sp(7,Ii(),4,i,te.CLASSIC);return{mode:c,data:T.length>=7?T:Ii().slice(0,7)}};class hp{constructor(){this.ctx=null,this.isMuted=!1,this.isMusicPlaying=!1,this.musicNodes=[],this.musicInterval=null}getContext(){if(!this.ctx)try{const n=window.AudioContext||window.webkitAudioContext;if(n)this.ctx=new n;else return null}catch(n){return console.error("Audio init error",n),null}return this.ctx}resume(){const n=this.getContext();n&&n.state==="suspended"&&n.resume().catch(r=>console.warn(r))}setSound(n){this.isMuted=!n,this.isMuted?this.stopNodes():this.resume()}playTone(n,r,l,c=0,d=.1){if(this.isMuted)return;const S=this.getContext();if(S){S.state==="suspended"&&S.resume().catch(()=>{});try{const E=S.createOscillator(),h=S.createGain();E.type=r,E.frequency.setValueAtTime(n,S.currentTime+c),h.gain.setValueAtTime(d,S.currentTime+c),h.gain.exponentialRampToValueAtTime(1e-4,S.currentTime+c+l),E.connect(h),h.connect(S.destination),E.start(S.currentTime+c),E.stop(S.currentTime+c+l+.05),E.onended=()=>{E.disconnect(),h.disconnect()}}catch{}}}startMusic(){this.isMusicPlaying||(this.isMusicPlaying=!0)}stopMusic(){this.isMusicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null),this.stopNodes()}toggleMusic(){return this.isMusicPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}stopNodes(){this.musicNodes.forEach(n=>{try{n.disconnect()}catch{}}),this.musicNodes=[]}playTick(){this.playTone(800,"square",.03,0,.05)}playSelect(){this.playTone(850,"sine",.12,0,.3)}playSwap(){if(this.isMuted)return;const n=this.getContext();if(n){n.state==="suspended"&&n.resume().catch(()=>{});try{const r=n.currentTime,l=n.createOscillator(),c=n.createGain();l.type="sine",l.frequency.setValueAtTime(350,r),l.frequency.exponentialRampToValueAtTime(700,r+.1),c.gain.setValueAtTime(.2,r),c.gain.exponentialRampToValueAtTime(1e-4,r+.15),l.connect(c),c.connect(n.destination),l.start(r),l.stop(r+.2),l.onended=()=>{l.disconnect(),c.disconnect()}}catch{}}}playCorrect(){this.playTone(660,"sine",.1,0,.15),this.playTone(880,"sine",.2,.08,.15)}playRowSolved(){this.playTone(440,"sine",.4,0,.1),this.playTone(554.37,"sine",.4,.05,.1),this.playTone(659.25,"sine",.4,.1,.1)}playError(){if(this.isMuted)return;const n=this.getContext();if(n){n.state==="suspended"&&n.resume().catch(()=>{});try{const r=n.currentTime,l=n.createOscillator(),c=n.createGain();l.type="sawtooth",l.frequency.setValueAtTime(120,r),l.frequency.exponentialRampToValueAtTime(60,r+.3),c.gain.setValueAtTime(.15,r),c.gain.linearRampToValueAtTime(.001,r+.3),l.connect(c),c.connect(n.destination),l.start(r),l.stop(r+.35),l.onended=()=>{l.disconnect(),c.disconnect()}}catch{}}}playWin(){this.playTone(523.25,"triangle",.1,0,.2),this.playTone(659.25,"triangle",.1,0+.1,.2),this.playTone(783.99,"triangle",.1,0+.2,.2),this.playTone(1046.5,"square",.6,0+.3,.2),this.playTone(523.25,"sine",.4,0+.3,.2)}playLevelStart(){this.playTone(440,"sine",.1,0,.1),this.playTone(880,"sine",.2,0+.1,.1)}toggleMute(){this.isMuted=!this.isMuted,this.isMuted&&this.stopNodes()}}const Zt=new hp;/*! Capacitor: https://capacitorjs.com/ - MIT License */var pn;(function(i){i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE"})(pn||(pn={}));class sc extends Error{constructor(n,r,l){super(n),this.message=n,this.code=r,this.data=l}}const Tp=i=>{var n,r;return i!=null&&i.androidBridge?"android":!((r=(n=i==null?void 0:i.webkit)===null||n===void 0?void 0:n.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},mp=i=>{const n=i.CapacitorCustomPlatform||null,r=i.Capacitor||{},l=r.Plugins=r.Plugins||{},c=()=>n!==null?n.name:Tp(i),d=()=>c()!=="web",S=f=>{const C=T.get(f);return!!(C!=null&&C.platforms.has(c())||E(f))},E=f=>{var C;return(C=r.PluginHeaders)===null||C===void 0?void 0:C.find(L=>L.name===f)},h=f=>i.console.error(f),T=new Map,R=(f,C={})=>{const L=T.get(f);if(L)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),L.proxy;const v=c(),V=E(f);let B;const I=async()=>(!B&&v in C?B=typeof C[v]=="function"?B=await C[v]():B=C[v]:n!==null&&!B&&"web"in C&&(B=typeof C.web=="function"?B=await C.web():B=C.web),B),b=(z,oe)=>{var le,Ie;if(V){const Re=V==null?void 0:V.methods.find(be=>oe===be.name);if(Re)return Re.rtype==="promise"?be=>r.nativePromise(f,oe.toString(),be):(be,we)=>r.nativeCallback(f,oe.toString(),be,we);if(z)return(le=z[oe])===null||le===void 0?void 0:le.bind(z)}else{if(z)return(Ie=z[oe])===null||Ie===void 0?void 0:Ie.bind(z);throw new sc(`"${f}" plugin is not implemented on ${v}`,pn.Unimplemented)}},x=z=>{let oe;const le=(...Ie)=>{const Re=I().then(be=>{const we=b(be,z);if(we){const Ye=we(...Ie);return oe=Ye==null?void 0:Ye.remove,Ye}else throw new sc(`"${f}.${z}()" is not implemented on ${v}`,pn.Unimplemented)});return z==="addListener"&&(Re.remove=async()=>oe()),Re};return le.toString=()=>`${z.toString()}() { [capacitor code] }`,Object.defineProperty(le,"name",{value:z,writable:!1,configurable:!1}),le},J=x("addListener"),_=x("removeListener"),$=(z,oe)=>{const le=J({eventName:z},oe),Ie=async()=>{const be=await le;_({eventName:z,callbackId:be},oe)},Re=new Promise(be=>le.then(()=>be({remove:Ie})));return Re.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Ie()},Re},X=new Proxy({},{get(z,oe){switch(oe){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return V?$:J;case"removeListener":return _;default:return x(oe)}}});return l[f]=X,T.set(f,{name:f,proxy:X,platforms:new Set([...Object.keys(C),...V?[v]:[]])}),X};return r.convertFileSrc||(r.convertFileSrc=f=>f),r.getPlatform=c,r.handleError=h,r.isNativePlatform=d,r.isPluginAvailable=S,r.registerPlugin=R,r.Exception=sc,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},Rp=i=>i.Capacitor=mp(i),Li=Rp(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),gs=Li.registerPlugin;class hm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(n,r){let l=!1;this.listeners[n]||(this.listeners[n]=[],l=!0),this.listeners[n].push(r);const d=this.windowListeners[n];d&&!d.registered&&this.addWindowListener(d),l&&this.sendRetainedArgumentsForEvent(n);const S=async()=>this.removeListener(n,r);return Promise.resolve({remove:S})}async removeAllListeners(){this.listeners={};for(const n in this.windowListeners)this.removeWindowListener(this.windowListeners[n]);this.windowListeners={}}notifyListeners(n,r,l){const c=this.listeners[n];if(!c){if(l){let d=this.retainedEventArguments[n];d||(d=[]),d.push(r),this.retainedEventArguments[n]=d}return}c.forEach(d=>d(r))}hasListeners(n){return!!this.listeners[n].length}registerWindowListener(n,r){this.windowListeners[r]={registered:!1,windowEventName:n,pluginEventName:r,handler:l=>{this.notifyListeners(r,l)}}}unimplemented(n="not implemented"){return new Li.Exception(n,pn.Unimplemented)}unavailable(n="not available"){return new Li.Exception(n,pn.Unavailable)}async removeListener(n,r){const l=this.listeners[n];if(!l)return;const c=l.indexOf(r);this.listeners[n].splice(c,1),this.listeners[n].length||this.removeWindowListener(this.windowListeners[n])}addWindowListener(n){window.addEventListener(n.windowEventName,n.handler),n.registered=!0}removeWindowListener(n){n&&(window.removeEventListener(n.windowEventName,n.handler),n.registered=!1)}sendRetainedArgumentsForEvent(n){const r=this.retainedEventArguments[n];r&&(delete this.retainedEventArguments[n],r.forEach(l=>{this.notifyListeners(n,l)}))}}const kh=i=>encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),wh=i=>i.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class fp extends hm{async getCookies(){const n=document.cookie,r={};return n.split(";").forEach(l=>{if(l.length<=0)return;let[c,d]=l.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=wh(c).trim(),d=wh(d).trim(),r[c]=d}),r}async setCookie(n){try{const r=kh(n.key),l=kh(n.value),c=`; expires=${(n.expires||"").replace("expires=","")}`,d=(n.path||"/").replace("path=",""),S=n.url!=null&&n.url.length>0?`domain=${n.url}`:"";document.cookie=`${r}=${l||""}${c}; path=${d}; ${S};`}catch(r){return Promise.reject(r)}}async deleteCookie(n){try{document.cookie=`${n.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const n=document.cookie.split(";")||[];for(const r of n)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(n){return Promise.reject(n)}}async clearAllCookies(){try{await this.clearCookies()}catch(n){return Promise.reject(n)}}}gs("CapacitorCookies",{web:()=>new fp});const Cp=async i=>new Promise((n,r)=>{const l=new FileReader;l.onload=()=>{const c=l.result;n(c.indexOf(",")>=0?c.split(",")[1]:c)},l.onerror=c=>r(c),l.readAsDataURL(i)}),Op=(i={})=>{const n=Object.keys(i);return Object.keys(i).map(c=>c.toLocaleLowerCase()).reduce((c,d,S)=>(c[d]=i[n[S]],c),{})},pp=(i,n=!0)=>i?Object.entries(i).reduce((l,c)=>{const[d,S]=c;let E,h;return Array.isArray(S)?(h="",S.forEach(T=>{E=n?encodeURIComponent(T):T,h+=`${d}=${E}&`}),h.slice(0,-1)):(E=n?encodeURIComponent(S):S,h=`${d}=${E}`),`${l}&${h}`},"").substr(1):null,gp=(i,n={})=>{const r=Object.assign({method:i.method||"GET",headers:i.headers},n),c=Op(i.headers)["content-type"]||"";if(typeof i.data=="string")r.body=i.data;else if(c.includes("application/x-www-form-urlencoded")){const d=new URLSearchParams;for(const[S,E]of Object.entries(i.data||{}))d.set(S,E);r.body=d.toString()}else if(c.includes("multipart/form-data")||i.data instanceof FormData){const d=new FormData;if(i.data instanceof FormData)i.data.forEach((E,h)=>{d.append(h,E)});else for(const E of Object.keys(i.data))d.append(E,i.data[E]);r.body=d;const S=new Headers(r.headers);S.delete("content-type"),r.headers=S}else(c.includes("application/json")||typeof i.data=="object")&&(r.body=JSON.stringify(i.data));return r};class Np extends hm{async request(n){const r=gp(n,n.webFetchExtra),l=pp(n.params,n.shouldEncodeUrlParams),c=l?`${n.url}?${l}`:n.url,d=await fetch(c,r),S=d.headers.get("content-type")||"";let{responseType:E="text"}=d.ok?n:{};S.includes("application/json")&&(E="json");let h,T;switch(E){case"arraybuffer":case"blob":T=await d.blob(),h=await Cp(T);break;case"json":h=await d.json();break;case"document":case"text":default:h=await d.text()}const R={};return d.headers.forEach((f,C)=>{R[C]=f}),{data:h,headers:R,status:d.status,url:d.url}}async get(n){return this.request(Object.assign(Object.assign({},n),{method:"GET"}))}async post(n){return this.request(Object.assign(Object.assign({},n),{method:"POST"}))}async put(n){return this.request(Object.assign(Object.assign({},n),{method:"PUT"}))}async patch(n){return this.request(Object.assign(Object.assign({},n),{method:"PATCH"}))}async delete(n){return this.request(Object.assign(Object.assign({},n),{method:"DELETE"}))}}gs("CapacitorHttp",{web:()=>new Np});var Vh;(function(i){i.General="General",i.ParentalGuidance="ParentalGuidance",i.Teen="Teen",i.MatureAudience="MatureAudience"})(Vh||(Vh={}));var xh;(function(i){i.SizeChanged="bannerAdSizeChanged",i.Loaded="bannerAdLoaded",i.FailedToLoad="bannerAdFailedToLoad",i.Opened="bannerAdOpened",i.Closed="bannerAdClosed",i.AdImpression="bannerAdImpression"})(xh||(xh={}));var gc;(function(i){i.TOP_CENTER="TOP_CENTER",i.CENTER="CENTER",i.BOTTOM_CENTER="BOTTOM_CENTER"})(gc||(gc={}));var Nc;(function(i){i.BANNER="BANNER",i.FULL_BANNER="FULL_BANNER",i.LARGE_BANNER="LARGE_BANNER",i.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",i.LEADERBOARD="LEADERBOARD",i.ADAPTIVE_BANNER="ADAPTIVE_BANNER",i.SMART_BANNER="SMART_BANNER"})(Nc||(Nc={}));var Kh;(function(i){i.Loaded="interstitialAdLoaded",i.FailedToLoad="interstitialAdFailedToLoad",i.Showed="interstitialAdShowed",i.FailedToShow="interstitialAdFailedToShow",i.Dismissed="interstitialAdDismissed"})(Kh||(Kh={}));var Wh;(function(i){i.Loaded="onRewardedInterstitialAdLoaded",i.FailedToLoad="onRewardedInterstitialAdFailedToLoad",i.Showed="onRewardedInterstitialAdShowed",i.FailedToShow="onRewardedInterstitialAdFailedToShow",i.Dismissed="onRewardedInterstitialAdDismissed",i.Rewarded="onRewardedInterstitialAdReward"})(Wh||(Wh={}));var Yh;(function(i){i.Loaded="onRewardedVideoAdLoaded",i.FailedToLoad="onRewardedVideoAdFailedToLoad",i.Showed="onRewardedVideoAdShowed",i.FailedToShow="onRewardedVideoAdFailedToShow",i.Dismissed="onRewardedVideoAdDismissed",i.Rewarded="onRewardedVideoAdReward"})(Yh||(Yh={}));var Ic;(function(i){i.NOT_REQUIRED="NOT_REQUIRED",i.OBTAINED="OBTAINED",i.REQUIRED="REQUIRED",i.UNKNOWN="UNKNOWN"})(Ic||(Ic={}));var zh;(function(i){i[i.DISABLED=0]="DISABLED",i[i.EEA=1]="EEA",i[i.NOT_EEA=2]="NOT_EEA",i[i.US=3]="US",i[i.OTHER=4]="OTHER"})(zh||(zh={}));const pa=gs("AdMob",{web:()=>Di(()=>import("./web-tvNTRIyx.js"),[]).then(i=>new i.AdMobWeb)}),Ip=({onStart:i,onSettings:n,onStats:r,lastLevel:l})=>{const c=l||1,d=c>1?`CONTINUE LEVEL ${c}`:"START GAME";return N.jsxs("div",{className:"flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative bg-black font-oswald",children:[N.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center w-full",children:[N.jsx("div",{className:"flex flex-col items-center justify-center mb-16 w-full animate-zoom-in",children:N.jsx("img",{src:"/logo.svg",alt:"WORD PAIRING MACHINE",className:"w-full max-w-[320px] md:max-w-[450px] h-auto object-contain"})}),N.jsx("div",{className:"flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center z-30",style:{animationDelay:"0.4s"},children:N.jsx("div",{className:"relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer",onClick:i,children:N.jsx("button",{className:`
                relative w-full bg-black rounded-large px-8 py-5
                flex items-center justify-center
                border-2 border-white
                shadow-none
                active:translate-y-[2px]
                transition-all duration-75 z-10
              `,children:N.jsx("span",{className:"text-2xl md:text-3xl font-black font-oswald text-white tracking-widest uppercase",children:d})})})})]}),N.jsxs("div",{className:"w-full flex flex-wrap justify-center gap-6 pb-12 mt-auto animate-fade-in px-4 relative z-30",style:{animationDelay:"0.5s"},children:[N.jsx("button",{onClick:r,className:`
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-neon-aqua hover:text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          `,children:"STATS"}),N.jsx("button",{onClick:n,className:`
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          `,children:"SETTINGS"})]})]})},yp=gs("Privacy"),Lp={showPrivacyOptionsForm:async()=>{if(Li.isNativePlatform())try{await pa.showPrivacyOptionsForm()}catch(i){console.warn("Privacy form not available or failed to show:",i)}else console.log("Privacy options form requested (Web Fallback)")},getIntegrityToken:async()=>{try{const i="react-app-nonce-"+Date.now(),r=(await yp.getIntegrityToken({nonce:i})).token;return console.log("Integrity Token:",r),alert("Got Integrity Token! Check Logcat in Android Studio."),r}catch(i){return console.error("Error getting integrity token:",i),alert("Error: "+i),null}}},Jh={[te.CLASSIC]:"Classic",[te.LEVEL_THEMED]:"Themed",[te.LEVEL_MIND_MATCH]:"Mind",[te.LEVEL_SYNONYMS]:"Synonyms",[te.LEVEL_EMOJI]:"Emoji",[te.LEVEL_EXPANSION]:"Expansion"},Mp=({isOpen:i,onClose:n,onMainMenu:r,isMusicOn:l,toggleMusic:c,enabledModes:d,toggleMode:S,onSelectMode:E,hintsEnabled:h,setHintsEnabled:T,isAutoPlaying:R,onToggleAutoPlay:f,onShowTutorial:C,onResetProgress:L,categories:v=[],privacyOptionsRequired:V,onShowPrivacyOptions:B})=>{if(!i)return null;const I=async()=>{if(B){B();return}try{await Lp.showPrivacyOptionsForm()}catch(b){console.error("Error showing privacy options form:",b)}};return N.jsx("div",{className:"absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald",children:N.jsxs("div",{className:"w-full max-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col gap-3 overflow-hidden max-h-[95vh]",children:[N.jsxs("div",{className:"relative flex justify-center items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[N.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-widest italic",children:"SETTINGS"}),N.jsx("button",{className:"absolute right-0 text-zinc-400 hover:text-neon-red transition-colors p-1",onClick:n,children:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),N.jsxs("div",{className:"grid grid-cols-2 gap-2 shrink-0",children:[N.jsx("button",{onClick:r,className:"col-span-2 py-2.5 bg-neon-red border-2 border-white text-white font-black font-oswald text-lg uppercase rounded-medium hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(255,7,58,0.4)]",children:"EXIT TO MAIN MENU"}),N.jsxs("button",{onClick:c,className:`p-1 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${l?"bg-zinc-900 border-neon-green text-neon-green shadow-[0_0_10px_#00FF66]":"bg-black border-zinc-800 text-zinc-600"}`,children:["SOUND: ",l?"ON":"OFF"]}),N.jsxs("button",{onClick:()=>T(!h),className:`p-1 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${h?"bg-zinc-900 border-neon-blue text-neon-blue shadow-[0_0_10px_#00E5FF]":"bg-black border-zinc-800 text-zinc-600"}`,children:["HINTS: ",h?"ON":"OFF"]})]}),v.length>0&&N.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[N.jsx("h3",{className:"text-neon-pink font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(255,31,191,0.5)]",children:"CURRENT GOALS"}),N.jsx("div",{className:"grid grid-cols-2 gap-1.5 py-1",children:v.map(b=>N.jsxs("div",{className:`px-2 py-1.5 rounded-small border flex items-center justify-between text-[10px] font-bold uppercase font-oswald tracking-tighter transition-all ${b.isSolved?"bg-neon-green/10 border-neon-green text-neon-green shadow-[0_0_5px_#00FF66]":"bg-black border-zinc-700 text-zinc-300"}`,children:[N.jsx("span",{className:"truncate mr-1",children:b.name}),b.isSolved&&N.jsx("span",{className:"text-xs",children:"✓"})]},b.name))})]}),N.jsxs("div",{className:"flex flex-col gap-1 shrink-0 overflow-y-auto no-scrollbar",children:[N.jsx("h3",{className:"text-neon-aqua font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(0,255,255,0.5)] sticky top-0 bg-zinc-950 z-10",children:"GAME MODES"}),N.jsx("div",{className:"grid grid-cols-3 gap-1.5 pt-1",children:Object.keys(Jh).map(b=>{const x=d.includes(b);return N.jsxs("button",{onClick:()=>S(b),className:`flex flex-col items-center justify-center p-1 rounded-medium border-2 transition-all h-12 ${x?"bg-zinc-900 border-neon-aqua text-white shadow-[0_0_8px_rgba(0,255,246,0.3)]":"bg-black border-zinc-800 text-zinc-600"}`,children:[N.jsx("span",{className:"font-bold font-oswald text-[9px] uppercase leading-none mb-0.5 text-center",children:Jh[b]}),N.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${x?"bg-neon-aqua shadow-[0_0_5px_#00FFF6]":"bg-zinc-800"}`})]},b)})})]}),N.jsxs("div",{className:"mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800 shrink-0",children:[N.jsx("div",{className:"grid grid-cols-1 gap-2",children:N.jsx("button",{onClick:C,className:"py-2 bg-zinc-900 border border-neon-yellow text-neon-yellow rounded-medium font-bold text-[9px] font-oswald uppercase shadow-[0_0_8px_rgba(249,255,0,0.2)]",children:"HOW TO PLAY"})}),V&&N.jsx("button",{onClick:I,className:"py-2 bg-zinc-900 border border-zinc-600 text-zinc-400 rounded-medium font-bold text-[9px] font-oswald uppercase hover:text-white hover:border-white transition-all",children:"CONSENT"}),N.jsx("button",{onClick:L,className:"w-full py-2 bg-black border border-neon-red text-neon-red rounded-medium font-bold text-[10px] font-oswald uppercase shadow-[0_0_5px_rgba(255,7,58,0.2)]",children:"RESET PROGRESS"}),N.jsx("button",{onClick:n,className:"w-full py-3.5 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_20px_white]",children:"RESUME PLAY"})]})]})})};function Pp(i){if(typeof Proxy>"u")return i;const n=new Map,r=(...l)=>i(...l);return new Proxy(r,{get:(l,c)=>c==="create"?i:(n.has(c)||n.set(c,i(c)),n.get(c))})}function Ns(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}const yc=i=>Array.isArray(i);function Tm(i,n){if(!Array.isArray(n))return!1;const r=n.length;if(r!==i.length)return!1;for(let l=0;l<r;l++)if(n[l]!==i[l])return!1;return!0}function Ho(i){return typeof i=="string"||Array.isArray(i)}function _h(i){const n=[{},{}];return i==null||i.values.forEach((r,l)=>{n[0][l]=r.get(),n[1][l]=r.getVelocity()}),n}function Wc(i,n,r,l){if(typeof n=="function"){const[c,d]=_h(l);n=n(r!==void 0?r:i.custom,c,d)}if(typeof n=="string"&&(n=i.variants&&i.variants[n]),typeof n=="function"){const[c,d]=_h(l);n=n(r!==void 0?r:i.custom,c,d)}return n}function Is(i,n,r){const l=i.getProps();return Wc(l,n,r!==void 0?r:l.custom,i)}const Yc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],zc=["initial",...Yc],Uo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Bi=new Set(Uo),ga=i=>i*1e3,Na=i=>i/1e3,Dp={type:"spring",stiffness:500,damping:25,restSpeed:10},Bp=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),Hp={type:"keyframes",duration:.8},vp={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},bp=(i,{keyframes:n})=>n.length>2?Hp:Bi.has(i)?i.startsWith("scale")?Bp(n[1]):Dp:vp;function Jc(i,n){return i?i[n]||i.default||i:void 0}const Gp={useManualTiming:!1},Fp=i=>i!==null;function ys(i,{repeat:n,repeatType:r="loop"},l){const c=i.filter(Fp),d=n&&r!=="loop"&&n%2===1?0:c.length-1;return!d||l===void 0?c[d]:l}const Ht=i=>i;let mm=Ht;function Up(i){let n=new Set,r=new Set,l=!1,c=!1;const d=new WeakSet;let S={delta:0,timestamp:0,isProcessing:!1};function E(T){d.has(T)&&(h.schedule(T),i()),T(S)}const h={schedule:(T,R=!1,f=!1)=>{const L=f&&l?n:r;return R&&d.add(T),L.has(T)||L.add(T),T},cancel:T=>{r.delete(T),d.delete(T)},process:T=>{if(S=T,l){c=!0;return}l=!0,[n,r]=[r,n],n.forEach(E),n.clear(),l=!1,c&&(c=!1,h.process(T))}};return h}const rs=["read","resolveKeyframes","update","preRender","render","postRender"],kp=40;function Rm(i,n){let r=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>r=!0,S=rs.reduce((I,b)=>(I[b]=Up(d),I),{}),{read:E,resolveKeyframes:h,update:T,preRender:R,render:f,postRender:C}=S,L=()=>{const I=performance.now();r=!1,c.delta=l?1e3/60:Math.max(Math.min(I-c.timestamp,kp),1),c.timestamp=I,c.isProcessing=!0,E.process(c),h.process(c),T.process(c),R.process(c),f.process(c),C.process(c),c.isProcessing=!1,r&&n&&(l=!1,i(L))},v=()=>{r=!0,l=!0,c.isProcessing||i(L)};return{schedule:rs.reduce((I,b)=>{const x=S[b];return I[b]=(J,_=!1,$=!1)=>(r||v(),x.schedule(J,_,$)),I},{}),cancel:I=>{for(let b=0;b<rs.length;b++)S[rs[b]].cancel(I)},state:c,steps:S}}const{schedule:He,cancel:Qa,state:st,steps:lc}=Rm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ht,!0),fm=(i,n,r)=>(((1-3*r+3*n)*i+(3*r-6*n))*i+3*n)*i,wp=1e-7,Vp=12;function xp(i,n,r,l,c){let d,S,E=0;do S=n+(r-n)/2,d=fm(S,l,c)-i,d>0?r=S:n=S;while(Math.abs(d)>wp&&++E<Vp);return S}function ko(i,n,r,l){if(i===n&&r===l)return Ht;const c=d=>xp(d,0,1,i,r);return d=>d===0||d===1?d:fm(c(d),n,l)}const Cm=i=>n=>n<=.5?i(2*n)/2:(2-i(2*(1-n)))/2,Om=i=>n=>1-i(1-n),pm=ko(.33,1.53,.69,.99),_c=Om(pm),gm=Cm(_c),Nm=i=>(i*=2)<1?.5*_c(i):.5*(2-Math.pow(2,-10*(i-1))),jc=i=>1-Math.sin(Math.acos(i)),Im=Om(jc),ym=Cm(jc),Lm=i=>/^0[^.\s]+$/u.test(i);function Kp(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||Lm(i):!0}const Mm=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),Pm=i=>n=>typeof n=="string"&&n.startsWith(i),Dm=Pm("--"),Wp=Pm("var(--"),Zc=i=>Wp(i)?Yp.test(i.split("/*")[0].trim()):!1,Yp=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,zp=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Jp(i){const n=zp.exec(i);if(!n)return[,];const[,r,l,c]=n;return[`--${r??l}`,c]}function Bm(i,n,r=1){const[l,c]=Jp(i);if(!l)return;const d=window.getComputedStyle(n).getPropertyValue(l);if(d){const S=d.trim();return Mm(S)?parseFloat(S):S}return Zc(c)?Bm(c,n,r+1):c}const Ia=(i,n,r)=>r>n?n:r<i?i:r,yn={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},vo={...yn,transform:i=>Ia(0,1,i)},ss={...yn,default:1},wo=i=>({test:n=>typeof n=="string"&&n.endsWith(i)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${i}`}),qa=wo("deg"),ta=wo("%"),ie=wo("px"),_p=wo("vh"),jp=wo("vw"),jh={...ta,parse:i=>ta.parse(i)/100,transform:i=>ta.transform(i*100)},Zp=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Zh=i=>i===yn||i===ie,Xh=(i,n)=>parseFloat(i.split(", ")[n]),qh=(i,n)=>(r,{transform:l})=>{if(l==="none"||!l)return 0;const c=l.match(/^matrix3d\((.+)\)$/u);if(c)return Xh(c[1],n);{const d=l.match(/^matrix\((.+)\)$/u);return d?Xh(d[1],i):0}},Xp=new Set(["x","y","z"]),qp=Uo.filter(i=>!Xp.has(i));function Qp(i){const n=[];return qp.forEach(r=>{const l=i.getValue(r);l!==void 0&&(n.push([r,l.get()]),l.set(r.startsWith("scale")?1:0))}),n}const gn={width:({x:i},{paddingLeft:n="0",paddingRight:r="0"})=>i.max-i.min-parseFloat(n)-parseFloat(r),height:({y:i},{paddingTop:n="0",paddingBottom:r="0"})=>i.max-i.min-parseFloat(n)-parseFloat(r),top:(i,{top:n})=>parseFloat(n),left:(i,{left:n})=>parseFloat(n),bottom:({y:i},{top:n})=>parseFloat(n)+(i.max-i.min),right:({x:i},{left:n})=>parseFloat(n)+(i.max-i.min),x:qh(4,13),y:qh(5,14)};gn.translateX=gn.x;gn.translateY=gn.y;const Hm=i=>n=>n.test(i),$p={test:i=>i==="auto",parse:i=>i},vm=[yn,ie,ta,qa,jp,_p,$p],Qh=i=>vm.find(Hm(i)),Mi=new Set;let Lc=!1,Mc=!1;function bm(){if(Mc){const i=Array.from(Mi).filter(l=>l.needsMeasurement),n=new Set(i.map(l=>l.element)),r=new Map;n.forEach(l=>{const c=Qp(l);c.length&&(r.set(l,c),l.render())}),i.forEach(l=>l.measureInitialState()),n.forEach(l=>{l.render();const c=r.get(l);c&&c.forEach(([d,S])=>{var E;(E=l.getValue(d))===null||E===void 0||E.set(S)})}),i.forEach(l=>l.measureEndState()),i.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Mc=!1,Lc=!1,Mi.forEach(i=>i.complete()),Mi.clear()}function Gm(){Mi.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Mc=!0)})}function eg(){Gm(),bm()}class Xc{constructor(n,r,l,c,d,S=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...n],this.onComplete=r,this.name=l,this.motionValue=c,this.element=d,this.isAsync=S}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Mi.add(this),Lc||(Lc=!0,He.read(Gm),He.resolveKeyframes(bm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:r,element:l,motionValue:c}=this;for(let d=0;d<n.length;d++)if(n[d]===null)if(d===0){const S=c==null?void 0:c.get(),E=n[n.length-1];if(S!==void 0)n[0]=S;else if(l&&r){const h=l.readValue(r,E);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=E),c&&S===void 0&&c.set(n[0])}else n[d]=n[d-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Mi.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Mi.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Mo=i=>Math.round(i*1e5)/1e5,qc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function tg(i){return i==null}const ag=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Qc=(i,n)=>r=>!!(typeof r=="string"&&ag.test(r)&&r.startsWith(i)||n&&!tg(r)&&Object.prototype.hasOwnProperty.call(r,n)),Fm=(i,n,r)=>l=>{if(typeof l!="string")return l;const[c,d,S,E]=l.match(qc);return{[i]:parseFloat(c),[n]:parseFloat(d),[r]:parseFloat(S),alpha:E!==void 0?parseFloat(E):1}},ig=i=>Ia(0,255,i),uc={...yn,transform:i=>Math.round(ig(i))},yi={test:Qc("rgb","red"),parse:Fm("red","green","blue"),transform:({red:i,green:n,blue:r,alpha:l=1})=>"rgba("+uc.transform(i)+", "+uc.transform(n)+", "+uc.transform(r)+", "+Mo(vo.transform(l))+")"};function ng(i){let n="",r="",l="",c="";return i.length>5?(n=i.substring(1,3),r=i.substring(3,5),l=i.substring(5,7),c=i.substring(7,9)):(n=i.substring(1,2),r=i.substring(2,3),l=i.substring(3,4),c=i.substring(4,5),n+=n,r+=r,l+=l,c+=c),{red:parseInt(n,16),green:parseInt(r,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const Pc={test:Qc("#"),parse:ng,transform:yi.transform},mn={test:Qc("hsl","hue"),parse:Fm("hue","saturation","lightness"),transform:({hue:i,saturation:n,lightness:r,alpha:l=1})=>"hsla("+Math.round(i)+", "+ta.transform(Mo(n))+", "+ta.transform(Mo(r))+", "+Mo(vo.transform(l))+")"},St={test:i=>yi.test(i)||Pc.test(i)||mn.test(i),parse:i=>yi.test(i)?yi.parse(i):mn.test(i)?mn.parse(i):Pc.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?yi.transform(i):mn.transform(i)},og=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function rg(i){var n,r;return isNaN(i)&&typeof i=="string"&&(((n=i.match(qc))===null||n===void 0?void 0:n.length)||0)+(((r=i.match(og))===null||r===void 0?void 0:r.length)||0)>0}const Um="number",km="color",sg="var",lg="var(",$h="${}",ug=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bo(i){const n=i.toString(),r=[],l={color:[],number:[],var:[]},c=[];let d=0;const E=n.replace(ug,h=>(St.test(h)?(l.color.push(d),c.push(km),r.push(St.parse(h))):h.startsWith(lg)?(l.var.push(d),c.push(sg),r.push(h)):(l.number.push(d),c.push(Um),r.push(parseFloat(h))),++d,$h)).split($h);return{values:r,split:E,indexes:l,types:c}}function wm(i){return bo(i).values}function Vm(i){const{split:n,types:r}=bo(i),l=n.length;return c=>{let d="";for(let S=0;S<l;S++)if(d+=n[S],c[S]!==void 0){const E=r[S];E===Um?d+=Mo(c[S]):E===km?d+=St.transform(c[S]):d+=c[S]}return d}}const cg=i=>typeof i=="number"?0:i;function Sg(i){const n=wm(i);return Vm(i)(n.map(cg))}const $a={test:rg,parse:wm,createTransformer:Vm,getAnimatableNone:Sg},dg=new Set(["brightness","contrast","saturate","opacity"]);function Ag(i){const[n,r]=i.slice(0,-1).split("(");if(n==="drop-shadow")return i;const[l]=r.match(qc)||[];if(!l)return i;const c=r.replace(l,"");let d=dg.has(n)?1:0;return l!==r&&(d*=100),n+"("+d+c+")"}const Eg=/\b([a-z-]*)\(.*?\)/gu,Dc={...$a,getAnimatableNone:i=>{const n=i.match(Eg);return n?n.map(Ag).join(" "):i}},hg={borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,backgroundPositionX:ie,backgroundPositionY:ie},Tg={rotate:qa,rotateX:qa,rotateY:qa,rotateZ:qa,scale:ss,scaleX:ss,scaleY:ss,scaleZ:ss,skew:qa,skewX:qa,skewY:qa,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:vo,originX:jh,originY:jh,originZ:ie},eT={...yn,transform:Math.round},$c={...hg,...Tg,zIndex:eT,size:ie,fillOpacity:vo,strokeOpacity:vo,numOctaves:eT},mg={...$c,color:St,backgroundColor:St,outlineColor:St,fill:St,stroke:St,borderColor:St,borderTopColor:St,borderRightColor:St,borderBottomColor:St,borderLeftColor:St,filter:Dc,WebkitFilter:Dc},eS=i=>mg[i];function xm(i,n){let r=eS(i);return r!==Dc&&(r=$a),r.getAnimatableNone?r.getAnimatableNone(n):void 0}const Rg=new Set(["auto","none","0"]);function fg(i,n,r){let l=0,c;for(;l<i.length&&!c;){const d=i[l];typeof d=="string"&&!Rg.has(d)&&bo(d).values.length&&(c=i[l]),l++}if(c&&r)for(const d of n)i[d]=xm(r,c)}class Km extends Xc{constructor(n,r,l,c,d){super(n,r,l,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:r,name:l}=this;if(!r||!r.current)return;super.readKeyframes();for(let h=0;h<n.length;h++){let T=n[h];if(typeof T=="string"&&(T=T.trim(),Zc(T))){const R=Bm(T,r.current);R!==void 0&&(n[h]=R),h===n.length-1&&(this.finalKeyframe=T)}}if(this.resolveNoneKeyframes(),!Zp.has(l)||n.length!==2)return;const[c,d]=n,S=Qh(c),E=Qh(d);if(S!==E)if(Zh(S)&&Zh(E))for(let h=0;h<n.length;h++){const T=n[h];typeof T=="string"&&(n[h]=parseFloat(T))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:r}=this,l=[];for(let c=0;c<n.length;c++)Kp(n[c])&&l.push(c);l.length&&fg(n,l,r)}measureInitialState(){const{element:n,unresolvedKeyframes:r,name:l}=this;if(!n||!n.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=gn[l](n.measureViewportBox(),window.getComputedStyle(n.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&n.getValue(l,c).jump(c,!1)}measureEndState(){var n;const{element:r,name:l,unresolvedKeyframes:c}=this;if(!r||!r.current)return;const d=r.getValue(l);d&&d.jump(this.measuredOrigin,!1);const S=c.length-1,E=c[S];c[S]=gn[l](r.measureViewportBox(),window.getComputedStyle(r.current)),E!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=E),!((n=this.removedTransforms)===null||n===void 0)&&n.length&&this.removedTransforms.forEach(([h,T])=>{r.getValue(h).set(T)}),this.resolveNoneKeyframes()}}function tS(i){return typeof i=="function"}let Ss;function Cg(){Ss=void 0}const aa={now:()=>(Ss===void 0&&aa.set(st.isProcessing||Gp.useManualTiming?st.timestamp:performance.now()),Ss),set:i=>{Ss=i,queueMicrotask(Cg)}},tT=(i,n)=>n==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&($a.test(i)||i==="0")&&!i.startsWith("url("));function Og(i){const n=i[0];if(i.length===1)return!0;for(let r=0;r<i.length;r++)if(i[r]!==n)return!0}function pg(i,n,r,l){const c=i[0];if(c===null)return!1;if(n==="display"||n==="visibility")return!0;const d=i[i.length-1],S=tT(c,n),E=tT(d,n);return!S||!E?!1:Og(i)||(r==="spring"||tS(r))&&l}const gg=40;class Wm{constructor({autoplay:n=!0,delay:r=0,type:l="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:S="loop",...E}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=aa.now(),this.options={autoplay:n,delay:r,type:l,repeat:c,repeatDelay:d,repeatType:S,...E},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>gg?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&eg(),this._resolved}onKeyframesResolved(n,r){this.resolvedAt=aa.now(),this.hasAttemptedResolve=!0;const{name:l,type:c,velocity:d,delay:S,onComplete:E,onUpdate:h,isGenerator:T}=this.options;if(!T&&!pg(n,l,c,d))if(S)this.options.duration=0;else{h==null||h(ys(n,this.options,r)),E==null||E(),this.resolveFinishedPromise();return}const R=this.initPlayback(n,r);R!==!1&&(this._resolved={keyframes:n,finalKeyframe:r,...R},this.onPostResolved())}onPostResolved(){}then(n,r){return this.currentFinishedPromise.then(n,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(n=>{this.resolveFinishedPromise=n})}}const Nn=(i,n,r)=>{const l=n-i;return l===0?1:(r-i)/l},Ym=(i,n,r=10)=>{let l="";const c=Math.max(Math.round(n/r),2);for(let d=0;d<c;d++)l+=i(Nn(0,c-1,d))+", ";return`linear(${l.substring(0,l.length-2)})`};function zm(i,n){return n?i*(1e3/n):0}const Ng=5;function Jm(i,n,r){const l=Math.max(n-Ng,0);return zm(r-i(l),n-l)}const ke={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},cc=.001;function Ig({duration:i=ke.duration,bounce:n=ke.bounce,velocity:r=ke.velocity,mass:l=ke.mass}){let c,d,S=1-n;S=Ia(ke.minDamping,ke.maxDamping,S),i=Ia(ke.minDuration,ke.maxDuration,Na(i)),S<1?(c=T=>{const R=T*S,f=R*i,C=R-r,L=Bc(T,S),v=Math.exp(-f);return cc-C/L*v},d=T=>{const f=T*S*i,C=f*r+r,L=Math.pow(S,2)*Math.pow(T,2)*i,v=Math.exp(-f),V=Bc(Math.pow(T,2),S);return(-c(T)+cc>0?-1:1)*((C-L)*v)/V}):(c=T=>{const R=Math.exp(-T*i),f=(T-r)*i+1;return-cc+R*f},d=T=>{const R=Math.exp(-T*i),f=(r-T)*(i*i);return R*f});const E=5/i,h=Lg(c,d,E);if(i=ga(i),isNaN(h))return{stiffness:ke.stiffness,damping:ke.damping,duration:i};{const T=Math.pow(h,2)*l;return{stiffness:T,damping:S*2*Math.sqrt(l*T),duration:i}}}const yg=12;function Lg(i,n,r){let l=r;for(let c=1;c<yg;c++)l=l-i(l)/n(l);return l}function Bc(i,n){return i*Math.sqrt(1-n*n)}const Hc=2e4;function _m(i){let n=0;const r=50;let l=i.next(n);for(;!l.done&&n<Hc;)n+=r,l=i.next(n);return n>=Hc?1/0:n}const Mg=["duration","bounce"],Pg=["stiffness","damping","mass"];function aT(i,n){return n.some(r=>i[r]!==void 0)}function Dg(i){let n={velocity:ke.velocity,stiffness:ke.stiffness,damping:ke.damping,mass:ke.mass,isResolvedFromDuration:!1,...i};if(!aT(i,Pg)&&aT(i,Mg))if(i.visualDuration){const r=i.visualDuration,l=2*Math.PI/(r*1.2),c=l*l,d=2*Ia(.05,1,1-i.bounce)*Math.sqrt(c);n={...n,mass:ke.mass,stiffness:c,damping:d}}else{const r=Ig(i);n={...n,...r,mass:ke.mass},n.isResolvedFromDuration=!0}return n}function jm(i=ke.visualDuration,n=ke.bounce){const r=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:n}:i;let{restSpeed:l,restDelta:c}=r;const d=r.keyframes[0],S=r.keyframes[r.keyframes.length-1],E={done:!1,value:d},{stiffness:h,damping:T,mass:R,duration:f,velocity:C,isResolvedFromDuration:L}=Dg({...r,velocity:-Na(r.velocity||0)}),v=C||0,V=T/(2*Math.sqrt(h*R)),B=S-d,I=Na(Math.sqrt(h/R)),b=Math.abs(B)<5;l||(l=b?ke.restSpeed.granular:ke.restSpeed.default),c||(c=b?ke.restDelta.granular:ke.restDelta.default);let x;if(V<1){const _=Bc(I,V);x=$=>{const X=Math.exp(-V*I*$);return S-X*((v+V*I*B)/_*Math.sin(_*$)+B*Math.cos(_*$))}}else if(V===1)x=_=>S-Math.exp(-I*_)*(B+(v+I*B)*_);else{const _=I*Math.sqrt(V*V-1);x=$=>{const X=Math.exp(-V*I*$),z=Math.min(_*$,300);return S-X*((v+V*I*B)*Math.sinh(z)+_*B*Math.cosh(z))/_}}const J={calculatedDuration:L&&f||null,next:_=>{const $=x(_);if(L)E.done=_>=f;else{let X=0;V<1&&(X=_===0?ga(v):Jm(x,_,$));const z=Math.abs(X)<=l,oe=Math.abs(S-$)<=c;E.done=z&&oe}return E.value=E.done?S:$,E},toString:()=>{const _=Math.min(_m(J),Hc),$=Ym(X=>J.next(_*X).value,_,30);return _+"ms "+$}};return J}function iT({keyframes:i,velocity:n=0,power:r=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:S,min:E,max:h,restDelta:T=.5,restSpeed:R}){const f=i[0],C={done:!1,value:f},L=z=>E!==void 0&&z<E||h!==void 0&&z>h,v=z=>E===void 0?h:h===void 0||Math.abs(E-z)<Math.abs(h-z)?E:h;let V=r*n;const B=f+V,I=S===void 0?B:S(B);I!==B&&(V=I-f);const b=z=>-V*Math.exp(-z/l),x=z=>I+b(z),J=z=>{const oe=b(z),le=x(z);C.done=Math.abs(oe)<=T,C.value=C.done?I:le};let _,$;const X=z=>{L(C.value)&&(_=z,$=jm({keyframes:[C.value,v(C.value)],velocity:Jm(x,z,C.value),damping:c,stiffness:d,restDelta:T,restSpeed:R}))};return X(0),{calculatedDuration:null,next:z=>{let oe=!1;return!$&&_===void 0&&(oe=!0,J(z),X(z)),_!==void 0&&z>=_?$.next(z-_):(!oe&&J(z),C)}}}const Bg=ko(.42,0,1,1),Hg=ko(0,0,.58,1),Zm=ko(.42,0,.58,1),vg=i=>Array.isArray(i)&&typeof i[0]!="number",aS=i=>Array.isArray(i)&&typeof i[0]=="number",bg={linear:Ht,easeIn:Bg,easeInOut:Zm,easeOut:Hg,circIn:jc,circInOut:ym,circOut:Im,backIn:_c,backInOut:gm,backOut:pm,anticipate:Nm},nT=i=>{if(aS(i)){mm(i.length===4);const[n,r,l,c]=i;return ko(n,r,l,c)}else if(typeof i=="string")return bg[i];return i},Gg=(i,n)=>r=>n(i(r)),Vo=(...i)=>i.reduce(Gg),Ge=(i,n,r)=>i+(n-i)*r;function Sc(i,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?i+(n-i)*6*r:r<1/2?n:r<2/3?i+(n-i)*(2/3-r)*6:i}function Fg({hue:i,saturation:n,lightness:r,alpha:l}){i/=360,n/=100,r/=100;let c=0,d=0,S=0;if(!n)c=d=S=r;else{const E=r<.5?r*(1+n):r+n-r*n,h=2*r-E;c=Sc(h,E,i+1/3),d=Sc(h,E,i),S=Sc(h,E,i-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(S*255),alpha:l}}function Ts(i,n){return r=>r>0?n:i}const dc=(i,n,r)=>{const l=i*i,c=r*(n*n-l)+l;return c<0?0:Math.sqrt(c)},Ug=[Pc,yi,mn],kg=i=>Ug.find(n=>n.test(i));function oT(i){const n=kg(i);if(!n)return!1;let r=n.parse(i);return n===mn&&(r=Fg(r)),r}const rT=(i,n)=>{const r=oT(i),l=oT(n);if(!r||!l)return Ts(i,n);const c={...r};return d=>(c.red=dc(r.red,l.red,d),c.green=dc(r.green,l.green,d),c.blue=dc(r.blue,l.blue,d),c.alpha=Ge(r.alpha,l.alpha,d),yi.transform(c))},vc=new Set(["none","hidden"]);function wg(i,n){return vc.has(i)?r=>r<=0?i:n:r=>r>=1?n:i}function Vg(i,n){return r=>Ge(i,n,r)}function iS(i){return typeof i=="number"?Vg:typeof i=="string"?Zc(i)?Ts:St.test(i)?rT:Wg:Array.isArray(i)?Xm:typeof i=="object"?St.test(i)?rT:xg:Ts}function Xm(i,n){const r=[...i],l=r.length,c=i.map((d,S)=>iS(d)(d,n[S]));return d=>{for(let S=0;S<l;S++)r[S]=c[S](d);return r}}function xg(i,n){const r={...i,...n},l={};for(const c in r)i[c]!==void 0&&n[c]!==void 0&&(l[c]=iS(i[c])(i[c],n[c]));return c=>{for(const d in l)r[d]=l[d](c);return r}}function Kg(i,n){var r;const l=[],c={color:0,var:0,number:0};for(let d=0;d<n.values.length;d++){const S=n.types[d],E=i.indexes[S][c[S]],h=(r=i.values[E])!==null&&r!==void 0?r:0;l[d]=h,c[S]++}return l}const Wg=(i,n)=>{const r=$a.createTransformer(n),l=bo(i),c=bo(n);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?vc.has(i)&&!c.values.length||vc.has(n)&&!l.values.length?wg(i,n):Vo(Xm(Kg(l,c),c.values),r):Ts(i,n)};function qm(i,n,r){return typeof i=="number"&&typeof n=="number"&&typeof r=="number"?Ge(i,n,r):iS(i)(i,n)}function Yg(i,n,r){const l=[],c=r||qm,d=i.length-1;for(let S=0;S<d;S++){let E=c(i[S],i[S+1]);if(n){const h=Array.isArray(n)?n[S]||Ht:n;E=Vo(h,E)}l.push(E)}return l}function zg(i,n,{clamp:r=!0,ease:l,mixer:c}={}){const d=i.length;if(mm(d===n.length),d===1)return()=>n[0];if(d===2&&i[0]===i[1])return()=>n[1];i[0]>i[d-1]&&(i=[...i].reverse(),n=[...n].reverse());const S=Yg(n,l,c),E=S.length,h=T=>{let R=0;if(E>1)for(;R<i.length-2&&!(T<i[R+1]);R++);const f=Nn(i[R],i[R+1],T);return S[R](f)};return r?T=>h(Ia(i[0],i[d-1],T)):h}function Jg(i,n){const r=i[i.length-1];for(let l=1;l<=n;l++){const c=Nn(0,n,l);i.push(Ge(r,1,c))}}function _g(i){const n=[0];return Jg(n,i.length-1),n}function jg(i,n){return i.map(r=>r*n)}function Zg(i,n){return i.map(()=>n||Zm).splice(0,i.length-1)}function ms({duration:i=300,keyframes:n,times:r,ease:l="easeInOut"}){const c=vg(l)?l.map(nT):nT(l),d={done:!1,value:n[0]},S=jg(r&&r.length===n.length?r:_g(n),i),E=zg(S,n,{ease:Array.isArray(c)?c:Zg(n,c)});return{calculatedDuration:i,next:h=>(d.value=E(h),d.done=h>=i,d)}}const Xg=i=>{const n=({timestamp:r})=>i(r);return{start:()=>He.update(n,!0),stop:()=>Qa(n),now:()=>st.isProcessing?st.timestamp:aa.now()}},qg={decay:iT,inertia:iT,tween:ms,keyframes:ms,spring:jm},Qg=i=>i/100;class nS extends Wm{constructor(n){super(n),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:r,motionValue:l,element:c,keyframes:d}=this.options,S=(c==null?void 0:c.KeyframeResolver)||Xc,E=(h,T)=>this.onKeyframesResolved(h,T);this.resolver=new S(d,E,r,l,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(n){const{type:r="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:d,velocity:S=0}=this.options,E=tS(r)?r:qg[r]||ms;let h,T;E!==ms&&typeof n[0]!="number"&&(h=Vo(Qg,qm(n[0],n[1])),n=[0,100]);const R=E({...this.options,keyframes:n});d==="mirror"&&(T=E({...this.options,keyframes:[...n].reverse(),velocity:-S})),R.calculatedDuration===null&&(R.calculatedDuration=_m(R));const{calculatedDuration:f}=R,C=f+c,L=C*(l+1)-c;return{generator:R,mirroredGenerator:T,mapPercentToKeyframes:h,calculatedDuration:f,resolvedDuration:C,totalDuration:L}}onPostResolved(){const{autoplay:n=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!n?this.pause():this.state=this.pendingPlayState}tick(n,r=!1){const{resolved:l}=this;if(!l){const{keyframes:z}=this.options;return{done:!0,value:z[z.length-1]}}const{finalKeyframe:c,generator:d,mirroredGenerator:S,mapPercentToKeyframes:E,keyframes:h,calculatedDuration:T,totalDuration:R,resolvedDuration:f}=l;if(this.startTime===null)return d.next(0);const{delay:C,repeat:L,repeatType:v,repeatDelay:V,onUpdate:B}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-R/this.speed,this.startTime)),r?this.currentTime=n:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(n-this.startTime)*this.speed;const I=this.currentTime-C*(this.speed>=0?1:-1),b=this.speed>=0?I<0:I>R;this.currentTime=Math.max(I,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=R);let x=this.currentTime,J=d;if(L){const z=Math.min(this.currentTime,R)/f;let oe=Math.floor(z),le=z%1;!le&&z>=1&&(le=1),le===1&&oe--,oe=Math.min(oe,L+1),!!(oe%2)&&(v==="reverse"?(le=1-le,V&&(le-=V/f)):v==="mirror"&&(J=S)),x=Ia(0,1,le)*f}const _=b?{done:!1,value:h[0]}:J.next(x);E&&(_.value=E(_.value));let{done:$}=_;!b&&T!==null&&($=this.speed>=0?this.currentTime>=R:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&$);return X&&c!==void 0&&(_.value=ys(h,this.options,c)),B&&B(_.value),X&&this.finish(),_}get duration(){const{resolved:n}=this;return n?Na(n.calculatedDuration):0}get time(){return Na(this.currentTime)}set time(n){n=ga(n),this.currentTime=n,this.holdTime!==null||this.speed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.speed)}get speed(){return this.playbackSpeed}set speed(n){const r=this.playbackSpeed!==n;this.playbackSpeed=n,r&&(this.time=Na(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:n=Xg,onPlay:r,startTime:l}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),r&&r();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=l??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var n;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(n=this.currentTime)!==null&&n!==void 0?n:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:n}=this.options;n&&n()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}}const $g=new Set(["opacity","clipPath","filter","transform"]);function oS(i){let n;return()=>(n===void 0&&(n=i()),n)}const eN={linearEasing:void 0};function tN(i,n){const r=oS(i);return()=>{var l;return(l=eN[n])!==null&&l!==void 0?l:r()}}const Rs=tN(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Qm(i){return!!(typeof i=="function"&&Rs()||!i||typeof i=="string"&&(i in bc||Rs())||aS(i)||Array.isArray(i)&&i.every(Qm))}const No=([i,n,r,l])=>`cubic-bezier(${i}, ${n}, ${r}, ${l})`,bc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:No([0,.65,.55,1]),circOut:No([.55,0,1,.45]),backIn:No([.31,.01,.66,-.59]),backOut:No([.33,1.53,.69,.99])};function $m(i,n){if(i)return typeof i=="function"&&Rs()?Ym(i,n):aS(i)?No(i):Array.isArray(i)?i.map(r=>$m(r,n)||bc.easeOut):bc[i]}function aN(i,n,r,{delay:l=0,duration:c=300,repeat:d=0,repeatType:S="loop",ease:E="easeInOut",times:h}={}){const T={[n]:r};h&&(T.offset=h);const R=$m(E,c);return Array.isArray(R)&&(T.easing=R),i.animate(T,{delay:l,duration:c,easing:Array.isArray(R)?"linear":R,fill:"both",iterations:d+1,direction:S==="reverse"?"alternate":"normal"})}function sT(i,n){i.timeline=n,i.onfinish=null}const iN=oS(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),fs=10,nN=2e4;function oN(i){return tS(i.type)||i.type==="spring"||!Qm(i.ease)}function rN(i,n){const r=new nS({...n,keyframes:i,repeat:0,delay:0,isGenerator:!0});let l={done:!1,value:i[0]};const c=[];let d=0;for(;!l.done&&d<nN;)l=r.sample(d),c.push(l.value),d+=fs;return{times:void 0,keyframes:c,duration:d-fs,ease:"linear"}}const eR={anticipate:Nm,backInOut:gm,circInOut:ym};function sN(i){return i in eR}class lT extends Wm{constructor(n){super(n);const{name:r,motionValue:l,element:c,keyframes:d}=this.options;this.resolver=new Km(d,(S,E)=>this.onKeyframesResolved(S,E),r,l,c),this.resolver.scheduleResolve()}initPlayback(n,r){var l;let{duration:c=300,times:d,ease:S,type:E,motionValue:h,name:T,startTime:R}=this.options;if(!(!((l=h.owner)===null||l===void 0)&&l.current))return!1;if(typeof S=="string"&&Rs()&&sN(S)&&(S=eR[S]),oN(this.options)){const{onComplete:C,onUpdate:L,motionValue:v,element:V,...B}=this.options,I=rN(n,B);n=I.keyframes,n.length===1&&(n[1]=n[0]),c=I.duration,d=I.times,S=I.ease,E="keyframes"}const f=aN(h.owner.current,T,n,{...this.options,duration:c,times:d,ease:S});return f.startTime=R??this.calcStartTime(),this.pendingTimeline?(sT(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:C}=this.options;h.set(ys(n,this.options,r)),C&&C(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:c,times:d,type:E,ease:S,keyframes:n}}get duration(){const{resolved:n}=this;if(!n)return 0;const{duration:r}=n;return Na(r)}get time(){const{resolved:n}=this;if(!n)return 0;const{animation:r}=n;return Na(r.currentTime||0)}set time(n){const{resolved:r}=this;if(!r)return;const{animation:l}=r;l.currentTime=ga(n)}get speed(){const{resolved:n}=this;if(!n)return 1;const{animation:r}=n;return r.playbackRate}set speed(n){const{resolved:r}=this;if(!r)return;const{animation:l}=r;l.playbackRate=n}get state(){const{resolved:n}=this;if(!n)return"idle";const{animation:r}=n;return r.playState}get startTime(){const{resolved:n}=this;if(!n)return null;const{animation:r}=n;return r.startTime}attachTimeline(n){if(!this._resolved)this.pendingTimeline=n;else{const{resolved:r}=this;if(!r)return Ht;const{animation:l}=r;sT(l,n)}return Ht}play(){if(this.isStopped)return;const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:n}=this;if(!n)return;const{animation:r,keyframes:l,duration:c,type:d,ease:S,times:E}=n;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:T,onUpdate:R,onComplete:f,element:C,...L}=this.options,v=new nS({...L,keyframes:l,duration:c,type:d,ease:S,times:E,isGenerator:!0}),V=ga(this.time);T.setWithVelocity(v.sample(V-fs).value,v.sample(V).value,fs)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:n}=this;n&&n.animation.finish()}cancel(){const{resolved:n}=this;n&&n.animation.cancel()}static supports(n){const{motionValue:r,name:l,repeatDelay:c,repeatType:d,damping:S,type:E}=n;return iN()&&l&&$g.has(l)&&r&&r.owner&&r.owner.current instanceof HTMLElement&&!r.owner.getProps().onUpdate&&!c&&d!=="mirror"&&S!==0&&E!=="inertia"}}const lN=oS(()=>window.ScrollTimeline!==void 0);class uN{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}then(n,r){return Promise.all(this.animations).then(n).catch(r)}getAll(n){return this.animations[0][n]}setAll(n,r){for(let l=0;l<this.animations.length;l++)this.animations[l][n]=r}attachTimeline(n,r){const l=this.animations.map(c=>lN()&&c.attachTimeline?c.attachTimeline(n):r(c));return()=>{l.forEach((c,d)=>{c&&c(),this.animations[d].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get startTime(){return this.getAll("startTime")}get duration(){let n=0;for(let r=0;r<this.animations.length;r++)n=Math.max(n,this.animations[r].duration);return n}runAll(n){this.animations.forEach(r=>r[n]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function cN({when:i,delay:n,delayChildren:r,staggerChildren:l,staggerDirection:c,repeat:d,repeatType:S,repeatDelay:E,from:h,elapsed:T,...R}){return!!Object.keys(R).length}const rS=(i,n,r,l={},c,d)=>S=>{const E=Jc(l,i)||{},h=E.delay||l.delay||0;let{elapsed:T=0}=l;T=T-ga(h);let R={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:n.getVelocity(),...E,delay:-T,onUpdate:C=>{n.set(C),E.onUpdate&&E.onUpdate(C)},onComplete:()=>{S(),E.onComplete&&E.onComplete()},name:i,motionValue:n,element:d?void 0:c};cN(E)||(R={...R,...bp(i,R)}),R.duration&&(R.duration=ga(R.duration)),R.repeatDelay&&(R.repeatDelay=ga(R.repeatDelay)),R.from!==void 0&&(R.keyframes[0]=R.from);let f=!1;if((R.type===!1||R.duration===0&&!R.repeatDelay)&&(R.duration=0,R.delay===0&&(f=!0)),f&&!d&&n.get()!==void 0){const C=ys(R.keyframes,E);if(C!==void 0)return He.update(()=>{R.onUpdate(C),R.onComplete()}),new uN([])}return!d&&lT.supports(R)?new lT(R):new nS(R)},SN=i=>!!(i&&typeof i=="object"&&i.mix&&i.toValue),dN=i=>yc(i)?i[i.length-1]||0:i;function sS(i,n){i.indexOf(n)===-1&&i.push(n)}function lS(i,n){const r=i.indexOf(n);r>-1&&i.splice(r,1)}class uS{constructor(){this.subscriptions=[]}add(n){return sS(this.subscriptions,n),()=>lS(this.subscriptions,n)}notify(n,r,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,r,l);else for(let d=0;d<c;d++){const S=this.subscriptions[d];S&&S(n,r,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const uT=30,AN=i=>!isNaN(parseFloat(i));class EN{constructor(n,r={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(l,c=!0)=>{const d=aa.now();this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(n),this.owner=r.owner}setCurrent(n){this.current=n,this.updatedAt=aa.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=AN(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,r){this.events[n]||(this.events[n]=new uS);const l=this.events[n].add(r);return n==="change"?()=>{l(),He.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,r){this.passiveEffect=n,this.stopPassiveEffect=r}set(n,r=!0){!r||!this.passiveEffect?this.updateAndNotify(n,r):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,r,l){this.set(r),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-l}jump(n,r=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=aa.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>uT)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,uT);return zm(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(n){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=n(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Go(i,n){return new EN(i,n)}function hN(i,n,r){i.hasValue(n)?i.getValue(n).set(r):i.addValue(n,Go(r))}function TN(i,n){const r=Is(i,n);let{transitionEnd:l={},transition:c={},...d}=r||{};d={...d,...l};for(const S in d){const E=dN(d[S]);hN(i,S,E)}}const cS=i=>i.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),mN="framerAppearId",tR="data-"+cS(mN);function aR(i){return i.props[tR]}const dt=i=>!!(i&&i.getVelocity);function RN(i){return!!(dt(i)&&i.add)}function Gc(i,n){const r=i.getValue("willChange");if(RN(r))return r.add(n)}function fN({protectedKeys:i,needsAnimating:n},r){const l=i.hasOwnProperty(r)&&n[r]!==!0;return n[r]=!1,l}function iR(i,n,{delay:r=0,transitionOverride:l,type:c}={}){var d;let{transition:S=i.getDefaultTransition(),transitionEnd:E,...h}=n;l&&(S=l);const T=[],R=c&&i.animationState&&i.animationState.getState()[c];for(const f in h){const C=i.getValue(f,(d=i.latestValues[f])!==null&&d!==void 0?d:null),L=h[f];if(L===void 0||R&&fN(R,f))continue;const v={delay:r,...Jc(S||{},f)};let V=!1;if(window.MotionHandoffAnimation){const I=aR(i);if(I){const b=window.MotionHandoffAnimation(I,f,He);b!==null&&(v.startTime=b,V=!0)}}Gc(i,f),C.start(rS(f,C,L,i.shouldReduceMotion&&Bi.has(f)?{type:!1}:v,i,V));const B=C.animation;B&&T.push(B)}return E&&Promise.all(T).then(()=>{He.update(()=>{E&&TN(i,E)})}),T}function Fc(i,n,r={}){var l;const c=Is(i,n,r.type==="exit"?(l=i.presenceContext)===null||l===void 0?void 0:l.custom:void 0);let{transition:d=i.getDefaultTransition()||{}}=c||{};r.transitionOverride&&(d=r.transitionOverride);const S=c?()=>Promise.all(iR(i,c,r)):()=>Promise.resolve(),E=i.variantChildren&&i.variantChildren.size?(T=0)=>{const{delayChildren:R=0,staggerChildren:f,staggerDirection:C}=d;return CN(i,n,R+T,f,C,r)}:()=>Promise.resolve(),{when:h}=d;if(h){const[T,R]=h==="beforeChildren"?[S,E]:[E,S];return T().then(()=>R())}else return Promise.all([S(),E(r.delay)])}function CN(i,n,r=0,l=0,c=1,d){const S=[],E=(i.variantChildren.size-1)*l,h=c===1?(T=0)=>T*l:(T=0)=>E-T*l;return Array.from(i.variantChildren).sort(ON).forEach((T,R)=>{T.notify("AnimationStart",n),S.push(Fc(T,n,{...d,delay:r+h(R)}).then(()=>T.notify("AnimationComplete",n)))}),Promise.all(S)}function ON(i,n){return i.sortNodePosition(n)}function pN(i,n,r={}){i.notify("AnimationStart",n);let l;if(Array.isArray(n)){const c=n.map(d=>Fc(i,d,r));l=Promise.all(c)}else if(typeof n=="string")l=Fc(i,n,r);else{const c=typeof n=="function"?Is(i,n,r.custom):n;l=Promise.all(iR(i,c,r))}return l.then(()=>{i.notify("AnimationComplete",n)})}const gN=zc.length;function nR(i){if(!i)return;if(!i.isControllingVariants){const r=i.parent?nR(i.parent)||{}:{};return i.props.initial!==void 0&&(r.initial=i.props.initial),r}const n={};for(let r=0;r<gN;r++){const l=zc[r],c=i.props[l];(Ho(c)||c===!1)&&(n[l]=c)}return n}const NN=[...Yc].reverse(),IN=Yc.length;function yN(i){return n=>Promise.all(n.map(({animation:r,options:l})=>pN(i,r,l)))}function LN(i){let n=yN(i),r=cT(),l=!0;const c=h=>(T,R)=>{var f;const C=Is(i,R,h==="exit"?(f=i.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(C){const{transition:L,transitionEnd:v,...V}=C;T={...T,...V,...v}}return T};function d(h){n=h(i)}function S(h){const{props:T}=i,R=nR(i.parent)||{},f=[],C=new Set;let L={},v=1/0;for(let B=0;B<IN;B++){const I=NN[B],b=r[I],x=T[I]!==void 0?T[I]:R[I],J=Ho(x),_=I===h?b.isActive:null;_===!1&&(v=B);let $=x===R[I]&&x!==T[I]&&J;if($&&l&&i.manuallyAnimateOnMount&&($=!1),b.protectedKeys={...L},!b.isActive&&_===null||!x&&!b.prevProp||Ns(x)||typeof x=="boolean")continue;const X=MN(b.prevProp,x);let z=X||I===h&&b.isActive&&!$&&J||B>v&&J,oe=!1;const le=Array.isArray(x)?x:[x];let Ie=le.reduce(c(I),{});_===!1&&(Ie={});const{prevResolvedValues:Re={}}=b,be={...Re,...Ie},we=W=>{z=!0,C.has(W)&&(oe=!0,C.delete(W)),b.needsAnimating[W]=!0;const j=i.getValue(W);j&&(j.liveStyle=!1)};for(const W in be){const j=Ie[W],ce=Re[W];if(L.hasOwnProperty(W))continue;let me=!1;yc(j)&&yc(ce)?me=!Tm(j,ce):me=j!==ce,me?j!=null?we(W):C.add(W):j!==void 0&&C.has(W)?we(W):b.protectedKeys[W]=!0}b.prevProp=x,b.prevResolvedValues=Ie,b.isActive&&(L={...L,...Ie}),l&&i.blockInitialAnimation&&(z=!1),z&&(!($&&X)||oe)&&f.push(...le.map(W=>({animation:W,options:{type:I}})))}if(C.size){const B={};C.forEach(I=>{const b=i.getBaseTarget(I),x=i.getValue(I);x&&(x.liveStyle=!0),B[I]=b??null}),f.push({animation:B})}let V=!!f.length;return l&&(T.initial===!1||T.initial===T.animate)&&!i.manuallyAnimateOnMount&&(V=!1),l=!1,V?n(f):Promise.resolve()}function E(h,T){var R;if(r[h].isActive===T)return Promise.resolve();(R=i.variantChildren)===null||R===void 0||R.forEach(C=>{var L;return(L=C.animationState)===null||L===void 0?void 0:L.setActive(h,T)}),r[h].isActive=T;const f=S(h);for(const C in r)r[C].protectedKeys={};return f}return{animateChanges:S,setActive:E,setAnimateFunction:d,getState:()=>r,reset:()=>{r=cT(),l=!0}}}function MN(i,n){return typeof n=="string"?n!==i:Array.isArray(n)?!Tm(n,i):!1}function Ci(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function cT(){return{animate:Ci(!0),whileInView:Ci(),whileHover:Ci(),whileTap:Ci(),whileDrag:Ci(),whileFocus:Ci(),exit:Ci()}}class ei{constructor(n){this.isMounted=!1,this.node=n}update(){}}class PN extends ei{constructor(n){super(n),n.animationState||(n.animationState=LN(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Ns(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:r}=this.node.prevProps||{};n!==r&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)===null||n===void 0||n.call(this)}}let DN=0;class BN extends ei{constructor(){super(...arguments),this.id=DN++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:r}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===l)return;const c=this.node.animationState.setActive("exit",!n);r&&!n&&c.then(()=>r(this.id))}mount(){const{register:n}=this.node.presenceContext||{};n&&(this.unmount=n(this.id))}unmount(){}}const HN={animation:{Feature:PN},exit:{Feature:BN}},Xt={x:!1,y:!1};function oR(){return Xt.x||Xt.y}function vN(i,n,r){var l;if(i instanceof Element)return[i];if(typeof i=="string"){let c=document;const d=(l=void 0)!==null&&l!==void 0?l:c.querySelectorAll(i);return d?Array.from(d):[]}return Array.from(i)}function rR(i,n){const r=vN(i),l=new AbortController,c={passive:!0,...n,signal:l.signal};return[r,c,()=>l.abort()]}function ST(i){return n=>{n.pointerType==="touch"||oR()||i(n)}}function bN(i,n,r={}){const[l,c,d]=rR(i,r),S=ST(E=>{const{target:h}=E,T=n(E);if(typeof T!="function"||!h)return;const R=ST(f=>{T(f),h.removeEventListener("pointerleave",R)});h.addEventListener("pointerleave",R,c)});return l.forEach(E=>{E.addEventListener("pointerenter",S,c)}),d}const sR=(i,n)=>n?i===n?!0:sR(i,n.parentElement):!1,SS=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,GN=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function FN(i){return GN.has(i.tagName)||i.tabIndex!==-1}const Io=new WeakSet;function dT(i){return n=>{n.key==="Enter"&&i(n)}}function Ac(i,n){i.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const UN=(i,n)=>{const r=i.currentTarget;if(!r)return;const l=dT(()=>{if(Io.has(r))return;Ac(r,"down");const c=dT(()=>{Ac(r,"up")}),d=()=>Ac(r,"cancel");r.addEventListener("keyup",c,n),r.addEventListener("blur",d,n)});r.addEventListener("keydown",l,n),r.addEventListener("blur",()=>r.removeEventListener("keydown",l),n)};function AT(i){return SS(i)&&!oR()}function kN(i,n,r={}){const[l,c,d]=rR(i,r),S=E=>{const h=E.currentTarget;if(!AT(E)||Io.has(h))return;Io.add(h);const T=n(E),R=(L,v)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",C),!(!AT(L)||!Io.has(h))&&(Io.delete(h),typeof T=="function"&&T(L,{success:v}))},f=L=>{R(L,r.useGlobalTarget||sR(h,L.target))},C=L=>{R(L,!1)};window.addEventListener("pointerup",f,c),window.addEventListener("pointercancel",C,c)};return l.forEach(E=>{!FN(E)&&E.getAttribute("tabindex")===null&&(E.tabIndex=0),(r.useGlobalTarget?window:E).addEventListener("pointerdown",S,c),E.addEventListener("focus",T=>UN(T,c),c)}),d}function wN(i){return i==="x"||i==="y"?Xt[i]?null:(Xt[i]=!0,()=>{Xt[i]=!1}):Xt.x||Xt.y?null:(Xt.x=Xt.y=!0,()=>{Xt.x=Xt.y=!1})}function xo(i){return{point:{x:i.pageX,y:i.pageY}}}const VN=i=>n=>SS(n)&&i(n,xo(n));function Fo(i,n,r,l={passive:!0}){return i.addEventListener(n,r,l),()=>i.removeEventListener(n,r)}function Po(i,n,r,l){return Fo(i,n,VN(r),l)}const ET=(i,n)=>Math.abs(i-n);function xN(i,n){const r=ET(i.x,n.x),l=ET(i.y,n.y);return Math.sqrt(r**2+l**2)}class lR{constructor(n,r,{transformPagePoint:l,contextWindow:c,dragSnapToOrigin:d=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=hc(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,L=xN(f.offset,{x:0,y:0})>=3;if(!C&&!L)return;const{point:v}=f,{timestamp:V}=st;this.history.push({...v,timestamp:V});const{onStart:B,onMove:I}=this.handlers;C||(B&&B(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),I&&I(this.lastMoveEvent,f)},this.handlePointerMove=(f,C)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Ec(C,this.transformPagePoint),He.update(this.updatePoint,!0)},this.handlePointerUp=(f,C)=>{this.end();const{onEnd:L,onSessionEnd:v,resumeAnimation:V}=this.handlers;if(this.dragSnapToOrigin&&V&&V(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const B=hc(f.type==="pointercancel"?this.lastMoveEventInfo:Ec(C,this.transformPagePoint),this.history);this.startEvent&&L&&L(f,B),v&&v(f,B)},!SS(n))return;this.dragSnapToOrigin=d,this.handlers=r,this.transformPagePoint=l,this.contextWindow=c||window;const S=xo(n),E=Ec(S,this.transformPagePoint),{point:h}=E,{timestamp:T}=st;this.history=[{...h,timestamp:T}];const{onSessionStart:R}=r;R&&R(n,hc(E,this.history)),this.removeListeners=Vo(Po(this.contextWindow,"pointermove",this.handlePointerMove),Po(this.contextWindow,"pointerup",this.handlePointerUp),Po(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),Qa(this.updatePoint)}}function Ec(i,n){return n?{point:n(i.point)}:i}function hT(i,n){return{x:i.x-n.x,y:i.y-n.y}}function hc({point:i},n){return{point:i,delta:hT(i,uR(n)),offset:hT(i,KN(n)),velocity:WN(n,.1)}}function KN(i){return i[0]}function uR(i){return i[i.length-1]}function WN(i,n){if(i.length<2)return{x:0,y:0};let r=i.length-1,l=null;const c=uR(i);for(;r>=0&&(l=i[r],!(c.timestamp-l.timestamp>ga(n)));)r--;if(!l)return{x:0,y:0};const d=Na(c.timestamp-l.timestamp);if(d===0)return{x:0,y:0};const S={x:(c.x-l.x)/d,y:(c.y-l.y)/d};return S.x===1/0&&(S.x=0),S.y===1/0&&(S.y=0),S}function Rn(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}const cR=1e-4,YN=1-cR,zN=1+cR,SR=.01,JN=0-SR,_N=0+SR;function vt(i){return i.max-i.min}function jN(i,n,r){return Math.abs(i-n)<=r}function TT(i,n,r,l=.5){i.origin=l,i.originPoint=Ge(n.min,n.max,i.origin),i.scale=vt(r)/vt(n),i.translate=Ge(r.min,r.max,i.origin)-i.originPoint,(i.scale>=YN&&i.scale<=zN||isNaN(i.scale))&&(i.scale=1),(i.translate>=JN&&i.translate<=_N||isNaN(i.translate))&&(i.translate=0)}function Do(i,n,r,l){TT(i.x,n.x,r.x,l?l.originX:void 0),TT(i.y,n.y,r.y,l?l.originY:void 0)}function mT(i,n,r){i.min=r.min+n.min,i.max=i.min+vt(n)}function ZN(i,n,r){mT(i.x,n.x,r.x),mT(i.y,n.y,r.y)}function RT(i,n,r){i.min=n.min-r.min,i.max=i.min+vt(n)}function Bo(i,n,r){RT(i.x,n.x,r.x),RT(i.y,n.y,r.y)}function XN(i,{min:n,max:r},l){return n!==void 0&&i<n?i=l?Ge(n,i,l.min):Math.max(i,n):r!==void 0&&i>r&&(i=l?Ge(r,i,l.max):Math.min(i,r)),i}function fT(i,n,r){return{min:n!==void 0?i.min+n:void 0,max:r!==void 0?i.max+r-(i.max-i.min):void 0}}function qN(i,{top:n,left:r,bottom:l,right:c}){return{x:fT(i.x,r,c),y:fT(i.y,n,l)}}function CT(i,n){let r=n.min-i.min,l=n.max-i.max;return n.max-n.min<i.max-i.min&&([r,l]=[l,r]),{min:r,max:l}}function QN(i,n){return{x:CT(i.x,n.x),y:CT(i.y,n.y)}}function $N(i,n){let r=.5;const l=vt(i),c=vt(n);return c>l?r=Nn(n.min,n.max-l,i.min):l>c&&(r=Nn(i.min,i.max-c,n.min)),Ia(0,1,r)}function eI(i,n){const r={};return n.min!==void 0&&(r.min=n.min-i.min),n.max!==void 0&&(r.max=n.max-i.min),r}const Uc=.35;function tI(i=Uc){return i===!1?i=0:i===!0&&(i=Uc),{x:OT(i,"left","right"),y:OT(i,"top","bottom")}}function OT(i,n,r){return{min:pT(i,n),max:pT(i,r)}}function pT(i,n){return typeof i=="number"?i:i[n]||0}const gT=()=>({translate:0,scale:1,origin:0,originPoint:0}),fn=()=>({x:gT(),y:gT()}),NT=()=>({min:0,max:0}),We=()=>({x:NT(),y:NT()});function zt(i){return[i("x"),i("y")]}function dR({top:i,left:n,right:r,bottom:l}){return{x:{min:n,max:r},y:{min:i,max:l}}}function aI({x:i,y:n}){return{top:n.min,right:i.max,bottom:n.max,left:i.min}}function iI(i,n){if(!n)return i;const r=n({x:i.left,y:i.top}),l=n({x:i.right,y:i.bottom});return{top:r.y,left:r.x,bottom:l.y,right:l.x}}function Tc(i){return i===void 0||i===1}function kc({scale:i,scaleX:n,scaleY:r}){return!Tc(i)||!Tc(n)||!Tc(r)}function gi(i){return kc(i)||AR(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function AR(i){return IT(i.x)||IT(i.y)}function IT(i){return i&&i!=="0%"}function Cs(i,n,r){const l=i-r,c=n*l;return r+c}function yT(i,n,r,l,c){return c!==void 0&&(i=Cs(i,c,l)),Cs(i,r,l)+n}function wc(i,n=0,r=1,l,c){i.min=yT(i.min,n,r,l,c),i.max=yT(i.max,n,r,l,c)}function ER(i,{x:n,y:r}){wc(i.x,n.translate,n.scale,n.originPoint),wc(i.y,r.translate,r.scale,r.originPoint)}const LT=.999999999999,MT=1.0000000000001;function nI(i,n,r,l=!1){const c=r.length;if(!c)return;n.x=n.y=1;let d,S;for(let E=0;E<c;E++){d=r[E],S=d.projectionDelta;const{visualElement:h}=d.options;h&&h.props.style&&h.props.style.display==="contents"||(l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&On(i,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),S&&(n.x*=S.x.scale,n.y*=S.y.scale,ER(i,S)),l&&gi(d.latestValues)&&On(i,d.latestValues))}n.x<MT&&n.x>LT&&(n.x=1),n.y<MT&&n.y>LT&&(n.y=1)}function Cn(i,n){i.min=i.min+n,i.max=i.max+n}function PT(i,n,r,l,c=.5){const d=Ge(i.min,i.max,c);wc(i,n,r,d,l)}function On(i,n){PT(i.x,n.x,n.scaleX,n.scale,n.originX),PT(i.y,n.y,n.scaleY,n.scale,n.originY)}function hR(i,n){return dR(iI(i.getBoundingClientRect(),n))}function oI(i,n,r){const l=hR(i,r),{scroll:c}=n;return c&&(Cn(l.x,c.offset.x),Cn(l.y,c.offset.y)),l}const TR=({current:i})=>i?i.ownerDocument.defaultView:null,rI=new WeakMap;class sI{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=We(),this.visualElement=n}start(n,{snapToCursor:r=!1}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const c=R=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(xo(R).point)},d=(R,f)=>{const{drag:C,dragPropagation:L,onDragStart:v}=this.getProps();if(C&&!L&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wN(C),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zt(B=>{let I=this.getAxisMotionValue(B).get()||0;if(ta.test(I)){const{projection:b}=this.visualElement;if(b&&b.layout){const x=b.layout.layoutBox[B];x&&(I=vt(x)*(parseFloat(I)/100))}}this.originPoint[B]=I}),v&&He.postRender(()=>v(R,f)),Gc(this.visualElement,"transform");const{animationState:V}=this.visualElement;V&&V.setActive("whileDrag",!0)},S=(R,f)=>{const{dragPropagation:C,dragDirectionLock:L,onDirectionLock:v,onDrag:V}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:B}=f;if(L&&this.currentDirection===null){this.currentDirection=lI(B),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,B),this.updateAxis("y",f.point,B),this.visualElement.render(),V&&V(R,f)},E=(R,f)=>this.stop(R,f),h=()=>zt(R=>{var f;return this.getAnimationState(R)==="paused"&&((f=this.getAxisMotionValue(R).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:T}=this.getProps();this.panSession=new lR(n,{onSessionStart:c,onStart:d,onMove:S,onSessionEnd:E,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:T,contextWindow:TR(this.visualElement)})}stop(n,r){const l=this.isDragging;if(this.cancel(),!l)return;const{velocity:c}=r;this.startAnimation(c);const{onDragEnd:d}=this.getProps();d&&He.postRender(()=>d(n,r))}cancel(){this.isDragging=!1;const{projection:n,animationState:r}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(n,r,l){const{drag:c}=this.getProps();if(!l||!ls(n,c,this.currentDirection))return;const d=this.getAxisMotionValue(n);let S=this.originPoint[n]+l[n];this.constraints&&this.constraints[n]&&(S=XN(S,this.constraints[n],this.elastic[n])),d.set(S)}resolveConstraints(){var n;const{dragConstraints:r,dragElastic:l}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(n=this.visualElement.projection)===null||n===void 0?void 0:n.layout,d=this.constraints;r&&Rn(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&c?this.constraints=qN(c.layoutBox,r):this.constraints=!1,this.elastic=tI(l),d!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&zt(S=>{this.constraints!==!1&&this.getAxisMotionValue(S)&&(this.constraints[S]=eI(c.layoutBox[S],this.constraints[S]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:r}=this.getProps();if(!n||!Rn(n))return!1;const l=n.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=oI(l,c.root,this.visualElement.getTransformPagePoint());let S=QN(c.layout.layoutBox,d);if(r){const E=r(aI(S));this.hasMutatedConstraints=!!E,E&&(S=dR(E))}return S}startAnimation(n){const{drag:r,dragMomentum:l,dragElastic:c,dragTransition:d,dragSnapToOrigin:S,onDragTransitionEnd:E}=this.getProps(),h=this.constraints||{},T=zt(R=>{if(!ls(R,r,this.currentDirection))return;let f=h&&h[R]||{};S&&(f={min:0,max:0});const C=c?200:1e6,L=c?40:1e7,v={type:"inertia",velocity:l?n[R]:0,bounceStiffness:C,bounceDamping:L,timeConstant:750,restDelta:1,restSpeed:10,...d,...f};return this.startAxisValueAnimation(R,v)});return Promise.all(T).then(E)}startAxisValueAnimation(n,r){const l=this.getAxisMotionValue(n);return Gc(this.visualElement,n),l.start(rS(n,l,0,r,this.visualElement,!1))}stopAnimation(){zt(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){zt(n=>{var r;return(r=this.getAxisMotionValue(n).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(n){var r;return(r=this.getAxisMotionValue(n).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(n){const r=`_drag${n.toUpperCase()}`,l=this.visualElement.getProps(),c=l[r];return c||this.visualElement.getValue(n,(l.initial?l.initial[n]:void 0)||0)}snapToCursor(n){zt(r=>{const{drag:l}=this.getProps();if(!ls(r,l,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(r);if(c&&c.layout){const{min:S,max:E}=c.layout.layoutBox[r];d.set(n[r]-Ge(S,E,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:l}=this.visualElement;if(!Rn(r)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};zt(S=>{const E=this.getAxisMotionValue(S);if(E&&this.constraints!==!1){const h=E.get();c[S]=$N({min:h,max:h},this.constraints[S])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),zt(S=>{if(!ls(S,n,null))return;const E=this.getAxisMotionValue(S),{min:h,max:T}=this.constraints[S];E.set(Ge(h,T,c[S]))})}addListeners(){if(!this.visualElement.current)return;rI.set(this.visualElement,this);const n=this.visualElement.current,r=Po(n,"pointerdown",h=>{const{drag:T,dragListener:R=!0}=this.getProps();T&&R&&this.start(h)}),l=()=>{const{dragConstraints:h}=this.getProps();Rn(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",l);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),He.read(l);const S=Fo(window,"resize",()=>this.scalePositionWithinConstraints()),E=c.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:T})=>{this.isDragging&&T&&(zt(R=>{const f=this.getAxisMotionValue(R);f&&(this.originPoint[R]+=h[R].translate,f.set(f.get()+h[R].translate))}),this.visualElement.render())}));return()=>{S(),r(),d(),E&&E()}}getProps(){const n=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:S=Uc,dragMomentum:E=!0}=n;return{...n,drag:r,dragDirectionLock:l,dragPropagation:c,dragConstraints:d,dragElastic:S,dragMomentum:E}}}function ls(i,n,r){return(n===!0||n===i)&&(r===null||r===i)}function lI(i,n=10){let r=null;return Math.abs(i.y)>n?r="y":Math.abs(i.x)>n&&(r="x"),r}class uI extends ei{constructor(n){super(n),this.removeGroupControls=Ht,this.removeListeners=Ht,this.controls=new sI(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ht}unmount(){this.removeGroupControls(),this.removeListeners()}}const DT=i=>(n,r)=>{i&&He.postRender(()=>i(n,r))};class cI extends ei{constructor(){super(...arguments),this.removePointerDownListener=Ht}onPointerDown(n){this.session=new lR(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:TR(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:r,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:DT(n),onStart:DT(r),onMove:l,onEnd:(d,S)=>{delete this.session,c&&He.postRender(()=>c(d,S))}}}mount(){this.removePointerDownListener=Po(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ls=K.createContext(null);function SI(){const i=K.useContext(Ls);if(i===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:l}=i,c=K.useId();K.useEffect(()=>l(c),[]);const d=K.useCallback(()=>r&&r(c),[c,r]);return!n&&r?[!1,d]:[!0]}const dS=K.createContext({}),mR=K.createContext({}),ds={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function BT(i,n){return n.max===n.min?0:i/(n.max-n.min)*100}const go={correct:(i,n)=>{if(!n.target)return i;if(typeof i=="string")if(ie.test(i))i=parseFloat(i);else return i;const r=BT(i,n.target.x),l=BT(i,n.target.y);return`${r}% ${l}%`}},dI={correct:(i,{treeScale:n,projectionDelta:r})=>{const l=i,c=$a.parse(i);if(c.length>5)return l;const d=$a.createTransformer(i),S=typeof c[0]!="number"?1:0,E=r.x.scale*n.x,h=r.y.scale*n.y;c[0+S]/=E,c[1+S]/=h;const T=Ge(E,h,.5);return typeof c[2+S]=="number"&&(c[2+S]/=T),typeof c[3+S]=="number"&&(c[3+S]/=T),d(c)}},Os={};function AI(i){Object.assign(Os,i)}const{schedule:AS}=Rm(queueMicrotask,!1);class EI extends K.Component{componentDidMount(){const{visualElement:n,layoutGroup:r,switchLayoutGroup:l,layoutId:c}=this.props,{projection:d}=n;AI(hI),d&&(r.group&&r.group.add(d),l&&l.register&&c&&l.register(d),d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),ds.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:r,visualElement:l,drag:c,isPresent:d}=this.props,S=l.projection;return S&&(S.isPresent=d,c||n.layoutDependency!==r||r===void 0?S.willUpdate():this.safeToRemove(),n.isPresent!==d&&(d?S.promote():S.relegate()||He.postRender(()=>{const E=S.getStack();(!E||!E.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),AS.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:r,switchLayoutGroup:l}=this.props,{projection:c}=n;c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function RR(i){const[n,r]=SI(),l=K.useContext(dS);return N.jsx(EI,{...i,layoutGroup:l,switchLayoutGroup:K.useContext(mR),isPresent:n,safeToRemove:r})}const hI={borderRadius:{...go,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:go,borderTopRightRadius:go,borderBottomLeftRadius:go,borderBottomRightRadius:go,boxShadow:dI},fR=["TopLeft","TopRight","BottomLeft","BottomRight"],TI=fR.length,HT=i=>typeof i=="string"?parseFloat(i):i,vT=i=>typeof i=="number"||ie.test(i);function mI(i,n,r,l,c,d){c?(i.opacity=Ge(0,r.opacity!==void 0?r.opacity:1,RI(l)),i.opacityExit=Ge(n.opacity!==void 0?n.opacity:1,0,fI(l))):d&&(i.opacity=Ge(n.opacity!==void 0?n.opacity:1,r.opacity!==void 0?r.opacity:1,l));for(let S=0;S<TI;S++){const E=`border${fR[S]}Radius`;let h=bT(n,E),T=bT(r,E);if(h===void 0&&T===void 0)continue;h||(h=0),T||(T=0),h===0||T===0||vT(h)===vT(T)?(i[E]=Math.max(Ge(HT(h),HT(T),l),0),(ta.test(T)||ta.test(h))&&(i[E]+="%")):i[E]=T}(n.rotate||r.rotate)&&(i.rotate=Ge(n.rotate||0,r.rotate||0,l))}function bT(i,n){return i[n]!==void 0?i[n]:i.borderRadius}const RI=CR(0,.5,Im),fI=CR(.5,.95,Ht);function CR(i,n,r){return l=>l<i?0:l>n?1:r(Nn(i,n,l))}function GT(i,n){i.min=n.min,i.max=n.max}function Yt(i,n){GT(i.x,n.x),GT(i.y,n.y)}function FT(i,n){i.translate=n.translate,i.scale=n.scale,i.originPoint=n.originPoint,i.origin=n.origin}function UT(i,n,r,l,c){return i-=n,i=Cs(i,1/r,l),c!==void 0&&(i=Cs(i,1/c,l)),i}function CI(i,n=0,r=1,l=.5,c,d=i,S=i){if(ta.test(n)&&(n=parseFloat(n),n=Ge(S.min,S.max,n/100)-S.min),typeof n!="number")return;let E=Ge(d.min,d.max,l);i===d&&(E-=n),i.min=UT(i.min,n,r,E,c),i.max=UT(i.max,n,r,E,c)}function kT(i,n,[r,l,c],d,S){CI(i,n[r],n[l],n[c],n.scale,d,S)}const OI=["x","scaleX","originX"],pI=["y","scaleY","originY"];function wT(i,n,r,l){kT(i.x,n,OI,r?r.x:void 0,l?l.x:void 0),kT(i.y,n,pI,r?r.y:void 0,l?l.y:void 0)}function VT(i){return i.translate===0&&i.scale===1}function OR(i){return VT(i.x)&&VT(i.y)}function xT(i,n){return i.min===n.min&&i.max===n.max}function gI(i,n){return xT(i.x,n.x)&&xT(i.y,n.y)}function KT(i,n){return Math.round(i.min)===Math.round(n.min)&&Math.round(i.max)===Math.round(n.max)}function pR(i,n){return KT(i.x,n.x)&&KT(i.y,n.y)}function WT(i){return vt(i.x)/vt(i.y)}function YT(i,n){return i.translate===n.translate&&i.scale===n.scale&&i.originPoint===n.originPoint}class NI{constructor(){this.members=[]}add(n){sS(this.members,n),n.scheduleRender()}remove(n){if(lS(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(n){const r=this.members.findIndex(c=>n===c);if(r===0)return!1;let l;for(let c=r;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){l=d;break}}return l?(this.promote(l),!0):!1}promote(n,r){const l=this.lead;if(n!==l&&(this.prevLead=l,this.lead=n,n.show(),l)){l.instance&&l.scheduleRender(),n.scheduleRender(),n.resumeFrom=l,r&&(n.resumeFrom.preserveOpacity=!0),l.snapshot&&(n.snapshot=l.snapshot,n.snapshot.latestValues=l.animationValues||l.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:c}=n.options;c===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:r,resumingFrom:l}=n;r.onExitComplete&&r.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function II(i,n,r){let l="";const c=i.x.translate/n.x,d=i.y.translate/n.y,S=(r==null?void 0:r.z)||0;if((c||d||S)&&(l=`translate3d(${c}px, ${d}px, ${S}px) `),(n.x!==1||n.y!==1)&&(l+=`scale(${1/n.x}, ${1/n.y}) `),r){const{transformPerspective:T,rotate:R,rotateX:f,rotateY:C,skewX:L,skewY:v}=r;T&&(l=`perspective(${T}px) ${l}`),R&&(l+=`rotate(${R}deg) `),f&&(l+=`rotateX(${f}deg) `),C&&(l+=`rotateY(${C}deg) `),L&&(l+=`skewX(${L}deg) `),v&&(l+=`skewY(${v}deg) `)}const E=i.x.scale*n.x,h=i.y.scale*n.y;return(E!==1||h!==1)&&(l+=`scale(${E}, ${h})`),l||"none"}const yI=(i,n)=>i.depth-n.depth;class LI{constructor(){this.children=[],this.isDirty=!1}add(n){sS(this.children,n),this.isDirty=!0}remove(n){lS(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(yI),this.isDirty=!1,this.children.forEach(n)}}function As(i){const n=dt(i)?i.get():i;return SN(n)?n.toValue():n}function MI(i,n){const r=aa.now(),l=({timestamp:c})=>{const d=c-r;d>=n&&(Qa(l),i(d-n))};return He.read(l,!0),()=>Qa(l)}function PI(i){return i instanceof SVGElement&&i.tagName!=="svg"}function DI(i,n,r){const l=dt(i)?i:Go(i);return l.start(rS("",l,n,r)),l.animation}const Ni={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},yo=typeof window<"u"&&window.MotionDebug!==void 0,mc=["","X","Y","Z"],BI={visibility:"hidden"},zT=1e3;let HI=0;function Rc(i,n,r,l){const{latestValues:c}=n;c[i]&&(r[i]=c[i],n.setStaticValue(i,0),l&&(l[i]=0))}function gR(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:n}=i.options;if(!n)return;const r=aR(n);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:d}=i.options;window.MotionCancelOptimisedAnimation(r,"transform",He,!(c||d))}const{parent:l}=i;l&&!l.hasCheckedOptimisedAppear&&gR(l)}function NR({attachResizeListener:i,defaultParent:n,measureScroll:r,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(S={},E=n==null?void 0:n()){this.id=HI++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,yo&&(Ni.totalNodes=Ni.resolvedTargetDeltas=Ni.recalculatedProjection=0),this.nodes.forEach(GI),this.nodes.forEach(VI),this.nodes.forEach(xI),this.nodes.forEach(FI),yo&&window.MotionDebug.record(Ni)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=S,this.root=E?E.root||E:this,this.path=E?[...E.path,E]:[],this.parent=E,this.depth=E?E.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new LI)}addEventListener(S,E){return this.eventHandlers.has(S)||this.eventHandlers.set(S,new uS),this.eventHandlers.get(S).add(E)}notifyListeners(S,...E){const h=this.eventHandlers.get(S);h&&h.notify(...E)}hasListeners(S){return this.eventHandlers.has(S)}mount(S,E=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=PI(S),this.instance=S;const{layoutId:h,layout:T,visualElement:R}=this.options;if(R&&!R.current&&R.mount(S),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),E&&(T||h)&&(this.isLayoutDirty=!0),i){let f;const C=()=>this.root.updateBlockedByResize=!1;i(S,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=MI(C,250),ds.hasAnimatedSinceResize&&(ds.hasAnimatedSinceResize=!1,this.nodes.forEach(_T))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&R&&(h||T)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:C,hasRelativeTargetChanged:L,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const V=this.options.transition||R.getDefaultTransition()||JI,{onLayoutAnimationStart:B,onLayoutAnimationComplete:I}=R.getProps(),b=!this.targetLayout||!pR(this.targetLayout,v)||L,x=!C&&L;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||C&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,x);const J={...Jc(V,"layout"),onPlay:B,onComplete:I};(R.shouldReduceMotion||this.options.layoutRoot)&&(J.delay=0,J.type=!1),this.startAnimation(J)}else C||_T(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const S=this.getStack();S&&S.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Qa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KI),this.animationId++)}getTransformTemplate(){const{visualElement:S}=this.options;return S&&S.getProps().transformTemplate}willUpdate(S=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gR(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let R=0;R<this.path.length;R++){const f=this.path[R];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:E,layout:h}=this.options;if(E===void 0&&!h)return;const T=this.getTransformTemplate();this.prevTransformTemplateValue=T?T(this.latestValues,""):void 0,this.updateSnapshot(),S&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(JT);return}this.isUpdating||this.nodes.forEach(kI),this.isUpdating=!1,this.nodes.forEach(wI),this.nodes.forEach(vI),this.nodes.forEach(bI),this.clearAllSnapshots();const E=aa.now();st.delta=Ia(0,1e3/60,E-st.timestamp),st.timestamp=E,st.isProcessing=!0,lc.update.process(st),lc.preRender.process(st),lc.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,AS.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(UI),this.sharedNodes.forEach(WI)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,He.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){He.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const S=this.layout;this.layout=this.measure(!1),this.layoutCorrected=We(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:E}=this.options;E&&E.notify("LayoutMeasure",this.layout.layoutBox,S?S.layoutBox:void 0)}updateScroll(S="measure"){let E=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===S&&(E=!1),E){const h=l(this.instance);this.scroll={animationId:this.root.animationId,phase:S,isRoot:h,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!c)return;const S=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,E=this.projectionDelta&&!OR(this.projectionDelta),h=this.getTransformTemplate(),T=h?h(this.latestValues,""):void 0,R=T!==this.prevTransformTemplateValue;S&&(E||gi(this.latestValues)||R)&&(c(this.instance,T),this.shouldResetTransform=!1,this.scheduleRender())}measure(S=!0){const E=this.measurePageBox();let h=this.removeElementScroll(E);return S&&(h=this.removeTransform(h)),_I(h),{animationId:this.root.animationId,measuredBox:E,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var S;const{visualElement:E}=this.options;if(!E)return We();const h=E.measureViewportBox();if(!(((S=this.scroll)===null||S===void 0?void 0:S.wasRoot)||this.path.some(jI))){const{scroll:R}=this.root;R&&(Cn(h.x,R.offset.x),Cn(h.y,R.offset.y))}return h}removeElementScroll(S){var E;const h=We();if(Yt(h,S),!((E=this.scroll)===null||E===void 0)&&E.wasRoot)return h;for(let T=0;T<this.path.length;T++){const R=this.path[T],{scroll:f,options:C}=R;R!==this.root&&f&&C.layoutScroll&&(f.wasRoot&&Yt(h,S),Cn(h.x,f.offset.x),Cn(h.y,f.offset.y))}return h}applyTransform(S,E=!1){const h=We();Yt(h,S);for(let T=0;T<this.path.length;T++){const R=this.path[T];!E&&R.options.layoutScroll&&R.scroll&&R!==R.root&&On(h,{x:-R.scroll.offset.x,y:-R.scroll.offset.y}),gi(R.latestValues)&&On(h,R.latestValues)}return gi(this.latestValues)&&On(h,this.latestValues),h}removeTransform(S){const E=We();Yt(E,S);for(let h=0;h<this.path.length;h++){const T=this.path[h];if(!T.instance||!gi(T.latestValues))continue;kc(T.latestValues)&&T.updateSnapshot();const R=We(),f=T.measurePageBox();Yt(R,f),wT(E,T.latestValues,T.snapshot?T.snapshot.layoutBox:void 0,R)}return gi(this.latestValues)&&wT(E,this.latestValues),E}setTargetDelta(S){this.targetDelta=S,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(S){this.options={...this.options,...S,crossfade:S.crossfade!==void 0?S.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(S=!1){var E;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const T=!!this.resumingFrom||this!==h;if(!(S||T&&this.isSharedProjectionDirty||this.isProjectionDirty||!((E=this.parent)===null||E===void 0)&&E.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:C}=this.options;if(!(!this.layout||!(f||C))){if(this.resolvedRelativeTargetAt=st.timestamp,!this.targetDelta&&!this.relativeTarget){const L=this.getClosestProjectingParent();L&&L.layout&&this.animationProgress!==1?(this.relativeParent=L,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),Bo(this.relativeTargetOrigin,this.layout.layoutBox,L.layout.layoutBox),Yt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=We(),this.targetWithTransforms=We()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ZN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Yt(this.target,this.layout.layoutBox),ER(this.target,this.targetDelta)):Yt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const L=this.getClosestProjectingParent();L&&!!L.resumingFrom==!!this.resumingFrom&&!L.options.layoutScroll&&L.target&&this.animationProgress!==1?(this.relativeParent=L,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),Bo(this.relativeTargetOrigin,this.target,L.target),Yt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}yo&&Ni.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||kc(this.parent.latestValues)||AR(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const E=this.getLead(),h=!!this.resumingFrom||this!==E;let T=!0;if((this.isProjectionDirty||!((S=this.parent)===null||S===void 0)&&S.isProjectionDirty)&&(T=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(T=!1),this.resolvedRelativeTargetAt===st.timestamp&&(T=!1),T)return;const{layout:R,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(R||f))return;Yt(this.layoutCorrected,this.layout.layoutBox);const C=this.treeScale.x,L=this.treeScale.y;nI(this.layoutCorrected,this.treeScale,this.path,h),E.layout&&!E.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(E.target=E.layout.layoutBox,E.targetWithTransforms=We());const{target:v}=E;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(FT(this.prevProjectionDelta.x,this.projectionDelta.x),FT(this.prevProjectionDelta.y,this.projectionDelta.y)),Do(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==C||this.treeScale.y!==L||!YT(this.projectionDelta.x,this.prevProjectionDelta.x)||!YT(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),yo&&Ni.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(S=!0){var E;if((E=this.options.visualElement)===null||E===void 0||E.scheduleRender(),S){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=fn(),this.projectionDelta=fn(),this.projectionDeltaWithTransform=fn()}setAnimationOrigin(S,E=!1){const h=this.snapshot,T=h?h.latestValues:{},R={...this.latestValues},f=fn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!E;const C=We(),L=h?h.source:void 0,v=this.layout?this.layout.source:void 0,V=L!==v,B=this.getStack(),I=!B||B.members.length<=1,b=!!(V&&!I&&this.options.crossfade===!0&&!this.path.some(zI));this.animationProgress=0;let x;this.mixTargetDelta=J=>{const _=J/1e3;jT(f.x,S.x,_),jT(f.y,S.y,_),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bo(C,this.layout.layoutBox,this.relativeParent.layout.layoutBox),YI(this.relativeTarget,this.relativeTargetOrigin,C,_),x&&gI(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=We()),Yt(x,this.relativeTarget)),V&&(this.animationValues=R,mI(R,T,this.latestValues,_,b,I)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=_},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(S){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Qa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=He.update(()=>{ds.hasAnimatedSinceResize=!0,this.currentAnimation=DI(0,zT,{...S,onUpdate:E=>{this.mixTargetDelta(E),S.onUpdate&&S.onUpdate(E)},onComplete:()=>{S.onComplete&&S.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const S=this.getStack();S&&S.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(zT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const S=this.getLead();let{targetWithTransforms:E,target:h,layout:T,latestValues:R}=S;if(!(!E||!h||!T)){if(this!==S&&this.layout&&T&&IR(this.options.animationType,this.layout.layoutBox,T.layoutBox)){h=this.target||We();const f=vt(this.layout.layoutBox.x);h.x.min=S.target.x.min,h.x.max=h.x.min+f;const C=vt(this.layout.layoutBox.y);h.y.min=S.target.y.min,h.y.max=h.y.min+C}Yt(E,h),On(E,R),Do(this.projectionDeltaWithTransform,this.layoutCorrected,E,R)}}registerSharedNode(S,E){this.sharedNodes.has(S)||this.sharedNodes.set(S,new NI),this.sharedNodes.get(S).add(E);const T=E.options.initialPromotionConfig;E.promote({transition:T?T.transition:void 0,preserveFollowOpacity:T&&T.shouldPreserveFollowOpacity?T.shouldPreserveFollowOpacity(E):void 0})}isLead(){const S=this.getStack();return S?S.lead===this:!0}getLead(){var S;const{layoutId:E}=this.options;return E?((S=this.getStack())===null||S===void 0?void 0:S.lead)||this:this}getPrevLead(){var S;const{layoutId:E}=this.options;return E?(S=this.getStack())===null||S===void 0?void 0:S.prevLead:void 0}getStack(){const{layoutId:S}=this.options;if(S)return this.root.sharedNodes.get(S)}promote({needsReset:S,transition:E,preserveFollowOpacity:h}={}){const T=this.getStack();T&&T.promote(this,h),S&&(this.projectionDelta=void 0,this.needsReset=!0),E&&this.setOptions({transition:E})}relegate(){const S=this.getStack();return S?S.relegate(this):!1}resetSkewAndRotation(){const{visualElement:S}=this.options;if(!S)return;let E=!1;const{latestValues:h}=S;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(E=!0),!E)return;const T={};h.z&&Rc("z",S,T,this.animationValues);for(let R=0;R<mc.length;R++)Rc(`rotate${mc[R]}`,S,T,this.animationValues),Rc(`skew${mc[R]}`,S,T,this.animationValues);S.render();for(const R in T)S.setStaticValue(R,T[R]),this.animationValues&&(this.animationValues[R]=T[R]);S.scheduleRender()}getProjectionStyles(S){var E,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return BI;const T={visibility:""},R=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,T.opacity="",T.pointerEvents=As(S==null?void 0:S.pointerEvents)||"",T.transform=R?R(this.latestValues,""):"none",T;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const V={};return this.options.layoutId&&(V.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,V.pointerEvents=As(S==null?void 0:S.pointerEvents)||""),this.hasProjected&&!gi(this.latestValues)&&(V.transform=R?R({},""):"none",this.hasProjected=!1),V}const C=f.animationValues||f.latestValues;this.applyTransformsToTarget(),T.transform=II(this.projectionDeltaWithTransform,this.treeScale,C),R&&(T.transform=R(C,T.transform));const{x:L,y:v}=this.projectionDelta;T.transformOrigin=`${L.origin*100}% ${v.origin*100}% 0`,f.animationValues?T.opacity=f===this?(h=(E=C.opacity)!==null&&E!==void 0?E:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:C.opacityExit:T.opacity=f===this?C.opacity!==void 0?C.opacity:"":C.opacityExit!==void 0?C.opacityExit:0;for(const V in Os){if(C[V]===void 0)continue;const{correct:B,applyTo:I}=Os[V],b=T.transform==="none"?C[V]:B(C[V],f);if(I){const x=I.length;for(let J=0;J<x;J++)T[I[J]]=b}else T[V]=b}return this.options.layoutId&&(T.pointerEvents=f===this?As(S==null?void 0:S.pointerEvents)||"":"none"),T}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(S=>{var E;return(E=S.currentAnimation)===null||E===void 0?void 0:E.stop()}),this.root.nodes.forEach(JT),this.root.sharedNodes.clear()}}}function vI(i){i.updateLayout()}function bI(i){var n;const r=((n=i.resumeFrom)===null||n===void 0?void 0:n.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&r&&i.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:c}=i.layout,{animationType:d}=i.options,S=r.source!==i.layout.source;d==="size"?zt(f=>{const C=S?r.measuredBox[f]:r.layoutBox[f],L=vt(C);C.min=l[f].min,C.max=C.min+L}):IR(d,r.layoutBox,l)&&zt(f=>{const C=S?r.measuredBox[f]:r.layoutBox[f],L=vt(l[f]);C.max=C.min+L,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[f].max=i.relativeTarget[f].min+L)});const E=fn();Do(E,l,r.layoutBox);const h=fn();S?Do(h,i.applyTransform(c,!0),r.measuredBox):Do(h,l,r.layoutBox);const T=!OR(E);let R=!1;if(!i.resumeFrom){const f=i.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:C,layout:L}=f;if(C&&L){const v=We();Bo(v,r.layoutBox,C.layoutBox);const V=We();Bo(V,l,L.layoutBox),pR(v,V)||(R=!0),f.options.layoutRoot&&(i.relativeTarget=V,i.relativeTargetOrigin=v,i.relativeParent=f)}}}i.notifyListeners("didUpdate",{layout:l,snapshot:r,delta:h,layoutDelta:E,hasLayoutChanged:T,hasRelativeTargetChanged:R})}else if(i.isLead()){const{onExitComplete:l}=i.options;l&&l()}i.options.transition=void 0}function GI(i){yo&&Ni.totalNodes++,i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function FI(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function UI(i){i.clearSnapshot()}function JT(i){i.clearMeasurements()}function kI(i){i.isLayoutDirty=!1}function wI(i){const{visualElement:n}=i.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),i.resetTransform()}function _T(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function VI(i){i.resolveTargetDelta()}function xI(i){i.calcProjection()}function KI(i){i.resetSkewAndRotation()}function WI(i){i.removeLeadSnapshot()}function jT(i,n,r){i.translate=Ge(n.translate,0,r),i.scale=Ge(n.scale,1,r),i.origin=n.origin,i.originPoint=n.originPoint}function ZT(i,n,r,l){i.min=Ge(n.min,r.min,l),i.max=Ge(n.max,r.max,l)}function YI(i,n,r,l){ZT(i.x,n.x,r.x,l),ZT(i.y,n.y,r.y,l)}function zI(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const JI={duration:.45,ease:[.4,0,.1,1]},XT=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),qT=XT("applewebkit/")&&!XT("chrome/")?Math.round:Ht;function QT(i){i.min=qT(i.min),i.max=qT(i.max)}function _I(i){QT(i.x),QT(i.y)}function IR(i,n,r){return i==="position"||i==="preserve-aspect"&&!jN(WT(n),WT(r),.2)}function jI(i){var n;return i!==i.root&&((n=i.scroll)===null||n===void 0?void 0:n.wasRoot)}const ZI=NR({attachResizeListener:(i,n)=>Fo(i,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fc={current:void 0},yR=NR({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!fc.current){const i=new ZI({});i.mount(window),i.setOptions({layoutScroll:!0}),fc.current=i}return fc.current},resetTransform:(i,n)=>{i.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),XI={pan:{Feature:cI},drag:{Feature:uI,ProjectionNode:yR,MeasureLayout:RR}};function $T(i,n,r){const{props:l}=i;i.animationState&&l.whileHover&&i.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,d=l[c];d&&He.postRender(()=>d(n,xo(n)))}class qI extends ei{mount(){const{current:n}=this.node;n&&(this.unmount=bN(n,r=>($T(this.node,r,"Start"),l=>$T(this.node,l,"End"))))}unmount(){}}class QI extends ei{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vo(Fo(this.node.current,"focus",()=>this.onFocus()),Fo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function em(i,n,r){const{props:l}=i;i.animationState&&l.whileTap&&i.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),d=l[c];d&&He.postRender(()=>d(n,xo(n)))}class $I extends ei{mount(){const{current:n}=this.node;n&&(this.unmount=kN(n,r=>(em(this.node,r,"Start"),(l,{success:c})=>em(this.node,l,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Vc=new WeakMap,Cc=new WeakMap,ey=i=>{const n=Vc.get(i.target);n&&n(i)},ty=i=>{i.forEach(ey)};function ay({root:i,...n}){const r=i||document;Cc.has(r)||Cc.set(r,{});const l=Cc.get(r),c=JSON.stringify(n);return l[c]||(l[c]=new IntersectionObserver(ty,{root:i,...n})),l[c]}function iy(i,n,r){const l=ay(n);return Vc.set(i,r),l.observe(i),()=>{Vc.delete(i),l.unobserve(i)}}const ny={some:0,all:1};class oy extends ei{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:r,margin:l,amount:c="some",once:d}=n,S={root:r?r.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:ny[c]},E=h=>{const{isIntersecting:T}=h;if(this.isInView===T||(this.isInView=T,d&&!T&&this.hasEnteredView))return;T&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",T);const{onViewportEnter:R,onViewportLeave:f}=this.node.getProps(),C=T?R:f;C&&C(h)};return iy(this.node.current,S,E)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:r}=this.node;["amount","margin","root"].some(ry(n,r))&&this.startObserver()}unmount(){}}function ry({viewport:i={}},{viewport:n={}}={}){return r=>i[r]!==n[r]}const sy={inView:{Feature:oy},tap:{Feature:$I},focus:{Feature:QI},hover:{Feature:qI}},ly={layout:{ProjectionNode:yR,MeasureLayout:RR}},ES=K.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"}),Ms=K.createContext({}),hS=typeof window<"u",LR=hS?K.useLayoutEffect:K.useEffect,MR=K.createContext({strict:!1});function uy(i,n,r,l,c){var d,S;const{visualElement:E}=K.useContext(Ms),h=K.useContext(MR),T=K.useContext(Ls),R=K.useContext(ES).reducedMotion,f=K.useRef(null);l=l||h.renderer,!f.current&&l&&(f.current=l(i,{visualState:n,parent:E,props:r,presenceContext:T,blockInitialAnimation:T?T.initial===!1:!1,reducedMotionConfig:R}));const C=f.current,L=K.useContext(mR);C&&!C.projection&&c&&(C.type==="html"||C.type==="svg")&&cy(f.current,r,c,L);const v=K.useRef(!1);K.useInsertionEffect(()=>{C&&v.current&&C.update(r,T)});const V=r[tR],B=K.useRef(!!V&&!(!((d=window.MotionHandoffIsComplete)===null||d===void 0)&&d.call(window,V))&&((S=window.MotionHasOptimisedAnimation)===null||S===void 0?void 0:S.call(window,V)));return LR(()=>{C&&(v.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),AS.render(C.render),B.current&&C.animationState&&C.animationState.animateChanges())}),K.useEffect(()=>{C&&(!B.current&&C.animationState&&C.animationState.animateChanges(),B.current&&(queueMicrotask(()=>{var I;(I=window.MotionHandoffMarkAsComplete)===null||I===void 0||I.call(window,V)}),B.current=!1))}),C}function cy(i,n,r,l){const{layoutId:c,layout:d,drag:S,dragConstraints:E,layoutScroll:h,layoutRoot:T}=n;i.projection=new r(i.latestValues,n["data-framer-portal-id"]?void 0:PR(i.parent)),i.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!S||E&&Rn(E),visualElement:i,animationType:typeof d=="string"?d:"both",initialPromotionConfig:l,layoutScroll:h,layoutRoot:T})}function PR(i){if(i)return i.options.allowProjection!==!1?i.projection:PR(i.parent)}function Sy(i,n,r){return K.useCallback(l=>{l&&i.mount&&i.mount(l),n&&(l?n.mount(l):n.unmount()),r&&(typeof r=="function"?r(l):Rn(r)&&(r.current=l))},[n])}function Ps(i){return Ns(i.animate)||zc.some(n=>Ho(i[n]))}function DR(i){return!!(Ps(i)||i.variants)}function dy(i,n){if(Ps(i)){const{initial:r,animate:l}=i;return{initial:r===!1||Ho(r)?r:void 0,animate:Ho(l)?l:void 0}}return i.inherit!==!1?n:{}}function Ay(i){const{initial:n,animate:r}=dy(i,K.useContext(Ms));return K.useMemo(()=>({initial:n,animate:r}),[tm(n),tm(r)])}function tm(i){return Array.isArray(i)?i.join(" "):i}const am={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},In={};for(const i in am)In[i]={isEnabled:n=>am[i].some(r=>!!n[r])};function Ey(i){for(const n in i)In[n]={...In[n],...i[n]}}const hy=Symbol.for("motionComponentSymbol");function Ty({preloadedFeatures:i,createVisualElement:n,useRender:r,useVisualState:l,Component:c}){i&&Ey(i);function d(E,h){let T;const R={...K.useContext(ES),...E,layoutId:my(E)},{isStatic:f}=R,C=Ay(E),L=l(E,f);if(!f&&hS){Ry();const v=fy(R);T=v.MeasureLayout,C.visualElement=uy(c,L,R,n,v.ProjectionNode)}return N.jsxs(Ms.Provider,{value:C,children:[T&&C.visualElement?N.jsx(T,{visualElement:C.visualElement,...R}):null,r(c,E,Sy(L,C.visualElement,h),L,f,C.visualElement)]})}const S=K.forwardRef(d);return S[hy]=c,S}function my({layoutId:i}){const n=K.useContext(dS).id;return n&&i!==void 0?n+"-"+i:i}function Ry(i,n){K.useContext(MR).strict}function fy(i){const{drag:n,layout:r}=In;if(!n&&!r)return{};const l={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(i)||r!=null&&r.isEnabled(i)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}const Cy=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function TS(i){return typeof i!="string"||i.includes("-")?!1:!!(Cy.indexOf(i)>-1||/[A-Z]/u.test(i))}function BR(i,{style:n,vars:r},l,c){Object.assign(i.style,n,c&&c.getProjectionStyles(l));for(const d in r)i.style.setProperty(d,r[d])}const HR=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function vR(i,n,r,l){BR(i,n,void 0,l);for(const c in n.attrs)i.setAttribute(HR.has(c)?c:cS(c),n.attrs[c])}function bR(i,{layout:n,layoutId:r}){return Bi.has(i)||i.startsWith("origin")||(n||r!==void 0)&&(!!Os[i]||i==="opacity")}function mS(i,n,r){var l;const{style:c}=i,d={};for(const S in c)(dt(c[S])||n.style&&dt(n.style[S])||bR(S,i)||((l=r==null?void 0:r.getValue(S))===null||l===void 0?void 0:l.liveStyle)!==void 0)&&(d[S]=c[S]);return d}function GR(i,n,r){const l=mS(i,n,r);for(const c in i)if(dt(i[c])||dt(n[c])){const d=Uo.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[d]=i[c]}return l}function RS(i){const n=K.useRef(null);return n.current===null&&(n.current=i()),n.current}function Oy({scrapeMotionValuesFromProps:i,createRenderState:n,onMount:r},l,c,d){const S={latestValues:py(l,c,d,i),renderState:n()};return r&&(S.mount=E=>r(l,E,S)),S}const FR=i=>(n,r)=>{const l=K.useContext(Ms),c=K.useContext(Ls),d=()=>Oy(i,n,l,c);return r?d():RS(d)};function py(i,n,r,l){const c={},d=l(i,{});for(const C in d)c[C]=As(d[C]);let{initial:S,animate:E}=i;const h=Ps(i),T=DR(i);n&&T&&!h&&i.inherit!==!1&&(S===void 0&&(S=n.initial),E===void 0&&(E=n.animate));let R=r?r.initial===!1:!1;R=R||S===!1;const f=R?E:S;if(f&&typeof f!="boolean"&&!Ns(f)){const C=Array.isArray(f)?f:[f];for(let L=0;L<C.length;L++){const v=Wc(i,C[L]);if(v){const{transitionEnd:V,transition:B,...I}=v;for(const b in I){let x=I[b];if(Array.isArray(x)){const J=R?x.length-1:0;x=x[J]}x!==null&&(c[b]=x)}for(const b in V)c[b]=V[b]}}}return c}const fS=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),UR=()=>({...fS(),attrs:{}}),kR=(i,n)=>n&&typeof i=="number"?n.transform(i):i,gy={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ny=Uo.length;function Iy(i,n,r){let l="",c=!0;for(let d=0;d<Ny;d++){const S=Uo[d],E=i[S];if(E===void 0)continue;let h=!0;if(typeof E=="number"?h=E===(S.startsWith("scale")?1:0):h=parseFloat(E)===0,!h||r){const T=kR(E,$c[S]);if(!h){c=!1;const R=gy[S]||S;l+=`${R}(${T}) `}r&&(n[S]=T)}}return l=l.trim(),r?l=r(n,c?"":l):c&&(l="none"),l}function CS(i,n,r){const{style:l,vars:c,transformOrigin:d}=i;let S=!1,E=!1;for(const h in n){const T=n[h];if(Bi.has(h)){S=!0;continue}else if(Dm(h)){c[h]=T;continue}else{const R=kR(T,$c[h]);h.startsWith("origin")?(E=!0,d[h]=R):l[h]=R}}if(n.transform||(S||r?l.transform=Iy(n,i.transform,r):l.transform&&(l.transform="none")),E){const{originX:h="50%",originY:T="50%",originZ:R=0}=d;l.transformOrigin=`${h} ${T} ${R}`}}function im(i,n,r){return typeof i=="string"?i:ie.transform(n+r*i)}function yy(i,n,r){const l=im(n,i.x,i.width),c=im(r,i.y,i.height);return`${l} ${c}`}const Ly={offset:"stroke-dashoffset",array:"stroke-dasharray"},My={offset:"strokeDashoffset",array:"strokeDasharray"};function Py(i,n,r=1,l=0,c=!0){i.pathLength=1;const d=c?Ly:My;i[d.offset]=ie.transform(-l);const S=ie.transform(n),E=ie.transform(r);i[d.array]=`${S} ${E}`}function OS(i,{attrX:n,attrY:r,attrScale:l,originX:c,originY:d,pathLength:S,pathSpacing:E=1,pathOffset:h=0,...T},R,f){if(CS(i,T,f),R){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:C,style:L,dimensions:v}=i;C.transform&&(v&&(L.transform=C.transform),delete C.transform),v&&(c!==void 0||d!==void 0||L.transform)&&(L.transformOrigin=yy(v,c!==void 0?c:.5,d!==void 0?d:.5)),n!==void 0&&(C.x=n),r!==void 0&&(C.y=r),l!==void 0&&(C.scale=l),S!==void 0&&Py(C,S,E,h,!1)}const pS=i=>typeof i=="string"&&i.toLowerCase()==="svg",Dy={useVisualState:FR({scrapeMotionValuesFromProps:GR,createRenderState:UR,onMount:(i,n,{renderState:r,latestValues:l})=>{He.read(()=>{try{r.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),He.render(()=>{OS(r,l,pS(n.tagName),i.transformTemplate),vR(n,r)})}})},By={useVisualState:FR({scrapeMotionValuesFromProps:mS,createRenderState:fS})};function wR(i,n,r){for(const l in n)!dt(n[l])&&!bR(l,r)&&(i[l]=n[l])}function Hy({transformTemplate:i},n){return K.useMemo(()=>{const r=fS();return CS(r,n,i),Object.assign({},r.vars,r.style)},[n])}function vy(i,n){const r=i.style||{},l={};return wR(l,r,i),Object.assign(l,Hy(i,n)),l}function by(i,n){const r={},l=vy(i,n);return i.drag&&i.dragListener!==!1&&(r.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(r.tabIndex=0),r.style=l,r}const Gy=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ps(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||Gy.has(i)}let VR=i=>!ps(i);function Fy(i){i&&(VR=n=>n.startsWith("on")?!ps(n):i(n))}try{Fy(require("@emotion/is-prop-valid").default)}catch{}function Uy(i,n,r){const l={};for(const c in i)c==="values"&&typeof i.values=="object"||(VR(c)||r===!0&&ps(c)||!n&&!ps(c)||i.draggable&&c.startsWith("onDrag"))&&(l[c]=i[c]);return l}function ky(i,n,r,l){const c=K.useMemo(()=>{const d=UR();return OS(d,n,pS(l),i.transformTemplate),{...d.attrs,style:{...d.style}}},[n]);if(i.style){const d={};wR(d,i.style,i),c.style={...d,...c.style}}return c}function wy(i=!1){return(r,l,c,{latestValues:d},S)=>{const h=(TS(r)?ky:by)(l,d,S,r),T=Uy(l,typeof r=="string",i),R=r!==K.Fragment?{...T,...h,ref:c}:{},{children:f}=l,C=K.useMemo(()=>dt(f)?f.get():f,[f]);return K.createElement(r,{...R,children:C})}}function Vy(i,n){return function(l,{forwardMotionProps:c}={forwardMotionProps:!1}){const S={...TS(l)?Dy:By,preloadedFeatures:i,useRender:wy(c),createVisualElement:n,Component:l};return Ty(S)}}const xc={current:null},xR={current:!1};function xy(){if(xR.current=!0,!!hS)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),n=()=>xc.current=i.matches;i.addListener(n),n()}else xc.current=!1}function Ky(i,n,r){for(const l in n){const c=n[l],d=r[l];if(dt(c))i.addValue(l,c);else if(dt(d))i.addValue(l,Go(c,{owner:i}));else if(d!==c)if(i.hasValue(l)){const S=i.getValue(l);S.liveStyle===!0?S.jump(c):S.hasAnimated||S.set(c)}else{const S=i.getStaticValue(l);i.addValue(l,Go(S!==void 0?S:c,{owner:i}))}}for(const l in r)n[l]===void 0&&i.removeValue(l);return n}const nm=new WeakMap,Wy=[...vm,St,$a],Yy=i=>Wy.find(Hm(i)),om=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class zy{scrapeMotionValuesFromProps(n,r,l){return{}}constructor({parent:n,props:r,presenceContext:l,reducedMotionConfig:c,blockInitialAnimation:d,visualState:S},E={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Xc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=aa.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,He.render(this.render,!1,!0))};const{latestValues:h,renderState:T}=S;this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=T,this.parent=n,this.props=r,this.presenceContext=l,this.depth=n?n.depth+1:0,this.reducedMotionConfig=c,this.options=E,this.blockInitialAnimation=!!d,this.isControllingVariants=Ps(r),this.isVariantNode=DR(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:R,...f}=this.scrapeMotionValuesFromProps(r,{},this);for(const C in f){const L=f[C];h[C]!==void 0&&dt(L)&&L.set(h[C],!1)}}mount(n){this.current=n,nm.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,l)=>this.bindToMotionValue(l,r)),xR.current||xy(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:xc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){nm.delete(this.current),this.projection&&this.projection.unmount(),Qa(this.notifyUpdate),Qa(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(n,r){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const l=Bi.has(n),c=r.on("change",E=>{this.latestValues[n]=E,this.props.onUpdate&&He.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0)}),d=r.on("renderRequest",this.scheduleRender);let S;window.MotionCheckAppearSync&&(S=window.MotionCheckAppearSync(this,n,r)),this.valueSubscriptions.set(n,()=>{c(),d(),S&&S(),r.owner&&r.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in In){const r=In[n];if(!r)continue;const{isEnabled:l,Feature:c}=r;if(!this.features[n]&&c&&l(this.props)&&(this.features[n]=new c(this)),this.features[n]){const d=this.features[n];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):We()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,r){this.latestValues[n]=r}update(n,r){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let l=0;l<om.length;l++){const c=om[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,S=n[d];S&&(this.propEventSubscriptions[c]=this.on(c,S))}this.prevMotionValues=Ky(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(n),()=>r.variantChildren.delete(n)}addValue(n,r){const l=this.values.get(n);r!==l&&(l&&this.removeValue(n),this.bindToMotionValue(n,r),this.values.set(n,r),this.latestValues[n]=r.get())}removeValue(n){this.values.delete(n);const r=this.valueSubscriptions.get(n);r&&(r(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,r){if(this.props.values&&this.props.values[n])return this.props.values[n];let l=this.values.get(n);return l===void 0&&r!==void 0&&(l=Go(r===null?void 0:r,{owner:this}),this.addValue(n,l)),l}readValue(n,r){var l;let c=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(l=this.getBaseTargetFromProps(this.props,n))!==null&&l!==void 0?l:this.readValueFromInstance(this.current,n,this.options);return c!=null&&(typeof c=="string"&&(Mm(c)||Lm(c))?c=parseFloat(c):!Yy(c)&&$a.test(r)&&(c=xm(n,r)),this.setBaseTarget(n,dt(c)?c.get():c)),dt(c)?c.get():c}setBaseTarget(n,r){this.baseTarget[n]=r}getBaseTarget(n){var r;const{initial:l}=this.props;let c;if(typeof l=="string"||typeof l=="object"){const S=Wc(this.props,l,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);S&&(c=S[n])}if(l&&c!==void 0)return c;const d=this.getBaseTargetFromProps(this.props,n);return d!==void 0&&!dt(d)?d:this.initialValues[n]!==void 0&&c===void 0?void 0:this.baseTarget[n]}on(n,r){return this.events[n]||(this.events[n]=new uS),this.events[n].add(r)}notify(n,...r){this.events[n]&&this.events[n].notify(...r)}}class KR extends zy{constructor(){super(...arguments),this.KeyframeResolver=Km}sortInstanceNodePosition(n,r){return n.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(n,r){return n.style?n.style[r]:void 0}removeValueFromRenderState(n,{vars:r,style:l}){delete r[n],delete l[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;dt(n)&&(this.childSubscription=n.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function Jy(i){return window.getComputedStyle(i)}class _y extends KR{constructor(){super(...arguments),this.type="html",this.renderInstance=BR}readValueFromInstance(n,r){if(Bi.has(r)){const l=eS(r);return l&&l.default||0}else{const l=Jy(n),c=(Dm(r)?l.getPropertyValue(r):l[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(n,{transformPagePoint:r}){return hR(n,r)}build(n,r,l){CS(n,r,l.transformTemplate)}scrapeMotionValuesFromProps(n,r,l){return mS(n,r,l)}}class jy extends KR{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=We}getBaseTargetFromProps(n,r){return n[r]}readValueFromInstance(n,r){if(Bi.has(r)){const l=eS(r);return l&&l.default||0}return r=HR.has(r)?r:cS(r),n.getAttribute(r)}scrapeMotionValuesFromProps(n,r,l){return GR(n,r,l)}build(n,r,l){OS(n,r,this.isSVGTag,l.transformTemplate)}renderInstance(n,r,l,c){vR(n,r,l,c)}mount(n){this.isSVGTag=pS(n.tagName),super.mount(n)}}const Zy=(i,n)=>TS(i)?new jy(n):new _y(n,{allowProjection:i!==K.Fragment}),Xy=Vy({...HN,...sy,...XI,...ly},Zy),gS=Pp(Xy);class qy extends K.Component{getSnapshotBeforeUpdate(n){const r=this.props.childRef.current;if(r&&n.isPresent&&!this.props.isPresent){const l=this.props.sizeRef.current;l.height=r.offsetHeight||0,l.width=r.offsetWidth||0,l.top=r.offsetTop,l.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Qy({children:i,isPresent:n}){const r=K.useId(),l=K.useRef(null),c=K.useRef({width:0,height:0,top:0,left:0}),{nonce:d}=K.useContext(ES);return K.useInsertionEffect(()=>{const{width:S,height:E,top:h,left:T}=c.current;if(n||!l.current||!S||!E)return;l.current.dataset.motionPopId=r;const R=document.createElement("style");return d&&(R.nonce=d),document.head.appendChild(R),R.sheet&&R.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${E}px !important;
            top: ${h}px !important;
            left: ${T}px !important;
          }
        `),()=>{document.head.removeChild(R)}},[n]),N.jsx(qy,{isPresent:n,childRef:l,sizeRef:c,children:K.cloneElement(i,{ref:l})})}const $y=({children:i,initial:n,isPresent:r,onExitComplete:l,custom:c,presenceAffectsLayout:d,mode:S})=>{const E=RS(eL),h=K.useId(),T=K.useCallback(f=>{E.set(f,!0);for(const C of E.values())if(!C)return;l&&l()},[E,l]),R=K.useMemo(()=>({id:h,initial:n,isPresent:r,custom:c,onExitComplete:T,register:f=>(E.set(f,!1),()=>E.delete(f))}),d?[Math.random(),T]:[r,T]);return K.useMemo(()=>{E.forEach((f,C)=>E.set(C,!1))},[r]),K.useEffect(()=>{!r&&!E.size&&l&&l()},[r]),S==="popLayout"&&(i=N.jsx(Qy,{isPresent:r,children:i})),N.jsx(Ls.Provider,{value:R,children:i})};function eL(){return new Map}const us=i=>i.key||"";function rm(i){const n=[];return K.Children.forEach(i,r=>{K.isValidElement(r)&&n.push(r)}),n}const Oc=({children:i,exitBeforeEnter:n,custom:r,initial:l=!0,onExitComplete:c,presenceAffectsLayout:d=!0,mode:S="sync"})=>{const E=K.useMemo(()=>rm(i),[i]),h=E.map(us),T=K.useRef(!0),R=K.useRef(E),f=RS(()=>new Map),[C,L]=K.useState(E),[v,V]=K.useState(E);LR(()=>{T.current=!1,R.current=E;for(let b=0;b<v.length;b++){const x=us(v[b]);h.includes(x)?f.delete(x):f.get(x)!==!0&&f.set(x,!1)}},[v,h.length,h.join("-")]);const B=[];if(E!==C){let b=[...E];for(let x=0;x<v.length;x++){const J=v[x],_=us(J);h.includes(_)||(b.splice(x,0,J),B.push(J))}S==="wait"&&B.length&&(b=B),V(rm(b)),L(E);return}const{forceRender:I}=K.useContext(dS);return N.jsx(N.Fragment,{children:v.map(b=>{const x=us(b),J=E===v||h.includes(x),_=()=>{if(f.has(x))f.set(x,!0);else return;let $=!0;f.forEach(X=>{X||($=!1)}),$&&(I==null||I(),V(R.current),c&&c())};return N.jsx($y,{isPresent:J,initial:!T.current||l?void 0:!1,custom:J?void 0:r,presenceAffectsLayout:d,mode:S,onExitComplete:J?void 0:_,children:b},x)})})},tL=gS.div,aL=({onClose:i})=>{const n=Sm(),r=n.totalTimeMs/1e3,l=r>3600?`${Math.floor(r/3600)}h ${Math.floor(r%3600/60)}m`:r>60?`${Math.floor(r/60)}m ${Math.floor(r%60)}s`:`${Math.floor(r)}s`,c=K.useMemo(()=>Ii().length+Es().length+hs().length,[]),d=K.useMemo(()=>{const S=new Set;return[...Ii(),...Es(),...hs()].forEach(E=>{E.words.forEach(h=>S.add(h.trim().toUpperCase()))}),S.size},[]);return N.jsx("div",{className:"absolute inset-0 z-[600] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 font-oswald",children:N.jsxs(tL,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-6 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex flex-col gap-6",children:[N.jsxs("div",{className:"flex justify-between items-center border-b border-zinc-800 pb-2",children:[N.jsx("h2",{className:"text-3xl font-black text-neon-blue uppercase tracking-tighter italic",children:"HALL OF FAME"}),N.jsx("button",{onClick:i,className:"text-zinc-500 hover:text-white p-2",children:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),N.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[N.jsx(cs,{label:"LEVELS BEAT",value:n.levelsCompleted,color:"text-neon-pink"}),N.jsx(cs,{label:"ROWS SOLVED",value:n.rowsSolved,color:"text-neon-green"}),N.jsx(cs,{label:"TOTAL MOVES",value:n.totalMoves,color:"text-neon-aqua"}),N.jsx(cs,{label:"TIME PLAYED",value:l,color:"text-white"})]}),N.jsxs("div",{className:"mt-2 p-3 bg-black/50 border border-zinc-800 rounded-medium flex flex-col gap-4",children:[N.jsxs("div",{children:[N.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"CATEGORY MASTERY"}),N.jsxs("div",{className:"text-2xl font-black text-neon-gold leading-none mb-1",children:[n.solvedCategoryIds.length," / ",c]}),N.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:N.jsx("div",{className:"h-full bg-neon-gold shadow-[0_0_10px_#FFD400]",style:{width:`${Math.min(100,n.solvedCategoryIds.length/c*100)}%`}})})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"WORD MASTERY"}),N.jsxs("div",{className:"text-2xl font-black text-neon-purple leading-none mb-1",children:[n.solvedWords?n.solvedWords.length:0," / ",d]}),N.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:N.jsx("div",{className:"h-full bg-neon-purple shadow-[0_0_10px_#D400FF]",style:{width:`${Math.min(100,(n.solvedWords?n.solvedWords.length:0)/d*100)}%`}})})]})]}),N.jsx("button",{onClick:i,className:"w-full py-4 bg-white text-black font-black text-xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg",children:"BACK TO GAME"})]})})},cs=({label:i,value:n,color:r})=>N.jsxs("div",{className:"flex flex-col gap-0.5",children:[N.jsx("span",{className:"text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none",children:i}),N.jsx("span",{className:`text-xl font-black ${r} tracking-tight`,children:n})]}),NS={textShadow:`
    1px 1px 1.2px #000, 
    -1px -1px 1.2px #000, 
    1px -1px 1.2px #000, 
    -1px 1px 1.2px #000, 
    1.5px 0 1.2px #000, 
    -1.5px 0 1.2px #000, 
    0 1.5px 1.2px #000, 
    0 -1.5px 1.2px #000, 
    3px 3px 2.5px rgba(0,0,0,1),
    0 0 18px rgba(0,0,0,0.95),
    0 0 8px rgba(0,0,0,0.9)
  `,paintOrder:"stroke fill",fontWeight:700},iL={textShadow:`
    1px 1px 1.2px #000, 
    -1px -1px 1.2px #000, 
    1px -1px 1.2px #000, 
    -1px 1px 1.2px #000, 
    1.5px 0 1.2px #000, 
    -1.5px 0 1.2px #000, 
    0 1.5px 1.2px #000, 
    0 -1.5px 1.2px #000, 
    3px 3px 2.5px rgba(0,0,0,1),
    0 0 18px rgba(0,0,0,0.95)
  `,paintOrder:"stroke fill",fontWeight:700},nL={textShadow:`
    2px 2px 1.5px #000, 
    -1px -1px 1.2px #000, 
    1px -1px 1.2px #000, 
    -1px 1px 1.2px #000, 
    4px 4px 4px rgba(0,0,0,0.6),
    0 0 18px rgba(0,0,0,0.9)
  `,filter:"drop-shadow(0 0 8px rgba(255,255,255,0.4))",paintOrder:"stroke fill"},oL={neutral:{scale:1,rotate:0,opacity:1,borderWidth:"2px",boxShadow:"0 0 0px rgba(255,255,255,0)",transition:{duration:.4,ease:"easeInOut"}},selected:{scale:1,rotate:0,zIndex:50,borderWidth:"0px",boxShadow:["inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)","inset 0 0 20px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.5)","inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)"],transition:{boxShadow:{repeat:1/0,duration:.6,ease:"easeInOut"},scale:{duration:.2}}},swapping:{scale:1.1,rotate:0,zIndex:60,borderWidth:"0px",transition:{duration:.4,ease:"easeInOut"}},"swap-target":{scale:1.1,rotate:0,zIndex:60,borderWidth:"0px",boxShadow:["inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)","inset 0 0 20px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.5)","inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)"],transition:{boxShadow:{repeat:1/0,duration:.6,ease:"easeInOut"},scale:{duration:.4,ease:"easeInOut"}}},solved:{scale:.95,rotate:0,zIndex:5,borderWidth:"2px",transition:{duration:.4,ease:"easeOut"}},hint:{scale:1.05,borderWidth:"4px",borderColor:"#F9FF00",boxShadow:["0 0 0px #F9FF00","0 0 20px #F9FF00","0 0 0px #F9FF00"],transition:{boxShadow:{repeat:1/0,duration:.5}}},wrong:{x:[0,-12,10,-8,6,-4,2,0],transition:{duration:.3,ease:"linear"}},"correct-preview":{scale:1.1,zIndex:25,transition:{yoyo:1/0,duration:.15}},locked:{scale:.95,opacity:.8},"fading-out-bg":{opacity:[.6,1],scale:[.95,1],filter:"brightness(1)",transition:{duration:.2,ease:"easeInOut"}}},rL={initial:{opacity:0,scale:.8},neutral:{opacity:1,scale:1,transition:{duration:.2}},selected:{opacity:1,scale:1,transition:{duration:.2}},solved:{opacity:1,scale:1,transition:{duration:.2}},wrong:{opacity:1,scale:1,transition:{duration:.2}},swapping:{opacity:.7,scale:.9,transition:{duration:.2}},"swap-target":{opacity:.7,scale:.9,transition:{duration:.2}},hint:{opacity:1,scale:1},exit:{opacity:0,scale:.8,transition:{duration:.2}}},sL=(i,n)=>{const r="border-white transition-all duration-200 ";return i==="solved"?r+(n||"bg-zinc-800")+" shadow-[inset_0_0_15px_rgba(255,255,255,0.95)]":i==="hint"?r+"bg-zinc-900 border-neon-yellow shadow-[0_0_15px_#F9FF00]":i==="wrong"?r+"bg-neon-red shadow-[0_0_25px_#FF073A]":i==="locked"?r+"border-neon-yellow shadow-[0_0_12px_rgba(249,255,0,0.6)]":i==="correct-preview"?r+"border-neon-green shadow-[0_0_20px_#39FF14]":i==="selected"||i==="swap-target"||i==="swapping"?"border-none":i==="neutral"?r+(n?`${n} border-white/60`:"bg-zinc-900"):r+"bg-black border-zinc-700"},lL=(i,n,r,l,c)=>{if(n)return r?"text-3xl md:text-4xl":"text-4xl md:text-5xl";const d=(i||"").trim().split(/\s+/),S=Math.max(...d.map(T=>T.length)),E=d.length;let h="text-base";return l||c?E>=3||S>8?h="text-[10px] md:text-[11px]":E===2||S>6?h="text-[12px] md:text-[13px]":h="text-[14px] md:text-[16px]":E>=3||S>10?h="text-[10px] md:text-xs":E===2||S>7?h="text-sm md:text-base":h="text-lg md:text-xl",`${h} font-black font-oswald uppercase leading-[1.1] tracking-wide`},Oi=gS,uL={fontFamily:'"Oswald", sans-serif',backfaceVisibility:"hidden"},WR=Pi.forwardRef(({data:i,onClick:n,disabled:r,targetColor:l,isCascade:c,isNarrow:d,...S},E)=>{const h=i.status==="swapping"||i.status==="swap-target",T=i.status==="solved",R=i.status==="selected",f=i.status==="swapping",C=i.status==="swap-target",L=i.status==="correct-preview",v=i.status==="locked",V=sL(i.status,c||T?i.color||l:void 0),B=lL(i.word,i.isEmoji,T,c,d);let I={};R||C||f?I.backgroundColor="#000000":v?I.backgroundColor="#F9FF00":L&&(I.backgroundColor="#39FF14");const b=()=>{if(i.isEmoji)return i.word;const _=(i.word||"").trim().split(/\s+/);return _.length<=1?N.jsx("span",{className:"max-w-full truncate",children:i.word}):_.map(($,X)=>N.jsx("span",{className:"block w-full leading-[1.0] whitespace-nowrap uppercase max-w-full truncate",children:$},X))},x=i.isEmoji?{filter:T?"brightness(1.2)":"none"}:{},J="linear-gradient(to right, #FF073A, #FF5F1F, #F9FF00, #00F000, #00FFFF, #0066FF, #B026FF, #FF1FBF, #FF073A)";return N.jsx("div",{className:"relative w-full h-full flex flex-col items-center justify-center overflow-visible touch-action-manipulation",children:N.jsxs(Oi.div,{layout:!0,ref:E,initial:"neutral",animate:i.status,variants:oL,onClick:()=>!r&&n(i.id),className:`relative w-full flex items-center justify-center cursor-pointer select-none rounded-small z-10 ${V} h-full touch-action-manipulation overflow-hidden`,style:{...uL,...I,boxSizing:"border-box",transition:"background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out"},...S,children:[N.jsx(Oc,{children:(R||C||f)&&N.jsx(Oi.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4,ease:"easeInOut"},className:"absolute inset-0 z-0",children:N.jsx(Oi.div,{className:"absolute inset-0",style:{background:C?J:"#FFFFFF",backgroundSize:"200% 100%",animation:C?"rainbow-flow 1.5s linear infinite":"none"},children:N.jsx(Oi.div,{className:"absolute inset-[4px] rounded-[4px]",style:{background:C?"#FFFFFF":J,backgroundSize:"200% 100%",animation:R||f?"rainbow-flow 1.5s linear infinite":"none"},children:N.jsx("div",{className:"absolute inset-[3px] bg-black rounded-[2px]"})})})},"selection-border-container")}),N.jsx(Oc,{children:(R||C||h||T)&&N.jsx(Oi.div,{className:"absolute inset-0 pointer-events-none z-20 overflow-hidden",initial:{opacity:0},animate:{opacity:h?.9:R||C?[.3,.5,.3]:.4},transition:R||C?{duration:.75,repeat:1/0,ease:"easeInOut"}:{duration:.2},exit:{opacity:0},children:N.jsx(Oi.div,{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%]",animate:{x:["-100%","100%"]},transition:{duration:h?.2:R||C?1:1.25,repeat:1/0,ease:"linear"},style:{skewX:"-25deg"}})})}),N.jsx(Oc,{mode:"wait",children:N.jsx(Oi.span,{variants:rL,initial:"initial",animate:i.status,exit:"exit",className:`${B} text-white z-30 text-center px-2 pointer-events-none w-full flex flex-col items-center justify-center max-w-full`,style:{...i.isEmoji?nL:c?iL:NS,...x,maxHeight:"100%"},children:b()},i.word)})]})})});WR.displayName="Tile";const cL=Pi.memo(WR),SL=({text:i,sizeClass:n="text-2xl",className:r="",active:l=!0,gradient:c="#00E5FF"})=>{const d="white",S="black";return N.jsx("div",{className:`relative inline-block ${r} ${l?"":"opacity-40 grayscale contrast-125"}`,children:N.jsx("span",{className:`${n} font-black uppercase font-oswald leading-none tracking-tight select-none`,style:{color:c,textShadow:`
            /* Black high-contrast inner border */
            -1.5px -1.5px 0 ${S},  
             1.5px -1.5px 0 ${S},
            -1.5px  1.5px 0 ${S},
             1.5px  1.5px 0 ${S},
            
            /* Smooth white outer "Arcade Cabinet" boundary */
            -3px -3px 0 ${d},
             0px -3px 0 ${d},
             3px -3px 0 ${d},
             3px  0px 0 ${d},
             3px  3px 0 ${d},
             0px  3px 0 ${d},
            -3px  3px 0 ${d},
            -3px  0px 0 ${d},
            
            /* Fills for corner smoothing */
            -2px -3px 0 ${d},
             2px -3px 0 ${d},
             3px -2px 0 ${d},
             3px  2px 0 ${d},
             2px  3px 0 ${d},
            -2px  3px 0 ${d},
            -3px  2px 0 ${d},
            -3px -2px 0 ${d},

            /* Deep background shadow for arcade depth */
            4px 4px 0px rgba(0,0,0,1)
          `,display:"block"},children:i})})},dL=Pi.memo(SL),sm=({path:i,viewBox:n="0 0 24 24",className:r="",active:l=!0,sizeClass:c="w-8 h-8",color:d="#F9FF00"})=>N.jsxs("div",{className:`relative ${c} ${r} transition-opacity duration-300`,children:[N.jsx("svg",{viewBox:n,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:0},children:N.jsx("path",{d:i,fill:"white",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"})}),N.jsx("svg",{viewBox:n,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:10},children:N.jsx("path",{d:i,fill:"black",stroke:"black",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),N.jsx("svg",{viewBox:n,className:"relative w-full h-full overflow-visible",style:{zIndex:20},children:N.jsx("path",{d:i,fill:l?d:"#555555",className:"transition-colors duration-300"})})]}),AL=({modeName:i,levelIndex:n,onOpenSettings:r,isReviewing:l,onNext:c,hintsEnabled:d,onToggleHints:S,children:E,leftContent:h,rowsLeft:T})=>{const R="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",f="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84a.484.484 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 0 0-.59.22L2.65 8.91a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.27.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",C=["#FF073A","#00FFFF","#39FF14","#F9FF00","#D400FF","#FF1FBF","#0066FF","#FF5F1F"],L=C[n%C.length];return N.jsxs("header",{className:"relative flex items-center justify-end px-2 sm:px-4 shrink-0 z-[10] bg-black select-none w-full overflow-hidden border-b border-zinc-900",style:{height:Uh,minHeight:Uh},children:[l&&c?N.jsx("button",{onClick:c,className:"px-6 py-0 text-white font-black font-oswald text-lg md:text-xl uppercase rounded-medium border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.8)] bg-black active:scale-95 animate-border-pulse transition-all",style:NS,children:"NEXT LEVEL"}):N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsxs("div",{className:"flex items-center gap-1",children:[N.jsxs("span",{className:"text-[9px] text-zinc-500 font-black uppercase tracking-tight font-oswald whitespace-nowrap",children:["LVL ",n]}),T!==void 0&&N.jsxs("span",{className:"text-[9px] text-neon-blue font-black uppercase border-l border-zinc-800 pl-1 font-oswald whitespace-nowrap",children:["ROWS: ",T]}),N.jsx(dL,{text:i,sizeClass:"text-xl md:text-2xl",gradient:L,className:"whitespace-nowrap ml-1"})]}),N.jsxs("div",{className:"flex items-center",children:[S&&N.jsx("button",{onClick:S,className:"transform transition-transform active:scale-90 p-0.5",children:N.jsx(sm,{path:R,active:d,sizeClass:"w-7 h-7"})}),N.jsx("button",{onClick:r,className:"transform transition-transform active:scale-90 p-0.5",children:N.jsx(sm,{path:f,active:!0,sizeClass:"w-7 h-7",color:"#FFFFFF"})})]})]}),N.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[2px] bg-[linear-gradient(to_right,#FF073A,#FF5F1F,#F9FF00,#00F000,#00FFFF,#0066FF,#B026FF,#FF1FBF,#FF073A)]",style:{backgroundSize:"200% 100%",animation:"rainbow-flow 3s linear infinite"}})]})},EL=Pi.memo(AL),YR=[{id:"t0",word:"APPLE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t1",word:"BANANA",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t2",word:"GRAPE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t3",word:"DOG",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t4",word:"CAT",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t5",word:"LION",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t6",word:"TIGER",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t7",word:"PEAR",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t8",word:"RED",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t9",word:"BLUE",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t10",word:"GREEN",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t11",word:"YELLOW",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t12",word:"HAMMER",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t13",word:"DRILL",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t14",word:"SAW",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t15",word:"WRENCH",categoryId:"tool",categoryName:"TOOL",status:"neutral"}],hL=()=>{const i=JSON.parse(JSON.stringify(YR)),n=i[10];i[10]=i[13],i[13]=n;const r=i[11];return i[11]=i[12],i[12]=r,i},TL=i=>i===te.CLASSIC?"CLASSIC GRID":i===te.LEVEL_EMOJI?"EMOJI MATCH":i===te.LEVEL_SYNONYMS?"SYNONYMS":i===te.LEVEL_THEMED?"THEMED":i===te.LEVEL_MIND_MATCH?"MIND MATCH":"TUTORIAL",mL=({mode:i,onComplete:n})=>{const r=i===te.CLASSIC||i===te.LEVEL_EMOJI||i===te.LEVEL_THEMED||i===te.LEVEL_SYNONYMS,[l,c]=K.useState(1),[d,S]=K.useState(r?hL():YR),E=K.useRef(new Map),h=async(R,f)=>{const C=E.current.get(R),L=E.current.get(f);if(Zt.playSwap(),C&&L){const v=C.getBoundingClientRect(),V=L.getBoundingClientRect(),B=V.left-v.left,I=V.top-v.top;C.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",C.style.transform=`translate(${B}px, ${I}px) scale(1.1)`,C.style.zIndex="50",C.style.boxShadow="0 10px 20px rgba(0,0,0,0.5)",L.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",L.style.transform=`translate(${-B}px, ${-I}px) scale(0.9)`,L.style.zIndex="40",await new Promise(b=>setTimeout(b,400)),C.style.transition="",C.style.transform="",C.style.zIndex="",C.style.boxShadow="",L.style.transition="",L.style.transform="",L.style.zIndex=""}};K.useEffect(()=>{if(!r)return;let R=!0;return(async()=>{if(await new Promise(B=>setTimeout(B,600)),!R)return;const C="t13",L="t10";if(await new Promise(B=>setTimeout(B,300)),!R||(S(B=>B.map(I=>I.id===C?{...I,status:"selected"}:I)),Zt.playSelect(),await new Promise(B=>setTimeout(B,400)),!R)||(S(B=>B.map(I=>I.id===L?{...I,status:"swap-target"}:I)),Zt.playSelect(),await new Promise(B=>setTimeout(B,200)),!R)||(await h(C,L),S(B=>{const I=[...B],b=I.findIndex(J=>J.id===C),x=I.findIndex(J=>J.id===L);return[I[b],I[x]]=[I[x],I[b]],I[b]={...I[b],status:"neutral"},I[x]={...I[x],status:"neutral"},I}),await new Promise(B=>setTimeout(B,400)),!R))return;const v="t12",V="t11";await new Promise(B=>setTimeout(B,300)),R&&(S(B=>B.map(I=>I.id===v?{...I,status:"selected"}:I)),Zt.playSelect(),await new Promise(B=>setTimeout(B,400)),R&&(S(B=>B.map(I=>I.id===V?{...I,status:"swap-target"}:I)),Zt.playSelect(),await new Promise(B=>setTimeout(B,200)),R&&(await h(v,V),S(B=>{const I=[...B],b=I.findIndex(J=>J.id===v),x=I.findIndex(J=>J.id===V);return[I[b],I[x]]=[I[x],I[b]],I[b]={...I[b],status:"neutral"},I[x]={...I[x],status:"neutral"},I}),await new Promise(B=>setTimeout(B,400)),R&&(Zt.playRowSolved(),S(B=>B.map((I,b)=>b>=8&&b<12?{...I,status:"solved",color:"bg-neon-green border-white"}:b>=12?{...I,status:"solved",color:"bg-neon-yellow border-white"}:I)),c(4),await new Promise(B=>setTimeout(B,600)),R&&(Zt.playSelect(),S(B=>B.map(I=>I.id==="t3"?{...I,status:"selected"}:I)),c(5),await new Promise(B=>setTimeout(B,800)),R&&(Zt.playSelect(),S(B=>B.map(I=>I.id==="t7"?{...I,status:"swap-target"}:I)),await new Promise(B=>setTimeout(B,200)),await h("t3","t7"),S(B=>{const I=[...B],b=I.findIndex(J=>J.id==="t3"),x=I.findIndex(J=>J.id==="t7");return[I[b],I[x]]=[I[x],I[b]],I[b]={...I[b],status:"neutral"},I[x]={...I[x],status:"neutral"},I}),await new Promise(B=>setTimeout(B,300)),R&&(Zt.playRowSolved(),Zt.playWin(),S(B=>B.map((I,b)=>b<4?{...I,status:"solved",color:"bg-neon-blue border-white"}:b>=4&&b<8?{...I,status:"solved",color:"bg-neon-pink border-white"}:b>=8&&b<12?{...I,status:"solved",color:"bg-neon-green border-white"}:b>=12?{...I,status:"solved",color:"bg-neon-yellow border-white"}:I)),await new Promise(B=>setTimeout(B,800)),R&&(c(6),await new Promise(B=>setTimeout(B,2500)),R&&(c(7),await new Promise(B=>setTimeout(B,2500)),R&&c(8))))))))))})(),()=>{R=!1}},[r]),K.useEffect(()=>{if(!r){const R=setTimeout(()=>{n()},3e3);return()=>clearTimeout(R)}},[r,n]);const T=()=>{var f;const R=[];for(let C=0;C<4;C++){const L=d.slice(C*4,C*4+4),v=L.every(I=>I.status==="solved"),V=(f=L[0])==null?void 0:f.categoryName;R.push(N.jsx("div",{className:"relative w-full z-10 flex flex-col justify-center min-h-0 flex-1 overflow-visible",children:N.jsxs("div",{className:"relative w-full h-full p-1",children:[v&&N.jsx("div",{className:"absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-medium"}),v&&N.jsx("div",{className:"absolute top-0 left-6 z-[100] transform",style:{transform:"translateY(calc(-100% + 4px))"},children:N.jsx("div",{className:"animate-pop bg-black text-white px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] font-oswald",children:V})}),N.jsx("div",{className:`grid grid-cols-4 gap-2 w-full h-full relative z-10 transition-all duration-300 ${v?"drop-shadow-xl p-3":""}`,children:L.map(I=>N.jsx("div",{className:"relative w-full h-full",children:N.jsx(cL,{data:I,"data-tile-id":I.id,onClick:()=>{},disabled:!0,ref:b=>{b?E.current.set(I.id,b):E.current.delete(I.id)}})},I.id))})]})},C))}return R};return N.jsxs("div",{className:"absolute inset-0 z-[200] bg-black flex flex-col font-oswald animate-fade-in",children:[N.jsx(EL,{modeName:TL(i),levelIndex:1,onOpenSettings:()=>{},isReviewing:!1,hintsEnabled:!0,onManualHint:()=>{},onToggleHints:()=>{}}),N.jsx("div",{className:"flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden",children:N.jsxs("div",{className:`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${l>=6?"blur-sm opacity-40 scale-95":""}`,children:[N.jsx("div",{className:"w-full max-w-sm aspect-square max-h-[55vh] bg-zinc-900/50 rounded-xl p-2 mb-4 border-2 border-zinc-700 relative flex flex-col shrink-0 shadow-2xl overflow-visible mt-8",children:N.jsx("div",{className:"w-full h-full flex flex-col gap-1",children:T()})}),N.jsxs("div",{className:"h-16 flex items-center justify-center mb-4 shrink-0 w-full px-4",children:[l===1&&N.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop shadow-lg text-center",children:N.jsx("p",{className:"text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"FIND 4 TILES THAT BELONG TOGETHER"})}),(l===2||l===3)&&N.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-neon-blue animate-fade-in shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center",children:N.jsx("p",{className:"text-neon-blue font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"SWAP TO MAKE A MATCH"})})]}),N.jsx("button",{onClick:n,className:`text-zinc-500 font-oswald text-sm uppercase tracking-widest hover:text-white transition-colors mt-auto pb-4 ${l>=6?"opacity-0 pointer-events-none":""}`,children:"SKIP TUTORIAL"})]})}),l===6&&N.jsx("div",{className:"absolute top-[60px] right-[50px] z-[220] animate-bounce",children:N.jsxs("div",{className:"relative",children:[N.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-yellow absolute -top-2 right-4"}),N.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-yellow text-center shadow-[0_0_15px_rgba(255,255,0,0.3)]",children:N.jsxs("p",{className:"text-neon-yellow font-oswald text-sm font-bold uppercase",children:["TURN HINTS",N.jsx("br",{}),"ON AND OFF"]})})]})}),l===7&&N.jsx("div",{className:"absolute top-[60px] right-[10px] z-[220] animate-bounce",children:N.jsxs("div",{className:"relative",children:[N.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-blue absolute -top-2 right-2"}),N.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-blue text-center shadow-[0_0_15px_rgba(0,229,255,0.3)]",children:N.jsx("p",{className:"text-neon-blue font-oswald text-sm font-bold uppercase",children:"SETTINGS"})})]})}),l===8&&N.jsx("div",{className:"absolute inset-0 z-[210] flex items-center justify-center",children:N.jsx("button",{onClick:n,className:"px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop",children:"START"})})]})},RL=gS.div,fL=({isOpen:i,onClose:n,selectedIds:r,onToggle:l})=>{const[c,d]=K.useState(""),S=K.useMemo(()=>[...Ii(),...Es(),...hs()].sort((C,L)=>C.name.localeCompare(L.name)),[]),E=K.useMemo(()=>{if(!c.trim())return S;const f=c.toUpperCase();return S.filter(C=>C.name.toUpperCase().includes(f))},[c,S]),h=f=>{r.includes(f)?l(r.filter(C=>C!==f)):l([...r,f])},T=()=>{l(S.map(f=>f.id))},R=()=>{l([])};return i?N.jsx("div",{className:"absolute inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald",children:N.jsxs(RL,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col gap-3 overflow-hidden h-[90vh]",children:[N.jsxs("div",{className:"flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[N.jsx("h2",{className:"text-xl font-black text-neon-yellow uppercase tracking-widest italic drop-shadow-[0_0_5px_rgba(249,255,0,0.8)]",children:"MANAGE POOL"}),N.jsx("button",{className:"text-zinc-400 hover:text-white transition-colors p-1",onClick:n,children:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),N.jsx("p",{className:"text-[10px] text-zinc-500 font-bold uppercase tracking-wider leading-tight px-1",children:"Select categories you want to appear in your puzzles. If empty, the full global pool is used."}),N.jsx("div",{className:"flex gap-2 shrink-0",children:N.jsx("input",{type:"text",placeholder:"SEARCH CATEGORIES...",value:c,onChange:f=>d(f.target.value),className:"flex-1 bg-black border-2 border-zinc-800 rounded-medium px-3 py-2 text-white font-bold text-xs focus:border-neon-blue outline-none transition-colors"})}),N.jsxs("div",{className:"flex gap-2 shrink-0",children:[N.jsx("button",{onClick:T,className:"flex-1 py-1.5 bg-zinc-900 border border-zinc-700 text-[9px] font-black uppercase text-zinc-400 rounded-small hover:text-white transition-colors",children:"Select All"}),N.jsx("button",{onClick:R,className:"flex-1 py-1.5 bg-zinc-900 border border-zinc-700 text-[9px] font-black uppercase text-zinc-400 rounded-small hover:text-white transition-colors",children:"Clear All"})]}),N.jsx("div",{className:"flex-1 overflow-y-auto no-scrollbar pr-1 flex flex-col gap-1.5 bg-black/40 rounded-medium p-1",children:E.length===0?N.jsx("div",{className:"py-10 text-center text-zinc-700 font-bold uppercase text-xs",children:"No results found"}):E.map(f=>{const C=r.includes(f.id);return N.jsxs("button",{onClick:()=>h(f.id),className:`w-full flex items-center justify-between px-3 py-2.5 rounded-medium border-2 transition-all ${C?"bg-zinc-900 border-neon-blue text-white shadow-[0_0_8px_rgba(0,229,255,0.2)]":"bg-black border-zinc-800 text-zinc-600"}`,children:[N.jsx("span",{className:"font-bold text-[11px] uppercase tracking-tight truncate mr-2",children:f.name}),N.jsx("div",{className:`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${C?"border-neon-blue bg-neon-blue shadow-[0_0_5px_#00E5FF]":"border-zinc-800"}`,children:C&&N.jsx("span",{className:"text-[10px] text-black font-black",children:"✓"})})]},f.id)})}),N.jsx("div",{className:"pt-2 border-t border-zinc-800 shrink-0",children:N.jsxs("button",{onClick:n,className:"w-full py-3 bg-white text-black font-black text-lg uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_15px_white]",style:NS,children:["CONFIRM POOL (",r.length,")"]})})]})}):null},CL=()=>N.jsxs("footer",{className:"relative w-full bg-black flex flex-col items-center justify-center shrink-0 z-[60] border-t border-zinc-900",style:{height:PO},children:[N.jsx("div",{className:"absolute top-0 left-0 w-full h-[4px] bg-[linear-gradient(to_right,#FF073A,#FF5F1F,#F9FF00,#00F000,#00FFFF,#0066FF,#B026FF,#FF1FBF,#FF073A)]",style:{backgroundSize:"200% 100%",animation:"rainbow-flow 3s linear infinite"}}),N.jsx("div",{className:"w-full h-full bg-black flex items-center justify-center overflow-hidden",children:N.jsx("div",{className:"text-zinc-800 font-bold text-[8px] uppercase tracking-tighter opacity-20 select-none",children:"Ad Space"})})]}),OL=Pi.memo(CL),pL=()=>N.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"env(safe-area-inset-top, 0px)"}}),gL=()=>N.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"env(safe-area-inset-bottom, 16px)"}}),NL=K.lazy(()=>Di(()=>import("./Level1_Standard-B8GiGBZy.js"),__vite__mapDeps([0,1,2,3]))),IL=K.lazy(()=>Di(()=>import("./Level1_Emoji-NOkasxBb.js"),__vite__mapDeps([4,1,2,3]))),yL=K.lazy(()=>Di(()=>import("./Level2_Filter-CsSUtttx.js"),__vite__mapDeps([5,2,3]))),LL=K.lazy(()=>Di(()=>import("./Level5_Group-Cmbcd-GC.js"),__vite__mapDeps([6,3]))),ML=K.lazy(()=>Di(()=>import("./Level7_Expansion-CnxIY76e.js"),__vite__mapDeps([7,1,2,3]))),PL=K.lazy(()=>Di(()=>import("./Level8_Cascade-CgbLVkzA.js"),__vite__mapDeps([8,2,3]))),DL="ca-app-pub-4096368901415767/2019330695",lm="ca-app-pub-4096368901415767/1153913539",BL=()=>{try{const i=document.createElement("div");i.style.height="env(safe-area-inset-bottom, 0px)",i.style.visibility="hidden",i.style.position="absolute",document.body.appendChild(i);const n=i.offsetHeight;return document.body.removeChild(i),Math.max(n,16)}catch{return 16}};class HL extends Pi.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){console.error("Game crashed:",n,r)}render(){const{hasError:n}=this.state,{children:r}=this.props;return n?N.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center",children:[N.jsx("h1",{className:"text-3xl font-bold mb-4 font-oswald text-red-500 uppercase",children:"System Error"}),N.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-white text-black font-bold rounded-full uppercase font-oswald border-2 border-white",children:"Reboot"})]}):r}}const um=()=>N.jsx("div",{className:"flex items-center justify-center h-full w-full bg-black",children:N.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"})}),vL=()=>{const[i,n]=K.useState(te.MENU),[r,l]=K.useState(1),[c,d]=K.useState(!0),[S,E]=K.useState(!1),[h,T]=K.useState(!1),[R,f]=K.useState(!1),[C,L]=K.useState(!0),[v,V]=K.useState(!1),[B,I]=K.useState([]),[b,x]=K.useState(!1),[J,_]=K.useState(null),[$,X]=K.useState([]),[z,oe]=K.useState([]),[le,Ie]=K.useState(!1),[Re,be]=K.useState(null),[we,Ye]=K.useState(void 0),[F,W]=K.useState(!1);K.useEffect(()=>{l(HO()),X(bO()),oe(FO())},[]),K.useEffect(()=>{(async()=>{if(Li.isNativePlatform())try{await pa.initialize({});const U=await pa.requestConsentInfo();U.isConsentFormAvailable&&U.status===Ic.REQUIRED&&await pa.showConsentForm(),U.privacyOptionsRequirementStatus==="REQUIRED"&&W(!0),await pa.showBanner({adId:DL,adSize:Nc.BANNER,position:gc.BOTTOM_CENTER,margin:BL(),isTesting:!1}),await pa.prepareInterstitial({adId:lm,isTesting:!1}).catch(()=>{})}catch(U){console.error("AdMob init failed",U)}})()},[]),K.useEffect(()=>{const O=Ep(r,$,z,we);be(O)},[r,$,z,we]),K.useEffect(()=>{i!==te.MENU&&!kO()&&V(!0)},[i]),K.useEffect(()=>{if(le&&b){const O=setTimeout(()=>{ce()},3e3);return()=>clearTimeout(O)}},[le,b]);const j=O=>{VO({levelsCompleted:O.failed?0:1,totalMoves:O.moves,totalTimeMs:O.timeMs,rowsSolved:i===te.LEVEL_MIND_MATCH?12:4,solvedCategoryIds:O.solvedCategoryIds,solvedWords:O.solvedWords}),_({levelIndex:r,mode:i,timeMs:O.timeMs,moves:O.moves,mistakes:O.mistakes||0,score:Math.max(0,1e3-O.moves*10-(O.mistakes||0)*50)}),x(!0)},ce=async()=>{Li.isNativePlatform()&&(await pa.showInterstitial().catch(()=>{}),await pa.prepareInterstitial({adId:lm,isTesting:!1}).catch(()=>{}));const O=r+1;l(O),vO(O),Ye(void 0),n(pc(O,$)),x(!1),_(null)},me=()=>{if(i===te.MENU)return N.jsx(Ip,{onStart:()=>n(we||(Re?Re.mode:pc(r,$))),onSettings:()=>E(!0),onStats:()=>T(!0),lastLevel:r});if(!Re||Re.mode!==i)return N.jsx(um,{});const{data:O,themeName:U}=Re;return N.jsx(K.Suspense,{fallback:N.jsx(um,{}),children:(()=>{switch(i){case te.CLASSIC:case te.LEVEL_THEMED:case te.LEVEL_SYNONYMS:return N.jsx(NL,{csvData:O,mode:i,levelIndex:r,onComplete:j,onExit:()=>n(te.MENU),hintsEnabled:C,setHintsEnabled:L,onOpenSettings:Y=>{I(Y||[]),E(!0)},isReviewing:b,onNext:ce,isAutoPlaying:le,themeName:U},`lvl-${r}`);case te.LEVEL_EMOJI:return N.jsx(IL,{levelIndex:r,onComplete:j,onExit:()=>n(te.MENU),hintsEnabled:C,setHintsEnabled:L,onOpenSettings:Y=>{I(Y||[]),E(!0)},isReviewing:b,onNext:ce,isAutoPlaying:le},`lvl-${r}`);case te.LEVEL_MIND_MATCH:return N.jsx(LL,{csvData:O,levelIndex:r,onComplete:j,onExit:()=>n(te.MENU),hintsEnabled:C,setHintsEnabled:L,onOpenSettings:Y=>{I(Y||[]),E(!0)},isReviewing:b,onNext:ce,isAutoPlaying:le},`lvl-${r}`);case te.LEVEL_EXPANSION:return N.jsx(ML,{csvData:O,levelIndex:r,onComplete:j,onExit:()=>n(te.MENU),hintsEnabled:C,setHintsEnabled:L,onOpenSettings:Y=>{I(Y||[]),E(!0)},isReviewing:b,onNext:ce,isAutoPlaying:le},`lvl-${r}`);case te.LEVEL_CASCADE:return N.jsx(PL,{csvData:O,levelIndex:r,onComplete:j,onExit:()=>n(te.MENU),hintsEnabled:C,onOpenSettings:Y=>{I(Y||[]),E(!0)},setHintsEnabled:L,isReviewing:b,onNext:ce,isAutoPlaying:le},`lvl-${r}`);default:return N.jsx(yL,{csvData:O,levelIndex:r,onComplete:j,onGameOver:()=>j({timeMs:0,moves:0,failed:!0}),onExit:()=>n(te.MENU),hintsEnabled:C,setHintsEnabled:L,onOpenSettings:Y=>{I(Y||[]),E(!0)},isReviewing:b,onNext:ce,isAutoPlaying:le},`lvl-${r}`)}})()})};return N.jsx(HL,{children:N.jsxs("div",{className:"fixed inset-0 h-full w-screen bg-black text-white font-oswald flex flex-col overflow-hidden",children:[N.jsx(pL,{}),N.jsxs("div",{className:"flex-1 relative flex flex-col min-h-0 w-full overflow-hidden",children:[me(),v&&N.jsx(mL,{mode:i,onComplete:()=>{wO(),V(!1)}})]}),N.jsx(OL,{}),N.jsx(gL,{}),S&&N.jsx(Mp,{isOpen:S,onClose:()=>E(!1),onMainMenu:()=>{Ye(void 0),E(!1),n(te.MENU)},isMusicOn:c,toggleMusic:()=>{d(!c),Zt.setSound(!c)},enabledModes:$,toggleMode:O=>{let U=$.includes(O)?$.length>1?$.filter(Y=>Y!==O):$:[...$,O];X(U),GO(U)},hintsEnabled:C,setHintsEnabled:L,isAutoPlaying:le,onToggleAutoPlay:()=>Ie(!le),onShowTutorial:()=>V(!0),onResetProgress:()=>{localStorage.clear(),window.location.reload()},categories:B,privacyOptionsRequired:F,onShowPrivacyOptions:async()=>{Li.isNativePlatform()&&await pa.showPrivacyOptionsForm().catch(()=>{})}}),R&&N.jsx(fL,{isOpen:R,onClose:()=>f(!1),selectedIds:z,onToggle:O=>{oe(O),UO(O)}}),h&&N.jsx(aL,{onClose:()=>T(!1)})]})})},zR=document.getElementById("root");if(!zR)throw new Error("Could not find root element to mount to");const bL=yO.createRoot(zR);bL.render(N.jsx(Pi.StrictMode,{children:N.jsx(vL,{})}));export{NS as A,te as G,EL as H,Pi as R,GL as T,hm as W,Zt as a,cL as b,Sp as c,Ic as d,hs as g,N as j,gS as m,K as r,ip as s};
