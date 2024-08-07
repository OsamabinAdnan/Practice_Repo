"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let guestsList = ["Osama", "Talha", "Huzafa"];
let message = "You are invited for a dinner";
guestsList.forEach(guest => {
    console.log(`"Hello ${guest}, ${message}"`);
});
let notComing = guestsList[0];
console.log(`\n"${notComing} is not coming for dinner"\n`);
guestsList.splice(0, 1, "Hamdan");
guestsList.forEach(NewList => {
    console.log(`"Hello ${NewList}, you are invited for dinner with me tomorrow at 8 PM"`);
});
