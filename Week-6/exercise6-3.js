function sort012(a, arrSize) {
  let lo = 0;
  let hi = arrSize - 1;
  let mid = 0;
  let temp = 0;
  // Iterate till all the elements
  // are sorted
  while (mid <= hi) {
    // If the element is 0
    if (a[mid] == 0) {
      temp = a[lo];
      a[lo] = a[mid];
      a[mid] = temp;
      lo++;
      mid++;
    }
    // If the element is 1
    else if (a[mid] == 1) {
      mid++;
    }
    // If the element is 2
    else {
      temp = a[mid];
      a[mid] = a[hi];
      a[hi] = temp;
      hi--;
    }
  }
}

/* Utility function to print array arr[] */
function printArray(arr, arrSize) {
  let i;
  for (i = 0; i < arrSize; i++) {
    console.log(arr[i]);
  }
}

/*Driver function to check for above functions*/
let arr = [0, 2, 1, 2, 0];

let arrSize = arr.length;
sort012(arr, arrSize);
printArray(arr, arrSize);
