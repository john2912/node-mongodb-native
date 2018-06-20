'use strict';

const deprecate = require('../lib/utils.js').deprecate;

const testDeprecationFlags = deprecate(
  options => {
    if (options) options = null;
  },
  'testDeprecationFlags',
  {
    deprecatedParams: new Set(['maxScan', 'snapshot', 'fields']),
    optionsIndex: 0
  }
);

testDeprecationFlags({ maxScan: 0 });

// for tests that throw error on calling deprecated fn - this should never happen; stdout should be empty
if (process.argv[2]) {
  console.log(process.argv[2]);
}

process.nextTick(() => process.exit());