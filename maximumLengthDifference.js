function mxdiflg(a1, a2) {
  // your code
  if (a1.length === 0 || a2.length === 0) return -1;

  let maximumDiff = 0;

  a1.sort((a, b) => a.length - b.length);
  a2.sort((a, b) => b.length - a.length);

  let a1Idx = 0;
  let a2Idx = 0;

  for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
    let currentDiff = Math.abs(a1[a1Idx].length - a2[a2Idx].length);
    maximumDiff = Math.max(currentDiff, maximumDiff);

    if (a1Idx < a1.length - 1) a1Idx++;
    if (a2Idx < a2.length - 1) a2Idx++;
  }

  return maximumDiff;
}

// given two arrays a1 and a2 of strings
// x is any string in first array, and y is any string in the second array
// find the maximum distance between the length of string x and string y
