exports.id = 312;
exports.ids = [312,639];
exports.modules = {

/***/ 38448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ Center)
/* harmony export */ });
/* unused harmony export AbsoluteCenter */
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89384);
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * React component used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 *
 * @see Docs https://chakra-ui.com/center
 */
var Center = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__/* .chakra */ .m$)("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .__DEV__ */ .Ts) {
  Center.displayName = "Center";
}

var centerStyles = {
  horizontal: {
    insetStart: "50%",
    transform: "translateX(-50%)"
  },
  vertical: {
    top: "50%",
    transform: "translateY(-50%)"
  },
  both: {
    insetStart: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};
/**
 * React component used to horizontally and vertically center an element
 * relative to its parent dimensions.
 *
 * It uses the `position: absolute` strategy.
 *
 * @see Docs https://chakra-ui.com/center
 * @see WebDev https://web.dev/centering-in-css/#5.-pop-and-plop
 */

var AbsoluteCenter = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((props, ref) => {
  var {
    axis = "both"
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["axis"]);

  return /*#__PURE__*/React.createElement(chakra.div, _extends({
    ref: ref,
    __css: centerStyles[axis]
  }, rest, {
    position: "absolute"
  }));
})));
//# sourceMappingURL=center.js.map

/***/ }),

/***/ 53850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90063);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55284);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94915);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89384);
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84461);
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Layout component used to wrap app or website content
 *
 * It sets `margin-left` and `margin-right` to `auto`,
 * to keep its content centered.
 *
 * It also sets a default max-width of `60ch` (60 characters).
 */
var Container = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .G)((props, ref) => {
  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__/* .omitThemingProps */ .Lr)(props),
      {
    className,
    centerContent
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className", "centerContent"]);

  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__/* .useStyleConfig */ .m)("Container", props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__/* .chakra.div */ .m$.div, _extends({
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-container", className)
  }, rest, {
    __css: _extends({}, styles, centerContent && {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    })
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .__DEV__ */ .Ts) {
  Container.displayName = "Container";
}
//# sourceMappingURL=container.js.map

/***/ }),

/***/ 336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90063);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94915);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55284);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89384);
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84461);
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Heading = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .G)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__/* .useStyleConfig */ .m)("Heading", props);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__/* .omitThemingProps */ .Lr)(props),
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__/* .chakra.h2 */ .m$.h2, _extends({
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-heading", props.className)
  }, rest, {
    __css: styles
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .__DEV__ */ .Ts) {
  Heading.displayName = "Heading";
}
//# sourceMappingURL=heading.js.map

/***/ }),

/***/ 43663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ SimpleGrid)
});

// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/esm/forward-ref.js
var forward_ref = __webpack_require__(90063);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/utils/dist/esm/assertion.js
var assertion = __webpack_require__(73808);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/utils/dist/esm/responsive.js
var responsive = __webpack_require__(16678);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/esm/system.js + 1 modules
var system = __webpack_require__(89384);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/esm/grid.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * React component used to create grid layouts.
 *
 * It renders a `div` with `display: grid` and
 * comes with helpful style shorthand.
 *
 * @see Docs https://chakra-ui.com/grid
 */
var Grid = /*#__PURE__*/(0,forward_ref/* forwardRef */.G)((props, ref) => {
  var {
    area,
    templateAreas,
    gap,
    rowGap,
    columnGap,
    column,
    row,
    autoFlow,
    autoRows,
    templateRows,
    autoColumns,
    templateColumns
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["area", "templateAreas", "gap", "rowGap", "columnGap", "column", "row", "autoFlow", "autoRows", "templateRows", "autoColumns", "templateColumns"]);

  var styles = {
    display: "grid",
    gridArea: area,
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };
  return /*#__PURE__*/react.createElement(system/* chakra.div */.m$.div, _extends({
    ref: ref,
    __css: styles
  }, rest));
});

if (assertion/* __DEV__ */.Ts) {
  Grid.displayName = "Grid";
}

function spanFn(span) {
  return mapResponsive(span, value => value === "auto" ? "auto" : "span " + value + "/span " + value);
}

