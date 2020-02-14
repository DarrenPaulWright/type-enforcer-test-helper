import { assert } from 'type-enforcer';
import multiTest from './multiTest';

export default function(data, isType, is) {
	it('should exist in the exported "is" object', () => {
		assert.equal(isType, is[data.name]);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isType(value);
		},
		assertion: 'true'
	});

	multiTest({
		values: data.false,
		test(value) {
			return isType(value);
		},
		assertion: 'false'
	});

	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isType(value);
		},
		assertion: 'false'
	});

	describe('coerce', () => {
		multiTest({
			values: data.true,
			test(value) {
				return isType(value, true);
			},
			assertion: 'true'
		});

		multiTest({
			values: data.coerceTrue,
			test(value) {
				return isType(value, true);
			},
			assertion: 'true'
		});

		multiTest({
			values: data.coerceFalse,
			test(value) {
				return isType(value, true);
			},
			assertion: 'false'
		});
	});
}
