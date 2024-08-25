// Ans: 1
function placeInMiddle(arr, vals){
    arr.splice(1,0, ...vals)
    return arr;

}
console.log(placeInMiddle([1,2,6,7],[3,4,5])); // [1,2,3,4,5,6,7])
console.log(placeInMiddle([1],[3,4,5])) // [1,3,4,5])
console.log(placeInMiddle([1,6],[2,3,4,5])) // [1,2,3,4,5,6]
console.log(placeInMiddle([],[2,3,4,5])) // [2,3,4,5]

// Ans:2
function joinArrays(...newArr){
  let result = [];
  return result.concat(...newArr);
}
console.log(joinArrays([1],[2],[3])); // [1,2,3]
console.log(joinArrays([1],[2],[3],[1],[2],[3])); // [1,2,3,1,2,3]
console.log(joinArrays([1,2,3],[4,5,6],[7,8,9])); // [1,2,3,4,5,6,7,8,9]
console.log(joinArrays([1],[3],[0],[7])); // [1,3,0,7]

// Ans:3
function sumEvenArgs(...numValue){

    let result = 0;
    for(let i = 1; i <= numValue.length; i++){
        if(numValue[i] % 2 === 0){
            result += numValue[i];
        }
    }
    return result;
}
console.log(sumEvenArgs(1,2,3,4)); // 6
console.log(sumEvenArgs(1,2,6)); // 8
console.log(sumEvenArgs(1,2)); // 2

// Ans: 4
const obj = {
  name: "samim",
  email: "samimfazlu091@gmail.com",
  address: {
    location: {
      country: {
        name: "Bangladesh",
        city: "Dhaka",
      },
    },
    getAddress() {
      return this.country.city + "-" + this.country.name;
    },
  },
};

const{address:{location:{country:{city}, getAddress}}} = obj;
console.log(city);
console.log(getAddress.bind(obj.address.location)());

// Ans: 5
console.log(sum([1, 2, 3, 4]));

function sum(...values) {
    let total = 0;
    for(let element of values[0]){
        total += element;
    }
    return total;
}


// Ans:6

//=> ...rest operator
const newObj = {
    name: 'ibrahim',
    age : 27,
    location : 'coxs bazar',
    profession: 'web designer'
}

const {name, profession, ...anotherInfo} = newObj;
console.log(name, profession); //  ibrahim, web designer
console.log(anotherInfo); // age:27, location: 

//=> ...spread operator
const userInfo = ['rahim', 'karim', 'fahim'];
const newUser = ['habul', 'kabul', ...userInfo];
console.log(newUser); //'habul', 'kabul', 'rahim', 'karim', 'fahim'

//=>>> The Spread Operator is used to 'spread' an iterable into its elements, while the Rest Operator 'collects' multiple elements into an array.