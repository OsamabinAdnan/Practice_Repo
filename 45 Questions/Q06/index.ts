//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.

let name_withWhiteSpace:string = " \n Osama bin Adnan \n"
console.log(name_withWhiteSpace);

let name_withoutWhiteSpace:string = name_withWhiteSpace.trim()
console.log(name_withoutWhiteSpace);

let name$n : string = "\nOsama bin Adnan\n"
let name$t : string = "\tOsama bin Adnan\t"

console.log(`For n: ${name$n}`);
console.log(`For t: ${name$t}`);



