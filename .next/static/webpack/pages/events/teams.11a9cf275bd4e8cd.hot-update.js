"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/teams",{

/***/ "./components/TeamRow.js":
/*!*******************************!*\
  !*** ./components/TeamRow.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/events */ \"./ethereum/events.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar TeamRow = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(TeamRow, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(TeamRow);\n    function TeamRow() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, TeamRow);\n        var _this;\n        _this = _super.apply(this, arguments);\n        var _this1 = (0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"onVote\", /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n            var event_vote, accounts;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event_vote = (0,_ethereum_events__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this1.props.address);\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts()\n                        ];\n                    case 1:\n                        accounts = _state.sent();\n                        if (!(accounts.length > 0)) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            event_vote.methods.vote_here(_this1.props.id).send({\n                                from: accounts[0]\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        console.error(\"No accounts found!\");\n                        _state.label = 4;\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        }));\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(TeamRow, [\n        {\n            //const going_on = await event_vote.methods.going_on().call();\n            key: \"render\",\n            value: function render() {\n                var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Table.Cell;\n                var _props = this.props, id = _props.id, team = _props.team, registeredVotesCount = _props.registeredVotesCount;\n                console.log(team_dict);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: id\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20051\\\\minor_projectBlockchain\\\\components\\\\TeamRow.js\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: team.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20051\\\\minor_projectBlockchain\\\\components\\\\TeamRow.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: team.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20051\\\\minor_projectBlockchain\\\\components\\\\TeamRow.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: team.votesCount\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20051\\\\minor_projectBlockchain\\\\components\\\\TeamRow.js\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {\n                                color: \"green\",\n                                basic: true,\n                                onClick: this.onVote,\n                                children: \"Vote for it!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\20051\\\\minor_projectBlockchain\\\\components\\\\TeamRow.js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\20051\\\\minor_projectBlockchain\\\\components\\\\TeamRow.js\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\20051\\\\minor_projectBlockchain\\\\components\\\\TeamRow.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return TeamRow;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamRow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RlYW1Sb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFBeUM7QUFDUztBQUNkO0FBQ1M7QUFDN0MsV0FBYSxpQkErQlY7OzhFQS9CR00sT0FBTzsrRkFBUEEsT0FBTzthQUFQQSxPQUFPO2dHQUFQQSxPQUFPOzs7O1FBRVRDLGdGQUFBQSxDQUFBQSx3RkFBQUEsU0FBQUEsUUFBTSxnQkFBRywrRkFBWTtnQkFDWEMsVUFBVSxFQUNWQyxRQUFROzs7O3dCQURSRCxVQUFVLEdBQUdILDREQUFXLENBQUMsT0FBS0ssS0FBSyxDQUFDQyxPQUFPLENBQUMsQ0FBQzt3QkFDbEM7OzRCQUFNUCxzRUFBb0IsRUFBRTswQkFBQTs7d0JBQXZDSyxRQUFRLEdBQUcsYUFBNEI7NkJBQ3pDQSxDQUFBQSxRQUFRLENBQUNLLE1BQU0sR0FBRyxDQUFDLEdBQW5CTDs7OzBCQUFtQjt3QkFDbkI7OzRCQUFNRCxVQUFVLENBQUNPLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLE9BQUtOLEtBQUssQ0FBQ08sRUFBRSxDQUFDLENBQUNDLElBQUksQ0FBQztnQ0FBRUMsSUFBSSxFQUFFVixRQUFRLENBQUMsQ0FBQyxDQUFDOzZCQUFFLENBQUM7MEJBQUE7O3dCQUE3RSxhQUE2RSxDQUFDOzs7Ozs7d0JBRTlFVyxPQUFPLENBQUNDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOzs7Ozs7OztRQUU1QyxDQUFDLEVBQUM7OzttRkFWQWYsT0FBTzs7WUFXVCw4REFBOEQ7WUFDOURnQixHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDTCxJQUFRQyxHQUFHLEdBQVdyQix5REFBWCxFQUFFc0IsSUFBSSxHQUFLdEIsMERBQUw7Z0JBQ2pCLElBQTJDLE1BQVUsR0FBVixJQUFJLENBQUNRLEtBQUssRUFBN0NPLEVBQUUsR0FBaUMsTUFBVSxDQUE3Q0EsRUFBRSxFQUFFUSxJQUFJLEdBQTJCLE1BQVUsQ0FBekNBLElBQUksRUFBRUMsb0JBQW9CLEdBQUssTUFBVSxDQUFuQ0Esb0JBQW9CO2dCQUN0Q04sT0FBTyxDQUFDTyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixxQkFDSSw4REFBQ0wsR0FBRzs7c0NBQ0EsOERBQUNDLElBQUk7c0NBQUVQLEVBQUU7Ozs7O2dDQUFRO3NDQUNqQiw4REFBQ08sSUFBSTtzQ0FBRUMsSUFBSSxDQUFDSSxJQUFJOzs7OztnQ0FBUTtzQ0FDeEIsOERBQUNMLElBQUk7c0NBQUVDLElBQUksQ0FBQ0ssV0FBVzs7Ozs7Z0NBQVE7c0NBQy9CLDhEQUFDTixJQUFJO3NDQUFFQyxJQUFJLENBQUNNLFVBQVU7Ozs7O2dDQUFRO3NDQUM5Qiw4REFBQ1AsSUFBSTtzQ0FDRCw0RUFBQ3JCLHNEQUFNO2dDQUFDNkIsS0FBSyxFQUFDLE9BQU87Z0NBQUNDLEtBQUs7Z0NBQUNDLE9BQU8sRUFBRSxJQUFJLENBQUMzQixNQUFNOzBDQUFFLGNBQ2xDOzs7OztvQ0FBUzs7Ozs7Z0NBQ3RCOzs7Ozs7d0JBQ0wsQ0FFUjtZQUNOLENBQUM7OztXQTdCQ0QsT0FBTztDQThCWixDQTlCcUJMLDRDQUFTLENBOEI5QjtBQUNELCtEQUFlSyxPQUFPLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtUm93LmpzPzkxODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBFdmVudFZvdGluZyBmcm9tICcuLi9ldGhlcmV1bS9ldmVudHMnO1xyXG5jbGFzcyBUZWFtUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBvblZvdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRfdm90ZSA9IEV2ZW50Vm90aW5nKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGV2ZW50X3ZvdGUubWV0aG9kcy52b3RlX2hlcmUodGhpcy5wcm9wcy5pZCkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBhY2NvdW50cyBmb3VuZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vY29uc3QgZ29pbmdfb24gPSBhd2FpdCBldmVudF92b3RlLm1ldGhvZHMuZ29pbmdfb24oKS5jYWxsKCk7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIHRlYW0sIHJlZ2lzdGVyZWRWb3Rlc0NvdW50IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlYW1fZGljdCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDZWxsPntpZH08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57dGVhbS5uYW1lfTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt0ZWFtLmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPnt0ZWFtLnZvdGVzQ291bnR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWMgb25DbGljaz17dGhpcy5vblZvdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWb3RlIGZvciBpdCE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGVhbVJvdyA7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiRXZlbnRWb3RpbmciLCJUZWFtUm93Iiwib25Wb3RlIiwiZXZlbnRfdm90ZSIsImFjY291bnRzIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJsZW5ndGgiLCJtZXRob2RzIiwidm90ZV9oZXJlIiwiaWQiLCJzZW5kIiwiZnJvbSIsImNvbnNvbGUiLCJlcnJvciIsInJlbmRlciIsIlJvdyIsIkNlbGwiLCJ0ZWFtIiwicmVnaXN0ZXJlZFZvdGVzQ291bnQiLCJsb2ciLCJ0ZWFtX2RpY3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ2b3Rlc0NvdW50IiwiY29sb3IiLCJiYXNpYyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TeamRow.js\n"));

/***/ })

});