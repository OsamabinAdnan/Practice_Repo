/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
  If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let favorite_fruits:string[] = ["Banana", "Mango", "Peach", "Cherry"]

if (favorite_fruits.includes("Banana")) {
    console.log("I really like bananas!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("I really like mangoes!");
}
if (favorite_fruits.includes("Peach")) {
    console.log("I really like peaches!");
}
if (favorite_fruits.includes("Cherry")) {
    console.log("I really like cherries!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("Oranges are not in the list of favorite fruits");
}
if(favorite_fruits.includes("Apple")){
    console.log("Apples are not in the list of favorite fruits");
}