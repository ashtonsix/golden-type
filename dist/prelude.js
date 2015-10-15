'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _arguments = arguments;
exports.merge = merge;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepExtend = require('deep-extend');

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var values = function values(object) {
  var result = [];
  for (var key in object) {
    //eslint-disable-line
    if (object.hasOwnProperty(key)) result.push(object[key]);
  }

  return result;
};

exports.values = values;
var mapKeys = function mapKeys(object, func) {
  var filter = arguments[2] === undefined ? function () {
    return true;
  } : arguments[2];

  var result = {};
  for (var key in object) {
    //eslint-disable-line
    if (object.hasOwnProperty(key)) {
      var newValue = func(key, object[key]);
      if (filter(newValue)) result[key] = newValue;
    }
  }

  return result;
};

exports.mapKeys = mapKeys;

function merge() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (pv, v) {
    return (0, _deepExtend2['default'])(pv, v);
  }, {});
}

var throttle = function throttle(func, wait) {
  var context = undefined;var args = undefined;var result = undefined;
  var timeout = null;
  var previous = 0;
  var later = function later() {
    previous = Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  return function () {
    var now = Date.now();
    var remaining = wait - (now - previous);
    args = _arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
};
exports.throttle = throttle;