/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/(() => {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/"./src/js/burger.js": (
    /*!**************************!*\
      !*** ./src/js/burger.js ***!
      \**************************/
    /***/
    () => {
      eval("document.querySelector(\".burger\").addEventListener(\"click\", function () {\n  this.classList.toggle(\"active\");\n  document.querySelector(\"nav\").classList.toggle(\"open\");\n});\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./src/js/burger.js?");

      /***/
    }),
    /***/"./src/js/script.js": (
    /*!**************************!*\
      !*** ./src/js/script.js ***!
      \**************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.js */ \"./src/js/burger.js\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./src/js/script.js?");

      /***/
    }),
    /***/"./src/js/slider.js": (
    /*!**************************!*\
      !*** ./src/js/slider.js ***!
      \**************************/
    /***/
    () => {
      eval("const images = document.querySelectorAll(\".slider-img\");\nconst controlls = document.querySelectorAll(\".controls\");\nconst sliderNames = document.querySelectorAll(\".slider-names\");\nlet imageIndex = 0;\nfunction show(index) {\n  images[imageIndex].classList.remove(\"active-slider\");\n  images[index].classList.add(\"active-slider\");\n  imageIndex = index;\n}\ncontrolls.forEach(e => {\n  e.addEventListener(\"click\", () => {\n    if (event.target.classList.contains(\"prev\")) {\n      let index = imageIndex - 1;\n      if (index < 0) {\n        index = images.length - 1;\n      }\n      show(index);\n    } else if (event.target.classList.contains(\"next\")) {\n      let index = imageIndex + 1;\n      if (index >= images.length) {\n        index = 0;\n      }\n      show(index);\n    }\n  });\n});\nshow(imageIndex);\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./src/js/slider.js?");

      /***/
    }),
    /***/"./node_modules/css-loader/dist/cjs.js!./src/css/style.css": (
    /*!*****************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
      \*****************************************************************/
    /***/
    () => {
      eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\n\\nSyntaxError\\n\\n(132:3) D:\\\\ОБУЧЕНИЕ\\\\Макеты\\\\landing_healthy_page webpack\\\\src\\\\css\\\\style.css Unknown word\\n\\n \\u001b[90m 130 | \\u001b[39m  position\\u001b[33m:\\u001b[39m absolute\\u001b[33m;\\u001b[39m\\n \\u001b[90m 131 | \\u001b[39m  z\\n\\u001b[1m\\u001b[31m>\\u001b[39m\\u001b[22m\\u001b[90m 132 | \\u001b[39m  left\\u001b[33m:\\u001b[39m 70%\\u001b[33m;\\u001b[39m\\n \\u001b[90m     | \\u001b[39m  \\u001b[1m\\u001b[31m^\\u001b[39m\\u001b[22m\\n \\u001b[90m 133 | \\u001b[39m  top\\u001b[33m:\\u001b[39m 70%\\u001b[33m;\\u001b[39m\\n \\u001b[90m 134 | \\u001b[39m  right\\u001b[33m:\\u001b[39m 5%\\u001b[33m;\\u001b[39m\\n\");\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

      /***/
    }),
    /***/"./src/css/style.css": (
    /*!***************************!*\
      !*** ./src/css/style.css ***!
      \***************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./src/css/style.css?");

      /***/
    }),
    /***/"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/
    /***/
    module => {
      "use strict";

      eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

      /***/
    }),
    /***/"./node_modules/style-loader/dist/runtime/insertBySelector.js": (
    /*!********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
      \********************************************************************/
    /***/
    module => {
      "use strict";

      eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

      /***/
    }),
    /***/"./node_modules/style-loader/dist/runtime/insertStyleElement.js": (
    /*!**********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
      \**********************************************************************/
    /***/
    module => {
      "use strict";

      eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

      /***/
    }),
    /***/"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js": (
    /*!**********************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
      \**********************************************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

      /***/
    }),
    /***/"./node_modules/style-loader/dist/runtime/styleDomAPI.js": (
    /*!***************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
      \***************************************************************/
    /***/
    module => {
      "use strict";

      eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

      /***/
    }),
    /***/"./node_modules/style-loader/dist/runtime/styleTagTransform.js": (
    /*!*********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
      \*********************************************************************/
    /***/
    module => {
      "use strict";

      eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://landing_healthy_page_webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

      /***/
    })

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/
  (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = module => {
      /******/var getter = module && module.__esModule ? /******/() => module['default'] : /******/() => module;
      /******/
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/
  (() => {
    /******/ // define getter functions for harmony exports
    /******/__webpack_require__.d = (exports, definition) => {
      /******/for (var key in definition) {
        /******/if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (() => {
    /******/__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  (() => {
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = exports => {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/
  (() => {
    /******/__webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/
  var __webpack_exports__ = __webpack_require__("./src/js/script.js");
  /******/
  /******/
})();