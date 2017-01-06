/**
 * Created by mayujain on 1/5/17.
 */

let a = [1, 2, 3];

console.log(a)      //[ 1, 2, 3 ]

console.log(...a);  //1 2 3

let first = [1,2,3]
let second = [3,4,5]

first.push(second)
console.log(first)  //[ 1, 2, 3, [ 3, 4, 5 ] ]

first = [1,2,3]
first.push(...second) //this spreads the array & then pushes it first[]
console.log(first)  //[ 1, 2, 3, 3, 4, 5 ]

function addThreeThings(a, b , c) {
    let result = a + b + c;
    console.log(result);
}

addThreeThings(...first);  // 6
addThreeThings(...second);  //12