var GridItem = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((props, ref) => {
  var {
    colSpan,
    colStart,
    colEnd,
    rowEnd,
    rowSpan,
    rowStart
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["colSpan", "colStart", "colEnd", "rowEnd", "rowSpan", "rowStart"]);

  var styles = filterUndefined({
    gridColumn: spanFn(colSpan),
    gridRow: spanFn(rowSpan),
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd
  });
  return /*#__PURE__*/React.createElement(chakra.div, _extends({
    ref: ref,
    __css: styles
  }, rest));
})));
//# sourceMappingURL=grid.js.map
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/esm/simple-grid.js
function simple_grid_extends() { simple_grid_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return simple_grid_extends.apply(this, arguments); }

function simple_grid_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * SimpleGrid
 *
 * React component make that providers a simpler interface, and
 * make its easy to create responsive grid layouts.
 *
 * @see Docs https://chakra-ui.com/simplegrid
 */
var SimpleGrid = /*#__PURE__*/(0,forward_ref/* forwardRef */.G)((props, ref) => {
  var {
    columns,
    spacingX,
    spacingY,
    spacing,
    minChildWidth
  } = props,
      rest = simple_grid_objectWithoutPropertiesLoose(props, ["columns", "spacingX", "spacingY", "spacing", "minChildWidth"]);

  var templateColumns = minChildWidth ? widthToColumns(minChildWidth) : countToColumns(columns);
  return /*#__PURE__*/react.createElement(Grid, simple_grid_extends({
    ref: ref,
    gap: spacing,
    columnGap: spacingX,
    rowGap: spacingY,
    templateColumns: templateColumns
  }, rest));
});

if (assertion/* __DEV__ */.Ts) {
  SimpleGrid.displayName = "SimpleGrid";
}

function toPx(n) {
  return (0,assertion/* isNumber */.hj)(n) ? n + "px" : n;
}

function widthToColumns(width) {
  return (0,responsive/* mapResponsive */.XQ)(width, value => (0,assertion/* isNull */.Ft)(value) ? null : "repeat(auto-fit, minmax(" + toPx(value) + ", 1fr))");
}

function countToColumns(count) {
  return (0,responsive/* mapResponsive */.XQ)(count, value => (0,assertion/* isNull */.Ft)(value) ? null : "repeat(" + value + ", minmax(0, 1fr))");
}
//# sourceMappingURL=simple-grid.js.map

/***/ }),

/***/ 28675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gC": () => (/* binding */ VStack)
});

// UNUSED EXPORTS: HStack, Stack, StackDivider, StackItem

// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/esm/system.js + 1 modules
var system = __webpack_require__(89384);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/esm/forward-ref.js
var forward_ref = __webpack_require__(90063);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/utils/dist/esm/dom.js
var dom = __webpack_require__(84461);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/utils/dist/esm/assertion.js
var assertion = __webpack_require__(73808);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/react-utils/dist/esm/children.js

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */

function getValidChildren(children) {
  return react.Children.toArray(children).filter(child => /*#__PURE__*/react.isValidElement(child));
}
//# sourceMappingURL=children.js.map
// EXTERNAL MODULE: ./node_modules/@chakra-ui/utils/dist/esm/responsive.js
var responsive = __webpack_require__(16678);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/esm/stack.utils.js


/**
 * If we ever run into SSR issues with this, check this post to find a fix for it:
 * @see https://medium.com/@emmenko/patching-lobotomized-owl-selector-for-emotion-ssr-5a582a3c424c
 */
