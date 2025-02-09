import { describe, it } from 'hippogriff';
import { assert } from 'type-enforcer';
import {
	testValues,
	validArrays,
	validBooleans,
	validDates,
	validFloats,
	validFunctions,
	validInfinities,
	validInstances,
	validIntegers,
	validMaps,
	validNots,
	validObjects,
	validPromises,
	validRegExps,
	validSets,
	validStrings,
	validSymbols,
	validWeakMaps,
	validWeakSets
} from '../../index.js';

describe('testValues', () => {
	Object.entries({
		validArrays,
		validBooleans,
		validDates,
		validFunctions,
		validInstances,
		validIntegers,
		validFloats,
		validInfinities,
		validMaps,
		validObjects,
		validPromises,
		validRegExps,
		validSets,
		validStrings,
		validSymbols,
		validWeakMaps,
		validWeakSets,
		validNots,
		testValues
	}).forEach(([name, validItems]) => {
		describe(name, () => {
			it('should be an array', () => {
				assert.array(validItems);
			});

			it('should have items', () => {
				assert.moreThan(validItems.length, 0);
			});
		});
	});
});
