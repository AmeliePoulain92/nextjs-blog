"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/newsletters/[guid]",{

/***/ "./pages/newsletters/[guid].tsx":
/*!**************************************!*\
  !*** ./pages/newsletters/[guid].tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"config\": function() { return /* binding */ config; },\n/* harmony export */   \"default\": function() { return /* binding */ Newsletters; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _newsletter_components_content_Newsletter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @newsletter/components/content/Newsletter */ \"./components/content/Newsletter.tsx\");\n/* harmony import */ var _newsletter_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @newsletter/layouts/MainLayout */ \"./layouts/MainLayout.tsx\");\n/* harmony import */ var _newsletter_components_layout_NewsletterWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @newsletter/components/layout/NewsletterWrapper */ \"./components/layout/NewsletterWrapper.tsx\");\n\nvar __N_SSP = true;\nconst config = {\n    unstable_runtimeJS: false,\n    unstable_excludeFiles: [\n        \"_next/static/chunks/react-refresh.js\"\n    ]\n};\n// Content Components\n\n\n\nfunction Newsletters(data) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newsletter_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newsletter_components_content_Newsletter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            data: data\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\amirzoyan\\\\Documents\\\\Projects\\\\bevnetsites\\\\BevNET\\\\Core\\\\React\\\\packages\\\\newsletter\\\\pages\\\\newsletters\\\\[guid].tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\amirzoyan\\\\Documents\\\\Projects\\\\bevnetsites\\\\BevNET\\\\Core\\\\React\\\\packages\\\\newsletter\\\\pages\\\\newsletters\\\\[guid].tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = Newsletters;\nNewsletters.getLayout = function(page) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newsletter_components_layout_NewsletterWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: page\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\amirzoyan\\\\Documents\\\\Projects\\\\bevnetsites\\\\BevNET\\\\Core\\\\React\\\\packages\\\\newsletter\\\\pages\\\\newsletters\\\\[guid].tsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n};\nvar _c;\n$RefreshReg$(_c, \"Newsletters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzbGV0dGVycy9bZ3VpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHTyxNQUFNQSxTQUFxQjtJQUNqQ0Msb0JBQW9CLEtBQUs7SUFDeEJDLHVCQUF1QjtRQUFDO0tBQXVDO0FBQ2pFLEVBQUU7QUFFRixxQkFBcUI7QUFDOEM7QUFJWDtBQUN3QjtBQUdqRSxTQUFTSSxZQUFZQyxJQUF5QixFQUFFO0lBQzdELHFCQUNFLDhEQUFDSCxzRUFBVUE7a0JBQ1QsNEVBQUNELGlGQUFVQTtZQUFDSSxNQUFNQTs7Ozs7Ozs7Ozs7QUFHeEIsQ0FBQztLQU51QkQ7QUFReEJBLFlBQVlFLFNBQVMsR0FBRyxTQUFVQyxJQUFrQixFQUFFO0lBQ3BELHFCQUFPLDhEQUFDSix1RkFBaUJBO2tCQUFFSTs7Ozs7O0FBQzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3NsZXR0ZXJzL1tndWlkXS50c3g/MWJjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtQYWdlQ29uZmlnfSBmcm9tICduZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IFBhZ2VDb25maWcgPSB7XHJcblx0dW5zdGFibGVfcnVudGltZUpTOiBmYWxzZSxcclxuICB1bnN0YWJsZV9leGNsdWRlRmlsZXM6IFsnX25leHQvc3RhdGljL2NodW5rcy9yZWFjdC1yZWZyZXNoLmpzJ11cclxufTtcclxuXHJcbi8vIENvbnRlbnQgQ29tcG9uZW50c1xyXG5pbXBvcnQgTmV3c2xldHRlciBmcm9tIFwiQG5ld3NsZXR0ZXIvY29tcG9uZW50cy9jb250ZW50L05ld3NsZXR0ZXJcIjtcclxuLy8gaW50ZXJmYWNlc1xyXG5pbXBvcnQgeyBOZXdzTGV0dGVyIGFzIE5ld3NMZXR0ZXJJbnRlcmZhY2UgfSBmcm9tIFwiQG5ld3NsZXR0ZXIvdXRpbHMvaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBnZXROZXdzbGV0dGVyQnlHdWlkIH0gZnJvbSBcIkBuZXdzbGV0dGVyL3NlcnZpY2VzL25ld3NsZXR0ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiQG5ld3NsZXR0ZXIvbGF5b3V0cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBOZXdzbGV0dGVyV3JhcHBlciBmcm9tIFwiQG5ld3NsZXR0ZXIvY29tcG9uZW50cy9sYXlvdXQvTmV3c2xldHRlcldyYXBwZXJcIjtcclxuaW1wb3J0IHNvcnREYXRhIGZyb20gXCJAbmV3c2xldHRlci91dGlscy9zb3J0RGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c2xldHRlcnMoZGF0YTogTmV3c0xldHRlckludGVyZmFjZSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkxheW91dD5cclxuICAgICAgPE5ld3NsZXR0ZXIgZGF0YT17ZGF0YX0gLz5cclxuICAgIDwvTWFpbkxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5OZXdzbGV0dGVycy5nZXRMYXlvdXQgPSBmdW5jdGlvbiAocGFnZTogUmVhY3RFbGVtZW50KSB7XHJcbiAgcmV0dXJuIDxOZXdzbGV0dGVyV3JhcHBlcj57cGFnZX08L05ld3NsZXR0ZXJXcmFwcGVyPjtcclxufTtcclxuXHJcbi8vIFRoaXMgZ2V0cyBjYWxsZWQgb24gZXZlcnkgcmVxdWVzdFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IGFueSkge1xyXG4gIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TmV3c2xldHRlckJ5R3VpZChwYXJhbXMuZ3VpZCk7XHJcbiAgICBjb25zdCBzb3J0ZWREYXRhID0gc29ydERhdGEoZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHNvcnRlZERhdGEsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbmZpZyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsInVuc3RhYmxlX2V4Y2x1ZGVGaWxlcyIsIk5ld3NsZXR0ZXIiLCJNYWluTGF5b3V0IiwiTmV3c2xldHRlcldyYXBwZXIiLCJOZXdzbGV0dGVycyIsImRhdGEiLCJnZXRMYXlvdXQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/newsletters/[guid].tsx\n"));

/***/ })

});