// 9(Variable types, toFixed)

var price = 100;
//  console.log(typeof price);
var price = '100';
// console.log(typeof price);
var isHappy = true;
// console.log(typeof isHappy);
var romantic;
// console.log(typeof romantic);

// toFixed
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
console.log(sum);  //By default toFixed return string

sum = parseFloat(sum); //So, parseFloat need to use after toFixed to convert into number
console.log(sum);