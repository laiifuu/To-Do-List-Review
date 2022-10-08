(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(81),s=n.n(r),a=n(645),i=n.n(a)()(s());i.push([t.id,"/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nul[role='list'] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml:focus-within {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  min-height: 100vh;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.to-do-list {\r\n  width: 350px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 10px;\r\n  border: 1px solid #eee;\r\n}\r\n\r\n.header,\r\n.add-task-section,\r\nli,\r\n.clear-btn {\r\n  padding: 10px;\r\n}\r\n\r\n.header,\r\n.add-task-section,\r\nli {\r\n  border-bottom: 1px solid #eee;\r\n}\r\n\r\n.header > h1 {\r\n  font-size: 18px;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.enter-task {\r\n  width: 100%;\r\n  border: none;\r\n  font-style: italic;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  border: none;\r\n  background-color: inherit;\r\n}\r\n\r\n.task-span {\r\n  text-decoration: line-through;\r\n  opacity: 0.5;\r\n  flex: 1;\r\n}\r\n\r\n.checkbox-ticked {\r\n  color: rgb(88, 236, 138);\r\n}\r\n\r\n.list-item > i {\r\n  cursor: move;\r\n  width: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.clear-btn {\r\n  background-color: #eee;\r\n}\r\n\r\n.clear-btn > button {\r\n  width: 100%;\r\n}\r\n\r\n.clear-btn > button:disabled {\r\n  text-decoration: none;\r\n}\r\n\r\n.clear-btn > button:enabled {\r\n  text-decoration: underline;\r\n  color: grey;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .to-do-list {\r\n    width: 50%;\r\n  }\r\n}\r\n",""]);const o=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,s,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],o=0;o<t.length;o++){var c=t[o],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=s(f,r);r.byIndex=o,e.splice(o,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var a=r(t=t||[],s=s||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var o=n(a[i]);e[o].references--}for(var c=r(t,s),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),s=n.n(r),a=n(569),i=n.n(a),o=n(565),c=n.n(o),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=new class{constructor(){this.tasksList=[]}removeTask(t){this.tasksList.splice(t,1),this.tasksList.forEach(((t,e)=>{t.index=e})),localStorage.setItem("tasks",JSON.stringify(this.tasksList)),this.updateDisplay()}createTaskElement(t){const e=document.createElement("li");e.classList.add("list-item"),e.setAttribute("data-index",t.index),e.innerHTML=`<button><i></i></button>\n    <input type="text" value="${t.description}" class="task-input">\n    <i class="fa-solid fa-ellipsis-vertical trash-can"></i>`;const n=e.querySelector("button>i");if(!1===t.completed){n.classList.add("fa-regular"),n.classList.add("fa-square"),n.classList.add("checkbox");const t=e.querySelector(".task-input"),r=e.querySelector(".trash-can");t.addEventListener("focus",(()=>{e.style.backgroundColor="rgb(205, 187, 205)",r.classList.remove("fa-solid"),r.classList.remove("fa-ellipsis-vertical"),r.classList.add("fa-regular"),r.classList.add("fa-trash-can"),r.style.cursor="pointer",r.addEventListener("click",(()=>{const t=parseInt(r.parentElement.getAttribute("data-index"),10);this.removeTask(t),r.parentElement.remove()}))})),t.addEventListener("focusout",(()=>{e.style.backgroundColor="white",r.classList.add("fa-solid"),r.classList.add("fa-ellipsis-vertical"),r.classList.remove("fa-regular"),r.classList.remove("fa-trash-can"),r.style.cursor="move"})),t.addEventListener("keypress",(e=>{if(e||(e=window.event),"Enter"===(e.code||e.key)){e.preventDefault();const n=t.parentElement.getAttribute("data-index");this.tasksList[n].description=t.value,localStorage.setItem("tasks",JSON.stringify(this.tasksList))}})),t.addEventListener("keyup",(t=>{13===t.keyCode&&(t.preventDefault(),t.target.blur())}))}else{n.classList.add("fa-regular"),n.classList.add("fa-square-check"),n.classList.add("checkbox"),n.classList.add("checkbox-ticked");const r=document.createElement("span");r.innerHTML=`${t.description}`,r.classList.add("task-span");const s=e.querySelector("input");e.replaceChild(r,s)}const r=parseInt(e.getAttribute("data-index"),10);return n.addEventListener("click",(()=>{!function(t,e){!0===e[t].completed?e[t].completed=!1:e[t].completed=!0,localStorage.setItem("tasks",JSON.stringify(e)),e=JSON.parse(localStorage.getItem("tasks"))}(r,this.tasksList),this.updateDisplay()})),e}addTask(t){const e={description:t,completed:!1,index:this.tasksList.length};this.tasksList.push(e),localStorage.setItem("tasks",JSON.stringify(this.tasksList))}editTask(t,e){this.tasksList[e].description=t,localStorage.setItem("tasks",JSON.stringify(this.tasksList))}updateDisplay(){const t=document.querySelector("ul");t.innerHTML="";for(let e=0;e<this.tasksList.length;e+=1)t.append(this.createTaskElement(this.tasksList[e]));this.updateClearButton()}updateClearButton(){const t=document.querySelector(".clear-btn>button");let e=!1;this.tasksList.forEach((t=>{!0===t.completed&&(e=!0)})),t.disabled=!e}},v=document.querySelector(".enter-task"),k=document.querySelector(".tasks-list"),g=document.querySelector(".clear-btn>button");window.addEventListener("load",(()=>{localStorage.getItem("tasks")&&(m.tasksList=JSON.parse(localStorage.getItem("tasks")),0!==m.tasksList.length&&m.updateDisplay())})),v.addEventListener("keypress",(t=>{if("Enter"===(t.code||t.key)){t.preventDefault(),m.addTask(v.value),v.value="";const e=m.createTaskElement(m.tasksList[m.tasksList.length-1]);k.append(e)}})),g.addEventListener("click",(()=>{m.tasksList=m.tasksList.filter((t=>!1===t.completed));for(let t=0;t<m.tasksList.length;t+=1)m.tasksList[t].index=t;localStorage.setItem("tasks",JSON.stringify(m.tasksList)),m.updateDisplay()}))})()})();