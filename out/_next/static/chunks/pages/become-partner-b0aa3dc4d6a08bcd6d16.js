(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{6432:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(5893),i=n(7294),o=n(1749),s=n(3832),a=n(9163),l=n(612),c=n(5706),h=n(9659),p=n(7513),d=n(9501),m=n(282),x=n(6265);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,x.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=a.ZP.div.withConfig({displayName:"Input__Wrapper"})(["margin-bottom:15px;position:relative;label,input,span{display:block;}label{font-family:Work Sans;font-style:normal;font-weight:normal;font-size:14px;line-height:24px;text-transform:capitalize;color:#363636;}input{width:100%;background:#fafafa;border:1px solid #e6e6e6;box-sizing:border-box;padding:8px;height:40px;&:focus{outline:none;}}span{font-size:12px;color:red;position:absolute;left:0;bottom:-16px;}"]);function j(e){return(0,r.jsxs)(g,{children:[(0,r.jsx)("label",{htmlFor:e.name,children:e.label}),(0,r.jsx)("input",u({type:e.type?e.type:"text",name:e.name},e)),(0,r.jsx)("span",{children:e.error})]})}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,x.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=a.ZP.div.withConfig({displayName:"TextArea__Wrapper"})(["margin-bottom:15px;position:relative;label,textarea,span{display:block;}label{font-family:Work Sans;font-style:normal;font-weight:normal;font-size:14px;line-height:24px;text-transform:capitalize;color:#363636;}textarea{width:100%;background:#fafafa;border:1px solid #e6e6e6;box-sizing:border-box;padding:8px;min-height:120px;&:focus{outline:none;}}span{font-size:12px;color:red;position:absolute;left:0;bottom:-16px;}"]);function v(e){return(0,r.jsxs)(y,{children:[(0,r.jsx)("label",{htmlFor:e.name,children:e.label}),(0,r.jsx)("textarea",b({name:e.name},e)),(0,r.jsx)("span",{children:e.error})]})}var O=n(4562),Z=a.ZP.div.withConfig({displayName:"Form__Wrapper"})([""]);function k(){var e=(0,i.useState)(!1),t=e[0],n=e[1],o=(0,i.useState)(!1),s=o[0],a=o[1];return(0,r.jsx)(Z,{children:(0,r.jsx)(p.J9,{initialValues:{name:"",email:"",subject:"",message:""},validationSchema:d.Ry().shape({name:d.Z_().required("Required"),email:d.Z_().email("Please enter a valid email").required("Required"),subject:d.Z_().required("Required"),message:d.Z_()}),onSubmit:function(e,t){emailjs.send("service_04jvxyr","default",e,"user_fpQ6HyT7RZAe3eIf0aQcY").then((function(e){t.setSubmitting(!1),n(!0)}),(function(e){t.setSubmitting(!1),a(!0)}))},children:function(e){var n=e.values,i=e.errors,o=e.touched,a=e.handleChange,l=e.handleBlur,c=e.handleSubmit,h=e.isSubmitting;return(0,r.jsxs)("form",{onSubmit:c,children:[s&&(0,r.jsx)(O.Z,{style:{marginBottom:15},severity:"error",children:"Something went wrong! Please try again"}),t&&(0,r.jsx)(O.Z,{style:{marginBottom:15},severity:"success",children:"Thank you for contacting us! We will be back to you as soon as possible"}),(0,r.jsx)(j,{type:"text",name:"name",label:"Name",onChange:a,onBlur:l,value:n.name,error:i.name&&o.name&&i.name}),(0,r.jsx)(j,{type:"email",name:"email",label:"Email",onChange:a,onBlur:l,value:n.email,error:i.email&&o.email&&i.email}),(0,r.jsx)(j,{type:"text",name:"subject",label:"Subject",onChange:a,onBlur:l,value:n.subject,error:i.subject&&o.subject&&i.subject}),(0,r.jsx)(v,{name:"message",label:"Message",onChange:a,onBlur:l,value:n.message,error:i.message&&o.message&&i.message}),(0,r.jsx)(m.Z,{color:"primary",variant:"contained",type:"submit",disabled:h,style:{marginTop:15},children:"Submit"})]})}})})}var _=a.ZP.div.withConfig({displayName:"Contact__Wrapper"})(["margin:144px auto;h1{font-weight:600;font-size:24px;text-transform:uppercase;color:#000000;margin-bottom:0;span{color:#993704;}}p{font-size:16px;font-family:Work Sans;margin:0;margin-bottom:15px;}.image{width:100%;img{width:100%;}}"]);function P(){return(0,r.jsx)(_,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(o.Z,{container:!0,spacing:10,children:[(0,r.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)("h1",{children:"Contact"}),(0,r.jsx)("p",{children:(0,r.jsx)(h.Z,{href:"mailto:tobias@aworldlylife.com",children:"tobias@aworldlylife.com"})}),(0,r.jsx)(k,{})]})}),(0,r.jsx)(o.Z,{item:!0,xs:12,md:8,children:(0,r.jsx)(l.Z,{src:"./images/contact.png",alt:"Contact us"})})]})})})}},612:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(6265),i=n(5893);n(7294);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",s(s({},e),{},{loading:"lazy"}))})}},5873:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),i=n(6265),o=n(8347),s=(n(7294),n(9163)),a=n(2481);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=(0,s.ZP)(a.Z).withConfig({displayName:"ArrowLink__Wrapper"})(["position:relative;> div{display:flex;align-items:center;}.text{color:",';font-size:20px;line-height:24px;text-transform:uppercase;position:relative;&:before{content:"";position:absolute;bottom:-10px;background-color:',";width:100%;height:3px;}}.icon{margin-left:15px;transition:0.3s ease-in-out;margin-top:3px;svg{fill:",";color:",";}}&:hover{text-decoration:none !important;.icon{transform:translateX(10px);}}"],(function(e){return e.color?e.color:"#993704"}),(function(e){return e.color?e.color:"#993704"}),(function(e){return e.color?e.color:"#993704"}),(function(e){return e.color?e.color:"#993704"}));function p(e){var t=e.children,n=(0,o.Z)(e,["children"]);return(0,r.jsx)(h,c(c({},n),{},{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text",children:t}),(0,r.jsx)("span",{className:"icon",children:(0,r.jsx)("svg",c(c({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:(0,r.jsx)("path",{d:"M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8z"})}))})]})}))}},5706:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=(n(7294),n(9163).ZP.div.withConfig({displayName:"TextDivider__Wrapper"})(["width:40px;height:4px;background-color:#000000;"]));function o(){return(0,r.jsx)(i,{})}},2187:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5893),i=(n(7294),n(9163)),o=n(1749),s=n(3832),a=n(5873),l=n(612),c=i.ZP.div.withConfig({displayName:"Hero__Wrapper"})(["h1{font-weight:500;font-size:48px;line-height:56px;text-transform:uppercase;color:#000000;margin:0;span{color:#993704;}}p{font-size:18px;font-family:Work Sans;margin:0;margin-bottom:30px;}.MuiGrid-item{display:flex;align-items:center;min-height:708px;}.image{width:100%;img{width:100%;}}.under_title{font-style:normal;font-weight:normal;font-size:32px;line-height:40px;text-transform:uppercase;color:#363636;}.bottom{padding-right:100px;margin-top:-400px;z-index:10;position:relative;}.top{margin-top:-200px;}@media (max-width:960px){margin-top:60px;.image{margin-top:60px;}.top{margin-top:0;}.bottom{padding-right:0;margin-top:60px;}.MuiGrid-item{min-height:auto;}}"]),h=i.ZP.div.withConfig({displayName:"Hero__Card"})(["padding:56px 48px;border-radius:0px;background-color:#f9f6f4;h2{font-style:normal;font-weight:600;font-size:24px;line-height:40px;text-transform:uppercase;color:#363636;margin-top:0;}p{color:#363636;font-family:Work Sans;font-style:normal;font-weight:normal;font-size:18px;line-height:32px;}"]);function p(){return(0,r.jsxs)(c,{children:[(0,r.jsx)(s.Z,{children:(0,r.jsxs)(o.Z,{container:!0,spacing:2,children:[(0,r.jsx)(o.Z,{item:!0,xs:12,md:6,children:(0,r.jsxs)("div",{className:"top",children:[(0,r.jsxs)("h1",{children:["Become a ",(0,r.jsx)("span",{children:"worldly"})," partner"]}),(0,r.jsx)("p",{style:{marginTop:20},children:"Tap into the emerging potential of remote workers and long-stay customers."}),(0,r.jsx)(a.Z,{target:"_blank",href:"https://share.hsforms.com/18Y4I9TkbQl68vJnxj8Swqgboy0c",children:"Apply here"})]})}),(0,r.jsx)(o.Z,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.Z,{src:"./images/partner/hero.png",alt:"Become a worldly partner"})})]})}),(0,r.jsx)(s.Z,{className:"bottom",children:(0,r.jsxs)(o.Z,{container:!0,spacing:2,children:[(0,r.jsx)(o.Z,{item:!0,xs:12,md:6,children:(0,r.jsx)("div",{children:(0,r.jsx)("h2",{className:"under_title",children:"Get access to a new customer group"})})}),(0,r.jsx)(o.Z,{item:!0,xs:12,md:6,children:(0,r.jsxs)(h,{children:[(0,r.jsx)("h2",{children:"Are you the owner of a hotel, looking for new revenue streams?"}),(0,r.jsx)("p",{children:"Become part of the \u201cWorldly\u201d network, list your unique hideaway for free and we help you acquiring a new customer group."}),(0,r.jsx)("p",{children:"We are looking to partner with boutique hotels in unique locations that offer all amenities that a modern remote worker requires."}),(0,r.jsx)(a.Z,{target:"_blank",href:"https://share.hsforms.com/18Y4I9TkbQl68vJnxj8Swqgboy0c",children:"Become a partner"})]})})]})})]})}var d=i.ZP.div.withConfig({displayName:"WhatWeOffer__Wrapper"})(["margin:140px auto;.MuiGrid-item{display:flex;align-items:center;}.image{width:100%;img{width:100%;}}.info--wrapper{max-width:600px;padding:60px;h2{font-style:normal;font-weight:normal;font-size:32px;line-height:40px;text-transform:uppercase;color:#363636;}ul{li{font-family:Work Sans;font-style:normal;font-weight:normal;font-size:18px;line-height:24px;color:#363636;margin-bottom:30px;}}}@media (max-width:960px){margin:60px auto;.info--wrapper{padding:30px;}}"]);function m(){return(0,r.jsx)(d,{children:(0,r.jsxs)(o.Z,{container:!0,spacing:0,children:[(0,r.jsx)(o.Z,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.Z,{src:"./images/partner/what-we-offer.png",alt:"What we offer"})}),(0,r.jsx)(o.Z,{item:!0,xs:12,md:6,children:(0,r.jsxs)("div",{className:"info--wrapper",children:[(0,r.jsx)("h2",{children:"What we offer"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Access to a unique crowd of modern travellers that further elevate the hotel's brand"}),(0,r.jsx)("li",{children:"Reduced operational costs: less housekeeping, less customer acquisition"}),(0,r.jsx)("li",{children:"Increased benefits: guaranteed long-term revenue"}),(0,r.jsx)("li",{children:"Increase of occupancy rate and flattening of occupancy curve"}),(0,r.jsx)("li",{children:"Easy listing options for long-term stays"}),(0,r.jsx)("li",{children:"Transparent commission base pricing -no hidden fees"}),(0,r.jsx)("li",{children:"An open and hands-on approach to tie customized packages to create a win-win-win"})]})]})})]})})}var x=i.ZP.div.withConfig({displayName:"WhatWeAreLookingFor__Wrapper"})(["position:relative;.MuiGrid-item{display:flex;align-items:center;}h2{font-style:normal;font-weight:normal;font-size:32px;line-height:40px;text-transform:uppercase;color:#000000;}@media (max-width:960px){h2{text-align:center;margin-bottom:0;}}"]),f=i.ZP.div.withConfig({displayName:"WhatWeAreLookingFor__Card"})(["background:#f9f6f4;padding:54px;height:100%;h4{font-family:Work Sans;font-style:normal;font-weight:500;font-size:18px;line-height:32px;color:#363636;}ul{margin:0;padding-left:20px;li{font-family:Work Sans;font-style:normal;font-weight:normal;font-size:16px;line-height:24px;color:#363636;}}"]);function u(){return(0,r.jsx)(x,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(o.Z,{container:!0,spacing:4,children:[(0,r.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,r.jsx)("h2",{children:"What we are looking for"})}),(0,r.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,r.jsxs)(f,{children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 6v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10zM5 5h10c1.1 0 2 .9 2 2v16l-7-3-7 3V7c0-1.1.9-2 2-2z",fill:"#993700"})})}),(0,r.jsx)("h4",{children:"The must haves"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:" Fast & stable Wifi"}),(0,r.jsx)("li",{children:"Comfortable workspace inside the room "}),(0,r.jsx)("li",{children:"An excellent customer service."}),(0,r.jsx)("li",{children:"Attractive long-stay rates (1+ months)"}),(0,r.jsx)("li",{children:"Inspiring surroundings and activities"})]})]})}),(0,r.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,r.jsxs)(f,{children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 6v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10zM5 5h10c1.1 0 2 .9 2 2v16l-7-3-7 3V7c0-1.1.9-2 2-2z",fill:"#993700"})})}),(0,r.jsx)("h4",{children:"The bonuses"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:" Pet friendly"}),(0,r.jsx)("li",{children:"Optional in-room kitchen or shared kitchen"}),(0,r.jsx)("li",{children:"F&B packages for long-term guests"}),(0,r.jsx)("li",{children:"Open working space outside the hotel room"}),(0,r.jsx)("li",{children:"Access to additional IT hardware (screens, adapters, ...)"})]})]})})]})})})}var g=i.ZP.div.withConfig({displayName:"FeelLike__Wrapper"})(['background-image:url("./images/partner/feel-like.png");background-position:center;background-size:cover;background-repeat:no-repeat;display:flex;align-items:center;justify-content:center;padding:60px 0;margin-top:140px;.card{max-width:1024px;padding:40px 100px;background-color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;padding-bottom:50px;h2{font-style:normal;font-weight:300;font-size:32px;line-height:40px;text-align:center;text-transform:uppercase;color:#202020;margin-top:0;span{color:#993700;}}}']);function j(){return(0,r.jsx)(g,{children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsxs)("h2",{children:["Feel like you want to be part of ",(0,r.jsx)("span",{children:"Worldly"}),"?"]}),(0,r.jsx)(a.Z,{color:"#000",target:"_blank",href:"https://share.hsforms.com/18Y4I9TkbQl68vJnxj8Swqgboy0c",children:"Become a partner"})]})})}var w=i.ZP.div.withConfig({displayName:"HowItWorks__Wrapper"})(["background:#f4f7f9;padding:120px 0;h2{font-style:normal;font-weight:normal;font-size:32px;line-height:40px;text-transform:uppercase;color:#000000;margin:0;text-align:center;}"]),b=i.ZP.div.withConfig({displayName:"HowItWorks__CardWrapper"})(["background-color:#fff;padding:30px;height:100%;.icon{margin-bottom:12px;}h6{font-family:Work Sans;font-style:normal;font-weight:500;font-size:18px;line-height:32px;color:#363636;margin:0;margin-bottom:26px;}p{font-family:Work Sans;font-style:normal;font-weight:normal;font-size:16px;line-height:24px;color:#363636;}"]);function y(e){var t=e.icon,n=e.title,i=e.description;return(0,r.jsxs)(b,{children:[(0,r.jsx)("div",{className:"icon",children:t}),(0,r.jsx)("h6",{children:n}),(0,r.jsx)("p",{children:i})]})}function v(){return(0,r.jsx)(w,{children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)("h2",{children:"how it works?"}),(0,r.jsxs)(o.Z,{container:!0,spacing:2,style:{marginTop:60},children:[(0,r.jsx)(o.Z,{item:!0,xs:12,md:3,children:(0,r.jsx)(y,{icon:(0,r.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.82 4H19c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-.14 0-.27-.01-.4-.03a2.008 2.008 0 01-1.44-1.19c-.1-.24-.16-.51-.16-.78V6c0-.28.06-.54.16-.77A2.008 2.008 0 014.6 4.04c.13-.03.26-.04.4-.04h4.18C9.6 2.84 10.7 2 12 2c1.3 0 2.4.84 2.82 2zM7 10V8h10v2H7zm10 4v-2H7v2h10zm-3 2H7v2h7v-2zM12 3.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM5 20h14V6H5v14z",fill:"#993700"})}),title:"Fill the form",description:"Complete the form and tell us why you are interested"})}),(0,r.jsx)(o.Z,{item:!0,xs:12,md:3,children:(0,r.jsx)(y,{icon:(0,r.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2zm2 14h14V4H4v14l2-2z",fill:"#993700"})}),title:"Let's chat",description:"We get in touch with you and discuss the details. If both sides feel comfortable, we start our collaboration."})}),(0,r.jsx)(o.Z,{item:!0,xs:12,md:3,children:(0,r.jsx)(y,{icon:(0,r.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12.675c0-5.52 4.48-10 10-10s10 4.48 10 10c0 3.7-2.01 6.92-5 8.65l-1-1.73c2.39-1.39 4-3.96 4-6.92 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.96 1.61 5.53 3.99 6.92l-1 1.73C4.01 19.595 2 16.375 2 12.675zm16 0c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zm-6-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",fill:"#993700"})}),title:"Get online",description:"Welcome! We onboard your hotel on your platform and off we go!"})}),(0,r.jsx)(o.Z,{item:!0,xs:12,md:3,children:(0,r.jsx)(y,{icon:(0,r.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M12.39 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",fill:"#993700"})}),title:"Earn money",description:"As soon as you are onboarded, we share your deal among our community. Over to you."})})]}),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:60},children:(0,r.jsx)(a.Z,{target:"_blank",href:"https://share.hsforms.com/18Y4I9TkbQl68vJnxj8Swqgboy0c",children:"Become a partner"})})]})})}var O=n(6432),Z=i.ZP.div.withConfig({displayName:"become-partner__Wrapper"})([""]);function k(){return(0,r.jsxs)(Z,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(m,{}),(0,r.jsx)(u,{}),(0,r.jsx)(j,{}),(0,r.jsx)(v,{}),(0,r.jsx)(O.Z,{})]})}},4744:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/become-partner",function(){return n(2187)}])}},function(e){e.O(0,[606,282,774,888,179],(function(){return t=4744,e(e.s=t);var t}));var t=e.O();_N_E=t}]);