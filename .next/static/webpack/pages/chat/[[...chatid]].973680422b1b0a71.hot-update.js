"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat/[[...chatid]]",{

/***/ "./pages/chat/[[...chatid]].js":
/*!*************************************!*\
  !*** ./pages/chat/[[...chatid]].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_chatSideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/chatSideBar */ \"./components/chatSideBar/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ChatPage() {\n    _s();\n    const [messageText, setMessageText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        console.log(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"New Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid h-screen grid-cols-[260px_1fr]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"chatSideBar\", {}, void 0, false, {\n                        fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col bg-gray-950 text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1\",\n                                children: \"response bar\"\n                            }, void 0, false, {\n                                fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                                className: \"p-18 bg-gray-800\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleSubmit,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                                        className: \"flex gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                value: messageText,\n                                                onChange: (e)=>setMessageText(e.target.value),\n                                                placeholder: \"Send a message..\",\n                                                className: \"w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-emerald-500 focus:bg-gray-600 focus:outline focus:outline-emerald-500\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                                                lineNumber: 23,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn\",\n                                                type: \"submit\",\n                                                children: \"Send\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                                                lineNumber: 29,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                                        lineNumber: 22,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/samuel/Videos/Long Courses/MERN Stack Developer/Full Stack NextJS/Build ChatGPT Clone/chat-gpt-clone/pages/chat/[[...chatid]].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ChatPage, \"4W467vvQwBooitUADbdUfiinMx0=\");\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0L1tbLi4uY2hhdGlkXV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUN4QjtBQUNJO0FBRWxCLFNBQVNHLFdBQVc7O0lBQ2pDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNSSxlQUFlLENBQUNDLElBQU07UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDUixrREFBSUE7MEJBQ0gsNEVBQUNTOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDWjs7Ozs7a0NBQ0QsOERBQUNXO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVM7Ozs7OzswQ0FDeEIsOERBQUNDO2dDQUFPRCxXQUFVOzBDQUNoQiw0RUFBQ0U7b0NBQUtDLFVBQVVUOzhDQUNkLDRFQUFDVTt3Q0FBU0osV0FBVTs7MERBQ2xCLDhEQUFDSztnREFDQ0MsT0FBT2Q7Z0RBQ1BlLFVBQVVaLENBQUFBLElBQUtGLGVBQWVFLEVBQUVhLE1BQU0sQ0FBQ0YsS0FBSztnREFDNUNHLGFBQVk7Z0RBQ1pULFdBQVU7Ozs7OzswREFFWiw4REFBQ1U7Z0RBQU9WLFdBQVU7Z0RBQU1XLE1BQUs7MERBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV0RCxDQUFDO0dBbEN1QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQvW1suLi5jaGF0aWRdXS5qcz83ODM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoYXRTaWRlQmFyIH0gZnJvbSBcImNvbXBvbmVudHMvY2hhdFNpZGVCYXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xuICBjb25zdCBbbWVzc2FnZVRleHQsIHNldE1lc3NhZ2VUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiXCIpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5ldyBDaGF0PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBoLXNjcmVlbiBncmlkLWNvbHMtWzI2MHB4XzFmcl1cIj5cbiAgICAgICAgPGNoYXRTaWRlQmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy1ncmF5LTk1MCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5yZXNwb25zZSBiYXI8L2Rpdj5cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInAtMTggYmctZ3JheS04MDBcIj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2VUZXh0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZVRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZW5kIGEgbWVzc2FnZS4uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByZXNpemUtbm9uZSByb3VuZGVkLW1kIGJnLWdyYXktNzAwIHAtMiB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci1lbWVyYWxkLTUwMCBmb2N1czpiZy1ncmF5LTYwMCBmb2N1czpvdXRsaW5lIGZvY3VzOm91dGxpbmUtZW1lcmFsZC01MDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY2hhdFNpZGVCYXIiLCJIZWFkIiwidXNlU3RhdGUiLCJDaGF0UGFnZSIsIm1lc3NhZ2VUZXh0Iiwic2V0TWVzc2FnZVRleHQiLCJoYW5kbGVTdWJtaXQiLCJlIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9vdGVyIiwiZm9ybSIsIm9uU3VibWl0IiwiZmllbGRzZXQiLCJ0ZXh0YXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat/[[...chatid]].js\n"));

/***/ })

});