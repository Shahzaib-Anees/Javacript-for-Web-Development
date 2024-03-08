// Maths Expressions/Operations in JavaScript :-

// In JavaScript, we can also perform mathematical operations like Addition,Multiplications , Division and Substractions 

var num1= 2;
var num2 = 5;

// For Addtion/Sum of numbers :-

console.log(num1 + num2);

// For SUbstractions of numbers :-
console.log(num1 - num2);

// For Multiplication of numbers :-
console.log(num1 * num2);


// For Division of numbers :-
console.log(num1 / num2);

// For Modulus of numbers :-
console.log(num1 % num2);
// Modulus returns the reminder value after Divsion of Numbers.

// JavaScript follows "BODMAS" priority order therefore, If we want to remove Ambiguity in any Airthmetic we can add Brackets.

// For Example 

// If I want to multiply above two variables first and then divides the result by 2 then I can add brackets in the multiplication of two numbers to increase theor Priority Order.
console.log(num1 * num2/2)//Wrong Result (Ambigious)
console.log((num1 * num2)/2)//True Case