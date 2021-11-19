exports.ids = [12,3];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageUploader.vue?vue&type=template&id=0c955ca8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"file\" accept=\".jpeg,.jpg,image/jpeg\">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ImageUploader.vue?vue&type=template&id=0c955ca8&

// EXTERNAL MODULE: ./utils/fetchUtils.js
var fetchUtils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageUploader.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ImageUploadervue_type_script_lang_js_ = ({
  methods: {
    async uploadFile(e) {
      const file = e.target.files[0];

      if (!file) {
        return;
      }

      const filename = file.name.split(".").slice(0, -1).join(".") + Date.now();
      const options = {
        timestamp: Date.now(),
        public_id: filename
      };
      const response = await Object(fetchUtils["b" /* unwrap */])(await fetch("/api/cloudinary/signature", {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
          "Content-Type": "application/json"
        }
      }));
      const signature = response.json.signature;

      const readData = fileObj => new Promise(resolve => {
        const reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);

        reader.readAsDataURL(fileObj);
      });

      const data = await readData(file);
      const asset = await this.$cloudinary.upload(data, { ...options,
        apiKey: this.$config.cloudinary.apiKey,
        signature
      });
      this.$emit("file-uploaded", asset.public_id);
    }

  }
});
// CONCATENATED MODULE: ./components/ImageUploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageUploadervue_type_script_lang_js_ = (ImageUploadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ImageUploader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImageUploadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0bd278c1"
  
)

