/*
reframe.js - Reframe.js: responsive iframes for embedded content
@version v2.2.5
@link https://github.com/dollarshaveclub/reframe.js#readme
@author Jeff Wainwright <jjwainwright2@gmail.com> (http://jeffry.in)
@license MIT
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.reframe=t()}(this,function(){"use strict";function e(e,t){var i="string"==typeof e?document.querySelectorAll(e):e,n=t||"js-reframe";"length"in i||(i=[i]);for(var o=0;o<i.length;o+=1){var r=i[o];if(!(-1!==r.className.split(" ").indexOf(n))){var d=r.getAttribute("height"),f=r.getAttribute("width");if(!(f.indexOf("%")>-1||r.style.width.indexOf("%")>-1)){var a=(d||r.offsetHeight)/(f||r.offsetWidth)*100,s=document.createElement("div");s.className=n;var l=s.style;l.position="relative",l.width="100%",l.paddingTop=a+"%";var p=r.style;p.position="absolute",p.width="100%",p.height="100%",p.left="0",p.top="0",r.parentNode.insertBefore(s,r),r.parentNode.removeChild(r),s.appendChild(r)}}}}return e});

/*
TYPEWRITER JS
*/
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Typewriter",[],t):"object"==typeof exports?exports.Typewriter=t():e.Typewriter=t()}("undefined"!=typeof self?self:this,function(){return r={},o.m=n=[,function(p,e,d){(function(e){for(var r,o,i,a=d(11),t="undefined"==typeof window?e:window,n=["moz","webkit"],s="AnimationFrame",u=t["request"+s],c=t["cancel"+s]||t["cancelRequest"+s],l=0;!u&&l<n.length;l++)u=t[n[l]+"Request"+s],c=t[n[l]+"Cancel"+s]||t[n[l]+"CancelRequest"+s];u&&c||(o=r=0,i=[],u=function(e){var t,n;return 0===i.length&&(t=a(),n=Math.max(0,1e3/60-(t-r)),r=n+t,setTimeout(function(){for(var e=i.slice(0),t=i.length=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(r)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))),i.push({handle:++o,callback:e,cancelled:!1}),o},c=function(e){for(var t=0;t<i.length;t++)i[t].handle===e&&(i[t].cancelled=!0)}),p.exports=function(e){return u.call(t,e)},p.exports.cancel=function(){c.apply(t,arguments)},p.exports.polyfill=function(e){(e=e||t).requestAnimationFrame=u,e.cancelAnimationFrame=c}}).call(this,d(4))},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var r=n(1),y=n.n(r),o=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},s=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},g=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},w="TYPE_CHARACTER",T="REMOVE_CHARACTER",E="REMOVE_ALL",b="REMOVE_LAST_VISIBLE_NODE",A="PAUSE_FOR",S="CALL_FUNCTION",N="ADD_HTML_TAG_ELEMENT",_="CHANGE_DELETE_SPEED",C="CHANGE_DELAY",O="CHANGE_CURSOR",L="PASTE_STRING",M="HTML_TAG",x="TEXT_NODE";function i(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function D(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e){if(e){if("string"==typeof e)return a(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(u(p.prototype,[{key:"init",value:function(){var e,t;this.setupWrapperElement(),this.addEventToQueue(O,{cursor:this.options.cursor},!0),this.addEventToQueue(E,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(e=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(t=document.createElement("style")).appendChild(document.createTextNode(e)),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}]),p);function p(e,t){var m=this;if(function(e){if(!(e instanceof p))throw new TypeError("Cannot call a class as a function")}(this),c(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),c(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),c(this,"setupWrapperElement",function(){m.state.elements.container&&(m.state.elements.wrapper.className=m.options.wrapperClassName,m.state.elements.cursor.className=m.options.cursorClassName,m.state.elements.cursor.innerHTML=m.options.cursor,m.state.elements.container.innerHTML="",m.state.elements.container.appendChild(m.state.elements.wrapper),m.state.elements.container.appendChild(m.state.elements.cursor))}),c(this,"start",function(){return m.state.eventLoopPaused=!1,m.runEventLoop(),m}),c(this,"pause",function(){return m.state.eventLoopPaused=!0,m}),c(this,"stop",function(){return m.state.eventLoop&&(Object(r.cancel)(m.state.eventLoop),m.state.eventLoop=null),m}),c(this,"pauseFor",function(e){return m.addEventToQueue(A,{ms:e}),m}),c(this,"typeOutAllStrings",function(){return"string"==typeof m.options.strings?m.typeString(m.options.strings).pauseFor(m.options.pauseFor):m.options.strings.forEach(function(e){m.typeString(e).pauseFor(m.options.pauseFor).deleteAll(m.options.deleteSpeed)}),m}),c(this,"typeString",function(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return o(e)?m.typeOutHTMLString(e,n):(e&&(e="function"==typeof(t=(m.options||{}).stringSplitter)?t(e):e.split(""),m.typeCharacters(e,n)),m)}),c(this,"pasteString",function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return o(e)?m.typeOutHTMLString(e,t,!0):(e&&m.addEventToQueue(L,{character:e,node:t}),m)}),c(this,"typeOutHTMLString",function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length?arguments[2]:void 0,r=s(e);if(0<r.length)for(var o=0;o<r.length;o++){var i=r[o],a=i.innerHTML;i&&3!==i.nodeType?(i.innerHTML="",m.addEventToQueue(N,{node:i,parentNode:t}),n?m.pasteString(a,i):m.typeString(a,i)):i.textContent&&(n?m.pasteString(i.textContent,t):m.typeString(i.textContent,t))}return m}),c(this,"deleteAll",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"natural";return m.addEventToQueue(E,{speed:e}),m}),c(this,"changeDeleteSpeed",function(e){if(!e)throw new Error("Must provide new delete speed");return m.addEventToQueue(_,{speed:e}),m}),c(this,"changeDelay",function(e){if(!e)throw new Error("Must provide new delay");return m.addEventToQueue(C,{delay:e}),m}),c(this,"changeCursor",function(e){if(!e)throw new Error("Must provide new cursor");return m.addEventToQueue(O,{cursor:e}),m}),c(this,"deleteChars",function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)m.addEventToQueue(T);return m}),c(this,"callFunction",function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return m.addEventToQueue(S,{cb:e,thisArg:t}),m}),c(this,"typeCharacters",function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach(function(e){m.addEventToQueue(w,{character:e,node:t})}),m}),c(this,"removeCharacters",function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach(function(){m.addEventToQueue(T)}),m}),c(this,"addEventToQueue",function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];return m.addEventToStateProperty(e,t,n,"eventQueue")}),c(this,"addReverseCalledEvent",function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];return m.options.loop?m.addEventToStateProperty(e,t,n,"reverseCalledEvents"):m}),c(this,"addEventToStateProperty",function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],r=3<arguments.length?arguments[3]:void 0,t={eventName:e,eventArgs:t||{}};return m.state[r]=n?[t].concat(D(m.state[r])):[].concat(D(m.state[r]),[t]),m}),c(this,"runEventLoop",function(){m.state.lastFrameTime||(m.state.lastFrameTime=Date.now());var e=Date.now(),t=e-m.state.lastFrameTime;if(!m.state.eventQueue.length){if(!m.options.loop)return;m.state.eventQueue=D(m.state.calledEvents),m.state.calledEvents=[],m.options=j({},m.state.initialOptions)}if(m.state.eventLoop=y()(m.runEventLoop),!m.state.eventLoopPaused){if(m.state.pauseUntil){if(e<m.state.pauseUntil)return;m.state.pauseUntil=null}var n=D(m.state.eventQueue),r=n.shift();if(!(t<=(s=r.eventName===b||r.eventName===T?"natural"===m.options.deleteSpeed?g(40,80):m.options.deleteSpeed:"natural"===m.options.delay?g(120,160):m.options.delay))){var o=r.eventName,i=r.eventArgs;switch(m.logInDevMode({currentEvent:r,state:m.state,delay:s}),o){case L:case w:var a=i.character,t=i.node,s=document.createTextNode(a),o=s;m.options.onCreateTextNode&&"function"==typeof m.options.onCreateTextNode&&(o=m.options.onCreateTextNode(a,s)),o&&(t||m.state.elements.wrapper).appendChild(o),m.state.visibleNodes=[].concat(D(m.state.visibleNodes),[{type:x,character:a,node:o}]);break;case T:n.unshift({eventName:b,eventArgs:{removingCharacterNode:!0}});break;case A:var u=r.eventArgs.ms;m.state.pauseUntil=Date.now()+parseInt(u);break;case S:var c=r.eventArgs,u=c.cb,c=c.thisArg;u.call(c,{elements:m.state.elements});break;case N:var l=r.eventArgs,c=l.node,l=l.parentNode;(l||m.state.elements.wrapper).appendChild(c),m.state.visibleNodes=[].concat(D(m.state.visibleNodes),[{type:M,node:c,parentNode:l||m.state.elements.wrapper}]);break;case E:var p=m.state.visibleNodes,d=i.speed,f=[];d&&f.push({eventName:_,eventArgs:{speed:d,temp:!0}});for(var v=0,h=p.length;v<h;v++)f.push({eventName:b,eventArgs:{removingCharacterNode:!1}});d&&f.push({eventName:_,eventArgs:{speed:m.options.deleteSpeed,temp:!0}}),n.unshift.apply(n,f);break;case b:l=r.eventArgs.removingCharacterNode;m.state.visibleNodes.length&&(p=(i=m.state.visibleNodes.pop()).type,d=i.node,i=i.character,m.options.onRemoveNode&&"function"==typeof m.options.onRemoveNode&&m.options.onRemoveNode({node:d,character:i}),d&&d.parentNode.removeChild(d),p===M&&l&&n.unshift({eventName:b,eventArgs:{}}));break;case _:m.options.deleteSpeed=r.eventArgs.speed;break;case C:m.options.delay=r.eventArgs.delay;break;case O:m.options.cursor=r.eventArgs.cursor,m.state.elements.cursor.innerHTML=r.eventArgs.cursor}m.options.loop&&(r.eventName===b||r.eventArgs&&r.eventArgs.temp||(m.state.calledEvents=[].concat(D(m.state.calledEvents),[r]))),m.state.eventQueue=n,m.state.lastFrameTime=e}}}),e)if("string"==typeof e){var n=document.querySelector(e);if(!n)throw new Error("Could not find container element");this.state.elements.container=n}else this.state.elements.container=e;t&&(this.options=j(j({},this.options),t)),this.state.initialOptions=j({},this.options),this.init()}},function(e,t){var n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,,,function(s,e,t){(function(a){(function(){var e,t,n,r,o,i;"undefined"!=typeof performance&&null!==performance&&performance.now?s.exports=function(){return performance.now()}:null!=a&&a.hrtime?(s.exports=function(){return(e()-o)/1e6},t=a.hrtime,r=(e=function(){var e;return 1e9*(e=t())[0]+e[1]})(),i=1e9*a.uptime(),o=r-i):n=Date.now?(s.exports=function(){return Date.now()-n},Date.now()):(s.exports=function(){return(new Date).getTime()-n},(new Date).getTime())}).call(this)}).call(this,t(12))},function(e,t){var n,r,e=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,u=[],c=!1,l=-1;function p(){c&&s&&(c=!1,s.length?u=s.concat(u):l=-1,u.length&&d())}function d(){if(!c){var e=a(p);c=!0;for(var t=u.length;t;){for(s=u,u=[];++l<t;)s&&s[l].run();l=-1,t=u.length}s=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function v(){}e.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||c||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=v,e.addListener=v,e.once=v,e.off=v,e.removeListener=v,e.removeAllListeners=v,e.emit=v,e.prependListener=v,e.prependOnceListener=v,e.listeners=function(e){return[]},e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3).default;function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r});