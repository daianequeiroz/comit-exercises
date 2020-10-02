"use strict";

//Define a function that will show even numbers from 0 to 100 as output
function showEvenNumbers() {
    for (let i = 2; i <= 100; i++) {
        if (i % 2 == 0) console.log(i);
    }
}

showEvenNumbers();

//Define a function named showUser that will output the following data...

function showUser(){
    console.log("Name: " + getName());
    console.log("Age: " + getAge());
    console.log("Phone: " + getPhone());
    console.log("Street: " + getStreet());
    console.log("Postal code: " + getPostalCode());
    console.log("Marital Status: " + checkMaritalStatus());
}

function getName(){
    let name = prompt("Please, enter your name:","");
    return name;
 }

function getAge(){
    let age = prompt("Please, enter your age:","");
    return age;   
}

function getPhone(){
    let phone = prompt("Please, enter your phone:","");
    return phone;
}

function getStreet(){
    let street = prompt("Please, enter your street:","");
    return street;
}

function getPostalCode(){
    let postalCode = prompt("Please, enter your postal code:","");
    return postalCode;
}

function checkMaritalStatus(){
    let maritalStatus = confirm("Are you married? Click 'Ok' if it is true.");
    if (maritalStatus){
        return "Yes";
    }else{
        return "No";
    }
}

showUser();

//Define a evenNumbers variable and assign a function as value:
//- When executed the evenNumbers function will print even numbers between 0 and 100 as output
//- Call this function 5 times
let evenNumbers = function() {
    for (let i = 2; i <= 100; i++) {
        if (i % 2 == 0) console.log(i);
    }
};

for (let i = 1; i <= 5; i++) {
    evenNumbers();
}

// //Define a fibonacci variable and assign a function value
// //You should be able to pass an argument to the function that limits the maximum number of calculations
let fibonacci = function (num) {
    if (num === 1) {
        return [0, 1];
    } else {
        let n = fibonacci(num - 1);
        n.push(n[n.length - 1] + n[n.length - 2]);
        return n;
    }
}
console.log(fibonacci(15));

// Define a showName variable and assign a function as value:
// - Call this function 2 times
// - When the showName function gets executed it will print your name with the following output format:
// ===========
// =  Ozzie  =
// ===========

let showName = function(name){
    let result = ""
    for(let i = 0; i < name.length+4; i++)
        result += "=";
        result += "\n";
        result += `= ${name} =\n`;
    for(let k = 0; k < name.length+4; k++)
    result += "="
    console.log(result);
}
showName(getName());