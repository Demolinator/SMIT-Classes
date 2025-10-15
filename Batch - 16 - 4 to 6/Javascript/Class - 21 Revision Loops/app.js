// loops

// let userInput = +prompt("Enter your number?");


// for (let i = userInput; i >= 0; i--) {
//     console.log(i);
// }


// let userInput = prompt("Enter any word?");
// let reverse = "";
// // reverse

// for (let i = userInput.length - 1; i >= 0; i--) {
//     reverse += userInput[i];
//     // reverse = ""      + "e"
// }
// console.log(reverse)




// bubble sorting
let arr = [2, 4, 8, 3, 5];
//        [2, 4, 3, 8, 5]; 0 2
//        [2, 4, 3, 5, 8]; 0 3
//        [2, 3, 4, 5, 8]; 1 1
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            console.log(arr,i,j);
        }
    }
}