(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{612:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var i=t(6265),r=t(5893);t(7294);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e){return(0,r.jsx)("div",{className:"image",children:(0,r.jsx)("img",a(a({},e),{},{loading:"lazy"}))})}},2802:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var i=t(5893),r=t(7294),o=t(3832),a=t(1749),l=t(9163),s=t(6265),c=t(282),u=t(8740),d=t(7397),p=t(294);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=l.ZP.div.withConfig({displayName:"Filters__Wrapper"})(["position:sticky;top:100px;"]),g=l.ZP.h6.withConfig({displayName:"Filters__Title"})(["font-family:Work Sans;font-style:normal;font-weight:500;font-size:16px;line-height:24px;color:#000000;margin:0;margin-bottom:10px;"]);function y(e){var n=e.filterCountries,t=e.min,r=e.max,o=e.setMin,a=e.setMax,l=e.setCountry,s=e.country,f=e.handleFilter;return(0,i.jsxs)(h,{children:[(0,i.jsx)(g,{children:"Filters"}),(0,i.jsx)(p.ZP,{options:n,getOptionLabel:function(e){return e},fullWidth:!0,style:{margin:0},value:s,onChange:function(e,n){return l(n)},renderInput:function(e){return(0,i.jsx)(u.Z,m(m({},e),{},{label:"Country",variant:"outlined"}))}}),(0,i.jsx)(g,{style:{marginTop:30},children:"Price"}),(0,i.jsx)(u.Z,{label:"Minimum",variant:"outlined",fullWidth:!0,type:"number",style:{marginBottom:15},value:t,onChange:function(e){return o(e.target.value)},InputProps:{startAdornment:(0,i.jsx)(d.Z,{position:"start",children:"$"})}}),(0,i.jsx)(u.Z,{label:"Maximum",variant:"outlined",fullWidth:!0,type:"number",value:r,onChange:function(e){return a(e.target.value)},InputProps:{startAdornment:(0,i.jsx)(d.Z,{position:"start",children:"$"})}}),(0,i.jsx)(c.Z,{variant:"contained",color:"primary",fullWidth:!0,style:{marginTop:30},onClick:f,children:"Apply filters"})]})}var x=t(4047),b=t(2700),j=t(8127),w=t(8580),v=t(775),O=t(6066),P=t(8900),k=t(6893),C=t(612);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=(0,v.Z)(e);if(n){var r=(0,v.Z)(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return(0,w.Z)(this,t)}}var N=l.ZP.div.withConfig({displayName:"Gallery__Wrapper"})(["width:35%;cursor:pointer;.slider-img{height:200px;img{width:100%;object-fit:cover;min-height:200px;}}.slick-dots{width:120px;left:50%;transform:translateX(-50%);bottom:10px;position:absolute !important;li{button:before{color:#bcbcbc !important;opacity:1;}&.slick-active{button:before{color:#fff !important;}}}}@media (max-width:960px){width:100%;.slider-img{img{width:100%;}}}"]);function R(e){var n=e.image;return(0,i.jsx)("div",{className:"slider-img",children:(0,i.jsx)(C.Z,{src:n,alt:""})})}function z(e){var n=e.onClick;return(0,i.jsx)("span",{style:{position:"absolute",right:"30px",top:"50%",transform:"translateY(-50%)",zIndex:99,background:"rgba(255, 255, 255, 0.8)",color:"#000",width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,cursor:"pointer"},disabled:null===n,onClick:n,className:"slick-btn",children:(0,i.jsx)(k.Tfp,{})})}function M(e){var n=e.onClick;return(0,i.jsx)("span",{style:{position:"absolute",left:"30px",top:"50%",transform:"translateY(-50%)",zIndex:99,background:"rgba(255, 255, 255, 0.8)",color:"#000",width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,cursor:"pointer"},disabled:null===n,onClick:n,className:"slick-btn",children:(0,i.jsx)(k.YFh,{})})}var T=function(e){(0,j.Z)(t,e);var n=_(t);function t(){return(0,x.Z)(this,t),n.apply(this,arguments)}return(0,b.Z)(t,[{key:"render",value:function(){var e=this,n={dots:!0,infinite:!0,arrows:!0,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:(0,i.jsx)(z,{}),prevArrow:(0,i.jsx)(M,{}),appendDots:function(e){return(0,i.jsx)(P.Z,{dots:e,numDotsToShow:4,dotWidth:30})}};return(0,i.jsx)(N,{onClick:function(n){return e.props.handleOpen(e.props.images)},children:(0,i.jsx)(O.Z,Z(Z({},n),{},{children:this.props.images.map((function(e){return(0,i.jsx)(R,{image:e},e)}))}))})}}]),t}(r.Component),E=t(8744),D=l.ZP.div.withConfig({displayName:"Post__Wrapper"})(["background:#ffffff;border:1px solid #f1f1f1;box-shadow:0px 4px 4px rgba(0,0,0,0.02);padding:16px;display:flex;margin-bottom:16px;@media (max-width:960px){flex-direction:column;}"]),W=l.ZP.div.withConfig({displayName:"Post__Info"})(["width:45%;padding-left:30px;h4{margin:0;font-style:normal;font-weight:500;font-size:16px;line-height:24px;text-transform:capitalize;color:#363636;margin-bottom:8px;}@media (max-width:960px){width:100%;margin:30px auto;}"]),A=l.ZP.div.withConfig({displayName:"Post__InfoItem"})(["display:flex;align-items:center;margin-bottom:10px;&:last-child{margin-bottom:0;}.icon{margin-right:10px;}.text{font-family:Work Sans;font-style:normal;font-weight:normal;font-size:14px;line-height:24px;text-transform:capitalize;color:#717171;}"]),I=l.ZP.div.withConfig({displayName:"Post__Book"})(["width:20%;display:flex;justify-content:flex-end;align-items:flex-start;padding-top:80px;@media (max-width:960px){width:100%;justify-content:center;button{width:100%;display:block;}}"]);function V(e){var n=e.data,t=void 0===n?{}:n,r=e.handleOpen;return(0,i.jsxs)(D,{children:[(0,i.jsx)(T,{images:t.images,handleOpen:r}),(0,i.jsxs)(W,{children:[(0,i.jsx)("h4",{children:t.name}),(0,i.jsxs)(A,{children:[(0,i.jsx)("span",{className:"icon",children:(0,i.jsx)("svg",{width:20,height:21,viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 2.167A5.83 5.83 0 004.167 8C4.167 12.375 10 18.834 10 18.834S15.834 12.375 15.834 8A5.83 5.83 0 0010 2.167zM5.834 8C5.834 5.7 7.7 3.834 10 3.834c2.3 0 4.167 1.866 4.167 4.166 0 2.4-2.4 5.992-4.167 8.234C8.267 14.009 5.834 10.375 5.834 8zm2.083 0a2.083 2.083 0 114.167 0 2.083 2.083 0 01-4.167 0z",fill:"#000",fillOpacity:.54})})}),(0,i.jsxs)("span",{className:"text",children:["Location: ",t.city,", ",t.country]})]}),(0,i.jsxs)(A,{children:[(0,i.jsx)("span",{className:"icon",children:(0,i.jsx)("svg",{width:20,height:21,viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 3.834h.833c.917 0 1.667.75 1.667 1.666v11.667c0 .917-.75 1.667-1.667 1.667H4.167c-.917 0-1.667-.75-1.667-1.667V5.5c0-.916.75-1.666 1.667-1.666H5V2.167h1.667v1.667h6.666V2.167H15v1.667zM4.167 17.167h11.666V8.834H4.167v8.333zm0-10V5.5h11.666v1.667H4.167zm9.575 3.775L8.8 15.884l-2.642-2.642.884-.883L8.8 14.117l4.058-4.058.884.883z",fill:"#000",fillOpacity:.54})})}),(0,i.jsxs)("span",{className:"text",children:["Availability: ",t.availability]})]}),(0,i.jsxs)(A,{children:[(0,i.jsx)("span",{style:{marginRight:10},children:"From:"})," ",(0,i.jsxs)("strong",{children:[" ","$",t.from,"USD ",t.for]})]}),(0,i.jsx)(E.Z,{lines:1,more:"Show more",less:"Show less",expanded:!1,children:(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.description}})})]}),(0,i.jsx)(I,{children:(0,i.jsx)(c.Z,{color:"primary",variant:"contained",component:"a",href:"mailto:tobias@aworldlylife.com?subject=".concat(t.name),children:"Book now"})})]})}t(6458);var F=t(2879),L=(t(4591),l.ZP.div.withConfig({displayName:"locations__Title"})(["margin:48px 0;p{font-style:normal;font-weight:normal;font-size:18px;line-height:24px;text-transform:uppercase;color:#993700;margin:0;}h2{font-style:normal;font-weight:normal;font-size:32px;line-height:40px;text-transform:uppercase;color:#363636;margin:0;}"])),q=l.ZP.div.withConfig({displayName:"locations__Wrapper"})([""]),H=[{name:"Hotel Lo Sereno",description:"\n    <p style={{margin: 0}}>\n    Lo Sereno presents a sensual and sophisticated approach to barefoot elegance. The ten-suite hotel exists in a balance of romance and adventure, including a gourmet Mexican concept kitchen, sourcing local fresh ingredients daily. The bar and dining area are open-air and encapsulated by the hotel\u2019s glittering black infinity pool. At Lo Sereno you can enjoy cocktails and beverages either at the dining area, in the lounge, or on the beach. Lo Sereno provides all the amenities a modern traveler may desire, curating brands worldwide for an all-sensory experience. One visit to Lo Sereno and you will always have a home to return to on the beach.\n    </p>\n\n    <ul>\n      <li>\n      breakfast included\n      </li>\n      <li>\n      comfortable workspaces\n      </li>\n      <li>\n      fast and stable WiFi\n      </li>\n      <li>\n      workspace outside the room\n      </li>\n      <li>\n      additional IT hardware upon request\n      </li>\n      <li>\n      daily room cleaning\n      </li>\n    </ul>\n    \n    ",city:"Troncones",country:"Mexico",availability:"All year round",from:4e3,for:"for 4 weeks",images:["./images/rooms/2/1.jpg","./images/rooms/2/2.jpg","./images/rooms/2/3.jpg","./images/rooms/2/4.jpg"]},{name:"CERVO Mountain Resort",description:"\n    <p style={{margin: 0}}>\n    Surrounded by the rugged beauty of Zermatt, the CERVO is the gateway to the\nmystical mountain world of the Alps. With a deeply rooted sense of the extraordinary, of highest\nquality and of authentic hospitality, CERVO invites its guests to explore the impressive nature\naround us. And to discover themselves. Casual luxury, a modern design, warm colors and\nnatural materials. This is the contemporary alpine style of CERVO.</p>\n\n    <ul>\n      <li>\n      room category: Nomad room L, Nomad room M\n      </li>\n      <li>\n      breakfast not included\n      </li>\n      <li>\n      comfortable workspaces\n      </li>\n      <li>\n      fast and stable WiFi\n      </li>\n      <li>\n      co-working space \u201cFerdi\u201d included\n      </li>\n      <li>\n      exclusive Spa included\n      </li>\n      <li>\n      additional IT hardware upon request\n      </li>\n      <li>\n      weekly room cleaning\n      </li>\n      <li>\n      pet friendly!\n      </li>\n      <li>\n      Yoga and meditation classes\n      </li>\n    </ul>\n    \n    ",city:"Zermatt",country:"Switzerland",availability:"May, June, October, November",from:4900,for:"for 4 weeks",images:["./images/rooms/1/1.jpg","./images/rooms/1/2.jpg","./images/rooms/1/3.jpg","./images/rooms/1/4.jpg"]},{name:"CERVO Mountain Resort",description:"\n    <p style={{margin: 0}}>\n    Surrounded by the rugged beauty of Zermatt, the CERVO is the gateway to the\n    mystical mountain world of the Alps. With a deeply rooted sense of the extraordinary, of highest\n    quality and of authentic hospitality, CERVO invites its guests to explore the impressive nature\n    around us. And to discover themselves. Casual luxury, a modern design, warm colors and\n    natural materials. This is the contemporary alpine style of CERVO.</p>\n\n    <ul>\n      <li>\n      room category: Nomad Roof Suite\n      </li>\n      <li>\n      breakfast not included\n      </li>\n      <li>\n      comfortable workspaces\n      </li>\n      <li>\n      fast and stable WiFi\n      </li>\n      <li>\n      co-working space \u201cFerdi\u201d included\n      </li>\n      <li>\n      exclusive Spa included\n      </li>\n      <li>\n      additional IT hardware upon request\n      </li>\n      <li>\n      weekly room cleaning\n      </li>\n      <li>\n      pet friendly!\n      </li>\n      <li>\n      Yoga and meditation classes\n      </li>\n    </ul>\n    \n    ",city:"Zermatt",country:"Switzerland",availability:"May, June, October, November",from:7400,for:"for 4 weeks",images:["./images/rooms/1/1.jpg","./images/rooms/1/2.jpg","./images/rooms/1/3.jpg","./images/rooms/1/4.jpg"]}];function B(){var e=(0,r.useState)(0),n=e[0],t=e[1],l=(0,r.useState)(!1),s=l[0],c=l[1],u=(0,r.useState)([]),d=u[0],p=u[1],f=(0,r.useState)(""),m=f[0],h=f[1],g=(0,r.useState)(""),x=g[0],b=g[1],j=(0,r.useState)(null),w=j[0],v=j[1],O=(0,r.useState)(H),P=O[0],k=O[1],C=function(e){p(e),c(!0),t(0)},S=H.map((function(e){return e.country})).filter((function(e,n,t){return t.indexOf(e)==n}));return(0,i.jsxs)(q,{children:[s&&(0,i.jsx)(F.Z,{mainSrc:d[n],nextSrc:d[(n+1)%d.length],prevSrc:d[(n+d.length-1)%d.length],onCloseRequest:function(){p([]),c(!1),t(0)},onMovePrevRequest:function(){return t((n+d.length-1)%d.length)},onMoveNextRequest:function(){return t((n+1)%d.length)}}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(L,{children:[(0,i.jsx)("p",{children:"Locations"}),(0,i.jsx)("h2",{children:"The Worldly spots"})]})}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(a.Z,{container:!0,spacing:2,children:[(0,i.jsx)(a.Z,{item:!0,xs:12,md:3,children:(0,i.jsx)(y,{filterCountries:S,min:m,max:x,setMin:h,setMax:b,country:w,setCountry:v,handleFilter:function(){!w||m||x?w&&m&&!x?k(H.filter((function(e){return e.country===w&&e.from>=m}))):w&&x&&!m?k(H.filter((function(e){return e.country===w&&e.from<=x}))):w&&x&&m?k(H.filter((function(e){return e.country===w&&e.from<=x&&e.from>=m}))):w||!m||x?w||m||!x||k(H.filter((function(e){return e.from<=x}))):k(H.filter((function(e){return e.from>=m}))):k(H.filter((function(e){return e.country===w})))}})}),(0,i.jsx)(a.Z,{item:!0,xs:12,md:9,children:P.map((function(e,n){return(0,i.jsx)(V,{data:e,handleOpen:C},n)}))})]})})]})}},9949:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/locations",function(){return t(2802)}])}},function(e){e.O(0,[606,227,774,888,179],(function(){return n=9949,e(e.s=n);var n}));var n=e.O();_N_E=n}]);