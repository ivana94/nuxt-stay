exports.ids = [13,4,5,6,7,8,9,10];
exports.modules = {

/***/ 30:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((number, singularWord) => {
  const text = `${number} ${singularWord}`;

  if (number === 1) {
    return text;
  }

  return text + "s";
});

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (dateStr => {
  const date = new Date(dateStr);
  return date.toLocaleString(undefined, {
    month: "long",
    year: "numeric"
  });
});

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShortText_vue_vue_type_style_index_0_id_4d0125ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShortText_vue_vue_type_style_index_0_id_4d0125ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShortText_vue_vue_type_style_index_0_id_4d0125ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShortText_vue_vue_type_style_index_0_id_4d0125ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShortText_vue_vue_type_style_index_0_id_4d0125ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShortText.vue?vue&type=template&id=4d0125ec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.displayText)+"\n    ")+((_vm.isTooLong && !_vm.isExpanded)?("<button type=\"button\" class=\"link\" data-v-4d0125ec>\n        read more\n    </button>"):"<!---->")+" "+((_vm.isTooLong && _vm.isExpanded)?("<button type=\"button\" class=\"link\" data-v-4d0125ec>\n        read less\n    </button>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShortText.vue?vue&type=template&id=4d0125ec&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShortText.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ShortTextvue_type_script_lang_js_ = ({
  data() {
    return {
      isExpanded: false,
      chunks: []
    };
  },

  props: {
    text: {
      type: String,
      required: true
    },
    target: {
      type: Number,
      required: true
    }
  },
  computed: {
    isTooLong() {
      return this.chunks.length === 2;
    },

    displayText() {
      if (!this.isTooLong || this.isExpanded) {
        return this.chunks.join(" ");
      }

      return this.chunks[0] + "...";
    }

  },

  created() {
    // we're doing this in created because we want this to run on the server
    // if we did it in mounted there's a possibility the user would see the long text for a sec before it shortens
    this.chunks = this.getChunks();
  },

  methods: {
    getChunks() {
      const position = this.text.indexOf(" ", this.target);

      if (this.text.length <= this.target || position === -1) {
        return [this.text];
      }

      return [this.text.substr(0, position), this.text.substr(position)];
    }

  }
});
// CONCATENATED MODULE: ./components/ShortText.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShortTextvue_type_script_lang_js_ = (ShortTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ShortText.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShortTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4d0125ec",
  "4d1567a1"
  
)

/* harmony default export */ var ShortText = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyGallery.vue?vue&type=template&id=1e2c8783&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-section"},[_vm._ssrNode("<div class=\"app-wrapper\"><div class=\"app-masonry\">"+(_vm._ssrList((_vm.images),function(publicId){return ("<div"+(_vm._ssrStyle(null,("background-image: url(" + (_vm.getImageUrl(publicId)) + ")"), null))+"></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyGallery.vue?vue&type=template&id=1e2c8783&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyGallery.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PropertyGalleryvue_type_script_lang_js_ = ({
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImageUrl(publicId) {
      return this.$img(publicId, {
        width: 700
      }, {
        provider: "cloudinary"
      });
    }

  }
});
// CONCATENATED MODULE: ./components/PropertyGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyGalleryvue_type_script_lang_js_ = (PropertyGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyGallery.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "45af74d6"
  
)

