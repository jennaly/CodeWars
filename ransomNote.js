// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

// given two strings, one consisting of words from a magazine and the other from a ransom note
// return a boolean - true if all of the words from the ransom note can be found from the magazine, false if not

// return true if both strings are empty?
// return true if ransom note is empty?
// return false if magazine is empty but ransom note isn't?
// case sensitivity? can "word" from magazine be used for "WORD" in ransom note?
// special characters? floats? numbers?
// multiple instances of the same word in ransom note?


// base cases: 
// if both strings are empty => true
// if only ransom note is empty => true
// if magazine is empty but ransom note isn't => false
// keep track of all the words that appear in the magazine
// keep track of all the words that appear in ransom note
// for each word that appears in ransom note, check if the word can be found in magazine at at least the same frequency (magazine can contain more instances of the word from ransom note, but not fewer)
// if all words in the ransom note checks the above condition, return true
// otherwise return false (when the word cannot be found in the magazine or appears in the magazine at a lower frequency)

// case insensitive solution 

function canCreateRansomNote( magazine, ransom) {
    if (!magazine.length && !ransom.length) {
        return true
    } else if (!ransom.length) {
        return true
    } else if (!magazine.length) {
        return false
    }

    const magazineHash = {};
    const ransomHash = {};
    magazine = magazine.toLowerCase().split(" ");
    ransom = ransom.toLowerCase().split(" ");

    for (const word of magazine) {
        magazineHash[word] = magazineHash[word] + 1 || 1;
    }

    for (const word of ransom) {
        ransomHash[word] = ransomHash[word] + 1 || 1;
    }

    for (const key in ransomHash) {
       if (magazineHash[key] === undefined || magazineHash[key] < ransomHash[key]) {
           return false
       }
    }

    return true
}

// case sensitive solution 

function canCreateRansomNote( magazine, ransom) {
    if (!magazine.length && !ransom.length) {
        return true
    } else if (!ransom.length) {
        return true
    } else if (!magazine.length) {
        return false
    }

    const magazineHash = {};
    const ransomHash = {};
    magazine = magazine.split(" ");
    ransom = ransom.split(" ");

    for (const word of magazine) {
        magazineHash[word] = magazineHash[word] + 1 || 1;
    }

    for (const word of ransom) {
        ransomHash[word] = ransomHash[word] + 1 || 1;
    }

    for (const key in ransomHash) {
       if (magazineHash[key] === undefined || magazineHash[key] < ransomHash[key]) {
           return false
       }
    }

    return true
}