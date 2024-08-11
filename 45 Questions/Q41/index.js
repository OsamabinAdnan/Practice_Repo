"use strict";
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// defining an array having magician name
let magiciansNames = ["David", "Chris", "Tom", "Luis"];
//defining a function to print each magician name fron an array
function show_magicians(magicianNames) {
    magiciansNames.forEach(magician => {
        console.log(magician);
    });
}
//call the function to print each magician name
show_magicians(magiciansNames);
