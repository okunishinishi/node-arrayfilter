var arrayfilter = require('arrayfilter');

//Define a filter function.
var rejectFo = arrayfilter.patternReject(/^fo/);

//Execute filtering.
var values = ['foo', 'bar', 'baz'].filter(rejectFo);
console.log(values); // -> ['bar', 'baz']
