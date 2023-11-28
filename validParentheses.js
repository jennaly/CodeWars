function validParentheses(parenStr) {
  // Your code here
  const stack = [];

  for (const paren of parenStr) {
    if (paren === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

// given a string of parentheses
// determine if the order of the parentheses is valid

// iterate through individual parens in the string
// at every ( paren, add a ( to an array
// at every ) paren, check if the array is empty
// if it is, return false
// if it is not, pop (remove) a pren from the array(stack)
// check if the array is empty, if it is, return true
// if it is not, return false

// time complexity:
// traversing given string => O(n) where n is the number of characters
// space complexity: O(n)
// in the worst case scenario, parenStr will be a string of only open parens,
// for every open paren in the given string, one is added to the stack
// length of given string === length of stack
