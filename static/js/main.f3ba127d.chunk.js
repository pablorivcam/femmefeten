(this.webpackJsonpwebfotografia=this.webpackJsonpwebfotografia||[]).push([[0],{18:function(e,t,n){e.exports={hiddenTop:"header_hiddenTop__PJ7e_",fixedTop:"header_fixedTop__3cvwv",headerNavbar:"header_headerNavbar__1VomC",headerBanner:"header_headerBanner__2B9d0",banner:"header_banner__213qn",logo:"header_logo__13VgX",logoContainer:"header_logoContainer__2ONbe",hoverBtn:"header_hoverBtn__2w8jT",hoverImgBtn:"header_hoverImgBtn__fr1h0"}},22:function(e,t,n){e.exports={coolBtn:"coolbtn_coolBtn__2SiwR",coolBtnShape:"coolbtn_coolBtnShape__MStte",coolBtnText:"coolbtn_coolBtnText__2Nnuc",borderButtonAnimation:"coolbtn_borderButtonAnimation__CB95T",changeColor:"coolbtn_changeColor__1_6Ic"}},24:function(e,t,n){e.exports={videoContainer:"backgroundvid_videoContainer__2c7bm"}},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(1),c=n.n(a),i=n(31),r=n.n(i),s=n(32),l=n.n(s),d=(n(40),n.p,n(41),n(20)),j=n(8),h=n(3),b=n(4),u=n(6),m=n(5),p=(n(42),n(24)),O=n.n(p),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{className:O.a.videoContainer,children:Object(o.jsxs)("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:O.a.video,children:[Object(o.jsx)("source",{src:this.props.videoSource,type:"video/mp4"}),"Tu navegador no soporta la etiqueta video."]})})}}]),n}(a.Component),v=(n(43),n(15)),g=(n(44),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).clickEvent=e.clickEvent.bind(Object(v.a)(e)),e}return Object(b.a)(n,[{key:"clickEvent",value:function(){this.props.visorSesion.setImages([this.props.imagenes]),document.getElementById("visorSesion").classList.add("visible"),document.getElementById("home").addEventListener("click",(function(){document.getElementById("visorSesion").classList.remove("visible")}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"resumenItem",onClick:this.clickEvent,children:[Object(o.jsx)("div",{className:"resumenItemImage",style:{background:"url("+this.props.imagen+")"}}),Object(o.jsx)("div",{className:"resumenItemContent",children:Object(o.jsx)("h1",{children:this.props.nombre})})]})}}]),n}(a.Component)),x=(n.p,n.p,n.p,n.p,n.p,n.p+"static/media/portada.2ce4b861.jpg"),C=n.p+"static/media/ML9B1383.2a4064d9.jpg",_=n.p+"static/media/ML9B1374.711cb017.jpg",y=n.p+"static/media/ML9B1258.12990740.jpg",B=n.p+"static/media/ML9B1219.c9bc06a4.jpg",N=n.p+"static/media/ML9B1187.356f4255.jpg",S=n.p+"static/media/portada.48d67cbe.jpg",k=n.p+"static/media/ML9B0348.560d9f7e.jpg",T=n.p+"static/media/ML9B0354.f0272d1a.jpg",L=n.p+"static/media/ML9B0356.7333fa3e.jpg",E=n.p+"static/media/ML9B0380.b3a457d6.jpg",M=n.p+"static/media/ML9B0385.b1cee424.jpg",I=n.p+"static/media/portada.9acd6f61.jpg",w=n.p+"static/media/4_DSC9002.1344fc5c.jpg",q=n.p+"static/media/4_DSC9007.dbca7b7e.jpg",R=n.p+"static/media/4_DSC9017.8b2d35dd.jpg",A=n.p+"static/media/4_DSC9018.732b0e9e.jpg",W=function(){function e(){Object(h.a)(this,e)}return Object(b.a)(e,[{key:"getMap",value:function(){return[{nombre:"Bego Area",portada:x,imagenes:[C,_,y,B,N],ancho:50,alto:45,rowspan:1,colspan:1,aosEffect:"fade-up"},{nombre:"Judith Web",portada:I,imagenes:[w,q,R,A],ancho:40,alto:71,rowspan:2,colspan:1,aosEffect:"fade-left"},{nombre:"Daniela Aida",portada:S,imagenes:[k,T,L,E,M],ancho:50,alto:25,rowspan:1,colspan:1,aosEffect:"fade-right"}]}}]),e}(),P=(n(45),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"setImages",value:function(e){for(var t=0;t<e[0].length;t++)0!==t?document.getElementById("visorSesionContainer").innerHTML+='<img src="'+e[0][t]+'"/>':document.getElementById("visorSesionContainer").innerHTML='<img src="'+e[0][t]+'"/>'}},{key:"render",value:function(){return Object(o.jsx)("div",{id:"visorSesion",children:Object(o.jsx)("div",{id:"visorSesionContainer"})})}}]),n}(a.Component)),F=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).sesionMap={},e.visorSesion=new P,e.sesionMap=new W,e}return Object(b.a)(n,[{key:"getSesionContent",value:function(e){var t=this.sesionMap.getMap()[e];return Object(o.jsx)("td",{id:"sesionItem"+e,"data-aos":t.aosEffect,"data-aos-duration":"1000",rowSpan:t.rowspan,style:{width:t.ancho+"vw",height:t.alto+"vh"},children:Object(o.jsx)(g,{nombre:t.nombre,visorSesion:this.visorSesion,imagen:t.portada,itemId:"resumenItem01",imagenes:t.imagenes})})}},{key:"render",value:function(){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(P,{images:[]}),Object(o.jsxs)("section",{id:"resumen",children:[Object(o.jsx)("h1",{children:"Nuestros proyectos"}),Object(o.jsx)("div",{id:"resumenItems",children:Object(o.jsx)("table",{children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[this.getSesionContent(0),this.getSesionContent(1)]}),Object(o.jsx)("tr",{children:this.getSesionContent(2)})]})})})]})]})}}]),n}(a.Component),V=(n(46),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("section",{id:"nosotras",children:[Object(o.jsx)("div",{id:"nosotrasAnchor",className:"sectionAnchor"}),Object(o.jsx)("div",{id:"nosotrasTopContent"}),Object(o.jsxs)("div",{id:"nosotrasContent",children:[Object(o.jsx)("h1",{children:"Nosotras"}),Object(o.jsx)("div",{id:"nosotrasText",children:Object(o.jsx)("p",{children:"Hola! Somos Valeria y Carlota y nos dedicamos al mundo audiovisual por toda Galicia. En esta p\xe1gina puedes ver algunos de nuestros trabajos, tanto de fotograf\xeda como de v\xeddeo."})})]})]})}}]),n}(a.Component)),D=(n(47),n(50),n(12)),z=n(16),J=n(19),Y=n(33),H=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e,o){var a;return Object(h.a)(this,n),(a=t.call(this)).onSubmit=a.onSubmit.bind(Object(v.a)(a)),a.sending=!1,a}return Object(b.a)(n,[{key:"onSubmit",value:function(e){e.preventDefault(),this.sending||(this.sending=!0,document.getElementById("sendMessage").classList.add("visible"),document.getElementById("formularioContacto").reset(),this.sending=!1,document.getElementById("home").addEventListener("click",(function(){document.getElementById("sendMessage").classList.remove("visible")})))}},{key:"render",value:function(){return Object(o.jsxs)("section",{id:"contacto",children:[Object(o.jsx)("div",{id:"contactoContainer",children:Object(o.jsxs)("div",{id:"contactoContent",children:[Object(o.jsx)("h1",{children:"Cont\xe1ctanos"}),Object(o.jsx)("h2",{children:"Tienes un proyecto en mente? A qu\xe9 esperas para cont\xe1rnoslo!"}),Object(o.jsxs)("div",{id:"contactoInfo",children:[Object(o.jsxs)("div",{id:"staticContactoInfo",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(D.a,{icon:z.c})," +34 123 456 789"]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(D.a,{icon:z.b})," femmefeten@gmail.com"]}),Object(o.jsxs)("div",{id:"contactoRedesSociales",children:[Object(o.jsx)("a",{href:"#",children:Object(o.jsx)(D.a,{icon:J.a})}),Object(o.jsx)("a",{href:"#",children:Object(o.jsx)(D.a,{icon:J.b})})]})]}),Object(o.jsxs)("form",{id:"formularioContacto",className:"formularioContacto",onSubmit:this.onSubmit,children:[Object(o.jsx)("label",{children:"Nombre:"}),Object(o.jsx)("input",{id:"contactoFormNombre",type:"text",name:"nombre",placeholder:"Nombre y apellidos",required:!0}),Object(o.jsx)("label",{children:"Email:"}),Object(o.jsx)("input",{type:"email",name:"correo",placeholder:"Correo electr\xf3nico",required:!0}),Object(o.jsx)("label",{children:"Mensaje:"}),Object(o.jsx)("textarea",{id:"msg",name:"mensaje",required:!0}),Object(o.jsx)("input",{type:"submit",value:"Enviar",className:"wpcf7-form-control wpcf7-submit"})]})]})]})}),Object(o.jsx)("div",{id:"sendMessage",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:[Object(o.jsx)(D.a,{icon:Y.a}),Object(o.jsx)("br",{}),"Mensaje Enviado!"]}),Object(o.jsx)("p",{children:"Se ha enviado correctamente un correo electr\xf3nico a nuestra direcci\xf3n de correo. Pronto te responderemos!"})]})})]})}}]),n}(a.Component),U=(n(56),n.p+"static/media/logo2.2e68d268.jpeg"),G=n(10),K=n.n(G),X=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(o.jsx)("footer",{children:Object(o.jsx)("table",{children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{children:[Object(o.jsx)("img",{className:"logo",src:U,alt:"femmeFetenLogo"}),Object(o.jsx)("a",{className:"footerTableLink",href:"#",children:"Pablo Rivas Camino - \xa92020"}),Object(o.jsxs)("span",{className:"footerTableLink",children:[Object(o.jsx)(D.a,{icon:z.b}),"pablorivcam@gmail.com"]})]}),Object(o.jsxs)("td",{children:[Object(o.jsx)("span",{className:"footerTableTitle",children:"Enlaces"}),Object(o.jsx)(K.a,{href:"#home",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},className:"footerTableLink",children:"Inicio"}),Object(o.jsx)(K.a,{href:"#resumen",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},className:"footerTableLink",children:"Proyectos"}),"        ",Object(o.jsx)(K.a,{href:"#nosotras",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},className:"footerTableLink",children:"Nosotras"}),Object(o.jsx)(K.a,{href:"#contacto",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},className:"footerTableLink",children:"Contacto"})]}),Object(o.jsxs)("td",{children:[Object(o.jsx)("span",{className:"footerTableTitle",children:"Redes Sociales"}),Object(o.jsxs)("a",{className:"footerTableLink",href:"#",children:[Object(o.jsx)(D.a,{icon:J.b})," Instagram"]}),Object(o.jsxs)("a",{className:"footerTableLink",href:"#",children:[Object(o.jsx)(D.a,{icon:J.a})," Facebook"]})]})]})})})})}}]),n}(a.Component),$=n(18),Q=n.n($),Z=n.p+"static/media/logo.12dd5558.png",ee=n(22),te=n.n(ee),ne=(a.Component,function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(h.a)(this,n),e=t.call(this),window.addEventListener("scroll",(function(){if(null!=document.querySelector("#homeWrapper")){var e=window.scrollY<.9*document.querySelector("#homeWrapper").getBoundingClientRect().height;document.querySelector("header").className=e?Q.a.hiddenTop:Q.a.fixedTop}})),e}return Object(b.a)(n,[{key:"render",value:function(){return Object(o.jsx)("header",{className:Q.a.hiddenTop,children:Object(o.jsxs)("div",{className:Q.a.headerNavbar,children:[Object(o.jsx)(K.a,{href:"#home",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},children:"INICIO"}),Object(o.jsx)(K.a,{href:"#resumen",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},children:"PROYECTOS"}),Object(o.jsx)(K.a,{href:"#home",className:Q.a.logoContainer,children:Object(o.jsx)("img",{className:Q.a.logo,src:Z})}),Object(o.jsx)(K.a,{href:"#nosotras",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},children:"NOSOTRAS"}),Object(o.jsx)(K.a,{href:"#contacto",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},children:"CONTACTO"})]})})}}]),n}(a.Component)),oe=n(7),ae=n.n(oe),ce=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).collapsed=!0,e.initialized=!1,e.onCollapse=e.onCollapse.bind(Object(v.a)(e)),window.addEventListener("scroll",(function(){if(null!=document.querySelector("#homeWrapper")){var e=document.getElementsByTagName("body")[0].clientWidth>768&&window.scrollY<document.querySelector("#homeWrapper").getBoundingClientRect().height-document.querySelector("nav").getBoundingClientRect().height;document.querySelector("nav").className=e?ae.a.hiddenTop:ae.a.fixedTop}})),e}return Object(b.a)(n,[{key:"onCollapse",value:function(){this.collapsed=!this.collapsed,this.collapsed?(document.getElementById("collapseButton").classList.remove(ae.a.activeCollapesButon),document.getElementById("navbarContent").classList.remove(ae.a.uncollapsed)):(document.getElementById("collapseButton").classList.add(ae.a.activeCollapesButon),document.getElementById("navbarContent").classList.add(ae.a.uncollapsed))}},{key:"render",value:function(){return Object(o.jsxs)("nav",{children:[Object(o.jsx)("div",{className:ae.a.collapseButtonContainer,children:Object(o.jsx)("div",{id:"collapseButton",className:ae.a.collapseButton,onClick:this.onCollapse,children:Object(o.jsx)(D.a,{icon:z.a})})}),Object(o.jsxs)("div",{className:ae.a.collapseLogo,children:[Object(o.jsx)("img",{className:ae.a.logo,src:Z}),Object(o.jsx)("h1",{children:"Femme Fet\xe9n"})]}),Object(o.jsxs)("div",{id:"navbarContent",className:ae.a.headerNavbar,children:[Object(o.jsx)("div",{className:ae.a.headerNavbarLink,onClick:this.onCollapse,children:Object(o.jsx)(K.a,{href:"#home",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},children:"INICIO"})}),Object(o.jsx)("div",{className:ae.a.headerNavbarLink,onClick:this.onCollapse,children:Object(o.jsx)(K.a,{href:"#resumen",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},children:"PROYECTOS"})}),Object(o.jsx)(K.a,{id:ae.a.homeLink,href:"#home",className:ae.a.logoContainer,children:Object(o.jsx)("img",{className:ae.a.logo,src:Z})}),Object(o.jsx)("div",{className:ae.a.headerNavbarLink,onClick:this.onCollapse,children:Object(o.jsx)(K.a,{href:"#nosotras",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},children:"NOSOTRAS"})}),Object(o.jsx)("div",{className:ae.a.headerNavbarLink,onClick:this.onCollapse,children:Object(o.jsx)(K.a,{href:"#contacto",offset:function(){return Math.floor(document.querySelector("nav").getBoundingClientRect().height)},children:"CONTACTO"})})]})]})}}]),n}(a.Component),ie=n.p+"static/media/video01.7595ea52.MOV",re=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(ne,{}),Object(o.jsx)(ce,{}),Object(o.jsxs)("div",{id:"home",children:[Object(o.jsx)("div",{className:"homeContent",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"homeContentTitle",children:"FEMME FET\xc9N"}),Object(o.jsx)("span",{className:"homeContentSubtitle",children:"Estudio fotogr\xe1fico"})]})}),Object(o.jsx)("div",{className:"homeVideo",children:Object(o.jsx)(f,{videoSource:ie})}),Object(o.jsxs)("div",{id:"homeStaticContent",children:[Object(o.jsx)("div",{id:"homeWrapper"}),Object(o.jsx)(F,{}),Object(o.jsx)(V,{}),Object(o.jsx)(H,{}),Object(o.jsx)(X,{})]})]})]})}}]),n}(a.Component),se=(n(57),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(o.jsx)("nav",{className:ae.a.fixedTop,children:Object(o.jsxs)("div",{className:ae.a.headerNavbar,style:{justifyContent:"flex-end",width:"98%"},children:[Object(o.jsx)(d.b,{to:"/",children:"VOLVER"}),Object(o.jsx)(d.b,{to:"/",className:ae.a.logoContainer,children:Object(o.jsx)("img",{className:ae.a.logo,src:Z})})]})})}}]),n}(a.Component));a.Component;var le=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(d.a,{children:Object(o.jsx)(j.c,{children:Object(o.jsx)(j.a,{component:re})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(60);l.a.init(),r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(le,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports={hiddenTop:"navbar_hiddenTop__2O_Eg",fixedTop:"navbar_fixedTop__34ErS",headerNavbar:"navbar_headerNavbar__2zz_3",headerBanner:"navbar_headerBanner__30RJq",banner:"navbar_banner__3W7KU",logo:"navbar_logo__srP46",logoContainer:"navbar_logoContainer__1Baxl",hoverBtn:"navbar_hoverBtn__2grWR",collapseButtonContainer:"navbar_collapseButtonContainer__fjgus",collapseButton:"navbar_collapseButton__20_zb",activeCollapesButon:"navbar_activeCollapesButon__Phow4",collapseLogo:"navbar_collapseLogo__3uuMU",headerNavbarLink:"navbar_headerNavbarLink__1Wkxz",homeLink:"navbar_homeLink__2bAuP",uncollapsed:"navbar_uncollapsed__2sx9y"}}},[[61,1,2]]]);
//# sourceMappingURL=main.f3ba127d.chunk.js.map