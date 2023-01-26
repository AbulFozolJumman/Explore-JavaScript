// 8(parseInt, parseFloat)

var price1 = '31';
var price2 = '10';
var totalPrice = price1 + price2;
// console.log(totalPrice);

var price1 = 31;
var price2 = '10';
var totalPrice = price1 + price2;
// console.log(totalPrice);

var price1 = '31';
var price2 = 10;
var totalPrice = price1 + price2;
console.log(totalPrice);

// convert string to number
console.log(price1);
var price1Number = parseInt(price1);
console.log(price1Number);

// convert decimal string to decimal number
var gpa = '3.41';
var gpaNumber = parseInt(gpa);
console.log(gpaNumber);  //it will return only 3 not decimal

var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);  //Now it will return decimal