/* harmony default export */ var ImageUploader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homes_vue_vue_type_style_index_0_id_9e2fa0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homes_vue_vue_type_style_index_0_id_9e2fa0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homes_vue_vue_type_style_index_0_id_9e2fa0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homes_vue_vue_type_style_index_0_id_9e2fa0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homes_vue_vue_type_style_index_0_id_9e2fa0d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/homes.vue?vue&type=template&id=9e2fa0d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h2 class=\"text-lg font-bold\" data-v-9e2fa0d6>Delete a home</h2> "+(_vm._ssrList((_vm.homeList),function(home){return ("<div data-v-9e2fa0d6>"+_vm._ssrEscape("\n        "+_vm._s(home.title)+"\n        ")+"<button class=\"text-red-800\" data-v-9e2fa0d6>\n            delete\n        </button></div>")}))+" <div class=\"border-2 border-mineshaft \" data-v-9e2fa0d6></div> <h2 class=\"text-lg font-bold\" data-v-9e2fa0d6>Add a home</h2> "),_vm._ssrNode("<form class=\"form\" data-v-9e2fa0d6>","</form>",[_vm._ssrNode("<div data-v-9e2fa0d6>","</div>",[_vm._ssrNode("<label class=\"font-bold\" data-v-9e2fa0d6>Images</label> "),_vm._l((_vm.home.images),function(imageInput,index){return _c('ImageUploader',{key:index})})],2),_vm._ssrNode(" <div class=\"mt-3\" data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>Title</label><br data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.title)))+" class=\"w-60\" data-v-9e2fa0d6></div> <div data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>Description</label><br data-v-9e2fa0d6> <textarea type=\"text\" class=\"w-104\" data-v-9e2fa0d6>"+_vm._ssrEscape(_vm._s(_vm.home.description))+"</textarea></div> <div data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>Note</label><br data-v-9e2fa0d6> <textarea type=\"text\" class=\"w-104\" data-v-9e2fa0d6>"+_vm._ssrEscape(_vm._s(_vm.home.note))+"</textarea></div> <div data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>Features</label><br data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.features[0])))+" class=\"w-26\" data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.features[1])))+" class=\"w-26\" data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.features[2])))+" class=\"w-26\" data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.features[3])))+" class=\"w-26\" data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.features[4])))+" class=\"w-26\" data-v-9e2fa0d6></div> <div data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>Price per night</label><br data-v-9e2fa0d6> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.home.pricePerNight)))+" class=\"w-14\" data-v-9e2fa0d6></div> <label class=\"font-bold\" data-v-9e2fa0d6>Guests / Rooms / Beds / Baths</label><br data-v-9e2fa0d6> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.home.guests)))+" class=\"w-14\" data-v-9e2fa0d6> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.home.bedrooms)))+" class=\"w-14\" data-v-9e2fa0d6> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.home.beds)))+" class=\"w-14\" data-v-9e2fa0d6> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.home.bathrooms)))+" class=\"w-14\" data-v-9e2fa0d6> <div data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>Address</label><br data-v-9e2fa0d6> <input type=\"text\" autocomplete=\"off\" placeholder=\"select a location\" data-v-9e2fa0d6></div> <div data-v-9e2fa0d6><div data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>Address</label>:<br data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.location.address)))+" class=\"w-26\" data-v-9e2fa0d6></div> <div data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>City</label>:<br data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.location.city)))+" class=\"w-26\" data-v-9e2fa0d6></div> <div data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>State</label>:<br data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.location.state)))+" class=\"w-26\" data-v-9e2fa0d6></div> <div data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>Postal Code</label>:<br data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.location.postalCode)))+" class=\"w-26\" data-v-9e2fa0d6></div> <div data-v-9e2fa0d6><label class=\"font-bold\" data-v-9e2fa0d6>Country</label>:<br data-v-9e2fa0d6> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.home.location.country)))+" class=\"w-26\" data-v-9e2fa0d6></div></div> "),_vm._ssrNode("<div data-v-9e2fa0d6>","</div>",[_vm._ssrNode("<label class=\"font-bold\" data-v-9e2fa0d6>Dates Available</label>:<br data-v-9e2fa0d6> "),_vm._l((_vm.home.availabilityRanges),function(range,index){return _c('date-picker',{key:index,attrs:{"is-range":"","timezone":"UTC","modelConfig":{ timeAdjust: '00:00:00' }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var inputValue = ref.inputValue;
var inputEvents = ref.inputEvents;
return [_c('input',_vm._g({domProps:{"value":inputValue.start}},inputEvents.start)),_vm._v("\n                    to\n                    "),_c('input',_vm._g({domProps:{"value":inputValue.end}},inputEvents.end))]}}],null,true),model:{value:(_vm.home.availabilityRanges[index]),callback:function ($$v) {_vm.$set(_vm.home.availabilityRanges, index, $$v)},expression:"home.availabilityRanges[index]"}})})],2),_vm._ssrNode(" <button class=\"mt-3 ml-1 bg-mineshaft self-stretch px-10 py-3 rounded-lg text-white\" data-v-9e2fa0d6>\n            Add\n        </button>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/homes.vue?vue&type=template&id=9e2fa0d6&scoped=true&

// EXTERNAL MODULE: ./utils/fetchUtils.js
var fetchUtils = __webpack_require__(2);

// EXTERNAL MODULE: ./components/ImageUploader.vue + 4 modules
var ImageUploader = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/homes.vue?vue&type=script&lang=js&
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


/* harmony default export */ var homesvue_type_script_lang_js_ = ({
  components: {
    ImageUploader: ImageUploader["default"]
  },

  data() {
    return {
      homeList: [],
      home: {
        title: "",
        description: "",
        note: "",
        pricePerNight: "",
        guests: "",
        bedrooms: "",
        beds: "",
        bathrooms: "",
        features: ["", "", "", "", ""],
        location: {
          address: "",
          city: "",
          state: "",
          postalCode: "",
          country: ""
        },
        _geoloc: {
          lat: "",
          lng: ""
        },
        images: [null, null, null, null, null],
        availabilityRanges: [{
          start: "",
          end: ""
        }, {
          start: "",
          end: ""
        }]
      }
    };
  },

  mounted() {
    this.$maps.makeAutoComplete(this.$refs.locationSelector, ["address"]);
    this.setHomesList();
  },

  methods: {
    async deleteHome(homeId) {
      await fetch(`/api/homes/${homeId}`, {
        method: "DELETE"
      });
      const index = this.homeList.findIndex(obj => obj.objectID === homeId);
      this.homeList.splice(index, 1);
    },

    async setHomesList() {
      this.homeList = (await Object(fetchUtils["b" /* unwrap */])(await fetch("/api/homes/user"))).json;
    },

    imageUpdated(imageUrl, index) {
      console.log("imageulr", imageUrl);
      this.home.images[index] = imageUrl;
    },

    changed(event) {
      var _this$getAddressParts, _this$getAddressParts2, _this$getAddressParts3, _this$getAddressParts4, _this$getAddressParts5, _this$getAddressParts6;

      const addressParts = event.detail.address_components;
      const street = ((_this$getAddressParts = this.getAddressParts(addressParts, "street_number")) === null || _this$getAddressParts === void 0 ? void 0 : _this$getAddressParts.short_name) || "";
      const route = ((_this$getAddressParts2 = this.getAddressParts(addressParts, "route")) === null || _this$getAddressParts2 === void 0 ? void 0 : _this$getAddressParts2.short_name) || "";
      this.home.location.address = street + " " + route;
      this.home.location.city = ((_this$getAddressParts3 = this.getAddressParts(addressParts, "locality")) === null || _this$getAddressParts3 === void 0 ? void 0 : _this$getAddressParts3.short_name) || "";
      this.home.location.state = ((_this$getAddressParts4 = this.getAddressParts(addressParts, "administrative_area_level_1")) === null || _this$getAddressParts4 === void 0 ? void 0 : _this$getAddressParts4.long_name) || "";
      this.home.location.postalCode = ((_this$getAddressParts5 = this.getAddressParts(addressParts, "postal_code")) === null || _this$getAddressParts5 === void 0 ? void 0 : _this$getAddressParts5.short_name) || "";
      this.home.location.country = ((_this$getAddressParts6 = this.getAddressParts(addressParts, "country")) === null || _this$getAddressParts6 === void 0 ? void 0 : _this$getAddressParts6.short_name) || "";
      const geo = event.detail.geometry.location;
      this.home._geoloc.lat = geo.lat();
      this.home._geoloc.lng = geo.lng();
    },

    getAddressParts(parts, type) {
      return parts.find(part => part.types.includes(type));
    },

    async onSubmit() {
      console.log("this.home: ", this.home);
      const response = await Object(fetchUtils["b" /* unwrap */])(await fetch("/api/homes", {
        method: "POST",
        body: JSON.stringify(this.home),
        headers: {
          "Content-Type": "application/json"
        }
      }));
      this.homeList.push({
        title: this.home.title,
        objectId: response.json.homeId
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/homes.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_homesvue_type_script_lang_js_ = (homesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/admin/homes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_homesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9e2fa0d6",
  "6fa7eaf0"
  
)

/* harmony default export */ var homes = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ImageUploader: __webpack_require__(35).default})


/***/ })

};;
//# sourceMappingURL=homes.js.map