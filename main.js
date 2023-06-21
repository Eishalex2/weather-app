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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst key = \"59245b1c1f1e4fff937211922231206\"\r\n\r\n\r\nasync function getWeatherData(location) {\r\n  try {\r\n    const cityName = location.toLowerCase();\r\n    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`, {mode: 'cors'});\r\n    const weatherData = await response.json();\r\n    const weatherObject = {\r\n      city: weatherData.location.name,\r\n      status: weatherData.current.condition.text,\r\n      celsius: weatherData.current.temp_c,\r\n      fahr: weatherData.current.temp_f,\r\n      uv: weatherData.current.uv,\r\n      localTime: weatherData.location.localtime,\r\n      precipMm: weatherData.current.precip_mm,\r\n      precipIn: weatherData.current.precip_in,\r\n      windKph: weatherData.current.wind_kph,\r\n      windMph: weatherData.current.wind_mph\r\n    }\r\n    console.log(weatherData);\r\n    return weatherObject;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsSUFBSSxLQUFLLFNBQVMsSUFBSSxhQUFhO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanM/ZDcyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXkgPSBcIjU5MjQ1YjFjMWYxZTRmZmY5MzcyMTE5MjIyMzEyMDZcIlxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gbG9jYXRpb24udG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtrZXl9JnE9JHtjaXR5TmFtZX1gLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHdlYXRoZXJPYmplY3QgPSB7XHJcbiAgICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXHJcbiAgICAgIHN0YXR1czogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcclxuICAgICAgY2Vsc2l1czogd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICAgIGZhaHI6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mLFxyXG4gICAgICB1djogd2VhdGhlckRhdGEuY3VycmVudC51dixcclxuICAgICAgbG9jYWxUaW1lOiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXHJcbiAgICAgIHByZWNpcE1tOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnByZWNpcF9tbSxcclxuICAgICAgcHJlY2lwSW46IHdlYXRoZXJEYXRhLmN1cnJlbnQucHJlY2lwX2luLFxyXG4gICAgICB3aW5kS3BoOiB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoLFxyXG4gICAgICB3aW5kTXBoOiB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XHJcbiAgICByZXR1cm4gd2VhdGhlck9iamVjdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckRhdGE7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\r\n\r\nconst search = document.getElementById('search');\r\nlet location = \"london\";\r\nconst infoDisplay = document.getElementById(\"main-info\");\r\nconst extraInfo = document.getElementById(\"extra\");\r\nconst imperialInfo = document.getElementById(\"imperial\")\r\n\r\nfunction display(weatherObject) {\r\n\r\n  // main info\r\n  const cityPara = document.createElement('h3');\r\n  const tempCPara = document.createElement('h2');\r\n  const statusPara = document.createElement('p');\r\n  const uvPara = document.createElement('p');\r\n\r\n  const weatherArray = [cityPara, tempCPara, statusPara, uvPara]\r\n  \r\n  cityPara.textContent = weatherObject.city;\r\n  tempCPara.textContent = `${weatherObject.celsius} °C`;\r\n  statusPara.textContent = weatherObject.status;\r\n  uvPara.textContent = `UV level: ${weatherObject.uv}`;\r\n\r\n  weatherArray.forEach((item) => {\r\n    infoDisplay.appendChild(item);\r\n  });\r\n\r\n  // extra info\r\n  const precipMmPara = document.createElement('p');\r\n  const windKphPara = document.createElement('p');\r\n\r\n  precipMmPara.textContent = `Precipitation: ${weatherObject.precipMm}mm`;\r\n  windKphPara.textContent = `Wind speed: ${weatherObject.windKph}kph`;\r\n\r\n  extraInfo.appendChild(precipMmPara);\r\n  extraInfo.appendChild(windKphPara);\r\n\r\n  // imperial info\r\n  const tempFPara = document.createElement('p');\r\n  const precipInPara = document.createElement('p');\r\n  const windMphPara = document.createElement('p');\r\n\r\n  tempFPara.textContent = `Temp: ${weatherObject.fahr} °F`;\r\n  precipInPara.textContent = `Precipitation: ${weatherObject.precipIn}in`;\r\n  windMphPara.textContent = `Wind speed: ${weatherObject.windMph}mph`;\r\n\r\n  imperialInfo.appendChild(tempFPara);\r\n  imperialInfo.appendChild(precipInPara);\r\n  imperialInfo.appendChild(windMphPara);\r\n}\r\n\r\nasync function output() {\r\n  try {\r\n    const weatherObject = await (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\r\n    console.log(weatherObject);\r\n    display(weatherObject);\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\n\r\nfunction runOutput(e) {\r\n  e.preventDefault();\r\n  location = search.value;\r\n  infoDisplay.textContent = \"\";\r\n  extraInfo.textContent = \"\";\r\n  imperialInfo.textContent = \"\";\r\n  output();\r\n  search.value = \"\";\r\n}\r\n\r\nsearch.addEventListener('keypress', (e) => {\r\n  if (e.key === \"Enter\") {\r\n    runOutput(e);\r\n  }\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (output);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHVCQUF1QjtBQUN0RSwyQ0FBMkMsc0JBQXNCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQkFBb0I7QUFDdkQsK0NBQStDLHVCQUF1QjtBQUN0RSwyQ0FBMkMsc0JBQXNCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQWM7QUFDOUM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzP2NiZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL2FwaVwiO1xyXG5cclxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xyXG5sZXQgbG9jYXRpb24gPSBcImxvbmRvblwiO1xyXG5jb25zdCBpbmZvRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1pbmZvXCIpO1xyXG5jb25zdCBleHRyYUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4dHJhXCIpO1xyXG5jb25zdCBpbXBlcmlhbEluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltcGVyaWFsXCIpXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5KHdlYXRoZXJPYmplY3QpIHtcclxuXHJcbiAgLy8gbWFpbiBpbmZvXHJcbiAgY29uc3QgY2l0eVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNvbnN0IHRlbXBDUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29uc3Qgc3RhdHVzUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCB1dlBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJBcnJheSA9IFtjaXR5UGFyYSwgdGVtcENQYXJhLCBzdGF0dXNQYXJhLCB1dlBhcmFdXHJcbiAgXHJcbiAgY2l0eVBhcmEudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqZWN0LmNpdHk7XHJcbiAgdGVtcENQYXJhLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iamVjdC5jZWxzaXVzfSDCsENgO1xyXG4gIHN0YXR1c1BhcmEudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqZWN0LnN0YXR1cztcclxuICB1dlBhcmEudGV4dENvbnRlbnQgPSBgVVYgbGV2ZWw6ICR7d2VhdGhlck9iamVjdC51dn1gO1xyXG5cclxuICB3ZWF0aGVyQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGV4dHJhIGluZm9cclxuICBjb25zdCBwcmVjaXBNbVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3Qgd2luZEtwaFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIHByZWNpcE1tUGFyYS50ZXh0Q29udGVudCA9IGBQcmVjaXBpdGF0aW9uOiAke3dlYXRoZXJPYmplY3QucHJlY2lwTW19bW1gO1xyXG4gIHdpbmRLcGhQYXJhLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWQ6ICR7d2VhdGhlck9iamVjdC53aW5kS3BofWtwaGA7XHJcblxyXG4gIGV4dHJhSW5mby5hcHBlbmRDaGlsZChwcmVjaXBNbVBhcmEpO1xyXG4gIGV4dHJhSW5mby5hcHBlbmRDaGlsZCh3aW5kS3BoUGFyYSk7XHJcblxyXG4gIC8vIGltcGVyaWFsIGluZm9cclxuICBjb25zdCB0ZW1wRlBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgcHJlY2lwSW5QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHdpbmRNcGhQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICB0ZW1wRlBhcmEudGV4dENvbnRlbnQgPSBgVGVtcDogJHt3ZWF0aGVyT2JqZWN0LmZhaHJ9IMKwRmA7XHJcbiAgcHJlY2lwSW5QYXJhLnRleHRDb250ZW50ID0gYFByZWNpcGl0YXRpb246ICR7d2VhdGhlck9iamVjdC5wcmVjaXBJbn1pbmA7XHJcbiAgd2luZE1waFBhcmEudGV4dENvbnRlbnQgPSBgV2luZCBzcGVlZDogJHt3ZWF0aGVyT2JqZWN0LndpbmRNcGh9bXBoYDtcclxuXHJcbiAgaW1wZXJpYWxJbmZvLmFwcGVuZENoaWxkKHRlbXBGUGFyYSk7XHJcbiAgaW1wZXJpYWxJbmZvLmFwcGVuZENoaWxkKHByZWNpcEluUGFyYSk7XHJcbiAgaW1wZXJpYWxJbmZvLmFwcGVuZENoaWxkKHdpbmRNcGhQYXJhKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb3V0cHV0KCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xyXG4gICAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdCk7XHJcbiAgICBkaXNwbGF5KHdlYXRoZXJPYmplY3QpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBydW5PdXRwdXQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsb2NhdGlvbiA9IHNlYXJjaC52YWx1ZTtcclxuICBpbmZvRGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgZXh0cmFJbmZvLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBpbXBlcmlhbEluZm8udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIG91dHB1dCgpO1xyXG4gIHNlYXJjaC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgIHJ1bk91dHB1dChlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3V0cHV0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dom.js\n");

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