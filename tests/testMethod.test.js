import { assert } from 'type-enforcer';
import { testMethod } from '../index.js';

describe('testMethod', () => {
	it('should be a function', () => {
		assert.function(testMethod);
	});
});
