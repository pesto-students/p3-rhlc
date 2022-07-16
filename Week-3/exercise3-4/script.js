function createStack() {
  let stack = [];
  function push(element) {
    stack.push(element);
  }
  function pop() {
    return stack.pop();
  }
  return [push, pop];
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // 5

console.log("stack.items", stack.items); // returns undefined
