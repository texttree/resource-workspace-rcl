"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Workspace;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactGridLayout = require("react-grid-layout");

var _Card = _interopRequireDefault(require("../Card"));

var _styled = require("./styled");

require("react-grid-layout/css/styles.css");

require("react-resizable/css/styles.css");

require("../../style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-nested-ternary */
var ResponsiveGridLayout = (0, _reactGridLayout.WidthProvider)(_reactGridLayout.Responsive);
var TOTAL_WIDTH_UNITS = 12;
var columns = {
  lg: TOTAL_WIDTH_UNITS,
  md: TOTAL_WIDTH_UNITS,
  sm: TOTAL_WIDTH_UNITS,
  xs: TOTAL_WIDTH_UNITS,
  xxs: TOTAL_WIDTH_UNITS
};
var breakpoints = {
  lg: 1200,
  md: 996,
  sm: 768,
  xs: 480,
  xxs: 0
};

function getWidth(row, value) {
  return value / row.reduce(function (curr, next) {
    return curr + next;
  }, 0) * TOTAL_WIDTH_UNITS;
}

function generateLayouts(layoutWidths, layoutHeights) {
  var layouts = [];
  layoutWidths.forEach(function (row, ridx) {
    row.forEach(function (cellUnit, cidx) {
      var previousColumns = row.filter(function (_, _index) {
        return _index < cidx;
      });
      var x = previousColumns.reduce(function (curr, next) {
        return getWidth(row, next) + curr;
      }, 0);
      layouts.push({
        i: String(layouts.length + 1),
        x: x,
        y: ridx * (TOTAL_WIDTH_UNITS / layoutWidths.length),
        w: getWidth(row, cellUnit),
        h: Array.isArray(layoutHeights[ridx]) && !isNaN(layoutHeights[ridx][cidx]) ? layoutHeights[ridx][cidx] : Array.isArray(layoutHeights[ridx]) && !isNaN(layoutHeights[ridx][0]) ? layoutHeights[ridx][0] : !isNaN(layoutHeights[ridx]) ? layoutHeights[ridx] : !isNaN(layoutHeights[0]) ? layoutHeights[0] : !isNaN(layoutHeights) ? layoutHeights : 1
      });
    });
  });
  return {
    lg: layouts
  };
}

function Workspace(_ref) {
  var layoutWidths = _ref.layoutWidths,
      _ref$layoutHeight = _ref.layoutHeight,
      layoutHeight = _ref$layoutHeight === void 0 ? 1 : _ref$layoutHeight,
      _children = _ref.children,
      style = _ref.style,
      dragHandleClassName = _ref.dragHandleClassName,
      layoutHeights = _ref.layoutHeights;
  var layouts = generateLayouts(layoutWidths, layoutHeights || [layoutHeight]);
  var children = (0, _react.useMemo)(function () {
    return _children.map(function (childComponent, index) {
      return /*#__PURE__*/_react.default.createElement(_Card.default, {
        key: index + 1
      }, childComponent);
    });
  }, [_children]);
  console.log('layouts', layouts);
  return /*#__PURE__*/_react.default.createElement(_styled.Container, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(ResponsiveGridLayout, {
    draggableHandle: dragHandleClassName,
    margin: [15, 15],
    layouts: layouts,
    breakpoints: breakpoints,
    cols: columns
  }, children));
}

Workspace.propTypes = {
  breakpoints: _propTypes.default.object,
  columns: _propTypes.default.object
};