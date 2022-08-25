//6kyu
//Split Strings
// Complete the solution so that it splits the string 
//into pairs of two characters. 
//If the string contains an odd number of characters 
//then it should replace the missing second character 
//of the final pair with an underscore ('_').

//params: string
//returns: split strings into groups of 2, if string has an odd number of characters, replace missing second character in the last set with _
//questions: empty strings? symbols, marks included in og string? 
//pseudo:
//iterate through characters in str
//check if current index is divisible by 2 (even)

//in the same block, check if current index + 1 is equal or greater to str.length
//if no, push `${currrent index}${current index + 1}` to output array
//if yes, push `${current index}_` to output array

function solution(str){
    const output = [];
      for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
          if (i + 1 >= str.length) {
            output.push(`${str.charAt(i)}_`)
          }else {
            output.push(`${str.charAt(i)}${str.charAt(i + 1)}`)
          }
        }
      }
      return output
    }
    


//8 Kyu
//Stringy strings
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'. 
// with size 4 should return : '1010'. 
// with size 12 should return : '101010101010'. 
// The size will always be positive and will only use whole numbers.

//params: size of string (length)
//returns: a string of 1s and 0s, alternating, with a length = param
//ex: stringy(5) => "10101"
//pseudo:
//iterate through length of string
//if current index is even, concatenate 1
//if current index is odd, concatenate 0
//return new string

function stringy(size) {
  let binaryStr = '';
  for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
      binaryStr += "1"
    } else {
      binaryStr += "0"
    }
  }
  return binaryStr
}

