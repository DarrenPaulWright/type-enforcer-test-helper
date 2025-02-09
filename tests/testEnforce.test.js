import { describe, it } from 'hippogriff';
import { assert } from 'type-enforcer';
import { testEnforce } from '../index.js';

describe('testEnforce', () => {
	it('should be a function', () => {
		assert.function(testEnforce);
	});
});
