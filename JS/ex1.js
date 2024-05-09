// Q1
console.log("This is ex1.js");

// Q2
console.log("Question 2 on Screen under the Blue Border Box");

var firstName = "Atta";
var lastName = "BuGti";
var fullName = firstName + " " + lastName;
var yearOfBirth = 2002;
var age = 2024 - yearOfBirth;

document.getElementById("blue-box").innerHTML =
  "My Name is " +
  fullName +
  " and I'm " +
  age +
  " years old and I'm learning JavaScript.";

// Q3
console.log("Question 3 Below: 👇");
var num1 = 10;
var num2 = 5;
var average = (num1 + num2) / 2;
console.log(average.toFixed(2));

// Q4
console.log("Question 4 Below: 👇");
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

// console.log(phone3.length)

if (phone1.length == 9) {
  console.log("phone1 is a valid phone number");
}
if (phone2.length == 9) {
  console.log("phone2 is a valid phone number");
} else {
  console.log(
    "phone2 is not a valid phone number because it has more than 9 digits"
  );
}
if (phone3.toString().length == 9) {
  console.log("phone3 is a valid phone number");
}

// Q5
console.log("Question 5 Below: 👇");
var power = Math.pow(32, 6);
console.log(power);

// Q6
console.log("Question 6 Below: 👇");
var NAME;
console.log("NAME is valid because it starts with a letter");
var $num1;
console.log("$num1 is valid because it starts with dollar sign");
// var typeof;
console.log(
  "typeof is a reserved keyword in JavaScript used to get the data type of a value. Variable names cannot be the same as reserved keywords because they have special meanings in the language."
);
// var first-name;
console.log(
  "Hyphens (-) are not allowed in variable names. You can use underscores (_) or camelCase (e.g., firstName) instead."
);
var attempt_2;
console.log("attempt_2 is valid because it starts with a letter");
// var 2ndAttempt;
console.log(
  "Variable names cannot start with a number. They must begin with a letter (uppercase or lowercase), underscore (_), or dollar sign ($)"
);
// var full name;
console.log(
  "While not technically an error, it's generally recommended to avoid spaces in variable names. Use camelCase (fullName) or underscores (full_name) for better readability"
);

// Q7
console.log("Question 7 Below: 👇");
var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log((quantity += quantity));
console.log((7 + 5) / number + 2);
console.log(pressure);
console.log(temperature);
console.log(typeof pressure);
console.log(typeof temperature);

// Q8
console.log("Question 8 Below: 👇");

var udemyUrl = "www.udemy.com";
console.log(udemyUrl.replace("", "https://"));

var googleUrl = "https://www.google.com";
console.log(googleUrl.replace("https://", ""));
