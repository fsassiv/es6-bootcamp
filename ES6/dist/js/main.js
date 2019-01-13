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

eval("function moduleName(mdname) {\r\n  console.log(`- Content of the ${mdname} section`);\r\n}\r\n\r\nmoduleName(\"Symbols\");\r\n\r\nlet symbol = Symbol('debug');\r\nlet anotherSymbol = Symbol('debug');\r\n\r\nconsole.log(typeof symbol);\r\nconsole.log(symbol == anotherSymbol);\r\n\r\nlet obj = {\r\n  name: 'Max',\r\n  [symbol]: 22\r\n}\r\n\r\nconsole.log(obj);\r\n\r\nlet symbol1 = Symbol.for('age');\r\nlet symbol2 = Symbol.for('age');\r\nconsole.log(symbol1 == symbol2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9FUzYvZGV2L2pzL21haW4uanM/NDExOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9FUzYvZGV2L2pzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtb2R1bGVOYW1lKG1kbmFtZSkge1xyXG4gIGNvbnNvbGUubG9nKGAtIENvbnRlbnQgb2YgdGhlICR7bWRuYW1lfSBzZWN0aW9uYCk7XHJcbn1cclxuXHJcbm1vZHVsZU5hbWUoXCJTeW1ib2xzXCIpO1xyXG5cclxubGV0IHN5bWJvbCA9IFN5bWJvbCgnZGVidWcnKTtcclxubGV0IGFub3RoZXJTeW1ib2wgPSBTeW1ib2woJ2RlYnVnJyk7XHJcblxyXG5jb25zb2xlLmxvZyh0eXBlb2Ygc3ltYm9sKTtcclxuY29uc29sZS5sb2coc3ltYm9sID09IGFub3RoZXJTeW1ib2wpO1xyXG5cclxubGV0IG9iaiA9IHtcclxuICBuYW1lOiAnTWF4JyxcclxuICBbc3ltYm9sXTogMjJcclxufVxyXG5cclxuY29uc29sZS5sb2cob2JqKTtcclxuXHJcbmxldCBzeW1ib2wxID0gU3ltYm9sLmZvcignYWdlJyk7XHJcbmxldCBzeW1ib2wyID0gU3ltYm9sLmZvcignYWdlJyk7XHJcbmNvbnNvbGUubG9nKHN5bWJvbDEgPT0gc3ltYm9sMik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ES6/dev/js/main.js\n");

/***/ })

/******/ });