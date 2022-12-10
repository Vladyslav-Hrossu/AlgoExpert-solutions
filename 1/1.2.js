function twoNumberSum(array, targetSum) {
	const hash = {};
	for(let i = 0; i < array.length; i++) {
		const num = array[i];
		const searchedNum = targetSum - num;

		if (hash[searchedNum]) {
			return [num, searchedNum];
		}

		hash[num] = true;
	}
}


console.log(twoNumberSum([1,2,3,4,5,6], 10));
