# Type Enforcer Test Helper

[![Greenkeeper badge](https://badges.greenkeeper.io/DarrenPaulWright/type-enforcer-test-helper.svg)](https://greenkeeper.io/)

> Test data and helper functions for type-enforcer and addons
>
> [![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="multiTest"></a>

## multiTest(settings)
> Run multiple identical tests over a set of data


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| settings | <code>Object</code> |  |  |
| settings.values | <code>Object</code>, <code>Array</code> |  |  |
| [settings.values2] | <code>Object</code>, <code>Array</code> |  | Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array. |
| settings.test | <code>function</code> |  |  |
| [settings.filter] | <code>function</code> |  |  |
| [settings.message] | <code>function</code> | <code>&#x60;should return ${output} when set to ${input}&#x60;</code> |  |
| [settings.inputKey] | <code>String</code> |  |  |
| [settings.outputKey] | <code>String</code> |  |  |
| [settings.output] | <code>\*</code> |  |  |
| [settings.eachPair] | <code>Boolean</code> | <code>false</code> | values must be an array, runs tests on every combination of two items from values |
| [settings.assertion] | <code>String</code> | <code>&#x27;equal&#x27;</code> |  |


[npm]: https://img.shields.io/npm/v/type-enforcer-test-helper.svg
[npm-url]: https://npmjs.com/package/type-enforcer-test-helper
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer-test-helper.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer-test-helper
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer-test-helper
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer-test-helper
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-test-helper/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-test-helper?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer-test-helper.svg
[license-url]: https://npmjs.com/package/type-enforcer-test-helper/LICENSE.md
