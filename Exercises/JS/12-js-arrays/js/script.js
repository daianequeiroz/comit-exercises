"use strict";

let siblings = ["Diogo", "Marcus", "Camile", "Tiago"];
let parents = ["Josmar", "Neuza"];

let family = siblings.concat(parents);
console.log(family);

family.push("Snoopy");
console.log(family);

family.reverse();
console.log(family);

parents[1] = "Mãe";
console.log(parents);

for (let i = 0; i < family.length; i++) {
    console.log(family[i]);
}

for (let person of family) {
    console.log(person);
}