export default (
	array1: Array<unknown>,
	...args: Array<Array<unknown>>
): Array<unknown> => {
	const diffArrays: Array<unknown> = [];

	args.forEach((arg) => {
		diffArrays.push(...arg);
	})

	return array1.filter((item) => !diffArrays.includes(item));
};
