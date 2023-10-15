function commonCharacters(strings) {
    // Write your code here.
  
    const hash = {};
    const output = [];
    
    for (const string of strings) {
      let uniqueChars = new Set(string);
  
      for (const char of uniqueChars) {
        if (hash[char]) {
          hash[char] += 1;
        } else {
          hash[char] = 1;
        }
      }
    }
  
    for (const key in hash) {
      if (hash[key] === strings.length) {
        output.push(key);
      }
    }
    return output;
  }
  
  // Do not edit the line below.
  exports.commonCharacters = commonCharacters;
  
  // iterate through list of strings
  // at each string, make a set to hold unique characters from the string
  // iterate through the set to log characters and their frequency in a hash map
  // iterate through hash map, checking which character has a frequency of strings.length
  // add qualified characters to the output array
  // return output array
  
  // time complexity of O(n x m) where:
  // n is the length of the strings array (number of strings)
  // m is the length of the longest string in the strings array (number of characters)
  
  // space complexity(c) where c is the number of unique characters 