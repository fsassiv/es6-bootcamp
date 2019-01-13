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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ES6/dev/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ES6/dev/js/main.js":
/*!****************************!*\
  !*** ./ES6/dev/js/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/external */ \"./ES6/dev/js/modules/external.js\");\nfunction moduleName(mdName) {\r\n  console.log(`- Content of the ${mdName} section`);\r\n}\r\n\r\nmoduleName(\"Basic exports\");\r\n\r\n// import {\r\n//   keyValue\r\n// } from './modules/external';\r\n// import {\r\n//   test\r\n// } from './modules/external';\r\n\r\n\r\n\r\nconsole.log(_modules_external__WEBPACK_IMPORTED_MODULE_0__[\"keyValue\"]);\r\n\r\nObject(_modules_external__WEBPACK_IMPORTED_MODULE_0__[\"test\"])();\r\nconsole.log(_modules_external__WEBPACK_IMPORTED_MODULE_0__[\"keyValue\"]);\r\n\r\n// The default keyword suppress the necessity of the {} in the import declaration\r\n// the import name doesnt need to match since it is the default export component\r\n// * as allias, to import everything in the file exports -  return an object\r\n\r\n\r\n\r\nconsole.log(_modules_external__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\nmoduleName(\"Classes\");\r\n\r\nclass Person {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n  greet() {\r\n    console.log(\"Hello, My name is \" + this.name + \" and I am \" + this.age);\r\n  }\r\n}\r\n\r\n// Use the super keyword to invoke the parent class constructor inside de class instance\r\n//Use the super keyword to also get direct access to the parent properties e methods\r\nclass Sinner extends Person {\r\n  constructor(age) {\r\n    super(\"Sinner\")\r\n    this.age = age;\r\n  }\r\n}\r\n\r\nlet sinner = new Sinner(29);\r\n\r\nsinner.greet();\r\n\r\nclass Helper {\r\n  static logTwice(message) {\r\n    console.log(message);\r\n    console.log(message);\r\n  }\r\n}\r\n\r\nHelper.logTwice(\"Logged\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9FUzYvZGV2L2pzL21haW4uanM/NDExOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQSxrQ0FBa0MsT0FBTztBQUN6Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUt3Qjs7QUFFNUIsWUFBWSwwREFBUTs7QUFFcEIsOERBQUk7QUFDSixZQUFZLDBEQUFROztBQUVwQix1REFBdUQ7QUFDdkQ7QUFDQTs7QUFFNEM7O0FBRTVDLFlBQVkseURBQVU7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9FUzYvZGV2L2pzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtb2R1bGVOYW1lKG1kTmFtZSkge1xyXG4gIGNvbnNvbGUubG9nKGAtIENvbnRlbnQgb2YgdGhlICR7bWROYW1lfSBzZWN0aW9uYCk7XHJcbn1cclxuXHJcbm1vZHVsZU5hbWUoXCJCYXNpYyBleHBvcnRzXCIpO1xyXG5cclxuLy8gaW1wb3J0IHtcclxuLy8gICBrZXlWYWx1ZVxyXG4vLyB9IGZyb20gJy4vbW9kdWxlcy9leHRlcm5hbCc7XHJcbi8vIGltcG9ydCB7XHJcbi8vICAgdGVzdFxyXG4vLyB9IGZyb20gJy4vbW9kdWxlcy9leHRlcm5hbCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGtleVZhbHVlLFxyXG4gIHRlc3RcclxufSBmcm9tICcuL21vZHVsZXMvZXh0ZXJuYWwnO1xyXG5cclxuY29uc29sZS5sb2coa2V5VmFsdWUpO1xyXG5cclxudGVzdCgpO1xyXG5jb25zb2xlLmxvZyhrZXlWYWx1ZSk7XHJcblxyXG4vLyBUaGUgZGVmYXVsdCBrZXl3b3JkIHN1cHByZXNzIHRoZSBuZWNlc3NpdHkgb2YgdGhlIHt9IGluIHRoZSBpbXBvcnQgZGVjbGFyYXRpb25cclxuLy8gdGhlIGltcG9ydCBuYW1lIGRvZXNudCBuZWVkIHRvIG1hdGNoIHNpbmNlIGl0IGlzIHRoZSBkZWZhdWx0IGV4cG9ydCBjb21wb25lbnRcclxuLy8gKiBhcyBhbGxpYXMsIHRvIGltcG9ydCBldmVyeXRoaW5nIGluIHRoZSBmaWxlIGV4cG9ydHMgLSAgcmV0dXJuIGFuIG9iamVjdFxyXG5cclxuaW1wb3J0IGltcG9ydGVkQUIgZnJvbSAnLi9tb2R1bGVzL2V4dGVybmFsJztcclxuXHJcbmNvbnNvbGUubG9nKGltcG9ydGVkQUIpO1xyXG5cclxubW9kdWxlTmFtZShcIkNsYXNzZXNcIik7XHJcblxyXG5jbGFzcyBQZXJzb24ge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG4gIGdyZWV0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJIZWxsbywgTXkgbmFtZSBpcyBcIiArIHRoaXMubmFtZSArIFwiIGFuZCBJIGFtIFwiICsgdGhpcy5hZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gVXNlIHRoZSBzdXBlciBrZXl3b3JkIHRvIGludm9rZSB0aGUgcGFyZW50IGNsYXNzIGNvbnN0cnVjdG9yIGluc2lkZSBkZSBjbGFzcyBpbnN0YW5jZVxyXG4vL1VzZSB0aGUgc3VwZXIga2V5d29yZCB0byBhbHNvIGdldCBkaXJlY3QgYWNjZXNzIHRvIHRoZSBwYXJlbnQgcHJvcGVydGllcyBlIG1ldGhvZHNcclxuY2xhc3MgU2lubmVyIGV4dGVuZHMgUGVyc29uIHtcclxuICBjb25zdHJ1Y3RvcihhZ2UpIHtcclxuICAgIHN1cGVyKFwiU2lubmVyXCIpXHJcbiAgICB0aGlzLmFnZSA9IGFnZTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBzaW5uZXIgPSBuZXcgU2lubmVyKDI5KTtcclxuXHJcbnNpbm5lci5ncmVldCgpO1xyXG5cclxuY2xhc3MgSGVscGVyIHtcclxuICBzdGF0aWMgbG9nVHdpY2UobWVzc2FnZSkge1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbkhlbHBlci5sb2dUd2ljZShcIkxvZ2dlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ES6/dev/js/main.js\n");

