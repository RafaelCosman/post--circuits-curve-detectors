(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+ugm":function(t,n,i){"use strict";var e=i("6txh"),r=i("2K37"),o=i("SDD1"),s=i("/aQN");n.a=function(){var t=s.a,n=s.b,i=Object(r.a)(!0),a=null,u=o.a,c=null;function h(r){var o,s,h,l=r.length,f=!1;for(null==a&&(c=u(h=Object(e.a)())),o=0;o<=l;++o)!(o<l&&i(s=r[o],o,r))===f&&((f=!f)?c.lineStart():c.lineEnd()),f&&c.point(+t(s,o,r),+n(s,o,r));if(h)return c=null,h+""||null}return h.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(r.a)(+n),h):t},h.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(r.a)(+t),h):n},h.defined=function(t){return arguments.length?(i="function"===typeof t?t:Object(r.a)(!!t),h):i},h.curve=function(t){return arguments.length?(u=t,null!=a&&(c=u(a)),h):u},h.context=function(t){return arguments.length?(null==t?a=c=null:c=u(a=t),h):a},h}},"/aQN":function(t,n,i){"use strict";function e(t){return t[0]}function r(t){return t[1]}i.d(n,"a",(function(){return e})),i.d(n,"b",(function(){return r}))},"2K37":function(t,n,i){"use strict";n.a=function(t){return function(){return t}}},"6txh":function(t,n,i){"use strict";var e=Math.PI,r=2*e,o=r-1e-6;function s(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function a(){return new s}s.prototype=a.prototype={constructor:s,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,i,e){this._+="Q"+ +t+","+ +n+","+(this._x1=+i)+","+(this._y1=+e)},bezierCurveTo:function(t,n,i,e,r,o){this._+="C"+ +t+","+ +n+","+ +i+","+ +e+","+(this._x1=+r)+","+(this._y1=+o)},arcTo:function(t,n,i,r,o){t=+t,n=+n,i=+i,r=+r,o=+o;var s=this._x1,a=this._y1,u=i-t,c=r-n,h=s-t,l=a-n,f=h*h+l*l;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(f>1e-6)if(Math.abs(l*u-c*h)>1e-6&&o){var _=i-s,d=r-a,y=u*u+c*c,p=_*_+d*d,x=Math.sqrt(y),v=Math.sqrt(f),b=o*Math.tan((e-Math.acos((y+f-p)/(2*x*v)))/2),w=b/v,g=b/x;Math.abs(w-1)>1e-6&&(this._+="L"+(t+w*h)+","+(n+w*l)),this._+="A"+o+","+o+",0,0,"+ +(l*_>h*d)+","+(this._x1=t+g*u)+","+(this._y1=n+g*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,i,s,a,u){t=+t,n=+n,u=!!u;var c=(i=+i)*Math.cos(s),h=i*Math.sin(s),l=t+c,f=n+h,_=1^u,d=u?s-a:a-s;if(i<0)throw new Error("negative radius: "+i);null===this._x1?this._+="M"+l+","+f:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+l+","+f),i&&(d<0&&(d=d%r+r),d>o?this._+="A"+i+","+i+",0,1,"+_+","+(t-c)+","+(n-h)+"A"+i+","+i+",0,1,"+_+","+(this._x1=l)+","+(this._y1=f):d>1e-6&&(this._+="A"+i+","+i+",0,"+ +(d>=e)+","+_+","+(this._x1=t+i*Math.cos(a))+","+(this._y1=n+i*Math.sin(a))))},rect:function(t,n,i,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +i+"v"+ +e+"h"+-i+"Z"},toString:function(){return this._}},n.a=a},"70Ol":function(t,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/banner",function(){return i("lgye")}])},JnD7:function(t,n,i){"use strict";i.d(n,"a",(function(){return e})),i.d(n,"b",(function(){return o}));var e=o(i("SDD1").a);function r(t){this._curve=t}function o(t){function n(n){return new r(t(n))}return n._curve=t,n}r.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}},SDD1:function(t,n,i){"use strict";function e(t){this._context=t}e.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}},n.a=function(t){return new e(t)}},TI0E:function(t,n,i){"use strict";i.d(n,"b",(function(){return o}));var e=i("JnD7"),r=i("+ugm");function o(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Object(e.b)(t)):n()._curve},t}n.a=function(){return o(Object(r.a)().curve(e.a))}},lgye:function(t,n,i){"use strict";i.r(n);var e=i("q1tI"),r=i.n(e),o=i("3Ttg"),s=(i("uYk3"),i("H/gs")),a=i("Jm8C"),u=r.a.createElement,c=Object(s.default)((function(t){var n=t.neurons,i=t.activations,e=t.layer;return u(a.default,{size:240,prerender:!0,neuronSize:40,responsesByNeuron:i,neurons:n,layer:e,neuronPadding:10,fillOpacity:.4,orientationType:"max"})})),h=function(t){var n=t.children,i=t.layer;return u("a",{href:"https://microscope.openai.com/models/inceptionv1/".concat(i,"_0/")},u(o.b,{fontWeight:600,size:500},"Layer ",n))};n.default=function(){return u(r.a.Fragment,null,u(o.a,{gridColumn:"screen",paddingX:100,marginY:0,flexFlow:"row",alignItems:"center",justifyContent:"space-between",paddingY:10},u(o.a,null,u(o.a,{flexFlow:"row",justifyContent:"space-between",borderBottom:"1px solid rgba(0, 0, 0, 0.2)"},u(h,{layer:"conv2d2"},"conv2d2"),u(o.b,{opacity:.8},"11 neurons")),u(c,{data:i("lt0t")})),u(o.a,null,u(o.a,{flexFlow:"row",justifyContent:"space-between",borderBottom:"1px solid rgba(0, 0, 0, 0.2)"},u(h,{layer:"mixed3a"},"3a"),u(o.b,{opacity:.8},"11 neurons")),u(c,{data:i("Qhwm")})),u(o.a,null,u(o.a,{flexFlow:"row",justifyContent:"space-between",borderBottom:"1px solid rgba(0, 0, 0, 0.2)"},u(h,{layer:"mixed3b"},"3b"),u(o.b,{opacity:.8},"10 neurons")),u(c,{data:i("o3mP")})),u(o.a,null,u(o.a,{flexFlow:"row",justifyContent:"space-between",borderBottom:"1px solid rgba(0, 0, 0, 0.2)"},u(h,{layer:"mixed4a"},"4a"),u(o.b,{opacity:.8},"12 neurons")),u(c,{data:i("El5E")}))),u(o.a,{alignSelf:"center",width:704,marginTop:20,marginBottom:20},u("figcaption",null,"Radial tuning curves visualize how curve neurons in InceptionV1\u2019s four curve families activate to synthetically rendered curves at different orientations. In this article we\u2019ll look closely at the behavior of the 3b curve family.")))}},qE0H:function(t,n,i){"use strict";function e(t){this._context=t}function r(t){var n,i,e=t.length-1,r=new Array(e),o=new Array(e),s=new Array(e);for(r[0]=0,o[0]=2,s[0]=t[0]+2*t[1],n=1;n<e-1;++n)r[n]=1,o[n]=4,s[n]=4*t[n]+2*t[n+1];for(r[e-1]=2,o[e-1]=7,s[e-1]=8*t[e-1]+t[e],n=1;n<e;++n)i=r[n]/o[n-1],o[n]-=i,s[n]-=i*s[n-1];for(r[e-1]=s[e-1]/o[e-1],n=e-2;n>=0;--n)r[n]=(s[n]-r[n+1])/o[n];for(o[e-1]=(t[e]+r[e-1])/2,n=0;n<e-1;++n)o[n]=2*t[n+1]-r[n+1];return[r,o]}e.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,i=t.length;if(i)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===i)this._context.lineTo(t[1],n[1]);else for(var e=r(t),o=r(n),s=0,a=1;a<i;++s,++a)this._context.bezierCurveTo(e[0][s],o[0][s],e[1][s],o[1][s],t[a],n[a]);(this._line||0!==this._line&&1===i)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},n.a=function(t){return new e(t)}}},[["70Ol",0,1,2,3,4,8]]]);