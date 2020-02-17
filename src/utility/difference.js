export default (array1, ...args) => {
	let diffArrays = [].concat(...args);
	return array1.filter((item) => !diffArrays.includes(item));
};
