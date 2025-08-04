// let userEmailInput = document.getElementById("email");
// let userPasswordInput = document.getElementById("password");
// let messageEl = document.getElementById("message");
// let users = [];

// function register() {
//     let userEmail = userEmailInput.value
//     let userPassword = userPasswordInput.value
//     let user = {
//         email: userEmail,
//         password: userPassword
//     }
//     users.push(user);
// }

// function login () {
//     let userEmail = userEmailInput.value;
//     let userPassword = userPasswordInput.value;
//     let message = "";
//     for (let i = 0; i < users.length; i++) {
//         let userObj = users[i];
//         if (userEmail === userObj.email && userPassword === userObj.password) {
//             message = "user authenticated";
//             break;
//         }
//         else if (userEmail === userObj.email && userPassword !== userObj.password) {
//             message = "password incorrect!";
//             break;
//         }
//         else {
//             message = "user does not exist";
//         }
//     }

//     messageEl.innerHTML = message;
//     console.log(users);
// }




// let dice1 = '<div class="container"> <div></div> <div></div> <div></div> <div></div> <div class="special"></div> <div></div> <div></div> <div></div> <div></div </div>'

// let dice2 = '<div class="container"> <div class="special"></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div class="special"></div </div>'

// let dice3 = '<div class="container"> <div class="special"></div> <div></div> <div></div> <div></div> <div class="special"></div> <div></div> <div></div> <div></div> <div class="special"></div </div>'

// let dice4 = '<div class="container"> <div class="special"></div> <div></div> <div class="special"></div> <div></div> <div></div> <div></div> <div class="special"></div> <div></div> <div class="special"></div </div>'

// let dice5 = '<div class="container"> <div class="special"></div> <div></div> <div class="special"></div> <div></div> <div class="special"></div> <div></div> <div class="special"></div> <div></div> <div class="special"></div </div>'

// let dice6 = '<div class="container"> <div class="special"></div> <div></div> <div class="special"></div> <div class="special"></div> <div></div> <div class="special"></div> <div class="special"></div> <div></div> <div class="special"></div </div>'


// let resultDice = document.getElementById("result-dice");


// function play () {
//     let diceRoll = Math.ceil(Math.random() * 6);
//     console.log(diceRoll);
    
//     if (diceRoll === 1) {
//         resultDice.innerHTML = dice1;
//     }
//     else if (diceRoll === 2) {
//         resultDice.innerHTML = dice2
//     }
//     else if (diceRoll === 3) {
//         resultDice.innerHTML = dice3
//     }
//     else if (diceRoll === 4) {
//         resultDice.innerHTML = dice4
//     }
//     else if (diceRoll === 5) {
//         resultDice.innerHTML = dice5
//     }
//     else if (diceRoll === 6) {
//         resultDice.innerHTML = dice6
//     }
// }





// var userName;

// scope
// Hoisting
// TDZ (Temporal Dead Zone)

// let userName = "Talal";

// function printName () {
//     let userName = "Abrar";
//     console.log(userName);
// }

// console.log(userName);
// printName();


// console.log(userName);
// let userName = "Talal";

// {
//     var a = "a";
//     let b = "b";
//     const c = "c";
// }
// var a = "b";
// var a = "b";
// var a = "b";

// function printName() {
// }

// console.log(a);

// var a = "a";
// var a = "a";

// let b = "a";
// let b = "a";

// const c = "b";
// const c = "b";
// var a = "a";
// a = "a";

// let b = "a";
// b = "a";

// const c = "b";
// c = "b";


// console.log(typeof {});
