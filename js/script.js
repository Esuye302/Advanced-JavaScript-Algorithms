/*
- write a function that takes array of numbers
 let getOnlyEvens = (arr) => {
    
 }

print out on the console another array that contains only even number

example:[1,2,4,5,7] => [2,4]
*/

let getOnlyEvens = (arr) => {
  let result = [];
  if (!Array.isArray(arr)) {
    console.log("please provide only array");
    return;
  }
  if (!arr.every((element) => typeof element === "number")) {
    console.log("array must contain only numbers");
    return;
  }
  for (const numbers of arr) {
    if (numbers % 2 === 0) {
      result.push(numbers);
    }
  }
  return result;
};

// let v = getOnlyEvens([1, 2, 3, 6, 4, 8]);
// console.log(v);

let getOnlyEvens1 = (arr) => {
  if (
    !Array.isArray(arr) ||
    !arr.every((element) => typeof element === "number")
  )
    return "please provide array value";
  let result = arr.filter((numbers) => numbers % 2 === 0);
  return result;
};

// let c = getOnlyEvens1([1, 2, 6, 8, 9]);
// console.log(c);

// ❓❓Question 2
/*
create a function that takes two digit number
let reverseCompare = () => {
 };

 - check if the input number is 2 digit number 
 input < 10 || input > 99 || typeof input !== 'number'
return invalid

if the input number is grater than its reverse number 
return 'ok' else 'not ok'

❓how i reverse a number 
 i could use the array method reverse()

72 > 27 => ok
23 > 32 => Not ok
*/

let reverseCompare = (num) => {
  if (typeof num !== "number" || num < 10 || num > 99) {
    console.log("please Enter two digit Number.");
    return;
  }
  let reverse = parseInt(num.toString().split("").reverse().join(""));
  if (num > reverse) return console.log("OK");
  return console.log("Not OK");
};
// reverseCompare(-56);

// ❓❓Question 3

let factorial = (intNum) => {
  if (intNum <= 1) return console.log(1);
  let result = 1;
  for (let i = intNum; i >= 1; i--) {
    console.log((result *= i)); // result = result *1
  }
};
// factorial(5);

// ❓❓❓Question 4 (Meera array)

let checkMeera = (arr) => {
  if (!arr.every((element) => typeof element === "number") || !Array.isArray(arr)) {
    console.log("please provide only numbers");
    return;
  }

  for (const number of arr) {
    if (number * 2) {
      console.log("I am NOT a Meera array");
      return;
    }
  }
  console.log("I am a Meera array");
  return;
};
// checkMeera([7, 4, 9]);
// checkMeera([1, -6, 4, -3]);

let checkMeera1 = (arr) => {
  if (!arr.every((element) => typeof element === "number")) {
    console.log("please provide only numbers");
    return;
  }

  if (arr.include(arr * 2)) {
    console.log("I am NOt Meera array");
    return;
  }
  console.log("I am a Meera array");
};
// checkMeera1([10, 4, 0, 5]);
// checkMeera([7, 4, 9]);

//❓❓❓Question 5 (Dual array)

let checkTwoTimes = (arr) => {
  let counts = {};
  for (const numbers of arr) {
    if (counts[numbers]) {
      counts[numbers]++;
    } else {
      counts[numbers] = 1;
    }
  }

  for (const key in counts) {
    if (counts[key] !== 2) {
      console.log(0);
      return;
    }
  }
  console.log(1);
};
// checkTwoTimes([1, 2, 2, 3, 4, 5]);
// checkTwoTimes([1, 2, 1, 3, 3, 2]);


