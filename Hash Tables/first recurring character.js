//Google Question, find first recurring character
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// nested loop possible but O(n^2) time not optimal
// loop through and check against set
function firstRecurringCharacter(input) {
    // check input
    if(!input){
        return undefined
    }
    // create set
    let checker = new Set()
    // loop through and check against the set
    for (let num of input){
        if(checker.has(num)){
            return num
        } else{
            checker.add(num)
        }
    }
    return undefined
}

// O(n) time O(n) space 

function firstRecurringCharacter2(input) {
    let map = {};
    for ( let i = 0; i < input.length; i++){
        if(map[input[i]] ===0 || map[input[i]]){
            return input[i]
        } else{
            map[input[i]] = i;
        }
        console.log(map);
    }
    return undefined;
}
// using objects
console.log(firstRecurringCharacter2([3,2,5,2,3,5,1,2,4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2