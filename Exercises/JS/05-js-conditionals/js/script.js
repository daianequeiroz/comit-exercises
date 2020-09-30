"use strict"

alert("Welcome!");


let firstNumber = Number(prompt("Enter the first number:"));
let secondNumber = Number(prompt("Enter the second number:"));
let message;


if (firstNumber > secondNumber) {
    message = `The number ${ firstNumber } is greater than ${ secondNumber }.`;
} else if (firstNumber < secondNumber) {
    message = `The number ${ firstNumber } is lesser than ${ secondNumber }.`;
} else {
    message =`The number ${ firstNumber } is equal to ${ secondNumber }.`;
}
alert(message);
