(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"3Ttg":function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return j}));var r=n("wx14"),i=n("Ff2n"),o=n("1OyB"),c=n("vuIU"),a=n("JX7q"),u=n("Ji7U"),f=n("md7G"),s=n("foSv"),l=n("rePB"),d=n("LvDl"),p=n("q1tI"),b=n.n(p),g=b.a.createElement;function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var i=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t){Object(u.a)(n,t);var e=v(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=e.call.apply(e,[this].concat(i)),Object(l.a)(Object(a.a)(t),"state",{isHovering:!1}),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isHovering,n=this.props,o=n.children,c=n.id,a=n.onClick,u=n._key,f=Object(i.a)(n,["children","id","onClick","_key"]),s=Object(d.isFunction)(o)?{onMouseEnter:function(e){t.setState({isHovering:!0}),t.props.onMouseEnter&&t.props.onMouseEnter(e)},onMouseLeave:function(e){t.setState({isHovering:!1}),t.props.onMouseLeae&&t.props.onMouseLeave(e)}}:{};f.marginY&&(f.marginTop=f.marginY,f.marginBottom=f.marginY,delete f.marginY),f.paddingY&&(f.paddingTop=f.paddingY,f.paddingBottom=f.paddingY,delete f.paddingY),f.marginX&&(f.marginLeft=f.marginX,f.marginRight=f.marginX,delete f.marginX),f.paddingX&&(f.paddingLeft=f.paddingX,f.paddingRight=f.paddingX,delete f.paddingX);var l={id:c,key:u,onClick:a};return g("div",Object(r.a)({},l,{style:O({display:"flex",flexFlow:"column",boxSizing:"border-box"},f)},s),Object(d.isFunction)(o)?o(e):o)}}]),n}(b.a.Component),h=function(t){var e=t.src,n=t.size,o=t.padding,c=t.style,a=Object(i.a)(t,["src","size","padding","style"]);return o||((e.indexOf("conv2d2")>-1||e.indexOf("conv2d1")>-1||e.indexOf("conv2d0"))&&(o=0),(e.indexOf("mixed3a")>-1||e.indexOf("mixed3b")>-1)&&(o=0),(e.indexOf("mixed4a")>-1||e.indexOf("mixed4b")>-1||e.indexOf("mixed4c")>-1)&&(o=0)),g("div",Object(r.a)({style:Object.assign({},{width:n,height:n,overflow:"hidden",borderRadius:5,position:"relative"},c)},a),g("img",{src:e,width:n+2*o,height:n+2*o,style:{position:"absolute",left:-o,top:-o}}))},j=function(t){var e=t.size,n=t.children,o=Object(i.a)(t,["size","children"]);if(e){o=O({},o,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[e]||{})}return g(m,Object(r.a)({color:"black",display:"inline-block"},o),n)}},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,"a",(function(){return r}))},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return i}))},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var i=n("JX7q");function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(i.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},t64z:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dataset/exponential",function(){return n("zsct")}])},uYk3:function(t,e,n){"use strict";var r=n("wx14"),i=n("Ff2n"),o=n("q1tI"),c=n.n(o),a=n("3Ttg"),u=c.a.createElement;e.a=function(t){var e=t.children,n=t.background,o=void 0===n?"rgb(252, 252, 252)":n,c=(t.fullWidth,t.margin,t.banner),f=void 0!==c&&c,s=Object(i.a)(t,["children","background","fullWidth","margin","banner"]);return u(a.a,Object(r.a)({gridColumn:"screen",paddingTop:20,background:o,marginTop:40,marginBottom:f?0:40,paddingBottom:f?0:20,borderTop:"1px solid rgba(0, 0, 0, 0.1)",borderBottom:!f&&"1px solid rgba(0, 0, 0, 0.1)"},s),e)}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return i}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},zsct:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),o=(n("uYk3"),n("3Ttg")),c=i.a.createElement;e.default=function(){return c(o.a,{marginBottom:20},c(o.a,{alignItems:"center",gridColumn:"screen"},c("img",{style:{marginBottom:10,alignSelf:"center",transform:"translateX(-15px)"},width:900,src:"http://storage.googleapis.com/clarity-public/circuits/curve-detectors/dataset-curves/exponential-pdf2.jpg"})),c("figcaption",null,"By looking at pre-ReLU values for 3b:379 activations, we see that both positive and negative values follow an exponential distribution. Since all negative values will be lifted to zero by the ReLU, 3b:379 activations are sparse, with only 11% of stimuli across the dataset causing activations."))}}},[["t64z",0,1,2]]]);