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