(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"3Ttg":function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"c",(function(){return j})),n.d(e,"b",(function(){return m}));var r=n("wx14"),o=n("Ff2n"),i=n("1OyB"),c=n("vuIU"),a=n("JX7q"),u=n("Ji7U"),s=n("md7G"),f=n("foSv"),l=n("rePB"),p=n("LvDl"),d=n("q1tI"),b=n.n(d),y=b.a.createElement;function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var v=function(t){Object(u.a)(n,t);var e=g(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o)),Object(l.a)(Object(a.a)(t),"state",{isHovering:!1}),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isHovering,n=this.props,i=n.children,c=n.id,a=n.onClick,u=n._key,s=Object(o.a)(n,["children","id","onClick","_key"]),f=Object(p.isFunction)(i)?{onMouseEnter:function(e){t.setState({isHovering:!0}),t.props.onMouseEnter&&t.props.onMouseEnter(e)},onMouseLeave:function(e){t.setState({isHovering:!1}),t.props.onMouseLeae&&t.props.onMouseLeave(e)}}:{};s.marginY&&(s.marginTop=s.marginY,s.marginBottom=s.marginY,delete s.marginY),s.paddingY&&(s.paddingTop=s.paddingY,s.paddingBottom=s.paddingY,delete s.paddingY),s.marginX&&(s.marginLeft=s.marginX,s.marginRight=s.marginX,delete s.marginX),s.paddingX&&(s.paddingLeft=s.paddingX,s.paddingRight=s.paddingX,delete s.paddingX);var l={id:c,key:u,onClick:a};return y("div",Object(r.a)({},l,{style:O({display:"flex",flexFlow:"column",boxSizing:"border-box"},s)},f),Object(p.isFunction)(i)?i(e):i)}}]),n}(b.a.Component),j=function(t){var e=t.src,n=t.size,i=t.padding,c=t.style,a=Object(o.a)(t,["src","size","padding","style"]);return i||((e.indexOf("conv2d2")>-1||e.indexOf("conv2d1")>-1||e.indexOf("conv2d0"))&&(i=0),(e.indexOf("mixed3a")>-1||e.indexOf("mixed3b")>-1)&&(i=0),(e.indexOf("mixed4a")>-1||e.indexOf("mixed4b")>-1||e.indexOf("mixed4c")>-1)&&(i=0)),y("div",Object(r.a)({style:Object.assign({},{width:n,height:n,overflow:"hidden",borderRadius:5,position:"relative"},c)},a),y("img",{src:e,width:n+2*i,height:n+2*i,style:{position:"absolute",left:-i,top:-i}}))},m=function(t){var e=t.size,n=t.children,i=Object(o.a)(t,["size","children"]);if(e){i=O({},i,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[e]||{})}return y(v,Object(r.a)({color:"black",display:"inline-block"},i),n)}},BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("a3WO");function o(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",(function(){return r}))},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Jm8C:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));n("ODXe");var r=n("1OyB"),o=n("vuIU"),i=n("JX7q"),c=n("Ji7U"),a=n("md7G"),u=n("foSv"),s=n("rePB"),f=n("q1tI"),l=n.n(f),p=n("TI0E"),d=n("qE0H"),b=n("3Ttg"),y=n("LvDl"),h=n("PyG4"),O=l.a.createElement;function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var j=function(t){return t*(Math.PI/180)},m=function(t){var e=0,n=0;return t.forEach((function(t){var r=t.angle,o=t.weight;e+=Math.cos(j(r))*o,n+=Math.sin(j(r))*o})),Math.atan2(n,e)*(180/Math.PI)},w=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return t=e.call.apply(e,[this].concat(c)),Object(s.a)(Object(i.a)(t),"state",{activeNeuron:null}),Object(s.a)(Object(i.a)(t),"onHighlightNeuron",Object(y.debounce)((function(e){t.setState({activeNeuron:e}),t.props.onActivateNeuron&&t.props.onActivateNeuron(e)}),130,!0)),t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;var e=this.state.activeNeuron,n=this.props,r=n.layer,o=n.neurons,i=void 0===o?[]:o,c=n.responsesByNeuron,a=n.fillOpacity,u=void 0===a?.85:a,f=(n.neuronPadding,n.size),l=n.model,v=void 0===l?"inceptionv1":l,w=n.orientationType,x=void 0===w?"max":w,P=(n.fixedMax,n.neuronSize),S=void 0===P?60:P,k=i.reduce((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,Object(s.a)({},e,function(t){var e=c[t];return"max"===x?e.indexOf(Object(y.max)(e))/2:m(e.map((function(t,e){return{angle:e/2,weight:t}})))}(e)))}),{}),M=Object(y.max)(Object(y.flatten)(i.map((function(t){return c[t]})))),D=f/3.5,E=.3*D,I=i.map((function(n){var r=c[n].map((function(e,n){return[j(n/2)+Math.PI/2,E+Math.pow(e/(t.props.fixedMax||M),1)*D*1]}));r.push(r[0]);var o="hsl(".concat(k[n],", 96%, 30%)"),i="hsla(".concat(k[n],", 66%, 60%, ").concat(u,")"),a=Object(p.a)().curve(d.a)(r);return O("path",{key:n,d:a,fill:i,onMouseEnter:function(){return t.onHighlightNeuron(n)},onMouseLeave:function(){return t.onHighlightNeuron(null)},stroke:o,strokeWidth:1,transform:"translate(".concat(f/2,",").concat(f/2,")"),style:{opacity:e?e===n?1:0:1,transition:"700ms ease-out all"}})})),R=f/2;return O("div",{key:1,style:{marginTop:30,marginBottom:30,width:f,height:f,position:"relative",borderRadius:f,border:"1px dashed rgba(0, 0, 0, 0.3)"}},O("svg",{key:1,width:f,height:f,style:{position:"absolute",zIndex:10}},I),O("div",{style:{background:"rgb(247,249,252)",border:"1px solid rgba(0, 0, 0, .5)",width:2*E,height:2*E,zIndex:100,borderRadius:E,position:"absolute",left:f/2-E,top:f/2-E}}),i.map((function(n){return O(b.a,{position:"absolute",key:n,left:f/2+Math.cos(j(k[n]))*R-S/2,top:f/2+Math.sin(j(k[n]))*R-S/2,zIndex:10},O("a",{href:"https://microscope.openai.com/models/inceptionv1/".concat(r,"_0/").concat(n),style:{borderBottom:"none"},target:"_blank"},O("img",{src:Object(h.a)(v,r,n),width:S,onMouseEnter:function(){return t.onHighlightNeuron(n)},onMouseLeave:function(){return t.onHighlightNeuron(null)},style:{borderRadius:S,opacity:e?e===n?1:.2:1,border:"3px solid ".concat("hsla(".concat(k[n],", 96%, 30%, 0.4)")),transition:"700ms ease-out all"}})))})),O("div",{style:{position:"absolute",left:0,right:0,borderBottom:"1px dashed rgba(0, 0, 0, 0.3)",height:1,top:f/2-1,zIndex:5}}),O("div",{style:{position:"absolute",top:0,bottom:0,background:"rgba(0, 0, 0, 0.1)",borderRight:"1px dashed rgba(0, 0, 0, 0.3)",width:1,left:f/2-1,zIndex:5}}))}}]),n}(l.a.Component)},ODXe:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("BsWD");function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},PyG4:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("ODXe");var r=n("LvDl"),o=function(t,e,n){var o="jpg";return Object(r.includes)(["conv2d0","conv2d1","conv2d2"],e)&&(o="png"),"https://distill.pub/2020/circuits/early-vision/images/neuron/".concat(e,"_").concat(n,".").concat(o)}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},a3WO:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return i}));var o=n("JX7q");function i(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}}]);