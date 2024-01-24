function howMuchILoveYou(nbPetals) {
  // your code
  let sayings = {
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
  };

  return sayings[nbPetals % 6];
}

// given a number of petals
// return the phrase that is assigned to the last petal
