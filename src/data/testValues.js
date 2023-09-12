import TestClass from './TestClass.js';

/**
 * A concatenated array of all the "valid" arrays.
 *
 * @constant {Array} testValues
 */

/**
 * Arrays instantiated in different ways or with different values.
 *
 * @constant {Array} validArrays
 */
const arrayReference = Array(3);
export const validArrays = [
	[1],
	[2],
	[],
	new Array(),
	new Array(12),
	Array(),
	arrayReference
];

/**
 * Booleans instantiated in different ways or with different values.
 *
 * @constant {Array} validBooleans
 */
const booleanReference = Boolean();
export const validBooleans = [
	true,
	false,
	new Boolean(true), // eslint-disable-line no-new-wrappers
	Boolean(1),
	booleanReference
];

/**
 * Dates instantiated in different ways or with different values.
 *
 * @constant {Array} validDates
 */
const dateReference = new Date();
export const validDates = [
	dateReference,
	new Date('01/15/2010')
];

/**
 * Functions instantiated in different ways.
 *
 * @constant {Array} validFunctions
 */
const namedFunctionExpression = function() {
};
export const validFunctions = [
	namedFunctionExpression,
	function namedFunctionDeclaration() {
	},
	function() {
	},
	() => {
	}
];

/**
 * Different instances of TestClass with different values.
 *
 * @constant {Array} validInstances
 */
const classReference = new TestClass(1);
export const validInstances = [
	classReference,
	new TestClass(1),
	new TestClass(2)
];

/**
 * Integers instantiated in different ways or with different values.
 *
 * @constant {Array} validIntegers
 */
const integerReference = Number(11);
export const validIntegers = [
	1,
	5,
	new Number(42), // eslint-disable-line no-new-wrappers
	integerReference
];

/**
 * Floats instantiated in different ways or with different values.
 *
 * @constant {Array} validFloats
 */
const floatReference = Number(11.3);
export const validFloats = [
	1.3,
	2.5,
	-10.00000001,
	3.14159,
	new Number(42.2), // eslint-disable-line no-new-wrappers
	floatReference
];

/**
 * Infinity and -Infinity
 *
 * @constant {Array} validInfinities
 */
const infinityReference = Infinity;
export const validInfinities = [
	infinityReference,
	-Infinity
];

/**
 * An empty Map and a Map with data.
 *
 * @constant {Array} validMaps
 */
const mapReference = new Map().set('test', 12);
export const validMaps = [
	new Map(),
	mapReference
];

/**
 * Plain objects instantiated in different ways or with different values.
 *
 * @constant {Array} validObjects
 */
const objectReference = Object();
export const validObjects = [
	{},
	{ test1: 1 },
	new Object(), // eslint-disable-line no-new-object
	objectReference
];

/**
 * A normal Promise and Promise.all.
 *
 * @constant {Array} validPromises
 */
const promiseReference = new Promise((resolve) => resolve());
export const validPromises = [
	promiseReference,
	new Promise((resolve) => resolve()),
	Promise.all(promiseReference)
];

/**
 * RegExps instantiated in different ways or with different values.
 *
 * @constant {Array} validRegExps
 */
const regExpReference = RegExp(); // eslint-disable-line require-unicode-regexp
export const validRegExps = [
	/asdf/g, // eslint-disable-line require-unicode-regexp
	new RegExp('test 2'), // eslint-disable-line require-unicode-regexp
	regExpReference
];

/**
 * An empty Set and a Set with data.
 *
 * @constant {Array} validSets
 */
const setReference = new Set([1, 2]);
export const validSets = [
	new Set(),
	setReference
];

/**
 * Strings instantiated in different ways or with different values.
 *
 * @constant {Array} validStrings
 */
const stringReference = String('test3');
export const validStrings = [
	'test',
	'',
	new String('test2'), // eslint-disable-line no-new-wrappers
	stringReference
];

/**
 * A Symbol with a label and one without.
 *
 * @constant {Array} validSymbols
 */
const symbolReference = Symbol('test');
export const validSymbols = [Symbol(), symbolReference];

/**
 * An empty WeakMap and a WeakMap with data.
 *
 * @constant {Array} validWeakMaps
 */
const weakMapReference = new WeakMap().set({}, 12);
export const validWeakMaps = [
	new WeakMap(),
	weakMapReference
];

/**
 * An empty WeakSet and a WeakSet with data.
 *
 * @constant {Array} validWeakSets
 */
const weakSetReference = new WeakSet([new TestClass()]);
export const validWeakSets = [new WeakSet(), weakSetReference];

/**
 * Undefined, null, and NaN
 *
 * @constant {Array} validNots
 */
export const validNots = [undefined, null, NaN];

export const testValues = validNots.concat(
	validArrays,
	validBooleans,
	validDates,
	validFunctions,
	validInstances,
	validIntegers,
	validFloats,
	validInfinities,
	validMaps,
	validObjects,
	validPromises,
	validRegExps,
	validSets,
	validStrings,
	validWeakMaps,
	validWeakSets
);
