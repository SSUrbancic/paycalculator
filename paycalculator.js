"use strict"

let standardWorkWeek = 40
let hourlyWage = prompt("What is your hourly rate?");
let hoursWorked = prompt("How many hours did you work?");
let weeklyAmount = determineTotalAmount(hourlyWage, hoursWorked);
let overTimeIsEarned = determineIfOverTimeIsEarned(standardWorkWeek, hoursWorked)
let amountOfOverTime = determineAmountOfOverTime(standardWorkWeek, hoursWorked)
let totalAmount;

function determineTotalAmount(hourlyWage, hoursWorked){
	let weeklyAmount = hourlyWage * hoursWorked;
	return weeklyAmount;
}

function determineIfOverTimeIsEarned(standardWorkWeek, hoursWorked){
	let overTimeIsEarned = hoursWorked > standardWorkWeek
	return overTimeIsEarned
}

function determineAmountOfOverTime(standardWorkWeek, hoursWorked){
	let amountOfOverTime = hoursWorked - standardWorkWeek
	return amountOfOverTime
}

if(overTimeIsEarned === True){
	totalAmount = amountOfOverTime * (hourlyWage * 1.5) + (hourlyWage * standardWorkWeek)
}
else{
	totalAmount = hourlyWage * standardWorkWeek
}


//if(hoursWorked > standardWorkWeek){
//	totalAmount = (hoursWorked - standardWorkWeek) *(hourlyWage * 1.5) + (hourlyWage * standardWorkWeek)
//}
//else{
//	totalAmount = hourlyWage * standardWorkWeek
//}


console.log(amountOfOverTime);
console.log(overTimeIsEarned);
console.log(weeklyAmount);
console.log(totalAmount);