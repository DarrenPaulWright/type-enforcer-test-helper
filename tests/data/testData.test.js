import { describe, it } from 'hippogriff';
import { assert } from 'type-enforcer';
import {
	arrayData,
	booleanData,
	dateData,
	floatData,
	functionData,
	instanceData,
	integerData,
	jsonData,
	mapData,
	numberData,
	objectData,
	promiseData,
	regExpData,
	setData,
	stringData,
	symbolData,
	testTypes,
	weakMapData,
	weakSetData
} from '../../index.js';

describe('testValues', () => {
	Object.entries({
		arrayData,
		booleanData,
		dateData,
		functionData,
		instanceData,
		integerData,
		jsonData,
		floatData,
		numberData,
		mapData,
		objectData,
		promiseData,
		regExpData,
		setData,
		stringData,
		symbolData,
		weakMapData,
		weakSetData
	}).forEach(([name, data]) => {
		describe(name, () => {
			it('should be an object', () => {
				assert.object(data);
			});

			it('should have a name', () => {
				assert.string(data.name);
			});

			it('should have a property "true"', () => {
				assert.array(data.true);
			});

			it('should have a property "false"', () => {
				assert.array(data.false);
			});

			it('should have a property "coerceTrue"', () => {
				assert.array(data.coerceTrue);
			});

			it('should have a property "coerceFalse"', () => {
				assert.array(data.coerceFalse);
			});

			if (data.skip) {
				it('should have a property "skip"', () => {
					assert.array(data.skip);
				});
			}

			if (data.value) {
				it('should have a property "value"', () => {
					assert.equal(typeof data.value, 'function');
				});
			}
		});
	});

	describe('testTypes', () => {
		it('should be an array', () => {
			assert.array(testTypes);
		});

		it('should have items', () => {
			assert.moreThan(testTypes.length, 0);
		});
	});
});
