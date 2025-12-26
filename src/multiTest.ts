import displayValue from 'display-value';
import { forOwn, mix } from 'object-agent';
import { it, assert } from 'hippogriff';

interface IMultiTestValuesObject<Type> {
	[key: string]: Type;
}

interface IMultiTestSettingsObject<Type> {
	/**
	 * The values to run tests against.
	 */
	values: IMultiTestValuesObject<Type>;
	/**
	 * Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array.
	 */
	test: (value: Type) => unknown;
	/**
	 * Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test.
	 */
	filter?: (value: unknown) => boolean;
	/**
	 * Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability.
	 */
	message?: (input: unknown, output: unknown) => string;
	/**
	 * The expected output value of all tests.
	 */
	output?: unknown;
	/**
	 * The type-enforcer assert function to run against all tests.
	 */
	assertion?: keyof typeof assert | 'true' | 'false';
}

interface IMultiTestSettingsPairs<Type> {
	/**
	 * The values to run tests against.
	 */
	values: Array<Type>;
	/**
	 * Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array.
	 */
	values2: Array<Type>;
	/**
	 * The test to run against each value. Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Should not call assert, but return a value to be asserted against configured output.
	 */
	test: (value1: Type, value2: Type) => unknown;
	/**
	 * Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test.
	 */
	filter?: (value: Type, value2: Type) => boolean;
	/**
	 * Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability.
	 */
	message?: (input: unknown, output: unknown) => string;
	/**
	 * The expected output value of all tests.
	 */
	output?: unknown;
	/**
	 * The type-enforcer assert function to run against all tests.
	 */
	assertion?: keyof typeof assert | 'true' | 'false';
	/**
	 * Values must be an array, runs tests on every combination of two items from values.
	 */
	eachPair: true;
}

interface IMultiTestSettingsPairsCollection<Type, Values = { [key: string]: Type }> {
	/**
	 * The values to run tests against.
	 */
	values: Array<Values>;
	/**
	 * Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array.
	 */
	values2: Array<Values>;
	/**
	 * The test to run against each value. Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Should not call assert, but return a value to be asserted against configured output.
	 */
	test: (value1: Type, value2: Type) => unknown;
	/**
	 * Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test.
	 */
	filter?: (value: Values, value2: Values) => boolean;
	/**
	 * Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability.
	 */
	message?: (input: unknown, output: unknown) => string;
	/**
	 * If values is an array of objects, this specifies which key to get the input value from.
	 */
	inputKey: keyof Values;
	/**
	 * The expected output value of all tests.
	 */
	output?: unknown;
	/**
	 * The type-enforcer assert function to run against all tests.
	 */
	assertion?: keyof typeof assert | 'true' | 'false';
	/**
	 * Values must be an array, runs tests on every combination of two items from values.
	 */
	eachPair: true;
}

interface IMultiTestSettingsSingle<Type> {
	/**
	 * The values to run tests against.
	 */
	values: Array<Type>;
	/**
	 * The test to run against each value. Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Should not call assert, but return a value to be asserted against configured output.
	 */
	test: (value: Type) => unknown;
	/**
	 * Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test.
	 */
	filter?: (value: Type) => boolean;
	/**
	 * Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability.
	 */
	message?: (input: unknown, output: unknown) => string;
	/**
	 * The expected output value of all tests.
	 */
	output?: unknown;
	/**
	 * The type-enforcer assert function to run against all tests.
	 */
	assertion?: keyof typeof assert | 'true' | 'false';
}

interface IMultiTestSettingsSingleCollection<Type, Values = { [key: string]: Type }> {
	/**
	 * The values to run tests against.
	 */
	values: Array<Values>;
	/**
	 * The test to run against each value. Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Should not call assert, but return a value to be asserted against configured output.
	 */
	test: (value: Type) => unknown;
	/**
	 * Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test.
	 */
	filter?: (value: Values) => boolean;
	/**
	 * Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability.
	 */
	message?: (input: unknown, output: unknown) => string;
	/**
	 * If values is an array of objects, this specifies which key to get the input value from.
	 */
	inputKey?: keyof Values;
	/**
	 * If values is an array of objects, this specifies which key to get the expected output value from.
	 */
	outputKey?: keyof Values;
	/**
	 * The expected output value of all tests.
	 */
	output?: unknown;
	/**
	 * The type-enforcer assert function to run against all tests.
	 */
	assertion?: keyof typeof assert | 'true' | 'false';
}

type IMultiTestSettings<Type> = IMultiTestSettingsObject<Type> |
	IMultiTestSettingsPairs<Type> |
	IMultiTestSettingsPairsCollection<Type> |
	IMultiTestSettingsSingle<Type> |
	IMultiTestSettingsSingleCollection<Type>;

const getMessage = <Type>(
	settings: IMultiTestSettings<Type>,
	assertion: IMultiTestSettings<Type>['assertion']
): Required<IMultiTestSettings<Type>>['message'] => {
	if (settings.message) {
		return settings.message;
	}

	if (assertion === 'true') {
		return (input: unknown) => `should return true for ${ displayValue(input) }`;
	}

	if (assertion === 'false') {
		return (input: unknown) => `should return false for ${ displayValue(input) }`;
	}

	return (input: unknown, output: unknown) => `should return ${ displayValue(output) } when set to ${ input }`;
};

