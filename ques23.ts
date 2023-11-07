/*Conditional Tests: Write a series of conditional tests.
 Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */

let number = 5;

console.log(`Is number == 5? I predict ${number == 5}.`);
console.log(`Is number != 5? I predict ${number != 5}.`);
console.log(`Is number > 3? I predict ${number > 3}.`);
console.log(`Is number <= 5? I predict ${number <= 5}.`);
console.log(`Is number === '5'? I predict ${number === 5}.`);

let isRaining = true;

console.log(`Is it not raining? I predict ${!isRaining}.`);

let apples = 3;
let oranges = 5;

console.log(`Are there more apples than oranges? I predict ${apples > oranges}.`);
console.log(`Is there at least one fruit? I predict ${apples > 0 || oranges > 0}.`);

let isSunny = false;

console.log(`Is it sunny and not raining? I predict ${isSunny && !isRaining}.`);
console.log(`Is it either sunny or not raining? I predict ${isSunny || !isRaining}.`);

