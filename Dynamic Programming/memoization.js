function memoizedAddTo80() {
  let cache = {};
//   put cache in function as best practice
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("takes long time");
      cache[n] = n + 80;
      return cache;
    }
  };
}
const memized = memoizedAddTo80();

console.log(memized(5));
console.log(memized(5));
console.log(memized(6));

// only takes long time once, cache stores the data
