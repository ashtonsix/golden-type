'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _constants = require('./constants');

var goldenScale = function goldenScale(fontSize, scalar) {
  return fontSize * Math.pow(_constants.GOLDEN_RATIO, scalar);
};

exports.goldenScale = goldenScale;
var lineHeight = function lineHeight(fontSize, lineWidth) {
  return fontSize * (_constants.GOLDEN_RATIO - 1 / (2 * _constants.GOLDEN_RATIO) * (1 - lineWidth / Math.pow(fontSize * _constants.GOLDEN_RATIO, 2)));
};
exports.lineHeight = lineHeight;