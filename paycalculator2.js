// "use strict";

// let hoursWorked = prompt("How many hours have you worked this week?");
// let payRate = prompt("Please enter your hourly wage.");
// let standardWorkWeek = 40;
// let weeklyWage;


// if (hoursWorked > standardWorkWeek) {
// 	let overTimeMultiplier = 1.5;
// 	let overTimePay = (hoursWorked - standardWorkWeek) * (overTimeMultiplier * payRate);
// 	let regularPay = standardWorkWeek * payRate;
// 	weeklyWage = overTimePay + regularPay
// }
// else {
// 	weeklyWage = hoursWorked * payRate;
// }

// console.log("Your total pay for the week is $" + weeklyWage);

determineWeeklyWage();

function determineWeeklyWage(){determineTotalPay();


function determineTotalPay(){

	let standardWorkWeek = 40;
	let hoursWorked = getUserInput("How many hours did you work?");
	let payRate = getUserInput("What is your pay rate?")
	let overTimeIsEarned = determineIfOverTimeIsEarned(hoursWorked, standardWorkWeek)
	let totalPay;

	if (overTimeIsEarned) {
		let overTimePay = determineOverTimePay(hoursWorked, standardWorkWeek, payRate);
		let standardPay = determineStandardPay(standardWorkWeek, payRate);
		totalPay = overTimePay + standardPay
	}
	else {
		totalPay = hoursWorked * payRate
	}

displayResult("Your weekly paycheck will be $", totalPay);

}


function determineOverTimePay(hoursWorked, standardWorkWeek, payRate){
	let overTimePay;
	let overTimeMultiplier = 1.5;
	overTimePay = (hoursWorked - standardWorkWeek) * (overTimeMultiplier * payRate);
	return overTimePay;
}


function determineIfOverTimeIsEarned(hoursWorked, standardWorkWeek){
	let overTimeIsEarned;
	overTimeIsEarned = hoursWorked > standardWorkWeek;
	return overTimeIsEarned;
}


function determineStandardPay(standardWorkWeek, payRate){
	let standardPay;
	standardPay = standardWorkWeek * payRate;
	return standardPay;
}

function getUserInput(question){
	let getUserInput;
	getUserInput = prompt(question);
	return getUserInput;
}


function displayResult(message, result){
	console.log(message + " " + result);
}

let standardWorkWeek = 40;
let hoursWorked = determineHoursWorked();
let payRate = determinePayRate();

let didEarnOvertime = determineIfOvertimeIsEarned(hoursWorked, standardWorkWeek);

let weeklyWage;

	if (didEarnOvertime) {
		let overTimeIncome = determineOverTimePay(hoursWorked, standardWorkWeek, payRate);
        let standardPay = determineRegularPay(standardWorkWeek, payRate);
		weeklyWage = overTimeIncome + standardPay;
	}
	else {
		weeklyWage = determineRegularPay(hoursWorked, payRate);
	}

	displayResult("Your total pay is: $", weeklyWage)
}

function determineIfOvertimeIsEarned(hoursWorked, standardWorkWeek){
	let overTimeIsEarned;
	overTimeIsEarned = hoursWorked > standardWorkWeek;
	return overTimeIsEarned;
}

function determineOverTimePay(hoursWorked, standardWorkWeek, payRate){
	let overTimePay;
	let overTimeMultiplier = 1.5;
	overTimePay = (hoursWorked - standardWorkWeek) * (payRate * overTimeMultiplier);
	console.log(overTimePay);
	return overTimePay;
}

function determineRegularPay(standardWorkWeek, payRate){
	let regularPay;
	regularPay = standardWorkWeek * payRate;
	return regularPay;
}

function displayResult(message, result) {
 console.log(message + " " + result);
}

function determineHoursWorked(){
	let hoursWorked;
	hoursWorked = prompt("How many hours did you work this week?");
	return hoursWorked;
}

function determinePayRate(){
	let payRate;
	payRate = prompt("What is your pay rate?");
	return payRate;
}


determineTotalPay();


function determineTotalPay(){

	let standardWorkWeek = 40;
	let hoursWorked = getUserInput("How many hours did you work?");
	let payRate = getUserInput("What is your pay rate?")
	let overTimeIsEarned = determineIfOverTimeIsEarned(hoursWorked, standardWorkWeek)
	let totalPay;

	if (overTimeIsEarned) {
		let overTimePay = determineOverTimePay(hoursWorked, standardWorkWeek, payRate);
		let standardPay = determineStandardPay(standardWorkWeek, payRate);
		totalPay = overTimePay + standardPay
	}
	else {
		totalPay = hoursWorked * payRate
	}

displayResult("Your weekly paycheck will be $", totalPay);

}


function determineOverTimePay(hoursWorked, standardWorkWeek, payRate){
	let overTimePay;
	let overTimeMultiplier = 1.5;
	overTimePay = (hoursWorked - standardWorkWeek) * (overTimeMultiplier * payRate);
	return overTimePay;
}


function determineIfOverTimeIsEarned(hoursWorked, standardWorkWeek){
	let overTimeIsEarned;
	overTimeIsEarned = hoursWorked > standardWorkWeek;
	return overTimeIsEarned;
}


function determineStandardPay(standardWorkWeek, payRate){
	let standardPay;
	standardPay = standardWorkWeek * payRate;
	return standardPay;
}

function getUserInput(question){
	let getUserInput;
	getUserInput = prompt(question);
	return getUserInput;
}


function displayResult(message, result){
	console.log(message + " " + result);
}
