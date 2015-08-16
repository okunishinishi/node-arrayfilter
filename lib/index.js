/**
 * Array filtering utility.
 * @module arrayfilter
 */

"use strict";

module.exports = {
    get emptyReject() { return require('./empty_reject'); },
    get patternAccept() { return require('./pattern_accept'); },
    get patternReject() { return require('./pattern_reject'); }
};