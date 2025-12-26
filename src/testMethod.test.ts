import { describe, it, assert } from 'hippogriff';
import { testMethod } from '../index.js';

describe('testMethod', () => {
	it('should be a function', () => {
		assert.function(testMethod);
	});
});
