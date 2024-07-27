//Ans: 1 ⤵
const isLearning = true;
if(isLearning){
    console.log("Keep Learning"); // "Keep Learning";
} else {
    console.log("I hope you are learning....");
}

//Ans: 2 ⤵
const learning = true;
const reading = learning === true;
console.log(reading); // true

if (reading){
    console.log(true); // true
}
else{
    console.log(false);
}
// javascript worked automatic converted truthy or falsy value

//Ans: 3 ⤵
// if else
const age = 18;
if (age < 10) {
  console.log("stay home under your mom supervision");
} else if (age >= 10 && age < 15) {
  console.log("Try to gain knowledge from outside of home");
} else if (age >= 15 && age < 18) {
  console.log("prepare to cast vote");
} else if (age >= 18) {
  console.log("cast you vote"); // cast you vote
} else {
  console.log("You are out of range");
}

// switch statement
const age = 18;
switch (true) {
  case age < 10:
    console.log("stay home under your mom supervision");
    break;
  case age >= 10 && age < 15:
    console.log("Try to gain knowledge from outside of home");
    break;
  case age >= 15 && age < 18:
    console.log("prepare to cast vote");
    break;
  case age >= 18:
    console.log("cast you vote"); // cast you vote
    break;
  default:
    console.log("You are out of range");
}



//Ans: 4 ⤵
let var1;
const var2 = "";
const var3 = 1;
const secretMessage = "secret!";

if(var1){
    console.log("first");
} else if(var1 || var2){
    console.log("second");
} else if(var1 || var3){
    console.log("third"); // 'third'
} else {
    console.log("fourth");
}

// What should the above code console.log? Why?⤵ (2)
// above code console.log answer -'third'
let var1; // undefined
const var3 = 1; // 1
console.log(var1 || var3); // 1
// Usually (||) OR operator between two or more expressions.  If any one expression is true, the whole is true.

// What is the value of var1 when it is initialized?⤵ (1)
// let var1; // undefined

// Is the value of var1 a "truthy" value? Why?⤵ (1)
// var1 is truthy value.  
let var1; // undefined
console.log(undefined === undefined); // true
// so var1 is truthy value

// Is the value of var2 a "truthy" value? Why?⤵ (1)
// var2 is truthy value
const var2 = ""
console.log("" === ""); // true
// so var2 is truthy value

// Is the value of var3 a "truthy" value? Why?⤵(1)
// var3 is truthy value
const var3 = 1
console.log(1 === 1); // true
// so var3 is truthy value

// Ans: 5 ⤵
// Choose the correct conditional (ternary) operator to console  "Too young" if age is less than 18, otherwise alert "Old enough" (2) ⤵

const age = 16;
const result = true < 18 ? "Too young" : "Old enough";
console.log(result); // "Too young"

// Ans: 6 ⤵
// When to Use if else vs ternary vs switch? (2) ⤵
// if else ➡ Use if to specify a block of code to be executed, if a specified condition is true
// ternary ➡ A ternary operator is a conditional operator in JavaScript that evaluates a conditional expression and returns either a truthy or falsy value
// switch ➡ Many possible results can be returned when there are choices for the user to select or from other code in it