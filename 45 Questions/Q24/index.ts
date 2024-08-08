/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

//Tests for equality and inequality with strings

let frint:string = "apple";
let friutUP:string = "APPLE";

console.log("\n`Is apple is equal to apple?`");
console.log(frint === "apple"); //equality

console.log("\n`Is APPLE is not equal to apple? `");
console.log(friutUP !== frint); //inequality

//Tests using the lower case function

console.log("\n`Is APPLE (converting to lowercase) is equal to apple`");
console.log(friutUP.toLowerCase() === "apple");

console.log("\n`Is APPLE (without converting to lowercase) is equal to apple`");
console.log(friutUP === "apple");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1:number = 10;
let num2:number = 20

console.log("\n`Is num1 = 10?`");
console.log(num1 === 10);

console.log("\n`Is num2 = 20?`");
console.log(num2 === 20);

console.log("\nIn num1 is not equal to 10 and num2 is equal to 20?");
console.log(num1 != num2);

console.log("\nIn num1 is greater than 5?");
console.log(num1 > 5);

console.log("\nIn num2 is less than 10?");
console.log(num1 < 10);

console.log("\nIn num1 is greater than equal to 10?");
console.log(num1 >= 10);

console.log("\nIn num2 is less than equal to 10?");
console.log(num2 <= 10);

//Tests using "and" and "or" operators
console.log ("\nIf num1 is greater than or equal to 10 and num2 is less than or equal to 20");
console.log(num1 >= 10 && num2 <= 20);

console.log ("\nIf num1 is greater than or equal to 10 and num2 is less than 20 ");
console.log(num1 >= 10 && num2 < 20);

console.log ("\nIf num1 is greater than or equal to 10 'or' num2 is less than to 20");
console.log(num1 >= 10 || num2 < 20);

console.log ("\nIf num1 is greater than 10 'or' num2 is less than to 20");
console.log(num1 > 10 || num2 < 20);

//Test whether an item is in a array
let fruits:string[] = ["apple", "banana", "cherry"];
console.log("\nIs apple is present in array?");
console.log(fruits.includes("apple"));

console.log("\nIs banana is present in array?");
console.log(fruits.includes("banana"));

console.log ("\nIs mango is not in a array?");
console.log(!fruits.includes("mango"));

console.log ("\nIs mango is in a array?");
console.log(fruits.includes("mango"));
