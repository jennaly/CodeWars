// 7 kyu
// Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

// given a string
// return an array of two new strings, 
// one with characters at even indexes capitalized, 
// the other with characters at odd indexes capitalized

// strings in output array need to be in any specific order?
// any special characters? numbers?
// return 2 empty strings in an array if given an empty string?

// base case: if s is empty, return ["", ""]
// convert s into letters in an array
// iterate through said array
// map each element to a new array, if a letter is at an even index, map that letter capitalized
// iterate through the array again
// do the same, with letters at odd indexes capitalized
// join the letters in both arrays into strings
// return the strings as separate elements in an array

function capitalize(s){
    if (!s.length) return ['', '']
    
    const evenCapitalized = [...s].map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter)
    const oddCapitalized = [...s].map((letter, index) => index % 2 === 0 ? letter : letter.toUpperCase())
  
    return [evenCapitalized.join(""), oddCapitalized.join("")]
    
};

//refactor: modularized

function capitalize(s){
    if (!s.length) return ['', '']
    
    return [evenCapitalized(s), oddCapitalized(s)]
    
};

function evenCapitalized (s) {
    return [...s]
        .map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter)
        .join("")
}

function oddCapitalized (s) {
    return [...s]
        .map((letter, index) => index % 2 === 0 ? letter : letter.toUpperCase())
        .join("")
}
