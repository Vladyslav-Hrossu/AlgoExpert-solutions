function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		const leftNum = array[left];
		const rightNum = array[right];
		const currentSum = leftNum + rightNum;

		if (currentSum === targetSum) {
			return [leftNum, rightNum];
		} else if (currentSum < targetSum) {
			left++;
		} else if (currentSum > targetSum) {
			right--;
		}
	}
}


console.log(twoNumberSum([2, 1, 3, 4, 5, 6, -5, 15, 7], 10));
