function majorityElement(array) {
  // Write your code here.
  let potentialMajorityElem = null;
  let count = 0;

  for (const num of array) {
    if (count === 0) {
      potentialMajorityElem = num;
    }

    if (num === potentialMajorityElem) {
      count++;
    } else {
      count--;
    }
  }
  return potentialMajorityElem;
}

// Do not edit the line below.
exports.majorityElement = majorityElement;

// if an element is a majority element,
// its appeareances will outnumber the appeareances of other elements
// traverse the array while mainting the count and a potential majority element variable
// if the current number === potential, increment the count
// if the current number !== potential, decrement the count
// the actual majoirty element will always have a count > 0
// if count === 0, update potential majority element to the one following it

// time complexity: O(n), traversing the array and maintaining variables
// space complexity: O(1)