/* harmony default export */ var PropertyGallery = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDetails.vue?vue&type=template&id=6da7c0e9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-wrapper"},[_vm._ssrNode("<div class=\"app-double-column app-property-details\">","</div>",[_vm._ssrNode("<div><h1>"+_vm._ssrEscape(_vm._s(_vm.home.title))+"</h1> <div class=\"app-flex\"><div class=\"app-address\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.home.location.address)+" "+_vm._s(_vm.home.location.city)+"\n                    "+_vm._s(_vm.home.location.state)+" "+_vm._s(_vm.home.location.country)+"\n                ")+"</div> <div class=\"app-rating\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.home.reviewValue)+"\n                    ")+"<span>"+_vm._ssrEscape("("+_vm._s(_vm.home.reviewCount)+")")+"</span></div></div> <div class=\"app-property-details-footer\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.pluralize(_vm.home.guests, "guest"))+" ·\n                "+_vm._s(_vm.pluralize(_vm.home.bedrooms, "room"))+" ·\n                "+_vm._s(_vm.pluralize(_vm.home.beds, "bed"))+" ·\n                "+_vm._s(_vm.pluralize(_vm.home.bathrooms, "bath"))+"\n            ")+"</div></div> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"app-price\">"+_vm._ssrEscape("\n                $"+_vm._s(_vm.home.pricePerNight))+"<span> / night</span></div> "),_c('client-only',[_c('date-picker',{staticClass:"app-search",attrs:{"is-range":"","timezone":"UTC","modelConfig":{ timeAdjust: '00:00:00' }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var inputValue = ref.inputValue;
var inputEvents = ref.inputEvents;
return [_c('input',_vm._g({staticClass:"datepicker",domProps:{"value":inputValue.start}},inputEvents.start)),_vm._v(" "),_c('input',_vm._g({staticClass:"datepicker",domProps:{"value":inputValue.end}},inputEvents.end))]}}]),model:{value:(_vm.range),callback:function ($$v) {_vm.range=$$v},expression:"range"}})],1),_vm._ssrNode(" <button class=\"app-big-button\">\n                Request to book!\n            </button>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyDetails.vue?vue&type=template&id=6da7c0e9&

// EXTERNAL MODULE: ./utils/pluralize.js
var pluralize = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDetails.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PropertyDetailsvue_type_script_lang_js_ = ({
  data() {
    return {
      range: {
        start: null,
        end: null
      }
    };
  },

  props: {
    home: {
      type: Object,
      required: true
    }
  },

  mounted() {
    if (this.$route.query.result === "success") {
      alert("success");
    }
  },

  methods: {
    pluralize: pluralize["a" /* default */],

    checkout() {
      const start = this.range.start.getTime() / 1000;
      const end = this.range.end.getTime() / 1000;
      this.$stripe.checkout(this.home.objectID, start, end);
    }

  }
});
// CONCATENATED MODULE: ./components/PropertyDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyDetailsvue_type_script_lang_js_ = (PropertyDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyDetails.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "37c46ef6"
  
)

/* harmony default export */ var PropertyDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDescription.vue?vue&type=template&id=607c0df0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-background-gray"},[_vm._ssrNode("<div class=\"app-wrapper\"><div class=\"app-double-column\"><div class=\"app-padded-vertical\"><h2 class=\"app-subtitle\">Description</h2> <div class=\"app-description\">"+_vm._ssrEscape(_vm._s(_vm.home.description))+"</div></div> <div class=\"app-padded-vertical\">"+(_vm._ssrList((_vm.home.features),function(feature,index){return ("<div class=\"app-tag\">"+_vm._ssrEscape("\n                    "+_vm._s(feature)+"\n                ")+"</div>")}))+"</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyDescription.vue?vue&type=template&id=607c0df0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDescription.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PropertyDescriptionvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/PropertyDescription.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyDescriptionvue_type_script_lang_js_ = (PropertyDescriptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyDescription.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyDescriptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "08c69fbf"
  
)

/* harmony default export */ var PropertyDescription = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyMap.vue?vue&type=template&id=4bdd697e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"app-wrapper app-padded-vertical\"><h2 class=\"app-subtitle\">Location</h2> <p class=\"app-description\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.home.location.address)+" "+_vm._s(_vm.home.location.city)+"\n            "+_vm._s(_vm.home.location.state)+" "+_vm._s(_vm.home.location.country)+"\n        ")+"</p> <div class=\"app-map\"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyMap.vue?vue&type=template&id=4bdd697e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyMap.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PropertyMapvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  },

  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  }

});
// CONCATENATED MODULE: ./components/PropertyMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyMapvue_type_script_lang_js_ = (PropertyMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyMap.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59a66c1f"
  
)

