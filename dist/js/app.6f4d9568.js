(function(t){function e(e){for(var o,s,a=e[0],l=e[1],c=e[2],u=0,d=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function s(t){return a.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b9f47":"ce6ad437","chunk-2d0cb6c3":"a6cbe2cd","chunk-2d217357":"60cc43eb"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=s(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,n[1](c)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1af7":function(t,e,n){"use strict";n("d4af")},"4c6b":function(t,e,n){"use strict";n("ae24")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("app-header"),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("app-footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{right:"",absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[t._l(t.menuItems,(function(e){return t.isAuth===e.isAuth?n("v-list-tile",{key:e.id},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:e.route,tag:"span"}},[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)],1):t._e()})),!0===t.isAuth?n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",{staticStyle:{cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v("\n            Выйти\n          ")])],1)],1):t._e()],2)],1),n("v-toolbar",{staticClass:"purple",attrs:{app:"",dark:""}},[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[n("v-toolbar-title",[t._v("Admin")])],1),n("v-spacer"),n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1)},a=[],l={data:function(){return{drawer:!1}},computed:{isAuth:function(){return this.$store.getters.isAuth},menuItems:function(){return[{icon:"account_circle",title:"Профиль",route:"/profile",isAuth:!0},{icon:"input",title:"Войти",route:"/signin",isAuth:!1},{icon:"lock_open",title:"Регистрация",route:"/signup",isAuth:!1}]}},methods:{signout:function(){this.$store.dispatch("SIGNOUT")}}},c=l,u=n("2877"),p=Object(u["a"])(c,s,a,!1,null,"41300166",null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-footer",{staticClass:"pa-3",attrs:{app:""}},[n("v-spacer"),t._v("\n    Vinkovatov © "+t._s((new Date).getFullYear())+"\n    "),n("v-spacer")],1)],1)},b=[],m={},h=m,v=Object(u["a"])(h,f,b,!1,null,"2cc472bf",null),g=v.exports,_={components:{appHeader:d,appFooter:g}},k=_,w=Object(u["a"])(k,i,r,!1,null,null,null),S=w.exports,E=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("builder")},C=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.obj,(function(e,o){return n("div",{key:o},[n("wrapper",{attrs:{strings:t.strings,obj:e}}),n("div",{staticStyle:{display:"flex"}},[n("v-btn",{attrs:{small:"",dark:"",color:"orange"},on:{click:function(e){e.preventDefault(),t.addComponent(o,t.createComponent("cont"))}}},[t._v("add new block below")]),n("v-btn",{staticStyle:{"margin-right":"auto"},attrs:{small:"",dark:"",color:"green"},on:{click:function(e){e.preventDefault(),t.obj[o].edit=!0}}},[t._v("Edit")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:o>0,expression:"i > 0"}],attrs:{small:"",dark:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.switchComponents(o-1,o)}}},[t._v("up")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.obj.length-1>o,expression:"obj.length-1 > i"}],attrs:{small:"",dark:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.switchComponents(o,o+1)}}},[t._v("down")]),n("v-btn",{attrs:{small:"",color:"error"},on:{click:function(e){return e.preventDefault(),t.deleteComponent(o)}}},[t._v("Delete")])],1),n("v-dialog",{attrs:{"max-width":"900px",scrollable:""},model:{value:t.obj[o].edit,callback:function(e){t.$set(t.obj[o],"edit",e)},expression:"obj[i].edit"}},[n("v-card",{attrs:{tile:""}},[n("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.obj[o].edit=!1}}},[n("v-icon",[t._v("close")])],1)],1),n("v-card-text",[n("h3",[t._v("Checkboxes")]),t._l(e.props.boolean,(function(e,i){return n("v-switch",{key:i,staticStyle:{display:"inline-block","margin-right":"30px"},attrs:{label:"Switch 1"},model:{value:t.obj[o].props.boolean[i],callback:function(e){t.$set(t.obj[o].props.boolean,i,e)},expression:"obj[i].props.boolean[b]"}})})),n("h3",{staticStyle:{"margin-top":"30px"}},[t._v("Strings")]),t._l(e.props.string,(function(e,i){return n("v-text-field",{key:i,attrs:{label:"Placeholder"},model:{value:t.strings[t.obj[o].props.string[i]],callback:function(e){t.$set(t.strings,t.obj[o].props.string[i],e)},expression:"strings[obj[i].props.string[s]]"}})})),n("h3",{staticStyle:{"margin-top":"30px"}},[t._v("Texts")]),t._l(e.props.editor,(function(e,o){return n("editor",{key:o,model:{value:t.strings[e],callback:function(n){t.$set(t.strings,e,n)},expression:"strings[elem]"}})}))],2)],1)],1)],1)})),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:0==t.obj.length,expression:"obj.length == 0"}],staticStyle:{display:"block",margin:"0 auto"},attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(e){e.preventDefault(),t.obj.push(t.createComponent("cont"))}}},[n("v-icon",{attrs:{dark:""}},[t._v("add")])],1)],2)},x=[],O=(n("7f7f"),n("7514"),n("734f")),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.obj.name,t._b({tag:"component"},"component",Object.assign({},t.mapBool,t.mapEditor,t.mapStrings),!1))},R=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cont",class:{bool:t.bool}},[n("h1",[t._v(t._s(t.str))]),n("div",{domProps:{innerHTML:t._s(t.texts)}})])},P=[],T={props:{texts:{type:String,default:"..."},bool:{type:Boolean,default:!0},str:{type:String,default:"чак-чак"}}},I=T,U=(n("1af7"),Object(u["a"])(I,N,P,!1,null,null,null)),L=U.exports,M={components:{cont:L},data:function(){return{mapBool:{},mapEditor:{},mapStrings:{}}},mounted:function(){this.mapProps()},watch:{obj:{handler:function(){this.mapProps()},deep:!0}},methods:{mapProps:function(){for(var t in this.mapBool={},this.obj.props.boolean)this.mapBool[t]=this.obj.props.boolean[t];for(var e in this.mapStrings={},this.obj.props.string)this.mapStrings[e]=this.strings[this.obj.props.string[e]];for(var n in this.mapEditor={},this.obj.props.editor)this.mapEditor[n]=this.strings[this.obj.props.editor[n]]}},props:{obj:{type:Object,default:function(){}},strings:{type:Object,default:function(){}}}},$=M,G=Object(u["a"])($,A,R,!1,null,null,null),D=G.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.commands,i=e.isActive;return[n("div",{staticClass:"menubar"},[n("button",{staticClass:"menubar__button",class:{"is-active":i.bold()},on:{click:o.bold}},[n("icon",{attrs:{name:"bold"}})],1),n("button",{staticClass:"menubar__button",class:{"is-active":i.italic()},on:{click:o.italic}},[n("icon",{attrs:{name:"italic"}})],1),n("button",{staticClass:"menubar__button",class:{"is-active":i.strike()},on:{click:o.strike}},[n("icon",{attrs:{name:"strike"}})],1),n("button",{staticClass:"menubar__button",class:{"is-active":i.underline()},on:{click:o.underline}},[n("icon",{attrs:{name:"underline"}})],1),n("button",{staticClass:"menubar__button",class:{"is-active":i.code()},on:{click:o.code}},[n("icon",{attrs:{name:"code"}})],1),n("button",{staticClass:"menubar__button",class:{"is-active":i.heading({level:2})},on:{click:function(t){return o.heading({level:2})}}},[t._v("H2\n      ")]),n("button",{staticClass:"menubar__button",class:{"is-active":i.heading({level:3})},on:{click:function(t){return o.heading({level:3})}}},[t._v("H3\n      ")]),n("button",{staticClass:"menubar__button",class:{"is-active":i.bullet_list()},on:{click:o.bullet_list}},[n("icon",{attrs:{name:"ul"}})],1),n("button",{staticClass:"menubar__button",class:{"is-active":i.ordered_list()},on:{click:o.ordered_list}},[n("icon",{attrs:{name:"ol"}})],1),n("button",{staticClass:"menubar__button",class:{"is-active":i.blockquote()},on:{click:o.blockquote}},[n("icon",{attrs:{name:"quote"}})],1),n("button",{staticClass:"menubar__button",class:{"is-active":i.code_block()},on:{click:o.code_block}},[n("icon",{attrs:{name:"code"}})],1),n("button",{staticClass:"menubar__button",on:{click:o.horizontal_rule}},[n("icon",{attrs:{name:"hr"}})],1),n("button",{staticClass:"menubar__button",on:{click:o.undo}},[n("icon",{attrs:{name:"undo"}})],1),n("button",{staticClass:"menubar__button",on:{click:o.redo}},[n("icon",{attrs:{name:"redo"}})],1),n("button",{staticClass:"menubar__button",on:{click:function(e){return t.showImagePrompt(o.image)}}},[n("icon",{attrs:{name:"image"}})],1),n("editor-menu-bubble",{staticClass:"menububble",attrs:{editor:t.editor},on:{hide:t.hideLinkMenu},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.commands,i=e.isActive,r=e.getMarkAttrs,s=e.menu;return[n("div",{staticClass:"menububble",class:{"is-active":s.isActive},style:"left: "+s.left+"px; bottom: "+s.bottom+"px;"},[t.linkMenuIsActive?n("form",{staticClass:"menububble__form",on:{submit:function(e){return e.preventDefault(),t.setLinkUrl(o.link,t.linkUrl)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:t.linkUrl},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.hideLinkMenu(e)},input:function(e){e.target.composing||(t.linkUrl=e.target.value)}}}),n("button",{staticClass:"menububble__button",attrs:{type:"button"},on:{click:function(e){return t.setLinkUrl(o.link,null)}}},[n("icon",{attrs:{name:"remove"}})],1)]):[n("button",{staticClass:"menububble__button",class:{"is-active":i.link()},on:{click:function(e){t.showLinkMenu(r("link"))}}},[n("span",[t._v(t._s(i.link()?"Update Link":"Add Link"))]),n("icon",{attrs:{name:"link"}})],1)]],2)]}}],null,!0)})],1)]}}])}),n("editor-content",{staticClass:"editor__content",attrs:{editor:t.editor}})],1)},H=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon",class:["icon--"+t.name,"icon--"+t.size,{"has-align-fix":t.fixAlign}]},[n("img",{staticClass:"icon__svg",class:["icon--"+t.name,"icon--"+t.size,{"has-align-fix":t.fixAlign}],attrs:{src:"/images/icons/"+t.name+".svg",alt:""}})])},J=[],q={props:{name:{},size:{default:"normal"},modifier:{default:null},fixAlign:{default:!0}}},W=q,F=(n("4c6b"),Object(u["a"])(W,z,J,!1,null,"d7bbd288",null)),K=F.exports,Q=n("cd42"),V=n("f23d"),X={components:{EditorContent:Q["b"],EditorMenuBubble:Q["d"],EditorMenuBar:Q["c"],Icon:K},model:{prop:"intext",event:"reverse"},props:{intext:{default:"text"}},data:function(){var t=this;return{editor:new Q["a"]({extensions:[new V["a"],new V["c"],new V["e"],new V["f"],new V["g"]({levels:[2,3]}),new V["i"],new V["m"],new V["n"],new V["p"],new V["q"],new V["l"],new V["b"],new V["d"],new V["k"],new V["o"],new V["r"],new V["h"],new V["j"]],content:this.intext,onUpdate:function(e){var n=e.getJSON,o=e.getHTML;t.json=n(),t.html=o()}}),linkUrl:null,linkMenuIsActive:!1,json:"Update content to see changes",html:"Update content to see changes"}},methods:{showLinkMenu:function(t){var e=this;this.linkUrl=t.href,this.linkMenuIsActive=!0,this.$nextTick((function(){e.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},setLinkUrl:function(t,e){t({href:e}),this.hideLinkMenu(),this.editor.focus()},showImagePrompt:function(t){var e=prompt("Enter the url of your image here");null!==e&&t({src:e})}},beforeDestroy:function(){this.editor.destroy()},watch:{html:function(){this.$emit("reverse",this.html)}}},Y=X,Z=(n("8eb9"),Object(u["a"])(Y,B,H,!1,null,null,null)),tt=Z.exports,et={data:function(){return{listComponents:[],strings:{},obj:[]}},created:function(){this.listComponents=O},methods:{closePopup:function(t){this.obj[t].edit=!1},addComponent:function(t,e){this.obj.splice(t,0,e)},switchComponents:function(t,e){var n=this.obj[t];this.obj[t]=this.obj[e],this.obj[e]=n,this.$forceUpdate()},deleteComponent:function(t){for(var e in this.obj[t].props.string)delete this.strings[this.obj[t].props.string[e]];for(var n in this.obj[t].props.editor)delete this.strings[this.obj[t].props.editor[n]];this.obj.splice(t,1)},createComponent:function(t){var e=t+Date.now(),n=JSON.parse(JSON.stringify(this.listComponents.find((function(e){return e.name===t}))));for(var o in n["id"]=e,n.props.string)n.props.string[o]=e+"_string_"+o,this.strings[e+"_string_"+o]="default";for(var i in n.props.editor)n.props.editor[i]=e+"_editor_"+i,this.strings[e+"_editor_"+i]="default";return n}},components:{editor:tt,wrapper:D}},nt=et,ot=Object(u["a"])(nt,y,x,!1,null,"afb71e3c",null),it=ot.exports,rt={components:{builder:it}},st=rt,at=Object(u["a"])(st,j,C,!1,null,"417eca40",null),lt=at.exports,ct=n("2f62"),ut=n("8aa5"),pt=n.n(ut),dt={state:{user:{isAuth:!1,uid:null,email:null,displayName:null,phoneNumber:null,photoURL:null}},mutations:{SET_USER:function(t,e){t.user.isAuth=!0,t.user.uid=e.uid,t.user.email=e.email,t.user.displayName=e.displayName,t.user.phoneNumber=e.phoneNumber,t.user.photoURL=e.photoURL},UNSET_USER:function(t){t.user={isAuth:!1,uid:null}}},getters:{isAuth:function(t){return t.user.isAuth}},actions:{SIGNUP:function(t,e){var n=t.commit;n("CLEAR_ERROR"),n("SET_PROCESSING",!0),pt.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(){n("SET_PROCESSING",!1),console.log(user)})).catch((function(t){n("SET_PROCESSING",!1),console.log(t),n("SET_ERROR",t.message)}))},SIGNIN:function(t,e){var n=t.commit;n("CLEAR_ERROR"),n("SET_PROCESSING",!0),pt.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(){n("SET_PROCESSING",!1),console.log(user)})).catch((function(t){n("SET_PROCESSING",!1),console.log(t),n("SET_ERROR",t.message)}))},STATE_CHANGE:function(t,e){var n=t.commit;e?n("SET_USER",e):n("UNSET_USER")},SIGNOUT:function(t){var e=t.commit;e("CLEAR_ERROR"),e("SET_PROCESSING",!0),pt.a.auth().signOut(),mt.push("/"),e("SET_PROCESSING",!1)}}},ft={state:{processing:!1,error:null},mutations:{SET_PROCESSING:function(t,e){t.processing=e},SET_ERROR:function(t,e){t.error=e},CLEAR_ERROR:function(t){t.error=null}},getters:{getProcessing:function(t){return t.processing},getError:function(t){return t.error}},actions:{}};o["default"].use(ct["a"]);var bt=new ct["a"].Store({modules:{userModul:dt,generalModul:ft}});o["default"].use(E["a"]);var mt=new E["a"]({routes:[{path:"/",name:"home",component:lt},{path:"/profile",name:"profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))},beforeEnter:ht},{path:"/signin",name:"signin",component:function(){return n.e("chunk-2d0cb6c3").then(n.bind(null,"4a33"))}},{path:"/signup",name:"signup",component:function(){return n.e("chunk-2d0b9f47").then(n.bind(null,"34c3"))}}]});function ht(t,e,n){bt.getters.isAuth?n():n("/signin")}var vt=n("ce5b"),gt=n.n(vt),_t=(n("bf40"),{databaseURL:"https://vinkovatov-db.firebaseio.com",apiKey:"AIzaSyBtCbeZwXD4U-A3vItcCBwgWNBMg6NNsxQ",authDomain:"vinkovatov-db.firebaseapp.com",projectId:"vinkovatov-db",storageBucket:"vinkovatov-db.appspot.com",messagingSenderId:"881027253182",appId:"1:881027253182:web:5822dab353051d26e7afef"});o["default"].use(gt.a),o["default"].config.productionTip=!1,pt.a.initializeApp(_t),new o["default"]({router:mt,store:bt,created:function(){var t=this;pt.a.auth().onAuthStateChanged((function(e){t.$store.dispatch("STATE_CHANGE",e),e?console.log(e):console.log("не авторизован")}))},render:function(t){return t(S)}}).$mount("#app")},"734f":function(t){t.exports=JSON.parse('[{"name":"cont","edit":false,"id":"id","props":{"boolean":{"bool":false},"string":{"str":"id"},"editor":{"texts":"id"}}}]')},"8eb9":function(t,e,n){"use strict";n("d675")},ae24:function(t,e,n){},d4af:function(t,e,n){},d675:function(t,e,n){}});
//# sourceMappingURL=app.6f4d9568.js.map