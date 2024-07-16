// Ans: 1 ⤵
// const x = 10;
// const y = "a"
// y === "b" || x >= 10
// false || true
// true
// console.log(y === "b" || x >= 10)

// Example ⤵
console.log(true || true);
console.log(true || false);
console.log(false || true);
// Usually sits between two or more expressions.  If any one expression is true, the whole is true.

// Ans: 2 ⤵
const x = 3;
const y = 8;
!(x == "3" || x === y) && !(y != 8 && x <= y);
!(true || false) && !(false && true);
!true && !false;
false && true;
false;
console.log(!(x == "3" || x === y) && !(y != 8 && x <= y));

// Example ⤵
console.log(true && true);
console.log(true && false);
console.log(false && true);
// Usually sits between two or more expressions.  If any one expression is false, the whole is true.

// Ans:3
const isTrue = true;
const isFalse = false;
console.log(isTrue || "Hello World" );
console.log(isFalse && "");
console.log(isFalse && null);
console.log(isFalse && 0);
console.log(isTrue || -1);
console.log(isFalse && NaN);

// falsy value ⤵

// false
// 0
// ""
// null
// undefined
// Nan

//truthy value

// "ibrahim"
// " "
// 1
// -1

// Ans: 4 ⤵
const str = "haha!"
const msg = ""
const isFunny = "false"

!(( str || msg ) || isFunny)  
!(true || true) //short circuit
!true
false
console.log(!(( str || msg ) || isFunny));

// // Ans: 5 ⤵
// // (==) is used to compare 2 values
// // (===) is used to compare 2 values and their types

// // Ans: 6 ⤵
const a = 10
a++
++a

// // a++ returns the value of a before incrementing, and ++a returns the value of an after been incremented.

// // Ans: 7 ⤵
10 / 2 * 5 // 25
// // Since the power of (/) Division is larger than the power of (*)multiply, (/) has previously been effective.
10 / (2 * 5) // 1

// // Ans:8 ⤵
2 == "2" // true
2 === 2  // true
10 % 3   // 1
10 % 3 === 1 // true
true && false // false
false || true // true
true || false // true