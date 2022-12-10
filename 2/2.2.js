function isValidSubsequence(array, sequence) {
	let seqIndex = 0;
	let arrayIndex = 0;

	while(arrayIndex < array.length && seqIndex < sequence.length) {
		if (array[arrayIndex] === sequence[seqIndex]) {
			seqIndex++;
		}
		arrayIndex++;
	}

	return seqIndex === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
