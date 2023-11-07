"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

 */
let guestList = ["Sara", "Saba", "Ahmed"];
const guestWhoCantAttend = "Saba";
let updatedGuestList = guestList.filter((guest) => guest !== guestWhoCantAttend);
// Add a new guest to the updated list
const new_gest = "John";
updatedGuestList.push(new_gest);
for (let guest of updatedGuestList) {
    console.log(`My Dear ${guest}, I would like to invite you to dinner.
    Please join me for an evening of great conversation and delicious food. Thank you.`);
}
