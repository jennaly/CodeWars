// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//given a string of words
//return the word that scores the highest
//each letter scores points according to its position in the alphabet
//if two words score the same, return the word that appears earlier in the original string
//all letters are in lowercase

//string consists of letters? any numbers? if so how are numbers scored?
//return empty string if given empty string?
//only return one word even if multiple words have the same score?

//initialize array of the alphabet, using each letter's index as a reference for their respective points
//initialize variable to store the current highest scoring word, only updating if there is another word with a HIGHER score
//iterate through each word in the string, for each word, calculate the sum of the points scored by the letters in said word
//compare the sum with the current best
//return the word holding the current best

function high(x){
    if (!x.length) {
      return ""
    }
    
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
    let highestScore = 0;
    let highestWord = "";
    
    x.split(" ").forEach(word => {
      let sum = 0;
      for (const letter of [...word]) {
        sum += alphabet.indexOf(letter) + 1
      }
      if (sum > highestScore) {
        highestScore = sum;
        highestWord = word;
      }
    })
    
    return highestWord
  }

  