"use strict";

for (let i = 1; i < 1000; i++) {
   let result = +i;
    if (result > 400) break;
    console.log(result);
}
//Show numbers from 0 to 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

let x = 0;
while (x <= 10) {
    console.log(x);
    x++;
}

//Show numbers from 100 to 0
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

i = 100;
do {
    console.log(i);
    i--;
} while (i >= 0);

let j = 100;
while (j >= 0) {
    console.log(j);
    j--;
 }

//Show even numbers between 0 and 100
for (let i = 2; i < 100; i++) {
    if (i % 2 == 0) console.log(i);
}

x = 2;
do {
    if (x % 2 == 0) console.log(x);
    x++;
} while (x < 100);

let y = 2
while (y < 100) {
    if (y % 2 == 0) console.log(x);
    y++;
}