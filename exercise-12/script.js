// Ans: 1
function valTimesIndex(arr) {
  const result = arr.map((elem,index) => elem * index)
  return result
}

console.log(valTimesIndex([1,2,3]) );// [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]
