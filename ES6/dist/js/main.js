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

eval("function moduleName(mdName) {\r\n  console.log(`- Content of ${mdName} section`);\r\n}\r\n\r\n// LET AND CONST\r\nmoduleName(\"Let and Const\");\r\nlet myName = \"Flavio\";\r\n\r\nif (true) {\r\n  let myName = \"Sinner\";\r\n  console.log(myName);\r\n};\r\n\r\nconsole.log(myName);\r\n\r\nconst anotherName = \"Sinner\";\r\n// anotherName = \"Sad\"; ERROR\r\nconsole.log(anotherName);\r\n\r\nconst array1 = [1, 2, 3];\r\narray1.push(4);\r\nconsole.log(array1);\r\n\r\nconst Obj1 = {\r\n  age: 29\r\n}\r\n\r\nObj1.age = 30;\r\n\r\nconsole.log(Obj1.age);\r\n\r\n//ARROW FUNCTIONS\r\nmoduleName(\"Arrow function\");\r\nvar fn1 = () => console.log(\"Hello\");\r\n\r\nfn1();\r\n\r\nvar fn2 = () => {\r\n  let a = 2;\r\n  let b = 3;\r\n  return a + b;\r\n};\r\n\r\nconsole.log(fn2());\r\n\r\nvar fn3 = (a, b) => a + b;\r\n\r\nconsole.log(fn3(3, 8));\r\n\r\n//default parameters\r\n\r\nfunction isEqualTo(number, compare = 0) {\r\n  return number == compare;\r\n}\r\n\r\nconsole.log(isEqualTo(0));\r\n\r\nmoduleName(\"Object literal\");\r\n\r\nlet name = 'Anna';\r\nlet age = 20;\r\n\r\nlet obj = {\r\n  name: \"Max\",\r\n  age,\r\n  greet() {\r\n    console.log(this.name + ', ' + this.age);\r\n  }\r\n}\r\n\r\nobj.greet();\r\n\r\nmoduleName(\"Rest operator\");\r\n\r\nfunction sumUp(...toAdd) {\r\n  let result = 0;\r\n  for (let i = 0; i < toAdd.length; i++) {\r\n    result += toAdd[i];\r\n  }\r\n  return result;\r\n}\r\n\r\nconsole.log(sumUp(100, 10, 20));\r\n\r\nmoduleName(\"Spread operator\");\r\n\r\nlet num1 = [1, 2, 3, 4, 5];\r\n\r\nconsole.log(Math.max(...num1));\r\n\r\nmoduleName(\"For-of loop\");\r\n\r\nlet testResults = [1.12, 1.10, 4.1];\r\n\r\nfor (let testRestul of testResults) {\r\n  console.log(testRestul);\r\n}\r\n\r\nmoduleName(\"Destructuring - arrays\");\r\n\r\nlet numbers = [1, 2, 3];\r\n\r\nlet [a, b, c, d = \"Default\"] = numbers;\r\n\r\nconsole.log(c);\r\n\r\nmoduleName(\"Destructuring - objects\");\r\n\r\nlet objL = {\r\n  name3: \"max\",\r\n  age3: 27\r\n}\r\n\r\nlet {\r\n  name3: nome,\r\n  age3\r\n} = objL;\r\n\r\nconsole.log(nome, age3);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9FUzYvZGV2L2pzL21haW4uanM/NDExOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhCQUE4QixPQUFPO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwiZmlsZSI6Ii4vRVM2L2Rldi9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbW9kdWxlTmFtZShtZE5hbWUpIHtcclxuICBjb25zb2xlLmxvZyhgLSBDb250ZW50IG9mICR7bWROYW1lfSBzZWN0aW9uYCk7XHJcbn1cclxuXHJcbi8vIExFVCBBTkQgQ09OU1RcclxubW9kdWxlTmFtZShcIkxldCBhbmQgQ29uc3RcIik7XHJcbmxldCBteU5hbWUgPSBcIkZsYXZpb1wiO1xyXG5cclxuaWYgKHRydWUpIHtcclxuICBsZXQgbXlOYW1lID0gXCJTaW5uZXJcIjtcclxuICBjb25zb2xlLmxvZyhteU5hbWUpO1xyXG59O1xyXG5cclxuY29uc29sZS5sb2cobXlOYW1lKTtcclxuXHJcbmNvbnN0IGFub3RoZXJOYW1lID0gXCJTaW5uZXJcIjtcclxuLy8gYW5vdGhlck5hbWUgPSBcIlNhZFwiOyBFUlJPUlxyXG5jb25zb2xlLmxvZyhhbm90aGVyTmFtZSk7XHJcblxyXG5jb25zdCBhcnJheTEgPSBbMSwgMiwgM107XHJcbmFycmF5MS5wdXNoKDQpO1xyXG5jb25zb2xlLmxvZyhhcnJheTEpO1xyXG5cclxuY29uc3QgT2JqMSA9IHtcclxuICBhZ2U6IDI5XHJcbn1cclxuXHJcbk9iajEuYWdlID0gMzA7XHJcblxyXG5jb25zb2xlLmxvZyhPYmoxLmFnZSk7XHJcblxyXG4vL0FSUk9XIEZVTkNUSU9OU1xyXG5tb2R1bGVOYW1lKFwiQXJyb3cgZnVuY3Rpb25cIik7XHJcbnZhciBmbjEgPSAoKSA9PiBjb25zb2xlLmxvZyhcIkhlbGxvXCIpO1xyXG5cclxuZm4xKCk7XHJcblxyXG52YXIgZm4yID0gKCkgPT4ge1xyXG4gIGxldCBhID0gMjtcclxuICBsZXQgYiA9IDM7XHJcbiAgcmV0dXJuIGEgKyBiO1xyXG59O1xyXG5cclxuY29uc29sZS5sb2coZm4yKCkpO1xyXG5cclxudmFyIGZuMyA9IChhLCBiKSA9PiBhICsgYjtcclxuXHJcbmNvbnNvbGUubG9nKGZuMygzLCA4KSk7XHJcblxyXG4vL2RlZmF1bHQgcGFyYW1ldGVyc1xyXG5cclxuZnVuY3Rpb24gaXNFcXVhbFRvKG51bWJlciwgY29tcGFyZSA9IDApIHtcclxuICByZXR1cm4gbnVtYmVyID09IGNvbXBhcmU7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGlzRXF1YWxUbygwKSk7XHJcblxyXG5tb2R1bGVOYW1lKFwiT2JqZWN0IGxpdGVyYWxcIik7XHJcblxyXG5sZXQgbmFtZSA9ICdBbm5hJztcclxubGV0IGFnZSA9IDIwO1xyXG5cclxubGV0IG9iaiA9IHtcclxuICBuYW1lOiBcIk1heFwiLFxyXG4gIGFnZSxcclxuICBncmVldCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSArICcsICcgKyB0aGlzLmFnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5vYmouZ3JlZXQoKTtcclxuXHJcbm1vZHVsZU5hbWUoXCJSZXN0IG9wZXJhdG9yXCIpO1xyXG5cclxuZnVuY3Rpb24gc3VtVXAoLi4udG9BZGQpIHtcclxuICBsZXQgcmVzdWx0ID0gMDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvQWRkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICByZXN1bHQgKz0gdG9BZGRbaV07XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKHN1bVVwKDEwMCwgMTAsIDIwKSk7XHJcblxyXG5tb2R1bGVOYW1lKFwiU3ByZWFkIG9wZXJhdG9yXCIpO1xyXG5cclxubGV0IG51bTEgPSBbMSwgMiwgMywgNCwgNV07XHJcblxyXG5jb25zb2xlLmxvZyhNYXRoLm1heCguLi5udW0xKSk7XHJcblxyXG5tb2R1bGVOYW1lKFwiRm9yLW9mIGxvb3BcIik7XHJcblxyXG5sZXQgdGVzdFJlc3VsdHMgPSBbMS4xMiwgMS4xMCwgNC4xXTtcclxuXHJcbmZvciAobGV0IHRlc3RSZXN0dWwgb2YgdGVzdFJlc3VsdHMpIHtcclxuICBjb25zb2xlLmxvZyh0ZXN0UmVzdHVsKTtcclxufVxyXG5cclxubW9kdWxlTmFtZShcIkRlc3RydWN0dXJpbmcgLSBhcnJheXNcIik7XHJcblxyXG5sZXQgbnVtYmVycyA9IFsxLCAyLCAzXTtcclxuXHJcbmxldCBbYSwgYiwgYywgZCA9IFwiRGVmYXVsdFwiXSA9IG51bWJlcnM7XHJcblxyXG5jb25zb2xlLmxvZyhjKTtcclxuXHJcbm1vZHVsZU5hbWUoXCJEZXN0cnVjdHVyaW5nIC0gb2JqZWN0c1wiKTtcclxuXHJcbmxldCBvYmpMID0ge1xyXG4gIG5hbWUzOiBcIm1heFwiLFxyXG4gIGFnZTM6IDI3XHJcbn1cclxuXHJcbmxldCB7XHJcbiAgbmFtZTM6IG5vbWUsXHJcbiAgYWdlM1xyXG59ID0gb2JqTDtcclxuXHJcbmNvbnNvbGUubG9nKG5vbWUsIGFnZTMpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ES6/dev/js/main.js\n");

/***/ })

/******/ });