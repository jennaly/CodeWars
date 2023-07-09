function tournamentWinner(competitions, results) {
  // Write your code here.
  const winners = [];

  for (let i = 0; i <= results.length - 1; i++) {
    if (results[i] == 0) {
      winners.push(competitions[i][1]);
    } else {
      winners.push(competitions[i][0]);
    }
  }

  const hash = {};
  let currentBestTeam = "";
  let currentBestScore = 0;

  for (let j = 0; j <= winners.length - 1; j++) {
    if (hash[winners[j]]) {
      hash[winners[j]] += 3;
    } else {
      hash[winners[j]] = 3;
    }

    if (hash[winners[j]] > currentBestScore) {
      currentBestScore = hash[winners[j]];
      currentBestTeam = winners[j];
    }
  }

  return currentBestTeam;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;

// iterate through competitions array and results array at the same time
// in each iteration, check if results[idx] = 0 or 1;
// if 0, map subarray[1] to winners array
// if 1, map subarray[0] to winners array
// => array of winners
// create a hash table
// create variables for team holding current highest score and current highest score
// iterate through array of winners, in each iteration, log winner to hashmap with their score if they aren't in the map already
// compare their score in the hash map vs the current highest score
// if their score is greater, replace current team and current highest score
// return current team
