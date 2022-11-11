// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//given a month as a number from 1 to 12
//return the quarter that the month is in

//months are given as a number, not a string?
//return the quarter as a number?
//months 1-3 is 1, months 4-6 is 2, months 7-9 is 3, months 10-12 is 4?

//console.log(quarterOf(1), 1)
//console.log(quarterOf(4), 2)
//console.log(quarterOf(8), 3)
//console.log(quarterOf(12), 4)

//can either use if else statement or switch statement
//use swich statement for fixed data values

const quarterOf = (month) => {
    let quarter 
    switch (month) {
        case 1:
          quarter = 1;
          break;
        case 2:
          quarter = 1;
          break;
        case 3:
          quarter = 1;
          break;
        case 4:
          quarter = 2;
          break;
        case 5:
          quarter = 2;
          break;
        case 6:
          quarter = 2;
          break;
        case 7:
          quarter = 3;
          break;
        case 8:
          quarter = 3;
          break;
        case 9:
          quarter = 3;
          break;
        case 10:
          quarter = 4;
          break;
        case 11:
          quarter = 4;
          break;
        case 12:
          quarter = 4;
          break;
    }
    
    return quarter
    
  }
  

//if else statement may reduce the lines of code needed 
//because we can use the OR (||) operator

const quarterOf = (month) => {
    if (month == 1 || month == 2 || month == 3) {
      return 1;
    } else if(month == 4 || month == 5 || month == 6) {
      return 2;
    } else if (month == 7 || month == 8 || month == 9) {
      return 3;
    } else if (month == 10 || month == 11 || month == 12) {
      return 4;
    } else {
      return month
    }
     
   }

//readibility or one-liner for shortest amount of lines?

const quarterOf = month => month == 1 || month == 2 || month == 3 ? 1 : month == 4 || month == 5 || month == 6 ? 2 : month == 7 || month == 8 || month == 9 ? 3 : 4
   