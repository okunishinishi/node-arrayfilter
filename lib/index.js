/**
 * Node.js module for array filtering functions.
 * @module arrayfilter
 */

"use strict";

module.exports = {
    get emptyReject() { return require('./empty_reject'); },
    get patternReject() { return require('./pattern_reject'); }
};