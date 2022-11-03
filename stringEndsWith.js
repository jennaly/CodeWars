
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
  
  