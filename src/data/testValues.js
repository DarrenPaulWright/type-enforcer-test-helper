import TestClass from './TestClass.js';
import difference from '../utility/difference.js';

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
const arrayRef = Array(3);
export const validArrays = [[1], [2], [], new Array(), Array(), arrayRef];

/**
 * Booleans instantiated in different ways or with different values.
 *
 * @constant {Array} validBooleans
 */
const booleanRef = Boolean();
export const validBooleans = [true, false, new Boolean(true), booleanRef];

/**
 * Dates instantiated in different ways or with different values.
 *
 * @constant {Array} validDates
 */
const dateRef = new Date();
export const validDates = [dateRef, new Date('01/15/2010')];

/**
 * Functions instantiated in different ways.
 *
 * @constant {Array} validFunctions
 */
const namedFunctionExpression = function() {};
export const validFunctions = [namedFunctionExpression, function namedFunctionDeclaration() {
}, function() {
}, () => {
}];

/**
 * Different instances of TestClass with different values.
 *
 * @constant {Array} validInstances
 */
const classRef = new TestClass(1);
export const validInstances = [classRef, new TestClass(1), new TestClass(2)];

/**
 * Integers instantiated in different ways or with different values.
 *
 * @constant {Array} validIntegers
 */
const integerRef = Number(11);
export const validIntegers = [1, 5, new Number(42), integerRef];

/**
 * Floats instantiated in different ways or with different values.
 *
 * @constant {Array} validFloats
 */
const floatRef = Number(11.3);
export const validFloats = [1.3, 2.5, -10.00000001, 3.14159, new Number(42.2), floatRef];

/**
 * Infinity and -Infinity
 *
 * @constant {Array} validInfinities
 */
const infinityRef = Infinity;
export const validInfinities = [infinityRef, -Infinity];

/**
 * An empty Map and a Map with data.
 *
 * @constant {Array} validMaps
 */
const mapRef = new Map().set('test', 12);
export const validMaps = [new Map(), mapRef];

/**
 * Plain objects instantiated in different ways or with different values.
 *
 * @constant {Array} validObjects
 */
const objectRef = Object();
export const validObjects = [{}, {test1: 1}, new Object(), objectRef];

/**
 * A normal Promise and Promise.all.
 *
 * @constant {Array} validPromises
 */
const promiseRef = new Promise((resolve) => resolve());
export const validPromises = [
	promiseRef,
	new Promise((resolve) => resolve()),
	Promise.all(promiseRef)
];

/**
 * RegExps instantiated in different ways or with different values.
 *
 * @constant {Array} validRegExps
 */
const regExpRef = RegExp();
export const validRegExps = [/asdf/g, new RegExp('test 2'), regExpRef];

/**
 * An empty Set and a Set with data.
 *
 * @constant {Array} validSets
 */
const setRef = new Set([1, 2]);
export const validSets = [new Set(), setRef];

/**
 * Strings instantiated in different ways or with different values.
 *
 * @constant {Array} validStrings
 */
const stringRef = String('test3');
export const validStrings = ['test', '', new String('test2'), stringRef];

/**
 * A Symbol with a label and one without.
 *
 * @constant {Array} validSymbols
 */
const symbolRef = Symbol('test');
export const validSymbols = [Symbol(), symbolRef];

/**
 * An empty WeakMap and a WeakMap with data.
 *
 * @constant {Array} validWeakMaps
 */
const weakMapRef = new WeakMap().set({}, 12);
export const validWeakMaps = [new WeakMap(), weakMapRef];

/**
 * An empty WeakSet and a WeakSet with data.
 *
 * @constant {Array} validWeakSets
 */
const weakSetRef = new WeakSet([new TestClass]);
export const validWeakSets = [new WeakSet(), weakSetRef];

/**
 * undefined, null, and NaN
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
