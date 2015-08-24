/**
 * Test case for typeAccept.
 * Runs with nodeunit.
 */

var typeAccept = require('../lib/type_accept.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Type accept'] = function (test) {
    var filter = typeAccept('string');
    test.ok(!filter(function () {
    }));
    test.ok(!filter(123));
    test.ok(!filter({}));
    test.ok(filter('__foo'));
    test.throws(function () {
        [1, {}, function () {
        }].filter(typeAccept);
    });
    test.done();
};

