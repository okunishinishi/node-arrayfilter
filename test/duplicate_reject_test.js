/**
 * Test case for duplicateReject.
 * Runs with nodeunit.
 */

var duplicateReject = require('../lib/duplicate_reject.js');

exports['Duplicate reject'] = function (test) {
    var filter = duplicateReject();
    test.deepEqual([1, 2, 1].filter(filter), [1, 2]);
    test.done();
};

