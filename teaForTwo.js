
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
  