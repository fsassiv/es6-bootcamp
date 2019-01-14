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

eval("function moduleName(mdname) {\r\n  console.log(`- Content of the ${mdname} section`);\r\n}\r\n\r\nmoduleName(\"Iterators\");\r\n\r\n\r\nlet array = [1, 2, 3];\r\n\r\nlet it = array[Symbol.iterator]();\r\n\r\nconsole.log(it.next());\r\nconsole.log(it.next());\r\nconsole.log(it.next());\r\nconsole.log(it.next());\r\n\r\n// Custom iterator\r\nlet person = {\r\n  name: \"Max\",\r\n  hobbies: ['Sports', 'Cooking'],\r\n  [Symbol.iterator]: function () {\r\n    let i = 0;\r\n    let hobbies = this.hobbies;\r\n    return {\r\n      next: function () {\r\n        let value = hobbies[i];\r\n        i++;\r\n        return {\r\n          done: i > hobbies.length ? true : false,\r\n          value: value\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfor (let hobby of person) {\r\n  console.log(hobby);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9FUzYvZGV2L2pzL21haW4uanM/NDExOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9FUzYvZGV2L2pzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtb2R1bGVOYW1lKG1kbmFtZSkge1xyXG4gIGNvbnNvbGUubG9nKGAtIENvbnRlbnQgb2YgdGhlICR7bWRuYW1lfSBzZWN0aW9uYCk7XHJcbn1cclxuXHJcbm1vZHVsZU5hbWUoXCJJdGVyYXRvcnNcIik7XHJcblxyXG5cclxubGV0IGFycmF5ID0gWzEsIDIsIDNdO1xyXG5cclxubGV0IGl0ID0gYXJyYXlbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG5cclxuY29uc29sZS5sb2coaXQubmV4dCgpKTtcclxuY29uc29sZS5sb2coaXQubmV4dCgpKTtcclxuY29uc29sZS5sb2coaXQubmV4dCgpKTtcclxuY29uc29sZS5sb2coaXQubmV4dCgpKTtcclxuXHJcbi8vIEN1c3RvbSBpdGVyYXRvclxyXG5sZXQgcGVyc29uID0ge1xyXG4gIG5hbWU6IFwiTWF4XCIsXHJcbiAgaG9iYmllczogWydTcG9ydHMnLCAnQ29va2luZyddLFxyXG4gIFtTeW1ib2wuaXRlcmF0b3JdOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBsZXQgaG9iYmllcyA9IHRoaXMuaG9iYmllcztcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBob2JiaWVzW2ldO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZG9uZTogaSA+IGhvYmJpZXMubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mb3IgKGxldCBob2JieSBvZiBwZXJzb24pIHtcclxuICBjb25zb2xlLmxvZyhob2JieSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ES6/dev/js/main.js\n");

/***/ })

/******/ });