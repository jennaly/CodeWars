// 6 kyu
// String array duplicates

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Alternate capitalization

// Vowel consonant lexicon


//given an array of strings
//remove all consecutive letters from each string in the array

//non-empty array?
//all strings are non-empty?
//case sensitive?
//only remove duplicates of letters that are consecutive in each string? not all duplicates?
//modify og array ok?

//return empty array for empty array
//return emtpy string for empty string
//iterate through the given array
//for each string, convert the string to letters in an array
//use filter to remove consecutive duplicate letters from each string
//return the letters joined
//return the main array

function dup(s) {
    if (!s.length) {
      return []
    }
    
    return s.map(string => {
      return [...string]
              .filter((letter,index) => letter !== [...string][index - 1])
              .join("")
    })
  };
  