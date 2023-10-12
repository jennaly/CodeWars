// Find the sum of all multiples of n below m

function sumMul(n, m) {
  //your idea here
  if (m <= 0) return "INVALID";

  let sum = 0;

  for (let i = 1; i < m; i++) {
    let multiple = n * i;

    if (multiple >= m) {
      return sum;
    } else {
      sum += multiple;
    }
  }

  return sum;
}

// given n and m
// return the sum of all multiples of n below m

// n and m are natural numbers (positive integers)
// m is excluded from multiples

// initialize a variable for the sum of multiples
// implement a for loop that iterates from 1 to m
// initialize a variable for the current multiple of n (product of n and current iteration)
// check if current multiple >= m, if so return the sum
// otherwise increment sum by the current multiple
// base case: if m is 0 or <0, return "INVALID"

// time complexity: O(i) + 1 => O(i) where i is the number of (positive) integers that can be multipled with n to produce a multiple less than m
// space complexity: O(1)
