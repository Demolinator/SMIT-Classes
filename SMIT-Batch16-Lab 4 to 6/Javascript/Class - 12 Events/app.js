// Events
// onClick
// onMouseOver
// onMouseout
// onFocus
// onBlur
// onLoad


// function welcome () {
//     console.log("Welcome");
// }
function greet () {
    setTimeout(function () {
        alert("Welcome")
    }, 3000);
}

// // console.log("Welcome")

// let afridiPic = document.getElementById("afridi-image");

// function swapeImage () {
//     afridiPic.src = "./images/afridi1.jpg";
// }

// function revertImage () {
//     afridiPic.src = "./images/afridi.jfif";
// }



// function changeStyle (El) {
//     El.className = "revert";
// }


// let obj = {
//     name: "Talal",
//     userName: this.name
// }



// function changeStyle (El) {
//     El.style.backgroundColor = "black"; // background-color
//     El.style.color = "#08CB00"; // background-color
// }   


let capitalEl = document.getElementById("Capital-city"); 
let provinceEl = document.getElementById("province"); 

function city () {
    capitalEl.style.backgroundColor = "black";
    capitalEl.style.color = "lightgreen";
    capitalEl.style.fontSize = "20px";
    capitalEl.style.fontWeight = "800";
}

function capitalCityLeave () {
    capitalEl.style.backgroundColor = "white";
    capitalEl.style.color = "black";
    capitalEl.style.fontSize = "12px";
    capitalEl.style.fontWeight = "400";
    

    let capitalCityEl = capitalEl.value;

    if (capitalCityEl.toLowerCase() === "lahore") {
        provinceEl.value = "Punjab"
    }
    else if (capitalCityEl.toLowerCase() === "karachi") {
        provinceEl.value = "Sindh"
    }
    else if (capitalCityEl.toLowerCase() === "quetta") {
        provinceEl.value = "Balochistan"
    }
    else if (capitalCityEl.toLowerCase() === "peshawar") {
        provinceEl.value = "KP"
    }

    let firstLetter = capitalEl.value[0]; // K
    firstLetter = firstLetter.toUpperCase();
    let restChar = capitalEl.value.slice(1); // arachi
    restChar = restChar.toLowerCase();

    capitalEl.value = firstLetter + restChar;
}








// let pEls = document.getElementsByTagName("p")
// console.log(pEls);

// for (let i = 0; i < pEls.length; i++) {
//     let userInput = prompt("Enter your para.");
//     pEls[i].innerHTML = userInput;
// }

