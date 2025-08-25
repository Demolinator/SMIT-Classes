// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()


let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let messageEl = document.getElementById("message");
let isFlipped = false;

function flipCard(userCardNumber) {
    if (!isFlipped) {
        let kingNumber = Math.ceil(Math.random() * 3);
        if (kingNumber === 1) {
            img1.src = "./images/king.png";
            img2.src = "./images/joker.png";
            img3.src = "./images/joker.png";
        }
        else if (kingNumber === 2) {
            img1.src = "./images/joker.png";
            img2.src = "./images/king.png";
            img3.src = "./images/joker.png";
        }
        else if (kingNumber === 3) {
            img1.src = "./images/joker.png";
            img2.src = "./images/joker.png";
            img3.src = "./images/king.png";
        }
        isFlipped = true;
        if (kingNumber === userCardNumber) {
            messageEl.innerHTML = "you win!"
            messageEl.style.color = "green"
        } else {
            messageEl.innerHTML = "you lose!"
            messageEl.style.color = "red"
        }
    }
}


function resetCard() {
    img1.src = "./images/card-back.png";
    img2.src = "./images/card-back.png";
    img3.src = "./images/card-back.png";
    isFlipped = false;
}