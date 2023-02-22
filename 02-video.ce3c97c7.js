!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};
/*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i=void 0!==e&&"[object global]"==={}.toString.call(e);function a(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function u(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function c(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function l(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function s(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(c(r))return"https://vimeo.com/".concat(r);if(l(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var d=void 0!==Array.prototype.indexOf,h="undefined"!=typeof window&&void 0!==window.postMessage;if(!(i||d&&h))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var r=Object.prototype.hasOwnProperty,o=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),i=function(e,t,n){o?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(i(this,"_id",u("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function o(e,o){if(!a(e)||!r.call(e,"_id"))throw new TypeError(o+" method called on incompatible receiver "+(void 0===e?"undefined":t(n)(e)))}function u(e){return e+"_"+c()+"."+c()}function c(){return Math.random().toString().substring(2)}return i(e.prototype,"delete",(function(e){if(o(this,"delete"),!a(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),i(e.prototype,"get",(function(e){if(o(this,"get"),a(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),i(e.prototype,"has",(function(e){if(o(this,"has"),!a(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),i(e.prototype,"set",(function(e,t){if(o(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?(n[1]=t,this):(i(e,this._id,[e,t]),this)})),i(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:v);var m,p,g=(m=function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
var r,o,i;i=function(){var e,r,o,i=Object.prototype.toString,a="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function u(e,t){o.add(e,t),r||(r=a(o.drain))}function c(e){var r,o=void 0===e?"undefined":t(n)(e);return null==e||"object"!=o&&"function"!=o||(r=e.then),"function"==typeof r&&r}function l(){for(var e=0;e<this.chain.length;e++)s(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function s(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=c(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function f(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=c(e))?u((function(){var r=new v(n);try{t.call(e,(function(){f.apply(r,arguments)}),(function(){d.apply(r,arguments)}))}catch(e){d.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&u(l,n))}catch(e){d.call(new v(n),e)}}}function d(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&u(l,t))}function h(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function v(e){this.def=e,this.triggered=!1}function m(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new m(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&u(l,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){f.call(t,e)}),(function(e){d.call(t,e)}))}catch(e){d.call(t,e)}}o=function(){var e,t,n;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(r,i){n=new o(r,i),t?t.next=n:e=n,t=n,n=void 0},drain:function(){var n=e;for(e=t=r=void 0;n;)n.fn.call(n.self),n=n.next}}}();var g=e({},"constructor",p,!1);return p.prototype=g,e(g,"__NPO__",0,!1),e(p,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(p,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(p,"all",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;h(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(p,"race",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");h(t,e,(function(e,t){n(t)}),r)}))})),p},(o=v)[r="Promise"]=o[r]||i(),e.exports&&(e.exports=o[r])},m(p={exports:{}},p.exports),p.exports),y=new WeakMap;function w(e,t,n){var r=y.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),y.set(e.element,r)}function b(e,t){return(y.get(e.element)||{})[t]||[]}function k(e,t,n){var r=y.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],y.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),y.set(e.element,r),r[t]&&0===r[t].length}function E(e,t){var n=y.get(e);y.set(t,n),y.delete(e)}function T(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function P(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function _(e,t){var n,r=[];if((t=T(t)).event){if("error"===t.event)b(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),k(e,t.data.method,n)}));r=b(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=b(e,t);if(n.length<1)return!1;var r=n.shift();return k(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var M=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return M.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function N(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!l(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return N(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}var F=new WeakMap,C=new WeakMap,S={},A=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!u(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var i=t.querySelector("iframe");i&&(t=i)}if("IFRAME"===t.nodeName&&!l(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(F.has(t))return F.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var a=new g((function(e,r){if(n._onMessage=function(t){if(l(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var o=T(t.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var i=new Error(o.data.message);return i.name=o.data.name,void r(i)}var a=o&&"ready"===o.event,u=o&&"ping"===o.method;if(a||u)return n.element.setAttribute("data-ready","true"),void e();_(n,o)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=x(t,o);j(f(i),i,t).then((function(e){var r=N(e,t);return n.element=r,n._originalElement=t,E(t,r),F.set(n.element,n),e})).catch(r)}}));if(C.set(this,a),F.set(this.element,this),"IFRAME"===this.element.nodeName&&P(this,"ping"),S.isEnabled){var c=function(){return S.exit()};this.fullscreenchangeHandler=function(){S.isFullscreen?w(n,"event:exitFullscreen",c):k(n,"event:exitFullscreen",c),n.ready().then((function(){P(n,"fullscreenchange",S.isFullscreen)}))},S.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n,i;return t=e,n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new g((function(r,o){return t.ready().then((function(){w(t,e,{resolve:r,reject:o}),P(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new g((function(n,r){return e=a(e,"get"),t.ready().then((function(){w(t,e,{resolve:n,reject:r}),P(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new g((function(r,o){if(e=a(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){w(n,e,{resolve:r,reject:o}),P(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===b(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),w(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");k(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=C.get(this)||new g((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return g.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return S.isEnabled?S.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return S.isEnabled?S.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return S.isEnabled?g.resolve(S.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new g((function(t){if(C.delete(e),F.delete(e.element),e._originalElement&&(F.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),S.isEnabled&&S.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],n&&o(t.prototype,n),i&&o(t,i),e}();i||(S=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=x(e);j(f(t),t,e).then((function(t){return N(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(l(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var t=function(t){if(l(t.origin)){var n=T(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;s(i.src)&&a&&new A(i).callMethod("appendVideoMetadata",window.location.href)}}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))},n=function(n){var r=function(e){var r,o=i[e],a=o.contentWindow===n.source;s(o.src)&&a&&(r=new A(o)).getVideoId().then((function(e){var t=new RegExp("[?&]vimeo_t_".concat(e,"=([^&#]*)")).exec(window.location.href);if(t&&t[1]){var n=decodeURI(t[1]);r.setCurrentTime(n)}})).catch(t)};if(l(n.origin)){var o=T(n.data);if(o&&"ready"===o.event)for(var i=e.querySelectorAll("iframe"),a=0;a<i.length;a++)r(a)}};window.addEventListener("message",n)}}());var O=new A(document.querySelector("#vimeo-player")),q={},I="Expected a function",V=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,L=/^0o[0-7]+$/i,z=parseInt,U="object"==typeof e&&e&&e.Object===Object&&e,D="object"==typeof self&&self&&self.Object===Object&&self,H=U||D||Function("return this")(),$=Object.prototype.toString,B=Math.max,Q=Math.min,Y=function(){return H.Date.now()};function J(e,t,n){var r,o,i,a,u,c,l=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError(I);function h(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function v(e){return l=e,u=setTimeout(p,t),s?h(e):a}function m(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-l>=i}function p(){var e=Y();if(m(e))return g(e);u=setTimeout(p,function(e){var n=t-(e-c);return f?Q(n,i-(e-l)):n}(e))}function g(e){return u=void 0,d&&r?h(e):(r=o=void 0,a)}function y(){var e=Y(),n=m(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return v(c);if(f)return u=setTimeout(p,t),h(c)}return void 0===u&&(u=setTimeout(p,t)),a}return t=G(t)||0,X(n)&&(s=!!n.leading,i=(f="maxWait"in n)?B(G(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},y.flush=function(){return void 0===u?a:g(Y())},y}function X(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function G(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==$.call(e)}(e))return NaN;if(X(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=X(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(V,"");var o=W.test(e);return o||L.test(e)?z(e.slice(2),o?2:8):R.test(e)?NaN:+e}q=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(I);return X(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),J(e,t,{leading:r,maxWait:t,trailing:o})};var K="videoplayer-current-time";O.on("timeupdate",q((function(e){e.seconds;localStorage.setItem(K,e.seconds)}),1e3)),O.setCurrentTime(localStorage.getItem(K)).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.ce3c97c7.js.map
