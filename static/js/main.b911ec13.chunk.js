(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{110:function(e,a,t){},111:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),c=t(21),r=t.n(c),m=(t(40),t(17)),s=t(9),i=t(11),o=t(12),d=t(14),E=t(13),u=t(122),h=t(123),p=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(u.a,{scrolling:!0,dark:!0,expand:"md",fixed:"top",className:"navi"},n.a.createElement(u.a.Brand,{className:"naviii brand text-dark"},"RK"),n.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(h.a,null,n.a.createElement(m.c,{className:"navii let d-inline p-4 text-dark",to:"/"},"About"),n.a.createElement(m.c,{className:"navii let d-inline p-4 text-dark",to:"/Work"},"Work")))))}}]),t}(l.Component),b=t(28),v=t(19),N=t(116),g=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"expertice"},"MY ",n.a.createElement("span1",null,"DEXTERITY")),n.a.createElement("div",{className:"aligning"},n.a.createElement("div",{className:"leftbox"},n.a.createElement("header",{className:"title"},"UI ",n.a.createElement("span2",null,"TECHNOLOGIES")),n.a.createElement("br",null),n.a.createElement(N.a,{className:"lang"},"HTML")," ",n.a.createElement(N.a,{className:"lang"},"CSS")," ",n.a.createElement(N.a,{className:"lang"},"BOOTSRAP")," ",n.a.createElement(N.a,{className:"lang"},"JQUERY")," ",n.a.createElement(N.a,{className:"lang"},"REACT JS")),n.a.createElement("div",{className:"rightbox"},n.a.createElement("header",{className:"title"},"SC",n.a.createElement("span2",null,"RIPTING")),n.a.createElement("br",null),n.a.createElement(N.a,{className:"lang"},"JAVA")," ",n.a.createElement(N.a,{className:"lang"},"JAVASCRIPT")," ",n.a.createElement(N.a,{className:"lang"},"PHP"))),n.a.createElement("div",{className:"aligning"},n.a.createElement("div",{className:"leftbox"},n.a.createElement("header",{className:"title"},"DA",n.a.createElement("span2",null,"TABASE")),n.a.createElement("br",null),n.a.createElement(N.a,{className:"lang"},"My SQL")," ",n.a.createElement(N.a,{className:"lang"},"Oracle")," ",n.a.createElement(N.a,{className:"lang"},"Postgress")),n.a.createElement("div",{className:"rightbox"},n.a.createElement("header",{className:"title"},"CO",n.a.createElement("span2",null,"NCEPTS")),n.a.createElement("br",null),n.a.createElement(N.a,{className:"lang"},"DATABASE MANAGEMENT")," ",n.a.createElement(N.a,{className:"lang"},"OPERATING SYSTEM")," ",n.a.createElement(N.a,{className:"lang"},"DATA STRUCTERS"))))}}]),t}(l.Component),x=t(62),f=t.n(x),k=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"projectmain"},n.a.createElement("div",{className:"project"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"check"},"HAVE A LOOK AT MY"),n.a.createElement("div",{className:" block"},n.a.createElement(m.b,{to:"/Work"},n.a.createElement("i",{className:" hovicon effect-4 sub-b"},"Projects")))),n.a.createElement("div",{className:"project1"},n.a.createElement("div",{className:"maincontent"},"My ",n.a.createElement("span2",null,"Project")," Work"),n.a.createElement("div",{className:"secondarycontent"},"Create To Learn blah blah",n.a.createElement("br",null),n.a.createElement("img",{className:"pict",src:f.a,alt:"project"}))))}}]),t}(l.Component),y=t(63),j=t(64),T=t(117),O=t(118),w=t(119),C=t(120),S=t(121),A=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={name:"",email:"",subject:"",message:""},e.handleChange=function(a,t){e.setState(Object(y.a)({},a,t.target.value))},e}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t={from_name:a.email,to_name:"rishabkhanna27@gmail.com",subject:a.subject,message_html:a.message};j.send("gmail","template_S7HesOnZ",t,"user_GyBvh6DmcxUrbtxhIiDFO"),this.resetForm()}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(T.a,{onSubmit:this.handleSubmit.bind(this)},n.a.createElement(O.a,{controlId:"formBasicEmail"},n.a.createElement(w.a,{className:"text-muted"},"Email address"),n.a.createElement(C.a,{type:"email",name:"email",value:this.state.email,className:"text-primary",onChange:this.handleChange.bind(this,"email"),placeholder:"Enter email"})),n.a.createElement(O.a,{controlId:"formBasicName"},n.a.createElement(w.a,{className:"text-muted"},"Name"),n.a.createElement(C.a,{type:"text",name:"name",value:this.state.name,className:"text-primary",onChange:this.handleChange.bind(this,"name"),placeholder:"Name"})),n.a.createElement(O.a,{controlId:"formBasicSubject"},n.a.createElement(w.a,{className:"text-muted"},"Subject"),n.a.createElement(C.a,{type:"text",name:"subject",className:"text-primary",value:this.state.subject,onChange:this.handleChange.bind(this,"subject"),placeholder:"Subject"})),n.a.createElement(O.a,{controlId:"formBasicMessage"},n.a.createElement(w.a,{className:"text-muted"},"Message"),n.a.createElement(C.a,{type:"textarea",name:"message",className:"text-primary",value:this.state.message,onChange:this.handleChange.bind(this,"message"),placeholder:"Message"})),n.a.createElement(S.a,{className:"contactid",variant:"primary",type:"submit"},"Send Message"))))}}]),t}(l.Component),I=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"contact"},n.a.createElement("div",{className:"thirdone"},n.a.createElement("div",{className:"leftbox3"},"Always Open for",n.a.createElement("br",null),n.a.createElement("span7",null,"New "),"And ",n.a.createElement("br",null),n.a.createElement("span8",null," Intresting ")," ",n.a.createElement("br",null),"Ideas."),n.a.createElement("div",{className:"rightbox3"},n.a.createElement(A,null))))}}]),t}(l.Component),B=t(32),G=t(75),P=(t(110),function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("footer",{className:"footer-distributed"},n.a.createElement("div",{className:"footer-left"},n.a.createElement("h3",null,n.a.createElement("b",null,"Rishab ",n.a.createElement("span",null,"Khanna"))),n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("p",{className:"call"},n.a.createElement(v.a,{icon:b.d})," ","+91"," ","9876020239")),n.a.createElement("div",null,n.a.createElement("a",{className:"mail",href:"mailto:support@company.com"},n.a.createElement(v.a,{icon:b.a})," ","rishabkhanna27@gmail.com")),n.a.createElement("br",null)),n.a.createElement("div",{className:"footer-center"},n.a.createElement("div",{className:"contain icon"},n.a.createElement("ul",{className:"icon list-unstyled list-inline text-center text-dark"},n.a.createElement("li",{className:" logo list-inline-item "},n.a.createElement("div",null,n.a.createElement("a",{className:"linkbtn",href:"https://www.facebook.com/rishabkhanna27"},n.a.createElement(v.a,{icon:B.a,size:"3x"})," "))),n.a.createElement("li",{className:"logo list-inline-item"},n.a.createElement("div",null,n.a.createElement("a",{className:"linkbtn",href:"https://www.linkedin.com/in/rishabkhanna27/"},n.a.createElement(v.a,{icon:B.d,size:"3x"})," "))),n.a.createElement("li",{className:"logo list-inline-item"},n.a.createElement("div",null,n.a.createElement("a",{className:"linkbtn",href:"https://github.com/rishabkhanna27"},n.a.createElement(v.a,{icon:B.b,size:"3x"})," "))),n.a.createElement("li",{className:"logo list-inline-item"},n.a.createElement("div",null,n.a.createElement("a",{className:"linkbtn",href:"https://www.instagram.com/rishabkhanna.27/"},n.a.createElement(v.a,{icon:B.c,size:"3x"})," "))))))),n.a.createElement("div",{className:"foot footer-copyright text-center py-3"},n.a.createElement(G.c,{fluid:!0},"Made With ",n.a.createElement(v.a,{className:"heart",icon:b.b})," By ",n.a.createElement("a",{href:"https://github.com/rishabkhanna27"}," Rishab Khanna"))))}}]),t}(l.Component)),q=t(69),M=t.n(q),R=t(70),D=t.n(R),J=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"parallax"},n.a.createElement("div",{className:"text-container"},n.a.createElement("div",{className:"intro"},n.a.createElement("p",{className:"intro1"},"Rishab Khanna",n.a.createElement("p",{className:"create"},"I Create Some Awesome Projects")),n.a.createElement("div",{className:"intro2"},n.a.createElement("img",{className:"picture",src:D.a,alt:"imageing"}))),n.a.createElement("div",{className:"arrow bounce"},n.a.createElement("a",{href:"#start"},n.a.createElement(v.a,{icon:b.c,className:"arow",size:"5x"}))))),n.a.createElement("div",{id:"overview"},n.a.createElement("div",{id:"start",className:"start"},n.a.createElement("div",{className:"about"},n.a.createElement("span2",null,"ABOUT "),"ME"),n.a.createElement("div",{className:"right-box"},n.a.createElement("img",{className:"pic1",src:M.a,alt:"me"})),n.a.createElement("div",{className:"left-box"},n.a.createElement("div",{className:"aboutinfo"},"Voluptates modi dignissimos quibusdam, veritatis iste adipisci recusandae accusamus repellendus beatae laudantium, minus saepe. Dicta omnis similique incidunt corporis ipsa veniam cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus, tempore reprehenderit vero quis distinctio aut, ex debitis accusamus maiores inventore obcaecati facilis blanditiis, sapiente ullam cumque possimus consequatur autem!"))),n.a.createElement(g,null),n.a.createElement(k,null),n.a.createElement("div",{className:"parallax1"}),n.a.createElement(I,null),n.a.createElement(P,null)))}}]),t}(l.Component),W=t(71),L=t.n(W),Y=t(72),z=t.n(Y),F=t(73),H=t.n(F),K=t(74),U=t.n(K),_=t(124),V=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Work"},n.a.createElement("div",{className:"parallax2"},n.a.createElement("div",{className:"text-container"},n.a.createElement("div",{className:"intro"},n.a.createElement("p",{className:"intro1"},"MY PROJECTS",n.a.createElement("p",{className:"create"},"I Create blah blah blah")),n.a.createElement("div",{className:"intro2"},n.a.createElement("img",{className:"picture",src:L.a,alt:"imageing"})),n.a.createElement("div",{className:"car"},n.a.createElement("div",{class:"projectbutton2"},n.a.createElement(N.a,{href:"#head2",className:"btnn",variant:"info"},"Game",n.a.createElement("br",null),"Projects")),n.a.createElement("div",{class:"projectbutton1"},n.a.createElement(N.a,{href:"#head1",className:"btnn",variant:"info"},"Complete",n.a.createElement("br",null),"Projects")),n.a.createElement("div",{class:"projectbutton3"},n.a.createElement(N.a,{href:"#head3",className:"btnn",variant:"info"},"Base",n.a.createElement("br",null),"Projects")))))),n.a.createElement("div",{id:"overview"},n.a.createElement("div",{id:"head1",className:"complete1"},n.a.createElement("div",{className:"heading1"},"Complete Projects"),n.a.createElement("div",{class:"complet"},n.a.createElement("div",{className:"right-box1"},n.a.createElement("img",{className:"pictu",src:z.a,alt:"imageing"})),n.a.createElement("div",{className:"left-box1"},"2")),n.a.createElement("div",{class:"complet"},n.a.createElement("div",{className:"right-box1"},"1"),n.a.createElement("div",{className:"left-box1"},n.a.createElement("img",{className:"pictu",src:H.a,alt:"imageing"}))),n.a.createElement("div",{class:"complet"},n.a.createElement("div",{className:"right-box1"},n.a.createElement("img",{className:"pictu",src:U.a,alt:"imageing"})),n.a.createElement("div",{className:"left-box1"},"2"))),n.a.createElement("div",{className:"parallax3"}),n.a.createElement("div",{id:"head2",className:"game1"},n.a.createElement("div",{className:"heading2"},"Game Projects"),n.a.createElement("div",{class:"game2"},n.a.createElement(_.a,{style:{width:"20rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere")))),n.a.createElement("div",{class:"game3"},n.a.createElement(_.a,{style:{width:"20rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere")))),n.a.createElement("div",{class:"game4"},n.a.createElement(_.a,{style:{width:"20rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere"))))),n.a.createElement("div",{className:"parallax4"}),n.a.createElement("div",{id:"head3",className:"base1"},n.a.createElement("div",{className:"heading3"},"Base Projects"),n.a.createElement("div",{class:"base2"},n.a.createElement(_.a,{style:{width:"19rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere")))),n.a.createElement("div",{class:"base3"},n.a.createElement(_.a,{style:{width:"19rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere")))),n.a.createElement("div",{class:"base4"},n.a.createElement(_.a,{style:{width:"19rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere")))),n.a.createElement("div",{class:"base5"},n.a.createElement(_.a,{style:{width:"19rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere")))),n.a.createElement("div",{class:"base6"},n.a.createElement(_.a,{style:{width:"19rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere")))),n.a.createElement("div",{class:"base7"},n.a.createElement(_.a,{style:{width:"19rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere"))))),n.a.createElement("div",{className:"parallax5"}),n.a.createElement("div",{id:"head2",className:"game1"},n.a.createElement("div",{className:"heading2"},"Arduino Projects"),n.a.createElement("div",{class:"game2"},n.a.createElement(_.a,{style:{width:"20rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere")))),n.a.createElement("div",{class:"game3"},n.a.createElement(_.a,{style:{width:"20rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere")))),n.a.createElement("div",{class:"game4"},n.a.createElement(_.a,{style:{width:"20rem"}},n.a.createElement(_.a.Img,{variant:"top",src:"holder.js/100px200"}),n.a.createElement(_.a.Body,null,n.a.createElement(_.a.Title,null,"Card Title"),n.a.createElement(_.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement(N.a,{variant:"primary"},"Go somewhere"))))),n.a.createElement(P,null)))}}]),t}(l.Component);var Q=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(m.a,null,n.a.createElement("header",{className:"App-header"},n.a.createElement(p,null),n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/",component:J,exact:!0}),n.a.createElement(s.a,{path:"/Work",component:V})))))};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Q,null)),document.getElementById("root"))},40:function(e,a,t){},62:function(e,a,t){e.exports=t.p+"static/media/starti.fb23340f.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/me.4101e2ff.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/capture.efd4d356.svg"},71:function(e,a,t){e.exports=t.p+"static/media/work.9d204fb8.svg"},72:function(e,a,t){e.exports=t.p+"static/media/wash.64c939de.png"},73:function(e,a,t){e.exports=t.p+"static/media/cook.57c7368c.png"},74:function(e,a,t){e.exports=t.p+"static/media/music.e4a07a92.png"},76:function(e,a,t){e.exports=t(111)}},[[76,1,2]]]);
//# sourceMappingURL=main.b911ec13.chunk.js.map