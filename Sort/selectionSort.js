const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(n^2) as well, bad
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = 100000000000;
    let index = 0;
    for (let j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        index = j;
      }
      if (j === array.length - 1) {
        let temp = array[i];
        array[i] = array[index];
        array[index] = temp;
      }
    }
  }
}

selectionSort(numbers);

console.log(numbers);
