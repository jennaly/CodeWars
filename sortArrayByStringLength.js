// 7 kyu
// Sort array by string length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//given an array of strings
//return an array with the strings sorted by length, from shortest to longest

//strings contain any inordinary characters/symbols?
//array is non-empty?
//empty string?

//use .sort method and pass in comparison function as callback

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
};
  