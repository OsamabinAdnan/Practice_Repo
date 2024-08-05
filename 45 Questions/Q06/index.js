"use strict";
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.
Object.defineProperty(exports, "__esModule", { value: true });
let name_withWhiteSpace = " \n Osama bin Adnan \n";
console.log(name_withWhiteSpace);
let name_withoutWhiteSpace = name_withWhiteSpace.trim();
console.log(name_withoutWhiteSpace);
let name$n = "\nOsama bin Adnan\n";
let name$t = "\tOsama bin Adnan\t";
console.log(`For n: ${name$n}`);
console.log(`For t: ${name$t}`);
