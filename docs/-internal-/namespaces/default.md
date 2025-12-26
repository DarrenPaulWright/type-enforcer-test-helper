[**type-enforcer-test-helper**](../../README.md)

***

[type-enforcer-test-helper](../../README.md) / [\<internal\>](../README.md) / \_default

# \_default

## Functions

### array()

#### Call Signature

```ts
function array(value: unknown): value is unknown[];
```

Defined in: node\_modules/type-enforcer/types/src/checks/isArray.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is unknown[]`

#### Call Signature

```ts
function array(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isArray.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### boolean()

#### Call Signature

```ts
function boolean(value: unknown): value is Boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isBoolean.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is Boolean`

#### Call Signature

```ts
function boolean(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isBoolean.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### date()

#### Call Signature

```ts
function date(value: unknown): value is Date;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isDate.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is Date`

#### Call Signature

```ts
function date(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isDate.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### float()

#### Call Signature

```ts
function float(value: unknown): value is Number;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isFloat.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is Number`

#### Call Signature

```ts
function float(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isFloat.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### function()

```ts
function function(value: unknown): value is Function;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isFunction.d.ts:1

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`value is Function`

***

### instanceOf()

```ts
function instanceOf(object: unknown, constructor: Function): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isInstanceOf.d.ts:1

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `unknown` |
| `constructor` | `Function` |

#### Returns

`boolean`

***

### integer()

#### Call Signature

```ts
function integer(value: unknown): value is number;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isInteger.d.ts:31

**`Function`**

Check if a value is a finite integer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |

##### Returns

`value is number`

##### Example

``` javascript
import { isInteger } from 'type-enforcer';

isInteger(42);
// => true

isInteger('42');
// => false

isInteger('42', true);
// => true

isInteger('42.5', true);
// => false
```

 is.integer

##### Alias

isInteger

#### Call Signature

```ts
function integer(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isInteger.d.ts:32

**`Function`**

Check if a value is a finite integer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |
| `coerce?` | `boolean` | If true then see if the value can be coerced into an Integer. |

##### Returns

`boolean`

##### Example

``` javascript
import { isInteger } from 'type-enforcer';

isInteger(42);
// => true

isInteger('42');
// => false

isInteger('42', true);
// => true

isInteger('42.5', true);
// => false
```

 is.integer

##### Alias

isInteger

***

### json()

```ts
function json(value: unknown): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isJson.d.ts:1

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`boolean`

***

### map()

#### Call Signature

```ts
function map(value: unknown): value is Map<unknown, unknown>;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isMap.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is Map<unknown, unknown>`

#### Call Signature

```ts
function map(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isMap.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### number()

#### Call Signature

```ts
function number(value: unknown): value is Number;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isNumber.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is Number`

#### Call Signature

```ts
function number(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isNumber.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### object()

#### Call Signature

```ts
function object(value: unknown): value is Object;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isObject.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is Object`

#### Call Signature

```ts
function object(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isObject.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### promise()

#### Call Signature

```ts
function promise(value: unknown): value is Promise<unknown>;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isPromise.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is Promise<unknown>`

#### Call Signature

```ts
function promise(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isPromise.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### regExp()

#### Call Signature

```ts
function regExp(value: unknown): value is RegExp;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isRegExp.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is RegExp`

#### Call Signature

```ts
function regExp(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isRegExp.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### set()

#### Call Signature

```ts
function set(value: unknown): value is Set<unknown>;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isSet.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is Set<unknown>`

#### Call Signature

```ts
function set(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isSet.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### string()

#### Call Signature

```ts
function string(value: unknown): value is string;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isString.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is string`

#### Call Signature

```ts
function string(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isString.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### symbol()

#### Call Signature

```ts
function symbol(value: unknown): value is Symbol;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isSymbol.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is Symbol`

#### Call Signature

```ts
function symbol(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isSymbol.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### weakMap()

#### Call Signature

```ts
function weakMap(value: unknown): value is WeakMap<WeakKey, unknown>;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isWeakMap.d.ts:3

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is WeakMap<WeakKey, unknown>`

#### Call Signature

```ts
function weakMap(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isWeakMap.d.ts:4

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`

***

### weakSet()

#### Call Signature

```ts
function weakSet(value: unknown): value is WeakSet<WeakKey>;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isWeakSet.d.ts:1

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

##### Returns

`value is WeakSet<WeakKey>`

#### Call Signature

```ts
function weakSet(value: unknown, coerce?: boolean): boolean;
```

Defined in: node\_modules/type-enforcer/types/src/checks/isWeakSet.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |
| `coerce?` | `boolean` |

##### Returns

`boolean`
