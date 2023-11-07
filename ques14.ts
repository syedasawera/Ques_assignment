/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/


const guestList: string[] = ["Sara", "Saba", "Ahmed"];

for (const guest of guestList) {
  console.log(`My Dear ${guest}, I would like to invite you to dinner.
   Please join me for an evening of great conversation and delicious food Thank you.`);
}

export{}