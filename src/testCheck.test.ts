import { describe, it, assert } from 'hippogriff';
import { testCheck } from '../index.js';

describe('testCheck', () => {
	it('should be a function', () => {
		assert.function(testCheck);
	});
});
