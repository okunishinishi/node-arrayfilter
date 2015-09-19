arrayfilter
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-arrayfilter
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-arrayfilter
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-arrayfilter.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-arrayfilter/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-arrayfilter
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-arrayfilter.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-arrayfilter.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-arrayfilter
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-arrayfilter.svg
[bd_npm_url]: http://www.npmjs.org/package/arrayfilter
[bd_npm_shield_url]: http://img.shields.io/npm/v/arrayfilter.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/arrayfilter.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Array filtering utility.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install arrayfilter --save
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
-------

+ [Accepting By Type](#accepting-by-type)
+ [Accepting By Pattern](#accepting-by-pattern)
+ [Rejecting Empty Entries](#rejecting-empty-entries)
+ [Rejecting Duplicated Entries](#rejecting-duplicated-entries)
+ [Rejecting By Pattern](#rejecting-by-pattern)
+ [Rejecting By Type](#rejecting-by-type)

### Accepting By Type

`arrayfilter.typeAccept(type)` create a function which accepts entries by type matching.

```Javascript
var arrayfilter = require('arrayfilter');

// Define a filter function.
var acceptString = arrayfilter.typeAccept('string');

// Execute filtering.
var values = ['foo', {}, 123].filter(acceptString);
console.log(values); // -> ['foo']

```

### Accepting By Pattern

`arrayfilter.patternAccept(pattern)` create a function which accepts entries by regex (or string) matching.

```Javascript
var arrayfilter = require('arrayfilter');

// Define a filter function.
var acceptFo = arrayfilter.patternAccept(/^fo/);

// Execute filtering.
var values = ['foo', 'bar', 'baz'].filter(acceptFo);
console.log(values); // -> ['foo']

```


### Rejecting Empty Entries

`arrayfilter.emptyReject()` create a function which rejects empty with rejects null, undefined and empty string.

```Javascript
var arrayfilter = require('arrayfilter');

// Define a filter function.
var rejectEmpty = arrayfilter.emptyReject();

// Execute filtering.
var values = ['foo', '', null, 'bar', undefined].filter(rejectEmpty);
console.log(values); // -> ['foo', 'bar']

```

### Rejecting Duplicated Entries

`arrayfilter.duplicateReject()` create a function which rejects empty with rejects null, undefined and empty string.

```Javascript
var arrayfilter = require('arrayfilter');

// Define a filter function.
var duplicateReject = arrayfilter.duplicateReject();

// Execute filtering.
var values = ['foo', 'bar', 'foo'].filter(duplicateReject);
console.log(values); // -> ['foo', 'bar']

```

### Rejecting By Pattern

`arrayfilter.patternReject(pattern)` create a function which rejects entries by regex (or string) matching.

```Javascript
var arrayfilter = require('arrayfilter');

// Define a filter function.
var rejectFo = arrayfilter.patternReject(/^fo/);

// Execute filtering.
var values = ['foo', 'bar', 'baz'].filter(rejectFo);
console.log(values); // -> ['bar', 'baz']

```

### Rejecting By Type

`arrayfilter.typeReject(type)` create a function which rejects entries by type matching.

```Javascript
var arrayfilter = require('arrayfilter');

// Define a filter function.
var rejectString = arrayfilter.typeReject('object');

// Execute filtering.
var values = ['foo', {}, {}].filter(rejectString);
console.log(values); // -> ['foo']

```





<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-arrayfilter/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [arrayreduce](https://github.com/okunishinishi/node-arrayreduce)
+ [arraysort](https://github.com/okunishinishi/node-arraysort)

<!-- Links End -->
