/**
 * @name About
 * @private
 * @summary
 *
 * This library consists of two things. First is a data set of variations of different data type instances and values, along with coercible values, many of which were hand picked from the [big-list-of-naughty-strings](https://github.com/minimaxir/big-list-of-naughty-strings). Second is a handful of functions to help in testing type-enforcer and type-enforcer addons.
 */

export * from './src/data/testValues.js';
export { default as TestClass } from './src/data/TestClass.js';
export * from './src/data/testData.js';

export { default as multiTest } from './src/multiTest';

export { default as testCheck } from './src/testCheck';
export { default as testEnforce } from './src/testEnforce';
export { default as testMethod } from './src/testMethod';
