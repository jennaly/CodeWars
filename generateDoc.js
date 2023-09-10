function generateDocument(characters, document) {
    // Write your code here.
    if (characters.length < document.length) return false;
  
    const documentMap = {};
    const charactersMap = {};
  
    for (const docChar of document) {
      if (documentMap[docChar]) {
        documentMap[docChar] += 1;
      } else {
        documentMap[docChar] = 1;
      }
    }
  
    for (const char of characters) {
      if (charactersMap[char]) {
        charactersMap[char] += 1;
      } else {
        charactersMap[char] = 1;
      }
    }
  
    for (const key in documentMap) {
      if (charactersMap[key]) {
        if (charactersMap[key] < documentMap[key]) {
          return false;
        }
      } else {
        return false;
      }
    }
    
    return true;
  }
  
  // Do not edit the line below.
  exports.generateDocument = generateDocument;
  
  // given a string of available characters and a string representing a document
  // return boolean; true: can generate the document using the available characters
  // otherwise, false
  
  // frequency of unique characters in characters >= frequency of unique characters in the document string
  
  // create a hash map of the characters in the document and record their frequencies
  // do the same for characters
  // iterate through document hash map and compare with the frequencies in the characters hash map
  function generateDocument(characters, document) {
    // Write your code here.
    if (characters.length < document.length) return false;
  
    const hash = {};
  
    for (char of characters) {
      if (hash[char]) {
        hash[char] += 1;
      } else {
        hash[char] = 1;
      }
    }
  
    for (docChar of document) {
      if (hash[docChar] && hash[docChar] > 0) {
        hash[docChar] -= 1;
      } else {
        return false;
      }
    }
  
    return true;
  }
  
  // Do not edit the line below.
  exports.generateDocument = generateDocument;
  
  
  // iterate through characters string and create a hash map to store the characters and their frequencies 
  // iterate through document string, for each character, check if it's in the hash table and if its frquency is >0
  // if it is not, return false
  // if it is, decrement the freuquency by 1
  // return true at the end
  
  // time complexity of O(n + m) where n is the length of the characters string and m is the length of the document string
  // in the worst case scenario where n is much larger than m, the time complexity is O(n)
  // space complexity of O(c) where c is the number of unique characters in the characters string (also the number of keys in the hash map)
  