// takes in a binary tree
// return a list of its branch sums, ordered from leftmost branch sum to rightmost branch sum
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sums) {
  if (node === null) return;

  let newRunningSum = runningSum + node.value;

  if (node.left === null && node.right === null) {
    sums.push(newRunningSum);
    return;
  }

  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

// initialize an output array (array of sums of branches)
// while the current node is not null, add the value of the current node to the runningSum
// if the right node and the left node are both null, push the runningSum to the sums array (at end of branch)
// otherwise, run the function again, passing in the left node as the current node
// same for right node.
