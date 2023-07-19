function firstNonRepeatingCharacter(string) {
    // Write your code here.
    for (let i = 0; i < string.length; i++) {
      let foundDuplicate = false;
      
      for (let j = 0; j < string.length; j++) {
        if (string[i] === string[j] && i !== j) {
          foundDuplicate = true;
        }
      }
  
      if (!foundDuplicate) return i;
    }
  
    return -1
  }
  
  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
  
// time complexity of O(n^2) because at every character we are looking at the rest of the other characters in the string to see if there are duplicates
// space complexity of O(1)  

function firstNonRepeatingCharacter(string) {
    // Write your code here.
    const hash = {};
    
    for (let i = 0; i < string.length; i++) {
      if (hash[string[i]]) {
        hash[string[i]] += 1;
      } else {
        hash[string[i]] = 1;
      }
    }
  
    for (let j = 0; j < string.length; j++) {
      if (hash[string[j]] === 1) {
        return j
      }
    }
  
    return -1
  }
  
  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
  