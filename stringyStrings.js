

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
       binaryStr % 2 == 0 ? binaryStr += "1" : binaryStr += "0"
    }
    return binaryStr
  }
  
  