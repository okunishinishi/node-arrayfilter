/**
 * Test case for patternAccept.
 * Runs with nodeunit.
 */

var patternAccept = require('../lib/pattern_accept.js');

exports['Pattern accept'] = function(test){
    var filter = patternAccept(/^__/);
    test.ok(!filter('foo'));
    test.ok(filter('__foo'));
    test.throws(function () {
        [1, 2, 3].filter(patternAccept);
    });
    test.done();
};

