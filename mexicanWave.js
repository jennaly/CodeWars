// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// 1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  // Code here
  if (str === []) return [];

  const strArray = str.split("");
  const output = [];

  for (let i = 0; i < strArray.length; i++) {
    let word = str.toLowerCase().split("");
    if (word[i] && word[i] !== " ") {
      word[i] = word[i].toUpperCase();
      output.push(word.join(""));
    }
  }

  return output;
}

// given a string
// return an array of all different versions of the string, where each letter in the string appears as uppercase once

// given empty string, return empty string

// split str into individual characters
// iterate through array of str characters
// at each index, initialize a var. for the split string
// access the char. at the current index, if the char is not empty, convert it to uppercase
// join the string, push the string to the output array

// time complexity of O(n) where n is the number of characters in the given string, included empty spaces
// space complexity of O(n) because the size of the output array increases with the size of the input string
