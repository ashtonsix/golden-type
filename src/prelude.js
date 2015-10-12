import deepExtend from 'deep-extend';

export const zip = (keys, values) => {
  const result = {};
  for (let i = 0, l = keys.length; i < l; i++) result[keys[i]] = values[i];
  return result;
};

export const values = object => {
  const result = [];
  for (let key in object) { //eslint-disable-line
    if (object.hasOwnProperty(key)) result.push(object[key]);
  }

  return result;
};

export const mapKeys = (object, func, filter = () => true) => {
  const result = {};
  for (let key in object) { //eslint-disable-line
    if (object.hasOwnProperty(key)) {
      const newValue = func(key, object[key]);
      if (filter(newValue)) result[key] = newValue;
    }
  }

  return result;
};

export function merge() {
  const args = Array.prototype.slice.call(arguments);
  return args.reduce((pv, v) => deepExtend(pv, v), {});
}

export const throttle = (func, wait) => {
  let context; let args; let result;
  let timeout = null;
  let previous = 0;
  const later = () => {
    previous = Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  return () => {
    const now = Date.now();
    const remaining = wait - (now - previous);
    args = arguments;
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
