"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n//this would contain the common elements that would be displayed accross all the pages\nvar _this = undefined;\n\n\n\n\n //Head is a component which can be auto used with another component\n// className=\"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%\"\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    async: true,\n                    rel: \"stylesheet\",\n                    href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\components\\\\Layout.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\components\\\\Layout.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\components\\\\Layout.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, _this),\n            props.children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\components\\\\Layout.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, _this);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNGQUFzRjtBQUV0Rjs7QUFBMEI7QUFDSTtBQUNnQjtBQUNsQixDQUFJLG1FQUFtRTtBQUNuRyxrR0FBa0c7QUFDbEcsNkJBQWVJLG9DQUFBQSxLQUFLLEVBQUk7SUFDcEIscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDRixrREFBSTswQkFDTCw0RUFBQ0csTUFBSTtvQkFBQ0MsS0FBSztvQkFDUEMsR0FBRyxFQUFDLFlBQVk7b0JBQ2hCQyxJQUFJLEVBQUMsa0VBQWtFOzs7Ozt5QkFDckU7Ozs7O3FCQUNDOzBCQUNQLDhEQUFDUiwrQ0FBTTs7OztxQkFBRTtZQUNSRyxLQUFLLENBQUNNLFFBQVE7Ozs7OzthQUNiLENBQ1I7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RoaXMgd291bGQgY29udGFpbiB0aGUgY29tbW9uIGVsZW1lbnRzIHRoYXQgd291bGQgYmUgZGlzcGxheWVkIGFjY3Jvc3MgYWxsIHRoZSBwYWdlc1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSduZXh0L2hlYWQnOyAgICAvL0hlYWQgaXMgYSBjb21wb25lbnQgd2hpY2ggY2FuIGJlIGF1dG8gdXNlZCB3aXRoIGFub3RoZXIgY29tcG9uZW50XHJcbi8vIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1pbmRpZ28tNTAwIGZyb20tMTAlIHZpYS1za3ktNTAwIHZpYS0zMCUgdG8tZW1lcmFsZC01MDAgdG8tOTAlXCJcclxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgID0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bGluayBhc3luY1xyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbsKgwqDCoMKgKTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJDb250YWluZXIiLCJIZWFkIiwicHJvcHMiLCJkaXYiLCJsaW5rIiwiYXN5bmMiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/events */ \"./ethereum/events.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar EventIndex = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(EventIndex, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(EventIndex);\n    function EventIndex() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, EventIndex);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_this), \"state\", {\n            event_num: 1\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(EventIndex, [\n        {\n            key: \"renderEvents\",\n            value: function renderEvents() {\n                var _this = this;\n                var items = this.props.events.map(function(address, index) {\n                    var header = \"Event \".concat(_this.state.event_num + index);\n                    return {\n                        header: header,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                            route: \"/events/\".concat(address),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"View this Event\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, _this),\n                        fluid: true\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" animate-pulse delay-150 border-solid border-white rounded-md shadow-xl font-semibold text-center p-10 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Group, {\n                            items: items\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            src: \"https://cdn.tailwindcss.com\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                    rel: \"stylesheet\",\n                                    href: \"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center pt-7\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-1/2 border-solid border-slate-950 rounded-lg pl-12 pr-12 bg-contain bg-center\",\n                                        src: \"https://www.miamidade.gov/resources/images/news/2020-06-22-three-ways-to-vote.jpg\",\n                                        alt: \"voting\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"rounded-lg py-7 text-3xl font-bold underline text-cliffordh-24 h-24 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 to-gray-500 text-white text-center bg-opacity-70\",\n                                    children: \"OnGoing Events !\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 21\n                                }, this),\n                                this.renderEvents(),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                                    route: \"/events/new\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            className: \"flex justify-center mx-auto rounded-lg cursor-pointer animate-bounce delay-300 p-2 mt-5 text-white font-semibold px-6 py-3 h-12 w-48 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 hover:from-pink-500 hover:to-yellow-500\",\n                                            children: \"Create an Event\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\20051\\\\OneDrive\\\\Desktop\\\\minor_projectBlockchain\\\\pages\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(function() {\n                    var events;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedEvents().call()\n                                ];\n                            case 1:\n                                events = _state.sent();\n                                return [\n                                    2,\n                                    {\n                                        events: events\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return EventIndex;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7Q0ErRGYsQ0EvRHdCUCw0Q0FBUyxDQStEakM7QUFFRCwrREFBZU8sVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcyc7XHJcbmltcG9ydCBFdmVudFZvdGluZyBmcm9tICcuLi9ldGhlcmV1bS9ldmVudHMnO1xyXG5jbGFzcyBFdmVudEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGV2ZW50X251bTogMVxyXG4gICAgfTtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZEV2ZW50cygpLmNhbGwoKTtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIGV2ZW50c1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRXZlbnRzICgpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuZXZlbnRzLm1hcCgoYWRkcmVzcyxpbmRleCkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGBFdmVudCAke3RoaXMuc3RhdGUuZXZlbnRfbnVtICsgaW5kZXh9YDtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gOiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZSA9IHtgL2V2ZW50cy8ke2FkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+VmlldyB0aGlzIEV2ZW50PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiksXHJcbiAgICAgICAgICAgICAgICBmbHVpZCA6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGFuaW1hdGUtcHVsc2UgZGVsYXktMTUwIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUgcm91bmRlZC1tZCBzaGFkb3cteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciBwLTEwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbsKgwqDCoMKgwqDCoMKgwqApO1xyXG4gICAgfSBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4udGFpbHdpbmRjc3MuY29tXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVtjb25pYy1ncmFkaWVudChhdF9ib3R0b21fbGVmdCxfdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKV0gZnJvbS1ncmF5LTkwMCB0by1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEvMiBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTk1MCByb3VuZGVkLWxnIHBsLTEyIHByLTEyIGJnLWNvbnRhaW4gYmctY2VudGVyXCIgc3JjPVwiaHR0cHM6Ly93d3cubWlhbWlkYWRlLmdvdi9yZXNvdXJjZXMvaW1hZ2VzL25ld3MvMjAyMC0wNi0yMi10aHJlZS13YXlzLXRvLXZvdGUuanBnXCIgYWx0PVwidm90aW5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBweS03IHRleHQtM3hsIGZvbnQtYm9sZCB1bmRlcmxpbmUgdGV4dC1jbGlmZm9yZGgtMjQgaC0yNCBcclxuICAgICAgICAgICAgICAgIGJnLVtjb25pYy1ncmFkaWVudChhdF9ib3R0b21fcmlnaHQsX3ZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSldIGZyb20tZ3JheS03MDAgdG8tZ3JheS01MDAgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBiZy1vcGFjaXR5LTcwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9uR29pbmcgRXZlbnRzICE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckV2ZW50cygpfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvZXZlbnRzL25ld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgYW5pbWF0ZS1ib3VuY2UgZGVsYXktMzAwIHAtMiBtdC01IHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweC02IHB5LTMgaC0xMiB3LTQ4IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS02MDAgdmlhLWJsdWUtNzAwIHRvLWJsdWUtOTAwIGhvdmVyOmZyb20tcGluay01MDAgaG92ZXI6dG8teWVsbG93LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhbiBFdmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmYWN0b3J5IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJFdmVudFZvdGluZyIsIkV2ZW50SW5kZXgiLCJzdGF0ZSIsImV2ZW50X251bSIsInJlbmRlckV2ZW50cyIsIml0ZW1zIiwicHJvcHMiLCJldmVudHMiLCJtYXAiLCJhZGRyZXNzIiwiaW5kZXgiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsInJvdXRlIiwiYSIsImZsdWlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiR3JvdXAiLCJyZW5kZXIiLCJzY3JpcHQiLCJzcmMiLCJsaW5rIiwicmVsIiwiaHJlZiIsImltZyIsImFsdCIsImgyIiwiYnV0dG9uIiwidHlwZSIsImdldEluaXRpYWxQcm9wcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEV2ZW50cyIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});