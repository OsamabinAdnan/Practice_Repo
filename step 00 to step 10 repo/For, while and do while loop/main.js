//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ For Loop @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
Syntax

for (initial expression ; condition ; increment/decrement) {
    statement
}
*/
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
//Another program
let names = ["Osama", "Talha", "Huzafa", "Hamdan", "Sufiyan", "Osman", "Arham"];
for (let x = 0; x < names.length; x++) {
    console.log(names[x]);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ While Loop @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* Syntax

initial expression
while (condition) {
statement
}
*/
let i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Do While Loop @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* Syntax

initial expression
do {
    statement
}
while (condition)
*/
let a = 0;
do {
    console.log(names[a]);
    a++;
} while (a < names.length);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ For in Loop @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let player = {
    name: "Babar Azam",
    role: "Batman",
    age: 28
};
for (let key in player) {
    console.log(`=== For In === ${key}`); //=== For In === name // === For In === role // === For In === age
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ For of Loop @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let fruits = ["Apple", "Banana", "Orange"];
for (let phel of fruits) {
    console.log(phel);
}
console.log(10 - 15 * 3 + 4 / 2); //-37
export {};
