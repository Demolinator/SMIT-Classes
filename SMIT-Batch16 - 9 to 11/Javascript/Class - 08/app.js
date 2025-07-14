// console.log("Chae le aao");
// let h1 = document.getElementById("text");

// let userInput = +prompt("Enter how many times to run");

// for (let i = 0; i < userInput; i++) {
//     console.log("Chae le aao");
// }

// take prompt from user loopStart and loopEnd and then print the desired loop

// let loopStart = +prompt("where to start the loop?");
// let loopEnd = +prompt("where to end the loop?");
// let ilapse = +prompt("How many numbers to skip?");

// //              1        1  <= 10      1 = 3 + 2
// for (let i = loopStart; i <= loopEnd; i = i + ilapse) {
//     console.log(i);
// }

// let fruits = ["Apple", "Banana", "Pineapple"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// 10, 0

//          10   10 >= 0  10--
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// [2, 3, 6, 8, 9, 2] condition count how many even numbers in array

// let numbers = [2, 3, 6, 8, 9, 2, 6, 34, 5, 34, 2, 56, 7,2];
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenCount++;
//     }
//     else {
//         oddCount++;
//     }
// }

// console.log("Even numbers in array: " + evenCount);
// console.log("Odd numbers in array: " + oddCount);

let cleanCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
let userInput = prompt("enter your city?");
let isClean = false;

for (let i = 0; i < cleanCities.length; i++) {
    console.log(i);
  if (userInput === cleanCities[i]) {
    isClean = true;
    break;
  }
}

if (isClean) {
    console.log("you live in a clean city");
  } else {
    console.log("you do not live in a clean city");
  }
