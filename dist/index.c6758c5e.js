function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"fSgek":"index.c6758c5e.js","deYEc":"icons.9801e6f1.svg","7z4KQ":"icons.9801e6f1.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,f={};p=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,g=Function.prototype.call;f=p?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,y=m&&!v.call({1:2},1);h=y?function(e){var t=m(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,L=p&&O.bind(j,j),$=(E=p?function(e){return e&&L(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),F=E("".slice);w=function(e){return F($(e),8,-1)};var x=c.Object,P=E("".split);k=d((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?P(e,""):x(e)}:x;var M,T=c.TypeError;M=function(e){if(null==e)throw T("Can't call method on "+e);return e},_=function(e){return k(M(e))};var H,q,N,R;R=function(e){return"function"==typeof e},N=function(e){return"object"==typeof e?null!==e:R(e)};var I,A={},C=function(e){return R(e)?e:void 0};I=function(e,t){return arguments.length<2?C(c[e]):c[e]&&c[e][t]};var z={};z=E({}.isPrototypeOf);var W,D,U,G={};G=I("navigator","userAgent")||"";var Y,B,J=c.process,Q=c.Deno,K=J&&J.versions||Q&&Q.version,V=K&&K.v8;V&&(B=(Y=V.split("."))[0]>0&&Y[0]<4?1:+(Y[0]+Y[1])),!B&&G&&(!(Y=G.match(/Edge\/(\d+)/))||Y[1]>=74)&&(Y=G.match(/Chrome\/(\d+)/))&&(B=+Y[1]),U=B,D=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&U&&U<41})),W=D&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=c.Object;A=W?function(e){return"symbol"==typeof e}:function(e){var t=I("Symbol");return R(t)&&z(t.prototype,X(e))};var Z,ee,te,ne=c.String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=c.TypeError;ee=function(e){if(R(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var ie,oe=c.TypeError;ie=function(e,t){var n,r;if("string"===t&&R(n=e.toString)&&!N(r=f(n,e)))return r;if(R(n=e.valueOf)&&!N(r=f(n,e)))return r;if("string"!==t&&R(n=e.toString)&&!N(r=f(n,e)))return r;throw oe("Can't convert object to primitive value")};var ae,se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var de=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=de,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,fe={},he=c.Object;pe=function(e){return he(M(e))};var ge=E({}.hasOwnProperty);fe=Object.hasOwn||function(e,t){return ge(pe(e),t)};var ve,me=0,ye=Math.random(),be=E(1..toString);ve=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++me+ye,36)};var _e=se("wks"),we=c.Symbol,ke=we&&we.for,Ee=W?we:we&&we.withoutSetter||ve;ae=function(e){if(!fe(_e,e)||!D&&"string"!=typeof _e[e]){var t="Symbol."+e;D&&fe(we,e)?_e[e]=we[e]:_e[e]=W&&ke?ke(t):Ee(t)}return _e[e]};var Se=c.TypeError,Oe=ae("toPrimitive");q=function(e,t){if(!N(e)||A(e))return e;var n,r=Z(e,Oe);if(r){if(void 0===t&&(t="default"),n=f(r,e,t),!N(n)||A(n))return n;throw Se("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},H=function(e){var t=q(e,"string");return A(t)?t:t+""};var je,Le,$e=c.document,Fe=N($e)&&N($e.createElement);Le=function(e){return Fe?$e.createElement(e):{}},je=!l&&!d((function(){return 7!=Object.defineProperty(Le("div"),"a",{get:function(){return 7}}).a}));var xe,Pe,Me=Object.getOwnPropertyDescriptor,Te=s=l?Me:function(e,t){if(e=_(e),t=H(t),je)try{return Me(e,t)}catch(e){}if(fe(e,t))return b(!f(h,e,t),e[t])},He={};Pe=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var qe,Ne=c.String,Re=c.TypeError;qe=function(e){if(N(e))return e;throw Re(Ne(e)+" is not an object")};var Ie=c.TypeError,Ae=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor;xe=l?Pe?function(e,t,n){if(qe(e),t=H(t),qe(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ce(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ae(e,t,n)}:Ae:function(e,t,n){if(qe(e),t=H(t),qe(n),je)try{return Ae(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ie("Accessors not supported");return"value"in n&&(e[t]=n.value),e},He=l?function(e,t,n){return xe(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var ze,We={},De=E(Function.toString);R(ue.inspectSource)||(ue.inspectSource=function(e){return De(e)}),We=ue.inspectSource;var Ue,Ge,Ye=c.WeakMap;Ge=R(Ye)&&/native code/.test(We(Ye));var Be,Je=se("keys");Be=function(e){return Je[e]||(Je[e]=ve(e))};var Qe={};Qe={};var Ke,Ve,Xe,Ze=c.TypeError,et=c.WeakMap;if(Ge||ue.state){var tt=ue.state||(ue.state=new et),nt=E(tt.get),rt=E(tt.has),it=E(tt.set);Ke=function(e,t){if(rt(tt,e))throw new Ze("Object already initialized");return t.facade=e,it(tt,e,t),t},Ve=function(e){return nt(tt,e)||{}},Xe=function(e){return rt(tt,e)}}else{var ot=Be("state");Qe[ot]=!0,Ke=function(e,t){if(fe(e,ot))throw new Ze("Object already initialized");return t.facade=e,He(e,ot,t),t},Ve=function(e){return fe(e,ot)?e[ot]:{}},Xe=function(e){return fe(e,ot)}}Ue={set:Ke,get:Ve,has:Xe,enforce:function(e){return Xe(e)?Ve(e):Ke(e,{})},getterFor:function(e){return function(t){var n;if(!N(t)||(n=Ve(t)).type!==e)throw Ze("Incompatible receiver, "+e+" required");return n}}};var at=Function.prototype,st=l&&Object.getOwnPropertyDescriptor,ct=fe(at,"name"),ut={EXISTS:ct,PROPER:ct&&"something"===function(){}.name,CONFIGURABLE:ct&&(!l||l&&st(at,"name").configurable)}.CONFIGURABLE,lt=Ue.get,dt=Ue.enforce,pt=String(String).split("String");(ze=function(e,t,n,r){var i,o=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:t;R(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!fe(n,"name")||ut&&n.name!==u)&&He(n,"name",u),(i=dt(n)).source||(i.source=pt.join("string"==typeof u?u:""))),e!==c?(o?!s&&e[t]&&(a=!0):delete e[t],a?e[t]=n:He(e,t,n)):a?e[t]=n:ce(t,n)})(Function.prototype,"toString",(function(){return R(this)&&lt(this).source||We(this)}));var ft,ht,gt,vt,mt,yt={},bt=Math.ceil,_t=Math.floor;mt=function(e){var t=+e;return t!=t||0===t?0:(t>0?_t:bt)(t)};var wt=Math.max,kt=Math.min;vt=function(e,t){var n=mt(e);return n<0?wt(n+t,0):kt(n,t)};var Et,St,Ot=Math.min;St=function(e){return e>0?Ot(mt(e),9007199254740991):0},Et=function(e){return St(e.length)};var jt=function(e){return function(t,n,r){var i,o=_(t),a=Et(o),s=vt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Lt={includes:jt(!0),indexOf:jt(!1)}.indexOf,$t=E([].push);gt=function(e,t){var n,r=_(e),i=0,o=[];for(n in r)!fe(Qe,n)&&fe(r,n)&&$t(o,n);for(;t.length>i;)fe(r,n=t[i++])&&(~Lt(o,n)||$t(o,n));return o};var Ft,xt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");ht=Object.getOwnPropertyNames||function(e){return gt(e,xt)},Ft=Object.getOwnPropertySymbols;var Pt=E([].concat);yt=I("Reflect","ownKeys")||function(e){var t=ht(qe(e));return Ft?Pt(t,Ft(e)):t},ft=function(e,t,n){for(var r=yt(t),i=xe,o=s,a=0;a<r.length;a++){var c=r[a];fe(e,c)||n&&fe(n,c)||i(e,c,o(t,c))}};var Mt={},Tt=/#|\.prototype\./,Ht=function(e,t){var n=Nt[qt(e)];return n==It||n!=Rt&&(R(t)?d(t):!!t)},qt=Ht.normalize=function(e){return String(e).replace(Tt,".").toLowerCase()},Nt=Ht.data={},Rt=Ht.NATIVE="N",It=Ht.POLYFILL="P";Mt=Ht,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.noTargetGet?(a=Te(n,r))&&a.value:n[r],!Mt(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;ft(o,i)}(e.sham||i&&i.sham)&&He(o,"sham",!0),ze(n,r,o,e)}};var At,Ct={},zt=Function.prototype,Wt=zt.apply,Dt=zt.call;Ct="object"==typeof Reflect&&Reflect.apply||(p?Dt.bind(Wt):function(){return Dt.apply(Wt,arguments)});var Ut,Gt=E(E.bind);Ut=function(e,t){return ee(e),void 0===t?e:p?Gt(e,t):function(){return e.apply(t,arguments)}};var Yt={};Yt=I("document","documentElement");var Bt={};Bt=E([].slice);var Jt,Qt=c.TypeError;Jt=function(e,t){if(e<t)throw Qt("Not enough arguments");return e};var Kt;Kt=/(?:ipad|iphone|ipod).*applewebkit/i.test(G);var Vt;Vt="process"==w(c.process);var Xt,Zt,en,tn,nn=c.setImmediate,rn=c.clearImmediate,on=c.process,an=c.Dispatch,sn=c.Function,cn=c.MessageChannel,un=c.String,ln=0,dn={};try{Xt=c.location}catch(e){}var pn=function(e){if(fe(dn,e)){var t=dn[e];delete dn[e],t()}},fn=function(e){return function(){pn(e)}},hn=function(e){pn(e.data)},gn=function(e){c.postMessage(un(e),Xt.protocol+"//"+Xt.host)};nn&&rn||(nn=function(e){Jt(arguments.length,1);var t=R(e)?e:sn(e),n=Bt(arguments,1);return dn[++ln]=function(){Ct(t,void 0,n)},Zt(ln),ln},rn=function(e){delete dn[e]},Vt?Zt=function(e){on.nextTick(fn(e))}:an&&an.now?Zt=function(e){an.now(fn(e))}:cn&&!Kt?(tn=(en=new cn).port2,en.port1.onmessage=hn,Zt=Ut(tn.postMessage,tn)):c.addEventListener&&R(c.postMessage)&&!c.importScripts&&Xt&&"file:"!==Xt.protocol&&!d(gn)?(Zt=gn,c.addEventListener("message",hn,!1)):Zt="onreadystatechange"in Le("script")?function(e){Yt.appendChild(Le("script")).onreadystatechange=function(){Yt.removeChild(this),pn(e)}}:function(e){setTimeout(fn(e),0)}),At={set:nn,clear:rn},a({global:!0,bind:!0,enumerable:!0,forced:!c.setImmediate||!c.clearImmediate},{setImmediate:At.set,clearImmediate:At.clear});new URL(o("27Lyk").resolve("deYEc"),import.meta.url).toString();var vn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new $(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return x()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(F([])));w&&w!==n&&r.call(w,o)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function F(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=F,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=vn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=vn:Function("r","regeneratorRuntime = r")(vn)}const mn=function(e){return new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},yn=async function(e){try{const t=await Promise.race([mn(10),fetch(`${e}`)]),n=await t.json();if(console.log(n),!t.ok)throw new Error(`${n.message}. ${t.status}`);return n}catch(e){throw e}},bn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},_n=function(e){return{id:e.data.recipe.id,title:e.data.recipe.title,publisher:e.data.recipe.publisher,sourceUrl:e.data.recipe.source_url,image:e.data.recipe.image_url,servings:e.data.recipe.servings,cookingTime:e.data.recipe.cooking_time,ingredients:e.data.recipe.ingredients,...e.data.recipe.key&&{key:e.data.recipe.key}}},wn=function(e=bn.search.page){bn.search.page=e;const t=(e-1)*bn.search.resultsPerPage,n=e*bn.search.resultsPerPage;return bn.search.results.slice(t,n)},kn=function(){localStorage.setItem("bookmarks",JSON.stringify(bn.bookmarks))},En=function(e){bn.bookmarks.push(e),e.id===bn.recipe.id&&(bn.recipe.bookmarked=!0),kn()};!function(){const e=JSON.parse(localStorage.getItem("bookmarks"));console.log(e),e&&(bn.bookmarks=e)}();const Sn=async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct format");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await async function(e,t){try{const n=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await Promise.race([mn(10),n]),i=await r.json();if(console.log(i),!r.ok)throw new Error(`${i.message}. ${r.status}`);return i}catch(e){throw e}}("https://forkify-api.herokuapp.com/api/v2/recipes/?key=3e3192dd-c541-4fb5-9d9f-06e90dfdabb2",n);bn.recipe=_n(r),En(bn.recipe)}catch(e){throw e}};var On,jn,Ln,$n;On=new URL(o("27Lyk").resolve("7z4KQ"),import.meta.url).toString(),Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(Ln=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},$n=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(Ln(this.denominator)){var e=$n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}Ln(this.numerator)&&(e=$n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},jn=Fraction;class Fn{_data;_message="";_errorMessage="We couldn't find the recipe. Please try again.";render(e){if(!e||0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup();this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentEl.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>{n.setAttribute(e.name,e.value)}))}))}_clear(){this._parentEl.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${n(On)}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`<div class="error">\n          <div>\n            <svg>\n              <use href="src/img/${n(On)}.svg#icon-alert-triangle"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`<div class="message">\n          <div>\n            <svg>\n              <use href="src/img/${n(On)}.svg#icon-smile"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}var xn=new class extends Fn{_parentEl=document.querySelector(".recipe");_message="";_errorMessage="We couldn't find the recipe. Please try again.";_generateMarkup(){return`\n    <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(On)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(On)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to= "${this._data.servings-1}">\n                <svg>\n                  <use href="${n(On)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to= "${this._data.servings+1}">\n                <svg>\n                  <use href="${n(On)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(On)}#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${n(On)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n\n          ${this._data.ingredients.map((e=>`<li class="recipe__ingredient">\n                <svg class="recipe__icon">\n                  <use href="${n(On)}#icon-check"></use>\n                </svg>\n                <div class="recipe__quantity">${e.quantity?new jn(e.quantity).toString():""}</div>\n                <div class="recipe__description">\n                  <span class="recipe__unit">${e.unit}</span>\n                  ${e.description}\n                </div>\n              </li>`)).join("")}\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This. recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(On)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n    `}addHandlerRender(e){["hashchange","load"].forEach((t=>{window.addEventListener(t,e)}))}addHandlerUpdateServings(e){this._parentEl.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const r=+n.dataset.updateTo;r>0&&e(r)}))}addHandlerAddBookmark(e){this._parentEl.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}};var Pn=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerRender(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var Mn=new class extends Fn{_parentEl=document.querySelector(".results");_message="";_errorMessage="No recipes found for your query! Please try again.";_generateMarkup(){const e=window.location.hash.slice(1);return this._data.map((t=>`\n        <li class="preview">\n            <a class="preview__link ${t.id===e?"preview__link--active":""}" href="#${t.id}">\n                <figure class="preview__fig">\n                <img src="${t.image}" alt="Test" />\n                </figure>\n                <div class="preview__data">\n                    <h4 class="preview__title">${t.title}</h4>\n                    <p class="preview__publisher">${t.publisher}</p>\n                    <div class="preview__user-generated${this._data.key?"":" hidden"}">\n            <svg>\n              <use href="${n(On)}#icon-user"></use>\n            </svg>\n          </div>\n                </div>\n            </a>\n        </li>\n      `)).join("")}};var Tn=new class extends Fn{_parentEl=document.querySelector(".pagination");_generateMarkup(){const e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===this._data.page&&e>1?`\n    <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">\n        <span>Page ${this._data.page+1}</span>\n        <svg class="search__icon">\n        <use href="${n(On)}#icon-arrow-right"></use>\n        </svg>\n    </button>\n    `:this._data.page===e&&e>1?`\n      <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">\n      <svg class="search__icon">\n        <use href="${n(On)}#icon-arrow-left"></use>\n      </svg>\n      <span>Page ${this._data.page-1}"</span>\n    </button>\n    `:this._data.page<e?`\n      <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">\n      <svg class="search__icon">\n        <use href="${n(On)}#icon-arrow-left"></use>\n      </svg>\n      <span>Page ${this._data.page-1}</span>\n    </button>\n    <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">\n      <span>Page ${this._data.page+1}</span>\n      <svg class="search__icon">\n        <use href="${n(On)}#icon-arrow-right"></use>\n      </svg>\n    </button>\n      `:""}addHandlerRender(e){this._parentEl.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}};var Hn=new class extends Fn{_parentEl=document.querySelector(".bookmarks");_message="";_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it.";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){const e=window.location.hash.slice(1);return this._data.map((t=>`\n        <li class="preview">\n            <a class="preview__link ${t.id===e?"preview__link--active":""}" href="#${t.id}">\n                <figure class="preview__fig">\n                <img src="${t.image}" alt="Test" />\n                </figure>\n                <div class="preview__data">\n                    <h4 class="preview__title">${t.title}</h4>\n                    <p class="preview__publisher">${t.publisher}</p>\n                </div>\n            </a>\n        </li>\n      `)).join("")}};var qn=new class extends Fn{_parentEl=document.querySelector(".upload");_message="Recipe was successfully added";_errorMessage="";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this.addHandlerShowWindow(),this.addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const Nn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;xn.renderSpinner(),Mn.update(wn()),Hn.update(bn.bookmarks),await async function(e){try{const t=await yn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=3e3192dd-c541-4fb5-9d9f-06e90dfdabb2`);bn.recipe=_n(t),bn.bookmarks.some((t=>t.id===e))?bn.recipe.bookmarked=!0:bn.recipe.bookmarked=!1}catch(e){throw e}}(e),xn.render(bn.recipe)}catch(e){xn.renderError()}},Rn=async function(){try{const e=Pn.getQuery();if(!e)return;Mn.renderSpinner(),await async function(e){try{bn.search.query=e;const t=await yn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=3e3192dd-c541-4fb5-9d9f-06e90dfdabb2`);console.log(t),bn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.recipe}}))),bn.search.page=1}catch(e){throw e}}(e),Mn.render(wn()),Tn.render(bn.search)}catch(e){console.log(e)}},In=function(e){Mn.render(wn(e)),Tn.render(bn.search)},An=function(e){!function(e){bn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/bn.recipe.servings})),bn.recipe.servings=e}(e),xn.update(bn.recipe)},Cn=function(){bn.recipe.bookmarked?function(e){const t=bn.bookmarks.findIndex((t=>t.id===e));bn.bookmarks.splice(t,1),e===bn.recipe.id&&(bn.recipe.bookmarked=!1),kn()}(bn.recipe.id):En(bn.recipe),xn.update(bn.recipe),Hn.render(bn.bookmarks)},zn=function(){Hn.render(bn.bookmarks)},Wn=async function(e){try{qn.renderSpinner(),await Sn(e),xn.render(bn.recipe),qn.renderMessage(),Hn.render(bn.bookmarks),window.history.pushState(null,"",`${bn.recipe.id}`),setTimeout((function(){qn.toggleWindow()}),2500)}catch(e){qn.renderError(e)}};Hn.addHandlerRender(zn),xn.addHandlerRender(Nn),xn.addHandlerUpdateServings(An),xn.addHandlerAddBookmark(Cn),Pn.addHandlerRender(Rn),Tn.addHandlerRender(In),qn.addHandlerUpload(Wn);
//# sourceMappingURL=index.c6758c5e.js.map
