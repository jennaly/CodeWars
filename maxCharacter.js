 // Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

// given a string of characters
// return the character with the highest frequency 

// return output as a string?
// case sensitive? i.e. "I" == "i" ?
// alphanumeric characters? special characters?
// return empty string if given empty string?
// characters appearing at the same frequency?

// iterate through each character in the given string
// create a hash map
// for each character, check if it has appeared before
// if it has, increment its frequency value
// if it hasn't, store the character in the map, assign it a value of 1
// create a variable (bestFrequency) to store the current highest frequency value, the initial value will be 0 
// create a variable (bestChar) to store the letter that has the current highest frequency value, the intial value will be an empty string
// iterate through the hash map, for each key/value pair in the map, check if the value of the current pair is higher than the current highest frequency
// if it is, update the value of bestChar to = the value of the current pair

function maxCharacter (str) {

    const hash = {};
    let bestFrequency = 0;
    let bestChar = '';

    for (const letter of [...str]) {
        if (hash[letter]) {
            hash[letter]++;
        } else {
            hash[letter] = 1;
        }
    }

    for (const key in hash) {
        if (hash[key] > bestFrequency) {
            bestFrequency = hash[key];
            bestChar = key;
        }
    }

    return bestChar
}

// if case insensitive:

function maxCharacter (str) {

    str = str.toLowerCase()
    const hash = {};
    let bestFrequency = 0;
    let bestChar = '';

    for (const letter of [...str]) {
        if (hash[letter]) {
            hash[letter]++;
        } else {
            hash[letter] = 1;
        }
    }

    for (const key in hash) {
        if (hash[key] > bestFrequency) {
            bestFrequency = hash[key];
            bestChar = key;
        }
    }

    return bestChar
}