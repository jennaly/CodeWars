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