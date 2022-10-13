function correctTail(bod, tail) { 
    sub = bod.substr(bod.length - tail.length)
    
    if (sub == tail) {
      return true
    } else {
      return false
    }
  }

  function openOrSenior(data){
    let output = [];
    data.forEach(pair => pair[0] >= 55 && pair[1] > 7 ? output.push("Senior") : output.push("Open"));
    return output
  }
  
  //params: array with data pairs that indicate [age, handicap]
  //returns: an array with values corresponding to the senior-eligibility of data pairs
  //example: [18,20] => "Open"; [61,12] => "Senior"
  //pseudo: 
  //make a new array
  //loop through each data set in the data array
  //test each pair against conditions: if a > 55 AND b > 7 => "senior", if not => "open"
  //push result of each pair into new array
  
//   Summation

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//param: a number (n)
//returns: the summation of every number for one to n
//example:summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
//pseudo: 
//create a variable (output) with value = 0
//loop thru numbers up to n
//add each number to the output
//return the output

var summation = function (num) {
  let output = 0;
  for (let i = 1; i <= num; i++) {
    output += i
  }
  return output
}

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  
  let hash = {};
  hash[letter] = 0;
  for (let i = 0; i < str.length; i++) {
    if(hash[str.charAt(i)] !== undefined) {
      hash[letter] += 1;
    }
  }
  return hash[letter]
}

//param: a string and a letter
//returns: number that letter appears in string
//questions: never appears in str? empty str? 
//ex: 
//("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
//pseudo
//set up hash table where key is the letter and the value is 0
//loop through string test each letter against a condition to see if it's the same letter in the hash table
//if yes, update the key value and increment it
//return key value as a number

const lovefunc = (flower1, flower2) => flower1 % 2 == 0  && flower2 % 2 !== 0 || flower2 % 2 == 0  && flower1 % 2 !== 0 ? true : false
//params: num of petals on flower1, num of petals on flower2
//returns: boolean value; true if one is odd and the other is even
//q: inputs are number types? flower with 0 petals? 
//pseudo:
//test against conditional, if a petal number is divisible by 2 then it's even, if not it's odd
//return false when both flowers return the same value 

const playerRankUp = points => points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false

//params: points
//returns: well done statement or false value
//question: will arg be number type? 
//example: playerRankUp(98) => "false"; playerRankup(101) => "Well done.."
//pseudo:
//use conditional to return false for values less than 100, and well done statement for values equal or higher to 101

const isReallyNaN = (val) => {
  return Number.isNaN(val) 
};

//param: value, could be a number, could not be a number, could be undefined
//return: true if val is not a number, false if val is a number or is undefined
//ex: isReallyNaN(1) => false; isReallyNaN("1") => true; isReallyNaN(undefined) => false
//pseudo:
//ECMAScript 2015 contains the Number.isNaN() function. Number.isNaN(x) is a reliable way to test whether x is NaN or not. Even with Number.isNaN, however, the meaning of NaN remains the precise numeric meaning and not, "not a number". Alternatively, in the absence of Number.isNaN, the expression (x != x) is a more reliable way to test whether variable x is NaN or not, as the result is not subject to the false positives that make isNaN unreliable.

function noSpace(x){
  return x.split(' ').join('')
 }
 
 //param: a string
 //return: same string but with spaces removed, spaces could be on either ends of the string or in the string
 //questions: empty string? typeof x?
 //pseudo:
 //split str at spaces into elems in an array and join them


 function positiveSum(arr) {
  let newArr = arr.filter(n => n > 0);
  return newArr.reduce((preV, currV) => preV + currV, 0)
}

//param: array of numbers
//returns: sum of all the positive numbers in the array
//ex: positiveSum([1,2,3,4,5]) => 15; positiveSum([1,-2,3,4,5]) => 13
//pseudo:
//filter numbers that are positive into a new array
//use reduce to get sum of numbers in new array
//return sum

var number=function(array){
  return array.map(function (str, index) {
    return (index + 1) + ": " + str
  })
}
  
//params: an array of strings
//returns: an array of key-value pairs (data type: string), where the line number is appended to the string
  //ex: ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
  //pseudo:
  //use array.map, apply an anonymous function to each elem in the array
  //function passes in line and index params and returns line: index
  //index + 1 because line number starts at 1



//For every good kata idea there seem to be quite a few bad ones!
//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
//If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
//If there are no good ideas, as is often the case, return 'Fail!'.

//params: array of ideas
//q: multiple elements to array? elements are in string form? empty array? 
//returns: one OR two good ideas => publish, more than 2 good ideas =>  "I smell a series!", no good ideas => return "fail"
//example: 
//['bad', 'bad', 'bad'] => 'Fail!'
//['good', 'bad', 'bad', 'bad', 'bad'] => 'Publish!'
//['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'] => 'I smell a series!'
//pseudo:
//filter out all "good" elements from original array
//conditional: 2 or more => series; up to 2 => publish; empty => fail


