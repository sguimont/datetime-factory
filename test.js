var expect = require('chai').expect;
var timekeeper = require('./index');

describe('#now', function () {
  it('should get current date', function () {
    timekeeper.now();
  });
});
