(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.datetimeFactory = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = require('./lib/datetime-factory');

},{"./lib/datetime-factory":2}],2:[function(require,module,exports){
'use strict';

var overrideDate = null;

var options = {
  factory: function () {
    return new Date();
  }
};

/**
 * Configures.

 * @param {Object} newOptions
 * @param {Function} [newOptions.factory=new Date()] A function that creates a date time
 */
module.exports.configure = function (newOptions) {
  if (newOptions.factory) {
    if (typeof newOptions.factory !== 'function') {
      throw new Error('Must provide a Function for the factory');
    }
    options.factory = newOptions.factory;
  }
};

/**
 * Gets the current date time.
 *
 *  @returns {*} The current date time from the option.factory Function.
 */
module.exports.now = function () {
  if(overrideDate) {
    return overrideDate();
  }
  return options.factory();
};

/**
 * Overrides the current date time.
 *
 * @param date The date to use when asking the current date time.
 */
module.exports.overwriteDate = function (date) {
  overrideDate = function overrideDate() { return Object.assign({}, date) };
};

/**
 * Resets.  Puts back the default date time factory.
 */
module.exports.reset = function () {
  overrideDate = null;
};

},{}]},{},[1])(1)
});
