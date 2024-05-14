// Q No 1 : Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
/* Sample Output :
"0 is even"
"1 is odd"
"2 is even" */

let enterBtn1 = document.getElementById("enterBtn1");
// let answer1 = document.getElementById("answer1");

function evenOddNums() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
      // return(`${i} is even`);
    } else {
      console.log(`${i} is Odd`);
      // return (`${i} is Odd`);
    }
  }
}
enterBtn1.onclick = function(){
  evenOddNums();
}
// evenOddNums();

// let evenOddFun = evenOddNums();
// answer1.style.display = "inline-block";
// answer1.innerHTML = evenOddFun;

// Q No 2 : Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

let enterBtn2 = document.getElementById("enterBtn2");

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
enterBtn2.onclick = function(){
  fizzBuzz();
}
// fizzBuzz();

/* Q No 3 : Write a JavaScript program to find the Armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. */

let enterBtn3 = document.getElementById("enterBtn3");

function armStrongNum(num) {
  let numToStr = num.toString();

  let firstNum = numToStr[0];
  let strToNum1 = parseInt(firstNum);
  let cube1 = Math.pow(strToNum1, 3);

  let secondNum = numToStr[1];
  let strToNum2 = parseInt(secondNum);
  let cube2 = Math.pow(strToNum2, 3);

  let thirdNum = numToStr[2];
  let strToNum3 = parseInt(thirdNum);
  let cube3 = Math.pow(strToNum3, 3);

  let sumOfThree = cube1 + cube2 + cube3;

  if (num === sumOfThree) {
    console.log("This is Armstrong Number : ", num);
  } else if (num < 100 || num > 1000) {
    console.log("Please Type Three Numbers for checking Armstrong No!");
  } else {
    console.log("This is Not Armstrong Number");
  }
}
enterBtn3.onclick = function(){
  armStrongNum(153);
}

// Q No 4 : Write a JavaScript program to sum 3 and 5 multiples under 1000.

let enterBtn4 = document.getElementById("enterBtn4");

function sumNums() {
  // let
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}
enterBtn4.onclick = function(){
sumNums();
}

// Q No 5 : Calculate the sum of all the numbers in the following array
let enterBtn5 = document.getElementById("enterBtn5");

var numbersArray = [1,13,22,123,49]

function sumOfArrNums(){
    let sumAll = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        // console.log(numbersArray[i]);
        sumAll += numbersArray[i];
    }
    console.log(sumAll);
}
// sumOfArrNums();
enterBtn5.onclick = function(){
  sumOfArrNums();
}


// Q No 6 : Write a program that determines whether a given number is positive or negative.
let enterBtn6 = document.getElementById("enterBtn6");

function checkNumber(val1){
  if(val1 < 0){
    console.log("This Number is Negative!");
  }else if (val1 > 0){
    console.log("This Number is Positive!");
  }else {
    console.log("Please write negative or positive number");
  }
}
// checkNumber(0);
enterBtn6.onclick = function(){
  checkNumber();
}

// Q No 7 : Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
let enterBtn7 = document.getElementById("enterBtn7");


function ticketPrice(){
  let age = 36;
  if(age < 12){
    console.log("Your Ticket Price is 5");
  }
  else if(age < 18){
    console.log("Your Ticket Price is 10");
  }
  else if(age < 60){
    console.log("Your Ticket Price is 20");
  }
  else if(age > 60){
    console.log("Your Ticket Price is 15");
  }
}
// ticketPrice();
enterBtn7.onclick = function(){
  ticketPrice();
}

// Q No 8 : Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0 
let enterBtn8 = document.getElementById("enterBtn8");


function discountFun(){
  let price = 100;

  if(price >= 100){
    console.log("Your Discount is 20 Rupees");
  }
  else if(price >= 50){
    console.log("Your Discount is 10 Rupees");
  }else {
    console.log("No Discount")
  }
}
// discountFun();
enterBtn8.onclick = function(){
  discountFun();
}

// Q No 9 : Get the sum of two arrays…actually the sum of all their elements.
//  P.S. Each array includes only integer numbers. Output is a number too.
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351 
// Example output: 
// 276 + 351 = 627 

let enterBtn9 = document.getElementById("enterBtn9");


function sumOfTwoArr(){
  let sumArr1 = 0;
  for (let i = 0; i < arr_1.length; i++) {
      // console.log(numbersArray[i]);
      sumArr1 += arr_1[i];
  }
  // console.log(sumArr1);
  let sumArr2 = 0;
  for (let i = 0; i < arr_2.length; i++) {
      // console.log(numbersArray[i]);
      sumArr2 += arr_2[i];
  }
  // console.log(sumArr2);
  let sumAll = sumArr1 + sumArr2
  console.log(sumAll);
}
// sumOfTwoArr();
enterBtn9.onclick = function(){
  sumOfTwoArr();
}


// Q No 10 : 
// Using a for loop output the elements in reverse order
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3  be  false cannot  true 9 what 43 OR each item on a new line

let enterBtn10 = document.getElementById("enterBtn10");


let reverseArr = arr.reverse();
function reverseFun(){
  for (let i = 0; i < reverseArr.length; i++) {
    console.log(reverseArr[i]);
  }
}
// reverseFun();
enterBtn10.onclick = function(){
  reverseFun();
}

// Q No 11 : Given a number n Calculate the factorial of the number

let enterBtn11 = document.getElementById("enterBtn11");


function factorialNum(num){
  // let facNum = 1;
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  console.log("The factorial Num of " + num);
}
// factorialNum(6);
enterBtn11.onclick = function(){
  factorialNum(5);
}
