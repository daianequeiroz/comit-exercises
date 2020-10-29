"use strict";

let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(number => number ** 2);
console.log(numbers);
console.log(squared);

let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = arrNumbers.filter(number => number % 2 == 0)
let oddNumbers = arrNumbers.filter(number => (number % 2 != 0));
console.log(arrNumbers);
console.log(evenNumbers);
console.log(oddNumbers);

let people = [
    { name: "Daiane", age: 36, city: "Winnipeg" },
    { name: "Rodrigo", age: 46, city: "Rio de Janeiro" },
    { name: "Samuel", age: 15, city: "Vancouver" },
    { name: "Maiara", age: 17, city: "Saskatoon" },
    { name: "Diogo", age: 36, city: "Toronto" }];
let oldPeople = people.filter(people => people.age > 30);
let youngSasks = people.filter(people => people.age < 20 && people.city === "Saskatoon");
let ages = people.map(people => people.age);

console.log(oldPeople)
console.log(youngSasks);
console.log(ages);