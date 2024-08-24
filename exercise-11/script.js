// Ans: 1
function placeInMiddle(arr, vals){
    arr.splice(1,0, ...vals)
    return arr;
    
}
console.log(placeInMiddle([1,2,6,7],[3,4,5])); // [1,2,3,4,5,6,7])
console.log(placeInMiddle([1],[3,4,5])) // [1,3,4,5])
console.log(placeInMiddle([1,6],[2,3,4,5])) // [1,2,3,4,5,6]
console.log(placeInMiddle([],[2,3,4,5])) // [2,3,4,5]

// Ans:2
function joinArrays([a, ...b]){
    let c = [a, ...b]
    console.log(c);
}
console.log(joinArrays([1],[2],[3])); // [1,2,3]