import { assert } from 'type-enforcer';
import { multiTest } from '../index.js';

describe('multiTest', () => {
	it('should be a function', () => {
		assert.function(multiTest);
	});
});
