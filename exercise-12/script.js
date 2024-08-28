// Ans: 1
function valTimesIndex(arr) {
  const result = arr.map((elem,index) => elem * index)
  return result
}

console.log(valTimesIndex([1,2,3]) );// [0,2,6]
console.log(valTimesIndex([1,-2,-3])); // [0,-2,-6]

// Ans:2
function doubleOddNumbers(arr) {
  const filterNum = arr.filter(num => num % 2 == 1);
  const result = filterNum.map(newNum => newNum * 2);
  return result;
}

console.log(doubleOddNumbers([1,2,3,4,5])); // [2,6,10]
console.log(doubleOddNumbers([4,4,4,4,4])); // []

// Ans:3
function showFirstAndLast(arr) {
  const filterString = arr.map((text, index) => text[] + [index-1]);
  console.log(filterString);
}

console.log(showFirstAndLast(['obaydullah','Karim', 'miraz', 'kawsar', 'ruhi', 'udemy'])); // ["oh", "km", "mz", "kr", 'ri', 'uy']
 showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']