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

eval("function moduleName(mdName) {\r\n  console.log(`- Content of the ${mdName} section`);\r\n}\r\n\r\nmoduleName(\"Maps\");\r\n\r\nlet cardAce = {\r\n  name: 'Ace of Spades'\r\n}\r\n\r\nlet cardKing = {\r\n  name: 'King of Clubs'\r\n}\r\n\r\nlet deck = new Map();\r\ndeck.set('as', cardAce);\r\ndeck.set('kc', cardKing);\r\n\r\nconsole.log(deck.size);\r\nconsole.log(deck.get('as'));\r\n\r\n// deck.delete('as');\r\n// deck.clear();\r\n// deck.key();\r\n\r\nfor (key of deck.keys()) {\r\n  console.log(key);\r\n}\r\n\r\nfor (value of deck.values()) {\r\n  console.log(value);\r\n}\r\n\r\nfor (entry of deck.entries()) {\r\n  console.log(entry);\r\n}\r\n\r\nmoduleName(\"WeakMaps\");\r\n\r\nlet wdeck = new WeakMap();\r\nlet key1 = {\r\n  a: 1\r\n};\r\nlet key2 = {\r\n  b: 2\r\n};\r\nwdeck.set(key1, cardAce);\r\nwdeck.set(key2, cardKing);\r\n\r\nconsole.log(wdeck.get(key1));\r\n\r\nmoduleName(\"Sets\");\r\n//Array of unique values\r\nlet set = new Set([1, 1, 1]);\r\nset.add(2);\r\nset.delete(2);\r\nset.has(1)\r\nfor (v of set) {\r\n  console.log(v);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9FUzYvZGV2L2pzL21haW4uanM/NDExOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9FUzYvZGV2L2pzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtb2R1bGVOYW1lKG1kTmFtZSkge1xyXG4gIGNvbnNvbGUubG9nKGAtIENvbnRlbnQgb2YgdGhlICR7bWROYW1lfSBzZWN0aW9uYCk7XHJcbn1cclxuXHJcbm1vZHVsZU5hbWUoXCJNYXBzXCIpO1xyXG5cclxubGV0IGNhcmRBY2UgPSB7XHJcbiAgbmFtZTogJ0FjZSBvZiBTcGFkZXMnXHJcbn1cclxuXHJcbmxldCBjYXJkS2luZyA9IHtcclxuICBuYW1lOiAnS2luZyBvZiBDbHVicydcclxufVxyXG5cclxubGV0IGRlY2sgPSBuZXcgTWFwKCk7XHJcbmRlY2suc2V0KCdhcycsIGNhcmRBY2UpO1xyXG5kZWNrLnNldCgna2MnLCBjYXJkS2luZyk7XHJcblxyXG5jb25zb2xlLmxvZyhkZWNrLnNpemUpO1xyXG5jb25zb2xlLmxvZyhkZWNrLmdldCgnYXMnKSk7XHJcblxyXG4vLyBkZWNrLmRlbGV0ZSgnYXMnKTtcclxuLy8gZGVjay5jbGVhcigpO1xyXG4vLyBkZWNrLmtleSgpO1xyXG5cclxuZm9yIChrZXkgb2YgZGVjay5rZXlzKCkpIHtcclxuICBjb25zb2xlLmxvZyhrZXkpO1xyXG59XHJcblxyXG5mb3IgKHZhbHVlIG9mIGRlY2sudmFsdWVzKCkpIHtcclxuICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbn1cclxuXHJcbmZvciAoZW50cnkgb2YgZGVjay5lbnRyaWVzKCkpIHtcclxuICBjb25zb2xlLmxvZyhlbnRyeSk7XHJcbn1cclxuXHJcbm1vZHVsZU5hbWUoXCJXZWFrTWFwc1wiKTtcclxuXHJcbmxldCB3ZGVjayA9IG5ldyBXZWFrTWFwKCk7XHJcbmxldCBrZXkxID0ge1xyXG4gIGE6IDFcclxufTtcclxubGV0IGtleTIgPSB7XHJcbiAgYjogMlxyXG59O1xyXG53ZGVjay5zZXQoa2V5MSwgY2FyZEFjZSk7XHJcbndkZWNrLnNldChrZXkyLCBjYXJkS2luZyk7XHJcblxyXG5jb25zb2xlLmxvZyh3ZGVjay5nZXQoa2V5MSkpO1xyXG5cclxubW9kdWxlTmFtZShcIlNldHNcIik7XHJcbi8vQXJyYXkgb2YgdW5pcXVlIHZhbHVlc1xyXG5sZXQgc2V0ID0gbmV3IFNldChbMSwgMSwgMV0pO1xyXG5zZXQuYWRkKDIpO1xyXG5zZXQuZGVsZXRlKDIpO1xyXG5zZXQuaGFzKDEpXHJcbmZvciAodiBvZiBzZXQpIHtcclxuICBjb25zb2xlLmxvZyh2KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ES6/dev/js/main.js\n");

/***/ })

/******/ });