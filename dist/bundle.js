/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ (() => {

eval("document.querySelector(\".burger\").addEventListener(\"click\", function () {\n  this.classList.toggle(\"active\");\n  document.querySelector(\"nav\").classList.toggle(\"open\");\n});\n\n//# sourceURL=webpack://y/./src/js/burger.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.js */ \"./src/js/burger.js\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://y/./src/js/script.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("const images = document.querySelectorAll(\".slider-img\");\nconst controlls = document.querySelectorAll(\".controls\");\nconst sliderNames = document.querySelectorAll(\".slider-names\");\nlet imageIndex = 0;\nfunction show(index) {\n  images[imageIndex].classList.remove(\"active-slider\");\n  images[index].classList.add(\"active-slider\");\n  imageIndex = index;\n}\ncontrolls.forEach(e => {\n  e.addEventListener(\"click\", () => {\n    if (event.target.classList.contains(\"prev\")) {\n      let index = imageIndex - 1;\n      if (index < 0) {\n        index = images.length - 1;\n      }\n      show(index);\n    } else if (event.target.classList.contains(\"next\")) {\n      let index = imageIndex + 1;\n      if (index >= images.length) {\n        index = 0;\n      }\n      show(index);\n    }\n  });\n});\nshow(imageIndex);\n\n//# sourceURL=webpack://y/./src/js/slider.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/img_header.png */ \"./src/img/img_header.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/interior-left.jpg */ \"./src/img/interior-left.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/interior-right.png */ \"./src/img/interior-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/set-1.jpg */ \"./src/img/set-1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/set-2.jpg */ \"./src/img/set-2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/set-3.jpg */ \"./src/img/set-3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/set-4.jpg */ \"./src/img/set-4.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nul,\r\nol[class],\r\nli,\r\nfigure,\r\nfigcaption,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  cursor: pointer;\r\n  scroll-behavior: smooth;\r\n}\r\nli {\r\n  list-style: none;\r\n}\r\nimg {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n.container {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 15px;\r\n}\r\nheader {\r\n  padding-right: 40px;\r\n  padding-left: 40px;\r\n  margin-bottom: 72px;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  position: relative;\r\n}\r\n\r\nnav {\r\n  padding-top: 30px;\r\n  margin-bottom: 80px;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-size: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\nnav a {\r\n  display: inline-block;\r\n  line-height: 1;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  transition: 0.4s;\r\n}\r\nnav a::after {\r\n  background-color: #fff;\r\n  display: block;\r\n  content: \"\";\r\n  height: 1px;\r\n  width: 0%;\r\n  transition: width 0.4s ease-in-out;\r\n}\r\nnav a:hover::after {\r\n  width: 100%;\r\n}\r\n\r\n.left-nav {\r\n  display: flex;\r\n  justify-content: start;\r\n  gap: 10%;\r\n  max-width: 40%;\r\n  text-align: left;\r\n}\r\n\r\n.right-nav {\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 10%;\r\n  min-width: 30%;\r\n}\r\nh1 {\r\n  margin-bottom: 40px;\r\n  max-width: 45%;\r\n  font-size: 63px;\r\n  line-height: 66px;\r\n  color: #fff;\r\n  text-transform: capitalize;\r\n  background: #000;\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-stroke: 0.1rem transparent;\r\n}\r\n\r\nbutton {\r\n  background-color: #1f1e1e;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-size: 9px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  padding: 16px 60px;\r\n  box-shadow: 0 5px 10px #000;\r\n  transition: 0.5s;\r\n}\r\nbutton:hover {\r\n  transition: 0.5s;\r\n  transform: scale(1.1);\r\n}\r\n.cookies {\r\n  position: absolute;\r\n  left: 70%;\r\n  top: 80%;\r\n  right: 5%;\r\n  max-width: 40%;\r\n  text-transform: uppercase;\r\n  color: #3c3c3c;\r\n}\r\n.cookies p:first-child {\r\n  font-size: 11px;\r\n  margin-bottom: 24px;\r\n}\r\n.cookies p:nth-child(2) {\r\n  font-size: 9px;\r\n  margin-bottom: 24px;\r\n  line-height: 16px;\r\n}\r\n.button-group {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 40px;\r\n}\r\n\r\n.button-group a {\r\n  color: #3c3c3c;\r\n  font-size: 8px;\r\n  transition: 0.5s;\r\n}\r\n.button-group a:hover {\r\n  color: #fff;\r\n  transition: 0.5s;\r\n}\r\n/* new drops */\r\n.new-drops {\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  text-align: center;\r\n  margin-bottom: 96px;\r\n}\r\n.about {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  gap: 124px;\r\n  margin-bottom: 64px;\r\n  color: #3c3c3c;\r\n  text-transform: uppercase;\r\n  text-align: start;\r\n}\r\n.number {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n}\r\n.number p:first-child {\r\n  font-size: 18px;\r\n}\r\n.number p:last-child {\r\n  font-size: 9px;\r\n}\r\n.title {\r\n  text-align: center;\r\n  font-size: 125px;\r\n  margin-bottom: 100px;\r\n}\r\n.colors {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  /* justify-content: center; */\r\n  gap: 20px;\r\n  flex-wrap: wrap;\r\n  margin-bottom: 48px;\r\n}\r\nfigure {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  text-align: center;\r\n  font-size: 9px;\r\n  text-transform: uppercase;\r\n}\r\n.mbr {\r\n  display: block;\r\n}\r\n/* our mission */\r\n.our-mission-container {\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  text-align: center;\r\n}\r\n.our-mission-container h3 {\r\n  margin-bottom: 24px;\r\n  font-size: 9px;\r\n  color: #3c3c3c;\r\n  text-transform: uppercase;\r\n}\r\n.our-mission-description {\r\n  margin: 0 auto;\r\n  max-width: 65%;\r\n  margin-bottom: 160px;\r\n  font-size: 38px;\r\n  color: #1f1e1e;\r\n}\r\n\r\n.interior {\r\n  display: flex;\r\n  gap: 8px;\r\n  justify-content: space-between;\r\n  margin-bottom: 60px;\r\n}\r\n.interior-image {\r\n  width: 50%;\r\n  height: 546px;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n.image_1 {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n}\r\n.image_2 {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n}\r\n.interior-description {\r\n  background-color: #f4ede6;\r\n  width: 50%;\r\n  height: 546px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.interior-description p:first-child {\r\n  font-size: 52px;\r\n  color: #425e44;\r\n  width: 80%;\r\n}\r\n.interior-description p:last-child {\r\n  position: absolute;\r\n  margin: 0 auto;\r\n  top: 90%;\r\n  font-size: 9px;\r\n  text-transform: uppercase;\r\n  color: #425e44;\r\n}\r\n.interior-description button {\r\n  margin-top: 36px;\r\n}\r\n\r\n/* no */\r\n.no {\r\n  margin-bottom: 50px;\r\n}\r\n.no p:first-child {\r\n  font-size: 192px;\r\n}\r\n.no p:last-of-type {\r\n  margin-bottom: 32px;\r\n}\r\n.no p:not(:first-child) {\r\n  font-size: 21px;\r\n  color: #1f1e1e;\r\n}\r\n.no a {\r\n  background-color: #1f1e1e;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-size: 9px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  padding: 16px 60px;\r\n  box-shadow: 0 5px 10px #000;\r\n  transition: 0.5s;\r\n  display: inline-block;\r\n}\r\n.no a:hover {\r\n  transition: 0.5s;\r\n  transform: scale(1.1);\r\n}\r\n\r\n.interior-set {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 8px;\r\n  margin-bottom: 100px;\r\n}\r\n.interior-description-set {\r\n  width: 50%;\r\n  height: 546px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #c6bc8a;\r\n  color: #425e44;\r\n  position: relative;\r\n}\r\n\r\n.interior-description-set p:first-child {\r\n  font-size: 52px;\r\n  width: 80%;\r\n}\r\n\r\n.interior-description-set p:nth-child(2) {\r\n  font-size: 20px;\r\n}\r\n.interior-description-set p:last-child {\r\n  font-size: 9px;\r\n  text-transform: uppercase;\r\n  position: absolute;\r\n  top: 90%;\r\n}\r\n\r\n.set {\r\n  display: grid;\r\n  grid-template-columns: 49.25% 49.25%;\r\n  grid-template-rows: 50%;\r\n  gap: 8px;\r\n  width: 50%;\r\n  height: 546px;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n.set-1,\r\n.set-2,\r\n.set-3,\r\n.set-4 {\r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: 100%;\r\n}\r\n.set-1 {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n}\r\n.set-2 {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\r\n}\r\n.set-3 {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\r\n}\r\n.set-4 {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\r\n}\r\n\r\n.set-circle-1,\r\n.set-circle-2,\r\n.set-circle-3,\r\n.set-circle-4 {\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n}\r\n.set-circle-1 {\r\n  background-color: #6a727d;\r\n}\r\n\r\n.set-circle-2 {\r\n  background-color: #445f45;\r\n}\r\n\r\n.set-circle-3 {\r\n  background-color: #e0c3b0;\r\n}\r\n\r\n.set-circle-4 {\r\n  background-color: #232121;\r\n}\r\n/* sign up */\r\n.sin-up {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-top: solid 1px #e0e0e0;\r\n  border-bottom: solid 1px #e0e0e0;\r\n  align-items: center;\r\n  margin-bottom: 30px;\r\n  min-height: 300px;\r\n  position: relative;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.sign-up-scope {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: start;\r\n  width: 60%;\r\n  border-right: 1px solid #e0e0e0;\r\n  min-height: 300px;\r\n}\r\n.input-block {\r\n  width: 40%;\r\n  height: 36px;\r\n  padding: 8px;\r\n  justify-content: space-between;\r\n  display: flex;\r\n  align-items: center;\r\n  border: solid 1px #e0e0e0;\r\n  border-radius: 5px;\r\n}\r\n.input-block input {\r\n  border: none;\r\n  outline: none;\r\n}\r\n.input-block i {\r\n  font-size: 15px;\r\n  color: #1f1e1e;\r\n}\r\n.sign-up-scope h4 {\r\n  font-size: 38px;\r\n  color: #1f1e1e;\r\n  width: 60%;\r\n}\r\n.sign-up-scope h4:last-of-type {\r\n  margin-bottom: 20px;\r\n}\r\n.sign-up-scope p {\r\n  position: absolute;\r\n  top: 90%;\r\n  font-size: 9px;\r\n  color: #3c3c3c;\r\n  text-transform: uppercase;\r\n}\r\n.sign-up-menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 40%;\r\n  text-transform: uppercase;\r\n  font-size: 9px;\r\n  color: #3c3c3c;\r\n}\r\n.sign-up-nav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  text-align: start;\r\n}\r\n.sign-up-nav .name-category {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.sign-up-nav li {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.sign-up-nav ul li a {\r\n  display: inline-block;\r\n  color: #1f1e1e;\r\n  transition: 0.5s;\r\n}\r\n\r\n.sign-up-nav ul li a::after {\r\n  background-color: #000;\r\n  display: block;\r\n  content: \"\";\r\n  height: 1px;\r\n  width: 0%;\r\n  transition: width 0.4s ease-in-out;\r\n}\r\n.sign-up-nav ul li a:hover::after {\r\n  width: 100%;\r\n}\r\n\r\n.sign-up-contacts {\r\n  display: flex;\r\n  position: absolute;\r\n  gap: 30px;\r\n  top: 90%;\r\n  right: 10%;\r\n}\r\n/* footer */\r\n.palette {\r\n  margin-bottom: 30px;\r\n}\r\n.footer-nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  text-transform: uppercase;\r\n  font-size: 9px;\r\n  margin-bottom: 60px;\r\n}\r\n.footer-nav li a {\r\n  color: #1f1e1e;\r\n  display: inline-block;\r\n}\r\n.footer-nav li a::after {\r\n  background-color: #000;\r\n  display: block;\r\n  content: \"\";\r\n  height: 1px;\r\n  width: 0%;\r\n  transition: width 0.4s ease-in-out;\r\n}\r\n.footer-nav li a:hover::after {\r\n  width: 100%;\r\n}\r\n\r\n.footer-nav-left {\r\n  width: 40%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.footer-nav-right {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  gap: 20px;\r\n}\r\n.footer-nav-right li {\r\n  position: relative;\r\n}\r\n.footer-nav-right i {\r\n  padding-left: 5px;\r\n}\r\n.footer-nav-right ul {\r\n  position: absolute;\r\n  display: none;\r\n  top: 10px;\r\n  left: 0;\r\n  width: 150px;\r\n  text-align: start;\r\n}\r\n\r\n.footer-nav-right ul li {\r\n  padding-top: 10px;\r\n  width: 100%;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n.footer-nav-right li:last-of-type:hover ul {\r\n  display: initial;\r\n}\r\n\r\n/* burger */\r\n.burger {\r\n  display: none;\r\n  position: relative;\r\n  z-index: 50;\r\n  align-items: center;\r\n  justify-content: end;\r\n  width: 30px;\r\n  height: 18px;\r\n}\r\n.burger span {\r\n  height: 2px;\r\n  width: 100%;\r\n  transform: scale(1);\r\n  background-color: #3c3c3c;\r\n}\r\n.burger::before,\r\n.burger::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 2px;\r\n  width: 100%;\r\n  background-color: #3c3c3c;\r\n  transition: all 0.3s ease 0s;\r\n}\r\n.burger::before {\r\n  top: 0;\r\n}\r\n.burger::after {\r\n  bottom: 0;\r\n}\r\n\r\n.burger.active span {\r\n  transform: scale(0);\r\n}\r\n.burger.active::before {\r\n  top: 50%;\r\n  transform: rotate(-45deg) translate(0, -50%);\r\n}\r\n.burger.active::after {\r\n  bottom: 50%;\r\n  transform: rotate(45deg) translate(0, 50%);\r\n}\r\n.open {\r\n  display: flex !important;\r\n}\r\n/* slider */\r\n.slider {\r\n  display: none;\r\n  width: 250px;\r\n  height: 250px;\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin: 0 auto;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.slider-name {\r\n  position: absolute;\r\n  top: 70%;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 10;\r\n}\r\n\r\n.slider-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n  transition: opasity 0.5s ease;\r\n}\r\n.slider img.active-slider {\r\n  opacity: 1;\r\n}\r\n\r\n.slider i {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  z-index: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 100%;\r\n  font-size: 20px;\r\n  background-color: #e0e0e0;\r\n}\r\n.slider .prev {\r\n  left: 10px;\r\n}\r\n\r\n.slider .next {\r\n  right: 10px;\r\n}\r\n/* slider end */\r\n\r\n/* tablet */\r\n@media (max-width: 991px) {\r\n  .burger {\r\n    display: flex;\r\n    position: fixed;\r\n    right: 50px;\r\n    top: 40px;\r\n  }\r\n  .left-nav,\r\n  .right-nav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    gap: 30px;\r\n    margin-bottom: 30px;\r\n    font-size: 18px;\r\n  }\r\n  nav {\r\n    display: none;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 50;\r\n    overflow-y: auto;\r\n    padding: 40px 50px;\r\n    background-color: #445f45;\r\n    opacity: 0.98;\r\n    animation: burgerAnimation 0.5s;\r\n  }\r\n  h1 {\r\n    padding-top: 50px;\r\n  }\r\n  @keyframes burgerAnimation {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .sign-up-scope {\r\n    width: 100%;\r\n    border-right: none;\r\n  }\r\n  .input-block {\r\n    width: 40%;\r\n  }\r\n  .sign-up-menu {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* mobile */\r\n@media (max-width: 767px) {\r\n  .slider {\r\n    display: block;\r\n  }\r\n  .cookies {\r\n    display: none;\r\n  }\r\n  .about {\r\n    flex-direction: column;\r\n    gap: 32px;\r\n  }\r\n  .title {\r\n    font-size: 72px;\r\n    margin-bottom: 40px;\r\n  }\r\n  .our-mission-description {\r\n    max-width: 100%;\r\n    margin-bottom: 40px;\r\n    font-size: 28px;\r\n  }\r\n  .new-drops {\r\n    margin-bottom: 40px;\r\n  }\r\n  .colors {\r\n    display: none;\r\n  }\r\n\r\n  .interior {\r\n    flex-direction: column;\r\n  }\r\n  .interior-image {\r\n    width: 100%;\r\n  }\r\n  .interior-description {\r\n    width: 100%;\r\n  }\r\n\r\n  .interior-description p:first-child {\r\n    font-size: 32px;\r\n\r\n    /* width: 80%; */\r\n  }\r\n\r\n  .interior-set {\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n  .set {\r\n    width: 100%;\r\n  }\r\n  .input-block {\r\n    width: 90%;\r\n  }\r\n  .set-circle-1,\r\n  .set-circle-2,\r\n  .set-circle-3,\r\n  .set-circle-4 {\r\n    width: 120px;\r\n    height: 120px;\r\n  }\r\n\r\n  .no p:first-child {\r\n    font-size: 92px;\r\n  }\r\n\r\n  .footer-nav {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n  .footer-nav-left {\r\n    width: 100%;\r\n    justify-content: start;\r\n    gap: 20px;\r\n    flex-direction: column;\r\n  }\r\n  .footer-nav-right {\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    gap: 20px;\r\n  }\r\n  .footer-nav-right ul {\r\n    top: 10px;\r\n    left: 40%;\r\n  }\r\n}\r\n\r\n@media (max-width: 575px) {\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://y/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://y/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/img_header.png":
/*!********************************!*\
  !*** ./src/img/img_header.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"57bf8816e4a6b4b0d8e6.png\";\n\n//# sourceURL=webpack://y/./src/img/img_header.png?");

/***/ }),

/***/ "./src/img/interior-left.jpg":
/*!***********************************!*\
  !*** ./src/img/interior-left.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"61682d0ca7492f49829c.jpg\";\n\n//# sourceURL=webpack://y/./src/img/interior-left.jpg?");

/***/ }),

/***/ "./src/img/interior-right.png":
/*!************************************!*\
  !*** ./src/img/interior-right.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"97f40acfaf85c1ccbc71.png\";\n\n//# sourceURL=webpack://y/./src/img/interior-right.png?");

/***/ }),

/***/ "./src/img/set-1.jpg":
/*!***************************!*\
  !*** ./src/img/set-1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a4826378bba1b8322f4d.jpg\";\n\n//# sourceURL=webpack://y/./src/img/set-1.jpg?");

/***/ }),

/***/ "./src/img/set-2.jpg":
/*!***************************!*\
  !*** ./src/img/set-2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"60cf93a21e35d3bdc977.jpg\";\n\n//# sourceURL=webpack://y/./src/img/set-2.jpg?");

/***/ }),

/***/ "./src/img/set-3.jpg":
/*!***************************!*\
  !*** ./src/img/set-3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"40e0b7bbcba739aaa07e.jpg\";\n\n//# sourceURL=webpack://y/./src/img/set-3.jpg?");

/***/ }),

/***/ "./src/img/set-4.jpg":
/*!***************************!*\
  !*** ./src/img/set-4.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3534483823fd8e7614c3.jpg\";\n\n//# sourceURL=webpack://y/./src/img/set-4.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;