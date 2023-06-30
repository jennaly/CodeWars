// given an array that contains either integers or other arrays
// return the product sum of the array
// product sum == sum of array elements * depth of array

function productSum(array, depth = 1) {
    // Write your code here.
    let sum = 0;
    
    for (let i = 0; i <= array.length - 1; i++) {
      if (Array.isArray(array[i])) {
        sum += productSum(array[i], depth + 1);
      } else {
        sum += array[i];
      }
    };
  
    return sum * depth;
  
  }


// initialize a variable for the sum 
// iterate through the array
// at each index, check if current element is a nested array
// if it is, call the function recursively and pass in a depth = depth + 1;
// if the current element is a number/int, add it to the sum variable
// return the product of the sum and the current depth

// time complexity of O(n) where n is the total number of elements
// space complexity of O(d) where d is the depth of the most nested array 
// because every time the function comes across a nested array it calls itself
// and therefore another call is added to the call stack