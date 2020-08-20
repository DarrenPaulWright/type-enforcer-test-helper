# Type Enforcer Test Helper

> Test data and helper functions for type-enforcer and addons
>
> [![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]

<br><a name="Installation"></a>

## Installation
```
npm install type-enforcer-test-helper
```

<br><a name="About"></a>

## About
This library consists of two things. First is a data set of variations of different data type instances and values, along with coercible values, many of which were hand picked from the [big-list-of-naughty-strings](https://github.com/minimaxir/big-list-of-naughty-strings). Second is a handful of functions to help in testing type-enforcer and type-enforcer addons.


<br>

## Classes

<dl>
<dt><a href="docs/TestClass.md">TestClass</a></dt>
<dd><p>A simple class for testing things like instanceof</p>
</dd>
</dl>

<br>

## Constants

<dl>
<dt><a href="docs/testTypes.md">testTypes</a> : <code>Array</code></dt>
<dd><p>An array of all the test type objects (arrayData, booleanData, etc.)</p>
</dd>
<dt><a href="docs/arrayData.md">arrayData</a> : <code>Object</code></dt>
<dd><p>A data set for testing Arrays</p>
</dd>
<dt><a href="docs/booleanData.md">booleanData</a> : <code>Object</code></dt>
<dd><p>A data set for testing Booleans</p>
</dd>
<dt><a href="docs/dateData.md">dateData</a> : <code>Object</code></dt>
<dd><p>A data set for testing Dates</p>
</dd>
<dt><a href="docs/functionData.md">functionData</a> : <code>Object</code></dt>
<dd><p>A data set for testing Functions</p>
</dd>
<dt><a href="docs/instanceData.md">instanceData</a> : <code>Object</code></dt>
<dd><p>A data set for testing instanceOf</p>
</dd>
<dt><a href="docs/integerData.md">integerData</a> : <code>Object</code></dt>
<dd><p>A data set for testing integers</p>
</dd>
<dt><a href="docs/jsonData.md">jsonData</a> : <code>Object</code></dt>
<dd><p>A data set for testing JSON</p>
</dd>
<dt><a href="docs/floatData.md">floatData</a> : <code>Object</code></dt>
<dd><p>A data set for testing integers</p>
</dd>
<dt><a href="docs/numberData.md">numberData</a> : <code>Object</code></dt>
<dd><p>A data set for testing numbers</p>
</dd>
<dt><a href="docs/mapData.md">mapData</a> : <code>Object</code></dt>
<dd><p>A data set for testing Maps</p>
</dd>
<dt><a href="docs/objectData.md">objectData</a> : <code>Object</code></dt>
<dd><p>A data set for testing plain Objects</p>
</dd>
<dt><a href="docs/promiseData.md">promiseData</a> : <code>Object</code></dt>
<dd><p>A data set for testing Promises</p>
</dd>
<dt><a href="docs/regExpData.md">regExpData</a> : <code>Object</code></dt>
<dd><p>A data set for testing RegExps</p>
</dd>
<dt><a href="docs/setData.md">setData</a> : <code>Object</code></dt>
<dd><p>A data set for testing Sets</p>
</dd>
<dt><a href="docs/stringData.md">stringData</a> : <code>Object</code></dt>
<dd><p>A data set for testing Strings</p>
</dd>
<dt><a href="docs/symbolData.md">symbolData</a> : <code>Object</code></dt>
<dd><p>A data set for testing Symbols</p>
</dd>
<dt><a href="docs/weakMapData.md">weakMapData</a> : <code>Object</code></dt>
<dd><p>A data set for testing WeakMaps</p>
</dd>
<dt><a href="docs/weakSetData.md">weakSetData</a> : <code>Object</code></dt>
<dd><p>A data set for testing WeakSets</p>
</dd>
<dt><a href="docs/testValues.md">testValues</a> : <code>Array</code></dt>
<dd><p>A concatenated array of all the &quot;valid&quot; arrays.</p>
</dd>
<dt><a href="docs/validArrays.md">validArrays</a> : <code>Array</code></dt>
<dd><p>Arrays instantiated in different ways or with different values.</p>
</dd>
<dt><a href="docs/validBooleans.md">validBooleans</a> : <code>Array</code></dt>
<dd><p>Booleans instantiated in different ways or with different values.</p>
</dd>
<dt><a href="docs/validDates.md">validDates</a> : <code>Array</code></dt>
<dd><p>Dates instantiated in different ways or with different values.</p>
</dd>
<dt><a href="docs/validFunctions.md">validFunctions</a> : <code>Array</code></dt>
<dd><p>Functions instantiated in different ways.</p>
</dd>
<dt><a href="docs/validInstances.md">validInstances</a> : <code>Array</code></dt>
<dd><p>Different instances of TestClass with different values.</p>
</dd>
<dt><a href="docs/validIntegers.md">validIntegers</a> : <code>Array</code></dt>
<dd><p>Integers instantiated in different ways or with different values.</p>
</dd>
<dt><a href="docs/validFloats.md">validFloats</a> : <code>Array</code></dt>
<dd><p>Floats instantiated in different ways or with different values.</p>
</dd>
<dt><a href="docs/validInfinities.md">validInfinities</a> : <code>Array</code></dt>
<dd><p>Infinity and -Infinity</p>
</dd>
<dt><a href="docs/validMaps.md">validMaps</a> : <code>Array</code></dt>
<dd><p>An empty Map and a Map with data.</p>
</dd>
<dt><a href="docs/validObjects.md">validObjects</a> : <code>Array</code></dt>
<dd><p>Plain objects instantiated in different ways or with different values.</p>
</dd>
<dt><a href="docs/validPromises.md">validPromises</a> : <code>Array</code></dt>
<dd><p>A normal Promise and Promise.all.</p>
</dd>
<dt><a href="docs/validRegExps.md">validRegExps</a> : <code>Array</code></dt>
<dd><p>RegExps instantiated in different ways or with different values.</p>
</dd>
<dt><a href="docs/validSets.md">validSets</a> : <code>Array</code></dt>
<dd><p>An empty Set and a Set with data.</p>
</dd>
<dt><a href="docs/validStrings.md">validStrings</a> : <code>Array</code></dt>
<dd><p>Strings instantiated in different ways or with different values.</p>
</dd>
<dt><a href="docs/validSymbols.md">validSymbols</a> : <code>Array</code></dt>
<dd><p>A Symbol with a label and one without.</p>
</dd>
<dt><a href="docs/validWeakMaps.md">validWeakMaps</a> : <code>Array</code></dt>
<dd><p>An empty WeakMap and a WeakMap with data.</p>
</dd>
<dt><a href="docs/validWeakSets.md">validWeakSets</a> : <code>Array</code></dt>
<dd><p>An empty WeakSet and a WeakSet with data.</p>
</dd>
<dt><a href="docs/validNots.md">validNots</a> : <code>Array</code></dt>
<dd><p>undefined, null, and NaN</p>
</dd>
</dl>

<br>

## Functions

<dl>
<dt><a href="docs/multiTest.md">multiTest(settings)</a></dt>
<dd><p>Run multiple identical tests over a set of data</p>
</dd>
<dt><a href="docs/testCheck.md">testCheck(data, check, is)</a></dt>
<dd><p>Test a check function (isArray, isBoolean, etc.)</p>
</dd>
<dt><a href="docs/testEnforce.md">testEnforce(data, enforcer, enforce, coercer)</a></dt>
<dd><p>Test an enforce function (enforceArray, enforceBoolean, etc.)</p>
</dd>
<dt><a href="docs/testMethod.md">testMethod(settings, thisMethod, method)</a></dt>
<dd><p>Test a chainable method function (methodArray, methodBoolean, etc.)</p>
</dd>
</dl>

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
