//Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a - b);
    let sum = sorted[0] + sorted[1];
    return sum
}

// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!
 
// My solution
// const rps = (p1, p2) => {
//     if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper')) {
//       return 'Player 1 won!'
//     } else if ((p2 === 'rock' && p1 === 'scissors') || (p2 === 'paper' && p1 === 'rock') || (p2 === 'scissors' && p1 === 'paper')) {
//       return 'Player 2 won!'
//     } else {
//       return 'Draw!'
//     }
//   };

// Best solution
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };