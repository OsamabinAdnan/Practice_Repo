/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

// defining an array having magician name
let magiciansNames: string[] = ["David", "Chris", "Tom", "Luis"];

//defining a function to print each magician name fron an array
function show_magicians(magicianNames:string[]){
    magiciansNames.forEach(magician => {
        console.log(magician);
    })
}
//call the function to print each magician name
show_magicians(magiciansNames);