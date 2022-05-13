// Simple Fun #176: Reverse Letter

// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//given a string
//return the string with the characters reversed and non-alphabetic characters removed

//string consists of numbers, letters, and symbols?
//return empty string for empty string?
//return output as a string?

//use replace to replace all non-alphabetic characters with ""
//split string to letters in array to use .reverse
//return joined string

function reverseLetter(str) {
    return str
            .replace(/[^a-z]/g, "")
            .split("")
            .reverse()
            .join("")
  }
  
// manual reverse

function reverseLetter(str) {
    const filteredString = str.replace(/[^a-z]g/, "")

    const output = [];

    for (const letter of [...filteredString]) {
        output.unshift(letter)
    }

    return output
  }

// to use push instead of unshift (constant vs O(n))
function reverseLetter(str) {
    const filteredString = str.replace(/[^a-z]g/, "")

    const output = [];

   for (let i = [...filteredString].length - 1; i >= 0; i--) {
        output.push(letter)
    }

    return output
  }
