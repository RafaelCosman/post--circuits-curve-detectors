(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+ugm":function(t,n,e){"use strict";var r=e("6txh"),i=e("2K37"),o=e("SDD1"),c=e("/aQN");n.a=function(){var t=c.a,n=c.b,e=Object(i.a)(!0),u=null,a=o.a,s=null;function f(i){var o,c,f,l=i.length,h=!1;for(null==u&&(s=a(f=Object(r.a)())),o=0;o<=l;++o)!(o<l&&e(c=i[o],o,i))===h&&((h=!h)?s.lineStart():s.lineEnd()),h&&s.point(+t(c,o,i),+n(c,o,i));if(f)return s=null,f+""||null}return f.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(i.a)(+n),f):t},f.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(i.a)(+t),f):n},f.defined=function(t){return arguments.length?(e="function"===typeof t?t:Object(i.a)(!!t),f):e},f.curve=function(t){return arguments.length?(a=t,null!=u&&(s=a(u)),f):a},f.context=function(t){return arguments.length?(null==t?u=s=null:s=a(u=t),f):u},f}},"/aQN":function(t,n,e){"use strict";function r(t){return t[0]}function i(t){return t[1]}e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}))},"1OyB":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},"2K37":function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},"3Ttg":function(t,n,e){"use strict";e.d(n,"a",(function(){return g})),e.d(n,"c",(function(){return _})),e.d(n,"b",(function(){return j}));var r=e("wx14"),i=e("Ff2n"),o=e("1OyB"),c=e("vuIU"),u=e("JX7q"),a=e("Ji7U"),s=e("md7G"),f=e("foSv"),l=e("rePB"),h=e("LvDl"),p=e("q1tI"),d=e.n(p),b=d.a.createElement;function y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?y(Object(e),!0).forEach((function(n){Object(l.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function O(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(f.a)(t);if(n){var i=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return Object(s.a)(this,e)}}var g=function(t){Object(a.a)(e,t);var n=O(e);function e(){var t;Object(o.a)(this,e);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=n.call.apply(n,[this].concat(i)),Object(l.a)(Object(u.a)(t),"state",{isHovering:!1}),t}return Object(c.a)(e,[{key:"render",value:function(){var t=this,n=this.state.isHovering,e=this.props,o=e.children,c=e.id,u=e.onClick,a=e._key,s=Object(i.a)(e,["children","id","onClick","_key"]),f=Object(h.isFunction)(o)?{onMouseEnter:function(n){t.setState({isHovering:!0}),t.props.onMouseEnter&&t.props.onMouseEnter(n)},onMouseLeave:function(n){t.setState({isHovering:!1}),t.props.onMouseLeae&&t.props.onMouseLeave(n)}}:{};s.marginY&&(s.marginTop=s.marginY,s.marginBottom=s.marginY,delete s.marginY),s.paddingY&&(s.paddingTop=s.paddingY,s.paddingBottom=s.paddingY,delete s.paddingY),s.marginX&&(s.marginLeft=s.marginX,s.marginRight=s.marginX,delete s.marginX),s.paddingX&&(s.paddingLeft=s.paddingX,s.paddingRight=s.paddingX,delete s.paddingX);var l={id:c,key:a,onClick:u};return b("div",Object(r.a)({},l,{style:v({display:"flex",flexFlow:"column",boxSizing:"border-box"},s)},f),Object(h.isFunction)(o)?o(n):o)}}]),e}(d.a.Component),_=function(t){var n=t.src,e=t.size,o=t.padding,c=t.style,u=Object(i.a)(t,["src","size","padding","style"]);return o||((n.indexOf("conv2d2")>-1||n.indexOf("conv2d1")>-1||n.indexOf("conv2d0"))&&(o=0),(n.indexOf("mixed3a")>-1||n.indexOf("mixed3b")>-1)&&(o=0),(n.indexOf("mixed4a")>-1||n.indexOf("mixed4b")>-1||n.indexOf("mixed4c")>-1)&&(o=0)),b("div",Object(r.a)({style:Object.assign({},{width:e,height:e,overflow:"hidden",borderRadius:5,position:"relative"},c)},u),b("img",{src:n,width:e+2*o,height:e+2*o,style:{position:"absolute",left:-o,top:-o}}))},j=function(t){var n=t.size,e=t.children,o=Object(i.a)(t,["size","children"]);if(n){o=v({},o,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[n]||{})}return b(g,Object(r.a)({color:"black",display:"inline-block"},o),e)}},"6txh":function(t,n,e){"use strict";var r=Math.PI,i=2*r,o=i-1e-6;function c(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function u(){return new c}c.prototype=u.prototype={constructor:c,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,i,o){t=+t,n=+n,e=+e,i=+i,o=+o;var c=this._x1,u=this._y1,a=e-t,s=i-n,f=c-t,l=u-n,h=f*f+l*l;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(h>1e-6)if(Math.abs(l*a-s*f)>1e-6&&o){var p=e-c,d=i-u,b=a*a+s*s,y=p*p+d*d,v=Math.sqrt(b),O=Math.sqrt(h),g=o*Math.tan((r-Math.acos((b+h-y)/(2*v*O)))/2),_=g/O,j=g/v;Math.abs(_-1)>1e-6&&(this._+="L"+(t+_*f)+","+(n+_*l)),this._+="A"+o+","+o+",0,0,"+ +(l*p>f*d)+","+(this._x1=t+j*a)+","+(this._y1=n+j*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,c,u,a){t=+t,n=+n,a=!!a;var s=(e=+e)*Math.cos(c),f=e*Math.sin(c),l=t+s,h=n+f,p=1^a,d=a?c-u:u-c;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+l+","+h:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-h)>1e-6)&&(this._+="L"+l+","+h),e&&(d<0&&(d=d%i+i),d>o?this._+="A"+e+","+e+",0,1,"+p+","+(t-s)+","+(n-f)+"A"+e+","+e+",0,1,"+p+","+(this._x1=l)+","+(this._y1=h):d>1e-6&&(this._+="A"+e+","+e+",0,"+ +(d>=r)+","+p+","+(this._x1=t+e*Math.cos(u))+","+(this._y1=n+e*Math.sin(u))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}},n.a=u},BsWD:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("a3WO");function i(t,n){if(t){if("string"===typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},Ff2n:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}e.d(n,"a",(function(){return r}))},JX7q:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return r}))},Ji7U:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function i(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,"a",(function(){return i}))},JnD7:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=o(e("SDD1").a);function i(t){this._curve=t}function o(t){function n(n){return new i(t(n))}return n._curve=t,n}i.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}},ODXe:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("BsWD");function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,i=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},PyG4:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("ODXe");var r=e("LvDl"),i=function(t,n,e){var i="jpg";return Object(r.includes)(["conv2d0","conv2d1","conv2d2"],n)&&(i="png"),"https://distill.pub/2020/circuits/early-vision/images/neuron/".concat(n,"_").concat(e,".").concat(i)}},Qetd:function(t,n,e){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},SDD1:function(t,n,e){"use strict";function r(t){this._context=t}r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}},n.a=function(t){return new r(t)}},TI0E:function(t,n,e){"use strict";e.d(n,"b",(function(){return o}));var r=e("JnD7"),i=e("+ugm");function o(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Object(r.b)(t)):n()._curve},t}n.a=function(){return o(Object(i.a)().curve(r.a))}},UwSK:function(t,n,e){"use strict";e.r(n);var r=e("ODXe"),i=e("a3WO");var o=e("BsWD");function c(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=e("1OyB"),a=e("vuIU"),s=e("JX7q"),f=e("Ji7U"),l=e("md7G"),h=e("foSv"),p=e("rePB"),d=e("q1tI"),b=e.n(d),y=e("TI0E"),v=e("qE0H"),O=e("3Ttg"),g=e("LvDl"),_=e("PyG4"),j=e("H/gs"),m=b.a.createElement;function x(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function w(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(h.a)(t);if(n){var i=Object(h.a)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return Object(l.a)(this,e)}}var S=function(t){return t*(Math.PI/180)},P=function(t){var n=0,e=0;return t.forEach((function(t){var r=t.angle,i=t.weight;n+=Math.cos(S(r))*i,e+=Math.sin(S(r))*i})),Math.atan2(e,n)*(180/Math.PI)};n.default=Object(j.default)(function(t){Object(f.a)(e,t);var n=w(e);function e(){var t;Object(u.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=n.call.apply(n,[this].concat(i)),Object(p.a)(Object(s.a)(t),"state",{activeNeuron:null}),Object(p.a)(Object(s.a)(t),"onHighlightNeuron",Object(g.debounce)((function(n){t.setState({activeNeuron:n}),t.props.onActivateNeuron&&t.props.onActivateNeuron(n)}),130,!0)),t}return Object(a.a)(e,[{key:"render",value:function(){var t=this,n=this.state.activeNeuron,e=this.props,i=e.layer,o=e.neurons,u=e.responsesByNeuron,a=e.fillOpacity,s=void 0===a?.85:a,f=e.neuronPadding,l=void 0===f?5:f,h=e.size,d=e.model,b=void 0===d?"inceptionv1":d,j=e.orientationType,w=void 0===j?"max":j,M=e.neuronSize,E=void 0===M?60:M,D=o.reduce((function(t,n){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?x(Object(e),!0).forEach((function(n){Object(p.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t,Object(p.a)({},n,function(t){var n=u[t];return"max"===w?n.indexOf(Object(g.max)(n))/2:P(n.map((function(t,n){return{angle:n/2,weight:t}})))}(n)))}),{}),k=Object(g.max)(Object(g.flatten)(o.map((function(t){return u[t]})))),T=h/3.5,I=.3*T,A=o.map((function(e){var i=u[e].map((function(n,e){return[S(e/2)-Math.PI/2,I+Math.pow(n/(t.props.maxValue||k),1)*T*1]}));(i=[].concat(c(i),c(i.map((function(t){var n=Object(r.a)(t,2),e=n[0],i=n[1];return[e+Math.PI,i]}))))).push(i[0]);var o="hsl(".concat(D[e],", 96%, 30%)"),a="hsla(".concat(D[e],", 66%, 60%, ").concat(s,")");return m("path",{key:e,d:Object(y.a)().curve(v.a)(i),fill:a,onMouseEnter:function(){return t.onHighlightNeuron(e)},onMouseLeave:function(){return t.onHighlightNeuron(null)},stroke:o,strokeWidth:1,transform:"translate(".concat(h/2,",").concat(h/2,")"),style:{opacity:n?n===e?1:0:1,transition:"700ms ease-out all"}})})),N=h/2;return m("div",{key:1,style:{marginTop:30,width:h,height:h,position:"relative",borderRadius:h,border:"1px dashed rgba(0, 0, 0, 0.3)"}},m("svg",{key:1,width:h,height:h,style:{transform:"scaleX(-1)",position:"absolute",zIndex:10}},A),m("div",{style:{background:"rgb(247,249,252)",border:"1px solid rgba(0, 0, 0, .5)",width:2*I,height:2*I,zIndex:100,borderRadius:I,position:"absolute",left:h/2-I,top:h/2-I}}),m("div",{style:{position:"absolute",left:0,right:0,borderBottom:"1px dashed rgba(0, 0, 0, 0.3)",height:1,top:h/2-1,zIndex:5}}),m("div",{style:{position:"absolute",top:0,bottom:0,borderRight:"1px dashed rgba(0, 0, 0, 0.3)",width:1,left:h/2-1,zIndex:5}}),o.map((function(e){return m(O.a,{position:"absolute",left:h/2+Math.cos(S(D[e]))*N-E/2,top:h/2-Math.sin(S(D[e]))*N-E/2,zIndex:10},m(O.c,{src:Object(_.a)(b,i,e),size:E,padding:l,onMouseEnter:function(){return t.onHighlightNeuron(e)},onMouseLeave:function(){return t.onHighlightNeuron(null)},style:{borderRadius:E,opacity:n?n===e?1:.2:1,border:"3px solid ".concat("hsla(".concat(D[e],", 96%, 30%, 0.4)")),transition:"700ms ease-out all"}}))})))}}]),e}(b.a.Component))},YuTi:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},a3WO:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))},eygk:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/curveFamilies/radialLayer/radialHalf",function(){return e("UwSK")}])},foSv:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return r}))},md7G:function(t,n,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(n,"a",(function(){return o}));var i=e("JX7q");function o(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?Object(i.a)(t):n}},qE0H:function(t,n,e){"use strict";function r(t){this._context=t}function i(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),c=new Array(r);for(i[0]=0,o[0]=2,c[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,c[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,c[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,c[n]-=e*c[n-1];for(i[r-1]=c[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(c[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=i(t),o=i(n),c=0,u=1;u<e;++c,++u)this._context.bezierCurveTo(r[0][c],o[0][c],r[1][c],o[1][c],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},n.a=function(t){return new r(t)}},rePB:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))},vuIU:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return i}))},wx14:function(t,n,e){"use strict";function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}e.d(n,"a",(function(){return r}))},yLpj:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e}},[["eygk",0,1,2,3]]]);