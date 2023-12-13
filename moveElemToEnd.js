// given an array of integers and an integer (toMove)
// move all instances of that integer in the array to the end of the array
// return the array

// move elements in the array in-place
// the other integers can be in a different order

// use two pointers to traverse the array
// only make swaps when left pointer is pointing to toMove &&
// right pointer is NOT pointer to toMove

function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    // update right pointer to always point at a non-toMove value
    // only run for as long as left < right pointer
    while (left < right && array[right] === toMove) {
      right--;
    }

    if (array[left] === toMove) {
      array[left] = array[right];
      array[right] = toMove;
    }

    left++;
  }

  return array;
}

// time complexity: O(n) where n is the length of the input array
// space complexity: O(1)
