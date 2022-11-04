// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

//given a number 
//return a string that conveys the same number, but in words

//numbers only 0 - 9?

//use switch statement, cases being numbers 0 to 9
//the cases are fixed data values (any number between 0 and 9), which makes switch statement
//the better option over if else statement (better for boolean values)

//console.log(switchItUp(8), "Eight")
//console.log(switchItUp(6), "Six")
//console.log(switchItUp(9), "Nine")

function switchItUp(number){
    let output;
    
    switch (number) {
      case 0:
        output = "Zero";
        break;
      case 1:
        output = "One";
        break;
      case 2:
        output = "Two";
        break;
      case 3:
        output = "Three";
        break;
      case 4:
        output = "Four";
        break;
      case 5:
        output = "Five";
        break;
      case 6:
        output = "Six";
        break;
      case 7:
        output = "Seven";
        break;
      case 8:
        output = "Eight";
        break;
      case 9:
        output = "Nine";
        break;
      }
    
    return output
  }
  
//one liner

function switchItUp(number){
    return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][0]
}