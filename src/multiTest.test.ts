import { describe, it, assert } from 'hippogriff';
import { multiTest } from '../index.js';

describe('multiTest', () => {
	it('should be a function', () => {
		assert.function(multiTest);
	});
});
