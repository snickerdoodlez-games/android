const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Level1_Standard-FeWySiXN.js","assets/SolvedRowBackground-B2R_DHGB.js","assets/LevelLayout-H574haFZ.js","assets/ParticleOverlay-DVDuRk8g.js","assets/Level1_Emoji-CEo39VIy.js","assets/Level2_Filter-BPhdIndR.js","assets/Level5_Group-CmsKmfMy.js","assets/Level7_Expansion-Bopvxbd7.js","assets/Level7_Expansion_Easy-D_8m-qdw.js","assets/Level7_Expansion_Medium-Dia1buj1.js","assets/Level8_Cascade-CvytEi2m.js"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const S of d.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&l(S)}).observe(document,{childList:!0,subtree:!0});function r(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=r(u);fetch(u.href,d)}})();function Sm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Xc={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function hg(){if(Mh)return No;Mh=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(l,u,d){var S=null;if(d!==void 0&&(S=""+d),u.key!==void 0&&(S=""+u.key),"key"in u){d={};for(var E in u)E!=="key"&&(d[E]=u[E])}else d=u;return u=d.ref,{$$typeof:i,type:l,key:S,ref:u!==void 0?u:null,props:d}}return No.Fragment=n,No.jsx=r,No.jsxs=r,No}var Ph;function Tg(){return Ph||(Ph=1,Xc.exports=hg()),Xc.exports}var p=Tg(),qc={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function mg(){if(Dh)return re;Dh=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),S=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),C=Symbol.iterator;function I(y){return y===null||typeof y!="object"?null:(y=C&&y[C]||y["@@iterator"],typeof y=="function"?y:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function N(y,V,_){this.props=y,this.context=V,this.refs=M,this.updater=_||v}N.prototype.isReactComponent={},N.prototype.setState=function(y,V){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,V,"setState")},N.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function B(){}B.prototype=N.prototype;function x(y,V,_){this.props=y,this.context=V,this.refs=M,this.updater=_||v}var K=x.prototype=new B;K.constructor=x,b(K,N.prototype),K.isPureReactComponent=!0;var J=Array.isArray;function Q(){}var X={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function se(y,V,_){var Y=_.ref;return{$$typeof:i,type:y,key:V,ref:Y!==void 0?Y:null,props:_}}function le(y,V){return se(y.type,V,y.props)}function Ne(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function ue(y){var V={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(_){return V[_]})}var Fe=/\/+/g;function Ve(y,V){return typeof y=="object"&&y!==null&&y.key!=null?ue(""+y.key):V.toString(36)}function We(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Q,Q):(y.status="pending",y.then(function(V){y.status==="pending"&&(y.status="fulfilled",y.value=V)},function(V){y.status==="pending"&&(y.status="rejected",y.reason=V)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function U(y,V,_,Y,ee){var te=typeof y;(te==="undefined"||te==="boolean")&&(y=null);var he=!1;if(y===null)he=!0;else switch(te){case"bigint":case"string":case"number":he=!0;break;case"object":switch(y.$$typeof){case i:case n:he=!0;break;case f:return he=y._init,U(he(y._payload),V,_,Y,ee)}}if(he)return ee=ee(y),he=Y===""?"."+Ve(y,0):Y,J(ee)?(_="",he!=null&&(_=he.replace(Fe,"$&/")+"/"),U(ee,V,_,"",function(Ft){return Ft})):ee!=null&&(Ne(ee)&&(ee=le(ee,_+(ee.key==null||y&&y.key===ee.key?"":(""+ee.key).replace(Fe,"$&/")+"/")+he)),V.push(ee)),1;he=0;var Ge=Y===""?".":Y+":";if(J(y))for(var De=0;De<y.length;De++)Y=y[De],te=Ge+Ve(Y,De),he+=U(Y,V,_,te,ee);else if(De=I(y),typeof De=="function")for(y=De.call(y),De=0;!(Y=y.next()).done;)Y=Y.value,te=Ge+Ve(Y,De++),he+=U(Y,V,_,te,ee);else if(te==="object"){if(typeof y.then=="function")return U(We(y),V,_,Y,ee);throw V=String(y),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return he}function z(y,V,_){if(y==null)return y;var Y=[],ee=0;return U(y,Y,"","",function(te){return V.call(_,te,ee++)}),Y}function $(y){if(y._status===-1){var V=y._result;V=V(),V.then(function(_){(y._status===0||y._status===-1)&&(y._status=1,y._result=_)},function(_){(y._status===0||y._status===-1)&&(y._status=2,y._result=_)}),y._status===-1&&(y._status=0,y._result=V)}if(y._status===1)return y._result.default;throw y._result}var Re=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},Se={map:z,forEach:function(y,V,_){z(y,function(){V.apply(this,arguments)},_)},count:function(y){var V=0;return z(y,function(){V++}),V},toArray:function(y){return z(y,function(V){return V})||[]},only:function(y){if(!Ne(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return re.Activity=R,re.Children=Se,re.Component=N,re.Fragment=r,re.Profiler=u,re.PureComponent=x,re.StrictMode=l,re.Suspense=T,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,re.__COMPILER_RUNTIME={__proto__:null,c:function(y){return X.H.useMemoCache(y)}},re.cache=function(y){return function(){return y.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(y,V,_){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Y=b({},y.props),ee=y.key;if(V!=null)for(te in V.key!==void 0&&(ee=""+V.key),V)!j.call(V,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&V.ref===void 0||(Y[te]=V[te]);var te=arguments.length-2;if(te===1)Y.children=_;else if(1<te){for(var he=Array(te),Ge=0;Ge<te;Ge++)he[Ge]=arguments[Ge+2];Y.children=he}return se(y.type,ee,Y)},re.createContext=function(y){return y={$$typeof:S,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:d,_context:y},y},re.createElement=function(y,V,_){var Y,ee={},te=null;if(V!=null)for(Y in V.key!==void 0&&(te=""+V.key),V)j.call(V,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ee[Y]=V[Y]);var he=arguments.length-2;if(he===1)ee.children=_;else if(1<he){for(var Ge=Array(he),De=0;De<he;De++)Ge[De]=arguments[De+2];ee.children=Ge}if(y&&y.defaultProps)for(Y in he=y.defaultProps,he)ee[Y]===void 0&&(ee[Y]=he[Y]);return se(y,te,ee)},re.createRef=function(){return{current:null}},re.forwardRef=function(y){return{$$typeof:E,render:y}},re.isValidElement=Ne,re.lazy=function(y){return{$$typeof:f,_payload:{_status:-1,_result:y},_init:$}},re.memo=function(y,V){return{$$typeof:h,type:y,compare:V===void 0?null:V}},re.startTransition=function(y){var V=X.T,_={};X.T=_;try{var Y=y(),ee=X.S;ee!==null&&ee(_,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(Q,Re)}catch(te){Re(te)}finally{V!==null&&_.types!==null&&(V.types=_.types),X.T=V}},re.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},re.use=function(y){return X.H.use(y)},re.useActionState=function(y,V,_){return X.H.useActionState(y,V,_)},re.useCallback=function(y,V){return X.H.useCallback(y,V)},re.useContext=function(y){return X.H.useContext(y)},re.useDebugValue=function(){},re.useDeferredValue=function(y,V){return X.H.useDeferredValue(y,V)},re.useEffect=function(y,V){return X.H.useEffect(y,V)},re.useEffectEvent=function(y){return X.H.useEffectEvent(y)},re.useId=function(){return X.H.useId()},re.useImperativeHandle=function(y,V,_){return X.H.useImperativeHandle(y,V,_)},re.useInsertionEffect=function(y,V){return X.H.useInsertionEffect(y,V)},re.useLayoutEffect=function(y,V){return X.H.useLayoutEffect(y,V)},re.useMemo=function(y,V){return X.H.useMemo(y,V)},re.useOptimistic=function(y,V){return X.H.useOptimistic(y,V)},re.useReducer=function(y,V,_){return X.H.useReducer(y,V,_)},re.useRef=function(y){return X.H.useRef(y)},re.useState=function(y){return X.H.useState(y)},re.useSyncExternalStore=function(y,V,_){return X.H.useSyncExternalStore(y,V,_)},re.useTransition=function(){return X.H.useTransition()},re.version="19.2.4",re}var Hh;function zu(){return Hh||(Hh=1,qc.exports=mg()),qc.exports}var W=zu();const Gi=Sm(W);var Qc={exports:{}},Io={},$c={exports:{}},eu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function Rg(){return Bh||(Bh=1,(function(i){function n(U,z){var $=U.length;U.push(z);e:for(;0<$;){var Re=$-1>>>1,Se=U[Re];if(0<u(Se,z))U[Re]=z,U[$]=Se,$=Re;else break e}}function r(U){return U.length===0?null:U[0]}function l(U){if(U.length===0)return null;var z=U[0],$=U.pop();if($!==z){U[0]=$;e:for(var Re=0,Se=U.length,y=Se>>>1;Re<y;){var V=2*(Re+1)-1,_=U[V],Y=V+1,ee=U[Y];if(0>u(_,$))Y<Se&&0>u(ee,_)?(U[Re]=ee,U[Y]=$,Re=Y):(U[Re]=_,U[V]=$,Re=V);else if(Y<Se&&0>u(ee,$))U[Re]=ee,U[Y]=$,Re=Y;else break e}}return z}function u(U,z){var $=U.sortIndex-z.sortIndex;return $!==0?$:U.id-z.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var S=Date,E=S.now();i.unstable_now=function(){return S.now()-E}}var T=[],h=[],f=1,R=null,C=3,I=!1,v=!1,b=!1,M=!1,N=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function K(U){for(var z=r(h);z!==null;){if(z.callback===null)l(h);else if(z.startTime<=U)l(h),z.sortIndex=z.expirationTime,n(T,z);else break;z=r(h)}}function J(U){if(b=!1,K(U),!v)if(r(T)!==null)v=!0,Q||(Q=!0,ue());else{var z=r(h);z!==null&&We(J,z.startTime-U)}}var Q=!1,X=-1,j=5,se=-1;function le(){return M?!0:!(i.unstable_now()-se<j)}function Ne(){if(M=!1,Q){var U=i.unstable_now();se=U;var z=!0;try{e:{v=!1,b&&(b=!1,B(X),X=-1),I=!0;var $=C;try{t:{for(K(U),R=r(T);R!==null&&!(R.expirationTime>U&&le());){var Re=R.callback;if(typeof Re=="function"){R.callback=null,C=R.priorityLevel;var Se=Re(R.expirationTime<=U);if(U=i.unstable_now(),typeof Se=="function"){R.callback=Se,K(U),z=!0;break t}R===r(T)&&l(T),K(U)}else l(T);R=r(T)}if(R!==null)z=!0;else{var y=r(h);y!==null&&We(J,y.startTime-U),z=!1}}break e}finally{R=null,C=$,I=!1}z=void 0}}finally{z?ue():Q=!1}}}var ue;if(typeof x=="function")ue=function(){x(Ne)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Ve=Fe.port2;Fe.port1.onmessage=Ne,ue=function(){Ve.postMessage(null)}}else ue=function(){N(Ne,0)};function We(U,z){X=N(function(){U(i.unstable_now())},z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(U){U.callback=null},i.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<U?Math.floor(1e3/U):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_next=function(U){switch(C){case 1:case 2:case 3:var z=3;break;default:z=C}var $=C;C=z;try{return U()}finally{C=$}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var $=C;C=U;try{return z()}finally{C=$}},i.unstable_scheduleCallback=function(U,z,$){var Re=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Re+$:Re):$=Re,U){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=$+Se,U={id:f++,callback:z,priorityLevel:U,startTime:$,expirationTime:Se,sortIndex:-1},$>Re?(U.sortIndex=$,n(h,U),r(T)===null&&U===r(h)&&(b?(B(X),X=-1):b=!0,We(J,$-Re))):(U.sortIndex=Se,n(T,U),v||I||(v=!0,Q||(Q=!0,ue()))),U},i.unstable_shouldYield=le,i.unstable_wrapCallback=function(U){var z=C;return function(){var $=C;C=z;try{return U.apply(this,arguments)}finally{C=$}}}})(eu)),eu}var vh;function fg(){return vh||(vh=1,$c.exports=Rg()),$c.exports}var tu={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function Cg(){if(Gh)return ct;Gh=1;var i=zu();function n(T){var h="https://react.dev/errors/"+T;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var f=2;f<arguments.length;f++)h+="&args[]="+encodeURIComponent(arguments[f])}return"Minified React error #"+T+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(T,h,f){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:R==null?null:""+R,children:T,containerInfo:h,implementation:f}}var S=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(T,h){if(T==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ct.createPortal=function(T,h){var f=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(n(299));return d(T,h,null,f)},ct.flushSync=function(T){var h=S.T,f=l.p;try{if(S.T=null,l.p=2,T)return T()}finally{S.T=h,l.p=f,l.d.f()}},ct.preconnect=function(T,h){typeof T=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,l.d.C(T,h))},ct.prefetchDNS=function(T){typeof T=="string"&&l.d.D(T)},ct.preinit=function(T,h){if(typeof T=="string"&&h&&typeof h.as=="string"){var f=h.as,R=E(f,h.crossOrigin),C=typeof h.integrity=="string"?h.integrity:void 0,I=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;f==="style"?l.d.S(T,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:R,integrity:C,fetchPriority:I}):f==="script"&&l.d.X(T,{crossOrigin:R,integrity:C,fetchPriority:I,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ct.preinitModule=function(T,h){if(typeof T=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var f=E(h.as,h.crossOrigin);l.d.M(T,{crossOrigin:f,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&l.d.M(T)},ct.preload=function(T,h){if(typeof T=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var f=h.as,R=E(f,h.crossOrigin);l.d.L(T,f,{crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ct.preloadModule=function(T,h){if(typeof T=="string")if(h){var f=E(h.as,h.crossOrigin);l.d.m(T,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:f,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else l.d.m(T)},ct.requestFormReset=function(T){l.d.r(T)},ct.unstable_batchedUpdates=function(T,h){return T(h)},ct.useFormState=function(T,h,f){return S.H.useFormState(T,h,f)},ct.useFormStatus=function(){return S.H.useHostTransitionStatus()},ct.version="19.2.4",ct}var bh;function gg(){if(bh)return tu.exports;bh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),tu.exports=Cg(),tu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function pg(){if(Fh)return Io;Fh=1;var i=fg(),n=zu(),r=gg();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(d(e)!==e)throw Error(l(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,o=t;;){var s=a.return;if(s===null)break;var c=s.alternate;if(c===null){if(o=s.return,o!==null){a=o;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===a)return T(s),e;if(c===o)return T(s),t;c=c.sibling}throw Error(l(188))}if(a.return!==o.return)a=s,o=c;else{for(var A=!1,m=s.child;m;){if(m===a){A=!0,a=s,o=c;break}if(m===o){A=!0,o=s,a=c;break}m=m.sibling}if(!A){for(m=c.child;m;){if(m===a){A=!0,a=c,o=s;break}if(m===o){A=!0,o=c,a=s;break}m=m.sibling}if(!A)throw Error(l(189))}}if(a.alternate!==o)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,C=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),x=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),Ne=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=Ne&&e[Ne]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Symbol.for("react.client.reference");function Ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case N:return"Profiler";case M:return"StrictMode";case J:return"Suspense";case Q:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case x:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Ve(e.type)||"Memo";case j:t=e._payload,e=e._init;try{return Ve(e(t))}catch{}}return null}var We=Array.isArray,U=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},Re=[],Se=-1;function y(e){return{current:e}}function V(e){0>Se||(e.current=Re[Se],Re[Se]=null,Se--)}function _(e,t){Se++,Re[Se]=e.current,e.current=t}var Y=y(null),ee=y(null),te=y(null),he=y(null);function Ge(e,t){switch(_(te,t),_(ee,e),_(Y,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qE(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qE(t),e=QE(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(Y),_(Y,e)}function De(){V(Y),V(ee),V(te)}function Ft(e){e.memoizedState!==null&&_(he,e);var t=Y.current,a=QE(t,e.type);t!==a&&(_(ee,e),_(Y,a))}function pt(e){ee.current===e&&(V(Y),V(ee)),he.current===e&&(V(he),go._currentValue=$)}var yt,Zt;function ri(e){if(yt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);yt=t&&t[1]||"",Zt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+Zt}var vs=!1;function Gs(e,t){if(!e||vs)return"";vs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(G){var H=G}Reflect.construct(e,[],w)}else{try{w.call()}catch(G){H=G}e.call(w.prototype)}}else{try{throw Error()}catch(G){H=G}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=o.DetermineComponentFrameRoot(),A=c[0],m=c[1];if(A&&m){var g=A.split(`
`),D=m.split(`
`);for(s=o=0;o<g.length&&!g[o].includes("DetermineComponentFrameRoot");)o++;for(;s<D.length&&!D[s].includes("DetermineComponentFrameRoot");)s++;if(o===g.length||s===D.length)for(o=g.length-1,s=D.length-1;1<=o&&0<=s&&g[o]!==D[s];)s--;for(;1<=o&&0<=s;o--,s--)if(g[o]!==D[s]){if(o!==1||s!==1)do if(o--,s--,0>s||g[o]!==D[s]){var F=`
`+g[o].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=o&&0<=s);break}}}finally{vs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ri(a):""}function zR(e,t){switch(e.tag){case 26:case 27:case 5:return ri(e.type);case 16:return ri("Lazy");case 13:return e.child!==t&&t!==null?ri("Suspense Fallback"):ri("Suspense");case 19:return ri("SuspenseList");case 0:case 15:return Gs(e.type,!1);case 11:return Gs(e.type.render,!1);case 1:return Gs(e.type,!0);case 31:return ri("Activity");default:return""}}function MS(e){try{var t="",a=null;do t+=zR(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var bs=Object.prototype.hasOwnProperty,Fs=i.unstable_scheduleCallback,Us=i.unstable_cancelCallback,_R=i.unstable_shouldYield,jR=i.unstable_requestPaint,Ot=i.unstable_now,JR=i.unstable_getCurrentPriorityLevel,PS=i.unstable_ImmediatePriority,DS=i.unstable_UserBlockingPriority,jo=i.unstable_NormalPriority,ZR=i.unstable_LowPriority,HS=i.unstable_IdlePriority,XR=i.log,qR=i.unstable_setDisableYieldValue,Bn=null,Nt=null;function Da(e){if(typeof XR=="function"&&qR(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Bn,e)}catch{}}var It=Math.clz32?Math.clz32:ef,QR=Math.log,$R=Math.LN2;function ef(e){return e>>>=0,e===0?32:31-(QR(e)/$R|0)|0}var Jo=256,Zo=262144,Xo=4194304;function si(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qo(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var s=0,c=e.suspendedLanes,A=e.pingedLanes;e=e.warmLanes;var m=o&134217727;return m!==0?(o=m&~c,o!==0?s=si(o):(A&=m,A!==0?s=si(A):a||(a=m&~e,a!==0&&(s=si(a))))):(m=o&~c,m!==0?s=si(m):A!==0?s=si(A):a||(a=o&~e,a!==0&&(s=si(a)))),s===0?0:t!==0&&t!==s&&(t&c)===0&&(c=s&-s,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:s}function vn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BS(){var e=Xo;return Xo<<=1,(Xo&62914560)===0&&(Xo=4194304),e}function ks(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Gn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function af(e,t,a,o,s,c){var A=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,g=e.expirationTimes,D=e.hiddenUpdates;for(a=A&~a;0<a;){var F=31-It(a),w=1<<F;m[F]=0,g[F]=-1;var H=D[F];if(H!==null)for(D[F]=null,F=0;F<H.length;F++){var G=H[F];G!==null&&(G.lane&=-536870913)}a&=~w}o!==0&&vS(e,o,0),c!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=c&~(A&~t))}function vS(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-It(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function GS(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-It(a),s=1<<o;s&t|e[o]&t&&(e[o]|=t),a&=~s}}function bS(e,t){var a=t&-t;return a=(a&42)!==0?1:ws(a),(a&(e.suspendedLanes|t))!==0?0:a}function ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function FS(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:gh(e.type))}function US(e,t){var a=z.p;try{return z.p=e,t()}finally{z.p=a}}var Ha=Math.random().toString(36).slice(2),$e="__reactFiber$"+Ha,ht="__reactProps$"+Ha,Fi="__reactContainer$"+Ha,Vs="__reactEvents$"+Ha,nf="__reactListeners$"+Ha,of="__reactHandles$"+Ha,kS="__reactResources$"+Ha,bn="__reactMarker$"+Ha;function Ws(e){delete e[$e],delete e[ht],delete e[Vs],delete e[nf],delete e[of]}function Ui(e){var t=e[$e];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Fi]||a[$e]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=oh(e);e!==null;){if(a=e[$e])return a;e=oh(e)}return t}e=a,a=e.parentNode}return null}function ki(e){if(e=e[$e]||e[Fi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function wi(e){var t=e[kS];return t||(t=e[kS]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[bn]=!0}var wS=new Set,xS={};function li(e,t){xi(e,t),xi(e+"Capture",t)}function xi(e,t){for(xS[e]=t,e=0;e<t.length;e++)wS.add(t[e])}var rf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),VS={},WS={};function sf(e){return bs.call(WS,e)?!0:bs.call(VS,e)?!1:rf.test(e)?WS[e]=!0:(VS[e]=!0,!1)}function Qo(e,t,a){if(sf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function $o(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function la(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function KS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lf(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var s=o.get,c=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(A){a=""+A,c.call(this,A)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(A){a=""+A},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ks(e){if(!e._valueTracker){var t=KS(e)?"checked":"value";e._valueTracker=lf(e,t,""+e[t])}}function YS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=KS(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var cf=/[\n"\\]/g;function kt(e){return e.replace(cf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ys(e,t,a,o,s,c,A,m){e.name="",A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.type=A:e.removeAttribute("type"),t!=null?A==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):A!=="submit"&&A!=="reset"||e.removeAttribute("value"),t!=null?zs(e,A,Ut(t)):a!=null?zs(e,A,Ut(a)):o!=null&&e.removeAttribute("value"),s==null&&c!=null&&(e.defaultChecked=!!c),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ut(m):e.removeAttribute("name")}function zS(e,t,a,o,s,c,A,m){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Ks(e);return}a=a!=null?""+Ut(a):"",t=t!=null?""+Ut(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}o=o??s,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=m?e.checked:!!o,e.defaultChecked=!!o,A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(e.name=A),Ks(e)}function zs(e,t,a){t==="number"&&er(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Vi(e,t,a,o){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ut(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function _S(e,t,a){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ut(a):""}function jS(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(l(92));if(We(o)){if(1<o.length)throw Error(l(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Ut(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ks(e)}function Wi(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var uf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function JS(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||uf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ZS(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var s in t)o=t[s],t.hasOwnProperty(s)&&a[s]!==o&&JS(e,s,o)}else for(var c in t)t.hasOwnProperty(c)&&JS(e,c,t[c])}function _s(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),df=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tr(e){return df.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ca(){}var js=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ki=null,Yi=null;function XS(e){var t=ki(e);if(t&&(e=t.stateNode)){var a=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ys(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var s=o[ht]||null;if(!s)throw Error(l(90));Ys(o,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&YS(o)}break e;case"textarea":_S(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Vi(e,!!a.multiple,t,!1)}}}var Zs=!1;function qS(e,t,a){if(Zs)return e(t,a);Zs=!0;try{var o=e(t);return o}finally{if(Zs=!1,(Ki!==null||Yi!==null)&&(Wr(),Ki&&(t=Ki,e=Yi,Yi=Ki=null,XS(t),e)))for(t=0;t<e.length;t++)XS(e[t])}}function Un(e,t){var a=e.stateNode;if(a===null)return null;var o=a[ht]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xs=!1;if(ua)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Xs=!1}var Ba=null,qs=null,ar=null;function QS(){if(ar)return ar;var e,t=qs,a=t.length,o,s="value"in Ba?Ba.value:Ba.textContent,c=s.length;for(e=0;e<a&&t[e]===s[e];e++);var A=a-e;for(o=1;o<=A&&t[a-o]===s[c-o];o++);return ar=s.slice(e,1<o?1-o:void 0)}function ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nr(){return!0}function $S(){return!1}function Tt(e){function t(a,o,s,c,A){this._reactName=a,this._targetInst=s,this.type=o,this.nativeEvent=c,this.target=A,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(c):c[m]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?nr:$S,this.isPropagationStopped=$S,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),t}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},or=Tt(ci),wn=R({},ci,{view:0,detail:0}),Af=Tt(wn),Qs,$s,xn,rr=R({},wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Qs=e.screenX-xn.screenX,$s=e.screenY-xn.screenY):$s=Qs=0,xn=e),Qs)},movementY:function(e){return"movementY"in e?e.movementY:$s}}),ed=Tt(rr),Ef=R({},rr,{dataTransfer:0}),hf=Tt(Ef),Tf=R({},wn,{relatedTarget:0}),el=Tt(Tf),mf=R({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),Rf=Tt(mf),ff=R({},ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cf=Tt(ff),gf=R({},ci,{data:0}),td=Tt(gf),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Of[e])?!!t[e]:!1}function tl(){return Nf}var If=R({},wn,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lf=Tt(If),Mf=R({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=Tt(Mf),Pf=R({},wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),Df=Tt(Pf),Hf=R({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bf=Tt(Hf),vf=R({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=Tt(vf),bf=R({},ci,{newState:0,oldState:0}),Ff=Tt(bf),Uf=[9,13,27,32],al=ua&&"CompositionEvent"in window,Vn=null;ua&&"documentMode"in document&&(Vn=document.documentMode);var kf=ua&&"TextEvent"in window&&!Vn,id=ua&&(!al||Vn&&8<Vn&&11>=Vn),nd=" ",od=!1;function rd(e,t){switch(e){case"keyup":return Uf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zi=!1;function wf(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(od=!0,nd);case"textInput":return e=t.data,e===nd&&od?null:e;default:return null}}function xf(e,t){if(zi)return e==="compositionend"||!al&&rd(e,t)?(e=QS(),ar=qs=Ba=null,zi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return id&&t.locale!=="ko"?null:t.data;default:return null}}var Vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vf[e.type]:t==="textarea"}function cd(e,t,a,o){Ki?Yi?Yi.push(o):Yi=[o]:Ki=o,t=Zr(t,"onChange"),0<t.length&&(a=new or("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Wn=null,Kn=null;function Wf(e){zE(e,0)}function sr(e){var t=Fn(e);if(YS(t))return e}function ud(e,t){if(e==="change")return t}var Sd=!1;if(ua){var il;if(ua){var nl="oninput"in document;if(!nl){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),nl=typeof dd.oninput=="function"}il=nl}else il=!1;Sd=il&&(!document.documentMode||9<document.documentMode)}function Ad(){Wn&&(Wn.detachEvent("onpropertychange",Ed),Kn=Wn=null)}function Ed(e){if(e.propertyName==="value"&&sr(Kn)){var t=[];cd(t,Kn,e,Js(e)),qS(Wf,t)}}function Kf(e,t,a){e==="focusin"?(Ad(),Wn=t,Kn=a,Wn.attachEvent("onpropertychange",Ed)):e==="focusout"&&Ad()}function Yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sr(Kn)}function zf(e,t){if(e==="click")return sr(t)}function _f(e,t){if(e==="input"||e==="change")return sr(t)}function jf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:jf;function Yn(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var s=a[o];if(!bs.call(t,s)||!Lt(e[s],t[s]))return!1}return!0}function hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Td(e,t){var a=hd(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hd(a)}}function md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=er(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=er(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jf=ua&&"documentMode"in document&&11>=document.documentMode,_i=null,rl=null,zn=null,sl=!1;function fd(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sl||_i==null||_i!==er(o)||(o=_i,"selectionStart"in o&&ol(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),zn&&Yn(zn,o)||(zn=o,o=Zr(rl,"onSelect"),0<o.length&&(t=new or("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=_i)))}function ui(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ji={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionrun:ui("Transition","TransitionRun"),transitionstart:ui("Transition","TransitionStart"),transitioncancel:ui("Transition","TransitionCancel"),transitionend:ui("Transition","TransitionEnd")},ll={},Cd={};ua&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Si(e){if(ll[e])return ll[e];if(!ji[e])return e;var t=ji[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Cd)return ll[e]=t[a];return e}var gd=Si("animationend"),pd=Si("animationiteration"),yd=Si("animationstart"),Zf=Si("transitionrun"),Xf=Si("transitionstart"),qf=Si("transitioncancel"),Od=Si("transitionend"),Nd=new Map,cl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cl.push("scrollEnd");function Xt(e,t){Nd.set(e,t),li(t,[e])}var lr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],Ji=0,ul=0;function cr(){for(var e=Ji,t=ul=Ji=0;t<e;){var a=wt[t];wt[t++]=null;var o=wt[t];wt[t++]=null;var s=wt[t];wt[t++]=null;var c=wt[t];if(wt[t++]=null,o!==null&&s!==null){var A=o.pending;A===null?s.next=s:(s.next=A.next,A.next=s),o.pending=s}c!==0&&Id(a,s,c)}}function ur(e,t,a,o){wt[Ji++]=e,wt[Ji++]=t,wt[Ji++]=a,wt[Ji++]=o,ul|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Sl(e,t,a,o){return ur(e,t,a,o),Sr(e)}function di(e,t){return ur(e,null,null,t),Sr(e)}function Id(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var s=!1,c=e.return;c!==null;)c.childLanes|=a,o=c.alternate,o!==null&&(o.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(s=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,s&&t!==null&&(s=31-It(a),e=c.hiddenUpdates,o=e[s],o===null?e[s]=[t]:o.push(t),t.lane=a|536870912),c):null}function Sr(e){if(50<Eo)throw Eo=0,Cc=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zi={};function Qf(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,a,o){return new Qf(e,t,a,o)}function dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,t){var a=e.alternate;return a===null?(a=Mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ld(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function dr(e,t,a,o,s,c){var A=0;if(o=e,typeof e=="function")dl(e)&&(A=1);else if(typeof e=="string")A=ig(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=Mt(31,a,t,s),e.elementType=se,e.lanes=c,e;case b:return Ai(a.children,s,c,t);case M:A=8,s|=24;break;case N:return e=Mt(12,a,t,s|2),e.elementType=N,e.lanes=c,e;case J:return e=Mt(13,a,t,s),e.elementType=J,e.lanes=c,e;case Q:return e=Mt(19,a,t,s),e.elementType=Q,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:A=10;break e;case B:A=9;break e;case K:A=11;break e;case X:A=14;break e;case j:A=16,o=null;break e}A=29,a=Error(l(130,e===null?"null":typeof e,"")),o=null}return t=Mt(A,a,t,s),t.elementType=e,t.type=o,t.lanes=c,t}function Ai(e,t,a,o){return e=Mt(7,e,o,t),e.lanes=a,e}function Al(e,t,a){return e=Mt(6,e,null,t),e.lanes=a,e}function Md(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function El(e,t,a){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pd=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=Pd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:MS(t)},Pd.set(e,t),t)}return{value:e,source:t,stack:MS(t)}}var Xi=[],qi=0,Ar=null,_n=0,Vt=[],Wt=0,va=null,ta=1,aa="";function da(e,t){Xi[qi++]=_n,Xi[qi++]=Ar,Ar=e,_n=t}function Dd(e,t,a){Vt[Wt++]=ta,Vt[Wt++]=aa,Vt[Wt++]=va,va=e;var o=ta;e=aa;var s=32-It(o)-1;o&=~(1<<s),a+=1;var c=32-It(t)+s;if(30<c){var A=s-s%5;c=(o&(1<<A)-1).toString(32),o>>=A,s-=A,ta=1<<32-It(t)+s|a<<s|o,aa=c+e}else ta=1<<c|a<<s|o,aa=e}function hl(e){e.return!==null&&(da(e,1),Dd(e,1,0))}function Tl(e){for(;e===Ar;)Ar=Xi[--qi],Xi[qi]=null,_n=Xi[--qi],Xi[qi]=null;for(;e===va;)va=Vt[--Wt],Vt[Wt]=null,aa=Vt[--Wt],Vt[Wt]=null,ta=Vt[--Wt],Vt[Wt]=null}function Hd(e,t){Vt[Wt++]=ta,Vt[Wt++]=aa,Vt[Wt++]=va,ta=t.id,aa=t.overflow,va=e}var et=null,He=null,fe=!1,Ga=null,Kt=!1,ml=Error(l(519));function ba(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jn(xt(t,e)),ml}function Bd(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[$e]=e,t[ht]=o,a){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(a=0;a<To.length;a++)Ee(To[a],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),zS(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),jS(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||ZE(t.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),o.onScroll!=null&&Ee("scroll",t),o.onScrollEnd!=null&&Ee("scrollend",t),o.onClick!=null&&(t.onclick=ca),t=!0):t=!1,t||ba(e,!0)}function vd(e){for(et=e.return;et;)switch(et.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:et=et.return}}function Qi(e){if(e!==et)return!1;if(!fe)return vd(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bc(e.type,e.memoizedProps)),a=!a),a&&He&&ba(e),vd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));He=nh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));He=nh(e)}else t===27?(t=He,Za(e.type)?(e=xc,xc=null,He=e):He=t):He=et?zt(e.stateNode.nextSibling):null;return!0}function Ei(){He=et=null,fe=!1}function Rl(){var e=Ga;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),Ga=null),e}function jn(e){Ga===null?Ga=[e]:Ga.push(e)}var fl=y(null),hi=null,Aa=null;function Fa(e,t,a){_(fl,t._currentValue),t._currentValue=a}function Ea(e){e._currentValue=fl.current,V(fl)}function Cl(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function gl(e,t,a,o){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){var A=s.child;c=c.firstContext;e:for(;c!==null;){var m=c;c=s;for(var g=0;g<t.length;g++)if(m.context===t[g]){c.lanes|=a,m=c.alternate,m!==null&&(m.lanes|=a),Cl(c.return,a,e),o||(A=null);break e}c=m.next}}else if(s.tag===18){if(A=s.return,A===null)throw Error(l(341));A.lanes|=a,c=A.alternate,c!==null&&(c.lanes|=a),Cl(A,a,e),A=null}else A=s.child;if(A!==null)A.return=s;else for(A=s;A!==null;){if(A===e){A=null;break}if(s=A.sibling,s!==null){s.return=A.return,A=s;break}A=A.return}s=A}}function $i(e,t,a,o){e=null;for(var s=t,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var A=s.alternate;if(A===null)throw Error(l(387));if(A=A.memoizedProps,A!==null){var m=s.type;Lt(s.pendingProps.value,A.value)||(e!==null?e.push(m):e=[m])}}else if(s===he.current){if(A=s.alternate,A===null)throw Error(l(387));A.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}s=s.return}e!==null&&gl(t,e,a,o),t.flags|=262144}function Er(e){for(e=e.firstContext;e!==null;){if(!Lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ti(e){hi=e,Aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return Gd(hi,e)}function hr(e,t){return hi===null&&Ti(e),Gd(e,t)}function Gd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Aa===null){if(e===null)throw Error(l(308));Aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Aa=Aa.next=t;return a}var $f=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},eC=i.unstable_scheduleCallback,tC=i.unstable_NormalPriority,_e={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pl(){return{controller:new $f,data:new Map,refCount:0}}function Jn(e){e.refCount--,e.refCount===0&&eC(tC,function(){e.controller.abort()})}var Zn=null,yl=0,en=0,tn=null;function aC(e,t){if(Zn===null){var a=Zn=[];yl=0,en=Ic(),tn={status:"pending",value:void 0,then:function(o){a.push(o)}}}return yl++,t.then(bd,bd),t}function bd(){if(--yl===0&&Zn!==null){tn!==null&&(tn.status="fulfilled");var e=Zn;Zn=null,en=0,tn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function iC(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(o.status="rejected",o.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),o}var Fd=U.S;U.S=function(e,t){fE=Ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&aC(e,t),Fd!==null&&Fd(e,t)};var mi=y(null);function Ol(){var e=mi.current;return e!==null?e:Pe.pooledCache}function Tr(e,t){t===null?_(mi,mi.current):_(mi,t.pool)}function Ud(){var e=Ol();return e===null?null:{parent:_e._currentValue,pool:e}}var an=Error(l(460)),Nl=Error(l(474)),mr=Error(l(542)),Rr={then:function(){}};function kd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ca,ca),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vd(e),e;default:if(typeof t.status=="string")t.then(ca,ca);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=o}},function(o){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vd(e),e}throw fi=t,an}}function Ri(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fi=a,an):a}}var fi=null;function xd(){if(fi===null)throw Error(l(459));var e=fi;return fi=null,e}function Vd(e){if(e===an||e===mr)throw Error(l(483))}var nn=null,Xn=0;function fr(e){var t=Xn;return Xn+=1,nn===null&&(nn=[]),wd(nn,e,t)}function qn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cr(e,t){throw t.$$typeof===C?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Wd(e){function t(L,O){if(e){var P=L.deletions;P===null?(L.deletions=[O],L.flags|=16):P.push(O)}}function a(L,O){if(!e)return null;for(;O!==null;)t(L,O),O=O.sibling;return null}function o(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function s(L,O){return L=Sa(L,O),L.index=0,L.sibling=null,L}function c(L,O,P){return L.index=P,e?(P=L.alternate,P!==null?(P=P.index,P<O?(L.flags|=67108866,O):P):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function A(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function m(L,O,P,k){return O===null||O.tag!==6?(O=Al(P,L.mode,k),O.return=L,O):(O=s(O,P),O.return=L,O)}function g(L,O,P,k){var ae=P.type;return ae===b?F(L,O,P.props.children,k,P.key):O!==null&&(O.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===j&&Ri(ae)===O.type)?(O=s(O,P.props),qn(O,P),O.return=L,O):(O=dr(P.type,P.key,P.props,null,L.mode,k),qn(O,P),O.return=L,O)}function D(L,O,P,k){return O===null||O.tag!==4||O.stateNode.containerInfo!==P.containerInfo||O.stateNode.implementation!==P.implementation?(O=El(P,L.mode,k),O.return=L,O):(O=s(O,P.children||[]),O.return=L,O)}function F(L,O,P,k,ae){return O===null||O.tag!==7?(O=Ai(P,L.mode,k,ae),O.return=L,O):(O=s(O,P),O.return=L,O)}function w(L,O,P){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Al(""+O,L.mode,P),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case I:return P=dr(O.type,O.key,O.props,null,L.mode,P),qn(P,O),P.return=L,P;case v:return O=El(O,L.mode,P),O.return=L,O;case j:return O=Ri(O),w(L,O,P)}if(We(O)||ue(O))return O=Ai(O,L.mode,P,null),O.return=L,O;if(typeof O.then=="function")return w(L,fr(O),P);if(O.$$typeof===x)return w(L,hr(L,O),P);Cr(L,O)}return null}function H(L,O,P,k){var ae=O!==null?O.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return ae!==null?null:m(L,O,""+P,k);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case I:return P.key===ae?g(L,O,P,k):null;case v:return P.key===ae?D(L,O,P,k):null;case j:return P=Ri(P),H(L,O,P,k)}if(We(P)||ue(P))return ae!==null?null:F(L,O,P,k,null);if(typeof P.then=="function")return H(L,O,fr(P),k);if(P.$$typeof===x)return H(L,O,hr(L,P),k);Cr(L,P)}return null}function G(L,O,P,k,ae){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return L=L.get(P)||null,m(O,L,""+k,ae);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case I:return L=L.get(k.key===null?P:k.key)||null,g(O,L,k,ae);case v:return L=L.get(k.key===null?P:k.key)||null,D(O,L,k,ae);case j:return k=Ri(k),G(L,O,P,k,ae)}if(We(k)||ue(k))return L=L.get(P)||null,F(O,L,k,ae,null);if(typeof k.then=="function")return G(L,O,P,fr(k),ae);if(k.$$typeof===x)return G(L,O,P,hr(O,k),ae);Cr(O,k)}return null}function Z(L,O,P,k){for(var ae=null,Ce=null,q=O,de=O=0,me=null;q!==null&&de<P.length;de++){q.index>de?(me=q,q=null):me=q.sibling;var ge=H(L,q,P[de],k);if(ge===null){q===null&&(q=me);break}e&&q&&ge.alternate===null&&t(L,q),O=c(ge,O,de),Ce===null?ae=ge:Ce.sibling=ge,Ce=ge,q=me}if(de===P.length)return a(L,q),fe&&da(L,de),ae;if(q===null){for(;de<P.length;de++)q=w(L,P[de],k),q!==null&&(O=c(q,O,de),Ce===null?ae=q:Ce.sibling=q,Ce=q);return fe&&da(L,de),ae}for(q=o(q);de<P.length;de++)me=G(q,L,de,P[de],k),me!==null&&(e&&me.alternate!==null&&q.delete(me.key===null?de:me.key),O=c(me,O,de),Ce===null?ae=me:Ce.sibling=me,Ce=me);return e&&q.forEach(function(ei){return t(L,ei)}),fe&&da(L,de),ae}function ie(L,O,P,k){if(P==null)throw Error(l(151));for(var ae=null,Ce=null,q=O,de=O=0,me=null,ge=P.next();q!==null&&!ge.done;de++,ge=P.next()){q.index>de?(me=q,q=null):me=q.sibling;var ei=H(L,q,ge.value,k);if(ei===null){q===null&&(q=me);break}e&&q&&ei.alternate===null&&t(L,q),O=c(ei,O,de),Ce===null?ae=ei:Ce.sibling=ei,Ce=ei,q=me}if(ge.done)return a(L,q),fe&&da(L,de),ae;if(q===null){for(;!ge.done;de++,ge=P.next())ge=w(L,ge.value,k),ge!==null&&(O=c(ge,O,de),Ce===null?ae=ge:Ce.sibling=ge,Ce=ge);return fe&&da(L,de),ae}for(q=o(q);!ge.done;de++,ge=P.next())ge=G(q,L,de,ge.value,k),ge!==null&&(e&&ge.alternate!==null&&q.delete(ge.key===null?de:ge.key),O=c(ge,O,de),Ce===null?ae=ge:Ce.sibling=ge,Ce=ge);return e&&q.forEach(function(Eg){return t(L,Eg)}),fe&&da(L,de),ae}function Me(L,O,P,k){if(typeof P=="object"&&P!==null&&P.type===b&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case I:e:{for(var ae=P.key;O!==null;){if(O.key===ae){if(ae=P.type,ae===b){if(O.tag===7){a(L,O.sibling),k=s(O,P.props.children),k.return=L,L=k;break e}}else if(O.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===j&&Ri(ae)===O.type){a(L,O.sibling),k=s(O,P.props),qn(k,P),k.return=L,L=k;break e}a(L,O);break}else t(L,O);O=O.sibling}P.type===b?(k=Ai(P.props.children,L.mode,k,P.key),k.return=L,L=k):(k=dr(P.type,P.key,P.props,null,L.mode,k),qn(k,P),k.return=L,L=k)}return A(L);case v:e:{for(ae=P.key;O!==null;){if(O.key===ae)if(O.tag===4&&O.stateNode.containerInfo===P.containerInfo&&O.stateNode.implementation===P.implementation){a(L,O.sibling),k=s(O,P.children||[]),k.return=L,L=k;break e}else{a(L,O);break}else t(L,O);O=O.sibling}k=El(P,L.mode,k),k.return=L,L=k}return A(L);case j:return P=Ri(P),Me(L,O,P,k)}if(We(P))return Z(L,O,P,k);if(ue(P)){if(ae=ue(P),typeof ae!="function")throw Error(l(150));return P=ae.call(P),ie(L,O,P,k)}if(typeof P.then=="function")return Me(L,O,fr(P),k);if(P.$$typeof===x)return Me(L,O,hr(L,P),k);Cr(L,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,O!==null&&O.tag===6?(a(L,O.sibling),k=s(O,P),k.return=L,L=k):(a(L,O),k=Al(P,L.mode,k),k.return=L,L=k),A(L)):a(L,O)}return function(L,O,P,k){try{Xn=0;var ae=Me(L,O,P,k);return nn=null,ae}catch(q){if(q===an||q===mr)throw q;var Ce=Mt(29,q,null,L.mode);return Ce.lanes=k,Ce.return=L,Ce}finally{}}}var Ci=Wd(!0),Kd=Wd(!1),Ua=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ll(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(pe&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,t=Sr(e),Id(e,null,a),t}return ur(e,o,t,a),Sr(e)}function Qn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,GS(e,a)}}function Ml(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var s=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var A={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?s=c=A:c=c.next=A,a=a.next}while(a!==null);c===null?s=c=t:c=c.next=t}else s=c=t;a={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Pl=!1;function $n(){if(Pl){var e=tn;if(e!==null)throw e}}function eo(e,t,a,o){Pl=!1;var s=e.updateQueue;Ua=!1;var c=s.firstBaseUpdate,A=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var g=m,D=g.next;g.next=null,A===null?c=D:A.next=D,A=g;var F=e.alternate;F!==null&&(F=F.updateQueue,m=F.lastBaseUpdate,m!==A&&(m===null?F.firstBaseUpdate=D:m.next=D,F.lastBaseUpdate=g))}if(c!==null){var w=s.baseState;A=0,F=D=g=null,m=c;do{var H=m.lane&-536870913,G=H!==m.lane;if(G?(Te&H)===H:(o&H)===H){H!==0&&H===en&&(Pl=!0),F!==null&&(F=F.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Z=e,ie=m;H=t;var Me=a;switch(ie.tag){case 1:if(Z=ie.payload,typeof Z=="function"){w=Z.call(Me,w,H);break e}w=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ie.payload,H=typeof Z=="function"?Z.call(Me,w,H):Z,H==null)break e;w=R({},w,H);break e;case 2:Ua=!0}}H=m.callback,H!==null&&(e.flags|=64,G&&(e.flags|=8192),G=s.callbacks,G===null?s.callbacks=[H]:G.push(H))}else G={lane:H,tag:m.tag,payload:m.payload,callback:m.callback,next:null},F===null?(D=F=G,g=w):F=F.next=G,A|=H;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;G=m,m=G.next,G.next=null,s.lastBaseUpdate=G,s.shared.pending=null}}while(!0);F===null&&(g=w),s.baseState=g,s.firstBaseUpdate=D,s.lastBaseUpdate=F,c===null&&(s.shared.lanes=0),Ya|=A,e.lanes=A,e.memoizedState=w}}function Yd(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function zd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Yd(a[e],t)}var on=y(null),gr=y(0);function _d(e,t){e=ya,_(gr,e),_(on,t),ya=e|t.baseLanes}function Dl(){_(gr,ya),_(on,on.current)}function Hl(){ya=gr.current,V(on),V(gr)}var Pt=y(null),Yt=null;function xa(e){var t=e.alternate;_(Ke,Ke.current&1),_(Pt,e),Yt===null&&(t===null||on.current!==null||t.memoizedState!==null)&&(Yt=e)}function Bl(e){_(Ke,Ke.current),_(Pt,e),Yt===null&&(Yt=e)}function jd(e){e.tag===22?(_(Ke,Ke.current),_(Pt,e),Yt===null&&(Yt=e)):Va()}function Va(){_(Ke,Ke.current),_(Pt,Pt.current)}function Dt(e){V(Pt),Yt===e&&(Yt=null),V(Ke)}var Ke=y(0);function pr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kc(a)||wc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,ce=null,Ie=null,je=null,yr=!1,rn=!1,gi=!1,Or=0,to=0,sn=null,nC=0;function ke(){throw Error(l(321))}function vl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Lt(e[a],t[a]))return!1;return!0}function Gl(e,t,a,o,s,c){return ha=c,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?DA:Zl,gi=!1,c=a(o,s),gi=!1,rn&&(c=Zd(t,a,o,s)),Jd(e),c}function Jd(e){U.H=no;var t=Ie!==null&&Ie.next!==null;if(ha=0,je=Ie=ce=null,yr=!1,to=0,sn=null,t)throw Error(l(300));e===null||Je||(e=e.dependencies,e!==null&&Er(e)&&(Je=!0))}function Zd(e,t,a,o){ce=e;var s=0;do{if(rn&&(sn=null),to=0,rn=!1,25<=s)throw Error(l(301));if(s+=1,je=Ie=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}U.H=HA,c=t(a,o)}while(rn);return c}function oC(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?ao(t):t,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(ce.flags|=1024),t}function bl(){var e=Or!==0;return Or=0,e}function Fl(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ul(e){if(yr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yr=!1}ha=0,je=Ie=ce=null,rn=!1,to=Or=0,sn=null}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ce.memoizedState=je=e:je=je.next=e,je}function Ye(){if(Ie===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=je===null?ce.memoizedState:je.next;if(t!==null)je=t,Ie=e;else{if(e===null)throw ce.alternate===null?Error(l(467)):Error(l(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},je===null?ce.memoizedState=je=e:je=je.next=e}return je}function Nr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var t=to;return to+=1,sn===null&&(sn=[]),e=wd(sn,e,t),t=ce,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?DA:Zl),e}function Ir(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===x)return tt(e)}throw Error(l(438,String(e)))}function kl(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Nr(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=le;return t.index++,a}function Ta(e,t){return typeof t=="function"?t(e):t}function Lr(e){var t=Ye();return wl(t,Ie,e)}function wl(e,t,a){var o=e.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=a;var s=e.baseQueue,c=o.pending;if(c!==null){if(s!==null){var A=s.next;s.next=c.next,c.next=A}t.baseQueue=s=c,o.pending=null}if(c=e.baseState,s===null)e.memoizedState=c;else{t=s.next;var m=A=null,g=null,D=t,F=!1;do{var w=D.lane&-536870913;if(w!==D.lane?(Te&w)===w:(ha&w)===w){var H=D.revertLane;if(H===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),w===en&&(F=!0);else if((ha&H)===H){D=D.next,H===en&&(F=!0);continue}else w={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},g===null?(m=g=w,A=c):g=g.next=w,ce.lanes|=H,Ya|=H;w=D.action,gi&&a(c,w),c=D.hasEagerState?D.eagerState:a(c,w)}else H={lane:w,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},g===null?(m=g=H,A=c):g=g.next=H,ce.lanes|=w,Ya|=w;D=D.next}while(D!==null&&D!==t);if(g===null?A=c:g.next=m,!Lt(c,e.memoizedState)&&(Je=!0,F&&(a=tn,a!==null)))throw a;e.memoizedState=c,e.baseState=A,e.baseQueue=g,o.lastRenderedState=c}return s===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function xl(e){var t=Ye(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var o=a.dispatch,s=a.pending,c=t.memoizedState;if(s!==null){a.pending=null;var A=s=s.next;do c=e(c,A.action),A=A.next;while(A!==s);Lt(c,t.memoizedState)||(Je=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,o]}function Xd(e,t,a){var o=ce,s=Ye(),c=fe;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=t();var A=!Lt((Ie||s).memoizedState,a);if(A&&(s.memoizedState=a,Je=!0),s=s.queue,Kl($d.bind(null,o,s,e),[e]),s.getSnapshot!==t||A||je!==null&&je.memoizedState.tag&1){if(o.flags|=2048,ln(9,{destroy:void 0},Qd.bind(null,o,s,a,t),null),Pe===null)throw Error(l(349));c||(ha&127)!==0||qd(o,t,a)}return a}function qd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Nr(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Qd(e,t,a,o){t.value=a,t.getSnapshot=o,eA(t)&&tA(e)}function $d(e,t,a){return a(function(){eA(t)&&tA(e)})}function eA(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Lt(e,a)}catch{return!0}}function tA(e){var t=di(e,2);t!==null&&gt(t,e,2)}function Vl(e){var t=Et();if(typeof e=="function"){var a=e;if(e=a(),gi){Da(!0);try{a()}finally{Da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t}function aA(e,t,a,o){return e.baseState=a,wl(e,Ie,typeof o=="function"?o:Ta)}function rC(e,t,a,o,s){if(Dr(e))throw Error(l(485));if(e=t.action,e!==null){var c={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(A){c.listeners.push(A)}};U.T!==null?a(!0):c.isTransition=!1,o(c),a=t.pending,a===null?(c.next=t.pending=c,iA(t,c)):(c.next=a.next,t.pending=a.next=c)}}function iA(e,t){var a=t.action,o=t.payload,s=e.state;if(t.isTransition){var c=U.T,A={};U.T=A;try{var m=a(s,o),g=U.S;g!==null&&g(A,m),nA(e,t,m)}catch(D){Wl(e,t,D)}finally{c!==null&&A.types!==null&&(c.types=A.types),U.T=c}}else try{c=a(s,o),nA(e,t,c)}catch(D){Wl(e,t,D)}}function nA(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){oA(e,t,o)},function(o){return Wl(e,t,o)}):oA(e,t,a)}function oA(e,t,a){t.status="fulfilled",t.value=a,rA(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,iA(e,a)))}function Wl(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,rA(t),t=t.next;while(t!==o)}e.action=null}function rA(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function sA(e,t){return t}function lA(e,t){if(fe){var a=Pe.formState;if(a!==null){e:{var o=ce;if(fe){if(He){t:{for(var s=He,c=Kt;s.nodeType!==8;){if(!c){s=null;break t}if(s=zt(s.nextSibling),s===null){s=null;break t}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){He=zt(s.nextSibling),o=s.data==="F!";break e}}ba(o)}o=!1}o&&(t=a[0])}}return a=Et(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sA,lastRenderedState:t},a.queue=o,a=LA.bind(null,ce,o),o.dispatch=a,o=Vl(!1),c=Jl.bind(null,ce,!1,o.queue),o=Et(),s={state:t,dispatch:null,action:e,pending:null},o.queue=s,a=rC.bind(null,ce,s,c,a),s.dispatch=a,o.memoizedState=e,[t,a,!1]}function cA(e){var t=Ye();return uA(t,Ie,e)}function uA(e,t,a){if(t=wl(e,t,sA)[0],e=Lr(Ta)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=ao(t)}catch(A){throw A===an?mr:A}else o=t;t=Ye();var s=t.queue,c=s.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,ln(9,{destroy:void 0},sC.bind(null,s,a),null)),[o,c,e]}function sC(e,t){e.action=t}function SA(e){var t=Ye(),a=Ie;if(a!==null)return uA(t,a,e);Ye(),t=t.memoizedState,a=Ye();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function ln(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Nr(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function dA(){return Ye().memoizedState}function Mr(e,t,a,o){var s=Et();ce.flags|=e,s.memoizedState=ln(1|t,{destroy:void 0},a,o===void 0?null:o)}function Pr(e,t,a,o){var s=Ye();o=o===void 0?null:o;var c=s.memoizedState.inst;Ie!==null&&o!==null&&vl(o,Ie.memoizedState.deps)?s.memoizedState=ln(t,c,a,o):(ce.flags|=e,s.memoizedState=ln(1|t,c,a,o))}function AA(e,t){Mr(8390656,8,e,t)}function Kl(e,t){Pr(2048,8,e,t)}function lC(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Nr(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function EA(e){var t=Ye().memoizedState;return lC({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function hA(e,t){return Pr(4,2,e,t)}function TA(e,t){return Pr(4,4,e,t)}function mA(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function RA(e,t,a){a=a!=null?a.concat([e]):null,Pr(4,4,mA.bind(null,t,e),a)}function Yl(){}function fA(e,t){var a=Ye();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&vl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function CA(e,t){var a=Ye();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&vl(t,o[1]))return o[0];if(o=e(),gi){Da(!0);try{e()}finally{Da(!1)}}return a.memoizedState=[o,t],o}function zl(e,t,a){return a===void 0||(ha&1073741824)!==0&&(Te&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=gE(),ce.lanes|=e,Ya|=e,a)}function gA(e,t,a,o){return Lt(a,t)?a:on.current!==null?(e=zl(e,a,o),Lt(e,t)||(Je=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(Te&261930)===0?(Je=!0,e.memoizedState=a):(e=gE(),ce.lanes|=e,Ya|=e,t)}function pA(e,t,a,o,s){var c=z.p;z.p=c!==0&&8>c?c:8;var A=U.T,m={};U.T=m,Jl(e,!1,t,a);try{var g=s(),D=U.S;if(D!==null&&D(m,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var F=iC(g,o);io(e,t,F,vt(e))}else io(e,t,o,vt(e))}catch(w){io(e,t,{then:function(){},status:"rejected",reason:w},vt())}finally{z.p=c,A!==null&&m.types!==null&&(A.types=m.types),U.T=A}}function cC(){}function _l(e,t,a,o){if(e.tag!==5)throw Error(l(476));var s=yA(e).queue;pA(e,s,t,$,a===null?cC:function(){return OA(e),a(o)})}function yA(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function OA(e){var t=yA(e);t.next===null&&(t=e.alternate.memoizedState),io(e,t.next.queue,{},vt())}function jl(){return tt(go)}function NA(){return Ye().memoizedState}function IA(){return Ye().memoizedState}function uC(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();e=ka(a);var o=wa(t,e,a);o!==null&&(gt(o,t,a),Qn(o,t,a)),t={cache:pl()},e.payload=t;return}t=t.return}}function SC(e,t,a){var o=vt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dr(e)?MA(t,a):(a=Sl(e,t,a,o),a!==null&&(gt(a,e,o),PA(a,t,o)))}function LA(e,t,a){var o=vt();io(e,t,a,o)}function io(e,t,a,o){var s={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dr(e))MA(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var A=t.lastRenderedState,m=c(A,a);if(s.hasEagerState=!0,s.eagerState=m,Lt(m,A))return ur(e,t,s,0),Pe===null&&cr(),!1}catch{}finally{}if(a=Sl(e,t,s,o),a!==null)return gt(a,e,o),PA(a,t,o),!0}return!1}function Jl(e,t,a,o){if(o={lane:2,revertLane:Ic(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Dr(e)){if(t)throw Error(l(479))}else t=Sl(e,a,o,2),t!==null&&gt(t,e,2)}function Dr(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function MA(e,t){rn=yr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function PA(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,GS(e,a)}}var no={readContext:tt,use:Ir,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};no.useEffectEvent=ke;var DA={readContext:tt,use:Ir,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:AA,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Mr(4194308,4,mA.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Mr(4194308,4,e,t)},useInsertionEffect:function(e,t){Mr(4,2,e,t)},useMemo:function(e,t){var a=Et();t=t===void 0?null:t;var o=e();if(gi){Da(!0);try{e()}finally{Da(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=Et();if(a!==void 0){var s=a(t);if(gi){Da(!0);try{a(t)}finally{Da(!1)}}}else s=t;return o.memoizedState=o.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},o.queue=e,e=e.dispatch=SC.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:function(e){e=Vl(e);var t=e.queue,a=LA.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Yl,useDeferredValue:function(e,t){var a=Et();return zl(a,e,t)},useTransition:function(){var e=Vl(!1);return e=pA.bind(null,ce,e.queue,!0,!1),Et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=ce,s=Et();if(fe){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),Pe===null)throw Error(l(349));(Te&127)!==0||qd(o,t,a)}s.memoizedState=a;var c={value:a,getSnapshot:t};return s.queue=c,AA($d.bind(null,o,c,e),[e]),o.flags|=2048,ln(9,{destroy:void 0},Qd.bind(null,o,c,a,t),null),a},useId:function(){var e=Et(),t=Pe.identifierPrefix;if(fe){var a=aa,o=ta;a=(o&~(1<<32-It(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Or++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=nC++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:jl,useFormState:lA,useActionState:lA,useOptimistic:function(e){var t=Et();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Jl.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:kl,useCacheRefresh:function(){return Et().memoizedState=uC.bind(null,ce)},useEffectEvent:function(e){var t=Et(),a={impl:e};return t.memoizedState=a,function(){if((pe&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},Zl={readContext:tt,use:Ir,useCallback:fA,useContext:tt,useEffect:Kl,useImperativeHandle:RA,useInsertionEffect:hA,useLayoutEffect:TA,useMemo:CA,useReducer:Lr,useRef:dA,useState:function(){return Lr(Ta)},useDebugValue:Yl,useDeferredValue:function(e,t){var a=Ye();return gA(a,Ie.memoizedState,e,t)},useTransition:function(){var e=Lr(Ta)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:ao(e),t]},useSyncExternalStore:Xd,useId:NA,useHostTransitionStatus:jl,useFormState:cA,useActionState:cA,useOptimistic:function(e,t){var a=Ye();return aA(a,Ie,e,t)},useMemoCache:kl,useCacheRefresh:IA};Zl.useEffectEvent=EA;var HA={readContext:tt,use:Ir,useCallback:fA,useContext:tt,useEffect:Kl,useImperativeHandle:RA,useInsertionEffect:hA,useLayoutEffect:TA,useMemo:CA,useReducer:xl,useRef:dA,useState:function(){return xl(Ta)},useDebugValue:Yl,useDeferredValue:function(e,t){var a=Ye();return Ie===null?zl(a,e,t):gA(a,Ie.memoizedState,e,t)},useTransition:function(){var e=xl(Ta)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:ao(e),t]},useSyncExternalStore:Xd,useId:NA,useHostTransitionStatus:jl,useFormState:SA,useActionState:SA,useOptimistic:function(e,t){var a=Ye();return Ie!==null?aA(a,Ie,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:kl,useCacheRefresh:IA};HA.useEffectEvent=EA;function Xl(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:R({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ql={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=vt(),s=ka(o);s.payload=t,a!=null&&(s.callback=a),t=wa(e,s,o),t!==null&&(gt(t,e,o),Qn(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=vt(),s=ka(o);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=wa(e,s,o),t!==null&&(gt(t,e,o),Qn(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=vt(),o=ka(a);o.tag=2,t!=null&&(o.callback=t),t=wa(e,o,a),t!==null&&(gt(t,e,a),Qn(t,e,a))}};function BA(e,t,a,o,s,c,A){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,c,A):t.prototype&&t.prototype.isPureReactComponent?!Yn(a,o)||!Yn(s,c):!0}function vA(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&ql.enqueueReplaceState(t,t.state,null)}function pi(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=R({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function GA(e){lr(e)}function bA(e){console.error(e)}function FA(e){lr(e)}function Hr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function UA(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Ql(e,t,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Hr(e,t)},a}function kA(e){return e=ka(e),e.tag=3,e}function wA(e,t,a,o){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var c=o.value;e.payload=function(){return s(c)},e.callback=function(){UA(t,a,o)}}var A=a.stateNode;A!==null&&typeof A.componentDidCatch=="function"&&(e.callback=function(){UA(t,a,o),typeof s!="function"&&(za===null?za=new Set([this]):za.add(this));var m=o.stack;this.componentDidCatch(o.value,{componentStack:m!==null?m:""})})}function dC(e,t,a,o,s){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&$i(t,a,s,!0),a=Pt.current,a!==null){switch(a.tag){case 31:case 13:return Yt===null?Kr():a.alternate===null&&we===0&&(we=3),a.flags&=-257,a.flags|=65536,a.lanes=s,o===Rr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),yc(e,o,s)),!1;case 22:return a.flags|=65536,o===Rr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),yc(e,o,s)),!1}throw Error(l(435,a.tag))}return yc(e,o,s),Kr(),!1}if(fe)return t=Pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,o!==ml&&(e=Error(l(422),{cause:o}),jn(xt(e,a)))):(o!==ml&&(t=Error(l(423),{cause:o}),jn(xt(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,o=xt(o,a),s=Ql(e.stateNode,o,s),Ml(e,s),we!==4&&(we=2)),!1;var c=Error(l(520),{cause:o});if(c=xt(c,a),Ao===null?Ao=[c]:Ao.push(c),we!==4&&(we=2),t===null)return!0;o=xt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=Ql(a.stateNode,o,e),Ml(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(za===null||!za.has(c))))return a.flags|=65536,s&=-s,a.lanes|=s,s=kA(s),wA(s,e,a,o),Ml(a,s),!1}a=a.return}while(a!==null);return!1}var $l=Error(l(461)),Je=!1;function at(e,t,a,o){t.child=e===null?Kd(t,null,a,o):Ci(t,e.child,a,o)}function xA(e,t,a,o,s){a=a.render;var c=t.ref;if("ref"in o){var A={};for(var m in o)m!=="ref"&&(A[m]=o[m])}else A=o;return Ti(t),o=Gl(e,t,a,A,c,s),m=bl(),e!==null&&!Je?(Fl(e,t,s),ma(e,t,s)):(fe&&m&&hl(t),t.flags|=1,at(e,t,o,s),t.child)}function VA(e,t,a,o,s){if(e===null){var c=a.type;return typeof c=="function"&&!dl(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,WA(e,t,c,o,s)):(e=dr(a.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!sc(e,s)){var A=c.memoizedProps;if(a=a.compare,a=a!==null?a:Yn,a(A,o)&&e.ref===t.ref)return ma(e,t,s)}return t.flags|=1,e=Sa(c,o),e.ref=t.ref,e.return=t,t.child=e}function WA(e,t,a,o,s){if(e!==null){var c=e.memoizedProps;if(Yn(c,o)&&e.ref===t.ref)if(Je=!1,t.pendingProps=o=c,sc(e,s))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,ma(e,t,s)}return ec(e,t,a,o,s)}function KA(e,t,a,o){var s=o.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(o=t.child=e.child,s=0;o!==null;)s=s|o.lanes|o.childLanes,o=o.sibling;o=s&~c}else o=0,t.child=null;return YA(e,t,c,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tr(t,c!==null?c.cachePool:null),c!==null?_d(t,c):Dl(),jd(t);else return o=t.lanes=536870912,YA(e,t,c!==null?c.baseLanes|a:a,a,o)}else c!==null?(Tr(t,c.cachePool),_d(t,c),Va(),t.memoizedState=null):(e!==null&&Tr(t,null),Dl(),Va());return at(e,t,s,a),t.child}function oo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function YA(e,t,a,o,s){var c=Ol();return c=c===null?null:{parent:_e._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&Tr(t,null),Dl(),jd(t),e!==null&&$i(e,t,o,!0),t.childLanes=s,null}function Br(e,t){return t=Gr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zA(e,t,a){return Ci(t,e.child,null,a),e=Br(t,t.pendingProps),e.flags|=2,Dt(t),t.memoizedState=null,e}function AC(e,t,a){var o=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(o.mode==="hidden")return e=Br(t,o),t.lanes=536870912,oo(null,e);if(Bl(t),(e=He)?(e=ih(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:va!==null?{id:ta,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=Md(e),a.return=t,t.child=a,et=t,He=null)):e=null,e===null)throw ba(t);return t.lanes=536870912,null}return Br(t,o)}var c=e.memoizedState;if(c!==null){var A=c.dehydrated;if(Bl(t),s)if(t.flags&256)t.flags&=-257,t=zA(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Je||$i(e,t,a,!1),s=(a&e.childLanes)!==0,Je||s){if(o=Pe,o!==null&&(A=bS(o,a),A!==0&&A!==c.retryLane))throw c.retryLane=A,di(e,A),gt(o,e,A),$l;Kr(),t=zA(e,t,a)}else e=c.treeContext,He=zt(A.nextSibling),et=t,fe=!0,Ga=null,Kt=!1,e!==null&&Hd(t,e),t=Br(t,o),t.flags|=4096;return t}return e=Sa(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ec(e,t,a,o,s){return Ti(t),a=Gl(e,t,a,o,void 0,s),o=bl(),e!==null&&!Je?(Fl(e,t,s),ma(e,t,s)):(fe&&o&&hl(t),t.flags|=1,at(e,t,a,s),t.child)}function _A(e,t,a,o,s,c){return Ti(t),t.updateQueue=null,a=Zd(t,o,a,s),Jd(e),o=bl(),e!==null&&!Je?(Fl(e,t,c),ma(e,t,c)):(fe&&o&&hl(t),t.flags|=1,at(e,t,a,c),t.child)}function jA(e,t,a,o,s){if(Ti(t),t.stateNode===null){var c=Zi,A=a.contextType;typeof A=="object"&&A!==null&&(c=tt(A)),c=new a(o,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ql,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=o,c.state=t.memoizedState,c.refs={},Il(t),A=a.contextType,c.context=typeof A=="object"&&A!==null?tt(A):Zi,c.state=t.memoizedState,A=a.getDerivedStateFromProps,typeof A=="function"&&(Xl(t,a,A,o),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(A=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),A!==c.state&&ql.enqueueReplaceState(c,c.state,null),eo(t,o,c,s),$n(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){c=t.stateNode;var m=t.memoizedProps,g=pi(a,m);c.props=g;var D=c.context,F=a.contextType;A=Zi,typeof F=="object"&&F!==null&&(A=tt(F));var w=a.getDerivedStateFromProps;F=typeof w=="function"||typeof c.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,F||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m||D!==A)&&vA(t,c,o,A),Ua=!1;var H=t.memoizedState;c.state=H,eo(t,o,c,s),$n(),D=t.memoizedState,m||H!==D||Ua?(typeof w=="function"&&(Xl(t,a,w,o),D=t.memoizedState),(g=Ua||BA(t,a,g,o,H,D,A))?(F||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=D),c.props=o,c.state=D,c.context=A,o=g):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{c=t.stateNode,Ll(e,t),A=t.memoizedProps,F=pi(a,A),c.props=F,w=t.pendingProps,H=c.context,D=a.contextType,g=Zi,typeof D=="object"&&D!==null&&(g=tt(D)),m=a.getDerivedStateFromProps,(D=typeof m=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A!==w||H!==g)&&vA(t,c,o,g),Ua=!1,H=t.memoizedState,c.state=H,eo(t,o,c,s),$n();var G=t.memoizedState;A!==w||H!==G||Ua||e!==null&&e.dependencies!==null&&Er(e.dependencies)?(typeof m=="function"&&(Xl(t,a,m,o),G=t.memoizedState),(F=Ua||BA(t,a,F,o,H,G,g)||e!==null&&e.dependencies!==null&&Er(e.dependencies))?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,G,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,G,g)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||A===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=G),c.props=o,c.state=G,c.context=g,o=F):(typeof c.componentDidUpdate!="function"||A===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),o=!1)}return c=o,vr(e,t),o=(t.flags&128)!==0,c||o?(c=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&o?(t.child=Ci(t,e.child,null,s),t.child=Ci(t,null,a,s)):at(e,t,a,s),t.memoizedState=c.state,e=t.child):e=ma(e,t,s),e}function JA(e,t,a,o){return Ei(),t.flags|=256,at(e,t,a,o),t.child}var tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ac(e){return{baseLanes:e,cachePool:Ud()}}function ic(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Bt),e}function ZA(e,t,a){var o=t.pendingProps,s=!1,c=(t.flags&128)!==0,A;if((A=c)||(A=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),A&&(s=!0,t.flags&=-129),A=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(s?xa(t):Va(),(e=He)?(e=ih(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:va!==null?{id:ta,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=Md(e),a.return=t,t.child=a,et=t,He=null)):e=null,e===null)throw ba(t);return wc(e)?t.lanes=32:t.lanes=536870912,null}var m=o.children;return o=o.fallback,s?(Va(),s=t.mode,m=Gr({mode:"hidden",children:m},s),o=Ai(o,s,a,null),m.return=t,o.return=t,m.sibling=o,t.child=m,o=t.child,o.memoizedState=ac(a),o.childLanes=ic(e,A,a),t.memoizedState=tc,oo(null,o)):(xa(t),nc(t,m))}var g=e.memoizedState;if(g!==null&&(m=g.dehydrated,m!==null)){if(c)t.flags&256?(xa(t),t.flags&=-257,t=oc(e,t,a)):t.memoizedState!==null?(Va(),t.child=e.child,t.flags|=128,t=null):(Va(),m=o.fallback,s=t.mode,o=Gr({mode:"visible",children:o.children},s),m=Ai(m,s,a,null),m.flags|=2,o.return=t,m.return=t,o.sibling=m,t.child=o,Ci(t,e.child,null,a),o=t.child,o.memoizedState=ac(a),o.childLanes=ic(e,A,a),t.memoizedState=tc,t=oo(null,o));else if(xa(t),wc(m)){if(A=m.nextSibling&&m.nextSibling.dataset,A)var D=A.dgst;A=D,o=Error(l(419)),o.stack="",o.digest=A,jn({value:o,source:null,stack:null}),t=oc(e,t,a)}else if(Je||$i(e,t,a,!1),A=(a&e.childLanes)!==0,Je||A){if(A=Pe,A!==null&&(o=bS(A,a),o!==0&&o!==g.retryLane))throw g.retryLane=o,di(e,o),gt(A,e,o),$l;kc(m)||Kr(),t=oc(e,t,a)}else kc(m)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,He=zt(m.nextSibling),et=t,fe=!0,Ga=null,Kt=!1,e!==null&&Hd(t,e),t=nc(t,o.children),t.flags|=4096);return t}return s?(Va(),m=o.fallback,s=t.mode,g=e.child,D=g.sibling,o=Sa(g,{mode:"hidden",children:o.children}),o.subtreeFlags=g.subtreeFlags&65011712,D!==null?m=Sa(D,m):(m=Ai(m,s,a,null),m.flags|=2),m.return=t,o.return=t,o.sibling=m,t.child=o,oo(null,o),o=t.child,m=e.child.memoizedState,m===null?m=ac(a):(s=m.cachePool,s!==null?(g=_e._currentValue,s=s.parent!==g?{parent:g,pool:g}:s):s=Ud(),m={baseLanes:m.baseLanes|a,cachePool:s}),o.memoizedState=m,o.childLanes=ic(e,A,a),t.memoizedState=tc,oo(e.child,o)):(xa(t),a=e.child,e=a.sibling,a=Sa(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(A=t.deletions,A===null?(t.deletions=[e],t.flags|=16):A.push(e)),t.child=a,t.memoizedState=null,a)}function nc(e,t){return t=Gr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gr(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function oc(e,t,a){return Ci(t,e.child,null,a),e=nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function XA(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Cl(e.return,t,a)}function rc(e,t,a,o,s,c){var A=e.memoizedState;A===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:s,treeForkCount:c}:(A.isBackwards=t,A.rendering=null,A.renderingStartTime=0,A.last=o,A.tail=a,A.tailMode=s,A.treeForkCount=c)}function qA(e,t,a){var o=t.pendingProps,s=o.revealOrder,c=o.tail;o=o.children;var A=Ke.current,m=(A&2)!==0;if(m?(A=A&1|2,t.flags|=128):A&=1,_(Ke,A),at(e,t,o,a),o=fe?_n:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&XA(e,a,t);else if(e.tag===19)XA(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&pr(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),rc(t,!1,s,a,c,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&pr(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}rc(t,!0,a,null,c,o);break;case"together":rc(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function ma(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($i(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=Sa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Sa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function sc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Er(e)))}function EC(e,t,a){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),Fa(t,_e,e.memoizedState.cache),Ei();break;case 27:case 5:Ft(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:Fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ZA(e,t,a):(xa(t),e=ma(e,t,a),e!==null?e.sibling:null);xa(t);break;case 19:var s=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||($i(e,t,a,!1),o=(a&t.childLanes)!==0),s){if(o)return qA(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_(Ke,Ke.current),o)break;return null;case 22:return t.lanes=0,KA(e,t,a,t.pendingProps);case 24:Fa(t,_e,e.memoizedState.cache)}return ma(e,t,a)}function QA(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!sc(e,a)&&(t.flags&128)===0)return Je=!1,EC(e,t,a);Je=(e.flags&131072)!==0}else Je=!1,fe&&(t.flags&1048576)!==0&&Dd(t,_n,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Ri(t.elementType),t.type=e,typeof e=="function")dl(e)?(o=pi(e,o),t.tag=1,t=jA(null,t,e,o,a)):(t.tag=0,t=ec(null,t,e,o,a));else{if(e!=null){var s=e.$$typeof;if(s===K){t.tag=11,t=xA(null,t,e,o,a);break e}else if(s===X){t.tag=14,t=VA(null,t,e,o,a);break e}}throw t=Ve(e)||e,Error(l(306,t,""))}}return t;case 0:return ec(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,s=pi(o,t.pendingProps),jA(e,t,o,s,a);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(l(387));o=t.pendingProps;var c=t.memoizedState;s=c.element,Ll(e,t),eo(t,o,null,a);var A=t.memoizedState;if(o=A.cache,Fa(t,_e,o),o!==c.cache&&gl(t,[_e],a,!0),$n(),o=A.element,c.isDehydrated)if(c={element:o,isDehydrated:!1,cache:A.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=JA(e,t,o,a);break e}else if(o!==s){s=xt(Error(l(424)),t),jn(s),t=JA(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=zt(e.firstChild),et=t,fe=!0,Ga=null,Kt=!0,a=Kd(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ei(),o===s){t=ma(e,t,a);break e}at(e,t,o,a)}t=t.child}return t;case 26:return vr(e,t),e===null?(a=ch(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,o=Xr(te.current).createElement(a),o[$e]=t,o[ht]=e,it(o,a,e),qe(o),t.stateNode=o):t.memoizedState=ch(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ft(t),e===null&&fe&&(o=t.stateNode=rh(t.type,t.pendingProps,te.current),et=t,Kt=!0,s=He,Za(t.type)?(xc=s,He=zt(o.firstChild)):He=s),at(e,t,t.pendingProps.children,a),vr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((s=o=He)&&(o=YC(o,t.type,t.pendingProps,Kt),o!==null?(t.stateNode=o,et=t,He=zt(o.firstChild),Kt=!1,s=!0):s=!1),s||ba(t)),Ft(t),s=t.type,c=t.pendingProps,A=e!==null?e.memoizedProps:null,o=c.children,bc(s,c)?o=null:A!==null&&bc(s,A)&&(t.flags|=32),t.memoizedState!==null&&(s=Gl(e,t,oC,null,null,a),go._currentValue=s),vr(e,t),at(e,t,o,a),t.child;case 6:return e===null&&fe&&((e=a=He)&&(a=zC(a,t.pendingProps,Kt),a!==null?(t.stateNode=a,et=t,He=null,e=!0):e=!1),e||ba(t)),null;case 13:return ZA(e,t,a);case 4:return Ge(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ci(t,null,o,a):at(e,t,o,a),t.child;case 11:return xA(e,t,t.type,t.pendingProps,a);case 7:return at(e,t,t.pendingProps,a),t.child;case 8:return at(e,t,t.pendingProps.children,a),t.child;case 12:return at(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Fa(t,t.type,o.value),at(e,t,o.children,a),t.child;case 9:return s=t.type._context,o=t.pendingProps.children,Ti(t),s=tt(s),o=o(s),t.flags|=1,at(e,t,o,a),t.child;case 14:return VA(e,t,t.type,t.pendingProps,a);case 15:return WA(e,t,t.type,t.pendingProps,a);case 19:return qA(e,t,a);case 31:return AC(e,t,a);case 22:return KA(e,t,a,t.pendingProps);case 24:return Ti(t),o=tt(_e),e===null?(s=Ol(),s===null&&(s=Pe,c=pl(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=a),s=c),t.memoizedState={parent:o,cache:s},Il(t),Fa(t,_e,s)):((e.lanes&a)!==0&&(Ll(e,t),eo(t,null,null,a),$n()),s=e.memoizedState,c=t.memoizedState,s.parent!==o?(s={parent:o,cache:o},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Fa(t,_e,o)):(o=c.cache,Fa(t,_e,o),o!==s.cache&&gl(t,[_e],a,!0))),at(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Ra(e){e.flags|=4}function lc(e,t,a,o,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(NE())e.flags|=8192;else throw fi=Rr,Nl}else e.flags&=-16777217}function $A(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Eh(t))if(NE())e.flags|=8192;else throw fi=Rr,Nl}function br(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?BS():536870912,e.lanes|=t,dn|=t)}function ro(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,o|=s.subtreeFlags&65011712,o|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function hC(e,t,a){var o=t.pendingProps;switch(Tl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Ea(_e),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?Ra(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Rl())),Be(t),null;case 26:var s=t.type,c=t.memoizedState;return e===null?(Ra(t),c!==null?(Be(t),$A(t,c)):(Be(t),lc(t,s,null,o,a))):c?c!==e.memoizedState?(Ra(t),Be(t),$A(t,c)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ra(t),Be(t),lc(t,s,e,o,a)),null;case 27:if(pt(t),a=te.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Ra(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Be(t),null}e=Y.current,Qi(t)?Bd(t):(e=rh(s,o,a),t.stateNode=e,Ra(t))}return Be(t),null;case 5:if(pt(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Ra(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Be(t),null}if(c=Y.current,Qi(t))Bd(t);else{var A=Xr(te.current);switch(c){case 1:c=A.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=A.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=A.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=A.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=A.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof o.is=="string"?A.createElement("select",{is:o.is}):A.createElement("select"),o.multiple?c.multiple=!0:o.size&&(c.size=o.size);break;default:c=typeof o.is=="string"?A.createElement(s,{is:o.is}):A.createElement(s)}}c[$e]=t,c[ht]=o;e:for(A=t.child;A!==null;){if(A.tag===5||A.tag===6)c.appendChild(A.stateNode);else if(A.tag!==4&&A.tag!==27&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;A=A.return}A.sibling.return=A.return,A=A.sibling}t.stateNode=c;e:switch(it(c,s,o),s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ra(t)}}return Be(t),lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Ra(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(e=te.current,Qi(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,s=et,s!==null)switch(s.tag){case 27:case 5:o=s.memoizedProps}e[$e]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ZE(e.nodeValue,a)),e||ba(t,!0)}else e=Xr(e).createTextNode(o),e[$e]=t,t.stateNode=e}return Be(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=Qi(t),a!==null){if(e===null){if(!o)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[$e]=t}else Ei(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else a=Rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Dt(t),t):(Dt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Be(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Qi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[$e]=t}else Ei(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),s=!1}else s=Rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Dt(t),t):(Dt(t),null)}return Dt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,s=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(s=o.alternate.memoizedState.cachePool.pool),c=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(c=o.memoizedState.cachePool.pool),c!==s&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),br(t,t.updateQueue),Be(t),null);case 4:return De(),e===null&&Dc(t.stateNode.containerInfo),Be(t),null;case 10:return Ea(t.type),Be(t),null;case 19:if(V(Ke),o=t.memoizedState,o===null)return Be(t),null;if(s=(t.flags&128)!==0,c=o.rendering,c===null)if(s)ro(o,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=pr(e),c!==null){for(t.flags|=128,ro(o,!1),e=c.updateQueue,t.updateQueue=e,br(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ld(a,e),a=a.sibling;return _(Ke,Ke.current&1|2),fe&&da(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Ot()>xr&&(t.flags|=128,s=!0,ro(o,!1),t.lanes=4194304)}else{if(!s)if(e=pr(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,br(t,e),ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!fe)return Be(t),null}else 2*Ot()-o.renderingStartTime>xr&&a!==536870912&&(t.flags|=128,s=!0,ro(o,!1),t.lanes=4194304);o.isBackwards?(c.sibling=t.child,t.child=c):(e=o.last,e!==null?e.sibling=c:t.child=c,o.last=c)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ot(),e.sibling=null,a=Ke.current,_(Ke,s?a&1|2:a&1),fe&&da(t,o.treeForkCount),e):(Be(t),null);case 22:case 23:return Dt(t),Hl(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),a=t.updateQueue,a!==null&&br(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&V(mi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ea(_e),Be(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function TC(e,t){switch(Tl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ea(_e),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pt(t),null;case 31:if(t.memoizedState!==null){if(Dt(t),t.alternate===null)throw Error(l(340));Ei()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Ei()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Ke),null;case 4:return De(),null;case 10:return Ea(t.type),null;case 22:case 23:return Dt(t),Hl(),e!==null&&V(mi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ea(_e),null;case 25:return null;default:return null}}function eE(e,t){switch(Tl(t),t.tag){case 3:Ea(_e),De();break;case 26:case 27:case 5:pt(t);break;case 4:De();break;case 31:t.memoizedState!==null&&Dt(t);break;case 13:Dt(t);break;case 19:V(Ke);break;case 10:Ea(t.type);break;case 22:case 23:Dt(t),Hl(),e!==null&&V(mi);break;case 24:Ea(_e)}}function so(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){o=void 0;var c=a.create,A=a.inst;o=c(),A.destroy=o}a=a.next}while(a!==s)}}catch(m){Oe(t,t.return,m)}}function Wa(e,t,a){try{var o=t.updateQueue,s=o!==null?o.lastEffect:null;if(s!==null){var c=s.next;o=c;do{if((o.tag&e)===e){var A=o.inst,m=A.destroy;if(m!==void 0){A.destroy=void 0,s=t;var g=a,D=m;try{D()}catch(F){Oe(s,g,F)}}}o=o.next}while(o!==c)}}catch(F){Oe(t,t.return,F)}}function tE(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{zd(t,a)}catch(o){Oe(e,e.return,o)}}}function aE(e,t,a){a.props=pi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Oe(e,t,o)}}function lo(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(s){Oe(e,t,s)}}function ia(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(s){Oe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){Oe(e,t,s)}else a.current=null}function iE(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(s){Oe(e,e.return,s)}}function cc(e,t,a){try{var o=e.stateNode;kC(o,e.type,a,t),o[ht]=t}catch(s){Oe(e,e.return,s)}}function nE(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nE(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ca));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Sc(e,t,a),e=e.sibling;e!==null;)Sc(e,t,a),e=e.sibling}function Fr(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fr(e,t,a),e=e.sibling;e!==null;)Fr(e,t,a),e=e.sibling}function oE(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);it(t,o,a),t[$e]=e,t[ht]=a}catch(c){Oe(e,e.return,c)}}var fa=!1,Ze=!1,dc=!1,rE=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function mC(e,t){if(e=e.containerInfo,vc=is,e=Rd(e),ol(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var s=o.anchorOffset,c=o.focusNode;o=o.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var A=0,m=-1,g=-1,D=0,F=0,w=e,H=null;t:for(;;){for(var G;w!==a||s!==0&&w.nodeType!==3||(m=A+s),w!==c||o!==0&&w.nodeType!==3||(g=A+o),w.nodeType===3&&(A+=w.nodeValue.length),(G=w.firstChild)!==null;)H=w,w=G;for(;;){if(w===e)break t;if(H===a&&++D===s&&(m=A),H===c&&++F===o&&(g=A),(G=w.nextSibling)!==null)break;w=H,H=w.parentNode}w=G}a=m===-1||g===-1?null:{start:m,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:e,selectionRange:a},is=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,s=c.memoizedProps,c=c.memoizedState,o=a.stateNode;try{var Z=pi(a.type,s);e=o.getSnapshotBeforeUpdate(Z,c),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Oe(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Uc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function sE(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),o&4&&so(5,a);break;case 1:if(ga(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(A){Oe(a,a.return,A)}else{var s=pi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(A){Oe(a,a.return,A)}}o&64&&tE(a),o&512&&lo(a,a.return);break;case 3:if(ga(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{zd(e,t)}catch(A){Oe(a,a.return,A)}}break;case 27:t===null&&o&4&&oE(a);case 26:case 5:ga(e,a),t===null&&o&4&&iE(a),o&512&&lo(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),o&4&&uE(e,a);break;case 13:ga(e,a),o&4&&SE(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=IC.bind(null,a),_C(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){t=t!==null&&t.memoizedState!==null||Ze,s=fa;var c=Ze;fa=o,(Ze=t)&&!c?pa(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),fa=s,Ze=c}break;case 30:break;default:ga(e,a)}}function lE(e){var t=e.alternate;t!==null&&(e.alternate=null,lE(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ws(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,mt=!1;function Ca(e,t,a){for(a=a.child;a!==null;)cE(e,t,a),a=a.sibling}function cE(e,t,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Bn,a)}catch{}switch(a.tag){case 26:Ze||ia(a,t),Ca(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||ia(a,t);var o=be,s=mt;Za(a.type)&&(be=a.stateNode,mt=!1),Ca(e,t,a),Ro(a.stateNode),be=o,mt=s;break;case 5:Ze||ia(a,t);case 6:if(o=be,s=mt,be=null,Ca(e,t,a),be=o,mt=s,be!==null)if(mt)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(a.stateNode)}catch(c){Oe(a,t,c)}else try{be.removeChild(a.stateNode)}catch(c){Oe(a,t,c)}break;case 18:be!==null&&(mt?(e=be,th(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cn(e)):th(be,a.stateNode));break;case 4:o=be,s=mt,be=a.stateNode.containerInfo,mt=!0,Ca(e,t,a),be=o,mt=s;break;case 0:case 11:case 14:case 15:Wa(2,a,t),Ze||Wa(4,a,t),Ca(e,t,a);break;case 1:Ze||(ia(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&aE(a,t,o)),Ca(e,t,a);break;case 21:Ca(e,t,a);break;case 22:Ze=(o=Ze)||a.memoizedState!==null,Ca(e,t,a),Ze=o;break;default:Ca(e,t,a)}}function uE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cn(e)}catch(a){Oe(t,t.return,a)}}}function SE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cn(e)}catch(a){Oe(t,t.return,a)}}function RC(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rE),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rE),t;default:throw Error(l(435,e.tag))}}function Ur(e,t){var a=RC(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var s=LC.bind(null,e,o);o.then(s,s)}})}function Rt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var s=a[o],c=e,A=t,m=A;e:for(;m!==null;){switch(m.tag){case 27:if(Za(m.type)){be=m.stateNode,mt=!1;break e}break;case 5:be=m.stateNode,mt=!1;break e;case 3:case 4:be=m.stateNode.containerInfo,mt=!0;break e}m=m.return}if(be===null)throw Error(l(160));cE(c,A,s),be=null,mt=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)dE(t,e),t=t.sibling}var qt=null;function dE(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),ft(e),o&4&&(Wa(3,e,e.return),so(3,e),Wa(5,e,e.return));break;case 1:Rt(t,e),ft(e),o&512&&(Ze||a===null||ia(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var s=qt;if(Rt(t,e),ft(e),o&512&&(Ze||a===null||ia(a,a.return)),o&4){var c=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(o){case"title":c=s.getElementsByTagName("title")[0],(!c||c[bn]||c[$e]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(o),s.head.insertBefore(c,s.querySelector("head > title"))),it(c,o,a),c[$e]=e,qe(c),o=c;break e;case"link":var A=dh("link","href",s).get(o+(a.href||""));if(A){for(var m=0;m<A.length;m++)if(c=A[m],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){A.splice(m,1);break t}}c=s.createElement(o),it(c,o,a),s.head.appendChild(c);break;case"meta":if(A=dh("meta","content",s).get(o+(a.content||""))){for(m=0;m<A.length;m++)if(c=A[m],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){A.splice(m,1);break t}}c=s.createElement(o),it(c,o,a),s.head.appendChild(c);break;default:throw Error(l(468,o))}c[$e]=e,qe(c),o=c}e.stateNode=o}else Ah(s,e.type,e.stateNode);else e.stateNode=Sh(s,o,e.memoizedProps);else c!==o?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,o===null?Ah(s,e.type,e.stateNode):Sh(s,o,e.memoizedProps)):o===null&&e.stateNode!==null&&cc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Rt(t,e),ft(e),o&512&&(Ze||a===null||ia(a,a.return)),a!==null&&o&4&&cc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Rt(t,e),ft(e),o&512&&(Ze||a===null||ia(a,a.return)),e.flags&32){s=e.stateNode;try{Wi(s,"")}catch(Z){Oe(e,e.return,Z)}}o&4&&e.stateNode!=null&&(s=e.memoizedProps,cc(e,s,a!==null?a.memoizedProps:s)),o&1024&&(dc=!0);break;case 6:if(Rt(t,e),ft(e),o&4){if(e.stateNode===null)throw Error(l(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Z){Oe(e,e.return,Z)}}break;case 3:if($r=null,s=qt,qt=qr(t.containerInfo),Rt(t,e),qt=s,ft(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cn(t.containerInfo)}catch(Z){Oe(e,e.return,Z)}dc&&(dc=!1,AE(e));break;case 4:o=qt,qt=qr(e.stateNode.containerInfo),Rt(t,e),ft(e),qt=o;break;case 12:Rt(t,e),ft(e);break;case 31:Rt(t,e),ft(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ur(e,o)));break;case 13:Rt(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wr=Ot()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ur(e,o)));break;case 22:s=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,D=fa,F=Ze;if(fa=D||s,Ze=F||g,Rt(t,e),Ze=F,fa=D,ft(e),o&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||g||fa||Ze||yi(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(c=g.stateNode,s)A=c.style,typeof A.setProperty=="function"?A.setProperty("display","none","important"):A.display="none";else{m=g.stateNode;var w=g.memoizedProps.style,H=w!=null&&w.hasOwnProperty("display")?w.display:null;m.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(Z){Oe(g,g.return,Z)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=s?"":g.memoizedProps}catch(Z){Oe(g,g.return,Z)}}}else if(t.tag===18){if(a===null){g=t;try{var G=g.stateNode;s?ah(G,!0):ah(g.stateNode,!1)}catch(Z){Oe(g,g.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ur(e,a))));break;case 19:Rt(t,e),ft(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ur(e,o)));break;case 30:break;case 21:break;default:Rt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(nE(o)){a=o;break}o=o.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var s=a.stateNode,c=uc(e);Fr(e,c,s);break;case 5:var A=a.stateNode;a.flags&32&&(Wi(A,""),a.flags&=-33);var m=uc(e);Fr(e,m,A);break;case 3:case 4:var g=a.stateNode.containerInfo,D=uc(e);Sc(e,D,g);break;default:throw Error(l(161))}}catch(F){Oe(e,e.return,F)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function AE(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;AE(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ga(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sE(e,t.alternate,t),t=t.sibling}function yi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wa(4,t,t.return),yi(t);break;case 1:ia(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&aE(t,t.return,a),yi(t);break;case 27:Ro(t.stateNode);case 26:case 5:ia(t,t.return),yi(t);break;case 22:t.memoizedState===null&&yi(t);break;case 30:yi(t);break;default:yi(t)}e=e.sibling}}function pa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,s=e,c=t,A=c.flags;switch(c.tag){case 0:case 11:case 15:pa(s,c,a),so(4,c);break;case 1:if(pa(s,c,a),o=c,s=o.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(D){Oe(o,o.return,D)}if(o=c,s=o.updateQueue,s!==null){var m=o.stateNode;try{var g=s.shared.hiddenCallbacks;if(g!==null)for(s.shared.hiddenCallbacks=null,s=0;s<g.length;s++)Yd(g[s],m)}catch(D){Oe(o,o.return,D)}}a&&A&64&&tE(c),lo(c,c.return);break;case 27:oE(c);case 26:case 5:pa(s,c,a),a&&o===null&&A&4&&iE(c),lo(c,c.return);break;case 12:pa(s,c,a);break;case 31:pa(s,c,a),a&&A&4&&uE(s,c);break;case 13:pa(s,c,a),a&&A&4&&SE(s,c);break;case 22:c.memoizedState===null&&pa(s,c,a),lo(c,c.return);break;case 30:break;default:pa(s,c,a)}t=t.sibling}}function Ac(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jn(a))}function Ec(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jn(e))}function Qt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)EE(e,t,a,o),t=t.sibling}function EE(e,t,a,o){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Qt(e,t,a,o),s&2048&&so(9,t);break;case 1:Qt(e,t,a,o);break;case 3:Qt(e,t,a,o),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jn(e)));break;case 12:if(s&2048){Qt(e,t,a,o),e=t.stateNode;try{var c=t.memoizedProps,A=c.id,m=c.onPostCommit;typeof m=="function"&&m(A,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Oe(t,t.return,g)}}else Qt(e,t,a,o);break;case 31:Qt(e,t,a,o);break;case 13:Qt(e,t,a,o);break;case 23:break;case 22:c=t.stateNode,A=t.alternate,t.memoizedState!==null?c._visibility&2?Qt(e,t,a,o):co(e,t):c._visibility&2?Qt(e,t,a,o):(c._visibility|=2,cn(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Ac(A,t);break;case 24:Qt(e,t,a,o),s&2048&&Ec(t.alternate,t);break;default:Qt(e,t,a,o)}}function cn(e,t,a,o,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,A=t,m=a,g=o,D=A.flags;switch(A.tag){case 0:case 11:case 15:cn(c,A,m,g,s),so(8,A);break;case 23:break;case 22:var F=A.stateNode;A.memoizedState!==null?F._visibility&2?cn(c,A,m,g,s):co(c,A):(F._visibility|=2,cn(c,A,m,g,s)),s&&D&2048&&Ac(A.alternate,A);break;case 24:cn(c,A,m,g,s),s&&D&2048&&Ec(A.alternate,A);break;default:cn(c,A,m,g,s)}t=t.sibling}}function co(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,s=o.flags;switch(o.tag){case 22:co(a,o),s&2048&&Ac(o.alternate,o);break;case 24:co(a,o),s&2048&&Ec(o.alternate,o);break;default:co(a,o)}t=t.sibling}}var uo=8192;function un(e,t,a){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)hE(e,t,a),e=e.sibling}function hE(e,t,a){switch(e.tag){case 26:un(e,t,a),e.flags&uo&&e.memoizedState!==null&&ng(a,qt,e.memoizedState,e.memoizedProps);break;case 5:un(e,t,a);break;case 3:case 4:var o=qt;qt=qr(e.stateNode.containerInfo),un(e,t,a),qt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=uo,uo=16777216,un(e,t,a),uo=o):un(e,t,a));break;default:un(e,t,a)}}function TE(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function So(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Qe=o,RE(o,e)}TE(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mE(e),e=e.sibling}function mE(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Wa(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,kr(e)):So(e);break;default:So(e)}}function kr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];Qe=o,RE(o,e)}TE(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wa(8,t,t.return),kr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,kr(t));break;default:kr(t)}e=e.sibling}}function RE(e,t){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:Wa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jn(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Qe=o;else e:for(a=e;Qe!==null;){o=Qe;var s=o.sibling,c=o.return;if(lE(o),o===a){Qe=null;break e}if(s!==null){s.return=c,Qe=s;break e}Qe=c}}}var fC={getCacheForType:function(e){var t=tt(_e),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return tt(_e).controller.signal}},CC=typeof WeakMap=="function"?WeakMap:Map,pe=0,Pe=null,Ae=null,Te=0,ye=0,Ht=null,Ka=!1,Sn=!1,hc=!1,ya=0,we=0,Ya=0,Oi=0,Tc=0,Bt=0,dn=0,Ao=null,Ct=null,mc=!1,wr=0,fE=0,xr=1/0,Vr=null,za=null,Xe=0,_a=null,An=null,Oa=0,Rc=0,fc=null,CE=null,Eo=0,Cc=null;function vt(){return(pe&2)!==0&&Te!==0?Te&-Te:U.T!==null?Ic():FS()}function gE(){if(Bt===0)if((Te&536870912)===0||fe){var e=Zo;Zo<<=1,(Zo&3932160)===0&&(Zo=262144),Bt=e}else Bt=536870912;return e=Pt.current,e!==null&&(e.flags|=32),Bt}function gt(e,t,a){(e===Pe&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(En(e,0),ja(e,Te,Bt,!1)),Gn(e,a),((pe&2)===0||e!==Pe)&&(e===Pe&&((pe&2)===0&&(Oi|=a),we===4&&ja(e,Te,Bt,!1)),na(e))}function pE(e,t,a){if((pe&6)!==0)throw Error(l(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||vn(e,t),s=o?yC(e,t):pc(e,t,!0),c=o;do{if(s===0){Sn&&!o&&ja(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!gC(a)){s=pc(e,t,!1),c=!1;continue}if(s===2){if(c=t,e.errorRecoveryDisabledLanes&c)var A=0;else A=e.pendingLanes&-536870913,A=A!==0?A:A&536870912?536870912:0;if(A!==0){t=A;e:{var m=e;s=Ao;var g=m.current.memoizedState.isDehydrated;if(g&&(En(m,A).flags|=256),A=pc(m,A,!1),A!==2){if(hc&&!g){m.errorRecoveryDisabledLanes|=c,Oi|=c,s=4;break e}c=Ct,Ct=s,c!==null&&(Ct===null?Ct=c:Ct.push.apply(Ct,c))}s=A}if(c=!1,s!==2)continue}}if(s===1){En(e,0),ja(e,t,0,!0);break}e:{switch(o=e,c=s,c){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:ja(o,t,Bt,!Ka);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=wr+300-Ot(),10<s)){if(ja(o,t,Bt,!Ka),qo(o,0,!0)!==0)break e;Oa=t,o.timeoutHandle=$E(yE.bind(null,o,a,Ct,Vr,mc,t,Bt,Oi,dn,Ka,c,"Throttled",-0,0),s);break e}yE(o,a,Ct,Vr,mc,t,Bt,Oi,dn,Ka,c,null,-0,0)}}break}while(!0);na(e)}function yE(e,t,a,o,s,c,A,m,g,D,F,w,H,G){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},hE(t,c,w);var Z=(c&62914560)===c?wr-Ot():(c&4194048)===c?fE-Ot():0;if(Z=og(w,Z),Z!==null){Oa=c,e.cancelPendingCommit=Z(HE.bind(null,e,t,c,a,o,s,A,m,g,F,w,null,H,G)),ja(e,c,A,!D);return}}HE(e,t,c,a,o,s,A,m,g)}function gC(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var s=a[o],c=s.getSnapshot;s=s.value;try{if(!Lt(c(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ja(e,t,a,o){t&=~Tc,t&=~Oi,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var s=t;0<s;){var c=31-It(s),A=1<<c;o[c]=-1,s&=~A}a!==0&&vS(e,a,t)}function Wr(){return(pe&6)===0?(ho(0),!1):!0}function gc(){if(Ae!==null){if(ye===0)var e=Ae.return;else e=Ae,Aa=hi=null,Ul(e),nn=null,Xn=0,e=Ae;for(;e!==null;)eE(e.alternate,e),e=e.return;Ae=null}}function En(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,VC(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Oa=0,gc(),Pe=e,Ae=a=Sa(e.current,null),Te=t,ye=0,Ht=null,Ka=!1,Sn=vn(e,t),hc=!1,dn=Bt=Tc=Oi=Ya=we=0,Ct=Ao=null,mc=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var s=31-It(o),c=1<<s;t|=e[s],o&=~c}return ya=t,cr(),a}function OE(e,t){ce=null,U.H=no,t===an||t===mr?(t=xd(),ye=3):t===Nl?(t=xd(),ye=4):ye=t===$l?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ht=t,Ae===null&&(we=1,Hr(e,xt(t,e.current)))}function NE(){var e=Pt.current;return e===null?!0:(Te&4194048)===Te?Yt===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Yt:!1}function IE(){var e=U.H;return U.H=no,e===null?no:e}function LE(){var e=U.A;return U.A=fC,e}function Kr(){we=4,Ka||(Te&4194048)!==Te&&Pt.current!==null||(Sn=!0),(Ya&134217727)===0&&(Oi&134217727)===0||Pe===null||ja(Pe,Te,Bt,!1)}function pc(e,t,a){var o=pe;pe|=2;var s=IE(),c=LE();(Pe!==e||Te!==t)&&(Vr=null,En(e,t)),t=!1;var A=we;e:do try{if(ye!==0&&Ae!==null){var m=Ae,g=Ht;switch(ye){case 8:gc(),A=6;break e;case 3:case 2:case 9:case 6:Pt.current===null&&(t=!0);var D=ye;if(ye=0,Ht=null,hn(e,m,g,D),a&&Sn){A=0;break e}break;default:D=ye,ye=0,Ht=null,hn(e,m,g,D)}}pC(),A=we;break}catch(F){OE(e,F)}while(!0);return t&&e.shellSuspendCounter++,Aa=hi=null,pe=o,U.H=s,U.A=c,Ae===null&&(Pe=null,Te=0,cr()),A}function pC(){for(;Ae!==null;)ME(Ae)}function yC(e,t){var a=pe;pe|=2;var o=IE(),s=LE();Pe!==e||Te!==t?(Vr=null,xr=Ot()+500,En(e,t)):Sn=vn(e,t);e:do try{if(ye!==0&&Ae!==null){t=Ae;var c=Ht;t:switch(ye){case 1:ye=0,Ht=null,hn(e,t,c,1);break;case 2:case 9:if(kd(c)){ye=0,Ht=null,PE(t);break}t=function(){ye!==2&&ye!==9||Pe!==e||(ye=7),na(e)},c.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:kd(c)?(ye=0,Ht=null,PE(t)):(ye=0,Ht=null,hn(e,t,c,7));break;case 5:var A=null;switch(Ae.tag){case 26:A=Ae.memoizedState;case 5:case 27:var m=Ae;if(A?Eh(A):m.stateNode.complete){ye=0,Ht=null;var g=m.sibling;if(g!==null)Ae=g;else{var D=m.return;D!==null?(Ae=D,Yr(D)):Ae=null}break t}}ye=0,Ht=null,hn(e,t,c,5);break;case 6:ye=0,Ht=null,hn(e,t,c,6);break;case 8:gc(),we=6;break e;default:throw Error(l(462))}}OC();break}catch(F){OE(e,F)}while(!0);return Aa=hi=null,U.H=o,U.A=s,pe=a,Ae!==null?0:(Pe=null,Te=0,cr(),we)}function OC(){for(;Ae!==null&&!_R();)ME(Ae)}function ME(e){var t=QA(e.alternate,e,ya);e.memoizedProps=e.pendingProps,t===null?Yr(e):Ae=t}function PE(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=_A(a,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=_A(a,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:Ul(t);default:eE(a,t),t=Ae=Ld(t,ya),t=QA(a,t,ya)}e.memoizedProps=e.pendingProps,t===null?Yr(e):Ae=t}function hn(e,t,a,o){Aa=hi=null,Ul(t),nn=null,Xn=0;var s=t.return;try{if(dC(e,s,t,a,Te)){we=1,Hr(e,xt(a,e.current)),Ae=null;return}}catch(c){if(s!==null)throw Ae=s,c;we=1,Hr(e,xt(a,e.current)),Ae=null;return}t.flags&32768?(fe||o===1?e=!0:Sn||(Te&536870912)!==0?e=!1:(Ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=Pt.current,o!==null&&o.tag===13&&(o.flags|=16384))),DE(t,e)):Yr(t)}function Yr(e){var t=e;do{if((t.flags&32768)!==0){DE(t,Ka);return}e=t.return;var a=hC(t.alternate,t,ya);if(a!==null){Ae=a;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);we===0&&(we=5)}function DE(e,t){do{var a=TC(e.alternate,e);if(a!==null){a.flags&=32767,Ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=a}while(e!==null);we=6,Ae=null}function HE(e,t,a,o,s,c,A,m,g){e.cancelPendingCommit=null;do zr();while(Xe!==0);if((pe&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(c=t.lanes|t.childLanes,c|=ul,af(e,a,c,A,m,g),e===Pe&&(Ae=Pe=null,Te=0),An=t,_a=e,Oa=a,Rc=c,fc=s,CE=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,MC(jo,function(){return FE(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,s=z.p,z.p=2,A=pe,pe|=4;try{mC(e,t,a)}finally{pe=A,z.p=s,U.T=o}}Xe=1,BE(),vE(),GE()}}function BE(){if(Xe===1){Xe=0;var e=_a,t=An,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=z.p;z.p=2;var s=pe;pe|=4;try{dE(t,e);var c=Gc,A=Rd(e.containerInfo),m=c.focusedElem,g=c.selectionRange;if(A!==m&&m&&m.ownerDocument&&md(m.ownerDocument.documentElement,m)){if(g!==null&&ol(m)){var D=g.start,F=g.end;if(F===void 0&&(F=D),"selectionStart"in m)m.selectionStart=D,m.selectionEnd=Math.min(F,m.value.length);else{var w=m.ownerDocument||document,H=w&&w.defaultView||window;if(H.getSelection){var G=H.getSelection(),Z=m.textContent.length,ie=Math.min(g.start,Z),Me=g.end===void 0?ie:Math.min(g.end,Z);!G.extend&&ie>Me&&(A=Me,Me=ie,ie=A);var L=Td(m,ie),O=Td(m,Me);if(L&&O&&(G.rangeCount!==1||G.anchorNode!==L.node||G.anchorOffset!==L.offset||G.focusNode!==O.node||G.focusOffset!==O.offset)){var P=w.createRange();P.setStart(L.node,L.offset),G.removeAllRanges(),ie>Me?(G.addRange(P),G.extend(O.node,O.offset)):(P.setEnd(O.node,O.offset),G.addRange(P))}}}}for(w=[],G=m;G=G.parentNode;)G.nodeType===1&&w.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<w.length;m++){var k=w[m];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}is=!!vc,Gc=vc=null}finally{pe=s,z.p=o,U.T=a}}e.current=t,Xe=2}}function vE(){if(Xe===2){Xe=0;var e=_a,t=An,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=z.p;z.p=2;var s=pe;pe|=4;try{sE(e,t.alternate,t)}finally{pe=s,z.p=o,U.T=a}}Xe=3}}function GE(){if(Xe===4||Xe===3){Xe=0,jR();var e=_a,t=An,a=Oa,o=CE;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,An=_a=null,bE(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(za=null),xs(a),t=t.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Bn,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=U.T,s=z.p,z.p=2,U.T=null;try{for(var c=e.onRecoverableError,A=0;A<o.length;A++){var m=o[A];c(m.value,{componentStack:m.stack})}}finally{U.T=t,z.p=s}}(Oa&3)!==0&&zr(),na(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===Cc?Eo++:(Eo=0,Cc=e):Eo=0,ho(0)}}function bE(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jn(t)))}function zr(){return BE(),vE(),GE(),FE()}function FE(){if(Xe!==5)return!1;var e=_a,t=Rc;Rc=0;var a=xs(Oa),o=U.T,s=z.p;try{z.p=32>a?32:a,U.T=null,a=fc,fc=null;var c=_a,A=Oa;if(Xe=0,An=_a=null,Oa=0,(pe&6)!==0)throw Error(l(331));var m=pe;if(pe|=4,mE(c.current),EE(c,c.current,A,a),pe=m,ho(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Bn,c)}catch{}return!0}finally{z.p=s,U.T=o,bE(e,t)}}function UE(e,t,a){t=xt(a,t),t=Ql(e.stateNode,t,2),e=wa(e,t,2),e!==null&&(Gn(e,2),na(e))}function Oe(e,t,a){if(e.tag===3)UE(e,e,a);else for(;t!==null;){if(t.tag===3){UE(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))){e=xt(a,e),a=kA(2),o=wa(t,a,2),o!==null&&(wA(a,o,t,e),Gn(o,2),na(o));break}}t=t.return}}function yc(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new CC;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(a)||(hc=!0,s.add(a),e=NC.bind(null,e,t,a),t.then(e,e))}function NC(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Pe===e&&(Te&a)===a&&(we===4||we===3&&(Te&62914560)===Te&&300>Ot()-wr?(pe&2)===0&&En(e,0):Tc|=a,dn===Te&&(dn=0)),na(e)}function kE(e,t){t===0&&(t=BS()),e=di(e,t),e!==null&&(Gn(e,t),na(e))}function IC(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),kE(e,a)}function LC(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(t),kE(e,a)}function MC(e,t){return Fs(e,t)}var _r=null,Tn=null,Oc=!1,jr=!1,Nc=!1,Ja=0;function na(e){e!==Tn&&e.next===null&&(Tn===null?_r=Tn=e:Tn=Tn.next=e),jr=!0,Oc||(Oc=!0,DC())}function ho(e,t){if(!Nc&&jr){Nc=!0;do for(var a=!1,o=_r;o!==null;){if(e!==0){var s=o.pendingLanes;if(s===0)var c=0;else{var A=o.suspendedLanes,m=o.pingedLanes;c=(1<<31-It(42|e)+1)-1,c&=s&~(A&~m),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,WE(o,c))}else c=Te,c=qo(o,o===Pe?c:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(c&3)===0||vn(o,c)||(a=!0,WE(o,c));o=o.next}while(a);Nc=!1}}function PC(){wE()}function wE(){jr=Oc=!1;var e=0;Ja!==0&&xC()&&(e=Ja);for(var t=Ot(),a=null,o=_r;o!==null;){var s=o.next,c=xE(o,t);c===0?(o.next=null,a===null?_r=s:a.next=s,s===null&&(Tn=a)):(a=o,(e!==0||(c&3)!==0)&&(jr=!0)),o=s}Xe!==0&&Xe!==5||ho(e),Ja!==0&&(Ja=0)}function xE(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var A=31-It(c),m=1<<A,g=s[A];g===-1?((m&a)===0||(m&o)!==0)&&(s[A]=tf(m,t)):g<=t&&(e.expiredLanes|=m),c&=~m}if(t=Pe,a=Te,a=qo(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Us(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||vn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Us(o),xs(a)){case 2:case 8:a=DS;break;case 32:a=jo;break;case 268435456:a=HS;break;default:a=jo}return o=VE.bind(null,e),a=Fs(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Us(o),e.callbackPriority=2,e.callbackNode=null,2}function VE(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zr()&&e.callbackNode!==a)return null;var o=Te;return o=qo(e,e===Pe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(pE(e,o,t),xE(e,Ot()),e.callbackNode!=null&&e.callbackNode===a?VE.bind(null,e):null)}function WE(e,t){if(zr())return null;pE(e,t,!0)}function DC(){WC(function(){(pe&6)!==0?Fs(PS,PC):wE()})}function Ic(){if(Ja===0){var e=en;e===0&&(e=Jo,Jo<<=1,(Jo&261888)===0&&(Jo=256)),Ja=e}return Ja}function KE(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tr(""+e)}function YE(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function HC(e,t,a,o,s){if(t==="submit"&&a&&a.stateNode===s){var c=KE((s[ht]||null).action),A=o.submitter;A&&(t=(t=A[ht]||null)?KE(t.formAction):A.getAttribute("formAction"),t!==null&&(c=t,A=null));var m=new or("action","action",null,o,s);e.push({event:m,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var g=A?YE(s,A):new FormData(s);_l(a,{pending:!0,data:g,method:s.method,action:c},null,g)}}else typeof c=="function"&&(m.preventDefault(),g=A?YE(s,A):new FormData(s),_l(a,{pending:!0,data:g,method:s.method,action:c},c,g))},currentTarget:s}]})}}for(var Lc=0;Lc<cl.length;Lc++){var Mc=cl[Lc],BC=Mc.toLowerCase(),vC=Mc[0].toUpperCase()+Mc.slice(1);Xt(BC,"on"+vC)}Xt(gd,"onAnimationEnd"),Xt(pd,"onAnimationIteration"),Xt(yd,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Zf,"onTransitionRun"),Xt(Xf,"onTransitionStart"),Xt(qf,"onTransitionCancel"),Xt(Od,"onTransitionEnd"),xi("onMouseEnter",["mouseout","mouseover"]),xi("onMouseLeave",["mouseout","mouseover"]),xi("onPointerEnter",["pointerout","pointerover"]),xi("onPointerLeave",["pointerout","pointerover"]),li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),li("onBeforeInput",["compositionend","keypress","textInput","paste"]),li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function zE(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],s=o.event;o=o.listeners;e:{var c=void 0;if(t)for(var A=o.length-1;0<=A;A--){var m=o[A],g=m.instance,D=m.currentTarget;if(m=m.listener,g!==c&&s.isPropagationStopped())break e;c=m,s.currentTarget=D;try{c(s)}catch(F){lr(F)}s.currentTarget=null,c=g}else for(A=0;A<o.length;A++){if(m=o[A],g=m.instance,D=m.currentTarget,m=m.listener,g!==c&&s.isPropagationStopped())break e;c=m,s.currentTarget=D;try{c(s)}catch(F){lr(F)}s.currentTarget=null,c=g}}}}function Ee(e,t){var a=t[Vs];a===void 0&&(a=t[Vs]=new Set);var o=e+"__bubble";a.has(o)||(_E(t,e,2,!1),a.add(o))}function Pc(e,t,a){var o=0;t&&(o|=4),_E(a,e,o,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Dc(e){if(!e[Jr]){e[Jr]=!0,wS.forEach(function(a){a!=="selectionchange"&&(GC.has(a)||Pc(a,!1,e),Pc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,Pc("selectionchange",!1,t))}}function _E(e,t,a,o){switch(gh(t)){case 2:var s=lg;break;case 8:s=cg;break;default:s=zc}a=s.bind(null,t,a,e),s=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function Hc(e,t,a,o,s){var c=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var A=o.tag;if(A===3||A===4){var m=o.stateNode.containerInfo;if(m===s)break;if(A===4)for(A=o.return;A!==null;){var g=A.tag;if((g===3||g===4)&&A.stateNode.containerInfo===s)return;A=A.return}for(;m!==null;){if(A=Ui(m),A===null)return;if(g=A.tag,g===5||g===6||g===26||g===27){o=c=A;continue e}m=m.parentNode}}o=o.return}qS(function(){var D=c,F=Js(a),w=[];e:{var H=Nd.get(e);if(H!==void 0){var G=or,Z=e;switch(e){case"keypress":if(ir(a)===0)break e;case"keydown":case"keyup":G=Lf;break;case"focusin":Z="focus",G=el;break;case"focusout":Z="blur",G=el;break;case"beforeblur":case"afterblur":G=el;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=hf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Df;break;case gd:case pd:case yd:G=Rf;break;case Od:G=Bf;break;case"scroll":case"scrollend":G=Af;break;case"wheel":G=Gf;break;case"copy":case"cut":case"paste":G=Cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=ad;break;case"toggle":case"beforetoggle":G=Ff}var ie=(t&4)!==0,Me=!ie&&(e==="scroll"||e==="scrollend"),L=ie?H!==null?H+"Capture":null:H;ie=[];for(var O=D,P;O!==null;){var k=O;if(P=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||P===null||L===null||(k=Un(O,L),k!=null&&ie.push(mo(O,k,P))),Me)break;O=O.return}0<ie.length&&(H=new G(H,Z,null,a,F),w.push({event:H,listeners:ie}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",H&&a!==js&&(Z=a.relatedTarget||a.fromElement)&&(Ui(Z)||Z[Fi]))break e;if((G||H)&&(H=F.window===F?F:(H=F.ownerDocument)?H.defaultView||H.parentWindow:window,G?(Z=a.relatedTarget||a.toElement,G=D,Z=Z?Ui(Z):null,Z!==null&&(Me=d(Z),ie=Z.tag,Z!==Me||ie!==5&&ie!==27&&ie!==6)&&(Z=null)):(G=null,Z=D),G!==Z)){if(ie=ed,k="onMouseLeave",L="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ie=ad,k="onPointerLeave",L="onPointerEnter",O="pointer"),Me=G==null?H:Fn(G),P=Z==null?H:Fn(Z),H=new ie(k,O+"leave",G,a,F),H.target=Me,H.relatedTarget=P,k=null,Ui(F)===D&&(ie=new ie(L,O+"enter",Z,a,F),ie.target=P,ie.relatedTarget=Me,k=ie),Me=k,G&&Z)t:{for(ie=bC,L=G,O=Z,P=0,k=L;k;k=ie(k))P++;k=0;for(var ae=O;ae;ae=ie(ae))k++;for(;0<P-k;)L=ie(L),P--;for(;0<k-P;)O=ie(O),k--;for(;P--;){if(L===O||O!==null&&L===O.alternate){ie=L;break t}L=ie(L),O=ie(O)}ie=null}else ie=null;G!==null&&jE(w,H,G,ie,!1),Z!==null&&Me!==null&&jE(w,Me,Z,ie,!0)}}e:{if(H=D?Fn(D):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var Ce=ud;else if(ld(H))if(Sd)Ce=_f;else{Ce=Yf;var q=Kf}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?D&&_s(D.elementType)&&(Ce=ud):Ce=zf;if(Ce&&(Ce=Ce(e,D))){cd(w,Ce,a,F);break e}q&&q(e,H,D),e==="focusout"&&D&&H.type==="number"&&D.memoizedProps.value!=null&&zs(H,"number",H.value)}switch(q=D?Fn(D):window,e){case"focusin":(ld(q)||q.contentEditable==="true")&&(_i=q,rl=D,zn=null);break;case"focusout":zn=rl=_i=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,fd(w,a,F);break;case"selectionchange":if(Jf)break;case"keydown":case"keyup":fd(w,a,F)}var de;if(al)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else zi?rd(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(id&&a.locale!=="ko"&&(zi||me!=="onCompositionStart"?me==="onCompositionEnd"&&zi&&(de=QS()):(Ba=F,qs="value"in Ba?Ba.value:Ba.textContent,zi=!0)),q=Zr(D,me),0<q.length&&(me=new td(me,e,null,a,F),w.push({event:me,listeners:q}),de?me.data=de:(de=sd(a),de!==null&&(me.data=de)))),(de=kf?wf(e,a):xf(e,a))&&(me=Zr(D,"onBeforeInput"),0<me.length&&(q=new td("onBeforeInput","beforeinput",null,a,F),w.push({event:q,listeners:me}),q.data=de)),HC(w,e,D,a,F)}zE(w,t)})}function mo(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Zr(e,t){for(var a=t+"Capture",o=[];e!==null;){var s=e,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=Un(e,a),s!=null&&o.unshift(mo(e,s,c)),s=Un(e,t),s!=null&&o.push(mo(e,s,c))),e.tag===3)return o;e=e.return}return[]}function bC(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jE(e,t,a,o,s){for(var c=t._reactName,A=[];a!==null&&a!==o;){var m=a,g=m.alternate,D=m.stateNode;if(m=m.tag,g!==null&&g===o)break;m!==5&&m!==26&&m!==27||D===null||(g=D,s?(D=Un(a,c),D!=null&&A.unshift(mo(a,D,g))):s||(D=Un(a,c),D!=null&&A.push(mo(a,D,g)))),a=a.return}A.length!==0&&e.push({event:t,listeners:A})}var FC=/\r\n?/g,UC=/\u0000|\uFFFD/g;function JE(e){return(typeof e=="string"?e:""+e).replace(FC,`
`).replace(UC,"")}function ZE(e,t){return t=JE(t),JE(e)===t}function Le(e,t,a,o,s,c){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Wi(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Wi(e,""+o);break;case"className":$o(e,"class",o);break;case"tabIndex":$o(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$o(e,a,o);break;case"style":ZS(e,o,c);break;case"data":if(t!=="object"){$o(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tr(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&Le(e,t,"name",s.name,s,null),Le(e,t,"formEncType",s.formEncType,s,null),Le(e,t,"formMethod",s.formMethod,s,null),Le(e,t,"formTarget",s.formTarget,s,null)):(Le(e,t,"encType",s.encType,s,null),Le(e,t,"method",s.method,s,null),Le(e,t,"target",s.target,s,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tr(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ca);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=tr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Qo(e,"popover",o);break;case"xlinkActuate":la(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":la(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":la(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":la(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":la(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":la(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":la(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":la(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":la(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Qo(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sf.get(a)||a,Qo(e,a,o))}}function Bc(e,t,a,o,s,c){switch(a){case"style":ZS(e,o,c);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Wi(e,o):(typeof o=="number"||typeof o=="bigint")&&Wi(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xS.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),c=e[ht]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,s),typeof o=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,s);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Qo(e,a,o)}}}function it(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,s=!1,c;for(c in a)if(a.hasOwnProperty(c)){var A=a[c];if(A!=null)switch(c){case"src":o=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Le(e,t,c,A,a,null)}}s&&Le(e,t,"srcSet",a.srcSet,a,null),o&&Le(e,t,"src",a.src,a,null);return;case"input":Ee("invalid",e);var m=c=A=s=null,g=null,D=null;for(o in a)if(a.hasOwnProperty(o)){var F=a[o];if(F!=null)switch(o){case"name":s=F;break;case"type":A=F;break;case"checked":g=F;break;case"defaultChecked":D=F;break;case"value":c=F;break;case"defaultValue":m=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(l(137,t));break;default:Le(e,t,o,F,a,null)}}zS(e,c,m,g,D,A,s,!1);return;case"select":Ee("invalid",e),o=A=c=null;for(s in a)if(a.hasOwnProperty(s)&&(m=a[s],m!=null))switch(s){case"value":c=m;break;case"defaultValue":A=m;break;case"multiple":o=m;default:Le(e,t,s,m,a,null)}t=c,a=A,e.multiple=!!o,t!=null?Vi(e,!!o,t,!1):a!=null&&Vi(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),c=s=o=null;for(A in a)if(a.hasOwnProperty(A)&&(m=a[A],m!=null))switch(A){case"value":o=m;break;case"defaultValue":s=m;break;case"children":c=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(l(91));break;default:Le(e,t,A,m,a,null)}jS(e,o,s,c);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(o=a[g],o!=null))switch(g){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Le(e,t,g,o,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<To.length;o++)Ee(To[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(o=a[D],o!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Le(e,t,D,o,a,null)}return;default:if(_s(t)){for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!==void 0&&Bc(e,t,F,o,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(o=a[m],o!=null&&Le(e,t,m,o,a,null))}function kC(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,A=null,m=null,g=null,D=null,F=null;for(G in a){var w=a[G];if(a.hasOwnProperty(G)&&w!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":g=w;default:o.hasOwnProperty(G)||Le(e,t,G,null,o,w)}}for(var H in o){var G=o[H];if(w=a[H],o.hasOwnProperty(H)&&(G!=null||w!=null))switch(H){case"type":c=G;break;case"name":s=G;break;case"checked":D=G;break;case"defaultChecked":F=G;break;case"value":A=G;break;case"defaultValue":m=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,t));break;default:G!==w&&Le(e,t,H,G,o,w)}}Ys(e,A,m,g,D,F,c,s);return;case"select":G=A=m=H=null;for(c in a)if(g=a[c],a.hasOwnProperty(c)&&g!=null)switch(c){case"value":break;case"multiple":G=g;default:o.hasOwnProperty(c)||Le(e,t,c,null,o,g)}for(s in o)if(c=o[s],g=a[s],o.hasOwnProperty(s)&&(c!=null||g!=null))switch(s){case"value":H=c;break;case"defaultValue":m=c;break;case"multiple":A=c;default:c!==g&&Le(e,t,s,c,o,g)}t=m,a=A,o=G,H!=null?Vi(e,!!a,H,!1):!!o!=!!a&&(t!=null?Vi(e,!!a,t,!0):Vi(e,!!a,a?[]:"",!1));return;case"textarea":G=H=null;for(m in a)if(s=a[m],a.hasOwnProperty(m)&&s!=null&&!o.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Le(e,t,m,null,o,s)}for(A in o)if(s=o[A],c=a[A],o.hasOwnProperty(A)&&(s!=null||c!=null))switch(A){case"value":H=s;break;case"defaultValue":G=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==c&&Le(e,t,A,s,o,c)}_S(e,H,G);return;case"option":for(var Z in a)if(H=a[Z],a.hasOwnProperty(Z)&&H!=null&&!o.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:Le(e,t,Z,null,o,H)}for(g in o)if(H=o[g],G=a[g],o.hasOwnProperty(g)&&H!==G&&(H!=null||G!=null))switch(g){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Le(e,t,g,H,o,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)H=a[ie],a.hasOwnProperty(ie)&&H!=null&&!o.hasOwnProperty(ie)&&Le(e,t,ie,null,o,H);for(D in o)if(H=o[D],G=a[D],o.hasOwnProperty(D)&&H!==G&&(H!=null||G!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(l(137,t));break;default:Le(e,t,D,H,o,G)}return;default:if(_s(t)){for(var Me in a)H=a[Me],a.hasOwnProperty(Me)&&H!==void 0&&!o.hasOwnProperty(Me)&&Bc(e,t,Me,void 0,o,H);for(F in o)H=o[F],G=a[F],!o.hasOwnProperty(F)||H===G||H===void 0&&G===void 0||Bc(e,t,F,H,o,G);return}}for(var L in a)H=a[L],a.hasOwnProperty(L)&&H!=null&&!o.hasOwnProperty(L)&&Le(e,t,L,null,o,H);for(w in o)H=o[w],G=a[w],!o.hasOwnProperty(w)||H===G||H==null&&G==null||Le(e,t,w,H,o,G)}function XE(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wC(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var s=a[o],c=s.transferSize,A=s.initiatorType,m=s.duration;if(c&&m&&XE(A)){for(A=0,m=s.responseEnd,o+=1;o<a.length;o++){var g=a[o],D=g.startTime;if(D>m)break;var F=g.transferSize,w=g.initiatorType;F&&XE(w)&&(g=g.responseEnd,A+=F*(g<m?1:(m-D)/(g-D)))}if(--o,t+=8*(c+A)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vc=null,Gc=null;function Xr(e){return e.nodeType===9?e:e.ownerDocument}function qE(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function QE(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fc=null;function xC(){var e=window.event;return e&&e.type==="popstate"?e===Fc?!1:(Fc=e,!0):(Fc=null,!1)}var $E=typeof setTimeout=="function"?setTimeout:void 0,VC=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,WC=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(e){return eh.resolve(null).then(e).catch(KC)}:$E;function KC(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function th(e,t){var a=t,o=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(s),Cn(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ro(a);for(var c=a.firstChild;c;){var A=c.nextSibling,m=c.nodeName;c[bn]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=A}}else a==="body"&&Ro(e.ownerDocument.body);a=s}while(a);Cn(t)}function ah(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Uc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uc(a),Ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function YC(e,t,a,o){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[bn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function zC(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function ih(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function kc(e){return e.data==="$?"||e.data==="$~"}function wc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _C(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xc=null;function nh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function oh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function rh(e,t,a){switch(t=Xr(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Ro(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ws(e)}var _t=new Map,sh=new Set;function qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Na=z.d;z.d={f:jC,r:JC,D:ZC,C:XC,L:qC,m:QC,X:eg,S:$C,M:tg};function jC(){var e=Na.f(),t=Wr();return e||t}function JC(e){var t=ki(e);t!==null&&t.tag===5&&t.type==="form"?OA(t):Na.r(e)}var mn=typeof document>"u"?null:document;function lh(e,t,a){var o=mn;if(o&&typeof t=="string"&&t){var s=kt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),sh.has(s)||(sh.add(s),e={rel:e,crossOrigin:a,href:t},o.querySelector(s)===null&&(t=o.createElement("link"),it(t,"link",e),qe(t),o.head.appendChild(t)))}}function ZC(e){Na.D(e),lh("dns-prefetch",e,null)}function XC(e,t){Na.C(e,t),lh("preconnect",e,t)}function qC(e,t,a){Na.L(e,t,a);var o=mn;if(o&&e&&t){var s='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+kt(a.imageSizes)+'"]')):s+='[href="'+kt(e)+'"]';var c=s;switch(t){case"style":c=Rn(e);break;case"script":c=fn(e)}_t.has(c)||(e=R({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),_t.set(c,e),o.querySelector(s)!==null||t==="style"&&o.querySelector(fo(c))||t==="script"&&o.querySelector(Co(c))||(t=o.createElement("link"),it(t,"link",e),qe(t),o.head.appendChild(t)))}}function QC(e,t){Na.m(e,t);var a=mn;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(e)+'"]',c=s;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=fn(e)}if(!_t.has(c)&&(e=R({rel:"modulepreload",href:e},t),_t.set(c,e),a.querySelector(s)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(c)))return}o=a.createElement("link"),it(o,"link",e),qe(o),a.head.appendChild(o)}}}function $C(e,t,a){Na.S(e,t,a);var o=mn;if(o&&e){var s=wi(o).hoistableStyles,c=Rn(e);t=t||"default";var A=s.get(c);if(!A){var m={loading:0,preload:null};if(A=o.querySelector(fo(c)))m.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},a),(a=_t.get(c))&&Vc(e,a);var g=A=o.createElement("link");qe(g),it(g,"link",e),g._p=new Promise(function(D,F){g.onload=D,g.onerror=F}),g.addEventListener("load",function(){m.loading|=1}),g.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Qr(A,t,o)}A={type:"stylesheet",instance:A,count:1,state:m},s.set(c,A)}}}function eg(e,t){Na.X(e,t);var a=mn;if(a&&e){var o=wi(a).hoistableScripts,s=fn(e),c=o.get(s);c||(c=a.querySelector(Co(s)),c||(e=R({src:e,async:!0},t),(t=_t.get(s))&&Wc(e,t),c=a.createElement("script"),qe(c),it(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},o.set(s,c))}}function tg(e,t){Na.M(e,t);var a=mn;if(a&&e){var o=wi(a).hoistableScripts,s=fn(e),c=o.get(s);c||(c=a.querySelector(Co(s)),c||(e=R({src:e,async:!0,type:"module"},t),(t=_t.get(s))&&Wc(e,t),c=a.createElement("script"),qe(c),it(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},o.set(s,c))}}function ch(e,t,a,o){var s=(s=te.current)?qr(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Rn(a.href),a=wi(s).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Rn(a.href);var c=wi(s).hoistableStyles,A=c.get(e);if(A||(s=s.ownerDocument||s,A={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,A),(c=s.querySelector(fo(e)))&&!c._p&&(A.instance=c,A.state.loading=5),_t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_t.set(e,a),c||ag(s,e,a,A.state))),t&&o===null)throw Error(l(528,""));return A}if(t&&o!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=fn(a),a=wi(s).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Rn(e){return'href="'+kt(e)+'"'}function fo(e){return'link[rel="stylesheet"]['+e+"]"}function uh(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function ag(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),it(t,"link",a),qe(t),e.head.appendChild(t))}function fn(e){return'[src="'+kt(e)+'"]'}function Co(e){return"script[async]"+e}function Sh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return t.instance=o,qe(o),o;var s=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),qe(o),it(o,"style",s),Qr(o,a.precedence,e),t.instance=o;case"stylesheet":s=Rn(a.href);var c=e.querySelector(fo(s));if(c)return t.state.loading|=4,t.instance=c,qe(c),c;o=uh(a),(s=_t.get(s))&&Vc(o,s),c=(e.ownerDocument||e).createElement("link"),qe(c);var A=c;return A._p=new Promise(function(m,g){A.onload=m,A.onerror=g}),it(c,"link",o),t.state.loading|=4,Qr(c,a.precedence,e),t.instance=c;case"script":return c=fn(a.src),(s=e.querySelector(Co(c)))?(t.instance=s,qe(s),s):(o=a,(s=_t.get(c))&&(o=R({},a),Wc(o,s)),e=e.ownerDocument||e,s=e.createElement("script"),qe(s),it(s,"link",o),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Qr(o,a.precedence,e));return t.instance}function Qr(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=o.length?o[o.length-1]:null,c=s,A=0;A<o.length;A++){var m=o[A];if(m.dataset.precedence===t)c=m;else if(c!==s)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $r=null;function dh(e,t,a){if($r===null){var o=new Map,s=$r=new Map;s.set(a,o)}else s=$r,o=s.get(a),o||(o=new Map,s.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var c=a[s];if(!(c[bn]||c[$e]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var A=c.getAttribute(t)||"";A=e+A;var m=o.get(A);m?m.push(c):o.set(A,[c])}}return o}function Ah(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function ig(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Eh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ng(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=Rn(o.href),c=t.querySelector(fo(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=es.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=c,qe(c);return}c=t.ownerDocument||t,o=uh(o),(s=_t.get(s))&&Vc(o,s),c=c.createElement("link"),qe(c);var A=c;A._p=new Promise(function(m,g){A.onload=m,A.onerror=g}),it(c,"link",o),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=es.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Kc=0;function og(e,t){return e.stylesheets&&e.count===0&&as(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&as(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Kc===0&&(Kc=62500*wC());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&as(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Kc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(s)}}:null}function es(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)as(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ts=null;function as(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ts=new Map,t.forEach(rg,e),ts=null,es.call(e))}function rg(e,t){if(!(t.state.loading&4)){var a=ts.get(e);if(a)var o=a.get(null);else{a=new Map,ts.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var A=s[c];(A.nodeName==="LINK"||A.getAttribute("media")!=="not all")&&(a.set(A.dataset.precedence,A),o=A)}o&&a.set(null,o)}s=t.instance,A=s.getAttribute("data-precedence"),c=a.get(A)||o,c===o&&a.set(null,s),a.set(A,s),this.count++,o=es.bind(this),s.addEventListener("load",o),s.addEventListener("error",o),c?c.parentNode.insertBefore(s,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var go={$$typeof:x,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function sg(e,t,a,o,s,c,A,m,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ks(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.hiddenUpdates=ks(null),this.identifierPrefix=o,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=A,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function hh(e,t,a,o,s,c,A,m,g,D,F,w){return e=new sg(e,t,a,A,g,D,F,w,m),t=1,c===!0&&(t|=24),c=Mt(3,null,null,t),e.current=c,c.stateNode=e,t=pl(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:o,isDehydrated:a,cache:t},Il(c),e}function Th(e){return e?(e=Zi,e):Zi}function mh(e,t,a,o,s,c){s=Th(s),o.context===null?o.context=s:o.pendingContext=s,o=ka(t),o.payload={element:a},c=c===void 0?null:c,c!==null&&(o.callback=c),a=wa(e,o,t),a!==null&&(gt(a,e,t),Qn(a,e,t))}function Rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Yc(e,t){Rh(e,t),(e=e.alternate)&&Rh(e,t)}function fh(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&gt(t,e,67108864),Yc(e,67108864)}}function Ch(e){if(e.tag===13||e.tag===31){var t=vt();t=ws(t);var a=di(e,t);a!==null&&gt(a,e,t),Yc(e,t)}}var is=!0;function lg(e,t,a,o){var s=U.T;U.T=null;var c=z.p;try{z.p=2,zc(e,t,a,o)}finally{z.p=c,U.T=s}}function cg(e,t,a,o){var s=U.T;U.T=null;var c=z.p;try{z.p=8,zc(e,t,a,o)}finally{z.p=c,U.T=s}}function zc(e,t,a,o){if(is){var s=_c(o);if(s===null)Hc(e,t,o,ns,a),ph(e,o);else if(Sg(s,e,t,a,o))o.stopPropagation();else if(ph(e,o),t&4&&-1<ug.indexOf(e)){for(;s!==null;){var c=ki(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var A=si(c.pendingLanes);if(A!==0){var m=c;for(m.pendingLanes|=2,m.entangledLanes|=2;A;){var g=1<<31-It(A);m.entanglements[1]|=g,A&=~g}na(c),(pe&6)===0&&(xr=Ot()+500,ho(0))}}break;case 31:case 13:m=di(c,2),m!==null&&gt(m,c,2),Wr(),Yc(c,2)}if(c=_c(o),c===null&&Hc(e,t,o,ns,a),c===s)break;s=c}s!==null&&o.stopPropagation()}else Hc(e,t,o,null,a)}}function _c(e){return e=Js(e),jc(e)}var ns=null;function jc(e){if(ns=null,e=Ui(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=S(t),e!==null)return e;e=null}else if(a===31){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ns=e,null}function gh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(JR()){case PS:return 2;case DS:return 8;case jo:case ZR:return 32;case HS:return 268435456;default:return 32}default:return 32}}var Jc=!1,Xa=null,qa=null,Qa=null,po=new Map,yo=new Map,$a=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ph(e,t){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(t.pointerId)}}function Oo(e,t,a,o,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:c,targetContainers:[s]},t!==null&&(t=ki(t),t!==null&&fh(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Sg(e,t,a,o,s){switch(t){case"focusin":return Xa=Oo(Xa,e,t,a,o,s),!0;case"dragenter":return qa=Oo(qa,e,t,a,o,s),!0;case"mouseover":return Qa=Oo(Qa,e,t,a,o,s),!0;case"pointerover":var c=s.pointerId;return po.set(c,Oo(po.get(c)||null,e,t,a,o,s)),!0;case"gotpointercapture":return c=s.pointerId,yo.set(c,Oo(yo.get(c)||null,e,t,a,o,s)),!0}return!1}function yh(e){var t=Ui(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=S(a),t!==null){e.blockedOn=t,US(e.priority,function(){Ch(a)});return}}else if(t===31){if(t=E(a),t!==null){e.blockedOn=t,US(e.priority,function(){Ch(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=_c(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);js=o,a.target.dispatchEvent(o),js=null}else return t=ki(a),t!==null&&fh(t),e.blockedOn=a,!1;t.shift()}return!0}function Oh(e,t,a){os(e)&&a.delete(t)}function dg(){Jc=!1,Xa!==null&&os(Xa)&&(Xa=null),qa!==null&&os(qa)&&(qa=null),Qa!==null&&os(Qa)&&(Qa=null),po.forEach(Oh),yo.forEach(Oh)}function rs(e,t){e.blockedOn===t&&(e.blockedOn=null,Jc||(Jc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,dg)))}var ss=null;function Nh(e){ss!==e&&(ss=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ss===e&&(ss=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],s=e[t+2];if(typeof o!="function"){if(jc(o||a)===null)continue;break}var c=ki(a);c!==null&&(e.splice(t,3),t-=3,_l(c,{pending:!0,data:s,method:a.method,action:o},o,s))}}))}function Cn(e){function t(g){return rs(g,e)}Xa!==null&&rs(Xa,e),qa!==null&&rs(qa,e),Qa!==null&&rs(Qa,e),po.forEach(t),yo.forEach(t);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)yh(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var s=a[o],c=a[o+1],A=s[ht]||null;if(typeof c=="function")A||Nh(a);else if(A){var m=null;if(c&&c.hasAttribute("formAction")){if(s=c,A=c[ht]||null)m=A.formAction;else if(jc(s)!==null)continue}else m=A.action;typeof m=="function"?a[o+1]=m:(a.splice(o,3),o-=3),Nh(a)}}}function Ih(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(A){return s=A})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Zc(e){this._internalRoot=e}ls.prototype.render=Zc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,o=vt();mh(a,o,e,t,null,null)},ls.prototype.unmount=Zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mh(e.current,2,null,e,null,null),Wr(),t[Fi]=null}};function ls(e){this._internalRoot=e}ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=FS();e={blockedOn:null,target:e,priority:t};for(var a=0;a<$a.length&&t!==0&&t<$a[a].priority;a++);$a.splice(a,0,e),a===0&&yh(e)}};var Lh=n.version;if(Lh!=="19.2.4")throw Error(l(527,Lh,"19.2.4"));z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=h(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var Ag={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{Bn=cs.inject(Ag),Nt=cs}catch{}}return Io.createRoot=function(e,t){if(!u(e))throw Error(l(299));var a=!1,o="",s=GA,c=bA,A=FA;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(A=t.onRecoverableError)),t=hh(e,1,!1,null,null,a,o,null,s,c,A,Ih),e[Fi]=t.current,Dc(e),new Zc(t)},Io.hydrateRoot=function(e,t,a){if(!u(e))throw Error(l(299));var o=!1,s="",c=GA,A=bA,m=FA,g=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(A=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=hh(e,1,!0,t,a??null,o,s,g,c,A,m,Ih),t.context=Th(null),a=t.current,o=vt(),o=ws(o),s=ka(o),s.callback=null,wa(a,s,o),a=o,t.current.lanes=a,Gn(t,a),na(t),e[Fi]=t.current,Dc(e),new ls(t)},Io.version="19.2.4",Io}var Uh;function yg(){if(Uh)return Qc.exports;Uh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),Qc.exports=pg(),Qc.exports}var Og=yg();const Ng=Sm(Og),Ig="modulepreload",Lg=function(i){return"/"+i},kh={},Pa=function(n,r,l){let u=Promise.resolve();if(r&&r.length>0){let S=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const E=document.querySelector("meta[property=csp-nonce]"),T=(E==null?void 0:E.nonce)||(E==null?void 0:E.getAttribute("nonce"));u=S(r.map(h=>{if(h=Lg(h),h in kh)return;kh[h]=!0;const f=h.endsWith(".css"),R=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${R}`))return;const C=document.createElement("link");if(C.rel=f?"stylesheet":Ig,f||(C.as="script"),C.crossOrigin="",C.href=h,T&&C.setAttribute("nonce",T),document.head.appendChild(C),f)return new Promise((I,v)=>{C.addEventListener("load",I),C.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})}))}function d(S){const E=new Event("vite:preloadError",{cancelable:!0});if(E.payload=S,window.dispatchEvent(E),!E.defaultPrevented)throw S}return u.then(S=>{for(const E of S||[])E.status==="rejected"&&d(E.reason);return n().catch(d)})};var oe=(i=>(i.MENU="MENU",i.CLASSIC="CLASSIC",i.LEVEL_THEMED="LEVEL_THEMED",i.LEVEL_EMOJI="LEVEL_EMOJI",i.LEVEL_MIND_MATCH="LEVEL_MIND_MATCH",i.LEVEL_SYNONYMS="LEVEL_SYNONYMS",i.LEVEL_EXPANSION="LEVEL_EXPANSION",i.LEVEL_CASCADE="LEVEL_CASCADE",i.HIDDEN="HIDDEN",i.LEVEL_FILTER="LEVEL_FILTER",i))(oe||{});const Mg=32,Pg=70,Dg=["bg-neon-red shadow-[0_0_15px_#FF073A,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-neon-orange shadow-[0_0_15px_#FF5F1F,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-neon-yellow shadow-[0_0_15px_#F9FF00,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-neon-lime shadow-[0_0_15px_#39FF14,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-[#00FFFF] shadow-[0_0_15px_#00FFFF,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-[#FF00FF] shadow-[0_0_15px_#FF00FF,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-[#A020F0] shadow-[0_0_15px_#A020F0,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-neon-sky-blue shadow-[0_0_15px_#00BFFF,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-neon-blue shadow-[0_0_15px_#0066FF,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-neon-violet shadow-[0_0_15px_#B026FF,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-neon-purple shadow-[0_0_15px_#D400FF,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-neon-magenta shadow-[0_0_15px_#FF00FF,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-neon-pink shadow-[0_0_15px_#FF1FBF,inset_0_0_15px_rgba(255,255,255,0.95)] border-white","bg-neon-rose shadow-[0_0_15_#FF0055,inset_0_0_15px_rgba(255,255,255,0.95)] border-white"],WL=[{name:"NEON ARCADE",gradient:"from-black to-zinc-900",solvedColors:Dg}],wh=["Nature","Animals","Astronomy","Food","History","Geography","Religion","Technology","Science","Music","Literature","Movies","Television","Economics","Politics","Lifestyle","Gaming","Cars","Sports","Art","Mythology"],xh=[{name:"NOVICE",min:0},{name:"SEMI-PRO",min:1e4},{name:"PRO",min:25e3},{name:"VETERAN",min:5e4},{name:"ELITE",min:1e5},{name:"MASTER",min:25e4},{name:"GRANDMASTER",min:5e5},{name:"LEGEND",min:1e6}],nt="CLASSIC",ot="LEVEL_EMOJI",rt="LEVEL_MIND_MATCH",st="LEVEL_SYNONYMS",ut="LEVEL_THEMED",St="LEVEL_EXPANSION",Hg=[nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st,St,ut,nt,ot,rt,st],sa={LEVEL:"wpm_level",TUTORIAL_SEEN:"wpm_tutorial_seen_v2",TUTORIAL_SEEN_L2:"wpm_tutorial_seen_l2",TUTORIAL_SEEN_L5:"wpm_tutorial_seen_l5",GAME_STATS:"wpm_game_stats",DAILY_HISTORY:"wpm_daily_history",ENABLED_MODES:"wpm_enabled_modes",CUSTOM_POOL:"wpm_custom_pool"},Bg=()=>{try{const i=localStorage.getItem(sa.LEVEL);if(!i)return 1;const n=parseInt(i,10);return isNaN(n)?1:n}catch{return 1}},vg=i=>{localStorage.setItem(sa.LEVEL,i.toString())},au=[oe.CLASSIC,oe.LEVEL_EMOJI,oe.LEVEL_SYNONYMS,oe.LEVEL_MIND_MATCH,oe.LEVEL_THEMED,oe.LEVEL_EXPANSION],Gg=()=>{try{const i=localStorage.getItem(sa.ENABLED_MODES);if(!i)return au;const n=JSON.parse(i);return Array.isArray(n)&&n.length>0?n:au}catch{return au}},bg=i=>{localStorage.setItem(sa.ENABLED_MODES,JSON.stringify(i))},Fg=()=>{try{const i=localStorage.getItem(sa.CUSTOM_POOL);if(!i)return[];const n=JSON.parse(i);return Array.isArray(n)?n:[]}catch{return[]}},Ug=i=>{localStorage.setItem(sa.CUSTOM_POOL,JSON.stringify(i))},kg=()=>!!localStorage.getItem(sa.TUTORIAL_SEEN),wg=()=>{localStorage.setItem(sa.TUTORIAL_SEEN,"true")},iu={rowsSolved:0,levelsCompleted:0,totalTimeMs:0,hintsUsed:0,hintsRefused:0,totalMoves:0,solvedCategoryIds:[],solvedWords:[],totalScore:0,solvedBroadCategories:[],totalStars:0,categoryStarProgress:{}},Di=()=>{try{const i=localStorage.getItem(sa.GAME_STATS);if(!i)return iu;const n=JSON.parse(i);return{...iu,...n,solvedWords:Array.isArray(n.solvedWords)?n.solvedWords:[],solvedBroadCategories:Array.isArray(n.solvedBroadCategories)?n.solvedBroadCategories:[],categoryStarProgress:n.categoryStarProgress||{}}}catch{return iu}},xg=i=>{try{const n=Di();let r=n.solvedCategoryIds;if(i.solvedCategoryIds){const E=new Set([...n.solvedCategoryIds,...i.solvedCategoryIds]);r=Array.from(E)}let l=n.solvedWords;if(i.solvedWords){const E=new Set([...n.solvedWords,...i.solvedWords]);l=Array.from(E)}let u=n.solvedBroadCategories;if(i.solvedBroadCategories){const E=new Set([...n.solvedBroadCategories,...i.solvedBroadCategories]);u=Array.from(E)}const d={...n.categoryStarProgress};i.lastLevelStars===3&&i.lastLevelDifficulty===3&&i.lastLevelBroadCategories&&i.lastLevelBroadCategories.forEach(E=>{const T=d[E]||{rating3ThreeStarCount:0};d[E]={rating3ThreeStarCount:T.rating3ThreeStarCount+1}});const S={rowsSolved:n.rowsSolved+(i.rowsSolved||0),levelsCompleted:n.levelsCompleted+(i.levelsCompleted||0),totalTimeMs:n.totalTimeMs+(i.totalTimeMs||0),hintsUsed:n.hintsUsed+(i.hintsUsed||0),hintsRefused:n.hintsRefused+(i.hintsRefused||0),totalMoves:n.totalMoves+(i.totalMoves||0),solvedCategoryIds:r,solvedWords:l,totalScore:n.totalScore+(i.totalScore||0),solvedBroadCategories:u,totalStars:n.totalStars+(i.totalStars||0),categoryStarProgress:d};localStorage.setItem(sa.GAME_STATS,JSON.stringify(S))}catch(n){console.error("Failed to update stats",n)}},Vg=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10,word11,word12,word13,word14,word15
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
28,Herbs Fresh,bay,catnip,chervil,chives,cilantro,curry leaf,hyssop,lemon balm,lovage,mint,sorrel,verbena,basil,chive,dill,fennel,marjoram,oregano,parsley,rosemary,sage,savory,tarragon,thyme
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
399,Church Actions,Preach,Pray,Baptize,Confess,Offer,Chant,Sing,Fast,Read Scripture`,Wg=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10,word11,word12,word13,word14,word15
401,Church Music Instruments,Organ,Harp,Flute,Lute,Horn,Bell,Trumpet,Violin,Drum,3,Music
402,Christian Celebrations,Mass,Service,Ceremony,Sacrament,Communion,Baptism,Wedding,Funeral,Confession,3,Religion
403,Spiritual Concepts,Grace,Faith,Salvation,Redemption,Hope,Charity,Sin,Forgiveness,3,Religion
404,Religious Buildings Interiors,Narthex,Sanctuary,Nave,Chancel,Transept,Choir Loft,Font,Pulpit,Ambulatory,5,Religion
405,Church Services Types,Mass,Liturgy,Vespers,Matins,Compline,Worship,Benediction,Procession,Litany,5,Religion
406,Key Church Objects,Altar,Chalice,Paten,Ciborium,Crucifix,Candle Holder,Tabernacle,Bell,Missal,5,Religion
407,Clerical Titles,Deacon,Priest,Bishop,Cardinal,Pope,Monk,Nun,Pastor,Chaplain,3,Religion
408,Sacraments,Baptism,Communion,Confirmation,Marriage,Ordination,Confession,Eucharist,Wafer,3,Religion
409,Church Architecture Elements,Aisle,Nave,Apse,Vault,Transept,Choir,Clerestory,Narthex,Buttress,5,Religion
410,Religious Texts,Scripture,Bible,Gospel,Epistle,Psalter,Lectionary,Testament,Vulgate,Commentary,3,Religion
411,Church Roles and Titles,Priest,Bishop,Deacon,Cardinal,Pope,Monk,Nun,Pastor,Minister,3,Religion
412,Church Ritual Objects,Censer,Chalice,Ciborium,Paten,Thurible,Candle,Cross,Altar Cloth,5,Religion
413,Church Music Terms,Hymn,Anthem,Psalm,Chant,Organ,Liturgy,Choir,Caroling,Motet,3,Music
414,Worship Actions,Pray,Sing,Preach,Benedict,Confess,Baptize,Read Scripture,Fast,Offer,3,Religion
415,Church Festivals and Seasons,Advent,Lent,Easter,Christmas,Pentecost,Epiphany,Good Friday,Ascension Day,All Saints Day,3,Religion
416,Religious Attire,Alb,Cassock,Chasuble,Stole,Surplice,Cope,Mitre,Vestments,Veil,5,Religion
417,Church Interior Features,Sanctuary,Nave,Chancel,Choir Loft,Pulpit,Ambry,Font,Narthex,Transept,5,Religion
418,Christian Denominations,Orthodox,Catholic,Protestant,Lutheran,Methodist,Baptist,Anglican,Presbyterian,Evangelical,3,Religion
419,Spiritual Values,Faith,Hope,Charity,Grace,Love,Salvation,Redemption,Forgiveness,Repentance,3,Religion
420,Church Bells and Instruments,Bell,Organ,Drum,Horn,Trumpet,Harp,Flute,Lute,Violin,3,Music
421,Religious Texts and Books,Bible,Gospel,Epistle,Old Testament,New Testament,Psalter,Vulgate,Lectionary,Apocrypha,3,Religion
422,Church Building Types,Cathedral,Basilica,Chapel,Abbey,Monastery,Parish,Rectory,Minster,Cloister,3,Religion
423,Christian Celebrations and Observances,Mass,Communion,Baptism,Confession,Worship,Fast,Liturgy,Procession,Benediction,3,Religion
424,Classic Cartoon Characters,Mickey Mouse,Donald Duck,Bugs Bunny,Daffy Duck,Popeye,Scooby Doo,Tom,Jerry,Felix,1,Television
425,90s Kids Shows,Power Rangers,Kenan and Kel,Hey Arnold,Doug,Rugrats,Fresh Prince,Goosebumps,3,Television
426,Puppet Shows,Fraggle Rock,The Muppet Show,The Magic Garden,Pinwheel,Salty's Lighthouse,Reading Rainbow,3,Television
427,Educational Kids Series,Reading Rainbow,Schoolhouse Rock,Cyberchase,Blues Clues,Arthur,Wild Kratts,3,Television
428,Nickelodeon Favorites,Dora Explorer,Blues Clues,Fairly OddParents,Rugrats,Hey Arnold,Paw Patrol,Loud House,1,Television
429,Animated Disney Shows,Kim Possible,Darkwing Duck,Recess,Lilo and Stitch,Proud Family,Gargoyles,TaleSpin,Gummi Bears,House of Mouse,3,Television
430,Children’S Sitcoms,Full House,Even Stevens,Drake and Josh,Hannah Montana,Amanda Show,Lizzie McGuire,3,Television
431,Classic Kids Game Shows,Double Dare,Nick Arcade,Figure It Out,BrainSurge,Fun House,Wild and Crazy Kids,3,Television
432,Animal Characters,Arthur,Garfield,Snoopy,Pocoyo,Paddington,Bluey,Clifford,Curious George,Peppa Pig,1,Television
433,Fantasy Children’S Series,Care Bears,Smurfs,My Little Pony,Banana Splits,Fraggle Rock,Captain Planet,He-Man,Thundercats,3,Television
434,Children’S Science Shows,Beakman's World,Magic School Bus,Sid the Science Kid,Brain Games,Odd Squad,3,Television
435,Storybook Inspired,Peter Rabbit,Charlottes Web,Curious George,Paddington Bear,Corduroy,Little Bear,3,Literature
436,Classic Animated Films,Fantasia,Bambi,Cinderella,Peter Pan,Pinocchio,Jungle Book,Lion King,1,Movies
437,PBS Kids Shows,Dragonfly TV,Cyberchase,Kratts Creatures,Martha Speaks,Wild Kratts,WordGirl,Arthur,3,Television
438,Children’S Holiday Specials,Charlie Brown Christmas,Snowman,Polar Express,1,Television
439,Classic Educational Cartoon Series,Schoolhouse Rock,Letter People,McGee and Me,Reading Rainbow,American Tail,Libertys Kids,Magic School Bus,3,Television
440,Superhero Kids Shows,Teen Titans,Static Shock,Kid Justice,Kim Possible,Generator Rex,Big Hero 6,Pokemon,Power Rangers,3,Television
441,Adventure Kids Shows,Kid vs Kat,Wild Thornberrys,Secret Saturdays,Recess,Gravity Falls,Pirate Islands,3,Television
442,Classic Children’S Book Adaptations,Berenstain Bears,Franklin,Little Princess,Paddington Bear,Corduroy,Pippi Longstocking,Magic Tree House,3,Literature
443,Humorous Kids Shows,Animaniacs,Ed Edd n Eddy,Shaun the Sheep,3,Television
444,Science Fiction Kids Shows,Jetsons,Futurama,Code Lyoko,Teenage Robot,ReBoot,Inspector Gadget,Ben 10,Galaxy Rangers,Powerpuff Girls,3,Television
445,Mystery and Detective Shows,Hardy Boys,Nancy Drew,Enid Blyton,Detective Conan,Scooby Doo,Famous Five,Paw Patrol,3,Television
446,Popular Preschool Series,Teletubbies,Baby Einstein,Barney Dinosaur,Dora Explorer,Blues Clues,Peppa Pig,Paw Patrol,1,Television
447,Musical Kids Shows,Wiggles,LazyTown,Hi-5,Kuu Kuu Harajuku,Big Block Singsong,3,Television
448,Classic British Children's TV,Basil Brush,Bagpuss,Danger Mouse,Clangers,Teletubbies,Postman Pat,Fireman Sam,Gordon Gopher,3,Television
449,Animated Series from the 80s,He-Man,Transformers,Thundercats,GI Joe,Silverhawks,Voltron,Inspector Gadget,DuckTales,3,Television
450,Animal Led Shows,Franklin Turtle,Wild Kratts,Bluey,Postman Pat,Peppa Pig,Curious George,Garfield,1,Television
451,Seasonal and Nature Shows,Jack Frost,Snowman,Nature Cat,Wabbit Wampage,Martha Speaks,Rescue Bots,3,Television
452,Fantasy Adventure Series,Smurfs,Magic School Bus,Fraggle Rock,Care Bears,My Little Pony,Dragon Tales,Arthur,Littlest Pet Shop,3,Television
453,Classic Animated TV Girls,Totally Spies,Daria,Proud Family,Kim Possible,Carmen Sandiego,She-Ra,3,Television
454,Animal Sidekick Characters,Scooby Doo,Blue,Clifford,Garfield,Porky Pig,Fievel,Mushu,Ren,Stimpy,1,Television
455,Kids Nature and Science,Wild Kratts,Magic School Bus,Octonauts,Beakman's World,Reading Rainbow,Dinosaur Train,3,Television
456,Classic Animated Musical Series,Little Mermaid,Gargoyles,Tinker Bell,Aladdin,Jungle Cubs,Pocahontas,Lion Guard,Tangled,3,Television
457,Board and Card Game Adaptations,Uno,Twister,Dice World,Pokemon Card Game,3,Gaming
458,TV Shows with Time Travel,Magic School Bus,Dora Explorer,Peg Cat,Time Warp Trio,Life with Louie,3,Television
459,Kids Supernatural Series,Goosebumps,Are You Afraid Dark,Danny Phantom,Fairly OddParents,Haunted Hathaways,3,Television
460,Animated Science Fiction Series,Voltron,Galaxy Rangers,Reboot,Ulysses 31,Futurama,Kid Cosmic,Rush Force,Lilo and Stitch,Jetsons,3,Television
461,Popular Educational Shows,Reading Rainbow,Blues Clues,Magic School Bus,Arthur,Between Lions,Cyberchase,Sesame Street,1,Television
462,Friends and Families,Loud House,Rugrats,Fairly OddParents,Hey Arnold,Jetsons,Full House,Big Nate,1,Television
463,Classic Animated Comedies,Animaniacs,Pinky Brain,Ren and Stimpy,Simpsons,Futurama,Family Guy,1,Television
464,Baking Supplies,FLOUR,SUGAR,YEAST,EGGS,BUTTER,BAKING SODA,1,Food
465,Cooking Utensils,SPATULA,WHISK,LADLE,TONGS,GRATER,SIEVE,1,Food
466,Beverages,WATER,JUICE,MILK,SODA,TEA,COFFEE,1,Food
467,Branches of Biology,ZOOLOGY,BOTANY,GENETICS,ECOLOGY,MICROBIOLOGY,ANATOMY,3,Science
468,The Solar System,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN,1,Science
469,Famous Scientists,EINSTEIN,NEWTON,CURIE,GALILEO,DARWIN,TESLA,3,Science
470,States of Matter,SOLID,LIQUID,GAS,PLASMA,CONDENSATE,3,Science
471,Chemical Elements,HYDROGEN,OXYGEN,CARBON,IRON,GOLD,SILVER,3,Science
472,Famous Composers,BACH,BEETHOVEN,MOZART,CHOPIN,VIVALDI,TCHAIKOVSKY,3,Music
473,Music Terms,TEMPO,MELODY,HARMONY,RHYTHM,CHORD,VERSE,3,Music
474,Record Labels,MOTOWN,DEF JAM,ATLANTIC,INTERSCOPE,COLUMBIA,CAPITOL,3,Music
475,Countries in Asia,CHINA,INDIA,JAPAN,RUSSIA,INDONESIA,THAILAND,1,Geography
476,Famous Rivers,NILE,AMAZON,YANGTZE,MISSISSIPPI,DANUBE,MEKONG,1,Geography
477,Ancient Civilizations,EGYPT,GREECE,ROME,MESOPOTAMIA,INDUS VALLEY,MAYA,3,History
478,World Wars,BLITZKRIEG,D-DAY,PEARL HARBOR,HOLOCAUST,ATOM BOMB,3,History
479,Famous Rulers,CLEOPATRA,JULIUS CAESAR,ALEXANDER,GENGHIS KHAN,ELIZABETH I,NAPOLEON,3,History
480,Painters,DA VINCI,VAN GOGH,PICASSO,REMBRANDT,MONET,DALI,3,Art
481,Whales,blue whale,humpback,orca,sperm whale,beluga,narwhal,gray whale,3,Nature
482,Shells,conch,scallop,oyster,clam,nautilus,cowrie,abalone,3,Nature
483,Coral Reef,clownfish,anemone,coral,sponge,starfish,sea urchin,crab,3,Nature
484,Deep Sea,anglerfish,viperfish,blobfish,gulper eel,isopod,vampire squid,chimera,5,Nature
485,Boats,submarine,yacht,trawler,kayak,canoe,ferry,tugboat,3,Transportation
486,Burgers,big mac,whopper,baconator,slider,cheeseburger,double stack,1,Food
487,Pizza Chains,dominos,pizza hut,papa johns,little caesars,sbarro,godfathers,unos,1,Food
488,Fried Chicken,kfc,popeyes,chick-fil-a,churchs,zaxbys,bojangles,raising canes,1,Food
489,Taco Joints,taco bell,del taco,chipotle,qdoba,moes,baja fresh,taco johns,1,Food
490,Fast Food Sides,fries,onion rings,nuggets,coleslaw,biscuits,hash browns,apple pie,1,Food
491,Drinks,coke,pepsi,sprite,fanta,dr pepper,mountain dew,root beer,1,Food
492,Sci-Fi,star trek,doctor who,x-files,stranger things,mandalorian,firefly,battlestar,3,Television
493,Streaming Services,netflix,hulu,hbo max,disney+,prime video,peacock,apple tv,1,Technology
494,Olympic Events,sprint,swim,gymnastics,judo,archery,fencing,rowing,1,Sports
495,School Furniture,desk,chair,whiteboard,locker,bookshelf,podium,table,chalkboard,1,Education
496,School Rooms,cafeteria,library,gymnasium,principal,nurse,lab,classroom,auditorium,1,Education
497,Art Colors,red,blue,yellow,green,purple,orange,cyan,magenta,1,Art
498,Sculpture,clay,marble,bronze,chisel,kiln,pottery,statue,carving,3,Art
499,Digital Art,pixel,vector,layer,hex,rgb,tablet,stylus,cmyk,3,Art
500,Web Browsers,chrome,firefox,safari,edge,opera,brave,explorer,netscape,1,Technology
501,Domains,.com,.org,.net,.edu,.gov,.io,.co,.uk,3,Technology
502,Internet Terms,wifi,modem,router,server,cloud,link,bandwidth,cache,3,Technology
503,Email,inbox,spam,draft,sent,reply,attach,forward,subject,1,Technology
504,Internet Actions,download,upload,stream,browse,chat,post,click,scroll,1,Technology
505,Shoe Brands,nike,adidas,puma,reebok,vans,converse,jordan,crocs,1,Lifestyle
506,Shoe Types,sneaker,boot,sandal,loafer,heel,flat,slipper,clog,1,Lifestyle
507,Shoe Parts,sole,lace,tongue,heel,toe,eyelet,insole,upper,3,Lifestyle
508,Boots,combat,cowboy,rain,snow,hiking,chelsea,ankle,wellington,3,Lifestyle
509,Heels,stiletto,wedge,kitten,pump,platform,block,cone,spool,3,Lifestyle
510,Shoe Materials,leather,suede,canvas,rubber,mesh,velvet,satin,patent,3,Lifestyle
511,Construction Terms,foundation,insulation,drywall,joist,rafter,cornice,facade,lintel,stucco,mortar,5,Technology
512,Construction Tools,level,trowel,hammer,drill,saw,wrench,pliers,screwdriver,chisel,3,Technology
513,Famous Buildings,eiffel tower,colosseum,taj mahal,empire state,burj khalifa,pantheon,parthenon,louvre,1,Geography
514,Forensic Terms,autopsy,ballistics,fingerprint,toxicology,dna,rigor mortis,lividity,luminol,5,Science
515,Felonies,murder,arson,burglary,robbery,kidnapping,treason,espionage,perjury,3,Politics
516,Civil Penalties,fine,restitution,injunction,damages,seizure,eviction,citation,5,Politics
517,Government Structure,legislative,executive,judicial,congress,senate,parliament,cabinet,ministry,3,Politics
518,Leonardo DiCaprio,titanic,inception,revenant,aviator,departed,romeo juliet,gatsby,1,Movies
519,Tom Cruise,top gun,jerry maguire,rain man,oblivion,mummy,jack reacher,1,Movies
520,NASCAR,daytona,talladega,pit stop,drafting,pace car,stock car,burnout,3,Sports
521,Famous Pirates,blackbeard,kidd,morgan,drake,bonny,rackham,roberts,bellamy,3,History
522,Declaration of Independence,liberty,pursuit,happiness,colonies,king george,jefferson,hancock,adams,revolution,3,History
523,Ben Franklin,kite,key,bifocals,almanac,diplomat,printer,stove,3,History
524,Mark Twain,huck finn,tom sawyer,mississippi,hannibal,steamboat,frog,3,Literature
525,Nicola Tesla,coil,ac current,radio,induction,wardenclyffe,turbine,x-ray,oscillator,3,History
526,Nuclear Weapons,fat man,little boy,tsar bomba,trinity,castle bravo,ivy mike,gadget,demon core,5,History
527,Doomsday,apocalypse,armageddon,rapture,fallout,extinction,cataclysm,judgment day,end times,3,History
528,Batman,joker,robin,alfred,batmobile,gotham,penguin,riddler,two-face,1,Movies
529,Superman,krypton,lois lane,lex luthor,smallville,daily planet,zod,doomsday,clark kent,1,Movies
530,California,los angeles,san francisco,san diego,sacramento,hollywood,yosemite,malibu,napa,1,Geography
531,Japan,tokyo,kyoto,osaka,mt fuji,sushi,anime,samurai,kimono,1,Geography
532,Airports,heathrow,jfk,lax,ohare,dubai,haneda,changi,3,Transportation
533,Airplanes,boeing 747,airbus a380,cessna,concorde,spitfire,dreamliner,blackbird,spirit,3,Transportation
534,Donuts,glazed,jelly,boston cream,sprinkles,cruller,bear claw,long john,1,Food
535,Pastries,croissant,danish,eclair,tart,turnover,strudel,cannoli,baklava,3,Food
536,Cookies,oatmeal,peanut butter,oreo,macaroon,biscotti,shortbread,ginger snap,1,Food
537,Power Tools,drill,saw,sander,grinder,router,nail gun,jigsaw,lathe,impact driver,3,Technology
538,Fasteners,screw,nail,bolt,nut,washer,anchor,rivet,staple,hinge,3,Technology
539,Plumbing,pipe,wrench,plunger,faucet,drain,washer,valve,snake,trap,3,Technology
540,Hospital Staff,doctor,nurse,surgeon,orderly,medic,pharmacist,radiologist,1,Health
541,Hospital Rooms,emergency,icu,maternity,waiting,surgery,recovery,pharmacy,cafeteria,1,Health
542,Hospital Equipment,wheelchair,stretcher,iv drip,scalpel,stethoscope,syringe,monitor,ventilator,3,Health
543,Symptoms,fever,cough,pain,rash,swelling,nausea,dizziness,chills,1,Health
544,Casino Table Games,poker,blackjack,roulette,craps,baccarat,pai gow,war,bridge,sic bo,3,Gaming
545,Slots,reel,jackpot,payline,bonus,scatter,wild,progressive,coin,lever,3,Gaming
546,Casino Slang,whale,pit boss,high roller,comp,dealer,croupier,shill,marker,ante,5,Gaming
547,Casino Destinations,vegas,reno,macau,monte carlo,biloxi,tunica,singapore,3,Gaming
548,Dairy,milk,cheese,butter,yogurt,cream,eggs,sour cream,1,Food
549,Produce,apple,banana,lettuce,carrot,potato,tomato,onion,pepper,1,Food
550,Bakery,bread,cake,muffin,donut,pie,cookie,croissant,1,Food
551,Grocery Aisles,frozen,canned,cereal,baking,spices,pet,cleaning,paper,1,Food
552,Sesame Street,elmo,big bird,oscar,grover,bert,ernie,count,abby,zoe,1,Television
553,The Beatles,john,paul,george,ringo,let it be,hey jude,yesterday,help,1,Music
554,Queen,freddie,brian,roger,john,radio ga ga,under pressure,1,Music
555,David Bowie,heroes,starman,lets dance,space oddity,rebel rebel,changes,fame,3,Music
556,Michael Jackson,thriller,bad,beat it,billie jean,black or white,heal the world,1,Music
557,The Beach Boys,good vibrations,surfin usa,god only knows,kokomo,i get around,barbara ann,help me rhonda,3,Music
558,CCR,proud mary,bad moon rising,fortunate son,down on the corner,green river,travelin band,3,Music
559,South Park,cartman,kenny,kyle,stan,butters,randy,chef,garrison,mackey,timmy,3,Television
560,Oscar Winners,titanic,gladiator,crash,parasite,moonlight,chicago,rocky,patton,amadeus,godfather,3,Movies
561,Kubrick,shining,spartacus,lolita,eyes wide shut,barry lyndon,the killing,5,Movies
562,Fincher,fight club,seven,zodiac,gone girl,panic room,mank,the game,5,Movies
563,Nolan,inception,tenet,memento,insomnia,prestige,interstellar,dunkirk,oppenheimer,3,Movies
564,Nicktoons,rugrats,doug,ren stimpy,spongebob,catdog,hey arnold,invader zim,danny phantom,1,Television
565,Candy,snickers,skittles,twix,kitkat,reeses,starburst,milky way,nerds,smarties,hersheys,1,Food
566,Obsolete Tech,pager,fax machine,floppy disk,vhs,walkman,typewriter,telegram,cassette,beeper,3,Technology
567,Ancient Tech,wheel,plow,loom,sundial,compass,aqueduct,abacus,gunpowder,papyrus,chariot,3,Technology
568,Doctors,surgeon,pediatrist,dentist,ER,oncologist,psychiatrist,1,Health
569,Teachers,professor,tutor,instructor,lecturer,educator,mentor,coach,principal,dean,1,Education
570,Judge,gavel,robe,bench,verdict,ruling,sentence,bailiff,chambers,order,3,Politics
571,Lawyer,attorney,counsel,defense,prosecutor,paralegal,brief,objection,motion,appeal,3,Politics
572,Olde Timey Slang,balderdash,poppycock,flummox,kerfuffle,shenanigans,bamboozle,codswallop,malarkey,skedaddle,5,Language
573,Philosophy,ethics,logic,stoicism,metaphysics,plato,socrates,nietzsche,kant,dualism,5,History
574,Physics,gravity,inertia,velocity,momentum,relativity,photon,friction,optics,magnetism,3,Science
575,Quantum Mechanics,quark,photon,entanglement,double slit,boson,neutrino,antimatter,planck,heisenberg,5,Science
576,Biology,mitosis,genetics,evolution,osmosis,dna,metabolism,ecosystem,parasite,anatomy,3,Science
577,Chemistry,molecule,isotope,catalyst,polymer,oxidation,titration,electron,proton,covalent,3,Science
578,Geography,equator,latitude,longitude,hemisphere,isthmus,peninsula,plateau,tundra,3,Geography
579,PE Class,dodgeball,kickball,gymnasium,whistle,laps,pushups,rope climb,scrimmage,1,Sports
580,Robin Williams Movies,Aladdin,Jumanji,Flubber,Hook,Popeye,Robots,Patch Adams,Mrs Doubtfire,1,Movies
581,Mel Brooks Movies,Blazing Saddles,Spaceballs,The Producers,Men in Tights,Silent Movie,High Anxiety,3,Movies
582,Jim Henson,Kermit,Labyrinth,Dark Crystal,Fraggle Rock,Sesame Street,Muppet Show,The Storyteller,Puppeteer,3,Television
583,The Muppets,Kermit,Miss Piggy,Fozzie Bear,Gonzo,Animal,Swedish Chef,Beaker,Dr Bunsen,Statler,Waldorf,1,Television
584,Alice in Wonderland,Alice,White Rabbit,Cheshire Cat,Mad Hatter,Caterpillar,Dormouse,March Hare,Tweedledee,Tweedledum,1,Literature
585,Types of Makeup,Lipstick,Mascara,Foundation,Eyeliner,Blush,Concealer,Primer,Bronzer,Highlighter,Eyeshadow,3,Lifestyle
586,Cleaning Supplies,Bleach,Ammonia,Windex,Lysol,Detergent,Vinegar,Comet,Degreaser,Soap,Polish,3,Lifestyle
587,Pots and Pans,Skillet,Wok,Saucepan,Dutch Oven,Stockpot,Griddle,Roaster,Frying Pan,Saute Pan,Crepe Pan,3,Food
588,Hot Sauces,Tabasco,Sriracha,Cholula,Franks,Tapatio,Texas Pete,Valentina,Crystal,Truff,Sambar,3,Food
589,Periodic Table,Hydrogen,Helium,Oxygen,Carbon,Nitrogen,Gold,Silver,Iron,Copper,Neon,3,Science
590,Mary Poppins,Mary,Bert,Umbrella,Carpet Bag,Penguins,Kite,Mr Banks,Tuppence,1,Movies
591,Greasy Foods,Pizza,Cheeseburger,French Fries,Fried Chicken,Bacon,Onion Rings,Corn Dog,Chimichanga,Poutine,1,Food
592,Daredevils,Evel Knievel,Houdini,David Blaine,Travis Pastrana,Robbie Knievel,Nik Wallenda,Knoxville,Criss Angel,3,History
593,Fraudsters,Bernie Madoff,Charles Ponzi,Frank Abagnale,Jordan Belfort,Elizabeth Holmes,Anna Delvey,Billy McFarland,Wirecard,5,History
594,1960s TV,Star Trek,Batman,Bewitched,Addams Family,The Munsters,Twilight Zone,The Flintstones,The Jetsons,Gunsmoke,3,Television
595,Billionaires,Elon Musk,Jeff Bezos,Bill Gates,Warren Buffett,Larry Ellison,Oprah Winfrey,Walton,Arnault,3,Economics
596,Hitchcock Films,Psycho,The Birds,Vertigo,Rear Window,Rope,Rebecca,Spellbound,3,Movies
597,Types of Coffee,Espresso,Latte,Cappuccino,Macchiato,Americano,Mocha,Flat White,Cold Brew,Cortado,Affogato,3,Food
598,Antiquated Transport,Steam Engine,Horse Buggy,Chariot,Zeppelin,Stagecoach,Litter,Rickshaw,Steamship,Carriage,3,Transportation
599,Hand Wear,Glove,Mitten,Ring,Bracelet,Watch,Puppet,Henna,Fingerprint,Manicure,1,Lifestyle
600,Cigarette Brands,Marlboro,Camel,Newport,Winston,Lucky Strike,Pall Mall,Kool,Dunhill,Parliament,3,Lifestyle
601,Will Smith Movies,Men in Black,Fresh Prince,Aladdin,Happyness,I Am Legend,Bad Boys,Hitch,Ali,King Richard,1,Movies
602,Jim Carrey Movies,Ace Ventura,The Mask,Truman Show,Liar Liar,Grinch,Bruce Almighty,Sonic,Riddler,1,Movies
603,Simpsons Characters,Homer,Marge,Bart,Lisa,Maggie,Moe,Burns,Flanders,Skinner,Krusty,1,Television
604,Playboy Centerfolds,Pamela Anderson,Marilyn Monroe,Jenny McCarthy,Carmen Electra,Shannon Tweed,3,Lifestyle
605,Famous Recluses,Howard Hughes,JD Salinger,Emily Dickinson,Harper Lee,Greta Garbo,Bobby Fischer,Syd Barrett,Pynchon,5,History
606,College Football Champs,Alabama,Georgia,LSU,Clemson,Ohio State,Florida State,Auburn,Michigan,Texas,USC,3,Sports
607,NCAA BB Champs,Duke,UNC,Kansas,Kentucky,UConn,Villanova,Baylor,Virginia,Louisville,UCLA,3,Sports
608,Microsoft,Windows,Office,Xbox,Excel,Word,PowerPoint,Bill Gates,Surface,Outlook,Azure,1,Technology
609,Apple,iPhone,iPad,Mac,Steve Jobs,Siri,Watch,AirPods,iTunes,iOS,MacBook,1,Technology
610,IBM,Watson,Mainframe,ThinkPad,Deep Blue,Selectric,Punch Card,Armonk,Big Blue,Typewriter,Server,3,Technology
611,NATO Members,USA,UK,France,Germany,Canada,Italy,Turkey,Spain,Poland,Norway,3,History
612,Joseph Stalin,Dictator,Soviet,Communism,Gulag,Georgia,World War II,3,History
613,USSR,Soviet Union,Communism,Cold War,Kremlin,Red Army,Sputnik,Cosmonaut,Sickle,Hammer,3,History
614,KGB,Spy,Intelligence,Secret Police,Cold War,Putin,Espionage,Surveillance,Lubyanka,5,History
615,Famous Explorers,Columbus,Magellan,Marco Polo,Lewis,Clark,Cook,Shackleton,Armstrong,Vespucci,Hudson,3,History
616,COLORS,RED,BLUE,GREEN,YELLOW,ORANGE,PURPLE,PINK,BLACK,WHITE,BROWN,GRAY,GOLD,SILVER,BRONZE,COPPER,TEAL,NAVY,LIME,MAROON,CYAN,RUST,JADE,PLUM,VIOLET,INDIGO,1,Art
617,BUGS,ANT,BEE,FLY,SPIDER,WORM,LADYBUG,BUTTERFLY,MOSQUITO,BEETLE,MOTH,GNAT,FLEA,TICK,WASP,SLUG,MITE,CATERPILLAR,CENTIPEDE,SNAIL,CRICKET,1,Nature
618,CLOTHES,SHIRT,PANTS,SHOE,HAT,SOCK,DRESS,COAT,JACKET,SCARF,GLOVE,VEST,BELT,BOOT,CAP,HOOD,SHORTS,TSHIRT,SANDALS,SWIMSUIT,SWEATER,MITTENS,SKIRT,JEANS,LEGGINGS,SWEATS,ONESIE,BIB,TANK,BLOUSE,1,Lifestyle
619,KITCHEN ITEMS,FORK,SPOON,KNIFE,PLATE,BOWL,CUP,GLASS,PAN,POT,NAPKIN,DISH,MUG,TRAY,STOVE,SINK,FRIDGE,OVEN,WHISK,LADLE,SPATULA,TOASTER,BLENDER,MIXER,1,Lifestyle
620,SCHOOL ITEMS,PENCIL,PEN,PAPER,BOOK,GLUE,RULER,DESK,CHAIR,TEACHER,MAP,QUIZ,TEST,PASS,MARKER,CRAYON,SCISSORS,CHALK,NOTEBOOK,HIGHLIGHTER,BOARD,BACKPACK,LUNCH,BUS,BELL,1,Education
621,TOYS,BALL,DOLL,BLOCK,CAR,PUZZLE,KITE,YO-YO,ROBOT,TEDDY BEAR,TOP,BIKE,DRUM,GAME,LEGO,LOGS,TILES,BRICKS,SLINKY,ACTION FIGURE,TRAIN,1,Lifestyle
622,SNACKS,CHIPS,COOKIE,CANDY,POPCORN,CAKE,DONUT,ICECREAM,PRETZEL,NUTS,DIP,BAR,PIE,CRACKER,YOGURT,1,Food
623,FOOD,EGG,TOAST,CEREAL,PANCAKE,WAFFLE,BACON,SAUSAGE,OATMEAL,SANDWICH,SOUP,SALAD,PIZZA,BURGER,HOTDOG,TACO,FRIES,STEAK,PASTA,RICE,MEATLOAF,MEAT,BUN,JAM,HAM,1,Food
624,NATURE,TREE,FLOWER,GRASS,LEAF,DIRT,ROCK,SAND,WATER,SKY,SUN,MOON,MUD,DUST,STONE,CLAY,BUSH,PATH,MOSS,FERN,RIVER,LAKE,POND,STREAM,1,Nature
625,SPACE,ROCKET,ASTRONAUT,ALIEN,PLANET,STAR,MOON,SUN,DARK,COLD,VOID,MARS,ORBIT,COMET,METEOR,GALAXY,1,Science
626,PIRATES,SHIP,MAP,GOLD,PARROT,EYEPATCH,HOOK,SWORD,FLAG,SEA,X,3,History
627,MUSIC,SONG,DRUM,GUITAR,PIANO,FLUTE,HORN,BELL,SINGER,GONG,BASS,HARP,LUTE,NOTE,TUNE,1,Music
628,ART,PAINT,DRAW,COLOR,MARKER,CRAYON,PAPER,CLAY,GLUE,INK,WAX,OIL,DYE,TAPE,CANVAS,SKETCH,BRUSH,EASEL,PENCIL,1,Art
629,SIZES,BIG,SMALL,TALL,SHORT,LONG,WIDE,THIN,FAT,HUGE,TINY,GIANT,LARGE,LITTLE,MINI,MICRO,1,Science
630,SPEEDS,FAST,SLOW,QUICK,RAPID,SWIFT,TURTLE,SNAIL,CHEETAH,STOP,GO,RACE,DASH,ZOOM,CRAWL,PLOD,DELAY,LAG,1,Science
631,CAMPING,TENT,FIRE,WOOD,FLASHLIGHT,S MORES,HIKE,LANTERN,COMPASS,CANTEEN,BACKPACK,BOOTS,1,Nature
632,BEACH,SAND,OCEAN,SHELL,WAVE,TOWEL,UMBRELLA,BUCKET,SPADE,CRAB,GULL,DUNE,KELP,RAFT,FLOAT,SWIM,SUN,1,Nature
633,PARTY,CAKE,BALLOON,GIFT,CANDLE,GAME,FRIENDS,MUSIC,DANCE,CARD,HAT,STREAMER,CONFETTI,1,Lifestyle
634,HALLOWEEN,GHOST,WITCH,PUMPKIN,CANDY,COSTUME,BAT,SPIDER,SKELETON,MONSTER,DARK,SCARE,TRICK,1,Lifestyle
635,PLAYGROUND,SLIDE,SWING,SANDBOX,SEESAW,LADDER,BENCH,BARS,RING,FORT,TUNNEL,CLIMB,TAG,SKIP,HIDE,SEEK,1,Lifestyle
636,CIRCUS,CLOWN,LION,TENT,ACROBAT,POPCORN,TICKET,MAGIC,SHOW,RING,1,Lifestyle
637,BIRTHDAY,CAKE,CANDLE,CARD,PARTY,GIFT,AGE,YEAR,BALLOONS,GAMES,FRIENDS,SONG,1,Lifestyle
638,MONEY,COIN,DOLLAR,BANK,PENNY,QUARTER,DIME,CASH,1,Economics
639,MAIL,LETTER,STAMP,BOX,CARD,PACKAGE,MAILMAN,TRUCK,1,Lifestyle
640,LIBRARY,BOOK,READ,QUIET,SHELF,CARD,DESK,STORY,COMPUTER,1,Education
641,MOVIES,POPCORN,SEAT,SCREEN,TICKET,CANDY,FILM,SHOW,SNACKS,SODA,NACHOS,PRETZEL,SLUSHIE,1,Movies
642,DOCTOR,SHOT,MEDICINE,NURSE,SICK,HEALTH,CHECKUP,BANDAGE,PILL,CHECK,WAIT,1,Health
643,DENTIST,TEETH,BRUSH,FLOSS,CHAIR,SMILE,CLEAN,OPEN,1,Health
644,FIRE STATION,TRUCK,HOSE,LADDER,WATER,ALARM,POLE,HELMET,1,Lifestyle
645,POLICE,CAR,BADGE,UNIFORM,HELP,SAFETY,SIREN,LIGHTS,1,Lifestyle
646,PICNIC,BASKET,BLANKET,SANDCH,ANT,PARK,SUN,FOOD,APPLE,GRAPE,JUICE,COOKIE,1,Food
647,BAKING,FLOUR,SUGAR,EGG,MILK,MIX,BOWL,OVEN,YEAST,BUTTER,SODA,1,Food
648,READING,BOOK,PAGE,WORD,PICTURE,STORY,LIBRARY,LOOK,1,Literature
649,DIRECTIONS,UP,DOWN,LEFT,RIGHT,IN,OUT,OVER,UNDER,EAST,WEST,BACK,NEAR,1,Geography
650,PLACES,HOME,SCHOOL,STORE,PARK,ZOO,BEACH,FARM,TOWN,CITY,SHOP,1,Geography
651,FLYING THINGS,BIRD,PLANE,KITE,BEE,BUTTERFLY,BAT,BALLOON,FLY,WASP,OWL,DUCK,CLOUD,1,Nature
652,SWIMMERS,FISH,WHALE,DUCK,FROG,TURTLE,DOG,SHARK,SEAL,CRAB,1,Nature
653,WHEELED ITEMS,CAR,BIKE,BUS,TRUCK,SKATE,WAGON,SCOOTER,VAN,CART,TRAIN,1,Transportation
654,GROWING THINGS,BABY,PUPPY,KITTEN,FLOWER,TREE,PLANT,HAIR,GRASS,NAIL,SEED,1,Nature
655,SKY OBJECTS,SUN,MOON,STAR,CLOUD,BIRD,PLANE,KITE,RAIN,PLANET,COMET,DARK,SPACE,RAINBOW,1,Nature
656,HOUSE ITEMS,DOOR,WINDOW,WALL,FLOOR,ROOF,LIGHT,ROOM,1,Lifestyle
657,BABY ANIMALS,PUPPY,KITTEN,CHICK,CALF,FOAL,LAMB,CUB,DUCKLING,1,Nature
658,SOFT THINGS,PILLOW,COTTON,FEATHER,CLOUD,FUR,VELVET,SILK,BLANKET,BUNNY,MOSS,1,Nature
659,LOUD THINGS,SIREN,DRUM,THUNDER,SCREAM,TRUMPET,FIREWORK,ALARM,HORN,YELL,BANG,CRASH,BARK,1,Science
660,STICKY THINGS,GLUE,TAPE,HONEY,SYRUP,GUM,STICKER,JAM,PASTE,SAP,1,Science
661,HAPPY THINGS,SMILE,LAUGH,HUG,GIFT,FRIEND,PLAY,WIN,1,Health
662,SAD THINGS,CRY,TEAR,FROWN,HURT,LOSE,SICK,MISS,1,Health
663,SCARY THINGS,GHOST,MONSTER,DARK,SPIDER,SNAKE,STORM,NIGHTMARE,1,Health
664,FUNNY THINGS,JOKE,CLOWN,TICKLE,SILLY,GIGGLE,PRANK,LAUGH,1,Health
665,FRIENDS,PAL,BUDDY,MATE,BESTIE,PEER,CLASSMATE,NEIGHBOR,1,Lifestyle
666,BUILDINGS,HOUSE,APARTMENT,BARN,CASTLE,TOWER,SHED,CABIN,HUT,COOP,1,Geography
667,CAR PARTS,WHEEL,DOOR,SEAT,HORN,LIGHT,TIRE,WINDOW,TRUNK,KEY,HOOD,1,Transportation
668,COMPUTER,SCREEN,MOUSE,KEY,PAD,CORD,GAME,WEB,CLICK,1,Technology
669,PHONE,APP,CALL,TEXT,GAME,PIC,CAM,RING,TOUCH,1,Technology
670,ICECREAM FLAVORS,VANILLA,CHOCO,STRAWBERRY,MINT,CHIP,COOKIE,BERRY,OREO,NUTS,FUDGE,FRUIT,SPRINKLES,COFFEE,1,Food
671,SANDWICH PARTS,BREAD,MEAT,CHEESE,LETTUCE,TOMATO,MAYO,PICKLE,1,Food
672,SHINY THINGS,SUN,STAR,LAMP,GOLD,GEM,LIGHT,MOON,FIRE,SILVER,MIRROR,GLASS,WATER,EYE,COIN,1,Science
673,BOUNCY THINGS,BALL,KANGAROO,BUNNY,POGO,RUBBER,EGG,FROG,SPRING,JUMP,HOP,1,Science
674,MELTING THINGS,ICE,SNOW,CANDLE,BUTTER,CHEESE,WAX,CANDY,CHOCO,FROST,1,Science
675,MYTHICAL PLACES,AGARTHA,ARCADIA,ASGARD,ATLANTIS,AVALON,AXIS MUNDI,CAMELOT,CIBOLA,COCKAIGNE,DORADO,EDEN,EL DORADO,HELL,HEAVEN,HEL,HYPERBOREA,JOTUNHEIM,LEMURIA,LOTHLORIEN,MEROPIS,SVARTALFHEIM,TARTARUS,TROY,UNDERWORLD,UTOPIA,VALHALLA,VANAHEIM,XANADU,YGGDRASIL,ZION,5,Literature
676,FAST FOOD CHAINS,BURGER KING,MCDONALD'S,TACO BELL,SUBWAY,KFC,PIZZA HUT,DOMINO'S,CHIPOTLE,ARBYS,DUNKIN,SONIC,1,Food
677,SEASONS,SPRING,SUMMER,FALL,WINTER,AUTUMN,1,Nature
678,RIGHTS,FREEDOM,JUSTICE,EQUALITY,DIGNITY,PEACE,LAW,CITIZENSHIP,3,Politics
679,EVOLUTION,HOMO,HABILIS,ERECTUS,NEANDERTHAL,SAPIENS,SELECTION,DRIFT,SPECIATION,ADAPTATION,PHYLOGENY,CLADISTICS,HOMOLOGY,5,Science
680,CULTURAL EXPRESSIONS,MUSIC,DANCE,THEATER,STORY,PAINTING,POETRY,FESTIVAL,3,Art
681,LIFE STAGES,INFANT,CHILD,TEEN,ADULT,SENIOR,ELDERLY,YOUTH,1,Health
682,SOCIAL STRUCTURES,FAMILY,COMMUNITY,TRIBE,NATION,STATE,CLUB,UNION,3,Politics
683,EMOTIONS,JOY,GRIEF,ENVY,PRIDE,GUILT,LOVE,SURPRISE,1,Health
684,HOMINIDS,HOMO,HABILIS,ERECTUS,SAPIENS,NEANDERTHAL,DENISOVAN,5,Science
685,NEEDS,FOOD,WATER,SHELTER,CLOTHING,SLEEP,HEALTH,LOVE,1,Health
686,BODY SYSTEMS,RESPIRATORY,NERVOUS,DIGESTIVE,MUSCULAR,SKELETAL,ENDOCRINE,3,Health
687,CULTURES,WESTERN,EASTERN,INDIGENOUS,NOMADIC,URBAN,RURAL,3,Geography
688,SOCIAL ROLES,LEADER,FOLLOWER,GUARDIAN,HEALER,TEACHER,WORKER,ARTIST,3,Politics
689,VALUES,HONESTY,RESPECT,KINDNESS,PATIENCE,COURAGE,HARMONY,1,Politics
690,COMMUNICATION,LANGUAGE,GESTURE,WRITING,ART,MUSIC,SPEECH,TECHNOLOGY,3,Language
691,ORIGINS,AFRICA,EVOLUTION,HOMINID,FOSSIL,DNA,ANCESTOR,MIGRATION,3,Science
692,ACTIVITIES,RUNNING,JUMPING,SWIMMING,CLIMBING,FISHING,HUNTING,GATHERING,1,Lifestyle
693,SOCIETY,FAMILIES,FRIENDSHIP,RELIGION,WORK,LAW,POLITICS,EDUCATION,1,Politics
694,KNOWLEDGE,SCIENCE,HISTORY,PHILOSOPHY,MATHEMATICS,LITERATURE,ART,RELIGION,3,Education
695,HEALTH,DISEASE,TREATMENT,EXERCISE,DIET,MEDICINE,REST,1,Health
696,JOURNEY,MIGRATION,SETTLEMENT,EXPLORATION,TRADE,WAR,PEACE,INNOVATION,3,History
697,ETHICS,JUSTICE,TRUTH,FREEDOM,EQUALITY,COMPASSION,INTEGRITY,3,Politics
698,CREATIVITY,ART,MUSIC,LITERATURE,DANCE,THEATER,DESIGN,ARCHITECTURE,3,Art
699,CONFLICT,WAR,PEACE,TREATY,DISPUTE,NEGOTIATION,ALLIANCE,MEDIATION,3,Politics
700,TRADITIONAL CLOTHING,KIMONO,SARI,KILT,DUPATTA,CAFTAN,BOUBOU,DIRNDL,5,Lifestyle
701,FOLKTALES,MERMAID,DRAGON,OGRE,FAIRY,TROLL,ELF,GIANT,1,Literature
702,ART TECHNIQUES,OIL,WATERCOLOR,FRESCO,ACRYLIC,ETCHING,PASTEL,MOSAIC,5,Art
703,DANCES,TANGO,SALSA,BALLET,FLAMENCO,HIP HOP,CHA CHA,FOXTROT,3,Art
704,MYTHOLOGY,ZEUS,THOR,ANUBIS,HERA,SHIVA,ODIN,ATHENA,3,Religion
705,POTTERY,CLAY,GLAZE,KILN,JARS,VASES,BOWLS,PITCHER,3,Art
706,WRITING SYSTEMS,LATIN,CYRILLIC,HANZI,DEVANAGARI,ARABIC,RUNES,HEBREW,5,Language
707,CUISINES,ITALIAN,THAI,MEXICAN,FRENCH,JAPANESE,GREEK,ETHIOPIAN,3,Food
708,PHILOS philosophies,STOICISM,BUDDHISM,CONFUCIANISM,TAOISM,NIHILISM,UTILITARIANISM,5,Religion
709,THEATRE TYPES,TRAGEDY,COMEDY,OPERA,MUSICAL,PANTOMIME,IMPROV,BALLET,3,Art
710,TRADITIONAL GAMES,CHESS,GO,CHECKERS,BACKGAMMON,DOMINOES,MAHJONG,BRIDGE,3,Gaming
711,POETS,SHAKESPEARE,MAYA ANGELOU,EMILY DICKINSON,ROBERT FROST,RUMI,WHITMAN,SHELLEY,3,Literature
712,PAINTINGS,GUERNICA,STARRY NIGHT,THE SCREAM,MONA LISA,THE NIGHT WATCH,THE KISS,3,Art
713,PHILANTHROPISTS,GATES,CARNEGIE,ANGELOU,ROCKEFELLER,CHAVEZ,KING,OBAMA,3,History
714,SCULPTORS,MICHELANGELO,DONATELLO,BERNINI,RODIN,BRANCUSI,MOORE,CANOVA,5,Art
715,CEREMONIES,WEDDING,FUNERAL,GRADUATION,BAPTISM,BAR MITZVAH,CORONATION,ANNIVERSARY,3,Lifestyle
716,HAIRSTYLES,BRAIDS,DREADLOCKS,BUN,PIXIE,PONYTAIL,PERM,AFRO,3,Lifestyle
717,COMIC GENRES,MANGA,SUPERHERO,GRAPHIC NOVEL,WEBCOMIC,FANTASY,SCI FI,MYSTERY,3,Literature
718,ARCHITECTURAL LANDMARKS,EIFFEL TOWER,COLOSSEUM,PYRAMIDS,GREAT WALL,TAJ MAHAL,STONEHENGE,1,Geography
719,CALLIGRAPHY STYLES,ITALIC,GOTHIC,COPPERPLATE,CURSIVE,SUMI,UNCIAL,SPENCERIAN,5,Art
720,CULTURAL FOODS,BAGUETTE,TAMALE,DOSA,DUMPLING,PAELLA,CURRY,FUFU,3,Food
721,POETIC FORMS,SONNET,HAIKU,LIMERICK,FREE VERSE,ODE,BALLAD,ACROSTIC,5,Literature
722,FASHION BRANDS,NIKE,ADIDAS,PUMA,REEBOK,UNDER ARMOUR,NEW BALANCE,ASICS,1,Lifestyle
723,FOOD CHAINS,MCDONALD'S,KFC,SUBWAY,BURGER KING,WENDY'S,DUNKIN',TACO BELL,1,Food
724,BEVERAGE BRANDS,COCA COLA,PEPSI,RED BULL,SPRITE,FANTA,DR PEPPER,MOUNTAIN DEW,1,Food
725,SMARTPHONES,IPHONE,GALAXY,PIXEL,NOKIA,ONEPLUS,HUAWEI,MOTOROLA,1,Technology
726,SPORTS CARS,FERRARI,LAMBORGHINI,MCLAREN,PORSCHE,ASTON MARTIN,JAGUAR,BUGATTI,3,Transportation
727,COSMETICS,L’ORÉAL,MAYBELLINE,REVLON,CLINIQUE,COVERGIRL,SEPHORA,3,Lifestyle
728,LUXURY BRANDS,GUCCI,PRADA,CHANEL,CARTIER,VERSACE,BURBERRY,DIOR,3,Lifestyle
729,STREAMING PLATFORMS,NETFLIX,AMAZON PRIME,HULU,DISNEY PLUS,HBO MAX,APPLE TV,PEACOCK,1,Technology
730,HOME APPLIANCES,WHIRLPOOL,GE,KITCHENAID,BOSCH,LG,ELECTROLUX,SAMSUNG,3,Technology
731,OUTDOOR EQUIPMENT,THE NORTH FACE,COLUMBIA,MARMOT,PATAGONIA,REI,ARC'TERYX,EDDIE BAUER,3,Lifestyle
732,AIRLINES,DELTA,EMIRATES,LUFTHANSA,QATAR AIRWAYS,BRITISH AIRWAYS,AMERICAN AIRLINES,3,Transportation
733,ONLINE SHOPPING,AMAZON,EBAY,ETSY,WALMART,ALIEXPRESS,BEST BUY,TARGET,1,Economics
734,PET FOOD,PEDIGREE,WHISKAS,BLUE BUFFALO,SCIENCE DIET,ROYAL CANIN,IAMS,NUTRO,3,Lifestyle
735,INSURANCE,GEICO,PROGRESSIVE,STATE FARM,ALLSTATE,METLIFE,AFLAC,3,Economics
736,TECH GADGETS,FITBIT,GOPRO,KINDLE,APPLE WATCH,NINTENDO SWITCH,XIAOMI,3,Technology
737,COFFEE BRANDS,STARBUCKS,DUNKIN',PEET’S COFFEE,CARIBOU,TIM HORTONS,COSTA COFFEE,LAVAZZA,1,Food
738,BEAUTY PRODUCTS,NEUTROGENA,OLAY,NIVEA,DOVE,CETAPHIL,LAKMÉ,THE BODY SHOP,3,Lifestyle
739,TECH ACCESSORIES,LOGITECH,SONY,ANKER,BEATS,SKULLCANDY,JBL,BOSE,3,Technology
740,HOUSEHOLD CLEANERS,LYSOL,CLOROX,PINE SOL,CASCADE,AJAX,MR. CLEAN,DAWN,3,Lifestyle
741,SNACK BRANDS,LAYS,PRINGLES,CHEETOS,DORITOS,RUFFLES,GOLDFISH,CAMEL,1,Food
742,TRAVEL GEAR,SAMSONITE,TUMI,RICARDO,TRAVELPRO,DELSEY,3,Lifestyle
743,HEALTH FOODS,KIND BAR,KASHI,BOB’S RED MILL,CLIF BAR,ORGAIN,BLUE DIAMOND,FAGE,3,Food
744,AUTOMOTIVE PARTS,BOSCH,BRIDGESTONE,MOBIL 1,CASTROL,GOODYEAR,MICHELIN,PIRELLI,5,Transportation
745,DAIRY BRANDS,CHOBANI,YOPLAIT,DANNON,FAGE,MILKLAND,STONYFIELD,HORIZON,3,Food
746,CHILDREN’S TOYS,LEGO,HASBRO,MATTEL,FISHER PRICE,PLAYMOBIL,NERF,BARBIE,1,Lifestyle
747,STREAMING DEVICES,ROKU,CHROMECAST,FIRE TV,APPLE TV,NVIDIA SHIELD,XIAOMI MI BOX,TIVO,3,Technology
748,FINANCIAL SERVICES,VISA,MASTERCARD,PAYPAL,DISCOVER,CHASE,CITI,3,Economics
749,KITCHENWARE,CUISINART,KEURIG,INSTANT POT,VITAMIX,LODGE,CALPHALON,3,Lifestyle
750,PERFUME,CHANEL,DIOR,TOM FORD,CALVIN KLEIN,GUCCI,JO MALONE,3,Lifestyle
751,BICYCLE BRANDS,TREK,SPECIALIZED,GIANT,CANNONDALE,BMC,RALEIGH,SCOTT,3,Transportation
752,MEN’S GROOMING,OLD SPICE,GILLETTE,NIVEA,BEARDBRAND,SUAVE,AMERICAN CREW,HARRY’S,3,Lifestyle
753,FAST CASUAL,CHIPOTLE,PANDA EXPRESS,SHAKE SHACK,PANERA BREAD,MOE’S,FIVE GUYS,BLAZE,3,Food
754,HERBIVORES,TRICERATOPS,STEGOSAURUS,ANKYLOSAURUS,BRACHIOSAURUS,IGUANODON,5,Nature
755,FOSSIL TYPES,BONE,TOOTH,CLAW,TRACK,SKULL,SHELL,3,Nature
756,PERIODS,TRIASSIC,JURASSIC,CRETACEOUS,PERMIAN,CARBONIFEROUS,DEVONIAN,SILURIAN,5,Nature
757,EXTINCTION CAUSES,ASTEROID,VOLCANOES,CLIMATE CHANGE,SEA LEVEL,PREDATION,DISEASE,COMPETITION,3,Nature
758,BIOME TYPES,JUNGLE,LAKE,DESERT,COAST,TUNDRA,FOREST,SWAMP,3,Nature
759,CLASSIC BANDS,BEATLES,QUEEN,PINK FLOYD,THE WHO,AC DC,1,Music
760,ROCK INSTRUMENTS,GUITAR,DRUMS,BASS,KEYBOARD,MICROPHONE,AMPLIFIER,PEDAL,DRUMSTICKS,3,Music
761,ROCK GENRES,PUNK,HARD ROCK,GRUNGE,METAL,PROGRESSIVE,ALTERNATIVE,INDIE,3,Music
762,ROCK LEGENDS,MICK JAGGER,FREDDIE MERCURY,DAVID BOWIE,JIMI HENDRIX,KURT COBAIN,JANIS JOPLIN,ELVIS,3,Music
763,ICONIC ALBUMS,SGT PEPPER,DARK SIDE,ABBEY ROAD,BACK IN BLACK,THRILLER,NEVERMIND,RUMOURS,3,Music
764,ROCK VENUES,WEMBLEY,FILLMORE,CBGB,RED ROCKS,MARQUEE,WHISKY A GO GO,5,Music
765,ROCK FESTIVALS,WOODSTOCK,GLASTONBURY,ISLE OF WIGHT,MONTEREY,COACHELLA,LOLLAPALOOZA,BURNING MAN,3,Music
766,FAMOUS ROCK SONGS,IMAGINE,HIGHWAY TO HELL,STAIRWAY TO HEAVEN,BOHEMIAN RHAPSODY,HOTEL CALIFORNIA,PURPLE HAZE,LIGHT MY FIRE,FREE BIRD,3,Music
767,ROCK APPAREL,LEATHER JACKET,DENIM JEANS,BANDANA,STUDDED BELT,COMBAT BOOTS,SUNGLASSES,3,Music
768,ROCK BEHAVORS,HEADBANG,GUITAR SOLO,MOSHING,SCREAMING,STAGE DIVE,ENCORE,JAM SESSION,3,Music
769,RECORD TYPES,VINYL,LP,EP,SINGLE,COMPILATION,BOX SET,REISSUE,3,Music
770,ROCK PRODUCERS,GEORGE MARTIN,RICK RUBIN,BRIAN ENO,MICKIE MOST,QUINCY JONES,5,Music
`,Kg=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
801,SOCCER ACTIONS,GOAL,CORNER KICK,PASS,DRIBBLE,HEADER,FOUL,KICKOFF,OFFSIDE,PENALTY KICK,1,Sports
802,NFL TEAMS,PATRIOTS,COWBOYS,PACKERS,GIANTS,SEAHAWKS,STEELERS,BRONCOS,DOLPHINS,BUCCANEERS,1,Sports
803,BASEBALL EQUIPMENT,BAT,GLOVE,BALL,HELMET,UNIFORM,BASE,CATCHER MASK,CLEATS,PLATE,1,Sports
804,SPORTS OFFICIALS,REFEREE,UMPIRE,LINESMAN,JUDGE,FLAGGER,OFFICIAL,STARTER,SCORER,TIMEKEEPER,3,Sports
805,NFL POSITIONS,WIDE RECEIVER,RUNNING BACK,LINEBACKER,TIGHT END,CORNERBACK,FULLBACK,KICKER,PUNTER,SAFETY,3,Sports
806,BASEBALL PLAYS,DOUBLE PLAY,HOME RUN,FOUL BALL,STEAL,STRIKEOUT,DUGOUT,BUNT,WALK,TAG OUT,3,Sports
807,HOCKEY TERMS,PUCK,STICK,GOAL,PENALTY BOX,FACEOFF,SUDDEN DEATH,POWER PLAY,OVERTIME,SLAPSHOT,3,Sports
808,OLYMPICS MEDALS,GOLD,SILVER,BRONZE,PODIUM,VICTORY,CEREMONY,AWARD,CHAMPION,RECORD,1,Sports
809,FOOTBALL PLAYS,HUDDLE,SNAP,BLITZ,SCREEN PASS,TRAP,ZONE,SPIKE,MISDIRECTION,FLEA FLICKER,3,Sports
810,BASKETBALL FOULS,PERSONAL,FOUL,TECHNICAL,FLAGRANT,CHARGE,DOUBLE DRIBBLE,TRAVELING,GOALTENDING,BLOCK,3,Sports
811,CYCLING EVENTS,TOUR DE FRANCE,TIME TRIAL,PELOTON,SPRINT,CLIMB,STAGE,BREAKAWAY,DOMESTIQUE,SLIPSTREAM,5,Sports
812,GYMNASTICS EVENTS,FLOOR,VAULT,UNEVEN BARS,BALANCE BEAM,RINGS,PARALLEL BARS,POMMEL HORSE,DISMOUNT,MOUNT,5,Sports
813,SOCCER TACTICS,OFFSIDE TRAP,PRESSING,COUNTERATTACK,MAN MARKING,ZONAL MARKING,THROUGH BALL,CROSS,SET PIECE,5,Sports
814,HOCKEY EQUIPMENT,PUCK,STICK,HELMET,SKATES,SHOULDER PADS,MOUTHGUARD,GLOVES,GOAL CAGE,NECK GUARD,3,Sports
815,FOOTBALL OFFENSES,SPREAD,OPTION,WEST COAST,RUN AND SHOOT,NO HUDDLE,WILDCAT,PLAY ACTION,SCREEN PASS,BOOTLEG,5,Sports
816,NFL CHAMPIONSHIPS,SUPER BOWL,PRO BOWL,REGULAR SEASON,PRESEASON,DRAFT,TRAINING camp,3,Sports
817,CLASSIC VIDEO GAMES,SEGA SATURN,ATARI JAGUAR,NEO GEO,COLECOVISION,INTELLIVISION,VECTREX,BANDAI,3,Gaming
818,DEFUNCT CAR BRANDS,HUMMER,PLYMOUTH,OLDSMOBILE,SATURN,DAEWOO,LEYLAND,TALBOT,3,Transportation
819,DISCONTINUED FAST FOOD,CHI CHI'S,BURGER CHEF,RED BARN,SNOW WHITE,PEDLEY,3,Food
820,OBSOLETE CAMERAS,POLAROID,ARGUS,MINOLTA,OLYMPUS,AGFA,KONICA,SANKYO,3,Technology
821,PAST PHONE BRANDS,NOKIA SIEMENS,BLACKBERRY,PALM,MOTOROLA RAZR,KYOCERA,SANYO,ALCATEL,3,Technology
822,DEAD RETAILERS,BLOCKBUSTER,TOYS R US,BORDERS,RADIO SHACK,FANNY FARMER,CIRCUIT CITY,3,Economics
823,CLASSIC TOY LINES,MICRONAUTS,SILVERHAWKS,HE-MAN,TIGER ELECTRONICS,G.I. JOE,ZOIDS,SHOGUN WARRIORS,3,History
824,OLD BEVERAGE BRANDS,BEVERLY,ORBITZ,CRYSTAL PEPSI,TAB,SANTAS OWN,OK SODA,SQUIRT,3,Food
825,RETRO COMPUTER BRANDS,COMPAQ,AMIGA,PACKARD BELL,TANDY,OSBORNE,ZENITH,DICK SMITH,3,Technology
826,DISCONTINUED SNACK FOODS,BUGLES,ORBIT,PB MAX,TANG,QUISP,CRISPIX,3,Food
827,NO MORE AIRLINES,PIEDMONT,OZARK,MORRIS AIR,MIDWAY,3,Transportation
828,FORGOTTEN FAST FOOD CHAINS,SBARRO,CHI CHI'S,RED ROBIN,HOT SHOPPES,Dog n suds,Pumpkin Patch,3,Food
829,OBSOLETE TECH DEVICES,BETAMAX,VHS,MINIDISC,ZUNE,NEWTON,WEBTV,WALKMAN,3,Technology
830,DEFUNCT FURNITURE RETAILERS,CIRCUIT CITY,FURNITURE ROW,DOREL,VALUE CITY,LEVITZ,FASHION BUG,3,Economics
831,DISCONTINUED CAR MODELS,PLYMOUTH VOYAGER,HUMMER H2,SATURN VUE,TALBOT TAGORA,DAEWOO LANOS,LEYLAND TERRIER,3,Transportation
832,PAST SODA BRANDS,SANTAS OWN,OK SODA,CRYSTAL PEPSI,TAB,PEPSI BLUE,FRESCA,BEVERLY,3,Food
833,DEAD VIDEO GAME CONSOLES,INTELLIVISION,ATARI JAGUAR,COLECOVISION,VECTREX,SEGA SATURN,NEO GEO,3DO,3,Gaming
834,DEFUNCT AIRLINES,TWA,PAN AM,EASTERN,BRANIFF,PEOPLE EXPRESS,ZOOM AIR,3,Transportation
835,CLASSIC ELECTRONICS,BEBOX,POLAROID,ARGUS,MINOLTA,KONICA,AGFA,SANKYO,3,Technology
836,DEFUNCT CAR COMPANIES,OLDSMOBILE,PLYMOUTH,SATURN,LEYLAND,TALBOT,DAEWOO,HUMMER,3,Transportation
837,TECH BRANDS NO MORE,NORTEL,COMPAQ,NETSCAPE,BEBOX,BLACKBERRY,PALM,3,Technology
838,DISCONTINUED TOY LINES,TIGER ELECTRONICS,MICRONAUTS,SILVERHAWKS,G.I. JOE,HE-MAN,ZOIDS,SHOGUN WARRIORS,3,History
839,DEAD RETAIL CHAINS,TOYS R US,BORDERS,RADIO SHACK,CIRCUIT CITY,FANNY FARMER,VALUE CITY,3,Economics
840,CLASSIC CAMERAS,POLAROID,MINOLTA,ARGUS,OLYMPUS,KONICA,AGFA,SANKYO,3,Technology
841,DISCONTINUED AIRLINES,PIEDMONT,OZARK,MORRIS AIR,MIDWAY,3,Transportation
842,OBSOLETE SOFT DRINKS,SANTAS OWN,OK SODA,CRYSTAL PEPSI,TAB,PEPSI BLUE,FRESCA,BEVERLY,3,Food
843,FADED VIDEO CONSOLES,SEGA SATURN,3DO,NEO GEO,COLECOVISION,INTELLIVISION,ATARI JAGUAR,VECTREX,3,Gaming
844,OLD AIRLINE NAMES,TWA,PAN AM,EASTERN,BRANIFF,PEOPLE EXPRESS,ZOOM AIR,3,Transportation
845,PAST COMPUTER BRANDS,COMPAQ,AMIGA,PACKARD BELL,TANDY,OSBORNE,ZENITH,DICK SMITH,3,Technology
846,NO LONGER SOLD SODAS,TAB,ORBITZ,OK SODA,SANTAS OWN,CRYSTAL PEPSI,FRESCA,PEPSI BLUE,3,Food
847,OLD FAST FOOD CHAINS,CHI CHI'S,BURGER CHEF,RED BARN,SNOW WHITE,PEDLEY,3,Food
848,DISCONTINUED BEVERAGES,ORBITZ,TAB,CRYSTAL PEPSI,SANTAS OWN,OK SODA,BEVERLY,FRESCA,3,Food
849,NOBLE GASES,HELIUM,NEON,ARGON,KRYPTON,XENON,RADON,OGANESSON,3,Science
850,HALOGENS,FLUORINE,CHLORINE,BROMINE,IODINE,ASTATINE,TENNESSINE,3,Science
851,ALKALI METALS,LITHIUM,SODIUM,POTASSIUM,RUBIDIUM,CESIUM,FRANCIUM,3,Science
852,ARM BONES,HUMERUS,RADIUS,ULNA,CLAVICLE,SCAPULA,CARPALS,METACARPALS,PHALANGE,3,Science
853,LEG BONES,FEMUR,TIBIA,FIBULA,PATELLA,TARSAL,METATARSAL,PHALANGE,3,Science
854,CRANIAL NERVES,OLFACTORY,OPTIC,VAGUS,FACIAL,TRIGEMINAL,TROCHLEAR,ABDUCENS,OCULOMOTOR,5,Science
855,BRAIN LOBES,FRONTAL,PARIETAL,TEMPORAL,OCCIPITAL,INSULA,LIMBIC,3,Science
856,CLOUD TYPES,CIRRUS,STRATUS,CUMULUS,NIMBUS,ALTO,CIRROSTRATUS,STRATOCUMULUS,ALTOCUMULUS,ALTOSTRATUS,NIMBOSTRATUS,CIRROCUMULUS,3,Nature
857,GEOLOGICAL ERAS,PALEOZOIC,MESOZOIC,CENOZOIC,PRECAMBRIAN,JURASSIC,TRIASSIC,CRETACEOUS,CAMBRIAN,DEVONIAN,PERMIAN,PALEOCENE,EOCENE,OLIGOCENE,MIOCENE,PLIOCENE,PLEISTOCENE,HOLOCENE,5,Science
858,WIND TYPES,CHINOOK,MISTRAL,SIROCCO,ZEPHYR,TRADE,MONSOON,GALE,HABOOB,SANTA ANA,3,Nature
859,TAXONOMY RANKS,KINGDOM,PHYLUM,CLASS,ORDER,FAMILY,GENUS,SPECIES,DOMAIN,3,Science
860,PARTICLES,PROTON,NEUTRON,ELECTRON,QUARK,PHOTON,GLUON,BOSON,MUON,TAU,NEUTRINO,FERMION,LEPTON,PHONON,ANYON,GRAVITON,5,Science
861,MATH CONSTANTS,PI,EULER,GOLDEN RATIO,INFINITY,IMAGINARY,PRIME,AVOGADRO,PLANCK,3,Science
862,FALLACIES,STRAWMAN,AD HOMINEM,SLIPPERY SLOPE,RED HERRING,CIRCULAR,SUNK COST,3,Science
863,PHILOSOPHERS,PLATO,KANT,NIETZSCHE,SARTRE,HUME,LOCKE,DESCARTES,HEGEL,ZENO,CRITO,PHAEDO,TIMAEUS,SOCRATES,ARISTOTLE,ROUSSEAU,VOLTAIRE,SPINOZA,CAMUS,5,History
864,SHAKESPEARE,HAMLET,MACBETH,OTHELLO,TEMPEST,LEAR,ROMEO,JULIET,CORIOLANUS,DREAM,MUCH ADO,TWELFTH NIGHT,AS YOU LIKE IT,ERRORS,HENRY V,RICHARD III,KING JOHN,3,Literature
865,AUSTEN NOVELS,EMMA,PERSUASION,MANSFIELD,NORTHANGER,3,Literature
866,POETIC METERS,IAMBIC,TROCHAIC,ANAPESTIC,DACTYLIC,SPONDAIC,PYRRHIC,5,Literature
867,LITERARY DEVICES,IRONY,METAPHOR,SIMILE,SATIRE,ALLEGORY,HYPERBOLE,ALLITERATION,SYMBOLISM,IMAGERY,3,Literature
868,OPERA VOICES,SOPRANO,ALTO,TENOR,BASS,BARITONE,MEZZO,CONTRALTO,COUNTERTENOR,3,Music
869,TEMPO MARKINGS,LARGO,ADAGIO,ANDANTE,ALLEGRO,PRESTO,VIVACE,MODERATO,3,Music
870,CHESS OPENINGS,SICILIAN,GAMBIT,RUI LOPEZ,CARO KANN,FRENCH,ENGLISH,SCANDINAVIAN,KINGS INDIAN,5,Gaming
871,POKER HANDS,ROYAL FLUSH,FULL HOUSE,STRAIGHT,PAIRS,KICKER,ANTE,FLUSH,THREE OF A KIND,1,Gaming
872,TAROT CARDS,FOOL,MAGICIAN,EMPRESS,LOVERS,CHARIOT,HERMIT,TOWER,PRIESTESS,EMPEROR,HIEROPHANT,3,Lifestyle
873,ZODIAC CHINESE,RAT,OX,TIGER,RABBIT,DRAGON,SNAKE,HORSE,GOAT,MONKEY,ROOSTER,DOG,PIG,1,Lifestyle
874,GREEK MUSES,CLIO,THALIA,ERATO,URANIA,CALLIOPE,TERPSICHORE,POLYHYMNIA,MELPOMENE,EUTERPE,5,History
875,NORSE WORLDS,ASGARD,MIDGARD,JOTUNHEIM,HELHEIM,VANAHEIM,ALFHEIM,NIFLHEIM,MUSPELHEIM,5,History
876,ROMAN GODS,JUPITER,JUNO,MARS,VENUS,MERCURY,NEPTUNE,PLUTO,MINERVA,VULCAN,1,History
877,US WARS,REVOLUTION,CIVIL,VIETNAM,KOREA,GULF,IRAQ,AFGHAN,1812,1,History
878,BRITISH MONARCHS,HENRY,ELIZABETH,VICTORIA,GEORGE,WILLIAM,CHARLES,ANNE,EDWARD,RICHARD,3,History
879,EXPLORERS,COLUMBUS,MAGELLAN,COOK,DRAKE,HUDSON,CARTIER,VESPUCCI,LEWIS,CLARK,3,History
880,INVENTORS,TESLA,EDISON,BELL,WRIGHT,FORD,MORSE,WHITNEY,GUTENBERG,DA VINCI,3,History
881,NOBEL PRIZES,PEACE,PHYSICS,CHEMISTRY,MEDICINE,LITERATURE,ECONOMICS,3,History
882,IVY LEAGUE,HARVARD,YALE,PRINCETON,COLUMBIA,BROWN,DARTMOUTH,CORNELL,PENN,3,Education
883,SEVEN WONDERS,PYRAMID,GARDENS,ZEUS,TEMPLE,MAUSOLEUM,COLOSSUS,LIGHTHOUSE,1,History
884,JUPITER MOONS,IO,EUROPA,GANYMEDE,CALLISTO,AMALTHEA,HIMALIA,ELARA,5,Science
885,SATURN MOONS,TITAN,ENCELADUS,MIMAS,RHEA,DIONE,IAPETUS,TETHYS,5,Science
886,DWARF PLANETS,PLUTO,ERIS,HAUMEA,MAKEMAKE,CERES,SEDNA,ORCUS,QUAOAR,GONGGONG,SALACIA,5,Science
887,PROGRAMMING LANGUAGES,PYTHON,JAVA,RUST,RUBY,COBOL,FORTRAN,LISP,SWIFT,C PLUS PLUS,GO,HASKELL,JAVASCRIPT,CSHARP,KOTLIN,TYPESCRIPT,PHP,PERL,SCALA,3,Technology
888,OPERATING SYSTEMS,LINUX,WINDOWS,MACOS,UNIX,DOS,ANDROID,IOS,BSD,SOLARIS,UBUNTU,FEDORA,3,Technology
889,FILE FORMATS,JPEG,PNG,GIF,PDF,MP3,MP4,ZIP,EXE,HTML,JSON,XML,CSV,3,Technology
890,CRYPTOCURRENCIES,BITCOIN,ETHER,RIPPLE,LITECOIN,DOGE,CARDANO,SOLANA,POLKADOT,3,Technology
891,STOCK MARKET,BULL,BEAR,DIVIDEND,EQUITY,OPTION,SHORT,MARGIN,IPO,NASDAQ,DOW JONES,FTSE,NIKKEI,DAX,3,Economics
892,CORPORATE ROLES,CEO,CFO,CTO,COO,CMO,VP,DIRECTOR,MANAGER,CHAIRMAN,1,Economics
893,LEGAL TERMS,PLAINTIFF,DEFENDANT,TORT,HABEAS,SUBPOENA,PERJURY,LIEN,AFFIDAVIT,3,Politics
894,CRIMES,FELONY,TREASON,ARSON,LARCENY,FRAUD,EMBEZZLE,PERJURY,MURDER,ASSAULT,1,Politics
895,PHOBIAS,ACRO,AGORA,CLAUSTRO,Arachno,HYDRO,PYRO,XENO,TRYPO,AERO,3,Science
896,DOCTOR SPECIALTY,ONCOLOGY,PODIATRY,UROLOGY,NEUROLOGY,CARDIOLOGY,DERMATOLOGY,PEDIATRICS,SURGERY,3,Health
897,MEDICAL SCANS,MRI,CT,XRAY,ULTRASOUND,PET,EEG,EKG,BIOPSY,3,Health
898,VITAMINS,RETINOL,THIAMINE,NIACIN,FOLATE,ASCORBIC,CALCIUM,IRON,BIOTIN,RIBOFLAVIN,3,Health
899,GEM CUTS,PRINCESS,EMERALD,OVAL,PEAR,RADIANT,CUSHION,MARQUISE,BRILLIANT,ASSCHER,5,Art
900,FABRIC WEAVES,SATIN,TWILL,PLAIN,BASKET,JACQUARD,VELVET,DENIM,POPLIN,5,Art
901,KNOTS,BOWLINE,HITCH,SQUARE,SHEET,FIGURE,CLOVE,REEF,WINDSOR,SHEEPSHANK,3,Lifestyle
902,BOAT PARTS,HULL,BOW,STERN,PORT,STARBOARD,KEEL,DECK,MAST,RUDDER,3,Transportation
903,AIRCRAFT PARTS,FUSELAGE,WING,RUDDER,AILERON,FLAP,COCKPIT,GEAR,ENGINE,3,Transportation
904,CAMERA PARTS,LENS,SENSOR,SHUTTER,APERTURE,ISO,FLASH,FOCUS,VIEWFINDER,3,Technology
905,FONTS,SERIF,SANS,ARIAL,TIMES,HELVETICA,COURIER,VERDANA,COMIC SANS,3,Art
906,COLOR MODELS,RGB,CMYK,HSV,HEX,PANTONE,HSL,LAB,5,Technology
907,SAUCES,HOLLANDAISE,BECHAMEL,VELOUTE,TOMATO,ESPAGNOLE,PESTO,MARINARA,ALFREDO,3,Food
908,PASTRY DOUGHS,PHYLLO,PUFF,SHORTCRUST,CHOUX,BRIOCHE,SOURDOUGH,DANISH,3,Food
909,SUSHI FISH,MAGURO,SAKE,HAMACHI,UNAGI,EBI,TAKO,IKURA,UNI,3,Food
910,CHEESE TYPES,BLUE,BRIE,GOUDA,CHEDDAR,SWISS,FETA,GOAT,HAVARTI,MOZZARELLA,1,Food
911,WINE TYPES,MERLOT,CABERNET,PINOT,CHARDONNAY,RIESLING,ROSE,SYRAH,SAUVIGNON,3,Food
912,BEER TYPES,LAGER,ALE,STOUT,PORTER,PILSNER,IPA,WHEAT,SOUR,BOCK,3,Food
913,COFFEE BEANS,ARABICA,ROBUSTA,LIBERICA,EXCELSA,KONA,JAVA,COLOMBIAN,3,Food
914,FLOWER PARTS,PETAL,STAMEN,PISTIL,SEPAL,POLLEN,STEM,ROOT,ANTHER,3,Nature
915,BIOMES,TUNDRA,TAIGA,DESERT,SAVANNA,RAINFOREST,GRASSLAND,CHAPARRAL,STEPPE,3,Nature
916,ROCK TYPES,IGNEOUS,SEDIMENTARY,METAMORPHIC,BASALT,GRANITE,LIMESTONE,SANDSTONE,3,Nature
917,MINERALS,QUARTZ,FELDSPAR,MICA,TALC,GYPSUM,CALCITE,PYRITE,DIAMOND,3,Nature
918,FOSSILS,AMMONITE,TRILOBITE,FERN,AMBER,BONE,TOOTH,TRACK,COPROLITE,3,Nature
919,DINOSAUR PERIODS,TRIASSIC,JURASSIC,CRETACEOUS,MESOZOIC,PALEOGENE,3,Nature
920,DINOSAURS,REX,RAPTOR,TRICERATOPS,STEGO,BRONTO,PTERO,ANKYLO,SPINO,1,Nature
921,DOG GROUPS,HERDING,HOUND,TERRIER,SPORTING,WORKING,TOY,NON-SPORTING,3,Nature
922,HORSE BREEDS,ARABIAN,MUSTANG,CLYDESDALE,THOROUGHBRED,APPALOOSA,QUARTER,FRIESIAN,3,Nature
923,CAT FAMILY,LION,TIGER,LEOPARD,JAGUAR,COUGAR,CHEETAH,LYNX,BOBCAT,1,Nature
924,BEAR SPECIES,POLAR,GRIZZLY,PANDA,BLACK,SUN,SLOTH,SPECTACLED,KODIAK,3,Nature
925,WHALE TYPES,BLUE,HUMPBACK,ORCA,SPERM,BELUGA,NARWHAL,GRAY,RIGHT,3,Nature
926,SHARK TYPES,GREAT WHITE,HAMMERHEAD,TIGER,BULL,MAKO,NURSE,WHALE SHARK,3,Nature
927,SNAKE TYPES,COBRA,PYTHON,BOA,VIPER,ANACONDA,MAMBA,CORAL,RATTLESNAKE,3,Nature
928,MARSUPIALS,KANGAROO,KOALA,WOMBAT,POSSUM,TASMANIAN,WALLABY,SUGAR GLIDER,3,Nature
929,PRIMATES,APE,MONKEY,LEMUR,GORILLA,CHIMP,ORANGUTAN,BABOON,GIBBON,3,Nature
930,RODENTS,MOUSE,RAT,SQUIRREL,BEAVER,HAMSTER,GUINEA,CAPYBARA,PORCUPINE,3,Nature
931,RARE EARTHS,SCANDIUM,YTTRIUM,LANTHANUM,CERIUM,YTTERBIUM,NEODYMIUM,THULIUM,SAMARIUM,EUROPIUM,GADOLINIUM,TERBIUM,DYSPROSIUM,HOLMIUM,ERBIUM,5,Science
932,ACTINIDES,THORIUM,URANIUM,PLUTONIUM,AMERICIUM,CURIUM,BERKELIUM,CALIFORNIUM,NEPTUNIUM,5,Science
933,METALLOIDS,BORON,SILICON,GERMANIUM,ARSENIC,ANTIMONY,TELLURIUM,POLONIUM,5,Science
934,NONMETALS,HYDROGEN,CARBON,NITROGEN,OXYGEN,PHOSPHORUS,SULFUR,SELENIUM,3,Science
935,ISOTOPES,PROTIUM,DEUTERIUM,TRITIUM,CARBON-14,URANIUM-235,LEAD-206,IODINE-131,5,Science
936,PARTICLES SUBATOMIC,QUARK,LEPTON,BOSON,FERMION,HADRON,BARYON,MESON,GLUON,PHOTON,5,Science
937,LOGIC GATES,AND,OR,NOT,NAND,NOR,XOR,XNOR,BUFFER,5,Technology
938,NETWORK PROTOCOLS,TCP,UDP,IP,HTTP,FTP,SMTP,DNS,DHCP,SSH,5,Technology
939,ANCIENT CITIES,BABYLON,UR,URUK,THEBES,MEMPHIS,NINEVEH,TYRE,CARTHAGE,TROY,3,History
940,ROMAN LEGION,CENTURION,LEGATE,TRIBUNE,COHORT,MANIPLE,EAGLE,SCUTUM,GLADIUS,5,History
941,GREEK PHILOSOPHY,STOIC,EPICUREAN,CYNIC,SKEPTIC,PLATONIC,SOPHIT,PERIPATETIC,5,History
942,FEUDAL JAPAN,SAMURAI,SHOGUN,DAIMYO,RONIN,NINJA,KATANA,BUSHIDO,SEPPUKU,3,History
943,MEDIEVAL GUILDS,MASON,SMITH,WEAVER,BAKER,MERCHANT,APPRENTICE,JOURNEYMAN,MASTER,5,History
944,VIKING CULTURE,LONGBOAT,RUNE,SAGA,THANE,JARL,VALHALLA,RAID,SHIELD,3,History
945,RENAISSANCE ART,PERSPECTIVE,FRESCO,OIL,CHIAROSCURO,SFUMATO,PORTRAIT,LANDSCAPE,3,Art
946,ENLIGHTENMENT,REASON,SCIENCE,LIBERTY,PROGRESS,TOLERATION,FRATERNITY,CONSTITUTION,5,History
947,INDUSTRIAL REV,STEAM,COAL,FACTORY,RAILROAD,TELEGRAPH,TEXTILE,STEEL,UNION,3,History
948,COLD WAR,SPUTNIK,WALL,CRISIS,DETENTE,PROXY,NUCLEAR,IRON CURTAIN,NATO,3,History
949,INTERNET HISTORY,ARPANET,EMAIL,WWW,BROWSER,DOTCOM,MODEM,DIALUP,SERVER,3,Technology
950,CODING CONCEPTS,LOOP,VAR,FUNCTION,CLASS,OBJECT,ARRAY,STRING,BOOLEAN,3,Technology
951,CYBERSECURITY,FIREWALL,VPN,ENCRYPTION,PHISHING,MALWARE,VIRUS,HACK,TOKEN,3,Technology
952,AI CONCEPTS,NEURAL,LEARNING,DATA,MODEL,ALGORITHM,BOT,TURNING,GPT,3,Technology
953,CRYPTO TERMS,BLOCKCHAIN,WALLET,MINING,GAS,TOKEN,NFT,DEFI,HODL,3,Technology
954,GAMING GENRES,RPG,FPS,RTS,MOBA,MMO,PLATFORMER,ROGUELIKE,SIM,1,Gaming
955,ESPORTS GAMES,LEAGUE,DOTA,CSGO,VALORANT,OVERWATCH,FORTNITE,APEX,3,Gaming
956,STREAMING TERMS,SUB,DONO,RAID,CHAT,EMOTE,BITRATE,VOD,OBS,3,Gaming
957,ANIME GENRES,SHONEN,SHOJO,ISEKAI,MECHA,SLICE,HORROR,SPORTS,MAGIC,3,Television
958,MANGA TERMS,PANEL,BUBBLE,TANKOBON,DOUJINSHI,SCANLATION,WEEKLY,SERIES,3,Literature
959,KPOP TERMS,IDOL,BIAS,COMEBACK,DEBUT,FANDOM,LIGHTSTICK,TRAINEE,VISUAL,3,Music
960,MEME FORMATS,CAT,DOGE,PEPE,WOJAK,DRAKE,DISTRACTED,TWO BUTTONS,CHAD,3,Lifestyle
961,SLANG 2020S,RIZZ,CAP,BET,SUS,CRINGE,BASED,GOAT,SIMP,3,Language
962,COFFEE WAVE,POUROVER,SINGLE,ORIGIN,ROAST,NOTES,ACIDITY,BODY,AEROPRESS,5,Food
963,CRAFT BEER,IPA,STOUT,SOUR,PORTER,SAISON,PILSNER,LAGER,HOPPY,3,Food
964,WINE REGIONS,NAPA,BORDEAUX,TUSCANY,RIOJA,CHAMPAGNE,SONOMA,MENDOZA,RHONE,5,Food
965,CHEESE REGIONS,PARMA,ROQUEFORT,GOUDA,CHEDDAR,MANCHEGO,GRUYERE,BRIE,CAMEMBERT,5,Food
966,SPICE BLENDS,CURRY,GARAM,CAJUN,TACO,PUMPKIN,ZAATAR,RAS EL HANOUT,FIVE SPICE,3,Food
967,TEA CEREMONY,MATCHA,BOWL,WHISK,SCOOP,KETTLE,TATAMI,GUEST,SWEET,5,Food
968,YOGA LIMBS,YAMA,NIYAMA,ASANA,PRANAYAMA,PRATYAHARA,DHARANA,DHYANA,SAMADHI,5,Health
969,CHAKRAS,ROOT,SACRAL,SOLAR,HEART,THROAT,THIRD EYE,CROWN,3,Lifestyle
970,TAROT SUITS,CUPS,WANDS,SWORDS,PENTACLES,3,Lifestyle
971,POKER VARIANTS,TEXAS,OMAHA,STUD,DRAW,HORSE,RAZZ,BADUGI,3,Gaming
972,BACKGAMMON,PIP,POINT,BAR,BEAR,DOUBLE,CUBE,GAMMON,BACK,3,Gaming
973,BILLIARDS,CUE,BALL,POCKET,RACK,BREAK,SPIN,CHALK,TABLE,3,Sports
974,BASEBALL STATS,RBI,ERA,AVG,OPS,HR,WHIP,WAR,OBP,3,Sports
975,BASKETBALL STATS,PPG,RPG,APG,SPG,BPG,PER,FG,FT,3,Sports
976,FOOTBALL POS,QB,RB,WR,TE,OL,DL,LB,CB,S,3,Sports
977,SOCCER POS,GK,CB,FB,CDM,CAM,WINGER,STRIKER,CF,3,Sports
978,HOCKEY POS,CENTER,WING,DEFENSE,GOALIE,ENFORCER,GRINDER,SNIPER,3,Sports
979,OLYMPIC RINGS,BLUE,YELLOW,BLACK,GREEN,RED,1,Sports
980,NOBEL FIELDS,PHYSICS,CHEM,MEDICINE,LIT,PEACE,ECON,3,History
981,IVY LEAGUES,BROWN,COLUMBIA,CORNELL,DARTMOUTH,HARVARD,PENN,PRINCETON,YALE,3,Education
982,SEVEN SEAS,ARCTIC,ATLANTIC,INDIAN,PACIFIC,MEDITERRANEAN,CARIBBEAN,GULF,1,Geography
983,SEVEN SINS,LUST,GLUTTONY,GREED,SLOTH,WRATH,ENVY,PRIDE,1,History
984,PLATONIC SOLIDS,TETRAHEDRON,CUBE,OCTAHEDRON,DODECAHEDRON,ICOSAHEDRON,5,Science
985,TAXONOMY,KINGDOM,PHYLUM,CLASS,ORDER,FAMILY,GENUS,SPECIES,3,Science
986,ATMOSPHERE,TROPO,STRATO,MESO,THERMO,EXO,3,Nature
987,EARTH LAYERS,CRUST,MANTLE,OUTER CORE,INNER CORE,3,Nature
988,ROCK CYCLE,IGNEOUS,SEDIMENTARY,METAMORPHIC,MAGMA,SEDIMENT,3,Nature
989,WATER CYCLE,PRECIPITATION,COLLECTION,TRANSPIRATION,1,Nature
990,CELL PHASES,INTERPHASE,PROPHASE,METAPHASE,ANAPHASE,TELOPHASE,CYTOKINESIS,5,Science
991,DNA BASES,ADENINE,THYMINE,CYTOSINE,GUANINE,5,Science
992,RNA BASES,ADENINE,URACIL,CYTOSINE,GUANINE,5,Science
993,BLOOD TYPES,A,B,AB,O,POSITIVE,NEGATIVE,1,Science
994,TEETH TYPES,INCISOR,CANINE,PREMOLAR,MOLAR,3,Science
995,TASTE BUDS,SWEET,SOUR,SALTY,BITTER,UMAMI,1,Science
996,NEWTON LAWS,INERTIA,FORCE,ACTION,REACTION,3,Science
997,THERMODYNAMICS,ENERGY,ENTROPY,ZERO,THIRD,5,Science
998,STATES MATTER,SOLID,LIQUID,GAS,PLASMA,CONDENSATE,1,Science
999,WAVE TYPES,RADIO,MICRO,INFRA,VISIBLE,UV,XRAY,GAMMA,3,Science
1000,QUARKS,UP,DOWN,CHARM,STRANGE,TOP,BOTTOM,5,Science
1001,LEPTONS,ELECTRON,MUON,TAU,NEUTRINO,5,Science
1002,BOSONS,GLUON,PHOTON,HIGGS,Z,W,5,Science
1003,CONSTANTS,C,G,H,E,PI,PHI,5,Science
1004,UNITS SI,METER,SECOND,KILO,AMPERE,KELVIN,MOLE,CANDELA,3,Science
1005,PREFIXES SI,MEGA,GIGA,TERA,MICRO,NANO,PICO,FEMTO,3,Science
1006,GEOMETRY,POINT,LINE,PLANE,ANGLE,SHAPE,SOLID,1,Science
1007,TRIANGLES,ACUTE,OBTUSE,RIGHT,EQUILATERAL,ISOSCELES,SCALENE,1,Science
1008,QUADRILATERALS,SQUARE,RECTANGLE,RHOMBUS,TRAPEZOID,KITE,PARALLELOGRAM,3,Science
1009,POLYGONS,PENTAGON,HEXAGON,HEPTAGON,OCTAGON,NONAGON,DECAGON,3,Science
1010,CONIC SECTIONS,CIRCLE,ELLIPSE,PARABOLA,HYPERBOLA,5,Science
1011,CALCULUS,LIMIT,DERIVATIVE,INTEGRAL,SERIES,5,Science
1012,STATISTICS,MEAN,MEDIAN,MODE,RANGE,VARIANCE,DEVIATION,3,Science
1013,PROBABILITY,CHANCE,ODDS,EVENT,OUTCOME,SPACE,3,Science
1014,LOGIC,TRUE,FALSE,AND,OR,NOT,IF,THEN,3,Science
1015,SETS,UNION,INTERSECT,SUBSET,EMPTY,NULL,3,Science
1016,FUNCTIONS,DOMAIN,RANGE,INPUT,OUTPUT,GRAPH,3,Science
1017,ALGEBRA,VARIABLE,CONSTANT,TERM,FACTOR,ROOT,3,Science
1018,ARITHMETIC,ADD,SUB,MUL,DIV,MOD,1,Science
1019,NUMBERS,NATURAL,INTEGER,RATIONAL,REAL,COMPLEX,1,Science
1020,PRIMES,TWO,THREE,FIVE,SEVEN,ELEVEN,THIRTEEN,3,Science
1021,FIBONACCI,ONE,TWO,THREE,FIVE,EIGHT,THIRTEEN,TWENTYONE,3,Science
1022,PI DIGITS,THREE,ONE,FOUR,FIVE,NINE,TWO,3,Science
1023,E DIGITS,TWO,SEVEN,ONE,EIGHT,TWO,EIGHT,5,Science
1024,ROMAN NUMERALS,I,V,X,L,C,D,M,1,History
1025,GREEK LETTERS,ALPHA,BETA,GAMMA,DELTA,OMEGA,PI,SIGMA,3,History
1026,HEBREW LETTERS,ALEPH,BET,GIMEL,DALET,HE,VAV,5,History
1027,PHONETIC ALPHABET,ALPHA,BRAVO,CHARLIE,DELTA,ECHO,FOXTROT,3,Language
1028,MORSE CODE,DOT,DASH,SPACE,SIGNAL,3,Technology
1029,BRAILLE,DOT,CELL,RAISED,TOUCH,3,Language
1030,SIGN LANGUAGE,HAND,FINGER,FACE,GESTURE,3,Language
1031,PROGRAMMING,CODE,BUG,LOOP,VAR,API,GIT,1,Technology
1032,DATABASES,SQL,TABLE,ROW,COLUMN,KEY,INDEX,3,Technology
1033,HARDWARE,CPU,RAM,DISK,SCREEN,BOARD,CHIP,1,Technology
1034,SOFTWARE,APP,OS,DRIVER,TOOL,GAME,WEB,1,Technology
1035,FILE TYPES,TXT,DOC,PDF,JPG,MP3,ZIP,1,Technology
1036,WEB DEV,HTML,CSS,JS,REACT,NODE,API,3,Technology
1037,MOBILE,IOS,ANDROID,APP,STORE,TOUCH,GPS,1,Technology
1038,CLOUD,AWS,AZURE,GCP,S3,LAMBDA,EC2,3,Technology
1039,AI,ML,DL,NN,NLP,CV,RL,3,Technology
1040,CRYPTO,BTC,ETH,NFT,DAO,WEB3,WALLET,3,Technology
1041,PRIVACY,DATA,COOKIE,TRACK,VPN,TOR,LOG,3,Technology
1042,TECH LAW,GDPR,CCPA,DMCA,PATENT,COPYRIGHT,5,Technology
1043,STARTUP,SEED,ANGEL,VC,IPO,EXIT,UNICORN,3,Economics
1045,DEVOPS,CI,CD,DOCKER,K8S,GIT,PIPELINE,5,Technology
1046,TESTING,UNIT,INTEGRATION,E2E,MOCK,STUB,SPY,5,Technology
1047,ARCTIC PEOPLES,INUIT,YUPIK,SAMI,ALEUT,NENETS,CHUKCHI,3,Geography
1048,GLACIAL FEATURES,MORAINE,ESKER,DRUMLIN,KAME,KETTLE,CIRQUE,ARETE,HORN,FJORD,TARN,CREVASSE,SERAC,OUTWASH,5,Geography
1049,SOIL HORIZONS,O HORIZON,A HORIZON,E HORIZON,B HORIZON,C HORIZON,R HORIZON,TOPSOIL,SUBSOIL,BEDROCK,HUMUS,ELUVIATION,5,Nature
1050,ATMOSPHERE LAYERS,TROPOSPHERE,STRATOSPHERE,MESOSPHERE,THERMOSPHERE,EXOSPHERE,IONOSPHERE,OZONE LAYER,KARMAN LINE,3,Nature
1051,OCEAN CURRENTS,GULF STREAM,HUMBOLDT,KUROSHIO,LABRADOR,CANARY,BENGUELA,AGULHAS,CALIFORNIA,OYASHIO,NORTH ATLANTIC,5,Geography
1052,STAR TYPES,RED DWARF,WHITE DWARF,NEUTRON STAR,RED GIANT,SUPERGIANT,PULSAR,QUASAR,BROWN DWARF,MAIN SEQUENCE,PROTOSTAR,BINARY,VARIABLE,5,Science
1053,GALACTIC SHAPES,SPIRAL,ELLIPTICAL,IRREGULAR,BARRED SPIRAL,LENTICULAR,PECULIAR,RING,PROLATE,5,Science
1054,NEBULAE,ORION,EAGLE,CRAB,RING,HELIX,CAT'S EYE,HORSEHEAD,CARINA,LAGOON,TARANTULA,TRIFID,DUMBBELL,VEIL,5,Science
1055,QUANTUM PHYSICS,ENTANGLEMENT,SUPERPOSITION,TUNNELING,WAVE FUNCTION,UNCERTAINTY,SPIN,QUBIT,COHERENCE,DECOHERENCE,INTERFERENCE,TELEPORTATION,5,Science
1056,RELATIVITY,TIME DILATION,GRAVITY,SPACETIME,LIGHT SPEED,EVENT HORIZON,SINGULARITY,FRAME DRAGGING,REDSHIFT,LENSING,EQUIVALENCE,5,Science
1057,LOGICAL FALLACIES,STRAW MAN,AD HOMINEM,SLIPPERY SLOPE,RED HERRING,CIRCULAR,SUNK COST,EQUIVOCATION,BANDWAGON,TU QUOQUE,POST HOC,5,Science
1058,COGNITIVE BIASES,CONFIRMATION,ANCHORING,HALO EFFECT,HINDSIGHT,AVAILABILITY,FRAMING,SUNK COST,DUNNING KRUGER,SELF SERVING,NEGATIVITY,OPTIMISM,5,Science
1059,SORTING ALGORITHMS,BUBBLE,QUICK,MERGE,HEAP,INSERTION,SELECTION,RADIX,SHELL,BOGO,COCKTAIL,TIMSORT,BUCKET,5,Technology
1060,DESIGN PATTERNS,SINGLETON,FACTORY,OBSERVER,STRATEGY,DECORATOR,ADAPTER,FACADE,PROXY,COMMAND,ITERATOR,BUILDER,PROTOTYPE,5,Technology
1061,HTTP METHODS,GET,POST,PUT,DELETE,PATCH,HEAD,OPTIONS,CONNECT,TRACE,5,Technology
1062,SQL COMMANDS,SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER,JOIN,UNION,GRANT,REVOKE,TRUNCATE,INDEX,5,Technology
1063,NOSQL DATABASES,MONGODB,REDIS,CASSANDRA,COUCHDB,DYNAMODB,HBASE,NEO4J,COSMOS,FIREBASE,RAVENDB,5,Technology
1064,CLOUD PROVIDERS,AWS,AZURE,GOOGLE CLOUD,ALIBABA,IBM,ORACLE,DIGITAL OCEAN,HEROKU,VULTR,LINODE,HETZNER,RACKSPACE,3,Technology
1065,CYBER ATTACKS,PHISHING,DDOS,MAN IN MIDDLE,SQL INJECTION,XSS,RANSOMWARE,SPOOFING,BRUTE FORCE,ZERO DAY,ROOTKIT,TROJAN,WORM,5,Technology
1066,CRYPTOGRAPHY,AES,RSA,SHA,MD5,PUBLIC KEY,PRIVATE KEY,HASH,SALT,NONCE,CIPHER,ENCRYPTION,DECRYPTION,BLOCKCHAIN,5,Technology
1067,PROGRAMMING LANGS,PYTHON,JAVASCRIPT,JAVA,C++,RUBY,GO,RUST,SWIFT,KOTLIN,TYPESCRIPT,PHP,PERL,SCALA,HASKELL,LUA,3,Technology
1068,WEB TECHNOLOGIES,HTML,CSS,REACT,ANGULAR,VUE,NODE,DJANGO,FLASK,ASP.NET,LARAVEL,SVELTE,BOOTSTRAP,TAILWIND,WEBPACK,3,Technology
1069,MOBILE OS,ANDROID,IOS,WINDOWS PHONE,BLACKBERRY,SYMBIAN,WEBOS,TIZEN,KAIOS,FIRE OS,HARMONY OS,3,Technology
1070,VERSION CONTROL,GIT,SVN,MERCURIAL,CVS,PERFORCE,BAZAAR,TFS,BITKEEPER,FOSSIL,ARCH,5,Technology
1071,AGILE TERMS,SCRUM,KANBAN,SPRINT,BACKLOG,STANDUP,USER STORY,EPIC,VELOCITY,BURNDOWN,SCRUM MASTER,5,Technology
1072,TESTING TYPES,UNIT,INTEGRATION,E2E,REGRESSION,PERFORMANCE,LOAD,STRESS,SECURITY,USABILITY,ACCEPTANCE,SMOKE,SANITY,5,Technology
1073,HARDWARE INTERFACES,USB,HDMI,VGA,DVI,DISPLAYPORT,THUNDERBOLT,ETHERNET,SATA,PCIE,SCSI,SERIAL,PARALLEL,5,Technology
1074,FILE SYSTEMS,NTFS,FAT32,EXT4,APFS,HFS+,EXFAT,ZFS,BTRFS,XFS,REISERFS,5,Technology
1075,IMAGE FORMATS,JPEG,PNG,GIF,SVG,WEBP,TIFF,BMP,RAW,HEIF,ICO,PSD,AI,3,Technology
1076,AUDIO FORMATS,MP3,WAV,AAC,FLAC,OGG,WMA,AIFF,ALAC,MIDI,M4A,OPUS,3,Technology
1077,VIDEO FORMATS,MP4,AVI,MKV,MOV,WMV,FLV,WEBM,MPEG,3GP,TS,M4V,3,Technology
1078,FONT STYLES,SERIF,SANS SERIF,MONOSPACE,CURSIVE,FANTASY,SCRIPT,DISPLAY,BLACKLETTER,SLAB SERIF,3,Art
1079,COLOR SPACES,RGB,CMYK,HSL,HSV,HEX,LAB,YUV,PANTONE,GRAYSCALE,SRGB,ADOBE RGB,5,Technology
1080,COUNTRIES,FRANCE,GERMANY,ITALY,SPAIN,UK,POLAND,GREECE,SWEDEN,NORWAY,IRELAND,BELGIUM,CHINA,JAPAN,INDIA,KOREA,VIETNAM,THAILAND,IRAN,IRAQ,ISRAEL,RUSSIA,PERU,CUBA,MALI,CHAD,FIJI,LAOS,OMAN,EGYPT,NIGERIA,KENYA,SOUTH AFRICA,MOROCCO,ETHIOPIA,GHANA,TANZANIA,BRAZIL,ARGENTINA,CHILE,COLOMBIA,VENEZUELA,ECUADOR,BOLIVIA,NETHERLANDS,AUSTRIA,DENMARK,TURKEY,PORTUGAL,HUNGARY,ROMANIA,ICELAND,1,Geography
1081,PLANETS,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN,URANUS,NEPTUNE,PLUTO,1,Nature
1082,OCEANS,ATLANTIC,PACIFIC,INDIAN,ARCTIC,SOUTHERN,1,Geography
1083,CAR BRANDS,FORD,TOYOTA,HONDA,CHEVY,BMW,AUDI,TESLA,JEEP,DODGE,NISSAN,KIA,MAZDA,SUBARU,MITSUBISHI,SUZUKI,LEXUS,ACURA,INFINITI,MERCEDES,PORSCHE,VOLKSWAGEN,OPEL,MINI,SMART,CADILLAC,BUICK,LINCOLN,JAGUAR,LAND ROVER,BENTLEY,ROLLS ROYCE,ASTON MARTIN,LOTUS,MCLAREN,FERRARI,LAMBORGHINI,MASERATI,FIAT,ALFA ROMEO,PAGANI,LANCIA,ABARTH,1,Transportation
1084,DOG BREEDS,BEAGLE,BULLDOG,POODLE,LABRADOR,PUG,BOXER,HUSKY,COLLIE,CORGI,TERRIER,YORKIE,CHIHUAHUA,SHIH TZU,DACHSHUND,DANE,SHEPHERD,RETRIEVER,MASTIFF,ROTTWEILER,SPORTING,HOUND,WORKING,TOY,HERDING,1,Nature
1085,CAT BREEDS,PERSIAN,SIAMESE,BENGAL,RAGDOLL,SPHYNX,MAINE COON,TABBY,BOMBAY,MANX,BIRMAN,SCOTTISH FOLD,ABYSSINIAN,BURMESE,1,Nature
1086,BIRD TYPES,EAGLE,HAWK,OWL,PENGUIN,PARROT,FLAMINGO,SWAN,DUCK,ROBIN,SPARROW,CROW,DOVE,JAY,LARK,WREN,TERN,FINCH,CANARY,FALCON,1,Nature
1087,FISH TYPES,SALMON,TUNA,TROUT,BASS,SHARK,GOLDFISH,CLOWNFISH,CATFISH,COD,PIKE,CARP,SOLE,EEL,SHAD,GUPPY,TETRA,MOLLY,BETTA,ANGEL,DISCUS,1,Nature
1088,GEMSTONES,DIAMOND,RUBY,SAPPHIRE,EMERALD,OPAL,TOPAZ,PEARL,GARNET,JADE,ONYX,AGATE,BERYL,AMBER,CORAL,3,Nature
1089,METALS,GOLD,SILVER,COPPER,IRON,STEEL,LEAD,ZINC,TIN,BRONZE,BRASS,PLATINUM,1,Science
1090,ELEMENTS,OXYGEN,CARBON,HELIUM,NITROGEN,HYDROGEN,NEON,IRON,GOLD,SILVER,ARGON,XENON,RADON,BORON,IODINE,1,Science
1091,GRAMMAR,NOUN,VERB,ADJECTIVE,ADVERB,PRONOUN,COMMA,PERIOD,COLON,SUBJECT,PREP,CONJ,PART,3,Language
1092,MOVIE GENRES,ACTION,COMEDY,DRAMA,HORROR,SCI-FI,ROMANCE,THRILLER,WESTERN,FANTASY,1,Movies
1093,INSTRUMENTS,GUITAR,PIANO,DRUM,VIOLIN,FLUTE,TRUMPET,SAXOPHONE,CELLO,BASS,HARP,1,Music
1094,SPORTS EQUIPMENT,BAT,BALL,GLOVE,HELMET,NET,CLEATS,RACKET,PUCK,STICK,HOOP,1,Sports
1095,OLYMPIC SPORTS,SWIMMING,RUNNING,GYMNASTICS,SKIING,BOXING,JUDO,FENCING,DIVING,ROWING,SPRINT,ARCHERY,1,Sports
1096,TEAM SPORTS,SOCCER,BASEBALL,FOOTBALL,HOCKEY,RUGBY,CRICKET,VOLLEYBALL,BASKETBALL,1,Sports
1097,FAST FOOD,MCDONALDS,BURGER KING,WENDYS,TACO BELL,KFC,SUBWAY,PIZZA HUT,DOMINOS,FIVE GUYS,SHAKE SHACK,IN N OUT,SONIC,CARLS JR,POPEYES,CHICK FIL A,CHURCHS,ZAXBYS,BOJANGLES,RAISING CANES,DEL TACO,CHIPOTLE,QDOBA,MOES,BAJA FRESH,TACO JOHNS,1,Food
1098,ICE CREAM,VANILLA,CHOCOLATE,STRAWBERRY,MINT,COFFEE,COOKIE DOUGH,ROCKY ROAD,PISTACHIO,1,Food
1099,BREAKFAST FOODS,EGGS,BACON,TOAST,PANCAKES,WAFFLES,CEREAL,OATMEAL,BAGEL,DONUT,1,Food
1100,SOUPS,TOMATO,CHICKEN NOODLE,VEGETABLE,MISO,MINESTRONE,PEA,1,Food
1101,SANDWICHES,BLT,CLUB,RUBEN,PBJ,SUB,WRAP,BURGER,PANINI,1,Food
1102,CHEESES,CHEDDAR,SWISS,MOZZARELLA,BRIE,GOUDA,FETA,PARMESAN,BLUE,AMERICAN,CAMEMBERT,PROVOLONE,RICOTTA,HAVARTI,1,Food
1103,CANDY BARS,SNICKERS,TWIX,KIT KAT,MILKY WAY,HERSHEYS,REESES,CRUNCH,BUTTERFINGER,ALMOND JOY,1,Food
1104,JEWELRY,RING,NECKLACE,EARRING,BRACELET,WATCH,BROOCH,PENDANT,ANKLET,CHAIN,1,Lifestyle
1105,FOOTWEAR,SNEAKERS,BOOTS,SANDALS,HEELS,FLATS,SLIPPERS,LOAFERS,CLEATS,CLOGS,1,Lifestyle
1106,HATS,CAP,BEANIE,FEDORA,COWBOY,BERET,VISOR,HELMET,TOP HAT,SOMBRERO,1,Lifestyle
1107,FURNITURE,SOFA,TABLE,CHAIR,BED,DRESSER,DESK,BOOKSHELF,CABINET,STOOL,BENCH,SHELF,CHEST,DRAWER,1,Lifestyle
1108,APPLIANCES,OVEN,FRIDGE,DISHWASHER,MICROWAVE,TOASTER,WASHER,DRYER,BLENDER,1,Technology
1109,TOOLS,HAMMER,SCREWDRIVER,WRENCH,SAW,DRILL,PLIERS,LEVEL,TAPE,NAIL,1,Technology
1110,GARDEN TOOLS,SHOVEL,RAKE,HOE,HOSE,MOWER,PRUNER,TROWEL,GLOVES,POT,1,Nature
1111,OFFICE SUPPLIES,PAPER,PEN,STAPLER,TAPE,CLIP,FOLDER,NOTEBOOK,ENVELOPE,PRINTER,1,Lifestyle
1112,COMPUTERS,KEYBOARD,MOUSE,SCREEN,LAPTOP,MONITOR,WIFI,PRINTER,TABLET,DATA,MIC,WEBCAM,SCANNER,1,Technology
1113,STREAMING APPS,NETFLIX,HULU,DISNEY,AMAZON,HBO,SPOTIFY,APPLE,YOUTUBE,PRIME,PEACOCK,PARAMOUNT,1,Technology
1114,VIDEO GAMES,MARIO,ZELDA,SONIC,MINECRAFT,FORTNITE,TETRIS,PACMAN,CALL OF DUTY,HALO,DOOM,OVERWATCH,VALORANT,DESTINY,BATTLEFIELD,FINAL FANTASY,POKEMON,SKYRIM,WITCHER,FALLOUT,PERSONA,ELDEN RING,MASS EFFECT,FIFA,MADDEN,NBA 2K,WWE,UFC,1,Gaming
1115,BOARD GAMES,MONOPOLY,CLUE,RISK,SCRABBLE,CHESS,CHECKERS,LIFE,SORRY,UNO,CATAN,TICKET TO RIDE,PANDEMIC,CARCASSONNE,AZUL,WINGSPAN,CODENAMES,SCYTHE,1,Gaming
1116,CARD SUITS,HEARTS,DIAMONDS,CLUBS,SPADES,1,Gaming
1117,CHESS PIECES,KING,QUEEN,ROOK,BISHOP,KNIGHT,PAWN,1,Gaming
1118,RANKS,GENERAL,COLONEL,MAJOR,CAPTAIN,LIEUTENANT,SERGEANT,CORPORAL,PRIVATE,3,History
1119,ROYALTY,KING,QUEEN,PRINCE,PRINCESS,DUKE,DUCHESS,BARON,KNIGHT,EMPEROR,1,History
1120,MYTHICAL CREATURES,DRAGON,UNICORN,MERMAID,GRIFFIN,PHOENIX,GIANT,ELF,DWARF,1,History
1121,SUPERHEROES,BATMAN,SUPERMAN,SPIDERMAN,IRONMAN,HULK,THOR,WONDER WOMAN,FLASH,BLACK WIDOW,HAWKEYE,PANTHER,AQUAMAN,CYBORG,1,Movies
1122,VILLAINS,JOKER,THANOS,VOLDEMORT,DARTH VADER,LEX LUTHOR,MAGNETO,BOWSER,PENGUIN,RIDDLER,BANE,CATWOMAN,FREEZE,VENOM,GOBLIN,OCTOPUS,SANDMAN,ELECTRO,MYSTERIO,1,Movies
1123,DISNEY PRINCESSES,ARIEL,BELLE,JASMINE,MULAN,TIANA,RAPUNZEL,SNOW WHITE,1,Movies
1124,STAR WARS,JEDI,SITH,YODA,LUKE,LEIA,HAN SOLO,CHEWBACCA,DROID,FORCE,OBIWAN,ANAKIN,WINDU,REY,AHSOKA,VADER,MAUL,SIDIOUS,DOOKU,KYLO REN,SNOKE,1,Movies
1125,BEATLES MEMBERS,JOHN,PAUL,GEORGE,RINGO,1,Music
1126,US PRESIDENTS,WASHINGTON,LINCOLN,KENNEDY,OBAMA,BUSH,CLINTON,TRUMP,BIDEN,NIXON,ROOSEVELT,JEFFERSON,MADISON,MONROE,JACKSON,GRANT,CLEVELAND,WILSON,COOLIDGE,REAGAN,1,History
1127,CURRENCIES,DOLLAR,EURO,POUND,YEN,PESO,RUBLE,RUPEE,YUAN,FRANC,1,Economics
1128,CAPITALS,LONDON,PARIS,BERLIN,ROME,MADRID,MOSCOW,ATHENS,DUBLIN,TOKYO,OSLO,LIMA,DOHA,SUVA,KIEV,BEIJING,SEOUL,BANGKOK,HANOI,JAKARTA,MANILA,DELHI,CAIRO,LAGOS,NAIROBI,CAPE TOWN,ACCRA,DAKAR,TORONTO,VANCOUVER,MONTREAL,CALGARY,OTTAWA,EDMONTON,WINNIPEG,QUEBEC,SYDNEY,MELBOURNE,BRISBANE,PERTH,ADELAIDE,CANBERRA,HOBART,DARWIN,1,Geography
1129,US CITIES,NEW YORK,LOS ANGELES,CHICAGO,HOUSTON,PHOENIX,MIAMI,SEATTLE,BOSTON,PHILADELPHIA,ATLANTA,WASHINGTON,CHARLOTTE,ORLANDO,SAN FRANCISCO,LAS VEGAS,DENVER,PORTLAND,SAN DIEGO,1,Geography
1130,RIVERS,NILE,AMAZON,MISSISSIPPI,YANGTZE,DANUBE,THAMES,RHINE,SEINE,ELBE,URAL,PO,DON,LOIRE,1,Geography
1131,MOUNTAINS,EVEREST,K2,FUJI,DENALI,KILIMANJARO,MATTERHORN,RAINIER,ETNA,HOOD,COOK,ROSA,LOGAN,BLANC,1,Geography
1132,DESERTS,SAHARA,GOBI,MOJAVE,ARABIAN,KALAHARI,ATACAMA,ANTARCTIC,KAROO,THAR,NAMIB,NEGEV,SIMPSON,GIBSON,1,Geography
1133,ISLANDS,HAWAII,ICELAND,IRELAND,CUBA,JAMAICA,FIJI,BALI,TAHITI,JAVA,MAUI,OAHU,GUAM,KAUAI,CEBU,1,Geography
1134,LANGUAGES,ENGLISH,SPANISH,FRENCH,GERMAN,CHINESE,JAPANESE,ARABIC,RUSSIAN,1,Language
1135,RELIGIONS,CHRISTIANITY,ISLAM,JUDAISM,BUDDHISM,HINDUISM,SIKHISM,TAOISM,1,History
1136,HOLIDAYS,CHRISTMAS,HALLOWEEN,EASTER,THANKSGIVING,NEW YEARS,VALENTINES,JULY 4TH,LABOR DAY,1,History
1137,ZODIAC SIGNS,ARIES,TAURUS,GEMINI,CANCER,LEO,VIRGO,LIBRA,SCORPIO,1,Lifestyle
1138,TIME UNITS,SECOND,MINUTE,HOUR,DAY,WEEK,MONTH,YEAR,DECADE,CENTURY,1,Science
1139,MEASUREMENTS,INCH,FOOT,YARD,MILE,METER,LITER,GRAM,POUND,OUNCE,1,Science
1140,MATH SHAPES,CIRCLE,SQUARE,TRIANGLE,RECTANGLE,OVAL,HEXAGON,OCTAGON,CUBE,1,Science
1141,SCIENCES,BIOLOGY,CHEMISTRY,PHYSICS,GEOLOGY,ASTRONOMY,BOTANY,ZOOLOGY,SOCIO,PSYCH,1,Science
1142,ORGANS,HEART,BRAIN,LUNG,LIVER,STOMACH,KIDNEY,SKIN,EYE,1,Science
1143,SENSES,SIGHT,HEARING,TASTE,SMELL,TOUCH,1,Science
1144,WEATHER,SUNNY,CLOUDY,RAINY,SNOWY,WINDY,STORMY,FOGGY,HAIL,MIST,SMOG,WIND,1,Nature
1145,DISASTERS,QUAKE,FLOOD,TORNADO,HURRICANE,FIRE,DROUGHT,TSUNAMI,1,Nature
1146,TRANSPORTATION,CAR,BUS,TRAIN,PLANE,BOAT,BIKE,SHIP,SUBWAY,TAXI,1,Transportation
1147,AIRPORT ITEMS,PASSPORT,TICKET,LUGGAGE,GATE,PLANE,SECURITY,PILOT,1,Transportation
1148,HOTEL ITEMS,BED,KEY,ROOM,LOBBY,POOL,MAID,TOWEL,SOAP,1,Lifestyle
1149,BANK ITEMS,MONEY,VAULT,TELLER,CHECK,ATM,LOAN,SAVINGS,CARD,1,Economics
1150,POST OFFICE,STAMP,MAIL,LETTER,BOX,PACKAGE,ENVELOPE,ZIP CODE,1,Lifestyle
1151,LIBRARY ITEMS,BOOK,SHELF,CARD,QUIET,READ,DESK,COMPUTER,1,Education
1152,MOVIE THEATER,SCREEN,SEAT,POPCORN,SODA,CANDY,TICKET,FILM,AISLE,1,Movies
1153,RESTAURANT,MENU,WAITER,TABLE,CHEF,ORDER,TIP,BILL,FOOD,1,Food
1154,GROCERY STORE,CART,AISLE,FOOD,CASHIER,BAG,PRODUCE,DELI,DAIRY,1,Food
1155,CONSTRUCTION,CRANE,DUMP TRUCK,HARD HAT,CONE,DIGGER,CEMENT,BUILD,1,Technology
1156,FARMING,TRACTOR,BARN,FIELD,CROP,COW,PLOW,HAY,SILO,1,Nature
1157,FISHING,ROD,REEL,BAIT,HOOK,BOAT,NET,LAKE,CATCH,1,Nature
1158,CAMPING GEAR,TENT,BAG,FIRE,FLASHLIGHT,COMPASS,KNIFE,PACK,BOOTS,1,Nature
1159,BEACH ITEMS,SAND,SURF,TOWEL,SUNSCREEN,UMBRELLA,BUCKET,BALL,1,Nature
1160,GARDENING,FLOWER,HOE,SEED,SOIL,WATER,RAKE,WEED,GROW,1,Nature
1161,PAINTING,BRUSH,CANVAS,EASEL,PAINT,COLOR,PALETTE,ARTIST,1,Art
1162,SEWING,NEEDLE,THREAD,CLOTH,BUTTON,PIN,SCISSORS,STITCH,1,Art
1163,COOKING,PAN,POT,STOVE,OVEN,MIX,BAKE,FRY,BOIL,CHOP,1,Food
1164,CLEANING,BROOM,MOP,DUST,VACUUM,SOAP,SPONGE,WIPE,WASH,1,Lifestyle
1165,FEELINGS,HAPPY,SAD,ANGRY,AFRAID,TIRED,EXCITED,BORED,CALM,1,Science
1166,VIRTUES,KIND,HONEST,BRAVE,LOYAL,FAIR,WISE,PATIENT,STRONG,1,History
1167,LAKES,CASPIAN,SUPERIOR,VICTORIA,HURON,MICHIGAN,BAIKAL,BEAR,ERIE,MEAD,CHAD,TAHOE,COMO,3,Geography
1168,SEAS,MEDITERRANEAN,CARIBBEAN,SOUTH CHINA,BERING,MEXICO,OKHOTSK,EAST CHINA,JAPAN,BALTIC,CORAL,BLACK,RED,JAVA,ROSS,3,Geography
1169,STARS,SIRIUS,VEGA,RIGEL,BETELGEUSE,ALTAIR,POLARIS,ANTARES,DENEB,MIRA,POLLUX,CASTOR,3,Science
1170,MOONS,LUNA,TITAN,EUROPA,IO,PHOBOS,DEIMOS,CHARON,GANYMEDE,CALLISTO,ENCELADUS,3,Science
1171,TREES,ASH,BEECH,BIRCH,CEDAR,CHERRY,CYPRESS,ELM,FIR,MAPLE,PINE,POPLAR,REDWOOD,SPRUCE,WALNUT,WILLOW,OAK,YEW,GUM,1,Nature
1172,FLOWERS,CAMELLIA,DAISY,IRIS,LAVENDER,LILY,ORCHID,ROSE,SUNFLOWER,TULIP,VIOLET,PANSY,POPPY,ASTER,PEONY,1,Nature
1173,INSECTS,ANT,BEE,BEETLE,BUTTERFLY,FLY,GNAT,MOSQUITO,MOTH,WASP,FLEA,LOUSE,TICK,MITE,1,Nature
1174,FAMOUS PAINTERS,PICASSO,VAN GOGH,MONET,DALI,REMBRANDT,WARHOL,MATISSE,POLLOCK,3,Art
1175,COMPOSERS,BACH,MOZART,BEETHOVEN,CHOPIN,TCHAIKOVSKY,VIVALDI,HANDEL,3,Music
1176,LITERARY GENRES,FICTION,MYSTERY,SCI-FI,FANTASY,HORROR,ROMANCE,THRILLER,1,Literature
1177,POETRY TERMS,STANZA,RHYME,METER,VERSE,HAIKU,SONNET,LYRIC,EPIC,ODE,3,Literature
1178,THEATER TERMS,STAGE,CURTAIN,PROP,SCRIPT,CAST,PLAY,ACT,CUE,ROLE,3,Art
1179,DANCE STYLES,BALLET,TAP,JAZZ,SALSA,TANGO,WALTZ,HULA,POLKA,3,Art
1180,MUSIC TEMPOS,ALLEGRO,ADAGIO,PRESTO,LARGO,ANDANTE,3,Music
1181,ARCHITECTURE,ARCH,DOME,SPIRE,COLUMN,VAULT,3,Art
1182,BRIDGE TYPES,SUSPENSION,ARCH,BEAM,TRUSS,DRAWBRIDGE,3,Technology
1183,ROAD TYPES,HIGHWAY,STREET,AVENUE,LANE,BOULEVARD,1,Transportation
1184,KITCHEN HERBS,BASIL,THYME,MINT,DILL,ROSEMARY,CHIVE,CRESS,SORREL,RUE,BALM,3,Food
1185,BAKING SPICES,CINNAMON,NUTMEG,CLOVE,GINGER,ALLSPICE,SALT,SAGE,CUMIN,3,Food
1186,CITRUS FRUITS,LEMON,LIME,ORANGE,GRAPEFRUIT,CITRON,POMELO,MANDARIN,1,Food
1187,BERRIES,STRAWBERRY,BLUEBERRY,RASPBERRY,BLACKBERRY,CRANBERRY,GOOSEBERRY,1,Food
1188,STONE FRUITS,PEACH,PLUM,APRICOT,CHERRY,NECTARINE,MANGO,1,Food
1189,TROPICAL FRUITS,MANGO,PINEAPPLE,PAPAYA,KIWI,BANANA,1,Food
1190,ROOT VEGETABLES,CARROT,POTATO,BEET,TURNIP,RADISH,PARSNIP,1,Food
1191,LEAFY GREENS,SPINACH,KALE,LETTUCE,ARUGULA,CHARD,COLLARD,1,Food
1192,CRUSTACEANS,CRAB,LOBSTER,SHRIMP,PRAWN,BARNACLE,3,Nature
1193,MOLLUSKS,SNAIL,CLAM,SQUID,OCTOPUS,OYSTER,3,Nature
1194,ARACHNIDS,SPIDER,SCORPION,TICK,MITE,3,Nature
1195,CONIFERS,PINE,FIR,SPRUCE,CEDAR,REDWOOD,3,Nature
1196,DECIDUOUS TREES,OAK,MAPLE,ELM,BIRCH,ASH,3,Nature
1197,CLOUDS,CIRRUS,STRATUS,CUMULUS,NIMBUS,ALTO,1,Nature
1198,WIND NAMES,ZEPHYR,GALE,MISTRAL,CHINOOK,MONSOON,GUST,DRAFT,BREEZE,SQUALL,TRADE,3,Nature
1199,PRECIPITATION,RAIN,SNOW,SLEET,HAIL,FOG,1,Nature
1200,TECTONIC PLATES,PACIFIC,EURASIAN,AFRICAN,ANTARCTIC,3,Science
;`,Yg=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
1201,VOLCANO PARTS,CRATER,VENT,MAGMA,LAVA,ASH,3,Science
1202,OCEAN ZONES,COASTAL,PELAGIC,BENTHIC,ABYSSAL,5,Science
1203,FOSSIL FUELS,COAL,OIL,GAS,PEAT,3,Science
1204,ALLOYS,BRONZE,BRASS,STEEL,PEWTER,SOLDER,5,Science
1205,PATTERNS,PLAID,STRIPE,CHECK,DOT,GRID,TOILE,PAISLEY,3,Art
1206,TEXTURES,SILK,WOOL,FELT,LINEN,HEMP,JUTE,FUR,3,Lifestyle
1207,SHAPES 3D,CONE,CUBE,PRISM,TORUS,SPHERE,HELIX,SPIRAL,3,Science
1208,COLORS EXOTIC,CYAN,TEAL,NAVY,AQUA,AZURE,INDIGO,COBALT,3,Art
1209,TIME PERIODS,SEC,MIN,HOUR,WEEK,YEAR,AGE,ERA,3,Science
1210,VOLUMES,PINT,QUART,LITER,DRAM,GILL,PECK,BUSHEL,3,Science
1211,WEIGHTS,GRAM,KILO,TON,POUND,OUNCE,STONE,GRAIN,3,Science
1212,UNITS,INCH,FOOT,YARD,MILE,ACRE,ROD,FURLONG,3,Science
1213,SYMBOLS,DASH,DOT,STAR,HASH,PLUS,TILDE,CARET,3,Technology
1214,WRITING,DRAFT,EDIT,COPY,TYPE,PLOT,PRINT,FILE,3,Language
1215,NUTS,PECAN,ALMOND,CASHEW,WALNUT,HAZEL,PINE,BRAZIL,PISTACHIO,1,Food
1216,DISNEY PARKS,MAGIC KINGDOM,EPCOT,ANIMAL KINGDOM,DISNEYLAND,3,Lifestyle
1217,PIXAR MOVIES,TOY STORY,CARS,UP,SOUL,COCO,WALL-E,INSIDE OUT,RATATOUILLE,3,Movies
1218,THEME PARKS,DISNEY,UNIVERSAL,SIX FLAGS,SEAWORLD,LEGOLAND,BUSCH GARDENS,DOLLYWOOD,3,Lifestyle
1219,ROLLER COASTERS,WOODEN,STEEL,INVERTED,LOOP,DIVE,LAUNCH,SPINNING,HYBRID,3,Science
1220,ANDROID VERSIONS,CUPCAKE,DONUT,ECLAIR,FROYO,GINGERBREAD,HONEYCOMB,JELLY BEAN,KITKAT,5,Technology
1221,APPLE PRODUCTS,IPHONE,IPAD,MACBOOK,WATCH,AIRPODS,IMAC,APPLE TV,VISION PRO,3,Technology
1222,MESSAGING APPS,WHATSAPP,MESSENGER,TELEGRAM,SIGNAL,WECHAT,LINE,DISCORD,SLACK,3,Technology
1223,TV CHANNELS,NBC,ABC,CBS,FOX,CNN,ESPN,HBO,DISNEY,MTV,3,Television
1224,GYM EXERCISES,SQUAT,BENCH PRESS,DEADLIFT,LUNGE,CURL,PLANK,PUSHUP,PULLUP,1,Health
1225,CARDIO MACHINES,TREADMILL,ELLIPTICAL,BIKE,ROWER,STAIRMASTER,CLIMBER,SKI ERG,1,Health
1226,PASTA SAUCES,MARINARA,ALFREDO,PESTO,VODKA,BOLOGNESE,CARBONARA,PUTTANESCA,1,Food
1227,FRENCH CHEESES,BRIE,CAMEMBERT,ROQUEFORT,COMTE,GRUYERE,MUNSTER,CHEVRE,3,Food
1228,BOX OFFICE,AVATAR,TITANIC,AVENGERS,STAR WARS,JURASSIC WORLD,LION KING,SPIDERMAN,3,Movies
1229,DIRECTORS,SPIELBERG,NOLAN,SCORSESE,TARANTINO,CAMERON,HITCHCOCK,KUBRICK,COPPOLA,3,Movies
1230,HARRY POTTER,HARRY,RON,HERMIONE,DRACO,SNAPE,DUMBLEDORE,HAGRID,SIRIUS,MCGONAGALL,FLITWICK,SPROUT,1,Movies
1231,LOTR RACES,HOBBIT,ELF,DWARF,ORC,MAN,WIZARD,ENT,TROLL,3,Movies
1232,STAR WARS DROIDS,R2D2,C3PO,BB8,K2SO,IG88,CHOPPER,BATTLE DROID,PROBE,3,Movies
1233,TENNIS MAJORS,WIMBLEDON,US OPEN,FRENCH OPEN,AUSTRALIAN OPEN,3,Sports
1234,GOLF MAJORS,MASTERS,US OPEN,PGA,THE OPEN,3,Sports
1235,CAR SAFETY,AIRBAG,SEATBELT,ABS,CAMERA,SENSOR,BRAKES,LANE ASSIST,3,Transportation
1236,LUXURY CARS,FERRARI,PORSCHE,LAMBORGHINI,BUGATTI,MCLAREN,ASTON MARTIN,ROLLS ROYCE,GUCCI,PRADA,CHANEL,DIOR,VUITTON,HERMES,ROLEX,CARTIER,3,Lifestyle
1237,ELECTRIC CARS,TESLA,RIVIAN,LUCID,POLESTAR,LEAF,BOLT,IONIQ,TAYCAN,3,Transportation
1238,COFFEE CHAINS,STARBUCKS,DUNKIN,TIM HORTONS,PEETS,COSTA,CARIBOU,DUTCH BROS,BLUE BOTTLE,1,Food
1239,DONUT SHOPS,KRISPY KREME,DUNKIN,TIM HORTONS,VOODOO,SHIPLEY,RANDYS,1,Food
1240,JEANS BRANDS,LEVI,WRANGLER,LEE,DIESEL,GAP,CALVIN KLEIN,GUESS,3,Lifestyle
1241,MAKEUP BRANDS,MAC,SEPHORA,ULTA,FENTY,NYX,MORPHE,CLINIQUE,NARS,3,Lifestyle
1242,ENERGY DRINKS,RED BULL,MONSTER,ROCKSTAR,BANG,CELSIUS,NOS,REIGN,1,Food
1243,MONOPOLY PIECES,TOP HAT,THIMBLE,BOOT,CAR,DOG,IRON,SHIP,WHEELBARROW,1,Gaming
1244,CARD GAMES,POKER,BLACKJACK,WAR,GO FISH,BRIDGE,RUMMY,SOLITAIRE,HEARTS,CANASTA,EUCHRE,CRIBBAGE,PINOCHLE,1,Gaming
1245,CASINO GAMES,SLOTS,CRAPS,ROULETTE,BACCARAT,POKER,KENO,BINGO,PAI GOW,FARO,3,Gaming
1246,DISNEY PRINCES,CHARMING,ERIC,ALADDIN,PHILLIP,ADAM,NAVEEN,FLYNN,3,Movies
1247,LAS VEGAS HOTELS,BELLAGIO,LUXOR,VENETIAN,WYNN,ARIA,MANDALAY,MIRAGE,EXCALIBUR,3,Lifestyle
1248,CIRQUE SHOWS,O,KA,MYSTERE,LOVE,ALEGRIA,KOOZA,ZUMANITY,BEATLES,5,Art
1249,NETFLIX ORIGINALS,STRANGER THINGS,CROWN,OZARK,WITCHER,BRIDGERTON,SQUID GAME,NARCOS,DARK,3,Television
1250,GYM EQUIPMENT,DUMBBELL,BARBELL,KETTLEBELL,TREADMILL,ELLIPTICAL,ROWER,BENCH,BIKE,1,Health
1251,YOGA STYLES,HATHA,VINYASA,BIKRAM,ASHTANGA,YIN,KUNDALINI,RESTORATIVE,3,Health
1252,CROSSFIT TERMS,WOD,AMRAP,BOX JUMP,BURPEE,THRUSTER,SNATCH,CLEAN,JERK,5,Health
1253,GOLD RUSH STATES,CALIFORNIA,ALASKA,NEVADA,COLORADO,DAKOTA,IDAHO,MONTANA,3,History
1254,DESERT PLANTS,CACTUS,AGAVE,YUCCA,SAGEBRUSH,JOSHUA TREE,ALOE,MESQUITE,PRICKLY PEAR,3,Nature
1255,RAINFOREST LAYERS,EMERGENT,CANOPY,UNDERSTORY,FLOOR,SOIL,SHRUB,3,Nature
1256,ARCTIC NATIONS,CANADA,RUSSIA,USA,NORWAY,DENMARK,ICELAND,SWEDEN,FINLAND,3,Geography
1257,SPACE SHUTTLES,ATLANTIS,CHALLENGER,COLUMBIA,DISCOVERY,ENDEAVOUR,ENTERPRISE,3,Science
1258,NASA CENTERS,KENNEDY,JOHNSON,GODDARD,MARSHALL,LANGLEY,AMES,GLENN,5,Science
1259,ROCKET PARTS,NOSE CONE,FIN,ENGINE,FUSELAGE,PAYLOAD,THRUSTER,TANK,STAGE,5,Science
1260,US MONUMENTS,LINCOLN,WASHINGTON,JEFFERSON,RUSHMORE,LIBERTY,ARCH,ALAMO,BUNKER HILL,3,History
1261,MOUNT RUSHMORE,WASHINGTON,JEFFERSON,LINCOLN,ROOSEVELT,1,History
1262,ROOSEVELT FAMILY,TEDDY,FRANKLIN,ELEANOR,ALICE,KERMIT,THEODORE,ELLIOTT,5,History
1263,NEW DEAL,WPA,CCC,TVA,SSA,FDIC,SEC,NRA,AAA,5,History
1264,GREAT DEPRESSION,CRASH,DUST BOWL,HOOVERVILLE,POVERTY,JOBS,BANK,STOCKS,3,History
1265,1930S DECADE,DEPRESSION,SWING,RADIO,TALKIES,PROHIBITION,GANGSTERS,JAZZ,3,History
1266,GANGSTER ERA,CAPONE,DILLINGER,NELSON,BONNIE,CLYDE,LUCIANO,BUGSY,GOTTI,3,History
1267,PROHIBITION DRINKS,GIN RICKEY,SIDECAR,HIGHBALL,MARY PICKFORD,BEES KNEES,MOONSHINE,SPEAKEASY,5,Food
1268,SITCOMS,FRIENDS,SEINFELD,OFFICE,PARKS REC,BIG BANG,CHEERS,MASH,1,Television
1269,DRAMAS,BREAKING BAD,SOPRANOS,WIRE,MAD MEN,SUCCESSION,LOST,THRONES,1,Television
1270,CARTOONS,SPONGEBOB,SIMPSONS,FAMILY GUY,SOUTH PARK,FUTURAMA,SCOOBY DOO,1,Television
1271,REALITY TV,SURVIVOR,BIG BROTHER,BACHELOR,VOICE,IDOL,AMAZING RACE,1,Television
1272,SCI FI SHOWS,TREK,DOCTOR WHO,X FILES,STRANGER THINGS,MANDALORIAN,FIREFLY,3,Television
1273,TALK SHOWS,TONIGHT,DAILY,ELLEN,OPRAH,LETTERMAN,CONAN,KIMMEL,3,Television
1274,REVOLUTIONS,FRENCH,AMERICAN,INDUSTRIAL,RUSSIAN,DIGITAL,SCIENTIFIC,1,History
1275,EMPIRES,ROMAN,OTTOMAN,BRITISH,MONGOL,AZTEC,MAYAN,PERSIAN,1,History
1276,CONSTELLATIONS,ORION,URSA MAJOR,CASSIOPEIA,SCORPIO,LEO,DRACO,PEGASUS,3,Science
1277,SPACE MISSIONS,APOLLO,GEMINI,VOYAGER,ARTEMIS,SPUTNIK,CURIOSITY,3,Science
1278,ASTRONAUTS,ARMSTRONG,ALDRIN,GAGARIN,GLENN,RIDE,HADFIELD,KELLY,1,Science
1279,GALAXIES,MILKY WAY,ANDROMEDA,TRIANGULUM,WHIRLPOOL,SOMBRERO,PINWHEEL,3,Science
1280,SOCCER TEAMS,REAL MADRID,BARCELONA,MAN UTD,LIVERPOOL,JUVENTUS,BAYERN,1,Sports
1281,NBA TEAMS,LAKERS,BULLS,WARRIORS,CELTICS,HEAT,KNICKS,SPURS,1,Sports
1282,TROPHIES,STANLEY CUP,LOMBARDI,WORLD CUP,GOLD MEDAL,HEISMAN,WIMBLEDON,1,Sports
1283,SPORTS LEGENDS,JORDAN,PELE,BRADY,RUTH,GRETZKY,ALI,PHELPS,WOODS,1,Sports
1284,PERSONNEL,TEACHER,STUDENT,PRINCIPAL,JANITOR,COACH,NURSE,COUNSELOR,1,Education
1285,ACADEMICS,HOMEWORK,QUIZ,TEST,ESSAY,PROJECT,REPORT,GRADE,1,Education
1286,RECESS,SWING,SLIDE,TAG,BALL,SANDBOX,JUMP ROPE,HOPSCOTCH,1,Education
1287,HP SPELLS,LUMOS,NOX,ACCIO,ALOHOMORA,EXPELLIARMUS,STUPEFY,PROTEGO,3,Movies
1288,PIXAR CARS,LIGHTNING,MATER,SALLY,DOC,LUIGI,GUIDO,MACK,1,Movies
1289,TOY STORY TOYS,WOODY,BUZZ,REX,HAMM,SLINKY,JESSIE,BULLSEYE,1,Movies
1290,SPONGEBOB CAST,SPONGEBOB,PATRICK,SQUIDWARD,SANDY,KRABS,PLANKTON,1,Television
1291,SIMPSONS FAMILY,HOMER,MARGE,BART,Lisa,MAGGIE,GRAMPA,1,Television
1292,FAMILY GUY,PETER,LOIS,STEWIE,BRIAN,CHRIS,MEG,1,Television
1293,FRIENDS CAST,ROSS,RACHEL,MONICA,CHANDLER,JOEY,PHOEBE,1,Television
1294,THE OFFICE CAST,MICHAEL,DWIGHT,JIM,PAM,RYAN,ANDY,1,Television
1295,GOT HOUSES,STARK,LANNISTER,TARGARYEN,BARATHEON,GREYJOY,TYRELL,3,Television
1296,HUNGER GAMES,MINING,LUXURY,FISHING,POWER,AGRICULTURE,TRANSPORT,5,Movies
1297,TWILIGHT SAGA,BELLA,EDWARD,JACOB,ALICE,CARLISLE,EMMETT,1,Movies
1298,VAMPIRE DIARIES,ELENA,STEFAN,DAMON,BONNIE,CAROLINE,ALARIC,3,Television
1299,STRANGER THINGS,MIKE,ELEVEN,DUSTIN,LUCAS,WILL,MAX,1,Television
1300,BREAKING BAD,WALTER,JESSE,SKYLER,HANK,SAUL,GUS,1,Television
`,zg=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
1760,BICYCLE PARTS,WHEEL,TIRE,PEDAL,CHAIN,HANDLEBAR,SEAT,BRAKE,GEAR,3,Sports
1761,TRAFFIC SIGNS,STOP,YIELD,SPEED LIMIT,ONE WAY,DO NOT ENTER,NO PARKING,MERGE,CROSSWALK,1,Transportation
1762,Air Fryer Staples,Fries,Wings,Broccoli,Salmon,Tofu,Ravioli,1,Food
2000,Retro Tech,Walkman,Diskette,Pager,Rotary Phone,Betamax,LaserDisc,3,Technology
2001,Arcade Classics,Pac-Man,Galaga,Donkey Kong,Space Invaders,Dig Dug,Asteroids,1,Gaming
2002,Vintage Toys,Yo-yo,Slinky,Etch A Sketch,View-Master,Rubik's Cube,Silly Putty,3,History
2003,80s Movies,Ghostbusters,E.T.,The Goonies,Top Gun,3,Movies
2004,Muscle Cars,Mustang,Corvette,Beetle,Charger,Thunderbird,GTO,Camaro,Chevelle,1,Transportation
2005,Legendary Rock,Led Zeppelin,Pink Floyd,The Who,Queen,Fleetwood Mac,AC/DC,Deep Purple,1,Music
2006,90s Cartoons,Rugrats,Doug,Animaniacs,Ren and Stimpy,Hey Arnold,3,Television
2007,Classic Board Games,Monopoly,Clue,Risk,Scrabble,Stratego,Battleship,Chess,1,Gaming
2008,Breakfast Mascots,Tony the Tiger,Toucan Sam,Captain Crunch,Count Chocula,1,Food
2009,Classic Sitcoms,Seinfeld,Cheers,MASH,I Love Lucy,Friends,The Jeffersons,3,Television
2010,Early Web,AOL,Netscape,GeoCities,Napster,ICQ,Ask Jeeves,AltaVista,3,Technology
2011,8-Bit Era,NES,Atari 2600,Intellivision,ColecoVision,Commodore 64,3,Gaming
2012,Classic Sodas,Tab,Jolt,Fresca,RC Cola,Moxie,Surge,Crystal Pepsi,3,Food
2013,Universal Monsters,Dracula,Frankenstein,Wolfman,Mummy,Gill-man,Invisible Man,3,Movies
2014,Wild West Legends,Wyatt Earp,Doc Holliday,Jesse James,Billy the Kid,Butch Cassidy,3,History
2015,Classic Detectives,Sherlock Holmes,Hercule Poirot,Miss Marple,Sam Spade,Philip Marlowe,Dick Tracy,3,Literature
2016,Vinyl Culture,LP,Turntable,Groove,Stylus,Sleeve,RPM,Crackle,3,Music
2017,Sci-Fi Novels,Dune,Foundation,1984,Brave New World,Fahrenheit 451,3,Literature
2018,Classic Comic Strips,Snoopy,Garfield,Dilbert,Calvin,Hobbes,Popeye,Heathcliff,3,Literature
2019,Golden Age Stars,Humphrey Bogart,Cary Grant,James Stewart,Gregory Peck,Clark Gable,Bette Davis,3,Movies
2020,Old School Candy,Bazooka,Necco Wafers,Abba-Zaba,Bit-O-Honey,3,Food
2021,Historic Stadiums,Wrigley Field,Fenway Park,Lambeau Field,3,Sports
2022,Classic TV Westerns,Gunsmoke,Bonanza,Rawhide,Wagon Train,The Virginian,High Chaparral,3,Television
2023,Early Portables,Osborne 1,Game Boy,5,Technology
2024,Horror Villains,Michael Myers,Freddy Krueger,Jason Voorhees,Leatherface,Pinhead,Chucky,3,Movies
2025,Vintage Kitchen,Hand Mixer,Percolator,Seltzer Siphon,Egg Beater,Toaster Oven,3,Food
2026,Classic Accessories,Pocket Watch,Fedora,Brooch,Cufflinks,Tie Clip,Parasol,3,Lifestyle
2027,Cocktail Classics,Old Fashioned,Martini,Manhattan,Negroni,Sidecar,Gimlet,Daiquiri,3,Food
2028,Golden Age Animation,Warner Bros,Fleischer,Disney,MGM,UPA,Hanna-Barbera,3,Movies
2029,Superhero Identities,Bruce Wayne,Clark Kent,Peter Parker,Diana Prince,Tony Stark,Steve Rogers,3,Movies
2030,Famous Instruments,Stradivarius,Steinway,5,Music
2031,Historic Travel,Ocean Liner,Steam Train,Zeppelin,Stagecoach,Caravan,Rickshaw,3,Transportation
2032,Renaissance Masters,Leonardo,Michelangelo,Raphael,Donatello,Titian,Botticelli,3,Art
2033,Ancient Philosophy,Stoicism,Platonism,Cynicism,Skepticism,5,History
2034,Fairy Tale Magic,Magic Mirror,Glass Slipper,Poison Apple,Golden Goose,Magic Carpet,3,Literature
2035,Opera Greats,Verdi,Wagner,Puccini,Mozart,Rossini,Bizet,Handel,5,Music
2036,Classic Dance,Charleston,Swing,Waltz,Foxtrot,Tango,Lindy Hop,3,Art
2037,NASA Milestones,Vostok,Mercury,Gemini,Apollo,Voyager,Skylab,Sputnik,3,Science
2038,Architectural Gems,Romanesque,Gothic,Baroque,Art Deco,Bauhaus,5,Art
2039,Classic Ships,Galleon,Frigate,Clipper,Ironclad,Dreadnought,U-Boat,3,Transportation
2040,Timeless Poets,Frost,Keats,Byron,Shelley,Whitman,Dickinson,Poe,3,Literature
2041,Martial Arts,Karate,Kung Fu,Judo,Taekwondo,Aikido,Hapkido,Capoeira,3,Sports
2042,Chess Openings,Ruy Lopez,French Defense,Caro-Kann,5,Gaming
2043,Tarot Suits,Wands,Cups,Swords,Pentacles,Major Arcana,5,Lifestyle
2044,Alchemical Terms,Quicksilver,Brimstone,Vitriol,Saltpeter,Elixir,5,Science
2045,Natural Wonders,Grand Canyon,Victoria Falls,Mount Everest,Niagara Falls,1,Nature
2046,Mythology Realms,Olympus,Hades,Asgard,Valhalla,Midgard,Niflheim,3,History
2047,Night Sky,Orion,Ursa Major,Cassiopeia,Pleiades,Pegasus,Draco,3,Nature
2048,Stationery Supplies,Fountain Pen,Wax Seal,Parchment,Blotter,Quiver,Inkwell,3,Art
2049,Retro Gaming Logos,Sega,Nintendo,Atari,Capcom,Konami,Namco,Taito,3,Gaming
2171,Cooking Techniques,Sous Vide,Braise,Poach,Saute,Blanch,Sear,Braising,Poaching,Searing,Blanching,Roasting,Grilling,5,Food
2172,Chef Ranks Kitchen,Executive,Sous,Station,Commis,Pastry,Saucier,5,Food
2173,Kitchen Safety,Knife,Fire,Sanitize,Cross-con,Temperature,Storage,Sharp Knives,Dry Hands,Ventilation,3,Food
2299,Famous Directors,Spielberg,Nolan,Scorsese,Tarantino,Kubrick,Hitchcock,3,Movies
2500,Starts with Z,Zebra,Zoo,Zero,Zone,Zest,Zipper,1,Language
`,_g=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
100000,Air Fryer Staples,Fries,Wings,Broccoli,Salmon,Tofu,Ravioli,1,Food
100001,Mechanical Keyboards,Switch,Keycap,Lube,Stabilizer,Plate,PCB,5,Gaming
100002,Smart Home Ecosystems,Smart Plug,Hub,Sensor,Camera,Lock,Bulb,3,Science
100003,PC Water Cooling,Radiator,Pump,Reservoir,Tubing,Block,Fitting,5,Gaming
100004,Hypebeast Brands,Supreme,Off-White,Stussy,Bape,Kith,Palace,3,History
100005,Streetwear Staples,Hoodie,Cargo Pants,Beanie,Vest,Sneakers,Oversized,1,History
100006,Sustainable Fabrics,Tencel,Hemp,Piñatex,Cork,Bamboo,Econyl,5,Science
100007,Plant-Based Milks,Oat Milk,Almond Milk,Soy Milk,Coconut Milk,Cashew Milk,Pea Milk,1,Food
100008,Workout Equipment,Kettlebell,Resistance Band,Yoga Block,Foam Roller,Mat,Jump Rope,1,Sports
100009,HIIT Exercises,Tabata,Burpee,Mountain Climber,Plank,Squat Jump,Lunges,3,Sports
100010,Pelagic Fish,Marlin,Sailfish,Swordfish,Wahoo,Mahi Mahi,Tuna,3,Nature
100011,Deep Sea Creatures,Anglerfish,Vampire Squid,Dumbo Octopus,Gulper Eel,Isopod,Blobfish,3,Nature
100012,Shark Anatomy,Gill Slits,Dorsal Fin,Ampullae,Cartilage,Snout,Tail,3,Nature
100013,Whale Sounds,Song,Click,Whistle,Pulse,Frequency,Echolocation,3,Nature
100014,Hippo Adaptations,Submerged,Nocturnal,Social,Territorial,Massive,Semi-aquatic,3,Nature
100015,Tiger Hunting,Ambush,Stalk,Camouflage,Solitary,Night,Power,1,Nature
100016,Lion Pride Roles,Alpha,Hunter,Guardian,Cub,Sentry,Leader,1,Nature
100017,Cat Grooming,Lick,Scratch,Purr,Paw,Tongue,Ear,1,Nature
100018,Dog Training Commands,Fetch,Sit,Stay,Heel,Come,Down,1,Nature
100019,Penguin Species,Emperor,Adelie,Gentoo,Chinstrap,Galápagos,Little,3,Nature
100020,Wolf Pack Roles,Alpha,Beta,Omega,Scout,Hunter,Guardian,1,Nature
100021,Dolphin Intelligence,Problem Solving,Tools,Names,Games,Mirror,Learning,3,Nature
100022,Elephant Anatomy,Trunk,Tusk,Ear,Hide,Foot,Tail,1,Nature
100023,Giraffe Facts,Long Neck,Ossicone,Tongue,Spots,Tall,Herbivore,1,Nature
100024,Zebra Patterns,Stripe,Unique,Dazzle,Camouflage,Herd,Black-white,1,Nature
100025,Monkey Species,Capuchin,Howler,Spider Monkey,Marmoset,Tamarin,Macaque,3,Nature
100026,Owl Traits,Vision,Hearing,Silent Flight,Talons,Beak,Neck,1,Nature
100027,YouTube Creator Tools,Thumbnail,Analytics,Dashboard,Studio,Editor,Tags,3,Science
100028,Facebook Elements,Feed,Story,Group,Marketplace,Watch,Messenger,1,Science
100029,Instagram Filters,Clarendon,Juno,Ludwig,Lark,Moon,Gingham,3,Science
100030,TikTok Trends,POV,Lip Sync,Transition,Challenge,Storytime,Duet,1,Science
100031,Twitter Terms,Thread,Quote,Retweet,Mention,Hashtag,Verified,1,Science
100032,Reddit Components,Upvote,Downvote,Subreddit,Karma,Award,Flair,1,Science
100033,LinkedIn Tools,Profile,Network,Job,Skill,Endorse,Connection,1,Science
100034,Discord Features,Server,Channel,Bot,Nitro,Role,Invite,3,Gaming
100035,Snapchat Essentials,Snap,Streak,Lens,Filter,Map,Spotlight,1,Science
100036,Charity Focus Areas,Climate,Education,Health,Poverty,Wildlife,Rights,1,History
100037,Disaster Relief Groups,Red Cross,Team Rubicon,Direct Relief,Mercy Corps,CARE,UNICEF,3,History
100038,Environmental NGOs,WWF,Greenpeace,Sierra Club,Ocean Conservancy,Nature Conservancy,Earthjustice,3,Nature
100039,Human Rights Orgs,Amnesty,HRW,ACLU,Freedom House,Carter Center,Survival,3,History
100040,Health Charities,St. Jude,Mayo Clinic,Red Cross,Heart,Cancer,Alzheimer's,3,Science
100041,Animal Welfare Groups,ASPCA,Humane Society,PETA,Best Friends,IFAW,Animal Welfare Institute,3,Nature
100042,Educational Non-profits,Teach For America,Room to Read,Khan Academy,DonorsChoose,BuildOn,Pratham,3,History
100043,Military Stealth Tech,Radar,Coating,Shape,Noise,Thermal,Infrared,5,Science
100044,Special Forces Units,SEALs,Rangers,Delta,SAS,GIGN,Spetsnaz,3,History
100045,Historical Tanks,Tiger,Sherman,Panther,T-34,Churchill,Panzer,3,History
100046,Aircraft Carriers,Nimitz,Ford,Midway,Enterprise,Yorktown,Saratoga,3,History
100047,Modern Firearms,Rifle,Pistol,Shotgun,Carbine,Sniper,Machine,3,History
100048,Naval Strategy,Blockade,Convoy,Flank,Siege,Patrol,Ambush,3,History
100049,Military Base Zones,Hangar,Barracks,Range,Bunker,Depot,Gate,1,History
100050,Childhood Toys 2010s,Fidget Spinner,Hatchimals,Shopkins,Beyblade,Nerf,Lego,1,History
100051,Modern Cartoons,Bluey,Paw Patrol,Steven Universe,Adventure Time,Regular Show,Gravity Falls,1,History
100052,YouTube Kids Content,Unboxing,Nursery Rhyme,Gaming,Toy Review,Slime,Challenge,1,Science
100053,Modern Board Games,Catan,Ticket to Ride,Pandemic,Carcassonne,Azul,Wingspan,3,Gaming
100054,Modern Card Games,Uno,Phase 10,Magic,Pokémon,Yu-Gi-Oh,Exploding Kittens,1,Gaming
100055,Arcade Classics,Pac-Man,Donkey Kong,Galaga,Asteroids,Centipede,Frogger,1,Gaming
100056,MOBILE GAMES,Angry Birds,Candy Crush,Pokémon Go,Flappy Bird,Subway Surfers,Temple Run,1,Gaming
100057,Tabletop RPGs,D&D,Pathfinder,Starfinder,Cyberpunk,Call of Cthulhu,Shadowrun,3,Gaming
100058,Tourism Types,Eco,Dark,Space,Gastro,Voluntourism,Adventure,3,History
100059,Space Tourism,Orbit,Rocket,Suborbital,Zero-G,Station,View,3,Science
100060,Eco-Tourism Spots,Costa Rica,Galapagos,Amazon,Norway,Kenya,Iceland,3,Nature
100061,Dark Tourism Sites,Chernobyl,Auschwitz,Pompeii,Alcatraz,Ground Zero,Catacombs,3,History
100062,Gastro Tourism,Wine,Street Food,Cooking Class,Festival,Market,Fine Dining,3,Food
100063,Adventure Tourism,Zipline,Rafting,Hiking,Diving,Bungee,Safari,3,Sports
100064,Voluntourism Tasks,Building,Teaching,Conservation,Farming,Health,Mapping,3,History
100065,Luxury Hotel Chains,Ritz-Carlton,Four Seasons,Aman,St. Regis,Rosewood,Waldorf,3,History
100066,Boutique Hotel Features,Unique,Design,Local,Small,Intimate,Stylish,3,History
100067,Hotel Room Items,Minibar,Safe,Robe,Slippers,Keycard,Menu,1,History
100068,Casino Amenities,Spa,Pool,Buffet,Theater,Bar,Lounge,1,Gaming
100069,Casino Table Games,Blackjack,Roulette,Craps,Baccarat,Poker,Sic Bo,1,Gaming
100070,Slot Machine Types,Classic,Video,Progressive,3D,Fruit,Jackpot,3,Gaming
100071,Poker Terminology,Bluff,Ante,Check,Raise,Fold,Pot,3,Gaming
100072,Roulette Bets,Red,Black,Odd,Even,Corner,Street,3,Gaming
100073,Baccarat Terms,Player,Banker,5,Gaming
`,jg=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
110000,Abraham Lincoln,Civil War,Emancipation Proclamation,Gettysburg Address,Honest Abe,Log Cabin,Union,1,History
110001,Actor,Performance,Audition,Role,Stage,Rehearsal,Dialogue,Godfather,Serpico,Scarface,Heat,Cruising,The Insider,Sea of Love,1,History
110002,Actress,Doubt,Manhattan,The Post,Iron Lady,Mamma Mia,Silkwood,Adaptation,1,History
110003,Afternoon Tea,Scone,Crumpet,Darjeeling,Chamomile,1,Food
110004,Agriculture,IRRIGATION,TILLAGE,FALLOW,SILAGE,AGRONOMY,3,Science
110005,Airbnb,Vacation Rental,Hospitality,Homestay,Booking,Guest,Short-term Rental,Superhost,Wishlist,Experience,Luxe,Nightly,Plus,1,History
110006,Albert Einstein,Physics,Relativity,Science,Time,Atom,Space,Spacetime,Photon,Quanta,1,Science
110007,ALBUM,discography,compilation,tracklist,long play,production,GATEFOLD,SLEEVE,BOOKLET,INLAY,3,Music
110008,Alexander the Great,Macedonia,Hellenism,Aristotle,Bucephalus,Persian Empire,King of Kings,Phalanx,Macedon,Issus,Gaugamela,1,History
110009,All Star,elite,accolade,MVP,showcase,selection,1,Sports
110010,Amazon,Prime,Kindle,Alexa,AWS,Cart,Marketplace,Books,Audible,1,History
110011,Amazon River,South America,Brazil,Piranha,Biodiversity,Basin,Rainforest,Anaconda,Manaus,Amazonia,1,Nature
110012,Amelia Earhart,Aviation,Lockheed Electra,Atlantic Ocean,Navigator,Solo Flight,Missing,Pioneer,Howland,Atchison,Purdue,1,History
110013,American Founding Fathers,Madison,Hamilton,Adams,Franklin,1,History
110014,Ancient Roman Sites,Colosseum,Pantheon,Roman Forum,Pompeii,1,History
110015,Angelina Jolie,Salt,Maleficent,Changeling,Gia,Tomb Raider,Alexander,Hackers,1,History
110016,Animals,Dog,Cat,Fish,Lion,Bear,Elephant,Tiger,Cheetah,Giraffe,Zebra,Gorilla,Badger,1,Nature
110017,Anime,Storyboard,CGI,Voice acting,Frame,Rendering,Stop motion,Keyframe,Naruto,Bleach,Akira,Pokemon,Evangelion,One Piece,manga,dubbing,subtitles,studio,character,convention,1,Gaming
110018,Anne Hathaway,Interstellar,Serenity,Rio,Colossal,The Intern,One Day,Havoc,1,History
110019,Ants,Hill,Worker,Tunnel,Crumbs,Insects,Fire,Carpenter,Bullet,Weaver,Harvester,Army,1,Nature
110020,Apple,iPhone,iPad,MacBook,iCloud,Safari,Watch,Store,AirPods,1,Science
110021,Apple Computers,PowerBook,Mac Studio,Mac Pro,Mac mini,Lisa,iMac,3,Science
110022,Apple Pie,Dessert,Fruit,Crust,Cinnamon,Baked,Tradition,Sliced,Lattice,Shortcrust,Streusel,Granny Smith,1,Food
110023,Arizona Tea,Green Tea,Mucho Mango,Ginseng,Sweet Tea,Fruit Punch,Rx Energy,1,Food
110024,Athletic Apparel,Jersey,Helmet,Singlet,Cleats,Trunks,1,Sports
110025,Athletic Competition Areas,Track,Pool,Ring,Pitch,1,Sports
110026,Athletics,Track and field,Decathlon,Heptathlon,Steeplechase,Shot put,Discus throw,Javelin,Hurdles,Triathlon,1,Sports
110027,Atlanta,Braves,Falcons,Hawks,Hartsfield,Marta,Centennial,3,Sports
110028,Automobiles,transmission,chassis,fuel tank,dashboard,headlights,radiator,ignition,exhaust,alternator,Sedan,Coupe,Wagon,Roadster,Hatchback,Convertible,1,Cars
110029,Autumn,Migration,Orchard,Harvest,Foliage,Russet,Ochre,1,Nature
110030,Avatar,Pandora,Na'vi,Eywa,Unobtainium,Banshee,Toruk,1,Science
110031,Babies,Diaper,Pacifier,Rattles,Stroller,Onesie,Crib,1,Nature
110032,Back to the Future,Delorean,McFly,Hoverboard,Almanac,Flux,Marty,1,Science
110033,Bald Eagle,National bird,Symbol,Raptor,Nest,Talons,Predator,United States,Eyrie,Haliaeetus,1,Nature
110034,Band,quartet,trio,members,lead singer,Queen,Nirvana,Oasis,Beatles,1,Music
110035,Barack Obama,Hawaii,Democrat,Michelle Obama,44th President,Healthcare,Hope,Senator,1,History
110036,Barbecue,Grilling,Smoked,Ribs,Sauce,Outdoor,Cookout,Charcoal,Brisket,Mesquite,Dry Rub,Pitmaster,Hickory,1,Food
110037,BASKETBALL FOULS,CHARGING,BLOCKING,TECHNICAL,FLAGRANT,3,Sports
110038,Battery Composition,Anode,Cathode,Lithium,Alkaline,Graphite,Electrolyte,5,Science
110039,Beans,Kidney,Garbanzo,Pinto,Lima,Soy,Navy,Lentil,Fava,1,Food
110040,Bears,Grizzly,Polar,Panda,Kodiak,Sloth,1,Nature
110041,BEAT,groove,pulse,metronome,measure,cadence,TEMPO,RHYTHM,ACCENT,3,Music
110042,Bee Genera,Apis,Bombus,Melipona,Osmia,5,Nature
110043,Beverages,Coffee,Tea,Juice,Soda,Milk,Water,Cider,Cocoa,1,Food
110044,Biological Kingdoms,Bacteria,Archaea,Eukaryote,Fungi,Protist,Animalia,3,Science
110045,Biological Pollinators,Bees,Moths,Beetles,Butterflies,Bats,Birds,3,Nature
110046,Birds,Talon,Plumage,Aviary,Ornithology,Passerine,Fledgling,Albatross,Kestrel,Starling,Falcon,Osprey,Puffin,3,Nature
110047,Blockbuster,Box Office,Franchise,Marketing,Premiere,Special Effects,Sequel,Opening Weekend,Profit,Star Wars,Avengers,Batman,Spider-Man,Shrek,Inception,Iron Man,3,History
110048,BMW,Luxury,Bavarian,X5,M3,Series 3,Series 5,Roadster,Coupe,iX,Alpina,Isetta,Bavaria,2002,1,Cars
110049,BODYWEIGHT EXERCISES,SQUAT,LUNGE,PLANK,PUSHUP,1,Sports
110050,Boss Fight,Phase,Weak Spot,Enrage,Arena,1,Gaming
110051,Branches,Twigs,Bough,Limb,Perch,Sprouting,Sap,,1,Nature
`,Jg=`id,name,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10,word11,word12,word13,word14,word15,word16,word17,word18,word19,word20,word21
70000,50S FASHION,SADDLE SHOES,POODLE SKIRTS,CARDIGAN SWEATERS,CAT EYE GLASSES,SCARF ON HAIR,BOBBY SOCKS,LEATHER JACKET,ROLLED JEANS,1,History
70001,50S CULTURE,DINER CULTURE,DRIVE-IN MOVIES,SOCK HOPS,JUKEBOXES,TUPPERWARE PARTIES,NUCLEAR FAMILY,SUBURBAN SPRAWL,THE DINERS CLUB CARD,1,History
70002,50S TOYS,HULA HOOP,SLINKY,MR POTATO HEAD,PLAY-DOH,SILLY PUTTY,MATCHBOX CARS,FRISBEE,BARBIE,1,History
70003,50S TV SHOWS,I LOVE LUCY,LEAVE IT TO BEAVER,THE HONEYMOONERS,GUNSMOKE,DRAGNET,PERRY MASON,FATHER KNOWS BEST,THE TWILIGHT ZONE,1,History
70004,ELVIS PRESLEY,HOUND DOG,JAILHOUSE ROCK,BLUE SUEDE SHOES,LOVE ME TENDER,HEARTBREAK HOTEL,DONT BE CRUEL,ALL SHOOK UP,KING OF ROCK,1,Music
70005,50S ICONS,MARILYN MONROE,JAMES DEAN,AUDREY HEPBURN,ELIZABETH TAYLOR,GRACE KELLY,FRANK SINATRA,BUDDY HOLLY,CHUCK BERRY,1,History
70006,COLD WAR ERA,SPUTNIK I,BOMB SHELTER,DUCK AND COVER,IRON CURTAIN,SPACE RACE,RED SCARE,MCCARTHYISM,BERLIN WALL,3,History
70007,50S INNOVATIONS,THE POLIO VACCINE,TV DINNERS,CREDIT CARD,COLOR TV,SEAT BELTS,VELCRO,TRANSISTOR RADIO,MICROWAVE,3,History
70008,50S SLANG,COOL CAT,DADDY-O,CRUISIN FOR A BRUISIN,KNUCKLE SANDWICH,THREADS,SQUARE,BURN RUBBER,MADE IN THE SHADE,3,History
70009,GREASER STYLE,GREASE HAIR,BRYLCREEM,LEATHER JACKET,WHITE T-SHIRT,MOTORCYCLE,SWITCHBLADE,COMB,BOOTS,3,History
70010,DOO-WOP GROUPS,THE PLATTERS,THE DRIFTERS,THE COASTERS,THE TEENAGERS,THE ORIOLES,THE CLOVERS,THE FLAMINGOS,THE SKYLINERS,3,Music
70011,BEAT GENERATION,JACK KEROUAC,ALLEN GINSBERG,WILLIAM BURROUGHS,ON THE ROAD,HOWL,POETRY,JAZZ,BOHEMIAN,3,History
70012,60S FASHION,MINISKIRTS,GO-GO BOOTS,TIE-DYE,BELL BOTTOMS,PAISLEY,MOD FASHION,TURTLENECK,PILLBOX HAT,1,History
70013,BRITISH INVASION,THE BEATLES,THE ROLLING STONES,THE WHO,THE KINKS,THE ANIMALS,THE DAVE CLARK FIVE,HERMANS HERMITS,THE YARDBIRDS,1,Music
70014,HIPPIE CULTURE,WOODSTOCK,PEACE SIGNS,FLOWER POWER,HAIGHT-ASHBURY,COMMUNES,LONG HAIR,BEADS,SANDALS,1,History
70015,SPACE RACE,MOON LANDING,APOLLO 11,NEIL ARMSTRONG,BUZZ ALDRIN,NASA,KENNEDY SPACE CENTER,SATURN V,EAGLE,1,Science
70016,60S ACTIVISM,CIVIL RIGHTS MOVEMENT,VIETNAM WAR PROTESTS,WOMENS RIGHTS,FREE SPEECH,MARCH ON WASHINGTON,MLK,SIT-INS,FREEDOM RIDERS,3,History
70017,MOTOWN,THE SUPREMES,THE TEMPTATIONS,STEVIE WONDER,MARVIN GAYE,THE FOUR TOPS,SMOKEY ROBINSON,JACKSON 5,ARETHA FRANKLIN,1,Music
70018,SURF ROCK,BEACH BOYS,JAN AND DEAN,THE VENTURES,THE SURFARIS,WIPEOUT,SURFIN USA,GOOD VIBRATIONS,CALIFORNIA GIRLS,3,Music
70019,60S TV,STAR TREK,THE FLINTSTONES,BATMAN,GET SMART,THE MONKEES,BEWITCHED,THE ADDAMS FAMILY,GILLIGANS ISLAND,1,History
70020,POP ART,ANDY WARHOL,ROY LICHTENSTEIN,SOUP CANS,MARILYN PRINTS,COMIC STRIPS,BOLD COLORS,SILKSCREEN,FACTORY,3,History
70021,60S DANCES,THE TWIST,THE MASHED POTATO,THE SWIM,THE PONY,THE JERK,THE MONKEY,THE WATUSI,THE HITCHHIKER,3,History
70022,FOLK REVIVAL,BOB DYLAN,JOAN BAEZ,PETER PAUL AND MARY,THE BYRDS,SIMON AND GARFUNKEL,JONI MITCHELL,BUFFALO SPRINGFIELD,THE BAND,3,Music
70023,PSYCHEDELIC ROCK,JIMI HENDRIX,THE DOORS,JEFFERSON AIRPLANE,PINK FLOYD,GRATEFUL DEAD,CREAM,JANIS JOPLIN,IRON BUTTERFLY,3,Music
70024,60S CARS,VOLKSWAGEN BEETLE,FORD MUSTANG,CHEVY CAMARO,PONTIAC GTO,DODGE CHARGER,PLYMOUTH BARRACUDA,CORVETTE STINGRAY,JAGUAR E-TYPE,1,Cars
70025,60S TOYS,GI JOE,EASY BAKE OVEN,TWISTER,ETCH A SKETCH,OPERATION,LITE BRITE,HOT WHEELS,BARREL OF MONKEYS,1,History
70026,70S FASHION,BELL-BOTTOMS,PLATFORM SHOES,LEISURE SUITS,JUMPSUITS,POLYESTER,WIDE COLLARS,MOOD RINGS,AFROS,1,History
70027,DISCO ERA,STUDIO 54,BEE GEES,DONNA SUMMER,DISCO BALL,SATURDAY NIGHT FEVER,VILLAGE PEOPLE,ABBA,CHIC,1,Music
70028,70S ROCK,LED ZEPPELIN,QUEEN,AEROSMITH,ACDC,KISS,BLACK SABBATH,THE EAGLES,FLEETWOOD MAC,1,Music
70029,PUNK ROCK,THE RAMONES,SEX PISTOLS,THE CLASH,BLONDIE,IGGY POP,THE STOOGES,DEAD KENNEDYS,PATTI SMITH,1,Music
70030,70S MOVIES,STAR WARS,THE GODFATHER,JAWS,ROCKY,GREASE,TAXI DRIVER,ALIEN,APOCALYPSE NOW,1,History
70031,70S TV,THE BRADY BUNCH,ALL IN THE FAMILY,MASH,CHARLIES ANGELS,HAPPY DAYS,THE MUPPET SHOW,SESAME STREET,GOOD TIMES,1,History
70032,70S TOYS,PET ROCK,RUBIKS CUBE,STAR WARS FIGURES,SIMON,STRETCH ARMSTRONG,CONNECT FOUR,MAGNA DOODLE,SHRINKY DINKS,1,History
70033,70S TECH,APPLE II,ATARI 2600,VCR,WALKMAN,PONG,FLOPPY DISK,CALCULATOR WATCH,CB RADIO,3,Science
70034,WATERGATE,NIXON,DEEP THROAT,TAPES,RESIGNATION,IMPEACHMENT,SCANDAL,WASHINGTON POST,WOODWARD AND BERNSTEIN,3,History
70035,70S SLANG,GROOVY,FAR OUT,DYNO-MITE,PSYCH,BOOGIE,CAN YOU DIG IT,RIGHT ON,KEEP ON TRUCKIN,3,History
70036,70S DECOR,SHAG CARPETING,LAVA LAMPS,MACRAME,AVOCADO GREEN,HARVEST GOLD,BEANBAG CHAIRS,WOOD PANELING,SUNBURST CLOCK,3,History
70037,80S MUSIC,MICHAEL JACKSON,MADONNA,PRINCE,WHITNEY HOUSTON,DURAN DURAN,BON JOVI,GUNS N ROSES,CYNDI LAUPER,1,Music
70038,80S FASHION,LEG WARMERS,SHOULDER PADS,NEON COLORS,ACID WASH JEANS,PARACHUTE PANTS,SCRUNCHIES,SWATCHES,RAY-BANS,1,History
70039,80S MOVIES,THE BREAKFAST CLUB,ET,BACK TO THE FUTURE,GHOSTBUSTERS,FERRIS BUELLERS DAY OFF,TOP GUN,THE TERMINATOR,INDIANA JONES,1,History
70040,80S TV,THE GOLDEN GIRLS,MIAMI VICE,FULL HOUSE,THE COSBY SHOW,CHEERS,FAMILY TIES,SAVED BY THE BELL,ALF,1,History
70041,80S TOYS,CABBAGE PATCH KIDS,TRANSFORMERS,MY LITTLE PONY,CARE BEARS,KOOSH BALL,TEDDY RUXPIN,GAME BOY,NINTENDO NES,1,History
70042,HAIR METAL,MOTLEY CRUE,POISON,DEF LEPPARD,TWISTED SISTER,SKID ROW,WHITESNAKE,WARRANT,RATT,3,Music
70043,NEW WAVE,DEPECHE MODE,THE CURE,TALKING HEADS,THE POLICE,TEARS FOR FEARS,NEW ORDER,THE B-52S,DEVO,3,Music
70044,80S TECH,PERSONAL COMPUTER,CD PLAYER,CAMCORDER,FAX MACHINE,MOBILE PHONE,ANSWERING MACHINE,PAGER,CASSETTE TAPE,3,Science
70045,80S CARTOONS,HE-MAN,THUNDERCATS,GI JOE,TEENAGE MUTANT NINJA TURTLES,DUCKTALES,INSPECTOR GADGET,THE SMURFS,JEM,1,History
70046,MTV ERA,MUSIC VIDEOS,VJS,MOONMAN,TRL,UNPLUGGED,HEADBANGERS BALL,REAL WORLD,VIDEO KILLED THE RADIO STAR,1,Music
70047,80S SLANG,TOTALLY,RADICAL,GNARLY,GAG ME WITH A SPOON,LIKE,DUDE,BODACIOUS,TUBULAR,3,History
70048,JOHN HUGHES MOVIES,SIXTEEN CANDLES,PRETTY IN PINK,WEIRD SCIENCE,UNCLE BUCK,PLANES TRAINS AUTOMOBILES,HOME ALONE,VACATION,3,History
70049,90S GRUNGE,NIRVANA,PEARL JAM,SOUNDGARDEN,ALICE IN CHAINS,STONE TEMPLE PILOTS,FLANNEL SHIRTS,DOC MARTENS,SEATTLE,1,Music
70050,90S POP,BRITNEY SPEARS,NSYNC,BACKSTREET BOYS,SPICE GIRLS,CHRISTINA AGUILERA,DESTINYS CHILD,TLC,HANSON,1,Music
70051,90S HIP HOP,TUPAC,BIGGIE SMALLS,SNOOP DOGG,DR DRE,WU-TANG CLAN,NAUGHTY BY NATURE,SALT-N-PEPA,MC HAMMER,1,Music
70052,90S FASHION,OVERALLS,CROP TOPS,CHOKERS,PLATFORM SNEAKERS,BAGGY JEANS,BUCKET HATS,BUTTERFLY CLIPS,SLAP BRACELETS,1,History
70053,90S TV,FRIENDS,SEINFELD,THE FRESH PRINCE,BUFFY,X-FILES,TWIN PEAKS,MY SO-CALLED LIFE,BOY MEETS WORLD,1,History
70054,90S CARTOONS,RUGRATS,SPONGEBOB,POKEMON,THE SIMPSONS,REN AND STIMPY,DEXTERS LAB,POWERPUFF GIRLS,ANIMANIACS,1,History
70055,90S TOYS,BEANIE BABIES,TAMAGOTCHI,FURBY,POGS,TICKLE ME ELMO,POLLY POCKET,BOP IT,SUPER SOAKER,1,History
70056,90S TECH,THE INTERNET,DIAL-UP,AOL,CHAT ROOMS,NAPSTER,DVD,PLAYSTATION,GOOGLE,1,Science
70057,90S MOVIES,TITANIC,JURASSIC PARK,THE LION KING,FORREST GUMP,PULP FICTION,THE MATRIX,HOME ALONE,CLUELESS,1,History
70058,90S SNACKS,DUNKAROOS,FRUIT ROLL-UPS,GUSHERS,LUNCHABLES,SURGE,CLEAR PEPSI,BAGEL BITES,POP-TARTS,1,Food
70059,2000S TECH,IPOD,FLIP PHONES,BLACKBERRY,MYSPACE,FACEBOOK,YOUTUBE,USB DRIVES,FLAT SCREEN TV,1,Science
70060,2000S FASHION,LOW-RISE JEANS,TRUCKER HATS,VELOUR TRACKSUITS,UGG BOOTS,VON DUTCH,LIVESTRONG BRACELETS,CROCS,SKINNY SCARVES,1,History
70061,2000S POP PUNK,BLINK-182,GREEN DAY,SUM 41,AVRIL LAVIGNE,GOOD CHARLOTTE,FALL OUT BOY,PARAMORE,SIMPLE PLAN,1,Music
70062,2000S HIP HOP,EMINEM,JAY-Z,KANYE WEST,50 CENT,OUTKAST,LIL WAYNE,MISSY ELLIOTT,NELLEY,1,Music
70063,2000S MOVIES,HARRY POTTER,LORD OF THE RINGS,SHREK,MEAN GIRLS,SPIDER-MAN,PIRATES OF THE CARIBBEAN,AVATAR,THE DARK KNIGHT,1,History
70064,REALITY TV BOOM,SURVIVOR,AMERICAN IDOL,THE BACHELOR,BIG BROTHER,JERSEY SHORE,KEEPING UP WITH THE KARDASHIANS,THE SIMPLE LIFE,FEAR FACTOR,1,History
70065,2000S TOYS,BEYBLADE,BRATZ DOLLS,WEBKINZ,XBOX 360,WII,RAZOR SCOOTERS,SILLY BANDZ,ZHUZHU PETS,1,History
70066,SOCIAL MEDIA RISE,FRIENDSTER,MYSPACE,FACEBOOK,TWITTER,LINKEDIN,FLICKR,TUMBLR,REDDIT,1,Science
70067,2010S TECH,IPAD,INSTAGRAM,SNAPCHAT,UBER,AIRBNB,SIRI,ALEXA,SMARTWATCH,VR HEADSETS,1,Science
70068,2010S TRENDS,ICE BUCKET CHALLENGE,HARLEM SHAKE,PLANKING,FIDGET SPINNERS,POKEMON GO,FLOSSING,BOTTLE FLIP,MANNEQUIN CHALLENGE,1,History
70069,STREAMING ERA,NETFLIX,HULU,SPOTIFY,AMAZON PRIME,DISNEY PLUS,BINGE WATCHING,PODCASTS,TWITCH,1,Science
70070,MCU MOVIES,IRON MAN,THE AVENGERS,BLACK PANTHER,GUARDIANS OF THE GALAXY,CAPTAIN AMERICA,THOR,DOCTOR STRANGE,ANT-MAN,1,History
70071,MODERN SLANG,SELFIE,YOLO,FOMO,BAE,GHOSTING,TEA,SALTY,LIT,SAVAGE,1,History
70072,MEME CULTURE,GRUMPY CAT,DOGE,DISTRACTED BOYFRIEND,PEPE,WOJAK,SUCCESS KID,BAD LUCK BRIAN,KEX,1,History
70073,K-POP EXPLOSION,BTS,BLACKPINK,EXO,TWICE,PSY,RED VELVET,SEVENTEEN,NCT,1,Music
70074,GAMING CRAZES,MINECRAFT,FORTNITE,AMONG US,ROBLOX,ANIMAL CROSSING,LEAGUE OF LEGENDS,CALL OF DUTY,OVERWATCH,1,Gaming
70075,FOOD TRENDS,AVOCADO TOAST,KALE,QUINOA,PUMPKIN SPICE,ACAI BOWLS,BUBBLE TEA,SRIRACHA,IMPOSSIBLE BURGER,1,Food
70076,FAIRY TALES,CINDERELLA,LITTLE RED RIDING HOOD,HANSEL AND GRETEL,RAPUNZEL,SNOW WHITE,SLEEPING BEAUTY,RUMPELSTILTSKIN,JACK AND THE BEANSTALK,1,History
70077,AESOPS FABLES,THE TORTOISE AND THE HARE,THE BOY WHO CRIED WOLF,THE FOX AND THE GRAPES,THE LION AND THE MOUSE,THE ANT AND THE GRASSHOPPER,THE CROW AND THE PITCHER,THE DOG AND ITS REFLECTION,3,History
70078,GRIMM CHARACTERS,THE BIG BAD WOLF,THE WICKED WITCH,THE FROG PRINCE,THE EVIL STEPMOTHER,THE HUNTSMAN,THE SEVEN DWARFS,THE FAIRY GODMOTHER,3,History
70079,BIBLE FIGURES OT,NOAH,MOSES,ABRAHAM,ADAM,EVE,DAVID,GOLIATH,SAMSON,DELILAH,JONAH,SOLOMON,1,History
70080,BIBLE FIGURES NT,JESUS,MARY,JOSEPH,PETER,PAUL,JUDAS ISCARIOT,JOHN THE BAPTIST,PONTIUS PILATE,MARY MAGDALENE,1,History
70081,BIBLE STORIES,THE ARK,THE EXODUS,THE TEN COMMANDMENTS,THE LAST SUPPER,THE NATIVITY,THE RESURRECTION,DANIEL IN THE LIONS DEN,THE GOOD SAMARITAN,1,History
70082,ANCIENT WONDERS,GREAT PYRAMID OF GIZA,HANGING GARDENS,STATUE OF ZEUS,TEMPLE OF ARTEMIS,MAUSOLEUM AT HALICARNASSUS,COLOSSUS OF RHODES,LIGHTHOUSE OF ALEXANDRIA,3,History
70083,FAMOUS LANDMARKS,EIFFEL TOWER,STATUE OF LIBERTY,TAJ MAHAL,GREAT WALL OF CHINA,COLOSSEUM,BIG BEN,MACHU PICCHU,CHRIST THE REDEEMER,1,History
70084,GOTHIC ARCHITECTURE,NOTRE-DAME,POINTED ARCHES,FLYING BUTTRESSES,STAINED GLASS,RIBBED VAULTS,GARGOYLES,SPIRES,WESTMINSTER ABBEY,5,History
70085,MODERN ARCHITECTURE,EMPIRE STATE BUILDING,BURJ KHALIFA,SYDNEY OPERA HOUSE,GUGGENHEIM MUSEUM,THE SHARD,CN TOWER,SPACE NEEDLE,PETRONAS TOWERS,3,History
70086,ARCHITECTURAL STYLES,ART DECO,BAUHAUS,BRUTALISM,NEOCLASSICAL,BYZANTINE,RENAISSANCE,BAROQUE,VICTORIAN,MODERNISM,5,History
70087,FAMOUS ARCHITECTS,FRANK LLOYD WRIGHT,ZAHA HADID,LE CORBUSIER,GAUDI,MICHELANGELO,IM PEI,FRANK GEHRY,NORMAN FOSTER,5,History
70088,BUILDING PARTS,FOUNDATION,BEAM,COLUMN,FACADE,ROOF,ATRIUM,CORNICE,ARCH,BUTTRESS,3,Science
70089,BRIDGES,BROOKLYN BRIDGE,GOLDEN GATE,TOWER BRIDGE,SYDNEY HARBOUR,RIVER KWAI,CHARLES BRIDGE,RIALTO,AKASHI KAIKYO,3,History
70090,ART MUSEUMS,THE LOUVRE,THE MET,MOMA,THE HERMITAGE,THE PRADO,THE UFFIZI,TATE MODERN,RIJKSMUSEUM,3,History
70091,FAMOUS PAINTINGS,MONA LISA,STARRY NIGHT,THE SCREAM,THE LAST SUPPER,GUERNICA,GIRL WITH A PEARL EARRING,THE BIRTH OF VENUS,AMERICAN GOTHIC,3,History
70092,SCULPTURES,DAVID,THE THINKER,VENUS DE MILO,THE PIETA,WINGED VICTORY,TERRACOTTA ARMY,MOAI,MOUNT RUSHMORE,3,History
70093,CLASSICAL COMPOSERS,BEETHOVEN,MOZART,BACH,CHOPIN,TCHAIKOVSKY,VIVALDI,BRAHMS,HANDEL,SCHUBERT,3,Music
70094,OPERA TERMS,ARIA,SOPRANO,TENOR,BARITONE,OVERTURE,LIBRETTO,DIVA,ENCORE,VIBRATO,5,Music
70095,JAZZ LEGENDS,LOUIS ARMSTRONG,MILES DAVIS,JOHN COLTRANE,DUKE ELLINGTON,ELLA FITZGERALD,BILLIE HOLIDAY,CHARLIE PARKER,DIZZY GILLESPIE,3,Music
70096,DANCE STYLES,BALLET,TAP,JAZZ,SALSA,HIP HOP,TANGO,WALTZ,CONTEMPORARY,FLAMENCO,3,History
70097,THEATER TERMS,STAGE,CURTAIN CALL,MONOLOGUE,SOLILOQUY,PROPS,BACKSTAGE,UNDERSTUDY,PLAYBILL,BOX OFFICE,3,History
70098,MUSICALS,HAMILTON,WICKED,THE PHANTOM OF THE OPERA,LES MISERABLES,CATS,THE LION KING,CHICAGO,RENT,1,Music
70099,LITERARY GENRES,MYSTERY,FANTASY,SCIENCE FICTION,ROMANCE,THRILLER,HORROR,BIOGRAPHY,HISTORICAL FICTION,1,History
70100,SHAKESPEARE PLAYS,ROMEO AND JULIET,HAMLET,MACBETH,OTHELLO,A MIDSUMMER NIGHTS DREAM,KING LEAR,THE TEMPEST,JULIUS CAESAR,3,History
70101,POETRY TERMS,RHYME,METER,STANZA,HAIKU,SONNET,ALLITERATION,METAPHOR,SIMILE,IMAGERY,5,History
70102,MYTHOLOGICAL BEASTS,DRAGON,UNICORN,PHOENIX,GRIFFIN,HYDRA,MINOTAUR,CENTAUR,PEGASUS,CHIMERA,1,History
70103,GREEK GODS,ZEUS,HERA,POSEIDON,HADES,ATHENA,APOLLO,ARTEMIS,ARES,APHRODITE,1,History
70104,NORSE GODS,ODIN,THOR,LOKI,FREYA,FRIGG,BALDER,TYR,HEIMDALL,HEL,3,History
70105,EGYPTIAN GODS,RA,OSIRIS,ISIS,HORUS,ANUBIS,THOTH,SETH,BASTET,HATHOR,3,History
70106,HARRY POTTER HOUSES,GRYFFINDOR,SLYTHERIN,RAVENCLAW,HUFFLEPUFF,1,History
70107,HARRY POTTER CHARACTERS,HARRY POTTER,RON WEASLEY,HERMIONE GRANGER,ALBUS DUMBLEDORE,SEVERUS SNAPE,DRACO MALFOY,RUBEUS HAGRID,SIRIUS BLACK,1,History
70108,LORD OF THE RINGS RACES,HOBBITS,ELVES,DWARVES,MEN,ORCS,WIZARDS,ENTS,GOBLINS,3,History
70109,STAR WARS PLANETS,TATOOINE,HOTH,ENDOR,NABOO,CORUSCANT,DAGOBAH,MUSTAFAR,JAKKU,3,History
70110,STAR WARS SHIPS,MILLENNIUM FALCON,X-WING,TIE FIGHTER,STAR DESTROYER,DEATH STAR,SLAVE I,RAZOR CREST,3,History
70111,MARVEL HEROES,IRON MAN,CAPTAIN AMERICA,THOR,HULK,BLACK WIDOW,SPIDER-MAN,BLACK PANTHER,DOCTOR STRANGE,1,History
70112,MARVEL VILLAINS,THANOS,LOKI,ULTRON,RED SKULL,MAGNETO,VENOM,GREEN GOBLIN,DOCTOR DOOM,1,History
70113,DC HEROES,SUPERMAN,BATMAN,WONDER WOMAN,THE FLASH,AQUAMAN,CYBORG,GREEN LANTERN,SHAZAM,1,History
70114,DC VILLAINS,THE JOKER,LEX LUTHOR,DARKSEID,CATWOMAN,THE PENGUIN,THE RIDDLER,BANE,HARLEY QUINN,1,History
70115,VIDEO GAME CONSOLES,NINTENDO SWITCH,PLAYSTATION,XBOX,SEGA GENESIS,ATARI,GAME BOY,DREAMCAST,SUPER NINTENDO,1,Gaming
70116,MARIO CHARACTERS,MARIO,LUIGI,PEACH,BOWSER,YOSHI,TOAD,WARIO,WALUIGI,DONKEY KONG,1,Gaming
70117,POKEMON TYPES,FIRE,WATER,GRASS,ELECTRIC,PSYCHIC,ROCK,GROUND,ICE,DRAGON,GHOST,3,Gaming
70118,ZELDA ITEMS,MASTER SWORD,HYLIAN SHIELD,BOOMERANG,HOOKSHOT,BOW AND ARROW,BOMBS,OCARINA,TRIFORCE,3,Gaming
70119,MINECRAFT BLOCKS,DIRT,STONE,WOOD,DIAMOND ORE,OBSIDIAN,SAND,GRAVEL,COBBLESTONE,3,Gaming
70120,FORTNITE TERMS,BATTLE BUS,TILTED TOWERS,FLOSS,CHUG JUG,SCAR,BUILDING,SKINS,VICTORY ROYALE,3,Gaming
70121,SOCIAL MEDIA APPS,INSTAGRAM,TIKTOK,SNAPCHAT,TWITTER,FACEBOOK,REDDIT,PINTEREST,LINKEDIN,1,Science
70122,COMPUTER PARTS,CPU,GPU,RAM,MOTHERBOARD,HARD DRIVE,POWER SUPPLY,CASE,COOLING FAN,3,Science
70123,CODING LANGUAGES,PYTHON,JAVASCRIPT,JAVA,C++,RUBY,SWIFT,PHP,HTML,CSS,5,Science
70124,APPLE DEVICES,IPHONE,IPAD,MACBOOK,IMAC,APPLE WATCH,AIRPODS,APPLE TV,HOMEPOD,1,Science
70125,GOOGLE SERVICES,SEARCH,GMAIL,MAPS,DRIVE,YOUTUBE,CHROME,ANDROID,PHOTOS,1,Science
70126,SPACE BODIES,SUN,MOON,PLANET,STAR,ASTEROID,COMET,BLACK HOLE,NEBULA,GALAXY,1,Science
70127,SOLAR SYSTEM,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN,URANUS,NEPTUNE,1,Science
70128,CONSTELLATIONS,ORION,URSA MAJOR,CASSIOPEIA,SCORPIUS,LEO,GEMINI,TAURUS,PEGASUS,3,Science
70129,US COINS,PENNY,NICKEL,DIME,QUARTER,HALF DOLLAR,DOLLAR COIN,1,History
70130,US BILLS,ONE,TWO,FIVE,TEN,TWENTY,FIFTY,HUNDRED,1,History
70131,BOARD GAMES,MONOPOLY,SCRABBLE,CLUE,RISK,SORRY,LIFE,CANDY LAND,CHUTES AND LADDERS,1,History
70132,CARD GAMES,POKER,BLACKJACK,SOLITAIRE,GO FISH,WAR,CRAZY EIGHTS,OLD MAID,RUMMY,1,History
70133,CHESS PIECES,KING,QUEEN,ROOK,BISHOP,KNIGHT,PAWN,1,History
70134,CASINO GAMES,SLOTS,ROULETTE,CRAPS,BACCARAT,KENO,BINGO,POKER,1,History
70135,BOWLING TERMS,STRIKE,SPARE,GUTTER,SPLIT,FRAME,PIN,LANE,TURKEY,3,Sports
70136,GOLF TERMS,BIRDIE,EAGLE,BOGEY,PAR,HOLE IN ONE,DRIVER,PUTTER,FAIRWAY,BUNKER,3,Sports
70137,TENNIS TERMS,LOVE,DEUCE,ACE,FAULT,SERVE,VOLLEY,RALLY,MATCH POINT,3,Sports
70138,BASEBALL POSITIONS,PITCHER,CATCHER,FIRST BASE,SHORTSTOP,OUTFIELD,UMPIRE,BATTER,1,Sports
70139,FOOTBALL POSITIONS,QUARTERBACK,RUNNING BACK,RECEIVER,LINEBACKER,KICKER,TACKLE,CENTER,1,Sports
70140,BASKETBALL POSITIONS,POINT GUARD,SHOOTING GUARD,FORWARD,CENTER,COACH,REFEREE,1,Sports
70141,SOCCER POSITIONS,GOALKEEPER,DEFENDER,MIDFIELDER,STRIKER,FORWARD,WINGER,1,Sports
70142,HOCKEY POSITIONS,GOALIE,CENTER,WINGER,DEFENSEMAN,CAPTAIN,1,Sports
70143,OLYMPIC SUMMER SPORTS,SWIMMING,GYMNASTICS,TRACK AND FIELD,VOLLEYBALL,BASKETBALL,SOCCER,TENNIS,BOXING,1,Sports
70144,OLYMPIC WINTER SPORTS,SKIING,SNOWBOARDING,ICE SKATING,HOCKEY,CURLING,BOBSLED,LUGE,1,Sports
70145,MARTIAL ARTS,KARATE,JUDO,TAEKWONDO,KUNG FU,JIU-JITSU,BOXING,MUAY THAI,WRESTLING,1,Sports
70146,YOGA POSES,DOWNWARD DOG,TREE,WARRIOR,COBRA,CHILD'S POSE,LOTUS,PLANK,BRIDGE,3,Sports
70147,GYM EQUIPMENT,TREADMILL,DUMBBELL,BARBELL,BENCH PRESS,ELLIPTICAL,ROWING MACHINE,KETTLEBELL,1,Sports
70148,COFFEE DRINKS,ESPRESSO,LATTE,CAPPUCCINO,MOCHA,AMERICANO,COLD BREW,MACCHIATO,FRAPPUCCINO,1,Food
70149,TEA TYPES,GREEN,BLACK,HERBAL,CHAI,EARL GREY,MATCHA,OOLONG,CHAMOMILE,1,Food
70150,SODA BRANDS,COCA-COLA,PEPSI,SPRITE,DR PEPPER,MOUNTAIN DEW,FANTA,GINGER ALE,ROOT BEER,1,Food
70151,JUICE TYPES,ORANGE,APPLE,GRAPE,CRANBERRY,PINEAPPLE,TOMATO,GRAPEFRUIT,LEMONADE,1,Food
70152,ALCOHOL TYPES,BEER,WINE,WHISKEY,VODKA,RUM,GIN,TEQUILA,CHAMPAGNE,1,Food
70153,PASTA SHAPES,SPAGHETTI,PENNE,MACARONI,LASAGNA,RAVIOLI,LINGUINE,FETTUCCINE,BOW TIE,3,Food
70154,PIZZA TOPPINGS,PEPPERONI,MUSHROOMS,SAUSAGE,ONIONS,PEPPERS,BACON,OLIVES,PINEAPPLE,1,Food
70155,SUSHI TYPES,NIGIRI,SASHIMI,MAKI,CALIFORNIA ROLL,SPICY TUNA,DRAGON ROLL,TEMPURA,3,Food
70156,MEXICAN FOOD,TACOS,BURRITOS,ENCHILADAS,QUESADILLAS,GUACAMOLE,SALSA,NACHOS,FAJITAS,1,Food
70157,ITALIAN FOOD,PIZZA,PASTA,RISOTTO,LASAGNA,GELATO,TIRAMISU,CANOLI,PESTO,1,Food
70158,CHINESE FOOD,FRIED RICE,CHOW MEIN,DUMPLINGS,SPRING ROLLS,KUNG PAO CHICKEN,WONTON SOUP,PEKING DUCK,1,Food
70159,INDIAN FOOD,CURRY,NAAN,SAMOSA,TANDOORI CHICKEN,TIKKA MASALA,BIRYANI,CHUTNEY,1,Food
70160,DESSERTS,CAKE,PIE,COOKIES,ICE CREAM,BROWNIES,PUDDING,CHEESECAKE,DONUTS,1,Food
70161,FRUITS,APPLE,BANANA,ORANGE,GRAPE,STRAWBERRY,BLUEBERRY,WATERMELON,PINEAPPLE,1,Nature
70162,VEGETABLES,CARROT,BROCCOLI,POTATO,CORN,SPINACH,ONION,TOMATO,PEPPER,1,Nature
70163,BERRIES,STRAWBERRY,RASPBERRY,BLUEBERRY,BLACKBERRY,CRANBERRY,GOOSEBERRY,1,Nature
70164,NUTS,ALMOND,PEANUT,CASHEW,WALNUT,PISTACHIO,PECAN,HAZELNUT,1,Nature
70165,HERBS,BASIL,OREGANO,THYME,ROSEMARY,MINT,PARSLEY,CILANTRO,DILL,3,Nature
70166,SPICES,CINNAMON,PEPPER,SALT,CUMIN,PAPRIKA,GINGER,NUTMEG,TURMERIC,3,Food
70167,DAIRY PRODUCTS,MILK,CHEESE,YOGURT,BUTTER,CREAM,ICE CREAM,SOUR CREAM,1,Food
70168,MEAT CUTS,STEAK,RIBS,CHOPS,GROUND BEEF,BACON,HAM,ROAST,BRISKET,3,Food
70169,POULTRY,CHICKEN,TURKEY,DUCK,GOOSE,QUAIL,PHEASANT,1,Nature
70170,SEAFOOD,SHRIMP,CRAB,LOBSTER,SALMON,TUNA,CLAMS,OYSTERS,SQUID,1,Nature
70171,BREAD TYPES,WHITE,WHEAT,SOURDOUGH,RYE,BAGUETTE,CIABATTA,BAGEL,CROISSANT,1,Food
70172,BREAKFAST ITEMS,EGGS,TOAST,PANCAKES,WAFFLES,CEREAL,OATMEAL,BACON,SAUSAGE,1,Food
70173,CONDIMENTS,KETCHUP,MUSTARD,MAYO,RELISH,BBQ SAUCE,SOY SAUCE,RANCH,HOT SAUCE,1,Food
70174,COOKING METHODS,BAKE,FRY,BOIL,GRILL,ROAST,STEAM,SAUTE,POACH,3,Food
70175,KITCHEN APPLIANCES,OVEN,STOVE,FRIDGE,MICROWAVE,TOASTER,BLENDER,DISHWASHER,MIXER,1,Science
70176,KITCHEN UTENSILS,SPOON,FORK,KNIFE,SPATULA,WHISK,LADLE,TONGS,PEELER,1,Science
70177,FURNITURE,SOFA,CHAIR,TABLE,BED,DRESSER,DESK,BOOKSHELF,CABINET,1,History
70178,ROOMS,KITCHEN,LIVING ROOM,BEDROOM,BATHROOM,DINING ROOM,GARAGE,ATTIC,BASEMENT,1,History
70179,BEDDING,SHEETS,PILLOW,BLANKET,COMFORTER,MATTRESS,DUVET,QUILT,1,History
70180,BATHROOM ITEMS,TOILET,SINK,SHOWER,TUB,TOWEL,SOAP,TOOTHBRUSH,MIRROR,1,History
70181,CLOTHING TOPS,SHIRT,SWEATER,JACKET,COAT,HOODIE,TANK TOP,BLOUSE,VEST,1,History
70182,CLOTHING BOTTOMS,PANTS,SHORTS,JEANS,SKIRT,LEGGINGS,SWEATPANTS,TROUSERS,1,History
70183,FOOTWEAR,SHOES,SNEAKERS,BOOTS,SANDALS,HEELS,SLIPPERS,SOCKS,1,History
70184,ACCESSORIES,HAT,SCARF,GLOVES,BELT,TIE,WATCH,GLASSES,JEWELRY,1,History
70185,JEWELRY,RING,NECKLACE,EARRING,BRACELET,WATCH,BROOCH,PENDANT,1,History
70186,FABRICS,COTTON,WOOL,SILK,DENIM,LEATHER,POLYESTER,NYLON,VELVET,3,History
70187,PATTERNS,STRIPES,POLKA DOTS,PLAID,FLORAL,CHECKERED,ANIMAL PRINT,PAISLEY,3,History
70188,COLORS,RED,BLUE,GREEN,YELLOW,ORANGE,PURPLE,PINK,BLACK,WHITE,1,Nature
70189,SHAPES,CIRCLE,SQUARE,TRIANGLE,RECTANGLE,OVAL,STAR,HEART,DIAMOND,1,Science
70190,MATH TERMS,ADD,SUBTRACT,MULTIPLY,DIVIDE,EQUALS,FRACTION,DECIMAL,PERCENT,1,Science
70191,SCIENCE FIELDS,BIOLOGY,CHEMISTRY,PHYSICS,ASTRONOMY,GEOLOGY,BOTANY,ZOOLOGY,1,Science
70192,SCHOOL SUBJECTS,MATH,SCIENCE,ENGLISH,HISTORY,ART,MUSIC,GYM,GEOGRAPHY,1,History
70193,SCHOOL SUPPLIES,PENCIL,PEN,PAPER,NOTEBOOK,BINDER,RULER,ERASER,GLUE,1,History
70194,OFFICE SUPPLIES,STAPLER,TAPE,SCISSORS,CLIPS,FOLDERS,MARKERS,WHITEBOARD,ENVELOPES,1,History
70195,TRANSPORTATION,CAR,BUS,TRAIN,PLANE,BOAT,BIKE,SUBWAY,TAXI,1,Science
70196,AIRPORT TERMS,GATE,RUNWAY,PILOT,TICKET,LUGGAGE,SECURITY,PASSPORT,BOARDING,3,Science
70197,TRAIN TERMS,TRACK,CONDUCTOR,STATION,PLATFORM,CABOOSE,TICKET,RAIL,3,Science
70198,CAR PARTS,WHEEL,TIRE,ENGINE,BRAKE,STEERING WHEEL,SEAT,WINDOW,DOOR,3,Cars
70199,ROAD SIGNS,STOP,YIELD,SPEED LIMIT,ONE WAY,DO NOT ENTER,NO PARKING,CROSSWALK,1,Cars
70200,EMERGENCY VEHICLES,POLICE CAR,FIRE TRUCK,AMBULANCE,TOW TRUCK,HELICOPTER,1,Cars
70201,CITY BUILDINGS,SKYSCRAPER,LIBRARY,SCHOOL,HOSPITAL,BANK,MUSEUM,STORE,POST OFFICE,1,History
70202,FARM ITEMS,TRACTOR,BARN,SILO,FENCE,PLOW,HAY,CROP,LIVESTOCK,1,Nature
70203,ZOO ANIMALS,LION,TIGER,BEAR,ELEPHANT,GIRAFFE,ZEBRA,MONKEY,HIPPO,1,Nature
70204,PETS,DOG,CAT,FISH,BIRD,HAMSTER,RABBIT,TURTLE,SNAKE,1,Nature
70205,FOREST ANIMALS,DEER,FOX,SQUIRREL,RACCOON,OWL,BEAR,MOOSE,WOLF,1,Nature
70206,OCEAN LIFE,SHARK,WHALE,DOLPHIN,CRAB,OCTOPUS,JELLYFISH,SEAL,STARFISH,1,Nature
70207,INSECTS,ANT,BEE,FLY,MOSQUITO,BUTTERFLY,LADYBUG,SPIDER,BEETLE,1,Nature
70208,BIRDS,EAGLE,ROBIN,BLUE JAY,CARDINAL,OWL,HAWK,PENGUIN,DUCK,1,Nature
70209,FLOWERS,ROSE,TULIP,DAISY,SUNFLOWER,LILY,ORCHID,VIOLET,CARNATION,1,Nature
70210,TREES,OAK,PINE,MAPLE,PALM,WILLOW,BIRCH,REDWOOD,CHERRY,1,Nature
70211,WEATHER,SUN,RAIN,SNOW,WIND,CLOUD,STORM,FOG,HAIL,1,Nature
70212,SEASONS,SPRING,SUMMER,FALL,WINTER,AUTUMN,1,Nature
70213,MONTHS,JANUARY,FEBRUARY,MARCH,APRIL,MAY,JUNE,JULY,AUGUST,1,History
70214,DAYS,MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY,SUNDAY,1,History
70215,HOLIDAYS,CHRISTMAS,HALLOWEEN,THANKSGIVING,EASTER,NEW YEARS,VALENTINES,INDEPENDENCE DAY,1,History
70216,FAMILY,MOTHER,FATHER,SISTER,BROTHER,GRANDMA,GRANDPA,AUNT,UNCLE,1,History
70217,FEELINGS,HAPPY,SAD,ANGRY,SCARED,EXCITED,BORED,TIRED,SURPRISED,1,Science
70218,SENSES,SIGHT,HEARING,TASTE,SMELL,TOUCH,BALANCE,PAIN,1,Science
70219,BODY PARTS,HEAD,ARM,LEG,HAND,FOOT,EYE,NOSE,MOUTH,1,Science
70220,INTERNAL ORGANS,HEART,LUNGS,STOMACH,LIVER,KIDNEY,BRAIN,INTESTINE,BLADDER,3,Science
70221,BONE NAMES,SKULL,RIB,FEMUR,SPINE,PELVIS,TIBIA,FIBULA,RADIUS,5,Science
70222,HEALTH CARE,DOCTOR,NURSE,HOSPITAL,MEDICINE,BANDAGE,SHOT,X-RAY,CAST,1,Science
70223,DENTAL CARE,TOOTHBRUSH,TOOTHPASTE,FLOSS,DENTIST,CAVITY,BRACES,FILLINGS,CHECKUP,1,Science
70224,HYGIENE,SOAP,SHAMPOO,DEODORANT,LOTION,TOWEL,SHOWER,BATH,COMB,1,Science
70225,MAKEUP,LIPSTICK,MASCARA,BLUSH,EYELINER,FOUNDATION,POWDER,CONCEALER,EYESHADOW,1,History
70226,HAIR STYLES,BRAID,PONYTAIL,BUN,CURLS,STRAIGHT,BOB,PIXIE,FADE,3,History
70227,SKIN CARE,CLEANSER,MOISTURIZER,SERUM,TONER,SUNSCREEN,MASK,SCRUB,OIL,3,Science
70228,SLEEP,BED,PILLOW,BLANKET,DREAM,NIGHT,NAP,SNORE,PAJAMAS,1,Science
70229,HOBBIES,READING,PAINTING,GARDENING,COOKING,HIKING,FISHING,KNITTING,GAMING,1,History
70230,OUTDOOR ACTIVITIES,CAMPING,HIKING,BIKING,SWIMMING,RUNNING,PICNIC,FISHING,SKATING,1,Nature
70231,INDOOR ACTIVITIES,PUZZLES,BOARD GAMES,READING,MOVIES,COOKING,CRAFTS,VIDEO GAMES,YOGA,1,History
70232,CRAFTS,KNITTING,SEWING,PAINTING,DRAWING,ORIGAMI,SCRAPBOOKING,POTTERY,JEWELRY,3,History
70233,MUSIC GENRES,ROCK,POP,JAZZ,COUNTRY,RAP,CLASSICAL,BLUES,REGGAE,1,Music
70234,MUSICAL INSTRUMENTS,GUITAR,PIANO,DRUMS,VIOLIN,FLUTE,TRUMPET,SAXOPHONE,CELLO,1,Music
70235,ART SUPPLIES,PAINT,BRUSH,CANVAS,PENCIL,MARKER,CRAYON,CLAY,PAPER,1,History
70236,COLORS SHADES,CRIMSON,AZURE,EMERALD,INDIGO,OCHRE,MAGENTA,TEAL,MAROON,3,Nature
70237,LITERATURE GENRES,MYSTERY,FANTASY,SCI-FI,ROMANCE,THRILLER,HORROR,HISTORY,POETRY,1,History
70238,BOOK PARTS,COVER,PAGE,CHAPTER,TITLE,AUTHOR,SPINE,INDEX,PROLOGUE,3,History
70239,WRITING TOOLS,PEN,PENCIL,PAPER,NOTEBOOK,COMPUTER,TYPEWRITER,ERASER,HIGHLIGHTER,1,History
70240,LANGUAGE PARTS,NOUN,VERB,ADJECTIVE,ADVERB,PRONOUN,PREPOSITION,CONJUNCTION,INTERJECTION,3,History
70241,PUNCTUATION,PERIOD,COMMA,QUESTION,EXCLAMATION,COLON,SEMICOLON,DASH,QUOTE,3,History
70242,GEOMETRY SHAPES,SQUARE,CIRCLE,TRIANGLE,RECTANGLE,OVAL,DIAMOND,HEXAGON,PENTAGON,1,Science
70243,MATH OPERATIONS,ADDITION,SUBTRACTION,MULTIPLICATION,DIVISION,ALGEBRA,CALCULUS,GEOMETRY,STATISTICS,1,Science
70244,SCIENCE BRANCHES,BIOLOGY,CHEMISTRY,PHYSICS,ASTRONOMY,GEOLOGY,ECOLOGY,BOTANY,ZOOLOGY,1,Science
70245,LAB EQUIPMENT,MICROSCOPE,BEAKER,TEST TUBE,FLASK,BURNER,SCALE,PIPETTE,GOGGLES,3,Science
70246,WEATHER PHENOMENA,THUNDER,LIGHTNING,TORNADO,HURRICANE,RAINBOW,FOG,SNOW,HAIL,3,Nature
70247,NATURAL DISASTERS,EARTHQUAKE,VOLCANO,FLOOD,DROUGHT,TSUNAMI,WILDFIRE,BLIZZARD,CYCLONE,1,Nature
70248,LANDFORMS,MOUNTAIN,VALLEY,HILL,PLAIN,PLATEAU,ISLAND,PENINSULA,CANYON,3,Nature
70249,WATER BODIES,OCEAN,SEA,LAKE,RIVER,STREAM,POND,BAY,CREEK,1,Nature
70250,CONTINENTS,AFRICA,ASIA,EUROPE,NORTH AMERICA,SOUTH AMERICA,AUSTRALIA,ANTARCTICA,1,Nature
70251,COUNTRIES EUROPE,FRANCE,GERMANY,ITALY,SPAIN,UK,GREECE,SWEDEN,NORWAY,1,History
70252,COUNTRIES ASIA,CHINA,JAPAN,INDIA,KOREA,VIETNAM,THAILAND,INDONESIA,TURKEY,1,History
70253,COUNTRIES AMERICAS,USA,CANADA,MEXICO,BRAZIL,ARGENTINA,CHILE,PERU,COLOMBIA,1,History
70254,COUNTRIES AFRICA,EGYPT,NIGERIA,KENYA,SOUTH AFRICA,MOROCCO,ETHIOPIA,GHANA,TANZANIA,1,History
70255,US STATES,CALIFORNIA,TEXAS,NEW YORK,FLORIDA,ILLINOIS,OHIO,GEORGIA,MICHIGAN,1,History
70256,WORLD CAPITALS,LONDON,PARIS,TOKYO,ROME,BERLIN,MOSCOW,BEIJING,CAIRO,1,History
70257,US CITIES,NEW YORK,LOS ANGELES,CHICAGO,HOUSTON,PHOENIX,PHILADELPHIA,SAN ANTONIO,SAN DIEGO,1,History
70258,LANGUAGES,ENGLISH,SPANISH,MANDARIN,HINDI,ARABIC,FRENCH,RUSSIAN,PORTUGUESE,1,History
70259,RELIGIONS,CHRISTIANITY,ISLAM,HINDUISM,BUDDHISM,JUDAISM,SIKHISM,TAOISM,JAINISM,1,History
70260,HOLIDAYS US,THANKSGIVING,INDEPENDENCE DAY,MEMORIAL DAY,LABOR DAY,VETERANS DAY,HALLOWEEN,VALENTINES DAY,ST PATRICKS DAY,1,History
70261,FESTIVALS,DIWALI,CHINESE NEW YEAR,RAMADAN,HANUKKAH,CARNIVAL,OKTOBERFEST,MARDI GRAS,DAY OF THE DEAD,3,History
70262,JOBS,DOCTOR,TEACHER,POLICE,FIREFIGHTER,CHEF,ARTIST,ENGINEER,LAWYER,1,History
70263,OFFICE ROLES,MANAGER,ASSISTANT,CLERK,ANALYST,DIRECTOR,EXECUTIVE,INTERN,RECEPTIONIST,3,History
70264,CONSTRUCTION JOBS,BUILDER,PLUMBER,ELECTRICIAN,CARPENTER,WELDER,PAINTER,ROOFER,MASON,3,History
70265,SERVICE JOBS,WAITER,BARTENDER,CASHIER,DRIVER,CLEANER,BARBER,HAIRDRESSER,TAILOR,3,History
70266,ARTS JOBS,ACTOR,MUSICIAN,WRITER,DANCER,SINGER,PHOTOGRAPHER,DESIGNER,SCULPTOR,3,Music
70267,SCIENCE JOBS,SCIENTIST,CHEMIST,BIOLOGIST,PHYSICIST,ASTRONOMER,GEOLOGIST,DOCTOR,RESEARCHER,3,Science
70268,SPORTS JOBS,ATHLETE,COACH,REFEREE,TRAINER,SCOUT,MANAGER,AGENT,COMMENTATOR,3,Sports
70269,POLITICAL ROLES,PRESIDENT,SENATOR,GOVERNOR,MAYOR,JUDGE,DIPLOMAT,COUNCILOR,MINISTER,3,History
70270,ROYAL TITLES,KING,QUEEN,PRINCE,PRINCESS,DUKE,DUCHESS,EARL,BARON,3,History
70271,MILITARY RANKS,GENERAL,COLONEL,MAJOR,CAPTAIN,SERGEANT,LIEUTENANT,CORPORAL,PRIVATE,5,History
70272,FAMILY MEMBERS,MOTHER,FATHER,SISTER,BROTHER,GRANDMA,GRANDPA,AUNT,UNCLE,1,History
70273,EXTENDED FAMILY,COUSIN,NEPHEW,NIECE,IN-LAW,STEP-MOM,STEP-DAD,HALF-SISTER,HALF-BROTHER,3,History
70274,FRIENDSHIP TERMS,BUDDY,PAL,MATE,BESTIE,COMPANION,PARTNER,ALLY,FRIEND,1,History
70275,LOVE TERMS,DARLING,SWEETHEART,HONEY,BABY,DEAR,LOVE,BELOVED,ANGEL,1,History
70276,HOUSE ROOMS,KITCHEN,LIVING ROOM,BEDROOM,BATHROOM,DINING ROOM,GARAGE,ATTIC,BASEMENT,1,History
70277,FURNITURE,SOFA,CHAIR,TABLE,BED,DRESSER,DESK,BOOKSHELF,CABINET,1,History
70278,APPLIANCES,FRIDGE,STOVE,OVEN,MICROWAVE,DISHWASHER,WASHER,DRYER,TOASTER,1,Science
70279,FLOORING,CARPET,TILE,WOOD,RUG,LAMINATE,VINYL,CONCRETE,MARBLE,3,History
70280,WALL DECOR,PAINTING,MIRROR,CLOCK,POSTER,PHOTO,SHELF,SCONCE,WALLPAPER,3,History
70281,LIGHTING,LAMP,CHANDELIER,BULB,SWITCH,CANDLE,FLASHLIGHT,SCONCE,NEON,1,Science
70282,WINDOWS,GLASS,CURTAIN,BLINDS,SHUTTERS,SCREEN,FRAME,SILL,PANE,1,Science
70283,DOORS,KNOB,LOCK,KEY,HINGE,FRAME,BELL,MAT,PEEPHOLE,1,Science
70284,ROOFING,SHINGLE,TILE,METAL,SLATE,GUTTER,CHIMNEY,VENT,SKYLIGHT,3,Science
70285,GARDEN,GRASS,FLOWER,BUSH,TREE,FENCE,PATH,PATIO,BENCH,1,Nature
70286,TOOLBOX,HAMMER,SCREWDRIVER,WRENCH,PLIERS,SAW,TAPE,NAIL,SCREW,1,Science
70287,CLEANING TOOLS,BROOM,MOP,VACUUM,BUCKET,SPONGE,CLOTH,BRUSH,DUSTER,1,Science
70288,LAUNDRY,WASHER,DRYER,DETERGENT,BASKET,IRON,BOARD,HANGER,FOLD,1,Science
70289,SEWING,NEEDLE,THREAD,SCISSORS,PIN,BUTTON,FABRIC,MACHINE,THIMBLE,3,History
70290,KNITTING,YARN,NEEDLE,PATTERN,STITCH,WOOL,SCARF,SWEATER,HOOK,3,History
70291,PAINTING TOOLS,BRUSH,ROLLER,TRAY,TAPE,CAN,LADDER,DROP CLOTH,EASEL,3,History
70292,CAR TYPES,SEDAN,SUV,TRUCK,VAN,COUPE,CONVERTIBLE,WAGON,HATCHBACK,1,Cars
70293,TRUCK TYPES,PICKUP,SEMI,DUMP,FIRE,GARBAGE,TOW,TANKER,BOX,1,Cars
70294,BOAT TYPES,SAILBOAT,SPEEDBOAT,YACHT,CANOE,KAYAK,FERRY,CRUISE,FISHING,1,Science
70295,AIRCRAFT,AIRPLANE,HELICOPTER,JET,GLIDER,DRONE,BALLOON,BLIMP,ROCKET,1,Science
70296,TRAIN TYPES,SUBWAY,FREIGHT,PASSENGER,STEAM,DIESEL,MONORAIL,TRAM,BULLET,1,Science
70297,BICYCLE PARTS,WHEEL,TIRE,PEDAL,CHAIN,HANDLEBAR,SEAT,BRAKE,GEAR,3,Science
70298,TRAFFIC SIGNS,STOP,YIELD,SPEED LIMIT,ONE WAY,DO NOT ENTER,NO PARKING,MERGE,CROSSWALK,1,Cars
70299,ROAD TYPES,STREET,AVENUE,HIGHWAY,FREEWAY,LANE,BOULEVARD,DRIVE,ALLEY,1,Cars
70300,BRIDGE TYPES,SUSPENSION,ARCH,BEAM,TRUSS,DRAWBRIDGE,CANTILEVER,CABLE,PONTOON,5,Science;`,Zg=`id,name,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
60000,RHYME: -AT,Cat,Bat,Hat,Mat,Rat,Sat,Flat,Splat,Brat,Vat,1,Nature
60001,RHYME: -IGHT,Light,Bright,Night,Sight,Fight,Might,Tight,Flight,Height,Right,1,Science
60002,RHYME: -AKE,Cake,Lake,Make,Take,Bake,Rake,Snake,Fake,Shake,Wake,1,Nature
60003,RHYME: -OON,Moon,Spoon,Noon,Soon,Balloon,Cartoon,Tycoon,Lagoon,Cocoon,Baboon,1,Nature
60004,RHYME: -AR,Car,Star,Far,Jar,Bar,Scar,Tar,Par,Guitar,Avatar,1,Nature
60005,RHYME: -ICE,Ice,Mice,Rice,Dice,Price,Slice,Twice,Spice,Nice,Vice,1,Nature
60006,RHYME: -AIL,Tail,Snail,Pail,Nail,Mail,Sail,Rail,Trail,Fail,Hail,1,Nature
60007,RHYME: -EE,Tree,Bee,Knee,See,Free,Glee,Three,Agree,Flee,Spree,1,Nature
60008,RHYME: -OCK,Sock,Rock,Lock,Clock,Block,Dock,Mock,Stock,Shock,Flock,1,Nature
60009,RHYME: -UG,Bug,Rug,Mug,Hug,Tug,Plug,Slug,Drug,Jug,Shrug,1,Nature
60010,RHYME: -AN,Pan,Fan,Man,Can,Van,Ran,Plan,Scan,Span,Tan,1,Food
60011,RHYME: -IP,Lip,Sip,Dip,Hip,Tip,Rip,Flip,Slip,Trip,Grip,1,Nature
60012,RHYME: -ELL,Bell,Shell,Well,Tell,Sell,Fell,Smell,Spell,Swell,Yell,1,Nature
60013,RHYME: -OP,Top,Hop,Pop,Mop,Stop,Shop,Drop,Cop,Crop,Prop,1,Nature
60014,RHYME: -UNK,Junk,Trunk,Bunk,Sunk,Chunk,Skunk,Punk,Drunk,Shrunk,Funk,1,Nature
60015,RHYME: -ASH,Cash,Dash,Bash,Mash,Rash,Flash,Splash,Crash,Trash,Sash,1,History
60016,RHYME: -INE,Line,Mine,Fine,Dine,Nine,Pine,Shine,Vine,Wine,Spine,1,Nature
60017,RHYME: -OLD,Cold,Gold,Hold,Told,Sold,Bold,Fold,Mold,Scold,Wold,1,Nature
60018,RHYME: -ING,King,Ring,Sing,Wing,Swing,Bring,Spring,String,Thing,Cling,1,History
60019,RHYME: -EET,Feet,Sweet,Meet,Street,Sheet,Greet,Tweet,Fleet,Beet,Sleet,1,Nature
60020,RHYME: -ACK,Back,Sack,Pack,Rack,Black,Track,Stack,Snack,Crack,Quack,1,Nature
60021,RHYME: -AME,Name,Game,Same,Tame,Fame,Lame,Frame,Flame,Blame,Shame,1,Gaming
60022,RHYME: -EST,Best,Nest,Rest,Test,West,Chest,Guest,Quest,Pest,Vest,1,Nature
60023,RHYME: -ICK,Kick,Pick,Sick,Tick,Lick,Brick,Stick,Quick,Click,Trick,1,Sports
60024,RHYME: -OT,Hot,Pot,Cot,Dot,Lot,Not,Rot,Slot,Spot,Plot,1,Food
60025,RHYME: -UMP,Jump,Bump,Lump,Pump,Dump,Hump,Stump,Thump,Grump,Clump,1,Sports
60026,RHYME: -IDE,Ride,Hide,Side,Wide,Tide,Slide,Glide,Bride,Pride,Guide,1,Nature
60027,RHYME: -ORE,More,Store,Core,Bore,Sore,Score,Shore,Snore,Floor,Door,1,Nature
60028,RHYME: -OUT,Out,Shout,Scout,Spout,Trout,Snout,Stout,Doubt,Sprout,Gout,1,Nature
60029,RHYME: -UN,Sun,Run,Fun,Bun,Gun,Nun,Pun,Stun,Spin,Ton,1,Nature
60030,RHYME: -ED,Red,Bed,Fed,Led,Shed,Sled,Wed,Bred,Fled,Pled,1,Nature
60031,RHYME: -OLOGY,Biology,Geology,Zoology,Psychology,Theology,Mythology,Ecology,Anthology,3,Science
60032,RHYME: -UTION,Solution,Pollution,Evolution,Revolution,Constitution,Execution,Distribution,3,Science
60033,RHYME: -ENTAL,Mental,Dental,Rental,Fundamental,Parental,Accidental,Continental,Instrumental,3,Science
60034,RHYME: -ITY,City,Pity,Witty,Gritty,Ability,Stability,Fragility,Hostility,Utility,3,History
60035,RHYME: -ATE,Create,Debate,Estate,Inflate,Relate,Translate,Mandate,Vibrate,3,History
60036,RHYME: -IOUS,Curious,Furious,Glorious,Serious,Various,Mysterious,Delirious,Hilarious,3,History
60037,RHYME: -ACTION,Action,Fraction,Traction,Reaction,Attraction,Distraction,Transaction,3,Science
60038,RHYME: -ERSE,Verse,Reverse,Diverse,Converse,Universe,Traverse,Adverse,Disperse,3,Science
60039,RHYME: -ENCE,Defense,Expense,Immense,Pretense,Suspense,Intense,Offense,Incense,3,History
60040,RHYME: -CTURE,Picture,Structure,Fracture,Lecture,Puncture,Stricture,Texture,Mixture,3,Science
60041,RHYME: -IZE,Realize,Organize,Recognize,Analyze,Criticize,Memorize,Visualize,Apologize,3,Science
60042,RHYME: -SION,Vision,Division,Collision,Revision,Decision,Precision,Invasion,Persuasion,3,Science
60043,RHYME: -ATOR,Creator,Debator,Elevator,Operator,Generator,Decorator,Calculator,Simulator,3,Science
60044,RHYME: -ISTIC,Artistic,Realistic,Optimistic,Pessimistic,Statistic,Logistic,Ballistic,Mystic,3,Science
`,Xg=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10,word11,word12,word13,word14,word15
110401,Solar System Objects,Asteroid,Comet,Meteoroid,Heliosphere
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
110484,Yellowstone,Geyser,Caldera,Bison,Wolves,Prismatic,Mammoth`,qg=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10,word11,word12,word13,word14,word15
120000,Alabama,Yellowhammer bird,Longleaf Pine,Carver discoveries,Rosa Parks site,Space & Rocket Center,Christmas holiday,Talladega,3,Geography
120001,Alaska,24 hours of sun,Once Russian,Canadian Neighbor,Largest US state,Denali,Mushing,3 million lakes,1,Geography
120002,Arizona,Cactus Wren bird,Palo Verde tree,Grand Canyon,London Bridge,No Daylight Saving,Copper State,Monument Valley,1,Geography
120003,Arkansas,Mockingbird,Loblolly Pine,Diamond mine,Bill Clinton,Ozark Mountains,Hot Springs,Walmart HQ,3,Geography
120004,California,Quail bird,Redwood tree,Death Valley,Golden Gate Bridge,Alcatraz Island,Hollywood Sign,Largest economy,1,Geography
120005,Colorado,Lark Bunting,Blue Spruce,Rocky Mountains,Highest elevation,Mesa Verde,Pikes Peak,Garden of the Gods,1,Geography
120006,Connecticut,American Robin,White Oak tree,First constitution,Yale University,Mystic Seaport,Mark Twain House,Constitution State,3,Geography
120007,Delaware,Blue Hen Chicken,American Holly,First state,No sales tax,Rodney's ride,Biden's home,Constitution ratify,3,Geography
120008,Florida,Mockingbird,Sabal Palm,Everglades,Kennedy Space Center,Disney World,St. Augustine,Artemis II,1,Geography
120009,Georgia,Brown Thrasher,Live Oak tree,Oldest state park,Martin Luther King,1996 Olympics,Jimmy Carter,Coca-Cola HQ,3,Geography
120010,Hawaii,Nene bird,Kukui tree,Only islands,Pearl Harbor,Diamond Head,Mauna Kea,Grows coffee,1,Geography
120011,Idaho,Mountain Bluebird,Western White Pine,Potato producer,Hells Canyon,Craters of the Moon,Sun Valley,Shoshone Falls,1,Geography
120012,Illinois,Northern Cardinal,White Oak tree,Abraham Lincoln,Route66 starts,Willis Tower,Obama Center,Navy Pier,1,Geography
120013,Indiana,Northern Cardinal,Tulip tree,Indianapolis 500,Hoosier State,Lincoln Memorial,Michael Jackson,Indiana Dunes,3,Geography
120014,Iowa,Eastern Goldfinch,Bur Oak tree,Presidential caucus,Cattle numbers,Field of Dreams,Hoover Library,Effigy Mounds,3,Geography
120015,Kansas,Western Meadowlark,Cottonwood tree,Geographic center,Oz Dorothy,Eisenhower Library,Air Capital,Tallgrass Prairie,1,Geography
120016,Kentucky,Northern Cardinal,Tulip Poplar,Mammoth Cave,Kentucky Derby,Bourbon capital,Lincoln birthplace,SAR Museum,1,Geography
120017,Louisiana,Brown Pelican,Bald Cypress,Mardi Gras,French Quarter,Jazz birthplace,WrestleMania 42,Cajun culture,1,Geography
120018,Maine,Black-capped Chickadee,Eastern White Pine,Acadia Park,Lobster producer,L.L. Bean HQ,Portland Head Light,Eastern point,1,Geography
120019,Maryland,Baltimore Oriole,White Oak tree,Star-Spangled Banner,Chesapeake Bay,Naval Academy,Antietam,Fort McHenry,3,Geography
120020,Massachusetts,Black-capped Chickadee,American Elm,Freedom Trail,Harvard University,Plymouth Rock,Lexington & Concord,Cape Cod,1,Geography
120021,Michigan,American Robin,Eastern White Pine,Great Lakes,Henry Ford Museum,Motown Records,Mackinac Bridge,Pictured Rocks,1,Geography
120022,Minnesota,Common Loon,Red Pine tree,Mall of America,10000 Lakes,Mississippi head,Mayo Clinic,Paisley Park,3,Geography
120023,Mississippi,Mockingbird,Magnolia tree,Blues birthplace,Stetson hat,Vicksburg,Gulf Islands,B.B. King Museum,3,Geography
120024,Missouri,Eastern Bluebird,Flowering Dogwood,Gateway Arch,Truman Library,Route 66 Centennial,Branson theaters,Twain's home,3,Geography
120025,Montana,Western Meadowlark,Ponderosa Pine,Glacier Park,Little Bighorn,Temp change,Yellowstone north,Big Sky,3,Geography
120026,Nebraska,Western Meadowlark,Cottonwood tree,Chimney Rock,Sandhill crane,Carhenge,Arbor Day,Unicameral,5,Geography
120027,Nevada,Mountain Bluebird,Single-leaf Pinyon,Hoover Dam,Las Vegas Strip,Area 51,Great Basin,Silver State,1,Geography
120028,New Hampshire,Purple Finch,Paper Birch,Mount Washington,Primary election,Old Man site,Dartmouth,White Mountains,5,Geography
120029,New Jersey,Eastern Goldfinch,Red Oak tree,Density high,Boardwalk,Princeton,Edison's lab,Ellis Island,3,Geography
120030,New Mexico,Greater Roadrunner,Piñon Pine,Carlsbad Caverns,White Sands,Santa Fe,Los Alamos,Balloon Fiesta,3,Geography
120031,New York,Eastern Bluebird,Sugar Maple,Statue of Liberty,Niagara Falls,Empire State,9/11 Memorial,Harlem Renaissance,1,Geography
120032,North Carolina,Northern Cardinal,Longleaf Pine,Wright Brothers,Biltmore Estate,Great Smoky,Outer Banks,Research Triangle,3,Geography
120033,North Dakota,Western Meadowlark,American Elm,Theodore Roosevelt,Roosevelt Library,Peace Garden,Fewest landmarks,Fargo,5,Geography
120034,Ohio,Northern Cardinal,Ohio Buckeye,Rock Hall of Fame,8 US presidents,Cuyahoga Valley,Wright-Patterson,Football Hall,3,Geography
120035,Oklahoma,Scissor-tailed Flycatcher,Redbud tree,Route 66 museum,Cherokee Nation,Tulsa Massacre,OKC Memorial,Centennial Bash,3,Geography
120036,Oregon,Western Meadowlark,Douglas Fir,Crater Lake,Fastest-speaking,City of Boring,Haystack Rock,Rose Test Garden,3,Geography
120037,Pennsylvania,Ruffed Grouse,Eastern Hemlock,Liberty Bell,Philadelphia 2026,Gettysburg,Valley Forge,Independence Hall,1,Geography
120038,Rhode Island,Rhode Island Red,Red Maple,Smallest state,Newport Mansions,Ocean State,Baptist Church,Brown University,1,Geography
120039,South Carolina,Carolina Wren,Cabbage Palmetto,Fort Sumter,Charleston historic,Myrtle Beach,Hilton Head,BMW US,3,Geography
120040,South Dakota,Ring-necked Pheasant,Black Hills Spruce,Mount Rushmore,Badlands,Crazy Horse,Wall Drug,Sturgis Rally,1,Geography
120041,Tennessee,Mockingbird,Tulip Poplar,Great Smoky,Graceland,Grand Ole Opry,Songteller Hotel,Oak Ridge,1,Geography
120042,Texas,Mockingbird,Pecan tree,The Alamo,NASA Johnson,Universal Kids,SXSW 40th,Big Bend,1,Geography
120043,Utah,California Gull,Quaking Aspen,Zion Park,Arches Park,Mormon Tabernacle,SLC Olympics,Sundance 2026,3,Geography
120044,Vermont,Hermit Thrush,Sugar Maple,Maple syrup,Ben & Jerry's,Lake Champlain,Green Mountains,Trapp Family Lodge,3,Geography
120045,Virginia,Northern Cardinal,American Dogwood,Arlington Cemetery,Mount Vernon,Monticello,Jamestown,Shenandoah,3,Geography
120046,Washington,Willow Goldfinch,Western Hemlock,Mount Rainier,Space Needle,Olympic Park,Microsoft HQ,Mount St. Helens,1,Geography
120047,West Virginia,Northern Cardinal,Sugar Maple,New River Gorge,Appalachian,Harpers Ferry,The Greenbrier,Mountain State,3,Geography
120048,Wisconsin,American Robin,Sugar Maple,Apostle Islands,Harley Museum,Door County,Dairy State,15000 lakes,1,Geography
120049,Wyoming,Western Meadowlark,Plains Cottonwood,Yellowstone,Grand Teton,Devils Tower,Women's suffrage,Old Faithful,1,Geography
120050,Afghanistan,Peacock,Banyan tree,Taj Mahal,Yoga birth,Bollywood,Ganges River,Holi Fest,Chess origin,Kabul City,5,Geography
120051,Brazil,Saffron Finch,Ipe tree,Christ Statue,Amazon Basin,Carnival,Bossa Nova,World Cup win,Brasilia,Sugar Loaf,1,Geography
120052,Canada,Gray Jay,Maple tree,Syrup leader,CN Tower,Niagara Falls,Big country,Ice Hockey,Rockies,Long Highway,1,Geography
120053,China,Crane bird,Ginkgo tree,Great Wall,Mandarin,Forbidden City,Yangtze River,Silk Road,Year of Horse,Giant Panda,1,Geography
120054,Egypt,Steppe Eagle,Doum Palm,Great Pyramid,Nile River,Sphinx,Suez Canal,Red Sea dive,Cairo City,Kings Valley,1,Geography
120055,France,Rooster,Common Oak,Eiffel Tower,Louvre Museum,French Revolt,Cannes Film,Tour de France,Wine region,Notre Dame,1,Geography
120056,Germany,Golden Eagle,German Oak,Berlin Gate,Alps peaks,Autobahn,Octoberfest,Berlin Wall,Beethoven,Black Forest,1,Geography
120057,India,Peacock,Banyan tree,Taj Mahal,Yoga birth,Bollywood,Ganges River,Holi Fest,Chess origin,Red Fort,1,Geography
120058,Indonesia,Hawk-eagle,Teak tree,Borobudur,Komodo Dragon,Many islands,Bali tourism,Java Island,Nasi Goreng,Gamelan,3,Geography
120059,Italy,Sparrow,Berry Tree,Colosseum,Leaning Tower,Venice canals,Vatican City,Ferrari,Opera origin,Amalfi Coast,1,Geography
120060,Japan,Pheasant,Cherry Tree,Mount Fuji,Bullet train,Sushi origin,Kyoto temples,Anime scene,Shintoism,Tokyo Metro,1,Geography
120061,Mexico,Golden Eagle,Dahlia flower,Chichen Itza,Dead Day fest,Tequila,Aztec history,Cabo San Lucas,Spanish tongue,Big Pyramid,1,Geography
120062,Nigeria,Crowned Crane,Costus flower,Zuma Rock,Film industry,Lagos City,Niger Delta,Yankari Park,Benin Bronze,Obudu Ranch,5,Geography
120063,Pakistan,Partridge,Deodar tree,K2 peak,Indus River,Badshahi Mosque,Nuclear power,Mango export,Cricket game,Faisal Mosque,3,Geography
120064,Russia,Tundra Swan,Larch tree,Red Square,Lake Baikal,Siberia Rail,Hermitage,11 time zones,First orbit,Big country,Bolshoi,3,Geography
120065,South Africa,Blue Crane,Yellowwood,Table Mountain,Kruger Park,Mandela legacy,Three capitals,Gold mines,Diamond mines,Cape Town,3,Geography
120066,South Korea,Magpie,Rose of Sharon,Seoul Palace,K-Pop fame,Samsung,DMZ border,Taekwondo,Jeju Island,Web leader,N Seoul Tower,1,Geography
120067,United Kingdom,Robin bird,Royal Oak,Big Ben,Stonehenge,British Museum,Tube system,London City,Magna Carta,Royal Family,1,Geography
120068,United States,Bald Eagle,Oak tree,Lady Liberty,Grand Canyon,Hollywood,Moon landing,50 states,Yellowstone,Mount Rushmore,1,Geography
120069,Vietnam,Chim Lac,Lotus flower,Ha Long Bay,Cu Chi Tunnels,Pho origin,Big cave,Coffee export,Saigon City,Tet festival,3,Geography
120070,Austria,Alps peaks,Vienna music,Mozart home,Ski resorts,Danube River,Apple strudel,Glass art,Lederhosen,3,Geography
120071,Belgium,Chocolate,Waffles,Brussels,Diamond trade,Comic strips,Ghent canals,Ardennes,Europe hub,1,Geography
120072,Bolivia,Salt flats,Andes peaks,La Paz City,Llama wool,Lake Titicaca,Silver mines,Amazon wild,Tiwanaku,3,Geography
120073,Chile,Atacama,Andes peaks,Santiago,Wine region,Easter Island,Torres Park,Copper mines,Moai statues,3,Geography
120074,Croatia,Dubrovnik,Split City,Hvar Island,Blue Sea,Game of Thrones,Plitvice,Tesla birth,Red and White,3,Geography
120075,Cuba,Old Havana,Cigars,Classic cars,Sugar cane,Salsa dance,Varadero,Rum origin,Che legacy,3,Geography
120076,Greece,Athens,Santorini,Mykonos,Olive oil,Ancient ruins,Olympic birth,Acropolis,Aegean Sea,1,Geography
120077,Hungary,Budapest,Danube River,Goulash,Thermal baths,Balaton Lake,Rubik's Cube,Paprika spice,Chain Bridge,3,Geography
120078,Jordan,Petra ruins,Dead Sea,Wadi Rum,Amman City,Camel treks,Roman ruins,Red Sea port,Bedouin life,3,Geography
120079,Kazakhstan,Steppe land,Space port,Almaty City,Caspian Sea,Astana City,Oil wealth,Apples birth,Horse riding,5,Geography
120080,Kuwait,Oil wealth,Kuwait City,Persian Gulf,Dinar money,Desert heat,Falconry,Grand Mosque,Water towers,5,Geography
120081,Nepal,Mount Everest,Himalayas,Kathmandu,Buddha birth,Sherpa guide,Yak butter,Trekking,Hindu shrines,3,Geography
120082,Norway,Fjords,Oslo City,Viking ships,Midnight sun,Oil wealth,Skiing birth,Northern light,Bergen port,3,Geography
120083,Poland,Warsaw City,Krakow,Pierogi,Salt mine,Tatras peaks,Baltic Sea,Chopin music,Old Town,3,Geography
120084,Portugal,Lisbon City,Porto wine,Fado music,Cork trees,Coastline,Algarve,Azores,Vasco da Gama,3,Geography
120085,Romania,Dracula myth,Carpathians,Bucharest,Danube Delta,Black Sea,Salt mines,Wood church,Painted walls,1,Geography
120086,Sweden,Stockholm,Abba music,Ikea origin,Volvo cars,Vasa museum,Meatballs,Lapland,Ice hotel,1,Geography
120087,Switzerland,Swiss banks,Alps peaks,Geneva City,Chocolate,Watches,Cheese fondue,Matterhorn,Lake Zurich,1,Geography
120088,United Arab Emirates,Burj Khalifa,Dubai City,Abu Dhabi,Oil wealth,Palm Island,Desert safari,Luxury malls,Ferrari World,3,Geography
120089,Zambia,Victoria Fall,Safari park,Copper mines,Zambezi,Lusaka City,Luangwa,Bird Crane,Walking tour,5,Geography`,Qg=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
200000,CAKES Types,Sponge,Chiffon,Angel,Pound,Velvet,Bundt,Sheet,Marble,Carrot,Lava,1,Food
200001,DOGS Skills,Agility,Herding,Hunting,Guard,Service,Guide,Rescue,Track,Police,Show,1,Nature
200002,BEER Styles,Lager,Pilsner,IPA,Stout,Porter,Wheat,Sour,Ale,Amber,Bock,3,Food
200003,GEOLOGY Rocks,Igneous,Sediment,Metamorphic,Basalt,Granite,Quartz,Marble,Slate,Shale,Flint,3,Science
200004,COWBOYS Gear,Saddle,Lasso,Spurs,Hat,Boots,Chaps,Vest,Rifle,Holster,Canteen,1,History
200005,PLANTS Succulent,Aloe,Cactus,Jade,Echeveria,Sedum,Agave,Haworthia,Lithops,Yucca,Kalanchoe,5,Nature
200006,WEATHER Winter,Snow,Ice,Blizzard,Sleet,Frost,Wind Chill,Freeze,Hail,Flurry,Drift,1,Nature
200007,ANCIENT EGYPT Gods,Ra,Anubis,Osiris,Isis,Horus,Seth,Thoth,Bastet,Sobek,Nut,3,History
200008,BAKERY Pastries,Croissant,Eclair,Tart,Danish,Cannoli,Scone,Brioche,Strudel,Puff,Macaron,1,Food
200009,METALS Elements,Gold,Silver,Iron,Copper,Steel,Tin,Lead,Zinc,Nickel,Chrome,1,Science
200010,RAINFOREST Places,Amazon,Congo,Borneo,New Guinea,Costa Rica,Jungle,Hot,Wet,Humid,Green,1,Geography
200011,RAINFOREST Animals,Monkeys,Birds,Snakes,Frogs,Insects,Jaguars,Parrots,Toucans,Tigers,1,Nature
200012,RAINFOREST Issue,Deforest,Logging,Farming,Cattle,Climate,Loss,Protect,Green,Eco,Save,1,Nature
200013,DESERT Places,Sahara,Gobi,Mojave,Sonoran,Arabian,Kalahari,Hot,Dry,Sand,Dunes,3,Geography
200014,DESERT Animals,Camel,Snake,Lizard,Scorpion,Coyote,Hawk,Owl,Fox,Rat,Mouse,1,Nature
200015,DESERT Features,Dunes,Oasis,Cactus,Rocks,Heat,Sand,Dry,Extreme,Water,Survive,1,Geography
200016,MOUNTAINS Places,Everest,Rockies,Andes,Alps,Himalayas,Sierra Nevada,Ural,Denali,K2,Fuji,3,Geography
200017,MOUNTAINS Activity,Hike,Climb,Ski,Board,Camp,View,Photo,Cold,Snow,Ice,1,Lifestyle
200018,MOUNTAINS Terms,Peak,Summit,Base,Range,Valley,Trail,Pass,Elevation,Slope,Ridge,1,Geography
200019,AUSTRALIA Cities,Sydney,Melb,Brisbane,Perth,Adelaide,Canberra,Hobart,Darwin,Gold Coast,Bondi,3,Geography
200020,AUSTRALIA Animals,Kangaroo,Koala,Emu,Platypus,Wallaby,Dingo,Croc,Spider,Snake,Shark,1,Nature
200021,AUSTRALIA Nature,Outback,Great Reef,Uluru,Beach,Desert,Rainforest,Bush,Coast,Opera House,Harbor,3,Geography
200022,AUSTRALIA Culture,Mate,Barbie,Thongs,Surf,Rugby,Cricket,Aussie,Cheers,Sport,Beer,1,Lifestyle
200023,AUSTRALIA Terms,Gday,Mate,Oz,Bush,Billabong,Woolshed,Outback,Walkabout,Swag,Damper,3,Language
200024,CRUISE SHIPS Company,Royal,Carnival,Norwegian,Disney,MSC,Viking,Celebrity,Princess,Holland,3,Transportation
200025,CRUISE SHIPS On Board,Food,Pool,Casino,Theatre,Shows,Spa,Gym,Bar,Cabins,Buffet,1,Lifestyle
200026,CRUISE SHIPS Ports,Miami,Galveston,Seattle,Vancouver,Rome,Venice,Nassau,Cozumel,Jamaica,Alaska,1,Geography
200027,CRUISE SHIPS Terms,Bow,Stern,Port,Star,Gangway,Deck,Captain,Crew,Ocean,Travel,3,Transportation
200028,JAZZ People,Armstrong,Ellington,Davis,Coltrane,Parker,Holiday,Fitzgerald,Monk,Basie,Goodman,3,Music
200029,JAZZ Style,Swing,Blues,Be Bop,Cool,Fusion,Latin,Ragtime,Improv,Rhythm,Solo,3,Music
200030,JAZZ Terms,Jam,Scat,Blue Note,Chords,Scale,Rhythm,Tempo,Swing,Improv,Session,3,Music
200031,ROCK N ROLL People,Elvis,Beatles,Stones,Zeppelin,Queen,Jimi,Doors,Who,Clapton,Cash,1,Music
200032,ROCK N ROLL Style,Blues,Rockabilly,Metal,Punk,Prog,Classic,Grunge,Pop Rock,Indie,Alt,1,Music
200033,ROCK N ROLL Terms,Riff,Solo,Chords,Lyrics,Album,Band,Tour,Stage,Amp,Guitar,1,Music
200034,E MUSIC Types,Techno,House,Trance,Dubstep,EDM,Ambient,Synth,Garage,Disco,Hip Hop,1,Music
200035,E MUSIC Terms,Beat,Drop,Loop,Mix,DJ,Track,Album,Festival,Rave,Club,1,Music
200036,E MUSIC Artists,Avicii,Guetta,Calvin,Tiesto,Skrillex,Deadmau5,Marshmello,Chemical,Fatboy,Daft Punk,3,Music
200037,HIP HOP People,Tupac,Biggie,Dre,Snoop,Jay-Z,Eminem,Drake,Nas,Kanye,Kendrick,1,Music
200038,HIP HOP Style,Rap,Beatbox,Graffiti,B Boy,Breakdance,Old School,New School,Trap,Drill,Conscious,3,Music
200039,HIP HOP Terms,Flow,Rhyme,Beat,Mic,Crew,Posse,Track,Album,Single,Dis,1,Music
200040,ILLEGAL Goods,Drugs,Guns,Stolen,Goods,Fake,ID,Money,Codes,Data,Organs,1,Economics
200041,ILLEGAL Terms,Traffick,Smuggle,Deal,Cartel,Mob,Gang,Underground,Black Mkt,Offshore,Dark Web,3,Economics
200042,PABLO E Life,Cocaine,Cartel,Medellin,Money,Drugs,Rich,Poor,Killings,Jail,Escape,3,History
200043,AL CAPONE Life,Mob,Chicago,Prohibition,Bootleg,Gangs,Crime,Jail,Tax Evasion,Famous,Scarface,1,History
200044,PICASSO Art,Cubism,Blue,Rose,Guernica,Dora Maar,Genius,Paint,Sculpt,Pottery,Prints,3,Art
200045,BANKSY Art,Graffiti,Stencil,Street,Anon,UK,Artist,Mystery,Rat,Girl Balloon,Art Market,3,Art
200046,HOBBIES Types,Sport,Music,Art,Game,Read,Cook,Garden,Photo,Collect,Hike,1,Lifestyle
200047,COLLECTIBLES Items,Cards,Stamps,Coins,Dolls,Comics,Toys,Art,Wine,Cars,Guns,1,Lifestyle
200048,GOOGLE Products,Search,Maps,Gmail,Chrome,Android,Pixel,Home,Docs,Drive,Sheets,1,Technology
200049,GOOGLE Tech,AI,Quantum,Cloud,Ads,Algorithm,Server,Data,Voice,Engine,Code,3,Technology
200050,GOOGLE Terms,Search,Rank,Organic,PPC,SEO,AdWords,Analytics,Cookie,Cache,Pixel,5,Technology
200051,GOOGLE History,Page,Brin,Garage,IPO,YouTube,Android,Alphabet,Big Tech,Global,Impact,3,Technology
200052,GOOGLE Future 2026,AI Growth,Quantum,Waymo,Fitbit,Nest,Health Tech,Search Adv,Ads,Cloud,3,Technology
200053,APPLE Products,iPhone,Mac,Watch,iPad,AirPods,TV,Music,Pay,Store,Vision Pro,1,Technology
200054,APPLE Tech,iOS,macOS,WatchOS,Chip,A17,M3,AI,Design,Closed,Ecosystem,3,Technology
200055,APPLE Terms,App,Store,Genius,Launch,Keynote,Logo,Siri,Face ID,Touch ID,iCloud,1,Technology
200056,APPLE History,Jobs,Wozniak,Garage,IPO,Mac,iPod,iPhone,Global,Iconic,Design,1,Technology
200057,APPLE Future 2026,iPhone 18,Vision Pro 2,AI Push,Health Tech,Car Project,New OS,Faster Chips,Services,More Stores,3,Technology
200058,BRANDS Popular,Nike,Coke,Apple,Google,Amazon,Toyota,Samsung,Disney,Netflix,Adidas,1,Economics
200059,BRANDS Luxury,Gucci,Prada,LV,Dior,Hermes,Rolex,Chanel,Versace,Mercedes,BMW,1,Lifestyle
200060,BRANDS Sports,Nike,Adidas,Puma,Under Armour,Lulu,Patagonia,Columbia,Reebok,New Bal,Asics,1,Sports
200061,BRANDS Tech,Apple,Google,Amazon,Samsung,Sony,HP,Intel,Nvidia,AMD,Dell,1,Technology
200062,BRANDS Food,Coke,Pepsi,Nestle,Kraft,Heinz,Mars,Hershey,General Mills,Kellogg,Unilever,1,Food
200063,BRANDS Auto,Toyota,VW,Ford,Chevy,BMW,Mercedes,Honda,Nissan,Tesla,Kia,1,Transportation
200064,INTERNET Terms,WWW,HTTP,URL,Browser,Email,Server,Cloud,Data,Stream,Search,3,Technology
200065,INTERNET History,ARPANET,Dial up,Broadband,DSL,Cable,Fiber,WiFi,5G,Mobile,Net,3,Technology
200066,INTERNET Social,Facebook,Insta,TikTok,Snap,Twitter X,Linked In,YouTube,Reddit,Threads,Pinterest,1,Technology
200067,INTERNET Tech,Code,HTML,CSS,JavaScript,IP,Domain,Host,Server,Cloud,Data,3,Technology
200068,INTERNET Future 2026,Metaverse,AI,Web3,Blockchain,Quantum,Speed,Global,Access,New Apps,Tech,3,Technology
200069,FIFA WC History,Uruguay,Brazil,Italy,Germany,Argentina,France,Winners,Global,Tourney,Legacy,3,Sports
200070,FIFA WC 2026 Host,USA,Mexico,Canada,North America,Host City,Future,Games,Global,Big,1,Sports
200071,FIFA WC Teams,Brazil,France,Argentina,Germany,Spain,UK,USA,Mexico,Canada,Japan,1,Sports
200072,PLAYSTATION Consoles,PS5,PS4,PS3,PS2,PS1,PSP,Vita,PSVR,PSVR 2,PS Portal,1,Gaming
200073,PLAYSTATION Games,God of War,Spider Man,Uncharted,Horizon,Last of Us,Gran Turismo,Final Fantasy,Bloodborne,Ghost Tsush,3,Gaming
200074,PLAYSTATION Terms,DualSense,Trophy,Network,Plus,Store,Exclusives,Controller,Remote Play,AI Games,3,Gaming
200075,PLAYSTATION Future 2026,PS6,VR 3,New Games,More Tech,Cloud Gaming,Mobile,PC Ports,AI Play,Global,3,Gaming
200076,XBOX Consoles,Series X,Series S,One,360,Original,Game Pass,Cloud,Controller,Elite,Tech,1,Gaming
200077,XBOX Games,Halo,Gears War,Forza,Starfield,Minecraft,Flight Sim,Call Duty,Diablo,Elder Scrolls,Doom,3,Gaming
200078,XBOX Terms,Game Pass,Live,Gold,Cloud,Store,Exclusives,Controller,Console,AI Games,Tech,3,Gaming
200079,XBOX Future 2026,New Console,More Games,AI Play,Cloud Gaming,Mobile,PC Ports,Subscriptions,More Studios,3,Gaming
200080,PIXAR Films,Toy Story,Monsters,Nemo,Cars,Up,Inside Out,Coco,Soul,Turning Red,Elemental,1,Movies
200081,PIXAR Characters,Woody,Buzz,Sully,Mike,Nemo,Dory,Lightning,Mater,Up,Joy,1,Movies
200082,PIXAR Awards,Oscar,Animated,Film,Awards,Genius,Studio,Tech,Story,Art,Global,1,Movies
200083,PIXAR Future 2026,Toy Story 5,New Films,More Shows,AI in Film,Future,Tech,Art,Global,3,Movies
200084,STAR WARS Films,New Hope,Empire,Jedi,Force Awak,Last Jedi,Rise Sky,Rouge One,Solo,Clone Wars,Revenge Sith,1,Movies
200085,STAR WARS Characters,Luke,Leia,Han,Vader,Yoda,Obi-Wan,Kylo,Rey,Chewbacca,R2D2,C3PO,1,Movies
200086,STAR WARS Terms,Force,Jedi,Sith,Lightsaber,Empire,Rebel,Galaxy,Hyper,Space,Pilot,1,Movies
200087,STAR WARS Places,Tatooine,Coruscant,Endor,Hoth,Dagobah,Death Star,Falcon,Jabba,Canto Bight,Crait,3,Movies
200088,STAR WARS Future 2026,New Films,More Shows,AI in Film,Future,Tech,Art,Global,Ahsoka,Mando,3,Movies
200089,TV STARS Modern,Zendaya,Pedro,Olivia,Jenna,Jason,Hannah,Sydney,Anya,Timothee,Ryan,1,Television
200090,TV STARS Classic,Carney,Burns,Ball,Nixon,King,Rickles,Hope,Crosby,Sinatra,Davis Jr,3,Television
200091,CARS Classic,Mustang,Corvette,Camaro,Bel Air,Roadster,Coupe,Sedan,Convert,Muscle,Hot Rod,3,Transportation
200092,CARS Brands Classic,Ford,Chevy,Dodge,Plymouth,Buick,Cadillac,Pontiac,Olds,Merc,Chrysler,3,Transportation
200093,CARD GAMES Types,Poker,Bridge,Rummy,Solitaire,Hearts,Spades,Blackjack,Go Fish,Uno,War,1,Gaming
200094,CARD GAMES Deck,Ace,King,Queen,Jack,Ten,Suit,Diamond,Heart,Club,Spade,Joker,1,Gaming
200095,CARD GAMES Terms,Shuffle,Deal,Bet,Raise,Fold,Hit,Stay,Discard,Draw,Wild,Ace,1,Gaming
200096,CASINO Games,Slots,Poker,Blackjack,Roulette,Craps,Baccarat,Bingo,Keno,Wheel,Sports,1,Gaming
200097,CASINO Places,Vegas,Reno,Atlantic City,Macau,Monte Carlo,Casino,Resort,Hotel,Shows,Food,3,Geography
200098,CASINO Terms,Bet,Wager,Chip,Jackpot,Dealer,Payout,House Edge,Odds,Luck,Gamble,3,Gaming
200099,BUFFET Food,Meat,Seafood,Veggies,Salads,Desserts,Carbs,Breads,Fruit,Cuisine,Global,1,Food
200100,BUFFET Experience,Eat,All you can,Fill up,Huge,Variety,Plates,Walk,Sit,Enjoy,Love,1,Lifestyle
200101,WEAPONS Guns,Rifle,Pistol,Shotgun,Machine,Sub,Sniper,Revolver,Lever,Bolt,Pump,3,Technology
200102,GOT Characters,Jon Snow,Dany,Tyrion,Cersei,Jaime,Arya,Sansa,Ned Stark,Joffrey,Night King,1,Television
200103,GOT Houses,Stark,Lannister,Targaryen,Baratheon,Greyjoy,Tyrell,Martell,Bolton,Frey,Arryn,3,Television
200104,FEUDALISM Terms,King,Lord,Vassal,Serf,Fief,Fealty,Manor,Knight,Peasant,Duty,3,History
200105,CAPITALISM Terms,Market,Profit,Private,Owner,Free,Trade,Supply,Demand,Money,Wealth,3,Economics
200106,COMMUNISM Terms,State,Owner,Public,Goods,Share,Equal,Party,Work,Gov,People,3,Politics
200107,PUNK ROCK Bands,Ramones,Clash,sex Pistols,Misfits,Green Day,Blink 182,Bad Brains,Dead Kenn,Black Flag,Descendents,3,Music
200108,PUNK ROCK Terms,Riff,Power,Chord,DIY,Fanzine,Mosh,Pogo,Stage Dive,Slam,Thrash,3,Music
200109,LOVE Terms,Joy,Care,Trust,Kindness,Affection,Warmth,Friend,Family,Embrace,Heart,1,Lifestyle
200110,CIVIL RTS History,Slavery,Abolish,Rosa Parks,MLK Jr,March,Protest,Vote,Rights,Freedom,Change,1,History
200111,HBO Shows,Sopranos,Wire,GOT,Oz,Sex City,Succession,White Lotus,Euphoria,Last of Us,Curb,1,Television
200112,PLAYBOY Terms,Bunny,Mansion,Hugh Hefner,Magazine,Articles,Interviews,Iconic,Legacy,Media,Culture,3,Lifestyle
200113,SITCOMS Classic,I Love Lucy,Andy Griffith,Dick Van D,Cheers,Mary Tyler,All Family,MASH,Taxi,Bob Newhart,Happy Days,3,Television
200114,WWI People,Wilhelm II,George V,Nick II,Woodrow,Churchill,Lawrence,Pershing,Foch,Haig,Hindenburg,5,History
200115,WWI Battles,Somme,Verdun,Marne,Ypres,Gallipoli,Tannenberg,Passchendaele,Meuse,Argonne,Jutland,5,History
200116,WWI Tech,Tanks,Planes,Submarines,Gas,Machine Gun,Trench,Radio,Zeppelin,Flamer,Mines,3,History
200117,WWI Locations,Europe,Western Front,Eastern Front,Middle East,Atlantic,Africa,Pacific,Trenches,3,History
200118,WWI Terms,Treaty,Versailles,League Nations,Armistice,Mobilize,Neutral,Gas Mask,No Man's,Over Top,3,History
200119,WWI Legacy,WWII Cause,Maps Re Draw,Empires Fall,Soviet Rise,US Power,Modern War,History,Learn,3,History
200120,H/G Life,Hunt,Gather,Nomad,Tribe,Cave,Fire,Tools,Meat,Plants,Cycle,3,History
200121,H/G Tools,Spear,Club,Rock,Stick,Knife,Ax,Arrow,Bow,Hammer,Scraper,3,History
200122,H/G Food,Meat,Berries,Roots,Nuts,Insects,Fish,Birds,Eggs,Water,Forage,1,History
200123,H/G Places,Africa,Asia,Europe,Plains,Caves,River,Forest,Savanna,Tundra,Arctic,1,History
200124,H/G Future,Neolithic,Farming,Settled,Cities,Civ,Change,Future,Learn,Past,Study,3,History
200125,KUBRICK Films,2001,Clockwork,Shining,Strangelove,Paths Glory,Full Metal,Barry Lyndon,Spartacus,Eyes Wide,Lolita,3,Movies
200126,KUBRICK Style,Symmetry,Music,Long Takes,Color,Detail,Obsessive,Genius,Icon,Director,Artist,3,Movies
200127,KUBRICK Themes,War,Power,Future,Insanity,Sex,Violence,Tech,Humanity,Satire,Fate,3,Movies
200128,KUBRICK Awards,Oscar,BAFTA,DGA,Genius,Icon,Legend,Director,Best Film,Best Director,Writer,3,Movies
200129,FADS 80s 90s,Rubik's,Pogs,Tamagotchi,Cabbage Patch,Slime,Silly Bandz,Furbies,Pokemon Cards,Beanie Babies,Leg Warmers,1,Lifestyle
200130,FADS Modern,Fidgets,Squish,Pop Its,TikTok,AI Chat,Crypto,NFTs,Wordle,Barbie Pink,Pickleball,1,Lifestyle
200131,FADS Social,Dance,Slang,Meme,Trend,Viral,Challenge,Internet,Media,Music,Pop,1,Lifestyle
200132,ARCADES Games,Pac-Man,Donkey Kong,Galaga,Asteroids,Centipede,Frogger,Dig Dug,Qbert,Space Inv,Pinball,1,Gaming
200133,ARCADES Places,Mall,Boardwalk,Bar,Pizza,Bowling,Theatre,Dave Buster,Chuck E,Local,1,Lifestyle
200134,ARCADES Gear,Joystick,Buttons,Coin Slot,Screen,Score,High Score,Tokens,Tickets,Prizes,1,Gaming
200135,CIA Mission,Spy,Intel,Covert,Ops,Analyze,Protect,USA,Global,Secure,Secret,3,Politics
200136,CIA History,OSS,Cold War,Bay Pigs,Iran Contra,9 11,Hunt Bin Laden,Spy Sat,Tech,Codes,3,History
200137,CIA Terms,Ops,Agent,Analyst,Clearance,Langley,Assets,Briefing,Mission,Secure,Codes,3,Politics
200138,SERIAL K Famous,Bundy,Dahmer,Gacy,Zodiac,BTK,Ramirez,Ridgway,Wuornos,Kemper,Son Sam,3,History
200139,SERIAL K Terms,Victim,Pattern,Forensics,Profile,Manhunt,Catch,Trial,Jail,News,Podcast,3,Politics
200140,SERIAL K Media,True Crime,Books,Shows,Movies,Docs,Podcasts,News,Fictional,Real,Cases,1,Lifestyle
200141,CONST Tools,Hammer,Nails,Saw,Drill,Tape,Level,Square,Wrench,Pliers,Screws,1,Technology
200142,CONST Material,Wood,Steel,Concrete,Brick,Glass,Drywall,Pipes,Wires,Roof,Paint,1,Technology
200143,CONST Jobs,Builder,Laborer,Framing,Roofing,Plumber,Elect,Drywall,Painter,Foreman,Crane,1,Economics
200144,VACATION Places,Beach,City,Mountains,Cruise,Resort,Europe,Asia,USA,Road Trip,Camp,1,Lifestyle
200145,VACATION Activity,Swim,Hike,Tour,Relax,Eat,Shop,Explore,Photos,Sleep,Play,1,Lifestyle
200146,VACATION Travel,Plane,Car,Train,Bus,Ship,Boat,Bike,Walk,Pack,Go,1,Transportation
200147,HOLLYWOOD Films,Blockbuster,Indie,Oscar,Red Carpet,Star,Director,Actor,Studio,Premiere,CGI,1,Movies
200148,HOLLYWOOD Biz,Deals,Agents,Studios,Box Office,Greenlight,Script,Casting,Sequel,Franchise,3,Economics
200149,HOLLYWOOD Places,LA,CA,Studios,Sign,Walk Fame,Sunset,Beverly,Hills,Malibu,Venice,1,Geography
200150,FLIGHT Planes,Jet,Prop,Commercial,Fighter,Bomber,Cargo,Private,Glider,Chopper,Drone,1,Transportation
200151,FLIGHT Terms,Take off,Landing,Runway,Gate,Seat,Pilot,Crew,Cabin,Cockpit,Flight,1,Transportation
200152,FLIGHT History,Wright Bros,Lindbergh,Amelia,War,Jets,Concorde,Space,Future,Boeing,Airbus,1,History`,$g=`Category,Word1,Word2,Word3,Word4,Word5,Word6,Word7,Word8,Word9,Word10,Score,Category
Space,Moon,Planets,Astronaut,Galaxy,Telescope,Rocket,1,Science
Moon,Crater,Apollo 11,Full Moon,Gravity,Lunar,1,Science
Planets,Mars,Saturn,Jupiter,Venus,Mercury,Neptune,1,Science
Astronaut,Helmet,Spacesuit,NASA,Zero G,Air Tank,Training,1,Science
Galaxy,Stars,Milky Way,Andromeda,Nebula,Dust,Clusters,1,Science
Telescope,Lens,Focus,Tripod,Hubble,1,Science
Rocket,Engine,Launch Pad,Booster,Ignition,Stage,1,Science
Crater,Impact,Deep Hole,Dust,Surface,Ancient,Rocky,3,Science
Apollo 11,Moon Walk,Armstrong,Flag,Eagle,Lander,1969,3,History
Full Moon,Night Sky,Tides,Wolves,Phase,Cycle,1,Nature
Gravity,Force,Weight,Pull,Physics,Mass,Falling,1,Science
Orbit,Path,Satellite,Circle,Station,Loop,3,Science
Lunar,Eclipse,Module,Regolith,Tidal,Robotic,Mission,3,Science
Mars,Red Planet,Rover,Canals,Volcano,Dust Storm,Elon,1,Science
Saturn,Rings,Titan,Gas Giant,Hexagon,Windy,1,Science
Jupiter,Great Red,Moons,Europa,Pressure,Largest,Storm,1,Science
Venus,Acid Rain,Clouds,Sister,Venus Fly,Volcanic,1,Science
Mercury,Closest,Smallest,Hot Days,Cold Night,Iron Core,Crust,1,Science
Neptune,Deep Blue,Triton,Freezing,Voyager,Winds,Outermost,1,Science
Helmet,Visor,Oxygen,Seal,Comm Link,Safety,3,Science
Spacesuit,White,Layers,Gloves,Boots,Patch,Tether,1,Science
NASA,Houston,Florida,Science,Research,Logo,Space X,1,Science
Zero G,Floating,Weightless,Drift,No Floor,Spinning,Fun,3,Science
Air Tank,Breathing,Pressure,Valve,Life,Supply,3,Science
Training,Gym,Centrifuge,Simulate,Underwater,Study,Test,1,Science
Stars,Burning,Light,Sun,Twinkle,Constel,Nova,1,Nature
Milky Way,Spiral,Old Stars,Center,Black Hole,Home,1,Science
Andromeda,Neighbor,Collision,Distant,Billion,Light Year,3,Science
Nebula,Orion,Gas Cloud,Colors,Nursery,Hubble,Pillars,5,Science
Dust,Particles,Space,Dirty,Speck,Cloud,Vacuum,1,Nature
Clusters,Groups,Dense,Gravity,Globular,Open,Massive,5,Science
Lens,Optics,Curve,Focus,Vision,3,Science
Mirror,Reflect,Silver,Looking,Symmetry,1,Science
Focus,Blurry,Adjust,Eye,Dial,Target,1,Science
View,Horizon,Lookout,Sight,Landscape,Window,Scene,1,Nature
Tripod,Three Legs,Stand,Support,Camera,Steady,Mount,3,Science
Hubble,Orbit,Deep Space,Repair,Camera,Shuttle,Discovery,3,Science
Engine,Power,Nozzle,Combustion,Thrust,Heat,1,Science
Fuel,Liquid,Oxygen,Hydrogen,Tank,Energy,Refuel,1,Science
Launch Pad,Gantry,Concrete,Coast,Ready,Static,Tower,3,Science
Booster,Kick,Ascent,Detatch,Speed,3,Science
Ignition,Spark,Flame,Fire,Start,Countdown,Button,3,Science
Stage,First,Second,Separate,Booster,Rocket,Cutoff,3,Science
Impact,Crash,Boom,Meteor,Strike,Blast,3,Science
Deep Hole,Pit,Abyss,Bottom,Cave,Dark,Depth,1,Nature
Surface,Flat,Texture,Top Layer,Ground,Outside,Skin,1,Science
Ancient,Old,Aged,Antique,History,Legacy,Distant,1,History
Rocky,Rugged,Craggy,Pebble,Boulders,1,Nature
Armstrong,First Man,Pilot,Hero,Navy,Icon,Ohio,3,History
Flag,Fabric,Pole,Wave,Symbol,Stripes,Banner,1,History
Eagle,Lander,Bird,Wings,Claws,Flight,Predator,1,Nature
Lander,Touchdown,Legs,Touch,Station,Site,Probe,5,Science
1969,Sixties,Summer,Woodstock,Nixon,Retro,Vintage,3,History
Glowing,Shiny,Luminous,Vivid,Radiant,Light,1,Nature
Night Sky,Darkness,Evening,Midnight,Watching,Space,1,Nature
Tides,Ocean,High Tide,Low Tide,Waves,Flow,3,Nature
Wolves,Howl,Pack,Forest,Canine,Alpha,Winter,1,Nature
Phase,Quarter,Crescent,Gibbous,Waning,Waxing,New Moon,3,Science
Cycle,Repeat,Pattern,Circle,Routine,Loop,3,Science
Red Planet,Mars,Rusty,Dusty,Desert,Dry,Oxide,1,Science
Rover,Wheels,Camera,Remote,Sample,Robot,Curiosity,3,Science
Canals,Waterway,Ditch,Narrow,Channel,Path,3,Science
Volcano,Lava,Magma,Erupt,Ash,Smoke,Peak,1,Nature
Dust Storm,Windy,Blinding,Red Cloud,Dry,Desert,Gust,3,Nature
Elon,Tesla,X,Space X,Boss,Rich,Vision,1,Science
Rings,Circles,Hoops,Halo,Bands,Disk,Orbit,1,Science
Titan,Giant,Moon,Frozen,Nitrogen,Big,Colossus,3,Science
Gas Giant,Cloudy,No Solid,Huge,Vapor,Hydrogen,Massive,3,Science
Yellow,Pale,Lemon,Gold,Color,Sunlight,1,Nature
Hexagon,Six Sides,Shape,Geometry,Pattern,Polygon,Angle,3,Science
Great Red,Storm,Eye,Wind,Oval,Giant,Swirl,3,Science
Moons,Natural,Satellite,Orbiters,Worlds,Planets,Night,1,Science
Europa,Ice Crust,Ocean,Alien,Hidden,Shell,Water,5,Science
Pressure,Heavy,Crush,Depth,Weight,Steam,3,Science
Acid Rain,Corrosive,Toxic,Liquid,Burn,Hazard,Venom,3,Nature
Hot,Heat,Boiling,Sizzle,Warm,Baking,Fever,1,Nature
Clouds,Mist,Fog,Fluffy,White,Sky,Overcast,1,Nature
Sister,Sibling,Twin,Family,Similar,Related,Bond,1,Nature
Smallest,Tiny,Little,Mini,Minor,Puny,Short,1,Science
Iron Core,Center,Heavy,Magnetic,Solid,Hard,Inside,5,Science
Freezing,Chilly,Ice,Frost,Bitter,Numb,Polar,1,Nature
Voyager,Probe,Traveler,Journey,Deep Space,NASA,Record,3,Science
Outermost,Edge,Final,Last,Remote,Boundary,Distant,3,Science
Visor,Shield,Screen,View,Protection,Face,3,Science
Oxygen,Air,Breathing,Life,Pure,Tank,1,Science
Seal,Tight,Closing,Lock,Gasket,Rubber,Secure,3,Science
White,Bright,Pure,Clean,Blank,Snow,Color,1,Nature
Layers,Stacked,Tiers,Sheets,Plies,Levels,Depth,1,Science
Spiral,Twist,Curved,Coil,Helix,Swirl,Winding,3,Science
Black Hole,Gravity,Darkness,Singular,Event,Absorb,3,Science
Neighbor,Local,Next Door,Nearby,Friend,Close,Area,1,Nature
Collision,Crash,Impact,Smash,Wreck,Meeting,Hit,3,Science
Orion,Hunter,Belt,Winter,Bow,Rigel,3,Science
Gas Cloud,Mist,Nebula,Fumes,Vapor,Plume,Aerosol,3,Science
Colors,Rainbow,Hues,Tints,Shades,Palette,Bright,1,Nature
Nursery,Cradle,Baby,Birth,Infant,Care,Seed,3,Nature
Pillars,Columns,Posts,Support,Stone,Towers,Tall,3,Science
Particles,Bits,Specks,Atoms,Grains,Fragments,Motes,3,Science
Vacuum,Empty,Suction,Clean,Airless,Space,3,Science
Speck,Tiny Bit,Dot,Small,Grain,Atom,Point,3,Nature
Groups,Teams,Crowds,Bundles,Sets,Piles,Clumps,1,Science
Dense,Thick,Heavy,Packed,Tight,Firm,3,Science
Globular,Spherical,Ball,Globe,Bead,Orb,5,Science
Optics,Lenses,Sight,Vision,Eyes,Focus,5,Science
Curve,Bend,Arch,Arc,Bow,Swerve,1,Science
Clear,Plain,Pure,Glassy,Visible,Clean,1,Nature
Reflect,Mirror,Bounce,Echo,Gleam,Shine,Return,3,Science
Silver,Metal,Grey,Coin,Chrome,Nickel,1,Nature
Symmetry,Balanced,Equal,Same,Match,Even,3,Science
Blurry,Fuzzy,Hazy,Mist,Unclear,Out Of,Vague,1,Science
Power,Strength,Energy,Might,Electricity,Juice,1,Science
Nozzle,Spout,Tip,Spray,Outlet,Opening,Funnel,5,Science
Combustion,Fire,Burn,Explosion,Ignite,Flare,5,Science
Thrust,Push,Lift,Drive,Propel,Boost,Shove,3,Science
Gantry,Tower,Frame,Bridge,Scaffold,Crane,5,Science
Concrete,Cement,Pavement,Grey,Slab,1,Science
Countdown,Timer,Final Secs,Ten,Zero,Wait,1,Science
Force,Push,Pull,Pressure,Muscle,Strength,Drive,1,Science
Mass,Size,Weight,Bulk,Body,Matter,Quantity,3,Science
Falling,Dropping,Plunging,Tumbling,Diving,Descent,Sinking,1,Nature
Speed,Fast,Velocity,Quick,Rapid,Tempo,Pace,1,Science
Loop,Circle,Ring,Coil,Curled,Spiral,1,Science
Crash,Smash,Wreck,Bang,Impact,Collision,Accident,1,Science
Boom,Loud,Sound,Thunder,Blast,Noise,Echo,1,Science
Depth,Deep,Low,Bottom,Deep Water,Abyss,Void,3,Science
Flat,Level,Smooth,Even,Plain,Platter,Surface,1,Nature
Rocky,Stony,Rugged,Granite,Jagged,Rough,1,Nature
Ohio,States,America,Flag,Akron,Cleveland,Midwest,3,History
Sixties,Hippie,Peace,Retro,Vintage,Decade,History,3,History
Summer,Hot,Sunny,Beach,July,Vacation,Season,1,Nature
Nixon,President,Politics,Watergate,History,Leader,Seventies,3,History
Retro,Old School,Classic,Cool,Style,Past,3,History
Vintage,Antique,Old,Aged,Rare,Classic,Quality,3,History
Vivid,Bright,Bold,Colorful,Strong,Rich,3,Nature
Radiant,Glowing,Beaming,Shining,Warm,Solar,3,Nature
Flow,River,Stream,Current,Glide,Water,1,Nature
Howl,Cry,Wail,Wind,Wolf,Sound,Noisy,1,Nature
Pack,Group,Bundle,Box,Travel,Carry,Set,1,Nature
Forest,Trees,Woodland,Nature,Green,Woods,Hiking,1,Nature
Alpha,Leader,First,Top Dog,Master,Beginning,Greek,3,Science
Logo,Brand,Badge,Symbol,Design,Patch,Emblem,1,Science
Houston,City,Texas,Mission,Control,Space City,Astros,3,History
Florida,Beach,Miami,Orlando,Sun State,Palms,Coast,3,History
Science,Lab,Biology,Physics,Study,Data,Method,1,Science
Research,Study,Books,Search,Facts,Testing,Finder,3,Science
Space X,Musk,Falcon,Starship,Mars,Dragon,Rocket,3,Science
Drift,Slide,Float,Move,Gliding,Coast,Shift,3,Nature
Spinning,Turning,Rotate,Whirling,Dizzy,Twist,Cycle,1,Science
Supply,Stock,Goods,Provide,Stores,Cargo,Source,1,Science
Gym,Workout,Exercise,Fitness,Weights,Treadmill,Health,1,Sports
Simulate,Mimic,Copy,Model,Virtual,Fake,Pretend,3,Science
Test,Exam,Check,Trial,Quiz,Analyze,Grade,1,Science
Sun,Solar,Yellow,Star,Day,1,Nature
Twinkle,Shine,Sparkle,Glimmer,Flicker,Glint,Light,1,Nature
Nova,Explode,Burst,Star,Super,Flash,5,Science
Center,Middle,Core,Heart,Inside,Point,Hub,1,Science
Distant,Far,Remote,Away,Out There,Long Way,Isolated,1,Science
Billion,Huge Num,Wealthy,Nine Zeros,Rich,Massive,Grand,1,Science
Light Year,Distance,Travel,Far Away,Cosmic,Space,3,Science
Orion,Hunter,Belt,Myth,Winter,Sky,3,Science
Cradle,Baby,Rocking,Bed,Hold,Safe,Basket,3,Nature
Columns,Pillars,Posts,Vertical,Support,Towers,3,Science
Grains,Sand,Cereal,Wheat,Bits,Particles,Seeds,3,Nature
Motes,Specks,Dust,Glint,Air,Floating,5,Science
Clean,Wash,Pure,Tidy,Neat,Spotless,Fresh,1,Nature
Dot,Point,Speck,Period,Spot,Mark,Tiny,1,Science
Ball,Round,Sphere,Game,Bounce,Roll,Globe,1,Sports
Globe,Map,Earth,World,Sphere,Atlas,Orb,1,Science
Bead,Jewelry,Necklace,String,Glass,Small,3,Nature
Sight,Vision,Eyes,Seeing,Scene,Gaze,1,Nature
Blurry,Fuzzy,Out Focus,Hazy,Smudged,Dim,Unclear,1,Science
Hazy,Misty,Smoky,Cloudy,Foggy,Vague,Murky,3,Nature
Vague,Unclear,Obscure,Fuzzy,Cloudy,Loose,Distant,3,Science
Sharp,Pointy,Keen,Edge,Acute,Smart,Blade,1,Nature
Glassy,Clear,Frozen,Polished,Still,3,Nature
Chrome,Silver,Bumper,Polished,3,Cars
Nickel,Coin,Five Cents,Silver,Alloy,Money,3,Nature
Symmetry,Balance,Equal,Matching,Even,Same,3,Science
Steel,Iron,Strong,Alloy,Beam,1,Science
Crane,Bird,Lift,Tall,Machine,Hoisting,Construction,3,Science
Cement,Driveway,Mixing,Paste,Gray,Solid,1,Science
Slab,Chunk,Block,Thick,Piece,Concrete,3,Science
Timer,Clock,Watch,Seconds,Alarm,Period,Stopwatch,1,Science
Wait,Stay,Pause,Delay,Hold,Patient,Expect,1,Nature
Empty,Hollow,Vacant,Void,Blank,Bare,Clear,1,Science
Suction,Vacuum,Pull,Grip,Pump,Draw,Hold,3,Science
Point,Tip,End,Dot,Mark,Direct,Aim,1,Science
Small,Little,Mini,Puny,Slight,Minor,1,Nature
Bounce,Spring,Hop,Rebound,Jump,Reflect,Active,1,Sports
Roll,Wheel,Turn,Circle,Spin,Loaf,Cylinder,1,Science
Arch,Curve,Bridge,Bend,Gateway,Portal,Vault,3,Science
Swerve,Veer,Shift,Avoid,Curve,Dodge,3,Cars
Plain,Simple,Basic,Flat,Normal,Ordinary,1,Nature
Basic,Simple,Entry,Primary,Rough,Easy,Element,1,Science
Normal,Usual,Regular,Common,Typical,Average,Standard,1,Science
Average,Mean,Medium,Middle,Midpoint,Normal,Common,1,Science
Pace,Speed,Tempo,Rate,Step,Stride,Walking,3,Sports
Step,Stair,Stride,Footprint,Stage,Action,Move,1,Sports
Akron,Ohio,Rubber,City,Lebron,Midwest,USA,5,History
July,Summer,Month,Holiday,Seventh,1,Nature
Vacation,Trip,Travel,Holiday,Break,Away,Relax,1,Nature
Leader,Chief,Boss,Head,Alpha,Captain,Guide,1,History
Chief,Leader,Head,Main,Primary,Officer,Indian,3,History
Indian,Native,Culture,India,Asia,Pride,Tribe,3,History
India,Delhi,Spices,Yoga,Ganges,Silk,Mango,1,History
Delhi,Capital,India,City,Old Delhi,Busy,Urban,3,History
Spices,Flavor,Pepper,Cumin,Ginger,Seasoning,Hot,1,Food
Yoga,Stretch,Peace,Mat,Zen,Breathe,Pose,1,Sports
Mango,Fruit,Sweet,Orange,Tropical,Juicy,Stone,1,Food
Ganges,River,Holy,India,Sacred,Flow,5,History
Pose,Model,Stance,Still,Strike,Picture,Postue,3,Sports
Mat,Rug,Floor,Gym,Yoga,Padding,Flat,1,Sports
Zen,Calm,Peace,Quiet,Simple,Garden,Buddhism,3,History
Breathe,Inhale,Exhale,Lungs,Oxygen,Air,Deep,1,Nature
Tribe,Group,Family,Clan,Native,Village,People,3,History
Silk,Fabric,Soft,Luxury,Thread,Fiber,3,History
Urban,City,Town,Metropolis,Downtown,Street,Busy,3,History
Seasoning,Salt,Pepper,Spice,Flavor,Herbs,Rub,3,Food
Ginger,Root,Spice,Snap,Zest,Sushi,1,Food
Pepper,Black,Bell,Grinder,Spicy,Season,1,Food
Cumin,Seed,Spice,Earth,Ground,Taco,Aroma,3,Food
Valve,Switch,Pipe,Flow,Control,5,Science
Nozzle,Sprayer,Hose,Tip,Outlet,End,5,Science
Liquid,Fluid,Wet,Flowing,Melted,State,1,Science
Hydrogen,Element,Water,Proton,3,Science
Combustion,Fire,Burn,Explosion,Ignite,Flare,5,Science
Ignite,Spark,Flame,Burn,Start,Fire,3,Science
Thrust,Push,Engine,Launch,3,Science
Propel,Push,Move,Drive,Launch,Shove,Forward,3,Science
Tower,Building,Steel,High,Structure,Silo,1,Science
Gantry,Frame,Crane,Launch,Bridge,Steel,5,Science
Scaffold,Ladder,Frame,Build,Work,Stages,Tower,5,Science
Cement,Gray,Mixing,Wet,Build,Solid,1,Science
Mixer,Bowl,Kitchen,Electric,Whisk,Blend,Bake,3,Food
Pavement,Road,Street,Tar,Path,Walkway,Hard,3,Science
Asphalt,Road,Tar,Black,Path,Driveway,Smooth,3,Science
Tar,Black,Sticky,Gooey,Thick,Pitch,Seal,3,Science
Stairs,Steps,Levels,Climb,Ascent,Flight,Up,1,Science
Ladder,Climb,Rungs,Step,Paint,Height,1,Science
Clock,Time,Watch,Timer,Hand,Face,Second,1,Science
Watch,Look,Observe,Wrist,Gaze,See,1,Science
Alarm,Sound,Wake Up,Alert,Siren,Bell,1,Science
Siren,Loud,Police,Ambulance,Wail,Warn,Alert,1,Science
Ambulance,Medic,Nurse,Rescue,Siren,Hospital,Van,1,Science
Hospital,Doctor,Sick,Help,Clinic,Care,Nurse,1,Science
Doctor,Medic,Surgeon,Health,Visit,Physician,M.D.,1,Science
Surgeon,Doctor,Scalpel,Cut,Operate,Medical,Expert,5,Science
Scalpel,Knife,Sharp,Blade,Cut,Surgery,Tool,5,Science
Tool,Wrench,Hammer,Fix,Utility,Device,Handy,1,Science
Wrench,Tool,Nut,Bolt,Plumbing,Tighten,3,Science
Hammer,Nail,Tool,Pound,Build,Strike,Metal,1,Science
Nail,Hammer,Screw,Finger,Fasten,1,Science
Fasten,Clip,Tie,Zip,Link,Join,Secure,3,Science
Foods,Vegetables,Fruits,Grains,Dairy,Meat,Snacks,1,Food
Vegetables,Carrots,Spinach,Broccoli,Potatoes,Onions,Celery,1,Food
Carrots,Orange,Rabbit,Vitamin A,Crunchy,Carotene,Salad,1,Food
Spinach,Iron,Popeye,Green,Smoothie,Leaves,Saute,1,Food
Broccoli,Florets,Stalk,Steamed,Roasted,Fiber,Calcium,1,Food
Onions,Garlic,Shallots,Tears,Layers,Scallions,Chives,1,Food
Celery,Mirepoix,Potassium,Celeriac,Juice,Seeds,Ribs,1,Food
Grains,Wheat,Rice,Oats,Barley,Corn,Quinoa,1,Food
Rice,Jasmine,Basmati,Sushi,Risotto,Paella,Brown,1,Food
Oats,Porridge,Granola,Muesli,Rolled,Instant,Groats,1,Food
Barley,Malt,Beer,Soup,Pearl,Flour,Whiskey,3,Food
Corn,Cob,Husk,Syrup,Tortilla,Starch,Tamale,1,Food
Dairy,Milk,Cheese,Yogurt,Butter,Cream,Whey,1,Food
Cheese,Cheddar,Mozzarella,Parmesan,Gouda,Brie,Swiss,1,Food
Butter,Salted,Unsalted,Clarified,Whipped,Churn,Cultured,1,Food
Cream,Heavy,Sour,Clotted,Double,Custard,Ganache,1,Food
Whey,Protein,Powder,Curds,Lactose,Muscle,Shake,5,Food
Meat,beef,pork,chicken,lamb,turkey,duck,1,Food
beef,Steak,Burger,Sirloin,Brisket,Jerky,Fillet,1,Food
pork,Bacon,Ham,Sausage,Chop,Lard,Shoulder,1,Food
chicken,egg,hen,rooster,coop,feathers,wings,1,Food
lamb,shepherd,flock,ewe,meadow,wool,bleat,1,Food
turkey,Thanksgiving,Gobble,Stuffing,Gravy,Wattle,Drumstick,1,Food
Snacks,chips,pretzels,crackers,chocolate,candy,cookies,1,Food
chips,Silicon,Circuit,Poker,Casino,Fish,Salsa,1,Food
pretzels,mustard,twist,knot,soft,bavarian,rod,1,Food
crackers,Ritz,Matzo,Graham,Saltine,Soda,Triscuit,1,Food
candy,Marshmallow,Lollipop,Gumdrop,Taffy,Jellybean,Toffee,1,Food
cookies,Sugar,Dough,Baking,Raisin,Vanilla,Shortbread,1,Food
animals,Mammals,Birds,Reptiles,Fish,Insects,Amphibians,1,Nature
Mammals,Rodents,Primates,Marsupials,Whales,Bats,Elephants,3,Nature
Rodents,Mice,Rats,Hamsters,Squirrels,Beavers,Porcupines,3,Nature
Whales,Blubber,Baleen,Blowhole,Krill,Migration,Echolocation,1,Nature
Birds,Feathers,Wings,Beaks,Nests,Eggs,Flight,1,Nature
Feathers,Down,Quill,Plumage,Preening,Molting,Insulation,1,Nature
Wings,Lift,Drag,Span,Flapping,Gliding,Aircraft,1,Nature
Eggs,Shell,Yolk,Albumen,Hatching,Embryo,Incubation,1,Nature
Flight,Pilot,Altitude,Thrust,Propeller,Runway,Takeoff,1,Science
Fish,Gills,Scales,Fins,Sharks,Salmon,Ocean,1,Nature
Gills,Oxygen,Marine,Respiration,Freshwater,Tadpole,Underwater,3,Nature
Scales,Weight,Music,Map,Armor,Balance,Proportion,3,Nature
Sharks,Teeth,Jaws,Predator,Cartilage,Hammerhead,Reef,1,Nature
Insects,ants,bees,beetles,butterflies,mosquitoes,moths,1,Nature
ants,Colony,Queen,Worker,Soldier,Tunnels,Hill,1,Nature
bees,Honey,Pollen,Nectar,Wax,Stinger,Hive,1,Nature
beetles,Ladybugs,Fireflies,Scarabs,Weevils,Antennae,Larvae,1,Nature
mosquitoes,blood,malaria,bite,itch,buzz,repellent,1,Nature
moths,Night,Cocoon,Light,Silk,Wool,Fabric,1,Nature
Amphibians,Frogs,Toads,Salamanders,Newts,Swamps,Ponds,3,Nature
Frogs,Croak,Hopping,Slimy,Tongue,Lilypad,Rainforest,1,Nature
Toads,Warts,Poison,Gardens,Burrow,Glands,Hibernate,1,Nature
Salamanders,Axolotls,Regeneration,Caves,Streams,Skin,Tails,3,Nature
Swamps,Cypress,Mangrove,Bayou,Peat,Reeds,Bog,3,Nature
Ponds,Algae,Duckweed,Ripples,Mud,Snails,Reflection,1,Nature
mythology,Gods,Legends,Heroes,Monsters,Folklore,Creation,3,History
Gods,Rituals,Religion,Worship,Deity,Prayer,Spirit,1,History
Religion,Faith,Ritual,Prayer,Scripture,Worship,Belief,1,History
Worship,Prayer,Praise,Ritual,Devotion,Hymn,Faith,3,History
Deity,God,Goddess,Creator,Spirit,Immortal,Pantheon,5,History
Prayer,Faith,Worship,Meditation,Blessing,Gratitude,Silence,1,History
Spirit,Soul,Ghost,Energy,Essence,Aura,Life,1,History
Legends,Myths,Folklore,Heroes,Urban Myths,Tall Tales,Sagas,1,History
Myths,Legends,Gods,Heroes,Monsters,Folklore,Fables,1,History
Folklore,Myths,Legends,Fairy Tales,Fables,Tall Tales,Urban Legend,3,History
Heroes,Courage,Villains,Superpowers,Sidekicks,Justice,Sacrifice,1,History
Urban Myths,Hitchhiker,Hookman,Bloody Mary,Sewer Gator,Folklore,Hoaxes,3,History
Tall Tales,Paul Bunyan,Pecos Bill,John Henry,Exaggeration,Folk Heroes,Folklore,3,History
Sagas,Vikings,Iceland,Legends,Heroes,The Odyssey,Epic Tales,5,History
Heroes,Bravery,Villains,Superpowers,Sidekicks,Justice,Legends,1,History
Bravery,Courage,Heroism,Fearlessness,Boldness,Grit,Sacrifice,3,History
Villains,Antagonists,Nemesis,Masterminds,Criminals,Monsters,Outlaws,3,History
Superpowers,Flight,Strength,Speed,Invisibility,Telepathy,Healing,1,Gaming
Sidekicks,Robin,Watson,Partners,Loyalty,Teamwork,Support,3,Gaming
Justice,Fairness,Equality,Law,Rights,Courts,Punishment,3,History
Legends,Myths,Heroes,Folklore,Fables,Sagas,Tales,1,History
Monsters,Vampires,Werewolves,Zombies,Ghosts,Dragons,Mummies,1,History
Vampires,Blood,Dracula,Fangs,Sunlight,Coffins,Bats,1,History
Werewolves,Full Moon,Lycanthropy,Silver,Shapeshifter,Howling,Pack,1,History
Zombies,Undead,Apocalypse,Infection,Survival,Outbreak,Brains,1,Gaming
Ghosts,Spirits,Haunting,Apparition,Poltergeist,Afterlife,Phantoms,1,History
Dragons,Fire,Wings,Scales,Treasure,Magic,Smaug,1,History
Mummies,Pyramids,Egypt,Pharaohs,Bandages,Tombs,Afterlife,1,History
Folklore,Legends,Myths,Fables,Fairy Tales,Tall Tales,Urban Legend,3,History
Legends,Myths,Folklore,Heroes,Monsters,Gods,Fables,1,History
Myths,Gods,Legends,Heroes,Monsters,Folklore,Origins,1,History
Fables,Moral,Animals,Aesop,Storytelling,Characters,Tales,3,History
Fairy Tales,Magic,Folklore,Villains,Heroes,Princesses,Castles,1,History
Tall Tales,Paul Bunyan,Pecos Bill,John Henry,Exaggeration,Folklore,Legends,3,History
Urban Legend,Folklore,Ghost Story,Hoax,Myth,Rumor,Tall Tale,3,History
Creation,Art,Nature,Invention,Design,Genesis,Birth,3,Science
Art,Painting,Sculpture,Music,Dance,Drawing,Photography,1,History
Nature,Forests,Wildlife,Oceans,Mountains,Climate,Ecology,1,Nature
Invention,Patent,Prototype,Blueprint,Gadget,Machine,Idea,3,Science
Design,Graphic,Fashion,Interior,Product,Web,Logo,3,Science
Genesis,Creation,Big Bang,Origin,Beginning,Birth,The Bible,5,History
animation,Cartoons,Anime,Stop Motion,CGI,Flipbook,Claymation,3,Gaming
Cartoons,Animation,Anime,Comics,Characters,TV Shows,Movies,1,Gaming
Animation,Cartoons,Anime,Stop Motion,CGI,Flipbook,Storyboards,3,Gaming
Anime,Manga,Cosplay,Japan,Streaming,Characters,Movies,1,Gaming
Comics,Superheroes,Manga,Villains,Panels,Artists,Publishers,1,Gaming
Characters,Protagonist,Antagonist,Hero,Villain,Sidekick,Backstory,1,Gaming
TV Shows,Sitcom,Drama,Reality TV,Talk Show,Animation,Game Show,1,Gaming
Movies,Director,Actors,Genres,Script,Cinema,Hollywood,1,Gaming
Anime,Manga,Cosplay,Japan,Animation,Movies,Characters,1,Gaming
Manga,Shonen,Shojo,Action,Romance,Fantasy,Mangaka,3,Gaming
Cosplay,Costumes,Anime,Wigs,Makeup,Conventions,Props,3,Gaming
Japan,Tokyo,Sushi,Samurai,Anime,Mt Fuji,Nintendo,1,History
Animation,Cartoons,Anime,CGI,Stop Motion,Flipbook,Storyboards,3,Gaming
Birth,Newborn,Labor,Delivery,Hospital,Midwife,Nursery,1,Science
Mickey Mouse,Disney,Minnie Mouse,Donald Duck,Goofy,Disneyland,Cartoons,1,Gaming
Minnie Mouse,Mickey Mouse,Daisy Duck,Polka Dots,Pink Bow,Red Dress,Yellow Shoes,1,Gaming
Donald Duck,Daisy Duck,Nephews,Sailor Suit,Duckburg,Quacking,Short Temper,1,Gaming
Goofy,Max Goof,Goof Troop,Clumsy,Hyuck,Mickey Mouse,Donald Duck,1,Gaming
Disneyland,Fantasyland,Tomorrowland,Frontierland,Main Street,Theme Park,Walt Disney,1,History
Cartoons,Animation,Characters,Anime,Comedy,TV Shows,Superheroes,1,Gaming
Pixar,Animation,Toy Story,Disney,CGI,Finding Nemo,Monsters Inc,3,Gaming
Animation,Cartoons,Stop Motion,Anime,CGI,Storyboard,Flipbook,3,Gaming
Toy Story,Woody,Buzz,Pixar,Andy,Jessie,Rex,1,Gaming
Disney,Mickey Mouse,Theme Parks,Animation,Pixar,Marvel,Princesses,1,Gaming
CGI,Animation,3D Modeling,VFX,Special FX,Rendering,Green Screen,3,Science
Finding Nemo,Clownfish,Coral Reef,Dory,Marlin,Sea Turtle,Fish Tank,1,Gaming
Monsters Inc,Sully,Mike,Boo,Doors,Scream,Randall,1,Gaming
Marvel,Avengers,Spider-Man,Iron Man,X-Men,Comics,Superheroes,1,Gaming
Avengers,Iron Man,Thor,Hulk,Black Widow,Hawkeye,Thanos,1,Gaming
Spider-Man,Peter Parker,Web-Shooters,Uncle Ben,Green Goblin,Spider-Sense,Mary Jane,1,Gaming
Iron Man,Tony Stark,Avengers,Arc Reactor,Stark Tech,Jarvis,Armor Suit,1,Gaming
X-Men,Wolverine,Mutants,Professor X,Magneto,Storm,Cyclops,1,Gaming
Comics,Superheroes,Manga,Characters,Villains,Panels,Art,1,Gaming
Superheroes,Villains,Powers,Comics,Sidekick,Costumes,Masks,1,Gaming
Star Wars,The Force,Jedi,Sith,Lightsaber,Droids,Empire,1,Gaming
The Force,Jedi,Sith,Light Side,Dark Side,Balance,Mind Control,1,Gaming
Jedi,Force,Lightsaber,Padawan,Sith,Master,Yoda,1,Gaming
Sith,Dark Side,Darth Vader,Emperor,Darth Maul,Red Saber,Empire,3,Gaming
Lightsaber,Jedi,Sith,Kyber,Hilt,Force,Blade,1,Gaming
Droids,R2-D2,C-3PO,Astromech,Protocol,Battle Droid,Service,3,Gaming
Empire,Colony,Conquest,Emperor,Territory,Expansion,Dynasty,3,History
Disneyland,Mickey Mouse,Main Street,Fantasyland,Theme Park,Tomorrowland,Walt Disney,1,History
Mickey Mouse,Disney,Minnie Mouse,Donald Duck,Goofy,Pluto,Disneyland,1,Gaming
Main Street,Local Shops,Downtown,Small Town,Town Square,Sidewalks,Parades,3,History
Fantasyland,Fairytales,Magic,Castles,Princesses,Dragons,Storybooks,3,Gaming
Theme Park,Coaster,Ferris wheel,Mascot,Gift shop,Food stand,Ticket booth,1,Gaming
Tomorrowland,Future,Disney,Music,Space,Technology,Festival,3,Gaming
Walt Disney,Mickey Mouse,Disneyland,Animation,Theme Parks,Disney World,Cartoons,3,History
Princesses,Royalty,Castles,Fairytales,Tiaras,Gowns,Crowns,1,History
Royalty,Crown,Throne,Palace,Kingdom,Monarch,Dynasty,1,History
Castles,Moat,Knights,Towers,Dungeon,Drawbridge,Keep,1,History
Fairytales,Magic,Villains,Princesses,Castles,Folklore,Dragons,1,History
Tiaras,Princess,Weddings,Diamonds,Royalty,Pageants,Jewels,3,History
Gowns,Wedding,Prom,Evening,Ballgown,Graduation,Hospital,3,History
Crowns,Royalty,Gold,Jewels,Kings,Queens,Coronation,1,History`,ep=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10,word11,word12,word13,word14,word15,word16,word17,word18,word19,word20,word21,word22,word23,word24,word25
35000,1700 Fashion,Pannier,Stomacher,Tricorne,Cravat,Justaucorps,Fichu,Panniers,Breeches,Corset,5,History
35001,1800 Fashion,Spencer,Crinoline,Pelisse,Gaiter,Reticule,Bonnet,Pelisse,Cravat,Pantaloons,Chemise,Fichu,5,History
35002,Aaron Sorkin,West Wing,The Newsroom,Moneyball,Steve Jobs,Molly's Game,Sports Night,STUDIO 60,MALICE,3,Television
35003,Abolition,Garrison,Douglass,Stowe,Truth,TUBMAN,LIBERATOR,3,History
35004,Accordion,Bellows,Buttons,Reeds,Pallets,Valves,Straps,PALETTE,GRILL,3,Music
35005,acrobatics,Backflip,Handspring,Cartwheel,Somersault,Layout,Tuck,Pike,Aerial,Trapeze,Handstand,3,Sports
35006,Action,choreography,sequence,adrenaline,stunt,explosion,combat,showdown,Die Hard,Speed,Predator,Rambo,Crank,Commando,Gladiator,1,Movies
35007,Adams,Samuel,Ansel,Douglas,Abigail,John,Quincy,Federalist,Braintree,Ambassador,3,History
35008,Adobe Creative Software,Photoshop,Acrobat,Premiere,InDesign,1,Technology
35009,adult animation,Invincible,Archer,Futurama,Primal,Spawn,3,Television
35010,adult films,Deep Throat,Pirates,Taboo,Emmanuelle,Blue Movie,3,Movies
35011,Adventure,Odyssey,Heroism,Peril,Frontier,Venture,Jumanji,The Goonies,King Kong,The Mummy,Cast Away,Life of Pi,True Grit,1,Movies
35012,advertising TV,JINGLE,BUMPER,BILLBOARD,SLOT,Jingles,Placement,Reach,3,Television
35013,Afterlife,Duat,Maat,Anubis,Osiris,Amenti,Canopic,Ammit,5,History
35014,Agility,Nimbleness,Dexterity,Celerity,Quickness,Mobility,1,Sports
35015,Airbus Aircraft Designs,Beluga,A380,A350,A320,A400M,3,Transportation
35016,Alain Delon,Le Samourai,Purple Noon,L'Eclisse,Borsalino,5,Movies
35017,ALBATROSS VARIETIES,Wandering,Laysan,Royal,Shy,Diomedea,Phoebastria,Thalassarche,Phoebetria,5,Nature
35018,Alejandro Iñárritu Films,Babel,Birdman,Biutiful,21 Grams,Bardo,The Revenant,3,Movies
35019,Alexander the Great,Macedonia,Hellenism,Aristotle,Bucephalus,Persian Empire,King of Kings,Phalanx,3,3,History
35020,Alexander Hamilton,Treasury,Schuyler,Nevis,Burr,National Bank,Secretary,New York,Duel,Coast Guard,3,History
35021,Alice in Wonderland,Cheshire,Jabberwocky,Dormouse,Gryphon,Hatter,Walrus,Carpenter,Vorpal,1,Literature
35022,Alien Franchise,Ripley,Xenomorph,Nostromo,Facehugger,Weyland,Sulaco,Chestburster,Ash,Bishop,Egg,1,Movies
35023,All in the Family,Archie,Edith,Gloria,Meathead,Bunker,Mike Stivic,Norman Lear,Queens,Dingbat,3,Television
35024,Alphabet,Google,YouTube,Waymo,Android,DeepMind,Fitbit,Verily,Calico,1,Technology
35025,alternating current,Sinusoid,Impedance,Reactance,Phase,Amperage,Voltage,5,Science
35026,Alternative,Nirvana,Pixies,Pavement,Radiohead,Smiths,Grunge,Nonconformity,Eclectic,Shoegaze,Experimental,Blur,Oasis,1,Music
35027,Ambient,Brian Eno,Biosphere,Sweep Roach,Aphex Twin,Loscil,Tim Hecker,3,Music
35028,AMD,Ryzen,Radeon,Epyc,Zen,Athlon,Opteron,3,Technology
35029,American Express Card Tiers,Centurion,Platinum,Optima,Zync,3,Economics
35030,Amphibians,Axolotl,Bullfrog,Newt,Toad,salamander,spadefoot,1,Nature
35031,Amplifier,Gain,Treble,Midrange,Reverb,Presence,Master,TRANSISTOR,PREAMP,CABINET,COMBO,3,Music
35032,analog typewriters,Platen,Carriage,Typebar,Roller,3,Technology
35033,Ancient Civilizations,Sumerian,Minoan,Olmec,Aksumite,Phoenician,Etruscan,Aksum,Hittite,3,History
35034,Ancient Egypt,Pyramids,Sphinx,Papyrus,Hieroglyph,Ankh,Sarcophagus,Sarcophagus,Shabti,Pectoral,Cartonnage,1,History
35035,ancient mythology,Ragnarok,Olympus,Tartarus,Valhalla,Elysium,Chimera,mythology,enchantment,sorcery,quest,prophecy,1,History
35036,Ancient Roman Jurisprudence,Codex,Digest,Pandects,Lictor,Justinian,Solidus,Iconoclasm,Theodora,5,History
35037,Andrew Stanton Films,Finding Nemo,Finding Dory,John Carter,A Bug's Life,3,Movies
35038,Animation,Storyboard,CGI,Voice acting,Frame,Rendering,Stop motion,Anime,Keyframe,Akira,Toy Story,Shrek,Paprika,Coraline,1,Movies
35039,animation studios,Pixar,Ghibli,Aardman,Madhouse,Laika,Illumination,Gainax,1,Movies
35040,Annotation Types,Gloss,Scholion,Postil,Rubric,Commentary,5,Literature
35041,antennas,Yagi,Rabbit Ears,Dipole,Monopole,Parabolic,Bowtie,5,Technology
35042,ANTISEPTIC CHEMICALS,PEROXIDE,CHLORINE,ETHANOL,TRICLOSAN,IODINE,Phenol,Formalin,Bleach,3,Science
35043,ARACHNID MORPHOLOGY,SPINNERET,ARACHNID,PEDIPALP,CHELICERA,5,Nature
35044,architecture,Facade,Corinthian,Pendentive,Brutalism,Bauhaus,Cornice,Gargoyle,Column,Buttress,Pediment,Frieze,3,Art
35045,Arctic Ecosystems,Tundra,Taiga,Muskeg,Palsa,3,Nature
35046,Arena,Coliseum,Enclosure,Concourse,Pavilion,Grandstand,1,Sports
35047,Arnold Schwarzenegger Movies,Terminator,Red Heat,Total Recall,True Lies,Twins,Junior,1,Movies
35048,Aroma,Terpene,Esters,Bouquet,Phenols,Sillage,5,Science
35049,Aromatic Notes,Bergamot,Jasmine,Vetiver,Musk,Neroli,Sandalwood,Patchouli,Lavender,Rosemary,3,Lifestyle
35050,Assembly Lines,Conveyor,Chassis,Robotics,Fixture,3,Technology
35051,Assist,Support,Facilitate,Collaboration,Contribution,Reinforce,Aid,1,Language
35052,Astronauts,GLENN,SHEPARD,ARMSTRONG,LOVELL,Tereshkova,Ride,3,Science
35053,Athletic Metrics,Conditioning,Endurance,Stamina,Agility,Strength,Mobility,Dexterity,Celerity,Quickness,3,Sports
35054,Atmosphere,exosphere,mesosphere,stratosphere,thermosphere,troposphere,altitude,barometric,3,Science
35055,ATMOSPHERIC LAYERS,TROPOSPHERE,STRATOSPHERE,MESOSPHERE,IONOSPHERE,EXOSPHERE,3,Science
35056,Atmospheric Air Currents,Squalls,Gales,Breezes,Drafts,Blasts,Zephyrs,3,Nature
35057,Atmospheric Condensation,Dew,Frost,Mist,Fog,1,Nature
35058,Atmospheric Moisture,Humidity,Dewpoint,Saturation,Hygrometer,Vapor,Pressure,Isobar,3,Science
35059,ATMOSPHERIC VORTEX TYPES,Tornado,Twister,Whirlwind,Waterspout,1,Nature
35060,Atomic Age,TRINITY,FISSION,GEIGER,FALLOUT,ENOLA GAY,Radioactivity,Physicists,Uranium,Plutonium,3,History
35061,Attribution Artifacts,Citation,Footnote,Excerpt,Passage,Reference,3,Literature
35062,audience ratings,Share,Overnights,Live+7,Demo,Sweeps,5,Television
35063,Audition,Monologue,Reader,Slate,Headshot,Resume,Callback,Cold Read,Sides,Rehearsal,Screen test,3,Art
35064,Augustus,Octavian,Princeps,Actium,Livia,Agrippa,3,History
35065,Away Game,VISITORS,ROADIE,GRAY,HOTEL,Visitor,Road Trip,Itinerary,Hospitality,Excursion,1,Sports
35066,Awe,Aurora,Supernova,Monolith,Abyss,1,Nature
35067,Banjo,Resonator,Tone ring,Tension hoop,Fifth string,5,Music
35068,Bank Holiday,Vault,Federal,Monday,Sterling,Statutory,Commerce,Financial,Closure,Regulation,Transaction,Monetary,3,Economics
35069,Bank of America,Merrill,Lynch,Charlotte,Zelle,3,Economics
35070,Bankruptcy,Enron,Lehman,WorldCom,Nortel,Chapter 7,Chapter 11,Debtor,Receiver,Creditor,Insolvency,6,Economics
35071,Bark,phloem,cambium,cork,rhytidome,protective,xylem,5,Nature
35072,Barnacles,GOOSENECK,ACORN,PEDUNCLE,CIRRI,SCUTUM,TERGUM,Cirripedia,Sessile,Fouling,5,Nature
35073,Baroque,Bach,Fugue,Cantata,Oratorio,Toccata,Harpsichord,Vivaldi,Handel,Purcell,Scarlatti,Telemann,3,Music
35074,Baseball Power,Grand Slam,Moonshot,Dinger,RBI,1,Sports
35075,Basketball Box Score,Assist,Rebound,Steal,Block,1,Sports
35076,Basketball Moves,Alley-Oop,Layup,Fadeaway,Eurostep,1,Sports
35077,Basketball Rebounding,Boxout,Putback,Outlet,Boards,Carom,3,Sports
35078,BATHYMETRIC TRENCHES,Mariana,Tonga,Kermadec,Kuril,Japan,Atacama,5,Geography
35079,Berkshire Hathaway,Geico,Duracell,NetJets,BNSF,Dairy Queen,Lubrizol,3,Economics
35080,Berserkers,Ulfhednar,Bearskin,Fury,Odin,5,History
35081,Big Oil,ExxonMobil,Chevron,Shell,Aramco,Equinor,Gazprom,Texaco,Amoco,Castrol,1,Economics
35082,Big Pharma,Pfizer,Merck,Novartis,Sanofi,AbbVie,Bayer,Eli Lilly,Moderna,Roche,1,Economics
35083,Big Tech,Alphabet,Apple,Meta,Microsoft,Netflix,Oracle,Google,Amazon,Nvidia,1,Technology
35084,Bill of Rights,ASSEMBLY,RELIGION,SPEECH,PRESS,PETITION,SEARCH,SEIZURE,COUNSEL,Ratify,Liberties,Infringement,Due Process,1,Politics
35085,BIODIVERSITY METRICS,TAXONOMY,PHYLOGENY,ENDEMIC,KEYSTONE,HOTSPOT,SPECIATION,Richness,Evenness,Endemism,5,Science
35086,Block,rejection,stuff,swat,denial,rim-protection,goaltending,verticality,1,Sports
35087,Block Inc Properties,Tidal,Spiral,Afterpay,Caviar,4,Technology
35088,Blossoms,Pollen,Stigma,Inflorescence,Anther,Gamete,Exine,3,Nature
35089,Blues,Delta,Shuffle,Slide,Muddy,Memphis,Chicago,Twelve-Bar,Slide Guitar,Harmonica,3,Music
35090,Board of Directors,Chairman,Quorum,Trustee,Bylaws,Fiduciary,Advisor,Treasurer,Secretary,3,Economics
35091,Bob Dylan,Harmonica,Hibbing,Guthrie,Newport,Zimmerman,Nashville,Tarantula,Highway 61,3,Music
35092,Bob Odenkirk,Saul Goodman,Better Call,Nobody,Lucky Hank,1,Television
35093,Boeing Aviation Programs,Chinook,Clipper,Starliner,Dreamliner,3,Transportation
35094,Booking Holdings,Booking.com,Kayak,Priceline,Agoda,OpenTable,3,Technology
35095,Boston Tea Party,Harbor,Griffin,Dartmouth,Tea Chest,Sons of Liberty,Taxation,Sam Adams,1,History
35096,Botanical Extracts,Resinoid,Absolute,Oleoresin,Infusion,Distillate,Tincture,Hydrosol,5,Science
35097,Box Office,Gross,Weekend,Tentpole,Multiplier,Revenue,Profit,Admissions,Commercial,3,Movies
35098,box office flops,Ishtar,Gigli,Waterworld,Cats,Stealth,Pluto Nash,3,Movies
35099,Branding,Identity,Tagline,Trademark,Logo,Typeface,Pantone,Kerning,3,Economics
35100,BRINE PRESERVATION,Pickling,Curing,Kimchi,Olives,Capers,Sodium,Hypersaline,Mineral,3,Food
35101,British Empire,Victoria,Colonies,Navy,East India,Raj,Dominion,Crown,Commonwealth,Monarchy,Parliament,1,History
35102,british literature,Hamlet,Middlemarch,Jane Eyre,Ivanhoe,Macbeth,1,Literature
35103,Buds,Shoots,Dormancy,Meristem,Nodes,Sprouting,Scales,Vegetative,Embryonic,3,Nature
35104,Burrows,Sett,Warren,Lodge,Holt,Aggregation,Hierarchy,Stampede,Grazing,5,Nature
35105,BUSINESS STRUCTURES,HOLDING,AFFILIATE,SUBSIDIARY,PARTNERSHIP,3,Economics
35106,Byzantium,Justinian,Solidus,Iconoclasm,Theodora,Orthodox,Basileus,Mosaic,Exarchate,3,History
35107,cable networks,MTV,TBS,AMC,USA,SYFY,HGTV,ESPN,Xfinity,Sky,NBC,Universal,1,Television
35108,Cactus,Succulent,Desert,Prickly,Saguaro,Aloe,Arid,Xeriscape,1,Nature
35109,Camera Angle,Dutch Tilt,Low Angle,High Angle,POV,Eye Level,Extreme Wide,Close Up,Medium Shot,Oblique,Aerial,Subjective,3,Movies
35110,cancellations,Jericho,Sense8,Deadwood,Manifest,Renewals,Pick-up,Upfronts,Syndication,3,Television
35111,candle makers,Paraffin,Beeswax,Stearin,Tallow,Wick,Mold,3,Art
35112,Canon,Lore,Scripture,Apocrypha,Timeline,authenticity,establish,official,documentation,3,Literature
35113,Canopy,foliage,understory,emergent,epiphyte,photosynthesis,habitat,3,Nature
35114,Caption Styles,Closed,Open,CEA-608,CEA-708,Teletext,Roll-up,Pop-on,Paint-on,5,Television
35115,Cartography,Mercator,Isoline,Azimuth,Projection,Datum,Longitude,Latitude,Equator,Meridian,Scale,5,Geography
35116,Cassette,Capstan,Spool,Roller,Hubs,Window,LEADER,SHELL,CHROME,5,Technology
35117,Casting,Ensemble,Director,Talent,Role,Sides,Agency,Headshot,Typecast,Callback,3,Movies
35118,Cate Blanchett Films,Blue Jasmine,Elizabeth,Carol,The Aviator,Hanna,Manifesto,3,Movies
35119,Caterpillars,Larvae,Chrysalis,Herbivore,Prolegs,Molting,Silk,Segmented,3,Nature
35120,CCR (Creedence Clearwater Revival),Proud Mary,Green River,Lodi,Commotion,Molina,3,Music
35121,celebrity cameos,Stan Lee,Bill Murray,Matt Damon,Tom Cruise,Ed Sheeran,1,Movies
35122,Celestial Nodes,Horizon,Zenith,Nadir,Azimuth,5,Science
35123,Cello,ENDPIN,FINGERBOARD,TAILPIECE,F-HOLE,3,Music
35124,central europe,Austria,Poland,Germany,Hungary,Slovakia,Czechia,1,Geography
35125,CEO,Nadella,Pichai,Bezos,Cook,1,Economics
35126,Cephalopoda,Octopus,Squid,Nautilus,Cuttlefish,3,Nature
35127,CFO,Ledger,EBITDA,Audit,Capital,Revenue,Porat,Hood,Maestri,Kress,5,Economics
35128,CGI Milestones,Avatar,Gollum,Toy Story,Jurassic,Thanos,Shrek,Rendering,Modeling,Texture,Wireframe,Shaders,3,Movies
35129,Championship,Trophy,Parade,Pennant,Ring,Pinnacle,Prestige,Triumph,Laurels,Coronation,1,Sports
35130,character actors,Sideways,Barton Fink,Adaptation,The Fly,Buscemi,Giamatti,Turturro,Tucci,Dafoe,Walken,3,Movies
35131,character design,Silhouette,Palette,Costume,Archetype,Pose,Maquette,Rigging,Anatomy,Turnaround,Thumbnail,3,Art
35132,CHARIOT RACING,CIRCUS,SPINA,META,AURIGA,QUADRIGA,FACTION,Chariot,Mappa,5,History
35133,chemical cleaning,Acetone,Benzene,Ammonia,Toluene,Xylene,Bleach,3,Science
35134,chemical products,Polymer,Solvent,Reagent,Ethylene,3,Science
35135,Chess Tactics,Skewer,Fork,Pin,Deflection,Overload,Discovery,5,Gaming
35136,Childbirth,Epidural,Dilation,Placenta,Oxytocin,Midwife,Doula,LABOR,BREECH,3,Health
35137,children’s educational puppetry,MUPPETS,BARNEY,FRAGGLE ROCK,TELETUBBIES,Big Bird,Elmo,Grover,Kermit,1,Television
35138,Christian Bale Films,Hostiles,Equilibrium,Vice,The Fighter,Rescue Dawn,Little Women,3,Movies
35139,Christopher Nolan Films,Tenet,Dunkirk,Interstellar,Following,Oppenheimer,1,Movies
35140,Cinema,IMAX,Multiplex,Drive-In,Nickelodeon,Auditorium,Projector,Cinematography,Box office,Feature film,1,Movies
35141,Cisco Networking Series,Webex,Meraki,Catalyst,Nexus,Firepower,Jabber,5,Technology
35142,Citigroup,Citibank,Banamex,Diners Club,Citigold,ThankYou,Phibro,3,Economics
35143,civic institutions,Tribunal,Archive,Guildhall,Lyceum,Library,Chancery,3,Politics
35144,CIVIC STRUCTURES,ROSTRA,BASILICA,TEMPLE,PORTICO,TABULARIUM,5,History
35145,Civil Rights Movement,SELMA,JIM CROW,MALCOLM X,ROSA PARKS,Segregation,Integration,Boycott,Activism,Protest,1,History
35146,Civil War,Antietam,Sumter,Muskets,Bayonets,Ironclads,Vicksburg,Appomattox,Confederacy,Secession,Gettysburg,1,History
35147,Claire Danes,Homeland,Stardust,Temple,Fleishman,My So-Called,Romeo,3,Television
35148,Clarinet,Barrel,Lower joint,Upper joint,Register key,5,Music
35149,classic animation archives,CELS,ACETATE,LIGHTBOX,MULTIPLANE,ZOETROPE,ROTOSCOPE,Nitrate,Dopesheet,Platen,Moviola,5,Art
35150,classic film restoration,Criterion,Janus,Photoplay,Cineteca,Cellulose,Emulsion,Vinegar,Splice,5,Movies
35151,Classic Theme Songs,Skyfall,Ghostbusters,Footloose,Flashdance,Fame,Let It Go,1,Music
35152,Classical,Haydn,Beethoven,Clementi,Salieri,Sonata,Concerto,Orchestra,Harmony,1,Music
35153,classical acting,Soliloquy,Pentameter,Declamation,Prosody,Rhetoric,Diction,Elocution,5,Art
35154,Classical Symphony Nicknames,Eroica,Jupiter,Pastoral,Surprise,Pathetique,Resurrection,Clock,5,Music
35155,Cleats,Studs,Spikes,Blades,Molded,Traction,Protrusion,1,Sports
35156,climate regions,Tundra,Savanna,Steppe,Taiga,Chaparral,Tropical,Arid,Temperate,3,Geography
35157,Coastline,Shoreline,Archipelago,Estuary,Peninsula,Cliff,Inlet,1,Geography
35158,CODA,Ruby,Frank,Jackie,Leo,Rossi,Fishing,ASL,3,Movies
35159,Cold front,Occluded,Squall,Trough,Frontolysis,Boundary,Air mass,Inversion,3,Science
35160,cold opens,COUCH GAG,CHALKBOARD,COLD START,TEASER,3,Television
35161,Cold War,KGB,CIA,Sputnik,Containment,Proxy,Berlin Wall,Communism,Ideology,Iron Curtain,Blockade,1,History
35162,College,BURSAR,TENURE,PROVOST,ALUMNI,QUAD,3,Education
35163,cologne,Drakkar,Sauvage,Aventus,Eternity,Fahrenheit,3,Lifestyle
35164,Colonization,British,Spanish,French,Dutch,Imperialism,Annexation,Hegemony,Expansionism,1,History
35165,Columbus Day,Nina,Pinta,Santa Maria,October,Navigator,Voyage,Discovery,Expedition,Vessel,1,History
35166,Comcast,Xfinity,Sky,NBC,Universal,3,Technology
35167,Comedy,Airplane,Superbad,Borat,Clueless,slapstick,irony,caricature,farce,parody,absurdity,1,Movies
35168,communications,Telegraph,Satellite,Fiber,Radio,Semaphore,1,Technology
35169,COMPACT DISC ANATOMY,PIT,LAND,LASER,JEWEL,BOOKLET,5,Technology
35170,Competition,REGATTA,DERBY,OLYMPIAD,TRIATHLON,Rivalry,Contest,Adversary,Opponent,Challenge,Stakes,1,Sports
35171,competition shows,Top Chef,The Voice,Drag Race,Bake Off,1,Television
35172,COMPETITIVE GAMING RANKS,BRONZE,SILVER,GOLD,MASTER,CHAMPION,3,Gaming
35173,Composer,MOZART,WAGNER,CHOPIN,VIVALDI,BRAHMS,LISZT,Score,Notation,Opus,1,Music
35174,Compost,decomposition,organic,mulch,microbes,aeration,3,Nature
35175,Concept Cars,Furai,Egoista,Birdcage,Prophecy,C-X7 N Vision 74,Modulo,Testudo,Aerovette,Sixteen,5,Transportation
35176,Conditioning,Endurance,Stamina,Regimen,Fitness,Preparation,Recovery,Drill,Intensity,1,Sports
35177,Conductor,BERNSTEIN,KARAJAN,TOSCANINI,SOLTI,Maestro,Podium,Tempo,3,Music
35178,Confederacy,Richmond,Secession,Sumter,Davis,Dixie,Jackson,Rebel,Beauregard,Robert E. Lee,3,History
35179,CONSTANTINIAN DYNASTY,Constantine,Constantius,Constans,Crispus,Julian,5,History
35180,Constitution,Preamble,Article,Amendment,Ratify,Delegate,Parchment,Jurisdiction,Codification,Legislative,1,Politics
35181,Consumer,Herbivore,Carnivore,Omnivore,Detritivore,1,Science
35182,consumer electronics,Walkman,iPhone,Kindle,Discman,Polaroid,1,Technology
35183,content ratings,TV-Y7,TV-PG,TV-14,TV-MA,TV-G,TV-Y,3,Television
35184,Continental Army,Musket,Bayonet,Steuben,Lafayette,Knox,Valley Forge,Enlistment,Regiment,Provisioning,3,History
35185,Continuity,CLAPPERBOARD,SCRIPTY,POLAROID,EYELINE,Retcon,Coherence,Consistency,5,Movies
35186,Contract,Stipulation,Guarantee,Obligation,Term,Salary,Buyout,Clause,Option,3,Economics
35187,Convertibles,Roadster,Spider,Cabriolet,Targa,Barchetta,Speedster,Volante,Drophead,3,Transportation
35188,COO,Sandberg,Williams,Shotwell,Olivan,Logistics,Workflow,Inventory,Backlog,Procurement,Fulfillment,5,Economics
35189,Coral,Polyp,Zooxanthellae,Bleaching,Calcification,Cnidarian,Staghorn,Elkhorn,Brain,Pillar,Fire,Fan,3,Nature
35190,correspondence,Postcard,Airmail,Stationery,Envelope,Telegram,Epistle,Aerogram,Missive,3,Language
35191,Coupes,911,Berlinetta,Supra,Celica,Scirocco,Mustang,Camaro,Firebird,Cougar,Prelude,3,Transportation
35192,Cover,HURT,RESPECT,GLORIA,VALERIE,3,Music
35193,craftsmanship,Dovetail,Marquetry,Joinery,Filigree,Gilding,Burnish,Mortise,Tenon,Gouge,5,Art
35194,creation,Genesis,Big Bang,Synthesis,Hatching,Demiurge,Pangu,Enuma Elish,3,History
35195,CREATIVE DESIGN STUDIOS,PENTAGRAM,IDEO,FROG,LANDOR,5,Art
35196,Crime,Goodfellas,Fargo,Scarface,The Town,Casino,Sicario,Felony,Perpetrator,Investigation,Evidence,1,Movies
35197,crime dramas,Breaking Bad,Narcos,Gomorrah,Broadchurch,Ozark,1,Television
35198,crop cycles,Fallow,Rotation,Harvest,Sowing,Legume,Tillage,Yield,Intercrop,Stubble,5,Nature
35199,Crop Rotation,Clover,Turnip,Barley,Nitrate,Alfalfa,Sorghum,Legumes,5,Science
35200,CRT televisions,Trinitron,Scanline,Cathode,Shadow Mask,Phosphor,Electron Gun,5,Technology
35201,cuisine regions,Cantonese,Szechuan,Tuscan,Provencal,Bavarian,Hunan,Oaxacan,Basque,Creole,Punjabi,3,Food
35202,culinary arts,Julienne,Flambe,Saute,Blanch,Deglaze,Braise,Mirepoix,Ganache,Confit,3,Food
35203,Cult Classic,The Room,Eraserhead,Heathers,Donnie Darko,Repo Man,Troll 2,Fandom,Sleeper,Campy,Niche,Brazil,3,Movies
35204,Currents,Thermohaline,Gyre,Upwelling,Convection,Velocity,Hydrodynamics,5,Science
35205,Cyclone,Isobar,Mesocyclone,Coriolis,Anticyclone,Circulation,Supercell,Centripetal,Anemometer,Nargis,Amphan,Idai,3,Nature
35206,Cytoplasm,Ribosome,Vacuole,Lysosome,Plastid,3,Science
35207,Daniel Day-Lewis Films,The Boxer,Nine,Eversmile,The Crucible,My Left Foot,3,Movies
35208,data storage,RAID,Floppy,Tape,Diskette,Flash,3,Technology
35209,David Chase,The Sopranos,Carmela,Dr. Melfi,Rockford,Kolchak,3,Television
35210,David Fincher,Alien 3,Seven,The Game,Fight Club,Panic Room,Mank,Gone Girl,Zodiac,The Killer,1,Movies
35211,Declaration of Independence,Hancock,Philadelphia,Liberty,Unalienable,GRIEVANCES,EQUALITY,PURSUIT,HAPPINESS,1,History
35212,Deep Sea,Abyss,Benthic,Trench,Bioluminescence,Pressure,Hadal,Anglerfish,Fangtooth,Hatchetfish,Viperfish,3,Nature
35213,Defense,Protection,Guardian,Safeguard,Shield,Fortification,1,Sports
35214,Denis Villeneuve,Sicario,Prisoners,Incendies,Enemy,Maelstrom,Dune,3,Movies
35215,desert irrigation,Qanat,Flaj,Drip,Center Pivot,Noria,Aquifer,Shaduf,Acequia,5,Science
35216,desert lizards,Gila Monster,Chuckwalla,Horned Toad,Agama,Skink,Monitor,3,Nature
35217,Dew,condensation,moisture,humidity,precipitation,evaporation,droplet,saturation,1,Nature
35218,Dick Wolf,SVU,Chicago Fire,Chicago P.D.,FBI,Conviction,LAW & ORDER,COLD JUSTICE,3,Television
35219,digital effects,Keying,Rendering,Raytracing,Wireframe,5,Technology
35220,digital stunts,Bullet Time,Wire Removal,Motion Cap,Face Swap,5,Movies
35221,Director,Vertigo,Psycho,Rebecca,Notorious,Vision,Blocking,Storyboard,Montage,Perspective,1,Movies
35222,Disco,Bee Gees,Chic,Abba,Boney M,Studio 54,Mirrorball,Lycra,1,Music
35223,Distribution,Fulfillment,Carrier,Consignee,Consignor,Export,Import,3,Economics
35224,Documentary,Baraka,Shoah,Blackfish,Hoop Dreams,Man on Wire,Non-fiction,Interview,Expose,Verite,3,Movies
35225,docuseries,Cosmos,Tiger King,The Jinx,Blue Planet,Planet Earth,The Keepers,Evil Genius,3,Television
35226,Domestics,Chevrolet,Chrysler,Cadillac,Pontiac,1,Transportation
35227,Dominic West,The Affair,McNulty,The Crown,300,Colette,Tomb Raider,3,Television
35228,DRAGONFLY GROUPS,SKIMMER,DARNER,HAWKER,CHASER,GLIDER,EMERALD,5,Nature
35229,Draft,Combine,Lottery,Warroom,Scouting,Selection,Eligibility,3,Sports
35230,Drama,Mad Men,Succession,Sopranos,The Wire,protagonist,catharsis,pathos,tension,conflict,1,Television
35231,drive-in theaters,Speaker,Concession,Projector,Marquee,Carhop,Hatchback,Intermission,3,Movies
35232,Drizzle,Mist,Sprinkling,Droplets,Overcast,Shower,1,Nature
35233,Drought,Aridity,Desiccation,Scarcity,Irrigation,Parched,Dustbowl,1,Nature
35234,Dubstep,WOBBLE,SUBBASS,SKRILLEX,BURIAL,CROYDON,DROP,Skream,Kode9,Mala,3,Music
35235,Dynamics,Inertia,Friction,Momentum,Velocity,Torque,Forte,Piano,Crescendo,Diminuendo,Sforzando,3,Science
35236,early childhood classrooms,Easel,Cubby,Smock,Blocks,Abacus,Flashcards,1,Education
35237,Early Colonization,Mayflower,Jamestown,Plymouth,Roanoke,1,History
35238,early electrical workshops,Leyden Jar,Rheostat,Inductor,Dynamo,Ammeter,Tesla Coil,Menlo Park,Wardenclyffe,Pearl Street,5,Science
35239,ecology,Biosphere,Symbiosis,Habitat,Niche,Biome,Xerophyte,Riparian,Benthic,Ecotone,3,Science
35240,ECommerce,Shopify,Magento,Stripe,Etsy,Checkout,3,Economics
35241,Ecosystem,consumer,decomposer,organism,population,producer,DETRITUS,BIOME,NICHE,1,Science
35242,Editing,Crosscut,Dissolve,Wipe,Splice,Continuity,Jump cut,Transition,Splicing,Smash Cut,3,Movies
35243,egyptian gods,Horus,Thoth,Bastet,Sekhmet,Amun,Hathor,Ra,Osiris,Isis,3,History
35244,Egyptians,Cleopatra,Nefertiti,Akhenaten,Ramses,Khufu,1,History
35245,Electrical Distribution,Grid,Transformer,Substation,Feeder,Inductor,Bushing,Busbar,Switchgear,5,Science
35246,Electrical Measures,Voltage,Current,Wattage,Ohm,1,Science
35247,Electronic,Kraftwerk,Daft Punk,Aphex Twin,Moog,Roland,Vocoder,Theremin,3,Music
35248,Elisabeth Moss,Handmaid,Top of Lake,Shirley,The Square,3,Television
35249,Elevators,Pulley,Shaft,Governor,Sheave,Buffer,Hoist,5,Technology
35250,Eli Lilly,Prozac,Mounjaro,Humalog,Cialis,3,Health
35251,Ellis Island,Registry,Ferry,Dormitory,Statue,Manifest,Hospital,Immigrant,Inspection,Gateway,1,History
35252,emergency response teams,Paramedic,Firefighter,Smokejumper,Hazmat,Coast Guard,SWAT,Rescue Squad,FEMA,HELITACK,LIFEGUARD,3,Health
35253,Emma Thompson,Brave,Matilda,Cruella,Wit,3,Movies
35254,Emmy Awards,Statuette,Primetime,Daytime,Regional,Telecast,Television,Scripted,Nominee,1,Television
35255,end credits,Crawl,Outtakes,Logos,Postscript,3,Movies
35256,Endurance,Fortitude,Tenacity,1,Sports
35257,ensemble casts,Magnolia,Short Cuts,Gosford Park,Traffic,Crash,Nashville,Snatch,3,Movies
35258,environmental disasters,Fukushima,Bhopal,Deepwater,Exxon Valdez,Dust Bowl,Love Canal,Minamata,3,Science
35259,EP,SINGLE,ALBUM,MIXTAPE,REMIX,Single,Discography,Mastering,Vinyl,Extended Play,1,Music
35260,Equipment,Apparatus,Inventory,Paraphernalia,Utility,Supplies,Maintenance,1,Language
35261,Ernest Hemingway,Bullfight,Cuba,Key West,Paris,Matador,Marlin,Hadley,3,Literature
35262,Erosion,abrasion,corrasion,degradation,denudation,runoff,sedimentation,weathering,Attrition,Deflation,3,Nature
35263,Ethics,Deontology,Hedonism,Stoicism,Nihilism,Egoism,Virtue,Scruple,Integrity,Justice,5,Education
35264,Executive,CMO,CTO,CLO,CISO,CEO,CFO,COO,Board,Shares,Vision,3,Economics
35265,Expedia Group Assets,Orbitz,Trivago,Vrbo,Hotwire,3,Technology
35266,Exploration,Vinland,Greenland,Iceland,Skraeling,Knarr,Sunstone,Astrolabe,Sextant,Caravel,3,History
35267,Expository Formats,Abstract,Monograph,Manual,Encyclopedia,5,Literature
35268,extended editions,Watchmen,Alexander,Kingdom,Troy,Fellowship,Leon,Das Boot,3,Movies
35269,External Tree Anatomy,Bark,Phloem,Xylem,Cambium,5,Nature
35270,Fall of the Soviet Union,Perestroika,Berlin Wall,Solidarity,Dissolution,Democratization,GLASNOST,YELTSIN,COUP,3,History
35271,FAMOUS BUCCANEERS,Edward Teach,Henry Morgan,Anne Bonny,Mary Read,William Kidd,Stede Bonnet,John Fenn,3,History
35272,fan campaigns,SaveLucifer,SaveManifest,SixSeasons,SaveSense8,RenewAnne,SaveWarrior,Browncoats,SnyderCut,3,Television
35273,fan forums,REDDIT,TUMBLR,DISCORD,4CHAN,FANDOM,NEOGAF,1,Technology
35274,Fantasy,Willow,Excalibur,Krull,Legend,Labyrinth,The Hobbit,Stardust,Eragon,mythology,sorcery,quest,prophecy,The Witcher,1,Movies
35275,Ferns,Fronds,Fiddleheads,Rhizomes,Woodlands,Pteridophytes,Sporangia,Vascular,Spore,Sorus,Crozier,5,Nature
35276,festival circuits,Sundance,Cannes,Berlinale,Telluride,Locarno,Venice,SXSW,Tribeca,3,Movies
35277,feudal systems,Fiefdom,Serfdom,Vassalage,Manorial,Demesne,Liege,Fealty,Bailiff,3,History
35278,FIELD OFFICIALS,REFEREE,UMPIRE,OFFICIAL,LINESMAN,Marshal,Steward,1,Sports
35279,film grain,Celluloid,Emulsion,Halation,Gate Hair,5,Movies
35280,Finals,Showdown,Tiebreaker,Matchup,Decider,Finale,Culmination,Climax,Conclusion,1,Sports
35281,fine dining restaurants,Noma,Alinea,Per Se,Le Bernardin,The Fat Duck,El Bulli,Sommelier,Degustation,Aperitif,5,Food
35282,fjord landscapes,Geiranger,Sognefjord,Hardanger,Lysefjord,3,Geography
35283,Flag Day,Stars,Stripes,Old Glory,Betsy Ross,Banner,Patriotism,Standard,Salute,1,History
35284,flamenco music,Bulerias,Solea,Fandango,Compas,Zapateado,Toque,Cante,Palmas,Guitarra,Duende,Castanets,5,Music
35285,Flashback,Analepsis,Backstory,Memory,Reminiscence,Nonlinear,Anachrony,Exposition,MEMENTO,RASHOMON,LOST,3,Movies
35286,Fleetwood Mac,Dreams,Rhiannon,The Chain,Little Lies,Gypsy,Tusk,Sara,Everywhere,1,Music
35287,Flood,Deluge,Inundation,Overflow,Torrent,Spillage,Drainage,Submerge,Embankment,Levee,1,Nature
35288,Floral Anatomy,Petals,Sepals,Stamens,Pistils,3,Nature
35289,Flute,EMBOUCHURE,FOOTJOINT,HEADJOINT,G-KEY,Lip plate,5,Music
35290,Folk,Bluegrass,Skiffle,Americana,Zydeco,Acoustic,Ballad,Troubadour,Mandolin,Guthrie,Baez,Seeger,3,Music
35291,food production,Silo,Thresher,Milking,Pasteurize,Hydroponics,Aquaponics,Harvester,Greenhouse,Plow,3,Food
35292,Football Game Phases,Offense,Defense,Kickoff,Punt,1,Sports
35293,Football Scoring,Safety,Field Goal,Conversion,Extra Point,1,Sports
35294,Forecast Indicators,Pressure,Forecast,Isobar,Barometer,Altimeter,Outlook,Meteorologist,Doppler,Satellite,Hygrometer,Anemometer,3,Science
35295,Formula One,Silverstone,Monaco,Monza,Suzuka,Ferrari,McLaren,Paddock,Williams,3,Sports
35296,Founding Fathers,Delegate,Framer,Federalist,Aristocracy,Convention,Intellect,HAMILTON,FRANKLIN,JEFFERSON,WASHINGTON,HANCOCK,ADAMS,1,History
35297,Franchise,Marvel,James Bond,Harry Potter,Batman,intellectual property,conglomerate,licensing,media,syndicate,1,Movies
35298,franchise television,CSI,NCIS,STARGATE,DOCTOR WHO,1,Television
35299,Franklin Roosevelt,Fireside,Yalta,Infamy,Polio,Lendlease,Newdeal,President,Democrat,Leadership,3,History
35300,Free Agent,Market,Availability,Signing,Option,Waiver,Agency,Status,3,Sports
35301,Freedom,Autonomy,Franchise,Suffrage,Charter,Sovereignty,Exemption,Choice,Privilege,Emancipation,3,Politics
35302,Frey,Skidbladnir,Gullinbursti,Gerdr,Alfheim,5,History
35303,Frida Kahlo,Diego Rivera,Casa Azul,Surrealism,Monkey,Parrot,Tehuana,Unibrow,Two Fridas,The Frame,3,Art
35304,Frontier,Outpost,Territory,Stockade,Trapper,Scout,Unexplored,3,History
35305,Frozen Precipitation,Graupel,Pellets,Stones,Concretion,Ice,Accretion,Slush,Hail,5,Nature
35306,Fungi,Mycelium,Hyphae,Decomposers,Symbiosis,Sporocarp,Chitin,Saprobes,Basidiomycota,Mycorrhiza,Agaric,5,Nature
35307,Funk,Parliament,Funkadelic,Zapp,Cameo,Ohio Players,Isley,Meters,Bootsy,3,Music
35308,Gene Hackman,Hoosiers,The Firm,Crimson Tide,Get Shorty,No Way Out,3,Movies
35309,Gene Wilder Movies,Hanky Panky,Another You,Rhinoceros,Woman in Red,3,Movies
35310,Genre,Techno,Reggae,Samba,Grunge,Polka,Calypso,Classification,Category,Movement,Taxonomy,1,Music
35311,geographic regions,Balkans,Caucasus,Maghreb,Levant,Oceania,Anatolia,Sahara,Siberia,Amazonia,Patagonia,Himalaya,3,Geography
35312,Gettysburg,Pickett,Meade,Seminary,Cemetery,Longstreet,Buford,Culp,Infantry,3,History
35313,Glenn Close Films,The Wife,Albert Nobbs,The Paper,The Natural,3,Movies
35314,Global Aerospace Companies,Airbus,Lockheed,Embraer,Northrop,Cessna,3,Transportation
35315,GLOBAL CORPORATIONS,APPLE,TOYOTA,DISNEY,BOEING,PFIZER,1,Economics
35316,Global Grasslands,Prairie,Steppe,Pampa,Veldt,3,Geography
35317,Globalization,WTO,NAFTA,BRICS,Schengen,Tariff,Offshoring,Outsourcing,Diaspora,3,Economics
35318,GOAT,Titan,Immortal,Luminary,Pantheon,Icon,Legend,Greatest,1,Sports
35319,Golden Globes TV,HFPA,Musical,Miniseries,Comedy,Open Bar,Association,Trophy,3,Television
35320,Goldman Sachs,Marcus,Apple Card,GreenSky,Ayco,3,Economics
35321,Gospel,Spiritual,Tabernacle,Hymnal,Jubilation,Redemption,Choral,Choir,Hymn,Praise,Revival,Mahalia,Jubilee,3,Music
35322,Grasslands,Prairie,Pampas,Veld,Llanos,Rangeland,3,Nature
35323,Gratitude,Tribute,Offering,Benediction,Doxology,Homage,Appreciation,Blessing,Indebtedness,Generosity,3,Language
35324,Great Depression,Dustbowl,Hooverville,Breadline,Shanty,Okies,Unemployment,Stock Market,Economic,Bankruptcy,3,History
35325,Greeks,Socrates,Plato,Pericles,Homer,1,History
35326,Green Book,Tony Lip,Dr Shirley,Kentucky,Cadillac,Guide,Letters,3,Movies
35327,Greenhouse,carbon,emission,infrared,methane,radiation,warming,Frame,Vents,Benches,Glass,3,Science
35328,Gridiron Defense,Sack,Blitz,Intercept,Fumble,1,Sports
35329,grooming kits,Trimmer,Tweezers,Razor,Styptic,Pumice,1,Lifestyle
35330,Groundhog Day,Phil,Shadow,Burrow,Winter,Prediction,Rodent,Folklore,Punyszutawney,1,Nature
35331,Gulf,Basin,Geography,Current,Mexico,Persian,Oman,Aden,Guinea,Alaska,3,Geography
35332,Hadrian,Antinous,Sabina,Tivoli,Wall,Villa,5,History
35333,Hand-Cranked Boring Tools,Auger,Bit Brace,Eggbeater,Breast Drill,Winch,Grinder,Sharpener,5,Technology
35334,handwritten letters,Postmark,Inkwell,Quill,Calligraphy,Signature,Stationery,3,Language
35335,Hannah barbera,Flintstones,Jetsons,Yogi Bear,Magilla,Top Cat,Dynomutt,Huckleberry,1,Television
35336,Hard Rock,Sabbath,Aerosmith,Scorpions,Kiss,Rush,Distortion,Power Chord,Arena,Feedback,Zeppelin,Purple,Marshall,1,Music
35337,HARMONICA VARIETIES,DIATONIC,CHROMATIC,TREMOLO,REEDPLATE,Comb,Slider,5,Music
35338,Harmony,CHORD,TRIAD,INTERVAL,CONSONANCE,Concord,Resonance,Euphony,Unison,Synergy,Diatonic,Resolution,3,Music
35339,Hat Trick,Achievement,Consecutive,Triple,Hockey,Pitch,Scoring,Soccer,1,Sports
35340,Hatchbacks,Golf,Civic,Clio,Pulsar,Cooper,Veloster,Fiesta,Yaris,Impreza,Gremlin,3,Transportation
35341,Healthcare,Medicaid,Medicare,Premium,Copay,Deductible,PPO,HMO,3,Health
35342,Healthy,Fit,Strong,Robust,Vigorous,Well,Nourished,Thriving,Resilient,Active,Wholesome,1,Health
35343,Heatwave,Scorch,Swelter,Isotherm,Hyperthermia,Stagnant,Solar,Dehydration,Thermal,Insolation,Heatstroke,1,Nature
35344,Helen Keller,Sullivan,Braille,Water,Radcliffe,Alabama,Tuscumbia,3,History
35345,Herds,ungulates,aggregation,hierarchy,stampede,grazing,sociality,3,Nature
35346,HIBERNATION,TORPOR,DORMANCY,ESTIVATION,DENNING,MARMOT,3,Nature
35347,Hiring,Resume,Interview,Recruiter,Sourcing,Referral,1,Economics
35348,historical periods,Paleolithic,Neolithic,Cretaceous,Triassic,Holocene,Renaissance,Victorian,Edwardian,Baroque,Regency,3,History
35349,Hitchcock,Frenzy,Marnie,Topaz,Lifeboat,The Birds,NOTORIOUS,REAR WINDOW,3,Movies
35350,Hockey Penalties,Hooking,Slashing,Tripping,Roughing,3,Sports
35351,Home Field,PITCH,COURT,DIAMOND,GRIDIRON,Advantage,Venue,Crowd Noise,Familiarity,Stadium,Turf,1,Sports
35352,Home Run,grand-slam,outfield,diamond,bleachers,slugger,walk-off,rounding-bases,swing,1,Sports
35353,Horizon,Skyline,Vista,Distance,Sunrise,Sunset,1,Nature
35354,HOROLOGICAL INSTRUMENTS,PENDULUM,SUNDIAL,ESCAPEMENT,CLEPSYDRA,HOURGLASS,5,Science
35355,Horror,Suspiria,Halloween,Hellraiser,Poltergeist,Alien,Scream,macabre,supernatural,jump scare,occult,1,Movies
35356,horror TV,Chucky,Hellbound,Slasher,Salem,Grotesquerie,3,Television
35357,Hot Rods,Deuce Coupe,Lead Sled,T-Bucket,Highboy,Rat Rod,Gasser,Flathead,5,Transportation
35358,House,GARAGE,FRANKIE,ACID,DEEP,Knuckles,Phuture,Trax,Hardrive,3,Music
35359,Human Resources,Benefits,Payroll,Retention,Wellness,Conduct,Pension,Training,Policy,Interview,Recruiter,3,Economics
35360,Humidity,Hygrometer,Dewpoint,Transpiration,Psychrometer,Vaporization,3,Science
35361,Hungry,Starving,Famished,Ravenous,Peckish,Empty,Voracious,Insatiable,Hollow,Greedy,Craving,1,Health
35362,Hybrids,Prius,Insight,Volt,Ioniq,Clarity,Niro,3,Transportation
35363,Hydrological Extremes,Flood,Drought,Inundation,Deluge,Torrent,3,Nature
35364,Iconic Arenas,Colosseum,Wembley,Saitama,Sphere,3,Sports
35365,Immigration,Passport,Visa,Steerage,Border,Customs,Migrant,Asylum,Naturalization,3,Politics
35366,Imports,Honda,Nissan,Mazda,Subaru,Skyline,Lancer,NSX,GTR,3,Transportation
35367,Inauguration Day,Capitol,Oath,January,Podium,Ceremony,Procession,Address,Bible,1,Politics
35368,Incandescent Bulbs,Filament,Tungsten,Argon,Edison,Vacuum,3,Technology
35369,Innovation,Patent,Incubator,Venture,Ideation,Disruption,3,Economics
35370,Internet Traffic,Packet,Bandwidth,Latency,Payload,Routing,5,Technology
35371,Intertidal Species,Barnacle,Limpet,Anemone,Chiton,Mussel,Whelk,Urchins,5,Nature
35372,J.J. Abrams,Alias,Fringe,Super 8,Cloverfield,3,Television
35373,Jackie Gleason,The Hustler,Ralph,Kramden,Buford,Gigot,3,Television
35374,James Madison,FEDERALIST,MONTPELIER,VIRGINIA,DOLLEY,CONSTITUTION,Secretary of State,War of 1812,3,History
35375,Jazz,Bebop,Ragtime,Fusion,Swing,Modal,Cool,Standards,Coltrane,Parker,Monk,Scat,3,Music
35376,Jean-Paul Belmondo,Pierrot,Le Doulos,Stavisky,Alphaville,5,Movies
35377,Jellyfish,Medusa,Nematocysts,Mesoglea,Zooplankton,Bell,Sting,4,Nature
35378,Jimi Hendrix,Stratocaster,Feedback,Woodstock,Monterey,Seattle,Wah-wah,Fuzz Face,3,Music
35379,John Adams,Abigail,Quincy,Federalist,Braintree,Ambassador,Diplomat,Vice-President,Lawyer,3,History
35380,Johnson & Johnson,Tylenol,Band-Aid,Aveeno,Motrin,1,Health
35381,Joss Whedon,Buffy,Serenity,Dollhouse,Avengers,3,Television
35382,Juneteenth,Galveston,Jubilee,Emancipation,Texas,Freedom,Ancestry,Proclamation,Liberation,3,History
35383,KART RACING MECHANICS,DRIFT,SLIPSTREAM,DRAFTING,MINI TURBO,POWER SLIDE,ROCKET START,5,Gaming
35384,KART RACING TRACK ELEMENTS,BOOST PAD,ITEM BOX,FINISH LINE,RAMP,BANANA PEEL,3,Gaming
35385,Kathryn Bigelow,The Loveless,Near Dark,Blue Steel,Point Break,Strange Days,3,Movies
35386,Kelp Anatomy,Holdfast,Stipe,Blade,Frond,Pneumatocyst,Canopy,Algae,5,Nature
35387,Keyboard,IVORIES,SUSTAIN,HAMMER,KEYBED,DAMPER,PEDAL,3,Music
35388,Kroger,Ralphs,Frys,Harris,Teeter,3,Economics
35389,La La Land,Sebastian,Seb's,Jazz,Tap,Planetarium,Rialto,Freeway,Pier,3,Movies
35390,Laboratory Equipment,Pipette,Beaker,Scalpel,Tripod,3,Science
35391,Late Night,Carson,Letterman,Conan,Leno,Fallon,Kimmel,Colbert,Nocturnal,Broadcast,Sidekick,1,Television
35392,LATE-NIGHT ADULT DRAMAS,TAXICAB,LINGERIE,EUPHORIA,BEDTIME,5,Television
35393,Latin,RUMBA,MAMBO,TANGO,MERENGUE,BOLERO,Ablative,Genitive,Dative,Vocative,Supine,5,Language
35394,LATIN AUTHORS,VIRGIL,HORACE,OVID,CATULLUS,5,Literature
35395,laugh tracks,Canned,Sweetener,Audience,Guffaw,Laff Box,SWEETENING,CANNED AIR,GIGGLE TRACK,5,Television
35396,Lavender,Aromatic,Provençal,Culinary,Distillation,Herbaceous,Calyx,MUNSTEAD,HIDCOTE,GROSSO,PROVENCE,VERA,3,Nature
35397,Layoffs,Furlough,Severance,Redundancy,Downsize,RIF,Package,3,Economics`,tp=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
35399,legal dramas,Suits,Law & Order,Matlock,Perry Mason,Damages,Ally McBeal,1,Television
35400,Lewis and Clark,Sacagawea,Keelboat,Pirogue,Mandan,Shoshone,York,Seaman,Corps of Discovery,Cartography,3,History
35401,Liberty,Torch,Pedestal,Tablet,Crown,Spikes,Autonomy,Independence,Prerogative,Rights,Franchise,3,History
35402,Licensing,Royalty,Copyright,Sublicense,Exclusive,3,Economics
35403,Lighting,Key Light,Fill Light,Backlight,Rim Light,Chiaroscuro,Softbox,Gobo,Ambient,Diffused,5,Art
35404,live streaming TV,YouTube,Twitch,Hulu,Sling,Philo,Fubo,1,Technology
35405,live television,SNL,Grammys,Oscars,Olympics,Simulcast,Broadcast,Telecast,On-air,1,Television
35406,location shooting,Honeywagon,Basecamp,Unit Base,Reflector,Scrim,Generator,Apple Box,Sandbag,Alcatraz,Petra,Dubrovnik,Kauai,Matamata,5,Movies
35407,location shoots TV,Albuquerque,Vancouver,Toronto,Hawaii,BASE CAMP,UNIT MOVE,SCOUTING,CRAFTY,3,Television
35408,Lockheed Martin Tactical Assets,Hercules,Blackbird,Nighthawk,Javelin,Aegis,Hellfire,Trident,C-130,5,Technology
35409,Logistics,Inventory,Dispatch,Tracking,Shipping,Haulage,Warehouse,Routing,Cargo,Carrier,3,Economics
35410,Loki,Fenrir,Hel,Jormungandr,Sigyn,Angrboda,3,Literature
35411,Lord of the Rings,Frodo,Gandalf,Mordor,Sauron,Aragorn,Legolas,Gimli,1,Literature
35412,Lorne Michaels,MacGruber,Hot Rod,Tommy Boy,Coneheads,3,Movies
35413,Losing Streak,Slump,Drought,Skid,Rut,Futility,Cold Spell,1,Sports
35414,Lowriders,Impala,Monte Carlo,Fleetline,El Camino,Caprice,Riviera,Cutlass,Bel Air,Fleetwood,Dayton,3,Transportation
35415,Luxury Cars,Bentley,Bugatti,Maserati,Porsche,1,Transportation
35416,Lyricist,SONDHEIM,HAMMERSTEIN,PORTER,IRA GERSHWIN,Couplet,Verse,Libretto,Gershwin,Mercer,Ashman,3,Music
35417,MAGNETIC TAPE PLAYERS,CASSETTE,GUMSTICK,AUTOREVERSE,MAGNETIC,3,Technology
35418,Major Media Awards,Golden Globe,Emmy,Oscar,Tony,1,Television
35419,Major Stadiums,Anfield,Fenway,Wrigley,Azteca,3,Sports
35420,Mammals,endothermic,monotremes,marsupials,lactation,vertebrae,diaphragm,3,Science
35421,Management,Kanban,Scrum,Kaizen,Agile,Roadmap,Agenda,Review,Milestone,3,Economics
35422,Manual Torque,Wrench,Ratchet,Socket,Driver,Lever,Fulcrum,Spanner,Torsion,3,Technology
35423,Manufacturing,Assembly,Prototype,Casting,Tooling,Machining,3,Economics
35424,Maples,Acer,Samara,Syrup,Palmate,5,Nature
35425,marine mammals,Narwhal,Manatee,Dugong,Vaquita,3,Nature
35426,Marketing,Funnel,Segment,Persona,Retarget,Metric,3,Economics
35427,Mariska Hargitay,Benson,Lake Placid,Falcon Crest,Ghoulies,3,Television
35428,Mascot,PHANATIC,GRITTY,YOUPPI,BENNY,Ambassador,Character,Identity,Persona,Symbol,3,Sports
35429,Mayflower,Bradford,Standish,Winslow,Brewster,Shallop,Compact,Pilgrims,Plymouth,3,History
35430,McDonaldland Figures,Ronald,Grimace,Birdie,Hamburglar,Fry Kids,1,Food
35431,MECHANICAL KEYS,CHERRY,OUTEMU,KAILH,GATERON,HOUSING,Topre,Linear,Tactile,Clicky,5,Technology
35432,medical dramas,House,Scrubs,Chicago Med,The Resident,The Knick,M*A*S*H,Code Black,1,Television
35433,Medical Professionals,Surgeon,Nurse,Dentist,Physician,Optician,1,Health
35434,mediterranean cuisine,Hummus,Falafel,Baklava,Tzatziki,Couscous,1,Food
35435,Mel Brooks,Spaceballs,High Anxiety,Silent Movie,Life Stinks,3,Movies
35436,Mercedes-Benz Model Lines,Maybach,AMG,Sprinter,G-Wagon,S-Class,E-Class,3,Transportation
35437,Metal,Maiden,Metallica,Slayer,Anthrax,Pantera,Megadeth,Shredding,Blast Beat,Heavy,Venom,1,Music
35438,MICROPHONE TYPES,CONDENSER,DYNAMIC,RIBBON,CAPSULE,DIAPHRAGM,5,Technology
35439,middle ages,Longbow,Trebuchet,Gauntlet,Chainmail,Cathedral,Scriptorium,3,History
35440,Migration,magnetoreception,philopatry,transhumance,ephemeral,navigation,flyway,5,Science
35441,Military,PLATOON,GARRISON,ORDNANCE,BARRACKS,BATTALION,Brigade,Regiment,Division,3,History
35442,miniseries,Roots,Shogun,Chernobyl,Beef,Anthology,Limited-series,Episodes,Binge-watch,3,Television
35443,mission control centers,Houston,Korolyov,Darmstadt,Tsukuba,Kourou,Beijing,Baikonur,Korolev,5,Science
35444,MMA Octagon,Grappling,Striking,Tapout,Clinch,3,Sports
35445,Mockumentary,Spinal Tap,The Office,Best in Show,Popstar,Mascots,Deadpan,3,Movies
35446,Moderna,mRNA,Spikevax,Bancel,Cambridge,3,Health
35447,Mongol Empire Nomenclature,Temujin,Kublai,Khanate,Horde,Mongol,3,History
35448,Monopoly,Boardwalk,Thimble,Battleship,Baltic,Chance,Community,1,Gaming
35449,monsoon climate,Cherrapunji,Orographic,Mekong,Irrawaddy,Salween,Tradewinds,Torrent,5,Geography
35450,Montage,Eisenstein,Kuleshov,Dialectic,Sequence,Synthesis,Rocky,Scarface,Parasite,5,Movies
35451,Moon Landing,Eagle,Tranquility,Columbia,Regolith,Descent,Ascent,Crater,Module,3,History
35452,Morgan Stanley,E-Trade,Solium,Smith,Barney,Eaton Vance,Parametric,Calvert,5,Economics
35453,Moss,Bryophyte,Spores,Rhizoid,Dampness,Carpet,Velvet,Nonvascular,5,Nature
35454,motion tracking,Kinect,Gyroscope,OptiTrack,Vicon,IMU,Lidar,Keyframing,Occlusion,MoCap,5,Technology
35455,Mulch,Woodchips,Insulation,Groundcover,Biodegradable,3,Nature
35456,Multinational Oil Corporations,Chevron,Exxon,Texaco,Amoco,Castrol,3,Economics
35457,Muscle Cars,Mustang,Charger,Camaro,GTO,Barracuda,Chevelle,1,Transportation
35458,MVP,Linchpin,Phenom,Paragon,Talisman,Vanguard,Ace,Accolade,Elite,Stat,Candidate,3,Sports
35459,Mystery,Chinatown,Seven,Zodiac,Oldboy,Gone Girl,Knives Out,Enigma,Sleuth,Deduction,Conundrum,Cipher,Forensics,3,Movies
35460,mystery fiction,Poirot,Marple,Holmes,Lupin,Whodunnit,Alibi,MacGuffin,Sleuth,Hardboiled,3,Literature
35461,mystery‑solving teams,Hardy Boys,Nancy Drew,Secret Seven,Famous Five,Boxcar Kids,Mystery Inc,1,Literature
35462,Named Valkyries,Brunhild,Sigrun,Gunnr,Hildr,5,Literature
35463,NASCAR,Daytona,Talladega,Darlington,Pocono,Bristol,3,Sports
35464,National Mall,Obelisk,Rotunda,Vietnam,Smithsonian,Reflecting Pool,Promenade,Lincoln,Basin,3,Geography
35465,Native American Nations,Mohawk,Shawnee,Seminole,Comanche,Cherokee,Navajo,Iroquois,Sioux,Apache,Choctaw,3,History
35466,NBCUniversal,Peacock,Bravo,MSNBC,Syfy,Oxygen,Telemundo,Sky,DreamWorks,3,Television
35467,Nero,Agrippina,Seneca,Poppaea,Locusta,Aurea,Domus,5,History
35468,New Deal,Legislation,Social Security,Reform,Bureaucracy,Relief,Federalism,3,History
35469,Nile River,Cataracts,Lotus,Felucca,Crocodile,Silt,Aswan,Felucca,Luxor,3,Geography
35470,Nixon,Watergate,Kissinger,China,Agnew,Detente,Impeachment,Resignation,Silent Majority,Pardon,CHECKERS,QUAKER,3,History
35471,Non-Seed Plants,Ferns,Moss,Liverworts,Clubmoss,5,Nature
35472,nordic folklore,Kraken,Draugr,Nisse,Valkyrie,Jotunn,Troll,Huldra,Fossegrim,Pesta,3,Literature
35473,Norse Civilization,Valhalla,Midgard,Bifrost,Ragnarok,Asgard,Longship,3,History
35474,Norse Deities,Freya,Odin,Thor,Loki,Frigg,Tyr,Baldur,Heimdall,3,Literature
35475,Norse Realms,Helheim,Niflheim,Vanaheim,Jotunheim,5,Literature
35476,northern europe,Norway,Sweden,Finland,Denmark,Estonia,1,Geography
35477,Novartis,Gleevec,Cosentyx,Ritalin,Diovan,5,Health
35478,NUMISMATIC SPECIMENS,SOVEREIGN,KRUGERRAND,DRACHMA,DOUBLOON,Shilling,Ruble,5,History
35479,Nutrients,macromolecule,minerals,nitrogen,phosphorus,potassium,vitamins,Calcium,3,Science
35480,Nvidia,GeForce,Quadro,Tesla,Ampere,Turing,Kepler,3,Technology
35481,Oaks,Acorn,Quercus,Deciduous,Hardwood,Tannin,Lobed,Catkin,5,Nature
35482,OBAMA ERA,OBAMACARE,STIMULUS,SOLYNDRA,DACA,Affordable Care Act,Inclusivity,Bailout,Polarization,Bin Laden,Deepwater,Arab Spring,3,History
35483,Ocean Currents,Kuroshio,Agulhas,Benguela,Humboldt,Canary,Labrador,Gulf Stream,5,Geography
35484,Octagon,Geometry,Perimeter,Polygon,Vertices,Dimension,Cage,Canvas,Fence,Mat,3,Science
35485,Octopus,Cephalopod,Tentacles,Chromatophores,Inking,Mollusk,Intelligence,Beak,3,Nature
35486,Odin,Sleipnir,Gungnir,Huginn,Muninn,Draupnir,Valknut,5,Literature
35487,Off Roaders,Wrangler,Defender,Bronco,G-Wagen,Humvee,Unimog,Samurai,Patrol,3,Transportation
35488,Offense,Attack,Assault,Incursion,Aggression,Striker,Penetration,1,Sports
35489,Official,Functionary,Administrator,Mandate,Sanctioned,Personnel,Oversight,Formal,3,Politics
35490,Open Water,Pelagic,Surface,Vast,Ocean,3,Geography
35491,opening weekend hype,Presale,Blockbuster,Midnight,Premieres,Tentpole,Previews,3,Movies
35492,opera houses,La Scala,Fenice,Garnier,Colon,Bayreuth,Glyndebourne,SYDNEY,MARIINSKY,5,Music
35493,Opera Titles,Carmen,Tosca,Aida,Norma,Fidelio,3,Music
35494,Orchestra,VIOLIN,OBOE,TIMPANI,BASSOON,CELLO,Conductor,Philharmonic,木管,Woodwind,3,Music
35495,orchestral scores,Leitmotif,Staccato,Crescendo,Ostinato,5,Music
35496,Orchids,Epiphytic,Mycorrhizal,Labellum,Pseudobulb,Monopodial,Terrestrial,Pollinia,5,Nature
35497,Organic Soil Amendments,Compost,Mulch,Humus,Peat,3,Nature
35498,Original Colonies,Virginia,Maryland,Georgia,Delaware,3,History
35499,Oscar,Parasite,Moonlight,Braveheart,Amadeus,Rocky,Ben-Hur,Academy,Cinema,Director,Costume,1,Movies
35500,Overcast,Gloomy,Cloudbank,Stratiform,Cumulus,Obscured,Somber,Sunlight,Coverage,Altostratus,3,Nature
35501,Overtime,Shootout,Tiebreaker,Stoppage,Duration,Period,Clock,Extra,1,Sports
35502,Packs,cohesion,canid,territory,dominance,cooperative,3,Nature
35503,Paid Time Off,Accrual,Vacation,Sabbatical,Sick Leave,Compensation,Benefits,Allowance,Personal,3,Economics
35504,Palms,Frond,Tropical,Coconut,Date,Palmetto,Arecaceae,Rattan,Cycad,3,Nature
35505,Paramount,CBS,MTV,VH1,Showtime,3,Television
35506,Patriotism,Anthem,Banner,Allegiance,Ensign,Cockade,Heraldry,Devotion,Loyalty,Fidelity,3,Politics
35507,Pearl Harbor,Surprise,Naval Base,Hawaii,Decisive,Battleship,Aircraft,Infamy,Escalation,Isolationism,Embargo,3,History
35508,Pelagic Layers,Deep Sea,Open Water,Abyssal,Pelagic,5,Geography
35509,Penalty,Infraction,Foul,Violation,Fine,Kick,Rule,Discipline,Referee,1,Sports
35510,PERCUSSION SECTION,MARIMBA,XYLOPHONE,CYMBAL,SNARE,3,Music
35511,performance venues,Scala,Bolshoi,Globe,Palladium,Wembley,3,Art
35512,performing arts,Vaudeville,Kabuki,Burlesque,Pantomime,Flamenco,Operetta,3,Art
35513,period pieces,Spartacus,The Crown,Elizabeth,Bridgerton,Amadeus,Emma,Atonement,Titanic,3,Movies
35514,permafrost,Talik,Pingo,Cryosol,Thermokarst,Yedoma,5,Geography
35515,Petals,Corolla,Blossom,Pigment,Fragrance,Nectar,Symmetry,Delicate,Sepals,3,Nature
35516,Pfizer,Viagra,Lipitor,Celebrex,Paxlovid,3,Health
35517,Pharaoh,Cartouche,Pschent,Nemes,Uraeus,Flail,Vizier,Ramses,Khufu,Akhenaten,Cleopatra,Sarcophagus,3,History
35518,Pharmacy,SYRINGE,MORTAR,PESTLE,VIAL,Compounding,Dosage,Tincture,Capsule,3,Health
35519,Philadelphia,Liberty Bell,Flyers,Eagles,Phillies,Schuylkill,Pretzel,3,Geography
35520,Physical Fitness Components,Conditioning,Endurance,Agility,Skill,Stamina,Strength,Balance,Power,3,Health
35521,Pines,Conifer,Needle,Resin,Evergreen,Bristlecone,Ponderosa,Sap,Timber,3,Nature
35522,PIRATE HAVENS,Tortuga,Nassau,Port Royal,Barataria,3,History
35523,PITCH,OCTAVE,FREQUENCY,CLEF,HERTZ,Interval,Semitone,Chromatic,Hertz,Falsetto,Soprano,Baritone,Tenor,Vibrato,3,Music
35524,pitch competitions,Deck,Valuation,Cap Table,Seed Round,TechCrunch,Rise,Collision,Web Summit,5,Economics
35525,Pitching Feats,Shutout,No-Hitter,Balk,Perfect Game,3,Sports
35526,Plant Reproduction,Pollen,Nectar,Stigma,Anther,3,Nature
35527,Platform,Nintendo,PlayStation,Xbox,Sega,Portal,Console,Interface,Engine,1,Gaming
35528,Playoffs,Series,Postseason,Seed,Elimination,Wildcard,Semifinals,Standings,Seedings,Overtime,Clutch,1,Sports
35529,Plot Twist,Anagnorisis,Peripeteia,Reversal,Red Herring,misdirection,bombshell,epiphany,FIGHT CLUB,THE OTHERS,GONE GIRL,OLDBOY,5,Literature
35530,Plug In Hybrid,Outlander,Karma,Panamera,Cayenne,Pacifica,Crosstrek,Prius Prime,Volt,Clarity,Ioniq,3,Transportation
35531,polar regions,Arctic,Antarctic,Svalbard,Lapland,Nunavut,1,Geography
35532,police procedurals,Bosch,Columbo,Blue Bloods,Kojak,Dragnet,1,Television
35533,Pollen,Allergen,Germination,Stamen,Anther,Dispersal,Microspore,Bees,Flora,3,Nature
35534,Pollination,Fertilization,Angiosperm,Cross-pollination,Entomophily,Anemophily,5,Nature
35535,Pollution,SMOG,RUNOFF,EFFLUENT,SOOT,SEWAGE,Methane,Benzene,Dioxin,3,Nature
35536,PORTABLE CD TECHNOLOGY,ANTISHOCK,MEGABASS,BITSTREAM,ANTISKIP,OPTICAL,3,Technology
35537,PR,Crisis,Embargo,Briefing,Presser,Pitch,Newsroom,3,Economics
35538,practical effects,Animatronic,Prosthetic,Miniature,Squib,Pyrotechnic,Stop Motion,Rotoscoping,Prosthetics,5,Movies
35539,practical makeup,Prosthetics,Silicone,Spirit gum,Molding,Latex,Hellboy,Beetlejuice,Elephant Man,Braindead,Total Recall,5,Movies
35540,Prairie,grassland,savanna,steppe,wildflower,meadow,ecosystem,biodiversity,3,Geography
35541,Predators,carnivore,stalking,camouflage,talons,ambush,3,Nature
35542,Premiere,Red Carpet,Limousine,Afterparty,Press Junket,Screening,Debut,Gala,Publicity,Reception,Exclusive,3,Movies
35543,Prequel,Prometheus,Bumblebee,Minions,Cruella,Furiosa,Ratched,Gotham,origin,background,foundation,precursor,3,Movies
35544,Presidents Day,Washington,Lincoln,Jefferson,Cherry Tree,February,Monday,Holiday,1,History
35545,Pressure,Atmospheric,Pascal,Barometer,Equilibrium,Altimeter,Gradient,3,Science
35546,Prey,vigilance,mimicry,foraging,ruminant,sentinel,3,Nature
35547,Procter Gamble,Tide,Crest,Gillette,Pampers,Febreze,Charmin,Oral-B,3,Economics
35548,Producer,Budget,# Schedule,Financing,Insurance,Logistics,Distribution,Production,Funding,Studio,3,Movies
35549,Production,Throughput,Backlog,Output,Capacity,Bottleneck,5,Economics
35550,Professional Sports Transactions,Trade,Transfer,Contract,Free Agent,Waiver,Buyout,Release,Draft,3,Sports
35551,protection,Bulwark,Carapace,Rampart,Shield,Cuirass,Bastion,Palisade,3,History
35552,public transit,Subway,Trolley,Monorail,Gondola,Funicular,Omnibus,1,Transportation
35553,Punk,Ramones,Clash,sex Pistols,Misfits,Stooges,Damned,Fugazi,Anarchy,Mosh Pit,Fast-Tempo,3,Music
35554,PUPPETRY,MARIONETTE,MUPPET,BUNRAKU,ROD,Shadow,3,Art
35555,Race Cars,IndyCar,Stock Car,LMP1,NASCAR,Dragster,Kart,3,Transportation
35556,Raids,Lindisfarne,Danegeld,Berserker,Shieldwall,Longship,Iona,3,History
35557,rail tunnels,Seikan,Gotthard,Channel,Simplon,Severn,Hoosac,Lotschberg,Frejus,5,Transportation
35558,Railroads,Pullman,Caboose,Boxcar,Sleeper,Diesel,Tender,Freight,Roundhouse,Steam Power,Iron Horse,3,Transportation
35559,Rally Cars,Stratos,Quattro,Impreza,Lancer,Escort,3,Transportation
35560,Ramses,Kadesh,Pi-Ramses,Nefertari,Hittites,Sed,Ozymandias,3,History
35561,Ratings,Nielsen,Rotten,Metacritic,IMDb,Arbitron,CinemaScore,Viewership,Demographics,Metrics,Reach,Audience,3,Television
35562,Reagan Era,Iran-Contra,Glasnost,Thatcher,Gorbachev,Supply-side,Deregulation,Strategic Defense Initiative,Conservatism,GRENADA,YUPPIE,CHALLENGER,3,History
35563,real locations,Alcatraz,Maya Bay,Wadi Rum,Angkor Wat,Dubrovnik,Versailles,Matmata,3,Geography
35564,Reboot,Remake,Revival,Sequel,Spinoff,relaunch,transformation,alteration,STAR TREK,SPIDER-MAN,EVIL DEAD,DOOM,3,Movies
35565,Rebound,backboard,box-out,possession,tip-in,outlet-pass,boards,glass,put-back,1,Sports
35566,Record,Milestone,Unbeaten,Statistics,Standing,Ranking,1,Sports
35567,recurring characters,Gunther,Newman,Janice,The Todd,Cricket,McPoyle,Sideshow Bob,3,Television
35568,Red Card,Ejection,Dismissal,Expulsion,Suspension,Ban,1,Sports
35569,Reef,Atoll,Fringing,Barrier,Patch,Bank,Lagoon,Limestone,Calcareous,3,Geography
35570,Referee,Umpire,Whistle,Judge,Ruling,Game,Match,1,Sports
35571,Reggae,MARLEY,SKA,ROCKSTEADY,KINGSTON,RIDDIM,Tosh,Wailers,3,Music
35572,REGIONAL TROPICAL CYCLONE NAMES,Hurricane,Typhoon,Cyclone,Baguio,3,Geography
35573,Regulation,Compliance,Mandate,Oversight,Sanction,Antitrust,3,Economics
35574,Remake,update,reproduction,recreation,version,rendition,modernizing,imitation,1,Movies
35575,Remembrance,Poppy,Cenotaph,Eulogy,Memento,Obituary,Epitaph,Memorial,Tribute,Legacy,Solitude,Monument,3,History
35576,Remix,DUB,MASHUP,BOOTLEG,MEGAMIX,Reinterpretation,Equalization,Soundscape,Track,Edit,Redux,Stem,3,Music
35577,renaissance art,Fresco,Sfumato,Tempera,Pieta,David,Donatello,Raphael,Triptych,Chiaroscuro,Titian,3,Art
35578,renewals,Back-nine,Pick-up,Upfronts,Syndication,5,Television
35579,Reptiles,ectothermic,keratin,brumation,squamata,oviparous,amniotic,3,Nature
35580,Reptilian Integument,Scutes,Osteoderms,Lamellae,Plates,Dermis,Epidermis,5,Nature
35581,Republic,Senate,Statute,Elector,Citizen,Democracy,Representative,Commonwealth,Civic,Electorate,Policy,Federation,SUFFRAGE,BALLOT,ELECTION,VETO,3,Politics
35582,Revenue,Profit,Margin,EBITDA,Turnover,Dividend,3,Economics
35583,Revolution,Yorktown,Saratoga,Trenton,Lexington,Concord,Minutemen,Rebellion,Uprising,Tyranny,TEA PARTY,STAMP ACT,BOYCOTT,3,History
35584,Revolutionary War,Saratoga,Yorktown,Lexington,Militia,Patriot,Loyalist,Treaty of Paris,Concord,VALLEY FORGE,3,History
35585,Rhetorical Argumentation,Claim,Argument,Rebuttal,Ethos,Pathos,5,Language
35586,Rhythm,Beat,Syncopation,Meter,Cadence,Measure,Polyrhythm,Backbeat,Groove,Offbeat,Downbeat,3,Music
35587,Rivalry,Grudge Match,Derby,Nemesis,Tradition,Competition,Clash,Bad Blood,Yankees,Red Sox,Lakers,Celtics,1,Sports
35588,RnB,Aaliyah,Beyonce,Usher,Ginuwine,En Vogue,TLC,Ashanti,Monica,1,Music
35589,Rob Reiner,Stand By Me,Misery,Flipped,North,3,Movies
35590,Roche,Tamiflu,Herceptin,Valium,Accutane,5,Health
35591,Rockets,Saturn V,Falcon 9,Soyuz,Atlas,Ariane,TITAN,3,Technology
35592,Rollercoasters,Looping,Inversion,Corkscrew,Camelback,3,Lifestyle
35593,Roman Civilization,Aqueduct,Legion,Forum,Toga,Patrician,Plebeian,3,History
35594,ROMAN DEITIES,MINERVA,NEPTUNE,VENUS,VULCAN,3,Literature
35595,ROMAN EMPERORS,AUGUSTUS,NERO,HADRIAN,TIBERIUS,AURELIAN,3,History
35596,Roman Empire,Praetorian,Denarius,Provinces,Byzantium,Caligula,Trajan,Claudius,Augustus,Nero,Tiberius,Vespasian,Legion,3,History
35597,ROMAN ENGINEERING,APPIAN,CONCRETE,ARCH,CLOACA,VIADUCT,5,History
35598,ROMAN MILITARY,GLADIUS,PILUM,COHORT,AQUILA,Centurion,Legionary,Optio,Legatus,Signifer,5,History
35599,Roman Republic,Consul,Tribune,Dictator,Carthage,Punic,Praetor,Censor,Quaestor,Aedile,3,History
35600,Romance,Casablanca,Titanic,Notting Hill,The Notebook,Closer,Ghost,Carol,Moonstruck,Courtship,Passion,Intimacy,1,Movies
35601,Romantic,Chromaticism,Virtuosity,Subjectivity,Expressivity,Programmatic,Lyricism,Individualism,Liszt,Wagner,Brahms,Mahler,Nocturne,Etude,5,Music
35602,Rookie,Freshman,Novice,Neophyte,Greenhorn,Debut,Underclass,Debutant,Recruit,Apprentice,Prospect,Understudy,1,Sports
35603,Rotational Windstorms,Supercells,Twisters,Funnels,Mesocyclones,Vortices,Touchdowns,5,Geography
35604,Runes,Futhark,Ansuz,Fehu,Gebo,Kenaz,Thurisaz,Dagaz,Sowilo,5,Language
35605,Salesforce Acquisitions,Tableau,Heroku,Pardot,Einstein,Slack,MuleSoft,Quip,5,Technology
35606,Saline Solutions,Brine,Halite,Saline,Seawater,3,Science
35607,Salsa,CLAVE,CONGAS,TIMBALES,GUAGUANCO,MONTUNO,Celia Cruz,Fania,3,Music
35608,Saplings,seedling,nursery,reforestation,propagation,transplant,arboriculture,3,Nature
35609,satellite TV,LNB,Transponder,Dish,Uplink,5,Technology
35610,Saxophone,REED,LIGATURE,BORE,TONEHOLE,NECK,MOUTHPIECE,Neck strap,Octave key,Key guard,Altissimo,5,Music
35611,Scale,Richter,Mohs,Scoville,Beaufort,3,Science
35612,Scarab,Amulet,Dung,Khepri,Steatite,Faience,Rebirth,3,History
35613,Sci Fi,Solaris,Dune,Stalker,Contact,Arrival,The Matrix,Blade Runner,futuristic,dystopian,nanotechnology,1,Movies
35614,sci-fi series,Firefly,Westworld,Expanse,Dark,Foundation,Battlestar,3,Television
35615,Score,Orchestration,Leitmotif,Composer,Arrangement,Symphony,Incidental,Overture,5,Music
35616,Screenplay,Treatment,Logline,Slugline,Montage,Dialogue,Parenthetical,Formatting,Narrative,Draft,Plot point,5,Movies
35617,Script,Courier,Dialogue,Margins,Watermark,Manuscript,Lines,Scene,Act,Teleplay,Revision,Adaptation,5,Movies
35618,scripted dialogue,Exposition,Subtext,Wordplay,Asides,5,Literature
35619,Sea Lions,CALIFORNIA,STELLER,GALAPAGOS,AUSTRALIAN,Pinniped,Otariid,Rookery,Blubber,Flippers,Marine mammal,3,Nature
35620,Seabirds,ALBATROSS,GANNET,PETREL,PUFFIN,TERN,GUILLEMOT,CORMORANT,Procellariiform,Migration,Ornithology,Piscivore,Fulmar,Skua,Auk,3,Nature
35621,Seagrass,Rhizome,Carbon sink,Posidonia,Salinity,Eelgrass,Turtlegrass,Shoalgrass,Surfgrass,5,Nature
35622,season finales,Felina,Mizumono,Saul Gone,Swan Song,3,Television
35623,Senate,Orator,Decree,Cicero,Cato,Brutus,Pompey,3,History
35624,sensitive skin lotions,CeraVe,Cetaphil,Eucerin,Vanicream,Aquaphor,Bioderma,3,Health
35625,sequels,Aliens,Desperado,Die Hard 2,Toy Story 2,Iron Man 2,Paddington 2,1,Movies
35626,Serenity,Mandala,Zazen,Zen Garden,Bonsai,Pagoda,3,Lifestyle
35627,Settlement,Thingvellir,Danelaw,Longhouse,Jarldom,Jamestown,Plymouth,Roanoke,Quebec,3,History
35628,short films,Bao,Piper,Paperman,Feast,Lou,Hair Love,La Jetée,Logorama,Geri's Game,Knick Knack,3,Movies
35629,silent movie era,Wings,Sunrise,Greed,Intolerance,5,Movies
35630,Sitcom,Cheers,Seinfeld,Friends,Frasier,episodic,banter,pilot,recurring,satire,spoof,1,Television
35631,sketch comedy,Portlandia,SCTV,The State,Mad TV,SNL,Mr. Show,3,Television
35632,Sky and Thermal States,Heatwave,Overcast,Isotherm,Insolation,Albedo,Haze,5,Geography
35633,Slam Dunk,alley-oop,posterize,windmill,tomahawk,jam,rim-rocker,vertical,dunk-contest,1,Sports
35634,Slavery,Shackles,Plantation,Abolition,Manumit,Overseer,Fugitive,labor,oppression,chattel,3,History
35635,SLOW COOKING,CROCKPOT,SIMMER,STEW,CHUCK,BRISKET,1,Food
35636,SMALL BUSINESS TYPES,BOUTIQUE,ARTISAN,VENDOR,AGENCY,WORKSHOP,3,Economics
35637,Soap Opera,Dallas,Dynasty,Passions,Hollyoaks,Erica Kane,Cliffhanger,Melodrama,Serial,Amnesia,Scandal,1,Television
35638,Soccer Discipline,Red Card,Free Kick,Offside,Booking,1,Sports
35639,Soccer Milestones,Clean Sheet,Brace,Nutmeg,Treble,3,Sports
35640,soil fertility,Nitrogen,Potassium,Phosphate,Mycelium,Potash,Loam,Mulch,5,Nature
35641,Soil Textures,Soil,Silt,Clay,Loam,3,Nature
35642,Song Sections,Verse,Chorus,Bridge,Refrain,Hook,Outro,Intro,Prechorus,3,Music
35643,Songwriter,DYLAN,MITCHELL,PRINCE,LENNON,MCCARTNEY,Bridge,Melody,Mitchell,Costello,Simon,3,Music
35644,Soul,Aretha,Otis,Marvin,Motown,Stax,Al Green,Sam Cooke,Etta James,Wonder,3,Music
35645,sound stages,Stage 1 Water Tank,Gantry,Scaffolding,Catwalk,Cyclorama,Green Screen,Soundstage,Flat,Scrim,C-stand,5,Movies
35646,sound stages TV,Stage 24,Stage 19,Stage 2 Culver,Radford,5,Television
35647,Soundtrack,Pulp Fiction,Purple Rain,Grease,Hair,Top Gun,The Graduate,Rushmore,Garden State,3,Movies
35648,Space Race,Sputnik,Apollo,Gagarin,Mercury,Orbit,Astronaut,Technology,Moon Landing,VOSTOK,GEMINI,ALDRIN,3,History
35649,SpaceX,Falcon,Dragon,Starship,Starlink,Raptor,Merlin,3,Technology
35650,Special Effects,Animatronics,Rotoscoping,Stop Motion,Compositing,Foley,Practical,Pyrotechnics,Prosthetics,Miniatures,Squibs,Maquette,5,Movies
35651,Special Teams Positions,Kicker,Punter,Returner,Gunner,Holder,Snapper,3,Sports
35652,SPEEDRUNNING TERMINOLOGY,SPLITS,GLITCH,FRAME,WARP,CLIP,SKIP,ROUTE,TAS,5,Gaming
35653,Spider-Man Villains,VENOM,MYSTERIO,CARNAGE,KRAVEN,VULTURE,RHINO,Electro,Sandman,1,Literature
35654,Spin Off,Joey,Angel,The Flash,Rhoda,Daria,Mork & Mindy,FRASIER,JEFFERSONS,3,Television
35655,spoilers,SYNOPSIS,TRAILER,LEAK,SCREENCAP,RUMOR,Theories,Datamine,Reveal,1,Movies
35656,sports broadcasts,SportsCenter,GameDay,Hard Knocks,RedZone,3,Television
35657,Stadium,Sporting Event,Fans,Home Team,Concession,Turnstile,1,Sports
35658,STALINIST STATEHOOD,POLITBURO,HOLODOMOR,APPARATCHIK,COMINTERN,KREMLIN,5,History
35659,Starfish,SUNFLOWER,CHOCOLATE,LEATHER,MADREPORITE,OSSICLES,AMPULLA,Echinoderm,Regeneration,Tube feet,Radial symmetry,5,Nature
35660,Stats,ERA,WHIP,OBP,WAR,Percentage,Average,Data,Box Score,Leaderboard,3,Sports
35661,Steal,interception,pickpocket,turnover,deflection,fastbreak,possession-change,swipe,1,Sports
35662,Steam Boiler Instruments,Gauge,Manometer,Injector,Fusible Plug,5,Technology
35663,steel frameworks,Girder,Truss,I-Beam,Gusset,Purlin,Joist,Rivet,Column,Girt,Bracing,5,Technology
35664,Stock,Ticker,Equity,Options,Portfolio,Broker,Index,3,Economics
35665,Strategic Board Games,Risk,Stratego,Diplomacy,Chess,3,Gaming
35666,Strategy,Methodology,Blueprint,Contingency,Tactical,3,Economics
35667,Strikeout,whiff,fastball,full-count,back-to-the-bench,swing-and-miss,pitcher,inning,1,Sports
35668,studio audience,Applause,Laughter,Warm-up,Bleachers,WARM-UP ACT,LIVE TAPING,RISERS,3,Television
35669,studio backlots,Western Town,City Street,Brownstone,Courthouse,Back Alley,Paramount,Universal,Cinecitta,Pinewood,Elstree,5,Movies
35670,studio-driven films,Iron Man,Avengers,Frozen,Cars,Moana,1,Movies
35671,subscriber growth,Net Adds,ARPU,Churn,Penetration,Acquisition,ChurnRate,LTV,5,Economics
35672,Subscription,Monthly,Premium,Tiered,Billing,Recurring,Paywall,1,Economics
35673,subtitles TV,SRT,WebVTT,SAMI,SSA,5,Technology
35674,sun-baked rocks,Basalt,Obsidian,Sandstone,Quartzite,Rhyolite,Caliche,5,Geography
35675,Supercars,Veyron,Countach,Enzo,Huayra,Jesko,Testarossa,Diablo,Aventador,Huracan,Zonda,3,Transportation
35676,Superman Villains,ZOD,BRAINIAC,DOOMSDAY,METALLO,BIZARRO,Darkseid,1,Literature
35677,Sustainability,conservation,ecological,equitable,renewable,resilience,stewardship,Photovoltaic,Geothermal,Biomass,Compost,3,Nature
35678,Sylvester Stallone Movies,Cobra,Daylight,Over the Top,Cop Land,Creed,3,Movies
35679,Symphony Nicknames,Eroica,Jupiter,Pastoral,Surprise,Clock,Pathetique,Resurrection,5,Music
35680,symphony orchestras,Berliner,Gewandhaus,Philharmonia,Cleveland,Boston,5,Music
35681,Synoptic Fronts,Cold front,Warm front,Occlusion,Frontogeny,Dryline,5,Geography
35682,Synthesizer,OSCILLATOR,FILTER,ENVELOPE,SEQUENCER,RESONANCE,5,Music
35683,Tackle,sack,wrap-up,takedown,linebacker,collision,backfield,impact,blitz,1,Sports
35684,talk shows,Donahue,Ricki Lake,Geraldo,Maury,3,Television
35685,taped television,Jeopardy,Wheel,Survivor,Oprah,1,Television
35686,tasting menus,Amuse-bouche,Mignardise,Consomme,Granita,Petit Four,Intermezzo,Degustation,Omakase,Flight,Pairing,Cleanser,Sorbet,5,Food
35687,Teaser,Bumper,Stinger,One-sheet,Standee,Trailer,Promotional,Snippet,Hype,GLIMPSE,PREVIEW,3,Movies
35688,technology era,Industrial,Digital,Information,Space,Electronic,Mechanical,Bronze,3,History
35689,teen dramas,Skins,Glee,Riverdale,Degrassi,Gossip Girl,Elite,1,Television
35690,Telecommunication,Ethernet,Antenna,Modem,Signal,Wireless,Router,Telex,Fiber,Satellite,3,Technology
35691,Telenovela,Marimar,Rebelde,Rubi,Betty la Fea,Vengeance,Antagonist,Heartache,Rosalinda,Gata Salvaje,3,Television
35692,television critics,Sepinwall,Mo Ryan,Tim Goodman,Poniewozik,Ken Tucker,Greenwald,Nussbaum,5,Television
35693,TEMPO,ADAGIO,ALLEGRO,PRESTO,LARGO,BPM,Moderato,Andante,Metronome,Vivace,Accelerando,3,Music
35694,Textual Anatomy,Subheading,Header,Sidebar,Caption,Footer,3,Language
35695,The Digital Age,Broadband,Silicon,Pixel,Cloud,Browser,Algorithm,Byte,1,Technology
35696,The Jeffersons,George,Louise,Weezy,Florence,Lionel,Tom Willis,Helen Willis,Dry Cleaner,East Side,Bentley,Willis,3,Television
35697,the pacific islands,Fiji,Samoa,Tonga,Tahiti,Guam,Palau,Nauru,Tuvalu,1,Geography
35698,Theme Song,Skyfall,Moon River,Let It Go,Footloose,1,Music
35699,theme songs,Teardrop,Bad Boys,Boss of Me,Low Rider,3,Music
35700,Theodore Roosevelt,Roughrider,Bullmoose,Panama,Bigstick,Trustbust,Sagamore,National Parks,Square Deal,3,History
35701,Thomas Paine,Common Sense,Thetford,Deism,Staymaker,Crisis,Agrarian,Reason,3,History
35702,Thorns,Prickles,Spines,Barbs,Brambles,Defensive,Sharpness,Botanical,Epidermal,3,Nature
35703,Thriller,suspense,cliffhanger,psychological,red herring,intrigue,pacing,espionage,noir,1,Movies
35704,Tiberius,Capri,Sejanus,Rhodes,Germanicus,Vipsania,5,History
35705,Tide Terminology,Neap,Spring,Ebb,Slack,Diurnal,Gravitational,Intertidal,Syzygy,Amplitude,5,Geography
35706,TIE-BREAKING METHODS,OVERTIME,SUDDEN DEATH,TIE BREAKER,SHOOTOUT,Head-to-head,Net Run Rate,Goal Difference,Set Piece,Point Spread,Seeding,Coin Toss,3,Sports
35707,Touchdown,endzone,pylon,goal-line,receiver,spike,extra-point,drive,celebration,1,Sports
35708,Tournament,BRACKET,SEEDING,REPECHAGE,WILDCARD,FINALS,PLAYOFFS,Elimination,Seed,Qualifier,Fixture,Circuit,Draw,Knockout,3,Sports
35709,Trade,Negotiation,Deadline,Asset,Package,Move,3,Economics
35710,Trade Routes,Silk Road,Amber Road,Caravan,Spice Route,Hanseatic,Galleon,Incense Road,3,History
35711,tragedies,Macbeth,Othello,King Lear,Medea,Antigone,Oedipus Rex,Electra,3,Literature
35712,Trailer,Theatrical,Red-band,Featurette,Sizzle,3,Movies
35713,Trance,ARPEGGIO,IBIZA,GOA,UPLIFTING,SYNTH,Tiesto,Oakenfold,Vandyk,Armin,5,Music
35714,transformation,Mutation,Alchemy,Sublimation,Evolution,Molting,Mutagenesis,Ecdysis,Catalysis,Anagenesis,5,Science
35715,traveling performers,Troubadour,Minstrel,Busker,Jongleur,Bard,Goliard,Vaudevillian,3,History
35716,true‑crime mysteries,Staircase,Jinx,Dateline,Unsolved,Mindhunter,3,Television
35717,Trumpet,VALVE,PISTON,LEADPIPE,CROOK,BELL,5,Music
35718,Tulips,Perennial,Bulb,Spring,Holland,Garden,Stem,1,Nature
35719,TURNTABLE ANATOMY,PLATTER,STYLUS,TONEARM,BELT,CARTRIDGE,Slipmat,5,Music
35720,Tutankhamun,Carter,Carnarvon,KV62,Smenkhkare,Ankhesenamun,3,History
35721,TV fandom,SHIPPERS,HEADCANON,FANFIC,COSPLAY,OTP,3,Television
35722,TV reviews,AV Club,TVLine,Variety,Indiewire,Metacritic,Vulture,5,Television
35723,Typhoon,Depression,Landfall,Monsoon,Intensification,Archipelagic,Torrential,Pacific,Tip,Haiyan,Mangkhut,Nina,3,Geography
35724,Umpire,Baseball,Cricket,Decision,Strike,Fair,Neutral,1,Sports
35725,Underground Railroad,Conductor,Station,Passenger,Tubman,Quaker,Vigilance,Crossing,Abolitionists,North Star,Canaan,3,History
35726,Union,Grant,Sherman,Potomac,Sheridan,Abraham Lincoln,Preservation,Strategy,Freedom,Abolition,Decree,3,History
35727,urban fiction,Clockers,Snowfall,Juice,Push,Belly,Flyy Girl,Gangsta,B-More,3,Literature
35728,Urban Skyscrapers,Spire,Atrium,Penthouse,Shard,Gherkin,3,Geography
35729,urban transit hubs,Shinjuku,Gare du Nord,St Pancras,Penn Station,King's Cross,Chatelet,Mezzanine,Turnstile,Concourse,Terminal,Junction,3,Transportation
35730,Urchins,ARISTOTLE,LANTERN,TEST,SPINES,PEDICELLARIA,Echinoidea,Aristotles lantern,Gonads,Barnacles,Anemones,Limpets,5,Nature
35731,User Base,Redditors,YouTubers,TikTokers,Snapchatters,Segment,Audience,Cohort,Patron,1,Technology
35732,USER INTERFACE DESIGN,BREADCRUMB,HAMBURGER,CAROUSEL,TOGGLE,SLIDER,Tooltip,Sidebar,5,Technology
35733,variety shows,Ed Sullivan,Soul Train,Laugh-In,Hee Haw,Muppet Show,Solid Gold,Cher,3,Television
35734,Vatican City,Conclave,Swiss Guard,St. Peter,Sistine,Grottoes,Curia,Papacy,3,Geography
35735,Vendor,Oracle,SAP,Workday,NetSuite,5,Technology
35736,VENTURE CAPITAL,UNICORN,PIVOT,RUNWAY,EXIT,5,Economics
35737,Vertical Forest Strata,Canopy,Understory,Emergent,Floor,5,Nature
35738,Veteran,Journeyman,Stalwart,Mentor,Savant,Graybeard,Expert,Sage,Master,Practitioner,Authority,3,Sports
35739,Vietnam War,Napalm,Saigon,Tet,Viet Cong,Conscription,Tet Offensive,Ho Chi Minh,HANOI,HUEY,3,History
35740,Viking Explorers,Leif Erikson,Erik the Red,Freydis,Bjarni,Thorfinn,Markland,Karlsefni,Leifsbudir,3,History
35741,Vines,Clematis,Ivy,Wisteria,Honeysuckle,Bougainvillea,Grapevine,Passionflower,Jasmine,3,Nature
35742,VINTAGE AUTOMOBILES,Model T,Model A,Oldsmobile,Studebaker,Packard,Duesenberg,Auburn,Cord,Stutz,Hudson,LaSalle,Marmon,3,Transportation
35743,Vintage Cars,Phantom,Silver Ghost,Type 3 Duesenberg,3,Transportation
35744,VINYL RECORD MEDIA,GROOVE,SPINDLE,JACKET,SLEEVE,WAX,3,Music
35745,Violin,CHINREST,PURFLING,FROG,SOUNDPOST,PEGBOX,SCROLL,5,Music
35746,virtual reality era,Oculus Rift,Meta Quest,Hololens,SteamVR,Beat Saber,VRChat,3,Technology
35747,Vocal Ranges,Bass,Tenor,Alto,Soprano,Baritone,3,Music
35748,vocal training,Falsetto,Vibrato,Glissando,Solfege,Belting,Register,Resonance,5,Music
35749,Voice Acting,Mel Blanc,Tara Strong,Jim Cummings,Frank Welker,Grey DeLisle,Billy West,Dubbing,Inflection,Intonation,ADR,Vocalize,3,Movies
35750,Wagons,Outback,Roadmaster,Avant,Touring,Nomad,V60,RS6 Avant,Stagea,Levorg,3,Transportation
35751,WAR ON TERROR,AL-QAEDA,TALIBAN,GUANTANAMO,DRONE,Insurgency,Homeland Security,Counterterrorism,Fallujah,Kandahar,Baghdad,Blackhawk,Tora Bora,3,History
35752,Warner Bros Discovery,Joker,HBO,CNN,Max,HGTV,Eurosport,TNT,3,Television
35753,watch time,Minutes,Completion,Engagement,Viewthrough,Retention,Churn,Binge,5,Technology
35754,Watergate,HALDEMAN,LIDDY,DEEP THROAT,TAPES,AGNEW,3,History
35755,Wes Craven Films,Cursed,Red Eye,Swamp Thing,Shocker,3,Movies
35756,Western,Shane,Red River,High Noon,Unforgiven,Rio Bravo,Stagecoach,1,Movies
35757,Westward Expansion,Oregon Trail,Homestead,Frontier,Gold Rush,Pioneers,Wagon,Railroad,3,History
35758,Wetland Ecosystems,Mangrove,Estuary,Peatland,Billabong,Everglades,Cypress,5,Geography
35759,Wholesale,Bulk,Volume,Discount,Rebate,Supplier,Jobber,Pallet,3,Economics
35760,wide shots,Establishing,Panorama,Master Shot,Extreme Long,Long Shot,Vista,Landscape,5,Movies
35761,Willows,Salix,Pendulous,Riparian,Osier,Pliant,Weeping,Salicin,PUSSY,SALLOW,CRACK,5,Nature
35762,Win Streak,HEATER,SWEEP,RUN,TEAR,Momentum,Hot Hand,Perfect Season,Dynasty,Unbeaten,Undefeated,1,Sports
35763,WIND STRENGTH DESIGNATIONS,Gusts,Gale,Storm,Squall,3,Geography
35764,Workforce,Freelance,Salaried,Unionized,Remote,Personnel,Payroll,Roster,Labor,Intern,Trainee,3,Economics
35765,World Music,SITAR,GAMELAN,KOTO,TABLA,MBIRA,DIDGERIDOO,Kora,5,Music
35766,World War One,Trench,Verdun,Somme,Zeppelin,Lusitania,Uboat,Tank,Mustardgas,Trench Warfare,Armistice,Versailles Treaty,3,History
35767,World War Two,Midway,Spitfire,Enigma,Overlord,Iwojima,Bastogne,Radar,Allies,Axis,Frontlines,Propaganda,3,History
35768,Yellow Card,Caution,Warning,Booking,Misconduct,Field,1,Sports
35769,Young Trees,Saplings,Seedlings,Sprouts,Scions,1,Nature`,ap=[Vg,Wg,Kg,Yg,zg,_g,jg,Jg,Zg,Xg,qg,Qg,$g,ep,tp].join(`
`),ip=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,Score,Category
3000,Famous Mary,Shelley,Tyler Moore,Poppins,Magdalene,Queen of Scots,Berry,Blige,J. Blige,3,Fame
3001,Famous Elizabeth,Taylor,Olsen,Warren,Bennet,II,Debicki,Holmes,Banks,3,Fame
3002,Famous Jennifer,Lopez,Lawrence,Aniston,Garner,Coolidge,Love Hewitt,Hudson,Connelly,3,Fame
3003,Famous Linda,Hamilton,Ronstadt,Evangelista,Blair,McCartney,Hunt,Lavin,Cardellini,3,Fame
3004,Famous Patricia,Arquette,Clarkson,Cornwell,Neal,Highsmith,Heaton,Field,Richardson,3,Fame
3005,Famous Barbara,Streisand,Eden,Walter,Bach,Gordon,Bush,Stanwyck,Hershey,3,Fame
3006,Famous Susan,Sarandon,Sontag,Boyle,Collins,Storm,Lucci,Rice,Wojcicki,3,Fame
3007,Famous Jessica,Alba,Chastain,Simpson,Biel,Rabbit,Lange,Walter,Capshaw,3,Fame
3008,Famous Sarah,Connor,Jessica Parker,Silverman,Paulson,Palin,Michelle Gellar,Hyland,McLachlan,3,Fame
3009,Famous Karen,Carpenter,Allen,Gillan,Page,Smith,O,Gillan,Nyberg,3,Fame
3010,Famous Nancy,Drew,Sinatra,Pelosi,Grace,Romanoff,Kerrigan,Reagan,Meyers,3,Fame
3011,Famous Lisa,Simpson,Kudrow,Bonet,Loeb,Frank,Marie Presley,Rinna,Ling,3,Fame
3012,Famous Betty,White,Boop,Davis,Ford,Grable,Friedan,Rubble,Cooper,3,Fame
3013,Famous Margaret,Thatcher,Atwood,Cho,Qualley,Hamilton,Mitchell,Court,Sanger,3,Fame
3014,Famous Sandra,Bullock,Oh,Dee,Day O’Connor,Bernhard,Cisneros,Denton,Lee,3,Fame
3015,Famous Ashley,Olsen,Judd,Tisdale,Graham,Greene,Johnson,Cole,Benson,3,Fame
3016,Famous Kimberly,Kardashian,Clark,Guillfoyle,Anne Scott,Williams,Stewart,Quinn,Loaiza,3,Fame
3017,Famous Emily,Blunt,Dickinson,Deschanel,Brontë,Post,Ratajkowski,Osment,VanCamp,3,Fame
3018,Famous Donna,Summer,Tartt,Reed,Karan,Mills,Murphy,D'Errico,Brazile,3,Fame
3019,Famous Michelle,Obama,Pfeiffer,Williams,Yeoh,Rodriguez,Kwan,Branch,Monaghan,3,Fame
3020,Famous Carol,Burnett,Danvers,Brady,King,Kane,Channing,Alt,Leifer,3,Fame
3021,Famous Amanda,Seyfried,Peet,Knox,Clarke,Bynes,Plummer,Palmer,Bearse,3,Fame
3022,Famous Melissa,McCarthy,Benoist,Joan Hart,Etheridge,Gilbert,Rauch,George,Leo,3,Fame
3023,Famous Deborah,Kerr,Harry,Messing,Ann Woll,Gibson,Norville,Cox,Feldman,3,Fame
3024,Famous Stephanie,Meyer,Beatriz,McMahon,Seymour,Mills,Rice,March,Pratt,3,Fame
3025,Famous Rebecca,Ferguson,Hall,Romijn,Black,De Mornay,Miller,Mader,Sugar,3,Fame
3026,Famous Sharon,Stone,Tate,Osbourne,Carter,Gless,Case,Needles,Jones,3,Fame
3027,Famous Laura,Palmer,Dern,Bush,Linney,Prepon,Ingalls Wilder,Marano,Dern,3,Fame
3028,Famous Cynthia,Erivo,Nixon,Cooper,Rowley,Rothrock,Watros,Addai-Robinson,Bailey,3,Fame
3029,Famous Amy,Adams,Poehler,Winehouse,Schumer,Smart,Grant,Tan,Fisher,3,Fame
3030,Famous James,Dean,Cameron,Brown,Franco,Earl Jones,Bond,Harden,Stewart,3,Fame
3031,Famous John,Lennon,Wayne,Travolta,Cena,Williams,Wick,Snow,Carpenter,3,Fame
3032,Famous Robert,De Niro,Downey Jr.,Redford,Pattinson,Smith,Plant,Kennedy,3,Fame
3033,Famous Michael,Jackson,Jordan,Fox,Caine,Fassbender,Keaton,Myers,3,Fame
3034,Famous William,Shakespeare,Smith,Turner,Dafoe,Wallace,Tell,Macy,3,Fame
3035,Famous David,Bowie,Beckham,Lynch,Attenborough,Fincher,Letterman,Copperfield,3,Fame
3036,Famous Christopher,Nolan,Walken,Reeves,Columbus,Lee,Robin,Eccleston,3,Fame
3037,Famous Daniel,Day-Lewis,Craig,Radcliffe,Defoe,Plainview,Bryan,Kaluuya,3,Fame
3038,Famous Matthew,McConaughey,Perry,Broderick,Stafford,McFadyen,Modine,Goode,3,Fame
3039,Famous Anthony,Hopkins,Bourdain,Stark,Davis,Mackie,Edwards,Scaramucci,3,Fame
3040,Famous Mark,Twain,Wahlberg,Hamill,Zuckerberg,Ruffalo,Strong,Cuban,3,Fame
3041,Famous Steven,Spielberg,Tyler,Seagal,Yeun,Grant,King,Soderbergh,3,Fame
3042,Famous Paul,McCartney,Newman,Rudd,Simon,Atreides,Walker,Bettany,3,Fame
3043,Famous Andrew,Garfield,Jackson,Lloyd Webber,Tate,Carnegie,Scott,Lincoln,3,Fame
3044,Famous Kevin,Bacon,Hart,Costner,Durant,McCallister,Feige,Smith,3,Fame
3045,Famous Brian,Wilson,May,Cranston,Cox,Griffin,Johnson,Eno,3,Fame
3046,Famous George,Washington,Clooney,Lucas,Harrison,Jetson,Orwell,Foreman,3,Fame
3047,Famous Jason,Momoa,Bateman,Statham,Sudeikis,Bourne,Voorhees,Todd,3,Fame
3048,Famous Ryan,Gosling,Reynolds,O’Neal,Murphy,Giggs,Howard,Seacrest,3,Fame
3049,Famous Timothy,Chalamet,Olyphant,Dalton,Leary,McGee,Spall,Hutton,3,Fame
3050,Famous Charles,Darwin,Chaplin,Dickens,Xavier,Barkley,Manson,Grodin,3,Fame
3051,Famous Joseph,Biden,Gordon-Levitt,Stalin,Campbell,Joestar,Conrad,Fiennes,3,Fame
3052,Famous Thomas,Edison,Cruise,Hardy,Jefferson,Shelby,Anderson,Aquinas,3,Fame
3053,Famous Joshua,Jackson,Homme,Bell,Tree,Groban,Malina,Rush,3,Fame
3054,Famous Kenneth,Branagh,Copeland,Thompson,Arrow,Lay,Walker,Cole,3,Fame
3055,Famous Donald,Trump,Glover,Duck,Sutherland,Draper,Knuth,Fagen,3,Fame
3056,Famous Jeffrey,Bezos,Bridges,Dahmer,Epstein,Wright,Morgan,Tambor,3,Fame
3057,Famous Ronald,Reagan,McDonald,Weasley,Koeman,Dahl,Moore,Isley,3,Fame
3058,Famous Tim,Burton,Cook,Allen,McGraw,Robbins,Gunn,Curry,3,Fame
3059,Famous Adam,Sandler,Driver,Levine,West,Savage,Page,Scott,3,Fame
3060,Famous Jack,Nicholson,Sparrow,Ryan,Black,White,Bauer,London,3,Fame
3061,Famous Henry,Ford,Cavill,VIII,Winkler,Rollins,Hill,Fonda,3,Fame
3062,Famous Sean,Connery,Penn,Bean,Parker,Astin,Kingston,Lennon,3,Fame
3063,Famous Chris,Evans,Hemsworth,Pratt,Rock,Pine,Martin,Columbus,3,Fame
`,np=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
2501,Butterfly,Mariposa,Papillon,Schmetterling,Farfalla,Borboleta,Vlinder,1,Nature
2502,Bread,Pan,Pain,Brot,Pane,Chleb,Brood,1,Food
2503,Water,Agua,Eau,Wasser,Acqua,Voda,Mizu,1,Nature
2504,Friend,Amigo,Ami,Freund,Amico,Przyjaciel,Vriend,1,History
2505,House,Casa,Maison,Haus,Dom,Huis,1,History
2506,Sun,Sol,Soleil,Sonne,Sole,Słońce,Zon,1,Nature
2507,Moon,Luna,Lune,Mond,Luna,Księżyc,Maan,1,Nature
2508,Star,Estrella,Étoile,Stern,Stella,Gwiazda,Ster,1,Nature
2509,Book,Libro,Livre,Buch,Książka,Boek,1,History
2510,Cat,Gato,Chat,Katze,Kot,Kat,1,Nature
2511,Dog,Perro,Chien,Hund,Cane,Pies,Hond,1,Nature
2512,Flower,Flor,Fleur,Blume,Fiore,Kwiat,Bloem,1,Nature
2513,Tree,Árbol,Arbre,Baum,Albero,Drzewo,Boom,1,Nature
2514,Mountain,Montaña,Montagne,Berg,Montagna,Góra,Berg,1,Nature
2515,River,Río,Rivière,Fluss,Fiume,Rzeka,Rivier,1,Nature
2516,Sea,Mar,Mer,Meer,Mare,Morze,Zee,1,Nature
2517,Heart,Corazón,Cœur,Herz,Cuore,Serce,Hart,1,Science
2518,Apple,Manzana,Pomme,Apfel,Mela,Jabłko,Appel,1,Food
2519,Earth,Tierra,Terre,Erde,Terra,Ziemia,Aarde,1,Nature
2520,Fire,Fuego,Feu,Feuer,Fuoco,Ogień,Vuur,1,Nature
2521,Wind,Viento,Vent,Wind,Vento,Wiatr,Wind,1,Nature
2522,Bird,Pájaro,Oiseau,Vogel,Uccello,Ptak,Vogel,1,Nature
2523,Fish,Pez,Poisson,Fisch,Pesce,Ryba,Vis,1,Nature
2524,Head,Cabeza,Tête,Kopf,Testa,Głowa,Hoofd,1,Science
2525,Hand,Mano,Main,Hand,Mano,Ręka,Hand,1,Science
2526,Eye,Ojo,Œil,Auge,Occhio,Oko,Oog,1,Science
2527,Coffee,Café,Kaffee,Caffè,Kawa,Koffie,1,Food
2528,Milk,Leche,Lait,Milch,Latte,Mleko,Melk,1,Food
2529,Night,Noche,Nuit,Nacht,Notte,Noc,Nacht,1,Nature
2530,Day,Día,Jour,Tag,Giorno,Dzień,Dag,1,Nature
2531,Rain,Lluvia,Pluie,Regen,Pioggia,Deszcz,Regen,1,Nature
2532,Snow,Nieve,Neige,Schnee,Neve,Śnieg,Sneeuw,1,Nature
2533,City,Ciudad,Ville,Stadt,Città,Miasto,Stad,1,History
2534,School,Escuela,École,Schule,Scuola,Szkoła,School,1,History
2535,Teacher,Maestro,Professeur,Lehrer,Nauczyciel,Leraar,1,History
2536,Red,Rojo,Rouge,Rot,Rosso,Czerwony,Rood,1,Science
2537,Blue,Azul,Bleu,Blau,Blu,Niebieski,Blauw,1,Science
2538,Green,Verde,Vert,Grün,Zielony,Groen,1,Science
2539,Yellow,Amarillo,Jaune,Gelb,Giallo,Żółty,Geel,1,Science
2540,Black,Negro,Noir,Schwarz,Nero,Czarny,Zwart,1,Science
2541,White,Blanco,Blanc,Weiß,Bianco,Biały,Wit,1,Science
2542,Love,Amor,Amour,Liebe,Amore,Miłość,Liefde,1,Science
2543,Life,Vida,Vie,Leben,Vita,Życie,Leven,1,Science
2544,Time,Tiempo,Temps,Zeit,Tempo,Czas,Tijd,1,Science
2545,Music,Música,Musique,Musik,Musica,Muzyka,Muziek,1,Music
2546,Name,Nombre,Nom,Name,Nome,Imię,Naam,1,History
2547,Window,Ventana,Fenêtre,Fenster,Finestra,Okno,Raam,1,History
2548,Table,Mesa,Table,Tisch,Tavolo,Stół,Tafel,1,History
2549,Chair,Silla,Chaise,Stuhl,Sedia,Krzesło,Stoel,1,History
2550,Door,Puerta,Porte,Tür,Porta,Drzwi,Deur,1,History
2551,Boy,Niño,Garçon,Junge,Ragazzo,Chłopiec,Jongen,1,Science
2552,Girl,Niña,Fille,Mädchen,Ragazza,Dziewczynka,Meisje,1,Science
2553,Father,Padre,Père,Vater,Padre,Ojciec,Vader,1,History
2554,Mother,Madre,Mère,Mutter,Madre,Matka,Moeder,1,History
2555,Son,Hijo,Fils,Sohn,Figlio,Syn,Zoon,1,History
2556,Daughter,Hija,Fille,Tochter,Figlia,Córka,Dochter,1,History
2557,Brother,Hermano,Frère,Bruder,Fratello,Brat,Broer,1,History
2558,Sister,Hermana,Sœur,Schwester,Sorella,Siostra,Zus,1,History
2559,Grandfather,Abuelo,Grand-père,Großvater,Nonno,Dziadek,Grootvader,1,History
2560,Grandmother,Abuela,Grand-mère,Großmutter,Nonna,Babcia,Grootmoeder,1,History
2561,Uncle,Tío,Oncle,Onkel,Zio,Wujek,Oom,1,History
2562,Aunt,Tía,Tante,Tante,Zia,Ciocia,Tante,1,History
2563,Cousin,Primo,Cousin,Cousin,Cugino,Kuzyn,Neef,1,History
2564,Nephew,Sobrino,Neveu,Neffe,Nipote,Siostrzeniec,Neef,1,History
2565,Niece,Sobrina,Nièce,Nichte,Nipote,Siostrzenica,Nicht,1,History
2566,Baby,Bebé,Bébé,Baby,Neonato,Dziecko,Baby,1,Science
2567,Mouth,Boca,Bouche,Mund,Bocca,Usta,Mond,1,Science
2568,Nose,Nariz,Nez,Nase,Naso,Nos,Neus,1,Science
2569,Ear,Oreja,Oreille,Ohr,Orecchio,Ucho,Oor,1,Science
2570,Hair,Pelo,Cheveu,Haar,Capelli,Włosy,Haar,1,Science
2571,Face,Cara,Visage,Gesicht,Viso,Twarz,Gezicht,1,Science
2572,Shoulder,Hombro,Épaule,Schulter,Spalla,Ramię,Schouder,1,Science
2573,Arm,Brazo,Bras,Arm,Braccio,Ramię,Arm,1,Science
2574,Finger,Dedo,Doigt,Finger,Dito,Palec,Vinger,1,Science
2575,Leg,Pierna,Jambe,Bein,Gamba,Noga,Been,1,Science
2576,Foot,Pie,Pied,Fuß,Piede,Stopa,Voet,1,Science
2577,Back,Espalda,Dos,Rücken,Schiena,Plecy,Rug,1,Science
2578,Skin,Piel,Peau,Haut,Pelle,Skóra,Huid,1,Science
2579,Blood,Sangre,Sang,Blut,Sangue,Krew,Bloed,1,Science
2580,Bone,Hueso,Os,Knochen,Osso,Kość,Bot,1,Science
2581,Stomach,Estómago,Estomac,Magen,Stomaco,Żołądek,Maag,1,Science
2582,Brain,Cerebro,Cerveau,Gehirn,Cervello,Mózg,Brein,1,Science
2583,Bread,Pan,Pain,Brot,Pane,Chleb,Brood,1,Food
2584,Rice,Arroz,Riz,Reis,Riso,Ryż,Rijst,1,Food
2585,Meat,Carne,Viande,Fleisch,Carne,Mięso,Vlees,1,Food
2586,Chicken,Pollo,Poulet,Hähnchen,Pollo,Kurczak,Kip,1,Food
2587,Egg,Huevo,Œuf,Ei,Uovo,Jajko,Ei,1,Food
2588,Cheese,Queso,Fromage,Käse,Formaggio,Ser,Kaas,1,Food
2589,Butter,Mantequilla,Beurre,Butter,Burro,Masło,Boter,1,Food
2590,Fruit,Fruta,Fruit,Frucht,Frutta,Owoc,Vrucht,1,Food
2591,Banana,Plátano,Banane,Banane,Banana,Banan,Banaan,1,Food
2592,Orange,Naranja,Orange,Orange,Arancia,Pomarańcza,Sinaasappel,1,Food
2593,Potato,Patata,Pomme de terre,Kartoffel,Patata,Ziemniak,Aardappel,1,Food
2594,Tomato,Tomate,Tomate,Tomate,Pomodoro,Pomidor,Tomaat,1,Food
2595, Onion,Cebolla,Oignon,Zwiebel,Cipolla,Cebula,Ui,1,Food
2596,Garlic,Ajo,Ail,Knoblauch,Aglio,Czosnek,Knoflook,1,Food
2597,Salt,Sal,Sel,Salz,Sale,Sól,Zout,1,Food
2598,Sugar,Azúcar,Sucre,Zucker,Zucchero,Cukier,Suiker,1,Food
2599,Tea,Té,Thé,Tee,Tè,Herbata,Thee,1,Food
2600,Wine,Vino,Vin,Wein,Vino,Wino,Wijn,1,Food
2601,Beer,Cerveza,Bière,Bier,Birra,Piwo,Bier,1,Food
2602,Juice,Zumo,Jus,Saft,Succo,Sok,Sap,1,Food
2603,Plate,Plato,Assiette,Teller,Piatto,Talerz,Bord,1,Food
2604,Cup,Taza,Tasse,Tasse,Tazza,Filiżanka,Kop,1,Food
2605,Spoon,Cuchara,Cuillère,Löffel,Cucchiaio,Łyżka,Lepel,1,Food
2606,Knife,Cuchillo,Couteau,Messer,Coltello,Nóż,Mes,1,Food
2607,Fork,Tenedor,Fourchette,Gabel,Forchetta,Widelec,Vork,1,Food
2608,Shirt,Camisa,Chemise,Hemd,Camicia,Koszula,Overhemd,1,History
2609,Pants,Pantalones,Pantalon,Hose,Pantaloni,Spodnie,Broek,1,History
2610,Dress,Vestido,Robe,Kleid,Vestito,Sukienka,Jurk,1,History
2611,Skirt,Falda,Jupe,Rock,Gonna,Spódnica,Rok,1,History
2612,Coat,Abrigo,Manteau,Mantel,Cappotto,Płaszcz,Jas,1,History
2613,Hat,Sombrero,Chapeau,Hut,Cappello,Kapelusz,Hoed,1,History
2614,Shoe,Zapato,Chaussure,Schuh,Scarpa,But,Schoen,1,History
2615,Sock,Calcetín,Chaussette,Socke,Calza,Skarpetka,Sok,1,History
2616,Watch,Reloj,Montre,Uhr,Orologio,Zegarek,Horloge,1,History
2617,Bag,Bolsa,Sac,Tasche,Borsa,Torba,Tas,1,History
2618,Glasses,Gafas,Lunettes,Brille,Occhiali,Okulary,Bril,1,History
2619,Bed,Cama,Lit,Bett,Letto,Łóżko,Bed,1,History
2620,Sleep,Sueño,Sommeil,Schlaf,Sonno,Sen,Slaap,1,History
2621,Kitchen,Cocina,Cuisine,Küche,Cucina,Kuchnia,Keuken,1,History
2622,Bathroom,Baño,Salle de bain,Badzimmer,Bagno,Łazienka,Badkamer,1,History
2623,Garden,Jardín,Jardin,Garten,Giardino,Ogród,Tuin,1,History
2624,Floor,Suelo,Sol,Boden,Pavimento,Podłoga,Vloer,1,History
2625,Wall,Pared,Mur,Wand,Parete,Ściana,Muur,1,History
2626,Roof,Techo,Toit,Dach,Tetto,Dach,Dak,1,History
2627,Stairs,Escaleras,Escaliers,Treppe,Scale,Schody,Trap,1,History
2628,Key,Llave,Clé,Schlüssel,Chiave,Klucz,Sleutel,1,History
2629,Mirror,Espejo,Miroir,Spiegel,Specchio,Lustro,Spiegel,1,History
2630,Soap,Jabón,Savon,Seife,Sapone,Mydło,Zeep,1,History
2631,Towel,Toalla,Serviette,Handtuch,Asciugamano,Ręcznik,Handdoek,1,History
2632,Computer,Ordenador,Ordinateur,Computer,Computer,Komputer,Computer,1,Science
2633,Phone,Teléfono,Téléphone,Telefon,Telefono,Telefon,Telefoon,1,Science
2634,Camera,Cámara,Appareil,Kamera,Macchina,Aparat,Camera,1,Science
2635,Pen,Bolígrafo,Stylo,Stift,Penna,Długopis,Pen,1,History
2636,Paper,Papel,Papier,Papier,Carta,Papier,Papier,1,History
2637,Letter,Carta,Lettre,Brief,Lettera,List,Brief,1,History
2638,Street,Calle,Rue,Straße,Strada,Ulica,Straat,1,History
2639,Road,Camino,Chemin,Weg,Strada,Droga,Weg,1,History
2640,Bridge,Puente,Pont,Brücke,Ponte,Most,Brug,1,History
2641,Store,Tienda,Magasin,Laden,Negozio,Sklep,Winkel,1,History
2642,Park,Parque,Parc,Park,Parco,Park,Park,1,History
2643,Hospital,Hospital,Hôpital,Krankenhaus,Ospedale,Szpital,Ziekenhuis,3,Science
2644,Police,Policía,Police,Polizei,Polizia,Policja,Politie,1,Science
2645,Doctor,Médico,Médecin,Arzt,Dottore,Lekarz,Dokter,1,Science
2646,Student,Estudiante,Étudiant,Student,Studente,Student,Student,1,History
2647,Office,Oficina,Bureau,Büro,Ufficio,Biuro,Kantoor,1,History
2648,Work,Trabajo,Travail,Arbeit,Lavoro,Praca,Werk,1,History
2649,Money,Dinero,Argent,Geld,Denaro,Pieniądze,Geld,1,History
2650,Price,Precio,Prix,Preis,Prezzo,Cena,Prijs,1,History
2651,Bill,Factura,Facture,Rechnung,Conto,Rachunek,Rekening,1,History
2652,Ticket,Entrada,Billet,Karte,Biglietto,Bilet,Kaartje,1,History
2653,Map,Mapa,Carte,Karte,Mappa,Mapa,Kaart,1,Science
2654,Hotel,Hotel,Hôtel,Hotel,Hotel,Hotel,Hotel,1,History
2655,Beach,Playa,Plage,Strand,Spiaggia,Plaża,Strand,1,Nature
2656,Forest,Bosque,Forêt,Wald,Foresta,Las,Bos,1,Nature
2657,Desert,Desierto,Désert,Wüste,Deserto,Pustynia,Woestijn,3,Nature
2658,Lake,Lago,Lac,See,Lago,Jezioro,Meer,1,Nature
2659,Island,Isla,Île,Insel,Isola,Wyspa,Eiland,1,Nature
2660,Cloud,Nube,Nuage,Wolke,Nuvola,Chmura,Wolk,1,Nature
2661,Thunder,Trueno,Tonnerre,Donner,Tuono,Grzmot,Donder,3,Nature
2662,Storm,Tormenta,Tempête,Sturm,Tempesta,Burza,Storm,1,Nature
2663,Sky,Cielo,Ciel,Himmel,Cielo,Niebo,Hemel,1,Nature
2664,Bird,Pájaro,Oiseau,Vogel,Uccello,Ptak,Vogel,1,Nature
2665,Horse,Caballo,Cheval,Pferd,Cavallo,Koń,Paard,1,Nature
2666,Cow,Vaca,Vache,Kuh,Mucca,Krowa,Koe,1,Nature
2667,Pig,Cerdo,Cochon,Schwein,Maiale,Świnia,Varken,1,Nature
2668,Sheep,Oveja,Mouton,Schaf,Pecora,Owca,Schaap,1,Nature
2669,Goat,Cabra,Chèvre,Ziege,Capra,Koza,Geit,1,Nature
2670,Lion,León,Lion,Löwe,Leone,Lew,Leeuw,1,Nature
2671,Tiger,Tigre,Tigre,Tiger,Tigre,Tygrys,Tijger,1,Nature
2672,Bear,Oso,Ours,Bär,Orso,Niedźwiedź,Beer,1,Nature
2673,Elephant,Elefante,Éléphant,Elefant,Elefante,Słoń,Olifant,1,Nature
2674,Monkey,Mono,Singe,Affe,Scimmia,Małpa,Aap,1,Nature
2675,Rabbit,Conejo,Lapin,Hase,Coniglio,Królik,Konijn,1,Nature
2676,Snake,Serpiente,Serpent,Schlange,Serpente,Wąż,Slang,1,Nature
2677,Frog,Rana,Grenouille,Frosch,Rana,Żaba,Kikker,1,Nature
2678,Mouse,Ratón,Souris,Maus,Topo,Mysz,Muis,1,Nature
2679,Fly,Mosca,Mouche,Fliege,Mosca,Mucha,Vlieg,1,Nature
2680,Bee,Abeja,Abeille,Biene,Ape,Pszczoła,Bij,1,Nature
2681,Spider,Araña,Araignée,Spinne,Ragno,Pająk,Spin,1,Nature
2682,Ant,Hormiga,Fourmi,Ameise,Formica,Mrówka,Mier,1,Nature
2683,Worm,Gusano,Ver,Wurm,Verme,Robak,Worm,1,Nature
2684,Purple,Morado,Violet,Lila,Viola,Fioletowy,Paars,1,Science
2685,Pink,Rosa,Rose,Rosa,Rosa,Różowy,Roze,1,Science
2686,Orange,Naranja,Orange,Orange,Arancione,Pomarańczowy,Oranje,1,Science
2687,Brown,Marrón,Brun,Braun,Marrone,Brązowy,Bruin,1,Science
2688,Grey,Gris,Gris,Grau,Grigio,Szary,Grijs,1,Science
2689,Light,Luz,Lumière,Licht,Luce,Światło,Licht,1,History
2690,Heavy,Pesado,Lourd,Schwer,Pesante,Ciężki,Zwaar,1,History
2691,Big,Grande,Grand,Groß,Grande,Duży,Groot,1,History
2692,Small,Pequeño,Petit,Klein,Piccolo,Mały,Klein,1,History
2693,Fast,Rápido,Rapide,Schnell,Veloce,Szybki,Snel,1,History
2694,Slow,Lento,Lent,Langsam,Lento,Wolny,Langzaam,1,History
2695,Hot,Caliente,Chaud,Heiß,Caldo,Gorący,Heet,1,History
2696,Cold,Frío,Froid,Kalt,Freddo,Zimny,Koud,1,History
2697,New,Nuevo,Nouveau,Neu,Nuovo,Nowy,Nieuw,1,History
2698,Old,Viejo,Vieux,Alt,Vecchio,Stary,Oud,1,History
2699,Good,Bueno,Bon,Gut,Buono,Dobry,Goed,1,History
2700,Bad,Malo,Mauvais,Schlecht,Cattivo,Zły,Slecht,1,History
2701,Happy,Feliz,Heureux,Glücklich,Felice,Szczęśliwy,Gelukkig,1,History
2702,Sad,Triste,Triste,Traurig,Triste,Smutny,Triest,1,History
2703,Angry,Enfadado,Fâché,Böse,Arrabbiato,Zły,Boos,1,History
2704,Sick,Enfermo,Malade,Krank,Malato,Chory,Ziek,1,History
2705,Rich,Rico,Riche,Reich,Ricco,Bogaty,Rijk,1,History
2706,Poor,Pobre,Pauvre,Arm,Povero,Biedny,Arm,1,History
2707,Young,Joven,Jeune,Jung,Giovane,Młody,Jong,1,History
2708,Hard,Duro,Dur,Hart,Duro,Twardy,Hard,1,History
2709,Soft,Blando,Mou,Weich,Morbido,Miękki,Zacht,1,History
2710,Near,Cerca,Près,Nah,Vicino,Blisko,Dichtbij,1,History
2711,Far,Lejos,Loin,Fern,Lontano,Daleko,Ver,1,History
2712,Right,Derecha,Droite,Rechts,Destra,Prawo,Rechts,1,History
2713,Left,Izquierda,Gauche,Links,Sinistra,Lewo,Links,1,History
2714,True,Verdadero,Vrai,Wahr,Vero,Prawda,Waar,1,History
2715,False,Falso,Faux,Falsch,Falso,Fałsz,Vals,1,History
2716,Beautiful,Hermoso,Beau,Schön,Bello,Piękny,Mooi,1,History
2717,Ugly,Feo,Laid,Hässlich,Brutto,Brzydki,Lelijk,1,History
2718,Clean,Limpio,Propre,Sauber,Pulito,Czysty,Schoon,1,History
2719,Dirty,Sucio,Sale,Schmutzig,Sporco,Brudny,Vuil,1,History
2720,Full,Lleno,Plein,Voll,Pieno,Pełny,Vol,1,History
2721,Empty,Vacío,Vide,Leer,Vuoto,Pusty,Leeg,1,History
2722,Easy,Fácil,Facile,Einfach,Facile,Łatwy,Gemakkelijk,1,History
2723,Difficult,Difícil,Difficile,Schwer,Difficile,Trudny,Moeilijk,3,History
2724,Early,Temprano,Tôt,Früh,Presto,Wcześnie,Vroeg,1,History
2725,Late,Tarde,Tard,Spät,Tardi,Późno,Laat,1,History
2726,First,Primero,Premier,Erster,Primo,Pierwszy,Eerste,1,History
2727,Last,Último,Dernier,Letzter,Ultimo,Ostatni,Laatste,1,History
2728,More,Más,Plus,Mehr,Più,Więcej,Meer,1,History
2729,Less,Menos,Moins,Weniger,Meno,Mniej,Minder,1,History
2730,Open,Abierto,Ouvert,Offen,Aperto,Otwarty,Open,1,History
2731,Closed,Cerrado,Fermé,Geschlossen,Chiuso,Zamknięty,Gesloten,1,History
2732,Strong,Fuerte,Fort,Stark,Forte,Silny,Sterk,1,History
2733,Weak,Débil,Faible,Schwach,Debole,Słaby,Zwak,1,History
2734,Short,Corto,Court,Kurz,Corto,Krótki,Kort,1,History
2735,Long,Largo,Long,Lang,Lungo,Długi,Lang,1,History
2736,Wide,Ancho,Large,Breit,Largo,Szeroki,Breed,1,History
2737,Narrow,Estrecho,Étroit,Eng,Stretto,Wąski,Smal,1,History
2738,Dry,Seco,Sec,Trocken,Secco,Suchy,Droog,1,History
2739,Wet,Mojado,Mouillé,Nass,Bagnato,Mokry,Nat,1,History
2740,Cheap,Barato,Bon marché,Billig,Economico,Tani,Goedkoop,1,History
2741,Expensive,Caro,Cher,Teuer,Caro,Drogi,Duur,3,History
2742,Quiet,Silencioso,Calme,Ruhig,Silenzioso,Cichy,Stil,1,History
2743,Noisy,Ruidoso,Bruyant,Laut,Rumoroso,Głośny,Luidruchtig,1,History
2744,Safe,Seguro,Sûr,Sicher,Sicuro,Bezpieczny,Veilig,1,History
2745,Dangerous,Peligroso,Dangereux,Gefährlich,Pericoloso,Niebezpieczny,Gevaarlijk,3,History
2746,Sweet,Dulce,Sucré,Süß,Dolce,Słodki,Zoet,1,Food
2747,Sour,Agrio,Acide,Sauer,Acido,Kwaśny,Zuur,1,Food
2748,Bitter,Amargo,Amer,Bitter,Amaro,Gorzki,Bitter,1,Food
2749,Salty,Salado,Salé,Salzig,Salato,Słony,Zout,1,Food
2750,Kitchen,Cocina,Cuisine,Küche,Cucina,Kuchnia,Keuken,1,Food
2751,Fridge,Nevera,Frigo,Kühlschrank,Frigo,Lodówka,Koelkast,1,Food
2752,Oven,Horno,Four,Ofen,Forno,Piekarnik,Oven,1,Food
2753,Sink,Fregadero,Évier,Spülbecken,Lavandino,Zlew,Gootsteen,1,Food
2754,Shelf,Estante,Étagère,Regal,Scaffale,Półka,Plank,1,Food
2755,Drawer,Cajón,Tiroir,Schublade,Cassetto,Szuflada,Lade,1,Food
2756,Stove,Estufa,Poêle,Herd,Stufa,Piec,Fornuis,1,Food
2757,Pan,Sartén,Poêle,Pfanne,Padella,Patelnia,Pan,1,Food
2758,Pot,Olla,Marmite,Topf,Pentola,Garnek,Pan,1,Food
2759,Mug,Taza,Chope,Becher,Tazza,Kubek,Mok,1,Food
2760,Glass,Vaso,Verre,Glas,Bicchiere,Szklanka,Glas,1,Food
2761,Napkin,Servilleta,Serviette,Serviette,Tovagliolo,Serwetka,Servet,1,Food
2762,Bag,Bolsa,Sac,Tasche,Borsa,Torba,Tas,1,History
2763,Wallet,Cartera,Portefeuille,Brieftasche,Portafoglio,Portfel,Portemonnee,1,History
2764,Umbrella,Paraguas,Parapluie,Regenschirm,Ombrello,Parasol,Paraplu,1,History
2765,Tool,Herramienta,Outil,Werkzeug,Strumento,Narzędzie,Gereedschap,3,Science
2766,Hammer,Martillo,Marteau,Hammer,Martello,Młotek,Hamer,3,Science
2767,Nail,Clavo,Clou,Nagel,Chiodo,Gwóźdź,Nagel,3,Science
2768,Screw,Tornillo,Vis,Schraube,Vite,Śruba,Schroef,3,Science
2769,Wrench,Llave,Clé,Schlüssel,Chiave,Klucz,Sleutel,3,Science
2770,Saw,Sierra,Scie,Säge,Sega,Piła,Zaag,3,Science
2771,Paint,Pintura,Peinture,Farbe,Vernice,Farba,Verf,1,Science
2772,Glue,Pegamento,Colle,Kleber,Colla,Klej,Lijm,1,Science
2773,Tape,Cinta,Ruban,Band,Nastro,Taśma,Tape,1,Science
2774,Scissors,Tijeras,Ciseaux,Schere,Forbici,Nożyczki,Schaar,1,Science
2775,Ladder,Escalera,Échelle,Leiter,Scala,Drabina,Ladder,3,Science
2776,Wheel,Rueda,Roue,Rad,Ruota,Koło,Wiel,1,Cars
2777,Engine,Motor,Moteur,Motor,Motore,Silnik,Motor,3,Cars
2778,Tire,Neumático,Pneu,Reifen,Gomma,Opona,Band,1,Cars
2779,Brake,Freno,Frein,Bremse,Freno,Hamulec,Rem,1,Cars
2780,Gas,Gas,Gaz,Gas,Gas,Gaz,Gas,1,Cars
2781,Seat,Asiento,Siège,Sitz,Sedile,Siedzenie,Stoel,1,Cars
2782,Truck,Camión,Camion,LKW,Camion,Ciężarówka,Vrachtwagen,3,Cars
2783,Bus,Autobús,Bus,Bus,Autobus,Autobus,Bus,1,Cars
2784,Train,Tren,Train,Zug,Treno,Pociąg,Trein,1,Cars
2785,Plane,Avión,Avion,Flugzeug,Aereo,Samolot,Vliegtuig,3,Cars
2786,Boat,Barco,Bateau,Boot,Barca,Łódź,Boot,1,Cars
2787,Bicycle,Bicicleta,Vélo,Fahrrad,Bicicletta,Rower,Fiets,1,Cars
2788,Subway,Metro,Métro,U-Bahn,Metro,Metro,Metro,3,Cars
2789,Ticket,Billete,Billet,Ticket,Biglietto,Bilet,Ticket,1,History
2790,Passport,Pasaporte,Passeport,Reisepass,Passaporto,Paszport,Paspoort,3,History
2791,Suitcase,Maleta,Valise,Koffer,Valigia,Walizka,Koffer,1,History
2792,Map,Mapa,Carte,Carte,Mappa,Mapa,Kaart,1,History
2793,Language,Lengua,Langue,Sprache,Lingua,Język,Taal,3,History
2794,Word,Palabra,Mot,Wort,Parola,Słowo,Woord,1,History
2795,Sentence,Frase,Phrase,Satz,Frase,Zdanie,Zin,3,History
2796,Question,Pregunta,Question,Frage,Domanda,Pytanie,Vraag,1,History
2797,Answer,Respuesta,Réponse,Antwort,Risposta,Odpowiedź,Antwoord,1,History
2798,Story,Historia,Histoire,Geschichte,Storia,Opowieść,Verhaal,1,History
2799,Poem,Poema,Poème,Gedicht,Poesia,Wiersz,Gedicht,3,History
2800,Pen,Bolígrafo,Stylo,Kuli,Penna,Długopis,Pen,1,History
2801,Pencil,Lápiz,Crayon,Bleistift,Matita,Ołówek,Potlood,1,History
2802,Eraser,Goma,Gomme,Radiergummi,Gomma,Gumka,Gom,1,History
2803,Notebook,Cuaderno,Cahier,Notizbuch,Quaderno,Zeszyt,Notitieboek,1,History
2804,Library,Biblioteca,Bibliothèque,Bibliothek,Biblioteca,Biblioteka,Bibliotheek,1,History
2805,Page,Página,Page,Seite,Pagina,Strona,Pagina,1,History
2806,Zero,Cero,Zéro,Null,Zero,Zero,Nul,1,Science
2807,One,Uno,Un,Eins,Uno,Jeden,Een,1,Science
2808,Two,Dos,Deux,Zwei,Due,Dwa,Twee,1,Science
2809,Three,Tres,Trois,Drei,Tre,Trzy,Drie,1,Science
2810,Four,Cuatro,Quatre,Vier,Quattro,Cztery,Vier,1,Science
2811,Five,Cinco,Cinq,Fünf,Cinque,Pięć,Vijf,1,Science
2812,Six,Seis,Six,Sechs,Sei,Sześć,Zes,1,Science
2813,Seven,Siete,Sept,Sieben,Sette,Siedem,Zeven,1,Science
2814,Eight,Ocho,Huit,Acht,Otto,Osiem,Acht,1,Science
2815,Nine,Nueve,Neuf,Neun,Nove,Dziewięć,Negen,1,Science
2816,Ten,Diez,Dix,Zehn,Dieci,Dziesięć,Tien,1,Science
2817,Hundred,Cien,Cent,Hundert,Cento,Sto,Honderd,3,Science
2818,Thousand,Mil,Mille,Tausend,Mille,Tysiąc,Duizend,3,Science
`,op=50;function rp(i){const n=[...i];for(let r=n.length-1;r>0;r--){const l=Math.floor(Math.random()*(r+1));[n[r],n[l]]=[n[l],n[r]]}return n}const nu=i=>{var l,u;const n=i.trim().split(`
`),r=[];for(let d=1;d<n.length;d++){const S=n[d].trim();if(!S)continue;const E=[];let T="",h=!1;for(let M=0;M<S.length;M++){const N=S[M];N==='"'?h&&S[M+1]==='"'?(T+='"',M++):h=!h:N===","&&!h?(E.push(T),T=""):T+=N}if(E.push(T),E.length<5)continue;const f=E[0].trim(),R=E[1].trim(),C=(l=E[E.length-2])==null?void 0:l.trim(),I=parseInt(C,10)||1,v=((u=E[E.length-1])==null?void 0:u.trim())||"General",b=E.slice(2,E.length-2).map(M=>M.trim()).filter(M=>M.length>0&&M.length<=op);b.length>=3&&r.push({id:f,name:R,words:b,difficulty:I,broadCategory:v})}return r},sp=(i,n,r)=>{if(typeof window>"u"||!document.createElement("canvas"))return!0;const l=document.getElementById("root"),T=((l?l.offsetWidth:window.innerWidth)-8-(n-1)*4)/n,f=document.createElement("canvas").getContext("2d");if(!f)return!0;let R;return r?R="3rem":n>=5?R="0.9rem":R="1.1rem",f.font=`900 ${R} Oswald, sans-serif`,f.measureText(i.toUpperCase()).width<T-6};let Li=[],dm=[];const ou=[{id:"fb1",name:"Colors",words:["Red","Blue","Green","Yellow"]},{id:"fb2",name:"Animals",words:["Dog","Cat","Bird","Fish"]},{id:"fb3",name:"Fruits",words:["Apple","Banana","Orange","Grape"]},{id:"fb4",name:"Planets",words:["Earth","Mars","Venus","Jupiter"]},{id:"fb5",name:"Seasons",words:["Spring","Summer","Fall","Winter"]},{id:"fb6",name:"Directions",words:["North","South","East","West"]},{id:"fb7",name:"Elements",words:["Fire","Water","Air","Earth"]}],Am=()=>{if(!(Li.length>0))try{const i=[...nu(ap||""),...nu(ip||"")];if(i.length===0){Li=ou;return}const n=new Map;for(const r of i){if(!r.name)continue;const l=r.name.toUpperCase().trim();if(!(l==="CATEGORY"||l==="NAME"||l===""))if(n.has(l)){const u=n.get(l),d=Array.from(new Set([...u.words,...r.words]));u.words=d}else n.set(l,{...r})}Li=Array.from(n.values()).filter(r=>r.words.length>=4),Li.length===0&&(Li=ou),dm=nu(np||"")}catch(i){console.error("Critical error during CSV initialization:",i),Li=ou}},In=()=>(Am(),Li),lp=()=>(Am(),dm),cp=`
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
`;let ru=null;const ms=()=>{if(ru)return ru;const i=cp.trim().split(`
`),n=[];let r=5e4;return i.forEach(l=>{if(!l.includes(","))return;const u=l.split(",").map(E=>E.trim().toLowerCase()).filter(E=>E.length>0&&E.length<=14);if(u.length<5)return;const d=u[0],S=u.slice(1);S.length>=4&&n.push({id:(r++).toString(),name:`SYNONYMS: ${d.toUpperCase()}`,words:S})}),ru=n,n},up=`
Food,🍕🍔🍟🌮🍣🍜
Animals,🦁🐒🐘🦒🐕🐈
Transportation,🚗🚢✈️🛵🚄🚁
Weather,☀️🌧️🌩️❄️🌬️🌪️🌨️☃️☔️💧💨
Sports,⚽🏀🏈🎾🥅🏒
Technology,📱💻🖱️💾💿🖨️
Music,🎶🎵🎤🥁🎸🎻
Buildings,🏠🏢🏫🕍🏭🏛️
Planets,🌍🪐🚀⭐👽☄️
Tools,🔨🔧🔩⛏️⚙️⛓️📐📏🧭
Emotions,😂😭😡🥶😇🥰
Clothes,👕👖👗🧥🧦👟
Household,🛋️🪑📺💡🛏️🚽
School,📚✏️📎🗂️📏📐
Nature,🌳🌷🌾🍄🌵🍁
Time,⏰🕰️⏳⌛⏱️📅
Money,💵💶💷💴💰💳💹📈📉🏦🏧
Health,🩹🩺💊💉🌡️🧬
Travel,🗺️📍🧭✈️🏨🧳
Celebration,🎉🎂🎁🎈🎊🥂
Sea Life,🐬🐳🐠🦀🐙🐡
Kitchen,🔪🍴🥄🥣🍷☕
Art,🎨🧵🧶🖌️✂️✏️
Science,🔬🧪⚗️🔭💡💻
Fantasy,🧙‍♀️🐉🧚‍♀️🦄🧞‍♂️🧛
Furniture,🪑🛋️🗄️🪞🖼️🏺
Gardening,🌱🌻💧🧺🥕
Jewelry,💍💎📿🔗👂👑
Communication,☎️📞📧📬💬📱📟📠
Office,📇💼📊📈📉📎
Camping,🏕️🔥⛺️🏮🪓🎒
Beaches,🏖️🌊☀️🕶️🐚🏄
Desserts,🍦🍩🍰🍫🍬🍮
Games,🎲♟️🧩🎯🎱🕹️
Baby,👶🍼🧸🚼
Winter,🌨️☃️🧣🧤🛷🎿
Summer,🏖️☀️🍹🏊🍦🕶️
Fall,🍂🎃🍁🌰🌽🥧
Spring,🌸🐣🦋🐞☔🌈
Body Parts,👁️👃👄👂🧠🦴
Dance,💃🕺🩰👠👟
Reading,📖📰📜📄✉️
Construction,🏗️🧱🚧👷‍♂️🦺🪚
Party Supplies,🥳🕯️🎊🎆🎈🎤
Vehicles,🚒🚓🚕🚌🚑🚜
Mining,⛏️💎💰🔦👷
Puzzles,🧩🔍❓💡🔑🚪
Magic,🪄🔮✨💫🌙⭐
Royalty,👑🤴👸🏰🛡️⚔️
Writing,✍️🖋️📝📜⌨️📚
Birds,🐦🦅🦉🦆🦢🦜
Insects,🐛🦋🐜🐞🐝🦗
Farming,👩‍🌾👨‍🌾🐄🐖🐑🐔
Holidays,🎄🎅🎁🕎🏮🧧
Medical,🏥🚑💉🩸❤️‍🩹
Fitness,🏋️‍♀️🚴‍♂️🧘‍♀️🏃‍♀️🤸‍♂️💪
Music Instruments,🎹🎷🎺🥁🎸🎻
Coffee,☕🥛🧊🥄🍵
Bakery,🍞🥐🥖🥨🥯🎂
Footwear,👞👟🥾👢👠🛡
Military,🔫💣🔪⛑️🎖️
Fire,🔥🚒🚨💨
Water Sports,🏊‍♀️🚣‍♀️⛵️🚤🤿🌊
Snow Sports,⛷️🏂🎿🛷🧤
Cacti,🌵🪴
Laundering,🧺🧼🧴👚👖
Hair Care,💇‍♀️💈🪮✂️🌡️
Beauty,💄💅🪥🪞
Time Zones,☀️🌙🌟🕛🕜
Spices,🌶️🧂🌿🧄🍠
Flags,🚩🏁🏴🏳️
Gaming Consoles,🎮🕹️👾💿💻
Outerwear,🧥🧣🧤🧦🧢
Dairy,🥛🧀バター🍦🥚
Hardware,💻🖱️⌨️🖥️💾
Software,💿💾📄📁
Geometry,🔺🔻⚪️⚫️🔸🔹
Photography,📸📷🎞️🔭🔆
Theater,🎭🎬🎟️💡🎤
Space,🔭🌌🛰️☄️
Mythology,🏺🐍🏛️🔱🦉
Office Supplies,🖇️📌📍📎🖊️
Deserts,🏜️🐪🌵☀️🔥
Reptiles,🦎🐍🐊🐢🐸
Fungi,🍄🦠🧬🌱
Citrus Fruits,🍊🍋🍈🥝
Tropical Fruits,🍍🥭🥥🍌🥑
Root Vegetables,🥕🥔🍠🧅🧄
Bread,🥖🥯🥨🧇🥞
Cheese,🧀バター🥚🍞🔪
Nuts,🥜🌰🍪🍯
Seafood,🦞🦀🦐🦑
Body Fluids,🩸💦💧🩹🛁
Organs,🧠🫀🫁👁️
Bones,🦴💀⚰️💪
Electrical,🔌🔋💡⚡️
Plumbing,🚽🚿🛁🚰
Chemical,🧪⚗️🔬⚛️🌡️
Geological,🌋🪨💎⛏️
Planetary,🪐🌕🌑💫
Constellations,✨⭐💫🔭
Physics,⚛️🔭💡⚡️
Legal,⚖️👩‍⚖️🏛️📜🔒
Politics,🗳️📢📰🧑‍🤝‍🧑🌐
Military Actions,💣💥🔥⚔️
Musical Notes,🎶🎵🎼🎤🥁
Dance Shoes,🩰👠👞💃🕺
Structures,🏗️🏭🛖🏠🏢
Ancient Art,🗿🏺🖼️
Drawing,✏️✒️🖍️🖌️🖼️
Sewing,🧵🪡🪢✂️👚
Hand Tools,🪚🔨🔧🔩
Fasteners,🔩🔗⛓️📌
Batteries,🔋🔌💡⚡️
Magnets,🧲🔗🔩⛓️
Fabrics,🧶🧵👕👖
Cleaning,🧼🧴🧽🧹🧺
Spa,🛀🧘🧖‍♀️💆‍♀️🧖‍♂️
Makeup,💄💅👄👁️
Hair Styling,💇‍♀️✂️💈🪮
Writing Tools,🖊️✏️🖋️📝📜
Paper,📄🧾🗞️📜
Postal,✉️📫📬📦📮
Cartoon Characters,👾🤖👽👻
Role Play,🎭🧝‍♀️🧙‍♂️🧚‍♀️🧛
Dice,🎲🎰🎱🎯
Card Suits,♠️♣️♥️♦️
Puppets,🧸🎭🤡🪆
Watches,⌚️⏱️⏰🕰️
Calendars,🗓️📅📆📖
Candles/Incense,🕯️🔥👃✨
Fences/Barriers,🚧🧱🛑⛔
Swords/Weapons,⚔️🗡️🏹🛡️
Gloves/Mittens,🧤🧣🖐️🤚
Socks/Stockings,🧦🩰👡👠
Coats/Jackets,🧥👚👔
Pants/Shorts,👖🩳💼
Skirts/Dresses,👗👚👠
Sweets/Candy,🍬🍭🍫🍯
Hot Drinks,☕️🍵🍶🔥
Cold Drinks,🥤🧊🍸🍹
Root Beer/Soda,🥤🧃🧊🍺
Tissues/Paper Towels,🤧🧻📰📄
Blankets/Bedding,🛌🛋️🧺🛌
Pillows/Cushions,😴🛋️🧸🛌
Doors/Windows,🚪🪟🔑🔒
Stairs/Ramps,🪜⬆️⬇️♿
Basement/Attic,🏚️🕷️📦🔦
Garage/Carport,🚗⛽️🛠️🔩
Street Signs,🛑🚦🚧⚠️
Tire/Wheel,🚗🛞⚙️🔧
Engine/Motor,⚙️🔧🔩🔥
Windscreen/Wiper,🌧️🪟🚗💧
Headlights/Brake Lights,💡🔦🚨
Boating,🛥️🚤⚓️🌊
Submarine/Diving,🤿🐳🐋
Rocketry,🚀🛰️🧑‍🚀🌌
Hot Air Balloon,🎈⬆️🔥☁️
Parachuting,🪂⬇️☁️🌬️
Skateboarding/Rollerblading,🛹🛼👟
Wrestling/Combat,🥋🥊💥
Archery,🏹🎯🛡️💥
Chess/Board Games,♟️🎲🧩
Card Games,🃏🎴♠️♥️♦️
Video Game Characters,👾🤖🎮
Jewelry Boxes,💍💎📦
Mirrors/Reflection,🪞✨💍💎
Lamps/Lighting,💡🔦🕯️⚡️
Statues/Monuments,🗿🗽🏛️
Fountain/Pool,⛲️🏊‍♀️💧
Balloons/Kites,🎈🪁☁️🎉
Ribbons/Bows,🎀🎁🎉
Gift Wrap,🎁🛍️📦🎀
Singing/Choir,🎤🎶🗣️
Dancing Styles,🩰💃🕺
Poetry/Prose,📜🖋️📚
Newspapers/Magazines,📰🗞️📚
Book Genres,📚👻👽💖
Erosion/Geology,🪨⏳⛰️🌋
Solar/Wind Power,☀️🌬️💡🔌
Farm Animals,🐮🐷🐑🐐🐔
Ocean Creatures,🦈🐋🐠🐡
Savannah Animals,🐆🦓🦒🦏
Forest Animals,🐻🦊🦉🐿️
Desert Animals,🐪🦂🐍🦎
Reptiles/Amphibians,🐸🐍🐢🦎
Rodents,🐭🐹🐰
Predators,🐅🐺🦁
Farm Tools,🚜🌾🌽🪓
Irrigation,💧💦🚿🚰
Harvesting,🧺🥕🍎🍇
Grain/Crops,🌾🌽🍞
Dairy Processing,🥛🧀バター🍦🥚
Meat Cuts,🥩🍗🥓🍖
Sauces/Condiments,🥫🍯🧂
Fast Food,🍔🍟🥤🌮
Diner Food,🍳🥓🥞🧇
Baked Goods,🍩🍪🎂
Spirits/Liquor,🥃🍸🍹🍷
Beer/Ale,🍺🍻🥂
Wine/Grapes,🍇🍷🍾
Vitamins/Supplements,💊🧬🧪🍎
Herbs/Remedies,🌿🌱🌼
Cosmetics,💄💅👁️👄
Skin Care,🧼🧴🧖‍♀️🛀
Perfume/Fragrance,👃✨🌸
Security/Espionage,🕵️🗝️🔐🔍👁️‍🗨️📁
Ancient Civilization,🏺📜🗿🧱🏛️🦴
Alternative Energy,🔋☀️🌬️💧⚡🔌
Deep Space,🔭🛰️☄️🌌🛸👨‍🚀
Botany/Science,🧪🌿🍄🪴🔬🧫
Cartography/Navigation,🗺️🧭⚓📍📏🛰️
Natural Disasters,🌀⚡🌊🌋🌡️🌫️
Smithing/Forge,⚒️🔥🛡️🗡️⛓️💎
Survival/Camping,🎒🔦📻⛺🪵🔪
Cybernetics/Augment,🦾🦿🧠💾💻🔌
Medical Lab,🥼🧫🧪🌡️💉🧬
The Occult,🔮🧿🃏🕯️📜🌑
Marine Biology,🤿🐚🦀🐙🌊🫧
Chronometry/History,⌛⌚⏰🗓️🕰️📜
Industrial/Factory,🏗️🏭⚙️👷🛠️🚛
Mining/Geology,⛏️💎⚒️⛰️🔦🧱
Alchemy/Chemistry,⚗️🧪🧫🌡️🌫️🧪
Virtual Reality,🥽🎮💻🖥️📡🌐
Ancient Warfare,🏹🗡️🛡️⚔️🏰🐎
Forestry/Woodcraft,🪓🌲🪵🍂🌲🦌
Archeology,🏺🦴📜⛏️🏛️
Deep Sea,🤿⚓🌊🐙🐚
Forensics,🔍🧬🧪🧤🔬
Vintage Tech,🕯️🕰️📜📻📠
Urban Survival,🎒🔦🔋📻🔪
Meteorology,🌀⚡🌊🌡️🌫️
Cyber Espionage,💻🖱️🗝️👁️‍🗨️📡
Geology,💎⚒️⛰️🧪🧱
Ancient War,🛡️🏹🗡️🏰⚔️
Laboratory,🥼🧫🧪🌡️💉
Cartography,🗺️🧭📍📏🛰️
The Occult,🔮🧿🃏🕯️🌑
Industrial,🏗️🏭⚙️👷🛠️
Forestry,🪓🌲🪵🍂🦌
Astronomy,🔭🛰️☄️🌌🪐
Cryptography,🗝️📜🔍🔏🔐
Marine Life,🦀🐙🐟🐋🫧
Alchemy,⚗️🧪🧫🌫️🌡️
Virtual Reality,🥽🎮💻🌐📡
Chronometry,⌛⌚⏰🗓️🕰️
Red Zone,🔴🛑🏮🏎️🧧📮
Blue Zone,🔵💧🧊🌌🗳️🌀
Yellow Zone,🟡☀️🍌🍯⚠️🎫
Green Zone,🟢🌿🧪📗🌳🔋
Purple Zone,🟣🔮🍇🪁👾☂️
Orange Zone,🟠🏀🍊🎃🦊🧱
Pink Zone,🌸🎀🛍️🧠🦩🩰
Black/Darkness,⚫🌑💣🕶️🎩🎱
White/Light,⚪☁️🏐🕯️🥛🥚
Circle Logic,⭕⚽🎡💿🥯🧭
Square Logic,🟦🗳️🧱🕋⏹️🔲
Triangle Logic,🔺📐🍕⛺⛰️🔼
Diamond/Gem,🔷💎💠🪁💍🃏
Hearts/Love,❤️🍓🍒🌹💄🎈
Golden/Shiny,🟡🏆👑💰🔔🎺
Silver/Metallic,🔘🥈🔩🍴⛓️🗜️
East Asian,⛩️🏮🎋🍜🎎🧧
Medieval/Fantasy,🏰🛡️⚔️👑🐉📜
Western/Cowboy,🤠🌵🐎👢🎸🏜️
Tropical/Island,🏝️🥥🍍🌺🏄🍹
Arctic/Polar,🧊🏔️🐧❄️🎿⛸️
Ancient Egypt,🏺🐪☀️🧱⚖️👁️‍🗨️
Parisian/Cafe,🥖🍷🎨🗼🧀☕
Grecian/Roman,🏛️🏺🍇🌿🏹🛡️
Americana,🍔⚾🌭🗽🥤🥧
Cyberpunk,🦾🤖💻🌃⚡🕶️
Bohemian,🎨🧶🪴🎻🪕🕯️
Nautical/Sailor,⚓🧭⛵🌊🐚 ⛴️
`;let su=null;const Rs=()=>{if(su)return su;const i=up.trim().split(`
`),n=[];let r=9e4;const l=typeof Intl<"u"&&"Segmenter"in Intl;return i.forEach(u=>{if(!u.includes(","))return;const d=u.indexOf(","),S=u.substring(0,d).trim(),E=u.substring(d+1).trim();let T=[];if(l){const f=new Intl.Segmenter("en",{granularity:"grapheme"}).segment(E);for(const{segment:R}of f){const C=R.trim();C.length>0&&T.push(C)}}else T=Array.from(E).filter(h=>h.trim().length>0);T=Array.from(new Set(T)),T.length>=3&&n.push({id:(r++).toString(),name:S,words:T})}),su=n,n},Sp=`THEME,SUB-CATEGORY,FACT 1,FACT 2,FACT 3,FACT 4,FACT 5,FACT 6,FACT 7,FACT 8,FACT 9,FACT 10
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
`;let lu=null;const dp=()=>{if(lu)return lu;const i=Sp.trim().split(`
`),n=new Map;if(i.length<2)return n;for(let r=1;r<i.length;r++){const l=i[r].trim();if(!l)continue;const u=l.split(",");if(u.length<4)continue;const d=u[0].trim().toUpperCase(),S=u[1].trim(),E=u.slice(2).map(T=>T.trim()).filter(T=>T.length>0);E.length<4||(n.has(d)||n.set(d,[]),n.get(d).push({id:`theme-${d}-${S}`.toLowerCase().replace(/[^a-z0-9]/g,"-"),name:S,words:E}))}return lu=n,n},Ap=i=>{const n=localStorage.getItem("LevelPrecheckLog.txt")||"",r=`[${i.timestamp}] Level: ${i.levelIndex} | Mode: ${i.mode} | Reason: ${i.reason} | Cats: ${i.attemptedCategories.join(", ")} | Conflicts: ${i.conflictingWords.join(", ")}
`;localStorage.setItem("LevelPrecheckLog.txt",n+r)};function Bo(i,n,r,l,u="Standard"){if(!i||i.length===0)return{isValid:!1,data:[],errorDetails:"Pool is empty"};const d=[],S=new Set,E=new Set,T=rp([...i]),h=u===oe.LEVEL_THEMED,f=u===oe.LEVEL_EMOJI;for(const R of T){if(d.length===n)break;const C=R.name.trim().toUpperCase();if(E.has(C)||!h&&S.has(C))continue;const I=[];for(const v of R.words){const b=v.trim().toUpperCase();S.has(b)||!h&&E.has(b)||sp(b,r,f)&&I.push(v)}if(I.length>=r){const v=I.slice(0,r);v.forEach(b=>S.add(b.trim().toUpperCase())),E.add(C),d.push({...R,words:v})}}if(d.length<n){const R=`Level ${l}: Needed ${n}, found ${d.length}.`;return Ap({timestamp:new Date().toLocaleString(),levelIndex:l,mode:u,reason:R,attemptedCategories:d.map(C=>C.name),conflictingWords:[]}),{isValid:!1,data:[],errorDetails:R}}return{isValid:!0,data:d}}const KL=(i,n,r=4,l=0,u="Standard")=>{const d=Bo(n,i,r,l,u);return d.isValid?d.data:[]};function Ep(i,n,r){const l=n[n.length-1];return Bo(i,l.rows,l.cols,r,oe.LEVEL_EXPANSION)}const hp=[{rows:3,cols:2},{rows:5,cols:3},{rows:6,cols:4},{rows:7,cols:5}],Tp=(i,n)=>n>=50?5:n>=20?3:i<=40?1:i<=100?3:5,Nu=(i,n=[])=>{const r=Hg;let l=(i-1)%r.length,u=r[l];if(n.length>0&&!n.includes(u))for(let d=1;d<r.length;d++){const S=r[(l+d)%r.length];if(n.includes(S)){u=S;break}}return u},mp=(i,n=[],r=[],l)=>{const u=l||Nu(i,n),d=Di(),S=Tp(i,d.totalStars);let E=0;const T=10,h=dp(),f=Array.from(h.keys());for(;E<T;){E++;let R=[],C;switch(u){case oe.LEVEL_SYNONYMS:R=ms();break;case oe.LEVEL_EMOJI:R=Rs();break;case oe.LEVEL_THEMED:C=f[(i-1+E)%f.length],R=h.get(C||"")||In();break;default:R=In(),i%20===0&&(R=[...R,...lp()]);break}const I=R.filter(N=>{const B=N.difficulty||1;if(d.totalStars>=50)return B===5||B===3;if(B===3&&d.totalStars<20)return!1;if(B===5){const x=d.categoryStarProgress[N.broadCategory||"General"];if(!x||x.rating3ThreeStarCount<2)return!1}return B===S});let v=I.length>=8?I:R.filter(N=>(N.difficulty||1)<=S);v.length<5&&(v=R);let b,M=d.totalStars>=50?7:d.totalStars>=20?6:5;if(u===oe.LEVEL_EXPANSION?b=Ep(v,hp,i):u===oe.LEVEL_EMOJI?b=Bo(v,M,3,i,oe.LEVEL_EMOJI):u===oe.LEVEL_MIND_MATCH?b=Bo(v,(S===1?1:S===3?2:3)*4,4,i,oe.LEVEL_MIND_MATCH):b=Bo(v,M,4,i,u),b.isValid)return{mode:u,data:b.data,themeName:C}}return{mode:u,data:In().slice(0,7)}};class Rp{constructor(){this.ctx=null,this.isMuted=!1,this.isMusicPlaying=!1,this.musicNodes=[],this.musicInterval=null}getContext(){if(!this.ctx)try{const n=window.AudioContext||window.webkitAudioContext;if(n)this.ctx=new n;else return null}catch(n){return console.error("Audio init error",n),null}return this.ctx}resume(){const n=this.getContext();n&&n.state==="suspended"&&n.resume().catch(r=>console.warn(r))}setSound(n){this.isMuted=!n,this.isMuted?this.stopNodes():this.resume()}playTone(n,r,l,u=0,d=.1){if(this.isMuted)return;const S=this.getContext();if(S){S.state==="suspended"&&S.resume().catch(()=>{});try{const E=S.createOscillator(),T=S.createGain();E.type=r,E.frequency.setValueAtTime(n,S.currentTime+u),T.gain.setValueAtTime(d,S.currentTime+u),T.gain.exponentialRampToValueAtTime(1e-4,S.currentTime+u+l),E.connect(T),T.connect(S.destination),E.start(S.currentTime+u),E.stop(S.currentTime+u+l+.05),E.onended=()=>{E.disconnect(),T.disconnect()}}catch{}}}startMusic(){this.isMusicPlaying||(this.isMusicPlaying=!0)}stopMusic(){this.isMusicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null),this.stopNodes()}toggleMusic(){return this.isMusicPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}stopNodes(){this.musicNodes.forEach(n=>{try{n.disconnect()}catch{}}),this.musicNodes=[]}playTick(){this.playTone(800,"square",.03,0,.05)}playSelect(){this.playTone(850,"sine",.12,0,.3)}playSwap(){if(this.isMuted)return;const n=this.getContext();if(n){n.state==="suspended"&&n.resume().catch(()=>{});try{const r=n.currentTime,l=n.createOscillator(),u=n.createGain();l.type="sine",l.frequency.setValueAtTime(350,r),l.frequency.exponentialRampToValueAtTime(700,r+.1),u.gain.setValueAtTime(.2,r),u.gain.exponentialRampToValueAtTime(1e-4,r+.15),l.connect(u),u.connect(n.destination),l.start(r),l.stop(r+.2),l.onended=()=>{l.disconnect(),u.disconnect()}}catch{}}}playCorrect(){this.playTone(660,"sine",.1,0,.15),this.playTone(880,"sine",.2,.08,.15)}playRowSolved(){this.playTone(440,"sine",.4,0,.1),this.playTone(554.37,"sine",.4,.05,.1),this.playTone(659.25,"sine",.4,.1,.1)}playError(){if(this.isMuted)return;const n=this.getContext();if(n){n.state==="suspended"&&n.resume().catch(()=>{});try{const r=n.currentTime,l=n.createOscillator(),u=n.createGain();l.type="sawtooth",l.frequency.setValueAtTime(120,r),l.frequency.exponentialRampToValueAtTime(60,r+.3),u.gain.setValueAtTime(.15,r),u.gain.linearRampToValueAtTime(.001,r+.3),l.connect(u),u.connect(n.destination),l.start(r),l.stop(r+.35),l.onended=()=>{l.disconnect(),u.disconnect()}}catch{}}}playWin(){this.playTone(523.25,"triangle",.1,0,.2),this.playTone(659.25,"triangle",.1,0+.1,.2),this.playTone(783.99,"triangle",.1,0+.2,.2),this.playTone(1046.5,"square",.6,0+.3,.2),this.playTone(523.25,"sine",.4,0+.3,.2)}playLevelStart(){this.playTone(440,"sine",.1,0,.1),this.playTone(880,"sine",.2,0+.1,.1)}toggleMute(){this.isMuted=!this.isMuted,this.isMuted&&this.stopNodes()}}const $t=new Rp;/*! Capacitor: https://capacitorjs.com/ - MIT License */var Ln;(function(i){i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE"})(Ln||(Ln={}));class cu extends Error{constructor(n,r,l){super(n),this.message=n,this.code=r,this.data=l}}const fp=i=>{var n,r;return i!=null&&i.androidBridge?"android":!((r=(n=i==null?void 0:i.webkit)===null||n===void 0?void 0:n.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},Cp=i=>{const n=i.CapacitorCustomPlatform||null,r=i.Capacitor||{},l=r.Plugins=r.Plugins||{},u=()=>n!==null?n.name:fp(i),d=()=>u()!=="web",S=R=>{const C=h.get(R);return!!(C!=null&&C.platforms.has(u())||E(R))},E=R=>{var C;return(C=r.PluginHeaders)===null||C===void 0?void 0:C.find(I=>I.name===R)},T=R=>i.console.error(R),h=new Map,f=(R,C={})=>{const I=h.get(R);if(I)return console.warn(`Capacitor plugin "${R}" already registered. Cannot register plugins twice.`),I.proxy;const v=u(),b=E(R);let M;const N=async()=>(!M&&v in C?M=typeof C[v]=="function"?M=await C[v]():M=C[v]:n!==null&&!M&&"web"in C&&(M=typeof C.web=="function"?M=await C.web():M=C.web),M),B=(j,se)=>{var le,Ne;if(b){const ue=b==null?void 0:b.methods.find(Fe=>se===Fe.name);if(ue)return ue.rtype==="promise"?Fe=>r.nativePromise(R,se.toString(),Fe):(Fe,Ve)=>r.nativeCallback(R,se.toString(),Fe,Ve);if(j)return(le=j[se])===null||le===void 0?void 0:le.bind(j)}else{if(j)return(Ne=j[se])===null||Ne===void 0?void 0:Ne.bind(j);throw new cu(`"${R}" plugin is not implemented on ${v}`,Ln.Unimplemented)}},x=j=>{let se;const le=(...Ne)=>{const ue=N().then(Fe=>{const Ve=B(Fe,j);if(Ve){const We=Ve(...Ne);return se=We==null?void 0:We.remove,We}else throw new cu(`"${R}.${j}()" is not implemented on ${v}`,Ln.Unimplemented)});return j==="addListener"&&(ue.remove=async()=>se()),ue};return le.toString=()=>`${j.toString()}() { [capacitor code] }`,Object.defineProperty(le,"name",{value:j,writable:!1,configurable:!1}),le},K=x("addListener"),J=x("removeListener"),Q=(j,se)=>{const le=K({eventName:j},se),Ne=async()=>{const Fe=await le;J({eventName:j,callbackId:Fe},se)},ue=new Promise(Fe=>le.then(()=>Fe({remove:Ne})));return ue.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Ne()},ue},X=new Proxy({},{get(j,se){switch(se){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return b?Q:K;case"removeListener":return J;default:return x(se)}}});return l[R]=X,h.set(R,{name:R,proxy:X,platforms:new Set([...Object.keys(C),...b?[v]:[]])}),X};return r.convertFileSrc||(r.convertFileSrc=R=>R),r.getPlatform=u,r.handleError=T,r.isNativePlatform=d,r.isPluginAvailable=S,r.registerPlugin=f,r.Exception=cu,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},gp=i=>i.Capacitor=Cp(i),Bi=gp(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Is=Bi.registerPlugin;class Em{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(n,r){let l=!1;this.listeners[n]||(this.listeners[n]=[],l=!0),this.listeners[n].push(r);const d=this.windowListeners[n];d&&!d.registered&&this.addWindowListener(d),l&&this.sendRetainedArgumentsForEvent(n);const S=async()=>this.removeListener(n,r);return Promise.resolve({remove:S})}async removeAllListeners(){this.listeners={};for(const n in this.windowListeners)this.removeWindowListener(this.windowListeners[n]);this.windowListeners={}}notifyListeners(n,r,l){const u=this.listeners[n];if(!u){if(l){let d=this.retainedEventArguments[n];d||(d=[]),d.push(r),this.retainedEventArguments[n]=d}return}u.forEach(d=>d(r))}hasListeners(n){return!!this.listeners[n].length}registerWindowListener(n,r){this.windowListeners[r]={registered:!1,windowEventName:n,pluginEventName:r,handler:l=>{this.notifyListeners(r,l)}}}unimplemented(n="not implemented"){return new Bi.Exception(n,Ln.Unimplemented)}unavailable(n="not available"){return new Bi.Exception(n,Ln.Unavailable)}async removeListener(n,r){const l=this.listeners[n];if(!l)return;const u=l.indexOf(r);this.listeners[n].splice(u,1),this.listeners[n].length||this.removeWindowListener(this.windowListeners[n])}addWindowListener(n){window.addEventListener(n.windowEventName,n.handler),n.registered=!0}removeWindowListener(n){n&&(window.removeEventListener(n.windowEventName,n.handler),n.registered=!1)}sendRetainedArgumentsForEvent(n){const r=this.retainedEventArguments[n];r&&(delete this.retainedEventArguments[n],r.forEach(l=>{this.notifyListeners(n,l)}))}}const Vh=i=>encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Wh=i=>i.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class pp extends Em{async getCookies(){const n=document.cookie,r={};return n.split(";").forEach(l=>{if(l.length<=0)return;let[u,d]=l.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");u=Wh(u).trim(),d=Wh(d).trim(),r[u]=d}),r}async setCookie(n){try{const r=Vh(n.key),l=Vh(n.value),u=`; expires=${(n.expires||"").replace("expires=","")}`,d=(n.path||"/").replace("path=",""),S=n.url!=null&&n.url.length>0?`domain=${n.url}`:"";document.cookie=`${r}=${l||""}${u}; path=${d}; ${S};`}catch(r){return Promise.reject(r)}}async deleteCookie(n){try{document.cookie=`${n.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const n=document.cookie.split(";")||[];for(const r of n)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(n){return Promise.reject(n)}}async clearAllCookies(){try{await this.clearCookies()}catch(n){return Promise.reject(n)}}}Is("CapacitorCookies",{web:()=>new pp});const yp=async i=>new Promise((n,r)=>{const l=new FileReader;l.onload=()=>{const u=l.result;n(u.indexOf(",")>=0?u.split(",")[1]:u)},l.onerror=u=>r(u),l.readAsDataURL(i)}),Op=(i={})=>{const n=Object.keys(i);return Object.keys(i).map(u=>u.toLocaleLowerCase()).reduce((u,d,S)=>(u[d]=i[n[S]],u),{})},Np=(i,n=!0)=>i?Object.entries(i).reduce((l,u)=>{const[d,S]=u;let E,T;return Array.isArray(S)?(T="",S.forEach(h=>{E=n?encodeURIComponent(h):h,T+=`${d}=${E}&`}),T.slice(0,-1)):(E=n?encodeURIComponent(S):S,T=`${d}=${E}`),`${l}&${T}`},"").substr(1):null,Ip=(i,n={})=>{const r=Object.assign({method:i.method||"GET",headers:i.headers},n),u=Op(i.headers)["content-type"]||"";if(typeof i.data=="string")r.body=i.data;else if(u.includes("application/x-www-form-urlencoded")){const d=new URLSearchParams;for(const[S,E]of Object.entries(i.data||{}))d.set(S,E);r.body=d.toString()}else if(u.includes("multipart/form-data")||i.data instanceof FormData){const d=new FormData;if(i.data instanceof FormData)i.data.forEach((E,T)=>{d.append(T,E)});else for(const E of Object.keys(i.data))d.append(E,i.data[E]);r.body=d;const S=new Headers(r.headers);S.delete("content-type"),r.headers=S}else(u.includes("application/json")||typeof i.data=="object")&&(r.body=JSON.stringify(i.data));return r};class Lp extends Em{async request(n){const r=Ip(n,n.webFetchExtra),l=Np(n.params,n.shouldEncodeUrlParams),u=l?`${n.url}?${l}`:n.url,d=await fetch(u,r),S=d.headers.get("content-type")||"";let{responseType:E="text"}=d.ok?n:{};S.includes("application/json")&&(E="json");let T,h;switch(E){case"arraybuffer":case"blob":h=await d.blob(),T=await yp(h);break;case"json":T=await d.json();break;case"document":case"text":default:T=await d.text()}const f={};return d.headers.forEach((R,C)=>{f[C]=R}),{data:T,headers:f,status:d.status,url:d.url}}async get(n){return this.request(Object.assign(Object.assign({},n),{method:"GET"}))}async post(n){return this.request(Object.assign(Object.assign({},n),{method:"POST"}))}async put(n){return this.request(Object.assign(Object.assign({},n),{method:"PUT"}))}async patch(n){return this.request(Object.assign(Object.assign({},n),{method:"PATCH"}))}async delete(n){return this.request(Object.assign(Object.assign({},n),{method:"DELETE"}))}}Is("CapacitorHttp",{web:()=>new Lp});var Kh;(function(i){i.General="General",i.ParentalGuidance="ParentalGuidance",i.Teen="Teen",i.MatureAudience="MatureAudience"})(Kh||(Kh={}));var Yh;(function(i){i.SizeChanged="bannerAdSizeChanged",i.Loaded="bannerAdLoaded",i.FailedToLoad="bannerAdFailedToLoad",i.Opened="bannerAdOpened",i.Closed="bannerAdClosed",i.AdImpression="bannerAdImpression"})(Yh||(Yh={}));var Iu;(function(i){i.TOP_CENTER="TOP_CENTER",i.CENTER="CENTER",i.BOTTOM_CENTER="BOTTOM_CENTER"})(Iu||(Iu={}));var Lu;(function(i){i.BANNER="BANNER",i.FULL_BANNER="FULL_BANNER",i.LARGE_BANNER="LARGE_BANNER",i.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",i.LEADERBOARD="LEADERBOARD",i.ADAPTIVE_BANNER="ADAPTIVE_BANNER",i.SMART_BANNER="SMART_BANNER"})(Lu||(Lu={}));var zh;(function(i){i.Loaded="interstitialAdLoaded",i.FailedToLoad="interstitialAdFailedToLoad",i.Showed="interstitialAdShowed",i.FailedToShow="interstitialAdFailedToShow",i.Dismissed="interstitialAdDismissed"})(zh||(zh={}));var _h;(function(i){i.Loaded="onRewardedInterstitialAdLoaded",i.FailedToLoad="onRewardedInterstitialAdFailedToLoad",i.Showed="onRewardedInterstitialAdShowed",i.FailedToShow="onRewardedInterstitialAdFailedToShow",i.Dismissed="onRewardedInterstitialAdDismissed",i.Rewarded="onRewardedInterstitialAdReward"})(_h||(_h={}));var jh;(function(i){i.Loaded="onRewardedVideoAdLoaded",i.FailedToLoad="onRewardedVideoAdFailedToLoad",i.Showed="onRewardedVideoAdShowed",i.FailedToShow="onRewardedVideoAdFailedToShow",i.Dismissed="onRewardedVideoAdDismissed",i.Rewarded="onRewardedVideoAdReward"})(jh||(jh={}));var Mu;(function(i){i.NOT_REQUIRED="NOT_REQUIRED",i.OBTAINED="OBTAINED",i.REQUIRED="REQUIRED",i.UNKNOWN="UNKNOWN"})(Mu||(Mu={}));var Jh;(function(i){i[i.DISABLED=0]="DISABLED",i[i.EEA=1]="EEA",i[i.NOT_EEA=2]="NOT_EEA",i[i.US=3]="US",i[i.OTHER=4]="OTHER"})(Jh||(Jh={}));const ti=Is("AdMob",{web:()=>Pa(()=>import("./web-DhcmPCSO.js"),[]).then(i=>new i.AdMobWeb)}),Mp=({onStart:i,onSettings:n,onStats:r,lastLevel:l})=>{const u=l||1,d=u>1?`CONTINUE LEVEL ${u}`:"START GAME";return p.jsxs("div",{className:"flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative bg-black font-oswald",children:[p.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center w-full",children:[p.jsx("div",{className:"flex flex-col items-center justify-center mb-16 w-full animate-zoom-in",children:p.jsx("img",{src:"/logo.svg",alt:"WORD PAIRING MACHINE",className:"w-full max-w-[320px] md:max-w-[450px] h-auto object-contain"})}),p.jsx("div",{className:"flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center z-30",style:{animationDelay:"0.4s"},children:p.jsx("div",{className:"relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer",onClick:i,children:p.jsx("button",{className:`
                relative w-full bg-black rounded-large px-8 py-5
                flex items-center justify-center
                border-2 border-white
                shadow-none
                active:translate-y-[2px]
                transition-all duration-75 z-10
              `,children:p.jsx("span",{className:"text-2xl md:text-3xl font-black font-oswald text-white tracking-widest uppercase",children:d})})})})]}),p.jsxs("div",{className:"w-full flex flex-wrap justify-center gap-6 pb-12 mt-auto animate-fade-in px-4 relative z-30",style:{animationDelay:"0.5s"},children:[p.jsx("button",{onClick:r,className:`
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-neon-aqua hover:text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          `,children:"STATS"}),p.jsx("button",{onClick:n,className:`
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          `,children:"SETTINGS"})]})]})},Pp=Is("Privacy"),Dp={showPrivacyOptionsForm:async()=>{if(Bi.isNativePlatform())try{await ti.showPrivacyOptionsForm()}catch(i){console.warn("Privacy form not available or failed to show:",i)}else console.log("Privacy options form requested (Web Fallback)")},getIntegrityToken:async()=>{try{const i="react-app-nonce-"+Date.now(),r=(await Pp.getIntegrityToken({nonce:i})).token;return console.log("Integrity Token:",r),alert("Got Integrity Token! Check Logcat in Android Studio."),r}catch(i){return console.error("Error getting integrity token:",i),alert("Error: "+i),null}}},Zh={[oe.CLASSIC]:"Classic",[oe.LEVEL_THEMED]:"Themed",[oe.LEVEL_MIND_MATCH]:"Mind",[oe.LEVEL_SYNONYMS]:"Synonyms",[oe.LEVEL_EMOJI]:"Emoji",[oe.LEVEL_EXPANSION]:"Expansion"},Hp=({isOpen:i,onClose:n,onMainMenu:r,isMusicOn:l,toggleMusic:u,enabledModes:d,toggleMode:S,onSelectMode:E,hintsEnabled:T,setHintsEnabled:h,isAutoPlaying:f,onToggleAutoPlay:R,onShowTutorial:C,onResetProgress:I,categories:v=[],privacyOptionsRequired:b,onShowPrivacyOptions:M})=>{if(!i)return null;const N=async()=>{if(M){M();return}try{await Dp.showPrivacyOptionsForm()}catch(B){console.error("Error showing privacy options form:",B)}};return p.jsx("div",{className:"absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald",children:p.jsxs("div",{className:"w-full max-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col gap-3 overflow-hidden max-h-[95vh]",children:[p.jsxs("div",{className:"relative flex justify-center items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[p.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-widest italic",children:"SETTINGS"}),p.jsx("button",{className:"absolute right-0 text-zinc-400 hover:text-neon-red transition-colors p-1",onClick:n,children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-2 shrink-0",children:[p.jsx("button",{onClick:r,className:"col-span-2 py-2.5 bg-neon-red border-2 border-white text-white font-black font-oswald text-lg uppercase rounded-medium hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(255,7,58,0.4)]",children:"EXIT TO MAIN MENU"}),p.jsxs("button",{onClick:u,className:`col-span-2 py-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-[10px] uppercase ${l?"bg-zinc-900 border-neon-green text-neon-green shadow-[0_0_10px_#00FF66]":"bg-black border-zinc-800 text-zinc-600"}`,children:["SOUND: ",l?"ON":"OFF"]})]}),v.length>0&&p.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[p.jsx("h3",{className:"text-neon-pink font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(255,31,191,0.5)]",children:"CURRENT GOALS"}),p.jsx("div",{className:"grid grid-cols-2 gap-1.5 py-1",children:v.map(B=>p.jsxs("div",{className:`px-2 py-1.5 rounded-small border flex items-center justify-between text-[10px] font-bold uppercase font-oswald tracking-tighter transition-all ${B.isSolved?"bg-neon-green/10 border-neon-green text-neon-green shadow-[0_0_5px_#00FF66]":"bg-black border-zinc-700 text-zinc-300"}`,children:[p.jsx("span",{className:"truncate mr-1",children:B.name}),B.isSolved&&p.jsx("span",{className:"text-xs",children:"✓"})]},B.name))})]}),p.jsxs("div",{className:"flex flex-col gap-1 shrink-0 overflow-y-auto no-scrollbar",children:[p.jsx("h3",{className:"text-neon-aqua font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(0,255,255,0.5)] sticky top-0 bg-zinc-950 z-10",children:"GAME MODES"}),p.jsx("div",{className:"grid grid-cols-3 gap-1.5 pt-1",children:Object.keys(Zh).map(B=>{const x=d.includes(B);return p.jsxs("button",{onClick:()=>{x||S(B),E==null||E(B)},className:`flex flex-col items-center justify-center p-1 rounded-medium border-2 transition-all h-12 ${x?"bg-zinc-900 border-neon-aqua text-white shadow-[0_0_8px_rgba(0,229,255,0.2)]":"bg-black border-zinc-800 text-zinc-600"}`,children:[p.jsx("span",{className:"font-bold font-oswald text-[9px] uppercase leading-none mb-0.5 text-center",children:Zh[B]}),p.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${x?"bg-neon-aqua shadow-[0_0_5px_#00FFF6]":"bg-zinc-800"}`})]},B)})})]}),p.jsxs("div",{className:"mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800 shrink-0",children:[p.jsx("div",{className:"grid grid-cols-1 gap-2",children:p.jsx("button",{onClick:C,className:"py-2 bg-zinc-900 border border-neon-yellow text-neon-yellow rounded-medium font-bold text-[9px] font-oswald uppercase shadow-[0_0_8px_rgba(249,255,0,0.2)]",children:"HOW TO PLAY"})}),b&&p.jsx("button",{onClick:N,className:"py-2 bg-zinc-900 border border-zinc-600 text-zinc-400 rounded-medium font-bold text-[9px] font-oswald uppercase hover:text-white hover:border-white transition-all",children:"CONSENT"}),p.jsx("button",{onClick:I,className:"w-full py-2 bg-black border border-neon-red text-neon-red rounded-medium font-bold text-[10px] font-oswald uppercase shadow-[0_0_5px_rgba(255,7,58,0.2)]",children:"RESET PROGRESS"}),p.jsx("button",{onClick:n,className:"w-full py-3.5 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_20px_white]",children:"RESUME PLAY"})]})]})})};function Bp(i){if(typeof Proxy>"u")return i;const n=new Map,r=(...l)=>i(...l);return new Proxy(r,{get:(l,u)=>u==="create"?i:(n.has(u)||n.set(u,i(u)),n.get(u))})}function Ls(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}const Pu=i=>Array.isArray(i);function hm(i,n){if(!Array.isArray(n))return!1;const r=n.length;if(r!==i.length)return!1;for(let l=0;l<r;l++)if(n[l]!==i[l])return!1;return!0}function Uo(i){return typeof i=="string"||Array.isArray(i)}function Xh(i){const n=[{},{}];return i==null||i.values.forEach((r,l)=>{n[0][l]=r.get(),n[1][l]=r.getVelocity()}),n}function _u(i,n,r,l){if(typeof n=="function"){const[u,d]=Xh(l);n=n(r!==void 0?r:i.custom,u,d)}if(typeof n=="string"&&(n=i.variants&&i.variants[n]),typeof n=="function"){const[u,d]=Xh(l);n=n(r!==void 0?r:i.custom,u,d)}return n}function Ms(i,n,r){const l=i.getProps();return _u(l,n,r!==void 0?r:l.custom,i)}const ju=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ju=["initial",...ju],Wo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],bi=new Set(Wo),Ia=i=>i*1e3,La=i=>i/1e3,vp={type:"spring",stiffness:500,damping:25,restSpeed:10},Gp=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),bp={type:"keyframes",duration:.8},Fp={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Up=(i,{keyframes:n})=>n.length>2?bp:bi.has(i)?i.startsWith("scale")?Gp(n[1]):vp:Fp;function Zu(i,n){return i?i[n]||i.default||i:void 0}const kp={useManualTiming:!1},wp=i=>i!==null;function Ps(i,{repeat:n,repeatType:r="loop"},l){const u=i.filter(wp),d=n&&r!=="loop"&&n%2===1?0:u.length-1;return!d||l===void 0?u[d]:l}const Gt=i=>i;let Tm=Gt;function xp(i){let n=new Set,r=new Set,l=!1,u=!1;const d=new WeakSet;let S={delta:0,timestamp:0,isProcessing:!1};function E(h){d.has(h)&&(T.schedule(h),i()),h(S)}const T={schedule:(h,f=!1,R=!1)=>{const I=R&&l?n:r;return f&&d.add(h),I.has(h)||I.add(h),h},cancel:h=>{r.delete(h),d.delete(h)},process:h=>{if(S=h,l){u=!0;return}l=!0,[n,r]=[r,n],n.forEach(E),n.clear(),l=!1,u&&(u=!1,T.process(h))}};return T}const us=["read","resolveKeyframes","update","preRender","render","postRender"],Vp=40;function mm(i,n){let r=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},d=()=>r=!0,S=us.reduce((N,B)=>(N[B]=xp(d),N),{}),{read:E,resolveKeyframes:T,update:h,preRender:f,render:R,postRender:C}=S,I=()=>{const N=performance.now();r=!1,u.delta=l?1e3/60:Math.max(Math.min(N-u.timestamp,Vp),1),u.timestamp=N,u.isProcessing=!0,E.process(u),T.process(u),h.process(u),f.process(u),R.process(u),C.process(u),u.isProcessing=!1,r&&n&&(l=!1,i(I))},v=()=>{r=!0,l=!0,u.isProcessing||i(I)};return{schedule:us.reduce((N,B)=>{const x=S[B];return N[B]=(K,J=!1,Q=!1)=>(r||v(),x.schedule(K,J,Q)),N},{}),cancel:N=>{for(let B=0;B<us.length;B++)S[us[B]].cancel(N)},state:u,steps:S}}const{schedule:ve,cancel:ii,state:lt,steps:uu}=mm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gt,!0),Rm=(i,n,r)=>(((1-3*r+3*n)*i+(3*r-6*n))*i+3*n)*i,Wp=1e-7,Kp=12;function Yp(i,n,r,l,u){let d,S,E=0;do S=n+(r-n)/2,d=Rm(S,l,u)-i,d>0?r=S:n=S;while(Math.abs(d)>Wp&&++E<Kp);return S}function Ko(i,n,r,l){if(i===n&&r===l)return Gt;const u=d=>Yp(d,0,1,i,r);return d=>d===0||d===1?d:Rm(u(d),n,l)}const fm=i=>n=>n<=.5?i(2*n)/2:(2-i(2*(1-n)))/2,Cm=i=>n=>1-i(1-n),gm=Ko(.33,1.53,.69,.99),Xu=Cm(gm),pm=fm(Xu),ym=i=>(i*=2)<1?.5*Xu(i):.5*(2-Math.pow(2,-10*(i-1))),qu=i=>1-Math.sin(Math.acos(i)),Om=Cm(qu),Nm=fm(qu),Im=i=>/^0[^.\s]+$/u.test(i);function zp(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||Im(i):!0}const Lm=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),Mm=i=>n=>typeof n=="string"&&n.startsWith(i),Pm=Mm("--"),_p=Mm("var(--"),Qu=i=>_p(i)?jp.test(i.split("/*")[0].trim()):!1,jp=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Jp=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Zp(i){const n=Jp.exec(i);if(!n)return[,];const[,r,l,u]=n;return[`--${r??l}`,u]}function Dm(i,n,r=1){const[l,u]=Zp(i);if(!l)return;const d=window.getComputedStyle(n).getPropertyValue(l);if(d){const S=d.trim();return Lm(S)?parseFloat(S):S}return Qu(u)?Dm(u,n,r+1):u}const Ma=(i,n,r)=>r>n?n:r<i?i:r,Hn={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},ko={...Hn,transform:i=>Ma(0,1,i)},Ss={...Hn,default:1},Yo=i=>({test:n=>typeof n=="string"&&n.endsWith(i)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${i}`}),ai=Yo("deg"),oa=Yo("%"),ne=Yo("px"),Xp=Yo("vh"),qp=Yo("vw"),qh={...oa,parse:i=>oa.parse(i)/100,transform:i=>oa.transform(i*100)},Qp=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Qh=i=>i===Hn||i===ne,$h=(i,n)=>parseFloat(i.split(", ")[n]),eT=(i,n)=>(r,{transform:l})=>{if(l==="none"||!l)return 0;const u=l.match(/^matrix3d\((.+)\)$/u);if(u)return $h(u[1],n);{const d=l.match(/^matrix\((.+)\)$/u);return d?$h(d[1],i):0}},$p=new Set(["x","y","z"]),ey=Wo.filter(i=>!$p.has(i));function ty(i){const n=[];return ey.forEach(r=>{const l=i.getValue(r);l!==void 0&&(n.push([r,l.get()]),l.set(r.startsWith("scale")?1:0))}),n}const Mn={width:({x:i},{paddingLeft:n="0",paddingRight:r="0"})=>i.max-i.min-parseFloat(n)-parseFloat(r),height:({y:i},{paddingTop:n="0",paddingBottom:r="0"})=>i.max-i.min-parseFloat(n)-parseFloat(r),top:(i,{top:n})=>parseFloat(n),left:(i,{left:n})=>parseFloat(n),bottom:({y:i},{top:n})=>parseFloat(n)+(i.max-i.min),right:({x:i},{left:n})=>parseFloat(n)+(i.max-i.min),x:eT(4,13),y:eT(5,14)};Mn.translateX=Mn.x;Mn.translateY=Mn.y;const Hm=i=>n=>n.test(i),ay={test:i=>i==="auto",parse:i=>i},Bm=[Hn,ne,oa,ai,qp,Xp,ay],tT=i=>Bm.find(Hm(i)),vi=new Set;let Du=!1,Hu=!1;function vm(){if(Hu){const i=Array.from(vi).filter(l=>l.needsMeasurement),n=new Set(i.map(l=>l.element)),r=new Map;n.forEach(l=>{const u=ty(l);u.length&&(r.set(l,u),l.render())}),i.forEach(l=>l.measureInitialState()),n.forEach(l=>{l.render();const u=r.get(l);u&&u.forEach(([d,S])=>{var E;(E=l.getValue(d))===null||E===void 0||E.set(S)})}),i.forEach(l=>l.measureEndState()),i.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Hu=!1,Du=!1,vi.forEach(i=>i.complete()),vi.clear()}function Gm(){vi.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Hu=!0)})}function iy(){Gm(),vm()}class $u{constructor(n,r,l,u,d,S=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...n],this.onComplete=r,this.name=l,this.motionValue=u,this.element=d,this.isAsync=S}scheduleResolve(){this.isScheduled=!0,this.isAsync?(vi.add(this),Du||(Du=!0,ve.read(Gm),ve.resolveKeyframes(vm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:r,element:l,motionValue:u}=this;for(let d=0;d<n.length;d++)if(n[d]===null)if(d===0){const S=u==null?void 0:u.get(),E=n[n.length-1];if(S!==void 0)n[0]=S;else if(l&&r){const T=l.readValue(r,E);T!=null&&(n[0]=T)}n[0]===void 0&&(n[0]=E),u&&S===void 0&&u.set(n[0])}else n[d]=n[d-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),vi.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,vi.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const vo=i=>Math.round(i*1e5)/1e5,eS=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ny(i){return i==null}const oy=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,tS=(i,n)=>r=>!!(typeof r=="string"&&oy.test(r)&&r.startsWith(i)||n&&!ny(r)&&Object.prototype.hasOwnProperty.call(r,n)),bm=(i,n,r)=>l=>{if(typeof l!="string")return l;const[u,d,S,E]=l.match(eS);return{[i]:parseFloat(u),[n]:parseFloat(d),[r]:parseFloat(S),alpha:E!==void 0?parseFloat(E):1}},ry=i=>Ma(0,255,i),Su={...Hn,transform:i=>Math.round(ry(i))},Hi={test:tS("rgb","red"),parse:bm("red","green","blue"),transform:({red:i,green:n,blue:r,alpha:l=1})=>"rgba("+Su.transform(i)+", "+Su.transform(n)+", "+Su.transform(r)+", "+vo(ko.transform(l))+")"};function sy(i){let n="",r="",l="",u="";return i.length>5?(n=i.substring(1,3),r=i.substring(3,5),l=i.substring(5,7),u=i.substring(7,9)):(n=i.substring(1,2),r=i.substring(2,3),l=i.substring(3,4),u=i.substring(4,5),n+=n,r+=r,l+=l,u+=u),{red:parseInt(n,16),green:parseInt(r,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const Bu={test:tS("#"),parse:sy,transform:Hi.transform},gn={test:tS("hsl","hue"),parse:bm("hue","saturation","lightness"),transform:({hue:i,saturation:n,lightness:r,alpha:l=1})=>"hsla("+Math.round(i)+", "+oa.transform(vo(n))+", "+oa.transform(vo(r))+", "+vo(ko.transform(l))+")"},dt={test:i=>Hi.test(i)||Bu.test(i)||gn.test(i),parse:i=>Hi.test(i)?Hi.parse(i):gn.test(i)?gn.parse(i):Bu.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?Hi.transform(i):gn.transform(i)},ly=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function cy(i){var n,r;return isNaN(i)&&typeof i=="string"&&(((n=i.match(eS))===null||n===void 0?void 0:n.length)||0)+(((r=i.match(ly))===null||r===void 0?void 0:r.length)||0)>0}const Fm="number",Um="color",uy="var",Sy="var(",aT="${}",dy=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wo(i){const n=i.toString(),r=[],l={color:[],number:[],var:[]},u=[];let d=0;const E=n.replace(dy,T=>(dt.test(T)?(l.color.push(d),u.push(Um),r.push(dt.parse(T))):T.startsWith(Sy)?(l.var.push(d),u.push(uy),r.push(T)):(l.number.push(d),u.push(Fm),r.push(parseFloat(T))),++d,aT)).split(aT);return{values:r,split:E,indexes:l,types:u}}function km(i){return wo(i).values}function wm(i){const{split:n,types:r}=wo(i),l=n.length;return u=>{let d="";for(let S=0;S<l;S++)if(d+=n[S],u[S]!==void 0){const E=r[S];E===Fm?d+=vo(u[S]):E===Um?d+=dt.transform(u[S]):d+=u[S]}return d}}const Ay=i=>typeof i=="number"?0:i;function Ey(i){const n=km(i);return wm(i)(n.map(Ay))}const ni={test:cy,parse:km,createTransformer:wm,getAnimatableNone:Ey},hy=new Set(["brightness","contrast","saturate","opacity"]);function Ty(i){const[n,r]=i.slice(0,-1).split("(");if(n==="drop-shadow")return i;const[l]=r.match(eS)||[];if(!l)return i;const u=r.replace(l,"");let d=hy.has(n)?1:0;return l!==r&&(d*=100),n+"("+d+u+")"}const my=/\b([a-z-]*)\(.*?\)/gu,vu={...ni,getAnimatableNone:i=>{const n=i.match(my);return n?n.map(Ty).join(" "):i}},Ry={borderWidth:ne,borderTopWidth:ne,borderRightWidth:ne,borderBottomWidth:ne,borderLeftWidth:ne,borderRadius:ne,radius:ne,borderTopLeftRadius:ne,borderTopRightRadius:ne,borderBottomRightRadius:ne,borderBottomLeftRadius:ne,width:ne,maxWidth:ne,height:ne,maxHeight:ne,top:ne,right:ne,bottom:ne,left:ne,padding:ne,paddingTop:ne,paddingRight:ne,paddingBottom:ne,paddingLeft:ne,margin:ne,marginTop:ne,marginRight:ne,marginBottom:ne,marginLeft:ne,backgroundPositionX:ne,backgroundPositionY:ne},fy={rotate:ai,rotateX:ai,rotateY:ai,rotateZ:ai,scale:Ss,scaleX:Ss,scaleY:Ss,scaleZ:Ss,skew:ai,skewX:ai,skewY:ai,distance:ne,translateX:ne,translateY:ne,translateZ:ne,x:ne,y:ne,z:ne,perspective:ne,transformPerspective:ne,opacity:ko,originX:qh,originY:qh,originZ:ne},iT={...Hn,transform:Math.round},aS={...Ry,...fy,zIndex:iT,size:ne,fillOpacity:ko,strokeOpacity:ko,numOctaves:iT},Cy={...aS,color:dt,backgroundColor:dt,outlineColor:dt,fill:dt,stroke:dt,borderColor:dt,borderTopColor:dt,borderRightColor:dt,borderBottomColor:dt,borderLeftColor:dt,filter:vu,WebkitFilter:vu},iS=i=>Cy[i];function xm(i,n){let r=iS(i);return r!==vu&&(r=ni),r.getAnimatableNone?r.getAnimatableNone(n):void 0}const gy=new Set(["auto","none","0"]);function py(i,n,r){let l=0,u;for(;l<i.length&&!u;){const d=i[l];typeof d=="string"&&!gy.has(d)&&wo(d).values.length&&(u=i[l]),l++}if(u&&r)for(const d of n)i[d]=xm(r,u)}class Vm extends $u{constructor(n,r,l,u,d){super(n,r,l,u,d,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:r,name:l}=this;if(!r||!r.current)return;super.readKeyframes();for(let T=0;T<n.length;T++){let h=n[T];if(typeof h=="string"&&(h=h.trim(),Qu(h))){const f=Dm(h,r.current);f!==void 0&&(n[T]=f),T===n.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Qp.has(l)||n.length!==2)return;const[u,d]=n,S=tT(u),E=tT(d);if(S!==E)if(Qh(S)&&Qh(E))for(let T=0;T<n.length;T++){const h=n[T];typeof h=="string"&&(n[T]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:r}=this,l=[];for(let u=0;u<n.length;u++)zp(n[u])&&l.push(u);l.length&&py(n,l,r)}measureInitialState(){const{element:n,unresolvedKeyframes:r,name:l}=this;if(!n||!n.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mn[l](n.measureViewportBox(),window.getComputedStyle(n.current)),r[0]=this.measuredOrigin;const u=r[r.length-1];u!==void 0&&n.getValue(l,u).jump(u,!1)}measureEndState(){var n;const{element:r,name:l,unresolvedKeyframes:u}=this;if(!r||!r.current)return;const d=r.getValue(l);d&&d.jump(this.measuredOrigin,!1);const S=u.length-1,E=u[S];u[S]=Mn[l](r.measureViewportBox(),window.getComputedStyle(r.current)),E!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=E),!((n=this.removedTransforms)===null||n===void 0)&&n.length&&this.removedTransforms.forEach(([T,h])=>{r.getValue(T).set(h)}),this.resolveNoneKeyframes()}}function nS(i){return typeof i=="function"}let Es;function yy(){Es=void 0}const ra={now:()=>(Es===void 0&&ra.set(lt.isProcessing||kp.useManualTiming?lt.timestamp:performance.now()),Es),set:i=>{Es=i,queueMicrotask(yy)}},nT=(i,n)=>n==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(ni.test(i)||i==="0")&&!i.startsWith("url("));function Oy(i){const n=i[0];if(i.length===1)return!0;for(let r=0;r<i.length;r++)if(i[r]!==n)return!0}function Ny(i,n,r,l){const u=i[0];if(u===null)return!1;if(n==="display"||n==="visibility")return!0;const d=i[i.length-1],S=nT(u,n),E=nT(d,n);return!S||!E?!1:Oy(i)||(r==="spring"||nS(r))&&l}const Iy=40;class Wm{constructor({autoplay:n=!0,delay:r=0,type:l="keyframes",repeat:u=0,repeatDelay:d=0,repeatType:S="loop",...E}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ra.now(),this.options={autoplay:n,delay:r,type:l,repeat:u,repeatDelay:d,repeatType:S,...E},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Iy?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&iy(),this._resolved}onKeyframesResolved(n,r){this.resolvedAt=ra.now(),this.hasAttemptedResolve=!0;const{name:l,type:u,velocity:d,delay:S,onComplete:E,onUpdate:T,isGenerator:h}=this.options;if(!h&&!Ny(n,l,u,d))if(S)this.options.duration=0;else{T==null||T(Ps(n,this.options,r)),E==null||E(),this.resolveFinishedPromise();return}const f=this.initPlayback(n,r);f!==!1&&(this._resolved={keyframes:n,finalKeyframe:r,...f},this.onPostResolved())}onPostResolved(){}then(n,r){return this.currentFinishedPromise.then(n,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(n=>{this.resolveFinishedPromise=n})}}const Pn=(i,n,r)=>{const l=n-i;return l===0?1:(r-i)/l},Km=(i,n,r=10)=>{let l="";const u=Math.max(Math.round(n/r),2);for(let d=0;d<u;d++)l+=i(Pn(0,u-1,d))+", ";return`linear(${l.substring(0,l.length-2)})`};function Ym(i,n){return n?i*(1e3/n):0}const Ly=5;function zm(i,n,r){const l=Math.max(n-Ly,0);return Ym(r-i(l),n-l)}const xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},du=.001;function My({duration:i=xe.duration,bounce:n=xe.bounce,velocity:r=xe.velocity,mass:l=xe.mass}){let u,d,S=1-n;S=Ma(xe.minDamping,xe.maxDamping,S),i=Ma(xe.minDuration,xe.maxDuration,La(i)),S<1?(u=h=>{const f=h*S,R=f*i,C=f-r,I=Gu(h,S),v=Math.exp(-R);return du-C/I*v},d=h=>{const R=h*S*i,C=R*r+r,I=Math.pow(S,2)*Math.pow(h,2)*i,v=Math.exp(-R),b=Gu(Math.pow(h,2),S);return(-u(h)+du>0?-1:1)*((C-I)*v)/b}):(u=h=>{const f=Math.exp(-h*i),R=(h-r)*i+1;return-du+f*R},d=h=>{const f=Math.exp(-h*i),R=(r-h)*(i*i);return f*R});const E=5/i,T=Dy(u,d,E);if(i=Ia(i),isNaN(T))return{stiffness:xe.stiffness,damping:xe.damping,duration:i};{const h=Math.pow(T,2)*l;return{stiffness:h,damping:S*2*Math.sqrt(l*h),duration:i}}}const Py=12;function Dy(i,n,r){let l=r;for(let u=1;u<Py;u++)l=l-i(l)/n(l);return l}function Gu(i,n){return i*Math.sqrt(1-n*n)}const bu=2e4;function _m(i){let n=0;const r=50;let l=i.next(n);for(;!l.done&&n<bu;)n+=r,l=i.next(n);return n>=bu?1/0:n}const Hy=["duration","bounce"],By=["stiffness","damping","mass"];function oT(i,n){return n.some(r=>i[r]!==void 0)}function vy(i){let n={velocity:xe.velocity,stiffness:xe.stiffness,damping:xe.damping,mass:xe.mass,isResolvedFromDuration:!1,...i};if(!oT(i,By)&&oT(i,Hy))if(i.visualDuration){const r=i.visualDuration,l=2*Math.PI/(r*1.2),u=l*l,d=2*Ma(.05,1,1-i.bounce)*Math.sqrt(u);n={...n,mass:xe.mass,stiffness:u,damping:d}}else{const r=My(i);n={...n,...r,mass:xe.mass},n.isResolvedFromDuration=!0}return n}function jm(i=xe.visualDuration,n=xe.bounce){const r=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:n}:i;let{restSpeed:l,restDelta:u}=r;const d=r.keyframes[0],S=r.keyframes[r.keyframes.length-1],E={done:!1,value:d},{stiffness:T,damping:h,mass:f,duration:R,velocity:C,isResolvedFromDuration:I}=vy({...r,velocity:-La(r.velocity||0)}),v=C||0,b=h/(2*Math.sqrt(T*f)),M=S-d,N=La(Math.sqrt(T/f)),B=Math.abs(M)<5;l||(l=B?xe.restSpeed.granular:xe.restSpeed.default),u||(u=B?xe.restDelta.granular:xe.restDelta.default);let x;if(b<1){const J=Gu(N,b);x=Q=>{const X=Math.exp(-b*N*Q);return S-X*((v+b*N*M)/J*Math.sin(J*Q)+M*Math.cos(J*Q))}}else if(b===1)x=J=>S-Math.exp(-N*J)*(M+(v+N*M)*J);else{const J=N*Math.sqrt(b*b-1);x=Q=>{const X=Math.exp(-b*N*Q),j=Math.min(J*Q,300);return S-X*((v+b*N*M)*Math.sinh(j)+J*M*Math.cosh(j))/J}}const K={calculatedDuration:I&&R||null,next:J=>{const Q=x(J);if(I)E.done=J>=R;else{let X=0;b<1&&(X=J===0?Ia(v):zm(x,J,Q));const j=Math.abs(X)<=l,se=Math.abs(S-Q)<=u;E.done=j&&se}return E.value=E.done?S:Q,E},toString:()=>{const J=Math.min(_m(K),bu),Q=Km(X=>K.next(J*X).value,J,30);return J+"ms "+Q}};return K}function rT({keyframes:i,velocity:n=0,power:r=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:d=500,modifyTarget:S,min:E,max:T,restDelta:h=.5,restSpeed:f}){const R=i[0],C={done:!1,value:R},I=j=>E!==void 0&&j<E||T!==void 0&&j>T,v=j=>E===void 0?T:T===void 0||Math.abs(E-j)<Math.abs(T-j)?E:T;let b=r*n;const M=R+b,N=S===void 0?M:S(M);N!==M&&(b=N-R);const B=j=>-b*Math.exp(-j/l),x=j=>N+B(j),K=j=>{const se=B(j),le=x(j);C.done=Math.abs(se)<=h,C.value=C.done?N:le};let J,Q;const X=j=>{I(C.value)&&(J=j,Q=jm({keyframes:[C.value,v(C.value)],velocity:zm(x,j,C.value),damping:u,stiffness:d,restDelta:h,restSpeed:f}))};return X(0),{calculatedDuration:null,next:j=>{let se=!1;return!Q&&J===void 0&&(se=!0,K(j),X(j)),J!==void 0&&j>=J?Q.next(j-J):(!se&&K(j),C)}}}const Gy=Ko(.42,0,1,1),by=Ko(0,0,.58,1),Jm=Ko(.42,0,.58,1),Fy=i=>Array.isArray(i)&&typeof i[0]!="number",oS=i=>Array.isArray(i)&&typeof i[0]=="number",Uy={linear:Gt,easeIn:Gy,easeInOut:Jm,easeOut:by,circIn:qu,circInOut:Nm,circOut:Om,backIn:Xu,backInOut:pm,backOut:gm,anticipate:ym},sT=i=>{if(oS(i)){Tm(i.length===4);const[n,r,l,u]=i;return Ko(n,r,l,u)}else if(typeof i=="string")return Uy[i];return i},ky=(i,n)=>r=>n(i(r)),zo=(...i)=>i.reduce(ky),Ue=(i,n,r)=>i+(n-i)*r;function Au(i,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?i+(n-i)*6*r:r<1/2?n:r<2/3?i+(n-i)*(2/3-r)*6:i}function wy({hue:i,saturation:n,lightness:r,alpha:l}){i/=360,n/=100,r/=100;let u=0,d=0,S=0;if(!n)u=d=S=r;else{const E=r<.5?r*(1+n):r+n-r*n,T=2*r-E;u=Au(T,E,i+1/3),d=Au(T,E,i),S=Au(T,E,i-1/3)}return{red:Math.round(u*255),green:Math.round(d*255),blue:Math.round(S*255),alpha:l}}function fs(i,n){return r=>r>0?n:i}const Eu=(i,n,r)=>{const l=i*i,u=r*(n*n-l)+l;return u<0?0:Math.sqrt(u)},xy=[Bu,Hi,gn],Vy=i=>xy.find(n=>n.test(i));function lT(i){const n=Vy(i);if(!n)return!1;let r=n.parse(i);return n===gn&&(r=wy(r)),r}const cT=(i,n)=>{const r=lT(i),l=lT(n);if(!r||!l)return fs(i,n);const u={...r};return d=>(u.red=Eu(r.red,l.red,d),u.green=Eu(r.green,l.green,d),u.blue=Eu(r.blue,l.blue,d),u.alpha=Ue(r.alpha,l.alpha,d),Hi.transform(u))},Fu=new Set(["none","hidden"]);function Wy(i,n){return Fu.has(i)?r=>r<=0?i:n:r=>r>=1?n:i}function Ky(i,n){return r=>Ue(i,n,r)}function rS(i){return typeof i=="number"?Ky:typeof i=="string"?Qu(i)?fs:dt.test(i)?cT:_y:Array.isArray(i)?Zm:typeof i=="object"?dt.test(i)?cT:Yy:fs}function Zm(i,n){const r=[...i],l=r.length,u=i.map((d,S)=>rS(d)(d,n[S]));return d=>{for(let S=0;S<l;S++)r[S]=u[S](d);return r}}function Yy(i,n){const r={...i,...n},l={};for(const u in r)i[u]!==void 0&&n[u]!==void 0&&(l[u]=rS(i[u])(i[u],n[u]));return u=>{for(const d in l)r[d]=l[d](u);return r}}function zy(i,n){var r;const l=[],u={color:0,var:0,number:0};for(let d=0;d<n.values.length;d++){const S=n.types[d],E=i.indexes[S][u[S]],T=(r=i.values[E])!==null&&r!==void 0?r:0;l[d]=T,u[S]++}return l}const _y=(i,n)=>{const r=ni.createTransformer(n),l=wo(i),u=wo(n);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?Fu.has(i)&&!u.values.length||Fu.has(n)&&!l.values.length?Wy(i,n):zo(Zm(zy(l,u),u.values),r):fs(i,n)};function Xm(i,n,r){return typeof i=="number"&&typeof n=="number"&&typeof r=="number"?Ue(i,n,r):rS(i)(i,n)}function jy(i,n,r){const l=[],u=r||Xm,d=i.length-1;for(let S=0;S<d;S++){let E=u(i[S],i[S+1]);if(n){const T=Array.isArray(n)?n[S]||Gt:n;E=zo(T,E)}l.push(E)}return l}function Jy(i,n,{clamp:r=!0,ease:l,mixer:u}={}){const d=i.length;if(Tm(d===n.length),d===1)return()=>n[0];if(d===2&&i[0]===i[1])return()=>n[1];i[0]>i[d-1]&&(i=[...i].reverse(),n=[...n].reverse());const S=jy(n,l,u),E=S.length,T=h=>{let f=0;if(E>1)for(;f<i.length-2&&!(h<i[f+1]);f++);const R=Pn(i[f],i[f+1],h);return S[f](R)};return r?h=>T(Ma(i[0],i[d-1],h)):T}function Zy(i,n){const r=i[i.length-1];for(let l=1;l<=n;l++){const u=Pn(0,n,l);i.push(Ue(r,1,u))}}function Xy(i){const n=[0];return Zy(n,i.length-1),n}function qy(i,n){return i.map(r=>r*n)}function Qy(i,n){return i.map(()=>n||Jm).splice(0,i.length-1)}function Cs({duration:i=300,keyframes:n,times:r,ease:l="easeInOut"}){const u=Fy(l)?l.map(sT):sT(l),d={done:!1,value:n[0]},S=qy(r&&r.length===n.length?r:Xy(n),i),E=Jy(S,n,{ease:Array.isArray(u)?u:Qy(n,u)});return{calculatedDuration:i,next:T=>(d.value=E(T),d.done=T>=i,d)}}const $y=i=>{const n=({timestamp:r})=>i(r);return{start:()=>ve.update(n,!0),stop:()=>ii(n),now:()=>lt.isProcessing?lt.timestamp:ra.now()}},eO={decay:rT,inertia:rT,tween:Cs,keyframes:Cs,spring:jm},tO=i=>i/100;class sS extends Wm{constructor(n){super(n),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:T}=this.options;T&&T()};const{name:r,motionValue:l,element:u,keyframes:d}=this.options,S=(u==null?void 0:u.KeyframeResolver)||$u,E=(T,h)=>this.onKeyframesResolved(T,h);this.resolver=new S(d,E,r,l,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(n){const{type:r="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:d,velocity:S=0}=this.options,E=nS(r)?r:eO[r]||Cs;let T,h;E!==Cs&&typeof n[0]!="number"&&(T=zo(tO,Xm(n[0],n[1])),n=[0,100]);const f=E({...this.options,keyframes:n});d==="mirror"&&(h=E({...this.options,keyframes:[...n].reverse(),velocity:-S})),f.calculatedDuration===null&&(f.calculatedDuration=_m(f));const{calculatedDuration:R}=f,C=R+u,I=C*(l+1)-u;return{generator:f,mirroredGenerator:h,mapPercentToKeyframes:T,calculatedDuration:R,resolvedDuration:C,totalDuration:I}}onPostResolved(){const{autoplay:n=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!n?this.pause():this.state=this.pendingPlayState}tick(n,r=!1){const{resolved:l}=this;if(!l){const{keyframes:j}=this.options;return{done:!0,value:j[j.length-1]}}const{finalKeyframe:u,generator:d,mirroredGenerator:S,mapPercentToKeyframes:E,keyframes:T,calculatedDuration:h,totalDuration:f,resolvedDuration:R}=l;if(this.startTime===null)return d.next(0);const{delay:C,repeat:I,repeatType:v,repeatDelay:b,onUpdate:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-f/this.speed,this.startTime)),r?this.currentTime=n:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(n-this.startTime)*this.speed;const N=this.currentTime-C*(this.speed>=0?1:-1),B=this.speed>=0?N<0:N>f;this.currentTime=Math.max(N,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=f);let x=this.currentTime,K=d;if(I){const j=Math.min(this.currentTime,f)/R;let se=Math.floor(j),le=j%1;!le&&j>=1&&(le=1),le===1&&se--,se=Math.min(se,I+1),!!(se%2)&&(v==="reverse"?(le=1-le,b&&(le-=b/R)):v==="mirror"&&(K=S)),x=Ma(0,1,le)*R}const J=B?{done:!1,value:T[0]}:K.next(x);E&&(J.value=E(J.value));let{done:Q}=J;!B&&h!==null&&(Q=this.speed>=0?this.currentTime>=f:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Q);return X&&u!==void 0&&(J.value=Ps(T,this.options,u)),M&&M(J.value),X&&this.finish(),J}get duration(){const{resolved:n}=this;return n?La(n.calculatedDuration):0}get time(){return La(this.currentTime)}set time(n){n=Ia(n),this.currentTime=n,this.holdTime!==null||this.speed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.speed)}get speed(){return this.playbackSpeed}set speed(n){const r=this.playbackSpeed!==n;this.playbackSpeed=n,r&&(this.time=La(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:n=$y,onPlay:r,startTime:l}=this.options;this.driver||(this.driver=n(d=>this.tick(d))),r&&r();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=l??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var n;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(n=this.currentTime)!==null&&n!==void 0?n:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:n}=this.options;n&&n()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}}const aO=new Set(["opacity","clipPath","filter","transform"]);function lS(i){let n;return()=>(n===void 0&&(n=i()),n)}const iO={linearEasing:void 0};function nO(i,n){const r=lS(i);return()=>{var l;return(l=iO[n])!==null&&l!==void 0?l:r()}}const gs=nO(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function qm(i){return!!(typeof i=="function"&&gs()||!i||typeof i=="string"&&(i in Uu||gs())||oS(i)||Array.isArray(i)&&i.every(qm))}const Po=([i,n,r,l])=>`cubic-bezier(${i}, ${n}, ${r}, ${l})`,Uu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Po([0,.65,.55,1]),circOut:Po([.55,0,1,.45]),backIn:Po([.31,.01,.66,-.59]),backOut:Po([.33,1.53,.69,.99])};function Qm(i,n){if(i)return typeof i=="function"&&gs()?Km(i,n):oS(i)?Po(i):Array.isArray(i)?i.map(r=>Qm(r,n)||Uu.easeOut):Uu[i]}function oO(i,n,r,{delay:l=0,duration:u=300,repeat:d=0,repeatType:S="loop",ease:E="easeInOut",times:T}={}){const h={[n]:r};T&&(h.offset=T);const f=Qm(E,u);return Array.isArray(f)&&(h.easing=f),i.animate(h,{delay:l,duration:u,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:d+1,direction:S==="reverse"?"alternate":"normal"})}function uT(i,n){i.timeline=n,i.onfinish=null}const rO=lS(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ps=10,sO=2e4;function lO(i){return nS(i.type)||i.type==="spring"||!qm(i.ease)}function cO(i,n){const r=new sS({...n,keyframes:i,repeat:0,delay:0,isGenerator:!0});let l={done:!1,value:i[0]};const u=[];let d=0;for(;!l.done&&d<sO;)l=r.sample(d),u.push(l.value),d+=ps;return{times:void 0,keyframes:u,duration:d-ps,ease:"linear"}}const $m={anticipate:ym,backInOut:pm,circInOut:Nm};function uO(i){return i in $m}class ST extends Wm{constructor(n){super(n);const{name:r,motionValue:l,element:u,keyframes:d}=this.options;this.resolver=new Vm(d,(S,E)=>this.onKeyframesResolved(S,E),r,l,u),this.resolver.scheduleResolve()}initPlayback(n,r){var l;let{duration:u=300,times:d,ease:S,type:E,motionValue:T,name:h,startTime:f}=this.options;if(!(!((l=T.owner)===null||l===void 0)&&l.current))return!1;if(typeof S=="string"&&gs()&&uO(S)&&(S=$m[S]),lO(this.options)){const{onComplete:C,onUpdate:I,motionValue:v,element:b,...M}=this.options,N=cO(n,M);n=N.keyframes,n.length===1&&(n[1]=n[0]),u=N.duration,d=N.times,S=N.ease,E="keyframes"}const R=oO(T.owner.current,h,n,{...this.options,duration:u,times:d,ease:S});return R.startTime=f??this.calcStartTime(),this.pendingTimeline?(uT(R,this.pendingTimeline),this.pendingTimeline=void 0):R.onfinish=()=>{const{onComplete:C}=this.options;T.set(Ps(n,this.options,r)),C&&C(),this.cancel(),this.resolveFinishedPromise()},{animation:R,duration:u,times:d,type:E,ease:S,keyframes:n}}get duration(){const{resolved:n}=this;if(!n)return 0;const{duration:r}=n;return La(r)}get time(){const{resolved:n}=this;if(!n)return 0;const{animation:r}=n;return La(r.currentTime||0)}set time(n){const{resolved:r}=this;if(!r)return;const{animation:l}=r;l.currentTime=Ia(n)}get speed(){const{resolved:n}=this;if(!n)return 1;const{animation:r}=n;return r.playbackRate}set speed(n){const{resolved:r}=this;if(!r)return;const{animation:l}=r;l.playbackRate=n}get state(){const{resolved:n}=this;if(!n)return"idle";const{animation:r}=n;return r.playState}get startTime(){const{resolved:n}=this;if(!n)return null;const{animation:r}=n;return r.startTime}attachTimeline(n){if(!this._resolved)this.pendingTimeline=n;else{const{resolved:r}=this;if(!r)return Gt;const{animation:l}=r;uT(l,n)}return Gt}play(){if(this.isStopped)return;const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:n}=this;if(!n)return;const{animation:r,keyframes:l,duration:u,type:d,ease:S,times:E}=n;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:f,onComplete:R,element:C,...I}=this.options,v=new sS({...I,keyframes:l,duration:u,type:d,ease:S,times:E,isGenerator:!0}),b=Ia(this.time);h.setWithVelocity(v.sample(b-ps).value,v.sample(b).value,ps)}const{onStop:T}=this.options;T&&T(),this.cancel()}complete(){const{resolved:n}=this;n&&n.animation.finish()}cancel(){const{resolved:n}=this;n&&n.animation.cancel()}static supports(n){const{motionValue:r,name:l,repeatDelay:u,repeatType:d,damping:S,type:E}=n;return rO()&&l&&aO.has(l)&&r&&r.owner&&r.owner.current instanceof HTMLElement&&!r.owner.getProps().onUpdate&&!u&&d!=="mirror"&&S!==0&&E!=="inertia"}}const SO=lS(()=>window.ScrollTimeline!==void 0);class dO{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}then(n,r){return Promise.all(this.animations).then(n).catch(r)}getAll(n){return this.animations[0][n]}setAll(n,r){for(let l=0;l<this.animations.length;l++)this.animations[l][n]=r}attachTimeline(n,r){const l=this.animations.map(u=>SO()&&u.attachTimeline?u.attachTimeline(n):r(u));return()=>{l.forEach((u,d)=>{u&&u(),this.animations[d].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get startTime(){return this.getAll("startTime")}get duration(){let n=0;for(let r=0;r<this.animations.length;r++)n=Math.max(n,this.animations[r].duration);return n}runAll(n){this.animations.forEach(r=>r[n]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function AO({when:i,delay:n,delayChildren:r,staggerChildren:l,staggerDirection:u,repeat:d,repeatType:S,repeatDelay:E,from:T,elapsed:h,...f}){return!!Object.keys(f).length}const cS=(i,n,r,l={},u,d)=>S=>{const E=Zu(l,i)||{},T=E.delay||l.delay||0;let{elapsed:h=0}=l;h=h-Ia(T);let f={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:n.getVelocity(),...E,delay:-h,onUpdate:C=>{n.set(C),E.onUpdate&&E.onUpdate(C)},onComplete:()=>{S(),E.onComplete&&E.onComplete()},name:i,motionValue:n,element:d?void 0:u};AO(E)||(f={...f,...Up(i,f)}),f.duration&&(f.duration=Ia(f.duration)),f.repeatDelay&&(f.repeatDelay=Ia(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let R=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(f.duration=0,f.delay===0&&(R=!0)),R&&!d&&n.get()!==void 0){const C=Ps(f.keyframes,E);if(C!==void 0)return ve.update(()=>{f.onUpdate(C),f.onComplete()}),new dO([])}return!d&&ST.supports(f)?new ST(f):new sS(f)},EO=i=>!!(i&&typeof i=="object"&&i.mix&&i.toValue),hO=i=>Pu(i)?i[i.length-1]||0:i;function uS(i,n){i.indexOf(n)===-1&&i.push(n)}function SS(i,n){const r=i.indexOf(n);r>-1&&i.splice(r,1)}class dS{constructor(){this.subscriptions=[]}add(n){return uS(this.subscriptions,n),()=>SS(this.subscriptions,n)}notify(n,r,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](n,r,l);else for(let d=0;d<u;d++){const S=this.subscriptions[d];S&&S(n,r,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const dT=30,TO=i=>!isNaN(parseFloat(i));class mO{constructor(n,r={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(l,u=!0)=>{const d=ra.now();this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(n),this.owner=r.owner}setCurrent(n){this.current=n,this.updatedAt=ra.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=TO(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,r){this.events[n]||(this.events[n]=new dS);const l=this.events[n].add(r);return n==="change"?()=>{l(),ve.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,r){this.passiveEffect=n,this.stopPassiveEffect=r}set(n,r=!0){!r||!this.passiveEffect?this.updateAndNotify(n,r):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,r,l){this.set(r),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-l}jump(n,r=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=ra.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>dT)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,dT);return Ym(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(n){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=n(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xo(i,n){return new mO(i,n)}function RO(i,n,r){i.hasValue(n)?i.getValue(n).set(r):i.addValue(n,xo(r))}function fO(i,n){const r=Ms(i,n);let{transitionEnd:l={},transition:u={},...d}=r||{};d={...d,...l};for(const S in d){const E=hO(d[S]);RO(i,S,E)}}const AS=i=>i.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),CO="framerAppearId",eR="data-"+AS(CO);function tR(i){return i.props[eR]}const At=i=>!!(i&&i.getVelocity);function gO(i){return!!(At(i)&&i.add)}function ku(i,n){const r=i.getValue("willChange");if(gO(r))return r.add(n)}function pO({protectedKeys:i,needsAnimating:n},r){const l=i.hasOwnProperty(r)&&n[r]!==!0;return n[r]=!1,l}function aR(i,n,{delay:r=0,transitionOverride:l,type:u}={}){var d;let{transition:S=i.getDefaultTransition(),transitionEnd:E,...T}=n;l&&(S=l);const h=[],f=u&&i.animationState&&i.animationState.getState()[u];for(const R in T){const C=i.getValue(R,(d=i.latestValues[R])!==null&&d!==void 0?d:null),I=T[R];if(I===void 0||f&&pO(f,R))continue;const v={delay:r,...Zu(S||{},R)};let b=!1;if(window.MotionHandoffAnimation){const N=tR(i);if(N){const B=window.MotionHandoffAnimation(N,R,ve);B!==null&&(v.startTime=B,b=!0)}}ku(i,R),C.start(cS(R,C,I,i.shouldReduceMotion&&bi.has(R)?{type:!1}:v,i,b));const M=C.animation;M&&h.push(M)}return E&&Promise.all(h).then(()=>{ve.update(()=>{E&&fO(i,E)})}),h}function wu(i,n,r={}){var l;const u=Ms(i,n,r.type==="exit"?(l=i.presenceContext)===null||l===void 0?void 0:l.custom:void 0);let{transition:d=i.getDefaultTransition()||{}}=u||{};r.transitionOverride&&(d=r.transitionOverride);const S=u?()=>Promise.all(aR(i,u,r)):()=>Promise.resolve(),E=i.variantChildren&&i.variantChildren.size?(h=0)=>{const{delayChildren:f=0,staggerChildren:R,staggerDirection:C}=d;return yO(i,n,f+h,R,C,r)}:()=>Promise.resolve(),{when:T}=d;if(T){const[h,f]=T==="beforeChildren"?[S,E]:[E,S];return h().then(()=>f())}else return Promise.all([S(),E(r.delay)])}function yO(i,n,r=0,l=0,u=1,d){const S=[],E=(i.variantChildren.size-1)*l,T=u===1?(h=0)=>h*l:(h=0)=>E-h*l;return Array.from(i.variantChildren).sort(OO).forEach((h,f)=>{h.notify("AnimationStart",n),S.push(wu(h,n,{...d,delay:r+T(f)}).then(()=>h.notify("AnimationComplete",n)))}),Promise.all(S)}function OO(i,n){return i.sortNodePosition(n)}function NO(i,n,r={}){i.notify("AnimationStart",n);let l;if(Array.isArray(n)){const u=n.map(d=>wu(i,d,r));l=Promise.all(u)}else if(typeof n=="string")l=wu(i,n,r);else{const u=typeof n=="function"?Ms(i,n,r.custom):n;l=Promise.all(aR(i,u,r))}return l.then(()=>{i.notify("AnimationComplete",n)})}const IO=Ju.length;function iR(i){if(!i)return;if(!i.isControllingVariants){const r=i.parent?iR(i.parent)||{}:{};return i.props.initial!==void 0&&(r.initial=i.props.initial),r}const n={};for(let r=0;r<IO;r++){const l=Ju[r],u=i.props[l];(Uo(u)||u===!1)&&(n[l]=u)}return n}const LO=[...ju].reverse(),MO=ju.length;function PO(i){return n=>Promise.all(n.map(({animation:r,options:l})=>NO(i,r,l)))}function DO(i){let n=PO(i),r=AT(),l=!0;const u=T=>(h,f)=>{var R;const C=Ms(i,f,T==="exit"?(R=i.presenceContext)===null||R===void 0?void 0:R.custom:void 0);if(C){const{transition:I,transitionEnd:v,...b}=C;h={...h,...b,...v}}return h};function d(T){n=T(i)}function S(T){const{props:h}=i,f=iR(i.parent)||{},R=[],C=new Set;let I={},v=1/0;for(let M=0;M<MO;M++){const N=LO[M],B=r[N],x=h[N]!==void 0?h[N]:f[N],K=Uo(x),J=N===T?B.isActive:null;J===!1&&(v=M);let Q=x===f[N]&&x!==h[N]&&K;if(Q&&l&&i.manuallyAnimateOnMount&&(Q=!1),B.protectedKeys={...I},!B.isActive&&J===null||!x&&!B.prevProp||Ls(x)||typeof x=="boolean")continue;const X=HO(B.prevProp,x);let j=X||N===T&&B.isActive&&!Q&&K||M>v&&K,se=!1;const le=Array.isArray(x)?x:[x];let Ne=le.reduce(u(N),{});J===!1&&(Ne={});const{prevResolvedValues:ue={}}=B,Fe={...ue,...Ne},Ve=z=>{j=!0,C.has(z)&&(se=!0,C.delete(z)),B.needsAnimating[z]=!0;const $=i.getValue(z);$&&($.liveStyle=!1)};for(const z in Fe){const $=Ne[z],Re=ue[z];if(I.hasOwnProperty(z))continue;let Se=!1;Pu($)&&Pu(Re)?Se=!hm($,Re):Se=$!==Re,Se?$!=null?Ve(z):C.add(z):$!==void 0&&C.has(z)?Ve(z):B.protectedKeys[z]=!0}B.prevProp=x,B.prevResolvedValues=Ne,B.isActive&&(I={...I,...Ne}),l&&i.blockInitialAnimation&&(j=!1),j&&(!(Q&&X)||se)&&R.push(...le.map(z=>({animation:z,options:{type:N}})))}if(C.size){const M={};C.forEach(N=>{const B=i.getBaseTarget(N),x=i.getValue(N);x&&(x.liveStyle=!0),M[N]=B??null}),R.push({animation:M})}let b=!!R.length;return l&&(h.initial===!1||h.initial===h.animate)&&!i.manuallyAnimateOnMount&&(b=!1),l=!1,b?n(R):Promise.resolve()}function E(T,h){var f;if(r[T].isActive===h)return Promise.resolve();(f=i.variantChildren)===null||f===void 0||f.forEach(C=>{var I;return(I=C.animationState)===null||I===void 0?void 0:I.setActive(T,h)}),r[T].isActive=h;const R=S(T);for(const C in r)r[C].protectedKeys={};return R}return{animateChanges:S,setActive:E,setAnimateFunction:d,getState:()=>r,reset:()=>{r=AT(),l=!0}}}function HO(i,n){return typeof n=="string"?n!==i:Array.isArray(n)?!hm(n,i):!1}function Ni(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function AT(){return{animate:Ni(!0),whileInView:Ni(),whileHover:Ni(),whileTap:Ni(),whileDrag:Ni(),whileFocus:Ni(),exit:Ni()}}class oi{constructor(n){this.isMounted=!1,this.node=n}update(){}}class BO extends oi{constructor(n){super(n),n.animationState||(n.animationState=DO(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Ls(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:r}=this.node.prevProps||{};n!==r&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)===null||n===void 0||n.call(this)}}let vO=0;class GO extends oi{constructor(){super(...arguments),this.id=vO++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:r}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===l)return;const u=this.node.animationState.setActive("exit",!n);r&&!n&&u.then(()=>r(this.id))}mount(){const{register:n}=this.node.presenceContext||{};n&&(this.unmount=n(this.id))}unmount(){}}const bO={animation:{Feature:BO},exit:{Feature:GO}},ea={x:!1,y:!1};function nR(){return ea.x||ea.y}function FO(i,n,r){var l;if(i instanceof Element)return[i];if(typeof i=="string"){let u=document;const d=(l=void 0)!==null&&l!==void 0?l:u.querySelectorAll(i);return d?Array.from(d):[]}return Array.from(i)}function oR(i,n){const r=FO(i),l=new AbortController,u={passive:!0,...n,signal:l.signal};return[r,u,()=>l.abort()]}function ET(i){return n=>{n.pointerType==="touch"||nR()||i(n)}}function UO(i,n,r={}){const[l,u,d]=oR(i,r),S=ET(E=>{const{target:T}=E,h=n(E);if(typeof h!="function"||!T)return;const f=ET(R=>{h(R),T.removeEventListener("pointerleave",f)});T.addEventListener("pointerleave",f,u)});return l.forEach(E=>{E.addEventListener("pointerenter",S,u)}),d}const rR=(i,n)=>n?i===n?!0:rR(i,n.parentElement):!1,ES=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,kO=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function wO(i){return kO.has(i.tagName)||i.tabIndex!==-1}const Do=new WeakSet;function hT(i){return n=>{n.key==="Enter"&&i(n)}}function hu(i,n){i.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const xO=(i,n)=>{const r=i.currentTarget;if(!r)return;const l=hT(()=>{if(Do.has(r))return;hu(r,"down");const u=hT(()=>{hu(r,"up")}),d=()=>hu(r,"cancel");r.addEventListener("keyup",u,n),r.addEventListener("blur",d,n)});r.addEventListener("keydown",l,n),r.addEventListener("blur",()=>r.removeEventListener("keydown",l),n)};function TT(i){return ES(i)&&!nR()}function VO(i,n,r={}){const[l,u,d]=oR(i,r),S=E=>{const T=E.currentTarget;if(!TT(E)||Do.has(T))return;Do.add(T);const h=n(E),f=(I,v)=>{window.removeEventListener("pointerup",R),window.removeEventListener("pointercancel",C),!(!TT(I)||!Do.has(T))&&(Do.delete(T),typeof h=="function"&&h(I,{success:v}))},R=I=>{f(I,r.useGlobalTarget||rR(T,I.target))},C=I=>{f(I,!1)};window.addEventListener("pointerup",R,u),window.addEventListener("pointercancel",C,u)};return l.forEach(E=>{!wO(E)&&E.getAttribute("tabindex")===null&&(E.tabIndex=0),(r.useGlobalTarget?window:E).addEventListener("pointerdown",S,u),E.addEventListener("focus",h=>xO(h,u),u)}),d}function WO(i){return i==="x"||i==="y"?ea[i]?null:(ea[i]=!0,()=>{ea[i]=!1}):ea.x||ea.y?null:(ea.x=ea.y=!0,()=>{ea.x=ea.y=!1})}function _o(i){return{point:{x:i.pageX,y:i.pageY}}}const KO=i=>n=>ES(n)&&i(n,_o(n));function Vo(i,n,r,l={passive:!0}){return i.addEventListener(n,r,l),()=>i.removeEventListener(n,r)}function Go(i,n,r,l){return Vo(i,n,KO(r),l)}const mT=(i,n)=>Math.abs(i-n);function YO(i,n){const r=mT(i.x,n.x),l=mT(i.y,n.y);return Math.sqrt(r**2+l**2)}class sR{constructor(n,r,{transformPagePoint:l,contextWindow:u,dragSnapToOrigin:d=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=mu(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,I=YO(R.offset,{x:0,y:0})>=3;if(!C&&!I)return;const{point:v}=R,{timestamp:b}=lt;this.history.push({...v,timestamp:b});const{onStart:M,onMove:N}=this.handlers;C||(M&&M(this.lastMoveEvent,R),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,R)},this.handlePointerMove=(R,C)=>{this.lastMoveEvent=R,this.lastMoveEventInfo=Tu(C,this.transformPagePoint),ve.update(this.updatePoint,!0)},this.handlePointerUp=(R,C)=>{this.end();const{onEnd:I,onSessionEnd:v,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=mu(R.type==="pointercancel"?this.lastMoveEventInfo:Tu(C,this.transformPagePoint),this.history);this.startEvent&&I&&I(R,M),v&&v(R,M)},!ES(n))return;this.dragSnapToOrigin=d,this.handlers=r,this.transformPagePoint=l,this.contextWindow=u||window;const S=_o(n),E=Tu(S,this.transformPagePoint),{point:T}=E,{timestamp:h}=lt;this.history=[{...T,timestamp:h}];const{onSessionStart:f}=r;f&&f(n,mu(E,this.history)),this.removeListeners=zo(Go(this.contextWindow,"pointermove",this.handlePointerMove),Go(this.contextWindow,"pointerup",this.handlePointerUp),Go(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),ii(this.updatePoint)}}function Tu(i,n){return n?{point:n(i.point)}:i}function RT(i,n){return{x:i.x-n.x,y:i.y-n.y}}function mu({point:i},n){return{point:i,delta:RT(i,lR(n)),offset:RT(i,zO(n)),velocity:_O(n,.1)}}function zO(i){return i[0]}function lR(i){return i[i.length-1]}function _O(i,n){if(i.length<2)return{x:0,y:0};let r=i.length-1,l=null;const u=lR(i);for(;r>=0&&(l=i[r],!(u.timestamp-l.timestamp>Ia(n)));)r--;if(!l)return{x:0,y:0};const d=La(u.timestamp-l.timestamp);if(d===0)return{x:0,y:0};const S={x:(u.x-l.x)/d,y:(u.y-l.y)/d};return S.x===1/0&&(S.x=0),S.y===1/0&&(S.y=0),S}function pn(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}const cR=1e-4,jO=1-cR,JO=1+cR,uR=.01,ZO=0-uR,XO=0+uR;function bt(i){return i.max-i.min}function qO(i,n,r){return Math.abs(i-n)<=r}function fT(i,n,r,l=.5){i.origin=l,i.originPoint=Ue(n.min,n.max,i.origin),i.scale=bt(r)/bt(n),i.translate=Ue(r.min,r.max,i.origin)-i.originPoint,(i.scale>=jO&&i.scale<=JO||isNaN(i.scale))&&(i.scale=1),(i.translate>=ZO&&i.translate<=XO||isNaN(i.translate))&&(i.translate=0)}function bo(i,n,r,l){fT(i.x,n.x,r.x,l?l.originX:void 0),fT(i.y,n.y,r.y,l?l.originY:void 0)}function CT(i,n,r){i.min=r.min+n.min,i.max=i.min+bt(n)}function QO(i,n,r){CT(i.x,n.x,r.x),CT(i.y,n.y,r.y)}function gT(i,n,r){i.min=n.min-r.min,i.max=i.min+bt(n)}function Fo(i,n,r){gT(i.x,n.x,r.x),gT(i.y,n.y,r.y)}function $O(i,{min:n,max:r},l){return n!==void 0&&i<n?i=l?Ue(n,i,l.min):Math.max(i,n):r!==void 0&&i>r&&(i=l?Ue(r,i,l.max):Math.min(i,r)),i}function pT(i,n,r){return{min:n!==void 0?i.min+n:void 0,max:r!==void 0?i.max+r-(i.max-i.min):void 0}}function eN(i,{top:n,left:r,bottom:l,right:u}){return{x:pT(i.x,r,u),y:pT(i.y,n,l)}}function yT(i,n){let r=n.min-i.min,l=n.max-i.max;return n.max-n.min<i.max-i.min&&([r,l]=[l,r]),{min:r,max:l}}function tN(i,n){return{x:yT(i.x,n.x),y:yT(i.y,n.y)}}function aN(i,n){let r=.5;const l=bt(i),u=bt(n);return u>l?r=Pn(n.min,n.max-l,i.min):l>u&&(r=Pn(i.min,i.max-u,n.min)),Ma(0,1,r)}function iN(i,n){const r={};return n.min!==void 0&&(r.min=n.min-i.min),n.max!==void 0&&(r.max=n.max-i.min),r}const xu=.35;function nN(i=xu){return i===!1?i=0:i===!0&&(i=xu),{x:OT(i,"left","right"),y:OT(i,"top","bottom")}}function OT(i,n,r){return{min:NT(i,n),max:NT(i,r)}}function NT(i,n){return typeof i=="number"?i:i[n]||0}const IT=()=>({translate:0,scale:1,origin:0,originPoint:0}),yn=()=>({x:IT(),y:IT()}),LT=()=>({min:0,max:0}),ze=()=>({x:LT(),y:LT()});function Jt(i){return[i("x"),i("y")]}function SR({top:i,left:n,right:r,bottom:l}){return{x:{min:n,max:r},y:{min:i,max:l}}}function oN({x:i,y:n}){return{top:n.min,right:i.max,bottom:n.max,left:i.min}}function rN(i,n){if(!n)return i;const r=n({x:i.left,y:i.top}),l=n({x:i.right,y:i.bottom});return{top:r.y,left:r.x,bottom:l.y,right:l.x}}function Ru(i){return i===void 0||i===1}function Vu({scale:i,scaleX:n,scaleY:r}){return!Ru(i)||!Ru(n)||!Ru(r)}function Mi(i){return Vu(i)||dR(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function dR(i){return MT(i.x)||MT(i.y)}function MT(i){return i&&i!=="0%"}function ys(i,n,r){const l=i-r,u=n*l;return r+u}function PT(i,n,r,l,u){return u!==void 0&&(i=ys(i,u,l)),ys(i,r,l)+n}function Wu(i,n=0,r=1,l,u){i.min=PT(i.min,n,r,l,u),i.max=PT(i.max,n,r,l,u)}function AR(i,{x:n,y:r}){Wu(i.x,n.translate,n.scale,n.originPoint),Wu(i.y,r.translate,r.scale,r.originPoint)}const DT=.999999999999,HT=1.0000000000001;function sN(i,n,r,l=!1){const u=r.length;if(!u)return;n.x=n.y=1;let d,S;for(let E=0;E<u;E++){d=r[E],S=d.projectionDelta;const{visualElement:T}=d.options;T&&T.props.style&&T.props.style.display==="contents"||(l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Nn(i,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),S&&(n.x*=S.x.scale,n.y*=S.y.scale,AR(i,S)),l&&Mi(d.latestValues)&&Nn(i,d.latestValues))}n.x<HT&&n.x>DT&&(n.x=1),n.y<HT&&n.y>DT&&(n.y=1)}function On(i,n){i.min=i.min+n,i.max=i.max+n}function BT(i,n,r,l,u=.5){const d=Ue(i.min,i.max,u);Wu(i,n,r,d,l)}function Nn(i,n){BT(i.x,n.x,n.scaleX,n.scale,n.originX),BT(i.y,n.y,n.scaleY,n.scale,n.originY)}function ER(i,n){return SR(rN(i.getBoundingClientRect(),n))}function lN(i,n,r){const l=ER(i,r),{scroll:u}=n;return u&&(On(l.x,u.offset.x),On(l.y,u.offset.y)),l}const hR=({current:i})=>i?i.ownerDocument.defaultView:null,cN=new WeakMap;class uN{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ze(),this.visualElement=n}start(n,{snapToCursor:r=!1}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const u=f=>{const{dragSnapToOrigin:R}=this.getProps();R?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(_o(f).point)},d=(f,R)=>{const{drag:C,dragPropagation:I,onDragStart:v}=this.getProps();if(C&&!I&&(this.openDragLock&&this.openDragLock(),this.openDragLock=WO(C),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Jt(M=>{let N=this.getAxisMotionValue(M).get()||0;if(oa.test(N)){const{projection:B}=this.visualElement;if(B&&B.layout){const x=B.layout.layoutBox[M];x&&(N=bt(x)*(parseFloat(N)/100))}}this.originPoint[M]=N}),v&&ve.postRender(()=>v(f,R)),ku(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},S=(f,R)=>{const{dragPropagation:C,dragDirectionLock:I,onDirectionLock:v,onDrag:b}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:M}=R;if(I&&this.currentDirection===null){this.currentDirection=SN(M),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",R.point,M),this.updateAxis("y",R.point,M),this.visualElement.render(),b&&b(f,R)},E=(f,R)=>this.stop(f,R),T=()=>Jt(f=>{var R;return this.getAnimationState(f)==="paused"&&((R=this.getAxisMotionValue(f).animation)===null||R===void 0?void 0:R.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new sR(n,{onSessionStart:u,onStart:d,onMove:S,onSessionEnd:E,resumeAnimation:T},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:hR(this.visualElement)})}stop(n,r){const l=this.isDragging;if(this.cancel(),!l)return;const{velocity:u}=r;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&ve.postRender(()=>d(n,r))}cancel(){this.isDragging=!1;const{projection:n,animationState:r}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(n,r,l){const{drag:u}=this.getProps();if(!l||!ds(n,u,this.currentDirection))return;const d=this.getAxisMotionValue(n);let S=this.originPoint[n]+l[n];this.constraints&&this.constraints[n]&&(S=$O(S,this.constraints[n],this.elastic[n])),d.set(S)}resolveConstraints(){var n;const{dragConstraints:r,dragElastic:l}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(n=this.visualElement.projection)===null||n===void 0?void 0:n.layout,d=this.constraints;r&&pn(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&u?this.constraints=eN(u.layoutBox,r):this.constraints=!1,this.elastic=nN(l),d!==this.constraints&&u&&this.constraints&&!this.hasMutatedConstraints&&Jt(S=>{this.constraints!==!1&&this.getAxisMotionValue(S)&&(this.constraints[S]=iN(u.layoutBox[S],this.constraints[S]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:r}=this.getProps();if(!n||!pn(n))return!1;const l=n.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const d=lN(l,u.root,this.visualElement.getTransformPagePoint());let S=tN(u.layout.layoutBox,d);if(r){const E=r(oN(S));this.hasMutatedConstraints=!!E,E&&(S=SR(E))}return S}startAnimation(n){const{drag:r,dragMomentum:l,dragElastic:u,dragTransition:d,dragSnapToOrigin:S,onDragTransitionEnd:E}=this.getProps(),T=this.constraints||{},h=Jt(f=>{if(!ds(f,r,this.currentDirection))return;let R=T&&T[f]||{};S&&(R={min:0,max:0});const C=u?200:1e6,I=u?40:1e7,v={type:"inertia",velocity:l?n[f]:0,bounceStiffness:C,bounceDamping:I,timeConstant:750,restDelta:1,restSpeed:10,...d,...R};return this.startAxisValueAnimation(f,v)});return Promise.all(h).then(E)}startAxisValueAnimation(n,r){const l=this.getAxisMotionValue(n);return ku(this.visualElement,n),l.start(cS(n,l,0,r,this.visualElement,!1))}stopAnimation(){Jt(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){Jt(n=>{var r;return(r=this.getAxisMotionValue(n).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(n){var r;return(r=this.getAxisMotionValue(n).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(n){const r=`_drag${n.toUpperCase()}`,l=this.visualElement.getProps(),u=l[r];return u||this.visualElement.getValue(n,(l.initial?l.initial[n]:void 0)||0)}snapToCursor(n){Jt(r=>{const{drag:l}=this.getProps();if(!ds(r,l,this.currentDirection))return;const{projection:u}=this.visualElement,d=this.getAxisMotionValue(r);if(u&&u.layout){const{min:S,max:E}=u.layout.layoutBox[r];d.set(n[r]-Ue(S,E,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:l}=this.visualElement;if(!pn(r)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Jt(S=>{const E=this.getAxisMotionValue(S);if(E&&this.constraints!==!1){const T=E.get();u[S]=aN({min:T,max:T},this.constraints[S])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),Jt(S=>{if(!ds(S,n,null))return;const E=this.getAxisMotionValue(S),{min:T,max:h}=this.constraints[S];E.set(Ue(T,h,u[S]))})}addListeners(){if(!this.visualElement.current)return;cN.set(this.visualElement,this);const n=this.visualElement.current,r=Go(n,"pointerdown",T=>{const{drag:h,dragListener:f=!0}=this.getProps();h&&f&&this.start(T)}),l=()=>{const{dragConstraints:T}=this.getProps();pn(T)&&T.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,d=u.addEventListener("measure",l);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ve.read(l);const S=Vo(window,"resize",()=>this.scalePositionWithinConstraints()),E=u.addEventListener("didUpdate",(({delta:T,hasLayoutChanged:h})=>{this.isDragging&&h&&(Jt(f=>{const R=this.getAxisMotionValue(f);R&&(this.originPoint[f]+=T[f].translate,R.set(R.get()+T[f].translate))}),this.visualElement.render())}));return()=>{S(),r(),d(),E&&E()}}getProps(){const n=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:d=!1,dragElastic:S=xu,dragMomentum:E=!0}=n;return{...n,drag:r,dragDirectionLock:l,dragPropagation:u,dragConstraints:d,dragElastic:S,dragMomentum:E}}}function ds(i,n,r){return(n===!0||n===i)&&(r===null||r===i)}function SN(i,n=10){let r=null;return Math.abs(i.y)>n?r="y":Math.abs(i.x)>n&&(r="x"),r}class dN extends oi{constructor(n){super(n),this.removeGroupControls=Gt,this.removeListeners=Gt,this.controls=new uN(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gt}unmount(){this.removeGroupControls(),this.removeListeners()}}const vT=i=>(n,r)=>{i&&ve.postRender(()=>i(n,r))};class AN extends oi{constructor(){super(...arguments),this.removePointerDownListener=Gt}onPointerDown(n){this.session=new sR(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hR(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:r,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:vT(n),onStart:vT(r),onMove:l,onEnd:(d,S)=>{delete this.session,u&&ve.postRender(()=>u(d,S))}}}mount(){this.removePointerDownListener=Go(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ds=W.createContext(null);function EN(){const i=W.useContext(Ds);if(i===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:l}=i,u=W.useId();W.useEffect(()=>l(u),[]);const d=W.useCallback(()=>r&&r(u),[u,r]);return!n&&r?[!1,d]:[!0]}const hS=W.createContext({}),TR=W.createContext({}),hs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function GT(i,n){return n.max===n.min?0:i/(n.max-n.min)*100}const Lo={correct:(i,n)=>{if(!n.target)return i;if(typeof i=="string")if(ne.test(i))i=parseFloat(i);else return i;const r=GT(i,n.target.x),l=GT(i,n.target.y);return`${r}% ${l}%`}},hN={correct:(i,{treeScale:n,projectionDelta:r})=>{const l=i,u=ni.parse(i);if(u.length>5)return l;const d=ni.createTransformer(i),S=typeof u[0]!="number"?1:0,E=r.x.scale*n.x,T=r.y.scale*n.y;u[0+S]/=E,u[1+S]/=T;const h=Ue(E,T,.5);return typeof u[2+S]=="number"&&(u[2+S]/=h),typeof u[3+S]=="number"&&(u[3+S]/=h),d(u)}},Os={};function TN(i){Object.assign(Os,i)}const{schedule:TS}=mm(queueMicrotask,!1);class mN extends W.Component{componentDidMount(){const{visualElement:n,layoutGroup:r,switchLayoutGroup:l,layoutId:u}=this.props,{projection:d}=n;TN(RN),d&&(r.group&&r.group.add(d),l&&l.register&&u&&l.register(d),d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),hs.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:r,visualElement:l,drag:u,isPresent:d}=this.props,S=l.projection;return S&&(S.isPresent=d,u||n.layoutDependency!==r||r===void 0?S.willUpdate():this.safeToRemove(),n.isPresent!==d&&(d?S.promote():S.relegate()||ve.postRender(()=>{const E=S.getStack();(!E||!E.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),TS.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:r,switchLayoutGroup:l}=this.props,{projection:u}=n;u&&(u.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function mR(i){const[n,r]=EN(),l=W.useContext(hS);return p.jsx(mN,{...i,layoutGroup:l,switchLayoutGroup:W.useContext(TR),isPresent:n,safeToRemove:r})}const RN={borderRadius:{...Lo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Lo,borderTopRightRadius:Lo,borderBottomLeftRadius:Lo,borderBottomRightRadius:Lo,boxShadow:hN},RR=["TopLeft","TopRight","BottomLeft","BottomRight"],fN=RR.length,bT=i=>typeof i=="string"?parseFloat(i):i,FT=i=>typeof i=="number"||ne.test(i);function CN(i,n,r,l,u,d){u?(i.opacity=Ue(0,r.opacity!==void 0?r.opacity:1,gN(l)),i.opacityExit=Ue(n.opacity!==void 0?n.opacity:1,0,pN(l))):d&&(i.opacity=Ue(n.opacity!==void 0?n.opacity:1,r.opacity!==void 0?r.opacity:1,l));for(let S=0;S<fN;S++){const E=`border${RR[S]}Radius`;let T=UT(n,E),h=UT(r,E);if(T===void 0&&h===void 0)continue;T||(T=0),h||(h=0),T===0||h===0||FT(T)===FT(h)?(i[E]=Math.max(Ue(bT(T),bT(h),l),0),(oa.test(h)||oa.test(T))&&(i[E]+="%")):i[E]=h}(n.rotate||r.rotate)&&(i.rotate=Ue(n.rotate||0,r.rotate||0,l))}function UT(i,n){return i[n]!==void 0?i[n]:i.borderRadius}const gN=fR(0,.5,Om),pN=fR(.5,.95,Gt);function fR(i,n,r){return l=>l<i?0:l>n?1:r(Pn(i,n,l))}function kT(i,n){i.min=n.min,i.max=n.max}function jt(i,n){kT(i.x,n.x),kT(i.y,n.y)}function wT(i,n){i.translate=n.translate,i.scale=n.scale,i.originPoint=n.originPoint,i.origin=n.origin}function xT(i,n,r,l,u){return i-=n,i=ys(i,1/r,l),u!==void 0&&(i=ys(i,1/u,l)),i}function yN(i,n=0,r=1,l=.5,u,d=i,S=i){if(oa.test(n)&&(n=parseFloat(n),n=Ue(S.min,S.max,n/100)-S.min),typeof n!="number")return;let E=Ue(d.min,d.max,l);i===d&&(E-=n),i.min=xT(i.min,n,r,E,u),i.max=xT(i.max,n,r,E,u)}function VT(i,n,[r,l,u],d,S){yN(i,n[r],n[l],n[u],n.scale,d,S)}const ON=["x","scaleX","originX"],NN=["y","scaleY","originY"];function WT(i,n,r,l){VT(i.x,n,ON,r?r.x:void 0,l?l.x:void 0),VT(i.y,n,NN,r?r.y:void 0,l?l.y:void 0)}function KT(i){return i.translate===0&&i.scale===1}function CR(i){return KT(i.x)&&KT(i.y)}function YT(i,n){return i.min===n.min&&i.max===n.max}function IN(i,n){return YT(i.x,n.x)&&YT(i.y,n.y)}function zT(i,n){return Math.round(i.min)===Math.round(n.min)&&Math.round(i.max)===Math.round(n.max)}function gR(i,n){return zT(i.x,n.x)&&zT(i.y,n.y)}function _T(i){return bt(i.x)/bt(i.y)}function jT(i,n){return i.translate===n.translate&&i.scale===n.scale&&i.originPoint===n.originPoint}class LN{constructor(){this.members=[]}add(n){uS(this.members,n),n.scheduleRender()}remove(n){if(SS(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(n){const r=this.members.findIndex(u=>n===u);if(r===0)return!1;let l;for(let u=r;u>=0;u--){const d=this.members[u];if(d.isPresent!==!1){l=d;break}}return l?(this.promote(l),!0):!1}promote(n,r){const l=this.lead;if(n!==l&&(this.prevLead=l,this.lead=n,n.show(),l)){l.instance&&l.scheduleRender(),n.scheduleRender(),n.resumeFrom=l,r&&(n.resumeFrom.preserveOpacity=!0),l.snapshot&&(n.snapshot=l.snapshot,n.snapshot.latestValues=l.animationValues||l.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:u}=n.options;u===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:r,resumingFrom:l}=n;r.onExitComplete&&r.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function MN(i,n,r){let l="";const u=i.x.translate/n.x,d=i.y.translate/n.y,S=(r==null?void 0:r.z)||0;if((u||d||S)&&(l=`translate3d(${u}px, ${d}px, ${S}px) `),(n.x!==1||n.y!==1)&&(l+=`scale(${1/n.x}, ${1/n.y}) `),r){const{transformPerspective:h,rotate:f,rotateX:R,rotateY:C,skewX:I,skewY:v}=r;h&&(l=`perspective(${h}px) ${l}`),f&&(l+=`rotate(${f}deg) `),R&&(l+=`rotateX(${R}deg) `),C&&(l+=`rotateY(${C}deg) `),I&&(l+=`skewX(${I}deg) `),v&&(l+=`skewY(${v}deg) `)}const E=i.x.scale*n.x,T=i.y.scale*n.y;return(E!==1||T!==1)&&(l+=`scale(${E}, ${T})`),l||"none"}const PN=(i,n)=>i.depth-n.depth;class DN{constructor(){this.children=[],this.isDirty=!1}add(n){uS(this.children,n),this.isDirty=!0}remove(n){SS(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(PN),this.isDirty=!1,this.children.forEach(n)}}function Ts(i){const n=At(i)?i.get():i;return EO(n)?n.toValue():n}function HN(i,n){const r=ra.now(),l=({timestamp:u})=>{const d=u-r;d>=n&&(ii(l),i(d-n))};return ve.read(l,!0),()=>ii(l)}function BN(i){return i instanceof SVGElement&&i.tagName!=="svg"}function vN(i,n,r){const l=At(i)?i:xo(i);return l.start(cS("",l,n,r)),l.animation}const Pi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ho=typeof window<"u"&&window.MotionDebug!==void 0,fu=["","X","Y","Z"],GN={visibility:"hidden"},JT=1e3;let bN=0;function Cu(i,n,r,l){const{latestValues:u}=n;u[i]&&(r[i]=u[i],n.setStaticValue(i,0),l&&(l[i]=0))}function pR(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:n}=i.options;if(!n)return;const r=tR(n);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:u,layoutId:d}=i.options;window.MotionCancelOptimisedAnimation(r,"transform",ve,!(u||d))}const{parent:l}=i;l&&!l.hasCheckedOptimisedAppear&&pR(l)}function yR({attachResizeListener:i,defaultParent:n,measureScroll:r,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(S={},E=n==null?void 0:n()){this.id=bN++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ho&&(Pi.totalNodes=Pi.resolvedTargetDeltas=Pi.recalculatedProjection=0),this.nodes.forEach(kN),this.nodes.forEach(KN),this.nodes.forEach(YN),this.nodes.forEach(wN),Ho&&window.MotionDebug.record(Pi)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=S,this.root=E?E.root||E:this,this.path=E?[...E.path,E]:[],this.parent=E,this.depth=E?E.depth+1:0;for(let T=0;T<this.path.length;T++)this.path[T].shouldResetTransform=!0;this.root===this&&(this.nodes=new DN)}addEventListener(S,E){return this.eventHandlers.has(S)||this.eventHandlers.set(S,new dS),this.eventHandlers.get(S).add(E)}notifyListeners(S,...E){const T=this.eventHandlers.get(S);T&&T.notify(...E)}hasListeners(S){return this.eventHandlers.has(S)}mount(S,E=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=BN(S),this.instance=S;const{layoutId:T,layout:h,visualElement:f}=this.options;if(f&&!f.current&&f.mount(S),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),E&&(h||T)&&(this.isLayoutDirty=!0),i){let R;const C=()=>this.root.updateBlockedByResize=!1;i(S,()=>{this.root.updateBlockedByResize=!0,R&&R(),R=HN(C,250),hs.hasAnimatedSinceResize&&(hs.hasAnimatedSinceResize=!1,this.nodes.forEach(XT))})}T&&this.root.registerSharedNode(T,this),this.options.animate!==!1&&f&&(T||h)&&this.addEventListener("didUpdate",({delta:R,hasLayoutChanged:C,hasRelativeTargetChanged:I,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||f.getDefaultTransition()||ZN,{onLayoutAnimationStart:M,onLayoutAnimationComplete:N}=f.getProps(),B=!this.targetLayout||!gR(this.targetLayout,v)||I,x=!C&&I;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||C&&(B||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(R,x);const K={...Zu(b,"layout"),onPlay:M,onComplete:N};(f.shouldReduceMotion||this.options.layoutRoot)&&(K.delay=0,K.type=!1),this.startAnimation(K)}else C||XT(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const S=this.getStack();S&&S.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ii(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(zN),this.animationId++)}getTransformTemplate(){const{visualElement:S}=this.options;return S&&S.getProps().transformTemplate}willUpdate(S=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&pR(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const R=this.path[f];R.shouldResetTransform=!0,R.updateScroll("snapshot"),R.options.layoutRoot&&R.willUpdate(!1)}const{layoutId:E,layout:T}=this.options;if(E===void 0&&!T)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),S&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ZT);return}this.isUpdating||this.nodes.forEach(VN),this.isUpdating=!1,this.nodes.forEach(WN),this.nodes.forEach(FN),this.nodes.forEach(UN),this.clearAllSnapshots();const E=ra.now();lt.delta=Ma(0,1e3/60,E-lt.timestamp),lt.timestamp=E,lt.isProcessing=!0,uu.update.process(lt),uu.preRender.process(lt),uu.render.process(lt),lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,TS.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(xN),this.sharedNodes.forEach(_N)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ve.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ve.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let T=0;T<this.path.length;T++)this.path[T].updateScroll();const S=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:E}=this.options;E&&E.notify("LayoutMeasure",this.layout.layoutBox,S?S.layoutBox:void 0)}updateScroll(S="measure"){let E=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===S&&(E=!1),E){const T=l(this.instance);this.scroll={animationId:this.root.animationId,phase:S,isRoot:T,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:T}}}resetTransform(){if(!u)return;const S=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,E=this.projectionDelta&&!CR(this.projectionDelta),T=this.getTransformTemplate(),h=T?T(this.latestValues,""):void 0,f=h!==this.prevTransformTemplateValue;S&&(E||Mi(this.latestValues)||f)&&(u(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(S=!0){const E=this.measurePageBox();let T=this.removeElementScroll(E);return S&&(T=this.removeTransform(T)),XN(T),{animationId:this.root.animationId,measuredBox:E,layoutBox:T,latestValues:{},source:this.id}}measurePageBox(){var S;const{visualElement:E}=this.options;if(!E)return ze();const T=E.measureViewportBox();if(!(((S=this.scroll)===null||S===void 0?void 0:S.wasRoot)||this.path.some(qN))){const{scroll:f}=this.root;f&&(On(T.x,f.offset.x),On(T.y,f.offset.y))}return T}removeElementScroll(S){var E;const T=ze();if(jt(T,S),!((E=this.scroll)===null||E===void 0)&&E.wasRoot)return T;for(let h=0;h<this.path.length;h++){const f=this.path[h],{scroll:R,options:C}=f;f!==this.root&&R&&C.layoutScroll&&(R.wasRoot&&jt(T,S),On(T.x,R.offset.x),On(T.y,R.offset.y))}return T}applyTransform(S,E=!1){const T=ze();jt(T,S);for(let h=0;h<this.path.length;h++){const f=this.path[h];!E&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Nn(T,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),Mi(f.latestValues)&&Nn(T,f.latestValues)}return Mi(this.latestValues)&&Nn(T,this.latestValues),T}removeTransform(S){const E=ze();jt(E,S);for(let T=0;T<this.path.length;T++){const h=this.path[T];if(!h.instance||!Mi(h.latestValues))continue;Vu(h.latestValues)&&h.updateSnapshot();const f=ze(),R=h.measurePageBox();jt(f,R),WT(E,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,f)}return Mi(this.latestValues)&&WT(E,this.latestValues),E}setTargetDelta(S){this.targetDelta=S,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(S){this.options={...this.options,...S,crossfade:S.crossfade!==void 0?S.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(S=!1){var E;const T=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=T.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=T.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=T.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==T;if(!(S||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((E=this.parent)===null||E===void 0)&&E.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:R,layoutId:C}=this.options;if(!(!this.layout||!(R||C))){if(this.resolvedRelativeTargetAt=lt.timestamp,!this.targetDelta&&!this.relativeTarget){const I=this.getClosestProjectingParent();I&&I.layout&&this.animationProgress!==1?(this.relativeParent=I,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),Fo(this.relativeTargetOrigin,this.layout.layoutBox,I.layout.layoutBox),jt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ze(),this.targetWithTransforms=ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),QO(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):jt(this.target,this.layout.layoutBox),AR(this.target,this.targetDelta)):jt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const I=this.getClosestProjectingParent();I&&!!I.resumingFrom==!!this.resumingFrom&&!I.options.layoutScroll&&I.target&&this.animationProgress!==1?(this.relativeParent=I,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),Fo(this.relativeTargetOrigin,this.target,I.target),jt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ho&&Pi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Vu(this.parent.latestValues)||dR(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const E=this.getLead(),T=!!this.resumingFrom||this!==E;let h=!0;if((this.isProjectionDirty||!((S=this.parent)===null||S===void 0)&&S.isProjectionDirty)&&(h=!1),T&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===lt.timestamp&&(h=!1),h)return;const{layout:f,layoutId:R}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||R))return;jt(this.layoutCorrected,this.layout.layoutBox);const C=this.treeScale.x,I=this.treeScale.y;sN(this.layoutCorrected,this.treeScale,this.path,T),E.layout&&!E.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(E.target=E.layout.layoutBox,E.targetWithTransforms=ze());const{target:v}=E;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(wT(this.prevProjectionDelta.x,this.projectionDelta.x),wT(this.prevProjectionDelta.y,this.projectionDelta.y)),bo(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==C||this.treeScale.y!==I||!jT(this.projectionDelta.x,this.prevProjectionDelta.x)||!jT(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Ho&&Pi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(S=!0){var E;if((E=this.options.visualElement)===null||E===void 0||E.scheduleRender(),S){const T=this.getStack();T&&T.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yn(),this.projectionDelta=yn(),this.projectionDeltaWithTransform=yn()}setAnimationOrigin(S,E=!1){const T=this.snapshot,h=T?T.latestValues:{},f={...this.latestValues},R=yn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!E;const C=ze(),I=T?T.source:void 0,v=this.layout?this.layout.source:void 0,b=I!==v,M=this.getStack(),N=!M||M.members.length<=1,B=!!(b&&!N&&this.options.crossfade===!0&&!this.path.some(JN));this.animationProgress=0;let x;this.mixTargetDelta=K=>{const J=K/1e3;qT(R.x,S.x,J),qT(R.y,S.y,J),this.setTargetDelta(R),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fo(C,this.layout.layoutBox,this.relativeParent.layout.layoutBox),jN(this.relativeTarget,this.relativeTargetOrigin,C,J),x&&IN(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=ze()),jt(x,this.relativeTarget)),b&&(this.animationValues=f,CN(f,h,this.latestValues,J,B,N)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=J},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(S){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ii(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ve.update(()=>{hs.hasAnimatedSinceResize=!0,this.currentAnimation=vN(0,JT,{...S,onUpdate:E=>{this.mixTargetDelta(E),S.onUpdate&&S.onUpdate(E)},onComplete:()=>{S.onComplete&&S.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const S=this.getStack();S&&S.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(JT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const S=this.getLead();let{targetWithTransforms:E,target:T,layout:h,latestValues:f}=S;if(!(!E||!T||!h)){if(this!==S&&this.layout&&h&&OR(this.options.animationType,this.layout.layoutBox,h.layoutBox)){T=this.target||ze();const R=bt(this.layout.layoutBox.x);T.x.min=S.target.x.min,T.x.max=T.x.min+R;const C=bt(this.layout.layoutBox.y);T.y.min=S.target.y.min,T.y.max=T.y.min+C}jt(E,T),Nn(E,f),bo(this.projectionDeltaWithTransform,this.layoutCorrected,E,f)}}registerSharedNode(S,E){this.sharedNodes.has(S)||this.sharedNodes.set(S,new LN),this.sharedNodes.get(S).add(E);const h=E.options.initialPromotionConfig;E.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(E):void 0})}isLead(){const S=this.getStack();return S?S.lead===this:!0}getLead(){var S;const{layoutId:E}=this.options;return E?((S=this.getStack())===null||S===void 0?void 0:S.lead)||this:this}getPrevLead(){var S;const{layoutId:E}=this.options;return E?(S=this.getStack())===null||S===void 0?void 0:S.prevLead:void 0}getStack(){const{layoutId:S}=this.options;if(S)return this.root.sharedNodes.get(S)}promote({needsReset:S,transition:E,preserveFollowOpacity:T}={}){const h=this.getStack();h&&h.promote(this,T),S&&(this.projectionDelta=void 0,this.needsReset=!0),E&&this.setOptions({transition:E})}relegate(){const S=this.getStack();return S?S.relegate(this):!1}resetSkewAndRotation(){const{visualElement:S}=this.options;if(!S)return;let E=!1;const{latestValues:T}=S;if((T.z||T.rotate||T.rotateX||T.rotateY||T.rotateZ||T.skewX||T.skewY)&&(E=!0),!E)return;const h={};T.z&&Cu("z",S,h,this.animationValues);for(let f=0;f<fu.length;f++)Cu(`rotate${fu[f]}`,S,h,this.animationValues),Cu(`skew${fu[f]}`,S,h,this.animationValues);S.render();for(const f in h)S.setStaticValue(f,h[f]),this.animationValues&&(this.animationValues[f]=h[f]);S.scheduleRender()}getProjectionStyles(S){var E,T;if(!this.instance||this.isSVG)return;if(!this.isVisible)return GN;const h={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Ts(S==null?void 0:S.pointerEvents)||"",h.transform=f?f(this.latestValues,""):"none",h;const R=this.getLead();if(!this.projectionDelta||!this.layout||!R.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Ts(S==null?void 0:S.pointerEvents)||""),this.hasProjected&&!Mi(this.latestValues)&&(b.transform=f?f({},""):"none",this.hasProjected=!1),b}const C=R.animationValues||R.latestValues;this.applyTransformsToTarget(),h.transform=MN(this.projectionDeltaWithTransform,this.treeScale,C),f&&(h.transform=f(C,h.transform));const{x:I,y:v}=this.projectionDelta;h.transformOrigin=`${I.origin*100}% ${v.origin*100}% 0`,R.animationValues?h.opacity=R===this?(T=(E=C.opacity)!==null&&E!==void 0?E:this.latestValues.opacity)!==null&&T!==void 0?T:1:this.preserveOpacity?this.latestValues.opacity:C.opacityExit:h.opacity=R===this?C.opacity!==void 0?C.opacity:"":C.opacityExit!==void 0?C.opacityExit:0;for(const b in Os){if(C[b]===void 0)continue;const{correct:M,applyTo:N}=Os[b],B=h.transform==="none"?C[b]:M(C[b],R);if(N){const x=N.length;for(let K=0;K<x;K++)h[N[K]]=B}else h[b]=B}return this.options.layoutId&&(h.pointerEvents=R===this?Ts(S==null?void 0:S.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(S=>{var E;return(E=S.currentAnimation)===null||E===void 0?void 0:E.stop()}),this.root.nodes.forEach(ZT),this.root.sharedNodes.clear()}}}function FN(i){i.updateLayout()}function UN(i){var n;const r=((n=i.resumeFrom)===null||n===void 0?void 0:n.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&r&&i.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:u}=i.layout,{animationType:d}=i.options,S=r.source!==i.layout.source;d==="size"?Jt(R=>{const C=S?r.measuredBox[R]:r.layoutBox[R],I=bt(C);C.min=l[R].min,C.max=C.min+I}):OR(d,r.layoutBox,l)&&Jt(R=>{const C=S?r.measuredBox[R]:r.layoutBox[R],I=bt(l[R]);C.max=C.min+I,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[R].max=i.relativeTarget[R].min+I)});const E=yn();bo(E,l,r.layoutBox);const T=yn();S?bo(T,i.applyTransform(u,!0),r.measuredBox):bo(T,l,r.layoutBox);const h=!CR(E);let f=!1;if(!i.resumeFrom){const R=i.getClosestProjectingParent();if(R&&!R.resumeFrom){const{snapshot:C,layout:I}=R;if(C&&I){const v=ze();Fo(v,r.layoutBox,C.layoutBox);const b=ze();Fo(b,l,I.layoutBox),gR(v,b)||(f=!0),R.options.layoutRoot&&(i.relativeTarget=b,i.relativeTargetOrigin=v,i.relativeParent=R)}}}i.notifyListeners("didUpdate",{layout:l,snapshot:r,delta:T,layoutDelta:E,hasLayoutChanged:h,hasRelativeTargetChanged:f})}else if(i.isLead()){const{onExitComplete:l}=i.options;l&&l()}i.options.transition=void 0}function kN(i){Ho&&Pi.totalNodes++,i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function wN(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function xN(i){i.clearSnapshot()}function ZT(i){i.clearMeasurements()}function VN(i){i.isLayoutDirty=!1}function WN(i){const{visualElement:n}=i.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),i.resetTransform()}function XT(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function KN(i){i.resolveTargetDelta()}function YN(i){i.calcProjection()}function zN(i){i.resetSkewAndRotation()}function _N(i){i.removeLeadSnapshot()}function qT(i,n,r){i.translate=Ue(n.translate,0,r),i.scale=Ue(n.scale,1,r),i.origin=n.origin,i.originPoint=n.originPoint}function QT(i,n,r,l){i.min=Ue(n.min,r.min,l),i.max=Ue(n.max,r.max,l)}function jN(i,n,r,l){QT(i.x,n.x,r.x,l),QT(i.y,n.y,r.y,l)}function JN(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const ZN={duration:.45,ease:[.4,0,.1,1]},$T=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),em=$T("applewebkit/")&&!$T("chrome/")?Math.round:Gt;function tm(i){i.min=em(i.min),i.max=em(i.max)}function XN(i){tm(i.x),tm(i.y)}function OR(i,n,r){return i==="position"||i==="preserve-aspect"&&!qO(_T(n),_T(r),.2)}function qN(i){var n;return i!==i.root&&((n=i.scroll)===null||n===void 0?void 0:n.wasRoot)}const QN=yR({attachResizeListener:(i,n)=>Vo(i,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),gu={current:void 0},NR=yR({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!gu.current){const i=new QN({});i.mount(window),i.setOptions({layoutScroll:!0}),gu.current=i}return gu.current},resetTransform:(i,n)=>{i.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),$N={pan:{Feature:AN},drag:{Feature:dN,ProjectionNode:NR,MeasureLayout:mR}};function am(i,n,r){const{props:l}=i;i.animationState&&l.whileHover&&i.animationState.setActive("whileHover",r==="Start");const u="onHover"+r,d=l[u];d&&ve.postRender(()=>d(n,_o(n)))}class eI extends oi{mount(){const{current:n}=this.node;n&&(this.unmount=UO(n,r=>(am(this.node,r,"Start"),l=>am(this.node,l,"End"))))}unmount(){}}class tI extends oi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zo(Vo(this.node.current,"focus",()=>this.onFocus()),Vo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function im(i,n,r){const{props:l}=i;i.animationState&&l.whileTap&&i.animationState.setActive("whileTap",r==="Start");const u="onTap"+(r==="End"?"":r),d=l[u];d&&ve.postRender(()=>d(n,_o(n)))}class aI extends oi{mount(){const{current:n}=this.node;n&&(this.unmount=VO(n,r=>(im(this.node,r,"Start"),(l,{success:u})=>im(this.node,l,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ku=new WeakMap,pu=new WeakMap,iI=i=>{const n=Ku.get(i.target);n&&n(i)},nI=i=>{i.forEach(iI)};function oI({root:i,...n}){const r=i||document;pu.has(r)||pu.set(r,{});const l=pu.get(r),u=JSON.stringify(n);return l[u]||(l[u]=new IntersectionObserver(nI,{root:i,...n})),l[u]}function rI(i,n,r){const l=oI(n);return Ku.set(i,r),l.observe(i),()=>{Ku.delete(i),l.unobserve(i)}}const sI={some:0,all:1};class lI extends oi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:r,margin:l,amount:u="some",once:d}=n,S={root:r?r.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:sI[u]},E=T=>{const{isIntersecting:h}=T;if(this.isInView===h||(this.isInView=h,d&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:f,onViewportLeave:R}=this.node.getProps(),C=h?f:R;C&&C(T)};return rI(this.node.current,S,E)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:r}=this.node;["amount","margin","root"].some(cI(n,r))&&this.startObserver()}unmount(){}}function cI({viewport:i={}},{viewport:n={}}={}){return r=>i[r]!==n[r]}const uI={inView:{Feature:lI},tap:{Feature:aI},focus:{Feature:tI},hover:{Feature:eI}},SI={layout:{ProjectionNode:NR,MeasureLayout:mR}},mS=W.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"}),Hs=W.createContext({}),RS=typeof window<"u",IR=RS?W.useLayoutEffect:W.useEffect,LR=W.createContext({strict:!1});function dI(i,n,r,l,u){var d,S;const{visualElement:E}=W.useContext(Hs),T=W.useContext(LR),h=W.useContext(Ds),f=W.useContext(mS).reducedMotion,R=W.useRef(null);l=l||T.renderer,!R.current&&l&&(R.current=l(i,{visualState:n,parent:E,props:r,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:f}));const C=R.current,I=W.useContext(TR);C&&!C.projection&&u&&(C.type==="html"||C.type==="svg")&&AI(R.current,r,u,I);const v=W.useRef(!1);W.useInsertionEffect(()=>{C&&v.current&&C.update(r,h)});const b=r[eR],M=W.useRef(!!b&&!(!((d=window.MotionHandoffIsComplete)===null||d===void 0)&&d.call(window,b))&&((S=window.MotionHasOptimisedAnimation)===null||S===void 0?void 0:S.call(window,b)));return IR(()=>{C&&(v.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),TS.render(C.render),M.current&&C.animationState&&C.animationState.animateChanges())}),W.useEffect(()=>{C&&(!M.current&&C.animationState&&C.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{var N;(N=window.MotionHandoffMarkAsComplete)===null||N===void 0||N.call(window,b)}),M.current=!1))}),C}function AI(i,n,r,l){const{layoutId:u,layout:d,drag:S,dragConstraints:E,layoutScroll:T,layoutRoot:h}=n;i.projection=new r(i.latestValues,n["data-framer-portal-id"]?void 0:MR(i.parent)),i.projection.setOptions({layoutId:u,layout:d,alwaysMeasureLayout:!!S||E&&pn(E),visualElement:i,animationType:typeof d=="string"?d:"both",initialPromotionConfig:l,layoutScroll:T,layoutRoot:h})}function MR(i){if(i)return i.options.allowProjection!==!1?i.projection:MR(i.parent)}function EI(i,n,r){return W.useCallback(l=>{l&&i.mount&&i.mount(l),n&&(l?n.mount(l):n.unmount()),r&&(typeof r=="function"?r(l):pn(r)&&(r.current=l))},[n])}function Bs(i){return Ls(i.animate)||Ju.some(n=>Uo(i[n]))}function PR(i){return!!(Bs(i)||i.variants)}function hI(i,n){if(Bs(i)){const{initial:r,animate:l}=i;return{initial:r===!1||Uo(r)?r:void 0,animate:Uo(l)?l:void 0}}return i.inherit!==!1?n:{}}function TI(i){const{initial:n,animate:r}=hI(i,W.useContext(Hs));return W.useMemo(()=>({initial:n,animate:r}),[nm(n),nm(r)])}function nm(i){return Array.isArray(i)?i.join(" "):i}const om={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Dn={};for(const i in om)Dn[i]={isEnabled:n=>om[i].some(r=>!!n[r])};function mI(i){for(const n in i)Dn[n]={...Dn[n],...i[n]}}const RI=Symbol.for("motionComponentSymbol");function fI({preloadedFeatures:i,createVisualElement:n,useRender:r,useVisualState:l,Component:u}){i&&mI(i);function d(E,T){let h;const f={...W.useContext(mS),...E,layoutId:CI(E)},{isStatic:R}=f,C=TI(E),I=l(E,R);if(!R&&RS){gI();const v=pI(f);h=v.MeasureLayout,C.visualElement=dI(u,I,f,n,v.ProjectionNode)}return p.jsxs(Hs.Provider,{value:C,children:[h&&C.visualElement?p.jsx(h,{visualElement:C.visualElement,...f}):null,r(u,E,EI(I,C.visualElement,T),I,R,C.visualElement)]})}const S=W.forwardRef(d);return S[RI]=u,S}function CI({layoutId:i}){const n=W.useContext(hS).id;return n&&i!==void 0?n+"-"+i:i}function gI(i,n){W.useContext(LR).strict}function pI(i){const{drag:n,layout:r}=Dn;if(!n&&!r)return{};const l={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(i)||r!=null&&r.isEnabled(i)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}const yI=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fS(i){return typeof i!="string"||i.includes("-")?!1:!!(yI.indexOf(i)>-1||/[A-Z]/u.test(i))}function DR(i,{style:n,vars:r},l,u){Object.assign(i.style,n,u&&u.getProjectionStyles(l));for(const d in r)i.style.setProperty(d,r[d])}const HR=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function BR(i,n,r,l){DR(i,n,void 0,l);for(const u in n.attrs)i.setAttribute(HR.has(u)?u:AS(u),n.attrs[u])}function vR(i,{layout:n,layoutId:r}){return bi.has(i)||i.startsWith("origin")||(n||r!==void 0)&&(!!Os[i]||i==="opacity")}function CS(i,n,r){var l;const{style:u}=i,d={};for(const S in u)(At(u[S])||n.style&&At(n.style[S])||vR(S,i)||((l=r==null?void 0:r.getValue(S))===null||l===void 0?void 0:l.liveStyle)!==void 0)&&(d[S]=u[S]);return d}function GR(i,n,r){const l=CS(i,n,r);for(const u in i)if(At(i[u])||At(n[u])){const d=Wo.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[d]=i[u]}return l}function gS(i){const n=W.useRef(null);return n.current===null&&(n.current=i()),n.current}function OI({scrapeMotionValuesFromProps:i,createRenderState:n,onMount:r},l,u,d){const S={latestValues:NI(l,u,d,i),renderState:n()};return r&&(S.mount=E=>r(l,E,S)),S}const bR=i=>(n,r)=>{const l=W.useContext(Hs),u=W.useContext(Ds),d=()=>OI(i,n,l,u);return r?d():gS(d)};function NI(i,n,r,l){const u={},d=l(i,{});for(const C in d)u[C]=Ts(d[C]);let{initial:S,animate:E}=i;const T=Bs(i),h=PR(i);n&&h&&!T&&i.inherit!==!1&&(S===void 0&&(S=n.initial),E===void 0&&(E=n.animate));let f=r?r.initial===!1:!1;f=f||S===!1;const R=f?E:S;if(R&&typeof R!="boolean"&&!Ls(R)){const C=Array.isArray(R)?R:[R];for(let I=0;I<C.length;I++){const v=_u(i,C[I]);if(v){const{transitionEnd:b,transition:M,...N}=v;for(const B in N){let x=N[B];if(Array.isArray(x)){const K=f?x.length-1:0;x=x[K]}x!==null&&(u[B]=x)}for(const B in b)u[B]=b[B]}}}return u}const pS=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),FR=()=>({...pS(),attrs:{}}),UR=(i,n)=>n&&typeof i=="number"?n.transform(i):i,II={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},LI=Wo.length;function MI(i,n,r){let l="",u=!0;for(let d=0;d<LI;d++){const S=Wo[d],E=i[S];if(E===void 0)continue;let T=!0;if(typeof E=="number"?T=E===(S.startsWith("scale")?1:0):T=parseFloat(E)===0,!T||r){const h=UR(E,aS[S]);if(!T){u=!1;const f=II[S]||S;l+=`${f}(${h}) `}r&&(n[S]=h)}}return l=l.trim(),r?l=r(n,u?"":l):u&&(l="none"),l}function yS(i,n,r){const{style:l,vars:u,transformOrigin:d}=i;let S=!1,E=!1;for(const T in n){const h=n[T];if(bi.has(T)){S=!0;continue}else if(Pm(T)){u[T]=h;continue}else{const f=UR(h,aS[T]);T.startsWith("origin")?(E=!0,d[T]=f):l[T]=f}}if(n.transform||(S||r?l.transform=MI(n,i.transform,r):l.transform&&(l.transform="none")),E){const{originX:T="50%",originY:h="50%",originZ:f=0}=d;l.transformOrigin=`${T} ${h} ${f}`}}function rm(i,n,r){return typeof i=="string"?i:ne.transform(n+r*i)}function PI(i,n,r){const l=rm(n,i.x,i.width),u=rm(r,i.y,i.height);return`${l} ${u}`}const DI={offset:"stroke-dashoffset",array:"stroke-dasharray"},HI={offset:"strokeDashoffset",array:"strokeDasharray"};function BI(i,n,r=1,l=0,u=!0){i.pathLength=1;const d=u?DI:HI;i[d.offset]=ne.transform(-l);const S=ne.transform(n),E=ne.transform(r);i[d.array]=`${S} ${E}`}function OS(i,{attrX:n,attrY:r,attrScale:l,originX:u,originY:d,pathLength:S,pathSpacing:E=1,pathOffset:T=0,...h},f,R){if(yS(i,h,R),f){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:C,style:I,dimensions:v}=i;C.transform&&(v&&(I.transform=C.transform),delete C.transform),v&&(u!==void 0||d!==void 0||I.transform)&&(I.transformOrigin=PI(v,u!==void 0?u:.5,d!==void 0?d:.5)),n!==void 0&&(C.x=n),r!==void 0&&(C.y=r),l!==void 0&&(C.scale=l),S!==void 0&&BI(C,S,E,T,!1)}const NS=i=>typeof i=="string"&&i.toLowerCase()==="svg",vI={useVisualState:bR({scrapeMotionValuesFromProps:GR,createRenderState:FR,onMount:(i,n,{renderState:r,latestValues:l})=>{ve.read(()=>{try{r.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),ve.render(()=>{OS(r,l,NS(n.tagName),i.transformTemplate),BR(n,r)})}})},GI={useVisualState:bR({scrapeMotionValuesFromProps:CS,createRenderState:pS})};function kR(i,n,r){for(const l in n)!At(n[l])&&!vR(l,r)&&(i[l]=n[l])}function bI({transformTemplate:i},n){return W.useMemo(()=>{const r=pS();return yS(r,n,i),Object.assign({},r.vars,r.style)},[n])}function FI(i,n){const r=i.style||{},l={};return kR(l,r,i),Object.assign(l,bI(i,n)),l}function UI(i,n){const r={},l=FI(i,n);return i.drag&&i.dragListener!==!1&&(r.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(r.tabIndex=0),r.style=l,r}const kI=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ns(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||kI.has(i)}let wR=i=>!Ns(i);function wI(i){i&&(wR=n=>n.startsWith("on")?!Ns(n):i(n))}try{wI(require("@emotion/is-prop-valid").default)}catch{}function xI(i,n,r){const l={};for(const u in i)u==="values"&&typeof i.values=="object"||(wR(u)||r===!0&&Ns(u)||!n&&!Ns(u)||i.draggable&&u.startsWith("onDrag"))&&(l[u]=i[u]);return l}function VI(i,n,r,l){const u=W.useMemo(()=>{const d=FR();return OS(d,n,NS(l),i.transformTemplate),{...d.attrs,style:{...d.style}}},[n]);if(i.style){const d={};kR(d,i.style,i),u.style={...d,...u.style}}return u}function WI(i=!1){return(r,l,u,{latestValues:d},S)=>{const T=(fS(r)?VI:UI)(l,d,S,r),h=xI(l,typeof r=="string",i),f=r!==W.Fragment?{...h,...T,ref:u}:{},{children:R}=l,C=W.useMemo(()=>At(R)?R.get():R,[R]);return W.createElement(r,{...f,children:C})}}function KI(i,n){return function(l,{forwardMotionProps:u}={forwardMotionProps:!1}){const S={...fS(l)?vI:GI,preloadedFeatures:i,useRender:WI(u),createVisualElement:n,Component:l};return fI(S)}}const Yu={current:null},xR={current:!1};function YI(){if(xR.current=!0,!!RS)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),n=()=>Yu.current=i.matches;i.addListener(n),n()}else Yu.current=!1}function zI(i,n,r){for(const l in n){const u=n[l],d=r[l];if(At(u))i.addValue(l,u);else if(At(d))i.addValue(l,xo(u,{owner:i}));else if(d!==u)if(i.hasValue(l)){const S=i.getValue(l);S.liveStyle===!0?S.jump(u):S.hasAnimated||S.set(u)}else{const S=i.getStaticValue(l);i.addValue(l,xo(S!==void 0?S:u,{owner:i}))}}for(const l in r)n[l]===void 0&&i.removeValue(l);return n}const sm=new WeakMap,_I=[...Bm,dt,ni],jI=i=>_I.find(Hm(i)),lm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class JI{scrapeMotionValuesFromProps(n,r,l){return{}}constructor({parent:n,props:r,presenceContext:l,reducedMotionConfig:u,blockInitialAnimation:d,visualState:S},E={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=$u,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=ra.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,ve.render(this.render,!1,!0))};const{latestValues:T,renderState:h}=S;this.latestValues=T,this.baseTarget={...T},this.initialValues=r.initial?{...T}:{},this.renderState=h,this.parent=n,this.props=r,this.presenceContext=l,this.depth=n?n.depth+1:0,this.reducedMotionConfig=u,this.options=E,this.blockInitialAnimation=!!d,this.isControllingVariants=Bs(r),this.isVariantNode=PR(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:f,...R}=this.scrapeMotionValuesFromProps(r,{},this);for(const C in R){const I=R[C];T[C]!==void 0&&At(I)&&I.set(T[C],!1)}}mount(n){this.current=n,sm.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,l)=>this.bindToMotionValue(l,r)),xR.current||YI(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Yu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){sm.delete(this.current),this.projection&&this.projection.unmount(),ii(this.notifyUpdate),ii(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(n,r){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const l=bi.has(n),u=r.on("change",E=>{this.latestValues[n]=E,this.props.onUpdate&&ve.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0)}),d=r.on("renderRequest",this.scheduleRender);let S;window.MotionCheckAppearSync&&(S=window.MotionCheckAppearSync(this,n,r)),this.valueSubscriptions.set(n,()=>{u(),d(),S&&S(),r.owner&&r.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Dn){const r=Dn[n];if(!r)continue;const{isEnabled:l,Feature:u}=r;if(!this.features[n]&&u&&l(this.props)&&(this.features[n]=new u(this)),this.features[n]){const d=this.features[n];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ze()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,r){this.latestValues[n]=r}update(n,r){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let l=0;l<lm.length;l++){const u=lm[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const d="on"+u,S=n[d];S&&(this.propEventSubscriptions[u]=this.on(u,S))}this.prevMotionValues=zI(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(n),()=>r.variantChildren.delete(n)}addValue(n,r){const l=this.values.get(n);r!==l&&(l&&this.removeValue(n),this.bindToMotionValue(n,r),this.values.set(n,r),this.latestValues[n]=r.get())}removeValue(n){this.values.delete(n);const r=this.valueSubscriptions.get(n);r&&(r(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,r){if(this.props.values&&this.props.values[n])return this.props.values[n];let l=this.values.get(n);return l===void 0&&r!==void 0&&(l=xo(r===null?void 0:r,{owner:this}),this.addValue(n,l)),l}readValue(n,r){var l;let u=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(l=this.getBaseTargetFromProps(this.props,n))!==null&&l!==void 0?l:this.readValueFromInstance(this.current,n,this.options);return u!=null&&(typeof u=="string"&&(Lm(u)||Im(u))?u=parseFloat(u):!jI(u)&&ni.test(r)&&(u=xm(n,r)),this.setBaseTarget(n,At(u)?u.get():u)),At(u)?u.get():u}setBaseTarget(n,r){this.baseTarget[n]=r}getBaseTarget(n){var r;const{initial:l}=this.props;let u;if(typeof l=="string"||typeof l=="object"){const S=_u(this.props,l,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);S&&(u=S[n])}if(l&&u!==void 0)return u;const d=this.getBaseTargetFromProps(this.props,n);return d!==void 0&&!At(d)?d:this.initialValues[n]!==void 0&&u===void 0?void 0:this.baseTarget[n]}on(n,r){return this.events[n]||(this.events[n]=new dS),this.events[n].add(r)}notify(n,...r){this.events[n]&&this.events[n].notify(...r)}}class VR extends JI{constructor(){super(...arguments),this.KeyframeResolver=Vm}sortInstanceNodePosition(n,r){return n.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(n,r){return n.style?n.style[r]:void 0}removeValueFromRenderState(n,{vars:r,style:l}){delete r[n],delete l[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;At(n)&&(this.childSubscription=n.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function ZI(i){return window.getComputedStyle(i)}class XI extends VR{constructor(){super(...arguments),this.type="html",this.renderInstance=DR}readValueFromInstance(n,r){if(bi.has(r)){const l=iS(r);return l&&l.default||0}else{const l=ZI(n),u=(Pm(r)?l.getPropertyValue(r):l[r])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(n,{transformPagePoint:r}){return ER(n,r)}build(n,r,l){yS(n,r,l.transformTemplate)}scrapeMotionValuesFromProps(n,r,l){return CS(n,r,l)}}class qI extends VR{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ze}getBaseTargetFromProps(n,r){return n[r]}readValueFromInstance(n,r){if(bi.has(r)){const l=iS(r);return l&&l.default||0}return r=HR.has(r)?r:AS(r),n.getAttribute(r)}scrapeMotionValuesFromProps(n,r,l){return GR(n,r,l)}build(n,r,l){OS(n,r,this.isSVGTag,l.transformTemplate)}renderInstance(n,r,l,u){BR(n,r,l,u)}mount(n){this.isSVGTag=NS(n.tagName),super.mount(n)}}const QI=(i,n)=>fS(i)?new qI(n):new XI(n,{allowProjection:i!==W.Fragment}),$I=KI({...bO,...uI,...$N,...SI},QI),IS=Bp($I);class eL extends W.Component{getSnapshotBeforeUpdate(n){const r=this.props.childRef.current;if(r&&n.isPresent&&!this.props.isPresent){const l=this.props.sizeRef.current;l.height=r.offsetHeight||0,l.width=r.offsetWidth||0,l.top=r.offsetTop,l.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function tL({children:i,isPresent:n}){const r=W.useId(),l=W.useRef(null),u=W.useRef({width:0,height:0,top:0,left:0}),{nonce:d}=W.useContext(mS);return W.useInsertionEffect(()=>{const{width:S,height:E,top:T,left:h}=u.current;if(n||!l.current||!S||!E)return;l.current.dataset.motionPopId=r;const f=document.createElement("style");return d&&(f.nonce=d),document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${E}px !important;
            top: ${T}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[n]),p.jsx(eL,{isPresent:n,childRef:l,sizeRef:u,children:W.cloneElement(i,{ref:l})})}const aL=({children:i,initial:n,isPresent:r,onExitComplete:l,custom:u,presenceAffectsLayout:d,mode:S})=>{const E=gS(iL),T=W.useId(),h=W.useCallback(R=>{E.set(R,!0);for(const C of E.values())if(!C)return;l&&l()},[E,l]),f=W.useMemo(()=>({id:T,initial:n,isPresent:r,custom:u,onExitComplete:h,register:R=>(E.set(R,!1),()=>E.delete(R))}),d?[Math.random(),h]:[r,h]);return W.useMemo(()=>{E.forEach((R,C)=>E.set(C,!1))},[r]),W.useEffect(()=>{!r&&!E.size&&l&&l()},[r]),S==="popLayout"&&(i=p.jsx(tL,{isPresent:r,children:i})),p.jsx(Ds.Provider,{value:f,children:i})};function iL(){return new Map}const As=i=>i.key||"";function cm(i){const n=[];return W.Children.forEach(i,r=>{W.isValidElement(r)&&n.push(r)}),n}const yu=({children:i,exitBeforeEnter:n,custom:r,initial:l=!0,onExitComplete:u,presenceAffectsLayout:d=!0,mode:S="sync"})=>{const E=W.useMemo(()=>cm(i),[i]),T=E.map(As),h=W.useRef(!0),f=W.useRef(E),R=gS(()=>new Map),[C,I]=W.useState(E),[v,b]=W.useState(E);IR(()=>{h.current=!1,f.current=E;for(let B=0;B<v.length;B++){const x=As(v[B]);T.includes(x)?R.delete(x):R.get(x)!==!0&&R.set(x,!1)}},[v,T.length,T.join("-")]);const M=[];if(E!==C){let B=[...E];for(let x=0;x<v.length;x++){const K=v[x],J=As(K);T.includes(J)||(B.splice(x,0,K),M.push(K))}S==="wait"&&M.length&&(B=M),b(cm(B)),I(E);return}const{forceRender:N}=W.useContext(hS);return p.jsx(p.Fragment,{children:v.map(B=>{const x=As(B),K=E===v||T.includes(x),J=()=>{if(R.has(x))R.set(x,!0);else return;let Q=!0;R.forEach(X=>{X||(Q=!1)}),Q&&(N==null||N(),b(f.current),u&&u())};return p.jsx(aL,{isPresent:K,initial:!h.current||l?void 0:!1,custom:K?void 0:r,presenceAffectsLayout:d,mode:S,onExitComplete:K?void 0:J,children:B},x)})})},nL=IS.div,oL=({onClose:i})=>{var T,h;const n=Di(),r=n.totalTimeMs/1e3,l=r>3600?`${Math.floor(r/3600)}h ${Math.floor(r%3600/60)}m`:r>60?`${Math.floor(r/60)}m ${Math.floor(r%60)}s`:`${Math.floor(r)}s`,u=W.useMemo(()=>In().length+ms().length+Rs().length,[]),d=W.useMemo(()=>{const f=new Set;return[...In(),...ms(),...Rs()].forEach(R=>{R.words.forEach(C=>f.add(C.trim().toUpperCase()))}),f.size},[]),S=W.useMemo(()=>xh.slice().reverse().find(f=>n.totalScore>=f.min)||xh[0],[n.totalScore]),E=W.useMemo(()=>n.levelsCompleted?(n.totalStars/n.levelsCompleted).toFixed(1):"0.0",[n.totalStars,n.levelsCompleted]);return p.jsx("div",{className:"absolute inset-0 z-[600] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 font-oswald",children:p.jsxs(nL,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-6 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex flex-col gap-6",children:[p.jsxs("div",{className:"flex justify-between items-center border-b border-zinc-800 pb-2",children:[p.jsxs("div",{className:"flex flex-col items-start leading-none",children:[p.jsx("h2",{className:"text-3xl font-black text-neon-blue uppercase tracking-tighter italic",children:"HALL OF FAME"}),p.jsxs("span",{className:"text-neon-yellow text-sm font-bold tracking-widest uppercase",children:["RANK: ",S.name]})]}),p.jsx("button",{onClick:i,className:"text-zinc-500 hover:text-white p-2",children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-6",children:[p.jsx(Mo,{label:"TOTAL SCORE",value:n.totalScore.toLocaleString(),color:"text-neon-green"}),p.jsx(Mo,{label:"STARS ACHIEVED",value:`${n.totalStars||0} ★`,color:"text-neon-yellow",isLarge:!0}),p.jsx(Mo,{label:"AVG RATING",value:`${E} ★`,color:"text-zinc-400"}),p.jsx(Mo,{label:"LEVELS BEAT",value:n.levelsCompleted,color:"text-neon-pink"}),p.jsx("div",{className:"col-span-2",children:p.jsx(Mo,{label:"TOTAL TIME PLAYED",value:l,color:"text-white"})})]}),p.jsxs("div",{className:"mt-2 p-3 bg-black/50 border border-zinc-800 rounded-medium flex flex-col gap-4 overflow-y-auto max-h-[40vh] no-scrollbar",children:[p.jsxs("div",{children:[p.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"BROAD CATEGORY MASTERY"}),p.jsxs("div",{className:"text-2xl font-black text-neon-blue leading-none mb-1",children:[((T=n.solvedBroadCategories)==null?void 0:T.length)||0," / ",wh.length]}),p.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-neon-blue shadow-[0_0_10px_#00E5FF]",style:{width:`${Math.min(100,(((h=n.solvedBroadCategories)==null?void 0:h.length)||0)/wh.length*100)}%`}})})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"ROW MASTERY"}),p.jsxs("div",{className:"text-2xl font-black text-neon-yellow leading-none mb-1",children:[n.solvedCategoryIds.length," / ",u]}),p.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-neon-yellow shadow-[0_0_10px_#F9FF00]",style:{width:`${Math.min(100,n.solvedCategoryIds.length/u*100)}%`}})})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"WORD MASTERY"}),p.jsxs("div",{className:"text-2xl font-black text-neon-purple leading-none mb-1",children:[n.solvedWords?n.solvedWords.length:0," / ",d]}),p.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-neon-purple shadow-[0_0_10px_#D400FF]",style:{width:`${Math.min(100,(n.solvedWords?n.solvedWords.length:0)/d*100)}%`}})})]})]}),p.jsx("button",{onClick:i,className:"w-full py-4 bg-white text-black font-black text-xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg mt-auto",children:"BACK TO GAME"})]})})},Mo=({label:i,value:n,color:r,isLarge:l=!1})=>p.jsxs("div",{className:"flex flex-col gap-0.5",children:[p.jsx("span",{className:"text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none",children:i}),p.jsx("span",{className:`${l?"text-2xl":"text-xl"} font-black ${r} tracking-tight`,children:n})]}),LS={textShadow:`
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
  `,paintOrder:"stroke fill",fontWeight:700},rL={textShadow:`
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
  `,paintOrder:"stroke fill",fontWeight:700},sL={textShadow:`
    2px 2px 1.5px #000, 
    -1px -1px 1.2px #000, 
    1px -1px 1.2px #000, 
    -1px 1px 1.2px #000, 
    4px 4px 4px rgba(0,0,0,0.6),
    0 0 18px rgba(0,0,0,0.9)
  `,filter:"drop-shadow(0 0 8px rgba(255,255,255,0.4))",paintOrder:"stroke fill"},lL={neutral:{scale:1,rotate:0,opacity:1,borderWidth:"2px",boxShadow:"0 0 0px rgba(255,255,255,0)",transition:{duration:.4,ease:"easeInOut"}},selected:{scale:1,rotate:0,zIndex:50,borderWidth:"0px",boxShadow:["inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)","inset 0 0 20px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.5)","inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)"],transition:{boxShadow:{repeat:1/0,duration:.6,ease:"easeInOut"},scale:{duration:.2}}},swapping:{scale:1.1,rotate:0,zIndex:60,borderWidth:"0px",transition:{duration:.4,ease:"easeInOut"}},"swap-target":{scale:1.1,rotate:0,zIndex:60,borderWidth:"0px",boxShadow:["inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)","inset 0 0 20px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.5)","inset 0 0 10px rgba(255,255,255,0.4), 0 0 15px rgba(255,255,255,0.2)"],transition:{boxShadow:{repeat:1/0,duration:.6,ease:"easeInOut"},scale:{duration:.4,ease:"easeInOut"}}},solved:{scale:.95,rotate:0,zIndex:5,borderWidth:"2px",transition:{duration:.4,ease:"easeOut"}},hint:{scale:1.05,borderWidth:"4px",borderColor:"#F9FF00",boxShadow:["0 0 0px #F9FF00","0 0 20px #F9FF00","0 0 0px #F9FF00"],transition:{boxShadow:{repeat:1/0,duration:.5}}},wrong:{x:[0,-12,10,-8,6,-4,2,0],transition:{duration:.3,ease:"linear"}},"correct-preview":{scale:1.1,zIndex:25,transition:{yoyo:1/0,duration:.15}},locked:{scale:.95,opacity:.8},"fading-out-bg":{opacity:[.6,1],scale:[.95,1],filter:"brightness(1)",transition:{duration:.2,ease:"easeInOut"}}},cL={initial:{opacity:0,scale:.8},neutral:{opacity:1,scale:1,transition:{duration:.2}},selected:{opacity:1,scale:1,transition:{duration:.2}},solved:{opacity:1,scale:1,transition:{duration:.2}},wrong:{opacity:1,scale:1,transition:{duration:.2}},swapping:{opacity:.7,scale:.9,transition:{duration:.2}},"swap-target":{opacity:.7,scale:.9,transition:{duration:.2}},hint:{opacity:1,scale:1},exit:{opacity:0,scale:.8,transition:{duration:.2}}},uL=(i,n)=>{const r="border-white transition-all duration-200 ";return i==="solved"?r+(n||"bg-zinc-800 shadow-[inset_0_0_15px_rgba(255,255,255,0.95)]"):i==="hint"?r+"bg-zinc-900 border-neon-yellow shadow-[0_0_15px_#F9FF00]":i==="wrong"?r+"bg-neon-red shadow-[0_0_25px_#FF073A]":i==="locked"?r+"border-neon-yellow shadow-[0_0_12px_rgba(249,255,0,0.6)]":i==="correct-preview"?r+"border-neon-green shadow-[0_0_20px_#39FF14]":i==="selected"||i==="swap-target"||i==="swapping"?"border-none":i==="neutral"?r+(n?`${n} border-white/60`:"bg-zinc-900"):r+"bg-black border-zinc-700"},SL=(i,n,r,l,u,d=0)=>{if(n)return d>=7?r?"text-2xl md:text-3xl":"text-3xl md:text-4xl":r?"text-3xl md:text-4xl":"text-4xl md:text-5xl";const S=(i||"").trim().split(/\s+/),E=Math.max(...S.map(f=>f.length)),T=S.length;let h="text-base";return l||u?T>=3||E>8?h="text-[10px] md:text-[11px]":T===2||E>6?h="text-[12px] md:text-[13px]":h="text-[14px] md:text-[16px]":T>=3||E>10?h="text-[10px] md:text-xs":T===2||E>7?h="text-sm md:text-base":h="text-lg md:text-xl",`${h} font-black font-oswald uppercase leading-[1.1] tracking-wide`},Ii=IS,dL={fontFamily:'"Oswald", sans-serif',backfaceVisibility:"hidden"},WR=Gi.forwardRef(({data:i,onClick:n,disabled:r,targetColor:l,isCascade:u,isNarrow:d,rowCount:S,...E},T)=>{const h=i.status==="swapping"||i.status==="swap-target",f=i.status==="solved",R=i.status==="selected",C=i.status==="swapping",I=i.status==="swap-target",v=i.status==="correct-preview",b=i.status==="locked",M=uL(i.status,u||f?i.color||l:void 0),N=SL(i.word,i.isEmoji,f,u,d,S);let B={};R||I||C?B.backgroundColor="#000000":b?B.backgroundColor="#F9FF00":v&&(B.backgroundColor="#39FF14");const x=()=>{if(i.isEmoji)return i.word;const Q=(i.word||"").trim().split(/\s+/);return Q.length<=1?p.jsx("span",{className:"max-w-full truncate",children:i.word}):Q.map((X,j)=>p.jsx("span",{className:"block w-full leading-[1.0] whitespace-nowrap uppercase max-w-full truncate",children:X},j))},K=i.isEmoji?{filter:f?"brightness(1.2)":"none"}:{},J="linear-gradient(to right, #FF073A, #FF5F1F, #F9FF00, #00F000, #00FFFF, #0066FF, #B026FF, #FF1FBF, #FF073A)";return p.jsx("div",{className:"relative w-full h-full flex flex-col items-center justify-center overflow-visible touch-action-manipulation",children:p.jsxs(Ii.div,{layout:!0,ref:T,initial:"neutral",animate:i.status,variants:lL,onClick:()=>!r&&n(i.id),className:`relative w-full flex items-center justify-center cursor-pointer select-none rounded-small z-10 ${M} h-full touch-action-manipulation overflow-hidden`,style:{...dL,...B,boxSizing:"border-box",transition:"background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out"},...E,children:[p.jsx(yu,{children:(R||I||C)&&p.jsx(Ii.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4,ease:"easeInOut"},className:"absolute inset-0 z-0",children:p.jsx(Ii.div,{className:"absolute inset-0",style:{background:I?J:"#FFFFFF",backgroundSize:"200% 100%",animation:I?"rainbow-flow 1.5s linear infinite":"none"},children:p.jsx(Ii.div,{className:"absolute inset-[4px] rounded-[4px]",style:{background:I?"#FFFFFF":J,backgroundSize:"200% 100%",animation:R||C?"rainbow-flow 1.5s linear infinite":"none"},children:p.jsx("div",{className:"absolute inset-[3px] bg-black rounded-[2px]"})})})},"selection-border-container")}),p.jsx(yu,{children:(R||I||h||f)&&p.jsx(Ii.div,{className:"absolute inset-0 pointer-events-none z-20 overflow-hidden",initial:{opacity:0},animate:{opacity:h?.9:R||I?[.3,.5,.3]:.4},transition:R||I?{duration:.75,repeat:1/0,ease:"easeInOut"}:{duration:.2},exit:{opacity:0},children:p.jsx(Ii.div,{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%]",animate:{x:["-100%","100%"]},transition:{duration:h?.2:R||I?1:1.25,repeat:1/0,ease:"linear"},style:{skewX:"-25deg"}})})}),p.jsx(yu,{mode:"wait",children:p.jsx(Ii.span,{variants:cL,initial:"initial",animate:i.status,exit:"exit",className:`${N} text-white z-30 text-center px-2 pointer-events-none w-full flex flex-col items-center justify-center max-w-full`,style:{...i.isEmoji?sL:u?rL:LS,...K,maxHeight:"100%"},children:x()},i.word)})]})})});WR.displayName="Tile";const AL=Gi.memo(WR),EL=({text:i,sizeClass:n="text-2xl",className:r="",active:l=!0,gradient:u="#00E5FF"})=>{const d="white",S="black";return p.jsx("div",{className:`relative inline-block ${r} ${l?"":"opacity-40 grayscale contrast-125"}`,children:p.jsx("span",{className:`${n} font-black uppercase font-oswald leading-none tracking-tight select-none px-[3px]`,style:{color:u,textShadow:`
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
          `,display:"block"},children:i})})},hL=Gi.memo(EL),TL=({path:i,viewBox:n="0 0 24 24",className:r="",active:l=!0,sizeClass:u="w-8 h-8",color:d="#F9FF00"})=>p.jsxs("div",{className:`relative ${u} ${r} transition-opacity duration-300`,children:[p.jsx("svg",{viewBox:n,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:0},children:p.jsx("path",{d:i,fill:"white",stroke:"white",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"})}),p.jsx("svg",{viewBox:n,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:10},children:p.jsx("path",{d:i,fill:"black",stroke:"black",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),p.jsx("svg",{viewBox:n,className:"relative w-full h-full overflow-visible",style:{zIndex:20},children:p.jsx("path",{d:i,fill:l?d:"#555555",className:"transition-colors duration-300"})})]}),Ou=["#FF073A","#FF5F1F","#F9FF00","#39FF14","#00F000","#00FF9F","#00FFFF","#00BFFF","#0066FF","#B026FF","#D400FF","#FF00FF","#FF1FBF","#FF0055"],mL=({modeName:i,levelIndex:n,onOpenSettings:r,isReviewing:l,onNext:u,hintsEnabled:d,onToggleHints:S,children:E,leftContent:T,rowsLeft:h,stars:f})=>{const R="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84a.484.484 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 0 0-.59.22L2.65 8.91a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.27.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6-1.62 3.6-3.6 3.6z",C=["#ffffff"],I=C[n%C.length],[v,b]=W.useState(0);return W.useEffect(()=>{if(l){b(Math.floor(Math.random()*Ou.length));const M=setInterval(()=>{b(N=>(N+1)%Ou.length)},1500);return()=>clearInterval(M)}},[l]),p.jsxs("header",{className:"relative flex flex-col justify-between px-2 sm:px-4 shrink-0 z-[10] bg-black select-none w-full overflow-hidden border-b border-zinc-900 transition-all duration-300 ease-in-out",style:{minHeight:Mg},children:[p.jsxs("div",{className:"flex items-center justify-end w-full py-[5px] md:py-[5px]",children:[T,p.jsxs("div",{className:"flex items-center gap-1 flex-grow justify-end",children:[p.jsxs("span",{className:"text-xs md:text-sm text-zinc-500 font-black uppercase tracking-tight font-oswald whitespace-nowrap",children:["LVL ",n]}),h!==void 0&&p.jsxs("span",{className:"text-xs md:text-sm text-neon-blue font-black uppercase border-l border-zinc-800 pl-1 font-oswald whitespace-nowrap",children:["ROWS: ",h]}),p.jsx(hL,{text:i,sizeClass:"text-2xl md:text-3xl",gradient:I,className:"whitespace-nowrap ml-1"})]}),p.jsx("div",{className:"flex items-center ml-auto",children:p.jsx("button",{onClick:r,className:"transform transition-transform active:scale-90 p-0.5",children:p.jsx(TL,{path:R,active:!0,sizeClass:"w-8 h-8",color:"#FFFFFF"})})})]}),l&&u&&p.jsxs("div",{className:"flex flex-col items-center justify-center py-4 md:py-6 w-full gap-4",children:[p.jsx("button",{onClick:u,className:"px-10 py-5 text-white font-black font-oswald text-3xl md:text-4xl uppercase rounded-medium border-4 border-white shadow-[0_0_25px_rgba(255,255,255,0.6)] active:scale-95 animate-border-pulse transition-colors duration-[1500ms] ease-linear",style:{...LS,backgroundColor:Ou[v]},children:"NEXT LEVEL"}),p.jsx("div",{className:"flex gap-3 animate-pop",children:[1,2,3].map(M=>p.jsx("span",{className:`text-5xl md:text-6xl transition-all duration-700 ${M<=(f||0)?"text-neon-yellow scale-110 drop-shadow-[0_0_15px_rgba(249,255,0,0.9)]":"text-zinc-800 opacity-20 scale-90"}`,style:{textShadow:M<=(f||0)?`
                        -1.5px -1.5px 0 #FFF, 1.5px -1.5px 0 #FFF, -1.5px 1.5px 0 #FFF, 1.5px 1.5px 0 #FFF,
                        -3.5px -3.5px 0 #000, 3.5px -3.5px 0 #000, -3.5px 3.5px 0 #000, 3.5px 3.5px 0 #000,
                        0 0 10px #F9FF00, 0 0 20px #F9FF00
                      `:"none"},children:"★"},M))})]}),p.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[2px] bg-[linear-gradient(to_right,#FF073A,#FF5F1F,#F9FF00,#00F000,#00FFFF,#0066FF,#B026FF,#FF1FBF,#FF073A)]",style:{backgroundSize:"200% 100%",animation:"rainbow-flow 3s linear infinite"}})]})},RL=Gi.memo(mL),KR=[{id:"t0",word:"APPLE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t1",word:"BANANA",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t2",word:"GRAPE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t3",word:"DOG",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t4",word:"CAT",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t5",word:"LION",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t6",word:"TIGER",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t7",word:"PEAR",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t8",word:"RED",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t9",word:"BLUE",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t10",word:"GREEN",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t11",word:"YELLOW",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t12",word:"HAMMER",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t13",word:"DRILL",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t14",word:"SAW",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t15",word:"WRENCH",categoryId:"tool",categoryName:"TOOL",status:"neutral"}],fL=()=>{const i=JSON.parse(JSON.stringify(KR)),n=i[10];i[10]=i[13],i[13]=n;const r=i[11];return i[11]=i[12],i[12]=r,i},CL=i=>i===oe.CLASSIC?"CLASSIC GRID":i===oe.LEVEL_EMOJI?"EMOJI MATCH":i===oe.LEVEL_SYNONYMS?"SYNONYMS":i===oe.LEVEL_THEMED?"THEMED":i===oe.LEVEL_MIND_MATCH?"MIND MATCH":"TUTORIAL",gL=({mode:i,onComplete:n})=>{const r=i===oe.CLASSIC||i===oe.LEVEL_EMOJI||i===oe.LEVEL_THEMED||i===oe.LEVEL_SYNONYMS,[l,u]=W.useState(1),[d,S]=W.useState(r?fL():KR),E=W.useRef(new Map),T=async(f,R)=>{const C=E.current.get(f),I=E.current.get(R);if($t.playSwap(),C&&I){const v=C.getBoundingClientRect(),b=I.getBoundingClientRect(),M=b.left-v.left,N=b.top-v.top;C.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",C.style.transform=`translate(${M}px, ${N}px) scale(1.1)`,C.style.zIndex="50",C.style.boxShadow="0 10px 20px rgba(0,0,0,0.5)",I.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",I.style.transform=`translate(${-M}px, ${-N}px) scale(0.9)`,I.style.zIndex="40",await new Promise(B=>setTimeout(B,400)),C.style.transition="",C.style.transform="",C.style.zIndex="",C.style.boxShadow="",I.style.transition="",I.style.transform="",I.style.zIndex=""}};W.useEffect(()=>{if(!r)return;let f=!0;return(async()=>{if(await new Promise(M=>setTimeout(M,600)),!f)return;const C="t13",I="t10";if(await new Promise(M=>setTimeout(M,300)),!f||(S(M=>M.map(N=>N.id===C?{...N,status:"selected"}:N)),$t.playSelect(),await new Promise(M=>setTimeout(M,400)),!f)||(S(M=>M.map(N=>N.id===I?{...N,status:"swap-target"}:N)),$t.playSelect(),await new Promise(M=>setTimeout(M,200)),!f)||(await T(C,I),S(M=>{const N=[...M],B=N.findIndex(K=>K.id===C),x=N.findIndex(K=>K.id===I);return[N[B],N[x]]=[N[x],N[B]],N[B]={...N[B],status:"neutral"},N[x]={...N[x],status:"neutral"},N}),await new Promise(M=>setTimeout(M,400)),!f))return;const v="t12",b="t11";await new Promise(M=>setTimeout(M,300)),f&&(S(M=>M.map(N=>N.id===v?{...N,status:"selected"}:N)),$t.playSelect(),await new Promise(M=>setTimeout(M,400)),f&&(S(M=>M.map(N=>N.id===b?{...N,status:"swap-target"}:N)),$t.playSelect(),await new Promise(M=>setTimeout(M,200)),f&&(await T(v,b),S(M=>{const N=[...M],B=N.findIndex(K=>K.id===v),x=N.findIndex(K=>K.id===b);return[N[B],N[x]]=[N[x],N[B]],N[B]={...N[B],status:"neutral"},N[x]={...N[x],status:"neutral"},N}),await new Promise(M=>setTimeout(M,400)),f&&($t.playRowSolved(),S(M=>M.map((N,B)=>B>=8&&B<12?{...N,status:"solved",color:"bg-neon-green border-white"}:B>=12?{...N,status:"solved",color:"bg-neon-yellow border-white"}:N)),u(4),await new Promise(M=>setTimeout(M,600)),f&&($t.playSelect(),S(M=>M.map(N=>N.id==="t3"?{...N,status:"selected"}:N)),u(5),await new Promise(M=>setTimeout(M,800)),f&&($t.playSelect(),S(M=>M.map(N=>N.id==="t7"?{...N,status:"swap-target"}:N)),await new Promise(M=>setTimeout(M,200)),await T("t3","t7"),S(M=>{const N=[...M],B=N.findIndex(K=>K.id==="t3"),x=N.findIndex(K=>K.id==="t7");return[N[B],N[x]]=[N[x],N[B]],N[B]={...N[B],status:"neutral"},N[x]={...N[x],status:"neutral"},N}),await new Promise(M=>setTimeout(M,300)),f&&($t.playRowSolved(),$t.playWin(),S(M=>M.map((N,B)=>B<4?{...N,status:"solved",color:"bg-neon-blue border-white"}:B>=4&&B<8?{...N,status:"solved",color:"bg-neon-pink border-white"}:B>=8&&B<12?{...N,status:"solved",color:"bg-neon-green border-white"}:B>=12?{...N,status:"solved",color:"bg-neon-yellow border-white"}:N)),await new Promise(M=>setTimeout(M,800)),f&&(u(7),await new Promise(M=>setTimeout(M,2500)),f&&u(8)))))))))})(),()=>{f=!1}},[r]),W.useEffect(()=>{if(!r){const f=setTimeout(()=>{n()},3e3);return()=>clearTimeout(f)}},[r,n]);const h=()=>{var R;const f=[];for(let C=0;C<4;C++){const I=d.slice(C*4,C*4+4),v=I.every(N=>N.status==="solved"),b=(R=I[0])==null?void 0:R.categoryName;f.push(p.jsx("div",{className:"relative w-full z-10 flex flex-col justify-center min-h-0 flex-1 overflow-visible",children:p.jsxs("div",{className:"relative w-full h-full p-1",children:[v&&p.jsx("div",{className:"absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-medium"}),v&&p.jsx("div",{className:"absolute top-0 left-6 z-[100] transform",style:{transform:"translateY(calc(-100% + 4px))"},children:p.jsx("div",{className:"animate-pop bg-black text-white px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] font-oswald",children:b})}),p.jsx("div",{className:`grid grid-cols-4 gap-2 w-full h-full relative z-10 transition-all duration-300 ${v?"drop-shadow-xl p-3":""}`,children:I.map(N=>p.jsx("div",{className:"relative w-full h-full",children:p.jsx(AL,{data:N,"data-tile-id":N.id,onClick:()=>{},disabled:!0,ref:B=>{B?E.current.set(N.id,B):E.current.delete(N.id)}})},N.id))})]})},C))}return f};return p.jsxs("div",{className:"absolute inset-0 z-[200] bg-black flex flex-col font-oswald animate-fade-in",children:[p.jsx(RL,{modeName:CL(i),levelIndex:1,onOpenSettings:()=>{},isReviewing:!1,hintsEnabled:!0,onManualHint:()=>{},onToggleHints:()=>{}}),p.jsx("div",{className:"flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden",children:p.jsxs("div",{className:`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${l>=6?"blur-sm opacity-40 scale-95":""}`,children:[p.jsx("div",{className:"w-full max-w-sm aspect-square max-h-[55vh] bg-zinc-900/50 rounded-xl p-2 mb-4 border-2 border-zinc-700 relative flex flex-col shrink-0 shadow-2xl overflow-visible mt-8",children:p.jsx("div",{className:"w-full h-full flex flex-col gap-1",children:h()})}),p.jsxs("div",{className:"h-16 flex items-center justify-center mb-4 shrink-0 w-full px-4",children:[l===1&&p.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop shadow-lg text-center",children:p.jsx("p",{className:"text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"FIND 4 TILES THAT BELONG TOGETHER"})}),(l===2||l===3)&&p.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-neon-blue animate-fade-in shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center",children:p.jsx("p",{className:"text-neon-blue font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"SWAP TO MAKE A MATCH"})})]}),p.jsx("button",{onClick:n,className:`text-zinc-500 font-oswald text-sm uppercase tracking-widest hover:text-white transition-colors mt-auto pb-4 ${l>=6?"opacity-0 pointer-events-none":""}`,children:"SKIP TUTORIAL"})]})}),l===7&&p.jsx("div",{className:"absolute top-[60px] right-[10px] z-[220] animate-bounce",children:p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-blue absolute -top-2 right-2"}),p.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-blue text-center shadow-[0_0_15px_rgba(0,229,255,0.3)]",children:p.jsx("p",{className:"text-neon-blue font-oswald text-sm font-bold uppercase",children:"SETTINGS"})})]})}),l===8&&p.jsx("div",{className:"absolute inset-0 z-[210] flex items-center justify-center",children:p.jsx("button",{onClick:n,className:"px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop",children:"START"})})]})},pL=IS.div,yL=({isOpen:i,onClose:n,selectedIds:r,onToggle:l})=>{const[u,d]=W.useState(""),S=W.useMemo(()=>[...In(),...ms(),...Rs()].sort((C,I)=>C.name.localeCompare(I.name)),[]),E=W.useMemo(()=>{if(!u.trim())return S;const R=u.toUpperCase();return S.filter(C=>C.name.toUpperCase().includes(R))},[u,S]),T=R=>{r.includes(R)?l(r.filter(C=>C!==R)):l([...r,R])},h=()=>{l(S.map(R=>R.id))},f=()=>{l([])};return i?p.jsx("div",{className:"absolute inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald",children:p.jsxs(pL,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col gap-3 overflow-hidden h-[90vh]",children:[p.jsxs("div",{className:"flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[p.jsx("h2",{className:"text-xl font-black text-neon-yellow uppercase tracking-widest italic drop-shadow-[0_0_5px_rgba(249,255,0,0.8)]",children:"MANAGE POOL"}),p.jsx("button",{className:"text-zinc-400 hover:text-white transition-colors p-1",onClick:n,children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),p.jsx("p",{className:"text-[10px] text-zinc-500 font-bold uppercase tracking-wider leading-tight px-1",children:"Select categories you want to appear in your puzzles. If empty, the full global pool is used."}),p.jsx("div",{className:"flex gap-2 shrink-0",children:p.jsx("input",{type:"text",placeholder:"SEARCH CATEGORIES...",value:u,onChange:R=>d(R.target.value),className:"flex-1 bg-black border-2 border-zinc-800 rounded-medium px-3 py-2 text-white font-bold text-xs focus:border-neon-blue outline-none transition-colors"})}),p.jsxs("div",{className:"flex gap-2 shrink-0",children:[p.jsx("button",{onClick:h,className:"flex-1 py-1.5 bg-zinc-900 border border-zinc-700 text-[9px] font-black uppercase text-zinc-400 rounded-small hover:text-white transition-colors",children:"Select All"}),p.jsx("button",{onClick:f,className:"flex-1 py-1.5 bg-zinc-900 border border-zinc-700 text-[9px] font-black uppercase text-zinc-400 rounded-small hover:text-white transition-colors",children:"Clear All"})]}),p.jsx("div",{className:"flex-1 overflow-y-auto no-scrollbar pr-1 flex flex-col gap-1.5 bg-black/40 rounded-medium p-1",children:E.length===0?p.jsx("div",{className:"py-10 text-center text-zinc-700 font-bold uppercase text-xs",children:"No results found"}):E.map(R=>{const C=r.includes(R.id);return p.jsxs("button",{onClick:()=>T(R.id),className:`w-full flex items-center justify-between px-3 py-2.5 rounded-medium border-2 transition-all ${C?"bg-zinc-900 border-neon-blue text-white shadow-[0_0_8px_rgba(0,229,255,0.2)]":"bg-black border-zinc-800 text-zinc-600"}`,children:[p.jsx("span",{className:"font-bold text-[11px] uppercase tracking-tight truncate mr-2",children:R.name}),p.jsx("div",{className:`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${C?"border-neon-blue bg-neon-blue shadow-[0_0_5px_#00E5FF]":"border-zinc-800"}`,children:C&&p.jsx("span",{className:"text-[10px] text-black font-black",children:"✓"})})]},R.id)})}),p.jsx("div",{className:"pt-2 border-t border-zinc-800 shrink-0",children:p.jsxs("button",{onClick:n,className:"w-full py-3 bg-white text-black font-black text-lg uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_15px_white]",style:LS,children:["CONFIRM POOL (",r.length,")"]})})]})}):null},OL=()=>p.jsxs("footer",{className:"relative w-full bg-black flex flex-col items-center justify-center shrink-0 z-[60] border-t border-zinc-900",style:{height:Pg},children:[p.jsx("div",{className:"absolute top-0 left-0 w-full h-[4px] bg-[linear-gradient(to_right,#FF073A,#FF5F1F,#F9FF00,#00F000,#00FFFF,#0066FF,#B026FF,#FF1FBF,#FF073A)]",style:{backgroundSize:"200% 100%",animation:"rainbow-flow 3s linear infinite"}}),p.jsx("div",{className:"w-full h-full bg-black flex items-center justify-center overflow-hidden",children:p.jsx("div",{className:"text-zinc-800 font-bold text-[8px] uppercase tracking-tighter opacity-20 select-none",children:"Ad Space"})})]}),NL=Gi.memo(OL),IL=()=>p.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"env(safe-area-inset-top, 0px)"}}),LL=()=>p.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"env(safe-area-inset-bottom, 16px)"}}),ML=W.lazy(()=>Pa(()=>import("./Level1_Standard-FeWySiXN.js"),__vite__mapDeps([0,1,2,3]))),PL=W.lazy(()=>Pa(()=>import("./Level1_Emoji-CEo39VIy.js"),__vite__mapDeps([4,1,2,3]))),DL=W.lazy(()=>Pa(()=>import("./Level2_Filter-BPhdIndR.js"),__vite__mapDeps([5,2,3]))),HL=W.lazy(()=>Pa(()=>import("./Level5_Group-CmsKmfMy.js"),__vite__mapDeps([6,3]))),BL=W.lazy(()=>Pa(()=>import("./Level7_Expansion-Bopvxbd7.js"),__vite__mapDeps([7,1,2,3]))),vL=W.lazy(()=>Pa(()=>import("./Level7_Expansion_Easy-D_8m-qdw.js"),__vite__mapDeps([8,1,2,3]))),GL=W.lazy(()=>Pa(()=>import("./Level7_Expansion_Medium-Dia1buj1.js"),__vite__mapDeps([9,1,2,3]))),bL=W.lazy(()=>Pa(()=>import("./Level8_Cascade-CvytEi2m.js"),__vite__mapDeps([10,2,3]))),FL="ca-app-pub-4096368901415767/2019330695",UL="ca-app-pub-4096368901415767/1153913539",kL=()=>{try{const i=document.createElement("div");i.style.height="env(safe-area-inset-bottom, 0px)",i.style.visibility="hidden",i.style.position="absolute",document.body.appendChild(i);const n=i.offsetHeight;return document.body.removeChild(i),Math.max(n,16)}catch{return 16}};class wL extends Gi.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){console.error("Game crashed:",n,r)}render(){return this.state.hasError?p.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center",children:[p.jsx("h1",{className:"text-3xl font-bold mb-4 font-oswald text-red-500 uppercase text-red-500",children:"System Error"}),p.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-white text-black font-bold rounded-full uppercase font-oswald border-2 border-white",children:"Reboot"})]}):this.props.children}}const um=()=>p.jsx("div",{className:"flex items-center justify-center h-full w-full bg-black",children:p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"})}),xL=()=>{const[i,n]=W.useState(oe.MENU),[r,l]=W.useState(1),[u,d]=W.useState(!0),[S,E]=W.useState(!1),[T,h]=W.useState(!1),[f,R]=W.useState(!1),[C,I]=W.useState(!0),[v,b]=W.useState(!1),[M,N]=W.useState([]),[B,x]=W.useState(!1),[K,J]=W.useState(null),[Q,X]=W.useState([]),[j,se]=W.useState([]),[le,Ne]=W.useState(!1),[ue,Fe]=W.useState(null),[Ve,We]=W.useState(void 0),[U,z]=W.useState(!1),[$,Re]=W.useState(!1);W.useEffect(()=>{l(Bg()),X(Gg()),se(Fg())},[]),W.useEffect(()=>{(async()=>{if(Bi.isNativePlatform())try{await ti.initialize({});const ee=await ti.requestConsentInfo();ee.isConsentFormAvailable&&ee.status===Mu.REQUIRED&&await ti.showConsentForm(),ee.privacyOptionsRequirementStatus==="REQUIRED"&&z(!0),await ti.showBanner({adId:FL,adSize:Lu.BANNER,position:Iu.BOTTOM_CENTER,margin:kL(),isTesting:!1})}catch(ee){console.error("AdMob failed:",ee)}})()},[]),W.useEffect(()=>{const Y=mp(r,Q,j,Ve);Fe(Y)},[r,Q,j,Ve]),W.useEffect(()=>{i!==oe.MENU&&!kg()&&b(!0)},[i]),W.useEffect(()=>{if(le&&B){const Y=setTimeout(()=>{y()},3e3);return()=>clearTimeout(Y)}},[le,B]);const Se=Y=>{var pt;if(Y.failed){x(!0),J({levelIndex:r,mode:i,timeMs:Y.timeMs,moves:Y.moves,mistakes:Y.mistakes||0,score:0,stars:0,difficulty:0,solvedCategoryIds:[],solvedWords:[],broadCategories:[]});return}const ee=Y.timeMs/1e3;let te=0;ee<=90?te=3:ee<=120?te=2:te=1;const he=((pt=Y.solvedWords)==null?void 0:pt.length)||0,Ge=(ue==null?void 0:ue.data.reduce((yt,Zt)=>yt+(Zt.difficulty||1),0))/((ue==null?void 0:ue.data.length)||1),De=te===3?1.5:te===2?1.2:1,Ft=Math.floor(he*Ge*De);J({levelIndex:r,mode:i,timeMs:Y.timeMs,moves:Y.moves,mistakes:Y.mistakes||0,score:Ft,stars:te,difficulty:Ge,solvedCategoryIds:Y.solvedCategoryIds||[],solvedWords:Y.solvedWords||[],broadCategories:(ue==null?void 0:ue.data.map(yt=>yt.broadCategory||"General"))||[]}),x(!0)},y=async()=>{const Y=Di().totalStars;K&&K.score>0&&xg({levelsCompleted:1,totalMoves:K.moves,totalTimeMs:K.timeMs,rowsSolved:K.solvedCategoryIds.length,solvedCategoryIds:K.solvedCategoryIds,solvedWords:K.solvedWords,totalScore:K.score,totalStars:K.stars,lastLevelStars:K.stars,lastLevelDifficulty:K.difficulty,lastLevelBroadCategories:K.broadCategories});const ee=Di().totalStars;(Y<20&&ee>=20||Y<50&&ee>=50)&&(Re(!0),setTimeout(()=>Re(!1),3500)),Bi.isNativePlatform()&&(await ti.showInterstitial().catch(()=>{}),await ti.prepareInterstitial({adId:UL,isTesting:!1}).catch(()=>{}));const te=r+1;l(te),vg(te),We(void 0),n(Nu(te,Q)),x(!1),J(null)},V=()=>{if(i===oe.MENU)return p.jsx(Mp,{onStart:()=>n(Ve||(ue?ue.mode:Nu(r,Q))),onSettings:()=>E(!0),onStats:()=>h(!0),lastLevel:r});if(!ue||ue.mode!==i)return p.jsx(um,{});const{data:Y,themeName:ee}=ue,te=Y.reduce((yt,Zt)=>yt+(Zt.difficulty||1),0)/Y.length,he={};Y.forEach(yt=>{const Zt=yt.broadCategory||"General";he[Zt]=(he[Zt]||0)+1});const Ge=Object.entries(he).sort((yt,Zt)=>Zt[1]-yt[1])[0][0],De=Di().totalStars,Ft=B&&K?De-K.stars:De,pt=Ft<20?"easy":Ft<50?"med":"hard";return p.jsx(W.Suspense,{fallback:p.jsx(um,{}),children:(()=>{switch(i){case oe.LEVEL_EXPANSION:return Ft<20?p.jsx(vL,{csvData:Y,levelIndex:r,onComplete:Se,hintsEnabled:C,setHintsEnabled:I,onOpenSettings:()=>E(!0),isReviewing:B,onNext:y,isAutoPlaying:le,stars:K==null?void 0:K.stars},`exp-easy-${r}`):Ft<50?p.jsx(GL,{csvData:Y,levelIndex:r,onComplete:Se,hintsEnabled:C,setHintsEnabled:I,onOpenSettings:()=>E(!0),isReviewing:B,onNext:y,isAutoPlaying:le,stars:K==null?void 0:K.stars},`exp-med-${r}`):p.jsx(BL,{csvData:Y,levelIndex:r,onComplete:Se,hintsEnabled:C,setHintsEnabled:I,onOpenSettings:()=>E(!0),isReviewing:B,onNext:y,isAutoPlaying:le,stars:K==null?void 0:K.stars},`exp-hard-${r}`);case oe.CLASSIC:case oe.LEVEL_THEMED:case oe.LEVEL_SYNONYMS:return p.jsx(ML,{csvData:Y,mode:i,levelIndex:r,difficulty:te,category:Ge,onComplete:Se,onExit:()=>n(oe.MENU),hintsEnabled:C,setHintsEnabled:I,onOpenSettings:()=>E(!0),isReviewing:B,onNext:y,isAutoPlaying:le,themeName:ee,stars:K==null?void 0:K.stars},`std-${pt}-${r}`);case oe.LEVEL_EMOJI:return p.jsx(PL,{csvData:Y,levelIndex:r,difficulty:te,category:Ge,onComplete:Se,onExit:()=>n(oe.MENU),hintsEnabled:C,setHintsEnabled:I,onOpenSettings:()=>E(!0),isReviewing:B,onNext:y,isAutoPlaying:le,stars:K==null?void 0:K.stars},`emo-${pt}-${r}`);case oe.LEVEL_MIND_MATCH:return p.jsx(HL,{csvData:Y,levelIndex:r,difficulty:te,category:Ge,onComplete:Se,onExit:()=>n(oe.MENU),hintsEnabled:C,setHintsEnabled:I,onOpenSettings:()=>E(!0),isReviewing:B,onNext:y,isAutoPlaying:le,stars:K==null?void 0:K.stars},`mm-${pt}-${r}`);case oe.LEVEL_CASCADE:return p.jsx(bL,{csvData:Y,levelIndex:r,difficulty:te,category:Ge,onComplete:Se,onExit:()=>n(oe.MENU),hintsEnabled:C,onOpenSettings:()=>E(!0),setHintsEnabled:I,isReviewing:B,onNext:y,isAutoPlaying:le,stars:K==null?void 0:K.stars},`cas-${pt}-${r}`);default:return p.jsx(DL,{csvData:Y,levelIndex:r,difficulty:te,category:Ge,onComplete:Se,onGameOver:()=>Se({timeMs:0,moves:0,failed:!0}),onExit:()=>n(oe.MENU),hintsEnabled:C,setHintsEnabled:I,onOpenSettings:()=>E(!0),isReviewing:B,onNext:y,isAutoPlaying:le,stars:K==null?void 0:K.stars},`filt-${pt}-${r}`)}})()})},_=Di().totalStars;return p.jsx(wL,{children:p.jsxs("div",{className:"fixed inset-0 h-full w-screen bg-black text-white font-oswald flex flex-col overflow-hidden",children:[p.jsx(IL,{}),$&&p.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-[5000] pointer-events-none p-6",children:p.jsxs("div",{className:`bg-black border-4 border-[#00FFFF] px-10 py-8 rounded-3xl 
                            shadow-[0_0_30px_#00FFFF,inset_0_0_20px_#00FFFF] 
                            flex flex-col items-center justify-center text-center
                            animate-pop`,children:[p.jsx("span",{className:"text-6xl mb-4 drop-shadow-[0_0_10px_#FF00FF]",children:"🚀"}),p.jsxs("h2",{className:"text-[#00FFFF] font-black text-5xl md:text-6xl uppercase italic leading-none font-oswald tracking-tighter drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]",children:[_>=50?"Mastery":"Difficulty",p.jsx("br",{}),p.jsx("span",{className:"text-white text-4xl md:text-5xl",children:"Unlocked"})]}),p.jsx("div",{className:"mt-6 bg-[#FF00FF] px-4 py-1 skew-x-[-12deg] shadow-[4px_4px_0px_#00FFFF]",children:p.jsx("p",{className:"text-black font-black text-lg md:text-xl uppercase italic font-oswald skew-x-[12deg]",children:_>=50?"7-Row Grid Activated":"Medium Mode Active"})})]})}),p.jsxs("div",{className:"flex-1 relative flex flex-col min-h-0 w-full overflow-hidden",children:[V(),v&&p.jsx(gL,{mode:i,onComplete:()=>{wg(),b(!1)}})]}),p.jsx(NL,{}),p.jsx(LL,{}),S&&p.jsx(Hp,{isOpen:S,onClose:()=>E(!1),onMainMenu:()=>{We(void 0),E(!1),n(oe.MENU)},isMusicOn:u,toggleMusic:()=>{d(!u),$t.setSound(!u)},enabledModes:Q,toggleMode:Y=>{let ee=Q.includes(Y)?Q.length>1?Q.filter(te=>te!==Y):Q:[...Q,Y];X(ee),bg(ee)},onSelectMode:Y=>{We(Y),n(Y),E(!1)},hintsEnabled:C,setHintsEnabled:I,isAutoPlaying:le,onToggleAutoPlay:()=>Ne(!le),onShowTutorial:()=>b(!0),onResetProgress:()=>{localStorage.clear(),window.location.reload()},categories:M,privacyOptionsRequired:U,onShowPrivacyOptions:async()=>{Bi.isNativePlatform()&&await ti.showPrivacyOptionsForm().catch(()=>{})}}),f&&p.jsx(yL,{isOpen:f,onClose:()=>R(!1),selectedIds:j,onToggle:Y=>{se(Y),Ug(Y)}}),T&&p.jsx(oL,{onClose:()=>h(!1)})]})})},YR=document.getElementById("root");if(!YR)throw new Error("Could not find root element to mount to");const VL=Ng.createRoot(YR);VL.render(p.jsx(Gi.StrictMode,{children:p.jsx(xL,{})}));export{LS as A,oe as G,RL as H,Gi as R,WL as T,Em as W,$t as a,AL as b,Mu as c,KL as g,p as j,IS as m,W as r,rp as s};
