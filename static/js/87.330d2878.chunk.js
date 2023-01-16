"use strict";(self.webpackChunkmusic_player_app=self.webpackChunkmusic_player_app||[]).push([[87],{1087:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var i,a,u,c=t(885),l=t(2791),r=t(5048),o=t(4441),s=t(184),d=function(e){var n,t,i,a,u=(0,l.useRef)(),c=(0,r.v9)((function(e){return e.player.activeSong})),d=(0,r.v9)((function(e){return e.player.isPlaying})),f=(0,r.I0)();return d?null===(n=u.current)||void 0===n||n.play().catch((function(){})):null===(t=u.current)||void 0===t||t.pause(),(0,s.jsx)("audio",{id:"audio",src:null===(i=c.hub)||void 0===i||null===(a=i.actions)||void 0===a?void 0:a.at(1).uri,ref:u,onLoadedData:function(){var n;return e.onLoadedData(null===(n=u.current)||void 0===n?void 0:n.duration)},onTimeUpdate:function(){var n;return e.onTimeUpdate(null===(n=u.current)||void 0===n?void 0:n.currentTime)},onEnded:function(){return f(o.g.nextSong())}})},f=function(){var e=(0,r.v9)((function(e){return e.player.isPlaying})),n=(0,r.v9)((function(e){return e.player.isShuffling})),t=(0,r.I0)(),i=(0,l.useState)(!1),a=(0,c.Z)(i,2),u=a[0],d=a[1];return(0,s.jsxs)("div",{className:"d-flex justify-content-evenly align-items-center",children:[(0,s.jsx)("i",{className:"bi bi-repeat".concat(u?"-1":""," fs-4"),onClick:function(){document.getElementById("audio").loop=!u,d(!u)}}),(0,s.jsx)("i",{className:"bi bi-skip-start-fill fs-3",onClick:function(){t(o.g.prevSong())}}),(0,s.jsx)("i",{className:"bi bi-".concat(e?"pause":"play","-fill fs-1 align-self-center"),onClick:function(){t(o.g.playPause())}}),(0,s.jsx)("i",{className:"bi bi-skip-end-fill fs-3",onClick:function(){t(o.g.nextSong())}}),(0,s.jsx)("i",{className:"bi bi-shuffle fs-4 ".concat(n?"text-primary":""),onClick:function(){return t(o.g.toggleShuffling())}})]})},m="Player_player__28Nm3",v=function(e){var n=(0,l.useRef)(),t=function(e){e||(e=0);var n=Math.ceil(e);return Math.floor(n/60)+":"+(n%60).toString().padStart(2,"0")},i=t(e.currentTime);return(0,s.jsxs)("div",{className:"d-sm-flex justify-content-between text-white",children:[(0,s.jsx)("input",{ref:n,type:"range",className:"d-block mx-auto",style:{width:"min(364px, 100%)"},value:Math.ceil(e.currentTime),min:"0",max:Math.ceil(e.duration),onChange:function(){return document.getElementById("audio").currentTime=n.current.value}}),(0,s.jsx)("span",{style:{order:"-1"},children:i}),(0,s.jsx)("span",{className:"float-end",children:t(e.duration)})]})},p=t(9481),x="Track_track__iVNZ2",y="Track_track-playing__KqUIC",g=function(){var e,n=(0,r.v9)((function(e){return e.player.activeSong})),t=(0,r.v9)((function(e){return e.player.isPlaying}));return(0,s.jsxs)("div",{className:"col-3 col-md-4 py-2 pe-0 pe-sm-4 justify-content-center justify-content-md-start ".concat(x," ").concat(t?y:""),children:[(0,s.jsx)("img",{src:null===(e=n.images)||void 0===e?void 0:e.coverart,alt:"",className:"rounded-circle img-fluid",style:{width:"".concat(n?"80px":"0px")}}),(0,s.jsx)("div",{className:"text-white ms-3 d-none d-md-block",children:(0,s.jsx)(p.Z,{songData:n})})]})},j=function(){var e=(0,l.useState)(!1),n=(0,c.Z)(e,2),t=n[0],r=n[1];(0,l.useEffect)((function(){a=document.getElementById("audio"),u=document.getElementById("volume"),a.volume=u.value=.009}),[]);return(0,s.jsxs)("div",{className:"col-3 col-md-4 ps-2 align-items-center justify-content-end d-flex",children:[(0,s.jsx)("i",{className:"bi bi-volume-".concat(t?"mute":"up","-fill fs-3"),onClick:function(){!function(e){e?(i=u.value,a.volume=u.value=0):a.volume=u.value=i}(!t),r(!t)}}),(0,s.jsx)("input",{id:"volume",type:"range",min:"0.0",max:"1.0",step:"0.01",onChange:function(){a.volume=u.value,"0"===u.value?r(!0):r(!1)},style:{width:"min(100%, 130px)"}})]})},h=l.memo(j),b=function(){var e=(0,l.useState)(null),n=(0,c.Z)(e,2),t=n[0],i=n[1],a=(0,l.useState)(null),u=(0,c.Z)(a,2),r=u[0],o=u[1];return(0,s.jsxs)("div",{id:"player",className:"row gx-0 px-2 px-md-4 px-lg-5 fixed-bottom ".concat(m," animate-up"),children:[(0,s.jsx)(g,{}),(0,s.jsxs)("div",{className:"col-6 justify-content-center col-md-4 d-flex flex-column",children:[(0,s.jsx)(f,{}),(0,s.jsx)(v,{duration:t,currentTime:r})]}),(0,s.jsx)(d,{onLoadedData:function(e){return i(e)},onTimeUpdate:function(e){return o(e)}}),(0,s.jsx)(h,{})]})}}}]);
//# sourceMappingURL=87.330d2878.chunk.js.map