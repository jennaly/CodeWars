// 8 kyu
// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//given a string
//return the string with the first character and the last character removed

//empty string?
//string.length = 2? return empty string?
//special characters?

//convert string to array
//slice from index 1 to last index (starting index included in new string, last index not included in new string)
//convert array to string, return

function removeChar(str){

    return [...str].slice(1,str.length - 1).join("")
  
  };
  