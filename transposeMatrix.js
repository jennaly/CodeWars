// given a 2D array of integers
// return a transpose of the array

// transpose: a flipped version of the original matrix across its main diagonal (it switches the row and column indices of the original matrix)
// width and height of matrix can be different

function transposeMatrix(matrix) {
  if (!matrix.length) return [];
  // Write your code here.
  let outputMatrix = [];

  for (let col = 0; col <= matrix[0].length - 1; col++) {
    const newRow = [];
    for (let row = 0; row <= matrix.length - 1; row++) {
      newRow.push(matrix[row][col]);
    }
    outputMatrix.push([...newRow]);
  }

  return outputMatrix;
}

// row => column, column => row
// initialize an output array
// for every subarray(row in the og array), we can deduce the number of columns in the new array from the length of the subarray
// for every column, get the number from every row => a new row
// iterate through the length of a subarray (columns)
// in each column, iterate through the length of the matrix (rows)
// push the value at each row of the current iteration of columns to the newRow array
// append the newRow array to the output matrix
