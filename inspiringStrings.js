// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.
// Example:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

//given a string of space separated words
//return the word in the string with the longest length
//if there are multiple words with the longst lenght, return the last instance
//question: empty string?
//pseudo:
//convert the string into an array of words
//initialize a variable to store the val

function longestWord(stringOfWords){
    let array = stringOfWords.split(" ");
    let longestWord = array[0];
    array.forEach(word => {
      if (word.length >= longestWord.length) {
        longestWord = word
      }
    })
    return longestWord
  }
  