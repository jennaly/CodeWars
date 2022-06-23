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