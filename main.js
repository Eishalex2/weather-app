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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst key = \"59245b1c1f1e4fff937211922231206\"\r\n\r\n\r\nasync function getWeatherData(location) {\r\n  const cityName = location.toLowerCase();\r\n  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`, {mode: 'cors'});\r\n  const weatherData = await response.json();\r\n  const weatherObject = {\r\n    city: weatherData.location.name,\r\n    status: weatherData.current.condition.text,\r\n    celsius: weatherData.current.temp_c,\r\n    fahr: weatherData.current.temp_f,\r\n    uv: weatherData.current.uv,\r\n    localTime: weatherData.location.localtime,\r\n    precipMm: weatherData.current.precip_mm,\r\n    precipIn: weatherData.current.precip_in,\r\n    windKph: weatherData.current.wind_kph,\r\n    windMph: weatherData.current.wind_mph\r\n  }\r\n  console.log(weatherData);\r\n  return weatherObject;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLElBQUksS0FBSyxTQUFTLElBQUksYUFBYTtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtleSA9IFwiNTkyNDViMWMxZjFlNGZmZjkzNzIxMTkyMjIzMTIwNlwiXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcclxuICBjb25zdCBjaXR5TmFtZSA9IGxvY2F0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2tleX0mcT0ke2NpdHlOYW1lfWAsIHttb2RlOiAnY29ycyd9KTtcclxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0ge1xyXG4gICAgY2l0eTogd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgIHN0YXR1czogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcclxuICAgIGNlbHNpdXM6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgZmFocjogd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2YsXHJcbiAgICB1djogd2VhdGhlckRhdGEuY3VycmVudC51dixcclxuICAgIGxvY2FsVGltZTogd2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxyXG4gICAgcHJlY2lwTW06IHdlYXRoZXJEYXRhLmN1cnJlbnQucHJlY2lwX21tLFxyXG4gICAgcHJlY2lwSW46IHdlYXRoZXJEYXRhLmN1cnJlbnQucHJlY2lwX2luLFxyXG4gICAgd2luZEtwaDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgIHdpbmRNcGg6IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGhcclxuICB9XHJcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xyXG4gIHJldHVybiB3ZWF0aGVyT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\r\n\r\nfunction printInformation(weatherObject) {\r\n  console.log(weatherObject.city);\r\n  console.log(weatherObject.status);\r\n  console.log(weatherObject);\r\n}\r\n\r\nasync function test(location) {\r\n  const weatherObject = await (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\r\n  printInformation(weatherObject);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (test);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0RBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcz9jYmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmZ1bmN0aW9uIHByaW50SW5mb3JtYXRpb24od2VhdGhlck9iamVjdCkge1xyXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3QuY2l0eSk7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdC5zdGF0dXMpO1xyXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3QpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB0ZXN0KGxvY2F0aW9uKSB7XHJcbiAgY29uc3Qgd2VhdGhlck9iamVjdCA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcclxuICBwcmludEluZm9ybWF0aW9uKHdlYXRoZXJPYmplY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dom.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('london');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUI7QUFDekI7QUFDQSxnREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRlc3QgZnJvbSBcIi4vZG9tXCI7XHJcblxyXG50ZXN0KCdsb25kb24nKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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