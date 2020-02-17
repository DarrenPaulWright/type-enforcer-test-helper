import difference from '../utility/difference.js';
import {
	coerceArrayTrue,
	coerceFloatTrue,
	coerceInfinity,
	coerceIntegerTrue,
	coerceNumberFalse,
	coerceObjectTrue
} from './coercible.js';
import TestClass from './TestClass.js';
import {
	testValues,
	validArrays,
	validBooleans,
	validDates,
	validFloats,
	validFunctions,
	validInfinities,
	validInstances,
	validIntegers,
	validMaps,
	validObjects,
	validPromises,
	validRegExps,
	validSets,
	validStrings,
	validSymbols,
	validWeakMaps,
	validWeakSets
} from './testValues.js';

/**
 * An array of all the test type objects (arrayData, booleanData, etc.)
 *
 * @constant {Array} testTypes
 */

/**
 * A data set for testing Arrays
 *
 * @constant {Object} arrayData
 * @property {Function} value - Array constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validArrays](testValues.md#validArrays)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validArrays
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const arrayData = {
	value: Array,
	name: 'array',
	true: validArrays,
	false: difference(testValues, validArrays),
	coerceTrue: coerceArrayTrue,
	coerceFalse: difference(testValues, validArrays)
};

/**
 * A data set for testing Booleans
 *
 * @constant {Object} booleanData
 * @property {Function} value - Boolean constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validBooleans](testValues.md#validBooleans)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validBooleans
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const booleanData = {
	value: Boolean,
	name: 'boolean',
	true: validBooleans,
	false: difference(testValues, validBooleans),
	coerceTrue: difference(testValues, validBooleans),
	coerceFalse: []
};

/**
 * A data set for testing Dates
 *
 * @constant {Object} dateData
 * @property {Function} value - Date constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validDates](testValues.md#validDates)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validDates
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const dateData = {
	value: Date,
	name: 'date',
	true: validDates,
	false: difference(testValues, validDates),
	coerceTrue: ['10/12/1980', 'January 8, 2014'],
	coerceFalse: difference(testValues, validDates, validArrays, validFloats, validIntegers, validRegExps)
};

/**
 * A data set for testing Functions
 *
 * @constant {Object} functionData
 * @property {Function} value - Function constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validFunctions](testValues.md#validFunctions)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validFunctions
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const functionData = {
	value: Function,
	name: 'function',
	true: validFunctions,
	false: difference(testValues, validFunctions),
	coerceTrue: [],
	coerceFalse: difference(testValues, validFunctions)
};

/**
 * A data set for testing instanceOf
 *
 * @constant {Object} instanceData
 * @property {Function} value - [TestClass](TestClass.md)
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validInstances](testValues.md#validInstances)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validInstances
 * @property {Array} coerceTrue - Included for consistency
 * @property {Array} coerceFalse - Included for consistency
 */
export const instanceData = {
	value: TestClass,
	name: 'instanceOf',
	true: validInstances,
	false: difference(testValues, validInstances),
	coerceTrue: [],
	coerceFalse: []
};

/**
 * A data set for testing integers
 *
 * @constant {Object} integerData
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} skip - The "name" property of other test objects that will produce false negatives if tested against this objects data
 * @property {Array} true - [validIntegers](testValues.md#validIntegers)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validIntegers and validInfinities
 * @property {Array} coerceTrue - Values that can be coerced to this type.
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const integerData = {
	name: 'integer',
	skip: ['number', 'float'],
	true: validIntegers,
	false: difference(testValues, validIntegers, validInfinities),
	coerceTrue: coerceIntegerTrue,
	coerceFalse: coerceNumberFalse.concat(coerceFloatTrue, coerceInfinity)
};

/**
 * A data set for testing JSON
 *
 * @constant {Object} jsonData
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - Values that don't throw when passed through JSON.parse()
 * @property {Array} false - Values that DO throw when passed through JSON.parse()
 * @property {Array} coerceTrue - Included for consistency
 * @property {Array} coerceFalse - Included for consistency
 */
export const jsonData = {
	name: 'json',
	true: coerceObjectTrue.concat(coerceArrayTrue, JSON.stringify(testValues)),
	false: ['json'].concat(validDates, validFunctions, validObjects, validRegExps),
	coerceTrue: [],
	coerceFalse: []
};

