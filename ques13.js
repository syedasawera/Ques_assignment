"use strict";
/*Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
const favoriteTrans = ["bicycle", "Toyata prado", "corolla", "Honda_Bike"];
const greets = "........i would like to own a honda motorcycle";
for (const transport of favoriteTrans) {
    console.log("I would like to own a " + transport);
}
