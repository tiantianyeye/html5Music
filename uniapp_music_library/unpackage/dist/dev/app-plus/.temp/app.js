require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(2);var _vue2 = _interopRequireDefault(_vue);\nvar _App = __webpack_require__(9);var _App2 = _interopRequireDefault(_App);\nvar _store = __webpack_require__(13);var _store2 = _interopRequireDefault(_store);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue2.default.prototype.$store = _store2.default;\n_vue2.default.config.productionTip = false;\n\n_App2.default.mpType = 'app';\n\nvar app = new _vue2.default(_extends({\n\tstore: _store2.default },\n_App2.default));\n\napp.$mount();\n\n_vue2.default.prototype.globalData = {\n\tbgAudioMannager: uni.getBackgroundAudioManager() //全局播放器管理\n};\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// E:/我的资料/mytest/uniapp/我的音乐/main.js\n// module id = 7\n// module chunks = 2\n\n//# sourceURL=uni-app:///main.js?eae7");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_ruanjian_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_ruanjian_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_ruanjian_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_ruanjian_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_ruanjian_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_ruanjian_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(10)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\nvar __vue_template__ = null\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_ruanjian_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_ruanjian_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_ruanjian_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,\n  __vue_template__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"E:\\\\我的资料\\\\mytest\\\\uniapp\\\\我的音乐\\\\App.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-f48705c8\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-f48705c8\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// E:/我的资料/mytest/uniapp/我的音乐/App.vue\n// module id = 9\n// module chunks = 2\n\n");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-f48705c8\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://ruanjian//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!E:/我的资料/mytest/uniapp/我的音乐/App.vue\n// module id = 10\n// module chunks = 2\n\n");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n{\n\tonLaunch: function onLaunch() {\n\t\t//console.log('App Launch')\n\t},\n\tonShow: function onShow() {\n\t\t//console.log('App Show')\n\t},\n\tonHide: function onHide() {\n\t\t//console.log('App Hide')\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://ruanjian//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://ruanjian//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://ruanjian//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://ruanjian//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://ruanjian//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!E:/我的资料/mytest/uniapp/我的音乐/App.vue\n// module id = 12\n// module chunks = 2\n\n//# sourceURL=uni-app:///App.vue?fa2f");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _vue = __webpack_require__(2);var _vue2 = _interopRequireDefault(_vue);\nvar _vuex = __webpack_require__(3);var _vuex2 = _interopRequireDefault(_vuex);\nvar _state = __webpack_require__(14);var _state2 = _interopRequireDefault(_state);\nvar _getters = __webpack_require__(15);var _getters2 = _interopRequireDefault(_getters);\nvar _actions = __webpack_require__(16);var _actions2 = _interopRequireDefault(_actions);\nvar _mutations = __webpack_require__(17);var _mutations2 = _interopRequireDefault(_mutations);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue2.default.use(_vuex2.default);exports.default =\n\n\nnew _vuex2.default.Store({\n    state: _state2.default,\n    getters: _getters2.default,\n    actions: _actions2.default,\n    mutations: _mutations2.default });\n\n//////////////////\n// WEBPACK FOOTER\n// E:/我的资料/mytest/uniapp/我的音乐/store/index.js\n// module id = 13\n// module chunks = 2\n\n//# sourceURL=uni-app:///store/index.js?6ecc");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = {\n\t\t\t\tsongList: [], //歌曲列表\n\t\t\t\tsongDetailInfo: {}, //歌曲详细信息\n\t\t\t\tisPlaying: false //是否在播放歌曲\n};\n\n//////////////////\n// WEBPACK FOOTER\n// E:/我的资料/mytest/uniapp/我的音乐/store/state.js\n// module id = 14\n// module chunks = 2\n\n//# sourceURL=uni-app:///store/state.js?2fce");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = {\n\t//获取歌曲列表\n\tsongList: function songList(state) {\n\t\treturn state.songList;\n\t},\n\t//获取歌曲相信信息\n\tmusicDetailInfo: function musicDetailInfo(state) {\n\t\treturn state.songDetailInfo;\n\t},\n\t//获取歌曲播放状态\n\tisPlaying: function isPlaying(state) {\n\t\treturn state.isPlaying;\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// E:/我的资料/mytest/uniapp/我的音乐/store/getters.js\n// module id = 15\n// module chunks = 2\n\n//# sourceURL=uni-app:///store/getters.js?c5ce");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = {\n\t//设置歌曲列表\n\tsetSongList: function setSongList(_ref, songList) {var commit = _ref.commit,getters = _ref.getters;\n\t\tcommit('SET_SONGLIST', songList);\n\t},\n\t//设置单首歌曲详细信息\n\tsetSongDetailInfo: function setSongDetailInfo(_ref2, songDetail) {var commit = _ref2.commit,getters = _ref2.getters;\n\t\tcommit('SET_SONGDETAIL', songDetail);\n\t},\n\t//暂停歌曲\n\tsetMusicPause: function setMusicPause(_ref3) {var commit = _ref3.commit,getters = _ref3.getters;\n\t\tcommit('SET_MUSICPAUSE');\n\t},\n\t//播放歌曲\n\tsetMusicPlay: function setMusicPlay(_ref4) {var commit = _ref4.commit,getters = _ref4.getters;\n\t\tcommit('SET_MUSICPLAY');\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// E:/我的资料/mytest/uniapp/我的音乐/store/actions.js\n// module id = 16\n// module chunks = 2\n\n//# sourceURL=uni-app:///store/actions.js?74c4");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = {\n\t//设置歌曲列表\n\tSET_SONGLIST: function SET_SONGLIST(state, songList) {\n\t\tstate.songList = songList;\n\t},\n\t//设置歌曲详细信息\n\tSET_SONGDETAIL: function SET_SONGDETAIL(state, songDetailInfo) {\n\t\tstate.songDetailInfo = songDetailInfo;\n\t},\n\t//暂停音乐\n\tSET_MUSICPAUSE: function SET_MUSICPAUSE(state) {\n\t\tstate.isPlaying = false;\n\t},\n\t//播放音乐\n\tSET_MUSICPLAY: function SET_MUSICPLAY(state) {\n\t\tstate.isPlaying = true;\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// E:/我的资料/mytest/uniapp/我的音乐/store/mutations.js\n// module id = 17\n// module chunks = 2\n\n//# sourceURL=uni-app:///store/mutations.js?ca2f");

/***/ })
],[7]);