// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
      let product = x * i;
      z.push(product);
    }
    return z;
  }
  
  
  //param - a number, amount of multiples
  //questions - will they be integers(number types)?
  //returns - an array of the multiples of the number
  //examples - countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
  // countBy(2,5) === [2,4,6,8,10]
  //pseudo code - for loop that counts to n 
  //for every loop x is multiplied by the index in the loop 
  //for every loop push the product into the new array