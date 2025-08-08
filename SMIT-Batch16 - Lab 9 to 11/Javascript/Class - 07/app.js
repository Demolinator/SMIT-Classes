// let rightNow = new Date(); // todays date
// let doomsDay = new Date("20 july, 2035"); // doomsday date

// let doomsDayTime = doomsDay.getTime();
// let todayTime = rightNow.getTime();

// let leftDays = (doomsDayTime - todayTime) / (1000 * 60 * 60 * 24);

// console.log(Math.floor(leftDays));


// 24 
// Dom
// 12 hour



// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");


// let rightNow = new Date();

// let hoursNow = rightNow.getHours();
// let minutesNow = rightNow.getMinutes();
// let secondsNow = rightNow.getSeconds();


// hours = hours.innerHTML = hoursNow;
// // minutes = minutes.innerHTML = minutesNow;
// seconds = seconds.innerHTML = secondsNow;

// if (hoursNow > 12) {
//     hours = hours.innerHTML = hoursNow - 12;
// }

// if (minutesNow < 10) {
//     minutes = minutes.innerHTML = "0" + minutesNow;
// }




// let seconds = document.getElementById("seconds");
// let minutes = document.getElementById("minutes");

// let secondsTimer = 60;
// let minutesTimer = 0;

// function printNumbers () {
    //     seconds.innerHTML = secondsTimer--;
    //     if (secondsTimer === 0) {
        //         secondsTimer = 60;
        //         minutes.innerHTML = minutesTimer++;
        //     }
        // }
        
        
        // let timeInterval = setInterval(printNumbers, 100);
        


        
        
        
// 60
// 59
// 0









// let seconds = document.getElementById("name");
        
// setTimeout(function () {
//     seconds.innerHTML = "Hello";
// }, 5000);


// setInterval();





// localStorage.setItem();
// localStorage.getItem();

let seconds = document.getElementById("name");
let studentNameEl = document.getElementById("student-name");

function printName () {
    localStorage.setItem("studentName", studentNameEl.value);
    let stName = localStorage.getItem("studentName");
    
    seconds.innerHTML = stName;
}    

let stName = localStorage.getItem("studentName");
seconds.innerHTML = stName;







