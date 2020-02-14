import displayValue from 'display-value';
import { forOwn, mix } from 'object-agent';
import { assert } from 'type-enforcer';

/**
 * Run multiple identical tests over a set of data
 *
 * @function multiTest
 *
 * @arg {Object}       settings
 * @arg {Object|Array} settings.values
 * @arg {Object|Array} [settings.values2] - Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array.
 * @arg {Function}     settings.test
 * @arg {Function}     [settings.filter]
 * @arg {Function}     [settings.message=`should return ${output} when set to ${input}`]
 * @arg {String}       [settings.inputKey]
 * @arg {String}       [settings.outputKey]
 * @arg {*}            [settings.output]
 * @arg {Boolean}      [settings.eachPair=false] - values must be an array, runs tests on every combination of two items from values
 * @arg {String}       [settings.assertion='equal']
 */
export default (settings) => {
	const assertion = settings.assertion || 'equal';

	let buildSingleMessage;
	if (settings.message) {
		buildSingleMessage = settings.message;
	}
	else if (settings.assertion === 'true') {
		buildSingleMessage = (input) => `should return true for ${displayValue(input)}`;
		settings.assertion = 'equal';
		settings.output = true;
	}
	else if (settings.assertion === 'false') {
		buildSingleMessage = (input) => `should return false for ${displayValue(input)}`;
		settings.assertion = 'equal';
		settings.output = false;
	}
	else {
		buildSingleMessage = (input, output) => `should return ${displayValue(output)} when set to ${input}`;
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
		else {
			if ('inputKey' in settings) {
				testSingleValue(value[settings.inputKey], undefined, value);
			}
			else {
				testSingleValue(value, undefined, value);
			}
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
		else {
			if ('inputKey' in settings) {
				testDoubleValue(value1[settings.inputKey], value2[settings.inputKey], undefined, value1, value2);
			}
			else {
				testDoubleValue(value1, value2, undefined, value1, value2);
			}
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
