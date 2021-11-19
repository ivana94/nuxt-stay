exports.ids = [14,1];
exports.modules = {

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeCard.vue?vue&type=template&id=d6b4c9a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-home-card"},[_vm._ssrNode("<div>","</div>",[_c('nuxt-img',{attrs:{"src":_vm.home.images[0],"width":"600","height":"400","provider":"cloudinary"}}),_vm._ssrNode("<br>")],2),_vm._ssrNode(" <div class=\"app-home-text\"><h3>"+_vm._ssrEscape(_vm._s(_vm.home.title))+"</h3> <br>"+_vm._ssrEscape("\n        "+_vm._s(_vm.home.location.address)+", "+_vm._s(_vm.home.location.city)+",\n        "+_vm._s(_vm.home.location.state))+"<br>"+_vm._ssrEscape("\n        "+_vm._s(_vm.home.guests)+" guests")+"<br> <p class=\"app-home-text-price\">"+_vm._ssrEscape("$"+_vm._s(_vm.home.pricePerNight)+" / night")+"</p> <br></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeCard.vue?vue&type=template&id=d6b4c9a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HomeCardvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/HomeCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeCardvue_type_script_lang_js_ = (HomeCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/HomeCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b62d5e7"
  
)

/* harmony default export */ var HomeCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=b7963e34&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container app-homes"},_vm._l((_vm.homes),function(home){return _vm._ssrNode("<div style=\"margin:10px;\">","</div>",[_c('nuxt-link',{attrs:{"to":("/home/" + (home.objectID)),"prefetch":""}},[_c('home-card',{attrs:{"home":home}})],1)],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=b7963e34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  // adds meta tags
  head() {
    return {
      title: "Homepage",
      meta: [{
        name: "description",
        content: "This is a homepage",
        hid: "description"
      }]
    };
  },

  async asyncData({
    $dataApi
  }) {
    return {
      homes: (await $dataApi.getHomes()).json.hits
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e129ceb4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomeCard: __webpack_require__(45).default})


/***/ })

};;
//# sourceMappingURL=index.js.map