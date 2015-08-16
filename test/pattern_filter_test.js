/**
 * Test case for patternAccept
 * Runs with nodeunit
 */

"use strict";

var patternAccept = require('../lib/pattern_accept.js');

exports['Sort string.'] = function (test) {
    var filter = patternAccept(/^__/);
    test.ok(!filter('foo'));
    test.ok(filter('__foo'));
    test.throws(function () {
        [1, 2, 3].filter(patternAccept);
    });
    test.done();
};