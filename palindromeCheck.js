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
