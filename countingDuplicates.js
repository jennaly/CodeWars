function duplicateCount(text) {
  let newStr = text.toLowerCase();

  const frequencyMap = {};
  let output = 0;

  for (const char of newStr) {
    if (frequencyMap[char]) {
      frequencyMap[char]++;
    } else {
      frequencyMap[char] = 1;
    }
  }

  for (const count in frequencyMap) {
    if (frequencyMap[count] > 1) {
      output++;
    }
  }

  return output;
}
// given an input string
// return the count of unique case-insensitive alphabetic characters and numeric digits that occur more than once in the input string
