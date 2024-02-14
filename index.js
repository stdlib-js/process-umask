// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).umask=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,b=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,b,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,O=isNaN,S=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,s,l,f,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,f=0;f<r.length;f++)if(c(n=r[f]))s+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){return"string"==typeof r}function F(r){var e,t;if(!P(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var A,N=Object.prototype,$=N.toString,C=N.__defineGetter__,R=N.__defineSetter__,B=N.__lookupGetter__,G=N.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var L=A;function M(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"string"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&Y.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var H=W()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[D],e=z(r,D);try{r[D]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[D]=t:delete r[D],n}:function(r){return X.call(r)},J=String.prototype.valueOf;var K=W();function Q(r){return"object"==typeof r&&(r instanceof String||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function rr(r){return Z(r)||Q(r)}function er(r){return"number"==typeof r}M(rr,"isPrimitive",Z),M(rr,"isObject",Q);var tr=Number,nr=tr.prototype.toString;var ir=W();function or(r){return"object"==typeof r&&(r instanceof tr||(ir?function(r){try{return nr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function ar(r){return er(r)||or(r)}M(ar,"isPrimitive",er),M(ar,"isObject",or);var ur=Number.POSITIVE_INFINITY,cr=tr.NEGATIVE_INFINITY,sr=Math.floor;function lr(r){return r<ur&&r>cr&&sr(e=r)===e;var e}function fr(r){return er(r)&&lr(r)}function pr(r){return or(r)&&lr(r.valueOf())}function gr(r){return fr(r)||pr(r)}function br(r){return fr(r)&&r>=0}function hr(r){return pr(r)&&r.valueOf()>=0}function yr(r){return br(r)||hr(r)}function dr(r){return"boolean"==typeof r}M(gr,"isPrimitive",fr),M(gr,"isObject",pr),M(yr,"isPrimitive",br),M(yr,"isObject",hr);var vr=Boolean,mr=Boolean.prototype.toString;var wr=W();function jr(r){return"object"==typeof r&&(r instanceof vr||(wr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function Er(r){return dr(r)||jr(r)}M(Er,"isPrimitive",dr),M(Er,"isObject",jr);var _r=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var Or=/./;function Sr(){return new Function("return this;")()}var xr="object"==typeof self?self:null,Tr="object"==typeof window?window:null,Vr="object"==typeof global?global:null,kr="object"==typeof globalThis?globalThis:null;var Ir=function(r){if(arguments.length){if(!dr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Sr()}if(kr)return kr;if(xr)return xr;if(Tr)return Tr;if(Vr)return Vr;throw new Error("unexpected error. Unable to resolve global object.")}(),Pr=Ir.document&&Ir.document.childNodes,Fr=Int8Array;function Ar(){return/^\s*function\s*([^(]*)/i}var Nr=/^\s*function\s*([^(]*)/i;function $r(r){return null!==r&&"object"==typeof r}function Cr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Nr.exec(n.toString()))return e[1]}return $r(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(Ar,"REGEXP",Nr),M($r,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!_r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}($r));var Rr="function"==typeof Or||"object"==typeof Fr||"function"==typeof Pr?function(r){return Cr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Cr(r).toLowerCase():e};function Br(r){return"function"===Rr(r)}var Gr,Lr=Object,Mr=Object.getPrototypeOf;Gr=Br(Object.getPrototypeOf)?Mr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Zr=Gr;var Ur=Object.prototype;function Wr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!_r(r)}(r)&&(e=function(r){return null==r?null:(r=Lr(r),Zr(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&Br(e.constructor)&&"[object Function]"===H(e.constructor)&&z(e,"isPrototypeOf")&&Br(e.isPrototypeOf)&&(e===Ur||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}var Xr=9007199254740991,Yr=void 0!==String.prototype.repeat;var zr=String.prototype.repeat;var qr=Yr?function(r,e){return zr.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},Dr=Math.ceil;function Hr(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Dr(n),qr(t,n)+r)}function Jr(r,e,t){var n;if(!Z(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(!br(e))throw new TypeError(F("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Z(n=t))throw new TypeError(F("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>Xr)throw new RangeError(F("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Hr(r,e,n)}var Kr={0:"rwx",1:"rw",2:"rx",3:"r",4:"wx",5:"w",6:"x",7:""};function Qr(r){var e;return r=Jr(r=r.toString(8),4,"0"),e="",e+="u="+Kr[r[1]],e+=",",e+="g="+Kr[r[2]],e+=",",e+="o="+Kr[r[3]]}var re=/^(u{0,1}g{0,1}o{0,1}a{0,1}|)([+\-=])(r{0,1}w{0,1}x{0,1})$/,ee={r:2,w:1,x:0},te={s:0,u:1,g:2,o:3};function ne(r){return 1<<r>>>0}function ie(r,e){return(r&~ne(e))>>>0}function oe(r,e){var t,n,i,o,a,u,c,s,l,f,p,g;for(t=Jr(r.toString(8),4,"0").split(""),f=0;f<t.length;f++)t[f]=parseInt(t[f],10);for(n=e.split(","),f=0;f<n.length;f++){if(null===(a=n[f].match(re)))return new Error(F('invalid argument. Unable to parse mask expression. Ensure the expression is properly formatted, only uses the class letters "u", "g", "o", and "a", only uses the operators "+", "-", and "=", and only uses the permission symbols "r", "w", and "x". Value: `%s`.',e));if(""===(o=a[1]))o="ugo";else{for(s="",g=0;g<o.length;g++)"a"===o[g]?s+="ugo":s+=o[g];o=s}if(c=a[2],i=a[3],"-"===c){if(""===i)continue;for(p=0;p<i.length;p++)for(l=ee[i[p]],g=0;g<o.length;g++)t[u=te[o[g]]]=(t[u]|ne(l))>>>0}else if("+"===c){if(""===i)continue;for(p=0;p<i.length;p++)for(l=ee[i[p]],g=0;g<o.length;g++)t[u=te[o[g]]]=ie(t[u],l)}else if(""===i)for(g=0;g<o.length;g++)t[u=te[o[g]]]=7;else{for(g=0;g<o.length;g++)t[u=te[o[g]]]=7;for(p=0;p<i.length;p++)for(l=ee[i[p]],g=0;g<o.length;g++)t[u=te[o[g]]]=ie(t[u],l)}}for(f=0;f<t.length;f++)t[f]=t[f].toString();return parseInt(t.join(""),8)}return function(){var r,e,t,n,i;if(0===(e=arguments.length))return 0;if(n={},i=arguments[0],1===e){if(Z(i)){if((t=oe(0,i))instanceof Error)throw t;return 0}if(br(i))return 0;if(Wr(i)){if(z(i,"symbolic")&&(n.symbolic=i.symbolic,!dr(n.symbolic)))throw new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","symbolic",n.symbolic));return t=0,n.symbolic&&(t=Qr(t)),t}throw new TypeError(F("invalid argument. Must provide either a string, nonnegative integer, or an options object. Value: `%s`.",i))}if(!Wr(r=arguments[1]))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",r));if(z(r,"symbolic")&&(n.symbolic=r.symbolic,!dr(n.symbolic)))throw new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","symbolic",n.symbolic));if(Z(i)){if((t=oe(0,i))instanceof Error)throw t}else{if(!br(i))throw new TypeError(F("invalid argument. First argument must be either a string or nonnegative integer. Value: `%s`.",i));t=i}return t=0,n.symbolic&&(t=Qr(t)),t}}));
//# sourceMappingURL=index.js.map
