import displayValue from 'display-value';
import { powerset } from 'object-agent';
import { assert } from 'type-enforcer';

const startCase = (string) => string.split(' ')
	.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
	.join(' ');

const TEST_METHOD = 'testMethod';
const everyMethodVariant = powerset(['get', 'other', 'before', 'set'])
	.map((combination) => {
		return {
			name: TEST_METHOD + combination.map(startCase).join(''),
			options: combination
		};
	});

const processOutput = (value, options = {}) => {
	return (options.stringify && value && value.toString) ? value.toString() : value;
};

const beforeSymbol = Symbol();
const setSymbol = Symbol();
const getSymbol = Symbol();

/**
 * Test a chainable method function (methodArray, methodBoolean, etc.)
 *
 * @function testMethod
 *
 * @arg {Object} settings
 * @arg {Object} settings.name - The name used in type-enforcer namespaces for this type
 * @arg {Object} settings.init - The expected value returned by the method immediately after instantiation
 * @arg {Object} settings.extraProps - An object of extra properties to be passed in when the method is instantiated
 * @arg {Array} settings.true - An array of values that are valid for this method
 * @arg {Array} settings.false - An array of values that are NOT valid for this method
 * @arg {Array|false} [settings.coerce]
 * @arg {*} settings.coerce[].value
 * @arg {*} settings.coerce[].coerced
 * @arg {Array} settings.coerceTrue - An array of values that are coercible by this method
 * @arg {Function} thisMethod - The function to test
 * @arg {Object} method - An object that includes this function
 */
