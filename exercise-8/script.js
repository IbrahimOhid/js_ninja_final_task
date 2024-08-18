// Ans:1
const data = this;
console.log(data);
//Output:- Window Object, It's Browser Specific Object.
function logThis(){
    return this;
}
logThis();
//Output:- Window Object, Because it's Plain Function.

//Ans:2
// const instructor = {
//     firstName: 'Adnan',
//     sayHi(){
//         console.log("Hello! " + this.firstName);
//     }
// }

// instructor.sayHi()
//Output:- 'Hello ! Adnan', Because, due to calling the reference of object, the console will show 'Hello! Adnan' is printed.

//Ans:3
const instructor = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: false
    },
    displayInfo: function(){
        console.log("Cat owner? "+ '-' + this.catOwner);
    }
}

console.log(instructor.displayInfo());

