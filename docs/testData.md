# Type Enforcer Test Helper

> Test data and helper functions for type-enforcer and addons
>
> [![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="testTypes"></a>

## testTypes : <code>Array</code>
> An array of all the test type objects (arrayData, booleanData, etc.)


<br><a name="arrayData"></a>

## arrayData : <code>Object</code>
> A data set for testing Arrays

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Array constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validArrays](testValues.md#validArrays) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validArrays |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="booleanData"></a>

## booleanData : <code>Object</code>
> A data set for testing Booleans

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Boolean constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validBooleans](testValues.md#validBooleans) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validBooleans |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="dateData"></a>

## dateData : <code>Object</code>
> A data set for testing Dates

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Date constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validDates](testValues.md#validDates) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validDates |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="functionData"></a>

## functionData : <code>Object</code>
> A data set for testing Functions

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Function constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validFunctions](testValues.md#validFunctions) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validFunctions |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="instanceData"></a>

## instanceData : <code>Object</code>
> A data set for testing instanceOf

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | [TestClass](TestClass.md) |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validInstances](testValues.md#validInstances) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validInstances |
| coerceTrue | <code>Array</code> | Included for consistency |
| coerceFalse | <code>Array</code> | Included for consistency |


<br><a name="integerData"></a>

## integerData : <code>Object</code>
> A data set for testing integers

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| skip | <code>Array</code> | The "name" property of other test objects that will produce false negatives if tested against this objects data |
| true | <code>Array</code> | [validIntegers](testValues.md#validIntegers) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validIntegers and validInfinities |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type. |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="jsonData"></a>

## jsonData : <code>Object</code>
> A data set for testing JSON

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | Values that don't throw when passed through JSON.parse() |
| false | <code>Array</code> | Values that DO throw when passed through JSON.parse() |
| coerceTrue | <code>Array</code> | Included for consistency |
| coerceFalse | <code>Array</code> | Included for consistency |


<br><a name="floatData"></a>

## floatData : <code>Object</code>
> A data set for testing integers

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| skip | <code>Array</code> | The "name" property of other test objects that will produce false negatives if tested against this objects data |
| true | <code>Array</code> | [validFloats](testValues.md#validFloats) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validFloats |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="numberData"></a>

## numberData : <code>Object</code>
> A data set for testing numbers

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Number constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| skip | <code>Array</code> | The "name" property of other test objects that will produce false negatives if tested against this objects data |
| true | <code>Array</code> | [validFloats](testValues.md#validFloats) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validFloats |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="mapData"></a>

## mapData : <code>Object</code>
> A data set for testing Maps

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Map constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validMaps](testValues.md#validMaps) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validMaps |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="objectData"></a>

## objectData : <code>Object</code>
> A data set for testing plain Objects

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Object constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validObjects](testValues.md#validObjects) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validObjects |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="promiseData"></a>

## promiseData : <code>Object</code>
> A data set for testing Promises

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Promise constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validPromises](testValues.md#validPromises) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validPromises |
| coerceTrue | <code>Array</code> | [validFunctions](testValues.md#validFunctions) |
| coerceFalse | <code>Array</code> | [testValues](testValues.md#testValues) minus validPromises and validFunctions |


<br><a name="regExpData"></a>

## regExpData : <code>Object</code>
> A data set for testing RegExps

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | RegExp constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validRegExps](testValues.md#validRegExps) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validRegExps |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="setData"></a>

## setData : <code>Object</code>
> A data set for testing Sets

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Set constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validSets](testValues.md#validSets) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validSets |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="stringData"></a>

## stringData : <code>Object</code>
> A data set for testing Strings

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | String constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validStrings](testValues.md#validStrings) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validStrings |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="symbolData"></a>

## symbolData : <code>Object</code>
> A data set for testing Symbols

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Symbol constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validSymbols](testValues.md#validSymbols) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validSymbols |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="weakMapData"></a>

## weakMapData : <code>Object</code>
> A data set for testing WeakMaps

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | WeakMap constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validWeakMaps](testValues.md#validWeakMaps) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validWeakMaps |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


<br><a name="weakSetData"></a>

## weakSetData : <code>Object</code>
> A data set for testing WeakSets

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | WeakSet constructor |
| name | <code>String</code> | The name used in type-enforcer namespaces for this type |
| true | <code>Array</code> | [validWeakSets](testValues.md#validWeakSets) |
| false | <code>Array</code> | [testValues](testValues.md#testValues) minus validWeakSets |
| coerceTrue | <code>Array</code> | Values that can be coerced to this type |
| coerceFalse | <code>Array</code> | Values that cannot be coerced to this type |


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
