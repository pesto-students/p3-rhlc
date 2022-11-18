function countPairsWithDiffK(arr, n, k) {
  count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++)
      if (arr[i] - arr[j] == k || arr[j] - arr[i] == k) count++;
  }
  return count;
}
arr = new Array(5, 10, 3, 2, 50, 80);
n = arr.length;
k = 78;
console.log(
  "Output: " + countPairsWithDiffK(arr, n, k)
);
