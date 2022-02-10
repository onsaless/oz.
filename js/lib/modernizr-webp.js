!function(e,n,A){function o(e,n){return typeof e===n}function a(){var e,n,A,a,t,i,r;for(var f in s)if(s.hasOwnProperty(f)){if(e=[],n=s[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)i=e[t],r=i.split("."),1===r.length?l[r[0]]=a:(!l[r[0]]||l[r[0]]instanceof Boolean||(l[r[0]]=new Boolean(l[r[0]])),l[r[0]][r[1]]=a),u.push((a?"":"no-")+r.join("-"))}}function t(e){var n=c.className,A=l._config.classPrefix||"";if(p&&(n=n.baseVal),l._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}l._config.enableClasses&&(n+=" "+A+e.join(" "+A),p?c.className.baseVal=n:c.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),a=l[o[0]];if(2==o.length&&(a=a[o[1]]),"undefined"!=typeof a)return l;n="function"==typeof n?n():n,1==o.length?l[o[0]]=n:(!l[o[0]]||l[o[0]]instanceof Boolean||(l[o[0]]=new Boolean(l[o[0]])),l[o[0]][o[1]]=n),t([(n&&0!=n?"":"no-")+o.join("-")]),l._trigger(e,n)}return l}var s=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){s.push({name:e,fn:n,options:A})},addAsyncTest:function(e){s.push({name:null,fn:e})}},l=function(){};l.prototype=r,l=new l;var f,u=[];!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}();var c=n.documentElement,p="svg"===c.nodeName.toLowerCase();r._l={},r.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),l.hasOwnProperty(e)&&setTimeout(function(){l._trigger(e,l[e])},0)},r._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},l._q.push(function(){r.addTest=i}),l.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==a.width:!1,t="webp"===e;i(e,t&&o?new Boolean(o):o),A&&A(n)}var a=new Image;a.onerror=o,a.onload=o,a.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),a(),delete r.addTest,delete r.addAsyncTest;for(var d=0;d<l._q.length;d++)l._q[d]();e.Modernizr=l}(window,document);
//# sourceMappingURL=modernizr-webp.js.map

//# sourceMappingURL=modernizr-webp.js.map

//# sourceMappingURL=modernizr-webp.js.map

//# sourceMappingURL=modernizr-webp.js.map

//# sourceMappingURL=modernizr-webp.js.map

//# sourceMappingURL=modernizr-webp.js.map

//# sourceMappingURL=modernizr-webp.js.map

//# sourceMappingURL=modernizr-webp.js.map

//# sourceMappingURL=modernizr-webp.js.map

//# sourceMappingURL=modernizr-webp.js.map

//# sourceMappingURL=modernizr-webp.js.map
