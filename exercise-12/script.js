// Ans: 1
function valTimesIndex(arr) {
  const result = arr.map((elem, index) => elem * index);
  return result;
}

console.log(valTimesIndex([1, 2, 3])); // [0,2,6]
console.log(valTimesIndex([1, -2, -3])); // [0,-2,-6]

// Ans:2
function doubleOddNumbers(arr) {
  const filterNum = arr.filter((num) => num % 2 == 1);
  const result = filterNum.map((newNum) => newNum * 2);
  return result;
}

console.log(doubleOddNumbers([1, 2, 3, 4, 5])); // [2,6,10]
console.log(doubleOddNumbers([4, 4, 4, 4, 4])); // []

// Ans:3
function showFirstAndLast(arr) {
  const filterString = arr.map((text) => text[0] + text[text.length - 1]);
  return filterString;
}

console.log(
  showFirstAndLast(["obaydullah", "Karim", "miraz", "kawsar", "ruhi", "udemy"])
); // ["oh", "km", "mz", "kr", 'ri', 'uy']
console.log(showFirstAndLast(["hi", "goodbye", "smile"])); // ['hi', 'ge', 'se']

// Ans: 4
console.log(
  addKeyAndValue(
    [{ name: "Samim" }, { name: "Miraz" }, { name: "Matt" }, { name: "Anam" }],
    "title",
    "instructor"
  )
);

// [{name: 'Samim', title:'instructor'}, {name: 'Miraz', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Anam', title:'instructor'}]

function addKeyAndValue(arr, key, value) {
  const newObj = arr.map((userName) => {
    userName[key] = value;
    return userName;
  });
  return newObj;
}

// Ans: 5
console.log(vowelCount("samim")); // {a:1,i:1};
console.log(vowelCount("Tim")); // {i:1};
console.log(vowelCount("Matt"));; // {a:1}
console.log(vowelCount("hmmm"));; // {};
console.log(vowelCount("I Am awesome and so are you"));; // {i: 1, a: 4, e: 3, o: 3, u: 1};

function vowelCount(str) {
  const vowel = "iouae";
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (vowel.includes(char)) {
        acc[char] = (acc[char] || 0) + 1;
      }
      return acc;
    }, {});
}

// Ans: 6
console.log(hasOnlyOddNumbers([1,3,5,7]));// true
console.log(hasOnlyOddNumbers([1,2,3,5,7])); // false


function hasOnlyOddNumbers(arr) {
  const oddNum = arr.every((num) => num % 2 == 1)
  return oddNum;
}

// Ans: 7
console.log(hasNoDuplicates([1,2,3,1])); // false
console.log(hasNoDuplicates([1,2,3])); // true


function hasNoDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return false;
    }
  }
  return true;
}

// Ans: 8
console.log( findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Samim', last:"Hasan", isCatOwner: false}], 'isCatOwner', true)) // {first: 'Tim', last:"Garcia", isCatOwner: true;


function findInObj(arr, key, searchValue) {
    const findObj = arr.some((obj) => {
     if(obj[key] == searchValue){
      console.log(obj);
      return obj;
     }
    })
      return findObj;
}
