var arrayfilter = require('arrayfilter');

// Define a filter function.
var duplicateReject = arrayfilter.duplicateReject();

// Execute filtering.
var values = ['foo', 'bar', 'foo'].filter(duplicateReject);
console.log(values); // -> ['foo', 'bar']
