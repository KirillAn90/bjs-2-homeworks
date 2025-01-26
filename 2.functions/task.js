function getArrayParams(...arr) {
	let min = Infinity,
		max = -Infinity,
		sum = 0;

	for (let num of arr) {
		if (num > max) {
			max = num;
		}
		if (num < min) {
			min = num;
		}
		sum += num;
	}
	const avg = (sum / arr.length).toFixed(2);
	avg = Number(avg);

	return {
		max,
		min,
		avg
	};
}

function summElementsWorker(...arr) {
  var initialValue = 0;
  var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
    accumulator,
    currentValue,
  ) {
    return accumulator + currentValue.x;
  }, initialValue);
}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
