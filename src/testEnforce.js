import { assert } from 'chai';
import displayValue from 'display-value';
import multiTest from './multiTest';
import { TestClass, testTypes } from './testValues';

export default function(data, enforcer, enforce, coercer) {
	it('should exist in the exported "enforce" object', () => {
		assert.deepEqual(enforcer, enforce[data.name]);
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

			if (value1.toString) {
				result = result.toString();
				value1 = value1.toString();
				value2 = value2.toString();
			}
		}

		assert.deepEqual(result, value1);
		assert.notDeepEqual(result, value2);
	});

	if (coercer === Number) {
		it('should return the min value when a integer less than the min value is provided', () => {
			assert.deepEqual(enforce[data.name](-12, 11, false, 0, 5), 0);
		});
		it('should return the max value when a integer greater than the max value is provided', () => {
			assert.deepEqual(enforce[data.name](12, 11, false, 0, 5), 5);
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
		assertion: 'deepEqual'
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
				assertion: 'deepEqual'
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
			assertion: 'deepEqual'
		});
	});

	testTypes.forEach((data) => {
		if (data.name && !([data.name].concat(data.skip).includes(data.name))) {
			data.true.forEach((testItem) => {
				it(`should return the default value when ${displayValue(testItem)} is provided`, () => {
					if (data.extraArg) {
						assert.deepEqual(enforce[data.name](testItem, data.extraArg, data.true[0]), data.true[0]);
					}
					else {
						assert.deepEqual(enforce[data.name](testItem, data.true[0]), data.true[0]);
					}
				});
			});
		}
	});

	if (data.name !== 'instanceOf') {
		it('should return the default value when an instance is provided', () => {
			if (data.extraArg) {
				assert.deepEqual(enforce[data.name](new TestClass(), data.extraArg, data.true[0]), data.true[0]);
			}
			else {
				assert.deepEqual(enforce[data.name](new TestClass(), data.true[0]), data.true[0]);
			}
		});
	}

	it('should return the default value when undefined is provided', () => {
		if (data.extraArg) {
			assert.deepEqual(enforce[data.name](undefined, data.extraArg, data.true[0]), data.true[0]);
		}
		else {
			assert.deepEqual(enforce[data.name](undefined, data.true[0]), data.true[0]);
		}
	});

	it('should return the default value when null is provided', () => {
		if (data.extraArg) {
			assert.deepEqual(enforce[data.name](null, data.extraArg, data.true[0]), data.true[0]);
		}
		else {
			assert.deepEqual(enforce[data.name](null, data.true[0]), data.true[0]);
		}
	});
};
