// localStorage.setItem("studentName", "Talal");

// let storedName = localStorage.getItem("studentName");
// console.log(storedName);



let stdntName = document.getElementById("student-name");
let rollNo = document.getElementById("roll-no");
let allStudents = [];

function submit () {
    let student = {
        "studentName" : stdntName.value,
        "rollNo" : rollNo.value
    }

    let storedObj = localStorage.getItem("studentInfo");

    if (storedObj) {
        allStudents = JSON.parse(storedObj);
    }

    allStudents.push(student);
    localStorage.setItem("studentInfo", JSON.stringify(allStudents))
    
    console.log(JSON.parse(storedObj));
}