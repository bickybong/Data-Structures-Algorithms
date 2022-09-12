const strings = ["a", "b", "c", "d"];
// 4 items, 4*4 shelfs so 16 bytes of storage in 32 bit system

// add item at end with push O(1)
strings.push("e");

// remove end item with pop O(1)
strings.pop();
strings.pop();

// unshift, add to start of array O(n)
strings.unshift("k");

// splice, add to selected location O(n)
strings.splice(2, 0, "alien");
console.log(strings);

// C++ 