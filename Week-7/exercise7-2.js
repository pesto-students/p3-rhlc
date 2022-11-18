class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

let head;

const kAltReverse = (node, k) => {
  let current = node;
  let next = null,
    prev = null;
  let count = 0;

  while (current != null && count < k) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  if (node != null) {
    node.next = current;
  }

  count = 0;
  while (count < k - 1 && current != null) {
    current = current.next;
    count++;
  }

  if (current != null) {
    current.next = kAltReverse(current.next, k);
  }

  return prev;
}

const printList = (node) => {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
}

const push = (newData) => {
  let myNode = new Node(newData);
  myNode.next = head;
  head = myNode;
}

let i = 0;
let it = [2, 4, 7, 8, 2];

while (i < it.length) {
  push(it[i]);
  i++;
}

console.log("Given Linked List: ");
printList(head);
head = kAltReverse(head, 3);

console.log("Modified Linked List: ");
printList(head);
