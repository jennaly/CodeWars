// tandem bicycle = 2-persons bike; faster person dictates speed of bike
// given two arrays of positive integers
// one contains speeds of riders wearing red shirts
// one contains speeds of riders wearing blue shirts
// each integer represents the speed that a rider is pedaling at
// [red shirt riders].length === [blue shirt riders].length

// return the maximum possible total speed OR the minimum possible total speed of all bicycles
// based on an input parameter, fastest
// if (fastest === true) => return maxmimum speed, otherwise return the minimum speed
// pair a red shirt rider with a blue shirt rider

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  if (!redShirtSpeeds.length || !blueShirtSpeeds.length) return 0;

  let totalSpeeds = 0;

  const fastestRedRider = redShirtSpeeds.sort((a, b) => b - a)[0];
  const fastestBlueRider = blueShirtSpeeds.sort((a, b) => b - a)[0];

  if (fastest === true) {
    if (fastestRedRider > fastestBlueRider) {
      blueShirtSpeeds.sort((a, b) => a - b);
    } else {
      redShirtSpeeds.sort((a, b) => a - b);
    }
  }

  for (let i = 0; i <= redShirtSpeeds.length - 1; i++) {
    if (redShirtSpeeds[i] > blueShirtSpeeds[i]) {
      totalSpeeds += redShirtSpeeds[i];
    } else {
      totalSpeeds += blueShirtSpeeds[i];
    }
  }

  return totalSpeeds;
}

// initialize var to hold total speed

// for maximum total speed:
// determine which group the FASTEST rider is in
// sort that group in descending order
// sort the other group is ascending order

// for minimum total speed:
// sort both groups in either descending or ascending order

// iterate through both arrays at the same time
// in each iteration, determine which speed is greater
// add to total speed
// return total speed

// time complexity is O(nlogn) from the sorting algorithms and O(n) for the iteration through both arrays
// because O(nlogn) is bigger than O(n) => O(nlogn)
// space complexity is O(1) because we are not using extra memory to contain data that increases proportionally to the input
