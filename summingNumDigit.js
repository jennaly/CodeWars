// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  let sum = 0;

  number = Math.abs(number);

  let string = number.toString();

  for (const char of string) {
    sum += parseInt(char);
  }

  return sum;
}

// given a number, can be negative
// return the absolute value of the sum of the number's digits

// initialize a varible for the sum
// convert the number to a string, iterate through the string, parse each char as an integer, add it to the sum
// return the absolute value of the sum

// time complexity of O(n) where n is the number of digits in the given number
// space complexity of O(1)