/**
 * A data set for testing integers
 *
 * @constant {Object} floatData
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} skip - The "name" property of other test objects that will produce false negatives if tested against this objects data
 * @property {Array} true - [validFloats](testValues.md#validFloats)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validFloats
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const floatData = {
	name: 'float',
	skip: ['number', 'integer'],
	true: validFloats,
	false: difference(testValues, validFloats, validIntegers, validInfinities),
	coerceTrue: coerceIntegerTrue.concat(coerceFloatTrue),
	coerceFalse: coerceNumberFalse.concat(coerceInfinity)
};

/**
 * A data set for testing numbers
 *
 * @constant {Object} numberData
 * @property {Function} value - Number constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} skip - The "name" property of other test objects that will produce false negatives if tested against this objects data
 * @property {Array} true - [validFloats](testValues.md#validFloats)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validFloats
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const numberData = {
	value: Number,
	name: 'number',
	skip: ['integer', 'float'],
	true: validFloats.concat(validIntegers, validInfinities),
	false: difference(testValues, validFloats, validIntegers, validInfinities, [NaN]),
	coerceTrue: coerceIntegerTrue.concat(coerceInfinity),
	coerceFalse: coerceNumberFalse
};

/**
 * A data set for testing Maps
 *
 * @constant {Object} mapData
 * @property {Function} value - Map constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validMaps](testValues.md#validMaps)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validMaps
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const mapData = {
	value: Map,
	name: 'map',
	true: validMaps,
	false: difference(testValues, validMaps),
	coerceTrue: coerceObjectTrue.concat(validObjects, [[[TestClass, 2],
		[TestClass, 'test']], '[["test 1", 2], ["test 2", "test"]]']),
	coerceFalse: difference(testValues, validMaps, validObjects, validArrays).concat(['test'])
};

/**
 * A data set for testing plain Objects
 *
 * @constant {Object} objectData
 * @property {Function} value - Object constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validObjects](testValues.md#validObjects)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validObjects
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const objectData = {
	value: Object,
	name: 'object',
	true: validObjects,
	false: [null, undefined, true, false],
	coerceTrue: coerceObjectTrue,
	coerceFalse: validStrings
};

/**
 * A data set for testing Promises
 *
 * @constant {Object} promiseData
 * @property {Function} value - Promise constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validPromises](testValues.md#validPromises)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validPromises
 * @property {Array} coerceTrue - [validFunctions](testValues.md#validFunctions)
 * @property {Array} coerceFalse - [testValues](testValues.md#testValues) minus validPromises and validFunctions
 */
export const promiseData = {
	value: Promise,
	name: 'promise',
	true: validPromises,
	false: difference(testValues, validPromises),
	coerceTrue: validFunctions,
	coerceFalse: difference(testValues, validFunctions, validPromises)
};

/**
 * A data set for testing RegExps
 *
 * @constant {Object} regExpData
 * @property {Function} value - RegExp constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validRegExps](testValues.md#validRegExps)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validRegExps
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const regExpData = {
	value: RegExp,
	name: 'regExp',
	true: validRegExps,
	false: difference(testValues, validRegExps),
	coerceTrue: ['test', '/[a-z]+/', '/[a-z]+/gi'],
	coerceFalse: difference(testValues, validStrings, validRegExps)
};

/**
 * A data set for testing Sets
 *
 * @constant {Object} setData
 * @property {Function} value - Set constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validSets](testValues.md#validSets)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validSets
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const setData = {
	value: Set,
	name: 'set',
	true: validSets,
	false: difference(testValues, validSets),
	coerceTrue: validArrays.concat(['[]', '[1, 2]']),
	coerceFalse: difference(testValues, validSets, validArrays)
};

/**
 * A data set for testing Strings
 *
 * @constant {Object} stringData
 * @property {Function} value - String constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validStrings](testValues.md#validStrings)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validStrings
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const stringData = {
	value: String,
	name: 'string',
	true: validStrings,
	false: difference(testValues, validStrings),
	coerceTrue: difference(testValues, validStrings, [null, undefined]),
	coerceFalse: [null, undefined]
};

/**
 * A data set for testing Symbols
 *
 * @constant {Object} symbolData
 * @property {Function} value - Symbol constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validSymbols](testValues.md#validSymbols)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validSymbols
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const symbolData = {
	value: Symbol,
	name: 'symbol',
	true: validSymbols,
	false: difference(testValues, validSymbols),
	coerceTrue: stringData.coerceTrue,
	coerceFalse: stringData.coerceFalse
};

/**
 * A data set for testing WeakMaps
 *
 * @constant {Object} weakMapData
 * @property {Function} value - WeakMap constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validWeakMaps](testValues.md#validWeakMaps)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validWeakMaps
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const weakMapData = {
	value: WeakMap,
	name: 'weakMap',
	true: validWeakMaps,
	false: difference(testValues, validWeakMaps),
	coerceTrue: [[[TestClass, 2], [TestClass, 'test']]],
	coerceFalse: difference(testValues, validWeakMaps, validArrays).concat(['test'])
};

/**
 * A data set for testing WeakSets
 *
 * @constant {Object} weakSetData
 * @property {Function} value - WeakSet constructor
 * @property {String} name - The name used in type-enforcer namespaces for this type
 * @property {Array} true - [validWeakSets](testValues.md#validWeakSets)
 * @property {Array} false - [testValues](testValues.md#testValues) minus validWeakSets
 * @property {Array} coerceTrue - Values that can be coerced to this type
 * @property {Array} coerceFalse - Values that cannot be coerced to this type
 */
export const weakSetData = {
	value: WeakSet,
	name: 'weakSet',
	true: validWeakSets,
	false: difference(testValues, validWeakSets),
	coerceTrue: [validInstances],
	coerceFalse: difference(testValues, validWeakSets, validArrays)
};

export const testTypes = [
	arrayData,
	booleanData,
	dateData,
	functionData,
	instanceData,
	integerData,
	floatData,
	numberData,
	mapData,
	objectData,
	promiseData,
	regExpData,
	setData,
	stringData,
	symbolData,
	weakMapData,
	weakSetData
];
