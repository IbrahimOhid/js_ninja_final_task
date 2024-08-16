// Ans: 1
function myFunction(a, b) {
  if(a.includes(b)){
    result = b + a;
  }
  else{
   result = a + b;
  }
  return result;
}

console.log(myFunction("cheese", "cake"));; //'cheesecake'
console.log(myFunction("lips", "s")); //'slips'
console.log(myFunction("Java", "script")); //'Javascript'
console.log(myFunction(" think, therefore I am", "I")); // 'I think, therefore I am'

// Ans: 2
function myFunction(a, b) {
  let element = a.split('');
  for (let i = element.length-3; i >= 0; i -= 3) {
    element.splice(i, 0, b);
  }
  let result = element.join('')
  return result;
}
console.log(myFunction('1234567', '.')); //'1.234.567'
console.log(myFunction('abcde', '$')); //'ab$cde'
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')); //'zwxyzwxyzwxyzwxyzwxyz'

// Ans: 3
function myFunction(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i)
      let increaseCode = code + 1;
      let newLetter = String.fromCharCode(increaseCode)
      newStr = newStr + newLetter
  }
  console.log(newStr)
return newStr;
}
myFunction('bnchmf') //'coding'
myFunction('bgddrd') //'cheese'
myFunction('sdrshmf') //'testing'

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
console.log(people.indexOf("Foo"));
//10.
console.log(people.splice(2,1, "Elizabeth", "Bob"));
//11.
const withMiraz = people.concat('Miraz');
console.log(withMiraz);
