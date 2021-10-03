exports.id = 296;
exports.ids = [296];
exports.modules = {

/***/ 65542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./src/server/utilities.js
var utilities = __webpack_require__(80853);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/esm/index.js
var esm = __webpack_require__(40980);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/flex.js
var flex = __webpack_require__(94096);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/spacer.js
var spacer = __webpack_require__(87341);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/box.js
var box = __webpack_require__(48017);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icons/dist/esm/Moon.js
var Moon = __webpack_require__(46755);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icons/dist/esm/Sun.js
var Sun = __webpack_require__(19950);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/esm/icon-button.js
var icon_button = __webpack_require__(48420);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/ColorModeToggleButton.js




const ColorModeToggleButton = ({
  colorMode,
  clickCallback
}) => {
  const handleOnClick = () => {
    if (clickCallback) clickCallback();
  };

  return /*#__PURE__*/jsx_runtime.jsx(icon_button/* IconButton */.h, {
    size: "md",
    variant: "outline",
    "aria-label": colorMode === ' light' ? 'toggle dark mode' : 'toggle light mode',
    icon: colorMode === 'light' ? /*#__PURE__*/jsx_runtime.jsx(Moon/* MoonIcon */.k, {}) : /*#__PURE__*/jsx_runtime.jsx(Sun/* SunIcon */.N, {}),
    onClick: handleOnClick,
    m: 2
  });
};

/* harmony default export */ const components_ColorModeToggleButton = (ColorModeToggleButton);
;// CONCATENATED MODULE: ./components/Nav.js





const Nav = /*#__PURE__*/react.memo(() => {
  const {
    colorMode,
    toggleColorMode
  } = (0,esm.useColorMode)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
    children: [/*#__PURE__*/jsx_runtime.jsx(spacer/* Spacer */.L, {}), /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
      children: /*#__PURE__*/jsx_runtime.jsx(components_ColorModeToggleButton, {
        colorMode: colorMode,
        clickCallback: toggleColorMode
      })
    })]
  });
});
Nav.displayName = 'Nav';
/* harmony default export */ const components_Nav = (Nav);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(utilities/* Chakra */.s, {
    cookies: pageProps.cookies,
    children: [/*#__PURE__*/jsx_runtime.jsx(components_Nav, {}), /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 5924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(56859);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/esm/index.js
var esm = __webpack_require__(40980);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/esm/extend-theme.js + 1 modules
var extend_theme = __webpack_require__(82775);
;// CONCATENATED MODULE: ./styles/theme.js
// theme.js
// 1. import `extendTheme` function
 // 2. Add your color mode config

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}; // 3. extend the theme

const theme = (0,extend_theme/* extendTheme */.B)({
  config
});
/* harmony default export */ const styles_theme = (theme);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./pages/_document.js
// eslint-disable-next-line @next/next/no-document-import-in-page





class MyDocument extends next_document.default {
  render() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(next_document.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(next_document.Head, {
        children: [/*#__PURE__*/jsx_runtime.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        }), /*#__PURE__*/jsx_runtime.jsx("link", {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        }), /*#__PURE__*/jsx_runtime.jsx("link", {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        }), /*#__PURE__*/jsx_runtime.jsx("link", {
          rel: "manifest",
          href: "/site.webmanifest"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime.jsx(esm.ColorModeScript, {
          initialColorMode: styles_theme.config.initialColorMode
        }), /*#__PURE__*/jsx_runtime.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime.jsx(next_document.NextScript, {})]
      })]
    });
  }

}

/***/ }),

/***/ 59521:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 59521;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 97020:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/_XfFx-nlUHVcWosf_Uy6q/_buildManifest.js","static/_XfFx-nlUHVcWosf_Uy6q/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-0e3c274fd8419109d37b.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-c4f2541b93e4ae8b71f8.js","static/chunks/pages/index-5b735ea5a7c373274f9e.js"],"/_app":["static/chunks/webpack-0e3c274fd8419109d37b.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-c4f2541b93e4ae8b71f8.js","static/chunks/pages/_app-4de43510d01e78cbdf24.js"],"/_error":["static/chunks/webpack-0e3c274fd8419109d37b.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-c4f2541b93e4ae8b71f8.js","static/chunks/pages/_error-737a04e9a0da63c9d162.js"],"/ffxiv-addons":["static/chunks/webpack-0e3c274fd8419109d37b.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-c4f2541b93e4ae8b71f8.js","static/chunks/430-50da9cbdd43c1558327d.js","static/chunks/pages/ffxiv-addons-3297b11bd46f66d29f6a.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ 59450:
/***/ ((module) => {

"use strict";
module.exports = {"Dg":[]};

/***/ })

};
;