/* harmony default export */ var PropertyMap = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyReviews.vue?vue&type=template&id=1a45622e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-padded-vertical"},[_vm._ssrNode("<div class=\"app-wrapper\">","</div>",[_vm._ssrNode("<div class=\"app-testimonials\">","</div>",_vm._l((_vm.reviews),function(review,index){return _vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"app-testimonial-header\"><div><img"+(_vm._ssrAttr("src",review.reviewer.image))+"></div> <div><p class=\"app-testimonial-name\">"+_vm._ssrEscape("\n                            "+_vm._s(review.reviewer.name)+"\n                        ")+"</p> <p class=\"app-testimonial-date\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.shortDate(review.date))+"\n                        ")+"</p></div></div> "),_vm._ssrNode("<div class=\"app-testimonial-body\">","</div>",[_c('short-text',{attrs:{"text":review.comment,"target":150}})],1)],2)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyReviews.vue?vue&type=template&id=1a45622e&

// EXTERNAL MODULE: ./utils/shortDate.js
var shortDate = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyReviews.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PropertyReviewsvue_type_script_lang_js_ = ({
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  methods: {
    shortDate: shortDate["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/PropertyReviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyReviewsvue_type_script_lang_js_ = (PropertyReviewsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyReviews.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyReviewsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a1439444"
  
)

/* harmony default export */ var PropertyReviews = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShortText: __webpack_require__(34).default})


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyHost.vue?vue&type=template&id=376d5b6f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-background-grey"},[_vm._ssrNode("<div class=\"app-wrapper app-padded-vertical\"><div class=\"app-host-header\"><div><img"+(_vm._ssrAttr("src",_vm.user.image))+"> <div><div class=\"app-host-name\">"+_vm._ssrEscape(_vm._s(_vm.user.name))+"</div> <div class=\"app-host-date\">"+_vm._ssrEscape("\n                        Joined in "+_vm._s(_vm.shortDate(_vm.user.joined))+"\n                    ")+"</div> <div class=\"app-flex\"><div class=\"app-host-reviews\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.user.reviewCount)+" reviews\n                        ")+"</div></div></div></div></div> <div class=\"app-host-description\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.user.description)+"\n        ")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyHost.vue?vue&type=template&id=376d5b6f&

// EXTERNAL MODULE: ./utils/shortDate.js
var shortDate = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyHost.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PropertyHostvue_type_script_lang_js_ = ({
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    shortDate: shortDate["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/PropertyHost.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyHostvue_type_script_lang_js_ = (PropertyHostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyHost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyHostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7d9e9116"
  
)

/* harmony default export */ var PropertyHost = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/_id.vue?vue&type=template&id=2443f1e7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('PropertyGallery',{attrs:{"images":_vm.home.images}}),_vm._ssrNode(" "),_c('PropertyDetails',{attrs:{"home":_vm.home}}),_vm._ssrNode(" "),_c('PropertyDescription',{attrs:{"home":_vm.home}}),_vm._ssrNode(" "),_c('PropertyMap',{attrs:{"home":_vm.home}}),_vm._ssrNode(" "),_c('PropertyReviews',{attrs:{"reviews":_vm.reviews}}),_vm._ssrNode(" "),_c('PropertyHost',{attrs:{"user":_vm.user}}),_vm._ssrNode(" <script type=\"application/ld+json\">"+(_vm._s(_vm.getSchema))+"</script>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/_id.vue?vue&type=template&id=2443f1e7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  computed: {
    getSchema() {
      return JSON.stringify({
        "@context": "http://schema.org",
        "@type": "BedAndBreakfast",
        name: this.home.title,
        image: this.$img(this.home.images[0], {
          width: 1200
        }, {
          provider: "cloudinary"
        }),
        address: {
          "@type": "PostalAddress",
          addressLocality: this.home.location.city,
          addressRegion: this.home.location.state,
          postalCode: this.home.location.zipcode,
          streetAddress: this.home.location.address
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: this.home.reviewValue,
          reviewCount: this.home.reviewCount
        }
      });
    }

  },

  head() {
    return {
      title: this.home.title,
      meta: [{
        hid: "og-type",
        property: "og:type",
        content: "website"
      }, {
        hid: "og-title",
        property: "og:title",
        content: this.home.title
      }, {
        hid: "og-description",
        property: "og:description",
        content: this.home.description
      }, {
        hid: "og-image",
        property: "og:image",
        content: this.$img(this.home.images[0], {
          width: 1200
        }, {
          provider: "cloudinary"
        })
      }, {
        hid: "og-url",
        property: "og:url",
        content: `${this.$config.rootUrl}/home/${this.home.objectID}`
      }, {
        hid: "t-type",
        property: "twitter:card",
        content: "summary_large_image"
      }]
    };
  },

  async asyncData({
    params,
    $dataApi,
    error
  }) {
    const responses = await Promise.all([$dataApi.getHome(params.id), $dataApi.getReviewsByHomeId(params.id), $dataApi.getUserByHomeId(params.id)]);
    const badResponse = responses.find(response => !response.ok);

    if (badResponse) {
      return error({
        statusCode: badResponse.status,
        message: badResponse.statusText
      });
    }

    return {
      home: responses[0].json,
      reviews: responses[1].json.hits,
      user: responses[2].json.hits[0]
    };
  }

});
// CONCATENATED MODULE: ./pages/home/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/home/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d572a66"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PropertyGallery: __webpack_require__(39).default,PropertyDetails: __webpack_require__(40).default,PropertyDescription: __webpack_require__(41).default,PropertyMap: __webpack_require__(42).default,PropertyReviews: __webpack_require__(43).default,PropertyHost: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map