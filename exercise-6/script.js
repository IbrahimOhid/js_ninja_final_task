// Ans: 1

// let num = 1;
// while(num <= 10){
//     console.log(num);
//     num += 2;
// }

//=> Here the value of num is 1. Condition is given that the value of num will be less than or equal to 10. Then 2 will be added to the value of num.  So 1, 3, 5, 7, 9 results have been obtained.

// Ans: 2

// let num = 1
// while(num <= 20) {
// if(num % 4 === 0){
// console.log(num);
// }
// num++;
// }

//=> Here the value of num is given as 1. The condition is given that the value of num will be less than or equal to 20. Then the value of num will be added to 1 and it is said that if the value of num is divided by 4 the quotient will be 0.  Then the numbers between 1-20 which are divided by 0 will show the result of num.  Since 4, 8, 12, 16, 20 are divided by 4, the quotient is 0.  So these are showing results

// Ans: 3

// let num = 100;
// while(num < 150) {
// console.log(num + 1);
// num--;
// }

//=> output error or browser fix. because it's infinite loop.it's condition not false

// Ans: 4

// let num = 1;
// while(num <= 100) {
// if(num % 2 === 0){
// console.log(num);
// }
// num++;
// }

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// Ans: 5

// function repeat(n){
//     for(let i = 1; i <= n; i++){
//         for(let j = 1; j <= i; j++){
//             document.write('$')
//         }
//         document.write('<br>')
//     }
// }
// repeat(3);
// repeat(5);

// Ans: 6
function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }
        else if(i % 3 === 0){
            console.log('Fizz');
        }
        else if(i % 5 === 0){
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
        
    }
    }
    fizzBuzz(100)

// Ans: 7

function myFunction(a, b) 
{
    let count = 0
    for(let i = 0; i < b.length; i++){
        if(a === b[i]){
            count += 1;
        }
        
    }
    return count;
}

console.log(myFunction('m', 'how many times does the character occur in this sentence?')); 
console.log(myFunction('h', 'how many times does the character occur in this sentence?')) //4
console.log(myFunction('?', 'how many times does the character occur in this sentence?')) //1
console.log(myFunction('z', 'how many times does the character occur in this sentence?')) //0
