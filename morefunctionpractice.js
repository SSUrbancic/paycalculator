// JavaScript Introduction Worksheet

// The purpose of this worksheet is to learn the relationship between a parameter (in the function signature)
// and an argument (what is passed in when a function gets called).
// Pay special attention to the arguments being passed into function calls at the bottom of this worksheet
// and do your best to get the answers!

function getTriangleArea(height, width) {
	return height * width / 2;
}

function getRectangleArea(height, width) {
	return height * width;
}

function addTwoNumbers(num1, num2) {
	return num1 + num2;
}

function subtractTwoNumbers(num1, num2) {
	console.log("The difference is: " + (num1 - num2));
}

//24, 2, 10, 5
function addTwoAreas(num1, num2, num3, num4) {
	return getTriangleArea(num1, num3) + getRectangleArea(num2, num4);
}

function checkingConditions(value) {
	var number = 0;
	if (value % 2 !== 0) {
		if (value > 10) {
			number = 10;
			return number;
		}
		else {
			return number;
		}
	}
	else {
		return value;
	}
}

function loopingThroughNumbers(loopLimit) {
	var number = 0;
	for(var i  = 1; i <= loopLimit; i++) {
		number += i;
	}
	return number;
}

let numberOne = 24;
let numberTwo = 2;
let height = 10;
let width = 5;

let answer1 = getTriangleArea(height, width); // ANSWER
let answer2 = getRectangleArea(height, 10); // ANSWER
let answer3 = addTwoNumbers(1, numberTwo); // ANSWER
let answer4 = subtractTwoNumbers(numberOne, numberTwo); // ANSWER
let answer5 = getRectangleArea(width, numberTwo) + addTwoNumbers(height, 1); // ANSWER
let answer6 = addTwoNumbers(addTwoNumbers(10, 20), 30); // ANSWER
let answer7 = addTwoAreas(numberOne, numberTwo, height, width); // ANSWER
let answer8 = checkingConditions(7); // ANSWER
let answer9 = loopingThroughNumbers(5); // ANSWER
let answer10 = loopingThroughNumbers(addTwoNumbers(numberTwo, addTwoNumbers(1, 1))); // ANSWER

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(answer5);
console.log(answer6);
console.log(answer7);
console.log(answer8);
console.log(answer9);
console.log(answer10);