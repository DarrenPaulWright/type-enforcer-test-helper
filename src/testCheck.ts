import { describe, it, assert } from 'hippogriff';
import { type is as Is } from 'type-enforcer';
import { TestData } from './data/testData.js';
import multiTest from './multiTest.js';

/**
 * Test a type-enforcer check function (isArray, isBoolean, etc.).
 */
export default function(
	data: TestData<unknown>,
	check: (value: unknown, coerce?: boolean) => boolean,
	is: typeof Is
) {
	it('should exist in the exported "is" object', () => {
		assert.equal(check, is[data.name]);
	});

	multiTest({
		values: data.true,
		test: (value:unknown) => check(value),
		assertion: 'true'
	});

	multiTest({
		values: data.false,
		test: (value:unknown) => check(value),
		assertion: 'false'
	});

	multiTest({
		values: data.coerceTrue,
		test: (value:unknown) => check(value),
		assertion: 'false'
	});

	describe('coerce', () => {
		multiTest({
			values: data.true,
			test: (value:unknown) => check(value, true),
			assertion: 'true'
		});

		multiTest({
			values: data.coerceTrue,
			test: (value:unknown) => check(value, true),
			assertion: 'true'
		});

		multiTest({
			values: data.coerceFalse,
			test: (value:unknown) => check(value, true),
			assertion: 'false'
		});
	});
}
