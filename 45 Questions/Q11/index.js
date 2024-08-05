"use strict";
//Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
Object.defineProperty(exports, "__esModule", { value: true });
let names1 = ["Osama", "Talha", "Huzafa", "Hamdan", "Sufiyan", "Osman", "Arham"];
console.log(names1);
names1.forEach(friendname => console.log(friendname));
//Another method
let name2 = ["Malcolm", "Yanni", "Edward", "Boris", "Francis"];
console.log(name2);
console.log(name2[0]);
console.log(name2[1]);
console.log(name2[2]);
console.log(name2[3]);
console.log(name2[4]);
console.log(name2[5]); //undefined