var selector = "& > *:not(style) ~ *:not(style)";
function getStackStyles(options) {
  var {
    spacing,
    direction
  } = options;
  var directionStyles = {
    column: {
      marginTop: spacing,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: 0
    },
    row: {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: spacing
    },
    "column-reverse": {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: spacing,
      marginStart: 0
    },
    "row-reverse": {
      marginTop: 0,
      marginEnd: spacing,
      marginBottom: 0,
      marginStart: 0
    }
  };
  return {
    flexDirection: direction,
    [selector]: (0,responsive/* mapResponsive */.XQ)(direction, value => directionStyles[value])
  };
}
function getDividerStyles(options) {
  var {
    spacing,
    direction
  } = options;
  var dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": (0,responsive/* mapResponsive */.XQ)(direction, value => dividerStyles[value])
  };
}
//# sourceMappingURL=stack.utils.js.map
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/esm/stack.js
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var StackDivider = props => /*#__PURE__*/React.createElement(chakra.div, _extends({
  className: "chakra-stack__divider"
}, props, {
  __css: _extends({}, props["__css"], {
    borderWidth: 0,
    alignSelf: "stretch",
    borderColor: "inherit",
    width: "auto",
    height: "auto"
  })
}));
var StackItem = props => /*#__PURE__*/react.createElement(system/* chakra.div */.m$.div, _extends({
  className: "chakra-stack__item"
}, props, {
  __css: _extends({
    display: "inline-block",
    flex: "0 0 auto",
    minWidth: 0
  }, props["__css"])
}));

/**
 * Stacks help you easily create flexible and automatically distributed layouts
 *
 * You can stack elements in the horizontal or vertical direction,
 * and apply a space or/and divider between each element.
 *
 * It uses `display: flex` internally and renders a `div`.
 *
 * @see Docs https://chakra-ui.com/stack
 *
 */
var Stack = /*#__PURE__*/(0,forward_ref/* forwardRef */.G)((props, ref) => {
  var {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["isInline", "direction", "align", "justify", "spacing", "wrap", "children", "divider", "className", "shouldWrapChildren"]);

  var direction = isInline ? "row" : directionProp != null ? directionProp : "column";
  var styles = react.useMemo(() => getStackStyles({
    direction,
    spacing
  }), [direction, spacing]);
  var dividerStyle = react.useMemo(() => getDividerStyles({
    spacing,
    direction
  }), [spacing, direction]);
  var hasDivider = !!divider;
  var shouldUseChildren = !shouldWrapChildren && !hasDivider;
  var validChildren = getValidChildren(children);
  var clones = shouldUseChildren ? validChildren : validChildren.map((child, index) => {
    // Prefer provided child key, fallback to index
    var key = typeof child.key !== "undefined" ? child.key : index;
    var isLast = index + 1 === validChildren.length;
    var wrappedChild = /*#__PURE__*/react.createElement(StackItem, {
      key: key
    }, child);

    var _child = shouldWrapChildren ? wrappedChild : child;

    if (!hasDivider) return _child;
    var clonedDivider = /*#__PURE__*/react.cloneElement(divider, {
      __css: dividerStyle
    });

    var _divider = isLast ? null : clonedDivider;

    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: key
    }, _child, _divider);
  });

  var _className = (0,dom.cx)("chakra-stack", className);

  return /*#__PURE__*/react.createElement(system/* chakra.div */.m$.div, _extends({
    ref: ref,
    display: "flex",
    alignItems: align,
    justifyContent: justify,
    flexDirection: styles.flexDirection,
    flexWrap: wrap,
    className: _className,
    __css: hasDivider ? {} : {
      [selector]: styles[selector]
    }
  }, rest), clones);
});

if (assertion/* __DEV__ */.Ts) {
  Stack.displayName = "Stack";
}
/**
 * A view that arranges its children in a horizontal line.
 */


var HStack = /*#__PURE__*/(0,forward_ref/* forwardRef */.G)((props, ref) => /*#__PURE__*/react.createElement(Stack, _extends({
  align: "center"
}, props, {
  direction: "row",
  ref: ref
})));

if (assertion/* __DEV__ */.Ts) {
  HStack.displayName = "HStack";
}
/**
 * A view that arranges its children in a vertical line.
 */


var VStack = /*#__PURE__*/(0,forward_ref/* forwardRef */.G)((props, ref) => /*#__PURE__*/react.createElement(Stack, _extends({
  align: "center"
}, props, {
  direction: "column",
  ref: ref
})));

