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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst key = \"59245b1c1f1e4fff937211922231206\"\r\n\r\n\r\nasync function getWeatherData(location) {\r\n  try {\r\n    const cityName = location.toLowerCase();\r\n    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`, {mode: 'cors'});\r\n    const weatherData = await response.json();\r\n    const weatherObject = {\r\n      city: weatherData.location.name,\r\n      status: weatherData.current.condition.text,\r\n      celsius: weatherData.current.temp_c,\r\n      fahr: weatherData.current.temp_f,\r\n      uv: weatherData.current.uv,\r\n      localTime: weatherData.location.localtime,\r\n      precipMm: weatherData.current.precip_mm,\r\n      precipIn: weatherData.current.precip_in,\r\n      windKph: weatherData.current.wind_kph,\r\n      windMph: weatherData.current.wind_mph\r\n    }\r\n    return weatherObject;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsSUFBSSxLQUFLLFNBQVMsSUFBSSxhQUFhO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzP2Q3MjIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga2V5ID0gXCI1OTI0NWIxYzFmMWU0ZmZmOTM3MjExOTIyMjMxMjA2XCJcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9IGxvY2F0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7a2V5fSZxPSR7Y2l0eU5hbWV9YCwge21vZGU6ICdjb3JzJ30pO1xyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0ge1xyXG4gICAgICBjaXR5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgICBzdGF0dXM6IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgIGNlbHNpdXM6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgICBmYWhyOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZixcclxuICAgICAgdXY6IHdlYXRoZXJEYXRhLmN1cnJlbnQudXYsXHJcbiAgICAgIGxvY2FsVGltZTogd2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxyXG4gICAgICBwcmVjaXBNbTogd2VhdGhlckRhdGEuY3VycmVudC5wcmVjaXBfbW0sXHJcbiAgICAgIHByZWNpcEluOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnByZWNpcF9pbixcclxuICAgICAgd2luZEtwaDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgICAgd2luZE1waDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX21waFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdlYXRoZXJPYmplY3Q7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXJEYXRhOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\r\n\r\nconst search = document.getElementById('search');\r\nconst btn = document.querySelector('button');\r\nlet location = \"london\";\r\nconst infoDisplay = document.getElementById(\"info\");\r\n\r\nfunction display(weatherObject) {\r\n  const weatherArray = Object.entries(weatherObject);\r\n  weatherArray.forEach((entry) => {\r\n    const para = document.createElement('p');\r\n    para.textContent = `${entry[0]}: ${entry[1]}`;\r\n    infoDisplay.appendChild(para);\r\n  })\r\n}\r\n\r\nasync function output() {\r\n  try {\r\n    const weatherObject = await (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\r\n    display(weatherObject);\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n\r\nfunction runOutput(e) {\r\n  e.preventDefault();\r\n  location = search.value;\r\n  infoDisplay.textContent = \"\";\r\n  output();\r\n  search.value = \"\";\r\n}\r\n\r\nsearch.addEventListener('keypress', (e) => {\r\n  if (e.key === \"Enter\") {\r\n    runOutput(e);\r\n  }\r\n});\r\n\r\nbtn.addEventListener('click', (e) => {\r\n  runOutput(e);\r\n});\r\n\r\nbtn.addEventListener('keypress', (e) => {\r\n  if (e.key === \"Enter\") {\r\n    runOutput(e);\r\n  }\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (output);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVMsSUFBSSxTQUFTO0FBQ2hEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdEQUFjO0FBQzlDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcz9jYmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcbmxldCBsb2NhdGlvbiA9IFwibG9uZG9uXCI7XHJcbmNvbnN0IGluZm9EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheSh3ZWF0aGVyT2JqZWN0KSB7XHJcbiAgY29uc3Qgd2VhdGhlckFycmF5ID0gT2JqZWN0LmVudHJpZXMod2VhdGhlck9iamVjdCk7XHJcbiAgd2VhdGhlckFycmF5LmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYS50ZXh0Q29udGVudCA9IGAke2VudHJ5WzBdfTogJHtlbnRyeVsxXX1gO1xyXG4gICAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb3V0cHV0KCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xyXG4gICAgZGlzcGxheSh3ZWF0aGVyT2JqZWN0KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcnVuT3V0cHV0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbG9jYXRpb24gPSBzZWFyY2gudmFsdWU7XHJcbiAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIG91dHB1dCgpO1xyXG4gIHNlYXJjaC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgIHJ1bk91dHB1dChlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBydW5PdXRwdXQoZSk7XHJcbn0pO1xyXG5cclxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgcnVuT3V0cHV0KGUpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvdXRwdXQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dom.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkI7QUFDM0I7QUFDQSxnREFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG91dHB1dCBmcm9tIFwiLi9kb21cIjtcclxuXHJcbm91dHB1dCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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