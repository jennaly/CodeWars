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