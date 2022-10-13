//sum the strings 
function sumStr(a,b) {
    return `${Number(a) + Number(b)}`
  }

// Tea for Two
// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.
//given a string or a number
//return a string where every '2' character from the original input has been replaced with a t
//example
//1234 => '1t34'
//'1234' => '1t34'
//questions:
//will the input every be an empty string? 
//do I replace all instances of 2 or just the first?
//am I mutating the original string or making another?
//pseudo:
//iterate through the input
//convert the string to an array with split so I can use arr.splice() to transform the characters
//if the character at the current index is 2, replace the element at the current index with "t"
//join the array into a string and return the string 

function tea42(input) {
  let str = input.toString().split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '2') {
      str.splice(i,1,'t')
    } 
  }
  return str.join('')
};

// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3

function strCount(obj){
  var count = 0;
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      count += strCount(obj[key])
    }
    if (typeof obj[key] === "string") {
      count += 1
    }
  }
  return count
}


//given an object with properties and properties values that may contain strings
//return the number of string values found in the object
//ex: 
//const object1 = {
// a: "1",
// b: "2",
// c: 23
//}
//returns 2
//pseudo:
//use Object.values() to return an array of property values
//initialize a variable to use a counter to keep track of the number of strings
//iterate through the values Array, for each element, 
//check if the elemnt is an object
//if it is, pass the current element as an argument in the main function
//check if the element is a string
//if it is, increment the counter
//return the counter value

//MULTIPLY THE STRINGS IN THE ARRAY
// You received an array with two strings. Create a function that will return their product as a string. E.g.
// arrMultiply(['9','6']) should return '54'

//given an array with two integers in the form of strings
//return the product
//question: is the product returned as an integer or a string?
//what to return in the case of an empty array?
//will the array.length always be 2? will there ever be more than 2 elements?
//pseudo:
//use Number() to convert the strings into numbers
//use toString() to convert the output into a string

function arrMultiply(arr){
  return (Number(arr[0]) * Number(arr[1])).toString()
}

// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example
// arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// arrayLowerCase([1, 'Green']) == [1, 'green']

//given an array
//return the array with elements that are strings lowercased
//question: 
//will there every be an empty array?
//return every letter in the word lowercased? or just the first letter in the word?
//return a new array or mutate the original?
//pseudo:
//iterate through elements in the array, check the type, if the element is a string, call .toLowerCase()

function arrayLowerCase(arr) {
  return arr.map(elem => typeof elem === "string" ? elem.toLowerCase() : elem)
}

// Building Strings From a Hash

// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

//given an object
//return the key value pairs as a string, separated by a comma
//in the format "key = value"
//pseudo
//iterate through the object
//make an array to store the keys and values
//join the array as a string, return the string

function solution(pairs){
  let output = []
  for (let key in pairs) {
    output.push(`${key} = ${pairs[key]}`)
  }
  return output.join(",")
}

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

// 7 kyu
// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//given two strings
//return a boolean that validates whether the first string ends with the second string
//will there be any empty strings?? => no
//will the strings consist of any special characters or symbols? => mo
//are both arguments always strings? => yes 
//return or console.log output? => return

//use js str method .endsWith to check whether str ends with ending

function solution(str, ending){
  return str.endsWith(ending)
}

