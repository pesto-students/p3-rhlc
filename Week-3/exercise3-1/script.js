function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("freshly calculated", sum);
  return sum;
}

function memoize(func) {
  const cache = {};
  return function memoized(...args) {
    const key = JSON.stringify(args);
    console.log(cache);
    if (key in cache) {
      console.log(`from cache ${cache[key]}`);
      return cache[key];
    }
    return (cache[key] = func(...args));
  };
}

const memoizeAdd = memoize(add);
memoizeAdd(100, 100);
memoizeAdd(100, 100);
