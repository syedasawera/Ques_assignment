/*Intentional Error: If you haven’t received an array index error in one of your programs yet,
 try to make one happen. Change an index in one of your programs to produce an index error.
  Make sure you correct the error before closing the program.
*/

const numbers = [1, 2, 3, 4, 5];

const index = 10; // This is out of bounds
const value = numbers[index];

console.log(`Value at index ${index} is: ${value}`);
