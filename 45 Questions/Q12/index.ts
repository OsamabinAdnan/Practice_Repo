//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
//The text of each message should be the same, but each message should be personalized with the person’s name.

let names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
let message: string = "Would you like to learn some Typescript?"

names.forEach(name => {
    console.log(`${name}!, ${message}`);
    
})