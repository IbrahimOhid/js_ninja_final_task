// Ans: 1
// function myFunction(a, b) {
//   console.log(a.concat(b));
// }

// myFunction("cheese", "cake"); //'cheesecake'
// myFunction("lips", "s"); //'slips'
// myFunction("Java", "script"); //'Javascript'
// myFunction(" think, therefore I am", "I");

// Ans: 2
// function myFunction(a, b) {
//     const result = a.splice(-3, 0, b);
//     return result;
// }
// console.log(myFunction('1234567', '.')); //'1.234.567'
// myFunction('abcde', '$') //'ab$cde'
// myFunction('zxyzxyzxyzxyzxyz', 'w') 

// Ans: 4
function myFunction(a, n) {
  const element = a.splice(-n);
  return element;
}
console.log(myFunction([1, 2, 3, 4, 5], 2)); //[ 4, 5 ]
console.log(myFunction([1, 2, 3], 6)); //[ 1, 2, 3 ]
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)); //[ 6, 7, 8 ]

// Ans: 5
function myFunction(a, b) {
  if (a < b) {
    result = a / b;
  } else {
    result = a * b;
  }
  return result;
}
console.log(myFunction(10, 100)); // 0.1
console.log(myFunction(90, 45)); //4050
console.log(myFunction(8, 20)); //0.4
console.log(myFunction(2, 0.5)); //1

//Ans: 6
let people = ["samim", "Anis", "Adnan", "Karim"];
//1. 
for(element of people){
    console.log(element);
}
//2.
console.log(people.shift());
//3.
console.log(people.pop());
//4.
console.log(people.unshift("Ifat"));
//5.
console.log(people.push("Ibrahim"));
//6.
for(let removeName of people){
  console.log(removeName)
    if(removeName === "Anis"){break;}
}
//7.
console.log(people.slice(2));
//8.
console.log(people.indexOf("Anis"));
//9. 
console.log(people);
