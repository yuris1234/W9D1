/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\n\n\nclass Asteroid extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static RADIUS = 100;\n    static COLOR = 'red';\n\n    constructor(options) {\n        super(options);\n        this.pos = options['pos'];\n        this.vel = _util_js__WEBPACK_IMPORTED_MODULE_1__.randomVec();\n        // super();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nwindow.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nwindow.Asteroid = _asteroid__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const myCanvas = document.getElementById('game-canvas');\n    myCanvas.height = 500;\n    myCanvas.width = 500;\n    const ctx = myCanvas.getContext('2d');\n\n    const mo = new _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        pos: [300, 300],\n        vel: [100, 100],\n        radius: 20,\n        color: \"black\"\n    });\n\n    const ast = new _asteroid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [100, 100],\n        vel: [100, 100],\n        radius: 20,\n        color: \"red\" });\n    \n    mo.draw(ctx);\n    ast.draw(ctx);\n});\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MovingObject {\n    constructor (hash) {\n        this.pos = hash['pos'];\n        this.vel = hash['vel'];\n        this.radius = hash['radius'];\n        this.color = hash['color'];\n    }\n\n    draw(ctx) {\n        ctx.beginPath();\n        ctx.fillStyle = this.color;\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n        ctx.fill();\n        ctx.stroke();\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingObject);\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomVec: () => (/* binding */ randomVec),\n/* harmony export */   scale: () => (/* binding */ scale)\n/* harmony export */ });\n// Return a randomly oriented vector with the given length.\nfunction randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return scale([Math.sin(deg), Math.cos(deg)], length);\n  }\n  \n  // Scale the length of a vector by the given amount.\n  function scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/util.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;