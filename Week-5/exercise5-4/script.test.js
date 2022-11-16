const mathOperations = require('./script');

test('adds 1 + 2 to equal 3', () => {
  expect(mathOperations.sum(1, 2)).toBe(3);
});
test('adds 4 - 2 to equal 2', () => {
  expect(mathOperations.diff(4, 2)).toBe(2);
});
test('product 2 * 4 to equal 8', () => {
  expect(mathOperations.product(2, 4)).toBe(8);
});
