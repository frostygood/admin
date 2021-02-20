((typeof self !== 'undefined' ? self : this)["webpackJsonpbuilder"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpbuilder"] || []).push([[4],{

/***/ "71c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2aa08ae2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header.vue?vue&type=template&id=41300166&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-navigation-drawer',{attrs:{"right":"","absolute":"","temporary":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',[_vm._l((_vm.menuItems),function(item){return (_vm.isAuth === item.isAuth)?_c('v-list-tile',{key:item.id},[_c('v-list-tile-action',[_c('v-icon',{domProps:{"innerHTML":_vm._s(item.icon)}})],1),_c('v-list-tile-content',[_c('router-link',{staticStyle:{"cursor":"pointer"},attrs:{"to":item.route,"tag":"span"}},[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(item.title)}})],1)],1)],1):_vm._e()}),(_vm.isAuth === true)?_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',{staticStyle:{"cursor":"pointer"},on:{"click":function($event){$event.preventDefault();return _vm.signout($event)}}},[_vm._v("\n            Выйти\n          ")])],1)],1):_vm._e()],2)],1),_c('v-toolbar',{staticClass:"purple",attrs:{"app":"","dark":""}},[_c('router-link',{staticStyle:{"cursor":"pointer"},attrs:{"to":"/","tag":"span"}},[_c('v-toolbar-title',[_vm._v("Admin")])],1),_c('v-spacer'),_c('v-toolbar-side-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer = !_vm.drawer}}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/header.vue?vue&type=template&id=41300166&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var headervue_type_script_lang_js_ = ({
  data: function data() {
    return {
      drawer: false
    };
  },
  computed: {
    isAuth: function isAuth() {
      return this.$store.getters.isAuth;
    },
    menuItems: function menuItems() {
      return [{
        icon: "account_circle",
        title: "Профиль",
        route: "/profile",
        isAuth: true
      }, {
        icon: "input",
        title: "Войти",
        route: "/signin",
        isAuth: false
      }, {
        icon: "lock_open",
        title: "Регистрация",
        route: "/signup",
        isAuth: false
      }];
    }
  },
  methods: {
    signout: function signout() {
      this.$store.dispatch("SIGNOUT");
    }
  }
});
// CONCATENATED MODULE: ./src/components/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "41300166",
  null
  
)

/* harmony default export */ var header = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=builder.umd.4.js.map