// Ans:1
const data = this;
console.log(data);
//Output:- Window Object, It's Browser Specific Object.
function logThis(){
    return this;
}
logThis();
//Output:- Window Object, Because it's Plain Function.plain function call - window object.

//Ans:2
const instructor = {
    firstName: 'Adnan',
    sayHi(){
        console.log("Hello! " + this.firstName); // 'Hello! Adnan'
    }
}
instructor.sayHi()
//Output:- 'Hello ! Adnan', Because, due to calling the reference of object, the console will show 'Hello! Adnan' is printed.

//Ans:3
const instructor = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: false
    },
    displayInfo: function(){
        console.log("Cat owner? "+ '-' + this.catOwner); // 'Cat owner? -undefined
    }
}
instructor.displayInfo();
//Output:- 'Cat owner? -undefined. because, since the info object of the instructor object will show on the console of thee key value displayInfo function.This catOwner has called this.catOwner not to call the info function as a reference. That's why it looks undefined. should have called this.info.catOwner

//Ans: 4
const instructor = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: false,
        displayLocation: function(){
            return  `Residing ${this.data.location}`; // 'Residing Dhaka'
        },
        data: {
            location: "Dhaka"
        }
    },
}
instructor.info.displayLocation();
//Output:- 'Residing Dhaka', Because, First, the instructor object is called as a reference.  Then instructor object's inner object info is called as reference.  Then called the info object's displayLocation function as a reference.  So the value returned by displayLocation is shown in the output.   Here another data object is referenced inside the info object. So the key location of the data object.   The return value of the displayLocation function is displayed as output.

//Ans: 5
const instructor = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return  `Residing ${this.data.location}`;
        },
        data: {
            location: "Dahaka",
            logLocation: this.displayLocation
        }
    },
}
instructor.info.data.logLocation();
//Output: Result not found. because the values that are returning in the displayLocation function are called incorrectly. Here info object should be called as reference first

//Ans: 6
//=> Assign -> shallow copy
//=> spread operator -> shallow copy
//=> Json.Stringify -> Deep copy

//Ans: 7
// Mutable Data:- Complex Data type / Non Primitive Data type - Array, Function, Object
// Immutable Data:- String, number, boolean, null, undefined, bigint, symbol

//Ans: 8
// pass by value example
const a = 3;
function newValue(value){
    let b = value;
    b = 5;
    return b;
}
console.log(newValue(a));

// pass by reference example
const xObj = {
    name : 'ohid',
    age: 40
}
function newObj(valueObj){
    let yObj = valueObj;
    console.log(xObj); // {name: 'ohid', age: 40}
    yObj.name = 'ibrahim',
    yObj.age = 27
    return yObj;
}
console.log(newObj(xObj)); // {name: 'ibrahim', age: 27}

