// given a linked list with at least one node
// return the middle node of the linked list
// if there are two middle nodes (linkedlist length is even) then return the second node

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function middleNode(linkedList) {
    // Write your code here.
    let length = 0;
    let currentNode = linkedList;
    
    while (currentNode !== null) {
      length++;
      currentNode = currentNode.next;
    }
  
    let middleNode = linkedList;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      middleNode = middleNode.next;
    }
    
    return middleNode;
  }

  // given a linked list with at least one node
// return the middle node of the linked list
// if there are two middle nodes (linkedlist length is even) then return the second node

// iterate through linked list to get list's length
// iterate through the list again, this time for half of the list's length
// return the node at halfway

// time complexity of O(n) * 2 => O(n) where n is the number of nodes iterated through
// space comlexity of O(1), not storing anything extra

function middleNode(linkedList) {
  // Write your code here.
  let slowNode = linkedList;
  let fastNode = linkedList;

  while (fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  
  return slowNode;
}

// take advantage of the linked list being sorted
// use a fast pointer and a slow pointer
// the fast pointer will travel by 2 nodes at a time
// the slow pointer travels by a node at a time
// when the fast pointer reaches the end of the list, the slow pointer will be halfway through the list
// return the slow node

// in the even length case, the loop stops when the fast pointer is null
// in the odd length case, the loop stops when the fastponiter.next is null

// time complexity of O(n) where n is the number of nodes
// space complexity of O(1)