// Ans: 1
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(20, 25)); //25
console.log(max(100, 25)); //100

// Ans: 2
function arrayFromRange(num1, num2) {
  if (num1 > num2) {
      [num1, num2] = [num2, num1]
  }
  let arr = [];
  for (let i = num1; i <= num2; i++) {
      arr.push(i);
  }
  return arr;
}

const rangeOne = arrayFromRange(1, 10);
console.log(rangeOne); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const rangeTwo = arrayFromRange(10, 5);
console.log(rangeTwo); //[ 5, 6, 7, 8, 9, 10]

//Ans: 3
function showNumber(num1, num2) {
  if (num1 > num2) {
      [num1, num2] = [num2, num1]
  }
  let count = 0;
  for (let i = num1; i <= num2; i++) {
      count += i;
  }
  return count;
}
console.log(showNumber(2, 4)); //9 (2 + 3 + 4)
console.log(showNumber(5, 2)); //14 (2 + 3 + 4 + 5)

//Ans: 4
const numbers = [1, 2, 3, 4];

function getMax(array) {
  return Math.max(...array)
}

const max = getMax(numbers);
console.log(max);  //4

//Ans: 5
function calculateAverage(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
      num += arr[i];
  }
  let average = num / arr.length;
  average = Math.ceil(average)
  if (average > 90) {
      return 'A';
  }
  else if (average >= 80)
      return "B";
  else if (average >= 70)
      return "C";
  else if( average > 60){
      return "D";
  }else{
      return "F";
  }
}
console.log(calculateAverage([60, 70, 90, 50, 55]))	// D
console.log(calculateAverage([83, 70, 90, 50, 55]))	// C

//Ans: 6
const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};
function showProperties(movieData) {
  let result = '';
  for(let names in movieData){
      if(typeof movieData[names] === 'string'){
          result += `${names}- ${movieData[names]} `
      }
  }
  return result;
}
console.log(showProperties(movie)); //title-a director-b

//Ans: 7
const array = [0, null, undefined, '', 2, 3];
function countTruthy(array) {
  let countValue = 0;
  for (element of array)
      if (element == true) 
        countValue++;
  return count;
}
console.log(countTruthy(array)); //2