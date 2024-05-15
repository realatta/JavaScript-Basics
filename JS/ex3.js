// Q No 1 :  Reuse the function to convert Celsius to Fahrenheit made on exercise #2. But this time the celsius temperature should be informed in the input field below and the calculation done after pressing the button.

let temInput = document.getElementById("tempInput");
let btn1 = document.getElementById("checkBtn");
let answer1 = document.getElementById("answer");

function calToFah(cel) {
  let fah = (9 * cel) / 5 + 32;
  // console.log(fah);
  return fah.toFixed(1);
}

btn1.onclick = function () {
  let userValue = temInput.value;
  let celFun = calToFah(userValue);
  answer1.style.visibility = "visible";
  answer1.innerHTML = celFun + "Hello";

  if (userValue == "") {
    answer1.innerHTML = "!";
  }
};

// Q No 2 : Print in the list below the years when the World Cup of Soccer will happen from 2022 to 2050. Remember that the World Cup happens every 4 years.



let ulList = document.getElementById("ulList");
let listItems = "";

for(let i = 2022; i <= 2050; i+= 4){
  listItems = listItems + "<li>"+[i]+"</li>";
}
ulList.innerHTML = listItems;




// Q No 3 :  Use the input fields below to inform two grades and the number of absences of a student. Follow the rules below to inform the result:
/* Minimum 70% presence is required to be approved (total number of classes is 20)
Minimum average of 6.5 is required to be approved
If the student fails, we need to inform what was the reason (absences, insufficient grade or both.) */

let gradeOne = document.getElementById("numberInput1");
let gradeTwo = document.getElementById("numberInput2");
let absences = document.getElementById("numberInput3");
let btn3 = document.getElementById("enterBtn3");
let answer3 = document.getElementById("answer3");

// let grades = gradeOne + gradeTwo;

function studentResult(avg, per) {
  if (gradeOne.value === "" || gradeTwo.value === "" || absences === "") {
    return "Please fill all the fields first";
  }
  else if(gradeOne.value > 20 || gradeTwo.value > 20 || absences > 20){
    return ("Total marks and classes are 20");
  }
   else {
    if (per < 70 && avg < 6.5) {
      return "You failed because your attendance is less than 70% and your average grades less than 6.5";
    } else if (per < 70 && avg > 6.5) {
      return "You failed because your attendance is less than 70%";
    } else if (per > 70 && avg < 6.5) {
      return "You failed because your average grades are less than 6.5";
    } else {
      return ("You passed because your attendance and grades both are good and attendance is " +
        per + " % and your average is " + avg );
    }
  }
}

btn3.onclick = function () {
  let average = (parseInt(gradeOne.value) + parseInt(gradeTwo.value)) / 2;
  console.log("average " + average);

  let totalClasses = 20;

  let attendedClass = totalClasses - absences.value;

  console.log(attendedClass);
  let perOfAttendance = (attendedClass / totalClasses) * 100;
  console.log( "percentage " , perOfAttendance);

  let studentResultFun = studentResult(average, perOfAttendance);
  answer3.style.display = "block";
  answer3.innerHTML = studentResultFun;
};

// Q No 4 :  See below the list of sales of an online course.

var sales = [
  {
    student: "Jason Gomes",
    date: "10/06/2018",
    amount: 34.99,
    refundRequested: null,
  },

  {
    student: "Carlos Blue",
    date: "10/06/2018",
    amount: 29.99,
    refundRequested: null,
  },

  {
    student: "Martin Heyes",
    date: "11/06/2018",
    amount: 39.99,
    refundRequested: "13/06/2018",
  },

  {
    student: "Isabella Hopkins",
    date: "11/06/2018",
    amount: 29.99,
    refundRequested: null,
  },

  {
    student: "Andrew Walt",
    date: "12/06/2018",
    amount: 34.99,
    refundRequested: null,
  },
];

let tableBody = document.getElementById("tBody");
let tbody = "";
let total = 0;

for(let i = 0; i < sales.length; i++){
    if(sales[i].refundRequested == null){
      tbody = tbody + "<tr>"+
      "<td>"+sales[i].student+"</td>"+
      "<td>"+sales[i].date+"</td>"+
      "<td>"+sales[i].amount+"</td>"+
      "</tr>";

      total = total + sales[i].amount;
    }
    
}
tbody = tbody + "<tr>"+
        "<td colspan='2'>Total Sales</td>"+
        "<td>"+total.toFixed(2)+"</td>"+
      "</tr>";

tableBody.innerHTML = tbody;


// Q No 5 : Suppose our page receives two pieces of information about a person, her age and membership status (member / not a member). Then we need to show the price of a product based on the following rules:
/*
Members: Free
Non-members under 18 years old: $ 6.00
Non-members above 18 years old: $ 12.00
All people above 65 years old: Free
We can start testing if age >= 65 or if the person is a member, in this case the product is free. If not, we then need to start another conditional because we still have two price possibilities. */

// var isMember = false;
// var age = 23;

// if (isMember == true || age >= 65) {
//   console.log("Free");
// } else if (age < 18) {
//   console.log("$ 6.00");
// } else {
//   console.log("$ 12.00");
// }
