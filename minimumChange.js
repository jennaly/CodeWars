// given an array of positive integers representing coins in your possession
// return the min. amount of change that you cannot create

function nonConstructibleChange(coins) {
  // Write your code here.
  if (!coins.length) return 1;

  const sortedCoins = [...coins].sort((a, b) => a - b);

  let currentChange = 0;

  for (const coin of sortedCoins) {
    if (coin > currentChange + 1) {
      return currentChange + 1;
    } else {
      currentChange += coin;
    }
  }

  return currentChange + 1;
}

// coins are not necessarily unique
// if array is empty return 1
// can I modify the og array?

// sort array from least to greatest
// iterate through array of integers
// initialize a variable to keep track of current change
// in each iteration check if current num is > than current change + 1
// if it is return current change + 1
// if it is equal or less than current change update current change to += value
// return current change + 1
