// function salary Tax 50000 <= 0%, 100000 <= 0.5%, 150000 <= 1%

// function taxCalculator () {
//     let salary = prompt("Enter your salary?");
//     let tax = 0;
//     if (isNaN(salary)) {
//         console.log("Please enter a valid number.");
//     }

//     if (salary <= 50000) {
//         tax = salary;
//     }
//     else if (salary <= 100000) {
//         tax = salary * 0.05;
//     }
//     else {
//         tax = salary * 0.01;
//     }

//     console.log("Tax deducted " + tax);
//     console.log(salary);
// }




// let initAmountEl = document.getElementById("init-amount");
// let bidMessageEl = document.getElementById("show-message");
// initAmountEl.innerHTML = 1000;

// let userBidAmount;
// let userBidNumber;

// function playBiddingGame () {
//     userBidAmount = +prompt("Enter your Bid amount?");
//     userBidNumber = +prompt("Enter your a number 1 to 3");
//     let gnNumber = generatedNumber();
//     let matchedBid = isBidMatched(userBidNumber, gnNumber);
//     showBidMessage(userBidAmount, matchedBid);
// }

// function generatedNumber () {
//     let randomNumber = Math.ceil(Math.random() * 3);
//     return randomNumber;
// }

// function isBidMatched (userBidNumber, gnNumber) {
//     let matched = false;
//     if (userBidNumber === gnNumber) {
//         matched = true;
//     }
//     return matched;
// }

// function showBidMessage (userBidAmount, matchedBid) {
//     if (matchedBid) {
//         initAmountEl.innerHTML = Number(initAmountEl.innerHTML) + userBidAmount;
//         bidMessageEl.innerHTML = "Congrats! you won the bid " + userBidAmount + " has been added to your account.";
//     }
//     else {
//         initAmountEl.innerHTML = initAmountEl.innerHTML - userBidAmount;
//         bidMessageEl.innerHTML = "Sorry! you lost the bid " + userBidAmount + " has been deducted to your account.";
//     }
// }



let userEmailEl = document.getElementById("email");
let userPasswordEl = document.getElementById("password");
let users = [];

function register () {
    let userInputMail = userEmailEl.value;
    let userInputPass = userPasswordEl.value;
    let user = {
        email: userInputMail,
        password: userInputPass
    }
    users.push(user);
    console.log(userInputMail, userInputPass);
}


function login () {
    console.log(users);
}
