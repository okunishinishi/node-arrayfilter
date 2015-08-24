var arrayfilter = require('arrayfilter');

// Define a filter function.
var acceptString = arrayfilter.typeAccept('string');

// Execute filtering.
var values = ['foo', {}, 123].filter(acceptString);
console.log(values); // -> ['foo']
