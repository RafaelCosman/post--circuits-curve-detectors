(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"3Ttg":function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return v})),n.d(e,"b",(function(){return j}));var r=n("wx14"),i=n("Ff2n"),o=n("1OyB"),u=n("vuIU"),c=n("JX7q"),a=n("Ji7U"),f=n("md7G"),l=n("foSv"),s=n("rePB"),d=n("LvDl"),p=n("q1tI"),b=n.n(p),g=b.a.createElement;function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var i=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var h=function(t){Object(a.a)(n,t);var e=m(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return t=e.call.apply(e,[this].concat(i)),Object(s.a)(Object(c.a)(t),"state",{isHovering:!1}),t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isHovering,n=this.props,o=n.children,u=n.id,c=n.onClick,a=n._key,f=Object(i.a)(n,["children","id","onClick","_key"]),l=Object(d.isFunction)(o)?{onMouseEnter:function(e){t.setState({isHovering:!0}),t.props.onMouseEnter&&t.props.onMouseEnter(e)},onMouseLeave:function(e){t.setState({isHovering:!1}),t.props.onMouseLeae&&t.props.onMouseLeave(e)}}:{};f.marginY&&(f.marginTop=f.marginY,f.marginBottom=f.marginY,delete f.marginY),f.paddingY&&(f.paddingTop=f.paddingY,f.paddingBottom=f.paddingY,delete f.paddingY),f.marginX&&(f.marginLeft=f.marginX,f.marginRight=f.marginX,delete f.marginX),f.paddingX&&(f.paddingLeft=f.paddingX,f.paddingRight=f.paddingX,delete f.paddingX);var s={id:u,key:a,onClick:c};return g("div",Object(r.a)({},s,{style:O({display:"flex",flexFlow:"column",boxSizing:"border-box"},f)},l),Object(d.isFunction)(o)?o(e):o)}}]),n}(b.a.Component),v=function(t){var e=t.src,n=t.size,o=t.padding,u=t.style,c=Object(i.a)(t,["src","size","padding","style"]);return o||((e.indexOf("conv2d2")>-1||e.indexOf("conv2d1")>-1||e.indexOf("conv2d0"))&&(o=0),(e.indexOf("mixed3a")>-1||e.indexOf("mixed3b")>-1)&&(o=0),(e.indexOf("mixed4a")>-1||e.indexOf("mixed4b")>-1||e.indexOf("mixed4c")>-1)&&(o=0)),g("div",Object(r.a)({style:Object.assign({},{width:n,height:n,overflow:"hidden",borderRadius:5,position:"relative"},u)},c),g("img",{src:e,width:n+2*o,height:n+2*o,style:{position:"absolute",left:-o,top:-o}}))},j=function(t){var e=t.size,n=t.children,o=Object(i.a)(t,["size","children"]);if(e){o=O({},o,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[e]||{})}return g(h,Object(r.a)({color:"black",display:"inline-block"},o),n)}},F0vy:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sidebar",function(){return n("GbPY")}])},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,"a",(function(){return r}))},GbPY:function(t,e,n){"use strict";n.r(e);var r=n("wx14"),i=n("q1tI"),o=n.n(i),u=n("3Ttg"),c=o.a.createElement,a=function(t){var e=Object(r.a)({},t),n="#"+e.children.trim().replace(/\ /g,"-").toLowerCase();return c(u.a,null,(function(t){return c("a",Object(r.a)({href:n,style:{textDecoration:t?"underline":"none",color:t?"black":"rgba(0, 0, 0, 0.8)",marginTop:2,marginBottom:2,fontWeight:"bold",fontSize:13}},e))}))};e.default=function(){return c(u.a,{display:"grid",alignSelf:"start",gridColumnStart:"1 !important",gridColumnEnd:"4 !important",justifySelf:"end",marginTop:0,paddingRight:"3em",paddingLeft:"2em",style:{borderRight:"1px solid rgba(0, 0, 0, 0.1)"}},c("nav",null,c("h3",null,"Contents"),c(a,null,"A Simplified Story of Curve Neurons"),c(a,null,"Feature Visualization"),c(a,null,"Dataset Analysis"),c(a,null,"Visualizing Attribution"),c(a,null,"Human Comparison"),c(a,null,"Joint Tuning Curves"),c(a,null,"Synthetic Curves"),c(a,null,"Radial Tuning Curve"),c(a,null,"The Curve Families of InceptionV1"),c(a,null,"Repurposing Curve Detectors"),c(a,null,"The Combing Phenomenon"),c(a,null,"Conclusion")))}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return i}))},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var i=n("JX7q");function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(i.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return i}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}},[["F0vy",0,1,2]]]);