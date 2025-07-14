// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");
// console.log("bring me a print");

// for (let i = 0; i <= 5; i++) {
//     console.log("Chae le ao!", i);
// }

// take input from user take kitni chae chye?

// let userInput = prompt("Kitni chae chye?");

// for (let i = 0; i <= userInput; i++) {
//     console.log("chae le aao!", i);
// }

// user loopStart and loopEnd biryani le ao!

// let loopStart = +prompt("Enter where to start the loop?")
// let loopEnd = +prompt("Enter where to end the loop?")

// for (let i = loopStart; i < loopEnd; i++) {
//     console.log(i);
// }

// let loopStart = +prompt("Enter where to start the loop?")
// let loopEnd = +prompt("Enter where to end the loop?")
// let skip = +prompt("how many numbers to skip?");

// //            2         2  <   5        i = 2 + 2
// for (let i = loopStart; i <= loopEnd; i = i + skip) {
//     console.log(i);
// }

// let fruits = ["Apple", "Banana", "Strawberry"];
// //          0 ; 0 <= 2            ; 0 + 1
// for (let i = 0; i <= fruits.length - 1; i++) {
//     console.log(fruits[i]);
// }

// for 1, 2, 3, 4; 10, 0;

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// [1,2,3,4,5,6,7,4,77,56]
// count = 5

// let numbers = [1,2,3,4,5,6,7,4,77,56,77,77];
// let EvenCount = 0;
// let oddCount = 0;
// //           0  0 < 12              i + 1
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         EvenCount++;
//     }
//     else {
//         oddCount++;
//     }
// }

// console.log("Even Numbers in the array are: " + EvenCount);
// console.log("Odd Numbers in the array are: " + oddCount);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     total = total + numbers[i];
// }

// console.log(total);

let cleanCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
let usercity = prompt("Enter your city?");
let isClean = false;

for (let i = 0; i < cleanCities.length; i++) {
    console.log(i);
    if (usercity === cleanCities[i]) {
        isClean = true;
        break;
    }
}

if (isClean) {
  console.log("you live in a clean city");
} else {
  console.log("you do not live in a clean city");
}
