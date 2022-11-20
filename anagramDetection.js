// 7 kyu
// Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//given two strings
//return true if the strings are anagrams, false otherwise

//case insensitive?
//special characters?
//empty string?

//iterate through first string, log each letter in a hash map, if a letter occurs more than once, increment its value
//iterate through second string, if a letter is not in the hash map, return false
//if it is in the map, decrement the value
//iterate through the map, if theres a value other than 0, return false
//else, return true

// write the function isAnagram
var isAnagram = function(test, original) {
    if (test.length !== original.length) return false
    
    const hash = {};
    test = test.toLowerCase();
    original = original.toLowerCase();
    
    for (const letter of [...test]) {
      if (hash[letter]) {
        hash[letter]++
      }  else {
        hash[letter] = 1
      }
    }
    
    for (const letter of [...original]) {
      if (hash[letter] === undefined) {
        return false
      } else {
        hash[letter]--
      }
    }
    
    for (const letter in hash) {
      if (hash[letter] > 0) {
        return false
      }
    }
    
    return true
  };