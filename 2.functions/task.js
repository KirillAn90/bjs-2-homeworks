function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let num of arr) {
		if (num > max) {
			max = num;
		}
		if (num < min) {
			min = num;
		}
		sum += num;
	}
	const avg = Number((sum / arr.length).toFixed(2));

	return {
		max,
		min,
		avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let num of arr) {
		sum += num;
	}

	return sum;
}


function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) 
	return 0;

	let max = -Infinity;
	let min = Infinity;

	for (let num of arr) {
		if (num > max) {
			max = num;
		}
		if (num < min) {
			min = num;
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let num of arr) {
		if (num % 2 === 0) {
			sumEvenElement += num;
		} else {
			sumOddElement += num;
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) 
	return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let num of arr) {
		if (num % 2 === 0) {
			sumEvenElement += num;
			countEvenElement++;
		}
	}

	return (sumEvenElement / countEvenElement);
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let arr of arrOfArr) {
		const elements = [...arr];
		const workerResult = func(elements);

		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}

	return maxWorkerResult;
}