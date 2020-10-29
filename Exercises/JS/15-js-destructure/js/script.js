"use strict";

let favFruit = prompt("Enter their top 5 favourite fruits, separated by a comma:", "");

let fruitArray = favFruit.split(",");
let orderfruitArray = fruitArray.sort();

for (let fruit of orderfruitArray) {
    console.log(fruit);
}
let [first, second, third, ...rest] = orderfruitArray;

alert(`The 3 first favorite fruits: ${first}, ${second}, ${third}`);
alert(`The rest of the fruits: ${rest}`);
