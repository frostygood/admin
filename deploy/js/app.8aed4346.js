(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0dcf1401":"58876bfe","chunk-1fa21dc2":"0a999bd4","chunk-2d0b9f47":"c02f4818","chunk-2d0cb6c3":"e20ba76a","chunk-2d0e2760":"471aa7a9","chunk-372cbd4e":"0aa65053","chunk-6b4d7ee2":"76ba356b","chunk-770cf7b9":"748560fa","chunk-d19ea1ca":"3e938ed6","chunk-e25518a6":"40db7e17","chunk-e3121b06":"83d187fe"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0dcf1401":1,"chunk-1fa21dc2":1,"chunk-372cbd4e":1,"chunk-6b4d7ee2":1,"chunk-d19ea1ca":1,"chunk-e25518a6":1,"chunk-e3121b06":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0dcf1401":"19fde0c8","chunk-1fa21dc2":"2bc91820","chunk-2d0b9f47":"31d6cfe0","chunk-2d0cb6c3":"31d6cfe0","chunk-2d0e2760":"31d6cfe0","chunk-372cbd4e":"ac8510eb","chunk-6b4d7ee2":"e6dc7ee9","chunk-770cf7b9":"31d6cfe0","chunk-d19ea1ca":"dd67ae88","chunk-e25518a6":"6a656e77","chunk-e3121b06":"7821f1d3"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b3f":function(e,t,n){var r={"./bigimg.vue":["2392","chunk-0dcf1401"],"./contactus.vue":["a3e3","chunk-e25518a6"],"./editor.vue":["f69d","chunk-372cbd4e"],"./imgsblock.vue":["eef9","chunk-6b4d7ee2"],"./space.vue":["0f2c","chunk-e3121b06"],"./title.vue":["9e22","chunk-d19ea1ca"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="0b3f",e.exports=o},3667:function(e){e.exports=JSON.parse('[{"name":"bigimg","edit":false,"id":"id","placeholders":{"img":"Загрузка основной картинки","alt":"Название и описание картинки для поисковиков"},"orders":{"img":"1","alt":"2"},"selects":{},"props":{"boolean":{},"string":{"alt":""},"editor":{},"imgs":{"img":""},"custom":{},"selects":{},"links":{}}},{"name":"imgsblock","edit":false,"id":"id","selects":{},"placeholders":{"first_alt":"Название и описание первой картинки для поисковиков","second_alt":"Название и описание второй картинки для поисковиков","third_alt":"Название и описание третьей картинки для поисковиков","first_img":"Первая картинка (если не загружать, то ничего не покажется)","second_img":"Вторая картинка (если не загружать, то ничего не покажется)","third_img":"Третья картинка (если не загружать, то ничего не покажется)"},"orders":{"first_alt":"2","second_alt":"4","third_alt":"6","first_img":"1","second_img":"3","third_img":"5"},"props":{"boolean":{},"string":{"first_alt":"","second_alt":"","third_alt":""},"editor":{},"imgs":{"first_img":"","second_img":"","third_img":""},"custom":{},"selects":{},"links":{}}},{"name":"space","edit":false,"id":"id","selects":{"name_class":["large","big","small","last"]},"placeholders":{"name_class":"Высота отступа"},"orders":{"name_class":"1"},"props":{"boolean":{},"string":{},"editor":{},"imgs":{},"links":{},"custom":{},"selects":{"name_class":"large"}}},{"name":"title","edit":false,"id":"id","selects":{},"placeholders":{"title":"Главный заголовок страницы (не больше одного на страницу, в html разметке выглядит как H1)"},"orders":{"title":"1"},"props":{"boolean":{},"string":{"title":"H1 заголовок"},"editor":{},"imgs":{},"custom":{},"selects":{},"links":{}}},{"name":"editor","edit":false,"id":"id","selects":{},"placeholders":{"texts":"Большой текст со стилизацией"},"orders":{"texts":"1"},"props":{"boolean":{},"string":{},"editor":{"texts":"..."},"imgs":{},"custom":{},"selects":{},"links":{}}},{"name":"contactus","edit":false,"id":"id","selects":{},"placeholders":{"texts":"вкл - темный фон, выкл - светлый фон"},"orders":{"texts":"1"},"props":{"boolean":{"pageBlock":true},"string":{},"editor":{},"imgs":{},"custom":{},"selects":{},"links":{}}}]')},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-header"),n("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-navigation-drawer",{attrs:{right:"",absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",[e._l(e.menuItems,(function(t){return e.isAuth===t.isAuth?n("v-list-tile",{key:t.id},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:e._s(t.icon)}})],1),n("v-list-tile-content",[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:t.route,tag:"span"}},[n("v-list-tile-title",{domProps:{textContent:e._s(t.title)}})],1)],1)],1):e._e()})),!0===e.isAuth?n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",{staticStyle:{cursor:"pointer"},on:{click:function(t){return t.preventDefault(),e.signout(t)}}},[e._v("\n            Выйти\n          ")])],1)],1):e._e()],2)],1),n("v-toolbar",{staticClass:"purple",attrs:{dark:""}},[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[n("v-toolbar-title",[e._v("Admin")])],1),n("v-spacer"),n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1)],1)},s=[],c={data:function(){return{drawer:!1}},computed:{isAuth:function(){return this.$store.getters.isAuth},menuItems:function(){return[{icon:"account_circle",title:"Профиль",route:"/profile",isAuth:!0},{icon:"input",title:"Войти",route:"/signin",isAuth:!1},{icon:"lock_open",title:"Регистрация",route:"/signup",isAuth:!1}]}},methods:{signout:function(){this.$store.dispatch("SIGNOUT")}}},u=c,l=n("2877"),d=Object(l["a"])(u,i,s,!1,null,"19848d36",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-footer",{staticClass:"pa-3"},[n("v-spacer"),e._v("\n    Vinkovatov © "+e._s((new Date).getFullYear())+"\n    "),n("v-spacer")],1)],1)},h=[],m={},g=m,b=Object(l["a"])(g,p,h,!1,null,"47ecf6f6",null),v=b.exports,_={components:{appHeader:f,appFooter:v}},k=_,E=Object(l["a"])(k,o,a,!1,null,null,null),S=E.exports,y=n("8c4f"),R=n("2f62"),O=n("8aa5"),w=n.n(O),A={state:{user:{isAuth:!1,uid:null,email:null,displayName:null,phoneNumber:null,photoURL:null}},mutations:{SET_USER:function(e,t){e.user.isAuth=!0,e.user.uid=t.uid,e.user.email=t.email,e.user.displayName=t.displayName,e.user.phoneNumber=t.phoneNumber,e.user.photoURL=t.photoURL},UNSET_USER:function(e){e.user={isAuth:!1,uid:null}}},getters:{isAuth:function(e){return e.user.isAuth}},actions:{SIGNUP:function(e,t){var n=e.commit;n("CLEAR_ERROR"),n("SET_PROCESSING",!0),w.a.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(){n("SET_PROCESSING",!1),console.log(user)})).catch((function(e){n("SET_PROCESSING",!1),console.log(e),n("SET_ERROR",e.message)}))},SIGNIN:function(e,t){var n=e.commit;n("CLEAR_ERROR"),n("SET_PROCESSING",!0),w.a.auth().signInWithEmailAndPassword(t.email,t.password).then((function(){n("SET_PROCESSING",!1),console.log(user)})).catch((function(e){n("SET_PROCESSING",!1),console.log(e),n("SET_ERROR",e.message)}))},STATE_CHANGE:function(e,t){var n=e.commit;t?n("SET_USER",t):n("UNSET_USER")},SIGNOUT:function(e){var t=e.commit;t("CLEAR_ERROR"),t("SET_PROCESSING",!0),w.a.auth().signOut(),C.push("/"),t("SET_PROCESSING",!1)}}},T={state:{processing:!1,error:null},mutations:{SET_PROCESSING:function(e,t){e.processing=t},SET_ERROR:function(e,t){e.error=t},CLEAR_ERROR:function(e){e.error=null}},getters:{getProcessing:function(e){return e.processing},getError:function(e){return e.error}},actions:{}};r["default"].use(R["a"]);var N=new R["a"].Store({modules:{userModul:A,generalModul:T}});r["default"].use(y["a"]);var C=new y["a"]({routes:[{path:"/",name:"main",component:function(){return n.e("chunk-2d0e2760").then(n.bind(null,"7f94"))}},{path:"/bmv",name:"bmv",component:function(){return n.e("chunk-1fa21dc2").then(n.bind(null,"2f74"))},beforeEnter:P},{path:"/profile",name:"profile",component:function(){return n.e("chunk-770cf7b9").then(n.bind(null,"c66d0"))},beforeEnter:P},{path:"/signin",name:"signin",component:function(){return n.e("chunk-2d0cb6c3").then(n.bind(null,"4a33"))}},{path:"/signup",name:"signup",component:function(){return n.e("chunk-2d0b9f47").then(n.bind(null,"34c3"))}}]});function P(e,t,n){N.getters.isAuth?n():n("/signin")}var I=n("ce5b"),x=n.n(I),U=(n("bf40"),{databaseURL:"https://bmven-a02bd.firebaseio.com",apiKey:"AIzaSyAfaRJ8wcJm9DOwFmit1sTu1J1e5tK2BIU",authDomain:"bmven-a02bd.firebaseapp.com",projectId:"bmven-a02bd",storageBucket:"bmven-a02bd.appspot.com",messagingSenderId:"732596051921",appId:"1:732596051921:web:7e2f70aa22f3e6b0718af0"}),j=n("3667");r["default"].use(x.a),r["default"].config.productionTip=!1,w.a.initializeApp(U),r["default"].prototype.$db=w.a.firestore(),r["default"].prototype.$storage=w.a.storage(),r["default"].prototype.$storageRef=w.a.storage().ref(),r["default"].prototype.$firebase=w.a,j.forEach((function(e){r["default"].component("bmv-"+e.name,(function(){return n("0b3f")("./"+e.name+".vue")}))})),new r["default"]({router:C,store:N,created:function(){var e=this;w.a.auth().onAuthStateChanged((function(t){e.$store.dispatch("STATE_CHANGE",t),t?console.log(t):console.log("не авторизован")}))},render:function(e){return e(S)}}).$mount("#app")}});
//# sourceMappingURL=app.8aed4346.js.map