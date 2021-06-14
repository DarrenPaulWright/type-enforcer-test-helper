# Type Enforcer Test Helper

> Test data and helper functions for type-enforcer and addons
>
> [![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="multiTest"></a>

## multiTest(settings)
> Run multiple identical tests over a set of data.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| settings | <code>object</code> |  | Settings object. |
| settings.values | <code>object</code>, <code>Array</code> |  | The values to run tests against. |
| [settings.values2] | <code>object</code>, <code>Array</code> |  | Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array. |
| settings.test | <code>function</code> |  | The test to run against each value. Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Should not call assert, but return a value to be asserted against configured output. |
| [settings.filter] | <code>function</code> |  | Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test. |
| [settings.message] | <code>function</code> |  | Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability. |
| [settings.inputKey] | <code>string</code> |  | If values is an array of objects, this specifies which key to get the input value from. |
| [settings.outputKey] | <code>string</code> |  | If values is an array of objects, this specifies which key to get the expected output value from. |
| [settings.output] | <code>\*</code> |  | The expected output value of all tests. |
| [settings.eachPair] | <code>boolean</code> | <code>false</code> | Values must be an array, runs tests on every combination of two items from values. |
| [settings.assertion] | <code>string</code> | <code>&quot;&#x27;equal&#x27;&quot;</code> | The type-enforcer assert function to run against all tests. |


[npm]: https://img.shields.io/npm/v/type-enforcer-test-helper.svg
[npm-url]: https://npmjs.com/package/type-enforcer-test-helper
[deps]: https://david-dm.org/DarrenPaulWright/type-enforcer-test-helper.svg
[deps-url]: https://david-dm.org/DarrenPaulWright/type-enforcer-test-helper
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer-test-helper
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer-test-helper
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-test-helper/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-test-helper?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer-test-helper.svg
[license-url]: https://npmjs.com/package/type-enforcer-test-helper/LICENSE.md
