import { describe, it, assert } from 'hippogriff';
import { testEnforce } from '../index.js';

describe('testEnforce', () => {
	it('should be a function', () => {
		assert.function(testEnforce);
	});
});
