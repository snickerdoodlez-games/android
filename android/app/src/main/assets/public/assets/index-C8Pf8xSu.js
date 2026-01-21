(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const S of c)if(S.type==="childList")for(const d of S.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const S={};return c.integrity&&(S.integrity=c.integrity),c.referrerPolicy&&(S.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?S.credentials="include":c.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function l(c){if(c.ep)return;c.ep=!0;const S=r(c);fetch(c.href,S)}})();function OT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ic={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function yO(){if(Uh)return Go;Uh=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(l,c,S){var d=null;if(S!==void 0&&(d=""+S),c.key!==void 0&&(d=""+c.key),"key"in c){S={};for(var E in c)E!=="key"&&(S[E]=c[E])}else S=c;return c=S.ref,{$$typeof:n,type:l,key:d,ref:c!==void 0?c:null,props:S}}return Go.Fragment=i,Go.jsx=r,Go.jsxs=r,Go}var kh;function LO(){return kh||(kh=1,ic.exports=yO()),ic.exports}var p=LO(),oc={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh;function MO(){if(wh)return ge;wh=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),d=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),C=Symbol.iterator;function L(O){return O===null||typeof O!="object"?null:(O=C&&O[C]||O["@@iterator"],typeof O=="function"?O:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,b={};function M(O,N,B){this.props=O,this.context=N,this.refs=b,this.updater=B||G}M.prototype.isReactComponent={},M.prototype.setState=function(O,N){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,N,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=M.prototype;function J(O,N,B){this.props=O,this.context=N,this.refs=b,this.updater=B||G}var ne=J.prototype=new x;ne.constructor=J,K(ne,M.prototype),ne.isPureReactComponent=!0;var ie=Array.isArray;function ce(){}var ae={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function he(O,N,B){var F=B.ref;return{$$typeof:n,type:O,key:N,ref:F!==void 0?F:null,props:B}}function Ae(O,N){return he(O.type,N,O.props)}function pe(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function Re(O){var N={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(B){return N[B]})}var me=/\/+/g;function ve(O,N){return typeof O=="object"&&O!==null&&O.key!=null?Re(""+O.key):N.toString(36)}function Ne(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ce,ce):(O.status="pending",O.then(function(N){O.status==="pending"&&(O.status="fulfilled",O.value=N)},function(N){O.status==="pending"&&(O.status="rejected",O.reason=N)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function U(O,N,B,F,g){var D=typeof O;(D==="undefined"||D==="boolean")&&(O=null);var v=!1;if(O===null)v=!0;else switch(D){case"bigint":case"string":case"number":v=!0;break;case"object":switch(O.$$typeof){case n:case i:v=!0;break;case T:return v=O._init,U(v(O._payload),N,B,F,g)}}if(v)return g=g(O),v=F===""?"."+ve(O,0):F,ie(g)?(B="",v!=null&&(B=v.replace(me,"$&/")+"/"),U(g,N,B,"",function(Q){return Q})):g!=null&&(pe(g)&&(g=Ae(g,B+(g.key==null||O&&O.key===g.key?"":(""+g.key).replace(me,"$&/")+"/")+v)),N.push(g)),1;v=0;var W=F===""?".":F+":";if(ie(O))for(var $=0;$<O.length;$++)F=O[$],D=W+ve(F,$),v+=U(F,N,B,D,g);else if($=L(O),typeof $=="function")for(O=$.call(O),$=0;!(F=O.next()).done;)F=F.value,D=W+ve(F,$++),v+=U(F,N,B,D,g);else if(D==="object"){if(typeof O.then=="function")return U(Ne(O),N,B,F,g);throw N=String(O),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return v}function j(O,N,B){if(O==null)return O;var F=[],g=0;return U(O,F,"","",function(D){return N.call(B,D,g++)}),F}function re(O){if(O._status===-1){var N=O._result;N=N(),N.then(function(B){(O._status===0||O._status===-1)&&(O._status=1,O._result=B)},function(B){(O._status===0||O._status===-1)&&(O._status=2,O._result=B)}),O._status===-1&&(O._status=0,O._result=N)}if(O._status===1)return O._result.default;throw O._result}var ue=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},se={map:j,forEach:function(O,N,B){j(O,function(){N.apply(this,arguments)},B)},count:function(O){var N=0;return j(O,function(){N++}),N},toArray:function(O){return j(O,function(N){return N})||[]},only:function(O){if(!pe(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ge.Activity=f,ge.Children=se,ge.Component=M,ge.Fragment=r,ge.Profiler=c,ge.PureComponent=J,ge.StrictMode=l,ge.Suspense=h,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,ge.__COMPILER_RUNTIME={__proto__:null,c:function(O){return ae.H.useMemoCache(O)}},ge.cache=function(O){return function(){return O.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(O,N,B){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var F=K({},O.props),g=O.key;if(N!=null)for(D in N.key!==void 0&&(g=""+N.key),N)!te.call(N,D)||D==="key"||D==="__self"||D==="__source"||D==="ref"&&N.ref===void 0||(F[D]=N[D]);var D=arguments.length-2;if(D===1)F.children=B;else if(1<D){for(var v=Array(D),W=0;W<D;W++)v[W]=arguments[W+2];F.children=v}return he(O.type,g,F)},ge.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:S,_context:O},O},ge.createElement=function(O,N,B){var F,g={},D=null;if(N!=null)for(F in N.key!==void 0&&(D=""+N.key),N)te.call(N,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(g[F]=N[F]);var v=arguments.length-2;if(v===1)g.children=B;else if(1<v){for(var W=Array(v),$=0;$<v;$++)W[$]=arguments[$+2];g.children=W}if(O&&O.defaultProps)for(F in v=O.defaultProps,v)g[F]===void 0&&(g[F]=v[F]);return he(O,D,g)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(O){return{$$typeof:E,render:O}},ge.isValidElement=pe,ge.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:re}},ge.memo=function(O,N){return{$$typeof:m,type:O,compare:N===void 0?null:N}},ge.startTransition=function(O){var N=ae.T,B={};ae.T=B;try{var F=O(),g=ae.S;g!==null&&g(B,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ce,ue)}catch(D){ue(D)}finally{N!==null&&B.types!==null&&(N.types=B.types),ae.T=N}},ge.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},ge.use=function(O){return ae.H.use(O)},ge.useActionState=function(O,N,B){return ae.H.useActionState(O,N,B)},ge.useCallback=function(O,N){return ae.H.useCallback(O,N)},ge.useContext=function(O){return ae.H.useContext(O)},ge.useDebugValue=function(){},ge.useDeferredValue=function(O,N){return ae.H.useDeferredValue(O,N)},ge.useEffect=function(O,N){return ae.H.useEffect(O,N)},ge.useEffectEvent=function(O){return ae.H.useEffectEvent(O)},ge.useId=function(){return ae.H.useId()},ge.useImperativeHandle=function(O,N,B){return ae.H.useImperativeHandle(O,N,B)},ge.useInsertionEffect=function(O,N){return ae.H.useInsertionEffect(O,N)},ge.useLayoutEffect=function(O,N){return ae.H.useLayoutEffect(O,N)},ge.useMemo=function(O,N){return ae.H.useMemo(O,N)},ge.useOptimistic=function(O,N){return ae.H.useOptimistic(O,N)},ge.useReducer=function(O,N,B){return ae.H.useReducer(O,N,B)},ge.useRef=function(O){return ae.H.useRef(O)},ge.useState=function(O){return ae.H.useState(O)},ge.useSyncExternalStore=function(O,N,B){return ae.H.useSyncExternalStore(O,N,B)},ge.useTransition=function(){return ae.H.useTransition()},ge.version="19.2.3",ge}var xh;function Qc(){return xh||(xh=1,oc.exports=MO()),oc.exports}var y=Qc();const qo=OT(y);var rc={exports:{}},Fo={},sc={exports:{}},lc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function PO(){return Vh||(Vh=1,(function(n){function i(U,j){var re=U.length;U.push(j);e:for(;0<re;){var ue=re-1>>>1,se=U[ue];if(0<c(se,j))U[ue]=j,U[re]=se,re=ue;else break e}}function r(U){return U.length===0?null:U[0]}function l(U){if(U.length===0)return null;var j=U[0],re=U.pop();if(re!==j){U[0]=re;e:for(var ue=0,se=U.length,O=se>>>1;ue<O;){var N=2*(ue+1)-1,B=U[N],F=N+1,g=U[F];if(0>c(B,re))F<se&&0>c(g,B)?(U[ue]=g,U[F]=re,ue=F):(U[ue]=B,U[N]=re,ue=N);else if(F<se&&0>c(g,re))U[ue]=g,U[F]=re,ue=F;else break e}}return j}function c(U,j){var re=U.sortIndex-j.sortIndex;return re!==0?re:U.id-j.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;n.unstable_now=function(){return S.now()}}else{var d=Date,E=d.now();n.unstable_now=function(){return d.now()-E}}var h=[],m=[],T=1,f=null,C=3,L=!1,G=!1,K=!1,b=!1,M=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ne(U){for(var j=r(m);j!==null;){if(j.callback===null)l(m);else if(j.startTime<=U)l(m),j.sortIndex=j.expirationTime,i(h,j);else break;j=r(m)}}function ie(U){if(K=!1,ne(U),!G)if(r(h)!==null)G=!0,ce||(ce=!0,Re());else{var j=r(m);j!==null&&Ne(ie,j.startTime-U)}}var ce=!1,ae=-1,te=5,he=-1;function Ae(){return b?!0:!(n.unstable_now()-he<te)}function pe(){if(b=!1,ce){var U=n.unstable_now();he=U;var j=!0;try{e:{G=!1,K&&(K=!1,x(ae),ae=-1),L=!0;var re=C;try{t:{for(ne(U),f=r(h);f!==null&&!(f.expirationTime>U&&Ae());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,C=f.priorityLevel;var se=ue(f.expirationTime<=U);if(U=n.unstable_now(),typeof se=="function"){f.callback=se,ne(U),j=!0;break t}f===r(h)&&l(h),ne(U)}else l(h);f=r(h)}if(f!==null)j=!0;else{var O=r(m);O!==null&&Ne(ie,O.startTime-U),j=!1}}break e}finally{f=null,C=re,L=!1}j=void 0}}finally{j?Re():ce=!1}}}var Re;if(typeof J=="function")Re=function(){J(pe)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ve=me.port2;me.port1.onmessage=pe,Re=function(){ve.postMessage(null)}}else Re=function(){M(pe,0)};function Ne(U,j){ae=M(function(){U(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_next=function(U){switch(C){case 1:case 2:case 3:var j=3;break;default:j=C}var re=C;C=j;try{return U()}finally{C=re}},n.unstable_requestPaint=function(){b=!0},n.unstable_runWithPriority=function(U,j){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var re=C;C=U;try{return j()}finally{C=re}},n.unstable_scheduleCallback=function(U,j,re){var ue=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ue+re:ue):re=ue,U){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=re+se,U={id:T++,callback:j,priorityLevel:U,startTime:re,expirationTime:se,sortIndex:-1},re>ue?(U.sortIndex=re,i(m,U),r(h)===null&&U===r(m)&&(K?(x(ae),ae=-1):K=!0,Ne(ie,re-ue))):(U.sortIndex=se,i(h,U),G||L||(G=!0,ce||(ce=!0,Re()))),U},n.unstable_shouldYield=Ae,n.unstable_wrapCallback=function(U){var j=C;return function(){var re=C;C=j;try{return U.apply(this,arguments)}finally{C=re}}}})(lc)),lc}var Kh;function DO(){return Kh||(Kh=1,sc.exports=PO()),sc.exports}var uc={exports:{}},Ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function BO(){if(Wh)return Ct;Wh=1;var n=Qc();function i(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)m+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function S(h,m,T){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:f==null?null:""+f,children:h,containerInfo:m,implementation:T}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Ct.createPortal=function(h,m){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return S(h,m,null,T)},Ct.flushSync=function(h){var m=d.T,T=l.p;try{if(d.T=null,l.p=2,h)return h()}finally{d.T=m,l.p=T,l.d.f()}},Ct.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(h,m))},Ct.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},Ct.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var T=m.as,f=E(T,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,L=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;T==="style"?l.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:f,integrity:C,fetchPriority:L}):T==="script"&&l.d.X(h,{crossOrigin:f,integrity:C,fetchPriority:L,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ct.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var T=E(m.as,m.crossOrigin);l.d.M(h,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(h)},Ct.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var T=m.as,f=E(T,m.crossOrigin);l.d.L(h,T,{crossOrigin:f,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ct.preloadModule=function(h,m){if(typeof h=="string")if(m){var T=E(m.as,m.crossOrigin);l.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(h)},Ct.requestFormReset=function(h){l.d.r(h)},Ct.unstable_batchedUpdates=function(h,m){return h(m)},Ct.useFormState=function(h,m,T){return d.H.useFormState(h,m,T)},Ct.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ct.version="19.2.3",Ct}var Yh;function vO(){if(Yh)return uc.exports;Yh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),uc.exports=BO(),uc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function HO(){if(zh)return Fo;zh=1;var n=DO(),i=Qc(),r=vO();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(S(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=S(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,o=t;;){var s=a.return;if(s===null)break;var u=s.alternate;if(u===null){if(o=s.return,o!==null){a=o;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===a)return h(s),e;if(u===o)return h(s),t;u=u.sibling}throw Error(l(188))}if(a.return!==o.return)a=s,o=u;else{for(var A=!1,R=s.child;R;){if(R===a){A=!0,a=s,o=u;break}if(R===o){A=!0,o=s,a=u;break}R=R.sibling}if(!A){for(R=u.child;R;){if(R===a){A=!0,a=u,o=s;break}if(R===o){A=!0,o=u,a=s;break}R=R.sibling}if(!A)throw Error(l(189))}}if(a.alternate!==o)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,C=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),Ae=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var me=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case M:return"Profiler";case b:return"StrictMode";case ie:return"Suspense";case ce:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case J:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case te:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var Ne=Array.isArray,U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ue=[],se=-1;function O(e){return{current:e}}function N(e){0>se||(e.current=ue[se],ue[se]=null,se--)}function B(e,t){se++,ue[se]=e.current,e.current=t}var F=O(null),g=O(null),D=O(null),v=O(null);function W(e,t){switch(B(D,t),B(g,e),B(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rh(t),e=sh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(F),B(F,e)}function $(){N(F),N(g),N(D)}function Q(e){e.memoizedState!==null&&B(v,e);var t=F.current,a=sh(t,e.type);t!==a&&(B(g,e),B(F,a))}function _(e){g.current===e&&(N(F),N(g)),v.current===e&&(N(v),Bo._currentValue=re)}var z,oe;function Z(e){if(z===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);z=t&&t[1]||"",oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+z+e+oe}var le=!1;function de(e,t){if(!e||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(Y){var V=Y}Reflect.construct(e,[],ee)}else{try{ee.call()}catch(Y){V=Y}e.call(ee.prototype)}}else{try{throw Error()}catch(Y){V=Y}(ee=e())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(Y){if(Y&&V&&typeof Y.stack=="string")return[Y.stack,V.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),A=u[0],R=u[1];if(A&&R){var I=A.split(`
`),w=R.split(`
`);for(s=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;s<w.length&&!w[s].includes("DetermineComponentFrameRoot");)s++;if(o===I.length||s===w.length)for(o=I.length-1,s=w.length-1;1<=o&&0<=s&&I[o]!==w[s];)s--;for(;1<=o&&0<=s;o--,s--)if(I[o]!==w[s]){if(o!==1||s!==1)do if(o--,s--,0>s||I[o]!==w[s]){var X=`
`+I[o].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=o&&0<=s);break}}}finally{le=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Z(a):""}function Ue(e,t){switch(e.tag){case 26:case 27:case 5:return Z(e.type);case 16:return Z("Lazy");case 13:return e.child!==t&&t!==null?Z("Suspense Fallback"):Z("Suspense");case 19:return Z("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return Z("Activity");default:return""}}function Ze(e){try{var t="",a=null;do t+=Ue(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var at=Object.prototype.hasOwnProperty,Ht=n.unstable_scheduleCallback,bt=n.unstable_cancelCallback,iR=n.unstable_shouldYield,oR=n.unstable_requestPaint,Gt=n.unstable_now,rR=n.unstable_getCurrentPriorityLevel,kd=n.unstable_ImmediatePriority,wd=n.unstable_UserBlockingPriority,ir=n.unstable_NormalPriority,sR=n.unstable_LowPriority,xd=n.unstable_IdlePriority,lR=n.log,uR=n.unstable_setDisableYieldValue,Ki=null,Ft=null;function Va(e){if(typeof lR=="function"&&uR(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(Ki,e)}catch{}}var Ut=Math.clz32?Math.clz32:SR,cR=Math.log,dR=Math.LN2;function SR(e){return e>>>=0,e===0?32:31-(cR(e)/dR|0)|0}var or=256,rr=262144,sr=4194304;function Tn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function lr(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var s=0,u=e.suspendedLanes,A=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~u,o!==0?s=Tn(o):(A&=R,A!==0?s=Tn(A):a||(a=R&~e,a!==0&&(s=Tn(a))))):(R=o&~u,R!==0?s=Tn(R):A!==0?s=Tn(A):a||(a=o&~e,a!==0&&(s=Tn(a)))),s===0?0:t!==0&&t!==s&&(t&u)===0&&(u=s&-s,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:s}function Wi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function AR(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vd(){var e=sr;return sr<<=1,(sr&62914560)===0&&(sr=4194304),e}function js(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Yi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ER(e,t,a,o,s,u){var A=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,I=e.expirationTimes,w=e.hiddenUpdates;for(a=A&~a;0<a;){var X=31-Ut(a),ee=1<<X;R[X]=0,I[X]=-1;var V=w[X];if(V!==null)for(w[X]=null,X=0;X<V.length;X++){var Y=V[X];Y!==null&&(Y.lane&=-536870913)}a&=~ee}o!==0&&Kd(e,o,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(A&~t))}function Kd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Ut(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Wd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Ut(a),s=1<<o;s&t|e[o]&t&&(e[o]|=t),a&=~s}}function Yd(e,t){var a=t&-t;return a=(a&42)!==0?1:Js(a),(a&(e.suspendedLanes|t))!==0?0:a}function Js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _s(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zd(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Dh(e.type))}function jd(e,t){var a=j.p;try{return j.p=e,t()}finally{j.p=a}}var Ka=Math.random().toString(36).slice(2),ct="__reactFiber$"+Ka,yt="__reactProps$"+Ka,zn="__reactContainer$"+Ka,Zs="__reactEvents$"+Ka,hR="__reactListeners$"+Ka,mR="__reactHandles$"+Ka,Jd="__reactResources$"+Ka,zi="__reactMarker$"+Ka;function Xs(e){delete e[ct],delete e[yt],delete e[Zs],delete e[hR],delete e[mR]}function jn(e){var t=e[ct];if(t)return t;for(var a=e.parentNode;a;){if(t=a[zn]||a[ct]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Eh(e);e!==null;){if(a=e[ct])return a;e=Eh(e)}return t}e=a,a=e.parentNode}return null}function Jn(e){if(e=e[ct]||e[zn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ji(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function _n(e){var t=e[Jd];return t||(t=e[Jd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[zi]=!0}var _d=new Set,Zd={};function fn(e,t){Zn(e,t),Zn(e+"Capture",t)}function Zn(e,t){for(Zd[e]=t,e=0;e<t.length;e++)_d.add(t[e])}var TR=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xd={},qd={};function fR(e){return at.call(qd,e)?!0:at.call(Xd,e)?!1:TR.test(e)?qd[e]=!0:(Xd[e]=!0,!1)}function ur(e,t,a){if(fR(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function cr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ra(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function RR(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var s=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(A){a=""+A,u.call(this,A)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(A){a=""+A},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qs(e){if(!e._valueTracker){var t=Qd(e)?"checked":"value";e._valueTracker=RR(e,t,""+e[t])}}function $d(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Qd(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var CR=/[\n"\\]/g;function _t(e){return e.replace(CR,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Qs(e,t,a,o,s,u,A,R){e.name="",A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.type=A:e.removeAttribute("type"),t!=null?A==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Jt(t)):e.value!==""+Jt(t)&&(e.value=""+Jt(t)):A!=="submit"&&A!=="reset"||e.removeAttribute("value"),t!=null?$s(e,A,Jt(t)):a!=null?$s(e,A,Jt(a)):o!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Jt(R):e.removeAttribute("name")}function eS(e,t,a,o,s,u,A,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){qs(e);return}a=a!=null?""+Jt(a):"",t=t!=null?""+Jt(t):a,R||t===e.value||(e.value=t),e.defaultValue=t}o=o??s,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(e.name=A),qs(e)}function $s(e,t,a){t==="number"&&dr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xn(e,t,a,o){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Jt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function tS(e,t,a){if(t!=null&&(t=""+Jt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Jt(a):""}function aS(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(l(92));if(Ne(o)){if(1<o.length)throw Error(l(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Jt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),qs(e)}function qn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var OR=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nS(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||OR.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function iS(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var s in t)o=t[s],t.hasOwnProperty(s)&&a[s]!==o&&nS(e,s,o)}else for(var u in t)t.hasOwnProperty(u)&&nS(e,u,t[u])}function el(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pR=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gR=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sr(e){return gR.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ca(){}var tl=null;function al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qn=null,$n=null;function oS(e){var t=Jn(e);if(t&&(e=t.stateNode)){var a=e[yt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Qs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var s=o[yt]||null;if(!s)throw Error(l(90));Qs(o,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&$d(o)}break e;case"textarea":tS(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Xn(e,!!a.multiple,t,!1)}}}var nl=!1;function rS(e,t,a){if(nl)return e(t,a);nl=!0;try{var o=e(t);return o}finally{if(nl=!1,(Qn!==null||$n!==null)&&($r(),Qn&&(t=Qn,e=$n,$n=Qn=null,oS(t),e)))for(t=0;t<e.length;t++)oS(e[t])}}function Ji(e,t){var a=e.stateNode;if(a===null)return null;var o=a[yt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var Oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),il=!1;if(Oa)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){il=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{il=!1}var Wa=null,ol=null,Ar=null;function sS(){if(Ar)return Ar;var e,t=ol,a=t.length,o,s="value"in Wa?Wa.value:Wa.textContent,u=s.length;for(e=0;e<a&&t[e]===s[e];e++);var A=a-e;for(o=1;o<=A&&t[a-o]===s[u-o];o++);return Ar=s.slice(e,1<o?1-o:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function lS(){return!1}function Lt(e){function t(a,o,s,u,A){this._reactName=a,this._targetInst=s,this.type=o,this.nativeEvent=u,this.target=A,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?hr:lS,this.isPropagationStopped=lS,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mr=Lt(Rn),Zi=f({},Rn,{view:0,detail:0}),NR=Lt(Zi),rl,sl,Xi,Tr=f({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xi&&(Xi&&e.type==="mousemove"?(rl=e.screenX-Xi.screenX,sl=e.screenY-Xi.screenY):sl=rl=0,Xi=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),uS=Lt(Tr),IR=f({},Tr,{dataTransfer:0}),yR=Lt(IR),LR=f({},Zi,{relatedTarget:0}),ll=Lt(LR),MR=f({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),PR=Lt(MR),DR=f({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),BR=Lt(DR),vR=f({},Rn,{data:0}),cS=Lt(vR),HR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FR(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=GR[e])?!!t[e]:!1}function ul(){return FR}var UR=f({},Zi,{key:function(e){if(e.key){var t=HR[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bR[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kR=Lt(UR),wR=f({},Tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dS=Lt(wR),xR=f({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),VR=Lt(xR),KR=f({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),WR=Lt(KR),YR=f({},Tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zR=Lt(YR),jR=f({},Rn,{newState:0,oldState:0}),JR=Lt(jR),_R=[9,13,27,32],cl=Oa&&"CompositionEvent"in window,qi=null;Oa&&"documentMode"in document&&(qi=document.documentMode);var ZR=Oa&&"TextEvent"in window&&!qi,SS=Oa&&(!cl||qi&&8<qi&&11>=qi),AS=" ",ES=!1;function hS(e,t){switch(e){case"keyup":return _R.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ei=!1;function XR(e,t){switch(e){case"compositionend":return mS(t);case"keypress":return t.which!==32?null:(ES=!0,AS);case"textInput":return e=t.data,e===AS&&ES?null:e;default:return null}}function qR(e,t){if(ei)return e==="compositionend"||!cl&&hS(e,t)?(e=sS(),Ar=ol=Wa=null,ei=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return SS&&t.locale!=="ko"?null:t.data;default:return null}}var QR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function TS(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!QR[e.type]:t==="textarea"}function fS(e,t,a,o){Qn?$n?$n.push(o):$n=[o]:Qn=o,t=rs(t,"onChange"),0<t.length&&(a=new mr("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var Qi=null,$i=null;function $R(e){eh(e,0)}function fr(e){var t=ji(e);if($d(t))return e}function RS(e,t){if(e==="change")return t}var CS=!1;if(Oa){var dl;if(Oa){var Sl="oninput"in document;if(!Sl){var OS=document.createElement("div");OS.setAttribute("oninput","return;"),Sl=typeof OS.oninput=="function"}dl=Sl}else dl=!1;CS=dl&&(!document.documentMode||9<document.documentMode)}function pS(){Qi&&(Qi.detachEvent("onpropertychange",gS),$i=Qi=null)}function gS(e){if(e.propertyName==="value"&&fr($i)){var t=[];fS(t,$i,e,al(e)),rS($R,t)}}function eC(e,t,a){e==="focusin"?(pS(),Qi=t,$i=a,Qi.attachEvent("onpropertychange",gS)):e==="focusout"&&pS()}function tC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fr($i)}function aC(e,t){if(e==="click")return fr(t)}function nC(e,t){if(e==="input"||e==="change")return fr(t)}function iC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:iC;function eo(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var s=a[o];if(!at.call(t,s)||!kt(e[s],t[s]))return!1}return!0}function NS(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function IS(e,t){var a=NS(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=NS(a)}}function yS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function LS(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=dr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=dr(e.document)}return t}function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var oC=Oa&&"documentMode"in document&&11>=document.documentMode,ti=null,El=null,to=null,hl=!1;function MS(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hl||ti==null||ti!==dr(o)||(o=ti,"selectionStart"in o&&Al(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&eo(to,o)||(to=o,o=rs(El,"onSelect"),0<o.length&&(t=new mr("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=ti)))}function Cn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ai={animationend:Cn("Animation","AnimationEnd"),animationiteration:Cn("Animation","AnimationIteration"),animationstart:Cn("Animation","AnimationStart"),transitionrun:Cn("Transition","TransitionRun"),transitionstart:Cn("Transition","TransitionStart"),transitioncancel:Cn("Transition","TransitionCancel"),transitionend:Cn("Transition","TransitionEnd")},ml={},PS={};Oa&&(PS=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function On(e){if(ml[e])return ml[e];if(!ai[e])return e;var t=ai[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in PS)return ml[e]=t[a];return e}var DS=On("animationend"),BS=On("animationiteration"),vS=On("animationstart"),rC=On("transitionrun"),sC=On("transitionstart"),lC=On("transitioncancel"),HS=On("transitionend"),bS=new Map,Tl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tl.push("scrollEnd");function oa(e,t){bS.set(e,t),fn(t,[e])}var Rr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],ni=0,fl=0;function Cr(){for(var e=ni,t=fl=ni=0;t<e;){var a=Zt[t];Zt[t++]=null;var o=Zt[t];Zt[t++]=null;var s=Zt[t];Zt[t++]=null;var u=Zt[t];if(Zt[t++]=null,o!==null&&s!==null){var A=o.pending;A===null?s.next=s:(s.next=A.next,A.next=s),o.pending=s}u!==0&&GS(a,s,u)}}function Or(e,t,a,o){Zt[ni++]=e,Zt[ni++]=t,Zt[ni++]=a,Zt[ni++]=o,fl|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Rl(e,t,a,o){return Or(e,t,a,o),pr(e)}function pn(e,t){return Or(e,null,null,t),pr(e)}function GS(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var s=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&t!==null&&(s=31-Ut(a),e=u.hiddenUpdates,o=e[s],o===null?e[s]=[t]:o.push(t),t.lane=a|536870912),u):null}function pr(e){if(50<No)throw No=0,Mu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ii={};function uC(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,a,o){return new uC(e,t,a,o)}function Cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pa(e,t){var a=e.alternate;return a===null?(a=wt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function FS(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gr(e,t,a,o,s,u){var A=0;if(o=e,typeof e=="function")Cl(e)&&(A=1);else if(typeof e=="string")A=EO(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=wt(31,a,t,s),e.elementType=he,e.lanes=u,e;case K:return gn(a.children,s,u,t);case b:A=8,s|=24;break;case M:return e=wt(12,a,t,s|2),e.elementType=M,e.lanes=u,e;case ie:return e=wt(13,a,t,s),e.elementType=ie,e.lanes=u,e;case ce:return e=wt(19,a,t,s),e.elementType=ce,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:A=10;break e;case x:A=9;break e;case ne:A=11;break e;case ae:A=14;break e;case te:A=16,o=null;break e}A=29,a=Error(l(130,e===null?"null":typeof e,"")),o=null}return t=wt(A,a,t,s),t.elementType=e,t.type=o,t.lanes=u,t}function gn(e,t,a,o){return e=wt(7,e,o,t),e.lanes=a,e}function Ol(e,t,a){return e=wt(6,e,null,t),e.lanes=a,e}function US(e){var t=wt(18,null,null,0);return t.stateNode=e,t}function pl(e,t,a){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var kS=new WeakMap;function Xt(e,t){if(typeof e=="object"&&e!==null){var a=kS.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ze(t)},kS.set(e,t),t)}return{value:e,source:t,stack:Ze(t)}}var oi=[],ri=0,Nr=null,ao=0,qt=[],Qt=0,Ya=null,ca=1,da="";function ga(e,t){oi[ri++]=ao,oi[ri++]=Nr,Nr=e,ao=t}function wS(e,t,a){qt[Qt++]=ca,qt[Qt++]=da,qt[Qt++]=Ya,Ya=e;var o=ca;e=da;var s=32-Ut(o)-1;o&=~(1<<s),a+=1;var u=32-Ut(t)+s;if(30<u){var A=s-s%5;u=(o&(1<<A)-1).toString(32),o>>=A,s-=A,ca=1<<32-Ut(t)+s|a<<s|o,da=u+e}else ca=1<<u|a<<s|o,da=e}function gl(e){e.return!==null&&(ga(e,1),wS(e,1,0))}function Nl(e){for(;e===Nr;)Nr=oi[--ri],oi[ri]=null,ao=oi[--ri],oi[ri]=null;for(;e===Ya;)Ya=qt[--Qt],qt[Qt]=null,da=qt[--Qt],qt[Qt]=null,ca=qt[--Qt],qt[Qt]=null}function xS(e,t){qt[Qt++]=ca,qt[Qt++]=da,qt[Qt++]=Ya,ca=t.id,da=t.overflow,Ya=e}var dt=null,Ye=null,He=!1,za=null,$t=!1,Il=Error(l(519));function ja(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(Xt(t,e)),Il}function VS(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[ct]=e,t[yt]=o,a){case"dialog":Pe("cancel",t),Pe("close",t);break;case"iframe":case"object":case"embed":Pe("load",t);break;case"video":case"audio":for(a=0;a<yo.length;a++)Pe(yo[a],t);break;case"source":Pe("error",t);break;case"img":case"image":case"link":Pe("error",t),Pe("load",t);break;case"details":Pe("toggle",t);break;case"input":Pe("invalid",t),eS(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Pe("invalid",t);break;case"textarea":Pe("invalid",t),aS(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||ih(t.textContent,a)?(o.popover!=null&&(Pe("beforetoggle",t),Pe("toggle",t)),o.onScroll!=null&&Pe("scroll",t),o.onScrollEnd!=null&&Pe("scrollend",t),o.onClick!=null&&(t.onclick=Ca),t=!0):t=!1,t||ja(e,!0)}function KS(e){for(dt=e.return;dt;)switch(dt.tag){case 5:case 31:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:dt=dt.return}}function si(e){if(e!==dt)return!1;if(!He)return KS(e),He=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wu(e.type,e.memoizedProps)),a=!a),a&&Ye&&ja(e),KS(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ye=Ah(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ye=Ah(e)}else t===27?(t=Ye,sn(e.type)?(e=_u,_u=null,Ye=e):Ye=t):Ye=dt?ta(e.stateNode.nextSibling):null;return!0}function Nn(){Ye=dt=null,He=!1}function yl(){var e=za;return e!==null&&(Bt===null?Bt=e:Bt.push.apply(Bt,e),za=null),e}function no(e){za===null?za=[e]:za.push(e)}var Ll=O(null),In=null,Na=null;function Ja(e,t,a){B(Ll,t._currentValue),t._currentValue=a}function Ia(e){e._currentValue=Ll.current,N(Ll)}function Ml(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Pl(e,t,a,o){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var A=s.child;u=u.firstContext;e:for(;u!==null;){var R=u;u=s;for(var I=0;I<t.length;I++)if(R.context===t[I]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),Ml(u.return,a,e),o||(A=null);break e}u=R.next}}else if(s.tag===18){if(A=s.return,A===null)throw Error(l(341));A.lanes|=a,u=A.alternate,u!==null&&(u.lanes|=a),Ml(A,a,e),A=null}else A=s.child;if(A!==null)A.return=s;else for(A=s;A!==null;){if(A===e){A=null;break}if(s=A.sibling,s!==null){s.return=A.return,A=s;break}A=A.return}s=A}}function li(e,t,a,o){e=null;for(var s=t,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var A=s.alternate;if(A===null)throw Error(l(387));if(A=A.memoizedProps,A!==null){var R=s.type;kt(s.pendingProps.value,A.value)||(e!==null?e.push(R):e=[R])}}else if(s===v.current){if(A=s.alternate,A===null)throw Error(l(387));A.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}s=s.return}e!==null&&Pl(t,e,a,o),t.flags|=262144}function Ir(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yn(e){In=e,Na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return WS(In,e)}function yr(e,t){return In===null&&yn(e),WS(e,t)}function WS(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Na===null){if(e===null)throw Error(l(308));Na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Na=Na.next=t;return a}var cC=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},dC=n.unstable_scheduleCallback,SC=n.unstable_NormalPriority,nt={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dl(){return{controller:new cC,data:new Map,refCount:0}}function io(e){e.refCount--,e.refCount===0&&dC(SC,function(){e.controller.abort()})}var oo=null,Bl=0,ui=0,ci=null;function AC(e,t){if(oo===null){var a=oo=[];Bl=0,ui=bu(),ci={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Bl++,t.then(YS,YS),t}function YS(){if(--Bl===0&&oo!==null){ci!==null&&(ci.status="fulfilled");var e=oo;oo=null,ui=0,ci=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function EC(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(o.status="rejected",o.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),o}var zS=U.S;U.S=function(e,t){ME=Gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&AC(e,t),zS!==null&&zS(e,t)};var Ln=O(null);function vl(){var e=Ln.current;return e!==null?e:We.pooledCache}function Lr(e,t){t===null?B(Ln,Ln.current):B(Ln,t.pool)}function jS(){var e=vl();return e===null?null:{parent:nt._currentValue,pool:e}}var di=Error(l(460)),Hl=Error(l(474)),Mr=Error(l(542)),Pr={then:function(){}};function JS(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _S(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ca,Ca),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,XS(e),e;default:if(typeof t.status=="string")t.then(Ca,Ca);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=o}},function(o){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,XS(e),e}throw Pn=t,di}}function Mn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Pn=a,di):a}}var Pn=null;function ZS(){if(Pn===null)throw Error(l(459));var e=Pn;return Pn=null,e}function XS(e){if(e===di||e===Mr)throw Error(l(483))}var Si=null,ro=0;function Dr(e){var t=ro;return ro+=1,Si===null&&(Si=[]),_S(Si,e,t)}function so(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Br(e,t){throw t.$$typeof===C?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qS(e){function t(H,P){if(e){var k=H.deletions;k===null?(H.deletions=[P],H.flags|=16):k.push(P)}}function a(H,P){if(!e)return null;for(;P!==null;)t(H,P),P=P.sibling;return null}function o(H){for(var P=new Map;H!==null;)H.key!==null?P.set(H.key,H):P.set(H.index,H),H=H.sibling;return P}function s(H,P){return H=pa(H,P),H.index=0,H.sibling=null,H}function u(H,P,k){return H.index=k,e?(k=H.alternate,k!==null?(k=k.index,k<P?(H.flags|=67108866,P):k):(H.flags|=67108866,P)):(H.flags|=1048576,P)}function A(H){return e&&H.alternate===null&&(H.flags|=67108866),H}function R(H,P,k,q){return P===null||P.tag!==6?(P=Ol(k,H.mode,q),P.return=H,P):(P=s(P,k),P.return=H,P)}function I(H,P,k,q){var fe=k.type;return fe===K?X(H,P,k.props.children,q,k.key):P!==null&&(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===te&&Mn(fe)===P.type)?(P=s(P,k.props),so(P,k),P.return=H,P):(P=gr(k.type,k.key,k.props,null,H.mode,q),so(P,k),P.return=H,P)}function w(H,P,k,q){return P===null||P.tag!==4||P.stateNode.containerInfo!==k.containerInfo||P.stateNode.implementation!==k.implementation?(P=pl(k,H.mode,q),P.return=H,P):(P=s(P,k.children||[]),P.return=H,P)}function X(H,P,k,q,fe){return P===null||P.tag!==7?(P=gn(k,H.mode,q,fe),P.return=H,P):(P=s(P,k),P.return=H,P)}function ee(H,P,k){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Ol(""+P,H.mode,k),P.return=H,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case L:return k=gr(P.type,P.key,P.props,null,H.mode,k),so(k,P),k.return=H,k;case G:return P=pl(P,H.mode,k),P.return=H,P;case te:return P=Mn(P),ee(H,P,k)}if(Ne(P)||Re(P))return P=gn(P,H.mode,k,null),P.return=H,P;if(typeof P.then=="function")return ee(H,Dr(P),k);if(P.$$typeof===J)return ee(H,yr(H,P),k);Br(H,P)}return null}function V(H,P,k,q){var fe=P!==null?P.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return fe!==null?null:R(H,P,""+k,q);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case L:return k.key===fe?I(H,P,k,q):null;case G:return k.key===fe?w(H,P,k,q):null;case te:return k=Mn(k),V(H,P,k,q)}if(Ne(k)||Re(k))return fe!==null?null:X(H,P,k,q,null);if(typeof k.then=="function")return V(H,P,Dr(k),q);if(k.$$typeof===J)return V(H,P,yr(H,k),q);Br(H,k)}return null}function Y(H,P,k,q,fe){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return H=H.get(k)||null,R(P,H,""+q,fe);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case L:return H=H.get(q.key===null?k:q.key)||null,I(P,H,q,fe);case G:return H=H.get(q.key===null?k:q.key)||null,w(P,H,q,fe);case te:return q=Mn(q),Y(H,P,k,q,fe)}if(Ne(q)||Re(q))return H=H.get(k)||null,X(P,H,q,fe,null);if(typeof q.then=="function")return Y(H,P,k,Dr(q),fe);if(q.$$typeof===J)return Y(H,P,k,yr(P,q),fe);Br(P,q)}return null}function Se(H,P,k,q){for(var fe=null,be=null,Ee=P,ye=P=0,Be=null;Ee!==null&&ye<k.length;ye++){Ee.index>ye?(Be=Ee,Ee=null):Be=Ee.sibling;var Ge=V(H,Ee,k[ye],q);if(Ge===null){Ee===null&&(Ee=Be);break}e&&Ee&&Ge.alternate===null&&t(H,Ee),P=u(Ge,P,ye),be===null?fe=Ge:be.sibling=Ge,be=Ge,Ee=Be}if(ye===k.length)return a(H,Ee),He&&ga(H,ye),fe;if(Ee===null){for(;ye<k.length;ye++)Ee=ee(H,k[ye],q),Ee!==null&&(P=u(Ee,P,ye),be===null?fe=Ee:be.sibling=Ee,be=Ee);return He&&ga(H,ye),fe}for(Ee=o(Ee);ye<k.length;ye++)Be=Y(Ee,H,ye,k[ye],q),Be!==null&&(e&&Be.alternate!==null&&Ee.delete(Be.key===null?ye:Be.key),P=u(Be,P,ye),be===null?fe=Be:be.sibling=Be,be=Be);return e&&Ee.forEach(function(Sn){return t(H,Sn)}),He&&ga(H,ye),fe}function Ce(H,P,k,q){if(k==null)throw Error(l(151));for(var fe=null,be=null,Ee=P,ye=P=0,Be=null,Ge=k.next();Ee!==null&&!Ge.done;ye++,Ge=k.next()){Ee.index>ye?(Be=Ee,Ee=null):Be=Ee.sibling;var Sn=V(H,Ee,Ge.value,q);if(Sn===null){Ee===null&&(Ee=Be);break}e&&Ee&&Sn.alternate===null&&t(H,Ee),P=u(Sn,P,ye),be===null?fe=Sn:be.sibling=Sn,be=Sn,Ee=Be}if(Ge.done)return a(H,Ee),He&&ga(H,ye),fe;if(Ee===null){for(;!Ge.done;ye++,Ge=k.next())Ge=ee(H,Ge.value,q),Ge!==null&&(P=u(Ge,P,ye),be===null?fe=Ge:be.sibling=Ge,be=Ge);return He&&ga(H,ye),fe}for(Ee=o(Ee);!Ge.done;ye++,Ge=k.next())Ge=Y(Ee,H,ye,Ge.value,q),Ge!==null&&(e&&Ge.alternate!==null&&Ee.delete(Ge.key===null?ye:Ge.key),P=u(Ge,P,ye),be===null?fe=Ge:be.sibling=Ge,be=Ge);return e&&Ee.forEach(function(IO){return t(H,IO)}),He&&ga(H,ye),fe}function Ke(H,P,k,q){if(typeof k=="object"&&k!==null&&k.type===K&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case L:e:{for(var fe=k.key;P!==null;){if(P.key===fe){if(fe=k.type,fe===K){if(P.tag===7){a(H,P.sibling),q=s(P,k.props.children),q.return=H,H=q;break e}}else if(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===te&&Mn(fe)===P.type){a(H,P.sibling),q=s(P,k.props),so(q,k),q.return=H,H=q;break e}a(H,P);break}else t(H,P);P=P.sibling}k.type===K?(q=gn(k.props.children,H.mode,q,k.key),q.return=H,H=q):(q=gr(k.type,k.key,k.props,null,H.mode,q),so(q,k),q.return=H,H=q)}return A(H);case G:e:{for(fe=k.key;P!==null;){if(P.key===fe)if(P.tag===4&&P.stateNode.containerInfo===k.containerInfo&&P.stateNode.implementation===k.implementation){a(H,P.sibling),q=s(P,k.children||[]),q.return=H,H=q;break e}else{a(H,P);break}else t(H,P);P=P.sibling}q=pl(k,H.mode,q),q.return=H,H=q}return A(H);case te:return k=Mn(k),Ke(H,P,k,q)}if(Ne(k))return Se(H,P,k,q);if(Re(k)){if(fe=Re(k),typeof fe!="function")throw Error(l(150));return k=fe.call(k),Ce(H,P,k,q)}if(typeof k.then=="function")return Ke(H,P,Dr(k),q);if(k.$$typeof===J)return Ke(H,P,yr(H,k),q);Br(H,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,P!==null&&P.tag===6?(a(H,P.sibling),q=s(P,k),q.return=H,H=q):(a(H,P),q=Ol(k,H.mode,q),q.return=H,H=q),A(H)):a(H,P)}return function(H,P,k,q){try{ro=0;var fe=Ke(H,P,k,q);return Si=null,fe}catch(Ee){if(Ee===di||Ee===Mr)throw Ee;var be=wt(29,Ee,null,H.mode);return be.lanes=q,be.return=H,be}finally{}}}var Dn=qS(!0),QS=qS(!1),_a=!1;function bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Fe&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,t=pr(e),GS(e,null,a),t}return Or(e,o,t,a),pr(e)}function lo(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Wd(e,a)}}function Fl(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var s=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var A={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?s=u=A:u=u.next=A,a=a.next}while(a!==null);u===null?s=u=t:u=u.next=t}else s=u=t;a={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ul=!1;function uo(){if(Ul){var e=ci;if(e!==null)throw e}}function co(e,t,a,o){Ul=!1;var s=e.updateQueue;_a=!1;var u=s.firstBaseUpdate,A=s.lastBaseUpdate,R=s.shared.pending;if(R!==null){s.shared.pending=null;var I=R,w=I.next;I.next=null,A===null?u=w:A.next=w,A=I;var X=e.alternate;X!==null&&(X=X.updateQueue,R=X.lastBaseUpdate,R!==A&&(R===null?X.firstBaseUpdate=w:R.next=w,X.lastBaseUpdate=I))}if(u!==null){var ee=s.baseState;A=0,X=w=I=null,R=u;do{var V=R.lane&-536870913,Y=V!==R.lane;if(Y?(De&V)===V:(o&V)===V){V!==0&&V===ui&&(Ul=!0),X!==null&&(X=X.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Se=e,Ce=R;V=t;var Ke=a;switch(Ce.tag){case 1:if(Se=Ce.payload,typeof Se=="function"){ee=Se.call(Ke,ee,V);break e}ee=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Ce.payload,V=typeof Se=="function"?Se.call(Ke,ee,V):Se,V==null)break e;ee=f({},ee,V);break e;case 2:_a=!0}}V=R.callback,V!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=s.callbacks,Y===null?s.callbacks=[V]:Y.push(V))}else Y={lane:V,tag:R.tag,payload:R.payload,callback:R.callback,next:null},X===null?(w=X=Y,I=ee):X=X.next=Y,A|=V;if(R=R.next,R===null){if(R=s.shared.pending,R===null)break;Y=R,R=Y.next,Y.next=null,s.lastBaseUpdate=Y,s.shared.pending=null}}while(!0);X===null&&(I=ee),s.baseState=I,s.firstBaseUpdate=w,s.lastBaseUpdate=X,u===null&&(s.shared.lanes=0),tn|=A,e.lanes=A,e.memoizedState=ee}}function $S(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function eA(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$S(a[e],t)}var Ai=O(null),vr=O(0);function tA(e,t){e=ba,B(vr,e),B(Ai,t),ba=e|t.baseLanes}function kl(){B(vr,ba),B(Ai,Ai.current)}function wl(){ba=vr.current,N(Ai),N(vr)}var xt=O(null),ea=null;function qa(e){var t=e.alternate;B($e,$e.current&1),B(xt,e),ea===null&&(t===null||Ai.current!==null||t.memoizedState!==null)&&(ea=e)}function xl(e){B($e,$e.current),B(xt,e),ea===null&&(ea=e)}function aA(e){e.tag===22?(B($e,$e.current),B(xt,e),ea===null&&(ea=e)):Qa()}function Qa(){B($e,$e.current),B(xt,xt.current)}function Vt(e){N(xt),ea===e&&(ea=null),N($e)}var $e=O(0);function Hr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ju(a)||Ju(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=0,Ie=null,xe=null,it=null,br=!1,Ei=!1,Bn=!1,Gr=0,So=0,hi=null,hC=0;function Xe(){throw Error(l(321))}function Vl(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!kt(e[a],t[a]))return!1;return!0}function Kl(e,t,a,o,s,u){return ya=u,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?wA:nu,Bn=!1,u=a(o,s),Bn=!1,Ei&&(u=iA(t,a,o,s)),nA(e),u}function nA(e){U.H=ho;var t=xe!==null&&xe.next!==null;if(ya=0,it=xe=Ie=null,br=!1,So=0,hi=null,t)throw Error(l(300));e===null||ot||(e=e.dependencies,e!==null&&Ir(e)&&(ot=!0))}function iA(e,t,a,o){Ie=e;var s=0;do{if(Ei&&(hi=null),So=0,Ei=!1,25<=s)throw Error(l(301));if(s+=1,it=xe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}U.H=xA,u=t(a,o)}while(Ei);return u}function mC(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Ao(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(Ie.flags|=1024),t}function Wl(){var e=Gr!==0;return Gr=0,e}function Yl(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function zl(e){if(br){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}br=!1}ya=0,it=xe=Ie=null,Ei=!1,So=Gr=0,hi=null}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Ie.memoizedState=it=e:it=it.next=e,it}function et(){if(xe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=it===null?Ie.memoizedState:it.next;if(t!==null)it=t,xe=e;else{if(e===null)throw Ie.alternate===null?Error(l(467)):Error(l(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},it===null?Ie.memoizedState=it=e:it=it.next=e}return it}function Fr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=So;return So+=1,hi===null&&(hi=[]),e=_S(hi,e,t),t=Ie,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?wA:nu),e}function Ur(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===J)return St(e)}throw Error(l(438,String(e)))}function jl(e){var t=null,a=Ie.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=Ie.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Fr(),Ie.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=Ae;return t.index++,a}function La(e,t){return typeof t=="function"?t(e):t}function kr(e){var t=et();return Jl(t,xe,e)}function Jl(e,t,a){var o=e.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=a;var s=e.baseQueue,u=o.pending;if(u!==null){if(s!==null){var A=s.next;s.next=u.next,u.next=A}t.baseQueue=s=u,o.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{t=s.next;var R=A=null,I=null,w=t,X=!1;do{var ee=w.lane&-536870913;if(ee!==w.lane?(De&ee)===ee:(ya&ee)===ee){var V=w.revertLane;if(V===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),ee===ui&&(X=!0);else if((ya&V)===V){w=w.next,V===ui&&(X=!0);continue}else ee={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},I===null?(R=I=ee,A=u):I=I.next=ee,Ie.lanes|=V,tn|=V;ee=w.action,Bn&&a(u,ee),u=w.hasEagerState?w.eagerState:a(u,ee)}else V={lane:ee,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},I===null?(R=I=V,A=u):I=I.next=V,Ie.lanes|=ee,tn|=ee;w=w.next}while(w!==null&&w!==t);if(I===null?A=u:I.next=R,!kt(u,e.memoizedState)&&(ot=!0,X&&(a=ci,a!==null)))throw a;e.memoizedState=u,e.baseState=A,e.baseQueue=I,o.lastRenderedState=u}return s===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function _l(e){var t=et(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var o=a.dispatch,s=a.pending,u=t.memoizedState;if(s!==null){a.pending=null;var A=s=s.next;do u=e(u,A.action),A=A.next;while(A!==s);kt(u,t.memoizedState)||(ot=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function oA(e,t,a){var o=Ie,s=et(),u=He;if(u){if(a===void 0)throw Error(l(407));a=a()}else a=t();var A=!kt((xe||s).memoizedState,a);if(A&&(s.memoizedState=a,ot=!0),s=s.queue,ql(lA.bind(null,o,s,e),[e]),s.getSnapshot!==t||A||it!==null&&it.memoizedState.tag&1){if(o.flags|=2048,mi(9,{destroy:void 0},sA.bind(null,o,s,a,t),null),We===null)throw Error(l(349));u||(ya&127)!==0||rA(o,t,a)}return a}function rA(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Ie.updateQueue,t===null?(t=Fr(),Ie.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function sA(e,t,a,o){t.value=a,t.getSnapshot=o,uA(t)&&cA(e)}function lA(e,t,a){return a(function(){uA(t)&&cA(e)})}function uA(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!kt(e,a)}catch{return!0}}function cA(e){var t=pn(e,2);t!==null&&vt(t,e,2)}function Zl(e){var t=It();if(typeof e=="function"){var a=e;if(e=a(),Bn){Va(!0);try{a()}finally{Va(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},t}function dA(e,t,a,o){return e.baseState=a,Jl(e,xe,typeof o=="function"?o:La)}function TC(e,t,a,o,s){if(Vr(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(A){u.listeners.push(A)}};U.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,SA(t,u)):(u.next=a.next,t.pending=a.next=u)}}function SA(e,t){var a=t.action,o=t.payload,s=e.state;if(t.isTransition){var u=U.T,A={};U.T=A;try{var R=a(s,o),I=U.S;I!==null&&I(A,R),AA(e,t,R)}catch(w){Xl(e,t,w)}finally{u!==null&&A.types!==null&&(u.types=A.types),U.T=u}}else try{u=a(s,o),AA(e,t,u)}catch(w){Xl(e,t,w)}}function AA(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){EA(e,t,o)},function(o){return Xl(e,t,o)}):EA(e,t,a)}function EA(e,t,a){t.status="fulfilled",t.value=a,hA(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,SA(e,a)))}function Xl(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,hA(t),t=t.next;while(t!==o)}e.action=null}function hA(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mA(e,t){return t}function TA(e,t){if(He){var a=We.formState;if(a!==null){e:{var o=Ie;if(He){if(Ye){t:{for(var s=Ye,u=$t;s.nodeType!==8;){if(!u){s=null;break t}if(s=ta(s.nextSibling),s===null){s=null;break t}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Ye=ta(s.nextSibling),o=s.data==="F!";break e}}ja(o)}o=!1}o&&(t=a[0])}}return a=It(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mA,lastRenderedState:t},a.queue=o,a=FA.bind(null,Ie,o),o.dispatch=a,o=Zl(!1),u=au.bind(null,Ie,!1,o.queue),o=It(),s={state:t,dispatch:null,action:e,pending:null},o.queue=s,a=TC.bind(null,Ie,s,u,a),s.dispatch=a,o.memoizedState=e,[t,a,!1]}function fA(e){var t=et();return RA(t,xe,e)}function RA(e,t,a){if(t=Jl(e,t,mA)[0],e=kr(La)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Ao(t)}catch(A){throw A===di?Mr:A}else o=t;t=et();var s=t.queue,u=s.dispatch;return a!==t.memoizedState&&(Ie.flags|=2048,mi(9,{destroy:void 0},fC.bind(null,s,a),null)),[o,u,e]}function fC(e,t){e.action=t}function CA(e){var t=et(),a=xe;if(a!==null)return RA(t,a,e);et(),t=t.memoizedState,a=et();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function mi(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=Ie.updateQueue,t===null&&(t=Fr(),Ie.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function OA(){return et().memoizedState}function wr(e,t,a,o){var s=It();Ie.flags|=e,s.memoizedState=mi(1|t,{destroy:void 0},a,o===void 0?null:o)}function xr(e,t,a,o){var s=et();o=o===void 0?null:o;var u=s.memoizedState.inst;xe!==null&&o!==null&&Vl(o,xe.memoizedState.deps)?s.memoizedState=mi(t,u,a,o):(Ie.flags|=e,s.memoizedState=mi(1|t,u,a,o))}function pA(e,t){wr(8390656,8,e,t)}function ql(e,t){xr(2048,8,e,t)}function RC(e){Ie.flags|=4;var t=Ie.updateQueue;if(t===null)t=Fr(),Ie.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function gA(e){var t=et().memoizedState;return RC({ref:t,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function NA(e,t){return xr(4,2,e,t)}function IA(e,t){return xr(4,4,e,t)}function yA(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function LA(e,t,a){a=a!=null?a.concat([e]):null,xr(4,4,yA.bind(null,t,e),a)}function Ql(){}function MA(e,t){var a=et();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Vl(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function PA(e,t){var a=et();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Vl(t,o[1]))return o[0];if(o=e(),Bn){Va(!0);try{e()}finally{Va(!1)}}return a.memoizedState=[o,t],o}function $l(e,t,a){return a===void 0||(ya&1073741824)!==0&&(De&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=DE(),Ie.lanes|=e,tn|=e,a)}function DA(e,t,a,o){return kt(a,t)?a:Ai.current!==null?(e=$l(e,a,o),kt(e,t)||(ot=!0),e):(ya&42)===0||(ya&1073741824)!==0&&(De&261930)===0?(ot=!0,e.memoizedState=a):(e=DE(),Ie.lanes|=e,tn|=e,t)}function BA(e,t,a,o,s){var u=j.p;j.p=u!==0&&8>u?u:8;var A=U.T,R={};U.T=R,au(e,!1,t,a);try{var I=s(),w=U.S;if(w!==null&&w(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var X=EC(I,o);Eo(e,t,X,Yt(e))}else Eo(e,t,o,Yt(e))}catch(ee){Eo(e,t,{then:function(){},status:"rejected",reason:ee},Yt())}finally{j.p=u,A!==null&&R.types!==null&&(A.types=R.types),U.T=A}}function CC(){}function eu(e,t,a,o){if(e.tag!==5)throw Error(l(476));var s=vA(e).queue;BA(e,s,t,re,a===null?CC:function(){return HA(e),a(o)})}function vA(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:re},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function HA(e){var t=vA(e);t.next===null&&(t=e.alternate.memoizedState),Eo(e,t.next.queue,{},Yt())}function tu(){return St(Bo)}function bA(){return et().memoizedState}function GA(){return et().memoizedState}function OC(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Yt();e=Za(a);var o=Xa(t,e,a);o!==null&&(vt(o,t,a),lo(o,t,a)),t={cache:Dl()},e.payload=t;return}t=t.return}}function pC(e,t,a){var o=Yt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vr(e)?UA(t,a):(a=Rl(e,t,a,o),a!==null&&(vt(a,e,o),kA(a,t,o)))}function FA(e,t,a){var o=Yt();Eo(e,t,a,o)}function Eo(e,t,a,o){var s={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vr(e))UA(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var A=t.lastRenderedState,R=u(A,a);if(s.hasEagerState=!0,s.eagerState=R,kt(R,A))return Or(e,t,s,0),We===null&&Cr(),!1}catch{}finally{}if(a=Rl(e,t,s,o),a!==null)return vt(a,e,o),kA(a,t,o),!0}return!1}function au(e,t,a,o){if(o={lane:2,revertLane:bu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vr(e)){if(t)throw Error(l(479))}else t=Rl(e,a,o,2),t!==null&&vt(t,e,2)}function Vr(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function UA(e,t){Ei=br=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function kA(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Wd(e,a)}}var ho={readContext:St,use:Ur,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};ho.useEffectEvent=Xe;var wA={readContext:St,use:Ur,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:pA,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,wr(4194308,4,yA.bind(null,t,e),a)},useLayoutEffect:function(e,t){return wr(4194308,4,e,t)},useInsertionEffect:function(e,t){wr(4,2,e,t)},useMemo:function(e,t){var a=It();t=t===void 0?null:t;var o=e();if(Bn){Va(!0);try{e()}finally{Va(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=It();if(a!==void 0){var s=a(t);if(Bn){Va(!0);try{a(t)}finally{Va(!1)}}}else s=t;return o.memoizedState=o.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},o.queue=e,e=e.dispatch=pC.bind(null,Ie,e),[o.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:function(e){e=Zl(e);var t=e.queue,a=FA.bind(null,Ie,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ql,useDeferredValue:function(e,t){var a=It();return $l(a,e,t)},useTransition:function(){var e=Zl(!1);return e=BA.bind(null,Ie,e.queue,!0,!1),It().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=Ie,s=It();if(He){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),We===null)throw Error(l(349));(De&127)!==0||rA(o,t,a)}s.memoizedState=a;var u={value:a,getSnapshot:t};return s.queue=u,pA(lA.bind(null,o,u,e),[e]),o.flags|=2048,mi(9,{destroy:void 0},sA.bind(null,o,u,a,t),null),a},useId:function(){var e=It(),t=We.identifierPrefix;if(He){var a=da,o=ca;a=(o&~(1<<32-Ut(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Gr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=hC++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:tu,useFormState:TA,useActionState:TA,useOptimistic:function(e){var t=It();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=au.bind(null,Ie,!0,a),a.dispatch=t,[e,t]},useMemoCache:jl,useCacheRefresh:function(){return It().memoizedState=OC.bind(null,Ie)},useEffectEvent:function(e){var t=It(),a={impl:e};return t.memoizedState=a,function(){if((Fe&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},nu={readContext:St,use:Ur,useCallback:MA,useContext:St,useEffect:ql,useImperativeHandle:LA,useInsertionEffect:NA,useLayoutEffect:IA,useMemo:PA,useReducer:kr,useRef:OA,useState:function(){return kr(La)},useDebugValue:Ql,useDeferredValue:function(e,t){var a=et();return DA(a,xe.memoizedState,e,t)},useTransition:function(){var e=kr(La)[0],t=et().memoizedState;return[typeof e=="boolean"?e:Ao(e),t]},useSyncExternalStore:oA,useId:bA,useHostTransitionStatus:tu,useFormState:fA,useActionState:fA,useOptimistic:function(e,t){var a=et();return dA(a,xe,e,t)},useMemoCache:jl,useCacheRefresh:GA};nu.useEffectEvent=gA;var xA={readContext:St,use:Ur,useCallback:MA,useContext:St,useEffect:ql,useImperativeHandle:LA,useInsertionEffect:NA,useLayoutEffect:IA,useMemo:PA,useReducer:_l,useRef:OA,useState:function(){return _l(La)},useDebugValue:Ql,useDeferredValue:function(e,t){var a=et();return xe===null?$l(a,e,t):DA(a,xe.memoizedState,e,t)},useTransition:function(){var e=_l(La)[0],t=et().memoizedState;return[typeof e=="boolean"?e:Ao(e),t]},useSyncExternalStore:oA,useId:bA,useHostTransitionStatus:tu,useFormState:CA,useActionState:CA,useOptimistic:function(e,t){var a=et();return xe!==null?dA(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jl,useCacheRefresh:GA};xA.useEffectEvent=gA;function iu(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:f({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ou={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Yt(),s=Za(o);s.payload=t,a!=null&&(s.callback=a),t=Xa(e,s,o),t!==null&&(vt(t,e,o),lo(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Yt(),s=Za(o);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=Xa(e,s,o),t!==null&&(vt(t,e,o),lo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Yt(),o=Za(a);o.tag=2,t!=null&&(o.callback=t),t=Xa(e,o,a),t!==null&&(vt(t,e,a),lo(t,e,a))}};function VA(e,t,a,o,s,u,A){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,A):t.prototype&&t.prototype.isPureReactComponent?!eo(a,o)||!eo(s,u):!0}function KA(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&ou.enqueueReplaceState(t,t.state,null)}function vn(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=f({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function WA(e){Rr(e)}function YA(e){console.error(e)}function zA(e){Rr(e)}function Kr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function jA(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function ru(e,t,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){Kr(e,t)},a}function JA(e){return e=Za(e),e.tag=3,e}function _A(e,t,a,o){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var u=o.value;e.payload=function(){return s(u)},e.callback=function(){jA(t,a,o)}}var A=a.stateNode;A!==null&&typeof A.componentDidCatch=="function"&&(e.callback=function(){jA(t,a,o),typeof s!="function"&&(an===null?an=new Set([this]):an.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function gC(e,t,a,o,s){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&li(t,a,s,!0),a=xt.current,a!==null){switch(a.tag){case 31:case 13:return ea===null?es():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=s,o===Pr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),Bu(e,o,s)),!1;case 22:return a.flags|=65536,o===Pr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),Bu(e,o,s)),!1}throw Error(l(435,a.tag))}return Bu(e,o,s),es(),!1}if(He)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,o!==Il&&(e=Error(l(422),{cause:o}),no(Xt(e,a)))):(o!==Il&&(t=Error(l(423),{cause:o}),no(Xt(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,o=Xt(o,a),s=ru(e.stateNode,o,s),Fl(e,s),qe!==4&&(qe=2)),!1;var u=Error(l(520),{cause:o});if(u=Xt(u,a),go===null?go=[u]:go.push(u),qe!==4&&(qe=2),t===null)return!0;o=Xt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=ru(a.stateNode,o,e),Fl(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(an===null||!an.has(u))))return a.flags|=65536,s&=-s,a.lanes|=s,s=JA(s),_A(s,e,a,o),Fl(a,s),!1}a=a.return}while(a!==null);return!1}var su=Error(l(461)),ot=!1;function At(e,t,a,o){t.child=e===null?QS(t,null,a,o):Dn(t,e.child,a,o)}function ZA(e,t,a,o,s){a=a.render;var u=t.ref;if("ref"in o){var A={};for(var R in o)R!=="ref"&&(A[R]=o[R])}else A=o;return yn(t),o=Kl(e,t,a,A,u,s),R=Wl(),e!==null&&!ot?(Yl(e,t,s),Ma(e,t,s)):(He&&R&&gl(t),t.flags|=1,At(e,t,o,s),t.child)}function XA(e,t,a,o,s){if(e===null){var u=a.type;return typeof u=="function"&&!Cl(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,qA(e,t,u,o,s)):(e=gr(a.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!hu(e,s)){var A=u.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(A,o)&&e.ref===t.ref)return Ma(e,t,s)}return t.flags|=1,e=pa(u,o),e.ref=t.ref,e.return=t,t.child=e}function qA(e,t,a,o,s){if(e!==null){var u=e.memoizedProps;if(eo(u,o)&&e.ref===t.ref)if(ot=!1,t.pendingProps=o=u,hu(e,s))(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Ma(e,t,s)}return lu(e,t,a,o,s)}function QA(e,t,a,o){var s=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,s=0;o!==null;)s=s|o.lanes|o.childLanes,o=o.sibling;o=s&~u}else o=0,t.child=null;return $A(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Lr(t,u!==null?u.cachePool:null),u!==null?tA(t,u):kl(),aA(t);else return o=t.lanes=536870912,$A(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(Lr(t,u.cachePool),tA(t,u),Qa(),t.memoizedState=null):(e!==null&&Lr(t,null),kl(),Qa());return At(e,t,s,a),t.child}function mo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $A(e,t,a,o,s){var u=vl();return u=u===null?null:{parent:nt._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&Lr(t,null),kl(),aA(t),e!==null&&li(e,t,o,!0),t.childLanes=s,null}function Wr(e,t){return t=zr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function eE(e,t,a){return Dn(t,e.child,null,a),e=Wr(t,t.pendingProps),e.flags|=2,Vt(t),t.memoizedState=null,e}function NC(e,t,a){var o=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(o.mode==="hidden")return e=Wr(t,o),t.lanes=536870912,mo(null,e);if(xl(t),(e=Ye)?(e=Sh(e,$t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:ca,overflow:da}:null,retryLane:536870912,hydrationErrors:null},a=US(e),a.return=t,t.child=a,dt=t,Ye=null)):e=null,e===null)throw ja(t);return t.lanes=536870912,null}return Wr(t,o)}var u=e.memoizedState;if(u!==null){var A=u.dehydrated;if(xl(t),s)if(t.flags&256)t.flags&=-257,t=eE(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(ot||li(e,t,a,!1),s=(a&e.childLanes)!==0,ot||s){if(o=We,o!==null&&(A=Yd(o,a),A!==0&&A!==u.retryLane))throw u.retryLane=A,pn(e,A),vt(o,e,A),su;es(),t=eE(e,t,a)}else e=u.treeContext,Ye=ta(A.nextSibling),dt=t,He=!0,za=null,$t=!1,e!==null&&xS(t,e),t=Wr(t,o),t.flags|=4096;return t}return e=pa(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Yr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function lu(e,t,a,o,s){return yn(t),a=Kl(e,t,a,o,void 0,s),o=Wl(),e!==null&&!ot?(Yl(e,t,s),Ma(e,t,s)):(He&&o&&gl(t),t.flags|=1,At(e,t,a,s),t.child)}function tE(e,t,a,o,s,u){return yn(t),t.updateQueue=null,a=iA(t,o,a,s),nA(e),o=Wl(),e!==null&&!ot?(Yl(e,t,u),Ma(e,t,u)):(He&&o&&gl(t),t.flags|=1,At(e,t,a,u),t.child)}function aE(e,t,a,o,s){if(yn(t),t.stateNode===null){var u=ii,A=a.contextType;typeof A=="object"&&A!==null&&(u=St(A)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ou,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},bl(t),A=a.contextType,u.context=typeof A=="object"&&A!==null?St(A):ii,u.state=t.memoizedState,A=a.getDerivedStateFromProps,typeof A=="function"&&(iu(t,a,A,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(A=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),A!==u.state&&ou.enqueueReplaceState(u,u.state,null),co(t,o,u,s),uo(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var R=t.memoizedProps,I=vn(a,R);u.props=I;var w=u.context,X=a.contextType;A=ii,typeof X=="object"&&X!==null&&(A=St(X));var ee=a.getDerivedStateFromProps;X=typeof ee=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=t.pendingProps!==R,X||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||w!==A)&&KA(t,u,o,A),_a=!1;var V=t.memoizedState;u.state=V,co(t,o,u,s),uo(),w=t.memoizedState,R||V!==w||_a?(typeof ee=="function"&&(iu(t,a,ee,o),w=t.memoizedState),(I=_a||VA(t,a,I,o,V,w,A))?(X||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=w),u.props=o,u.state=w,u.context=A,o=I):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Gl(e,t),A=t.memoizedProps,X=vn(a,A),u.props=X,ee=t.pendingProps,V=u.context,w=a.contextType,I=ii,typeof w=="object"&&w!==null&&(I=St(w)),R=a.getDerivedStateFromProps,(w=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(A!==ee||V!==I)&&KA(t,u,o,I),_a=!1,V=t.memoizedState,u.state=V,co(t,o,u,s),uo();var Y=t.memoizedState;A!==ee||V!==Y||_a||e!==null&&e.dependencies!==null&&Ir(e.dependencies)?(typeof R=="function"&&(iu(t,a,R,o),Y=t.memoizedState),(X=_a||VA(t,a,X,o,V,Y,I)||e!==null&&e.dependencies!==null&&Ir(e.dependencies))?(w||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,Y,I),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,Y,I)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||A===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=Y),u.props=o,u.state=Y,u.context=I,o=X):(typeof u.componentDidUpdate!="function"||A===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,Yr(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=Dn(t,e.child,null,s),t.child=Dn(t,null,a,s)):At(e,t,a,s),t.memoizedState=u.state,e=t.child):e=Ma(e,t,s),e}function nE(e,t,a,o){return Nn(),t.flags|=256,At(e,t,a,o),t.child}var uu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cu(e){return{baseLanes:e,cachePool:jS()}}function du(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Wt),e}function iE(e,t,a){var o=t.pendingProps,s=!1,u=(t.flags&128)!==0,A;if((A=u)||(A=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),A&&(s=!0,t.flags&=-129),A=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(s?qa(t):Qa(),(e=Ye)?(e=Sh(e,$t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:ca,overflow:da}:null,retryLane:536870912,hydrationErrors:null},a=US(e),a.return=t,t.child=a,dt=t,Ye=null)):e=null,e===null)throw ja(t);return Ju(e)?t.lanes=32:t.lanes=536870912,null}var R=o.children;return o=o.fallback,s?(Qa(),s=t.mode,R=zr({mode:"hidden",children:R},s),o=gn(o,s,a,null),R.return=t,o.return=t,R.sibling=o,t.child=R,o=t.child,o.memoizedState=cu(a),o.childLanes=du(e,A,a),t.memoizedState=uu,mo(null,o)):(qa(t),Su(t,R))}var I=e.memoizedState;if(I!==null&&(R=I.dehydrated,R!==null)){if(u)t.flags&256?(qa(t),t.flags&=-257,t=Au(e,t,a)):t.memoizedState!==null?(Qa(),t.child=e.child,t.flags|=128,t=null):(Qa(),R=o.fallback,s=t.mode,o=zr({mode:"visible",children:o.children},s),R=gn(R,s,a,null),R.flags|=2,o.return=t,R.return=t,o.sibling=R,t.child=o,Dn(t,e.child,null,a),o=t.child,o.memoizedState=cu(a),o.childLanes=du(e,A,a),t.memoizedState=uu,t=mo(null,o));else if(qa(t),Ju(R)){if(A=R.nextSibling&&R.nextSibling.dataset,A)var w=A.dgst;A=w,o=Error(l(419)),o.stack="",o.digest=A,no({value:o,source:null,stack:null}),t=Au(e,t,a)}else if(ot||li(e,t,a,!1),A=(a&e.childLanes)!==0,ot||A){if(A=We,A!==null&&(o=Yd(A,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,pn(e,o),vt(A,e,o),su;ju(R)||es(),t=Au(e,t,a)}else ju(R)?(t.flags|=192,t.child=e.child,t=null):(e=I.treeContext,Ye=ta(R.nextSibling),dt=t,He=!0,za=null,$t=!1,e!==null&&xS(t,e),t=Su(t,o.children),t.flags|=4096);return t}return s?(Qa(),R=o.fallback,s=t.mode,I=e.child,w=I.sibling,o=pa(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,w!==null?R=pa(w,R):(R=gn(R,s,a,null),R.flags|=2),R.return=t,o.return=t,o.sibling=R,t.child=o,mo(null,o),o=t.child,R=e.child.memoizedState,R===null?R=cu(a):(s=R.cachePool,s!==null?(I=nt._currentValue,s=s.parent!==I?{parent:I,pool:I}:s):s=jS(),R={baseLanes:R.baseLanes|a,cachePool:s}),o.memoizedState=R,o.childLanes=du(e,A,a),t.memoizedState=uu,mo(e.child,o)):(qa(t),a=e.child,e=a.sibling,a=pa(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(A=t.deletions,A===null?(t.deletions=[e],t.flags|=16):A.push(e)),t.child=a,t.memoizedState=null,a)}function Su(e,t){return t=zr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zr(e,t){return e=wt(22,e,null,t),e.lanes=0,e}function Au(e,t,a){return Dn(t,e.child,null,a),e=Su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oE(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ml(e.return,t,a)}function Eu(e,t,a,o,s,u){var A=e.memoizedState;A===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:s,treeForkCount:u}:(A.isBackwards=t,A.rendering=null,A.renderingStartTime=0,A.last=o,A.tail=a,A.tailMode=s,A.treeForkCount=u)}function rE(e,t,a){var o=t.pendingProps,s=o.revealOrder,u=o.tail;o=o.children;var A=$e.current,R=(A&2)!==0;if(R?(A=A&1|2,t.flags|=128):A&=1,B($e,A),At(e,t,o,a),o=He?ao:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oE(e,a,t);else if(e.tag===19)oE(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&Hr(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),Eu(t,!1,s,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Hr(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}Eu(t,!0,a,null,u,o);break;case"together":Eu(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Ma(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(li(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=pa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=pa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function hu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ir(e)))}function IC(e,t,a){switch(t.tag){case 3:W(t,t.stateNode.containerInfo),Ja(t,nt,e.memoizedState.cache),Nn();break;case 27:case 5:Q(t);break;case 4:W(t,t.stateNode.containerInfo);break;case 10:Ja(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,xl(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(qa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?iE(e,t,a):(qa(t),e=Ma(e,t,a),e!==null?e.sibling:null);qa(t);break;case 19:var s=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(li(e,t,a,!1),o=(a&t.childLanes)!==0),s){if(o)return rE(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),B($e,$e.current),o)break;return null;case 22:return t.lanes=0,QA(e,t,a,t.pendingProps);case 24:Ja(t,nt,e.memoizedState.cache)}return Ma(e,t,a)}function sE(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ot=!0;else{if(!hu(e,a)&&(t.flags&128)===0)return ot=!1,IC(e,t,a);ot=(e.flags&131072)!==0}else ot=!1,He&&(t.flags&1048576)!==0&&wS(t,ao,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Mn(t.elementType),t.type=e,typeof e=="function")Cl(e)?(o=vn(e,o),t.tag=1,t=aE(null,t,e,o,a)):(t.tag=0,t=lu(null,t,e,o,a));else{if(e!=null){var s=e.$$typeof;if(s===ne){t.tag=11,t=ZA(null,t,e,o,a);break e}else if(s===ae){t.tag=14,t=XA(null,t,e,o,a);break e}}throw t=ve(e)||e,Error(l(306,t,""))}}return t;case 0:return lu(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,s=vn(o,t.pendingProps),aE(e,t,o,s,a);case 3:e:{if(W(t,t.stateNode.containerInfo),e===null)throw Error(l(387));o=t.pendingProps;var u=t.memoizedState;s=u.element,Gl(e,t),co(t,o,null,a);var A=t.memoizedState;if(o=A.cache,Ja(t,nt,o),o!==u.cache&&Pl(t,[nt],a,!0),uo(),o=A.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:A.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=nE(e,t,o,a);break e}else if(o!==s){s=Xt(Error(l(424)),t),no(s),t=nE(e,t,o,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=ta(e.firstChild),dt=t,He=!0,za=null,$t=!0,a=QS(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Nn(),o===s){t=Ma(e,t,a);break e}At(e,t,o,a)}t=t.child}return t;case 26:return Yr(e,t),e===null?(a=fh(t.type,null,t.pendingProps,null))?t.memoizedState=a:He||(a=t.type,e=t.pendingProps,o=ss(D.current).createElement(a),o[ct]=t,o[yt]=e,Et(o,a,e),lt(o),t.stateNode=o):t.memoizedState=fh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),e===null&&He&&(o=t.stateNode=hh(t.type,t.pendingProps,D.current),dt=t,$t=!0,s=Ye,sn(t.type)?(_u=s,Ye=ta(o.firstChild)):Ye=s),At(e,t,t.pendingProps.children,a),Yr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((s=o=Ye)&&(o=tO(o,t.type,t.pendingProps,$t),o!==null?(t.stateNode=o,dt=t,Ye=ta(o.firstChild),$t=!1,s=!0):s=!1),s||ja(t)),Q(t),s=t.type,u=t.pendingProps,A=e!==null?e.memoizedProps:null,o=u.children,Wu(s,u)?o=null:A!==null&&Wu(s,A)&&(t.flags|=32),t.memoizedState!==null&&(s=Kl(e,t,mC,null,null,a),Bo._currentValue=s),Yr(e,t),At(e,t,o,a),t.child;case 6:return e===null&&He&&((e=a=Ye)&&(a=aO(a,t.pendingProps,$t),a!==null?(t.stateNode=a,dt=t,Ye=null,e=!0):e=!1),e||ja(t)),null;case 13:return iE(e,t,a);case 4:return W(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Dn(t,null,o,a):At(e,t,o,a),t.child;case 11:return ZA(e,t,t.type,t.pendingProps,a);case 7:return At(e,t,t.pendingProps,a),t.child;case 8:return At(e,t,t.pendingProps.children,a),t.child;case 12:return At(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Ja(t,t.type,o.value),At(e,t,o.children,a),t.child;case 9:return s=t.type._context,o=t.pendingProps.children,yn(t),s=St(s),o=o(s),t.flags|=1,At(e,t,o,a),t.child;case 14:return XA(e,t,t.type,t.pendingProps,a);case 15:return qA(e,t,t.type,t.pendingProps,a);case 19:return rE(e,t,a);case 31:return NC(e,t,a);case 22:return QA(e,t,a,t.pendingProps);case 24:return yn(t),o=St(nt),e===null?(s=vl(),s===null&&(s=We,u=Dl(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=a),s=u),t.memoizedState={parent:o,cache:s},bl(t),Ja(t,nt,s)):((e.lanes&a)!==0&&(Gl(e,t),co(t,null,null,a),uo()),s=e.memoizedState,u=t.memoizedState,s.parent!==o?(s={parent:o,cache:o},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ja(t,nt,o)):(o=u.cache,Ja(t,nt,o),o!==s.cache&&Pl(t,[nt],a,!0))),At(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Pa(e){e.flags|=4}function mu(e,t,a,o,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(bE())e.flags|=8192;else throw Pn=Pr,Hl}else e.flags&=-16777217}function lE(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gh(t))if(bE())e.flags|=8192;else throw Pn=Pr,Hl}function jr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vd():536870912,e.lanes|=t,Ci|=t)}function To(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,o|=s.subtreeFlags&65011712,o|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function yC(e,t,a){var o=t.pendingProps;switch(Nl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Ia(nt),$(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(si(t)?Pa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yl())),ze(t),null;case 26:var s=t.type,u=t.memoizedState;return e===null?(Pa(t),u!==null?(ze(t),lE(t,u)):(ze(t),mu(t,s,null,o,a))):u?u!==e.memoizedState?(Pa(t),ze(t),lE(t,u)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Pa(t),ze(t),mu(t,s,e,o,a)),null;case 27:if(_(t),a=D.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Pa(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return ze(t),null}e=F.current,si(t)?VS(t):(e=hh(s,o,a),t.stateNode=e,Pa(t))}return ze(t),null;case 5:if(_(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Pa(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return ze(t),null}if(u=F.current,si(t))VS(t);else{var A=ss(D.current);switch(u){case 1:u=A.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=A.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=A.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=A.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=A.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?A.createElement("select",{is:o.is}):A.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?A.createElement(s,{is:o.is}):A.createElement(s)}}u[ct]=t,u[yt]=o;e:for(A=t.child;A!==null;){if(A.tag===5||A.tag===6)u.appendChild(A.stateNode);else if(A.tag!==4&&A.tag!==27&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;A=A.return}A.sibling.return=A.return,A=A.sibling}t.stateNode=u;e:switch(Et(u,s,o),s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Pa(t)}}return ze(t),mu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Pa(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(e=D.current,si(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,s=dt,s!==null)switch(s.tag){case 27:case 5:o=s.memoizedProps}e[ct]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ih(e.nodeValue,a)),e||ja(t,!0)}else e=ss(e).createTextNode(o),e[ct]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=si(t),a!==null){if(e===null){if(!o)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[ct]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Vt(t),t):(Vt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return ze(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=si(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[ct]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),s=!1}else s=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Vt(t),t):(Vt(t),null)}return Vt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,s=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(s=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==s&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),jr(t,t.updateQueue),ze(t),null);case 4:return $(),e===null&&ku(t.stateNode.containerInfo),ze(t),null;case 10:return Ia(t.type),ze(t),null;case 19:if(N($e),o=t.memoizedState,o===null)return ze(t),null;if(s=(t.flags&128)!==0,u=o.rendering,u===null)if(s)To(o,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Hr(e),u!==null){for(t.flags|=128,To(o,!1),e=u.updateQueue,t.updateQueue=e,jr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)FS(a,e),a=a.sibling;return B($e,$e.current&1|2),He&&ga(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Gt()>qr&&(t.flags|=128,s=!0,To(o,!1),t.lanes=4194304)}else{if(!s)if(e=Hr(u),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,jr(t,e),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!He)return ze(t),null}else 2*Gt()-o.renderingStartTime>qr&&a!==536870912&&(t.flags|=128,s=!0,To(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Gt(),e.sibling=null,a=$e.current,B($e,s?a&1|2:a&1),He&&ga(t,o.treeForkCount),e):(ze(t),null);case 22:case 23:return Vt(t),wl(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&jr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&N(Ln),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ia(nt),ze(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function LC(e,t){switch(Nl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ia(nt),$(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _(t),null;case 31:if(t.memoizedState!==null){if(Vt(t),t.alternate===null)throw Error(l(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N($e),null;case 4:return $(),null;case 10:return Ia(t.type),null;case 22:case 23:return Vt(t),wl(),e!==null&&N(Ln),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ia(nt),null;case 25:return null;default:return null}}function uE(e,t){switch(Nl(t),t.tag){case 3:Ia(nt),$();break;case 26:case 27:case 5:_(t);break;case 4:$();break;case 31:t.memoizedState!==null&&Vt(t);break;case 13:Vt(t);break;case 19:N($e);break;case 10:Ia(t.type);break;case 22:case 23:Vt(t),wl(),e!==null&&N(Ln);break;case 24:Ia(nt)}}function fo(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){o=void 0;var u=a.create,A=a.inst;o=u(),A.destroy=o}a=a.next}while(a!==s)}}catch(R){we(t,t.return,R)}}function $a(e,t,a){try{var o=t.updateQueue,s=o!==null?o.lastEffect:null;if(s!==null){var u=s.next;o=u;do{if((o.tag&e)===e){var A=o.inst,R=A.destroy;if(R!==void 0){A.destroy=void 0,s=t;var I=a,w=R;try{w()}catch(X){we(s,I,X)}}}o=o.next}while(o!==u)}}catch(X){we(t,t.return,X)}}function cE(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{eA(t,a)}catch(o){we(e,e.return,o)}}}function dE(e,t,a){a.props=vn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){we(e,t,o)}}function Ro(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(s){we(e,t,s)}}function Sa(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(s){we(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){we(e,t,s)}else a.current=null}function SE(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(s){we(e,e.return,s)}}function Tu(e,t,a){try{var o=e.stateNode;ZC(o,e.type,a,t),o[yt]=t}catch(s){we(e,e.return,s)}}function AE(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sn(e.type)||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||AE(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ru(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ca));else if(o!==4&&(o===27&&sn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ru(e,t,a),e=e.sibling;e!==null;)Ru(e,t,a),e=e.sibling}function Jr(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&sn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Jr(e,t,a),e=e.sibling;e!==null;)Jr(e,t,a),e=e.sibling}function EE(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Et(t,o,a),t[ct]=e,t[yt]=a}catch(u){we(e,e.return,u)}}var Da=!1,rt=!1,Cu=!1,hE=typeof WeakSet=="function"?WeakSet:Set,ut=null;function MC(e,t){if(e=e.containerInfo,Vu=Es,e=LS(e),Al(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var s=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var A=0,R=-1,I=-1,w=0,X=0,ee=e,V=null;t:for(;;){for(var Y;ee!==a||s!==0&&ee.nodeType!==3||(R=A+s),ee!==u||o!==0&&ee.nodeType!==3||(I=A+o),ee.nodeType===3&&(A+=ee.nodeValue.length),(Y=ee.firstChild)!==null;)V=ee,ee=Y;for(;;){if(ee===e)break t;if(V===a&&++w===s&&(R=A),V===u&&++X===o&&(I=A),(Y=ee.nextSibling)!==null)break;ee=V,V=ee.parentNode}ee=Y}a=R===-1||I===-1?null:{start:R,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ku={focusedElem:e,selectionRange:a},Es=!1,ut=t;ut!==null;)if(t=ut,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ut=e;else for(;ut!==null;){switch(t=ut,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,s=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var Se=vn(a.type,s);e=o.getSnapshotBeforeUpdate(Se,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(Ce){we(a,a.return,Ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)zu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,ut=e;break}ut=t.return}}function mE(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),o&4&&fo(5,a);break;case 1:if(va(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(A){we(a,a.return,A)}else{var s=vn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(A){we(a,a.return,A)}}o&64&&cE(a),o&512&&Ro(a,a.return);break;case 3:if(va(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{eA(e,t)}catch(A){we(a,a.return,A)}}break;case 27:t===null&&o&4&&EE(a);case 26:case 5:va(e,a),t===null&&o&4&&SE(a),o&512&&Ro(a,a.return);break;case 12:va(e,a);break;case 31:va(e,a),o&4&&RE(e,a);break;case 13:va(e,a),o&4&&CE(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=UC.bind(null,a),nO(e,a))));break;case 22:if(o=a.memoizedState!==null||Da,!o){t=t!==null&&t.memoizedState!==null||rt,s=Da;var u=rt;Da=o,(rt=t)&&!u?Ha(e,a,(a.subtreeFlags&8772)!==0):va(e,a),Da=s,rt=u}break;case 30:break;default:va(e,a)}}function TE(e){var t=e.alternate;t!==null&&(e.alternate=null,TE(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Mt=!1;function Ba(e,t,a){for(a=a.child;a!==null;)fE(e,t,a),a=a.sibling}function fE(e,t,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Ki,a)}catch{}switch(a.tag){case 26:rt||Sa(a,t),Ba(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rt||Sa(a,t);var o=Je,s=Mt;sn(a.type)&&(Je=a.stateNode,Mt=!1),Ba(e,t,a),Mo(a.stateNode),Je=o,Mt=s;break;case 5:rt||Sa(a,t);case 6:if(o=Je,s=Mt,Je=null,Ba(e,t,a),Je=o,Mt=s,Je!==null)if(Mt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(u){we(a,t,u)}else try{Je.removeChild(a.stateNode)}catch(u){we(a,t,u)}break;case 18:Je!==null&&(Mt?(e=Je,ch(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mi(e)):ch(Je,a.stateNode));break;case 4:o=Je,s=Mt,Je=a.stateNode.containerInfo,Mt=!0,Ba(e,t,a),Je=o,Mt=s;break;case 0:case 11:case 14:case 15:$a(2,a,t),rt||$a(4,a,t),Ba(e,t,a);break;case 1:rt||(Sa(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&dE(a,t,o)),Ba(e,t,a);break;case 21:Ba(e,t,a);break;case 22:rt=(o=rt)||a.memoizedState!==null,Ba(e,t,a),rt=o;break;default:Ba(e,t,a)}}function RE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mi(e)}catch(a){we(t,t.return,a)}}}function CE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mi(e)}catch(a){we(t,t.return,a)}}function PC(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hE),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hE),t;default:throw Error(l(435,e.tag))}}function _r(e,t){var a=PC(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var s=kC.bind(null,e,o);o.then(s,s)}})}function Pt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var s=a[o],u=e,A=t,R=A;e:for(;R!==null;){switch(R.tag){case 27:if(sn(R.type)){Je=R.stateNode,Mt=!1;break e}break;case 5:Je=R.stateNode,Mt=!1;break e;case 3:case 4:Je=R.stateNode.containerInfo,Mt=!0;break e}R=R.return}if(Je===null)throw Error(l(160));fE(u,A,s),Je=null,Mt=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)OE(t,e),t=t.sibling}var ra=null;function OE(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pt(t,e),Dt(e),o&4&&($a(3,e,e.return),fo(3,e),$a(5,e,e.return));break;case 1:Pt(t,e),Dt(e),o&512&&(rt||a===null||Sa(a,a.return)),o&64&&Da&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var s=ra;if(Pt(t,e),Dt(e),o&512&&(rt||a===null||Sa(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(o){case"title":u=s.getElementsByTagName("title")[0],(!u||u[zi]||u[ct]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(o),s.head.insertBefore(u,s.querySelector("head > title"))),Et(u,o,a),u[ct]=e,lt(u),o=u;break e;case"link":var A=Oh("link","href",s).get(o+(a.href||""));if(A){for(var R=0;R<A.length;R++)if(u=A[R],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){A.splice(R,1);break t}}u=s.createElement(o),Et(u,o,a),s.head.appendChild(u);break;case"meta":if(A=Oh("meta","content",s).get(o+(a.content||""))){for(R=0;R<A.length;R++)if(u=A[R],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){A.splice(R,1);break t}}u=s.createElement(o),Et(u,o,a),s.head.appendChild(u);break;default:throw Error(l(468,o))}u[ct]=e,lt(u),o=u}e.stateNode=o}else ph(s,e.type,e.stateNode);else e.stateNode=Ch(s,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?ph(s,e.type,e.stateNode):Ch(s,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Tu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Pt(t,e),Dt(e),o&512&&(rt||a===null||Sa(a,a.return)),a!==null&&o&4&&Tu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Pt(t,e),Dt(e),o&512&&(rt||a===null||Sa(a,a.return)),e.flags&32){s=e.stateNode;try{qn(s,"")}catch(Se){we(e,e.return,Se)}}o&4&&e.stateNode!=null&&(s=e.memoizedProps,Tu(e,s,a!==null?a.memoizedProps:s)),o&1024&&(Cu=!0);break;case 6:if(Pt(t,e),Dt(e),o&4){if(e.stateNode===null)throw Error(l(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Se){we(e,e.return,Se)}}break;case 3:if(cs=null,s=ra,ra=ls(t.containerInfo),Pt(t,e),ra=s,Dt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mi(t.containerInfo)}catch(Se){we(e,e.return,Se)}Cu&&(Cu=!1,pE(e));break;case 4:o=ra,ra=ls(e.stateNode.containerInfo),Pt(t,e),Dt(e),ra=o;break;case 12:Pt(t,e),Dt(e);break;case 31:Pt(t,e),Dt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_r(e,o)));break;case 13:Pt(t,e),Dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xr=Gt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_r(e,o)));break;case 22:s=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,w=Da,X=rt;if(Da=w||s,rt=X||I,Pt(t,e),rt=X,Da=w,Dt(e),o&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||I||Da||rt||Hn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){I=a=t;try{if(u=I.stateNode,s)A=u.style,typeof A.setProperty=="function"?A.setProperty("display","none","important"):A.display="none";else{R=I.stateNode;var ee=I.memoizedProps.style,V=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;R.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(Se){we(I,I.return,Se)}}}else if(t.tag===6){if(a===null){I=t;try{I.stateNode.nodeValue=s?"":I.memoizedProps}catch(Se){we(I,I.return,Se)}}}else if(t.tag===18){if(a===null){I=t;try{var Y=I.stateNode;s?dh(Y,!0):dh(I.stateNode,!1)}catch(Se){we(I,I.return,Se)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,_r(e,a))));break;case 19:Pt(t,e),Dt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_r(e,o)));break;case 30:break;case 21:break;default:Pt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(AE(o)){a=o;break}o=o.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var s=a.stateNode,u=fu(e);Jr(e,u,s);break;case 5:var A=a.stateNode;a.flags&32&&(qn(A,""),a.flags&=-33);var R=fu(e);Jr(e,R,A);break;case 3:case 4:var I=a.stateNode.containerInfo,w=fu(e);Ru(e,w,I);break;default:throw Error(l(161))}}catch(X){we(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pE(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pE(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function va(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)mE(e,t.alternate,t),t=t.sibling}function Hn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:$a(4,t,t.return),Hn(t);break;case 1:Sa(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&dE(t,t.return,a),Hn(t);break;case 27:Mo(t.stateNode);case 26:case 5:Sa(t,t.return),Hn(t);break;case 22:t.memoizedState===null&&Hn(t);break;case 30:Hn(t);break;default:Hn(t)}e=e.sibling}}function Ha(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,s=e,u=t,A=u.flags;switch(u.tag){case 0:case 11:case 15:Ha(s,u,a),fo(4,u);break;case 1:if(Ha(s,u,a),o=u,s=o.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(w){we(o,o.return,w)}if(o=u,s=o.updateQueue,s!==null){var R=o.stateNode;try{var I=s.shared.hiddenCallbacks;if(I!==null)for(s.shared.hiddenCallbacks=null,s=0;s<I.length;s++)$S(I[s],R)}catch(w){we(o,o.return,w)}}a&&A&64&&cE(u),Ro(u,u.return);break;case 27:EE(u);case 26:case 5:Ha(s,u,a),a&&o===null&&A&4&&SE(u),Ro(u,u.return);break;case 12:Ha(s,u,a);break;case 31:Ha(s,u,a),a&&A&4&&RE(s,u);break;case 13:Ha(s,u,a),a&&A&4&&CE(s,u);break;case 22:u.memoizedState===null&&Ha(s,u,a),Ro(u,u.return);break;case 30:break;default:Ha(s,u,a)}t=t.sibling}}function Ou(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&io(a))}function pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&io(e))}function sa(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gE(e,t,a,o),t=t.sibling}function gE(e,t,a,o){var s=t.flags;switch(t.tag){case 0:case 11:case 15:sa(e,t,a,o),s&2048&&fo(9,t);break;case 1:sa(e,t,a,o);break;case 3:sa(e,t,a,o),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&io(e)));break;case 12:if(s&2048){sa(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,A=u.id,R=u.onPostCommit;typeof R=="function"&&R(A,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){we(t,t.return,I)}}else sa(e,t,a,o);break;case 31:sa(e,t,a,o);break;case 13:sa(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,A=t.alternate,t.memoizedState!==null?u._visibility&2?sa(e,t,a,o):Co(e,t):u._visibility&2?sa(e,t,a,o):(u._visibility|=2,Ti(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Ou(A,t);break;case 24:sa(e,t,a,o),s&2048&&pu(t.alternate,t);break;default:sa(e,t,a,o)}}function Ti(e,t,a,o,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,A=t,R=a,I=o,w=A.flags;switch(A.tag){case 0:case 11:case 15:Ti(u,A,R,I,s),fo(8,A);break;case 23:break;case 22:var X=A.stateNode;A.memoizedState!==null?X._visibility&2?Ti(u,A,R,I,s):Co(u,A):(X._visibility|=2,Ti(u,A,R,I,s)),s&&w&2048&&Ou(A.alternate,A);break;case 24:Ti(u,A,R,I,s),s&&w&2048&&pu(A.alternate,A);break;default:Ti(u,A,R,I,s)}t=t.sibling}}function Co(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,s=o.flags;switch(o.tag){case 22:Co(a,o),s&2048&&Ou(o.alternate,o);break;case 24:Co(a,o),s&2048&&pu(o.alternate,o);break;default:Co(a,o)}t=t.sibling}}var Oo=8192;function fi(e,t,a){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)NE(e,t,a),e=e.sibling}function NE(e,t,a){switch(e.tag){case 26:fi(e,t,a),e.flags&Oo&&e.memoizedState!==null&&hO(a,ra,e.memoizedState,e.memoizedProps);break;case 5:fi(e,t,a);break;case 3:case 4:var o=ra;ra=ls(e.stateNode.containerInfo),fi(e,t,a),ra=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Oo,Oo=16777216,fi(e,t,a),Oo=o):fi(e,t,a));break;default:fi(e,t,a)}}function IE(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function po(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ut=o,LE(o,e)}IE(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yE(e),e=e.sibling}function yE(e){switch(e.tag){case 0:case 11:case 15:po(e),e.flags&2048&&$a(9,e,e.return);break;case 3:po(e);break;case 12:po(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zr(e)):po(e);break;default:po(e)}}function Zr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ut=o,LE(o,e)}IE(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:$a(8,t,t.return),Zr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Zr(t));break;default:Zr(t)}e=e.sibling}}function LE(e,t){for(;ut!==null;){var a=ut;switch(a.tag){case 0:case 11:case 15:$a(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ut=o;else e:for(a=e;ut!==null;){o=ut;var s=o.sibling,u=o.return;if(TE(o),o===a){ut=null;break e}if(s!==null){s.return=u,ut=s;break e}ut=u}}}var DC={getCacheForType:function(e){var t=St(nt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return St(nt).controller.signal}},BC=typeof WeakMap=="function"?WeakMap:Map,Fe=0,We=null,Me=null,De=0,ke=0,Kt=null,en=!1,Ri=!1,gu=!1,ba=0,qe=0,tn=0,bn=0,Nu=0,Wt=0,Ci=0,go=null,Bt=null,Iu=!1,Xr=0,ME=0,qr=1/0,Qr=null,an=null,st=0,nn=null,Oi=null,Ga=0,yu=0,Lu=null,PE=null,No=0,Mu=null;function Yt(){return(Fe&2)!==0&&De!==0?De&-De:U.T!==null?bu():zd()}function DE(){if(Wt===0)if((De&536870912)===0||He){var e=rr;rr<<=1,(rr&3932160)===0&&(rr=262144),Wt=e}else Wt=536870912;return e=xt.current,e!==null&&(e.flags|=32),Wt}function vt(e,t,a){(e===We&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(pi(e,0),on(e,De,Wt,!1)),Yi(e,a),((Fe&2)===0||e!==We)&&(e===We&&((Fe&2)===0&&(bn|=a),qe===4&&on(e,De,Wt,!1)),Aa(e))}function BE(e,t,a){if((Fe&6)!==0)throw Error(l(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Wi(e,t),s=o?bC(e,t):Du(e,t,!0),u=o;do{if(s===0){Ri&&!o&&on(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!vC(a)){s=Du(e,t,!1),u=!1;continue}if(s===2){if(u=t,e.errorRecoveryDisabledLanes&u)var A=0;else A=e.pendingLanes&-536870913,A=A!==0?A:A&536870912?536870912:0;if(A!==0){t=A;e:{var R=e;s=go;var I=R.current.memoizedState.isDehydrated;if(I&&(pi(R,A).flags|=256),A=Du(R,A,!1),A!==2){if(gu&&!I){R.errorRecoveryDisabledLanes|=u,bn|=u,s=4;break e}u=Bt,Bt=s,u!==null&&(Bt===null?Bt=u:Bt.push.apply(Bt,u))}s=A}if(u=!1,s!==2)continue}}if(s===1){pi(e,0),on(e,t,0,!0);break}e:{switch(o=e,u=s,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:on(o,t,Wt,!en);break e;case 2:Bt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=Xr+300-Gt(),10<s)){if(on(o,t,Wt,!en),lr(o,0,!0)!==0)break e;Ga=t,o.timeoutHandle=lh(vE.bind(null,o,a,Bt,Qr,Iu,t,Wt,bn,Ci,en,u,"Throttled",-0,0),s);break e}vE(o,a,Bt,Qr,Iu,t,Wt,bn,Ci,en,u,null,-0,0)}}break}while(!0);Aa(e)}function vE(e,t,a,o,s,u,A,R,I,w,X,ee,V,Y){if(e.timeoutHandle=-1,ee=t.subtreeFlags,ee&8192||(ee&16785408)===16785408){ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ca},NE(t,u,ee);var Se=(u&62914560)===u?Xr-Gt():(u&4194048)===u?ME-Gt():0;if(Se=mO(ee,Se),Se!==null){Ga=u,e.cancelPendingCommit=Se(xE.bind(null,e,t,u,a,o,s,A,R,I,X,ee,null,V,Y)),on(e,u,A,!w);return}}xE(e,t,u,a,o,s,A,R,I)}function vC(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var s=a[o],u=s.getSnapshot;s=s.value;try{if(!kt(u(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t,a,o){t&=~Nu,t&=~bn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var s=t;0<s;){var u=31-Ut(s),A=1<<u;o[u]=-1,s&=~A}a!==0&&Kd(e,a,t)}function $r(){return(Fe&6)===0?(Io(0),!1):!0}function Pu(){if(Me!==null){if(ke===0)var e=Me.return;else e=Me,Na=In=null,zl(e),Si=null,ro=0,e=Me;for(;e!==null;)uE(e.alternate,e),e=e.return;Me=null}}function pi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,QC(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ga=0,Pu(),We=e,Me=a=pa(e.current,null),De=t,ke=0,Kt=null,en=!1,Ri=Wi(e,t),gu=!1,Ci=Wt=Nu=bn=tn=qe=0,Bt=go=null,Iu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var s=31-Ut(o),u=1<<s;t|=e[s],o&=~u}return ba=t,Cr(),a}function HE(e,t){Ie=null,U.H=ho,t===di||t===Mr?(t=ZS(),ke=3):t===Hl?(t=ZS(),ke=4):ke=t===su?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Kt=t,Me===null&&(qe=1,Kr(e,Xt(t,e.current)))}function bE(){var e=xt.current;return e===null?!0:(De&4194048)===De?ea===null:(De&62914560)===De||(De&536870912)!==0?e===ea:!1}function GE(){var e=U.H;return U.H=ho,e===null?ho:e}function FE(){var e=U.A;return U.A=DC,e}function es(){qe=4,en||(De&4194048)!==De&&xt.current!==null||(Ri=!0),(tn&134217727)===0&&(bn&134217727)===0||We===null||on(We,De,Wt,!1)}function Du(e,t,a){var o=Fe;Fe|=2;var s=GE(),u=FE();(We!==e||De!==t)&&(Qr=null,pi(e,t)),t=!1;var A=qe;e:do try{if(ke!==0&&Me!==null){var R=Me,I=Kt;switch(ke){case 8:Pu(),A=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var w=ke;if(ke=0,Kt=null,gi(e,R,I,w),a&&Ri){A=0;break e}break;default:w=ke,ke=0,Kt=null,gi(e,R,I,w)}}HC(),A=qe;break}catch(X){HE(e,X)}while(!0);return t&&e.shellSuspendCounter++,Na=In=null,Fe=o,U.H=s,U.A=u,Me===null&&(We=null,De=0,Cr()),A}function HC(){for(;Me!==null;)UE(Me)}function bC(e,t){var a=Fe;Fe|=2;var o=GE(),s=FE();We!==e||De!==t?(Qr=null,qr=Gt()+500,pi(e,t)):Ri=Wi(e,t);e:do try{if(ke!==0&&Me!==null){t=Me;var u=Kt;t:switch(ke){case 1:ke=0,Kt=null,gi(e,t,u,1);break;case 2:case 9:if(JS(u)){ke=0,Kt=null,kE(t);break}t=function(){ke!==2&&ke!==9||We!==e||(ke=7),Aa(e)},u.then(t,t);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:JS(u)?(ke=0,Kt=null,kE(t)):(ke=0,Kt=null,gi(e,t,u,7));break;case 5:var A=null;switch(Me.tag){case 26:A=Me.memoizedState;case 5:case 27:var R=Me;if(A?gh(A):R.stateNode.complete){ke=0,Kt=null;var I=R.sibling;if(I!==null)Me=I;else{var w=R.return;w!==null?(Me=w,ts(w)):Me=null}break t}}ke=0,Kt=null,gi(e,t,u,5);break;case 6:ke=0,Kt=null,gi(e,t,u,6);break;case 8:Pu(),qe=6;break e;default:throw Error(l(462))}}GC();break}catch(X){HE(e,X)}while(!0);return Na=In=null,U.H=o,U.A=s,Fe=a,Me!==null?0:(We=null,De=0,Cr(),qe)}function GC(){for(;Me!==null&&!iR();)UE(Me)}function UE(e){var t=sE(e.alternate,e,ba);e.memoizedProps=e.pendingProps,t===null?ts(e):Me=t}function kE(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=tE(a,t,t.pendingProps,t.type,void 0,De);break;case 11:t=tE(a,t,t.pendingProps,t.type.render,t.ref,De);break;case 5:zl(t);default:uE(a,t),t=Me=FS(t,ba),t=sE(a,t,ba)}e.memoizedProps=e.pendingProps,t===null?ts(e):Me=t}function gi(e,t,a,o){Na=In=null,zl(t),Si=null,ro=0;var s=t.return;try{if(gC(e,s,t,a,De)){qe=1,Kr(e,Xt(a,e.current)),Me=null;return}}catch(u){if(s!==null)throw Me=s,u;qe=1,Kr(e,Xt(a,e.current)),Me=null;return}t.flags&32768?(He||o===1?e=!0:Ri||(De&536870912)!==0?e=!1:(en=e=!0,(o===2||o===9||o===3||o===6)&&(o=xt.current,o!==null&&o.tag===13&&(o.flags|=16384))),wE(t,e)):ts(t)}function ts(e){var t=e;do{if((t.flags&32768)!==0){wE(t,en);return}e=t.return;var a=yC(t.alternate,t,ba);if(a!==null){Me=a;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);qe===0&&(qe=5)}function wE(e,t){do{var a=LC(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);qe=6,Me=null}function xE(e,t,a,o,s,u,A,R,I){e.cancelPendingCommit=null;do as();while(st!==0);if((Fe&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=fl,ER(e,a,u,A,R,I),e===We&&(Me=We=null,De=0),Oi=t,nn=e,Ga=a,yu=u,Lu=s,PE=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wC(ir,function(){return zE(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,s=j.p,j.p=2,A=Fe,Fe|=4;try{MC(e,t,a)}finally{Fe=A,j.p=s,U.T=o}}st=1,VE(),KE(),WE()}}function VE(){if(st===1){st=0;var e=nn,t=Oi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=j.p;j.p=2;var s=Fe;Fe|=4;try{OE(t,e);var u=Ku,A=LS(e.containerInfo),R=u.focusedElem,I=u.selectionRange;if(A!==R&&R&&R.ownerDocument&&yS(R.ownerDocument.documentElement,R)){if(I!==null&&Al(R)){var w=I.start,X=I.end;if(X===void 0&&(X=w),"selectionStart"in R)R.selectionStart=w,R.selectionEnd=Math.min(X,R.value.length);else{var ee=R.ownerDocument||document,V=ee&&ee.defaultView||window;if(V.getSelection){var Y=V.getSelection(),Se=R.textContent.length,Ce=Math.min(I.start,Se),Ke=I.end===void 0?Ce:Math.min(I.end,Se);!Y.extend&&Ce>Ke&&(A=Ke,Ke=Ce,Ce=A);var H=IS(R,Ce),P=IS(R,Ke);if(H&&P&&(Y.rangeCount!==1||Y.anchorNode!==H.node||Y.anchorOffset!==H.offset||Y.focusNode!==P.node||Y.focusOffset!==P.offset)){var k=ee.createRange();k.setStart(H.node,H.offset),Y.removeAllRanges(),Ce>Ke?(Y.addRange(k),Y.extend(P.node,P.offset)):(k.setEnd(P.node,P.offset),Y.addRange(k))}}}}for(ee=[],Y=R;Y=Y.parentNode;)Y.nodeType===1&&ee.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ee.length;R++){var q=ee[R];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Es=!!Vu,Ku=Vu=null}finally{Fe=s,j.p=o,U.T=a}}e.current=t,st=2}}function KE(){if(st===2){st=0;var e=nn,t=Oi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=j.p;j.p=2;var s=Fe;Fe|=4;try{mE(e,t.alternate,t)}finally{Fe=s,j.p=o,U.T=a}}st=3}}function WE(){if(st===4||st===3){st=0,oR();var e=nn,t=Oi,a=Ga,o=PE;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,Oi=nn=null,YE(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(an=null),_s(a),t=t.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Ki,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=U.T,s=j.p,j.p=2,U.T=null;try{for(var u=e.onRecoverableError,A=0;A<o.length;A++){var R=o[A];u(R.value,{componentStack:R.stack})}}finally{U.T=t,j.p=s}}(Ga&3)!==0&&as(),Aa(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===Mu?No++:(No=0,Mu=e):No=0,Io(0)}}function YE(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,io(t)))}function as(){return VE(),KE(),WE(),zE()}function zE(){if(st!==5)return!1;var e=nn,t=yu;yu=0;var a=_s(Ga),o=U.T,s=j.p;try{j.p=32>a?32:a,U.T=null,a=Lu,Lu=null;var u=nn,A=Ga;if(st=0,Oi=nn=null,Ga=0,(Fe&6)!==0)throw Error(l(331));var R=Fe;if(Fe|=4,yE(u.current),gE(u,u.current,A,a),Fe=R,Io(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Ki,u)}catch{}return!0}finally{j.p=s,U.T=o,YE(e,t)}}function jE(e,t,a){t=Xt(a,t),t=ru(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(Yi(e,2),Aa(e))}function we(e,t,a){if(e.tag===3)jE(e,e,a);else for(;t!==null;){if(t.tag===3){jE(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(an===null||!an.has(o))){e=Xt(a,e),a=JA(2),o=Xa(t,a,2),o!==null&&(_A(a,o,t,e),Yi(o,2),Aa(o));break}}t=t.return}}function Bu(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new BC;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(a)||(gu=!0,s.add(a),e=FC.bind(null,e,t,a),t.then(e,e))}function FC(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(De&a)===a&&(qe===4||qe===3&&(De&62914560)===De&&300>Gt()-Xr?(Fe&2)===0&&pi(e,0):Nu|=a,Ci===De&&(Ci=0)),Aa(e)}function JE(e,t){t===0&&(t=Vd()),e=pn(e,t),e!==null&&(Yi(e,t),Aa(e))}function UC(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),JE(e,a)}function kC(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(t),JE(e,a)}function wC(e,t){return Ht(e,t)}var ns=null,Ni=null,vu=!1,is=!1,Hu=!1,rn=0;function Aa(e){e!==Ni&&e.next===null&&(Ni===null?ns=Ni=e:Ni=Ni.next=e),is=!0,vu||(vu=!0,VC())}function Io(e,t){if(!Hu&&is){Hu=!0;do for(var a=!1,o=ns;o!==null;){if(e!==0){var s=o.pendingLanes;if(s===0)var u=0;else{var A=o.suspendedLanes,R=o.pingedLanes;u=(1<<31-Ut(42|e)+1)-1,u&=s&~(A&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,qE(o,u))}else u=De,u=lr(o,o===We?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Wi(o,u)||(a=!0,qE(o,u));o=o.next}while(a);Hu=!1}}function xC(){_E()}function _E(){is=vu=!1;var e=0;rn!==0&&qC()&&(e=rn);for(var t=Gt(),a=null,o=ns;o!==null;){var s=o.next,u=ZE(o,t);u===0?(o.next=null,a===null?ns=s:a.next=s,s===null&&(Ni=a)):(a=o,(e!==0||(u&3)!==0)&&(is=!0)),o=s}st!==0&&st!==5||Io(e),rn!==0&&(rn=0)}function ZE(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var A=31-Ut(u),R=1<<A,I=s[A];I===-1?((R&a)===0||(R&o)!==0)&&(s[A]=AR(R,t)):I<=t&&(e.expiredLanes|=R),u&=~R}if(t=We,a=De,a=lr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&bt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&bt(o),_s(a)){case 2:case 8:a=wd;break;case 32:a=ir;break;case 268435456:a=xd;break;default:a=ir}return o=XE.bind(null,e),a=Ht(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&bt(o),e.callbackPriority=2,e.callbackNode=null,2}function XE(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(as()&&e.callbackNode!==a)return null;var o=De;return o=lr(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(BE(e,o,t),ZE(e,Gt()),e.callbackNode!=null&&e.callbackNode===a?XE.bind(null,e):null)}function qE(e,t){if(as())return null;BE(e,t,!0)}function VC(){$C(function(){(Fe&6)!==0?Ht(kd,xC):_E()})}function bu(){if(rn===0){var e=ui;e===0&&(e=or,or<<=1,(or&261888)===0&&(or=256)),rn=e}return rn}function QE(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Sr(""+e)}function $E(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function KC(e,t,a,o,s){if(t==="submit"&&a&&a.stateNode===s){var u=QE((s[yt]||null).action),A=o.submitter;A&&(t=(t=A[yt]||null)?QE(t.formAction):A.getAttribute("formAction"),t!==null&&(u=t,A=null));var R=new mr("action","action",null,o,s);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rn!==0){var I=A?$E(s,A):new FormData(s);eu(a,{pending:!0,data:I,method:s.method,action:u},null,I)}}else typeof u=="function"&&(R.preventDefault(),I=A?$E(s,A):new FormData(s),eu(a,{pending:!0,data:I,method:s.method,action:u},u,I))},currentTarget:s}]})}}for(var Gu=0;Gu<Tl.length;Gu++){var Fu=Tl[Gu],WC=Fu.toLowerCase(),YC=Fu[0].toUpperCase()+Fu.slice(1);oa(WC,"on"+YC)}oa(DS,"onAnimationEnd"),oa(BS,"onAnimationIteration"),oa(vS,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(rC,"onTransitionRun"),oa(sC,"onTransitionStart"),oa(lC,"onTransitionCancel"),oa(HS,"onTransitionEnd"),Zn("onMouseEnter",["mouseout","mouseover"]),Zn("onMouseLeave",["mouseout","mouseover"]),Zn("onPointerEnter",["pointerout","pointerover"]),Zn("onPointerLeave",["pointerout","pointerover"]),fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function eh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],s=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var A=o.length-1;0<=A;A--){var R=o[A],I=R.instance,w=R.currentTarget;if(R=R.listener,I!==u&&s.isPropagationStopped())break e;u=R,s.currentTarget=w;try{u(s)}catch(X){Rr(X)}s.currentTarget=null,u=I}else for(A=0;A<o.length;A++){if(R=o[A],I=R.instance,w=R.currentTarget,R=R.listener,I!==u&&s.isPropagationStopped())break e;u=R,s.currentTarget=w;try{u(s)}catch(X){Rr(X)}s.currentTarget=null,u=I}}}}function Pe(e,t){var a=t[Zs];a===void 0&&(a=t[Zs]=new Set);var o=e+"__bubble";a.has(o)||(th(t,e,2,!1),a.add(o))}function Uu(e,t,a){var o=0;t&&(o|=4),th(a,e,o,t)}var os="_reactListening"+Math.random().toString(36).slice(2);function ku(e){if(!e[os]){e[os]=!0,_d.forEach(function(a){a!=="selectionchange"&&(zC.has(a)||Uu(a,!1,e),Uu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[os]||(t[os]=!0,Uu("selectionchange",!1,t))}}function th(e,t,a,o){switch(Dh(t)){case 2:var s=RO;break;case 8:s=CO;break;default:s=$u}a=s.bind(null,t,a,e),s=void 0,!il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function wu(e,t,a,o,s){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var A=o.tag;if(A===3||A===4){var R=o.stateNode.containerInfo;if(R===s)break;if(A===4)for(A=o.return;A!==null;){var I=A.tag;if((I===3||I===4)&&A.stateNode.containerInfo===s)return;A=A.return}for(;R!==null;){if(A=jn(R),A===null)return;if(I=A.tag,I===5||I===6||I===26||I===27){o=u=A;continue e}R=R.parentNode}}o=o.return}rS(function(){var w=u,X=al(a),ee=[];e:{var V=bS.get(e);if(V!==void 0){var Y=mr,Se=e;switch(e){case"keypress":if(Er(a)===0)break e;case"keydown":case"keyup":Y=kR;break;case"focusin":Se="focus",Y=ll;break;case"focusout":Se="blur",Y=ll;break;case"beforeblur":case"afterblur":Y=ll;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=uS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=yR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=VR;break;case DS:case BS:case vS:Y=PR;break;case HS:Y=WR;break;case"scroll":case"scrollend":Y=NR;break;case"wheel":Y=zR;break;case"copy":case"cut":case"paste":Y=BR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=dS;break;case"toggle":case"beforetoggle":Y=JR}var Ce=(t&4)!==0,Ke=!Ce&&(e==="scroll"||e==="scrollend"),H=Ce?V!==null?V+"Capture":null:V;Ce=[];for(var P=w,k;P!==null;){var q=P;if(k=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||k===null||H===null||(q=Ji(P,H),q!=null&&Ce.push(Lo(P,q,k))),Ke)break;P=P.return}0<Ce.length&&(V=new Y(V,Se,null,a,X),ee.push({event:V,listeners:Ce}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",V&&a!==tl&&(Se=a.relatedTarget||a.fromElement)&&(jn(Se)||Se[zn]))break e;if((Y||V)&&(V=X.window===X?X:(V=X.ownerDocument)?V.defaultView||V.parentWindow:window,Y?(Se=a.relatedTarget||a.toElement,Y=w,Se=Se?jn(Se):null,Se!==null&&(Ke=S(Se),Ce=Se.tag,Se!==Ke||Ce!==5&&Ce!==27&&Ce!==6)&&(Se=null)):(Y=null,Se=w),Y!==Se)){if(Ce=uS,q="onMouseLeave",H="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=dS,q="onPointerLeave",H="onPointerEnter",P="pointer"),Ke=Y==null?V:ji(Y),k=Se==null?V:ji(Se),V=new Ce(q,P+"leave",Y,a,X),V.target=Ke,V.relatedTarget=k,q=null,jn(X)===w&&(Ce=new Ce(H,P+"enter",Se,a,X),Ce.target=k,Ce.relatedTarget=Ke,q=Ce),Ke=q,Y&&Se)t:{for(Ce=jC,H=Y,P=Se,k=0,q=H;q;q=Ce(q))k++;q=0;for(var fe=P;fe;fe=Ce(fe))q++;for(;0<k-q;)H=Ce(H),k--;for(;0<q-k;)P=Ce(P),q--;for(;k--;){if(H===P||P!==null&&H===P.alternate){Ce=H;break t}H=Ce(H),P=Ce(P)}Ce=null}else Ce=null;Y!==null&&ah(ee,V,Y,Ce,!1),Se!==null&&Ke!==null&&ah(ee,Ke,Se,Ce,!0)}}e:{if(V=w?ji(w):window,Y=V.nodeName&&V.nodeName.toLowerCase(),Y==="select"||Y==="input"&&V.type==="file")var be=RS;else if(TS(V))if(CS)be=nC;else{be=tC;var Ee=eC}else Y=V.nodeName,!Y||Y.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?w&&el(w.elementType)&&(be=RS):be=aC;if(be&&(be=be(e,w))){fS(ee,be,a,X);break e}Ee&&Ee(e,V,w),e==="focusout"&&w&&V.type==="number"&&w.memoizedProps.value!=null&&$s(V,"number",V.value)}switch(Ee=w?ji(w):window,e){case"focusin":(TS(Ee)||Ee.contentEditable==="true")&&(ti=Ee,El=w,to=null);break;case"focusout":to=El=ti=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,MS(ee,a,X);break;case"selectionchange":if(oC)break;case"keydown":case"keyup":MS(ee,a,X)}var ye;if(cl)e:{switch(e){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else ei?hS(e,a)&&(Be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Be="onCompositionStart");Be&&(SS&&a.locale!=="ko"&&(ei||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&ei&&(ye=sS()):(Wa=X,ol="value"in Wa?Wa.value:Wa.textContent,ei=!0)),Ee=rs(w,Be),0<Ee.length&&(Be=new cS(Be,e,null,a,X),ee.push({event:Be,listeners:Ee}),ye?Be.data=ye:(ye=mS(a),ye!==null&&(Be.data=ye)))),(ye=ZR?XR(e,a):qR(e,a))&&(Be=rs(w,"onBeforeInput"),0<Be.length&&(Ee=new cS("onBeforeInput","beforeinput",null,a,X),ee.push({event:Ee,listeners:Be}),Ee.data=ye)),KC(ee,e,w,a,X)}eh(ee,t)})}function Lo(e,t,a){return{instance:e,listener:t,currentTarget:a}}function rs(e,t){for(var a=t+"Capture",o=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=Ji(e,a),s!=null&&o.unshift(Lo(e,s,u)),s=Ji(e,t),s!=null&&o.push(Lo(e,s,u))),e.tag===3)return o;e=e.return}return[]}function jC(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ah(e,t,a,o,s){for(var u=t._reactName,A=[];a!==null&&a!==o;){var R=a,I=R.alternate,w=R.stateNode;if(R=R.tag,I!==null&&I===o)break;R!==5&&R!==26&&R!==27||w===null||(I=w,s?(w=Ji(a,u),w!=null&&A.unshift(Lo(a,w,I))):s||(w=Ji(a,u),w!=null&&A.push(Lo(a,w,I)))),a=a.return}A.length!==0&&e.push({event:t,listeners:A})}var JC=/\r\n?/g,_C=/\u0000|\uFFFD/g;function nh(e){return(typeof e=="string"?e:""+e).replace(JC,`
`).replace(_C,"")}function ih(e,t){return t=nh(t),nh(e)===t}function Ve(e,t,a,o,s,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||qn(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&qn(e,""+o);break;case"className":cr(e,"class",o);break;case"tabIndex":cr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":cr(e,a,o);break;case"style":iS(e,o,u);break;case"data":if(t!=="object"){cr(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Sr(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Ve(e,t,"name",s.name,s,null),Ve(e,t,"formEncType",s.formEncType,s,null),Ve(e,t,"formMethod",s.formMethod,s,null),Ve(e,t,"formTarget",s.formTarget,s,null)):(Ve(e,t,"encType",s.encType,s,null),Ve(e,t,"method",s.method,s,null),Ve(e,t,"target",s.target,s,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Sr(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ca);break;case"onScroll":o!=null&&Pe("scroll",e);break;case"onScrollEnd":o!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Sr(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),ur(e,"popover",o);break;case"xlinkActuate":Ra(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ra(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ra(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ra(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ra(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ra(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ra(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ra(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ra(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ur(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pR.get(a)||a,ur(e,a,o))}}function xu(e,t,a,o,s,u){switch(a){case"style":iS(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof o=="string"?qn(e,o):(typeof o=="number"||typeof o=="bigint")&&qn(e,""+o);break;case"onScroll":o!=null&&Pe("scroll",e);break;case"onScrollEnd":o!=null&&Pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),u=e[yt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,s),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,s);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ur(e,a,o)}}}function Et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var o=!1,s=!1,u;for(u in a)if(a.hasOwnProperty(u)){var A=a[u];if(A!=null)switch(u){case"src":o=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ve(e,t,u,A,a,null)}}s&&Ve(e,t,"srcSet",a.srcSet,a,null),o&&Ve(e,t,"src",a.src,a,null);return;case"input":Pe("invalid",e);var R=u=A=s=null,I=null,w=null;for(o in a)if(a.hasOwnProperty(o)){var X=a[o];if(X!=null)switch(o){case"name":s=X;break;case"type":A=X;break;case"checked":I=X;break;case"defaultChecked":w=X;break;case"value":u=X;break;case"defaultValue":R=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(l(137,t));break;default:Ve(e,t,o,X,a,null)}}eS(e,u,R,I,w,A,s,!1);return;case"select":Pe("invalid",e),o=A=u=null;for(s in a)if(a.hasOwnProperty(s)&&(R=a[s],R!=null))switch(s){case"value":u=R;break;case"defaultValue":A=R;break;case"multiple":o=R;default:Ve(e,t,s,R,a,null)}t=u,a=A,e.multiple=!!o,t!=null?Xn(e,!!o,t,!1):a!=null&&Xn(e,!!o,a,!0);return;case"textarea":Pe("invalid",e),u=s=o=null;for(A in a)if(a.hasOwnProperty(A)&&(R=a[A],R!=null))switch(A){case"value":o=R;break;case"defaultValue":s=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(91));break;default:Ve(e,t,A,R,a,null)}aS(e,o,s,u);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,t,I,o,a,null)}return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(o=0;o<yo.length;o++)Pe(yo[o],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(o=a[w],o!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ve(e,t,w,o,a,null)}return;default:if(el(t)){for(X in a)a.hasOwnProperty(X)&&(o=a[X],o!==void 0&&xu(e,t,X,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ve(e,t,R,o,a,null))}function ZC(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,A=null,R=null,I=null,w=null,X=null;for(Y in a){var ee=a[Y];if(a.hasOwnProperty(Y)&&ee!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":I=ee;default:o.hasOwnProperty(Y)||Ve(e,t,Y,null,o,ee)}}for(var V in o){var Y=o[V];if(ee=a[V],o.hasOwnProperty(V)&&(Y!=null||ee!=null))switch(V){case"type":u=Y;break;case"name":s=Y;break;case"checked":w=Y;break;case"defaultChecked":X=Y;break;case"value":A=Y;break;case"defaultValue":R=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(l(137,t));break;default:Y!==ee&&Ve(e,t,V,Y,o,ee)}}Qs(e,A,R,I,w,X,u,s);return;case"select":Y=A=R=V=null;for(u in a)if(I=a[u],a.hasOwnProperty(u)&&I!=null)switch(u){case"value":break;case"multiple":Y=I;default:o.hasOwnProperty(u)||Ve(e,t,u,null,o,I)}for(s in o)if(u=o[s],I=a[s],o.hasOwnProperty(s)&&(u!=null||I!=null))switch(s){case"value":V=u;break;case"defaultValue":R=u;break;case"multiple":A=u;default:u!==I&&Ve(e,t,s,u,o,I)}t=R,a=A,o=Y,V!=null?Xn(e,!!a,V,!1):!!o!=!!a&&(t!=null?Xn(e,!!a,t,!0):Xn(e,!!a,a?[]:"",!1));return;case"textarea":Y=V=null;for(R in a)if(s=a[R],a.hasOwnProperty(R)&&s!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ve(e,t,R,null,o,s)}for(A in o)if(s=o[A],u=a[A],o.hasOwnProperty(A)&&(s!=null||u!=null))switch(A){case"value":V=s;break;case"defaultValue":Y=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==u&&Ve(e,t,A,s,o,u)}tS(e,V,Y);return;case"option":for(var Se in a)if(V=a[Se],a.hasOwnProperty(Se)&&V!=null&&!o.hasOwnProperty(Se))switch(Se){case"selected":e.selected=!1;break;default:Ve(e,t,Se,null,o,V)}for(I in o)if(V=o[I],Y=a[I],o.hasOwnProperty(I)&&V!==Y&&(V!=null||Y!=null))switch(I){case"selected":e.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:Ve(e,t,I,V,o,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in a)V=a[Ce],a.hasOwnProperty(Ce)&&V!=null&&!o.hasOwnProperty(Ce)&&Ve(e,t,Ce,null,o,V);for(w in o)if(V=o[w],Y=a[w],o.hasOwnProperty(w)&&V!==Y&&(V!=null||Y!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(l(137,t));break;default:Ve(e,t,w,V,o,Y)}return;default:if(el(t)){for(var Ke in a)V=a[Ke],a.hasOwnProperty(Ke)&&V!==void 0&&!o.hasOwnProperty(Ke)&&xu(e,t,Ke,void 0,o,V);for(X in o)V=o[X],Y=a[X],!o.hasOwnProperty(X)||V===Y||V===void 0&&Y===void 0||xu(e,t,X,V,o,Y);return}}for(var H in a)V=a[H],a.hasOwnProperty(H)&&V!=null&&!o.hasOwnProperty(H)&&Ve(e,t,H,null,o,V);for(ee in o)V=o[ee],Y=a[ee],!o.hasOwnProperty(ee)||V===Y||V==null&&Y==null||Ve(e,t,ee,V,o,Y)}function oh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XC(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var s=a[o],u=s.transferSize,A=s.initiatorType,R=s.duration;if(u&&R&&oh(A)){for(A=0,R=s.responseEnd,o+=1;o<a.length;o++){var I=a[o],w=I.startTime;if(w>R)break;var X=I.transferSize,ee=I.initiatorType;X&&oh(ee)&&(I=I.responseEnd,A+=X*(I<R?1:(R-w)/(I-w)))}if(--o,t+=8*(u+A)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vu=null,Ku=null;function ss(e){return e.nodeType===9?e:e.ownerDocument}function rh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yu=null;function qC(){var e=window.event;return e&&e.type==="popstate"?e===Yu?!1:(Yu=e,!0):(Yu=null,!1)}var lh=typeof setTimeout=="function"?setTimeout:void 0,QC=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,$C=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(e){return uh.resolve(null).then(e).catch(eO)}:lh;function eO(e){setTimeout(function(){throw e})}function sn(e){return e==="head"}function ch(e,t){var a=t,o=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(s),Mi(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mo(a);for(var u=a.firstChild;u;){var A=u.nextSibling,R=u.nodeName;u[zi]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=A}}else a==="body"&&Mo(e.ownerDocument.body);a=s}while(a);Mi(t)}function dh(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function zu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zu(a),Xs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function tO(e,t,a,o){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[zi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=ta(e.nextSibling),e===null)break}return null}function aO(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ta(e.nextSibling),e===null))return null;return e}function Sh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ta(e.nextSibling),e===null))return null;return e}function ju(e){return e.data==="$?"||e.data==="$~"}function Ju(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function nO(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ta(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _u=null;function Ah(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ta(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Eh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function hh(e,t,a){switch(t=ss(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Mo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xs(e)}var aa=new Map,mh=new Set;function ls(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fa=j.d;j.d={f:iO,r:oO,D:rO,C:sO,L:lO,m:uO,X:dO,S:cO,M:SO};function iO(){var e=Fa.f(),t=$r();return e||t}function oO(e){var t=Jn(e);t!==null&&t.tag===5&&t.type==="form"?HA(t):Fa.r(e)}var Ii=typeof document>"u"?null:document;function Th(e,t,a){var o=Ii;if(o&&typeof t=="string"&&t){var s=_t(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),mh.has(s)||(mh.add(s),e={rel:e,crossOrigin:a,href:t},o.querySelector(s)===null&&(t=o.createElement("link"),Et(t,"link",e),lt(t),o.head.appendChild(t)))}}function rO(e){Fa.D(e),Th("dns-prefetch",e,null)}function sO(e,t){Fa.C(e,t),Th("preconnect",e,t)}function lO(e,t,a){Fa.L(e,t,a);var o=Ii;if(o&&e&&t){var s='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+_t(a.imageSizes)+'"]')):s+='[href="'+_t(e)+'"]';var u=s;switch(t){case"style":u=yi(e);break;case"script":u=Li(e)}aa.has(u)||(e=f({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),aa.set(u,e),o.querySelector(s)!==null||t==="style"&&o.querySelector(Po(u))||t==="script"&&o.querySelector(Do(u))||(t=o.createElement("link"),Et(t,"link",e),lt(t),o.head.appendChild(t)))}}function uO(e,t){Fa.m(e,t);var a=Ii;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+_t(o)+'"][href="'+_t(e)+'"]',u=s;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Li(e)}if(!aa.has(u)&&(e=f({rel:"modulepreload",href:e},t),aa.set(u,e),a.querySelector(s)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(u)))return}o=a.createElement("link"),Et(o,"link",e),lt(o),a.head.appendChild(o)}}}function cO(e,t,a){Fa.S(e,t,a);var o=Ii;if(o&&e){var s=_n(o).hoistableStyles,u=yi(e);t=t||"default";var A=s.get(u);if(!A){var R={loading:0,preload:null};if(A=o.querySelector(Po(u)))R.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},a),(a=aa.get(u))&&Zu(e,a);var I=A=o.createElement("link");lt(I),Et(I,"link",e),I._p=new Promise(function(w,X){I.onload=w,I.onerror=X}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,us(A,t,o)}A={type:"stylesheet",instance:A,count:1,state:R},s.set(u,A)}}}function dO(e,t){Fa.X(e,t);var a=Ii;if(a&&e){var o=_n(a).hoistableScripts,s=Li(e),u=o.get(s);u||(u=a.querySelector(Do(s)),u||(e=f({src:e,async:!0},t),(t=aa.get(s))&&Xu(e,t),u=a.createElement("script"),lt(u),Et(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(s,u))}}function SO(e,t){Fa.M(e,t);var a=Ii;if(a&&e){var o=_n(a).hoistableScripts,s=Li(e),u=o.get(s);u||(u=a.querySelector(Do(s)),u||(e=f({src:e,async:!0,type:"module"},t),(t=aa.get(s))&&Xu(e,t),u=a.createElement("script"),lt(u),Et(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(s,u))}}function fh(e,t,a,o){var s=(s=D.current)?ls(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=yi(a.href),a=_n(s).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yi(a.href);var u=_n(s).hoistableStyles,A=u.get(e);if(A||(s=s.ownerDocument||s,A={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,A),(u=s.querySelector(Po(e)))&&!u._p&&(A.instance=u,A.state.loading=5),aa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},aa.set(e,a),u||AO(s,e,a,A.state))),t&&o===null)throw Error(l(528,""));return A}if(t&&o!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Li(a),a=_n(s).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function yi(e){return'href="'+_t(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function Rh(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function AO(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),Et(t,"link",a),lt(t),e.head.appendChild(t))}function Li(e){return'[src="'+_t(e)+'"]'}function Do(e){return"script[async]"+e}function Ch(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+_t(a.href)+'"]');if(o)return t.instance=o,lt(o),o;var s=f({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),lt(o),Et(o,"style",s),us(o,a.precedence,e),t.instance=o;case"stylesheet":s=yi(a.href);var u=e.querySelector(Po(s));if(u)return t.state.loading|=4,t.instance=u,lt(u),u;o=Rh(a),(s=aa.get(s))&&Zu(o,s),u=(e.ownerDocument||e).createElement("link"),lt(u);var A=u;return A._p=new Promise(function(R,I){A.onload=R,A.onerror=I}),Et(u,"link",o),t.state.loading|=4,us(u,a.precedence,e),t.instance=u;case"script":return u=Li(a.src),(s=e.querySelector(Do(u)))?(t.instance=s,lt(s),s):(o=a,(s=aa.get(u))&&(o=f({},a),Xu(o,s)),e=e.ownerDocument||e,s=e.createElement("script"),lt(s),Et(s,"link",o),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,us(o,a.precedence,e));return t.instance}function us(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=o.length?o[o.length-1]:null,u=s,A=0;A<o.length;A++){var R=o[A];if(R.dataset.precedence===t)u=R;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Zu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cs=null;function Oh(e,t,a){if(cs===null){var o=new Map,s=cs=new Map;s.set(a,o)}else s=cs,o=s.get(a),o||(o=new Map,s.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var u=a[s];if(!(u[zi]||u[ct]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var A=u.getAttribute(t)||"";A=e+A;var R=o.get(A);R?R.push(u):o.set(A,[u])}}return o}function ph(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function EO(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hO(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=yi(o.href),u=t.querySelector(Po(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ds.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,lt(u);return}u=t.ownerDocument||t,o=Rh(o),(s=aa.get(s))&&Zu(o,s),u=u.createElement("link"),lt(u);var A=u;A._p=new Promise(function(R,I){A.onload=R,A.onerror=I}),Et(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ds.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var qu=0;function mO(e,t){return e.stylesheets&&e.count===0&&As(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&As(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&qu===0&&(qu=62500*XC());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&As(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>qu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(s)}}:null}function ds(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)As(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ss=null;function As(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ss=new Map,t.forEach(TO,e),Ss=null,ds.call(e))}function TO(e,t){if(!(t.state.loading&4)){var a=Ss.get(e);if(a)var o=a.get(null);else{a=new Map,Ss.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var A=s[u];(A.nodeName==="LINK"||A.getAttribute("media")!=="not all")&&(a.set(A.dataset.precedence,A),o=A)}o&&a.set(null,o)}s=t.instance,A=s.getAttribute("data-precedence"),u=a.get(A)||o,u===o&&a.set(null,s),a.set(A,s),this.count++,o=ds.bind(this),s.addEventListener("load",o),s.addEventListener("error",o),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Bo={$$typeof:J,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function fO(e,t,a,o,s,u,A,R,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=js(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.hiddenUpdates=js(null),this.identifierPrefix=o,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=A,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Nh(e,t,a,o,s,u,A,R,I,w,X,ee){return e=new fO(e,t,a,A,I,w,X,ee,R),t=1,u===!0&&(t|=24),u=wt(3,null,null,t),e.current=u,u.stateNode=e,t=Dl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},bl(u),e}function Ih(e){return e?(e=ii,e):ii}function yh(e,t,a,o,s,u){s=Ih(s),o.context===null?o.context=s:o.pendingContext=s,o=Za(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=Xa(e,o,t),a!==null&&(vt(a,e,t),lo(a,e,t))}function Lh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Qu(e,t){Lh(e,t),(e=e.alternate)&&Lh(e,t)}function Mh(e){if(e.tag===13||e.tag===31){var t=pn(e,67108864);t!==null&&vt(t,e,67108864),Qu(e,67108864)}}function Ph(e){if(e.tag===13||e.tag===31){var t=Yt();t=Js(t);var a=pn(e,t);a!==null&&vt(a,e,t),Qu(e,t)}}var Es=!0;function RO(e,t,a,o){var s=U.T;U.T=null;var u=j.p;try{j.p=2,$u(e,t,a,o)}finally{j.p=u,U.T=s}}function CO(e,t,a,o){var s=U.T;U.T=null;var u=j.p;try{j.p=8,$u(e,t,a,o)}finally{j.p=u,U.T=s}}function $u(e,t,a,o){if(Es){var s=ec(o);if(s===null)wu(e,t,o,hs,a),Bh(e,o);else if(pO(s,e,t,a,o))o.stopPropagation();else if(Bh(e,o),t&4&&-1<OO.indexOf(e)){for(;s!==null;){var u=Jn(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var A=Tn(u.pendingLanes);if(A!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;A;){var I=1<<31-Ut(A);R.entanglements[1]|=I,A&=~I}Aa(u),(Fe&6)===0&&(qr=Gt()+500,Io(0))}}break;case 31:case 13:R=pn(u,2),R!==null&&vt(R,u,2),$r(),Qu(u,2)}if(u=ec(o),u===null&&wu(e,t,o,hs,a),u===s)break;s=u}s!==null&&o.stopPropagation()}else wu(e,t,o,null,a)}}function ec(e){return e=al(e),tc(e)}var hs=null;function tc(e){if(hs=null,e=jn(e),e!==null){var t=S(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hs=e,null}function Dh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rR()){case kd:return 2;case wd:return 8;case ir:case sR:return 32;case xd:return 268435456;default:return 32}default:return 32}}var ac=!1,ln=null,un=null,cn=null,vo=new Map,Ho=new Map,dn=[],OO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bh(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":vo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(t.pointerId)}}function bo(e,t,a,o,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[s]},t!==null&&(t=Jn(t),t!==null&&Mh(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function pO(e,t,a,o,s){switch(t){case"focusin":return ln=bo(ln,e,t,a,o,s),!0;case"dragenter":return un=bo(un,e,t,a,o,s),!0;case"mouseover":return cn=bo(cn,e,t,a,o,s),!0;case"pointerover":var u=s.pointerId;return vo.set(u,bo(vo.get(u)||null,e,t,a,o,s)),!0;case"gotpointercapture":return u=s.pointerId,Ho.set(u,bo(Ho.get(u)||null,e,t,a,o,s)),!0}return!1}function vh(e){var t=jn(e.target);if(t!==null){var a=S(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,jd(e.priority,function(){Ph(a)});return}}else if(t===31){if(t=E(a),t!==null){e.blockedOn=t,jd(e.priority,function(){Ph(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ec(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);tl=o,a.target.dispatchEvent(o),tl=null}else return t=Jn(a),t!==null&&Mh(t),e.blockedOn=a,!1;t.shift()}return!0}function Hh(e,t,a){ms(e)&&a.delete(t)}function gO(){ac=!1,ln!==null&&ms(ln)&&(ln=null),un!==null&&ms(un)&&(un=null),cn!==null&&ms(cn)&&(cn=null),vo.forEach(Hh),Ho.forEach(Hh)}function Ts(e,t){e.blockedOn===t&&(e.blockedOn=null,ac||(ac=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,gO)))}var fs=null;function bh(e){fs!==e&&(fs=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){fs===e&&(fs=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],s=e[t+2];if(typeof o!="function"){if(tc(o||a)===null)continue;break}var u=Jn(a);u!==null&&(e.splice(t,3),t-=3,eu(u,{pending:!0,data:s,method:a.method,action:o},o,s))}}))}function Mi(e){function t(I){return Ts(I,e)}ln!==null&&Ts(ln,e),un!==null&&Ts(un,e),cn!==null&&Ts(cn,e),vo.forEach(t),Ho.forEach(t);for(var a=0;a<dn.length;a++){var o=dn[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<dn.length&&(a=dn[0],a.blockedOn===null);)vh(a),a.blockedOn===null&&dn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var s=a[o],u=a[o+1],A=s[yt]||null;if(typeof u=="function")A||bh(a);else if(A){var R=null;if(u&&u.hasAttribute("formAction")){if(s=u,A=u[yt]||null)R=A.formAction;else if(tc(s)!==null)continue}else R=A.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),bh(a)}}}function Gh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(A){return s=A})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function nc(e){this._internalRoot=e}Rs.prototype.render=nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,o=Yt();yh(a,o,e,t,null,null)},Rs.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yh(e.current,2,null,e,null,null),$r(),t[zn]=null}};function Rs(e){this._internalRoot=e}Rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=zd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<dn.length&&t!==0&&t<dn[a].priority;a++);dn.splice(a,0,e),a===0&&vh(e)}};var Fh=i.version;if(Fh!=="19.2.3")throw Error(l(527,Fh,"19.2.3"));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var NO={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{Ki=Cs.inject(NO),Ft=Cs}catch{}}return Fo.createRoot=function(e,t){if(!c(e))throw Error(l(299));var a=!1,o="",s=WA,u=YA,A=zA;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(A=t.onRecoverableError)),t=Nh(e,1,!1,null,null,a,o,null,s,u,A,Gh),e[zn]=t.current,ku(e),new nc(t)},Fo.hydrateRoot=function(e,t,a){if(!c(e))throw Error(l(299));var o=!1,s="",u=WA,A=YA,R=zA,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(A=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),t=Nh(e,1,!0,t,a??null,o,s,I,u,A,R,Gh),t.context=Ih(null),a=t.current,o=Yt(),o=Js(o),s=Za(o),s.callback=null,Xa(a,s,o),a=o,t.current.lanes=a,Yi(t,a),Aa(t),e[zn]=t.current,ku(e),new Rs(t)},Fo.version="19.2.3",Fo}var jh;function bO(){if(jh)return rc.exports;jh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),rc.exports=HO(),rc.exports}var GO=bO();const FO=OT(GO);var Te=(n=>(n.MENU="MENU",n.CLASSIC="CLASSIC",n.LEVEL_THEMED="LEVEL_THEMED",n.LEVEL_EMOJI="LEVEL_EMOJI",n.LEVEL_MIND_MATCH="LEVEL_MIND_MATCH",n.LEVEL_SYNONYMS="LEVEL_SYNONYMS",n.LEVEL_EXPANSION="LEVEL_EXPANSION",n.LEVEL_CASCADE="LEVEL_CASCADE",n))(Te||{});const Jh=65,UO=60,kO=["bg-neon-red shadow-[0_0_15px_#FF073A] border-white","bg-neon-orange shadow-[0_0_15px_#FF5F1F] border-white","bg-neon-yellow shadow-[0_0_15px_#F9FF00] border-white","bg-neon-lime shadow-[0_0_15px_#39FF14] border-white","bg-neon-green shadow-[0_0_15px_#00F000] border-white","bg-neon-mint shadow-[0_0_15px_#00FF9F] border-white","bg-neon-cyan shadow-[0_0_15px_#00FFFF] border-white","bg-neon-sky-blue shadow-[0_0_15px_#00BFFF] border-white","bg-neon-blue shadow-[0_0_15px_#0066FF] border-white","bg-neon-violet shadow-[0_0_15px_#B026FF] border-white","bg-neon-purple shadow-[0_0_15px_#D400FF] border-white","bg-neon-magenta shadow-[0_0_15px_#FF00FF] border-white","bg-neon-pink shadow-[0_0_15px_#FF1FBF] border-white","bg-neon-rose shadow-[0_0_15_#FF0055] border-white"],ua=[{name:"NEON ARCADE",gradient:"from-black to-zinc-900",solvedColors:kO}],ht="CLASSIC",mt="LEVEL_EMOJI",Tt="LEVEL_MIND_MATCH",ft="LEVEL_SYNONYMS",Ot="LEVEL_THEMED",pt="LEVEL_EXPANSION",wO=[ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft,pt,Ot,ht,mt,Tt,ft],fa={LEVEL:"wpm_level",TUTORIAL_SEEN:"wpm_tutorial_seen_v2",TUTORIAL_SEEN_L2:"wpm_tutorial_seen_l2",TUTORIAL_SEEN_L5:"wpm_tutorial_seen_l5",GAME_STATS:"wpm_game_stats",DAILY_HISTORY:"wpm_daily_history",ENABLED_MODES:"wpm_enabled_modes",CUSTOM_POOL:"wpm_custom_pool"},xO=()=>{try{const n=localStorage.getItem(fa.LEVEL);if(!n)return 1;const i=parseInt(n,10);return isNaN(i)?1:i}catch{return 1}},VO=n=>{localStorage.setItem(fa.LEVEL,n.toString())},cc=[Te.CLASSIC,Te.LEVEL_EMOJI,Te.LEVEL_SYNONYMS,Te.LEVEL_MIND_MATCH,Te.LEVEL_THEMED,Te.LEVEL_EXPANSION],KO=()=>{try{const n=localStorage.getItem(fa.ENABLED_MODES);if(!n)return cc;const i=JSON.parse(n);return Array.isArray(i)&&i.length>0?i:cc}catch{return cc}},WO=n=>{localStorage.setItem(fa.ENABLED_MODES,JSON.stringify(n))},YO=()=>{try{const n=localStorage.getItem(fa.CUSTOM_POOL);if(!n)return[];const i=JSON.parse(n);return Array.isArray(i)?i:[]}catch{return[]}},zO=n=>{localStorage.setItem(fa.CUSTOM_POOL,JSON.stringify(n))},jO=()=>!!localStorage.getItem(fa.TUTORIAL_SEEN),JO=()=>{localStorage.setItem(fa.TUTORIAL_SEEN,"true")},dc={rowsSolved:0,levelsCompleted:0,totalTimeMs:0,hintsUsed:0,hintsRefused:0,totalMoves:0,solvedCategoryIds:[],solvedWords:[],totalScore:0},pT=()=>{try{const n=localStorage.getItem(fa.GAME_STATS);if(!n)return dc;const i=JSON.parse(n);return{...dc,...i,solvedWords:Array.isArray(i.solvedWords)?i.solvedWords:[]}}catch{return dc}},_O=n=>{try{const i=pT();let r=i.solvedCategoryIds;if(n.solvedCategoryIds){const S=new Set([...i.solvedCategoryIds,...n.solvedCategoryIds]);r=Array.from(S)}let l=i.solvedWords;if(n.solvedWords){const S=new Set([...i.solvedWords,...n.solvedWords]);l=Array.from(S)}const c={rowsSolved:i.rowsSolved+(n.rowsSolved||0),levelsCompleted:i.levelsCompleted+(n.levelsCompleted||0),totalTimeMs:i.totalTimeMs+(n.totalTimeMs||0),hintsUsed:i.hintsUsed+(n.hintsUsed||0),hintsRefused:i.hintsRefused+(n.hintsRefused||0),totalMoves:i.totalMoves+(n.totalMoves||0),solvedCategoryIds:r,solvedWords:l,totalScore:i.totalScore+(n.totalScore||0)};localStorage.setItem(fa.GAME_STATS,JSON.stringify(c))}catch(i){console.error("Failed to update stats",i)}},ZO=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
399,Church Actions,Preach,Pray,Baptize,Confess,Offer,Chant,Sing,Fast,Read Scripture`,XO=`401,Church Music Instruments,Organ,Harp,Flute,Lute,Horn,Bell,Trumpet,Violin,Drum
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
770,ROCK PRODUCERS,GEORGE MARTIN,RICK RUBIN,BRIAN ENO,MICKIE MOST,QUINCY JONES`,qO=`801,SOCCER ACTIONS,GOAL,CORNER KICK,PASS,DRIBBLE,HEADER,FOUL,KICKOFF,OFFSIDE,PENALTY KICK
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
1200,TECTONIC PLATES,PACIFIC,EURASIAN,AFRICAN,ANTARCTIC`,QO=`1201,VOLCANO PARTS,CRATER,VENT,MAGMA,LAVA,ASH
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
1300,BREAKING BAD,WALTER,JESSE,SKYLER,HANK,SAUL,GUS`,$O=`1760,BICYCLE PARTS,WHEEL,TIRE,PEDAL,CHAIN,HANDLEBAR,SEAT,BRAKE,GEAR
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
110484,Yellowstone,Geyser,Caldera,Bison,Wolves,Prismatic,Mammoth`,op=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
120000,Alabama,Yellowhammer bird,Longleaf Pine,Carver discoveries,5.2M Pop.,Rosa Parks site,Space & Rocket Center,Christmas holiday,Talladega
120001,Alaska,24 hours of sun,Once Russian,733K Pop.,Canadian Neighbor,Largest US state,Denali,Mushing,3 million lakes
120002,Arizona,Cactus Wren bird,Palo Verde tree,Grand Canyon,7.7M Pop.,London Bridge,No Daylight Saving,Copper State,Monument Valley
120003,Arkansas,Mockingbird,Loblolly Pine,Diamond mine,3.1M Pop.,Bill Clinton,Ozark Mountains,Hot Springs,Walmart HQ
120004,California,Quail bird,Redwood tree,Death Valley,39.9M Pop.,Golden Gate Bridge,Alcatraz Island,Hollywood Sign,Largest economy
120005,Colorado,Lark Bunting,Blue Spruce,Rocky Mountains,6.1M Pop.,Highest elevation,Mesa Verde,Pikes Peak,Garden of the Gods
120006,Connecticut,American Robin,White Oak tree,First constitution,3.7M Pop.,Yale University,Mystic Seaport,Mark Twain House,Constitution State
120007,Delaware,Blue Hen Chicken,American Holly,First state,1.1M Pop.,No sales tax,Rodney's ride,Biden's home,Constitution ratify
120008,Florida,Mockingbird,Sabal Palm,Everglades,24.3M Pop.,Kennedy Space Center,Disney World,St. Augustine,Artemis II
120009,Georgia,Brown Thrasher,Live Oak tree,Oldest state park,11.3M Pop.,Martin Luther King,1996 Olympics,Jimmy Carter,Coca-Cola HQ
120010,Hawaii,Nene bird,Kukui tree,Only islands,1.4M Pop.,Pearl Harbor,Diamond Head,Mauna Kea,Grows coffee
120011,Idaho,Mountain Bluebird,Western White Pine,Potato producer,2.1M Pop.,Hells Canyon,Craters of the Moon,Sun Valley,Shoshone Falls
120012,Illinois,Northern Cardinal,White Oak tree,Abraham Lincoln,12.5M Pop.,Route66 starts,Willis Tower,Obama Center,Navy Pier
120013,Indiana,Northern Cardinal,Tulip tree,Indianapolis 500,6.9M Pop.,Hoosier State,Lincoln Memorial,Michael Jackson,Indiana Dunes
120014,Iowa,Eastern Goldfinch,Bur Oak tree,Presidential caucus,3.3M Pop.,Cattle numbers,Field of Dreams,Hoover Library,Effigy Mounds
120015,Kansas,Western Meadowlark,Cottonwood tree,Geographic center,2.9M Pop.,Oz Dorothy,Eisenhower Library,Air Capital,Tallgrass Prairie
120016,Kentucky,Northern Cardinal,Tulip Poplar,Mammoth Cave,4.6M Pop.,Kentucky Derby,Bourbon capital,Lincoln birthplace,SAR Museum
120017,Louisiana,Brown Pelican,Bald Cypress,Mardi Gras,4.5M Pop.,French Quarter,Jazz birthplace,WrestleMania 42,Cajun culture
120018,Maine,Black-capped Chickadee,Eastern White Pine,Acadia Park,1.4M Pop.,Lobster producer,L.L. Bean HQ,Portland Head Light,Eastern point
120019,Maryland,Baltimore Oriole,White Oak tree,Star-Spangled Banner,6.2M Pop.,Chesapeake Bay,Naval Academy,Antietam,Fort McHenry
120020,Massachusetts,Black-capped Chickadee,American Elm,Freedom Trail,7.1M Pop.,Harvard University,Plymouth Rock,Lexington & Concord,Cape Cod
120021,Michigan,American Robin,Eastern White Pine,Great Lakes,10.1M Pop.,Henry Ford Museum,Motown Records,Mackinac Bridge,Pictured Rocks
120022,Minnesota,Common Loon,Red Pine tree,Mall of America,5.8M Pop.,10000 Lakes,Mississippi head,Mayo Clinic,Paisley Park
120023,Mississippi,Mockingbird,Magnolia tree,Blues birthplace,2.9M Pop.,Stetson hat,Vicksburg,Gulf Islands,B.B. King Museum
120024,Missouri,Eastern Bluebird,Flowering Dogwood,Gateway Arch,6.2M Pop.,Truman Library,Route 66 Centennial,Branson theaters,Twain's home
120025,Montana,Western Meadowlark,Ponderosa Pine,Glacier Park,1.2M Pop.,Little Bighorn,Temp change,Yellowstone north,Big Sky
120026,Nebraska,Western Meadowlark,Cottonwood tree,Chimney Rock,2.0M Pop.,Sandhill crane,Carhenge,Arbor Day,Unicameral
120027,Nevada,Mountain Bluebird,Single-leaf Pinyon,Hoover Dam,3.4M Pop.,Las Vegas Strip,Area 51,Great Basin,Silver State
120028,New Hampshire,Purple Finch,Paper Birch,Mount Washington,1.4M Pop.,Primary election,Old Man site,Dartmouth,White Mountains
120029,New Jersey,Eastern Goldfinch,Red Oak tree,Density high,9.4M Pop.,Boardwalk,Princeton,Edison's lab,Ellis Island
120030,New Mexico,Greater Roadrunner,Piñon Pine,Carlsbad Caverns,2.1M Pop.,White Sands,Santa Fe,Los Alamos,Balloon Fiesta
120031,New York,Eastern Bluebird,Sugar Maple,Statue of Liberty,20.1M Pop.,Niagara Falls,Empire State,9/11 Memorial,Harlem Renaissance
120032,North Carolina,Northern Cardinal,Longleaf Pine,Wright Brothers,11.2M Pop.,Biltmore Estate,Great Smoky,Outer Banks,Research Triangle
120033,North Dakota,Western Meadowlark,American Elm,Theodore Roosevelt,780K Pop.,Roosevelt Library,Peace Garden,Fewest landmarks,Fargo
120034,Ohio,Northern Cardinal,Ohio Buckeye,Rock Hall of Fame,11.8M Pop.,8 US presidents,Cuyahoga Valley,Wright-Patterson,Football Hall
120035,Oklahoma,Scissor-tailed Flycatcher,Redbud tree,Route 66 museum,4.1M Pop.,Cherokee Nation,Tulsa Massacre,OKC Memorial,Centennial Bash
120036,Oregon,Western Meadowlark,Douglas Fir,Crater Lake,4.3M Pop.,Fastest-speaking,City of Boring,Haystack Rock,Rose Test Garden
120037,Pennsylvania,Ruffed Grouse,Eastern Hemlock,Liberty Bell,13.2M Pop.,Philadelphia 2026,Gettysburg,Valley Forge,Independence Hall
120038,Rhode Island,Rhode Island Red,Red Maple,Smallest state,1.1M Pop.,Newport Mansions,Ocean State,Baptist Church,Brown University
120039,South Carolina,Carolina Wren,Cabbage Palmetto,Fort Sumter,5.6M Pop.,Charleston historic,Myrtle Beach,Hilton Head,BMW US
120040,South Dakota,Ring-necked Pheasant,Black Hills Spruce,Mount Rushmore,930K Pop.,Badlands,Crazy Horse,Wall Drug,Sturgis Rally
120041,Tennessee,Mockingbird,Tulip Poplar,Great Smoky,7.3M Pop.,Graceland,Grand Ole Opry,Songteller Hotel,Oak Ridge
120042,Texas,Mockingbird,Pecan tree,The Alamo,32.4M Pop.,NASA Johnson,Universal Kids,SXSW 40th,Big Bend
120043,Utah,California Gull,Quaking Aspen,Zion Park,3.6M Pop.,Arches Park,Mormon Tabernacle,SLC Olympics,Sundance 2026
120044,Vermont,Hermit Thrush,Sugar Maple,Maple syrup,650K Pop.,Ben & Jerry's,Lake Champlain,Green Mountains,Trapp Family Lodge
120045,Virginia,Northern Cardinal,American Dogwood,Arlington Cemetery,8.8M Pop.,Mount Vernon,Monticello,Jamestown,Shenandoah
120046,Washington,Willow Goldfinch,Western Hemlock,Mount Rainier,8.0M Pop.,Space Needle,Olympic Park,Microsoft HQ,Mount St. Helens
120047,West Virginia,Northern Cardinal,Sugar Maple,New River Gorge,1.7M Pop.,Appalachian,Harpers Ferry,The Greenbrier,Mountain State
120048,Wisconsin,American Robin,Sugar Maple,Apostle Islands,6.0M Pop.,Harley Museum,Door County,Dairy State,15000 lakes
120049,Wyoming,Western Meadowlark,Plains Cottonwood,Yellowstone,585K Pop.,Grand Teton,Devils Tower,Women's suffrage,Old Faithful
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
120089,Zambia,Victoria Fall,Safari park,Copper mines,Zambezi,Lusaka City,Luangwa,Bird Crane,Walking tour`,rp=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
200107,PUNK ROCK Bands,Ramones,Clash,Pistols,Misfits,Green Day,Blink 182,Bad Brains,Dead Kenn,Black Flag,Descendents
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
200152,FLIGHT History,Wright Bros,Lindbergh,Amelia,War,Jets,Concorde,Space,Future,Boeing,Airbus`,sp=[ZO,XO,qO,QO,$O,ep,tp,ap,np,ip,op,rp].join(`
`),lp=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
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
`,up=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
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
`,cp=`Category,Linguistic Cluster,Intensity
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
"Young Trees","Saplings, Seedlings, Sprouts, Scions",5`,$c=50;function Gi(n){const i=[...n];for(let r=i.length-1;r>0;r--){const l=Math.floor(Math.random()*(r+1));[i[r],i[l]]=[i[l],i[r]]}return i}const Sc=n=>{const i=n.trim().split(`
`),r=[];for(let l=1;l<i.length;l++){const c=i[l].trim();if(!c)continue;const S=[];let d="",E=!1;for(let f=0;f<c.length;f++){const C=c[f];C==='"'?E&&c[f+1]==='"'?(d+='"',f++):E=!E:C===","&&!E?(S.push(d),d=""):d+=C}if(S.push(d),S.length<3)continue;const h=S[0].trim(),m=S[1].trim(),T=S.slice(2).map(f=>f.trim()).filter(f=>f.length>0&&f.length<=$c);T.length>=4&&r.push({id:h,name:m,words:T})}return r},dp=(n,i=8e4)=>{const r=n.trim().split(`
`),l=[];let c=i;for(let S=1;S<r.length;S++){const d=r[S].trim();if(!d)continue;const E=[];let h="",m=!1;for(let L=0;L<d.length;L++){const G=d[L];G==='"'?m=!m:G===","&&!m?(E.push(h),h=""):h+=G}if(E.push(h),E.length<2)continue;const T=E[0].trim().replace(/^"|"$/g,""),C=E[1].trim().replace(/^"|"$/g,"").split(",").map(L=>L.trim()).filter(L=>L.length>0&&L.length<=$c);C.length>=4&&l.push({id:(c++).toString(),name:T,words:C})}return l};let Fn=[],gT=[];const Ac=[{id:"fb1",name:"Colors",words:["Red","Blue","Green","Yellow"]},{id:"fb2",name:"Animals",words:["Dog","Cat","Bird","Fish"]},{id:"fb3",name:"Fruits",words:["Apple","Banana","Orange","Grape"]},{id:"fb4",name:"Planets",words:["Earth","Mars","Venus","Jupiter"]},{id:"fb5",name:"Seasons",words:["Spring","Summer","Fall","Winter"]},{id:"fb6",name:"Directions",words:["North","South","East","West"]},{id:"fb7",name:"Elements",words:["Fire","Water","Air","Earth"]}],NT=()=>{if(!(Fn.length>0))try{const n=[...Sc(sp||""),...dp(cp||""),...Sc(lp||"")];if(n.length===0){Fn=Ac;return}const i=new Map;for(const r of n){if(!r.name)continue;const l=r.name.toUpperCase().trim();if(!(l==="CATEGORY"||l==="NAME"||l===""))if(i.has(l)){const c=i.get(l),S=Array.from(new Set([...c.words,...r.words]));c.words=S}else i.set(l,{...r})}Fn=Array.from(i.values()).filter(r=>r.words.length>=4),Fn.length===0&&(Fn=Ac),gT=Sc(up||"")}catch(n){console.error("Critical error during CSV initialization:",n),Fn=Ac}},Ds=()=>(NT(),Fn),Sp=()=>(NT(),gT),Ap=`
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
`;let Ec=null;const Bs=()=>{if(Ec)return Ec;const n=Ap.trim().split(`
`),i=[];let r=5e4;return n.forEach(l=>{if(!l.includes(","))return;const c=l.split(",").map(E=>E.trim().toLowerCase()).filter(E=>E.length>0&&E.length<=14);if(c.length<5)return;const S=c[0],d=c.slice(1);d.length>=4&&i.push({id:(r++).toString(),name:`SYNONYMS: ${S.toUpperCase()}`,words:d})}),Ec=i,i},Ep=`
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
`;let hc=null;const zo=()=>{if(hc)return hc;const n=Ep.trim().split(`
`),i=[];let r=9e4;const l=typeof Intl<"u"&&"Segmenter"in Intl;return n.forEach(c=>{if(!c.includes(","))return;const S=c.indexOf(","),d=c.substring(0,S).trim(),E=c.substring(S+1).trim();let h=[];if(l){const T=new Intl.Segmenter("en",{granularity:"grapheme"}).segment(E);for(const{segment:f}of T){const C=f.trim();C.length>0&&h.push(C)}}else h=Array.from(E).filter(m=>m.trim().length>0);h=Array.from(new Set(h)),h.length>=3&&i.push({id:(r++).toString(),name:d,words:h})}),hc=i,i},hp=`THEME,SUB-CATEGORY,FACT 1,FACT 2,FACT 3,FACT 4,FACT 5,FACT 6,FACT 7,FACT 8,FACT 9,FACT 10
ZOO,Zoo Animals,Lions,Tigers,Bears,Monkeys,Elephants,Giraffes,Zebras,Pandas,Penguins,Rhinos
ZOO,Zoo Locations,San Diego,Bronx Zoo,London Zoo,Toronto Zoo,Chicago Zoo,Miami Zoo,Dublin Zoo,Berlin Zoo,Paris Zoo,Denver Zoo
ZOO,Zoo Jobs,Keeper,Vet,Biologist,Curator,Guide,Manager,Cleaner,Builder,Admin,Security
ZOO,Zoo Exhibits,Savanna,Aviary,Aquarium,Rainforest,Reptile,Nocturnal,Primate,Panda House,Polar Bear,Big Cat
ZOO,Life Cycle,Birth,Growth,Mating,Old Age,Breeding,Wild Release,Diet,Sleep,Behavior,Health check
ZOO,Zoo Plants,Bamboo,Grass,Trees,Bushels,Shrubs,Lilly pads,Eucalyptus,Hay,Clover,Flowers
ZOO,Conservation,Breeding,Research,Protect,Rescue,Educate,Funds,Habitat,Wild life,Programs,Species
SPACE,Missions,Apollo 11,ISS,Hubble,Voyager,Curiosity,Mars Rover,Artemis II,Deep Space,Falcon 9,New Horizons
SPACE,Tech,Rocket,Shuttle,Capsule,Rover,Probe,Telescope,Lab,Solar Panels,Docking,Module
SPACE,People,Armstrong,Collins,Glenn,Jemison,Hadfield,Currie,Ride,Yeager,Kennedy,Gagarin
SPACE,Bodies,Mars,Moon,Sun,Jupiter,Saturn,Earth,Pluto,Mercury,Venus,Neptune
SPACE,Terms,Orbit,Lift Off,Docking,Gravity,Zero G,Vacuum,Launch,Entry,Landing,Mission
SPACE,Agencies,NASA,ESA,JAXA,Roscosmos,ISRO,CNSA,SpaceX,Blue Origin,Virgin,Boeing
SPACE,History,Cold War,Space Race,First Man,First Woman,Sputnik,Apollo Fire,Challenger,Columbia,Starlink,Skylab
GOVERNMENT,Branches,Legislative,Executive,Judicial,House,Senate,President,Court,SCOTUS,Local Gov,State Gov
GOVERNMENT,Parties,Democrat,Republican,Indie,Green,Libertarian,Socialist,Communist,Third Party,Caucus,Vote
GOVERNMENT,Capitol,White House,Capitol Bldg,SCOTUS Bldg,The Mall,Monuments,DC City,Potomac River,Security,Police,Laws
GOVERNMENT,Power,Checks,Balances,Veto,Override,Impeach,Confirm,Approve,Reject,Elect,Serve
GOVERNMENT,Documents,Consti,Bill Rights,Dec of Ind,Statutes,Laws,Acts,Codes,Treaties,Exec Order,Pardon
GOVERNMENT,Money,Taxes,IRS,Fed Reserve,Budget,Deficit,Surplus,Grants,Spending,Bills,Coin
GOVERNMENT,Terms,Primary,Caucus,Filibuster,Midterms,Inaugural,Census,Redistrict,Bill,Law,Voter ID
CARTOONS,Networks,Disney,Cartoon Net,Nick,Pixar,Hanna Barbera,Looney Tunes,Warner Bros,Adult Swim,Boomerang,MTV
CARTOONS,Characters,Mickey,Bugs,Homer,SpongeBob,Scooby Doo,Fred,Daffy,Simba,Goku,Ash Ketchum
CARTOONS,Shows,Simpsons,Family Guy,South Park,Scooby Doo,Futurama,Bob's Burgers,Rick Morty,Bluey,Paw Patrol,Avatar
CARTOONS,Genres,Comedy,Action,Kids,Adult,Drama,Anime,Stop Motion,Classic,Modern,Shorts
CARTOONS,Tools,Pen Ink,Paper,Camera,Computers,Cels,Frames,Sound,Voice,Music,Art
CARTOONS,Films,Lion King,Toy Story,Shrek,Frozen,Spirited,Zootopia,Minions,Finding Nemo,Up,Coco
CARTOONS,History,Cels,Ink Paint,First Film,Black White,Color,CGI,Hand Drawn,Digital,Golden Age,Modern Era
MEDICINE,Fields,Cardiology,Oncology,Pediatrics,Neurology,Surgery,Dentistry,Psychiatry,Radiology,Geriatrics,Internal
MEDICINE,Tools,Scalpel,Forceps,MRI,X-ray,Stethoscope,IV bag,Pills,Syringe,Bandage,Gloves
MEDICINE,Careers,Doctor,Nurse,Surgeon,EMT,Therapist,Tech,Admin,Aide,CNA,MA
MEDICINE,History,Penicillin,Vaccines,X-rays,Blood Bank,Anesthesia,Germ theory,Salk vaccine,Aspirin,Suture,Quinine
MEDICINE,Terms,Diagnosis,Prognosis,Symptom,Chronic,Acute,Benign,Malignant,Placebo,Triage,Crisis
MEDICINE,Pharmacies,CVS,Walgreens,Rite Aid,Kroger,Walmart,Amazon,OptumRx,Cigna,Aetna,Express
MEDICINE,Research,Clinical,Trials,Study,Drug Dev,Phase I,Phase II,Phase III,FDA,GMP,GLP
TECHNOLOGY,Companies,Apple,Google,Amazon,Meta,Nvidia,Tesla,Microsoft,Netflix,Intel,IBM
TECHNOLOGY,Products,iPhone,Pixel,Echo,Quest,Model Y,Xbox,PlayStation,AI Chip,Cloud,Office
TECHNOLOGY,Terms,AI,VR,AR,Cloud,Data,Server,Code,Pixel,Byte,Chip,Software,Hardware
TECHNOLOGY,Software,OS,App,Program,Code,Browser,Engine,Tools,Suite,Open Source,Closed,Platform
TECHNOLOGY,Social,Facebook,Insta,TikTok,Snap,Twitter X,Linked In,YouTube,Reddit,Threads,Pinterest
TECHNOLOGY,History,Internet,Phone,Transistor,Circuit,Mainframe,PC,Mouse,Monitor,WWW,Dot Com
TECHNOLOGY,2026 Trends,AI Growth,Metaverse,VR Gaming,EV Cars,Home Tech,Quantum,New Robots,New Chips,Bio Tech,Space Tourism
DOGS,Breeds,Labrador,Poodle,Bulldog,Dachshund,Boxer,Beagle,Husky,Corgi,Pug,Pomeranian
DOGS,Sounds,Bark,Woof,Whine,Growl,Howl,Yip,Sniff,Puff,Gulp,Sneeze
DOGS,Commands,Sit,Stay,Heel,Down,Come,Fetch,Roll Over,Beg,Shake
DOGS,Care,Walk,Feed,Bathe,Groom,Train,Vet check,Play,Sleep,Hug,Pet
DOGS,Toys,Ball,Frisbee,Rope,Chew,Plush,Squeaky,Stick,Bone,Puzzle,Tug
DOGS,Work,Guide Dog,Police Dog,Service,Rescue,Herding,Hunting,Guard,Military,Sniffer,Farm Dog
DOGS,Health,Shots,Fleas,Ticks,Vet Visit,Check Up,Food,Water,Sleep,Exercise,Grooming,Care
PIRATES,Real Pirates,Blackbeard,Kidd,Morgan,Teach,Calico Jack,Anne Bonny,Mary Read,Barbossa,Sparrow,Hook
PIRATES,Terms,Ahoy,Matey,Shiver,Plunder,Booty,Jolly Roger,Aye Aye,Walk Plank,Sea Dogs,Buccaneers
PIRATES,Locations,Caribbean,Nassau,Tortuga,Port Royal,Somalia,Gulf of Aden,Treasure Isl,Map,X Marks Spot,Cove
PIRATES,Ships,Galleon,Schooner,Brig,Man of war,Sloop,Jolly Roger,Black Pearl,Queen Anne,Sea Rover,The Dawn
PIRATES,Culture,Rum,Shanties,Parrot,Eye patch,Hook hand,Peg leg,Sword,Pistol,Treasure,Gold
PIRATES,Fiction,Pirates of Carib,Treasure Isl,Peter Pan,One Piece,Captain Hook,Jack Sparrow,Red Beard,Long John,Black Sail,Goonies
PIRATES,History,Golden Age,Privateer,Corsair,Barbary,Treaty,Capture,Plunder,Naval,Trade Routes,Empire
JIM HENSON,Creatures,Muppets,Sesame,Fraggle,Gonzo,Kermit,Piggy,Fozzie,Big Bird,Ernie,Bert
JIM HENSON,Shows,The Muppet,Sesame,Fraggle,Dinosaurs,Dark Crystal,Labyrinth,Statler,Waldorf,Chef,Rowlf
JIM HENSON,Films,Muppet Movie,Dark Crystal,Labyrinth,Great Muppet,Caper,Muppet Xmas,Treasure Isl,Muppet in Space,Oz The Great
JIM HENSON,Techniques,Puppets,Anima,CGI,Green Screen,Hands,Rods,Voice,Build,Sew,Design
JIM HENSON,People,Jim,Frank Oz,Jerry Nelson,Dave Goelz,Richard Hunt,Caroll Spinney,Jane,Lisa,Brian
JIM HENSON,Studio,Henson Co,Workshop,Studios,Props,Costumes,Designers,Writers,Puppeteers,Artists
JIM HENSON,Legacy,Imagination,Creativity,Magic,Fun,Music,Stories,Laughs,Friends,Family
NATURE,Animals,Mammals,Reptiles,Fish,Birds,Insects,Amphibs,Spiders,Fungi,Plants,Trees
NATURE,Biomes,Forest,Desert,Tundra,Ocean,River,Lake,Wetland,Savanna,Jungle,Arctic
NATURE,Processes,Growth,Cycles,Weather,Erosion,Tides,Seasons,Photosyn,Evol,Migrate,Birth
NATURE,Science,Biology,Ecology,Geology,Physics,Chemistry,Weather,Climate,Research,Study,Lab
NATURE,Disasters,Flood,Fire,Tornado,Quake,Tsunami,Volcano,Storm,Drought,Hurricane,Typhoon
NATURE,Conservation,Protect,Preserve,Rescue,Green,Recycle,Clean,Save,Species,Habitat,Earth
NATURE,Terms,Eco system,Biodiver,Wild life,Habitat,Food Chain,Prey,Predator,Organic,Green,Water
TOYS,Types,Board Games,Action Fig,Dolls,Cars,Blocks,Puzzles,Cards,Video Games,Plush,Science
TOYS,Brands,Lego,Mattel,Hasbro,Barbie,Hot Wheels,Nerf,Playmobil,Fisher Price,Nintendo,Sega
TOYS,Games,Monopoly,Clue,Chess,Checkers,Risk,Sorry,Uno,Go Fish,Jenga,Scrabble,BINGO
TOYS,Classic,Slinky,Yo Yo,Marbles,Jacks,Hula Hoop,Frisbee,View Master,Etch Sketch,Jump Rope,Top
TOYS,Modern,Video Games,Drones,Robots,AI Pets,VR Gear,Smart Toys,Apps,Digital,Electric,Tech
TOYS,Collecting,Cards,Stamps,Coins,Dolls,Comics,Figures,Rare,Value,Trade,Sell
TOYS,Stores,Toys R Us,Target,Walmart,Amazon,Build Bear,Lego Store,Local Shop,Online,SmallBiz
POKEMON,Characters,Pikachu,Charizard,Squirtle,Bulbasaur,Mewtwo,Jigpuff,Eevee,Snorlax,Gengar,Meowth
POKEMON,Games,Red,Blue,Yellow,Gold,Silver,Ruby,Sapphire,Diamond,Pearl,Sun,Moon
POKEMON,Media,TV Show,Movies,Cards,Manga,Comics,Toys,Apps,Merch,Songs,Books
POKEMON,Terms,Catch,Evolve,Battle,Trainer,Gym,Badge,Pokedex,Poke Ball,Moves,Items
POKEMON,Types,Fire,Water,Grass,Electric,Ice,Fighting,Poison,Ground,Flying,Psychic
POKEMON,World,Kanto,Johto,Hoenn,Sinnoh,Unova,Kalos,Alola,Galar,Paldea,Region
POKEMON,History,1996,Japan,Global,Craze,Phenom,Cards,Games,Movies,Legacy
MARVEL,Heroes,Iron Man,Cap America,Thor,Hulk,Black Widow,Hawkeye,Spider Man,Black Panther,Doctor Strange,Ant Man
MARVEL,Villains,Thanos,Loki,Ultron,Goblin,Venom,Red Skull,Magneto,Doom,Kang,Galactus
MARVEL,Teams,Avengers,X Men,Guardians,Fantastic Four,Shield,Hydra,Defenders,Inhumans,New Mutants,Runaways
MARVEL,Films,MCU,Endgame,Infinity War,Black Panther,Iron Man,The Marvels,Guardians,Deadpool 2026,Blade 2026,Cap 4 2026
MARVEL,Comics,Stan Lee,Kirby,Ditko,Panels,Ink,Color,Writer,Artist,Story,Issue
MARVEL,Terms,Infinity,Stones,Multiverse,Blip,Snap,Vibranium,Pym Tech,Asgard,Wakanda,Daily Bugle
MARVEL,Future 2026,New films,New shows,AI in film,More heroes,More stories,More action,More fun,More money
INSECTS,Types,Ants,Bees,Flies,Beetles,Moths,Butterflies,Mosquitoes,Crickets,Spiders,Roaches,Wasps
INSECTS,Body,Head,Thorax,Abdomen,Legs,Wings,Antennae,Eyes,Stinger,Pincers,Shell,Fangs
INSECTS,Habitats,Garden,Forest,Swamp,Desert,Tundra,Home,Farm,Hive,Nest,Ground,Under Log
INSECTS,Food,Nectar,Plants,Blood,Meat,Decay,Honey,Sap,Other Bugs,Wood,Fruit,Sugar
INSECTS,Life Cycle,Egg,Larva,Pupa,Adult,Stage,Birth,Growth,Mating,Death,Cycle
INSECTS,Behavior,Swarm,Colony,Nest,Fly,Crawl,Jump,Sing,Communicate,Dance,Fight,Work
INSECTS,Benefit,Pollinate,Eat Pests,Food,Honey,Silk,Science,Study,Nature,Balance,Helpful
LANDMARKS,Global,Eiffel Tower,Great Wall,Taj Mahal,Big Ben,Colosseum,Pyramids,Petra,Machu Picchu,Christ Redeemer,Statue Liberty
LANDMARKS,Natural,Grand Canyon,Mount Everest,Great Reef,Victoria Fall,Iguazu Falls,Galapagos,Niagara Falls,Mount Fuji,Matterhorn,Dead Sea
LANDMARKS,US Sites,Golden Gate,Rushmore,Liberty Bell,Hollywood,The Alamo,Space Needle,Gateway Arch,White House,French Quarter,The Strip
LANDMARKS,European,Acropolis,Tower Bridge,Leaning Tower,Louvre,Sagrada,Neuschwan,Brandenburg,Versailles,St Peters,Canals Venice
LANDMARKS,Asian,Angkor Wat,Burj Khalifa,Temple Heaven,Fushimi Inari,Grand Palace,Potala Palace,Bagan,Petra,Himeji Castle,Mekong River
LANDMARKS,Modern,Opera House,Canton Tower,The Shard,The Bean,Space Station,Museum Future,CN Tower,Sphere Vegas,Lotus Temple,Lego House
LANDMARKS,Ancient,Stonehenge,Chichen Itza,Sphinx,Pompeii,Knossos,Terra Cotta,Nazca Lines,Oracle Delphi,Tikal,Luxor Temple
MOVIES,Genres,Action,Comedy,Drama,Horror,Sci-Fi,Romance,Western,Musical,Thriller,Mystery,Animation
MOVIES,Classic,Casablanca,Gone Wind,Citizen Kane,Psycho,The Godfather,Star Wars,Jaws,Wizard of Oz,Singin Rain,Vertigo
MOVIES,Directors,Spielberg,Scorsese,Nolan,Hitchcock,Cameron,Coppola,Kubrick,Tarantino,Burton,Gerwig
MOVIES,2026 Hits,New Avengers,Bond 26,Dune Part 3,Avatar 4,Toy Story 5,Star Wars X,Frozen 3,Shrek 5,Batman 2,Wicked Part 2
MOVIES,Terms,Script,Director,Producer,Actor,CGI,Soundtrack,Box Office,Sequel,Editing,Review
MOVIES,Awards,Oscar,Golden Globe,BAFTA,Cannes,Emmy,SAG,Screenplay,Best Actor,Best Film,Red Carpet
MOVIES,Studio,Disney,Universal,Warner Bros,Paramount,Sony,Netflix,Pixar,Marvel,Dreamworks,A24
JAPAN,Culture,Sushi,Anime,Samurai,Geisha,Origami,Tea Ceremony,Kimono,Zen,Sumo,Calligraphy
JAPAN,Cities,Tokyo,Kyoto,Osaka,Hiroshima,Sapporo,Nara,Fukuoka,Nagoya,Yokohama,Kobe
JAPAN,Brands,Toyota,Sony,Nintendo,Honda,Canon,Nikon,Panasonic,Uniqlo,SoftBank,Suzuki
JAPAN,Nature,Mount Fuji,Cherry Bloom,Bamboo Grove,Hot Springs,Snow Monkey,Deer Park,Inland Sea,Alps,Coastline,Islands
JAPAN,History,Edo Period,Shogun,Meiji Era,Empire,Samurai Code,Pearl Harbor,Post War,Tech Boom,Olympics,2026 Expo
JAPAN,Tech,Robotics,Bullet Train,Video Games,Micro Chips,Smart Homes,Neon Signs,Maglev,Future Tech,VR Gaming,AI Labs
JAPAN,Food,Ramen,Tempura,Sashimi,Udon,Mochi,Yakitori,Sake,Miso,Gyoza,Teriyaki
CHINA,Geography,Yellow River,Yangtze,Gobi Desert,Himalayas,Silk Road,South Sea,Rice Fields,Karst Peaks,Great Wall,Shanghai
CHINA,Culture,Lanterns,Zodiac,Dragon Dance,Kung Fu,Paper Cut,Tea Art,Red Color,Lucky Money,Feng Shui,Opera
CHINA,Cities,Beijing,Shanghai,Shenzhen,Guangzhou,Chengdu,Wuhan,Xi-an,Nanjing,Hangzhou,Chongqing
CHINA,History,Dynasty,Great Wall,Silk Road,First Emperor,Ming Period,Forbidden,Confucius,Red Guard,Modern Rise,2026 Future
CHINA,Animals,Giant Panda,Red Panda,Snow Leopard,Tiger,Crane bird,Sturgeon,Monkey,Tibet Antelope,Dolphin,Pheasant
CHINA,Food,Dim Sum,Peking Duck,Dumplings,Hot Pot,Chow Mein,Spring Roll,Tofu,Mapo,Soy Sauce,Bao
CHINA,Tech,Alibaba,Tencent,TikTok,Huawei,EV Cars,5G Network,High Rail,Solar Power,Space Lab,AI Vision
ANIMALS,Mammals,Elephant,Lion,Tiger,Bear,Wolf,Whale,Dolphin,Giraffe,Zebra,Monkey
ANIMALS,Birds,Eagle,Owl,Penguin,Parrot,Hawk,Swan,Peacock,Flamingo,Robin,Falcon
ANIMALS,Reptiles,Snake,Lizard,Turtle,Alligator,Crocodile,Iguana,Python,Cobra,Gecko,Komodo
ANIMALS,Ocean,Shark,Octopus,Ray,陸,Seal,Walrus,Coral,Crab,Jellyfish,Sea Horse
ANIMALS,Farm,Cow,Horse,Pig,Sheep,Chicken,Goat,Donkey,Duck,Turkey,Goose
ANIMALS,Wild,Leopard,Jaguar,Hyena,Rhino,Hippo,Bison,Moose,Deer,Coyote,Fox
ANIMALS,Terms,Species,Habitat,Wild life,Diet,Mammal,Predator,Prey,Migrate,Life Cycle,Nature
BASKETBALL,NBA Teams,Lakers,Celtics,Warriors,Heat,Bulls,Knicks,76ers,Bucks,Suns,Nuggets
BASKETBALL,Legends,Jordan,LeBron,Kobe,Magic,Bird,Shaq,Curry,Kareem,Wilt,Duncan
BASKETBALL,Terms,Dunk,Assist,Rebound,Block,Steal,Dribble,Shoot,Foul,Travel,3 Point,Fast Break
BASKETBALL,Positions,Point Guard,Shooting Guard,Small Forward,Power Forward,Center,Sixth Man,Rookie,Captain,Coach,Ref
BASKETBALL,Courts,Hardwood,Key,Backboard,Hoop,Net,Free Throw,Sideline,Baseline,Half Court,3 Line
BASKETBALL,History,Naismith,Springfield,1891,First Game,Baskets,Peach Baskets,First Rules,NBA Start,College Hoops,Olympics
BASKETBALL,Events,Finals,All Star,Olympics,Draft,Trade,Summer League,Preseason,March Madness,Slam Dunk,3 Point
ROARING 20S,Culture,Jazz Age,Flappers,Speakeasy,Prohibition,Bootlegger,Charleston,Dance,Radio,Movies,Fashion,Art Deco
ROARING 20S,People,Gatsby,Al Capone,Babe Ruth,Lindbergh,Ford,Hemingway,Fitzgerald,Louis Armst,Coco Chanel,Hoover
ROARING 20S,History,WWI End,Stock Market,Crash,Boom,Treaty,Suffrage,Women Vote,Jazz Age,Mob Rule,The Great War
ROARING 20S,Terms,Boom,Bust,Jazz,Flapper,Drys,Wets,Giggle Water,Bathtub Gin,Bee's Knees,The Big Apple,Talkies
ROARING 20S,Crime,Mob,Gangs,Bootlegging,Al Capone,Bugs Moran,Valentines Day,Massacre,Rum Runner,Smuggler,Police
ROARING 20S,Innovations,Radio,Cars,Planes,Washing Machine,Fridge,Toaster,Movies Sound,Assembly Line,Skyscraper,Penicillin
ROARING 20S,Places,Harlem,Chicago,New York,Paris,Broadway,Wall Street,Speak easy,Jazz Club,Cinema,Hollywood
CRIMINALS,Famous,Al Capone,Jesse James,Bonnie Clyde,Dillinger,Billy Kid,Jack Ripper,Manson,Gotti,Blackbeard,Kidd
CRIMINALS,Crimes,Theft,Fraud,Murder,Arson,Robbery,Assault,Smuggle,Bootleg,Heist,Kidnap,Bribery
CRIMINALS,Punishment,Jail,Prison,Fine,Parole,Probation,Death Row,Electric,Lethal,Rehab,Community
CRIMINALS,Law,Police,FBI,CIA,Lawyer,Judge,Jury,Court,Crime Scene,Evidence,Forensics,SWAT
CRIMINALS,Places,Alcatraz,Sing Sing,Guantanamo,Jail,Cell Block,Lock Up,The Pen,Parade,Police Line,Crime Scene
CRIMINALS,Terms,Mob,Gang,Hustle,Swindle,Rap Sheet,Mug Shot,Get Away,Perp,Felony,Misdemeanor,Bail
CRIMINALS,Fiction,Godfather,Sopranos,Scarface,Goodfellas,Heat,Ocean's 11,Bonnie Clyde,Jesse James,The Town,Public Enemy
WALMART,Stores,Supercenter,Express,Neighborhood,Sam's Club,Online,Marketplace,Pick Up,Delivery,Global,Local
WALMART,Products,Groceries,Clothes,Tech,Home Goods,Toys,Garden,Pharmacy,Optical,Tires,Photo
WALMART,Business,Every Day,Low Price,Rollback,Sam Walton,Headquarters,Bentonville,Logistics,Supply Chain,Global,Stock
WALMART,Careers,Associate,Manager,Cashier,Stocker,Truck Driver,Tech Team,Online Team,HR,Team Lead,CEO,Board
WALMART,Services,Pharmacy,Auto Care,Money Center,Credit Card,Insurance,Photo Center,Cell Phones,Optical,Health Clinic
WALMART,Terms,Black Friday,Layaway,Clearance,Deals,Check Out,Aisle,Cart,Bag,Receipt,Return,Sale
WALMART,Impact,Big Box,Small Biz,Jobs,Economy,Global Reach,Low Wages,Benefits,Tech Focus,Ecom,Future
WORKING OUT,Type,Cardio,Strength,Flex,Yoga,Pilates,HIIT,Running,Cycle,Swim,Walk,Dance
WORKING OUT,Gear,Shoes,Clothes,Weights,Mat,Treadmill,Bike,Rower,Bench,Strap,Bottle,Towel
WORKING OUT,Gyms,LA Fitness,Planet Fit,Anytime,Crunch,YMCA,24 Hour,Gold's,CrossFit,Orange,Pure Barre
WORKING OUT,Health,Fitness,Diet,Water,Sleep,Protein,Carbs,Fats,Muscles,Heart,Cardio,Energy
WORKING OUT,Terms,Sets,Reps,Circuit,Warm Up,Cool Down,Rest Day,Core,Ripped,Shredded,Pumps,Gains
WORKING OUT,Goals,Lose Weight,Build Mass,Tone Up,Endurance,Strength,Health,Energy,Stress Relief,Sleep Better,Feel Good
WORKING OUT,Food,Protein,Shake,Meal Prep,Veggie,Fruit,Lean Meat,Oatmeal,Nuts,Water,Hydrate,Fuel
FOUNDING FATHERS,People,Wash,Adams,Jefferson,Franklin,Madison,Hamilton,Paine,Henry,Hancock,Monroe
FOUNDING FATHERS,Documents,Consti,Bill Rights,Dec of Ind,Articles Confed,Fed Papers,Common Sense,Treaties,Statutes,Laws,Acts
FOUNDING FATHERS,History,Revolution,War,Treaty Paris,Yorktown,Boston Tea,Lexington,Concord,Philly,1776,1787
FOUNDING FATHERS,Roles,President,VP,Congress,SCTOUS,Diplomat,General,Writer,Farmer,Slave Owner,Lawyer
FOUNDING FATHERS,Places,Philly,Boston,DC,Virginia,Mount Vernon,Monticello,Faneuil,Indep Hall,Valley Forge,NYC
FOUNDING FATHERS,Terms,Freedom,Liberty,Treason,Taxes,Colony,King George,Britain,Republic,Democracy,Sovereign
FOUNDING FATHERS,Legacy,Consti,Bill Rights,SCOTUS,US Mint,Fed Reserve,White House,Capitol,Two Terms,Farewell,Electoral
VIDEO GAMES,Iconic Heroes,Mario,Link,Master Chief,Lara Croft,Sonic,Kratos,Samus,Cloud,Pikachu,Pac-Man
VIDEO GAMES,Consoles,Switch,PS5,Xbox Series,PC,Wii,Genesis,NES,Game Boy,Dreamcast,Atari
VIDEO GAMES,Genres,Platformer,RPG,FPS,Strategy,Sandbox,Horror,Racing,Sports,Fighting,Stealth
VIDEO GAMES,Terminology,Level Up,XP,Boss Fight,NPC,Loot,Buff,Nerf,Glitches,Speedrun,Avatar
VIDEO GAMES,Studios,Nintendo,Sega,Sony,Capcom,Ubisoft,EA,Rockstar,Valve,Epic,Square Enix
VIDEO GAMES,Mobile Hits,Candy Crush,Angry Birds,Pokemon Go,Roblox,Among Us,PUBG,Clash,Temple Run,Flappy,Fruit Ninja
VIDEO GAMES,Retro Gems,Tetris,Pong,Donkey Kong,Galaga,Asteroids,Centipede,Frogger,Dig Dug,Qbert,Pitfall
GARDENING,Flower Types,Rose,Tulip,Daisy,Lily,Peony,Orchid,Sun,Iris,Poppy,Violet
GARDENING,Tools,Shovel,Rake,Hoe,Trowel,Pruner,Shears,Hose,Gloves,Mower,Wheelbarrow
GARDENING,Vegetables,Tomato,Pepper,Carrot,Corn,Onion,Lettuce,Peas,Beans,Squash,Potato
GARDENING,Techniques,Pruning,Mulching,Compost,Watering,Weeding,Tilling,Harvest,Seeding,Graft,Thinning
GARDENING,Pests,Aphids,Slugs,Snails,Beetles,Mites,Locusts,Ants,Grubs,Worms,Caterpillar
GARDENING,Herbs,Basil,Mint,Thyme,Sage,Dill,Parsley,Chives,Cilantro,Rosemary,Oregano
GARDENING,Soil/Health,Dirt,Fertilizer,Nitrogen,Phosphate,Potash,pH Level,Aeration,Organic,Drainage,Loam
ICE CREAM,Flavor Basics,Vanilla,Chocolate,Berry,Mint,Coffee,Caramel,Swirl,Cherry,Lemon,Peach
ICE CREAM,Popular Mixes,Cookie Dough,Rocky Road,Neapolitan,Pecan,Heath,Fudge,Toffee,Marshmallow,Mango,Coconut
ICE CREAM,Toppings,Sprinkles,Nuts,Whipped,Syrup,Cherries,Candy,Gummy,Cookie,Brownie,Honey
ICE CREAM,Serving Styles,Sugar Cone,Waffle Cone,Cake Cone,Bowl,Sundae,Split,Shake,Float,Malt,Sandwich
ICE CREAM,Global Treats,Gelato,Sorbet,Mochi,Sherbet,Kulfi,Dondurma,Soft Serve,Rolled,Granita,Shaved
ICE CREAM,Brands,Ben Jerry,Haagen-Dazs,Baskin,Dairy Queen,Breyers,Blue Bell,Halo Top,Magnum,Talenti,Dreyer
ICE CREAM,Equipment,Churn,Scoop,Freezer,Bowl,Truck,Spade,Mixer,Pint,Quart,Cooler
ANCIENT ROME,Rulers,Caesar,Augustus,Nero,Trajan,Hadrian,Marcus,Caligula,Tiberius,Constantine,Titus
ANCIENT ROME,Buildings,Colosseum,Pantheon,Forum,Aqueduct,Baths,Villas,Circus,Arches,Palace,Wall
ANCIENT ROME,Daily Life,Toga,Sandals,Wine,Bread,Olives,Chariot,Gladiator,Senator,Slave,Citizen
ANCIENT ROME,Mythology,Jupiter,Mars,Venus,Apollo,Diana,Minerva,Neptune,Pluto,Mercury,Juno
ANCIENT ROME,Military,Legion,Centurion,Shield,Sword,Spear,Helmet,Fort,General,Camp,Standard
ANCIENT ROME,Cities/Places,Rome,Pompeii,Ostia,Carthage,London,Paris,Alexandria,Athens,Naples,Sicily
ANCIENT ROME,Terms,Empire,Republic,Senate,Veto,Latin,Forum,Pax,Plebeian,Patrician,Tribal
CASTLES,Rooms,Great Hall,Keep,Dungeon,Kitchen,Chamber,Chapel,Solar,Garderobe,Cellar,Armory
CASTLES,Defense,Moat,Drawbridge,Turret,Gatehouse,Wall,Arrow slit,Portcullis,Bailey,Crenel,Moat
CASTLES,Staff,King,Queen,Knight,Lord,Lady,Cook,Squire,Guard,Blacksmith,Stable Boy
CASTLES,Famous UK,Windsor,Tower London,Warwick,Edinburgh,Stirling,Leeds,Bodiam,Dover,Conwy,Caernarfon
CASTLES,Famous Euro,Neuschwan,Chillon,Bran,Chenonceau,Hohenwerfen,Vianden,Alcazar,Eltz,Spis,Peles
CASTLES,Knight Gear,Armor,Shield,Sword,Mace,Lance,Helmet,Gauntlet,Chainmail,Cloak,Spurs
CASTLES,Activities,Feast,Joust,Hunt,Banquets,Music,Dance,Training,Defense,Archery,Falconry
COOKING,Kitchen Tools,Knife,Pan,Pot,Whisk,Spatula,Grater,Peeler,Sieve,Timer,Scale
COOKING,Methods,Bake,Broil,Fry,Steam,Sauté,Poach,Grill,Roast,Boil,Braise
COOKING,Flavoring,Salt,Pepper,Garlic,Onion,Sugar,Vinegar,Oil,Honey,Ginger,Lemon
COOKING,Basic Skills,Chop,Dice,Mince,Fold,Whisk,Knead,Season,Simmer,Garnish,Taste
COOKING,Grains/Sides,Rice,Pasta,Potato,Bread,Quinoa,Couscous,Corn,Oats,Barley,Polenta
COOKING,Global Styles,Curry,Stir Fry,Taco,Pasta,Sushi,Kebab,Burger,Soup,Salad,Pastry
COOKING,Appliances,Oven,Stove,Mixer,Toaster,Blender,Air Fryer,Crock Pot,Fridge,Griddle,Microwave
CAMPING,Essentials,Tent,Bag,Stove,Pack,Light,Knife,First Aid,Water,Map,Compass
CAMPING,Activities,Hiking,Fishing,Boating,Cooking,Swimming,Stargazing,Birding,Stories,Photos,Climbing
CAMPING,Nature Finds,Trees,Rocks,Rivers,Lakes,Caves,Wildlife,Flowers,Moss,Peaks,Trails
CAMPING,Food,S-mores,Hot Dogs,Eggs,Coffee,Beans,Stew,Jerky,Trail Mix,Fish,Potatoes
CAMPING,Shelter,Tent,RV,Cabin,Hammock,Tarp,Van,Bunker,Lean-to,Trailer,Yurt
CAMPING,Safety,Fire,Weather,Bears,Insects,First Aid,Light,Signal,Whistle,Heat,Boots
CAMPING,Terms,Campsite,Backpack,Wilderness,Outdoors,Trek,Summit,Base,Route,Gear,Permit
THE OCEAN,Zones,Surface,Sunlight,Twilight,Midnight,Abyss,Trench,Benthic,Pelagic,Shelf,Floor
THE OCEAN,Big Fish,Shark,Tuna,Marlin,Swordfish,Manta Ray,Grouper,Salmon,Cod,Snapper,Bass
THE OCEAN,Mammals,Whale,Dolphin,Seal,Walrus,Sea Lion,Otter,Manatee,Orca,Narwhal,Porpoise
THE OCEAN,Small Life,Shrimp,Crab,Krill,Plankton,Seahorse,Clam,Oyster,Snail,Urchin,Starfish
THE OCEAN,Environment,Reef,Kelp Forest,Island,Iceberg,Current,Tide,Waves,Salt,Deep,Vent
THE OCEAN,Vessels,Ship,Boat,Submarine,Yacht,Canoe,Raft,Tanker,Cutter,Sloop,Frigate
THE OCEAN,Terms,Anchor,Drift,Float,Sink,Dive,Swim,Sail,Naval,Port,Marine
COMIC BOOKS,DC Heroes,Batman,Superman,Wonder Woman,Flash,GL,Cyborg,Aquaman,Robin,Nightwing,Shazam
COMIC BOOKS,DC Villains,Joker,Lex,Cheetah,Reverse,Sinestro,Zod,Bane,Penguin,Riddler,Brainiac
COMIC BOOKS,Terms,Panels,Bubbles,Inks,Script,Issues,Volumes,Variant,Cover,Splash,Crossover
COMIC BOOKS,Indie Gems,Saga,Spawn,Hellboy,Invincible,Walking Dead,Sandman,Preacher,Boys,Bone,Mask
COMIC BOOKS,Creators,Stan Lee,Jack Kirby,Steve Ditko,Bob Kane,Bill Finger,Alan Moore,Frank Miller,Gaiman,Lee,Sim
COMIC BOOKS,Powers,Strength,Flight,Speed,Invis,Healing,Tech,Telepathy,Laser,Ice,Fire
COMIC BOOKS,Events,Conventions,SDCC,NYCC,Free Comic,Cosplay,Panel,Signings,Merch,Cosplay,Trade
CATS,Domestic,Tabby,Calico,Tuxedo,Ginger,Black,White,Grey,Tortie,Pointed,Siamese
CATS,Breeds,Persian,Maine Coon,Bengal,Sphynx,Ragdoll,Burmese,Russian,Abyssinian,Munchkin,Korat
CATS,Wild Cousins,Lion,Tiger,Leopard,Jaguar,Cougar,Lynx,Bobcat,Cheetah,Serval,Caracal
CATS,Anatomy,Whiskers,Tail,Paws,Claws,Ears,Teeth,Fur,Eyes,Tongue,Nose
CATS,Behavior,Purr,Meow,Hiss,Prowl,Sleep,Hunt,Jump,Knead,Nap,Groom
CATS,Care,Food,Water,Litter,Toys,Vet,Brush,Pet,Play,Scratch,Bed
CATS,Sounds,Meow,Purr,Hiss,Growl,Chirp,Yowl,Trill,Snarl,Spit,Silence
VOLCANOES,Types,Shield,Cinder,Strato,Dome,Caldera,Active,Dormant,Extinct,Fissure,Vent
VOLCANOES,Materials,Lava,Magma,Ash,Pumice,Obsidian,Steam,Gases,Dust,Rocks,Scoria
VOLCANOES,Famous,Etna,Vesuvius,Fuji,Kilauea,St Helens,Pinatubo,Krakatoa,Mauna Loa,Popo,Erebus
VOLCANOES,Locations,Hawaii,Iceland,Japan,Italy,Mexico,Alaska,Chile,Java,Congo,Antarctica
VOLCANOES,Hazards,Heat,Ash fall,Flows,Gases,Quakes,Tsunami,Mudslides,Smoke,Noise,Pressure
VOLCANOES,Benefits,Soil,Heat,Tourism,Rocks,Gems,Islands,Energy,Science,Views,History
VOLCANOES,Parts,Crater,Magma Chamber,Vent,Conduit,Ash Cloud,Slope,Base,Peak,Crust,Mantle
THE WEATHER,Events,Rain,Snow,Sleet,Hail,Fog,Mist,Wind,Sun,Clouds,Storm
THE WEATHER,Storms,Tornado,Hurricane,Cyclone,Blizzard,Monsoon,Typhoon,Thunder,Light,Gale,Dust
THE WEATHER,Cloud Types,Cirrus,Cumulus,Stratus,Nimbus,Fog,High Cloud,Low Cloud,Puffy,Dark,Flat
THE WEATHER,Tools,Radar,Gauge,Vane,Glass,Satellite,Map,Station,Computer,Balloon,Sonde
THE WEATHER,Climate,Tropical,Desert,Tundra,Arctic,Humid,Dry,Cold,Hot,Moderate,Marine
THE WEATHER,Terms,Front,Pressure,Humidity,Degree,Forecast,Update,Watch,Warning,Crisis,Trend
THE WEATHER,Forces,Gravity,Heat,Wind,Water,Air,Sun,Moon,Earth,Rotation,Pressure
DESSERTS,Cakes,Sheet,Bundt,Layer,Cupcake,Sponge,Pound,Velvet,Choco,Angel,Fruit
DESSERTS,Pastries,Danish,Donut,Croissant,Tart,Cannoli,Eclair,Scone,Turnover,Strudel,Brioche
DESSERTS,Cookies,Sugar,Choco Chip,Oatmeal,Peanut,Snaps,Macaron,Wafer,Shortbread,Shorty,Fortune
DESSERTS,Pies,Apple,Cherry,Berry,Peach,Pecan,Pumpkin,Cream,Key Lime,Meringue,Crust
DESSERTS,Cold,Ice Cream,Sorbet,Gelato,Frozen,Mochi,Popsicle,Sundae,Split,Float,Malt
DESSERTS,Candy,Fudge,Toffee,Taffy,Brittle,Caramel,Gummy,Sour,Hard,Bar,Mint
DESSERTS,Styles,Bake,Fry,Freeze,Layer,Fill,Glaze,Frost,Dip,Whip,Cook
SHIPS/BOATS,Power,Sail,Motor,Steam,Paddle,Oar,Wind,Solar,Diesel,Gas
SHIPS/BOATS,Sailing,Mast,Sail,Hull,Deck,Helm,Keel,Bow,Stern,Port,Star
SHIPS/BOATS,Military,Carrier,Destroyer,Frigate,Submarine,Cruiser,Patrol,Battleship,Tender,Supply,Craft
SHIPS/BOATS,Pleasure,Yacht,Cruise,Speed,Jet Ski,House,Canoe,Kayak,Dinghy,Pontoon,Row
SHIPS/BOATS,Trade,Tanker,Cargo,Barge,Tug,Ferry,Whaler,Trawler,Liner,Freighter,Dry
SHIPS/BOATS,History,Galleon,Trireme,Viking,Canoe,Raft,Dhow,Junk,Clipper,Titanic,Mayflower
SHIPS/BOATS,Terms,Knot,Draft,Wake,Anchor,Dock,Pier,Chart,Buoy,Nautical,Marine
ANCIENT GREECE,People,Socrates,Plato,Aristotle,Alexander,Homer,Pericles,Leonidas,Solon,Sappho,Euclid
ANCIENT GREECE,Mythology,Zeus,Hera,Poseidon,Hades,Athena,Ares,Hermes,Artemis,Apollo,Hephaestus
ANCIENT GREECE,Buildings,Parthenon,Temple,Theatre,Stoa,Agora,Stadium,Gymnasium,House,Gate,Wall
ANCIENT GREECE,Concepts,Democracy,Philosophy,Drama,Olympics,Logic,Science,Art,History,Gym,Music
ANCIENT GREECE,Military,Hoplite,Phalanx,Shield,Spear,Sword,Helmet,Trireme,Siege,War,Peace
ANCIENT GREECE,Places,Athens,Sparta,Delphi,Olympia,Corinth,Thebes,Crete,Rhodes,Macedon,Ionia
ANCIENT GREECE,Daily Life,Chiton,Sandals,Wine,Bread,Figs,Olives,Cheese,Family,School,Market
ARCHEOLOGY,Tools,Brush,Pick,Shovel,Sieve,Trowel,Camera,Drone,GPS,Map,Grid,Compass
ARCHEOLOGY,Finds,Pottery,Coins,Bones,Tools,Jewels,Statues,Tombs,Ruins,Artifact,Mask
ARCHEOLOGY,Sites,Giza,Pompeii,Petra,Knossos,Troy,Stonehenge,Tikal,Palmyra,Luxor,Ur
ARCHEOLOGY,Methods,Digging,Survey,Lab Work,Dating,Mapping,Carbon,Sorting,Cleaning,Writing
ARCHEOLOGY,Periods,Stone Age,Bronze Age,Iron Age,Mayan,Inca,Aztec,Greek,Roman,Dynasty
ARCHEOLOGY,Science,DNA,Isotope,Radiocarbon,CT Scan,Lidar,Botany,Geology,History,Curation
ARCHEOLOGY,Risks,Looting,Erosion,War,Weather,Floods,Vandalism,Mold,Time,Neglect
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
DENTISTRY,Tools,Drill,Mirror,Explorer,Forceps,Scaler,Syringe,Laser,X-ray,Brush,Floss
DENTISTRY,Teeth,Incisor,Canine,Molar,Wisdom,Bicuspid,Enamel,Dentin,Pulp,Root,Gum
DENTISTRY,Cleaning,Paste,Floss,Rinse,Polish,Scale,Fluoride,Sealant,Scrub,Wash,Whiten
DENTISTRY,Jobs,Dentist,Surgeon,Hygienist,Assistant,Admin,Lab Tech,Clerk,Billing,Manager
DENTISTRY,Procedures,Filling,Crown,Bridge,Implant,Braces,Extraction,Veneer,Canal,Bonding
DENTISTRY,Care,Daily,Brushing,Flossing,Diet,Check up,Healthy,White,Strong,Pain,Repair
DENTISTRY,Terms,Cavity,Plaque,Tartar,Decay,Ortho,Endo,Perio,Oral,Health,Smile
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
GOLF,Clubs,Driver,Putter,Wedge,Iron,Wood,Hybrid,Sand,Lob,Graphite,Steel
GOLF,Course,Tee,Fairway,Green,Bunker,Rough,Hazard,Water,Hole,Flag,Cart
GOLF,Scoring,Par,Birdie,Eagle,Bogey,Double,Albatross,Ace,Handicap,Stroke,Match
GOLF,Tour,PGA,LIV,Masters,Open,US Open,Ryder Cup,LPGA,Senior,Euro,Tourney
GOLF,Legends,Woods,Nicklaus,Palmer,Hogan,Jones,Snead,Sorenstam,Mickelson,Els,McIlroy
GOLF,Gear,Balls,Tees,Glove,Bag,Shoes,Range,Laser,Watch,Cart,Towels
GOLF,Terms,Drive,Putt,Swing,Slice,Hook,Fade,Draw,Divot,Caddie,Backspin
HOCKEY,Positions,Center,Wing,Defense,Goalie,Captain,Rookie,Referee,Linesman,Coach,Backup
HOCKEY,Gear,Skates,Stick,Puck,Helmet,Gloves,Pads,Jersey,Mask,Tape,Whistle
HOCKEY,Rink,Ice,Goal,Net,Crease,Blue Line,Red Line,Boards,Glass,Bench,Box
HOCKEY,NHL Teams,Kings,Bruins,Blackhawks,Rangers,Wings,Leafs,Canadiens,Knights,Oilers,Kraken
HOCKEY,Legends,Gretzky,Lemieux,Howe,Orr,Jagr,Roy,Crosby,Ovechkin,Hull,Esposito
HOCKEY,Terms,Goal,Assist,Hat Trick,Power Play,Penalty,Offside,Icing,Slapshot,Save,Shutout
HOCKEY,Events,Stanley Cup,All Star,Olympics,Worlds,Draft,Winter,Outdoor,Series,Finals
ISLANDS,Tropical,Hawaii,Bali,Fiji,Tahiti,Aruba,Jamaica,Maldives,Bora Bora,Maui,Kauai
ISLANDS,History,Alcatraz,Ellis,Crete,Sicily,Cyprus,Malta,Corsica,Guam,Iwo Jima,Midway
ISLANDS,Large,Greenland,New Guinea,Borneo,Madagascar,Baffin,Sumatra,Honshu,Victoria,Great Brit
ISLANDS,Nature,Reef,Beach,Volcano,Jungle,Cliffs,Palm,Cove,Lagoon,Coral,Sand
ISLANDS,Nations,Japan,UK,ICELAND,CUBA,NZ,TAIWAN,IRELAND,HAITI,DR,PHILIPPINES
ISLANDS,Activities,Swim,Dive,Surf,Sail,Hike,Relax,Boat,Fish,Photos,Sunset
ISLANDS,Terms,Atoll,Archipelago,Coast,Shore,Dock,Port,Ferry,Mainland,Isle,Cay
NATIONAL PARKS,US West,Yosemite,Yellowstone,Zion,Grand Canyon,Glacier,Olympic,Arches,Joshua Tree,Rainier
NATIONAL PARKS,US East,Smokies,Acadia,Everglades,Shenandoah,Congaree,Cuyahoga,Biscayne,Voyageurs
NATIONAL PARKS,Animals,Bears,Bison,Moose,Wolves,Elk,Eagles,Deer,Coyotes,Cougars,Sheep
NATIONAL PARKS,Features,Peaks,Valleys,Rivers,Lakes,Caves,Geysers,Arches,Cliffs,Forests,Dunes
NATIONAL PARKS,Work,Ranger,Guide,Admin,Cleaner,Scientist,Builder,Safety,Officer,Volunteer
NATIONAL PARKS,Rules,No Litter,Stay on Path,No Fire,Safe Distance,Permits,Fees,Pets,Camp,Hunt
NATIONAL PARKS,Activities,Hike,Camp,Fish,Boating,Photos,Tours,Study,Walk,Climb,Relax
RAILROADS,Types,Freight,Passenger,High Speed,Steam,Diesel,Electric,Maglev,Metro,Subway,Tram
RAILROADS,Parts,Track,Engine,Caboose,Boxcar,Tanker,Flatcar,Coupler,Switch,Signal,Tie
RAILROADS,Jobs,Engineer,Conductor,Brakeman,Dispatcher,Porter,Station,Staff,Admin,Tech
RAILROADS,History,Transcon,1869,Promontory,Steam Age,Golden Age,Diesel era,Amtrak,Pullman,UP,CP
RAILROADS,Companies,BNSF,Union Pacific,CSX,Norfolk,Amtrak,VIA Rail,Eurostar,SNCF,JR East,CN
RAILROADS,Terms,Gauge,Ballast,Grade,Bridge,Tunnel,Crossing,Schedule,Route,Depot,Platform
RAILROADS,Travel,Commute,Tour,Sleep,Dine,View,Lounge,Express,Local,Transit,Boarding
THE CIRCUS,Acts,Clowns,Acrobats,Jugglers,Trapeze,Strongman,Contortion,Magic,Fire,Lion,Horse
THE CIRCUS,Tents,Big Top,Side Show,Ring,Curtain,Seats,Lights,Flags,Mast,Canvas,Ropes
THE CIRCUS,Food,Popcorn,Cotton Candy,Hot Dogs,Peanuts,Soda,Pretzels,Candy,Corn,Nachos
THE CIRCUS,History,Barnum,Bailey,Ringling,Cirque,Europe,Traveling,Golden Age,Posters,Train
THE CIRCUS,Terms,Ringmaster,Showman,Director,Troupes,Practice,Skill,Art,Talent,Performance
THE CIRCUS,Music,Band,Calliope,Drums,Trumpet,March,Snare,Loud,Cheerful,Bright,Themely
THE CIRCUS,Jobs,Director,Artist,Worker,Driver,Sales,Admin,Costume,Props,Lighting,Sound
NINTENDO,Consoles,Switch,Wii,NES,SNES,N64,GameCube,Game Boy,DS,3DS,Virtual Boy
NINTENDO,Characters,Mario,Luigi,Link,Zelda,Peach,Bowser,Yoshi,Donkey Kong,Kirby,Samus
NINTENDO,Franchises,Pokemon,Metroid,Star Fox,Pikmin,F-Zero,Splatoon,Animal Cross,Fire Emblem,Punch Out,Earthbound
NINTENDO,Items,Mushroom,Fire Flower,Star Man,Rupees,Master Sword,Pokeball,Banana,Red Shell,Ice Flower,Egg
NINTENDO,Locations,Mushroom,Hyrule,Kanto,Dream Land,Inkopolis,Pop Star,Corneria,Onett,Skyloft,Koholint
NINTENDO,History,Hanafuda,Cards,Yamauchi,Miyamoto,Iwata,Game Watch,Kyoto,Robotic Buddy,Arcades,Seal Quality
NINTENDO,Future 2026,Switch 2,New Zelda,Mario Film 2,Theme Park,Mobile Apps,Direct Shows,New IP,Tech Update,VR Play,Online Plus
DISNEY,Princesses,Snow White,Cinderella,Aurora,Ariel,Belle,Jasmine,Pocahontas,Mulan,Tiana,Rapunzel
DISNEY,Characters,Mickey,Minnie,Donald,Goofy,Pluto,Daisy,Stitch,Simba,Olaf,Bambi
DISNEY,Parks,Disneyland,World,Tokyo,Paris,Hong Kong,Shanghai,Epcot,Magic Kingdom,Animal,Studios
DISNEY,Eras,Golden Age,Silver Age,Renaissance,Dark Age,Revival,Modern,Live Action,Shorts,Silents,TV Animation
DISNEY,Villains,Maleficent,Ursula,Jafar,Scar,Gaston,Hades,Cruella,Hook,Queen,Frollo
DISNEY,Songs,Let It Go,Circle Life,Whole World,Wish on Star,Be Our Guest,Under Sea,Colors Wind,Part World,Friend Me,Try Every
DISNEY,Acquisitions,Pixar,Marvel,Star Wars,Fox,Hulu,ESPN,National Geo,ABC,Muppets,Avatar
HELLO KITTY,Sanrio Friends,My Melody,Kuromi,Pompompurin,Cinnamoroll,Keroppi,Badtz-Maru,Chococat,Little Twins,Pochacco,Tuxedo Sam
HELLO KITTY,Facts,London,Third Grade,Apples,Twin Sister,Mimmy,No Mouth,Not a Cat,Girl,White Coat,Red Bow
HELLO KITTY,Products,Stationery,Plush,Bags,Jewelry,Clothing,Cafes,Toasters,Planes,Stickers,Wallets
HELLO KITTY,Family,George,Mary,Mimmy,Anthony,Margaret,Grandpa,Grandma,Pets,Charmmy,Sugar
HELLO KITTY,Media,Animation,Movies,Games,YouTube,Social,Comics,Albums,TV Shows,Collabs,Webtoons
HELLO KITTY,Design,Red,White,Blue,Yellow,Outline,Classic,Pop Art,Pastel,Kawaii,Cute
HELLO KITTY,Future 2026,New Film,Metaverse,AI Friend,Global Tour,Tech Wear,New Cafe,Eco Merch,Web Series,Live Show,Art Fest
ANIME,Genres,Shonen,Shojo,Seinen,Josei,Isekai,Mecha,Horror,Slice Life,Comedy,Sports
ANIME,Famous Shows,Dragon Ball,One Piece,Naruto,Bleach,Attack Titan,My Hero,Demon Slayer,Spy Family,Cowboy Bebop,Evangelion
ANIME,Movies,Spirited,Your Name,Akira,Ghost Shell,Ponyo,Mononoke,Totoro,Paprika,Suzume,Perfect Blue
ANIME,Terms,Manga,Otaku,Kawaii,Subs,Dubs,Filler,Arc,Season,Waifu,Senpai
ANIME,Studios,Ghibli,MAPPA,Ufotable,Madhouse,Bones,Toei,Pierrot,Trigger,Sunrise,Wit
ANIME,Tropes,Power Up,Tournament,School Life,Magic Girl,Robot suit,Flashback,Antagonist,Training,Food,Friendship
ANIME,2026 Trends,AI Art,Streaming,Live Action,Global Subs,Web Movies,CGI Mix,Remakes,Simulcast,Cons,Merch
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
CIVIL WAR,People,Lincoln,Grant,Lee,Sherman,Jackson,Davis,Douglas,Barton,Tubman,Booth
CIVIL WAR,Battles,Gettysburg,Antietam,Bull Run,Shiloh,Vicksburg,Sumter,Frederic,Cold Harbor,Wilderness,Atlanta
CIVIL WAR,States,Union,Confed,Virginia,PA,NY,Georgia,SC,NC,Kentucky,Maryland
CIVIL WAR,Tech,Musket,Cannon,Ironclad,Telegraph,Railroad,Balloons,Minie Ball,Rifle,Cavalry,Trench
CIVIL WAR,Terms,Draft,Rebel,Yankee,Blue,Gray,Dixie,Front,Siege,Cavalry,Infantry
CIVIL WAR,Causes,Slavery,States Rights,Tariffs,Election,Expansion,Sectional,Industry,Cotton,Lincoln,Union
CIVIL WAR,Legacy,Recon,13th Amend,14th Amend,15th Amend,Jim Crow,Monuments,History,Unity,Veterans,Graves
OLYMPICS,Sports Summer,Swim,Run,Gym,Basket,Soccer,Volley,Cycle,Tennis,Golf,Surf
OLYMPICS,Sports Winter,Ski,Board,Hockey,Skate,Bobsled,Curling,Luge,Jump,Mogul,Alpine
OLYMPICS,History,Ancient,Modern,Athens,Baron,Five Rings,Torch,Flame,Paralympics,Boycott,Peace
OLYMPICS,Cities 2026-2034,Milan,Cortina,Paris,LA,Brisbane,Salt Lake,Host City,Future,Games
OLYMPICS,Terms,Gold,Silver,Bronze,Medal,Podium,Spirit,Motto,Host,Village,Athlete
OLYMPICS,Scandals,Doping,Cheating,Bribes,Boycott,Politics,Rigging,Judging,Crisis,Scandal
OLYMPICS,Icons,Phelps,Bolt,Ledecky,Biles,Owens,Gretzky,Torres,Lewis,Federer,Williams
NORTH KOREA,Regime,Kim Jong Un,Kim Jong Il,Kim Il Sung,Dictator,Dynasty,Hermit,Communist,Control,Propaganda,Totalitarian
NORTH KOREA,Life,Juche,Military,Famine,Food Short,Propaganda,Work Camps,No Info,Isolation,Secret,Fear
NORTH KOREA,Places,Pyongyang,DMZ,Border,Gulags,Nuclear,Missiles,Remote,Mountains,Rivers,Coast
NORTH KOREA,Nuclear,Missiles,Tests,Weapons,Threat,Sanctions,Bomb,Warheads,ICBM,Submarine,Silo
NORTH KOREA,Military,Army,Navy,Air Force,Huge Force,Draft,Propaganda,Parade,DMZ,Arms,Power
NORTH KOREA,Relations,USA,SKorea,China,Russia,Japan,UN,Sanctions,Diplomacy,Tensions,Talks
NORTH KOREA,Terms,DMZ,Juche,KWP,Dear Leader,Great Leader,Worker's,Missile,Nuclear,Hate,Isolation
9/11,Events,Twin Towers,Pentagon,Flight 93,Hijack,Terror,Attack,Impact,Fire,Collapse,Rescue
9/11,People,Victims,Firefighter,Police,First Resp,Bush,Bin Laden,Al Qaeda,Hero,Survivor,Families
9/11,Impact,War,Iraq,Afghani,Patriot Act,TSA,Security,Change,Fear,Unity,History
9/11,Places,Ground Zero,NYC,Pentagon,Shanks,Memorial,Museum,Freedom Tower,Rebuild,Site,Hole
9/11,Terms,Attack,Terror,Hijack,Crash,Collapse,Rubble,Dust,Smoke,Freedom,Patriot
9/11,Aftermath,Memorial,Museum,New Laws,TSA,War,Hunt Bin Laden,Legacy,History,Remember,Unity
9/11,Future 2026,25 Year Mem,New Films,Books,Docs,Study,History,Legacy,Future,Learn
SOUTH PARK,Characters,Cartman,Stan,Kyle,Kenny,Butters,Chef,Mr Garrison,Randy,Wendy,Towelie
SOUTH PARK,Places,South Park,Colorado,School,Town,Restaurant,Hospital,Farm,Store,Mall,The Park
SOUTH PARK,Terms,Screw You,Awesome,Bleep,Censored,Episode,Season,Comedy,Adult,Satire,Funny
SOUTH PARK,Themes,Politics,Social,Culture,News,Current,Events,Satire,Comedy,Adult,Crude
SOUTH PARK,Media,TV Show,Movies,Games,Cards,Books,Music,Live Show,Online,Streaming,Comedy
SOUTH PARK,Creators,Trey Parker,Matt Stone,Dubs,Voices,Write,Direct,Produce,Music,Genius,Icon
SOUTH PARK,Future 2026,New Season,More Movies,More Fun,More Satire,More News,More Laughs,More Crude
SIMPSONS,Characters,Homer,Marge,Bart,Lisa,Maggie,Flanders,Burns,Moe,Krusty,Principal
SIMPSONS,Places,Springfield,Tavern,Kwik-E-Mart,Power Plant,School,Church,Home,Donut,Couch,Car
SIMPSONS,Terms,Doh,Woo Hoo,Ay Caramba,Yellow,Funny,Long Run,Episode,Season,Comedy,Satire
SIMPSONS,Themes,Family,TV,Culture,Work,Life,Kids,Adult,Sitcom,Funny,History
SIMPSONS,Media,TV Show,Movies,Games,Cards,Books,Music,Online,Streaming,Comics,Merch
SIMPSONS,Creators,Matt Groening,Brooks,James L,Voices,Write,Direct,Produce,Art,Genius,Icon
SIMPSONS,Future 2026,New Season,More Fun,More Satire,More News,More Laughs,More Yellow,Record,Legacy
OCEAN,Zones,Surface,Sunlight,Twilight,Midnight,Abyss,Trench,Benthic,Pelagic,Shelf,Floor
OCEAN,Big Fish,Shark,Tuna,Marlin,Swordfish,Manta Ray,Grouper,Salmon,Cod,Snapper,Bass
OCEAN,Mammals,Whale,Dolphin,Seal,Walrus,Sea Lion,Otter,Manatee,Orca,Narwhal,Porpoise
OCEAN,Small Life,Shrimp,Crab,Krill,Plankton,Seahorse,Clam,Oyster,Snail,Urchin,Starfish
OCEAN,Environment,Reef,Kelp Forest,Island,Iceberg,Current,Tide,Waves,Salt,Deep,Vent
OCEAN,Vessels,Ship,Boat,Submarine,Yacht,Canoe,Raft,Tanker,Cutter,Sloop,Frigate
OCEAN,Terms,Anchor,Drift,Float,Sink,Dive,Swim,Sail,Naval,Port,Marine
THE WEATHER,Events,Rain,Snow,Sleet,Hail,Fog,Mist,Wind,Sun,Clouds,Storm
THE WEATHER,Storms,Tornado,Hurricane,Cyclone,Blizzard,Monsoon,Typhoon,Thunder,Light,Gale,Dust
THE WEATHER,Cloud Types,Cirrus,Cumulus,Stratus,Nimbus,Fog,High Cloud,Low Cloud,Puffy,Dark,Flat
THE WEATHER,Tools,Radar,Gauge,Vane,Glass,Satellite,Map,Station,Computer,Balloon,Sonde
THE WEATHER,Climate,Tropical,Desert,Tundra,Arctic,Humid,Dry,Cold,Hot,Moderate,Marine
THE WEATHER,Terms,Front,Pressure,Humidity,Degree,Forecast,Update,Watch,Warning,Crisis,Trend
THE WEATHER,Forces,Gravity,Heat,Wind,Water,Air,Sun,Moon,Earth,Rotation,Pressure
DESSERTS,Cakes,Sheet,Bundt,Layer,Cupcake,Sponge,Pound,Velvet,Choco,Angel,Fruit
DESSERTS,Pastries,Danish,Donut,Croissant,Tart,Cannoli,Eclair,Scone,Turnover,Strudel,Brioche
DESSERTS,Cookies,Sugar,Choco Chip,Oatmeal,Peanut,Snaps,Macaron,Wafer,Shortbread,Shorty,Fortune
DESSERTS,Pies,Apple,Cherry,Berry,Peach,Pecan,Pumpkin,Cream,Key Lime,Meringue,Crust
DESSERTS,Cold,Ice Cream,Sorbet,Gelato,Frozen,Mochi,Popsicle,Sundae,Split,Float,Malt
DESSERTS,Candy,Fudge,Toffee,Taffy,Brittle,Caramel,Gummy,Sour,Hard,Bar,Mint
DESSERTS,Styles,Bake,Fry,Freeze,Layer,Fill,Glaze,Frost,Dip,Whip,Cook
FOOTBALL,Teams NFL,Chiefs,49ers,Cowboys,Packers,Patriots,Steelers,Saints,Eagles,Bills,Dolphins
FOOTBALL,Legends,Brady,Montana,Manning,Rice,Sanders,Unitas,Payton,Blanda,Young,Favre
FOOTBALL,Terms,Touchdown,Field Goal,Sack,Fumble,Intercept,Tackle,Blitz,Offside,Penalty,Down
FOOTBALL,Positions,QB,RB,WR,TE,LT,RT,LG,RG,C,DT
FOOTBALL,Events,Super Bowl,Draft,Combine,Playoffs,Season,Preseason,Hall Fame,Pro Bowl,College,High School
FOOTBALL,College,NCAA,SEC,Big Ten,ACC,Pac 12,Rose Bowl,Nat Title,Draft,Heisman,Tradition
FOOTBALL,Future 2026,More Games,Global,AI Use,New Rules,Safety,Media,Streaming,New Tech,More Money
BOOKS,Classic Titles,Moby Dick,1984,Pride Prej,Ulysses,Hamlet,Great Gatsby,Catcher,Huck Finn,Grapes Wrath,Fahrenheit
BOOKS,Authors,Hemingway,Orwell,Austen,Joyce,Dickens,Steinbeck,Twain,Shakespeare,Faulkner,Fitzgerald
BOOKS,Genres,Fiction,Sci Fi,Horror,Poetry,Nonfiction,Memoir,History,Fantasy,Mystery,Novel
BOOKS,History,Gutenberg,Printing,Paper,Ink,Library,Scrolls,Bookstore,Ebook,Read,Write
BOOKS,Fantasy,Hobbit,Rings,Narnia,Dune,Wizard Oz,Dragon,Magic,Quest,Hero,Evil
BOOKS,Terms,Chapter,Plot,Setting,Character,Climax,Theme,Genre,Prose,Verse,Edition
BOOKS,Adaptations,Film,TV Show,Play,Musical,Audio,Comic,Game,Remake,Classic,Modern
ANIMATION,Studios,Disney,Pixar,Ghibli,Dreamworks,Warner Bros,Aardman,LAIKA,Sony,Blue Sky,Nickelodeon
ANIMATION,Techniques,CGI,Stop Motion,Hand Drawn,Cel,Claymation,Digital,Puppets,Motion Cap,2D,3D
ANIMATION,History,Silents,Talkies,Color,Golden Age,Anime,Digital Age,Future,Tech,Art,Global
ANIMATION,Movies,Lion King,Toy Story,Spirited,Shrek,Frozen,Zootopia,Minions,Finding Nemo,Up,Coco
ANIMATION,TV Shows,Simpsons,South Park,Family Guy,Bluey,Paw Patrol,Avatar,Teen Titans,SpongeBob,Rick Morty,Futurama
ANIMATION,Terms,Frames,Voice,Sound,Script,Director,Producer,Artist,Model,Rigging,Render
ANIMATION,Future 2026,AI Art,VR,Metaverse,New Films,More Shows,Global Reach,Streaming,Tech,Art
CARTOON CHRTRS,Classic,Bugs Bunny,Mickey Mouse,Daffy Duck,Scooby Doo,Popeye,Woody,Casper,Betty Boop,Fred F,George Jetson
CARTOON CHRTRS,Modern,SpongeBob,Homer,Stewie,Goku,Ash,Bluey,Chase,Rick,Morty,Eric Cartman
CARTOON CHRTRS,TV Icons,He-Man,G.I. Joe,TMNT,Smurfs,DuckTales,Voltron,Transformers,X-Men,Batman,Thundercats
CARTOON CHRTRS,Villains,Skeletor,Cobra Com,Shredder,Lex Luthor,Joker,Maleficent,Scar,Ursula,Jafar,Plankton
CARTOON CHRTRS,Sidekicks,Robin,Patric,Goofy,Pluto,Snagglepuss,Barney Rubble,Cheshire,Timon,Pumbaa,Meeko
CARTOON CHRTRS,Franchises,DC,Marvel,Disney,Looney Tunes,Hanna Barbera,Nick,Cartoon Net,Anime,Pixar,Sega
CARTOON CHRTRS,History,Silents,Black White,Color,TV Era,CGI,Internet,Anime,Global,Iconic,Legacy
TECH BREAKTHRU,Computers,Transistor,Circuit,Internet,PC,Laptop,Tablet,Phone,AI,Quantum,Neural Net
TECH BREAKTHRU,Medicine,Penicillin,Vaccines,X-rays,MRI,CT Scan,DNA,CRISPR,Stem Cell,Surgery,Laser
TECH BREAKTHRU,Space,Sputnik,Apollo,Hubble,ISS,Rover,Artemis,Falcon,Starship,Webb,Orion
TECH BREAKTHRU,Daily Life,Radio,TV,Phone,Fridge,Car,Plane,Light,AC,Microwave,Internet
TECH BREAKTHRU,Communication,Telegraph,Phone,Radio,TV,Email,Internet,Social,Video Call,AI Chat,Quantum
TECH BREAKTHRU,Communication,Telegraph,Phone,Radio,TV,Email,Internet,Social,Video Call,AI Chat,Quantum
TECH BREAKTHRU,Energy,Nuclear,Solar,Wind,Fusion,Battery,Hydrogen,Smart Grid,LED,Biofuel,Geothermal
TECH BREAKTHRU,Future 2026,AI Growth,Metaverse,VR/AR,EV Cars,Home Tech,Quantum,Robots,Bio Tech,Space Tour
ALIENS,Types,Gray,Reptilian,Nordic,Insectoid,Energy,Humanoid,Octopus,Blob,Robot,AI
ALIENS,Films,ET,Star Wars,Alien,Predator,Avatar,Close Enc,Men in Black,Mars Att,Area 51,Contact
ALIENS,Pop Culture,Roswell,Area 51,UFO,Abduction,Crop Circle,Greys,Gov Cover Up,Sci Fi,Fantasy,The X-Files
ALIENS,Science,Exoplanets,SETI,Bio signature,Goldilocks,Life Form,Habitable,Mars,Europa,Titan,Life
ALIENS,Terms,UFO,UAP,ET,Close Enc,Probe,Ship,Craft,Beam,Orbit,Galaxy
ALIENS,Theories,Ancient,Base Moon,Gov Secret,Time Travel,Other Dim,Universe,Future,Past,Parallel,Worlds
ALIENS,Future 2026,New Films,More Shows,NASA Study,New Tech,AI Help,Search,Discovery,Contact,Science,Space
SPIELBERG,Films,Jaws,ET,Schindler's,Saving Private,Indy,Jurassic,Close Enc,Minority,Catch Me,Lincoln
SPIELBERG,Genres,Sci Fi,Drama,Action,War,Family,History,Adventure,Horror,Thriller,Comedy
SPIELBERG,Awards,Oscar,Golden Globe,BAFTA,Director,Picture,Writer,Film Maker,Icon,Legend,Studio Boss
SPIELBERG,Studio,Amblin,Dreamworks,Universal,Paramount,Disney,Producer,Director,Writer,Boss,CEO
SPIELBERG,People,Tom Hanks,Harrison Ford,John Wms,George Lucas,Kate Cap,DiCaprio,Producer,Director,Friend,Family
SPIELBERG,Themes,Family,War,Hope,Magic,Childhood,History,Sci Fi,Adventure,Discovery,Trust
SPIELBERG,Future 2026,New Film,Next Project,More Shows,AI in Film,Future of Films,Mentorship,Legacy,New Ideas
NASCAR,Drivers,Earnhardt,Gordon,Petty,Johnson,Waltrip,Stewart,Junior,Elliott,Busch,Logano
NASCAR,Tracks,Daytona,Talladega,Martinsville,Bristol,Indy,Watkins Glen,Sonoma,Miami,Vegas,Charlotte
NASCAR,Terms,Draft,Pit Stop,Cautions,Checkered,Green Flag,Pole,Lead Lap,Oval,Road Course,Stage
NASCAR,Cars,Ford,Chevy,Toyota,Next Gen,Engine,Tires,Fuel,Oil,Wrap,Chassis
NASCAR,Events,Daytona 500,Bristol Night,Championship,Playoffs,Qualifying,Race Day,Tailgate,Party,Fans,Flag
NASCAR,History,Moonshine,Bootlegger,Daytona Beach,Bill France,Family,Legacy,Sport,Money,Fast,Danger
NASCAR,Future 2026,New Rules,EV Cars,Hybrid,Street Race,Global,Tech,Safety,Media,Next Gen
PETS,Types,Dog,Cat,Fish,Bird,Hamster,Guinea Pig,Rabbit,Snake,Lizard,Ferret
PETS,Care,Food,Water,Vet,Groom,Toys,Bed,Leash,Litter,Cage,Love
PETS,Health,Shots,Fleas,Ticks,Check up,Sick,Meds,Healthy,Insurance,Safe,Happy
PETS,Products,Food,Toys,Beds,Treats,Leashes,Bowls,Cages,Tanks,Collars,Gates
PETS,Work,Service,Guide,Therapy,Police,Rescue,Farm,Hunting,Military,Guard,Show
PETS,Terms,Sit,Stay,Heel,Paw,Roll,Come,Fetch,Bark,Meow,Purr
PETS,Future 2026,AI Toys,Smart Collar,Vet Tech,Food Delivery,Cloning,New Breeds,Rescue App,Health,Care
HERBS,Kitchen,Basil,Mint,Thyme,Sage,Dill,Parsley,Chives,Cilantro,Rosemary,Oregano
HERBS,Medical,Chamomile,Lavender,Ginseng,Echinacea,Ginger,Turmeric,St Johns,Valerian,Aloe,Mint
HERBS,Use,Cook,Tea,Oil,Spice,Tincture,Salve,Aroma,Garnish,Dry,Fresh
HERBS,Growth,Garden,Pot,Soil,Sun,Water,Seeds,Harvest,Dry,Fresh,Grow
HERBS,History,Ancient Use,Spice Trade,Medicine,Folk Lore,Magic,Healers,Monks,Garden,Global
HERBS,Terms,Annual,Perennial,Biennial,Hardy,Tender,Aroma,Flavor,Bitter,Sweet,Pungent
HERBS,Future 2026,New Meds,Pharma,Home Garden,Vertical Farm,Hydroponic,AI Grow,Spice Trade,Global
WWII,People,Hitler,Churchill,Stalin,Roosevelt,Truman,Mussolini,Hirohito,Patton,Monty,MacArthur
WWII,Battles,D-Day,Stalingrad,Midway,Bulge,Iwo Jima,Okinawa,Pearl Harbor,Blitz,Kursk,El Alamein
WWII,Tech,Atomic Bomb,Jet Plane,Radar,Sonar,Penicillin,Tank,Sub,Code Break,Radio,Bazooka
WWII,Locations,Europe,Pacific,Africa,Atlantic,Asia,Russia,Germany,Japan,UK,USA
WWII,Terms,Axis,Allies,Holocaust,Genocide,Blitz,Kamikaze,Rosie,Ration,Victory,Freedom
WWII,Legacy,UN,NATO,Cold War,Japan Dem,Europe Rebuild,Israel,Korea,History,Peace,Freedom
WWII,Future 2026,New Films,Games,Books,Museums,Vet Stories,Digital Archive,AI Study,History,Learn
WILD WEST,People,Billy Kid,Jesse James,Wyatt Earp,Doc Holliday,Buffalo Bill,Custer,Sitting Bull,Crazy Horse,Calamity Jane,Annie Oakley
WILD WEST,Places,Saloon,Jail,Bank,Ranch,Homestead,Trail,Outlaw,Town,Desert,Plains
WILD WEST,Terms,Outlaw,Sheriff,Marshal,Posse,Duel,Gold Rush,Cattle Drive,Pony Express,Stagecoach,Wanted
WILD WEST,Tech,Rifle,Pistol,Horse,Wagon,Train,Telegraph,Barbed Wire,Oil Lamp,Lever Action,Six Gun
WILD WEST,History,Civil War End,Frontier,Settlers,Railroad,War Dance,Treaty,Indian Wars,End of West,Movies
WILD WEST,Culture,Cowboy,Outlaw,Gambler,Prospector,Saloons,Bounty,Bandits,Dust,Ride
WILD WEST,Fiction,Westerns,Movies,Books,TV Shows,Red Dead,The Good,Bad,Ugly,High Noon`,mp=()=>{const n=hp.trim().split(`
`),i=new Map;if(n.length<2)return i;for(let r=1;r<n.length;r++){const l=n[r].trim();if(!l)continue;const c=l.split(",");if(c.length<4)continue;const S=c[0].trim().toUpperCase(),d=c[1].trim(),E=c.slice(2).map(h=>h.trim()).filter(h=>h.length>0);E.length<4||(i.has(S)||i.set(S,[]),i.get(S).push({id:`theme-${S}-${d}`.toLowerCase().replace(/\s+/g,"-"),name:d,words:E}))}return i},vc=(n,i=[])=>{const r=wO;let l=(n-1)%r.length,c=r[l];if(i.length>0&&!i.includes(c))for(let S=1;S<r.length;S++){const d=r[(l+S)%r.length];if(i.includes(d)){c=d;break}}return c},Tp=(n,i=[],r=[],l)=>{const c=l||vc(n,i);let S=[],d;switch(c){case Te.LEVEL_SYNONYMS:S=Bs();break;case Te.LEVEL_EMOJI:S=zo();break;case Te.LEVEL_THEMED:const E=mp(),h=Array.from(E.keys());d=h[(n-1)%h.length],S=E.get(d||"")||[];break;default:S=Ds(),n%20===0&&(S=[...S,...Sp()]);break}if(r.length>0&&c!==Te.LEVEL_THEMED){const E=S.filter(h=>r.includes(h.id));E.length>=4&&(S=E)}return{mode:c,data:S,themeName:d}};class fp{constructor(){this.ctx=null,this.isMuted=!1,this.isMusicPlaying=!1,this.musicNodes=[],this.musicInterval=null}getContext(){if(!this.ctx)try{const i=window.AudioContext||window.webkitAudioContext;if(i)this.ctx=new i;else return null}catch(i){return console.error("Audio init error",i),null}return this.ctx}resume(){const i=this.getContext();i&&i.state==="suspended"&&i.resume().catch(r=>console.warn(r))}setSound(i){this.isMuted=!i,this.isMuted?this.stopNodes():this.resume()}playTone(i,r,l,c=0,S=.1){if(this.isMuted)return;const d=this.getContext();if(d){d.state==="suspended"&&d.resume().catch(()=>{});try{const E=d.createOscillator(),h=d.createGain();E.type=r,E.frequency.setValueAtTime(i,d.currentTime+c),h.gain.setValueAtTime(S,d.currentTime+c),h.gain.linearRampToValueAtTime(.001,d.currentTime+c+l),E.connect(h),h.connect(d.destination),E.start(d.currentTime+c),E.stop(d.currentTime+c+l+.05),E.onended=()=>{E.disconnect(),h.disconnect()}}catch{}}}startMusic(){this.isMusicPlaying||(this.isMusicPlaying=!0)}stopMusic(){this.isMusicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null),this.stopNodes()}toggleMusic(){return this.isMusicPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}stopNodes(){this.musicNodes.forEach(i=>{try{i.disconnect()}catch{}}),this.musicNodes=[]}playTick(){this.playTone(800,"square",.03,0,.05)}playSelect(){this.playTone(600,"sine",.08,0,.1)}playSwap(){if(this.isMuted)return;const i=this.getContext();if(i){i.state==="suspended"&&i.resume().catch(()=>{});try{const r=i.createOscillator(),l=i.createGain();r.frequency.setValueAtTime(300,i.currentTime),r.frequency.linearRampToValueAtTime(600,i.currentTime+.1),l.gain.setValueAtTime(.05,i.currentTime),l.gain.linearRampToValueAtTime(.001,i.currentTime+.1),r.connect(l),l.connect(i.destination),r.start(),r.stop(i.currentTime+.15),r.onended=()=>{r.disconnect(),l.disconnect()}}catch{}}}playCorrect(){this.playTone(660,"sine",.1,0,.15),this.playTone(880,"sine",.2,.08,.15)}playRowSolved(){this.playTone(440,"sine",.4,0,.1),this.playTone(554.37,"sine",.4,.05,.1),this.playTone(659.25,"sine",.4,.1,.1)}playError(){if(this.isMuted)return;const i=this.getContext();if(i){i.state==="suspended"&&i.resume().catch(()=>{});try{const r=i.currentTime,l=i.createOscillator(),c=i.createGain();l.type="sawtooth",l.frequency.setValueAtTime(120,r),l.frequency.exponentialRampToValueAtTime(60,r+.3),c.gain.setValueAtTime(.15,r),c.gain.linearRampToValueAtTime(.001,r+.3),l.connect(c),c.connect(i.destination),l.start(r),l.stop(r+.35),l.onended=()=>{l.disconnect(),c.disconnect()}}catch{}}}playWin(){this.playTone(523.25,"triangle",.1,0,.2),this.playTone(659.25,"triangle",.1,0+.1,.2),this.playTone(783.99,"triangle",.1,0+.2,.2),this.playTone(1046.5,"square",.6,0+.3,.2),this.playTone(523.25,"sine",.4,0+.3,.2)}playLevelStart(){this.playTone(440,"sine",.1,0,.1),this.playTone(880,"sine",.2,0+.1,.1)}toggleMute(){this.isMuted=!this.isMuted,this.isMuted&&this.stopNodes()}}const Le=new fp;/*! Capacitor: https://capacitorjs.com/ - MIT License */var Fi;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Fi||(Fi={}));class mc extends Error{constructor(i,r,l){super(i),this.message=i,this.code=r,this.data=l}}const Rp=n=>{var i,r;return n!=null&&n.androidBridge?"android":!((r=(i=n==null?void 0:n.webkit)===null||i===void 0?void 0:i.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},Cp=n=>{const i=n.CapacitorCustomPlatform||null,r=n.Capacitor||{},l=r.Plugins=r.Plugins||{},c=()=>i!==null?i.name:Rp(n),S=()=>c()!=="web",d=f=>{const C=m.get(f);return!!(C!=null&&C.platforms.has(c())||E(f))},E=f=>{var C;return(C=r.PluginHeaders)===null||C===void 0?void 0:C.find(L=>L.name===f)},h=f=>n.console.error(f),m=new Map,T=(f,C={})=>{const L=m.get(f);if(L)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),L.proxy;const G=c(),K=E(f);let b;const M=async()=>(!b&&G in C?b=typeof C[G]=="function"?b=await C[G]():b=C[G]:i!==null&&!b&&"web"in C&&(b=typeof C.web=="function"?b=await C.web():b=C.web),b),x=(te,he)=>{var Ae,pe;if(K){const Re=K==null?void 0:K.methods.find(me=>he===me.name);if(Re)return Re.rtype==="promise"?me=>r.nativePromise(f,he.toString(),me):(me,ve)=>r.nativeCallback(f,he.toString(),me,ve);if(te)return(Ae=te[he])===null||Ae===void 0?void 0:Ae.bind(te)}else{if(te)return(pe=te[he])===null||pe===void 0?void 0:pe.bind(te);throw new mc(`"${f}" plugin is not implemented on ${G}`,Fi.Unimplemented)}},J=te=>{let he;const Ae=(...pe)=>{const Re=M().then(me=>{const ve=x(me,te);if(ve){const Ne=ve(...pe);return he=Ne==null?void 0:Ne.remove,Ne}else throw new mc(`"${f}.${te}()" is not implemented on ${G}`,Fi.Unimplemented)});return te==="addListener"&&(Re.remove=async()=>he()),Re};return Ae.toString=()=>`${te.toString()}() { [capacitor code] }`,Object.defineProperty(Ae,"name",{value:te,writable:!1,configurable:!1}),Ae},ne=J("addListener"),ie=J("removeListener"),ce=(te,he)=>{const Ae=ne({eventName:te},he),pe=async()=>{const me=await Ae;ie({eventName:te,callbackId:me},he)},Re=new Promise(me=>Ae.then(()=>me({remove:pe})));return Re.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await pe()},Re},ae=new Proxy({},{get(te,he){switch(he){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return K?ce:ne;case"removeListener":return ie;default:return J(he)}}});return l[f]=ae,m.set(f,{name:f,proxy:ae,platforms:new Set([...Object.keys(C),...K?[G]:[]])}),ae};return r.convertFileSrc||(r.convertFileSrc=f=>f),r.getPlatform=c,r.handleError=h,r.isNativePlatform=S,r.isPluginAvailable=d,r.registerPlugin=T,r.Exception=mc,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},Op=n=>n.Capacitor=Cp(n),xn=Op(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ed=xn.registerPlugin;class IT{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(i,r){let l=!1;this.listeners[i]||(this.listeners[i]=[],l=!0),this.listeners[i].push(r);const S=this.windowListeners[i];S&&!S.registered&&this.addWindowListener(S),l&&this.sendRetainedArgumentsForEvent(i);const d=async()=>this.removeListener(i,r);return Promise.resolve({remove:d})}async removeAllListeners(){this.listeners={};for(const i in this.windowListeners)this.removeWindowListener(this.windowListeners[i]);this.windowListeners={}}notifyListeners(i,r,l){const c=this.listeners[i];if(!c){if(l){let S=this.retainedEventArguments[i];S||(S=[]),S.push(r),this.retainedEventArguments[i]=S}return}c.forEach(S=>S(r))}hasListeners(i){var r;return!!(!((r=this.listeners[i])===null||r===void 0)&&r.length)}registerWindowListener(i,r){this.windowListeners[r]={registered:!1,windowEventName:i,pluginEventName:r,handler:l=>{this.notifyListeners(r,l)}}}unimplemented(i="not implemented"){return new xn.Exception(i,Fi.Unimplemented)}unavailable(i="not available"){return new xn.Exception(i,Fi.Unavailable)}async removeListener(i,r){const l=this.listeners[i];if(!l)return;const c=l.indexOf(r);this.listeners[i].splice(c,1),this.listeners[i].length||this.removeWindowListener(this.windowListeners[i])}addWindowListener(i){window.addEventListener(i.windowEventName,i.handler),i.registered=!0}removeWindowListener(i){i&&(window.removeEventListener(i.windowEventName,i.handler),i.registered=!1)}sendRetainedArgumentsForEvent(i){const r=this.retainedEventArguments[i];r&&(delete this.retainedEventArguments[i],r.forEach(l=>{this.notifyListeners(i,l)}))}}const _h=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Zh=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class pp extends IT{async getCookies(){const i=document.cookie,r={};return i.split(";").forEach(l=>{if(l.length<=0)return;let[c,S]=l.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=Zh(c).trim(),S=Zh(S).trim(),r[c]=S}),r}async setCookie(i){try{const r=_h(i.key),l=_h(i.value),c=`; expires=${(i.expires||"").replace("expires=","")}`,S=(i.path||"/").replace("path=",""),d=i.url!=null&&i.url.length>0?`domain=${i.url}`:"";document.cookie=`${r}=${l||""}${c}; path=${S}; ${d};`}catch(r){return Promise.reject(r)}}async deleteCookie(i){try{document.cookie=`${i.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const i=document.cookie.split(";")||[];for(const r of i)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(i){return Promise.reject(i)}}async clearAllCookies(){try{await this.clearCookies()}catch(i){return Promise.reject(i)}}}ed("CapacitorCookies",{web:()=>new pp});const gp=async n=>new Promise((i,r)=>{const l=new FileReader;l.onload=()=>{const c=l.result;i(c.indexOf(",")>=0?c.split(",")[1]:c)},l.onerror=c=>r(c),l.readAsDataURL(n)}),Np=(n={})=>{const i=Object.keys(n);return Object.keys(n).map(c=>c.toLocaleLowerCase()).reduce((c,S,d)=>(c[S]=n[i[d]],c),{})},Ip=(n,i=!0)=>n?Object.entries(n).reduce((l,c)=>{const[S,d]=c;let E,h;return Array.isArray(d)?(h="",d.forEach(m=>{E=i?encodeURIComponent(m):m,h+=`${S}=${E}&`}),h.slice(0,-1)):(E=i?encodeURIComponent(d):d,h=`${S}=${E}`),`${l}&${h}`},"").substr(1):null,yp=(n,i={})=>{const r=Object.assign({method:n.method||"GET",headers:n.headers},i),c=Np(n.headers)["content-type"]||"";if(typeof n.data=="string")r.body=n.data;else if(c.includes("application/x-www-form-urlencoded")){const S=new URLSearchParams;for(const[d,E]of Object.entries(n.data||{}))S.set(d,E);r.body=S.toString()}else if(c.includes("multipart/form-data")||n.data instanceof FormData){const S=new FormData;if(n.data instanceof FormData)n.data.forEach((E,h)=>{S.append(h,E)});else for(const E of Object.keys(n.data))S.append(E,n.data[E]);r.body=S;const d=new Headers(r.headers);d.delete("content-type"),r.headers=d}else(c.includes("application/json")||typeof n.data=="object")&&(r.body=JSON.stringify(n.data));return r};class Lp extends IT{async request(i){const r=yp(i,i.webFetchExtra),l=Ip(i.params,i.shouldEncodeUrlParams),c=l?`${i.url}?${l}`:i.url,S=await fetch(c,r),d=S.headers.get("content-type")||"";let{responseType:E="text"}=S.ok?i:{};d.includes("application/json")&&(E="json");let h,m;switch(E){case"arraybuffer":case"blob":m=await S.blob(),h=await gp(m);break;case"json":h=await S.json();break;case"document":case"text":default:h=await S.text()}const T={};return S.headers.forEach((f,C)=>{T[C]=f}),{data:h,headers:T,status:S.status,url:S.url}}async get(i){return this.request(Object.assign(Object.assign({},i),{method:"GET"}))}async post(i){return this.request(Object.assign(Object.assign({},i),{method:"POST"}))}async put(i){return this.request(Object.assign(Object.assign({},i),{method:"PUT"}))}async patch(i){return this.request(Object.assign(Object.assign({},i),{method:"PATCH"}))}async delete(i){return this.request(Object.assign(Object.assign({},i),{method:"DELETE"}))}}ed("CapacitorHttp",{web:()=>new Lp});const Mp="modulepreload",Pp=function(n){return"/"+n},Xh={},Dp=function(i,r,l){let c=Promise.resolve();if(r&&r.length>0){let d=function(m){return Promise.all(m.map(T=>Promise.resolve(T).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const E=document.querySelector("meta[property=csp-nonce]"),h=(E==null?void 0:E.nonce)||(E==null?void 0:E.getAttribute("nonce"));c=d(r.map(m=>{if(m=Pp(m),m in Xh)return;Xh[m]=!0;const T=m.endsWith(".css"),f=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${f}`))return;const C=document.createElement("link");if(C.rel=T?"stylesheet":Mp,T||(C.as="script"),C.crossOrigin="",C.href=m,h&&C.setAttribute("nonce",h),document.head.appendChild(C),T)return new Promise((L,G)=>{C.addEventListener("load",L),C.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${m}`)))})}))}function S(d){const E=new Event("vite:preloadError",{cancelable:!0});if(E.payload=d,window.dispatchEvent(E),!E.defaultPrevented)throw d}return c.then(d=>{for(const E of d||[])E.status==="rejected"&&S(E.reason);return i().catch(S)})};var qh;(function(n){n.General="General",n.ParentalGuidance="ParentalGuidance",n.Teen="Teen",n.MatureAudience="MatureAudience"})(qh||(qh={}));var Qh;(function(n){n.SizeChanged="bannerAdSizeChanged",n.Loaded="bannerAdLoaded",n.FailedToLoad="bannerAdFailedToLoad",n.Opened="bannerAdOpened",n.Closed="bannerAdClosed",n.AdImpression="bannerAdImpression"})(Qh||(Qh={}));var Hc;(function(n){n.TOP_CENTER="TOP_CENTER",n.CENTER="CENTER",n.BOTTOM_CENTER="BOTTOM_CENTER"})(Hc||(Hc={}));var bc;(function(n){n.BANNER="BANNER",n.FULL_BANNER="FULL_BANNER",n.LARGE_BANNER="LARGE_BANNER",n.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",n.LEADERBOARD="LEADERBOARD",n.ADAPTIVE_BANNER="ADAPTIVE_BANNER",n.SMART_BANNER="SMART_BANNER"})(bc||(bc={}));var $h;(function(n){n.Loaded="interstitialAdLoaded",n.FailedToLoad="interstitialAdFailedToLoad",n.Showed="interstitialAdShowed",n.FailedToShow="interstitialAdFailedToShow",n.Dismissed="interstitialAdDismissed"})($h||($h={}));var em;(function(n){n.Loaded="onRewardedInterstitialAdLoaded",n.FailedToLoad="onRewardedInterstitialAdFailedToLoad",n.Showed="onRewardedInterstitialAdShowed",n.FailedToShow="onRewardedInterstitialAdFailedToShow",n.Dismissed="onRewardedInterstitialAdDismissed",n.Rewarded="onRewardedInterstitialAdReward"})(em||(em={}));var tm;(function(n){n.Loaded="onRewardedVideoAdLoaded",n.FailedToLoad="onRewardedVideoAdFailedToLoad",n.Showed="onRewardedVideoAdShowed",n.FailedToShow="onRewardedVideoAdFailedToShow",n.Dismissed="onRewardedVideoAdDismissed",n.Rewarded="onRewardedVideoAdReward"})(tm||(tm={}));var Gc;(function(n){n.NOT_REQUIRED="NOT_REQUIRED",n.OBTAINED="OBTAINED",n.REQUIRED="REQUIRED",n.UNKNOWN="UNKNOWN"})(Gc||(Gc={}));var am;(function(n){n[n.DISABLED=0]="DISABLED",n[n.EEA=1]="EEA",n[n.NOT_EEA=2]="NOT_EEA",n[n.US=3]="US",n[n.OTHER=4]="OTHER"})(am||(am={}));const ha=ed("AdMob",{web:()=>Dp(()=>import("./web-hzg1di0E.js"),[]).then(n=>new n.AdMobWeb)}),Bp=({onStart:n,onSettings:i,onStats:r,lastLevel:l})=>{const c=l||1,S=c>1?`CONTINUE LEVEL ${c}`:"START GAME";return p.jsxs("div",{className:"flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative bg-black font-oswald",children:[p.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center w-full",children:[p.jsx("div",{className:"flex flex-col items-center justify-center mb-16 w-full animate-zoom-in",children:p.jsx("img",{src:"/logo.svg",alt:"WORD PAIRING MACHINE",className:"w-full max-w-[320px] md:max-w-[450px] h-auto object-contain"})}),p.jsx("div",{className:"flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center z-30",style:{animationDelay:"0.4s"},children:p.jsx("div",{className:"relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95 cursor-pointer",onClick:n,children:p.jsx("button",{className:`
                relative w-full bg-black rounded-large px-8 py-5
                flex items-center justify-center
                border-2 border-white
                shadow-none
                active:translate-y-[2px]
                transition-all duration-75 z-10
              `,children:p.jsx("span",{className:"text-2xl md:text-3xl font-black font-oswald text-white tracking-widest uppercase",children:S})})})})]}),p.jsxs("div",{className:"w-full flex flex-wrap justify-center gap-6 pb-12 mt-auto animate-fade-in px-4 relative z-30",style:{animationDelay:"0.5s"},children:[p.jsx("button",{onClick:r,className:`
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-neon-aqua hover:text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          `,children:"STATS"}),p.jsx("button",{onClick:i,className:`
            group relative px-6 py-3 rounded-medium flex-1 min-w-[120px] max-w-[180px]
            bg-transparent text-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
          `,children:"SETTINGS"})]})]})},vp={async showPrivacyOptionsForm(){if(xn.getPlatform()==="web"){console.log("Privacy options are managed by the browser or not applicable.");return}try{console.log("PrivacyService: Invoking AdMob.showConsentForm()"),await ha.showConsentForm()}catch(n){throw console.error("PrivacyService: Failed to open consent form",n),n}}},nm={[Te.CLASSIC]:"Classic",[Te.LEVEL_THEMED]:"Themed",[Te.LEVEL_MIND_MATCH]:"Mind",[Te.LEVEL_SYNONYMS]:"Synonyms",[Te.LEVEL_EMOJI]:"Emoji",[Te.LEVEL_EXPANSION]:"Expansion"},Hp=({isOpen:n,onClose:i,onMainMenu:r,isMusicOn:l,toggleMusic:c,enabledModes:S,toggleMode:d,onSelectMode:E,hintsEnabled:h,setHintsEnabled:m,onShowTutorial:T,onResetProgress:f,categories:C=[],isAutoPlaying:L,toggleAutoPlay:G,privacyOptionsRequired:K,onShowPrivacyOptions:b,onManagePool:M,selectedCount:x})=>{if(!n)return null;const J=C.length>0,ne=async()=>{if(b){b();return}try{await vp.showPrivacyOptionsForm()}catch(ie){console.error("Error showing privacy options form:",ie)}};return p.jsx("div",{className:"absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald",children:p.jsxs("div",{className:"w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col gap-3 overflow-hidden max-h-[95vh]",children:[p.jsxs("div",{className:"flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[p.jsx("h2",{className:"text-xl font-black text-neon-blue uppercase tracking-widest italic drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]",children:"SETTINGS"}),p.jsx("button",{className:"text-zinc-400 hover:text-neon-red transition-colors p-1",onClick:i,children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-2 shrink-0",children:[p.jsxs("button",{onClick:G,className:`col-span-2 py-3 rounded-medium border-4 transition-all font-black font-oswald text-base uppercase ${L?"bg-black border-neon-yellow text-neon-yellow shadow-[0_0_20px_rgba(249,255,0,0.6)]":"bg-black border-zinc-800 text-zinc-700"}`,children:["DEBUG AUTO PLAY: ",L?"ACTIVE":"OFF"]}),p.jsx("button",{onClick:r,className:"col-span-2 py-2.5 bg-neon-red border-2 border-white text-white font-black font-oswald text-lg uppercase rounded-medium hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(255,7,58,0.4)]",children:"EXIT TO MAIN MENU"}),p.jsxs("button",{onClick:c,className:`p-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${l?"bg-zinc-900 border-neon-green text-neon-green shadow-[0_0_10px_#00FF66]":"bg-black border-zinc-800 text-zinc-600"}`,children:["SOUND: ",l?"ON":"OFF"]}),p.jsxs("button",{onClick:()=>m(!h),className:`p-2.5 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${h?"bg-zinc-900 border-neon-blue text-neon-blue shadow-[0_0_10px_#00E5FF]":"bg-black border-zinc-800 text-zinc-600"}`,children:["HINTS: ",h?"ON":"OFF"]}),p.jsxs("button",{onClick:M,className:`col-span-2 p-2.5 rounded-medium border-2 transition-all font-black font-oswald text-sm uppercase ${x>0?"bg-zinc-900 border-neon-yellow text-neon-yellow shadow-[0_0_10px_rgba(249,255,0,0.3)]":"bg-black border-zinc-800 text-zinc-500"}`,children:["MANAGE CATEGORY POOL ",x>0?`(${x})`:""]})]}),J&&p.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[p.jsx("h3",{className:"text-neon-pink font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(255,31,191,0.5)]",children:"CURRENT GOALS"}),p.jsx("div",{className:"grid grid-cols-2 gap-1.5 py-1",children:C.map(ie=>p.jsxs("div",{className:`px-2 py-1.5 rounded-small border flex items-center justify-between text-[10px] font-bold uppercase font-oswald tracking-tighter transition-all ${ie.isSolved?"bg-neon-green/10 border-neon-green text-neon-green shadow-[0_0_5px_#00FF66]":"bg-black border-zinc-700 text-zinc-300"}`,children:[p.jsx("span",{className:"truncate mr-1",children:ie.name}),ie.isSolved&&p.jsx("span",{className:"text-xs",children:"✓"})]},ie.name))})]}),p.jsxs("div",{className:"flex flex-col gap-1 shrink-0 overflow-y-auto no-scrollbar",children:[p.jsx("h3",{className:"text-neon-aqua font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5 drop-shadow-[0_0_2px_rgba(0,255,255,0.5)] sticky top-0 bg-zinc-950 z-10",children:"GAME MODES"}),p.jsx("div",{className:"grid grid-cols-3 gap-1.5 pt-1",children:Object.keys(nm).map(ie=>{const ce=S.includes(ie);return p.jsxs("button",{onClick:()=>E?E(ie):d(ie),className:`flex flex-col items-center justify-center p-1 rounded-medium border-2 transition-all h-12 ${ce?"bg-zinc-900 border-neon-aqua text-white shadow-[0_0_8px_rgba(0,255,246,0.3)]":"bg-black border-zinc-800 text-zinc-600"}`,children:[p.jsx("span",{className:"font-bold font-oswald text-[9px] uppercase leading-none mb-0.5 text-center",children:nm[ie]}),p.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${ce?"bg-neon-aqua shadow-[0_0_5px_#00FFF6]":"bg-zinc-800"}`})]},ie)})})]}),p.jsxs("div",{className:"mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800 shrink-0",children:[p.jsxs("div",{className:`grid ${K?"grid-cols-2":"grid-cols-1"} gap-2`,children:[p.jsx("button",{onClick:T,className:"py-2 bg-zinc-900 border border-neon-yellow text-neon-yellow rounded-medium font-bold text-[9px] font-oswald uppercase shadow-[0_0_8px_rgba(249,255,0,0.2)]",children:"HOW TO PLAY"}),K&&p.jsx("button",{onClick:ne,className:"py-2 bg-zinc-900 border border-zinc-600 text-zinc-400 rounded-medium font-bold text-[9px] font-oswald uppercase hover:text-white hover:border-white transition-all",children:"CONSENT"})]}),p.jsx("button",{onClick:f,className:"w-full py-2 bg-black border border-neon-red text-neon-red rounded-medium font-bold text-[10px] font-oswald uppercase shadow-[0_0_5px_rgba(255,7,58,0.2)]",children:"RESET PROGRESS"}),p.jsx("button",{onClick:i,className:"w-full py-3.5 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_20px_white]",children:"RESUME PLAY"})]})]})})};function bp(n){if(typeof Proxy>"u")return n;const i=new Map,r=(...l)=>n(...l);return new Proxy(r,{get:(l,c)=>c==="create"?n:(i.has(c)||i.set(c,n(c)),i.get(c))})}function ws(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Fc=n=>Array.isArray(n);function yT(n,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==n.length)return!1;for(let l=0;l<r;l++)if(i[l]!==n[l])return!1;return!0}function jo(n){return typeof n=="string"||Array.isArray(n)}function im(n){const i=[{},{}];return n==null||n.values.forEach((r,l)=>{i[0][l]=r.get(),i[1][l]=r.getVelocity()}),i}function td(n,i,r,l){if(typeof i=="function"){const[c,S]=im(l);i=i(r!==void 0?r:n.custom,c,S)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,S]=im(l);i=i(r!==void 0?r:n.custom,c,S)}return i}function xs(n,i,r){const l=n.getProps();return td(l,i,r!==void 0?r:l.custom,n)}const ad=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],nd=["initial",...ad],Qo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Kn=new Set(Qo),ka=n=>n*1e3,wa=n=>n/1e3,Gp={type:"spring",stiffness:500,damping:25,restSpeed:10},Fp=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Up={type:"keyframes",duration:.8},kp={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},wp=(n,{keyframes:i})=>i.length>2?Up:Kn.has(n)?n.startsWith("scale")?Fp(i[1]):Gp:kp;function id(n,i){return n?n[i]||n.default||n:void 0}const xp={useManualTiming:!1},Vp=n=>n!==null;function Vs(n,{repeat:i,repeatType:r="loop"},l){const c=n.filter(Vp),S=i&&r!=="loop"&&i%2===1?0:c.length-1;return!S||l===void 0?c[S]:l}const zt=n=>n;let LT=zt;function Kp(n){let i=new Set,r=new Set,l=!1,c=!1;const S=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function E(m){S.has(m)&&(h.schedule(m),n()),m(d)}const h={schedule:(m,T=!1,f=!1)=>{const L=f&&l?i:r;return T&&S.add(m),L.has(m)||L.add(m),m},cancel:m=>{r.delete(m),S.delete(m)},process:m=>{if(d=m,l){c=!0;return}l=!0,[i,r]=[r,i],i.forEach(E),i.clear(),l=!1,c&&(c=!1,h.process(m))}};return h}const Os=["read","resolveKeyframes","update","preRender","render","postRender"],Wp=40;function MT(n,i){let r=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},S=()=>r=!0,d=Os.reduce((M,x)=>(M[x]=Kp(S),M),{}),{read:E,resolveKeyframes:h,update:m,preRender:T,render:f,postRender:C}=d,L=()=>{const M=performance.now();r=!1,c.delta=l?1e3/60:Math.max(Math.min(M-c.timestamp,Wp),1),c.timestamp=M,c.isProcessing=!0,E.process(c),h.process(c),m.process(c),T.process(c),f.process(c),C.process(c),c.isProcessing=!1,r&&i&&(l=!1,n(L))},G=()=>{r=!0,l=!0,c.isProcessing||n(L)};return{schedule:Os.reduce((M,x)=>{const J=d[x];return M[x]=(ne,ie=!1,ce=!1)=>(r||G(),J.schedule(ne,ie,ce)),M},{}),cancel:M=>{for(let x=0;x<Os.length;x++)d[Os[x]].cancel(M)},state:c,steps:d}}const{schedule:je,cancel:En,state:Rt,steps:Tc}=MT(typeof requestAnimationFrame<"u"?requestAnimationFrame:zt,!0),PT=(n,i,r)=>(((1-3*r+3*i)*n+(3*r-6*i))*n+3*i)*n,Yp=1e-7,zp=12;function jp(n,i,r,l,c){let S,d,E=0;do d=i+(r-i)/2,S=PT(d,l,c)-n,S>0?r=d:i=d;while(Math.abs(S)>Yp&&++E<zp);return d}function $o(n,i,r,l){if(n===i&&r===l)return zt;const c=S=>jp(S,0,1,n,r);return S=>S===0||S===1?S:PT(c(S),i,l)}const DT=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,BT=n=>i=>1-n(1-i),vT=$o(.33,1.53,.69,.99),od=BT(vT),HT=DT(od),bT=n=>(n*=2)<1?.5*od(n):.5*(2-Math.pow(2,-10*(n-1))),rd=n=>1-Math.sin(Math.acos(n)),GT=BT(rd),FT=DT(rd),UT=n=>/^0[^.\s]+$/u.test(n);function Jp(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||UT(n):!0}const kT=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),wT=n=>i=>typeof i=="string"&&i.startsWith(n),xT=wT("--"),_p=wT("var(--"),sd=n=>_p(n)?Zp.test(n.split("/*")[0].trim()):!1,Zp=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Xp=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function qp(n){const i=Xp.exec(n);if(!i)return[,];const[,r,l,c]=i;return[`--${r??l}`,c]}function VT(n,i,r=1){const[l,c]=qp(n);if(!l)return;const S=window.getComputedStyle(i).getPropertyValue(l);if(S){const d=S.trim();return kT(d)?parseFloat(d):d}return sd(c)?VT(c,i,r+1):c}const xa=(n,i,r)=>r>i?i:r<n?n:r,xi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Jo={...xi,transform:n=>xa(0,1,n)},ps={...xi,default:1},er=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),An=er("deg"),ma=er("%"),Oe=er("px"),Qp=er("vh"),$p=er("vw"),om={...ma,parse:n=>ma.parse(n)/100,transform:n=>ma.transform(n*100)},eg=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),rm=n=>n===xi||n===Oe,sm=(n,i)=>parseFloat(n.split(", ")[i]),lm=(n,i)=>(r,{transform:l})=>{if(l==="none"||!l)return 0;const c=l.match(/^matrix3d\((.+)\)$/u);if(c)return sm(c[1],i);{const S=l.match(/^matrix\((.+)\)$/u);return S?sm(S[1],n):0}},tg=new Set(["x","y","z"]),ag=Qo.filter(n=>!tg.has(n));function ng(n){const i=[];return ag.forEach(r=>{const l=n.getValue(r);l!==void 0&&(i.push([r,l.get()]),l.set(r.startsWith("scale")?1:0))}),i}const Ui={width:({x:n},{paddingLeft:i="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(i)-parseFloat(r),height:({y:n},{paddingTop:i="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(i)-parseFloat(r),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:lm(4,13),y:lm(5,14)};Ui.translateX=Ui.x;Ui.translateY=Ui.y;const KT=n=>i=>i.test(n),ig={test:n=>n==="auto",parse:n=>n},WT=[xi,Oe,ma,An,$p,Qp,ig],um=n=>WT.find(KT(n)),Vn=new Set;let Uc=!1,kc=!1;function YT(){if(kc){const n=Array.from(Vn).filter(l=>l.needsMeasurement),i=new Set(n.map(l=>l.element)),r=new Map;i.forEach(l=>{const c=ng(l);c.length&&(r.set(l,c),l.render())}),n.forEach(l=>l.measureInitialState()),i.forEach(l=>{l.render();const c=r.get(l);c&&c.forEach(([S,d])=>{var E;(E=l.getValue(S))===null||E===void 0||E.set(d)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}kc=!1,Uc=!1,Vn.forEach(n=>n.complete()),Vn.clear()}function zT(){Vn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(kc=!0)})}function og(){zT(),YT()}class ld{constructor(i,r,l,c,S,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=l,this.motionValue=c,this.element=S,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Vn.add(this),Uc||(Uc=!0,je.read(zT),je.resolveKeyframes(YT))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:l,motionValue:c}=this;for(let S=0;S<i.length;S++)if(i[S]===null)if(S===0){const d=c==null?void 0:c.get(),E=i[i.length-1];if(d!==void 0)i[0]=d;else if(l&&r){const h=l.readValue(r,E);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=E),c&&d===void 0&&c.set(i[0])}else i[S]=i[S-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Vn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Vn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Vo=n=>Math.round(n*1e5)/1e5,ud=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rg(n){return n==null}const sg=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,cd=(n,i)=>r=>!!(typeof r=="string"&&sg.test(r)&&r.startsWith(n)||i&&!rg(r)&&Object.prototype.hasOwnProperty.call(r,i)),jT=(n,i,r)=>l=>{if(typeof l!="string")return l;const[c,S,d,E]=l.match(ud);return{[n]:parseFloat(c),[i]:parseFloat(S),[r]:parseFloat(d),alpha:E!==void 0?parseFloat(E):1}},lg=n=>xa(0,255,n),fc={...xi,transform:n=>Math.round(lg(n))},wn={test:cd("rgb","red"),parse:jT("red","green","blue"),transform:({red:n,green:i,blue:r,alpha:l=1})=>"rgba("+fc.transform(n)+", "+fc.transform(i)+", "+fc.transform(r)+", "+Vo(Jo.transform(l))+")"};function ug(n){let i="",r="",l="",c="";return n.length>5?(i=n.substring(1,3),r=n.substring(3,5),l=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),r=n.substring(2,3),l=n.substring(3,4),c=n.substring(4,5),i+=i,r+=r,l+=l,c+=c),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const wc={test:cd("#"),parse:ug,transform:wn.transform},Di={test:cd("hsl","hue"),parse:jT("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:r,alpha:l=1})=>"hsla("+Math.round(n)+", "+ma.transform(Vo(i))+", "+ma.transform(Vo(r))+", "+Vo(Jo.transform(l))+")"},gt={test:n=>wn.test(n)||wc.test(n)||Di.test(n),parse:n=>wn.test(n)?wn.parse(n):Di.test(n)?Di.parse(n):wc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?wn.transform(n):Di.transform(n)},cg=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dg(n){var i,r;return isNaN(n)&&typeof n=="string"&&(((i=n.match(ud))===null||i===void 0?void 0:i.length)||0)+(((r=n.match(cg))===null||r===void 0?void 0:r.length)||0)>0}const JT="number",_T="color",Sg="var",Ag="var(",cm="${}",Eg=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _o(n){const i=n.toString(),r=[],l={color:[],number:[],var:[]},c=[];let S=0;const E=i.replace(Eg,h=>(gt.test(h)?(l.color.push(S),c.push(_T),r.push(gt.parse(h))):h.startsWith(Ag)?(l.var.push(S),c.push(Sg),r.push(h)):(l.number.push(S),c.push(JT),r.push(parseFloat(h))),++S,cm)).split(cm);return{values:r,split:E,indexes:l,types:c}}function ZT(n){return _o(n).values}function XT(n){const{split:i,types:r}=_o(n),l=i.length;return c=>{let S="";for(let d=0;d<l;d++)if(S+=i[d],c[d]!==void 0){const E=r[d];E===JT?S+=Vo(c[d]):E===_T?S+=gt.transform(c[d]):S+=c[d]}return S}}const hg=n=>typeof n=="number"?0:n;function mg(n){const i=ZT(n);return XT(n)(i.map(hg))}const hn={test:dg,parse:ZT,createTransformer:XT,getAnimatableNone:mg},Tg=new Set(["brightness","contrast","saturate","opacity"]);function fg(n){const[i,r]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[l]=r.match(ud)||[];if(!l)return n;const c=r.replace(l,"");let S=Tg.has(i)?1:0;return l!==r&&(S*=100),i+"("+S+c+")"}const Rg=/\b([a-z-]*)\(.*?\)/gu,xc={...hn,getAnimatableNone:n=>{const i=n.match(Rg);return i?i.map(fg).join(" "):n}},Cg={borderWidth:Oe,borderTopWidth:Oe,borderRightWidth:Oe,borderBottomWidth:Oe,borderLeftWidth:Oe,borderRadius:Oe,radius:Oe,borderTopLeftRadius:Oe,borderTopRightRadius:Oe,borderBottomRightRadius:Oe,borderBottomLeftRadius:Oe,width:Oe,maxWidth:Oe,height:Oe,maxHeight:Oe,top:Oe,right:Oe,bottom:Oe,left:Oe,padding:Oe,paddingTop:Oe,paddingRight:Oe,paddingBottom:Oe,paddingLeft:Oe,margin:Oe,marginTop:Oe,marginRight:Oe,marginBottom:Oe,marginLeft:Oe,backgroundPositionX:Oe,backgroundPositionY:Oe},Og={rotate:An,rotateX:An,rotateY:An,rotateZ:An,scale:ps,scaleX:ps,scaleY:ps,scaleZ:ps,skew:An,skewX:An,skewY:An,distance:Oe,translateX:Oe,translateY:Oe,translateZ:Oe,x:Oe,y:Oe,z:Oe,perspective:Oe,transformPerspective:Oe,opacity:Jo,originX:om,originY:om,originZ:Oe},dm={...xi,transform:Math.round},dd={...Cg,...Og,zIndex:dm,size:Oe,fillOpacity:Jo,strokeOpacity:Jo,numOctaves:dm},pg={...dd,color:gt,backgroundColor:gt,outlineColor:gt,fill:gt,stroke:gt,borderColor:gt,borderTopColor:gt,borderRightColor:gt,borderBottomColor:gt,borderLeftColor:gt,filter:xc,WebkitFilter:xc},Sd=n=>pg[n];function qT(n,i){let r=Sd(n);return r!==xc&&(r=hn),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const gg=new Set(["auto","none","0"]);function Ng(n,i,r){let l=0,c;for(;l<n.length&&!c;){const S=n[l];typeof S=="string"&&!gg.has(S)&&_o(S).values.length&&(c=n[l]),l++}if(c&&r)for(const S of i)n[S]=qT(r,c)}class QT extends ld{constructor(i,r,l,c,S){super(i,r,l,c,S,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:l}=this;if(!r||!r.current)return;super.readKeyframes();for(let h=0;h<i.length;h++){let m=i[h];if(typeof m=="string"&&(m=m.trim(),sd(m))){const T=VT(m,r.current);T!==void 0&&(i[h]=T),h===i.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!eg.has(l)||i.length!==2)return;const[c,S]=i,d=um(c),E=um(S);if(d!==E)if(rm(d)&&rm(E))for(let h=0;h<i.length;h++){const m=i[h];typeof m=="string"&&(i[h]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,l=[];for(let c=0;c<i.length;c++)Jp(i[c])&&l.push(c);l.length&&Ng(i,l,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:l}=this;if(!i||!i.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ui[l](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&i.getValue(l,c).jump(c,!1)}measureEndState(){var i;const{element:r,name:l,unresolvedKeyframes:c}=this;if(!r||!r.current)return;const S=r.getValue(l);S&&S.jump(this.measuredOrigin,!1);const d=c.length-1,E=c[d];c[d]=Ui[l](r.measureViewportBox(),window.getComputedStyle(r.current)),E!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=E),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([h,m])=>{r.getValue(h).set(m)}),this.resolveNoneKeyframes()}}function Ad(n){return typeof n=="function"}let Ls;function Ig(){Ls=void 0}const Ta={now:()=>(Ls===void 0&&Ta.set(Rt.isProcessing||xp.useManualTiming?Rt.timestamp:performance.now()),Ls),set:n=>{Ls=n,queueMicrotask(Ig)}},Sm=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(hn.test(n)||n==="0")&&!n.startsWith("url("));function yg(n){const i=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==i)return!0}function Lg(n,i,r,l){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const S=n[n.length-1],d=Sm(c,i),E=Sm(S,i);return!d||!E?!1:yg(n)||(r==="spring"||Ad(r))&&l}const Mg=40;class $T{constructor({autoplay:i=!0,delay:r=0,type:l="keyframes",repeat:c=0,repeatDelay:S=0,repeatType:d="loop",...E}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ta.now(),this.options={autoplay:i,delay:r,type:l,repeat:c,repeatDelay:S,repeatType:d,...E},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Mg?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&og(),this._resolved}onKeyframesResolved(i,r){this.resolvedAt=Ta.now(),this.hasAttemptedResolve=!0;const{name:l,type:c,velocity:S,delay:d,onComplete:E,onUpdate:h,isGenerator:m}=this.options;if(!m&&!Lg(i,l,c,S))if(d)this.options.duration=0;else{h==null||h(Vs(i,this.options,r)),E==null||E(),this.resolveFinishedPromise();return}const T=this.initPlayback(i,r);T!==!1&&(this._resolved={keyframes:i,finalKeyframe:r,...T},this.onPostResolved())}onPostResolved(){}then(i,r){return this.currentFinishedPromise.then(i,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const ki=(n,i,r)=>{const l=i-n;return l===0?1:(r-n)/l},ef=(n,i,r=10)=>{let l="";const c=Math.max(Math.round(i/r),2);for(let S=0;S<c;S++)l+=n(ki(0,c-1,S))+", ";return`linear(${l.substring(0,l.length-2)})`};function tf(n,i){return i?n*(1e3/i):0}const Pg=5;function af(n,i,r){const l=Math.max(i-Pg,0);return tf(r-n(l),i-l)}const Qe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Rc=.001;function Dg({duration:n=Qe.duration,bounce:i=Qe.bounce,velocity:r=Qe.velocity,mass:l=Qe.mass}){let c,S,d=1-i;d=xa(Qe.minDamping,Qe.maxDamping,d),n=xa(Qe.minDuration,Qe.maxDuration,wa(n)),d<1?(c=m=>{const T=m*d,f=T*n,C=T-r,L=Vc(m,d),G=Math.exp(-f);return Rc-C/L*G},S=m=>{const f=m*d*n,C=f*r+r,L=Math.pow(d,2)*Math.pow(m,2)*n,G=Math.exp(-f),K=Vc(Math.pow(m,2),d);return(-c(m)+Rc>0?-1:1)*((C-L)*G)/K}):(c=m=>{const T=Math.exp(-m*n),f=(m-r)*n+1;return-Rc+T*f},S=m=>{const T=Math.exp(-m*n),f=(r-m)*(n*n);return T*f});const E=5/n,h=vg(c,S,E);if(n=ka(n),isNaN(h))return{stiffness:Qe.stiffness,damping:Qe.damping,duration:n};{const m=Math.pow(h,2)*l;return{stiffness:m,damping:d*2*Math.sqrt(l*m),duration:n}}}const Bg=12;function vg(n,i,r){let l=r;for(let c=1;c<Bg;c++)l=l-n(l)/i(l);return l}function Vc(n,i){return n*Math.sqrt(1-i*i)}const Kc=2e4;function nf(n){let i=0;const r=50;let l=n.next(i);for(;!l.done&&i<Kc;)i+=r,l=n.next(i);return i>=Kc?1/0:i}const Hg=["duration","bounce"],bg=["stiffness","damping","mass"];function Am(n,i){return i.some(r=>n[r]!==void 0)}function Gg(n){let i={velocity:Qe.velocity,stiffness:Qe.stiffness,damping:Qe.damping,mass:Qe.mass,isResolvedFromDuration:!1,...n};if(!Am(n,bg)&&Am(n,Hg))if(n.visualDuration){const r=n.visualDuration,l=2*Math.PI/(r*1.2),c=l*l,S=2*xa(.05,1,1-n.bounce)*Math.sqrt(c);i={...i,mass:Qe.mass,stiffness:c,damping:S}}else{const r=Dg(n);i={...i,...r,mass:Qe.mass},i.isResolvedFromDuration=!0}return i}function of(n=Qe.visualDuration,i=Qe.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:l,restDelta:c}=r;const S=r.keyframes[0],d=r.keyframes[r.keyframes.length-1],E={done:!1,value:S},{stiffness:h,damping:m,mass:T,duration:f,velocity:C,isResolvedFromDuration:L}=Gg({...r,velocity:-wa(r.velocity||0)}),G=C||0,K=m/(2*Math.sqrt(h*T)),b=d-S,M=wa(Math.sqrt(h/T)),x=Math.abs(b)<5;l||(l=x?Qe.restSpeed.granular:Qe.restSpeed.default),c||(c=x?Qe.restDelta.granular:Qe.restDelta.default);let J;if(K<1){const ie=Vc(M,K);J=ce=>{const ae=Math.exp(-K*M*ce);return d-ae*((G+K*M*b)/ie*Math.sin(ie*ce)+b*Math.cos(ie*ce))}}else if(K===1)J=ie=>d-Math.exp(-M*ie)*(b+(G+M*b)*ie);else{const ie=M*Math.sqrt(K*K-1);J=ce=>{const ae=Math.exp(-K*M*ce),te=Math.min(ie*ce,300);return d-ae*((G+K*M*b)*Math.sinh(te)+ie*b*Math.cosh(te))/ie}}const ne={calculatedDuration:L&&f||null,next:ie=>{const ce=J(ie);if(L)E.done=ie>=f;else{let ae=0;K<1&&(ae=ie===0?ka(G):af(J,ie,ce));const te=Math.abs(ae)<=l,he=Math.abs(d-ce)<=c;E.done=te&&he}return E.value=E.done?d:ce,E},toString:()=>{const ie=Math.min(nf(ne),Kc),ce=ef(ae=>ne.next(ie*ae).value,ie,30);return ie+"ms "+ce}};return ne}function Em({keyframes:n,velocity:i=0,power:r=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:S=500,modifyTarget:d,min:E,max:h,restDelta:m=.5,restSpeed:T}){const f=n[0],C={done:!1,value:f},L=te=>E!==void 0&&te<E||h!==void 0&&te>h,G=te=>E===void 0?h:h===void 0||Math.abs(E-te)<Math.abs(h-te)?E:h;let K=r*i;const b=f+K,M=d===void 0?b:d(b);M!==b&&(K=M-f);const x=te=>-K*Math.exp(-te/l),J=te=>M+x(te),ne=te=>{const he=x(te),Ae=J(te);C.done=Math.abs(he)<=m,C.value=C.done?M:Ae};let ie,ce;const ae=te=>{L(C.value)&&(ie=te,ce=of({keyframes:[C.value,G(C.value)],velocity:af(J,te,C.value),damping:c,stiffness:S,restDelta:m,restSpeed:T}))};return ae(0),{calculatedDuration:null,next:te=>{let he=!1;return!ce&&ie===void 0&&(he=!0,ne(te),ae(te)),ie!==void 0&&te>=ie?ce.next(te-ie):(!he&&ne(te),C)}}}const Fg=$o(.42,0,1,1),Ug=$o(0,0,.58,1),rf=$o(.42,0,.58,1),kg=n=>Array.isArray(n)&&typeof n[0]!="number",Ed=n=>Array.isArray(n)&&typeof n[0]=="number",wg={linear:zt,easeIn:Fg,easeInOut:rf,easeOut:Ug,circIn:rd,circInOut:FT,circOut:GT,backIn:od,backInOut:HT,backOut:vT,anticipate:bT},hm=n=>{if(Ed(n)){LT(n.length===4);const[i,r,l,c]=n;return $o(i,r,l,c)}else if(typeof n=="string")return wg[n];return n},xg=(n,i)=>r=>i(n(r)),tr=(...n)=>n.reduce(xg),_e=(n,i,r)=>n+(i-n)*r;function Cc(n,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(i-n)*6*r:r<1/2?i:r<2/3?n+(i-n)*(2/3-r)*6:n}function Vg({hue:n,saturation:i,lightness:r,alpha:l}){n/=360,i/=100,r/=100;let c=0,S=0,d=0;if(!i)c=S=d=r;else{const E=r<.5?r*(1+i):r+i-r*i,h=2*r-E;c=Cc(h,E,n+1/3),S=Cc(h,E,n),d=Cc(h,E,n-1/3)}return{red:Math.round(c*255),green:Math.round(S*255),blue:Math.round(d*255),alpha:l}}function vs(n,i){return r=>r>0?i:n}const Oc=(n,i,r)=>{const l=n*n,c=r*(i*i-l)+l;return c<0?0:Math.sqrt(c)},Kg=[wc,wn,Di],Wg=n=>Kg.find(i=>i.test(n));function mm(n){const i=Wg(n);if(!i)return!1;let r=i.parse(n);return i===Di&&(r=Vg(r)),r}const Tm=(n,i)=>{const r=mm(n),l=mm(i);if(!r||!l)return vs(n,i);const c={...r};return S=>(c.red=Oc(r.red,l.red,S),c.green=Oc(r.green,l.green,S),c.blue=Oc(r.blue,l.blue,S),c.alpha=_e(r.alpha,l.alpha,S),wn.transform(c))},Wc=new Set(["none","hidden"]);function Yg(n,i){return Wc.has(n)?r=>r<=0?n:i:r=>r>=1?i:n}function zg(n,i){return r=>_e(n,i,r)}function hd(n){return typeof n=="number"?zg:typeof n=="string"?sd(n)?vs:gt.test(n)?Tm:_g:Array.isArray(n)?sf:typeof n=="object"?gt.test(n)?Tm:jg:vs}function sf(n,i){const r=[...n],l=r.length,c=n.map((S,d)=>hd(S)(S,i[d]));return S=>{for(let d=0;d<l;d++)r[d]=c[d](S);return r}}function jg(n,i){const r={...n,...i},l={};for(const c in r)n[c]!==void 0&&i[c]!==void 0&&(l[c]=hd(n[c])(n[c],i[c]));return c=>{for(const S in l)r[S]=l[S](c);return r}}function Jg(n,i){var r;const l=[],c={color:0,var:0,number:0};for(let S=0;S<i.values.length;S++){const d=i.types[S],E=n.indexes[d][c[d]],h=(r=n.values[E])!==null&&r!==void 0?r:0;l[S]=h,c[d]++}return l}const _g=(n,i)=>{const r=hn.createTransformer(i),l=_o(n),c=_o(i);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?Wc.has(n)&&!c.values.length||Wc.has(i)&&!l.values.length?Yg(n,i):tr(sf(Jg(l,c),c.values),r):vs(n,i)};function lf(n,i,r){return typeof n=="number"&&typeof i=="number"&&typeof r=="number"?_e(n,i,r):hd(n)(n,i)}function Zg(n,i,r){const l=[],c=r||lf,S=n.length-1;for(let d=0;d<S;d++){let E=c(n[d],n[d+1]);if(i){const h=Array.isArray(i)?i[d]||zt:i;E=tr(h,E)}l.push(E)}return l}function Xg(n,i,{clamp:r=!0,ease:l,mixer:c}={}){const S=n.length;if(LT(S===i.length),S===1)return()=>i[0];if(S===2&&n[0]===n[1])return()=>i[1];n[0]>n[S-1]&&(n=[...n].reverse(),i=[...i].reverse());const d=Zg(i,l,c),E=d.length,h=m=>{let T=0;if(E>1)for(;T<n.length-2&&!(m<n[T+1]);T++);const f=ki(n[T],n[T+1],m);return d[T](f)};return r?m=>h(xa(n[0],n[S-1],m)):h}function qg(n,i){const r=n[n.length-1];for(let l=1;l<=i;l++){const c=ki(0,i,l);n.push(_e(r,1,c))}}function Qg(n){const i=[0];return qg(i,n.length-1),i}function $g(n,i){return n.map(r=>r*i)}function eN(n,i){return n.map(()=>i||rf).splice(0,n.length-1)}function Hs({duration:n=300,keyframes:i,times:r,ease:l="easeInOut"}){const c=kg(l)?l.map(hm):hm(l),S={done:!1,value:i[0]},d=$g(r&&r.length===i.length?r:Qg(i),n),E=Xg(d,i,{ease:Array.isArray(c)?c:eN(i,c)});return{calculatedDuration:n,next:h=>(S.value=E(h),S.done=h>=n,S)}}const tN=n=>{const i=({timestamp:r})=>n(r);return{start:()=>je.update(i,!0),stop:()=>En(i),now:()=>Rt.isProcessing?Rt.timestamp:Ta.now()}},aN={decay:Em,inertia:Em,tween:Hs,keyframes:Hs,spring:of},nN=n=>n/100;class md extends $T{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:r,motionValue:l,element:c,keyframes:S}=this.options,d=(c==null?void 0:c.KeyframeResolver)||ld,E=(h,m)=>this.onKeyframesResolved(h,m);this.resolver=new d(S,E,r,l,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:r="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:S,velocity:d=0}=this.options,E=Ad(r)?r:aN[r]||Hs;let h,m;E!==Hs&&typeof i[0]!="number"&&(h=tr(nN,lf(i[0],i[1])),i=[0,100]);const T=E({...this.options,keyframes:i});S==="mirror"&&(m=E({...this.options,keyframes:[...i].reverse(),velocity:-d})),T.calculatedDuration===null&&(T.calculatedDuration=nf(T));const{calculatedDuration:f}=T,C=f+c,L=C*(l+1)-c;return{generator:T,mirroredGenerator:m,mapPercentToKeyframes:h,calculatedDuration:f,resolvedDuration:C,totalDuration:L}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,r=!1){const{resolved:l}=this;if(!l){const{keyframes:te}=this.options;return{done:!0,value:te[te.length-1]}}const{finalKeyframe:c,generator:S,mirroredGenerator:d,mapPercentToKeyframes:E,keyframes:h,calculatedDuration:m,totalDuration:T,resolvedDuration:f}=l;if(this.startTime===null)return S.next(0);const{delay:C,repeat:L,repeatType:G,repeatDelay:K,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-T/this.speed,this.startTime)),r?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const M=this.currentTime-C*(this.speed>=0?1:-1),x=this.speed>=0?M<0:M>T;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=T);let J=this.currentTime,ne=S;if(L){const te=Math.min(this.currentTime,T)/f;let he=Math.floor(te),Ae=te%1;!Ae&&te>=1&&(Ae=1),Ae===1&&he--,he=Math.min(he,L+1),!!(he%2)&&(G==="reverse"?(Ae=1-Ae,K&&(Ae-=K/f)):G==="mirror"&&(ne=d)),J=xa(0,1,Ae)*f}const ie=x?{done:!1,value:h[0]}:ne.next(J);E&&(ie.value=E(ie.value));let{done:ce}=ie;!x&&m!==null&&(ce=this.speed>=0?this.currentTime>=T:this.currentTime<=0);const ae=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ce);return ae&&c!==void 0&&(ie.value=Vs(h,this.options,c)),b&&b(ie.value),ae&&this.finish(),ie}get duration(){const{resolved:i}=this;return i?wa(i.calculatedDuration):0}get time(){return wa(this.currentTime)}set time(i){i=ka(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=wa(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=tN,onPlay:r,startTime:l}=this.options;this.driver||(this.driver=i(S=>this.tick(S))),r&&r();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=l??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const iN=new Set(["opacity","clipPath","filter","transform"]);function Td(n){let i;return()=>(i===void 0&&(i=n()),i)}const oN={linearEasing:void 0};function rN(n,i){const r=Td(n);return()=>{var l;return(l=oN[i])!==null&&l!==void 0?l:r()}}const bs=rN(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function uf(n){return!!(typeof n=="function"&&bs()||!n||typeof n=="string"&&(n in Yc||bs())||Ed(n)||Array.isArray(n)&&n.every(uf))}const ko=([n,i,r,l])=>`cubic-bezier(${n}, ${i}, ${r}, ${l})`,Yc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ko([0,.65,.55,1]),circOut:ko([.55,0,1,.45]),backIn:ko([.31,.01,.66,-.59]),backOut:ko([.33,1.53,.69,.99])};function cf(n,i){if(n)return typeof n=="function"&&bs()?ef(n,i):Ed(n)?ko(n):Array.isArray(n)?n.map(r=>cf(r,i)||Yc.easeOut):Yc[n]}function sN(n,i,r,{delay:l=0,duration:c=300,repeat:S=0,repeatType:d="loop",ease:E="easeInOut",times:h}={}){const m={[i]:r};h&&(m.offset=h);const T=cf(E,c);return Array.isArray(T)&&(m.easing=T),n.animate(m,{delay:l,duration:c,easing:Array.isArray(T)?"linear":T,fill:"both",iterations:S+1,direction:d==="reverse"?"alternate":"normal"})}function fm(n,i){n.timeline=i,n.onfinish=null}const lN=Td(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Gs=10,uN=2e4;function cN(n){return Ad(n.type)||n.type==="spring"||!uf(n.ease)}function dN(n,i){const r=new md({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let l={done:!1,value:n[0]};const c=[];let S=0;for(;!l.done&&S<uN;)l=r.sample(S),c.push(l.value),S+=Gs;return{times:void 0,keyframes:c,duration:S-Gs,ease:"linear"}}const df={anticipate:bT,backInOut:HT,circInOut:FT};function SN(n){return n in df}class Rm extends $T{constructor(i){super(i);const{name:r,motionValue:l,element:c,keyframes:S}=this.options;this.resolver=new QT(S,(d,E)=>this.onKeyframesResolved(d,E),r,l,c),this.resolver.scheduleResolve()}initPlayback(i,r){var l;let{duration:c=300,times:S,ease:d,type:E,motionValue:h,name:m,startTime:T}=this.options;if(!(!((l=h.owner)===null||l===void 0)&&l.current))return!1;if(typeof d=="string"&&bs()&&SN(d)&&(d=df[d]),cN(this.options)){const{onComplete:C,onUpdate:L,motionValue:G,element:K,...b}=this.options,M=dN(i,b);i=M.keyframes,i.length===1&&(i[1]=i[0]),c=M.duration,S=M.times,d=M.ease,E="keyframes"}const f=sN(h.owner.current,m,i,{...this.options,duration:c,times:S,ease:d});return f.startTime=T??this.calcStartTime(),this.pendingTimeline?(fm(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:C}=this.options;h.set(Vs(i,this.options,r)),C&&C(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:c,times:S,type:E,ease:d,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:r}=i;return wa(r)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:r}=i;return wa(r.currentTime||0)}set time(i){const{resolved:r}=this;if(!r)return;const{animation:l}=r;l.currentTime=ka(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:r}=i;return r.playbackRate}set speed(i){const{resolved:r}=this;if(!r)return;const{animation:l}=r;l.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:r}=i;return r.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:r}=i;return r.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:r}=this;if(!r)return zt;const{animation:l}=r;fm(l,i)}return zt}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:r}=i;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:r}=i;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:r,keyframes:l,duration:c,type:S,ease:d,times:E}=i;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:m,onUpdate:T,onComplete:f,element:C,...L}=this.options,G=new md({...L,keyframes:l,duration:c,type:S,ease:d,times:E,isGenerator:!0}),K=ka(this.time);m.setWithVelocity(G.sample(K-Gs).value,G.sample(K).value,Gs)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:r,name:l,repeatDelay:c,repeatType:S,damping:d,type:E}=i;return lN()&&l&&iN.has(l)&&r&&r.owner&&r.owner.current instanceof HTMLElement&&!r.owner.getProps().onUpdate&&!c&&S!=="mirror"&&d!==0&&E!=="inertia"}}const AN=Td(()=>window.ScrollTimeline!==void 0);class EN{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}then(i,r){return Promise.all(this.animations).then(i).catch(r)}getAll(i){return this.animations[0][i]}setAll(i,r){for(let l=0;l<this.animations.length;l++)this.animations[l][i]=r}attachTimeline(i,r){const l=this.animations.map(c=>AN()&&c.attachTimeline?c.attachTimeline(i):r(c));return()=>{l.forEach((c,S)=>{c&&c(),this.animations[S].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let r=0;r<this.animations.length;r++)i=Math.max(i,this.animations[r].duration);return i}runAll(i){this.animations.forEach(r=>r[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function hN({when:n,delay:i,delayChildren:r,staggerChildren:l,staggerDirection:c,repeat:S,repeatType:d,repeatDelay:E,from:h,elapsed:m,...T}){return!!Object.keys(T).length}const fd=(n,i,r,l={},c,S)=>d=>{const E=id(l,n)||{},h=E.delay||l.delay||0;let{elapsed:m=0}=l;m=m-ka(h);let T={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...E,delay:-m,onUpdate:C=>{i.set(C),E.onUpdate&&E.onUpdate(C)},onComplete:()=>{d(),E.onComplete&&E.onComplete()},name:n,motionValue:i,element:S?void 0:c};hN(E)||(T={...T,...wp(n,T)}),T.duration&&(T.duration=ka(T.duration)),T.repeatDelay&&(T.repeatDelay=ka(T.repeatDelay)),T.from!==void 0&&(T.keyframes[0]=T.from);let f=!1;if((T.type===!1||T.duration===0&&!T.repeatDelay)&&(T.duration=0,T.delay===0&&(f=!0)),f&&!S&&i.get()!==void 0){const C=Vs(T.keyframes,E);if(C!==void 0)return je.update(()=>{T.onUpdate(C),T.onComplete()}),new EN([])}return!S&&Rm.supports(T)?new Rm(T):new md(T)},mN=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),TN=n=>Fc(n)?n[n.length-1]||0:n;function Rd(n,i){n.indexOf(i)===-1&&n.push(i)}function Cd(n,i){const r=n.indexOf(i);r>-1&&n.splice(r,1)}class Od{constructor(){this.subscriptions=[]}add(i){return Rd(this.subscriptions,i),()=>Cd(this.subscriptions,i)}notify(i,r,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,r,l);else for(let S=0;S<c;S++){const d=this.subscriptions[S];d&&d(i,r,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Cm=30,fN=n=>!isNaN(parseFloat(n));class RN{constructor(i,r={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(l,c=!0)=>{const S=Ta.now();this.updatedAt!==S&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=Ta.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=fN(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new Od);const l=this.events[i].add(r);return i==="change"?()=>{l(),je.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i,r=!0){!r||!this.passiveEffect?this.updateAndNotify(i,r):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,r,l){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-l}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Ta.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Cm)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Cm);return tf(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Zo(n,i){return new RN(n,i)}function CN(n,i,r){n.hasValue(i)?n.getValue(i).set(r):n.addValue(i,Zo(r))}function ON(n,i){const r=xs(n,i);let{transitionEnd:l={},transition:c={},...S}=r||{};S={...S,...l};for(const d in S){const E=TN(S[d]);CN(n,d,E)}}const pd=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),pN="framerAppearId",Sf="data-"+pd(pN);function Af(n){return n.props[Sf]}const Nt=n=>!!(n&&n.getVelocity);function gN(n){return!!(Nt(n)&&n.add)}function zc(n,i){const r=n.getValue("willChange");if(gN(r))return r.add(i)}function NN({protectedKeys:n,needsAnimating:i},r){const l=n.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,l}function Ef(n,i,{delay:r=0,transitionOverride:l,type:c}={}){var S;let{transition:d=n.getDefaultTransition(),transitionEnd:E,...h}=i;l&&(d=l);const m=[],T=c&&n.animationState&&n.animationState.getState()[c];for(const f in h){const C=n.getValue(f,(S=n.latestValues[f])!==null&&S!==void 0?S:null),L=h[f];if(L===void 0||T&&NN(T,f))continue;const G={delay:r,...id(d||{},f)};let K=!1;if(window.MotionHandoffAnimation){const M=Af(n);if(M){const x=window.MotionHandoffAnimation(M,f,je);x!==null&&(G.startTime=x,K=!0)}}zc(n,f),C.start(fd(f,C,L,n.shouldReduceMotion&&Kn.has(f)?{type:!1}:G,n,K));const b=C.animation;b&&m.push(b)}return E&&Promise.all(m).then(()=>{je.update(()=>{E&&ON(n,E)})}),m}function jc(n,i,r={}){var l;const c=xs(n,i,r.type==="exit"?(l=n.presenceContext)===null||l===void 0?void 0:l.custom:void 0);let{transition:S=n.getDefaultTransition()||{}}=c||{};r.transitionOverride&&(S=r.transitionOverride);const d=c?()=>Promise.all(Ef(n,c,r)):()=>Promise.resolve(),E=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:T=0,staggerChildren:f,staggerDirection:C}=S;return IN(n,i,T+m,f,C,r)}:()=>Promise.resolve(),{when:h}=S;if(h){const[m,T]=h==="beforeChildren"?[d,E]:[E,d];return m().then(()=>T())}else return Promise.all([d(),E(r.delay)])}function IN(n,i,r=0,l=0,c=1,S){const d=[],E=(n.variantChildren.size-1)*l,h=c===1?(m=0)=>m*l:(m=0)=>E-m*l;return Array.from(n.variantChildren).sort(yN).forEach((m,T)=>{m.notify("AnimationStart",i),d.push(jc(m,i,{...S,delay:r+h(T)}).then(()=>m.notify("AnimationComplete",i)))}),Promise.all(d)}function yN(n,i){return n.sortNodePosition(i)}function LN(n,i,r={}){n.notify("AnimationStart",i);let l;if(Array.isArray(i)){const c=i.map(S=>jc(n,S,r));l=Promise.all(c)}else if(typeof i=="string")l=jc(n,i,r);else{const c=typeof i=="function"?xs(n,i,r.custom):i;l=Promise.all(Ef(n,c,r))}return l.then(()=>{n.notify("AnimationComplete",i)})}const MN=nd.length;function hf(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?hf(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const i={};for(let r=0;r<MN;r++){const l=nd[r],c=n.props[l];(jo(c)||c===!1)&&(i[l]=c)}return i}const PN=[...ad].reverse(),DN=ad.length;function BN(n){return i=>Promise.all(i.map(({animation:r,options:l})=>LN(n,r,l)))}function vN(n){let i=BN(n),r=Om(),l=!0;const c=h=>(m,T)=>{var f;const C=xs(n,T,h==="exit"?(f=n.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(C){const{transition:L,transitionEnd:G,...K}=C;m={...m,...K,...G}}return m};function S(h){i=h(n)}function d(h){const{props:m}=n,T=hf(n.parent)||{},f=[],C=new Set;let L={},G=1/0;for(let b=0;b<DN;b++){const M=PN[b],x=r[M],J=m[M]!==void 0?m[M]:T[M],ne=jo(J),ie=M===h?x.isActive:null;ie===!1&&(G=b);let ce=J===T[M]&&J!==m[M]&&ne;if(ce&&l&&n.manuallyAnimateOnMount&&(ce=!1),x.protectedKeys={...L},!x.isActive&&ie===null||!J&&!x.prevProp||ws(J)||typeof J=="boolean")continue;const ae=HN(x.prevProp,J);let te=ae||M===h&&x.isActive&&!ce&&ne||b>G&&ne,he=!1;const Ae=Array.isArray(J)?J:[J];let pe=Ae.reduce(c(M),{});ie===!1&&(pe={});const{prevResolvedValues:Re={}}=x,me={...Re,...pe},ve=j=>{te=!0,C.has(j)&&(he=!0,C.delete(j)),x.needsAnimating[j]=!0;const re=n.getValue(j);re&&(re.liveStyle=!1)};for(const j in me){const re=pe[j],ue=Re[j];if(L.hasOwnProperty(j))continue;let se=!1;Fc(re)&&Fc(ue)?se=!yT(re,ue):se=re!==ue,se?re!=null?ve(j):C.add(j):re!==void 0&&C.has(j)?ve(j):x.protectedKeys[j]=!0}x.prevProp=J,x.prevResolvedValues=pe,x.isActive&&(L={...L,...pe}),l&&n.blockInitialAnimation&&(te=!1),te&&(!(ce&&ae)||he)&&f.push(...Ae.map(j=>({animation:j,options:{type:M}})))}if(C.size){const b={};C.forEach(M=>{const x=n.getBaseTarget(M),J=n.getValue(M);J&&(J.liveStyle=!0),b[M]=x??null}),f.push({animation:b})}let K=!!f.length;return l&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(K=!1),l=!1,K?i(f):Promise.resolve()}function E(h,m){var T;if(r[h].isActive===m)return Promise.resolve();(T=n.variantChildren)===null||T===void 0||T.forEach(C=>{var L;return(L=C.animationState)===null||L===void 0?void 0:L.setActive(h,m)}),r[h].isActive=m;const f=d(h);for(const C in r)r[C].protectedKeys={};return f}return{animateChanges:d,setActive:E,setAnimateFunction:S,getState:()=>r,reset:()=>{r=Om(),l=!0}}}function HN(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!yT(i,n):!1}function Gn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Om(){return{animate:Gn(!0),whileInView:Gn(),whileHover:Gn(),whileTap:Gn(),whileDrag:Gn(),whileFocus:Gn(),exit:Gn()}}class mn{constructor(i){this.isMounted=!1,this.node=i}update(){}}class bN extends mn{constructor(i){super(i),i.animationState||(i.animationState=vN(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();ws(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let GN=0;class FN extends mn{constructor(){super(...arguments),this.id=GN++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===l)return;const c=this.node.animationState.setActive("exit",!i);r&&!i&&c.then(()=>r(this.id))}mount(){const{register:i}=this.node.presenceContext||{};i&&(this.unmount=i(this.id))}unmount(){}}const UN={animation:{Feature:bN},exit:{Feature:FN}},la={x:!1,y:!1};function mf(){return la.x||la.y}function kN(n,i,r){var l;if(n instanceof Element)return[n];if(typeof n=="string"){let c=document;const S=(l=void 0)!==null&&l!==void 0?l:c.querySelectorAll(n);return S?Array.from(S):[]}return Array.from(n)}function Tf(n,i){const r=kN(n),l=new AbortController,c={passive:!0,...i,signal:l.signal};return[r,c,()=>l.abort()]}function pm(n){return i=>{i.pointerType==="touch"||mf()||n(i)}}function wN(n,i,r={}){const[l,c,S]=Tf(n,r),d=pm(E=>{const{target:h}=E,m=i(E);if(typeof m!="function"||!h)return;const T=pm(f=>{m(f),h.removeEventListener("pointerleave",T)});h.addEventListener("pointerleave",T,c)});return l.forEach(E=>{E.addEventListener("pointerenter",d,c)}),S}const ff=(n,i)=>i?n===i?!0:ff(n,i.parentElement):!1,gd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,xN=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function VN(n){return xN.has(n.tagName)||n.tabIndex!==-1}const wo=new WeakSet;function gm(n){return i=>{i.key==="Enter"&&n(i)}}function pc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const KN=(n,i)=>{const r=n.currentTarget;if(!r)return;const l=gm(()=>{if(wo.has(r))return;pc(r,"down");const c=gm(()=>{pc(r,"up")}),S=()=>pc(r,"cancel");r.addEventListener("keyup",c,i),r.addEventListener("blur",S,i)});r.addEventListener("keydown",l,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",l),i)};function Nm(n){return gd(n)&&!mf()}function WN(n,i,r={}){const[l,c,S]=Tf(n,r),d=E=>{const h=E.currentTarget;if(!Nm(E)||wo.has(h))return;wo.add(h);const m=i(E),T=(L,G)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",C),!(!Nm(L)||!wo.has(h))&&(wo.delete(h),typeof m=="function"&&m(L,{success:G}))},f=L=>{T(L,r.useGlobalTarget||ff(h,L.target))},C=L=>{T(L,!1)};window.addEventListener("pointerup",f,c),window.addEventListener("pointercancel",C,c)};return l.forEach(E=>{!VN(E)&&E.getAttribute("tabindex")===null&&(E.tabIndex=0),(r.useGlobalTarget?window:E).addEventListener("pointerdown",d,c),E.addEventListener("focus",m=>KN(m,c),c)}),S}function YN(n){return n==="x"||n==="y"?la[n]?null:(la[n]=!0,()=>{la[n]=!1}):la.x||la.y?null:(la.x=la.y=!0,()=>{la.x=la.y=!1})}function ar(n){return{point:{x:n.pageX,y:n.pageY}}}const zN=n=>i=>gd(i)&&n(i,ar(i));function Xo(n,i,r,l={passive:!0}){return n.addEventListener(i,r,l),()=>n.removeEventListener(i,r)}function Ko(n,i,r,l){return Xo(n,i,zN(r),l)}const Im=(n,i)=>Math.abs(n-i);function jN(n,i){const r=Im(n.x,i.x),l=Im(n.y,i.y);return Math.sqrt(r**2+l**2)}class Rf{constructor(i,r,{transformPagePoint:l,contextWindow:c,dragSnapToOrigin:S=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Nc(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,L=jN(f.offset,{x:0,y:0})>=3;if(!C&&!L)return;const{point:G}=f,{timestamp:K}=Rt;this.history.push({...G,timestamp:K});const{onStart:b,onMove:M}=this.handlers;C||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),M&&M(this.lastMoveEvent,f)},this.handlePointerMove=(f,C)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=gc(C,this.transformPagePoint),je.update(this.updatePoint,!0)},this.handlePointerUp=(f,C)=>{this.end();const{onEnd:L,onSessionEnd:G,resumeAnimation:K}=this.handlers;if(this.dragSnapToOrigin&&K&&K(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Nc(f.type==="pointercancel"?this.lastMoveEventInfo:gc(C,this.transformPagePoint),this.history);this.startEvent&&L&&L(f,b),G&&G(f,b)},!gd(i))return;this.dragSnapToOrigin=S,this.handlers=r,this.transformPagePoint=l,this.contextWindow=c||window;const d=ar(i),E=gc(d,this.transformPagePoint),{point:h}=E,{timestamp:m}=Rt;this.history=[{...h,timestamp:m}];const{onSessionStart:T}=r;T&&T(i,Nc(E,this.history)),this.removeListeners=tr(Ko(this.contextWindow,"pointermove",this.handlePointerMove),Ko(this.contextWindow,"pointerup",this.handlePointerUp),Ko(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),En(this.updatePoint)}}function gc(n,i){return i?{point:i(n.point)}:n}function ym(n,i){return{x:n.x-i.x,y:n.y-i.y}}function Nc({point:n},i){return{point:n,delta:ym(n,Cf(i)),offset:ym(n,JN(i)),velocity:_N(i,.1)}}function JN(n){return n[0]}function Cf(n){return n[n.length-1]}function _N(n,i){if(n.length<2)return{x:0,y:0};let r=n.length-1,l=null;const c=Cf(n);for(;r>=0&&(l=n[r],!(c.timestamp-l.timestamp>ka(i)));)r--;if(!l)return{x:0,y:0};const S=wa(c.timestamp-l.timestamp);if(S===0)return{x:0,y:0};const d={x:(c.x-l.x)/S,y:(c.y-l.y)/S};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Bi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const Of=1e-4,ZN=1-Of,XN=1+Of,pf=.01,qN=0-pf,QN=0+pf;function jt(n){return n.max-n.min}function $N(n,i,r){return Math.abs(n-i)<=r}function Lm(n,i,r,l=.5){n.origin=l,n.originPoint=_e(i.min,i.max,n.origin),n.scale=jt(r)/jt(i),n.translate=_e(r.min,r.max,n.origin)-n.originPoint,(n.scale>=ZN&&n.scale<=XN||isNaN(n.scale))&&(n.scale=1),(n.translate>=qN&&n.translate<=QN||isNaN(n.translate))&&(n.translate=0)}function Wo(n,i,r,l){Lm(n.x,i.x,r.x,l?l.originX:void 0),Lm(n.y,i.y,r.y,l?l.originY:void 0)}function Mm(n,i,r){n.min=r.min+i.min,n.max=n.min+jt(i)}function eI(n,i,r){Mm(n.x,i.x,r.x),Mm(n.y,i.y,r.y)}function Pm(n,i,r){n.min=i.min-r.min,n.max=n.min+jt(i)}function Yo(n,i,r){Pm(n.x,i.x,r.x),Pm(n.y,i.y,r.y)}function tI(n,{min:i,max:r},l){return i!==void 0&&n<i?n=l?_e(i,n,l.min):Math.max(n,i):r!==void 0&&n>r&&(n=l?_e(r,n,l.max):Math.min(n,r)),n}function Dm(n,i,r){return{min:i!==void 0?n.min+i:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function aI(n,{top:i,left:r,bottom:l,right:c}){return{x:Dm(n.x,r,c),y:Dm(n.y,i,l)}}function Bm(n,i){let r=i.min-n.min,l=i.max-n.max;return i.max-i.min<n.max-n.min&&([r,l]=[l,r]),{min:r,max:l}}function nI(n,i){return{x:Bm(n.x,i.x),y:Bm(n.y,i.y)}}function iI(n,i){let r=.5;const l=jt(n),c=jt(i);return c>l?r=ki(i.min,i.max-l,n.min):l>c&&(r=ki(n.min,n.max-c,i.min)),xa(0,1,r)}function oI(n,i){const r={};return i.min!==void 0&&(r.min=i.min-n.min),i.max!==void 0&&(r.max=i.max-n.min),r}const Jc=.35;function rI(n=Jc){return n===!1?n=0:n===!0&&(n=Jc),{x:vm(n,"left","right"),y:vm(n,"top","bottom")}}function vm(n,i,r){return{min:Hm(n,i),max:Hm(n,r)}}function Hm(n,i){return typeof n=="number"?n:n[i]||0}const bm=()=>({translate:0,scale:1,origin:0,originPoint:0}),vi=()=>({x:bm(),y:bm()}),Gm=()=>({min:0,max:0}),tt=()=>({x:Gm(),y:Gm()});function ia(n){return[n("x"),n("y")]}function gf({top:n,left:i,right:r,bottom:l}){return{x:{min:i,max:r},y:{min:n,max:l}}}function sI({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function lI(n,i){if(!i)return n;const r=i({x:n.left,y:n.top}),l=i({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:l.y,right:l.x}}function Ic(n){return n===void 0||n===1}function _c({scale:n,scaleX:i,scaleY:r}){return!Ic(n)||!Ic(i)||!Ic(r)}function Un(n){return _c(n)||Nf(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Nf(n){return Fm(n.x)||Fm(n.y)}function Fm(n){return n&&n!=="0%"}function Fs(n,i,r){const l=n-r,c=i*l;return r+c}function Um(n,i,r,l,c){return c!==void 0&&(n=Fs(n,c,l)),Fs(n,r,l)+i}function Zc(n,i=0,r=1,l,c){n.min=Um(n.min,i,r,l,c),n.max=Um(n.max,i,r,l,c)}function If(n,{x:i,y:r}){Zc(n.x,i.translate,i.scale,i.originPoint),Zc(n.y,r.translate,r.scale,r.originPoint)}const km=.999999999999,wm=1.0000000000001;function uI(n,i,r,l=!1){const c=r.length;if(!c)return;i.x=i.y=1;let S,d;for(let E=0;E<c;E++){S=r[E],d=S.projectionDelta;const{visualElement:h}=S.options;h&&h.props.style&&h.props.style.display==="contents"||(l&&S.options.layoutScroll&&S.scroll&&S!==S.root&&bi(n,{x:-S.scroll.offset.x,y:-S.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,If(n,d)),l&&Un(S.latestValues)&&bi(n,S.latestValues))}i.x<wm&&i.x>km&&(i.x=1),i.y<wm&&i.y>km&&(i.y=1)}function Hi(n,i){n.min=n.min+i,n.max=n.max+i}function xm(n,i,r,l,c=.5){const S=_e(n.min,n.max,c);Zc(n,i,r,S,l)}function bi(n,i){xm(n.x,i.x,i.scaleX,i.scale,i.originX),xm(n.y,i.y,i.scaleY,i.scale,i.originY)}function yf(n,i){return gf(lI(n.getBoundingClientRect(),i))}function cI(n,i,r){const l=yf(n,r),{scroll:c}=i;return c&&(Hi(l.x,c.offset.x),Hi(l.y,c.offset.y)),l}const Lf=({current:n})=>n?n.ownerDocument.defaultView:null,dI=new WeakMap;class SI{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=tt(),this.visualElement=i}start(i,{snapToCursor:r=!1}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const c=T=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(ar(T).point)},S=(T,f)=>{const{drag:C,dragPropagation:L,onDragStart:G}=this.getProps();if(C&&!L&&(this.openDragLock&&this.openDragLock(),this.openDragLock=YN(C),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ia(b=>{let M=this.getAxisMotionValue(b).get()||0;if(ma.test(M)){const{projection:x}=this.visualElement;if(x&&x.layout){const J=x.layout.layoutBox[b];J&&(M=jt(J)*(parseFloat(M)/100))}}this.originPoint[b]=M}),G&&je.postRender(()=>G(T,f)),zc(this.visualElement,"transform");const{animationState:K}=this.visualElement;K&&K.setActive("whileDrag",!0)},d=(T,f)=>{const{dragPropagation:C,dragDirectionLock:L,onDirectionLock:G,onDrag:K}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:b}=f;if(L&&this.currentDirection===null){this.currentDirection=AI(b),this.currentDirection!==null&&G&&G(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),K&&K(T,f)},E=(T,f)=>this.stop(T,f),h=()=>ia(T=>{var f;return this.getAnimationState(T)==="paused"&&((f=this.getAxisMotionValue(T).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Rf(i,{onSessionStart:c,onStart:S,onMove:d,onSessionEnd:E,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:Lf(this.visualElement)})}stop(i,r){const l=this.isDragging;if(this.cancel(),!l)return;const{velocity:c}=r;this.startAnimation(c);const{onDragEnd:S}=this.getProps();S&&je.postRender(()=>S(i,r))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(i,r,l){const{drag:c}=this.getProps();if(!l||!gs(i,c,this.currentDirection))return;const S=this.getAxisMotionValue(i);let d=this.originPoint[i]+l[i];this.constraints&&this.constraints[i]&&(d=tI(d,this.constraints[i],this.elastic[i])),S.set(d)}resolveConstraints(){var i;const{dragConstraints:r,dragElastic:l}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,S=this.constraints;r&&Bi(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&c?this.constraints=aI(c.layoutBox,r):this.constraints=!1,this.elastic=rI(l),S!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&ia(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=oI(c.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!Bi(i))return!1;const l=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const S=cI(l,c.root,this.visualElement.getTransformPagePoint());let d=nI(c.layout.layoutBox,S);if(r){const E=r(sI(d));this.hasMutatedConstraints=!!E,E&&(d=gf(E))}return d}startAnimation(i){const{drag:r,dragMomentum:l,dragElastic:c,dragTransition:S,dragSnapToOrigin:d,onDragTransitionEnd:E}=this.getProps(),h=this.constraints||{},m=ia(T=>{if(!gs(T,r,this.currentDirection))return;let f=h&&h[T]||{};d&&(f={min:0,max:0});const C=c?200:1e6,L=c?40:1e7,G={type:"inertia",velocity:l?i[T]:0,bounceStiffness:C,bounceDamping:L,timeConstant:750,restDelta:1,restSpeed:10,...S,...f};return this.startAxisValueAnimation(T,G)});return Promise.all(m).then(E)}startAxisValueAnimation(i,r){const l=this.getAxisMotionValue(i);return zc(this.visualElement,i),l.start(fd(i,l,0,r,this.visualElement,!1))}stopAnimation(){ia(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){ia(i=>{var r;return(r=this.getAxisMotionValue(i).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(i){var r;return(r=this.getAxisMotionValue(i).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,l=this.visualElement.getProps(),c=l[r];return c||this.visualElement.getValue(i,(l.initial?l.initial[i]:void 0)||0)}snapToCursor(i){ia(r=>{const{drag:l}=this.getProps();if(!gs(r,l,this.currentDirection))return;const{projection:c}=this.visualElement,S=this.getAxisMotionValue(r);if(c&&c.layout){const{min:d,max:E}=c.layout.layoutBox[r];S.set(i[r]-_e(d,E,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:l}=this.visualElement;if(!Bi(r)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};ia(d=>{const E=this.getAxisMotionValue(d);if(E&&this.constraints!==!1){const h=E.get();c[d]=iI({min:h,max:h},this.constraints[d])}});const{transformTemplate:S}=this.visualElement.getProps();this.visualElement.current.style.transform=S?S({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),ia(d=>{if(!gs(d,i,null))return;const E=this.getAxisMotionValue(d),{min:h,max:m}=this.constraints[d];E.set(_e(h,m,c[d]))})}addListeners(){if(!this.visualElement.current)return;dI.set(this.visualElement,this);const i=this.visualElement.current,r=Ko(i,"pointerdown",h=>{const{drag:m,dragListener:T=!0}=this.getProps();m&&T&&this.start(h)}),l=()=>{const{dragConstraints:h}=this.getProps();Bi(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,S=c.addEventListener("measure",l);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),je.read(l);const d=Xo(window,"resize",()=>this.scalePositionWithinConstraints()),E=c.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(ia(T=>{const f=this.getAxisMotionValue(T);f&&(this.originPoint[T]+=h[T].translate,f.set(f.get()+h[T].translate))}),this.visualElement.render())}));return()=>{d(),r(),S(),E&&E()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:S=!1,dragElastic:d=Jc,dragMomentum:E=!0}=i;return{...i,drag:r,dragDirectionLock:l,dragPropagation:c,dragConstraints:S,dragElastic:d,dragMomentum:E}}}function gs(n,i,r){return(i===!0||i===n)&&(r===null||r===n)}function AI(n,i=10){let r=null;return Math.abs(n.y)>i?r="y":Math.abs(n.x)>i&&(r="x"),r}class EI extends mn{constructor(i){super(i),this.removeGroupControls=zt,this.removeListeners=zt,this.controls=new SI(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||zt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Vm=n=>(i,r)=>{n&&je.postRender(()=>n(i,r))};class hI extends mn{constructor(){super(...arguments),this.removePointerDownListener=zt}onPointerDown(i){this.session=new Rf(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Lf(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:Vm(i),onStart:Vm(r),onMove:l,onEnd:(S,d)=>{delete this.session,c&&je.postRender(()=>c(S,d))}}}mount(){this.removePointerDownListener=Ko(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ks=y.createContext(null);function mI(){const n=y.useContext(Ks);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:l}=n,c=y.useId();y.useEffect(()=>l(c),[]);const S=y.useCallback(()=>r&&r(c),[c,r]);return!i&&r?[!1,S]:[!0]}const Nd=y.createContext({}),Mf=y.createContext({}),Ms={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Km(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Uo={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(Oe.test(n))n=parseFloat(n);else return n;const r=Km(n,i.target.x),l=Km(n,i.target.y);return`${r}% ${l}%`}},TI={correct:(n,{treeScale:i,projectionDelta:r})=>{const l=n,c=hn.parse(n);if(c.length>5)return l;const S=hn.createTransformer(n),d=typeof c[0]!="number"?1:0,E=r.x.scale*i.x,h=r.y.scale*i.y;c[0+d]/=E,c[1+d]/=h;const m=_e(E,h,.5);return typeof c[2+d]=="number"&&(c[2+d]/=m),typeof c[3+d]=="number"&&(c[3+d]/=m),S(c)}},Us={};function fI(n){Object.assign(Us,n)}const{schedule:Id}=MT(queueMicrotask,!1);class RI extends y.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:l,layoutId:c}=this.props,{projection:S}=i;fI(CI),S&&(r.group&&r.group.add(S),l&&l.register&&c&&l.register(S),S.root.didUpdate(),S.addEventListener("animationComplete",()=>{this.safeToRemove()}),S.setOptions({...S.options,onExitComplete:()=>this.safeToRemove()})),Ms.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:l,drag:c,isPresent:S}=this.props,d=l.projection;return d&&(d.isPresent=S,c||i.layoutDependency!==r||r===void 0?d.willUpdate():this.safeToRemove(),i.isPresent!==S&&(S?d.promote():d.relegate()||je.postRender(()=>{const E=d.getStack();(!E||!E.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Id.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:l}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Pf(n){const[i,r]=mI(),l=y.useContext(Nd);return p.jsx(RI,{...n,layoutGroup:l,switchLayoutGroup:y.useContext(Mf),isPresent:i,safeToRemove:r})}const CI={borderRadius:{...Uo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Uo,borderTopRightRadius:Uo,borderBottomLeftRadius:Uo,borderBottomRightRadius:Uo,boxShadow:TI},Df=["TopLeft","TopRight","BottomLeft","BottomRight"],OI=Df.length,Wm=n=>typeof n=="string"?parseFloat(n):n,Ym=n=>typeof n=="number"||Oe.test(n);function pI(n,i,r,l,c,S){c?(n.opacity=_e(0,r.opacity!==void 0?r.opacity:1,gI(l)),n.opacityExit=_e(i.opacity!==void 0?i.opacity:1,0,NI(l))):S&&(n.opacity=_e(i.opacity!==void 0?i.opacity:1,r.opacity!==void 0?r.opacity:1,l));for(let d=0;d<OI;d++){const E=`border${Df[d]}Radius`;let h=zm(i,E),m=zm(r,E);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||Ym(h)===Ym(m)?(n[E]=Math.max(_e(Wm(h),Wm(m),l),0),(ma.test(m)||ma.test(h))&&(n[E]+="%")):n[E]=m}(i.rotate||r.rotate)&&(n.rotate=_e(i.rotate||0,r.rotate||0,l))}function zm(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const gI=Bf(0,.5,GT),NI=Bf(.5,.95,zt);function Bf(n,i,r){return l=>l<n?0:l>i?1:r(ki(n,i,l))}function jm(n,i){n.min=i.min,n.max=i.max}function na(n,i){jm(n.x,i.x),jm(n.y,i.y)}function Jm(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function _m(n,i,r,l,c){return n-=i,n=Fs(n,1/r,l),c!==void 0&&(n=Fs(n,1/c,l)),n}function II(n,i=0,r=1,l=.5,c,S=n,d=n){if(ma.test(i)&&(i=parseFloat(i),i=_e(d.min,d.max,i/100)-d.min),typeof i!="number")return;let E=_e(S.min,S.max,l);n===S&&(E-=i),n.min=_m(n.min,i,r,E,c),n.max=_m(n.max,i,r,E,c)}function Zm(n,i,[r,l,c],S,d){II(n,i[r],i[l],i[c],i.scale,S,d)}const yI=["x","scaleX","originX"],LI=["y","scaleY","originY"];function Xm(n,i,r,l){Zm(n.x,i,yI,r?r.x:void 0,l?l.x:void 0),Zm(n.y,i,LI,r?r.y:void 0,l?l.y:void 0)}function qm(n){return n.translate===0&&n.scale===1}function vf(n){return qm(n.x)&&qm(n.y)}function Qm(n,i){return n.min===i.min&&n.max===i.max}function MI(n,i){return Qm(n.x,i.x)&&Qm(n.y,i.y)}function $m(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Hf(n,i){return $m(n.x,i.x)&&$m(n.y,i.y)}function eT(n){return jt(n.x)/jt(n.y)}function tT(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class PI{constructor(){this.members=[]}add(i){Rd(this.members,i),i.scheduleRender()}remove(i){if(Cd(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(c=>i===c);if(r===0)return!1;let l;for(let c=r;c>=0;c--){const S=this.members[c];if(S.isPresent!==!1){l=S;break}}return l?(this.promote(l),!0):!1}promote(i,r){const l=this.lead;if(i!==l&&(this.prevLead=l,this.lead=i,i.show(),l)){l.instance&&l.scheduleRender(),i.scheduleRender(),i.resumeFrom=l,r&&(i.resumeFrom.preserveOpacity=!0),l.snapshot&&(i.snapshot=l.snapshot,i.snapshot.latestValues=l.animationValues||l.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:l}=i;r.onExitComplete&&r.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function DI(n,i,r){let l="";const c=n.x.translate/i.x,S=n.y.translate/i.y,d=(r==null?void 0:r.z)||0;if((c||S||d)&&(l=`translate3d(${c}px, ${S}px, ${d}px) `),(i.x!==1||i.y!==1)&&(l+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:m,rotate:T,rotateX:f,rotateY:C,skewX:L,skewY:G}=r;m&&(l=`perspective(${m}px) ${l}`),T&&(l+=`rotate(${T}deg) `),f&&(l+=`rotateX(${f}deg) `),C&&(l+=`rotateY(${C}deg) `),L&&(l+=`skewX(${L}deg) `),G&&(l+=`skewY(${G}deg) `)}const E=n.x.scale*i.x,h=n.y.scale*i.y;return(E!==1||h!==1)&&(l+=`scale(${E}, ${h})`),l||"none"}const BI=(n,i)=>n.depth-i.depth;class vI{constructor(){this.children=[],this.isDirty=!1}add(i){Rd(this.children,i),this.isDirty=!0}remove(i){Cd(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(BI),this.isDirty=!1,this.children.forEach(i)}}function Ps(n){const i=Nt(n)?n.get():n;return mN(i)?i.toValue():i}function HI(n,i){const r=Ta.now(),l=({timestamp:c})=>{const S=c-r;S>=i&&(En(l),n(S-i))};return je.read(l,!0),()=>En(l)}function bI(n){return n instanceof SVGElement&&n.tagName!=="svg"}function GI(n,i,r){const l=Nt(n)?n:Zo(n);return l.start(fd("",l,i,r)),l.animation}const kn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},xo=typeof window<"u"&&window.MotionDebug!==void 0,yc=["","X","Y","Z"],FI={visibility:"hidden"},aT=1e3;let UI=0;function Lc(n,i,r,l){const{latestValues:c}=i;c[n]&&(r[n]=c[n],i.setStaticValue(n,0),l&&(l[n]=0))}function bf(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const r=Af(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:S}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",je,!(c||S))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&bf(l)}function Gf({attachResizeListener:n,defaultParent:i,measureScroll:r,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(d={},E=i==null?void 0:i()){this.id=UI++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xo&&(kn.totalNodes=kn.resolvedTargetDeltas=kn.recalculatedProjection=0),this.nodes.forEach(xI),this.nodes.forEach(zI),this.nodes.forEach(jI),this.nodes.forEach(VI),xo&&window.MotionDebug.record(kn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=E?E.root||E:this,this.path=E?[...E.path,E]:[],this.parent=E,this.depth=E?E.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new vI)}addEventListener(d,E){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Od),this.eventHandlers.get(d).add(E)}notifyListeners(d,...E){const h=this.eventHandlers.get(d);h&&h.notify(...E)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,E=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=bI(d),this.instance=d;const{layoutId:h,layout:m,visualElement:T}=this.options;if(T&&!T.current&&T.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),E&&(m||h)&&(this.isLayoutDirty=!0),n){let f;const C=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=HI(C,250),Ms.hasAnimatedSinceResize&&(Ms.hasAnimatedSinceResize=!1,this.nodes.forEach(iT))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&T&&(h||m)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:C,hasRelativeTargetChanged:L,layout:G})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const K=this.options.transition||T.getDefaultTransition()||qI,{onLayoutAnimationStart:b,onLayoutAnimationComplete:M}=T.getProps(),x=!this.targetLayout||!Hf(this.targetLayout,G)||L,J=!C&&L;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||J||C&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,J);const ne={...id(K,"layout"),onPlay:b,onComplete:M};(T.shouldReduceMotion||this.options.layoutRoot)&&(ne.delay=0,ne.type=!1),this.startAnimation(ne)}else C||iT(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=G})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,En(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(JI),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&bf(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let T=0;T<this.path.length;T++){const f=this.path[T];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:E,layout:h}=this.options;if(E===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(nT);return}this.isUpdating||this.nodes.forEach(WI),this.isUpdating=!1,this.nodes.forEach(YI),this.nodes.forEach(kI),this.nodes.forEach(wI),this.clearAllSnapshots();const E=Ta.now();Rt.delta=xa(0,1e3/60,E-Rt.timestamp),Rt.timestamp=E,Rt.isProcessing=!0,Tc.update.process(Rt),Tc.preRender.process(Rt),Tc.render.process(Rt),Rt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Id.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(KI),this.sharedNodes.forEach(_I)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=tt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:E}=this.options;E&&E.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let E=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(E=!1),E){const h=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,E=this.projectionDelta&&!vf(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,T=m!==this.prevTransformTemplateValue;d&&(E||Un(this.latestValues)||T)&&(c(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const E=this.measurePageBox();let h=this.removeElementScroll(E);return d&&(h=this.removeTransform(h)),QI(h),{animationId:this.root.animationId,measuredBox:E,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:E}=this.options;if(!E)return tt();const h=E.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some($I))){const{scroll:T}=this.root;T&&(Hi(h.x,T.offset.x),Hi(h.y,T.offset.y))}return h}removeElementScroll(d){var E;const h=tt();if(na(h,d),!((E=this.scroll)===null||E===void 0)&&E.wasRoot)return h;for(let m=0;m<this.path.length;m++){const T=this.path[m],{scroll:f,options:C}=T;T!==this.root&&f&&C.layoutScroll&&(f.wasRoot&&na(h,d),Hi(h.x,f.offset.x),Hi(h.y,f.offset.y))}return h}applyTransform(d,E=!1){const h=tt();na(h,d);for(let m=0;m<this.path.length;m++){const T=this.path[m];!E&&T.options.layoutScroll&&T.scroll&&T!==T.root&&bi(h,{x:-T.scroll.offset.x,y:-T.scroll.offset.y}),Un(T.latestValues)&&bi(h,T.latestValues)}return Un(this.latestValues)&&bi(h,this.latestValues),h}removeTransform(d){const E=tt();na(E,d);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!Un(m.latestValues))continue;_c(m.latestValues)&&m.updateSnapshot();const T=tt(),f=m.measurePageBox();na(T,f),Xm(E,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,T)}return Un(this.latestValues)&&Xm(E,this.latestValues),E}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Rt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var E;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||!((E=this.parent)===null||E===void 0)&&E.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:C}=this.options;if(!(!this.layout||!(f||C))){if(this.resolvedRelativeTargetAt=Rt.timestamp,!this.targetDelta&&!this.relativeTarget){const L=this.getClosestProjectingParent();L&&L.layout&&this.animationProgress!==1?(this.relativeParent=L,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tt(),this.relativeTargetOrigin=tt(),Yo(this.relativeTargetOrigin,this.layout.layoutBox,L.layout.layoutBox),na(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=tt(),this.targetWithTransforms=tt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eI(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):na(this.target,this.layout.layoutBox),If(this.target,this.targetDelta)):na(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const L=this.getClosestProjectingParent();L&&!!L.resumingFrom==!!this.resumingFrom&&!L.options.layoutScroll&&L.target&&this.animationProgress!==1?(this.relativeParent=L,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tt(),this.relativeTargetOrigin=tt(),Yo(this.relativeTargetOrigin,this.target,L.target),na(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}xo&&kn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||_c(this.parent.latestValues)||Nf(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const E=this.getLead(),h=!!this.resumingFrom||this!==E;let m=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===Rt.timestamp&&(m=!1),m)return;const{layout:T,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(T||f))return;na(this.layoutCorrected,this.layout.layoutBox);const C=this.treeScale.x,L=this.treeScale.y;uI(this.layoutCorrected,this.treeScale,this.path,h),E.layout&&!E.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(E.target=E.layout.layoutBox,E.targetWithTransforms=tt());const{target:G}=E;if(!G){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Jm(this.prevProjectionDelta.x,this.projectionDelta.x),Jm(this.prevProjectionDelta.y,this.projectionDelta.y)),Wo(this.projectionDelta,this.layoutCorrected,G,this.latestValues),(this.treeScale.x!==C||this.treeScale.y!==L||!tT(this.projectionDelta.x,this.prevProjectionDelta.x)||!tT(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",G)),xo&&kn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var E;if((E=this.options.visualElement)===null||E===void 0||E.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=vi(),this.projectionDelta=vi(),this.projectionDeltaWithTransform=vi()}setAnimationOrigin(d,E=!1){const h=this.snapshot,m=h?h.latestValues:{},T={...this.latestValues},f=vi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!E;const C=tt(),L=h?h.source:void 0,G=this.layout?this.layout.source:void 0,K=L!==G,b=this.getStack(),M=!b||b.members.length<=1,x=!!(K&&!M&&this.options.crossfade===!0&&!this.path.some(XI));this.animationProgress=0;let J;this.mixTargetDelta=ne=>{const ie=ne/1e3;oT(f.x,d.x,ie),oT(f.y,d.y,ie),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Yo(C,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ZI(this.relativeTarget,this.relativeTargetOrigin,C,ie),J&&MI(this.relativeTarget,J)&&(this.isProjectionDirty=!1),J||(J=tt()),na(J,this.relativeTarget)),K&&(this.animationValues=T,pI(T,m,this.latestValues,ie,x,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=ie},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(En(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=je.update(()=>{Ms.hasAnimatedSinceResize=!0,this.currentAnimation=GI(0,aT,{...d,onUpdate:E=>{this.mixTargetDelta(E),d.onUpdate&&d.onUpdate(E)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(aT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:E,target:h,layout:m,latestValues:T}=d;if(!(!E||!h||!m)){if(this!==d&&this.layout&&m&&Ff(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||tt();const f=jt(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+f;const C=jt(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+C}na(E,h),bi(E,T),Wo(this.projectionDeltaWithTransform,this.layoutCorrected,E,T)}}registerSharedNode(d,E){this.sharedNodes.has(d)||this.sharedNodes.set(d,new PI),this.sharedNodes.get(d).add(E);const m=E.options.initialPromotionConfig;E.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(E):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:E}=this.options;return E?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:E}=this.options;return E?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:E,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),E&&this.setOptions({transition:E})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let E=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(E=!0),!E)return;const m={};h.z&&Lc("z",d,m,this.animationValues);for(let T=0;T<yc.length;T++)Lc(`rotate${yc[T]}`,d,m,this.animationValues),Lc(`skew${yc[T]}`,d,m,this.animationValues);d.render();for(const T in m)d.setStaticValue(T,m[T]),this.animationValues&&(this.animationValues[T]=m[T]);d.scheduleRender()}getProjectionStyles(d){var E,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return FI;const m={visibility:""},T=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=Ps(d==null?void 0:d.pointerEvents)||"",m.transform=T?T(this.latestValues,""):"none",m;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const K={};return this.options.layoutId&&(K.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,K.pointerEvents=Ps(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!Un(this.latestValues)&&(K.transform=T?T({},""):"none",this.hasProjected=!1),K}const C=f.animationValues||f.latestValues;this.applyTransformsToTarget(),m.transform=DI(this.projectionDeltaWithTransform,this.treeScale,C),T&&(m.transform=T(C,m.transform));const{x:L,y:G}=this.projectionDelta;m.transformOrigin=`${L.origin*100}% ${G.origin*100}% 0`,f.animationValues?m.opacity=f===this?(h=(E=C.opacity)!==null&&E!==void 0?E:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:C.opacityExit:m.opacity=f===this?C.opacity!==void 0?C.opacity:"":C.opacityExit!==void 0?C.opacityExit:0;for(const K in Us){if(C[K]===void 0)continue;const{correct:b,applyTo:M}=Us[K],x=m.transform==="none"?C[K]:b(C[K],f);if(M){const J=M.length;for(let ne=0;ne<J;ne++)m[M[ne]]=x}else m[K]=x}return this.options.layoutId&&(m.pointerEvents=f===this?Ps(d==null?void 0:d.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var E;return(E=d.currentAnimation)===null||E===void 0?void 0:E.stop()}),this.root.nodes.forEach(nT),this.root.sharedNodes.clear()}}}function kI(n){n.updateLayout()}function wI(n){var i;const r=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:c}=n.layout,{animationType:S}=n.options,d=r.source!==n.layout.source;S==="size"?ia(f=>{const C=d?r.measuredBox[f]:r.layoutBox[f],L=jt(C);C.min=l[f].min,C.max=C.min+L}):Ff(S,r.layoutBox,l)&&ia(f=>{const C=d?r.measuredBox[f]:r.layoutBox[f],L=jt(l[f]);C.max=C.min+L,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[f].max=n.relativeTarget[f].min+L)});const E=vi();Wo(E,l,r.layoutBox);const h=vi();d?Wo(h,n.applyTransform(c,!0),r.measuredBox):Wo(h,l,r.layoutBox);const m=!vf(E);let T=!1;if(!n.resumeFrom){const f=n.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:C,layout:L}=f;if(C&&L){const G=tt();Yo(G,r.layoutBox,C.layoutBox);const K=tt();Yo(K,l,L.layoutBox),Hf(G,K)||(T=!0),f.options.layoutRoot&&(n.relativeTarget=K,n.relativeTargetOrigin=G,n.relativeParent=f)}}}n.notifyListeners("didUpdate",{layout:l,snapshot:r,delta:h,layoutDelta:E,hasLayoutChanged:m,hasRelativeTargetChanged:T})}else if(n.isLead()){const{onExitComplete:l}=n.options;l&&l()}n.options.transition=void 0}function xI(n){xo&&kn.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function VI(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function KI(n){n.clearSnapshot()}function nT(n){n.clearMeasurements()}function WI(n){n.isLayoutDirty=!1}function YI(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function iT(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function zI(n){n.resolveTargetDelta()}function jI(n){n.calcProjection()}function JI(n){n.resetSkewAndRotation()}function _I(n){n.removeLeadSnapshot()}function oT(n,i,r){n.translate=_e(i.translate,0,r),n.scale=_e(i.scale,1,r),n.origin=i.origin,n.originPoint=i.originPoint}function rT(n,i,r,l){n.min=_e(i.min,r.min,l),n.max=_e(i.max,r.max,l)}function ZI(n,i,r,l){rT(n.x,i.x,r.x,l),rT(n.y,i.y,r.y,l)}function XI(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const qI={duration:.45,ease:[.4,0,.1,1]},sT=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),lT=sT("applewebkit/")&&!sT("chrome/")?Math.round:zt;function uT(n){n.min=lT(n.min),n.max=lT(n.max)}function QI(n){uT(n.x),uT(n.y)}function Ff(n,i,r){return n==="position"||n==="preserve-aspect"&&!$N(eT(i),eT(r),.2)}function $I(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const ey=Gf({attachResizeListener:(n,i)=>Xo(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Mc={current:void 0},Uf=Gf({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Mc.current){const n=new ey({});n.mount(window),n.setOptions({layoutScroll:!0}),Mc.current=n}return Mc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),ty={pan:{Feature:hI},drag:{Feature:EI,ProjectionNode:Uf,MeasureLayout:Pf}};function cT(n,i,r){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,S=l[c];S&&je.postRender(()=>S(i,ar(i)))}class ay extends mn{mount(){const{current:i}=this.node;i&&(this.unmount=wN(i,r=>(cT(this.node,r,"Start"),l=>cT(this.node,l,"End"))))}unmount(){}}class ny extends mn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tr(Xo(this.node.current,"focus",()=>this.onFocus()),Xo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function dT(n,i,r){const{props:l}=n;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),S=l[c];S&&je.postRender(()=>S(i,ar(i)))}class iy extends mn{mount(){const{current:i}=this.node;i&&(this.unmount=WN(i,r=>(dT(this.node,r,"Start"),(l,{success:c})=>dT(this.node,l,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Xc=new WeakMap,Pc=new WeakMap,oy=n=>{const i=Xc.get(n.target);i&&i(n)},ry=n=>{n.forEach(oy)};function sy({root:n,...i}){const r=n||document;Pc.has(r)||Pc.set(r,{});const l=Pc.get(r),c=JSON.stringify(i);return l[c]||(l[c]=new IntersectionObserver(ry,{root:n,...i})),l[c]}function ly(n,i,r){const l=sy(i);return Xc.set(n,r),l.observe(n),()=>{Xc.delete(n),l.unobserve(n)}}const uy={some:0,all:1};class cy extends mn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:l,amount:c="some",once:S}=i,d={root:r?r.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:uy[c]},E=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,S&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:T,onViewportLeave:f}=this.node.getProps(),C=m?T:f;C&&C(h)};return ly(this.node.current,d,E)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(dy(i,r))&&this.startObserver()}unmount(){}}function dy({viewport:n={}},{viewport:i={}}={}){return r=>n[r]!==i[r]}const Sy={inView:{Feature:cy},tap:{Feature:iy},focus:{Feature:ny},hover:{Feature:ay}},Ay={layout:{ProjectionNode:Uf,MeasureLayout:Pf}},yd=y.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Ws=y.createContext({}),Ld=typeof window<"u",kf=Ld?y.useLayoutEffect:y.useEffect,wf=y.createContext({strict:!1});function Ey(n,i,r,l,c){var S,d;const{visualElement:E}=y.useContext(Ws),h=y.useContext(wf),m=y.useContext(Ks),T=y.useContext(yd).reducedMotion,f=y.useRef(null);l=l||h.renderer,!f.current&&l&&(f.current=l(n,{visualState:i,parent:E,props:r,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:T}));const C=f.current,L=y.useContext(Mf);C&&!C.projection&&c&&(C.type==="html"||C.type==="svg")&&hy(f.current,r,c,L);const G=y.useRef(!1);y.useInsertionEffect(()=>{C&&G.current&&C.update(r,m)});const K=r[Sf],b=y.useRef(!!K&&!(!((S=window.MotionHandoffIsComplete)===null||S===void 0)&&S.call(window,K))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,K)));return kf(()=>{C&&(G.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),Id.render(C.render),b.current&&C.animationState&&C.animationState.animateChanges())}),y.useEffect(()=>{C&&(!b.current&&C.animationState&&C.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)===null||M===void 0||M.call(window,K)}),b.current=!1))}),C}function hy(n,i,r,l){const{layoutId:c,layout:S,drag:d,dragConstraints:E,layoutScroll:h,layoutRoot:m}=i;n.projection=new r(n.latestValues,i["data-framer-portal-id"]?void 0:xf(n.parent)),n.projection.setOptions({layoutId:c,layout:S,alwaysMeasureLayout:!!d||E&&Bi(E),visualElement:n,animationType:typeof S=="string"?S:"both",initialPromotionConfig:l,layoutScroll:h,layoutRoot:m})}function xf(n){if(n)return n.options.allowProjection!==!1?n.projection:xf(n.parent)}function my(n,i,r){return y.useCallback(l=>{l&&n.mount&&n.mount(l),i&&(l?i.mount(l):i.unmount()),r&&(typeof r=="function"?r(l):Bi(r)&&(r.current=l))},[i])}function Ys(n){return ws(n.animate)||nd.some(i=>jo(n[i]))}function Vf(n){return!!(Ys(n)||n.variants)}function Ty(n,i){if(Ys(n)){const{initial:r,animate:l}=n;return{initial:r===!1||jo(r)?r:void 0,animate:jo(l)?l:void 0}}return n.inherit!==!1?i:{}}function fy(n){const{initial:i,animate:r}=Ty(n,y.useContext(Ws));return y.useMemo(()=>({initial:i,animate:r}),[ST(i),ST(r)])}function ST(n){return Array.isArray(n)?n.join(" "):n}const AT={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},wi={};for(const n in AT)wi[n]={isEnabled:i=>AT[n].some(r=>!!i[r])};function Ry(n){for(const i in n)wi[i]={...wi[i],...n[i]}}const Cy=Symbol.for("motionComponentSymbol");function Oy({preloadedFeatures:n,createVisualElement:i,useRender:r,useVisualState:l,Component:c}){n&&Ry(n);function S(E,h){let m;const T={...y.useContext(yd),...E,layoutId:py(E)},{isStatic:f}=T,C=fy(E),L=l(E,f);if(!f&&Ld){gy();const G=Ny(T);m=G.MeasureLayout,C.visualElement=Ey(c,L,T,i,G.ProjectionNode)}return p.jsxs(Ws.Provider,{value:C,children:[m&&C.visualElement?p.jsx(m,{visualElement:C.visualElement,...T}):null,r(c,E,my(L,C.visualElement,h),L,f,C.visualElement)]})}const d=y.forwardRef(S);return d[Cy]=c,d}function py({layoutId:n}){const i=y.useContext(Nd).id;return i&&n!==void 0?i+"-"+n:n}function gy(n,i){y.useContext(wf).strict}function Ny(n){const{drag:i,layout:r}=wi;if(!i&&!r)return{};const l={...i,...r};return{MeasureLayout:i!=null&&i.isEnabled(n)||r!=null&&r.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}const Iy=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Md(n){return typeof n!="string"||n.includes("-")?!1:!!(Iy.indexOf(n)>-1||/[A-Z]/u.test(n))}function Kf(n,{style:i,vars:r},l,c){Object.assign(n.style,i,c&&c.getProjectionStyles(l));for(const S in r)n.style.setProperty(S,r[S])}const Wf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Yf(n,i,r,l){Kf(n,i,void 0,l);for(const c in i.attrs)n.setAttribute(Wf.has(c)?c:pd(c),i.attrs[c])}function zf(n,{layout:i,layoutId:r}){return Kn.has(n)||n.startsWith("origin")||(i||r!==void 0)&&(!!Us[n]||n==="opacity")}function Pd(n,i,r){var l;const{style:c}=n,S={};for(const d in c)(Nt(c[d])||i.style&&Nt(i.style[d])||zf(d,n)||((l=r==null?void 0:r.getValue(d))===null||l===void 0?void 0:l.liveStyle)!==void 0)&&(S[d]=c[d]);return S}function jf(n,i,r){const l=Pd(n,i,r);for(const c in n)if(Nt(n[c])||Nt(i[c])){const S=Qo.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[S]=n[c]}return l}function Dd(n){const i=y.useRef(null);return i.current===null&&(i.current=n()),i.current}function yy({scrapeMotionValuesFromProps:n,createRenderState:i,onMount:r},l,c,S){const d={latestValues:Ly(l,c,S,n),renderState:i()};return r&&(d.mount=E=>r(l,E,d)),d}const Jf=n=>(i,r)=>{const l=y.useContext(Ws),c=y.useContext(Ks),S=()=>yy(n,i,l,c);return r?S():Dd(S)};function Ly(n,i,r,l){const c={},S=l(n,{});for(const C in S)c[C]=Ps(S[C]);let{initial:d,animate:E}=n;const h=Ys(n),m=Vf(n);i&&m&&!h&&n.inherit!==!1&&(d===void 0&&(d=i.initial),E===void 0&&(E=i.animate));let T=r?r.initial===!1:!1;T=T||d===!1;const f=T?E:d;if(f&&typeof f!="boolean"&&!ws(f)){const C=Array.isArray(f)?f:[f];for(let L=0;L<C.length;L++){const G=td(n,C[L]);if(G){const{transitionEnd:K,transition:b,...M}=G;for(const x in M){let J=M[x];if(Array.isArray(J)){const ne=T?J.length-1:0;J=J[ne]}J!==null&&(c[x]=J)}for(const x in K)c[x]=K[x]}}}return c}const Bd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),_f=()=>({...Bd(),attrs:{}}),Zf=(n,i)=>i&&typeof n=="number"?i.transform(n):n,My={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Py=Qo.length;function Dy(n,i,r){let l="",c=!0;for(let S=0;S<Py;S++){const d=Qo[S],E=n[d];if(E===void 0)continue;let h=!0;if(typeof E=="number"?h=E===(d.startsWith("scale")?1:0):h=parseFloat(E)===0,!h||r){const m=Zf(E,dd[d]);if(!h){c=!1;const T=My[d]||d;l+=`${T}(${m}) `}r&&(i[d]=m)}}return l=l.trim(),r?l=r(i,c?"":l):c&&(l="none"),l}function vd(n,i,r){const{style:l,vars:c,transformOrigin:S}=n;let d=!1,E=!1;for(const h in i){const m=i[h];if(Kn.has(h)){d=!0;continue}else if(xT(h)){c[h]=m;continue}else{const T=Zf(m,dd[h]);h.startsWith("origin")?(E=!0,S[h]=T):l[h]=T}}if(i.transform||(d||r?l.transform=Dy(i,n.transform,r):l.transform&&(l.transform="none")),E){const{originX:h="50%",originY:m="50%",originZ:T=0}=S;l.transformOrigin=`${h} ${m} ${T}`}}function ET(n,i,r){return typeof n=="string"?n:Oe.transform(i+r*n)}function By(n,i,r){const l=ET(i,n.x,n.width),c=ET(r,n.y,n.height);return`${l} ${c}`}const vy={offset:"stroke-dashoffset",array:"stroke-dasharray"},Hy={offset:"strokeDashoffset",array:"strokeDasharray"};function by(n,i,r=1,l=0,c=!0){n.pathLength=1;const S=c?vy:Hy;n[S.offset]=Oe.transform(-l);const d=Oe.transform(i),E=Oe.transform(r);n[S.array]=`${d} ${E}`}function Hd(n,{attrX:i,attrY:r,attrScale:l,originX:c,originY:S,pathLength:d,pathSpacing:E=1,pathOffset:h=0,...m},T,f){if(vd(n,m,f),T){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:C,style:L,dimensions:G}=n;C.transform&&(G&&(L.transform=C.transform),delete C.transform),G&&(c!==void 0||S!==void 0||L.transform)&&(L.transformOrigin=By(G,c!==void 0?c:.5,S!==void 0?S:.5)),i!==void 0&&(C.x=i),r!==void 0&&(C.y=r),l!==void 0&&(C.scale=l),d!==void 0&&by(C,d,E,h,!1)}const bd=n=>typeof n=="string"&&n.toLowerCase()==="svg",Gy={useVisualState:Jf({scrapeMotionValuesFromProps:jf,createRenderState:_f,onMount:(n,i,{renderState:r,latestValues:l})=>{je.read(()=>{try{r.dimensions=typeof i.getBBox=="function"?i.getBBox():i.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),je.render(()=>{Hd(r,l,bd(i.tagName),n.transformTemplate),Yf(i,r)})}})},Fy={useVisualState:Jf({scrapeMotionValuesFromProps:Pd,createRenderState:Bd})};function Xf(n,i,r){for(const l in i)!Nt(i[l])&&!zf(l,r)&&(n[l]=i[l])}function Uy({transformTemplate:n},i){return y.useMemo(()=>{const r=Bd();return vd(r,i,n),Object.assign({},r.vars,r.style)},[i])}function ky(n,i){const r=n.style||{},l={};return Xf(l,r,n),Object.assign(l,Uy(n,i)),l}function wy(n,i){const r={},l=ky(n,i);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=l,r}const xy=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ks(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||xy.has(n)}let qf=n=>!ks(n);function Vy(n){n&&(qf=i=>i.startsWith("on")?!ks(i):n(i))}try{Vy(require("@emotion/is-prop-valid").default)}catch{}function Ky(n,i,r){const l={};for(const c in n)c==="values"&&typeof n.values=="object"||(qf(c)||r===!0&&ks(c)||!i&&!ks(c)||n.draggable&&c.startsWith("onDrag"))&&(l[c]=n[c]);return l}function Wy(n,i,r,l){const c=y.useMemo(()=>{const S=_f();return Hd(S,i,bd(l),n.transformTemplate),{...S.attrs,style:{...S.style}}},[i]);if(n.style){const S={};Xf(S,n.style,n),c.style={...S,...c.style}}return c}function Yy(n=!1){return(r,l,c,{latestValues:S},d)=>{const h=(Md(r)?Wy:wy)(l,S,d,r),m=Ky(l,typeof r=="string",n),T=r!==y.Fragment?{...m,...h,ref:c}:{},{children:f}=l,C=y.useMemo(()=>Nt(f)?f.get():f,[f]);return y.createElement(r,{...T,children:C})}}function zy(n,i){return function(l,{forwardMotionProps:c}={forwardMotionProps:!1}){const d={...Md(l)?Gy:Fy,preloadedFeatures:n,useRender:Yy(c),createVisualElement:i,Component:l};return Oy(d)}}const qc={current:null},Qf={current:!1};function jy(){if(Qf.current=!0,!!Ld)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>qc.current=n.matches;n.addListener(i),i()}else qc.current=!1}function Jy(n,i,r){for(const l in i){const c=i[l],S=r[l];if(Nt(c))n.addValue(l,c);else if(Nt(S))n.addValue(l,Zo(c,{owner:n}));else if(S!==c)if(n.hasValue(l)){const d=n.getValue(l);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(l);n.addValue(l,Zo(d!==void 0?d:c,{owner:n}))}}for(const l in r)i[l]===void 0&&n.removeValue(l);return i}const hT=new WeakMap,_y=[...WT,gt,hn],Zy=n=>_y.find(KT(n)),mT=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Xy{scrapeMotionValuesFromProps(i,r,l){return{}}constructor({parent:i,props:r,presenceContext:l,reducedMotionConfig:c,blockInitialAnimation:S,visualState:d},E={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ld,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=Ta.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,je.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=d;this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=m,this.parent=i,this.props=r,this.presenceContext=l,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=E,this.blockInitialAnimation=!!S,this.isControllingVariants=Ys(r),this.isVariantNode=Vf(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:T,...f}=this.scrapeMotionValuesFromProps(r,{},this);for(const C in f){const L=f[C];h[C]!==void 0&&Nt(L)&&L.set(h[C],!1)}}mount(i){this.current=i,hT.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,l)=>this.bindToMotionValue(l,r)),Qf.current||jy(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:qc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){hT.delete(this.current),this.projection&&this.projection.unmount(),En(this.notifyUpdate),En(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(i,r){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const l=Kn.has(i),c=r.on("change",E=>{this.latestValues[i]=E,this.props.onUpdate&&je.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0)}),S=r.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{c(),S(),d&&d(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in wi){const r=wi[i];if(!r)continue;const{isEnabled:l,Feature:c}=r;if(!this.features[i]&&c&&l(this.props)&&(this.features[i]=new c(this)),this.features[i]){const S=this.features[i];S.isMounted?S.update():(S.mount(),S.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):tt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let l=0;l<mT.length;l++){const c=mT[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const S="on"+c,d=i[S];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Jy(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const l=this.values.get(i);r!==l&&(l&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let l=this.values.get(i);return l===void 0&&r!==void 0&&(l=Zo(r===null?void 0:r,{owner:this}),this.addValue(i,l)),l}readValue(i,r){var l;let c=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(l=this.getBaseTargetFromProps(this.props,i))!==null&&l!==void 0?l:this.readValueFromInstance(this.current,i,this.options);return c!=null&&(typeof c=="string"&&(kT(c)||UT(c))?c=parseFloat(c):!Zy(c)&&hn.test(r)&&(c=qT(i,r)),this.setBaseTarget(i,Nt(c)?c.get():c)),Nt(c)?c.get():c}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var r;const{initial:l}=this.props;let c;if(typeof l=="string"||typeof l=="object"){const d=td(this.props,l,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);d&&(c=d[i])}if(l&&c!==void 0)return c;const S=this.getBaseTargetFromProps(this.props,i);return S!==void 0&&!Nt(S)?S:this.initialValues[i]!==void 0&&c===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new Od),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}}class $f extends Xy{constructor(){super(...arguments),this.KeyframeResolver=QT}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){return i.style?i.style[r]:void 0}removeValueFromRenderState(i,{vars:r,style:l}){delete r[i],delete l[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Nt(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function qy(n){return window.getComputedStyle(n)}class Qy extends $f{constructor(){super(...arguments),this.type="html",this.renderInstance=Kf}readValueFromInstance(i,r){if(Kn.has(r)){const l=Sd(r);return l&&l.default||0}else{const l=qy(i),c=(xT(r)?l.getPropertyValue(r):l[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:r}){return yf(i,r)}build(i,r,l){vd(i,r,l.transformTemplate)}scrapeMotionValuesFromProps(i,r,l){return Pd(i,r,l)}}class $y extends $f{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=tt}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(Kn.has(r)){const l=Sd(r);return l&&l.default||0}return r=Wf.has(r)?r:pd(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,l){return jf(i,r,l)}build(i,r,l){Hd(i,r,this.isSVGTag,l.transformTemplate)}renderInstance(i,r,l,c){Yf(i,r,l,c)}mount(i){this.isSVGTag=bd(i.tagName),super.mount(i)}}const e0=(n,i)=>Md(n)?new $y(i):new Qy(i,{allowProjection:n!==y.Fragment}),t0=zy({...UN,...Sy,...ty,...Ay},e0),zs=bp(t0);class a0 extends y.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent){const l=this.props.sizeRef.current;l.height=r.offsetHeight||0,l.width=r.offsetWidth||0,l.top=r.offsetTop,l.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function n0({children:n,isPresent:i}){const r=y.useId(),l=y.useRef(null),c=y.useRef({width:0,height:0,top:0,left:0}),{nonce:S}=y.useContext(yd);return y.useInsertionEffect(()=>{const{width:d,height:E,top:h,left:m}=c.current;if(i||!l.current||!d||!E)return;l.current.dataset.motionPopId=r;const T=document.createElement("style");return S&&(T.nonce=S),document.head.appendChild(T),T.sheet&&T.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${E}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(T)}},[i]),p.jsx(a0,{isPresent:i,childRef:l,sizeRef:c,children:y.cloneElement(n,{ref:l})})}const i0=({children:n,initial:i,isPresent:r,onExitComplete:l,custom:c,presenceAffectsLayout:S,mode:d})=>{const E=Dd(o0),h=y.useId(),m=y.useCallback(f=>{E.set(f,!0);for(const C of E.values())if(!C)return;l&&l()},[E,l]),T=y.useMemo(()=>({id:h,initial:i,isPresent:r,custom:c,onExitComplete:m,register:f=>(E.set(f,!1),()=>E.delete(f))}),S?[Math.random(),m]:[r,m]);return y.useMemo(()=>{E.forEach((f,C)=>E.set(C,!1))},[r]),y.useEffect(()=>{!r&&!E.size&&l&&l()},[r]),d==="popLayout"&&(n=p.jsx(n0,{isPresent:r,children:n})),p.jsx(Ks.Provider,{value:T,children:n})};function o0(){return new Map}const Ns=n=>n.key||"";function TT(n){const i=[];return y.Children.forEach(n,r=>{y.isValidElement(r)&&i.push(r)}),i}const r0=({children:n,exitBeforeEnter:i,custom:r,initial:l=!0,onExitComplete:c,presenceAffectsLayout:S=!0,mode:d="sync"})=>{const E=y.useMemo(()=>TT(n),[n]),h=E.map(Ns),m=y.useRef(!0),T=y.useRef(E),f=Dd(()=>new Map),[C,L]=y.useState(E),[G,K]=y.useState(E);kf(()=>{m.current=!1,T.current=E;for(let x=0;x<G.length;x++){const J=Ns(G[x]);h.includes(J)?f.delete(J):f.get(J)!==!0&&f.set(J,!1)}},[G,h.length,h.join("-")]);const b=[];if(E!==C){let x=[...E];for(let J=0;J<G.length;J++){const ne=G[J],ie=Ns(ne);h.includes(ie)||(x.splice(J,0,ne),b.push(ne))}d==="wait"&&b.length&&(x=b),K(TT(x)),L(E);return}const{forceRender:M}=y.useContext(Nd);return p.jsx(p.Fragment,{children:G.map(x=>{const J=Ns(x),ne=E===G||h.includes(J),ie=()=>{if(f.has(J))f.set(J,!0);else return;let ce=!0;f.forEach(ae=>{ae||(ce=!1)}),ce&&(M==null||M(),K(T.current),c&&c())};return p.jsx(i0,{isPresent:ne,initial:!m.current||l?void 0:!1,custom:ne?void 0:r,presenceAffectsLayout:S,mode:d,onExitComplete:ne?void 0:ie,children:x},J)})})},s0=zs.div,l0=({onClose:n})=>{const i=pT(),r=i.totalTimeMs/1e3,l=r>3600?`${Math.floor(r/3600)}h ${Math.floor(r%3600/60)}m`:r>60?`${Math.floor(r/60)}m ${Math.floor(r%60)}s`:`${Math.floor(r)}s`,c=y.useMemo(()=>Ds().length+Bs().length+zo().length,[]),S=y.useMemo(()=>{const d=new Set;return[...Ds(),...Bs(),...zo()].forEach(E=>{E.words.forEach(h=>d.add(h.trim().toUpperCase()))}),d.size},[]);return p.jsx("div",{className:"absolute inset-0 z-[600] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 font-oswald",children:p.jsxs(s0,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-6 shadow-[0_0_40px_rgba(0,229,255,0.2)] flex flex-col gap-6",children:[p.jsxs("div",{className:"flex justify-between items-center border-b border-zinc-800 pb-2",children:[p.jsx("h2",{className:"text-3xl font-black text-neon-blue uppercase tracking-tighter italic",children:"HALL OF FAME"}),p.jsx("button",{onClick:n,className:"text-zinc-500 hover:text-white p-2",children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsx(Pi,{label:"TOTAL SCORE",value:i.totalScore,color:"text-neon-yellow"}),p.jsx(Pi,{label:"LEVELS BEAT",value:i.levelsCompleted,color:"text-neon-pink"}),p.jsx(Pi,{label:"ROWS SOLVED",value:i.rowsSolved,color:"text-neon-green"}),p.jsx(Pi,{label:"TOTAL MOVES",value:i.totalMoves,color:"text-neon-aqua"}),p.jsx(Pi,{label:"TIME PLAYED",value:l,color:"text-white"}),p.jsx(Pi,{label:"HINTS USED",value:i.hintsUsed,color:"text-neon-red"})]}),p.jsxs("div",{className:"mt-2 p-3 bg-black/50 border border-zinc-800 rounded-medium flex flex-col gap-3",children:[p.jsxs("div",{children:[p.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"CATEGORY MASTERY"}),p.jsxs("div",{className:"text-2xl font-black text-neon-gold leading-none mb-1",children:[i.solvedCategoryIds.length," / ",c]}),p.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-neon-gold shadow-[0_0_10px_#FFD400]",style:{width:`${Math.min(100,i.solvedCategoryIds.length/c*100)}%`}})})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1",children:"WORD MASTERY"}),p.jsxs("div",{className:"text-2xl font-black text-neon-purple leading-none mb-1",children:[i.solvedWords?i.solvedWords.length:0," / ",S]}),p.jsx("div",{className:"w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-neon-purple shadow-[0_0_10px_#D400FF]",style:{width:`${Math.min(100,(i.solvedWords?i.solvedWords.length:0)/S*100)}%`}})})]})]}),p.jsx("button",{onClick:n,className:"w-full py-4 bg-white text-black font-black text-xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg",children:"BACK TO GAME"})]})})},Pi=({label:n,value:i,color:r})=>p.jsxs("div",{className:"flex flex-col gap-0.5",children:[p.jsx("span",{className:"text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none",children:n}),p.jsx("span",{className:`text-xl font-black ${r} tracking-tight`,children:i})]}),Gd={textShadow:"2px 2px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, -1px -1px 0 #000, 1px 1px 0 #000, 0 0 6px rgba(0,0,0,0.6)",WebkitTextStroke:"1px black",paintOrder:"stroke fill",fontWeight:900},u0={textShadow:"2px 2px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, -1px -1px 0 #000, 1px 1px 0 #000, 0 0 8px rgba(0,0,0,0.8)",WebkitTextStroke:"1px black",paintOrder:"stroke fill",fontWeight:900},c0={textShadow:`
    3px 3px 0 #000, -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000,
    1.5px 0 0 #000, -1.5px 0 0 #000, 0 1.5px 0 #000, 0 -1.5px 0 #000,
    0 3px 6px rgba(0,0,0,0.6)
  `,filter:"drop-shadow(0 3px 3px rgba(0,0,0,0.4))",paintOrder:"stroke fill"},d0={"bg-neon-red":"linear-gradient(180deg, #FF073A 0%, #D400FF 100%)","bg-neon-orange":"linear-gradient(180deg, #FF5F1F 0%, #F9FF00 100%)","bg-neon-yellow":"linear-gradient(180deg, #F9FF00 0%, #39FF14 100%)","bg-neon-lime":"linear-gradient(180deg, #39FF14 0%, #00E5FF 100%)","bg-neon-green":"linear-gradient(180deg, #00F000 0%, #0066FF 100%)","bg-neon-mint":"linear-gradient(180deg, #00FF9F 0%, #FF1FBF 100%)","bg-neon-cyan":"linear-gradient(180deg, #00FFFF 0%, #B026FF 100%)","bg-neon-sky-blue":"linear-gradient(180deg, #00BFFF 0%, #FF00FF 100%)","bg-neon-blue":"linear-gradient(180deg, #0066FF 0%, #FF073A 100%)","bg-neon-violet":"linear-gradient(180deg, #B026FF 0%, #00FFFF 100%)","bg-neon-purple":"linear-gradient(180deg, #D400FF 0%, #FF5F1F 100%)","bg-neon-magenta":"linear-gradient(180deg, #FF00FF 0%, #F9FF00 100%)","bg-neon-pink":"linear-gradient(180deg, #FF1FBF 0%, #00F000 100%)","bg-neon-rose":"linear-gradient(180deg, #FF0055 0%, #00BFFF 100%)"},Dc=["linear-gradient(180deg, #FF073A 0%, #7B00FF 33%, #0066FF 66%, #39FF14 100%)","linear-gradient(180deg, #00E5FF 0%, #FF1FBF 100%)","linear-gradient(180deg, #F9FF00 0%, #FF5F1F 100%)"],eR=(n,i)=>{if(n){for(const[r,l]of Object.entries(d0))if(n.includes(r))return`${l} fixed`}if(i){let r=0;for(let c=0;c<i.length;c++)r=i.charCodeAt(c)+((r<<5)-r);const l=Math.abs(r%Dc.length);return`${Dc[l]} fixed`}return`${Dc[0]} fixed`},S0={neutral:{scale:1,zIndex:10,transition:{duration:.1}},selected:{scale:1.05,transition:{duration:.1},zIndex:50},"correct-preview":{scale:1.1,transition:{duration:.2},zIndex:55},"swap-target":{scale:1.05,transition:{duration:.1},zIndex:40},swapping:{scale:1.1,zIndex:100,transition:{duration:.1}},"fading-out-bg":{scale:1,transition:{duration:.25}},solved:{scale:[1,1.1,1],transition:{duration:.3,ease:"easeOut"},zIndex:20},wrong:{x:[0,-8,8,-8,8,0],scale:1.05,transition:{duration:.3},zIndex:60}},A0=(n,i)=>{const r="border-2 border-white shadow-[0_0_12px_rgba(255,255,255,0.7)]";switch(n){case"selected":case"swapping":return`${r} z-50`;case"swap-target":return`${r} z-40`;case"correct-preview":return"bg-neon-lime border-2 border-white shadow-[0_0_15px_#39FF14] z-55";case"locked":return"bg-neon-yellow border-2 border-white shadow-[0_0_15px_#F9FF00] z-30";case"fading-out-bg":return"border-2 border-white shadow-none transition-colors duration-250";case"solved":return i?`${i} border-2 border-white shadow-none`:"bg-zinc-800 border-2 border-white shadow-none";case"wrong":return"bg-neon-red border-2 border-white shadow-[0_0_15px_#FF073A] z-60";default:return i?`${i} border-2 border-white shadow-none`:"bg-zinc-900 border-2 border-white shadow-[0_0_4px_rgba(255,255,255,0.1)]"}},E0=(n,i,r,l)=>{const c="font-oswald font-black uppercase leading-none";if(i)return r?`${c} text-xl md:text-2xl`:`${c} text-3xl md:text-4xl`;const d=(n||"").length;return l?d>12?`${c} text-[8px] md:text-[9px] tracking-tighter`:d>8?`${c} text-[9px] md:text-[11px] tracking-tight`:`${c} text-[11px] md:text-[13px] tracking-normal`:d>12?`${c} text-[11px] md:text-[12px] tracking-tighter`:d>8?`${c} text-[14px] md:text-[16px] tracking-tight`:`${c} text-[18px] md:text-[22px] tracking-normal`},fT=zs,h0={fontFamily:'"Oswald", sans-serif',backfaceVisibility:"hidden",WebkitFontSmoothing:"antialiased"},tR=qo.forwardRef(({data:n,onClick:i,disabled:r,targetColor:l,isCascade:c,...S},d)=>{const E=n.status==="swapping"||n.status==="swap-target",h=n.status==="solved",m=n.status==="selected",T=n.status==="correct-preview",f=n.status==="locked",C=n.status==="fading-out-bg",L=A0(n.status,c||h?n.color||l:void 0),G=E0(n.word,n.isEmoji,h,c);let K={};if(h){const x=n.color||l;K.background=eR(x,n.categoryId),K.backgroundSize="100% 100vh",K.backgroundRepeat="no-repeat"}else m||n.status==="swapping"?K.backgroundColor="#0066FF":n.status==="swap-target"?K.backgroundColor="#FF1FBF":f?K.backgroundColor="#F9FF00":T?K.backgroundColor="#39FF14":C&&(K.backgroundColor="#000000");const b=()=>{if(n.isEmoji)return n.word;const x=(n.word||"").trim().split(/\s+/);return x.length<=1?n.word:x.map((J,ne)=>p.jsx("span",{className:"block w-full leading-[1.0] whitespace-nowrap",children:J},ne))},M=n.isEmoji?{filter:h?"drop-shadow(0 0 8px rgba(255,255,255,0.7)) brightness(1.3)":m||E||T?"drop-shadow(0 0 12px #FFFFFF)":"none"}:{};return p.jsx("div",{className:"relative w-full h-full flex flex-col justify-end overflow-visible touch-action-manipulation",children:p.jsx(fT.div,{layout:!0,ref:d,initial:"neutral",animate:n.status,variants:S0,onClick:()=>!r&&i(n.id),className:`relative w-full flex items-center justify-center cursor-pointer select-none rounded-small z-10 ${L} h-full touch-action-manipulation ${c?"overflow-visible":"overflow-hidden"}`,style:{...h0,...K,transition:"background-color 0.25s ease-in-out, background 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out"},...S,children:p.jsx(r0,{mode:"wait",children:p.jsx(fT.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"},className:`${G} text-white z-30 text-center px-0 pointer-events-none w-full flex flex-col items-center justify-center ${c?"whitespace-nowrap overflow-visible":""}`,style:{...n.isEmoji?c0:c?u0:Gd,...M},children:b()},n.word)})})})});tR.displayName="Tile";const Wn=qo.memo(tR),m0=({text:n,sizeClass:i="text-2xl",strokeOuter:r="8px",strokeInner:l="4px",className:c="",active:S=!0,gradient:d="linear-gradient(to right, #FF1FBF, #00E5FF, #F9FF00, #FF1FBF)"})=>p.jsxs("div",{className:`relative inline-block ${c} ${S?"":"opacity-40 grayscale contrast-125"}`,children:[p.jsx("style",{children:`
          @keyframes arcade-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}),p.jsx("span",{className:`absolute inset-0 ${i} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{color:"rgba(0,0,0,0.8)",transform:"translate(3px, 3px)",zIndex:-1,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:n}),p.jsx("span",{className:`absolute inset-0 ${i} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{WebkitTextStroke:`${r} white`,color:"transparent",zIndex:0},children:n}),p.jsx("span",{className:`absolute inset-0 ${i} font-black font-oswald uppercase leading-none tracking-tight select-none pointer-events-none`,style:{WebkitTextStroke:`${l} black`,color:"transparent",zIndex:10},children:n}),p.jsx("span",{className:`relative z-20 ${i} font-black uppercase font-oswald leading-none tracking-tight`,style:{backgroundImage:d,backgroundSize:"600% auto",WebkitBackgroundClip:"text",color:"transparent",animation:S?"arcade-flow 12s linear infinite":"none"},children:n})]}),RT=({path:n,viewBox:i="0 0 24 24",className:r="",active:l=!0,sizeClass:c="w-8 h-8"})=>{const d=`icon-grad-${qo.useId()}`,E=[{offset:"0%",color:"#FF073A"},{offset:"17%",color:"#FF5F1F"},{offset:"33%",color:"#F9FF00"},{offset:"50%",color:"#39FF14"},{offset:"67%",color:"#00FFFF"},{offset:"83%",color:"#0066FF"},{offset:"100%",color:"#FF073A"}];return p.jsxs("div",{className:`relative ${c} ${r} ${l?"":"opacity-50 grayscale"}`,children:[p.jsx("svg",{viewBox:i,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:0},children:p.jsx("path",{d:n,fill:"white",stroke:"white",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round"})}),p.jsx("svg",{viewBox:i,className:"absolute inset-0 w-full h-full overflow-visible pointer-events-none",style:{zIndex:10},children:p.jsx("path",{d:n,fill:"black",stroke:"black",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),p.jsxs("svg",{viewBox:i,className:"relative w-full h-full overflow-visible",style:{zIndex:20},children:[p.jsx("defs",{children:p.jsxs("linearGradient",{id:d,x1:"0%",y1:"0%",x2:"400%",y2:"0%",spreadMethod:"repeat",children:[E.map((h,m)=>p.jsx("stop",{offset:h.offset,stopColor:h.color},m)),p.jsx("animateTransform",{attributeName:"gradientTransform",type:"translate",from:"0 0",to:"-4 0",dur:"8s",repeatCount:"indefinite"})]})}),p.jsx("path",{d:n,fill:l?`url(#${d})`:"#555"})]})]})},Fd=({modeName:n,levelIndex:i,onOpenSettings:r,isReviewing:l,onNext:c,hintsEnabled:S,onToggleHints:d,children:E,leftContent:h,rowsLeft:m})=>p.jsxs("header",{className:"flex items-center justify-between px-2 sm:px-4 shrink-0 z-[60] bg-black select-none w-full gap-2 text-right overflow-hidden",style:{height:Jh,minHeight:Jh},children:[p.jsx("div",{className:"flex-1 flex items-center justify-start gap-3 h-full",children:h}),p.jsxs("div",{className:"flex items-center gap-2 justify-end",children:[E,l&&c?p.jsx("div",{className:"pr-1",children:p.jsx("button",{onClick:c,className:"px-6 py-1.5 md:px-10 md:py-2 text-white font-black font-oswald text-sm md:text-base rounded-small border-4 border-white shadow-[0_0_20px_rgba(255,255,255,1)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap bg-black",style:Gd,children:"NEXT PUZZLE"})}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"flex flex-col items-end justify-center mr-2",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-0.5 justify-end",children:[p.jsxs("span",{className:"text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest font-oswald",children:["LVL ",i]}),m!==void 0&&p.jsxs("span",{className:"text-[10px] md:text-xs text-neon-blue font-bold uppercase border-l border-zinc-800 pl-2 font-oswald",children:["ROWS: ",m]})]}),p.jsx(m0,{text:n,sizeClass:"text-2xl md:text-3xl",gradient:"linear-gradient(to right, #FF073A, #FF5F1F, #F9FF00, #39FF14, #00FFFF, #0066FF, #FF073A)"})]}),d&&p.jsx("button",{onClick:d,className:"transform transition-transform active:scale-95 hover:scale-110",title:"Toggle Hints",children:p.jsx(RT,{path:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",active:S,sizeClass:"w-7 h-7 md:w-8 md:h-8"})})]}),p.jsx("button",{onClick:r,className:"transform transition-transform active:scale-95 hover:scale-110 ml-1",title:"Settings",children:p.jsx(RT,{path:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84a.484.484 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.488.488 0 0 0-.59.22L2.65 8.91a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.27.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",active:!0,sizeClass:"w-7 h-7 md:w-8 md:h-8"})})]})]}),aR=[{id:"t0",word:"APPLE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t1",word:"BANANA",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t2",word:"GRAPE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t3",word:"DOG",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t4",word:"CAT",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t5",word:"LION",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t6",word:"TIGER",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t7",word:"PEAR",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t8",word:"RED",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t9",word:"BLUE",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t10",word:"GREEN",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t11",word:"YELLOW",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t12",word:"HAMMER",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t13",word:"DRILL",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t14",word:"SAW",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t15",word:"WRENCH",categoryId:"tool",categoryName:"TOOL",status:"neutral"}],T0=()=>{const n=JSON.parse(JSON.stringify(aR)),i=n[10];n[10]=n[13],n[13]=i;const r=n[11];return n[11]=n[12],n[12]=r,n},f0=n=>n===Te.CLASSIC?"CLASSIC GRID":n===Te.LEVEL_EMOJI?"EMOJI MATCH":n===Te.LEVEL_SYNONYMS?"SYNONYMS":n===Te.LEVEL_THEMED?"THEMED":n===Te.LEVEL_MIND_MATCH?"MIND MATCH":"TUTORIAL",R0=({mode:n,onComplete:i})=>{const r=n===Te.CLASSIC||n===Te.LEVEL_EMOJI||n===Te.LEVEL_THEMED||n===Te.LEVEL_SYNONYMS,[l,c]=y.useState(1),[S,d]=y.useState(r?T0():aR),E=y.useRef(new Map),h=async(T,f)=>{const C=E.current.get(T),L=E.current.get(f);if(Le.playSwap(),C&&L){const G=C.getBoundingClientRect(),K=L.getBoundingClientRect(),b=K.left-G.left,M=K.top-G.top;C.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",C.style.transform=`translate(${b}px, ${M}px) scale(1.1)`,C.style.zIndex="50",C.style.boxShadow="0 10px 20px rgba(0,0,0,0.5)",L.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",L.style.transform=`translate(${-b}px, ${-M}px) scale(0.9)`,L.style.zIndex="40",await new Promise(x=>setTimeout(x,400)),C.style.transition="",C.style.transform="",C.style.zIndex="",C.style.boxShadow="",L.style.transition="",L.style.transform="",L.style.zIndex=""}};y.useEffect(()=>{if(!r)return;let T=!0;return(async()=>{if(await new Promise(b=>setTimeout(b,600)),!T)return;const C="t13",L="t10";if(await new Promise(b=>setTimeout(b,300)),!T||(d(b=>b.map(M=>M.id===C?{...M,status:"selected"}:M)),Le.playSelect(),await new Promise(b=>setTimeout(b,400)),!T)||(d(b=>b.map(M=>M.id===L?{...M,status:"swap-target"}:M)),Le.playSelect(),await new Promise(b=>setTimeout(b,200)),!T)||(await h(C,L),d(b=>{const M=[...b],x=M.findIndex(ne=>ne.id===C),J=M.findIndex(ne=>ne.id===L);return[M[x],M[J]]=[M[J],M[x]],M[x]={...M[x],status:"neutral"},M[J]={...M[J],status:"neutral"},M}),await new Promise(b=>setTimeout(b,400)),!T))return;const G="t12",K="t11";await new Promise(b=>setTimeout(b,300)),T&&(d(b=>b.map(M=>M.id===G?{...M,status:"selected"}:M)),Le.playSelect(),await new Promise(b=>setTimeout(b,400)),T&&(d(b=>b.map(M=>M.id===K?{...M,status:"swap-target"}:M)),Le.playSelect(),await new Promise(b=>setTimeout(b,200)),T&&(await h(G,K),d(b=>{const M=[...b],x=M.findIndex(ne=>ne.id===G),J=M.findIndex(ne=>ne.id===K);return[M[x],M[J]]=[M[J],M[x]],M[x]={...M[x],status:"neutral"},M[J]={...M[J],status:"neutral"},M}),await new Promise(b=>setTimeout(b,400)),T&&(Le.playRowSolved(),d(b=>b.map((M,x)=>x>=8&&x<12?{...M,status:"solved",color:"bg-neon-green border-white"}:x>=12?{...M,status:"solved",color:"bg-neon-yellow border-white"}:M)),c(4),await new Promise(b=>setTimeout(b,600)),T&&(Le.playSelect(),d(b=>b.map(M=>M.id==="t3"?{...M,status:"selected"}:M)),c(5),await new Promise(b=>setTimeout(b,800)),T&&(Le.playSelect(),d(b=>b.map(M=>M.id==="t7"?{...M,status:"swap-target"}:M)),await new Promise(b=>setTimeout(b,200)),await h("t3","t7"),d(b=>{const M=[...b],x=M.findIndex(ne=>ne.id==="t3"),J=M.findIndex(ne=>ne.id==="t7");return[M[x],M[J]]=[M[J],M[x]],M[x]={...M[x],status:"neutral"},M[J]={...M[J],status:"neutral"},M}),await new Promise(b=>setTimeout(b,300)),T&&(Le.playRowSolved(),Le.playWin(),d(b=>b.map((M,x)=>x<4?{...M,status:"solved",color:"bg-neon-blue border-white"}:x>=4&&x<8?{...M,status:"solved",color:"bg-neon-pink border-white"}:x>=8&&x<12?{...M,status:"solved",color:"bg-neon-green border-white"}:x>=12?{...M,status:"solved",color:"bg-neon-yellow border-white"}:M)),await new Promise(b=>setTimeout(b,800)),T&&(c(6),await new Promise(b=>setTimeout(b,2500)),T&&(c(7),await new Promise(b=>setTimeout(b,2500)),T&&c(8))))))))))})(),()=>{T=!1}},[r]),y.useEffect(()=>{if(!r){const T=setTimeout(()=>{i()},3e3);return()=>clearTimeout(T)}},[r,i]);const m=()=>{var f;const T=[];for(let C=0;C<4;C++){const L=S.slice(C*4,C*4+4),G=L.every(M=>M.status==="solved"),K=(f=L[0])==null?void 0:f.categoryName;T.push(p.jsx("div",{className:"relative w-full z-10 flex flex-col justify-center min-h-0 flex-1 overflow-visible",children:p.jsxs("div",{className:"relative w-full h-full p-1",children:[G&&p.jsx("div",{className:"absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-medium"}),G&&p.jsx("div",{className:"absolute top-0 left-8 z-[100] transform",style:{transform:"translateY(calc(-100% + 4px))"},children:p.jsx("div",{className:"animate-pop bg-black text-white px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] font-oswald",children:K})}),p.jsx("div",{className:`grid grid-cols-4 gap-2 w-full h-full relative z-10 transition-all duration-300 ${G?"drop-shadow-xl p-3":""}`,children:L.map(M=>p.jsx("div",{className:"relative w-full h-full",children:p.jsx(Wn,{data:M,"data-tile-id":M.id,onClick:()=>{},disabled:!0,ref:x=>{x?E.current.set(M.id,x):E.current.delete(M.id)}})},M.id))})]})},C))}return T};return p.jsxs("div",{className:"absolute inset-0 z-[200] bg-black flex flex-col font-oswald animate-fade-in",children:[p.jsx(Fd,{modeName:f0(n),levelIndex:1,onOpenSettings:()=>{},isReviewing:!1,hintsEnabled:!0,onManualHint:()=>{},onToggleHints:()=>{}}),p.jsx("div",{className:"flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black items-center justify-center overflow-hidden",children:p.jsxs("div",{className:`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${l>=6?"blur-sm opacity-40 scale-95":""}`,children:[p.jsx("div",{className:"w-full max-w-sm aspect-square max-h-[55vh] bg-zinc-900/50 rounded-xl p-2 mb-4 border-2 border-zinc-700 relative flex flex-col shrink-0 shadow-2xl overflow-visible mt-8",children:p.jsx("div",{className:"w-full h-full flex flex-col gap-1",children:m()})}),p.jsxs("div",{className:"h-16 flex items-center justify-center mb-4 shrink-0 w-full px-4",children:[l===1&&p.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop shadow-lg text-center",children:p.jsx("p",{className:"text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"FIND 4 TILES THAT BELONG TOGETHER"})}),(l===2||l===3)&&p.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-neon-blue animate-fade-in shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center",children:p.jsx("p",{className:"text-neon-blue font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"SWAP TO MAKE A MATCH"})})]}),p.jsx("button",{onClick:i,className:`text-zinc-500 font-oswald text-sm uppercase tracking-widest hover:text-white transition-colors mt-auto pb-4 ${l>=6?"opacity-0 pointer-events-none":""}`,children:"SKIP TUTORIAL"})]})}),l===6&&p.jsx("div",{className:"absolute top-[60px] right-[50px] z-[220] animate-bounce",children:p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-yellow absolute -top-2 right-4"}),p.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-yellow text-center shadow-[0_0_15px_rgba(255,255,0,0.3)]",children:p.jsxs("p",{className:"text-neon-yellow font-oswald text-sm font-bold uppercase",children:["TURN HINTS",p.jsx("br",{}),"ON AND OFF"]})})]})}),l===7&&p.jsx("div",{className:"absolute top-[60px] right-[10px] z-[220] animate-bounce",children:p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-neon-blue absolute -top-2 right-2"}),p.jsx("div",{className:"bg-zinc-800 p-3 rounded-lg border border-neon-blue text-center shadow-[0_0_15px_rgba(0,229,255,0.3)]",children:p.jsx("p",{className:"text-neon-blue font-oswald text-sm font-bold uppercase",children:"SETTINGS"})})]})}),l===8&&p.jsx("div",{className:"absolute inset-0 z-[210] flex items-center justify-center",children:p.jsx("button",{onClick:i,className:"px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop",children:"START"})})]})},C0=({seed:n,className:i=""})=>p.jsx("div",{className:`absolute inset-0 z-0 bg-black border-4 border-white rounded-medium overflow-hidden ${i}`,children:p.jsx("div",{className:"absolute inset-0 bg-black/40 pointer-events-none z-[2]"})}),Ud=qo.memo(C0),nr=({modeName:n,levelIndex:i,onOpenSettings:r,isReviewing:l,onNext:c,showHintButton:S,onTurnOffHints:d,onManualHint:E,onToggleHints:h,hintsEnabled:m,headerExtras:T,children:f,rowsLeft:C})=>p.jsxs("div",{className:"flex flex-col h-full w-full max-w-4xl mx-auto select-none overflow-hidden relative bg-black font-oswald",children:[p.jsx(Fd,{modeName:n,levelIndex:i,onOpenSettings:r,isReviewing:l,onNext:c,showHintButton:S,onTurnOffHints:d,onManualHint:E,onToggleHints:h,hintsEnabled:m,rowsLeft:C,children:T}),p.jsx("main",{className:"flex-1 w-full relative flex flex-col pt-0 p-1 sm:p-2 min-h-0 bg-black overflow-visible",children:f})]}),Vi=(n,i,r=4)=>{if(!i||i.length===0)return[];const l=[],c=new Set,S=new Set,d=Math.random()<.1;let E=!1;const h=Gi(i);for(const m of h){if(l.length>=n)break;const T=m.name.startsWith("Famous");if(T&&(E||!d))continue;const f=m.name.trim().toUpperCase();if(c.has(f)||S.has(f))continue;const C=[];for(const L of m.words){const G=L.trim().toUpperCase();G.length>$c||c.has(G)||S.has(G)||G!==f&&C.push(L)}if(C.length>=r){const G=Gi(C).slice(0,r);G.forEach(K=>c.add(K.trim().toUpperCase())),S.add(f),l.push({...m,words:G}),T&&(E=!0)}}if(l.length<n){const m=new Set(l.map(T=>T.id));for(const T of h){if(l.length>=n)break;m.has(T.id)||T.words.length>=r&&(l.push({...T,words:T.words.slice(0,r)}),m.add(T.id))}}return l},Yn=y.forwardRef((n,i)=>{const[r,l]=y.useState([]);return y.useImperativeHandle(i,()=>({explode:(c,S,d,E=12)=>{const h=[];for(let m=0;m<E;m++){const T=Math.random()*Math.PI*2,f=Math.random()*8+2;h.push({id:Date.now()+Math.random(),x:c,y:S,vx:Math.cos(T)*f,vy:Math.sin(T)*f,color:d,size:Math.random()*6+4,life:1,decay:Math.random()*.03+.02})}l(m=>[...m,...h])}})),y.useEffect(()=>{let c;const S=()=>{l(d=>d.length===0?d:d.map(E=>({...E,x:E.x+E.vx,y:E.y+E.vy,vy:E.vy+.2,life:E.life-E.decay})).filter(E=>E.life>0)),c=requestAnimationFrame(S)};return c=requestAnimationFrame(S),()=>cancelAnimationFrame(c)},[]),p.jsx("div",{className:"absolute inset-0 pointer-events-none z-[100] overflow-hidden",children:r.map(c=>p.jsx("div",{style:{position:"absolute",left:c.x,top:c.y,width:c.size,height:c.size,backgroundColor:c.color,opacity:c.life,transform:`scale(${c.life})`,borderRadius:"2px",boxShadow:`0 0 4px ${c.color}`}},c.id))})});Yn.displayName="ParticleOverlay";function O0({csvData:n,onComplete:i,onExit:r,mode:l,levelIndex:c,hintsEnabled:S,onOpenSettings:d,setHintsEnabled:E,isReviewing:h,onNext:m,isAutoPlaying:T,themeName:f}){const[C,L]=y.useState([]),[G,K]=y.useState(null),[b,M]=y.useState(!0),[x,J]=y.useState(!1),[ne,ie]=y.useState(!1),[ce,ae]=y.useState(0),[te,he]=y.useState(0),[Ae,pe]=y.useState(0),[Re,me]=y.useState(null),ve=y.useRef(Date.now()),Ne=y.useRef(Date.now()),U=y.useRef(new Map),j=y.useRef(null),re=y.useCallback(O=>{var D;const N=Math.floor(O.length/4);let B=0;const F=[...O];let g=!1;for(let v=0;v<N;v++){const W=F.slice(v*4,v*4+4);if(W.every(Q=>Q.status==="solved")){B++;continue}const $=W[0].categoryId;if(W.every(Q=>Q.categoryId===$)){g=!0,B++,Le.playRowSolved();const Q=ua[0].solvedColors[v%ua[0].solvedColors.length];for(let _=v*4;_<v*4+4;_++){const z=F[_],oe=(D=U.current.get(z.id))==null?void 0:D.getBoundingClientRect();oe&&j.current&&j.current.explode(oe.left+oe.width/2,oe.top+oe.height/2,"#FFFFFF"),F[_]={...F[_],status:"solved",isSolved:!0,color:Q}}}}if(g&&L(F),B===N&&N>0&&!x){Le.playWin(),J(!0);const v=Array.from(new Set(F.map($=>$.categoryId))),W=F.map($=>$.word);setTimeout(()=>i({timeMs:Date.now()-Ne.current,hintsUsedCount:te,moves:ce,mistakes:Ae,solvedCategoryIds:v,solvedWords:W}),3e3)}},[x,te,ce,i,Ae]);y.useEffect(()=>{if(!n||n.length===0){me("No game data"),M(!1);return}try{let O=n;const N=7,B=Vi(N,O,4);if(B.length<N){me("Not enough categories"),M(!1);return}const F=[];B.forEach(g=>{g.words.slice(0,4).forEach(D=>{F.push({id:Math.random().toString(36).substr(2,9),word:D,categoryId:g.id,categoryName:g.name.includes(":")?g.name.split(":")[1].trim():g.name,status:"neutral",isSolved:!1})})}),L(Gi(F)),M(!1),ae(0),pe(0),Ne.current=Date.now(),ve.current=Date.now()}catch{me("Init failure"),M(!1)}},[n,l,c]),y.useEffect(()=>{if(!T||x||ne||b||h)return;const N=setTimeout(()=>{var Z,le;if(document.hidden)return;const B=4,F=Math.floor(C.length/B);let g=-1;for(let de=0;de<F;de++)if(!C.slice(de*B,(de+1)*B).every(Ze=>Ze.status==="solved")){g=de;break}if(g===-1)return;const D=g*B,v=D+B,W=C.slice(D,v),$=Array.from(new Set(C.filter(de=>!de.isSolved).map(de=>de.categoryId)));if($.length===0)return;const Q={};W.forEach(de=>{de.isSolved||(Q[de.categoryId]=(Q[de.categoryId]||0)+1)});const _=$.sort((de,Ue)=>(Q[Ue]||0)-(Q[de]||0))[0],z=(Z=W.find(de=>de.categoryId!==_&&!de.isSolved))==null?void 0:Z.id,oe=(le=C.find((de,Ue)=>de.categoryId===_&&!de.isSolved&&(Ue<D||Ue>=v)))==null?void 0:le.id;oe&&z&&ue(G?G===oe?z:G===z?oe:G:oe)},500);return()=>clearTimeout(N)},[T,x,ne,C,b,h,G]);const ue=O=>{if(x||ne)return;const N=C.find(B=>B.id===O);if(!(!N||N.status==="solved"||N.status==="locked"))if(G===null)Le.playSelect(),K(O),L(B=>B.map(F=>F.id===O?{...F,status:"selected"}:F));else if(G===O)K(null),L(B=>B.map(F=>F.id===O?{...F,status:"neutral"}:F));else{const B=C.findIndex(g=>g.id===G),F=C.findIndex(g=>g.id===O);ie(!0),ae(g=>g+1),Le.playSwap(),L(g=>g.map(D=>D.id===G?{...D,status:"swapping"}:D.id===O?{...D,status:"swap-target"}:D)),setTimeout(()=>{L(g=>{const D=[...g],v=D[B],W=D[F];return D[B]={...v,word:W.word,categoryId:W.categoryId,categoryName:W.categoryName},D[F]={...W,word:v.word,categoryId:v.categoryId,categoryName:v.categoryName},D}),setTimeout(()=>{L(g=>g.map(D=>D.id===G||D.id===O?{...D,status:"fading-out-bg"}:D)),setTimeout(()=>{L(g=>{const D=g.map(v=>v.status==="fading-out-bg"?{...v,status:"neutral"}:v);return setTimeout(()=>re(D),50),D}),K(null),ie(!1)},250)},450)},50)}};if(b)return null;const se=l===Te.LEVEL_THEMED&&f?f.toUpperCase():l===Te.LEVEL_SYNONYMS?"SYNONYMS":l===Te.LEVEL_THEMED?"THEMED":"CLASSIC";return p.jsxs(nr,{modeName:se,levelIndex:c,onOpenSettings:()=>d==null?void 0:d([]),isReviewing:h,onNext:m,hintsEnabled:S,onToggleHints:()=>E==null?void 0:E(!S),children:[p.jsx(Yn,{ref:j}),p.jsx("div",{className:"flex-1 flex flex-col gap-1.5 pointer-events-auto h-full pb-2",children:Array.from({length:C.length/4}).map((O,N)=>{const B=C.slice(N*4,N*4+4),F=B.every(g=>g.status==="solved");return p.jsxs("div",{className:"flex-1 relative min-h-0 overflow-visible",children:[F&&p.jsx(Ud,{seed:B[0].categoryId}),F&&p.jsx("div",{className:"absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]",children:p.jsx("div",{className:"px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-2 border-t-2 border-white text-white shadow-[0_-4px_12px_rgba(0,0,0,0.5)]",children:B[0].categoryName})}),p.jsx("div",{className:`grid grid-cols-4 gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${F?"p-3":"p-1"}`,children:B.map(g=>p.jsx(Wn,{data:g,onClick:ue,ref:D=>{D&&U.current.set(g.id,D)}},g.id))})]},N)})})]})}const p0=({onComplete:n,levelIndex:i,hintsEnabled:r,setHintsEnabled:l,onOpenSettings:c,isReviewing:S,onNext:d,isAutoPlaying:E})=>{const[h,m]=y.useState([]),[T,f]=y.useState(null),[C,L]=y.useState(!0),[G,K]=y.useState(!1),[b,M]=y.useState(!1),[x,J]=y.useState(0),[ne,ie]=y.useState(0),[ce,ae]=y.useState(0),[te,he]=y.useState(0),[Ae,pe]=y.useState(new Set),Re=y.useRef(Date.now()),me=y.useRef(Date.now()),ve=y.useRef(new Map),Ne=y.useRef(null),U=3;y.useEffect(()=>{if(b){const O=setTimeout(()=>{M(!1),f(null)},2e3);return()=>clearTimeout(O)}},[b]),y.useEffect(()=>{M(!1),f(null),r&&(me.current=Date.now())},[r]);const j=y.useMemo(()=>{const O=new Map;return h.forEach(N=>{if(!O.has(N.categoryId)){const B=h.filter(F=>F.categoryId===N.categoryId);O.set(N.categoryId,{name:N.categoryName,isSolved:B.every(F=>F.status==="solved")})}}),Array.from(O.values())},[h]);y.useEffect(()=>{if(C||G)return;const O=new Set;for(let N=0;N<h.length/U;N++){const B=h.slice(N*U,N*U+U);if(B.every(g=>g.status==="solved"))continue;const F={};B.forEach(g=>{F[g.categoryId]=(F[g.categoryId]||0)+1}),Object.values(F).some(g=>g===2)&&O.add(N)}pe(O)},[h,C,G]);const re=y.useCallback(O=>{var D;const N=[...O];let B=!1,F=0;const g=N.length/U;for(let v=0;v<g;v++){const W=N.slice(v*U,v*U+U);if(W.every($=>$.status==="solved")){F++;continue}if(W.every($=>$.categoryId===W[0].categoryId)){B=!0,F++,Le.playRowSolved(),me.current=Date.now(),he(Q=>Q+1);const $=ua[0].solvedColors[v%ua[0].solvedColors.length];for(let Q=v*U;Q<v*U+U;Q++){const _=N[Q].id,z=(D=ve.current.get(_))==null?void 0:D.getBoundingClientRect();z&&Ne.current&&Ne.current.explode(z.left+z.width/2,z.top+z.height/2,"#FFFFFF"),N[Q]={...N[Q],status:"solved",color:$,isSolved:!0}}}}if(B?m(N):ie(v=>v+1),F===g&&g>0&&!G){Le.playWin(),K(!0);const v=Array.from(new Set(N.map($=>$.categoryId))),W=N.map($=>$.word);setTimeout(()=>n({timeMs:Date.now()-Re.current,hintsUsedCount:ce,hintsUsed:ce,moves:x,mistakes:ne,rowEfficiency:te,solvedCategoryIds:v,solvedWords:W}),1e3)}},[G,x,n,ce,ne,te]);y.useEffect(()=>{if(!E||G||b||C||S)return;const N=setTimeout(()=>{if(document.hidden)return;const B=U,F=Math.floor(h.length/B);let g=-1;for(let z=0;z<F;z++)if(!h.slice(z*B,(z+1)*B).every(Z=>Z.status==="solved")){g=z;break}if(g===-1)return;const D=new Set(h.filter(z=>!z.isSolved).map(z=>z.categoryId));if(D.size===0)return;const v=Array.from(D)[0],W=g*B,$=W+B;let Q=null;for(let z=0;z<h.length;z++)if(!(z>=W&&z<$)&&h[z].categoryId===v&&!h[z].isSolved){Q=h[z].id;break}let _=null;for(let z=W;z<$;z++)if(h[z].categoryId!==v&&!h[z].isSolved){_=h[z].id;break}Q&&_&&se(T?T===Q?_:T===_?Q:T:Q)},400);return()=>clearTimeout(N)},[E,G,b,h,C,S,T]),y.useEffect(()=>{const O=zo(),B=Vi(7,O,3),F=[];for(const g of B)g.words.slice(0,3).forEach(v=>{F.push({id:Math.random().toString(36).substr(2,9),word:v,categoryId:g.id,categoryName:g.name,status:"neutral",isEmoji:!0,isSolved:!1})});m(F.sort(()=>.5-Math.random())),L(!1),J(0),ie(0),he(0),Re.current=Date.now(),me.current=Date.now()},[i]);const ue=()=>{if(G||b||!r)return;const O=h.filter(Q=>Q.status==="neutral"||Q.status==="selected");if(O.length<2)return;const N=Array.from(new Set(O.map(Q=>Q.categoryId)));if(N.length===0)return;const B=new Map;for(let Q=0;Q<h.length/U;Q++){const z=h.slice(Q*U,Q*U+U).filter(oe=>oe.status==="locked");z.length>0&&B.set(z[0].categoryId,Q)}let F=N.find(Q=>B.has(Q));if(F||(F=N[Math.floor(Math.random()*N.length)]),!F)return;const g=O.filter(Q=>Q.categoryId===F);if(g.length<2)return;const D=g.slice(0,2);let v=B.get(F)??-1;if(v===-1){const Q=[];for(let _=0;_<h.length/U;_++){const z=h.slice(_*U,_*U+U);!z.every(oe=>oe.status==="solved")&&!z.some(oe=>oe.status==="locked")&&Q.push(_)}if(Q.length===0)return;v=Q[Math.floor(Math.random()*Q.length)]}const W=[...h],$=v*U;D.forEach(Q=>{let _=-1;for(let oe=0;oe<U;oe++)if(W[$+oe].status!=="locked"&&W[$+oe].status!=="solved"){_=$+oe;break}if(_===-1)return;const z=W.findIndex(oe=>oe.id===Q.id);if(z!==_){const oe=W[_];W[_]={...W[z],status:"locked"},W[z]={...oe,status:oe.status==="locked"?"locked":"neutral"}}else W[_]={...W[_],status:"locked"}}),m(W),Le.playTick(),ae(Q=>Q+1),me.current=Date.now(),setTimeout(()=>re(W),50)};y.useEffect(()=>{if(G||C||!r)return;const O=setInterval(()=>{document.hidden||Date.now()-me.current>9e4&&ue()},1e3);return()=>clearInterval(O)},[G,C,r,h]);const se=O=>{if(G||b)return;const N=h.find(B=>B.id===O);if(!(!N||N.status==="solved"||N.status==="locked"))if(T===null)Le.playSelect(),f(O),m(B=>B.map(F=>F.id===O?{...F,status:"selected"}:F));else if(T===O)f(null),m(B=>B.map(F=>F.id===O?{...F,status:"neutral"}:F));else{const B=h.findIndex(g=>g.id===T),F=h.findIndex(g=>g.id===O);if(B===-1||F===-1)return;M(!0),J(g=>g+1),Le.playSwap(),m(g=>g.map(D=>D.id===T?{...D,status:"swapping"}:D.id===O?{...D,status:"swap-target"}:D)),setTimeout(()=>{m(g=>{const D=[...g],v=D[B],W=D[F];return D[B]={...v,word:W.word,categoryId:W.categoryId,categoryName:W.categoryName,isEmoji:W.isEmoji},D[F]={...W,word:v.word,categoryId:v.categoryId,categoryName:v.categoryName,isEmoji:v.isEmoji},D}),setTimeout(()=>{m(g=>g.map(D=>D.id===T||D.id===O?{...D,status:"fading-out-bg"}:D)),setTimeout(()=>{m(g=>{const D=g.map(v=>v.status==="fading-out-bg"?{...v,status:"neutral"}:v);return setTimeout(()=>re(D),50),D}),f(null),M(!1)},250)},450)},50)}};return C?null:p.jsxs(nr,{modeName:"EMOJI",levelIndex:i,onOpenSettings:()=>c==null?void 0:c(j),isReviewing:S,onNext:d,hintsEnabled:r,onToggleHints:()=>l(!r),children:[p.jsx(Yn,{ref:Ne}),p.jsx("div",{className:"flex-1 flex flex-col gap-1.5 overflow-visible pointer-events-auto h-full pb-2",children:Array.from({length:h.length/U}).map((O,N)=>{const B=h.slice(N*U,N*U+U),F=B.every(D=>D.status==="solved"),g=Ae.has(N);return p.jsxs("div",{className:"flex-1 relative min-h-0 overflow-visible",children:[F&&p.jsx(Ud,{seed:B[0].categoryId}),p.jsx("div",{className:`
                    absolute inset-0 z-0 transition-opacity duration-500 rounded-medium
                    ${g&&!F?"bg-white/5 border border-white/40 animate-pulse-highlight":"opacity-0"}
                  `}),F&&p.jsx("div",{className:"absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]",children:p.jsx("div",{className:"px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white whitespace-nowrap shadow-[0_-4px_12px_rgba(0,0,0,0.5)]",children:B[0].categoryName})}),p.jsx("div",{className:`grid grid-cols-3 gap-1.5 w-full h-full relative z-10 rounded-small transition-all duration-300 ${F?"p-3":"p-1"}`,children:B.map(D=>p.jsx(Wn,{data:D,onClick:se,ref:v=>{v&&ve.current.set(D.id,v)}},D.id))})]},N)})})]})},g0=({csvData:n,onComplete:i,onGameOver:r,levelIndex:l,onThemeChange:c,hintsEnabled:S,setHintsEnabled:d,onOpenSettings:E,isReviewing:h,onNext:m,isAutoPlaying:T})=>{const[f,C]=y.useState(null),[L,G]=y.useState([]),[K,b]=y.useState(0),[M,x]=y.useState(0),[J,ne]=y.useState(!1),[ie,ce]=y.useState(null),[ae,te]=y.useState(!1),[he,Ae]=y.useState(0),[pe,Re]=y.useState(!1),[me,ve]=y.useState(ua[0]),[Ne,U]=y.useState(0),[j,re]=y.useState(0),[ue,se]=y.useState(0),O=y.useRef(Date.now()),N=y.useRef(Date.now()),B=y.useRef(null),F=y.useRef([]),g=6,D=5,v=3;y.useEffect(()=>{Le.resume(),N.current=Date.now(),F.current=[]},[l]),y.useEffect(()=>{S&&(O.current=Date.now())},[S]),y.useEffect(()=>{if(!T||ae||J||h||ie)return;const z=setTimeout(()=>{if(document.hidden)return;const oe=L.find(Z=>Z.categoryId===(f==null?void 0:f.id)&&Z.status!=="solved"&&Z.status!=="locked");oe&&Q(oe.id)},600);return()=>clearTimeout(z)},[T,ae,J,L,ie,f,h]),y.useEffect(()=>{if(ae||J||!S)return;const _=setInterval(()=>{document.hidden||Date.now()-O.current>9e4&&W()},1e3);return()=>clearInterval(_)},[L,ae,J,S]);const W=()=>{if(!S)return;const _=L.filter(Z=>Z.categoryId===(f==null?void 0:f.id)&&Z.status==="neutral");if(_.length<2)return;const z=new Map;for(let Z=0;Z<L.length/v;Z++){const de=L.slice(Z*v,Z*v+v).filter(Ue=>Ue.status==="locked");de.length>0&&z.set(de[0].categoryId,Z)}let oe=z.get(f.id)??-1;if(oe===-1){const Z=[];for(let le=0;le<L.length/v;le++)L.slice(le*v,le*v+v).some(Ze=>Ze.status==="locked"||Ze.status==="solved"||Ze.status==="wrong")||Z.push(le);if(Z.length===0)return;oe=Z[Math.floor(Math.random()*Z.length)]}G(Z=>{const le=[...Z],de=oe*v;return _.slice(0,2).forEach(Ze=>{let at=-1;for(let bt=0;bt<v;bt++)if(le[de+bt].status==="neutral"){at=de+bt;break}if(at===-1)return;const Ht=le.findIndex(bt=>bt.id===Ze.id);if(Ht!==at){const bt=le[at];le[at]={...le[Ht],status:"locked"},le[Ht]={...bt,status:bt.status==="locked"?"locked":"neutral"}}else le[at]={...le[at],status:"locked"}}),le}),Le.playTick(),re(Z=>Z+1),O.current=Date.now()},$=(_=!1)=>{if(ae)return;_||ne(!0);const z=()=>{const Z=ua[0];ve(Z),U(0),O.current=Date.now();const le=Vi(10,n,6);if(le.length===0){Re(!0),ne(!1);return}const de=le[0],Ue=le.slice(1);oe(de,Ue)},oe=(Z,le)=>{C(Z);const de=Z.words.slice(0,6),Ue=le.flatMap(Ht=>Ht.words),Ze=Gi(Ue).slice(0,6),at=Gi([...de.map(Ht=>({id:Math.random().toString(36).substr(2,9),word:Ht,categoryId:Z.id,categoryName:Z.name,status:"neutral"})),...Ze.map(Ht=>({id:Math.random().toString(36).substr(2,9),word:Ht,categoryId:"incorrect",categoryName:"Incorrect",status:"neutral"}))]);G(at),ne(!1)};_?z():setTimeout(z,400)};y.useEffect(()=>{$(!0)},[n]);const Q=_=>{if(J||ae||ie)return;const z=L.findIndex(Z=>Z.id===_);if(z===-1||["solved","wrong","locked"].includes(L[z].status))return;se(Z=>Z+1);const oe=L[z];if(oe.categoryId===(f==null?void 0:f.id)){Le.playCorrect(),O.current=Date.now();const Z=[...L],le=me.solvedColors[Ne%me.solvedColors.length];Z[z]={...oe,status:"solved",color:le},G(Z),F.current.push(oe.word),U(de=>{const Ue=de+1;return Ue===6&&(ce("MATCH!"),x(Ze=>{const at=Ze+1;return at>=g?setTimeout(()=>{te(!0),i({mode:"TARGET FILTER",mistakes:he,hintsUsedCount:j,moves:ue,timeMs:Date.now()-N.current,solvedWords:F.current})},1e3):setTimeout(()=>{ce(null),$()},1200),at})),Ue})}else{Le.playError();const Z=K+1;b(Z),Ae(le=>le+1),G(le=>le.map(de=>de.id===_?{...de,status:"wrong"}:de)),Z>=D?(te(!0),r()):setTimeout(()=>G(le=>le.map(de=>de.id===_?{...de,status:"neutral"}:de)),500)}};return pe?null:p.jsxs(nr,{modeName:"TARGET FILTER",levelIndex:l,onOpenSettings:()=>E==null?void 0:E([{name:(f==null?void 0:f.name)||"Loading",isSolved:Ne===6}]),isReviewing:h,onNext:m,hintsEnabled:S,onToggleHints:()=>d(!S),onTurnOffHints:()=>{d(!1)},headerExtras:p.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-[9px]",children:[p.jsxs("div",{className:"bg-zinc-950 border border-zinc-700 px-2 py-1 rounded-full flex items-center shadow-sm",children:[p.jsx("span",{className:"text-zinc-500 mr-1",children:"FOUND"}),p.jsxs("span",{className:"text-white",children:[Ne,"/6"]})]}),p.jsxs("div",{className:"bg-zinc-900 border border-zinc-700 px-2 py-1 rounded-full flex items-center shadow-sm",children:[p.jsx("span",{className:"text-zinc-500 mr-1",children:"ROUND"}),p.jsxs("span",{className:"text-white",children:[M+1,"/",g]})]})]}),children:[p.jsx(Yn,{ref:B}),p.jsxs("div",{className:"w-full flex-1 grid grid-cols-3 grid-rows-4 gap-3 py-2 min-h-0 relative z-10 pt-4",children:[L.map(_=>p.jsx("div",{className:"relative w-full h-full",children:p.jsx(Wn,{data:_,onClick:Q})},_.id)),ie&&p.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center pointer-events-none",children:p.jsx("div",{className:"bg-black/90 border-4 border-white px-8 py-4 rounded-xl shadow-2xl animate-pop",children:p.jsx("span",{className:"text-white font-black font-oswald text-4xl uppercase tracking-tighter italic shadow-[0_0_15px_rgba(255,255,255,0.5)]",children:ie})})})]}),p.jsx("div",{className:"w-full mt-2 bg-zinc-950/50 p-2 rounded-lg border border-zinc-800 flex justify-center gap-1 shrink-0",children:Array.from({length:D}).map((_,z)=>p.jsx("div",{className:`w-4 h-4 rounded-full border-2 ${z<K?"bg-neon-red border-white shadow-[0_0_5px_red]":"bg-zinc-800 border-zinc-700"}`},z))})]})},N0=({csvData:n,onComplete:i,levelIndex:r,onOpenSettings:l,isReviewing:c,onNext:S,hintsEnabled:d,setHintsEnabled:E,isAutoPlaying:h})=>{const[m,T]=y.useState([]),[f,C]=y.useState([]),[L,G]=y.useState(1),[K,b]=y.useState(0),[M,x]=y.useState(0),[J,ne]=y.useState(0),[ie,ce]=y.useState(90),[ae,te]=y.useState(!1),[he,Ae]=y.useState(0),[pe,Re]=y.useState([]),me=y.useRef(Date.now()),ve=y.useRef(null),Ne=y.useRef(Date.now()),U=y.useRef(new Map),j=y.useRef([]);y.useEffect(()=>{C([]),d&&(me.current=Date.now())},[d]),y.useEffect(()=>{if(c||ae)return;const g=Vi(4,n,4),D=[];for(const v of g)v.words.slice(0,4).forEach($=>{D.push({id:Math.random().toString(36).substr(2,9),word:$,categoryId:v.id,categoryName:v.name,status:"neutral"})});T(D.sort(()=>.5-Math.random())),C([]),x(0),ce(Math.max(15,90-(L-1)*20)),me.current=Date.now()},[L,n,c]);const re=y.useCallback(()=>{ae||(Le.playError(),te(!0),i({roundsWon:J,timeMs:Date.now()-Ne.current,moves:12,failed:!0,mistakes:K,hintsUsedCount:he,solvedCategoryIds:pe,solvedWords:j.current}))},[ae,J,K,he,pe,i]);y.useEffect(()=>{if(ae||c)return;const g=setInterval(()=>{document.hidden||ce(D=>Math.max(0,D-1))},1e3);return()=>clearInterval(g)},[ae,c,L]),y.useEffect(()=>{ie===0&&!ae&&!c&&re()},[ie,ae,c,re]),y.useEffect(()=>{if(ae||c||!d)return;const g=setInterval(()=>{document.hidden||Date.now()-me.current>9e4&&ue()},1e3);return()=>clearInterval(g)},[m,ae,c,d]);const ue=()=>{if(ae||c||!d)return;const g=m.filter(W=>W.status!=="solved");if(g.length<2)return;const D=g[0].categoryId,v=g.filter(W=>W.categoryId===D).slice(0,2);T(W=>W.map($=>v.some(Q=>Q.id===$.id)?{...$,status:"correct-preview"}:$)),Le.playTick(),Ae(W=>W+1),me.current=Date.now(),setTimeout(()=>{T(W=>W.map($=>$.status==="correct-preview"?{...$,status:"neutral"}:$))},1500)},se=y.useCallback((g,D,v)=>{ae||(g>0?Le.playWin():Le.playError(),te(!0),i({roundsWon:g,timeMs:Date.now()-Ne.current,moves:12,hintsUsedCount:he,mistakes:D,solvedCategoryIds:v,solvedWords:j.current}))},[i,he,ae]),O=y.useCallback((g,D,v)=>{L>=3?se(g,D,v):setTimeout(()=>G(W=>W+1),600)},[L,se]),N=y.useCallback((g,D)=>{const v=D.filter(W=>g.includes(W.id));if(v.length===4&&v.every(W=>W.categoryId===v[0].categoryId)){Le.playRowSolved(),me.current=Date.now();const W=v[0].categoryId,$=Array.from(new Set([...pe,W]));Re($);const Q=v.map(le=>le.word);j.current.push(...Q);const _=ua[0].solvedColors,z=_[($.length-1)%_.length],oe=D.map(le=>g.includes(le.id)?{...le,status:"solved",color:z}:le);T(oe),C([]);let Z="#39FF14";if(z.includes("red")?Z="#FF073A":z.includes("orange")?Z="#FF5F1F":z.includes("yellow")||z.includes("gold")?Z="#F9FF00":z.includes("cyan")?Z="#00FFFF":z.includes("blue")?Z="#0066FF":z.includes("purple")?Z="#D400FF":z.includes("violet")?Z="#B026FF":z.includes("pink")?Z="#FF1FBF":z.includes("magenta")&&(Z="#FF00FF"),g.forEach(le=>{var Ue;const de=(Ue=U.current.get(le))==null?void 0:Ue.getBoundingClientRect();de&&ve.current&&ve.current.explode(de.left+de.width/2,de.top+de.height/2,Z)}),oe.every(le=>le.status==="solved")){const le=J+1;ne(le),O(le,K,$)}}else if(g.length===4){Le.playError();const W=K+1,$=M+1;b(W),x($),T(Q=>Q.map(_=>g.includes(_.id)?{..._,status:"wrong"}:_)),setTimeout(()=>{$>=3?O(J,W,pe):(T(Q=>Q.map(_=>_.status==="wrong"?{..._,status:"neutral"}:_)),C([]))},500)}},[L,M,K,pe,O,J]);y.useEffect(()=>{if(!h||ae||c)return;const D=setTimeout(()=>{if(document.hidden||f.length===4)return;let v=null;if(f.length>0){const W=m.find($=>$.id===f[0]);W&&(v=W.categoryId)}else{const W=m.find($=>$.status==="neutral");W&&(v=W.categoryId)}if(v){const W=m.find($=>$.categoryId===v&&$.status==="neutral"&&!f.includes($.id));W&&B(W.id)}},400);return()=>clearTimeout(D)},[h,ae,c,m,f]);const B=g=>{if(ae||ie===0||c)return;const D=m.find(_=>_.id===g);if(!D||D.status==="solved"||D.status==="wrong")return;Le.playSelect();const W=f.includes(g)?f.filter(_=>_!==g):[...f,g].slice(0,4);C(W);const Q=(()=>{if(W.length===3){const _=m.filter(z=>W.includes(z.id));return _.every(z=>z.categoryId===_[0].categoryId)}return!1})();T(_=>_.map(z=>z.status==="solved"?z:W.includes(z.id)?{...z,status:Q?"correct-preview":"selected"}:{...z,status:"neutral"})),W.length===4&&setTimeout(()=>N(W,m),150)},F=y.useMemo(()=>{const g=new Map;return m.forEach(D=>{if(!g.has(D.categoryId)){const v=m.filter(Q=>Q.categoryId===D.categoryId),W=v.every(Q=>Q.status==="solved"),$=W?v[0].color:void 0;g.set(D.categoryId,{name:D.categoryName,isSolved:W,color:$})}}),Array.from(g.values()).sort((D,v)=>D.name.localeCompare(v.name))},[m]);return p.jsxs("div",{className:"flex flex-col h-full w-full max-w-4xl mx-auto overflow-hidden relative bg-black",children:[p.jsx(Fd,{modeName:"MIND MATCH",levelIndex:r,onOpenSettings:()=>l==null?void 0:l(F.map(g=>({name:g.name,isSolved:g.isSolved}))),isReviewing:c,onNext:S,hintsEnabled:d,onToggleHints:()=>E==null?void 0:E(!d),leftContent:p.jsxs("div",{className:"flex items-center gap-4 pl-1",children:[p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("div",{className:"mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase",children:"TIMER"}),p.jsxs("span",{className:`text-lg md:text-xl font-bold font-oswald ${ie<10?"text-neon-red animate-pulse":"text-white"}`,children:[ie,"s"]})]}),p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("div",{className:"mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase",children:"ROUND"}),p.jsxs("span",{className:"text-lg md:text-xl font-bold font-oswald text-white",children:[L,"/3"]})]}),p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("div",{className:"mb-0.5 text-[10px] font-bold text-zinc-400 font-oswald tracking-widest uppercase",children:"MISS"}),p.jsxs("span",{className:"text-lg md:text-xl font-bold font-oswald text-white",children:[M,"/3"]})]})]})}),p.jsxs("main",{className:"flex-1 flex flex-col p-2 pt-0 w-full relative",children:[p.jsx("div",{className:"w-full mb-2 z-20 px-1",children:p.jsx("div",{className:"grid grid-cols-2 gap-2 w-full",children:F.map(g=>p.jsx("div",{className:`
                      relative w-full h-8 md:h-12 rounded-lg border-2 border-white
                      flex items-center justify-center overflow-hidden transition-all duration-500
                      ${g.isSolved?"shadow-none":"bg-black"}
                    `,style:g.isSolved?{background:eR(g.color,g.name)}:{},children:p.jsx("span",{className:`
                      relative z-10 font-black font-oswald uppercase text-xs md:text-sm tracking-wide text-center px-1 leading-tight
                      ${g.isSolved?"text-white":"text-zinc-300"}
                    `,style:g.isSolved?{textShadow:"3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 4px rgba(0,0,0,0.8)"}:{},children:g.name})},g.name))})}),p.jsx("div",{className:"grid grid-cols-4 gap-2 flex-1 min-h-0",children:m.map(g=>p.jsx(Wn,{data:g,onClick:B,ref:D=>{D&&U.current.set(g.id,D)}},g.id))})]}),p.jsx(Yn,{ref:ve})]})},Is=7,ys=5,CT=[{rows:3,cols:2},{rows:5,cols:3},{rows:6,cols:4},{rows:7,cols:5}],I0=({csvData:n,onComplete:i,onExit:r,levelIndex:l,hintsEnabled:c,onOpenSettings:S,setHintsEnabled:d,isReviewing:E,onNext:h,isAutoPlaying:m})=>{const[T,f]=y.useState(1),[C,L]=y.useState(!0),[G,K]=y.useState(null),[b,M]=y.useState(!1),[x,J]=y.useState(!1),[ne,ie]=y.useState(!1),[ce,ae]=y.useState(Array.from({length:Is},()=>Array(ys).fill(null))),[te,he]=y.useState([0,1,2]),[Ae,pe]=y.useState([0,1]),[Re,me]=y.useState(null),[ve,Ne]=y.useState(0),[U,j]=y.useState(0),re=y.useRef([]),ue=y.useRef(Date.now()),se=y.useRef(null),O=y.useRef(new Map),N=y.useCallback((v,W)=>{let $=Gi([...W]);for(let Q=0;Q<15;Q++){let _=[];for(let z=0;z<v.length;z++){const[oe]=v[z],Z=$[z].categoryId;re.current.findIndex(de=>de.id===Z)===oe&&_.push(z)}if(_.length===0)break;for(const z of _){const[oe]=v[z],Z=$.findIndex((le,de)=>{const[Ue]=v[de],Ze=re.current.findIndex(at=>at.id===le.categoryId);return Ue!==re.current.findIndex(at=>at.id===$[z].categoryId)&&oe!==Ze});if(Z!==-1){const le=$[z];$[z]=$[Z],$[Z]=le}}}return $},[]),B=y.useCallback(()=>{try{if(!n||n.length===0){K("No data"),L(!1);return}const v=Vi(Is,n,ys);if(v.length<Is){K("Data error"),L(!1);return}re.current=v;const W=Array.from({length:Is},()=>Array(ys).fill(null));v.forEach((oe,Z)=>{const le=[...oe.words];for(let de=0;de<ys;de++)W[Z][de]={id:Math.random().toString(36).substr(2,9),word:le[de],categoryId:oe.id,categoryName:oe.name.includes(":")?oe.name.split(":")[1].trim():oe.name,status:"neutral",isSolved:!1}});const $=CT[0],Q=[];for(let oe=0;oe<$.rows;oe++)for(let Z=0;Z<$.cols;Z++)Q.push([oe,Z]);const _=Q.map(([oe,Z])=>({...W[oe][Z]})),z=N(Q,_);Q.forEach(([oe,Z],le)=>{W[oe][Z]=z[le]}),ae(W),he(Array.from({length:$.rows},(oe,Z)=>Z)),pe(Array.from({length:$.cols},(oe,Z)=>Z)),L(!1),ue.current=Date.now()}catch{K("Init failure"),L(!1)}},[n,N]);y.useEffect(()=>{B()},[l,B]);const F=y.useCallback(()=>{const v=T+1;if(v>4)return;M(!0),Le.playLevelStart();const W=CT[v-1];ae($=>{const Q=$.map(Z=>[...Z]),_=[],z=[];for(let Z=0;Z<W.rows;Z++)for(let le=0;le<W.cols;le++){const de=Q[Z][le];(!de||de.status!=="solved")&&(_.push([Z,le]),z.push(de))}const oe=N(_,z);return _.forEach(([Z,le],de)=>{Q[Z][le]=oe[de]}),Q}),he(Array.from({length:W.rows},($,Q)=>Q)),pe(Array.from({length:W.cols},($,Q)=>Q)),f(v),M(!1)},[T,N]),g=y.useCallback(v=>{let W=!1,$=0;const Q=v.map(_=>[..._]);te.forEach(_=>{const z=Ae.map(Z=>Q[_][Z]);if(z.every(Z=>Z&&Z.status==="solved")){$++;return}const oe=re.current[_].id;if(z.every(Z=>Z.categoryId===oe)){W=!0,$++,Le.playRowSolved();const Z=ua[0].solvedColors[_%ua[0].solvedColors.length];Ae.forEach(le=>{var Ue;const de=Q[_][le];if(de){const Ze=(Ue=O.current.get(de.id))==null?void 0:Ue.getBoundingClientRect();Ze&&se.current&&se.current.explode(Ze.left+Ze.width/2,Ze.top+Ze.height/2,"#FFFFFF"),Q[_][le]={...de,status:"solved",isSolved:!0,color:Z}}})}}),W&&ae(Q),$===te.length&&(T<4?setTimeout(F,1e3):x||(Le.playWin(),J(!0),setTimeout(()=>i({timeMs:Date.now()-ue.current,hintsUsedCount:U,moves:ve,mistakes:0,solvedCategoryIds:Array.from(new Set(Q.flat().filter(_=>_&&_.status==="solved").map(_=>_.categoryId))),solvedWords:Q.flat().filter(_=>_&&_.status==="solved").map(_=>_.word)}),3e3)))},[te,Ae,T,x,F,U,ve,i]),D=(v,W)=>{if(x||ne||b||E)return;const $=ce[v][W];if(!(!$||$.status==="solved"||$.status==="locked"))if(Re===null)Le.playSelect(),me({r:v,c:W}),ae(Q=>{const _=Q.map(z=>[...z]);return _[v][W]={..._[v][W],status:"selected"},_});else if(Re.r===v&&Re.c===W)me(null),ae(Q=>{const _=Q.map(z=>[...z]);return _[v][W]={..._[v][W],status:"neutral"},_});else{const{r:Q,c:_}=Re;ie(!0),Ne(z=>z+1),Le.playSwap(),ae(z=>{const oe=z.map(Z=>[...Z]);return oe[Q][_]={...oe[Q][_],status:"swapping"},oe[v][W]={...oe[v][W],status:"swap-target"},oe}),setTimeout(()=>{ae(z=>{const oe=z.map(de=>[...de]),Z={...oe[Q][_]},le={...oe[v][W]};return oe[Q][_]={...Z,word:le.word,categoryId:le.categoryId,categoryName:le.categoryName,color:le.color},oe[v][W]={...le,word:Z.word,categoryId:Z.categoryId,categoryName:Z.categoryName,color:Z.color},oe}),setTimeout(()=>{ae(z=>z.map(oe=>oe.map(Z=>(Z==null?void 0:Z.status)==="swapping"||(Z==null?void 0:Z.status)==="swap-target"?{...Z,status:"fading-out-bg"}:Z))),setTimeout(()=>{ae(z=>{const oe=z.map(Z=>Z.map(le=>(le==null?void 0:le.status)==="fading-out-bg"?{...le,status:"neutral"}:le));return setTimeout(()=>g(oe),50),oe}),me(null),ie(!1)},250)},450)},50)}};return y.useEffect(()=>{if(!m||x||ne||C||E||b)return;const W=setTimeout(()=>{if(document.hidden)return;let $=te.find(oe=>!Ae.every(Z=>{var le;return((le=ce[oe][Z])==null?void 0:le.status)==="solved"}));if($===void 0)return;const Q=re.current[$].id,_=Ae.find(oe=>{var Z,le;return((Z=ce[$][oe])==null?void 0:Z.categoryId)!==Q&&((le=ce[$][oe])==null?void 0:le.status)!=="solved"});if(_===void 0)return;let z=null;for(const oe of te){if(oe===$)continue;const Z=Ae.find(le=>{var de,Ue;return((de=ce[oe][le])==null?void 0:de.categoryId)===Q&&((Ue=ce[oe][le])==null?void 0:Ue.status)!=="solved"});if(Z!==void 0){z={r:oe,c:Z};break}}z&&(Re?Re.r===z.r&&Re.c===z.c?D($,_):D(Re.r,Re.c):D(z.r,z.c))},800);return()=>clearTimeout(W)},[m,x,ne,ce,C,E,b,Re,te,Ae]),C?null:p.jsxs(nr,{modeName:"EXPANSION",levelIndex:l,onOpenSettings:()=>S==null?void 0:S([]),isReviewing:E,onNext:h,hintsEnabled:c,onToggleHints:()=>d==null?void 0:d(!c),children:[p.jsx(Yn,{ref:se}),p.jsx("div",{className:"flex-1 flex flex-col gap-1.5 pointer-events-auto p-1 h-full overflow-visible pt-5 pb-2",children:te.map(v=>{const W=Ae.map(_=>ce[v][_]),$=W.every(_=>(_==null?void 0:_.status)==="solved"),Q=W[0];return p.jsxs("div",{className:"flex-1 relative min-h-0 overflow-visible",children:[$&&p.jsx(Ud,{seed:(Q==null?void 0:Q.categoryId)||v}),$&&p.jsx("div",{className:"absolute top-0 left-8 z-[100] transform -translate-y-[calc(100%-4px)]",children:p.jsx("div",{className:"px-3 py-0.5 rounded-t-lg text-[9px] font-black uppercase bg-black border-x-4 border-t-4 border-white text-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap",children:Q==null?void 0:Q.categoryName})}),p.jsx("div",{className:`grid gap-1.5 w-full h-full relative z-10 transition-all duration-300 ${$?"p-2":"p-1"}`,style:{gridTemplateColumns:`repeat(${Ae.length}, 1fr)`},children:W.map((_,z)=>_&&p.jsx(Wn,{data:_,onClick:()=>D(v,z),isNarrow:Ae.length>4,ref:oe=>{oe&&O.current.set(_.id,oe)}},_.id))})]},v)})})]})},Ea=6,Ua=9,y0=2500,L0=200,M0=800;function P0({csvData:n,onComplete:i,onExit:r,levelIndex:l,hintsEnabled:c,onOpenSettings:S,setHintsEnabled:d,isReviewing:E,onNext:h,isAutoPlaying:m}){const[T,f]=y.useState(Array.from({length:Ua},()=>Array(Ea).fill(null))),[C,L]=y.useState(null),[G,K]=y.useState(!1),[b,M]=y.useState(0),[x,J]=y.useState(!1),[ne,ie]=y.useState(!0),[ce,ae]=y.useState([]),te=y.useRef(null),he=y.useRef(Date.now()),Ae=y.useRef(null),pe=Math.floor(b/10)+1,Re=Math.max(M0,y0-(pe-1)*L0);y.useEffect(()=>{const j=Vi(8,n,10);ae(j),ie(!1)},[n]);const me=y.useCallback(()=>{x||(J(!0),Le.playError(),i({timeMs:Date.now()-he.current,clearedTiles:b,speedReached:pe,moves:b/2,mistakes:0,failed:b<20}))},[x,b,pe,i]),ve=y.useCallback(()=>{x||E||ce.length===0||f(j=>{const re=j.map(F=>[...F]),ue=[];for(let F=0;F<Ea;F++)re[0][F]===null&&ue.push(F);if(ue.length===0)return me(),j;const se=ue[Math.floor(Math.random()*ue.length)],O=ce[Math.floor(Math.random()*ce.length)],N=O.words[Math.floor(Math.random()*O.words.length)],B={id:Math.random().toString(36).substr(2,9),word:N,categoryId:O.id,categoryName:O.name.includes(":")?O.name.split(":")[1].trim():O.name,status:"neutral",isSolved:!1,row:0,col:se,color:ua[0].solvedColors[parseInt(O.id)%ua[0].solvedColors.length]};return re[0][se]=B,re})},[x,E,ce,me]);y.useEffect(()=>{if(x||E||ne)return;const j=setInterval(()=>{f(re=>{let ue=!1;const se=re.map(O=>[...O]);for(let O=Ua-2;O>=0;O--)for(let N=0;N<Ea;N++)se[O][N]!==null&&se[O+1][N]===null&&(se[O+1][N]={...se[O][N],row:O+1},se[O][N]=null,ue=!0);return ue?se:re})},200);return()=>clearInterval(j)},[x,E,ne]),y.useEffect(()=>{if(x||E||ne)return;const j=()=>{ve(),Ae.current=setTimeout(j,Re)};return Ae.current=setTimeout(j,Re),()=>{Ae.current&&clearTimeout(Ae.current)}},[x,E,ne,Re,ve]);const Ne=j=>{if(x||E||G)return;const re=se=>{var O;for(let N=0;N<Ua;N++)for(let B=0;B<Ea;B++)if(((O=T[N][B])==null?void 0:O.id)===se)return{r:N,c:B,tile:T[N][B]};return null},ue=re(j);if(ue)if(C===null)Le.playSelect(),L(j),f(se=>se.map(O=>O.map(N=>(N==null?void 0:N.id)===j?{...N,status:"selected"}:N)));else if(C===j)L(null),f(se=>se.map(O=>O.map(N=>(N==null?void 0:N.id)===j?{...N,status:"neutral"}:N)));else{const se=re(C);if(!se){L(null);return}K(!0),Le.playSwap(),f(O=>O.map(N=>N.map(B=>B?B.id===C?{...B,status:"swapping"}:B.id===j?{...B,status:"swap-target"}:B:null))),setTimeout(()=>{f(O=>{const N=O.map(g=>[...g]),B=N[se.r][se.c],F=N[ue.r][ue.c];if(B&&F){const g={...B},D={...F};N[se.r][se.c]={...g,word:D.word,categoryId:D.categoryId,categoryName:D.categoryName,color:D.color},N[ue.r][ue.c]={...D,word:g.word,categoryId:g.categoryId,categoryName:g.categoryName,color:g.color}}return N}),setTimeout(()=>{f(O=>O.map(N=>N.map(B=>B?B.id===C||B.id===j?{...B,status:"fading-out-bg"}:B:null))),setTimeout(()=>{f(O=>{const N=O.map(B=>B.map(F=>F?F.status==="fading-out-bg"?{...F,status:"neutral"}:F:null));return U(N),N}),L(null),K(!1)},250)},450)},50)}},U=j=>{const re=new Set;for(let ue=0;ue<Ua;ue++)for(let se=0;se<Ea;se++){const O=j[ue][se];if(!O)continue;const N=[],B=new Set,F=[{r:ue,c:se}];for(;F.length>0;){const g=F.pop(),D=`${g.r},${g.c}`;if(B.has(D))continue;B.add(D);const v=j[g.r][g.c];(v==null?void 0:v.categoryId)===O.categoryId&&(N.push(g),g.r>0&&F.push({r:g.r-1,c:g.c}),g.r<Ua-1&&F.push({r:g.r+1,c:g.c}),g.c>0&&F.push({r:g.r,c:g.c-1}),g.c<Ea-1&&F.push({r:g.r,c:g.c+1}))}N.length>=2&&N.forEach(g=>re.add(`${g.r},${g.c}`))}re.size>0&&(Le.playRowSolved(),M(ue=>ue+re.size),f(ue=>{const se=ue.map(O=>[...O]);return re.forEach(O=>{const[N,B]=O.split(",").map(Number),F=se[N][B];if(F&&te.current){const g=document.querySelector(`[data-tile-id="${F.id}"]`),D=g==null?void 0:g.getBoundingClientRect();D&&te.current.explode(D.left+D.width/2,D.top+D.height/2,"#FFFFFF")}se[N][B]=null}),se}))};return y.useEffect(()=>{if(!m||x||E||G)return;const re=setTimeout(()=>{if(document.hidden)return;let ue=!1;for(let se=0;se<Ua;se++){for(let O=0;O<Ea;O++){const N=T[se][O];if(!N)continue;const B=[],F=new Set,g=[{r:se,c:O}];for(;g.length>0;){const D=g.pop(),v=`${D.r},${D.c}`;if(F.has(v))continue;F.add(v);const W=T[D.r][D.c];(W==null?void 0:W.categoryId)===N.categoryId&&(B.push(D),D.r>0&&g.push({r:D.r-1,c:D.c}),D.r<Ua-1&&g.push({r:D.r+1,c:D.c}),D.c>0&&g.push({r:D.r,c:D.c-1}),D.c<Ea-1&&g.push({r:D.r,c:D.c+1}))}if(B.length>=2){U(T),ue=!0;break}}if(ue)break}if(!ue)for(let se=Ua-1;se>=0;se--)for(let O=0;O<Ea;O++){const N=T[se][O];if(N){if(O<Ea-1){const B=T[se][O+1];if(B&&N.categoryId!==B.categoryId){C===null?Ne(N.id):C===N.id&&Ne(B.id);return}}if(se<Ua-1){const B=T[se+1][O];if(B&&N.categoryId!==B.categoryId){C===null?Ne(N.id):C===N.id&&Ne(B.id);return}}}}},1e3);return()=>clearTimeout(re)},[m,T,x,E,G,C]),ne?p.jsx("div",{className:"flex-1 flex items-center justify-center",children:p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"})}):p.jsxs(nr,{modeName:"CASCADE",levelIndex:l,onOpenSettings:()=>S==null?void 0:S([]),isReviewing:E,onNext:h,hintsEnabled:c,onToggleHints:()=>d==null?void 0:d(!c),headerExtras:p.jsxs("div",{className:"flex items-center gap-3 pr-2",children:[p.jsxs("div",{className:"flex flex-col items-end",children:[p.jsx("span",{className:"text-[8px] text-zinc-500 font-bold uppercase tracking-widest",children:"SPEED"}),p.jsx("span",{className:"text-sm font-black text-white",children:pe})]}),p.jsxs("div",{className:"flex flex-col items-end",children:[p.jsx("span",{className:"text-[8px] text-zinc-500 font-bold uppercase tracking-widest",children:"CLEARED"}),p.jsx("span",{className:"text-sm font-black text-neon-green",children:b})]})]}),children:[p.jsx(Yn,{ref:te}),p.jsx("div",{className:"flex-1 flex flex-col items-center justify-center w-full h-full relative p-2 overflow-hidden",children:p.jsxs("div",{className:"w-full h-full max-w-md bg-zinc-900/30 border-2 border-white rounded-medium relative shadow-2xl flex flex-col p-1 overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 grid grid-cols-6 grid-rows-9 opacity-5 pointer-events-none",children:Array.from({length:54}).map((j,re)=>p.jsx("div",{className:"border border-white"},re))}),p.jsx("div",{className:"flex-1 grid grid-cols-6 grid-rows-9 gap-1 relative z-10",children:T.map((j,re)=>j.map((ue,se)=>p.jsx("div",{className:"relative w-full h-full",children:ue&&p.jsx(zs.div,{layout:!0,initial:{y:-50,opacity:0},animate:{y:0,opacity:1},className:"absolute inset-0",children:p.jsx(Wn,{data:ue,onClick:Ne,"data-tile-id":ue.id,isCascade:!0})})},ue?ue.id:`empty-${re}-${se}`)))}),p.jsx("div",{className:"absolute top-0 left-0 w-full bg-neon-red/10 animate-pulse pointer-events-none",style:{height:`${100/9}%`}})]})})]})}const D0=zs.div,B0=({isOpen:n,onClose:i,selectedIds:r,onToggle:l})=>{const[c,S]=y.useState(""),d=y.useMemo(()=>[...Ds(),...Bs(),...zo()].sort((C,L)=>C.name.localeCompare(L.name)),[]),E=y.useMemo(()=>{if(!c.trim())return d;const f=c.toUpperCase();return d.filter(C=>C.name.toUpperCase().includes(f))},[c,d]),h=f=>{r.includes(f)?l(r.filter(C=>C!==f)):l([...r,f])},m=()=>{l(d.map(f=>f.id))},T=()=>{l([])};return n?p.jsx("div",{className:"absolute inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in font-oswald",children:p.jsxs(D0,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"w-full max-w-sm bg-zinc-950 border-4 border-white rounded-large p-4 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col gap-3 overflow-hidden h-[90vh]",children:[p.jsxs("div",{className:"flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[p.jsx("h2",{className:"text-xl font-black text-neon-yellow uppercase tracking-widest italic drop-shadow-[0_0_5px_rgba(249,255,0,0.8)]",children:"MANAGE POOL"}),p.jsx("button",{className:"text-zinc-400 hover:text-white transition-colors p-1",onClick:i,children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),p.jsx("p",{className:"text-[10px] text-zinc-500 font-bold uppercase tracking-wider leading-tight px-1",children:"Select categories you want to appear in your puzzles. If empty, the full global pool is used."}),p.jsx("div",{className:"flex gap-2 shrink-0",children:p.jsx("input",{type:"text",placeholder:"SEARCH CATEGORIES...",value:c,onChange:f=>S(f.target.value),className:"flex-1 bg-black border-2 border-zinc-800 rounded-medium px-3 py-2 text-white font-bold text-xs focus:border-neon-blue outline-none transition-colors"})}),p.jsxs("div",{className:"flex gap-2 shrink-0",children:[p.jsx("button",{onClick:m,className:"flex-1 py-1.5 bg-zinc-900 border border-zinc-700 text-[9px] font-black uppercase text-zinc-400 rounded-small hover:text-white transition-colors",children:"Select All"}),p.jsx("button",{onClick:T,className:"flex-1 py-1.5 bg-zinc-900 border border-zinc-700 text-[9px] font-black uppercase text-zinc-400 rounded-small hover:text-white transition-colors",children:"Clear All"})]}),p.jsx("div",{className:"flex-1 overflow-y-auto no-scrollbar pr-1 flex flex-col gap-1.5 bg-black/40 rounded-medium p-1",children:E.length===0?p.jsx("div",{className:"py-10 text-center text-zinc-700 font-bold uppercase text-xs",children:"No results found"}):E.map(f=>{const C=r.includes(f.id);return p.jsxs("button",{onClick:()=>h(f.id),className:`w-full flex items-center justify-between px-3 py-2.5 rounded-medium border-2 transition-all ${C?"bg-zinc-900 border-neon-blue text-white shadow-[0_0_8px_rgba(0,229,255,0.2)]":"bg-black border-zinc-800 text-zinc-600"}`,children:[p.jsx("span",{className:"font-bold text-[11px] uppercase tracking-tight truncate mr-2",children:f.name}),p.jsx("div",{className:`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${C?"border-neon-blue bg-neon-blue shadow-[0_0_5px_#00E5FF]":"border-zinc-800"}`,children:C&&p.jsx("span",{className:"text-[10px] text-black font-black",children:"✓"})})]},f.id)})}),p.jsx("div",{className:"pt-2 border-t border-zinc-800 shrink-0",children:p.jsxs("button",{onClick:i,className:"w-full py-3 bg-white text-black font-black text-lg uppercase rounded-medium active:scale-95 transition-all shadow-[0_0_15px_white]",style:Gd,children:["CONFIRM POOL (",r.length,")"]})})]})}):null},v0=()=>p.jsx("footer",{className:"w-full bg-black flex flex-col items-center justify-center shrink-0 z-[60]",style:{height:UO},children:p.jsx("div",{className:"w-full h-full bg-black flex items-center justify-center overflow-hidden"})}),H0=()=>p.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"max(env(safe-area-inset-top, 0px), 24px)"}}),b0=()=>p.jsx("div",{className:"w-full bg-black shrink-0 z-[100] select-none pointer-events-none",style:{height:"max(env(safe-area-inset-bottom, 0px), 16px)"}}),G0="ca-app-pub-4096368901415767/2019330695",Bc="ca-app-pub-4096368901415767/1153913539",F0=()=>{try{const n=document.createElement("div");n.style.height="env(safe-area-inset-bottom, 0px)",n.style.visibility="hidden",n.style.position="absolute",document.body.appendChild(n);const i=n.offsetHeight;return document.body.removeChild(n),Math.max(i,16)}catch{return 16}};class U0 extends y.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,r){console.error("Game crashed:",i,r)}render(){return this.state.hasError?p.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-4 text-center",children:[p.jsx("h1",{className:"text-3xl font-bold mb-4 font-oswald text-red-500 uppercase",children:"System Error"}),p.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-white text-black font-bold rounded-full uppercase font-oswald",children:"Reboot"})]}):this.props.children}}const k0=()=>p.jsx("div",{className:"flex items-center justify-center h-full w-full bg-black",children:p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"})}),w0=()=>{const[n,i]=y.useState(Te.MENU),[r,l]=y.useState(1),[c,S]=y.useState(!0),[d,E]=y.useState(!1),[h,m]=y.useState(!1),[T,f]=y.useState(!1),[C,L]=y.useState(!0),[G,K]=y.useState(!1),[b,M]=y.useState([]),[x,J]=y.useState(!1),[ne,ie]=y.useState([]),[ce,ae]=y.useState([]),[te,he]=y.useState(!1),[Ae,pe]=y.useState(null),[Re,me]=y.useState(void 0),[ve,Ne]=y.useState(!1),[U,j]=y.useState(!1);y.useEffect(()=>{l(xO()),ie(KO()),ae(YO())},[]),y.useEffect(()=>{(async()=>{if(!xn.isNativePlatform()){Ne(!0);return}try{await ha.initialize({});const D=await ha.requestConsentInfo();D.isConsentFormAvailable&&D.status===Gc.REQUIRED&&await ha.showConsentForm(),D.privacyOptionsRequirementStatus==="REQUIRED"&&j(!0);const v=F0();await ha.showBanner({adId:G0,adSize:bc.BANNER,position:Hc.BOTTOM_CENTER,margin:v,isTesting:!1});try{await ha.prepareInterstitial({adId:Bc,isTesting:!1})}catch(W){console.error("Interstitial prep failed",W)}}catch(D){console.error("AdMob/UMP initialization failed",D)}finally{Ne(!0)}})()},[]);const re=async()=>{if(xn.isNativePlatform())try{await ha.showPrivacyOptionsForm()}catch(g){console.error("Failed to show privacy options form",g)}};y.useEffect(()=>{let g=!0;return(()=>{try{const v=Tp(r,ne,ce,Re);g&&pe(v)}catch(v){console.error("Failed to load level package",v)}})(),()=>{g=!1}},[r,ne,ce,Re]),y.useEffect(()=>{n!==Te.MENU&&!jO()&&K(!0)},[n]);const ue=g=>{let D;if(ne.includes(g)){if(ne.length<=1)return;D=ne.filter(v=>v!==g)}else D=[...ne,g];ie(D),WO(D)},se=g=>{pe(null),me(g),i(g),J(!1),E(!1)},O=()=>{const g=!c;S(g),Le.setSound(g)},N=g=>{let D=0;n===Te.LEVEL_MIND_MATCH?D=(g.roundsWon||0)*5:n===Te.LEVEL_CASCADE?D=Math.floor((g.clearedTiles||0)/2):g.failed||(n===Te.CLASSIC||n===Te.LEVEL_THEMED||n===Te.LEVEL_SYNONYMS?D=10:n===Te.LEVEL_EMOJI?D=5:n===Te.LEVEL_EXPANSION&&(D=15));const v=(g.hintsUsedCount||0)*-5;let W=0;!g.failed&&g.mistakes===0&&n!==Te.LEVEL_CASCADE&&(W=25);const $=(g.failed?0:g.rowEfficiency)||0;let Q=0;if(!g.failed&&n!==Te.LEVEL_CASCADE){const z=g.timeMs/1e3;z<60?Q=10:z<90?Q=5:z<120&&(Q=2)}const _=Math.max(0,D+v+$+W+Q);_O({totalScore:_,levelsCompleted:g.failed?0:1,totalMoves:g.moves,totalTimeMs:g.timeMs,rowsSolved:n===Te.LEVEL_MIND_MATCH?(g.roundsWon||0)*4:4,solvedCategoryIds:g.solvedCategoryIds,solvedWords:g.solvedWords}),J(!0)},B=async()=>{if(xn.isNativePlatform())try{await ha.showInterstitial(),await ha.prepareInterstitial({adId:Bc,isTesting:!1})}catch(v){console.error("Failed to show interstitial",v);try{await ha.prepareInterstitial({adId:Bc,isTesting:!1})}catch{}}const g=r+1;l(g),VO(g),me(void 0);const D=vc(g,ne);i(D),J(!1)};y.useEffect(()=>{if(te&&x){const g=setTimeout(()=>{B()},2e3);return()=>clearTimeout(g)}},[te,x]);const F=()=>{if(n===Te.MENU)return p.jsx(Bp,{onStart:()=>{const v=Re||(Ae?Ae.mode:vc(r,ne));i(v)},onSettings:()=>E(!0),onStats:()=>m(!0),lastLevel:r});if(!Ae||Ae.mode!==n)return p.jsx(k0,{});const{data:g,themeName:D}=Ae;switch(n){case Te.CLASSIC:case Te.LEVEL_THEMED:case Te.LEVEL_SYNONYMS:return p.jsx(O0,{csvData:g,mode:n,levelIndex:r,onComplete:N,onExit:()=>{me(void 0),i(Te.MENU)},hintsEnabled:C,setHintsEnabled:L,onOpenSettings:v=>{M(v||[]),E(!0)},isReviewing:x,onNext:B,isAutoPlaying:te,themeName:D},r);case Te.LEVEL_EMOJI:return p.jsx(p0,{levelIndex:r,onComplete:N,onExit:()=>{me(void 0),i(Te.MENU)},hintsEnabled:C,setHintsEnabled:L,onOpenSettings:v=>{M(v||[]),E(!0)},isReviewing:x,onNext:B,isAutoPlaying:te},r);case Te.LEVEL_MIND_MATCH:return p.jsx(N0,{csvData:g,levelIndex:r,onComplete:N,onExit:()=>{me(void 0),i(Te.MENU)},hintsEnabled:C,setHintsEnabled:L,onOpenSettings:v=>{M(v||[]),E(!0)},isReviewing:x,onNext:B,isAutoPlaying:te},r);case Te.LEVEL_EXPANSION:return p.jsx(I0,{csvData:g,levelIndex:r,onComplete:N,onExit:()=>{me(void 0),i(Te.MENU)},hintsEnabled:C,setHintsEnabled:L,onOpenSettings:v=>{M(v||[]),E(!0)},isReviewing:x,onNext:B,isAutoPlaying:te},r);case Te.LEVEL_CASCADE:return p.jsx(P0,{csvData:g,levelIndex:r,onComplete:N,onExit:()=>{me(void 0),i(Te.MENU)},hintsEnabled:C,setHintsEnabled:L,onOpenSettings:v=>{M(v||[]),E(!0)},isReviewing:x,onNext:B,isAutoPlaying:te},r);default:return p.jsx(g0,{csvData:g,levelIndex:r,onComplete:N,onGameOver:()=>N({timeMs:0,hintsUsedCount:0,moves:0,failed:!0,mistakes:5}),onExit:()=>{me(void 0),i(Te.MENU)},hintsEnabled:C,setHintsEnabled:L,onOpenSettings:v=>{M(v||[]),E(!0)},isReviewing:x,onNext:B,isAutoPlaying:te},r)}};return p.jsx(U0,{children:p.jsxs("div",{className:"fixed inset-0 h-viewport w-screen bg-black text-white font-oswald flex flex-col overflow-hidden",children:[p.jsx(H0,{}),p.jsxs("div",{className:"flex-1 relative flex flex-col min-h-0 w-full overflow-hidden",children:[F(),G&&p.jsx(R0,{mode:n,onComplete:()=>{JO(),K(!1)}})]}),p.jsx(v0,{}),p.jsx(b0,{}),d&&p.jsx(Hp,{isOpen:d,onClose:()=>E(!1),onMainMenu:()=>{me(void 0),E(!1),i(Te.MENU)},isMusicOn:c,toggleMusic:O,enabledModes:ne,toggleMode:ue,onSelectMode:se,hintsEnabled:C,setHintsEnabled:L,onShowTutorial:()=>K(!0),onResetProgress:()=>{localStorage.clear(),window.location.reload()},categories:b,isAutoPlaying:te,toggleAutoPlay:()=>he(!te),privacyOptionsRequired:U,onShowPrivacyOptions:re,onManagePool:()=>f(!0),selectedCount:ce.length}),T&&p.jsx(B0,{isOpen:T,onClose:()=>f(!1),selectedIds:ce,onToggle:g=>{ae(g),zO(g)}}),h&&p.jsx(l0,{onClose:()=>m(!1)})]})})},nR=document.getElementById("root");if(!nR)throw new Error("Could not find root element to mount to");const x0=FO.createRoot(nR);x0.render(p.jsx(qo.StrictMode,{children:p.jsx(w0,{})}));export{Gc as A,IT as W};
