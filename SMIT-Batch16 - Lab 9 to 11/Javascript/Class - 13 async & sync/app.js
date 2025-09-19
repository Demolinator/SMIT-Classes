// greet();

// console.log("2");

// function greet () {
//     console.log("1")
// }

// greet();

// console.log("3");

// 1 2 1 3







// console.log("2");


// setTimeout(function () {
//     console.log("hello");
// }, 1000);



// console.log("3");

// 2 3 1





//              email, password, function, function
// function signUp(email, pass, callBack, secondCallBack) {
//     setTimeout(function () {
//         if (email === "ta234567801@gmail.com" && pass === "12345678") {
//             callBack(secondCallBack); 
//         }
//     }, 1000)
// }


// signUp("ta234567801@gmail.com", "12345678", 
//     function redirectToTimeLine(cb) {
//         console.log(cb());
//     }, function secondFunction () {
//         return "welcome Talal!"
// });


// 3 2 signup 1






// random number
// if even number (2);
// odd it is an odd number

// promise
// let firstAsync = new Promise(function (resolve, reject) {
//     function number () {
//         let random = Math.ceil(Math.random() * 100);

//         if (random % 2 === 0) {
//             resolve(random);
//         } else {
//             reject("it is an odd number");
//         }

//     }
//     number();
// })


// firstAsync
//     .then(function (success) {
//         console.log(success);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });


// 3 2 number 1

let email = document.getElementById("email")
let password = document.getElementById("password")

function register () {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
}