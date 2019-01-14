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
/*! no static exports found */
/***/ (function(module, exports) {

eval("function moduleName(mdname) {\r\n  console.log(`- Content of the ${mdname} section`);\r\n}\r\n\r\nmoduleName(\"Generators\");\r\n\r\nfunction* select() {\r\n  yield 'House';\r\n  yield 'Garage';\r\n}\r\n\r\nlet it = select();\r\n\r\nconsole.log(it.next());\r\nconsole.log(it.next());\r\nconsole.log(it.next());\r\n\r\nmoduleName(\"Generators\");\r\n\r\nlet obj = {\r\n  [Symbol.iterator]: gen\r\n}\r\n\r\nfunction* gen() {\r\n  yield 1;\r\n  yield 2;\r\n}\r\n\r\nfor (let element of obj) {\r\n  console.log(element);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9FUzYvZGV2L2pzL21haW4uanM/NDExOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vRVM2L2Rldi9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbW9kdWxlTmFtZShtZG5hbWUpIHtcclxuICBjb25zb2xlLmxvZyhgLSBDb250ZW50IG9mIHRoZSAke21kbmFtZX0gc2VjdGlvbmApO1xyXG59XHJcblxyXG5tb2R1bGVOYW1lKFwiR2VuZXJhdG9yc1wiKTtcclxuXHJcbmZ1bmN0aW9uKiBzZWxlY3QoKSB7XHJcbiAgeWllbGQgJ0hvdXNlJztcclxuICB5aWVsZCAnR2FyYWdlJztcclxufVxyXG5cclxubGV0IGl0ID0gc2VsZWN0KCk7XHJcblxyXG5jb25zb2xlLmxvZyhpdC5uZXh0KCkpO1xyXG5jb25zb2xlLmxvZyhpdC5uZXh0KCkpO1xyXG5jb25zb2xlLmxvZyhpdC5uZXh0KCkpO1xyXG5cclxubW9kdWxlTmFtZShcIkdlbmVyYXRvcnNcIik7XHJcblxyXG5sZXQgb2JqID0ge1xyXG4gIFtTeW1ib2wuaXRlcmF0b3JdOiBnZW5cclxufVxyXG5cclxuZnVuY3Rpb24qIGdlbigpIHtcclxuICB5aWVsZCAxO1xyXG4gIHlpZWxkIDI7XHJcbn1cclxuXHJcbmZvciAobGV0IGVsZW1lbnQgb2Ygb2JqKSB7XHJcbiAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ES6/dev/js/main.js\n");

/***/ })

/******/ });