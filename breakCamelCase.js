// 6 kyu
// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//given a string, may or may not contain multiple words joined together with camelCase
//return the string with the words split up with a space if there are multiple words
//identify a new word by uppercase letters

//return empty string if given empty string?
//return string as is if every character is uppercased?
//any special characters/numbers? integers? floats?

//convert string to array
//iterate through array
//initialize output array
//if letter is at index 0, push letter to output array as is
//if letter is not at index 0, check to see if it's uppercase or lowercase
//if uppercase, push a space and the letter
//if lowercase, push letter to output array as it
//return output array joined as a string

function solution(string) {
    if (!string.length) return ("")
    
    const output = [];
    
    [...string].forEach((letter, index) => {
        if (index !== 0 && letter.toUpperCase() == letter) {
          output.push(" ", letter)
        } else {
          output.push(letter)
        }
    })
    
    return output.join("")
  }
  