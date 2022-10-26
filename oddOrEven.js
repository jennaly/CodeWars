// 7 kyu
// Odd or Even?

// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//given array of integers
//determine if the sum of the integers is an odd or even number

//elements in array are numbers?
//return the output as a string?
//return even for zeroes?
//if array is empty consider it as [0] => return "even"?

//check if array.length = 0; if so return "even"
//use .reduce method to get the sum of the integers
//check if the sum is odd or even, return the value

function oddOrEven(array) {
    return array.length == 0 ? "even" : array.reduce((acc, c) => acc + c) % 2 == 0 ? "even" : "odd"
}
  
//with an if else statement
function oddOrEven(array) {
    if (array.length == 0) {
        return "even"
    } else if (array.reduce((acc, c) => acc + c, 0) % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

