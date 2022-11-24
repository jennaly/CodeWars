// 7 kyu
// Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//given a string (word)
//return the middle character of the word
//if the word's length is even, return the middle 2 characters
//if the word's length is odd, return the middle character

//return the character as a string?
//given an empty string, return an empty string?
//any special characters? numbers? floats?

//base cases:
//if string is empty, has a length of 1 or 2, return the string as is
//use the method .charAt() to return a substring in a string at a given index
//check if string.length is even or odd:
//odd:
//take the length of the string and divide by 2
//even:
//take the length of the string and divide by 2, 
//characters are at result and result - 1

function getMiddle(s)
{
  if (s.length < 3) return s
  
  if (s.length % 2 === 0) {
    return s.charAt((s.length / 2) - 1) + s.charAt(s.length / 2)
  } else {
    return s.charAt((s.length / 2))
  }
}
