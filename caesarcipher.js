function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let encoded = [];

  for (const char of string) {
    let place = alphabet.indexOf(char);
    let newPlace = place + key;

    if (newPlace > 25) {
      newPlace = newPlace % 26;
    }

    let newLetter = alphabet[newPlace];
    encoded.push(newLetter);
  }

  return encoded.join("");
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;

// given a non-empty string of lowercase letters and a non-negative int (key)
// return a new string obtained by shifting every letter in the input string by k positions in the alphabet

// letters should wrap around the alphabet => "xyz", 2 => "zab"

// iterate thru string

// given a letter
// get the letter's place in the alphabet
// add k to the letter's place
// if sum is 26 or greater, use sum % 26 to get new place in alphabet
// push new letter to output

// return output

// time complexity:
// iterating through string input => O(n) where n is the length of the input
// at each character of the string, iterate through the alphabet string to get the index of the character => O(26) because the length of the alphabet string is 26 => O(1)
// => O(n)
// space complexity:
// alphabet string: O(26) => O(1);
// encoded array: O(n) where n is the length of the input (and output)
