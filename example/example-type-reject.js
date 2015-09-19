var arrayfilter = require('arrayfilter');

// Define a filter function.
var rejectString = arrayfilter.typeReject('object');

// Execute filtering.
var values = ['foo', {}, {}].filter(rejectString);
console.log(values); // -> ['foo']
