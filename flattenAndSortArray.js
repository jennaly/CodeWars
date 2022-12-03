// 7 kyu
// Flatten and sort an array

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:


//given an array of integers
//return the "flattened version" with the intergers sorted in ascending order

//flattened means taking elements from the nested arrays and keeping them in a single array?
//sorted from least to greatest?
//return a single empty array if given emtpy array(s)?
//every element is nested?

//use .flat() method to create a new array with all sub-array eleemnts concatenated into it recursively up to the specified depth
//use .sort() and pass in comparison fucntion to sort integers

function flattenAndSort(array) {
  return array.flat().sort((a,b) => a - b)
}
