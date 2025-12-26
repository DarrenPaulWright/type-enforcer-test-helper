/**
 * A simple class for testing things like instanceof
 */
export default class TestClass {
	private _value: unknown;

	constructor(value?: unknown) {
		this._value = value;
	}

	get value(): unknown {
		return this._value;
	}

	set value(value: unknown) {
		this._value = value;
	}
}
