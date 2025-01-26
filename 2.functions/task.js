function getArrayParams(...arr) {
	let sum = 0;
	let min = Infinity;
	let max = -Infinity;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	let avg = sum / arr.length;
	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(1))
	};
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
