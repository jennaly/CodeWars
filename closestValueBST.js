// takes in a binary search tree and a target integer value
// return the closest value to that target value contained in the binary search tree

// assume only one closest value
function findClosestValueInBst(tree, target) {
  // Write your code here.
  let currentClosestNumber = Infinity;

  let node = tree;

  while (node !== null) {
    if (node.value === target) {
      return node.value;
    }

    if (
      Math.abs(node.value - target) < Math.abs(currentClosestNumber - target)
    ) {
      currentClosestNumber = node.value;
    }

    if (node.value < target) {
      node = node.right;
    } else {
      node = node.left;
    }
  }

  return currentClosestNumber;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// initialize a variable for the current closest number
// traverse down the tree, check if the current node is the target
// if it is, return the current node
// if it is not:
// check the difference between the current node and the target node
// if the result is less than the current closest distance, update it
// compare the target value vs. node value
// if node value < target, make the right node the next node
/// if node value < target, make the left node the next node

// only break out of this loop when the current node value === target value
// or when the node is null (end of branch)

// at best, the time complexity is O(log(n)) because we are able to eliminate half of the tree every time we explore a node
// at worst, the time complexity is O(n) when the tree only has one branch throughout, we cannot use the BST property to our advantage and have to go through all node values
// space complexity is O(1) bc we're not using extra memory to store data proportional to the output
