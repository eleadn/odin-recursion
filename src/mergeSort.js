function mergeSort(array = []) {
	if (array.length <= 1) {
		return array;
	}

	const middle = Math.floor(array.length / 2);
	const left = mergeSort(array.slice(0, middle));
	const right = mergeSort(array.slice(middle, array.length));

	let result = [];

	while (left.length > 0 || right.length > 0) {
		if (left.length === 0) {
			result.push(right.shift());
		} else if (right.length === 0) {
			result.push(left.shift());
		} else {
			result.push(left[0] < right[0] ? left.shift() : right.shift());
		}
	}

	return result;
}

module.exports = { mergeSort };
