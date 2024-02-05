(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 54501);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 19182);
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main */ 13182);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    client = _useState4[0],
    setClient = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var client = window.app.initialized();
    setClient(client);
    setLoaded(false);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
    theme: {
      fonts: {
        body: "'DM sans', sans-serif"
      }
    }
  }, loaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    alignItems: "center",
    justifyContent: "center",
    css: {
      width: "100%",
      height: "100vh"
    }
  }, "Loading....") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    client: client
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 13182:
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\src\\components\\main.js: Unexpected token, expected \",\" (84:10)\n\n\u001b[0m \u001b[90m 82 |\u001b[39m           position\u001b[33m:\u001b[39m\u001b[32m\"relative\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 83 |\u001b[39m           top\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 84 |\u001b[39m           textAlign\u001b[33m:\u001b[39m \u001b[32m\"center\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 85 |\u001b[39m           color\u001b[33m:\u001b[39m \u001b[32m\"$neutral800\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 86 |\u001b[39m         }}\u001b[0m\n\u001b[0m \u001b[90m 87 |\u001b[39m       \u001b[33m>\u001b[39m\u001b[0m\n    at constructor (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:353:19)\n    at JSXParserMixin.raise (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:3277:19)\n    at JSXParserMixin.unexpected (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:3297:16)\n    at JSXParserMixin.expect (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:3601:28)\n    at JSXParserMixin.parseObjectLike (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:11334:14)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10865:23)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6821:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10580:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10563:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10541:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10395:61)\n    at JSXParserMixin.parseExprOps (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10400:23)\n    at JSXParserMixin.parseMaybeConditional (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10377:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10338:21)\n    at JSXParserMixin.parseExpressionBase (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10292:23)\n    at C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10288:39\n    at JSXParserMixin.allowInAnd (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:11926:12)\n    at JSXParserMixin.parseExpression (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10288:17)\n    at JSXParserMixin.jsxParseExpressionContainer (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6687:31)\n    at JSXParserMixin.jsxParseAttributeValue (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6659:21)\n    at JSXParserMixin.jsxParseAttribute (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6708:38)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6722:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6717:17)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6741:33)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6753:32)\n    at JSXParserMixin.jsxParseElement (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6804:17)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6816:19)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10580:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10563:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10541:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10395:61)\n    at JSXParserMixin.parseExprOps (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10400:23)\n    at JSXParserMixin.parseMaybeConditional (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10377:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10338:21)\n    at C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10308:39\n    at JSXParserMixin.allowInAnd (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:11926:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10308:17)\n    at JSXParserMixin.parseParenAndDistinguishExpression (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:11189:28)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10847:23)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:6821:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10580:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10563:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10541:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10395:61)\n    at JSXParserMixin.parseExprOps (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10400:23)\n    at JSXParserMixin.parseMaybeConditional (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10377:23)\n    at JSXParserMixin.parseMaybeAssign (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10338:21)\n    at JSXParserMixin.parseExpressionBase (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10292:23)\n    at C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:10288:39\n    at JSXParserMixin.allowInAnd (C:\\Users\\vjkan\\OneDrive\\Desktop\\ChatGPT\\chatgpt\\node_modules\\@babel\\parser\\lib\\index.js:11921:16)");

/***/ }),

/***/ 55579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 73935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 98548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 48187);




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 51424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT;;YAEW;CACX,mCAAmC;CACnC,kCAAkC;AACnC;;AAEA;CACC;WACU;AACX","sourcesContent":["body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 98548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 51424);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(26981), __webpack_exec__(55579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.34ff22bf.js.map