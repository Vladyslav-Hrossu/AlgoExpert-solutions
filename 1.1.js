function twoNumberSum(array, targetSum) {
	for(let i = 0; i < array.length; i++) {
		const firstNum = array[i];
		for(let j = 0; j < array.length; j++) {
			const secondNum = array[j];
			if (firstNum + secondNum === targetSum) {
				return [firstNum, secondNum];
			}
		}
	}
}


console.log(twoNumberSum([1,2,3,4,5,6], 10));
