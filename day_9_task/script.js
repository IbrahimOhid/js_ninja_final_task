// Ans: 1 ⤵
// const x = 10;
// const y = "a"
// y === "b" || x >= 10
// false || true
// console.log(y === "b" || x >= 10)

// Example ⤵
console.log(true || true);
console.log(true || false);
console.log(false || true);
// Usually sits between two or more expressions.  If any one expression is true, the whole is true.

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
// Usually sits between two or more expressions.  If any one expression is false, the whole is true.

// Ans:3
console.log( true || "Hello World") //true

console.log( true == ""); //false

console.log(null != undefined) //false

console.log(true == 0) //false

console.log(true || -1) //true

console.log(NaN == NaN) //false

// falsy value ⤵

//- false
//- 0
//- ""
//- null
//- undefined
//- Nan

//truthy value

//- "ibrahim"
//- " "
//- 1

// Ans: 4 ⤵
const str = "haha!"
const msg = ""
const isFunny = "false"

!(( str || msg ) || isFunny)
!(true || true)
!true
false
console.log(!(( str || msg ) || isFunny))
