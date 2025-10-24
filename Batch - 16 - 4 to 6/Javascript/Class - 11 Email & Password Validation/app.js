// // let password checker Validation
// // password >= 6, Uppercase, number
// // this password is strong
// // this password is weak

// let password = "Ta@123456";
// let UpperPass = false;
// let number = false;
// let special = false;

// for (let i = 0; i < password.length; i++) {
//     let char = password[i];
//     if (char >= "A" && char <= "Z") {
//         UpperPass = true;
//     }

//     if (char >= "0" && char <= "9") {
//         number = true;
//     }

//     if (char === "@" || char === "*") {
//         special = true;
//     }
// }

// //       "Talal1234" >= 6
// if (password.length >= 6 && UpperPass && number && special) {
//     console.log("This password is strong!");
// }
// else {
//     console.log("This password is weak!");
// }










// let numberOfBottles = 99;

// for (let i = 99; i >= 0; i--) {
//     console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
// }








// let car = {
//     name: "Toyota",
//     drive: function () {

//     }
// }

// car.name
// car.drive()






// console.log((Math.random() * 10) + 1);// 0.11111111111111111111, 0.9999999999999999


// let randomNumber = Math.round(Math.random() * 10);
// console.log(randomNumber);
// console.log(Math.round(59.5)); 0.1 = 0
// console.log(Math.round(59.5)); 0.5 = 1
// console.log(Math.round(59.5)); 0.8 = 1





// let randomNumber = Math.floor(Math.random() * 10);// 0.1 0.9 = 0
// let randomNumber1 = Math.ceil(Math.random() * 10);// 0.1 0.9 = 1

// console.log(randomNumber1);




// console.log()
// prompt()

// push()
// pop()
// Math.random()
// Math.round()
// Math.floor()
// Math.ceil()




// dice 6
// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);





// coin toss
// Math.random()


// let toss = Math.random();

// if (toss < 0.5) {
//     console.log("Heads");
// }
// else {
//     console.log("Tails");
// }






// let a = 5;
// let b = 9;
// let c = 8;

// console.log(Math.max(a, b, c));
// console.log(Math.min(a, b, c));

// if (a > b && a > c) {
//     console.log(a);
// }
// else if (b > a && b > c) {
//     console.log(b);
// }
// else {
//     console.log(c);
// }





// console.log(Math.abs(5)); //  5
// console.log(Math.abs(-2.45)); //  5




// let number = "24";
// console.log((Number(number) + 4).toString());





// otp generator
// 4-digits
// Math.random()



// let otp = Math.floor((Math.random() * 9000) + 1000);

// console.log(otp);



// lottery ticket checker
// 4560
// Congratulations! you won the lottery
// Sorry! better luck next time
