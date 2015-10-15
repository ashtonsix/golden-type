'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prelude = require('./prelude');

var _helpers = require('./helpers');

exports['default'] = function (fontClass) {
  return _react2['default'].createClass({
    propTypes: { style: _react.PropTypes.object },

    contextTypes: {
      goldenType: _react.PropTypes.shape({
        baseFontSize: _react.PropTypes.number,
        baseContentWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
        fontConfig: _react.PropTypes.object }) },

    getInitialState: function getInitialState() {
      return { baseContentWidth: this.getBaseContentWidth() };
    },
    getBaseContentWidth: function getBaseContentWidth() {
      var baseContentWidth = this.context.goldenType.baseContentWidth;

      return typeof baseContentWidth === 'function' ? baseContentWidth(window.innerWidth) : baseContentWidth;
    },

    updateDimensions: function updateDimensions() {
      this.setState({ baseContentWidth: this.getBaseContentWidth() });
    },
    componentWillMount: function componentWillMount() {
      this.updateDimensionsThrottled = (0, _prelude.throttle)(this.updateDimensions, 500);
    },
    componentDidMount: function componentDidMount() {
      window.addEventListener('resize', this.updateDimensionsThrottled);
    },
    componentWillUnmount: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensionsThrottled);
    },

    render: function render() {
      var baseContentWidth = this.state.baseContentWidth;
      var _context$goldenType = this.context.goldenType;
      var baseFontSize = _context$goldenType.baseFontSize;
      var fontConfig = _context$goldenType.fontConfig;

      var config = _prelude.merge.apply(undefined, [fontConfig[fontClass]].concat(_toConsumableArray((0, _prelude.values)((0, _prelude.mapKeys)(this.props, function (f) {
        return (fontConfig[fontClass].flags || {})[f];
      }, function (f) {
        return f;
      })))));
      var fontSize = (0, _helpers.goldenScale)(baseFontSize, config.fontScale);
      var style = (0, _prelude.merge)((0, _prelude.mapKeys)({
        fontSize: fontSize,
        lineHeight: Math.round((0, _helpers.lineHeight)(fontSize, baseContentWidth)) + 'px',
        marginBottom: (0, _helpers.goldenScale)((0, _helpers.lineHeight)(baseFontSize, baseContentWidth), config.marginScale) }, function (k, v) {
        return typeof v === 'number' ? Math.round(v) : v;
      }), config.style, this.props.style);

      return _react2['default'].createElement(config.tag, _extends({}, this.props, { style: style }));
    } });
};

module.exports = exports['default'];