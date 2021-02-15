(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RP61:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("vOnD"),l=n("bFe0"),i=n("qhky"),c=n("vrFN"),s=(n("EDuE"),n("jrVH")),m=n("0lfv"),u=(n("WI49"),n("Zs65"),o.c.div.withConfig({displayName:"Home__Container",componentId:"sc-1vsegba-0"})(["display:flex;padding:5vw;flex-direction:",';justify-content:space-around;align-items:center;background:url("/images/all_circles.svg");'],(function(e){return e.theme.screens.md?"column":"row"}))),f=o.c.div.withConfig({displayName:"Home__TextContainer",componentId:"sc-1vsegba-1"})(["padding:5vw;"]),d=o.c.img.withConfig({displayName:"Home__Img",componentId:"sc-1vsegba-2"})(["width:",";padding-bottom:",";height:50vh;object-fit:cover;"],(function(e){return e.theme.screens.md?"90%":"25vw"}),(function(e){return e.theme.screens.md?"8vw":"0vw"})),h=o.c.h1.withConfig({displayName:"Home__Heading",componentId:"sc-1vsegba-3"})(['font-family:"Open Sans",sans-serif;color:',";font-weight:700;font-size:3rem;"],(function(e){return e.theme.colors.white})),p=o.c.p.withConfig({displayName:"Home__SubText",componentId:"sc-1vsegba-4"})(['font-family:"Crimson Text",serif;font-weight:300;font-size:1.5rem;color:',";"],(function(e){return e.theme.colors.white})),g=o.c.div.withConfig({displayName:"Home__ImageContainer",componentId:"sc-1vsegba-5"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-auto-rows:auto;grid-gap:1rem;flex:1;"]),E=function(){var e=Object(a.useState)(""),t=e[0],n=e[1],o=Object(a.useState)([]),l=o[0],i=o[1];Object(a.useEffect)((function(){m.a.storage().ref("fashion_photography/home").listAll().then((function(e){var t=e.items;Promise.all(t.map((function(e){return e.getDownloadURL()}))).then((function(e){i(e)}))})),m.a.database().ref("fashion_photography/Description").once("value").then((function(e){return n(e.val())}))}),[]);return r.a.createElement(u,null,r.a.createElement(f,null,r.a.createElement(h,null,"Fashion and Photography"),r.a.createElement(p,{dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("br",null)),r.a.createElement(g,null,l.map((function(e){return r.a.createElement(d,{src:e})}))))},v=n("KQm4"),b=n("bTu8"),w=n("g0Ox"),y=n("Xchd"),_=n("ZXcA"),x=n("0Xqd"),O=n("xqva"),j=n("Ndxo");n("X2ca");b.a.use([w.a,y.a,_.a,x.a]);var I=o.c.div.withConfig({displayName:"OurTeam__Container",componentId:"n97x61-0"})(["padding:5vw;"]),C=o.c.h1.withConfig({displayName:"OurTeam__Heading",componentId:"n97x61-1"})(['font-family:"Open Sans",sans-serif;font-weight:700;font-size:',";text-align:center;padding:2rem;"],(function(e){return e.theme.screens.mmd?"2.2rem":"3rem"})),k=o.c.h4.withConfig({displayName:"OurTeam__Text",componentId:"n97x61-2"})(['font-family:"Crimson Text",sans-serif;font-weight:400;text-align:',";padding:",";"],(function(e){return e.center?"center":"left"}),(function(e){return e.center?"0 5vw 0 5vw":"0"})),T=o.c.h2.withConfig({displayName:"OurTeam__SubHead",componentId:"n97x61-3"})(['font-family:"Open Sans",sans-serif;font-weight:700;padding:1.5rem 0 0rem 0;']),N=o.c.img.withConfig({displayName:"OurTeam__Img",componentId:"n97x61-4"})(["height:50vh;"]),P=function(){var e=Object(l.b)().screens,t=Object(a.useState)([]),n=t[0],o=t[1],i=Object(a.useState)([]),c=i[0],s=i[1],u=Object(a.useState)({}),f=u[0],d=u[1],h=Object(a.useState)([]),p=h[0],g=h[1];Object(a.useEffect)((function(){m.a.database().ref("fashion_photography/Model Descriptions").once("value").then((function(e){d(e.val())})),m.a.storage().ref("fashion_photography/models").listAll().then((function(e){e.prefixes.forEach((function(e,t){e.listAll().then((function(e){var n=e.items;Promise.all(n.map((function(e){return e.getDownloadURL()}))).then((function(e){o((function(n){return[].concat(Object(v.a)(n),[{urls:e,index:t}])}))}))}))}))})),m.a.database().ref("fashion_photography/Photographer Descriptions").once("value").then((function(e){return g(e.val())})),m.a.storage().ref("fashion_photography/photographers").listAll().then((function(e){e.prefixes.forEach((function(e,t){e.listAll().then((function(e){var n=e.items;Promise.all(n.map((function(e){return e.getDownloadURL()}))).then((function(e){s((function(n){return[].concat(Object(v.a)(n),[{urls:e,index:t}])}))}))}))}))}))}),[]);var E=function(e){return{__html:e}};return console.log(n),r.a.createElement(I,null,r.a.createElement(C,null,"Our Models"),r.a.createElement(k,{center:!0},"It can be difficult to articulate the power of style and fashion through words. Have a look at some of our official models and their portfolios."),r.a.createElement("br",null),r.a.createElement("br",null),n.map((function(t){var n=f[t.index];return null==n&&(n={name:"",summary:""}),r.a.createElement("div",null,r.a.createElement(T,null,n.name),r.a.createElement(k,{dangerouslySetInnerHTML:E(n.summary)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{spaceBetween:50,slidesPerView:e.lg?1:3,navigation:!0,pagination:{clickable:!0},autoplay:{delay:1500,disableOnInteraction:!1}},t.urls.map((function(e){return r.a.createElement(j.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(N,{src:e})))}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))})),r.a.createElement(C,null,"Our Photographers"),r.a.createElement(k,{center:!0},"There is one thing the photograph must contain, the humanity of the moment. Our photographers thrive to bring out the best of you in every single shot. ",r.a.createElement("br",null),"Here are the official Photographers of The Yellow Filter."),r.a.createElement("br",null),r.a.createElement("br",null),c.map((function(t){var n=p[t.index];return null==n&&(n={name:"",summary:""}),r.a.createElement("div",null,r.a.createElement(T,null,n.name),r.a.createElement(k,{dangerouslySetInnerHTML:E(n.summary)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{spaceBetween:50,slidesPerView:e.lg?1:2,navigation:!0,pagination:{clickable:!0},autoplay:{delay:1500,disableOnInteraction:!1}},t.urls.map((function(e){return r.a.createElement(j.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(N,{src:e})))}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))})))};b.a.use([w.a,y.a,_.a,x.a]);var S=o.c.div.withConfig({displayName:"EventsAndProjects__EPContainer",componentId:"oo5s69-0"})(["padding:",";"],(function(e){return e.theme.screens.md?"3vh":"7vh"})),A=o.c.div.withConfig({displayName:"EventsAndProjects__TextContainer",componentId:"oo5s69-1"})(["display:flex;flex-direction:column;align-content:",";width:",";"],(function(e){return e.theme.screens.sm?"center":"left"}),(function(e){return e.theme.screens.lg?"100%":"40vw"})),H=o.c.h1.withConfig({displayName:"EventsAndProjects__TextBig",componentId:"oo5s69-2"})(['font-family:"Open Sans",sans-serif;font-weight:700;font-size:',";text-align:",";display:inline-block;border:",";border-bottom:3px solid black;padding:",";"],(function(e){return e.theme.screens.md?"2rem":"2.3rem"}),(function(e){return e.theme.screens.md?"center":"left"}),(function(e){return e.theme.screens.md?"3px solid black":"none"}),(function(e){return e.theme.screens.md?"1.2rem":"0rem 0rem 1.2rem 0rem"})),D=o.c.h3.withConfig({displayName:"EventsAndProjects__TextSmall",componentId:"oo5s69-3"})(['font-family:"Crimson Text",serif;font-size:1.4rem;font-weight:400;text-align:',";margin:2rem 2rem 2rem 0;font-style:",";"],(function(e){return e.center?"center":"left"}),(function(e){return e.italic?"italic":"normal"})),F=o.c.div.withConfig({displayName:"EventsAndProjects__SwiperContainer",componentId:"oo5s69-4"})(["margin:",";"],(function(e){return e.theme.screens.md?"1.2rem":"0rem"})),L=o.c.div.withConfig({displayName:"EventsAndProjects__Icons",componentId:"oo5s69-5"})(["color:black;font-size:2rem;a{color:black;}a:hover{color:",";}i{padding:1.5rem 1.5rem 0rem 0rem;}"],(function(e){return e.theme.colors.black})),z=o.c.img.withConfig({displayName:"EventsAndProjects__Img",componentId:"oo5s69-6"})(["object-fit:contain;max-width:",";"],(function(e){return e.theme.screens.md?"80vw":"25vw"})),M=function(){var e=Object(a.useState)([]),t=e[0],n=e[1],o=Object(a.useState)([]),l=(o[0],o[1]);return Object(a.useEffect)((function(){m.a.storage().ref("fashion_photography/events_projects").listAll().then((function(e){var t=e.items.map((function(e){return e.getDownloadURL()}));Promise.all(t).then((function(e){n(e)}))})),m.a.database().ref("fashion_photography/Events and Projects").once("value").then((function(e){return l(e.val())}))}),[]),r.a.createElement(S,null,r.a.createElement(A,null,r.a.createElement(H,null,"Events and Projects"),r.a.createElement(D,null,"Have a look at some of our events and projects.",r.a.createElement("br",null),"Follow us on our instagram and facebook pages to have a look at our other collaborations.",r.a.createElement(L,null,r.a.createElement("a",{href:"https://www.instagram.com/the.yellow.filter",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"https://www.facebook.com/The-Yellow-Filter-104261981615307/"},r.a.createElement("i",{className:"fab fa-facebook"}))))),r.a.createElement(F,null,r.a.createElement(O.a,{spaceBetween:50,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:1500,disableOnInteraction:!1}},t.map((function(e){return r.a.createElement(j.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(z,{src:e})))})))))},R=n("wEsm"),q=n("b2pr");t.default=function(){return r.a.createElement(o.b,{theme:Object(l.a)()},r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap",rel:"stylesheet"}),r.a.createElement("script",{src:"https://kit.fontawesome.com/f0e3875af3.js",crossorigin:"anonymous"})),r.a.createElement(c.a,{title:"The Yellow Filter"}),r.a.createElement(o.b,{theme:Object(l.a)()},r.a.createElement(s.a,null),r.a.createElement(E,null),r.a.createElement("div",{id:"team"},r.a.createElement(P,null)),r.a.createElement("div",{id:"events"},r.a.createElement(M,null)),r.a.createElement("div",{id:"contact"},r.a.createElement(R.a,null)),r.a.createElement("div",{id:"footer"},r.a.createElement(q.a,null)))))}}}]);
//# sourceMappingURL=component---src-pages-fashion-photography-tsx-f29d295e04d318d3f4a9.js.map