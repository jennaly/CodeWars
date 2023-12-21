// given an m x n matrix
// return all elements of the matrix in spiral order

// the array given is a two-dimensional array
// return a one-dimensional array

// traverse through the array:
// iterate from first column to last column across the first row
// iterate from the first row to the last row down the last column, excluding the first cell
// iterate from the last column to the first column across the last row, excluding the first cell
// iterate from the last row to the first row up the first column, excluding the first and last cell

// account for matrixes with odd number of columns and/or rows
// adjust the perimeter of the matrix

function spiralMatrix(matrix) {
  let result = [];

  let firstCol = 0;
  let lastCol = matrix[0].length - 1;
  let firstRow = 0;
  let lastRow = matrix.length - 1;

  // traverse through the array:
  while (firstcol <= lastCol && firstRow <= lastRow) {
    // iterate from first column to last column across the first row
    for (let col = firstCol; col <= lastCol; col++) {
      result.push(matrix[firstRow][col]);
    }

    // iterate from the first row to the last row down the last column, excluding the first cell
    for (let row = firstRow + 1; row <= lastRow; row++) {
      result.push(matrix[row][lastCol]);
    }

    // iterate from the last column to the first column across the last row, excluding the first cell
    for (let col = lastCol - 1; col >= firstCol; col--) {
      // if firstRow and lastRow are pointing to the same row, exit out of this loop because cells
      // in final row have been traversed in lines 27-28
      if (firstRow === lastRow) break;
      result.push(matrix[lastRow][col]);
    }

    // iterate from the last row to the first row up the first column, excluding the first and last cell
    for (let row = lastRow - 1; row > firstRow; row--) {
      // if firstCol and lastCol are pointing to the same column, exit out of this loop because cells
      // in final column have been traversed in lines 32-33
      if (firstCol === lastColumn) break;
      result.push(matrix[row][firstCol]);
    }

    firstCol++;
    lastCol--;
    firstRow++;
    lastRow--;
  }

  return result;
}

// time complexity: O(n), traverse through every index of the matrix exactly once
// space complexity: O(1)
