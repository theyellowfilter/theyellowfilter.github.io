(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},HmDX:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("vOnD"),i=n("bFe0"),c=n("qhky"),o=n("vrFN"),s=(n("EDuE"),n("jrVH")),m=n("0lfv"),u=l.c.div.withConfig({displayName:"Home__Container",componentId:"sc-1kjoakh-0"})(["display:flex;padding:5vw;flex-direction:",';justify-content:space-around;align-items:center;background:url("/images/all_circles.svg");'],(function(e){return e.theme.screens.md?"column":"row"})),d=l.c.div.withConfig({displayName:"Home__TextContainer",componentId:"sc-1kjoakh-1"})(["padding:5vw;"]),f=l.c.img.withConfig({displayName:"Home__Img",componentId:"sc-1kjoakh-2"})(["width:",";padding-bottom:",";"],(function(e){return e.theme.screens.md?"90%":"50vw"}),(function(e){return e.theme.screens.md?"8vw":"0vw"})),p=l.c.h1.withConfig({displayName:"Home__Heading",componentId:"sc-1kjoakh-3"})(['font-family:"Open Sans",sans-serif;color:',";font-weight:700;font-size:3rem;"],(function(e){return e.theme.colors.white})),g=l.c.p.withConfig({displayName:"Home__SubText",componentId:"sc-1kjoakh-4"})(['font-family:"Crimson Text",serif;font-weight:300;font-size:1.5rem;color:',";"],(function(e){return e.theme.colors.white})),E=function(){var e=Object(a.useState)(""),t=e[0],n=e[1];return Object(a.useEffect)((function(){m.a.storage().ref("landing_page/11.jpg").getDownloadURL().then((function(e){return n(e)}))}),[]),r.a.createElement(u,null,r.a.createElement(d,null,r.a.createElement(p,null,"Interior Decorations"),r.a.createElement(g,null,"[About us text goes here] Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi aut aperiam, fugit consectetur eveniet natus dicta iste non perferendis deserunt saepe harum! Perferendis sapiente veritatis, amet id nesciunt aspernatur."),r.a.createElement("br",null)),r.a.createElement(f,{src:t}))},h=n("6xyR"),w=n("cWnB"),b=l.c.div.withConfig({displayName:"OurServices__Container",componentId:"sc-1ji950x-0"})(["padding:5vw;"]),v=l.c.h1.withConfig({displayName:"OurServices__Heading",componentId:"sc-1ji950x-1"})(['font-family:"open sans",sans-serif;font-weight:700;text-align:center;']),y=l.c.div.withConfig({displayName:"OurServices__CardContainer",componentId:"sc-1ji950x-2"})(["display:flex;flex-direction:",";flex-wrap:wrap;justify-content:space-evenly;"],(function(e){return e.theme.screens.md?"column":"row"})),k=function(){return r.a.createElement(b,null,r.a.createElement("br",null),r.a.createElement(v,null,"Our Services"),r.a.createElement(y,null,r.a.createElement(h.a,{style:{margin:"1.5rem"}},r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Card Title"),r.a.createElement(h.a.Text,null,"Some quick example text to build on the ",r.a.createElement("br",null),"card title and make up the bulk of the card's content."),r.a.createElement(w.a,{variant:"primary"},"Go somewhere"))),r.a.createElement(h.a,{style:{margin:"1.5rem"}},r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Card Title"),r.a.createElement(h.a.Text,null,"Some quick example text to build on the ",r.a.createElement("br",null),"card title and make up the bulk of the card's content."),r.a.createElement(w.a,{variant:"primary"},"Go somewhere"))),r.a.createElement(h.a,{style:{margin:"1.5rem"}},r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Card Title"),r.a.createElement(h.a.Text,null,"Some quick example text to build on the ",r.a.createElement("br",null),"card title and make up the bulk of the card's content."),r.a.createElement(w.a,{variant:"primary"},"Go somewhere")))))},x=n("bTu8"),_=n("g0Ox"),O=n("Xchd"),j=n("ZXcA"),C=n("xqva"),S=n("Ndxo");n("X2ca");x.a.use([_.a,O.a,j.a]);var I=l.c.div.withConfig({displayName:"OurWorks__Container",componentId:"l2zttx-0"})(["padding:5vw;"]),P=l.c.h1.withConfig({displayName:"OurWorks__Heading",componentId:"l2zttx-1"})(['font-family:"Open Sans",sans-serif;font-weight:700;text-align:center;']),N=l.c.h4.withConfig({displayName:"OurWorks__Text",componentId:"l2zttx-2"})(['font-family:"Crimson Text",sans-serif;font-weight:400;text-align:center;padding:0 5vw 0 5vw;']),T=l.c.h2.withConfig({displayName:"OurWorks__SubHead",componentId:"l2zttx-3"})(['font-family:"Open Sans",sans-serif;font-weight:500;padding:1.5rem 0 1.5rem 0;']),B=l.c.img.withConfig({displayName:"OurWorks__Img",componentId:"l2zttx-4"})(["height:40vh;"]),A=function(){var e=Object(i.b)().screens,t=Object(a.useState)([]),n=t[0],l=t[1],c=Object(a.useState)([]),o=c[0],s=c[1],u=Object(a.useState)([]),d=u[0],f=u[1],p=Object(a.useState)([]),g=p[0],E=p[1],h=Object(a.useState)([]),w=h[0],b=h[1],v=Object(a.useState)([]),y=v[0],k=v[1];return Object(a.useEffect)((function(){m.a.storage().ref("interior_decorations/living_rooms").listAll().then((function(e){var t=e.items;Promise.all(t.map((function(e){return e.getDownloadURL()}))).then((function(e){l(e)}))})),m.a.storage().ref("interior_decorations/modular_kitchens").listAll().then((function(e){var t=e.items;Promise.all(t.map((function(e){return e.getDownloadURL()}))).then((function(e){s(e)}))})),m.a.storage().ref("interior_decorations/dining_rooms").listAll().then((function(e){var t=e.items;Promise.all(t.map((function(e){return e.getDownloadURL()}))).then((function(e){f(e)}))})),m.a.storage().ref("interior_decorations/bed_rooms").listAll().then((function(e){var t=e.items;Promise.all(t.map((function(e){return e.getDownloadURL()}))).then((function(e){E(e)}))})),m.a.storage().ref("interior_decorations/false_ceilings").listAll().then((function(e){var t=e.items;Promise.all(t.map((function(e){return e.getDownloadURL()}))).then((function(e){b(e)}))})),m.a.storage().ref("interior_decorations/floorings").listAll().then((function(e){var t=e.items;Promise.all(t.map((function(e){return e.getDownloadURL()}))).then((function(e){k(e)}))}))}),[]),r.a.createElement(I,null,r.a.createElement(P,null,"Our Works"),r.a.createElement(N,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fuga eveniet perspiciatis provident omnis necessitatibus laudantium odit debitis quisquam autem modi nostrum facere, mollitia nemo in, iusto consectetur iure accusantium!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,null,"Living Rooms"),r.a.createElement(C.a,{spaceBetween:50,slidesPerView:e.md?1:3,navigation:!0,pagination:{clickable:!0}},n.map((function(e){return r.a.createElement(S.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(B,{src:e})))}))),r.a.createElement("br",null),r.a.createElement(T,null,"Modular Kitchens"),r.a.createElement(C.a,{spaceBetween:50,slidesPerView:e.md?1:3,navigation:!0,pagination:{clickable:!0}},o.map((function(e){return r.a.createElement(S.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(B,{src:e})))}))),r.a.createElement("br",null),r.a.createElement(T,null,"Dining Rooms"),r.a.createElement(C.a,{spaceBetween:50,slidesPerView:e.md?1:3,navigation:!0,pagination:{clickable:!0}},d.map((function(e){return r.a.createElement(S.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(B,{src:e})))}))),r.a.createElement("br",null),r.a.createElement(T,null,"Bed Rooms"),r.a.createElement(C.a,{spaceBetween:50,slidesPerView:e.md?1:3,navigation:!0,pagination:{clickable:!0}},g.splice(0,10).map((function(e){return r.a.createElement(S.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(B,{src:e})))}))),r.a.createElement("br",null),r.a.createElement(T,null,"False Ceilings"),r.a.createElement(C.a,{spaceBetween:50,slidesPerView:e.md?1:2,navigation:!0,pagination:{clickable:!0}},w.map((function(e){return r.a.createElement(S.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(B,{src:e})))}))),r.a.createElement("br",null),r.a.createElement(T,null,"Floorings"),r.a.createElement(C.a,{spaceBetween:50,slidesPerView:e.md?1:3,navigation:!0,pagination:{clickable:!0}},y.map((function(e){return r.a.createElement(S.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(B,{src:e})))}))),r.a.createElement("br",null))},D=(n("6Uf2"),l.c.div.withConfig({displayName:"Feedbacks__Container",componentId:"sc-7a1poh-0"})(["display:flex;flex-direction:",';flex-wrap:wrap;background-image:url("/images/feedbackBG.svg");background-position:center;padding:7vw;'],(function(e){return e.theme.screens.md?"column":"row"}))),H=l.c.h1.withConfig({displayName:"Feedbacks__Head",componentId:"sc-7a1poh-1"})(['font-family:"Open Sans",sans-serif;font-weight:500;padding:',";"],(function(e){return e.theme.screens.md?"0 0 2rem 0":"0 10vw 0 0"})),R=function(){var e=Object(i.b)(),t=e.screens,n=e.colors,l=Object(a.useState)([]),c=l[0],o=l[1];return Object(a.useEffect)((function(){m.a.database().ref("/feedbacks").once("value").then((function(e){o(e.val().interior_decorations)}))}),[]),r.a.createElement(D,null,r.a.createElement(H,null,"Here's what our ",r.a.createElement("br",null),"customers say",r.a.createElement("br",null)," about us"),r.a.createElement(C.a,{spaceBetween:60,slidesPerView:3,style:{flex:1},direction:t.md?"vertical":"horizontal"},c.map((function(e){return r.a.createElement(S.a,null,r.a.createElement(h.a,{style:{backgroundColor:""+n.darkBlue,color:""+n.white,fontFamily:"Open Sans, sans-serif"}},r.a.createElement(h.a.Body,null,'"',e.text,'"'),r.a.createElement(h.a.Footer,null,e.author)))}))))},L=n("wEsm"),F=n("b2pr");t.default=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap",rel:"stylesheet"}),r.a.createElement("script",{src:"https://kit.fontawesome.com/f0e3875af3.js",crossorigin:"anonymous"})),r.a.createElement(o.a,{title:"The Yellow Filter"}),r.a.createElement(l.b,{theme:Object(i.a)()},r.a.createElement(s.a,null),r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(A,null),r.a.createElement(R,null),r.a.createElement(L.a,null),r.a.createElement("div",{id:"contact"},r.a.createElement(F.a,null))))}}}]);
//# sourceMappingURL=component---src-pages-interior-decorations-tsx-64e0931db1d41881689c.js.map