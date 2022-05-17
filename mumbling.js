// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


//given a string
//return a string with each letter repeated by their place in the string, 
//if a letter is at position other than the first, the first instance of said 
//letter is capitalized, every other instance is in lowercase

//split the string to individual letters in an array
//iterate through the array, for each letter, check if index == 0
//if index is 0; return the letter uppercased
//if not, use .repeat and repeat the letter [index] times
//return the first letter upperacased and the repetitions lowercased
//join all the letters with "-"
//return the string

function accum(s) {
    return s
            .split("")
            .map((letter, index) => index == 0 ? letter.toUpperCase() : letter.toUpperCase() + letter.toLowerCase().repeat(index))
            .join("-")
  }
  