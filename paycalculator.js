"use strict"

let hoursworked= prompt("Plz enter hours:");
let hourlywage="22.589654";
let weeklywage=(hoursworked*hourlywage).toFixed(2);

console.log(weeklywage);

let monthlywage=(weeklywage*4).toFixed(2);

console.log(monthlywage);

// let sum = prompt ("hoursworked");
// if sum !=null) {
// 	document .getElmentById("demo").innerHTML =
// 	"hourlywage" * 
// }