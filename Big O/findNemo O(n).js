const nemo = ["l", "l", "l", "l", "l", "l", "l", "l", "l", "nemo"];
const large = new Array(10000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
      break;
    }
  }
}

findNemo(large); //O(n) Linear time
// worst case nemo is last index of array

