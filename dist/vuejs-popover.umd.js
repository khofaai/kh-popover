(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuejs-popover"] = factory();
	else
		root["vuejs-popover"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "+xUi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xUi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("HrLf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/var/www/html/anas/js-projects/popover/node_modules/.cache/vue-loader","cacheIdentifier":"02bea4b2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Popover.vue?vue&type=template&id=e57a2932
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popover-wrapper",class:_vm.randUser,on:{"mouseleave":function($event){_vm.triggerHover(false)},"mouseover":function($event){_vm.triggerHover(true)}}},[_c('div',{class:_vm.setClassPopoverContainer()},[(_vm.icon)?_c('div',{staticClass:"avatar-slot",on:{"click":_vm.setClickPopoverPosition,"mouseover":_vm.setHoverPopoverPosition}},[_vm._t("avatar",[_c('a',{attrs:{"href":"javascript:;"}},[(_vm.user.photo == '')?_c('span',{staticClass:"inline-team-avatar radius-all"},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.user.avatar)+"\n\t\t\t\t\t")]):_c('img',{staticClass:"inline-team-avatar radius-all",attrs:{"src":_vm.user.photo}})])])],2):_vm._e(),_c('transition',{attrs:{"name":"fade-fast"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"vuej-popover",class:_vm.rand,style:({
					'top': _vm.top,
					'left': _vm.left
				}),on:{"mouseleave":function($event){_vm.triggerHover(false)},"mouseover":function($event){_vm.triggerHover(true)}}},[_c('span',{staticClass:"popover-header"}),_c('span',{staticClass:"vuej-popover-arrow",class:_vm.Ppos,style:({
						'left': _vm.left_arrow_pos,
						'top': _vm.top_arrow_pos
					})}),_vm._t("content",[_c('div',{staticClass:"vuej-popover-content"},[_c('div',{staticClass:"vuej-popover-infos"},[_vm._t("content_info",[_c('div',{staticClass:"vuej-popover-avatar radius-all"},[(_vm.user.photo == '')?_c('span',{staticClass:"img-circle team-small-avatar"},[_vm._v(_vm._s(_vm.user.avatar))]):_c('img',{staticClass:"team-small-avatar img-circle",attrs:{"src":_vm.user.photo}})]),_c('h4',{staticClass:"vuej-popover-name"},[_vm._v(_vm._s(_vm.user.name))]),_c('h5',{staticClass:"vuej-popover-position"},[_vm._v(_vm._s(_vm.user.position))])])],2),_vm._t("content_actions",[_c('div',{staticClass:"vuej-popover-actions"},[_vm._v("\n\n\t\t\t\t\t\t\t\t"+_vm._s(_vm.user.email)+"\n\t\t\t\t\t\t\t")])])],2)])],2)])],1),(_vm.name)?_c('b',{staticClass:"popover-name",on:{"click":_vm.setClickPopoverPosition,"mouseover":_vm.setHoverPopoverPosition}},[_vm._v("\n\t\t"+_vm._s(_vm.user.name)+"\n\t")]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Popover.vue?vue&type=template&id=e57a2932

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Popover.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ucfirst = function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var strRand = function strRand() {
  var str_length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var rand_str = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < str_length; i++) {
    rand_str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return rand_str;
};

/* harmony default export */ var Popovervue_type_script_lang_js = ({
  name: 'Popover',
  props: {
    user: {
      default: function _default() {
        return {
          id: 0,
          photo: '',
          name: 'header name',
          avatar: 'UN',
          email: 'action@name.kh'
        };
      }
    },
    trigger: {
      default: 'hover'
    },
    name: {
      default: false
    },
    icon: {
      default: true
    },
    position: {
      default: 'auto'
    },
    containter: {
      dafault: null
    }
  },
  data: function data() {
    var random = strRand();
    return {
      trigger_options: ['hover', 'click'],
      active: false,
      rand: 'popover_' + random,
      randUser: 'vuej-popover_' + random,
      top: -500,
      left: -500,
      left_arrow_pos: '',
      top_arrow_pos: '',
      Pwidth: 242,
      Pheight: 196,
      unite: 'px',
      calc_marg: 10,
      available_positions: ['top', 'bottom', 'auto'],
      Ppos: 'bottom',
      Ptrigger: 'hover'
    };
  },
  methods: {
    setPopoverTopPosition: function setPopoverTopPosition(top, topOffset, cal_marg, _left) {
      this.Ppos = 'top';
      var cal_top = parseInt(top + topOffset - this.Pheight);
      this.top = cal_top + this.unite;
      this.left = cal_marg + (cal_marg == 0 ? this.calc_marg : -(this.calc_marg + (this.isMobile ? 2 : 0))) + this.unite;
      this.left_arrow_pos = parseInt(this.Pwidth / 2 - this.calc_marg + _left) + this.unite;
      this.top_arrow_pos = cal_top + this.Pheight - 20 + this.unite;
    },
    setPopoverBottomPosition: function setPopoverBottomPosition(top, topOffset, cal_marg, _left) {
      var width = window.outerWidth;

      if (width - _left < this.Pwidth) {
        cal_marg -= this.calc_marg + (this.isMobile ? 2 : 0);
      } else if (_left < 0) {
        cal_marg += this.calc_marg;
      }

      this.Ppos = 'bottom';
      this.top = parseInt(top + 40 + topOffset) + this.unite;
      this.left_arrow_pos = parseInt(this.Pwidth / 2 - this.calc_marg + _left - cal_marg) + this.unite;
      this.top_arrow_pos = '-' + this.calc_marg + this.unite;
      this.left = cal_marg + this.unite;
    },
    setPopoverPosition: function setPopoverPosition() {
      var pos = document.querySelector('.' + this.randUser).getBoundingClientRect();
      var topOffset = document.documentElement.scrollTop;
      var width = window.outerWidth;
      var cal_left = parseInt(pos.left - 109);
      var _left = cal_left;
      var cal_right = parseInt(pos.right - 109);
      var _right = cal_right;
      var cal_marg = cal_left;

      if (cal_left + this.Pwidth > width) {
        cal_marg = width - this.Pwidth;
      } else if (cal_right < 0) {
        cal_marg = 0;
      }

      if (this.Ppos != 'auto' && typeof this['setPopover' + ucfirst(this.Ppos) + 'Position'] !== 'undefined') {
        this['setPopover' + ucfirst(this.Ppos) + 'Position'](pos.top, topOffset, cal_marg, _left);
      } else {
        if (window.outerHeight - pos.top - this.Pheight < this.Pheight) {
          this.setPopoverTopPosition(pos.top, topOffset, cal_marg, _left);
        } else {
          this.setPopoverBottomPosition(pos.top, topOffset, cal_marg, _left);
        }
      }
    },
    setClickPopoverPosition: function setClickPopoverPosition() {
      if (this.Ptrigger == 'click') {
        this.setPopoverPosition();
        this.togglePopover();
      }
    },
    setHoverPopoverPosition: function setHoverPopoverPosition() {
      if (this.Ptrigger == 'hover') {
        this.setPopoverPosition();
      }
    },
    triggerHover: function triggerHover(status) {
      if (this.Ptrigger == 'hover') {
        this.active = status;
      }
    },
    togglePopover: function togglePopover() {
      if (this.active) {
        return this.hidePopover();
      }

      return this.showPopover();
    },
    showPopover: function showPopover() {
      var _this = this;

      this.active = true;
      setTimeout(function () {
        return document.getElementById('app').addEventListener('click', _this.hidePopover);
      }, 0);
    },
    hidePopover: function hidePopover() {
      this.active = false;
      document.getElementById('app').removeEventListener('click', this.hidePopover);
    },
    emitActions: function emitActions(action) {
      this.$emit('action', {
        action: action,
        user: user
      });
    },
    setClassPopoverContainer: function setClassPopoverContainer() {
      var cls = '';
      if (this.icon) cls += 'inline-team-item';
      return cls;
    },
    detectIfMobileOrTablet: function detectIfMobileOrTablet() {
      var isMobile = false;

      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) isMobile = true;
      })(navigator.userAgent || navigator.vendor || window.opera);

      return isMobile;
    },
    initPopTrigger: function initPopTrigger() {
      if (this.trigger_options.indexOf(this.trigger) != -1) {
        this.Ptrigger = this.trigger;
      }
    },
    initPopPosition: function initPopPosition() {
      if (this.available_positions.indexOf(this.position) != -1) {
        this.Ppos = this.position;
      }
    },
    initPopIsMobile: function initPopIsMobile() {
      this.isMobile = this.detectIfMobileOrTablet();

      if (this.isMobile) {
        this.Ptrigger = 'click';
      }
    },
    initPopContainter: function initPopContainter() {
      if (this.container !== null) {// here container logic
      } else {// here no container assigned logic
        }
    },
    initKhPopover: function initKhPopover() {
      var userPopover = document.querySelector('.' + this.rand);
      userPopover.outerHtml = '';
      document.querySelector('body').appendChild(userPopover);
      this.initPopTrigger();
      this.initPopPosition();
      this.initPopIsMobile();
    }
  },
  mounted: function mounted() {
    this.initKhPopover();
  }
});
// CONCATENATED MODULE: ./src/components/Popover.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Popovervue_type_script_lang_js = (Popovervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Popover.vue?vue&type=style&index=0&lang=css
var Popovervue_type_style_index_0_lang_css = __webpack_require__("vbQt");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Popover.vue






/* normalize component */

var component = normalizeComponent(
  components_Popovervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Popover = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Popover);



/***/ }),

/***/ "/8qs":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "HrLf":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "vbQt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/8qs");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuejs-popover.umd.js.map