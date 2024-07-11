// Ans: 1
// presenting myself
let currentName = 'Mohammad Ibrahim';
let email = 'ibrahim@gmail.com';
let age = 30;
let isDeveloper = true;
let goingToBeDesigner; // undefined
let goingToBeDesigners = null; // null

// Ans: 2
// concatenation format
const myPersonalInfo = " Hey it's me" + currentName + " . I am " + age + " .you can contact me by this " + email +".I am a Developer and it's " + isDeveloper + " . I am going to be a Designer - " + goingToBeDesigner + " ";
console.log(myPersonalInfo);
// template string format
const myInfo = `Hey it's me ${currentName}. I am ${age}.you can contact me by this ${email}.I am a Developer and it's ${isDeveloper}. I am going to be a Designer- ${goingToBeDesigner}`
console.log(myInfo);

// Ans: 3
var a = 10;
var a = 30;
console.log(a); // no error
let product = 'shoe';
 product = 'watch'; // no error
console.log(product);

const fruit = 'mango';
fruit = 'banana'; // error
console.log(fruit);

// Ans: 4
// difference between null and undefined?
const name; // undefined - due to variable value not being declared.
const price = null; // null - Declare null given the variable value.

// Ans: 5
// NaN = Not a Number
// typeof NaN is a number because it is a numeric value.

// Ans: 6
let MangoPrice = 100;
console.log(MangoPrice);

