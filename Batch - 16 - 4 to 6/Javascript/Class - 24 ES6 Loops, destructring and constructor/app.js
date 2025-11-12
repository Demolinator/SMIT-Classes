// let password;
// while (password !== "1234") {
//     password = prompt("Enter your password?");
// }
// console.log("Access Granted")


// console.log("1234" !== "1234");


// let network;
// let connected;
// do {
//     connected = Math.ceil(Math.random() * 2);
//     network = Math.ceil(Math.random() * 2);
//     console.log("trying...", connected, network);
// }
// while (network !== connected);

// console.log("connected!", connected, network);




// Destructuring


// let arr = ["Apple", "Banana", "Kiwi"];

// let [, , fruit3] = arr;

// console.log(fruit2, fruit3);



// let obj = {
//     carName: "BMW",
//     series: "m5",
//     door: {
//         canOpenAbove: true
//     }
// }

// let { carName, series, door:{ canOpenAbove } } = obj;

// console.log(carName, series, canOpenAbove);

// let arr = ["Apple", "Banana", "Kiwi", {isOk: true}];

// let [, , , {isOk}] = arr;

// console.log(isOk = false, arr);




// Class constructor

// class Students {
//     constructor (fullName, rollNo) {
//         this.fullName = fullName;
//         this.rollNo = rollNo;
//     }
//     attendance = false;

//     canWalk(feedBack) {
//         return feedBack;
//     }
// }

// let student1 = new Students("Moiz", "123465");
// let student2 = new Students("Nouman", "123546");

// console.log(student1.canWalk, student2.canWalk("yes with difficulty!"));




// let arr = ["Apple", "Banana", "Kiwi"];

// for (let fruits in arr) {
//     console.log(arr[fruits]);
// }

// for (let fruits of arr) {
//     console.log(fruits);
// }

// for (let fruits in arr) {
//     console.log(fruits)
// }





// import { add, subtract } from "./myLibrary/mathFunction.js"
// import { date } from "./myLibrary/dateFunctions.js"

// console.log(add(2, 5), subtract(2, 5));

// console.log(date("jan 25 2025"));