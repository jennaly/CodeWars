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
  