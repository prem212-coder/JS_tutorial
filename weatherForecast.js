"use strict"; // its help us to find bug and scure the code
/*

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
step 1: create Function forecast perameter (arr)
concat the array.
step 2: create the string variable for change array to string and create a for loop. 
step 3: difine a variable days = 0
step 4: and increment days++
step 5: and for centigrate sign we use (\u00B0C) unicode
step 6: pass the array into the fuction
atep 7: end.
*/

function forecast(t1, t2) {
  let arr = t1.concat(t2);
  let str = "";
  let days = 0;
  for (let i = 0; i < arr.length; i++) {
    days++;

    str += `${arr[i]}\u00B0C in ${days} days....`;
  }
  console.log("...." + str);
}

forecast([17, 21, 23], [12, 5, -5, 0, 4]);

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function calculation(a, b) {
  let addintion = add(a, b);
  let multi = mul(a, b);
  let divide = div(a, b);
  return [addintion, multi, divide];
}

let result = calculation(23, 4);
console.log(`Addition = ${result[0]}`);
console.log(`Multiplication = ${result[1]}`);
console.log(`Divide Result = ${result[2]}`);
