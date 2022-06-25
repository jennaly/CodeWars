//Convert a String to a Number!
// Description

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// const stringToNumber = function(str){
//     return Number(str);
//   }

const stringToNumber = str => Number(str)
  
  //param: str with number value
  //return: number type data with the same number value 
  //questions: negative numbers? arguments will always be a string?
  //example: "1234" --> 1234
  // "605"  --> 605
  // "1405" --> 1405
  // "-7" --> -7
  //pseudo: 
  //ues global method Number()