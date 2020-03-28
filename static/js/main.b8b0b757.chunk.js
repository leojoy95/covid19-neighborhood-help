(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/requester.d393c7d6.svg"},53:function(e,t,n){e.exports=n(83)},58:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(43),c=n.n(r),o=(n(58),n(17)),i=n(19),u=n(33),m=n.n(u),s=Object(a.createContext)(null),h=function(e){var t=e.children;return m.a.apps.length||m.a.initializeApp({apiKey:"AIzaSyDLRtZ9MWzqYCeTwfWjc3pFzD9-P2HSq2s",authDomain:"covid-19-neighborhood-help.firebaseapp.com",databaseURL:"https://covid-19-neighborhood-help.firebaseio.com",projectId:"covid-19-neighborhood-help",storageBucket:"covid-19-neighborhood-help.appspot.com",messagingSenderId:"926958898978",appId:"1:926958898978:web:8bc4070b5e6fd445fcdf7b"}),l.a.createElement(s.Provider,{value:m.a},t)},p=n(11),d=n(12),E=n(14),b=n(15),f=n(31),g=n(26),v=(l.a.Component,n(36)),j=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={name:"",email:"",location_description:"",message:"",phone:"",time_created:""},e.handleChange=e.handleChange.bind(Object(g.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(g.a)(e)),e}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=v.firestore.Timestamp.fromDate(new Date);this.state.time_created=t,v.firestore().collection("requests").add(this.state),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("fieldset",null,l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange})),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"text",name:"email",onChange:this.handleChange})),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Location Description"),l.a.createElement("input",{type:"text",name:"location_description",onChange:this.handleChange})),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Message"),l.a.createElement("input",{type:"text",name:"message",onChange:this.handleChange})),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Phone"),l.a.createElement("input",{name:"phone",onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"}))}}]),n}(l.a.Component),k=n(22),O=n(27),_=n.n(O),y=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,null))}}]),n}(l.a.Component);function C(){var e=Object(k.b)(),t=e.t;e.i18n;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,t("how_it_works.title")),l.a.createElement("img",{src:_.a,alt:"Request Icon"}),l.a.createElement("h3",null,t("requester.how_it_works.step_1.title")),l.a.createElement("p",null,t("requester.how_it_works.step_1.description")))}var w=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(q,null))}}]),n}(l.a.Component);function q(){var e=Object(i.f)();return l.a.createElement("div",null,l.a.createElement("h2",null,"Requester"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(e.url,"/step-1")},"Skip")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(e.url,"/step-2")},"Step 2"))),l.a.createElement(i.a,{path:"".concat(e.url,"/step-1"),component:j}),l.a.createElement(i.a,{path:"".concat(e.url,"/step-2"),component:j}))}var S=n(49),x=n(52),I=(n(82),function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return l.a.createElement(D,null)}}]),n}(l.a.Component));function D(){var e,t=Object(a.useContext)(s),n=Object(a.useState)(null),r=Object(x.a)(n,2),c=r[0],o=r[1],i=t.firestore().collection("requests");return Object(a.useEffect)((function(){i.get().then((function(e){if(e){var t=[];e.forEach((function(e){console.log(e),console.log(e.data()),t.push(Object(S.a)({key:e.id},e.data()))})),o((function(e){return t}))}else o((function(e){return[]}))})).catch((function(e){}))}),[]),e=null===c?l.a.createElement("li",null,"Loading requests..."):0===c.length?l.a.createElement("li",null,"No requests found"):c.map((function(e){return l.a.createElement("ul",{key:e.key},l.a.createElement("li",null,e.email),l.a.createElement("li",null,e.location_description),l.a.createElement("li",null,e.message),l.a.createElement("li",null,e.phone),l.a.createElement("li",null,e.time_created.seconds))})),l.a.createElement("div",null,e)}function L(){var e=Object(k.b)(),t=(e.t,e.i18n),n=function(e){t.changeLanguage(e)};return l.a.createElement("div",{className:"language-selection-container"},l.a.createElement("button",{onClick:function(){return n("de")}},"de"),l.a.createElement("button",{onClick:function(){return n("en")}},"en"))}function N(){return l.a.createElement(h,null,l.a.createElement(o.a,null,l.a.createElement("header",null,l.a.createElement(o.b,{className:"logo",to:"/"},"[Logo]"),l.a.createElement(L,null)),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/request"},l.a.createElement(w,null)),l.a.createElement(i.a,{path:"/volunteer"},l.a.createElement(I,null)),l.a.createElement(i.a,{path:"/"},l.a.createElement(R,null)))))}function R(){var e=Object(k.b)(),t=e.t;e.i18n;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,t("home.connecting_those_affected")),l.a.createElement("h3",null,t("home.what_would_you_like_to_do")),l.a.createElement("nav",null,l.a.createElement(o.b,{className:"bucket bucket-link",to:"/request"},l.a.createElement("img",{src:_.a,alt:"Request Icon"}),t("home.i_need_help")),l.a.createElement(o.b,{className:"bucket bucket-link",to:"/volunteer"},l.a.createElement("img",{src:_.a,alt:"Request Icon"}),t("home.i_want_to_help"))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(34),z=n(50),P=n(51);F.a.use(z.a).init({backend:{loadPath:"/covid19-neighborhood-help/locales/{{lng}}/{{ns}}.json"}}),F.a.use(P.a).use(k.a).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});F.a;c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(a.Suspense,{fallback:null},l.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.b8b0b757.chunk.js.map