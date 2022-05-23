// 8 kyu
// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//given a string
//return a new string where each character is repeated once
//any special charaters/symbols in the string?
//what to return in the case of an empty string?
//repeat every character only once?
//the repeated character is next to the original one?
//return as a string?
//return instead of console.log?

//split string into an array of characters
//iterate through the array
//for each character, map character + itself to the new array
//join characters in the new array and return the string

function doubleChar(str) {
    return [...str].map(char => char + char).join('')
}
