// Fibonacci Sequence - Iterator Method

console.log(fib(8));
console.log(fibRec(8));

for (let i = 0; i < 9; i++) {
	console.log(`fibRec(${i}) : ${fibRec(i)}`);
}

function fib(number) {
	let fibArray = [0, 1];
	
	if (number === 1) return [0];
	if (number === 2) return fibArray;

	for (let i = 2; i < number; i++) {
		fibArray.push(fibArray[i-1] + fibArray[i-2]);
	}

	return fibArray;
}

// Fibonacci Sequence - Recursive Method

function fibRec(number) {
	if (number < 1) return [];
	if (number === 1) return [0];
	if (number === 2) return [0, 1];

	return [...fibRec(number - 1), fibRec(number - 1)[number - 2] + fibRec(number - 2)[number - 3]];
}

