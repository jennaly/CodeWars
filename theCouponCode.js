// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) {
    return false;
  }

  if (Date.parse(currentDate) <= Date.parse(expirationDate)) {
    return true;
  }

  return false;
}

// given an enteredCode, correctCode, currentDate, and expirationDate
// return a boolean, true if enteredCode === correctCode && currentDate <= expirationDate

// empty strings?
// currentDate and expirationDate will always have the same format?
// compare enteredCode vs. correctCode, if it's a match, then compare currentDate vs. expirationDate, otherwise return false
// use Date.parse() to compare currentDate vs. expirationDate
