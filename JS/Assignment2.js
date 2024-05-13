// alert("Welcome to Assignment 2");

/* Q No 1 : Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  */

let inputBox = document.getElementById("randomNumberInput");
let checkBtn = document.getElementById("checkBtn");
let answerBox = document.getElementById("answer");
// let inputValue = inputBox.value;

function randomNumber() {
  let rndmNmbr = Math.floor(Math.random() * 10 + 1);
  return rndmNmbr.toString();
  // console.log(rndmNmbr);
}

checkBtn.onclick = function () {
  let randomNmbr = randomNumber();
  answerBox.style.display = "block";
  let inputValue = inputBox.value;
  if (randomNmbr === inputValue) {
    // console.log("Good Work You Guess Nmbr : " + randomNmbr);
    answerBox.innerHTML = "Good Work!";
  } else if (inputValue === "") {
    answerBox.innerHTML = "Please write any No 1 to 10 in Input Field!";
  } else {
    // console.log("Not matched random Nmbr is : " + randomNmbr);
    answerBox.innerHTML = "Not matched random number is : " + randomNmbr;
  }
};

// Q No : 2 Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

let input1 = document.getElementById("numberInput1");
let input2 = document.getElementById("numberInput2");
let multiplyBtn = document.getElementById("multiplyBtn");
let divideBtn = document.getElementById("divideBtn");
let answerBox2 = document.getElementById("answer2");

// let input1Value = input1.value;
// let input2Value = input2.value;

function multiply(val1, val2) {
  let input1Value = val1;
  let input2Value = val2;

  let multiNums = input1Value * input2Value;
  // console.log(multiNums);
  return multiNums;
}
function divide(val1, val2) {
  let input1Value = val1;
  let input2Value = val2;
  // let input1Value = input1.value;
  // let input2Value = input2.value;

  let divideNums = input1Value / input2Value;
  // console.log(multiNums);
  return divideNums;
}

multiplyBtn.onclick = function () {
  let input1Value = input1.value;
  let input2Value = input2.value;
  let multiFun = multiply(input1Value, input2Value);
  answerBox2.style.display = "block";
  answerBox2.innerHTML = multiFun;
  // console.log(multiFun);
};
divideBtn.onclick = function () {
  let input1Value = input1.value;
  let input2Value = input2.value;
  let divideFun = divide(input1Value, input2Value);
  answerBox2.style.display = "block";
  answerBox2.innerHTML = divideFun.toFixed(2);
  // console.log(multiFun);
};

// Q No 3 : Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

let userText = document.getElementById("userInputText");
let enterBtn = document.getElementById("enterBtn");
let ansBox = document.getElementById("answer3");

function pyString(userInpt) {
  let userValue = userInpt;
  //    let withPy = "Ph" + userValue;
  //    return withPy;
  let withPy;
  if(userValue.length <= 2){
    return ("The string length must be greater than 2");
  }
  else if (userValue[0] == "p" || userValue[0] == "P" && userValue[1] == "y" ||userValue[1] == "Y") {
    withPy = userValue;
  } else {
    withPy = "Py" + userValue;
  }
  return withPy;
}

enterBtn.onclick = function () {
  let userValue = userText.value;
  let pyFun = pyString(userValue);
  // console.log(pyFun);
  let answerBox = ansBox;
  answerBox.style.display = "block";
  answerBox.innerHTML = pyFun;
};

// Q No 4 : Remove a character at the specified position of a given string and return the new string

let userInput = document.getElementById("userFullInput");
let userRemoveInp = document.getElementById("userRemoveInput");
let enterBtn4 = document.getElementById("enterBtn4");
let answer4 = document.getElementById("answer4");

function removeChar(str, char) {
  let indexOfWord = str.indexOf(char);
  let removed = str.replace(str[indexOfWord], "");
  return removed;
}

enterBtn4.onclick = function () {
  userWord = userInput.value;
  userChar = userRemoveInp.value;
  let removeCharacter = removeChar(userWord, userChar);
  answer4.style.display = "block";
  answer4.innerHTML = removeCharacter;
  // console.log(removeCharacter);
};

// Q No 5 : Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

let userChangeInput = document.getElementById("userInput");
let enterBtn5 = document.getElementById("enterBtn5");
let answer5 = document.getElementById("answer5");

function changingString(char) {
  let userInput = char;
  let firstChar = userInput[0];
  let lastChar = userInput[userInput.length - 1];
  let changed = lastChar + userInput.slice(1, userInput.length - 1) + firstChar;
  return changed;
}

enterBtn5.onclick = function () {
  let userInput = userChangeInput.value;
  let changeChar = changingString(userInput);
  answer5.style.display = "block";
  // answer5.innerHTML = changeChar;
  // console.log(changeChar);
  if (userInput.length <= 1) {
    answer5.innerHTML = "The string length must be greater than 1";
  } else {
    answer5.innerHTML = changeChar;
  }
};

// Q No 6 : Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

let userInput6 = document.getElementById("userInput6");
let enterBtn6 = document.getElementById("enterBtn6");
let answer6 = document.getElementById("answer6");

function addCharFirstAndLast(char) {
  let userInpt6 = char;
  let firstChar = userInpt6[0];
  let fullWord = firstChar + userInpt6 + firstChar;
  return fullWord;
}

