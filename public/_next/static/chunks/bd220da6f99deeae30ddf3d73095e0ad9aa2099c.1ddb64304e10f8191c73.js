(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+ugm":function(t,n,e){"use strict";var i=e("6txh"),r=e("2K37"),o=e("SDD1"),c=e("/aQN");n.a=function(){var t=c.a,n=c.b,e=Object(r.a)(!0),a=null,u=o.a,s=null;function f(r){var o,c,f,h=r.length,l=!1;for(null==a&&(s=u(f=Object(i.a)())),o=0;o<=h;++o)!(o<h&&e(c=r[o],o,r))===l&&((l=!l)?s.lineStart():s.lineEnd()),l&&s.point(+t(c,o,r),+n(c,o,r));if(f)return s=null,f+""||null}return f.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(r.a)(+n),f):t},f.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(r.a)(+t),f):n},f.defined=function(t){return arguments.length?(e="function"===typeof t?t:Object(r.a)(!!t),f):e},f.curve=function(t){return arguments.length?(u=t,null!=a&&(s=u(a)),f):u},f.context=function(t){return arguments.length?(null==t?a=s=null:s=u(a=t),f):a},f}},"/aQN":function(t,n,e){"use strict";function i(t){return t[0]}function r(t){return t[1]}e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r}))},"2K37":function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},"3Ttg":function(t,n,e){"use strict";e.d(n,"a",(function(){return _})),e.d(n,"c",(function(){return O})),e.d(n,"b",(function(){return x}));var i=e("wx14"),r=e("Ff2n"),o=e("1OyB"),c=e("vuIU"),a=e("JX7q"),u=e("Ji7U"),s=e("md7G"),f=e("foSv"),h=e("rePB"),l=e("LvDl"),d=e("q1tI"),p=e.n(d),b=p.a.createElement;function y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?y(Object(e),!0).forEach((function(n){Object(h.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function g(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=Object(f.a)(t);if(n){var r=Object(f.a)(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return Object(s.a)(this,e)}}var _=function(t){Object(u.a)(e,t);var n=g(e);function e(){var t;Object(o.a)(this,e);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return t=n.call.apply(n,[this].concat(r)),Object(h.a)(Object(a.a)(t),"state",{isHovering:!1}),t}return Object(c.a)(e,[{key:"render",value:function(){var t=this,n=this.state.isHovering,e=this.props,o=e.children,c=e.id,a=e.onClick,u=e._key,s=Object(r.a)(e,["children","id","onClick","_key"]),f=Object(l.isFunction)(o)?{onMouseEnter:function(n){t.setState({isHovering:!0}),t.props.onMouseEnter&&t.props.onMouseEnter(n)},onMouseLeave:function(n){t.setState({isHovering:!1}),t.props.onMouseLeae&&t.props.onMouseLeave(n)}}:{};s.marginY&&(s.marginTop=s.marginY,s.marginBottom=s.marginY,delete s.marginY),s.paddingY&&(s.paddingTop=s.paddingY,s.paddingBottom=s.paddingY,delete s.paddingY),s.marginX&&(s.marginLeft=s.marginX,s.marginRight=s.marginX,delete s.marginX),s.paddingX&&(s.paddingLeft=s.paddingX,s.paddingRight=s.paddingX,delete s.paddingX);var h={id:c,key:u,onClick:a};return b("div",Object(i.a)({},h,{style:v({display:"flex",flexFlow:"column",boxSizing:"border-box"},s)},f),Object(l.isFunction)(o)?o(n):o)}}]),e}(p.a.Component),O=function(t){var n=t.src,e=t.size,o=t.padding,c=t.style,a=Object(r.a)(t,["src","size","padding","style"]);return o||((n.indexOf("conv2d2")>-1||n.indexOf("conv2d1")>-1||n.indexOf("conv2d0"))&&(o=0),(n.indexOf("mixed3a")>-1||n.indexOf("mixed3b")>-1)&&(o=0),(n.indexOf("mixed4a")>-1||n.indexOf("mixed4b")>-1||n.indexOf("mixed4c")>-1)&&(o=0)),b("div",Object(i.a)({style:Object.assign({},{width:e,height:e,overflow:"hidden",borderRadius:5,position:"relative"},c)},a),b("img",{src:n,width:e+2*o,height:e+2*o,style:{position:"absolute",left:-o,top:-o}}))},x=function(t){var n=t.size,e=t.children,o=Object(r.a)(t,["size","children"]);if(n){o=v({},o,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[n]||{})}return b(_,Object(i.a)({color:"black",display:"inline-block"},o),e)}},"6txh":function(t,n,e){"use strict";var i=Math.PI,r=2*i,o=r-1e-6;function c(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function a(){return new c}c.prototype=a.prototype={constructor:c,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,i){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+i)},bezierCurveTo:function(t,n,e,i,r,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +i+","+(this._x1=+r)+","+(this._y1=+o)},arcTo:function(t,n,e,r,o){t=+t,n=+n,e=+e,r=+r,o=+o;var c=this._x1,a=this._y1,u=e-t,s=r-n,f=c-t,h=a-n,l=f*f+h*h;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(h*u-s*f)>1e-6&&o){var d=e-c,p=r-a,b=u*u+s*s,y=d*d+p*p,v=Math.sqrt(b),g=Math.sqrt(l),_=o*Math.tan((i-Math.acos((b+l-y)/(2*v*g)))/2),O=_/g,x=_/v;Math.abs(O-1)>1e-6&&(this._+="L"+(t+O*f)+","+(n+O*h)),this._+="A"+o+","+o+",0,0,"+ +(h*d>f*p)+","+(this._x1=t+x*u)+","+(this._y1=n+x*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,c,a,u){t=+t,n=+n,u=!!u;var s=(e=+e)*Math.cos(c),f=e*Math.sin(c),h=t+s,l=n+f,d=1^u,p=u?c-a:a-c;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+h+","+l:(Math.abs(this._x1-h)>1e-6||Math.abs(this._y1-l)>1e-6)&&(this._+="L"+h+","+l),e&&(p<0&&(p=p%r+r),p>o?this._+="A"+e+","+e+",0,1,"+d+","+(t-s)+","+(n-f)+"A"+e+","+e+",0,1,"+d+","+(this._x1=h)+","+(this._y1=l):p>1e-6&&(this._+="A"+e+","+e+",0,"+ +(p>=i)+","+d+","+(this._x1=t+e*Math.cos(a))+","+(this._y1=n+e*Math.sin(a))))},rect:function(t,n,e,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +i+"h"+-e+"Z"},toString:function(){return this._}},n.a=a},BsWD:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("a3WO");function r(t,n){if(t){if("string"===typeof t)return Object(i.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(i.a)(t,n):void 0}}},Jm8C:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return j}));e("ODXe");var i=e("1OyB"),r=e("vuIU"),o=e("JX7q"),c=e("Ji7U"),a=e("md7G"),u=e("foSv"),s=e("rePB"),f=e("q1tI"),h=e.n(f),l=e("TI0E"),d=e("qE0H"),p=e("3Ttg"),b=e("LvDl"),y=e("PyG4"),v=h.a.createElement;function g(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function _(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=Object(u.a)(t);if(n){var r=Object(u.a)(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return Object(a.a)(this,e)}}var O=function(t){return t*(Math.PI/180)},x=function(t){var n=0,e=0;return t.forEach((function(t){var i=t.angle,r=t.weight;n+=Math.cos(O(i))*r,e+=Math.sin(O(i))*r})),Math.atan2(e,n)*(180/Math.PI)},j=function(t){Object(c.a)(e,t);var n=_(e);function e(){var t;Object(i.a)(this,e);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return t=n.call.apply(n,[this].concat(c)),Object(s.a)(Object(o.a)(t),"state",{activeNeuron:null}),Object(s.a)(Object(o.a)(t),"onHighlightNeuron",Object(b.debounce)((function(n){t.setState({activeNeuron:n}),t.props.onActivateNeuron&&t.props.onActivateNeuron(n)}),130,!0)),t}return Object(r.a)(e,[{key:"render",value:function(){var t=this;var n=this.state.activeNeuron,e=this.props,i=e.layer,r=e.neurons,o=void 0===r?[]:r,c=e.responsesByNeuron,a=e.fillOpacity,u=void 0===a?.85:a,f=(e.neuronPadding,e.size),h=e.model,_=void 0===h?"inceptionv1":h,j=e.orientationType,m=void 0===j?"max":j,w=(e.fixedMax,e.neuronSize),M=void 0===w?60:w,S=o.reduce((function(t,n){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?g(Object(e),!0).forEach((function(n){Object(s.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t,Object(s.a)({},n,function(t){var n=c[t];return"max"===m?n.indexOf(Object(b.max)(n))/2:x(n.map((function(t,n){return{angle:n/2,weight:t}})))}(n)))}),{}),P=Object(b.max)(Object(b.flatten)(o.map((function(t){return c[t]})))),D=f/3.5,E=.3*D,k=o.map((function(e){var i=c[e].map((function(n,e){return[O(e/2)+Math.PI/2,E+Math.pow(n/(t.props.fixedMax||P),1)*D*1]}));i.push(i[0]);var r="hsl(".concat(S[e],", 96%, 30%)"),o="hsla(".concat(S[e],", 66%, 60%, ").concat(u,")"),a=Object(l.a)().curve(d.a)(i);return v("path",{key:e,d:a,fill:o,onMouseEnter:function(){return t.onHighlightNeuron(e)},onMouseLeave:function(){return t.onHighlightNeuron(null)},stroke:r,strokeWidth:1,transform:"translate(".concat(f/2,",").concat(f/2,")"),style:{opacity:n?n===e?1:0:1,transition:"700ms ease-out all"}})})),T=f/2;return v("div",{key:1,style:{marginTop:30,marginBottom:30,width:f,height:f,position:"relative",borderRadius:f,border:"1px dashed rgba(0, 0, 0, 0.3)"}},v("svg",{key:1,width:f,height:f,style:{position:"absolute",zIndex:10}},k),v("div",{style:{background:"rgb(247,249,252)",border:"1px solid rgba(0, 0, 0, .5)",width:2*E,height:2*E,zIndex:100,borderRadius:E,position:"absolute",left:f/2-E,top:f/2-E}}),o.map((function(e){return v(p.a,{position:"absolute",key:e,left:f/2+Math.cos(O(S[e]))*T-M/2,top:f/2+Math.sin(O(S[e]))*T-M/2,zIndex:10},v("a",{href:"https://microscope.openai.com/models/inceptionv1/".concat(i,"_0/").concat(e),style:{borderBottom:"none"},target:"_blank"},v("img",{src:Object(y.a)(_,i,e),width:M,onMouseEnter:function(){return t.onHighlightNeuron(e)},onMouseLeave:function(){return t.onHighlightNeuron(null)},style:{borderRadius:M,opacity:n?n===e?1:.2:1,border:"3px solid ".concat("hsla(".concat(S[e],", 96%, 30%, 0.4)")),transition:"700ms ease-out all"}})))})),v("div",{style:{position:"absolute",left:0,right:0,borderBottom:"1px dashed rgba(0, 0, 0, 0.3)",height:1,top:f/2-1,zIndex:5}}),v("div",{style:{position:"absolute",top:0,bottom:0,background:"rgba(0, 0, 0, 0.1)",borderRight:"1px dashed rgba(0, 0, 0, 0.3)",width:1,left:f/2-1,zIndex:5}}))}}]),e}(h.a.Component)},JnD7:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));var i=o(e("SDD1").a);function r(t){this._curve=t}function o(t){function n(n){return new r(t(n))}return n._curve=t,n}r.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}},ODXe:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("BsWD");function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],i=!0,r=!1,o=void 0;try{for(var c,a=t[Symbol.iterator]();!(i=(c=a.next()).done)&&(e.push(c.value),!n||e.length!==n);i=!0);}catch(u){r=!0,o=u}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return e}}(t,n)||Object(i.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},PyG4:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));e("ODXe");var i=e("LvDl"),r=function(t,n,e){var r="jpg";return Object(i.includes)(["conv2d0","conv2d1","conv2d2"],n)&&(r="png"),"https://distill.pub/2020/circuits/early-vision/images/neuron/".concat(n,"_").concat(e,".").concat(r)}},SDD1:function(t,n,e){"use strict";function i(t){this._context=t}i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}},n.a=function(t){return new i(t)}},TI0E:function(t,n,e){"use strict";e.d(n,"b",(function(){return o}));var i=e("JnD7"),r=e("+ugm");function o(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Object(i.b)(t)):n()._curve},t}n.a=function(){return o(Object(r.a)().curve(i.a))}},YuTi:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},a3WO:function(t,n,e){"use strict";function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}e.d(n,"a",(function(){return i}))},qE0H:function(t,n,e){"use strict";function i(t){this._context=t}function r(t){var n,e,i=t.length-1,r=new Array(i),o=new Array(i),c=new Array(i);for(r[0]=0,o[0]=2,c[0]=t[0]+2*t[1],n=1;n<i-1;++n)r[n]=1,o[n]=4,c[n]=4*t[n]+2*t[n+1];for(r[i-1]=2,o[i-1]=7,c[i-1]=8*t[i-1]+t[i],n=1;n<i;++n)e=r[n]/o[n-1],o[n]-=e,c[n]-=e*c[n-1];for(r[i-1]=c[i-1]/o[i-1],n=i-2;n>=0;--n)r[n]=(c[n]-r[n+1])/o[n];for(o[i-1]=(t[i]+r[i-1])/2,n=0;n<i-1;++n)o[n]=2*t[n+1]-r[n+1];return[r,o]}i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var i=r(t),o=r(n),c=0,a=1;a<e;++c,++a)this._context.bezierCurveTo(i[0][c],o[0][c],i[1][c],o[1][c],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},n.a=function(t){return new i(t)}},yLpj:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(i){"object"===typeof window&&(e=window)}t.exports=e}}]);