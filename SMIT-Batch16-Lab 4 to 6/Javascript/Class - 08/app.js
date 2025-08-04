// function salray tax 50000 <= 0, 100000 <= 0.01, else 0.05


// function taxCounter () {
//     let slaray = prompt("Enter your salary?");
//     let tax = 0;
//     // console.log(slaray * 0.01);
//     if (slaray <= 50000) {
//         tax = slaray;
//     }
//     else if (slaray <= 100000) {
//         tax = slaray * 0.01;
//     }
//     else {
//         tax = slaray * 0.05
//     }

//     console.log(tax);
// }





// let initAmountEl = document.getElementById("init-amount"); // h1
// let bidMessageEl = document.getElementById("bid-message"); // p
// initAmountEl.innerHTML = 1000;

// let userBidAmount;
// let userBidNumber;
// function playBiddingGame () {
//     userBidAmount = +prompt("Enter your bid amount?");
//     userBidNumber = +prompt("Enter your bid number from 1 to 3");
//     let gnBid = generatedBid();
//     let bidMatched = isBidMatched(gnBid, userBidNumber);
//     showBidMessage(bidMatched, userBidAmount)
// }

// function generatedBid () {
//     let randomNumber = Math.ceil(Math.random() * 3);
//     return randomNumber;
// }

// function isBidMatched (gnBid, userBidNumber) {
//     let matched = false;
//     if (gnBid === userBidNumber) {
//         matched = true;
//     }
//     return matched;
// }

// function showBidMessage (bidMatched, userBidAmount) {
//     if (bidMatched) {
//         initAmountEl.innerHTML = Number(initAmountEl.innerHTML) + userBidAmount;
//         bidMessageEl.innerHTML = "Congrats! you won the bid " + userBidAmount + " has been added to your account."
//     }
//     else {
//         initAmountEl.innerHTML = initAmountEl.innerHTML - userBidAmount;
//         bidMessageEl.innerHTML = "Sorry! you loss the bid " + userBidAmount + " has been deducted from your account."
//     }
// }

















let userEmailInput = document.getElementById("email");
let userPasswordInput = document.getElementById("password");
let users = [];

function register() {
    let userEmail = userEmailInput.value
    let userPassword = userPasswordInput.value
    let user = {
        email: userEmail,
        password: userPassword
    }
    users.push(user);
}

function login () {
    console.log(users);
}


// create the validation password should be greater than 6