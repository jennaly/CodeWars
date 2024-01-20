function persistence(num) {
  //code me
  let times = 0;

  num = num.toString();

  while (num.length > 1) {
    num = num
      .split("")
      .map((digit) => parseInt(digit))
      .reduce((a, b) => a * b)
      .toString();
    times++;
  }

  return times;
}

// given a number
// return its multiplicative persistence
