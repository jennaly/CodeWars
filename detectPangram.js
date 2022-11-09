// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//given a string
//return true if the string uses all the letters in the alphabet at least once

//string consists only of letters, no special characters? 
//string is non-empty?
//return boolean?
//case insensitive? "A" checks off "a"?

//create a hashmap, logging each letter as a key with a value of 0
//transform every letter in the string to lowercase
//iterate through the string, for each letter, increment its value in the hashmap
//iterate through the map, if there is a key with a value of 0, return false
//if every key has a value greater than 0, return true

function isPangram(string){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const hash = {};
    
    for (const letter of [...alphabet]) {
      hash[letter] = 0
    }
    
    for (const letter of [...string.toLowerCase()]) {
      hash[letter]++
    }
    
    for (const key in hash) {
      if (hash[key] < 1) {
        return false
      }
    }
    
    return true
  }
  