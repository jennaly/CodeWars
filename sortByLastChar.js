// 7kyu
// Sort by Last Char

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//given a string of words
//return an array of the words, sorted alphabetically by the last letter in each word

//any inordinary characters/symbols in the strings?
//return empty array if given empty string?

//get the character code of the last letter
//sort words by ^ value
//lexicographical order: lowest numeric value for character code to highest numeric value for character code

function last(x){
    return x.split(" ").sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
  }