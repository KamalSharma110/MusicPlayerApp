"use strict";(self.webpackChunkmusic_player_app=self.webpackChunkmusic_player_app||[]).push([[10],{9379:function(t,e,s){s.d(e,{Z:function(){return r}});var i=s(2791),n=s(1523),l="DetailsHeader_track-details__b6jFF",a=s(184),r=function(t){var e,s=t.details,r=s.trackadamid;return(0,i.useEffect)((function(){r||(document.getElementById("artistBio").innerHTML=s.data[0].attributes.artistBio)}),[r,s]),(0,a.jsxs)("div",{className:"row text-white justify-content-center position-relative ".concat(l),children:[(0,a.jsx)("div",{className:"col-12 col-xl-3",style:{maxWidth:"250px"},children:(0,a.jsx)("img",{src:r?s.images.coverart:s.data[0].attributes.artwork.url,alt:"",className:"rounded-circle img-thumbnail"})}),(0,a.jsxs)("div",{className:"col-12 col-xl-9 d-flex flex-column justify-content-center text-center text-xl-start",children:[(0,a.jsx)("p",{className:"truncate fw-semibold mb-0 fs-4",children:r?s.title:s.data[0].attributes.name}),r?(0,a.jsx)(n.rU,{className:"hover",to:"/artist-details/".concat(null===(e=s.artists)||void 0===e?void 0:e.at(0).adamid),children:(0,a.jsx)("small",{className:"truncate d-block fw-light fs-6",children:s.subtitle})}):(0,a.jsx)("small",{className:"truncate d-block fw-semibold fs-6",children:s.data[0].attributes.origin}),(0,a.jsx)("small",{id:"artistBio",className:"fw-light fs-6 ".concat(r?"":"mt-4"),children:r?s.genres.primary:""})]})]})}},1010:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var i=s(885),n=s(2791),l=s(4880),a=s(8113),r=s(9379),c=s(1413),o=s(5048),d=s(4441),u=s(9573),m=s(5027),f=s(4784),x=s(184),h=function(t){var e=t.id,s=(0,o.v9)((function(t){return t.player.currentSongs})),i=(0,o.I0)(),l=(0,a.N5)(e),r=l.data,h=l.isFetching,g=l.error;return(0,n.useEffect)((function(){i(d.g.setCurrentSongs(null===r||void 0===r?void 0:r.map((function(t,e){return(0,c.Z)((0,c.Z)({},t),{},{index:e})}))))}),[i,r]),(0,x.jsxs)("div",{children:[(0,x.jsx)("h4",{className:"mb-4 mt-5",children:"Related Songs"}),(0,x.jsxs)("ol",{className:"list-group list-group-numbered",onClick:function(){return i(d.g.toggleWidgetActive(!1))},children:[h&&(0,x.jsx)(m.Z,{title:"Loading Related Songs..."}),g&&(0,x.jsx)(f.Z,{}),null===s||void 0===s?void 0:s.map((function(t){return(0,x.jsx)(u.Z,{song:t},t.key)}))]})]})},g=function(){var t,e,s,c=(0,l.UO)(),o=(0,n.useRef)(),d=(0,n.useState)(null),u=(0,i.Z)(d,2),m=u[0],f=u[1],g=(0,a.E_)(c.songId).data;return(0,n.useEffect)((function(){var t;null===(t=o.current)||void 0===t||t.scrollIntoView({behavior:"smooth"}),f(g)}),[g]),(0,x.jsxs)("section",{className:"text-white col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4",style:{paddingTop:"5rem"},ref:o,children:[m&&(0,x.jsx)(r.Z,{details:m}),(0,x.jsx)("h4",{className:"mb-4",children:"Lyrics"}),null===m||void 0===m||null===(t=m.sections)||void 0===t||null===(e=t.at(1))||void 0===e||null===(s=e.text)||void 0===s?void 0:s.map((function(t,e){return(0,x.jsx)("p",{className:"mb-0 fw-light",children:t},e)})),(0,x.jsx)(h,{id:c.songId})]})}}}]);
//# sourceMappingURL=10.1a5abd5b.chunk.js.map