(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QeBL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=n("bFe0"),c=n("qhky"),l=n("vrFN"),s=(n("EDuE"),n("jrVH")),u=n("0lfv"),m=(n("WI49"),o.c.div.withConfig({displayName:"Home__Container",componentId:"sc-1mu5guv-0"})(["display:flex;padding:5vw;flex-direction:",';justify-content:space-around;align-items:center;background:url("images/all_circles.svg");'],(function(e){return e.theme.screens.md?"column":"row"}))),d=o.c.div.withConfig({displayName:"Home__TextContainer",componentId:"sc-1mu5guv-1"})(["padding:5vw;"]),f=o.c.img.withConfig({displayName:"Home__Img",componentId:"sc-1mu5guv-2"})(["width:",";padding-bottom:",";"],(function(e){return e.theme.screens.md?"90%":"36vw"}),(function(e){return e.theme.screens.md?"8vw":"0vw"})),p=o.c.h1.withConfig({displayName:"Home__Heading",componentId:"sc-1mu5guv-3"})(['font-family:"Samarkan",sans-serif;color:',";font-weight:500;font-size:3rem;span{color:",";}"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.yellow})),h=o.c.p.withConfig({displayName:"Home__SubText",componentId:"sc-1mu5guv-4"})(['font-family:"Crimson Text",serif;font-weight:300;font-size:1.5rem;color:',";"],(function(e){return e.theme.colors.white})),b=o.c.div.withConfig({displayName:"Home__Icons",componentId:"sc-1mu5guv-5"})(["color:white;font-size:2rem;a{color:white;}a:hover{color:",";}i{padding:1.5rem 1.5rem 0rem 0rem;}"],(function(e){return e.theme.colors.white})),g=function(){var e=Object(r.useState)(""),t=e[0],n=e[1];return Object(r.useEffect)((function(){u.a.storage().ref("landing_page/logo.png").getDownloadURL().then((function(e){return n(e)}))}),[]),a.a.createElement(m,null,a.a.createElement(d,null,a.a.createElement(p,null,"the ",a.a.createElement("span",null,"yellow")," filter"),a.a.createElement(h,null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi aut aperiam, fugit consectetur eveniet natus dicta iste non perferendis deserunt saepe harum! Perferendis sapiente veritatis, amet id nesciunt aspernatur."),a.a.createElement(h,null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi aut aperiam, fugit consectetur eveniet natus dicta iste non perferendis deserunt saepe harum! Perferendis sapiente veritatis, amet id nesciunt aspernatur."),a.a.createElement(b,null,a.a.createElement("a",{href:"https://www.instagram.com/the_yellow_filter",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{className:"fab fa-instagram"})),a.a.createElement("a",{href:"#"},a.a.createElement("i",{className:"fab fa-facebook"}))),a.a.createElement("br",null)),a.a.createElement(f,{src:t}))},v=o.c.div.withConfig({displayName:"OurGoals__OurGoalsContainer",componentId:"sh8uvs-0"})(["padding:",";"],(function(e){return e.theme.screens.sm?"2rem":"10vh"})),w=o.c.h1.withConfig({displayName:"OurGoals__Heading",componentId:"sh8uvs-1"})(['font-family:"Open Sans",sans-serif;font-weight:700;text-align:center;']),E=o.c.p.withConfig({displayName:"OurGoals__Body",componentId:"sh8uvs-2"})(['font-family:"Crimson Text",serif;font-weight:400;font-size:1.4rem;line-height:1.6rem;text-align:center;padding-top:1.2rem;']),y=o.c.hr.withConfig({displayName:"OurGoals__HR",componentId:"sh8uvs-3"})(["text-align:center;height:1px;background-color:black;width:",";"],(function(e){return e.theme.screens.sm?"30%":"7%"})),x=function(){return a.a.createElement(v,null,a.a.createElement(w,null,"Our Goals"),a.a.createElement(y,null),a.a.createElement(E,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas in repellat animi. Iure, laboriosam iusto provident voluptate culpa eaque, praesentium doloribus voluptatem expedita architecto similique laborum quia reprehenderit quis voluptatum."))},O=n("wx14"),C=n("zLVn"),I=n("ZCiN");var _=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},S=n("Xyuu"),j=n("XcHJ");function N(e){var t,n,a=(t=e,(n=Object(r.useRef)(t)).current=t,n);Object(r.useEffect)((function(){return function(){return a.current()}}),[])}var k=Math.pow(2,31)-1;function T(){var e=Object(j.a)(),t=Object(r.useRef)();return N((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=k?t.current=setTimeout(r,a):function e(t,n,r){var a=r-Date.now();t.current=a<=k?setTimeout(n,a):setTimeout((function(){return e(t,n,r)}),k)}(t,r,Date.now()+a))},clear:n}}),[])}var q=n("TSYQ"),L=n.n(q),D=n("YECM"),P=n("dRu9"),R=n("17x9"),M=n.n(R),A=n("JCAc"),F=n("YdCC"),H=Object(F.a)("carousel-caption"),z=n("vUet"),G=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,o=e.bsPrefix,i=e.children,c=e.className,l=Object(C.a)(e,["as","bsPrefix","children","className"]),s=L()(c,Object(z.a)(o,"carousel-item"));return a.a.createElement(r,Object(O.a)({ref:t},l,{className:s}),i)}));G.displayName="CarouselItem";var B=G;function J(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}var U=n("dbZe"),X=n("z+q/"),K={bsPrefix:M.a.string,as:M.a.elementType,slide:M.a.bool,fade:M.a.bool,controls:M.a.bool,indicators:M.a.bool,activeIndex:M.a.number,onSelect:M.a.func,onSlide:M.a.func,onSlid:M.a.func,interval:M.a.number,keyboard:M.a.bool,pause:M.a.oneOf(["hover",!1]),wrap:M.a.bool,touch:M.a.bool,prevIcon:M.a.node,prevLabel:M.a.string,nextIcon:M.a.node,nextLabel:M.a.string},V={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var Y=a.a.forwardRef((function(e,t){var n=Object(A.a)(e,{activeIndex:"onSelect"}),o=n.as,i=void 0===o?"div":o,c=n.bsPrefix,l=n.slide,s=n.fade,u=n.controls,m=n.indicators,d=n.activeIndex,f=n.onSelect,p=n.onSlide,h=n.onSlid,b=n.interval,g=n.keyboard,v=n.onKeyDown,w=n.pause,E=n.onMouseOver,y=n.onMouseOut,x=n.wrap,j=n.touch,N=n.onTouchStart,k=n.onTouchMove,q=n.onTouchEnd,R=n.prevIcon,M=n.prevLabel,F=n.nextIcon,H=n.nextLabel,G=n.className,B=n.children,K=Object(C.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),V=Object(z.a)(c,"carousel"),Y=Object(r.useRef)(null),Q=Object(r.useState)("next"),Z=Q[0],W=Q[1],$=Object(r.useState)(!1),ee=$[0],te=$[1],ne=Object(r.useState)(d||0),re=ne[0],ae=ne[1];ee||d===re||(Y.current?W(Y.current):W((d||0)>re?"next":"prev"),l&&te(!0),ae(d||0)),Object(r.useEffect)((function(){Y.current&&(Y.current=null)}));var oe,ie=0;!function(e,t){var n=0;a.a.Children.forEach(e,(function(e){a.a.isValidElement(e)&&t(e,n++)}))}(B,(function(e,t){++ie,t===d&&(oe=e.props.interval)}));var ce=Object(S.a)(oe),le=Object(r.useCallback)((function(e){if(!ee){var t=re-1;if(t<0){if(!x)return;t=ie-1}Y.current="prev",f&&f(t,e)}}),[ee,re,f,x,ie]),se=Object(I.a)((function(e){if(!ee){var t=re+1;if(t>=ie){if(!x)return;t=0}Y.current="next",f&&f(t,e)}})),ue=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:ue.current,prev:le,next:se}}));var me=Object(I.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ue.current)&&se()})),de="next"===Z?"left":"right";_((function(){l||(p&&p(re,de),h&&h(re,de))}),[re]);var fe=V+"-item-"+Z,pe=V+"-item-"+de,he=Object(r.useCallback)((function(e){Object(X.a)(e),p&&p(re,de)}),[p,re,de]),be=Object(r.useCallback)((function(){te(!1),h&&h(re,de)}),[h,re,de]),ge=Object(r.useCallback)((function(e){if(g&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void le(e);case"ArrowRight":return e.preventDefault(),void se(e)}v&&v(e)}),[g,v,le,se]),ve=Object(r.useState)(!1),we=ve[0],Ee=ve[1],ye=Object(r.useCallback)((function(e){"hover"===w&&Ee(!0),E&&E(e)}),[w,E]),xe=Object(r.useCallback)((function(e){Ee(!1),y&&y(e)}),[y]),Oe=Object(r.useRef)(0),Ce=Object(r.useRef)(0),Ie=Object(r.useState)(!1),_e=Ie[0],Se=Ie[1],je=T(),Ne=Object(r.useCallback)((function(e){Oe.current=e.touches[0].clientX,Ce.current=0,j&&Se(!0),N&&N(e)}),[j,N]),ke=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?Ce.current=0:Ce.current=e.touches[0].clientX-Oe.current,k&&k(e)}),[k]),Te=Object(r.useCallback)((function(e){if(j){var t=Ce.current;if(Math.abs(t)<=40)return;t>0?le(e):se(e)}je.set((function(){Se(!1)}),b||void 0),q&&q(e)}),[j,le,se,je,b,q]),qe=null!=b&&!we&&!_e&&!ee,Le=Object(r.useRef)();Object(r.useEffect)((function(){var e,t;if(qe)return Le.current=window.setInterval(document.visibilityState?me:se,null!=(e=null!=(t=ce.current)?t:b)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}),[qe,se,ce,b,me]);var De=Object(r.useMemo)((function(){return m&&Array.from({length:ie},(function(e,t){return function(e){f&&f(t,e)}}))}),[m,ie,f]);return a.a.createElement(i,Object(O.a)({ref:ue},K,{onKeyDown:ge,onMouseOver:ye,onMouseOut:xe,onTouchStart:Ne,onTouchMove:ke,onTouchEnd:Te,className:L()(G,V,l&&"slide",s&&V+"-fade")}),m&&a.a.createElement("ol",{className:V+"-indicators"},J(B,(function(e,t){return a.a.createElement("li",{key:t,className:t===re?"active":void 0,onClick:De?De[t]:void 0})}))),a.a.createElement("div",{className:V+"-inner"},J(B,(function(e,t){var n=t===re;return l?a.a.createElement(P.e,{in:n,onEnter:n?he:void 0,onEntered:n?be:void 0,addEndListener:D.a},(function(t){return a.a.cloneElement(e,{className:L()(e.props.className,n&&"entered"!==t&&fe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&pe)})})):a.a.cloneElement(e,{className:L()(e.props.className,n&&"active")})}))),u&&a.a.createElement(a.a.Fragment,null,(x||0!==d)&&a.a.createElement(U.a,{className:V+"-control-prev",onClick:le},R,M&&a.a.createElement("span",{className:"sr-only"},M)),(x||d!==ie-1)&&a.a.createElement(U.a,{className:V+"-control-next",onClick:se},F,H&&a.a.createElement("span",{className:"sr-only"},H))))}));Y.displayName="Carousel",Y.propTypes=K,Y.defaultProps=V,Y.Caption=H,Y.Item=B;var Q=Y,Z=(n("Zs65"),o.c.div.withConfig({displayName:"OurCollaborations__CollaborationsContainer",componentId:"sc-15bbh3i-0"})(["display:flex;flex-direction:",";flex-wrap:wrap;padding:",";"],(function(e){return e.theme.screens.md?"column":"row"}),(function(e){return e.theme.screens.md?"3vh":"7vh"}))),W=o.c.div.withConfig({displayName:"OurCollaborations__TextContainer",componentId:"sc-15bbh3i-1"})(["display:flex;flex-direction:column;align-content:",";width:",""],(function(e){return e.theme.screens.sm?"center":"left"}),(function(e){return e.theme.screens.lg?"100%":"40vw"})),$=o.c.h1.withConfig({displayName:"OurCollaborations__TextBig",componentId:"sc-15bbh3i-2"})(['font-family:"Open Sans",sans-serif;font-weight:700;font-size:',";text-align:",";display:inline-block;border:",";border-bottom:2px solid black;padding:",";"],(function(e){return e.theme.screens.md?"2rem":"2.3rem"}),(function(e){return e.theme.screens.md?"center":"left"}),(function(e){return e.theme.screens.md?"2px solid black":"none"}),(function(e){return e.theme.screens.md?"1.2rem":"0rem 0rem 1.2rem 0rem"})),ee=o.c.h3.withConfig({displayName:"OurCollaborations__TextSmall",componentId:"sc-15bbh3i-3"})(['font-family:"Crimson Text",serif;font-size:1.4rem;font-weight:400;text-align:',";margin:2rem;font-style:",";"],(function(e){return e.center?"center":"left"}),(function(e){return e.italic?"italic":"normal"})),te=o.c.div.withConfig({displayName:"OurCollaborations__SwiperContainer",componentId:"sc-15bbh3i-4"})(["flex:1;margin:",";"],(function(e){return e.theme.screens.md?"2rem 0rem 0rem 0rem":"0rem 3rem 0rem 3rem"})),ne=o.c.div.withConfig({displayName:"OurCollaborations__Icons",componentId:"sc-15bbh3i-5"})(["color:black;font-size:2rem;a{color:black;}a:hover{color:",";}i{padding:1.5rem 1.5rem 0rem 0rem;}"],(function(e){return e.theme.colors.black})),re=function(){var e=Object(r.useState)([]),t=e[0],n=e[1],o=Object(r.useState)([]),i=o[0],c=o[1];return Object(r.useEffect)((function(){u.a.storage().ref("landing_page/collaborations").listAll().then((function(e){var t=e.items.map((function(e){return e.getDownloadURL()}));Promise.all(t).then((function(e){n(e)}))})),u.a.database().ref("collaborations").once("value").then((function(e){return c(e.val())}))}),[]),a.a.createElement(Z,null,a.a.createElement(W,null,a.a.createElement($,null,"Our Collaborations"),a.a.createElement(ee,{italic:!0,center:!0},'"Alone we can do little, ',a.a.createElement("br",null),' but together we can do so much" ',a.a.createElement("br",null),a.a.createElement("br",null)," ",a.a.createElement("span",null,"—")," Hellen Keller"),a.a.createElement(ee,null,"Lorem ipsum dolor sit amet consectetur,",a.a.createElement("br",null)," ducimus explicabo saepe harum dolores minus quaerat consequatur."),a.a.createElement(ee,null,"Follow us on our instagram and facebook pages to have a look at our other collaborations.",a.a.createElement(ne,null,a.a.createElement("a",{href:"https://www.instagram.com/the_yellow_filter",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{className:"fab fa-instagram"})),a.a.createElement("a",{href:"#"},a.a.createElement("i",{className:"fab fa-facebook"}))))),a.a.createElement(te,null,a.a.createElement(Q,null,t.map((function(e,t){return a.a.createElement(Q.Item,null,a.a.createElement("img",{className:"d-block w-100",src:e,alt:"First slide"}),a.a.createElement(Q.Caption,null,a.a.createElement("p",null,i[t])))})))))},ae=n("cWnB"),oe=o.c.div.withConfig({displayName:"InteriorDecorations__InteriorDecorationsContainer",componentId:"pf5n38-0"})(["display:flex;flex-direction:",";flex-wrap:wrap;padding:",";justify-content:space-between;align-items:center;"],(function(e){return e.theme.screens.md?"column-reverse":"row"}),(function(e){return e.theme.screens.md?"3vh":"7vh"})),ie=o.c.div.withConfig({displayName:"InteriorDecorations__Gallery",componentId:"pf5n38-1"})(["display:",";flex-direction:column;flex-wrap:wrap;grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(8,5vw);grid-gap:15px;width:",";padding:",";"],(function(e){return e.theme.screens.md?"flexbox":"grid"}),(function(e){return e.theme.screens.md?"90vw":"50vw"}),(function(e){return e.theme.screens.md?"1rem":"0rem"})),ce=o.c.div.withConfig({displayName:"InteriorDecorations__TextContainer",componentId:"pf5n38-2"})(["display:flex;flex-direction:column;flex-wrap:wrap;align-content:",";padding:",";"],(function(e){return e.theme.screens.sm?"center":"left"}),(function(e){return e.theme.screens.md?"1.3rem":"0rem"})),le=o.c.h1.withConfig({displayName:"InteriorDecorations__TextBig",componentId:"pf5n38-3"})(['font-family:"Open Sans",sans-serif;font-weight:700;font-size:',";text-align:",";display:inline-block;border:",";border-bottom:2px solid black;padding:",";"],(function(e){return e.theme.screens.md?"2rem":"2.3rem"}),(function(e){return e.theme.screens.md?"center":"left"}),(function(e){return e.theme.screens.md?"2px solid black":"none"}),(function(e){return e.theme.screens.md?"1.2rem":"0rem 0rem 1.2rem 0rem"})),se=o.c.h3.withConfig({displayName:"InteriorDecorations__TextSmall",componentId:"pf5n38-4"})(['font-family:"Crimson Text",serif;font-size:1.4rem;font-weight:400;margin:2rem 0rem 0rem 0rem;font-style:',";"],(function(e){return e.italic?"italic":"normal"})),ue=o.c.img.withConfig({displayName:"InteriorDecorations__Img",componentId:"pf5n38-5"})(["height:100%;width:100%;object-fit:cover;grid-column-start:",";grid-column-end:",";grid-row-start:",";grid-row-end:",";margin:",";"],(function(e){return e.colStart}),(function(e){return e.colEnd}),(function(e){return e.rowStart}),(function(e){return e.rowEnd}),(function(e){return e.theme.screens.md?"1rem 0rem 1rem 0rem":"0rem"})),me=function(){var e=Object(r.useState)([]),t=e[0],n=e[1];return Object(r.useEffect)((function(){u.a.storage().ref("landing_page/interior_decorations").listAll().then((function(e){var t=e.items;Promise.all(t.map((function(e){return e.getDownloadURL()}))).then((function(e){n(e)}))}))}),[]),a.a.createElement(oe,null,a.a.createElement(ie,null,a.a.createElement(ue,{src:t[0],colStart:"2",colEnd:"4",rowStart:"1",rowEnd:"5"}),a.a.createElement(ue,{src:t[1],colStart:"1",colEnd:"4",rowStart:"5",rowEnd:"7"}),a.a.createElement(ue,{src:t[2],colStart:"4",colEnd:"8",rowStart:"1",rowEnd:"3"}),a.a.createElement(ue,{src:t[3],colStart:"2",colEnd:"4",rowStart:"7",rowEnd:"9"}),a.a.createElement(ue,{src:t[4],colStart:"4",colEnd:"7",rowStart:"3",rowEnd:"7"}),a.a.createElement(ue,{src:t[5],colStart:"4",colEnd:"9",rowStart:"7",rowEnd:"9"})),a.a.createElement(ce,null,a.a.createElement(le,null,"Interior Decorations"),a.a.createElement(se,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",a.a.createElement("br",null),"In necessitatibus ea ullam placeat, neque consectetur voluptatum sint? ",a.a.createElement("br",null)," Incidunt animi possimus saepe nesciunt accusantium, vero, ",a.a.createElement("br",null)," excepturi soluta, quisquam aspernatur eaque et!"),a.a.createElement("br",null),a.a.createElement(se,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",a.a.createElement("br",null),"In necessitatibus ea ullam placeat, neque consectetur voluptatum sint? ",a.a.createElement("br",null)," Incidunt animi possimus saepe nesciunt accusantium, vero, ",a.a.createElement("br",null)," excepturi soluta, quisquam aspernatur eaque et!"),a.a.createElement("br",null),a.a.createElement(ae.a,{variant:"warning",style:{width:"10rem"},href:"/interior-decorations"},"Learn More")))},de=o.c.div.withConfig({displayName:"FashionAndPhotography__FPContainer",componentId:"sc-1qspvs4-0"})(["display:flex;flex-direction:",";flex-wrap:wrap;padding:",";justify-content:space-between;align-items:center;"],(function(e){return e.theme.screens.md?"column":"row"}),(function(e){return e.theme.screens.md?"3vh":"7vh"})),fe=o.c.div.withConfig({displayName:"FashionAndPhotography__Gallery",componentId:"sc-1qspvs4-1"})(["display:",";flex-direction:column;flex-wrap:wrap;grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(8,5vw);grid-gap:15px;width:",";padding:",";"],(function(e){return e.theme.screens.md?"flexbox":"grid"}),(function(e){return e.theme.screens.md?"90vw":"50vw"}),(function(e){return e.theme.screens.md?"1rem":"0rem"})),pe=o.c.div.withConfig({displayName:"FashionAndPhotography__TextContainer",componentId:"sc-1qspvs4-2"})(["display:flex;flex-direction:column;flex-wrap:wrap;align-content:",";padding:",";"],(function(e){return e.theme.screens.sm?"center":"left"}),(function(e){return e.theme.screens.md?"1.3rem":"0rem"})),he=o.c.h1.withConfig({displayName:"FashionAndPhotography__TextBig",componentId:"sc-1qspvs4-3"})(['font-family:"Open Sans",sans-serif;font-weight:700;font-size:',";text-align:",";display:inline-block;border:",";border-bottom:2px solid black;padding:",";"],(function(e){return e.theme.screens.md?"2rem":"2.3rem"}),(function(e){return e.theme.screens.md?"center":"left"}),(function(e){return e.theme.screens.md?"2px solid black":"none"}),(function(e){return e.theme.screens.md?"1.2rem":"0rem 0rem 1.2rem 0rem"})),be=o.c.h3.withConfig({displayName:"FashionAndPhotography__TextSmall",componentId:"sc-1qspvs4-4"})(['font-family:"Crimson Text",serif;font-size:1.4rem;font-weight:400;margin:2rem 0rem 0rem 0rem;font-style:',";"],(function(e){return e.italic?"italic":"normal"})),ge=o.c.img.withConfig({displayName:"FashionAndPhotography__Img",componentId:"sc-1qspvs4-5"})(["height:100%;width:100%;object-fit:cover;grid-column-start:",";grid-column-end:",";grid-row-start:",";grid-row-end:",";margin:",";"],(function(e){return e.colStart}),(function(e){return e.colEnd}),(function(e){return e.rowStart}),(function(e){return e.rowEnd}),(function(e){return e.theme.screens.md?"1rem 0rem 1rem 0rem":"0rem"})),ve=function(){var e=Object(r.useState)([]),t=e[0],n=e[1];return Object(r.useEffect)((function(){u.a.storage().ref("landing_page/fashion_photography").listAll().then((function(e){var t=e.items;Promise.all(t.map((function(e){return e.getDownloadURL()}))).then((function(e){n(e)}))}))}),[]),a.a.createElement(de,null,a.a.createElement(pe,null,a.a.createElement(he,null,"Fashion and Photography"),a.a.createElement(be,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",a.a.createElement("br",null),"In necessitatibus ea ullam placeat, neque consectetur voluptatum sint? ",a.a.createElement("br",null)," Incidunt animi possimus saepe nesciunt accusantium, vero, ",a.a.createElement("br",null)," excepturi soluta, quisquam aspernatur eaque et!"),a.a.createElement("br",null),a.a.createElement(be,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",a.a.createElement("br",null),"In necessitatibus ea ullam placeat, neque consectetur voluptatum sint? ",a.a.createElement("br",null)," Incidunt animi possimus saepe nesciunt accusantium, vero, ",a.a.createElement("br",null)," excepturi soluta, quisquam aspernatur eaque et!"),a.a.createElement("br",null),a.a.createElement(ae.a,{variant:"warning",style:{width:"10rem"},href:"/fashion-photography"},"Learn More")),a.a.createElement(fe,null,a.a.createElement(ge,{src:t[0],colStart:"2",colEnd:"4",rowStart:"1",rowEnd:"5"}),a.a.createElement(ge,{src:t[1],colStart:"1",colEnd:"4",rowStart:"5",rowEnd:"9"}),a.a.createElement(ge,{src:t[3],colStart:"4",colEnd:"8",rowStart:"1",rowEnd:"3"}),a.a.createElement(ge,{src:t[5],colStart:"4",colEnd:"7",rowStart:"3",rowEnd:"7"}),a.a.createElement(ge,{src:t[4],colStart:"4",colEnd:"9",rowStart:"7",rowEnd:"9"})))},we=n("wEsm"),Ee=n("b2pr");t.default=function(){return a.a.createElement("div",null,a.a.createElement(c.a,null,a.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap",rel:"stylesheet"}),a.a.createElement("script",{src:"https://kit.fontawesome.com/f0e3875af3.js",crossorigin:"anonymous"})),a.a.createElement(l.a,{title:"The Yellow Filter"}),a.a.createElement(o.b,{theme:Object(i.a)()},a.a.createElement(s.a,null),a.a.createElement(g,null),a.a.createElement("div",{id:"our-goals"},a.a.createElement(x,null)),a.a.createElement("div",{id:"our-collaborations"},a.a.createElement(re,null)),a.a.createElement(me,null),a.a.createElement(ve,null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(we.a,null),a.a.createElement("div",{id:"contact"},a.a.createElement(Ee.a,null))))}},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5a822d14e4529171b6de.js.map