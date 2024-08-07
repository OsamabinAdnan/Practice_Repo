/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. 
  Print your list to make sure you actually have an empty list at the end of your program.
*/

let guestsList: string[] = ["Osama", "Talha", "Huzafa"]
let message :string = "You are invited for a dinner"

guestsList.forEach(guest=>{
    console.log(`"Hello ${guest}, ${message}"`);
    
})
let notComing = guestsList[0]
console.log(`\n"${notComing} is not coming for dinner"\n`);

guestsList.splice(0,1,"Hamdan")
guestsList.forEach(NewList => {
    console.log(`"Hello ${NewList}, you are invited for dinner with me tomorrow at 8 PM"`);
    
})
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log(`\n"Good news! I have found big table for Dinner so more peoples can join in`);
// Add one new guest to the beginning of your array.
guestsList.unshift("Sufiyan")
console.log("Adding one guest at the start of array: ", guestsList );
// Add one new guest to the end of the array.
guestsList.push("Osman")
console.log("Adding one guest at the end of array: ", guestsList );

//Add one new guest to the middle of the arry

let middleIndex:number = (guestsList.length/2)

guestsList.splice(middleIndex,0,"Arham")
console.log("Adding one guest at the middle of array: ", guestsList);

console.log(`\n"Update list of Guest"\n`);

guestsList.forEach(newGuests => {
    console.log(`"Hello ${newGuests}!, you are invited for a dinner with me tomorrow at 8 PM"`);    
})

//Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(`\n"Unfortunately! new dinner table won’t arrive in time for the dinner, so I can invite only 2 peoples for dinner with me"\n`);

//Each time you pop a name from your list,print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestsList.length > 2) {
    let removeGuest = guestsList.pop()
    console.log(`"Very Sorry to inform you, ${removeGuest} I can’t invite you to dinner due to unavailability of big table"`);
    
}
//Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`\n"Invitation for last 2 persons on the list"\n`);

guestsList.forEach(lastTwo =>{
    console.log(`"${lastTwo}! Glad to inform you that you are still on the list for dinner with me"`);    
})

//Print your list to make sure you actually have an empty list at the end of your program.
guestsList.pop()
console.log(guestsList);
guestsList.pop()
console.log(guestsList);
