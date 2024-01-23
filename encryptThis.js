var encryptThis = function (text) {
  let words = text.split(" ");
  let output = [];

  for (const word of words) {
    let transformedWord = word.split("").map((letter, index) => {
      if (index === 0) {
        return word.charCodeAt(index);
      } else if (index === 1) {
        return word[word.length - 1];
      } else if (index === word.length - 1) {
        return word[1];
      } else {
        return letter;
      }
    });

    output.push(transformedWord.join(""));
  }

  return output.join(" ");
};

// given a string containing space separated words
// encrypt each word in the string
// first letter converted to ascii code
// second letter switched with last letter

// split string into words
// iterate through words
// for each word, transform letters in the first, second, and last index
// map transformed word to output
// convert output to string
// return output string
