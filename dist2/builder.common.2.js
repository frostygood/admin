((typeof self !== 'undefined' ? self : this)["webpackJsonpbuilder"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpbuilder"] || []).push([[2],{

/***/ "0f13":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bmv/cont.vue": [
		"51fc",
		1
	],
	"./builder.vue": [
		"71a7"
	],
	"./choose.vue": [
		"36b7"
	],
	"./editor.vue": [
		"a897"
	],
	"./footer.vue": [
		"076e",
		3
	],
	"./header.vue": [
		"71c2",
		4
	],
	"./icon.vue": [
		"3404"
	],
	"./wrapperComponent.vue": [
		"9de0"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "0f13";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "9de0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2aa08ae2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/wrapperComponent.vue?vue&type=template&id=d4ddf1f4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('comp',_vm._b({},'comp',Object.assign({}, _vm.mapBool, _vm.mapEditor, _vm.mapStrings),false))}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/wrapperComponent.vue?vue&type=template&id=d4ddf1f4&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/wrapperComponent.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
var componentsName = '';
var siteName = '';
/* harmony default export */ var wrapperComponentvue_type_script_lang_js_ = ({
  created: function created() {
    componentsName = this.obj.name;
    siteName = this.site;
  },
  components: {
    'comp': function comp() {
      return __webpack_require__("0f13")("./" + siteName + '/' + componentsName + ".vue");
    }
  },
  data: function data() {
    return {
      mapBool: {},
      mapEditor: {},
      mapStrings: {}
    };
  },
  mounted: function mounted() {
    this.mapProps();
  },
  watch: {
    obj: {
      handler: function handler() {
        this.mapProps();
      },
      deep: true
    }
  },
  methods: {
    mapProps: function mapProps() {
      this.mapBool = {};

      for (var key in this.obj.props.boolean) {
        this.mapBool[key] = this.obj.props.boolean[key];
      }

      this.mapStrings = {};

      for (var _key in this.obj.props.string) {
        this.mapStrings[_key] = this.strings[this.obj.props.string[_key]];
      }

      this.mapEditor = {};

      for (var _key2 in this.obj.props.editor) {
        this.mapEditor[_key2] = this.strings[this.obj.props.editor[_key2]];
      }
    }
  },
  props: {
    obj: {
      type: Object,
      default: function _default() {}
    },
    strings: {
      type: Object,
      default: function _default() {}
    },
    site: {
      type: String,
      default: 'bmv'
    }
  }
});
// CONCATENATED MODULE: ./src/components/wrapperComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_wrapperComponentvue_type_script_lang_js_ = (wrapperComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/wrapperComponent.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_wrapperComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var wrapperComponent = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=builder.common.2.js.map