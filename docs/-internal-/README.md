[**type-enforcer-test-helper**](../README.md)

***

[type-enforcer-test-helper](../README.md) / \<internal\>

# \<internal\>

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [\_default](namespaces/default.md) | - |

## Interfaces

### ExtraProps

Defined in: [src/testMethod.ts:10](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L10)

#### Indexable

```ts
[key: string]: unknown
```

***

### IMultiTestSettingsObject

Defined in: [src/multiTest.ts:9](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L9)

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="assertion"></a> `assertion?` | \| `"string"` \| `"number"` \| `"boolean"` \| `"symbol"` \| `"object"` \| `"function"` \| `"map"` \| `"array"` \| `"date"` \| `"float"` \| `"instanceOf"` \| `"integer"` \| `"json"` \| `"promise"` \| `"regExp"` \| `"set"` \| `"weakMap"` \| `"weakSet"` \| `"is"` \| `"notIs"` \| `"equal"` \| `"notEqual"` \| `"moreThan"` \| `"atLeast"` \| `"lessThan"` \| `"atMost"` \| `"throws"` \| `"notThrows"` \| `"true"` \| `"false"` | The type-enforcer assert function to run against all tests. | [src/multiTest.ts:33](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L33) |
| <a id="filter"></a> `filter?` | (`value`: `unknown`) => `boolean` | Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test. | [src/multiTest.ts:21](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L21) |
| <a id="message"></a> `message?` | (`input`: `unknown`, `output`: `unknown`) => `string` | Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability. | [src/multiTest.ts:25](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L25) |
| <a id="output"></a> `output?` | `unknown` | The expected output value of all tests. | [src/multiTest.ts:29](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L29) |
| <a id="test"></a> `test` | (`value`: `Type`) => `unknown` | Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array. | [src/multiTest.ts:17](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L17) |
| <a id="values"></a> `values` | [`IMultiTestValuesObject`](#imultitestvaluesobject)\<`Type`\> | The values to run tests against. | [src/multiTest.ts:13](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L13) |

***

### IMultiTestSettingsPairs

Defined in: [src/multiTest.ts:36](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L36)

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="assertion-1"></a> `assertion?` | \| `"string"` \| `"number"` \| `"boolean"` \| `"symbol"` \| `"object"` \| `"function"` \| `"map"` \| `"array"` \| `"date"` \| `"float"` \| `"instanceOf"` \| `"integer"` \| `"json"` \| `"promise"` \| `"regExp"` \| `"set"` \| `"weakMap"` \| `"weakSet"` \| `"is"` \| `"notIs"` \| `"equal"` \| `"notEqual"` \| `"moreThan"` \| `"atLeast"` \| `"lessThan"` \| `"atMost"` \| `"throws"` \| `"notThrows"` \| `"true"` \| `"false"` | The type-enforcer assert function to run against all tests. | [src/multiTest.ts:64](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L64) |
| <a id="eachpair"></a> `eachPair` | `true` | Values must be an array, runs tests on every combination of two items from values. | [src/multiTest.ts:68](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L68) |
| <a id="filter-1"></a> `filter?` | (`value`: `Type`, `value2`: `Type`) => `boolean` | Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test. | [src/multiTest.ts:52](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L52) |
| <a id="message-1"></a> `message?` | (`input`: `unknown`, `output`: `unknown`) => `string` | Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability. | [src/multiTest.ts:56](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L56) |
| <a id="output-1"></a> `output?` | `unknown` | The expected output value of all tests. | [src/multiTest.ts:60](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L60) |
| <a id="test-1"></a> `test` | (`value1`: `Type`, `value2`: `Type`) => `unknown` | The test to run against each value. Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Should not call assert, but return a value to be asserted against configured output. | [src/multiTest.ts:48](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L48) |
| <a id="values-1"></a> `values` | `Type`[] | The values to run tests against. | [src/multiTest.ts:40](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L40) |
| <a id="values2"></a> `values2` | `Type`[] | Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array. | [src/multiTest.ts:44](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L44) |

***

### IMultiTestSettingsPairsCollection

Defined in: [src/multiTest.ts:71](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L71)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Type` | - |
| `Values` | \{ \[`key`: `string`\]: `Type`; \} |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="assertion-2"></a> `assertion?` | \| `"string"` \| `"number"` \| `"boolean"` \| `"symbol"` \| `"object"` \| `"function"` \| `"map"` \| `"array"` \| `"date"` \| `"float"` \| `"instanceOf"` \| `"integer"` \| `"json"` \| `"promise"` \| `"regExp"` \| `"set"` \| `"weakMap"` \| `"weakSet"` \| `"is"` \| `"notIs"` \| `"equal"` \| `"notEqual"` \| `"moreThan"` \| `"atLeast"` \| `"lessThan"` \| `"atMost"` \| `"throws"` \| `"notThrows"` \| `"true"` \| `"false"` | The type-enforcer assert function to run against all tests. | [src/multiTest.ts:103](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L103) |
| <a id="eachpair-1"></a> `eachPair` | `true` | Values must be an array, runs tests on every combination of two items from values. | [src/multiTest.ts:107](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L107) |
| <a id="filter-2"></a> `filter?` | (`value`: `Values`, `value2`: `Values`) => `boolean` | Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test. | [src/multiTest.ts:87](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L87) |
| <a id="inputkey"></a> `inputKey` | keyof `Values` | If values is an array of objects, this specifies which key to get the input value from. | [src/multiTest.ts:95](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L95) |
| <a id="message-2"></a> `message?` | (`input`: `unknown`, `output`: `unknown`) => `string` | Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability. | [src/multiTest.ts:91](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L91) |
| <a id="output-2"></a> `output?` | `unknown` | The expected output value of all tests. | [src/multiTest.ts:99](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L99) |
| <a id="test-2"></a> `test` | (`value1`: `Type`, `value2`: `Type`) => `unknown` | The test to run against each value. Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Should not call assert, but return a value to be asserted against configured output. | [src/multiTest.ts:83](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L83) |
| <a id="values-3"></a> `values` | `Values`[] | The values to run tests against. | [src/multiTest.ts:75](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L75) |
| <a id="values2-1"></a> `values2` | `Values`[] | Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array. | [src/multiTest.ts:79](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L79) |

***

### IMultiTestSettingsSingle

Defined in: [src/multiTest.ts:110](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L110)

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="assertion-3"></a> `assertion?` | \| `"string"` \| `"number"` \| `"boolean"` \| `"symbol"` \| `"object"` \| `"function"` \| `"map"` \| `"array"` \| `"date"` \| `"float"` \| `"instanceOf"` \| `"integer"` \| `"json"` \| `"promise"` \| `"regExp"` \| `"set"` \| `"weakMap"` \| `"weakSet"` \| `"is"` \| `"notIs"` \| `"equal"` \| `"notEqual"` \| `"moreThan"` \| `"atLeast"` \| `"lessThan"` \| `"atMost"` \| `"throws"` \| `"notThrows"` \| `"true"` \| `"false"` | The type-enforcer assert function to run against all tests. | [src/multiTest.ts:134](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L134) |
| <a id="filter-3"></a> `filter?` | (`value`: `Type`) => `boolean` | Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test. | [src/multiTest.ts:122](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L122) |
| <a id="message-3"></a> `message?` | (`input`: `unknown`, `output`: `unknown`) => `string` | Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability. | [src/multiTest.ts:126](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L126) |
| <a id="output-3"></a> `output?` | `unknown` | The expected output value of all tests. | [src/multiTest.ts:130](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L130) |
| <a id="test-3"></a> `test` | (`value`: `Type`) => `unknown` | The test to run against each value. Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Should not call assert, but return a value to be asserted against configured output. | [src/multiTest.ts:118](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L118) |
| <a id="values-4"></a> `values` | `Type`[] | The values to run tests against. | [src/multiTest.ts:114](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L114) |

***

### IMultiTestSettingsSingleCollection

Defined in: [src/multiTest.ts:137](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L137)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Type` | - |
| `Values` | \{ \[`key`: `string`\]: `Type`; \} |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="assertion-4"></a> `assertion?` | \| `"string"` \| `"number"` \| `"boolean"` \| `"symbol"` \| `"object"` \| `"function"` \| `"map"` \| `"array"` \| `"date"` \| `"float"` \| `"instanceOf"` \| `"integer"` \| `"json"` \| `"promise"` \| `"regExp"` \| `"set"` \| `"weakMap"` \| `"weakSet"` \| `"is"` \| `"notIs"` \| `"equal"` \| `"notEqual"` \| `"moreThan"` \| `"atLeast"` \| `"lessThan"` \| `"atMost"` \| `"throws"` \| `"notThrows"` \| `"true"` \| `"false"` | The type-enforcer assert function to run against all tests. | [src/multiTest.ts:169](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L169) |
| <a id="filter-4"></a> `filter?` | (`value`: `Values`) => `boolean` | Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Return a truthy value to run the test, falsey to skip the test. | [src/multiTest.ts:149](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L149) |
| <a id="inputkey-1"></a> `inputKey?` | keyof `Values` | If values is an array of objects, this specifies which key to get the input value from. | [src/multiTest.ts:157](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L157) |
| <a id="message-4"></a> `message?` | (`input`: `unknown`, `output`: `unknown`) => `string` | Provides two or three params, the input value(s) and the expected output value. Must return a string. It is recommended to use the display-value library on values for readability. | [src/multiTest.ts:153](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L153) |
| <a id="output-4"></a> `output?` | `unknown` | The expected output value of all tests. | [src/multiTest.ts:165](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L165) |
| <a id="outputkey"></a> `outputKey?` | keyof `Values` | If values is an array of objects, this specifies which key to get the expected output value from. | [src/multiTest.ts:161](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L161) |
| <a id="test-4"></a> `test` | (`value`: `Type`) => `unknown` | The test to run against each value. Provided one or two args (two args if eachPair is true). Each arg is a value from values or values2. Should not call assert, but return a value to be asserted against configured output. | [src/multiTest.ts:145](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L145) |
| <a id="values-6"></a> `values` | `Values`[] | The values to run tests against. | [src/multiTest.ts:141](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L141) |

***

### IMultiTestValuesObject

Defined in: [src/multiTest.ts:5](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L5)

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

#### Indexable

```ts
[key: string]: Type
```

***

### ITestMethodCoerce

Defined in: [src/testMethod.ts:5](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L5)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="coerced"></a> `coerced` | `unknown` | [src/testMethod.ts:7](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L7) |
| <a id="value"></a> `value` | `unknown` | [src/testMethod.ts:6](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L6) |

***

### ITestMethodSettings

Defined in: [src/testMethod.ts:14](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L14)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="coerce"></a> `coerce?` | `false` \| [`ITestMethodCoerce`](#itestmethodcoerce)[] | [src/testMethod.ts:20](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L20) |
| <a id="coercetrue"></a> `coerceTrue?` | `unknown`[] | [src/testMethod.ts:21](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L21) |
| <a id="extraprops-1"></a> `extraProps?` | [`ExtraProps`](#extraprops) | [src/testMethod.ts:17](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L17) |
| <a id="false"></a> `false` | `unknown`[] | [src/testMethod.ts:19](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L19) |
| <a id="init"></a> `init` | `unknown` | [src/testMethod.ts:16](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L16) |
| <a id="name"></a> `name` | `string` | [src/testMethod.ts:15](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L15) |
| <a id="true"></a> `true` | `unknown`[] | [src/testMethod.ts:18](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/testMethod.ts#L18) |

***

### Object

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:123

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="constructor"></a> `constructor` | `Function` | The initial value of Object.prototype.constructor is the standard built-in Object constructor. | node\_modules/typescript/lib/lib.es5.d.ts:125 |

#### Methods

##### hasOwnProperty()

```ts
hasOwnProperty(v: PropertyKey): boolean;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:140

Determines whether an object has a property with the specified name.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`PropertyKey`](#propertykey) | A property name. |

###### Returns

`boolean`

##### isPrototypeOf()

```ts
isPrototypeOf(v: Object): boolean;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:146

Determines whether an object exists in another object's prototype chain.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`Object`](#object) | Another object whose prototype chain is to be checked. |

###### Returns

`boolean`

##### propertyIsEnumerable()

```ts
propertyIsEnumerable(v: PropertyKey): boolean;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:152

Determines whether a specified property is enumerable.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | [`PropertyKey`](#propertykey) | A property name. |

###### Returns

`boolean`

##### toLocaleString()

```ts
toLocaleString(): string;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

###### Returns

`string`

##### toString()

```ts
toString(): string;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

###### Returns

`string`

##### valueOf()

```ts
valueOf(): Object;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

###### Returns

[`Object`](#object)

***

### WeakRef

Defined in: node\_modules/typescript/lib/lib.es2021.weakref.d.ts:21

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`WeakKey`](#weakkey) |

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="tostringtag"></a> `[toStringTag]` | `readonly` | `"WeakRef"` | node\_modules/typescript/lib/lib.es2021.weakref.d.ts:22 |

#### Methods

##### deref()

```ts
deref(): T | undefined;
```

Defined in: node\_modules/typescript/lib/lib.es2021.weakref.d.ts:29

Returns the WeakRef instance's target value, or undefined if the target value has been
reclaimed.
In es2023 the value can be either a symbol or an object, in previous versions only object is permissible.

###### Returns

`T` \| `undefined`

***

### WeakRefConstructor

Defined in: node\_modules/typescript/lib/lib.es2021.weakref.d.ts:32

#### Constructors

##### Constructor

```ts
new WeakRefConstructor<T>(target: T): WeakRef<T>;
```

Defined in: node\_modules/typescript/lib/lib.es2021.weakref.d.ts:40

Creates a WeakRef instance for the given target value.
In es2023 the value can be either a symbol or an object, in previous versions only object is permissible.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `T` | The target value for the WeakRef instance. |

###### Returns

[`WeakRef`](#weakref)\<`T`\>

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="prototype"></a> `prototype` | `readonly` | [`WeakRef`](#weakref)\<`any`\> | node\_modules/typescript/lib/lib.es2021.weakref.d.ts:33 |

## Type Aliases

### IMultiTestSettings

```ts
type IMultiTestSettings<Type> = 
  | IMultiTestSettingsObject<Type>
  | IMultiTestSettingsPairs<Type>
  | IMultiTestSettingsPairsCollection<Type>
  | IMultiTestSettingsSingle<Type>
| IMultiTestSettingsSingleCollection<Type>;
```

Defined in: [src/multiTest.ts:172](https://github.com/DarrenPaulWright/type-enforcer-test-helper/blob/main/src/multiTest.ts#L172)

#### Type Parameters

| Type Parameter |
| ------ |
| `Type` |

***

### PropertyKey

```ts
type PropertyKey = string | number | symbol;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:108

***

### WeakKey

```ts
type WeakKey = WeakKeyTypes[keyof WeakKeyTypes];
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1694

## Variables

### NaN

```ts
NaN: number;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:26

***

### Object

```ts
Object: ObjectConstructor;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:123

Provides functionality common to all JavaScript objects.

***

### WeakRef

```ts
WeakRef: WeakRefConstructor;
```

Defined in: node\_modules/typescript/lib/lib.es2021.weakref.d.ts:21
