// let rightNow = new Date();
// let today = rightNow.getDay(); 0 - 6
// console.log(today);
// let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
// let todayStr = days[today];
// console.log(todayStr);


// let rightNow = new Date();

// let month = rightNow.getMonth(); // 0 - 11
// let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// let monthStr = months[month]; 

// console.log(monthStr);



// let rightNow = new Date(); // Date String

// let todayDate = rightNow.getDate(); // 8
// let thisYear = rightNow.getFullYear();// 2025
// let todayHours = rightNow.getHours();
// let todayMins = rightNow.getMinutes();
// let todaySeconds = rightNow.getSeconds();
// let todayMilisec = rightNow.getMilliseconds();
// let todayTimeZone = rightNow.getTimezoneOffset();
// console.log(todayTimeZone);







let rightNow = new Date();
let mubeenBirthDay = new Date("24 august 2026");

let birthdayTime = mubeenBirthDay.getTime();

let timeNow = rightNow.getTime();

console.log((birthdayTime - timeNow) / 1000 / 60 / 60 / 24);