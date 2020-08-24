import { assert } from 'type-enforcer';
import multiTest from './multiTest.js';

/**
 * Test a check function (isArray, isBoolean, etc.)
 *
 * @function testCheck
 *
 * @arg {Object} data - A data object (arrayData, booleanData, etc.)
 * @arg {Function} check - The function to test
 * @arg {Object} is - An object that includes this function
 */
export default function(data, check, is) {
	it('should exist in the exported "is" object', () => {
		assert.equal(check, is[data.name]);
	});

	multiTest({
		values: data.true,
		test(value) {
			return check(value);
		},
		assertion: 'true'
	});

	multiTest({
		values: data.false,
		test(value) {
			return check(value);
		},
		assertion: 'false'
	});

	multiTest({
		values: data.coerceTrue,
		test(value) {
			return check(value);
		},
		assertion: 'false'
	});

	describe('coerce', () => {
		multiTest({
			values: data.true,
			test(value) {
				return check(value, true);
			},
			assertion: 'true'
		});

		multiTest({
			values: data.coerceTrue,
			test(value) {
				return check(value, true);
			},
			assertion: 'true'
		});

		multiTest({
			values: data.coerceFalse,
			test(value) {
				return check(value, true);
			},
			assertion: 'false'
		});
	});
}
