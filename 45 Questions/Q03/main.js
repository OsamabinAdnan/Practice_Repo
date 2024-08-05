"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Osama bin Adnan";
console.log("Lower Case: ", name.toLowerCase());
console.log("Upper Case: ", name.toUpperCase());
console.log("Title Case:", name.replace(/\b\w/g, c => c.toUpperCase()));
/*
\b: A word boundary anchor that matches the position between a word character (like a letter or digit) and a non-word character, or at the start or end of a string.

\w: Matches any word character (letters, digits, or underscore).

g: The global flag, which ensures that the replacement is applied to all matches in the string, not just the first one.

Replacement Function c => c.toUpperCase() converts the matched character to uppercase.
*/
