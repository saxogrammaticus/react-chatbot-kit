module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e){t.exports=require("react")},function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=n(0)},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,s(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,r.Component),function(t,e,n){e&&i(t.prototype,e)}(e,[{key:"render",value:function(){var t=this.props,e=t.ifTrue,n=t.show,r=t.elseShow;return o.a.createElement(o.a.Fragment,null,e&&n,r&&!e&&r)}}]),e}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(h(h(n=function(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?h(t):e}(this,d(e).call(this,t)))),"toggleDropdown",(function(){n.setState((function(t){return{dropdownOpen:!t.dropdownOpen}}))})),m(h(h(n)),"openDropdown",(function(){n.setState({dropdownOpen:!0})})),m(h(h(n)),"closeDropdown",(function(){n.setState({dropdownOpen:!1})})),n.state={dropdownOpen:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,r.Component),function(t,e,n){e&&p(t.prototype,e)}(e,[{key:"render",value:function(){var t=this.state.dropdownOpen;return o.a.createElement(r.Fragment,null,this.props.render(t,this.toggleDropdown,this.openDropdown,this.closeDropdown))}}]),e}();n.d(e,"ConditionallyRender",(function(){return l})),n.d(e,"Dropdown",(function(){return y}));var g={ConditionallyRender:l,Dropdown:y};e.default=g}])},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function c(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],o=0;o<t.length;o++){var a=t[o],s=e.base?a[0]+e.base:a[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var f=c(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:l,updater:m(p,e),references:1}),r.push(l)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function d(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var b=null,h=0;function m(t,e){var n,r,o;if(e.singleton){var a=h++;n=b||(b=u(e)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=u(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=s(t,e),u=0;u<n.length;u++){var l=c(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},function(t,e,n){var r=n(2),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,n){(e=n(3)(!1)).push([t.i,'.react-chatbot-kit-user-chat-message-container {\n  display: flex;\n  margin: 15px 0;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.react-chatbot-kit-user-avatar-container {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-left: 12.5px;\n  background-color: #3d4e8d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.react-chatbot-kit-user-avatar-icon {\n  fill: #fff;\n  width: 15px;\n  height: 15px;\n}\n.react-chatbot-kit-user-avatar {\n  z-index:1;\n}\n\n\n.react-chatbot-kit-user-chat-message {\n  background-color: #0B93F6;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-size: 0.9rem;\n  color: white;\n  font-weight: medium;\n  position: relative;\n  text-align: left;\n}\n\n.react-chatbot-kit-user-chat-message::before {\n  content: "";\n  position:absolute;\n  bottom:-2px;\n  height:20px;\n  right:-7px;\n  border-right:20px solid #0B93F6;\n  border-bottom-left-radius: 16px 14px;\n  transform:translate(0, -2px);\n}\n.react-chatbot-kit-user-chat-message::after {\n  content: "";\n  position:absolute;\n  bottom:-2px;\n  height:20px;\n  right:-56px;\n  width:26px;\n  background:white;\n  border-bottom-left-radius: 10px;\n  transform:translate(-30px, -2px);\n}\n\n.react-chatbot-kit-user-chat-message-arrow {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid #f1f1f1;\n  position: absolute;\n  right: -7px;\n  top: 13px;\n}\n',""]),t.exports=e},function(t,e,n){var r=n(2),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,n){(e=n(3)(!1)).push([t.i,'.react-chatbot-kit-chat-bot-message-container {\n  display: flex;\n  margin: 15px 0;\n  justify-content: flex-start;\n  align-items: center;\n}\n.react-chatbot-kit-chat-bot-avatar {\nz-index:1;\n}\n.react-chatbot-kit-chat-bot-avatar-container {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  font-size: 1.2rem;\n  margin-right: 12.5px;\n  /*background-color: #d8d8d8;*/\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.react-chatbot-kit-chat-bot-avatar-icon {\n  fill: #494646;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.react-chatbot-kit-chat-bot-avatar-letter {\n  color: #1d1d1d;\n}\n\n.react-chatbot-kit-chat-bot-message {\n  background-color: #E5E5EA;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-size: 0.9rem;\n  color: black;\n  font-weight: medium;\n  position: relative;\n  width: 184.5px;\n  margin-left: auto;\n  text-align: left;\n}\n\n.react-chatbot-kit-chat-bot-message::before {\n  content: "";\n  position:absolute;\n  bottom:-2px;\n  height:20px;\n  left:-7px;\n  border-left:20px solid #386c7e;\n  border-bottom-right-radius: 16px 14px;\n  transform:translate(0, -2px);\n}\n.react-chatbot-kit-chat-bot-message::after {\n  content: "";\n  position:absolute;\n  bottom:-2px;\n  height:20px;\n  left:4px;\n  width:26px;\n  background:white;\n  border-bottom-right-radius: 10px;\n  transform:translate(-30px, -2px);\n}\n\n.react-chatbot-kit-chat-bot-message-arrow {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-right: 8px solid #2898ec;\n  position: absolute;\n  left: -7px;\n  top: 13px;\n}\n\n.react-chatbot-kit-chat-bot-loading-icon-container {\n  height: 17px;\n  width: 25px;\n}\n\n.chatbot-loader-container {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n\n#chatbot-loader #chatbot-loader-dot1 {\n  animation: load 1s infinite;\n}\n\n#chatbot-loader #chatbot-loader-dot2 {\n  animation: load 1s infinite;\n  animation-delay: 0.2s;\n}\n\n#chatbot-loader #chatbot-loader-dot3 {\n  animation: load 1s infinite;\n  animation-delay: 0.4s;\n}\n\n@keyframes load {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n',""]),t.exports=e},function(t,e,n){var r=n(2),o=n(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,n){(e=n(3)(!1)).push([t.i,".react-chatbot-kit-chat-container {\n  position: relative;\n  width: 275px;\n}\n\n.react-chatbot-kit-chat-inner-container {\n  height: 500px;\n  background-color: #fff;\n  border-radius: 3px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n\n.react-chatbot-kit-chat-header {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  background-color: #efefef;\n  font-family: Arial;\n  display: flex;\n  align-items: center;\n  font-size: 0.85rem;\n  color: #514f4f;\n  padding: 12.5px;\n  font-weight: bold;\n}\n\n.react-chatbot-kit-chat-input-container {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n}\n\n.react-chatbot-kit-chat-message-container {\n  padding: 0 17.5px 10px 17.5px;\n  overflow: scroll;\n  height: 424px;\n}\n\n.react-chatbot-kit-chat-input {\n  width: 100%;\n  padding: 12.5px;\n  border: none;\n  font-size: 0.85rem;\n  border-top: 1px solid #d8d8d8;\n  border-bottom-left-radius: 5px;\n}\n\n.react-chatbot-kit-chat-input-form {\n  width: 100%;\n  display: flex;\n}\n\n.react-chatbot-kit-chat-input::placeholder {\n  color: #585858;\n}\n\n.react-chatbot-kit-chat-btn-send {\n  background-color: #2898ec;\n  width: 100px;\n  border: none;\n  color: #fff;\n  border-bottom-right-radius: 5px;\n}\n\n.react-chatbot-kit-chat-btn-send-icon {\n  fill: #fff;\n  width: 15px;\n}\n",""]),t.exports=e},function(t,e,n){var r=n(2),o=n(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,n){(e=n(3)(!1)).push([t.i,".react-chatbot-kit-error {\n  background-color: #fff;\n  border-radius: 3px;\n  padding: 15px;\n}\n\n.react-chatbot-kit-error-container {\n  width: 260px;\n}\n\n.react-chatbot-kit-error-header {\n  font-size: 1.3rem;\n  color: #1d1d1d;\n  margin-bottom: 30px;\n}\n\n.react-chatbot-kit-error-docs {\n  display: block;\n  margin: 25px auto;\n  color: rgb(56, 104, 139);\n  padding: 8px;\n  border: 1px solid rgb(40, 152, 236);\n  width: 130px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1rem;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";n.r(e),n.d(e,"Chatbot",(function(){return X})),n.d(e,"createChatBotMessage",(function(){return f}));var r=n(0),o=n.n(r),a=n(1);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s,u=(s=1,function(){return s+=1}),l=function(t,e){return{message:t,type:e,id:u()}},f=function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},l(t,"bot"),{},e,{loading:!0})},p=function(t){if(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t.apply(void 0,n)}};function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var b=({styles:t={},...e})=>o.a.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),o.a.createElement("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"})),h=(n(4),function(t){var e=t.message,n=t.customComponents;return o.a.createElement("div",{className:"react-chatbot-kit-user-chat-message-container"},o.a.createElement(a.ConditionallyRender,{ifTrue:n.userChatMessage,show:p(n.userChatMessage,{message:e}),elseShow:o.a.createElement("div",{className:"react-chatbot-kit-user-chat-message"},e)}),o.a.createElement(a.ConditionallyRender,{ifTrue:n.userAvatar,show:p(n.userAvatar),elseShow:o.a.createElement("div",{className:"react-chatbot-kit-user-avatar"},o.a.createElement("div",{className:"react-chatbot-kit-user-avatar-container"},o.a.createElement(b,{className:"react-chatbot-kit-user-avatar-icon"})))}))}),m=function(){return o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},o.a.createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"G")))},y=function(){return o.a.createElement("div",{className:"chatbot-loader-container"},o.a.createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{stroke:"none",fill:"none"},o.a.createElement("g",{id:"chatbot-loader",fill:"#fff"},o.a.createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),o.a.createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),o.a.createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))};n(6);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var x=function(t){var e=t.message,n=t.withAvatar,i=t.loading,c=t.messages,s=t.customComponents,u=t.setState,l=t.customStyles,f=t.delay,d=t.id,b=w(Object(r.useState)(!1),2),h=b[0],O=b[1];Object(r.useEffect)((function(){!function(t,e){var n=750;f&&(n+=f),setTimeout((function(){var n=t.find((function(t){return t.id===d}));n&&(n.loading=!1,n.delay=void 0,e((function(e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{messages:t})})))}),n)}(c,u)}),[f,d,u]),Object(r.useEffect)((function(){f?setTimeout((function(){return O(!0)}),f):O(!0)}),[f]);var x={};return l&&(x.backgroundColor=l.backgroundColor,l.backgroundColor),o.a.createElement(a.ConditionallyRender,{ifTrue:h,show:o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message-container"},o.a.createElement(a.ConditionallyRender,{ifTrue:n,show:o.a.createElement(a.ConditionallyRender,{ifTrue:s.botAvatar,show:p(s.botAvatar),elseShow:o.a.createElement(m,null)})}),o.a.createElement(a.ConditionallyRender,{ifTrue:s.botChatMessage,show:p(s.botChatMessage,{message:e,loader:o.a.createElement(y,null)}),elseShow:o.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message",style:x},o.a.createElement(a.ConditionallyRender,{ifTrue:i,show:o.a.createElement(y,null),elseShow:o.a.createElement("span",null,e)}))}))})};function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){E(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var P=function(t){var e=t.passDownProps,n=t.messages,i=t.setState,c=t.scrollIntoView,s=t.state,u=t.customComponents,l=t.customStyles,f=t.widgetRegistry,p=t.withAvatar;return o.a.createElement(r.Fragment,null,o.a.createElement(x,k({},e,{customStyles:l.botMessageBox,messages:n,withAvatar:p,setState:i,customComponents:u})),o.a.createElement(a.ConditionallyRender,{ifTrue:!e.loading,show:f.getWidget(e.widget,S({},s,{scrollIntoView:c}))}))};function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var T=({styles:t={},...e})=>o.a.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),o.a.createElement("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}));n(8);function A(t){return function(t){if(Array.isArray(t))return B(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||R(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){N(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||R(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(t,e){if(t){if("string"==typeof t)return B(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(t,e):void 0}}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var z=function(t){var e=t.state,n=t.setState,i=t.widgetRegistry,c=t.messageParser,s=t.customComponents,u=t.customStyles,f=t.headerText,p=t.placeholderText,d=(t.fetch_rate,t.action_provider),b=e.messages,m=Object(r.useRef)(null),y=I(Object(r.useState)(""),2),g=y[0],v=y[1],w=function(){setTimeout((function(){m.current.scrollTop=m.current.scrollHeight}),50)};Object(r.useEffect)((function(){w()})),Object(r.useEffect)((function(){var t=setInterval((function(){d.fetch_message()}),1e3);return function(){return clearInterval(t)}}),[]);var O={};u&&u.chatButton&&(O.backgroundColor=u.chatButton.backgroundColor);var j="En samtale med N.F.S Grundtvig";f&&(j=f);return p&&(placeHolder=p),o.a.createElement("div",{className:"react-chatbot-kit-chat-container"},o.a.createElement("div",{className:"react-chatbot-kit-chat-inner-container"},o.a.createElement(a.ConditionallyRender,{ifTrue:s.header,show:s.header&&s.header(),elseShow:o.a.createElement("div",{className:"react-chatbot-kit-chat-header"},j)}),o.a.createElement("div",{className:"react-chatbot-kit-chat-message-container",ref:m},b.map((function(t,r){if("bot"!==t.type)return o.a.createElement(h,{message:t.message,key:t.id,customComponents:s});var a;a=t.withAvatar?t.withAvatar:function(t,e){if(0===e)return!0;var n=t[e-1];return!("bot"===n.type&&!n.widget)}(b,r,t.withAvatar);var c={passDownProps:M({},t),setState:n,state:e,customComponents:s,widgetRegistry:i,messages:b};return t.widget?o.a.createElement(P,_({customStyles:u,scrollIntoView:w,withAvatar:a},c,{key:t.id})):o.a.createElement(x,_({customStyles:u.botMessageBox,key:t.id,withAvatar:a},c.passDownProps,{customComponents:s,messages:b,setState:n}))})),o.a.createElement("div",{style:{paddingBottom:"15px"}})),o.a.createElement("div",{className:"react-chatbot-kit-chat-input-container"},o.a.createElement("form",{className:"react-chatbot-kit-chat-input-form",onSubmit:function(t){t.preventDefault(),n((function(t){return M({},t,{messages:[].concat(A(t.messages),[l(g,"user")])})})),c.parse(g),w(),v("")}},o.a.createElement("input",{className:"react-chatbot-kit-chat-input",placeholder:"Skriv noget...",value:g,onChange:function(t){return v(t.target.value)}}),o.a.createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:O},o.a.createElement(T,{className:"react-chatbot-kit-chat-btn-send-icon"}))))))};function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var V=function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,"addWidget",(function(t){var e=t.widgetName,n=t.widgetFunc,o=t.mapStateToProps,a=t.props;r[e]={widget:n,props:a,mapStateToProps:o}})),U(this,"getWidget",(function(t,e){var n=r[t];if(n){var o,a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){U(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({scrollIntoView:e.scrollIntoView},"object"===F(o=n.props)?o:{},{},r.mapStateToProps(n.mapStateToProps,e),{setState:r.setState,actionProvider:r.actionProvider});return n.widget(a)}})),U(this,"mapStateToProps",(function(t,e){if(t)return t.reduce((function(t,n){return t[n]=e[n],t}),{})})),this.setState=e,this.actionProvider=n},H=(n(10),function(t){var e=t.message;return o.a.createElement("div",{className:"react-chatbot-kit-error"},o.a.createElement("h1",{className:"react-chatbot-kit-error-header"},"Ooops. Something is missing."),o.a.createElement("div",{className:"react-chatbot-kit-error-container"},o.a.createElement(x,{message:e,withAvatar:!0,loading:!1,id:1,customComponents:{},messages:[]})),o.a.createElement("a",{href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/",rel:"noopener norefferer",target:"_blank",className:"react-chatbot-kit-error-docs"},"View the docs"))});function W(t){return function(t){if(Array.isArray(t))return Q(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||K(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){G(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||K(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var X=function(t){var e=t.actionProvider,n=t.messageParser,a=t.config,i=t.headerText,c=t.placeholderText,s=t.fetch_rate;if(!a||!e||!n)return o.a.createElement(H,{message:"I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"});var u=function(t,e){var n=[];return t.initialMessages||n.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."),(new e).parse||n.push("Messageparser must implement the method 'parse', please add this method to your object. The signature is parse(message: string)."),n}(a,n);if(u.length){var l=u.reduce((function(t,e){return t+=e}),"");return o.a.createElement(H,{message:l})}var p=function(t){return t.state?t.state:{}}(a),d=J(Object(r.useState)(q({messages:W(a.initialMessages)},p)),2),b=d[0],h=d[1],m=function(t){return t.customStyles?t.customStyles:{}}(a),y=function(t){return t.customComponents?t.customComponents:{botMessageBox:{},chatButton:{}}}(a),g=(function(t){t.botName&&t.botName}(a),new e(f,h)),v=new V(h,g),w=new n(g,b);return function(t){return t.widgets?t.widgets:[]}(a).forEach((function(t){return v.addWidget(t)})),o.a.createElement(z,{state:b,setState:h,widgetRegistry:v,messageParser:w,customComponents:q({},y),customStyles:q({},m),headerText:i,placeholderText:c,fetch_rate:s,action_provider:g})};e.default=X}]);