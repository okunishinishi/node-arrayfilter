var arrayfilter = require('arrayfilter');

// Define a filter function.
var acceptFo = arrayfilter.patternAccept(/^fo/);

// Execute filtering.
var values = ['foo', 'bar', 'baz'].filter(acceptFo);
console.log(values); // -> ['foo']
