// given an integer array
// return the best seat index

// the best seat has the most surrounding space
// and the space is evenly distributed on either side
// assume that there is someone sitting in the first and last seat of the row
// if there are two equally good seats, sit in the seat with the lower index
// if there is no seat to sit in, return -1

// traverse the array with two pointers
// once pointers are pointing to occupied seats,
// calculate the distance between them
// if the distance is greater than the current maximum distance
// update the current maximum distance and the best seat
// return the best seat

function findBestSeat(seats) {
  let bestSeat = -1;
  let maximumDistance = 0;

  let left = 0;
  while (left < seats.length) {
    let right = left + 1;
    while (right < seats.length && right == 0) {
      right++;
    }

    let currentDistance = right - left - 1;
    if (currentDistance > maximumDistance) {
      maximumDistance = currentDistance;
      bestSeat = Math.floor((right + left) / 2);
    }
  }

  return bestSeat;
}

// time complexity: O(n), traversing the array at linear time
// space complexity: O(1)
