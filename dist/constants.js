"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GOLDEN_RATIO = (Math.pow(5, 0.5) + 1) / 2;

exports.GOLDEN_RATIO = GOLDEN_RATIO;
var BASE_FONT_SIZE = 16;
exports.BASE_FONT_SIZE = BASE_FONT_SIZE;
var BASE_CONTENT_WIDTH = 850;

exports.BASE_CONTENT_WIDTH = BASE_CONTENT_WIDTH;
var neutralVariations = function neutralVariations(opacity) {
  return "rgba(0,0,0," + opacity + ")";
};

var NEUTRAL_LIGHTER = neutralVariations(0.07);
exports.NEUTRAL_LIGHTER = NEUTRAL_LIGHTER;
var NEUTRAL_LIGHT = neutralVariations(0.17);
exports.NEUTRAL_LIGHT = NEUTRAL_LIGHT;
var NEUTRAL = neutralVariations(0.54);
exports.NEUTRAL = NEUTRAL;
var NEUTRAL_DARK = neutralVariations(0.87);

exports.NEUTRAL_DARK = NEUTRAL_DARK;
var inverseVariations = function inverseVariations(opacity) {
  return "rgba(255,255,255," + opacity + ")";
};

var INVERSE_LIGHT = inverseVariations(1);
exports.INVERSE_LIGHT = INVERSE_LIGHT;
var INVERSE = inverseVariations(0.7);
exports.INVERSE = INVERSE;
var INVERSE_DARK = inverseVariations(0.4);
exports.INVERSE_DARK = INVERSE_DARK;