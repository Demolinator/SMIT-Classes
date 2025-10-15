// let cars = ["Toyota", "Honda", "Suzuki", function start () {console.log("Hello")}];

// let key = prompt("Enter the key you want to set?")
// let value = prompt("Enter the value you want to set?")

// let toyota = {
//     carName: "Toyota",
//     model: "Corolla",
//     price: 8000000,
//     competetor: {
//         carName: "Honda",
//         model: "Civic"
//     },
//     start: function () {
//         console.log("started...");
//     }
// }

// console.log(toyota.key = value, toyota.competetor, toyota);

// console.log(Number(Math.random().toFixed(0)));
// console.log(23.3.toFixed(0));

// for (;;) {
//     let userName = prompt("Enter your name?");
//     if(userName === "Talal") {
//         console.log(userName);
//         break;
//     }
// }

/*
    Enter a option 1 to 5
    1. Check Balance
    2. Cash Withdrwal
    3. Fast Cash
    4. Deposit
    5. Cancel

    userInput === 1 
    userInput === 2 
    userInput > userBalance Insuficent balance
    userBalance - userInput console.log("here is your amount")
    5 cancel break;
*/

let userBalance = 1000;

for (;;) {
    let userInput = +prompt(
      "Enter your option 1.Check balance 2.Cash withdrawl 3.Fast Cash 4.Deposit 5.Cancel"
    );
  if(userInput === 1  ){
    console.log("your balance " + userBalance);
    break;
  }
  else if(userInput === 2){
    let withdrawl = +prompt("enter your withdrawl amount")
    if(withdrawl > userBalance){
        console.log("insufent")
    }
    else if(userBalance <= 200){
        console.log("resstrecdet")
    }
    else{
        userBalance - withdrawl 
        console.log("your balance is" + userBalance)
    }
  }
  else if(userInput === 3){
     let fCash = +prompt("enter a option 1 to 3  1. 200  2. 500  3. 800  4. 1000");
     if(fCash === 1){
        userBalance 
     }
  }

}


