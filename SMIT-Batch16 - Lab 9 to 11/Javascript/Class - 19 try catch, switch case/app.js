// class User {
//     constructor (userName, email, password) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }
//     isAdmin = false
// }


// class Admin extends User {
//     constructor (userName, email, password, adminPrivilage) {
//         super(userName, email, password)
//         this.adminPrivilage = adminPrivilage
//     }
//     adminDashboard = true;
// }

// let admin = new Admin("Talal Ahmed", "talal@gmail.com", "1234", "true");

// console.log(admin);




// Banking : Balance, secretKey, withdraw(), Deposit()


// function greet (userName = "Talal Ahmed") {
//     console.log("Hello " + userName)
// }

// greet("Mubeen Ul Islam");


// function add (a = 0, b = 0) {
//     return a + b
// }

// console.log(add(5, 5))


// function random () {
//     return Math.ceil(Math.random() * 6);
// }

// function rollDice (userNum = random()) {
//     console.log(userNum)
// }

// rollDice(5)








// Try Catch Explained


// console.log("1");

// undefinedFunction();

// console.log(2);


// try {
//     console.log("1");
//     // undefinedFunction();
// }
// catch (e) {
//     console.error(e);
// }
// finally {
//     console.log("2")
// }






// switch Case Explained

let days = 3;

switch (days) {
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
}




// if (days === 1) {
//     console.log("Monday")
// } else if (days === 2) {
//     console.log("tuesday")
// } else if (days === 3) {
//     console.log("wednesday")
// }

