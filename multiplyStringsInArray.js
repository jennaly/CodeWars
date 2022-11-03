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