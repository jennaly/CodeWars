// 6kyu
// Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example

// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//given a string
//replace every letter with its position in the alphabet 

//return empty string for empty string?
//string includes other characters aside from letters in the alphabet?
//letters can be either lowercase or uppercase?
//return the sequence of numbers as a string?

//remove non-alphabetical characters from string
//convert string to all-lowercase
//make an array for the alphabet
//initialize an output array
//iterate through the filtered string
//for each letter, push its alphabetical position to the output array
//return the output array

function alphabetPosition(text) {
    //base case
    if (!text.length) {
      return ""
    }
    
    const output = [];
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
    
    const filteredString = text.toLowerCase().replace(/[^a-z]/g, "")
    
    for (const letter of [...filteredString]) {
      output.push(alphabet.indexOf(letter) + 1)
    }
    
    return output.join(" ")
  }
  
  
