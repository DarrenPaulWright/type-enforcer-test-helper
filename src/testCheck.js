import { assert } from 'chai';
import multiTest from './multiTest';

export default function(data, isType, is) {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isType, is[data.name]);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isType(value);
		},
		assertion: 'isTrue'
	});

	multiTest({
		values: data.false,
		test(value) {
			return isType(value);
		},
		assertion: 'isFalse'
	});

	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isType(value);
		},
		assertion: 'isFalse'
	});

	describe('coerce', () => {
		multiTest({
			values: data.true,
			test(value) {
				return isType(value, true);
			},
			assertion: 'isTrue'
		});

		multiTest({
			values: data.coerceTrue,
			test(value) {
				return isType(value, true);
			},
			assertion: 'isTrue'
		});

		multiTest({
			values: data.coerceFalse,
			test(value) {
				return isType(value, true);
			},
			assertion: 'isFalse'
		});
	});
}
