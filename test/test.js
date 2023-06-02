'use strict';

var expect = require('chai').expect;
var moment = require('moment');
var datetimeFactory = require('../index');

describe('Unit', function () {

    describe('#now', function () {
        it('should get current date', function () {
            var now = datetimeFactory.now();
            expect(now).to.exist();
            expect(now).to.be.an.instanceof(Date);
        });
    });

    describe('#overwriteDate', function () {
        var date = new Date(2014, 11, 10);

        it('should get the overwrite date', function () {
            datetimeFactory.overwriteDate(date);

            var now = datetimeFactory.now();
            expect(now.toISOString()).to.equal(date.toISOString());
            console.log(now);
        });

        it('should not get the overwrite date after calling reset()', function () {
            datetimeFactory.reset();

            var now = datetimeFactory.now();
            expect(now).not.to.equal(date);
        });
    });


    describe('#configure with moment library', function () {
        it('should get current date time as a moment object', function () {
            datetimeFactory.configure({
                factory: function () {
                    return moment();
                }
            });

            var now = datetimeFactory.now();
            expect(now).to.exist();
            expect(now.toDate).to.exist();
        });

        it('should get the overwrite date', function () {
            var momentTest = moment('2020-02-03');
            datetimeFactory.overwriteDate(momentTest);

            var now = datetimeFactory.now();
            expect(now.toISOString()).to.equal(momentTest.toISOString());
            console.log(now);
        });
    });
});
