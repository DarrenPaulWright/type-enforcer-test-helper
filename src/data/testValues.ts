import TestClass from './TestClass.js';

/**
 * Arrays instantiated in different ways or with different values.
 */
const arrayReference = Array(3);
export const validArrays: Array<Array<unknown>> = [
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
 */
const booleanReference = Boolean();
export const validBooleans: Array<boolean> = [
	true,
	false,
	// @ts-expect-error
	new Boolean(true), // eslint-disable-line no-new-wrappers
	Boolean(1),
	booleanReference
];

/**
 * Dates instantiated in different ways or with different values.
 */
const dateReference = new Date();
export const validDates: Array<Date> = [
	dateReference,
	new Date('01/15/2010')
];

/**
 * Functions instantiated in different ways.
 */
const namedFunctionExpression = function() {
};
export const validFunctions: Array<Function> = [
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
 */
const classReference = new TestClass(1);
export const validInstances: Array<unknown> = [
	classReference,
	new TestClass(1),
	new TestClass(2)
];

/**
 * Integers instantiated in different ways or with different values.
 */
const integerReference = Number(11);
export const validIntegers: Array<number> = [
	1,
	5,
	3773586621232700,
	// @ts-expect-error
	new Number(42), // eslint-disable-line no-new-wrappers
	integerReference
];

/**
 * Floats instantiated in different ways or with different values.
 */
const floatReference = Number(11.3);
export const validFloats: Array<number> = [
	1.3,
	2.5,
	-10.00000001,
	3.14159,
	// @ts-expect-error
	new Number(42.2), // eslint-disable-line no-new-wrappers
	floatReference
];

/**
 * Infinity and -Infinity
 */
const infinityReference = Infinity;
export const validInfinities: Array<number> = [
	infinityReference,
	-Infinity
];

/**
 * An empty Map and a Map with data.
 */
const mapReference = new Map().set('test', 12);
export const validMaps: Array<Map<unknown, unknown>> = [
	new Map(),
	mapReference
];

/**
 * Plain objects instantiated in different ways or with different values.
 */
const objectReference = Object();
export const validObjects: Array<Object> = [
	{},
	{ test1: 1 },
	new Object(), // eslint-disable-line no-new-object
	objectReference
];

/**
 * A normal Promise and Promise.all.
 */
const promiseReference = new Promise<void>((resolve) => resolve());
export const validPromises: Array<Promise<unknown>> = [
	promiseReference,
	new Promise<void>((resolve) => resolve()),
	Promise.all([promiseReference])
];

/**
 * RegExps instantiated in different ways or with different values.
 */
const regExpReference = RegExp(''); // eslint-disable-line require-unicode-regexp
export const validRegExps: Array<RegExp> = [
	/asdf/g, // eslint-disable-line require-unicode-regexp
	new RegExp('test 2'), // eslint-disable-line require-unicode-regexp
	regExpReference
];

/**
 * An empty Set and a Set with data.
 */
const setReference = new Set([1, 2]);
export const validSets: Array<Set<unknown>> = [
	new Set(),
	setReference
];

/**
 * Strings instantiated in different ways or with different values.
 */
const stringReference = String('test3');
export const validStrings: Array<string> = [
	'test',
	'',
	// @ts-expect-error
	new String('test2'), // eslint-disable-line no-new-wrappers
	stringReference
];

/**
 * A Symbol with a label and one without.
 */
const symbolReference = Symbol('test');
export const validSymbols: Array<Symbol> = [
	Symbol(),
	symbolReference
];

/**
 * An empty WeakMap and a WeakMap with data.
 */
const weakMapReference = new WeakMap().set({}, 12);
export const validWeakMaps: Array<WeakMap<WeakRef<WeakKey>, unknown>> = [
	new WeakMap(),
	weakMapReference
];

/**
 * An empty WeakSet and a WeakSet with data.
 */
const weakSetReference = new WeakSet([new TestClass()]);
export const validWeakSets: Array<WeakSet<WeakRef<WeakKey>>> = [
	new WeakSet(),
	// @ts-expect-error
	weakSetReference
];

/**
 * Undefined, null, and NaN
 */
export const validNots: Array<undefined|null|typeof NaN> = [undefined, null, NaN];

/**
 * A concatenated array of all the "valid" arrays.
 */
export const testValues: Array<unknown> = (validNots as Array<unknown>).concat(
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
