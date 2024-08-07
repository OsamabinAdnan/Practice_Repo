"use strict";
/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Saudi Arabia", "Iraq", "Turkey", "Palestine", "Spain"];
console.log("Original Array:", places);
//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order", [...places].sort()); //Creates a shallow copy of places with [...places]
//By using [...places], you ensure that the original array places is not modified 
//This allows you to display the array in various orders while keeping the original array unchanged for later use.
//Show that your array is still in its original order by printing it.
console.log("Still original Array", places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order", [...places].reverse());
//Show that your array is still in its original order by printing it again.
console.log("Still original Array", places);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original order to reverse", places.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse to original order", places.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted Original array in Alphabetical Order", places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Original Array in Reverse Alphabetical Order", places.reverse());
