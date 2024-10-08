//Ans: 1

function myFunction(a, b) {
    return a.toString() === b.toString() ? true : false;
}

myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00")); //false
myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00")); //true
myFunction(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00")); //false

//Ans: 2
function myFunction(a, b) {
  let changeTimes = Math.abs(a - b)
  let changeDays = Math.floor(changeTimes/(1000*60*60*24))
  return changeDays;
}
console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01'))); //10
console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01'))); //7457

//Ans: 3
function myFunction(a, b) {
    return a.toString()  < b.toString() ? true : false;
  }
  
  console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); //true
  console.log(myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))); //false
  console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //false

//Ans: 4
function myFunction(a, b) {
    aHours = a.getHours();
    bHours = b.getHours();
    aMinutes = a.getMinutes();
    bMinutes = b.getMinutes();
    aSeconds = a.getSeconds();
    bSeconds = b.getSeconds();
    let hrs = aHours - bHours;
    let min = Math.abs(aMinutes - bMinutes);
    let sec = Math.abs(aSeconds - bSeconds);
  return `hrs: ${hrs}, min: ${min}, sec: ${sec}`
}
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10'))) //{ hrs: 0, min: 45, sec: 10 }
console.log(myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00'))) //{ hrs: 1, min: 50, sec: 23 }
console.log(myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00'))) ///{ hrs: 3, min: 4, sec: 12}

//Ans: 5
function generateRandomNum(startNum, endNum){
  let result = Math.floor(Math.random() * (endNum-startNum) + startNum);   
  return result;                        
}
console.log(generateRandomNum(5, 10) );               