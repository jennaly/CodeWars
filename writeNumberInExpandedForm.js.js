// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


function expandedForm(num) {
    const totalLength = num.toString().length;
    const output = [];
    for (i = 0; i < totalLength; i++) {
      const currentChar = num.toString()[i];
      if (currentChar !== '0') {
        output.push(currentChar.concat('0'.repeat(totalLength - i - 1)));
      }
      
    }
    return output.join(' + ')
    
  }
  
  
  //params: whole numbers greater than 0
  //questions: will the param be in number type?
  //returns: string of numbers adding up to the param value
  //examples:
  //expandedForm(12); // Should return '10 + 2'
  // expandedForm(42); // Should return '40 + 2'
  // expandedForm(70304); // Should return '70000 + 300 + 4'
  //pseudo:
  //declare variable for length of the number
  //make empty array for output
  //loop through number string
  //if char at index i is not 0, concatenate zeroes to the end of it till it hits the num lenght
  //push that char to the output array
  //join characters in array with + sign

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word) {
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join(" ")
   
 };
 
 //params: str
 //returns: str in camelcase
 //question: new str or modified str? will str be empty? will the first character in the first word always be capitalized by default?
 //examples: 
 //param: "How can mirrors be real if our eyes aren't real"
 //returns:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 //pseudo:
 //make a function that takes in a string
 //split up words in string into elements in an array
 //map through each element
 //capitalize first character in every word, concatenate it with the rest of the charaters in the word
 //join the array elements into a string

