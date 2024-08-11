/*
Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
function show_magicians(magicians:string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians:string[]){
    return magicians.map(magician => `The Great ${magician}`)
}
show_magicians(make_great(magicians))


let copymagicians: string[] = magicians.slice();

let copyGreatMagicians:string[] = make_great(copymagicians)

console.log(`\nOriginal Array\n`);
show_magicians(magicians);

console.log(`\n Copied Array\n`);
show_magicians(copyGreatMagicians)

