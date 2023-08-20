function semordnilap(words) {
    // Write your code here.
    let wordSet = new Set(words);
    let pairs = [];
  
    for (const word of words) {
      let reversedWord = word.split("").reverse().join("");
      if (wordSet.has(reversedWord) && reversedWord !== word) {
        pairs.push([word, reversedWord]);
        wordSet.delete(word);
        wordSet.delete(reversedWord);
      }
    }
    return pairs
  }
  
  // Do not edit the line below.
  exports.semordnilap = semordnilap;
  
  // given a list of unique strings
  // return a list of groups of semordilap pairs
  
  // a pair will have two words where they are the reverse of one another
  // the order of the returned pairs does not matter
  // the order of the strings in each pair does not matter
  
  // base case: given an empty array, return an empty array
  // create an output array
  // create a set from the input array
  // iterate through the input array
  // at each word, check if the reversed word exists in the set and that the reversed word is not the word (to account for palindromes)
  // if it does, push the word and the reversed word as an array to the output array
  // remove the word and the reversed word from the set so that there are no duplicate pairs in the output
  // return the output array
  
  // time complexity:
  // creating a new set => O(n)
  // iterating through the words array => O(n)
  // at each word, iterate through the length of the word => O(m) to generate the reversed string
  // looking for the reversed string in the set => O(1)
  // total time complexity => O(n * m) where n is the length of the input array
  // and m is the length of the longest word in the array
  
  // space complexity:
  // creating a new set => O(n * m)
  // creating an output array => subset of set 
  // total: O(n * m)
  