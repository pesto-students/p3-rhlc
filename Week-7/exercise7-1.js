let head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const reverse = (head) => {
  if (head == null || head.next == null) return head;
  let rest = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return rest;
};

const print = () => {
  let temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
};

const push = (data) => {
  let temp = new Node(data);
  temp.next = head;
  head = temp;
}

push(20);
push(4);
push(15);
push(85);

console.log("Input: ");
print();

head = reverse(head);

console.log("Output: ");
print();
