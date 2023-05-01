// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
  //your code here
  return x === 0 ? 6 : parseFloat(x) ? x * 50 + 6 : "Error";
}
