// function moveForward () {
//     console.log("played")
// }

// let time = setTimeout(moveForward, 100);



// let lastPEl = document.getElementById("last-para");
// let allPara = document.getElementsByTagName("p");
let classSpecialEl = document.getElementsByClassName("special");
let isChanged = false;
// console.log(allPara[0].hidden = true);

// !==

function changeStyle() {
    if (!isChanged) {
        for (let i = 0; i < classSpecialEl.length; i++) {
            classSpecialEl[i].style.backgroundColor = "black";
            classSpecialEl[i].style.color = "white";
            classSpecialEl[i].style.fontSize = "32px";
            classSpecialEl[i].innerHTML = "This is para no. <br />" + i;
            isChanged = true;
        }
    } else {
        for (let i = 0; i < classSpecialEl.length; i++) {
            classSpecialEl[i].style.backgroundColor = "white";
            classSpecialEl[i].style.color = "black";
            classSpecialEl[i].style.fontSize = "16px";
            classSpecialEl[i].innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam tempora quisquam fuga dignissimos maxime nam explicabo, modi facilis ea voluptatibus ab ex adipisci impedit sequi incidunt consequatur facere delectus quis. lorem Talal Ahmed";
            isChanged = false;
        }
    }
}
// console.log("This is para no. \n" + 1);


setInterval(changeStyle, 1000);