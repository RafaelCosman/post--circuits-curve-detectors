(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"3Ttg":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return w}));var r=n("wx14"),i=n("Ff2n"),o=n("1OyB"),c=n("vuIU"),u=n("JX7q"),a=n("Ji7U"),s=n("md7G"),g=n("foSv"),l=n("rePB"),M=n("LvDl"),f=n("q1tI"),d=n.n(f),p=d.a.createElement;function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(g.a)(e);if(t){var i=Object(g.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var b=function(e){Object(a.a)(n,e);var t=y(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),Object(l.a)(Object(u.a)(e),"state",{isHovering:!1}),e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isHovering,n=this.props,o=n.children,c=n.id,u=n.onClick,a=n._key,s=Object(i.a)(n,["children","id","onClick","_key"]),g=Object(M.isFunction)(o)?{onMouseEnter:function(t){e.setState({isHovering:!0}),e.props.onMouseEnter&&e.props.onMouseEnter(t)},onMouseLeave:function(t){e.setState({isHovering:!1}),e.props.onMouseLeae&&e.props.onMouseLeave(t)}}:{};s.marginY&&(s.marginTop=s.marginY,s.marginBottom=s.marginY,delete s.marginY),s.paddingY&&(s.paddingTop=s.paddingY,s.paddingBottom=s.paddingY,delete s.paddingY),s.marginX&&(s.marginLeft=s.marginX,s.marginRight=s.marginX,delete s.marginX),s.paddingX&&(s.paddingLeft=s.paddingX,s.paddingRight=s.paddingX,delete s.paddingX);var l={id:c,key:a,onClick:u};return p("div",Object(r.a)({},l,{style:I({display:"flex",flexFlow:"column",boxSizing:"border-box"},s)},g),Object(M.isFunction)(o)?o(t):o)}}]),n}(d.a.Component),O=function(e){var t=e.src,n=e.size,o=e.padding,c=e.style,u=Object(i.a)(e,["src","size","padding","style"]);return o||((t.indexOf("conv2d2")>-1||t.indexOf("conv2d1")>-1||t.indexOf("conv2d0"))&&(o=0),(t.indexOf("mixed3a")>-1||t.indexOf("mixed3b")>-1)&&(o=0),(t.indexOf("mixed4a")>-1||t.indexOf("mixed4b")>-1||t.indexOf("mixed4c")>-1)&&(o=0)),p("div",Object(r.a)({style:Object.assign({},{width:n,height:n,overflow:"hidden",borderRadius:5,position:"relative"},c)},u),p("img",{src:t,width:n+2*o,height:n+2*o,style:{position:"absolute",left:-o,top:-o}}))},w=function(e){var t=e.size,n=e.children,o=Object(i.a)(e,["size","children"]);if(t){o=I({},o,{},{400:{fontSize:14,fontWeight:600},500:{fontSize:16,fontWeight:500},600:{fontSize:20,fontWeight:500}}[t]||{})}return p(b,Object(r.a)({color:"black",display:"inline-block"},o),n)}},"4nex":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMjQgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb2xhYiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEuOTc3LDExLjc3IEMtMC42OSw5LjQ5MyAtMC42MjgsNC42OTEgMS45NzcsMi40MTMgQzIuOTE5LDMuMDU3IDMuNTIyLDQuMDc1IDQuNDksNC42OTEgQzMuMzM4LDYuMjkxIDMuMzQ0LDcuODkyIDQuNDg2LDkuNDk0IEMzLjUyMiwxMC4xMTEgMi45MTgsMTEuMTI2IDEuOTc3LDExLjc3IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZEQkExOCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTIuMjU3LDEyLjExNCBDMTAuNDksMTAuNDgxIDkuNzcyLDguNDU2IDEwLjEzOSw2LjA5NCBDMTAuNTksMy4xODQgMTIuMjc4LDEuMjAxIDE1LjA4NSwwLjQxNiBDMTcuNjUsLTAuMzAyIDIwLjA0OSwwLjE5OSAyMS45NjMsMi4yMzUgQzIxLjA3OSwyLjk3OCAyMC4yNTYsMy43ODIgMTkuNTI5LDQuNjgxIEMxOC40ODgsMy44MjcgMTcuMzE5LDMuNDM1IDE2LDMuODU2IEMxMy41OTYsNC42MjMgMTIuOTU0LDcuMDk3IDE0LjUwNiw5LjUgQzE0LjI2NSw5Ljc3NSAxNC4wMTMsMTAuMDQxIDEzLjc4NSwxMC4zMjYgQzEzLjI5NSwxMC45MzkgMTIuNTExLDExLjMgMTIuMjU3LDEyLjExNCBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGQ0Q5M0QiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE5LjUyOSw0LjY4MiBDMjAuMjU2LDMuNzgzIDIxLjA3OSwyLjk3OSAyMS45NjMsMi4yMzYgQzI0LjY2Niw1LjAxOSAyNC42NjQsOS4yNjcgMjEuOTU4LDEyIEMxOS4zMSwxNC42NzQgMTUuMDIyLDE0LjcyNSAxMi4yNTcsMTIuMTE1IEMxMi41MTEsMTEuMzAxIDEzLjI5NSwxMC45NCAxMy43ODUsMTAuMzI3IEMxNC4wMTMsMTAuMDQyIDE0LjI2NSw5Ljc3NSAxNC41MDYsOS41MDEgQzE1LjU1OSwxMC40MTcgMTYuNzYsMTAuNzY5IDE4LjEwNiwxMC4zMzEgQzIwLjUwMiw5LjU1MSAyMS4xNTEsNi45MjcgMTkuNTI5LDQuNjgyIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZEQkExOCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNC40OSw0LjY5MSBDMy41MjIsNC4wNzUgMi45MTksMy4wNTcgMS45NzcsMi40MTMgQzQuMTg2LDAuMDE1IDcuNjk4LC0wLjUyOSAxMC40NTMsMS4wNTggQzExLjAwOCwxLjM3OCAxMS4xNzIsMS42NjQgMTAuNzM4LDIuMTg2IEMxMC41ODEsMi4zNzQgMTAuNDgsMi42MDggMTAuMzQ3LDIuODE3IEMxMC4wNDgsMy4yODcgOS44MzgsMy44ODQgOS40MTgsNC4xODggQzguOTMzLDQuNTM5IDguNTIzLDMuODQ3IDguMDIxLDMuNzQ2IEM2LjY3MywzLjQ3NSA1LjUwOSwzLjc4NyA0LjQ5LDQuNjkxIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZDRDkzRCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMS45NzcsMTEuNzcgQzIuOTE4LDExLjEyNiAzLjUyMiwxMC4xMTEgNC40ODYsOS40OTMgQzUuODU5LDEwLjY0NSA3LjMzNiwxMC45MjYgOC45MzYsOS45OTIgQzkuMjY4LDkuNzk4IDkuNDM5LDkuOTA0IDkuNjA5LDEwLjE4MiBDOS45OTUsMTAuODE3IDEwLjM2MiwxMS40NjcgMTAuNzksMTIuMDcyIEMxMS4xMywxMi41NTIgMTEuMDEyLDEyLjc4NyAxMC41MzcsMTMuMDc4IEM3Ljg0LDE0LjczIDQuMjA1LDE0LjE4OCAxLjk3NywxMS43NyBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGQ0Q5M0QiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"a",(function(){return r}))},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return i}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},UB8a:function(e,t,n){"use strict";var r=n("wx14"),i=n("Ff2n"),o=n("q1tI"),c=n.n(o),u=n("3Ttg"),a=c.a.createElement;t.a=function(e){var t=e.href,o=Object(i.a)(e,["href"]);return a(u.a,Object(r.a)({background:"rgba(255, 255, 255, 0.75)",paddingX:6,paddingY:1,borderRadius:4,fontSize:11,color:"#aaa",fontWeight:300,border:"solid 1px rgba(0, 0, 0, 0.08)",borderBottomColor:"rgba(0, 0, 0, 0.15)",textTransform:"uppercase",display:"inline-block"},o,{cursor:"pointer",onClick:function(){return window.open(t,"_blank")}}),"Reproduce in a"," ",a("img",{style:{transform:"translateY(3px)"},src:n("4nex")})," ","Notebook")}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},cojE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/curveAnalysis/tracing",function(){return n("uFs8")}])},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}));var i=n("JX7q");function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(i.a)(e):t}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},uFs8:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("3Ttg"),c=n("uYk3"),u=n("UB8a"),a=i.a.createElement,s=function(e){var t=e.children;return a(o.b,{marginBottom:10,borderBottom:"1px solid rgba(0, 0, 0, 0.2)",paddingBottom:1,paddingLeft:5,width:"100%",fontSize:16,fontWeight:600},t)},g=function(e){var t=e.name,n=e.header,r=e.children;return a(o.a,{marginX:20,width:500},a(s,null,n),a(o.a,{flexFlow:"row"},a("img",{width:230,height:230,style:{marginRight:10},src:"https://storage.cloud.google.com/clarity--curve-detectors/three_examples/".concat(t,"/source.png")}),a("video",{width:230,height:230,controls:!0,style:{marginLeft:10},poster:"https://storage.cloud.google.com/clarity--curve-detectors/three_examples/".concat(t,"/frame_99.png"),src:"https://storage.cloud.google.com/clarity--curve-detectors/three_examples/".concat(t,"/movie_").concat(t,".mp4")})),a("figcaption",{style:{width:490,marginTop:10,paddingLeft:5,paddingRight:5}},r))};t.default=function(){return a(c.a,null,a(o.a,{alignSelf:"center"},a(o.a,{flexFlow:"row"},a(g,{name:"curve",header:"Occlusion"},"Our splines can trace curves even if they have significant occlusion. Furthermore, we can use attribution to construct complex occlusion rules. For instance, we can strongly penalize our spline for overlapping with a particular object or texture, disincentivizing the spline from connecting visual curves that are occluded by these features."),a(g,{name:"subtleS",header:"Subtle Curve"},"Since curve neurons are robust to a wide variety of natural visual features, our curve tracing algorithm can be applied to subtle curves in images.")),!1),a(o.a,{marginLeft:20,alignSelf:"center",marginTop:20},a(s,null,"Complex Shapes"),a(o.a,{flexFlow:"row",flexWrap:"wrap",width:1043},[5,7,8,9].map((function(e){return a(o.a,{flexFlow:"row",marginX:10,paddingBottom:10},a("img",{width:115,height:115,src:"https://storage.googleapis.com/clarity--curve-detectors/three_examples/crest".concat(e,"_v3/source.png")}),!1,a("video",{width:115,height:115,controls:!0,autoPlay:!0,mute:!0,poster:"https://storage.cloud.google.com/clarity--curve-detectors/three_examples/crest".concat(e,"_v3/frame_99.png"),src:"https://storage.googleapis.com/clarity--curve-detectors/three_examples/crest".concat(e,"_v3/movie_crest").concat(e,"_v3.mp4")}))}))),a(o.a,{alignSelf:"flex-end"},a(u.a,{href:"https://colab.research.google.com/drive/1lnFJ0MjhPzw3J9u-Xhqvn5hjAF9sZ3aY#scrollTo=K5AB2S99PmC5&line=1&uniqifier=1"}))))}},uYk3:function(e,t,n){"use strict";var r=n("wx14"),i=n("Ff2n"),o=n("q1tI"),c=n.n(o),u=n("3Ttg"),a=c.a.createElement;t.a=function(e){var t=e.children,n=e.background,o=void 0===n?"rgb(252, 252, 252)":n,c=(e.fullWidth,e.margin,e.banner),s=void 0!==c&&c,g=Object(i.a)(e,["children","background","fullWidth","margin","banner"]);return a(u.a,Object(r.a)({gridColumn:"screen",paddingTop:20,background:o,marginTop:40,marginBottom:s?0:40,paddingBottom:s?0:20,borderTop:"1px solid rgba(0, 0, 0, 0.1)",borderBottom:!s&&"1px solid rgba(0, 0, 0, 0.1)"},g),t)}},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return i}))},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["cojE",0,1,2]]]);