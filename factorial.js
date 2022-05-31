// Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

//given a non-negative integer n
//return the factorial n
//if n is below 0 or above 12 throw a RangeError 

//is n always a number?
//n is not always positive?
//if n is 0 return 1?

//base cases: if n is 0, return 1; if n > 12 or n < 0; throw RangeError
//iterate from n to 1
//initialize output value
//in each interation, multiply output by n

function factorial(n)
{
  if (n == 0) {
    return 1
  } 
  
  if (n < 0 || n > 12) {
    throw new RangeError()
  }
  
  let output = 1;
  for (let i = n; i >= 1; i--) {
    output *= i
  }
  
  return output
}

