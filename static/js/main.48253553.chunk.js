(this["webpackJsonpmikehohne.github.io"]=this["webpackJsonpmikehohne.github.io"]||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(75),a(76),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Hello World"))}),i=a(151),m=a(154),s=Object(i.a)((function(e){return{root:{display:"flex",justifyContent:"center",marginTop:e.spacing(5)}}})),u=function(e){var t=s();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:t.root,maxWidth:"md"},e.children))},f=a(33),p=a(155),h=a(156),d=a(157),E=a(125),v=a(158),g=a(27),x=a(39),b=a.n(x),j=Object(i.a)((function(e){return{root:{},toolBar:{display:"flex"},link:{color:"white",textDecoration:"none"},title:{alignSelf:"initial",flexGrow:1},time:{fontSize:"12px"}}})),k=function(){var e=j(),t=Object(p.a)("(max-width:768px)"),a=r.a.useState(b()(new Date).format("hh:mm a")),n=Object(f.a)(a,2),c=n[0],l=n[1];return r.a.useEffect((function(){var e=b()(new Date);return setInterval((function(){return l(e.format("hh:mm a"),3e3)})),function(){return clearInterval()}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:e.root,position:"static"},r.a.createElement(d.a,{className:e.toolBar},r.a.createElement(E.a,{className:e.title,variant:"h6"},r.a.createElement(g.b,{className:e.link,to:"/"},t?"MH":"Mike Hohne")),r.a.createElement(v.a,null,r.a.createElement(g.b,{className:e.link,to:"/portfolio"},"Portfolio")),r.a.createElement(v.a,null,r.a.createElement(g.b,{className:e.link,to:"/contact"},"Contact")),r.a.createElement("span",{className:e.time},c))))},w=a(21),N=a(160),C=a(124),y=a(161),O=a(159),F=Object(i.a)((function(e){return{root:{textAlign:"center"},link:{cursor:"pointer","&:hover":{textDecoration:"none"},padding:"4px"}}})),S=function(e){var t=e.project,a=e.handleClick;var n=F();return r.a.createElement("div",{className:n.root},r.a.createElement(O.a,{onClick:function(){a(t.id)},className:n.link},r.a.createElement(E.a,{variant:"h6"},t.title)),r.a.createElement("div",null,t.techs.map((function(e,t){return r.a.createElement(O.a,{key:e+t,onClick:function(){return window.open("https://google.com/search?q=".concat(e),"_blank")},className:n.link},e)}))))},W=Object(i.a)((function(e){return{root:{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"},paper:{minHeight:"300px",minWidth:"300px",margin:"10px"},listItem:{display:"flex",justifyContent:"center"}}})),B=[{title:"First",id:"first",techs:["javascript","nodejs"]},{title:"Second",id:"second",techs:["react","javascript"]},{title:"Third",id:"third",techs:["angular","javascript"]},{title:"Fourth",id:"fourth",techs:["react","javascript"]},{title:"Fifth",id:"fifth",techs:["c#"]}],M=function(e){var t=W();function a(t){e.history.push("/portfolio/".concat(t),{project:B.find((function(e){return e.id===t}))})}return r.a.createElement(N.a,{className:t.root},B.map((function(e){return r.a.createElement(C.a,{key:e.title,className:t.paper},r.a.createElement(y.a,{className:t.listItem},r.a.createElement(S,{handleClick:a,project:e})))})))},D=function(e){return r.a.createElement(M,e)},H=a(126),I=Object(H.a)((function(e){return{root:{padding:"10px",width:"100%",display:"flex",justifyContent:"center"}}})),T=function(e){var t=e.location.state.project,a=I();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement(E.a,{variant:"h4"},t.title)))},A=a(61),q=a(9),P=a(62),z=a(162),J=Object(H.a)((function(e){return{form:{minWidth:"350px"},root:{marginTop:"10px"},inputContainer:{width:"100%"},buttonContainer:{textAlign:"100%"},button:{width:"100%"}}})),K=function(e){var t=r.a.useRef(null),a=r.a.useState({email:"",message:""}),n=Object(f.a)(a,2),c=n[0],l=n[1],o=r.a.useState(!1),i=Object(f.a)(o,2),m=i[0],s=i[1],u=J();function p(e){var t=e.target,a=t.value,n=t.name;l(Object(P.a)({},c,Object(q.a)({},n,a)))}return r.a.useEffect((function(){t&&(t.current.email.value.length>0&&t.current.message.value.length>0?s(!0):s(!1))}),[c]),r.a.createElement("div",null,r.a.createElement("form",{className:u.form,ref:t},r.a.createElement("div",{className:u.root},r.a.createElement(z.a,{className:u.inputContainer,name:"email",autoComplete:"off",value:c.email,label:"Email",required:!0,variant:"outlined",onChange:p})),r.a.createElement("div",{className:u.root},r.a.createElement(z.a,{className:u.inputContainer,name:"message",value:c.message,label:"Message",required:!0,variant:"outlined",rows:"8",multiline:!0,onChange:p})),r.a.createElement("div",{className:u.root},r.a.createElement(v.a,{variant:"contained",color:"primary",className:u.button,disabled:!m||void 0,onClick:function(t){t.preventDefault(),e.client.sendMessage(392535675,"".concat(c.email," ").concat(c.message)).then((function(e){return l({email:"",message:""})}))}},"Send Message"))))},R=A.TelegramClient.connect("804236995:AAEoPM8BzKP6UKvVj6hnQHBE8twXf2dRFTE");var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(k,null),r.a.createElement(u,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:o}),r.a.createElement(w.a,{exact:!0,path:"/home",component:o}),r.a.createElement(w.a,{exact:!0,path:"/portfolio",component:D}),r.a.createElement(w.a,{exact:!0,path:"/contact",render:function(e){return r.a.createElement(K,Object.assign({},e,{client:R}))}}),r.a.createElement(w.a,{exact:!0,path:"/portfolio/:id",component:T})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,a){e.exports=a(122)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.48253553.chunk.js.map