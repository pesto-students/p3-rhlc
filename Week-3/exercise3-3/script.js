function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is${count}`;

  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();

log(); // What is logged?

// 0 is logged
// because the function is called before the increment function is called
// and the increment function is called before the log function is called
// so the count is 0
