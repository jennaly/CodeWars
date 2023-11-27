// given a string of parentheses and brackets (), {}, []
// check for balanced parentheses

// traverse through the string
// initialize 3 different stacks for the different parentheses and brackets
// if the current char is an open paren or bracket, add it to the corresponding array
// if the current char is a closed paren or bracket, remove it from the corresponding array
// if the corresponding array is empty, return false
// at the end, check if any of the arrays is NOT empty,
// if there is a non-empty array, return false
// otherwise return true

function balancedParensAndBrackets(string) {
  let paren = [];
  let bracket = [];
  let curlyBracket = [];

  for (const char of string) {
    if (char === "(") {
      paren.push("(");
    } else if (char === ")") {
      if (paren.length === 0) {
        return false;
      } else {
        paren.pop();
      }
    } else if (char === "[") {
      bracket.push("[");
    } else if (char === "]") {
      if (bracket.length === 0) {
        return false;
      } else {
        bracket.pop();
      }
    } else if (char === "{") {
      curlyBracket.push("{");
    } else if (char === "}") {
      if (curlyBracket.length === 0) {
        return false;
      } else {
        curlyBracket.pop();
      }
    }
  }

  if (paren.length === 0 && bracket.length === 0 && curlyBracket.length === 0) {
    return false;
  } else {
    return true;
  }
}
