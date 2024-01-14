(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,':root {\n    --body-background-clr: #F6C28B;\n    --content-background-clr: #98473E;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: "Poppins", sans-serif;\n}\n\nbody {\n    background-color: var(--body-background-clr);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\nbutton {\n    width: 30%;\n    height: 4rem;\n    font-size: 2rem;\n    color: var(--content-background-clr);\n    transition: all ease-out .1s;\n}\n\nbutton:hover {\n    transform: scale(1.05);\n}\n\nbutton:active {\n    transform: scale(1);\n}\n\nimg {\n    width: 100%;\n    height: auto;\n}\n\nh1 {\n    font-size: 2rem;\n}\n\np {\n    font-size: 1rem;\n}\n\n#content {\n    background-color: var(--content-background-clr);\n    display: flex;\n    flex-direction: column;\n    width: 30vw;\n    height: 58vh;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2rem;\n    color: var(--body-background-clr);\n}\n\n.page {\n    display: flex;\n    flex-direction: column;\n    width: 30vw;\n    height: 44vh;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2rem 2rem 0 2rem;\n}\n\n.btn-box {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n#content,\n.homepage-img {\n    border-radius: 4px;\n}',""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),u=t.n(d),l=t(589),p=t.n(l),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"f7a1e04d9afe21b12c8a.jpg",g=function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("page");const t=document.createElement("h1");t.textContent="Welcome to our restaurant!";const o=document.createElement("img");o.src=h,o.alt="Restaurant image",o.classList.add("homepage-img");const r=document.createElement("p");r.textContent="Enjoy the best dining experience with us.",n.appendChild(t),n.appendChild(o),n.appendChild(r),e.appendChild(n)},v=t.p+"e7eccae2b204d07c1fb1.jpg",b=t.p+"e4cbda7f6089c772e56d.jpg";document.addEventListener("DOMContentLoaded",(()=>{(function(){const e=document.createElement("div");e.classList.add("btn-box");const n=document.createElement("button");n.textContent="HOME";const t=document.createElement("button");t.textContent="MENU";const o=document.createElement("button");o.textContent="CONTACT",e.appendChild(n),e.appendChild(t),e.appendChild(o),content.appendChild(e)})(),g(),document.querySelector(".btn-box").addEventListener("click",(e=>{switch(document.querySelector(".page").remove(),e.target.textContent){case"HOME":g();break;case"MENU":!function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("page");const t=document.createElement("h1");t.textContent="Menu";const o=document.createElement("img");o.src=v,o.alt="Our menu",o.classList.add("homepage-img");const r=document.createElement("p");r.textContent="Wanna eat?",n.appendChild(t),n.appendChild(o),n.appendChild(r),e.appendChild(n)}();break;case"CONTACT":!function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("page");const t=document.createElement("h1");t.textContent="Contact us";const o=document.createElement("img");o.src=b,o.alt="Contact image",o.classList.add("homepage-img");const r=document.createElement("p");r.textContent="Not sure we want to reveal contact info..",n.appendChild(t),n.appendChild(o),n.appendChild(r),e.appendChild(n)}()}}))}))})()})();