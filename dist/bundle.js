/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/file-loader/dist/cjs.js!./src/sass/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js!./src/sass/style.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e6525270ef9a6fd6c1582c70e1cb85c9.css\";\n\n//# sourceURL=webpack:///./src/sass/style.css?./node_modules/file-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyleUrl.js":
/*!******************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyleUrl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n\r\nfunction addAttrs (element, attrs) {\r\n\tObject.keys(attrs).forEach(function (key) {\r\n\t\telement.setAttribute(key, attrs[key]);\r\n\t});\r\n}\r\n\r\nmodule.exports = function addStyleUrl (url, options) {\r\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\r\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\r\n\t}\r\n\r\n\toptions = options || {};\r\n\r\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\r\n\r\n\toptions.hmr = typeof options.hmr === 'undefined' ? true : options.hmr;\r\n\r\n\tvar link = document.createElement(\"link\");\r\n\r\n\tlink.rel = \"stylesheet\";\r\n\tlink.type = \"text/css\";\r\n\tlink.href = url;\r\n\r\n\taddAttrs(link, options.attrs);\r\n\r\n\tvar head = document.getElementsByTagName(\"head\")[0];\r\n\r\n\thead.appendChild(link);\r\n\r\n\tif (options.hmr && module.hot) {\r\n\t\treturn function(url) {\r\n\t\t\tif(typeof url === \"string\") {\r\n\t\t\t\tlink.href = url;\r\n\t\t\t} else {\r\n\t\t\t\thead.removeChild(link);\r\n\t\t\t}\r\n\t\t};\r\n\t}\r\n}\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyleUrl.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\r\n\tif (!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tif (!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.css */ \"./src/sass/style.css\");\n/* harmony import */ var _sass_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_simplejoys_woff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/simplejoys.woff */ \"./src/sass/simplejoys.woff\");\n/* harmony import */ var _sass_simplejoys_woff__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_simplejoys_woff__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sass_Proxima_Nova_Alt_Regular_webfont_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sass/Proxima Nova Alt Regular-webfont.woff */ \"./src/sass/Proxima Nova Alt Regular-webfont.woff\");\n/* harmony import */ var _sass_Proxima_Nova_Alt_Regular_webfont_woff__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_Proxima_Nova_Alt_Regular_webfont_woff__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n(function() {\r\n  const searchBtn = document.querySelector('.func-btn.search');\r\n  const closeBtn = document.querySelector('.closeBtn');\r\n  const closeBtnPopUp = document.querySelector('.closeBtn-popUp');\r\n  const FindBtn = document.querySelector('.submitSerachBtn');\r\n  const searchFieldJob = document.querySelector('.search-field-job');\r\n  const suggestItem = document.querySelectorAll('.suggestion-item');\r\n  const errorText = document.querySelector('.error-text');\r\n  const numRegex = new RegExp(\"^[0-9]+$\");\r\n  //const checkBoxList = document.querySelectorAll('.accordion-select');\r\n\r\n  searchBtn.addEventListener('click',() => {\r\n    document.querySelector('.search-field-container').classList.toggle('showField');\r\n    document.querySelector('.suggestion-list-wrapper').classList.remove('showSuggestionList');\r\n    searchFieldJob.value = '';\r\n  });\r\n\r\n  FindBtn.addEventListener('click', () => {\r\n    //let numResult = numRegex.match(searchFieldJob.value);\r\n    if (searchFieldJob.value == \"\" || searchFieldJob.value == null)\r\n    {\r\n      searchFieldJob.classList.add('errorStyle');\r\n      return false;\r\n\r\n    }\r\n    //if (numResult)\r\n    if (searchFieldJob.value.match(numRegex))\r\n    {\r\n      searchFieldJob.classList.add('errorStyle');\r\n      errorText.classList.add('showError');\r\n      errorText.innerText = 'You must enter only letters A-Z';\r\n    }\r\n\r\n    else{\r\n      document.querySelector('.search-field-container').classList.remove('showField');\r\n      document.querySelector('.suggestion-list-wrapper').classList.remove('showSuggestionList');\r\n      document.querySelector('.loader-wrapper').classList.add('showLoader');\r\n      searchFieldJob.classList.remove('errorStyle');\r\n      errorText.classList.remove('showError');\r\n      setTimeout(() => {\r\n        document.querySelector('.loader-wrapper').classList.remove('showLoader');\r\n        document.querySelector('.fadeBg').classList.add('showFadeBg');\r\n        document.querySelector('.results-popup-wrapper').classList.add('showPopUp');\r\n        document.querySelector('.results-text').innerText = `The value ${searchFieldJob.value} found 10 results`;\r\n      },1000);\r\n    }\r\n\r\n  });\r\n  closeBtnPopUp.addEventListener('click', () => {\r\n    document.querySelector('.results-popup-wrapper').classList.remove('showPopUp');\r\n    document.querySelector('.fadeBg').classList.remove('showFadeBg');\r\n  });\r\n  closeBtn.addEventListener('click', () => {\r\n    document.querySelector('.search-field-container').classList.remove('showField');\r\n    document.querySelector('.suggestion-list-wrapper').classList.remove('showSuggestionList');\r\n    searchFieldJob.value = '';\r\n  });\r\n\r\n  searchFieldJob.addEventListener('focus', () => {\r\n    document.querySelector('.fadeBg').classList.add('showFadeBg');\r\n    document.querySelector('.suggestion-list-wrapper').classList.add('showSuggestionList');\r\n    searchFieldJob.classList.remove('errorStyle');\r\n    errorText.classList.remove('showError');\r\n  });\r\n\r\n  searchFieldJob.addEventListener('input', () => {\r\n    document.querySelector('.suggestion-list-wrapper').classList.remove('showSuggestionList');\r\n  });\r\n\r\n  suggestItem.forEach((item) => {\r\n    item.addEventListener(\"click\", chooseSuggestion);\r\n  });\r\n\r\n\r\n  function chooseSuggestion(e) {\r\n    searchFieldJob.value = '';\r\n    searchFieldJob.value = e.target.innerText;\r\n    console.log(\"event\",e.target.innerText);\r\n    document.querySelector('.suggestion-list-wrapper').classList.remove('showSuggestionList');\r\n  }\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/sass/Proxima Nova Alt Regular-webfont.woff":
/*!********************************************************!*\
  !*** ./src/sass/Proxima Nova Alt Regular-webfont.woff ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"12ccd551e98723a35f926077a3dd40c4.woff\";\n\n//# sourceURL=webpack:///./src/sass/Proxima_Nova_Alt_Regular-webfont.woff?");

/***/ }),

/***/ "./src/sass/simplejoys.woff":
/*!**********************************!*\
  !*** ./src/sass/simplejoys.woff ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2bdb6ce36533a6a2876a030e29e1a46e.woff\";\n\n//# sourceURL=webpack:///./src/sass/simplejoys.woff?");

/***/ }),

/***/ "./src/sass/style.css":
/*!****************************!*\
  !*** ./src/sass/style.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyleUrl.js */ \"./node_modules/style-loader/lib/addStyleUrl.js\")(\n  __webpack_require__(/*! !../../node_modules/file-loader/dist/cjs.js!./style.css */ \"./node_modules/file-loader/dist/cjs.js!./src/sass/style.css\")\n, {\"hmr\":true});\nif(false) {}\n\n//# sourceURL=webpack:///./src/sass/style.css?");

/***/ })

/******/ });