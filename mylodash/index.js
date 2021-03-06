"use strict";

//index.js
function once(func) {
  var firstResult = void 0,
      a = false;
  return function () {
    if (a) {
      return firstResult;
    } else {
      a = true;
      firstResult = func();
      return firstResult;
    }
  };
}

function memoize(func1, func2) {
  var cache = {};

  return function (input) {
    var key = func2 === undefined ? input : func2(input);
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }
    var output = func1(input);
    cache[key] = output;
    return output;
  };
}

function bind(fn, context) {
  var partial = Array.prototype.slice.call(arguments, 2);
  return function () {
    var args = partial.concat(Array.prototype.slice.call(arguments));
    return fn.apply(context, args);
  };
}

var _ = {
  once: once,
  memoize: memoize,
  bind: bind
};

module.exports = _;

