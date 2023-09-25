// given two arrays, one with the heights of all students in red shirts
// another with the heights of all students in blue shirts
// arrays always have the same length, each height is a positive integer
// each class has at least 2 students
// return a boolean, true if the arrays can satisfy the following conditions:
// all students wearing red shirts are in the same row
// all students wearing blue shirts are in the same row
// each student in the back row is strictly taller than the student directly in front of them in the front row

function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  const sortedRedShirtHeights = redShirtHeights.sort((a, b) => b - a);
  const sortedBlueShirtHeights = blueShirtHeights.sort((a, b) => b - a);

  let frontRow;
  let backRow;

  if (sortedBlueShirtHeights[0] < sortedRedShirtHeights[0]) {
    frontRow = sortedBlueShirtHeights;
    backRow = sortedRedShirtHeights;
  } else {
    frontRow = sortedRedShirtHeights;
    backRow = sortedBlueShirtHeights;
  }

  for (let i = 0; i <= frontRow.length - 1; i++) {
    if (frontRow[i] >= backRow[i]) {
      return false;
    }
  }

  return true;
}

// order the arrays by descending order
// check which array contains the tallest student (highest value)
// iterate through both arrays, checking if the student in the back row is taller than their equivalent in the front row
// student in front row must be shorter to return true

// time complexity: sorting is O(nlog(n)), iterating through the 2 arrays at the same time is O(n), because O(nlogn) is greater, the time complexity if O(nlogn)
// space complexity is O(1) because we're not storing any data that increases proportionally with the input
