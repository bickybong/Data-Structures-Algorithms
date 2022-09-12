function boo(n) {
  for (i = 0; i < n; i++) {
    console.log("boo");
  }
}

boo(3); 

// space O(1)

function createArray(n) {
  let array = [];
  for (i = 0; i < n; i++) {
    array[i] = "hi"
  }
  console.log(array);
  return array;
}

createArray(9);

// O(n) space 