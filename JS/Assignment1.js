// Q No 1: Write a function that returns the square of a number

function squareNum(x) {
    console.log(x * x);
}

squareNum(5);

//  Q No 2 : Write a function to convert Celsius to Fahrenheit

 function celsiusToFahrenheit(celsius) {
    var fahrenheit = (9 * celsius / 5) + 32;
    console.log(fahrenheit);
}

celsiusToFahrenheit(1);

//  Q No : 3 Write a function to find the area and perimeter of a Circle

function areaAndParameterOfCircle(radius){
    var PI = Math.PI;
    var area = PI * radius ** 2;
    var parameter = 2 * PI * radius;

    console.log(`The Area Of a Circle is ${area.toFixed(2)} and parameter of circle ${parameter.toFixed(2)}`)
}

areaAndParameterOfCircle(4);

//  Q No 4 : Write a JavaScript function to get the last element of an array. 

function getLastElementOfArray(lastElement) {
    var element = lastElement.pop();
    console.log(element);
}

getLastElementOfArray([1,3,4,5,654]);

// Q No 5 : Write a JavaScript program to compute the sum and product of an array of integers.

function sumAndProductOfArray(arr){
   var sum = 0;
   var product = 1;
   for (let i = 0; i < arr.length; i++) {
       var total = sum += arr[i];
       var total2 = product *= arr[i];
    }
    console.log(`The sum of array elements : ${total} and product of Array Elements: ${total2}.`);
}

sumAndProductOfArray([2,3,4]);

// Q No 6 : We have the following arrays :
 /* 
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red." */

var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th","st","nd","rd"];




// function displayColors(arr1,arr2) {
//     if(arr1[0] === "Blue"){

//         // let first =  arr1[0] += arr2[1];
//        console.log(`1${arr2[1]} choice is ${arr1[0]}`);
//     }
// }
// displayColors(color,o)

// Q No 7 : There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];

function sumOfArrayIndex(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + i ;
    }
    console.log(sum)
}

// sumOfArrayIndex(array1);
// sumOfArrayIndex(array2);