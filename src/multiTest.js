import displayValue from 'display-value';
import { forOwn, mix } from 'object-agent';
import { assert } from 'type-enforcer';

const getMessage = (settings, assertion) => {
	if (settings.message) {
		return settings.message;
	}
	if (assertion === 'true') {
		return (input) => `should return true for ${displayValue(input)}`;
	}
	if (assertion === 'false') {
		return (input) => `should return false for ${displayValue(input)}`;
	}

	return (input, output) => `should return ${displayValue(output)} when set to ${input}`;
};

/**
 * Run multiple identical tests over a set of data.
 *
 * @function multiTest
 *
 * @param {object}       settings - Settings object.
 * @param {object | Array} settings.values - The values to run tests against.
 * @param {object | Array} [settings.values2] - Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array.
 * @param {Function}     settings.test - The test to run against each value. Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Should not call assert, but return a value to be asserted against configured output.
 * @param {Function}     [settings.filter] - Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test.
 * @param {Function}     [settings.message] - Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability.
 * @param {string}       [settings.inputKey] - If values is an array of objects, this specifies which key to get the input value from.
 * @param {string}       [settings.outputKey] - If values is an array of objects, this specifies which key to get the expected output value from.
 * @param {*}            [settings.output] - The expected output value of all tests.
 * @param {boolean}      [settings.eachPair=false] - Values must be an array, runs tests on every combination of two items from values.
 * @param {string}       [settings.assertion='equal'] - The type-enforcer assert function to run against all tests.
 */
export default (settings) => {
	let assertion = settings.assertion || 'equal';
	const buildSingleMessage = getMessage(settings, assertion);

	if (assertion === 'true') {
		assertion = 'equal';
		settings.output = true;
	}
	else if (assertion === 'false') {
		assertion = 'equal';
		settings.output = false;
	}

	const buildDoubleMessage = settings.message || ((input1, input2, output) => {
		return `should return ${displayValue(output)} when ${displayValue(input1)} and ${displayValue(input2)} are provided`;
	});

	const testSingleValue = (input, output, value) => {
		if ((!settings.filter) || settings.filter(value)) {
			it(buildSingleMessage(input, output), () => {
				assert[assertion](settings.test(input), output);
			});
		}
	};

	const testDoubleValue = (input1, input2, output, value1, value2) => {
		if ((!settings.filter) || settings.filter(value1, value2)) {
			it(buildDoubleMessage(input1, input2, output), () => {
				assert[assertion](settings.test(input1, input2), output);
			});
		}
	};

	const testSingleArrayValue = (value) => {
		if ('output' in settings) {
			if ('inputKey' in settings) {
				testSingleValue(value[settings.inputKey], settings.output, value);
			}
			else {
				testSingleValue(value, settings.output, value);
			}
		}
		else if ('outputKey' in settings) {
			if ('inputKey' in settings) {
				testSingleValue(value[settings.inputKey], value[settings.outputKey], value);
			}
			else {
				testSingleValue(value, value[settings.outputKey], value);
			}
		}
		else if ('inputKey' in settings) {
			testSingleValue(value[settings.inputKey], undefined, value);
		}
		else {
			testSingleValue(value, undefined, value);
		}
	};

	const testDoubleArrayValue = (value1, value2) => {
		if ('output' in settings) {
			if ('inputKey' in settings) {
				testDoubleValue(value1[settings.inputKey], value2[settings.inputKey], settings.output, value1, value2);
			}
			else {
				testDoubleValue(value1, value2, settings.output, value1, value2);
			}
		}
		else if ('inputKey' in settings) {
			testDoubleValue(value1[settings.inputKey], value2[settings.inputKey], undefined, value1, value2);
		}
		else {
			testDoubleValue(value1, value2, undefined, value1, value2);
		}
	};

	if (settings.values && settings.values.constructor === Object) {
		forOwn(settings.values, (value, key) => {
			testSingleValue(key, value, value);
		});
	}
	else if (settings.eachPair) {
		mix(settings.values, settings.values2 || settings.values)
			.forEach((values) => {
				testDoubleArrayValue(values[0], values[1]);
			});
	}
	else {
		settings.values.forEach(testSingleArrayValue);
	}
};
