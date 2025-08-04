// let userEmailEl = document.getElementById("email");
// let userPasswordEl = document.getElementById("password");
// let messageEl = document.getElementById("message");
// let users = [];

// function register () {
//     let userInputMail = userEmailEl.value;
//     let userInputPass = userPasswordEl.value;
//     let user = {
//         email: userInputMail,
//         password: userInputPass
//     }
//     users.push(user);
//     console.log(userInputMail, userInputPass);
// }

// function login () {
//     let userInputMail = userEmailEl.value;
//     let userInputPass = userPasswordEl.value;
//     let message = "";
//     for (let i = 0; i < users.length; i++) {
//         let userObj = users[i];
//         if (userInputMail === userObj.email && userInputPass === userObj.password) {
//             message = "User authenticated!";
//             break;
//         }
//         else if (userInputMail === userObj.email && userInputPass !== userObj.password) {
//             message = "password incorrect!";
//             break;
//         }
//         else if (userInputMail !== userObj.email || userInputPass !== userObj.password) {
//             message = "user does not exist.";
//         }
//     }
//     messageEl.innerHTML = message;
// }












// let resultDiceEl = document.getElementById("result-dice");

// let dice1 =
//   "<div class='container'> <div></div> <div></div> <div></div> <div></div> <div class='special'></div> <div></div> <div></div> <div></div> <div></div> </div>";

// let dice2 =
//   '<div class="container"> <div class="special"></div> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div class="special"></div></div>';

// let dice3 =
//   ' <div class="container"><div></div><div></div><div class="special"></div><div></div><div class="special"></div><div></div><div class="special"></div><div></div><div></div</div>';

// let dice4 =
//   '<div class="container"><div class="special"></div><div></div><div class="special"></div><div></div><div></div><div></div><div class="special"></div><div></div><div class="special"></div</div>';

// let dice5 =
//   '<div class="container"><div class="special"></div><div></div><div class="special"></div><div></div><div class="special"></div><div></div><div class="special"></div><div></div><div class="special"></div</div>';

// let dice6 =
//   '<div class="container"><div class="special"></div><div></div><div class="special"></div><div class="special"></div><div></div><div class="special"></div><div class="special"></div><div></div><div class="special"></div</div>';


// function play () {
//     let diceRoll = Math.ceil(Math.random() * 6);
    
//     if (diceRoll === 1) {
//       resultDiceEl.innerHTML = dice1;
//     } else if (diceRoll === 2) {
//       resultDiceEl.innerHTML = dice2;
//     } else if (diceRoll === 3) {
//       resultDiceEl.innerHTML = dice3;
//     } else if (diceRoll === 4) {
//       resultDiceEl.innerHTML = dice4;
//     } else if (diceRoll === 5) {
//       resultDiceEl.innerHTML = dice5;
//     } else if (diceRoll === 6) {
//       resultDiceEl.innerHTML = dice6;
//     }
// }









// Scope
// Hoisting
// Temporal Dead Zone

// let userName = "Talal Ahmed";

// function printName () {
//     let userName = "Abrar Ahmed";
//     console.log(userName);
// }

// console.log(userName);
// printName();


// {
//     var a = "a";
//     let b = "b";
//     const c = "c";
// }

// let userName = "Talal";


// var a = "a";
// var a = "b";

// let a = "a";
// a = "b";

// const a = "a";

// console.log(a);