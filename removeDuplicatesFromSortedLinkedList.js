// given the head of a singly linked list whose nodes are in sorted order
// return a modiied version of the linked list without duplicated values

// modify the linked list in place
// each node has an integer value as well as a next node pointing to the next node in the list
// if a node points to none/null then it's the tail of the list

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
  
    const hash = {};
  
    let currentNode = linkedList;
  
    while (currentNode !== null) {
      if (hash[currentNode.value] == null) {
        hash[currentNode.value] = "true";
      }
      let nextDistinctNode = currentNode.next;
      while (nextDistinctNode !== null && hash[nextDistinctNode.value]) {
        nextDistinctNode = nextDistinctNode.next;
      }
  
      currentNode.next = nextDistinctNode;
      currentNode = nextDistinctNode;
    }
  
    return linkedList
    
  }

  // create a hash table
// iterate through linked list
// while the current node still exists:
// while the next node still exists:
// if a next value already exist in the hash table, move the pointer to the node after that
// continue until the next node's value isn't already in the hash table
// have the current node's pointer point to the correct node
// move the current node to the next node
// return the modified linked list

// time complexity of O(n) where n is the number of nodes in the list
// space complexity of O(m) where m is the number of unique nodes in the list 
// this solution is more efficient when the linked list isn't sorted

function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let currentNode = linkedList;
  
    while (currentNode !== null) {
      let nextDistinctNode = currentNode.next;
  
      while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
        nextDistinctNode = nextDistinctNode.next;
      };
  
      currentNode.next = nextDistinctNode;
      currentNode = nextDistinctNode;
    }
  
    return linkedList
  
  }

// time complexity of O(n) where n is the number of nodes in the linked list before it was modified
// space complexity of O(1) because we're not storing anything
// this solution is more efficient when the list is already sorted because 
// we know that once there is a valid distinct node, the current node's value will not appear in the list again
