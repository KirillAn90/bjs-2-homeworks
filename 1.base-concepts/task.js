"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x1;
	let x2;
	let d = b ** 2 - 4 * a * c;

	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
	} else if (d === 0) {
		arr.push(-b / (2 * a));
	}
	return arr;
}

console.log(solveEquation());




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / (12 * 100);
  let sum = amount - contribution;
  let payment = sum * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths)-1)));
  return Number(payment.toFixed(2));
}
