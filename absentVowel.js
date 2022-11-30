// 7 kyu
// Absent vowel

// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

//given a string
//return the index of the character missing from the string

//the index is given? there's an index for every vowel
//only vowels that are missing from the strings?
//one vowel or multiple vowels?
//empty string?
//case sensitive?
//will always be missing at least one vowel?

//base case: return empty string if given empty string
//convert string to lowercase
//make a hash table, storing each vowel as a key, and the corresponding index as the value
//convert string to a set, to use set.has property (checks for a value at constant time)
//iterate through each key in the hash table
//if set.has returns false for a key, return its value

function absentVowel(x){
    //base case
    if (!x.length) return x
    
    //convert string to set for lookup at constant time
    const set = new Set(x.toLowerCase());
    
    const hash = {
      "a": 0,
      "e": 1,
      "i": 2,
      "o": 3,
      "u": 4
    }
    
    for (const vowel in hash) {
      if (!set.has(vowel)) {
        return hash[vowel]
      }
    }
    
  }