// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

// not sorted arrays
// inputs 2 arrays
// output is true or false
// nested loop but O(m*n) time O(1)

// hashmaps O(m+n) time O(m)


const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'g'];
function hashmapCheck(arr1, arr2){
    //create an object from arr1
    hash = {};
    for (i=0; i<arr1.length; i++){
        if(!hash[arr1[i]]){
            hash[arr1[i]] = true;
        }
    }
    //check object against arr2
    for (letter of arr2){
        if(hash[letter]){
            console.log(true); 
            return true;
        }
    }
    console.log(false); 
    return false;
}

hashmapCheck(array1, array2);