!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";t.r(e);t(2)},function(n,e,t){var r=t(3),o=t(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],c=e.base?i[0]+e.base:i[0],l=t[c]||0,u="".concat(c," ").concat(l);t[c]=l+1;var d=s(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:h(f,e),references:1}),r.push(u)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function g(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(n,e){var t,r,o;if(e.singleton){var i=m++;t=p||(p=l(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=l(e),r=g.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=s(t[r]);a[o].references--}for(var i=c(n,e),l=0;l<t.length;l++){var u=s(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r)()(!1);o.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap);"]),o.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap);"]),o.push([n.i,'/* #region css reset */\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/* #endregion css reset  */\n\n/* background image */\nbody {\n  background-image: url("https://res.cloudinary.com/dli7mlkdu/image/upload/v1599245543/brooke-lark-4J059aGa5s4-unsplash_czrgeu.jpg");\n  /* Background image is centered vertically and horizontally at all times */\n  background-position: center center;\n\n  /* Background image doesn\'t tile */\n  background-repeat: no-repeat;\n\n  /* Background image is fixed in the viewport so that it doesn\'t move when \n     the content\'s height is greater than the image\'s height */\n  background-attachment: fixed;\n\n  /* This is what makes the background image rescale based\n     on the container\'s size */\n  background-size: cover;\n\n  /* Set a background color that will be displayed\n     while the background image is loading */\n  background-color: whitesmoke;\n}\n/* font  */\n\nbody {\n  font-family: "Inter", sans-serif;\n  font-weight: bold;\n}\n\n/* #region navigation  */\n\n#navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  display: block;\n  background: rgb(245, 245, 245);\n  background: -moz-linear-gradient(\n    90deg,\n    rgba(245, 245, 245, 0.653956651019783) 0%,\n    rgba(245, 245, 245, 0.7015756986388305) 85%,\n    rgba(245, 245, 245, 0.1609594521402311) 100%\n  );\n  background: -webkit-linear-gradient(\n    90deg,\n    rgba(245, 245, 245, 0.653956651019783) 0%,\n    rgba(245, 245, 245, 0.7015756986388305) 85%,\n    rgba(245, 245, 245, 0.1609594521402311) 100%\n  );\n  background: linear-gradient(\n    90deg,\n    rgba(245, 245, 245, 0.653956651019783) 0%,\n    rgba(245, 245, 245, 0.7015756986388305) 85%,\n    rgba(245, 245, 245, 0.1609594521402311) 100%\n  );\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f5f5f5",endColorstr="#f5f5f5",GradientType=1);\n}\n\nh1 {\n  padding: 0.5rem 1rem 0 0.5rem;\n  font-size: 2rem;\n  font-family: "Montserrat", sans-serif;\n}\n\n#navbar > ul {\n  display: block;\n  padding-bottom: 0.5rem;\n  /* display: flex; */\n}\n\n.menuItem {\n  height: 100%;\n  padding: 0.25rem 1rem 0.25rem 0.5rem;\n  transition: background-color 0.2s;\n  font-weight: bold;\n  \n}\n\n.menuItem:hover {\n  background-color: rgb(174, 207, 212);\n  cursor: pointer;\n}\n\n@media only screen and (min-width: 461px) {\n  #navbar {\n    display: flex;\n    align-items: baseline;\n  }\n  #navbar > ul {\n    display: flex;\n    padding-bottom: 0;\n  }\n\n  .menuItem {\n    padding: 1rem;\n  }\n}\n\n/* #endregion navigation */\n\n#mainContainer {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.articleTitle {\n  padding: 0 1rem 0 0;\n  display: inline;\n}\n\narticle {\n  padding: 2rem;\n  background: rgba(0, 0, 0, 0.3);\n  color: whitesmoke;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n\n@media only screen and (min-width: 461px) {\n  #mainContainer {\n    align-items: center;\n  }\n}\n',""]),e.default=o}]);