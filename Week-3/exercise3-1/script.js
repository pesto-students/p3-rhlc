const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  };
};

const newAdd = memoizedAdd();
console.log(newAdd(9, 10, 11));
console.log(newAdd(9, 10, 11));
