(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{140:function(e,t,a){},141:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),s=(a(140),a(40)),o=a(18),l=a(23),j=a(17),d=a(13),b=(a(141),a(4)),u=a(210),h=a(20),m=a(237),O=a(235),x=a(236),p=a(225),f=a(228),g=a(59),v=a(238),y=a(223),w=a(105),C=a.n(w),k=a(106),N=a.n(k),S=a(107),W=a.n(S),F=a(224),B=a(239),q=a(56),A=a.n(q),P=a(16),I=a.n(P),U=a(30),D=a(5),E=a(219),R=a(222),T=a(209),z=a(218),L=a(220),H=a(221),J=a(77),M=a(211),G=a(240),Z=a(212),K=a(243),Q=a(213),V=a(217),X=a(215),Y=a(216),$=a(214),_=a(170),ee=a(75),te=a.n(ee),ae=a(76),ne=a.n(ae),ce=a(104),re=a.n(ce),ie=a(73),se=a.n(ie),oe=a(31),le=a.n(oe),je=a(2),de=c.a.forwardRef((function(e,t){return Object(je.jsx)(_.a,Object(l.a)({direction:"up",ref:t},e))})),be=Object(D.a)((function(e){return{head:{backgroundColor:e.palette.primary.dark,color:e.palette.common.white},body:{fontSize:14}}}))(T.a),ue=Object(u.a)({table:{minWidth:700}});var he=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),s=i[0],l=i[1],d=Object(n.useState)(null),b=Object(o.a)(d,2),u=b[0],h=b[1],m=Object(n.useState)(0),O=Object(o.a)(m,2),x=O[0],p=O[1],f=Object(n.useState)(3),v=Object(o.a)(f,2),w=v[0],C=v[1],k=function(){var e=Object(U.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.a.get("https://my-json-server.typicode.com/dhavalmakwana1998/crud/users/");case 2:t=e.sent,c(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(U.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!1),e.next=3,le.a.delete("https://my-json-server.typicode.com/dhavalmakwana1998/crud/users/".concat(t));case 3:e.sent,h(null),k();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){k()}),[]);var S=ue();return Object(je.jsx)(je.Fragment,{children:Object(je.jsxs)(M.a,{container:!0,children:[Object(je.jsxs)(M.a,{container:!0,spacing:3,style:{marginBottom:"6px"},children:[Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(g.a,{variant:"h4",children:"Users"})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(G.a,{align:"right",children:Object(je.jsx)(j.b,{to:"/user/add",children:Object(je.jsx)(Z.a,{color:"secondary",variant:"contained",startIcon:Object(je.jsx)(se.a,{}),children:"Add User"})})})})]}),Object(je.jsxs)(Q.a,{open:s,TransitionComponent:de,keepMounted:!0,onClose:function(){l(!1)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(je.jsx)($.a,{style:{color:"red"},id:"alert-dialog-slide-title",children:"Are you sure you want to delete this record?"}),Object(je.jsx)(X.a,{children:Object(je.jsx)(Y.a,{color:"secondary",id:"alert-dialog-slide-description",children:"Record will be deleted permanet..!"})}),Object(je.jsxs)(V.a,{children:[Object(je.jsx)(Z.a,{onClick:function(){l(!1)},color:"primary",children:"Disagree"}),Object(je.jsx)(Z.a,{onClick:function(){N(u)},color:"secondary",children:"Agree"})]})]}),Object(je.jsx)(z.a,{component:J.a,children:Object(je.jsxs)(E.a,{className:S.table,stickyHeader:!0,"aria-label":"sticky table",children:[Object(je.jsx)(L.a,{children:Object(je.jsxs)(H.a,{children:[Object(je.jsx)(be,{align:"center",children:"#ID"}),Object(je.jsx)(be,{children:"Full Name"}),Object(je.jsx)(be,{children:"Userame"}),Object(je.jsx)(be,{children:"Email"}),Object(je.jsx)(be,{children:"City"}),Object(je.jsx)(be,{children:"Zipcode"}),Object(je.jsx)(be,{children:"Action"})]})}),Object(je.jsxs)(R.a,{children:[a.length?a.slice(x*w,x*w+w).map((function(e,t){return Object(je.jsxs)(H.a,{children:[Object(je.jsx)(T.a,{align:"center",component:"th",scope:"row",children:t+1}),Object(je.jsx)(T.a,{children:e.name}),Object(je.jsx)(T.a,{children:e.username}),Object(je.jsx)(T.a,{children:e.email}),Object(je.jsx)(T.a,{children:e.city}),Object(je.jsx)(T.a,{children:e.phone}),Object(je.jsxs)(T.a,{children:[Object(je.jsx)(y.a,{children:Object(je.jsx)(j.b,{to:"/user/".concat(e.id),children:Object(je.jsx)(re.a,{color:"primary"})})}),Object(je.jsx)(y.a,{children:Object(je.jsx)(j.b,{to:"/user/edit/".concat(e.id),children:Object(je.jsx)(te.a,{style:{color:"#ff9800"}})})}),Object(je.jsx)(y.a,{onClick:function(){return t=e.id,h(t),void l(!0);var t},children:Object(je.jsx)(ne.a,{color:"secondary"})})]})]},t+1)})):Object(je.jsx)(H.a,{children:Object(je.jsx)(T.a,{rowSpan:7,children:"No records found"})}),a.length?Object(je.jsx)(K.a,{rowsPerPageOptions:[3,5,7,10,15,20],count:a.length,rowsPerPage:w,page:x,onPageChange:function(e,t){p(t)},onRowsPerPageChange:function(e){C(e.target.value),p(0)}}):Object(je.jsx)(je.Fragment,{})]})]})})]})})},me=a(229),Oe=a(230),xe=a(233),pe=a(232),fe=a(231),ge=a(55),ve=a.n(ge),ye=c.a.forwardRef((function(e,t){return Object(je.jsx)(_.a,Object(l.a)({direction:"up",ref:t},e))})),we=Object(u.a)({root:{maxWidth:600,margin:"auto"},media:{height:140}});var Ce=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(d.g)().id,i=Object(d.f)(),s=Object(n.useState)(!1),l=Object(o.a)(s,2),b=l[0],u=l[1],h=Object(n.useState)(null),m=Object(o.a)(h,2),O=m[0],x=m[1],p=function(){var e=Object(U.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!1),e.next=3,le.a.delete("https://my-json-server.typicode.com/dhavalmakwana1998/crud/users".concat(t));case 3:e.sent,x(null),i.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(U.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.a.get("https://my-json-server.typicode.com/dhavalmakwana1998/crud/users/".concat(r));case 2:return t=e.sent,e.t0=c,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=we();return Object(je.jsx)(je.Fragment,{children:Object(je.jsxs)("div",{className:"container",children:[Object(je.jsxs)(Q.a,{open:b,TransitionComponent:ye,keepMounted:!0,onClose:function(){u(!1)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(je.jsx)($.a,{style:{color:"red"},id:"alert-dialog-slide-title",children:"Are you sure you want to delete this record?"}),Object(je.jsx)(X.a,{children:Object(je.jsx)(Y.a,{color:"secondary",id:"alert-dialog-slide-description",children:"Record will be deleted permanet..!"})}),Object(je.jsxs)(V.a,{children:[Object(je.jsx)(Z.a,{onClick:function(){u(!1)},color:"primary",children:"Disagree"}),Object(je.jsx)(Z.a,{onClick:function(){p(O)},color:"secondary",children:"Agree"})]})]}),Object(je.jsxs)(me.a,{className:f.root,children:[Object(je.jsxs)(Oe.a,{children:[Object(je.jsx)(fe.a,{className:f.media,image:"https://picsum.photos/seed/picsum/700/500",title:"Contemplative Reptile"}),a&&Object(je.jsxs)(pe.a,{children:[Object(je.jsxs)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[a.name," ",Object(je.jsx)("span",{children:"\u2022"})," ",a.username]}),Object(je.jsxs)(g.a,{gutterBottom:!0,variant:"h6",color:"error",children:[a.email," ",Object(je.jsx)("span",{children:"\u2022"})," ",a.website," ",Object(je.jsx)("span",{children:"\u2022"}),a.phone]}),Object(je.jsx)(g.a,{gutterBottom:!0,variant:"body1",children:a.city}),Object(je.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"p",children:a.bio})]})]}),Object(je.jsxs)(xe.a,{children:[Object(je.jsx)(j.b,{to:"/user",children:Object(je.jsx)(Z.a,{size:"small",variant:"contained",startIcon:Object(je.jsx)(ve.a,{}),children:"Back"})}),Object(je.jsx)(j.b,{to:"/user/add",children:Object(je.jsx)(Z.a,{size:"small",variant:"contained",color:"primary",startIcon:Object(je.jsx)(se.a,{}),children:"Add"})}),Object(je.jsx)(Z.a,{size:"small",variant:"contained",startIcon:Object(je.jsx)(te.a,{}),style:{background:"#ff9800"},children:"Edit"}),Object(je.jsx)(Z.a,{style:{marginLeft:"auto"},size:"small",variant:"contained",color:"secondary",startIcon:Object(je.jsx)(ne.a,{}),onClick:function(){return e=a.id,x(e),void u(!0);var e},children:"Delete"})]})]})]})})},ke=a(244),Ne=a(242),Se=a(234),We=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var Fe=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:"",website:"",city:"",bio:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(d.f)(),i=We(),b=function(e){var t=e.target.name,n=e.target.value;c(Object(l.a)(Object(l.a)({},a),{},Object(s.a)({},t,n)))},u=function(){var e=Object(U.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),le.a.post("https://my-json-server.typicode.com/dhavalmakwana1998/crud/users/",a),r.push("/");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(je.jsx)(je.Fragment,{children:Object(je.jsxs)("div",{className:"container",children:[Object(je.jsxs)(M.a,{container:!0,spacing:3,style:{marginBottom:"6px"},children:[Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(g.a,{variant:"h4",children:"Add User"})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(G.a,{align:"right",children:Object(je.jsx)(j.b,{to:"/",children:Object(je.jsx)(Z.a,{color:"secondary",variant:"contained",startIcon:Object(je.jsx)(ve.a,{}),children:"Back"})})})})]}),Object(je.jsxs)(Se.a,{maxWidth:"md",children:[Object(je.jsx)(O.a,{}),Object(je.jsxs)("div",{className:i.paper,children:[Object(je.jsx)(ke.a,{className:i.avatar,children:Object(je.jsx)(A.a,{})}),Object(je.jsx)(g.a,{children:"User Add"}),Object(je.jsxs)("form",{className:i.form,onSubmit:u,children:[Object(je.jsxs)(M.a,{container:!0,spacing:2,children:[Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{name:"name",value:a.name,variant:"outlined",required:!0,fullWidth:!0,id:"name",onChange:b,label:"Full Name",autoFocus:!0})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",value:a.username,onChange:b})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:a.email,onChange:b,autoComplete:"email"})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{variant:"outlined",required:!0,fullWidth:!0,name:"phone",value:a.phone,onChange:b,label:"Phone number",id:"phone"})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{variant:"outlined",required:!0,fullWidth:!0,name:"website",value:a.website,onChange:b,label:"Website",id:"website"})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{variant:"outlined",required:!0,fullWidth:!0,name:"city",value:a.city,onChange:b,label:"City",id:"city"})}),Object(je.jsx)(M.a,{item:!0,sm:12,children:Object(je.jsx)(Ne.a,{id:"bio",label:"Bio",multiline:!0,required:!0,fullWidth:!0,name:"bio",rows:3,variant:"outlined",value:a.bio,onChange:b})})]}),Object(je.jsx)(Z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Add"})]})]})]})]})})},Be=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var qe=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:"",website:"",city:"",bio:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(d.g)().id,i=Object(d.f)(),b=Be(),u=function(e){var t=e.target.name,n=e.target.value;c(Object(l.a)(Object(l.a)({},a),{},Object(s.a)({},t,n)))},h=function(){var e=Object(U.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),le.a.put("https://my-json-server.typicode.com/dhavalmakwana1998/crud/users/".concat(r)),i.push("/");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(U.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.a.get("https://my-json-server.typicode.com/dhavalmakwana1998/crud/users/".concat(t));case 2:return a=e.sent,e.t0=c,e.next=6,a.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(r)}),[]),Object(je.jsx)(je.Fragment,{children:Object(je.jsxs)("div",{className:"container",children:[Object(je.jsxs)(M.a,{container:!0,spacing:3,style:{marginBottom:"6px"},children:[Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(g.a,{variant:"h4",children:"Edit User"})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(G.a,{align:"right",children:Object(je.jsx)(j.b,{to:"/",children:Object(je.jsx)(Z.a,{color:"secondary",variant:"contained",startIcon:Object(je.jsx)(ve.a,{}),children:"Back"})})})})]}),Object(je.jsxs)(Se.a,{maxWidth:"md",children:[Object(je.jsx)(O.a,{}),Object(je.jsxs)("div",{className:b.paper,children:[Object(je.jsx)(ke.a,{className:b.avatar,children:Object(je.jsx)(A.a,{})}),Object(je.jsx)(g.a,{children:"User Add"}),Object(je.jsxs)("form",{className:b.form,onSubmit:h,children:[Object(je.jsxs)(M.a,{container:!0,spacing:2,children:[Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{name:"name",value:a.name,variant:"outlined",required:!0,fullWidth:!0,id:"name",onChange:u,label:"Full Name",autoFocus:!0})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",value:a.username,onChange:u})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:a.email,onChange:u,autoComplete:"email"})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{variant:"outlined",required:!0,fullWidth:!0,name:"phone",value:a.phone,onChange:u,label:"Phone number",id:"phone"})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{variant:"outlined",required:!0,fullWidth:!0,name:"website",value:a.website,onChange:u,label:"Website",id:"website"})}),Object(je.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(je.jsx)(Ne.a,{variant:"outlined",required:!0,fullWidth:!0,name:"city",value:a.city,onChange:u,label:"City",id:"city"})}),Object(je.jsx)(M.a,{item:!0,sm:12,children:Object(je.jsx)(Ne.a,{id:"bio",label:"Bio",multiline:!0,required:!0,fullWidth:!0,name:"bio",rows:3,variant:"outlined",value:a.bio,onChange:u})})]}),Object(je.jsx)(Z.a,{type:"submit",fullWidth:!0,variant:"contained",style:{backgroundColor:"#ff9800"},className:b.submit,children:"Update"})]})]})]})]})})},Ae=240,Pe=Object(u.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(Ae,"px)"),marginLeft:Ae,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:Ae,flexShrink:0},drawerPaper:{width:Ae},drawerHeader:Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"space-between"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},icon:{minWidth:"30px"},bgPrimary:{backgroundColor:"#3f51b5",color:"#FFF"}}}));var Ie=function(){var e=Pe(),t=Object(h.a)(),a=Object(n.useState)(!0),c=Object(o.a)(a,2),r=c[0],i=c[1];return Object(je.jsx)(j.a,{children:Object(je.jsx)("div",{className:"App",children:Object(je.jsxs)("div",{className:e.root,children:[Object(je.jsx)(O.a,{}),Object(je.jsx)(x.a,{position:"fixed",className:Object(b.a)(e.appBar,Object(s.a)({},e.appBarShift,r)),children:Object(je.jsxs)(p.a,{children:[Object(je.jsx)(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(b.a)(e.menuButton,r&&e.hide),children:Object(je.jsx)(C.a,{})}),Object(je.jsx)(g.a,{variant:"h6",noWrap:!0,children:"ReactJs Crud Opearation"})]})}),Object(je.jsxs)(m.a,{className:e.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:e.drawerPaper},children:[Object(je.jsxs)("div",{className:"".concat(e.bgPrimary," ").concat(e.drawerHeader),children:[Object(je.jsx)(g.a,{variant:"h5",children:Object(je.jsx)(j.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Logo"})}),Object(je.jsx)(y.a,{style:{color:"#FFF"},onClick:function(){i(!1)},children:"ltr"===t.direction?Object(je.jsx)(N.a,{}):Object(je.jsx)(W.a,{})})]}),Object(je.jsx)(v.a,{}),Object(je.jsx)(f.a,{disablePadding:!0,children:Object(je.jsx)(j.c,{activeClassName:"selected",style:{textDecoration:"none"},exact:!0,to:"/user",children:Object(je.jsxs)(F.a,{button:!0,children:[Object(je.jsx)(A.a,{style:{marginRight:"5px"}}),Object(je.jsx)(B.a,{primary:"User"})]})})})]}),Object(je.jsxs)("main",{className:Object(b.a)(e.content,Object(s.a)({},e.contentShift,r)),children:[Object(je.jsx)("div",{className:e.drawerHeader}),Object(je.jsxs)(d.c,{children:[Object(je.jsx)(d.a,{exact:!0,path:"/",component:he}),Object(je.jsx)(d.a,{exact:!0,path:"/user",component:he}),Object(je.jsx)(d.a,{exact:!0,path:"/user/add",component:Fe}),Object(je.jsx)(d.a,{exact:!0,path:"/user/edit/:id",component:qe}),Object(je.jsx)(d.a,{exact:!0,path:"/user/:id",component:Ce}),Object(je.jsx)(d.a,{render:function(){return Object(je.jsx)("h1",{align:"center",children:"404 Not Found"})}})]})]})]})})})};i.a.render(Object(je.jsx)(c.a.StrictMode,{children:Object(je.jsx)(Ie,{})}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.ad5c9472.chunk.js.map