export default function(settings, thisMethod, method) {
	let testBefore = '';
	let testSet = '';
	let testContext;
	const testBeforeCallback = function(oldValue) {
		testContext = this;
		testBefore = processOutput(oldValue, settings.extraProps);
	};
	const testSetCallback = function(newValue) {
		testContext = this;
		testSet = processOutput(newValue, settings.extraProps);
	};
	const testGetCallback = function() {
		testContext = this;
		return settings.init;
	};
	const testGetCallbackWithTestItem = function() {
		testContext = this;
		return settings.true[0];
	};

	beforeEach(() => {
		testBefore = null;
		testSet = null;
		testContext = null;
	});

	const runTests = (TestConstructor, init, testItem, coerce) => {
		everyMethodVariant.forEach((methodData) => {
			const methodName = methodData.name;
			const hasGet = methodData.options.includes('get');
			const hasOther = methodData.options.includes('other');
			const hasBefore = methodData.options.includes('before');
			const hasSet = methodData.options.includes('set');

			describe('(' + methodName.replace('testMethod', '') + ')', () => {
				it('should return the init value', () => {
					const testConstructor = new TestConstructor();

					assert.equal(testConstructor[methodName](), init);
				});

				it('should return "this" after a value is set', () => {
					const testConstructor = new TestConstructor();

					const that = testConstructor[methodName](testItem);

					assert.is(that, testConstructor);
				});

				if (hasGet) {
					it('should return whatever the "get" callback returns', () => {
						const testConstructor = new TestConstructor();

						testConstructor[methodName](testItem);

						assert.equal(testConstructor[methodName](), init);
						assert.is(testConstructor, testContext);
					});
				}
				else {
					it('should return a set value', () => {
						const testConstructor = new TestConstructor();

						testConstructor[methodName](testItem);

						assert.equal(testConstructor[methodName](), testItem);
					});
				}

				if (hasSet) {
					it('should execute the "set" callback when the value is set', () => {
						const testConstructor = new TestConstructor();
						testSet = '';

						testConstructor[methodName](testItem);

						assert.equal(testSet, testItem);
						assert.is(testConstructor, testContext);
					});

					it('should execute the "set" callback when the value is set to the current value and a second parameter of "true" is provided', () => {
						const testConstructor = new TestConstructor();
						testSet = '';

						testConstructor[methodName](testItem);
						testSet = '';
						testConstructor[methodName](testItem, true);

						assert.equal(testSet, testItem);
					});

					if (!hasGet) {
						it('should NOT execute the "set" callback when the value is set to the current value', () => {
							const testConstructor = new TestConstructor();
							testSet = '';

							testConstructor[methodName](testItem);
							testSet = '';
							testConstructor[methodName](testItem);

							assert.equal(testSet, '');
						});
					}
				}

				if (hasBefore) {
					it('should call the "before" callback with the init value when a value is set', () => {
						const testConstructor = new TestConstructor();
						testBefore = '';

						testConstructor[methodName](testItem);

						assert.equal(testBefore, init);
						assert.is(testConstructor, testContext);
					});
				}

				if (hasOther) {
					if (!hasGet) {
						it('should be able to be set to other', () => {
							const testConstructor = new TestConstructor();

							testConstructor[methodName](undefined);

							assert.equal(testConstructor[methodName](), undefined);
						});
					}
					else if (hasSet && init) {
						it('should be able to be set to other', () => {
							const testConstructor = new TestConstructor();
							testSet = '';

							testConstructor[methodName](undefined);

							assert.equal(testSet, undefined);
						});
					}
					else if (hasBefore && !hasGet && init) {
						it('should be able to be set to other', () => {
							const testConstructor = new TestConstructor();
							testBefore = '';

							testConstructor[methodName](undefined);
							testConstructor[methodName](testItem);

							assert.equal(testBefore, undefined);
						});
					}
					else if (hasBefore && hasGet && init) {
						it('should be able to be set to other', () => {
							const testConstructor = new TestConstructor();
							testBefore = '';

							testConstructor[methodName](undefined);

							assert.equal(testBefore, init);
						});
					}
				}

				coerce.forEach((item) => {
					if (!hasGet) {
						it('should coerce ' + displayValue(item.value) + ' to ' + displayValue(item.coerced), () => {
							const testConstructor = new TestConstructor();

							testConstructor[methodName](item.value);

							assert.equal(testConstructor[methodName](), item.coerced);
						});
					}
					else if (hasSet) {
						it('should coerce ' + displayValue(item.value) + ' to ' + displayValue(item.coerced), () => {
							const testConstructor = new TestConstructor();
							testSet = '';

							testConstructor[methodName](item.value);

							assert.equal(testSet, item.coerced);
						});
					}
				});
			});
		});

		it('should not set the value of another method with the same variant', () => {
			const testConstructor = new TestConstructor();

			testConstructor[TEST_METHOD](testItem);

			assert.equal(testConstructor[TEST_METHOD](), testItem);
			assert.equal(testConstructor[TEST_METHOD + '2'](), init);
		});
	};

	const getOptionCallback = (option, withTestItem, isReassigned, isSymbol) => {
		if (isSymbol) {
			switch (option) {
				case 'get':
					return withTestItem ? testGetCallbackWithTestItem : getSymbol;
				case 'other':
					return undefined;
				case 'before':
					return beforeSymbol;
				case 'set':
					return setSymbol;
			}
		}
		if (isReassigned) {
			switch (option) {
				case 'get':
					return withTestItem ? testGetCallbackWithTestItem : 'testGetCallback';
				case 'other':
					return undefined;
				case 'before':
					return 'testBeforeCallback';
				case 'set':
					return 'testSetCallback';
			}
		}
		switch (option) {
			case 'get':
				return withTestItem ? testGetCallbackWithTestItem : testGetCallback;
			case 'other':
				return undefined;
			case 'before':
				return testBeforeCallback;
			case 'set':
				return testSetCallback;
		}
	};

	const addMethodsTo = (applyTo, extraProps = {}, isReassigned, isSymbol) => {
		everyMethodVariant.forEach((methodData) => {
			const options = {
				...settings.extraProps,
				...extraProps
			};

			methodData.options.forEach((option) => {
				options[option] = getOptionCallback(option, extraProps.init, isReassigned, isSymbol);
			});

			applyTo[methodData.name] = method[settings.name](options);
		});

		applyTo[TEST_METHOD + '2'] = method[settings.name]({
			...settings.extraProps,
			...extraProps
		});
	};

	it('should exist in the exported "method" object', () => {
		assert.equal(thisMethod, method[settings.name]);
	});

	describe('(prototype)', () => {
		class TestConstructor1 {
		}

		addMethodsTo(TestConstructor1.prototype);

		runTests(TestConstructor1, settings.init, settings.true[0], settings.coerce || []);
	});

	describe('(prototype) (reassigned methods string property)', () => {
		class TestConstructor1 {
			constructor() {
				this.testBeforeCallback = testBeforeCallback;
				this.testSetCallback = testSetCallback;
				this.testGetCallback = testGetCallback;
			}
		}

		addMethodsTo(TestConstructor1.prototype, {}, true);

		runTests(TestConstructor1, settings.init, settings.true[0], settings.coerce || []);
	});

	describe('(prototype) (reassigned methods symbol property)', () => {
		class TestConstructor1 {
			constructor() {
				this[beforeSymbol] = testBeforeCallback;
				this[setSymbol] = testSetCallback;
				this[getSymbol] = testGetCallback;
			}
		}

		addMethodsTo(TestConstructor1.prototype, {}, true, true);

		runTests(TestConstructor1, settings.init, settings.true[0], settings.coerce || []);
	});

	describe('(prototype) (reassigned method string proto)', () => {
		class TestConstructor1 {
		}

		Object.assign(TestConstructor1.prototype, {
			testBeforeCallback: testBeforeCallback,
			testSetCallback: testSetCallback,
			testGetCallback: testGetCallback
		});

		addMethodsTo(TestConstructor1.prototype, {}, true);

		runTests(TestConstructor1, settings.init, settings.true[0], settings.coerce || []);
	});

	describe('(prototype) (reassigned method symbol proto)', () => {
		class TestConstructor1 {
		}

		Object.assign(TestConstructor1.prototype, {
			[beforeSymbol]: testBeforeCallback,
			[setSymbol]: testSetCallback,
			[getSymbol]: testGetCallback
		});

		addMethodsTo(TestConstructor1.prototype, {}, true, true);

		runTests(TestConstructor1, settings.init, settings.true[0], settings.coerce || []);
	});

	describe('(prototype) (init)', () => {
		class TestConstructor2 {
		}

		addMethodsTo(TestConstructor2.prototype, {
			init: settings.true[0]
		});

		runTests(TestConstructor2, settings.true[0], settings.true[1], settings.coerce || []);

		settings.false.forEach((falseValue) => {
			it(`should return ${displayValue(settings.true[0])} after attempting to set to ${displayValue(falseValue)}`, () => {
				const testConstructor = new TestConstructor2();

				testConstructor.testMethod(falseValue);

				assert.equal(testConstructor.testMethod(), settings.true[0]);
			});
		});
	});

	describe('(property)', () => {
		const TestConstructor3 = function() {
			addMethodsTo(this);
		};

		runTests(TestConstructor3, settings.init, settings.true[0], settings.coerce || []);
	});

	describe('(property) (init)', () => {
		const TestConstructor4 = function() {
			addMethodsTo(this, {
				init: settings.true[0]
			});
		};

		runTests(TestConstructor4, settings.true[0], settings.true[1], settings.coerce || []);
	});

	if (settings.coerce !== false) {
		describe('(prototype) (coerce=true)', () => {
			class TestConstructor2 {
			}

			addMethodsTo(TestConstructor2.prototype, {
				init: undefined,
				coerce: true
			});

			settings.coerceTrue.forEach((value) => {
				it(`should return coerced ${displayValue(value)} after attempting to set to ${displayValue(value)}`, () => {
					const testConstructor = new TestConstructor2();

					testConstructor.testMethod(value);

					assert.notIs(testConstructor.testMethod(), undefined);
				});
			});
		});

		describe('(prototype) (coerce=false)', () => {
			class TestConstructor2 {
			}

			addMethodsTo(TestConstructor2.prototype, {
				init: undefined,
				coerce: false
			});

			settings.coerceTrue.forEach((value) => {
				it(`should return coerced ${displayValue(value)} after attempting to set to ${displayValue(value)}`, () => {
					const testConstructor = new TestConstructor2();

					testConstructor.testMethod(value);

					assert.is(testConstructor.testMethod(), undefined);
				});
			});
		});
	}
};
