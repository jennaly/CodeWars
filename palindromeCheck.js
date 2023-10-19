// given a string
// check if it's a palindrome

// base case: empty string? return true
// base case: string.length === 1? return true

function isPalindrome(string) {
  // Write your code here.
  if (string.length <= 1) return true;

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

// time complexity: O(1/2n) => O(n)
// space complexity: O(1)

function isPalindrome(string) {
  // Write your code here.
  let newStr = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }

  return newStr == string;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

// time complexity: O(n^2)
// space complexity: O(n)
function isPalindrome(string) {
  // Write your code here.
  let array = [];

  for (let i = string.length - 1; i >= 0; i--) {
    array.push(string[i]);
  }

  return string === array.join("");
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

// time complexity: O(n) where n is the length of the string
// space complexity: O(n) where n is the length of the array

// recursive solution
function isPalindrome(string, i = 0) {
  let j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}

// check if the outermost indexes hold the same value
// call the function recursively on the next set of indexes (i + 1 and j - 1);
// function resolves from the center index/indices

// time complexity: O(1/2n) because we're comparing two indices at a time => converge to O(n)
// space complexity: O(1/2n) because we call the function recursively on every set of indices => converge to O(n)
