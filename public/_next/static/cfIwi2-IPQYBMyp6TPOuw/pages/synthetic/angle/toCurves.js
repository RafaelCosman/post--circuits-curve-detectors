(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"1OyB":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))},"3Ttg":function(t,e,n){"use strict";n.d(e,"a",(function(){return D})),n.d(e,"c",(function(){return y})),n.d(e,"b",(function(){return w}));var i=n("wx14"),r=n("Ff2n"),o=n("1OyB"),c=n("vuIU"),u=n("JX7q"),a=n("Ji7U"),g=n("md7G"),s=n("foSv"),M=n("rePB"),f=n("LvDl"),l=n("q1tI"),A=n.n(l),d=A.a.createElement;function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){Object(M.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=Object(s.a)(t);if(e){var r=Object(s.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(g.a)(this,n)}}var D=function(t){Object(a.a)(n,t);var e=p(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(M.a)(Object(u.a)(t),"state",{isHovering:!1}),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isHovering,n=this.props,o=n.children,c=n.id,u=n.onClick,a=n._key,g=Object(r.a)(n,["children","id","onClick","_key"]),s=Object(f.isFunction)(o)?{onMouseEnter:function(e){t.setState({isHovering:!0}),t.props.onMouseEnter&&t.props.onMouseEnter(e)},onMouseLeave:function(e){t.setState({isHovering:!1}),t.props.onMouseLeae&&t.props.onMouseLeave(e)}}:{};g.marginY&&(g.marginTop=g.marginY,g.marginBottom=g.marginY,delete g.marginY),g.paddingY&&(g.paddingTop=g.paddingY,g.paddingBottom=g.paddingY,delete g.paddingY),g.marginX&&(g.marginLeft=g.marginX,g.marginRight=g.marginX,delete g.marginX),g.paddingX&&(g.paddingLeft=g.paddingX,g.paddingRight=g.paddingX,delete g.paddingX);var M={id:c,key:a,onClick:u};return d("div",Object(i.a)({},M,{style:j({display:"flex",flexFlow:"column",boxSizing:"border-box"},g)},s),Object(f.isFunction)(o)?o(e):o)}}]),n}(A.a.Component),y=function(t){var e=t.src,n=t.size,o=t.padding,c=t.style,u=Object(r.a)(t,["src","size","padding","style"]);return o||((e.indexOf("conv2d2")>-1||e.indexOf("conv2d1")>-1||e.indexOf("conv2d0"))&&(o=0),(e.indexOf("mixed3a")>-1||e.indexOf("mixed3b")>-1)&&(o=0),(e.indexOf("mixed4a")>-1||e.indexOf("mixed4b")>-1||e.indexOf("mixed4c")>-1)&&(o=0)),d("div",Object(i.a)({style:Object.assign({},{width:n,height:n,overflow:"hidden",borderRadius:5,position:"relative"},c)},u),d("img",{src:e,width:n+2*o,height:n+2*o,style:{position:"absolute",left:-o,top:-o}}))},w=function(t){var e=t.size,n=t.children,o=Object(r.a)(t,["size","children"]);if(e){o=j({},o,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[e]||{})}return d(D,Object(i.a)({color:"black",display:"inline-block"},o),n)}},"4nex":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMjQgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb2xhYiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEuOTc3LDExLjc3IEMtMC42OSw5LjQ5MyAtMC42MjgsNC42OTEgMS45NzcsMi40MTMgQzIuOTE5LDMuMDU3IDMuNTIyLDQuMDc1IDQuNDksNC42OTEgQzMuMzM4LDYuMjkxIDMuMzQ0LDcuODkyIDQuNDg2LDkuNDk0IEMzLjUyMiwxMC4xMTEgMi45MTgsMTEuMTI2IDEuOTc3LDExLjc3IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZEQkExOCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTIuMjU3LDEyLjExNCBDMTAuNDksMTAuNDgxIDkuNzcyLDguNDU2IDEwLjEzOSw2LjA5NCBDMTAuNTksMy4xODQgMTIuMjc4LDEuMjAxIDE1LjA4NSwwLjQxNiBDMTcuNjUsLTAuMzAyIDIwLjA0OSwwLjE5OSAyMS45NjMsMi4yMzUgQzIxLjA3OSwyLjk3OCAyMC4yNTYsMy43ODIgMTkuNTI5LDQuNjgxIEMxOC40ODgsMy44MjcgMTcuMzE5LDMuNDM1IDE2LDMuODU2IEMxMy41OTYsNC42MjMgMTIuOTU0LDcuMDk3IDE0LjUwNiw5LjUgQzE0LjI2NSw5Ljc3NSAxNC4wMTMsMTAuMDQxIDEzLjc4NSwxMC4zMjYgQzEzLjI5NSwxMC45MzkgMTIuNTExLDExLjMgMTIuMjU3LDEyLjExNCBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGQ0Q5M0QiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE5LjUyOSw0LjY4MiBDMjAuMjU2LDMuNzgzIDIxLjA3OSwyLjk3OSAyMS45NjMsMi4yMzYgQzI0LjY2Niw1LjAxOSAyNC42NjQsOS4yNjcgMjEuOTU4LDEyIEMxOS4zMSwxNC42NzQgMTUuMDIyLDE0LjcyNSAxMi4yNTcsMTIuMTE1IEMxMi41MTEsMTEuMzAxIDEzLjI5NSwxMC45NCAxMy43ODUsMTAuMzI3IEMxNC4wMTMsMTAuMDQyIDE0LjI2NSw5Ljc3NSAxNC41MDYsOS41MDEgQzE1LjU1OSwxMC40MTcgMTYuNzYsMTAuNzY5IDE4LjEwNiwxMC4zMzEgQzIwLjUwMiw5LjU1MSAyMS4xNTEsNi45MjcgMTkuNTI5LDQuNjgyIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZEQkExOCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNC40OSw0LjY5MSBDMy41MjIsNC4wNzUgMi45MTksMy4wNTcgMS45NzcsMi40MTMgQzQuMTg2LDAuMDE1IDcuNjk4LC0wLjUyOSAxMC40NTMsMS4wNTggQzExLjAwOCwxLjM3OCAxMS4xNzIsMS42NjQgMTAuNzM4LDIuMTg2IEMxMC41ODEsMi4zNzQgMTAuNDgsMi42MDggMTAuMzQ3LDIuODE3IEMxMC4wNDgsMy4yODcgOS44MzgsMy44ODQgOS40MTgsNC4xODggQzguOTMzLDQuNTM5IDguNTIzLDMuODQ3IDguMDIxLDMuNzQ2IEM2LjY3MywzLjQ3NSA1LjUwOSwzLjc4NyA0LjQ5LDQuNjkxIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZDRDkzRCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMS45NzcsMTEuNzcgQzIuOTE4LDExLjEyNiAzLjUyMiwxMC4xMTEgNC40ODYsOS40OTMgQzUuODU5LDEwLjY0NSA3LjMzNiwxMC45MjYgOC45MzYsOS45OTIgQzkuMjY4LDkuNzk4IDkuNDM5LDkuOTA0IDkuNjA5LDEwLjE4MiBDOS45OTUsMTAuODE3IDEwLjM2MiwxMS40NjcgMTAuNzksMTIuMDcyIEMxMS4xMywxMi41NTIgMTEuMDEyLDEyLjc4NyAxMC41MzcsMTMuMDc4IEM3Ljg0LDE0LjczIDQuMjA1LDE0LjE4OCAxLjk3NywxMS43NyBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGQ0Q5M0QiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},"6bDA":function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),r=n.n(i),o=n("3Ttg"),c=n("UB8a"),u=n("ilYS"),a=r.a.createElement;e.default=function(){return a(o.a,{gridColumn:"screen",marginY:40,alignItems:"center"},a(o.a,{width:703,marginBottom:5},a(o.a,{alignSelf:"flex-end"},a(u.default,null))),a(o.a,{paddingX:10},a("img",{src:n("QXkC"),width:"100%"})),a(o.a,{alignSelf:"center",flexFlow:"row",transform:"translateX(147px)"},a("figcaption",{style:{width:703,marginTop:10}},'We transition from angles on the left to curves on the right, making the stimuli rounder at each step. Each step we see the maximum activation for each neuron increase, and the activation "triangle" fill in as the two lines forming the original angle becomes a single arc.'),a(o.a,{marginTop:10,marginLeft:20},a(c.a,{href:"https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=IsP6LNwK__da&line=1&uniqifier=1"}))))}},"8lnk":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAAyCAIAAAD9fhrKAAAAA3NCSVQICAjb4U/gAAAAX3pUWHRSYXcgcHJvZmlsZSB0eXBlIEFQUDEAAAiZ40pPzUstykxWKCjKT8vMSeVSAANjEy4TSxNLo0QDAwMLAwgwNDAwNgSSRkC2OVQo0QAFmJibpQGhuVmymSmIzwUAT7oVaBst2IwAAAJmSURBVHic7dTRjew4EENRsuSOYCN5CWz+SXVxPyS1HzaDAu7BwKClstvQAPSff/51fVyP6uN6XB/5cX1Uz1/r5XrkPfCoHvtR1e9Wteyl+tilWlqPveSlKtdSPa5SPXelVGdXXiq76uYd6o7trBNslVWVG2TfRctOWZbqhJRUjpWTFadPUCqpxPv63vZZVJxU38UdWjufrY4TJ+5Uy31zzm21HLmjsyJHJ7T0y3G1FDlWV7UcK+VWtdV2yl1qO3bffMJ79feX11npUi99z+LeVS/1usNrD2vvfpeyH9mh7m6pl7LUPgNdOySlfah7JRV5j0WldlJS7RPdISrJ2bd7SxU577X03joqqVqWa5/ZWbRPdrWsfdiq+D7oPayo2rpvu09J/f6Ez39Abqnz5sSREne0Z+6AOr5BZzc37/XWHj7XJCfnjuW+Id35jXXUSrdaN+9nk/N3vmE/lVa6Eyk6AzkP7ueUdGsPdCdJoj1zwh3IGfh/bimtnK94d98D6HMA+X31nTwfm/ec9m/1Xyf3e8M36vicpdTR9w0uAcAQFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AYFBaAMSgsAGNQWADGoLAAjEFhARiDwgIwBoUFYAwKC8AY/wGpbuP1OXacNwAAAABJRU5ErkJggg=="},D4AM:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/synthetic/angle/toCurves",function(){return n("6bDA")}])},Ff2n:function(t,e,n){"use strict";function i(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return i}))},JX7q:function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return i}))},Ji7U:function(t,e,n){"use strict";function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}n.d(e,"a",(function(){return r}))},QXkC:function(t,e){t.exports=".//_next/static/images/figure-c0219df7646daa4dfdae66630c9d97fa.png"},Qetd:function(t,e,n){"use strict";var i=Object.assign.bind(Object);t.exports=i,t.exports.default=t.exports},UB8a:function(t,e,n){"use strict";var i=n("wx14"),r=n("Ff2n"),o=n("q1tI"),c=n.n(o),u=n("3Ttg"),a=c.a.createElement;e.a=function(t){var e=t.href,o=Object(r.a)(t,["href"]);return a(u.a,Object(i.a)({background:"rgba(255, 255, 255, 0.75)",paddingX:6,paddingY:1,borderRadius:4,fontSize:11,color:"#aaa",fontWeight:300,border:"solid 1px rgba(0, 0, 0, 0.08)",borderBottomColor:"rgba(0, 0, 0, 0.15)",textTransform:"uppercase",display:"inline-block"},o,{cursor:"pointer",onClick:function(){return window.open(e,"_blank")}}),"Reproduce in a"," ",a("img",{style:{transform:"translateY(3px)"},src:n("4nex")})," ","Notebook")}},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},foSv:function(t,e,n){"use strict";function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return i}))},ilYS:function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),r=n.n(i),o=n("3Ttg"),c=r.a.createElement;e.default=function(){return c(o.a,{flexFlow:"row",marginLeft:10},c(o.b,{marginRight:5,fontWeight:600},"0\u03c3"),c(o.a,{alignItems:"center"},c("img",{style:{borderRadius:5,marginTop:1},width:140,src:n("8lnk")}),c(o.b,{fontSize:14},"Standard Deviations")),c(o.b,{marginLeft:5,fontWeight:600},"25\u03c3"))}},md7G:function(t,e,n){"use strict";function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var r=n("JX7q");function o(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?Object(r.a)(t):e}},rePB:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},vuIU:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,"a",(function(){return r}))},wx14:function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return i}))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n}},[["D4AM",0,1,2]]]);