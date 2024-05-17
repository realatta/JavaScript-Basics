// Q No 1 : Display Numbers From 1 to 3

let num = 1;

// while(num <= 3){
//     console.log(num);
//     num++;
// }

// Q No 2 : Display Numbers from 3 to 1 ( do while)

// let num2 = 3;

// do {
//     console.log(num2);
//     num2--;
// } while (num2 >= 1);




// Q No 3 : Write a javascript function to print Even numbers in given array

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,220,240,200,300,333];


// function evenFun(){
//      let evenNums = 0;
//      while (arr[evenNums]) {
//          if(arr[evenNums] % 2 === 0){
//              console.log(arr[evenNums]);
//          }
//          evenNums++;
//      }
//  }
// evenFun();


function checkEven(){
    let i = 0;
    while (i < arr.length) {
        let num = arr[i];
        if(num % 2 == 0){
            console.log("Even Num is :" , num);
        }
        i++;
    }
}
checkEven();


// Q No 4 : Write a javascript function to find the power of a number using while loop

// let powOfNum = 2;
function findPowNums(num,pow){
      let a = 0;
        let power = "";
      while(a < pow){
        let b = num * num;
        // console.log(b +" a" + a);
        power += b;
        console.log(power);
        a++;
    }

    // let powOfNum = Math.pow(num,pow);
    // console.log(powOfNum);
}
// findPowNums(4,2);



// function findPowByForLoop(num,pow){
//     let ans = 1;
//     for(let i = 0; i < pow; i++){
//         // let d = num * num;
//         // return d;
//         ans *= num;
//     }
//     console.log(ans);
// }

// findPowByForLoop(4,4);


// Q No 5 : Write a javascript function to find the no of digits in a number using while loop

// function numOfDigits(num){
//     let a = 0;

//     while (a < 1) {
//         let digits = num.toString().length;
//         console.log(digits);
//         a++;
//     }
// }

// numOfDigits(12345678912345);


function digitsOfNumByFor(num){
    // let numLength = num.length;
    let numLength = num.toString().length;
    let digits = 0; 
    for (let i = 0; i < numLength; i++) {
        // console.log(digits);
        digits += i;
    }
    console.log(digits);
}


// digitsOfNumByFor(12345);