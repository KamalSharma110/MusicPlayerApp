"use strict";(self.webpackChunkmusic_player_app=self.webpackChunkmusic_player_app||[]).push([[337],{5337:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var r=i(2791),s=i(5048),n=i(8658),a=i(4880),l=i(184),c=function(t){var e=t.artistName,i=t.imageUrl,r=t.artistId,s=(0,a.k6)(),n=function(){return s.push("/artist-details/".concat(r))};return(0,l.jsxs)("div",{className:"col-6 col-sm-4 col-md-3 col-lg-6 \r col-xl-3 text-center text-white animate-up",children:[(0,l.jsx)("img",{loading:"lazy",src:i,alt:"",className:"rounded-circle w-75",style:{cursor:"pointer",maxWidth:"150px",maxHeight:"150px",objectFit:"cover"},onClick:n,onLoad:function(t){t.target.style.visibility="visible"}}),(0,l.jsx)("p",{className:"mb-0 mt-1 fw-semibold truncate mx-auto",style:{cursor:"pointer",width:"min-content"},onClick:n,children:e})]})},o=i(5027),u=i(4784),d=function(){var t=(0,r.useRef)(),e=(0,s.v9)((function(t){return t.player.artistIds})),i=(0,n.g9)(e,{skip:!e}),a=i.data,d=i.isFetching,m=i.error;(0,r.useEffect)((function(){var e;return null===(e=t.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),[]);return(0,l.jsxs)("section",{className:"col-12 col-lg-6 col-xl-7 mt-5 mt-lg-4",ref:t,children:[(0,l.jsx)("h4",{className:"text-white text-center text-sm-start my-3",children:"Top Artists"}),(0,l.jsxs)("div",{className:"row g-2 g-sm-3 g-md-4",children:[d&&(0,l.jsx)(o.Z,{title:"Loading Top Artists..."}),m&&(0,l.jsx)(u.Z,{}),null!==(null===a||void 0===a?void 0:a.artists[0])&&(null===a||void 0===a?void 0:a.artists.map((function(t,e){return function(t,e){if((null===a||void 0===a?void 0:a.artists.findIndex((function(e){return e.id===t.id})))<e)return"";var i=t.name.search(/[&,]/);return-1===i&&(i=t.name.length),(0,l.jsx)(c,{artistId:t.id,artistName:t.name.substring(0,i),imageUrl:t.images[2].url},t.id)}(t,e)})))]})]})}}}]);
//# sourceMappingURL=337.44fc9c75.chunk.js.map