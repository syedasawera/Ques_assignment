"use strict";
/*More Guests: You just found a bigger dinner table,
 so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end
 of your program informing people that you found a bigger dinner table.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Sara", "Saba", "Ahmed"];
guestList = guestList.filter((guest) => guest !== "Saba");
console.log("Good news! We found a bigger dinner table!");
guestList.unshift("Ella");
guestList.splice(Math.floor(guestList.length / 2), 0, "Alice");
guestList.push("Bob");
for (let guest of guestList) {
    console.log(`My Dear ${guest}, I would like to invite you to dinner. Please join me for an evening of great conversation and delicious food. Thank you.`);
}
