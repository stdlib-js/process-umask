// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.2.0-esm/index.mjs";var l={0:"rwx",1:"rw",2:"rx",3:"r",4:"wx",5:"w",6:"x",7:""};function f(r){var t;return r=r.toString(8),r=o(r,4,"0"),t="",t+="u="+l[r[1]],t+=",",t+="g="+l[r[2]],t+=",",t+="o="+l[r[3]]}var m=/^(u{0,1}g{0,1}o{0,1}a{0,1}|)([+\-=])(r{0,1}w{0,1}x{0,1})$/,h={r:2,w:1,x:0},g={s:0,u:1,g:2,o:3};function c(r){return 1<<r>>>0}function d(r,t){return(r&~c(t))>>>0}function p(r,t){var e,i,s,l,f,p,a,u,b,j,v,w;for(e=o(r.toString(8),4,"0").split(""),j=0;j<e.length;j++)e[j]=parseInt(e[j],10);for(i=t.split(","),j=0;j<i.length;j++){if(null===(f=i[j].match(m)))return new Error(n("0nl6t",t));if(""===(l=f[1]))l="ugo";else{for(u="",w=0;w<l.length;w++)"a"===l[w]?u+="ugo":u+=l[w];l=u}if(a=f[2],s=f[3],"-"===a){if(""===s)continue;for(v=0;v<s.length;v++)for(b=h[s[v]],w=0;w<l.length;w++)e[p=g[l[w]]]=(e[p]|c(b))>>>0}else if("+"===a){if(""===s)continue;for(v=0;v<s.length;v++)for(b=h[s[v]],w=0;w<l.length;w++)e[p=g[l[w]]]=d(e[p],b)}else if(""===s)for(w=0;w<l.length;w++)e[p=g[l[w]]]=7;else{for(w=0;w<l.length;w++)e[p=g[l[w]]]=7;for(v=0;v<s.length;v++)for(b=h[s[v]],w=0;w<l.length;w++)e[p=g[l[w]]]=d(e[p],b)}}for(j=0;j<e.length;j++)e[j]=e[j].toString();return parseInt(e.join(""),8)}function a(){var o,l,m,h,g;if(0===(l=arguments.length))return 0;if(h={},g=arguments[0],1===l){if(r(g)){if((m=p(0,g))instanceof Error)throw m;return 0}if(t(g))return 0;if(i(g)){if(s(g,"symbolic")&&(h.symbolic=g.symbolic,!e(h.symbolic)))throw new TypeError(n("0nl2o","symbolic",h.symbolic));return m=0,h.symbolic&&(m=f(m)),m}throw new TypeError(n("0nl6r",g))}if(!i(o=arguments[1]))throw new TypeError(n("0nl2V",o));if(s(o,"symbolic")&&(h.symbolic=o.symbolic,!e(h.symbolic)))throw new TypeError(n("0nl2o","symbolic",h.symbolic));if(r(g)){if((m=p(0,g))instanceof Error)throw m}else{if(!t(g))throw new TypeError(n("0nl6s",g));m=g}return m=0,h.symbolic&&(m=f(m)),m}export{a as default};
//# sourceMappingURL=index.mjs.map
