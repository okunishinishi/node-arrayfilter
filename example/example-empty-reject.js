var arrayfilter = require('arrayfilter');

// Define a filter function.
var rejectEmpty = arrayfilter.emptyReject();

// Execute filtering.
var values = ['foo', '', null, 'bar', undefined].filter(rejectEmpty);
console.log(values); // -> ['foo', 'bar']
