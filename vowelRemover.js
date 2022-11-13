// Vowel remover
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//given a string
//remove all lowercase vowels

//only remove lowercase vowels?
//string consists of a single word, no spaces? => will be spaces
//only letters, no special characters?
//return empty string for empty string?

//base case: return empty string for empty string
//log vowels to a hash table for constant lookup
//initialize output array
//split the given string into letters in an array
//iterate through the array, for each letter, check if it's in the hash table
//if it is not, push it to the output array
//return elements in the output array joined as a string

function shortcut (string) {
    const vowels = {
      "a": true,
      "e": true,
      "i": true,
      "o": true,
      "u": true
    }
    
    const output = [];
    
    for (const letter of [...string]) {
      if (vowels[letter] === undefined) {
        output.push(letter)
      }
    }
    
    return output.join("")
  }

//regex solution
function shortCut(string) {
    return string.replace(/[aeiou]/g, '');
}