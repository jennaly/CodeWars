// given an array representing a row of seats
// where seats[i] = 1 represents an occupied seat
// and seats[i] = 0 represents an empty seat
// there is at least one empty seat
// and at least one person sitting
// Alex wants to sit in the seat such that the 
// distance between him and the closest person
// is maximized
// return the maximum distance to the closest person

// traverse the array with two pointers
// left pointer will be pointing to the left occupied seat
// right pointer will be pointing to the right occupied seat
// start at index -1 
// every time right pointer points to an occupied seat:
// if first seat is empty (left = -1): calculate the distance between the first seat and the first occupied seat
// if first seat is not empty: calcualte the midpoint between the two occupied seats
// move left pointer to right pointer
// calculate the distance between the last occupied seat and the end of the row 
// keep track of maximum distance
// and in each iteration, update maximum distance

function findMaximumDistanceToClosestPerson(seats) {
    let maximumDistance = 0;

    let left = -1;
    for (let right = 0; right < seats.length; right++) {
        if (seats[right] === 1) {
            // check if first seat is empty
            // if it is, calculate the distance between first seat and the occupied seat
            if (left === -1) {
                maximumDistance = Math.max(maximumDistance, right - left - 1);
            } else {
                // if seat is between two occupied seats, calculate midpoint
                maximumDistance = Math.max(maximumDistance, Math.floor((right - left)/2));
            }

            left = right;
        }
    }

    // calculate distance between last occupied seat and the end of the row
    maximumDistance = Math.max(maximumDistance, seats.length - left - 1);

    return maximumDistance;
}

// time complexity: O(n);
// space complexity: O(1);
