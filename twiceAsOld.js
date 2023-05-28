// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  if (sonYearsOld * 2 > dadYearsOld) {
    return sonYearsOld * 2 - dadYearsOld;
  } else if (sonYearsOld * 2 < dadYearsOld) {
    return dadYearsOld - sonYearsOld * 2;
  } else {
    return 0;
  }
}

// given two natural numbers, a and b
// return x where a + x = 2b

// x can be negative, but return x's absolute value

// multiple b by 2
// if 2b > a, return 2b - a
// if 2b < a , return a - 2b
// if 2b == a, return 0

// time complexity of O(1);
// space complexity of O(1);
