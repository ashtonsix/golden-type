'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('./constants');

var _defaultConfig = require('./defaultConfig');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _prelude = require('./prelude');

exports['default'] = function () {
  var baseFontSize = arguments[0] === undefined ? _constants.BASE_FONT_SIZE : arguments[0];
  var baseContentWidth = arguments[1] === undefined ? _constants.BASE_CONTENT_WIDTH : arguments[1];
  var fontConfig = arguments[2] === undefined ? _defaultConfig2['default'] : arguments[2];
  return function (Component) {
    return _react2['default'].createClass({
      childContextTypes: {
        goldenType: _react.PropTypes.shape({
          baseFontSize: _react.PropTypes.number,
          baseContentWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
          fontConfig: _react.PropTypes.object }) },

      getChildContext: function getChildContext() {
        return { goldenType: {
            baseFontSize: baseFontSize, baseContentWidth: baseContentWidth,
            fontConfig: (0, _prelude.merge)(_defaultConfig2['default'], fontConfig) } };
      },

      render: function render() {
        return _react2['default'].createElement(Component, this.props);
      } });
  };
};

module.exports = exports['default'];