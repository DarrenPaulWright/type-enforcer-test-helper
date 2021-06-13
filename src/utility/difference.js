export default (array1, ...args) => {
	const diffArrays = [].concat(...args);
	return array1.filter((item) => !diffArrays.includes(item));
};
