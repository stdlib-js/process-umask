// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).umask=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,f,s,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(u.call(r,e)||c.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),s="get"in t,p="set"in t,f&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(r,e,t.get),p&&a&&a.call(r,e,t.set),r};var l=e;function f(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(r){return"string"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return p&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function y(r,e){return null!=r&&d.call(r,e)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var m=g()?function(r){var e,t,n;if(null==r)return h.call(r);t=r[b],e=y(r,b);try{r[b]=void 0}catch(e){return h.call(r)}return n=h.call(r),e?r[b]=t:delete r[b],n}:function(r){return h.call(r)},w=String.prototype.valueOf;var v=g();function j(r){return"object"==typeof r&&(r instanceof String||(v?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object String]"===m(r)))}function E(r){return s(r)||j(r)}function O(r){return"number"==typeof r}f(E,"isPrimitive",s),f(E,"isObject",j);var _=Number,S=_.prototype.toString;var x=g();function T(r){return"object"==typeof r&&(r instanceof _||(x?function(r){try{return S.call(r),!0}catch(r){return!1}}(r):"[object Number]"===m(r)))}function V(r){return O(r)||T(r)}f(V,"isPrimitive",O),f(V,"isObject",T);var I=Number.POSITIVE_INFINITY,k=_.NEGATIVE_INFINITY,A=Math.floor;function P(r){return r<I&&r>k&&A(e=r)===e;var e}function F(r){return O(r)&&P(r)}function C(r){return T(r)&&P(r.valueOf())}function N(r){return F(r)||C(r)}function R(r){return F(r)&&r>=0}function $(r){return C(r)&&r.valueOf()>=0}function B(r){return R(r)||$(r)}function G(r){return"boolean"==typeof r}f(N,"isPrimitive",F),f(N,"isObject",C),f(B,"isPrimitive",R),f(B,"isObject",$);var L=Boolean.prototype.toString;var M=g();function Z(r){return"object"==typeof r&&(r instanceof Boolean||(M?function(r){try{return L.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function U(r){return G(r)||Z(r)}f(U,"isPrimitive",G),f(U,"isObject",Z);var W=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};var X=/./;function Y(){return new Function("return this;")()}var z="object"==typeof self?self:null,q="object"==typeof window?window:null,D="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},H="object"==typeof D?D:null;var J=function(r){if(arguments.length){if(!G(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Y()}if(z)return z;if(q)return q;if(H)return H;throw new Error("unexpected error. Unable to resolve global object.")}(),K=J.document&&J.document.childNodes,Q=Int8Array;function rr(){return/^\s*function\s*([^(]*)/i}var er=/^\s*function\s*([^(]*)/i;function tr(r){return null!==r&&"object"==typeof r}function nr(r){var e,t,n,i;if(("Object"===(t=m(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=er.exec(n.toString()))return e[1]}return tr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}f(rr,"REGEXP",er),f(tr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!W(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(tr));var ir="function"==typeof X||"object"==typeof Q||"function"==typeof K?function(r){return nr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?nr(r).toLowerCase():e};function or(r){return"function"===ir(r)}var ar,ur=Object.getPrototypeOf;ar=or(Object.getPrototypeOf)?ur:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===m(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var cr=ar;var lr=Object.prototype;function fr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!W(r)}(r)&&(e=function(r){return null==r?null:(r=Object(r),cr(r))}(r),!e||!y(r,"constructor")&&y(e,"constructor")&&or(e.constructor)&&"[object Function]"===m(e.constructor)&&y(e,"isPrototypeOf")&&or(e.isPrototypeOf)&&(e===lr||function(r){var e;for(e in r)if(!y(r,e))return!1;return!0}(r)))}function sr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var pr=9007199254740991;function gr(r){return"number"==typeof r}function hr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function dr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+hr(i):hr(i)+r,n&&(r="-"+r)),r}var yr=String.prototype.toLowerCase,br=String.prototype.toUpperCase;function mr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!gr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=dr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=dr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===br.call(r.specifier)?br.call(t):yr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function wr(r){return"string"==typeof r}var vr=Math.abs,jr=String.prototype.toLowerCase,Er=String.prototype.toUpperCase,Or=String.prototype.replace,_r=/e\+(\d)$/,Sr=/e-(\d)$/,xr=/^(\d+)$/,Tr=/^(\d+)e/,Vr=/\.0$/,Ir=/\.0*e/,kr=/(\..*[^0])0*e/;function Ar(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!gr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":vr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Or.call(t,kr,"$1e"),t=Or.call(t,Ir,"e"),t=Or.call(t,Vr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Or.call(t,_r,"e+0$1"),t=Or.call(t,Sr,"e-0$1"),r.alternate&&(t=Or.call(t,xr,"$1."),t=Or.call(t,Tr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Er.call(r.specifier)?Er.call(t):jr.call(t)}function Pr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Fr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Pr(n):Pr(n)+r}var Cr=String.fromCharCode,Nr=isNaN,Rr=Array.isArray;function $r(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Br(r){var e,t,n,i,o,a,u,c,l;if(!Rr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(wr(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=$r(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Nr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Nr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=mr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Nr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Nr(o)?String(n.arg):Cr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Ar(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=dr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Fr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Lr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Mr(r){var e,t,n,i;for(t=[],i=0,n=Gr.exec(r);n;)(e=r.slice(i,Gr.lastIndex-n[0].length)).length&&t.push(e),t.push(Lr(n)),i=Gr.lastIndex,n=Gr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Zr(r){return"string"==typeof r}function Ur(r){var e,t,n;if(!Zr(r))throw new TypeError(Ur("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Mr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Br.apply(null,t)}function Wr(r,e){var t,n;if(!s(r))throw new TypeError(Ur("invalid argument. First argument must be a string. Value: `%s`.",r));if(!R(e))throw new TypeError(Ur("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===r.length||0===e)return"";if(r.length*e>pr)throw new RangeError(Ur("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r.length*e));for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t}var Xr=Math.ceil;function Yr(r,e,t){var n,i;if(!s(r))throw new TypeError(Ur("invalid argument. First argument must be a string. Value: `%s`.",r));if(!R(e))throw new TypeError(Ur("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!s(i=t))throw new TypeError(Ur("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(e>pr)throw new RangeError(Ur("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return(n=(e-r.length)/i.length)<=0?r:Wr(i,n=Xr(n))+r}var zr={0:"rwx",1:"rw",2:"rx",3:"r",4:"wx",5:"w",6:"x",7:""};function qr(r){var e;return r=Yr(r=r.toString(8),4,"0"),e="",e+="u="+zr[r[1]],e+=",",e+="g="+zr[r[2]],e+=",",e+="o="+zr[r[3]]}var Dr=/^(u{0,1}g{0,1}o{0,1}a{0,1}|)([+\-=])(r{0,1}w{0,1}x{0,1})$/,Hr={r:2,w:1,x:0},Jr={s:0,u:1,g:2,o:3};function Kr(r){return 1<<r>>>0}function Qr(r,e){return(r&~Kr(e))>>>0}function re(r,e){var t,n,i,o,a,u,c,l,f,s,p,g;for(t=Yr(r.toString(8),4,"0").split(""),s=0;s<t.length;s++)t[s]=parseInt(t[s],10);for(n=e.split(","),s=0;s<n.length;s++){if(null===(a=n[s].match(Dr)))return new Error(sr("0Om7C",e));if(""===(o=a[1]))o="ugo";else{for(l="",g=0;g<o.length;g++)"a"===o[g]?l+="ugo":l+=o[g];o=l}if(c=a[2],i=a[3],"-"===c){if(""===i)continue;for(p=0;p<i.length;p++)for(f=Hr[i[p]],g=0;g<o.length;g++)t[u=Jr[o[g]]]=(t[u]|Kr(f))>>>0}else if("+"===c){if(""===i)continue;for(p=0;p<i.length;p++)for(f=Hr[i[p]],g=0;g<o.length;g++)t[u=Jr[o[g]]]=Qr(t[u],f)}else if(""===i)for(g=0;g<o.length;g++)t[u=Jr[o[g]]]=7;else{for(g=0;g<o.length;g++)t[u=Jr[o[g]]]=7;for(p=0;p<i.length;p++)for(f=Hr[i[p]],g=0;g<o.length;g++)t[u=Jr[o[g]]]=Qr(t[u],f)}}for(s=0;s<t.length;s++)t[s]=t[s].toString();return parseInt(t.join(""),8)}return function(){var r,e,t,n,i;if(0===(e=arguments.length))return 0;if(n={},i=arguments[0],1===e){if(s(i)){if((t=re(0,i))instanceof Error)throw t;return 0}if(R(i))return 0;if(fr(i)){if(y(i,"symbolic")&&(n.symbolic=i.symbolic,!G(n.symbolic)))throw new TypeError(sr("0Om30","symbolic",n.symbolic));return t=0,n.symbolic&&(t=qr(t)),t}throw new TypeError(sr("0Om7A",i))}if(!fr(r=arguments[1]))throw new TypeError(sr("0Om2h",r));if(y(r,"symbolic")&&(n.symbolic=r.symbolic,!G(n.symbolic)))throw new TypeError(sr("0Om30","symbolic",n.symbolic));if(s(i)){if((t=re(0,i))instanceof Error)throw t}else{if(!R(i))throw new TypeError(sr("0Om7B",i));t=i}return t=0,n.symbolic&&(t=qr(t)),t}}));
//# sourceMappingURL=browser.js.map