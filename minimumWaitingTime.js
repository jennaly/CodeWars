// given an array of positive integers
// each integer represents the amount of time a query takes to execute
// return the minimum amount of total waiting time for all of the queries

// execution time !== waiting time
// finding minimum amount of waiting time => prioritize queries that don't take as long to execute
function minimumWaitingTime(queries) {
  // Write your code here.
  if (!queries.length) return 0;

  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;

  for (let i = 0; i < queries.length; i++) {
    totalWaitingTime += queries[i] * (queries.length - 1 - i);
  }

  return totalWaitingTime;
}

// sort order queries by their execution time, from least to greatest
// initialize a variable for the current total wait time
// iterate through the sorted array
// in each iteration, multiply the current value by the number of values left in the array not including the current one
// add that value tot the total wait time
// return the total wait time

// time complexity: sorting algorithm runs at O(nlogn) time and array iteration runs at O(n) => O(nlogn)
// space complexity: O(1) because we're not allocating any extra storage that would increase proportionally with the input
