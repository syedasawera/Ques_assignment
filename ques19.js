"use strict";
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
the number of people you are inviting to dinner.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Sara", "Saba", "Ahmed", "imman", "ali", "hibba"];
const guestsToRemove = guestList.slice(2);
guestList = guestList.slice(0, 2);
// Informing guests about the smaller table
console.log("Unfortunately, our new dinner table won't arrive in time, and we can only accommodate two guests.");
for (let guest of guestList) {
    console.log(`My Dear ${guest}, I would like to invite you to dinner. Please join me for an evening of great conversation and delicious food. Thank you.`);
}
for (let removedGuest of guestsToRemove) {
    console.log(`My apologies, ${removedGuest}. Due to unexpected circumstances, we won't be able to accommodate you this time.`);
}
console.log(`Number of people invited to dinner: ${guestList.length}`);