/***/ }),

/***/ "./ES6/dev/js/modules/external.js":
/*!****************************************!*\
  !*** ./ES6/dev/js/modules/external.js ***!
  \****************************************/
/*! exports provided: keyValue, test, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyValue\", function() { return keyValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\nlet keyValue = 1000;\r\n\r\nfunction test() {\r\n  keyValue = 2000;\r\n  console.log('tested!');\r\n}\r\n\r\n\r\n\r\nlet ab = \"Some text\";\r\n// with default keyword\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ab);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9FUzYvZGV2L2pzL21vZHVsZXMvZXh0ZXJuYWwuanM/YzBkMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFLRTs7QUFFRjtBQUNBO0FBQ2UsaUVBQUUiLCJmaWxlIjoiLi9FUzYvZGV2L2pzL21vZHVsZXMvZXh0ZXJuYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQga2V5VmFsdWUgPSAxMDAwO1xyXG5cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICBrZXlWYWx1ZSA9IDIwMDA7XHJcbiAgY29uc29sZS5sb2coJ3Rlc3RlZCEnKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBrZXlWYWx1ZSxcclxuICB0ZXN0XHJcbn07XHJcblxyXG5sZXQgYWIgPSBcIlNvbWUgdGV4dFwiO1xyXG4vLyB3aXRoIGRlZmF1bHQga2V5d29yZFxyXG5leHBvcnQgZGVmYXVsdCBhYjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ES6/dev/js/modules/external.js\n");

/***/ })

/******/ });