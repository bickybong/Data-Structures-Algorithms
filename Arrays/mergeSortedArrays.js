// merge 2 sorted arrays
// [0,3,4,31] and [4,6,30]
//  => [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArray(arr1, arr2){
    // check inputs
    if (!arr1){
        return arr2
    } else if (!arr2){
        return arr1
    }
    // create new arr
    const merged = [];
    let i = 0;
    let j = 0;
    // 2 slider
    while (arr1[i] || arr2[j]){//can convert into function for cleaner code
        console.log(arr1[i], arr2[j]);
        if (!arr2[j] || arr1[i]<arr2[j]){
            merged.push(arr1[i]);
            i++;
        } else{
            merged.push(arr2[j]);
            j++;
        }
    }    
    return merged
}
console.log(mergeSortedArray([0,3,4], [4,6,30]));
