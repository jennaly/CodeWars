const fixParentheses = (str) => {
  let stack = [];

  for (const paren of str) {
    if (paren === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        str = "(" + str;
      } else {
        stack.pop();
      }
    }
  }

  for (const char of stack) {
    str = str + ")";
  }

  return str;
};
// traverse the string
// maintain a stack
// if paren === "(", push to stack
// if paren === ")", pop off stack, unless stack is empty, then add "(" to the beginning of the string
// traverse the stack
// for every remaining "(", concatenate a ")" to the end of the stirng
