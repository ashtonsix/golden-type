'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _helpers = require('./helpers');

var _prelude = require('./prelude');

var _constants = require('./constants');

var baseStyle = {
  tag: 'p',
  fontScale: 0,
  marginScale: 0,
  style: {
    display: 'block',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    color: _constants.NEUTRAL_DARK,
    marginTop: 0 },
  flags: {
    noMargin: { style: { marginBottom: 0 } },
    inverseColor: { style: { color: _constants.INVERSE_LIGHT } },
    inline: { style: { display: 'inline' } },
    inlineBlock: { style: { display: 'inline-block' } } } };

exports.baseStyle = baseStyle;
var headerStyle = {
  style: {
    fontFamily: '"Roboto", sans-serif' } };

exports.headerStyle = headerStyle;
exports['default'] = {
  Title: (0, _prelude.merge)(baseStyle, headerStyle, {
    tag: 'h1',
    fontScale: 1.5 }),
  Heading: (0, _prelude.merge)(baseStyle, headerStyle, {
    tag: 'h2',
    fontScale: 1 }),
  SubHeading: (0, _prelude.merge)(baseStyle, headerStyle, {
    tag: 'h3',
    fontScale: 0.5 }),
  Body: (0, _prelude.merge)(baseStyle, {
    tag: 'p' }),
  Small: (0, _prelude.merge)(baseStyle, {
    tag: 'small',
    fontScale: -0.5,
    marginScale: -0.5,
    style: { color: _constants.NEUTRAL },
    flags: {
      inverseColor: { color: _constants.INVERSE } } }),
  Strong: (0, _prelude.merge)(baseStyle, {
    tag: 'strong',
    fontScale: -(1 / 3),
    marginScale: -0.5,
    style: { fontWeight: 700 },
    flags: {
      uppercase: { fontScale: -0.5, style: { textTransform: 'uppercase' } } } }),
  Code: (0, _prelude.merge)(baseStyle, {
    tag: 'pre',
    fontScale: -0.5,
    style: {
      lineHeight: _constants.BASE_FONT_SIZE + 'px',
      fontFamily: '"Inconsolata", monospace',
      padding: (0, _helpers.goldenScale)(_constants.BASE_FONT_SIZE, -1),
      backgroundColor: _constants.NEUTRAL_LIGHTER },
    flags: {
      inverseColor: { color: _constants.INVERSE_LIGHT, backgroundColor: _constants.INVERSE_DARK },
      inline: {
        tag: 'code',
        style: { padding: _constants.BASE_FONT_SIZE - (0, _helpers.goldenScale)(_constants.BASE_FONT_SIZE, -0.5) } } } }) };