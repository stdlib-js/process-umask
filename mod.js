// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,S=isNaN,O=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,l,f,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(u(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function P(r){var e,t,n;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=k(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var A,G=Object.prototype,N=G.toString,$=G.__defineGetter__,C=G.__defineSetter__,R=G.__lookupGetter__,B=G.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=G,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var L=A;function M(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"string"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&Y.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var q=W()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[H],e=z(r,H);try{r[H]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[H]=t:delete r[H],n}:function(r){return X.call(r)},J=String.prototype.valueOf;var K=W();function Q(r){return"object"==typeof r&&(r instanceof String||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function rr(r){return Z(r)||Q(r)}function er(r){return"number"==typeof r}M(rr,"isPrimitive",Z),M(rr,"isObject",Q);var tr=Number,nr=tr.prototype.toString;var ir=W();function or(r){return"object"==typeof r&&(r instanceof tr||(ir?function(r){try{return nr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function ar(r){return er(r)||or(r)}M(ar,"isPrimitive",er),M(ar,"isObject",or);var cr=Number.POSITIVE_INFINITY,ur=tr.NEGATIVE_INFINITY,lr=Math.floor;function fr(r){return r<cr&&r>ur&&lr(e=r)===e;var e}function sr(r){return er(r)&&fr(r)}function pr(r){return or(r)&&fr(r.valueOf())}function gr(r){return sr(r)||pr(r)}function yr(r){return sr(r)&&r>=0}function hr(r){return pr(r)&&r.valueOf()>=0}function br(r){return yr(r)||hr(r)}function dr(r){return"boolean"==typeof r}M(gr,"isPrimitive",sr),M(gr,"isObject",pr),M(br,"isPrimitive",yr),M(br,"isObject",hr);var vr=Boolean,wr=Boolean.prototype.toString;var mr=W();function jr(r){return"object"==typeof r&&(r instanceof vr||(mr?function(r){try{return wr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Er(r){return dr(r)||jr(r)}M(Er,"isPrimitive",dr),M(Er,"isObject",jr);var _r=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};var Sr=/./;function Or(){return new Function("return this;")()}var xr="object"==typeof self?self:null,Tr="object"==typeof window?window:null,Ir="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Vr="object"==typeof Ir?Ir:null,kr="object"==typeof globalThis?globalThis:null;var Fr=function(r){if(arguments.length){if(!dr(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Or()}if(kr)return kr;if(xr)return xr;if(Tr)return Tr;if(Vr)return Vr;throw new Error("unexpected error. Unable to resolve global object.")}(),Pr=Fr.document&&Fr.document.childNodes,Ar=Int8Array;function Gr(){return/^\s*function\s*([^(]*)/i}var Nr=/^\s*function\s*([^(]*)/i;function $r(r){return null!==r&&"object"==typeof r}function Cr(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Nr.exec(n.toString()))return e[1]}return $r(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(Gr,"REGEXP",Nr),M($r,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!_r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}($r));var Rr="function"==typeof Sr||"object"==typeof Ar||"function"==typeof Pr?function(r){return Cr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Cr(r).toLowerCase():e};function Br(r){return"function"===Rr(r)}var Lr,Mr=Object,Zr=Object.getPrototypeOf;Lr=Br(Object.getPrototypeOf)?Zr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ur=Lr;var Wr=Object.prototype;function Xr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!_r(r)}(r)&&(e=function(r){return null==r?null:(r=Mr(r),Ur(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&Br(e.constructor)&&"[object Function]"===q(e.constructor)&&z(e,"isPrototypeOf")&&Br(e.isPrototypeOf)&&(e===Wr||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function Yr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var zr=void 0!==String.prototype.repeat;var Dr=String.prototype.repeat;var Hr=zr?function(r,e){return Dr.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},qr=Math.ceil;function Jr(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=qr(n),Hr(t,n)+r)}function Kr(r,e,t){var n;if(!Z(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));if(!yr(e))throw new TypeError(P("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Z(n=t))throw new TypeError(P("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>9007199254740991)throw new RangeError(P("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Jr(r,e,n)}var Qr={0:"rwx",1:"rw",2:"rx",3:"r",4:"wx",5:"w",6:"x",7:""};function re(r){var e;return r=Kr(r=r.toString(8),4,"0"),e="",e+="u="+Qr[r[1]],e+=",",e+="g="+Qr[r[2]],e+=",",e+="o="+Qr[r[3]]}var ee=/^(u{0,1}g{0,1}o{0,1}a{0,1}|)([+\-=])(r{0,1}w{0,1}x{0,1})$/,te={r:2,w:1,x:0},ne={s:0,u:1,g:2,o:3};function ie(r){return 1<<r>>>0}function oe(r,e){return(r&~ie(e))>>>0}function ae(r,e){var t,n,i,o,a,c,u,l,f,s,p,g;for(t=Kr(r.toString(8),4,"0").split(""),s=0;s<t.length;s++)t[s]=parseInt(t[s],10);for(n=e.split(","),s=0;s<n.length;s++){if(null===(a=n[s].match(ee)))return new Error(Yr("0nl6t,GH",e));if(""===(o=a[1]))o="ugo";else{for(l="",g=0;g<o.length;g++)"a"===o[g]?l+="ugo":l+=o[g];o=l}if(u=a[2],i=a[3],"-"===u){if(""===i)continue;for(p=0;p<i.length;p++)for(f=te[i[p]],g=0;g<o.length;g++)t[c=ne[o[g]]]=(t[c]|ie(f))>>>0}else if("+"===u){if(""===i)continue;for(p=0;p<i.length;p++)for(f=te[i[p]],g=0;g<o.length;g++)t[c=ne[o[g]]]=oe(t[c],f)}else if(""===i)for(g=0;g<o.length;g++)t[c=ne[o[g]]]=7;else{for(g=0;g<o.length;g++)t[c=ne[o[g]]]=7;for(p=0;p<i.length;p++)for(f=te[i[p]],g=0;g<o.length;g++)t[c=ne[o[g]]]=oe(t[c],f)}}for(s=0;s<t.length;s++)t[s]=t[s].toString();return parseInt(t.join(""),8)}function ce(){var r,e,t,n,i;if(0===(e=arguments.length))return 0;if(n={},i=arguments[0],1===e){if(Z(i)){if((t=ae(0,i))instanceof Error)throw t;return 0}if(yr(i))return 0;if(Xr(i)){if(z(i,"symbolic")&&(n.symbolic=i.symbolic,!dr(n.symbolic)))throw new TypeError(Yr("0nl2o,GE","symbolic",n.symbolic));return t=0,n.symbolic&&(t=re(t)),t}throw new TypeError(Yr("0nl6r,GF",i))}if(!Xr(r=arguments[1]))throw new TypeError(Yr("0nl2V,FD",r));if(z(r,"symbolic")&&(n.symbolic=r.symbolic,!dr(n.symbolic)))throw new TypeError(Yr("0nl2o,GE","symbolic",n.symbolic));if(Z(i)){if((t=ae(0,i))instanceof Error)throw t}else{if(!yr(i))throw new TypeError(Yr("0nl6s,GG",i));t=i}return t=0,n.symbolic&&(t=re(t)),t}export{ce as default};
//# sourceMappingURL=mod.js.map