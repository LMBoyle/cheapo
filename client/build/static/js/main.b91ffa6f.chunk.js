(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(55)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),s=a(6),o=a(7),m=a(9),i=a(8),u=a(10),d=a(61),E=a(60),h=a(13),g=a(59),p=a(57),f=function(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)},v=function(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)},b=function(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)},N=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header bg-primary",style:{color:"#fff"}},l.a.createElement("h5",null,e.title)),l.a.createElement("div",{className:"card-body"},e.children))},w=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))},y=function(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)},C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.login(e.state.username,e.state.password),e.setState({redirectTo:"/"})},e.state={username:"",password:"",redirectTo:null},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.redirectTo?l.a.createElement(g.a,{to:{pathname:this.state.redirectTo}}):l.a.createElement(v,null,l.a.createElement(b,null,l.a.createElement(f,{size:"md-3"}),l.a.createElement(f,{size:"md-6"},l.a.createElement(N,{title:"Login to React Reading List"},l.a.createElement("form",{style:{marginTop:10}},l.a.createElement("label",{htmlFor:"username"}," Username: "),l.a.createElement(w,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"password"}," Password: "),l.a.createElement(w,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),l.a.createElement(p.a,{to:"/signup"}," Register "),l.a.createElement(y,{onClick:this.handleSubmit}," Login ")))),l.a.createElement(f,{size:"md-3"})))}}]),t}(n.Component),j=a(11),x=a.n(j),O={getUser:function(){return x.a.get("/auth/user")},logout:function(){return x.a.post("/auth/logout")},login:function(e,t){return console.log("in auth, login function"),x.a.post("/auth/login",{username:e,password:t})},signup:function(e){return x.a.post("/auth/signup",e)}},I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),O.signup({firstName:e.state.firstName,lastName:e.state.lastName,username:e.state.username,password:e.state.password}).then(function(t){t.data.errmsg?console.log("duplicate"):e.setState({redirectTo:"/"})})},e.state={firstName:"",lastName:"",username:"",password:"",confirmPassword:"",redirectTo:null},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.redirectTo?l.a.createElement(g.a,{to:{pathname:this.state.redirectTo}}):l.a.createElement(v,null,l.a.createElement(b,null,l.a.createElement(f,{size:"md-3"}),l.a.createElement(f,{size:"md-6"},l.a.createElement(N,{title:"Register for React Reading List"},l.a.createElement("form",{style:{marginTop:10}},l.a.createElement("label",{htmlFor:"username"}," First name: "),l.a.createElement(w,{type:"text",name:"firstName",value:this.state.firstName,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"username"}," Last name: "),l.a.createElement(w,{type:"text",name:"lastName",value:this.state.lastName,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"username"}," Username: "),l.a.createElement(w,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"password"}," Password: "),l.a.createElement(w,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"confirmPassword"}," Confirm Password: "),l.a.createElement(w,{type:"password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.handleChange}),l.a.createElement(p.a,{to:"/"}," Login "),l.a.createElement(y,{onClick:this.handleSubmit}," Register ")))),l.a.createElement(f,{size:"md-3"})))}}]),t}(n.Component);a(50);var z=function(e){var t=e.children;return l.a.createElement("div",{style:{height:700,width:"100%",clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron jumbotron-fluid"},t)};var L=function(e){return l.a.createElement(v,{fluid:!0},l.a.createElement(b,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(z,null,l.a.createElement("h1",null," Welcome to Cheapo! "),l.a.createElement("p",null," We strive to help you help your friends save money ")),l.a.createElement("div",null,l.a.createElement("p",null," Set Goals "),l.a.createElement("p",null," Connect with friends "),l.a.createElement("p",null," Save Money! ")))))};a(51);var S=function(e){return l.a.createElement("div",{className:"container d-flex flex-column"},l.a.createElement("div",{className:"card w-75"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.user,"  Logged In!"),l.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),l.a.createElement("a",{href:" ",class:"btn btn-primary"},"Button"))),l.a.createElement("div",{className:"card w-75"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Logged In!"),l.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),l.a.createElement("a",{href:" ",class:"btn btn-primary"},"Button"))),l.a.createElement("div",{className:"card w-75"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Logged In!"),l.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),l.a.createElement("a",{href:" ",class:"btn btn-primary"},"Button"))))};var F=function(e){return l.a.createElement(v,{fluid:!0},l.a.createElement(b,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(z,null,l.a.createElement("h1",null," Welcome to Cheapo! ")))))};var k=function(e){return e.isLoggedIn?l.a.createElement(S,{user:e.user.firstName}):l.a.createElement(F,null)};var T=function(){return l.a.createElement(v,{fluid:!0},l.a.createElement(b,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(z,null,l.a.createElement("h1",null," Goals ")))))};var P=function(){return l.a.createElement(v,{fluid:!0},l.a.createElement(b,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(z,null,l.a.createElement("h1",null," Friends ")))))};var W=function(){return l.a.createElement(v,{fluid:!0},l.a.createElement(b,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(z,null,l.a.createElement("h1",null," User Profile")))))};var R=function(){return l.a.createElement(v,{fluid:!0},l.a.createElement(b,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(z,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},U=(a(52),function(e){var t;return null===e.user?t=l.a.createElement(n.Fragment,null,l.a.createElement("ul",{className:"nav navbar-right"},l.a.createElement("li",null,l.a.createElement(p.a,{to:"/signup",className:"logout"},l.a.createElement("i",{className:"material-icons"},"person_add")," Sign Up ")),l.a.createElement("li",null,l.a.createElement(p.a,{to:"/login",className:"logout"},l.a.createElement("i",{className:"material-icons"},"verified_user")," Login ")))):e.user.firstName?t=l.a.createElement(n.Fragment,null,"Welcome back, ",l.a.createElement("strong",null,e.user.firstName),l.a.createElement(p.a,{to:"/profile"}," ",l.a.createElement("strong",null," User Profile ")),l.a.createElement(p.a,{to:"/",className:"logout",onClick:e.logout}," Logout ")):e.user.username&&(t=l.a.createElement(n.Fragment,null,"Welcome back, ",l.a.createElement("strong",null,e.user.username," "),l.a.createElement(p.a,{to:"/profile"}," ",l.a.createElement("strong",null," User Profile ")),l.a.createElement(p.a,{to:"/",className:"logout",onClick:e.logout}," Logout "))),l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement(f,{size:"md-2"},l.a.createElement(p.a,{to:"/",className:"navbar-brand"},l.a.createElement("i",{className:"material-icons md-72"},"local_atm")," Cheapo ")),l.a.createElement(f,{size:"md-5"}),l.a.createElement(f,{size:"md-3"},l.a.createElement("div",{className:"float-right"},t)))});a(53);var B=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).logout=function(t){t.preventDefault(),O.logout().then(function(t){200===t.status&&e.setState({loggedIn:!1,user:null})})},e.login=function(t,a){O.login(t,a).then(function(t){console.log("In app.js, login: ",t),200===t.status&&e.setState({loggedIn:!0,user:t.data.user})})},e.state={loggedIn:!1,user:null},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.getUser().then(function(t){t.data.user?e.setState({loggedIn:!0,user:t.data.user}):e.setState({loggedIn:!1,user:null})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},this.state.loggedIn&&l.a.createElement("div",null,l.a.createElement(U,{user:this.state.user,logout:this.logout}),l.a.createElement("div",{className:"main-view"},l.a.createElement(d.a,null,l.a.createElement(E.a,{exact:!0,path:"/",component:function(){return l.a.createElement(k,{user:e.state.user,isLoggedIn:e.state.loggedIn})}}),l.a.createElement(E.a,{exact:!0,path:"/dashboard",component:function(){return l.a.createElement(k,{user:e.state.user,isLoggedIn:e.state.loggedIn})}}),l.a.createElement(E.a,{exact:!0,path:"/goals",component:T}),l.a.createElement(E.a,{exact:!0,path:"/friends",component:P}),l.a.createElement(E.a,{exact:!0,path:"/profile",component:function(){return l.a.createElement(W,{user:e.state.user})}}),l.a.createElement(E.a,{component:R})))),!this.state.loggedIn&&l.a.createElement("div",null,l.a.createElement(U,{user:this.state.user}),l.a.createElement("div",{className:"auth-wrapper",style:{paddingTop:40}},l.a.createElement(E.a,{exact:!0,path:"/",component:function(){return l.a.createElement(L,null)}}),l.a.createElement(E.a,{exact:!0,path:"/signup",component:I}),l.a.createElement(E.a,{exact:!0,path:"/login",component:function(){return l.a.createElement(C,{login:e.login})}}))))}}]),t}(n.Component),D=(a(54),a(58));c.a.render(l.a.createElement(D.a,null,l.a.createElement(B,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b91ffa6f.chunk.js.map