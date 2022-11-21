// 6 kyu
// Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//given a string
//return an object that represents the frequency of each alphabetical character in the string

//only letters? no numbers or special characters?
//only one word?
//case sensitive?
//return empty object for empty string?
//return pairs in any specific order?

//base case: if string is empty, return empty object
//create a hash map
//iterate through the string, if the letter is already in the map,
//increment the value
//if it isn't already in the map
//log it to the map
//return the map

function count (string) {  
    if (!string.length) return {}
    
    const hash = {};
    
    for (const letter of [...string]) {
      if (hash[letter] === undefined) {
        hash[letter] = 1;
      } else {
        hash[letter]++
      }
    }
    
    return hash
  }
  