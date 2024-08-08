"use strict";
/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Alien color is green
let alien_color = 'green';
if (alien_color === "green") {
    console.log("\nAlien coloe is Green, player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("Alien color is Yellow, player earned 10 points");
}
else if (alien_color === "red") {
    console.log("Alien color is Red, player earned 15 points");
}
//Alien color is yellow
alien_color = 'yellow';
if (alien_color === "green") {
    console.log("Alien coloe is Green, player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("\nAlien color is Yellow, player earned 10 points");
}
else if (alien_color === "red") {
    console.log("Alien color is Red, player earned 15 points");
}
//alien_color is red
alien_color = 'red';
if (alien_color === "green") {
    console.log("Alien coloe is Green, player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("Alien color is Yellow, player earned 10 points");
}
else if (alien_color === "red") {
    console.log("\nAlien color is Red, player earned 15 points");
}
