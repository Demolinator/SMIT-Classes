// greet();

// console.log("1");

// function greet () {
//     console.log("Welcome!");
// }

// console.log("1");

// greet();

// welcome 1 1 welcome





// greet()

// console.log("1")

// function greet () {
//     setTimeout(function () {
//         console.log("welcome user!");
//     }, 3000)
// }

// function greet () {
//     let myTimeout = setTimeout(function () {
//         console.log("welcome user!");
//     }, 3000)
//     let myTimeout1 = setTimeout(function () {
//         console.log("welcome user!");
//     }, 3000)
//     console.log(myTimeout, myTimeout1)
// }


// greet()

// console.log("2")

// greet() 1 greet() 2 welcome welcome





// function signUp (email, password, callBack, secondCallBack) { // 2
//     setTimeout(function () {
//         if (email === "ta234567801@gmail.com" && password === "12345678") {
//             callBack(secondCallBack); // 3
//         }
//     }, 3000)
// }


// signUp("ta234567801@gmail.com", "12345678", 
//     function redirectToTimeline (cb) { // 4
//         console.log(cb()); // 5
//     }, function textFactory () { // 1
//         return "redirected to timeline";
//     });




// 1 2 signUp 3



// random number 100
// if even console.log(even);
// else odd console.log("this is an odd number") 



// let firstAsync = new Promise(function (callBack, reject) {
//     function myFunc () {
//         let random = Math.ceil(Math.random() * 100);

//         if (random % 2 === 0) {
//             callBack(random);
//         }
//         else {
//             reject("this is an odd number");
//         }
//     }

//     myFunc()
// });


// firstAsync
//     .then(function (success) {
//         console.log(success);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });
