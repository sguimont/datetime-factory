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
