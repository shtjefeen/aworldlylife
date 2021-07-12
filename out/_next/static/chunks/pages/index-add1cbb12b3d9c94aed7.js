(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6432:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(5893),i=n(7294),o=n(1749),s=n(3832),a=n(9163),l=n(612),c=n(5706),d=n(9659),p=n(7513),h=n(9501),m=n(282),u=n(6265);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=a.ZP.div.withConfig({displayName:"Input__Wrapper"})(["margin-bottom:15px;position:relative;label,input,span{display:block;}label{font-family:Work Sans;font-style:normal;font-weight:normal;font-size:14px;line-height:24px;text-transform:capitalize;color:#363636;}input{width:100%;background:#fafafa;border:1px solid #e6e6e6;box-sizing:border-box;padding:8px;height:40px;&:focus{outline:none;}}span{font-size:12px;color:red;position:absolute;left:0;bottom:-16px;}"]);function j(e){return(0,r.jsxs)(g,{children:[(0,r.jsx)("label",{htmlFor:e.name,children:e.label}),(0,r.jsx)("input",f({type:e.type?e.type:"text",name:e.name},e)),(0,r.jsx)("span",{children:e.error})]})}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=a.ZP.div.withConfig({displayName:"TextArea__Wrapper"})(["margin-bottom:15px;position:relative;label,textarea,span{display:block;}label{font-family:Work Sans;font-style:normal;font-weight:normal;font-size:14px;line-height:24px;text-transform:capitalize;color:#363636;}textarea{width:100%;background:#fafafa;border:1px solid #e6e6e6;box-sizing:border-box;padding:8px;min-height:120px;&:focus{outline:none;}}span{font-size:12px;color:red;position:absolute;left:0;bottom:-16px;}"]);function v(e){return(0,r.jsxs)(w,{children:[(0,r.jsx)("label",{htmlFor:e.name,children:e.label}),(0,r.jsx)("textarea",b({name:e.name},e)),(0,r.jsx)("span",{children:e.error})]})}var Z=n(4562),O=a.ZP.div.withConfig({displayName:"Form__Wrapper"})([""]);function k(){var e=(0,i.useState)(!1),t=e[0],n=e[1],o=(0,i.useState)(!1),s=o[0],a=o[1];return(0,r.jsx)(O,{children:(0,r.jsx)(p.J9,{initialValues:{name:"",email:"",subject:"",message:""},validationSchema:h.Ry().shape({name:h.Z_().required("Required"),email:h.Z_().email("Please enter a valid email").required("Required"),subject:h.Z_().required("Required"),message:h.Z_()}),onSubmit:function(e,t){emailjs.send("service_04jvxyr","default",e,"user_fpQ6HyT7RZAe3eIf0aQcY").then((function(e){t.setSubmitting(!1),n(!0)}),(function(e){t.setSubmitting(!1),a(!0)}))},children:function(e){var n=e.values,i=e.errors,o=e.touched,a=e.handleChange,l=e.handleBlur,c=e.handleSubmit,d=e.isSubmitting;return(0,r.jsxs)("form",{onSubmit:c,children:[s&&(0,r.jsx)(Z.Z,{style:{marginBottom:15},severity:"error",children:"Something went wrong! Please try again"}),t&&(0,r.jsx)(Z.Z,{style:{marginBottom:15},severity:"success",children:"Thank you for contacting us! We will be back to you as soon as possible"}),(0,r.jsx)(j,{type:"text",name:"name",label:"Name",onChange:a,onBlur:l,value:n.name,error:i.name&&o.name&&i.name}),(0,r.jsx)(j,{type:"email",name:"email",label:"Email",onChange:a,onBlur:l,value:n.email,error:i.email&&o.email&&i.email}),(0,r.jsx)(j,{type:"text",name:"subject",label:"Subject",onChange:a,onBlur:l,value:n.subject,error:i.subject&&o.subject&&i.subject}),(0,r.jsx)(v,{name:"message",label:"Message",onChange:a,onBlur:l,value:n.message,error:i.message&&o.message&&i.message}),(0,r.jsx)(m.Z,{color:"primary",variant:"contained",type:"submit",disabled:d,style:{marginTop:15},children:"Submit"})]})}})})}var _=a.ZP.div.withConfig({displayName:"Contact__Wrapper"})(["margin:144px auto;h1{font-weight:600;font-size:24px;text-transform:uppercase;color:#000000;margin-bottom:0;span{color:#993704;}}p{font-size:16px;font-family:Work Sans;margin:0;margin-bottom:15px;}.image{width:100%;img{width:100%;}}"]);function P(){return(0,r.jsx)(_,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(o.Z,{container:!0,spacing:10,children:[(0,r.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)("h1",{children:"Contact"}),(0,r.jsx)("p",{children:(0,r.jsx)(d.Z,{href:"mailto:tobias@aworldlylife.com",children:"tobias@aworldlylife.com"})}),(0,r.jsx)(k,{})]})}),(0,r.jsx)(o.Z,{item:!0,xs:12,md:8,children:(0,r.jsx)(l.Z,{src:"./images/contact.png",alt:"Contact us"})})]})})})}},612:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(6265),i=n(5893);n(7294);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",s(s({},e),{},{loading:"lazy"}))})}},5873:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),i=n(6265),o=n(8347),s=(n(7294),n(9163)),a=n(2481);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=(0,s.ZP)(a.Z).withConfig({displayName:"ArrowLink__Wrapper"})(["position:relative;> div{display:flex;align-items:center;}.text{color:",';font-size:20px;line-height:24px;text-transform:uppercase;position:relative;&:before{content:"";position:absolute;bottom:-10px;background-color:',";width:100%;height:3px;}}.icon{margin-left:15px;transition:0.3s ease-in-out;margin-top:3px;svg{fill:",";color:",";}}&:hover{text-decoration:none !important;.icon{transform:translateX(10px);}}"],(function(e){return e.color?e.color:"#993704"}),(function(e){return e.color?e.color:"#993704"}),(function(e){return e.color?e.color:"#993704"}),(function(e){return e.color?e.color:"#993704"}));function p(e){var t=e.children,n=(0,o.Z)(e,["children"]);return(0,r.jsx)(d,c(c({},n),{},{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text",children:t}),(0,r.jsx)("span",{className:"icon",children:(0,r.jsx)("svg",c(c({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:(0,r.jsx)("path",{d:"M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8z"})}))})]})}))}},5706:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=(n(7294),n(9163).ZP.div.withConfig({displayName:"TextDivider__Wrapper"})(["width:40px;height:4px;background-color:#000000;"]));function o(){return(0,r.jsx)(i,{})}},4884:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(5893),i=(n(7294),n(5706)),o=n(9163),s=n(3832),a=n(5873),l=o.ZP.div.withConfig({displayName:"Concept__Wrapper"})(["padding:140px 0;h2{font-weight:600;font-size:24px;line-height:40px;text-transform:uppercase;}p{max-width:800px;font-family:Work Sans;font-style:normal;font-weight:normal;font-size:18px;line-height:32px;span{color:#993700;}}"]);function c(){return(0,r.jsx)(l,{id:"concept",children:(0,r.jsxs)(s.Z,{style:{maxWidth:900},children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("h2",{children:"the concept"}),(0,r.jsxs)("p",{children:["We carefully select and curate unique locations for you. We partner with exclusive hotels and apartments for long-term stays (1+ months). They give you access to an inspiring environment with equally stimulating surroundings where you can ",(0,r.jsx)("span",{children:"work"}),","," ",(0,r.jsx)("span",{children:"live"})," and ",(0,r.jsx)("span",{children:"discover"}),". As a Worldly member, you get access to those favorable long-term deals."]}),(0,r.jsx)("p",{children:"Feel home everywhere with all the services and amenities you need to be productive, combined with a community to connect."}),(0,r.jsx)(a.Z,{target:"_blank",href:"https://share.hsforms.com/1AmySx7KrRDyn2MbTgkdSAgboy0c",children:"Join us"})]})})}var d=o.ZP.div.withConfig({displayName:"DiveIn__Wrapper"})(['background-image:url("./images/dive_in.png");background-position:center;background-size:cover;background-repeat:no-repeat;height:800px;display:flex;align-items:center;justify-content:center;.card{max-width:700px;padding:30px;background-color:#fff;font-weight:300;font-size:40px;line-height:64px;text-align:center;text-transform:uppercase;span{color:#993700;}}']);function p(){return(0,r.jsx)(d,{children:(0,r.jsxs)("div",{className:"card",children:["DIVE IN, LET GO AND START a ",(0,r.jsx)("span",{children:"worldly"})," life."]})})}var h=n(1749),m=n(612),u=o.ZP.div.withConfig({displayName:"Hero__Wrapper"})(["margin-top:60px;h1{font-weight:500;font-size:48px;line-height:56px;text-transform:uppercase;color:#000000;margin:0;span{color:#993704;}}p{font-size:18px;font-family:Work Sans;margin:0;margin-bottom:30px;}.MuiGrid-item{display:flex;align-items:center;}img{width:100%;}@media (max-width:960px){.image{margin-top:60px;}}"]);function x(){return(0,r.jsx)(u,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(h.Z,{container:!0,spacing:8,children:[(0,r.jsx)(h.Z,{item:!0,xs:12,md:7,children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:["we curate ",(0,r.jsx)("span",{children:"unique"})," locations for you. To work, live and discover."]}),(0,r.jsx)("p",{style:{marginTop:20},children:"Sign up today and get exclusive access to the Worldly universe."}),(0,r.jsx)(a.Z,{target:"_blank",href:"https://share.hsforms.com/1AmySx7KrRDyn2MbTgkdSAgboy0c",children:"Join us"})]})}),(0,r.jsx)(h.Z,{item:!0,xs:12,md:5,children:(0,r.jsx)(m.Z,{alt:"To work, live and discover.",src:"./images/hero.png"})})]})})})}var f=o.ZP.div.withConfig({displayName:"Intro__Wrapper"})(["padding:140px 0;h2{font-weight:600;font-size:24px;line-height:40px;text-transform:uppercase;}p{max-width:900px;font-family:Work Sans;font-style:normal;font-weight:normal;font-size:18px;line-height:32px;}"]);function g(){return(0,r.jsx)(f,{children:(0,r.jsxs)(s.Z,{style:{maxWidth:900},children:[(0,r.jsx)(i.Z,{}),(0,r.jsxs)("h2",{children:["Work and holiday \u2013 two words ",(0,r.jsx)("br",{})," that used to be contradictory"]}),(0,r.jsx)("p",{children:"Work used to be something that limited you from doing the things you wanted (travel, experience, socialise), rather than something that enabled you to do those things. Working in a different environment, a foreign culture, among inspiring people can be a tremendous creativity and productivity booster. We all have spaces where we feel most alive - whether it's a certain city, a farm or an island. All necessities are available on demand."}),(0,r.jsx)("p",{children:"We curate the most attractive long-stay deals for you with hotels around the world."})]})})}var j=o.ZP.div.withConfig({displayName:"TwoImages__Wrapper"})(["display:flex;align-items:center;margin-top:144px;.image{width:50%;img{width:100%;}}@media (max-width:960px){flex-direction:column;.image{width:100%;}}"]);function y(){return(0,r.jsxs)(j,{children:[(0,r.jsx)(m.Z,{src:"./images/image_one.png",alt:""}),(0,r.jsx)(m.Z,{src:"./images/image_two.png",alt:""})]})}var b=o.ZP.div.withConfig({displayName:"OurPromise__Wrapper"})(["h1{font-weight:500;font-size:24px;text-transform:uppercase;color:#000000;span{color:#993704;}}p{font-size:18px;font-family:Work Sans;margin:0;margin-bottom:30px;}.image{width:100%;img{width:100%;}}ul{li{font-family:Work Sans;font-style:normal;font-weight:normal;font-size:18px;line-height:32px;}}"]);function w(){return(0,r.jsx)(b,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(h.Z,{container:!0,spacing:10,children:[(0,r.jsx)(h.Z,{item:!0,xs:12,md:6,children:(0,r.jsx)(m.Z,{src:"./images/we_at_worldly.png",alt:"Our promise"})}),(0,r.jsx)(h.Z,{item:!0,xs:12,md:6,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("h1",{children:"OUR PROMISE"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Access to the best long-stay deals at unique locations around the world"}),(0,r.jsx)("li",{children:"Inspiring surroundings and activities"}),(0,r.jsx)("li",{children:"Pet friendly! \ud83d\ude09"})]}),(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["The perfect remote working infrastructure with all amenities you need",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Fast and stable Wifi connection"}),(0,r.jsx)("li",{children:"Comfortable workspace in- and outside the room"}),(0,r.jsx)("li",{children:"Access to local IT services including IT infrastructure (screen etc.)"})]})]})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Access to like-minded people: the Worldly community."}),(0,r.jsx)("li",{children:"Safe & easy -from booking to payment"})]})]})]})})]})})})}var v=o.ZP.div.withConfig({displayName:"Community__Wrapper"})(["margin:144px auto;h1{font-weight:500;font-size:24px;text-transform:uppercase;color:#000000;span{color:#993704;}}p{font-size:18px;font-family:Work Sans;margin:0;margin-bottom:30px;}.image{width:100%;img{width:100%;}}"]);function Z(){return(0,r.jsx)(v,{id:"community",children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(h.Z,{container:!0,spacing:10,children:[(0,r.jsx)(h.Z,{item:!0,xs:12,md:6,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("h1",{children:"The community"}),(0,r.jsx)("p",{children:"Worldly is a community of conscious travelers that appreciate the opportunities of the 21st century. We love to discover new places and get fresh inputs from exchanges with new, inspiring and ambitious people. The community is key to prosper, grow and jointly tackle the myriad challenges the world is facing. We give priority to cultural fit, personality and passion over skills, experience and degrees."}),(0,r.jsx)("p",{children:"Worldly connects you with like-minded individuals at our partner locations and at inspiring events throughout the year."})]})}),(0,r.jsx)(h.Z,{item:!0,xs:12,md:6,children:(0,r.jsx)(m.Z,{src:"./images/community.png",alt:"The community"})})]})})})}var O=o.ZP.div.withConfig({displayName:"AboutUs__Wrapper"})(["h1{font-weight:500;font-size:24px;text-transform:uppercase;color:#000000;span{color:#993704;}}p{font-size:18px;font-family:Work Sans;margin:0;margin-bottom:30px;}.image{width:100%;img{width:100%;}}"]);function k(){return(0,r.jsx)(O,{id:"about",children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(h.Z,{container:!0,spacing:10,children:[(0,r.jsx)(h.Z,{item:!0,xs:12,md:6,children:(0,r.jsx)(m.Z,{src:"./images/about_us.png",alt:"About us"})}),(0,r.jsx)(h.Z,{item:!0,xs:12,md:6,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("h1",{children:"About Us"}),(0,r.jsx)("p",{children:"We are a diverse team of conscious travelers that discovered the need for \u201cWorldly\u201d when we were looking for someone who is curating the most fascinating locations around the world, suited for remote work that gives us access to a unique community at the same time. We love to experiment around new lifestyles; on our own, as a couple or with our young family."}),(0,r.jsx)("p",{children:"Worldly\u2019s business is built by entrepreneurial individuals from tech, hospitality and travel. The guest will always come first and for them we hustle. By designing a single community where all members can each contribute to the success of Worldly, we engage each and every individual. Together we experience a journey towards our mission of changing the way people feel about work, life and travel."})]})})]})})})}var _=o.ZP.div.withConfig({displayName:"BecomeMember__Wrapper"})(["margin:144px auto;h1{font-weight:500;font-size:24px;text-transform:uppercase;color:#000000;span{color:#993704;}}p{font-size:18px;font-family:Work Sans;margin:0;margin-bottom:30px;}.image{width:100%;img{width:100%;}}"]);function P(){return(0,r.jsx)(_,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(h.Z,{container:!0,spacing:10,children:[(0,r.jsx)(h.Z,{item:!0,xs:12,md:6,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("h1",{children:"Become a member"}),(0,r.jsx)("p",{children:"Enjoy exclusive access to our offers - Join the waitlist today!"}),(0,r.jsx)(a.Z,{target:"_blank",href:"https://share.hsforms.com/1AmySx7KrRDyn2MbTgkdSAgboy0c",children:"Join Us"}),(0,r.jsxs)("p",{style:{marginTop:60},children:["What happens next? ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"You sign up and get on the waitlist. As soon as it is your turn, we share the hidden spots with you. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"You tell us where you want to go and we take care of the rest."]})]})}),(0,r.jsx)(h.Z,{item:!0,xs:12,md:6,children:(0,r.jsx)(m.Z,{src:"./images/member.png",alt:"Become a member"})})]})})})}var W=n(6432);function S(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(y,{}),(0,r.jsx)(g,{}),(0,r.jsx)(p,{}),(0,r.jsx)(c,{}),(0,r.jsx)(w,{}),(0,r.jsx)(Z,{}),(0,r.jsx)(k,{}),(0,r.jsx)(P,{}),(0,r.jsx)(W.Z,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4884)}])}},function(e){e.O(0,[606,282,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);