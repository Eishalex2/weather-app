/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst key = \"59245b1c1f1e4fff937211922231206\"\r\n\r\nasync function processData(data) {\r\n  const currentForecast = await data;\r\n  const cityName = currentForecast.location.name;\r\n  const weatherText = currentForecast.current.condition.text;\r\n  // more things that I want to display\r\n  const weatherObject = {\r\n    cityName,\r\n    weatherText\r\n  }\r\n  console.log(weatherObject);\r\n}\r\n\r\n\r\nasync function getWeatherData(location) {\r\n  const cityName = location.toLowerCase();\r\n  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`, {mode: 'cors'});\r\n  const weatherData = await response.json();\r\n  const cityWeatherData = weatherData;\r\n  console.log(cityWeatherData);\r\n  processData(cityWeatherData);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2V0RGF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRixJQUFJLEtBQUssU0FBUyxJQUFJLGFBQWE7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldERhdGEuanM/ZjE0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXkgPSBcIjU5MjQ1YjFjMWYxZTRmZmY5MzcyMTE5MjIyMzEyMDZcIlxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YSkge1xyXG4gIGNvbnN0IGN1cnJlbnRGb3JlY2FzdCA9IGF3YWl0IGRhdGE7XHJcbiAgY29uc3QgY2l0eU5hbWUgPSBjdXJyZW50Rm9yZWNhc3QubG9jYXRpb24ubmFtZTtcclxuICBjb25zdCB3ZWF0aGVyVGV4dCA9IGN1cnJlbnRGb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG4gIC8vIG1vcmUgdGhpbmdzIHRoYXQgSSB3YW50IHRvIGRpc3BsYXlcclxuICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0ge1xyXG4gICAgY2l0eU5hbWUsXHJcbiAgICB3ZWF0aGVyVGV4dFxyXG4gIH1cclxuICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0KTtcclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XHJcbiAgY29uc3QgY2l0eU5hbWUgPSBsb2NhdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtrZXl9JnE9JHtjaXR5TmFtZX1gLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc3QgY2l0eVdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGE7XHJcbiAgY29uc29sZS5sb2coY2l0eVdlYXRoZXJEYXRhKTtcclxuICBwcm9jZXNzRGF0YShjaXR5V2VhdGhlckRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/getData.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n\r\n\r\n\r\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('london');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBdUM7QUFDdkM7QUFDQTtBQUNBLG9EQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vZ2V0RGF0YVwiO1xyXG5cclxuXHJcbmdldFdlYXRoZXJEYXRhKCdsb25kb24nKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;