const doubleValueMessage = ((input1: unknown, input2: unknown, expected: unknown) => {
	return `should return ${ displayValue(expected) } when ${ displayValue(input1) } and ${ displayValue(input2) } are provided`;
})

const isMultiTestSettingsObject = <Type>(
	settings: IMultiTestSettings<Type>
): settings is IMultiTestSettingsObject<Type> => {
	return settings.values && settings.values.constructor === Object;
}

/**
 * Run multiple identical tests over a set of data.
 */
export default <Type>(settings: IMultiTestSettings<Type>): void => {
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

	const buildDoubleMessage = settings.message || doubleValueMessage;

	const testSingleValue = (
		input: unknown,
		expected: Type | undefined,
		value: Type,
		filter?: (value: Type) => boolean
	) => {
		if ((!filter) || filter(value)) {
			it(buildSingleMessage(input, expected), () => {
				// @ts-expect-error
				assert[assertion](settings.test(input), expected);
			});
		}
	};

	const testSingleValueCollection = (
		input: unknown,
		expected: Type | undefined,
		value: { [key: string]: Type },
		filter?: (value: { [key: string]: Type }) => boolean
	) => {
		if ((!filter) || filter(value)) {
			it(buildSingleMessage(input, expected), () => {
				// @ts-expect-error
				assert[assertion](settings.test(input), expected);
			});
		}
	};

	const testDoubleValue = (
		input1: unknown,
		input2: unknown,
		expected: unknown,
		value1: Type,
		value2: Type
	): void => {
		if (
			(!settings.filter) ||
			(settings.filter as IMultiTestSettingsPairs<Type>['filter'])!(value1, value2)
		) {
			it(buildDoubleMessage(input1, input2, expected), () => {
				// @ts-expect-error
				assert[assertion](settings.test(input1, input2), expected);
			});
		}
	};

	const testDoubleValueCollection = (
		input1: unknown,
		input2: unknown,
		expected: unknown,
		value1: { [key: string]: Type },
		value2: { [key: string]: Type }
	): void => {
		if (
			(!settings.filter) ||
			(settings.filter as IMultiTestSettingsPairsCollection<Type>['filter'])!(value1, value2)
		) {
			it(buildDoubleMessage(input1, input2, expected), () => {
				// @ts-expect-error
				assert[assertion](settings.test(input1, input2), expected);
			});
		}
	};

	if (isMultiTestSettingsObject(settings)) {
		forOwn(settings.values, (value: Type, key: string) => {
			testSingleValue(key, value, value, settings.filter);
		});
	}
	else if ('eachPair' in settings && settings.eachPair) {
		mix(settings.values, settings.values2 || settings.values)
			.forEach((values) => {
				const value1 = values[0];
				const value2 = values[1]

				if ('output' in settings) {
					if ('inputKey' in settings) {
						testDoubleValueCollection(
							value1[settings.inputKey],
							value2[settings.inputKey],
							settings.output,
							value1,
							value2
						);
					}
					else {
						testDoubleValue(
							value1,
							value2,
							settings.output,
							value1,
							value2
						);
					}
				}
				else if ('inputKey' in settings) {
					testDoubleValueCollection(
						value1[settings.inputKey],
						value2[settings.inputKey],
						undefined,
						value1,
						value2
					);
				}
				else {
					testDoubleValue(
						value1,
						value2,
						undefined,
						value1,
						value2
					);
				}
			});
	}
	else {
		settings.values.forEach((value): void => {
			if ('output' in settings) {
				if ('inputKey' in settings) {
					testSingleValueCollection(
						(value as { [key: string]: Type })[settings.inputKey],
						settings.output as Type,
						value as { [key: string]: Type },
						settings.filter as IMultiTestSettingsSingleCollection<Type>['filter']
					);
				}
				else {
					testSingleValue(
						value,
						settings.output as Type,
						value as Type,
						settings.filter as IMultiTestSettingsSingle<Type>['filter']
					);
				}
			}
			else if ('outputKey' in settings) {
				if ('inputKey' in settings) {
					testSingleValueCollection(
						(value as { [key: string]: Type })[settings.inputKey],
						(value as { [key: string]: Type })[settings.outputKey],
						value as { [key: string]: Type },
						settings.filter
					);
				}
				else {
					testSingleValue(
						value,
						(value as { [key: string]: Type })[settings.outputKey],
						value as Type,
						settings.filter as IMultiTestSettingsSingle<Type>['filter']
					);
				}
			}
			else if ('inputKey' in settings) {
				testSingleValueCollection(
					(value as { [key: string]: Type })[settings.inputKey],
					undefined,
					value as { [key: string]: Type },
					settings.filter as IMultiTestSettingsSingleCollection<Type>['filter']
				);
			}
			else {
				testSingleValue(
					value,
					undefined,
					value as Type,
					settings.filter as IMultiTestSettingsSingle<Type>['filter']
				);
			}
		});
	}
};
