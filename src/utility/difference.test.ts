import { describe, it, assert } from 'hippogriff';
import difference from './difference.js';

describe('difference', () => {
	it('should be a function', () => {
		assert.function(difference);
	});

	it('should return the difference between two arrays', () => {
		assert.equal(difference([1, 2, 3, 4, 5, 6], [4, 5, 6]), [1, 2, 3]);
	});

	it('should return the difference between multiple arrays', () => {
		assert.equal(difference([1, 2, 3, 4, 5, 6], [4, 5], [4, 6, 1]), [2, 3]);
	});
});
