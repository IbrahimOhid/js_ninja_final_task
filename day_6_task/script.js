// Answer: 1
// 1. Array 2. Object, 3. Function

// Answer: 2
const userInfo = ["abul", "kabul", 30, "software developer"]; // Array
console.log(userInfo);
console.log(userInfo[3]);
userInfo[4] = '3 year experience';
console.log(userInfo);

const personalInfo = {
  firstName: "abdu",
  lastName: "rahim",
  age: 30,
  occupation: "web engineer",
}; // Object is Best Practice
console.log(personalInfo);
console.log(personalInfo.occupation);
personalInfo.experience = '3 year experience';
console.log(personalInfo);

// Answer: 3
const profile = {
  firstName: "Mohammad",
  lastName: "Ibrahim",
  occupation: "Front-End Web Developer",
};
console.log(profile.firstName);
console.log(profile["lastName"]);

profile.hobby = "reading-book";
console.log(profile);

delete profile.occupation;
console.log(profile);

// Answer: 4
//Dot Notation Use
const productInfo = {
    name : 'shoe',
    price : 300,
    color: 'black'
}
console.log(productInfo.color);
//bracket Notation use
const friendName = ['ibrahim', 'abul', 'kabul', 'babul'];
console.log(friendName[2]);

// Answer: 5
// Array
const firstArray = [];
firstArray[0] = "ibrahim";
console.log(firstArray);

const secondArray = new Array("ohid", "rahim", 27, "karim");
console.log(secondArray);

const thirdArray = new Array();
thirdArray[0] = "abul", 
thirdArray[1] = "habul"
console.log(thirdArray);

// Object
const firstObj = {};
firstObj.name = "habul",
firstObj.age = 30;
console.log(firstObj);

const secondObj = new Object({
  name: "abul",
  age: 23,
  occupation: "web engineer",
});
console.log(secondObj);

const thirdObj = new Object();
thirdObj.name = "kabul";
thirdObj.age = 33;
console.log(thirdObj);

// Answer: 6
const userObj = {
  name: "samim",
  address: {
    city: "Dhaka",
    university: {
      name: "Dhaka University",
    },
  },
};
console.log(userObj.address.university.name);

const userArr = ['samim', ['Dhaka', ['Dhaka university']]]
console.log(userArr[1][1]);
