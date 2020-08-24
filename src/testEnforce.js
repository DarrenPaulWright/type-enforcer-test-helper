import displayValue from 'display-value';
import { assert } from 'type-enforcer';
import TestClass from './data/TestClass.js';
import { testTypes } from './data/testData.js';
import multiTest from './multiTest.js';

/**
 * Test an enforce function (enforceArray, enforceBoolean, etc.)
 *
 * @function testEnforce
 *
 * @arg {Object} data - A data object (arrayData, booleanData, etc.)
 * @arg {Function} enforcer - The function to test
 * @arg {Object} enforce - An object that includes this function
 * @arg {Function} coercer - A function that does a coercion just like this function
 */
export default function(data, enforcer, enforce, coercer) {
	it('should exist in the exported "enforce" object', () => {
		assert.equal(enforcer, enforce[data.name]);
	});

	it(`should return the setter value when a ${data.name} is provided`, () => {
		let result;
		let value1 = data.true[0];
		let value2 = data.true[1];

		if (data.extraArg) {
			result = enforce[data.name](value1, data.extraArg, value2);
		}
		else {
			result = enforce[data.name](value1, value2);
		}

		assert.is(result, value1);
		assert.notIs(result, value2);
	});

	if (coercer === Number) {
		it('should return the min value when a integer less than the min value is provided', () => {
			assert.equal(enforce[data.name](-12, 11, false, 0, 5), 0);
		});
		it('should return the max value when a integer greater than the max value is provided', () => {
			assert.equal(enforce[data.name](12, 11, false, 0, 5), 5);
		});
	}

	multiTest({
		values: data.coerceTrue.map((item) => {
			return {
				input: item,
				output: item
			};
		}),
		message(input) {
			return `should NOT return a coerced ${displayValue(input)} when coerce is false`;
		},
		test(value) {
			return enforce[data.name](value, value, false);
		},
		inputKey: 'input',
		outputKey: 'output',
		assertion: 'equal'
	});

	describe('coerce', () => {
		if (coercer) {
			multiTest({
				values: data.coerceTrue.map((item) => {
					return {
						input: item,
						output: coercer(item)
					};
				}),
				message(input) {
					return `should return a coerced ${displayValue(input)} when coerce is true`;
				},
				test(value) {
					return enforce[data.name](value, value, true);
				},
				inputKey: 'input',
				outputKey: 'output',
				assertion: 'equal'
			});
		}

		multiTest({
			values: data.coerceFalse,
			message(input) {
				return `should return the alt value when ${displayValue(input)} is provided and coerce is true`;
			},
			test(value) {
				return enforce[data.name](value, 'testAlt', true);
			},
			output: 'testAlt',
			assertion: 'equal'
		});
	});

	testTypes.forEach((typesData) => {
		if (typesData.name && !([typesData.name].concat(typesData.skip).includes(data.name))) {

			typesData.true.forEach((testItem) => {

				it(`should return the default value when ${displayValue(testItem)} is provided`, () => {
					if (data.extraArg) {
						assert.equal(enforce[data.name](testItem, data.extraArg, data.true[0]), data.true[0]);
					}
					else {
						assert.equal(enforce[data.name](testItem, data.true[0]), data.true[0]);
					}
				});
			});
		}
	});

	if (data.name !== 'instanceOf') {
		it('should return the default value when an instance is provided', () => {
			if (data.extraArg) {
				assert.equal(enforce[data.name](new TestClass(), data.extraArg, data.true[0]), data.true[0]);
			}
			else {
				assert.equal(enforce[data.name](new TestClass(), data.true[0]), data.true[0]);
			}
		});
	}

	it('should return the default value when undefined is provided', () => {
		if (data.extraArg) {
			assert.equal(enforce[data.name](undefined, data.extraArg, data.true[0]), data.true[0]);
		}
		else {
			assert.equal(enforce[data.name](undefined, data.true[0]), data.true[0]);
		}
	});

	it('should return the default value when null is provided', () => {
		if (data.extraArg) {
			assert.equal(enforce[data.name](null, data.extraArg, data.true[0]), data.true[0]);
		}
		else {
			assert.equal(enforce[data.name](null, data.true[0]), data.true[0]);
		}
	});
};
