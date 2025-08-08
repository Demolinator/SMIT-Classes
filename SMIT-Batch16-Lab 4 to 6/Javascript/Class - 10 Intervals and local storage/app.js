// let rightNow = new Date();
// let doomsDay = new Date("20 August, 2035");

// let todayTime = rightNow.getTime();
// let doomsDayTime = doomsDay.getTime();

// let timeLeft = (doomsDayTime - todayTime) / (1000 * 60 * 60 * 24);

// console.log(Math.floor(timeLeft));



// 24 hour
// 12 hour print in DOM


// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");

// let rightNow = new Date();

// let nowHours = rightNow.getHours();
// let nowMinutes = rightNow.getMinutes();
// let nowSeconds = rightNow.getSeconds();

// minutes.innerHTML = nowMinutes
// seconds.innerHTML = nowSeconds


// if (nowHours > 12) {
//     hours.innerHTML = nowHours - 12;
// }

// if (hours.innerHTML < 10) {
//     hours.innerHTML = "0" + (nowHours - 12);
// }




// let i = 0;

// function printName () {
//     if (i >= 10) {
//         clearInterval(myInterval);
//     }
//     console.log(i++);
// }

// let myInterval = setInterval(printName, 1000)



// 60 --
// 30


// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");

// let secondsTimer = 60;
// let minutesTimer = 2;

// function printName () {
//     if (secondsTimer <= 0) {
//         secondsTimer = 60;
//         minutesTimer--
//     }
//     if (minutesTimer <= 0) {
//         clearInterval(myInterval);
//     }
//     seconds.innerHTML = secondsTimer--;
//     minutes.innerHTML = minutesTimer;
// }

// let myInterval = setInterval(printName, 1000)



// setTimeout(function () {console.log("Hello  Talal")}, 5000);
// / setInterval();


let studentName = document.getElementById("student-name");
let studentNameEl = document.getElementById("name");


function printName () {
    localStorage.setItem("studentName", studentName.value);
    studentNameEl.innerHTML = localStorage.getItem("studentName");
}
studentNameEl.innerHTML = localStorage.getItem("studentName");








