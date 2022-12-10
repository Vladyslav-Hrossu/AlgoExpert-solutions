function isValidSubsequence(array, sequence) {
	for(let i = 0, j = 0; i < array.length; i++) {
		const arrayItem = array[i];
		const sequenceItem = sequence[j];

		if(arrayItem === sequenceItem) {
			j++;
		}

		if(j === sequence.length) {
			return true;
		}
	}

	return false;
}

function isValidSubsequence(array, sequence) {
	let seqIndex = 0;
	for(let num of array) {
		if(seqIndex === sequence.length) break;
		if(num === sequence[seqIndex]) seqIndex++;
	}

	return seqIndex === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
