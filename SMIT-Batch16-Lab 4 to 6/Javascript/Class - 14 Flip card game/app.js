// Flip Card Game
// three fliped cards
// click on the king
// generate random number 1 to 3 
// user number matches the generated number and the king number 
// you won, you lose

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let message = document.getElementById("message")
let isFliped = false;

function flipCard(userNumber) {
    if (!isFliped) {
        let kingNumber = Math.ceil(Math.random() * 3);
        if (kingNumber === 1) {
            img1.src = "./images/king-card.png";
            img2.src = "./images/joker-card.png";
            img3.src = "./images/joker-card.png";
        } else if (kingNumber === 2) {
            img1.src = "./images/joker-card.png";
            img2.src = "./images/king-card.png";
            img3.src = "./images/joker-card.png";
        } else if (kingNumber === 3) {
            img1.src = "./images/joker-card.png";
            img2.src = "./images/joker-card.png";
            img3.src = "./images/king-card.png";
        }
        isFliped = true;
        if (userNumber === kingNumber) {
            message.innerHTML = "You Won!"
            message.style.color = "green"
            message.style.fontSize = "64px"
        } else {
            message.innerHTML = "You lose!"
            message.style.color = "red"
            message.style.fontSize = "64px"
        }
    }
}

function reset() {
    img1.src = "./images/card-backside.png";
    img2.src = "./images/card-backside.png";
    img3.src = "./images/card-backside.png";
    isFliped = false;
    message.innerHTML = ""
}