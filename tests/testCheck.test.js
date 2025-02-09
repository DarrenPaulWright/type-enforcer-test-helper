import { describe, it } from 'hippogriff';
import { assert } from 'type-enforcer';
import { testCheck } from '../index.js';

describe('testCheck', () => {
	it('should be a function', () => {
		assert.function(testCheck);
	});
});
