(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,t,n){e.exports=n(51)},36:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(28),c=n.n(l),o=(n(36),n(8)),u=n(14),i=n(10),s=n(11),m=n(12),p=n(13),h=n(22);h.initializeApp({apiKey:"AIzaSyDLRtZ9MWzqYCeTwfWjc3pFzD9-P2HSq2s",authDomain:"covid-19-neighborhood-help.firebaseapp.com",databaseURL:"https://covid-19-neighborhood-help.firebaseio.com",projectId:"covid-19-neighborhood-help",storageBucket:"covid-19-neighborhood-help.appspot.com",messagingSenderId:"926958898978",appId:"1:926958898978:web:8bc4070b5e6fd445fcdf7b"});var b=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={response:{}},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.firestore().collection("requests").doc("request1").onSnapshot((function(t){e.setState({response:t.data()})}))}},{key:"render",value:function(){return r.a.createElement("h1",null,"Hello, ",this.state.response.email)}}]),n}(r.a.Component),E=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"[how it works carousel] from ",this.props.type)}}]),n}(r.a.Component),d=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(f,null)}}]),n}(r.a.Component);function f(){var e=Object(u.f)();return r.a.createElement("div",null,r.a.createElement("h2",null,"Request"),r.a.createElement(E,{type:"requester"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(e.url,"/step-1")},"Step 1")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(e.url,"/step-2")},"Step 2"))))}var v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(j,null)}}]),n}(r.a.Component);function j(){var e=Object(u.f)();return r.a.createElement("div",null,r.a.createElement("h2",null,"Volunteer"),r.a.createElement(E,{type:"volunteer"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(e.url,"/step-1")},"Step 1")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(e.url,"/step-2")},"Step 2"))))}function O(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"debug-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/firebase-sandbox"},"Firebox Sandbox")))),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/request"},r.a.createElement(d,null)),r.a.createElement(u.a,{path:"/volunteer"},r.a.createElement(v,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(y,null)),r.a.createElement(u.a,{path:"/firebase-sandbox"},r.a.createElement(b,null)))))}function y(){return r.a.createElement("nav",null,r.a.createElement(o.b,{className:"main-choice",to:"/request"},"Request"),r.a.createElement(o.b,{className:"main-choice",to:"/volunteer"},"Volunteer"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.be9d31a0.chunk.js.map