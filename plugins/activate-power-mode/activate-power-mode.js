// build time:Fri Dec 18 2020 14:46:43 GMT+0800 (中国标准时间)
(function e(t,o){if(typeof exports==="object"&&typeof module==="object")module.exports=o();else if(typeof define==="function"&&define.amd)define([],o);else if(typeof exports==="object")exports["POWERMODE"]=o();else t["POWERMODE"]=o()})(this,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:false};e[n].call(r.exports,r,r.exports,o);r.loaded=true;return r.exports}o.m=e;o.c=t;o.p="";return o(0)}([function(e,t,o){"use strict";var n=document.createElement("canvas");n.width=window.innerWidth;n.height=window.innerHeight;n.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999";window.addEventListener("resize",function(){n.width=window.innerWidth;n.height=window.innerHeight});document.body.appendChild(n);var r=n.getContext("2d");var i=[];var a=0;var d=false;p.shake=true;function l(e,t){return Math.random()*(t-e)+e}function f(e){if(p.colorful){var t=l(0,360);return"hsla("+l(t-10,t+10)+", 100%, "+l(50,80)+"%, "+1+")"}else{return window.getComputedStyle(e).color}}function u(){var e=document.activeElement;var t;if(e.tagName==="TEXTAREA"||e.tagName==="INPUT"&&e.getAttribute("type")==="text"){var n=o(1)(e,e.selectionEnd);t=e.getBoundingClientRect();return{x:n.left+t.left,y:n.top+t.top,color:f(e)}}var r=window.getSelection();if(r.rangeCount){var i=r.getRangeAt(0);var a=i.startContainer;if(a.nodeType===document.TEXT_NODE){a=a.parentNode}t=i.getBoundingClientRect();return{x:t.left,y:t.top,color:f(a)}}return{x:0,y:0,color:"transparent"}}function c(e,t,o){return{x:e,y:t,alpha:1,color:o,velocity:{x:-1+Math.random()*2,y:-3.5+Math.random()*2}}}function p(){{var e=u();var t=5+Math.round(Math.random()*10);while(t--){i[a]=c(e.x,e.y,e.color);a=(a+1)%500}}{if(p.shake){var o=1+2*Math.random();var n=o*(Math.random()>.5?-1:1);var r=o*(Math.random()>.5?-1:1);document.body.style.marginLeft=n+"px";document.body.style.marginTop=r+"px";setTimeout(function(){document.body.style.marginLeft="";document.body.style.marginTop=""},75)}}if(!d){requestAnimationFrame(s)}}p.colorful=false;function s(){d=true;r.clearRect(0,0,n.width,n.height);var e=false;var t=n.getBoundingClientRect();for(var o=0;o<i.length;++o){var a=i[o];if(a.alpha<=.1)continue;a.velocity.y+=.075;a.x+=a.velocity.x;a.y+=a.velocity.y;a.alpha*=.96;r.globalAlpha=a.alpha;r.fillStyle=a.color;r.fillRect(Math.round(a.x-1.5)-t.left,Math.round(a.y-1.5)-t.top,3,3);e=true}if(e){requestAnimationFrame(s)}else{d=false}}e.exports=p},function(e,t){(function(){var t=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"];var o=window.mozInnerScreenX!=null;function n(e,n,r){var i=r&&r.debug||false;if(i){var a=document.querySelector("#input-textarea-caret-position-mirror-div");if(a){a.parentNode.removeChild(a)}}var d=document.createElement("div");d.id="input-textarea-caret-position-mirror-div";document.body.appendChild(d);var l=d.style;var f=window.getComputedStyle?getComputedStyle(e):e.currentStyle;l.whiteSpace="pre-wrap";if(e.nodeName!=="INPUT")l.wordWrap="break-word";l.position="absolute";if(!i)l.visibility="hidden";t.forEach(function(e){l[e]=f[e]});if(o){if(e.scrollHeight>parseInt(f.height))l.overflowY="scroll"}else{l.overflow="hidden"}d.textContent=e.value.substring(0,n);if(e.nodeName==="INPUT")d.textContent=d.textContent.replace(/\s/g," ");var u=document.createElement("span");u.textContent=e.value.substring(n)||".";d.appendChild(u);var c={top:u.offsetTop+parseInt(f["borderTopWidth"]),left:u.offsetLeft+parseInt(f["borderLeftWidth"])};if(i){u.style.backgroundColor="#aaa"}else{document.body.removeChild(d)}return c}if(typeof e!="undefined"&&typeof e.exports!="undefined"){e.exports=n}else{window.getCaretCoordinates=n}})()}])});
//rebuild by hrmmi 