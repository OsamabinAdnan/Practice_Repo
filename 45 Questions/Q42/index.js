"use strict";
/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
let magicians_name = ["David Blaine", "Criss Angel", "Dynamo"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(magician => `The Great ${magician}`);
}
let great_magicians = make_great(magicians_name);
show_magicians(great_magicians);
