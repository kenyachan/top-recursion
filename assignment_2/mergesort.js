function mergeSort(arr) {
	if (arr.length < 2) return arr;

	let mid = Math.round(arr.length / 2);

	let left = arr.splice(0, mid);
	let right = arr;
	
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let combinedArr = [];

	while (left.length > 0 && right.length > 0) {
		left[0] < right [0] ?
			combinedArr.push(left.shift()) :
			combinedArr.push(right.shift());
	}

	return [...combinedArr, ...left, ...right];
}

let arr = [5, 3, 6, 2, 9];

console.log(mergeSort(arr));

