// 10(Practice)

// Q1. Harry's mom gave him 1000tk and asked him to buy some oranges(400tk) and apples(300tk). How much money Harry will return to his mom?

var totalMoney = 1000;
var orangesPrice = 400;
var applesPrice = 300;
var totalCost = orangesPrice + applesPrice;
var returnMoney = totalMoney - totalCost;
// console.log(returnMoney);

// Q2. A students exam marks are Math-75.25, Biology 65, Chemistry 80, Physics 34.45, Bangla 99.50. Now find the average marks.

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totalMarks = math + biology + chemistry + physics + bangla;
var totalSubject = 5;
var averageMarks = totalMarks / totalSubject;
// console.log(averageMarks);  //too many digits
averageMarks = averageMarks.toFixed(2);
// console.log(averageMarks);

// Q3. Print two string variable in one line
var firstLine = "Iam going to be";
var secondLine = "an awesome Web developer"
var fullLine = firstLine + " " + secondLine;
// console.log(fullLine);

// Q4. What would be the remainder if 119 divided by 5?
var number = 119;
var divisionNumber = 5;
var remainder = number % divisionNumber;
console.log(remainder);