enterBtn6.onclick = function () {
  let inptValue6 = userInput6.value;
  let addFrstAndLast = addCharFirstAndLast(inptValue6);
  answer6.style.display = "block";
  answer6.innerHTML = addFrstAndLast;
  if (inptValue6.length <= 1) {
    answer6.innerHTML = "The string length must be greater than 1";
  }
  // console.log(addFrstAndLast);
};

// Q No 7 :  Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

let input7 = document.getElementById("numberInput7");
let btn7 = document.getElementById("enterBtn7");
let answer7 = document.getElementById("answer7");

function modulus(nmbr) {
  let userNmbr = nmbr;
  if (userNmbr <= 0) {
    answer7.innerHTML = "Please write Positive Number";
  } else if (userNmbr % 3 == 0 && userNmbr % 7 == 0) {
    answer7.innerHTML = "This Number is Multiply by 3 and 7 Both";
    // console.log("This number multiply by 3 and 7 Both.");
  } else if (userNmbr % 3 == 0) {
    answer7.innerHTML = "This Number is Multiply by 3";
  } else if (userNmbr % 7 == 0) {
    answer7.innerHTML = "This Number is Multiply by 7";
  } else {
    answer7.innerHTML = "This is did'nt multiply by 3 and 7.";
    // console.log("This number did'nt multiply by 3");
  }
  return userNmbr;
}

btn7.onclick = function () {
  let userValue = input7.value;
  answer7.style.display = "block";
  modulus(userValue);
};

// Q No 8 : Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
let input8 = document.getElementById("userInput8");
let btn8 = document.getElementById("enterBtn8");
let answer8 = document.getElementById("answer8");

function lastThreeChars(str) {
  let userValue = str.value;
  let last3Chars = userValue.slice([-3]);
  let addChars = last3Chars + userValue + last3Chars;
  if(userValue.length <= 2){
      return ("The string length must be 3 or more.");
    } else {
        return addChars;
    }
    return addChars;
}

btn8.onclick = function () {
  let value8 = input8;
  let lastThreeFun = lastThreeChars(value8);
  answer8.style.display = "block";
  answer8.innerHTML = lastThreeFun;
};


// Q No 9 : Write a JavaScript program to find the largest of three given integers.

let Q9_input1 = document.getElementById("numberInput9_1");
let Q9_input2 = document.getElementById("numberInput9_2");
let Q9_input3 = document.getElementById("numberInput9_3");
let enterBtn9 = document.getElementById("enterBtn9");
let answer9 = document.getElementById("answer9");

function findLargestInt(val1,val2,val3){
    let firstValue = parseInt(val1.value);
    let secondValue = parseInt(val2.value);
    let thirdValue = parseInt(val3.value);

 
    if (firstValue == secondValue && secondValue == thirdValue){
        return ("All Values are Equal");
    }
    else if(firstValue > secondValue && firstValue > thirdValue){
        return firstValue;
    }
    else if(secondValue > firstValue && secondValue > thirdValue){
        return secondValue;
    }
    else if(thirdValue > firstValue && thirdValue > secondValue){
        return thirdValue;
    }else {
        return ("Please put some value!")
    }
}

enterBtn9.onclick = function(){
    let findFun = findLargestInt(Q9_input1,Q9_input2,Q9_input3);
    answer9.style.display = "block";
    answer9.innerHTML = findFun;
}

// Q No 10 : Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
/* 1. If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
2. If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
3. If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'. */

let Q10_input1 = document.getElementById("numberInput10_1");
let Q10_input2 = document.getElementById("numberInput10_2");
let enterBtn10 = document.getElementById("enterBtn10");
let answer10 = document.getElementById("answer10");

function findingGrades(val1,val2){
  let userNo = parseInt(val1.value);
  let yesNo = val2.value;
  // let yesNo = Boolean(val2.value);
  if(userNo >= 90 && yesNo === 'yes'){
    return ("You Grade is A+");
  }
  else if (userNo < 90 && yesNo == 'no'){
    return ("You Fail");
  }
  else if (userNo > 89 && yesNo == 'no'){
    return ("You Grade is A+.");
  }
  else {
    return ("You Fail.");
  }

}

enterBtn10.onclick = function(){
  let findingGrade = findingGrades(Q10_input1,Q10_input2);
  answer10.style.display = 'block';
  answer10.innerHTML = findingGrade;
}




// Q No 11 : Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80. 

let Q11_input1 = document.getElementById("numberInput11_1");
let Q11_input2 = document.getElementById("numberInput11_2");
let enterBtn11 = document.getElementById("enterBtn11");
let answer11 = document.getElementById("answer11");

function sumFun(val1,val2){
    let firstValue = parseInt(val1.value);
    let secondValue = parseInt(val2.value);

    let sum = firstValue + secondValue;
     if(sum >= 50 && sum <= 80){
        return (65);
    }else if (sum < 50 || sum > 80){
        return (80);
    }else {
        return ("please put some value!")
    }
}


enterBtn11.onclick = function(){
    let smFun = sumFun(Q11_input1,Q11_input2);
    answer11.style.display = "block";
    answer11.innerHTML = smFun;
}