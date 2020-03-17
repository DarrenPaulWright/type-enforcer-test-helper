# Type Enforcer Test Helper

> Test data and helper functions for type-enforcer and addons
>
> [![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="testMethod"></a>

## testMethod(settings, thisMethod, method)
> Test a chainable method function (methodArray, methodBoolean, etc.)


| Param | Type | Description |
| --- | --- | --- |
| settings | <code>Object</code> |  |
| settings.name | <code>Object</code> | The name used in type-enforcer namespaces for this type |
| settings.init | <code>Object</code> | The expected value returned by the method immediately after instantiation |
| settings.extraProps | <code>Object</code> | An object of extra properties to be passed in when the method is instantiated |
| settings.true | <code>Array</code> | An array of values that are valid for this method |
| settings.false | <code>Array</code> | An array of values that are NOT valid for this method |
| [settings.coerce] | <code>Array</code>, <code>false</code> |  |
| settings.coerce[].value | <code>\*</code> |  |
| settings.coerce[].coerced | <code>\*</code> |  |
| settings.coerceTrue | <code>Array</code> | An array of values that are coercible by this method |
| thisMethod | <code>function</code> | The function to test |
| method | <code>Object</code> | An object that includes this function |


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
