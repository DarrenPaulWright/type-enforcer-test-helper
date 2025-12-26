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
import { type is as Is } from 'type-enforcer';

export interface TestData<T> {
	value?: unknown;
	skip?: Array<keyof typeof Is>;
	name: keyof typeof Is;
	true: Array<T>;
	false: Array<unknown>;
	coerceTrue: Array<unknown>;
	coerceFalse: Array<unknown>;
	extraArg?: T;
}

export const arrayData: TestData<Array<unknown>> = {
	value: Array,
	name: 'array',
	true: validArrays,
	false: difference(testValues, validArrays),
	coerceTrue: coerceArrayTrue,
	coerceFalse: difference(testValues, validArrays)
};

export const booleanData: TestData<boolean> = {
	value: Boolean,
	name: 'boolean',
	true: validBooleans,
	false: difference(testValues, validBooleans),
	coerceTrue: difference(testValues, validBooleans),
	coerceFalse: []
};

export const dateData: TestData<Date> = {
	value: Date,
	name: 'date',
	true: validDates,
	false: difference(testValues, validDates),
	coerceTrue: ['10/12/1980', 'January 8, 2014'],
	coerceFalse: difference(testValues, validDates, validArrays, validFloats, validIntegers, validRegExps)
};

export const functionData: TestData<Function> = {
	value: Function,
	name: 'function',
	true: validFunctions,
	false: difference(testValues, validFunctions),
	coerceTrue: [],
	coerceFalse: difference(testValues, validFunctions)
};

export const instanceData: TestData<unknown> = {
	value: TestClass,
	name: 'instanceOf',
	true: validInstances,
	false: difference(testValues, validInstances),
	coerceTrue: [],
	coerceFalse: []
};

export const integerData: TestData<number> = {
	name: 'integer',
	skip: ['number', 'float'],
	true: validIntegers,
	false: difference(testValues, validIntegers, validInfinities),
	coerceTrue: coerceIntegerTrue,
	coerceFalse: coerceNumberFalse.concat(coerceFloatTrue, coerceInfinity)
};

export const jsonData: TestData<unknown> = {
	name: 'json',
	true: coerceObjectTrue.concat(coerceArrayTrue, JSON.stringify(testValues)),
	false: (['json'] as Array<unknown>).concat(validDates, validFunctions, validObjects, validRegExps),
	coerceTrue: [],
	coerceFalse: []
};

export const floatData: TestData<number> = {
	name: 'float',
	skip: ['number', 'integer'],
	true: validFloats,
	false: difference(testValues, validFloats, validIntegers, validInfinities),
	coerceTrue: coerceIntegerTrue.concat(coerceFloatTrue),
	coerceFalse: coerceNumberFalse.concat(coerceInfinity)
};

export const numberData: TestData<number> = {
	value: Number,
	name: 'number',
	skip: ['integer', 'float'],
	true: validFloats.concat(validIntegers, validInfinities),
	false: difference(testValues, validFloats, validIntegers, validInfinities, [NaN]),
	coerceTrue: coerceIntegerTrue.concat(coerceInfinity),
	coerceFalse: coerceNumberFalse
};

export const mapData: TestData<Map<unknown, unknown>> = {
	value: Map,
	name: 'map',
	true: validMaps,
	false: difference(testValues, validMaps),
	coerceTrue: coerceObjectTrue.concat(validObjects, [[[TestClass, 2],
		[TestClass, 'test']], '[["test 1", 2], ["test 2", "test"]]']),
	coerceFalse: difference(testValues, validMaps, validObjects, validArrays).concat(['test'])
};

export const objectData: TestData<Object> = {
	value: Object,
	name: 'object',
	true: validObjects,
	false: [null, undefined, true, false],
	coerceTrue: coerceObjectTrue,
	coerceFalse: validStrings
};

export const promiseData: TestData<Promise<unknown>> = {
	value: Promise,
	name: 'promise',
	true: validPromises,
	false: difference(testValues, validPromises),
	coerceTrue: validFunctions,
	coerceFalse: difference(testValues, validFunctions, validPromises)
};

export const regExpData: TestData<RegExp> = {
	value: RegExp,
	name: 'regExp',
	true: validRegExps,
	false: difference(testValues, validRegExps),
	coerceTrue: ['test', '/[a-z]+/', '/[a-z]+/gi'],
	coerceFalse: difference(testValues, validStrings, validRegExps)
};

export const setData: TestData<Set<unknown>> = {
	value: Set,
	name: 'set',
	true: validSets,
	false: difference(testValues, validSets),
	coerceTrue: validArrays.concat(['[]', '[1, 2]']),
	coerceFalse: difference(testValues, validSets, validArrays)
};

export const stringData: TestData<string> = {
	value: String,
	name: 'string',
	true: validStrings,
	false: difference(testValues, validStrings),
	coerceTrue: difference(testValues, validStrings, [null, undefined]),
	coerceFalse: [null, undefined]
};

export const symbolData: TestData<Symbol> = {
	value: Symbol,
	name: 'symbol',
	true: validSymbols,
	false: difference(testValues, validSymbols),
	coerceTrue: stringData.coerceTrue,
	coerceFalse: stringData.coerceFalse
};

export const weakMapData: TestData<WeakMap<WeakRef<WeakKey>, unknown>> = {
	value: WeakMap,
	name: 'weakMap',
	true: validWeakMaps,
	false: difference(testValues, validWeakMaps),
	coerceTrue: [[[TestClass, 2], [TestClass, 'test']]],
	coerceFalse: difference(testValues, validWeakMaps, validArrays).concat(['test'])
};

export const weakSetData: TestData<WeakSet<WeakRef<WeakKey>>> = {
	value: WeakSet,
	name: 'weakSet',
	true: validWeakSets,
	false: difference(testValues, validWeakSets),
	coerceTrue: [validInstances],
	coerceFalse: difference(testValues, validWeakSets, validArrays)
};

export const testTypes: Array<TestData<unknown>> = [
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
