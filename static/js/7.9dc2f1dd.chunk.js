(window.webpackJsonp=window.webpackJsonp||[]).push([[7,10],{124:function(e,t,n){"use strict";var a=n(2),c=n.n(a),o=n(0),l=n(3),s=n(1);const r=o.forwardRef((e,t)=>{const[{className:n,...a},{as:o="div",bsPrefix:r,spans:i}]=function(e){let{as:t,bsPrefix:n,className:a,...o}=e;n=Object(l.c)(n,"col");const s=Object(l.a)(),r=Object(l.b)(),i=[],u=[];return s.forEach(e=>{const t=o[e];let a,c,l;delete o[e],"object"===typeof t&&null!=t?({span:a,offset:c,order:l}=t):a=t;const s=e!==r?"-".concat(e):"";a&&i.push(!0===a?"".concat(n).concat(s):"".concat(n).concat(s,"-").concat(a)),null!=l&&u.push("order".concat(s,"-").concat(l)),null!=c&&u.push("offset".concat(s,"-").concat(c))}),[{...o,className:c()(a,...i,...u)},{as:t,bsPrefix:n,spans:i}]}(e);return Object(s.jsx)(o,{...a,ref:t,className:c()(n,!i.length&&r)})});r.displayName="Col",t.a=r},125:function(e,t,n){"use strict";var a=n(2),c=n.n(a),o=n(0),l=n(3),s=n(1);const r=o.forwardRef((e,t)=>{let{bsPrefix:n,className:a,as:o="div",...r}=e;const i=Object(l.c)(n,"row"),u=Object(l.a)(),f=Object(l.b)(),m="".concat(i,"-cols"),d=[];return u.forEach(e=>{const t=r[e];let n;delete r[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const a=e!==f?"-".concat(e):"";null!=n&&d.push("".concat(m).concat(a,"-").concat(n))}),Object(s.jsx)(o,{ref:t,...r,className:c()(a,i,...d)})});r.displayName="Row",t.a=r},67:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a);n(69);t.default=function(e){const{title:t}=e;return c.a.createElement("div",{className:"header"},t)}},71:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(159),l=n(118),s=n(125),r=n(124),i=n(52),u=n.n(i),f=n(67),m=n(21),d=n(25);const b={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};t.default=function(e){const{header:t}=e,[n,i]=Object(a.useState)(null);return Object(a.useEffect)(()=>{fetch(m.a.about,{method:"GET"}).then(e=>e.json()).then(e=>i(e)).catch(e=>e)},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(f.default,{title:t}),c.a.createElement("div",{className:"section-content-container"},c.a.createElement(l.a,null,n?c.a.createElement(u.a,null,c.a.createElement(s.a,null,c.a.createElement(r.a,{style:b.introTextContainer},(p=n.about,c.a.createElement(o.a,{children:p}))),c.a.createElement(r.a,{style:b.introImageContainer},c.a.createElement("img",{src:null===n||void 0===n?void 0:n.imageSource,alt:"profile"})))):c.a.createElement(d.default,null))));var p}}}]);
//# sourceMappingURL=7.9dc2f1dd.chunk.js.map