function sweetAndSavory(dishes, target) {
  // Write your code here.
  let sweetDishes = dishes.filter((dish) => dish < 0).sort((a, b) => a - b);
  let savoryDishes = dishes.filter((dish) => dish > 0).sort((a, b) => b - a);

  let sweetIdx = 0;
  let savoryIdx = 0;
  let bestPair = [0, 0];
  let smallestDistance = Infinity;

  while (sweetIdx < sweetDishes.length && savoryIdx < savoryDishes.length) {
    let currentSum = sweetDishes[sweetIdx] + savoryDishes[savoryIdx];
    let currentDistance = Math.abs(target - currentSum);

    if (currentSum <= target) {
      if (currentDistance < smallestDistance) {
        bestPair = [sweetDishes[sweetIdx], savoryDishes[savoryIdx]];
        smallestDistance = currentDistance;
      }
      sweetIdx++;
    } else {
      savoryIdx++;
    }
  }

  return bestPair;
}

// Do not edit the line below.
exports.sweetAndSavory = sweetAndSavory;

// x < 0 - dish is sweet
// x > 0 - dish is savory
// |x| - intensity

// given an array of integers, and a target integer
// return the best pairing (2 integers) with values closes to the target one
// must include one sweet ( < 0) and one savory ( > 0)
// pairing should not be more savory than the target flavor profile (sum of output < target)

// at most one best solution
// if there is no valid solution, return [0,0]
// returned array should be sorted, sweet dish comes first

// traverse the array while maintaining 2 variables:
// 1. the best combo
// 2. the difference between the best combo and the target

// split array into two (sweet and savory) and traverse through both at the same time
// sort sweet array from least to greatest
// sort savory array from greatest to least
// traverse the arrays using the pointers
// in each iteration, compare the sum of the pairs vs. the target
// if sum of pairs <= target: compare distance between sum and target vs distance between sum of best pair and target
// if current sum distance <<, update value of best pair and best pair distance
// move to the next combo:
// if sum of pairs <= target, increment right pointer (get more positive to bring up sum)
// if sum of pairs > target, increment left pointer (get more negative to bring down sum)
// return best pair
