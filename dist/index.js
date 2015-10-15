'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = require('./goldenDecorator');
var createFontClass = require('./createFontClass');

exports.createFontClass = createFontClass;
var Title = createFontClass('Title');
exports.Title = Title;
var Heading = createFontClass('Heading');
exports.Heading = Heading;
var SubHeading = createFontClass('SubHeading');
exports.SubHeading = SubHeading;
var Body = createFontClass('Body');
exports.Body = Body;
var Small = createFontClass('Small');
exports.Small = Small;
var Strong = createFontClass('Strong');
exports.Strong = Strong;
var Code = createFontClass('Code');
exports.Code = Code;