function well (ideas) {
  const goodIdeas = ideas.filter(idea => idea == "good");
//   if (goodIdeas.length == 0) {
//     return "Fail!"
//   } else if (goodIdeas.length <= 2) {
//     return "Publish!"
//   } else {
//     return "I smell a series!"
//   }

  return goodIdeas.length > 2 ? "I smell a series!" : goodIdeas.length > 0 ? "Publish!" : "Fail!"
}

//Create a function that takes an
//integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//params: number
//returns: whether the number is even or odd
//questions: whole number? data type: number? 
//pseudo:
//conditional: if number is divisible by 2 => "even", otherwise "odd"
function even_or_odd(number) {
  return number % 2 == 0 ? "Even" : "Odd"
}

//Create a method to see whether the string is ALL CAPS.
////params: a string
//returns: boolean value - true if all characters is uppercase, false if ANY character is lowercase
//example: 
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
//pseudo: 
// replicate string and use .toUpperCase(); compare said string to original string 

String.prototype.isUpperCase = function() {
  return this == this.toUpperCase() 
}

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//params: a boolean value
//returns: Yes if boolean value is true, false if boolean value is false
//example: boolToWord(true) => "Yes"
//boolToWord(false) => "No"
//pseudo: 
//use ternary operator to see if value is truthy or falsy
//return yes for truthy, no for falsy

function boolToWord (bool) {
  return bool ? "Yes" : "No"
}

//   This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`
}

//params: two numbers - coefficient and exponent
//returns: product of the two numbers +"x^" + exponent - 1
//questions: data type of arguments? negative exponents?
//pseudo: basic math operations, use template literals to string everything together

//2SUM

function twoSum(numbers, target) {
  const hash = {};
  for (let i = 0; i < numbers.length; i++) {
    const curr = numbers[i];
    const diff = target - curr;
    
    if (hash[diff] == undefined) {
      hash[curr] = i;
    } else {
      return [hash[diff], i]
    }
  }
  return []
}

//params: an array of numbers, a target number that two numbers in the array adds up to
//returns: indices of the two numbers in the array that adds up to the target number
//questions: number types? only one solution? same index ok?
//ex: ([1,2,3],4) =>     [0,2]
//pseudo: 
//make a hash map
//iterate through array
//for each element in the array, check to see if the addend has already appeared in the map
//if it has, return the current index and the index of the addend
//if not, store the addend and its index in the map as addend : index


function greet(name){
  return `Hello, ${name} how are you doing today?`
}


function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}

//params: str
//returns: str without vowels
//ex: "hello world" => "hll wrld"
//qs: case sensitive? empty str? new str or modified str?
//use regex with flags global and case insensitive 
//global - match all occurences, case insensitive so that it matches both lower and uppercase occurences
//wrap pattern in brackets [] to specify that it's a range
//replace occurences with empty str

function paperwork(n, m) {
  return (n < 0 || m < 0) ? 0 : n * m
}


//given number of classmates and number of pages for each classmate's paperwork
//questions: number types? negative?
//return number of pages needed (classmates x pages for paperwork)
//pseudo
//check if n < 0 or m < 0, if yes return 0, if not return n * m


// Messi goals function

// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// 7 kyu
// Determine if the poker hand is flush
// Your function should return true if the hand is a flush, false otherwise.
// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// Examples
// ["AS", "3S", "9S", "KS", "4S"]  ==> true
// ["AD", "4S", "7H", "KS", "10S"] ==> false

//store suit of first card in a variable
//iterate through every card after
//for each card, check if the suit at index i is the same as the suit of the first card
//at any point that the suits don't correspond
//return false
//else, return true

function isFlush(cards) {
  const firstSuit = cards[0].split("")[cards[0].length - 1 ]
  for (let i = 1; i < cards.length; i++) {
    let cardSuit = cards[i].split("")[cards[i].length - 1] 
    if (cardSuit !== firstSuit) {
      return false
    } 
  }
  return true  
}

// 7 kyu
// Multiply Word in String
// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5) 
// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

// Simple. Good luck.

//given a string, a number for the index, and a number for the rounds of repetition
//return a string consisting of the value at index x being repeated num times
//substrings are joined with -
//questions:
//loc always be in range between 0 and str.length - 1?
//loc and num are of number type?
//return output string as a string?
//pseudo
//init a var to store the substrings in an array
//iterate from 0 to num
//in each iteration, push the substring to the output var
//return the output array as a string, using arr.join("-")

function modifyMultiply (str,loc,num) {
  let output = [];
  for (let i = 0; i < num; i++) {
    output.push(str.split(" ")[loc])
  }
  return output.join("-")
} 
