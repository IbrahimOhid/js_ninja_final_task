// Ans: 1
// whenever you repeatedly use the same code. Functions are used to avoid code repetition

// Ans: 2
// Console 
function myInfo(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
myInfo('Mohammad', 'Ibrahim');



// Return
function multiplication(num1, num2) {
    return num1 * num2;
}
const result = multiplication(10, 3);
console.log(result);

// Ans:3
function difference(num1, num2) {
    return num1 - num2;
}
console.log(difference(10, 2));
console.log(difference(0, 2));

// Ans:4
function myFunction(num) {
    return num;
}
console.log(typeof (myFunction(1)));
console.log(typeof (myFunction(false)));
console.log(typeof (myFunction({})));
console.log(typeof (myFunction(null)));
console.log(typeof (myFunction('string')));
console.log(typeof (myFunction(['array'])));


//Ans: 5
function printDay(day) {
    const weekDay = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return weekDay[day-1];
}
console.log(printDay(4));
console.log(printDay(7));
console.log(printDay(41));


//Ans: 6
function lastElement(num) {
    return num [num.length-1];
}
console.log(lastElement([1, 2, 3, 4]));
console.log(lastElement([1, 2, 3, 10]));
console.log(lastElement([1, 2, 3, 'hi']))
console.log(lastElement([]))

//Ans: 7
//createObj(1, 2, 3) //{x: 1, y: 2, z:3}
function createObj(num1, num2, num3){
    return{
        x: num1,
        y: num2,
        z: num3
    }
}
console.log(createObj(1, 2, 3));
console.log(createObj('a', 'b', 'c'))
console.log(createObj('ab', 'bc', 'ca'));