if (assertion/* __DEV__ */.Ts) {
  VStack.displayName = "VStack";
}
//# sourceMappingURL=stack.js.map

/***/ }),

/***/ 64115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90063);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94915);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55284);
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89384);
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4651);
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84461);
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Used to render texts or paragraphs.
 *
 * @see Docs https://chakra-ui.com/text
 */
var Text = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .G)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__/* .useStyleConfig */ .m)("Text", props);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__/* .omitThemingProps */ .Lr)(props),
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className", "align", "decoration", "casing"]);

  var aliasedProps = (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .filterUndefined */ .YU)({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__/* .chakra.p */ .m$.p, _extends({
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text", props.className)
  }, aliasedProps, rest, {
    __css: styles
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .__DEV__ */ .Ts) {
  Text.displayName = "Text";
}
//# sourceMappingURL=text.js.map

/***/ }),

/***/ 16678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XQ": () => (/* binding */ mapResponsive)
/* harmony export */ });
/* unused harmony exports breakpoints, objectToArrayNotation, arrayToObjectNotation, isResponsiveObjectLike, isCustomBreakpoint */
/* harmony import */ var _assertion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73808);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4651);



var breakpoints = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function mapResponsive(prop, mapper) {
  if ((0,_assertion__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(prop)) {
    return prop.map(item => {
      if (item === null) {
        return null;
      }

      return mapper(item);
    });
  }

  if ((0,_assertion__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(prop)) {
    return (0,_object__WEBPACK_IMPORTED_MODULE_1__/* .objectKeys */ .Yd)(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }

  if (prop != null) {
    return mapper(prop);
  }

  return null;
}
function objectToArrayNotation(obj, bps) {
  if (bps === void 0) {
    bps = breakpoints;
  }

  var result = bps.map(br => {
    var _obj$br;

    return (_obj$br = obj[br]) != null ? _obj$br : null;
  });

  while (getLastItem(result) === null) {
    result.pop();
  }

  return result;
}
function arrayToObjectNotation(values, bps) {
  if (bps === void 0) {
    bps = breakpoints;
  }

  var result = {};
  values.forEach((value, index) => {
    var key = bps[index];
    if (value == null) return;
    result[key] = value;
  });
  return result;
}
function isResponsiveObjectLike(obj, bps) {
  if (bps === void 0) {
    bps = breakpoints;
  }

  var keys = Object.keys(obj);
  return keys.length > 0 && keys.every(key => bps.includes(key));
}
/**
 * since breakpoints are defined as custom properties on an array, you may
 * `Object.keys(theme.breakpoints)` to retrieve both regular numeric indices
 * and custom breakpoints as string.
 *
 * This function returns true given a custom array property.
 */

var isCustomBreakpoint = maybeBreakpoint => Number.isNaN(Number(maybeBreakpoint));
//# sourceMappingURL=responsive.js.map

/***/ }),

/***/ 70639:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(67294));

var _sideEffect = _interopRequireDefault(__webpack_require__(94766));

var _ampContext = __webpack_require__(96046);

var _headManagerContext = __webpack_require__(80699);

var _amp = __webpack_require__(43237);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function defaultHead(inAmpMode = false) {
  const head = [/*#__PURE__*/_react.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react.default.Fragment) {
    return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let isUnique = true;
    let hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      const key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = _react.default.Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;

    if ( true && !props.inAmpMode) {
      if (c.type === 'link' && c.props['href'] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
      ['https://fonts.googleapis.com/css', 'https://use.typekit.net/'].some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined; // Add this attribute to make it easy to identify optimized tags

        newProps['data-optimized-fonts'] = true;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      }
    }

    return /*#__PURE__*/_react.default.cloneElement(c, {
      key
    });
  });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */


function Head({
  children
}) {
  const ampState = (0, _react).useContext(_ampContext.AmpStateContext);
  const headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react.default.createElement(_sideEffect.default, {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp).isInAmpMode(ampState)
  }, children);
}

var _default = Head;
exports.default = _default;

/***/ }),

/***/ 9008:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(70639)


/***/ })

};
;