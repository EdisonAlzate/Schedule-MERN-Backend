(this.webpackJsonpschedule=this.webpackJsonpschedule||[]).push([[0],{121:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),r=n.n(c),o=n(9),s=n(33),i=n(10),u=n(12),l=n.n(u),j=n(21),d=n(17),b=n.n(d),m="https://mern-schedule-edison.herokuapp.com/api",O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},f="[ui] Open modal",v="[ui] Close modal",h="[event] Set Active",x="[event] Logout event",g="[event] Add new",y="[event] Clear active event",N="[event]  event updated",w="[event] Event deleted",E="[event] Event Loaded",k="[auth] Finish checking login state",S="[auth] Login",C="[auth] Logout",D=n(5),T=n(19),P=n.n(T),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{end:P()(e.end).toDate(),start:P()(e.start).toDate()})}))},I=function(e){return{type:g,payload:e}},L=function(){return{type:y}},_=function(e){return{type:N,payload:e}},G=function(){return{type:w}},R=function(e){return{type:E,payload:e}},J=function(){return{type:k}},V=function(e){return{type:S,payload:e}},z=function(){return function(e){localStorage.clear(),e({type:x}),e(F())}},F=function(){return{type:C}},H=n(15),M=n(24),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(H.a)(t,2),c=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(D.a)(Object(D.a)({},c),{},Object(M.a)({},t.name,t.value)))};return[c,s,o]},X=(n(87),n(2)),q=function(){var e=Object(o.b)(),t=U({lEmail:"edisonalzate11@gmail.com",lPassword:"123456"}),n=Object(H.a)(t,2),a=n[0],c=n[1],r=a.lEmail,s=a.lPassword,i=U({rName:"edison tejada",rEmail:"edisontejada@gmail.com",rPassword1:"123456",rPassword2:"123456"}),u=Object(H.a)(i,2),d=u[0],m=u[1],p=d.rName,f=d.rEmail,v=d.rPassword1,h=d.rPassword2;return Object(X.jsx)("div",{className:"container login-container",children:Object(X.jsxs)("div",{className:"row",children:[Object(X.jsxs)("div",{className:"col-md-7 login-form-1",children:[Object(X.jsx)("h3",{children:"LOGIN"}),Object(X.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=r,a=s,function(){var e=Object(j.a)(l.a.mark((function e(t){var c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:r.uid,name:r.name}))):b.a.fire("Error",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:r,onChange:c})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:s,onChange:c})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(X.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(X.jsx)("h3",{children:"REGISTER"}),Object(X.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==h)return b.a.fire("Error","las contrase\xf1as deben de ser iguales","error");var n,a,c;console.log("?"),e((n=f,a=v,c=p,function(){var e=Object(j.a)(l.a.mark((function e(t){var r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:o.uid,name:o.name}))):b.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:p,onChange:m})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:f,onChange:m})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:m})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:h,onChange:m})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},B=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(X.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(X.jsx)("span",{className:"navbar-brand",children:e}),Object(X.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){t(z())},children:Object(X.jsx)("span",{children:" Exit"})})]})},W=n(51),K=(n(89),function(e){var t=e.event,n=t.title,a=t.user;return Object(X.jsxs)("div",{children:[Object(X.jsx)("span",{children:n}),Object(X.jsxs)("strong",{children:["-",a.name]})]})}),Q=n(46),Y=n.n(Q),Z=n(47),$=n.n(Z),ee=function(){return{type:f}},te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Y.a.setAppElement("#root");var ne=P()().minutes(0).seconds(0).add(1,"hours"),ae=ne.clone().add(1,"hours"),ce={title:"",notes:"",start:ne.toDate(),end:ae.toDate()},re=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(a.useState)(!1),c=Object(H.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(ne.toDate()),u=Object(H.a)(i,2),d=u[0],m=u[1],O=Object(a.useState)(ae.toDate()),f=Object(H.a)(O,2),h=f[0],x=f[1],g=Object(a.useState)(ce),y=Object(H.a)(g,2),N=y[0],w=y[1],E=Object(o.c)((function(e){return e.calendar})).activeEvent;Object(a.useEffect)((function(){w(E||ce)}),[E,w]);var k=N.title,S=N.notes,C=N.start,T=N.end,A=function(){e({type:v}),e(L()),w(ce)},G=function(e){var t=e.target;w(Object(D.a)(Object(D.a)({},N),{},Object(M.a)({},t.name,t.value)))};return console.log(t),Object(X.jsxs)(Y.a,{isOpen:t,onRequestClose:A,style:te,className:"modal",overlayClassName:"modal-fondo",children:[Object(X.jsxs)("h1",{children:[" ",E?"Edit Event":"New Event"]}),Object(X.jsx)("hr",{}),Object(X.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var n,a=P()(C),c=P()(T);return a.isSameOrAfter(c)?b.a.fire("Error","the date end should be up the date start","error"):k.trim().length<2?s(!1):(e(E?(n=N,function(){var e=Object(j.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(c=e.sent).ok?t(_(n)):b.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n,a){var c,r,o,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,p("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:r,name:o},console.log(e),n(I(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(N)),s(!0),void A())},children:[Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Date and hour start"}),Object(X.jsx)($.a,{onChange:function(e){m(e),w(Object(D.a)(Object(D.a)({},N),{},{start:e}))},value:d,className:"form-control"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Date and hour end"}),Object(X.jsx)($.a,{onChange:function(e){x(e),w(Object(D.a)(Object(D.a)({},N),{},{end:e}))},value:h,minDate:d,className:"form-control"})]}),Object(X.jsx)("hr",{}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Title and notes"}),Object(X.jsx)("input",{type:"text",className:"form-control ".concat(!r&&"is-invalid"),placeholder:"T\xedtle of event",name:"title",autoComplete:"off",value:k,onChange:G}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"A short description"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notes",rows:"5",name:"notes",value:S,onChange:G}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"More information"})]}),Object(X.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(X.jsx)("i",{className:"far fa-save"}),Object(X.jsx)("span",{children:" Save"})]})]})]})},oe=function(){var e=Object(o.b)();return Object(X.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ee())},children:Object(X.jsx)("i",{className:"fas fa-plus"})})},se=function(){var e=Object(o.b)();return Object(X.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t,n){var a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,p("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(G()):b.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(X.jsx)("i",{className:"fas fa-trash"}),Object(X.jsx)("span",{children:"Delete Event"})]})},ie=Object(W.b)(P.a),ue=function(){var e=Object(o.c)((function(e){return e.calendar})),t=e.events,n=e.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,r=Object(o.b)(),s=Object(a.useState)(localStorage.getItem("LastView")||"month"),i=Object(H.a)(s,2),u=i[0],d=i[1];Object(a.useEffect)((function(){r(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=A(a.eventos),t(R(c)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[r]);return Object(X.jsxs)("div",{className:"schedule-screen",children:[Object(X.jsx)(B,{}),Object(X.jsx)(W.a,{localizer:ie,events:t,startAccesor:"start",endAccessor:"end",onDoubleClickEvent:function(e){r(ee())},onSelectEvent:function(e){r({type:h,payload:e})},eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onView:function(e){d(e),localStorage.setItem("LastView",e)},onSelectSlot:function(e){r(L())},selectable:!0,view:u,components:{event:K}}),Object(X.jsx)(oe,{}),n&&Object(X.jsx)(se,{}),Object(X.jsx)(re,{})]})},le=n(36),je=["isAuthenticated","component"],de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,je);return Object(X.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(X.jsx)(n,Object(D.a)({},e)):Object(X.jsx)(i.a,{to:"/login"})}}))},be=["isAuthenticated","component"],me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,be);return Object(X.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(X.jsx)(i.a,{to:"/"}):Object(X.jsx)(n,Object(D.a)({},e))}}))},Oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(V({uid:a.uid,name:a.name}))):t(J());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),console.log(n),n?Object(X.jsx)("h5",{children:"Wait..."}):Object(X.jsx)(s.a,{children:Object(X.jsx)("div",{children:Object(X.jsxs)(i.d,{children:[Object(X.jsx)(me,{exact:!0,path:"/login",component:q,isAuthenticated:!!c}),Object(X.jsx)(de,{exact:!0,path:"/",component:ue,isAuthenticated:!!c}),Object(X.jsx)(i.a,{to:"/"})]})})})},pe=n(25),fe=n(65),ve={checking:!0},he=n(52),xe={events:[],activeEvent:null},ge={modalOpen:!1},ye=Object(pe.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!0});case v:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:t.payload});case g:return Object(D.a)(Object(D.a)({},e),{},{events:[].concat(Object(he.a)(e.events),[t.payload])});case y:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case N:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case w:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case E:return Object(D.a)(Object(D.a)({},e),{},{events:Object(he.a)(t.payload)});case x:return Object(D.a)({},xe);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(D.a)(Object(D.a)(Object(D.a)({},e),t.payload),{},{checking:!1});case k:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),Ne="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,we=Object(pe.d)(ye,Ne(Object(pe.a)(fe.a))),Ee=function(){return Object(X.jsx)(o.a,{store:we,children:Object(X.jsx)(Oe,{})})};n(121);r.a.render(Object(X.jsx)(Ee,{}),document.getElementById("root"))},87:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.4b0dc70d.chunk.js.map