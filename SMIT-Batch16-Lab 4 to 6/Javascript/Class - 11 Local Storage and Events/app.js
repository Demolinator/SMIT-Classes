// localStorage.setItem("studentName", "Talal");

// console.log(localStorage.getItem("studentName"));


// let stdntName = document.getElementById("student-name");
// let rollNo = document.getElementById("roll-no");
// let allStudents = [];


// function submit () {
//     let student = {
//         "studentName": stdntName.value,
//         "rollNo": rollNo.value
//     }

//     let savedStdnt = localStorage.getItem("studentInfo");

//     if (savedStdnt) {
//         allStudents.push(JSON.parse(savedStdnt));
//     }

//     allStudents.push(student);

//     localStorage.setItem("studentInfo", JSON.stringify(allStudents));
// }



let fruits = ["Apple", "Banana", "Kiwi"];

localStorage.setItem("fruits", JSON.stringify(fruits[2]));