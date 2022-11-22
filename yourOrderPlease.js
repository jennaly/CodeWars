// 6 kyu
// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//given a string of words, each word contianing a single number
//return the string with words ordered in the position indicated by the number in it

//number starts at 1?
//numbers are contiguous?
//numbers will always be the range of string.length?
//return empty string for empty string?

//if string is empty, return empty string
//iterate throught each word
//for each word, convert the word to elems in an array and sort the array
//get num from the sorted array at index 0
//iterate from 1 to words.length
//use Object.values() to get all words in an array
//return the array joined

function order(words){
    if (!words.length) return ""
    
    const hash = {};
    
    for (const word of words.split(" ")) {
      const num = [...word].sort()[0];
      hash[num] = word;
    }
    
    return Object.values(hash).join(" ")
  }
  