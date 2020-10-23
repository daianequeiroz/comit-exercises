"use strict";

let movies = prompt ("Enter your 3 favourite movies, separated by a comma");
let movieArray = movies.split(',');

movieArray.forEach(movie => console.log(movie));

for(let movieIndex = 0; movieIndex < movieArray.length; movieIndex++){
    console.log(movieArray[movieIndex]);
}
for(let movie of movieArray){
    console.log(movie);
}

let sentence = prompt("Enter a sentence");
console.log('Original sentence', sentence);
let reverseString = (text) => {
    let words = text.split(' ');
    let reversedWords = words.reverse();
    console.log('reversed words', reversedWords )
    return reversedWords.join(' ');
}

console.log('Reversed sentence', reverseString(sentence));
