//6kyu
//Split Strings
// Complete the solution so that it splits the string 
//into pairs of two characters. 
//If the string contains an odd number of characters 
//then it should replace the missing second character 
//of the final pair with an underscore ('_').

//params: string
//returns: split strings into groups of 2, if string has an odd number of characters, replace missing second character in the last set with _
//questions: empty strings? symbols, marks included in og string? 
//pseudo:
//iterate through characters in str
//check if current index is divisible by 2 (even)

//in the same block, check if current index + 1 is equal or greater to str.length
//if no, push `${currrent index}${current index + 1}` to output array
//if yes, push `${current index}_` to output array

function solution(str){
    const output = [];
      for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
          if (i + 1 >= str.length) {
            output.push(`${str.charAt(i)}_`)
          }else {
            output.push(`${str.charAt(i)}${str.charAt(i + 1)}`)
          }
        }
      }
      return output
    }
    


//8 Kyu
//Stringy strings
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'. 
// with size 4 should return : '1010'. 
// with size 12 should return : '101010101010'. 
// The size will always be positive and will only use whole numbers.

//params: size of string (length)
//returns: a string of 1s and 0s, alternating, with a length = param
//ex: stringy(5) => "10101"
//pseudo:
//iterate through length of string
//if current index is even, concatenate 1
//if current index is odd, concatenate 0
//return new string

function stringy(size) {
  let binaryStr = '';
  for (let i = 0; i < size; i++) {
     binaryStr % 2 == 0 ? binaryStr += "1" : binaryStr += "0"
  }
  return binaryStr
}


// 7 Kyu
// Ce*s*r*d Strings
// My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).
// Fortunately, I discovered that the virus hides my censored letters inside root directory.
// It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

//params: string with * randomly dispersed, string with replacement characters
//returns: string with * replaced by characters in given pattern
//example: uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"
//pseudo:
//iterate through infected string
//assign discoveredIndex = 0 outside of loop
//declare corrected (output) string
//if current character in infected string is *, replace * with discovered[discoveredIndex]
//increment discovered Index
//if not, move on to next character
//add infected[i] to correctedStr
//return output str

function censorStr(infected, replacement) {
  let replacementIdx = 0;
  let correctedStr = '';
  for (let i = 0; i < infected.length; i++) {
    if (infected[i] == '*') {
      correctedStr += replacement[replacementIdx];
      replacementIdx++;
    } else {
      correctedStr += infected[i];
    }
  }
  return correctedStr
}

//8 Kyu
// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

//params: 2 strings
//returns: strings concatenated with "are" and template literals
//ex: ("dogs", "great") => "dogs are great"
//pseudo:
//return `${obj} are ${feature}`

var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}


