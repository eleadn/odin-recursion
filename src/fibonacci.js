function fibs(number) {
	if (number < 1) {
		return [];
	} else if (number === 1) {
		return [0];
	} else if (number === 2) {
		return [0, 1];
	}

	let result = [0, 1];

	for (let i = 2; i < number; ++i) {
		result.push(result[i - 2] + result[i - 1]);
	}

	return result;
}

function fibsRec(number) {
	if (number < 1) {
		return [];
	} else if (number === 1) {
		return [0];
	} else if (number === 2) {
		return [0, 1];
	}

	let result = fibsRec(number - 1);
	result.push(result[number - 3] + result[number - 2]);
	return result;
}

module.exports = { fibs, fibsRec };
