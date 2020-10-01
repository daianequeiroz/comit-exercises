"use strict";

let weekdayNumber = Number(prompt("Assign a numeric value between 1 and 7:", ));

if (weekdayNumber == 1) alert("Today is Monday");
else if (weekdayNumber == 2) alert("Today is Tuesday");
else if (weekdayNumber == 3) alert("Today is Wednesday");
else if (weekdayNumber == 4) alert("Today is Thursday");
else if (weekdayNumber == 5) alert("Today is Friday");
else if (weekdayNumber == 6) alert("Today is Saturday");
else if (weekdayNumber == 7) alert("Today is Sunday");
else alert("Error: Number not between 1-7");



let message;

switch (weekdayNumber) {
    case 1:
        message = "Today is Monday";
        break;

    case 2:
        message = "Today is Tuesday";
        break;

    case 3:
        message = "Today is Wednesday";
        break;

    case 4:
        message = "Today is Thursday";
        break;

    case 5:
        message = "Today is Friday";
        break;

    case 6:
        message = "Today is Saturday";
        break;

    case 7:
        message = "Today is Sunday";
        break;

    default:
        message = "Error: Number not between 1-7"
        break;
}

console.log(message);