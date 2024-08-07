"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
let guestsList = ["Osama", "Talha", "Huzafa"];
let message = "You are invited for a dinner";
guestsList.forEach(guest => {
    console.log(`"Hello ${guest}, ${message}"`);
});
let notComing = guestsList[0];
console.log(`\n"${notComing} is not coming for dinner"\n`);
guestsList.splice(0, 1, "Hamdan");
guestsList.forEach(NewList => {
    console.log(`"Hello ${NewList}, you are invited for dinner with me tomorrow at 8 PM"`);
});
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log(`\n"Good news! I have found big table for Dinner so more peoples can join in`);
// Add one new guest to the beginning of your array.
guestsList.unshift("Sufiyan");
console.log("Adding one guest at the start of array: ", guestsList);
// Add one new guest to the end of the array.
guestsList.push("Osman");
console.log("Adding one guest at the end of array: ", guestsList);
//Add one new guest to the middle of the arry
let middleIndex = (guestsList.length / 2);
guestsList.splice(middleIndex, 0, "Arham");
console.log("Adding one guest at the middle of array: ", guestsList);
console.log(`\n"Update list of Guest"\n`);
guestsList.forEach(newGuests => {
    console.log(`"Hello ${newGuests}!, you are invited for a dinner with me tomorrow at 8 PM"`);
});
