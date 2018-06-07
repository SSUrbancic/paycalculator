"use strict";

//Correct Pay Calculator

runPayCalculator();

function runPayCalculator(){ // MASTER FUNCTION
 let hours = getUserInput("How many hours did you work this week?");
 let payRate = getUserInput("What is your hourly pay rate?");
 let standardWorkWeekHours = 40;
 let totalPay;

 let didWorkOvertime = determineIfOvertimeReached(hours, standardWorkWeekHours);

 if(didWorkOvertime) {
   let standardPay = calculateStandardPay(standardWorkWeekHours, payRate);
   let overtimePay = calculateOvertimePay(hours, payRate, standardWorkWeekHours);
   totalPay = standardPay + overtimePay;
 }
 else {
   totalPay = calculateStandardPay(hours, payRate);
 }

 displayResult("Your total pay is: $", totalPay);
}

function calculateOvertimePay(hours, payRate, standardWorkWeekHours) {
 let overtimePay;
 let overtimeMultiplier = 1.5;
 overtimePay = (hours - standardWorkWeekHours) * (payRate * overtimeMultiplier); // OTHours * OTRate
 return overtimePay;
}

function calculateStandardPay(hours, payRate) {
 let standardPay;
 standardPay = hours * payRate;
 return standardPay;
}

function determineIfOvertimeReached(hours, standardWorkWeekHours) {
 let didReachOvertime;
 didReachOvertime = hours > standardWorkWeekHours;
 return didReachOvertime;
}

function displayResult(message, result) {
 console.log(message + " " + result);
}

function getUserInput(question) {
   let response = prompt(question);
   return response;
}