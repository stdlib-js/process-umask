// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";var l={0:"rwx",1:"rw",2:"rx",3:"r",4:"wx",5:"w",6:"x",7:""};function m(r){var t;return r=r.toString(8),r=o(r,4,"0"),t="",t+="u="+l[r[1]],t+=",",t+="g="+l[r[2]],t+=",",t+="o="+l[r[3]]}var f=/^(u{0,1}g{0,1}o{0,1}a{0,1}|)([+\-=])(r{0,1}w{0,1}x{0,1})$/,h={r:2,w:1,x:0},g={s:0,u:1,g:2,o:3};function c(r){return 1<<r>>>0}function d(r,t){return(r&~c(t))>>>0}function p(r,t){var e,i,s,l,m,p,a,u,b,j,w,y;for(e=o(r.toString(8),4,"0").split(""),j=0;j<e.length;j++)e[j]=parseInt(e[j],10);for(i=t.split(","),j=0;j<i.length;j++){if(null===(m=i[j].match(f)))return new Error(n("0Om7C",t));if(""===(l=m[1]))l="ugo";else{for(u="",y=0;y<l.length;y++)"a"===l[y]?u+="ugo":u+=l[y];l=u}if(a=m[2],s=m[3],"-"===a){if(""===s)continue;for(w=0;w<s.length;w++)for(b=h[s[w]],y=0;y<l.length;y++)e[p=g[l[y]]]=(e[p]|c(b))>>>0}else if("+"===a){if(""===s)continue;for(w=0;w<s.length;w++)for(b=h[s[w]],y=0;y<l.length;y++)e[p=g[l[y]]]=d(e[p],b)}else if(""===s)for(y=0;y<l.length;y++)e[p=g[l[y]]]=7;else{for(y=0;y<l.length;y++)e[p=g[l[y]]]=7;for(w=0;w<s.length;w++)for(b=h[s[w]],y=0;y<l.length;y++)e[p=g[l[y]]]=d(e[p],b)}}for(j=0;j<e.length;j++)e[j]=e[j].toString();return parseInt(e.join(""),8)}function a(){var o,l,f,h,g;if(0===(l=arguments.length))return 0;if(h={},g=arguments[0],1===l){if(r(g)){if((f=p(0,g))instanceof Error)throw f;return 0}if(t(g))return 0;if(i(g)){if(s(g,"symbolic")&&(h.symbolic=g.symbolic,!e(h.symbolic)))throw new TypeError(n("0Om30","symbolic",h.symbolic));return f=0,h.symbolic&&(f=m(f)),f}throw new TypeError(n("0Om7A",g))}if(!i(o=arguments[1]))throw new TypeError(n("0Om2h",o));if(s(o,"symbolic")&&(h.symbolic=o.symbolic,!e(h.symbolic)))throw new TypeError(n("0Om30","symbolic",h.symbolic));if(r(g)){if((f=p(0,g))instanceof Error)throw f}else{if(!t(g))throw new TypeError(n("0Om7B",g));f=g}return f=0,h.symbolic&&(f=m(f)),f}export{a as default};
//# sourceMappingURL=index.mjs.map
