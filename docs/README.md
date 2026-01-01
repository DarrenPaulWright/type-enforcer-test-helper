**type-enforcer-test-helper**

***

# Type Enforcer Test Helper

> Test data and helper functions for type-enforcer and addons

<br><a name="Installation"></a>

## Installation
```
npm install type-enforcer-test-helper --save-dev
```

<br><a name="About"></a>

## About
This library consists of two things. First is a data set of variations of different data type instances and values, along with coercible values, many of which were hand picked from the [big-list-of-naughty-strings](https://github.com/minimaxir/big-list-of-naughty-strings). Second is a handful of functions to help in testing type-enforcer and type-enforcer addons.

<br>

- [Documentation](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/docs/README.md)

## Modules

| Module | Description |
| ------ | ------ |
| [\<internal\>](-internal-/README.md) | - |

## Classes

### TestClass

Defined in: [src/data/TestClass.ts:4](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/TestClass.ts#L4)

A simple class for testing things like instanceof

#### Constructors

##### Constructor

```ts
new TestClass(value?: unknown): TestClass;
```

Defined in: [src/data/TestClass.ts:7](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/TestClass.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value?` | `unknown` |

###### Returns

[`TestClass`](#testclass)

#### Accessors

##### value

###### Get Signature

```ts
get value(): unknown;
```

Defined in: [src/data/TestClass.ts:11](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/TestClass.ts#L11)

###### Returns

`unknown`

###### Set Signature

```ts
set value(value: unknown): void;
```

Defined in: [src/data/TestClass.ts:15](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/TestClass.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

###### Returns

`void`

## Interfaces

### TestData

Defined in: [src/data/testData.ts:33](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L33)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="coercefalse"></a> `coerceFalse` | `unknown`[] | [src/data/testData.ts:40](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L40) |
| <a id="coercetrue"></a> `coerceTrue` | `unknown`[] | [src/data/testData.ts:39](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L39) |
| <a id="extraarg"></a> `extraArg?` | `T` | [src/data/testData.ts:41](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L41) |
| <a id="false"></a> `false` | `unknown`[] | [src/data/testData.ts:38](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L38) |
| <a id="name"></a> `name` | \| `"string"` \| `"number"` \| `"boolean"` \| `"symbol"` \| `"object"` \| `"function"` \| `"map"` \| `"array"` \| `"date"` \| `"float"` \| `"instanceOf"` \| `"integer"` \| `"json"` \| `"promise"` \| `"regExp"` \| `"set"` \| `"weakMap"` \| `"weakSet"` | [src/data/testData.ts:36](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L36) |
| <a id="skip"></a> `skip?` | ( \| `"string"` \| `"number"` \| `"boolean"` \| `"symbol"` \| `"object"` \| `"function"` \| `"map"` \| `"array"` \| `"date"` \| `"float"` \| `"instanceOf"` \| `"integer"` \| `"json"` \| `"promise"` \| `"regExp"` \| `"set"` \| `"weakMap"` \| `"weakSet"`)[] | [src/data/testData.ts:35](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L35) |
| <a id="true"></a> `true` | `T`[] | [src/data/testData.ts:37](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L37) |
| <a id="value-1"></a> `value?` | `unknown` | [src/data/testData.ts:34](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L34) |

## Variables

### arrayData

```ts
const arrayData: TestData<unknown[]>;
```

Defined in: [src/data/testData.ts:44](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L44)

***

### booleanData

```ts
const booleanData: TestData<boolean>;
```

Defined in: [src/data/testData.ts:53](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L53)

***

### dateData

```ts
const dateData: TestData<Date>;
```

Defined in: [src/data/testData.ts:62](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L62)

***

### floatData

```ts
const floatData: TestData<number>;
```

Defined in: [src/data/testData.ts:106](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L106)

***

### functionData

```ts
const functionData: TestData<Function>;
```

Defined in: [src/data/testData.ts:71](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L71)

***

### instanceData

```ts
const instanceData: TestData<unknown>;
```

Defined in: [src/data/testData.ts:80](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L80)

***

### integerData

```ts
const integerData: TestData<number>;
```

Defined in: [src/data/testData.ts:89](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L89)

***

### jsonData

```ts
const jsonData: TestData<unknown>;
```

Defined in: [src/data/testData.ts:98](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L98)

***

### mapData

```ts
const mapData: TestData<Map<unknown, unknown>>;
```

Defined in: [src/data/testData.ts:125](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L125)

***

### multiTest()

```ts
multiTest: <Type>(settings: IMultiTestSettings<Type>) => void;
```

Defined in: [src/multiTest.ts:210](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L210)

Run multiple identical tests over a set of data.

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `settings` | [`IMultiTestSettings`](-internal-/README.md#imultitestsettings)\<`Type`\> |

#### Returns

`void`

***

### numberData

```ts
const numberData: TestData<number>;
```

Defined in: [src/data/testData.ts:115](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L115)

***

### objectData

```ts
const objectData: TestData<Object>;
```

Defined in: [src/data/testData.ts:135](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L135)

***

### promiseData

```ts
const promiseData: TestData<Promise<unknown>>;
```

Defined in: [src/data/testData.ts:144](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L144)

***

### regExpData

```ts
const regExpData: TestData<RegExp>;
```

Defined in: [src/data/testData.ts:153](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L153)

***

### setData

```ts
const setData: TestData<Set<unknown>>;
```

Defined in: [src/data/testData.ts:162](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L162)

***

### stringData

```ts
const stringData: TestData<string>;
```

Defined in: [src/data/testData.ts:171](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L171)

***

### symbolData

```ts
const symbolData: TestData<Symbol>;
```

Defined in: [src/data/testData.ts:180](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L180)

***

### testTypes

```ts
const testTypes: TestData<unknown>[];
```

Defined in: [src/data/testData.ts:207](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L207)

***

### testValues

```ts
const testValues: unknown[];
```

Defined in: [src/data/testValues.ts:197](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L197)

A concatenated array of all the "valid" arrays.

***

### validArrays

```ts
const validArrays: unknown[][];
```

Defined in: [src/data/testValues.ts:7](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L7)

***

### validBooleans

```ts
const validBooleans: boolean[];
```

Defined in: [src/data/testValues.ts:21](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L21)

***

### validDates

```ts
const validDates: Date[];
```

Defined in: [src/data/testValues.ts:34](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L34)

***

### validFloats

```ts
const validFloats: number[];
```

Defined in: [src/data/testValues.ts:81](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L81)

***

### validFunctions

```ts
const validFunctions: Function[];
```

Defined in: [src/data/testValues.ts:44](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L44)

***

### validInfinities

```ts
const validInfinities: number[];
```

Defined in: [src/data/testValues.ts:95](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L95)

***

### validInstances

```ts
const validInstances: unknown[];
```

Defined in: [src/data/testValues.ts:58](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L58)

***

### validIntegers

```ts
const validIntegers: number[];
```

Defined in: [src/data/testValues.ts:68](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L68)

***

### validMaps

```ts
const validMaps: Map<unknown, unknown>[];
```

Defined in: [src/data/testValues.ts:104](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L104)

***

### validNots

```ts
const validNots: (undefined | null | typeof NaN)[];
```

Defined in: [src/data/testValues.ts:192](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L192)

Undefined, null, and NaN

***

### validObjects

```ts
const validObjects: Object[];
```

Defined in: [src/data/testValues.ts:113](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L113)

***

### validPromises

```ts
const validPromises: Promise<unknown>[];
```

Defined in: [src/data/testValues.ts:124](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L124)

***

### validRegExps

```ts
const validRegExps: RegExp[];
```

Defined in: [src/data/testValues.ts:134](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L134)

***

### validSets

```ts
const validSets: Set<unknown>[];
```

Defined in: [src/data/testValues.ts:144](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L144)

***

### validStrings

```ts
const validStrings: string[];
```

Defined in: [src/data/testValues.ts:153](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L153)

***

### validSymbols

```ts
const validSymbols: Symbol[];
```

Defined in: [src/data/testValues.ts:165](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L165)

***

### validWeakMaps

```ts
const validWeakMaps: WeakMap<WeakRef<WeakKey>, unknown>[];
```

Defined in: [src/data/testValues.ts:174](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L174)

***

### validWeakSets

```ts
const validWeakSets: WeakSet<WeakRef<WeakKey>>[];
```

Defined in: [src/data/testValues.ts:183](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testValues.ts#L183)

***

### weakMapData

```ts
const weakMapData: TestData<WeakMap<WeakRef<WeakKey>, unknown>>;
```

Defined in: [src/data/testData.ts:189](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L189)

***

### weakSetData

```ts
const weakSetData: TestData<WeakSet<WeakRef<WeakKey>>>;
```

Defined in: [src/data/testData.ts:198](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/data/testData.ts#L198)

## Functions

### testCheck()

```ts
function testCheck(
   data: TestData<unknown>, 
   check: (value: unknown, coerce?: boolean) => boolean, 
   is: typeof _default): void;
```

Defined in: [src/testCheck.ts:9](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testCheck.ts#L9)

Test a type-enforcer check function (isArray, isBoolean, etc.).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`TestData`](#testdata)\<`unknown`\> |
| `check` | (`value`: `unknown`, `coerce?`: `boolean`) => `boolean` |
| `is` | *typeof* [`_default`](-internal-/namespaces/default.md) |

#### Returns

`void`

***

### testEnforce()

```ts
function testEnforce<Type>(
   data: TestData<Type>, 
   enforcer: any, 
   enforce: any, 
   coercer: any): void;
```

Defined in: [src/testEnforce.ts:10](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testEnforce.ts#L10)

Test an enforce function (enforceArray, enforceBoolean, etc.).

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`TestData`](#testdata)\<`Type`\> |
| `enforcer` | `any` |
| `enforce` | `any` |
| `coercer` | `any` |

#### Returns

`void`

***

### testMethod()

```ts
function testMethod(
   this: object, 
   settings: ITestMethodSettings, 
   thisMethod: Function, 
   method: {
[key: string]: unknown;
}): void;
```

Defined in: [src/testMethod.ts:54](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L54)

Test a chainable method function (methodArray, methodBoolean, etc.).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `object` |
| `settings` | [`ITestMethodSettings`](-internal-/README.md#itestmethodsettings) |
| `thisMethod` | `Function` |
| `method` | \{ \[`key`: `string`\]: `unknown`; \} |

#### Returns

`void`
