'use strict';

var expect = require('chai').expect;
var moment = require('moment');
var timekeeper = require('./index');

describe('Unit', function () {

  describe('#now', function () {
    it('should get current date', function () {
      var now = timekeeper.now();
      expect(now).to.exist();
      expect(now).to.be.an.instanceof(Date);
    });
  });

  describe('#overwriteDate', function () {
    var date = new Date(2014, 11, 10);

    it('should get the overwrite date', function () {
      timekeeper.overwriteDate(date);

      var now = timekeeper.now();
      expect(now).to.equal(date);
    });

    it('should not get the overwrite date after calling reset()', function () {
      timekeeper.reset();

      var now = timekeeper.now();
      expect(now).not.to.equal(date);
    });
  });


  describe('#configure with moment library', function () {
    it('should get current date time as a moment object', function () {
      timekeeper.configure({
        factory: function () {
          return moment();
        }
      });

      var now = timekeeper.now();
      expect(now).to.exist();
      expect(now.toDate).to.exist();
    });
  });
});
