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

eval("function moduleName(mdName) {\r\n  console.log(`- Content of the ${mdName} section`);\r\n}\r\n\r\nmoduleName(\"Promises\");\r\n\r\nlet promise = new Promise(function (resolve, reject) {\r\n  setTimeout(function () {\r\n    resolve('Done!');\r\n    reject('Failed!');\r\n  }, 1500);\r\n});\r\n\r\npromise.then(function (value) {\r\n  console.log(value);\r\n}, function (error) {\r\n  console.log(error);\r\n});\r\n\r\nmoduleName(\"Promises - Built-in methods\");\r\n\r\nlet promise1 = new Promise(function (resolve, reject) {\r\n  setTimeout(() => {\r\n    resolve('Resolved!');\r\n  }, 1000);\r\n})\r\n\r\n\r\nlet promise2 = new Promise(function (resolve, reject) {\r\n  setTimeout(() => {\r\n    reject('Rejected!');\r\n  }, 2000);\r\n})\r\n\r\n// Promise.all([promise1, promise2])\r\n//   .then(function (success) {\r\n//     console.log(success);\r\n//   })\r\n//   .catch(function (error) {\r\n//     console.log(error);\r\n//   });\r\n\r\n\r\nPromise.race([promise1, promise2])\r\n  .then(function (success) {\r\n    console.log(success + ' race method');\r\n  })\r\n  .catch(function (error) {\r\n    console.log(error);\r\n  });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9FUzYvZGV2L2pzL21haW4uanM/NDExOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHIiwiZmlsZSI6Ii4vRVM2L2Rldi9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbW9kdWxlTmFtZShtZE5hbWUpIHtcclxuICBjb25zb2xlLmxvZyhgLSBDb250ZW50IG9mIHRoZSAke21kTmFtZX0gc2VjdGlvbmApO1xyXG59XHJcblxyXG5tb2R1bGVOYW1lKFwiUHJvbWlzZXNcIik7XHJcblxyXG5sZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIHJlc29sdmUoJ0RvbmUhJyk7XHJcbiAgICByZWplY3QoJ0ZhaWxlZCEnKTtcclxuICB9LCAxNTAwKTtcclxufSk7XHJcblxyXG5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgY29uc29sZS5sb2codmFsdWUpO1xyXG59LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbn0pO1xyXG5cclxubW9kdWxlTmFtZShcIlByb21pc2VzIC0gQnVpbHQtaW4gbWV0aG9kc1wiKTtcclxuXHJcbmxldCBwcm9taXNlMSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHJlc29sdmUoJ1Jlc29sdmVkIScpO1xyXG4gIH0sIDEwMDApO1xyXG59KVxyXG5cclxuXHJcbmxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHJlamVjdCgnUmVqZWN0ZWQhJyk7XHJcbiAgfSwgMjAwMCk7XHJcbn0pXHJcblxyXG4vLyBQcm9taXNlLmFsbChbcHJvbWlzZTEsIHByb21pc2UyXSlcclxuLy8gICAudGhlbihmdW5jdGlvbiAoc3VjY2Vzcykge1xyXG4vLyAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbi8vICAgfSlcclxuLy8gICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgfSk7XHJcblxyXG5cclxuUHJvbWlzZS5yYWNlKFtwcm9taXNlMSwgcHJvbWlzZTJdKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChzdWNjZXNzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzdWNjZXNzICsgJyByYWNlIG1ldGhvZCcpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ES6/dev/js/main.js\n");

/***/ })

/******/ });